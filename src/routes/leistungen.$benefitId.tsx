import { createFileRoute, Link, notFound, useNavigate, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  ArrowLeft,
  Bookmark,
  ExternalLink,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import { Commentary } from "@/components/commentary";
import { getBenefit, getLeistung, type Leistung } from "@/lib/data";
import { gesetzStyle } from "@/lib/gesetz-colors";
import { whoLabel } from "@/data/who";
import { lebenslageLabel } from "@/data/lebenslagen";
import { cn } from "@/lib/utils";
import { preferences, useIsBookmarked, useRank } from "@/lib/preferences";
import { Kbd, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export const Route = createFileRoute("/leistungen/$benefitId")({
  loader: ({ params }) => {
    const b = getBenefit(params.benefitId);
    if (!b) throw notFound();
    return b;
  },
  component: BenefitDetail,
});

function BenefitDetail() {
  const b = Route.useLoaderData();
  const rank = useRank(b.id);
  const bookmarked = useIsBookmarked(b.id);
  const navigate = useNavigate({ from: Route.fullPath });
  const router = useRouter();
  const norms = b.normIds
    .map((id) => getLeistung(id))
    .filter((x): x is Leistung => x != null)
    .filter((l, i, arr) => arr.findIndex((x) => x.rechtsnorm === l.rechtsnorm) === i);

  const goBack = () => {
    if (router.history.canGoBack()) router.history.back();
    else navigate({ to: "/leistungen" });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable)
      )
        return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      switch (e.key) {
        case "Escape":
          e.preventDefault();
          goBack();
          return;
        case "b":
        case "B":
          e.preventDefault();
          preferences.toggleBookmark(b.id);
          return;
        case "1":
          e.preventDefault();
          preferences.setRank(b.id, rank === "keep" ? undefined : "keep");
          return;
        case "2":
          e.preventDefault();
          preferences.setRank(b.id, rank === "drop" ? undefined : "drop");
          return;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [b.id, rank]);

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <div className="flex items-center justify-between gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              onClick={goBack}
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-3 w-3" strokeWidth={1.5} />
              Alle Leistungen
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <span>Zurück zu allen Leistungen</span>
            <Kbd>ESC</Kbd>
          </TooltipContent>
        </Tooltip>
        <div className="flex items-center gap-2">
          <div className="inline-flex overflow-hidden rounded border bg-card">
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  onClick={() =>
                    preferences.setRank(b.id, rank === "keep" ? undefined : "keep")
                  }
                  aria-label="Wichtig"
                  aria-pressed={rank === "keep"}
                  className={cn(
                    "inline-flex items-center px-2 py-1.5 transition-colors",
                    rank === "keep"
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-muted-foreground hover:bg-muted",
                  )}
                >
                  <ThumbsUp
                    className="h-3.5 w-3.5"
                    strokeWidth={1.5}
                    fill={rank === "keep" ? "currentColor" : "transparent"}
                  />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <span>Wichtig</span>
                <Kbd>1</Kbd>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  onClick={() =>
                    preferences.setRank(b.id, rank === "drop" ? undefined : "drop")
                  }
                  aria-label="Überflüssig"
                  aria-pressed={rank === "drop"}
                  className={cn(
                    "inline-flex items-center border-l px-2 py-1.5 transition-colors",
                    rank === "drop"
                      ? "text-rose-600 dark:text-rose-400"
                      : "text-muted-foreground hover:bg-muted",
                  )}
                >
                  <ThumbsDown
                    className="h-3.5 w-3.5"
                    strokeWidth={1.5}
                    fill={rank === "drop" ? "currentColor" : "transparent"}
                  />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <span>Überflüssig</span>
                <Kbd>2</Kbd>
              </TooltipContent>
            </Tooltip>
          </div>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                onClick={() => preferences.toggleBookmark(b.id)}
                aria-pressed={bookmarked}
                aria-label={bookmarked ? "Lesezeichen entfernen" : "Merken"}
                className={cn(
                  "inline-flex items-center rounded border px-2 py-1.5 text-muted-foreground hover:text-foreground transition-colors",
                  bookmarked ? "" : "bg-card hover:bg-muted",
                )}
              >
                <Bookmark
                  className="h-3.5 w-3.5"
                  strokeWidth={1.5}
                  fill={bookmarked ? "currentColor" : "none"}
                />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <span>{bookmarked ? "Lesezeichen entfernen" : "Merken"}</span>
              <Kbd>B</Kbd>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {b.gesetz && (
          <span
            style={gesetzStyle(b.gesetz)}
            className="rounded px-1.5 py-0.5 text-[10px] font-medium"
          >
            {b.gesetz}
          </span>
        )}
      </div>
      <h1 className="mt-2 text-2xl font-semibold leading-snug">{b.title}</h1>
      {b.summary && (
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted-foreground">
          {b.summary}
        </p>
      )}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {b.who !== "alle" && (
          <span className="inline-flex items-center rounded bg-muted px-2 py-0.5 text-xs">
            {whoLabel(b.who)}
          </span>
        )}
        <span className="inline-flex items-center rounded bg-primary/10 px-2 py-0.5 text-xs text-primary">
          {lebenslageLabel(b.when)}
        </span>
      </div>

      <h2 className="mt-8 text-xs uppercase tracking-wider text-muted-foreground">
        Normen in dieser Leistung
      </h2>

      <ul className="mt-3 gap-2 list-disc ml-4">
        {norms.map((l) => (
          <li key={l.id}>
            <Link
              to="/rechtsnormen/$id"
              params={{ id: l.id }}
              search={{}}
              className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
            >
              {l.rechtsnorm}
            </Link>
          </li>
        ))}
      </ul>

      {b.commentary && (
        <section className="mt-8">
          <Commentary source={b.commentary} />
        </section>
      )}

      {b.resources && b.resources.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xs uppercase tracking-wider text-muted-foreground">
            Quellen & weiterführende Links
          </h2>
          <ul className="mt-3 flex flex-col gap-2 list-disc">
            {b.resources.map((r) => (
              <li key={r.url} className="ml-4">
                <a
                  href={r.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
                >
                  <span>{r.label}</span>
                  <ExternalLink className="h-3 w-3" strokeWidth={1.5} />
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
