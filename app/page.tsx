"use client";

import { useMemo } from "react";
import { TOPICS } from "@/content/topics";
import { overallStats, useProgress, type ProgressData } from "@/lib/progress";
import { masteryLevel, type MasteryLevel } from "@/lib/mastery";
import CoachPanel from "@/components/dashboard/CoachPanel";
import StageRoadmap from "@/components/dashboard/StageRoadmap";

/**
 * Home is a coach, not a syllabus.
 *
 * It used to open on 25 topic cards across six stages — everything shown,
 * nothing recommended — and left the user to decide what to study every single
 * time. The four cells above the fold now answer "what do I do right now?"
 * (continue, due for review, weakest area, readiness), and the roadmap moves
 * below them as a browse view.
 */

/** Has this browser ever done anything? Reading a lesson counts. */
function hasStarted(data: ProgressData): boolean {
  if (overallStats(data).answered > 0) return true;
  return Object.values(data.topics).some((t) => t.lessonRead);
}

export default function Home() {
  // null until hydrated — every consumer below must tolerate it, or the first
  // paint disagrees with the server and the page flashes.
  const progress = useProgress();

  const levels = useMemo(() => {
    const out: Record<string, MasteryLevel> = {};
    for (const t of TOPICS) {
      out[t.id] = progress ? masteryLevel(t.id, progress) : "none";
    }
    return out;
  }, [progress]);

  const started = progress !== null && hasStarted(progress);

  return (
    <div className="page-stack" data-route="roadmap">
      <CoachPanel progress={progress} started={started} levels={levels} />
      <StageRoadmap progress={progress} levels={levels} />
    </div>
  );
}
