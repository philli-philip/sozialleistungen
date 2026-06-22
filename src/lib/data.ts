import raw from "../data/leistungen.json";
import type { Annotation, Resource } from "../data/annotations";
import type { WhoSlug } from "../data/who";
import type { LebenslageSlug } from "../data/lebenslagen";

/**
 * A single legal provision (Rechtsnorm). 506 of these — historically called
 * "Leistung", but each is one paragraph, not a distinct benefit. See `Benefit`.
 */
export type Leistung = {
  id: string;
  gesetz: string;
  kategorie: string;
  /** Slug of the benefit this norm belongs to (see `benefits`). */
  benefitId?: string;
  leistung: string;
  rechtsnorm: string;
  zielgruppen?: string[];
  themenfelder?: string[];
  annotation?: Annotation;
  commentary?: string;
};

/** A distinct social benefit, made up of one or more Rechtsnormen. */
export type Benefit = {
  id: string;
  title: string;
  summary: string;
  /** Primary navigation axes (single-valued). See docs/tagging-model.md. */
  who: WhoSlug;
  when: LebenslageSlug;
  /** All member norms share a Gesetz. */
  gesetz: string;
  /** Member Rechtsnorm ids. */
  normIds: string[];
  /** ifo-provenance rollups (demoted): used by the home viz / norm explorer. */
  themenfelder: string[];
  zielgruppen: string[];
  normCount: number;
  /** Long-form background, from `src/data/commentary/{benefitId}.md`. */
  commentary?: string;
  /** Curated editorial links (legal-norm link stays per Rechtsnorm). */
  resources?: Resource[];
};

type Dataset = {
  leistungen: Leistung[];
  benefits: Benefit[];
  facets: {
    gesetze: string[];
    themenfelder: string[];
    zielgruppen: string[];
    zielgruppenTags: string[];
    who: WhoSlug[];
    when: LebenslageSlug[];
  };
  meta: {
    source: string;
    generatedAt: string;
    count: number;
    benefitCount: number;
    unassignedCount: number;
    unassignedWhoCount: number;
    unassignedWhenCount: number;
    annotatedCount: number;
    partialCount: number;
    commentaryCount: number;
    benefitCommentaryCount: number;
    benefitResourceCount: number;
    taggedCount: number;
    whoHistogram: Record<string, number>;
    whenHistogram: Record<string, number>;
    fieldCoverage: Record<
      string,
      { ok: number; invalid: number; missing: number }
    >;
  };
};

const dataset = raw as Dataset;

export const leistungen = dataset.leistungen;
export const benefits = dataset.benefits;
export const facets = dataset.facets;
export const meta = dataset.meta;

export const getLeistung = (id: string) => leistungen.find((l) => l.id === id);

const benefitIndex = new Map(benefits.map((b) => [b.id, b]));
export const getBenefit = (id: string | undefined) =>
  id ? benefitIndex.get(id) : undefined;

export const displayTitle = (l: Leistung) => l.annotation?.title ?? l.leistung;
