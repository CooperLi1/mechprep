// Spaced repetition: an SM-2-lite schedule over individual questions.
//
// Policy lives here; storage lives in lib/progress.ts. Everything below is a
// pure function of (previous entry, correctness, now) except the three
// functions that read or write the progress document, which makes the part
// that is invisible for weeks — the arithmetic — directly testable.

import {
  getProgress,
  updateProgress,
  type ProgressData,
  type ReviewEntry,
} from "@/lib/progress";

export const DAY_MS = 86_400_000;

/**
 * Spacing ladder in days, indexed by the number of consecutive correct answers.
 * Past the end of the ladder the interval grows x2.5.
 *
 * 1 -> 3 -> 7 -> 16 -> 35 puts five reviews inside the first two months, which
 * is the window a candidate preparing for interviews actually has.
 */
const LADDER = [1, 3, 7, 16, 35];
const GROWTH = 2.5;

/**
 * The cap, expressed as retirement: once the interval would reach two months
 * the item stops being scheduled at all instead of sitting in the queue with a
 * due date nobody will ever reach. With a clean run that is the 6th consecutive
 * correct answer (1 + 3 + 7 + 16 + 35 = 62 days of elapsed spacing, minimum),
 * which is what "getting it right first try, repeatedly" earns. A later miss
 * clears retirement and the item comes straight back.
 */
const RETIRE_AT_DAYS = 60;

/**
 * A correct answer given *before* the item was due and within this window of
 * the previous answer does not advance the ladder.
 *
 * Without it, answering the same question six times in one sitting — trivial,
 * since /practice can serve the same item repeatedly — would "retire" it and
 * count six survived intervals towards Mastered. Spacing you did not actually
 * wait out must not count. Misses always take effect immediately; resetting is
 * never something worth gaming.
 */
const MIN_ADVANCE_MS = 12 * 3_600_000;

export interface DueItem {
  id: string;
  topic: string;
  dueAt: number;
  lapses: number;
}

/** Interval after `reps` consecutive correct answers, given the previous one. */
function grownInterval(previous: number, reps: number): number {
  if (reps <= LADDER.length) return LADDER[Math.max(0, reps - 1)];
  return Math.max(Math.round(previous * GROWTH), LADDER[LADDER.length - 1]);
}

/**
 * The schedule an item should have after being graded. Pure — `now` is passed
 * in — so a whole study history can be simulated in a test.
 */
export function nextEntry(
  previous: ReviewEntry | undefined,
  topic: string,
  correct: boolean,
  now: number
): ReviewEntry {
  if (!correct) {
    // Wrong: back tomorrow, ladder reset, lapse counted, retirement revoked.
    return {
      topic,
      due: now + DAY_MS,
      interval: 1,
      reps: 0,
      lapses: (previous?.lapses ?? 0) + 1,
      survived: previous?.survived ?? 0,
      last: now,
    };
  }

  if (!previous) {
    const interval = LADDER[0];
    return {
      topic,
      due: now + interval * DAY_MS,
      interval,
      reps: 1,
      lapses: 0,
      survived: 0,
      last: now,
    };
  }

  // Already retired and still correct: nothing to schedule. Only recording that
  // it was seen again keeps the app from nagging about questions you know.
  if (previous.retired) return { ...previous, topic, last: now };

  const early = now < previous.due;
  if (early && now - previous.last < MIN_ADVANCE_MS) {
    return { ...previous, topic, last: now };
  }

  const reps = previous.reps + 1;
  const interval = grownInterval(previous.interval, reps);
  // Only a recall at or after the due date proves an interval was survived.
  const survived = previous.survived + (early ? 0 : 1);
  const retired = interval >= RETIRE_AT_DAYS;
  return {
    topic,
    due: now + interval * DAY_MS,
    interval,
    reps,
    lapses: previous.lapses,
    survived,
    last: now,
    ...(retired ? { retired: true } : {}),
  };
}

/**
 * Record one graded answer against the schedule. Safe to call for any item —
 * the first call is what puts an item into the schedule at all, which is why an
 * unanswered question is never due.
 */
export function scheduleReview(itemId: string, topic: string, correct: boolean): void {
  if (!itemId || !topic) return;
  const now = Date.now();
  updateProgress((data) => {
    const reviews = (data.reviews ??= {});
    const previous: ReviewEntry | undefined = reviews[itemId];
    reviews[itemId] = nextEntry(previous, topic, correct, now);
    return true;
  });
}

/**
 * Drop schedule entries entirely — for item ids that have disappeared from the
 * question bank, which would otherwise stay due forever and inflate the count.
 */
export function forgetReviews(itemIds: string[]): void {
  if (itemIds.length === 0) return;
  updateProgress((data) => {
    if (!data.reviews) return false;
    let changed = false;
    for (const id of itemIds) {
      if (data.reviews[id]) {
        delete data.reviews[id];
        changed = true;
      }
    }
    return changed;
  });
}

function isDue(entry: ReviewEntry, now: number): boolean {
  return !entry.retired && entry.due <= now;
}

/** How many answered questions are due right now. */
export function dueCount(data?: ProgressData): number {
  const d = data ?? getProgress();
  const now = Date.now();
  let n = 0;
  for (const entry of Object.values(d.reviews ?? {})) if (isDue(entry, now)) n++;
  return n;
}

/**
 * Due questions, most overdue first, then the ones that have caught you out
 * most often. Omit `limit` for the whole queue.
 */
export function dueItems(data?: ProgressData, limit?: number): DueItem[] {
  const d = data ?? getProgress();
  const now = Date.now();
  const out: DueItem[] = [];
  for (const [id, entry] of Object.entries(d.reviews ?? {})) {
    if (!isDue(entry, now)) continue;
    out.push({ id, topic: entry.topic, dueAt: entry.due, lapses: entry.lapses });
  }
  out.sort(
    (a, b) =>
      a.dueAt - b.dueAt ||
      b.lapses - a.lapses ||
      // Stable, deterministic tail so the queue does not reshuffle on reload.
      (a.id < b.id ? -1 : a.id > b.id ? 1 : 0)
  );
  if (limit === undefined || !Number.isFinite(limit)) return out;
  return out.slice(0, Math.max(0, Math.floor(limit)));
}

/**
 * `due` — answerable right now.
 * `scheduled` — items in the active schedule, due now or later.
 * `learned` — retired: recalled far enough apart that they are no longer asked.
 */
export function reviewStats(data?: ProgressData): {
  due: number;
  scheduled: number;
  learned: number;
} {
  const d = data ?? getProgress();
  const now = Date.now();
  let due = 0;
  let scheduled = 0;
  let learned = 0;
  for (const entry of Object.values(d.reviews ?? {})) {
    if (entry.retired) {
      learned++;
      continue;
    }
    scheduled++;
    if (entry.due <= now) due++;
  }
  return { due, scheduled, learned };
}

/** When the next not-yet-due item comes back, or null if none is waiting. */
export function nextDueAt(data?: ProgressData): number | null {
  const d = data ?? getProgress();
  const now = Date.now();
  let soonest: number | null = null;
  for (const entry of Object.values(d.reviews ?? {})) {
    if (entry.retired || entry.due <= now) continue;
    if (soonest === null || entry.due < soonest) soonest = entry.due;
  }
  return soonest;
}

/** The stored schedule for one item, or null if it has never been answered. */
export function reviewFor(itemId: string, data?: ProgressData): ReviewEntry | null {
  const d = data ?? getProgress();
  return d.reviews?.[itemId] ?? null;
}

/** Whether any item in a topic has survived at least one real review interval. */
export function topicSurvivedReview(topicId: string, data?: ProgressData): boolean {
  const d = data ?? getProgress();
  for (const entry of Object.values(d.reviews ?? {})) {
    if (entry.topic === topicId && entry.survived > 0) return true;
  }
  return false;
}

/** "tomorrow" / "in 3 days" / "in 5 weeks" — for the post-answer confirmation. */
export function describeInterval(days: number): string {
  if (days <= 0) return "today";
  if (days === 1) return "tomorrow";
  if (days < 14) return `in ${Math.round(days)} days`;
  if (days < 60) return `in ${Math.round(days / 7)} weeks`;
  return `in ${Math.round(days / 30)} months`;
}
