import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  Bookmark,
  Check,
  ChevronDown,
  ExternalLink,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import { getLeistung } from "@/lib/data";
import { cn } from "@/lib/utils";
import { themenfeldStyle } from "@/lib/themenfeld-colors";
import {
  preferences,
  rankLabels,
  useIsBookmarked,
  useRank,
} from "@/lib/preferences";

export const Route = createFileRoute("/leistungen/$id")({
  loader: ({ params }) => {
    const l = getLeistung(params.id);
    if (!l) throw notFound();
    return l;
  },
  validateSearch: (
    search: Record<string, string>,
  ): { ifo?: "hide"; res?: "hide" } => {
    const out: { ifo?: "hide"; res?: "hide" } = {};
    if (search.ifo === "hide") out.ifo = "hide";
    if (search.res === "hide") out.res = "hide";
    return out;
  },
  component: LeistungDetail,
});

function LeistungDetail() {
  const l = Route.useLoaderData();
  const search = Route.useSearch();
  const open = search.ifo !== "hide";
  const resourcesOpen = search.res !== "hide";
  const resources = l.annotation?.resources ?? [];
  const bookmarked = useIsBookmarked(l.id);
  const rank = useRank(l.id);

  return (
    <div className="mx-auto max-w-5xl px-6 py-10 ">
      <Link
        to="/"
        className="inline-flex rounded items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-3 w-3" strokeWidth={1.5} />
        Zurück zur Liste
      </Link>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="mt-3 text-2xl font-semibold leading-snug">
          {l.annotation?.title ?? l.leistung}
        </h1>

        <div className="mt-4 flex flex items-center gap-2">
          <div className="inline-flex rounded-md border bg-card overflow-hidden">
            <RankButton
              active={rank === "keep"}
              onClick={() =>
                preferences.setRank(l.id, rank === "keep" ? undefined : "keep")
              }
              tone="keep"
            >
              <ThumbsUp className="h-3.5 w-3.5" strokeWidth={1.5} />
              {rankLabels["keep"]}
            </RankButton>
            <RankButton
              active={rank === undefined}
              onClick={() => preferences.setRank(l.id, undefined)}
              tone="neutral"
            >
              {rankLabels["undefined"]}
            </RankButton>
            <RankButton
              active={rank === "drop"}
              onClick={() =>
                preferences.setRank(l.id, rank === "drop" ? undefined : "drop")
              }
              tone="drop"
            >
              <ThumbsDown className="h-3.5 w-3.5" strokeWidth={1.5} />
              {rankLabels["drop"]}
            </RankButton>
          </div>
          <button
            type="button"
            onClick={() => preferences.toggleBookmark(l.id)}
            aria-pressed={bookmarked}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs transition-colors",
              bookmarked
                ? "bg-primary/10 border-primary/30 text-primary"
                : "bg-card hover:bg-muted text-foreground",
            )}
          >
            <Bookmark
              className="h-3.5 w-3.5"
              strokeWidth={1.5}
              fill={bookmarked ? "currentColor" : "none"}
            />
          </button>
        </div>
      </div>

      {l.annotation?.summary && (
        <p className="mt-3 text-sm text-balance leading-relaxed max-w-prose text-muted-foreground">
          {l.annotation.summary}
        </p>
      )}
      <Link
        to={`/leistungen/$id`}
        search={(prev) => ({ ...prev, ifo: open ? "hide" : undefined })}
        params={{ id: l.id }}
        className="border-t border-border mt-4 pt-4 pb-4 flex items-center justify-between w-full text-xs uppercase text-muted-foreground hover:text-foreground transition-colors"
        aria-expanded={open}
      >
        <span>IFO Daten</span>
        <ChevronDown
          className={cn(
            "h-3 w-3 transition-transform mr-4",
            open ? "rotate-180" : "rotate-0",
          )}
          strokeWidth={1.5}
        />
      </Link>
      <dl
        className={cn(
          "grid gap-6 sm:grid-cols-2 text-sm overflow-hidden transition-all",
          open ? "mb-4 max-h-500 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="col-span-2">
          <Field label="Beschreibung">
            <p className="text-sm leading-relaxed max-w-prose">{l.leistung}</p>
          </Field>
        </div>
        {l.zielgruppen?.length ? (
          <Field label="Zielgruppen">
            <div className="flex flex-wrap gap-1.5">
              {l.zielgruppen.map((z) => (
                <span key={z} className="rounded bg-muted px-2 py-0.5 text-xs">
                  {z}
                </span>
              ))}
            </div>
          </Field>
        ) : null}
        {l.themenfelder?.length ? (
          <Field label="Themenfelder">
            <div className="flex flex-wrap gap-1.5">
              {l.themenfelder.map((t) => (
                <span
                  key={t}
                  className="rounded px-2 py-0.5 text-xs"
                  style={themenfeldStyle(t)}
                >
                  {t}
                </span>
              ))}
            </div>
          </Field>
        ) : null}

        <Field label="Rechtsnorm">
          {l.annotation && l.annotation.url ? (
            <code>
              <a
                href={l.annotation.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
              >
                <span>
                  {l.rechtsnorm}
                  <ExternalLink
                    className="h-3 w-3 inline ml-2"
                    strokeWidth={1.5}
                  />
                </span>
              </a>
            </code>
          ) : (
            <code>{l.rechtsnorm}</code>
          )}
        </Field>

        <Field label="Gesetz">
          <span className="rounded bg-secondary text-xs px-2 py-0.5 text-primary">
            {l.gesetz}
          </span>
        </Field>
      </dl>

      <Link
        to={`/leistungen/$id`}
        search={(prev) => ({
          ...prev,
          res: resourcesOpen ? "hide" : undefined,
        })}
        params={{ id: l.id }}
        className="border-t border-border pt-4 pb-4 flex items-center justify-between w-full text-xs uppercase text-muted-foreground hover:text-foreground transition-colors"
        aria-expanded={resourcesOpen}
      >
        <span>Resources</span>
        <ChevronDown
          className={cn(
            "h-3 w-3 transition-transform mr-4",
            resourcesOpen ? "rotate-180" : "rotate-0",
          )}
          strokeWidth={1.5}
        />
      </Link>
      <div
        className={cn(
          "overflow-hidden transition-all",
          resourcesOpen ? "mb-4 max-h-500 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        {resources.length > 0 ? (
          <ul className="flex flex-col gap-2 list-disc">
            {resources.map((r) => (
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
        ) : (
          <p className="text-xs text-muted-foreground">
            No resources added yet.
          </p>
        )}
      </div>

      <hr className="pt-2" />
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">
        {label}
      </dt>
      <dd>{children}</dd>
    </div>
  );
}

function RankButton({
  active,
  onClick,
  tone,
  children,
}: {
  active: boolean;
  onClick: () => void;
  tone: "keep" | "neutral" | "drop";
  children: React.ReactNode;
}) {
  const activeClass =
    tone === "keep"
      ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
      : tone === "drop"
        ? "bg-rose-500/15 text-rose-700 dark:text-rose-300"
        : "bg-muted text-foreground";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs transition-colors border-l first:border-l-0",
        active ? activeClass : "hover:bg-muted text-muted-foreground",
      )}
    >
      {children}
      {active && <Check className="h-3 w-3" strokeWidth={2} />}
    </button>
  );
}
