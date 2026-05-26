import type { CSSProperties } from "react";

type ColorPair = { bg: string; fg: string };

const FALLBACK: ColorPair = {
  bg: "oklch(0.94 0.01 0)",
  fg: "oklch(0.35 0.01 0)",
};

const COLORS: Record<string, ColorPair> = {
  "Alter & Rente / Versorgung": {
    bg: "oklch(0.94 0.05 80)",
    fg: "oklch(0.40 0.10 70)",
  },
  "Arbeit & Grundsicherung": {
    bg: "oklch(0.93 0.05 250)",
    fg: "oklch(0.40 0.14 255)",
  },
  "Bildung & Qualifizierung": {
    bg: "oklch(0.93 0.05 295)",
    fg: "oklch(0.42 0.15 295)",
  },
  "Familie & Kinder": {
    bg: "oklch(0.93 0.05 10)",
    fg: "oklch(0.45 0.15 15)",
  },
  "Gesundheit, Pflege & Teilhabe": {
    bg: "oklch(0.93 0.06 150)",
    fg: "oklch(0.40 0.10 150)",
  },
  "Sozialhilfe & besondere Lebenslagen": {
    bg: "oklch(0.93 0.06 50)",
    fg: "oklch(0.45 0.14 45)",
  },
  "Wohnen & Infrastruktur": {
    bg: "oklch(0.93 0.05 200)",
    fg: "oklch(0.40 0.10 200)",
  },
};

export function themenfeldStyle(name: string): CSSProperties {
  const c = COLORS[name] ?? FALLBACK;
  return { backgroundColor: c.bg, color: c.fg };
}
