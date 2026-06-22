import { createHash } from "node:crypto";
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";
import { parse } from "yaml";
import {
  annotations,
  type Annotation,
  type Resource,
} from "../src/data/annotations";
import { benefits as benefitDefs } from "../src/data/benefits";
import { extras } from "../src/data/extras";
import { annotationSchema, requiredFields } from "../src/data/schema";
import { zielgruppenTags } from "../src/data/zielgruppen";
import { whoBySlug, whoTags, type WhoSlug } from "../src/data/who";
import {
  lebenslageBySlug,
  lebenslagen,
  type LebenslageSlug,
} from "../src/data/lebenslagen";

const SOURCE_URL =
  "https://raw.githubusercontent.com/ifo-institute/sozialleistungen/main/sozialleistungen.yml";

type RawEntry = {
  leistung: string;
  rechtsnorm: string;
  zielgruppen?: string[];
  themenfelder?: string[];
};

type RawYaml = Record<string, Record<string, RawEntry[]>>;

type Leistung = RawEntry & {
  id: string;
  gesetz: string;
  kategorie: string;
  benefitId?: string;
  annotation?: Annotation;
  commentary?: string;
};

type FieldStatus = "missing" | "invalid" | "ok";

const hashId = (s: string) =>
  createHash("sha1").update(s).digest("hex").slice(0, 10);

const evaluateField = (
  a: Annotation | undefined,
  key: (typeof annotationSchema)[number]["key"],
): { status: FieldStatus; error?: string } => {
  const value = a?.[key];
  const field = annotationSchema.find((f) => f.key === key)!;
  if (value === undefined || value === null || value === "") {
    return { status: "missing" };
  }
  const err = field.validate?.(value);
  if (err) return { status: "invalid", error: err };
  return { status: "ok" };
};

const isFullyAnnotated = (a: Annotation | undefined) =>
  !!a && requiredFields.every((k) => evaluateField(a, k).status === "ok");

const isPartial = (a: Annotation | undefined) => {
  if (!a) return false;
  if (isFullyAnnotated(a)) return false;
  return requiredFields.some((k) => evaluateField(a, k).status === "ok");
};

const loadCommentary = () => {
  const dir = join(process.cwd(), "src", "data", "commentary");
  const map = new Map<string, string>();
  if (!existsSync(dir)) return map;
  for (const file of readdirSync(dir)) {
    if (!file.endsWith(".md")) continue;
    const id = file.slice(0, -3);
    map.set(id, readFileSync(join(dir, file), "utf8"));
  }
  return map;
};

const main = async () => {
  console.log("Fetching", SOURCE_URL);
  const res = await fetch(SOURCE_URL);
  if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
  const text = await res.text();
  const raw = parse(text) as RawYaml;

  const commentary = loadCommentary();
  const unknownCommentaryIds = new Set(commentary.keys());

  const leistungen: Leistung[] = [];
  const gesetze = new Set<string>();
  const themenfelder = new Set<string>();
  const zielgruppen = new Set<string>();
  const tagSlugs = new Set<string>();
  const knownSlugs = new Set(zielgruppenTags.map((t) => t.slug));
  const invalidTagAssignments: { id: string; slugs: string[] }[] = [];
  const unknownAnnotationIds = new Set(Object.keys(annotations));

  const collectTags = (l: Leistung) => {
    const slugs = l.annotation?.zielgruppen;
    if (!slugs?.length) return;
    const bad: string[] = [];
    for (const s of slugs) {
      if (knownSlugs.has(s)) tagSlugs.add(s);
      else bad.push(s);
    }
    if (bad.length) invalidTagAssignments.push({ id: l.id, slugs: bad });
  };

  const attachExtras = (l: Leistung) => {
    const md = commentary.get(l.id);
    if (md) {
      l.commentary = md;
      unknownCommentaryIds.delete(l.id);
    }
  };

  for (const [gesetz, kategorien] of Object.entries(raw)) {
    gesetze.add(gesetz);
    for (const [kategorie, entries] of Object.entries(kategorien)) {
      for (const e of entries) {
        const id = hashId(`${gesetz}|${e.rechtsnorm}|${e.leistung}`);
        const annotation = annotations[id];
        if (annotation) unknownAnnotationIds.delete(id);
        const leistung: Leistung = {
          id,
          gesetz,
          kategorie,
          ...e,
        };
        if (annotation) leistung.annotation = annotation;
        leistung.benefitId = annotation?.benefitId;
        attachExtras(leistung);
        leistungen.push(leistung);
        e.themenfelder?.forEach((t) => themenfelder.add(t));
        e.zielgruppen?.forEach((z) => zielgruppen.add(z));
        collectTags(leistung);
      }
    }
  }

  // Merge hand-curated extras (not in upstream YAML).
  for (const e of extras) {
    const leistung: Leistung = { ...e };
    leistung.benefitId = e.annotation?.benefitId;
    attachExtras(leistung);
    leistungen.push(leistung);
    gesetze.add(e.gesetz);
    e.themenfelder?.forEach((t) => themenfelder.add(t));
    e.zielgruppen?.forEach((z) => zielgruppen.add(z));
    collectTags(leistung);
  }

  const annotatedCount = leistungen.filter((l) =>
    isFullyAnnotated(l.annotation),
  ).length;
  const partialCount = leistungen.filter((l) => isPartial(l.annotation)).length;

  const fieldCoverage = Object.fromEntries(
    annotationSchema.map((f) => {
      const ok = leistungen.filter(
        (l) => evaluateField(l.annotation, f.key).status === "ok",
      ).length;
      const invalid = leistungen.filter(
        (l) => evaluateField(l.annotation, f.key).status === "invalid",
      ).length;
      return [
        f.key,
        { ok, invalid, missing: leistungen.length - ok - invalid },
      ];
    }),
  );

  const commentaryCount = leistungen.filter((l) => l.commentary).length;

  const usedTagSlugs = zielgruppenTags
    .map((t) => t.slug)
    .filter((s) => tagSlugs.has(s));
  const taggedCount = leistungen.filter(
    (l) => l.annotation?.zielgruppen?.length,
  ).length;

  // --- Benefits: roll up the norm→benefit mapping into a benefit list ------
  const benefitDefById = new Map(benefitDefs.map((b) => [b.id, b]));
  const membersByBenefit = new Map<string, Leistung[]>();
  const unassignedNorms: string[] = [];
  const unknownBenefitRefs: { id: string; benefitId: string }[] = [];
  for (const l of leistungen) {
    if (!l.benefitId) {
      unassignedNorms.push(l.id);
      continue;
    }
    if (!benefitDefById.has(l.benefitId)) {
      unknownBenefitRefs.push({ id: l.id, benefitId: l.benefitId });
      continue;
    }
    const list = membersByBenefit.get(l.benefitId) ?? [];
    list.push(l);
    membersByBenefit.set(l.benefitId, list);
  }

  // WHO/WHEN: read directly from benefits.ts (single source of truth).
  const unassignedWho: string[] = [];
  const unassignedWhen: string[] = [];
  const benefitsOut = benefitDefs.map((b) => {
    const members = membersByBenefit.get(b.id) ?? [];
    const zg = new Set<string>();
    const tf = new Set<string>();
    for (const m of members) {
      m.annotation?.zielgruppen?.forEach((z) => zg.add(z));
      m.themenfelder?.forEach((t) => tf.add(t));
    }
    const who = b.who;
    const when = b.when;
    if (!who || !whoBySlug[who]) unassignedWho.push(b.id);
    if (!when || !lebenslageBySlug[when]) unassignedWhen.push(b.id);
    // Benefit-level commentary lives at commentary/{benefitId}.md (slug-named,
    // so it never collides with the hash-named norm files).
    const benefitCommentary = commentary.get(b.id);
    if (benefitCommentary) unknownCommentaryIds.delete(b.id);
    return {
      id: b.id,
      title: b.title,
      summary: b.summary,
      // Primary navigation axes (single-valued). See docs/tagging-model.md.
      who: who as WhoSlug,
      when: when as LebenslageSlug,
      // All norms of a benefit share a Gesetz, so this is well-defined.
      gesetz: members[0]?.gesetz,
      normIds: members.map((m) => m.id),
      // Demoted to ifo-provenance (kept for the home viz / norm explorer).
      themenfelder: [...tf].sort(),
      zielgruppen: [...zg].sort(),
      normCount: members.length,
      // Editorial layer (curated per benefit). Legal-norm link stays per norm.
      resources: b.resources ?? [],
      commentary: benefitCommentary,
    };
  });
  const whoHistogram = Object.fromEntries(
    whoTags.map((t) => [
      t.slug,
      benefitsOut.filter((b) => b.who === t.slug).length,
    ]),
  );
  const whenHistogram = Object.fromEntries(
    lebenslagen.map((l) => [
      l.slug,
      benefitsOut.filter((b) => b.when === l.slug).length,
    ]),
  );
  const usedWho = whoTags
    .map((t) => t.slug)
    .filter((s) => whoHistogram[s] > 0);
  const usedWhen = lebenslagen
    .map((l) => l.slug)
    .filter((s) => whenHistogram[s] > 0);
  const emptyBenefits = benefitsOut.filter((b) => b.normCount === 0);
  const benefitCommentaryCount = benefitsOut.filter((b) => b.commentary).length;
  const benefitResourceCount = benefitsOut.filter(
    (b) => b.resources.length,
  ).length;

  const out = {
    leistungen,
    benefits: benefitsOut,
    facets: {
      gesetze: [...gesetze].sort(),
      themenfelder: [...themenfelder].sort(),
      zielgruppen: [...zielgruppen].sort(),
      zielgruppenTags: usedTagSlugs,
      // Primary navigation facets (ordered: WHO by priority, WHEN by group).
      who: usedWho,
      when: usedWhen,
    },
    meta: {
      source: SOURCE_URL,
      generatedAt: new Date().toISOString(),
      count: leistungen.length,
      benefitCount: benefitsOut.length,
      unassignedCount: unassignedNorms.length,
      unassignedWhoCount: unassignedWho.length,
      unassignedWhenCount: unassignedWhen.length,
      annotatedCount,
      partialCount,
      commentaryCount,
      benefitCommentaryCount,
      benefitResourceCount,
      taggedCount,
      whoHistogram,
      whenHistogram,
      fieldCoverage,
    },
  };

  const dir = join(process.cwd(), "src", "data");
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "leistungen.json"), JSON.stringify(out, null, 2));

  writeTodo(leistungen, benefitsOut, fieldCoverage);

  const emptyWhen = lebenslagen.filter((l) => !whenHistogram[l.slug]);

  printReport({
    leistungen,
    benefitsOut,
    annotatedCount,
    partialCount,
    fieldCoverage,
    usedWho,
    usedWhen,
    taggedCount,
    usedTagSlugs,
    commentaryCount,
    benefitCommentaryCount,
    benefitResourceCount,
    unassignedNorms,
    unknownBenefitRefs,
    emptyBenefits,
    unknownAnnotationIds,
    unassignedWho,
    unassignedWhen,
    emptyWhen,
    invalidTagAssignments,
    unknownCommentaryIds,
  });
};

/** Caps a list for display, noting how many entries were left out. */
const preview = (items: string[], max = 5) =>
  items.length <= max
    ? items.join(", ")
    : `${items.slice(0, max).join(", ")} … (+${items.length - max} weitere)`;

const printReport = (r: {
  leistungen: Leistung[];
  benefitsOut: BenefitOut[];
  annotatedCount: number;
  partialCount: number;
  fieldCoverage: Record<string, { ok: number; invalid: number; missing: number }>;
  usedWho: string[];
  usedWhen: string[];
  taggedCount: number;
  usedTagSlugs: string[];
  commentaryCount: number;
  benefitCommentaryCount: number;
  benefitResourceCount: number;
  unassignedNorms: string[];
  unknownBenefitRefs: { id: string; benefitId: string }[];
  emptyBenefits: BenefitOut[];
  unknownAnnotationIds: Set<string>;
  unassignedWho: string[];
  unassignedWhen: string[];
  emptyWhen: { slug: string }[];
  invalidTagAssignments: { id: string; slugs: string[] }[];
  unknownCommentaryIds: Set<string>;
}) => {
  const sections: { title: string; lines: string[] }[] = [];
  const warnings: string[] = [];
  const section = (title: string, lines: string[]) =>
    sections.push({ title, lines });
  const warn = (msg: string) => warnings.push(msg);

  const todoCount =
    r.leistungen.length - r.annotatedCount - r.partialCount;
  section("Leistungen", [
    `${r.leistungen.length} total — ${r.annotatedCount} vollständig annotiert, ${r.partialCount} teilweise, ${todoCount} offen`,
  ]);

  section("Benefits", [
    `${r.benefitsOut.length} aus ${r.leistungen.length} Rechtsnormen (Ø ${(
      r.leistungen.length / r.benefitsOut.length
    ).toFixed(1)} Normen/Benefit)`,
  ]);

  const keyWidth = Math.max(...annotationSchema.map((f) => f.key.length));
  section(
    "Field coverage",
    annotationSchema.map((f) => {
      const c = r.fieldCoverage[f.key];
      return `${f.key.padEnd(keyWidth)}  ok=${c.ok}  invalid=${c.invalid}  missing=${c.missing}`;
    }),
  );

  section("WHO × WHEN", [
    `${r.benefitsOut.length} Benefits — ${r.usedWho.length}/${whoTags.length} WHO, ${r.usedWhen.length}/${lebenslagen.length} WHEN im Einsatz`,
  ]);

  section("Zielgruppen-Tags (ifo, demoted)", [
    `${r.taggedCount}/${r.leistungen.length} Leistungen getaggt, ${r.usedTagSlugs.length}/${zielgruppenTags.length} Tags im Einsatz`,
  ]);

  section("Commentary", [
    `${r.commentaryCount} Rechtsnorm(en) mit Absatz-Text`,
    `${r.benefitCommentaryCount}/${r.benefitsOut.length} Benefits mit Kommentar`,
    `${r.benefitResourceCount}/${r.benefitsOut.length} Benefits mit Quellen`,
  ]);

  if (r.unassignedNorms.length) {
    warn(`${r.unassignedNorms.length} Rechtsnorm(en) ohne benefitId.`);
  }
  if (r.unknownBenefitRefs.length) {
    warn(
      `${r.unknownBenefitRefs.length} benefitId(s) ohne Eintrag in benefits.ts: ${preview(r.unknownBenefitRefs.map((b) => b.benefitId))}`,
    );
  }
  if (r.emptyBenefits.length) {
    warn(
      `${r.emptyBenefits.length} Benefit(s) ohne zugeordnete Norm: ${preview(r.emptyBenefits.map((b) => b.id))}`,
    );
  }
  if (r.unknownAnnotationIds.size) {
    warn(
      `${r.unknownAnnotationIds.size} annotation id(s) ohne passenden Upstream-Eintrag: ${preview([...r.unknownAnnotationIds])}`,
    );
  }
  if (r.unassignedWho.length || r.unassignedWhen.length) {
    warn(
      `${r.unassignedWho.length} Benefit(s) ohne gültiges WHO, ${r.unassignedWhen.length} ohne gültiges WHEN.`,
    );
  }
  if (r.emptyWhen.length) {
    warn(
      `WHEN-Werte ohne Benefit (Kuration): ${preview(r.emptyWhen.map((l) => l.slug))}`,
    );
  }
  if (r.invalidTagAssignments.length) {
    warn(
      `${r.invalidTagAssignments.length} Leistung(en) referenzieren unbekannte zielgruppen-Slugs: ${preview(r.invalidTagAssignments.map((a) => `${a.id} (${a.slugs.join(", ")})`), 3)}`,
    );
  }
  if (r.unknownCommentaryIds.size) {
    warn(
      `${r.unknownCommentaryIds.size} commentary-Datei(en) ohne passende Leistung: ${preview([...r.unknownCommentaryIds])}`,
    );
  }

  console.log(
    `\nWrote ${r.leistungen.length} Leistungen → src/data/leistungen.json\n`,
  );
  for (const { title, lines } of sections) {
    console.log(title);
    for (const l of lines) console.log(`  ${l}`);
    console.log("");
  }
  if (warnings.length) {
    console.log(`Warnings (${warnings.length})`);
    for (const w of warnings) console.log(`  ⚠ ${w}`);
  } else {
    console.log("No warnings.");
  }
};

type BenefitOut = {
  id: string;
  title: string;
  summary: string;
  who: WhoSlug;
  when: LebenslageSlug;
  gesetz?: string;
  normIds: string[];
  themenfelder: string[];
  zielgruppen: string[];
  normCount: number;
  resources: Resource[];
  commentary?: string;
};

const writeTodo = (
  leistungen: Leistung[],
  benefits: BenefitOut[],
  fieldCoverage: Record<
    string,
    { ok: number; invalid: number; missing: number }
  >,
) => {
  const byId = new Map(leistungen.map((l) => [l.id, l]));
  const memberNorms = (b: BenefitOut) =>
    b.normIds
      .map((id) => byId.get(id))
      .filter((l): l is Leistung => Boolean(l));

  const commentaryDone = benefits.filter((b) => b.commentary);
  const commentaryTodo = benefits.filter((b) => !b.commentary);
  const resourcesDone = benefits.filter((b) => b.resources.length);
  const resourcesTodo = benefits.filter((b) => !b.resources.length);

  const lines: string[] = [
    "# Curation TODO",
    "",
    "Auto-generated by `scripts/build-data.ts` — do not edit by hand.",
    "Two editorial layers:",
    "",
    "- **Benefit** (per Leistung) — `commentary` in `src/data/commentary/{benefitId}.md` and editorial `resources` in `src/data/benefits.ts`. Write **once per benefit**, drawing on its member paragraphs.",
    "- **Annotation** (per Rechtsnorm) — `title` / `summary` / `url` in `src/data/annotations.ts`. The `url` is the legal-norm link: a *special resource* that stays on the norm and is never migrated up.",
    "",
    "## Summary",
    "",
    `- **Benefits:** ${benefits.length} — ${commentaryDone.length} mit Kommentar, ${resourcesDone.length} mit Quellen`,
    `- **Rechtsnormen:** ${leistungen.length} — ${leistungen.filter((l) => isFullyAnnotated(l.annotation)).length} vollständig annotiert, ${leistungen.filter((l) => isPartial(l.annotation)).length} teilweise, ${leistungen.filter((l) => !l.annotation).length} offen`,
    "",
  ];

  const groupBenefits = (items: BenefitOut[]) => {
    const m = new Map<string, BenefitOut[]>();
    for (const b of items) {
      const key = b.gesetz ?? "—";
      const list = m.get(key) ?? [];
      list.push(b);
      m.set(key, list);
    }
    return m;
  };

  // --- Benefit commentary -------------------------------------------------
  lines.push(
    `# Benefit-Kommentar (${commentaryDone.length}/${benefits.length})`,
    "",
    "Schreibe je Benefit eine Datei `src/data/commentary/{benefitId}.md` —",
    "zusammengeführt aus den Absatz-Kommentaren der Mitglieds-Normen.",
    "Die aufgelisteten `.md`-Dateien sind die Quelle; `_(neu schreiben)_` heißt: keine Vorlage vorhanden.",
    "",
  );
  if (commentaryDone.length) {
    lines.push(
      `_Erledigt (${commentaryDone.length}):_ ${commentaryDone
        .map((b) => `\`${b.id}\``)
        .join(", ")}`,
      "",
    );
  }
  const ctGrouped = groupBenefits(commentaryTodo);
  for (const gesetz of [...ctGrouped.keys()].sort()) {
    const group = ctGrouped.get(gesetz)!;
    lines.push(`## ${gesetz} (${group.length})`, "");
    for (const b of group) {
      const members = memberNorms(b);
      const sources = members.filter((m) => m.commentary);
      lines.push(
        `- [ ] \`${b.id}\` — **${b.title}** _(${members.length} Norm(en), ${sources.length} Quelle(n))_`,
      );
      for (const m of sources) {
        lines.push(`  - \`src/data/commentary/${m.id}.md\` — ${m.rechtsnorm}`);
      }
      if (!sources.length) lines.push("  - _(neu schreiben)_");
    }
    lines.push("");
  }

  // --- Benefit resources --------------------------------------------------
  lines.push(
    `# Benefit-Quellen (${resourcesDone.length}/${benefits.length})`,
    "",
    "Trage kuratierte Links als `resources` am Benefit in `src/data/benefits.ts` ein.",
    "Der Gesetzes-Link bleibt pro Norm in `annotations.ts` (`url`) — special resource, nicht hierher übernehmen.",
    "Aufgelistet: Mitglieds-Normen mit vorhandenen `resources` als Vorlage.",
    "",
  );
  if (resourcesDone.length) {
    lines.push(
      `_Erledigt (${resourcesDone.length}):_ ${resourcesDone
        .map((b) => `\`${b.id}\``)
        .join(", ")}`,
      "",
    );
  }
  const rtGrouped = groupBenefits(resourcesTodo);
  for (const gesetz of [...rtGrouped.keys()].sort()) {
    const group = rtGrouped.get(gesetz)!;
    lines.push(`## ${gesetz} (${group.length})`, "");
    for (const b of group) {
      const members = memberNorms(b);
      const withRes = members.filter((m) => m.annotation?.resources?.length);
      const total = withRes.reduce(
        (n, m) => n + (m.annotation?.resources?.length ?? 0),
        0,
      );
      lines.push(
        `- [ ] \`${b.id}\` — **${b.title}** _(${total} Quelle(n) aus ${withRes.length} Norm(en))_`,
      );
      for (const m of withRes) {
        lines.push(
          `  - \`${m.id}\` ${m.rechtsnorm} — ${m.annotation!.resources!.length} resources`,
        );
      }
      if (!withRes.length) lines.push("  - _(neu recherchieren)_");
    }
    lines.push("");
  }

  // --- Annotation fields (per Rechtsnorm) ---------------------------------
  const byGesetz = new Map<string, Leistung[]>();
  for (const l of leistungen) {
    if (isFullyAnnotated(l.annotation)) continue;
    const list = byGesetz.get(l.gesetz) ?? [];
    list.push(l);
    byGesetz.set(l.gesetz, list);
  }

  lines.push(
    "# Annotation-Felder pro Rechtsnorm",
    "",
    "`title` / `summary` / `url` in `src/data/annotations.ts`, keyed by `id`. Schema: `src/data/schema.ts`.",
    "",
    "## Field coverage",
    "",
    "| Field | OK | Invalid | Missing |",
    "| --- | ---: | ---: | ---: |",
    ...annotationSchema.map((f) => {
      const c = fieldCoverage[f.key];
      return `| \`${f.key}\` | ${c.ok} | ${c.invalid} | ${c.missing} |`;
    }),
    "",
  );

  for (const gesetz of [...byGesetz.keys()].sort()) {
    const items = byGesetz.get(gesetz)!;
    lines.push(`## ${gesetz} (${items.length})`, "");
    for (const l of items) {
      const issues = annotationSchema
        .map((f) => {
          const r = evaluateField(l.annotation, f.key);
          if (r.status === "ok") return null;
          if (r.status === "missing") return `missing ${f.key}`;
          return `${f.key}: ${r.error}`;
        })
        .filter(Boolean)
        .join("; ");
      lines.push(
        `- [ ] \`${l.id}\` — ${l.rechtsnorm} — ${truncate(l.leistung, 90)} _(${issues})_`,
      );
    }
    lines.push("");
  }

  writeFileSync(join(process.cwd(), "TODO.md"), lines.join("\n"));
};

const truncate = (s: string, n: number) =>
  s.length > n ? s.slice(0, n - 1) + "…" : s;

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
