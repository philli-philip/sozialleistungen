export type GesetzInfo = {
  code: string;
  name: string;
  description: string;
  url: string;
};

export const GESETZE: Record<string, GesetzInfo> = {
  AFBG: {
    code: "AFBG",
    name: "Aufstiegsfortbildungsförderungsgesetz",
    description:
      "Bekannt als „Aufstiegs-BAföG“. Fördert berufliche Aufstiegsfortbildungen (z. B. Meister, Techniker, Fachwirt) mit Zuschüssen und zinsgünstigen Darlehen — unabhängig vom Alter und ohne Abitur.",
    url: "https://www.gesetze-im-internet.de/afbg/",
  },
  AsylbLG: {
    code: "AsylbLG",
    name: "Asylbewerberleistungsgesetz",
    description:
      "Regelt die existenzsichernden Leistungen für Asylsuchende, Geduldete und bestimmte andere Ausländer:innen während des Asylverfahrens — niedriger als die regulären Sozialleistungen nach SGB II/XII.",
    url: "https://www.gesetze-im-internet.de/asylblg/",
  },
  BAföG: {
    code: "BAföG",
    name: "Bundesausbildungsförderungsgesetz",
    description:
      "Sichert Schüler:innen und Studierenden eine finanzielle Förderung der Ausbildung, wenn die eigenen Mittel und die der Eltern nicht ausreichen. Studierende erhalten in der Regel zur Hälfte Zuschuss und zur Hälfte ein zinsfreies Darlehen.",
    url: "https://www.gesetze-im-internet.de/baf_g/",
  },
  BEEG: {
    code: "BEEG",
    name: "Bundeselterngeld- und Elternzeitgesetz",
    description:
      "Regelt Elterngeld, ElterngeldPlus und Partnerschaftsbonus sowie den Anspruch auf Elternzeit. Soll Eltern nach der Geburt Zeit für die Betreuung des Kindes ermöglichen und Einkommensausfälle teilweise ausgleichen.",
    url: "https://www.gesetze-im-internet.de/beeg/",
  },
  BKGG: {
    code: "BKGG",
    name: "Bundeskindergeldgesetz",
    description:
      "Regelt das Kindergeld für Personen, die nicht über das Einkommensteuergesetz anspruchsberechtigt sind, sowie den Kinderzuschlag für Geringverdienende.",
    url: "https://www.gesetze-im-internet.de/bkgg_1996/",
  },
  BeamtVG: {
    code: "BeamtVG",
    name: "Beamtenversorgungsgesetz",
    description:
      "Regelt die Versorgung der Bundesbeamt:innen, Richter:innen und ihrer Hinterbliebenen — insbesondere Ruhegehalt (Pension), Hinterbliebenenversorgung und Unfallfürsorge.",
    url: "https://www.gesetze-im-internet.de/beamtvg/",
  },
  EStG: {
    code: "EStG",
    name: "Einkommensteuergesetz",
    description:
      "Bemisst die Einkommensteuer. Enthält auch Familienleistungen wie das Kindergeld (§§ 62 ff.) und Kinderfreibeträge, die für die meisten Familien über die Steuer abgewickelt werden.",
    url: "https://www.gesetze-im-internet.de/estg/",
  },
  FPfZG: {
    code: "FPfZG",
    name: "Familienpflegezeitgesetz",
    description:
      "Ermöglicht Beschäftigten eine teilweise Freistellung von bis zu 24 Monaten, um nahe Angehörige zu pflegen. Während dieser Zeit ist ein zinsloses Darlehen zur Aufstockung des Einkommens möglich.",
    url: "https://www.gesetze-im-internet.de/fpfzg/",
  },
  MuSchG: {
    code: "MuSchG",
    name: "Mutterschutzgesetz",
    description:
      "Schützt schwangere und stillende Beschäftigte am Arbeitsplatz und sichert das Einkommen in den Schutzfristen vor und nach der Geburt durch Mutterschaftsleistungen.",
    url: "https://www.gesetze-im-internet.de/muschg_2018/",
  },
  "SGB II": {
    code: "SGB II",
    name: "Sozialgesetzbuch Zweites Buch – Grundsicherung für Arbeitsuchende",
    description:
      "Das „Bürgergeld“ (vormals Hartz IV). Sichert den Lebensunterhalt erwerbsfähiger Personen und ihrer Haushalte, wenn andere Einkünfte nicht ausreichen — inklusive Kosten für Unterkunft und Heizung sowie Eingliederungsleistungen in Arbeit.",
    url: "https://www.gesetze-im-internet.de/sgb_2/",
  },
  "SGB III": {
    code: "SGB III",
    name: "Sozialgesetzbuch Drittes Buch – Arbeitsförderung",
    description:
      "Regelt die Aufgaben der Bundesagentur für Arbeit. Umfasst Arbeitslosengeld, Kurzarbeitergeld, Insolvenzgeld sowie Förderungen für berufliche Weiterbildung, Vermittlung und Wiedereingliederung.",
    url: "https://www.gesetze-im-internet.de/sgb_3/",
  },
  "SGB V": {
    code: "SGB V",
    name: "Sozialgesetzbuch Fünftes Buch – Gesetzliche Krankenversicherung",
    description:
      "Regelt Leistungen der gesetzlichen Krankenversicherung: Krankenbehandlung, Krankengeld, Vorsorge, Rehabilitation und die Beziehungen zwischen Krankenkassen, Ärzt:innen und Versicherten.",
    url: "https://www.gesetze-im-internet.de/sgb_5/",
  },
  "SGB VI": {
    code: "SGB VI",
    name: "Sozialgesetzbuch Sechstes Buch – Gesetzliche Rentenversicherung",
    description:
      "Grundlage der gesetzlichen Rente. Regelt Altersrenten, Erwerbsminderungsrenten, Hinterbliebenenrenten und Leistungen zur medizinischen und beruflichen Rehabilitation.",
    url: "https://www.gesetze-im-internet.de/sgb_6/",
  },
  "SGB VII": {
    code: "SGB VII",
    name: "Sozialgesetzbuch Siebtes Buch – Gesetzliche Unfallversicherung",
    description:
      "Schützt vor den Folgen von Arbeitsunfällen, Wegeunfällen und Berufskrankheiten. Träger sind die Berufsgenossenschaften und Unfallkassen; Leistungen reichen von Heilbehandlung bis Verletztenrente.",
    url: "https://www.gesetze-im-internet.de/sgb_7/",
  },
  "SGB VIII": {
    code: "SGB VIII",
    name: "Sozialgesetzbuch Achtes Buch – Kinder- und Jugendhilfe",
    description:
      "Regelt Leistungen der Kinder- und Jugendhilfe, u. a. Kindertagesbetreuung, Hilfen zur Erziehung, Eingliederungshilfe für seelisch behinderte Kinder und den Kinderschutz.",
    url: "https://www.gesetze-im-internet.de/sgb_8/",
  },
  "SGB IX": {
    code: "SGB IX",
    name: "Sozialgesetzbuch Neuntes Buch – Rehabilitation und Teilhabe behinderter Menschen",
    description:
      "Regelt die Rehabilitation und Teilhabe von Menschen mit Behinderungen. Enthält insbesondere die Eingliederungshilfe sowie das Recht auf Schwerbehindertenausweis und Nachteilsausgleiche.",
    url: "https://www.gesetze-im-internet.de/sgb_9_2018/",
  },
  "SGB XI": {
    code: "SGB XI",
    name: "Sozialgesetzbuch Elftes Buch – Soziale Pflegeversicherung",
    description:
      "Regelt die soziale Pflegeversicherung: Pflegegrade, Pflegegeld, Pflegesachleistungen, vollstationäre Pflege sowie Entlastungs- und Verhinderungspflege.",
    url: "https://www.gesetze-im-internet.de/sgb_11/",
  },
  "SGB XII": {
    code: "SGB XII",
    name: "Sozialgesetzbuch Zwölftes Buch – Sozialhilfe",
    description:
      "Sichert das Existenzminimum für Menschen, die nicht erwerbsfähig sind oder das Bürgergeld nicht beanspruchen können — insbesondere Hilfe zum Lebensunterhalt und Grundsicherung im Alter und bei Erwerbsminderung.",
    url: "https://www.gesetze-im-internet.de/sgb_12/",
  },
  "SGB XIV": {
    code: "SGB XIV",
    name: "Sozialgesetzbuch Vierzehntes Buch – Soziale Entschädigung",
    description:
      "Seit 2024 in Kraft. Bündelt die soziale Entschädigung des Staates für Geschädigte von Gewalttaten, Kriegsopfer und vergleichbare Fälle — als Nachfolge u. a. des Opferentschädigungsgesetzes.",
    url: "https://www.gesetze-im-internet.de/sgb_14/",
  },
  UhVorschG: {
    code: "UhVorschG",
    name: "Unterhaltsvorschussgesetz",
    description:
      "Sichert Alleinerziehende ab, wenn der andere Elternteil keinen oder zu wenig Kindesunterhalt zahlt. Der Staat tritt mit dem Unterhaltsvorschuss in Vorleistung.",
    url: "https://www.gesetze-im-internet.de/uhvorschg/",
  },
  WoGG: {
    code: "WoGG",
    name: "Wohngeldgesetz",
    description:
      "Regelt das Wohngeld als Zuschuss zu den Wohnkosten für Haushalte mit geringem Einkommen, die keine Leistungen wie Bürgergeld oder Grundsicherung beziehen.",
    url: "https://www.gesetze-im-internet.de/wogg/",
  },
};

export const getGesetzInfo = (code: string): GesetzInfo | undefined =>
  GESETZE[code];
