import { meta } from "@/lib/data";
import { createFileRoute } from "@tanstack/react-router";
import { ReactNode } from "react";

export const Route = createFileRoute("/")({
  component: Start,
});

function Start() {
  const benefitCount = meta.benefitCount;

  const Paragraph = ({ children }: { children: ReactNode }) => (
    <p className="text-secondary-foreground text-xl max-w-prose leading-relaxed">
      {children}
    </p>
  );

  const LinkClassName = "underline hover:text-primary";

  return (
    <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
      {/* Hero — one dominant figure, impfdashboard-style, plus a Stand stamp */}
      <section className="space-y-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Deutsche Sozialleistungen
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-snug">
              Über 500 Sozialleistungen. Zu viele?
            </h1>
            <p className="text-xl font-semibold max-w-prose leading-relaxed text-balance">
              Das ifo-Institut zählt mehr als 500 gesetzliche Sozialleistungen
              und meint damit: zu viele, zu kompliziert. Was dahinter steckt,
              warum die Zahl 500 irreführend ist und welche Sozialleistungen wir
              wirklich haben.
            </p>
          </div>
        </div>
      </section>
      <section className="pt-12 text-xl">
        <h2 className="text-3xl font-semibold pb-3">Hintergrund</h2>
        <Paragraph>
          Am 8. Oktober 2025 veröffentlichte das ifo Institute eine{" "}
          <a
            href="https://www.ifo.de/pressemitteilung/2025-10-15/ueber-500-verschiedene-sozialleistungen-deutschland"
            className={LinkClassName}
          >
            Pressemitteilung
          </a>
          , in dem sie über 500, 503 um genau zu sein, Sozialleistungen
          feststellt. „Ursprünglich wollten wir Ausmaß und Wirkung aller
          Sozialleistungen berechnen. Die Vielzahl an Vorschriften und
          Leistungen ließ diese Aufgabe beinahe unlösbar erscheinen. Statt der
          Quantifizierung entstand deswegen zunächst nur eine Inventarliste
          aller Sozialleistungen auf Bundesebene“, sagt Andreas Peichl, Leiter
          des ifo Zentrums Makroökonomik und Befragungen.
        </Paragraph>
      </section>
      <section className="flex flex-col pt-12 text-xl text-secondary-foreground ">
        <h3 className="text-3xl font-semibold pb-3 text-foreground">
          Inkonsistente Interpretation
        </h3>
        <Paragraph>
          In der Pressemitteilung wird das{" "}
          <a
            href="https://github.com/ifo-institute/sozialleistungen"
            className={LinkClassName}
          >
            Ergebnisse der Studie
          </a>{" "}
          verlinkt. Es ist eine Liste von Einträgen. Gruppiert sind die Einträge
          nach Gesetzbuch und Kategorie, haben jeweils einen Namen, eine
          Rechtsnorm, eine Zielgruppe und gehören zu einem Themenfeld.
        </Paragraph>
        <Paragraph>
          Diese 506 Einträge als Leistungen zu klassifizieren, ist schlichtweg
          falsch. Die Analyse des Instituts ist dabei inkonsistent: Manchmal
          listet das ifo-Institut mehrere Paragraphen als einen Eintrag (so beim
          BAföG,{" "}
          <a href="#fig-1" className={LinkClassName}>
            siehe Fig 1
          </a>
          ), manchmal teilt es einen einzigen Paragraphen in mehrere Einträge
          auf — etwa § 27 Abs. 2 SGB III, der fünf verschiedene
          Mehrbedarfstatbestände abdeckt (
          <a href="#fig-2" className={LinkClassName}>
            siehe Fig. 2
          </a>
          ). Und manchmal werden reine Berechnungsregeln (Freibeträge,
          Anrechnungsvorschriften) als eigene Leistungen gezählt, obwohl sie nur
          Parameter einer übergeordneten Leistung sind (
          <a href="#fig-3" className={LinkClassName}>
            siehe Fig. 3
          </a>
          ).
        </Paragraph>
      </section>
      <section className="flex flex-col md:flex-row gap-4 pt-12 lg:-mx-24">
        <div className="md:w-1/3">
          <div
            className="bg-sidebar border rounded border-border p-4 scroll-mt-24"
            id="fig-1"
          >
            <h4 className="font-mono pb-1">EStG</h4>
            <h5 className="ml-2 pb-2">Zusätzliche Altersvorsorge (Riester)</h5>
            <div className="flex flex-col gap-2 ml-4">
              {[
                {
                  norm: "§ 10a Zusätzliche Altersvorsorge",
                  label: "Sonderausgabenabzug und Zulagen für Riester-Beiträge",
                },
                {
                  norm: "§ 79 Zulageberechtigte",
                  label: "Anspruch auf Altersvorsorgezulage",
                },
                {
                  norm: "§ 84 Grundzulage",
                  label: "175 € Grundzulage jährlich",
                },
                {
                  norm: "§ 85 Kinderzulage",
                  label: "185 € / 300 € Kinderzulage pro Kind",
                },
              ].map(({ norm, label }) => (
                <div
                  key={norm}
                  className="border border-border bg-card p-3 rounded-md"
                >
                  <p className="text-xs text-primary font-mono mb-1">{norm}</p>
                  <p className="text-sm leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <span className="text-xs font-mono">
            Fig. 1: 4 Paragraphen, aber nur eine Leistung.
          </span>
        </div>
        <div className="md:w-1/3">
          <div
            className="bg-sidebar border rounded border-border p-4 scroll-mt-24"
            id="fig-2"
          >
            <h4 className="font-mono pb-1">SGB III</h4>
            <h5 className="ml-2 pb-2">Aktive Arbeitsförderung</h5>
            <p className="ml-2 mb-3 text-xs font-medium text-muted-foreground">
              § 27 Abs. 2 Versicherungsfreie Beschäftigte SGB III
            </p>
            <div className="flex flex-col gap-2 ml-4">
              {[
                {
                  label: "Mehrbedarf für werdende Mütter",
                  group: "Schwangere",
                },
                {
                  label: "Mehrbedarf für Alleinerziehende",
                  group: "Alleinerziehende",
                },
                {
                  label: "Mehrbedarf kostenaufwendige Ernährung",
                  group: "Chronisch Krank",
                },
                { label: "Mehrbedarf für besondere Umstände", group: "Alle" },
                {
                  label: "Erstausstattung bei Schwangerschaft",
                  group: "Schwangere",
                },
              ].map(({ label, group }) => (
                <div
                  key={label}
                  className="border border-border bg-card px-3 py-2 rounded-md flex items-center justify-between gap-2"
                >
                  <span className="text-sm leading-tight">{label}</span>
                  <span className="px-2 py-0.5 rounded-md bg-neutral-100 border border-neutral-200 text-xs shrink-0">
                    {group}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <span className="text-xs font-mono">
            Fig 2: Ein Paragraph, fünf ifo-Einträge.
          </span>
        </div>
        <div className="md:w-1/3">
          <div
            className="bg-sidebar border rounded border-border p-4 scroll-mt-24"
            id="fig-3"
          ></div>
          <span className="text-xs font-mono">
            Fig 3: Freibeträge sind keine Leistung
          </span>
        </div>
      </section>

      <section className="pt-12">
        <Paragraph>
          Nun könnten wir hier aufhören uns sagen "6, setzen!". Thema und
          Fragestellung sind relevant, nur die verkürzte Antwort ohne tiefere
          Analyse nur Futter für Populisten mit dem Ziel des Abbau des
          Sozialstaates. Daher nun die eigene Analyse mit dem Ziel die
          Sozialleistungen herauszuarbeiten und über sie zu reflektieren.
        </Paragraph>
      </section>
      <section className="pt-12">
        <h2 className="font-semibold text-3xl pb-2">Erwartung</h2>
        <Paragraph>
          Ziel ist es nun eine hilfreiche Liste an Sozialleistungen zu erstellen
          und diese verständlich zu präsentieren. Ich übernehme die Definition
          für eine Sozialleistung vom ifo Institut, das es wiederum aus dem
          <a
            href="https://www.gesetze-im-internet.de/sgb_1/__1.html"
            rel="noreferrer"
          >
            Sozialgesetzbuch 1 Paragraph 1
          </a>{" "}
          sowie{" "}
          <a
            href="https://www.gesetze-im-internet.de/sgb_1/__11.html"
            rel="noreferrer"
          >
            Paragraph 11
          </a>
          , übernimmt: Sozialleistungen sind Dienst-, Sach- und Geldleistungen
          sowie persöhnliche und erzieherische Hilfe.
        </Paragraph>
        <blockquote className="text-4xl italic leading-relaxed m-8 mr-4 px-4 font-serif text-balance text-secondary-foreground border-l-4 border-primary">
          Sozialleistungen sind Dienst-, Sach- und Geldleistungen sowie
          persöhnliche und erzieherische Hilfe.
        </blockquote>
        <Paragraph>
          Anschließend werden wir die Leistungen in verschieden Gruppen und
          Situationen gruppieren. Für wen sind welche Leistugen relvant, wie
          häufig überschneiden sich Leistungen?
        </Paragraph>
      </section>
      <section className="pt-12">
        <h2 className="font-semibold text-3xl pb-2">Grundlegendes</h2>
        <Paragraph>Ich zähle {benefitCount} Leistugen.</Paragraph>
      </section>
    </div>
  );
}
