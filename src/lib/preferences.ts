import { useSyncExternalStore } from "react";

export type Rank = "keep" | "drop";

export const rankLabels: Record<Rank | "undefined", string> = {
  keep: "Wichtig",
  drop: "Überflüssig",
  undefined: "Keine Meinung",
};

type State = {
  bookmarks: Record<string, true>;
  ranks: Record<string, Rank>;
};

const STORAGE_KEY = "sozialleistungen.preferences.v1";

const empty: State = { bookmarks: {}, ranks: {} };

function load(): State {
  if (typeof localStorage === "undefined") return empty;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return empty;
    const parsed = JSON.parse(raw);
    return {
      bookmarks: parsed.bookmarks ?? {},
      ranks: parsed.ranks ?? {},
    };
  } catch {
    return empty;
  }
}

let state: State = load();
const listeners = new Set<() => void>();

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore quota / private mode
  }
}

function emit() {
  for (const l of listeners) l();
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

if (typeof window !== "undefined") {
  window.addEventListener("storage", (e) => {
    if (e.key !== STORAGE_KEY) return;
    state = load();
    emit();
  });
}

export const preferences = {
  toggleBookmark(id: string) {
    const next = { ...state.bookmarks };
    if (next[id]) delete next[id];
    else next[id] = true;
    state = { ...state, bookmarks: next };
    persist();
    emit();
  },
  setRank(id: string, rank: Rank | undefined) {
    const next = { ...state.ranks };
    if (rank) next[id] = rank;
    else delete next[id];
    state = { ...state, ranks: next };
    persist();
    emit();
  },
};

function getSnapshot() {
  return state;
}

function getServerSnapshot() {
  return empty;
}

export function usePreferences() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function useIsBookmarked(id: string) {
  return useSyncExternalStore(
    subscribe,
    () => !!state.bookmarks[id],
    () => false,
  );
}

export function useRank(id: string): Rank | undefined {
  return useSyncExternalStore(
    subscribe,
    () => state.ranks[id],
    () => undefined,
  );
}

export const RANK_ORDER: Record<Rank | "undefined", number> = {
  keep: 0,
  undefined: 1,
  drop: 2,
};
