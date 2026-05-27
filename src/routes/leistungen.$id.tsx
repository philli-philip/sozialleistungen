import {
  createFileRoute,
  Link,
  notFound,
  useNavigate,
} from "@tanstack/react-router";
import { useEffect, useMemo } from "react";
import {
  ArrowLeft,
  Bookmark,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import { Commentary } from "@/components/commentary";
import { getLeistung, leistungen } from "@/lib/data";
import { cn } from "@/lib/utils";
import { themenfeldStyle } from "@/lib/themenfeld-colors";
import {
  Kbd,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { preferences, useIsBookmarked, useRank } from "@/lib/preferences";

export const Route = createFileRoute("/leistungen/$id")({
  loader: ({ params }) => {
    const l = getLeistung(params.id);
    if (!l) throw notFound();
    return l;
  },
  validateSearch: (
    search: Record<string, string>,
  ): { ifo?: "hide"; res?: "hide"; bg?: "hide" } => {
    const out: { ifo?: "hide"; res?: "hide"; bg?: "hide" } = {};
    if (search.ifo === "hide") out.ifo = "hide";
    if (search.res === "hide") out.res = "hide";
    if (search.bg === "hide") out.bg = "hide";
    return out;
  },
  component: LeistungDetail,
});

function LeistungDetail() {
  const l = Route.useLoaderData();
  const search = Route.useSearch();
  const open = search.ifo !== "hide";
  const resourcesOpen = search.res !== "hide";
  const commentaryOpen = search.bg !== "hide";
  const resources = l.annotation?.resources ?? [];
  const bookmarked = useIsBookmarked(l.id);
  const rank = useRank(l.id);
  const navigate = useNavigate({ from: Route.fullPath });

  const { prev, next } = useMemo(() => {
    const i = leistungen.findIndex((x) => x.id === l.id);
    return {
      prev: i > 0 ? leistungen[i - 1] : null,
      next: i >= 0 && i < leistungen.length - 1 ? leistungen[i + 1] : null,
    };
  }, [l.id]);

  const go = (id: string) =>
    navigate({ to: "/leistungen/$id", params: { id }, search: (p) => p });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Skip when typing in form fields or contenteditable.
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
          navigate({ to: "/" });
          return;
        case "J":
        case "j":
          if (prev) {
            e.preventDefault();
            go(prev.id);
          }
          return;
        case "K":
        case "k":
          if (next) {
            e.preventDefault();
            go(next.id);
          }
          return;
        case "b":
        case "B":
          e.preventDefault();
          preferences.toggleBookmark(l.id);
          return;
        case "1":
          e.preventDefault();
          preferences.setRank(l.id, rank === "keep" ? undefined : "keep");
          return;
        case "2":
          e.preventDefault();
          preferences.setRank(l.id, rank === "drop" ? undefined : "drop");
          return;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // `go` is a stable wrapper around `navigate`; we re-bind whenever the
    // current id, rank, or neighbors change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [l.id, rank, prev?.id, next?.id]);

  return (
    <div className="mx-auto max-w-5xl px-6 py-10 ">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Tooltip>
            <TooltipTrigger>
              <Link
                to="/"
                className="inline-flex rounded items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-3 w-3" strokeWidth={1.5} />
                Zurück zur Liste
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <span>Zurück zur Liste aller Leistungen</span>
              <Kbd>ESC</Kbd>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="flex flex-row gap-2">
          <div className="inline-flex rounded border bg-card overflow-hidden">
            <Tooltip>
              <TooltipTrigger asChild>
                <RankButton
                  active={rank === "keep"}
                  onClick={() =>
                    preferences.setRank(
                      l.id,
                      rank === "keep" ? undefined : "keep",
                    )
                  }
                  tone="keep"
                  aria-label="Wichtig"
                >
                  <ThumbsUp
                    className="h-3.5 w-3.5"
                    strokeWidth={1.5}
                    fill={rank === "keep" ? "currentColor" : "transparent"}
                  />
                </RankButton>
              </TooltipTrigger>
              <TooltipContent>
                <span>Wichtig</span>
                <Kbd>1</Kbd>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <RankButton
                  active={rank === "drop"}
                  onClick={() =>
                    preferences.setRank(
                      l.id,
                      rank === "drop" ? undefined : "drop",
                    )
                  }
                  tone="drop"
                  aria-label="Überflüssig"
                >
                  <ThumbsDown
                    className="h-3.5 w-3.5"
                    strokeWidth={1.5}
                    fill={rank === "drop" ? "currentColor" : "transparent"}
                  />
                </RankButton>
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
                onClick={() => preferences.toggleBookmark(l.id)}
                aria-pressed={bookmarked}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded border px-2 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors",
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
      <h1 className="mt-3 text-2xl font-semibold leading-snug">
        {l.annotation?.title ?? l.leistung}
      </h1>

      {l.annotation?.summary && (
        <p className="mt-3 text-sm text-balance leading-relaxed max-w-prose text-muted-foreground">
          {l.annotation.summary}
        </p>
      )}
      <Link
        to={`/leistungen/$id`}
        resetScroll={false}
        search={(p) => ({ ...p, ifo: open ? "hide" : undefined })}
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
          <button
            type="button"
            data-gesetz-tag
            onClick={() =>
              navigate({
                search: (p) => ({ ...p, info: l.gesetz }),
                resetScroll: false,
              })
            }
            className="rounded bg-secondary text-xs px-2 py-0.5 text-primary hover:bg-primary/10 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {l.gesetz}
          </button>
        </Field>
      </dl>

      {l.commentary && (
        <>
          <Link
            to={`/leistungen/$id`}
            resetScroll={false}
            search={(p) => ({
              ...p,
              bg: commentaryOpen ? "hide" : undefined,
            })}
            params={{ id: l.id }}
            className="border-t border-border pt-4 pb-4 flex items-center justify-between w-full text-xs uppercase text-muted-foreground hover:text-foreground transition-colors"
            aria-expanded={commentaryOpen}
          >
            <span>Hintergrund</span>
            <ChevronDown
              className={cn(
                "h-3 w-3 transition-transform mr-4",
                commentaryOpen ? "rotate-180" : "rotate-0",
              )}
              strokeWidth={1.5}
            />
          </Link>
          <div
            className={cn(
              "overflow-hidden transition-all",
              commentaryOpen ? "mb-4 opacity-100" : "max-h-0 opacity-0",
            )}
          >
            <Commentary source={l.commentary} />
          </div>
        </>
      )}

      <Link
        to={`/leistungen/$id`}
        search={(p) => ({
          ...p,
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
            Noch keine Ressourcen hinzugefügt.
          </p>
        )}
      </div>

      <div className="flex pt-8 border-t border-border justify-between items-center gap-1 text-xs text-muted-foreground">
        <NeighborLink
          direction="prev"
          neighbor={prev}
          title="Vorherige Leistung"
        />

        <NeighborLink
          direction="next"
          neighbor={next}
          title="Nächste Leistung"
        />
      </div>
    </div>
  );
}

function NeighborLink({
  direction,
  neighbor,
  title,
}: {
  direction: "prev" | "next";
  neighbor: ReturnType<typeof getLeistung> | null;
  title: string;
}) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
  const className = cn(
    "inline-flex items-center justify-center h-6 px-1 gap-1 rounded transition-colors",
    direction === "prev" ? "flex-row-reverse" : "flex-row",
    neighbor
      ? "hover:bg-muted text-foreground"
      : "text-muted-foreground/40 cursor-not-allowed",
  );
  if (!neighbor)
    return (
      <span className={className} aria-disabled="true" title={title}>
        <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
      </span>
    );
  return (
    <Tooltip>
      <TooltipTrigger>
        <Link
          to="/leistungen/$id"
          params={{ id: neighbor.id }}
          search={(p) => p}
          className={className}
          title={`${title}: ${neighbor.annotation?.title ?? neighbor.leistung}`}
        >
          <span>{title}</span>
          <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        {title}
        <Kbd>{direction === "prev" ? "j" : "k"}</Kbd>
      </TooltipContent>
    </Tooltip>
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
  ref,
  active,
  tone,
  children,
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  ref?: React.Ref<HTMLButtonElement>;
  active: boolean;
  tone: "keep" | "drop";
}) {
  const activeClass =
    tone === "keep"
      ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
      : "bg-rose-500/15 text-rose-700 dark:text-rose-300";
  return (
    <button
      ref={ref}
      type="button"
      aria-pressed={active}
      className={cn(
        "inline-flex items-center justify-center px-2.5 py-1.5 text-xs transition-colors border-l first:border-l-0",
        active ? activeClass : "hover:bg-muted text-muted-foreground",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
