"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useProgress } from "@/lib/progress";
import {
  interviewStorageError,
  isFormatId,
  planInterview,
  saveReport,
  useInterviewReports,
  type InterviewFormatId,
  type InterviewPlan,
  type InterviewReport,
} from "@/lib/interview";
import InterviewSetup from "@/components/interview/InterviewSetup";
import InterviewSession from "@/components/interview/InterviewSession";
import ReportCard from "@/components/interview/ReportCard";

type View =
  | { phase: "setup" }
  | { phase: "session"; plan: InterviewPlan; stages: number[] }
  | { phase: "report"; id: string };

/**
 * The report id lives in the URL fragment, so reloading the page after an
 * interview brings the same report back rather than dumping the candidate on
 * the setup screen. It is a fragment rather than a query string deliberately:
 * the whole feature is localStorage-backed, so there is nothing for a server to
 * do with it, and a fragment needs no Suspense boundary.
 */
function reportHash(): string | null {
  if (typeof window === "undefined") return null;
  const m = /^#r-(.+)$/.exec(window.location.hash);
  if (!m?.[1]) return null;
  try {
    return decodeURIComponent(m[1]);
  } catch {
    return null;
  }
}

function setReportHash(id: string | null) {
  if (typeof window === "undefined") return;
  try {
    const { pathname, search } = window.location;
    window.history.replaceState(
      null,
      "",
      `${pathname}${search}${id ? `#r-${encodeURIComponent(id)}` : ""}`
    );
  } catch {
    // History is unavailable in some embedded contexts; the app still works.
  }
}

export default function InterviewClient() {
  const progress = useProgress();
  const history = useInterviewReports();
  const [view, setView] = useState<View>({ phase: "setup" });
  const [format, setFormat] = useState<InterviewFormatId>("screen");
  const [stages, setStages] = useState<number[]>([]);
  // Held separately so a report still renders when the browser refused to save.
  const [liveReport, setLiveReport] = useState<InterviewReport | null>(null);
  const [storageError, setStorageError] = useState<string | null>(null);
  const restored = useRef(false);

  // Reopen whatever report the URL names, once the store has hydrated. This is
  // a one-shot sync from external systems (the URL fragment plus localStorage)
  // that cannot be read during render without a hydration mismatch, so the
  // setState here is deliberate rather than a cascading-render mistake.
  useEffect(() => {
    if (restored.current || history === null) return;
    restored.current = true;
    const id = reportHash();
    if (!id) return;
    const found = history.find((r) => r.id === id);
    if (!found) {
      setReportHash(null);
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFormat(found.format);
    setView({ phase: "report", id });
  }, [history]);

  const scrollTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const start = useCallback(
    (which: InterviewFormatId) => {
      const plan = planInterview(which, { stages, progress });
      if (plan.items.length === 0) return;
      setFormat(which);
      setReportHash(null);
      setView({ phase: "session", plan, stages: [...stages] });
      scrollTop();
    },
    [progress, stages]
  );

  const finish = useCallback((report: InterviewReport) => {
    setLiveReport(report);
    if (!saveReport(report)) setStorageError(interviewStorageError());
    else setStorageError(null);
    setReportHash(report.id);
    setView({ phase: "report", id: report.id });
    scrollTop();
  }, []);

  const openReport = useCallback((id: string) => {
    setReportHash(id);
    setView({ phase: "report", id });
    scrollTop();
  }, []);

  const backToSetup = useCallback(() => {
    setReportHash(null);
    setView({ phase: "setup" });
    scrollTop();
  }, []);

  if (view.phase === "session") {
    return (
      <div className="narrow-page">
        <InterviewSession
          plan={view.plan}
          stages={view.stages}
          onFinish={finish}
          onAbandon={backToSetup}
        />
      </div>
    );
  }

  if (view.phase === "report") {
    const report =
      history?.find((r) => r.id === view.id) ??
      (liveReport?.id === view.id ? liveReport : null);
    if (report) {
      return (
        <div className="medium-page">
          <ReportCard
            report={report}
            history={history ?? (liveReport ? [liveReport] : [])}
            storageError={storageError}
            onStart={start}
            onOpenReport={openReport}
            onBack={backToSetup}
          />
        </div>
      );
    }
    // History has not hydrated yet, or the report aged out of the store.
    return (
      <div className="medium-page">
        <div className="panel p-8 text-center text-stone-500">
          {history === null ? "Loading your report…" : "That report is no longer stored."}
          {history !== null && (
            <div className="mt-4">
              <button type="button" onClick={backToSetup} className="btn btn-primary">
                Back to setup
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="medium-page">
      <InterviewSetup
        format={format}
        stages={stages}
        progress={progress}
        history={history}
        onFormatChange={(f) => setFormat(isFormatId(f) ? f : "screen")}
        onStagesChange={setStages}
        onStart={() => start(format)}
        onOpenReport={openReport}
      />
    </div>
  );
}
