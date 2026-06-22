import type { CSSProperties } from "react";

// One friendly, distinct hue per law book. Each tag gets a soft tinted
// background with readable darker text — the same approachable style as the
// themenfeld tags. Hues are spaced 15° apart so every law book is visually
// separable; the frequently-compared SGB books are spread the farthest (≥30°).
const HUE: Record<string, number> = {
  "SGB II": 0,
  BeamtVG: 15,
  "SGB III": 30,
  EStG: 45,
  BAföG: 60,
  "SGB V": 75,
  AFBG: 90,
  "SGB VI": 105,
  BEEG: 120,
  BKGG: 135,
  "SGB VII": 150,
  MuSchG: 165,
  "SGB VIII": 180,
  FPfZG: 195,
  "SGB IX": 210,
  UhVorschG: 225,
  WoGG: 240,
  "SGB XI": 255,
  AsylbLG: 270,
  "SGB XII": 285,
  ZPO: 300,
  FamFG: 315,
  "SGB XIV": 330,
  BerHG: 345,
};

// Neutral tint for any law book without an assigned hue.
const FALLBACK: CSSProperties = {
  backgroundColor: "oklch(0.94 0.01 0)",
  color: "oklch(0.40 0.01 0)",
};

/** Background + text color for a law-book tag, keyed by its code (e.g. "SGB V"). */
export function gesetzStyle(code: string): CSSProperties {
  const h = HUE[code];
  if (h === undefined) return FALLBACK;
  return {
    backgroundColor: `oklch(0.94 0.06 ${h})`,
    color: `oklch(0.42 0.13 ${h})`,
  };
}
