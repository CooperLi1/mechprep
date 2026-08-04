"use client";

import { useEffect, useRef, useState } from "react";
import { glossaryEntry } from "@/content/glossary";

interface TipState {
  id: string;
  term: string;
  def: string;
  x: number;
  y: number;
  below: boolean;
}

const TIP_W = 320;
const MARGIN = 8;

/**
 * One tooltip for every `.term` span on the page (event delegation on the
 * document, so it works for content rendered at any time). Shows on hover and
 * on keyboard focus — the spans carry tabindex="0" — and hides on leave, blur,
 * Escape, or scroll. Mounted once in the root layout.
 */
export default function TermTooltip() {
  const [tip, setTip] = useState<TipState | null>(null);
  const hideTimer = useRef<number | null>(null);

  useEffect(() => {
    const cancelHide = () => {
      if (hideTimer.current !== null) {
        window.clearTimeout(hideTimer.current);
        hideTimer.current = null;
      }
    };

    const show = (el: HTMLElement) => {
      const id = el.dataset.term;
      if (!id) return;
      const entry = glossaryEntry(id);
      if (!entry) return;
      cancelHide();
      const r = el.getBoundingClientRect();
      const below = r.top < 180; // not enough room above → open downward
      const x = Math.min(
        Math.max(MARGIN, r.left + r.width / 2 - TIP_W / 2),
        window.innerWidth - TIP_W - MARGIN
      );
      setTip({
        id,
        term: entry.term,
        def: entry.def,
        x,
        y: below ? r.bottom + MARGIN : r.top - MARGIN,
        below,
      });
    };

    const scheduleHide = () => {
      cancelHide();
      hideTimer.current = window.setTimeout(() => setTip(null), 120);
    };

    const onOver = (e: Event) => {
      const t = (e.target as Element | null)?.closest?.(".term");
      if (t instanceof HTMLElement) show(t);
    };
    const onOut = (e: Event) => {
      const t = (e.target as Element | null)?.closest?.(".term");
      if (t) scheduleHide();
    };
    const onFocusIn = (e: Event) => {
      const t = (e.target as Element | null)?.closest?.(".term");
      if (t instanceof HTMLElement) show(t);
      else setTip(null);
    };
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") setTip(null);
    };
    const onScroll = () => setTip(null);

    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelHide();
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!tip) return null;

  return (
    <div
      role="tooltip"
      className="term-tooltip"
      style={{
        left: tip.x,
        top: tip.y,
        transform: tip.below ? undefined : "translateY(-100%)",
        width: TIP_W,
      }}
      // Keep the tip open while the pointer is over it (so its text can be read
      // slowly, or selected).
      onMouseEnter={() => {
        if (hideTimer.current !== null) window.clearTimeout(hideTimer.current);
      }}
      onMouseLeave={() => setTip(null)}
    >
      <div className="term-tooltip-title">{tip.term}</div>
      <div
        className="term-tooltip-body"
        dangerouslySetInnerHTML={{ __html: tip.def }}
      />
    </div>
  );
}
