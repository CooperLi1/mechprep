"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

/* ===========================================================================
   The only client code on /reference.

   It receives topic/stage LABELS — never equations, never questions — and
   filters by toggling `hidden` on the server-rendered rows. Nothing about the
   225-odd equations is duplicated into the client bundle or the RSC payload.
   =========================================================================== */

export interface RefTopicMeta {
  id: string;
  short: string;
  stage: number;
}

export interface RefStageMeta {
  num: number;
  name: string;
}

type Density = "comfortable" | "compact";

const DENSITY_KEY = "mechprep-ref-density";

export default function ReferenceControls({
  topics,
  stages,
  total,
}: {
  topics: RefTopicMeta[];
  stages: RefStageMeta[];
  total: number;
}) {
  const topicIds = useMemo(() => new Set(topics.map((t) => t.id)), [topics]);
  const stageNums = useMemo(
    () => new Set(stages.map((s) => String(s.num))),
    [stages]
  );

  const [topic, setTopic] = useState("all");
  const [stage, setStage] = useState("all");
  const [query, setQuery] = useState("");
  const [density, setDensity] = useState<Density>("comfortable");
  const [shown, setShown] = useState(total);
  const [visibleStages, setVisibleStages] = useState<number[]>(() =>
    stages.map((s) => s.num)
  );

  /* Deep links land filtered: /reference?topic=fatigue, ?stage=2, ?q=goodman.
     Read from the URL in an effect rather than with useSearchParams: that hook
     forces the whole toolbar to be client-rendered behind a Suspense boundary
     on a prerendered route, which throws away the server-rendered controls and
     leaves an orphaned copy in the DOM. This keeps the toolbar in the static
     HTML and costs one frame of "unfiltered" on a deep link. */
  useEffect(() => {
    const apply = () => {
      const p = new URLSearchParams(window.location.search);
      const t = p.get("topic");
      const s = p.get("stage");
      setTopic(t && topicIds.has(t) ? t : "all");
      setStage(s && stageNums.has(s) ? s : "all");
      setQuery(p.get("q") ?? "");
    };
    apply();
    window.addEventListener("popstate", apply);
    return () => window.removeEventListener("popstate", apply);
  }, [topicIds, stageNums]);

  /* Restore the density choice. Read in an effect so the server-rendered
     markup and the first client render agree. */
  useEffect(() => {
    try {
      const saved = localStorage.getItem(DENSITY_KEY);
      if (saved === "compact" || saved === "comfortable") setDensity(saved);
    } catch {
      /* private mode / storage disabled — comfortable is a fine default */
    }
  }, []);

  useEffect(() => {
    const sheet = document.getElementById("ref-sheet");
    if (sheet) sheet.dataset.density = density;
    try {
      localStorage.setItem(DENSITY_KEY, density);
    } catch {
      /* ignore */
    }
  }, [density]);

  /* The filter pass. Walks the server-rendered tree once and toggles `hidden`
     on rows, topic cards and stage sections, then reports the counts. */
  useEffect(() => {
    const sheet = document.getElementById("ref-sheet");
    if (!sheet) return;

    const needle = query.trim().toLowerCase();
    const nextVisibleStages: number[] = [];
    let visibleCount = 0;

    sheet
      .querySelectorAll<HTMLElement>("[data-stage-block]")
      .forEach((stageEl) => {
        const stageNum = stageEl.dataset.stageBlock ?? "";
        const stageOk = stage === "all" || stageNum === stage;
        let stageCount = 0;

        stageEl
          .querySelectorAll<HTMLElement>("[data-topic-block]")
          .forEach((topicEl) => {
            const topicOk =
              stageOk && (topic === "all" || topicEl.dataset.topicBlock === topic);
            let topicCount = 0;

            topicEl.querySelectorAll<HTMLElement>("[data-eq]").forEach((row) => {
              const match =
                topicOk &&
                (needle === "" || (row.dataset.text ?? "").includes(needle));
              row.hidden = !match;
              if (match) topicCount += 1;
            });

            const counter = topicEl.querySelector<HTMLElement>("[data-topic-count]");
            if (counter) {
              counter.textContent = `${topicCount} equation${
                topicCount === 1 ? "" : "s"
              }`;
            }
            topicEl.hidden = topicCount === 0;
            stageCount += topicCount;
          });

        stageEl.hidden = stageCount === 0;
        if (stageCount > 0) nextVisibleStages.push(Number(stageNum));
        visibleCount += stageCount;
      });

    setShown(visibleCount);
    setVisibleStages(nextVisibleStages);

    const empty = document.getElementById("ref-empty");
    if (empty) empty.hidden = visibleCount > 0;

    // What the printed sheet says it contains.
    const printLine = document.getElementById("ref-print-filter");
    if (printLine) {
      const bits: string[] = [];
      if (stage !== "all") {
        const s = stages.find((x) => String(x.num) === stage);
        bits.push(`Stage ${stage}${s ? ` · ${s.name}` : ""}`);
      }
      if (topic !== "all") {
        const t = topics.find((x) => x.id === topic);
        if (t) bits.push(t.short);
      }
      if (needle) bits.push(`“${query.trim()}”`);
      printLine.textContent = bits.length
        ? `${visibleCount} equations · ${bits.join(" · ")}`
        : `All ${visibleCount} equations`;
    }
  }, [query, stage, topic, stages, topics]);

  /* Keep the URL shareable without pushing history entries on every keystroke. */
  useEffect(() => {
    const next = new URLSearchParams();
    if (topic !== "all") next.set("topic", topic);
    if (stage !== "all") next.set("stage", stage);
    if (query.trim()) next.set("q", query.trim());
    const qs = next.toString();
    const url = `${window.location.pathname}${qs ? `?${qs}` : ""}`;
    if (url !== `${window.location.pathname}${window.location.search}`) {
      window.history.replaceState(window.history.state, "", url);
    }
  }, [query, stage, topic]);

  const onStageChange = useCallback(
    (value: string) => {
      setStage(value);
      // Don't leave a topic selected that the new stage doesn't contain.
      if (value !== "all") {
        const t = topics.find((x) => x.id === topic);
        if (t && String(t.stage) !== value) setTopic("all");
      }
    },
    [topic, topics]
  );

  const clear = useCallback(() => {
    setTopic("all");
    setStage("all");
    setQuery("");
  }, []);

  const filtered = topic !== "all" || stage !== "all" || query.trim() !== "";
  const topicOptions =
    stage === "all" ? topics : topics.filter((t) => String(t.stage) === stage);

  return (
    <div className="panel ref-noprint ref-toolbar">
      <div className="ref-controls">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter by name, symbol or note — try “sigma”…"
          aria-label="Filter equations by text"
          className="field ref-search"
        />
        <select
          value={stage}
          onChange={(e) => onStageChange(e.target.value)}
          aria-label="Filter by stage"
          className="select-field ref-select"
        >
          <option value="all">All stages</option>
          {stages.map((s) => (
            <option key={s.num} value={s.num}>
              Stage {s.num} · {s.name}
            </option>
          ))}
        </select>
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          aria-label="Filter by topic"
          className="select-field ref-select"
        >
          <option value="all">All topics</option>
          {topicOptions.map((t) => (
            <option key={t.id} value={t.id}>
              {t.short}
            </option>
          ))}
        </select>

        <div className="segmented" role="group" aria-label="Layout density">
          {(["comfortable", "compact"] as const).map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDensity(d)}
              aria-pressed={density === d}
              className={`segment${density === d ? " segment-on" : ""}`}
            >
              {d === "comfortable" ? "Comfortable" : "Compact"}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => window.print()}
          className="btn btn-secondary"
        >
          Print / PDF
        </button>
      </div>

      <div className="ref-status">
        <span role="status" aria-live="polite">
          <b>{shown}</b> of {total} equations
        </span>
        {filtered && (
          <button type="button" onClick={clear} className="chip">
            Clear filters
          </button>
        )}
      </div>

      {visibleStages.length > 1 && (
        <div className="ref-jump">
          <span className="ref-jump-label">Jump to</span>
          {stages
            .filter((s) => visibleStages.includes(s.num))
            .map((s) => (
              <a key={s.num} href={`#stage-${s.num}`} className="chip">
                {s.num}. {s.name}
              </a>
            ))}
        </div>
      )}
    </div>
  );
}
