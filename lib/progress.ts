// Progress persistence (localStorage). All functions are safe to call on the
// server (they no-op / return empty data when window is unavailable).

import { useSyncExternalStore } from "react";

export interface Attempt {
  date: number;
  correct: number;
  total: number;
  /** Per-question correctness, newest schema. Old localStorage entries may omit it. */
  outcomes?: boolean[];
  /** Stable question/Q&A ids aligned with outcomes when available. */
  itemIds?: string[];
  /**
   * Quiz-run id. Answers recorded one at a time during a practice run append to
   * the attempt carrying the same session id, so an incrementally recorded run
   * is still a single attempt. Absent on older entries and on aggregate writes.
   */
  session?: string;
}

export interface TopicProgress {
  attempts: Attempt[];
  lessonRead?: boolean;
  solvedIds?: string[];
}

/**
 * One item's spaced-repetition state. Entries are created *only* by
 * `scheduleReview` (lib/review.ts) when a question is actually graded, so an
 * item you have never answered has no entry and can never be "due".
 *
 * The scheduling policy (ladder, retirement, lapses) lives in lib/review.ts.
 * This file only owns the storage shape and its sanitisation.
 */
export interface ReviewEntry {
  /** Topic id the item belongs to, so a queue can be built without the bank. */
  topic: string;
  /** Epoch ms at which the item becomes due. */
  due: number;
  /** Current spacing, in days. */
  interval: number;
  /** Consecutive correct answers. Reset to 0 by a miss. */
  reps: number;
  /** Times this item has been answered wrong. Never decreases. */
  lapses: number;
  /** Reviews answered correctly at or after their due date — real intervals survived. */
  survived: number;
  /** Epoch ms of the last graded answer. */
  last: number;
  /** Recalled often enough to stop being scheduled. A miss clears it. */
  retired?: boolean;
}

export interface ProgressData {
  topics: Record<string, TopicProgress>;
  /**
   * Spaced-repetition schedule keyed by item id. Added after the v1 shape, so
   * it is optional: progress saved before reviews existed loads unchanged.
   */
  reviews?: Record<string, ReviewEntry>;
  /**
   * Bookmarked item id -> topic id. Also added after v1, also optional.
   * A map (not an array) so a toggle is O(1) and duplicates are impossible.
   */
  bookmarks?: Record<string, string>;
}

const KEY = "mechprep.v1";
/** Attempts kept per topic; the oldest are dropped past this. */
const MAX_ATTEMPTS = 50;
/** Attempts kept per topic when retrying a write that hit the storage quota. */
const RETRY_KEEP_ATTEMPTS = 5;
/**
 * Reviews and bookmarks grow one entry per *distinct question touched*, and the
 * bank holds ~1,400 of them, so both need a ceiling. At ~150 bytes an entry the
 * caps below are ~110 KB and ~25 KB — comfortable inside a 5 MB origin quota
 * next to the attempt log, and small enough that a quota retry has room to work.
 */
const MAX_REVIEWS = 750;
const RETRY_KEEP_REVIEWS = 150;
const MAX_BOOKMARKS = 500;
const RETRY_KEEP_BOOKMARKS = 50;
/** Sanitisation bounds. 2100-01-01, and ten years of spacing. */
const MAX_EPOCH = 4_102_444_800_000;
const MAX_INTERVAL_DAYS = 3650;

const STORAGE_ERROR_MESSAGE =
  "This browser would not let the app save to local storage (it is full, or " +
  "storage is disabled — private browsing is the usual cause). Your results " +
  "are kept for this session only and will be lost when you close the tab.";

/**
 * Set when a write failed. While it is set, `memoryOnly` — not localStorage —
 * is the authoritative progress for this session, so a failed write never
 * silently reverts the UI to the pre-quiz state.
 */
let memoryOnly: ProgressData | null = null;
let storageError: string | null = null;

/** The last persistence failure, or null. Rendered by the quiz results screen. */
export function progressError(): string | null {
  return storageError;
}

export function getProgress(): ProgressData {
  if (typeof window === "undefined") return { topics: {} };
  // sanitizeProgress deep-copies, so callers can mutate the result freely
  // without touching the snapshot the UI is currently rendering.
  if (memoryOnly) return sanitizeProgress(memoryOnly);
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return { topics: {} };
    return sanitizeProgress(JSON.parse(raw));
  } catch {
    return { topics: {} };
  }
}

function sanitizeAttempt(value: unknown): Attempt | null {
  if (!value || typeof value !== "object") return null;
  const attempt = value as Partial<Attempt>;
  const total = Number(attempt.total);
  const rawCorrect = Number(attempt.correct);
  if (!Number.isFinite(total) || total <= 0) return null;
  if (!Number.isFinite(rawCorrect)) return null;

  const normalizedTotal = Math.floor(total);
  const normalizedCorrect = Math.max(0, Math.min(normalizedTotal, Math.round(rawCorrect)));
  const date = Number.isFinite(attempt.date) ? Number(attempt.date) : 0;
  const outcomes = Array.isArray(attempt.outcomes)
    ? attempt.outcomes.slice(0, normalizedTotal).map(Boolean)
    : undefined;
  const itemIds = Array.isArray(attempt.itemIds)
    ? attempt.itemIds
        .slice(0, outcomes?.length ?? normalizedTotal)
        .map((id) => (typeof id === "string" ? id : ""))
    : undefined;

  return {
    date,
    correct: outcomes ? outcomes.filter(Boolean).length : normalizedCorrect,
    total: outcomes ? outcomes.length : normalizedTotal,
    outcomes,
    ...(itemIds?.length ? { itemIds } : {}),
    ...(typeof attempt.session === "string" && attempt.session
      ? { session: attempt.session }
      : {}),
  };
}

/** Clamp an unknown into a finite number inside [min, max], or fall back. */
function boundedNumber(value: unknown, min: number, max: number, fallback: number): number {
  const n = Number(value);
  if (!Number.isFinite(n)) return fallback;
  return Math.min(max, Math.max(min, n));
}

function sanitizeReview(value: unknown): ReviewEntry | null {
  if (!value || typeof value !== "object") return null;
  const entry = value as Partial<ReviewEntry>;
  // The topic is what lets the queue name an item without loading the bank; an
  // entry that lost it is unusable, so it is dropped rather than guessed at.
  if (typeof entry.topic !== "string" || entry.topic === "") return null;
  const last = boundedNumber(entry.last, 0, MAX_EPOCH, 0);
  return {
    topic: entry.topic,
    due: boundedNumber(entry.due, 0, MAX_EPOCH, last),
    interval: boundedNumber(entry.interval, 0, MAX_INTERVAL_DAYS, 1),
    reps: Math.floor(boundedNumber(entry.reps, 0, 9999, 0)),
    lapses: Math.floor(boundedNumber(entry.lapses, 0, 9999, 0)),
    survived: Math.floor(boundedNumber(entry.survived, 0, 9999, 0)),
    last,
    ...(entry.retired ? { retired: true } : {}),
  };
}

/**
 * Keep the `keep` most useful review entries.
 *
 * Value order: still scheduled beats retired (a retired item is one you have
 * demonstrably learned, so losing its record costs the least); then more lapses
 * (the questions that keep catching you out are the whole point); then the
 * soonest due. Dropping an entry only forgets a schedule — the attempt log that
 * mastery is computed from is untouched.
 */
function pruneReviews(
  reviews: Record<string, ReviewEntry>,
  keep: number
): Record<string, ReviewEntry> {
  const ids = Object.keys(reviews);
  if (ids.length <= keep) return reviews;
  ids.sort((a, b) => {
    const x = reviews[a];
    const y = reviews[b];
    if (!!x.retired !== !!y.retired) return x.retired ? 1 : -1;
    if (x.lapses !== y.lapses) return y.lapses - x.lapses;
    return x.due - y.due;
  });
  const out: Record<string, ReviewEntry> = {};
  for (const id of ids.slice(0, keep)) out[id] = reviews[id];
  return out;
}

function sanitizeReviews(value: unknown, keep: number): Record<string, ReviewEntry> {
  if (!value || typeof value !== "object") return {};
  const out: Record<string, ReviewEntry> = {};
  for (const [id, raw] of Object.entries(value as Record<string, unknown>)) {
    if (!id) continue;
    const entry = sanitizeReview(raw);
    if (entry) out[id] = entry;
  }
  return pruneReviews(out, keep);
}

/** Bookmarks are insertion-ordered, so an overflow drops the oldest flags. */
function sanitizeBookmarks(value: unknown, keep: number): Record<string, string> {
  if (!value || typeof value !== "object") return {};
  const pairs: [string, string][] = [];
  for (const [itemId, topicId] of Object.entries(value as Record<string, unknown>)) {
    if (!itemId || typeof topicId !== "string" || topicId === "") continue;
    pairs.push([itemId, topicId]);
  }
  return Object.fromEntries(pairs.slice(-keep));
}

function sanitizeProgress(
  value: unknown,
  limits: { reviews: number; bookmarks: number } = {
    reviews: MAX_REVIEWS,
    bookmarks: MAX_BOOKMARKS,
  }
): ProgressData {
  if (!value || typeof value !== "object") return { topics: {} };
  const maybe = value as { topics?: unknown; reviews?: unknown; bookmarks?: unknown };
  // `reviews` and `bookmarks` live beside `topics`, so a document whose topics
  // map is missing or corrupt must not take them down with it.
  const reviews = sanitizeReviews(maybe.reviews, limits.reviews);
  const bookmarks = sanitizeBookmarks(maybe.bookmarks, limits.bookmarks);
  // Empty maps are omitted rather than stored as `{}`: it keeps the payload
  // byte-identical to the pre-review shape for users who have never reviewed.
  const extras = {
    ...(Object.keys(reviews).length ? { reviews } : {}),
    ...(Object.keys(bookmarks).length ? { bookmarks } : {}),
  };
  if (!maybe.topics || typeof maybe.topics !== "object") return { topics: {}, ...extras };

  const topics: Record<string, TopicProgress> = {};
  for (const [topicId, rawTopic] of Object.entries(maybe.topics as Record<string, unknown>)) {
    if (!rawTopic || typeof rawTopic !== "object") continue;
    const topic = rawTopic as Partial<TopicProgress>;
    const attempts = Array.isArray(topic.attempts)
      ? topic.attempts.map(sanitizeAttempt).filter((a): a is Attempt => a !== null)
      : [];
    const solvedIds = Array.isArray(topic.solvedIds)
      ? Array.from(
          new Set(
            topic.solvedIds.filter(
              (id): id is string => typeof id === "string" && id.length > 0
            )
          )
        )
      : [];
    topics[topicId] = {
      attempts,
      ...(topic.lessonRead ? { lessonRead: true } : {}),
      ...(solvedIds.length ? { solvedIds } : {}),
    };
  }
  return { topics, ...extras };
}

function persist(clean: ProgressData): boolean {
  try {
    const raw = JSON.stringify(clean);
    window.localStorage.setItem(KEY, raw);
    snapCache = { raw, data: clean };
    return true;
  } catch {
    return false;
  }
}

/**
 * Same data with only the most recent attempts per topic, and the schedule and
 * bookmarks cut back to their most valuable entries, to shed bulk.
 */
function trimmedForRetry(data: ProgressData): ProgressData {
  const topics: Record<string, TopicProgress> = {};
  for (const [id, topic] of Object.entries(data.topics)) {
    topics[id] = { ...topic, attempts: topic.attempts.slice(-RETRY_KEEP_ATTEMPTS) };
  }
  return sanitizeProgress(
    { ...data, topics },
    { reviews: RETRY_KEEP_REVIEWS, bookmarks: RETRY_KEEP_BOOKMARKS }
  );
}

/**
 * Persist progress. Returns false if it could not be written.
 *
 * A failed write used to be swallowed: `snapCache` kept the stale value,
 * subscribers were notified anyway, and the UI silently reverted to the
 * pre-quiz state. Now a failure (quota exceeded, Safari private browsing,
 * storage disabled) keeps the new data in memory as the authoritative snapshot
 * for the rest of the session and records an error the UI can render.
 */
function save(data: ProgressData): boolean {
  if (typeof window === "undefined") return false;
  const clean = sanitizeProgress(data);
  let ok = persist(clean);
  if (!ok) ok = persist(trimmedForRetry(clean));
  if (ok) {
    memoryOnly = null;
    storageError = null;
  } else {
    memoryOnly = clean;
    snapCache = null;
    storageError = STORAGE_ERROR_MESSAGE;
  }
  notifyProgress();
  return ok;
}

// ---- reactive read (useSyncExternalStore) ----

const EMPTY: ProgressData = { topics: {} };
let snapCache: { raw: string | null; data: ProgressData } | null = null;
const listeners = new Set<() => void>();

function notifyProgress() {
  for (const l of listeners) l();
}

function readSnapshot(): ProgressData {
  if (typeof window === "undefined") return EMPTY;
  // Persistence failed at some point this session: the in-memory copy is the
  // authoritative one, and it is a stable reference between writes (which is
  // what useSyncExternalStore requires).
  if (memoryOnly) return memoryOnly;
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(KEY);
  } catch {
    return EMPTY;
  }
  if (raw === null) return EMPTY;
  if (snapCache && snapCache.raw === raw) return snapCache.data;
  let data: ProgressData;
  try {
    data = sanitizeProgress(JSON.parse(raw));
  } catch {
    data = EMPTY;
  }
  snapCache = { raw, data };
  return data;
}

function subscribeProgress(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}

/** Reactive progress for client components; null during SSR/hydration. */
export function useProgress(): ProgressData | null {
  return useSyncExternalStore(subscribeProgress, readSnapshot, () => null);
}

function topicEntry(data: ProgressData, topicId: string): TopicProgress {
  const existing = data.topics[topicId];
  if (existing) return existing;
  const fresh: TopicProgress = { attempts: [] };
  data.topics[topicId] = fresh;
  return fresh;
}

function markSolved(entry: TopicProgress, itemId: string) {
  const solved = new Set(entry.solvedIds ?? []);
  solved.add(itemId);
  entry.solvedIds = Array.from(solved);
}

/** One graded question, for `recordAnswers`. */
export interface GradedItem {
  topicId: string;
  itemId: string;
  correct: boolean;
}

/**
 * Append graded questions to the attempt identified by `sessionId` — one
 * attempt per topic per quiz run — creating that attempt on first use.
 *
 * This is what makes incremental recording safe: it is idempotent per
 * (session, item), so recording a practice answer the moment it is checked and
 * then recording the leftovers when the run finishes cannot double-count, and
 * neither can a StrictMode double-invoked effect. Returns false if the results
 * could not be persisted (see `progressError`).
 */
export function recordAnswers(sessionId: string, items: GradedItem[]): boolean {
  if (!sessionId || items.length === 0) return true;
  const data = getProgress();
  let changed = false;
  for (const item of items) {
    if (!item?.topicId || !item.itemId) continue;
    const entry = topicEntry(data, item.topicId);
    let attempt = entry.attempts.find((a) => a.session === sessionId);
    if (!attempt) {
      attempt = { date: Date.now(), correct: 0, total: 0, outcomes: [], itemIds: [], session: sessionId };
      entry.attempts.push(attempt);
    }
    const outcomes = (attempt.outcomes ??= []);
    const itemIds = (attempt.itemIds ??= []);
    if (itemIds.includes(item.itemId)) continue; // already recorded in this run
    outcomes.push(item.correct);
    itemIds.push(item.itemId);
    attempt.total = outcomes.length;
    attempt.correct = outcomes.filter(Boolean).length;
    attempt.date = Date.now();
    if (item.correct) markSolved(entry, item.itemId);
    if (entry.attempts.length > MAX_ATTEMPTS) {
      entry.attempts = entry.attempts.slice(-MAX_ATTEMPTS);
    }
    changed = true;
  }
  if (!changed) return true;
  return save(data);
}

/**
 * Record per-topic results of a quiz in aggregate (a mixed test calls this once
 * per topic). Returns false if the results could not be persisted.
 */
export function recordAttempt(
  topicId: string,
  correct: number,
  total: number,
  outcomes?: boolean[],
  itemIds?: string[]
): boolean {
  if (total <= 0) return false;
  const data = getProgress();
  const entry = topicEntry(data, topicId);
  const normalizedOutcomes = outcomes?.slice(0, total).map(Boolean);
  const normalizedItemIds =
    itemIds
      ?.slice(0, normalizedOutcomes?.length ?? total)
      .map((id) => (typeof id === "string" ? id : ""))
      ?? undefined;
  entry.attempts.push({
    date: Date.now(),
    correct: normalizedOutcomes ? normalizedOutcomes.filter(Boolean).length : correct,
    total: normalizedOutcomes ? normalizedOutcomes.length : total,
    ...(normalizedOutcomes ? { outcomes: normalizedOutcomes } : {}),
    ...(normalizedItemIds?.some(Boolean) ? { itemIds: normalizedItemIds } : {}),
  });
  if (normalizedOutcomes?.length && normalizedItemIds?.length) {
    normalizedOutcomes.forEach((ok, i) => {
      const id = normalizedItemIds[i];
      if (ok && id) markSolved(entry, id);
    });
  }
  if (entry.attempts.length > MAX_ATTEMPTS) {
    entry.attempts = entry.attempts.slice(-MAX_ATTEMPTS);
  }
  return save(data);
}

export function markLessonRead(topicId: string): boolean {
  const data = getProgress();
  topicEntry(data, topicId).lessonRead = true;
  return save(data);
}

/**
 * Read–modify–write the stored progress document.
 *
 * `mutate` gets the private deep copy `getProgress` already makes, and returns
 * whether it changed anything (returning false skips the write entirely). This
 * exists so sibling modules — `lib/review.ts` owns the scheduling policy, not
 * the storage — can extend the same document without re-implementing the
 * quota retry, the memory-only fallback, or the subscriber notification in
 * `save`. Returns false when the change could not be persisted.
 */
export function updateProgress(mutate: (data: ProgressData) => boolean): boolean {
  const data = getProgress();
  if (!mutate(data)) return true;
  return save(data);
}

// ---- bookmarks ----

/**
 * Flag or unflag an item for later. Returns false if the change could not be
 * persisted (see `progressError`) — same discipline as every other write here.
 */
export function toggleBookmark(itemId: string, topicId: string): boolean {
  if (!itemId || !topicId) return true;
  return updateProgress((data) => {
    const marks = (data.bookmarks ??= {});
    if (marks[itemId]) delete marks[itemId];
    // Re-inserting moves the key to the end of the insertion order, which is
    // what the overflow trim treats as "newest".
    else marks[itemId] = topicId;
    return true;
  });
}

export function isBookmarked(itemId: string, data?: ProgressData): boolean {
  if (!itemId) return false;
  const d = data ?? getProgress();
  return typeof d.bookmarks?.[itemId] === "string";
}

/** Bookmarked item ids, oldest flag first. */
export function bookmarkedIds(data?: ProgressData): string[] {
  const d = data ?? getProgress();
  return d.bookmarks ? Object.keys(d.bookmarks) : [];
}

/** Topic id an item was bookmarked under, or null. */
export function bookmarkTopic(itemId: string, data?: ProgressData): string | null {
  const d = data ?? getProgress();
  return d.bookmarks?.[itemId] ?? null;
}

/**
 * Mastery = accuracy over the most recent answered questions (up to 30),
 * or null if the topic has never been practiced.
 */
export function masteryFor(topicId: string, data?: ProgressData): number | null {
  const d = data ?? getProgress();
  const entry = d.topics[topicId];
  if (!entry || entry.attempts.length === 0) return null;
  let correct = 0;
  let total = 0;
  for (let i = entry.attempts.length - 1; i >= 0 && total < 30; i--) {
    const attempt = entry.attempts[i];
    if (!attempt || attempt.total <= 0) continue;
    if (attempt.outcomes?.length) {
      for (let j = attempt.outcomes.length - 1; j >= 0 && total < 30; j--) {
        total++;
        if (attempt.outcomes[j]) correct++;
      }
    } else {
      const remaining = 30 - total;
      const taken = Math.min(remaining, attempt.total);
      // Legacy aggregate attempts do not know question order. Use their aggregate
      // accuracy proportionally so old progress remains usable without pretending
      // to recover per-question history.
      correct += (attempt.correct / attempt.total) * taken;
      total += taken;
    }
  }
  return total === 0 ? null : correct / total;
}

export function lessonRead(topicId: string, data?: ProgressData): boolean {
  const d = data ?? getProgress();
  return !!d.topics[topicId]?.lessonRead;
}

export function solvedItemIds(topicId: string, data?: ProgressData): Set<string> {
  const d = data ?? getProgress();
  return new Set(d.topics[topicId]?.solvedIds ?? []);
}

export function overallStats(data?: ProgressData): {
  answered: number;
  correct: number;
  topicsPracticed: number;
} {
  const d = data ?? getProgress();
  let answered = 0;
  let correct = 0;
  let topicsPracticed = 0;
  for (const t of Object.values(d.topics)) {
    if (t.attempts.length > 0) topicsPracticed++;
    for (const a of t.attempts) {
      answered += a.total;
      correct += a.correct;
    }
  }
  return { answered, correct, topicsPracticed };
}

export function resetProgress() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    // nothing to remove if storage is unavailable
  }
  snapCache = null;
  memoryOnly = null;
  storageError = null;
  notifyProgress();
}
