/**
 * Hand-curated entries that are not in the upstream ifo dataset.
 *
 * Each extra is a fully-formed Leistung with annotation embedded inline.
 * IDs are hand-authored and must start with `extra-` so they cannot collide
 * with the SHA1 hash IDs that `build-data.ts` derives from upstream rows.
 */

import type { Annotation } from "./annotations";

export type ExtraLeistung = {
  id: string;
  gesetz: string;
  kategorie: string;
  leistung: string;
  rechtsnorm: string;
  zielgruppen?: string[];
  themenfelder?: string[];
  annotation: Annotation;
};

export const extras: ExtraLeistung[] = [
  // From https://github.com/ifo-institute/sozialleistungen/issues/2
  {
    id: "extra-prozesskostenhilfe",
    gesetz: "ZPO",
    kategorie: "Verfahrens- und Rechtshilfe",
    leistung:
      "Übernahme oder Stundung der Gerichts- und Anwaltskosten in zivilgerichtlichen Verfahren für Personen, die die Kosten nicht oder nur teilweise aufbringen können.",
    rechtsnorm: "§§ 114 ff. ZPO",
    themenfelder: ["Sozialhilfe & besondere Lebenslagen"],
    zielgruppen: ["Jedes Alter"],
    annotation: {
      title: "Prozesskostenhilfe (PKH)",
      summary:
        "Wer sich ein Gerichtsverfahren wegen geringer Einkünfte nicht leisten kann, erhält die Gerichts- und Anwaltskosten ganz oder teilweise vom Staat vorgestreckt. Die Regelung in der ZPO gilt entsprechend für arbeits-, sozial-, verwaltungs- und finanzgerichtliche Verfahren (§ 11a ArbGG, § 73a SGG, § 166 VwGO, § 142 FGO).",
      url: "https://www.gesetze-im-internet.de/zpo/__114.html",
    },
  },
  {
    id: "extra-verfahrenskostenhilfe",
    gesetz: "FamFG",
    kategorie: "Verfahrens- und Rechtshilfe",
    leistung:
      "Übernahme oder Stundung der Verfahrens- und Anwaltskosten in Familien- und Betreuungsverfahren für Personen mit geringem Einkommen.",
    rechtsnorm: "§§ 76 ff., § 113 FamFG",
    themenfelder: ["Sozialhilfe & besondere Lebenslagen", "Familie & Kinder"],
    zielgruppen: ["Jedes Alter"],
    annotation: {
      title: "Verfahrenskostenhilfe (VKH)",
      summary:
        "Das Pendant zur Prozesskostenhilfe in Familiensachen — etwa für Scheidung, Sorgerecht, Umgang oder Unterhalt. Die §§ 76–78 und § 113 FamFG verweisen weitgehend auf die ZPO-Regelungen zur Prozesskostenhilfe.",
      url: "https://www.gesetze-im-internet.de/famfg/__76.html",
    },
  },
  {
    id: "extra-beratungshilfe",
    gesetz: "BerHG",
    kategorie: "Verfahrens- und Rechtshilfe",
    leistung:
      "Anspruch auf außergerichtliche Rechtsberatung und -vertretung gegen eine geringe Schutzgebühr für Personen mit niedrigem Einkommen („Beratungsschein“).",
    rechtsnorm: "§ 1 BerHG",
    themenfelder: ["Sozialhilfe & besondere Lebenslagen"],
    zielgruppen: ["Jedes Alter"],
    annotation: {
      title: "Beratungshilfe",
      summary:
        "Wer eine anwaltliche Beratung außerhalb eines Gerichtsverfahrens benötigt und die Kosten dafür nicht aufbringen kann, erhält beim Amtsgericht einen Beratungsschein. Die Anwaltskosten trägt der Staat; die ratsuchende Person zahlt eine Schutzgebühr von derzeit 15 €.",
      url: "https://www.gesetze-im-internet.de/berathig/__1.html",
    },
  },
  {
    id: "extra-pkh-grenzueberschreitend",
    gesetz: "ZPO",
    kategorie: "Verfahrens- und Rechtshilfe",
    leistung:
      "Prozesskostenhilfe für grenzüberschreitende Zivil- und Handelssachen innerhalb der Europäischen Union.",
    rechtsnorm: "§§ 1076–1078 ZPO",
    themenfelder: ["Sozialhilfe & besondere Lebenslagen"],
    zielgruppen: ["Jedes Alter"],
    annotation: {
      title: "Grenzüberschreitende Prozesskostenhilfe in der EU",
      summary:
        "Setzt die EU-Richtlinie 2003/8/EG um und ermöglicht Prozesskostenhilfe für zivil- und handelsrechtliche Verfahren mit Auslandsbezug innerhalb der EU — etwa wenn klagende oder beklagte Personen in einem anderen Mitgliedstaat wohnen.",
      url: "https://www.gesetze-im-internet.de/zpo/__1076.html",
    },
  },
];
