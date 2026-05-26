import MiniSearch from "minisearch";
import { leistungen, type Leistung } from "./data";

type SearchDoc = Leistung & {
  annotationTitle?: string;
  annotationSummary?: string;
};

export const search = new MiniSearch<SearchDoc>({
  idField: "id",
  fields: [
    "annotationTitle",
    "annotationSummary",
    "leistung",
    "rechtsnorm",
    "gesetz",
    "kategorie",
  ],
  storeFields: ["id"],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
    boost: { annotationTitle: 3, annotationSummary: 2, leistung: 2 },
  },
});

search.addAll(
  leistungen.map((l) => ({
    ...l,
    annotationTitle: l.annotation?.title,
    annotationSummary: l.annotation?.summary,
  })),
);
