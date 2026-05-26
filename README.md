# Sozialleistungen

Public, searchable explorer for German social benefits, seeded from the
[ifo-institute/sozialleistungen](https://github.com/ifo-institute/sozialleistungen) dataset.

## Stack

- Vite + React 19 + TypeScript
- TanStack Router / Query / Table
- Tailwind CSS v4 with the philip-theme tokens
- Oxlint + oxfmt
- Deployed as a static site on Render

## Commands

```bash
npm install
npm run data    # fetch upstream YAML, merge with src/data/annotations.ts → src/data/leistungen.json + TODO.md
npm run routes  # generate TanStack route tree
npm run dev     # start dev server
npm run build   # data + routes + tsc + vite build
npm run lint    # oxlint
npm run format  # oxfmt
```

## Deployment

Render reads [render.yaml](render.yaml) and serves `./dist` as a static site. The build step runs `npm run data` (fetch + merge annotations) and `npm run routes` (generate TanStack route tree) before `vite build`.

## Data sources

- Upstream catalog: [ifo-institute/sozialleistungen](https://github.com/ifo-institute/sozialleistungen)
- Hand-curated annotations: [src/data/annotations.ts](src/data/annotations.ts) — schema in [src/data/schema.ts](src/data/schema.ts)
