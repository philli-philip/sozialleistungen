import { createFileRoute } from "@tanstack/react-router";
import { meta } from "@/lib/data";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 space-y-6 text-sm leading-relaxed">
      <h1 className="text-2xl font-semibold">Über dieses Projekt</h1>
      <p className="text-muted-foreground">
        Diese Seite basiert auf dem Datensatz des{" "}
        <a
          href="https://ifo-institute.de"
          rel="noopener noreferrer"
          className="underline"
        >
          ifo-Instituts
        </a>{" "}
        zu deutschen Sozialleistungen. Es erweitert den Datensatz um
        verlinkungen zu den originalen Gesetzesverordnungen. Darüberhinaus lässt
        es Einträge gruppieren und organisieren.
      </p>
      <div className="rounded-lg text-xs text-muted-foreground space-y-1">
        <div>
          <span className="font-medium text-foreground">Quelle:</span>{" "}
          ifo-institute/sozialleistungen
        </div>
        <div>
          <span className="font-medium text-foreground">Einträge:</span>{" "}
          {meta.count}
        </div>
        <div>
          <span className="font-medium text-foreground">Stand:</span>{" "}
          {new Date(meta.generatedAt).toLocaleString("de-DE")}
        </div>
      </div>
    </div>
  );
}
