"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Click-to-enlarge for the figures inside a lesson.
 *
 * The lesson body is one `dangerouslySetInnerHTML` blob, so the figures cannot
 * be wrapped in a React component without rewriting the content — which is
 * explicitly out of scope. Instead this decorates the existing
 * `<figure class="fig">` / `.qfig` nodes in place (focusable, `role="button"`,
 * a label, a corner affordance) and handles activation by delegation on the
 * scope element. React never diffs the children of a
 * `dangerouslySetInnerHTML` node, so those attributes survive re-renders.
 *
 * A `MutationObserver` picks up figures that appear later — a question figure
 * revealed when an inline check is expanded.
 *
 * The viewer is a native `<dialog>` opened with `showModal()`, which gives the
 * focus trap, the Esc dismissal and the focus restore for free instead of
 * hand-rolling three things that are easy to get subtly wrong.
 */

const ZOOMABLE = "figure.fig, figure.qfig";
const MARK = "data-zoomable";
const BADGE = "data-fig-zoom";

function labelFor(figure: HTMLElement): string {
  const caption = figure.querySelector("figcaption")?.textContent?.trim();
  if (!caption) return "Enlarge figure";
  const short = caption.length > 90 ? `${caption.slice(0, 90)}…` : caption;
  return `Enlarge figure: ${short}`;
}

/** Inline styles, not classes: this element is created outside React's tree
 *  and outside the Tailwind source scan. */
function addBadge(figure: HTMLElement) {
  const badge = document.createElement("span");
  badge.setAttribute(BADGE, "");
  badge.setAttribute("aria-hidden", "true");
  badge.textContent = "⤢";
  badge.style.cssText = [
    "position:absolute",
    "top:6px",
    "right:6px",
    "pointer-events:none",
    "display:inline-flex",
    "align-items:center",
    "justify-content:center",
    "width:20px",
    "height:20px",
    "border:1px solid var(--figure-frame)",
    "border-radius:var(--r-sm)",
    "background:var(--figure-sheet)",
    "color:#64748b",
    "font-size:11px",
    "line-height:1",
  ].join(";");
  figure.style.position = "relative";
  figure.appendChild(badge);
}

export default function FigureLightbox({
  scope,
}: {
  scope: React.RefObject<HTMLElement | null>;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const returnFocusTo = useRef<HTMLElement | null>(null);
  const [figure, setFigure] = useState<{ html: string; label: string } | null>(null);
  const [zoomed, setZoomed] = useState(false);

  const open = useCallback((target: HTMLElement) => {
    // Strip the affordance from the copy, then hand the markup over untouched.
    // Duplicate SVG ids are harmless here: `url(#id)` resolves to the first
    // match in document order, i.e. the original figure, whose marker and
    // gradient definitions are identical to the copy's.
    const clone = target.cloneNode(true) as HTMLElement;
    clone.querySelectorAll(`[${BADGE}]`).forEach((n) => n.remove());
    returnFocusTo.current = target;
    setZoomed(false);
    setFigure({ html: clone.innerHTML, label: labelFor(target) });
  }, []);

  useEffect(() => {
    if (!figure) return;
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    dialog.showModal();
  }, [figure]);

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  const decorate = useCallback(() => {
    const root = scope.current;
    if (!root) return;
    root.querySelectorAll<HTMLElement>(ZOOMABLE).forEach((fig) => {
      if (fig.hasAttribute(MARK)) return;
      fig.setAttribute(MARK, "");
      fig.setAttribute("role", "button");
      fig.setAttribute("tabindex", "0");
      fig.setAttribute("aria-label", labelFor(fig));
      fig.style.cursor = "zoom-in";
      addBadge(fig);
    });
  }, [scope]);

  /**
   * Deliberately dependency-free, so it runs after **every** commit.
   *
   * React re-applies `dangerouslySetInnerHTML` on the first update following
   * hydration even when the html string is unchanged, which discards every
   * attribute added by a mount-only effect — the figures silently stopped being
   * clickable a few milliseconds after load. Re-running the decoration after
   * each render fixes that at a cost of one `querySelectorAll` over ~11 nodes.
   */
  useEffect(decorate);

  // Figures that appear without a re-render here — a question figure revealed
  // when an inline check is expanded — are caught by the observer instead.
  // Debounced with a timer rather than `requestAnimationFrame`, which does not
  // fire while the tab is in the background.
  useEffect(() => {
    const root = scope.current;
    if (!root) return;

    let timer: ReturnType<typeof setTimeout> | 0 = 0;
    const observer = new MutationObserver(() => {
      if (timer) return;
      timer = setTimeout(() => {
        timer = 0;
        decorate();
      }, 0);
    });
    observer.observe(root, { childList: true, subtree: true });

    const onClick = (event: MouseEvent) => {
      const target = (event.target as Element | null)?.closest<HTMLElement>(`[${MARK}]`);
      if (target) open(target);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const target = (event.target as Element | null)?.closest<HTMLElement>(`[${MARK}]`);
      if (!target) return;
      event.preventDefault();
      open(target);
    };

    root.addEventListener("click", onClick);
    root.addEventListener("keydown", onKeyDown);
    return () => {
      observer.disconnect();
      if (timer) clearTimeout(timer);
      root.removeEventListener("click", onClick);
      root.removeEventListener("keydown", onKeyDown);
    };
  }, [scope, open, decorate]);

  return (
    <dialog
      ref={dialogRef}
      aria-label={figure?.label ?? "Figure"}
      onClose={() => {
        setFigure(null);
        // `showModal()` normally restores focus itself, but only when the
        // opener was the focused element — a mouse click on a div does not
        // always focus it, so restore explicitly.
        returnFocusTo.current?.focus();
        returnFocusTo.current = null;
      }}
      onClick={(event) => {
        // A click that lands on the dialog box itself is a click on the
        // backdrop; anything inside the panel stops here.
        if (event.target === dialogRef.current) close();
      }}
      className="m-auto max-h-none max-w-none border-0 bg-transparent p-0 backdrop:bg-[rgba(15,23,42,0.62)]"
    >
      {figure && (
        <div
          className="flex max-h-[92vh] w-[min(96vw,1120px)] flex-col overflow-hidden rounded-[var(--r-lg)] border border-[var(--line-strong)] bg-[var(--surface)]"
          style={{ boxShadow: "var(--shadow-pop)" }}
        >
          <div className="flex items-center gap-2 border-b border-[var(--line)] px-3 py-2">
            <span className="mr-auto text-[0.72rem] font-bold tracking-[0.09em] text-[var(--ink-muted)] uppercase">
              Figure
            </span>
            <button
              type="button"
              className="btn btn-secondary h-8 min-h-8 px-2.5 py-1 text-[0.78rem]"
              aria-pressed={zoomed}
              onClick={() => setZoomed((v) => !v)}
            >
              {zoomed ? "Fit to width" : "Zoom 2×"}
            </button>
            <button
              type="button"
              className="btn btn-secondary h-8 min-h-8 px-2.5 py-1 text-[0.78rem]"
              onClick={close}
            >
              Close <span aria-hidden="true">(Esc)</span>
            </button>
          </div>
          <div className="min-h-0 flex-1 overflow-auto p-3">
            {/* Utilities sit in a later cascade layer than `.fig`, so `m-0`
                and `overflow-visible` win without an important modifier. */}
            <div style={{ width: zoomed ? "200%" : "100%" }}>
              <figure
                className="fig m-0 overflow-visible"
                dangerouslySetInnerHTML={{ __html: figure.html }}
              />
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
