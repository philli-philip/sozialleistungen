import type { Resource } from "./annotations";
import type { WhoSlug } from "./who";
import type { LebenslageSlug } from "./lebenslagen";

export type Benefit = {
  id: string;
  title: string;
  summary: string;
  /** Primary navigation axes. See docs/tagging-model.md. */
  who: WhoSlug;
  when: LebenslageSlug;
  /**
   * Curated editorial links for this benefit (studies, official portals,
   * statistics, …). The legal-norm text link is NOT here — it stays per
   * Rechtsnorm in `annotations.ts` (`url`), treated as a special resource.
   */
  resources?: Resource[];
};

export const benefits: Benefit[] = [
  {
    id: "aufstiegs-bafoeg",
    who: "bildung",
    when: "weiterbildung-aufstieg",
    title: "Aufstiegs-BAföG",
    summary:
      "Das Aufstiegs-BAföG (früher Meister-BAföG) bezuschusst Lehrgangs- und Prüfungsgebühren sowie den Lebensunterhalt von Personen, die einen beruflichen Aufstiegsabschluss (z. B. Meister, Techniker, Fachwirt) anstreben. Der Unterhaltsbeitrag wird einkommensabhängig als Zuschuss und Darlehen gewährt.",
    resources: [
      {
        label: "Offizielles Portal Aufstiegs-BAföG (BMBF/BMFTR)",
        url: "https://www.aufstiegs-bafoeg.de/",
      },
      {
        label: "Wie wird mit dem Aufstiegs-BAföG gefördert? (BMBF)",
        url: "https://www.aufstiegs-bafoeg.de/aufstiegsbafoeg/de/die-foerderung/wie-wird-gefoerdert/wie-wird-mit-dem-aufstiegs-bafoeg-gefoerdert.html",
      },
      {
        label: "BMFTR – Aufstiegs-BAföG (Überblick)",
        url: "https://www.bmbf.de/DE/Bildung/Weiterbildung/Finanzierung/Aufstiegs-Bafoeg/aufstiegs-bafoeg.html",
      },
      {
        label: "Aufstiegs-BAföG – FAQ zu Darlehen & Rückzahlung (BMBF)",
        url: "https://www.aufstiegs-bafoeg.de/aufstiegsbafoeg/shareddocs/downloads/files/bmbf_aufstiegs-bafoeg_faq.pdf?__blob=publicationFile&v=3",
      },
      {
        label: "Destatis – AFBG-Förderstatistik 2024",
        url: "https://www.aufstiegs-bafoeg.de/aufstiegsbafoeg/de/afbg-destatis-2024.html",
      },
    ],
  },
  {
    id: "grundleistungen-fuer-asylbewerber",
    who: "gefluechtete",
    when: "flucht-asyl",
    title: "Grundleistungen für Asylbewerber",
    summary:
      "Asylsuchende und geduldete Personen erhalten Sachleistungen oder Geldleistungen zur Deckung des täglichen Grundbedarfs: Ernährung, Unterkunft, Heizung, Kleidung, Gesundheits- und Körperpflege sowie einen Barbetrag für persönliche Bedürfnisse.",
    resources: [
      {
        label:
          "asyl.net – Grundleistungen des AsylbLG fallen 2025 niedriger aus",
        url: "https://www.asyl.net/view/grundleistungen-des-asylbewerberleistungsgesetzes-fallen-2025-niedriger-aus",
      },
      {
        label: "Destatis – Asylbewerberleistungen: Empfänger und Ausgaben",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Asylbewerberleistungen/_inhalt.html",
      },
    ],
  },
  {
    id: "bedarfssaetze-der-grundleistungen-asylblg",
    who: "gefluechtete",
    when: "flucht-asyl",
    title: "Bedarfssätze der Grundleistungen (AsylbLG)",
    summary:
      "Die monatlichen Geldbeträge sind gestaffelt nach Personengruppen (Alleinstehende, Paare, Kinder). Sie liegen unterhalb der Bürgergeld-Regelsätze und werden regelmäßig angepasst.",
    resources: [
      {
        label:
          "Bundesgesetzblatt – Leistungssätze nach § 3a AsylbLG ab 1. Januar 2026",
        url: "https://www.recht.bund.de/bgbl/1/2025/251/VO.html",
      },
      {
        label:
          "asyl.net – Grundleistungen des AsylbLG fallen 2025 niedriger aus",
        url: "https://www.asyl.net/view/grundleistungen-des-asylbewerberleistungsgesetzes-fallen-2025-niedriger-aus",
      },
    ],
  },
  {
    id: "medizinische-versorgung-asylblg",
    who: "gefluechtete",
    when: "flucht-asyl",
    title: "Medizinische Versorgung (AsylbLG)",
    summary:
      "Asylsuchende haben Anspruch auf Behandlung akuter Erkrankungen und Schmerzzustände, Schutzimpfungen sowie ärztliche und zahnärztliche Grundversorgung. Im Krankheitsfall wird eine Behandlungsbescheinigung ausgestellt.",
    resources: [
      {
        label:
          "Bundesgesundheitsministerium – Gesundheitsversorgung von Asylsuchenden",
        url: "https://www.bundesgesundheitsministerium.de/themen/gesundheitsversorgung/gesundheitliche-versorgung-asylsuchender.html",
      },
    ],
  },
  {
    id: "sonstige-leistungen-asylblg",
    who: "gefluechtete",
    when: "flucht-asyl",
    title: "Sonstige Leistungen (AsylbLG)",
    summary:
      "Im Einzelfall können über die Grundleistungen hinaus Sach- oder Geldleistungen gewährt werden, z. B. für die Teilnahme am gesellschaftlichen Leben, bei besonderen Bedarfslagen oder für Bildung und Sprachkurse.",
    resources: [
      {
        label: "asyl.net – Leistungen nach dem Asylbewerberleistungsgesetz",
        url: "https://www.asyl.net/themen/sozialleistungen/asylbewerberleistungsgesetz",
      },
    ],
  },
  {
    id: "erstattung-von-eilfall-aufwendungen-asylblg",
    who: "gefluechtete",
    when: "flucht-asyl",
    title: "Erstattung von Eilfall-Aufwendungen (AsylbLG)",
    summary:
      "Andere Stellen (z. B. Krankenhäuser oder Sozialämter), die in einem Eilfall Leistungen erbracht haben, die eigentlich dem AsylbLG oblegen hätten, können sich diese Aufwendungen erstatten lassen.",
    resources: [
      {
        label:
          "§ 6a AsylbLG – Erstattung von Aufwendungen anderer (sozialgesetzbuch-sgb.de)",
        url: "https://www.sozialgesetzbuch-sgb.de/asylblg/6a.html",
      },
      {
        label: "§ 6a AsylbLG – Gesetzestext (lxgesetze.de, Stand April 2026)",
        url: "https://lxgesetze.de/asylblg/6a",
      },
      {
        label:
          "Asylbewerberleistungsgesetz – Volltext inkl. § 6a (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/asylblg/BJNR107410993.html",
      },
    ],
  },
  {
    id: "bafoeg",
    who: "bildung",
    when: "studium",
    title: "BAföG",
    summary:
      "BAföG fördert den Lebensunterhalt und die Ausbildungskosten von Schülern und Studierenden. Die Förderung besteht je nach Ausbildungsart zur Hälfte aus einem Zuschuss (muss nicht zurückgezahlt werden) und zur Hälfte aus einem zinslosen Staatsdarlehen.",
    resources: [
      {
        label: "BMBF – BAföG: Informationen für Studierende",
        url: "https://www.bmbf.de/DE/Bildung/Studium/Finanzierung/Bafoeg/bafoeg.html",
      },
      {
        label: "BAföG.de – Förderungsarten und Förderungshöhe",
        url: "https://www.xn--bafg-7qa.de/bafoeg/de/das-bafoeg-alle-infos-auf-einen-blick/foerderungsarten-und-foerderungshoehe/foerderungsarten-und-foerderungshoehe_node.html",
      },
      {
        label: "BAföG.de – Einkommen und Vermögen (Freibeträge)",
        url: "https://www.xn--bafg-7qa.de/bafoeg/de/das-bafoeg-alle-infos-auf-einen-blick/einkommen-und-vermoegen/einkommen-und-vermoegen_node.html",
      },
      {
        label: "Bundesverwaltungsamt – BAföG-Darlehensrückzahlung",
        url: "https://www.bva.bund.de/DE/Das-BVA/Aufgaben/B/Bildungsfoerderung/Darlehensrueckzahlung/darlehensrueckzahlung_node.html",
      },
      {
        label:
          "Destatis – BAföG-Statistik 2024 (612.800 Geförderte, Ø 635 €/Monat)",
        url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2025/08/PD25_283_214.html",
      },
      {
        label:
          "Destatis – Bildungsfinanzen und Ausbildungsförderung (Themenseite)",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bildung-Forschung-Kultur/Bildungsfinanzen-Ausbildungsfoerderung/_inhalt.html",
      },
    ],
  },
  {
    id: "studienstarthilfe (BAföG)",
    who: "bildung",
    when: "studium",
    title: "Studienstarthilfe",
    summary:
      "Einmalige Starthilfe von 1.000 € für förderungsberechtigte Studierende, die erstmals ein Studium aufnehmen und aus einkommensschwachen Familien stammen. Wird als reiner Zuschuss gewährt.",
    resources: [
      {
        label: "BAföG.de – Studienstarthilfe",
        url: "https://www.xn--bafg-7qa.de/bafoeg/de/das-bafoeg-alle-infos-auf-einen-blick/studienstarthilfe/studienstarthilfe_node.html",
      },
      {
        label:
          "Destatis – 4 % weniger BAföG-Geförderte 2024 (inkl. Studienstarthilfe-Erstdaten)",
        url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2025/08/PD25_283_214.html",
      },
      {
        label: "Bundesregierung – FAQ zur BAföG-Reform 2024",
        url: "https://www.bundesregierung.de/breg-de/suche/bafoeg-reform-2024-2257882",
      },
      {
        label: "Destatis – Ausbildungsförderung nach BAföG (Tabellen)",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bildung-Forschung-Kultur/Bildungsfinanzen-Ausbildungsfoerderung/Tabellen/_tabellen-innen-bafoeg.html",
      },
    ],
  },
  {
    id: "elterngeld",
    who: "familie",
    when: "schwangerschaft-geburt",
    title: "Elterngeld",
    summary:
      "Einkommensersatzleistung für Eltern nach der Geburt: 65–67 % des wegfallenden Nettoeinkommens, mindestens 300 € und höchstens 1.800 € pro Monat. Umfasst Basiselterngeld, ElterngeldPlus, Partnerschaftsbonus sowie Geschwister- und Mehrlingszuschläge.",
    resources: [
      {
        label:
          "Familienportal des Bundes – Elterngeld (Überblick & Berechnung)",
        url: "https://familienportal.de/familienportal/familienleistungen/elterngeld",
      },
      {
        label: "BMFSFJ – Neuregelungen beim Elterngeld (ab April 2024/2025)",
        url: "https://www.bmfsfj.de/bmfsfj/themen/familie/familienleistungen/neuregelungen-beim-elterngeld-fuer-geburten-ab-1-april-2024-228588",
      },
      {
        label: "Familienportal – Was ist der Partnerschaftsbonus? (FAQ)",
        url: "https://familienportal.de/familienportal/familienleistungen/elterngeld/faq/was-ist-der-partnerschaftsbonus--155198",
      },
      {
        label: "Bundesregierung – FAQ: Neue Regelungen beim Elterngeld",
        url: "https://www.bundesregierung.de/breg-de/aktuelles/neuregelung-elterngeld-2268810",
      },
      {
        label: "Destatis – Elterngeld: Empfänger und Ausgaben (Themenseite)",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Elterngeld/_inhalt.html",
      },
      {
        label: "Destatis – ElterngeldPlus gewinnt weiter an Bedeutung (2025)",
        url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2025/03/PD25_112_22922.html",
      },
    ],
  },
  {
    id: "kinderzuschlag",
    who: "familie",
    when: "kind-familie",
    title: "Kinderzuschlag",
    summary:
      "Zuschlag für Familien mit kleinem Einkommen, das zwar für die Eltern, aber nicht für die Kinder ausreicht. Bis zu 297 € pro Kind und Monat.",
    resources: [
      {
        label: "Statistik BA – Kindergeld & Kinderzuschlag (Familienkasse)",
        url: "https://statistik.arbeitsagentur.de/DE/Statischer-Content/Statistiken/Themen-im-Fokus/Familie-Kinder/Famka/Famka.html",
      },
      {
        label: "Merkblatt Kinderzuschlag (Bundesregierung, Jan 2024)",
        url: "https://www.publikationen-bundesregierung.de/pp-de/publikationssuche/merkblatt-kinderzuschlag-734254",
      },
      {
        label: "Familienkasse – Kinderzuschlag beantragen",
        url: "https://www.arbeitsagentur.de/familie-und-kinder/kinderzuschlag",
      },
      {
        label:
          "BKGG § 6b – Bildungs- und Teilhabeleistungen beim Kinderzuschlag",
        url: "https://www.gesetze-im-internet.de/bkgg_1996/__6b.html",
      },
    ],
  },
  {
    id: "bildung-und-teilhabe-kindergeldbezug",
    who: "familie",
    when: "kind-familie",
    title: "Bildung & Teilhabe (Kindergeldbezug)",
    summary:
      "Familien, die Kindergeld beziehen und deren Einkommen knapp über der Bürgergeld-Grenze liegt, können dieselben Bildungs- und Teilhabeleistungen (BuT) erhalten wie Bürgergeld-Beziehende – z. B. für Schulbedarf, Mittagessen und Vereinsmitgliedschaften.",
    resources: [
      {
        label: "Familienportal des Bundes – Bildung und Teilhabe",
        url: "https://familienportal.de/familienportal/familienleistungen/bildung-und-teilhabe",
      },
      {
        label: "BMAS – Die Leistungen des Bildungspakets",
        url: "https://www.bmas.de/DE/Arbeit/Grundsicherung-Buergergeld/Bildungspaket/Leistungen/leistungen-bildungspaket_art.html",
      },
    ],
  },
  {
    id: "ruhegehalt-beamtenpension",
    who: "beamte",
    when: "alter-ruhestand",
    title: "Ruhegehalt (Beamtenpension)",
    summary:
      "Beamtinnen und Beamte auf Lebenszeit erhalten nach dem Eintritt in den Ruhestand eine lebenslange Pension. Die Höhe richtet sich nach den ruhegehaltsfähigen Dienstbezügen und der Dienstzeit — maximal 71,75 % der letzten Bezüge.",
    resources: [
      {
        label: "BMI – Beamtenversorgung: Überblick und Rechtsgrundlagen",
        url: "https://www.bmi.bund.de/DE/themen/oeffentlicher-dienst/beamtinnen-und-beamte/versorgung/versorgung-node.html",
      },
      {
        label:
          "BMI – Siebter Versorgungsbericht der Bundesregierung (Ausgaben & Entwicklung)",
        url: "https://www.bmi.bund.de/SharedDocs/downloads/DE/publikationen/themen/oeffentlicher-dienst/siebter-versorgungsbericht.pdf",
      },
      {
        label:
          "Destatis – Versorgungsempfänger nach Beamten- und Soldatenversorgungsrecht (Tabelle)",
        url: "https://www.destatis.de/DE/Themen/Staat/Oeffentlicher-Dienst/Tabellen/versorgungsempfaenger-lr-insgesamt.html",
      },
      {
        label:
          "Destatis – Pensionäre und Pensionsausgaben des Bundes (Statistik)",
        url: "https://www.destatis.de/DE/Themen/Staat/Oeffentlicher-Dienst/pensionierung.html",
      },
    ],
  },
  {
    id: "voruebergehende-ruhegehaltserhoehung",
    who: "beamte",
    when: "alter-ruhestand",
    title: "Vorübergehende Ruhegehaltserhöhung",
    summary:
      "Beamte, die vor Erreichen der gesetzlichen Altersgrenze in den Ruhestand versetzt werden und noch keine Rente beziehen, erhalten vorübergehend einen erhöhten Ruhegehaltssatz, bis eine Rente einsetzt.",
    resources: [
      {
        label: "buzer.de – § 14a BeamtVG mit Änderungsverlauf",
        url: "https://www.buzer.de/14a_BeamtVG.htm",
      },
      {
        label:
          "beamten-informationen.de – § 14a BeamtVG: Erläuterung und Voraussetzungen",
        url: "https://www.beamten-informationen.de/beamtenversorgungsgesetz_paragraf_14a",
      },
      {
        label:
          "beamtenversorgungsrecht.de – § 14a BeamtVG (Bund): Anwendungsfälle",
        url: "https://www.beamtenversorgungsrecht.de/beamtvg_bund_paragraf_14_a",
      },
      {
        label:
          "DRV-Recht – Kommentar zu § 14a BeamtVG (Deutsche Rentenversicherung)",
        url: "https://rvrecht.deutsche-rentenversicherung.de/SharedDocs/rvRecht/05_Normen_und_Vertraege/02_A-B/BeamtVG/0014a/0014a_2023_01_01.html",
      },
    ],
  },
  {
    id: "bezuege-fuer-den-sterbemonat",
    who: "beamte",
    when: "tod-hinterbliebene",
    title: "Bezüge für den Sterbemonat",
    summary:
      "Die Dienstbezüge oder das Ruhegehalt des verstorbenen Beamten werden für den gesamten Sterbemonat an die Hinterbliebenen ausgezahlt.",
    resources: [
      {
        label:
          "sadaba.de – BeamtVG §§ 16–29: Sterbemonat, Sterbegeld und Hinterbliebenenversorgung im Überblick",
        url: "https://www.sadaba.de/GSBT_BeamtVG_16_29.html",
      },
      {
        label:
          "DBB – Hinterbliebenenversorgung: Witwengeld, Waisengeld, Sterbegeld",
        url: "https://www.dbb.de/lexikon/themenartikel/h/hinterbliebenenversorgung.html",
      },
      {
        label: "buzer.de – § 17 BeamtVG mit Änderungsverlauf",
        url: "https://www.buzer.de/17_BeamtVG.htm",
      },
    ],
  },
  {
    id: "sterbegeld-beamte",
    who: "beamte",
    when: "tod-hinterbliebene",
    title: "Sterbegeld (Beamte)",
    summary:
      "Einmalige Zahlung an Hinterbliebene in Höhe des Zweifachen der monatlichen Dienstbezüge oder des Ruhegehalts des Verstorbenen zur Deckung unmittelbarer Bestattungskosten.",
    resources: [
      {
        label:
          "die-beamtenversorgung.de – § 18 BeamtVG: Sterbegeld (Erläuterung und Anspruchsberechtigte)",
        url: "https://die-beamtenversorgung.de/rechtsgrundlagen/beamtenversorgungsgesetz-bund/beamtvg_018",
      },
      {
        label: "buzer.de – § 18 BeamtVG mit Änderungsverlauf",
        url: "https://www.buzer.de/18_BeamtVG.htm",
      },
      {
        label: "beamtenversorgungsrecht.de – § 18 Sterbegeld (Bund)",
        url: "https://www.beamtenversorgungsrecht.de/beamtvg_bund_paragraf_18",
      },
      {
        label:
          "erbrecht-ratgeber.de – Sterbegeld und Bezüge für Erben und Angehörige von Beamten",
        url: "https://www.erbrecht-ratgeber.de/erbrecht/erbschaft/sterbegeld.html",
      },
    ],
  },
  {
    id: "witwengeld-beamte",
    who: "beamte",
    when: "tod-hinterbliebene",
    title: "Witwengeld (Beamte)",
    summary:
      "Hinterbliebene Ehepartner von verstorbenen Beamten auf Lebenszeit erhalten Witwengeld in Höhe von 55 % des Ruhegehalts, das der Beamte erhalten hat oder erhalten hätte.",
    resources: [
      {
        label:
          "DBB – Hinterbliebenenversorgung: Überblick (Witwengeld, Waisengeld, Sterbegeld)",
        url: "https://www.dbb.de/lexikon/themenartikel/h/hinterbliebenenversorgung.html",
      },
      {
        label:
          "beamtenversorgungsrecht.de – Hinterbliebenenversorgung: Witwengeld und Waisengeld",
        url: "https://www.beamtenversorgungsrecht.de/beamtenversorgungsrecht/hinterbliebenenversorgung",
      },
      {
        label:
          "Beamten-Infoportal – Witwenrente: besondere Regelungen für Beamte",
        url: "https://beamten-infoportal.de/magazin/news/witwenrente-bei-den-beamten-hier-gelten-eigene-regeln/",
      },
      {
        label:
          "Zoll.de – Hinterbliebenenversorgung: amtliche Erläuterung (inkl. Lebenspartnerschaften)",
        url: "https://www.zoll.de/DE/Der-Zoll/Versorgung/Hinterbliebenenversorgung/hinterbliebenenversorgung_node.html",
      },
      {
        label:
          "Destatis – 380.100 Hinterbliebene erhalten Beamtenversorgung; 8,6 Mrd. € Ausgaben (2023)",
        url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2024/12/PD24_467_742.html",
      },
      {
        label: "BMI – Beamtenversorgung: Hinterbliebenenversorgung (Überblick)",
        url: "https://www.bmi.bund.de/DE/themen/oeffentlicher-dienst/beamtinnen-und-beamte/versorgung/versorgung-artikel.html",
      },
      {
        label:
          "Destatis – Versorgungsempfänger/-innen nach Beamtenversorgungsrecht (Statistik)",
        url: "https://www.destatis.de/DE/Themen/Staat/Oeffentlicher-Dienst/Tabellen/versorgungsempfaenger-lr-insgesamt.html",
      },
    ],
  },
  {
    id: "unterhaltsbeitrag-beamtenversorgung",
    who: "beamte",
    when: "tod-hinterbliebene",
    title: "Unterhaltsbeitrag (Beamtenversorgung)",
    summary:
      "Geschiedene Ehepartner von verstorbenen Beamten, die keinen Anspruch auf Witwengeld haben, können unter bestimmten Umständen einen Unterhaltsbeitrag in ähnlicher Höhe erhalten.",
    resources: [
      {
        label:
          "BMI: Beamtenversorgung – Hinterbliebenenversorgung inkl. Unterhaltsbeitrag",
        url: "https://www.beamtenversorgungsrecht.de/beamtenversorgungsrecht/hinterbliebenenversorgung",
      },
      {
        label:
          "BeamtVG Inhaltsverzeichnis – § 22 Unterhaltsbeitrag (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/beamtvg/BJNR024850976.html",
      },
      {
        label:
          "§ 22 BeamtVG mit Verwaltungsvorschriften – beamten-informationen.de",
        url: "https://www.beamten-informationen.de/beamtenversorgungsgesetz_paragraf_22",
      },
      {
        label: "VV zu § 22 BeamtVG – Rundschreiben BMI (BRAVORS Brandenburg)",
        url: "https://bravors.brandenburg.de/de/verwaltungsvorschriften-216175",
      },
    ],
  },
  {
    id: "waisengeld-beamte",
    who: "beamte",
    when: "tod-hinterbliebene",
    title: "Waisengeld (Beamte)",
    summary:
      "Kinder verstorbener Beamter erhalten Waisengeld: Halbwaisen 12 %, Vollwaisen 20 % des Ruhegehalts. Ausgezahlt wird bis zur Vollendung des 18. Lebensjahres, bei Ausbildung oder Studium bis 27 Jahre.",
    resources: [
      {
        label:
          "DBB – Hinterbliebenenversorgung: Überblick (inkl. Waisengeld 12 % / 20 %)",
        url: "https://www.dbb.de/lexikon/themenartikel/h/hinterbliebenenversorgung.html",
      },
      {
        label:
          "beamtenversorgungsrecht.de – Hinterbliebenenversorgung: Waisengeld-Überblick",
        url: "https://www.beamtenversorgungsrecht.de/beamtenversorgungsrecht/hinterbliebenenversorgung",
      },
      {
        label:
          "beamtenversorgung-online.de – § 24 BeamtVG: Höhe des Waisengeldes",
        url: "https://www.beamtenversorgung-online.de/beamtenversorgungsgesetz_paragraf_24",
      },
      {
        label:
          "Destatis – 380.100 Hinterbliebene erhalten Beamtenversorgung; 8,6 Mrd. € Ausgaben (2023)",
        url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2024/12/PD24_467_742.html",
      },
    ],
  },
  {
    id: "bezuege-fuer-verschollene-beamte",
    who: "beamte",
    when: "tod-hinterbliebene",
    title: "Bezüge für verschollene Beamte",
    summary:
      "Ist ein Beamter verschollen, werden seine Bezüge bis zum wahrscheinlichen Todeszeitpunkt weiter an die Hinterbliebenen ausgezahlt.",
    resources: [
      {
        label:
          "BeamtVG §29 – Zahlung der Bezüge bei Verschollenheit (buzer.de)",
        url: "https://www.buzer.de/gesetz/3394/b9253.htm",
      },
      {
        label:
          "Allgemeine Verwaltungsvorschrift zum BeamtVG (BeamtVGVwV) – Abschnitt 4 Bezüge bei Verschollenheit",
        url: "https://www.verwaltungsvorschriften-im-internet.de/bsvwvbund_11022021_D4303011423.htm",
      },
      {
        label:
          "BeamtVG – Gesetz über die Versorgung der Beamten und Richter des Bundes (Inhaltsverzeichnis)",
        url: "https://www.gesetze-im-internet.de/beamtvg/BJNR024850976.html",
      },
    ],
  },
  {
    id: "unfallfuersorge-beamte",
    who: "beamte",
    when: "unfall",
    title: "Unfallfürsorge (Beamte)",
    summary:
      "Beamten, denen bei einem Dienstunfall persönliche Gegenstände (z. B. Brille, Kleidung) beschädigt oder zerstört wurden, wird der Sachschaden in angemessenem Umfang ersetzt.",
    resources: [
      {
        label:
          "Bundesverwaltungsamt – Unfallausgleich (offizielle Erläuterung)",
        url: "https://bev.bund.de/personal/uebergreifende-leistungen/beamtenunfallfuersorge/unfallausgleich",
      },
      {
        label: "Beamten-Informationen – § 35 BeamtVG im Überblick",
        url: "https://www.beamten-informationen.de/beamtenversorgungsgesetz_paragraf_35",
      },
      {
        label:
          "Beamtenrecht Hannover – Dienstunfall: Unfallausgleich und Unfallruhegehalt",
        url: "https://beamtenrecht-hannover.de/dienstunfall-beamte-unfallausgleich-unfallruhegehalt/",
      },
      {
        label:
          "DBB – Unfallfürsorge: Überblick (inkl. Unfallruhegehalt, Erhöhtes Unfallruhegehalt)",
        url: "https://www.dbb.de/lexikon/themenartikel/u/unfallfuersorge.html",
      },
      {
        label: "DBB – Dienstunfall: Definition und Anerkennungsvoraussetzungen",
        url: "https://www.dbb.de/lexikon/themenartikel/d/dienstunfall.html",
      },
      {
        label: "beamten-informationen.de – § 36 BeamtVG Unfallruhegehalt",
        url: "https://www.beamten-informationen.de/index.php?wert=beamtenversorgungsgesetz_paragraf_36",
      },
      {
        label:
          "Destatis – 18 % der Neupensionierten 2023 wegen Dienstunfähigkeit; Pensionsausgaben 54,8 Mrd. €",
        url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2024/12/PD24_467_742.html",
      },
      {
        label: "§ 68 BeamtVG – Volltext (buzer.de)",
        url: "https://www.buzer.de/68_BeamtVG.htm",
      },
      {
        label: "ra.de – § 68 BeamtVG mit Rechtsprechung",
        url: "https://ra.de/g/beamtvg-68",
      },
      {
        label: "Destatis – Beamtenversorgung in Bund und Ländern (Ausgaben)",
        url: "https://www.destatis.de/DE/Themen/Staat/Oeffentlicher-Dienst/_inhalt.html",
      },
      {
        label: "§ 87 BeamtVG – Volltext (buzer.de)",
        url: "https://www.buzer.de/87_BeamtVG.htm",
      },
      {
        label: "ra.de – § 87 BeamtVG mit Rechtsprechung",
        url: "https://ra.de/g/beamtvg-87",
      },
    ],
  },
  {
    id: "uebergangsgeld-beamte",
    who: "beamte",
    when: "alter-ruhestand",
    title: "Übergangsgeld (Beamte)",
    summary:
      "Beamte, die ohne eigenes Verschulden entlassen werden, erhalten ein Übergangsgeld als Überbrückung. Die Höhe richtet sich nach der Dienstzeit und den zuletzt erhaltenen Bezügen.",
    resources: [
      {
        label:
          "Beamtenversorgungsrecht.de – § 47 Übergangsgeld (Bund) mit Erläuterungen",
        url: "https://www.beamtenversorgungsrecht.de/beamtvg_bund_paragraf_47",
      },
      {
        label:
          "LBV Baden-Württemberg – Übergangsgeld: Voraussetzungen und Berechnung",
        url: "https://lbv.landbw.de/-/ubergangsgeld",
      },
      {
        label:
          "Destatis – Versorgungsempfänger/-innen nach Beamtenversorgungsrecht (Tabelle)",
        url: "https://www.destatis.de/DE/Themen/Staat/Oeffentlicher-Dienst/Tabellen/versorgungsempfaenger-lr-insgesamt.html",
      },
      {
        label:
          "Destatis – Pressemitteilung: 1,42 Mio. Pensionäre im öffentlichen Dienst (Jan 2025), Ruhegehalt Ø 3.416 €",
        url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2025/12/PD25_455_742.html",
      },
      {
        label:
          "BMI – Beamtenversorgung: Übergangsgeld und Versorgung (Überblick)",
        url: "https://www.bmi.bund.de/DE/themen/oeffentlicher-dienst/beamtinnen-und-beamte/versorgung/versorgung-artikel.html",
      },
    ],
  },
  {
    id: "ausgleich-bei-besonderen-altersgrenzen",
    who: "beamte",
    when: "alter-ruhestand",
    title: "Ausgleich bei besonderen Altersgrenzen",
    summary:
      "Beamte in Laufbahnen mit besonderer Altersgrenze (z. B. Polizei, Feuerwehr), die früher in den Ruhestand treten müssen, erhalten eine einmalige Ausgleichszahlung.",
    resources: [
      {
        label:
          "§ 48 BeamtVG – Ausgleich bei besonderen Altersgrenzen (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/beamtvg/__48.html",
      },
      {
        label:
          "BeamtVG § 48 Ausgleich bei besonderen Altersgrenzen – Beamtenversorgungsrecht",
        url: "https://www.beamtenversorgungsrecht.de/beamtvg_bund_paragraf_48",
      },
      {
        label:
          "Ausgleich bei besonderen Altersgrenzen § 48 BeamtVG – beamten-online.de",
        url: "https://www.beamten-online.de/ausgleich_bei_besonderen_altersgrenzen_paragraf_48_beamtvg",
      },
    ],
  },
  {
    id: "familien-erziehungszuschlaege-beamtenversorgung",
    who: "beamte",
    when: "alter-ruhestand",
    title: "Familien-/Erziehungszuschläge (Beamtenversorgung)",
    summary:
      "Verheiratete Ruhestandsbeamte und Hinterbliebene erhalten einen Familienzuschlag zur Versorgung. Für Kinder wird ein kinderbezogener Anteil hinzugerechnet.",
    resources: [
      {
        label:
          "DRV – Arbeitskommentar § 50a BeamtVG (Kindererziehungszuschlag)",
        url: "https://rvrecht.deutsche-rentenversicherung.de/SharedDocs/rvRecht/05_Normen_und_Vertraege/02_A-B/BeamtVG/0050a/0050a_2009_07_01.html",
      },
      {
        label: "ra.de – § 50a BeamtVG mit Rechtsprechung und Kommentar",
        url: "https://ra.de/g/beamtvg-50a",
      },
      {
        label:
          "beamtenversorgung-online.de – § 50a Kindererziehungszuschlag: Erläuterungen",
        url: "https://www.beamtenversorgung-online.de/beamtenversorgungsgesetz_paragraf_50a",
      },
      {
        label: "Destatis – Beamtenversorgung in Bund und Ländern (Ausgaben)",
        url: "https://www.destatis.de/DE/Themen/Staat/Oeffentlicher-Dienst/_inhalt.html",
      },
      {
        label: "ra.de – § 50b BeamtVG mit Rechtsprechung und Kommentar",
        url: "https://ra.de/g/beamtvg-50b",
      },
      {
        label:
          "beamtenversorgungsrecht.de – § 50c BeamtVG Kinderzuschlag zum Witwengeld",
        url: "https://www.beamtenversorgungsrecht.de/beamtvg_bund_paragraf_50_c",
      },
      {
        label: "ra.de – § 50c BeamtVG mit Rechtsprechung",
        url: "https://ra.de/g/beamtvg-50c",
      },
      {
        label: "ra.de – § 50d BeamtVG mit Rechtsprechung und Kommentar",
        url: "https://ra.de/g/beamtvg-50d",
      },
      {
        label:
          "beamtenversorgung-online.de – Pflegezuschlag in der Beamtenversorgung",
        url: "https://www.beamtenversorgung-online.de/beamtenversorgung/pflegezuschlag_beamtenversorgung",
      },
      {
        label:
          "Bundestag WD 6 – Pflegezuschlag in der Beamtenversorgung im Vergleich (Gutachten, PDF)",
        url: "https://www.bundestag.de/resource/blob/683838/bfcfa3ada63c8f499733dd8e87dbf99c/WD-6-152-19-pdf.pdf",
      },
      {
        label: "§ 50e BeamtVG – Volltext (buzer.de)",
        url: "https://www.buzer.de/50e_BeamtVG.htm",
      },
      {
        label: "ra.de – § 50e BeamtVG mit Rechtsprechung",
        url: "https://ra.de/g/beamtvg-50e",
      },
    ],
  },
  {
    id: "hinterbliebenenversorgung-nach-scheidung-beamte",
    who: "beamte",
    when: "tod-hinterbliebene",
    title: "Hinterbliebenenversorgung nach Scheidung (Beamte)",
    summary:
      "Geschiedene Ehepartner von Beamten können unter bestimmten Voraussetzungen Unterhaltsbeiträge aus der Beamtenversorgung erhalten, wenn ein entsprechender Unterhaltsanspruch bestand.",
    resources: [
      {
        label: "§ 86 BeamtVG – Volltext (buzer.de)",
        url: "https://www.buzer.de/gesetz/3394/a47408.htm",
      },
      {
        label:
          "beihilfe-online.de – § 86 BeamtVG Hinterbliebenenversorgung: Erläuterungen",
        url: "https://www.beihilfe-online.de/beamtenversorgungsgesetz_paragraf_86",
      },
      {
        label: "ra.de – § 86 BeamtVG mit Rechtsprechung",
        url: "https://ra.de/g/beamtvg-86",
      },
    ],
  },
  {
    id: "beratungshilfe",
    who: "alle",
    when: "schulden-recht-beratung",
    title: "Beratungshilfe",
    summary:
      "Wer eine anwaltliche Beratung außerhalb eines Gerichtsverfahrens benötigt und die Kosten dafür nicht aufbringen kann, erhält beim Amtsgericht einen Beratungsschein. Die Anwaltskosten trägt der Staat; die ratsuchende Person zahlt eine Schutzgebühr von derzeit 15 €.",
    resources: [
      {
        label: "Bundesministerium der Justiz – Beratungshilfe",
        url: "https://www.bmj.de/DE/themen/gerichtsverfahren/beratungshilfe_prozesskostenhilfe/beratungshilfe_prozesskostenhilfe_node.html",
      },
    ],
  },
  {
    id: "riester-foerderung",
    who: "beamte",
    when: "alter-ruhestand",
    title: "Riester-Förderung",
    summary:
      "Eigenbeiträge zu einem zertifizierten Riester-Altersvorsorgevertrag können als Sonderausgaben steuerlich geltend gemacht werden. Zusätzlich gibt es staatliche Zulagen (Grundzulage + Kinderzulage).",
    resources: [
      {
        label: "BMF – Statistische Auswertungen zur Riester-Förderung bis 2024",
        url: "https://www.bundesfinanzministerium.de/Content/DE/Standardartikel/Themen/Steuern/Steuerliche_Themengebiete/Altersvorsorge/2025-11-17-Statistik-Riester-Foerderung-bis-2024.html",
      },
      {
        label: "BMF Datenportal – Riester-Förderung Open Data",
        url: "https://www.bundesfinanzministerium.de/Datenportal/Daten/offene-daten/steuern-zoelle/Statistische-Auswertungen-zur-Riester-Foerderung/Statistische-Auswertungen-zur-Riester-Foerderung.html",
      },
      {
        label:
          "BMF – Riester-Auszahlungsstatistik (Verträge in der Auszahlungsphase)",
        url: "https://www.bundesfinanzministerium.de/Content/DE/Standardartikel/Themen/Steuern/Steuerliche_Themengebiete/Altersvorsorge/2024-04-10-riester-auszahlungsstatistik.html",
      },
      {
        label:
          "Finanzamt NRW – Zusätzlicher Sonderausgabenabzug nach § 10a EStG",
        url: "https://www.finanzamt.nrw.de/steuerinfos/privatpersonen/riester/zusaetzlicher-sonderausgabenabzug",
      },
      {
        label: "BMAS – Statistik zu Riester-Verträgen (Open Data)",
        url: "https://www.bmas.de/DE/Service/Statistiken-Open-Data/Statistik-zu-Riester-Vertraegen/statistik-zu-riester-vertraegen.html",
      },
      {
        label: "BMF – Statistische Auswertungen zur Riester-Förderung bis 2023",
        url: "https://www.bundesfinanzministerium.de/Content/DE/Standardartikel/Themen/Steuern/Steuerliche_Themengebiete/Altersvorsorge/2024-11-15-Statistik-Riester-Foerderung-bis-2023.html",
      },
      {
        label:
          "BMAS – Statistik zur privaten Altersvorsorge (Riester-Verträge)",
        url: "https://www.bmas.de/DE/Service/Statistiken-Open-Data/Statistik-zu-Riester-Vertraegen/statistik-zusaetzliche-altersvorsorge.html",
      },
      {
        label:
          "BZSt – Altersvorsorge: Zulagenantrag und Bescheinigungsverfahren",
        url: "https://www.bzst.de/DE/Privatpersonen/Vorsorge/Altersvorsorge/altersvorsorge_node.html",
      },
      {
        label: "BZSt – Ergänzungsbogen Kinderzulage 2024",
        url: "https://www.bzst.de/SharedDocs/Downloads/DE/Altersvorsorge/2024_ergaenzungsbogen_kinderzulage.pdf?__blob=publicationFile&v=2",
      },
    ],
  },
  {
    id: "entlastungsbetrag-fuer-alleinerziehende",
    who: "familie",
    when: "kind-familie",
    title: "Entlastungsbetrag für Alleinerziehende",
    summary:
      "Alleinerziehende mit mindestens einem Kind im Haushalt erhalten einen jährlichen Steuerfreibetrag von 4.260 € (plus 240 € für jedes weitere Kind), der die steuerliche Mehrbelastung gegenüber Paaren abmildert.",
    resources: [
      {
        label: "BMF LStH 2025 – §24b Entlastungsbetrag für Alleinerziehende",
        url: "https://lsth.bundesfinanzministerium.de/lsth/2025/B-Anhaenge/Anhang-16/inhalt.html",
      },
      {
        label:
          "Bundestag – Sachverständige für stärkere Entlastung Alleinerziehender (2022)",
        url: "https://www.bundestag.de/dokumente/textarchiv/2022/kw25-pa-familie-alleinerziehende-895804",
      },
    ],
  },
  {
    id: "pflegepauschbetrag",
    who: "pflegende-angehoerige",
    when: "angehoerige-pflegen",
    title: "Pflegepauschbetrag",
    summary:
      "Wer eine nahestehende pflegebedürftige Person unentgeltlich und nicht erwerbsmäßig pflegt, kann einen jährlichen Steuerpauschbetrag von 600 € (Pflegegrad 2), 1.100 € (Pflegegrad 3) oder 1.800 € (Pflegegrad 4/5 oder Merkzeichen H) geltend machen.",
    resources: [
      {
        label: "BMF LStH 2025 – § 33b Abs. 6 Pflegepauschbetrag",
        url: "https://esth.bundesfinanzministerium.de/lsth/2025/B-Anhaenge/Anhang-16-33b/inhalt.html",
      },
    ],
  },
  {
    id: "kindergeld",
    who: "familie",
    when: "kind-familie",
    title: "Kindergeld",
    summary:
      "Monatlich 259 € pro Kind für alle Kinder bis 18 Jahre (unter Voraussetzungen bis 25 Jahre). Ausgezahlt von der Familienkasse der Bundesagentur für Arbeit. Dient als Sockelleistung des Familienleistungsausgleichs.",
    resources: [
      {
        label: "Kindergeld: Anspruch, Höhe & Dauer (Familienkasse)",
        url: "https://www.arbeitsagentur.de/familie-und-kinder/infos-rund-um-kindergeld/kindergeld-anspruch-hoehe-dauer",
      },
      {
        label:
          "Bilanz der Familienkasse 2025: 55,3 Mrd. € für 17,6 Mio. Kinder",
        url: "https://www.arbeitsagentur.de/presse/2026-04-familien-im-blick-die-bilanz-der-familienkasse-2025",
      },
      {
        label:
          "Statistik: Kindergeld und Kinderzuschlag (Bundesagentur für Arbeit)",
        url: "https://statistik.arbeitsagentur.de/DE/Statischer-Content/Statistiken/Themen-im-Fokus/Familie-Kinder/Famka/Famka.html",
      },
      {
        label: "§ 31 EStG – Familienleistungsausgleich",
        url: "https://www.gesetze-im-internet.de/estg/__31.html",
      },
      {
        label: "§ 1 BKGG – Kindergeld für Grenzpendler und EU-Beschäftigte",
        url: "https://www.gesetze-im-internet.de/bkgg_1996/__1.html",
      },
      {
        label:
          "BA – Kindergeld an andere Personen auszahlen lassen (Abzweigung)",
        url: "https://www.arbeitsagentur.de/familie-und-kinder/infos-rund-um-kindergeld/kindergeld-auszahlung-andere-personen",
      },
      {
        label:
          "BA – Formular KG 11e: Antrag auf Abzweigung des Kindergeldes (PDF)",
        url: "https://www.arbeitsagentur.de/datei/antraganteiligeskindergeld_ba031880.pdf",
      },
      {
        label:
          "Bundestag WD – Voraussetzungen für die Kindergeldabzweigung (PDF, 2019)",
        url: "https://www.bundestag.de/resource/blob/653694/WD-4-093-19-pdf.pdf",
      },
    ],
  },
  {
    id: "zinsloses-darlehen-waehrend-familienpflegezeit",
    who: "pflegende-angehoerige",
    when: "angehoerige-pflegen",
    title: "Zinsloses Darlehen während Familienpflegezeit",
    summary:
      "Um den Einkommensverlust durch die Arbeitszeitreduzierung abzufedern, können Beschäftigte ein zinsloses staatliches Darlehen beantragen, das in monatlichen Raten ausgezahlt und nach der Pflegezeit zurückgezahlt wird.",
    resources: [
      {
        label: "FPfZG § 2 – Familienpflegezeit (Freistellung)",
        url: "https://www.gesetze-im-internet.de/fpfzg/__2.html",
      },
      {
        label: "FPfZG § 7 – Stundung und Teilerlass des Darlehens",
        url: "https://www.gesetze-im-internet.de/fpfzg/__7.html",
      },
      {
        label: "PflegeZG § 3 – Pflegezeit (vollständige Freistellung)",
        url: "https://www.gesetze-im-internet.de/pflegezg/__3.html",
      },
    ],
  },
  {
    id: "zuschuss-bei-beschaeftigungsverbot-in-elternzeit-beamte",
    who: "beamte",
    when: "schwangerschaft-geburt",
    title: "Zuschuss bei Beschäftigungsverbot in Elternzeit (Beamte)",
    summary:
      "Beamtinnen, die während der Elternzeit einem Beschäftigungsverbot unterliegen, erhalten einen täglichen Zuschuss von 13 € als Ausgleich für den Einkommensverlust.",
    resources: [
      {
        label: "MuSchEltZV – Verordnung (Volltext)",
        url: "https://www.gesetze-im-internet.de/muscheltzv/",
      },
      {
        label: "BMG: Mutterschutz – Mutterschaftsgeld & Arbeitgeberzuschuss",
        url: "https://www.bundesgesundheitsministerium.de/themen/praevention/mutterschutz.html",
      },
    ],
  },
  {
    id: "elternzeit-fuer-beamte-muscheltzv",
    who: "beamte",
    when: "schwangerschaft-geburt",
    title: "Elternzeit für Beamte (MuSchEltZV)",
    summary:
      "Beamtinnen und Beamte haben denselben Anspruch auf Elternzeit wie Arbeitnehmer. Während der Elternzeit ruhen die Dienst- und Anwärterbezüge; Elterngeld kann beantragt werden.",
    resources: [
      {
        label: "§§ 15 f. BEEG – Anspruch auf Elternzeit",
        url: "https://www.gesetze-im-internet.de/beeg/__15.html",
      },
      {
        label: "Familienportal: Elternzeit",
        url: "https://familienportal.de/familienportal/familienleistungen/elternzeit",
      },
    ],
  },
  {
    id: "verfahrenskostenhilfe-vkh",
    who: "familie",
    when: "schulden-recht-beratung",
    title: "Verfahrenskostenhilfe (VKH)",
    summary:
      "Das Pendant zur Prozesskostenhilfe in Familiensachen — etwa für Scheidung, Sorgerecht, Umgang oder Unterhalt. Die §§ 76–78 und § 113 FamFG verweisen weitgehend auf die ZPO-Regelungen zur Prozesskostenhilfe.",
    resources: [
      {
        label:
          "Bundesministerium der Justiz – Beratungshilfe und Prozess-/Verfahrenskostenhilfe",
        url: "https://www.bmj.de/DE/themen/gerichtsverfahren/beratungshilfe_prozesskostenhilfe/beratungshilfe_prozesskostenhilfe_node.html",
      },
    ],
  },
  {
    id: "mutterschaftsgeld",
    who: "erwerbstaetige",
    when: "schwangerschaft-geburt",
    title: "Mutterschaftsgeld",
    summary:
      "Gesetzlich krankenversicherte Arbeitnehmerinnen erhalten während der Mutterschutzfristen (6 Wochen vor bis 8 Wochen nach der Geburt) Mutterschaftsgeld von der Krankenkasse — bis zu 13 € täglich. Nicht gesetzlich Versicherte erhalten eine einmalige Zahlung vom Bundesamt für Familie.",
    resources: [
      {
        label:
          "SGB V § 24i – Mutterschaftsgeld der gesetzlichen Krankenversicherung",
        url: "https://www.gesetze-im-internet.de/sgb_5/__24i.html",
      },
      {
        label:
          "Bundesamt für Soziale Sicherung – Mutterschaftsgeld (Übersicht und Antrag)",
        url: "https://www.bundesamtsozialesicherung.de/de/mutterschaftsgeld/ueberblick-1/",
      },
      {
        label:
          "Familienportal – Mutterschaftsgeld des Bundesamtes für Soziale Sicherung",
        url: "https://familienportal.de/familienportal/familienleistungen/mutterschaftsleistungen/kann-ich-mutterschaftsgeld-des-bundesamtes-fuer-soziale-sicherung-bekommen--125020",
      },
      {
        label: "MuSchG § 3 – Schutzfristen vor und nach der Entbindung",
        url: "https://www.gesetze-im-internet.de/muschg_2018/__3.html",
      },
      {
        label: "MuSchG § 20 – Arbeitgeberzuschuss zum Mutterschaftsgeld",
        url: "https://www.gesetze-im-internet.de/muschg_2018/__20.html",
      },
      {
        label: "EStG § 3 Nr. 1d – Steuerfreiheit Mutterschaftsgeld",
        url: "https://www.gesetze-im-internet.de/estg/__3.html",
      },
      {
        label:
          "BEEG § 2b – Bemessungszeitraum Elterngeld (Ausschluss von Mutterschutzmonaten)",
        url: "https://www.gesetze-im-internet.de/beeg/__2b.html",
      },
      {
        label: "BEEG § 3 – Anrechnung von Mutterschaftsgeld auf Elterngeld",
        url: "https://www.gesetze-im-internet.de/beeg/__3.html",
      },
    ],
  },
  {
    id: "arbeitgeberzuschuss-zum-mutterschaftsgeld",
    who: "erwerbstaetige",
    when: "schwangerschaft-geburt",
    title: "Arbeitgeberzuschuss zum Mutterschaftsgeld",
    summary:
      "Der Arbeitgeber stockt das Mutterschaftsgeld der Krankenkasse auf den durchschnittlichen Nettolohn auf. Übersteigt das Nettoeinkommen 13 € täglich, trägt er die Differenz.",
    resources: [
      {
        label:
          "Familienportal des Bundes – Arbeitgeberzuschuss zum Mutterschaftsgeld",
        url: "https://familienportal.de/familienportal/familienleistungen/mutterschaftsleistungen/wann-und-wie-kann-ich-den-arbeitgeberzuschuss-zum-mutterschaftsgeld-bekommen--124856",
      },
    ],
  },
  {
    id: "kv-pv-beitragserstattung-waehrend-elternzeit",
    who: "erwerbstaetige",
    when: "schwangerschaft-geburt",
    title: "KV/PV-Beitragserstattung während Elternzeit",
    summary:
      "Arbeitgeber, die während der Elternzeit eines Beschäftigten keine Bezüge zahlen, können die Arbeitgeber- und Arbeitnehmeranteile zur Kranken- und Pflegeversicherung vom Bundesamt für Familie erstattet bekommen.",
    resources: [
      {
        label: "MuSchEltZV – Mutterschutz- und Elternzeitverordnung (Volltext)",
        url: "https://www.gesetze-im-internet.de/muscheltzv/",
      },
      {
        label:
          "BAFzA – Aufwendungserstattung für Arbeitgeber (BEEG / Elternzeit)",
        url: "https://www.bafza.de/aufgaben/erstattungsleistungen",
      },
      {
        label: "BVA – Elternzeit: Informationen für Bundesbedienstete",
        url: "https://www.bva.bund.de/DE/Services/Behoerden/Personalverwaltung/Beamte/Urlaub/Elternzeit/elternzeit_node.html",
      },
    ],
  },
  {
    id: "beratung-fuer-buergergeld-beziehende",
    who: "alle",
    when: "existenzsicherung",
    title: "Beratung für Bürgergeld-Beziehende",
    summary:
      "Das Jobcenter berät Bürgergeld-Empfängerinnen und -Empfänger zu Möglichkeiten der Arbeitsaufnahme und unterstützt sie dabei, ihren Lebensunterhalt wieder selbst zu sichern.",
    resources: [
      {
        label:
          "Bundesagentur für Arbeit – Bürgergeld: Beratung und Vermittlung",
        url: "https://www.arbeitsagentur.de/buergergeld",
      },
    ],
  },
  {
    id: "potenzialanalyse-und-kooperationsplan",
    who: "alle",
    when: "existenzsicherung",
    title: "Potenzialanalyse & Kooperationsplan",
    summary:
      "Das Jobcenter erstellt gemeinsam mit dem Arbeitssuchenden eine Analyse der individuellen Stärken und Hemmnisse und legt in einem Kooperationsplan konkrete Schritte zur Eingliederung fest.",
    resources: [
      {
        label:
          "BMAS – Bürgergeld: Kooperationsplan statt Eingliederungsvereinbarung",
        url: "https://www.bmas.de/DE/Arbeit/Grundsicherung-Buergergeld/buergergeld.html",
      },
    ],
  },
  {
    id: "kommunale-eingliederungsleistungen",
    who: "behinderung",
    when: "existenzsicherung",
    title: "Kommunale Eingliederungsleistungen",
    summary:
      "Ergänzende kommunale Hilfen wie Kinderbetreuung, Schuldnerberatung, psychosoziale Betreuung und Suchtberatung, die eine Arbeitsaufnahme erst ermöglichen.",
    resources: [
      {
        label: "BMAS – Eingliederungsleistungen im Bürgergeld",
        url: "https://www.bmas.de/DE/Arbeit/Grundsicherung-Buergergeld/Beratung-und-Vermittlung/eingliederungsleistungen.html",
      },
      {
        label: "Statistik BA – Grundsicherung für Arbeitsuchende (SGB II)",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Grundsicherung-fuer-Arbeitsuchende-SGBII/Grundsicherung-fuer-Arbeitsuchende-SGBII-Nav.html",
      },
      {
        label: "BMAS – Evaluation: Das Teilhabechancengesetz wirkt (IAB 2024)",
        url: "https://www.bmas.de/DE/Service/Presse/Meldungen/2024/evaluation-durch-das-iab-das-teilhabechancengesetz-wirkt.html",
      },
    ],
  },
  {
    id: "einstiegsgeld",
    who: "alle",
    when: "existenzsicherung",
    title: "Einstiegsgeld",
    summary:
      "Befristeter finanzieller Zuschuss für Bürgergeld-Beziehende, die eine Erwerbstätigkeit aufnehmen oder eine selbstständige Tätigkeit beginnen, um den Übergang in den Arbeitsmarkt zu erleichtern.",
    resources: [
      {
        label:
          "Bundesagentur für Arbeit – Wissensdatenbank: Einstiegsgeld §16b",
        url: "https://www.arbeitsagentur.de/wissensdatenbank-sgbii/16b-buergergeld-einstiegsgeld",
      },
      {
        label: "Statistik BA – Förderung: Überblick Förderstatistik SGB II/III",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Foerderung-und-berufliche-Rehabilitation/Ueberblick/Ueberblick-Nav.html",
      },
      {
        label:
          "IAB – Kosten und Nutzen des Einstiegsgelds für Gründende (2025)",
        url: "https://doku.iab.de/grauepap/2025/Einstiegsgeld_Gruendende_Kosten_Nutzen.pdf",
      },
      {
        label:
          "IAB-Forum – Anschubhilfe im Bürgergeld könnte Erwerbsanreize stärken",
        url: "https://iab-forum.de/eine-anschubhilfe-im-buergergeld-koennte-die-erwerbsanreize-erheblich-staerken/",
      },
      {
        label: "BA – Fachliche Weisungen § 16b SGB II (Einstiegsgeld)",
        url: "https://www.arbeitsagentur.de/datei/fw-sgb-ii-16b_ba015829.pdf",
      },
    ],
  },
  {
    id: "eingliederungshilfe-fuer-selbststaendige",
    who: "selbststaendige",
    when: "existenzsicherung",
    title: "Eingliederungshilfe für Selbstständige",
    summary:
      "Bürgergeld-Beziehende, die sich selbstständig machen, können Darlehen oder Zuschüsse für notwendige Investitionen wie Arbeitsmittel oder Anschaffungen erhalten.",
    resources: [
      {
        label: "Bundesagentur für Arbeit – Bürgergeld und Selbständigkeit",
        url: "https://www.arbeitsagentur.de/buergergeld",
      },
      {
        label: "BMAS – Eingliederung von Selbständigen (§ 16c SGB II)",
        url: "https://www.bmas.de/DE/Arbeit/Grundsicherung-Buergergeld/Beratung-und-Vermittlung/eingliederung-von-selbstaendigen.html",
      },
      {
        label:
          "IHK Leipzig – Leistungen zur Eingliederung von Selbständigen nach § 16c SGB II",
        url: "https://www.leipzig.ihk.de/infos-fuer-unternehmen/themen/gruendung-foerderung/foerdermittelkompass/leistungen-zur-eingliederung-von-selbstaendigen-nach-16c-sgb-ii/",
      },
    ],
  },
  {
    id: "arbeitsgelegenheiten-ein-euro-jobs",
    who: "alle",
    when: "existenzsicherung",
    title: "Arbeitsgelegenheiten (Ein-Euro-Jobs)",
    summary:
      "Zeitlich befristete gemeinnützige Arbeitsmöglichkeiten für Langzeitarbeitslose, die mit einer Mehraufwandsentschädigung vergütet werden und Tagesstruktur sowie den Einstieg in den Arbeitsmarkt fördern.",
    resources: [
      {
        label:
          "BIAJ – Ausgaben Jobcenter für Arbeitsgelegenheiten 2013 bis Jan 2026",
        url: "https://biaj.de/archiv-materialien/2192-ausgaben-der-jobcenter-ge-fuer-arbeitsgelegenheiten-ein-euro-jobs-2013-bis-januar-2026.html",
      },
      {
        label: "IAB-Forum – Ein-Euro-Jobs wirken unter bestimmten Bedingungen",
        url: "https://iab-forum.de/ein-euro-jobs-wirken-aber-nur-unter-bestimmten-bedingungen/",
      },
      {
        label: "Statistik BA – Grundsicherung für Arbeitsuchende (SGB II)",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Grundsicherung-fuer-Arbeitsuchende-SGBII/Grundsicherung-fuer-Arbeitsuchende-SGBII-Nav.html",
      },
      {
        label: "Aktuelle Sozialpolitik – Entwicklung AGH und Teilhabe 2025",
        url: "https://aktuelle-sozialpolitik.de/2025/08/06/arbeitsgelegenheiten-und-teilhabe-am-arbeitsmarkt/",
      },
    ],
  },
  {
    id: "eingliederung-von-langzeitarbeitslosen-2-jahre",
    who: "alle",
    when: "existenzsicherung",
    title: "Eingliederung von Langzeitarbeitslosen (2+ Jahre)",
    summary:
      "Lohnkostenzuschuss für Arbeitgeber, die Personen einstellen, die mindestens zwei Jahre arbeitslos waren. Der Zuschuss läuft befristet und sinkt schrittweise ab.",
    resources: [
      {
        label:
          "IAB-Kurzbericht 13/2024 – Lohnkostenzuschuss §16e: hohe und stabile Beschäftigungswirkung",
        url: "https://doku.iab.de/kurzber/2024/kb2024-13.pdf",
      },
      {
        label:
          "IAB-Forum – EvL erreicht arbeitsmarktfernere Klientel als Eingliederungszuschuss",
        url: "https://iab-forum.de/teilhabechancengesetz-das-foerderinstrument-eingliederung-von-langzeitarbeitslosen-erreicht-eine-wesentlich-arbeitsmarktfernere-klientel-als-der-eingliederungszuschuss/",
      },
      {
        label: "BMAS – Informationen zum Teilhabechancengesetz (§16e & §16i)",
        url: "https://www.bmas.de/DE/Arbeit/Grundsicherung-Buergergeld/Beschaeftigungschanchen-im-SGB-II/Teilhabechancengesetz/ueberblick-fuer-arbeitgeber-und-langzeitarbeitslose.html",
      },
      {
        label:
          "Bundesagentur für Arbeit – Förderung von Langzeitarbeitslosen (Arbeitgeberinfo)",
        url: "https://www.arbeitsagentur.de/unternehmen/finanziell/foerderung-von-langzeitarbeitslosen",
      },
    ],
  },
  {
    id: "freie-foerderung",
    who: "alle",
    when: "existenzsicherung",
    title: "Freie Förderung",
    summary:
      "Flexible Mittel des Jobcenters für innovative oder einzelfallbezogene Eingliederungsmaßnahmen, die über die gesetzlich geregelten Standardleistungen hinausgehen.",
    resources: [
      {
        label: "BA – Freie Förderung (Übersicht)",
        url: "https://www.arbeitsagentur.de/arbeitslos-arbeit-finden/buergergeld/arbeit-finden/jobchancen-verbessern/freie-foerderung",
      },
      {
        label: "BMAS – Eingliederungsleistungen im Bürgergeld",
        url: "https://www.bmas.de/DE/Arbeit/Grundsicherung-Buergergeld/Beratung-und-Vermittlung/eingliederungsleistungen.html",
      },
      {
        label: "BA – Fachliche Weisungen § 16f SGB II (PDF)",
        url: "https://www.arbeitsagentur.de/datei/verfahrensregelungen-p16f-sgb_ba034540.pdf",
      },
      {
        label: "Wikipedia – Freie Förderung",
        url: "https://de.wikipedia.org/wiki/Freie_F%C3%B6rderung",
      },
    ],
  },
  {
    id: "foerderung-schwer-erreichbarer-junger-menschen",
    who: "familie",
    when: "existenzsicherung",
    title: "Förderung schwer erreichbarer junger Menschen",
    summary:
      "Niedrigschwellige sozialpädagogische Begleitung für Jugendliche und junge Erwachsene mit komplexen Problemlagen, die durch die Regelangebote des Jobcenters nicht erreicht werden.",
    resources: [
      {
        label:
          "Kooperationsverbund Jugendsozialarbeit – § 16h SGB II Überblick",
        url: "https://jugendsozialarbeit.de/themen/themenarchiv/jugendsozialarbeit-staerken/foerderung-schwer-erreichbarer-junger-menschen/",
      },
      {
        label:
          "IAB-Forum – Einbeziehung schwer erreichbarer Jugendlicher in die Grundsicherung (Evaluation)",
        url: "https://iab-forum.de/einbeziehung-schwer-zu-erreichender-junger-menschen-in-die-grundsicherung-eine-erfolgsgeschichte/",
      },
      {
        label:
          "BAGarbeit – § 16h SGB II: Jugendliche frühzeitiger fördern, Wirksamkeit erhöhen",
        url: "https://www.bagarbeit.de/einzelner-beitrag/%C2%A7-16h-sgb-ii-jugendliche-fruehzeitiger-foerdern-wirksamkeit-erhoehen/",
      },
      {
        label: "ueberaus.de – § 16h SGB II schließt institutionelle Lücken",
        url: "https://www.ueberaus.de/wws/16h-sgb-2-schliesst-luecken.php",
      },
    ],
  },
  {
    id: "teilhabe-am-arbeitsmarkt-sozialer-arbeitsmarkt",
    who: "alle",
    when: "existenzsicherung",
    title: "Teilhabe am Arbeitsmarkt (sozialer Arbeitsmarkt)",
    summary:
      "Geförderte sozialversicherungspflichtige Beschäftigung für sehr langzeitarbeitslose Personen (mind. 6 der letzten 7 Jahre), mit begleitendem Coaching durch das Jobcenter über bis zu 5 Jahre.",
    resources: [
      {
        label:
          "Statistik BA – Teilhabechancen: Arbeitsmarkt kompakt (Dez 2024)",
        url: "https://statistik.arbeitsagentur.de/DE/Statischer-Content/Statistiken/Themen-im-Fokus/Langzeitarbeitslosigkeit/generische-Publikationen/AM-kompakt-Teilhabechancen.pdf",
      },
      {
        label: "Statistik BA – §16i SGB II: 5 Jahre nach Einführung",
        url: "https://statistik.arbeitsagentur.de/DE/Statischer-Content/Statistiken/Themen-im-Fokus/Langzeitarbeitslosigkeit/generische-Publikationen/AM-kompakt-5Jahre-TaAM.pdf",
      },
      {
        label:
          "BMAS – Erfolgreiche Bilanz nach zwei Jahren Teilhabechancengesetz",
        url: "https://www.bmas.de/DE/Service/Presse/Meldungen/2020/teilhabechancengesetz-teilhabe-am-arbeitsmarkt.html",
      },
    ],
  },
  {
    id: "ganzheitliche-betreuung",
    who: "alle",
    when: "existenzsicherung",
    title: "Ganzheitliche Betreuung",
    summary:
      "Intensive, fallmanagerorientierte Betreuung für Bürgergeld-Beziehende mit besonders komplexen Problemlagen, die mehrere Hemmnisse gleichzeitig überwinden müssen.",
    resources: [
      {
        label: "Bundesagentur für Arbeit – Weisung zu § 16k SGB II",
        url: "https://www.arbeitsagentur.de/datei/weisung-202305011_ba044151.pdf",
      },
      {
        label: "BAG Arbeit – § 16k SGB II: Potenzial bleibt ungenutzt (2025)",
        url: "https://www.bagarbeit.de/news/ganzheitliche-betreuung-%c2%a7-16k-sgb-ii-potenzial-bleibt-ungenutzt/",
      },
      {
        label: "DGCC – Ganzheitliche Betreuung im Bürgergeld-Gesetz",
        url: "https://www.dgcc.de/ganzheitliche-betreuung-buergergeld-gesetz/",
      },
    ],
  },
  {
    id: "buergergeld-regelbedarf",
    who: "alle",
    when: "existenzsicherung",
    title: "Bürgergeld (Regelbedarf)",
    summary:
      "Monatlicher Regelsatz für Erwachsene im erwerbsfähigen Alter, die ihren Lebensunterhalt nicht aus eigenem Einkommen oder Vermögen sichern können. Ersetzt seit 2023 das frühere ALG II.",
    resources: [
      {
        label: "BMAS – Leistungen und Bedarfe im Bürgergeld",
        url: "https://www.bmas.de/DE/Arbeit/Grundsicherung-Buergergeld/Leistungen-und-Bedarfe-im-Buergergeld/leistungen-und-bedarfe-im-buergergeld.html",
      },
      {
        label: "Statistik BA – Grundsicherung SGB II (interaktiv)",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Interaktive-Statistiken/Grundsicherung/Grundsicherung-Nav.html",
      },
      {
        label: "Statistik BA – Aktuelle Eckwerte SGB II",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Grundsicherung-fuer-Arbeitsuchende-SGBII/Aktuelle-Eckwerte-Nav.html",
      },
      {
        label: "BIAJ – Bürgergeld-Ausgaben 2010–2025 (monatlich)",
        url: "https://biaj.de/archiv-materialien/2129-arbeitslosengeld-ii-sozialgeld-und-buergergeld-ausgaben-von-2010-bis-juli-2025.html",
      },
      {
        label: "Regelbedarfsstufen-Fortschreibungsverordnung 2025 (RBSFV)",
        url: "https://www.gesetze-im-internet.de/rbsfv_2025/",
      },
      {
        label:
          "DIW Wochenbericht 49/2019 – Starke Nichtinanspruchnahme von Grundsicherung",
        url: "https://www.diw.de/de/diw_01.c.699957.de/publikationen/wochenberichte/2019_49_1/starke_nichtinanspruchnahme_von_grundsicherung_deutet_auf_hohe_verdeckte_altersarmut.html",
      },
    ],
  },
  {
    id: "mehrbedarfe-buergergeld",
    who: "alle",
    when: "existenzsicherung",
    title: "Mehrbedarfe (Bürgergeld)",
    summary:
      "Zuschläge auf den Bürgergeld-Regelbedarf für Lebenslagen mit unausweichlichen Mehrkosten: Schwangerschaft, Alleinerziehung, Behinderung/Reha, kostenaufwändige Ernährung, dezentrales Warmwasser sowie Härtefälle. Alle Mehrbedarfe zusammen sind auf 100 % des Regelbedarfs gedeckelt.",
    resources: [
      {
        label: "BMAS – Leistungen und Bedarfe im Bürgergeld",
        url: "https://www.bmas.de/DE/Arbeit/Grundsicherung-Buergergeld/Leistungen-und-Bedarfe-im-Buergergeld/leistungen-und-bedarfe-im-buergergeld.html",
      },
      {
        label:
          "Bundesagentur für Arbeit – Wissensdatenbank SGB II: § 21 Mehrbedarfe",
        url: "https://www.arbeitsagentur.de/wissensdatenbank-sgbii/21-buergergeld-mehrbedarfe",
      },
      {
        label:
          "rechtsanwalt-und-sozialrecht.de – Mehrbedarfe im Bürgergeld & Sozialhilfe (Überblick)",
        url: "https://rechtsanwalt-und-sozialrecht.de/mehrbedarfe-buergergeld-sozialhilfe-ueberblick/",
      },
      {
        label: "buerger-geld.org – Mehrbedarf für Schwangere",
        url: "https://www.buerger-geld.org/buergergeld/mehrbedarf-schwangerschaft/",
      },
      {
        label:
          "buergergeld.org – Mehrbedarf Warmwasser (Erklärung und Tabelle)",
        url: "https://www.buergergeld.org/sgb-ii/mehrbedarf-warmwasser/",
      },
    ],
  },
  {
    id: "kosten-der-unterkunft-und-heizung-buergergeld",
    who: "alle",
    when: "existenzsicherung",
    title: "Kosten der Unterkunft & Heizung (Bürgergeld)",
    summary:
      "Das Jobcenter übernimmt die angemessenen Miet- und Heizkosten von Bürgergeld-Beziehenden. Was als angemessen gilt, richtet sich nach den lokalen Mietverhältnissen und der Haushaltsgröße.",
    resources: [
      {
        label:
          "Bundesrechnungshof – Bericht: Gewährung von Leistungen für Unterkunft und Heizung (2024)",
        url: "https://www.bundesrechnungshof.de/SharedDocs/Downloads/DE/Berichte/2024/leistungen-unterkunft-und-heizung-volltext.pdf?__blob=publicationFile&v=2",
      },
      {
        label: "Bundesagentur für Arbeit – Bürgergeld: Wohnen und Miete",
        url: "https://www.arbeitsagentur.de/arbeitslos-arbeit-finden/buergergeld/wohnen",
      },
      {
        label: "BIAJ – Bürgergeld-Ausgaben 2010–2025 (inkl. KdU-Anteile)",
        url: "https://biaj.de/archiv-kurzmitteilungen/2146-arbeitslosengeld-ii-sozialgeld-und-buergergeld-ausgaben-von-2010-bis-september-2025.html",
      },
    ],
  },
  {
    id: "erstausstattung-und-einmalige-bedarfe-buergergeld",
    who: "familie",
    when: "existenzsicherung",
    title: "Erstausstattung & einmalige Bedarfe (Bürgergeld)",
    summary:
      "Liegt ein unabweisbarer Bedarf vor, der durch den Regelsatz nicht gedeckt werden kann, kann das Jobcenter ein unverzinsliches Darlehen gewähren, das mit 5 % monatlich aufgerechnet wird.",
    resources: [
      {
        label: "Bundesagentur für Arbeit – Darlehen bei unabweisbarem Bedarf",
        url: "https://www.arbeitsagentur.de/arbeitslos-arbeit-finden/buergergeld/finanziell-absichern/darlehen-unabweisbarer-bedarf",
      },
      {
        label:
          "Bundesagentur für Arbeit – Wissensdatenbank: § 24 Abweichende Erbringung von Leistungen",
        url: "https://www.arbeitsagentur.de/wissensdatenbank-sgbii/24-buergergeld-abweichende-erbringung-von-leistungen",
      },
      {
        label: "Bundesagentur für Arbeit – Bürgergeld",
        url: "https://www.arbeitsagentur.de/buergergeld",
      },
      {
        label: "BA – Einmalige Leistungen beantragen (offizielle Übersicht)",
        url: "https://www.arbeitsagentur.de/arbeitslos-arbeit-finden/buergergeld/finanziell-absichern/einmalige-leistungen",
      },
      {
        label:
          "Bürgergeld.org – Erstausstattung der Wohnung: was das Jobcenter übernimmt",
        url: "https://www.buergergeld.org/sgb-ii/erstausstattung/",
      },
      {
        label:
          "Hamburg.de – Fachanweisung zu § 24 Abs. 3 Satz 1 Nr. 1 SGB II (Erstausstattung Wohnung)",
        url: "https://www.hamburg.de/politik-und-verwaltung/behoerden/sozialbehoerde/rechtliche-grundlagen/infoline/fachliche-vorgaben-und-hinweise/sgb-ii-grundsicherung-fuer-arbeitsuchende/fa-sgbii-24-1-erstausstattung-whg-45774",
      },
      {
        label:
          "rechtsanwalt-und-sozialrecht.de – Erstausstattung im Bürgergeld & Sozialhilfe (§ 24 SGB II / § 31 SGB XII)",
        url: "https://rechtsanwalt-und-sozialrecht.de/erstausstattung-buergergeld-sozialhilfe/",
      },
      {
        label:
          "gegen-hartz.de – Bürgergeld-Zuschuss für die Babyerstausstattung",
        url: "https://www.gegen-hartz.de/buergergeld-erstausstattung-fuer-ein-baby",
      },
      {
        label:
          "betanet – Sozialhilfe & Bürgergeld: Einmalige Leistungen bei Bedarf",
        url: "https://www.betanet.de/sozialhilfe-einmalige-leistungen.html",
      },
    ],
  },
  {
    id: "kv-pv-zuschuesse-buergergeld",
    who: "alle",
    when: "existenzsicherung",
    title: "KV/PV-Zuschüsse (Bürgergeld)",
    summary:
      "Bürgergeld-Beziehende, die in einer privaten Krankenversicherung verbleiben müssen, erhalten einen Zuschuss zu ihren Beiträgen in Höhe der Beiträge im Basistarif.",
    resources: [
      {
        label:
          "BA Wissensdatenbank – § 26 SGB II: Zuschüsse zu Kranken- und Pflegeversicherung",
        url: "https://www.arbeitsagentur.de/wissensdatenbank-sgbii/26-buergergeld-zuschuesse-zu-beitraegen-zur-krankenversicherung-und-pflegeversicherung",
      },
      {
        label:
          "Rechtsanwalt Sozialrecht – PKV-Zuschuss und Basistarif bei Bürgergeld (2026)",
        url: "https://rechtsanwalt-und-sozialrecht.de/privat-krankenversicherte-arbeitslosengeld-ii-anspruch-beitraege/",
      },
      {
        label:
          "BA Merkblatt – Zuschuss zu Kranken- und Pflegeversicherungsbeiträgen (PDF)",
        url: "https://www.arbeitsagentur.de/datei/merkblatt-zuschusskvpv_ba034865.pdf",
      },
      {
        label: "buergergeld.org – Krankenversicherung und Bürgergeld",
        url: "https://www.buergergeld.org/sgb-ii/krankenversicherung/",
      },
      {
        label: "Bundesagentur für Arbeit – Bürgergeld",
        url: "https://www.arbeitsagentur.de/buergergeld",
      },
    ],
  },
  {
    id: "bildung-und-teilhabe-buergergeld",
    who: "alle",
    when: "existenzsicherung",
    title: "Bildung & Teilhabe (Bürgergeld)",
    summary:
      "Das Bildungs- und Teilhabepaket deckt Bildungs- und Freizeitbedarfe von Kindern aus einkommensschwachen Familien: Schul- und Kitaausflüge, Klassenfahrten, Schulbedarf, Schülerbeförderung, Lernförderung, Mittagsverpflegung und soziale Teilhabe.",
    resources: [
      {
        label: "BMAS – Leistungen des Bildungspakets (Übersicht)",
        url: "https://www.bmas.de/DE/Arbeit/Grundsicherung-Buergergeld/Bildungspaket/Leistungen/leistungen-bildungspaket_art.html",
      },
      {
        label: "Bundesagentur für Arbeit – Informationen zum Bildungspaket",
        url: "https://www.arbeitsagentur.de/familie-und-kinder/informationen-zum-bildungspaket",
      },
      {
        label: "Familienportal des Bundes – Bildung und Teilhabe",
        url: "https://familienportal.de/familienportal/familienleistungen/bildung-und-teilhabe",
      },
      {
        label:
          "Bundeszentrum für Ernährung – Bildungs- und Teilhabepaket: Schulessen",
        url: "https://www.gemeinsamgutessen.de/schulessen/schulessen-im-ganztag/bildungs-und-teilhabepaket",
      },
      {
        label:
          "Bundesrechnungshof – Bericht: Leistungen für Bildung und Teilhabe nach § 28 SGB II (2022)",
        url: "https://www.bundesrechnungshof.de/SharedDocs/Downloads/DE/Berichte/2022/bildung-teilhabe-volltext.pdf?__blob=publicationFile&v=2",
      },
    ],
  },
  {
    id: "saison-kurzarbeitergeld",
    who: "erwerbstaetige",
    when: "lohnausfall-im-job",
    title: "Saison-Kurzarbeitergeld",
    summary:
      "Sonderform des Kurzarbeitergelds für Betriebe des Baugewerbes und verwandter Branchen während der Schlechtwetterperiode (Dezember–März), kombiniert mit ergänzenden Leistungen wie Wintergeld.",
    resources: [
      {
        label: "BA – Saison-Kurzarbeitergeld beantragen",
        url: "https://www.arbeitsagentur.de/unternehmen/finanziell/kurzarbeitergeldformen/saison-kurzarbeitergeld",
      },
      {
        label: "BA Merkblatt 8d – Saison-KuG und ergänzende Leistungen (PDF)",
        url: "https://www.arbeitsagentur.de/datei/merkblatt-8d-saison-kug_ba034265.pdf",
      },
      {
        label: "Statistik BA – Kurzarbeitergeld (interaktiv)",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Leistungen-SGBIII/Kurzarbeitergeld/Kurzarbeitergeld-Nav.html",
      },
    ],
  },
  {
    id: "wintergeld",
    who: "erwerbstaetige",
    when: "arbeitslosigkeit",
    title: "Wintergeld",
    summary:
      "Ergänzende Leistung zum Saison-Kurzarbeitergeld: Zuschuss für Bauarbeiter, die Guthaben aus Arbeitszeitkonten zur Vermeidung witterungsbedingter Kündigungen einbringen.",
    resources: [
      {
        label: "BA – Wintergeld beantragen",
        url: "https://www.arbeitsagentur.de/unternehmen/finanziell/wintergeld-beantragen",
      },
      {
        label: "SOKA-DACH – Winterbeschäftigungsumlage (inkl. ZWG und MWG)",
        url: "https://soka-dach.de/service-hilfe/winterbeschaeftigungsumlage/",
      },
      {
        label: "BA – Merkblatt 8d: Saison-KUG und ergänzende Leistungen (PDF)",
        url: "https://www.arbeitsagentur.de/datei/merkblatt-8d-saison-kug_ba034265.pdf",
      },
      {
        label: "Statistik BA – Kurzarbeitergeld (inkl. Saison-KUG)",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Leistungen-SGBIII/Kurzarbeitergeld/Kurzarbeitergeld-Nav.html",
      },
      {
        label:
          "Bundesportal – Mehraufwands-Wintergeld als ergänzende Leistung beantragen",
        url: "https://verwaltung.bund.de/leistungsverzeichnis/de/leistung/99038004017002",
      },
    ],
  },
  {
    id: "heimarbeiter-kurzarbeitergeld",
    who: "erwerbstaetige",
    when: "lohnausfall-im-job",
    title: "Heimarbeiter-Kurzarbeitergeld",
    summary:
      "Sonderform des Kurzarbeitergelds für in Heimarbeit Beschäftigte, deren Arbeit witterungs- oder wirtschaftsbedingt vorübergehend wegfällt.",
    resources: [
      {
        label: "BA – Kurzarbeitergeld: Anzeige, Antrag und Berechnung",
        url: "https://www.arbeitsagentur.de/unternehmen/finanziell/kurzarbeitergeldformen/kurzarbeitergeld-anzeige-antrag-berechnung",
      },
      {
        label: "BA – Kurzarbeitergeld: Informationen für Arbeitnehmer",
        url: "https://www.arbeitsagentur.de/arbeitslos-arbeit-finden/arbeitslosengeld/finanzielle-hilfen/kurzarbeitergeld-arbeitnehmer",
      },
      {
        label: "Statistik BA – Kurzarbeitergeld (Fachstatistik)",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Leistungen-SGBIII/Kurzarbeitergeld/Kurzarbeitergeld-Nav.html",
      },
    ],
  },
  {
    id: "sv-beitragserstattung-bei-weiterbildung-in-kurzarbeit",
    who: "erwerbstaetige",
    when: "lohnausfall-im-job",
    title: "SV-Beitragserstattung bei Weiterbildung in Kurzarbeit",
    summary:
      "Arbeitgeber erhalten die Sozialversicherungsbeiträge teilweise erstattet, wenn Beschäftigte die Zeit der Kurzarbeit für eine zertifizierte Weiterbildung nutzen.",
    resources: [
      {
        label: "BA – Fachliche Weisungen § 106a SGB III (PDF)",
        url: "https://www.arbeitsagentur.de/datei/fw-paragraph-106a-sgb-iii-weiterbildung-bei-kurzarbeit_ba146875.pdf",
      },
      {
        label: "BA – Berufliche Weiterbildung während KUG-Bezug (PDF)",
        url: "https://www.arbeitsagentur.de/vor-ort/datei/berufliche-weiterbildung-waehrend-kug-bezug_ba111222.pdf",
      },
      {
        label: "Statistik BA – Kurzarbeitergeld (Fachstatistik)",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Leistungen-SGBIII/Kurzarbeitergeld/Kurzarbeitergeld-Nav.html",
      },
    ],
  },
  {
    id: "transfermassnahmen",
    who: "erwerbstaetige",
    when: "arbeitslosigkeit",
    title: "Transfermaßnahmen",
    summary:
      "Hälftige Bezuschussung von Qualifizierungs- und Beratungsmaßnahmen für Beschäftigte, die von Entlassung bedroht sind, um den Übergang in eine neue Beschäftigung zu erleichtern.",
    resources: [
      {
        label: "BA – Transfermaßnahmen & Transferkurzarbeitergeld",
        url: "https://www.arbeitsagentur.de/unternehmen/finanziell/kurzarbeitergeldformen/transfermassnahmen-transferkurzarbeitergeld",
      },
      {
        label: "BMAS – Transferleistungen",
        url: "https://www.bmas.de/DE/Arbeit/Arbeitsfoerderung/Beschaeftigungssicherung/transferleistungen.html",
      },
      {
        label: "BA – Merkblatt 8c: Transferleistungen (PDF)",
        url: "https://www.arbeitsagentur.de/datei/merkblatt-8c-transferleistung_ba034290.pdf",
      },
      {
        label: "BA – Beschäftigtentransfer: Übersicht (PDF)",
        url: "https://www.arbeitsagentur.de/datei/dok_ba032580.pdf",
      },
      {
        label: "Statistik BA – Kurzarbeitergeld (inkl. Transfer-KUG)",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Leistungen-SGBIII/Kurzarbeitergeld/Kurzarbeitergeld-Nav.html",
      },
    ],
  },
  {
    id: "transferkurzarbeitergeld",
    who: "erwerbstaetige",
    when: "lohnausfall-im-job",
    title: "Transferkurzarbeitergeld",
    summary:
      "Lohnersatzleistung für Beschäftigte, die in eine betriebsorganisatorisch eigenständige Einheit (Transfergesellschaft) wechseln, um eine neue Beschäftigung zu finden — bis zu 12 Monate.",
    resources: [
      {
        label: "BA – Transfermaßnahmen & Transferkurzarbeitergeld",
        url: "https://www.arbeitsagentur.de/unternehmen/finanziell/kurzarbeitergeldformen/transfermassnahmen-transferkurzarbeitergeld",
      },
      {
        label: "BA – Transfer-Kug: Anzeige, Antrag, Abschlussprüfung",
        url: "https://www.arbeitsagentur.de/unternehmen/finanziell/kurzarbeitergeldformen/transfermassnahmen-transferkurzarbeitergeld/transferkurzarbeitergeld-anzeige-antrag-abschlusspruefung",
      },
      {
        label: "BA – Merkblatt Transferleistungen (PDF)",
        url: "https://www.arbeitsagentur.de/datei/merkblatt-8c-transferleistung_ba034290.pdf",
      },
      {
        label: "Wikipedia – Transferkurzarbeitergeld",
        url: "https://de.wikipedia.org/wiki/Transferkurzarbeitergeld",
      },
    ],
  },
  {
    id: "weiterbildungsfoerderung-bei-transferkurzarbeitergeld",
    who: "erwerbstaetige",
    when: "lohnausfall-im-job",
    title: "Weiterbildungsförderung bei Transferkurzarbeitergeld",
    summary:
      "Hälftige Übernahme der Weiterbildungskosten für Personen in einer Transfergesellschaft, die ihre Chancen am Arbeitsmarkt durch Qualifizierung verbessern wollen.",
    resources: [
      {
        label:
          "BA – Transfermaßnahmen & Transferkurzarbeitergeld (inkl. § 111a)",
        url: "https://www.arbeitsagentur.de/unternehmen/finanziell/kurzarbeitergeldformen/transfermassnahmen-transferkurzarbeitergeld",
      },
      {
        label: "BA – Merkblatt 8c: Transferleistungen (PDF)",
        url: "https://www.arbeitsagentur.de/datei/merkblatt-8c-transferleistung_ba034290.pdf",
      },
      {
        label: "BMAS – Transferleistungen",
        url: "https://www.bmas.de/DE/Arbeit/Arbeitsfoerderung/Beschaeftigungssicherung/transferleistungen.html",
      },
    ],
  },
  {
    id: "besondere-teilhabeleistungen-sgb-iii",
    who: "behinderung",
    when: "behinderung-teilhabe",
    title: "Besondere Teilhabeleistungen (SGB III)",
    summary:
      "Besondere Förderleistungen für Menschen mit Behinderungen, die durch die allgemeinen Leistungen nicht abgedeckt werden, z. B. Internatsunterbringung oder spezielle technische Hilfsmittel.",
    resources: [
      {
        label: "§ 113 SGB III – Volltext auf sozialgesetzbuch-sgb.de",
        url: "https://www.sozialgesetzbuch-sgb.de/sgbiii/113.html",
      },
      {
        label:
          "REHADAT-Statistik – Leistungen der Bundesagentur für Arbeit (berufliche Rehabilitation)",
        url: "https://www.rehadat-statistik.de/statistiken/leistungen/bundesagentur-fuer-arbeit/",
      },
      {
        label:
          "BA Statistik – Förderung und berufliche Rehabilitation (Überblick)",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Foerderung-und-berufliche-Rehabilitation/Foerderung-und-berufliche-Rehabilitation-Nav.html",
      },
      {
        label:
          "REHADAT-Statistik – Ausgaben für Leistungen zur beruflichen Teilhabe (alle Träger)",
        url: "https://www.rehadat-statistik.de/de/Leistungen/Leistungen_Rehatraeger/index.html",
      },
      {
        label: "BA – Berufliche Rehabilitation: Übersicht",
        url: "https://www.arbeitsagentur.de/menschen-mit-behinderungen/berufliche-rehabilitation",
      },
      {
        label:
          "BA – Merkblatt 12: Förderung der Teilhabe am Arbeitsleben (PDF)",
        url: "https://www.arbeitsagentur.de/datei/merkblatt-12-teilhabe_ba029695.pdf",
      },
      {
        label: "Statistik BA – Berufliche Rehabilitation",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Foerderung-und-berufliche-Rehabilitation/Berufliche-Rehabilitation/Berufliche-Rehabilitation-Nav.html",
      },
    ],
  },
  {
    id: "uebergangsgeld-mit-vorbeschaeftigungszeit",
    who: "behinderung",
    when: "behinderung-teilhabe",
    title: "Übergangsgeld (mit Vorbeschäftigungszeit)",
    summary:
      "Einkommensersatz für Menschen mit Behinderungen während einer Maßnahme zur Teilhabe am Arbeitsleben, wenn zuvor Versicherungszeiten in der Arbeitslosenversicherung bestehen.",
    resources: [
      {
        label: "BA – Fachliche Weisungen § 119 SGB III (PDF)",
        url: "https://www.arbeitsagentur.de/datei/dok_ba014633.pdf",
      },
      {
        label: "BA – Berufliche Rehabilitation: Überblick und Antrag",
        url: "https://www.arbeitsagentur.de/menschen-mit-behinderungen/berufliche-rehabilitation",
      },
      {
        label:
          "BA – Merkblatt 12: Förderung der Teilhabe am Arbeitsleben (PDF)",
        url: "https://www.arbeitsagentur.de/datei/merkblatt-12-teilhabe_ba029695.pdf",
      },
      {
        label:
          "Statistik BA – BAB, Ausbildungsgeld und Übergangsgeld (monatlich)",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Leistungen-SGBIII/Berufsausbildungsbeihilfe-Ausbildungsgeld-Uebergangsgeld/Berufsausbildungsbeihilfe-Ausbildungsgeld-Uebergangsgeld-Nav.html",
      },
    ],
  },
  {
    id: "uebergangsgeld-ohne-vorbeschaeftigungszeit",
    who: "behinderung",
    when: "behinderung-teilhabe",
    title: "Übergangsgeld (ohne Vorbeschäftigungszeit)",
    summary:
      "Übergangsgeld für Menschen mit Behinderungen ohne ausreichende Vorversicherungszeit — in der Regel als pauschalierte Leistung berechnet.",
    resources: [
      {
        label: "§ 121 SGB III – Volltext auf sozialgesetzbuch-sgb.de",
        url: "https://www.sozialgesetzbuch-sgb.de/sgbiii/121.html",
      },
      {
        label: "BA – Berufliche Rehabilitation: Überblick und Antrag",
        url: "https://www.arbeitsagentur.de/menschen-mit-behinderungen/berufliche-rehabilitation",
      },
      {
        label:
          "BA – Merkblatt 12: Förderung der Teilhabe am Arbeitsleben (PDF)",
        url: "https://www.arbeitsagentur.de/datei/merkblatt-12-teilhabe_ba029695.pdf",
      },
      {
        label:
          "Statistik BA – BAB, Ausbildungsgeld und Übergangsgeld (monatlich)",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Leistungen-SGBIII/Berufsausbildungsbeihilfe-Ausbildungsgeld-Uebergangsgeld/Berufsausbildungsbeihilfe-Ausbildungsgeld-Uebergangsgeld-Nav.html",
      },
    ],
  },
  {
    id: "ausbildungsgeld",
    who: "behinderung",
    when: "ausbildung",
    title: "Ausbildungsgeld",
    summary:
      "Finanzielle Unterstützung für Menschen mit Behinderungen während einer regulären Berufsausbildung oder einer vorbereitenden Maßnahme.",
    resources: [
      {
        label: "BA – Ausbildung mit Behinderungen: Überblick und Antrag",
        url: "https://www.arbeitsagentur.de/bildung/ausbildung/ausbildung-mit-behinderung",
      },
      {
        label: "BA – Erläuterungen zum Ausbildungsgeld (PDF)",
        url: "https://www.arbeitsagentur.de/datei/erlaeuterung-ausbildungsgeld_ba047268.pdf",
      },
      {
        label:
          "BA – Fachliche Weisungen § 122 SGB III (gültig ab 01.08.2023, PDF)",
        url: "https://www.arbeitsagentur.de/datei/dok_ba014638.pdf",
      },
      {
        label:
          "betanet – Ausbildungsgeld: Höhe, Anspruch und Berechnung (2025)",
        url: "https://www.betanet.de/behinderung-ausbildungsgeld.html",
      },
      {
        label:
          "Statistik BA – BAB, Ausbildungsgeld und Übergangsgeld (monatlich)",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Leistungen-SGBIII/Berufsausbildungsbeihilfe-Ausbildungsgeld-Uebergangsgeld/Berufsausbildungsbeihilfe-Ausbildungsgeld-Uebergangsgeld-Nav.html",
      },
      {
        label: "Betanet – Werkstätten für behinderte Menschen (WfbM)",
        url: "https://www.betanet.de/werkstaetten-fuer-behinderte-menschen-wfbm-und-andere-leistungsanbieter.html",
      },
    ],
  },
  {
    id: "unterkunft-und-verpflegung-bei-reha-massnahmen",
    who: "behinderung",
    when: "behinderung-teilhabe",
    title: "Unterkunft & Verpflegung bei Reha-Maßnahmen",
    summary:
      "Übernahme der Kosten für behindertengerechte Unterkunft und Verpflegung, wenn eine Maßnahme zur Teilhabe eine auswärtige Unterbringung erfordert.",
    resources: [
      {
        label: "BA – Fachliche Weisungen § 128 SGB III (PDF)",
        url: "https://www.arbeitsagentur.de/datei/dok_ba034130.pdf",
      },
      {
        label: "§ 128 SGB III – Volltext bei sozialgesetzbuch-sgb.de",
        url: "https://www.sozialgesetzbuch-sgb.de/sgbiii/128.html",
      },
      {
        label: "§ 86 SGB III – Kosten für auswärtige Unterbringung (Grundnorm)",
        url: "https://www.sozialgesetzbuch-sgb.de/sgbiii/86.html",
      },
    ],
  },
  {
    id: "arbeitslosengeld-i",
    who: "erwerbstaetige",
    when: "arbeitslosigkeit",
    title: "Arbeitslosengeld I",
    summary:
      "Lohnersatzleistung für versicherungspflichtig Beschäftigte, die arbeitslos werden. Die Höhe beträgt 60 % (oder 67 % mit Kind) des pauschalierten Nettoentgelts; Bezugsdauer 6–24 Monate.",
    resources: [
      {
        label: "Bundesagentur für Arbeit – ALG I: Anspruch, Höhe & Dauer",
        url: "https://www.arbeitsagentur.de/arbeitslos-arbeit-finden/arbeitslosengeld/finanzielle-hilfen/arbeitslosengeld-anspruch-hoehe-dauer",
      },
      {
        label: "Statistik BA – Arbeitslosengeld (Fachstatistik)",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Leistungen-SGBIII/Arbeitslosengeld/Arbeitslosengeld-Nav.html",
      },
      {
        label: "BIAJ – Arbeitslosengeld-Ausgaben 2024: 22,2 Mrd. Euro",
        url: "https://biaj.de/archiv-kurzmitteilungen/2045-arbeitslosengeld-ausgaben-2024-22-2-milliarden-euro-5-6-milliarden-mehr-als-2022.html",
      },
      {
        label: "§ 137 SGB III – Anwartschaftszeit",
        url: "https://www.gesetze-im-internet.de/sgb_3/__137.html",
      },
      {
        label: "§ 147 SGB III – Bezugsdauer",
        url: "https://www.gesetze-im-internet.de/sgb_3/__147.html",
      },
      {
        label: "§ 149–153 SGB III – Leistungssatz und Bemessungsentgelt",
        url: "https://www.gesetze-im-internet.de/sgb_3/__149.html",
      },
      {
        label: "§ 159 SGB III – Sperrzeiten",
        url: "https://www.gesetze-im-internet.de/sgb_3/__159.html",
      },
      {
        label: "§ 38 SGB III – Frühzeitige Arbeitssuchendmeldung",
        url: "https://www.gesetze-im-internet.de/sgb_3/__38.html",
      },
      {
        label: "Merkblatt Förderung der beruflichen Weiterbildung (BA)",
        url: "https://www.arbeitsagentur.de/datei/merkblatt-6-weiterbildung_ba035860.pdf",
      },
      {
        label:
          "Statistik BA – Förderung beruflicher Weiterbildung (Instrumente)",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Foerderung-und-berufliche-Rehabilitation/Instrumente/Instrumente-Nav.html",
      },
      {
        label: "BMAS – Förderung der beruflichen Weiterbildung",
        url: "https://www.bmas.de/DE/Arbeit/Aus-und-Weiterbildung/Berufliche-Weiterbildung/Foerderung-der-beruflichen-Weiterbildung/foerderung-der-beruflichen-weiterbildung.html",
      },
    ],
  },
  {
    id: "alg-bei-eingeschraenkter-leistungsfaehigkeit-nahtlosigkeit",
    who: "alle",
    when: "arbeitslosigkeit",
    title: "ALG bei eingeschränkter Leistungsfähigkeit (Nahtlosigkeit)",
    summary:
      "Überbrückendes Arbeitslosengeld für Personen, die wegen einer gesundheitlichen Einschränkung nicht voll erwerbsfähig sind, solange die Rentenversicherung noch nicht entschieden hat (Nahtlosigkeitsregelung).",
    resources: [
      {
        label:
          "sozialversicherung-kompetent.de – Nahtlosigkeitsregelung: Funktionsweise und Voraussetzungen",
        url: "https://sozialversicherung-kompetent.de/sozialversicherung/allgemeines/792-nahtlosigkeitsregelung.html",
      },
      {
        label:
          "rechtsanwalt-und-sozialrecht.de – ALG trotz Krankheit: Nahtlosigkeitsregelung erklärt",
        url: "https://rechtsanwalt-und-sozialrecht.de/nahtlosigkeitsregelung-145-sgb-iii/",
      },
      {
        label: "BA – Fachliche Weisungen § 145 SGB III (PDF)",
        url: "https://www.arbeitsagentur.de/datei/fw-sgb-iii-145_ba036050.pdf",
      },
    ],
  },
  {
    id: "teilarbeitslosengeld",
    who: "alle",
    when: "arbeitslosigkeit",
    title: "Teilarbeitslosengeld",
    summary:
      "Arbeitslosengeld für Personen, die eine von mehreren Teilzeitbeschäftigungen verlieren und dadurch teilarbeitslos werden — z. B. bei Verlust eines Zweitjobs.",
    resources: [
      {
        label: "BA – Fachliche Weisungen § 162 SGB III (Teilarbeitslosengeld)",
        url: "https://www.arbeitsagentur.de/datei/fw-sgb-iii-162_ba036070.pdf",
      },
      {
        label: "Statistik BA – Leistungen SGB III: Erläuterungen und Methodik",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Grundlagen/Statistik-erklaert/Leistungen-SGBIII-Nav.html",
      },
    ],
  },
  {
    id: "insolvenzgeld",
    who: "erwerbstaetige",
    when: "lohnausfall-im-job",
    title: "Insolvenzgeld",
    summary:
      "Sicherung der ausstehenden Nettolöhne für die letzten drei Monate vor Eröffnung des Insolvenzverfahrens des Arbeitgebers — finanziert über die Insolvenzgeldumlage und gezahlt von der Bundesagentur für Arbeit.",
    resources: [
      {
        label: "Statistik BA – Insolvenzgeld (Fachstatistik)",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Leistungen-SGBIII/Insolvenzgeld/Insolvenzgeld-Nav.html",
      },
      {
        label:
          "BIAJ – Insolvenzgeld-Ausgaben 2024 so hoch wie im Krisenjahr 2009",
        url: "https://biaj.de/archiv-kurzmitteilungen/2046-insolvenzgeld-ausgaben-2024-so-hoch-wie-im-krisenjahr-2009-nominal.html",
      },
      {
        label: "Destatis – Vorfinanzierung von Insolvenzgeld",
        url: "https://www.destatis.de/DE/Themen/Branchen-Unternehmen/Unternehmen/Gewerbemeldungen-Insolvenzen/Glossar/vorfinanzierung-insolvenzgeld.html",
      },
    ],
  },
  {
    id: "mehrbedarfe-und-haertefalldarlehen-fuer-azubis-sgb-iii",
    who: "familie",
    when: "ausbildung",
    title: "Mehrbedarfe & Härtefalldarlehen für Azubis (SGB II)",
    summary:
      "Schwangere Auszubildende erhalten zusätzlich zur Berufsausbildungsbeihilfe einen Mehrbedarf analog zum SGB II — als Aufschlag auf den anerkannten Bedarf.",
    resources: [
      {
        label: "Bundesagentur für Arbeit – Berufsausbildungsbeihilfe (BAB)",
        url: "https://www.arbeitsagentur.de/bildung/ausbildung/berufsausbildungsbeihilfe-bab",
      },
      {
        label: "Merkblatt Berufsausbildungsbeihilfe (BA, PDF)",
        url: "https://www.arbeitsagentur.de/datei/merkblatt-bab_ba030750.pdf",
      },
      {
        label: "BAB-Rechner der Bundesagentur für Arbeit",
        url: "https://www.babrechner.arbeitsagentur.de/",
      },
    ],
  },
  {
    id: "berufs-und-weiterbildungsberatung",
    who: "erwerbstaetige",
    when: "weiterbildung-aufstieg",
    title: "Berufs- & Weiterbildungsberatung",
    summary:
      "Die Bundesagentur für Arbeit berät kostenlos und unabhängig zu Berufswahl, Ausbildungsmöglichkeiten und Weiterbildungsperspektiven — für Jugendliche und Erwachsene.",
    resources: [
      {
        label: "BA – Berufsberatung für Schülerinnen und Schüler",
        url: "https://www.arbeitsagentur.de/bildung/berufsberatung",
      },
      {
        label: "BA – Berufsberatung im Erwerbsleben (für Erwachsene)",
        url: "https://www.arbeitsagentur.de/karriere-und-weiterbildung/berufsberatung-im-erwerbsleben",
      },
      {
        label:
          "BA – Bilanz Berufsberatungsjahr 2024/2025 (Statistik Ausbildungsmarkt)",
        url: "https://www.arbeitsagentur.de/news/bilanz-berufsberatung-2024-2025",
      },
    ],
  },
  {
    id: "proaktive-beratung-fuer-schulabgaenger",
    who: "bildung",
    when: "arbeitslosigkeit",
    title: "Proaktive Beratung für Schulabgänger",
    summary:
      "Schulen melden Schulabgänger ohne Anschlussperspektive an die Agentur für Arbeit. Diese kontaktiert die jungen Menschen aktiv und bietet Beratungs- und Vermittlungsleistungen an.",
    resources: [
      {
        label: "Bundesagentur für Arbeit – Berufsberatung für junge Menschen",
        url: "https://www.arbeitsagentur.de/bildung/berufsberatung",
      },
    ],
  },
  {
    id: "berufsorientierungsmassnahmen",
    who: "alle",
    when: "arbeitslosigkeit",
    title: "Berufsorientierungsmaßnahmen",
    summary:
      "Vielfältige Angebote der Berufsberatung in Schulen, Berufsinformationszentren und durch Praktika, um Schülerinnen und Schülern die Berufswahl zu erleichtern.",
    resources: [
      {
        label: "Bundesagentur für Arbeit – Berufsberatung vor dem Erwerbsleben",
        url: "https://www.arbeitsagentur.de/bildung/berufsberatung",
      },
    ],
  },
  {
    id: "arbeitsvermittlung",
    who: "alle",
    when: "arbeitslosigkeit",
    title: "Arbeitsvermittlung",
    summary:
      "Agentur für Arbeit und Jobcenter vermitteln aktiv zwischen Arbeitssuchenden und Arbeitgebern und unterstützen bei der Stellensuche, einschließlich Bewerbungsangeboten.",
    resources: [
      {
        label: "SGB III § 36 – Grundsätze der Vermittlung",
        url: "https://www.gesetze-im-internet.de/sgb_3/__36.html",
      },
      {
        label:
          "Bundesagentur für Arbeit – Arbeitsvermittlung durch das Jobcenter",
        url: "https://www.arbeitsagentur.de/arbeitslos-arbeit-finden/buergergeld/arbeit-finden/arbeitsvermittlung",
      },
      {
        label: "Statistik BA – Leistungen SGB III: Aktuelle Eckwerte",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Leistungen-SGBIII/Aktuelle-Eckwerte-Nav.html",
      },
    ],
  },
  {
    id: "potenzialanalyse-sgb-iii",
    who: "alle",
    when: "arbeitslosigkeit",
    title: "Potenzialanalyse (SGB III)",
    summary:
      "Individuelle Stärken- und Schwächenanalyse durch die Agentur für Arbeit als Grundlage für eine passgenaue Eingliederungsvereinbarung.",
    resources: [
      {
        label: "Bundesagentur für Arbeit – Beratung für Arbeitnehmer",
        url: "https://www.arbeitsagentur.de/arbeitslos-arbeit-finden",
      },
    ],
  },
  {
    id: "potenzialanalyse-fuer-asylsuchende",
    who: "gefluechtete",
    when: "arbeitslosigkeit",
    title: "Potenzialanalyse für Asylsuchende",
    summary:
      "Frühzeitige Erfassung vorhandener Qualifikationen, Berufserfahrung und Sprachkenntnisse von Asylsuchenden, um Wege in Ausbildung oder Arbeit individuell zu planen.",
    resources: [
      {
        label:
          "IAB – Arbeitsmarktintegration von Geflüchteten (Forschungsübersicht)",
        url: "https://iab.de/arbeitsmarktintegration-von-gefluechteten/",
      },
      {
        label:
          "IAB – 10 Jahre Fluchtmigration: Beschäftigungsquote nähert sich Durchschnitt an (2025)",
        url: "https://iab.de/presseinfo/10-jahre-fluchtmigration-beschaeftigungsquote-von-gefluechteten-naehert-sich-dem-durchschnitt-in-deutschland-an/",
      },
      {
        label:
          "IAB – Erwerbstätigenquoten 8 Jahre nach Zuzug bei 68 Prozent (Pressemitteilung)",
        url: "https://iab.de/presseinfo/iab-presseinformation-arbeitsmarktintegration/",
      },
      {
        label: "Bundesagentur für Arbeit – Arbeitsmarktzugang für Geflüchtete",
        url: "https://www.arbeitsagentur.de/menschen-aus-dem-ausland",
      },
    ],
  },
  {
    id: "vermittlungsbudget",
    who: "alle",
    when: "arbeitslosigkeit",
    title: "Vermittlungsbudget",
    summary:
      "Flexible Mittel der Agentur für Arbeit zur Unterstützung der Arbeitssuche, z. B. für Bewerbungskosten, Fahrtkosten zu Vorstellungsgesprächen, Arbeitskleidung oder Umzugskosten.",
    resources: [
      {
        label: "BA – Förderung aus dem Vermittlungsbudget",
        url: "https://www.arbeitsagentur.de/arbeitslos-arbeit-finden/arbeitslosengeld/finanzielle-hilfen/foerderung-aus-dem-vermittlungsbudget",
      },
      {
        label: "Wikipedia – Vermittlungsbudget",
        url: "https://de.wikipedia.org/wiki/Vermittlungsbudget",
      },
      {
        label:
          "Statistik BA – Aktuelle Eckwerte Förderung und berufliche Rehabilitation",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Foerderung-und-berufliche-Rehabilitation/Aktuelle-Eckwerte-Nav.html",
      },
      {
        label: "BA – Merkblatt Vermittlungsbudget (PDF)",
        url: "https://www.arbeitsagentur.de/datei/dok_ba026250.pdf",
      },
    ],
  },
  {
    id: "aktivierungs-und-eingliederungsmassnahmen",
    who: "erwerbstaetige",
    when: "arbeitslosigkeit",
    title: "Aktivierungs- & Eingliederungsmaßnahmen",
    summary:
      "Förderung der Teilnahme an Maßnahmen zur Aktivierung und beruflichen Eingliederung, z. B. Bewerbungstraining, Praktika oder Qualifizierungsmodule bei zugelassenen Trägern.",
    resources: [
      {
        label:
          "Bundesagentur für Arbeit – Aktivierungs- und Vermittlungsgutschein",
        url: "https://www.arbeitsagentur.de/arbeitslos-arbeit-finden/aktivierungs-vermittlungsgutschein",
      },
    ],
  },
  {
    id: "arbeitshilfen-fuer-menschen-mit-behinderungen",
    who: "behinderung",
    when: "behinderung-teilhabe",
    title: "Arbeitshilfen für Menschen mit Behinderungen",
    summary:
      "Zuschüsse für technische Arbeitshilfen oder Ausstattungsanpassungen am Arbeitsplatz, damit Menschen mit Behinderungen ihre Tätigkeit ausüben können.",
    resources: [
      {
        label:
          "Bundesagentur für Arbeit – Förderung der Teilhabe behinderter Menschen am Arbeitsleben",
        url: "https://www.arbeitsagentur.de/menschen-mit-behinderungen",
      },
      {
        label: "BA – Arbeitsmarktsituation schwerbehinderter Menschen 2024",
        url: "https://statistik.arbeitsagentur.de/DE/Statischer-Content/Statistiken/Themen-im-Fokus/Menschen-mit-Behinderungen/generische-Publikation/Arbeitsmarktsituation-schwerbehinderter-Menschen.pdf?__blob=publicationFile",
      },
      {
        label: "BA Statistik – Menschen mit Behinderungen (Themenportal)",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Themen-im-Fokus/Menschen-mit-Behinderungen/Menschen-mit-Behinderungen-Nav.html",
      },
      {
        label:
          "BA Statistik – Instrumente der Förderung und beruflichen Rehabilitation",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Foerderung-und-berufliche-Rehabilitation/Instrumente/Instrumente-Nav.html",
      },
      {
        label: "BA – Merkblatt 12: Förderung der Teilhabe am Arbeitsleben",
        url: "https://www.arbeitsagentur.de/datei/merkblatt-12-teilhabe_ba029695.pdf",
      },
    ],
  },
  {
    id: "berufsorientierungsmassnahmen-fuer-schueler",
    who: "bildung",
    when: "arbeitslosigkeit",
    title: "Berufsorientierungsmaßnahmen für Schüler",
    summary:
      "Geförderte Berufsorientierungsmaßnahmen wie Betriebsbesichtigungen und Berufserkundungen, um Schülerinnen und Schülern einen realistischen Einblick in Berufsfelder zu geben.",
    resources: [
      {
        label: "BMBF – Berufsorientierungsprogramm (BOP)",
        url: "https://www.berufsorientierungsprogramm.de/",
      },
    ],
  },
  {
    id: "berufsorientierungspraktikum",
    who: "alle",
    when: "arbeitslosigkeit",
    title: "Berufsorientierungspraktikum",
    summary:
      "Geförderte Kurzpraktika für Schülerinnen und Schüler in Betrieben, um konkrete Berufsfelder kennenzulernen und die Berufswahl zu unterstützen.",
    resources: [
      {
        label: "Bundesagentur für Arbeit – Berufsberatung vor dem Erwerbsleben",
        url: "https://www.arbeitsagentur.de/bildung/berufsberatung",
      },
    ],
  },
  {
    id: "berufseinstiegsbegleitung",
    who: "bildung",
    when: "arbeitslosigkeit",
    title: "Berufseinstiegsbegleitung",
    summary:
      "Persönliche Begleitung von förderungsbedürftigen Schülerinnen und Schülern ab der Vorabgangsklasse bis zur Stabilisierung in einer Ausbildung oder Beschäftigung.",
    resources: [
      {
        label:
          "BMAS – Abschlussbericht: Evaluation der Berufseinstiegsbegleitung (Forschungsbericht 453)",
        url: "https://www.bmas.de/DE/Service/Publikationen/Forschungsberichte/fb-453-berufseinstiegsbegleitung.html",
      },
      {
        label:
          "Bundesrechnungshof – Bericht: Berufseinstiegsbegleitung nach § 49 SGB III (2015)",
        url: "https://www.bundesrechnungshof.de/SharedDocs/Downloads/DE/Berichte/2015/berufseinstiegsbegleitung-volltext.pdf?__blob=publicationFile&v=1",
      },
      {
        label:
          "Bundesagentur für Arbeit – Fachkonzept Berufseinstiegsbegleitung (PDF)",
        url: "https://www.arbeitsagentur.de/datei/dok_ba022435.pdf",
      },
    ],
  },
  {
    id: "berufsvorbereitende-bildungsmassnahmen-bvb",
    who: "erwerbstaetige",
    when: "arbeitslosigkeit",
    title: "Berufsvorbereitende Bildungsmaßnahmen (BvB)",
    summary:
      "Maßnahmen zur Vorbereitung auf eine Berufsausbildung für junge Menschen, die die Ausbildungsreife noch nicht erreicht haben. Vermittelt Grundlagen für mehrere Berufsfelder.",
    resources: [
      {
        label:
          "Bundesagentur für Arbeit – Berufsvorbereitende Bildungsmaßnahmen (BvB)",
        url: "https://www.arbeitsagentur.de/bildung/ausbildung/berufsvorbereitende-bildungsmassnahme",
      },
    ],
  },
  {
    id: "hauptschulabschluss-in-bvb-massnahmen",
    who: "bildung",
    when: "arbeitslosigkeit",
    title: "Hauptschulabschluss in BvB-Maßnahmen",
    summary:
      "Im Rahmen einer berufsvorbereitenden Bildungsmaßnahme kann der Hauptschulabschluss nachgeholt werden — kombiniert mit beruflicher Orientierung.",
    resources: [
      {
        label: "BA – Berufsvorbereitende Bildungsmaßnahme (BvB)",
        url: "https://www.arbeitsagentur.de/bildung/ausbildung/berufsvorbereitende-bildungsmassnahme",
      },
      {
        label: "§ 51 SGB III – BvB Grundlage",
        url: "https://www.gesetze-im-internet.de/sgb_3/__51.html",
      },
      {
        label: "BA – Fachkonzept BvB (PDF, ab 2023)",
        url: "https://www.arbeitsagentur.de/datei/fachkonzept-berufsvorbereitende-bildungsmassnahmen-bvb1-3_ba036685.pdf",
      },
    ],
  },
  {
    id: "einstiegsqualifizierung-eq",
    who: "erwerbstaetige",
    when: "arbeitslosigkeit",
    title: "Einstiegsqualifizierung (EQ)",
    summary:
      "Betriebliches Langzeitpraktikum (6–12 Monate) für junge Menschen, die noch keinen Ausbildungsplatz gefunden haben — als Brücke in eine vollwertige Berufsausbildung.",
    resources: [
      {
        label:
          "Bundesagentur für Arbeit – Einstiegsqualifizierung für Arbeitgeber",
        url: "https://www.arbeitsagentur.de/unternehmen/ausbilden/einstiegsqualifizierung-arbeitgeber",
      },
      {
        label:
          "Bundesagentur für Arbeit – Einstiegsqualifizierung für Bewerber",
        url: "https://www.arbeitsagentur.de/bildung/ausbildung/einstiegsqualifizierung",
      },
      {
        label: "BIBB – Einstiegsqualifizierung: Zahlen und Hintergründe",
        url: "https://www.bibb.de/de/214540.php",
      },
      {
        label: "Berufsbildungsbericht 2025 (BMBFSFJ, PDF)",
        url: "https://www.bmbfsfj.bund.de/resource/blob/273880/f5330ba9181acb9f5bd87a69da672848/berufsbildungsbericht-2025-data.pdf",
      },
      {
        label:
          "Bundesagentur für Arbeit – Fachliche Weisungen Einstiegsqualifizierung (PDF)",
        url: "https://www.arbeitsagentur.de/datei/dok_ba032205.pdf",
      },
    ],
  },
  {
    id: "berufsausbildungsbeihilfe-bab",
    who: "bildung",
    when: "ausbildung",
    title: "Berufsausbildungsbeihilfe (BAB)",
    summary:
      "Finanzieller Zuschuss für Auszubildende, die wegen der Ausbildungsstätte nicht bei den Eltern wohnen können und deren Einkommen für den Lebensunterhalt nicht ausreicht.",
    resources: [
      {
        label: "Bundesagentur für Arbeit – Berufsausbildungsbeihilfe (BAB)",
        url: "https://www.arbeitsagentur.de/bildung/ausbildung/berufsausbildungsbeihilfe-bab",
      },
      {
        label: "Statistik BA – BAB: Empfänger und Ausgaben",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Leistungen-SGBIII/Berufsausbildungsbeihilfe-Ausbildungsgeld-Uebergangsgeld/Berufsausbildungsbeihilfe-Ausbildungsgeld-Uebergangsgeld-Nav.html",
      },
      {
        label: "BMAS – Leistungen zur Ausbildungsförderung",
        url: "https://www.bmas.de/DE/Arbeit/Aus-und-Weiterbildung/Berufliche-Ausbildung/Leistungen-zur-Ausbildungsfoerderung/leistungen-zur-ausbildungsfoerderung.html",
      },
      {
        label: "Berufsbildungsbericht 2025 (BMBFSFJ)",
        url: "https://www.bmbfsfj.bund.de/resource/blob/273880/f5330ba9181acb9f5bd87a69da672848/berufsbildungsbericht-2025-data.pdf",
      },
      {
        label: "BA – BAB-Rechner: Anspruch online berechnen",
        url: "https://www.babrechner.arbeitsagentur.de/",
      },
      {
        label: "Wikipedia – Berufsausbildungsbeihilfe",
        url: "https://de.wikipedia.org/wiki/Berufsausbildungsbeihilfe",
      },
      {
        label: "BA – Fachliche Weisungen § 70 SGB III (PDF)",
        url: "https://www.arbeitsagentur.de/datei/fw-sgb-iii-70_ba015094.pdf",
      },
    ],
  },
  {
    id: "ausbildungsverguetungszuschuss-fuer-behinderte",
    who: "behinderung",
    when: "ausbildung",
    title: "Ausbildungsvergütungszuschuss für Behinderte",
    summary:
      "Zuschuss an Arbeitgeber zur Ausbildungsvergütung, wenn sie Auszubildende mit Behinderung oder Schwerbehinderung einstellen — als Ausgleich für anfängliche Minderleistung.",
    resources: [
      {
        label:
          "BA – Zuschuss zur Ausbildungsvergütung für Menschen mit Behinderungen (Arbeitgeber-Info)",
        url: "https://www.arbeitsagentur.de/unternehmen/finanziell/foerderung-menschen-mit-behinderungen/zuschuss-ausbildung-weiterbildung",
      },
      {
        label:
          "Statistik BA – Förderstatistik: Leistungen zur Teilhabe am Arbeitsleben",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Leistungen-SGBIII/Leistungen-zur-Teilhabe-am-Arbeitsleben/Leistungen-zur-Teilhabe-am-Arbeitsleben-Nav.html",
      },
      {
        label:
          "BMAS – Rehabilitation und Teilhabe: Ausbildungsförderung für Menschen mit Behinderungen",
        url: "https://www.bmas.de/DE/Arbeit/Rehabilitation-und-Teilhabe/Foerderung-der-Ausbildung/foerderung-der-ausbildung.html",
      },
    ],
  },
  {
    id: "mobilitaetszuschuss-fuer-auszubildende",
    who: "bildung",
    when: "ausbildung",
    title: "Mobilitätszuschuss für Auszubildende",
    summary:
      "Pauschaler Zuschuss zu Fahrtkosten für junge Auszubildende im ersten Ausbildungsjahr, die eine Ausbildungsstelle außerhalb ihres Wohnortes antreten.",
    resources: [
      {
        label: "BA – Berufsausbildungsbeihilfe (BAB): Übersicht und Antrag",
        url: "https://www.arbeitsagentur.de/bildung/ausbildung/berufsausbildungsbeihilfe-bab",
      },
      {
        label: "Statistik BA – BAB, Ausbildungsgeld und Übergangsgeld",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Leistungen-SGBIII/Berufsausbildungsbeihilfe-Ausbildungsgeld-Uebergangsgeld/Berufsausbildungsbeihilfe-Ausbildungsgeld-Uebergangsgeld-Nav.html",
      },
    ],
  },
  {
    id: "assistierte-ausbildung",
    who: "bildung",
    when: "ausbildung",
    title: "Assistierte Ausbildung",
    summary:
      "Individuelle sozialpädagogische Begleitung und Unterstützung während der gesamten Ausbildung für junge Menschen mit besonderem Förderbedarf — sowohl im Betrieb als auch in der Berufsschule.",
    resources: [
      {
        label: "BA – Assistierte Ausbildung (AsA): Übersicht für Auszubildende",
        url: "https://www.arbeitsagentur.de/bildung/ausbildung/assistierte-ausbildung-machen",
      },
      {
        label: "BA – Assistierte Ausbildung (AsA): Informationen für Betriebe",
        url: "https://www.arbeitsagentur.de/unternehmen/ausbilden/assistierte-ausbildung-betriebe",
      },
      {
        label:
          "Bundesrechnungshof 2021 – Prüfbericht: Assistierte Ausbildung im Rechtskreis SGB III (PDF)",
        url: "https://www.bundesrechnungshof.de/SharedDocs/Downloads/DE/Berichte/2021/assistierte-ausbildung-im-rechtskreis-sgb-iii-volltext.pdf",
      },
      {
        label: "Statistik BA – Leistungen SGB III (Förderstatistik)",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Leistungen-SGBIII/Leistungen-SGBIII-Nav.html",
      },
    ],
  },
  {
    id: "ausbildungsbegleitende-hilfen-abh",
    who: "erwerbstaetige",
    when: "ausbildung",
    title: "Ausbildungsbegleitende Hilfen (abH)",
    summary:
      "Stütz- und Fördermaßnahmen wie Nachhilfe und sozialpädagogische Betreuung neben der Berufsausbildung, um Ausbildungsabbrüche zu vermeiden.",
    resources: [
      {
        label:
          "BMAS – Ausbildungsbegleitende Hilfen (abH): Informationsbroschüre",
        url: "https://www.bmas.de/DE/Service/Publikationen/Broschueren/a842-ausbildungsbegleitende-hilfen.html",
      },
      {
        label:
          "Statistik BA – Instrumente der Arbeitsmarktförderung (Förderstatistik abH)",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Foerderung-und-berufliche-Rehabilitation/Instrumente/Instrumente-Nav.html/",
      },
    ],
  },
  {
    id: "ausserbetriebliche-berufsausbildung-bae",
    who: "erwerbstaetige",
    when: "ausbildung",
    title: "Außerbetriebliche Berufsausbildung (BaE)",
    summary:
      "Vollständige Berufsausbildung in einer außerbetrieblichen Einrichtung für junge Menschen, für die kein betrieblicher Ausbildungsplatz gefunden werden konnte.",
    resources: [
      {
        label: "BA – Außerbetriebliche Berufsausbildung (BaE)",
        url: "https://www.arbeitsagentur.de/bildung/ausbildung/ausserbetriebliche-berufsausbildung",
      },
      {
        label: "BMAS – Ausbildungsgarantie (BaE als Kernstück)",
        url: "https://www.bmas.de/DE/Arbeit/Aus-und-Weiterbildung/Berufliche-Ausbildung/Ausbildungsgarantie/ausbildungsgarantie.html",
      },
      {
        label:
          "ueberaus.de – BaE ausgeweitet: Hintergrund zur Ausbildungsgarantie",
        url: "https://www.ueberaus.de/wws/bae-ausgeweitet.php",
      },
    ],
  },
  {
    id: "bildungsgutschein-weiterbildung",
    who: "erwerbstaetige",
    when: "weiterbildung-aufstieg",
    title: "Bildungsgutschein (Weiterbildung)",
    summary:
      "Gutschein der Agentur für Arbeit oder des Jobcenters, der die Kosten einer beruflichen Weiterbildungsmaßnahme bei einem zugelassenen Träger vollständig abdeckt.",
    resources: [
      {
        label: "Statistik BA – Förderung & berufliche Rehabilitation",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Foerderung-und-berufliche-Rehabilitation/Foerderung-und-berufliche-Rehabilitation-Nav.html",
      },
      {
        label: "Statistik BA – Instrumente der Arbeitsmarktförderung",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Foerderung-und-berufliche-Rehabilitation/Instrumente/Instrumente-Nav.html/",
      },
      {
        label: "Bundesagentur für Arbeit – Weiterbildung mit Bildungsgutschein",
        url: "https://www.arbeitsagentur.de/arbeitslos-arbeit-finden/weiterbildung",
      },
      {
        label: "BMAS – Förderung der beruflichen Weiterbildung",
        url: "https://www.bmas.de/DE/Arbeit/Aus-und-Weiterbildung/Berufliche-Weiterbildung/Foerderung-der-beruflichen-Weiterbildung/foerderung-der-beruflichen-weiterbildung.html",
      },
      {
        label:
          "Sozialpolitik-aktuell – Teilnehmende berufliche Weiterbildung 2001–2024 (PDF)",
        url: "https://www.sozialpolitik-aktuell.de/files/sozialpolitik-aktuell/_Politikfelder/Arbeitsmarkt/Datensammlung/PDF-Dateien/abbIV95.pdf",
      },
    ],
  },
  {
    id: "weiterbildungsfoerderung-fuer-beschaeftigte",
    who: "erwerbstaetige",
    when: "weiterbildung-aufstieg",
    title: "Weiterbildungsförderung für Beschäftigte",
    summary:
      "Arbeitgeber und Beschäftigte können Zuschüsse zu den Kosten und zum Arbeitsentgelt einer Weiterbildungsmaßnahme erhalten, insbesondere bei Strukturwandel oder Engpassberufen.",
    resources: [
      {
        label: "BMAS – Förderung der beruflichen Weiterbildung (Überblick)",
        url: "https://www.bmas.de/DE/Arbeit/Aus-und-Weiterbildung/Berufliche-Weiterbildung/Foerderung-der-beruflichen-Weiterbildung/foerderung-der-beruflichen-weiterbildung.html",
      },
      {
        label:
          "BMAS – Gesetz zur Stärkung der Aus- und Weiterbildungsförderung (2023)",
        url: "https://www.bmas.de/DE/Service/Gesetze-und-Gesetzesvorhaben/weiterbildungsgesetz.html",
      },
      {
        label: "BMAS – Qualifizierungschancengesetz",
        url: "https://www.bmas.de/DE/Service/Gesetze-und-Gesetzesvorhaben/qualifizierungschancengesetz.html",
      },
      {
        label:
          "Statistik BA – Förderung und berufliche Rehabilitation: Überblick",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Foerderung-und-berufliche-Rehabilitation/Ueberblick/Ueberblick-Nav.html",
      },
      {
        label:
          "IAB – Stellungnahme: Reform der Weiterbildungsförderung Beschäftigter nach § 82 SGB III (2023)",
        url: "https://doku.iab.de/stellungnahme/2023/sn0123.pdf",
      },
    ],
  },
  {
    id: "qualifizierungsgeld",
    who: "erwerbstaetige",
    when: "arbeitslosigkeit",
    title: "Qualifizierungsgeld",
    summary:
      "Lohnersatzleistung für Beschäftigte, die für eine längere betrieblich veranlasste Qualifizierung freigestellt werden — finanziert vom Staat, ergänzt durch den Arbeitgeber.",
    resources: [
      {
        label: "BA – Qualifizierungsgeld: Antrag und Voraussetzungen",
        url: "https://www.arbeitsagentur.de/unternehmen/finanziell/qualifizierungsgeld",
      },
      {
        label:
          "BMAS – Gesetz zur Stärkung der Aus- und Weiterbildungsförderung",
        url: "https://www.bmas.de/DE/Service/Gesetze-und-Gesetzesvorhaben/weiterbildungsgesetz.html",
      },
      {
        label: "BMAS – Förderung der beruflichen Weiterbildung (Übersicht)",
        url: "https://www.bmas.de/DE/Arbeit/Aus-und-Weiterbildung/Berufliche-Weiterbildung/Foerderung-der-beruflichen-Weiterbildung/foerderung-der-beruflichen-weiterbildung.html",
      },
    ],
  },
  {
    id: "unterkunft-und-verpflegung-bei-weiterbildung",
    who: "erwerbstaetige",
    when: "weiterbildung-aufstieg",
    title: "Unterkunft & Verpflegung bei Weiterbildung",
    summary:
      "Übernahme der Kosten für auswärtige Unterkunft und Verpflegung, wenn eine Weiterbildungsmaßnahme eine vorübergehende Abwesenheit vom Wohnort erfordert.",
    resources: [
      {
        label:
          "BA – Fachliche Weisungen § 86 SGB III (gültig ab 01.01.2026, PDF)",
        url: "https://www.arbeitsagentur.de/datei/dok_ba014613.pdf",
      },
      {
        label:
          "alg-i.de – Erstattungsfähige Kosten beim Bildungsgutschein (inkl. Unterkunft)",
        url: "https://www.alg-i.de/bildungsgutschein/erstattungsfaehige-kosten.html",
      },
    ],
  },
  {
    id: "kinderbetreuungskosten-bei-weiterbildung",
    who: "erwerbstaetige",
    when: "weiterbildung-aufstieg",
    title: "Kinderbetreuungskosten bei Weiterbildung",
    summary:
      "Erstattung von Kinderbetreuungskosten, die durch die Teilnahme an einer geförderten Weiterbildungsmaßnahme entstehen, bis zu einem Höchstbetrag pro Kind.",
    resources: [
      {
        label:
          "BA – Weisung 202207007: Erhöhung Kinderbetreuungspauschale auf 160 €/Monat (PDF)",
        url: "https://www.arbeitsagentur.de/datei/weisung-202207007_ba038190.pdf",
      },
      {
        label:
          "BA – Fachliche Weisungen § 87 SGB III (gültig ab 01.01.2026, PDF)",
        url: "https://www.arbeitsagentur.de/datei/dok_ba031590.pdf",
      },
      {
        label:
          "alg-i.de – Erstattungsfähige Kosten beim Bildungsgutschein (inkl. Kinderbetreuung)",
        url: "https://www.alg-i.de/bildungsgutschein/erstattungsfaehige-kosten.html",
      },
    ],
  },
  {
    id: "weiterbildungspraemie-und-weiterbildungsgeld",
    who: "erwerbstaetige",
    when: "weiterbildung-aufstieg",
    title: "Weiterbildungsprämie & Weiterbildungsgeld",
    summary:
      "Prämie für das Bestehen von Zwischen- und Abschlussprüfungen einer geförderten Weiterbildung sowie ein monatliches Weiterbildungsgeld von 150 € als Anreiz.",
    resources: [
      {
        label: "BA – Förderung der beruflichen Weiterbildung",
        url: "https://www.arbeitsagentur.de/karriere-und-weiterbildung/foerderung-berufliche-weiterbildung",
      },
      {
        label: "BA – Weiterbildungsprämie & Weiterbildungsgeld: FAQ",
        url: "https://www.arbeitsagentur.de/vor-ort/bonn/weiterbildungspraemie",
      },
      {
        label: "BA – Bildungsgutschein für berufliche Weiterbildung",
        url: "https://www.arbeitsagentur.de/karriere-und-weiterbildung/bildungsgutschein",
      },
      {
        label: "Skill-Sprinters – Weiterbildungsgeld 2026: Wer es bekommt",
        url: "https://skill-sprinters.de/blog/foerderung/weiterbildungsgeld-2026/",
      },
    ],
  },
  {
    id: "eingliederungszuschuss",
    who: "alle",
    when: "arbeitslosigkeit",
    title: "Eingliederungszuschuss",
    summary:
      "Zuschuss an Arbeitgeber, die Arbeitnehmer mit erschwerter Vermittlung einstellen — als zeitlich befristeter Ausgleich für anfängliche Minderleistung.",
    resources: [
      {
        label: "BA – Eingliederungszuschuss beantragen",
        url: "https://www.arbeitsagentur.de/unternehmen/finanziell/eingliederungszuschuss-zur-foerderung-arbeitsaufnahme",
      },
      {
        label: "BMAS – Eingliederungszuschuss (Übersicht)",
        url: "https://www.bmas.de/DE/Arbeit/Arbeitsfoerderung/Foerderung-der-Erwerbstaetigkeit/eingliederungszuschuss.html",
      },
      {
        label: "Statistik BA – Arbeitsmarktpolitische Instrumente (monatlich)",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Interaktive-Statistiken/Arbeitsmarktpolitische-Instrumente/Arbeitsmarktpolitische-Instrumente-Nav.html",
      },
      {
        label:
          "IAB-Kurzbericht 13/2024 – Lohnkostenzuschuss: hohe und stabile Beschäftigungseffekte",
        url: "https://iab.de/der-lohnkostenzuschuss-zeigt-hohe-und-stabile-beschaeftigungseffekte/",
      },
      {
        label:
          "IAB-Forum – Eingliederungszuschüsse als Sprungbrett in den allgemeinen Arbeitsmarkt",
        url: "https://iab-forum.de/eingliederungszuschuesse-fuer-arbeitslose-wirken-als-sprungbrett-in-den-allgemeinen-arbeitsmarkt/",
      },
    ],
  },
  {
    id: "eingliederungszuschuss-fuer-behinderte",
    who: "behinderung",
    when: "behinderung-teilhabe",
    title: "Eingliederungszuschuss für Behinderte",
    summary:
      "Erhöhter und längerfristiger Eingliederungszuschuss für Arbeitgeber, die Menschen mit Behinderungen oder schwerbehinderte Menschen einstellen.",
    resources: [
      {
        label: "BA – Eingliederungszuschuss online beantragen",
        url: "https://www.arbeitsagentur.de/unternehmen/finanziell/eingliederungszuschuss-zur-foerderung-arbeitsaufnahme",
      },
      {
        label:
          "BA – Förderung von Menschen mit Behinderungen (Arbeitgeberseite)",
        url: "https://www.arbeitsagentur.de/unternehmen/finanziell/foerderung-menschen-mit-behinderungen",
      },
      {
        label: "BMAS – Eingliederungszuschuss",
        url: "https://www.bmas.de/DE/Arbeit/Arbeitsfoerderung/Foerderung-der-Erwerbstaetigkeit/eingliederungszuschuss.html",
      },
      {
        label: "Statistik BA – Menschen mit Behinderungen",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Themen-im-Fokus/Menschen-mit-Behinderungen/Menschen-mit-Behinderungen-Nav.html",
      },
    ],
  },
  {
    id: "gruendungszuschuss",
    who: "selbststaendige",
    when: "selbststaendigkeit-gruendung",
    title: "Gründungszuschuss",
    summary:
      "Förderung von Arbeitslosen, die sich selbstständig machen: Sechs Monate lang Arbeitslosengeld plus 300 € monatlich für die Sozialversicherung; danach optional weitere neun Monate à 300 €.",
    resources: [
      {
        label: "Bundesagentur für Arbeit – Gründungszuschuss beantragen",
        url: "https://www.arbeitsagentur.de/arbeitslos-arbeit-finden/arbeitslosengeld/gruendungszuschuss-beantragen",
      },
      {
        label:
          "Bundesagentur für Arbeit – Existenzgründung & Gründungszuschuss",
        url: "https://www.arbeitsagentur.de/arbeitslos-arbeit-finden/arbeitslosengeld/existenzgruendung-gruendungszuschuss",
      },
      {
        label: "IAB-Forum – Mitnahmeeffekte beim Gründungszuschuss",
        url: "https://iab-forum.de/gruendungszuschuss-potenzielle-mitnahmeeffekte-sind-deutlich-geringer-als-angenommen/",
      },
    ],
  },
  {
    id: "kurzarbeitergeld",
    who: "erwerbstaetige",
    when: "lohnausfall-im-job",
    title: "Kurzarbeitergeld",
    summary:
      "Lohnersatzleistung für Beschäftigte, deren Arbeitszeit vorübergehend verkürzt wird — sichert 60–67 % des Nettoentgeltausfalls und verhindert Entlassungen bei wirtschaftlichen Schwankungen.",
    resources: [
      {
        label: "Statistik BA – Kurzarbeitergeld (Fachstatistik)",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Leistungen-SGBIII/Kurzarbeitergeld/Kurzarbeitergeld-Nav.html",
      },
      {
        label: "Statistik BA – Kurzarbeit (interaktiv)",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Interaktive-Statistiken/Kurzarbeitergeld/Kurzarbeitergeld-Nav.html",
      },
      {
        label: "Bundesagentur für Arbeit – Kurzarbeitergeld beantragen",
        url: "https://www.arbeitsagentur.de/unternehmen/finanziell/kurzarbeitergeld-arbeitnehmer-weiterbeschaftigen",
      },
    ],
  },
  {
    id: "leistungen-zur-beschaeftigung-eingliederungshilfe",
    who: "behinderung",
    when: "behinderung-teilhabe",
    title: "Leistungen zur Beschäftigung (Eingliederungshilfe)",
    summary:
      "Leistungen zur Beschäftigung in anerkannten Werkstätten für behinderte Menschen, bei anderen Leistungsanbietern oder im Rahmen eines Budgets für Arbeit auf dem allgemeinen Arbeitsmarkt.",
    resources: [
      {
        label: "BAG WfbM – Menschen in Werkstätten: Zahlen und Fakten",
        url: "https://www.bagwfbm.de/page/25",
      },
      {
        label: "REHADAT-Statistik – Werkstätten für behinderte Menschen",
        url: "https://www.rehadat-statistik.de/statistiken/berufliche-teilhabe/wfbm/",
      },
      {
        label: "Destatis – Eingliederungshilfe 2024: Empfänger und Ausgaben",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Sozialhilfe/eingliederungshilfe.html",
      },
    ],
  },
  {
    id: "teilhabe-an-bildung-eingliederungshilfe-reha",
    who: "behinderung",
    when: "behinderung-teilhabe",
    title: "Teilhabe an Bildung (Eingliederungshilfe/Reha)",
    summary:
      "Eingliederungshilfeleistungen für Schulbildung, Hochschulbildung und schulische Berufsausbildung, einschließlich Schulbegleitung und qualifizierter Assistenz.",
    resources: [
      {
        label: "BMAS – Leistungen nach dem SGB IX: Überblick",
        url: "https://www.bmas.de/DE/Soziales/Teilhabe-und-Inklusion/Politik-fuer-Menschen-mit-Behinderungen/Leistungen-nach-dem-SGB-IX/leistungen-nach-dem-sgb-ix.html",
      },
      {
        label: "Umsetzungsbegleitung BTHG – Teilhabe an Bildung (Überblick)",
        url: "https://umsetzungsbegleitung-bthg.de/themen/teilhabe-an-bildung/",
      },
      {
        label:
          "Umsetzungsbegleitung BTHG – Schulbildung: Schulbegleitung und Inklusion",
        url: "https://umsetzungsbegleitung-bthg.de/bthg-kompass/bk-teilhabe-an-bildung/schulbildung/",
      },
      {
        label:
          "Umsetzungsbegleitung BTHG – Hochschulbildung: Studienassistenz u. a.",
        url: "https://umsetzungsbegleitung-bthg.de/bthg-kompass/bk-teilhabe-an-bildung/hochschulbildung",
      },
      {
        label:
          "Destatis – Eingliederungshilfe 2024: 1 Mio. Empfänger, 3 Mrd. € für Bildungsteilhabe",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Sozialhilfe/eingliederungshilfe.html",
      },
      {
        label: "REHADAT-Statistik – Eingliederungshilfe nach SGB IX",
        url: "https://www.rehadat-statistik.de/statistiken/leistungen/eingliederungshilfe/",
      },
      {
        label: "betanet – Teilhabe an Bildung: Anspruch, Antrag und Träger",
        url: "https://www.betanet.de/teilhabe-an-bildung.html",
      },
    ],
  },
  {
    id: "unentgeltliche-befoerderung-schwerbehinderter",
    who: "behinderung",
    when: "behinderung-teilhabe",
    title: "Unentgeltliche Beförderung Schwerbehinderter",
    summary:
      "Schwerbehinderte Menschen mit entsprechendem Merkzeichen im Schwerbehindertenausweis können den ÖPNV kostenfrei nutzen. Verkehrsunternehmen werden ihre Fahrgeldausfälle erstattet.",
    resources: [
      {
        label:
          "Destatis – 7,9 Mio. schwerbehinderte Menschen in Deutschland (2023)",
        url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2024/07/PD24_281_227.html",
      },
      {
        label: "Destatis – Statistikportal: Behinderte Menschen",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Gesundheit/Behinderte-Menschen/_inhalt.html",
      },
      {
        label:
          "ÖPNV-Info – Rund 1,4 Mio. Schwerbehinderte nutzen die Freifahrt",
        url: "https://www.oepnv-info.de/aktuelles/themen/rund-14-mio-schwerbehinderte-menschen-nutzen-die-freifahrt",
      },
      {
        label:
          "ÖPNV-Info – Unentgeltliche Beförderung: Voraussetzungen & Wertmarke",
        url: "https://www.oepnv-info.de/freifahrt/unentgeltliche-befoerderung",
      },
      {
        label:
          "BSG – Kostenfreier ÖPNV auch für schwerbehinderte Heimbewohner (Urteil 2024)",
        url: "https://www.bsg.bund.de/SharedDocs/Pressemitteilungen/DE/2024/2024_26.html",
      },
    ],
  },
  {
    id: "medizinische-rehabilitation-sgb-ix",
    who: "behinderung",
    when: "behinderung-teilhabe",
    title: "Medizinische Rehabilitation (SGB IX)",
    summary:
      "Übergreifende Vorschrift für medizinische Rehabilitationsleistungen aller Rehabilitationsträger — von Heilbehandlung über Hilfsmittel bis zu Belastungserprobung und Arbeitstherapie.",
    resources: [
      {
        label:
          "DRV – GRA § 42 SGB IX: Leistungen zur medizinischen Rehabilitation",
        url: "https://rvrecht.deutsche-rentenversicherung.de/SharedDocs/rvRecht/01_GRA_SGB/09_SGB_IX/pp_0026_50/gra_sgb009_p_0042.html",
      },
      {
        label:
          "BAR – Statistiken zur Medizinischen Rehabilitation (alle Träger)",
        url: "https://www.bar-frankfurt.de/themen/zahlen-daten-fakten/entwurf-zahlen-daten-fakten-neu/medizinische-rehabilitation/statistiken-zur-medizinischen-rehabilitation.html",
      },
      {
        label: "DRV – Reha-Bericht 2024 (PDF, medizinische & berufliche Reha)",
        url: "https://www.deutsche-rentenversicherung.de/SharedDocs/Downloads/DE/Statistiken-und-Berichte/Berichte/rehabericht_2024.pdf?__blob=publicationFile&v=1",
      },
      {
        label: "REHADAT-Statistik – Leistungen aller Kostenträger",
        url: "https://www.rehadat-statistik.de/statistiken/leistungen/alle-kostentraeger/",
      },
      {
        label: "bpb.de – Medizinische Rehabilitation: Hintergrund und Träger",
        url: "https://www.bpb.de/themen/gesundheit/gesundheitspolitik/549740/medizinische-rehabilitation/",
      },
    ],
  },
  {
    id: "stufenweise-wiedereingliederung",
    who: "behinderung",
    when: "behinderung-teilhabe",
    title: "Stufenweise Wiedereingliederung",
    summary:
      "Schrittweise Rückkehr arbeitsunfähiger Beschäftigter in den Beruf mit reduzierter Stundenzahl, begleitet von medizinischen und sonstigen Leistungen — auch bekannt als „Hamburger Modell“.",
    resources: [
      {
        label:
          "Deutsche Rentenversicherung – Stufenweise Wiedereingliederung (Glossar)",
        url: "https://www.deutsche-rentenversicherung.de/SharedDocs/Glossareintraege/DE/S/stufenweise_wiedereingliederung.html",
      },
      {
        label: "DRV – GRA § 44 SGB IX: Voraussetzungen und Verfahren",
        url: "https://rvrecht.deutsche-rentenversicherung.de/SharedDocs/rvRecht/01_GRA_SGB/09_SGB_IX/pp_0026_50/gra_sgb009_p_0044.html",
      },
      {
        label:
          "DRV – Informationsblatt zur stufenweisen Wiedereingliederung (G0832)",
        url: "https://www.deutsche-rentenversicherung.de/SharedDocs/Formulare/DE/_pdf/G0832.pdf",
      },
      {
        label:
          'BMAS – Broschüre "Schritt für Schritt zurück in den Job" (Hamburger Modell)',
        url: "https://www.bmas.de/SharedDocs/Downloads/DE/PDF-Publikationen/a748-betriebliche-eingliederung.pdf",
      },
    ],
  },
  {
    id: "frueherkennung-und-fruehfoerderung",
    who: "familie",
    when: "krankheit-behandlung",
    title: "Früherkennung & Frühförderung",
    summary:
      "Medizinische und heilpädagogische Komplexleistungen für Kinder mit (drohender) Behinderung bis zur Einschulung, gebündelt in interdisziplinären Frühförderstellen.",
    resources: [
      {
        label:
          "Bundesvereinigung Lebenshilfe – Frühförderung: Leistungen und Anspruch",
        url: "https://www.lebenshilfe.de/informieren/kinder/fruehfoerderung",
      },
      {
        label: "kindergesundheit-info.de – Frühförderung für Kinder: Übersicht",
        url: "https://www.kindergesundheit-info.de/themen/entwicklung/foerdern-unterstuetzen/fruehfoerderung/",
      },
      {
        label: "Diakonie Deutschland – Frühförderung: Hintergrund und Träger",
        url: "https://www.diakonie.de/informieren/infothek/aktuelles/themen/fruehfoerderung",
      },
    ],
  },
  {
    id: "hilfsmittel-zur-medizinischen-reha",
    who: "behinderung",
    when: "behinderung-teilhabe",
    title: "Hilfsmittel zur medizinischen Reha",
    summary:
      "Versorgung mit Hilfsmitteln, die im Rahmen der medizinischen Rehabilitation eine Behinderung ausgleichen oder eine Krankheit lindern (z. B. Orthesen, Prothesen, Hörgeräte).",
    resources: [
      {
        label: "BMAS – Leistungen nach dem SGB IX: Überblick",
        url: "https://www.bmas.de/DE/Soziales/Teilhabe-und-Inklusion/Politik-fuer-Menschen-mit-Behinderungen/Leistungen-nach-dem-SGB-IX/leistungen-nach-dem-sgb-ix.html",
      },
      {
        label:
          "Destatis – Eingliederungshilfe 2024: 1,029 Mio. Empfänger, 28,7 Mrd. € Ausgaben",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Sozialhilfe/eingliederungshilfe.html",
      },
    ],
  },
  {
    id: "leistungen-zur-teilhabe-am-arbeitsleben",
    who: "behinderung",
    when: "rehabilitation",
    title: "Leistungen zur Teilhabe am Arbeitsleben",
    summary:
      "Sämtliche Leistungen, die Menschen mit Behinderungen den Erhalt, die Verbesserung oder die Wiederherstellung ihrer Erwerbsfähigkeit ermöglichen — von Qualifizierung über Arbeitsassistenz bis zur Werkstattbeschäftigung.",
    resources: [
      {
        label:
          "Statistik BA – Berufliche Rehabilitation (Eintritte, Bestände, Maßnahmen)",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Foerderung-und-berufliche-Rehabilitation/Berufliche-Rehabilitation/Berufliche-Rehabilitation-Nav.html",
      },
      {
        label: "BA – Fachliche Weisungen § 49 SGB IX (PDF)",
        url: "https://www.arbeitsagentur.de/datei/dok_ba014685.pdf",
      },
      {
        label: "REHADAT-Statistik – Berufliche Rehabilitation der BA",
        url: "https://www.rehadat-statistik.de/statistiken/leistungen/bundesagentur-fuer-arbeit/",
      },
      {
        label: "BAR – Statistiken zur beruflichen Teilhabe (alle Träger)",
        url: "https://www.bar-frankfurt.de/themen/zahlen-daten-fakten/entwurf-zahlen-daten-fakten-neu/berufliche-teilhabe/statistiken-zur-beruflichen-teilhabe.html",
      },
    ],
  },
  {
    id: "arbeitgeberleistungen-teilhabe-am-arbeitsleben",
    who: "behinderung",
    when: "behinderung-teilhabe",
    title: "Arbeitgeberleistungen (Teilhabe am Arbeitsleben)",
    summary:
      "Zuschüsse und Erstattungen an Arbeitgeber, die Menschen mit Behinderungen beschäftigen — z. B. für behindertengerechte Arbeitsplatzausstattung, Ausbildungszuschuss oder Probebeschäftigung.",
    resources: [
      {
        label: "BMAS – Leistungen nach dem SGB IX: Überblick",
        url: "https://www.bmas.de/DE/Soziales/Teilhabe-und-Inklusion/Politik-fuer-Menschen-mit-Behinderungen/Leistungen-nach-dem-SGB-IX/leistungen-nach-dem-sgb-ix.html",
      },
      {
        label: "REHADAT-Recht – Rechtsprechung: Leistungen an Arbeitgeber",
        url: "https://www.rehadat-recht.de/rechtsprechung/leistungen-leistungsanspruch/leistungsarten/leistungen-an-arbeitgeber/",
      },
      {
        label: "DRV – Kommentar § 50 SGB IX: Leistungen an Arbeitgeber",
        url: "https://rvrecht.deutsche-rentenversicherung.de/SharedDocs/rvRecht/01_GRA_SGB/09_SGB_IX/pp_0026_50/gra_sgb009_p_0050.html",
      },
    ],
  },
  {
    id: "arbeitsfoerderungsgeld-wfbm",
    who: "behinderung",
    when: "behinderung-teilhabe",
    title: "Arbeitsförderungsgeld (WfbM)",
    summary:
      "Monatliche Zusatzleistung für Beschäftigte in Werkstätten für behinderte Menschen, die ihren Arbeitslohn aufstockt — derzeit 52 € pro Monat.",
    resources: [
      {
        label:
          "BAG WfbM – Menschen in Werkstätten: Zahlen und Fakten (über 300.000 Beschäftigte, 5,6 Mrd. € Ausgaben 2023)",
        url: "https://www.bagwfbm.de/page/25",
      },
      {
        label: "REHADAT-Statistik – Werkstätten für behinderte Menschen",
        url: "https://www.rehadat-statistik.de/statistiken/berufliche-teilhabe/wfbm/",
      },
      {
        label: "REHADAT-Statistik – BAG WfbM Jahresbericht",
        url: "https://www.rehadat-statistik.de/statistiken/berufliche-teilhabe/wfbm/bagwfbm/",
      },
      {
        label:
          "Bundestag – Sachstand WfbM: Beschäftigung und Entgelt (WD-6-065-23, PDF)",
        url: "https://www.bundestag.de/resource/blob/1014256/2bba33635c107b5604333f6dbc52130f/WD-6-065-23-pdf.pdf",
      },
    ],
  },
  {
    id: "ergaenzende-leistungen-zur-reha",
    who: "alle",
    when: "rehabilitation",
    title: "Ergänzende Leistungen zur Reha (SGB IX)",
    summary:
      "Wer eine Rehabilitation durchläuft, hat unabhängig vom Träger Anspruch auf begleitende Unterstützungsleistungen, die die Durchführung erst ermöglichen: Reisekosten, Haushaltshilfe, Kinderbetreuung und Sozialversicherungsbeiträge während der Maßnahme. Gilt ob GKV, Rentenversicherung oder Unfallversicherung zuständig ist.",
    resources: [
      {
        label: "BMAS – Leistungen nach dem SGB IX: Überblick",
        url: "https://www.bmas.de/DE/Soziales/Teilhabe-und-Inklusion/Politik-fuer-Menschen-mit-Behinderungen/Leistungen-nach-dem-SGB-IX/leistungen-nach-dem-sgb-ix.html",
      },
      {
        label: "BAR – Statistiken zur beruflichen Teilhabe (alle Träger)",
        url: "https://www.bar-frankfurt.de/themen/zahlen-daten-fakten/entwurf-zahlen-daten-fakten-neu/berufliche-teilhabe/statistiken-zur-beruflichen-teilhabe.html",
      },
    ],
  },
  {
    id: "lebensunterhaltsleistungen-bei-reha",
    who: "behinderung",
    when: "behinderung-teilhabe",
    title: "Lebensunterhaltsleistungen bei Reha",
    summary:
      "Sicherstellung des Lebensunterhalts während einer Rehabilitationsmaßnahme — durch Krankengeld, Übergangsgeld, Verletztengeld oder Arbeitslosengeld, je nach Rehabilitationsträger.",
    resources: [
      {
        label: "BMAS – Leistungen nach dem SGB IX: Überblick",
        url: "https://www.bmas.de/DE/Soziales/Teilhabe-und-Inklusion/Politik-fuer-Menschen-mit-Behinderungen/Leistungen-nach-dem-SGB-IX/leistungen-nach-dem-sgb-ix.html",
      },
      {
        label: "BAR – Statistiken zur beruflichen Teilhabe (alle Träger)",
        url: "https://www.bar-frankfurt.de/themen/zahlen-daten-fakten/entwurf-zahlen-daten-fakten-neu/berufliche-teilhabe/statistiken-zur-beruflichen-teilhabe.html",
      },
    ],
  },
  {
    id: "leistungen-zur-sozialen-teilhabe",
    who: "behinderung",
    when: "behinderung-teilhabe",
    title: "Leistungen zur Sozialen Teilhabe",
    summary:
      "Übergreifende Vorschrift für Leistungen, die Menschen mit Behinderungen eine gleichberechtigte Teilhabe am Leben in der Gemeinschaft ermöglichen — Wohnen, Assistenz, Mobilität, Verständigung u. a.",
    resources: [
      {
        label:
          "Destatis – Eingliederungshilfe 2024: 1,029 Mio. Empfänger, 28,7 Mrd. € Ausgaben",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Sozialhilfe/eingliederungshilfe.html",
      },
      {
        label: "BMAS – Leistungen nach dem SGB IX: Überblick",
        url: "https://www.bmas.de/DE/Soziales/Teilhabe-und-Inklusion/Politik-fuer-Menschen-mit-Behinderungen/Leistungen-nach-dem-SGB-IX/leistungen-nach-dem-sgb-ix.html",
      },
      {
        label:
          "BTHG-Umsetzungsbegleitung – Themen & Instrumente der sozialen Teilhabe",
        url: "https://umsetzungsbegleitung-bthg.de/",
      },
    ],
  },
  {
    id: "leistungen-fuer-wohnraum",
    who: "behinderung",
    when: "behinderung-teilhabe",
    title: "Leistungen für Wohnraum",
    summary:
      "Finanzierung von behindertengerechtem Umbau, Ausstattung und Erhalt eigenen Wohnraums sowie Übernahme der Mehrkosten gegenüber unbehindertem Wohnen.",
    resources: [
      {
        label: "Destatis – Eingliederungshilfe 2024: Empfänger und Ausgaben",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Sozialhilfe/eingliederungshilfe.html",
      },
      {
        label: "BMAS – Leistungen nach dem SGB IX: Überblick",
        url: "https://www.bmas.de/DE/Soziales/Teilhabe-und-Inklusion/Politik-fuer-Menschen-mit-Behinderungen/Leistungen-nach-dem-SGB-IX/leistungen-nach-dem-sgb-ix.html",
      },
    ],
  },
  {
    id: "assistenzleistungen",
    who: "behinderung",
    when: "behinderung-teilhabe",
    title: "Assistenzleistungen",
    summary:
      "Persönliche Assistenz für Menschen mit Behinderungen bei der Haushaltsführung, der Tagesstrukturierung und der Teilhabe am Leben in der Gemeinschaft — auch im Arbeitgebermodell oder als Sachleistung.",
    resources: [
      {
        label: "Destatis – Eingliederungshilfe: Empfänger und Ausgaben 2024",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Sozialhilfe/eingliederungshilfe.html",
      },
      {
        label:
          "BTHG-Umsetzungsbegleitung – Online-Fachdiskussion Persönliche Assistenz im SGB IX",
        url: "https://umsetzungsbegleitung-bthg.de/beteiligen/fd-persoenliche-assistenz-im-sgb-ix/",
      },
      {
        label:
          "BAGüS-Kennzahlenvergleich 2026 (Eingliederungshilfe Berichtsjahr 2024)",
        url: "https://www.reha-recht.de/infothek/beitrag/artikel/bagues-kennzahlenvergleich-2026",
      },
      {
        label:
          "Deutscher Verein – Empfehlungen zu Assistenzleistungen nach § 78 SGB IX (2024, PDF)",
        url: "https://www.deutscher-verein.de/fileadmin/user_upload/dv/pdfs/Empfehlungen_Stellungnahmen/2024/dv-27-23_assistenzleistungen.pdf",
      },
    ],
  },
  {
    id: "heilpaedagogische-leistungen",
    who: "familie",
    when: "behinderung-teilhabe",
    title: "Heilpädagogische Leistungen",
    summary:
      "Heilpädagogische Maßnahmen für Kinder mit Behinderung zur Förderung ihrer Entwicklung und Persönlichkeitsentfaltung, in der Regel im Vorschulalter.",
    resources: [
      {
        label:
          "Destatis – Eingliederungshilfe 2024: 207.460 Empfänger heilpädagogischer Leistungen",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Sozialhilfe/eingliederungshilfe.html",
      },
      {
        label: "BMAS – Leistungen nach dem SGB IX: Überblick",
        url: "https://www.bmas.de/DE/Soziales/Teilhabe-und-Inklusion/Politik-fuer-Menschen-mit-Behinderungen/Leistungen-nach-dem-SGB-IX/leistungen-nach-dem-sgb-ix.html",
      },
    ],
  },
  {
    id: "betreuung-in-einer-pflegefamilie",
    who: "behinderung",
    when: "behinderung-teilhabe",
    title: "Betreuung in einer Pflegefamilie",
    summary:
      "Übernahme der Kosten für die Betreuung eines Menschen mit Behinderung in einer anderen als der eigenen Familie, wenn dies seinem Bedarf besser entspricht als andere Wohnformen.",
    resources: [
      {
        label: "Destatis – Eingliederungshilfe 2024: Empfänger und Ausgaben",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Sozialhilfe/eingliederungshilfe.html",
      },
      {
        label: "BMAS – Leistungen nach dem SGB IX: Überblick",
        url: "https://www.bmas.de/DE/Soziales/Teilhabe-und-Inklusion/Politik-fuer-Menschen-mit-Behinderungen/Leistungen-nach-dem-SGB-IX/leistungen-nach-dem-sgb-ix.html",
      },
    ],
  },
  {
    id: "erwerb-praktischer-kenntnisse-und-faehigkeiten",
    who: "behinderung",
    when: "behinderung-teilhabe",
    title: "Erwerb praktischer Kenntnisse & Fähigkeiten",
    summary:
      "Leistungen für Menschen mit Behinderungen zum Erwerb und Erhalt praktischer Kenntnisse und Fähigkeiten, die für ein selbstbestimmtes Leben notwendig sind — z. B. Hauswirtschaft, Mobilitätstraining.",
    resources: [
      {
        label: "Destatis – Eingliederungshilfe 2024: Empfänger und Ausgaben",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Sozialhilfe/eingliederungshilfe.html",
      },
      {
        label:
          "BTHG-Umsetzungsbegleitung – Themen & Instrumente der sozialen Teilhabe",
        url: "https://umsetzungsbegleitung-bthg.de/",
      },
    ],
  },
  {
    id: "foerderung-der-verstaendigung",
    who: "behinderung",
    when: "behinderung-teilhabe",
    title: "Förderung der Verständigung",
    summary:
      "Leistungen für Hilfen zur Verständigung mit der Umwelt, z. B. Gebärdensprachdolmetscher, Schriftdolmetscher oder andere Kommunikationshilfen.",
    resources: [
      {
        label: "Destatis – Eingliederungshilfe 2024: Empfänger und Ausgaben",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Sozialhilfe/eingliederungshilfe.html",
      },
      {
        label:
          "BTHG-Umsetzungsbegleitung – Themen & Instrumente der sozialen Teilhabe",
        url: "https://umsetzungsbegleitung-bthg.de/",
      },
    ],
  },
  {
    id: "leistungen-zur-mobilitaet",
    who: "behinderung",
    when: "behinderung-teilhabe",
    title: "Leistungen zur Mobilität",
    summary:
      "Beförderungsdienste sowie Leistungen für ein behindertengerechtes Kraftfahrzeug, dessen Beschaffung, Umrüstung und Erhaltung — für Menschen mit Behinderungen, die nicht regelmäßig Bus & Bahn nutzen können.",
    resources: [
      {
        label:
          "Destatis – Eingliederungshilfe 2024: Empfänger und Ausgaben nach Leistungsarten",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Sozialhilfe/eingliederungshilfe.html",
      },
      {
        label: "BMAS – Leistungen nach dem SGB IX: Überblick",
        url: "https://www.bmas.de/DE/Soziales/Teilhabe-und-Inklusion/Politik-fuer-Menschen-mit-Behinderungen/Leistungen-nach-dem-SGB-IX/leistungen-nach-dem-sgb-ix.html",
      },
    ],
  },
  {
    id: "hilfsmittel-zur-sozialen-teilhabe",
    who: "behinderung",
    when: "behinderung-teilhabe",
    title: "Hilfsmittel zur sozialen Teilhabe",
    summary:
      "Hilfsmittel, die nicht der medizinischen Versorgung dienen, sondern eine gleichberechtigte Teilhabe am Leben in der Gemeinschaft ermöglichen — z. B. Hilfsmittel zur Haushaltsführung oder Freizeit.",
    resources: [
      {
        label: "Destatis – Eingliederungshilfe 2024: Empfänger und Ausgaben",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Sozialhilfe/eingliederungshilfe.html",
      },
      {
        label: "BMAS – Leistungen nach dem SGB IX: Überblick",
        url: "https://www.bmas.de/DE/Soziales/Teilhabe-und-Inklusion/Politik-fuer-Menschen-mit-Behinderungen/Leistungen-nach-dem-SGB-IX/leistungen-nach-dem-sgb-ix.html",
      },
    ],
  },
  {
    id: "familienversicherung-gkv",
    who: "familie",
    when: "krankheit-behandlung",
    title: "Familienversicherung (GKV)",
    summary:
      "Familienangehörige (Ehepartner, Kinder) können beitragsfrei in der gesetzlichen Krankenversicherung mitversichert werden, wenn sie kein oder nur geringes eigenes Einkommen haben. Voraussetzung ist, dass der Hauptversicherte Mitglied einer gesetzlichen Krankenkasse ist.",
    resources: [
      {
        label: "BMG – Mitglieder und Versicherte der GKV (Statistik KM1)",
        url: "https://www.bundesgesundheitsministerium.de/themen/krankenversicherung/zahlen-und-fakten-zur-krankenversicherung/mitglieder-und-versicherte",
      },
      {
        label: "BMG – Versicherte in der gesetzlichen Krankenversicherung",
        url: "https://www.bundesgesundheitsministerium.de/gesetzlich-versicherte",
      },
      {
        label: "GKV-Spitzenverband – Zahlen und Grafiken",
        url: "https://www.gkv-spitzenverband.de/gkv_spitzenverband/presse/zahlen_und_grafiken/zahlen_und_grafiken.jsp",
      },
      {
        label: "BMG – Familienversicherung: Wer kann mitversichert werden?",
        url: "https://www.bundesgesundheitsministerium.de/themen/krankenversicherung/krankenversicherung-versicherungsschutz/familienversicherung",
      },
      {
        label:
          "GKV-Spitzenverband – Einkommensgrenzen Familienversicherung (§ 18 SGB IV Bezugsgröße)",
        url: "https://www.gkv-spitzenverband.de/krankenversicherung/versichertenrecht/mitgliedschaft_und_beitraege/familienversicherung/familienversicherung.jsp",
      },
    ],
  },
  {
    id: "kostenuebernahme-auslandsbehandlung-nicht-ewr",
    who: "erwerbstaetige",
    when: "krankheit-behandlung",
    title: "Kostenübernahme Auslandsbehandlung (Nicht-EWR)",
    summary:
      "Wenn eine notwendige Krankenbehandlung in Deutschland oder im Europäischen Wirtschaftsraum nicht möglich ist, kann die Krankenkasse die Kosten für eine Behandlung in einem Drittland übernehmen. Der Anspruch besteht nur, wenn keine vergleichbare Behandlung im EWR verfügbar ist.",
    resources: [
      {
        label:
          "dejure.org – § 18 SGB V: Kostenübernahme bei Behandlung außerhalb des EWR",
        url: "https://dejure.org/gesetze/SGB_V/18.html",
      },
      {
        label:
          "betanet – Auslandsbehandlung: Kostenerstattung, Voraussetzungen, Ausnahmen",
        url: "https://www.betanet.de/auslandsbehandlung.html",
      },
    ],
  },
  {
    id: "primaerpraevention-und-gesundheitsfoerderung",
    who: "erwerbstaetige",
    when: "krankheit-behandlung",
    title: "Primärprävention und Gesundheitsförderung",
    summary:
      "Die Krankenkasse fördert Maßnahmen zur Primärprävention und allgemeinen Gesundheitsförderung, um Krankheiten zu vermeiden und die Gesundheit zu erhalten. Dazu gehören Kurse, Beratungen und Programme zu Bewegung, Ernährung, Stressabbau und Suchtprävention.",
    resources: [
      {
        label:
          "GKV-Spitzenverband – Präventionsbericht 2025 (686 Mio. € Ausgaben 2024, PDF)",
        url: "https://www.gkv-spitzenverband.de/media/dokumente/krankenversicherung_1/praevention__selbsthilfe__beratung/praevention/praeventionsbericht/2025_GKV_MD_Praventionsbericht_barrierefrei.pdf",
      },
      {
        label:
          "GKV-Spitzenverband – Leitfaden Prävention (Handlungsfelder nach § 20 SGB V)",
        url: "https://www.gkv-spitzenverband.de/krankenversicherung/praevention_selbsthilfe_beratung/praevention_und_bgf/leitfaden_praevention/leitfaden_praevention.jsp",
      },
      {
        label: "GKV-Spitzenverband – Leitfaden Prävention 2025 (PDF)",
        url: "https://www.gkv-spitzenverband.de/media/dokumente/krankenversicherung_1/praevention__selbsthilfe__beratung/praevention/praevention_leitfaden/20251218_Leitfaden_Pravention_2025_barrierefrei.pdf",
      },
      {
        label:
          "Zentrale Prüfstelle Prävention – Kurssuche zertifizierter Präventionskurse",
        url: "https://zpp.preventionoffice.de/",
      },
    ],
  },
  {
    id: "gesundheitsfoerderung-in-lebenswelten",
    who: "pflegebeduerftige",
    when: "krankheit-behandlung",
    title: "Gesundheitsförderung in Lebenswelten",
    summary:
      "Krankenkassen fördern Maßnahmen zur Gesundheitsförderung in Settings wie Kitas, Schulen, Betrieben oder Pflegeeinrichtungen. Ziel ist es, gesundheitliche Chancengleichheit zu verbessern und gesunde Lebensverhältnisse zu schaffen.",
    resources: [
      {
        label:
          "GKV-Spitzenverband – Präventionsbericht 2025 (Berichtsjahr 2024; 185,8 Mio. € für Lebenswelten, 8,86 Mio. erreichte Personen)",
        url: "https://www.gkv-spitzenverband.de/media/dokumente/krankenversicherung_1/praevention__selbsthilfe__beratung/praevention/praeventionsbericht/2025_GKV_MD_Praventionsbericht_barrierefrei.pdf",
      },
      {
        label:
          "GKV-Spitzenverband – Leitfaden Prävention 2025 (Qualitätskriterien für Lebenswelten-Maßnahmen)",
        url: "https://www.gkv-spitzenverband.de/media/dokumente/krankenversicherung_1/praevention__selbsthilfe__beratung/praevention/praevention_leitfaden/20251218_Leitfaden_Pravention_2025_barrierefrei.pdf",
      },
      {
        label: "GKV-Spitzenverband – Präventionsberichte (Übersichtsseite)",
        url: "https://www.gkv-spitzenverband.de/krankenversicherung/praevention_selbsthilfe_beratung/praevention_und_bgf/praeventionsbericht/praeventionsbericht.jsp",
      },
      {
        label: "BMG – Das Präventionsgesetz (Hintergrund zu § 20a SGB V)",
        url: "https://www.bundesgesundheitsministerium.de/service/begriffe-von-a-z/p/praeventionsgesetz",
      },
    ],
  },
  {
    id: "betriebliche-gesundheitsfoerderung",
    who: "erwerbstaetige",
    when: "krankheit-behandlung",
    title: "Betriebliche Gesundheitsförderung",
    summary:
      "Krankenkassen unterstützen Betriebe bei Maßnahmen zur betrieblichen Gesundheitsförderung, etwa durch Beratung, Kurse oder Analysen des Gesundheitszustands der Belegschaft. Ziel ist die Stärkung der Gesundheitsressourcen am Arbeitsplatz.",
    resources: [
      {
        label:
          "BMF LStH 2025 – Anhang 18c: Steuerfreiheit betrieblicher Gesundheitsförderung",
        url: "https://lsth.bundesfinanzministerium.de/lsth/2025/B-Anhaenge/Anhang-18c/inhalt.html",
      },
      {
        label:
          "Haufe – Krankenkassen unterstützen betriebliche Gesundheitsförderung",
        url: "https://www.haufe.de/finance/steuern-finanzen/lohnsteuerfreue-gesundheitsfoerderung-im-eigenen-betrieb/krankenkassen-unterstuetzen-betriebliche-gesundheitsfoerderung_190_620362.html",
      },
    ],
  },
  {
    id: "praevention-arbeitsbedingter-gesundheitsgefahren",
    who: "erwerbstaetige",
    when: "krankheit-behandlung",
    title: "Prävention arbeitsbedingter Gesundheitsgefahren",
    summary:
      "Krankenkassen arbeiten mit dem Arbeitsschutzsystem zusammen, um arbeitsbedingte Erkrankungen zu verhüten. Sie unterstützen Präventionsmaßnahmen, die auf die Reduzierung berufsbedingter Gesundheitsrisiken abzielen.",
    resources: [
      {
        label:
          "DGUV – Zusammenarbeit mit den Krankenkassen (Kooperationsrahmen)",
        url: "https://www.dguv.de/de/praevention/netzwerke/krankenkassen/index.jsp",
      },
      {
        label:
          "GKV-Spitzenverband – Leitfaden Prävention (Handlungsfelder und Kriterien)",
        url: "https://www.gkv-spitzenverband.de/krankenversicherung/praevention_selbsthilfe_beratung/praevention_und_bgf/leitfaden_praevention/leitfaden_praevention.jsp",
      },
      {
        label:
          "GKV-Spitzenverband – Präventionsbericht 2025: 686 Mio. € Ausgaben, 282 Mio. € für betriebliche Gesundheitsförderung",
        url: "https://www.gkv-spitzenverband.de/gkv_spitzenverband/presse/pressemitteilungen_und_statements/pressemitteilung_2158637.jsp",
      },
      {
        label:
          "GKV-Spitzenverband – Präventionsberichte (alle Jahrgänge als PDF)",
        url: "https://www.gkv-spitzenverband.de/krankenversicherung/praevention_selbsthilfe_beratung/praevention_und_bgf/praeventionsbericht/praeventionsbericht.jsp",
      },
      {
        label:
          "REHADAT-Statistik – GKV-Präventionsbericht: betriebliche Gesundheitsförderung",
        url: "https://www.rehadat-statistik.de/statistiken/leistungen/krankenkassen/gkv-praeventionsbericht-betriebliche-gesundheitsfoerderung/",
      },
    ],
  },
  {
    id: "foerderung-von-selbsthilfegruppen",
    who: "alle",
    when: "behinderung-teilhabe",
    title: "Förderung von Selbsthilfegruppen",
    summary:
      "Krankenkassen fördern Selbsthilfegruppen, -organisationen und -kontaktstellen, die sich mit Krankheiten oder Behinderungen befassen. Die Förderung umfasst sowohl kassenindividuelle als auch gemeinsame Leistungen aller Kassen.",
    resources: [
      {
        label: "NAKOS – Selbsthilfeförderung durch die Krankenkassen",
        url: "https://www.nakos.de/informationen/foerderung/krankenkassen/",
      },
      {
        label:
          "NAKOS – GKV-Selbsthilfeförderung auf Bundesebene 2024 (95,1 Mio. €, 1,28 € pro Versicherten)",
        url: "https://www.nakos.de/aktuelles/nachrichten/key@9657",
      },
      {
        label: "BAG Selbsthilfe – Gesetzliche Vorgaben zu § 20h SGB V",
        url: "https://www.bag-selbsthilfe.de/informationen-fuer-selbsthilfe-aktive/selbsthilfefoerderung/selbsthilfefoerderung-der-krankenkassen/-verbaende/gesetzliche-vorgaben",
      },
      {
        label: "BMG – Förderung der gesundheitlichen Selbsthilfe",
        url: "https://www.bundesgesundheitsministerium.de/service/begriffe-von-a-z/s/selbsthilfefoerderung.html",
      },
    ],
  },
  {
    id: "schutzimpfungen-und-verhuetung-uebertragbarer-krankheiten",
    who: "erwerbstaetige",
    when: "krankheit-behandlung",
    title: "Schutzimpfungen und Verhütung übertragbarer Krankheiten",
    summary:
      "GKV-Versicherte haben Anspruch auf Schutzimpfungen und andere Leistungen zur Verhütung übertragbarer Krankheiten. Der genaue Leistungsumfang wird durch Verordnung bestimmt, orientiert sich aber an den Empfehlungen der Ständigen Impfkommission (STIKO).",
    resources: [
      {
        label: "G-BA – Schutzimpfungs-Richtlinie (SI-RL)",
        url: "https://www.g-ba.de/richtlinien/60/",
      },
      {
        label: "Sozialversicherung kompetent – Schutzimpfungen § 20i SGB V",
        url: "https://sozialversicherung-kompetent.de/krankenversicherung/leistungsrecht/824-schutzimpfungen.html",
      },
      {
        label: "BMG – Verordnungsentwurf Schutzimpfungen nach § 20i SGB V",
        url: "https://www.bundesgesundheitsministerium.de/fileadmin/Dateien/3_Downloads/Gesetze_und_Verordnungen/GuV/S/Schutzimpfung_20i_SGB_V_VOmit_Begruendung.pdf",
      },
      {
        label: "GKV-Spitzenverband – GKV Kennzahlen Booklet Q4 2025",
        url: "https://www.gkv-spitzenverband.de/media/grafiken/gkv_kennzahlen/kennzahlen_gkv_2025_q4/20260316_GKV_Kennzahlen_Booklet_Q4-2025_300dpi_barrierefrei.pdf",
      },
    ],
  },
  {
    id: "hiv-praeexpositionsprophylaxe-prep",
    who: "erwerbstaetige",
    when: "krankheit-behandlung",
    title: "HIV-Präexpositionsprophylaxe (PrEP)",
    summary:
      "GKV-Versicherte ab 16 Jahren haben Anspruch auf ärztliche Beratung zur HIV-Präexpositionsprophylaxe (PrEP). Dabei werden die Eignung, die Einnahme sowie notwendige Begleitmaßnahmen erläutert.",
    resources: [
      {
        label:
          "RKI PrEP-Surv – Surveillance der GKV-PrEP-Versorgung (ca. 40.000 Nutzende Ende 2023/2024)",
        url: "https://www.rki.de/DE/Themen/Infektionskrankheiten/Infektionskrankheiten-A-Z/H/HIV-AIDS/Studien/PrEP-Surv/PrEP-Surv.html",
      },
      {
        label:
          "BMG – Evaluation der GKV-PrEP-Einführung (EvE-PrEP, Forschungsprojekt)",
        url: "https://www.bundesgesundheitsministerium.de/service/publikationen/details/evaluation-der-einfuehrung-der-hiv-praeexpositionsprophylaxe-als-leistung-der-gesetzlichen-krankenversicherung-eve-prep",
      },
      {
        label:
          "GKV-Spitzenverband / KBV – Vereinbarung HIV-PrEP gemäß § 20j SGB V (Anlage 33 BMV)",
        url: "https://www.gkv-spitzenverband.de/krankenversicherung/aerztliche_versorgung/bundesmantelvertrag/anlagen_zum_bundesmantelvertrag/einzelne_anlagen_zum_bmv/bmv_anlage_33_hiv.jsp",
      },
      {
        label: "RKI – PrEP-Nutzende Ende 2023: ca. 40.000 (Pressemitteilung)",
        url: "https://www.rki.de/DE/Aktuelles/Neuigkeiten-und-Presse/Meldungen/Archiv/2024_03_20_PI_PrEP.html",
      },
    ],
  },
  {
    id: "zahnprophylaxe-fuer-kinder-gruppe",
    who: "familie",
    when: "krankheit-behandlung",
    title: "Zahnprophylaxe für Kinder (Gruppe)",
    summary:
      "Krankenkassen fördern gruppenbasierte Maßnahmen zur Verhütung von Zahnerkrankungen bei Kindern und Jugendlichen, insbesondere in Kitas und Schulen. Dazu gehören Mundhygieneerziehung, Fluoridierung und Versiegelungen.",
    resources: [
      {
        label:
          "DAJ – Ausgaben der GKV für zahngesundheitliche Prophylaxe (Zeitreihe)",
        url: "https://daj.de/ausgaben-der-gesetzlichen-krankenversicherung-fuer-die-zahngesundheitliche-prophylaxe/",
      },
      {
        label:
          "DAJ – Epidemiologische Begleituntersuchungen zur Gruppenprophylaxe",
        url: "https://daj.de/gruppenprophylaxe/epidemiologische-studien/",
      },
      {
        label: "GKV-Spitzenverband – Gruppenprophylaxe nach § 21 SGB V",
        url: "https://www.gkv-spitzenverband.de/krankenversicherung/zahnaerztliche_versorgung/gruppenprophylaxe/gruppenprophylaxe.jsp",
      },
      {
        label: "DAJ – Definition und Inhalte der Gruppenprophylaxe",
        url: "https://daj.de/gruppenprophylaxe/definition-und-inhalte/",
      },
      {
        label: "Bundeszahnärztekammer – Kinder- und Jugendzahnmedizin",
        url: "https://www.bzaek.de/praevention/kinder-und-jugendzahnmedizin.html",
      },
      {
        label:
          "sozialversicherung-kompetent – Verhütung von Zahnerkrankungen (Gruppenprophylaxe) § 21 SGB V",
        url: "https://sozialversicherung-kompetent.de/krankenversicherung/leistungsrecht/1167-verhuetung-zahnerkrankungen-gruppenprophylaxe.html",
      },
    ],
  },
  {
    id: "zahnprophylaxe-fuer-jugendliche-einzel",
    who: "familie",
    when: "krankheit-behandlung",
    title: "Zahnprophylaxe für Jugendliche (Einzel)",
    summary:
      "Kinder und Jugendliche im Alter von 6 bis 17 Jahren haben Anspruch auf halbjährliche Individualprophylaxe beim Zahnarzt. Dazu gehören Untersuchung, Beratung, Mundhygieneinstruktion sowie ggf. lokale Fluoridierung.",
    resources: [
      {
        label:
          "Krankenkasseninfo – Individualprophylaktische Leistungen für Kinder und Jugendliche",
        url: "https://www.krankenkasseninfo.de/leistungen/gesetzliche-leistungen/individualprophylaktische-leistungen-12.html",
      },
      {
        label: "GKV-Spitzenverband – Vereinbarung Individualprophylaxe",
        url: "https://www.gkv-spitzenverband.de/media/dokumente/krankenversicherung_1/zahnaerztliche_versorgung/zae_sonstige_vereinbarungen_1/25_Individualprophylaxe-Vereinbarung_2003.pdf",
      },
      {
        label:
          "KZBV – Patienteninfo: Fissurenversiegelung (Anspruch, Voraussetzungen)",
        url: "https://www.kzbv.de/patienten/medizinische-infos/vorsorge/fissurenversiegelung/",
      },
      {
        label: "KZBV Jahrbuch 2024 – Statistik zu GKV-Zahnarztleistungen (PDF)",
        url: "https://www.kzbv.de/wp-content/uploads/KZBV2024_Jahrbuch_WEB_ohne_GOZ.pdf",
      },
      {
        label:
          "BMG – GKV-Finanzergebnisse 2024: Endgültige Rechnungsergebnisse (KJ1)",
        url: "https://www.bundesgesundheitsministerium.de/fileadmin/Dateien/3_Downloads/Statistiken/GKV/Finanzergebnisse/KJ1_2024_Internetauftritt.pdf",
      },
    ],
  },
  {
    id: "zahnprophylaxe-fuer-pflegebeduerftige-und-behinderte",
    who: "pflegebeduerftige",
    when: "krankheit-behandlung",
    title: "Zahnprophylaxe für Pflegebedürftige & Behinderte",
    summary:
      "Pflegebedürftige haben Anspruch auf aufsuchende Individualprophylaxe durch den Zahnarzt. Die Leistung umfasst Beratung und praktische Unterstützung bei der Mundhygiene, auch im Pflegeheim oder zu Hause.",
    resources: [
      {
        label:
          "G-BA – Richtlinie nach § 22a SGB V (Zahnprophylaxe Pflege & Behinderung)",
        url: "https://www.g-ba.de/richtlinien/96/",
      },
      {
        label:
          "KZBV – Präventionsleistungen für Pflegebedürftige weiter im Aufwärtstrend (2026)",
        url: "https://www.kzbv.de/pressemitteilungen/praeventionsleistungen-fuer-pflegebeduerftige-weiter-im-aufwaertstrend/",
      },
      {
        label:
          "G-BA Patientenvertretung – Neue Zahn-Vorsorge für Pflegebedürftige und Behinderte",
        url: "https://patientenvertretung.g-ba.de/neuigkeiten/zahnaerztliche-und-kieferorthopaedische-versorgung/neue-zahn-vorsorge-fuer-pflegebeduerftige-und-menschen-mit-behinderung/",
      },
    ],
  },
  {
    id: "medizinische-vorsorgeleistungen-kur",
    who: "erwerbstaetige",
    when: "krankheit-behandlung",
    title: "Medizinische Vorsorgeleistungen / Kur",
    summary:
      "GKV-Versicherte haben Anspruch auf ärztliche Behandlung, Versorgung mit Arznei-, Verband-, Heil- und Hilfsmitteln sowie stationäre Behandlung, wenn dies zur Verhütung von Krankheiten oder zur Vorbeugung einer Verschlimmerung medizinisch notwendig ist.",
    resources: [
      {
        label:
          "sozialversicherung-kompetent.de – Fachkommentar § 23 SGB V: Voraussetzungen, Dauer, Zuzahlung",
        url: "https://sozialversicherung-kompetent.de/krankenversicherung/leistungsrecht/844-medizinische-vorsorgeleistungen.html",
      },
      {
        label:
          "BMG Statistik KG 5 – Vorsorge- und Rehabilitationsmaßnahmen der GKV 2024",
        url: "https://www.bundesgesundheitsministerium.de/fileadmin/Dateien/3_Downloads/Statistiken/GKV/Geschaeftsergebnisse/KG5_2024.pdf",
      },
    ],
  },
  {
    id: "mutter-vater-kind-kur",
    who: "familie",
    when: "schwangerschaft-geburt",
    title: "Mutter-/Vater-Kind-Kur",
    summary:
      "Mütter und Väter können eine stationäre oder ambulante Vorsorgeleistung (Kur) mit ihren Kindern in Anspruch nehmen, wenn sie aus medizinischen oder sozialen Gründen Erholung und Stärkung benötigen. Die Kasse übernimmt die Kosten für Elternteil und Kinder.",
    resources: [
      {
        label: "Müttergenesungswerk – gesetzliche Grundlagen (§ 24 SGB V)",
        url: "https://www.muettergenesungswerk.de/experten/gesetzliche-grundlagen",
      },
      {
        label:
          "Müttergenesungswerk – Datenreport und Jahresbericht (Inanspruchnahme-Statistik)",
        url: "https://www.muettergenesungswerk.de/blog/artikel/muettergenesungswerk-legt-datenreport-und-jahresbericht-vor",
      },
      {
        label:
          "vdek – Mutter-/Vater-Kind-Maßnahmen: Vertragsgrundlagen und Ablauf",
        url: "https://www.vdek.com/vertragspartner/vorsorge-rehabilitation/mvk.html",
      },
      {
        label:
          "Stiftung Warentest – Mutter-Kind-Kur: Wann Eltern Recht auf eine Kur haben",
        url: "https://www.test.de/Auszeit-fuer-Eltern-Wann-Mutter-und-Vater-Recht-auf-eine-Kur-haben-5142247-0/",
      },
    ],
  },
  {
    id: "empfaengnisverhuetung",
    who: "erwerbstaetige",
    when: "schwangerschaft-geburt",
    title: "Empfängnisverhütung",
    summary:
      "Versicherte bis zum vollendeten 22. Lebensjahr haben Anspruch auf ärztliche Beratung zur Empfängnisverhütung. Dazu gehört eine umfassende Aufklärung über geeignete Verhütungsmethoden.",
    resources: [
      {
        label:
          "sozialversicherung-kompetent.de – § 24a SGB V: Empfängnisverhütung",
        url: "https://sozialversicherung-kompetent.de/krankenversicherung/leistungsrecht/1138-empfaengnisverhuetung.html",
      },
      {
        label: "pro familia – Verhütungsberatung und Kosten (Überblick)",
        url: "https://www.profamilia.de/themen/verhuetung",
      },
      {
        label:
          "BZgA – Verhütung in Deutschland: Wer zahlt was? (Überblick Kostenübernahme)",
        url: "https://www.bzga.de/themen/sexualaufklaerung/erwaehnte-themen/verhuetung/",
      },
      {
        label: "BfArM – Notfallkontrazeptiva (Pille danach): Übersicht",
        url: "https://www.bfarm.de/DE/Arzneimittel/Arzneimittelinformationen/Notfallkontrazeptiva/_node.html",
      },
      {
        label:
          "Hilfetelefon Gewalt gegen Frauen – 0800 116 016 (kostenlos, 24/7)",
        url: "https://www.hilfetelefon.de/",
      },
      {
        label: "BMFSFJ – Hilfe nach Gewalt: Beratungsangebote und Versorgung",
        url: "https://www.bmfsfj.de/bmfsfj/themen/gleichstellung/gewalt-gegen-frauen/hilfe-und-beratung",
      },
    ],
  },
  {
    id: "schwangerschaftsabbruch-und-sterilisation",
    who: "erwerbstaetige",
    when: "schwangerschaft-geburt",
    title: "Schwangerschaftsabbruch & Sterilisation",
    summary:
      "GKV-Versicherte haben Anspruch auf ärztliche Beratung im Zusammenhang mit einem Schwangerschaftsabbruch, einschließlich einer umfassenden Aufklärung über den Eingriff, mögliche Risiken und Alternativen.",
    resources: [
      {
        label:
          "G-BA: Empfängnisregelung und Schwangerschaftsabbruch – Themenübersicht",
        url: "https://www.g-ba.de/themen/methodenbewertung/empfaengnisregelung-schwangerschaftsabbruch/",
      },
      {
        label:
          "G-BA Richtlinie zur Empfängnisregelung und zum Schwangerschaftsabbruch (ESA-RL)",
        url: "https://www.g-ba.de/richtlinien/9/",
      },
      {
        label:
          "hkk: Schwangerschaftsabbruch – Voraussetzungen und Kostenübernahme",
        url: "https://www.hkk.de/leistungen-und-services/hkk-leistungen/schwangerschaft-und-geburt/schwangerschaftsabbruch",
      },
      {
        label: "betanet: Schwangerschaftsabbruch – Krankenkasse Kosten",
        url: "https://www.betanet.de/schwangerschaftsabbruch.html",
      },
    ],
  },
  {
    id: "schwangerschaftsvorsorge-und-hebammenhilfe",
    who: "erwerbstaetige",
    when: "schwangerschaft-geburt",
    title: "Schwangerschaftsvorsorge & Hebammenhilfe",
    summary:
      "Schwangere GKV-Versicherte haben Anspruch auf ärztliche Untersuchungen zur Feststellung der Schwangerschaft und zur Vorsorge, einschließlich der gesetzlich vorgeschriebenen Vorsorgeuntersuchungen (Mutterschaftsrichtlinien).",
    resources: [
      {
        label:
          "G-BA – Mutterschafts-Richtlinie (Umfang und Inhalt der Vorsorge)",
        url: "https://www.g-ba.de/richtlinien/19/",
      },
      {
        label:
          "BMG – Schwangerschaft und Krankenversicherung (Leistungsübersicht)",
        url: "https://www.bundesgesundheitsministerium.de/schwangerschaft-krankenversicherung",
      },
      {
        label:
          "BMG – Schwangerschaftsvorsorgeuntersuchungen und Chlamydien-Screening",
        url: "https://www.bundesgesundheitsministerium.de/schwangerschaftsvorsorgeuntersuchung.html",
      },
      {
        label:
          "GKV-Spitzenverband – Hebammenhilfe-Vertrag (§ 134a SGB V): aktueller Vertragstext",
        url: "https://www.gkv-spitzenverband.de/krankenversicherung/ambulante_leistungen/hebammen_geburtshaeuser/hebammenhilfevertrag/hebammenhilfevertrag.jsp",
      },
      {
        label: "GKV-Spitzenverband – FAQ zur Versorgung mit Hebammenhilfe",
        url: "https://www.gkv-spitzenverband.de/krankenversicherung/ambulante_leistungen/hebammen_geburtshaeuser/faq_hebammen/fragen_und_antworten_hebammenhilfe.jsp",
      },
      {
        label:
          "GKV-Spitzenverband – Zahlen, Daten, Fakten zu freiberuflichen Hebammen (2025)",
        url: "https://www.gkv-spitzenverband.de/media/dokumente/krankenversicherung_1/ambulante_leistungen/hebammen/25-10-31_ZDF_Hebammen.pdf",
      },
      {
        label: "KZBV – Zahnärztliche Vorsorge in der Schwangerschaft",
        url: "https://www.kzbv.de/schwangerschaft.70.de.html",
      },
      {
        label:
          "G-BA – Hebammen-Richtlinie: Umfang und Inhalt der Hebammenhilfe",
        url: "https://www.g-ba.de/richtlinien/21/",
      },
      {
        label:
          "Sozialversicherung kompetent – § 24d SGB V: Ärztliche Betreuung und Hebammenhilfe",
        url: "https://sozialversicherung-kompetent.de/krankenversicherung/leistungsrecht/780-hebammenhilfe.html",
      },
    ],
  },
  {
    id: "versorgung-mit-arznei-und-hilfsmitteln-in-der-schwangerschaf",
    who: "erwerbstaetige",
    when: "schwangerschaft-geburt",
    title: "Versorgung mit Arznei- und Hilfsmitteln in der Schwangerschaft",
    summary:
      "Schwangere und Wöchnerinnen haben Anspruch auf Versorgung mit notwendigen Arznei-, Verband-, Heil- und Hilfsmitteln, die im Zusammenhang mit der Schwangerschaft oder Entbindung erforderlich sind.",
    resources: [
      {
        label:
          "§ 24e SGB V – Versorgung mit Arznei-, Verband-, Heil- und Hilfsmitteln (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/sgb_5/__24e.html",
      },
      {
        label:
          "BMG: Angebote für werdende Mütter – Leistungen der Krankenversicherung",
        url: "https://www.bundesgesundheitsministerium.de/schwangerschaft-krankenversicherung",
      },
      {
        label: "vdek: Leistungen bei Schwangerschaft und Mutterschaft",
        url: "https://www.vdek.com/vertragspartner/leistungen/schwangerschaft.html",
      },
    ],
  },
  {
    id: "entbindungsleistungen",
    who: "erwerbstaetige",
    when: "schwangerschaft-geburt",
    title: "Entbindungsleistungen",
    summary:
      "GKV-Versicherte haben Anspruch auf eine ambulante oder stationäre Entbindung. Die Krankenkasse übernimmt die Kosten der Geburtshilfe durch Arzt oder Hebamme sowie ggf. die Kosten des Krankenhausaufenthalts.",
    resources: [
      {
        label: "Destatis – Kaiserschnittrate 2024 auf Höchststand (33,0 %)",
        url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/05/PD26_N028_23.html",
      },
      {
        label:
          "Destatis – Zahl der Entbindungskliniken deutlich zurückgegangen",
        url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/03/PD26_N018_231.html",
      },
      {
        label: "Destatis – Statistischer Bericht: Geburten 2024",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Geburten/Publikationen/Downloads-Geburten/statistischer-bericht-geburten-5126104247005.html",
      },
      {
        label:
          "GKV-Spitzenverband – Zahlen, Daten, Fakten zu freiberuflichen Hebammen (2025)",
        url: "https://www.gkv-spitzenverband.de/media/dokumente/krankenversicherung_1/ambulante_leistungen/hebammen/25-10-31_ZDF_Hebammen.pdf",
      },
    ],
  },
  {
    id: "haeusliche-pflege-bei-schwangerschaft",
    who: "pflegebeduerftige",
    when: "schwangerschaft-geburt",
    title: "Häusliche Pflege bei Schwangerschaft",
    summary:
      "Wenn eine Schwangere oder Wöchnerin wegen der Schwangerschaft oder Entbindung den Haushalt nicht führen kann und keine andere Person im Haushalt dies übernehmen kann, hat sie Anspruch auf häusliche Pflege.",
    resources: [
      {
        label:
          "BMG – Schwangerschaft und Krankenversicherung: Leistungsübersicht",
        url: "https://www.bundesgesundheitsministerium.de/schwangerschaft-krankenversicherung",
      },
      {
        label:
          "sozialversicherung-kompetent.de – Häusliche Pflege bei Schwangerschaft (§ 24g SGB V)",
        url: "https://sozialversicherung-kompetent.de/krankenversicherung/leistungsrecht/782-haeusliche-pflege-schwangerschaft.html",
      },
    ],
  },
  {
    id: "haushaltshilfe-bei-schwangerschaft",
    who: "familie",
    when: "schwangerschaft-geburt",
    title: "Haushaltshilfe bei Schwangerschaft",
    summary:
      "Schwangere und Wöchnerinnen, die den Haushalt nicht führen können, haben Anspruch auf eine Haushaltshilfe, wenn ein Kind unter 12 Jahren im Haushalt lebt und keine andere Person einspringen kann.",
    resources: [
      {
        label:
          "BMG – Schwangerschaft und Krankenversicherung: Leistungsübersicht",
        url: "https://www.bundesgesundheitsministerium.de/schwangerschaft-krankenversicherung",
      },
      {
        label:
          "GKV-Spitzenverband – GKV Kennzahlen Booklet Q4 2025 (Haushaltshilfe inkl. Schwangerschaft)",
        url: "https://www.gkv-spitzenverband.de/media/grafiken/gkv_kennzahlen/kennzahlen_gkv_2025_q4/20260316_GKV_Kennzahlen_Booklet_Q4-2025_300dpi_barrierefrei.pdf",
      },
    ],
  },
  {
    id: "gesundheitsuntersuchung-check-up",
    who: "erwerbstaetige",
    when: "krankheit-behandlung",
    title: "Gesundheitsuntersuchung (Check-up)",
    summary:
      "Versicherte ab 18 Jahren haben Anspruch auf eine ärztliche Gesundheitsuntersuchung zur Früherkennung von Krankheiten, insbesondere von Herz-Kreislauf-Erkrankungen, Nierenerkrankungen und Diabetes. Ab 35 Jahren ist der Check-up alle drei Jahre möglich.",
    resources: [
      {
        label: "G-BA – Gesundheitsuntersuchungs-Richtlinie (GU-RL)",
        url: "https://www.g-ba.de/richtlinien/10/",
      },
      {
        label: "G-BA – Gesundheitsuntersuchungen (Check-up): Themenübersicht",
        url: "https://www.g-ba.de/themen/methodenbewertung/erwachsene/gesundheitsuntersuchungen/",
      },
      {
        label:
          "Deutsches Ärzteblatt – Jeder vierte Berechtigte nutzt Check-up 35",
        url: "https://www.aerzteblatt.de/archiv/199777/Frueherkennung-Jeder-vierte-Berechtigte-nutzt-Check-up-35",
      },
      {
        label:
          "RKI GBE – Vorsorge und Früherkennung (Gesundheitsberichterstattung)",
        url: "https://www.gbe.rki.de/DE/Themen/GesundheitsfoerderungPraeventionUndVersorgung/GesundheitsfoerderungundPraevention/VorsorgeUndFrueherkennung/vorsorgeUndFrueherkennung_node.html",
      },
      {
        label:
          "RKI Diabetes-Surveillance – Inanspruchnahme Gesundheits-Check-up",
        url: "https://diabsurv.rki.de/Webs/Diabsurv/DE/diabetes-in-deutschland/2-18_Gesundheits-Check-up.html",
      },
    ],
  },
  {
    id: "organisierte-krebsfrueherkennungsprogramme",
    who: "alle",
    when: "schwangerschaft-geburt",
    title: "Organisierte Krebsfrüherkennungsprogramme",
    summary:
      "Versicherte haben Anspruch auf Teilnahme an organisierten Krebsfrüherkennungsprogrammen, zum Beispiel Mammographie-Screening, Darmkrebs-Screening und Gebärmutterhalskrebsvorsorge. Diese Programme folgen qualitätsgesicherten Einladungssystemen.",
    resources: [
      {
        label:
          "G-BA – Brustkrebs-Früherkennung: Mammographie-Screening-Programm (Übersicht)",
        url: "https://www.g-ba.de/themen/methodenbewertung/erwachsene/krebsfrueherkennung/mammographie-screening/",
      },
      {
        label:
          "G-BA – Mammographie-Screening Jahresbericht Evaluation 2023 (52,1 % Teilnahmerate, 3,07 Mio. Teilnehmerinnen; PDF)",
        url: "https://www.g-ba.de/downloads/17-98-5975/KOOPMAMMO_Jahresbericht_Eval_2023_web.pdf",
      },
      {
        label:
          "RKI/GBE – Darmkrebsfrüherkennung: Inanspruchnahme in Deutschland",
        url: "https://www.gbe.rki.de/DE/Themen/GesundheitsfoerderungPraeventionUndVersorgung/GesundheitsfoerderungundPraevention/VorsorgeUndFrueherkennung/Darmkrebsfrueherkennung/darmkrebsfrueherkennung_node.html",
      },
      {
        label:
          "Krebsdaten.de – Kapitel Krebsfrüherkennung (Zentrum für Krebsregisterdaten)",
        url: "https://www.krebsdaten.de/Krebs/DE/Content/Publikationen/Krebsgeschehen/Frueherkennung/Frueherkennung_node.html",
      },
    ],
  },
  {
    id: "datengestuetzte-gesundheitsrisikoerkennung",
    who: "pflegebeduerftige",
    when: "krankheit-behandlung",
    title: "Datengestützte Gesundheitsrisikoerkennung",
    summary:
      "Krankenkassen dürfen Versicherungsdaten auswerten, um individuelle Gesundheitsrisiken zu erkennen und Versicherte proaktiv auf Früherkennungsangebote hinzuweisen. Die Teilnahme an entsprechenden Maßnahmen ist freiwillig.",
    resources: [
      {
        label:
          "BAS – Rundschreiben: Einführung datengestützter Auswertungen gem. § 25b SGB V (GDNG)",
        url: "https://www.bundesamtsozialesicherung.de/de/service/rundschreiben/detail/datenschutz-im-aufsichtsbereich-hier-einfuehrung-von-datengestuetzten-auswertungen-gem-25b-sgb-v-durch-das-gesundheitsdatennutzungsgesetz/",
      },
      {
        label:
          "KKH – Datengestützte Gesundheitsrisikoerkennung: Datenschutzhinweis für Versicherte",
        url: "https://www.kkh.de/datenschutz/gesundheitsrisiken-erkennen",
      },
      {
        label:
          "Stiftung Gesundheit – Analyse: § 25b SGB V datengestützte Prävention (Q4/2025)",
        url: "https://www.stiftung-gesundheit.de/analysen-studien-im-fokus-q4-2025-datengestuetzte-praevention/",
      },
      {
        label:
          "arzt-wirtschaft.de – § 25b SGB V erlaubt Datenauswertung ohne Einwilligung",
        url: "https://www.arzt-wirtschaft.de/recht/datenschutzrecht/krankenkassen-25b-sgb-v-erlaubt-datenauswertung-ohne-einwilligung",
      },
    ],
  },
  {
    id: "kinderfrueherkennungsuntersuchungen-u1-u9-j1",
    who: "familie",
    when: "kind-familie",
    title: "Kinderfrüherkennungsuntersuchungen (U1–U9, J1)",
    summary:
      "Kinder und Jugendliche haben Anspruch auf gesetzlich festgelegte Früherkennungsuntersuchungen (U-Untersuchungen) in verschiedenen Altersstufen. Diese dienen der frühzeitigen Erkennung von Entwicklungsstörungen, Krankheiten und Behinderungen.",
    resources: [
      {
        label: "G-BA – Kinder-Richtlinie (U1–U9)",
        url: "https://www.g-ba.de/richtlinien/15/",
      },
      {
        label: "G-BA – Jugendgesundheitsuntersuchungs-Richtlinie (J1, J2)",
        url: "https://www.g-ba.de/richtlinien/14/",
      },
      {
        label: "G-BA – Früherkennung bei Kindern: Themenübersicht",
        url: "https://www.g-ba.de/themen/methodenbewertung/kinder/",
      },
      {
        label: "BMG – Früherkennungsuntersuchungen für Kinder und Jugendliche",
        url: "https://www.bundesgesundheitsministerium.de/themen/praevention/kindergesundheit/frueherkennungsuntersuchung-bei-kindern",
      },
      {
        label: "KBV – Kinder- und Jugenduntersuchungen: Übersicht für Praxen",
        url: "https://www.kbv.de/praxis/patientenversorgung/praevention/kinder-jugenduntersuchungen",
      },
    ],
  },
  {
    id: "krankenbehandlung-gkv",
    who: "erwerbstaetige",
    when: "krankheit-behandlung",
    title: "Krankenbehandlung (GKV)",
    summary:
      "GKV-Versicherte haben Anspruch auf Krankenbehandlung, die notwendig ist, um eine Krankheit zu erkennen, zu heilen, ihre Verschlimmerung zu verhüten oder Krankheitsbeschwerden zu lindern. Dies umfasst ärztliche und zahnärztliche Behandlung, Arzneimittel, Krankenhausbehandlung und mehr.",
    resources: [
      {
        label:
          "GKV-Spitzenverband – Kennzahlen der gesetzlichen Krankenversicherung",
        url: "https://www.gkv-spitzenverband.de/gkv_spitzenverband/presse/zahlen_und_grafiken/gkv_kennzahlen/gkv_kennzahlen.jsp",
      },
      {
        label:
          "Bundesgesundheitsministerium – GKV: Leistungen und Finanzierung",
        url: "https://www.bundesgesundheitsministerium.de/themen/krankenversicherung/leistungen.html",
      },
      {
        label: "G-BA – Richtlinien zur Krankenbehandlung",
        url: "https://www.g-ba.de/richtlinien/",
      },
      {
        label: "RKI – Gesundheit in Deutschland (Gesundheitsberichterstattung)",
        url: "https://www.rki.de/DE/Content/Gesundheitsmonitoring/Gesundheitsberichterstattung/GBEDownloadsGiD/2015/kurzfassung_gesundheit_in_deutschland.html",
      },
    ],
  },
  {
    id: "kryokonservierung-von-keimzellen",
    who: "familie",
    when: "krankheit-behandlung",
    title: "Kryokonservierung von Keimzellen",
    summary:
      "GKV-Versicherte haben Anspruch auf Kryokonservierung (Einfrieren) von Ei- oder Samenzellen oder Keimzellgewebe, wenn eine Krebserkrankung oder deren Behandlung die Fruchtbarkeit gefährdet.",
    resources: [
      {
        label:
          "Sozialversicherung-kompetent – Kryokonservierung nach § 27a Abs. 4 SGB V (Überblick)",
        url: "https://sozialversicherung-kompetent.de/krankenversicherung/leistungsrecht/1091-kryokonservierung.html",
      },
      {
        label:
          "DSFJEMK – Kostenübernahme für Langzeitlagerung von Keimzellen bei Krebserkrankung",
        url: "https://junge-erwachsene-mit-krebs.de/wissen/kostenuebernahme-fuer-die-langzeitlagerung-von-keimzellen-und-keimzellgewebe/",
      },
      {
        label:
          "Deutsches IVF-Register (D·I·R) – Jahrbuch 2024 (134.281 Behandlungszyklen, 433.858 Geburten seit 1997)",
        url: "https://www.deutsches-ivf-register.de/jahrbuch.php",
      },
      {
        label:
          "G-BA – Richtlinie Methoden Krankenbehandlung: Künstliche Befruchtung",
        url: "https://www.g-ba.de/themen/methodenbewertung/kuenstliche-befruchtung/",
      },
      {
        label:
          "Ärzteblatt – Fast 20.000 Geburten nach künstlicher Befruchtung in Deutschland",
        url: "https://www.aerzteblatt.de/news/fast-20000-geburten-nach-kunstlicher-befruchtung-in-deutschland-3f2ea87b-8fd8-4240-84b5-0efea1b66421",
      },
      {
        label:
          "Informationsportal Kinderwunsch – GKV-Leistungen im Überblick (Voraussetzungen, Altersgrenzen, Versuche)",
        url: "https://www.informationsportal-kinderwunsch.de/kiwu/finanzielle-foerderung/krankenkasse",
      },
      {
        label:
          "BAFZA – Bund/Länder-Kooperation Kinderwunschbehandlungen (25 % Zusatzförderung)",
        url: "https://www.bafza.de/programme-und-foerderungen/bundlaender-kooperation-bei-der-foerderung-von-kinderwunschbehandlungen",
      },
      {
        label:
          "BSG-Urteil B 1 KR 7/21 R – Keine GKV-Kostenerstattung für gleichgeschlechtliche Paare (10.11.2021)",
        url: "https://www.bsg.bund.de/SharedDocs/Entscheidungen/DE/2021/2021_11_10_B_01_KR_07_21_R.html",
      },
      {
        label:
          "G-BA – Richtlinien über künstliche Befruchtung (vollständige Richtlinie)",
        url: "https://www.g-ba.de/richtlinien/1/",
      },
    ],
  },
  {
    id: "anspruch-auf-aerztliche-zweitmeinung",
    who: "erwerbstaetige",
    when: "krankheit-behandlung",
    title: "Anspruch auf ärztliche Zweitmeinung",
    summary:
      "Vor bestimmten planbaren, aber mit Risiken verbundenen Operationen können Versicherte eine unabhängige Zweitmeinung eines weiteren Facharztes einholen. Die Krankenkasse übernimmt die Kosten dieser Zweitmeinung.",
    resources: [
      {
        label: "G-BA – Zweitmeinungs-Richtlinie (aktuelle Fassung)",
        url: "https://www.g-ba.de/richtlinien/98/",
      },
      {
        label: "KBV – Arztsuche: Zweitmeinungsärzte finden",
        url: "https://arztsuche.kbv.de/",
      },
      {
        label: "AOK – Informationen zum Zweitmeinungsverfahren",
        url: "https://www.aok.de/pk/leistungen/krankenhaus/zweitmeinung/",
      },
    ],
  },
  {
    id: "aerztliche-zahnaerztliche-psychotherapeutische-behandlung",
    who: "erwerbstaetige",
    when: "krankheit-behandlung",
    title: "Ärztliche/zahnärztliche/psychotherapeutische Behandlung",
    summary:
      "GKV-Versicherte haben Anspruch auf ärztliche Behandlung durch zugelassene Vertragsärzte. Die Behandlung umfasst alle medizinisch notwendigen diagnostischen und therapeutischen Maßnahmen.",
    resources: [
      {
        label: "GKV-Spitzenverband – Vergütung ärztlicher Leistungen (Thema)",
        url: "https://www.gkv-spitzenverband.de/gkv_spitzenverband/presse/fokus/verguetung_aerztlicher_leistungen/s_thema_aerzteverguetung.jsp",
      },
      {
        label:
          "GKV-Spitzenverband – GKV-Kennzahlen (Ausgaben nach Leistungsbereich)",
        url: "https://www.gkv-spitzenverband.de/gkv_spitzenverband/presse/zahlen_und_grafiken/gkv_kennzahlen/gkv_kennzahlen.jsp",
      },
      {
        label: "BMG – Vorläufige Finanzergebnisse der GKV 2024",
        url: "https://www.bundesgesundheitsministerium.de/presse/pressemitteilungen/vorlaeufige-finanzergebnisse-der-gkv-fuer-das-jahr-2024-pm-07-03-2025.html",
      },
      {
        label: "KBV – Qualitätsbericht 2024 zur ambulanten Versorgung",
        url: "https://www.kbv.de/praxis/tools-und-services/qep-newsletter/2026/qualitaetsbericht-fuer-2024-zur-ambulanten-versorgung-erschienen",
      },
      {
        label:
          "vdek – GKV-Ausgaben für zahnärztliche Behandlung (ca. 19,1 Mrd. € in 2025, Zeitreihe)",
        url: "https://www.vdek.com/presse/daten/d_ausgaben_zahnaerztliche_behandlung.html",
      },
      {
        label:
          "KZBV Statistisches Jahrbuch – Zahlen zur vertragszahnärztlichen Versorgung",
        url: "https://www.kzbv.de/service/statistisches-jahrbuch/",
      },
      {
        label:
          "GKV-Spitzenverband – Faktenblatt Vergütung psychotherapeutische Versorgung (4,6 Mrd. € GKV-Ausgaben 2023, +80 % seit 2014; PDF)",
        url: "https://www.gkv-spitzenverband.de/media/dokumente/presse/pressemitteilungen/2026/20260211_Faktenblatt_Verguetung_der_psychotherapeutischen_Versorgung.pdf",
      },
      {
        label:
          "GKV-Spitzenverband – Fokusseite Ambulante Psychotherapie (ca. 42.000 zugelassene Therapeuten 2025)",
        url: "https://www.gkv-spitzenverband.de/gkv_spitzenverband/presse/fokus/psychotherapie.jsp",
      },
      {
        label:
          "KBV – Statistik psychotherapeutische Gutachten 2023 (Gutachtenstatistik; PDF)",
        url: "https://gesundheitsdaten.kbv.de/cms/media/sp/Gutachtenstatistik_2023.pdf",
      },
      {
        label:
          "GKV-Spitzenverband – Positionspapier psychotherapeutische Versorgung (2025; PDF)",
        url: "https://www.gkv-spitzenverband.de/media/dokumente/service_1/publikationen/20250625_PoPa_Psychotherapie_barrierefrei.pdf",
      },
    ],
  },
  {
    id: "kieferorthopaedische-behandlung",
    who: "familie",
    when: "krankheit-behandlung",
    title: "Kieferorthopädische Behandlung",
    summary:
      "Kinder und Jugendliche bis 18 Jahre mit einer kieferorthopädischen Indikation (KIG-Grade 3–5) haben Anspruch auf kieferorthopädische Behandlung durch die GKV. Für Erwachsene werden Kosten nur in seltenen Ausnahmefällen übernommen.",
    resources: [
      {
        label:
          "KZBV – Ablauf der kieferorthopädischen Behandlung (Patienteninfo)",
        url: "https://www.kzbv.de/patienten/medizinische-infos/zahnfehlstellungen/ablauf-der-kieferorthopaedischen-behandlung/",
      },
      {
        label: "GKV-Spitzenverband – Kieferorthopädie-Richtlinien (G-BA)",
        url: "https://www.gkv-spitzenverband.de/media/dokumente/krankenversicherung_1/zahnaerztliche_versorgung/rili_g_ba/15_Kieferorthopaedie-RiLi_2004.pdf",
      },
    ],
  },
  {
    id: "arznei-und-verbandmittel",
    who: "erwerbstaetige",
    when: "krankheit-behandlung",
    title: "Arznei- und Verbandmittel",
    summary:
      "Für bestimmte Erkrankungen oder Situationen können GKV-Versicherte Anspruch auf eine einmalige Versorgung mit Arzneimitteln haben, auch wenn diese sonst nicht zum Standardleistungskatalog gehören.",
    resources: [
      {
        label:
          "BMG – FAQ: Cannabis als Medizin (Voraussetzungen, Genehmigung, Verordnung)",
        url: "https://www.bundesgesundheitsministerium.de/service/begriffe-von-a-z/c/cannabis/faq-cannabis-als-medizin",
      },
      {
        label:
          "G-BA – FAQ zur Verordnung von medizinischem Cannabis in der GKV",
        url: "https://www.g-ba.de/themen/arzneimittel/arzneimittel-richtlinie-anlagen/faq-medizinisches-cannabis/",
      },
      {
        label:
          "BMG – FAQ zur Änderung des Medizinal-Cannabisgesetzes (MedCanG)",
        url: "https://www.bundesgesundheitsministerium.de/service/gesetze-und-verordnungen/guv-21-lp/aend-medcang/faq-medcang",
      },
      {
        label:
          "Medizinal-Cannabisgesetz (MedCanG) – Volltext auf gesetze-im-internet.de",
        url: "https://www.gesetze-im-internet.de/medcang/BJNR06D0C0024.html",
      },
      {
        label:
          "GKV-Spitzenverband – GKV-Kennzahlen (Ausgaben u. a. für Arzneimittel inkl. Cannabis)",
        url: "https://www.gkv-spitzenverband.de/gkv_spitzenverband/presse/zahlen_und_grafiken/gkv_kennzahlen/gkv_kennzahlen.jsp",
      },
    ],
  },
  {
    id: "medikationsplan",
    who: "erwerbstaetige",
    when: "krankheit-behandlung",
    title: "Medikationsplan",
    summary:
      "Versicherte, die dauerhaft mindestens drei verordnete Arzneimittel einnehmen, haben Anspruch auf einen aktuellen Medikationsplan in Papierform und ggf. auch digital. Er hilft, Wechselwirkungen zu erkennen und die Therapietreue zu verbessern.",
    resources: [
      {
        label:
          "KBV – Bundesmantelvertrag-Ärzte: Technische Anlage zum Medikationsplan",
        url: "https://www.kbv.de/html/medikationsplan.php",
      },
      {
        label: "ABDA – Apothekerkammer: Medikationsplan in der Apotheke",
        url: "https://www.abda.de/themen/pharmazeutische-versorgung/medikationsplan/",
      },
      {
        label: "BMG – eHealth-Gesetz und Medikationsplan (Übersicht)",
        url: "https://www.bundesgesundheitsministerium.de/themen/digitalisierung/e-health-gesetz",
      },
    ],
  },
  {
    id: "telemedizinische-heilmittel",
    who: "erwerbstaetige",
    when: "krankheit-behandlung",
    title: "Telemedizinische Heilmittel",
    summary:
      "GKV-Versicherte haben Anspruch auf Heilmittel, die im Wege der Telemedizin (z.B. per Videochat) erbracht werden, wenn dies medizinisch sinnvoll und vom Gemeinsamen Bundesausschuss zugelassen ist.",
    resources: [
      {
        label:
          "G-BA Beschluss: Heilmittel als telemedizinische Leistung (Videotherapie)",
        url: "https://www.g-ba.de/beschluesse/5079/",
      },
      {
        label:
          "G-BA Pressemitteilung: Heilmittelbehandlungen auch per Video möglich",
        url: "https://www.g-ba.de/presse/pressemitteilungen-meldungen/992/",
      },
      {
        label:
          "Bundesamt für Soziale Sicherung: Telemedizin – Heilmittel, Hebammen, Arzneimittel",
        url: "https://www.bundesamtsozialesicherung.de/de/themen/digitalausschuss/telemedizin-und-auswirkungen-fuer-die-krankenkassen/heilmittel-hebammenleistungen-arzneimittelversorgung/",
      },
      {
        label:
          "G-BA Patientenvertretung: Heilmittelbehandlungen per Video möglich",
        url: "https://patientenvertretung.g-ba.de/neuigkeiten/veranlasste-leistungen/heilmittelbehandlungen-per-video-moeglich/",
      },
    ],
  },
  {
    id: "hilfsmittel-hoer-seh-orthopaedische-hilfen-prothesen",
    who: "behinderung",
    when: "krankheit-behandlung",
    title: "Hilfsmittel (Hör-, Seh-, orthopädische Hilfen, Prothesen)",
    summary:
      "GKV-Versicherte mit Hörverlust haben Anspruch auf Versorgung mit Hörhilfen (Hörgeräten). Die Kasse übernimmt einen Festbetrag; Mehrkosten für höherwertige Geräte tragen Versicherte selbst.",
    resources: [
      {
        label: "betanet – Hörhilfen: Voraussetzungen, Festbetrag und Kosten",
        url: "https://www.betanet.de/hoerhilfen.html",
      },
      {
        label: "GKV-Spitzenverband – Festbeträge für Hörhilfen",
        url: "https://www.gkv-spitzenverband.de/krankenversicherung/hilfsmittel/festbetraege_3/festbetraege.jsp",
      },
      {
        label: "Verbraucherzentrale – Hörgeräte: Was zahlt die Krankenkasse?",
        url: "https://www.verbraucherzentrale.de/wissen/gesundheit-pflege/krankenversicherung/hoergeraete-was-zahlt-die-krankenkasse-11470",
      },
      {
        label:
          "GKV-Spitzenverband – 11,5 Mrd. € für Hilfsmittel in 2024 (31,75 Mio. Versorgungen)",
        url: "https://www.gkv-spitzenverband.de/gkv_spitzenverband/presse/pressemitteilungen_und_statements/pressemitteilung_2084061.jsp",
      },
      {
        label:
          "VDEK – Hörgeräte: Neue Versorgungsverträge für Ersatzkassenversicherte (2023)",
        url: "https://www.vdek.com/presse/pressemitteilungen/2023/hoergeraete-neuer-ersatzkassen-vertrag-versorgung.html",
      },
      {
        label: "EnableMe – Kostenübernahme von Prothesen: Wer bezahlt was?",
        url: "https://www.enableme.de/de/artikel/kostenubernahme-wer-bezahlt-was-1299",
      },
      {
        label: "betanet – Hilfsmittel: Kosten, Zuzahlung, Antrag",
        url: "https://www.betanet.de/hilfsmittel.html",
      },
      {
        label: "GKV-Spitzenverband – Hilfsmittelverzeichnis",
        url: "https://www.gkv-spitzenverband.de/krankenversicherung/hilfsmittel/hilfsmittelverzeichnis/hilfsmittelverzeichnis.jsp",
      },
      {
        label: "Verbraucherzentrale – Hilfsmittel: Wer trägt welche Kosten?",
        url: "https://www.verbraucherzentrale.de/wissen/gesundheit-pflege/krankenversicherung/hilfsmittel-wer-traegt-welche-kosten-6900",
      },
      {
        label:
          "VDEK – GKV-Ausgaben für Heil- und Hilfsmittel (historische Zeitreihe)",
        url: "https://www.vdek.com/presse/daten/d_ausgaben_heil_hilfsmittel.html",
      },
      {
        label:
          "Verbraucherzentrale – Brille: Krankenkasse zahlt nur in Ausnahmefällen",
        url: "https://www.verbraucherzentrale.de/wissen/gesundheit-pflege/krankenversicherung/neue-brille-krankenkasse-zahlt-nur-in-ausnahmefaellen-13686",
      },
      {
        label: "Finanztip – Brille und Krankenkasse: Zuschuss und Zuzahlung",
        url: "https://www.finanztip.de/gkv/zuzahlung-brille/",
      },
      {
        label:
          "Optikernetz – Aufhebung der Festbeträge für Sehhilfen ab März 2025",
        url: "https://www.optikernetz.de/nachrichten/2025/03-04-2025-bekanntmachung-im-bundesanzeiger-aufhebung-der-festbetraege-fuer-sehhilfen-wirksam.php",
      },
    ],
  },
  {
    id: "digitale-gesundheitsanwendungen-diga",
    who: "erwerbstaetige",
    when: "krankheit-behandlung",
    title: "Digitale Gesundheitsanwendungen (DiGA)",
    summary:
      "GKV-Versicherte haben Anspruch auf Versorgung mit digitalen Gesundheitsanwendungen (DiGA), die vom Bundesinstitut für Arzneimittel und Medizinprodukte (BfArM) in ein Verzeichnis aufgenommen wurden. Diese Apps können auf Rezept verordnet werden.",
    resources: [
      {
        label: "BfArM – DiGA-Verzeichnis (offizielle App-auf-Rezept-Liste)",
        url: "https://diga.bfarm.de/de",
      },
      {
        label:
          "GKV-Spitzenverband – DiGA-Bericht 2024 (234 Mio. €, über 1 Mio. Verordnungen)",
        url: "https://www.gkv-spitzenverband.de/media/dokumente/krankenversicherung_1/telematik/digitales/2024_DiGA-Bericht_final.pdf",
      },
      {
        label: "GKV-Spitzenverband – Fokus Digitale Gesundheitsanwendungen",
        url: "https://www.gkv-spitzenverband.de/gkv_spitzenverband/presse/fokus/fokus_diga.jsp",
      },
    ],
  },
  {
    id: "tabakentwoehnungsmittel-gkv",
    who: "alle",
    when: "krankheit-behandlung",
    title: "Tabakentwöhnungsmittel (GKV)",
    summary:
      "GKV-Versicherte haben einmalig Anspruch auf Versorgung mit zugelassenen, nicht verschreibungspflichtigen Mitteln zur Tabakentwöhnung, wenn diese im Rahmen eines ärztlich begleiteten Programms eingesetzt werden.",
    resources: [
      {
        label:
          "G-BA – Arzneimittel zur Tabakentwöhnung (Wirkstoffe und Voraussetzungen)",
        url: "https://www.g-ba.de/themen/arzneimittel/arzneimittel-richtlinie-anlagen/arzneimittel-zur-tabakentwoehnung/",
      },
      {
        label:
          "G-BA Pressemitteilung (Mai 2025) – Details des neuen GKV-Leistungsanspruchs",
        url: "https://www.g-ba.de/presse/pressemitteilungen-meldungen/1256/",
      },
      {
        label:
          "AOK Gesundheitspartner – Verordnungsfähigkeit von Tabakentwöhnungsmitteln",
        url: "https://www.aok.de/gp/verordnung/wirtschaftlichkeit/arzneimittelinformationen-verordnungshinweise/verordnungsfaehigkeit-von-arzneimitteln-zur-tabakentwoehnung",
      },
      {
        label:
          "Deutsches Ärzteblatt – Tabakentwöhnungsmittel in engen Grenzen erstattungsfähig",
        url: "https://www.aerzteblatt.de/news/arzneimittel-zur-tabakentwohnung-in-engen-grenzen-erstattungsfahig-12986e29-a55b-4d92-aa49-63da5db564ff",
      },
    ],
  },
  {
    id: "otc-arzneimittel-kinder-jugendliche",
    who: "familie",
    when: "krankheit-behandlung",
    title: "OTC-Arzneimittel für Kinder & Jugendliche",
    summary:
      "Kinder bis 12 Jahre haben generell Anspruch auf Erstattung nicht verschreibungspflichtiger Arzneimittel durch die GKV. Jugendliche zwischen 12 und 17 Jahren mit Entwicklungsstörungen erhalten ebenfalls OTC-Mittel auf Kassenkosten.",
    resources: [
      {
        label:
          "§ 34 Abs. 1 SGB V – Ausgeschlossene Arznei-, Heil- und Hilfsmittel (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/sgb_5/__34.html",
      },
      {
        label: "G-BA – OTC-Übersicht: Ausnahmen vom Verordnungsausschluss",
        url: "https://www.g-ba.de/themen/arzneimittel/arzneimittel-richtlinie-anlagen/otc-uebersicht/",
      },
    ],
  },
  {
    id: "haeusliche-krankenpflege",
    who: "pflegebeduerftige",
    when: "krankheit-behandlung",
    title: "Häusliche Krankenpflege",
    summary:
      "GKV-Versicherte haben nach einem Krankenhausaufenthalt oder anstelle einer Krankenhausbehandlung Anspruch auf häusliche Krankenpflege. Eine Pflegefachkraft kommt dann nach Hause und übernimmt medizinische und pflegerische Aufgaben.",
    resources: [
      {
        label:
          "BAG-SAPV – Allgemeine ambulante Palliativversorgung (AAPV): Grundlagen und Abgrenzung zur SAPV",
        url: "https://www.bag-sapv.de/informatives/aapv/",
      },
      {
        label: "Charta zur Betreuung Sterbender – AAPV als Handlungsfeld",
        url: "https://www.charta-sterbende.de/handlungsfelder/allgemeine-ambulante-palliativversorgung",
      },
      {
        label:
          "Deutsche Gesellschaft für Palliativmedizin – Erläuterungen zur ambulanten Palliativversorgung (2018)",
        url: "https://www.dgpalliativmedizin.de/phocadownload/stellungnahmen/2018/2018_Erluterungen_Ambulante_Palliativversorgung.pdf",
      },
      {
        label:
          "G-BA – Spezialisierte ambulante Palliativversorgung (SAPV-Richtlinie und Abgrenzung)",
        url: "https://www.g-ba.de/themen/veranlasste-leistungen/palliativversorgung/",
      },
      {
        label:
          "GKV-Spitzenverband – Häusliche Krankenpflege: Übersicht und Rahmenempfehlungen",
        url: "https://www.gkv-spitzenverband.de/krankenversicherung/ambulante_leistungen/haeusliche_krankenpflege/haeusliche_krankenpflege_1.jsp",
      },
      {
        label: "BMG – Häusliche Krankenpflege: Anspruch und Leistungsumfang",
        url: "https://www.bundesgesundheitsministerium.de/service/begriffe-von-a-z/h/haeusliche-krankenpflege/",
      },
      {
        label:
          "Statista – GKV-Ausgaben für häusliche Krankenpflege 2004–2023 (Zeitreihe)",
        url: "https://de.statista.com/statistik/daten/studie/155700/umfrage/gkv-ausgaben-fuer-haeusliche-krankenpflege-seit-2004/",
      },
      {
        label:
          "BMG – Finanz-Ergebnisse der GKV für 2024 (Behandlungspflege +12,7 %)",
        url: "https://www.bundesgesundheitsministerium.de/presse/pressemitteilungen/finanz-ergebnisse-von-der-gkv-fuer-2024",
      },
      {
        label:
          "GKV-Spitzenverband – GKV-Kennzahlen Booklet (aktuelle Ausgaben nach Leistungsbereichen)",
        url: "https://www.gkv-spitzenverband.de/gkv_spitzenverband/presse/zahlen_und_grafiken/gkv_kennzahlen/gkv_kennzahlen.jsp",
      },
    ],
  },
  {
    id: "soziotherapie",
    who: "erwerbstaetige",
    when: "krankheit-behandlung",
    title: "Soziotherapie",
    summary:
      "Schwer psychisch kranke GKV-Versicherte haben Anspruch auf Soziotherapie, wenn sie aufgrund ihrer Erkrankung nicht in der Lage sind, ärztlich verordnete Leistungen selbstständig in Anspruch zu nehmen. Eine Begleit- und Koordinierungsperson hilft dabei.",
    resources: [
      {
        label:
          "GKV-Spitzenverband – Soziotherapie: Übersicht und Rahmenempfehlungen",
        url: "https://www.gkv-spitzenverband.de/krankenversicherung/ambulante_leistungen/soziotherapie/soziotherapie.jsp",
      },
      {
        label:
          "sozialversicherung-kompetent.de – § 37a SGB V Soziotherapie: Anspruch und Umfang (max. 120 Stunden/3 Jahre)",
        url: "https://sozialversicherung-kompetent.de/krankenversicherung/leistungsrecht/622-soziotherapie.html",
      },
      {
        label:
          "DGVT-BV – Ambulante Soziotherapie: kaum genutzte Leistung trotz Rechtsanspruch",
        url: "https://www.dgvt-bv.de/aktuell/news-details/ambulante-soziotherapie-bleibt-sie-eine-virtuelle-leistung/",
      },
    ],
  },
  {
    id: "spezialisierte-ambulante-palliativversorgung-sapv",
    who: "erwerbstaetige",
    when: "krankheit-behandlung",
    title: "Spezialisierte ambulante Palliativversorgung (SAPV)",
    summary:
      "Sterbenskranke mit besonders aufwendigem Versorgungsbedarf haben Anspruch auf spezialisierte ambulante Palliativversorgung (SAPV) durch ein multiprofessionelles Team. Ziel ist ein würdevoller Tod im gewohnten Umfeld.",
    resources: [
      {
        label: "BMG – Spezialisierte ambulante Palliativversorgung",
        url: "https://www.bundesgesundheitsministerium.de/palliativversorgung.html",
      },
      {
        label: "GKV-Spitzenverband – SAPV-Übersicht",
        url: "https://www.gkv-spitzenverband.de/krankenversicherung/hospiz_und_palliativversorgung/sapv_start/spez_amb_palliativ/sapv.jsp",
      },
      {
        label:
          "GKV-Spitzenverband – Bericht zur SAPV und Hospizversorgung (2023)",
        url: "https://www.gkv-spitzenverband.de/media/dokumente/krankenversicherung_1/hospiz_palliativversorgung/20231211_Bericht_SAPV_HKP_und_132g.pdf",
      },
      {
        label: "Deutsche Palliativgesellschaft – SAPV: Rechtliche Grundlagen",
        url: "https://www.dgpalliativmedizin.de/allgemein-sp-761/sapv-sp/all-pages",
      },
    ],
  },
  {
    id: "ausserklinische-intensivpflege",
    who: "pflegebeduerftige",
    when: "krankheit-behandlung",
    title: "Außerklinische Intensivpflege",
    summary:
      "Versicherte, die auf außerklinische Intensivpflege angewiesen sind (z.B. beatmungspflichtige Patienten), haben Anspruch auf diese Versorgung in ihrer häuslichen Umgebung oder in geeigneten Einrichtungen.",
    resources: [
      {
        label:
          "GKV-Spitzenverband – Außerklinische Intensivpflege: Überblick, Voraussetzungen, Leistungsorte",
        url: "https://www.gkv-spitzenverband.de/krankenversicherung/ambulante_leistungen/ausserklinische_intensivpflege/ausserklinische_intensivpflege.jsp",
      },
      {
        label:
          "BMG – GKV-IPReG: Intensivpflege- und Rehabilitationsstärkungsgesetz (Oktober 2020)",
        url: "https://www.bundesgesundheitsministerium.de/service/gesetze-und-verordnungen/detail/reha-und-intensivpflege-staerkungsgesetz",
      },
      {
        label:
          "§ 132l SGB V – Rahmenempfehlungen zur außerklinischen Intensivpflege",
        url: "https://www.gesetze-im-internet.de/sgb_5/__132l.html",
      },
      {
        label:
          "GKV-Spitzenverband – Rahmenempfehlungen nach § 132l SGB V (PDF, April 2023)",
        url: "https://www.gkv-spitzenverband.de/media/dokumente/krankenversicherung_1/ambulante_leistungen/ausserklinische_intensivpflege/AKI-Rahmenempfehlung-2023-04-03.pdf",
      },
    ],
  },
  {
    id: "haushaltshilfe-bei-krankenhausaufenthalt",
    who: "familie",
    when: "krankheit-behandlung",
    title: "Haushaltshilfe bei Krankenhausaufenthalt",
    summary:
      "GKV-Versicherte können bei Krankenhausaufenthalt oder ambulanter Behandlung eine Haushaltshilfe erhalten, wenn der Haushalt nicht weitergeführt werden kann und ein Kind unter 12 Jahren betreut werden muss.",
    resources: [
      {
        label:
          "GKV-Spitzenverband – Kennzahlen der gesetzlichen Krankenversicherung",
        url: "https://www.gkv-spitzenverband.de/gkv_spitzenverband/presse/zahlen_und_grafiken/gkv_kennzahlen/gkv_kennzahlen.jsp",
      },
      {
        label: "vdek – Daten zum Gesundheitswesen: Leistungsausgaben der GKV",
        url: "https://www.vdek.com/presse/daten/d_ausgaben.html",
      },
      {
        label: "BMG – Leistungen der gesetzlichen Krankenversicherung",
        url: "https://www.bundesgesundheitsministerium.de/themen/krankenversicherung/leistungen-der-gkv.html",
      },
    ],
  },
  {
    id: "krankenhausbehandlung",
    who: "alle",
    when: "krankheit-behandlung",
    title: "Krankenhausbehandlung",
    summary:
      "GKV-Versicherte haben Anspruch auf vollstationäre, teilstationäre oder ambulante Krankenhausbehandlung, wenn dies medizinisch notwendig ist. Die Krankenkasse übernimmt die Kosten nach Maßgabe der vereinbarten Pflegesätze.",
    resources: [
      {
        label:
          "Destatis – Krankenhäuser in Deutschland (Statistik-Themenportal)",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Gesundheit/Krankenhauser/_inhalt.html",
      },
      {
        label:
          "Destatis – 2,0 % mehr stationäre Krankenhausbehandlungen 2024 (Pressemitteilung)",
        url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2025/11/PD25_398_231.html",
      },
      {
        label:
          "GKV-Spitzenverband – Kennzahlen der gesetzlichen Krankenversicherung",
        url: "https://www.gkv-spitzenverband.de/gkv_spitzenverband/presse/zahlen_und_grafiken/gkv_kennzahlen/gkv_kennzahlen.jsp",
      },
      {
        label:
          "BMG – Vorläufige Finanzergebnisse der GKV 2024 (102,2 Mrd. € für Krankenhäuser)",
        url: "https://www.bundesgesundheitsministerium.de/presse/pressemitteilungen/vorlaeufige-finanzergebnisse-der-gkv-fuer-das-jahr-2024-pm-07-03-2025.html",
      },
      {
        label: "vdek – Daten zum Gesundheitswesen: Krankenhaus",
        url: "https://www.vdek.com/presse/daten/d_ausgaben_krankenhaus.html",
      },
      {
        label:
          "BMG – Krankenhausreform: Das Krankenhausversorgungsverbesserungsgesetz (KHVVG)",
        url: "https://www.bundesgesundheitsministerium.de/themen/krankenversicherung/krankenhausreform",
      },
    ],
  },
  {
    id: "zuschuss-zu-stationaeren-und-ambulanten-hospizleistungen",
    who: "pflegebeduerftige",
    when: "krankheit-behandlung",
    title: "Zuschuss zu stationären und ambulanten Hospizleistungen",
    summary:
      "Sterbenskranke Versicherte haben Anspruch auf einen Zuschuss zu Hospizleistungen in stationären Hospizen sowie auf Unterstützung ambulanter Hospizdienste. Die Krankenkasse beteiligt sich an den Kosten der pflegerischen und medizinischen Versorgung.",
    resources: [
      {
        label: "Sozialversicherung kompetent – Hospizleistungen § 39a SGB V",
        url: "https://sozialversicherung-kompetent.de/krankenversicherung/leistungsrecht/1136-hospizleistungen-stationaer-und-ambulant.html",
      },
      {
        label:
          "GKV-Spitzenverband – Rahmenvereinbarung stationäre Hospizversorgung (18.11.2024)",
        url: "https://www.gkv-spitzenverband.de/media/dokumente/krankenversicherung_1/hospiz_palliativversorgung/2024-11-18_Rahmenvereinbarung_39a_Abs1_Satz_4__SGB_V_stat_Hospizversorgung_Erw.pdf",
      },
      {
        label:
          "Paritätischer – Rahmenvereinbarungen stationäre Hospizversorgung ab 01.01.2025",
        url: "https://www.der-paritaetische.de/alle-meldungen/rahmenvereinbarungen-nach-39a-abs-1-satz-4-sgb-v-fuer-stationaere-hospizversorgung-und-stationaeren-kinder-und-jugendhospizversorgung/",
      },
    ],
  },
  {
    id: "hospiz-und-palliativberatung-durch-die-krankenkasse",
    who: "erwerbstaetige",
    when: "krankheit-behandlung",
    title: "Hospiz- und Palliativberatung durch die Krankenkasse",
    summary:
      "GKV-Versicherte und ihre Angehörigen haben Anspruch auf individuelle Beratung durch ihre Krankenkasse zu Hospiz- und Palliativleistungen, damit die bestmögliche Versorgung am Lebensende sichergestellt wird.",
    resources: [
      {
        label:
          "GKV-Spitzenverband – Hospiz- und Palliativversorgung: Übersicht der GKV-Leistungen",
        url: "https://www.gkv-spitzenverband.de/krankenversicherung/hospiz_und_palliativversorgung/hospiz_und_palliativversorgung.jsp",
      },
      {
        label:
          "sozialversicherung-kompetent.de – § 39b SGB V: Hospiz- und Palliativberatung",
        url: "https://sozialversicherung-kompetent.de/krankenversicherung/leistungsrecht/1154-hospiz-und-palliativberatung.html",
      },
      {
        label:
          "DGP / DHPV – Wegweiser Hospiz- und Palliativversorgung Deutschland",
        url: "https://www.wegweiser-hospiz-palliativmedizin.de/",
      },
    ],
  },
  {
    id: "kurzzeitpflege-ohne-pflegebeduerftigkeit",
    who: "pflegebeduerftige",
    when: "krankheit-behandlung",
    title: "Kurzzeitpflege ohne Pflegebedürftigkeit",
    summary:
      "Nach einer Krankenhausbehandlung oder in ähnlichen Situationen, in denen häusliche Pflege vorübergehend nicht möglich ist, aber (noch) keine Pflegebedürftigkeit besteht, kann die GKV Kurzzeitpflege finanzieren.",
    resources: [
      {
        label:
          "sozialversicherung-kompetent.de – Kurzzeitpflege GKV § 39c (Erklärung & Voraussetzungen)",
        url: "https://sozialversicherung-kompetent.de/krankenversicherung/leistungsrecht/638-kurzzeitpflege.html",
      },
      {
        label: "energie-bkk – Merkblatt Kurzzeitpflege nach § 39c SGB V",
        url: "https://www.energie-bkk.de/leistung/kurzzeitpflege-bei-fehlender-pflegebeduerftigkeit-nach-%C2%A7-39c-sgb-v/",
      },
      {
        label:
          "Bundestag Drucksache 19/6933 – Anfrage mit Nutzungszahlen (2016/2017)",
        url: "https://dserver.bundestag.de/btd/19/069/1906933.pdf",
      },
    ],
  },
  {
    id: "uebergangspflege-im-krankenhaus",
    who: "pflegebeduerftige",
    when: "krankheit-behandlung",
    title: "Übergangspflege im Krankenhaus",
    summary:
      "Wenn nach einer Krankenhausbehandlung die weitere Versorgung zu Hause oder in einer Pflegeeinrichtung nicht sofort sichergestellt werden kann, haben Versicherte Anspruch auf Übergangspflege im Krankenhaus für bis zu zehn Tage.",
    resources: [
      {
        label:
          "GKV-Spitzenverband – Übergangspflege im Krankenhaus (§ 39e SGB V)",
        url: "https://www.gkv-spitzenverband.de/krankenversicherung/ambulant_stationaere_versorgung/kh_ue_pflege/kh_uebergangspflege.jsp",
      },
      {
        label: "DVSG – FAQ zur Übergangspflege im Krankenhaus",
        url: "https://dvsg.org/themen/akutversorgung/faq-uebergangspflege-im-krankenhaus/",
      },
    ],
  },
  {
    id: "medizinische-rehabilitation-gkv",
    who: "alle",
    when: "rehabilitation",
    title: "Medizinische Rehabilitation (GKV)",
    summary:
      "Alle GKV-Versicherten haben Anspruch auf ambulante oder stationäre medizinische Rehabilitation, wenn diese notwendig ist, um eine Erkrankung zu behandeln, die Erwerbsfähigkeit zu erhalten oder einer Pflegebedürftigkeit vorzubeugen. Die Krankenkasse trägt die Kosten.",
    resources: [
      {
        label:
          "BMG – Vorläufige Finanzergebnisse GKV 2024 (Vorsorge & Reha +10,7 %)",
        url: "https://www.bundesgesundheitsministerium.de/presse/pressemitteilungen/vorlaeufige-finanzergebnisse-der-gkv-fuer-das-jahr-2024-pm-07-03-2025.html",
      },
      {
        label:
          "BAR – Statistiken zur medizinischen Rehabilitation (alle Träger)",
        url: "https://www.bar-frankfurt.de/themen/zahlen-daten-fakten/entwurf-zahlen-daten-fakten-neu/berufliche-teilhabe/statistiken-zur-beruflichen-teilhabe.html",
      },
      {
        label: "GKV-Spitzenverband – GKV-Kennzahlen",
        url: "https://www.gkv-spitzenverband.de/gkv_spitzenverband/presse/zahlen_und_grafiken/gkv_kennzahlen/gkv_kennzahlen.jsp",
      },
      {
        label: "vdek – GKV-Ausgaben: Vorsorge & Rehabilitation (Zeitreihe)",
        url: "https://www.vdek.com/presse/daten/d_ausgaben.html",
      },
    ],
  },
  {
    id: "mutter-vater-kind-rehabilitation",
    who: "familie",
    when: "kind-familie",
    title: "Mutter-/Vater-Kind-Rehabilitation",
    summary:
      "Mütter und Väter, deren Gesundheit durch die Belastungen der Kindererziehung beeinträchtigt ist, haben Anspruch auf eine stationäre medizinische Rehabilitation. Die Kinder (bis 12 Jahre) kommen mit; die GKV übernimmt die Kosten für Elternteil und Kinder.",
    resources: [
      {
        label:
          "Müttergenesungswerk – Jahresbericht 2024 (PDF, inkl. Kur-Statistiken)",
        url: "https://www.muettergenesungswerk.de/fileadmin/Downloads/Infomaterial/MGW_Jahresbericht_2024_Web-Version_klein.pdf",
      },
      {
        label:
          "Müttergenesungswerk – Datenreport: Zahlen und Fakten zu Kuren und Bewilligungen",
        url: "https://www.muettergenesungswerk.de/presse/mitteilung/muettergenesungswerk-legt-datenreport-und-jahresbericht-vor",
      },
      {
        label:
          "betanet – Medizinische Rehabilitation für Mütter und Väter: Anspruch, Antrag, Kosten",
        url: "https://www.betanet.de/medizinische-rehabilitation-fuer-muetter-und-vaeter.html",
      },
      {
        label:
          "vdek – Mutter-/Vater-Kind-Maßnahmen (§§ 24, 41 SGB V): Vertragspartner und Regelungen",
        url: "https://www.vdek.com/vertragspartner/vorsorge-rehabilitation/mvk.html",
      },
      {
        label:
          "BMG – Vorläufige Finanzergebnisse der GKV 2024 (Vorsorge & Reha +10,7 %)",
        url: "https://www.bundesgesundheitsministerium.de/presse/pressemitteilungen/vorlaeufige-finanzergebnisse-der-gkv-fuer-das-jahr-2024-pm-07-03-2025.html",
      },
    ],
  },
  {
    id: "belastungserprobung-und-arbeitstherapie",
    who: "erwerbstaetige",
    when: "krankheit-behandlung",
    title: "Belastungserprobung & Arbeitstherapie",
    summary:
      "Im Rahmen der Rehabilitation können GKV-Versicherte eine stufenweise Belastungserprobung durchführen, um die Arbeitsfähigkeit nach längerem Ausfall schrittweise wiederherzustellen.",
    resources: [
      {
        label:
          "Sozialversicherung-kompetent – Belastungserprobung und Arbeitstherapie (§ 42 SGB V)",
        url: "https://sozialversicherung-kompetent.de/krankenversicherung/leistungsrecht/1148-belastungserprobung-und-arbeitstherapie.html",
      },
      {
        label: "Wikipedia – Belastungserprobung",
        url: "https://de.wikipedia.org/wiki/Belastungserprobung",
      },
      {
        label:
          "buzer.de – § 42 SGB V Belastungserprobung und Arbeitstherapie (Gesetzestext mit Versionshistorie)",
        url: "https://www.buzer.de/42_SGB_V.htm",
      },
    ],
  },
  {
    id: "ergaenzende-leistungen-zur-rehabilitation",
    who: "behinderung",
    when: "rehabilitation",
    title: "Ergänzende Leistungen zur Rehabilitation (GKV)",
    summary:
      "Menschen mit Behinderungen haben Anspruch auf zusätzliche klinisch-therapeutische Leistungen der GKV im Rahmen der Rehabilitation – etwa Patientenschulungen –, die über die Standardbehandlung hinausgehen und die Wiedereingliederung in Arbeit und Gesellschaft fördern.",
    resources: [
      {
        label:
          "§ 43 SGB V – Ergänzende Leistungen zur Rehabilitation (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/sgb_5/__43.html",
      },
      {
        label: "Lexikon: Ergänzende Leistungen | REHADAT",
        url: "https://www.rehadat.de/lexikon/Lex-Ergaenzende-Leistungen/",
      },
      {
        label:
          "Rehabilitation – GKV-Spitzenverband (inkl. ergänzende Leistungen)",
        url: "https://www.gkv-spitzenverband.de/krankenversicherung/rehabilitation/reha.jsp",
      },
    ],
  },
  {
    id: "sozialmedizinische-nachsorge-kinder",
    who: "familie",
    when: "krankheit-behandlung",
    title: "Sozialmedizinische Nachsorge (Kinder)",
    summary:
      "Chronisch kranke oder schwerstkranke Kinder und Jugendliche haben nach einem stationären Aufenthalt Anspruch auf sozialmedizinische Nachsorgemaßnahmen durch die GKV, um den Übergang nach Hause zu unterstützen (bis 13 Jahre, in schweren Fällen bis 18 Jahre).",
    resources: [
      {
        label:
          "§ 43 Abs. 2 SGB V – Sozialmedizinische Nachsorgemaßnahmen (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/sgb_5/__43.html",
      },
      {
        label: "Bunter Kreis – Sozialmedizinische Nachsorge",
        url: "https://www.bunter-kreis.de/sozialmedizinische-nachsorge/",
      },
    ],
  },
  {
    id: "nichtaerztliche-sozialpaediatrische-leistungen-kinder",
    who: "familie",
    when: "krankheit-behandlung",
    title: "Nichtärztliche sozialpädiatrische Leistungen (Kinder)",
    summary:
      "Kinder, die in sozialpädiatrischen Zentren behandelt werden, haben Anspruch auf nichtärztliche Leistungen wie psychologische Diagnostik und Therapie, die von der Krankenkasse übernommen werden.",
    resources: [
      {
        label:
          "betanet: Sozialpädiatrische nichtärztliche Leistungen – Überblick",
        url: "https://www.betanet.de/sozialpaediatrische-nichtaerztliche-leistungen.html",
      },
      {
        label:
          "krankenkasseninfo.de: Sozialpädiatrische Behandlung (§43a SGB V)",
        url: "https://www.krankenkasseninfo.de/leistungen/gesetzliche-leistungen/sozialpaediatrische-behandlung-24.html",
      },
      {
        label:
          "§ 119 SGB V – Sozialpädiatrische Zentren (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/sgb_5/__119.html",
      },
    ],
  },
  {
    id: "nichtaerztliche-leistungen-erw-mit-geistiger-behinderung",
    who: "behinderung",
    when: "krankheit-behandlung",
    title: "Nichtärztliche Leistungen (Erw. mit geistiger Behinderung)",
    summary:
      "Erwachsene mit geistiger Behinderung oder schwerer Mehrfachbehinderung haben in medizinischen Behandlungszentren (MZEB) Anspruch auf nichtärztliche Leistungen – psychologische, heilpädagogische, sozialarbeiterische und pflegerische –, die die GKV finanziert.",
    resources: [
      {
        label:
          "MZEB: Medizinisches Zentrum für Erwachsene mit Behinderung (Behindertenbeauftragte NRW)",
        url: "https://www.lbbp.nrw.de/themen/allgemeine-informationen/medizinisches-zentrum-fuer-erwachsene-mit-behinderung",
      },
      {
        label:
          "Medizinisches Zentrum für Erwachsene mit Behinderung – socialnet Lexikon",
        url: "https://www.socialnet.de/lexikon/Medizinisches-Zentrum-fuer-Erwachsene-mit-Behinderung",
      },
      {
        label:
          "MZEB: Gesetzesgrundlage und nichtärztliche Leistungen §43b SGB V (reha-recht.de)",
        url: "https://www.reha-recht.de/fachbeitraege/beitrag/artikel/beitrag-d51-2017",
      },
      {
        label:
          "MZEB: Versorgung Erwachsener mit geistiger Behinderung (familienratgeber.de)",
        url: "https://www.familienratgeber.de/rechte-leistungen/gesundheit-und-reha/medizinisches-zentrum-fuer-erwachsene-mit-mehrfacher-und-geistiger-behinderung",
      },
    ],
  },
  {
    id: "krankengeld-bei-eigener-erkrankung",
    who: "erwerbstaetige",
    when: "krankheit-behandlung",
    title: "Krankengeld bei eigener Erkrankung",
    summary:
      "GKV-Versicherte erhalten Krankengeld, wenn sie wegen einer Krankheit arbeitsunfähig sind und dadurch Einkommensverlust haben. Das Krankengeld beträgt 70 % des Bruttolohns (max. 90 % des Nettolohns) und wird ab der 7. Woche der Erkrankung gezahlt.",
    resources: [
      {
        label:
          "GKV-Spitzenverband – Kennzahlen der gesetzlichen Krankenversicherung",
        url: "https://www.gkv-spitzenverband.de/gkv_spitzenverband/presse/zahlen_und_grafiken/gkv_kennzahlen/gkv_kennzahlen.jsp",
      },
      {
        label: "BMG – Finanz-Ergebnisse der GKV für 2024",
        url: "https://www.bundesgesundheitsministerium.de/presse/pressemitteilungen/finanz-ergebnisse-von-der-gkv-fuer-2024",
      },
      {
        label: "BMG – Kennzahlen und Daten zur Krankenversicherung",
        url: "https://www.bundesgesundheitsministerium.de/themen/krankenversicherung/zahlen-und-fakten-zur-krankenversicherung/kennzahlen-daten-bekanntmachungen",
      },
      {
        label: "BMG – Krankengeld: Leistungen bei Arbeitsunfähigkeit",
        url: "https://www.bundesgesundheitsministerium.de/themen/krankenversicherung/krankengeld",
      },
      {
        label: "BMG – Elektronische Arbeitsunfähigkeitsbescheinigung (eAU)",
        url: "https://www.bundesgesundheitsministerium.de/themen/krankenversicherung/elektronische-arbeitsunfaehigkeitsbescheinigung",
      },
      {
        label: "Entgeltfortzahlungsgesetz (EFZG) – gesetze-im-internet.de",
        url: "https://www.gesetze-im-internet.de/efzg/",
      },
    ],
  },
  {
    id: "krankengeld-bei-organspende",
    who: "erwerbstaetige",
    when: "krankheit-behandlung",
    title: "Krankengeld bei Organspende",
    summary:
      "Wer als lebender Organspender vorübergehend arbeitsunfähig wird, erhält Krankengeld. Auch Spender von Gewebe oder Blut zur Stammzelltrennung sind abgesichert.",
    resources: [
      {
        label:
          "sozialversicherung-kompetent.de – Krankengeld bei Spende § 44a SGB V",
        url: "https://sozialversicherung-kompetent.de/krankenversicherung/leistungsrecht/906-krankengeld-bei-spende.html",
      },
      {
        label:
          "DSO / organspende-info.de – Statistiken zur Organspende in Deutschland",
        url: "https://www.organspende-info.de/zahlen-und-fakten/statistiken/",
      },
      {
        label: "vdek – Daten zur Organspende in Deutschland",
        url: "https://www.vdek.com/presse/daten/Organspende.html",
      },
    ],
  },
  {
    id: "krankengeld-fuer-begleitperson-im-krankenhaus",
    who: "erwerbstaetige",
    when: "lohnausfall-im-job",
    title: "Krankengeld für Begleitperson im Krankenhaus",
    summary:
      "Wenn eine Person stationär behandelt wird und eine nahestehende Begleitperson mitaufgenommen ist, kann diese Krankengeld erhalten, sofern sie dadurch Einkommensverluste erleidet. Gilt seit November 2022 für Patienten jedes Alters.",
    resources: [
      {
        label:
          "Betanet – Begleitperson im Krankenhaus: Anspruch und Krankengeld",
        url: "https://www.betanet.de/begleitperson.html",
      },
      {
        label:
          "Techniker Krankenkasse – Krankengeld für Begleitpersonen (seit 11/2022)",
        url: "https://www.tk.de/firmenkunden/service/fachthemen/versicherung-fachthema/krankengeld-fuer-begleitpersonen-seit-11-2022-2137720",
      },
      {
        label: "Betanet – Kinder im Krankenhaus: Begleitung und Leistungen",
        url: "https://www.betanet.de/kinder-im-krankenhaus.html",
      },
    ],
  },
  {
    id: "kinderkrankengeld",
    who: "familie",
    when: "krankheit-behandlung",
    title: "Kinderkrankengeld",
    summary:
      "Berufstätige GKV-Versicherte erhalten Kinderkrankengeld, wenn ihr Kind unter 12 Jahren erkrankt ist und beaufsichtigt, betreut oder gepflegt werden muss. Pro Elternteil und Kind stehen bis zu 15 Arbeitstage pro Jahr zur Verfügung (bei Alleinerziehenden 30).",
    resources: [
      {
        label: "BMG – FAQ: Kinderkrankentage und Kinderkrankengeld",
        url: "https://www.bundesgesundheitsministerium.de/themen/praevention/kindergesundheit/faq-kinderkrankengeld",
      },
      {
        label:
          "TK – 2023: Weniger Anträge auf Kinderkrankengeld (Inanspruchnahme-Daten)",
        url: "https://www.tk.de/presse/themen/praevention/gesundheitsstudien/2023-weniger-antraege-auf-kinderkrankengeld-2164106",
      },
      {
        label: "BARMER – Anträge auf Kinderkrankengeld häufiger von Frauen",
        url: "https://www.barmer.de/presse/presseinformationen/pressearchiv/barmer-analyse-antraege-auf-kinderkrankengeld-haeufiger-von-frauen-1274528",
      },
      {
        label: "BMG – GKV-Finanzergebnisse (Ausgaben nach Leistungsarten)",
        url: "https://www.bundesgesundheitsministerium.de/themen/krankenversicherung/zahlen-und-fakten-zur-krankenversicherung/finanzergebnisse.html",
      },
    ],
  },
  {
    id: "krankengeld-statt-lohnersatzleistung",
    who: "erwerbstaetige",
    when: "krankheit-behandlung",
    title: "Krankengeld statt Lohnersatzleistung",
    summary:
      "Versicherte, die während des Bezugs von Arbeitslosengeld erkranken und arbeitsunfähig werden, erhalten Krankengeld statt Arbeitslosengeld. Das Krankengeld entspricht dabei der Höhe des Arbeitslosengeldes.",
    resources: [
      {
        label: "§ 47b SGB V – Volltext auf sozialgesetzbuch-sgb.de",
        url: "https://www.sozialgesetzbuch-sgb.de/sgbv/47b.html",
      },
      {
        label: "dejure.org – § 47b SGB V mit Rechtsprechungsübersicht",
        url: "https://dejure.org/gesetze/SGB_V/47b.html",
      },
    ],
  },
  {
    id: "wahltarife-der-krankenkasse",
    who: "erwerbstaetige",
    when: "krankheit-behandlung",
    title: "Wahltarife der Krankenkasse",
    summary:
      "GKV-Versicherte können bei ihrer Krankenkasse jährlich wählbare Tarife (Wahltarife) abschließen, etwa Hausarzttarife, Tarife mit Beitragsrückerstattung oder mit besonderen Leistungen. Die Bindungsfrist beträgt in der Regel drei Jahre.",
    resources: [
      {
        label:
          "Finanztip – Wahltarife der gesetzlichen Krankenversicherung im Überblick",
        url: "https://www.finanztip.de/gkv/wahltarife/",
      },
      {
        label: "Sozialversicherung-kompetent – Wahltarife nach § 53 SGB V",
        url: "https://sozialversicherung-kompetent.de/krankenversicherung/sonstiges/841-wahltarife.html",
      },
    ],
  },
  {
    id: "zahnersatz-festzuschuesse",
    who: "erwerbstaetige",
    when: "krankheit-behandlung",
    title: "Zahnersatz-Festzuschüsse",
    summary:
      "GKV-Versicherte erhalten Festzuschüsse zu Zahnersatz (Kronen, Brücken, Prothesen). Die Höhe richtet sich nach dem Befund; mit einem regelmäßig geführten Bonusheft kann der Zuschuss erhöht werden.",
    resources: [
      {
        label: "G-BA – Festzuschuss-Richtlinie",
        url: "https://www.g-ba.de/richtlinien/27/",
      },
      {
        label: "vdek – GKV-Ausgaben zahnärztliche Behandlung (Zeitreihe)",
        url: "https://www.vdek.com/presse/daten/d_ausgaben_zahnaerztliche_behandlung.html",
      },
      {
        label:
          "Verbraucherzentrale – Zahnersatz: Wie viel übernimmt die gesetzliche Krankenkasse?",
        url: "https://www.verbraucherzentrale.de/wissen/gesundheit-pflege/krankenversicherung/zahnersatz-wie-viel-uebernimmt-die-gesetzliche-krankenkasse-12884",
      },
      {
        label:
          "KZBV – Hinweise und Berechnungsbeispiele zu Festzuschüssen (PDF)",
        url: "https://www.kzbv.de/wp-content/uploads/KZBV_FZ-Kompendium_2025-01-01_2.pdf",
      },
      {
        label:
          "Wikipedia – Zahnärztliches Bonusheft (Regelungen und Geschichte)",
        url: "https://de.wikipedia.org/wiki/Bonusheft",
      },
      {
        label:
          "checkfox.de – Was zahlt die Krankenkasse bei Zahnersatz? (mit Bonusheft-Erklärung)",
        url: "https://checkfox.de/ratgeber/was-zahlt-krankenkasse-bei-zahnersatz",
      },
      {
        label: "KZV Berlin – Bonusheft: Anforderungen und Dokumentation",
        url: "https://neu.kzv-berlin.de/fuer-praxen/abrechnung/bonusheft",
      },
      {
        label:
          "BMG – Zahnärztliche Behandlung (Überblick Festzuschüsse & Härtefall)",
        url: "https://www.bundesgesundheitsministerium.de/zahnaerztliche-behandlung",
      },
      {
        label: "GKV-Spitzenverband – Festzuschuss-Betragsübersicht 2026",
        url: "https://www.gkv-spitzenverband.de/media/dokumente/krankenversicherung_1/zahnaerztliche_versorgung/rili_g_ba/2026-01-01-FZ-Betraege.pdf",
      },
      {
        label: "KZVLB – Einkommensgrenzen Härtefallregelung Zahnersatz 2024",
        url: "https://www.kzvlb.de/fileadmin/user_upload/Seiteninhalte/Service/Downloadcenter/Uebersichten/2024/ZE-Haertefallregelung_2024.pdf",
      },
      {
        label:
          "gegen-hartz.de – Erklärung Härtefall-Antrag Zahnersatz für Betroffene",
        url: "https://www.gegen-hartz.de/news/zahnersatz-wird-teurer-aber-nicht-fuer-alle-das-bedeutet-jetzt-der-haertefall-antrag",
      },
    ],
  },
  {
    id: "fahrkosten-und-krankentransport",
    who: "erwerbstaetige",
    when: "krankheit-behandlung",
    title: "Fahrkosten & Krankentransport",
    summary:
      "Die GKV übernimmt Fahrtkosten bei medizinisch notwendigen Verlegungsfahrten zwischen Krankenhäusern, wenn diese aus medizinischen Gründen erforderlich sind.",
    resources: [
      {
        label:
          "GKV-Spitzenverband – Fahrkosten und Krankentransport: Überblick",
        url: "https://www.gkv-spitzenverband.de/krankenversicherung/ambulante_leistungen/fahrkosten_krankentransport/fahrkosten_krankentransport.jsp",
      },
      {
        label: "G-BA – Krankenbeförderung: Themen und Richtlinien",
        url: "https://www.g-ba.de/themen/veranlasste-leistungen/krankenbefoerderung/",
      },
      {
        label:
          "sozialversicherung-kompetent.de – § 60 SGB V Fahrkosten: Erläuterungen",
        url: "https://sozialversicherung-kompetent.de/krankenversicherung/leistungsrecht/434-fahrkosten.html",
      },
      {
        label: "KBV – Krankentransport: Ausgaben und Fälle (Statistik)",
        url: "https://www.kbv.de/infothek/zahlen-und-fakten/gesundheitsdaten/krankentransport-ausgaben-faelle",
      },
      {
        label: "G-BA – Krankentransport-Richtlinie (KT-RL)",
        url: "https://www.g-ba.de/richtlinien/25/",
      },
    ],
  },
  {
    id: "krankenkassenzuschuss-fuer-rentner",
    who: "senior",
    when: "alter-ruhestand",
    title: "Krankenkassenzuschuss für Rentner",
    summary:
      "Rentner, die freiwillig oder privat krankenversichert sind, erhalten von der Rentenversicherung einen Zuschuss zu ihren Krankenversicherungsbeiträgen. Er beträgt die Hälfte des Mindestbeitrags zur gesetzlichen Krankenversicherung.",
    resources: [
      {
        label: "§ 106 SGB VI – Zuschuss zur Krankenversicherung (dejure.org)",
        url: "https://dejure.org/gesetze/SGB_VI/106.html",
      },
      {
        label:
          "sozialversicherung-kompetent.de – Beitragszuschuss zur Krankenversicherung für Rentner",
        url: "https://sozialversicherung-kompetent.de/rentenversicherung/leistungsrecht/1196-zuschuss-zur-krankenversicherung.html",
      },
      {
        label:
          "Bundesportal – Zuschuss zur privaten oder freiwilligen Krankenversicherung beantragen",
        url: "https://verwaltung.bund.de/leistungsverzeichnis/de/leistung/99114060017000",
      },
      {
        label: "DRV – Kommentar zu § 106 SGB VI (rvRecht)",
        url: "https://rvrecht.deutsche-rentenversicherung.de/SharedDocs/rvRecht/01_GRA_SGB/06_SGB_VI/pp_0101_125/gra_sgb006_p_0106.html",
      },
    ],
  },
  {
    id: "rentenabfindung-bei-wiederheirat",
    who: "alle",
    when: "tod-hinterbliebene",
    title: "Rentenabfindung bei Wiederheirat",
    summary:
      "Witwen oder Witwer, die erneut heiraten, verlieren ihren Anspruch auf Witwenrente. Als Ausgleich erhalten sie eine einmalige Rentenabfindung in Höhe des 24-fachen Monatsbetrags der bisherigen Rente.",
    resources: [
      {
        label: "DRV – Arbeitskommentar § 107 SGB VI (Rentenabfindung)",
        url: "https://rvrecht.deutsche-rentenversicherung.de/SharedDocs/rvRecht/01_GRA_SGB/06_SGB_VI/pp_0101_125/gra_sgb006_p_0107.html",
      },
      {
        label:
          "sozialversicherung-kompetent.de – Witwenrente und Rentenabfindung § 107 SGB VI",
        url: "https://sozialversicherung-kompetent.de/rentenversicherung/leistungsrecht/306-witwenrente-witwerrente-rentenabfindung.html",
      },
      {
        label: "rentenbescheid24.de – Rentenabfindung bei erster Wiederheirat",
        url: "https://rentenbescheid24.de/renten-abc/die-hinterbliebenenrente/rentenabfindung-bei-erster-wiederheirat/",
      },
    ],
  },
  {
    id: "beratung-zur-grundsicherung-durch-die-rentenversicherung",
    who: "behinderung",
    when: "alter-ruhestand",
    title: "Beratung zur Grundsicherung durch die Rentenversicherung",
    summary:
      "Die gesetzliche Rentenversicherung ist verpflichtet, Versicherte und Rentner über mögliche Ansprüche auf Grundsicherung im Alter und bei Erwerbsminderung zu informieren und bei der Antragstellung zu unterstützen.",
    resources: [
      {
        label:
          "§ 109a SGB VI – Hilfen in Angelegenheiten der Grundsicherung (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/sgb_6/__109a.html",
      },
      {
        label:
          "§ 109a SGB VI – GRA Kommentar (Deutsche Rentenversicherung Rechtsliteratur)",
        url: "https://rvrecht.deutsche-rentenversicherung.de/SharedDocs/rvRecht/01_GRA_SGB/06_SGB_VI/pp_0101_125/gra_sgb006_p_0109a.html",
      },
      {
        label: "FAQs zur Grundsicherung im Alter – Deutsche Rentenversicherung",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/Allgemeine-Informationen/Wissenswertes-zur-Rente/FAQs/Grundsicherung/Grundsicherung_Liste.html",
      },
    ],
  },
  {
    id: "medizinische-rehabilitation-rentenversicherung",
    who: "alle",
    when: "rehabilitation",
    title: "Medizinische Rehabilitation (Rentenversicherung)",
    summary:
      "Die gesetzliche Rentenversicherung erbringt medizinische Rehabilitationsleistungen, wenn dadurch die Erwerbsfähigkeit erhalten oder wiederhergestellt werden kann. Dazu gehören stationäre und ambulante Reha-Maßnahmen in anerkannten Einrichtungen.",
    resources: [
      {
        label:
          "Deutsche Rentenversicherung – Medizinische Rehabilitation: Überblick",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Reha/Medizinische-Reha/medizinische-reha_node.html",
      },
      {
        label:
          "Deutsche Rentenversicherung – Voraussetzungen & Ausschlussgründe",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Reha/Warum-Reha/voraussetzung_ausschlussgruende.html",
      },
      {
        label:
          "Deutsche Rentenversicherung – Reha-Bericht 2025 (Statistik & Daten)",
        url: "https://www.deutsche-rentenversicherung.de/SharedDocs/Downloads/DE/Statistiken-und-Berichte/Berichte/rehabericht_2025.html",
      },
    ],
  },
  {
    id: "kinderrehabilitation-rentenversicherung",
    who: "familie",
    when: "rehabilitation",
    title: "Kinderrehabilitation (Rentenversicherung)",
    summary:
      "Kinder von Versicherten der gesetzlichen Rentenversicherung können Rehabilitation und Nachsorgeleistungen erhalten, wenn ihre Gesundheit dies erfordert. Damit soll einer dauerhaften Beeinträchtigung der Gesundheit vorgebeugt werden.",
    resources: [
      {
        label:
          "DRV – GRA § 15a SGB VI: Kinderrehabilitation (Voraussetzungen, Nachsorgeleistungen)",
        url: "https://rvrecht.deutsche-rentenversicherung.de/SharedDocs/rvRecht/01_GRA_SGB/06_SGB_VI/pp_0001_25/gra_sgb006_p_0015a.html",
      },
      {
        label:
          "DRV Statistik – Blickpunkt Reha 2024: 32.222 Kinderreha-Maßnahmen abgeschlossen",
        url: "https://statistik-rente.de/drv/extern/blickpunkt/fragments/blickpunkt16_reha_2024.html",
      },
      {
        label: "DRV – Reha-Bericht 2024 (PDF, enthält Kinderreha-Kapitel)",
        url: "https://www.deutsche-rentenversicherung.de/SharedDocs/Downloads/DE/Statistiken-und-Berichte/Berichte/rehabericht_2024.pdf?__blob=publicationFile&v=1",
      },
    ],
  },
  {
    id: "teilhabe-am-arbeitsleben-rentenversicherung",
    who: "behinderung",
    when: "rehabilitation",
    title: "Teilhabe am Arbeitsleben (Rentenversicherung)",
    summary:
      "Die gesetzliche Rentenversicherung fördert die berufliche Eingliederung von Versicherten, die wegen Krankheit oder Behinderung ihren bisherigen Beruf nicht mehr ausüben können. Leistungen umfassen Berufsförderung im Eingangsverfahren und im Berufsbildungsbereich von Werkstätten.",
    resources: [
      {
        label: "Berufliche Rehabilitation – Deutsche Rentenversicherung",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Reha/Berufliche-Reha/berufliche-reha.html",
      },
      {
        label: "Leistungen der Rentenversicherung zur Rehabilitation – BMAS",
        url: "https://www.bmas.de/DE/Soziales/Rente-und-Altersvorsorge/Leistungen-Gesetzliche-Rentenversicherung/Leistungen-zur-Teilhabe/leistungen-der-rentenversicherung-zur-rehabilitation.html",
      },
      {
        label:
          "§ 9 SGB VI: Aufgabe der Leistungen zur Teilhabe – DRV Rechtsdatenbank",
        url: "https://rvrecht.deutsche-rentenversicherung.de/SharedDocs/rvRecht/01_GRA_SGB/06_SGB_VI/pp_0001_25/gra_sgb006_p_0009.html",
      },
    ],
  },
  {
    id: "uebergangsgeld-rentenversicherung",
    who: "alle",
    when: "alter-ruhestand",
    title: "Übergangsgeld (Rentenversicherung)",
    summary:
      "Während einer von der Rentenversicherung genehmigten Reha-Maßnahme erhalten Versicherte Übergangsgeld als Einkommensersatz. Es beträgt in der Regel 68–75 % des letzten Nettoentgelts.",
    resources: [
      {
        label: "Deutsche Rentenversicherung – Übergangsgeld während Reha",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Reha/Warum-Reha/uebergangsgeld.html",
      },
      {
        label: "DRV – Reha-Bericht 2024 (Statistik Reha & Übergangsgeld)",
        url: "https://www.deutsche-rentenversicherung.de/SharedDocs/Downloads/DE/Statistiken-und-Berichte/Berichte/rehabericht_2024.html",
      },
      {
        label: "DRV – Statistiken und Berichte (Übersicht)",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Experten/Zahlen-und-Fakten/Statistiken-und-Berichte/statistiken-und-berichte_node.html",
      },
    ],
  },
  {
    id: "altersrente-alle-varianten",
    who: "senior",
    when: "alter-ruhestand",
    title: "Altersrente",
    summary:
      "Die Altersrente der gesetzlichen Rentenversicherung in all ihren Varianten: Regelaltersrente sowie der vorzeitige Eintritt für langjährig und besonders langjährig Versicherte, schwerbehinderte Menschen und Bergleute — dazu Voll- und Teilrente. Die Höhe folgt der Rentenformel aus Entgeltpunkten und aktuellem Rentenwert.",
    resources: [
      {
        label:
          "DRV – Altersrente für langjährig und besonders langjährig Versicherte",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/Allgemeine-Informationen/Rentenarten-und-Leistungen/Altersrente-fuer-langjaehrig-Versicherte/altersrente-fuer-langjaehrig-versicherte_node.html",
      },
      {
        label: "DRV – Altersrente für schwerbehinderte Menschen",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/Allgemeine-Informationen/Rentenarten-und-Leistungen/Altersrente-fuer-schwerbehinderte-Menschen/altersrente-fuer-schwerbehinderte-menschen_node.html",
      },
      {
        label:
          "DRV – Flexirente: Teilrente, Hinzuverdienst und Rentenzuschläge",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/Flexirente/flexirente.html",
      },
      {
        label: "DRV – Online-Rentenantrag und Serviceportal",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Online-Dienste/online-dienste_node.html",
      },
      {
        label: "DRV – Altersrenten im Zeitablauf 2024 (Statistik)",
        url: "https://www.deutsche-rentenversicherung.de/SharedDocs/Downloads/DE/Statistiken-und-Berichte/statistikpublikationen/altersrenten_im_zeitablauf.html",
      },
      {
        label: "Bundesregierung – Rente mit 63: die Fakten",
        url: "https://www.bundesregierung.de/breg-de/aktuelles/rente-mit-63-2195784",
      },
      {
        label:
          "DRV – Grundrentenzuschlag (§ 307e SGB VI): Aufschlag für langjährig Versicherte mit niedrigen Entgeltpunkten",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/Grundrente/grundrente.html",
      },
    ],
  },
  {
    id: "knappschaftsausgleichsleistung",
    who: "senior",
    when: "alter-ruhestand",
    title: "Knappschaftsausgleichsleistung",
    summary:
      "Ältere Bergleute, die nach dem Ausscheiden aus dem Bergbau keine zumutbare andere Arbeit finden und noch nicht rentenberechtigt sind, können Knappschaftsausgleichsleistung erhalten. Sie überbrückt die Zeit bis zur Altersrente.",
    resources: [
      {
        label:
          "DRV – Arbeitskommentar § 239 SGB VI (Knappschaftsausgleichsleistung)",
        url: "https://rvrecht.deutsche-rentenversicherung.de/SharedDocs/rvRecht/01_GRA_SGB/06_SGB_VI/pp_0226_250/gra_sgb006_p_0239.html",
      },
      {
        label:
          "sozialversicherung-kompetent.de – Knappschaftsausgleichsleistung (KAL) § 239 SGB VI",
        url: "https://sozialversicherung-kompetent.de/rentenversicherung/leistungsrecht/1572-knappschaftsausgleichsleistung-kal.html",
      },
      {
        label:
          "rentenbescheid24.de – Die Knappschaftsausgleichsleistung im Rentenrecht",
        url: "https://rentenbescheid24.de/renten-abc/altersrente-im-ueberblick/die-knappschaftsausgleichsleistung/",
      },
      {
        label:
          "Gabler Wirtschaftslexikon – Knappschaftsausgleichsleistung (Definition)",
        url: "https://wirtschaftslexikon.gabler.de/definition/knappschaftsausgleichsleistung-41905",
      },
    ],
  },
  {
    id: "erwerbsminderungsrente",
    who: "behinderung",
    when: "alter-ruhestand",
    title: "Erwerbsminderungsrente",
    summary:
      "Versicherte, die aus gesundheitlichen Gründen dauerhaft weniger als sechs (volle EM-Rente) oder weniger als drei Stunden täglich (teilweise EM-Rente) arbeiten können, erhalten eine Erwerbsminderungsrente. Voraussetzung sind fünf Jahre Mindestversicherungszeit.",
    resources: [
      {
        label: "§ 59 SGB VI – Zurechnungszeit",
        url: "https://www.gesetze-im-internet.de/sgb_6/__59.html",
      },
      {
        label: "§ 102 SGB VI – Befristung der EM-Rente",
        url: "https://www.gesetze-im-internet.de/sgb_6/__102.html",
      },
      {
        label:
          "§ 145 SGB III – Nahtlosigkeit (Übergangslücke Krankengeld → ALG I)",
        url: "https://www.gesetze-im-internet.de/sgb_3/__145.html",
      },
      {
        label: "DRV – Erwerbsminderungsrente: Übersicht und Voraussetzungen",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/Erwerbsminderungsrente/erwerbsminderungsrente_node.html",
      },
      {
        label: "DRV – Erwerbsminderungsrenten im Zeitablauf (Statistik)",
        url: "https://www.deutsche-rentenversicherung.de/SharedDocs/Downloads/DE/Statistiken-und-Berichte/statistikpublikationen/erwerbsminderungsrenten_zeitablauf.html",
      },
      {
        label: "DRV – Rentenversicherung in Zahlen 2025 (PDF)",
        url: "https://www.deutsche-rentenversicherung.de/SharedDocs/Downloads/DE/Statistiken-und-Berichte/statistikpublikationen/rv_in_zahlen.pdf",
      },
      {
        label: "DRV – DRV-Leistungen 2024 auf einen Blick (Pressemeldung)",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Ueber-uns-und-Presse/Presse/Meldungen/2025/250211-drv-leistungen.html",
      },
      {
        label:
          "DRV Rechtssystem – GRA § 302a SGB VI: Übergangsrecht Erwerbsminderung",
        url: "https://rvrecht.deutsche-rentenversicherung.de/SharedDocs/rvRecht/01_GRA_SGB/06_SGB_VI/pp_0301_321/gra_sgb006_p_0302a.html",
      },
      {
        label:
          "DRV – Rente wegen Erwerbsminderung: Voraussetzungen und Berechnung",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/Allgemeine-Informationen/Rentenarten-und-Leistungen/Erwerbsminderungsrente/erwerbsminderungsrente_node.html",
      },
      {
        label:
          "DRV Rechtssystem – GRA § 302b SGB VI: Übergangsrecht Berufsunfähigkeit",
        url: "https://rvrecht.deutsche-rentenversicherung.de/SharedDocs/rvRecht/01_GRA_SGB/06_SGB_VI/pp_0301_321/gra_sgb006_p_0302b.html",
      },
    ],
  },
  {
    id: "bergmannsrente",
    who: "senior",
    when: "alter-ruhestand",
    title: "Bergmannsrente",
    summary:
      "Bergleute, die infolge von Krankheit oder Behinderung nicht mehr in der Lage sind, ihre bisherige bergmännische Arbeit zu verrichten, können Bergmannsrente erhalten. Sie wird auch gezahlt, wenn eine zumutbare andere Tätigkeit nicht ausgeübt werden kann.",
    resources: [
      {
        label:
          "DRV Knappschaft-Bahn-See – Rente für Bergleute (Erwerbsminderung)",
        url: "https://www.deutsche-rentenversicherung.de/KnappschaftBahnSee/DE/KBSexklusiv/bergleute_erwerbsminderungsrente/Erwerbsminderungsrente_bei_Bergleuten_2.html",
      },
      {
        label: "Wikipedia – Rente für Bergleute",
        url: "https://de.wikipedia.org/wiki/Rente_f%C3%BCr_Bergleute",
      },
      {
        label:
          "sozialversicherung-kompetent.de – Rente für Bergleute: Voraussetzungen und Berechnung",
        url: "https://sozialversicherung-kompetent.de/rentenversicherung/leistungsrecht/1556-rente-fuer-bergleute-erwerbsminderungsrente.html",
      },
      {
        label:
          "DRV Knappschaft-Bahn-See – Jahresreport (aktuelle Zahlen der knappschaftlichen RV)",
        url: "https://www.deutsche-rentenversicherung.de/KnappschaftBahnSee/DE/Ueber-uns-und-karriere/Ueber-uns/Publikationen/Jahresreport/Jahresreport.html",
      },
      {
        label:
          "rentenbescheid24.de – Die Bergmannsrente wegen Erwerbsminderung",
        url: "https://rentenbescheid24.de/renten-abc/erwerbsminderungsrente-was-und-wie/die-bergmannsrente/",
      },
      {
        label: "§ 242 SGB VI – Volltext auf sozialgesetzbuch-sgb.de",
        url: "https://www.sozialgesetzbuch-sgb.de/sgbvi/242.html",
      },
      {
        label:
          "rentenbescheid24.de – Die Bergmannsrenten im System der gesetzlichen Renten",
        url: "https://rentenbescheid24.de/renten-abc/begriffe-zur-gesetzlichen-rente/die-bergmannsrenten/",
      },
      {
        label: "Haufe – Rente für Bergleute: Überblick und Voraussetzungen",
        url: "https://www.haufe.de/sozialwesen/sgb-office-professional/rente-fuer-bergleute_idesk_PI434_HI523923.html",
      },
    ],
  },
  {
    id: "mindestentgeltpunkte-bei-geringem-einkommen",
    who: "senior",
    when: "alter-ruhestand",
    title: "Mindestentgeltpunkte bei geringem Einkommen",
    summary:
      "Versicherte mit langjährig sehr geringem Einkommen erhalten eine Aufstockung ihrer Entgeltpunkte, um eine Mindestrente zu gewährleisten. Diese Regelung soll verhindern, dass Versicherte trotz langer Erwerbsbiografie nur eine sehr geringe Rente erhalten.",
    resources: [
      {
        label: "DRV – Rechtssystem § 262 SGB VI: Mindestentgeltpunkte",
        url: "https://rvrecht.deutsche-rentenversicherung.de/SharedDocs/rvRecht/01_GRA_SGB/06_SGB_VI/pp_0251_275/gra_sgb006_p_0262.html",
      },
      {
        label: "DRV – Grundrentenzuschlag: Alle Fakten im Überblick",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/Grundrente/grundrente_fakten.html",
      },
      {
        label: "BMAS – Grundrente: Fragen und Antworten",
        url: "https://www.bmas.de/DE/Soziales/Rente-und-Altersvorsorge/Leistungen-Gesetzliche-Rentenversicherung/Grundrente/Fragen-und-Antworten-Grundrente/fragen-und-antworten-grundrente-art.html",
      },
    ],
  },
  {
    id: "ergaenzende-leistungen-zum-uebergangsgeld",
    who: "alle",
    when: "alter-ruhestand",
    title: "Ergänzende Leistungen zum Übergangsgeld",
    summary:
      "Neben dem Übergangsgeld können Versicherte ergänzende Leistungen erhalten, etwa Haushaltshilfe, Kinderbetreuungskosten oder Reisekosten, wenn diese im Zusammenhang mit einer Reha-Maßnahme notwendig sind.",
    resources: [
      {
        label: "REHADAT Lexikon: Ergänzende Leistungen (inkl. Übergangsgeld)",
        url: "https://www.rehadat.de/lexikon/Lex-Ergaenzende-Leistungen/",
      },
      {
        label: "Deutsche Rentenversicherung: Haushaltshilfe bei Reha",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Reha/Warum-Reha/haushaltshilfe.html",
      },
      {
        label:
          "RV-Recht: § 74 SGB IX – Haushalts-/Betriebshilfe und Kinderbetreuungskosten",
        url: "https://rvrecht.deutsche-rentenversicherung.de/SharedDocs/rvRecht/01_GRA_SGB/09_SGB_IX/pp_0051_75/gra_sgb009_p_0074.html",
      },
      {
        label: "§ 73 SGB IX – Reisekosten (Gesetze im Internet)",
        url: "https://www.gesetze-im-internet.de/sgb_9_2018/__73.html",
      },
    ],
  },
  {
    id: "monatlicher-zuschuss-fuer-familienangehoerige",
    who: "senior",
    when: "alter-ruhestand",
    title: "Monatlicher Zuschuss für Familienangehörige",
    summary:
      "In bestimmten Fallkonstellationen können Familienangehörige von Versicherten eine monatliche finanzielle Leistung aus der Rentenversicherung erhalten. Die Höhe bemisst sich am 2,5-Fachen des Mindestbeitrags.",
    resources: [
      {
        label: "§ 295 SGB VI – Volltext auf sozialgesetzbuch-sgb.de",
        url: "https://www.sozialgesetzbuch-sgb.de/sgbvi/295.html",
      },
      {
        label: "§ 295 SGB VI – Volltext auf dejure.org (mit Verweisen)",
        url: "https://dejure.org/gesetze/SGB_VI/295.html",
      },
    ],
  },
  {
    id: "witwen-witwerrente",
    who: "behinderung",
    when: "tod-hinterbliebene",
    title: "Witwen-/Witwerrente",
    summary:
      "Für Witwen und Witwer, deren Ehepartner vor dem 1. Januar 1986 gestorben sind, gilt das alte Witwerrentenrecht. Witwerrenten waren damals nur unter eingeschränkten Voraussetzungen möglich; das Übergangsrecht sichert bestehende Ansprüche.",
    resources: [
      {
        label: "§ 97 SGB VI – Einkommensanrechnung auf Hinterbliebenenrenten",
        url: "https://www.gesetze-im-internet.de/sgb_6/__97.html",
      },
      {
        label: "DRV – Renten an Hinterbliebene: Überblick",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/Allgemeine-Informationen/Rentenarten-und-Leistungen/Renten-an-Hinterbliebene/renten-an-hinterbliebene_node.html",
      },
      {
        label: "DRV – FAQs zur Hinterbliebenenrente",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/Allgemeine-Informationen/Wissenswertes-zur-Rente/FAQs/Rente/Hinterbliebenenrente/Hinterbliebenenrente.html",
      },
      {
        label:
          "DRV Meldung – Hinzuverdienstgrenze für Hinterbliebene ab Juli 2025 (1.076,86 €/Monat)",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Ueber-uns-und-Presse/Presse/Meldungen/2025/250702-hinzuverdienstgrenze-hinterbliebene.html",
      },
      {
        label:
          "DRV Meldung – DRV-Leistungen auf einen Blick 2024 (über 21 Mio. Rentner, ~5,2 Mio. Hinterbliebenenrenten)",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Ueber-uns-und-Presse/Presse/Meldungen/2025/250211-drv-leistungen.html",
      },
      {
        label: "§ 107 SGB VI – Rentenabfindung bei Wiederheirat",
        url: "https://www.gesetze-im-internet.de/sgb_6/__107.html",
      },
      {
        label:
          "§ 59 SGB VI – Zurechnungszeit (fiktive Entgeltpunkte bis zum Rentenalter)",
        url: "https://www.gesetze-im-internet.de/sgb_6/__59.html",
      },
      {
        label:
          "DRV Rechtssystem – GRA § 303 SGB VI: Witwerrente (Todesfälle vor 1986)",
        url: "https://rvrecht.deutsche-rentenversicherung.de/SharedDocs/rvRecht/01_GRA_SGB/06_SGB_VI/pp_0301_321/gra_sgb006_p_0303.html",
      },
      {
        label: "DRV – Kommentar Hinterbliebenenrente SGB VI (PDF)",
        url: "https://www.deutsche-rentenversicherung.de/SharedDocs/Downloads/DE/Fachliteratur_Kommentare_Gesetzestexte/Kommentare/hinterbliebene.pdf",
      },
      {
        label:
          "DRV Rechtssystem – GRA § 303a SGB VI: Große Witwenrente wegen BU/EU",
        url: "https://rvrecht.deutsche-rentenversicherung.de/SharedDocs/rvRecht/01_GRA_SGB/06_SGB_VI/pp_0301_321/gra_sgb006_p_0303a.html",
      },
      {
        label:
          "DRV – Hinterbliebenenrente: Witwen- und Witwerrente (Überblick)",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/Familie-und-Kinder/Hinterbliebenenrente/hinterbliebenenrente_node.html",
      },
    ],
  },
  {
    id: "waisenrente",
    who: "familie",
    when: "tod-hinterbliebene",
    title: "Waisenrente",
    summary:
      "Halbwaisen und Vollwaisen erhalten nach dem Tod eines oder beider Elternteile eine Waisenrente aus der gesetzlichen Rentenversicherung. Die Rente wird bis zum 18. Lebensjahr, in Ausnahmefällen bis 27 Jahre, gezahlt.",
    resources: [
      {
        label: "Deutsche Rentenversicherung – Waisenrente: Überblick",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/Familie-und-Kinder/Waisenrente/waisenrente_node.html",
      },
      {
        label: "Deutsche Rentenversicherung – Renten für Hinterbliebene",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/Allgemeine-Informationen/Rentenarten-und-Leistungen/Renten-an-Hinterbliebene/renten_an_hinterbliebene.html",
      },
      {
        label: "Deutsche Rentenversicherung – Wann die Waisenrente entfällt",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Ueber-uns-und-Presse/Presse/Meldungen/2023/230502-wegfall-waisenrente.html",
      },
      {
        label:
          "Deutsche Rentenversicherung – Auch Volljährige haben Anspruch auf Waisenrente",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Ueber-uns-und-Presse/Presse/Meldungen/2022/220523_volljaehrige_anspruch_waisenrente.html",
      },
      {
        label:
          "Deutsche Rentenversicherung – Rentenatlas 2025 (Statistiken Hinterbliebenenrenten)",
        url: "https://www.deutsche-rentenversicherung.de/SharedDocs/Downloads/DE/Statistiken-und-Berichte/Rentenatlas/2025/rentenatlas-2025-download.html",
      },
      {
        label: "DRV – Kommentar Hinterbliebenenrente SGB VI (PDF)",
        url: "https://www.deutsche-rentenversicherung.de/SharedDocs/Downloads/DE/Fachliteratur_Kommentare_Gesetzestexte/Kommentare/hinterbliebene.pdf",
      },
    ],
  },
  {
    id: "sonstige-leistungen-zur-teilhabe-rentenversicherung",
    who: "senior",
    when: "alter-ruhestand",
    title: "Sonstige Leistungen zur Teilhabe (Rentenversicherung)",
    summary:
      "Die Rentenversicherung kann weitere Leistungen erbringen, die der Eingliederung in das Erwerbsleben dienen, soweit sie nicht von einem anderen Träger zu leisten sind. Dies dient als Auffangregelung für nicht anderweitig abgedeckte Teilhabeleistungen.",
    resources: [
      {
        label: "§ 31 SGB VI – Sonstige Leistungen (Gesetzestext)",
        url: "https://www.gesetze-im-internet.de/sgb_6/__31.html",
      },
      {
        label:
          "Deutsche Rentenversicherung: § 31 SGB VI Sonstige Leistungen (Kommentar)",
        url: "https://rvrecht.deutsche-rentenversicherung.de/SharedDocs/rvRecht/01_GRA_SGB/06_SGB_VI/pp_0026_50/gra_sgb006_p_0031.html",
      },
      {
        label:
          "BMAS: Leistungen zur Teilhabe in der gesetzlichen Rentenversicherung",
        url: "https://www.bmas.de/DE/Soziales/Rente-und-Altersvorsorge/Leistungen-Gesetzliche-Rentenversicherung/Leistungen-zur-Teilhabe/leistungen-zur-teilhabe.html",
      },
      {
        label: "REHADAT Lexikon: Ergänzende und sonstige Leistungen",
        url: "https://www.rehadat.de/lexikon/Lex-Ergaenzende-Leistungen/",
      },
    ],
  },
  {
    id: "rentenzuschlag-fuer-rentenbeginne-1992-1993",
    who: "senior",
    when: "alter-ruhestand",
    title: "Rentenzuschlag für Rentenbeginne 1992/1993",
    summary:
      "Versicherte, deren Rente in den Jahren 1992 oder 1993 begann und die nach Anwendung der damaligen Rentenanpassungsvorschriften nur eine sehr geringe Rente erhielten, haben Anspruch auf einen Rentenzuschlag.",
    resources: [
      {
        label:
          "DRV Rechtssystem – GRA § 319a SGB VI: Rentenzuschlag (Beitrittsgebiet 1992/1993)",
        url: "https://rvrecht.deutsche-rentenversicherung.de/SharedDocs/rvRecht/01_GRA_SGB/06_SGB_VI/pp_0301_321/gra_sgb006_p_0319a.html",
      },
      {
        label: "DRV – Rentenlexikon: Rentenzuschlag",
        url: "https://www.deutsche-rentenversicherung.de/SharedDocs/Glossareintraege/DE/R/rentenzuschlag.html",
      },
    ],
  },
  {
    id: "erziehungsrente",
    who: "alle",
    when: "tod-hinterbliebene",
    title: "Erziehungsrente",
    summary:
      "Geschiedene oder verwitwete Versicherte, die ein Kind erziehen und selbst nicht wieder geheiratet haben, können unter bestimmten Voraussetzungen Erziehungsrente erhalten. Sie überbrückt die Zeit bis zum eigenen Rentenanspruch.",
    resources: [
      {
        label: "DRV – Kommentar § 47 SGB VI: Erziehungsrente",
        url: "https://rvrecht.deutsche-rentenversicherung.de/SharedDocs/rvRecht/01_GRA_SGB/06_SGB_VI/pp_0026_50/gra_sgb006_p_0047.html",
      },
      {
        label: "DRV – Renten an Hinterbliebene: Überblick",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/Allgemeine-Informationen/Rentenarten-und-Leistungen/Renten-an-Hinterbliebene/renten-an-hinterbliebene_node.html",
      },
      {
        label:
          "sozialversicherung-kompetent.de – Erziehungsrente: Voraussetzungen und Berechnung",
        url: "https://sozialversicherung-kompetent.de/rentenversicherung/leistungsrecht/307-erziehungsrente.html",
      },
    ],
  },
  {
    id: "rente-bei-verschollenheit",
    who: "alle",
    when: "tod-hinterbliebene",
    title: "Rente bei Verschollenheit",
    summary:
      "Wenn ein Versicherter verschollen ist und sein Tod wahrscheinlich ist, können Ehegatten oder Kinder Hinterbliebenenrente beantragen. Die Rentenzahlung beginnt, sobald die Verschollenheit rechtlich festgestellt ist.",
    resources: [
      {
        label: "DRV – Renten an Hinterbliebene: Überblick",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/Allgemeine-Informationen/Rentenarten-und-Leistungen/Renten-an-Hinterbliebene/renten-an-hinterbliebene_node.html",
      },
    ],
  },
  {
    id: "kindererziehungszeiten-in-der-rente",
    who: "senior",
    when: "alter-ruhestand",
    title: "Kindererziehungszeiten in der Rente",
    summary:
      "Zeiten der Kindererziehung in den ersten drei Lebensjahren eines Kindes werden als Beitragszeiten in der gesetzlichen Rentenversicherung angerechnet. Damit werden Eltern, die Kinder erzogen haben, bei der Rente bessergestellt.",
    resources: [
      {
        label:
          "Deutsche Rentenversicherung – Kindererziehung: Ihr Plus für die Rente",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/Familie-und-Kinder/Kindererziehung/kindererziehung_node.html",
      },
      {
        label: "Deutsche Rentenversicherung – FAQ Mütterrente III (ab 2027)",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/Allgemeine-Informationen/Wissenswertes-zur-Rente/FAQs/Rente/Muetterrente_KEZ/KEZ_Muetterrente-III.html",
      },
      {
        label:
          "Deutsche Rentenversicherung – Mütterrente: Verbesserte Anerkennung von Erziehungszeiten (2025)",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Ueber-uns-und-Presse/Presse/Meldungen/2025/250317-muetterrente-wir-klaeren-auf.html",
      },
      {
        label: "BMAS – FAQ Mütterrente",
        url: "https://www.bmas.de/DE/Soziales/Rente-und-Altersvorsorge/Gesetzliche-Rentenversicherung/Fragen-und-Antworten-Muetterrente/faq-muetterrente.html",
      },
      {
        label:
          "Deutsche Rentenversicherung – Bundesmittel für nicht beitragsgedeckte Leistungen (inkl. Kindererziehungszeiten)",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Ueber-uns-und-Presse/Presse/Meldungen/2024/240719-bundesmittel-bundeszuschuss.html",
      },
    ],
  },
  {
    id: "rentensplitting-unter-ehegatten",
    who: "alle",
    when: "tod-hinterbliebene",
    title: "Rentensplitting unter Ehegatten",
    summary:
      "Verheiratete oder eingetragene Lebenspartner können ihre während der gemeinsamen Zeit erworbenen Rentenanwartschaften gleichmäßig aufteilen (Rentensplitting). Dies kann vorteilhafter sein als Witwenrente, wenn ein Ehepartner deutlich mehr verdient hat.",
    resources: [
      {
        label: "DRV – Rentensplitting: Übersicht und Voraussetzungen",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/Familie-und-Kinder/Rentensplitting/rentensplitting_node.html",
      },
      {
        label:
          "DRV – Broschüre: Rentensplitting – partnerschaftlich teilen (PDF)",
        url: "https://www.deutsche-rentenversicherung.de/SharedDocs/Downloads/DE/Broschueren/national/rentenspltting_partnerschaftlich_teilen.pdf?__blob=publicationFile&v=8",
      },
      {
        label:
          "RVaktuell – 20 Jahre Rentensplitting: ein unterschätztes Instrument (2022)",
        url: "https://rvaktuell.de/01-2022/20-jahre-rentensplitting-in-der-gesetzlichen-rentenversicherung-ein-unterschaetztes-instrument-fuer-mehr-rentengleichheit-zwischen-frauen-und-maennern/",
      },
      {
        label: "DRV – Statistiken und Berichte (Rentenversicherung)",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Experten/Zahlen-und-Fakten/Statistiken-und-Berichte/statistiken-und-berichte_node.html",
      },
    ],
  },
  {
    id: "rentenzuschlaege-fuer-beitraege-nach-rentenbeginn",
    who: "senior",
    when: "alter-ruhestand",
    title: "Rentenzuschläge für Beiträge nach Rentenbeginn",
    summary:
      "Wer nach Rentenbeginn weiter in die gesetzliche Rentenversicherung einzahlt, erwirbt Zuschläge an Entgeltpunkten, die die Rente erhöhen. Dies betrifft insbesondere Rentner, die noch erwerbstätig sind.",
    resources: [
      {
        label:
          "§ 75 SGB VI: Entgeltpunkte für Zeiten nach Rentenbeginn – rvRecht DRV",
        url: "https://rvrecht.deutsche-rentenversicherung.de/SharedDocs/rvRecht/01_GRA_SGB/06_SGB_VI/pp_0051_75/gra_sgb006_p_0075.html",
      },
      {
        label:
          "Entgeltpunkte für Zeiten nach Rentenbeginn – sozialversicherung-kompetent.de",
        url: "https://sozialversicherung-kompetent.de/rentenversicherung/leistungsrecht/797-rentenberechnung-entgeltpunkte-zeiten-nach-rentenbeginn.html",
      },
      {
        label:
          "§ 76a SGB VI: Zuschläge an Entgeltpunkten – gesetze-im-internet.de",
        url: "https://www.gesetze-im-internet.de/sgb_6/__76a.html",
      },
    ],
  },
  {
    id: "rentenzuschlag-fuer-besondere-auslandsverwendung",
    who: "senior",
    when: "alter-ruhestand",
    title: "Rentenzuschlag für besondere Auslandsverwendung",
    summary:
      "Versicherte, die im Rahmen eines offiziellen Einsatzes besonders riskant im Ausland tätig waren (z.B. UN-Missionen, Auslandseinsätze der Bundeswehr), erhalten Zuschläge an Entgeltpunkten in der Rentenversicherung.",
    resources: [
      {
        label:
          "DRV-Rechtsdatenbank: § 76e SGB VI – Zuschläge an Entgeltpunkten für besondere Auslandsverwendung",
        url: "https://rvrecht.deutsche-rentenversicherung.de/SharedDocs/rvRecht/01_GRA_SGB/06_SGB_VI/pp_0076_100/gra_sgb006_p_0076e.html",
      },
      {
        label: "§ 76e SGB VI – Gesetzestext (sozialgesetzbuch-sgb.de)",
        url: "https://www.sozialgesetzbuch-sgb.de/sgbvi/76e.html",
      },
      {
        label:
          "Beitragszahlung für Zeiten einer besonderen Auslandsverwendung (rentenbescheid24.de)",
        url: "https://rentenbescheid24.de/renten-abc/beitraege-zur-rente/beitragszahlung-fuer-zeiten-einer-besonderen-auslandsverwendung/",
      },
    ],
  },
  {
    id: "rentenzuschlag-fuer-nachversicherte-zeitsoldaten",
    who: "beamte",
    when: "alter-ruhestand",
    title: "Rentenzuschlag für nachversicherte Zeitsoldaten",
    summary:
      "Soldaten auf Zeit, die nach ihrem Dienst in der gesetzlichen Rentenversicherung nachversichert werden, erhalten Zuschläge an Entgeltpunkten für ihre Dienstzeit. Dies sichert ihre Rentenansprüche trotz fehlender direkter Beitragszeiten.",
    resources: [
      {
        label:
          "§ 76f SGB VI: Zuschläge an Entgeltpunkten für nachversicherte Soldaten auf Zeit – DRV Rechtsliteratur",
        url: "https://rvrecht.deutsche-rentenversicherung.de/SharedDocs/rvRecht/01_GRA_SGB/06_SGB_VI/pp_0076_100/gra_sgb006_p_0076f.html",
      },
      {
        label: "Rentennachversicherung leicht erklärt – dienstzeitende.de",
        url: "https://www.dienstzeitende.de/dze-abc/rentennachversicherung-191/",
      },
      {
        label: "Zusatzversorgung für Soldaten auf Zeit – RV Bundeswehr",
        url: "https://www.rv-bundeswehr.de/Soldaten+auf+Zeit",
      },
    ],
  },
  {
    id: "zuschlag-bei-waisenrenten",
    who: "senior",
    when: "tod-hinterbliebene",
    title: "Zuschlag bei Waisenrenten",
    summary:
      "Waisenrenten werden durch einen Zuschlag erhöht, wenn der verstorbene Elternteil selbst keine Rente bezogen hat. Der Zuschlag wird auf Basis der nicht in Anspruch genommenen Altersrente des Verstorbenen berechnet.",
    resources: [
      {
        label: "§ 78 SGB VI – Zuschlag bei Waisenrenten (dejure.org)",
        url: "https://dejure.org/gesetze/SGB_VI/78.html",
      },
      {
        label: "DRV – Kommentar zu § 78 SGB VI (rvRecht)",
        url: "https://rvrecht.deutsche-rentenversicherung.de/SharedDocs/rvRecht/01_GRA_SGB/06_SGB_VI/pp_0076_100/gra_sgb006_p_0078.html",
      },
      {
        label:
          "sozialversicherung-kompetent.de – Zuschlag bei Waisenrenten § 78 SGB VI",
        url: "https://sozialversicherung-kompetent.de/rentenversicherung/leistungsrecht/1023-rentenberechnung-zuschlag-waisenrenten.html",
      },
    ],
  },
  {
    id: "zuschlag-bei-witwenrente-witwerrente",
    who: "alle",
    when: "tod-hinterbliebene",
    title: "Zuschlag bei Witwenrente / Witwerrente",
    summary:
      "Witwenrenten und Witwerrenten können durch einen Zuschlag erhöht werden, wenn der Verstorbene keine eigene Rente bezogen hat. Die Höhe des Zuschlags richtet sich nach den nicht in Anspruch genommenen Entgeltpunkten.",
    resources: [
      {
        label:
          "DRV Rechtliche Arbeitsanweisung zu § 78a SGB VI – Zuschlag bei Witwenrenten",
        url: "https://rvrecht.deutsche-rentenversicherung.de/SharedDocs/rvRecht/01_GRA_SGB/06_SGB_VI/pp_0076_100/gra_sgb006_p_0078a.html",
      },
      {
        label:
          "§ 78a SGB VI – Zuschlag bei Witwenrenten und Witwerrenten (Gesetzestext)",
        url: "https://www.sozialgesetzbuch-sgb.de/sgbvi/78a.html",
      },
      {
        label:
          "Zuschlag von Entgeltpunkten zur Witwenrente – Erklärung und Berechnung",
        url: "https://rentenbescheid24.de/zuschlag-von-entgeltpunkten-zur-witwenrente/",
      },
    ],
  },
  {
    id: "zusatzentgeltpunkte-fuer-arbeit-untertage",
    who: "senior",
    when: "alter-ruhestand",
    title: "Zusatzentgeltpunkte für Arbeit untertage",
    summary:
      "Bergleute erhalten für ständige Tätigkeiten untertage zusätzliche Entgeltpunkte in der Rentenversicherung. Diese Sonderregelung berücksichtigt die besonderen gesundheitlichen Belastungen des Bergbaus.",
    resources: [
      {
        label:
          "§ 82 SGB VI – Rentenartfaktor und Zusatzentgeltpunkte für Arbeiten unter Tage",
        url: "https://www.gesetze-im-internet.de/sgb_6/__82.html",
      },
      {
        label:
          "Altersrente für langjährig unter Tage beschäftigte Bergleute – Deutsche Rentenversicherung",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/Allgemeine-Informationen/Rentenarten-und-Leistungen/Altersrente-fuer-Bergleute/altersrente-fuer-bergleute_node.html",
      },
      {
        label:
          "Bergleute und ihre Rente – Broschüre Deutsche Rentenversicherung (PDF)",
        url: "https://www.deutsche-rentenversicherung.de/SharedDocs/Downloads/DE/Broschueren/national/bergleute_und_ihre_rente.pdf",
      },
    ],
  },
  {
    id: "heilbehandlung-nach-arbeitsunfall-uv",
    who: "erwerbstaetige",
    when: "unfall",
    title: "Heilbehandlung nach Arbeitsunfall (UV)",
    summary:
      "Nach einem Arbeitsunfall oder einer Berufskrankheit haben Versicherte Anspruch auf umfassende Heilbehandlung durch die gesetzliche Unfallversicherung. Ziel ist die bestmögliche Wiederherstellung der Gesundheit und Arbeitsfähigkeit.",
    resources: [
      {
        label:
          "DGUV – Jahresbilanz 2024: 5,9 Mrd. € für Heilbehandlung und Rehabilitation",
        url: "https://www.dguv.de/de/mediencenter/pm/bilanz-2024.jsp",
      },
      {
        label: "DGUV Statistik – Arbeitsunfallgeschehen 2024 (PDF)",
        url: "https://publikationen.dguv.de/widgets/pdf/download/article/5157",
      },
      {
        label: "DGUV – Umfang und Arten der Heilbehandlungsleistungen",
        url: "https://www.dguv.de/de/reha_leistung/index.jsp",
      },
    ],
  },
  {
    id: "aerztliche-und-zahnaerztliche-behandlung-uv",
    who: "erwerbstaetige",
    when: "unfall",
    title: "Ärztliche und zahnärztliche Behandlung (UV)",
    summary:
      "Versicherte der gesetzlichen Unfallversicherung haben nach einem Versicherungsfall Anspruch auf alle zweckmäßigen und erforderlichen ärztlichen und zahnärztlichen Behandlungen. Die Unfallversicherung übernimmt die Kosten vollständig.",
    resources: [
      {
        label: "BMAS: FAQ zur gesetzlichen Unfallversicherung – Heilbehandlung",
        url: "https://www.bmas.de/DE/Soziales/Gesetzliche-Unfallversicherung/Fragen-und-Antworten/faq-gesetzliche-unfallversicherung.html",
      },
      {
        label: "DGUV: FAQ Heilbehandlung und Gesundheitsversorgung",
        url: "https://www.dguv.de/de/reha_leistung/med-versorgung/faq_heilbehandlung/index.jsp",
      },
      {
        label: "DGUV: FAQ Versicherungsschutz und Leistungen",
        url: "https://www.dguv.de/de/versicherung/versicherte_personen/faq_leistungen/index.jsp",
      },
    ],
  },
  {
    id: "arznei-und-verbandmittel-uv",
    who: "erwerbstaetige",
    when: "unfall",
    title: "Arznei- und Verbandmittel (UV)",
    summary:
      "Die gesetzliche Unfallversicherung übernimmt die Kosten für Arznei- und Verbandmittel, die nach einem Arbeitsunfall oder einer Berufskrankheit notwendig sind. Es gilt das Wirtschaftlichkeitsgebot.",
    resources: [
      {
        label:
          "BMAS: FAQ zur gesetzlichen Unfallversicherung – Leistungen inkl. Arznei- und Verbandmittel",
        url: "https://www.bmas.de/DE/Soziales/Gesetzliche-Unfallversicherung/Fragen-und-Antworten/faq-gesetzliche-unfallversicherung.html",
      },
      {
        label:
          "DGUV: FAQ Heilbehandlung – Kostenübernahme durch Unfallversicherungsträger",
        url: "https://www.dguv.de/de/reha_leistung/med-versorgung/faq_heilbehandlung/index.jsp",
      },
      {
        label:
          "DGUV: Rehabilitation und Leistungen – Übersicht medizinische Versorgung",
        url: "https://www.dguv.de/de/reha_leistung/index.jsp",
      },
    ],
  },
  {
    id: "haeusliche-krankenpflege-uv",
    who: "erwerbstaetige",
    when: "unfall",
    title: "Häusliche Krankenpflege (UV)",
    summary:
      "Nach einem Versicherungsfall können Versicherte häusliche Krankenpflege erhalten, wenn diese neben der ärztlichen Behandlung notwendig ist. Die Unfallversicherung trägt die Kosten für die Pflege im häuslichen Umfeld.",
    resources: [
      {
        label:
          "Häusliche Krankenpflege § 32 SGB VII – sozialversicherung-kompetent.de",
        url: "https://sozialversicherung-kompetent.de/unfallversicherung-leistungsrecht/945-haeusliche-krankenpflege.html",
      },
      {
        label: "§ 32 SGB VII Häusliche Krankenpflege – Gesetzestext (buzer.de)",
        url: "https://www.buzer.de/32_SGB_VII.htm",
      },
      {
        label: "DGUV: Pflege – Leistungen der gesetzlichen Unfallversicherung",
        url: "https://www.dguv.de/de/reha_leistung/pflege/index.jsp",
      },
    ],
  },
  {
    id: "stationaere-behandlung-und-rehabilitation-uv",
    who: "erwerbstaetige",
    when: "unfall",
    title: "Stationäre Behandlung und Rehabilitation (UV)",
    summary:
      "Versicherte der gesetzlichen Unfallversicherung haben nach einem Versicherungsfall Anspruch auf Krankenhausbehandlung und stationäre Rehabilitation. Die Unfallversicherung übernimmt alle Kosten einschließlich Unterkunft und Verpflegung.",
    resources: [
      {
        label:
          "DGUV: Medizinische Versorgung – stationäre Behandlung und Rehabilitation",
        url: "https://www.dguv.de/de/reha_leistung/med-versorgung/index.jsp",
      },
      {
        label:
          "BG Kliniken: Berufsgenossenschaftliche Stationäre Weiterbehandlung (BGSW)",
        url: "https://www.bg-kliniken.de/leistungen/detail/berufsgenossenschaftliche-stationaere-weiterbehandlung/",
      },
      {
        label:
          "§ 34 SGB VII – Durchführung der Heilbehandlung (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/sgb_7/__34.html",
      },
    ],
  },
  {
    id: "teilhabe-am-arbeitsleben-uv",
    who: "erwerbstaetige",
    when: "unfall",
    title: "Teilhabe am Arbeitsleben (UV)",
    summary:
      "Die gesetzliche Unfallversicherung fördert die berufliche Wiedereingliederung nach einem Versicherungsfall, z.B. durch Umschulung, Qualifizierung oder Unterstützung in Werkstätten für Menschen mit Behinderungen.",
    resources: [
      {
        label: "DGUV: Leistungen zur beruflichen und sozialen Teilhabe",
        url: "https://www.dguv.de/de/reha_leistung/teilhabe/index.jsp",
      },
      {
        label:
          "BMAS: Überblick zur gesetzlichen Unfallversicherung (inkl. Teilhabe am Arbeitsleben)",
        url: "https://www.bmas.de/DE/Soziales/Gesetzliche-Unfallversicherung/Unfallversicherung-im-Ueberblick/unfallversicherung-im-ueberblick.html",
      },
      {
        label: "DGUV: Rehabilitation und Leistungen – Überblick",
        url: "https://www.dguv.de/de/reha_leistung/index.jsp",
      },
    ],
  },
  {
    id: "soziale-teilhabe-und-ergaenzende-leistungen-uv",
    who: "erwerbstaetige",
    when: "unfall",
    title: "Soziale Teilhabe und ergänzende Leistungen (UV)",
    summary:
      "Neben der beruflichen Rehabilitation unterstützt die gesetzliche Unfallversicherung auch die soziale Teilhabe, etwa durch ergänzende Leistungen wie Kraftfahrzeughilfe oder sonstige Hilfsmittel, die die gesellschaftliche Teilhabe fördern.",
    resources: [
      {
        label: "DGUV: Berufliche und soziale Teilhabe (Unfallversicherung)",
        url: "https://www.dguv.de/de/reha_leistung/teilhabe/index.jsp",
      },
      {
        label:
          "DGUV: Richtlinien der Unfallversicherungsträger (inkl. Kraftfahrzeughilfe)",
        url: "https://www.dguv.de/de/reha_leistung/richtlinien-uvt/index.jsp",
      },
      {
        label: "§ 40 SGB VII – Kraftfahrzeughilfe (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/sgb_7/__40.html",
      },
      {
        label: "DGUV: Rehabilitation und Leistungen – Übersicht",
        url: "https://www.dguv.de/de/reha_leistung/index.jsp",
      },
    ],
  },
  {
    id: "kraftfahrzeughilfe-uv",
    who: "erwerbstaetige",
    when: "unfall",
    title: "Kraftfahrzeughilfe (UV)",
    summary:
      "Versicherte, die infolge eines Versicherungsfalls auf ein Kraftfahrzeug angewiesen sind, können Hilfe bei der Beschaffung eines Fahrzeugs sowie Zuschüsse für behinderungsbedingte Zusatzausstattungen erhalten.",
    resources: [
      {
        label:
          "DGUV: Richtlinien der UV-Träger – Kfz-Hilfe (inkl. PDF-Richtlinien)",
        url: "https://www.dguv.de/de/reha_leistung/richtlinien-uvt/index.jsp",
      },
      {
        label: "REHADAT-Lexikon: Kraftfahrzeughilfe",
        url: "https://www.rehadat.de/lexikon/Lex-Kraftfahrzeughilfe/",
      },
      {
        label: "KfzHV – Kraftfahrzeughilfe-Verordnung (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/kfzhv/BJNR022510987.html",
      },
    ],
  },
  {
    id: "wohnungshilfe-uv",
    who: "behinderung",
    when: "wohnen",
    title: "Wohnungshilfe (UV)",
    summary:
      "Die gesetzliche Unfallversicherung kann Hilfe bei der behindertengerechten Anpassung von Wohnraum leisten sowie Umzugskosten übernehmen, wenn der bisherige Wohnraum wegen der Unfallfolgen nicht mehr geeignet ist.",
    resources: [
      {
        label: "DGUV: Richtlinien der UV-Träger – Wohnungshilfe (§ 41 SGB VII)",
        url: "https://www.dguv.de/de/reha_leistung/richtlinien-uvt/index.jsp",
      },
      {
        label: "DGUV Gemeinsame Richtlinien über Wohnungshilfe (PDF)",
        url: "https://www.dguv.de/medien/inhalt/reha_leistung/richtlinien_uvt/wohn.pdf",
      },
      {
        label: "betanet: Wohnungshilfe bei Behinderungen – Unfallversicherung",
        url: "https://www.betanet.de/wohnungshilfe.html",
      },
      {
        label:
          "Hessische Fachstelle für Wohnberatung: Gesetzliche Unfallversicherung",
        url: "https://wohnen-im-alter.hessen.de/wohnberatung/finanzierung/gesetzliche-unfallversicherung/",
      },
    ],
  },
  {
    id: "reisekostenerstattung-fuer-unfallversicherte",
    who: "erwerbstaetige",
    when: "unfall",
    title: "Reisekostenerstattung für Unfallversicherte",
    summary:
      "Die gesetzliche Unfallversicherung erstattet Reisekosten, die im Zusammenhang mit medizinischer Rehabilitation, Teilhabe am Arbeitsleben oder anderen Leistungen entstehen.",
    resources: [
      {
        label:
          "DGUV: Richtlinien der UV-Träger – Reisekosten und weitere Leistungen",
        url: "https://www.dguv.de/de/reha_leistung/richtlinien-uvt/index.jsp",
      },
      {
        label:
          "BGHW: Reisekosten – Erstattung bei Arbeitsunfall und Berufskrankheit",
        url: "https://www.bghw.de/versicherung-leistung/unsere-leistungen-fuer-sie/geldleistungen-und-entschaedigungen/reisekosten",
      },
      {
        label:
          "betanet: Reisekosten bei Reha – Unfallversicherung (§ 43 SGB VII)",
        url: "https://www.betanet.de/reisekosten.html",
      },
    ],
  },
  {
    id: "pflegegeld-nach-arbeitsunfall-uv",
    who: "pflegebeduerftige",
    when: "unfall",
    title: "Pflegegeld nach Arbeitsunfall (UV)",
    summary:
      "Versicherte, die infolge eines Versicherungsfalls dauerhaft pflegebedürftig werden, haben Anspruch auf Pflegegeld oder die Bereitstellung einer Pflegekraft durch die gesetzliche Unfallversicherung.",
    resources: [
      {
        label: "DGUV – Statistik Arbeitsunfallgeschehen 2024 (PDF)",
        url: "https://publikationen.dguv.de/widgets/pdf/download/article/5157",
      },
      {
        label: "DGUV – Zahlen und Fakten zur gesetzlichen Unfallversicherung",
        url: "https://www.dguv.de/de/zahlen-fakten/index.jsp",
      },
      {
        label: "betanet – Pflegegeld der Unfallversicherung: Höhe und Anspruch",
        url: "https://www.betanet.de/pflegegeld-unfallversicherung.html",
      },
    ],
  },
  {
    id: "verletztengeld",
    who: "erwerbstaetige",
    when: "unfall",
    title: "Verletztengeld",
    summary:
      "Versicherte, die infolge eines Arbeitsunfalls oder einer Berufskrankheit arbeitsunfähig werden, erhalten Verletztengeld als Einkommensersatz. Es beträgt 80 % des Bruttoarbeitsentgelts und wird von der Unfallversicherung gezahlt.",
    resources: [
      {
        label: "DGUV – Verletztengeld: Voraussetzungen und Höhe",
        url: "https://www.dguv.de/de/reha_leistung/geldleistungen/verletztengeld/index.jsp",
      },
      {
        label:
          "DGUV – Jahresbilanz 2024: 6,4 Mrd. € für finanzielle Entschädigungen",
        url: "https://www.dguv.de/de/mediencenter/pm/bilanz-2024.jsp",
      },
      {
        label: "BG BAU – Verletztengeld und Übergangsgeld im Detail",
        url: "https://www.bgbau.de/themen/versicherungsschutz-und-leistungen/verletztengeld-und-uebergangsgeld",
      },
      {
        label: "sozialversicherung-kompetent.de – § 45 SGB VII: Verletztengeld",
        url: "https://sozialversicherung-kompetent.de/unfallversicherung-leistungsrecht/506-verletztengeld.html",
      },
    ],
  },
  {
    id: "verletztengeld-bei-wiedererkrankung",
    who: "erwerbstaetige",
    when: "unfall",
    title: "Verletztengeld bei Wiedererkrankung",
    summary:
      "Kommt es nach einem Versicherungsfall erneut zu einer Arbeitsunfähigkeit wegen derselben Unfallfolge, wird Verletztengeld auch für diese Wiedererkrankungsphase gezahlt, sofern die Voraussetzungen erfüllt sind.",
    resources: [
      {
        label: "DGUV – Verletztengeld: Voraussetzungen und Höhe",
        url: "https://www.dguv.de/de/reha_leistung/geldleistungen/verletztengeld/index.jsp",
      },
      {
        label: "DGUV – Geldleistungen der Unfallversicherung im Überblick",
        url: "https://www.dguv.de/de/reha_leistung/geldleistungen/index.jsp",
      },
    ],
  },
  {
    id: "uebergangsgeld-uv",
    who: "erwerbstaetige",
    when: "unfall",
    title: "Übergangsgeld (UV)",
    summary:
      "Während einer beruflichen Rehabilitationsmaßnahme nach einem Versicherungsfall zahlt die gesetzliche Unfallversicherung Übergangsgeld als Einkommensersatz. Es überbrückt die Zeit, in der kein Arbeitslohn bezogen wird.",
    resources: [
      {
        label: "DGUV – Übergangsgeld: Voraussetzungen und Berechnung",
        url: "https://www.dguv.de/de/reha_leistung/geldleistungen/uebergangsgeld/index.jsp",
      },
      {
        label: "DGUV – Geldleistungen der Unfallversicherung im Überblick",
        url: "https://www.dguv.de/de/reha_leistung/geldleistungen/index.jsp",
      },
    ],
  },
  {
    id: "betriebs-und-haushaltshilfe-uv",
    who: "erwerbstaetige",
    when: "unfall",
    title: "Betriebs- und Haushaltshilfe (UV)",
    summary:
      "Landwirtschaftliche Unternehmer und ihre Familienangehörigen können nach einem Versicherungsfall Betriebshilfe oder Haushaltshilfe erhalten, wenn der Betrieb oder Haushalt wegen der Unfallfolgen nicht weitergeführt werden kann.",
    resources: [
      {
        label: "SVLFG: Betriebs- und Haushaltshilfe (offizielle Trägerseite)",
        url: "https://www.svlfg.de/betriebshilfe-haushaltshilfe",
      },
      {
        label: "§ 54 SGB VII – Betriebs- und Haushaltshilfe (Gesetzestext)",
        url: "https://www.gesetze-im-internet.de/sgb_7/__54.html",
      },
      {
        label:
          "BayernPortal: Betriebs- und Haushaltshilfe bei der landwirtschaftlichen Unfallversicherung",
        url: "https://www.bayernportal.de/dokumente/leistung/067312562448",
      },
    ],
  },
  {
    id: "rentenerhoehung-bei-arbeitslosigkeit-uv",
    who: "erwerbstaetige",
    when: "unfall",
    title: "Rentenerhöhung bei Arbeitslosigkeit (UV)",
    summary:
      "Versicherte, die nach einem Arbeitsunfall arbeitslos werden und eine Unfallrente beziehen, können unter bestimmten Voraussetzungen eine Erhöhung ihrer Rente erhalten, um den Einkommensverlust durch Arbeitslosigkeit abzufedern.",
    resources: [
      {
        label:
          "§ 58 SGB VII – Erhöhung der Rente bei Arbeitslosigkeit (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/sgb_7/__58.html",
      },
      {
        label:
          "Verletztenrente und Rentenerhöhung bei Arbeitslosigkeit – sozialversicherung-kompetent.de",
        url: "https://sozialversicherung-kompetent.de/unfallversicherung-leistungsrecht/496-verletztenrente.html",
      },
      {
        label:
          "§ 58 SGB VII – Erhöhung der Rente bei Arbeitslosigkeit (dejure.org, mit Rechtsprechung)",
        url: "https://dejure.org/gesetze/SGB_VII/58.html",
      },
    ],
  },
  {
    id: "vorlaeufige-unfallrente",
    who: "erwerbstaetige",
    when: "unfall",
    title: "Vorläufige Unfallrente",
    summary:
      "Nach einem Versicherungsfall kann die gesetzliche Unfallversicherung eine vorläufige Rente zahlen, solange der Grad der Minderung der Erwerbsfähigkeit noch nicht endgültig festgestellt ist. Nach drei Jahren erfolgt die endgültige Festsetzung.",
    resources: [
      {
        label: "DGUV – Verletztenrente: Höhe und Berechnung (MdE)",
        url: "https://www.dguv.de/de/reha_leistung/geldleistungen/rente/index.jsp",
      },
      {
        label: "DGUV – Minderung der Erwerbsfähigkeit (MdE)",
        url: "https://www.dguv.de/de/reha_leistung/geldleistungen/rente/mde/index.jsp",
      },
      {
        label:
          "DGUV – Jahresbilanz 2024: 12.821 neue Verletztenrenten nach Arbeits- und Wegeunfällen",
        url: "https://www.dguv.de/de/mediencenter/pm/bilanz-2024.jsp",
      },
    ],
  },
  {
    id: "leistungen-bei-tod-uv",
    who: "erwerbstaetige",
    when: "unfall",
    title: "Leistungen bei Tod (UV)",
    summary:
      "Stirbt ein Versicherter infolge eines Arbeitsunfalls oder einer Berufskrankheit, haben Hinterbliebene Anspruch auf Sterbegeld, Überführungskosten sowie Hinterbliebenenrenten.",
    resources: [
      {
        label: "DGUV – Leistungen an Hinterbliebene: Überblick",
        url: "https://www.dguv.de/de/reha_leistung/hinterbliebene/index.jsp",
      },
      {
        label: "sozialversicherung-kompetent.de – Renten wegen Todes (UV)",
        url: "https://sozialversicherung-kompetent.de/unfallversicherung-leistungsrecht/1021-renten-wegen-todes.html",
      },
    ],
  },
  {
    id: "sterbegeld-und-ueberfuehrungskosten-uv",
    who: "erwerbstaetige",
    when: "unfall",
    title: "Sterbegeld und Überführungskosten (UV)",
    summary:
      "Nach dem Tod eines Versicherten infolge eines Versicherungsfalls werden Sterbegeld sowie die Kosten für die Überführung des Verstorbenen von der gesetzlichen Unfallversicherung übernommen.",
    resources: [
      {
        label:
          "DGUV: Leistungen an Hinterbliebene (Sterbegeld und Überführungskosten)",
        url: "https://www.dguv.de/de/reha_leistung/hinterbliebene/index.jsp",
      },
      {
        label: "BMAS: Was leistet die gesetzliche Unfallversicherung? (FAQ)",
        url: "https://www.bmas.de/DE/Soziales/Gesetzliche-Unfallversicherung/Fragen-und-Antworten/faq-was-leistet-die-unfallversicherung-art.html",
      },
      {
        label:
          "sozialversicherung-kompetent.de: Sterbegeld und Überführungskosten (§ 64 SGB VII)",
        url: "https://sozialversicherung-kompetent.de/unfallversicherung-leistungsrecht/498-sterbegeld-und-ueberfuehrungskosten.html",
      },
    ],
  },
  {
    id: "witwen-witwerrente-uv",
    who: "erwerbstaetige",
    when: "unfall",
    title: "Witwen-/Witwerrente (UV)",
    summary:
      "Nach dem Tod eines Versicherten infolge eines Versicherungsfalls erhalten Witwen und Witwer eine Hinterbliebenenrente aus der gesetzlichen Unfallversicherung. Die Rentenhöhe richtet sich nach dem Jahresarbeitsverdienst des Verstorbenen.",
    resources: [
      {
        label: "DGUV – Witwen- und Witwerrente (Hinterbliebenenleistungen UV)",
        url: "https://www.dguv.de/de/reha_leistung/hinterbliebene/witwenrente/index.jsp",
      },
      {
        label: "DGUV – Übersicht Leistungen an Hinterbliebene",
        url: "https://www.dguv.de/de/reha_leistung/hinterbliebene/index.jsp",
      },
      {
        label:
          "sozialversicherung-kompetent.de – Witwenrente / Witwerrente § 65 SGB VII",
        url: "https://sozialversicherung-kompetent.de/unfallversicherung-leistungsrecht/502-witwenrente-witwerrente.html",
      },
    ],
  },
  {
    id: "witwen-witwerrente-fuer-fruehere-ehegatten-uv",
    who: "erwerbstaetige",
    when: "unfall",
    title: "Witwen-/Witwerrente für frühere Ehegatten (UV)",
    summary:
      "Frühere Ehegatten von Versicherten können nach deren Tod infolge eines Versicherungsfalls ebenfalls eine Rente erhalten, wenn der Verstorbene ihnen gegenüber unterhaltspflichtig war.",
    resources: [
      {
        label:
          "§ 66 SGB VII – Witwen-/Witwerrente an frühere Ehegatten (Gesetze im Internet)",
        url: "https://www.gesetze-im-internet.de/sgb_7/__66.html",
      },
      {
        label: "DGUV: Renten an Witwen und Witwer (Unfallversicherung)",
        url: "https://www.dguv.de/de/reha_leistung/hinterbliebene/witwenrente/index.jsp",
      },
      {
        label:
          "BayernPortal: Witwen-/Witwerrente UV – Beantragung für frühere Ehegatten",
        url: "https://www.bayernportal.de/dokumente/leistung/8075567087214",
      },
      {
        label: "DGUV: Leistungen an Hinterbliebene (Unfallversicherung)",
        url: "https://www.dguv.de/de/reha_leistung/hinterbliebene/index.jsp",
      },
    ],
  },
  {
    id: "witwen-witwer-und-waisenbeihilfe-uv",
    who: "erwerbstaetige",
    when: "unfall",
    title: "Witwen-, Witwer- und Waisenbeihilfe (UV)",
    summary:
      "Wenn kein Anspruch auf laufende Witwen-, Witwer- oder Waisenrente besteht, können Hinterbliebene eine einmalige Beihilfe in Höhe von 40 % des Jahresarbeitsverdienstes des Verstorbenen erhalten.",
    resources: [
      {
        label:
          "BG BAU: Beihilfen für Hinterbliebene (einmalige Beihilfe, 40 % JAV)",
        url: "https://www.bgbau.de/themen/versicherungsschutz-und-leistungen/leistungen-fuer-hinterbliebene/beihilfen",
      },
      {
        label:
          "BGHW: Leistungen für Hinterbliebene inkl. Hinterbliebenenbeihilfen",
        url: "https://www.bghw.de/versicherung-leistung/leistungen-fuer-hinterbliebene",
      },
      {
        label: "§ 71 SGB VII – Witwen-, Witwer- und Waisenbeihilfe (buzer.de)",
        url: "https://www.buzer.de/71_SGB_VII.htm",
      },
    ],
  },
  {
    id: "abfindung-der-unfallrente",
    who: "erwerbstaetige",
    when: "unfall",
    title: "Abfindung der Unfallrente",
    summary:
      "Unter bestimmten Voraussetzungen kann eine laufende Unfallrente durch eine einmalige Gesamtvergütung (Kapitalabfindung) abgelöst werden. Dies ist möglich, wenn die Minderung der Erwerbsfähigkeit gering ist und eine Abfindung sinnvoll erscheint.",
    resources: [
      {
        label: "DGUV – Rentenabfindungen: Voraussetzungen und Verfahren",
        url: "https://www.dguv.de/de/reha_leistung/geldleistungen/rente/abfindungen/index.jsp",
      },
    ],
  },
  {
    id: "allgemeine-foerderung-der-erziehung-in-der-familie",
    who: "familie",
    when: "kind-familie",
    title: "Allgemeine Förderung der Erziehung in der Familie",
    summary:
      "Jugendämter und anerkannte Träger bieten Leistungen an, die Familien bei der Erziehung ihrer Kinder unterstützen. Dazu gehören Angebote der Familienbildung, Beratung, Gruppenangebote und Familienfreizeit.",
    resources: [
      {
        label:
          "IFH TU Dortmund – Förderung der Erziehung in der Familie: Daten und Statistiken",
        url: "https://ifh.forschungsverbund.tu-dortmund.de/angebote-der-kinder-und-jugendhilfe/foerderung-der-erziehung-in-der-familie-und-beratung",
      },
      {
        label:
          "AWO – Rechtsutachten § 16 SGB VIII: Familienbildung als Pflichtaufgabe (Dez. 2023, PDF)",
        url: "https://awo.org/wp-content/uploads/Projekte-Programme/202312_Rechtsutachten_%C2%A716SGBVIII.pdf",
      },
      {
        label:
          "AWO – Studie: Familienbildung in Kommunen nicht verlässlich verankert (2026)",
        url: "https://www.sozial.de/2026/awo-einbindung-von-familienbildung-in-kommunen-ist-unzureichend.html",
      },
      {
        label: "AWO – Projektseite Familienbildung",
        url: "https://awo.org/projekt/familienbildung/",
      },
      {
        label:
          "Destatis – Ausgaben und Einnahmen der öffentlichen Jugendhilfe (Zeitreihe)",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Kinderhilfe-Jugendhilfe/Tabellen/ausgaben-einnahmen-entwicklung.html",
      },
      {
        label:
          "Destatis – Pressemitteilung 2020: Ausgaben für Kinder- und Jugendhilfe von 2009 bis 2019 verdoppelt",
        url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2020/12/PD20_504_225.html",
      },
    ],
  },
  {
    id: "beratung-bei-partnerschaft-trennung-und-scheidung",
    who: "familie",
    when: "kind-familie",
    title: "Beratung bei Partnerschaft, Trennung und Scheidung",
    summary:
      "Mütter und Väter haben Anspruch auf Beratung in Fragen der Partnerschaft sowie bei Trennung und Scheidung. Ziel ist es, Konflikte einvernehmlich zu lösen und das Kindeswohl auch nach der Trennung zu sichern.",
    resources: [
      {
        label:
          "Destatis – Kinder- und Jugendhilfe: Träger, Ausgaben und Einnahmen",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Kinderhilfe-Jugendhilfe/_inhalt.html",
      },
      {
        label:
          "Destatis – Kinder- und Jugendhilfe 2024: 78,8 Mrd. € Gesamtausgaben",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Kinderhilfe-Jugendhilfe/aktuell-kinder-jugendhilfe-ausgaben.html",
      },
    ],
  },
  {
    id: "beratung-bei-personensorge-und-umgangsrecht",
    who: "familie",
    when: "kind-familie",
    title: "Beratung bei Personensorge und Umgangsrecht",
    summary:
      "Alleinerziehende und getrennt lebende Eltern haben Anspruch auf Beratung und Unterstützung bei der Ausübung der Personensorge und des Umgangsrechts. Das Jugendamt hilft dabei, Regelungen im Sinne des Kindeswohls zu finden.",
    resources: [
      {
        label:
          "Destatis – Kinder- und Jugendhilfe: Träger, Ausgaben und Einnahmen",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Kinderhilfe-Jugendhilfe/_inhalt.html",
      },
      {
        label:
          "Destatis – Kinder- und Jugendhilfe 2024: 78,8 Mrd. € Gesamtausgaben",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Kinderhilfe-Jugendhilfe/aktuell-kinder-jugendhilfe-ausgaben.html",
      },
    ],
  },
  {
    id: "mutter-vater-kind-wohnform",
    who: "familie",
    when: "kind-familie",
    title: "Mutter-/Vater-Kind-Wohnform",
    summary:
      "Schwangere und Eltern, die allein für ihr Kind sorgen und Hilfe bei der Versorgung und Erziehung benötigen, können in einer betreuten Wohnform untergebracht werden. Die Jugendhilfe stellt Unterkunft und sozialpädagogische Begleitung bereit.",
    resources: [
      {
        label:
          "Destatis – Kinder- und Jugendhilfe: Träger, Ausgaben und Einnahmen",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Kinderhilfe-Jugendhilfe/_inhalt.html",
      },
      {
        label: "Monitor Hilfen zur Erziehung – Ergebnisse im Überblick",
        url: "https://www.hzemonitor.akjstat.tu-dortmund.de/kapitel-1-ergebnisse-im-ueberblick",
      },
    ],
  },
  {
    id: "kinderbetreuung-in-notsituationen",
    who: "familie",
    when: "kind-familie",
    title: "Kinderbetreuung in Notsituationen",
    summary:
      "Wenn ein Elternteil wegen Krankheit oder aus anderen Gründen ausfällt, haben Eltern Anspruch auf Unterstützung bei der Betreuung und Versorgung ihrer Kinder. Das Jugendamt vermittelt geeignete Hilfen.",
    resources: [
      {
        label:
          "Destatis – Ausgaben der Träger öffentlicher Kinder- und Jugendhilfe 2024 (78,8 Mrd. €)",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Kinderhilfe-Jugendhilfe/aktuell-kinder-jugendhilfe-ausgaben.html",
      },
      {
        label:
          "Destatis – Themenübersicht Kinderhilfe und Jugendhilfe (Träger, Ausgaben, Einnahmen)",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Kinderhilfe-Jugendhilfe/_inhalt.html",
      },
    ],
  },
  {
    id: "unterbringung-zur-erfuellung-der-schulpflicht",
    who: "familie",
    when: "kind-familie",
    title: "Unterbringung zur Erfüllung der Schulpflicht",
    summary:
      "Wenn Eltern berufsbedingt häufig den Wohnort wechseln und ihr Kind deshalb die Schule nicht regelmäßig besuchen kann, hat das Kind Anspruch auf Unterstützung bei einer geeigneten Unterbringung zur Erfüllung der Schulpflicht.",
    resources: [
      {
        label:
          "§ 21 SGB VIII – Unterstützung bei notwendiger Unterbringung zur Erfüllung der Schulpflicht (sozialgesetzbuch-sgb.de)",
        url: "https://www.sozialgesetzbuch-sgb.de/sgbviii/21.html",
      },
      {
        label: "§ 21 SGB VIII – Gesetzestext mit Verlinkungen (buzer.de)",
        url: "https://www.buzer.de/21_SGB_VIII.htm",
      },
      {
        label:
          "Unterstützung zur Erfüllung der Schulpflicht – Landratsamt Berchtesgadener Land",
        url: "https://www.lra-bgl.de/lw/jugend-familie-soziales/muttervaterelternpaar/wirtschaftliche-jugendhilfe/unterstuetzung-zur-erfuellung-der-schulpflicht/",
      },
      {
        label: "§ 21 SGB VIII mit Rechtsprechung – dejure.org",
        url: "https://dejure.org/gesetze/SGB_VIII/21.html",
      },
    ],
  },
  {
    id: "anspruch-auf-kita-foerderung-und-kindertagespflege",
    who: "familie",
    when: "kinderbetreuung",
    title: "Anspruch auf Kita-Förderung und Kindertagespflege",
    summary:
      "Kinder haben ab dem vollendeten ersten Lebensjahr einen Rechtsanspruch auf Förderung in einer Kindertageseinrichtung oder in der Kindertagespflege. Für Kinder unter einem Jahr besteht bei besonderem Bedarf ebenfalls ein Anspruch.",
    resources: [
      {
        label:
          "Destatis – Kindertagesbetreuung in Deutschland (Statistikportal)",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Kindertagesbetreuung/_inhalt.html",
      },
      {
        label:
          "Destatis – Pressemitteilung 2024: Betreuungsquote unter Dreijährigen 37,4 %; 60.662 Einrichtungen",
        url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2024/09/PD24_369_225.html",
      },
      {
        label:
          "BMFSFJ – Kindertagesbetreuung Kompakt 2024 (Ausbaustand und Bedarf)",
        url: "https://www.bmbfsfj.bund.de/resource/blob/269132/26d3438f490871b6c22cea0e8383f208/kindertagesbetreuung-kompakt-2024-data.pdf",
      },
    ],
  },
  {
    id: "hilfe-zur-erziehung",
    who: "familie",
    when: "kind-familie",
    title: "Hilfe zur Erziehung",
    summary:
      "Eltern haben Anspruch auf Hilfe zur Erziehung, wenn eine dem Wohl des Kindes entsprechende Erziehung nicht gewährleistet ist und die Hilfe für die Entwicklung des Kindes geeignet und notwendig ist. Art und Umfang richten sich nach dem individuellen Bedarf.",
    resources: [
      {
        label: "Destatis – Hilfe zur Erziehung: Übersicht und Tabellen",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Jugendarbeit/_inhalt.html",
      },
      {
        label: "Destatis – Träger der Jugendhilfe, Ausgaben und Einnahmen",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Kinderhilfe-Jugendhilfe/_inhalt.html",
      },
      {
        label:
          "Monitor Hilfen zur Erziehung – Ergebnisse im Überblick (akjstat TU Dortmund)",
        url: "https://www.hzemonitor.akjstat.tu-dortmund.de/kapitel-1-ergebnisse-im-ueberblick",
      },
      {
        label: "Monitor Hilfen zur Erziehung – Ausgaben (Kapitel 5)",
        url: "https://www.hzemonitor.akjstat.tu-dortmund.de/kapitel-5-ausgaben",
      },
      {
        label: "Monitor Hilfen zur Erziehung 2023 (PDF, pedocs)",
        url: "https://www.pedocs.de/volltexte/2024/30505/pdf/Monitor_Hilfen_zur_Erziehung_2023.pdf",
      },
      {
        label: "BMBFSFJ – Fragen und Antworten: Kinder- und Jugendhilfe",
        url: "https://www.bmbfsfj.bund.de/bmbfsfj/themen/kinder-und-jugend/kinder-und-jugendschutz/fragen-und-antworten-kinder-und-jugendhilfe/",
      },
    ],
  },
  {
    id: "erziehungsberatung",
    who: "familie",
    when: "kind-familie",
    title: "Erziehungsberatung",
    summary:
      "Kinder, Jugendliche und Eltern haben Anspruch auf Erziehungsberatung durch anerkannte Beratungsstellen. Diese helfen bei der Klärung und Bewältigung von Erziehungs- und Entwicklungsproblemen sowie familiären Konflikten.",
    resources: [
      {
        label:
          "Monitor Hilfen zur Erziehung – Erziehungsberatung § 28 SGB VIII: Steckbrief",
        url: "https://www.hzemonitor.akjstat.tu-dortmund.de/steckbriefe-der-hilfearten/erziehungsberatung-28-sgb-viii",
      },
      {
        label: "Destatis – Hilfe zur Erziehung und Jugendarbeit: Übersicht",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Jugendarbeit/_inhalt.html",
      },
    ],
  },
  {
    id: "erziehungsbeistand-und-betreuungshelfer",
    who: "familie",
    when: "kind-familie",
    title: "Erziehungsbeistand und Betreuungshelfer",
    summary:
      "Kinder und Jugendliche können einen Erziehungsbeistand oder Betreuungshelfer erhalten, der sie beim Aufbau sozialer Kompetenzen, der Bewältigung von Alltagsproblemen und der Stabilisierung ihres Umfelds unterstützt.",
    resources: [
      {
        label: "Monitor Hilfen zur Erziehung – Ergebnisse im Überblick",
        url: "https://www.hzemonitor.akjstat.tu-dortmund.de/kapitel-1-ergebnisse-im-ueberblick",
      },
      {
        label: "Destatis – Hilfe zur Erziehung und Jugendarbeit: Übersicht",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Jugendarbeit/_inhalt.html",
      },
    ],
  },
  {
    id: "sozialpaedagogische-familienhilfe",
    who: "familie",
    when: "kind-familie",
    title: "Sozialpädagogische Familienhilfe",
    summary:
      "Familien mit erheblichem Erziehungs- und Betreuungsbedarf können sozialpädagogische Familienhilfe erhalten. Eine Fachkraft begleitet die Familie im Alltag, stärkt die Erziehungsfähigkeit und hilft bei der Bewältigung von Problemen.",
    resources: [
      {
        label:
          "Monitor Hilfen zur Erziehung – Sozialpädagogische Familienhilfe § 31: Steckbrief",
        url: "https://www.hzemonitor.akjstat.tu-dortmund.de/steckbriefe-der-hilfearten/sozialpaedagogische-familienhilfe-31-sgb-viii",
      },
      {
        label:
          "Destatis – Kinder- und Jugendhilfe 2024: 78,8 Mrd. € Gesamtausgaben",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Kinderhilfe-Jugendhilfe/aktuell-kinder-jugendhilfe-ausgaben.html",
      },
    ],
  },
  {
    id: "erziehung-in-der-tagesgruppe",
    who: "familie",
    when: "kind-familie",
    title: "Erziehung in der Tagesgruppe",
    summary:
      "Kinder können eine Tagesgruppe besuchen, in der Entwicklung, schulische Förderung und soziales Lernen im Mittelpunkt stehen. Die Eltern werden dabei einbezogen und begleitet, um die Erziehungsfähigkeit in der Familie zu stärken.",
    resources: [
      {
        label: "Monitor Hilfen zur Erziehung – Ergebnisse im Überblick",
        url: "https://www.hzemonitor.akjstat.tu-dortmund.de/kapitel-1-ergebnisse-im-ueberblick",
      },
      {
        label: "Destatis – Hilfe zur Erziehung und Jugendarbeit: Übersicht",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Jugendarbeit/_inhalt.html",
      },
    ],
  },
  {
    id: "vollzeitpflege-pflegefamilie",
    who: "familie",
    when: "kind-familie",
    title: "Vollzeitpflege (Pflegefamilie)",
    summary:
      "Kinder und Jugendliche, die nicht in ihrer Herkunftsfamilie leben können, werden in einer Pflegefamilie untergebracht. Diese soll dem Kind eine altersgerechte Förderung und eine stabile Beziehung ermöglichen.",
    resources: [
      {
        label: "Monitor HZE – Vollzeitpflege § 33 SGB VIII: Steckbrief",
        url: "https://www.hzemonitor.akjstat.tu-dortmund.de/steckbriefe-der-hilfearten/vollzeitpflege-33-sgb-viii",
      },
      {
        label:
          "Destatis – Zahl junger Menschen in Heimen und Pflegefamilien 2024 weiter gestiegen",
        url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/03/PD26_098_225.html",
      },
      {
        label:
          "Destatis – Erstmals seit 2017 wieder mehr junge Menschen in Heimen und Pflegefamilien (2024)",
        url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2024/11/PD24_435_225.html",
      },
      {
        label:
          "Bundestag Wissenschaftlicher Dienst – Zur Situation von Pflegekindern in Deutschland (WD 8-028-25, PDF)",
        url: "https://www.bundestag.de/resource/blob/1106526/WD-8-028-25.pdf",
      },
      {
        label: "Deutscher Verein – Empfehlungen zur Vollzeitpflege 2024 (PDF)",
        url: "https://www.deutscher-verein.de/fileadmin/user_upload/dv/pdfs/Empfehlungen_Stellungnahmen/2024/DV-13-24_Vollzeitpflege.pdf",
      },
    ],
  },
  {
    id: "heimerziehung-und-betreutes-wohnen",
    who: "familie",
    when: "kind-familie",
    title: "Heimerziehung und betreutes Wohnen",
    summary:
      "Kinder und Jugendliche, die einer Unterbringung außerhalb der Familie bedürfen, können in einem Heim oder einer anderen betreuten Wohnform untergebracht werden. Ziel ist die Förderung der Entwicklung und die Vorbereitung auf ein eigenständiges Leben.",
    resources: [
      {
        label: "Monitor Hilfen zur Erziehung – Heimerziehung § 34: Steckbrief",
        url: "https://www.hzemonitor.akjstat.tu-dortmund.de/steckbriefe-der-hilfearten/heimerziehung-sonstige-betreute-wohnform-34-sgb-viii",
      },
      {
        label:
          "Destatis – Junge Menschen in Heimen und Pflegefamilien 2024 gestiegen",
        url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/03/PD26_098_225.html",
      },
      {
        label:
          "Destatis – Kinder- und Jugendhilfe 2024: 78,8 Mrd. € Gesamtausgaben",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Kinderhilfe-Jugendhilfe/aktuell-kinder-jugendhilfe-ausgaben.html",
      },
    ],
  },
  {
    id: "intensive-sozialpaedagogische-einzelbetreuung",
    who: "familie",
    when: "kind-familie",
    title: "Intensive sozialpädagogische Einzelbetreuung",
    summary:
      "Jugendliche, die einer intensiven individuellen Betreuung bedürfen, haben Anspruch auf intensive sozialpädagogische Einzelbetreuung. Diese Hilfe richtet sich an besonders gefährdete Jugendliche und zielt auf ihre soziale Integration.",
    resources: [
      {
        label: "Monitor Hilfen zur Erziehung – Ergebnisse im Überblick",
        url: "https://www.hzemonitor.akjstat.tu-dortmund.de/kapitel-1-ergebnisse-im-ueberblick",
      },
      {
        label: "Destatis – Hilfe zur Erziehung und Jugendarbeit: Übersicht",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Jugendarbeit/_inhalt.html",
      },
    ],
  },
  {
    id: "eingliederungshilfe-fuer-kinder-mit-seelischer-behinderung",
    who: "familie",
    when: "behinderung-teilhabe",
    title: "Eingliederungshilfe für Kinder mit seelischer Behinderung",
    summary:
      "Kinder und Jugendliche mit einer (drohenden) seelischen Behinderung haben Anspruch auf Eingliederungshilfe nach SGB VIII. Diese umfasst therapeutische, pädagogische und soziale Maßnahmen zur Förderung der gesellschaftlichen Teilhabe.",
    resources: [
      {
        label:
          "Statistisches Bundesamt – Kinder- und Jugendhilfe: Eingliederungshilfe",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Kindertagesbetreuung/_inhalt.html",
      },
      {
        label: "AFET – Fachverband für Erziehungshilfen: § 35a SGB VIII",
        url: "https://www.afet-ev.de/aktuell/Archiv/2014/2014-AFET-Stellungnahme-35aSGBVIII.pdf",
      },
    ],
  },
  {
    id: "beratung-der-eltern-bei-fremdunterbringung",
    who: "familie",
    when: "kind-familie",
    title: "Beratung der Eltern bei Fremdunterbringung",
    summary:
      "Eltern, deren Kinder außerhalb der Familie untergebracht sind, haben Anspruch auf Beratung und Unterstützung, um die Entwicklung des Kindes zu fördern und eine Rückkehr in die Familie vorzubereiten.",
    resources: [
      {
        label:
          "§ 37 SGB VIII – Beratung und Unterstützung der Eltern (sozialgesetzbuch-sgb.de)",
        url: "https://www.sozialgesetzbuch-sgb.de/sgbviii/37.html",
      },
      {
        label: "Außerfamiliäre Unterbringung – KJSG-FAQ (DIJuF)",
        url: "https://dijuf.de/handlungsfelder/kjsg/kjsg-faq/ausserfamiliaere-unterbringung",
      },
      {
        label:
          "Eltern bleiben! Empowerment von Eltern bei stationärer Hilfe (AGJ)",
        url: "https://www.agj.de/positionen/artikel/eltern-bleiben-zusammenarbeit-mit-und-empowerment-von-eltern-als-staerke-gelingender-stationaerer-hilfe.html",
      },
      {
        label: "Familienbildung und Familienberatung (BMBFSFJ)",
        url: "https://www.bmbfsfj.bund.de/bmbfsfj/themen/familie/chancen-und-teilhabe-fuer-familien/direkte-beratung-und-informationen-fuer-familien/familienbildung-und-familienberatung/familienbildung-und-familienberatung-73492",
      },
    ],
  },
  {
    id: "beratung-und-unterstuetzung-von-pflegepersonen",
    who: "pflegende-angehoerige",
    when: "angehoerige-pflegen",
    title: "Beratung und Unterstützung von Pflegepersonen",
    summary:
      "Pflegepersonen haben vor und nach der Aufnahme eines Pflegekindes Anspruch auf Beratung, Unterstützung und Qualifizierung durch das Jugendamt. Dies soll eine gelingende Pflegebeziehung und das Wohl des Kindes sichern.",
    resources: [
      {
        label:
          "Familienportal: Was sollte ich über Pflegeelternschaft allgemein wissen?",
        url: "https://familienportal.de/familienportal/lebenslagen/pflegefamilien/was-sollte-ich-ueber-pflegeelternschaft-allgemein-wissen-",
      },
      {
        label: "Familienportal: Wie werden Pflegefamilien unterstützt?",
        url: "https://familienportal.de/familienportal/lebenslagen/pflegefamilien/wie-werden-pflegefamilien-unterstuetzt-",
      },
      {
        label:
          "§ 37 SGB VIII – Zusammenarbeit bei Hilfen außerhalb der Familie",
        url: "https://www.gesetze-im-internet.de/sgb_8/__37.html",
      },
      {
        label: "§ 37c SGB VIII – Ergänzende Bestimmungen zur Hilfeplanung",
        url: "https://www.gesetze-im-internet.de/sgb_8/__37c.html",
      },
    ],
  },
  {
    id: "unterhalt-bei-hilfe-zur-erziehung-ausserhalb-der-familie",
    who: "familie",
    when: "kind-familie",
    title: "Unterhalt bei Hilfe zur Erziehung außerhalb der Familie",
    summary:
      "Kinder und Jugendliche, die außerhalb der eigenen Familie in Pflege oder Heimerziehung untergebracht sind, haben Anspruch auf Übernahme der Kosten für Sachaufwand, Pflege und Erziehung durch den Jugendhilfeträger.",
    resources: [
      {
        label:
          "Destatis – Kinder- und Jugendhilfe 2024: 78,8 Mrd. € Gesamtausgaben",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Kinderhilfe-Jugendhilfe/aktuell-kinder-jugendhilfe-ausgaben.html",
      },
      {
        label: "Monitor Hilfen zur Erziehung – Ausgaben (Kapitel 5)",
        url: "https://www.hzemonitor.akjstat.tu-dortmund.de/kapitel-5-ausgaben",
      },
    ],
  },
  {
    id: "krankenhilfe-fuer-kinder-und-jugendliche-jugendhilfe",
    who: "familie",
    when: "kind-familie",
    title: "Krankenhilfe für Kinder und Jugendliche (Jugendhilfe)",
    summary:
      "Für Kinder und Jugendliche, die Leistungen der Jugendhilfe erhalten, übernimmt der Jugendhilfeträger Zuzahlungen, Eigenbeteiligungen und ggf. Krankenkassenbeiträge, die anderweitig nicht gedeckt sind.",
    resources: [
      {
        label: "§ 40 SGB VIII Krankenhilfe – sozialgesetzbuch-sgb.de",
        url: "https://www.sozialgesetzbuch-sgb.de/sgbviii/40.html",
      },
      {
        label: "Krankenhilfe nach §40 SGB VIII – Verwaltungsportal Hessen",
        url: "https://verwaltungsportal.hessen.de/leistung?leistung_id=L100001_376610965",
      },
      {
        label: "§ 40 SGB VIII Krankenhilfe – buzer.de (mit Gesetzeshistorie)",
        url: "https://www.buzer.de/40_SGB_VIII.htm",
      },
      {
        label:
          "Begriffserklärung Krankenhilfe (SGB VIII §40) – moses-online.de",
        url: "https://www.moses-online.de/krankenhilfe",
      },
    ],
  },
  {
    id: "hilfe-fuer-junge-volljaehrige",
    who: "familie",
    when: "kind-familie",
    title: "Hilfe für junge Volljährige",
    summary:
      "Junge Erwachsene zwischen 18 und 27 Jahren, die aufgrund ihrer Persönlichkeitsentwicklung Unterstützung benötigen, können geeignete und notwendige Hilfe erhalten. Ziel ist die Verselbständigung und gesellschaftliche Teilhabe.",
    resources: [
      {
        label:
          "Destatis – Hilfe für junge Volljährige: Statistik nach Art der Hilfe",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Jugendarbeit/Tabellen/hilfen-erziehung-jungevolljaehrige.html",
      },
      {
        label: "Destatis – Ausgaben der öffentlichen Jugendhilfe (Zeitreihe)",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Kinderhilfe-Jugendhilfe/Tabellen/ausgaben-einnahmen-entwicklung.html",
      },
      {
        label: "akjstat – Monitor Hilfen zur Erziehung (interaktive Daten)",
        url: "https://www.hzemonitor.akjstat.tu-dortmund.de/",
      },
    ],
  },
  {
    id: "nachbetreuung-nach-jugendhilfemassnahmen",
    who: "familie",
    when: "kind-familie",
    title: "Nachbetreuung nach Jugendhilfemaßnahmen",
    summary:
      "Junge Volljährige, die Jugendhilfemaßnahmen abgeschlossen haben, können Nachbetreuung und Beratung beim Übergang in ein eigenständiges Leben erhalten. Das Jugendamt unterstützt bei der Verselbständigung auch nach Ende der formalen Hilfe.",
    resources: [
      {
        label:
          "DIJUF – FAQ zu Care Leavern und Nachbetreuung nach § 41a SGB VIII",
        url: "https://dijuf.de/handlungsfelder/kjsg/kjsg-faq/junge-volljaehrige/careleaver",
      },
      {
        label:
          "Careleaver e. V. – Handlungsleitfaden zur Nachbetreuung nach § 41a SGB VIII (PDF)",
        url: "https://www.agj.de/fileadmin/files/TransferkonferenzLeavingCare2021/Careleaver_e._V._Handlungsleitfaden_41a.pdf",
      },
    ],
  },
  {
    id: "beratung-bei-vaterschaftsfeststellung-und-unterhalt",
    who: "familie",
    when: "kind-familie",
    title: "Beratung bei Vaterschaftsfeststellung und Unterhalt",
    summary:
      "Das Jugendamt berät und unterstützt Mütter unverzüglich nach der Geburt eines nichtehelichen Kindes bei der Vaterschaftsfeststellung sowie bei der Geltendmachung von Unterhaltsansprüchen für das Kind.",
    resources: [
      {
        label:
          "Familienportal: Unterhalt und Vaterschaft mit einem Beistand regeln",
        url: "https://familienportal.de/familienportal/lebenslagen/trennung/allein-und-getrennt-erziehende-eltern/wie-kann-ich-unterhalt-und-vaterschaft-mit-einem-beistand-regeln--126098",
      },
      {
        label:
          "§ 18 SGB VIII – Beratung bei Personensorge und Unterhalt (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/sgb_8/__18.html",
      },
      {
        label: "Familienportal des Bundes: Unterhalt – Überblick",
        url: "https://familienportal.de/familienportal/familienleistungen/unterhalt",
      },
    ],
  },
  {
    id: "beratung-und-unterstuetzung-von-vormuendern-und-pflegern",
    who: "familie",
    when: "kind-familie",
    title: "Beratung und Unterstützung von Vormündern und Pflegern",
    summary:
      "Ehrenamtliche Vormünder und Pfleger haben Anspruch auf regelmäßige und bedarfsgerechte Beratung und Unterstützung durch das Jugendamt. Dies soll die Qualität der Vormundschaft und die Förderung des Mündels sicherstellen.",
    resources: [
      {
        label:
          "§ 53a SGB VIII – Beratung und Unterstützung von Vormündern und Pflegern (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/sgb_8/__53a.html",
      },
      {
        label:
          "Ehrenamt und Fachstellen – Bundesforum Vormundschaft und Pflegschaft",
        url: "https://vormundschaft.net/ehrenamt-und-fachstellen/",
      },
      {
        label:
          "§ 53a SGB VIII – Beratung und Unterstützung von Vormündern und Pflegern (sozialgesetzbuch-sgb.de)",
        url: "https://www.sozialgesetzbuch-sgb.de/sgbviii/53a.html",
      },
      {
        label:
          "Aufgaben des Jugendamtes im vormundschaftlichen Bereich (moses-online.de)",
        url: "https://www.moses-online.de/aufgaben-jugendamtes-im-vormundschaftlichen-bereich",
      },
    ],
  },
  {
    id: "leistungen-bei-pflegegrad-1",
    who: "pflegebeduerftige",
    when: "pflegebeduerftig-werden",
    title: "Leistungen bei Pflegegrad 1",
    summary:
      "Pflegebedürftige des Pflegegraids 1 haben Anspruch auf Pflegeberatung, Beratung in der eigenen Häuslichkeit und Leistungen zur Unterstützung im Alltag sowie den Entlastungsbetrag. Für sie gelten eingeschränkte Leistungsansprüche im Vergleich zu den Pflegegraden 2–5.",
    resources: [
      {
        label: "BMG – Leistungen bei Pflegegrad 1 (Übersicht)",
        url: "https://www.bundesgesundheitsministerium.de/pflege-zu-hause/leistungen-bei-pflegegrad-1",
      },
      {
        label:
          "BMG – Entlastungsbetrag: Betreuungs- und Entlastungsleistungen (131 €/Monat ab 2025)",
        url: "https://www.bundesgesundheitsministerium.de/entlastungsbetrag.html",
      },
      {
        label:
          "BMG – Leistungsübersicht SPV 2025 (alle Pflegegrade inkl. PG 1; PDF)",
        url: "https://www.bundesgesundheitsministerium.de/fileadmin/Dateien/3_Downloads/P/Pflegeversicherung_Leistungsbeitraege/Uebersicht_Leistungsbetraege_2025.pdf",
      },
      {
        label:
          "GKV-Spitzenverband – SPV-Kennzahlen (Ausgaben und Pflegebedürftige nach Pflegegrad)",
        url: "https://www.gkv-spitzenverband.de/gkv_spitzenverband/presse/zahlen_und_grafiken/spv_kennzahlen/spv_kennzahlen.jsp",
      },
    ],
  },
  {
    id: "pflegesachleistung-ambulante-pflege",
    who: "pflegebeduerftige",
    when: "pflegebeduerftig-werden",
    title: "Pflegesachleistung (ambulante Pflege)",
    summary:
      "Pflegebedürftige der Pflegegrade 2–5 haben Anspruch auf ambulante Pflegesachleistungen durch zugelassene Pflegedienste. Diese umfassen körperbezogene Pflegemaßnahmen, pflegerische Betreuung und Hilfen bei der Haushaltsführung.",
    resources: [
      {
        label:
          "GKV-Spitzenverband – SPV-Kennzahlen (Ausgaben Pflegesachleistungen: 6,92 Mrd. € in 2025)",
        url: "https://www.gkv-spitzenverband.de/gkv_spitzenverband/presse/zahlen_und_grafiken/spv_kennzahlen/spv_kennzahlen.jsp",
      },
      {
        label:
          "Destatis – Pflegebedürftige nach Versorgungsart, Geschlecht und Pflegegrad (2023)",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Gesundheit/Pflege/Tabellen/pflegebeduerftige-pflegestufe.html",
      },
      {
        label:
          "BMG – Leistungsbeträge der sozialen Pflegeversicherung ab 1.1.2025 (PDF)",
        url: "https://www.bundesgesundheitsministerium.de/fileadmin/Dateien/3_Downloads/P/Pflegeversicherung_Leistungsbeitraege/Leistungsbeitraege_SPV_ab_1.1.2025.pdf",
      },
      {
        label: "Destatis – Pflege in Deutschland: Statistik & Berichte",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Gesundheit/Pflege/_inhalt.html",
      },
    ],
  },
  {
    id: "pflegegeld-fuer-haeusliche-pflege",
    who: "pflegebeduerftige",
    when: "pflegebeduerftig-werden",
    title: "Pflegegeld für häusliche Pflege",
    summary:
      "Pflegebedürftige der Pflegegrade 2–5, die zu Hause gepflegt werden, erhalten monatliches Pflegegeld, das sie frei einsetzen können. Das Pflegegeld steigt mit dem Pflegegrad und soll die Pflegeperson(en) anerkennen.",
    resources: [
      {
        label:
          "Destatis – 5,7 Mio. Pflegebedürftige zum Jahresende 2023 (Pressemitteilung)",
        url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2024/12/PD24_478_224.html",
      },
      {
        label:
          "Destatis – Pflegebedürftige nach Versorgungsart, Geschlecht und Pflegegrad (Tabelle)",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Gesundheit/Pflege/Tabellen/pflegebeduerftige-pflegestufe.html",
      },
      {
        label: "Destatis – Statistischer Bericht Pflegestatistik 2023",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Gesundheit/Pflege/Publikationen/Downloads-Pflege/statistischer-bericht-pflege-deutschlandergebnisse-5224001239005.html",
      },
      {
        label: "BMG – Häusliche Pflege: Leistungen im Überblick",
        url: "https://www.bundesgesundheitsministerium.de/pflege-zu-hause",
      },
      {
        label:
          "BMG – Leistungsbeträge der sozialen Pflegeversicherung ab 1.1.2025 (PDF)",
        url: "https://www.bundesgesundheitsministerium.de/fileadmin/Dateien/3_Downloads/P/Pflegeversicherung_Leistungsbeitraege/Leistungsbeitraege_SPV_ab_1.1.2025.pdf",
      },
    ],
  },
  {
    id: "wohngruppen-zuschlag-ambulant-betreut",
    who: "pflegebeduerftige",
    when: "pflegebeduerftig-werden",
    title: "Wohngruppen-Zuschlag (ambulant betreut)",
    summary:
      "Pflegebedürftige in ambulant betreuten Wohngruppen erhalten einen monatlichen Zuschlag, wenn sie gemeinsam mit anderen Pflegebedürftigen in einer Wohngemeinschaft leben und eine gemeinsame Pflegekraft organisieren.",
    resources: [
      {
        label:
          "sozialversicherung-kompetent.de – Wohngruppenzuschlag § 38a SGB XI (bis 31.12.2025 gültig)",
        url: "https://sozialversicherung-kompetent.de/pflegeversicherung/leistungsrecht-ab-2017/685-wohngruppenzuschlag.html",
      },
      {
        label: "pflege.de – Wohngruppenzuschlag und Anschubfinanzierung",
        url: "https://www.pflege.de/pflegekasse-pflegefinanzierung/pflegeleistungen/wohngruppenzuschlag-anschubfinanzierung/",
      },
      {
        label:
          "Bundesweites Pflegenetzwerk – Wohngruppenzuschlag: Voraussetzungen und Höhe",
        url: "https://www.bundesweites-pflegenetzwerk.de/wohngruppenzuschlag/",
      },
    ],
  },
  {
    id: "verhinderungspflege",
    who: "pflegebeduerftige",
    when: "angehoerige-pflegen",
    title: "Verhinderungspflege",
    summary:
      "Wenn die regelmäßige Pflegeperson durch Urlaub, Krankheit oder andere Gründe ausfällt, übernimmt die Pflegekasse die Kosten einer Ersatzpflege (Verhinderungspflege) für bis zu sechs Wochen pro Kalenderjahr.",
    resources: [
      {
        label:
          "SGB XI § 42a – Gemeinsamer Jahresbetrag für Verhinderungs- und Kurzzeitpflege (ab 1.7.2025)",
        url: "https://www.gesetze-im-internet.de/sgb_11/__42a.html",
      },
      {
        label:
          "BMG – PUEG: Pflegeunterstützungs- und -entlastungsgesetz (Reform 2023/2025)",
        url: "https://www.bundesgesundheitsministerium.de/ministerium/gesetze-und-verordnungen/guv-20-lp/pueg.html",
      },
      {
        label:
          "pflege.de – Gemeinsamer Jahresbetrag: Verhinderungs- und Kurzzeitpflege flexibel nutzen",
        url: "https://www.pflege.de/pflegekasse-pflegefinanzierung/pflegeleistungen/gemeinsamer-jahresbetrag/",
      },
      {
        label:
          "pflege.de – Verhinderungspflege: Anspruch, Beträge und Regelungen 2026",
        url: "https://www.pflege.de/altenpflege/verhinderungspflege/",
      },
    ],
  },
  {
    id: "digitale-pflegeanwendungen-pflegekasse",
    who: "pflegebeduerftige",
    when: "pflegebeduerftig-werden",
    title: "Digitale Pflegeanwendungen (Pflegekasse)",
    summary:
      "Pflegebedürftige, die digitale Pflegeanwendungen (DiPA) nutzen, haben Anspruch auf ergänzende Unterstützungsleistungen, damit sie die Anwendungen effektiv einsetzen können.",
    resources: [
      {
        label:
          "BMG – Digitale Pflegeanwendungen: ergänzende Unterstützungsleistungen (bis 30 €/Monat)",
        url: "https://www.bundesgesundheitsministerium.de/themen/pflege/online-ratgeber-pflege/leistungen-der-pflegeversicherung/leistungen-im-ueberblick/digitale-pflegeanwendungen",
      },
      {
        label:
          "betanet – DiPA: Anspruch auf ergänzende Unterstützung durch ambulante Pflegedienste",
        url: "https://www.betanet.de/dipa-digitale-pflegeanwendungen.html",
      },
      {
        label:
          "BfArM – Wissenswertes zu DiPA (Zulassungsverfahren und Verzeichnis)",
        url: "https://www.bfarm.de/DE/Medizinprodukte/Aufgaben/DiGA-und-DiPA/DiPA/Wissenswertes/_node.html",
      },
      {
        label: "BfArM – DiGA- und DiPA-Verzeichnis (zugelassene Anwendungen)",
        url: "https://www.bfarm.de/DE/Medizinprodukte/Aufgaben/DiGA-und-DiPA/_verteilerseite.html",
      },
      {
        label:
          "pflegeabc.de – Digitale Pflegeanwendungen (DiPA): Anspruch und Kostenübernahme",
        url: "https://www.pflegeabc.de/blog/digitale-pflegeanwendungen",
      },
    ],
  },
  {
    id: "pflegehilfsmittel-und-wohnumfeldverbesserung",
    who: "pflegebeduerftige",
    when: "pflegebeduerftig-werden",
    title: "Pflegehilfsmittel und Wohnumfeldverbesserung",
    summary:
      "Pflegebedürftige haben Anspruch auf Pflegehilfsmittel (z.B. Pflegebetten, Rollstühle) sowie auf Zuschüsse für wohnumfeldverbessernde Maßnahmen (z.B. barrierefreier Umbau), um häusliche Pflege zu erleichtern.",
    resources: [
      {
        label:
          "sozialversicherung-kompetent.de – Wohnumfeldverbessernde Maßnahmen § 40 Abs. 4 SGB XI",
        url: "https://sozialversicherung-kompetent.de/pflegeversicherung/leistungsrecht-ab-2017/677-wohnumfeldverbesserung.html",
      },
      {
        label:
          "box4pflege.de – Pflegehilfsmittel nach § 40 SGB XI: Anspruch und Kosten",
        url: "https://box4pflege.de/ratgeber/pflegehilfsmittel-40-sgb-xi/",
      },
      {
        label:
          "box4pflege.de – Pflegehilfsmittel Erhöhung 2025: neue Pauschale 42 €/Monat",
        url: "https://box4pflege.de/ratgeber/pflegehilfsmittel-erhoehung-2025/",
      },
      {
        label:
          "GKV-Spitzenverband – Pflegehilfsmittelverträge (Rahmenvereinbarungen)",
        url: "https://www.gkv-spitzenverband.de/pflegeversicherung/pflegehilfsmittelvertraege/pflegehilfsmittelvertraege.jsp",
      },
      {
        label:
          "BMG – Leistungsbeträge der sozialen Pflegeversicherung ab 1.1.2025: Zuschuss wohnumfeldverbessernde Maßnahmen 4.180 € je Maßnahme (PDF)",
        url: "https://www.bundesgesundheitsministerium.de/fileadmin/Dateien/3_Downloads/P/Pflegeversicherung_Leistungsbeitraege/Leistungsbeitraege_SPV_ab_1.1.2025.pdf",
      },
    ],
  },
  {
    id: "tages-und-nachtpflege",
    who: "pflegebeduerftige",
    when: "pflegebeduerftig-werden",
    title: "Tages- und Nachtpflege",
    summary:
      "Pflegebedürftige, die tagsüber oder nachts nicht zu Hause versorgt werden können, haben Anspruch auf teilstationäre Pflege in einer Tagespflege- oder Nachtpflegeeinrichtung. Die Pflegekasse übernimmt pflegebedingte Aufwendungen und Beförderungskosten.",
    resources: [
      {
        label:
          "GKV-Spitzenverband – SPV-Kennzahlen (Tagespflege-Ausgaben 2019–2025)",
        url: "https://www.gkv-spitzenverband.de/gkv_spitzenverband/presse/zahlen_und_grafiken/spv_kennzahlen/spv_kennzahlen.jsp",
      },
      {
        label: "Destatis – Pflegebedürftige in Deutschland (Pflegestatistik)",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Gesundheit/Pflege/_inhalt.html",
      },
      {
        label:
          "BMG – Leistungsansprüche der Versicherten 2023 (Übersicht, PDF)",
        url: "https://www.bundesgesundheitsministerium.de/fileadmin/Dateien/3_Downloads/Statistiken/Pflegeversicherung/Leistungen/UEbersicht_Leistungsbetraege_2023.pdf",
      },
    ],
  },
  {
    id: "kurzzeitpflege-pflegeversicherung",
    who: "pflegebeduerftige",
    when: "pflegebeduerftig-werden",
    title: "Kurzzeitpflege (Pflegeversicherung)",
    summary:
      "Wenn häusliche Pflege vorübergehend nicht möglich ist, haben Pflegebedürftige der Pflegegrade 2–5 Anspruch auf Kurzzeitpflege in einer stationären Einrichtung für bis zu acht Wochen pro Jahr.",
    resources: [
      {
        label: "BMG – Kurzzeitpflege: Überblick und Leistungen",
        url: "https://www.bundesgesundheitsministerium.de/themen/pflege/leistungen-der-pflegeversicherung/kurzzeitpflege.html",
      },
      {
        label: "WIdO – Pflegereport 2023: Inanspruchnahme von Pflegeleistungen",
        url: "https://www.wido.de/publikationen-produkte/buchreihen/pflegereport/2023/",
      },
      {
        label: "Verbraucherzentrale – Kurzzeitpflege: Kosten und Ansprüche",
        url: "https://www.verbraucherzentrale.de/wissen/gesundheit-pflege/pflegeversicherung/kurzzeitpflege-was-zahlt-die-pflegekasse-13046",
      },
    ],
  },
  {
    id: "vollstationaere-pflege",
    who: "pflegebeduerftige",
    when: "pflegebeduerftig-werden",
    title: "Vollstationäre Pflege",
    summary:
      "Pflegebedürftige, die dauerhaft in einem Pflegeheim untergebracht sind, erhalten von der Pflegekasse einen pauschalen Zuschuss zu den pflegebedingten Aufwendungen. Die Höhe richtet sich nach dem Pflegegrad.",
    resources: [
      {
        label:
          "Destatis – Pflegebedürftige in Deutschland: Zahlen und Statistiken",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Gesundheit/Pflege/_inhalt.html",
      },
      {
        label: "BMG – Zahlen, Daten und Fakten zur Pflegeversicherung (PDF)",
        url: "https://www.bundesgesundheitsministerium.de/fileadmin/Dateien/3_Downloads/Statistiken/Pflegeversicherung/Zahlen_und_Fakten/Zahlen-Fakten_Pflegeversicherung.pdf",
      },
      {
        label:
          "BMG – Leistungsbeträge der sozialen Pflegeversicherung ab 1.1.2025 (PDF)",
        url: "https://www.bundesgesundheitsministerium.de/fileadmin/Dateien/3_Downloads/P/Pflegeversicherung_Leistungsbeitraege/Leistungsbeitraege_SPV_ab_1.1.2025.pdf",
      },
      {
        label:
          "Verbraucherzentrale – Leistungszuschlag: Wie viel zahlt die Pflegekasse im Heim?",
        url: "https://www.verbraucherzentrale.de/wissen/gesundheit-pflege/pflegeantrag-und-leistungen/bei-vollstationaerer-pflege-pflegekasse-zahlt-zuschlaege-zu-heimkosten-68404",
      },
      {
        label:
          "vdek – Eigenanteile im Pflegeheim: Entwicklung und Zuschüsse 2024",
        url: "https://www.vdek.com/presse/pressemitteilungen/2024/eigenanteile-pflegeheim-anstieg-zuschuesse.html",
      },
    ],
  },
  {
    id: "betreuung-in-stationaeren-einrichtungen-pflegeversicherung",
    who: "pflegebeduerftige",
    when: "pflegebeduerftig-werden",
    title: "Betreuung in stationären Einrichtungen (Pflegeversicherung)",
    summary:
      "In vollstationären Pflegeeinrichtungen haben Pflegebedürftige Anspruch auf zusätzliche Betreuungs- und Aktivierungsangebote, die über die reine pflegerische Versorgung hinausgehen und die Lebensqualität fördern.",
    resources: [
      {
        label:
          "sozialversicherung-kompetent.de – Vollstationäre Pflegeleistungen § 43b SGB XI",
        url: "https://sozialversicherung-kompetent.de/pflegeversicherung/leistungsrecht-ab-2017/680-vollstationaere-pflegeleistungen.html",
      },
      {
        label:
          "Diakonie – FAQ Leistungen der vollstationären Pflege ab 2025 (PDF)",
        url: "https://www.diakonie.de/diakonie_de/user_upload/diakonie.de/PDFs/Publikationen/2024-11-11_FAQ_Leistungen_vollstation%C3%A4re_Pflege.pdf",
      },
      {
        label:
          "pflegebox.de – Zusätzliche Betreuungsleistungen in stationärer Pflege",
        url: "https://pflegebox.de/ratgeber/pflegeleistungen/zusaetzliche-betreuungsleistungen/",
      },
      {
        label: "BMG – Vollstationäre Pflege: Leistungen der Pflegeversicherung",
        url: "https://www.bundesgesundheitsministerium.de/themen/pflege/leistungen-der-pflegeversicherung/stationaere-pflege.html",
      },
    ],
  },
  {
    id: "deckelung-des-eigenanteils-stationaere-pflege",
    who: "pflegebeduerftige",
    when: "pflegebeduerftig-werden",
    title: "Deckelung des Eigenanteils stationäre Pflege",
    summary:
      "Bei langfristiger vollstationärer Pflege wird der einrichtungseinheitliche Eigenanteil an den pflegebedingten Aufwendungen gedeckelt. Je länger die Heimunterbringung dauert, desto mehr übernimmt die Pflegekasse zuschussmäßig.",
    resources: [
      {
        label:
          "Sozialversicherung kompetent – Vollstationäre Pflegeleistungen § 43 SGB XI",
        url: "https://sozialversicherung-kompetent.de/pflegeversicherung/leistungsrecht-ab-2017/680-vollstationaere-pflegeleistungen.html",
      },
      {
        label:
          "DAK – Leistungszuschlag in vollstationärer Pflege (§ 43c SGB XI)",
        url: "https://www.dak.de/leistungserbringer-portal/pflege-leistungserbringer/leistungszuschlag-in-vollstationaerer-pflege_65140",
      },
      {
        label: "vdek – Glossar: Leistungszuschlag im Pflegeheim",
        url: "https://www.vdek.com/presse/glossar_gesundheitswesen/leistungszuschlag-pflegeheim.html",
      },
      {
        label:
          "BMG – Kabinettsbeschluss Pflegeunterstützungs- und Entlastungsgesetz (PUEG, April 2023)",
        url: "https://www.bundesgesundheitsministerium.de/presse/pressemitteilungen/pflegereform-kabinett-05-04-23",
      },
      {
        label:
          "Diakonie – FAQ Leistungen der vollstationären Pflege ab 01.01.2025 (PDF)",
        url: "https://www.diakonie.de/diakonie_de/user_upload/diakonie.de/PDFs/Publikationen/2024-11-11_FAQ_Leistungen_vollstation%C3%A4re_Pflege.pdf",
      },
    ],
  },
  {
    id: "zuschuesse-zur-kranken-und-pflegeversicherung-fuer-pflegende",
    who: "pflegende-angehoerige",
    when: "angehoerige-pflegen",
    title:
      "Zuschüsse zur Kranken- und Pflegeversicherung für pflegende Angehörige",
    summary:
      "Berufstätige, die für die Pflege eines Angehörigen Pflegezeit oder kurzzeitige Arbeitsverhinderung in Anspruch nehmen, erhalten Zuschüsse zur Kranken- und Pflegeversicherung, um ihre soziale Absicherung aufrechtzuerhalten.",
    resources: [
      {
        label:
          "BMG – Pflegeleistungen zum Nachschlagen (Broschüre, Stand 01/2026, PDF)",
        url: "https://www.bundesgesundheitsministerium.de/fileadmin/Dateien/5_Publikationen/Pflege/Broschueren/BMG_Pflegeleistungen_zum_Nachschlagen_bf.pdf",
      },
      {
        label: "dejure.org – § 44a SGB XI: Gesetzestext mit Kommentierung",
        url: "https://dejure.org/gesetze/SGB_XI/44a.html",
      },
    ],
  },
  {
    id: "alltagsunterstuetzende-angebote-pflegeversicherung",
    who: "pflegebeduerftige",
    when: "pflegebeduerftig-werden",
    title: "Alltagsunterstützende Angebote (Pflegeversicherung)",
    summary:
      "Pflegebedürftige können anerkannte Angebote zur Unterstützung im Alltag nutzen, etwa Betreuungsgruppen, haushaltsnahe Dienstleistungen oder Unterstützung bei Behördengängen. Ein Teil des Sachleistungsbudgets kann dafür umgewandelt werden.",
    resources: [
      {
        label: "BMG – Angebote zur Unterstützung im Alltag (§ 45a SGB XI)",
        url: "https://www.bundesgesundheitsministerium.de/pflege-zu-hause/weitere-leistungen-und-angebote-zur-unterstuetzung-im-alltag",
      },
      {
        label:
          "pflege.de – Alltagsunterstützende Angebote: Überblick und anerkannte Leistungen",
        url: "https://www.pflege.de/pflegekasse-pflegefinanzierung/pflegeleistungen/zusaetzliche-betreuungsleistungen-entlastungsleistungen-entlastungsbetrag/alltagsunterstuetzung/",
      },
      {
        label:
          "pflege.de – Umwandlungsanspruch: bis zu 40 % der Sachleistung umwandeln",
        url: "https://www.pflege.de/pflegekasse-pflegefinanzierung/pflegeleistungen/pflegesachleistungen/umwandlungsanspruch/",
      },
      {
        label:
          "BMG – Evaluation des Umwandlungsanspruchs nach § 45a Abs. 4 SGB XI (Kurzbericht)",
        url: "https://www.bundesgesundheitsministerium.de/service/publikationen/details/kurzbericht-zu-den-ergebnissen-der-evaluation-des-umwandlungsanspruchs-gemaess-45a-absatz-4-sgb-xi-im-rahmen-der-wissenschaftlichen-evaluation-der-umstellung-des-verfahrens-zur-feststellung-der-pflegebeduerftigkeit-18c-absatz-2-sgb-xi.html",
      },
    ],
  },
  {
    id: "entlastungsbetrag-pflegeversicherung",
    who: "pflegebeduerftige",
    when: "pflegebeduerftig-werden",
    title: "Entlastungsbetrag (Pflegeversicherung)",
    summary:
      "Alle Pflegebedürftigen ab Pflegegrad 1 erhalten monatlich einen Entlastungsbetrag von bis zu 131 Euro (ab 2025), der für anerkannte Alltagsunterstützungsangebote eingesetzt werden kann. Er ergänzt die übrigen Pflegeleistungen.",
    resources: [
      {
        label:
          "GKV-Spitzenverband – SPV-Kennzahlen (Entlastungsleistungen 2019–2025)",
        url: "https://www.gkv-spitzenverband.de/gkv_spitzenverband/presse/zahlen_und_grafiken/spv_kennzahlen/spv_kennzahlen.jsp",
      },
      {
        label: "BMG – Zahlen und Fakten zur Pflegeversicherung (PDF)",
        url: "https://www.bundesgesundheitsministerium.de/fileadmin/Dateien/3_Downloads/Statistiken/Pflegeversicherung/Zahlen_und_Fakten/Zahlen-Fakten_Pflegeversicherung.pdf",
      },
      {
        label:
          "BMG – Leistungsansprüche der Versicherten 2023 (Übersicht, PDF)",
        url: "https://www.bundesgesundheitsministerium.de/fileadmin/Dateien/3_Downloads/Statistiken/Pflegeversicherung/Leistungen/UEbersicht_Leistungsbetraege_2023.pdf",
      },
    ],
  },
  {
    id: "einmalige-bedarfe-sozialhilfe",
    who: "senior",
    when: "existenzsicherung",
    title: "Einmalige Bedarfe (Sozialhilfe)",
    summary:
      "Sozialhilfeempfänger können Leistungen für einmalige Bedarfe erhalten, etwa Erstausstattung für die Wohnung, Bekleidungserstausstattung bei Schwangerschaft sowie mehrtägige Klassenfahrten für Kinder.",
    resources: [
      {
        label: "dejure.org – § 31 SGB XII: Gesetzestext mit Kommentierung",
        url: "https://dejure.org/gesetze/SGB_XII/31.html",
      },
      {
        label: "BMAS – Sozialhilfe: Leistungen im Überblick",
        url: "https://www.bmas.de/DE/Soziales/Sozialhilfe/sozialhilfe.html",
      },
      {
        label:
          "Destatis – Ausgaben für Sozialhilfe 2024 um 14,8 % gestiegen (Pressemitteilung)",
        url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2025/08/PD25_303_221.html",
      },
    ],
  },
  {
    id: "kranken-und-pflegeversicherungsbeitraege-sozialhilfe",
    who: "pflegebeduerftige",
    when: "existenzsicherung",
    title: "Kranken- und Pflegeversicherungsbeiträge (Sozialhilfe)",
    summary:
      "Sozialhilfeempfänger erhalten Leistungen zur Deckung ihrer Beiträge zur Kranken- und Pflegeversicherung, sofern diese nicht anderweitig übernommen werden. So bleibt der Krankenversicherungsschutz auch bei Sozialhilfebezug erhalten.",
    resources: [
      {
        label: "dejure.org – § 32 SGB XII: Gesetzestext mit Kommentierung",
        url: "https://dejure.org/gesetze/SGB_XII/32.html",
      },
      {
        label: "BMAS – Sozialhilfe: Leistungen im Überblick",
        url: "https://www.bmas.de/DE/Soziales/Sozialhilfe/sozialhilfe.html",
      },
      {
        label:
          "Destatis – Sozial- und Eingliederungshilfe: Übersicht Hilfearten SGB XII",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Sozialhilfe/_inhalt.html",
      },
    ],
  },
  {
    id: "bildungs-und-teilhabeleistungen-sozialhilfe",
    who: "senior",
    when: "existenzsicherung",
    title: "Bildungs- und Teilhabeleistungen (Sozialhilfe)",
    summary:
      "Kinder und Jugendliche, deren Eltern Sozialhilfe beziehen, haben Anspruch auf Leistungen für Bildung und gesellschaftliche Teilhabe, z.B. Schulbedarf, Mittagessen, Lernförderung, Schülerbeförderung und außerschulische Aktivitäten.",
    resources: [
      {
        label: "BMAS – Bildungspaket: Leistungen im Überblick",
        url: "https://www.bmas.de/DE/Arbeit/Grundsicherung-Buergergeld/Bildungspaket/bildungspaket.html",
      },
      {
        label:
          "Destatis – Empfänger von Bildungs- und Teilhabeleistungen (SGB XII, Q2 2024)",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Sozialhilfe/Tabellen/hlu-but-t03-2024-bq2-bl-bedarfe.html",
      },
      {
        label: "BMAS – Sozialbudget 2024",
        url: "https://www.bmas.de/DE/Service/Publikationen/Broschueren/a230-25-sozialbudget-2024.html",
      },
    ],
  },
  {
    id: "kosten-der-unterkunft-und-heizung-sozialhilfe",
    who: "senior",
    when: "existenzsicherung",
    title: "Kosten der Unterkunft und Heizung (Sozialhilfe)",
    summary:
      "Sozialhilfeempfänger haben Anspruch auf Übernahme der tatsächlichen angemessenen Kosten für Unterkunft und Heizung. Was als angemessen gilt, richtet sich nach den örtlichen Gegebenheiten.",
    resources: [
      {
        label: "dejure.org – § 35 SGB XII: Gesetzestext mit Kommentierung",
        url: "https://dejure.org/gesetze/SGB_XII/35.html",
      },
      {
        label: "BMAS – Sozialhilfe: Leistungen im Überblick",
        url: "https://www.bmas.de/DE/Soziales/Sozialhilfe/sozialhilfe.html",
      },
      {
        label:
          "Destatis – Ausgaben und Einnahmen der Sozialhilfe nach SGB XII (Tabelle)",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Sozialhilfe/Tabellen/ausgaben-einnahmen-t03-bruttoausgaben-hilfearten-laender.html",
      },
    ],
  },
  {
    id: "schuldenuebernahme-zur-sicherung-der-unterkunft-sozialhilfe",
    who: "senior",
    when: "existenzsicherung",
    title: "Schuldenübernahme zur Sicherung der Unterkunft (Sozialhilfe)",
    summary:
      "Um Obdachlosigkeit zu vermeiden, können Mietschulden oder vergleichbare Schulden als Darlehen oder Beihilfe übernommen werden, wenn dadurch die Unterkunft gesichert werden kann.",
    resources: [
      {
        label: "dejure.org – § 36 SGB XII: Gesetzestext mit Kommentierung",
        url: "https://dejure.org/gesetze/SGB_XII/36.html",
      },
      {
        label:
          "BMAS – Sozialhilfe: Übernahme von Schulden und Wohnungssicherung",
        url: "https://www.bmas.de/DE/Soziales/Sozialhilfe/sozialhilfe.html",
      },
    ],
  },
  {
    id: "ergaenzendes-darlehen-sozialhilfe",
    who: "senior",
    when: "existenzsicherung",
    title: "Ergänzendes Darlehen (Sozialhilfe)",
    summary:
      "Wenn Sozialhilfeempfänger unabweisbare Bedarfe nicht aus dem Regelsatz decken können, können sie ein zinsloses Darlehen erhalten. Das Darlehen wird durch Aufrechnung mit künftigen Leistungen zurückgezahlt.",
    resources: [
      {
        label: "dejure.org – § 37 SGB XII: Gesetzestext mit Kommentierung",
        url: "https://dejure.org/gesetze/SGB_XII/37.html",
      },
      {
        label: "BMAS – Sozialhilfe: Leistungen im Überblick",
        url: "https://www.bmas.de/DE/Soziales/Sozialhilfe/sozialhilfe.html",
      },
    ],
  },
  {
    id: "darlehen-bei-nachschuessigem-einkommen-sozialhilfe",
    who: "senior",
    when: "existenzsicherung",
    title: "Darlehen bei nachschüssigem Einkommen (Sozialhilfe)",
    summary:
      "Wenn das Einkommen erst am Monatsende fließt (z.B. Rente), kann zu Beginn des Monats ein Darlehen zur Deckung des Lebensunterhalts gewährt werden. Das Darlehen wird mit dem Eingang des Einkommens verrechnet.",
    resources: [
      {
        label: "dejure.org – § 37a SGB XII: Gesetzestext mit Kommentierung",
        url: "https://dejure.org/gesetze/SGB_XII/37a.html",
      },
      {
        label: "BMAS – Sozialhilfe: Leistungen im Überblick",
        url: "https://www.bmas.de/DE/Soziales/Sozialhilfe/sozialhilfe.html",
      },
    ],
  },
  {
    id: "vorbeugende-gesundheitshilfe-sozialhilfe",
    who: "senior",
    when: "existenzsicherung",
    title: "Vorbeugende Gesundheitshilfe (Sozialhilfe)",
    summary:
      "Sozialhilfeempfänger haben Anspruch auf vorbeugende Gesundheitshilfe, einschließlich medizinischer Vorsorgeuntersuchungen und Maßnahmen zur Früherkennung von Krankheiten, auch wenn kein akuter Behandlungsbedarf besteht.",
    resources: [
      {
        label: "dejure.org – § 47 SGB XII: Gesetzestext mit Kommentierung",
        url: "https://dejure.org/gesetze/SGB_XII/47.html",
      },
      {
        label: "BMAS – Sozialhilfe: Leistungen im Überblick",
        url: "https://www.bmas.de/DE/Soziales/Sozialhilfe/sozialhilfe.html",
      },
    ],
  },
  {
    id: "hilfe-bei-krankheit-sozialhilfe",
    who: "senior",
    when: "existenzsicherung",
    title: "Hilfe bei Krankheit (Sozialhilfe)",
    summary:
      "Sozialhilfeempfänger, die nicht oder nur teilweise gesetzlich krankenversichert sind, erhalten Hilfe bei Krankheit. Diese umfasst Krankenbehandlung, Arzneimittel und weitere medizinisch notwendige Leistungen.",
    resources: [
      {
        label: "dejure.org – § 48 SGB XII: Gesetzestext mit Kommentierung",
        url: "https://dejure.org/gesetze/SGB_XII/48.html",
      },
      {
        label: "BMAS – Sozialhilfe: Hilfe bei Krankheit",
        url: "https://www.bmas.de/DE/Soziales/Sozialhilfe/sozialhilfe.html",
      },
      {
        label:
          "Destatis – Sozial- und Eingliederungshilfe: Empfänger nach Hilfearten SGB XII",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Sozialhilfe/Tabellen/t014-kap5-9-empf-insg-hilfearten-alter-odl-ilj.html",
      },
    ],
  },
  {
    id: "hilfe-zur-familienplanung-sozialhilfe",
    who: "senior",
    when: "existenzsicherung",
    title: "Hilfe zur Familienplanung (Sozialhilfe)",
    summary:
      "Sozialhilfeempfänger haben Anspruch auf ärztliche Beratung, Untersuchung und Verordnung von Verhütungsmitteln zur Familienplanung. Die Kosten werden vom Sozialhilfeträger übernommen.",
    resources: [
      {
        label: "dejure.org – § 49 SGB XII: Gesetzestext mit Kommentierung",
        url: "https://dejure.org/gesetze/SGB_XII/49.html",
      },
      {
        label: "BMAS – Sozialhilfe: Leistungen im Überblick",
        url: "https://www.bmas.de/DE/Soziales/Sozialhilfe/sozialhilfe.html",
      },
    ],
  },
  {
    id: "hilfe-bei-schwangerschaft-und-mutterschaft-sozialhilfe",
    who: "alle",
    when: "existenzsicherung",
    title: "Hilfe bei Schwangerschaft und Mutterschaft (Sozialhilfe)",
    summary:
      "Schwangere und Wöchnerinnen, die Sozialhilfe beziehen, erhalten Hilfe bei Schwangerschaft und Mutterschaft. Dies umfasst ärztliche Betreuung, Hebammenhilfe, Arznei- und Hilfsmittel sowie Entbindungskosten.",
    resources: [
      {
        label: "dejure.org – § 50 SGB XII: Gesetzestext mit Kommentierung",
        url: "https://dejure.org/gesetze/SGB_XII/50.html",
      },
      {
        label: "BMAS – Sozialhilfe: Leistungen im Überblick",
        url: "https://www.bmas.de/DE/Soziales/Sozialhilfe/sozialhilfe.html",
      },
    ],
  },
  {
    id: "hilfe-bei-sterilisation-sozialhilfe",
    who: "pflegebeduerftige",
    when: "existenzsicherung",
    title: "Hilfe bei Sterilisation (Sozialhilfe)",
    summary:
      "Sozialhilfeempfänger haben Anspruch auf Übernahme der Kosten für eine medizinisch notwendige Sterilisation, einschließlich ärztlicher Untersuchung, Beratung und Begutachtung.",
    resources: [
      {
        label: "dejure.org – § 51 SGB XII: Gesetzestext mit Kommentierung",
        url: "https://dejure.org/gesetze/SGB_XII/51.html",
      },
      {
        label: "BMAS – Sozialhilfe: Leistungen im Überblick",
        url: "https://www.bmas.de/DE/Soziales/Sozialhilfe/sozialhilfe.html",
      },
    ],
  },
  {
    id: "pflegegeld-sozialhilfe",
    who: "pflegebeduerftige",
    when: "existenzsicherung",
    title: "Pflegegeld (Sozialhilfe)",
    summary:
      "Pflegebedürftige Sozialhilfeempfänger, die zu Hause gepflegt werden, können Pflegegeld aus der Sozialhilfe erhalten, wenn sie keinen Anspruch auf Leistungen der Pflegeversicherung haben oder diese nicht ausreichen.",
    resources: [
      {
        label:
          "Destatis – Hilfe zur Pflege: knapp 432.000 Empfänger 2024 (Pressemitteilung)",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Sozialhilfe/empfaenger-hilfe-pflege.html",
      },
      {
        label: "BMAS – Hilfe zur Pflege (7. Kapitel SGB XII)",
        url: "https://www.bmas.de/DE/Soziales/Pflege/hilfe-zur-pflege.html",
      },
      {
        label:
          "Bundestag WD – Die Hilfe zur Pflege gemäß §§ 61 ff. SGB XII (2024, PDF)",
        url: "https://www.bundestag.de/resource/blob/1031424/WD-6-065-24-pdf.pdf",
      },
    ],
  },
  {
    id: "haeusliche-pflegehilfe-sozialhilfe",
    who: "pflegebeduerftige",
    when: "existenzsicherung",
    title: "Häusliche Pflegehilfe (Sozialhilfe)",
    summary:
      "Pflegebedürftige Sozialhilfeempfänger haben Anspruch auf häusliche Pflegehilfe durch zugelassene Pflegedienste. Der Sozialhilfeträger übernimmt die Kosten, soweit die Pflegeversicherung nicht ausreicht.",
    resources: [
      {
        label: "Destatis – Hilfe zur Pflege 2024: Empfänger und Ausgaben",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Sozialhilfe/empfaenger-hilfe-pflege.html",
      },
      {
        label: "BMAS – Hilfe zur Pflege (7. Kapitel SGB XII)",
        url: "https://www.bmas.de/DE/Soziales/Pflege/hilfe-zur-pflege.html",
      },
      {
        label: "Destatis – Glossar: Hilfe zur Pflege (SGB XII)",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Sozialhilfe/Glossar/hilfe-zur-pflege.html",
      },
    ],
  },
  {
    id: "pflegehilfsmittel-sozialhilfe",
    who: "pflegebeduerftige",
    when: "existenzsicherung",
    title: "Pflegehilfsmittel (Sozialhilfe)",
    summary:
      "Pflegebedürftige Sozialhilfeempfänger haben Anspruch auf Pflegehilfsmittel, die zur häuslichen Pflege notwendig sind. Der Sozialhilfeträger übernimmt die Kosten ergänzend zur Pflegeversicherung.",
    resources: [
      {
        label: "BMAS – Hilfe zur Pflege (7. Kapitel SGB XII)",
        url: "https://www.bmas.de/DE/Soziales/Pflege/hilfe-zur-pflege.html",
      },
      {
        label:
          "Bundestag WD – Die Hilfe zur Pflege gemäß §§ 61 ff. SGB XII (2024, PDF)",
        url: "https://www.bundestag.de/resource/blob/1031424/WD-6-065-24-pdf.pdf",
      },
    ],
  },
  {
    id: "wohnumfeldverbesserung-sozialhilfe",
    who: "pflegebeduerftige",
    when: "existenzsicherung",
    title: "Wohnumfeldverbesserung (Sozialhilfe)",
    summary:
      "Sozialhilfeempfänger können Zuschüsse für Maßnahmen erhalten, die das Wohnumfeld barrierefrei gestalten und so häusliche Pflege ermöglichen oder erleichtern.",
    resources: [
      {
        label: "BMAS – Hilfe zur Pflege (7. Kapitel SGB XII)",
        url: "https://www.bmas.de/DE/Soziales/Pflege/hilfe-zur-pflege.html",
      },
      {
        label:
          "Bundestag WD – Die Hilfe zur Pflege gemäß §§ 61 ff. SGB XII (2024, PDF)",
        url: "https://www.bundestag.de/resource/blob/1031424/WD-6-065-24-pdf.pdf",
      },
    ],
  },
  {
    id: "ergaenzende-pflegeleistungen-sozialhilfe",
    who: "pflegebeduerftige",
    when: "existenzsicherung",
    title: "Ergänzende Pflegeleistungen (Sozialhilfe)",
    summary:
      "Ergänzend zu den regulären Pflegeleistungen können Sozialhilfeempfänger Erstattung von Beiträgen zur Alterssicherung der Pflegeperson sowie weitere zusätzliche Leistungen erhalten, soweit sie notwendig sind.",
    resources: [
      {
        label: "BMAS – Hilfe zur Pflege (7. Kapitel SGB XII)",
        url: "https://www.bmas.de/DE/Soziales/Pflege/hilfe-zur-pflege.html",
      },
      {
        label:
          "Bundestag WD – Die Hilfe zur Pflege gemäß §§ 61 ff. SGB XII (2024, PDF)",
        url: "https://www.bundestag.de/resource/blob/1031424/WD-6-065-24-pdf.pdf",
      },
    ],
  },
  {
    id: "teilstationaere-pflege-sozialhilfe",
    who: "pflegebeduerftige",
    when: "existenzsicherung",
    title: "Teilstationäre Pflege (Sozialhilfe)",
    summary:
      "Pflegebedürftige Sozialhilfeempfänger haben Anspruch auf Tages- oder Nachtpflege in einer teilstationären Einrichtung, wenn häusliche Pflege nicht in vollem Umfang sichergestellt werden kann.",
    resources: [
      {
        label: "Destatis – Hilfe zur Pflege 2024: Empfänger und Ausgaben",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Sozialhilfe/empfaenger-hilfe-pflege.html",
      },
      {
        label: "BMAS – Hilfe zur Pflege (7. Kapitel SGB XII)",
        url: "https://www.bmas.de/DE/Soziales/Pflege/hilfe-zur-pflege.html",
      },
    ],
  },
  {
    id: "kurzzeitpflege-sozialhilfe",
    who: "pflegebeduerftige",
    when: "existenzsicherung",
    title: "Kurzzeitpflege (Sozialhilfe)",
    summary:
      "Pflegebedürftige Sozialhilfeempfänger haben Anspruch auf Kurzzeitpflege in einer stationären Einrichtung, wenn häusliche Pflege vorübergehend nicht möglich ist.",
    resources: [
      {
        label: "BMAS – Hilfe zur Pflege: Überblick",
        url: "https://www.bmas.de/DE/Soziales/Pflege/hilfe-zur-pflege.html",
      },
      {
        label:
          "§ 42 SGB XI – Kurzzeitpflege (Pflegeversicherung, vorrangige Leistung)",
        url: "https://www.gesetze-im-internet.de/sgb_11/__42.html",
      },
      {
        label: "Verbraucherzentrale – Kurzzeitpflege: Kosten und Finanzierung",
        url: "https://www.verbraucherzentrale.de/wissen/gesundheit-pflege/pflegeversicherung/kurzzeitpflege-finanzierung-kosten-und-alternativen-6603",
      },
    ],
  },
  {
    id: "entlastungsbetrag-fuer-pflegebeduerftige-sozialhilfe",
    who: "pflegebeduerftige",
    when: "existenzsicherung",
    title: "Entlastungsbetrag für Pflegebedürftige (Sozialhilfe)",
    summary:
      "Pflegebedürftige Sozialhilfeempfänger erhalten einen monatlichen Entlastungsbetrag für anerkannte Alltags­unterstützungsangebote – 125 Euro ab Pflegegrad 2, sowie ergänzende Leistungen für Pflegegrad 1.",
    resources: [
      {
        label: "BMAS – Hilfe zur Pflege (7. Kapitel SGB XII)",
        url: "https://www.bmas.de/DE/Soziales/Pflege/hilfe-zur-pflege.html",
      },
      {
        label:
          "Bundestag WD – Die Hilfe zur Pflege gemäß §§ 61 ff. SGB XII (2024, PDF)",
        url: "https://www.bundestag.de/resource/blob/1031424/WD-6-065-24-pdf.pdf",
      },
    ],
  },
  {
    id: "digitale-pflegeanwendungen-sozialhilfe",
    who: "pflegebeduerftige",
    when: "existenzsicherung",
    title: "Digitale Pflegeanwendungen (Sozialhilfe)",
    summary:
      "Pflegebedürftige Sozialhilfeempfänger haben Anspruch auf Versorgung mit zugelassenen digitalen Pflegeanwendungen (DiPA), die die Selbstständigkeit fördern und den Pflegealltag erleichtern.",
    resources: [
      {
        label:
          "BfArM – DiPA-Verzeichnis: zugelassene digitale Pflegeanwendungen",
        url: "https://www.bfarm.de/DE/Medizinprodukte/Aufgaben/DiGA-und-DiPA/_verteilerseite.html",
      },
      {
        label: "BMAS – Hilfe zur Pflege (7. Kapitel SGB XII)",
        url: "https://www.bmas.de/DE/Soziales/Pflege/hilfe-zur-pflege.html",
      },
      {
        label: "BfArM – Wissenswertes zu DiPA (Zulassung und Verzeichnis)",
        url: "https://www.bfarm.de/DE/Medizinprodukte/Aufgaben/DiGA-und-DiPA/DiPA/Wissenswertes/_node.html",
      },
    ],
  },
  {
    id: "vollstationaere-pflege-sozialhilfe",
    who: "pflegebeduerftige",
    when: "existenzsicherung",
    title: "Vollstationäre Pflege (Sozialhilfe)",
    summary:
      "Pflegebedürftige Sozialhilfeempfänger, die dauerhaft in einem Pflegeheim untergebracht sind, erhalten Hilfe zur Pflege durch den Sozialhilfeträger, soweit die Pflegeversicherung und eigenes Einkommen nicht ausreichen.",
    resources: [
      {
        label:
          "Destatis – Hilfe zur Pflege 2024: knapp 432.000 Empfänger, davon stationär",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Sozialhilfe/empfaenger-hilfe-pflege.html",
      },
      {
        label: "BMAS – Hilfe zur Pflege (7. Kapitel SGB XII)",
        url: "https://www.bmas.de/DE/Soziales/Pflege/hilfe-zur-pflege.html",
      },
      {
        label:
          "Bundestag WD – Die Hilfe zur Pflege gemäß §§ 61 ff. SGB XII (2024, PDF)",
        url: "https://www.bundestag.de/resource/blob/1031424/WD-6-065-24-pdf.pdf",
      },
    ],
  },
  {
    id: "hilfe-zur-weiterfuehrung-des-haushalts-sozialhilfe",
    who: "behinderung",
    when: "behinderung-teilhabe",
    title: "Hilfe zur Weiterführung des Haushalts (Sozialhilfe)",
    summary:
      "Sozialhilfeempfänger, die ihren Haushalt wegen Krankheit oder Behinderung vorübergehend nicht führen können, haben Anspruch auf Hilfe zur Weiterführung des Haushalts, z.B. durch eine Haushaltshilfe.",
    resources: [
      {
        label: "dejure.org – § 70 SGB XII: Gesetzestext mit Kommentierung",
        url: "https://dejure.org/gesetze/SGB_XII/70.html",
      },
      {
        label: "BMAS – Sozialhilfe: Leistungen im Überblick",
        url: "https://www.bmas.de/DE/Soziales/Sozialhilfe/sozialhilfe.html",
      },
    ],
  },
  {
    id: "altenhilfe",
    who: "pflegebeduerftige",
    when: "existenzsicherung",
    title: "Altenhilfe",
    summary:
      "Ältere Menschen haben Anspruch auf Altenhilfe, die ihnen ermöglicht, am gesellschaftlichen Leben teilzunehmen und Schwierigkeiten des Alters zu überwinden. Leistungen umfassen Beratung, Beschäftigungsangebote und Hilfe bei der Wohnungsbeschaffung.",
    resources: [
      {
        label:
          "betanet – Altenhilfe nach § 71 SGB XII: Leistungen im Überblick",
        url: "https://www.betanet.de/sozialhilfe-altenhilfe.html",
      },
      {
        label:
          "BAGSO – Rechtsgutachten: Altenhilfe nach § 71 SGB XII (2022, PDF)",
        url: "https://www.bagso.de/fileadmin/user_upload/bagso/06_Veroeffentlichungen/2022/BAGSO_Rechtsgutachten_Altenhilfe_.pdf",
      },
      {
        label:
          "Deutscher Verein – Empfehlungen zur Umsetzung des § 71 SGB XII (2024)",
        url: "https://www.deutscher-verein.de/fileadmin/user_upload/dv/pdfs/Empfehlungen_Stellungnahmen/2024/DV-13-23_Umsetzung_71_SGB_XII.pdf",
      },
    ],
  },
  {
    id: "blindenhilfe",
    who: "behinderung",
    when: "behinderung-teilhabe",
    title: "Blindenhilfe",
    summary:
      "Blinde Menschen erhalten monatliche Blindenhilfe zum Ausgleich der durch die Blindheit bedingten Mehraufwendungen, sofern sie keinen entsprechenden Anspruch aus anderen Leistungsgesetzen haben.",
    resources: [
      {
        label:
          "DBSV – Überblick: Landesblindengeld und Blindenhilfe im Vergleich",
        url: "https://www.dbsv.org/infothek/ratgeber/blindengeld.html",
      },
      {
        label: "BMAS – Sozialhilfe: Blindenhilfe nach § 72 SGB XII",
        url: "https://www.bmas.de/DE/Soziales/Sozialhilfe/sozialhilfe.html",
      },
      {
        label: "Gesetze-im-Internet – § 33b EStG (Blindenpauschbetrag)",
        url: "https://www.gesetze-im-internet.de/estg/__33b.html",
      },
    ],
  },
  {
    id: "hilfe-in-sonstigen-lebenslagen-sozialhilfe",
    who: "senior",
    when: "existenzsicherung",
    title: "Hilfe in sonstigen Lebenslagen (Sozialhilfe)",
    summary:
      "Als Auffangregelung können Sozialhilfeleistungen auch in sonstigen besonderen Lebenslagen erbracht werden, wenn dies gerechtfertigt ist und andere Leistungsgesetze nicht greifen.",
    resources: [
      {
        label: "dejure.org – § 73 SGB XII: Gesetzestext mit Kommentierung",
        url: "https://dejure.org/gesetze/SGB_XII/73.html",
      },
      {
        label: "BMAS – Sozialhilfe: Leistungen im Überblick",
        url: "https://www.bmas.de/DE/Soziales/Sozialhilfe/sozialhilfe.html",
      },
    ],
  },
  {
    id: "uebernahme-von-bestattungskosten-sozialhilfe",
    who: "senior",
    when: "existenzsicherung",
    title: "Übernahme von Bestattungskosten (Sozialhilfe)",
    summary:
      "Wenn Angehörige nicht in der Lage sind, die Kosten einer Bestattung zu tragen, übernimmt der Sozialhilfeträger die notwendigen Bestattungskosten.",
    resources: [
      {
        label: "dejure.org – § 74 SGB XII: Gesetzestext mit Kommentierung",
        url: "https://dejure.org/gesetze/SGB_XII/74.html",
      },
      {
        label:
          "Hamburg Arbeitshilfe – § 74 SGB XII: Sozialbestattung (Fachliche Vorgaben)",
        url: "https://www.hamburg.de/politik-und-verwaltung/behoerden/sozialbehoerde/rechtliche-grundlagen/infoline/fachliche-vorgaben-und-hinweise/sgb-xii-sozialhilfe/ah-sgbxii-74-sozialbestattung-45814",
      },
      {
        label: "Destatis – Ausgaben für Sozialhilfe 2024 (Pressemitteilung)",
        url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2025/08/PD25_303_221.html",
      },
    ],
  },
  {
    id: "leistungen-fuer-zivildienstgeschaedigte",
    who: "alle",
    when: "opfer-gewalt-krieg",
    title: "Leistungen für Zivildienstgeschädigte",
    summary:
      "Personen, die im Zivildienst einen Gesundheitsschaden erlitten haben, sowie ihre Hinterbliebenen haben Anspruch auf Leistungen der Sozialen Entschädigung nach SGB XIV.",
    resources: [
      {
        label:
          "§ 23 SGB XIV – Geschädigte durch Ereignisse im Zivildienst (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/sgb_14/__23.html",
      },
      {
        label: "BMAS: FAQ zum Sozialen Entschädigungsrecht – inkl. Zivildienst",
        url: "https://www.bmas.de/DE/Soziales/Soziale-Entschaedigung/Fragen-und-Antworten/faq-ser.html",
      },
      {
        label:
          "SGB XIV: Soziale Entschädigung nach Gesundheitsschäden – Niedersachsen",
        url: "https://soziales.niedersachsen.de/startseite/soziales_gesundheit/soziales_entschadigungsrecht/soziale_entschadigung_nach_gesundheitsschaden_sgb_xiv/informationen-zum-sozialgesetzbuch-vierzehntes-buch-soziale-entschadigung-sgb-xiv-229098.html",
      },
    ],
  },
  {
    id: "traumaambulanz-soziale-entschaedigung",
    who: "alle",
    when: "opfer-gewalt-krieg",
    title: "Traumaambulanz (Soziale Entschädigung)",
    summary:
      "Opfer von Gewalttaten und anderen schädigenden Ereignissen können in einer Traumaambulanz psychotherapeutische Sofortinterventionen erhalten, um die Entstehung psychischer Erkrankungen zu verhindern.",
    resources: [
      {
        label: "BMAS – Soziale Entschädigung (SGB XIV Überblick)",
        url: "https://www.bmas.de/DE/Soziales/Soziale-Entschaedigung/soziale-entschaedigung.html",
      },
      {
        label: "BMAS – Traumaambulanzen im neuen Recht",
        url: "https://www.bmas.de/DE/Soziales/Soziale-Entschaedigung/Traumaambulanzen/traumaambulanzen.html",
      },
    ],
  },
  {
    id: "krankenbehandlung-soziale-entschaedigung",
    who: "alle",
    when: "opfer-gewalt-krieg",
    title: "Krankenbehandlung (Soziale Entschädigung)",
    summary:
      "Anerkannte Geschädigte haben Anspruch auf Krankenbehandlung für Schädigungsfolgen, die über die GKV-Leistungen hinausgehen kann. Die Soziale Entschädigung trägt die Kosten, soweit sie nicht von der GKV gedeckt werden.",
    resources: [
      {
        label: "BMAS – Krankenbehandlung (Soziale Entschädigung, SGB XIV)",
        url: "https://www.bmas.de/DE/Soziales/Soziale-Entschaedigung/Neues-Soziales-Entschaedigungsrecht/Krankenbehandlung/krankenbehandlung.html",
      },
      {
        label: "§ 41 SGB XIV – Anspruch auf Leistungen der Krankenbehandlung",
        url: "https://www.gesetze-im-internet.de/sgb_14/__41.html",
      },
      {
        label: "BMAS – FAQ zum Sozialen Entschädigungsrecht",
        url: "https://www.bmas.de/DE/Soziales/Soziale-Entschaedigung/Fragen-und-Antworten/faq-ser.html",
      },
    ],
  },
  {
    id: "hilfsmittel-und-kleidungsverschleiss-pauschale-soziale-entsc",
    who: "alle",
    when: "opfer-gewalt-krieg",
    title:
      "Hilfsmittel und Kleidungsverschleiß-Pauschale (Soziale Entschädigung)",
    summary:
      "Geschädigte haben Anspruch auf Versorgung mit Hilfsmitteln sowie auf eine Pauschale für außergewöhnlichen Verschleiß von Kleidung und Wäsche, der durch die Schädigungsfolgen bedingt ist.",
    resources: [
      {
        label:
          "§ 46 SGB XIV – Versorgung mit Hilfsmitteln, Pauschbetrag für außergewöhnlichen Verschleiß (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/sgb_14/__46.html",
      },
      {
        label:
          "§ 46 SGB XIV – Hilfsmittel und Kleidungsverschleiß-Pauschale (buzer.de, mit Querverweisen)",
        url: "https://www.buzer.de/46_SGB_14.htm",
      },
    ],
  },
  {
    id: "krankengeld-der-sozialen-entschaedigung",
    who: "alle",
    when: "opfer-gewalt-krieg",
    title: "Krankengeld der Sozialen Entschädigung",
    summary:
      "Geschädigte, die aufgrund anerkannter Schädigungsfolgen arbeitsunfähig sind, erhalten Krankengeld der Sozialen Entschädigung, wenn sie keinen Anspruch auf Verdienstausfall aus anderen Quellen haben.",
    resources: [
      {
        label:
          "§ 47 SGB XIV – Krankengeld der Sozialen Entschädigung (Gesetzestext)",
        url: "https://www.gesetze-im-internet.de/sgb_14/__47.html",
      },
      {
        label:
          "Krankengeld der Sozialen Entschädigung – Anspruch, Höhe, Dauer (betanet)",
        url: "https://www.betanet.de/krankengeld-soziale-entschaedigung.html",
      },
      {
        label: "Soziale Entschädigung – Übersicht aller Leistungen (BMAS)",
        url: "https://www.bmas.de/DE/Soziales/Soziale-Entschaedigung/soziale-entschaedigung.html",
      },
    ],
  },
  {
    id: "beihilfe-bei-beeintraechtigung-der-erwerbsgrundlage",
    who: "alle",
    when: "opfer-gewalt-krieg",
    title: "Beihilfe bei Beeinträchtigung der Erwerbsgrundlage",
    summary:
      "Geschädigte, deren Erwerbsgrundlage erheblich beeinträchtigt ist, können eine finanzielle Beihilfe erhalten, um wirtschaftliche Notlagen infolge der Schädigung zu mildern.",
    resources: [
      {
        label:
          "§ 48 SGB XIV – Beihilfe bei erheblicher Beeinträchtigung der Erwerbsgrundlage (Gesetze im Internet)",
        url: "https://www.gesetze-im-internet.de/sgb_14/__48.html",
      },
      {
        label: "§ 48 SGB XIV – Beihilfe Erwerbsgrundlage (dejure.org)",
        url: "https://dejure.org/gesetze/SGB_XIV/48.html",
      },
      {
        label: "BMAS-Broschüre: Das Soziale Entschädigungsrecht – SGB XIV",
        url: "https://www.bmas.de/DE/Service/Publikationen/Broschueren/an-714-soziale-entschaedigungsrecht-sgb-xiv.html",
      },
    ],
  },
  {
    id: "zuschuss-zu-zahnersatz-soziale-entschaedigung",
    who: "alle",
    when: "opfer-gewalt-krieg",
    title: "Zuschuss zu Zahnersatz (Soziale Entschädigung)",
    summary:
      "Geschädigte, die aufgrund von Schädigungsfolgen Zahnersatz benötigen, erhalten einen Zuschuss zu den Kosten, der über den GKV-Festbetrag hinausgehen kann.",
    resources: [
      {
        label: "§ 49 SGB XIV – Zuschüsse bei Zahnersatz (dejure.org)",
        url: "https://dejure.org/gesetze/SGB_XIV/49.html",
      },
      {
        label: "BMAS – FAQ zum Sozialen Entschädigungsrecht (SGB XIV)",
        url: "https://www.bmas.de/DE/Soziales/Soziale-Entschaedigung/Fragen-und-Antworten/faq-ser.html",
      },
      {
        label:
          "Nds. Landesamt – Informationen zum SGB XIV (Soziale Entschädigung)",
        url: "https://soziales.niedersachsen.de/startseite/soziales_gesundheit/soziales_entschadigungsrecht/soziale_entschadigung_nach_gesundheitsschaden_sgb_xiv/informationen-zum-sozialgesetzbuch-vierzehntes-buch-soziale-entschadigung-sgb-xiv-229098.html",
      },
    ],
  },
  {
    id: "sozialversicherungsbeitraege-bei-krankengeldbezug-soziale-en",
    who: "alle",
    when: "opfer-gewalt-krieg",
    title:
      "Sozialversicherungsbeiträge bei Krankengeldbezug (Soziale Entschädigung)",
    summary:
      "Während des Bezugs von Krankengeld der Sozialen Entschädigung werden Beiträge zur Arbeitsförderung und zur gesetzlichen Rentenversicherung entrichtet, um die soziale Absicherung der Geschädigten zu gewährleisten.",
    resources: [
      {
        label:
          "§ 52 SGB XIV – Beiträge zur Arbeitsförderung, Rentenversicherung und Alterssicherung (buzer.de)",
        url: "https://www.buzer.de/52_SGB_14.htm",
      },
      {
        label:
          "§ 47 SGB XIV – Krankengeld der Sozialen Entschädigung (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/sgb_14/__47.html",
      },
      {
        label:
          "SGB XIV Soziale Entschädigung – Informationen des Landes Niedersachsen",
        url: "https://soziales.niedersachsen.de/startseite/soziales_gesundheit/soziales_entschadigungsrecht/soziale_entschadigung_nach_gesundheitsschaden_sgb_xiv/informationen-zum-sozialgesetzbuch-vierzehntes-buch-soziale-entschadigung-sgb-xiv-229098.html",
      },
    ],
  },
  {
    id: "reisekosten-soziale-entschaedigung",
    who: "alle",
    when: "opfer-gewalt-krieg",
    title: "Reisekosten (Soziale Entschädigung)",
    summary:
      "Im Zusammenhang mit Leistungen der Sozialen Entschädigung werden notwendige Reisekosten einschließlich Gepäcktransport und Reisenebenkosten übernommen.",
    resources: [
      {
        label: "§ 53 SGB XIV – Reisekosten (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/sgb_14/__53.html",
      },
      {
        label: "§ 53 SGB XIV – Reisekosten (dejure.org)",
        url: "https://dejure.org/gesetze/SGB_XIV/53.html",
      },
      {
        label: "Soziale Entschädigung – BMAS Übersicht",
        url: "https://www.bmas.de/DE/Soziales/Soziale-Entschaedigung/soziale-entschaedigung.html",
      },
    ],
  },
  {
    id: "teilhabe-am-arbeitsleben-soziale-entschaedigung",
    who: "behinderung",
    when: "opfer-gewalt-krieg",
    title: "Teilhabe am Arbeitsleben (Soziale Entschädigung)",
    summary:
      "Geschädigte haben Anspruch auf Leistungen zur Teilhabe am Arbeitsleben, einschließlich Kraftfahrzeughilfe und sonstiger Leistungen, um die Erwerbsfähigkeit trotz Schädigungsfolgen zu erhalten oder wiederherzustellen.",
    resources: [
      {
        label:
          "BMAS: Leistungen zur Teilhabe im Sozialen Entschädigungsrecht (SGB XIV)",
        url: "https://www.bmas.de/DE/Soziales/Soziale-Entschaedigung/Neues-Soziales-Entschaedigungsrecht/Leistungen-zur-Teilhabe/leistungen-zur-teilhabe.html",
      },
      {
        label:
          "REHADAT-Lexikon: Soziale Entschädigung und Teilhabe am Arbeitsleben",
        url: "https://www.rehadat.de/lexikon/Lex-Soziale-Entschaedigung/",
      },
      {
        label: "Kraftfahrzeughilfe-Verordnung (KfzHV) – gesetze-im-internet.de",
        url: "https://www.gesetze-im-internet.de/kfzhv/BJNR022510987.html",
      },
      {
        label: "LVR: Leistungen der Teilhabe in der Sozialen Entschädigung",
        url: "https://www.lvr.de/de/nav_main/soziales_1/soziale_entschaedigung/leistungen/frsorgeleistungen/frsorgeleistungen_1.jsp",
      },
    ],
  },
  {
    id: "ergaenzende-leistungen-zur-teilhabe-am-arbeitsleben-soziale-",
    who: "alle",
    when: "opfer-gewalt-krieg",
    title:
      "Ergänzende Leistungen zur Teilhabe am Arbeitsleben (Soziale Entschädigung)",
    summary:
      "Neben den Kernleistungen zur Teilhabe am Arbeitsleben erhalten Geschädigte ergänzende Leistungen wie Übergangsgeld, Reisekosten, Haushaltshilfe und Kinderbetreuungskosten während Reha-Maßnahmen.",
    resources: [
      {
        label:
          "§ 64 SGB XIV – Unterhaltssichernde und andere ergänzende Leistungen (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/sgb_14/__64.html",
      },
      {
        label:
          "Unterhaltssichernde und andere ergänzende Leistungen im Rahmen der sozialen Entschädigung beantragen (verwaltung.bund.de)",
        url: "https://verwaltung.bund.de/leistungsverzeichnis/de/leistung/99107136017002",
      },
      {
        label:
          "Leistungen zur Teilhabe am Arbeitsleben – Soziales Entschädigungsrecht (Niedersachsen Landesamt)",
        url: "https://soziales.niedersachsen.de/startseite/soziales_amp_gesundheit/soziales_entschaedigungsrecht/leistungen-zur-teilhabe-am-arbeitsleben-nach-dem-neunten-buch-sozialgesetzbuch-sgb-ix-113.html",
      },
      {
        label: "Leistungen zur Teilhabe – Soziale Entschädigung (BMAS)",
        url: "https://www.bmas.de/DE/Soziales/Soziale-Entschaedigung/Neues-Soziales-Entschaedigungsrecht/Leistungen-zur-Teilhabe/leistungen-zur-teilhabe.html",
      },
    ],
  },
  {
    id: "teilhabe-an-bildung-soziale-entschaedigung",
    who: "alle",
    when: "opfer-gewalt-krieg",
    title: "Teilhabe an Bildung (Soziale Entschädigung)",
    summary:
      "Geschädigte, die aufgrund von Schädigungsfolgen in ihrer Bildungsteilhabe eingeschränkt sind, haben Anspruch auf Leistungen zur Teilhabe an Bildung, um ihnen einen gleichberechtigten Zugang zu Bildungsangeboten zu ermöglichen.",
    resources: [
      {
        label:
          "§ 65 SGB XIV – Leistungen zur Teilhabe an Bildung (Gesetze im Internet)",
        url: "https://www.gesetze-im-internet.de/sgb_14/__65.html",
      },
      {
        label: "BMAS – Leistungen zur Teilhabe (Soziale Entschädigung)",
        url: "https://www.bmas.de/DE/Soziales/Soziale-Entschaedigung/Neues-Soziales-Entschaedigungsrecht/Leistungen-zur-Teilhabe/leistungen-zur-teilhabe.html",
      },
      {
        label: "§ 65 SGB XIV – Teilhabe an Bildung (buzer.de)",
        url: "https://www.buzer.de/65_SGB_14.htm",
      },
    ],
  },
  {
    id: "kostenuebernahme-vor-pflegebeduerftigkeit-soziale-entschaedi",
    who: "pflegebeduerftige",
    when: "opfer-gewalt-krieg",
    title: "Kostenübernahme vor Pflegebedürftigkeit (Soziale Entschädigung)",
    summary:
      "Geschädigte, die noch nicht pflegebedürftig im Sinne der Pflegeversicherung sind, aber vorübergehend Unterstützung benötigen, können Kostenübernahme für notwendige Hilfeleistungen erhalten.",
    resources: [
      {
        label:
          "§ 73 SGB XIV – Kostenübernahme vor Pflegebedürftigkeit (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/sgb_14/__73.html",
      },
      {
        label:
          "LVR – Leistungen bei Pflegebedürftigkeit (Soziale Entschädigung SGB XIV)",
        url: "https://www.lvr.de/de/nav_main/soziales_1/soziale_entschaedigung/leistungen/heilundkrankenbehandlung/heilundkrankenbehandlung_1.jsp",
      },
      {
        label: "BMAS – FAQ zum Sozialen Entschädigungsrecht (SGB XIV)",
        url: "https://www.bmas.de/DE/Soziales/Soziale-Entschaedigung/Fragen-und-Antworten/faq-ser.html",
      },
    ],
  },
  {
    id: "leistungen-bei-pflegebeduerftigkeit-soziale-entschaedigung",
    who: "pflegebeduerftige",
    when: "opfer-gewalt-krieg",
    title: "Leistungen bei Pflegebedürftigkeit (Soziale Entschädigung)",
    summary:
      "Pflegebedürftige Geschädigte haben Anspruch auf Pflegeleistungen entsprechend ihrem Pflegegrad. Die Soziale Entschädigung übernimmt Leistungen ergänzend zur oder anstelle der Pflegeversicherung.",
    resources: [
      {
        label:
          "BMAS: Soziale Entschädigung – Übersicht (inkl. Leistungen bei Pflegebedürftigkeit)",
        url: "https://www.bmas.de/DE/Soziales/Soziale-Entschaedigung/soziale-entschaedigung.html",
      },
      {
        label: "BMAS: FAQ zum Sozialen Entschädigungsrecht (SGB XIV)",
        url: "https://www.bmas.de/DE/Soziales/Soziale-Entschaedigung/Fragen-und-Antworten/faq-ser.html",
      },
      {
        label:
          "Niedersachsen: Informationen zum SGB XIV – Soziale Entschädigung",
        url: "https://soziales.niedersachsen.de/startseite/soziales_gesundheit/soziales_entschaedigungsrecht/soziale_entschadigung_nach_gesundheitsschaden_sgb_xiv/informationen-zum-sozialgesetzbuch-vierzehntes-buch-soziale-entschadigung-sgb-xiv-229098.html",
      },
      {
        label:
          "§ 68 SGB XIV – Zusammentreffen von Teilhabeleistungen mit Pflegeleistungen",
        url: "https://www.gesetze-im-internet.de/sgb_14/__68.html",
      },
    ],
  },
  {
    id: "ergaenzende-pflegeleistungen-soziale-entschaedigung",
    who: "pflegebeduerftige",
    when: "opfer-gewalt-krieg",
    title: "Ergänzende Pflegeleistungen (Soziale Entschädigung)",
    summary:
      "Pflegebedürftige Geschädigte erhalten ergänzende Pflegeleistungen wie Pflegesachleistung, Verhinderungspflege und Pflegehilfsmittel aus der Sozialen Entschädigung, soweit diese über die Pflegeversicherung hinausgehen.",
    resources: [
      {
        label:
          "§ 75 SGB XIV – Ergänzende Leistungen bei Pflegebedürftigkeit (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/sgb_14/__75.html",
      },
      {
        label:
          "Leistungen bei Pflegebedürftigkeit – Soziale Entschädigung (BMAS)",
        url: "https://www.bmas.de/DE/Soziales/Soziale-Entschaedigung/Neues-Soziales-Entschaedigungsrecht/Leistungen-bei-Pflegebeduerftigkeit/leistungen-bei-pflegebeduerftigkeit.html",
      },
      {
        label:
          "§ 75 SGB XIV – Ergänzende Leistungen bei Pflegebedürftigkeit (sozialgesetzbuch-sgb.de)",
        url: "https://www.sozialgesetzbuch-sgb.de/sgbxiv/75.html",
      },
    ],
  },
  {
    id: "haeusliche-pflege-im-arbeitgebermodell-soziale-entschaedigun",
    who: "alle",
    when: "opfer-gewalt-krieg",
    title: "Häusliche Pflege im Arbeitgebermodell (Soziale Entschädigung)",
    summary:
      "Geschädigte können Pflegekräfte selbst beschäftigen und erhalten dafür Kostenerstattung im Rahmen der Sozialen Entschädigung. Das Arbeitgebermodell ermöglicht individuelle Pflegearrangements.",
    resources: [
      {
        label:
          "§ 76 SGB XIV – Häusliche Pflege im Arbeitgebermodell (Gesetze im Internet)",
        url: "https://www.gesetze-im-internet.de/sgb_14/__76.html",
      },
      {
        label:
          "Leistungen bei Pflegebedürftigkeit – Soziale Entschädigung (BMAS)",
        url: "https://www.bmas.de/DE/Soziales/Soziale-Entschaedigung/Neues-Soziales-Entschaedigungsrecht/Leistungen-bei-Pflegebeduerftigkeit/leistungen-bei-pflegebeduerftigkeit.html",
      },
    ],
  },
  {
    id: "blindengeld-soziale-entschaedigung",
    who: "behinderung",
    when: "opfer-gewalt-krieg",
    title: "Blindengeld (Soziale Entschädigung)",
    summary:
      "Geschädigte mit hochgradiger Sehbehinderung oder Blindheit infolge eines anerkannten Schadensereignisses erhalten monatliche finanzielle Unterstützung zum Ausgleich der damit verbundenen Mehraufwendungen.",
    resources: [
      {
        label:
          "§ 82 SGB XIV – Leistungen bei hochgradiger Sehbehinderung, Blindheit und Taubblindheit (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/sgb_14/__82.html",
      },
      {
        label: "Soziale Entschädigung – Leistungsübersicht (BMAS)",
        url: "https://www.bmas.de/DE/Soziales/Soziale-Entschaedigung/soziale-entschaedigung.html",
      },
      {
        label:
          "Sozialgesetzbuch XIV – Lexikoneintrag mit Leistungsübersicht inkl. § 82 (socialnet.de)",
        url: "https://www.socialnet.de/lexikon/Sozialgesetzbuch-XIV",
      },
      {
        label:
          "Häufig gestellte Fragen zum Sozialen Entschädigungsrecht (BMAS)",
        url: "https://www.bmas.de/DE/Soziales/Soziale-Entschaedigung/Fragen-und-Antworten/faq-ser.html",
      },
    ],
  },
  {
    id: "monatliche-entschaedigung-soziale-entschaedigung",
    who: "alle",
    when: "opfer-gewalt-krieg",
    title: "Monatliche Entschädigung (Soziale Entschädigung)",
    summary:
      "Geschädigte erhalten eine monatliche Entschädigungszahlung, deren Höhe sich nach dem Grad der Schädigungsfolgen richtet. Sie soll den erlittenen immateriellen Schaden dauerhaft ausgleichen.",
    resources: [
      {
        label:
          "§ 83 SGB XIV – Monatliche Entschädigungszahlung (Gesetze im Internet)",
        url: "https://www.gesetze-im-internet.de/sgb_14/__83.html",
      },
      {
        label: "Soziale Entschädigung – SGB XIV alle Leistungen (betanet)",
        url: "https://www.betanet.de/soziale-entschaedigung.html",
      },
      {
        label: "Sozialgesetzbuch XIV – Lexikonartikel (socialnet)",
        url: "https://www.socialnet.de/lexikon/Sozialgesetzbuch-XIV",
      },
    ],
  },
  {
    id: "einmalabfindung-soziale-entschaedigung",
    who: "alle",
    when: "opfer-gewalt-krieg",
    title: "Einmalabfindung (Soziale Entschädigung)",
    summary:
      "Anstelle der monatlichen Entschädigungszahlung können Geschädigte unter bestimmten Voraussetzungen eine einmalige Abfindung beantragen. Diese bietet finanzielle Planungssicherheit auf einen Schlag.",
    resources: [
      {
        label: "§ 84 SGB XIV – Abfindung (Gesetze im Internet)",
        url: "https://www.gesetze-im-internet.de/sgb_14/__84.html",
      },
      {
        label:
          "Soziale Entschädigung – Leistungen inkl. Abfindung (betanet.de)",
        url: "https://www.betanet.de/soziale-entschaedigung.html",
      },
      {
        label: "Soziale Entschädigung – BMAS Überblick",
        url: "https://www.bmas.de/DE/Soziales/Soziale-Entschaedigung/soziale-entschaedigung.html",
      },
    ],
  },
  {
    id: "berufsschadensausgleich-soziale-entschaedigung",
    who: "alle",
    when: "opfer-gewalt-krieg",
    title: "Berufsschadensausgleich (Soziale Entschädigung)",
    summary:
      "Geschädigte, deren berufliche Entwicklung durch die Schädigung erheblich beeinträchtigt wurde, erhalten einen monatlichen Berufsschadensausgleich zum Ausgleich des erlittenen Einkommensverlustes.",
    resources: [
      {
        label:
          "§ 89 SGB XIV – Berufsschadensausgleich: Voraussetzung und Höhe (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/sgb_14/__89.html",
      },
      {
        label:
          "SGBXIVBSchAV – Verordnung zur Durchführung des Berufsschadensausgleiches nach § 89 SGB XIV (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/sgbxivbschav/BJNR12D0A0023.html",
      },
      {
        label:
          "Bekanntmachung der Vergleichseinkommen für den Berufsschadensausgleich – BMAS",
        url: "https://www.bmas.de/DE/Soziales/Soziale-Entschaedigung/Gesetze-und-Verordnungen/bekanntmachung-vergleichseinkommen.html",
      },
      {
        label: "Soziale Entschädigung – SGB XIV alle Leistungen (betanet.de)",
        url: "https://www.betanet.de/soziale-entschaedigung.html",
      },
    ],
  },
  {
    id: "besondere-leistungen-im-einzelfall-soziale-entschaedigung",
    who: "alle",
    when: "opfer-gewalt-krieg",
    title: "Besondere Leistungen im Einzelfall (Soziale Entschädigung)",
    summary:
      "In besonderen Härtefällen können Geschädigte und ihre Angehörigen ergänzende Leistungen zum Lebensunterhalt und zur Förderung einer Ausbildung erhalten, wenn die allgemeinen Leistungen nicht ausreichen.",
    resources: [
      {
        label:
          "BMAS: Besondere Leistungen im Einzelfall (Soziale Entschädigung)",
        url: "https://www.bmas.de/DE/Soziales/Soziale-Entschaedigung/Neues-Soziales-Entschaedigungsrecht/Besondere-Leistungen-im-Einzelfall/besondere-leistungen-im-einzelfall.html",
      },
      {
        label:
          "§ 96 SGB XIV – Leistungen in sonstigen Lebenslagen (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/sgb_14/__96.html",
      },
      {
        label:
          "LVR: Besondere Leistungen im Einzelfall (Fürsorgeleistungen SGB XIV)",
        url: "https://www.lvr.de/de/nav_main/soziales_1/soziale_entschaedigung/leistungen/frsorgeleistungen/frsorgeleistungen_1.jsp",
      },
      {
        label:
          "betanet: Soziale Entschädigung – Besondere Leistungen im Einzelfall",
        url: "https://www.betanet.de/soziale-entschaedigung.html#leistungen-fuer-geschaedigte",
      },
    ],
  },
  {
    id: "leistungen-zum-lebensunterhalt-soziale-entschaedigung",
    who: "alle",
    when: "opfer-gewalt-krieg",
    title: "Leistungen zum Lebensunterhalt (Soziale Entschädigung)",
    summary:
      "Geschädigte und Hinterbliebene, die den notwendigen Lebensunterhalt nicht aus eigenen Mitteln bestreiten können, erhalten ergänzende Leistungen zum Lebensunterhalt aus der Sozialen Entschädigung.",
    resources: [
      {
        label:
          "§ 93 SGB XIV – Leistungen zum Lebensunterhalt (Gesetze im Internet)",
        url: "https://www.gesetze-im-internet.de/sgb_14/__93.html",
      },
      {
        label: "Soziale Entschädigung – alle Leistungen nach SGB XIV (betanet)",
        url: "https://www.betanet.de/soziale-entschaedigung.html",
      },
      {
        label:
          "Fürsorgeleistungen / Leistungen zum Lebensunterhalt nach SGB XIV (LVR)",
        url: "https://www.lvr.de/de/nav_main/soziales_1/soziale_entschaedigung/leistungen/frsorgeleistungen/frsorgeleistungen_1.jsp",
      },
    ],
  },
  {
    id: "ausbildungsfoerderung-soziale-entschaedigung",
    who: "alle",
    when: "opfer-gewalt-krieg",
    title: "Ausbildungsförderung (Soziale Entschädigung)",
    summary:
      "Geschädigte und Waisen, die eine Ausbildung mit staatlich verbürgtem Darlehen finanzieren, können die Übernahme der Rückzahlung des Ausbildungsdarlehens beantragen, wenn die Ausbildung aufgrund der Schädigungsfolgen abgebrochen werden musste.",
    resources: [
      {
        label:
          "§ 94 SGB XIV – Leistung zur Förderung einer Ausbildung (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/sgb_14/__94.html",
      },
      {
        label:
          "§ 94 SGB XIV – Leistung zur Förderung einer Ausbildung (dejure.org)",
        url: "https://dejure.org/gesetze/SGB_XIV/94.html",
      },
      {
        label:
          "§ 94 SGB XIV – Leistung zur Förderung einer Ausbildung (buzer.de)",
        url: "https://www.buzer.de/94_SGB_14.htm",
      },
      {
        label: "Soziale Entschädigung – alle Leistungen SGB XIV (betanet.de)",
        url: "https://www.betanet.de/soziale-entschaedigung.html",
      },
    ],
  },
  {
    id: "hilfe-zur-weiterfuehrung-des-haushalts-soziale-entschaedigun",
    who: "alle",
    when: "opfer-gewalt-krieg",
    title: "Hilfe zur Weiterführung des Haushalts (Soziale Entschädigung)",
    summary:
      "Geschädigte, die ihren Haushalt wegen der Schädigungsfolgen vorübergehend nicht führen können, haben Anspruch auf Hilfe zur Weiterführung des Haushalts, z.B. durch eine Haushaltshilfe.",
    resources: [
      {
        label:
          "§ 95 SGB XIV – Leistungen zur Weiterführung des Haushalts (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/sgb_14/__95.html",
      },
      {
        label:
          "§ 95 SGB XIV – Leistungen zur Weiterführung des Haushalts (sozialgesetzbuch-sgb.de)",
        url: "https://www.sozialgesetzbuch-sgb.de/sgbxiv/95.html",
      },
      {
        label: "Fürsorge­leistungen – Besondere Leistungen im Einzelfall (LVR)",
        url: "https://www.lvr.de/de/nav_main/soziales_1/soziale_entschaedigung/leistungen/frsorgeleistungen/frsorgeleistungen_1.jsp",
      },
      {
        label: "FAQ Soziales Entschädigungsrecht (BMAS)",
        url: "https://www.bmas.de/DE/Soziales/Soziale-Entschaedigung/Fragen-und-Antworten/faq-ser.html",
      },
    ],
  },
  {
    id: "hilfe-in-sonstigen-lebenslagen-soziale-entschaedigung",
    who: "alle",
    when: "opfer-gewalt-krieg",
    title: "Hilfe in sonstigen Lebenslagen (Soziale Entschädigung)",
    summary:
      "Als Auffangregelung können Geschädigte Leistungen in sonstigen besonderen Lebenslagen erhalten, wenn diese durch die Schädigungsfolgen entstanden sind und keine anderen Leistungen greifen.",
    resources: [
      {
        label:
          "§ 96 SGB XIV – Leistungen in sonstigen Lebenslagen (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/sgb_14/__96.html",
      },
      {
        label:
          "SGB XIV Kapitel 11 – Besondere Leistungen im Einzelfall inkl. § 96 (buzer.de)",
        url: "https://www.buzer.de/gesetz/13713/b33745.htm",
      },
      {
        label:
          "§ 96 SGB XIV – Leistungen in sonstigen Lebenslagen (sozialgesetzbuch-sgb.de)",
        url: "https://www.sozialgesetzbuch-sgb.de/sgbxiv/96.html",
      },
    ],
  },
  {
    id: "ueberfuehrungs-und-bestattungskosten-soziale-entschaedigung",
    who: "alle",
    when: "opfer-gewalt-krieg",
    title: "Überführungs- und Bestattungskosten (Soziale Entschädigung)",
    summary:
      "Stirbt ein Geschädigter an den Folgen des anerkannten Schadensereignisses, werden die Kosten für Überführung und Bestattung von der Sozialen Entschädigung übernommen.",
    resources: [
      {
        label:
          "§ 99 SGB XIV – Leistungen bei Überführung und Bestattung (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/sgb_14/__99.html",
      },
      {
        label:
          "Soziale Entschädigung – alle Leistungen nach SGB XIV (betanet.de)",
        url: "https://www.betanet.de/soziale-entschaedigung.html",
      },
      {
        label:
          "Übernahme der Kosten bei Überführung und Bestattung – Soziale Entschädigung (BayernPortal)",
        url: "https://www.bayernportal.de/dokumente/leistung/084312793443",
      },
    ],
  },
  {
    id: "unterhaltsvorschuss",
    who: "familie",
    when: "alleinerziehend-unterhalt",
    title: "Unterhaltsvorschuss",
    summary:
      "Alleinerziehende Elternteile können für ihre Kinder bis 18 Jahre Unterhaltsvorschuss beim Jugendamt beantragen, wenn der andere Elternteil keinen oder zu wenig Unterhalt zahlt. Der Staat zahlt den Unterhalt vor und versucht ihn vom unterhaltspflichtigen Elternteil zurückzuholen.",
    resources: [
      {
        label: "BMFSFJ – Unterhaltsvorschuss: Häufige Fragen und Antworten",
        url: "https://www.bmfsfj.de/bmfsfj/themen/familie/familienleistungen/unterhaltsvorschuss/haeufige-fragen-und-antworten-zum-unterhaltsvorschuss-73136",
      },
      {
        label: "Unterhaltsvorschussgesetz (UhVorschG) – Volltext",
        url: "https://www.gesetze-im-internet.de/uavg/index.html",
      },
      {
        label: "Düsseldorfer Tabelle – Mindestunterhalt nach § 1612a BGB",
        url: "https://www.olg-duesseldorf.nrw.de/infos/Duesseldorfer_tabelle/index.php",
      },
      {
        label: "Destatis – Unterhaltsvorschuss: Empfängerzahlen",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Unterhaltsvorschuss/aktuell-unterhaltsvorschuss.html",
      },
      {
        label: "BMFSFJ – Unterhaltsvorschuss",
        url: "https://www.bmbfsfj.bund.de/bmbfsfj/themen/familie/familienleistungen/unterhaltsvorschuss",
      },
    ],
  },
  {
    id: "wohngeld",
    who: "alle",
    when: "existenzsicherung",
    title: "Wohngeld",
    summary:
      "Haushalte mit geringem Einkommen können Wohngeld als Zuschuss zur Miete oder zu den Kosten des selbstgenutzten Wohneigentums beantragen. Die Höhe richtet sich nach Haushaltsgröße, Einkommen und Miete bzw. Belastung.",
    resources: [
      {
        label:
          "Destatis – Aktuelle Wohngeld-Zahlen (1,2 Mio. Haushalte, Stand 2024)",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Wohngeld/aktuell-wohngeld.html",
      },
      {
        label: "Destatis – Wohngeld Statistik & Berichte",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Wohngeld/_inhalt.html",
      },
      {
        label: "Bundestag – Haushalt 2024: 2,42 Milliarden Euro für Wohngeld",
        url: "https://www.bundestag.de/presse/hib/kurzmeldungen-963254",
      },
      {
        label: "WoGG § 19 – Berechnungsformel des Wohngeldes",
        url: "https://www.gesetze-im-internet.de/wogg/__19.html",
      },
      {
        label: "WoGG § 12 – Höchstbeträge der Miete und Belastung",
        url: "https://www.gesetze-im-internet.de/wogg/__12.html",
      },
      {
        label: "wohngeld.org – § 17 WoGG: Freibeträge im Detail",
        url: "https://www.wohngeld.org/wohngeldgesetz-wogg/paragraph17/",
      },
      {
        label: "wohngeld.org – Einkommen und Abzüge beim Wohngeld",
        url: "https://www.wohngeld.org/einkommen/",
      },
      {
        label: "wohngeld.org – Wohngeld beantragen und Auszahlung",
        url: "https://www.wohngeld.org/",
      },
    ],
  },
  {
    id: "grenzueberschreitende-prozesskostenhilfe-in-der-eu",
    who: "alle",
    when: "schulden-recht-beratung",
    title: "Grenzüberschreitende Prozesskostenhilfe in der EU",
    summary:
      "Setzt die EU-Richtlinie 2003/8/EG um und ermöglicht Prozesskostenhilfe für zivil- und handelsrechtliche Verfahren mit Auslandsbezug innerhalb der EU — etwa wenn klagende oder beklagte Personen in einem anderen Mitgliedstaat wohnen.",
    resources: [
      {
        label:
          "EU-Richtlinie 2003/8/EG – Prozesskostenhilfe bei grenzüberschreitenden Streitsachen",
        url: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX%3A32003L0008",
      },
      {
        label: "Europäisches Justizportal – Prozesskostenhilfe (Deutschland)",
        url: "https://e-justice.europa.eu/content_legal_aid-55-de-de.do",
      },
    ],
  },
  {
    id: "prozesskostenhilfe-pkh",
    who: "alle",
    when: "schulden-recht-beratung",
    title: "Prozesskostenhilfe (PKH)",
    summary:
      "Wer sich ein Gerichtsverfahren wegen geringer Einkünfte nicht leisten kann, erhält die Gerichts- und Anwaltskosten ganz oder teilweise vom Staat vorgestreckt. Die Regelung in der ZPO gilt entsprechend für arbeits-, sozial-, verwaltungs- und finanzgerichtliche Verfahren (§ 11a ArbGG, § 73a SGG, § 166 VwGO, § 142 FGO).",
    resources: [
      {
        label:
          "Bundesministerium der Justiz – Beratungshilfe und Prozesskostenhilfe",
        url: "https://www.bmj.de/DE/themen/gerichtsverfahren/beratungshilfe_prozesskostenhilfe/beratungshilfe_prozesskostenhilfe_node.html",
      },
      {
        label: "Statistisches Bundesamt – Prozesskostenhilfe-Statistik",
        url: "https://www.destatis.de/DE/Themen/Staat/Justiz-Rechtspflege/Tabellen/prozesskostenhilfe.html",
      },
    ],
  },
];

export const benefitById: Record<string, Benefit> = Object.fromEntries(
  benefits.map((b) => [b.id, b]),
);
