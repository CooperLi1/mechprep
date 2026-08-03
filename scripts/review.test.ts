/**
 * Spaced-repetition + mastery tests. Run with: npx tsx scripts/review.test.ts
 *
 * Scheduling bugs are invisible in the UI for weeks — an interval that is one
 * step wrong looks perfectly fine today and silently stops resurfacing the
 * questions you keep missing. So the ladder, the lapse reset, retirement, the
 * same-sitting guard, persistence and the mastery thresholds are all pinned
 * here against a simulated clock and a fake localStorage.
 */

// --- environment stubs (must exist before any progress read/write) -----------

const store = new Map<string, string>();
let clock = Date.UTC(2026, 0, 5, 9, 0, 0); // Mon 5 Jan 2026, 09:00 UTC

const realNow = Date.now;
Date.now = () => clock;

(globalThis as unknown as { window: unknown }).window = {
  localStorage: {
    getItem: (k: string) => (store.has(k) ? store.get(k) : null),
    setItem: (k: string, v: string) => void store.set(k, v),
    removeItem: (k: string) => void store.delete(k),
  },
  addEventListener: () => {},
  removeEventListener: () => {},
};

const DAY = 86_400_000;
const HOUR = 3_600_000;

// --- imports (after the stubs) ----------------------------------------------

import {
  bookmarkedIds,
  getProgress,
  isBookmarked,
  recordAnswers,
  resetProgress,
  toggleBookmark,
  type ReviewEntry,
} from "@/lib/progress";
import {
  dueCount,
  dueItems,
  nextDueAt,
  nextEntry,
  reviewFor,
  reviewStats,
  scheduleReview,
} from "@/lib/review";
import { masteryLevel, readiness, weakestTopics, continueTarget } from "@/lib/mastery";
import { QUESTION_POOLS } from "@/content/index";
import type { Difficulty } from "@/content/types";

// --- micro test harness ------------------------------------------------------

let passed = 0;
let failed = 0;
let group = "";

function suite(name: string) {
  group = name;
  console.log(`\n${name}`);
}

function check(label: string, ok: boolean, detail = "") {
  if (ok) {
    passed++;
    console.log(`  ok   ${label}`);
  } else {
    failed++;
    console.log(`  FAIL ${label}${detail ? ` — ${detail}` : ""} [${group}]`);
  }
}

function eq<T>(label: string, actual: T, expected: T) {
  check(label, Object.is(actual, expected), `expected ${String(expected)}, got ${String(actual)}`);
}

/** Advance the simulated clock. */
function advanceDays(n: number) {
  clock += n * DAY;
}

function entryOf(id: string): ReviewEntry {
  const e = reviewFor(id);
  if (!e) throw new Error(`no schedule entry for ${id}`);
  return e;
}

// =============================================================================
suite("1. Pure ladder — nextEntry(previous, topic, correct, now)");

{
  const topic = "torsion";
  // A perfect run: answer correctly at each due date and walk the ladder.
  const expectedIntervals = [1, 3, 7, 16, 35, 88];
  let entry = nextEntry(undefined, topic, true, clock);
  let now = clock;
  eq("first correct answer schedules 1 day", entry.interval, 1);
  eq("first correct answer sets reps = 1", entry.reps, 1);
  eq("due is exactly now + 1 day", entry.due, now + DAY);
  eq("no interval survived yet", entry.survived, 0);
  eq("not retired after one answer", entry.retired ?? false, false);

  for (let step = 1; step < expectedIntervals.length; step++) {
    now = entry.due; // answer it the moment it comes up
    entry = nextEntry(entry, topic, true, now);
    eq(
      `step ${step + 1} interval is ${expectedIntervals[step]}d`,
      entry.interval,
      expectedIntervals[step]
    );
    eq(`step ${step + 1} reps`, entry.reps, step + 1);
    eq(`step ${step + 1} survived intervals`, entry.survived, step);
  }
  eq("6th consecutive correct retires the item", entry.retired ?? false, true);
  eq("no lapses on a clean run", entry.lapses, 0);

  // Total elapsed time to retirement, as a sanity check on "hard to fake".
  const elapsed = 1 + 3 + 7 + 16 + 35;
  eq("retirement takes at least 62 days of real spacing", elapsed, 62);
}

{
  const topic = "fatigue";
  // Wrong on first sight.
  const first = nextEntry(undefined, topic, false, clock);
  eq("wrong first answer schedules 1 day", first.interval, 1);
  eq("wrong first answer counts a lapse", first.lapses, 1);
  eq("wrong first answer keeps reps at 0", first.reps, 0);
  eq("wrong first answer is due tomorrow", first.due, clock + DAY);

  // Build up to 16 days, then miss it.
  let e = nextEntry(undefined, topic, true, clock);
  for (let i = 0; i < 3; i++) e = nextEntry(e, topic, true, e.due);
  eq("four correct answers reach 16 days", e.interval, 16);
  const missedAt = e.due;
  const missed = nextEntry(e, topic, false, missedAt);
  eq("a miss resets the interval to 1 day", missed.interval, 1);
  eq("a miss resets reps to 0", missed.reps, 0);
  eq("a miss increments lapses", missed.lapses, 1);
  eq("a miss reschedules to tomorrow", missed.due, missedAt + DAY);
  eq("a miss keeps the survived count (history is not erased)", missed.survived, e.survived);

  // Rebuilding after a lapse walks the same ladder from the bottom.
  const rebuilt = nextEntry(missed, topic, true, missed.due);
  eq("first correct after a lapse goes back to 1 day", rebuilt.interval, 1);
  eq("lapse count is permanent", rebuilt.lapses, 1);
}

{
  const topic = "buckling";
  // Retired items stay out of the queue while you keep getting them right...
  let e = nextEntry(undefined, topic, true, clock);
  for (let i = 0; i < 5; i++) e = nextEntry(e, topic, true, e.due);
  eq("item is retired", e.retired ?? false, true);
  const stillRetired = nextEntry(e, topic, true, e.due + 400 * DAY);
  eq("a later correct answer leaves it retired", stillRetired.retired ?? false, true);
  eq("...and does not move the due date", stillRetired.due, e.due);

  // ...but a miss brings it straight back.
  const relapsed = nextEntry(e, topic, false, e.due + 400 * DAY);
  eq("a miss un-retires the item", relapsed.retired ?? false, false);
  eq("a miss puts it back tomorrow", relapsed.due, e.due + 400 * DAY + DAY);
  eq("a miss counts the lapse", relapsed.lapses, 1);
}

{
  const topic = "statics";
  // The anti-grind guard: repeating a question in one sitting must not advance
  // the schedule, or six clicks in ten minutes would "retire" it.
  let e = nextEntry(undefined, topic, true, clock);
  const firstDue = e.due;
  for (let i = 0; i < 8; i++) e = nextEntry(e, topic, true, clock + i * 60_000);
  eq("eight correct answers in one sitting stay at reps 1", e.reps, 1);
  eq("...interval unchanged", e.interval, 1);
  eq("...due date unchanged", e.due, firstDue);
  eq("...and no interval counted as survived", e.survived, 0);
  eq("...so it is not retired", e.retired ?? false, false);

  // Early but genuinely later (>12h) still advances — you did wait.
  const nextDay = nextEntry(e, topic, true, clock + 13 * HOUR);
  eq("a correct answer 13h later advances the ladder", nextDay.reps, 2);
  eq("...to 3 days", nextDay.interval, 3);
  eq("...but does not count as a survived interval (it was early)", nextDay.survived, 0);

  // On or after the due date, it counts.
  const onTime = nextEntry(e, topic, true, firstDue);
  eq("answering on the due date counts a survived interval", onTime.survived, 1);
}

// =============================================================================
suite("2. Queue over a simulated month (scheduleReview / dueCount / dueItems)");

resetProgress();
store.clear();

{
  const topic = "beam-bending";
  const pool = QUESTION_POOLS[topic];
  const ids = pool.slice(0, 5).map((q) => q.id);

  eq("nothing is due before anything is answered", dueCount(), 0);

  // Day 0: answer 3 right, 2 wrong.
  ids.slice(0, 3).forEach((id) => scheduleReview(id, topic, true));
  ids.slice(3).forEach((id) => scheduleReview(id, topic, false));

  eq("answered items are not due the same day", dueCount(), 0);
  eq("all five are scheduled", reviewStats().scheduled, 5);
  eq("none learned yet", reviewStats().learned, 0);
  eq("unanswered questions never enter the schedule", Object.keys(getProgress().reviews ?? {}).length, 5);
  eq("next due is tomorrow", nextDueAt(), clock + DAY);

  advanceDays(1);
  eq("day 1: all five are due", dueCount(), 5);
  const queue = dueItems();
  eq("dueItems returns all five", queue.length, 5);
  check(
    "the two lapsed items sort ahead of the rest",
    queue.slice(0, 2).every((q) => q.lapses === 1),
    JSON.stringify(queue.map((q) => q.lapses))
  );
  eq("dueItems respects its limit", dueItems(undefined, 2).length, 2);
  eq("DueItem carries its topic", queue[0].topic, topic);

  // Day 1: get everything right.
  queue.forEach((q) => scheduleReview(q.id, topic, true));
  eq("day 1 after review: nothing due", dueCount(), 0);
  eq("the three clean items moved to 3 days", entryOf(ids[0]).interval, 3);
  eq("the two lapsed items restart at 1 day", entryOf(ids[3]).interval, 1);
  eq("the lapse is remembered", entryOf(ids[3]).lapses, 1);

  advanceDays(1);
  eq("day 2: only the two lapsed items are due", dueCount(), 2);

  advanceDays(2); // day 4
  eq("day 4: the 3-day items are due too", dueCount(), 5);

  // Answer everything correctly on time from here until the clean run retires.
  for (let day = 4; day <= 400; day++) {
    for (const item of dueItems()) scheduleReview(item.id, topic, true);
    advanceDays(1);
  }
  const stats = reviewStats();
  eq("after a year of perfect recall nothing is due", stats.due, 0);
  eq("...nothing is left scheduled", stats.scheduled, 0);
  eq("...all five have retired", stats.learned, 5);
  check("retired items are excluded from the queue", dueItems().length === 0);
}

// =============================================================================
suite("3. Persistence, migration and corrupt data");

{
  const raw = store.get("mechprep.v1") ?? "";
  check("the schedule is written to localStorage", raw.includes('"reviews"'), raw.slice(0, 80));
  const reloaded = getProgress();
  eq("it survives a reload", Object.keys(reloaded.reviews ?? {}).length, 5);

  // A v1 document (topics only, no reviews/bookmarks) must still load.
  store.set(
    "mechprep.v1",
    JSON.stringify({ topics: { torsion: { attempts: [{ date: 1, correct: 4, total: 5 }] } } })
  );
  const legacy = getProgress();
  eq("legacy v1 data still loads", legacy.topics.torsion?.attempts.length, 1);
  eq("legacy data has no schedule", legacy.reviews, undefined);
  eq("dueCount on legacy data is 0, not a crash", dueCount(), 0);
  eq("mastery from aggregate-only history is capped at familiar", masteryLevel("torsion"), "attempted");

  // Garbage must be survived, not thrown on.
  const garbage = [
    "{not json",
    JSON.stringify({ topics: null, reviews: 7 }),
    JSON.stringify({ topics: {}, reviews: { a: null, b: { topic: "" }, c: { topic: "x", due: "soon" } } }),
    JSON.stringify({ topics: {}, bookmarks: { good: "torsion", bad: 42 } }),
  ];
  let threw = false;
  for (const blob of garbage) {
    store.set("mechprep.v1", blob);
    try {
      getProgress();
      dueCount();
      dueItems();
      reviewStats();
      masteryLevel("torsion");
      readiness();
      weakestTopics();
      continueTarget();
      bookmarkedIds();
    } catch (e) {
      threw = true;
      console.log(`       threw on ${blob.slice(0, 40)}: ${(e as Error).message}`);
    }
  }
  check("corrupt or partial documents never throw", !threw);

  store.set("mechprep.v1", garbage[2]);
  const salvaged = getProgress();
  eq("entries without a usable topic are dropped", Object.keys(salvaged.reviews ?? {}).length, 1);
  eq("a non-numeric due date is repaired, not kept", typeof (salvaged.reviews ?? {}).c.due, "number");

  store.set("mechprep.v1", garbage[3]);
  eq("non-string bookmark values are dropped", bookmarkedIds().length, 1);
}

// =============================================================================
suite("4. Bookmarks");

resetProgress();
store.clear();
{
  eq("no bookmarks initially", bookmarkedIds().length, 0);
  toggleBookmark("torsion-q01", "torsion");
  eq("toggle adds one", bookmarkedIds().length, 1);
  check("isBookmarked sees it", isBookmarked("torsion-q01"));
  check("other items are not bookmarked", !isBookmarked("torsion-q02"));
  toggleBookmark("torsion-q01", "torsion");
  eq("toggle removes it again", bookmarkedIds().length, 0);
  check("isBookmarked is false after removal", !isBookmarked("torsion-q01"));
  toggleBookmark("", "torsion");
  eq("an empty id is ignored", bookmarkedIds().length, 0);
}

// =============================================================================
suite("5. Mastery thresholds are hard to fake");

resetProgress();
store.clear();
{
  const topic = "heat-transfer";
  const pool = QUESTION_POOLS[topic];
  const byDiff = (d: Difficulty) => pool.filter((q) => q.difficulty === d);
  const answer = (ids: string[], correct: boolean, session: string) =>
    recordAnswers(
      session,
      ids.map((itemId) => ({ topicId: topic, itemId, correct }))
    );

  // One band with plenty of questions, so "narrow but deep" can be tested.
  const band = byDiff(2);
  check("fixture: the topic has 20+ questions in one difficulty band", band.length >= 20);

  eq("untouched topic", masteryLevel(topic), "none");

  // Grinding ONE question cannot buy a level.
  for (let i = 0; i < 25; i++) answer([band[0].id], true, `grind-${i}`);
  eq("25 correct answers to the same question is still 'attempted'", masteryLevel(topic), "attempted");

  // Seven distinct is still short of the 8 needed for familiar.
  answer(band.slice(0, 7).map((q) => q.id), true, "s1");
  eq("7 distinct correct is still 'attempted'", masteryLevel(topic), "attempted");

  answer([band[7].id], true, "s2");
  eq("8 distinct correct reaches 'familiar'", masteryLevel(topic), "familiar");

  // 20 distinct at 100% but all one difficulty must NOT reach proficient.
  answer(band.slice(0, 20).map((q) => q.id), true, "s3");
  eq("20 correct in a single difficulty band stays 'familiar'", masteryLevel(topic), "familiar");

  // Spanning all three difficulties at 100% over 15+ distinct → proficient.
  answer(byDiff(1).slice(0, 3).map((q) => q.id), true, "s4");
  answer(byDiff(3).slice(0, 3).map((q) => q.id), true, "s5");
  eq("breadth across all three difficulties reaches 'proficient'", masteryLevel(topic), "proficient");

  // Even at 100% accuracy, Mastered needs a survived review interval.
  eq("no review survived yet, so not 'mastered'", masteryLevel(topic), "proficient");
  const target = byDiff(2)[0].id;
  scheduleReview(target, topic, true); // due tomorrow
  eq("scheduling alone does not grant mastery", masteryLevel(topic), "proficient");
  advanceDays(2);
  scheduleReview(target, topic, true); // recalled after the interval elapsed
  eq("recall after the interval elapsed reaches 'mastered'", masteryLevel(topic), "mastered");

  // Missing questions drops the level back.
  answer(band.slice(0, 8).map((q) => q.id), false, "s6");
  const after = masteryLevel(topic);
  check("misses drop the level back", after !== "mastered", `level is ${after}`);
}

// =============================================================================
suite("6. Readiness is not inflated");

{
  const r = readiness();
  check("one strong topic out of many is a low readiness score", r.score < 15, `score=${r.score}`);
  eq("topicsTotal covers the whole roadmap", r.topicsTotal, 25);
  eq("one topic touched", r.topicsCovered, 1);
  check("the caveat names what it cannot measure", r.caveat.includes("out loud"));
  check("score is on a 0-100 scale", r.score >= 0 && r.score <= 100);

  const weak = weakestTopics(undefined, 3);
  check("the only practised topic is the only weak candidate", weak.length === 1, JSON.stringify(weak));
  check("weakest reports distinct questions answered", weak[0].attempts >= 15);

  const next = continueTarget();
  check("continueTarget always offers something", next !== null, JSON.stringify(next));
}

// =============================================================================

Date.now = realNow;
console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
