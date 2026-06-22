/**
 * WHO — the primary target population of a benefit.
 *
 * One of the two navigational axes (see `docs/tagging-model.md`). Each benefit
 * holds **exactly one** WHO value; the person browsing may match several. The
 * array order is the **tie-break priority**: when a benefit could fit more than
 * one population, the earliest (most specific) wins. `alle` is last — it means
 * "no identity gates this; the WHEN (situation) defines eligibility", so the WHO
 * question is not even asked.
 *
 * `absorbs` records the old `zielgruppen.ts` slugs each bucket replaces; it is
 * what `scripts/seed-who-when.ts` uses to migrate the legacy per-norm tags.
 */

export type WhoSlug =
  | "gefluechtete"
  | "behinderung"
  | "pflegebeduerftige"
  | "pflegende-angehoerige"
  | "beamte"
  | "familie"
  | "bildung"
  | "senior"
  | "selbststaendige"
  | "erwerbstaetige"
  | "alle";

export type WhoTag = {
  slug: WhoSlug;
  label: string;
  /** Legacy `zielgruppen.ts` slugs this bucket absorbs (seed migration only). */
  absorbs: string[];
};

/** Ordered by tie-break priority (index 0 = most specific, wins clashes). */
export const whoTags: WhoTag[] = [
  { slug: "gefluechtete", label: "Geflüchtete & Asylsuchende", absorbs: ["gefluechtete"] },
  { slug: "behinderung", label: "Menschen mit Behinderung", absorbs: ["behinderung"] },
  { slug: "pflegebeduerftige", label: "Pflegebedürftige", absorbs: ["pflegebeduerftige"] },
  { slug: "pflegende-angehoerige", label: "Pflegende Angehörige", absorbs: ["pflegende-angehoerige"] },
  { slug: "beamte", label: "Beamte & Soldaten", absorbs: ["beamte"] },
  {
    slug: "familie",
    label: "Familien & Kinder",
    absorbs: ["eltern", "alleinerziehende", "kleinkinder", "jugendliche"],
  },
  { slug: "bildung", label: "Studierende & Auszubildende", absorbs: ["studierende", "azubis"] },
  { slug: "senior", label: "Senior:innen & Rentner:innen", absorbs: ["senior"] },
  { slug: "selbststaendige", label: "Selbstständige & Gründer:innen", absorbs: ["selbststaendige"] },
  { slug: "erwerbstaetige", label: "Erwerbstätige (Arbeitnehmer:innen)", absorbs: ["arbeitnehmer"] },
  { slug: "alle", label: "Alle / Allgemeinheit", absorbs: [] },
];

export const whoBySlug: Record<string, WhoTag> = Object.fromEntries(
  whoTags.map((t) => [t.slug, t]),
);

/** Priority index of a WHO slug (lower = more specific). */
export const whoPriority: Record<string, number> = Object.fromEntries(
  whoTags.map((t, i) => [t.slug, i]),
);

export const whoLabel = (slug: string): string => whoBySlug[slug]?.label ?? slug;

/** Old-slug → WHO bucket, derived from `absorbs`. Situation-like old slugs
 * (schwangere/arbeitslose/kranke/hinterbliebene/opfer) are intentionally absent:
 * they map to WHEN, not WHO. */
export const oldSlugToWho: Record<string, WhoSlug> = Object.fromEntries(
  whoTags.flatMap((t) => t.absorbs.map((old) => [old, t.slug])),
);
