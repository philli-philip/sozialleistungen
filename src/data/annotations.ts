/**
 * Hand-curated annotations, keyed by the stable id from leistungen.json.
 * Field shape is declared in `./schema.ts` — keep that file as the source of truth.
 */
import type { FieldKey } from "./schema";

export type Resource = { label: string; url: string };

export type Annotation = Partial<Record<FieldKey, string>> & {
  resources?: Resource[];
  zielgruppen?: string[];
};

export const annotations: Record<string, Annotation> = {
  fdce5d31c9: {
    title: "Bürgergeld (Regelbedarf)",
    zielgruppen: ["arbeitslose"],
    summary:
      "Monatlicher Regelsatz für Erwachsene im erwerbsfähigen Alter, die ihren Lebensunterhalt nicht aus eigenem Einkommen oder Vermögen sichern können. Ersetzt seit 2023 das frühere ALG II.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__20.html",
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
  "748303a3c5": {
    title: "Elterngeld",
    zielgruppen: ["eltern", "kleinkinder"],
    summary:
      "Einkommensersatzleistung für Eltern nach der Geburt: 65–67 % des wegfallenden Nettoeinkommens, mindestens 300 € und höchstens 1.800 € pro Monat.",
    url: "https://www.gesetze-im-internet.de/beeg/__2.html",
    resources: [
      {
        label: "BEEG § 2 – Höhe des Elterngelds",
        url: "https://www.gesetze-im-internet.de/beeg/__2.html",
      },
      {
        label: "BEEG § 4a – ElterngeldPlus und Partnerschaftsbonus",
        url: "https://www.gesetze-im-internet.de/beeg/__4a.html",
      },
      {
        label: "BEEG § 7 – Antragstellung",
        url: "https://www.gesetze-im-internet.de/beeg/__7.html",
      },
      {
        label: "Familienportal – Elterngeld Berechnung",
        url: "https://familienportal.de/familienportal/familienleistungen/elterngeld",
      },
    ],
  },
  "8ec9ab287f": {
    title: "Geschwisterbonus & Mehrlingszuschlag",
    zielgruppen: ["kleinkinder", "eltern"],
    summary:
      "Aufschlag auf das Elterngeld bei mehreren kleinen Kindern im Haushalt oder bei Mehrlingsgeburten.",
    url: "https://www.gesetze-im-internet.de/beeg/__2a.html",
  },
  "9c1fe106e5": {
    title: "Elterngeld Plus",
    zielgruppen: ["eltern", "kleinkinder"],
    summary:
      "Verlängerte Bezugsvariante des Elterngelds für Eltern, die in Teilzeit arbeiten — niedrigerer Monatsbetrag, dafür doppelt so lange Bezugsdauer.",
    url: "https://www.gesetze-im-internet.de/beeg/__4a.html",
    resources: [
      {
        label:
          "Destatis – Pressemitteilung: Elterngeld Plus gewinnt weiter an Bedeutung (2025)",
        url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2025/03/PD25_112_22922.html",
      },
      {
        label:
          "Destatis – Statistischer Bericht: Elterngeld Leistungsbezüge 2024",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Elterngeld/Publikationen/Downloads-Elterngeld/statistischer-bericht-elterngeld-leistungsbezuege-j-5229210247005.html",
      },
      {
        label: "Destatis – Elterngeld Plus: Übersicht und Quartalszahlen",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Elterngeld/elterngeld-plus.html",
      },
    ],
  },
  "990b257e83": {
    title: "Kinderzuschlag",
    zielgruppen: ["eltern"],
    summary:
      "Zuschlag für Familien mit kleinem Einkommen, das zwar für die Eltern, aber nicht für die Kinder ausreicht. Bis zu 297 € pro Kind und Monat.",
    url: "https://www.gesetze-im-internet.de/bkgg_1996/__6a.html",
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

  // SGB II – Bürgergeld / Grundsicherung für Arbeitsuchende
  "989acba719": {
    title: "Beratung für Bürgergeld-Beziehende",
    zielgruppen: ["arbeitslose"],
    summary:
      "Das Jobcenter berät Bürgergeld-Empfängerinnen und -Empfänger zu Möglichkeiten der Arbeitsaufnahme und unterstützt sie dabei, ihren Lebensunterhalt wieder selbst zu sichern.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__14.html",
  },
  "120eea020e": {
    title: "Potenzialanalyse & Kooperationsplan",
    zielgruppen: ["arbeitslose"],
    summary:
      "Das Jobcenter erstellt gemeinsam mit dem Arbeitssuchenden eine Analyse der individuellen Stärken und Hemmnisse und legt in einem Kooperationsplan konkrete Schritte zur Eingliederung fest.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__15.html",
  },
  "9a74c4a895": {
    title: "Kommunale Eingliederungsleistungen",
    zielgruppen: ["arbeitslose", "behinderung"],
    summary:
      "Ergänzende kommunale Hilfen wie Kinderbetreuung, Schuldnerberatung, psychosoziale Betreuung und Suchtberatung, die eine Arbeitsaufnahme erst ermöglichen.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__16a.html",
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
  f76c527504: {
    title: "Einstiegsgeld",
    zielgruppen: ["arbeitslose"],
    summary:
      "Befristeter finanzieller Zuschuss für Bürgergeld-Beziehende, die eine Erwerbstätigkeit aufnehmen oder eine selbstständige Tätigkeit beginnen, um den Übergang in den Arbeitsmarkt zu erleichtern.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__16b.html",
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
    ],
  },
  "9a069da34b": {
    title: "Eingliederungshilfe für Selbstständige",
    zielgruppen: ["arbeitslose"],
    summary:
      "Bürgergeld-Beziehende, die sich selbstständig machen, können Darlehen oder Zuschüsse für notwendige Investitionen wie Arbeitsmittel oder Anschaffungen erhalten.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__16c.html",
  },
  "824fedf6a5": {
    title: "Arbeitsgelegenheiten (Ein-Euro-Jobs)",
    zielgruppen: ["arbeitslose", "opfer"],
    summary:
      "Zeitlich befristete gemeinnützige Arbeitsmöglichkeiten für Langzeitarbeitslose, die mit einer Mehraufwandsentschädigung vergütet werden und Tagesstruktur sowie den Einstieg in den Arbeitsmarkt fördern.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__16d.html",
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
    ],
  },
  "30d962409c": {
    title: "Eingliederung von Langzeitarbeitslosen (2+ Jahre)",
    zielgruppen: ["arbeitslose"],
    summary:
      "Lohnkostenzuschuss für Arbeitgeber, die Personen einstellen, die mindestens zwei Jahre arbeitslos waren. Der Zuschuss läuft befristet und sinkt schrittweise ab.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__16e.html",
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
  e08e42039a: {
    title: "Freie Förderung",
    zielgruppen: ["arbeitslose"],
    summary:
      "Flexible Mittel des Jobcenters für innovative oder einzelfallbezogene Eingliederungsmaßnahmen, die über die gesetzlich geregelten Standardleistungen hinausgehen.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__16f.html",
  },
  "51d3b9183a": {
    title: "Förderung schwer erreichbarer junger Menschen",
    zielgruppen: ["arbeitslose"],
    summary:
      "Niedrigschwellige sozialpädagogische Begleitung für Jugendliche und junge Erwachsene mit komplexen Problemlagen, die durch die Regelangebote des Jobcenters nicht erreicht werden.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__16h.html",
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
  "5b1266d60f": {
    title: "Teilhabe am Arbeitsmarkt (sozialer Arbeitsmarkt)",
    zielgruppen: ["arbeitslose"],
    summary:
      "Geförderte sozialversicherungspflichtige Beschäftigung für sehr langzeitarbeitslose Personen (mind. 6 der letzten 7 Jahre), mit begleitendem Coaching durch das Jobcenter über bis zu 5 Jahre.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__16i.html",
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
  "5fca8d396e": {
    title: "Ganzheitliche Betreuung",
    zielgruppen: ["arbeitslose"],
    summary:
      "Intensive, fallmanagerorientierte Betreuung für Bürgergeld-Beziehende mit besonders komplexen Problemlagen, die mehrere Hemmnisse gleichzeitig überwinden müssen.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__16k.html",
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
  "485f950dff": {
    title: "Mehrbedarf für Schwangere (Bürgergeld)",
    zielgruppen: ["schwangere", "arbeitslose"],
    summary:
      "Bürgergeld-Empfängerinnen erhalten ab der 13. Schwangerschaftswoche einen Aufschlag von 17 % auf den Regelbedarf für erhöhte Ernährungs- und Lebenshaltungskosten.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__21.html",
    resources: [
      {
        label: "BMAS – Leistungen und Bedarfe im Bürgergeld",
        url: "https://www.bmas.de/DE/Arbeit/Grundsicherung-Buergergeld/Leistungen-und-Bedarfe-im-Buergergeld/leistungen-und-bedarfe-im-buergergeld.html",
      },
      {
        label:
          "buerger-geld.org – Mehrbedarf für Schwangere: Voraussetzungen und Höhe",
        url: "https://www.buerger-geld.org/buergergeld/mehrbedarf-schwangerschaft/",
      },
      {
        label:
          "rechtsanwalt-und-sozialrecht.de – Mehrbedarfe im Bürgergeld & Sozialhilfe (Überblick)",
        url: "https://rechtsanwalt-und-sozialrecht.de/mehrbedarfe-buergergeld-sozialhilfe-ueberblick/",
      },
    ],
  },
  "024ecf2f6f": {
    title: "Mehrbedarf für Alleinerziehende (Bürgergeld)",
    zielgruppen: ["alleinerziehende", "eltern", "arbeitslose"],
    summary:
      "Alleinerziehende im Bürgergeld erhalten je nach Anzahl und Alter der Kinder einen Mehrbedarf von 12–60 % des Regelsatzes, da ihre Lebenshaltungskosten strukturell höher sind.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__21.html",
    resources: [
      {
        label: "§ 21 Abs. 3 SGB II – Mehrbedarfe",
        url: "https://www.gesetze-im-internet.de/sgb_2/__21.html",
      },
      {
        label: "BMAS – Mehrbedarfe im Bürgergeld",
        url: "https://www.bmas.de/DE/Arbeit/Grundsicherung-Buergergeld/Leistungen-und-Bedarfe-im-Buergergeld/leistungen-und-bedarfe-im-buergergeld.html",
      },
      {
        label: "§ 30 Abs. 3 SGB XII – Parallelnorm in der Sozialhilfe",
        url: "https://www.gesetze-im-internet.de/sgb_12/__30.html",
      },
    ],
  },
  d07ecdff65: {
    title: "Mehrbedarf bei Behinderung (Bürgergeld)",
    zielgruppen: ["arbeitslose", "behinderung"],
    summary:
      "Bürgergeld-Beziehende, die Leistungen zur Teilhabe am Arbeitsleben oder bestimmte Eingliederungshilfen erhalten, bekommen einen Mehrbedarf von 35 % des Regelsatzes.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__21.html",
    resources: [
      {
        label: "Bundesagentur für Arbeit – Wissensdatenbank: § 21 Mehrbedarfe",
        url: "https://www.arbeitsagentur.de/wissensdatenbank-sgbii/21-buergergeld-mehrbedarfe",
      },
      {
        label: "BMAS – Leistungen und Bedarfe im Bürgergeld",
        url: "https://www.bmas.de/DE/Arbeit/Grundsicherung-Buergergeld/Leistungen-und-Bedarfe-im-Buergergeld/leistungen-und-bedarfe-im-buergergeld.html",
      },
      {
        label:
          "Bundesagentur für Arbeit – Jobcenter: Unterstützung bei gesundheitlichen Problemen",
        url: "https://www.arbeitsagentur.de/arbeitslos-arbeit-finden/buergergeld/gesundheit",
      },
    ],
  },
  ee0be2a29f: {
    title: "Mehrbedarf für kostenaufwendige Ernährung",
    zielgruppen: ["arbeitslose"],
    summary:
      "Bei bestimmten Erkrankungen, die eine besondere Diät erfordern (z. B. Zöliakie, Niereninsuffizienz), kann ein Mehrbedarf für ärztlich attestierte Krankenkost anerkannt werden. Nicht jede Erkrankung qualifiziert sich — maßgeblich ist, ob die notwendige Diät tatsächlich höhere Kosten verursacht (BSG, B 14/11b AS 4/07 R).",
    url: "https://www.gesetze-im-internet.de/sgb_2/__21.html",
    resources: [
      {
        label: "BMAS – Leistungen und Bedarfe im Bürgergeld",
        url: "https://www.bmas.de/DE/Arbeit/Grundsicherung-Buergergeld/Leistungen-und-Bedarfe-im-Buergergeld/leistungen-und-bedarfe-im-buergergeld.html",
      },
      {
        label: "Parallelvorschrift § 30 Abs. 5 SGB XII",
        url: "https://www.gesetze-im-internet.de/sgb_12/__30.html",
      },
    ],
  },
  faa62af89b: {
    title: "Mehrbedarf für besondere Umstände",
    zielgruppen: ["arbeitslose"],
    summary:
      "Auffangtatbestand: In atypischen Einzelfällen, die von keiner anderen Mehrbedarfsregelung erfasst werden, kann ein angemessener laufender Mehrbedarf anerkannt werden.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__21.html",
  },
  "0073bff0a6": {
    title: "Mehrbedarf für Schulbücher",
    zielgruppen: ["arbeitslose"],
    summary:
      "Schulpflichtige Bürgergeld-Empfänger erhalten einen Mehrbedarf für notwendige Schulbücher und gleichgestellte Arbeitshefte, soweit diese nicht von der Schule gestellt werden.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__21.html",
  },
  "4a6d919937": {
    title: "Mehrbedarf für dezentrale Warmwassererzeugung",
    zielgruppen: ["arbeitslose"],
    summary:
      "Wer sein Warmwasser über einen elektrischen Durchlauferhitzer oder Boiler erzeugt (nicht über die Heizung), erhält einen pauschalen Mehrbedarf für die Stromkosten — gestaffelt nach Alter.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__21.html",
    resources: [
      {
        label: "gegen-hartz.de – Mehrbedarf Warmwasser: Beträge 2026",
        url: "https://www.gegen-hartz.de/news/buergergeld-mehrbedarf-fuer-warmwasser-in-2026",
      },
      {
        label: "buergergeld.org – Mehrbedarf Warmwasser: Erklärung und Tabelle",
        url: "https://www.buergergeld.org/sgb-ii/mehrbedarf-warmwasser/",
      },
      {
        label:
          "gegen-hartz.de – Häufigster Fehler im Jobcenter-Bescheid (Warmwasser)",
        url: "https://www.gegen-hartz.de/news/buergergeld-mehrbedarf-warmwasser-der-haeufigste-fehler-im-jobcenter-bescheid",
      },
    ],
  },
  "65bf5a67dd": {
    title: "Kosten der Unterkunft & Heizung (Bürgergeld)",
    zielgruppen: ["arbeitslose"],
    summary:
      "Das Jobcenter übernimmt die angemessenen Miet- und Heizkosten von Bürgergeld-Beziehenden. Was als angemessen gilt, richtet sich nach den lokalen Mietverhältnissen und der Haushaltsgröße.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__22.html",
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
  "2394ebbfee": {
    title: "Einzelfalldarlehen für ungedeckten Bedarf",
    zielgruppen: ["arbeitslose"],
    summary:
      "Liegt ein unabweisbarer Bedarf vor, der durch den Regelsatz nicht gedeckt werden kann, kann das Jobcenter ein unverzinsliches Darlehen gewähren, das mit 5 % monatlich aufgerechnet wird.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__24.html",
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
    ],
  },
  "46b067fe00": {
    title: "Sachleistungen statt Geldleistungen",
    zielgruppen: ["arbeitslose"],
    summary:
      "In begründeten Ausnahmefällen — etwa bei mangelnder Bewirtschaftungsfähigkeit — kann der Regelbedarf ganz oder teilweise als Sachleistung (z. B. Lebensmittelgutscheine) erbracht werden.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__24.html",
  },
  f9edce11a4: {
    title: "Erstausstattung Wohnung",
    zielgruppen: ["arbeitslose"],
    summary:
      "Einmalige Beihilfe für die notwendige Grundausstattung einer neuen Wohnung (Möbel, Haushaltsgeräte, Geschirr) für Bürgergeld-Beziehende, die erstmals oder erneut einen eigenen Haushalt gründen.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__24.html",
    resources: [
      {
        label: "BA – Einmalige Leistungen beantragen (offizielle Übersicht)",
        url: "https://www.arbeitsagentur.de/arbeitslos-arbeit-finden/buergergeld/finanziell-absichern/einmalige-leistungen",
      },
      {
        label: "Bürgergeld.org – Erstausstattung der Wohnung: was das Jobcenter übernimmt",
        url: "https://www.buergergeld.org/sgb-ii/erstausstattung/",
      },
      {
        label: "Hamburg.de – Fachanweisung zu § 24 Abs. 3 Satz 1 Nr. 1 SGB II (Erstausstattung Wohnung)",
        url: "https://www.hamburg.de/politik-und-verwaltung/behoerden/sozialbehoerde/rechtliche-grundlagen/infoline/fachliche-vorgaben-und-hinweise/sgb-ii-grundsicherung-fuer-arbeitsuchende/fa-sgbii-24-1-erstausstattung-whg-45774",
      },
    ],
  },
  "8b36de6cdc": {
    title: "Erstausstattung bei Schwangerschaft & Geburt",
    zielgruppen: ["schwangere", "kleinkinder", "arbeitslose"],
    summary:
      "Einmalige Beihilfe für Babyerstausstattung wie Kinderbett, Kinderwagen, Wickelkommode und Säuglingskleidung für Bürgergeld-Empfängerinnen.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__24.html",
    resources: [
      {
        label: "BA – Einmalige Leistungen beantragen (offizielle Übersicht)",
        url: "https://www.arbeitsagentur.de/arbeitslos-arbeit-finden/buergergeld/finanziell-absichern/einmalige-leistungen",
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
  f86285c458: {
    title: "Erstausstattung orthopädische Geräte",
    zielgruppen: ["arbeitslose"],
    summary:
      "Übernahme der Kosten für notwendige orthopädische Geräte (z. B. Prothesen, Rollstuhl, Hörgerät), soweit nicht von der Krankenkasse getragen.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__24.html",
  },
  "337978f384": {
    title: "KV-Zuschuss bei privater Krankenversicherung",
    zielgruppen: ["arbeitslose"],
    summary:
      "Bürgergeld-Beziehende, die in einer privaten Krankenversicherung verbleiben müssen, erhalten einen Zuschuss zu ihren Beiträgen in Höhe der Beiträge im Basistarif.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__26.html",
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
    ],
  },
  "8e857d6ab2": {
    title: "KV-Zuschuss zur Vermeidung von Hilfebedürftigkeit",
    zielgruppen: ["arbeitslose"],
    summary:
      "Personen, deren Einkommen den Bürgergeld-Bedarf nur knapp übersteigt, erhalten einen anteiligen Zuschuss zu ihren Krankenversicherungsbeiträgen, um Hilfebedürftigkeit zu vermeiden.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__26.html",
    resources: [
      {
        label:
          "BA Wissensdatenbank – § 26 SGB II: Zuschüsse zu Kranken- und Pflegeversicherung",
        url: "https://www.arbeitsagentur.de/wissensdatenbank-sgbii/26-buergergeld-zuschuesse-zu-beitraegen-zur-krankenversicherung-und-pflegeversicherung",
      },
      {
        label: "buergergeld.org – Krankenversicherung und Bürgergeld",
        url: "https://www.buergergeld.org/sgb-ii/krankenversicherung/",
      },
    ],
  },
  "77c2a8e48c": {
    title: "PV-Zuschuss bei privater Pflegeversicherung",
    zielgruppen: ["arbeitslose"],
    summary:
      "Bürgergeld-Beziehende in der privaten Pflegeversicherung erhalten einen Zuschuss zu ihren Beiträgen, damit sie ihren Versicherungsschutz aufrechterhalten können.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__26.html",
  },
  "0e32ab7af7": {
    title: "PV-Zuschuss zur Vermeidung von Hilfebedürftigkeit",
    zielgruppen: ["arbeitslose"],
    summary:
      "Anteiliger Zuschuss zu Pflegeversicherungsbeiträgen, um zu verhindern, dass allein die Beitragslast Hilfebedürftigkeit nach SGB II auslöst.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__26.html",
  },
  "1090e63176": {
    title: "Schul- & Kitaausflüge (Bildung & Teilhabe)",
    zielgruppen: ["arbeitslose"],
    summary:
      "Übernahme der tatsächlichen Teilnahmekosten für eintägige Schul- und Kitaausflüge für Kinder aus Bürgergeld-Familien.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__28.html",
  },
  fb0ab4351e: {
    title: "Mehrtägige Klassenfahrten (Bildung & Teilhabe)",
    zielgruppen: ["arbeitslose"],
    summary:
      "Übernahme der tatsächlichen Kosten für mehrtägige Klassenfahrten im Rahmen der schulrechtlichen Bestimmungen für Schülerinnen und Schüler aus Bürgergeld-Familien.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__28.html",
  },
  "616d2cb10f": {
    title: "Schulbedarfspaket (Bildung & Teilhabe)",
    zielgruppen: ["arbeitslose"],
    summary:
      "Zweimal jährlich (zum Schulhalbjahr) wird eine Pauschale für Schulbedarf wie Hefte, Stifte und Schultasche ausgezahlt — derzeit 195 € pro Schuljahr.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__28.html",
    resources: [
      {
        label: "BMAS – Leistungen des Bildungspakets (Übersicht)",
        url: "https://www.bmas.de/DE/Arbeit/Grundsicherung-Buergergeld/Bildungspaket/Leistungen/leistungen-bildungspaket_art.html",
      },
      {
        label: "§ 28 SGB II – Bedarfe für Bildung und Teilhabe (Volltext)",
        url: "https://www.sozialgesetzbuch-sgb.de/sgbii/28.html",
      },
    ],
  },
  "86cf86503f": {
    title: "Schülerbeförderungskosten (Bildung & Teilhabe)",
    zielgruppen: ["arbeitslose"],
    summary:
      "Übernahme der notwendigen Schülerbeförderungskosten zur nächstgelegenen geeigneten Schule, soweit kein anderer Kostenträger zuständig ist.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__28.html",
  },
  "4bcbd73188": {
    title: "Lernförderung (Bildung & Teilhabe)",
    zielgruppen: ["arbeitslose"],
    summary:
      "Finanzierung von ergänzender, außerschulischer Nachhilfe, wenn das Lernziel ohne diese gefährdet ist und die Schule keine ausreichende Förderung anbietet.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__28.html",
    resources: [
      {
        label:
          "Bundesrechnungshof – Bericht: Leistungen für Bildung und Teilhabe nach § 28 SGB II (2022)",
        url: "https://www.bundesrechnungshof.de/SharedDocs/Downloads/DE/Berichte/2022/bildung-teilhabe-volltext.pdf?__blob=publicationFile&v=2",
      },
      {
        label: "BMAS – Leistungen des Bildungspakets (inkl. Lernförderung)",
        url: "https://www.bmas.de/DE/Arbeit/Grundsicherung-Buergergeld/Bildungspaket/Leistungen/leistungen-bildungspaket_art.html",
      },
    ],
  },
  "56d6ad251a": {
    title: "Mittagsverpflegung Schule/Kita (Bildung & Teilhabe)",
    zielgruppen: ["arbeitslose"],
    summary:
      "Übernahme der Kosten für die gemeinschaftliche Mittagsverpflegung in Schule, Kita oder Hort. Seit 2019 ohne Eigenanteil.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__28.html",
  },
  "25aa7b7cf5": {
    title: "Teilhabe am sozialen & kulturellen Leben",
    zielgruppen: ["arbeitslose"],
    summary:
      "Monatlicher Zuschuss von 15 € für Vereinsmitgliedschaften, Musikunterricht, Ferienfreizeiten oder ähnliche Freizeitaktivitäten für Kinder und Jugendliche aus Bürgergeld-Familien.",
    url: "https://www.gesetze-im-internet.de/sgb_2/__28.html",
    resources: [
      {
        label: "Familienportal des Bundes – Bildung und Teilhabe",
        url: "https://familienportal.de/familienportal/familienleistungen/bildung-und-teilhabe",
      },
      {
        label: "BMAS – Leistungen des Bildungspakets (inkl. Teilhabe)",
        url: "https://www.bmas.de/DE/Arbeit/Grundsicherung-Buergergeld/Bildungspaket/Leistungen/leistungen-bildungspaket_art.html",
      },
      {
        label:
          "Bundestag – Wissenschaftlicher Dienst: Leistungen für Teilhabe am sozialen Leben (2020)",
        url: "https://www.bundestag.de/resource/blob/691776/0e5aecb029f166b0490ac8c1602d4ea3/WD-6-033-20-pdf-data.pdf",
      },
    ],
  },

  // SGB III – Arbeitsförderung
  "3e29da2a64": {
    title: "Mehrbedarf Schwangere (Auszubildende)",
    zielgruppen: ["schwangere", "arbeitnehmer", "arbeitslose"],
    summary:
      "Schwangere Auszubildende erhalten zusätzlich zur Berufsausbildungsbeihilfe einen Mehrbedarf analog zum SGB II — als Aufschlag auf den anerkannten Bedarf.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__27.html",
  },
  a0ac21b3b0: {
    title: "Mehrbedarf Alleinerziehende (Auszubildende)",
    zielgruppen: ["eltern", "alleinerziehende", "arbeitnehmer", "arbeitslose"],
    summary:
      "Alleinerziehende Auszubildende erhalten einen prozentualen Mehrbedarf zur Berufsausbildungsbeihilfe, gestaffelt nach Anzahl und Alter der Kinder.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__27.html",
  },
  "9036cd29af": {
    title: "Mehrbedarf kostenaufwendige Ernährung (Auszubildende)",
    zielgruppen: ["arbeitnehmer", "arbeitslose"],
    summary:
      "Auszubildende mit ärztlich attestiertem Krankenkostbedarf erhalten einen Mehrbedarfszuschlag zur Berufsausbildungsbeihilfe.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__27.html",
  },
  d089ca7643: {
    title: "Mehrbedarf besondere Umstände (Auszubildende)",
    zielgruppen: ["arbeitslose"],
    summary:
      "Auffangtatbestand für atypische Lebenssituationen: Auszubildende können einen Mehrbedarf für besondere, anderweitig nicht erfasste Umstände erhalten.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__27.html",
  },
  dab0f2e20a: {
    title: "Erstausstattung Schwangerschaft (Auszubildende)",
    zielgruppen: ["schwangere", "arbeitslose"],
    summary:
      "Schwangere Auszubildende erhalten eine einmalige Beihilfe für Schwangerschafts- und Babyerstausstattung, analog zur Regelung im Bürgergeld.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__27.html",
  },
  "91bc26c1b4": {
    title: "Härtefalldarlehen Warmwasser (Auszubildende)",
    zielgruppen: ["arbeitslose"],
    summary:
      "In besonderen Härtefällen können Auszubildende ein Darlehen für den Mehrbedarf dezentraler Warmwassererzeugung erhalten.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__27.html",
  },
  "614af46ea1": {
    title: "Härtefalldarlehen Unterkunft (Auszubildende)",
    zielgruppen: ["arbeitslose"],
    summary:
      "In besonderen Härtefällen können Auszubildende ein Darlehen für angemessene Unterkunfts- und Heizkosten erhalten.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__27.html",
  },
  "0a82624bf1": {
    title: "Härtefalldarlehen Bildung & Teilhabe (Auszubildende)",
    zielgruppen: ["arbeitslose"],
    summary:
      "In besonderen Härtefällen können Auszubildende ein Darlehen für Leistungen für Bildung und Teilhabe (z. B. Klassenfahrten, Lernförderung) für ihre Kinder erhalten.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__27.html",
  },
  "7f3e554485": {
    title: "Härtefalldarlehen KV/PV-Beiträge (Auszubildende)",
    zielgruppen: ["arbeitslose"],
    summary:
      "In besonderen Härtefällen können Auszubildende ein Darlehen für Beiträge zur Kranken- und Pflegeversicherung erhalten.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__27.html",
  },
  a18f41bef4: {
    title: "Berufs- & Weiterbildungsberatung",
    zielgruppen: ["arbeitnehmer", "arbeitslose"],
    summary:
      "Die Bundesagentur für Arbeit berät kostenlos und unabhängig zu Berufswahl, Ausbildungsmöglichkeiten und Weiterbildungsperspektiven — für Jugendliche und Erwachsene.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__29.html",
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
        label: "BA – Bilanz Berufsberatungsjahr 2024/2025 (Statistik Ausbildungsmarkt)",
        url: "https://www.arbeitsagentur.de/news/bilanz-berufsberatung-2024-2025",
      },
    ],
  },
  "68420b824e": {
    title: "Proaktive Beratung für Schulabgänger",
    zielgruppen: ["arbeitslose"],
    summary:
      "Schulen melden Schulabgänger ohne Anschlussperspektive an die Agentur für Arbeit. Diese kontaktiert die jungen Menschen aktiv und bietet Beratungs- und Vermittlungsleistungen an.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__31a.html",
  },
  "268bc923ab": {
    title: "Berufsorientierungsmaßnahmen",
    zielgruppen: ["arbeitslose"],
    summary:
      "Vielfältige Angebote der Berufsberatung in Schulen, Berufsinformationszentren und durch Praktika, um Schülerinnen und Schülern die Berufswahl zu erleichtern.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__33.html",
  },
  "2bb22858e0": {
    title: "Arbeitsvermittlung",
    zielgruppen: ["arbeitslose"],
    summary:
      "Agentur für Arbeit und Jobcenter vermitteln aktiv zwischen Arbeitssuchenden und Arbeitgebern und unterstützen bei der Stellensuche, einschließlich Bewerbungsangeboten.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__35.html",
  },
  "6b180cd893": {
    title: "Potenzialanalyse (SGB III)",
    zielgruppen: ["arbeitslose"],
    summary:
      "Individuelle Stärken- und Schwächenanalyse durch die Agentur für Arbeit als Grundlage für eine passgenaue Eingliederungsvereinbarung.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__37.html",
  },
  c83c08a9c2: {
    title: "Frühzeitige Arbeitsvermittlung für Asylsuchende",
    zielgruppen: ["arbeitslose", "gefluechtete"],
    summary:
      "Asylsuchende mit Aufenthaltsgestattung können frühzeitig Arbeitsvermittlungsleistungen der Agentur für Arbeit in Anspruch nehmen — auch vor Abschluss des Asylverfahrens.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__39a.html",
    resources: [
      {
        label: "IAB – Arbeitsmarktintegration von Geflüchteten (Forschungsübersicht)",
        url: "https://iab.de/arbeitsmarktintegration-von-gefluechteten/",
      },
      {
        label: "IAB – 10 Jahre Fluchtmigration: Beschäftigungsquote nähert sich Durchschnitt an (2025)",
        url: "https://iab.de/presseinfo/10-jahre-fluchtmigration-beschaeftigungsquote-von-gefluechteten-naehert-sich-dem-durchschnitt-in-deutschland-an/",
      },
      {
        label: "IAB – Erwerbstätigenquoten 8 Jahre nach Zuzug bei 68 Prozent (Pressemitteilung)",
        url: "https://iab.de/presseinfo/iab-presseinformation-arbeitsmarktintegration/",
      },
    ],
  },
  e034262ffa: {
    title: "Potenzialanalyse für Asylsuchende",
    zielgruppen: ["arbeitslose", "gefluechtete"],
    summary:
      "Frühzeitige Erfassung vorhandener Qualifikationen, Berufserfahrung und Sprachkenntnisse von Asylsuchenden, um Wege in Ausbildung oder Arbeit individuell zu planen.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__39a.html",
  },
  efb462218f: {
    title: "Vermittlungsbudget",
    zielgruppen: ["arbeitslose"],
    summary:
      "Flexible Mittel der Agentur für Arbeit zur Unterstützung der Arbeitssuche, z. B. für Bewerbungskosten, Fahrtkosten zu Vorstellungsgesprächen, Arbeitskleidung oder Umzugskosten.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__44.html",
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
        label: "Statistik BA – Aktuelle Eckwerte Förderung und berufliche Rehabilitation",
        url: "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Fachstatistiken/Foerderung-und-berufliche-Rehabilitation/Aktuelle-Eckwerte-Nav.html",
      },
      {
        label: "BA – Merkblatt Vermittlungsbudget (PDF)",
        url: "https://www.arbeitsagentur.de/datei/dok_ba026250.pdf",
      },
    ],
  },
  "2dc9552499": {
    title: "Aktivierungs- & Eingliederungsmaßnahmen",
    zielgruppen: ["arbeitnehmer", "arbeitslose"],
    summary:
      "Förderung der Teilnahme an Maßnahmen zur Aktivierung und beruflichen Eingliederung, z. B. Bewerbungstraining, Praktika oder Qualifizierungsmodule bei zugelassenen Trägern.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__45.html",
  },
  "003e933e05": {
    title: "Probebeschäftigung Menschen mit Behinderungen",
    zielgruppen: ["arbeitslose", "behinderung"],
    summary:
      "Arbeitgeber erhalten einen Zuschuss für eine bis zu dreimonatige Probebeschäftigung von Menschen mit Behinderungen, um beiden Seiten eine risikoarme Erprobung zu ermöglichen.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__46.html",
  },
  bc73e849a6: {
    title: "Arbeitshilfen für Menschen mit Behinderungen",
    zielgruppen: ["arbeitslose", "behinderung"],
    summary:
      "Zuschüsse für technische Arbeitshilfen oder Ausstattungsanpassungen am Arbeitsplatz, damit Menschen mit Behinderungen ihre Tätigkeit ausüben können.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__46.html",
    resources: [
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
  "7ab6d0b9e4": {
    title: "Berufsorientierungsmaßnahmen für Schüler",
    zielgruppen: ["arbeitslose"],
    summary:
      "Geförderte Berufsorientierungsmaßnahmen wie Betriebsbesichtigungen und Berufserkundungen, um Schülerinnen und Schülern einen realistischen Einblick in Berufsfelder zu geben.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__48.html",
  },
  "9b4a1be512": {
    title: "Berufsorientierungspraktikum",
    zielgruppen: ["arbeitslose"],
    summary:
      "Geförderte Kurzpraktika für Schülerinnen und Schüler in Betrieben, um konkrete Berufsfelder kennenzulernen und die Berufswahl zu unterstützen.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__48a.html",
  },
  e99e162a4e: {
    title: "Berufseinstiegsbegleitung",
    zielgruppen: ["arbeitslose"],
    summary:
      "Persönliche Begleitung von förderungsbedürftigen Schülerinnen und Schülern ab der Vorabgangsklasse bis zur Stabilisierung in einer Ausbildung oder Beschäftigung.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__49.html",
  },
  "43f51dee69": {
    title: "Berufsvorbereitende Bildungsmaßnahmen (BvB)",
    zielgruppen: ["arbeitnehmer", "arbeitslose"],
    summary:
      "Maßnahmen zur Vorbereitung auf eine Berufsausbildung für junge Menschen, die die Ausbildungsreife noch nicht erreicht haben. Vermittelt Grundlagen für mehrere Berufsfelder.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__51.html",
  },
  b149304162: {
    title: "Hauptschulabschluss in BvB-Maßnahmen",
    zielgruppen: ["arbeitslose"],
    summary:
      "Im Rahmen einer berufsvorbereitenden Bildungsmaßnahme kann der Hauptschulabschluss nachgeholt werden — kombiniert mit beruflicher Orientierung.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__53.html",
  },
  "5fd08d1d95": {
    title: "Einstiegsqualifizierung (EQ)",
    zielgruppen: ["arbeitnehmer", "arbeitslose"],
    summary:
      "Betriebliches Langzeitpraktikum (6–12 Monate) für junge Menschen, die noch keinen Ausbildungsplatz gefunden haben — als Brücke in eine vollwertige Berufsausbildung.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__54a.html",
  },
  "9b9641cd33": {
    title: "Berufsausbildungsbeihilfe (BAB)",
    zielgruppen: ["azubis"],
    summary:
      "Finanzieller Zuschuss für Auszubildende, die wegen der Ausbildungsstätte nicht bei den Eltern wohnen können und deren Einkommen für den Lebensunterhalt nicht ausreicht.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__56.html",
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
    ],
  },
  "8b5f6810e4": {
    title: "BAB: Fahrtkostenerstattung",
    zielgruppen: ["arbeitnehmer", "arbeitslose"],
    summary:
      "Im Rahmen der Berufsausbildungsbeihilfe werden auch die notwendigen Fahrtkosten zur Ausbildungsstätte und zur Berufsschule erstattet.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__56.html",
  },
  "9c32e643af": {
    title: "BAB: Sonstige Aufwendungen",
    zielgruppen: ["arbeitnehmer", "arbeitslose"],
    summary:
      "Übernahme sonstiger ausbildungsbedingter Kosten (z. B. Lernmittel, Prüfungsgebühren, Arbeitskleidung) im Rahmen der Berufsausbildungsbeihilfe.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__64.html",
  },
  "2b3866027f": {
    title: "BAB: Kinderpauschale",
    zielgruppen: ["arbeitnehmer", "arbeitslose"],
    summary:
      "Zusätzliche pauschale Leistung im Rahmen der Berufsausbildungsbeihilfe für Auszubildende mit eigenem Kind im Haushalt.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__64.html",
  },
  cff80b6d13: {
    title: "BAB für Arbeitslose",
    zielgruppen: ["arbeitnehmer", "arbeitslose"],
    summary:
      "Berufsausbildungsbeihilfe für arbeitslose Erwachsene, die nach längerer Erwerbslosigkeit eine Berufsausbildung aufnehmen — als finanzielle Brücke in den Beruf.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__70.html",
  },
  "7a2c045a10": {
    title: "Ausbildungsvergütungszuschuss für Behinderte",
    zielgruppen: ["arbeitslose", "behinderung"],
    summary:
      "Zuschuss an Arbeitgeber zur Ausbildungsvergütung, wenn sie Auszubildende mit Behinderung oder Schwerbehinderung einstellen — als Ausgleich für anfängliche Minderleistung.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__73.html",
  },
  "120fd52abc": {
    title: "Mobilitätszuschuss für Auszubildende",
    zielgruppen: ["arbeitslose"],
    summary:
      "Pauschaler Zuschuss zu Fahrtkosten für junge Auszubildende im ersten Ausbildungsjahr, die eine Ausbildungsstelle außerhalb ihres Wohnortes antreten.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__73a.html",
  },
  "16f0eb68a8": {
    title: "Assistierte Ausbildung",
    zielgruppen: ["arbeitslose"],
    summary:
      "Individuelle sozialpädagogische Begleitung und Unterstützung während der gesamten Ausbildung für junge Menschen mit besonderem Förderbedarf — sowohl im Betrieb als auch in der Berufsschule.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__74.html",
  },
  "8dd1342093": {
    title: "Ausbildungsbegleitende Hilfen (abH)",
    zielgruppen: ["arbeitnehmer", "arbeitslose"],
    summary:
      "Stütz- und Fördermaßnahmen wie Nachhilfe und sozialpädagogische Betreuung neben der Berufsausbildung, um Ausbildungsabbrüche zu vermeiden.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__75.html",
  },
  "53d5c82205": {
    title: "Außerbetriebliche Berufsausbildung (BaE)",
    zielgruppen: ["arbeitnehmer", "arbeitslose"],
    summary:
      "Vollständige Berufsausbildung in einer außerbetrieblichen Einrichtung für junge Menschen, für die kein betrieblicher Ausbildungsplatz gefunden werden konnte.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__76.html",
  },
  "333b511501": {
    title: "Bildungsgutschein (Weiterbildung)",
    zielgruppen: ["arbeitnehmer", "arbeitslose"],
    summary:
      "Gutschein der Agentur für Arbeit oder des Jobcenters, der die Kosten einer beruflichen Weiterbildungsmaßnahme bei einem zugelassenen Träger vollständig abdeckt.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__81.html",
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
    ],
  },
  "1fc77353c5": {
    title: "Weiterbildungsförderung für Beschäftigte",
    zielgruppen: ["arbeitnehmer", "arbeitslose"],
    summary:
      "Arbeitgeber und Beschäftigte können Zuschüsse zu den Kosten und zum Arbeitsentgelt einer Weiterbildungsmaßnahme erhalten, insbesondere bei Strukturwandel oder Engpassberufen.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__82.html",
  },
  f869d495e8: {
    title: "Qualifizierungsgeld",
    zielgruppen: ["arbeitnehmer", "arbeitslose"],
    summary:
      "Lohnersatzleistung für Beschäftigte, die für eine längere betrieblich veranlasste Qualifizierung freigestellt werden — finanziert vom Staat, ergänzt durch den Arbeitgeber.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__82a.html",
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
  "4fb31b684a": {
    title: "Unterkunft & Verpflegung bei Weiterbildung",
    zielgruppen: ["arbeitnehmer", "arbeitslose"],
    summary:
      "Übernahme der Kosten für auswärtige Unterkunft und Verpflegung, wenn eine Weiterbildungsmaßnahme eine vorübergehende Abwesenheit vom Wohnort erfordert.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__86.html",
  },
  "2cf3a8f1c4": {
    title: "Kinderbetreuungskosten bei Weiterbildung",
    zielgruppen: ["arbeitnehmer", "arbeitslose"],
    summary:
      "Erstattung von Kinderbetreuungskosten, die durch die Teilnahme an einer geförderten Weiterbildungsmaßnahme entstehen, bis zu einem Höchstbetrag pro Kind.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__87.html",
  },
  "0dd4c414cd": {
    title: "Weiterbildungsprämie & Weiterbildungsgeld",
    zielgruppen: ["arbeitnehmer", "arbeitslose"],
    summary:
      "Prämie für das Bestehen von Zwischen- und Abschlussprüfungen einer geförderten Weiterbildung sowie ein monatliches Weiterbildungsgeld von 150 € als Anreiz.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__87a.html",
  },
  f2d30d9e83: {
    title: "Eingliederungszuschuss",
    zielgruppen: ["arbeitslose"],
    summary:
      "Zuschuss an Arbeitgeber, die Arbeitnehmer mit erschwerter Vermittlung einstellen — als zeitlich befristeter Ausgleich für anfängliche Minderleistung.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__88.html",
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
    ],
  },
  f11890706a: {
    title: "Eingliederungszuschuss für Behinderte",
    zielgruppen: ["arbeitslose", "behinderung"],
    summary:
      "Erhöhter und längerfristiger Eingliederungszuschuss für Arbeitgeber, die Menschen mit Behinderungen oder schwerbehinderte Menschen einstellen.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__90.html",
  },
  e00b2274f6: {
    title: "Gründungszuschuss",
    zielgruppen: ["selbststaendige"],
    summary:
      "Förderung von Arbeitslosen, die sich selbstständig machen: Sechs Monate lang Arbeitslosengeld plus 300 € monatlich für die Sozialversicherung; danach optional weitere neun Monate à 300 €.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__93.html",
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
  "832866d073": {
    title: "Kurzarbeitergeld",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Lohnersatzleistung für Beschäftigte, deren Arbeitszeit vorübergehend verkürzt wird — sichert 60–67 % des Nettoentgeltausfalls und verhindert Entlassungen bei wirtschaftlichen Schwankungen.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__95.html",
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
  b3187ead66: {
    title: "Saison-Kurzarbeitergeld",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Sonderform des Kurzarbeitergelds für Betriebe des Baugewerbes und verwandter Branchen während der Schlechtwetterperiode (Dezember–März), kombiniert mit ergänzenden Leistungen wie Wintergeld.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__101.html",
  },
  "4c5725c9f3": {
    title: "Zuschuss-Wintergeld",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Ergänzende Leistung zum Saison-Kurzarbeitergeld: Zuschuss für Bauarbeiter, die Guthaben aus Arbeitszeitkonten zur Vermeidung witterungsbedingter Kündigungen einbringen.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__102.html",
  },
  ffc4cc4079: {
    title: "Mehraufwands-Wintergeld",
    zielgruppen: ["arbeitslose"],
    summary:
      "Pauschale Wintergeldleistung für Arbeitnehmer im Baugewerbe, die witterungsbedingte Mehraufwendungen haben — z. B. zusätzliche Kleidung und Wegezeiten.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__102.html",
  },
  c81ca6e109: {
    title: "Wintergeld: SV-Beitragserstattung",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Arbeitgeber im Baugewerbe erhalten die Sozialversicherungsbeiträge erstattet, die sie für Kurzarbeitende während der Schlechtwetterperiode weiter entrichten müssen.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__102.html",
  },
  "21512b8b07": {
    title: "Heimarbeiter-Kurzarbeitergeld",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Sonderform des Kurzarbeitergelds für in Heimarbeit Beschäftigte, deren Arbeit witterungs- oder wirtschaftsbedingt vorübergehend wegfällt.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__103.html",
  },
  "7eda8bdd59": {
    title: "SV-Beitragserstattung bei Weiterbildung in Kurzarbeit",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Arbeitgeber erhalten die Sozialversicherungsbeiträge teilweise erstattet, wenn Beschäftigte die Zeit der Kurzarbeit für eine zertifizierte Weiterbildung nutzen.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__106a.html",
  },
  "795eb0778f": {
    title: "Transfermaßnahmen",
    zielgruppen: ["arbeitnehmer", "arbeitslose"],
    summary:
      "Hälftige Bezuschussung von Qualifizierungs- und Beratungsmaßnahmen für Beschäftigte, die von Entlassung bedroht sind, um den Übergang in eine neue Beschäftigung zu erleichtern.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__110.html",
  },
  b8b6c22629: {
    title: "Transferkurzarbeitergeld",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Lohnersatzleistung für Beschäftigte, die in eine betriebsorganisatorisch eigenständige Einheit (Transfergesellschaft) wechseln, um eine neue Beschäftigung zu finden — bis zu 12 Monate.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__111.html",
  },
  fd74e88aac: {
    title: "Weiterbildungsförderung bei Transferkurzarbeitergeld",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Hälftige Übernahme der Weiterbildungskosten für Personen in einer Transfergesellschaft, die ihre Chancen am Arbeitsmarkt durch Qualifizierung verbessern wollen.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__111a.html",
  },
  "82ed1f535b": {
    title: "Allgemeine Teilhabeleistungen (SGB III)",
    zielgruppen: ["arbeitslose", "behinderung"],
    summary:
      "Allgemeine Eingliederungsleistungen für Menschen mit Behinderungen, analog zu denen für Nicht-Behinderte, aber mit behinderungsspezifischen Anpassungen.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__113.html",
  },
  cfee7a8033: {
    title: "Besondere Teilhabeleistungen (SGB III)",
    zielgruppen: ["arbeitslose", "behinderung"],
    summary:
      "Besondere Förderleistungen für Menschen mit Behinderungen, die durch die allgemeinen Leistungen nicht abgedeckt werden, z. B. Internatsunterbringung oder spezielle technische Hilfsmittel.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__113.html",
  },
  "2f744dc4e0": {
    title: "Übergangsgeld (mit Vorbeschäftigungszeit)",
    zielgruppen: ["arbeitslose", "behinderung"],
    summary:
      "Einkommensersatz für Menschen mit Behinderungen während einer Maßnahme zur Teilhabe am Arbeitsleben, wenn zuvor Versicherungszeiten in der Arbeitslosenversicherung bestehen.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__119.html",
  },
  "5704a44853": {
    title: "Übergangsgeld (ohne Vorbeschäftigungszeit)",
    zielgruppen: ["arbeitslose", "behinderung"],
    summary:
      "Übergangsgeld für Menschen mit Behinderungen ohne ausreichende Vorversicherungszeit — in der Regel als pauschalierte Leistung berechnet.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__121.html",
  },
  "3f74652a7a": {
    title: "Ausbildungsgeld bei Berufsausbildung",
    zielgruppen: ["arbeitnehmer", "arbeitslose", "behinderung"],
    summary:
      "Finanzielle Unterstützung für Menschen mit Behinderungen während einer regulären Berufsausbildung oder einer vorbereitenden Maßnahme.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__122.html",
  },
  "9f05b64343": {
    title: "Ausbildungsgeld bei innerbetrieblicher Qualifizierung",
    zielgruppen: ["arbeitnehmer", "arbeitslose", "behinderung"],
    summary:
      "Ausbildungsgeld für Menschen mit Behinderungen, die an einer innerbetrieblichen Qualifizierungsmaßnahme teilnehmen.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__122.html",
  },
  d3084bd92d: {
    title: "Ausbildungsgeld für WfbM-Beschäftigte",
    zielgruppen: ["arbeitslose", "behinderung"],
    summary:
      "Ausbildungsgeld für Menschen mit Behinderungen, die in einer Werkstatt für behinderte Menschen (WfbM) oder einer vergleichbaren Einrichtung im Eingangs- oder Berufsbildungsbereich tätig sind.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__122.html",
  },
  e69d1d8240: {
    title: "Unterkunft & Verpflegung bei Reha-Maßnahmen",
    zielgruppen: ["arbeitslose", "behinderung"],
    summary:
      "Übernahme der Kosten für behindertengerechte Unterkunft und Verpflegung, wenn eine Maßnahme zur Teilhabe eine auswärtige Unterbringung erfordert.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__128.html",
  },
  "105cc91ad7": {
    title: "Arbeitslosengeld I",
    zielgruppen: ["arbeitslose", "arbeitnehmer"],
    summary:
      "Lohnersatzleistung für versicherungspflichtig Beschäftigte, die arbeitslos werden. Die Höhe beträgt 60 % (oder 67 % mit Kind) des pauschalierten Nettoentgelts; Bezugsdauer 6–24 Monate.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__136.html",
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
    ],
  },
  "547ab0022f": {
    title: "Arbeitslosengeld bei Weiterbildung",
    zielgruppen: ["arbeitnehmer", "arbeitslose"],
    summary:
      "Das Arbeitslosengeld wird weitergezahlt, wenn eine arbeitslose Person an einer von der Arbeitsagentur oder dem Jobcenter geförderten Weiterbildungsmaßnahme teilnimmt.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__136.html",
  },
  "6f38927670": {
    title: "ALG bei eingeschränkter Leistungsfähigkeit (Nahtlosigkeit)",
    zielgruppen: ["arbeitslose"],
    summary:
      "Überbrückendes Arbeitslosengeld für Personen, die wegen einer gesundheitlichen Einschränkung nicht voll erwerbsfähig sind, solange die Rentenversicherung noch nicht entschieden hat (Nahtlosigkeitsregelung).",
    url: "https://www.gesetze-im-internet.de/sgb_3/__145.html",
  },
  "89a96ef6d8": {
    title: "Teilarbeitslosengeld",
    zielgruppen: ["arbeitslose"],
    summary:
      "Arbeitslosengeld für Personen, die eine von mehreren Teilzeitbeschäftigungen verlieren und dadurch teilarbeitslos werden — z. B. bei Verlust eines Zweitjobs.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__162.html",
  },
  "657a2c9bff": {
    title: "Insolvenzgeld",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Sicherung der ausstehenden Nettolöhne für die letzten drei Monate vor Eröffnung des Insolvenzverfahrens des Arbeitgebers — finanziert über die Insolvenzgeldumlage und gezahlt von der Bundesagentur für Arbeit.",
    url: "https://www.gesetze-im-internet.de/sgb_3/__165.html",
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

  // SGB IX – Rehabilitation und Teilhabe von Menschen mit Behinderungen
  "118dc4f282": {
    title: "Medizinische Rehabilitation (SGB IX)",
    zielgruppen: ["behinderung"],
    summary:
      "Übergreifende Vorschrift für medizinische Rehabilitationsleistungen aller Rehabilitationsträger — von Heilbehandlung über Hilfsmittel bis zu Belastungserprobung und Arbeitstherapie.",
    url: "https://www.gesetze-im-internet.de/sgb_9_2018/__42.html",
  },
  "0cd87f325d": {
    title: "Stufenweise Wiedereingliederung",
    zielgruppen: ["behinderung"],
    summary:
      "Schrittweise Rückkehr arbeitsunfähiger Beschäftigter in den Beruf mit reduzierter Stundenzahl, begleitet von medizinischen und sonstigen Leistungen — auch bekannt als „Hamburger Modell“.",
    url: "https://www.gesetze-im-internet.de/sgb_9_2018/__44.html",
  },
  "420cb334ee": {
    title: "Früherkennung & Frühförderung",
    zielgruppen: ["jugendliche", "behinderung"],
    summary:
      "Medizinische und heilpädagogische Komplexleistungen für Kinder mit (drohender) Behinderung bis zur Einschulung, gebündelt in interdisziplinären Frühförderstellen.",
    url: "https://www.gesetze-im-internet.de/sgb_9_2018/__46.html",
  },
  "2c5bdf25e8": {
    title: "Hilfsmittel zur medizinischen Reha",
    zielgruppen: ["behinderung"],
    summary:
      "Versorgung mit Hilfsmitteln, die im Rahmen der medizinischen Rehabilitation eine Behinderung ausgleichen oder eine Krankheit lindern (z. B. Orthesen, Prothesen, Hörgeräte).",
    url: "https://www.gesetze-im-internet.de/sgb_9_2018/__47.html",
  },
  "3080592c41": {
    title: "Leistungen zur Teilhabe am Arbeitsleben",
    zielgruppen: ["arbeitnehmer", "behinderung"],
    summary:
      "Sämtliche Leistungen, die Menschen mit Behinderungen den Erhalt, die Verbesserung oder die Wiederherstellung ihrer Erwerbsfähigkeit ermöglichen — von Qualifizierung über Arbeitsassistenz bis zur Werkstattbeschäftigung.",
    url: "https://www.gesetze-im-internet.de/sgb_9_2018/__49.html",
  },
  "15551b2706": {
    title: "Arbeitgeberleistungen (Teilhabe am Arbeitsleben)",
    zielgruppen: ["arbeitnehmer", "behinderung"],
    summary:
      "Zuschüsse und Erstattungen an Arbeitgeber, die Menschen mit Behinderungen beschäftigen — z. B. für behindertengerechte Arbeitsplatzausstattung, Ausbildungszuschuss oder Probebeschäftigung.",
    url: "https://www.gesetze-im-internet.de/sgb_9_2018/__50.html",
  },
  "9741418b92": {
    title: "Arbeitsförderungsgeld (WfbM)",
    zielgruppen: ["arbeitnehmer", "behinderung"],
    summary:
      "Monatliche Zusatzleistung für Beschäftigte in Werkstätten für behinderte Menschen, die ihren Arbeitslohn aufstockt — derzeit 52 € pro Monat.",
    url: "https://www.gesetze-im-internet.de/sgb_9_2018/__59.html",
  },
  "1c5728112f": {
    title: "Ergänzende Leistungen zur Reha",
    zielgruppen: ["jugendliche", "arbeitnehmer", "behinderung"],
    summary:
      "Begleitende Leistungen zu medizinischer Reha und Teilhabe am Arbeitsleben, z. B. Beiträge zur Sozialversicherung, Reisekosten, Haushaltshilfe oder Kinderbetreuungskosten.",
    url: "https://www.gesetze-im-internet.de/sgb_9_2018/__64.html",
  },
  "18884f357b": {
    title: "Lebensunterhaltsleistungen bei Reha",
    zielgruppen: ["behinderung"],
    summary:
      "Sicherstellung des Lebensunterhalts während einer Rehabilitationsmaßnahme — durch Krankengeld, Übergangsgeld, Verletztengeld oder Arbeitslosengeld, je nach Rehabilitationsträger.",
    url: "https://www.gesetze-im-internet.de/sgb_9_2018/__65.html",
  },
  adcccdcc56: {
    title: "Teilhabe an Bildung (Reha)",
    zielgruppen: ["behinderung"],
    summary:
      "Unterstützende Leistungen für Schulbildung, Hochschulbildung und schulische Berufsausbildung von Menschen mit Behinderungen — z. B. Schulhelfer, Studienassistenz, technische Hilfsmittel.",
    url: "https://www.gesetze-im-internet.de/sgb_9_2018/__75.html",
  },
  "8b7f6db35d": {
    title: "Leistungen zur Sozialen Teilhabe",
    zielgruppen: ["behinderung"],
    summary:
      "Übergreifende Vorschrift für Leistungen, die Menschen mit Behinderungen eine gleichberechtigte Teilhabe am Leben in der Gemeinschaft ermöglichen — Wohnen, Assistenz, Mobilität, Verständigung u. a.",
    url: "https://www.gesetze-im-internet.de/sgb_9_2018/__76.html",
  },
  "5b0179c24c": {
    title: "Leistungen für Wohnraum",
    zielgruppen: ["behinderung"],
    summary:
      "Finanzierung von behindertengerechtem Umbau, Ausstattung und Erhalt eigenen Wohnraums sowie Übernahme der Mehrkosten gegenüber unbehindertem Wohnen.",
    url: "https://www.gesetze-im-internet.de/sgb_9_2018/__77.html",
  },
  dc3998b1ca: {
    title: "Assistenzleistungen",
    zielgruppen: ["behinderung"],
    summary:
      "Persönliche Assistenz für Menschen mit Behinderungen bei der Haushaltsführung, der Tagesstrukturierung und der Teilhabe am Leben in der Gemeinschaft — auch im Arbeitgebermodell oder als Sachleistung.",
    url: "https://www.gesetze-im-internet.de/sgb_9_2018/__78.html",
  },
  "2e411d57a5": {
    title: "Heilpädagogische Leistungen",
    zielgruppen: ["jugendliche", "behinderung"],
    summary:
      "Heilpädagogische Maßnahmen für Kinder mit Behinderung zur Förderung ihrer Entwicklung und Persönlichkeitsentfaltung, in der Regel im Vorschulalter.",
    url: "https://www.gesetze-im-internet.de/sgb_9_2018/__79.html",
  },
  "0e1dc209c2": {
    title: "Betreuung in einer Pflegefamilie",
    zielgruppen: ["pflegende-angehoerige", "behinderung"],
    summary:
      "Übernahme der Kosten für die Betreuung eines Menschen mit Behinderung in einer anderen als der eigenen Familie, wenn dies seinem Bedarf besser entspricht als andere Wohnformen.",
    url: "https://www.gesetze-im-internet.de/sgb_9_2018/__80.html",
  },
  "944dbbd0c7": {
    title: "Erwerb praktischer Kenntnisse & Fähigkeiten",
    zielgruppen: ["arbeitnehmer", "behinderung"],
    summary:
      "Leistungen für Menschen mit Behinderungen zum Erwerb und Erhalt praktischer Kenntnisse und Fähigkeiten, die für ein selbstbestimmtes Leben notwendig sind — z. B. Hauswirtschaft, Mobilitätstraining.",
    url: "https://www.gesetze-im-internet.de/sgb_9_2018/__81.html",
  },
  "28c65e19b0": {
    title: "Förderung der Verständigung",
    zielgruppen: ["behinderung"],
    summary:
      "Leistungen für Hilfen zur Verständigung mit der Umwelt, z. B. Gebärdensprachdolmetscher, Schriftdolmetscher oder andere Kommunikationshilfen.",
    url: "https://www.gesetze-im-internet.de/sgb_9_2018/__82.html",
  },
  baa564de36: {
    title: "Leistungen zur Mobilität",
    zielgruppen: ["behinderung"],
    summary:
      "Beförderungsdienste sowie Leistungen für ein behindertengerechtes Kraftfahrzeug, dessen Beschaffung, Umrüstung und Erhaltung — für Menschen mit Behinderungen, die nicht regelmäßig Bus & Bahn nutzen können.",
    url: "https://www.gesetze-im-internet.de/sgb_9_2018/__83.html",
  },
  abaadb428f: {
    title: "Hilfsmittel zur sozialen Teilhabe",
    zielgruppen: ["behinderung"],
    summary:
      "Hilfsmittel, die nicht der medizinischen Versorgung dienen, sondern eine gleichberechtigte Teilhabe am Leben in der Gemeinschaft ermöglichen — z. B. Hilfsmittel zur Haushaltsführung oder Freizeit.",
    url: "https://www.gesetze-im-internet.de/sgb_9_2018/__84.html",
  },
  "600d6bae6f": {
    title: "Leistungen zur Beschäftigung (Eingliederungshilfe)",
    zielgruppen: ["behinderung"],
    summary:
      "Leistungen zur Beschäftigung in anerkannten Werkstätten für behinderte Menschen, bei anderen Leistungsanbietern oder im Rahmen eines Budgets für Arbeit auf dem allgemeinen Arbeitsmarkt.",
    url: "https://www.gesetze-im-internet.de/sgb_9_2018/__111.html",
  },
  "31ccc76ab7": {
    title: "Teilhabe an Bildung (Eingliederungshilfe)",
    zielgruppen: ["behinderung"],
    summary:
      "Eingliederungshilfeleistungen für Schulbildung, Hochschulbildung und schulische Berufsausbildung, einschließlich Schulbegleitung und qualifizierter Assistenz.",
    url: "https://www.gesetze-im-internet.de/sgb_9_2018/__112.html",
  },
  "3a8ee6279b": {
    title: "Unentgeltliche Beförderung Schwerbehinderter",
    zielgruppen: ["behinderung"],
    summary:
      "Schwerbehinderte Menschen mit entsprechendem Merkzeichen im Schwerbehindertenausweis können den ÖPNV kostenfrei nutzen. Verkehrsunternehmen werden ihre Fahrgeldausfälle erstattet.",
    url: "https://www.gesetze-im-internet.de/sgb_9_2018/__228.html",
    resources: [
      {
        label: "Destatis – 7,9 Mio. schwerbehinderte Menschen in Deutschland (2023)",
        url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2024/07/PD24_281_227.html",
      },
      {
        label: "Destatis – Statistikportal: Behinderte Menschen",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Gesundheit/Behinderte-Menschen/_inhalt.html",
      },
      {
        label: "ÖPNV-Info – Rund 1,4 Mio. Schwerbehinderte nutzen die Freifahrt",
        url: "https://www.oepnv-info.de/aktuelles/themen/rund-14-mio-schwerbehinderte-menschen-nutzen-die-freifahrt",
      },
      {
        label: "ÖPNV-Info – Unentgeltliche Beförderung: Voraussetzungen & Wertmarke",
        url: "https://www.oepnv-info.de/freifahrt/unentgeltliche-befoerderung",
      },
      {
        label: "BSG – Kostenfreier ÖPNV auch für schwerbehinderte Heimbewohner (Urteil 2024)",
        url: "https://www.bsg.bund.de/SharedDocs/Pressemitteilungen/DE/2024/2024_26.html",
      },
    ],
  },

  // MuSchG – Mutterschutzgesetz
  "54130120d3": {
    title: "KV/PV-Beitragserstattung während Elternzeit",
    zielgruppen: ["schwangere", "arbeitnehmer"],
    summary:
      "Arbeitgeber, die während der Elternzeit eines Beschäftigten keine Bezüge zahlen, können die Arbeitgeber- und Arbeitnehmeranteile zur Kranken- und Pflegeversicherung vom Bundesamt für Familie erstattet bekommen.",
    url: "https://www.gesetze-im-internet.de/muscheltzeltzv/__9.html",
  },
  "8a8c996520": {
    title: "Mutterschaftsgeld",
    zielgruppen: ["schwangere", "arbeitnehmer"],
    summary:
      "Gesetzlich krankenversicherte Arbeitnehmerinnen erhalten während der Mutterschutzfristen (6 Wochen vor bis 8 Wochen nach der Geburt) Mutterschaftsgeld von der Krankenkasse — bis zu 13 € täglich. Nicht gesetzlich Versicherte erhalten eine einmalige Zahlung vom Bundesamt für Familie.",
    url: "https://www.gesetze-im-internet.de/muschg_2018/__19.html",
  },
  "335a9c1646": {
    title: "Arbeitgeberzuschuss zum Mutterschaftsgeld",
    zielgruppen: ["schwangere", "arbeitnehmer"],
    summary:
      "Der Arbeitgeber stockt das Mutterschaftsgeld der Krankenkasse auf den durchschnittlichen Nettolohn auf. Übersteigt das Nettoeinkommen 13 € täglich, trägt er die Differenz.",
    url: "https://www.gesetze-im-internet.de/muschg_2018/__20.html",
  },

  // EStG – Einkommensteuergesetz
  ffd5a1165f: {
    title: "Riester-Förderung (Sonderausgabenabzug)",
    zielgruppen: ["eltern"],
    summary:
      "Eigenbeiträge zu einem zertifizierten Riester-Altersvorsorgevertrag können als Sonderausgaben steuerlich geltend gemacht werden. Zusätzlich gibt es staatliche Zulagen (Grundzulage + Kinderzulage).",
    url: "https://www.gesetze-im-internet.de/estg/__10a.html",
  },
  "1df3d58728": {
    title: "Altersentlastungsbetrag",
    zielgruppen: ["senior"],
    summary:
      "Steuerpflichtige ab 64 Jahren erhalten einen steuerlichen Freibetrag auf bestimmte Einkünfte (z. B. Arbeitslohn, Kapitalerträge). Der Betrag wird für jeden Geburtsjahrgang schrittweise abgeschmolzen.",
    url: "https://www.gesetze-im-internet.de/estg/__24a.html",
  },
  "0afbcd8706": {
    title: "Entlastungsbetrag für Alleinerziehende",
    zielgruppen: ["eltern", "alleinerziehende"],
    summary:
      "Alleinerziehende mit mindestens einem Kind im Haushalt erhalten einen jährlichen Steuerfreibetrag von 4.260 € (plus 240 € für jedes weitere Kind), der die steuerliche Mehrbelastung gegenüber Paaren abmildert.",
    url: "https://www.gesetze-im-internet.de/estg/__24b.html",
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
  "0c4762dab7": {
    title: "Kinderfreibetrag & Familienleistungsausgleich",
    zielgruppen: ["eltern"],
    summary:
      "Das Finanzamt prüft automatisch, ob der Kinderfreibetrag (derzeit 6.612 € je Kind) oder das Kindergeld günstiger ist. Ist der Freibetrag vorteilhafter, wird er angerechnet und das Kindergeld verrechnet.",
    url: "https://www.gesetze-im-internet.de/estg/__31.html",
    resources: [
      {
        label: "BMF EStH 2025 – § 31 Familienleistungsausgleich",
        url: "https://esth.bundesfinanzministerium.de/lsth/2025/A-Einkommensteuergesetz/IV-Tarif-31-34b/Paragraf-31/inhalt.html",
      },
      {
        label: "BMF EStH 2025 – Kinderfreibetrag-Tabelle (§ 32 Abs. 6 EStG)",
        url: "https://esth.bundesfinanzministerium.de/esth/2025/tabellarische-Uebersicht/Kinderfreibetrag.html",
      },
      {
        label: "BMF – Steuerliche Änderungen 2025 (inkl. Kinderfreibetrag)",
        url: "https://www.bundesfinanzministerium.de/Content/DE/Standardartikel/Themen/Steuern/das-aendert-sich-2025.html",
      },
    ],
  },
  "4f95969599": {
    title: "Außergewöhnliche Belastungen (besondere Fälle)",
    zielgruppen: ["eltern"],
    summary:
      "Unterhaltsleistungen an bedürftige Angehörige oder Aufwendungen für die Berufsausbildung eines Kindes außerhalb des Haushalts können bis zu einem Höchstbetrag als außergewöhnliche Belastung abgezogen werden.",
    url: "https://www.gesetze-im-internet.de/estg/__33a.html",
  },
  "28c9cd281e": {
    title: "Behinderten-Pauschbetrag",
    zielgruppen: ["pflegende-angehoerige", "behinderung", "hinterbliebene"],
    summary:
      "Menschen mit Behinderung erhalten je nach Grad der Behinderung (GdB) einen jährlichen Steuerpauschbetrag von 384 € (GdB 20) bis 7.400 € (GdB 100 oder Merkzeichen H/Bl). Pflegepersonen erhalten ebenfalls einen Pauschbetrag.",
    url: "https://www.gesetze-im-internet.de/estg/__33b.html",
    resources: [
      {
        label:
          "BMF Monatsbericht Dez 2021 – Analyse: Erhöhung der Behinderten-Pauschbeträge",
        url: "https://www.bundesfinanzministerium.de/Monatsberichte/2021/12/Inhalte/Kapitel-3-Analysen/3-3-erhoehung-behinderten-pauschbetraege.html",
      },
      {
        label: "BMF – Gesetz zur Erhöhung der Behinderten-Pauschbeträge (2020)",
        url: "https://www.bundesfinanzministerium.de/Content/DE/Gesetzestexte/Gesetze_Gesetzesvorhaben/Abteilungen/Abteilung_IV/19_Legislaturperiode/Gesetze_Verordnungen/2020-12-14-Behinderten-Pauschbetragsgesetz/0-Gesetz.html",
      },
      {
        label:
          "BMF LStH 2025 – § 33b Pauschbeträge für Menschen mit Behinderungen",
        url: "https://esth.bundesfinanzministerium.de/lsth/2025/B-Anhaenge/Anhang-16-33b/inhalt.html",
      },
    ],
  },
  "2f461b3c70": {
    title: "Kindergeld",
    zielgruppen: ["eltern"],
    summary:
      "Monatlich 259 € pro Kind für alle Kinder bis 18 Jahre (unter Voraussetzungen bis 25 Jahre). Ausgezahlt von der Familienkasse der Bundesagentur für Arbeit. Dient als Sockelleistung des Familienleistungsausgleichs.",
    url: "https://www.gesetze-im-internet.de/estg/__62.html",
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
    ],
  },
  a40459e9e4: {
    title: "Kindergeld in Sonderfällen",
    zielgruppen: ["eltern"],
    summary:
      "In bestimmten Situationen (z. B. wenn das Kind eigene Sozialleistungen bezieht oder die Eltern ihre Unterhaltspflicht nicht erfüllen) kann das Kindergeld direkt an das Kind oder eine andere berechtigte Person ausgezahlt werden.",
    url: "https://www.gesetze-im-internet.de/estg/__74.html",
  },
  fe2acc4351: {
    title: "Riester-Zulage: Anspruchsberechtigung",
    zielgruppen: ["beamte"],
    summary:
      "Anspruch auf Riester-Zulagen haben u. a. rentenversicherungspflichtige Arbeitnehmer, Beamte und Bezieher von ALG I oder Bürgergeld. Sie müssen einen Mindesteigenbeitrag einzahlen.",
    url: "https://www.gesetze-im-internet.de/estg/__79.html",
  },
  "20798b8f58": {
    title: "Riester-Grundzulage",
    zielgruppen: ["arbeitnehmer", "senior"],
    summary:
      "Zulagenberechtigte erhalten jährlich 175 € Grundzulage auf ihren Riester-Vertrag, sofern sie den Mindesteigenbeitrag (4 % des Vorjahreseinkommens, mindestens 60 €) eingezahlt haben.",
    url: "https://www.gesetze-im-internet.de/estg/__84.html",
    resources: [
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
    ],
  },
  d0f5923b46: {
    title: "Riester-Kinderzulage",
    zielgruppen: ["eltern"],
    summary:
      "Zusätzlich zur Grundzulage gibt es 185 € jährlich pro Kind (für ab 2008 geborene Kinder 300 €), für das Kindergeld bezogen wird. Die Zulage wird direkt in den Riester-Vertrag eingezahlt.",
    url: "https://www.gesetze-im-internet.de/estg/__85.html",
    resources: [
      {
        label: "BMF – Statistische Auswertungen zur Riester-Förderung bis 2023",
        url: "https://www.bundesfinanzministerium.de/Content/DE/Standardartikel/Themen/Steuern/Steuerliche_Themengebiete/Altersvorsorge/2024-11-15-Statistik-Riester-Foerderung-bis-2023.html",
      },
      {
        label: "BZSt – Ergänzungsbogen Kinderzulage 2024",
        url: "https://www.bzst.de/SharedDocs/Downloads/DE/Altersvorsorge/2024_ergaenzungsbogen_kinderzulage.pdf?__blob=publicationFile&v=2",
      },
    ],
  },

  // FPfZG – Familienpflegezeitgesetz
  "7c167b9b8b": {
    title: "Familienpflegezeit",
    zielgruppen: ["pflegende-angehoerige"],
    summary:
      "Beschäftigte können ihre Arbeitszeit für bis zu 24 Monate auf mindestens 15 Wochenstunden reduzieren, um einen nahen Angehörigen zu Hause zu pflegen. Der Arbeitgeber ist zur Zustimmung verpflichtet.",
    url: "https://www.gesetze-im-internet.de/fpfzg/__2.html",
  },
  "42869522fa": {
    title: "Zinsloses Darlehen während Familienpflegezeit",
    zielgruppen: ["pflegende-angehoerige"],
    summary:
      "Um den Einkommensverlust durch die Arbeitszeitreduzierung abzufedern, können Beschäftigte ein zinsloses staatliches Darlehen beantragen, das in monatlichen Raten ausgezahlt und nach der Pflegezeit zurückgezahlt wird.",
    url: "https://www.gesetze-im-internet.de/fpfzg/__3.html",
  },
  "6aa2fe0ec6": {
    title: "Familienpflegezeit: Härtefallregelung",
    zielgruppen: ["pflegende-angehoerige", "pflegebeduerftige"],
    summary:
      "In finanziellen Notlagen kann die Rückzahlung des Darlehens gestundet oder in besonderen Härtefällen teilweise erlassen werden.",
    url: "https://www.gesetze-im-internet.de/fpfzg/__7.html",
  },
  "669c469fcc": {
    title: "Zuschuss bei Beschäftigungsverbot in Elternzeit (Beamte)",
    zielgruppen: ["pflegende-angehoerige", "beamte"],
    summary:
      "Beamtinnen, die während der Elternzeit einem Beschäftigungsverbot unterliegen, erhalten einen täglichen Zuschuss von 13 € als Ausgleich für den Einkommensverlust.",
    url: "https://www.gesetze-im-internet.de/fpfzg/__5.html",
  },
  "10fa351e24": {
    title: "Elternzeit für Beamte (FPfZG)",
    zielgruppen: ["pflegende-angehoerige", "beamte"],
    summary:
      "Beamtinnen und Beamte haben denselben Anspruch auf Elternzeit wie Arbeitnehmer. Während der Elternzeit ruhen die Dienst- und Anwärterbezüge; Elterngeld kann beantragt werden.",
    url: "https://www.gesetze-im-internet.de/fpfzg/__6.html",
  },

  // BeamtVG – Beamtenversorgungsgesetz
  "77de417b5e": {
    title: "Ruhegehalt (Beamtenpension)",
    zielgruppen: ["beamte"],
    summary:
      "Beamtinnen und Beamte auf Lebenszeit erhalten nach dem Eintritt in den Ruhestand eine lebenslange Pension. Die Höhe richtet sich nach den ruhegehaltsfähigen Dienstbezügen und der Dienstzeit — maximal 71,75 % der letzten Bezüge.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__14.html",
  },
  "57baa4e344": {
    title: "Vorübergehende Ruhegehaltserhöhung",
    zielgruppen: ["beamte"],
    summary:
      "Beamte, die vor Erreichen der gesetzlichen Altersgrenze in den Ruhestand versetzt werden und noch keine Rente beziehen, erhalten vorübergehend einen erhöhten Ruhegehaltssatz, bis eine Rente einsetzt.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__14a.html",
  },
  "172873c253": {
    title: "Bezüge für den Sterbemonat",
    zielgruppen: ["hinterbliebene", "beamte", "opfer"],
    summary:
      "Die Dienstbezüge oder das Ruhegehalt des verstorbenen Beamten werden für den gesamten Sterbemonat an die Hinterbliebenen ausgezahlt.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__17.html",
  },
  "5ea70a13ef": {
    title: "Sterbegeld (Beamte)",
    zielgruppen: ["hinterbliebene", "beamte"],
    summary:
      "Einmalige Zahlung an Hinterbliebene in Höhe des Zweifachen der monatlichen Dienstbezüge oder des Ruhegehalts des Verstorbenen zur Deckung unmittelbarer Bestattungskosten.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__18.html",
  },
  "3bcb8a4c51": {
    title: "Witwengeld (Beamte)",
    zielgruppen: ["hinterbliebene", "beamte"],
    summary:
      "Hinterbliebene Ehepartner von verstorbenen Beamten auf Lebenszeit erhalten Witwengeld in Höhe von 55 % des Ruhegehalts, das der Beamte erhalten hat oder erhalten hätte.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__19.html",
  },
  dc91a59d05: {
    title: "Witwenabfindung (Beamte)",
    zielgruppen: ["hinterbliebene", "beamte"],
    summary:
      "Witwen, die wieder heiraten und damit ihren Witwengeldanspruch verlieren, erhalten eine einmalige Abfindung in Höhe des 24-fachen monatlichen Witwengeldes.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__21.html",
  },
  "5e732ae597": {
    title: "Unterhaltsbeitrag für geschiedene Witwen (Beamte)",
    zielgruppen: ["hinterbliebene", "beamte"],
    summary:
      "Geschiedene Ehepartner von verstorbenen Beamten, die keinen Anspruch auf Witwengeld haben, können unter bestimmten Umständen einen Unterhaltsbeitrag in ähnlicher Höhe erhalten.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__22.html",
  },
  "024400564f": {
    title: "Waisengeld (Beamte)",
    zielgruppen: ["hinterbliebene", "beamte"],
    summary:
      "Kinder verstorbener Beamter erhalten Waisengeld: Halbwaisen 12 %, Vollwaisen 20 % des Ruhegehalts. Ausgezahlt wird bis zur Vollendung des 18. Lebensjahres, bei Ausbildung oder Studium bis 27 Jahre.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__23.html",
  },
  bfcab54026: {
    title: "Unterhaltsbeitrag für Hinterbliebene auf Probe (Beamte)",
    zielgruppen: ["hinterbliebene", "beamte"],
    summary:
      "Hinterbliebene von Beamten auf Probe oder auf Widerruf, die keinen regulären Versorgungsanspruch begründen konnten, können einen ermessensabhängigen Unterhaltsbeitrag erhalten.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__26.html",
  },
  "7a32e7d5c8": {
    title: "Witwerversorgung (Beamte)",
    zielgruppen: ["hinterbliebene", "beamte"],
    summary:
      "Hinterbliebene Ehemänner (Witwer) und geschiedene Ehemänner von verstorbenen Beamtinnen erhalten dieselben Versorgungsleistungen wie Witwen.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__28.html",
  },
  d94da5e16b: {
    title: "Bezüge für verschollene Beamte",
    zielgruppen: ["hinterbliebene", "beamte"],
    summary:
      "Ist ein Beamter verschollen, werden seine Bezüge bis zum wahrscheinlichen Todeszeitpunkt weiter an die Hinterbliebenen ausgezahlt.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__29.html",
  },
  "4c171ac4b7": {
    title: "Unfallfürsorge: Sachschadenersatz",
    zielgruppen: ["beamte"],
    summary:
      "Beamten, denen bei einem Dienstunfall persönliche Gegenstände (z. B. Brille, Kleidung) beschädigt oder zerstört wurden, wird der Sachschaden in angemessenem Umfang ersetzt.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__32.html",
  },
  c718ba2f87: {
    title: "Unfallfürsorge: Heilverfahren",
    zielgruppen: ["beamte"],
    summary:
      "Bei einem Dienstunfall werden alle notwendigen Heilbehandlungskosten übernommen: ärztliche Behandlung, Medikamente, Krankenhausaufenthalt, Rehabilitation und Haushaltshilfe.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__33.html",
  },
  e521e4fa02: {
    title: "Unfallfürsorge: Pflegekosten",
    zielgruppen: ["pflegebeduerftige", "beamte"],
    summary:
      "Beamte, die infolge eines Dienstunfalls dauerhaft pflegebedürftig werden, erhalten die notwendigen Pflegekosten erstattet.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__34.html",
  },
  e85646e618: {
    title: "Unfallausgleich",
    zielgruppen: ["beamte"],
    summary:
      "Beamte, deren Erwerbsfähigkeit durch einen Dienstunfall dauerhaft um mindestens 25 % gemindert ist, erhalten einen monatlichen Unfallausgleich als Ausgleich für die Minderung.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__35.html",
  },
  "7166781e28": {
    title: "Unfallruhegehalt",
    zielgruppen: ["beamte"],
    summary:
      "Beamte, die infolge eines Dienstunfalls dienstunfähig werden, erhalten ein erhöhtes Ruhegehalt von mindestens 66,67 % bis maximal 75 % ihrer ruhegehaltsfähigen Dienstbezüge.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__36.html",
  },
  "2865a6fa13": {
    title: "Erhöhtes Unfallruhegehalt",
    zielgruppen: ["beamte"],
    summary:
      "Bei besonders schweren Dienstunfällen — z. B. durch vorsätzliche Handlung Dritter — kann das Unfallruhegehalt auf bis zu 80 % der ruhegehaltsfähigen Bezüge erhöht werden.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__37.html",
  },
  e8cf5cb45a: {
    title: "Unterhaltsbeitrag nach Dienstunfall (frühere Beamte)",
    zielgruppen: ["beamte"],
    summary:
      "Frühere Beamte, die wegen eines Dienstunfalls aus dem Dienst ausgeschieden sind, können für die Dauer der unfallbedingten Erwerbsminderung einen Unterhaltsbeitrag erhalten.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__38.html",
  },
  "4c344151aa": {
    title: "Unfallfürsorge bei Schädigung eines ungeborenen Kindes",
    zielgruppen: ["beamte"],
    summary:
      "Wurde ein ungeborenes Kind durch einen Dienstunfall der Mutter geschädigt, hat das Kind bei dauerhafter Minderung der Erwerbsfähigkeit Anspruch auf entsprechende Unfallfürsorgeleistungen.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__38a.html",
  },
  dec21cbde6: {
    title: "Unfall-Hinterbliebenenversorgung",
    zielgruppen: ["hinterbliebene", "beamte"],
    summary:
      "Stirbt ein Beamter an den Folgen eines Dienstunfalls, erhalten Witwe/Witwer und Waisen erhöhte Versorgungsleistungen (Unfall-Witwengeld und Unfall-Waisengeld).",
    url: "https://www.gesetze-im-internet.de/beamtvg/__39.html",
  },
  "5b6a9f8a22": {
    title: "Unterhaltsbeitrag für Verwandte aufsteigender Linie (Unfall)",
    zielgruppen: ["beamte"],
    summary:
      "Eltern oder Großeltern eines an einem Dienstunfall verstorbenen Beamten, die von ihm unterhalten wurden, können einen Unterhaltsbeitrag erhalten.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__40.html",
  },
  "1f7d604dfe": {
    title: "Unterhaltsbeitrag für sonstige Hinterbliebene (Unfall)",
    zielgruppen: ["hinterbliebene", "beamte"],
    summary:
      "Hinterbliebene, die keinen gesetzlichen Versorgungsanspruch haben, aber vom verstorbenen Beamten tatsächlich unterhalten wurden, können einen Unterhaltsbeitrag erhalten.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__41.html",
  },
  c32b6c7fc2: {
    title: "Einmalige Unfallentschädigung",
    zielgruppen: ["beamte", "opfer"],
    summary:
      "Bei bestimmten schweren Dienstunfällen (z. B. Anschläge auf Bundesbeamte) wird eine einmalige Entschädigung zusätzlich zur laufenden Unfallfürsorge gewährt.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__43.html",
  },
  b5dec915c3: {
    title: "Schadensausgleich in besonderen Fällen (Unfall)",
    zielgruppen: ["beamte"],
    summary:
      "In Ausnahmefällen können Schäden ausgeglichen werden, die im Zusammenhang mit dem Dienst entstanden sind und durch die reguläre Unfallfürsorge nicht vollständig abgedeckt werden.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__43a.html",
  },
  be4105ddeb: {
    title: "Übergangsgeld (Beamte)",
    zielgruppen: ["beamte"],
    summary:
      "Beamte, die ohne eigenes Verschulden entlassen werden, erhalten ein Übergangsgeld als Überbrückung. Die Höhe richtet sich nach der Dienstzeit und den zuletzt erhaltenen Bezügen.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__47.html",
  },
  d7eed0f9fb: {
    title: "Übergangsgeld für politische Beamte",
    zielgruppen: ["beamte"],
    summary:
      "Politische Beamte (z. B. Staatssekretäre), die nicht auf eigenen Antrag in den einstweiligen Ruhestand versetzt werden, erhalten für eine Übergangszeit ihre vollen Bezüge weiter.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__47a.html",
  },
  f6989e45ca: {
    title: "Ausgleich bei besonderen Altersgrenzen",
    zielgruppen: ["beamte"],
    summary:
      "Beamte in Laufbahnen mit besonderer Altersgrenze (z. B. Polizei, Feuerwehr), die früher in den Ruhestand treten müssen, erhalten eine einmalige Ausgleichszahlung.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__48.html",
  },
  "4c0ee1526d": {
    title: "Familienzuschlag (Beamtenversorgung)",
    zielgruppen: ["hinterbliebene", "beamte"],
    summary:
      "Verheiratete Ruhestandsbeamte und Hinterbliebene erhalten einen Familienzuschlag zur Versorgung. Für Kinder wird ein kinderbezogener Anteil hinzugerechnet.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__50.html",
  },
  "3e5b80d3ca": {
    title: "Kindererziehungszuschlag (Beamtenversorgung)",
    zielgruppen: ["beamte"],
    summary:
      "Für Zeiten der Kindererziehung (bis zum 3. Lebensjahr des Kindes) wird das Ruhegehalt um einen Kindererziehungszuschlag erhöht, analog zur gesetzlichen Rentenversicherung.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__50a.html",
  },
  ccc1dd2716: {
    title: "Kindererziehungsergänzungszuschlag (Beamtenversorgung)",
    zielgruppen: ["pflegebeduerftige", "beamte"],
    summary:
      "Für Beamte, die wegen Kindererziehung in Teilzeit gearbeitet haben, wird das Ruhegehalt um einen Ergänzungszuschlag erhöht.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__50b.html",
  },
  f732e66031: {
    title: "Kinderzuschlag zum Witwengeld",
    zielgruppen: ["hinterbliebene", "beamte"],
    summary:
      "Witwen und Witwer von Beamten, die Kindererziehungszeiten vorweisen können, erhalten einen Kinderzuschlag zum Witwengeld.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__50c.html",
  },
  "4535b37f67": {
    title: "Kindererziehungsergänzungszuschlag: Rentenanpassung",
    zielgruppen: ["beamte"],
    summary:
      "Der Kindererziehungsergänzungszuschlag wird an die Entwicklung der gesetzlichen Rente angepasst, um eine gleichwertige Behandlung mit Rentenversicherten sicherzustellen.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__50d.html",
  },
  be3b09a47e: {
    title: "Pflegezuschlag (Beamtenversorgung)",
    zielgruppen: ["pflegebeduerftige", "beamte"],
    summary:
      "Beamte, die einen pflegebedürftigen Angehörigen nicht erwerbsmäßig gepflegt haben, erhalten einen Pflegezuschlag zum Ruhegehalt sowie ggf. einen Kinderpflegeergänzungszuschlag.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__50e.html",
  },
  "1c7767d4d7": {
    title: "Vorübergehende Zuschläge (Beamtenversorgung)",
    zielgruppen: ["beamte"],
    summary:
      "Versorgungsempfänger, die vor der gesetzlichen Altersgrenze in den Ruhestand getreten sind, erhalten vorübergehend Zuschläge, bis sie Anspruch auf andere Sozialleistungen wie Rente erwerben.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__50e.html",
  },
  d8b2918695: {
    title: "Unfallfürsorge für Ehrenbeamte",
    zielgruppen: ["beamte"],
    summary:
      "Ehrenbeamte haben im Falle eines Dienstunfalls Anspruch auf Heilverfahren, Sachschadenersatz und ggf. einen Unterhaltsbeitrag — entsprechend den Regelungen für hauptamtliche Beamte.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__68.html",
  },
  "2bc3fef38f": {
    title: "Hinterbliebenenversorgung nach Scheidung (Beamte)",
    zielgruppen: ["hinterbliebene", "beamte"],
    summary:
      "Geschiedene Ehepartner von Beamten können unter bestimmten Voraussetzungen Unterhaltsbeiträge aus der Beamtenversorgung erhalten, wenn ein entsprechender Unterhaltsanspruch bestand.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__86.html",
  },
  "671bcbd380": {
    title: "Unfallfürsorge: Unfallversicherungsabrechnung",
    zielgruppen: ["beamte", "opfer"],
    summary:
      "Besteht neben der beamtenrechtlichen Unfallfürsorge auch ein Anspruch aus einer gesetzlichen Unfallversicherung, werden die Leistungen aufeinander abgestimmt, um Doppelzahlungen zu vermeiden.",
    url: "https://www.gesetze-im-internet.de/beamtvg/__87.html",
  },

  // BAföG – Bundesausbildungsförderungsgesetz
  "9196aa98be": {
    title: "BAföG: Umfang & Förderungsarten",
    zielgruppen: ["jugendliche"],
    summary:
      "BAföG fördert den Lebensunterhalt und die Ausbildungskosten von Schülern und Studierenden. Die Förderung besteht je nach Ausbildungsart zur Hälfte aus einem Zuschuss (muss nicht zurückgezahlt werden) und zur Hälfte aus einem zinslosen Staatsdarlehen.",
    url: "https://www.gesetze-im-internet.de/baf_g/__11.html",
    resources: [
      {
        label:
          "Destatis – 612.800 BAföG-Geförderte 2024, Ø 635 €/Monat (Pressemitteilung)",
        url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2025/08/PD25_283_214.html",
      },
      {
        label:
          "Destatis – Geförderte nach BAföG: interaktive Grafik (Zeitreihe)",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bildung-Forschung-Kultur/_Grafik/_Interaktiv/finanzen-ausbildung-foerderung-bafoeg.html",
      },
      {
        label:
          "Destatis – Bildungsfinanzen & Ausbildungsförderung: Statistik & Berichte",
        url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bildung-Forschung-Kultur/Bildungsfinanzen-Ausbildungsfoerderung/_inhalt.html",
      },
      {
        label:
          "Destatis – GENESIS-Tabelle: BAföG nach Förderungsart, Bundesland und Jahr",
        url: "https://www.destatis.de/DE/ZahlenFakten/GesellschaftStaat/BildungForschungKultur/BildungsKulturfinanzen/Tabellen/Ausbildungsfoerderung/BAfoeG.html",
      },
    ],
  },
  "38ef597ba1": {
    title: "BAföG: Bedarfssatz für Schüler",
    zielgruppen: ["jugendliche"],
    summary:
      "Der monatliche Bedarf für Schülerinnen und Schüler richtet sich danach, ob sie bei den Eltern wohnen oder auswärts untergebracht sind. Der Höchstsatz liegt derzeit bei 262 € (zuhause) bzw. 632 € (auswärts) monatlich.",
    url: "https://www.gesetze-im-internet.de/baf_g/__12.html",
  },
  "21a8a075ef": {
    title: "BAföG: Bedarfssatz für Studierende",
    zielgruppen: ["studierende"],
    summary:
      "Studierende können bis zu 992 € monatlich erhalten, aufgeteilt in Grundbedarf und Wohnkostenpauschale. Der genaue Betrag hängt vom Einkommen der Eltern und des Antragstellenden ab.",
    url: "https://www.gesetze-im-internet.de/baf_g/__13.html",
  },
  "13b3729532": {
    title: "BAföG: KV/PV-Zuschlag",
    zielgruppen: ["studierende"],
    summary:
      "Studierende und Auszubildende, die nicht mehr über die Eltern krankenversichert sind, erhalten einen monatlichen Aufschlag von 102 € auf ihren BAföG-Bedarf für Kranken- und Pflegeversicherungsbeiträge.",
    url: "https://www.gesetze-im-internet.de/baf_g/__13a.html",
  },
  "2d4f02971b": {
    title: "BAföG: Bedarfssatz für Praktikanten",
    zielgruppen: ["studierende"],
    summary:
      "Pflichtpraktika, die Bestandteil einer förderungsfähigen Ausbildung sind, werden ebenfalls mit BAföG gefördert. Der Bedarfssatz richtet sich nach dem der jeweiligen Ausbildungsform.",
    url: "https://www.gesetze-im-internet.de/baf_g/__14.html",
  },
  "719c3d71e5": {
    title: "BAföG: Kinderbetreuungszuschlag",
    zielgruppen: ["studierende"],
    summary:
      "Auszubildende und Studierende mit Kindern unter 14 Jahren erhalten einen monatlichen Zuschlag von 160 € pro Kind als reinen Zuschuss – unabhängig vom Elterneinkommen und ohne Anrechnung auf das Darlehen.",
    url: "https://www.gesetze-im-internet.de/baf_g/__14b.html",
  },
  "8d7924da91": {
    title: "BAföG: Freibeträge Elterneinkommen",
    zielgruppen: ["studierende"],
    summary:
      "Vom Einkommen der Eltern (und ggf. des Ehepartners) werden gestaffelte Freibeträge abgezogen, bevor geprüft wird, wie viel BAföG gewährt wird. Höhere Freibeträge bedeuten mehr Förderung.",
    url: "https://www.gesetze-im-internet.de/baf_g/__25.html",
  },
  "1dd94de53a": {
    title: "BAföG: Vermögensfreibeträge",
    zielgruppen: ["studierende"],
    summary:
      "Eigenes Vermögen bis zu einem Freibetrag (derzeit 15.000 €) bleibt bei der BAföG-Berechnung unberücksichtigt. Vermögen darüber hinaus wird angerechnet und reduziert die Förderung.",
    url: "https://www.gesetze-im-internet.de/baf_g/__29.html",
  },
  e8a7db7e58: {
    title: "BAföG: Freibeträge eigenes Einkommen",
    zielgruppen: ["studierende"],
    summary:
      "Eigene Einkünfte (z. B. aus Minijob oder Nebenjob) bleiben bis zu einem monatlichen Freibetrag anrechnungsfrei. Einkommen darüber wird auf den BAföG-Bedarf angerechnet.",
    url: "https://www.gesetze-im-internet.de/baf_g/__23.html",
  },
  "5c1a2f6180": {
    title: "Studienstarthilfe: Nichtanrechnung",
    zielgruppen: ["studierende"],
    summary:
      "Die Studienstarthilfe wird nicht auf andere Sozialleistungen angerechnet und mindert auch nicht den BAföG-Anspruch.",
    url: "https://www.gesetze-im-internet.de/baf_g/__56b.html",
  },
  d833f122ea: {
    title: "Studienstarthilfe",
    zielgruppen: ["studierende"],
    summary:
      "Einmalige Starthilfe von 1.000 € für förderungsberechtigte Studierende, die erstmals ein Studium aufnehmen und aus einkommensschwachen Familien stammen. Wird als reiner Zuschuss gewährt.",
    url: "https://www.gesetze-im-internet.de/baf_g/__56.html",
    resources: [
      {
        label: "BAföG.de – Studienstarthilfe: offizielle Übersicht",
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

  // BEEG – Bundeselterngeld- und Elternzeitgesetz
  d40b318da4: {
    title: "Elterngeld: Anrechnung anderer Einnahmen",
    zielgruppen: ["schwangere", "kleinkinder", "eltern", "arbeitnehmer"],
    summary:
      "Wer während des Elterngeldbezugs Einkommen aus Teilzeitarbeit, Mutterschaftsgeld oder ähnlichen Leistungen erhält, bekommt das Elterngeld entsprechend gekürzt. Die Regelung soll Doppelförderung vermeiden.",
    url: "https://www.gesetze-im-internet.de/beeg/__3.html",
  },
  dab2b2de5e: {
    title: "Partnerschaftsbonus (Elterngeld Plus)",
    zielgruppen: ["kleinkinder", "eltern"],
    summary:
      "Beide Elternteile erhalten vier zusätzliche Elterngeld-Plus-Monate, wenn sie gleichzeitig zwischen 24 und 32 Wochenstunden in Teilzeit arbeiten. Der Bonus soll eine partnerschaftliche Aufteilung von Erwerbs- und Sorgearbeit fördern.",
    url: "https://www.gesetze-im-internet.de/beeg/__4b.html",
  },

  // BKGG – Bundeskindergeldgesetz
  "58e955c15e": {
    title: "Bildung & Teilhabe (Kindergeldbezug)",
    zielgruppen: ["eltern", "jugendliche"],
    summary:
      "Familien, die Kindergeld beziehen und deren Einkommen knapp über der Bürgergeld-Grenze liegt, können dieselben Bildungs- und Teilhabeleistungen (BuT) erhalten wie Bürgergeld-Beziehende – z. B. für Schulbedarf, Mittagessen und Vereinsmitgliedschaften.",
    url: "https://www.gesetze-im-internet.de/bkgg_1996/__6b.html",
  },

  // AsylbLG – Asylbewerberleistungsgesetz
  a0c8897499: {
    title: "Grundleistungen für Asylbewerber",
    zielgruppen: ["gefluechtete"],
    summary:
      "Asylsuchende und geduldete Personen erhalten Sachleistungen oder Geldleistungen zur Deckung des täglichen Grundbedarfs: Ernährung, Unterkunft, Heizung, Kleidung, Gesundheits- und Körperpflege sowie einen Barbetrag für persönliche Bedürfnisse.",
    url: "https://www.gesetze-im-internet.de/asylblg/__3.html",
  },
  "5375737032": {
    title: "Bedarfssätze der Grundleistungen (AsylbLG)",
    zielgruppen: ["gefluechtete"],
    summary:
      "Die monatlichen Geldbeträge sind gestaffelt nach Personengruppen (Alleinstehende, Paare, Kinder). Sie liegen unterhalb der Bürgergeld-Regelsätze und werden regelmäßig angepasst.",
    url: "https://www.gesetze-im-internet.de/asylblg/__3a.html",
  },
  "9490a61191": {
    title: "Medizinische Versorgung (AsylbLG)",
    zielgruppen: ["schwangere", "gefluechtete"],
    summary:
      "Asylsuchende haben Anspruch auf Behandlung akuter Erkrankungen und Schmerzzustände, Schutzimpfungen sowie ärztliche und zahnärztliche Grundversorgung. Im Krankheitsfall wird eine Behandlungsbescheinigung ausgestellt.",
    url: "https://www.gesetze-im-internet.de/asylblg/__4.html",
  },
  "699b3dfdd7": {
    title: "Sonstige Leistungen (AsylbLG)",
    zielgruppen: ["gefluechtete"],
    summary:
      "Im Einzelfall können über die Grundleistungen hinaus Sach- oder Geldleistungen gewährt werden, z. B. für die Teilnahme am gesellschaftlichen Leben, bei besonderen Bedarfslagen oder für Bildung und Sprachkurse.",
    url: "https://www.gesetze-im-internet.de/asylblg/__6.html",
  },
  c1157673a1: {
    title: "Erstattung von Eilfall-Aufwendungen (AsylbLG)",
    zielgruppen: ["gefluechtete"],
    summary:
      "Andere Stellen (z. B. Krankenhäuser oder Sozialämter), die in einem Eilfall Leistungen erbracht haben, die eigentlich dem AsylbLG oblegen hätten, können sich diese Aufwendungen erstatten lassen.",
    url: "https://www.gesetze-im-internet.de/asylblg/__6a.html",
  },

  // AFBG – Aufstiegs-BAföG (Meister-BAföG)
  a83af1c72e: {
    title: "Aufstiegs-BAföG: Lehrgangs- & Unterhaltsbeitrag",
    zielgruppen: ["azubis"],
    summary:
      "Das Aufstiegs-BAföG (früher Meister-BAföG) bezuschusst Lehrgangs- und Prüfungsgebühren sowie den Lebensunterhalt von Personen, die einen beruflichen Aufstiegsabschluss (z. B. Meister, Techniker, Fachwirt) anstreben. Der Unterhaltsbeitrag wird einkommensabhängig als Zuschuss und Darlehen gewährt.",
    url: "https://www.gesetze-im-internet.de/afbg/__10.html",
  },
  "983d7cf432": {
    title: "Aufstiegs-BAföG: Förderungsarten",
    zielgruppen: ["azubis"],
    summary:
      "Die Förderung umfasst Zuschüsse zu Lehrgangs- und Prüfungsgebühren sowie zur Erstellung der Fachpraktiker- oder Meisterprüfungsarbeit. Ein Teil wird als Darlehen ausgereicht, das bei Bestehen der Prüfung teilweise erlassen werden kann.",
    url: "https://www.gesetze-im-internet.de/afbg/__12.html",
  },
  "0ffaa91207": {
    title: "Aufstiegs-BAföG: Einkommensabhängige Darlehensrückzahlung",
    zielgruppen: ["azubis"],
    summary:
      "Die Rückzahlung des Darlehensanteils richtet sich nach dem Einkommen: Wer nach dem Abschluss wenig verdient, kann vorübergehend von der Rückzahlungspflicht freigestellt werden.",
    url: "https://www.gesetze-im-internet.de/afbg/__13a.html",
  },
  "401444869d": {
    title: "Aufstiegs-BAföG: Darlehenserlass bei Bestehen",
    zielgruppen: ["azubis"],
    summary:
      "Wer die geförderte Prüfung besteht, erhält einen Erlass von 50 % des noch nicht fälligen Darlehens. Bei anschließender Unternehmensgründung mit Beschäftigten kann ein weiterer Erlass gewährt werden.",
    url: "https://www.gesetze-im-internet.de/afbg/__13b.html",
  },

  // SGB V – Gesetzliche Krankenversicherung
  e00d23348a: {
    title: "Familienversicherung (GKV)",
    zielgruppen: ["eltern"],
    summary:
      "Familienangehörige (Ehepartner, Kinder) können beitragsfrei in der gesetzlichen Krankenversicherung mitversichert werden, wenn sie kein oder nur geringes eigenes Einkommen haben. Voraussetzung ist, dass der Hauptversicherte Mitglied einer gesetzlichen Krankenkasse ist.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__10.html",
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
    ],
  },
  aa5201d64c: {
    title: "Kostenübernahme Auslandsbehandlung (Nicht-EWR)",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Wenn eine notwendige Krankenbehandlung in Deutschland oder im Europäischen Wirtschaftsraum nicht möglich ist, kann die Krankenkasse die Kosten für eine Behandlung in einem Drittland übernehmen. Der Anspruch besteht nur, wenn keine vergleichbare Behandlung im EWR verfügbar ist.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__18.html",
  },
  "43029ebc62": {
    title: "Primärprävention und Gesundheitsförderung",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Die Krankenkasse fördert Maßnahmen zur Primärprävention und allgemeinen Gesundheitsförderung, um Krankheiten zu vermeiden und die Gesundheit zu erhalten. Dazu gehören Kurse, Beratungen und Programme zu Bewegung, Ernährung, Stressabbau und Suchtprävention.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__20.html",
  },
  "9c3b6ec527": {
    title: "Gesundheitsförderung in Lebenswelten",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "Krankenkassen fördern Maßnahmen zur Gesundheitsförderung in Settings wie Kitas, Schulen, Betrieben oder Pflegeeinrichtungen. Ziel ist es, gesundheitliche Chancengleichheit zu verbessern und gesunde Lebensverhältnisse zu schaffen.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__20a.html",
  },
  "4c505e020c": {
    title: "Betriebliche Gesundheitsförderung",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Krankenkassen unterstützen Betriebe bei Maßnahmen zur betrieblichen Gesundheitsförderung, etwa durch Beratung, Kurse oder Analysen des Gesundheitszustands der Belegschaft. Ziel ist die Stärkung der Gesundheitsressourcen am Arbeitsplatz.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__20b.html",
  },
  f63071aa3d: {
    title: "Prävention arbeitsbedingter Gesundheitsgefahren",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Krankenkassen arbeiten mit dem Arbeitsschutzsystem zusammen, um arbeitsbedingte Erkrankungen zu verhüten. Sie unterstützen Präventionsmaßnahmen, die auf die Reduzierung berufsbedingter Gesundheitsrisiken abzielen.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__20c.html",
  },
  c979b01e04: {
    title: "Förderung von Selbsthilfegruppen",
    zielgruppen: ["arbeitnehmer", "behinderung"],
    summary:
      "Krankenkassen fördern Selbsthilfegruppen, -organisationen und -kontaktstellen, die sich mit Krankheiten oder Behinderungen befassen. Die Förderung umfasst sowohl kassenindividuelle als auch gemeinsame Leistungen aller Kassen.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__20h.html",
  },
  "1c423f1cc6": {
    title: "Schutzimpfungen und Verhütung übertragbarer Krankheiten",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "GKV-Versicherte haben Anspruch auf Schutzimpfungen und andere Leistungen zur Verhütung übertragbarer Krankheiten. Der genaue Leistungsumfang wird durch Verordnung bestimmt, orientiert sich aber an den Empfehlungen der Ständigen Impfkommission (STIKO).",
    url: "https://www.gesetze-im-internet.de/sgb_5/__20i.html",
  },
  "2a9f45da97": {
    title: "HIV-Präexpositionsprophylaxe: Beratung",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "GKV-Versicherte ab 16 Jahren haben Anspruch auf ärztliche Beratung zur HIV-Präexpositionsprophylaxe (PrEP). Dabei werden die Eignung, die Einnahme sowie notwendige Begleitmaßnahmen erläutert.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__20j.html",
  },
  d81b271cd5: {
    title: "HIV-Präexpositionsprophylaxe: Untersuchungen",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Im Rahmen der HIV-PrEP haben GKV-Versicherte Anspruch auf regelmäßige Untersuchungen, darunter HIV-Tests, Nierenfunktionstests und Screening auf andere sexuell übertragbare Infektionen.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__20j.html",
  },
  ad3547107b: {
    title: "Zahnprophylaxe für Kinder (Gruppe)",
    zielgruppen: ["eltern"],
    summary:
      "Krankenkassen fördern gruppenbasierte Maßnahmen zur Verhütung von Zahnerkrankungen bei Kindern und Jugendlichen, insbesondere in Kitas und Schulen. Dazu gehören Mundhygieneerziehung, Fluoridierung und Versiegelungen.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__21.html",
  },
  "8f9ece64ea": {
    title: "Zahnprophylaxe-Programme für Kinder",
    zielgruppen: ["eltern"],
    summary:
      "Krankenkassen beteiligen sich an spezifischen Programmen zur Verhütung von Zahnerkrankungen bei Kindern, die über die allgemeine Gruppenprophylaxe hinausgehen. Die Kassenärztliche und Kassenzahnärztliche Vereinigung koordinieren die Umsetzung.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__21.html",
  },
  a091717f46: {
    title: "Zahnprophylaxe für Jugendliche (Einzel)",
    zielgruppen: ["eltern"],
    summary:
      "Kinder und Jugendliche im Alter von 6 bis 17 Jahren haben Anspruch auf halbjährliche Individualprophylaxe beim Zahnarzt. Dazu gehören Untersuchung, Beratung, Mundhygieneinstruktion sowie ggf. lokale Fluoridierung.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__22.html",
  },
  "9b0c481d92": {
    title: "Fissurenversiegelung der Molaren",
    zielgruppen: ["eltern"],
    summary:
      "Kinder und Jugendliche zwischen 6 und 17 Jahren haben Anspruch auf die Versiegelung der Kauflächen der hinteren Backenzähne (Molaren), um Karies vorzubeugen.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__22.html",
  },
  d0a9e74ea6: {
    title: "Zahnprophylaxe für Pflegebedürftige",
    zielgruppen: ["behinderung", "pflegebeduerftige"],
    summary:
      "Pflegebedürftige haben Anspruch auf aufsuchende Individualprophylaxe durch den Zahnarzt. Die Leistung umfasst Beratung und praktische Unterstützung bei der Mundhygiene, auch im Pflegeheim oder zu Hause.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__22a.html",
  },
  da5fb5ef13: {
    title: "Zahnprophylaxe für Menschen mit Behinderungen",
    zielgruppen: ["behinderung", "pflegebeduerftige"],
    summary:
      "Menschen mit Behinderungen haben Anspruch auf aufsuchende Individualprophylaxe beim Zahnarzt, auch wenn sie in Einrichtungen leben. Ziel ist eine bedarfsgerechte Mundhygiene trotz erschwerter Bedingungen.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__22a.html",
  },
  "73f4932ef6": {
    title: "Medizinische Vorsorgeleistungen",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "GKV-Versicherte haben Anspruch auf ärztliche Behandlung, Versorgung mit Arznei-, Verband-, Heil- und Hilfsmitteln sowie stationäre Behandlung, wenn dies zur Verhütung von Krankheiten oder zur Vorbeugung einer Verschlimmerung medizinisch notwendig ist.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__23.html",
  },
  "55a3d64a63": {
    title: "Ambulante Kur (Vorsorgeleistung)",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Die Krankenkasse kann ambulante Vorsorgeleistungen in anerkannten Kurorten übernehmen oder bezuschussen, wenn dies aus medizinischen Gründen notwendig ist und ambulante Behandlung zu Hause nicht ausreicht.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__23.html",
  },
  ff33934dfb: {
    title: "Stationäre Kur (Vorsorge)",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Wenn ambulante Maßnahmen nicht ausreichen, kann die Krankenkasse eine stationäre Vorsorgekur in einer anerkannten Einrichtung genehmigen. Die Leistung umfasst Behandlung, Unterkunft und Verpflegung.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__23.html",
  },
  "53ae8874bd": {
    title: "Mutter-/Vater-Kind-Kur",
    zielgruppen: ["schwangere", "eltern"],
    summary:
      "Mütter und Väter können eine stationäre oder ambulante Vorsorgeleistung (Kur) mit ihren Kindern in Anspruch nehmen, wenn sie aus medizinischen oder sozialen Gründen Erholung und Stärkung benötigen. Die Kasse übernimmt die Kosten für Elternteil und Kinder.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__24.html",
  },
  "652371a338": {
    title: "Empfängnisverhütung: Beratung (bis 22)",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Versicherte bis zum vollendeten 22. Lebensjahr haben Anspruch auf ärztliche Beratung zur Empfängnisverhütung. Dazu gehört eine umfassende Aufklärung über geeignete Verhütungsmethoden.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__24a.html",
  },
  "1b8e3e379c": {
    title: "Empfängnisverhütung: Untersuchungen (bis 22)",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Versicherte bis zum vollendeten 22. Lebensjahr haben Anspruch auf ärztliche Untersuchungen, die im Zusammenhang mit der Empfängnisverhütung erforderlich sind.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__24a.html",
  },
  "848340ab1a": {
    title: "Empfängnisverhütung: Verhütungsmittel-Verordnung (bis 22)",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Versicherte bis zum vollendeten 22. Lebensjahr haben Anspruch auf die Verordnung verschreibungspflichtiger Verhütungsmittel auf Kassenrezept. Die Kosten werden von der Krankenkasse übernommen.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__24a.html",
  },
  "5e83eea34c": {
    title: "Empfängnisverhütung: Notfallkontrazeptiva",
    zielgruppen: ["arbeitnehmer"],
    summary:
      'GKV-Versicherte haben Anspruch auf Versorgung mit verschreibungspflichtiger Notfallkontrazeption ("Pille danach"). Der Anspruch besteht unabhängig vom Alter der Versicherten.',
    url: "https://www.gesetze-im-internet.de/sgb_5/__24a.html",
  },
  "54d5e0d048": {
    title: "Empfängnisverhütung: Versorgung nach sexuellem Übergriff",
    zielgruppen: ["schwangere", "opfer"],
    summary:
      "Frauen, die Opfer eines sexuellen Übergriffs geworden sind, haben Anspruch auf Versorgung mit Verhütungsmitteln zur Vermeidung einer ungewollten Schwangerschaft auf Kosten der Krankenkasse.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__24a.html",
  },
  "55d99e805b": {
    title: "Schwangerschaftsabbruch: Beratung",
    zielgruppen: ["schwangere", "arbeitnehmer"],
    summary:
      "GKV-Versicherte haben Anspruch auf ärztliche Beratung im Zusammenhang mit einem Schwangerschaftsabbruch, einschließlich einer umfassenden Aufklärung über den Eingriff, mögliche Risiken und Alternativen.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__24b.html",
  },
  "191ee32ae1": {
    title: "Schwangerschaftsabbruch: Vor- und Nachbereitung",
    zielgruppen: ["schwangere", "arbeitnehmer"],
    summary:
      "GKV-Versicherte haben Anspruch auf die medizinische Vor- und Nachbereitung sowie auf die Kostenübernahme eines Schwangerschaftsabbruchs, wenn er nach den Voraussetzungen des § 218a StGB zulässig ist.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__24b.html",
  },
  dabdc22ba6: {
    title: "Sterilisation aus medizinischen Gründen",
    zielgruppen: ["schwangere"],
    summary:
      "Eine Sterilisation, die aus medizinischen Gründen notwendig ist, wird von der gesetzlichen Krankenkasse übernommen. Rein persönliche oder soziale Gründe begründen dagegen keinen Leistungsanspruch.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__24b.html",
  },
  c8ff86bfc7: {
    title: "Schwangerschaftsvorsorge: Untersuchungen",
    zielgruppen: ["schwangere", "arbeitnehmer"],
    summary:
      "Schwangere GKV-Versicherte haben Anspruch auf ärztliche Untersuchungen zur Feststellung der Schwangerschaft und zur Vorsorge, einschließlich der gesetzlich vorgeschriebenen Vorsorgeuntersuchungen (Mutterschaftsrichtlinien).",
    url: "https://www.gesetze-im-internet.de/sgb_5/__24d.html",
  },
  ed183cae18: {
    title: "Wochenbettbetreuung durch Hebamme",
    zielgruppen: ["schwangere", "arbeitnehmer"],
    summary:
      "Nach der Geburt haben Mütter Anspruch auf Wochenbettbetreuung durch eine Hebamme. Diese umfasst Hausbesuche, Unterstützung beim Stillen und Beratung rund um die erste Zeit mit dem Neugeborenen.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__24d.html",
  },
  "743fee0a8c": {
    title: "Mundgesundheitsberatung in der Schwangerschaft",
    zielgruppen: ["schwangere", "arbeitnehmer"],
    summary:
      "Schwangere haben Anspruch auf zahnärztliche Beratung zur Mundgesundheit, Ernährung und Hygiene, da hormonelle Veränderungen das Kariesrisiko erhöhen können.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__24d.html",
  },
  "09409ccee8": {
    title: "Hebammenhilfe vor der Geburt",
    zielgruppen: ["schwangere", "arbeitnehmer"],
    summary:
      "Schwangere haben Anspruch auf Hebammenhilfe während der Schwangerschaft, einschließlich Beratung, Schwangerengymnastik und Geburtsvorbereitung. Hebammen können auch ohne ärztliche Verordnung aufgesucht werden.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__24d.html",
  },
  "741512cee7": {
    title: "Versorgung mit Arznei- und Hilfsmitteln in der Schwangerschaft",
    zielgruppen: ["schwangere", "arbeitnehmer"],
    summary:
      "Schwangere und Wöchnerinnen haben Anspruch auf Versorgung mit notwendigen Arznei-, Verband-, Heil- und Hilfsmitteln, die im Zusammenhang mit der Schwangerschaft oder Entbindung erforderlich sind.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__24e.html",
  },
  "97ecef708f": {
    title: "Entbindungsleistungen",
    zielgruppen: ["schwangere", "arbeitnehmer"],
    summary:
      "GKV-Versicherte haben Anspruch auf eine ambulante oder stationäre Entbindung. Die Krankenkasse übernimmt die Kosten der Geburtshilfe durch Arzt oder Hebamme sowie ggf. die Kosten des Krankenhausaufenthalts.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__24f.html",
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
  "4239d689ba": {
    title: "Häusliche Pflege bei Schwangerschaft",
    zielgruppen: ["schwangere", "arbeitnehmer", "pflegebeduerftige"],
    summary:
      "Wenn eine Schwangere oder Wöchnerin wegen der Schwangerschaft oder Entbindung den Haushalt nicht führen kann und keine andere Person im Haushalt dies übernehmen kann, hat sie Anspruch auf häusliche Pflege.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__24g.html",
  },
  "866e93e202": {
    title: "Haushaltshilfe bei Schwangerschaft",
    zielgruppen: ["schwangere", "eltern", "arbeitnehmer"],
    summary:
      "Schwangere und Wöchnerinnen, die den Haushalt nicht führen können, haben Anspruch auf eine Haushaltshilfe, wenn ein Kind unter 12 Jahren im Haushalt lebt und keine andere Person einspringen kann.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__24h.html",
  },
  e3733e2540: {
    title: "Gesundheitsuntersuchung (Check-up)",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Versicherte ab 18 Jahren haben Anspruch auf eine ärztliche Gesundheitsuntersuchung zur Früherkennung von Krankheiten, insbesondere von Herz-Kreislauf-Erkrankungen, Nierenerkrankungen und Diabetes. Ab 35 Jahren ist der Check-up alle drei Jahre möglich.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__25.html",
  },
  "294402ac25": {
    title: "Organisierte Krebsfrüherkennungsprogramme",
    zielgruppen: ["schwangere"],
    summary:
      "Versicherte haben Anspruch auf Teilnahme an organisierten Krebsfrüherkennungsprogrammen, zum Beispiel Mammographie-Screening, Darmkrebs-Screening und Gebärmutterhalskrebsvorsorge. Diese Programme folgen qualitätsgesicherten Einladungssystemen.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__25a.html",
  },
  f02b27cc35: {
    title: "Datengestützte Gesundheitsrisikoerkennung",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "Krankenkassen dürfen Versicherungsdaten auswerten, um individuelle Gesundheitsrisiken zu erkennen und Versicherte proaktiv auf Früherkennungsangebote hinzuweisen. Die Teilnahme an entsprechenden Maßnahmen ist freiwillig.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__25b.html",
  },
  "83d18d61d1": {
    title: "Kinderfrüherkennungsuntersuchungen (U1–U9, J1)",
    zielgruppen: ["eltern", "behinderung"],
    summary:
      "Kinder und Jugendliche haben Anspruch auf gesetzlich festgelegte Früherkennungsuntersuchungen (U-Untersuchungen) in verschiedenen Altersstufen. Diese dienen der frühzeitigen Erkennung von Entwicklungsstörungen, Krankheiten und Behinderungen.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__26.html",
  },
  "716126da90": {
    title: "Krankenbehandlung (GKV)",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "GKV-Versicherte haben Anspruch auf Krankenbehandlung, die notwendig ist, um eine Krankheit zu erkennen, zu heilen, ihre Verschlimmerung zu verhüten oder Krankheitsbeschwerden zu lindern. Dies umfasst ärztliche und zahnärztliche Behandlung, Arzneimittel, Krankenhausbehandlung und mehr.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__27.html",
    resources: [
      {
        label: "§ 27 SGB V – Krankenbehandlung (Gesetze im Internet)",
        url: "https://www.gesetze-im-internet.de/sgb_5/__27.html",
      },
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
  "231f37a790": {
    title: "Kryokonservierung von Keimzellen",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "GKV-Versicherte haben Anspruch auf Kryokonservierung (Einfrieren) von Ei- oder Samenzellen oder Keimzellgewebe, wenn eine Krebserkrankung oder deren Behandlung die Fruchtbarkeit gefährdet.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__27a.html",
  },
  "53a1229fb7": {
    title: "Künstliche Befruchtung (IVF/ICSI)",
    zielgruppen: ["eltern"],
    summary:
      "Verheiratete GKV-Versicherte, die ungewollt kinderlos sind, können unter bestimmten Voraussetzungen Zuschüsse zur künstlichen Befruchtung erhalten. Die Kasse übernimmt 50 % der Kosten für bis zu drei Versuche bei Frauen zwischen 25 und 40 Jahren.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__27a.html",
  },
  "58280ebf01": {
    title: "Anspruch auf ärztliche Zweitmeinung",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Vor bestimmten planbaren, aber mit Risiken verbundenen Operationen können Versicherte eine unabhängige Zweitmeinung eines weiteren Facharztes einholen. Die Krankenkasse übernimmt die Kosten dieser Zweitmeinung.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__27b.html",
  },
  af6805e0be: {
    title: "Ärztliche Behandlung",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "GKV-Versicherte haben Anspruch auf ärztliche Behandlung durch zugelassene Vertragsärzte. Die Behandlung umfasst alle medizinisch notwendigen diagnostischen und therapeutischen Maßnahmen.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__28.html",
  },
  c601a765b4: {
    title: "Zahnärztliche Behandlung",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "GKV-Versicherte haben Anspruch auf zahnärztliche Behandlung, einschließlich der Behandlung von Zähnen, des Zahnfleisches und der Mundhöhle. Dazu gehören konservierende und chirurgische Leistungen sowie Röntgen.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__28.html",
  },
  "9af90b69c5": {
    title: "Psychotherapeutische Behandlung",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "GKV-Versicherte haben Anspruch auf psychotherapeutische Behandlung bei seelischen Erkrankungen durch zugelassene Psychotherapeuten oder Ärzte mit psychotherapeutischer Ausbildung.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__28.html",
  },
  d7369c94cc: {
    title: "Kieferorthopädische Behandlung",
    zielgruppen: ["eltern"],
    summary:
      "Kinder und Jugendliche bis 18 Jahre mit einer kieferorthopädischen Indikation (KIG-Grade 3–5) haben Anspruch auf kieferorthopädische Behandlung durch die GKV. Für Erwachsene werden Kosten nur in seltenen Ausnahmefällen übernommen.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__29.html",
  },
  "13a09e8336": {
    title: "Einmalige Arzneimittelversorgung",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Für bestimmte Erkrankungen oder Situationen können GKV-Versicherte Anspruch auf eine einmalige Versorgung mit Arzneimitteln haben, auch wenn diese sonst nicht zum Standardleistungskatalog gehören.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__31.html",
  },
  "20030e822c": {
    title: "Medizinisches Cannabis",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "GKV-Versicherte mit schwerwiegenden Erkrankungen haben Anspruch auf Versorgung mit Cannabis als Medizin (Blüten, Extrakte oder Fertigarzneimittel), wenn andere Therapien nicht ausreichen und eine begründete Aussicht auf Therapieerfolg besteht.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__31.html",
  },
  "5c1fef9916": {
    title: "Verbandmittel",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "GKV-Versicherte haben Anspruch auf Versorgung mit Verbandmitteln, die zur Behandlung von Wunden und Verletzungen medizinisch notwendig sind.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__31.html",
  },
  "28a1b23dcd": {
    title: "Harn- und Blutteststreifen",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "GKV-Versicherte, insbesondere Diabetiker, haben Anspruch auf Versorgung mit Harn- und Blutteststreifen zur Selbstkontrolle des Blutzuckers.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__31.html",
  },
  "800ee7fa9b": {
    title: "Medikationsplan",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Versicherte, die dauerhaft mindestens drei verordnete Arzneimittel einnehmen, haben Anspruch auf einen aktuellen Medikationsplan in Papierform und ggf. auch digital. Er hilft, Wechselwirkungen zu erkennen und die Therapietreue zu verbessern.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__31a.html",
  },
  "02c3a32bc8": {
    title: "Telemedizinische Heilmittel",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "GKV-Versicherte haben Anspruch auf Heilmittel, die im Wege der Telemedizin (z.B. per Videochat) erbracht werden, wenn dies medizinisch sinnvoll und vom Gemeinsamen Bundesausschuss zugelassen ist.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__32.html",
  },
  "0ba60aa92d": {
    title: "Hörhilfen (Hörgeräte)",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "GKV-Versicherte mit Hörverlust haben Anspruch auf Versorgung mit Hörhilfen (Hörgeräten). Die Kasse übernimmt einen Festbetrag; Mehrkosten für höherwertige Geräte tragen Versicherte selbst.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__33.html",
  },
  ddbdb60b5f: {
    title: "Körperersatzstücke (Prothesen)",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "GKV-Versicherte haben Anspruch auf Versorgung mit Körperersatzstücken (z.B. Armprothesen, Beinprothesen, Brustprothesen nach Mastektomie), wenn diese medizinisch notwendig sind.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__33.html",
  },
  b52d29071b: {
    title: "Orthopädische und andere Hilfsmittel",
    zielgruppen: ["behinderung", "pflegebeduerftige"],
    summary:
      "GKV-Versicherte haben Anspruch auf orthopädische Hilfsmittel (z.B. Einlagen, Korsetts) und andere Hilfsmittel (z.B. Rollstühle, Pflegebetten), die zur Sicherung des Behandlungserfolgs oder zur Behinderungsausgleich notwendig sind.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__33.html",
  },
  "5baacb3e8b": {
    title: "Sehhilfen (Brillen/Kontaktlinsen)",
    zielgruppen: ["eltern"],
    summary:
      "Kinder und Jugendliche bis 18 Jahre sowie Versicherte mit schwerwiegenden Sehstörungen haben Anspruch auf Sehhilfen (Brillengläser, Kontaktlinsen). Für Erwachsene gilt ein eingeschränkter Anspruch.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__33.html",
  },
  e67903224d: {
    title: "Digitale Gesundheitsanwendungen (DiGA)",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "GKV-Versicherte haben Anspruch auf Versorgung mit digitalen Gesundheitsanwendungen (DiGA), die vom Bundesinstitut für Arzneimittel und Medizinprodukte (BfArM) in ein Verzeichnis aufgenommen wurden. Diese Apps können auf Rezept verordnet werden.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__33a.html",
  },
  ebb0aeb6b7: {
    title: "Tabakentwöhnungsmittel",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "GKV-Versicherte haben einmalig Anspruch auf Versorgung mit zugelassenen, nicht verschreibungspflichtigen Mitteln zur Tabakentwöhnung, wenn diese im Rahmen eines ärztlich begleiteten Programms eingesetzt werden.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__34.html",
  },
  "16fbe8692f": {
    title: "Nicht-verschreibungspflichtige Arzneimittel für Kinder bis 11",
    zielgruppen: ["eltern"],
    summary:
      "Kinder bis zum vollendeten 12. Lebensjahr haben Anspruch auf nicht verschreibungspflichtige Arzneimittel, soweit diese medizinisch indiziert sind und der Arzt sie verordnet.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__34.html",
  },
  d68d2a70b1: {
    title: "OTC-Arzneimittel für Jugendliche mit Entwicklungsstörung",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Jugendliche zwischen 12 und 18 Jahren, die an einer Entwicklungsstörung leiden, können Anspruch auf nicht verschreibungspflichtige Arzneimittel haben, wenn diese medizinisch notwendig sind.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__34.html",
  },
  c45e28f478: {
    title: "Ambulante Palliativversorgung (allgemein)",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "Schwerstkranke und sterbende GKV-Versicherte haben Anspruch auf allgemeine ambulante Palliativversorgung durch ihren Haus- oder Facharzt. Ziel ist die Linderung von Schmerzen und anderen belastenden Symptomen zu Hause.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__37.html",
  },
  "1bf08ba2ea": {
    title: "Häusliche Krankenpflege",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "GKV-Versicherte haben nach einem Krankenhausaufenthalt oder anstelle einer Krankenhausbehandlung Anspruch auf häusliche Krankenpflege. Eine Pflegefachkraft kommt dann nach Hause und übernimmt medizinische und pflegerische Aufgaben.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__37.html",
  },
  "1f61f0e384": {
    title: "Soziotherapie",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Schwer psychisch kranke GKV-Versicherte haben Anspruch auf Soziotherapie, wenn sie aufgrund ihrer Erkrankung nicht in der Lage sind, ärztlich verordnete Leistungen selbstständig in Anspruch zu nehmen. Eine Begleit- und Koordinierungsperson hilft dabei.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__37a.html",
  },
  aa63b52f6d: {
    title: "Spezialisierte ambulante Palliativversorgung (SAPV)",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Sterbenskranke mit besonders aufwendigem Versorgungsbedarf haben Anspruch auf spezialisierte ambulante Palliativversorgung (SAPV) durch ein multiprofessionelles Team. Ziel ist ein würdevoller Tod im gewohnten Umfeld.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__37b.html",
  },
  cc7a082ed8: {
    title: "Außerklinische Intensivpflege",
    zielgruppen: ["arbeitnehmer", "kranke", "pflegebeduerftige"],
    summary:
      "Versicherte, die auf außerklinische Intensivpflege angewiesen sind (z.B. beatmungspflichtige Patienten), haben Anspruch auf diese Versorgung in ihrer häuslichen Umgebung oder in geeigneten Einrichtungen.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__37c.html",
  },
  "0270a3b4fa": {
    title: "Haushaltshilfe bei Krankenhausaufenthalt",
    zielgruppen: ["eltern"],
    summary:
      "GKV-Versicherte können bei Krankenhausaufenthalt oder ambulanter Behandlung eine Haushaltshilfe erhalten, wenn der Haushalt nicht weitergeführt werden kann und ein Kind unter 12 Jahren betreut werden muss.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__38.html",
  },
  "7989cb95b3": {
    title: "Krankenhausbehandlung",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "GKV-Versicherte haben Anspruch auf vollstationäre, teilstationäre oder ambulante Krankenhausbehandlung, wenn dies medizinisch notwendig ist. Die Krankenkasse übernimmt die Kosten nach Maßgabe der vereinbarten Pflegesätze.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__39.html",
  },
  "4a085fa62b": {
    title: "Zuschuss zu stationären und ambulanten Hospizleistungen",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "Sterbenskranke Versicherte haben Anspruch auf einen Zuschuss zu Hospizleistungen in stationären Hospizen sowie auf Unterstützung ambulanter Hospizdienste. Die Krankenkasse beteiligt sich an den Kosten der pflegerischen und medizinischen Versorgung.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__39a.html",
  },
  "732d00a0e8": {
    title: "Hospiz- und Palliativberatung durch die Krankenkasse",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "GKV-Versicherte und ihre Angehörigen haben Anspruch auf individuelle Beratung durch ihre Krankenkasse zu Hospiz- und Palliativleistungen, damit die bestmögliche Versorgung am Lebensende sichergestellt wird.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__39b.html",
  },
  cffda5ce81: {
    title: "Kurzzeitpflege ohne Pflegebedürftigkeit",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "Nach einer Krankenhausbehandlung oder in ähnlichen Situationen, in denen häusliche Pflege vorübergehend nicht möglich ist, aber (noch) keine Pflegebedürftigkeit besteht, kann die GKV Kurzzeitpflege finanzieren.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__39c.html",
    resources: [
      {
        label: "§ 39c SGB V – Gesetzestext",
        url: "https://www.gesetze-im-internet.de/sgb_5/__39c.html",
      },
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
  de9e077761: {
    title: "Übergangspflege im Krankenhaus",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "Wenn nach einer Krankenhausbehandlung die weitere Versorgung zu Hause oder in einer Pflegeeinrichtung nicht sofort sichergestellt werden kann, haben Versicherte Anspruch auf Übergangspflege im Krankenhaus für bis zu zehn Tage.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__39e.html",
  },
  "29567e6843": {
    title: "Ambulante Rehabilitation (GKV)",
    zielgruppen: ["arbeitnehmer", "behinderung", "kranke"],
    summary:
      "GKV-Versicherte haben Anspruch auf ambulante Rehabilitationsmaßnahmen, wenn diese notwendig sind, um Behinderungen zu vermeiden oder zu mindern. Die Kasse trägt die Kosten, wenn die Rehabilitationsziele ambulant erreichbar sind.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__40.html",
  },
  "3ff7bb564c": {
    title: "Stationäre Rehabilitation (GKV)",
    zielgruppen: ["arbeitnehmer", "kranke"],
    summary:
      "Wenn ambulante Maßnahmen nicht ausreichen, können GKV-Versicherte stationäre Rehabilitation in einer Rehabilitationseinrichtung in Anspruch nehmen. Die Krankenkasse übernimmt die Kosten für Behandlung, Unterkunft und Verpflegung.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__40.html",
  },
  "32fa6e3e79": {
    title: "Mutter-/Vater-Kind-Rehabilitation",
    zielgruppen: ["schwangere", "eltern", "arbeitnehmer", "kranke"],
    summary:
      "Mütter und Väter mit Kindern können eine stationäre medizinische Rehabilitation in Anspruch nehmen, wenn ihre Gesundheit dies erfordert. Die Kinder können mitgenommen werden; die Kasse übernimmt die Kosten für das Elternteil und die Kinder.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__41.html",
  },
  "513a77768c": {
    title: "Belastungserprobung zum Arbeitswiedereintritt",
    zielgruppen: ["arbeitnehmer", "kranke"],
    summary:
      "Im Rahmen der Rehabilitation können GKV-Versicherte eine stufenweise Belastungserprobung durchführen, um die Arbeitsfähigkeit nach längerem Ausfall schrittweise wiederherzustellen.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__42.html",
  },
  d3cd6930ac: {
    title: "Arbeitstherapie",
    zielgruppen: ["arbeitnehmer", "kranke"],
    summary:
      "Arbeitstherapie unterstützt GKV-Versicherte dabei, nach Erkrankungen oder Unfällen arbeitsspezifische Fähigkeiten wiederzuerlangen. Sie ist Teil der medizinischen Rehabilitation und wird von der Krankenkasse finanziert.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__42.html",
  },
  "4fa0168f6e": {
    title: "Ergänzende Rehabilitationsleistungen für Behinderte",
    zielgruppen: ["arbeitnehmer", "behinderung", "kranke"],
    summary:
      "Menschen mit Behinderungen können im Rahmen der Rehabilitation ergänzende Leistungen in Trägerschaft der Krankenkasse erhalten, um die Eingliederung in Arbeit und Gesellschaft zu fördern.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__43.html",
  },
  def78e98cb: {
    title: "Patientenschulungen (Rehabilitation)",
    zielgruppen: ["arbeitnehmer", "kranke"],
    summary:
      "GKV-Versicherte, die an chronischen Erkrankungen leiden, können Patientenschulungsmaßnahmen in Anspruch nehmen, die im Rahmen der Rehabilitation von Krankenkassen angeboten werden.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__43.html",
  },
  "170f14cedc": {
    title: "Sozialmedizinische Nachsorge für chronisch kranke Kinder",
    zielgruppen: ["eltern", "arbeitnehmer", "kranke"],
    summary:
      "Chronisch kranke und schwerstkranke Kinder sowie Jugendliche haben nach stationärer Behandlung Anspruch auf sozialmedizinische Nachsorge, die die ambulante Weiterversorgung koordiniert und Familien unterstützt.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__43.html",
  },
  "458ac007db": {
    title:
      "Sozialmedizinische Nachsorge für schwerstkranke Kinder (Erweiterung)",
    zielgruppen: ["jugendliche", "kranke", "eltern"],
    summary:
      "In schwerwiegenden Fällen kann die sozialmedizinische Nachsorge für chronisch oder schwerstkranke Kinder über die Standardleistung hinaus ausgedehnt werden, um eine lückenlose Versorgung sicherzustellen.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__43.html",
  },
  fe1293604a: {
    title: "Sozialpädiatrische Leistungen: Psychologische Hilfen für Kinder",
    zielgruppen: ["eltern"],
    summary:
      "Kinder, die in sozialpädiatrischen Zentren behandelt werden, haben Anspruch auf nichtärztliche Leistungen wie psychologische Diagnostik und Therapie, die von der Krankenkasse übernommen werden.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__43a.html",
  },
  "252c4abcf9": {
    title: "Sozialpädiatrische Leistungen: Heilpädagogik für Kinder",
    zielgruppen: ["eltern"],
    summary:
      "Im Rahmen sozialpädiatrischer Zentren haben Kinder Anspruch auf heilpädagogische Maßnahmen, die die GKV finanziert. Diese dienen der Förderung der Entwicklung und der Bewältigung von Teilhabeeinschränkungen.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__43a.html",
  },
  a7c092e25f: {
    title: "Sozialpädiatrische Leistungen: Psychosoziale Hilfen für Kinder",
    zielgruppen: ["eltern"],
    summary:
      "Kinder in sozialpädiatrischen Zentren haben Anspruch auf psychosoziale Beratung und Begleitung ihrer Familien. Die GKV übernimmt diese nichtärztlichen Leistungen als Teil des Behandlungskonzepts.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__43a.html",
  },
  ecf97a3882: {
    title: "Sozialpädiatrische Leistungen: Psychiatrische Hilfen für Kinder",
    zielgruppen: ["eltern"],
    summary:
      "Kinder mit psychiatrischem Behandlungsbedarf, die in sozialpädiatrischen Einrichtungen betreut werden, haben Anspruch auf nichtärztliche psychiatrische Leistungen, die von der Krankenkasse finanziert werden.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__43a.html",
  },
  "83b613a5a7": {
    title: "Psychologische Leistungen für Erwachsene mit geistiger Behinderung",
    zielgruppen: ["arbeitnehmer", "behinderung"],
    summary:
      "Erwachsene mit geistiger Behinderung oder schwerer Mehrfachbehinderung haben in medizinischen Behandlungszentren Anspruch auf psychologische nichtärztliche Leistungen, die die GKV finanziert.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__43b.html",
  },
  "796254e3c2": {
    title:
      "Heilpädagogische Leistungen für Erwachsene mit geistiger Behinderung",
    zielgruppen: ["behinderung"],
    summary:
      "Erwachsene mit geistiger oder schwerer Mehrfachbehinderung haben in medizinischen Behandlungszentren Anspruch auf heilpädagogische nichtärztliche Leistungen als Teil der von der GKV finanzierten Behandlung.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__43b.html",
  },
  "0c486da410": {
    title:
      "Sozialarbeiterische Leistungen für Erwachsene mit geistiger Behinderung",
    zielgruppen: ["behinderung"],
    summary:
      "Erwachsene mit geistiger Behinderung oder schwerer Mehrfachbehinderung haben in medizinischen Behandlungszentren Anspruch auf sozialarbeiterische nichtärztliche Leistungen, die von der GKV übernommen werden.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__43b.html",
  },
  "7ffea6272c": {
    title:
      "Nichtärztliche Leistungen für Erwachsene mit geistiger Behinderung (Pflege)",
    zielgruppen: ["behinderung"],
    summary:
      "Erwachsene mit geistiger oder schwerer Mehrfachbehinderung haben in medizinischen Behandlungszentren Anspruch auf pflegerische nichtärztliche Leistungen im Rahmen der GKV-finanzierten Versorgung.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__43b.html",
  },
  c7152cf8c4: {
    title: "Krankengeld bei eigener Erkrankung",
    zielgruppen: ["arbeitnehmer", "kranke"],
    summary:
      "GKV-Versicherte erhalten Krankengeld, wenn sie wegen einer Krankheit arbeitsunfähig sind und dadurch Einkommensverlust haben. Das Krankengeld beträgt 70 % des Bruttolohns (max. 90 % des Nettolohns) und wird ab der 7. Woche der Erkrankung gezahlt.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__44.html",
  },
  "75ab020109": {
    title: "Krankengeld bei Organspende",
    zielgruppen: ["arbeitnehmer", "kranke"],
    summary:
      "Wer als lebender Organspender vorübergehend arbeitsunfähig wird, erhält Krankengeld. Auch Spender von Gewebe oder Blut zur Stammzelltrennung sind abgesichert.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__44a.html",
  },
  b957962043: {
    title: "Krankengeld für Begleitperson bei Kinderkrankenhausaufenthalt",
    zielgruppen: ["eltern", "arbeitnehmer", "kranke"],
    summary:
      "Wenn ein Kind stationär behandelt wird und eine nahestehende Person zur Begleitung mitaufgenommen ist, kann diese Person Krankengeld erhalten, sofern sie dadurch Einkommensverluste erleidet.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__44b.html",
  },
  "91d87b62de": {
    title: "Kinderkrankengeld",
    zielgruppen: ["eltern", "alleinerziehende", "arbeitnehmer", "kranke"],
    summary:
      "Berufstätige GKV-Versicherte erhalten Kinderkrankengeld, wenn ihr Kind unter 12 Jahren erkrankt ist und beaufsichtigt, betreut oder gepflegt werden muss. Pro Elternteil und Kind stehen bis zu 15 Arbeitstage pro Jahr zur Verfügung (bei Alleinerziehenden 30).",
    url: "https://www.gesetze-im-internet.de/sgb_5/__45.html",
  },
  "8cbfe52e5d": {
    title: "Krankengeld statt Arbeitslosengeld",
    zielgruppen: ["arbeitnehmer", "kranke"],
    summary:
      "Versicherte, die während des Bezugs von Arbeitslosengeld erkranken und arbeitsunfähig werden, erhalten Krankengeld statt Arbeitslosengeld. Das Krankengeld entspricht dabei der Höhe des Arbeitslosengeldes.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__47b.html",
  },
  fd24c7698a: {
    title: "Krankengeld statt Unterhaltsgeld",
    zielgruppen: ["arbeitnehmer", "kranke"],
    summary:
      "Wer während einer Weiterbildungsmaßnahme mit Unterhaltsgeld erkranken und arbeitsunfähig wird, erhält Krankengeld in Höhe des Unterhaltsgeldes.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__47b.html",
  },
  "31ffc41b6a": {
    title: "Krankengeld statt Kurzarbeitergeld",
    zielgruppen: ["arbeitnehmer", "kranke"],
    summary:
      "Versicherte, die während des Bezugs von Kurzarbeitergeld erkranken, erhalten Krankengeld in Höhe des Kurzarbeitergeldes. So werden Einkommensverluste durch Krankheit während Kurzarbeit abgesichert.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__47b.html",
  },
  cdb15e7cc6: {
    title: "Krankengeld statt Qualifizierungsgeld",
    zielgruppen: ["arbeitnehmer", "kranke"],
    summary:
      "Versicherte, die während des Bezugs von Qualifizierungsgeld erkranken und arbeitsunfähig werden, erhalten Krankengeld in Höhe des Qualifizierungsgeldes.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__47b.html",
  },
  "1c97173283": {
    title: "Wahltarife der Krankenkasse",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "GKV-Versicherte können bei ihrer Krankenkasse jährlich wählbare Tarife (Wahltarife) abschließen, etwa Hausarzttarife, Tarife mit Beitragsrückerstattung oder mit besonderen Leistungen. Die Bindungsfrist beträgt in der Regel drei Jahre.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__53.html",
  },
  f38e187fba: {
    title: "Zahnersatz-Festzuschüsse",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "GKV-Versicherte erhalten Festzuschüsse zu Zahnersatz (Kronen, Brücken, Prothesen). Die Höhe richtet sich nach dem Befund; mit einem regelmäßig geführten Bonusheft kann der Zuschuss erhöht werden.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__55.html",
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
        label: "Verbraucherzentrale – Zahnersatz: Wie viel übernimmt die gesetzliche Krankenkasse?",
        url: "https://www.verbraucherzentrale.de/wissen/gesundheit-pflege/krankenversicherung/zahnersatz-wie-viel-uebernimmt-die-gesetzliche-krankenkasse-12884",
      },
      {
        label: "KZBV – Hinweise und Berechnungsbeispiele zu Festzuschüssen (PDF)",
        url: "https://www.kzbv.de/wp-content/uploads/KZBV_FZ-Kompendium_2025-01-01_2.pdf",
      },
    ],
  },
  "2fb71009f4": {
    title: "Erhöhte Zahnersatz-Festzuschüsse (Bonus)",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Versicherte, die seit mindestens fünf bzw. zehn Jahren regelmäßig Vorsorgeuntersuchungen beim Zahnarzt nachweisen können (Bonusheft), erhalten erhöhte Festzuschüsse zum Zahnersatz.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__55.html",
  },
  b139e8de85: {
    title: "Erhöhte Zahnersatz-Festzuschüsse (Härtefall)",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Versicherte mit geringem Einkommen (Härtefall) erhalten erhöhte Festzuschüsse zum Zahnersatz. In Extremfällen können die vollen Kosten des Regelversorgungsanspruchs übernommen werden.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__55.html",
    resources: [
      {
        label: "§ 55 SGB V – Leistungsanspruch (Gesetzestext)",
        url: "https://www.gesetze-im-internet.de/sgb_5/__55.html",
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
  e1ba74cef6: {
    title: "Fahrkosten: Krankenhausverlegungsfahrten",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Die GKV übernimmt Fahrtkosten bei medizinisch notwendigen Verlegungsfahrten zwischen Krankenhäusern, wenn diese aus medizinischen Gründen erforderlich sind.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__60.html",
  },
  "4cec70003d": {
    title: "Fahrkosten: Rettungsfahrten",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Die GKV übernimmt die Kosten für Rettungsfahrten zum Krankenhaus (z.B. Notarzt, Rettungswagen), wenn eine sofortige stationäre Behandlung notwendig ist.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__60.html",
  },
  e9f7f47b82: {
    title: "Fahrkosten zur Vermeidung stationärer Versorgung",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Die GKV kann Fahrtkosten übernehmen, wenn Fahrten zu ambulanten Behandlungen notwendig sind, um eine stationäre Krankenhausaufnahme zu vermeiden.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__60.html",
  },
  "64fd355c21": {
    title: "Krankentransport",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "GKV-Versicherte haben bei medizinischer Notwendigkeit Anspruch auf Krankentransport, etwa wenn sie liegend transportiert werden müssen. Bei anderen Fahrten (z.B. zur Dialyse) ist in der Regel eine ärztliche Verordnung erforderlich.",
    url: "https://www.gesetze-im-internet.de/sgb_5/__60.html",
  },

  // SGB VI – Gesetzliche Rentenversicherung
  c254bb3049: {
    title: "Medizinische Rehabilitation (Rentenversicherung)",
    zielgruppen: ["kranke"],
    summary:
      "Die gesetzliche Rentenversicherung erbringt medizinische Rehabilitationsleistungen, wenn dadurch die Erwerbsfähigkeit erhalten oder wiederhergestellt werden kann. Dazu gehören stationäre und ambulante Reha-Maßnahmen in anerkannten Einrichtungen.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__15.html",
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
  "4a68decd44": {
    title: "Kinderrehabilitation (Rentenversicherung)",
    zielgruppen: ["kranke"],
    summary:
      "Kinder von Versicherten der gesetzlichen Rentenversicherung können Rehabilitation und Nachsorgeleistungen erhalten, wenn ihre Gesundheit dies erfordert. Damit soll einer dauerhaften Beeinträchtigung der Gesundheit vorgebeugt werden.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__15a.html",
  },
  c450bd4246: {
    title: "Teilhabe am Arbeitsleben (Rentenversicherung)",
    zielgruppen: ["behinderung", "senior"],
    summary:
      "Die gesetzliche Rentenversicherung fördert die berufliche Eingliederung von Versicherten, die wegen Krankheit oder Behinderung ihren bisherigen Beruf nicht mehr ausüben können. Leistungen umfassen Berufsförderung im Eingangsverfahren und im Berufsbildungsbereich von Werkstätten.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__16.html",
  },
  e2c52405bd: {
    title: "Übergangsgeld (Rentenversicherung)",
    zielgruppen: ["kranke"],
    summary:
      "Während einer von der Rentenversicherung genehmigten Reha-Maßnahme erhalten Versicherte Übergangsgeld als Einkommensersatz. Es beträgt in der Regel 68–75 % des letzten Nettoentgelts.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__20.html",
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
  cc2d565f75: {
    title: "Ergänzende Leistungen zum Übergangsgeld",
    zielgruppen: ["kranke"],
    summary:
      "Neben dem Übergangsgeld können Versicherte ergänzende Leistungen erhalten, etwa Haushaltshilfe, Kinderbetreuungskosten oder Reisekosten, wenn diese im Zusammenhang mit einer Reha-Maßnahme notwendig sind.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__28.html",
  },
  c0b82a6a0c: {
    title: "Sonstige Leistungen zur Teilhabe (Rentenversicherung)",
    zielgruppen: ["senior"],
    summary:
      "Die Rentenversicherung kann weitere Leistungen erbringen, die der Eingliederung in das Erwerbsleben dienen, soweit sie nicht von einem anderen Träger zu leisten sind. Dies dient als Auffangregelung für nicht anderweitig abgedeckte Teilhabeleistungen.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__31.html",
  },
  "39f9a82ba2": {
    title: "Regelaltersrente",
    zielgruppen: ["senior"],
    summary:
      "Die Regelaltersrente wird nach Erreichen der Regelaltersgrenze (derzeit 67 Jahre) und einer Mindestversicherungszeit von fünf Jahren aus der gesetzlichen Rentenversicherung gezahlt. Die Rentenhöhe richtet sich nach den eingezahlten Beiträgen und der Versicherungsdauer.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__35.html",
    resources: [
      {
        label:
          "DRV – Statistiken und Kennzahlen: Die DRV-Leistungen auf einen Blick (2025)",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Ueber-uns-und-Presse/Presse/Meldungen/2025/250211-drv-leistungen.html",
      },
      {
        label: "DRV – Altersrenten im Zeitablauf 2024 (Statistikpublikation)",
        url: "https://www.deutsche-rentenversicherung.de/SharedDocs/Downloads/DE/Statistiken-und-Berichte/statistikpublikationen/altersrenten_im_zeitablauf.html",
      },
      {
        label: "DRV – Rentenatlas 2025",
        url: "https://www.deutsche-rentenversicherung.de/SharedDocs/Downloads/DE/Statistiken-und-Berichte/Rentenatlas/2025/rentenatlas-2025-download.html",
      },
      {
        label: "DRV – Aktuelle Daten 2026 (Statistiken auf einen Blick)",
        url: "https://www.deutsche-rentenversicherung.de/SharedDocs/Downloads/DE/Statistiken-und-Berichte/statistikpublikationen/aktuelle_daten.html",
      },
      {
        label: "Destatis – Rente in Deutschland (Themenseite)",
        url: "https://www.destatis.de/DE/Im-Fokus/Rente/_inhalt.html",
      },
    ],
  },
  "68d816508e": {
    title: "Altersrente für langjährig Versicherte",
    zielgruppen: ["senior"],
    summary:
      "Wer mindestens 35 Jahre in der gesetzlichen Rentenversicherung versichert war, kann ab einem bestimmten Alter (derzeit frühestens 63 Jahre mit Abschlägen) Altersrente beziehen. Bei Rentenbeginn vor der Regelaltersgrenze werden Abschläge vorgenommen.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__36.html",
  },
  bf6f4ed502: {
    title: "Altersrente für schwerbehinderte Menschen",
    zielgruppen: ["senior", "behinderung"],
    summary:
      "Schwerbehinderte Menschen (Grad der Behinderung ≥ 50) können unter bestimmten Voraussetzungen früher in Rente gehen. Frühestens ab 60 Jahren und mit 35 Versicherungsjahren ist ein vorzeitiger Rentenbeginn möglich.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__37.html",
  },
  a9b57b6983: {
    title: "Altersrente für besonders langjährig Versicherte (45 Jahre)",
    zielgruppen: ["senior"],
    summary:
      'Versicherte, die 45 Jahre in der gesetzlichen Rentenversicherung versichert waren, können abschlagsfrei ab 65 Jahren in Rente gehen ("Rente mit 63"). Die Versicherungszeit muss überwiegend aus Beitragszeiten bestehen.',
    url: "https://www.gesetze-im-internet.de/sgb_6/__38.html",
  },
  "132653d4cc": {
    title: "Altersrente für Bergleute (Untertage)",
    zielgruppen: ["senior"],
    summary:
      "Bergleute, die langjährig untertage beschäftigt waren, haben unter bestimmten Voraussetzungen Anspruch auf eine vorgezogene Altersrente. Die besondere körperliche Belastung der Arbeit untertage wird damit anerkannt.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__40.html",
  },
  "7b887fe563": {
    title: "Altersrente als Voll- oder Teilrente",
    zielgruppen: ["senior"],
    summary:
      "Altersrenten können als Vollrente oder als Teilrente (mindestens 10 % der vollen Rente) bezogen werden. Die Teilrente ermöglicht flexiblere Übergänge in den Ruhestand, da weiterhin Einkommen hinzuverdient werden kann.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__42.html",
  },
  "3f9d293d71": {
    title: "Erwerbsminderungsrente",
    zielgruppen: ["behinderung", "kranke"],
    summary:
      "Versicherte, die aus gesundheitlichen Gründen dauerhaft weniger als sechs (volle EM-Rente) oder weniger als drei Stunden täglich (teilweise EM-Rente) arbeiten können, erhalten eine Erwerbsminderungsrente. Voraussetzung sind fünf Jahre Mindestversicherungszeit.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__43.html",
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
    ],
  },
  "696749ea93": {
    title: "Bergmannsrente",
    zielgruppen: ["behinderung", "senior"],
    summary:
      "Bergleute, die infolge von Krankheit oder Behinderung nicht mehr in der Lage sind, ihre bisherige bergmännische Arbeit zu verrichten, können Bergmannsrente erhalten. Sie wird auch gezahlt, wenn eine zumutbare andere Tätigkeit nicht ausgeübt werden kann.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__45.html",
  },
  "84f5388192": {
    title: "Witwenrente / Witwerrente",
    zielgruppen: ["hinterbliebene"],
    summary:
      "Nach dem Tod eines Versicherten erhalten der überlebende Ehepartner oder eingetragene Lebenspartner eine Hinterbliebenenrente. Die kleine Witwenrente wird für 24 Monate, die große Witwenrente dauerhaft gezahlt, wenn bestimmte Voraussetzungen (Alter, Kinder, Erwerbsminderung) erfüllt sind.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__46.html",
  },
  ad7ff56fe2: {
    title: "Erziehungsrente",
    zielgruppen: ["hinterbliebene"],
    summary:
      "Geschiedene oder verwitwete Versicherte, die ein Kind erziehen und selbst nicht wieder geheiratet haben, können unter bestimmten Voraussetzungen Erziehungsrente erhalten. Sie überbrückt die Zeit bis zum eigenen Rentenanspruch.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__47.html",
  },
  a63dc86112: {
    title: "Waisenrente",
    zielgruppen: ["hinterbliebene", "jugendliche"],
    summary:
      "Halbwaisen und Vollwaisen erhalten nach dem Tod eines oder beider Elternteile eine Waisenrente aus der gesetzlichen Rentenversicherung. Die Rente wird bis zum 18. Lebensjahr, in Ausnahmefällen bis 27 Jahre, gezahlt.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__48.html",
  },
  "4a340931c2": {
    title: "Rente bei Verschollenheit",
    zielgruppen: ["hinterbliebene"],
    summary:
      "Wenn ein Versicherter verschollen ist und sein Tod wahrscheinlich ist, können Ehegatten oder Kinder Hinterbliebenenrente beantragen. Die Rentenzahlung beginnt, sobald die Verschollenheit rechtlich festgestellt ist.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__49.html",
  },
  "483f27146f": {
    title: "Kindererziehungszeiten in der Rente",
    zielgruppen: ["senior"],
    summary:
      "Zeiten der Kindererziehung in den ersten drei Lebensjahren eines Kindes werden als Beitragszeiten in der gesetzlichen Rentenversicherung angerechnet. Damit werden Eltern, die Kinder erzogen haben, bei der Rente bessergestellt.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__56.html",
  },
  "7a39c94fc5": {
    title: "Rentensplitting unter Ehegatten",
    zielgruppen: ["hinterbliebene"],
    summary:
      "Verheiratete oder eingetragene Lebenspartner können ihre während der gemeinsamen Zeit erworbenen Rentenanwartschaften gleichmäßig aufteilen (Rentensplitting). Dies kann vorteilhafter sein als Witwenrente, wenn ein Ehepartner deutlich mehr verdient hat.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__76c.html",
  },
  "7d5cb07e37": {
    title: "Rentenzuschläge für Beiträge nach Rentenbeginn",
    zielgruppen: ["senior"],
    summary:
      "Wer nach Rentenbeginn weiter in die gesetzliche Rentenversicherung einzahlt, erwirbt Zuschläge an Entgeltpunkten, die die Rente erhöhen. Dies betrifft insbesondere Rentner, die noch erwerbstätig sind.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__76d.html",
  },
  ee2b3bce8a: {
    title: "Rentenzuschlag für besondere Auslandsverwendung",
    zielgruppen: ["senior"],
    summary:
      "Versicherte, die im Rahmen eines offiziellen Einsatzes besonders riskant im Ausland tätig waren (z.B. UN-Missionen, Auslandseinsätze der Bundeswehr), erhalten Zuschläge an Entgeltpunkten in der Rentenversicherung.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__76e.html",
  },
  "9861eef831": {
    title: "Rentenzuschlag für nachversicherte Zeitsoldaten",
    zielgruppen: ["senior", "beamte"],
    summary:
      "Soldaten auf Zeit, die nach ihrem Dienst in der gesetzlichen Rentenversicherung nachversichert werden, erhalten Zuschläge an Entgeltpunkten für ihre Dienstzeit. Dies sichert ihre Rentenansprüche trotz fehlender direkter Beitragszeiten.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__76f.html",
  },
  "2ca379671e": {
    title: "Grundrentenzuschlag (Langjährig Versicherte)",
    zielgruppen: ["senior"],
    summary:
      "Versicherte mit mindestens 33 Jahren Grundrentenzeiten und unterdurchschnittlichem Einkommen erhalten einen Grundrentenzuschlag, der die Rente aufwertet. Der Zuschlag wurde 2021 eingeführt und soll Altersarmut trotz langer Erwerbsbiografie verringern.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__76g.html",
    resources: [
      {
        label: "BMAS – Grundrente: Informationen für Versicherte",
        url: "https://www.bmas.de/DE/Soziales/Rente-und-Altersvorsorge/Rentenarten-und-Leistungen/grundrente.html",
      },
      {
        label: "Deutsche Rentenversicherung – Grundrente",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/Allgemeine-Informationen/Rentenarten-und-Leistungen/Grundrente/grundrente.html",
      },
      {
        label: "Grundrentengesetz (BGBl. 2020 I Nr. 25)",
        url: "https://www.bgbl.de/xaver/bgbl/start.xav?start=//*%5B@attr_id=%27bgbl120s1879.pdf%27%5D",
      },
      {
        label:
          "Datenaustausch für die Einkommensanrechnung (GrundrentendatenaustauschG)",
        url: "https://www.gesetze-im-internet.de/grundrentendatenaustauschgesetz/",
      },
    ],
  },
  "7d80a3d1ff": {
    title: "Zuschlag bei Waisenrenten",
    zielgruppen: ["senior", "hinterbliebene"],
    summary:
      "Waisenrenten werden durch einen Zuschlag erhöht, wenn der verstorbene Elternteil selbst keine Rente bezogen hat. Der Zuschlag wird auf Basis der nicht in Anspruch genommenen Altersrente des Verstorbenen berechnet.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__78.html",
  },
  "863df259b4": {
    title: "Zuschlag bei Witwenrente / Witwerrente",
    zielgruppen: ["hinterbliebene"],
    summary:
      "Witwenrenten und Witwerrenten können durch einen Zuschlag erhöht werden, wenn der Verstorbene keine eigene Rente bezogen hat. Die Höhe des Zuschlags richtet sich nach den nicht in Anspruch genommenen Entgeltpunkten.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__78a.html",
  },
  b1a6cd8166: {
    title: "Zusatzentgeltpunkte für Arbeit untertage",
    zielgruppen: ["senior"],
    summary:
      "Bergleute erhalten für ständige Tätigkeiten untertage zusätzliche Entgeltpunkte in der Rentenversicherung. Diese Sonderregelung berücksichtigt die besonderen gesundheitlichen Belastungen des Bergbaus.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__85.html",
  },
  "57233b5599": {
    title: "Krankenkassenzuschuss für Rentner",
    zielgruppen: ["senior"],
    summary:
      "Rentner, die freiwillig oder privat krankenversichert sind, erhalten von der Rentenversicherung einen Zuschuss zu ihren Krankenversicherungsbeiträgen. Er beträgt die Hälfte des Mindestbeitrags zur gesetzlichen Krankenversicherung.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__106.html",
  },
  "14c9fe70b4": {
    title: "Rentenabfindung bei Wiederheirat",
    zielgruppen: ["hinterbliebene"],
    summary:
      "Witwen oder Witwer, die erneut heiraten, verlieren ihren Anspruch auf Witwenrente. Als Ausgleich erhalten sie eine einmalige Rentenabfindung in Höhe des 24-fachen Monatsbetrags der bisherigen Rente.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__107.html",
  },
  d95507294e: {
    title: "Altersrente nach Arbeitslosigkeit oder Altersteilzeit",
    zielgruppen: ["senior"],
    summary:
      "Versicherte, die das 60. Lebensjahr vollendet haben und nach Arbeitslosigkeit oder Altersteilzeit die Voraussetzungen erfüllen, können vorzeitig in Altersrente gehen. Diese Übergangsregelung gilt für Geburtsjahrgänge bis 1951.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__237.html",
  },
  "8ac6ae834d": {
    title: "Altersrente für Frauen (Übergangsregelung)",
    zielgruppen: ["senior"],
    summary:
      "Frauen, die vor 1952 geboren sind und mindestens 15 Jahre versichert waren, davon zehn Jahre nach dem 40. Lebensjahr, konnten ab 60 Jahren Altersrente beziehen. Diese Übergangsregelung gilt nur für ältere Jahrgänge.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__237a.html",
  },
  d3c4cd8012: {
    title: "Knappschaftsausgleichsleistung",
    zielgruppen: ["senior"],
    summary:
      "Ältere Bergleute, die nach dem Ausscheiden aus dem Bergbau keine zumutbare andere Arbeit finden und noch nicht rentenberechtigt sind, können Knappschaftsausgleichsleistung erhalten. Sie überbrückt die Zeit bis zur Altersrente.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__239.html",
  },
  "4dee552858": {
    title: "Rente wegen Berufsunfähigkeit (Übergangsrecht)",
    zielgruppen: ["behinderung", "kranke"],
    summary:
      "Versicherte, die vor 1961 geboren sind und ihren bisherigen Beruf nicht mehr ausüben können, haben unter dem alten Recht Anspruch auf Rente wegen teilweiser Erwerbsminderung bei Berufsunfähigkeit. Diese Regelung gilt nur für ältere Jahrgänge.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__240.html",
  },
  "7eb88e0d9d": {
    title: "Erwerbsminderungsrente (Übergangsrecht)",
    zielgruppen: ["behinderung", "kranke"],
    summary:
      "Für Versicherte, die unter dem älteren Recht der Rentenversicherung versichert waren, gelten besondere Voraussetzungen für die Erwerbsminderungsrente. Übergangsvorschriften erleichtern den Rentenzugang für bestimmte Jahrgänge.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__241.html",
  },
  "4ce2bb2f3a": {
    title: "Bergmannsrente (Übergangsrecht)",
    zielgruppen: ["senior"],
    summary:
      "Bergleute, die aufgrund ihrer Tätigkeit im Bergbau gesundheitlich beeinträchtigt sind, können unter Übergangsrecht eine Bergmannsrente erhalten. Diese Regelung gilt für Versicherte, die vor der Reform noch die alten Voraussetzungen erfüllt haben.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__242.html",
  },
  edad085e47: {
    title: "Mindestentgeltpunkte bei geringem Einkommen",
    zielgruppen: ["senior"],
    summary:
      "Versicherte mit langjährig sehr geringem Einkommen erhalten eine Aufstockung ihrer Entgeltpunkte, um eine Mindestrente zu gewährleisten. Diese Regelung soll verhindern, dass Versicherte trotz langer Erwerbsbiografie nur eine sehr geringe Rente erhalten.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__262.html",
  },
  "5a24c0d6af": {
    title: "Monatlicher Zuschuss für Familienangehörige",
    zielgruppen: ["senior"],
    summary:
      "In bestimmten Fallkonstellationen können Familienangehörige von Versicherten eine monatliche finanzielle Leistung aus der Rentenversicherung erhalten. Die Höhe bemisst sich am 2,5-Fachen des Mindestbeitrags.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__295.html",
  },
  "01d404308c": {
    title: "Altersrente in Sonderfällen (Übergangsrecht)",
    zielgruppen: ["behinderung", "kranke", "senior"],
    summary:
      "Für bestimmte Versicherte, die unter älterem Recht Ansprüche erworben haben (Berufsunfähigkeits- oder Erwerbsunfähigkeitsrente), gelten Übergangsregelungen für den Altersrentenbezug. Dies betrifft insbesondere Jahrgänge, die von der Rentenreform 1992 erfasst wurden.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__302.html",
  },
  "521ef8ea05": {
    title: "Invalidenrente (Übergangsrecht)",
    zielgruppen: ["behinderung", "kranke"],
    summary:
      "Versicherte, die bereits vor der Reform von 2000 wegen Erwerbsunfähigkeit oder Berufsunfähigkeit Rente bezogen, behalten diese Ansprüche nach Übergangsrecht. Neue Fälle richten sich nach dem aktuellen Erwerbsminderungsrentenrecht.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__302a.html",
  },
  dbae04aa80: {
    title: "Rente wegen Berufsunfähigkeit (Altfall)",
    zielgruppen: ["behinderung", "kranke"],
    summary:
      "Personen, die bereits vor der Rentenreform 2000 wegen Berufsunfähigkeit Rente bezogen haben, behalten diesen Anspruch auf Basis des alten Rechts. Diese Bestandsrente wird nach Übergangsrecht weitergeführt.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__302b.html",
  },
  "84b7891822": {
    title: "Witwerrente (Übergangsrecht vor 1986)",
    zielgruppen: ["hinterbliebene"],
    summary:
      "Für Witwen und Witwer, deren Ehepartner vor dem 1. Januar 1986 gestorben sind, gilt das alte Witwerrentenrecht. Witwerrenten waren damals nur unter eingeschränkten Voraussetzungen möglich; das Übergangsrecht sichert bestehende Ansprüche.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__303.html",
  },
  "701626539a": {
    title: "Große Witwenrente bei Berufs- oder Erwerbsunfähigkeit",
    zielgruppen: ["behinderung", "kranke", "hinterbliebene"],
    summary:
      "Witwen oder Witwer, die selbst berufsunfähig oder erwerbsunfähig sind, haben nach Übergangsrecht Anspruch auf die große Witwenrente, unabhängig von Altersvoraussetzungen. Diese Regelung sichert besonders schutzbedürftige Hinterbliebene ab.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__303a.html",
  },
  b0b2b529fb: {
    title: "Waisenrente über 25 Jahre (Behinderung)",
    zielgruppen: ["behinderung", "hinterbliebene"],
    summary:
      "Vollwaisen, die aufgrund körperlicher oder geistiger Behinderung außerstande sind, sich selbst zu unterhalten, erhalten die Waisenrente auch über das 25. Lebensjahr hinaus. Voraussetzung ist, dass die Behinderung vor Vollendung des 27. Lebensjahrs eingetreten ist.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__304.html",
  },
  a05ca820ba: {
    title: "Grundrentenzuschlag für Kindererziehung",
    zielgruppen: ["senior"],
    summary:
      "Versicherte, die Kinder erzogen haben und mindestens 25 Jahre mit Grundrentenzeiten vorweisen, erhalten einen Zuschlag an persönlichen Entgeltpunkten. Die Regelung ergänzt die bereits bestehende Anrechnung von Kindererziehungszeiten.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__307d.html",
  },
  ccec31e597: {
    title: "Grundrentenzuschlag (Rentenbeginn 1992–2020)",
    zielgruppen: ["senior"],
    summary:
      "Versicherte, deren Rente zwischen 1992 und 2020 begonnen hat und die mindestens 33 Jahre Grundrentenzeiten haben, erhalten einen Zuschlag an Entgeltpunkten. Er soll langjährig Versicherte mit geringem Einkommen besser absichern.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__307e.html",
  },
  "77f73b5918": {
    title: "Grundrentenzuschlag (Rentenbeginn vor 1992)",
    zielgruppen: ["senior"],
    summary:
      "Für Versicherte, deren Rente vor dem 1. Januar 1992 begonnen hat und die die Voraussetzungen für den Grundrentenzuschlag erfüllen, gilt eine besondere Berechnungsregelung. Damit werden auch ältere Rentnerjahrgänge rückwirkend bessergestellt.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__307f.html",
  },
  e292f11c06: {
    title: "Grundrentenzuschlag bei EM-Rente und Hinterbliebenenrente",
    zielgruppen: ["behinderung", "kranke", "hinterbliebene"],
    summary:
      "Versicherte, die Erwerbsminderungsrente oder Hinterbliebenenrente beziehen und bestimmte Voraussetzungen erfüllen, haben ebenfalls Anspruch auf den Zuschlag an persönlichen Entgeltpunkten (Grundrentenzuschlag).",
    url: "https://www.gesetze-im-internet.de/sgb_6/__307i.html",
  },
  "3879e630df": {
    title: "Rentenzuschlag bei EM-/Hinterbliebenenrente (Juli 2024–Nov 2025)",
    zielgruppen: ["behinderung", "kranke", "hinterbliebene"],
    summary:
      "Für den befristeten Zeitraum Juli 2024 bis November 2025 erhalten Bezieher bestimmter Erwerbsminderungs- und Hinterbliebenenrenten einen zusätzlichen monatlichen Rentenzuschlag. Diese Sonderleistung dient der vorübergehenden Einkommensstärkung.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__307j.html",
  },
  "59f2d0bc18": {
    title: "Rentenzuschlag für Rentenbeginne 1992/1993",
    zielgruppen: ["senior"],
    summary:
      "Versicherte, deren Rente in den Jahren 1992 oder 1993 begann und die nach Anwendung der damaligen Rentenanpassungsvorschriften nur eine sehr geringe Rente erhielten, haben Anspruch auf einen Rentenzuschlag.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__319a.html",
  },
  c0b2c64cb8: {
    title: "Beratung zur Grundsicherung durch die Rentenversicherung",
    zielgruppen: ["behinderung", "kranke"],
    summary:
      "Die gesetzliche Rentenversicherung ist verpflichtet, Versicherte und Rentner über mögliche Ansprüche auf Grundsicherung im Alter und bei Erwerbsminderung zu informieren und bei der Antragstellung zu unterstützen.",
    url: "https://www.gesetze-im-internet.de/sgb_6/__109a.html",
  },

  // SGB VII – Gesetzliche Unfallversicherung
  c590b29798: {
    title: "Heilbehandlung nach Arbeitsunfall (UV)",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Nach einem Arbeitsunfall oder einer Berufskrankheit haben Versicherte Anspruch auf umfassende Heilbehandlung durch die gesetzliche Unfallversicherung. Ziel ist die bestmögliche Wiederherstellung der Gesundheit und Arbeitsfähigkeit.",
    url: "https://www.gesetze-im-internet.de/sgb_7/__27.html",
  },
  a6b751ab7b: {
    title: "Ärztliche und zahnärztliche Behandlung (UV)",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Versicherte der gesetzlichen Unfallversicherung haben nach einem Versicherungsfall Anspruch auf alle zweckmäßigen und erforderlichen ärztlichen und zahnärztlichen Behandlungen. Die Unfallversicherung übernimmt die Kosten vollständig.",
    url: "https://www.gesetze-im-internet.de/sgb_7/__28.html",
  },
  "98559b292f": {
    title: "Arznei- und Verbandmittel (UV)",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Die gesetzliche Unfallversicherung übernimmt die Kosten für Arznei- und Verbandmittel, die nach einem Arbeitsunfall oder einer Berufskrankheit notwendig sind. Es gilt das Wirtschaftlichkeitsgebot.",
    url: "https://www.gesetze-im-internet.de/sgb_7/__29.html",
  },
  "17613a7859": {
    title: "Häusliche Krankenpflege (UV)",
    zielgruppen: ["arbeitnehmer", "pflegebeduerftige"],
    summary:
      "Nach einem Versicherungsfall können Versicherte häusliche Krankenpflege erhalten, wenn diese neben der ärztlichen Behandlung notwendig ist. Die Unfallversicherung trägt die Kosten für die Pflege im häuslichen Umfeld.",
    url: "https://www.gesetze-im-internet.de/sgb_7/__32.html",
  },
  "4eae14348b": {
    title: "Stationäre Behandlung und Rehabilitation (UV)",
    zielgruppen: ["arbeitnehmer", "pflegebeduerftige"],
    summary:
      "Versicherte der gesetzlichen Unfallversicherung haben nach einem Versicherungsfall Anspruch auf Krankenhausbehandlung und stationäre Rehabilitation. Die Unfallversicherung übernimmt alle Kosten einschließlich Unterkunft und Verpflegung.",
    url: "https://www.gesetze-im-internet.de/sgb_7/__33.html",
  },
  "8398747773": {
    title: "Teilhabe am Arbeitsleben (UV)",
    zielgruppen: ["arbeitnehmer", "behinderung"],
    summary:
      "Die gesetzliche Unfallversicherung fördert die berufliche Wiedereingliederung nach einem Versicherungsfall, z.B. durch Umschulung, Qualifizierung oder Unterstützung in Werkstätten für Menschen mit Behinderungen.",
    url: "https://www.gesetze-im-internet.de/sgb_7/__35.html",
  },
  "22060a1c59": {
    title: "Soziale Teilhabe und ergänzende Leistungen (UV)",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Neben der beruflichen Rehabilitation unterstützt die gesetzliche Unfallversicherung auch die soziale Teilhabe, etwa durch ergänzende Leistungen wie Kraftfahrzeughilfe oder sonstige Hilfsmittel, die die gesellschaftliche Teilhabe fördern.",
    url: "https://www.gesetze-im-internet.de/sgb_7/__39.html",
  },
  "25d06f3e19": {
    title: "Kraftfahrzeughilfe (UV)",
    zielgruppen: ["arbeitnehmer", "behinderung"],
    summary:
      "Versicherte, die infolge eines Versicherungsfalls auf ein Kraftfahrzeug angewiesen sind, können Hilfe bei der Beschaffung eines Fahrzeugs sowie Zuschüsse für behinderungsbedingte Zusatzausstattungen erhalten.",
    url: "https://www.gesetze-im-internet.de/sgb_7/__40.html",
  },
  "11ee6f38c3": {
    title: "Wohnungshilfe (UV)",
    zielgruppen: ["arbeitnehmer", "behinderung", "pflegebeduerftige"],
    summary:
      "Die gesetzliche Unfallversicherung kann Hilfe bei der behindertengerechten Anpassung von Wohnraum leisten sowie Umzugskosten übernehmen, wenn der bisherige Wohnraum wegen der Unfallfolgen nicht mehr geeignet ist.",
    url: "https://www.gesetze-im-internet.de/sgb_7/__41.html",
  },
  "1ef9295cc5": {
    title: "Reisekostenerstattung für Unfallversicherte",
    zielgruppen: ["arbeitnehmer", "opfer"],
    summary:
      "Die gesetzliche Unfallversicherung erstattet Reisekosten, die im Zusammenhang mit medizinischer Rehabilitation, Teilhabe am Arbeitsleben oder anderen Leistungen entstehen.",
    url: "https://www.gesetze-im-internet.de/sgb_7/__43.html",
  },
  "4446aef97b": {
    title: "Pflegegeld nach Arbeitsunfall (UV)",
    zielgruppen: ["arbeitnehmer", "pflegebeduerftige"],
    summary:
      "Versicherte, die infolge eines Versicherungsfalls dauerhaft pflegebedürftig werden, haben Anspruch auf Pflegegeld oder die Bereitstellung einer Pflegekraft durch die gesetzliche Unfallversicherung.",
    url: "https://www.gesetze-im-internet.de/sgb_7/__44.html",
  },
  e9274ceb98: {
    title: "Verletztengeld",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Versicherte, die infolge eines Arbeitsunfalls oder einer Berufskrankheit arbeitsunfähig werden, erhalten Verletztengeld als Einkommensersatz. Es beträgt 80 % des Bruttoarbeitsentgelts und wird von der Unfallversicherung gezahlt.",
    url: "https://www.gesetze-im-internet.de/sgb_7/__45.html",
  },
  "87dde7f06b": {
    title: "Verletztengeld bei Wiedererkrankung",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Kommt es nach einem Versicherungsfall erneut zu einer Arbeitsunfähigkeit wegen derselben Unfallfolge, wird Verletztengeld auch für diese Wiedererkrankungsphase gezahlt, sofern die Voraussetzungen erfüllt sind.",
    url: "https://www.gesetze-im-internet.de/sgb_7/__48.html",
  },
  "4abe03ed9f": {
    title: "Übergangsgeld (UV)",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Während einer beruflichen Rehabilitationsmaßnahme nach einem Versicherungsfall zahlt die gesetzliche Unfallversicherung Übergangsgeld als Einkommensersatz. Es überbrückt die Zeit, in der kein Arbeitslohn bezogen wird.",
    url: "https://www.gesetze-im-internet.de/sgb_7/__49.html",
  },
  "47b4344be3": {
    title: "Betriebs- und Haushaltshilfe (UV)",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Landwirtschaftliche Unternehmer und ihre Familienangehörigen können nach einem Versicherungsfall Betriebshilfe oder Haushaltshilfe erhalten, wenn der Betrieb oder Haushalt wegen der Unfallfolgen nicht weitergeführt werden kann.",
    url: "https://www.gesetze-im-internet.de/sgb_7/__54.html",
  },
  "32857b5faa": {
    title: "Rentenerhöhung bei Arbeitslosigkeit (UV)",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Versicherte, die nach einem Arbeitsunfall arbeitslos werden und eine Unfallrente beziehen, können unter bestimmten Voraussetzungen eine Erhöhung ihrer Rente erhalten, um den Einkommensverlust durch Arbeitslosigkeit abzufedern.",
    url: "https://www.gesetze-im-internet.de/sgb_7/__58.html",
  },
  b4a77cfcee: {
    title: "Vorläufige Unfallrente",
    zielgruppen: ["arbeitnehmer", "opfer"],
    summary:
      "Nach einem Versicherungsfall kann die gesetzliche Unfallversicherung eine vorläufige Rente zahlen, solange der Grad der Minderung der Erwerbsfähigkeit noch nicht endgültig festgestellt ist. Nach drei Jahren erfolgt die endgültige Festsetzung.",
    url: "https://www.gesetze-im-internet.de/sgb_7/__62.html",
  },
  ef2021c04a: {
    title: "Leistungen bei Tod (UV)",
    zielgruppen: ["arbeitnehmer", "hinterbliebene"],
    summary:
      "Stirbt ein Versicherter infolge eines Arbeitsunfalls oder einer Berufskrankheit, haben Hinterbliebene Anspruch auf Sterbegeld, Überführungskosten sowie Hinterbliebenenrenten.",
    url: "https://www.gesetze-im-internet.de/sgb_7/__63.html",
  },
  "6fa26168a1": {
    title: "Sterbegeld und Überführungskosten (UV)",
    zielgruppen: ["arbeitnehmer"],
    summary:
      "Nach dem Tod eines Versicherten infolge eines Versicherungsfalls werden Sterbegeld sowie die Kosten für die Überführung des Verstorbenen von der gesetzlichen Unfallversicherung übernommen.",
    url: "https://www.gesetze-im-internet.de/sgb_7/__64.html",
  },
  "4d7f9ab5a6": {
    title: "Witwen-/Witwerrente (UV)",
    zielgruppen: ["arbeitnehmer", "hinterbliebene"],
    summary:
      "Nach dem Tod eines Versicherten infolge eines Versicherungsfalls erhalten Witwen und Witwer eine Hinterbliebenenrente aus der gesetzlichen Unfallversicherung. Die Rentenhöhe richtet sich nach dem Jahresarbeitsverdienst des Verstorbenen.",
    url: "https://www.gesetze-im-internet.de/sgb_7/__65.html",
  },
  de89b15458: {
    title: "Witwen-/Witwerrente für frühere Ehegatten (UV)",
    zielgruppen: ["arbeitnehmer", "hinterbliebene"],
    summary:
      "Frühere Ehegatten von Versicherten können nach deren Tod infolge eines Versicherungsfalls ebenfalls eine Rente erhalten, wenn der Verstorbene ihnen gegenüber unterhaltspflichtig war.",
    url: "https://www.gesetze-im-internet.de/sgb_7/__66.html",
  },
  bec056a43e: {
    title: "Witwen-, Witwer- und Waisenbeihilfe (UV)",
    zielgruppen: ["arbeitnehmer", "hinterbliebene"],
    summary:
      "Wenn kein Anspruch auf laufende Witwen-, Witwer- oder Waisenrente besteht, können Hinterbliebene eine einmalige Beihilfe in Höhe von 40 % des Jahresarbeitsverdienstes des Verstorbenen erhalten.",
    url: "https://www.gesetze-im-internet.de/sgb_7/__71.html",
  },
  c52cf76d1c: {
    title: "Abfindung der Unfallrente",
    zielgruppen: ["arbeitnehmer", "opfer"],
    summary:
      "Unter bestimmten Voraussetzungen kann eine laufende Unfallrente durch eine einmalige Gesamtvergütung (Kapitalabfindung) abgelöst werden. Dies ist möglich, wenn die Minderung der Erwerbsfähigkeit gering ist und eine Abfindung sinnvoll erscheint.",
    url: "https://www.gesetze-im-internet.de/sgb_7/__75.html",
  },

  // SGB VIII – Kinder- und Jugendhilfe
  "3e076cda76": {
    title: "Allgemeine Förderung der Erziehung in der Familie",
    zielgruppen: ["jugendliche", "eltern"],
    summary:
      "Jugendämter und anerkannte Träger bieten Leistungen an, die Familien bei der Erziehung ihrer Kinder unterstützen. Dazu gehören Angebote der Familienbildung, Beratung, Gruppenangebote und Familienfreizeit.",
    url: "https://www.gesetze-im-internet.de/sgb_8/__16.html",
  },
  f9cbce0062: {
    title: "Beratung bei Partnerschaft, Trennung und Scheidung",
    zielgruppen: ["jugendliche", "eltern"],
    summary:
      "Mütter und Väter haben Anspruch auf Beratung in Fragen der Partnerschaft sowie bei Trennung und Scheidung. Ziel ist es, Konflikte einvernehmlich zu lösen und das Kindeswohl auch nach der Trennung zu sichern.",
    url: "https://www.gesetze-im-internet.de/sgb_8/__17.html",
  },
  bd5ee581a0: {
    title: "Beratung bei Personensorge und Umgangsrecht",
    zielgruppen: ["jugendliche", "eltern", "alleinerziehende"],
    summary:
      "Alleinerziehende und getrennt lebende Eltern haben Anspruch auf Beratung und Unterstützung bei der Ausübung der Personensorge und des Umgangsrechts. Das Jugendamt hilft dabei, Regelungen im Sinne des Kindeswohls zu finden.",
    url: "https://www.gesetze-im-internet.de/sgb_8/__18.html",
  },
  "5cc6ee0193": {
    title: "Mutter-/Vater-Kind-Wohnform",
    zielgruppen: ["schwangere", "jugendliche", "eltern"],
    summary:
      "Schwangere und Eltern, die allein für ihr Kind sorgen und Hilfe bei der Versorgung und Erziehung benötigen, können in einer betreuten Wohnform untergebracht werden. Die Jugendhilfe stellt Unterkunft und sozialpädagogische Begleitung bereit.",
    url: "https://www.gesetze-im-internet.de/sgb_8/__19.html",
  },
  d799b4b564: {
    title: "Kinderbetreuung in Notsituationen",
    zielgruppen: ["jugendliche", "eltern"],
    summary:
      "Wenn ein Elternteil wegen Krankheit oder aus anderen Gründen ausfällt, haben Eltern Anspruch auf Unterstützung bei der Betreuung und Versorgung ihrer Kinder. Das Jugendamt vermittelt geeignete Hilfen.",
    url: "https://www.gesetze-im-internet.de/sgb_8/__20.html",
  },
  "9c308b9a94": {
    title: "Unterbringung zur Erfüllung der Schulpflicht",
    zielgruppen: ["jugendliche", "eltern"],
    summary:
      "Wenn Eltern berufsbedingt häufig den Wohnort wechseln und ihr Kind deshalb die Schule nicht regelmäßig besuchen kann, hat das Kind Anspruch auf Unterstützung bei einer geeigneten Unterbringung zur Erfüllung der Schulpflicht.",
    url: "https://www.gesetze-im-internet.de/sgb_8/__21.html",
  },
  f81b002aa1: {
    title: "Anspruch auf Kita-Förderung und Kindertagespflege",
    zielgruppen: ["kleinkinder", "jugendliche", "eltern"],
    summary:
      "Kinder haben ab dem vollendeten ersten Lebensjahr einen Rechtsanspruch auf Förderung in einer Kindertageseinrichtung oder in der Kindertagespflege. Für Kinder unter einem Jahr besteht bei besonderem Bedarf ebenfalls ein Anspruch.",
    url: "https://www.gesetze-im-internet.de/sgb_8/__24.html",
  },
  eab33b5c73: {
    title: "Hilfe zur Erziehung",
    zielgruppen: ["jugendliche", "eltern"],
    summary:
      "Eltern haben Anspruch auf Hilfe zur Erziehung, wenn eine dem Wohl des Kindes entsprechende Erziehung nicht gewährleistet ist und die Hilfe für die Entwicklung des Kindes geeignet und notwendig ist. Art und Umfang richten sich nach dem individuellen Bedarf.",
    url: "https://www.gesetze-im-internet.de/sgb_8/__27.html",
  },
  "44ac96f6bb": {
    title: "Erziehungsberatung",
    zielgruppen: ["jugendliche", "eltern"],
    summary:
      "Kinder, Jugendliche und Eltern haben Anspruch auf Erziehungsberatung durch anerkannte Beratungsstellen. Diese helfen bei der Klärung und Bewältigung von Erziehungs- und Entwicklungsproblemen sowie familiären Konflikten.",
    url: "https://www.gesetze-im-internet.de/sgb_8/__28.html",
  },
  "8fa25aa202": {
    title: "Erziehungsbeistand und Betreuungshelfer",
    zielgruppen: ["jugendliche", "eltern"],
    summary:
      "Kinder und Jugendliche können einen Erziehungsbeistand oder Betreuungshelfer erhalten, der sie beim Aufbau sozialer Kompetenzen, der Bewältigung von Alltagsproblemen und der Stabilisierung ihres Umfelds unterstützt.",
    url: "https://www.gesetze-im-internet.de/sgb_8/__30.html",
  },
  d0a17f7849: {
    title: "Sozialpädagogische Familienhilfe",
    zielgruppen: ["jugendliche", "eltern"],
    summary:
      "Familien mit erheblichem Erziehungs- und Betreuungsbedarf können sozialpädagogische Familienhilfe erhalten. Eine Fachkraft begleitet die Familie im Alltag, stärkt die Erziehungsfähigkeit und hilft bei der Bewältigung von Problemen.",
    url: "https://www.gesetze-im-internet.de/sgb_8/__31.html",
  },
  b7961d7434: {
    title: "Erziehung in der Tagesgruppe",
    zielgruppen: ["jugendliche", "eltern"],
    summary:
      "Kinder können eine Tagesgruppe besuchen, in der Entwicklung, schulische Förderung und soziales Lernen im Mittelpunkt stehen. Die Eltern werden dabei einbezogen und begleitet, um die Erziehungsfähigkeit in der Familie zu stärken.",
    url: "https://www.gesetze-im-internet.de/sgb_8/__32.html",
  },
  ca2dcf2792: {
    title: "Vollzeitpflege (Pflegefamilie)",
    zielgruppen: ["jugendliche", "eltern"],
    summary:
      "Kinder und Jugendliche, die nicht in ihrer Herkunftsfamilie leben können, werden in einer Pflegefamilie untergebracht. Diese soll dem Kind eine altersgerechte Förderung und eine stabile Beziehung ermöglichen.",
    url: "https://www.gesetze-im-internet.de/sgb_8/__33.html",
  },
  "49fcd0068c": {
    title: "Heimerziehung und betreutes Wohnen",
    zielgruppen: ["jugendliche", "eltern"],
    summary:
      "Kinder und Jugendliche, die einer Unterbringung außerhalb der Familie bedürfen, können in einem Heim oder einer anderen betreuten Wohnform untergebracht werden. Ziel ist die Förderung der Entwicklung und die Vorbereitung auf ein eigenständiges Leben.",
    url: "https://www.gesetze-im-internet.de/sgb_8/__34.html",
  },
  "875c6cd9bf": {
    title: "Intensive sozialpädagogische Einzelbetreuung",
    zielgruppen: ["jugendliche", "eltern"],
    summary:
      "Jugendliche, die einer intensiven individuellen Betreuung bedürfen, haben Anspruch auf intensive sozialpädagogische Einzelbetreuung. Diese Hilfe richtet sich an besonders gefährdete Jugendliche und zielt auf ihre soziale Integration.",
    url: "https://www.gesetze-im-internet.de/sgb_8/__35.html",
  },
  "305b4a6160": {
    title: "Unterhalt bei Hilfe zur Erziehung außerhalb der Familie",
    zielgruppen: ["jugendliche", "eltern"],
    summary:
      "Kinder und Jugendliche, die außerhalb der eigenen Familie in Pflege oder Heimerziehung untergebracht sind, haben Anspruch auf Übernahme der Kosten für Sachaufwand, Pflege und Erziehung durch den Jugendhilfeträger.",
    url: "https://www.gesetze-im-internet.de/sgb_8/__39.html",
  },
  "5043bf74ad": {
    title: "Beratung bei Vaterschaftsfeststellung und Unterhalt",
    zielgruppen: ["jugendliche", "eltern"],
    summary:
      "Das Jugendamt berät und unterstützt Mütter unverzüglich nach der Geburt eines nichtehelichen Kindes bei der Vaterschaftsfeststellung sowie bei der Geltendmachung von Unterhaltsansprüchen für das Kind.",
    url: "https://www.gesetze-im-internet.de/sgb_8/__52a.html",
  },
  c68e569257: {
    title: "Beratung und Unterstützung von Vormündern und Pflegern",
    zielgruppen: ["jugendliche", "eltern"],
    summary:
      "Ehrenamtliche Vormünder und Pfleger haben Anspruch auf regelmäßige und bedarfsgerechte Beratung und Unterstützung durch das Jugendamt. Dies soll die Qualität der Vormundschaft und die Förderung des Mündels sicherstellen.",
    url: "https://www.gesetze-im-internet.de/sgb_8/__53a.html",
  },
  "86269108e6": {
    title: "Eingliederungshilfe für Kinder mit seelischer Behinderung",
    zielgruppen: ["jugendliche", "eltern", "behinderung"],
    summary:
      "Kinder und Jugendliche mit einer (drohenden) seelischen Behinderung haben Anspruch auf Eingliederungshilfe nach SGB VIII. Diese umfasst therapeutische, pädagogische und soziale Maßnahmen zur Förderung der gesellschaftlichen Teilhabe.",
    url: "https://www.gesetze-im-internet.de/sgb_8/__35a.html",
  },
  dec4917e56: {
    title: "Beratung der Eltern bei Fremdunterbringung",
    zielgruppen: ["jugendliche", "eltern"],
    summary:
      "Eltern, deren Kinder außerhalb der Familie untergebracht sind, haben Anspruch auf Beratung und Unterstützung, um die Entwicklung des Kindes zu fördern und eine Rückkehr in die Familie vorzubereiten.",
    url: "https://www.gesetze-im-internet.de/sgb_8/__37.html",
  },
  "79d7a58b28": {
    title: "Beratung und Unterstützung von Pflegepersonen",
    zielgruppen: ["jugendliche", "eltern", "pflegende-angehoerige"],
    summary:
      "Pflegepersonen haben vor und nach der Aufnahme eines Pflegekindes Anspruch auf Beratung, Unterstützung und Qualifizierung durch das Jugendamt. Dies soll eine gelingende Pflegebeziehung und das Wohl des Kindes sichern.",
    url: "https://www.gesetze-im-internet.de/sgb_8/__37a.html",
  },
  "48d13ab120": {
    title: "Krankenhilfe für Kinder und Jugendliche (Jugendhilfe)",
    zielgruppen: ["jugendliche", "eltern"],
    summary:
      "Für Kinder und Jugendliche, die Leistungen der Jugendhilfe erhalten, übernimmt der Jugendhilfeträger Zuzahlungen, Eigenbeteiligungen und ggf. Krankenkassenbeiträge, die anderweitig nicht gedeckt sind.",
    url: "https://www.gesetze-im-internet.de/sgb_8/__40.html",
  },
  "3999d3d5f3": {
    title: "Hilfe für junge Volljährige",
    zielgruppen: ["jugendliche", "eltern"],
    summary:
      "Junge Erwachsene zwischen 18 und 27 Jahren, die aufgrund ihrer Persönlichkeitsentwicklung Unterstützung benötigen, können geeignete und notwendige Hilfe erhalten. Ziel ist die Verselbständigung und gesellschaftliche Teilhabe.",
    url: "https://www.gesetze-im-internet.de/sgb_8/__41.html",
  },
  "2952f80473": {
    title: "Nachbetreuung nach Jugendhilfemaßnahmen",
    zielgruppen: ["jugendliche", "eltern"],
    summary:
      "Junge Volljährige, die Jugendhilfemaßnahmen abgeschlossen haben, können Nachbetreuung und Beratung beim Übergang in ein eigenständiges Leben erhalten. Das Jugendamt unterstützt bei der Verselbständigung auch nach Ende der formalen Hilfe.",
    url: "https://www.gesetze-im-internet.de/sgb_8/__41a.html",
  },

  // SGB XI – Soziale Pflegeversicherung
  "91977c5c26": {
    title: "Leistungen bei Pflegegrad 1",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "Pflegebedürftige des Pflegegraids 1 haben Anspruch auf Pflegeberatung, Beratung in der eigenen Häuslichkeit und Leistungen zur Unterstützung im Alltag sowie den Entlastungsbetrag. Für sie gelten eingeschränkte Leistungsansprüche im Vergleich zu den Pflegegraden 2–5.",
    url: "https://www.gesetze-im-internet.de/sgb_11/__28a.html",
  },
  "788f91ff41": {
    title: "Pflegesachleistung (ambulante Pflege)",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "Pflegebedürftige der Pflegegrade 2–5 haben Anspruch auf ambulante Pflegesachleistungen durch zugelassene Pflegedienste. Diese umfassen körperbezogene Pflegemaßnahmen, pflegerische Betreuung und Hilfen bei der Haushaltsführung.",
    url: "https://www.gesetze-im-internet.de/sgb_11/__36.html",
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
  "9ae323919d": {
    title: "Pflegegeld für häusliche Pflege",
    zielgruppen: ["pflegebeduerftige", "pflegende-angehoerige"],
    summary:
      "Pflegebedürftige der Pflegegrade 2–5, die zu Hause gepflegt werden, erhalten monatliches Pflegegeld, das sie frei einsetzen können. Das Pflegegeld steigt mit dem Pflegegrad und soll die Pflegeperson(en) anerkennen.",
    url: "https://www.gesetze-im-internet.de/sgb_11/__37.html",
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
  "42aee3eec2": {
    title: "Kombileistung: Pflegegeld und Pflegesachleistung",
    zielgruppen: ["pflegende-angehoerige", "pflegebeduerftige"],
    summary:
      "Werden Sachleistungen nicht vollständig in Anspruch genommen, kann der verbleibende Anteil anteilig als Pflegegeld ausgezahlt werden. Diese Kombinationsleistung ermöglicht flexible Pflege durch professionelle Dienste und Angehörige.",
    url: "https://www.gesetze-im-internet.de/sgb_11/__38.html",
  },
  "3127dd762f": {
    title: "Wohngruppen-Zuschlag (ambulant betreut)",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "Pflegebedürftige in ambulant betreuten Wohngruppen erhalten einen monatlichen Zuschlag, wenn sie gemeinsam mit anderen Pflegebedürftigen in einer Wohngemeinschaft leben und eine gemeinsame Pflegekraft organisieren.",
    url: "https://www.gesetze-im-internet.de/sgb_11/__38a.html",
  },
  d8b7012faf: {
    title: "Verhinderungspflege",
    zielgruppen: ["pflegende-angehoerige", "pflegebeduerftige"],
    summary:
      "Wenn die regelmäßige Pflegeperson durch Urlaub, Krankheit oder andere Gründe ausfällt, übernimmt die Pflegekasse die Kosten einer Ersatzpflege (Verhinderungspflege) für bis zu sechs Wochen pro Kalenderjahr.",
    url: "https://www.gesetze-im-internet.de/sgb_11/__39.html",
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
  e35131be24: {
    title: "Unterstützung bei digitalen Pflegeanwendungen",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "Pflegebedürftige, die digitale Pflegeanwendungen (DiPA) nutzen, haben Anspruch auf ergänzende Unterstützungsleistungen, damit sie die Anwendungen effektiv einsetzen können.",
    url: "https://www.gesetze-im-internet.de/sgb_11/__39a.html",
  },
  "36dbe50a38": {
    title: "Pflegehilfsmittel und Wohnumfeldverbesserung",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "Pflegebedürftige haben Anspruch auf Pflegehilfsmittel (z.B. Pflegebetten, Rollstühle) sowie auf Zuschüsse für wohnumfeldverbessernde Maßnahmen (z.B. barrierefreier Umbau), um häusliche Pflege zu erleichtern.",
    url: "https://www.gesetze-im-internet.de/sgb_11/__40.html",
  },
  "81eaefd731": {
    title: "Digitale Pflegeanwendungen (DiPA)",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "Pflegebedürftige haben Anspruch auf Versorgung mit digitalen Pflegeanwendungen, die vom Bundesinstitut für Arzneimittel und Medizinprodukte (BfArM) zugelassen sind und die Selbstständigkeit und Alltagsbewältigung unterstützen.",
    url: "https://www.gesetze-im-internet.de/sgb_11/__40a.html",
  },
  "2c230605a2": {
    title: "Finanzielle Förderung digitaler Pflegeanwendungen",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "Die Pflegekasse übernimmt die Kosten für zugelassene digitale Pflegeanwendungen (DiPA), soweit diese nicht von anderen Kostenträgern gedeckt werden. Der monatliche Höchstbetrag ist gesetzlich festgelegt.",
    url: "https://www.gesetze-im-internet.de/sgb_11/__40b.html",
  },
  "6a426dad9b": {
    title: "Tages- und Nachtpflege",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "Pflegebedürftige, die tagsüber oder nachts nicht zu Hause versorgt werden können, haben Anspruch auf teilstationäre Pflege in einer Tagespflege- oder Nachtpflegeeinrichtung. Die Pflegekasse übernimmt pflegebedingte Aufwendungen und Beförderungskosten.",
    url: "https://www.gesetze-im-internet.de/sgb_11/__41.html",
  },
  "876a6a3b65": {
    title: "Kurzzeitpflege (Pflegeversicherung)",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "Wenn häusliche Pflege vorübergehend nicht möglich ist, haben Pflegebedürftige der Pflegegrade 2–5 Anspruch auf Kurzzeitpflege in einer stationären Einrichtung für bis zu acht Wochen pro Jahr.",
    url: "https://www.gesetze-im-internet.de/sgb_11/__42.html",
  },
  b718130221: {
    title: "Vollstationäre Pflege",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "Pflegebedürftige, die dauerhaft in einem Pflegeheim untergebracht sind, erhalten von der Pflegekasse einen pauschalen Zuschuss zu den pflegebedingten Aufwendungen. Die Höhe richtet sich nach dem Pflegegrad.",
    url: "https://www.gesetze-im-internet.de/sgb_11/__43.html",
  },
  "1c319d306e": {
    title: "Betreuung in stationären Einrichtungen (Pflegeversicherung)",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "In vollstationären Pflegeeinrichtungen haben Pflegebedürftige Anspruch auf zusätzliche Betreuungs- und Aktivierungsangebote, die über die reine pflegerische Versorgung hinausgehen und die Lebensqualität fördern.",
    url: "https://www.gesetze-im-internet.de/sgb_11/__43b.html",
  },
  "841dbc95ae": {
    title: "Deckelung des Eigenanteils stationäre Pflege",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "Bei langfristiger vollstationärer Pflege wird der einrichtungseinheitliche Eigenanteil an den pflegebedingten Aufwendungen gedeckelt. Je länger die Heimunterbringung dauert, desto mehr übernimmt die Pflegekasse zuschussmäßig.",
    url: "https://www.gesetze-im-internet.de/sgb_11/__43c.html",
  },
  "9f250d6598": {
    title:
      "Zuschüsse zur Kranken- und Pflegeversicherung für pflegende Angehörige",
    zielgruppen: ["pflegende-angehoerige"],
    summary:
      "Berufstätige, die für die Pflege eines Angehörigen Pflegezeit oder kurzzeitige Arbeitsverhinderung in Anspruch nehmen, erhalten Zuschüsse zur Kranken- und Pflegeversicherung, um ihre soziale Absicherung aufrechtzuerhalten.",
    url: "https://www.gesetze-im-internet.de/sgb_11/__44a.html",
  },
  a127687e41: {
    title: "Alltagsunterstützende Angebote (Pflegeversicherung)",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "Pflegebedürftige können anerkannte Angebote zur Unterstützung im Alltag nutzen, etwa Betreuungsgruppen, haushaltsnahe Dienstleistungen oder Unterstützung bei Behördengängen. Ein Teil des Sachleistungsbudgets kann dafür umgewandelt werden.",
    url: "https://www.gesetze-im-internet.de/sgb_11/__45a.html",
  },
  "4bb46f8e38": {
    title: "Entlastungsbetrag (Pflegeversicherung)",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "Alle Pflegebedürftigen ab Pflegegrad 1 erhalten monatlich einen Entlastungsbetrag von bis zu 125 Euro, der für anerkannte Alltagsunterstützungsangebote eingesetzt werden kann. Er ergänzt die übrigen Pflegeleistungen.",
    url: "https://www.gesetze-im-internet.de/sgb_11/__45b.html",
  },

  // SGB XII – Sozialhilfe
  "17388b3453": {
    title: "Einmalige Bedarfe (Sozialhilfe)",
    zielgruppen: ["schwangere", "senior"],
    summary:
      "Sozialhilfeempfänger können Leistungen für einmalige Bedarfe erhalten, etwa Erstausstattung für die Wohnung, Bekleidungserstausstattung bei Schwangerschaft sowie mehrtägige Klassenfahrten für Kinder.",
    url: "https://www.gesetze-im-internet.de/sgb_12/__31.html",
  },
  "86b8ffcb0a": {
    title: "Kranken- und Pflegeversicherungsbeiträge (Sozialhilfe)",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "Sozialhilfeempfänger erhalten Leistungen zur Deckung ihrer Beiträge zur Kranken- und Pflegeversicherung, sofern diese nicht anderweitig übernommen werden. So bleibt der Krankenversicherungsschutz auch bei Sozialhilfebezug erhalten.",
    url: "https://www.gesetze-im-internet.de/sgb_12/__32.html",
  },
  f9548759bd: {
    title: "Bildungs- und Teilhabeleistungen (Sozialhilfe)",
    zielgruppen: ["senior"],
    summary:
      "Kinder und Jugendliche, deren Eltern Sozialhilfe beziehen, haben Anspruch auf Leistungen für Bildung und gesellschaftliche Teilhabe, z.B. Schulbedarf, Mittagessen, Lernförderung, Schülerbeförderung und außerschulische Aktivitäten.",
    url: "https://www.gesetze-im-internet.de/sgb_12/__34.html",
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
  "843ae6eb8f": {
    title: "Kosten der Unterkunft und Heizung (Sozialhilfe)",
    zielgruppen: ["senior"],
    summary:
      "Sozialhilfeempfänger haben Anspruch auf Übernahme der tatsächlichen angemessenen Kosten für Unterkunft und Heizung. Was als angemessen gilt, richtet sich nach den örtlichen Gegebenheiten.",
    url: "https://www.gesetze-im-internet.de/sgb_12/__35.html",
  },
  c941c91ffb: {
    title: "Schuldenübernahme zur Sicherung der Unterkunft (Sozialhilfe)",
    zielgruppen: ["senior"],
    summary:
      "Um Obdachlosigkeit zu vermeiden, können Mietschulden oder vergleichbare Schulden als Darlehen oder Beihilfe übernommen werden, wenn dadurch die Unterkunft gesichert werden kann.",
    url: "https://www.gesetze-im-internet.de/sgb_12/__36.html",
  },
  "8ac28af964": {
    title: "Ergänzendes Darlehen (Sozialhilfe)",
    zielgruppen: ["senior"],
    summary:
      "Wenn Sozialhilfeempfänger unabweisbare Bedarfe nicht aus dem Regelsatz decken können, können sie ein zinsloses Darlehen erhalten. Das Darlehen wird durch Aufrechnung mit künftigen Leistungen zurückgezahlt.",
    url: "https://www.gesetze-im-internet.de/sgb_12/__37.html",
  },
  c391587ba0: {
    title: "Darlehen bei nachschüssigem Einkommen (Sozialhilfe)",
    zielgruppen: ["senior"],
    summary:
      "Wenn das Einkommen erst am Monatsende fließt (z.B. Rente), kann zu Beginn des Monats ein Darlehen zur Deckung des Lebensunterhalts gewährt werden. Das Darlehen wird mit dem Eingang des Einkommens verrechnet.",
    url: "https://www.gesetze-im-internet.de/sgb_12/__37a.html",
  },
  b1d9b9a251: {
    title: "Vorbeugende Gesundheitshilfe (Sozialhilfe)",
    zielgruppen: ["senior"],
    summary:
      "Sozialhilfeempfänger haben Anspruch auf vorbeugende Gesundheitshilfe, einschließlich medizinischer Vorsorgeuntersuchungen und Maßnahmen zur Früherkennung von Krankheiten, auch wenn kein akuter Behandlungsbedarf besteht.",
    url: "https://www.gesetze-im-internet.de/sgb_12/__47.html",
  },
  "3af19186c9": {
    title: "Hilfe bei Krankheit (Sozialhilfe)",
    zielgruppen: ["senior"],
    summary:
      "Sozialhilfeempfänger, die nicht oder nur teilweise gesetzlich krankenversichert sind, erhalten Hilfe bei Krankheit. Diese umfasst Krankenbehandlung, Arzneimittel und weitere medizinisch notwendige Leistungen.",
    url: "https://www.gesetze-im-internet.de/sgb_12/__48.html",
  },
  "9ac3beb44e": {
    title: "Hilfe zur Familienplanung (Sozialhilfe)",
    zielgruppen: ["senior"],
    summary:
      "Sozialhilfeempfänger haben Anspruch auf ärztliche Beratung, Untersuchung und Verordnung von Verhütungsmitteln zur Familienplanung. Die Kosten werden vom Sozialhilfeträger übernommen.",
    url: "https://www.gesetze-im-internet.de/sgb_12/__49.html",
  },
  "1ca042ae13": {
    title: "Hilfe bei Schwangerschaft und Mutterschaft (Sozialhilfe)",
    zielgruppen: [
      "schwangere",
      "pflegende-angehoerige",
      "arbeitnehmer",
      "pflegebeduerftige",
    ],
    summary:
      "Schwangere und Wöchnerinnen, die Sozialhilfe beziehen, erhalten Hilfe bei Schwangerschaft und Mutterschaft. Dies umfasst ärztliche Betreuung, Hebammenhilfe, Arznei- und Hilfsmittel sowie Entbindungskosten.",
    url: "https://www.gesetze-im-internet.de/sgb_12/__50.html",
  },
  e3e9a19874: {
    title: "Hilfe bei Sterilisation (Sozialhilfe)",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "Sozialhilfeempfänger haben Anspruch auf Übernahme der Kosten für eine medizinisch notwendige Sterilisation, einschließlich ärztlicher Untersuchung, Beratung und Begutachtung.",
    url: "https://www.gesetze-im-internet.de/sgb_12/__51.html",
  },
  c27373c6a4: {
    title: "Pflegegeld (Sozialhilfe)",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "Pflegebedürftige Sozialhilfeempfänger, die zu Hause gepflegt werden, können Pflegegeld aus der Sozialhilfe erhalten, wenn sie keinen Anspruch auf Leistungen der Pflegeversicherung haben oder diese nicht ausreichen.",
    url: "https://www.gesetze-im-internet.de/sgb_12/__64a.html",
  },
  "96479f7af0": {
    title: "Häusliche Pflegehilfe (Sozialhilfe)",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "Pflegebedürftige Sozialhilfeempfänger haben Anspruch auf häusliche Pflegehilfe durch zugelassene Pflegedienste. Der Sozialhilfeträger übernimmt die Kosten, soweit die Pflegeversicherung nicht ausreicht.",
    url: "https://www.gesetze-im-internet.de/sgb_12/__64b.html",
  },
  "74248ed30c": {
    title: "Pflegehilfsmittel (Sozialhilfe)",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "Pflegebedürftige Sozialhilfeempfänger haben Anspruch auf Pflegehilfsmittel, die zur häuslichen Pflege notwendig sind. Der Sozialhilfeträger übernimmt die Kosten ergänzend zur Pflegeversicherung.",
    url: "https://www.gesetze-im-internet.de/sgb_12/__64d.html",
  },
  "95120b614e": {
    title: "Wohnumfeldverbesserung (Sozialhilfe)",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "Sozialhilfeempfänger können Zuschüsse für Maßnahmen erhalten, die das Wohnumfeld barrierefrei gestalten und so häusliche Pflege ermöglichen oder erleichtern.",
    url: "https://www.gesetze-im-internet.de/sgb_12/__64e.html",
  },
  "47a68a4ae4": {
    title: "Ergänzende Pflegeleistungen (Sozialhilfe)",
    zielgruppen: ["pflegende-angehoerige", "pflegebeduerftige"],
    summary:
      "Ergänzend zu den regulären Pflegeleistungen können Sozialhilfeempfänger Erstattung von Beiträgen zur Alterssicherung der Pflegeperson sowie weitere zusätzliche Leistungen erhalten, soweit sie notwendig sind.",
    url: "https://www.gesetze-im-internet.de/sgb_12/__64f.html",
  },
  a24fd266d0: {
    title: "Teilstationäre Pflege (Sozialhilfe)",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "Pflegebedürftige Sozialhilfeempfänger haben Anspruch auf Tages- oder Nachtpflege in einer teilstationären Einrichtung, wenn häusliche Pflege nicht in vollem Umfang sichergestellt werden kann.",
    url: "https://www.gesetze-im-internet.de/sgb_12/__64g.html",
  },
  "25f2d59959": {
    title: "Kurzzeitpflege (Sozialhilfe)",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "Pflegebedürftige Sozialhilfeempfänger haben Anspruch auf Kurzzeitpflege in einer stationären Einrichtung, wenn häusliche Pflege vorübergehend nicht möglich ist.",
    url: "https://www.gesetze-im-internet.de/sgb_12/__64h.html",
  },
  aa429710be: {
    title: "Entlastungsbetrag für Pflegebedürftige (Sozialhilfe)",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "Pflegebedürftige Sozialhilfeempfänger erhalten einen monatlichen Entlastungsbetrag für anerkannte Alltags­unterstützungsangebote – 125 Euro ab Pflegegrad 2, sowie ergänzende Leistungen für Pflegegrad 1.",
    url: "https://www.gesetze-im-internet.de/sgb_12/__64i.html",
  },
  "6849c2e2e0": {
    title: "Digitale Pflegeanwendungen (Sozialhilfe)",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "Pflegebedürftige Sozialhilfeempfänger haben Anspruch auf Versorgung mit zugelassenen digitalen Pflegeanwendungen (DiPA), die die Selbstständigkeit fördern und den Pflegealltag erleichtern.",
    url: "https://www.gesetze-im-internet.de/sgb_12/__64j.html",
  },
  "894eb59393": {
    title: "Unterstützung bei digitalen Pflegeanwendungen (Sozialhilfe)",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "Pflegebedürftige Sozialhilfeempfänger können ergänzende Unterstützungsleistungen erhalten, damit sie zugelassene digitale Pflegeanwendungen nutzen können.",
    url: "https://www.gesetze-im-internet.de/sgb_12/__64k.html",
  },
  "5482c48e65": {
    title: "Vollstationäre Pflege (Sozialhilfe)",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "Pflegebedürftige Sozialhilfeempfänger, die dauerhaft in einem Pflegeheim untergebracht sind, erhalten Hilfe zur Pflege durch den Sozialhilfeträger, soweit die Pflegeversicherung und eigenes Einkommen nicht ausreichen.",
    url: "https://www.gesetze-im-internet.de/sgb_12/__65.html",
  },
  "00182b4608": {
    title: "Hilfe zur Weiterführung des Haushalts (Sozialhilfe)",
    zielgruppen: ["behinderung"],
    summary:
      "Sozialhilfeempfänger, die ihren Haushalt wegen Krankheit oder Behinderung vorübergehend nicht führen können, haben Anspruch auf Hilfe zur Weiterführung des Haushalts, z.B. durch eine Haushaltshilfe.",
    url: "https://www.gesetze-im-internet.de/sgb_12/__70.html",
  },
  ccab2fcee7: {
    title: "Altenhilfe",
    zielgruppen: ["pflegebeduerftige"],
    summary:
      "Ältere Menschen haben Anspruch auf Altenhilfe, die ihnen ermöglicht, am gesellschaftlichen Leben teilzunehmen und Schwierigkeiten des Alters zu überwinden. Leistungen umfassen Beratung, Beschäftigungsangebote und Hilfe bei der Wohnungsbeschaffung.",
    url: "https://www.gesetze-im-internet.de/sgb_12/__71.html",
  },
  "2f1d6604ac": {
    title: "Blindenhilfe",
    zielgruppen: ["behinderung"],
    summary:
      "Blinde Menschen erhalten monatliche Blindenhilfe zum Ausgleich der durch die Blindheit bedingten Mehraufwendungen, sofern sie keinen entsprechenden Anspruch aus anderen Leistungsgesetzen haben.",
    url: "https://www.gesetze-im-internet.de/sgb_12/__72.html",
  },
  "2994f8d7cb": {
    title: "Hilfe in sonstigen Lebenslagen (Sozialhilfe)",
    zielgruppen: ["senior"],
    summary:
      "Als Auffangregelung können Sozialhilfeleistungen auch in sonstigen besonderen Lebenslagen erbracht werden, wenn dies gerechtfertigt ist und andere Leistungsgesetze nicht greifen.",
    url: "https://www.gesetze-im-internet.de/sgb_12/__73.html",
  },
  "88d7dc10db": {
    title: "Übernahme von Bestattungskosten (Sozialhilfe)",
    zielgruppen: ["senior"],
    summary:
      "Wenn Angehörige nicht in der Lage sind, die Kosten einer Bestattung zu tragen, übernimmt der Sozialhilfeträger die notwendigen Bestattungskosten.",
    url: "https://www.gesetze-im-internet.de/sgb_12/__74.html",
  },

  // SGB XIV – Soziale Entschädigung
  c0dfd6c4e9: {
    title: "Traumaambulanz: psychotherapeutische Intervention",
    zielgruppen: ["opfer"],
    summary:
      "Opfer von Gewalttaten und anderen schädigenden Ereignissen können in einer Traumaambulanz psychotherapeutische Sofortinterventionen erhalten, um die Entstehung psychischer Erkrankungen zu verhindern.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__31.html",
  },
  "05eeab5ad1": {
    title: "Traumaambulanz: Psychotherapeutische Frühintervention",
    zielgruppen: ["hinterbliebene", "opfer"],
    summary:
      "Geschädigte haben Anspruch auf psychotherapeutische Frühintervention in einer Traumaambulanz, um akute psychische Folgeschäden nach einem schädigenden Ereignis frühzeitig zu behandeln.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__32.html",
  },
  "889bbcbfcb": {
    title: "Traumaambulanz: Psychotherapie für Angehörige und Hinterbliebene",
    zielgruppen: ["hinterbliebene", "opfer"],
    summary:
      "Neben Geschädigten selbst können auch Angehörige und Hinterbliebene psychotherapeutische Intervention in einer Traumaambulanz erhalten, wenn sie psychisch belastet sind.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__33.html",
  },
  "1caaf65a2c": {
    title: "Traumaambulanz: bis zu 15 Behandlungssitzungen",
    zielgruppen: ["hinterbliebene", "opfer"],
    summary:
      "In einer Traumaambulanz haben Berechtigte Anspruch auf bis zu 15 psychotherapeutische Sitzungen. Danach wird über eine Weiterbehandlung im Regelsystem der gesetzlichen Krankenversicherung entschieden.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__34.html",
  },
  "18ab2eb1c2": {
    title: "Traumaambulanz: Weitervermittlung in Psychotherapie",
    zielgruppen: ["opfer"],
    summary:
      "Nach Abschluss der Behandlung in der Traumaambulanz haben Berechtigte Anspruch auf Weitervermittlung in weiterführende psychotherapeutische Versorgung, wenn weiterer Bedarf besteht.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__35.html",
  },
  "617bb3b529": {
    title: "Fahrkosten zur Traumaambulanz",
    zielgruppen: ["opfer"],
    summary:
      "Die Kosten für notwendige Fahrten zur nächstgelegenen Traumaambulanz werden im Rahmen der Sozialen Entschädigung übernommen.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__36.html",
  },
  "53cee0ee20": {
    title: "Krankenbehandlung (Soziale Entschädigung)",
    zielgruppen: ["opfer"],
    summary:
      "Anerkannte Geschädigte haben Anspruch auf Krankenbehandlung für Schädigungsfolgen, die über die GKV-Leistungen hinausgehen kann. Die Soziale Entschädigung trägt die Kosten, soweit sie nicht von der GKV gedeckt werden.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__42.html",
  },
  f0c9f693cf: {
    title:
      "Hilfsmittel und Kleidungsverschleiß-Pauschale (Soziale Entschädigung)",
    zielgruppen: ["opfer"],
    summary:
      "Geschädigte haben Anspruch auf Versorgung mit Hilfsmitteln sowie auf eine Pauschale für außergewöhnlichen Verschleiß von Kleidung und Wäsche, der durch die Schädigungsfolgen bedingt ist.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__46.html",
  },
  "74fa1c3152": {
    title: "Krankengeld der Sozialen Entschädigung",
    zielgruppen: ["opfer"],
    summary:
      "Geschädigte, die aufgrund anerkannter Schädigungsfolgen arbeitsunfähig sind, erhalten Krankengeld der Sozialen Entschädigung, wenn sie keinen Anspruch auf Verdienstausfall aus anderen Quellen haben.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__47.html",
  },
  "175d32284e": {
    title: "Beihilfe bei Beeinträchtigung der Erwerbsgrundlage",
    zielgruppen: ["opfer"],
    summary:
      "Geschädigte, deren Erwerbsgrundlage erheblich beeinträchtigt ist, können eine finanzielle Beihilfe erhalten, um wirtschaftliche Notlagen infolge der Schädigung zu mildern.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__48.html",
  },
  "412396c89e": {
    title: "Zuschuss zu Zahnersatz (Soziale Entschädigung)",
    zielgruppen: ["opfer"],
    summary:
      "Geschädigte, die aufgrund von Schädigungsfolgen Zahnersatz benötigen, erhalten einen Zuschuss zu den Kosten, der über den GKV-Festbetrag hinausgehen kann.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__49.html",
  },
  "6ca299be6a": {
    title: "Kostenerstattung selbst beschaffter Krankenbehandlung",
    zielgruppen: ["opfer"],
    summary:
      "Wenn Geschädigte notwendige Behandlungen für Schädigungsfolgen selbst beschaffen mussten, haben sie Anspruch auf Kostenerstattung, sofern die Leistungsvoraussetzungen erfüllt sind.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__50.html",
  },
  fa49180b8b: {
    title:
      "Krankenbehandlungskosten bei Auslandsaufenthalt (Soziale Entschädigung)",
    zielgruppen: ["opfer"],
    summary:
      "Geschädigte, die sich vorübergehend im Ausland aufhalten, haben Anspruch auf Erstattung notwendiger Krankenbehandlungskosten für Schädigungsfolgen, wenn eine Behandlung im Ausland unumgänglich war.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__51.html",
  },
  "91c356b99d": {
    title:
      "Sozialversicherungsbeiträge bei Krankengeldbezug (Soziale Entschädigung)",
    zielgruppen: ["opfer"],
    summary:
      "Während des Bezugs von Krankengeld der Sozialen Entschädigung werden Beiträge zur Arbeitsförderung und zur gesetzlichen Rentenversicherung entrichtet, um die soziale Absicherung der Geschädigten zu gewährleisten.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__52.html",
  },
  eadbf79b8b: {
    title: "Reisekosten (Soziale Entschädigung)",
    zielgruppen: ["opfer"],
    summary:
      "Im Zusammenhang mit Leistungen der Sozialen Entschädigung werden notwendige Reisekosten einschließlich Gepäcktransport und Reisenebenkosten übernommen.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__53.html",
  },
  d619e923ef: {
    title: "Teilhabe am Arbeitsleben (Soziale Entschädigung)",
    zielgruppen: ["behinderung", "opfer"],
    summary:
      "Geschädigte haben Anspruch auf Leistungen zur Teilhabe am Arbeitsleben, einschließlich Kraftfahrzeughilfe und sonstiger Leistungen, um die Erwerbsfähigkeit trotz Schädigungsfolgen zu erhalten oder wiederherzustellen.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__63.html",
  },
  "967cca5765": {
    title:
      "Ergänzende Leistungen zur Teilhabe am Arbeitsleben (Soziale Entschädigung)",
    zielgruppen: ["opfer"],
    summary:
      "Neben den Kernleistungen zur Teilhabe am Arbeitsleben erhalten Geschädigte ergänzende Leistungen wie Übergangsgeld, Reisekosten, Haushaltshilfe und Kinderbetreuungskosten während Reha-Maßnahmen.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__64.html",
  },
  a84c0338b8: {
    title: "Teilhabe an Bildung (Soziale Entschädigung)",
    zielgruppen: ["opfer"],
    summary:
      "Geschädigte, die aufgrund von Schädigungsfolgen in ihrer Bildungsteilhabe eingeschränkt sind, haben Anspruch auf Leistungen zur Teilhabe an Bildung, um ihnen einen gleichberechtigten Zugang zu Bildungsangeboten zu ermöglichen.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__65.html",
  },
  "0b65e5082f": {
    title: "Kostenübernahme vor Pflegebedürftigkeit (Soziale Entschädigung)",
    zielgruppen: ["pflegebeduerftige", "opfer"],
    summary:
      "Geschädigte, die noch nicht pflegebedürftig im Sinne der Pflegeversicherung sind, aber vorübergehend Unterstützung benötigen, können Kostenübernahme für notwendige Hilfeleistungen erhalten.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__73.html",
  },
  "35ff75bbfc": {
    title: "Leistungen bei Pflegebedürftigkeit (Soziale Entschädigung)",
    zielgruppen: ["pflegebeduerftige", "opfer"],
    summary:
      "Pflegebedürftige Geschädigte haben Anspruch auf Pflegeleistungen entsprechend ihrem Pflegegrad. Die Soziale Entschädigung übernimmt Leistungen ergänzend zur oder anstelle der Pflegeversicherung.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__74.html",
  },
  "3e37976ea8": {
    title: "Ergänzende Pflegeleistungen (Soziale Entschädigung)",
    zielgruppen: ["pflegende-angehoerige", "pflegebeduerftige", "opfer"],
    summary:
      "Pflegebedürftige Geschädigte erhalten ergänzende Pflegeleistungen wie Pflegesachleistung, Verhinderungspflege und Pflegehilfsmittel aus der Sozialen Entschädigung, soweit diese über die Pflegeversicherung hinausgehen.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__75.html",
  },
  e281e03a3f: {
    title: "Häusliche Pflege im Arbeitgebermodell (Soziale Entschädigung)",
    zielgruppen: ["opfer"],
    summary:
      "Geschädigte können Pflegekräfte selbst beschäftigen und erhalten dafür Kostenerstattung im Rahmen der Sozialen Entschädigung. Das Arbeitgebermodell ermöglicht individuelle Pflegearrangements.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__76.html",
  },
  "9369efb4c6": {
    title: "Blindengeld (Soziale Entschädigung)",
    zielgruppen: ["behinderung", "opfer"],
    summary:
      "Geschädigte mit hochgradiger Sehbehinderung oder Blindheit infolge eines anerkannten Schadensereignisses erhalten monatliche finanzielle Unterstützung zum Ausgleich der damit verbundenen Mehraufwendungen.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__82.html",
  },
  d216faf307: {
    title: "Monatliche Entschädigungszahlung (Soziale Entschädigung)",
    zielgruppen: ["opfer"],
    summary:
      "Geschädigte erhalten eine monatliche Entschädigungszahlung, deren Höhe sich nach dem Grad der Schädigungsfolgen richtet. Sie soll den erlittenen immateriellen Schaden dauerhaft ausgleichen.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__83.html",
  },
  "2f29a73f35": {
    title: "Einmalabfindung statt monatlicher Entschädigung",
    zielgruppen: ["opfer"],
    summary:
      "Anstelle der monatlichen Entschädigungszahlung können Geschädigte unter bestimmten Voraussetzungen eine einmalige Abfindung beantragen. Diese bietet finanzielle Planungssicherheit auf einen Schlag.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__84.html",
  },
  "9bf5b90e3c": {
    title: "Monatliche Entschädigung für Witwen und Witwer",
    zielgruppen: ["hinterbliebene", "opfer"],
    summary:
      "Witwen, Witwer und Lebenspartner von Geschädigten erhalten nach deren Tod eine monatliche Entschädigungszahlung aus der Sozialen Entschädigung, um den Unterhaltsverlust auszugleichen.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__85.html",
  },
  "0ce64801e0": {
    title: "Einmalabfindung für Witwen und Witwer (Soziale Entschädigung)",
    zielgruppen: ["hinterbliebene", "opfer"],
    summary:
      "Witwen und Witwer von Geschädigten können anstelle der laufenden monatlichen Entschädigungszahlung eine einmalige Abfindung beantragen.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__86.html",
  },
  "9cd41b2704": {
    title: "Monatliche Entschädigung für Waisen",
    zielgruppen: ["hinterbliebene", "opfer"],
    summary:
      "Halbwaisen und Vollwaisen von Geschädigten haben Anspruch auf monatliche Entschädigungszahlungen aus der Sozialen Entschädigung bis zum Erreichen der Altersgrenze.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__87.html",
  },
  "6b74f4400e": {
    title: "Monatliche Entschädigung für hinterbliebene Eltern",
    zielgruppen: ["hinterbliebene", "opfer"],
    summary:
      "Eltern eines verstorbenen Geschädigten können monatliche Entschädigungszahlungen erhalten, wenn sie von dem Verstorbenen finanziell abhängig waren oder dies zu erwarten gewesen wäre.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__88.html",
  },
  "6db5c1e402": {
    title: "Berufsschadensausgleich (Soziale Entschädigung)",
    zielgruppen: ["opfer"],
    summary:
      "Geschädigte, deren berufliche Entwicklung durch die Schädigung erheblich beeinträchtigt wurde, erhalten einen monatlichen Berufsschadensausgleich zum Ausgleich des erlittenen Einkommensverlustes.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__89.html",
  },
  b9f8f71862: {
    title: "Besondere Leistungen im Einzelfall (Soziale Entschädigung)",
    zielgruppen: ["opfer"],
    summary:
      "In besonderen Härtefällen können Geschädigte und ihre Angehörigen ergänzende Leistungen zum Lebensunterhalt und zur Förderung einer Ausbildung erhalten, wenn die allgemeinen Leistungen nicht ausreichen.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__92.html",
  },
  "696bc52eb9": {
    title: "Leistungen zum Lebensunterhalt (Soziale Entschädigung)",
    zielgruppen: ["hinterbliebene", "opfer"],
    summary:
      "Geschädigte und Hinterbliebene, die den notwendigen Lebensunterhalt nicht aus eigenen Mitteln bestreiten können, erhalten ergänzende Leistungen zum Lebensunterhalt aus der Sozialen Entschädigung.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__93.html",
  },
  "0954c2e613": {
    title: "Ausbildungsförderung (Soziale Entschädigung)",
    zielgruppen: ["hinterbliebene", "opfer"],
    summary:
      "Geschädigte und Waisen, die eine Ausbildung mit staatlich verbürgtem Darlehen finanzieren, können die Übernahme der Rückzahlung des Ausbildungsdarlehens beantragen, wenn die Ausbildung aufgrund der Schädigungsfolgen abgebrochen werden musste.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__94.html",
  },
  ad6f15e1ce: {
    title: "Hilfe zur Weiterführung des Haushalts (Soziale Entschädigung)",
    zielgruppen: ["opfer"],
    summary:
      "Geschädigte, die ihren Haushalt wegen der Schädigungsfolgen vorübergehend nicht führen können, haben Anspruch auf Hilfe zur Weiterführung des Haushalts, z.B. durch eine Haushaltshilfe.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__95.html",
  },
  a03cc0fd62: {
    title: "Hilfe in sonstigen Lebenslagen (Soziale Entschädigung)",
    zielgruppen: ["opfer"],
    summary:
      "Als Auffangregelung können Geschädigte Leistungen in sonstigen besonderen Lebenslagen erhalten, wenn diese durch die Schädigungsfolgen entstanden sind und keine anderen Leistungen greifen.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__96.html",
  },
  c5a41bdffd: {
    title: "Überführungs- und Bestattungskosten (Soziale Entschädigung)",
    zielgruppen: ["opfer"],
    summary:
      "Stirbt ein Geschädigter an den Folgen des anerkannten Schadensereignisses, werden die Kosten für Überführung und Bestattung von der Sozialen Entschädigung übernommen.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__99.html",
  },
  "90099a42d0": {
    title: "Leistungen für Zivildienstgeschädigte",
    zielgruppen: ["hinterbliebene", "opfer"],
    summary:
      "Personen, die im Zivildienst einen Gesundheitsschaden erlitten haben, sowie ihre Hinterbliebenen haben Anspruch auf Leistungen der Sozialen Entschädigung nach SGB XIV.",
    url: "https://www.gesetze-im-internet.de/sgb_14/__103.html",
  },

  // UhVorschG – Unterhaltsvorschussgesetz
  "6d7fb1b4ca": {
    title: "Unterhaltsvorschuss",
    zielgruppen: ["alleinerziehende", "eltern"],
    summary:
      "Alleinerziehende Elternteile können für ihre Kinder bis 18 Jahre Unterhaltsvorschuss beim Jugendamt beantragen, wenn der andere Elternteil keinen oder zu wenig Unterhalt zahlt. Der Staat zahlt den Unterhalt vor und versucht ihn vom unterhaltspflichtigen Elternteil zurückzuholen.",
    url: "https://www.gesetze-im-internet.de/uavg/__2.html",
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
    ],
  },
  b1d5018967: {
    title: "Unterhaltsvorschuss: Nichtverfolgung übergegangener Ansprüche",
    zielgruppen: ["eltern", "alleinerziehende"],
    summary:
      "Ist der unterhaltspflichtige Elternteil leistungsunfähig, kann das Jugendamt in bestimmten Fällen auf die Verfolgung des auf den Staat übergegangenen Unterhaltsanspruchs verzichten, etwa wenn dies wirtschaftlich nicht sinnvoll ist.",
    url: "https://www.gesetze-im-internet.de/uavg/__7a.html",
  },

  // WoGG – Wohngeldgesetz
  "4d845cbce0": {
    title: "Wohngeld",
    zielgruppen: ["arbeitnehmer", "senior", "eltern"],
    summary:
      "Haushalte mit geringem Einkommen können Wohngeld als Zuschuss zur Miete oder zu den Kosten des selbstgenutzten Wohneigentums beantragen. Die Höhe richtet sich nach Haushaltsgröße, Einkommen und Miete bzw. Belastung.",
    url: "https://www.gesetze-im-internet.de/wogg/__1.html",
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
    ],
  },
  "6f55119005": {
    title: "Wohngeld: Einkommensfreibeträge",
    zielgruppen: [
      "eltern",
      "arbeitnehmer",
      "behinderung",
      "pflegebeduerftige",
      "senior",
    ],
    summary:
      "Bei der Berechnung des Wohngeldes werden bestimmte Freibeträge vom anrechenbaren Einkommen abgezogen, z.B. für Haushaltsmitglieder mit Behinderung oder pflegebedürftige Personen. Dies erhöht den Wohngeldanspruch.",
    url: "https://www.gesetze-im-internet.de/wogg/__17.html",
  },
  ea5968aabe: {
    title: "Wohngeld: Abzug für Unterhaltsleistungen",
    zielgruppen: ["eltern", "arbeitnehmer", "senior"],
    summary:
      "Gezahlte Unterhaltsleistungen können vom anrechenbaren Einkommen abgezogen werden, bevor das Wohngeld berechnet wird. Dadurch erhöht sich der Wohngeldanspruch für unterhaltspflichtige Personen.",
    url: "https://www.gesetze-im-internet.de/wogg/__18.html",
  },
  c699084a4e: {
    title: "Vorläufige Wohngeldzahlung",
    zielgruppen: ["eltern", "arbeitnehmer", "senior"],
    summary:
      "Wenn die endgültige Feststellung des Wohngeldanspruchs voraussichtlich länger dauert, kann vorläufig Wohngeld gezahlt werden, um finanzielle Engpässe zu überbrücken.",
    url: "https://www.gesetze-im-internet.de/wogg/__26a.html",
  },
  "101b70ba9d": {
    title: "Wohngeld im Todesfall",
    zielgruppen: ["eltern", "arbeitnehmer", "senior"],
    summary:
      "Nach dem Tod des Wohngeldempfängers können verbleibende Haushaltsmitglieder oder Erben Wohngeld für den laufenden Monat erstattet bekommen bzw. anteilig zurückfordern.",
    url: "https://www.gesetze-im-internet.de/wogg/__30.html",
  },
};
