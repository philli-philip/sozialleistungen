import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ChevronDown, ExternalLink } from "lucide-react";
import { getLeistung } from "@/lib/data";
import { cn } from "@/lib/utils";
import { themenfeldStyle } from "@/lib/themenfeld-colors";

export const Route = createFileRoute("/leistungen/$id")({
  loader: ({ params }) => {
    const l = getLeistung(params.id);
    if (!l) throw notFound();
    return l;
  },
  validateSearch: (search: Record<string, string>) => {
    return {
      ifo: (search.ifo === "hide" ? "hide" : undefined) || undefined,
      res: (search.res === "hide" ? "hide" : undefined) || undefined,
    };
  },
  component: LeistungDetail,
});

function LeistungDetail() {
  const l = Route.useLoaderData();
  const search = Route.useSearch();
  const open = search.ifo === "hide" ? false : true;
  const resourcesOpen = search.res === "hide" ? false : true;
  const resources = l.annotation?.resources ?? [];

  return (
    <div className="mx-auto max-w-5xl px-6 py-10 ">
      <Link
        to="/"
        className="inline-flex rounded items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-3 w-3" strokeWidth={1.5} />
        Zurück zur Liste
      </Link>
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
        search={(prev) => ({ ...prev, ifo: open ? "hide" : "show" })}
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
          res: resourcesOpen ? "hide" : "show",
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
