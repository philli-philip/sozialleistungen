import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo } from "react";
import { ChevronDown, Search as SearchIcon, X } from "lucide-react";
import { facets, leistungen } from "@/lib/data";
import { search } from "@/lib/search";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { themenfeldStyle } from "@/lib/themenfeld-colors";

type SearchParams = {
  q?: string;
  gesetz?: string[];
  themenfeld?: string[];
  zielgruppe?: string[];
};

export const Route = createFileRoute("/")({
  validateSearch: (s: Record<string, unknown>): SearchParams => ({
    q: typeof s.q === "string" ? s.q : undefined,
    gesetz: arr(s.gesetz),
    themenfeld: arr(s.themenfeld),
    zielgruppe: arr(s.zielgruppe),
  }),
  component: Home,
});

function arr(v: unknown): string[] | undefined {
  if (Array.isArray(v)) return v.filter((x) => typeof x === "string");
  if (typeof v === "string") return [v];
  return undefined;
}

function Home() {
  const params = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  const update = (patch: Partial<SearchParams>) => {
    navigate({
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
        l.zielgruppen?.some((z) => params.zielgruppe!.includes(z)),
      );
    return pool;
  }, [params]);

  const hasFilters =
    !!params.q ||
    !!params.gesetz?.length ||
    !!params.themenfeld?.length ||
    !!params.zielgruppe?.length;

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
            onClear={() => update({ gesetz: [] })}
          />
          <FilterDropdown
            label="Themenfeld"
            options={facets.themenfelder}
            selected={params.themenfeld ?? []}
            onToggle={(v) => toggle("themenfeld", v)}
            onClear={() => update({ themenfeld: [] })}
          />
          <FilterDropdown
            label="Zielgruppe"
            options={facets.zielgruppen}
            selected={params.zielgruppe ?? []}
            onToggle={(v) => toggle("zielgruppe", v)}
            onClear={() => update({ zielgruppe: [] })}
          />
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
        {filtered.slice(0, 200).map((l) => (
          <li key={l.id}>
            <Link
              to="/leistungen/$id"
              params={{ id: l.id }}
              className="block rounded-lg border bg-card p-4 hover:bg-muted/50 transition-colors"
            >
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
                <p className="mt-2 text-sm leading-relaxed">{l.leistung}</p>
              )}

              {(l.themenfelder?.length || l.zielgruppen?.length) && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <Tag variant="muted">{l.gesetz}</Tag>
                  {l.themenfelder?.map((t) => (
                    <Tag key={t} style={themenfeldStyle(t)}>
                      {t}
                    </Tag>
                  ))}
                  {l.zielgruppen?.map((z) => (
                    <Tag key={z} variant="muted">
                      {z}
                    </Tag>
                  ))}
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
      {filtered.length > 200 && (
        <p className="mt-4 text-xs text-muted-foreground">
          Zeige die ersten 200. Filter verfeinern, um mehr zu sehen.
        </p>
      )}
      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Keine Treffer. Filter anpassen oder zurücksetzen.
        </p>
      )}
    </div>
  );
}

function FilterDropdown({
  label,
  options,
  selected,
  onToggle,
  onClear,
}: {
  label: string;
  options: string[];
  selected: string[];
  onToggle: (v: string) => void;
  onClear: () => void;
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
                  {opt}
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
