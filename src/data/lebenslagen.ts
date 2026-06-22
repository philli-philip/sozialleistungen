/**
 * WHEN — the life situation / event that triggers a benefit.
 *
 * The primary navigational axis (see `docs/tagging-model.md`). People arrive
 * knowing *what happened* ("I lost my job", "I had a baby"), so WHEN is the
 * first filter. Each benefit holds **exactly one** WHEN value.
 *
 * `kind` distinguishes a point-in-time **event** (birth, death, accident) from a
 * durable **state** (low income, raising children). `group` is the coarse
 * heading used to organise the picker.
 */

export type LebenslageSlug =
  // Familie
  | "schwangerschaft-geburt"
  | "kind-familie"
  | "kinderbetreuung"
  | "alleinerziehend-unterhalt"
  // Bildung & Beruf
  | "ausbildung"
  | "studium"
  | "weiterbildung-aufstieg"
  | "arbeitslosigkeit"
  | "lohnausfall-im-job"
  | "selbststaendigkeit-gruendung"
  // Gesundheit & Pflege
  | "krankheit-behandlung"
  | "unfall"
  | "behinderung-teilhabe"
  | "rehabilitation"
  | "pflegebeduerftig-werden"
  | "angehoerige-pflegen"
  // Existenz & Wohnen
  | "existenzsicherung"
  | "wohnen"
  | "schulden-recht-beratung"
  // Spätphase & Verlust
  | "alter-ruhestand"
  | "tod-hinterbliebene"
  | "opfer-gewalt-krieg"
  // Sonderlage
  | "flucht-asyl";

export type LebenslageGroup =
  | "Familie"
  | "Bildung & Beruf"
  | "Gesundheit & Pflege"
  | "Existenz & Wohnen"
  | "Spätphase & Verlust"
  | "Sonderlage";

export type Lebenslage = {
  slug: LebenslageSlug;
  label: string;
  group: LebenslageGroup;
  kind: "event" | "state";
};

export const lebenslagen: Lebenslage[] = [
  // Familie
  { slug: "schwangerschaft-geburt", label: "Schwangerschaft & Geburt", group: "Familie", kind: "event" },
  { slug: "kind-familie", label: "Kind großziehen / Familie", group: "Familie", kind: "state" },
  { slug: "kinderbetreuung", label: "Kinderbetreuung & frühe Förderung", group: "Familie", kind: "state" },
  { slug: "alleinerziehend-unterhalt", label: "Alleinerziehend & Unterhalt", group: "Familie", kind: "state" },
  // Bildung & Beruf
  { slug: "ausbildung", label: "Ausbildung", group: "Bildung & Beruf", kind: "state" },
  { slug: "studium", label: "Studium", group: "Bildung & Beruf", kind: "state" },
  { slug: "weiterbildung-aufstieg", label: "Weiterbildung & Aufstieg", group: "Bildung & Beruf", kind: "state" },
  { slug: "arbeitslosigkeit", label: "Arbeitslosigkeit & Arbeitssuche", group: "Bildung & Beruf", kind: "event" },
  { slug: "lohnausfall-im-job", label: "Lohnausfall im Job", group: "Bildung & Beruf", kind: "event" },
  { slug: "selbststaendigkeit-gruendung", label: "Selbstständigkeit & Gründung", group: "Bildung & Beruf", kind: "state" },
  // Gesundheit & Pflege
  { slug: "krankheit-behandlung", label: "Krankheit & Behandlung", group: "Gesundheit & Pflege", kind: "state" },
  { slug: "unfall", label: "Unfall", group: "Gesundheit & Pflege", kind: "event" },
  { slug: "behinderung-teilhabe", label: "Behinderung & Teilhabe", group: "Gesundheit & Pflege", kind: "state" },
  { slug: "rehabilitation", label: "Rehabilitation", group: "Gesundheit & Pflege", kind: "state" },
  { slug: "pflegebeduerftig-werden", label: "Pflegebedürftig werden", group: "Gesundheit & Pflege", kind: "event" },
  { slug: "angehoerige-pflegen", label: "Angehörige pflegen", group: "Gesundheit & Pflege", kind: "state" },
  // Existenz & Wohnen
  { slug: "existenzsicherung", label: "Geringes Einkommen & Existenzsicherung", group: "Existenz & Wohnen", kind: "state" },
  { slug: "wohnen", label: "Wohnen & Miete", group: "Existenz & Wohnen", kind: "state" },
  { slug: "schulden-recht-beratung", label: "Schulden, Rechtsstreit & Beratung", group: "Existenz & Wohnen", kind: "event" },
  // Spätphase & Verlust
  { slug: "alter-ruhestand", label: "Alter & Ruhestand", group: "Spätphase & Verlust", kind: "event" },
  { slug: "tod-hinterbliebene", label: "Tod eines Angehörigen", group: "Spätphase & Verlust", kind: "event" },
  { slug: "opfer-gewalt-krieg", label: "Opfer von Gewalt, Krieg & Unfall", group: "Spätphase & Verlust", kind: "event" },
  // Sonderlage
  { slug: "flucht-asyl", label: "Flucht & Asyl", group: "Sonderlage", kind: "state" },
];

export const lebenslageBySlug: Record<string, Lebenslage> = Object.fromEntries(
  lebenslagen.map((l) => [l.slug, l]),
);

export const lebenslageLabel = (slug: string): string =>
  lebenslageBySlug[slug]?.label ?? slug;

/** Stable group order for the WHEN picker. */
export const lebenslageGroups: LebenslageGroup[] = [
  "Familie",
  "Bildung & Beruf",
  "Gesundheit & Pflege",
  "Existenz & Wohnen",
  "Spätphase & Verlust",
  "Sonderlage",
];
