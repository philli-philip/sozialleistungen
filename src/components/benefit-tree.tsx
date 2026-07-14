import { useMemo, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  Accessibility,
  ArrowRight,
  Baby,
  Briefcase,
  ChevronRight,
  FoldVertical,
  Globe,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Landmark,
  LifeBuoy,
  ScrollText,
  Sparkles,
  UnfoldVertical,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";
import { benefits, type Benefit } from "@/lib/data";
import { whoTags, type WhoSlug } from "@/data/who";
import { lebenslagen, type LebenslageSlug } from "@/data/lebenslagen";
import { gesetzStyle } from "@/lib/gesetz-colors";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- *
 * Anspruchsbaum — a folder tree over the same benefits as the list view.
 *
 * Reading an open path top-to-bottom forms a first-person claim sentence, the
 * folder titles chained by "…":
 *
 *   Ich bin … ein Geflüchteter oder Asylsuchender … und arbeitslos &
 *   arbeitssuchend  →  Potenzialanalyse für Asylsuchende
 *
 * Three levels: Root ("Ich bin") → WHO (who I am) → WHEN (what's going on) →
 * the benefits that follow. Every folder opens independently (state is a Set
 * of node ids), so any number can be open at once — or all via the toolbar.
 *
 * NOTE: the WHO axis is still coarse — "Teil einer Familie mit Kindern" alone
 * lumps 50+ benefits together. Sub-grouping the broad WHOs is a follow-up; for
 * now the flat WHO → WHEN split keeps the sentence idea legible.
 * -------------------------------------------------------------------------- */

const WHO_ICON: Record<WhoSlug, LucideIcon> = {
  erwerbstaetige: Briefcase,
  beamte: Landmark,
  selbststaendige: Sparkles,
  familie: Baby,
  senior: Users,
  bildung: GraduationCap,
  behinderung: Accessibility,
  pflegebeduerftige: HeartPulse,
  "pflegende-angehoerige": HandHeart,
  alle: Globe,
  gefluechtete: LifeBuoy,
};

/** WHO as a first-person predicate — the bit after "Ich bin …". */
const WHO_SELF: Record<WhoSlug, string> = {
  gefluechtete: "ein Geflüchteter oder Asylsuchender",
  behinderung: "ein Mensch mit Behinderung",
  pflegebeduerftige: "pflegebedürftig",
  "pflegende-angehoerige": "ein pflegender Angehöriger",
  beamte: "Beamter oder Soldat",
  familie: "Teil einer Familie mit Kindern",
  bildung: "Studierender oder Azubi",
  senior: "Senior oder Rentner",
  selbststaendige: "selbstständig",
  erwerbstaetige: "erwerbstätig",
  alle: "Bürger in Deutschland",
};

/** WHEN as a first-person state — the bit after "… und". */
const WHEN_SELF: Record<LebenslageSlug, string> = {
  "schwangerschaft-geburt": "schwanger oder frisch entbunden",
  "kind-familie": "mitten in der Kindererziehung",
  kinderbetreuung: "auf Kinderbetreuung angewiesen",
  "alleinerziehend-unterhalt": "alleinerziehend",
  ausbildung: "in Ausbildung",
  studium: "im Studium",
  "weiterbildung-aufstieg": "in Weiterbildung",
  arbeitslosigkeit: "arbeitslos & arbeitssuchend",
  "lohnausfall-im-job": "von Lohnausfall betroffen",
  "selbststaendigkeit-gruendung": "gerade am Gründen",
  "krankheit-behandlung": "krank oder in Behandlung",
  unfall: "nach einem Unfall",
  "behinderung-teilhabe": "auf Teilhabe angewiesen",
  rehabilitation: "in Rehabilitation",
  "pflegebeduerftig-werden": "pflegebedürftig geworden",
  "angehoerige-pflegen": "am Pflegen eines Angehörigen",
  existenzsicherung: "knapp bei Kasse",
  wohnen: "auf Wohnhilfe angewiesen",
  "schulden-recht-beratung": "verschuldet oder im Rechtsstreit",
  "alter-ruhestand": "im Ruhestand",
  "tod-hinterbliebene": "Hinterbliebener eines Angehörigen",
  "opfer-gewalt-krieg": "Opfer von Gewalt oder Krieg",
  "flucht-asyl": "auf der Flucht oder im Asylverfahren",
};

// --- Tree shape ------------------------------------------------------------

type WhenNode = { slug: LebenslageSlug; items: Benefit[] };
type WhoNode = { slug: WhoSlug; whens: WhenNode[]; count: number };

/** Canonical WHEN order, so every WHO lists its situations the same way. */
const WHEN_ORDER: Record<string, number> = Object.fromEntries(
  lebenslagen.map((l, i) => [l.slug, i]),
);

function buildTree(all: Benefit[]): { whos: WhoNode[]; total: number } {
  // who → when → benefits
  const byWho = new Map<string, Map<string, Benefit[]>>();
  for (const b of all) {
    let whens = byWho.get(b.who);
    if (!whens) byWho.set(b.who, (whens = new Map()));
    const list = whens.get(b.when);
    if (list) list.push(b);
    else whens.set(b.when, [b]);
  }

  // whoTags order = the documented priority order (specific → general).
  const whos: WhoNode[] = [];
  for (const { slug } of whoTags) {
    const whenMap = byWho.get(slug);
    if (!whenMap) continue;
    const whens: WhenNode[] = [...whenMap.entries()]
      .map(([when, items]) => ({
        slug: when as LebenslageSlug,
        items: items.sort((a, b) => a.title.localeCompare(b.title, "de")),
      }))
      .sort((a, b) => (WHEN_ORDER[a.slug] ?? 99) - (WHEN_ORDER[b.slug] ?? 99));
    const count = whens.reduce((n, w) => n + w.items.length, 0);
    if (count > 0) whos.push({ slug, whens, count });
  }
  return { whos, total: all.length };
}

/** Every folder node id (root + whos + whens) — leaves excluded, so "expand
 *  all" reveals the whole structure without mounting 331 previews. */
function allFolderIds(whos: WhoNode[]): string[] {
  const ids = ["root"];
  for (const w of whos) {
    ids.push(`w:${w.slug}`);
    for (const t of w.whens) ids.push(`t:${w.slug}:${t.slug}`);
  }
  return ids;
}

// --- Building blocks -------------------------------------------------------

/** Lazy, animated collapse. Children mount on first open and then stay mounted
 *  (so re-opening is instant and the height transition works both ways); the
 *  whole subtree simply never renders until its parent is first opened. */
function Collapse({ open, children }: { open: boolean; children: ReactNode }) {
  const [everOpened, setEverOpened] = useState(open);
  if (open && !everOpened) setEverOpened(true);
  return (
    <div className="tree-collapse" data-open={open}>
      <div className="tree-collapse-inner">{everOpened ? children : null}</div>
    </div>
  );
}

/** The floating "…" that chains the folder titles into one sentence. */
function Ellipsis() {
  return (
    <span className="tree-float select-none text-muted-foreground/70" aria-hidden>
      …
    </span>
  );
}

/** A faint connective word ("und") — the sentence glue. */
function Connector({ children }: { children: ReactNode }) {
  return <span className="italic text-muted-foreground">{children}</span>;
}

/** Count pill shown at the right edge of every folder row. */
function Count({ n }: { n: number }) {
  return (
    <span className="ml-auto shrink-0 rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium tabular-nums text-muted-foreground">
      {n}
    </span>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <ChevronRight
      className={cn(
        "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300",
        open && "rotate-90 text-foreground",
      )}
      strokeWidth={2}
    />
  );
}

// --- The recursive levels --------------------------------------------------

type NodeProps = {
  isOpen: (id: string) => boolean;
  toggle: (id: string) => void;
};

/** A benefit ("file") — the payoff the sentence builds toward. The row is just
 *  the title; clicking expands the *same* card downward to reveal its plain-
 *  language description (no nested sub-item, no repeated claim sentence). */
function BenefitLeaf({
  benefit,
  open,
  onToggle,
  index,
}: {
  benefit: Benefit;
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <li
      className="tree-rise"
      style={{ animationDelay: `${Math.min(index, 12) * 22}ms` }}
    >
      <div
        className={cn(
          "tree-row rounded-lg border bg-card",
          open ? "border-primary/40" : "hover:border-primary/30",
        )}
      >
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className="flex w-full items-center gap-2 px-3 py-2 text-left"
        >
          <Chevron open={open} />
          <ScrollText
            className="h-4 w-4 shrink-0 text-primary/70"
            strokeWidth={1.5}
          />
          <span className="min-w-0 flex-1 truncate text-sm font-medium">
            {benefit.title}
          </span>
          <span
            className="shrink-0 rounded px-1.5 py-0.5 text-[10px] font-medium"
            style={gesetzStyle(benefit.gesetz)}
          >
            {benefit.gesetz}
          </span>
        </button>

        <Collapse open={open}>
          {/* The card itself grows — the description takes the lead. */}
          <div className="pb-3 pl-9 pr-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {benefit.summary}
            </p>
            <div className="mt-3 flex items-center gap-3">
              <Link
                to="/leistungen/$benefitId"
                params={{ benefitId: benefit.id }}
                className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline underline-offset-2"
              >
                Zur Leistung
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
              </Link>
              <span className="text-[10px] text-muted-foreground">
                {benefit.normCount}{" "}
                {benefit.normCount === 1 ? "Rechtsnorm" : "Rechtsnormen"}
              </span>
            </div>
          </div>
        </Collapse>
      </div>
    </li>
  );
}

/** Wraps a leaf with its own local open state — benefit cards expand
 *  independently of the folder Set (they aren't part of "expand all"). */
function BenefitLeafHost({
  benefit,
  index,
}: {
  benefit: Benefit;
  index: number;
}) {
  const [open, setOpen] = useState(true);
  return (
    <BenefitLeaf
      benefit={benefit}
      open={open}
      onToggle={() => setOpen((v) => !v)}
      index={index}
    />
  );
}

function WhenFolder({
  who,
  when,
  isOpen,
  toggle,
}: { who: WhoSlug; when: WhenNode } & NodeProps) {
  const id = `t:${who}:${when.slug}`;
  const open = isOpen(id);
  return (
    <li>
      <button
        type="button"
        onClick={() => toggle(id)}
        aria-expanded={open}
        className={cn(
          "tree-row flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left",
          open ? "bg-secondary" : "hover:bg-secondary/60",
        )}
      >
        <Chevron open={open} />
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />
        <span className="min-w-0 flex-1 truncate text-sm">
          <Ellipsis /> <Connector>und</Connector>{" "}
          <span className="font-medium">{WHEN_SELF[when.slug]}</span>
        </span>
        <Count n={when.items.length} />
      </button>
      <Collapse open={open}>
        <ul className="ml-4 mt-1 space-y-1 border-l pl-3">
          {when.items.map((b, i) => (
            <BenefitLeafHost key={b.id} benefit={b} index={i} />
          ))}
        </ul>
      </Collapse>
    </li>
  );
}

function WhoFolder({ who, isOpen, toggle }: { who: WhoNode } & NodeProps) {
  const id = `w:${who.slug}`;
  const open = isOpen(id);
  const Icon = WHO_ICON[who.slug];
  return (
    <li>
      <button
        type="button"
        onClick={() => toggle(id)}
        aria-expanded={open}
        className={cn(
          "tree-row flex w-full items-center gap-2.5 rounded-lg border bg-card px-3 py-2.5 text-left",
          open ? "border-primary/40" : "hover:border-primary/30",
        )}
      >
        <Chevron open={open} />
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
          <Icon className="h-4 w-4" strokeWidth={1.5} />
        </span>
        <span className="min-w-0 flex-1 truncate">
          <Ellipsis />{" "}
          <span className="font-medium">{WHO_SELF[who.slug]}</span>
        </span>
        <Count n={who.count} />
      </button>
      <Collapse open={open}>
        <ul className="ml-4 mt-1 space-y-1 border-l pl-3">
          {who.whens.map((w) => (
            <WhenFolder
              key={w.slug}
              who={who.slug}
              when={w}
              isOpen={isOpen}
              toggle={toggle}
            />
          ))}
        </ul>
      </Collapse>
    </li>
  );
}

// --- Public component ------------------------------------------------------

export function BenefitTree() {
  const { whos, total } = useMemo(() => buildTree(benefits), []);
  const folderIds = useMemo(() => allFolderIds(whos), [whos]);

  // Parallel-open state: any set of folders can be open at once. Root starts
  // open so the WHO list is visible on first paint.
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set(["root"]));
  const isOpen = (id: string) => openIds.has(id);
  const toggle = (id: string) =>
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const rootOpen = isOpen("root");
  const allOpen = openIds.size >= folderIds.length;
  const expandAll = () => setOpenIds(new Set(folderIds));
  const collapseAll = () => setOpenIds(new Set(["root"]));

  return (
    <div className="mt-6" style={{ perspective: "1600px" }}>
      <div className="mb-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
        <div className="ml-auto flex items-center gap-1.5">
          <button
            type="button"
            onClick={expandAll}
            disabled={allOpen}
            className="inline-flex items-center gap-1 rounded-md border bg-card px-2.5 py-1.5 transition-colors hover:bg-muted disabled:opacity-40"
          >
            <UnfoldVertical className="h-3.5 w-3.5" strokeWidth={1.5} />
            Alle öffnen
          </button>
          <button
            type="button"
            onClick={collapseAll}
            className="inline-flex items-center gap-1 rounded-md border bg-card px-2.5 py-1.5 transition-colors hover:bg-muted"
          >
            <FoldVertical className="h-3.5 w-3.5" strokeWidth={1.5} />
            Schließen
          </button>
        </div>
      </div>

      {/* Root — the sentence opener. */}
      <button
        type="button"
        onClick={() => toggle("root")}
        aria-expanded={rootOpen}
        className={cn(
          "tree-row flex w-full items-center gap-3 rounded-xl border bg-gradient-to-br from-card to-secondary/40 px-4 py-3.5 text-left shadow-sm",
          rootOpen ? "border-primary/40" : "hover:border-primary/30",
        )}
      >
        <Chevron open={rootOpen} />
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm">
          <User className="h-5 w-5" strokeWidth={1.5} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-base font-semibold tracking-tight">
            Ich bin …
          </span>
          <span className="block text-xs text-muted-foreground">
            {total} Leistungen — wähle, wer du bist
          </span>
        </span>
        <Count n={total} />
      </button>

      <Collapse open={rootOpen}>
        <ul className="ml-4 mt-2 space-y-1.5 border-l pl-3">
          {whos.map((w) => (
            <WhoFolder key={w.slug} who={w} isOpen={isOpen} toggle={toggle} />
          ))}
        </ul>
      </Collapse>
    </div>
  );
}
