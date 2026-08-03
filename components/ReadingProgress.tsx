"use client";

import { useEffect, useState } from "react";

/**
 * A thin progress bar pinned under the header, plus a "back to top" affordance
 * once you are deep in the article.
 *
 * Lessons grew from 4-6 sections to as many as 10 (heat transfer), so a lesson
 * page is now several thousand pixels of continuous reading with no sense of
 * how much is left.
 */
export default function ReadingProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      setPct(scrollable <= 0 ? 0 : Math.min(1, doc.scrollTop / scrollable));
    };
    const onScroll = () => {
      // rAF-coalesced: scroll fires far more often than we need to repaint
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      {/* Decorative: the same information is available from the scrollbar, so
          this is hidden from assistive tech rather than announced. */}
      <div className="reading-progress" aria-hidden="true">
        <div className="reading-progress-fill" style={{ transform: `scaleX(${pct})` }} />
      </div>
      {pct > 0.15 && (
        <button
          type="button"
          className="back-to-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                ? "auto"
                : "smooth",
            })
          }
        >
          ↑ Top
        </button>
      )}
    </>
  );
}
