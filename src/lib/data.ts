import raw from "../data/leistungen.json";
import type { Annotation } from "../data/annotations";

export type Leistung = {
  id: string;
  gesetz: string;
  kategorie: string;
  leistung: string;
  rechtsnorm: string;
  zielgruppen?: string[];
  themenfelder?: string[];
  annotation?: Annotation;
  commentary?: string;
};

type Dataset = {
  leistungen: Leistung[];
  facets: {
    gesetze: string[];
    themenfelder: string[];
    zielgruppen: string[];
    zielgruppenTags: string[];
  };
  meta: {
    source: string;
    generatedAt: string;
    count: number;
    annotatedCount: number;
    partialCount: number;
    commentaryCount: number;
    taggedCount: number;
    fieldCoverage: Record<string, { ok: number; invalid: number; missing: number }>;
  };
};

const dataset = raw as Dataset;

export const leistungen = dataset.leistungen;
export const facets = dataset.facets;
export const meta = dataset.meta;

export const getLeistung = (id: string) =>
  leistungen.find((l) => l.id === id);

export const displayTitle = (l: Leistung) => l.annotation?.title ?? l.leistung;
