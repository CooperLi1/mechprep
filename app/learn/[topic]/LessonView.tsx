"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { CONTENT } from "@/content/index";
import { getTopic, TOPICS } from "@/content/topics";
import { markLessonRead, recordAnswers } from "@/lib/progress";
import { scheduleReview } from "@/lib/review";
import HtmlContent from "@/components/HtmlContent";
import ReadingProgress from "@/components/ReadingProgress";
import FigureLightbox from "@/components/lesson/FigureLightbox";
import { LessonNav, LessonNavCompact, type NavItem } from "@/components/lesson/LessonNav";
import LessonOutro, { type MissedCheck } from "@/components/lesson/LessonOutro";
import SectionCheck from "@/components/lesson/SectionCheck";
import { sectionQuestions } from "@/components/lesson/pickSectionQuestions";
import { lessonStats } from "@/components/lesson/stats";
import { useSectionTracking, useStickyOffsets } from "@/components/lesson/useLessonScroll";

const OUTRO_ID = "lesson-next";
const EQUATIONS_ID = "key-equations";
const TIPS_ID = "interview-tips";

/**
 * DESIGN.md caps the reading measure at ~68ch; the column was running to ~82.
 * The cap is applied to the prose-level children only (`>` combinator), so
 * paragraphs, lists and callouts narrow while figures and tables keep the full
 * width of the sheet — 11 diagrams in one lesson should not be shrunk to make a
 * paragraph shorter.
 */
const MEASURE =
  "[&>p]:max-w-[68ch] [&>ul]:max-w-[68ch] [&>ol]:max-w-[68ch] [&>div]:max-w-[68ch] [&>h3]:max-w-[68ch] [&>h4]:max-w-[68ch] [&>blockquote]:max-w-[68ch]";

/** Only needed once an inline check is actually answered, so it is created
 *  lazily inside an event handler and never during render. */
function newSessionId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `lesson${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`;
}

export default function LessonView({ topicId }: { topicId: string }) {
  const topic = getTopic(topicId)!;
  const { lesson, questions, qna } = CONTENT[topicId]!;

  useEffect(() => {
    markLessonRead(topicId);
  }, [topicId]);

  const idx = TOPICS.findIndex((t) => t.id === topicId);
  const prev = idx > 0 ? TOPICS[idx - 1]! : null;
  const next = idx < TOPICS.length - 1 ? TOPICS[idx + 1]! : null;

  // Deterministic: a pure function of the imported content, computed the same
  // way on the server and on the client, so hydration cannot disagree about
  // which question sits under which section.
  const checks = useMemo(
    () => sectionQuestions(topicId, lesson.sections, questions),
    [topicId, lesson.sections, questions]
  );
  const stats = useMemo(() => lessonStats(lesson), [lesson]);

  const navItems = useMemo<NavItem[]>(() => {
    const items: NavItem[] = lesson.sections.map((s, i) => ({
      id: `s${i}`,
      label: s.heading,
      num: i + 1,
    }));
    if (lesson.equations.length > 0) {
      items.push({ id: EQUATIONS_ID, label: "Key equations", num: null });
    }
    if (lesson.interviewTips.length > 0) {
      items.push({ id: TIPS_ID, label: "Interview tips", num: null });
    }
    items.push({ id: OUTRO_ID, label: "Where to next", num: null });
    return items;
  }, [lesson]);

  const compactNavRef = useRef<HTMLDivElement>(null);
  const articleRef = useRef<HTMLElement>(null);
  const offsets = useStickyOffsets(compactNavRef);
  const navIds = useMemo(() => navItems.map((item) => item.id), [navItems]);
  const { active, furthest, atEnd } = useSectionTracking(
    navIds,
    OUTRO_ID,
    offsets.total + 8
  );

  // --- inline check results --------------------------------------------------
  const [results, setResults] = useState<Record<number, { id: string; correct: boolean }>>(
    {}
  );
  const sessionRef = useRef("");

  const onAnswered = useCallback(
    (sectionIndex: number, questionId: string, correct: boolean) => {
      setResults((prev) =>
        prev[sectionIndex] ? prev : { ...prev, [sectionIndex]: { id: questionId, correct } }
      );
      if (!sessionRef.current) sessionRef.current = newSessionId();
      // A check is a real graded answer: it counts towards the topic's history
      // and a miss enters the spaced-repetition queue, exactly like practice.
      recordAnswers(sessionRef.current, [{ topicId, itemId: questionId, correct }]);
      scheduleReview(questionId, topicId, correct);
    },
    [topicId]
  );

  const answeredList = Object.values(results);
  const checkSummary = {
    answered: answeredList.length,
    correct: answeredList.filter((r) => r.correct).length,
    total: checks.filter(Boolean).length,
  };
  const missed: MissedCheck[] = Object.entries(results)
    .filter(([, r]) => !r.correct)
    .map(([i]) => Number(i))
    .sort((a, b) => a - b)
    .map((i) => ({
      anchorId: `check-${i}`,
      sectionNumber: i + 1,
      heading: lesson.sections[i]?.heading ?? `Section ${i + 1}`,
    }));

  const scrollMargin = { scrollMarginTop: offsets.total + 12 };

  return (
    <>
      <ReadingProgress />
      <div
        data-route="roadmap"
        className="mx-auto w-full max-w-[54rem] lg:grid lg:max-w-none lg:grid-cols-[minmax(0,54rem)_15.5rem] lg:items-start lg:justify-center lg:gap-8"
      >
        <div className="page-stack min-w-0">
          <div>
            <Link
              href="/"
              className="text-sm font-semibold text-accent-dark hover:text-accent"
            >
              ← Roadmap
            </Link>
            <h1 className="section-title mt-3">{lesson.title}</h1>
            <p className="meta-line mt-2">
              <span>Stage {topic.stage}</span>
              <span aria-hidden="true">·</span>
              <span>~{stats.minutes} min read</span>
              <span aria-hidden="true">·</span>
              <span>
                {lesson.sections.length} sections, {stats.figures} figures
              </span>
              <span aria-hidden="true">·</span>
              <span>{questions.length} practice questions</span>
              <span aria-hidden="true">·</span>
              <span>{qna.length} interview Q&amp;As</span>
            </p>
            <p className="mt-2 max-w-[68ch] text-[0.78rem] text-[var(--ink-muted)]">
              Every section ends with one question, so you find out what stuck before
              you have read ten of them. Select any figure to open it larger.
            </p>
          </div>

          <LessonNavCompact
            ref={compactNavRef}
            items={navItems}
            active={active}
            furthest={furthest}
            atEnd={atEnd}
            sectionCount={lesson.sections.length}
            headerHeight={offsets.header}
            minutes={stats.minutes}
          />

          <article className="panel sm:p-8" ref={articleRef}>
            <HtmlContent html={lesson.intro} className={MEASURE} />

            {lesson.sections.map((s, i) => {
              const question = checks[i];
              return (
                <section
                  key={i}
                  id={`s${i}`}
                  data-section-index={i}
                  className="mt-10"
                  style={scrollMargin}
                >
                  <h2 className="mb-3 border-b border-stone-200 pb-2 text-xl font-bold">
                    <span className="mr-1.5 font-mono text-[0.8rem] text-[var(--ink-muted)] tabular-nums">
                      {i + 1}
                    </span>
                    {s.heading}
                  </h2>
                  <HtmlContent html={s.html} className={MEASURE} />
                  {question && (
                    <SectionCheck
                      question={question}
                      sectionNumber={i + 1}
                      anchorId={`check-${i}`}
                      practiceHref={`/practice/${topicId}`}
                      onAnswered={(questionId, correct) =>
                        onAnswered(i, questionId, correct)
                      }
                    />
                  )}
                </section>
              );
            })}

            {lesson.equations.length > 0 && (
              <section
                id={EQUATIONS_ID}
                data-section-index={lesson.sections.length}
                className="mt-12"
                style={scrollMargin}
              >
                <h2 className="mb-3 text-xl font-bold">Key equations</h2>
                <div className="table-shell">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-stone-100 text-left">
                        <th className="border border-stone-200 px-3 py-2 font-semibold">
                          Quantity
                        </th>
                        <th className="border border-stone-200 px-3 py-2 font-semibold">
                          Formula
                        </th>
                        <th className="border border-stone-200 px-3 py-2 font-semibold">
                          Notes
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {lesson.equations.map((eq, i) => (
                        <tr key={i}>
                          <td className="border border-stone-200 px-3 py-2">{eq.name}</td>
                          <td className="border border-stone-200 px-3 py-2 font-serif">
                            <HtmlContent html={eq.formula} className="[&_p]:m-0" />
                          </td>
                          {/* note is HTML like "&mu;<sub>s</sub> is the static
                              coefficient" — rendering it as a plain string printed
                              the escaped source on 84 of 115 notes. */}
                          <td className="border border-stone-200 px-3 py-2 text-stone-600">
                            <HtmlContent html={eq.note ?? ""} className="[&_p]:m-0" />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {lesson.interviewTips.length > 0 && (
              <section
                id={TIPS_ID}
                data-section-index={
                  lesson.sections.length + (lesson.equations.length > 0 ? 1 : 0)
                }
                className="mt-12 rounded-xl border border-amber-300 bg-amber-50/80 p-5"
                style={scrollMargin}
              >
                <h2 className="mb-2 text-lg font-bold text-amber-900">Interview tips</h2>
                <ul className="max-w-[68ch] list-disc space-y-1.5 pl-5 text-sm text-amber-900/90">
                  {lesson.interviewTips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </section>
            )}
          </article>

          <LessonOutro
            id={OUTRO_ID}
            sectionIndex={navItems.length - 1}
            topic={topic}
            next={next}
            prev={prev}
            questionCount={questions.length}
            qnaCount={qna.length}
            checks={checkSummary}
            missed={missed}
            headerHeight={offsets.total}
          />
        </div>

        <LessonNav
          items={navItems}
          active={active}
          furthest={furthest}
          atEnd={atEnd}
          sectionCount={lesson.sections.length}
          headerHeight={offsets.header}
          minutes={stats.minutes}
          figures={stats.figures}
          checks={checkSummary}
        />
      </div>

      <FigureLightbox scope={articleRef} />
    </>
  );
}
