import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useRef } from "react";
import {
  Bookmark,
  Search as SearchIcon,
  ThumbsDown,
  ThumbsUp,
  X,
} from "lucide-react";
import { benefits, facets, leistungen } from "@/lib/data";
import { cn } from "@/lib/utils";
import { whoLabel } from "@/data/who";
import { lebenslageLabel } from "@/data/lebenslagen";
import { FilterDropdown, Tag } from "@/components/filters";
import { gesetzStyle } from "@/lib/gesetz-colors";
import {
  RANK_ORDER,
  rankLabels,
  usePreferences,
  type Rank,
} from "@/lib/preferences";

type RankFilter = Rank | "undefined";

type SearchParams = {
  q?: string;
  gesetz?: string[];
  /** Kept for home-page deep-links; no longer a visible filter. */
  themenfeld?: string[];
  /** WHEN — life situation (primary axis). */
  when?: string[];
  /** WHO — target population. */
  who?: string[];
  /** Deep-link to a specific set of benefits (e.g. from the start page). */
  id?: string[];
  bookmarked?: true;
  rank?: RankFilter[];
};

const RANK_FILTER_OPTIONS: RankFilter[] = ["keep", "undefined", "drop"];

export const Route = createFileRoute("/leistungen/")({
  validateSearch: (s: Record<string, unknown>): SearchParams => ({
    q: typeof s.q === "string" ? s.q : undefined,
    gesetz: arr(s.gesetz),
    themenfeld: arr(s.themenfeld),
    when: arr(s.when),
    who: arr(s.who),
    id: arr(s.id),
    bookmarked:
      s.bookmarked === true || s.bookmarked === "true" ? true : undefined,
    rank: rankArr(s.rank),
  }),
  component: BenefitList,
});

function arr(v: unknown): string[] | undefined {
  if (Array.isArray(v)) return v.filter((x) => typeof x === "string");
  if (typeof v === "string") return [v];
  return undefined;
}

function rankArr(v: unknown): RankFilter[] | undefined {
  const allowed = new Set<RankFilter>(["keep", "undefined", "drop"]);
  const raw = Array.isArray(v) ? v : typeof v === "string" ? [v] : [];
  const out = raw.filter(
    (x): x is RankFilter =>
      typeof x === "string" && allowed.has(x as RankFilter),
  );
  return out.length ? out : undefined;
}

function BenefitList() {
  const params = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const prefs = usePreferences();
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "f") {
        e.preventDefault();
        searchRef.current?.focus();
        searchRef.current?.select();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const update = (patch: Partial<SearchParams>) => {
    navigate({
      resetScroll: false,
      search: (prev) => {
        const next = { ...prev, ...patch } as SearchParams;
        (Object.keys(next) as (keyof SearchParams)[]).forEach((k) => {
          const v = next[k];
          if (
            v === undefined ||
            v === "" ||
            (Array.isArray(v) && v.length === 0)
          )
            delete next[k];
        });
        return next;
      },
    });
  };

  const toggle = (key: "gesetz" | "when" | "who", value: string) => {
    const curr = new Set(params[key] ?? []);
    if (curr.has(value)) curr.delete(value);
    else curr.add(value);
    update({ [key]: [...curr] });
  };

  const toggleRank = (value: RankFilter) => {
    const curr = new Set(params.rank ?? []);
    if (curr.has(value)) curr.delete(value);
    else curr.add(value);
    update({ rank: [...curr] as RankFilter[] });
  };

  const filtered = useMemo(() => {
    let pool = benefits;
    if (params.id?.length) pool = pool.filter((b) => params.id!.includes(b.id));
    const q = params.q?.trim().toLowerCase();
    if (q)
      pool = pool.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.summary.toLowerCase().includes(q),
      );
    if (params.gesetz?.length)
      pool = pool.filter((b) => params.gesetz!.includes(b.gesetz));
    if (params.themenfeld?.length)
      pool = pool.filter((b) =>
        b.themenfelder.some((t) => params.themenfeld!.includes(t)),
      );
    // WHEN first (situation-led), then WHO. `alle` always passes the WHO
    // filter — those benefits need no audience question (docs/tagging-model.md).
    if (params.when?.length)
      pool = pool.filter((b) => params.when!.includes(b.when));
    if (params.who?.length)
      pool = pool.filter(
        (b) => b.who === "alle" || params.who!.includes(b.who),
      );
    if (params.bookmarked) pool = pool.filter((b) => prefs.bookmarks[b.id]);
    if (params.rank?.length) {
      const wanted = new Set(params.rank);
      pool = pool.filter((b) => wanted.has(prefs.ranks[b.id] ?? "undefined"));
    }
    return [...pool].sort((a, b) => {
      const ra = prefs.ranks[a.id] ?? "undefined";
      const rb = prefs.ranks[b.id] ?? "undefined";
      return (
        RANK_ORDER[ra] - RANK_ORDER[rb] || a.title.localeCompare(b.title, "de")
      );
    });
  }, [params, prefs]);

  const hasFilters =
    !!params.q ||
    !!params.gesetz?.length ||
    !!params.themenfeld?.length ||
    !!params.when?.length ||
    !!params.who?.length ||
    !!params.id?.length ||
    !!params.bookmarked ||
    !!params.rank?.length;

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <section className="space-y-3">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">
          Deutsche Sozialleistungen
        </p>
        <h1 className="text-3xl font-semibold tracking-tight max-w-2xl">
          Leistungen
        </h1>
        <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
          {benefits.length} eigenständige Leistungen, zusammengefasst aus{" "}
          {leistungen.length}{" "}
          <Link
            to="/paragraph"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            Rechtsnormen
          </Link>
          . Eine Leistung bündelt oft mehrere Paragraphen — Höhe, Freibeträge,
          Verfahren.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <div className="relative">
          <SearchIcon
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
            strokeWidth={1.5}
          />
          <input
            ref={searchRef}
            type="text"
            value={params.q ?? ""}
            onChange={(e) => update({ q: e.target.value })}
            onKeyDown={(e) => {
              if (e.key === "Enter" && filtered.length > 0) {
                navigate({
                  to: "/leistungen/$benefitId",
                  params: { benefitId: filtered[0].id },
                });
              }
            }}
            placeholder="Leistung suchen …"
            className="w-full rounded-md border bg-card pl-9 pr-3 py-2.5 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <FilterDropdown
            label="Lebenslage"
            options={facets.when}
            selected={params.when ?? []}
            onToggle={(v) => toggle("when", v)}
            renderOption={(opt) => lebenslageLabel(opt)}
          />
          <FilterDropdown
            label="Zielgruppe"
            options={facets.who}
            selected={params.who ?? []}
            onToggle={(v) => toggle("who", v)}
            renderOption={(opt) => whoLabel(opt)}
          />
          <FilterDropdown
            label="Gesetz"
            options={facets.gesetze}
            selected={params.gesetz ?? []}
            onToggle={(v) => toggle("gesetz", v)}
          />
          <FilterDropdown
            label="Bewertung"
            options={RANK_FILTER_OPTIONS}
            selected={params.rank ?? []}
            onToggle={(v) => toggleRank(v as RankFilter)}
            renderOption={(opt) => rankLabels[opt as RankFilter]}
          />
          <button
            type="button"
            onClick={() =>
              update({ bookmarked: params.bookmarked ? undefined : true })
            }
            aria-pressed={!!params.bookmarked}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-xs transition-colors",
              params.bookmarked
                ? "bg-primary/10 border-primary/30 text-primary"
                : "bg-card hover:bg-muted text-foreground",
            )}
          >
            <Bookmark
              className="h-3 w-3"
              strokeWidth={1.5}
              fill={params.bookmarked ? "currentColor" : "none"}
            />
            Gemerkt
          </button>
          {hasFilters && (
            <button
              type="button"
              onClick={() => navigate({ search: {} })}
              className="inline-flex items-center gap-1 rounded-md border bg-card px-3 py-2 text-xs text-muted-foreground hover:bg-muted transition-colors"
            >
              <X className="h-3 w-3" strokeWidth={1.5} />
              Zurücksetzen
            </button>
          )}
          <p className="ml-auto text-xs text-muted-foreground">
            {filtered.length} von {benefits.length}
          </p>
        </div>
      </section>

      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
        {filtered.map((b) => {
          const rank = prefs.ranks[b.id];
          const bookmarked = !!prefs.bookmarks[b.id];
          return (
            <li key={b.id}>
              <Link
                to="/leistungen/$benefitId"
                params={{ benefitId: b.id }}
                className="flex h-full flex-col rounded-lg border bg-card p-4 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex items-start gap-2 min-w-0">
                    <span className="text-sm font-medium leading-snug">
                      {b.title}
                    </span>
                  </span>
                  <span className="flex shrink-0 items-center gap-1.5">
                    {rank === "keep" && (
                      <ThumbsUp
                        className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400"
                        strokeWidth={1.5}
                      />
                    )}
                    {rank === "drop" && (
                      <ThumbsDown
                        className="h-3.5 w-3.5 text-rose-600 dark:text-rose-400"
                        strokeWidth={1.5}
                      />
                    )}
                    {bookmarked && (
                      <Bookmark
                        className="h-3.5 w-3.5 text-primary"
                        strokeWidth={1.5}
                        fill="currentColor"
                      />
                    )}
                  </span>
                </div>
                {b.summary && (
                  <p className="mt-1.5 line-clamp-2 text-xs text-muted-foreground leading-relaxed">
                    {b.summary}
                  </p>
                )}
                <div className="mt-3 flex flex-wrap items-center gap-1.5">
                  <Tag variant="primary">{lebenslageLabel(b.when)}</Tag>
                  {b.who !== "alle" && (
                    <Tag variant="muted">{whoLabel(b.who)}</Tag>
                  )}
                  <Tag style={gesetzStyle(b.gesetz)}>{b.gesetz}</Tag>
                  <span className="ml-auto text-[10px] text-muted-foreground">
                    {b.normCount}{" "}
                    {b.normCount === 1 ? "Rechtsnorm" : "Rechtsnormen"}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Keine Treffer. Filter anpassen oder zurücksetzen.
        </p>
      )}
    </div>
  );
}
