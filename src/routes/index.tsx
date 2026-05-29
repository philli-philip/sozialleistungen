import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo } from "react";
import {
  Bookmark,
  ChevronDown,
  Search as SearchIcon,
  ThumbsDown,
  ThumbsUp,
  X,
} from "lucide-react";
import { facets, leistungen } from "@/lib/data";
import { search } from "@/lib/search";
import { cn } from "@/lib/utils";
import { zielgruppeLabel } from "@/data/zielgruppen";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { themenfeldStyle } from "@/lib/themenfeld-colors";
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
  themenfeld?: string[];
  zielgruppe?: string[];
  bookmarked?: true;
  rank?: RankFilter[];
};

const RANK_FILTER_OPTIONS: RankFilter[] = ["keep", "undefined", "drop"];

export const Route = createFileRoute("/")({
  validateSearch: (s: Record<string, unknown>): SearchParams => ({
    q: typeof s.q === "string" ? s.q : undefined,
    gesetz: arr(s.gesetz),
    themenfeld: arr(s.themenfeld),
    zielgruppe: arr(s.zielgruppe),
    bookmarked:
      s.bookmarked === true || s.bookmarked === "true" ? true : undefined,
    rank: rankArr(s.rank),
  }),
  component: Home,
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

function Home() {
  const params = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const prefs = usePreferences();

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

  const toggle = (
    key: "gesetz" | "themenfeld" | "zielgruppe",
    value: string,
  ) => {
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
    let pool = leistungen;
    if (params.q && params.q.trim()) {
      const hits = new Set(search.search(params.q).map((r) => r.id as string));
      pool = pool.filter((l) => hits.has(l.id));
    }
    if (params.gesetz?.length)
      pool = pool.filter((l) => params.gesetz!.includes(l.gesetz));
    if (params.themenfeld?.length)
      pool = pool.filter((l) =>
        l.themenfelder?.some((t) => params.themenfeld!.includes(t)),
      );
    if (params.zielgruppe?.length)
      pool = pool.filter((l) =>
        l.annotation?.zielgruppen?.some((z) => params.zielgruppe!.includes(z)),
      );
    if (params.bookmarked) pool = pool.filter((l) => prefs.bookmarks[l.id]);
    if (params.rank?.length) {
      const wanted = new Set(params.rank);
      pool = pool.filter((l) => wanted.has(prefs.ranks[l.id] ?? "undefined"));
    }
    const ranked = [...pool].sort((a, b) => {
      const ra = prefs.ranks[a.id] ?? "undefined";
      const rb = prefs.ranks[b.id] ?? "undefined";
      return RANK_ORDER[ra] - RANK_ORDER[rb];
    });
    return ranked;
  }, [params, prefs]);

  const hasFilters =
    !!params.q ||
    !!params.gesetz?.length ||
    !!params.themenfeld?.length ||
    !!params.zielgruppe?.length ||
    !!params.bookmarked ||
    !!params.rank?.length;

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <section className="space-y-3">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">
          Deutsche Sozialleistungen
        </p>
        <h1 className="text-3xl font-semibold tracking-tight max-w-2xl">
          Gesetzliche Sozialleistungen
        </h1>
        <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
          Basierend auf dem{" "}
          <a href="https://www.ifo.de/datensaetze/gesetze-und-themenfelder">
            Datensatz des ifo-Instituts
          </a>{" "}
          über {facets.gesetze.length} Gesetze und {facets.themenfelder.length}{" "}
          Themenfelder.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <div className="relative">
          <SearchIcon
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
            strokeWidth={1.5}
          />
          <input
            type="text"
            value={params.q ?? ""}
            onChange={(e) => update({ q: e.target.value })}
            placeholder="Suche nach Leistung, Rechtsnorm …"
            className="w-full rounded-md border bg-card pl-9 pr-3 py-2.5 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <FilterDropdown
            label="Gesetz"
            options={facets.gesetze}
            selected={params.gesetz ?? []}
            onToggle={(v) => toggle("gesetz", v)}
          />
          <FilterDropdown
            label="Themenfeld"
            options={facets.themenfelder}
            selected={params.themenfeld ?? []}
            onToggle={(v) => toggle("themenfeld", v)}
          />
          <FilterDropdown
            label="Zielgruppe"
            options={facets.zielgruppenTags}
            selected={params.zielgruppe ?? []}
            onToggle={(v) => toggle("zielgruppe", v)}
            renderOption={(opt) => zielgruppeLabel(opt)}
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
            {filtered.length} von {leistungen.length}
          </p>
        </div>
      </section>

      <ul className="mt-6 space-y-2">
        {filtered.map((l) => {
          const itemRank = prefs.ranks[l.id];
          const itemBookmarked = !!prefs.bookmarks[l.id];
          return (
            <li key={l.id}>
              <Link
                to="/leistungen/$id"
                params={{ id: l.id }}
                search={{}}
                resetScroll={false}
                className="block rounded-lg border bg-card p-4 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    {l.annotation?.title ? (
                      <>
                        <p className="text-sm font-medium leading-snug">
                          {l.annotation.title}
                        </p>
                        {l.annotation.summary && (
                          <p className="mt-1 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                            {l.annotation.summary}
                          </p>
                        )}
                      </>
                    ) : (
                      <p className="text-sm leading-relaxed">{l.leistung}</p>
                    )}
                  </div>
                  <div className="flex shrink-0 items-center gap-1.5">
                    {itemRank === "keep" && (
                      <ThumbsUp
                        className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400"
                        strokeWidth={1.5}
                      />
                    )}
                    {itemRank === "drop" && (
                      <ThumbsDown
                        className="h-3.5 w-3.5 text-rose-600 dark:text-rose-400"
                        strokeWidth={1.5}
                      />
                    )}
                    {itemBookmarked && (
                      <Bookmark
                        className="h-3.5 w-3.5 text-primary"
                        strokeWidth={1.5}
                        fill="currentColor"
                      />
                    )}
                  </div>
                </div>

                {(l.themenfelder?.length ||
                  l.annotation?.zielgruppen?.length) && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <GesetzTag
                      code={l.gesetz}
                      onOpen={(code) =>
                        navigate({
                          search: (prev) => ({ ...prev, info: code }),
                          resetScroll: false,
                          replace: true,
                        })
                      }
                    />
                    {l.themenfelder?.map((t) => (
                      <Tag key={t} style={themenfeldStyle(t)}>
                        {t}
                      </Tag>
                    ))}
                    {l.annotation?.zielgruppen?.map((z) => (
                      <Tag key={z} variant="muted">
                        {zielgruppeLabel(z)}
                      </Tag>
                    ))}
                  </div>
                )}
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

function GesetzTag({
  code,
  onOpen,
}: {
  code: string;
  onOpen: (code: string) => void;
}) {
  const open = (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onOpen(code);
  };
  return (
    <span
      data-gesetz-tag
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") open(e);
      }}
      className="inline-flex items-center rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {code}
    </span>
  );
}

function FilterDropdown({
  label,
  options,
  selected,
  onToggle,
  renderOption,
}: {
  label: string;
  options: string[];
  selected: string[];
  onToggle: (v: string) => void;
  renderOption?: (opt: string) => React.ReactNode;
}) {
  const count = selected.length;
  return (
    <Popover>
      <PopoverTrigger
        className={cn(
          "inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-xs transition-colors select-none",
          count > 0
            ? "bg-primary/10 border-primary/30 text-primary"
            : "bg-card hover:bg-muted text-foreground",
        )}
      >
        {label}
        {count > 0 && (
          <span className="rounded bg-primary text-primary-foreground px-1 text-[10px] font-medium tabular-nums">
            {count}
          </span>
        )}
        <ChevronDown className="h-3 w-3" strokeWidth={1.5} />
      </PopoverTrigger>
      <PopoverContent>
        <ul>
          {options.map((opt) => {
            const active = selected.includes(opt);
            return (
              <li key={opt}>
                <label
                  className={cn(
                    "flex items-center gap-2 text-xs rounded px-2 py-1.5 cursor-pointer hover:bg-muted",
                    active && "text-primary font-medium",
                  )}
                >
                  <Checkbox
                    checked={active}
                    onCheckedChange={() => onToggle(opt)}
                    className="shadow-none"
                  />
                  {renderOption ? renderOption(opt) : opt}
                </label>
              </li>
            );
          })}
        </ul>
      </PopoverContent>
    </Popover>
  );
}

function Tag({
  children,
  variant = "primary",
  style,
}: {
  children: React.ReactNode;
  variant?: "primary" | "muted";
  style?: React.CSSProperties;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-medium",
        !style &&
          (variant === "primary"
            ? "bg-primary/10 text-primary"
            : "bg-muted text-muted-foreground"),
      )}
      style={style}
    >
      {children}
    </span>
  );
}
