"use client";

import { useEffect, useState, type RefObject } from "react";

/** Matches the header's usual height so the first paint is not visibly wrong. */
const DEFAULT_HEADER = 64;

export interface StickyOffsets {
  /** Height of the app header alone. */
  header: number;
  /** Header plus anything else pinned under it (the compact nav on mobile). */
  total: number;
}

/**
 * Live height of the sticky stack above the lesson content.
 *
 * Every sticky offset, scroll-margin and IntersectionObserver band on the page
 * is derived from this rather than hardcoded, for two reasons: the header's nav
 * wraps to a second row on narrow screens (~30px taller, enough to hide a
 * heading you just jumped to), and the compact section bar is only pinned below
 * `lg`. A `display:none` element measures 0, so the same sum is correct at
 * every breakpoint without a media query in JS.
 *
 * The initial value is a constant, so the server render and hydration agree;
 * measurement happens in an effect, afterwards.
 */
export function useStickyOffsets(under: RefObject<HTMLElement | null>): StickyOffsets {
  const [offsets, setOffsets] = useState<StickyOffsets>({
    header: DEFAULT_HEADER,
    total: DEFAULT_HEADER,
  });

  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".app-header");
    const extra = under.current;
    if (!header) return;

    const measure = () => {
      const h = Math.round(header.getBoundingClientRect().height);
      const e = extra ? Math.round(extra.getBoundingClientRect().height) : 0;
      setOffsets((prev) =>
        prev.header === h && prev.total === h + e ? prev : { header: h, total: h + e }
      );
    };
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(header);
    if (extra) observer.observe(extra);
    return () => observer.disconnect();
  }, [under]);

  return offsets;
}

export interface SectionTracking {
  /** Index of the item currently under the reading line. */
  active: number;
  /** Highest index reached this visit — anything before it counts as read. */
  furthest: number;
  /** True once the end-of-lesson block is on screen: everything is read. */
  atEnd: boolean;
}

/**
 * Track which lesson section the reader is in.
 *
 * The observer band runs from just under the sticky stack down to 45% of the
 * viewport. Several sections can straddle it at once and the **topmost** one
 * wins — that is what keeps the highlight stable instead of flickering between
 * neighbours each time a boundary crosses a single hairline.
 *
 * When nothing intersects (above the first heading, or past the last) the hook
 * falls back to a one-pass rect scan rather than leaving a stale highlight.
 */
export function useSectionTracking(
  ids: string[],
  endId: string,
  line: number
): SectionTracking {
  const [active, setActive] = useState(0);
  const [furthest, setFurthest] = useState(0);
  const [atEnd, setAtEnd] = useState(false);
  const key = ids.join("|");

  useEffect(() => {
    const list = key === "" ? [] : key.split("|");
    const elements = list
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const visible = new Set<number>();

    const resolve = (): number => {
      if (visible.size > 0) return Math.min(...visible);
      let fallback = 0;
      for (let i = 0; i < elements.length; i++) {
        if (elements[i]!.getBoundingClientRect().top - line <= 0) fallback = i;
      }
      return fallback;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const index = Number((entry.target as HTMLElement).dataset.sectionIndex);
          if (!Number.isInteger(index) || index < 0) continue;
          if (entry.isIntersecting) visible.add(index);
          else visible.delete(index);
        }
        const next = resolve();
        setActive((prev) => (prev === next ? prev : next));
        setFurthest((prev) => (next > prev ? next : prev));
      },
      { rootMargin: `-${line}px 0px -55% 0px`, threshold: 0 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key, line]);

  useEffect(() => {
    const end = document.getElementById(endId);
    if (!end) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[entries.length - 1];
        if (entry) setAtEnd(entry.isIntersecting);
      },
      { rootMargin: `-${line}px 0px 0px 0px`, threshold: 0 }
    );
    observer.observe(end);
    return () => observer.disconnect();
  }, [endId, line]);

  return { active, furthest, atEnd };
}
