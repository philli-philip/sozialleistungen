export type ZielgruppeTag = {
  slug: string;
  label: string;
  parent?: string;
};

export const zielgruppenTags: ZielgruppeTag[] = [
  { slug: "schwangere", label: "Schwangere & junge Mütter" },
  { slug: "kleinkinder", label: "Säuglinge & Kleinkinder (0–3)" },
  { slug: "jugendliche", label: "Schulkinder & Jugendliche" },
  { slug: "studierende", label: "Studierende" },
  { slug: "azubis", label: "Auszubildende" },
  { slug: "eltern", label: "Eltern & Familien" },
  { slug: "alleinerziehende", label: "Alleinerziehende", parent: "eltern" },
  { slug: "pflegende-angehoerige", label: "Pflegende Angehörige" },
  { slug: "arbeitnehmer", label: "Arbeitnehmer:innen" },
  { slug: "arbeitslose", label: "Arbeitsuchende & Arbeitslose" },
  { slug: "selbststaendige", label: "Selbstständige & Gründer:innen" },
  { slug: "behinderung", label: "Menschen mit Behinderung" },
  { slug: "kranke", label: "Chronisch Kranke & Patient:innen" },
  { slug: "pflegebeduerftige", label: "Pflegebedürftige Menschen" },
  { slug: "senior", label: "Senior:innen" },
  { slug: "hinterbliebene", label: "Hinterbliebene" },
  { slug: "beamte", label: "Beamten & Soldaten" },
  { slug: "opfer", label: "Opfer von Gewalt, Krieg & Unfall" },
  { slug: "gefluechtete", label: "Geflüchtete & Asylsuchende" },
];

export const zielgruppenBySlug: Record<string, ZielgruppeTag> =
  Object.fromEntries(zielgruppenTags.map((t) => [t.slug, t]));

export const zielgruppeLabel = (slug: string): string =>
  zielgruppenBySlug[slug]?.label ?? slug;
