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
import { annotations, type Annotation } from "../src/data/annotations";
import { extras } from "../src/data/extras";
import { annotationSchema, requiredFields } from "../src/data/schema";

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
  const unknownAnnotationIds = new Set(Object.keys(annotations));

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
        const leistung: Leistung = { id, gesetz, kategorie, ...e };
        if (annotation) leistung.annotation = annotation;
        attachExtras(leistung);
        leistungen.push(leistung);
        e.themenfelder?.forEach((t) => themenfelder.add(t));
        e.zielgruppen?.forEach((z) => zielgruppen.add(z));
      }
    }
  }

  // Merge hand-curated extras (not in upstream YAML).
  for (const e of extras) {
    const leistung: Leistung = { ...e };
    attachExtras(leistung);
    leistungen.push(leistung);
    gesetze.add(e.gesetz);
    e.themenfelder?.forEach((t) => themenfelder.add(t));
    e.zielgruppen?.forEach((z) => zielgruppen.add(z));
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

  const out = {
    leistungen,
    facets: {
      gesetze: [...gesetze].sort(),
      themenfelder: [...themenfelder].sort(),
      zielgruppen: [...zielgruppen].sort(),
    },
    meta: {
      source: SOURCE_URL,
      generatedAt: new Date().toISOString(),
      count: leistungen.length,
      annotatedCount,
      partialCount,
      commentaryCount,
      fieldCoverage,
    },
  };

  const dir = join(process.cwd(), "src", "data");
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "leistungen.json"), JSON.stringify(out, null, 2));

  writeTodo(leistungen, fieldCoverage);

  console.log(
    `Wrote ${leistungen.length} Leistungen — ${annotatedCount} fully annotated, ${partialCount} partial, ${leistungen.length - annotatedCount - partialCount} todo.`,
  );
  for (const f of annotationSchema) {
    const c = fieldCoverage[f.key];
    console.log(
      `  ${f.key.padEnd(8)} ok=${c.ok}  invalid=${c.invalid}  missing=${c.missing}`,
    );
  }

  if (unknownAnnotationIds.size > 0) {
    console.warn(
      `Warning: ${unknownAnnotationIds.size} annotation id(s) do not match any upstream entry: ${[...unknownAnnotationIds].join(", ")}`,
    );
  }

  console.log(
    `Commentary: ${commentaryCount} Leistung(en) mit Hintergrund-Text.`,
  );
  if (unknownCommentaryIds.size > 0) {
    console.warn(
      `Warning: ${unknownCommentaryIds.size} commentary file(s) do not match any Leistung id: ${[...unknownCommentaryIds].join(", ")}`,
    );
  }
};

const writeTodo = (
  leistungen: Leistung[],
  fieldCoverage: Record<
    string,
    { ok: number; invalid: number; missing: number }
  >,
) => {
  const byGesetz = new Map<string, Leistung[]>();
  for (const l of leistungen) {
    if (isFullyAnnotated(l.annotation)) continue;
    const list = byGesetz.get(l.gesetz) ?? [];
    list.push(l);
    byGesetz.set(l.gesetz, list);
  }

  const lines: string[] = [
    "# Annotation TODO",
    "",
    "Auto-generated from `scripts/build-data.ts`. Add entries to `src/data/annotations.ts`",
    "keyed by the `id` shown here. Field schema is declared in `src/data/schema.ts`.",
    "",
    `- **Total:** ${leistungen.length}`,
    `- **Fully annotated:** ${leistungen.filter((l) => isFullyAnnotated(l.annotation)).length}`,
    `- **Partial:** ${leistungen.filter((l) => isPartial(l.annotation)).length}`,
    `- **Open:** ${leistungen.filter((l) => !l.annotation).length}`,
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
  ];

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
