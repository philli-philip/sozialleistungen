import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { meta } from "@/lib/data";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 space-y-6 text-sm leading-relaxed">
      <h1 className="text-2xl font-semibold">Über dieses Projekt</h1>
      <p className="text-muted-foreground max-w-prose">
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
          <span className="font-medium text-foreground">Einträge:</span>{" "}
          {meta.count}
        </div>
        <div>
          <span className="font-medium text-foreground">Stand:</span>{" "}
          {new Date(meta.generatedAt).toLocaleString("de-DE")}
        </div>
      </div>

      <div className="pt-2">
        <h2 className="text-base font-semibold text-foreground">Community</h2>
        <p className="mt-2 text-muted-foreground max-w-prose">
          Diskussion, Feedback und Vorschläge auf Discord:
        </p>
        <a
          href="https://discord.gg/zsHeSGZFBz"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 from-indigo-600 to-indigo-700 bg-linear-to-b text-white inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 hover:bg-muted transition-colors"
        >
          Join our Discord
          <ExternalLink className="h-3 w-3" strokeWidth={2} />
        </a>
      </div>
    </div>
  );
}
