"use client";

import Link from "next/link";
import { STAGES, TOPICS, getTopic } from "@/content/topics";
import { CONTENT, QUESTION_POOLS } from "@/content/index";
import { pct } from "@/lib/quiz";
import { lessonRead, solvedItemIds, type ProgressData } from "@/lib/progress";
import { describeInterval, dueItems, nextDueAt, reviewStats } from "@/lib/review";
import {
  continueTarget,
  readiness,
  weakestTopics,
  type MasteryLevel,
} from "@/lib/mastery";
import MasteryBadge from "./MasteryBadge";
import { Annot, Readout, Sheet, SpecRow, TitleBlock } from "@/components/Sheet";

/** Where a brand-new user is sent: the first topic of the first stage. */
export const FIRST_TOPIC =
  TOPICS.find((t) => t.stage === (STAGES[0]?.num ?? 1)) ?? TOPICS[0]!;

/* --------------------------------------------------------------------------
   Sheet primitives

   The panel is ONE drawing sheet subdivided by hairlines, not five cards. The
   `gap-px` over a `--line` background paints every internal rule, so no cell
   carries a border of its own and nothing doubles up at a corner. The
   separation is earned by weight and whitespace: the hero runs at 68px display,
   the readiness column at a 64px mono readout, the gauges at 30px. Nothing on
   the sheet is the same size as anything else.
   -------------------------------------------------------------------------- */

function Cell({
  label,
  className = "",
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`flex flex-col bg-[var(--surface)] p-5 sm:p-6 ${className}`}>
      <h3 className="mono-key">{label}</h3>
      <div className="mt-4 flex flex-1 flex-col">{children}</div>
    </section>
  );
}

/** Placeholder block for the pre-hydration render. Same geometry as the real
 *  value it stands in for, so nothing shifts when progress arrives. */
function Bar({ w, h = 13 }: { w: string; h?: number }) {
  return (
    <span
      aria-hidden="true"
      className="block rounded-[2px] bg-[var(--surface-sunken)]"
      style={{ width: w, height: h }}
    />
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3 max-w-[46ch] text-[13px] leading-[1.55] text-[var(--ink-soft)]">
      {children}
    </p>
  );
}

/** Pushes the action to the bottom of its cell so the cells line up. */
function Actions({ children }: { children: React.ReactNode }) {
  return <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-5">{children}</div>;
}

/** What is actually in the topic you are about to open, as a parts list. */
function TopicFacts({
  topicId,
  progress,
}: {
  topicId: string;
  progress: ProgressData | null;
}) {
  const nQ = QUESTION_POOLS[topicId]?.length ?? 0;
  const nQnA = CONTENT[topicId]?.qna.length ?? 0;
  const nSections = CONTENT[topicId]?.lesson.sections.length ?? 0;
  const read = progress ? lessonRead(topicId, progress) : false;
  const solved = progress ? solvedItemIds(topicId, progress).size : 0;
  return (
    <div className="grid gap-2">
      {/* "sec" abbreviated to ambiguity — "6 sec · read" reads as six seconds. */}
      <SpecRow
        term="Lesson"
        value={`${nSections} section${nSections === 1 ? "" : "s"}${read ? " · read" : ""}`}
      />
      <SpecRow term="Questions" value={nQ} />
      <SpecRow term="Interview Q&A" value={nQnA} />
      <SpecRow term="Solved" value={solved} />
    </div>
  );
}

/* --------------------------------------------------------------------------
   Coverage — one tick per topic, height AND colour by mastery level
   -------------------------------------------------------------------------- */

/** Height rises with the level as well as colour, so the strip is readable
 *  without colour vision and legible against both page backgrounds. */
const TICK: Record<MasteryLevel, { h: number; bg: string }> = {
  none: { h: 3, bg: "var(--line-strong)" },
  attempted: { h: 6, bg: "var(--ink-muted)" },
  familiar: { h: 9, bg: "var(--ink-soft)" },
  proficient: { h: 13, bg: "var(--accent)" },
  mastered: { h: 16, bg: "var(--correct)" },
};

function Ticks({
  topics,
  levels,
  height = 16,
}: {
  topics: readonly { id: string }[];
  levels: Record<string, MasteryLevel>;
  height?: number;
}) {
  return (
    <span
      aria-hidden="true"
      className="flex items-end gap-[2px]"
      style={{ height }}
    >
      {topics.map((t) => {
        const tick = TICK[levels[t.id] ?? "none"];
        return (
          <span
            key={t.id}
            className="min-w-[3px] flex-1 rounded-[1px]"
            style={{
              height: Math.round((tick.h / 16) * height),
              background: tick.bg,
            }}
          />
        );
      })}
    </span>
  );
}

/**
 * Per-stage coverage. This is the "dead space under the caveat" fix: the
 * readiness column ran ~180px of empty surface below its caveat at 1280, and a
 * single number with no breakdown is exactly the kind of score DESIGN-V2 calls
 * un-earned. Six rows say where the number came from.
 */
function StageCoverage({ levels }: { levels: Record<string, MasteryLevel> }) {
  return (
    <div className="mt-4 grid gap-0 border-t border-[var(--line)]">
      {STAGES.map((stage) => {
        const ts = TOPICS.filter((t) => t.stage === stage.num);
        const done = ts.filter((t) => (levels[t.id] ?? "none") !== "none").length;
        return (
          <div
            key={stage.num}
            className="flex items-center gap-2.5 border-b border-[var(--line)] py-1.5"
          >
            <span className="w-[1.1rem] shrink-0 font-mono text-[0.66rem] text-[var(--accent)] tabular-nums">
              {String(stage.num).padStart(2, "0")}
            </span>
            <span className="min-w-0 flex-1 truncate text-[12px] text-[var(--ink-soft)]">
              {stage.name}
            </span>
            <Ticks topics={ts} levels={levels} height={10} />
            <span className="w-[2.4rem] shrink-0 text-right font-mono text-[0.66rem] text-[var(--ink-muted)] tabular-nums">
              {done}/{ts.length}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function levelTally(levels: Record<string, MasteryLevel>) {
  const tally: Record<MasteryLevel, number> = {
    none: 0,
    attempted: 0,
    familiar: 0,
    proficient: 0,
    mastered: 0,
  };
  for (const t of TOPICS) tally[levels[t.id] ?? "none"] += 1;
  return tally;
}

/* --------------------------------------------------------------------------
   Helpers
   -------------------------------------------------------------------------- */

function lastTouchedAt(data: ProgressData): number {
  let latest = 0;
  for (const entry of Object.values(data.topics)) {
    for (const a of entry.attempts) if (a.date > latest) latest = a.date;
  }
  return latest;
}

function relTime(ts: number): string {
  const delta = Date.now() - ts;
  if (!ts || delta < 0) return "recently";
  const mins = Math.round(delta / 60_000);
  if (mins < 2) return "just now";
  if (mins < 60) return `${mins} minutes ago`;
  const hours = Math.round(mins / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  const days = Math.round(hours / 24);
  if (days < 31) return `${days} day${days === 1 ? "" : "s"} ago`;
  const months = Math.round(days / 30);
  return `${months} month${months === 1 ? "" : "s"} ago`;
}

function stageOf(topicId: string) {
  const topic = getTopic(topicId);
  return STAGES.find((s) => s.num === topic?.stage);
}

/* --------------------------------------------------------------------------
   The sheet
   -------------------------------------------------------------------------- */

export default function CoachPanel({
  progress,
  started,
  levels,
}: {
  progress: ProgressData | null;
  /** Has this browser ever answered a question or opened a lesson? */
  started: boolean;
  levels: Record<string, MasteryLevel>;
}) {
  const loading = progress === null;

  /* ---- Continue ---------------------------------------------------------- */
  const target = progress ? continueTarget(progress) : null;
  const contTopic = target ? getTopic(target.topicId) : undefined;
  const contStage = target ? stageOf(target.topicId) : undefined;
  const lastAt = progress ? lastTouchedAt(progress) : 0;

  /* ---- Due for review ---------------------------------------------------- */
  const due = progress ? dueItems(progress) : [];
  const stats = progress
    ? reviewStats(progress)
    : { due: 0, scheduled: 0, learned: 0 };
  const byTopic = new Map<string, number>();
  for (const item of due) byTopic.set(item.topic, (byTopic.get(item.topic) ?? 0) + 1);
  const ranked = [...byTopic.entries()].sort((a, b) => b[1] - a[1]);
  const topDue = ranked[0];
  const topDueTopic = topDue ? getTopic(topDue[0]) : undefined;
  const nextAt = progress ? nextDueAt(progress) : null;
  const nextWhen =
    nextAt === null
      ? null
      : describeInterval(Math.ceil((nextAt - Date.now()) / 86_400_000));

  /* ---- Weakest area ------------------------------------------------------ */
  const weakest = progress ? weakestTopics(progress, 1)[0] : undefined;
  const weakTopic = weakest ? getTopic(weakest.topicId) : undefined;

  /* ---- Readiness --------------------------------------------------------- */
  const rd = progress
    ? readiness(progress)
    : { score: 0, topicsCovered: 0, topicsTotal: TOPICS.length, caveat: "" };
  // `readiness().score` is 0–100 (see lib/mastery.ts); `pct` wants a fraction.
  const score = Math.max(0, Math.min(1, rd.score / 100));
  const tally = levelTally(levels);

  /**
   * Exactly one solid button on the whole screen. A coach makes one
   * recommendation; DESIGN-V2 counted seven near-equal buttons here, which is
   * no hierarchy at all. Everything that is not the recommendation is now a
   * quiet mono link. Overdue reviews outrank everything else — spaced
   * repetition is the whole retention story.
   */
  const recommend: "review" | "continue" = stats.due > 0 ? "review" : "continue";

  /** The hero's action: solid only when the hero *is* the recommendation. */
  const heroPrimary = recommend === "continue";
  const heroCls = heroPrimary ? "btn btn-primary" : "link-quiet";
  const heroAltCls = "link-quiet";

  /** The sheet's identity strip. Every field is a real quantity. */
  const sheetTopic = started && contTopic ? contTopic : FIRST_TOPIC;
  const sheetStage = started && contStage ? contStage : STAGES[0];
  const titleFields = [
    { key: "Sheet", val: "01 · COACH" },
    { key: "Topic id", val: sheetTopic.id },
    { key: "Stage", val: `${sheetStage?.num ?? 1} / ${STAGES.length}` },
    { key: "Bank", val: `${QUESTION_POOLS[sheetTopic.id]?.length ?? 0} Q` },
    { key: "Covered", val: `${rd.topicsCovered} / ${rd.topicsTotal}` },
    { key: "Due", val: String(stats.due) },
  ];

  const headline = loading || started ? "What to do right now" : "Start here";

  const subline = loading ? null : started ? (
    <>
      Built from what you have answered so far — {rd.topicsCovered} of{" "}
      {rd.topicsTotal} topics touched. Nothing here is a guess about you; it is
      your own record.
    </>
  ) : (
    <>
      MechPrep is a coach, not a question bank: it watches what you miss, brings
      those questions back on a schedule, and tells you where to spend the next
      twenty minutes. Nothing to set up, no account, all of it stays in this
      browser.
    </>
  );

  return (
    <section aria-labelledby="coach-heading">
      <Annot num="01" className="mb-3">
        {headline}
      </Annot>
      {/* The h1 is the sheet's real title; the annotation above is its number. */}
      <h1 id="coach-heading" className="sr-only">
        {headline}
      </h1>

      {subline ? (
        <p className="mb-5 max-w-[68ch] text-[14px] leading-[1.6] text-[var(--ink-soft)]">
          {subline}
        </p>
      ) : (
        // Two bars, not one: the real subline runs to two lines at every width
        // above mobile, and a one-line placeholder would let the whole page
        // below it jump up when progress arrives.
        <div className="mb-5 grid gap-2">
          <Bar w="min(46rem, 100%)" h={14} />
          <Bar w="min(30rem, 100%)" h={14} />
        </div>
      )}

      <Sheet>
        <div className="grid gap-px bg-[var(--line)] lg:grid-cols-[1fr_1fr_20rem]">
          {/* ---- Hero: the recommendation, at display size ---------------- */}
          <Cell
            label={started || loading ? "Continue" : "First topic"}
            className="lg:col-span-2 lg:col-start-1 lg:row-start-1"
          >
            {loading ? (
              <>
                <Bar w="11rem" h={12} />
                <div className="mt-3">
                  <Bar w="min(26rem, 100%)" h={54} />
                </div>
                <div className="mt-4">
                  <Bar w="min(30rem, 100%)" h={14} />
                </div>
                <Actions>
                  <Bar w="9rem" h={36} />
                </Actions>
              </>
            ) : (
              <div className="flex flex-1 flex-col gap-6 md:flex-row md:items-stretch">
                <div className="flex min-w-0 flex-1 flex-col">
                  <p className="mono-meta">
                    STAGE {(started && contStage ? contStage : STAGES[0])?.num} ·{" "}
                    {(started && contStage ? contStage : STAGES[0])?.name}
                  </p>
                  {/* The single largest thing on the page. */}
                  <h2 className="display-title mt-2">
                    {started && contTopic ? contTopic.name : FIRST_TOPIC.name}
                  </h2>

                  {started && contTopic ? (
                    <div className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-1">
                      <MasteryBadge level={levels[contTopic.id] ?? "none"} />
                      {lastAt > 0 && (
                        <span className="mono-meta">
                          last answered {relTime(lastAt)}
                        </span>
                      )}
                    </div>
                  ) : (
                    <p className="mt-3 max-w-[48ch] text-[14px] leading-[1.6] text-[var(--ink-soft)]">
                      {FIRST_TOPIC.blurb}
                    </p>
                  )}

                  <Actions>
                    {started && contTopic ? (
                      target?.kind === "lesson" ? (
                        <>
                          <Link href={`/learn/${contTopic.id}`} className={heroCls}>
                            Read the lesson
                          </Link>
                          <Link
                            href={`/practice/${contTopic.id}`}
                            className={heroAltCls}
                          >
                            Keep practicing
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link href={`/practice/${contTopic.id}`} className={heroCls}>
                            Keep practicing
                          </Link>
                          <Link href={`/learn/${contTopic.id}`} className={heroAltCls}>
                            Reread the lesson
                          </Link>
                        </>
                      )
                    ) : (
                      <>
                        <Link href={`/learn/${FIRST_TOPIC.id}`} className={heroCls}>
                          Read the lesson
                        </Link>
                        <Link
                          href={`/practice/${FIRST_TOPIC.id}`}
                          className={heroAltCls}
                        >
                          Skip to practice
                        </Link>
                      </>
                    )}
                  </Actions>
                </div>

                {/* Parts list for the topic, hairline-divided from the hero. */}
                <div className="shrink-0 border-t border-[var(--line)] pt-4 md:w-[12.5rem] md:border-t-0 md:border-l md:pt-1 md:pl-6">
                  <TopicFacts
                    topicId={started && contTopic ? contTopic.id : FIRST_TOPIC.id}
                    progress={progress}
                  />
                </div>
              </div>
            )}
          </Cell>

          {/* ---- Readiness: the tall instrument column --------------------- */}
          <Cell
            label="Readiness"
            className="lg:col-start-3 lg:row-span-2 lg:row-start-1"
          >
            {loading ? (
              <>
                <Bar w="7rem" h={54} />
                <div className="mt-4">
                  <Bar w="100%" h={16} />
                </div>
                <div className="mt-4">
                  <Bar w="100%" h={13} />
                </div>
              </>
            ) : (
              <>
                <Readout
                  size="lg"
                  value={pct(score)}
                  unit="ready · this bank's measure"
                />
                <span className="mt-4 block">
                  <Ticks topics={TOPICS} levels={levels} />
                </span>
                <p className="mono-meta mt-2">
                  {rd.topicsCovered}/{rd.topicsTotal} topics covered
                  {tally.mastered + tally.proficient > 0
                    ? ` · ${tally.mastered + tally.proficient} proficient+`
                    : ""}
                </p>

                <StageCoverage levels={levels} />

                <p className="mt-4 text-[12px] leading-[1.55] text-[var(--ink-muted)]">
                  {rd.caveat}
                </p>
              </>
            )}
          </Cell>

          {/* ---- Gauge: due for review ------------------------------------- */}
          <Cell label="Due for review" className="lg:col-start-1 lg:row-start-2">
            {loading ? (
              <>
                <Bar w="4rem" h={34} />
                <div className="mt-4">
                  <Bar w="11rem" h={13} />
                </div>
                <Actions>
                  <Bar w="8rem" h={36} />
                </Actions>
              </>
            ) : stats.due > 0 && topDue && topDueTopic ? (
              <>
                <Readout
                  value={stats.due}
                  unit={stats.due === 1 ? "question due" : "questions due"}
                />
                <Note>
                  {ranked.length === 1
                    ? `All of them in ${topDueTopic.short}.`
                    : `Mostly ${topDueTopic.short} (${topDue[1]}), the rest across ${ranked.length - 1} other topic${ranked.length === 2 ? "" : "s"}.`}{" "}
                  Questions you missed, back on schedule.
                </Note>
                <Actions>
                  {/* The one solid button on the screen when anything is due. */}
                  <Link href="/review" className="btn btn-primary">
                    Start review
                  </Link>
                </Actions>
              </>
            ) : stats.scheduled > 0 ? (
              <>
                <Readout value="0" unit="due right now" />
                <Note>
                  {stats.scheduled} question{stats.scheduled === 1 ? "" : "s"} still
                  on the schedule
                  {nextWhen ? `; the next one is back ${nextWhen}` : ""}
                  {stats.learned > 0
                    ? `. ${stats.learned} have been recalled far enough apart to stop coming back.`
                    : "."}
                </Note>
                <Actions>
                  <Link href="/test" className="link-quiet">
                    Build a mixed test
                  </Link>
                </Actions>
              </>
            ) : (
              <>
                <Readout value="0" unit="scheduled" />
                <Note>
                  Miss a question and it lands here, then comes back tomorrow — and
                  at growing intervals for as long as you keep getting it right.
                </Note>
                <Actions>
                  <Link
                    href={`/practice/${contTopic?.id ?? FIRST_TOPIC.id}`}
                    className="link-quiet"
                  >
                    Answer some questions
                  </Link>
                </Actions>
              </>
            )}
          </Cell>

          {/* ---- Gauge: weakest area --------------------------------------- */}
          <Cell label="Weakest area" className="lg:col-start-2 lg:row-start-2">
            {loading ? (
              <>
                <Bar w="5rem" h={34} />
                <div className="mt-4">
                  <Bar w="11rem" h={13} />
                </div>
                <Actions>
                  <Bar w="8rem" h={36} />
                </Actions>
              </>
            ) : weakest && weakTopic ? (
              <>
                <Readout
                  value={pct(weakest.accuracy)}
                  unit={`accuracy over ${weakest.attempts} answered`}
                />
                <Note>
                  <span className="font-semibold text-[var(--ink)]">
                    {weakTopic.name}
                  </span>{" "}
                  — your lowest accuracy among topics with enough answers to judge.
                </Note>
                <Actions>
                  <Link href={`/practice/${weakTopic.id}`} className="link-quiet">
                    Drill {weakTopic.short}
                  </Link>
                </Actions>
              </>
            ) : (
              <>
                <Readout value="—" unit="not enough data" />
                <Note>
                  This needs at least 5 answered questions in a topic before it
                  means anything. Guessing at your weak spot early is worse than
                  saying nothing.
                </Note>
                <Actions>
                  <Link href="/test" className="link-quiet">
                    Build a mixed diagnostic
                  </Link>
                </Actions>
              </>
            )}
          </Cell>
        </div>

        <TitleBlock fields={titleFields} />
      </Sheet>

      <div className="link-row mt-4" data-quick-actions>
        <span className="mono-key">Also</span>
        <Link href="/test" className="link-quiet">
          Build a mock test
        </Link>
        <Link href="/bank" className="link-quiet">
          Browse the question bank
        </Link>
        <Link href="/qna" className="link-quiet">
          Interview Q&amp;A
        </Link>
      </div>
    </section>
  );
}
