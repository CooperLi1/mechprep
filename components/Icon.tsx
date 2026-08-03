import type { ReactNode, SVGProps } from "react";

/* ===========================================================================
   MechPrep icon system — "drafting instruments"

   Design contract (every glyph obeys it, no exceptions):

   - 24 x 24 viewBox, live area inset to 3.5 .. 20.5 so nothing touches the box.
   - 1.5 stroke, `currentColor`, round caps + joins. Scales uniformly: at 16px
     the stroke lands on exactly 1.0 CSS px, which is why the set stays crisp
     when it sits next to 14px UI text.
   - Geometry snaps to the half-unit grid, and wherever possible to multiples
     of 1.5 (24/16 = 1.5, so those coordinates land on whole pixels at 16px).
   - Straight lines, 45 degree diagonals, true circles. Curves only where the
     object genuinely is curved (bulb, eye, speech bubble). Nothing is filled
     except where "filled" IS the state (bookmark-filled, dot, the tittle on
     `info`/`warning`).
   - Optical weight is matched by keeping every glyph inside the same 17-unit
     live square rather than by making each one as large as it can be.

   Rationale: DESIGN.md asks for "precision-instrument minimalism ... the feel
   of good technical documentation and calibrated hardware". So: no filled
   pictograms, no soft 4px corner radii, no playful proportions. These read as
   drafting marks — crosshairs, callouts, section arrows — which is also why
   they sit comfortably next to the app's ~91 engineering diagrams instead of
   competing with them.
   =========================================================================== */

const ICONS = {
  /* --- direction ------------------------------------------------------- */
  "arrow-right": (
    <>
      <path d="M3.5 12h17" />
      <path d="m13.5 5 7 7-7 7" />
    </>
  ),
  "arrow-left": (
    <>
      <path d="M20.5 12h-17" />
      <path d="m10.5 5-7 7 7 7" />
    </>
  ),
  "arrow-up": (
    <>
      <path d="M12 20.5v-17" />
      <path d="m5 10.5 7-7 7 7" />
    </>
  ),
  "arrow-down": (
    <>
      <path d="M12 3.5v17" />
      <path d="m5 13.5 7 7 7-7" />
    </>
  ),
  "chevron-right": <path d="m9 5 7 7-7 7" />,
  "chevron-left": <path d="m15 5-7 7 7 7" />,
  "chevron-up": <path d="m5 15 7-7 7 7" />,
  "chevron-down": <path d="m5 9 7 7 7-7" />,

  /* --- marks ----------------------------------------------------------- */
  check: <path d="m4.5 12.5 5 5 10-11" />,
  "check-circle": (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m7.75 12.25 2.75 2.75 5.75-6.25" />
    </>
  ),
  x: (
    <>
      <path d="m5.5 5.5 13 13" />
      <path d="m18.5 5.5-13 13" />
    </>
  ),
  "x-circle": (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m9.25 9.25 5.5 5.5" />
      <path d="m14.75 9.25-5.5 5.5" />
    </>
  ),
  plus: (
    <>
      <path d="M12 4.5v15" />
      <path d="M4.5 12h15" />
    </>
  ),
  minus: <path d="M4.5 12h15" />,
  "plus-minus": (
    <>
      <path d="M12 4.5v9" />
      <path d="M7.5 9h9" />
      <path d="M7.5 18.5h9" />
    </>
  ),

  /* --- navigation / chrome --------------------------------------------- */
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.25 15.25 5.25 5.25" />
    </>
  ),
  command: (
    <path d="M15 6.25v11.5a2.75 2.75 0 1 0 2.75-2.75H6.25A2.75 2.75 0 1 0 9 17.75V6.25A2.75 2.75 0 1 0 6.25 9h11.5A2.75 2.75 0 1 0 15 6.25Z" />
  ),
  enter: (
    <>
      <path d="M19.5 5v7.5A2.5 2.5 0 0 1 17 15H5.5" />
      <path d="m9.5 11-4 4 4 4" />
    </>
  ),
  menu: (
    <>
      <path d="M3.5 6.5h17" />
      <path d="M3.5 12h17" />
      <path d="M3.5 17.5h17" />
    </>
  ),
  "external-link": (
    <>
      <path d="M14 4.5h5.5V10" />
      <path d="m19.5 4.5-8.5 8.5" />
      <path d="M17.5 14v4.5A1.5 1.5 0 0 1 16 20H6a1.5 1.5 0 0 1-1.5-1.5V8.5A1.5 1.5 0 0 1 6 7h4.5" />
    </>
  ),
  "more-horizontal": (
    <>
      <circle cx="5.75" cy="12" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="18.25" cy="12" r="1.3" fill="currentColor" stroke="none" />
    </>
  ),

  /* --- product sections ------------------------------------------------ */
  book: (
    <>
      <path d="M12 7 9.5 4.5H3.5V17h6l2.5 2.5" />
      <path d="m12 7 2.5-2.5h6V17h-6L12 19.5" />
      <path d="M12 7v12.5" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.75" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </>
  ),
  clipboard: (
    <>
      <path d="M9 4.5H6.5A1.5 1.5 0 0 0 5 6v14a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H15" />
      <rect x="9" y="2.5" width="6" height="3.5" rx="1" />
      <path d="M8.5 11.5h7" />
      <path d="M8.5 15.5h4.5" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" />
      <path d="m3.5 12 8.5 4.5 8.5-4.5" />
      <path d="m3.5 16.5 8.5 4.5 8.5-4.5" />
    </>
  ),
  message: (
    <path d="M20.5 6A1.5 1.5 0 0 0 19 4.5H5A1.5 1.5 0 0 0 3.5 6v9A1.5 1.5 0 0 0 5 16.5h2.5v4l4.5-4H19a1.5 1.5 0 0 0 1.5-1.5V6Z" />
  ),
  repeat: (
    <>
      <path d="M4 10.5V9a2.5 2.5 0 0 1 2.5-2.5H18" />
      <path d="m15 3.5 3.5 3-3.5 3" />
      <path d="M20 13.5V15a2.5 2.5 0 0 1-2.5 2.5H6" />
      <path d="m9 20.5-3.5-3 3.5-3" />
    </>
  ),
  refresh: (
    <>
      <path d="M4 12a8 8 0 0 1 8-8 8.7 8.7 0 0 1 6 2.44L20 9" />
      <path d="M20 4.5V9h-4.5" />
      <path d="M20 12a8 8 0 0 1-8 8 8.7 8.7 0 0 1-6-2.44L4 15" />
      <path d="M4 19.5V15h4.5" />
    </>
  ),
  bookmark: (
    <path d="M6.5 3.5h11a1 1 0 0 1 1 1V20.5L12 16.5 5.5 20.5V4.5a1 1 0 0 1 1-1Z" />
  ),
  "bookmark-filled": (
    <path
      d="M6.5 3.5h11a1 1 0 0 1 1 1V20.5L12 16.5 5.5 20.5V4.5a1 1 0 0 1 1-1Z"
      fill="currentColor"
    />
  ),
  sigma: <path d="M17.5 4.5H6.5l6.25 7.5L6.5 19.5h11" />,
  lightbulb: (
    <>
      <path d="M9.7 16.85a6.75 6.75 0 1 1 4.6 0v1.9h-4.6v-1.9Z" />
      <path d="M10.3 20.5h3.4" />
    </>
  ),

  /* --- measurement ----------------------------------------------------- */
  chart: (
    <>
      <path d="M4 3.5V20h16.5" />
      <path d="M8.5 20v-6.5" />
      <path d="M13 20V9" />
      <path d="M17.5 20v-4" />
    </>
  ),
  "trending-up": (
    <>
      <path d="m21 7.5-7.5 7.5-4-4-6.5 6.5" />
      <path d="M15.5 7.5H21V13" />
    </>
  ),
  gauge: (
    <>
      <path d="M4 16a8 8 0 0 1 16 0" />
      <path d="m12 16 4.75-4.75" />
      <circle cx="12" cy="16" r="1.25" fill="currentColor" stroke="none" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 6.75V12l3.75 2.25" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5.5" width="17" height="15" rx="1.5" />
      <path d="M3.5 10.5h17" />
      <path d="M8 3.5v4" />
      <path d="M16 3.5v4" />
    </>
  ),

  /* --- controls -------------------------------------------------------- */
  filter: <path d="M20.5 4.5h-17l6.5 8v5l4 2v-7l6.5-8Z" />,
  sliders: (
    <>
      <path d="M3.5 8.5h3" />
      <path d="M11.5 8.5h9" />
      <circle cx="9" cy="8.5" r="2.5" />
      <path d="M3.5 15.5h9" />
      <path d="M17.5 15.5h3" />
      <circle cx="15" cy="15.5" r="2.5" />
    </>
  ),
  grid: (
    <>
      <path d="M4 4h6.5v6.5H4V4Z" />
      <path d="M13.5 4H20v6.5h-6.5V4Z" />
      <path d="M4 13.5h6.5V20H4v-6.5Z" />
      <path d="M13.5 13.5H20V20h-6.5v-6.5Z" />
    </>
  ),
  list: (
    <>
      <path d="M8.5 6.5h12" />
      <path d="M8.5 12h12" />
      <path d="M8.5 17.5h12" />
      <path d="M3.5 6.5H5" />
      <path d="M3.5 12H5" />
      <path d="M3.5 17.5H5" />
    </>
  ),
  play: <path d="M8 5.25 19 12 8 18.75V5.25Z" />,
  pause: (
    <>
      <path d="M9 5.5v13" />
      <path d="M15 5.5v13" />
    </>
  ),
  trash: (
    <>
      <path d="M3.5 6.5h17" />
      <path d="M6.5 6.5v12.5A1.5 1.5 0 0 0 8 20.5h8a1.5 1.5 0 0 0 1.5-1.5V6.5" />
      <path d="M9.5 6.5V4.25h5V6.5" />
      <path d="M10 10v6" />
      <path d="M14 10v6" />
    </>
  ),
  download: (
    <>
      <path d="M12 3.5v11" />
      <path d="m7.5 10 4.5 4.5 4.5-4.5" />
      <path d="M4.5 17v2.5a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V17" />
    </>
  ),
  print: (
    <>
      <path d="M7 9V4.5h10V9" />
      <path d="M17 16h1.5A1.5 1.5 0 0 0 20 14.5v-4A1.5 1.5 0 0 0 18.5 9h-13A1.5 1.5 0 0 0 4 10.5v4A1.5 1.5 0 0 0 5.5 16H7" />
      <path d="M7 13.5h10v6H7v-6Z" />
    </>
  ),
  keyboard: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="1.75" />
      <path d="M6 10h2" />
      <path d="M10.5 10h3" />
      <path d="M16 10h2" />
      <path d="M8 14.5h8" />
    </>
  ),
  eye: (
    <>
      <path d="M2.75 12c2.35-4.15 5.4-6.25 9.25-6.25s6.9 2.1 9.25 6.25c-2.35 4.15-5.4 6.25-9.25 6.25S5.1 16.15 2.75 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  "eye-off": (
    <>
      <path d="M2.75 12c2.35-4.15 5.4-6.25 9.25-6.25s6.9 2.1 9.25 6.25c-2.35 4.15-5.4 6.25-9.25 6.25S5.1 16.15 2.75 12Z" />
      <path d="m4.5 4.5 15 15" />
    </>
  ),

  /* --- status ---------------------------------------------------------- */
  flag: (
    <>
      <path d="M5.5 20.5V4.5" />
      <path d="M5.5 4.5h13l-3 3.75L18.5 12h-13V4.5Z" />
    </>
  ),
  warning: (
    <>
      <path d="M12 4.25 20.5 19.5h-17L12 4.25Z" />
      <path d="M12 10v4" />
      <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 11.25v5.25" />
      <circle cx="12" cy="7.9" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  circle: <circle cx="12" cy="12" r="8.5" />,
  dot: <circle cx="12" cy="12" r="3.5" fill="currentColor" stroke="none" />,
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m15.75 8.25-2.4 5.1-5.1 2.4 2.4-5.1 5.1-2.4Z" />
    </>
  ),

  /* --- theme ----------------------------------------------------------- */
  sun: (
    <>
      <circle cx="12" cy="12" r="4.25" />
      <path d="M12 2.5v3" />
      <path d="M12 18.5v3" />
      <path d="M2.5 12h3" />
      <path d="M18.5 12h3" />
      <path d="m5.5 5.5 2.1 2.1" />
      <path d="m16.4 16.4 2.1 2.1" />
      <path d="m18.5 5.5-2.1 2.1" />
      <path d="m7.6 16.4-2.1 2.1" />
    </>
  ),
  moon: (
    <path d="M20.25 14.35A8.75 8.75 0 0 1 9.65 3.75 8.75 8.75 0 1 0 20.25 14.35Z" />
  ),
} satisfies Record<string, ReactNode>;

/** Every glyph in the set. */
export type IconName = keyof typeof ICONS;

/**
 * Aliases so call sites can use the word that fits the UI without anyone
 * having to remember which one the set actually stores.
 */
const ALIASES = {
  close: "x",
  cross: "x",
  tick: "check",
  lesson: "book",
  practice: "target",
  test: "clipboard",
  bank: "layers",
  qna: "message",
  review: "repeat",
  progress: "chart",
  hint: "lightbulb",
  formula: "sigma",
  alert: "warning",
  next: "arrow-right",
  back: "arrow-left",
  top: "arrow-up",
  readiness: "gauge",
} satisfies Record<string, IconName>;

export type IconAlias = keyof typeof ALIASES;

/** What `name` accepts: a canonical glyph name or one of the aliases above. */
export type IconKey = IconName | IconAlias;

function resolve(name: IconKey): IconName {
  return (ALIASES as Record<string, IconName>)[name] ?? (name as IconName);
}

/** Canonical names, grouped the way the gallery (and a human) reads them. */
export const ICON_GROUPS: ReadonlyArray<{
  label: string;
  names: readonly IconName[];
}> = [
  {
    label: "Direction",
    names: [
      "arrow-right",
      "arrow-left",
      "arrow-up",
      "arrow-down",
      "chevron-right",
      "chevron-left",
      "chevron-up",
      "chevron-down",
    ],
  },
  {
    label: "Marks",
    names: ["check", "check-circle", "x", "x-circle", "plus", "minus", "plus-minus"],
  },
  {
    label: "Chrome",
    names: ["search", "command", "enter", "menu", "external-link", "more-horizontal"],
  },
  {
    label: "Sections",
    names: [
      "book",
      "target",
      "clipboard",
      "layers",
      "message",
      "repeat",
      "refresh",
      "bookmark",
      "bookmark-filled",
      "sigma",
      "lightbulb",
    ],
  },
  {
    label: "Measurement",
    names: ["chart", "trending-up", "gauge", "clock", "calendar"],
  },
  {
    label: "Controls",
    names: [
      "filter",
      "sliders",
      "grid",
      "list",
      "play",
      "pause",
      "trash",
      "download",
      "print",
      "keyboard",
      "eye",
      "eye-off",
    ],
  },
  {
    label: "Status",
    names: ["flag", "warning", "info", "circle", "dot", "compass"],
  },
  { label: "Theme", names: ["sun", "moon"] },
];

export const ICON_NAMES = Object.keys(ICONS) as IconName[];
export const ICON_ALIASES = ALIASES;

export type IconProps = Omit<
  SVGProps<SVGSVGElement>,
  "name" | "width" | "height" | "children" | "viewBox"
> & {
  name: IconKey;
  /** Rendered box in px. The glyph always scales from the same 24u grid. */
  size?: number;
  /**
   * Accessible name. Omit it for decorative icons (the default) — the svg is
   * then `aria-hidden` and the adjacent text carries the meaning.
   */
  label?: string;
  strokeWidth?: number;
};

/**
 * Inline SVG icon. No icon font, no sprite sheet, no network request — the
 * paths are part of the component so they inherit `currentColor` and flip with
 * the theme for free.
 *
 *   <Icon name="arrow-right" />                     decorative, aria-hidden
 *   <Icon name="bookmark" label="Bookmarked" />     role="img" + accessible name
 *   <Icon name="target" size={24} className="text-[var(--accent)]" />
 */
export default function Icon({
  name,
  size = 16,
  label,
  strokeWidth = 1.5,
  ...rest
}: IconProps) {
  const glyph = ICONS[resolve(name)];

  const a11y = label
    ? ({ role: "img", "aria-label": label } as const)
    : ({ "aria-hidden": true } as const);

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      shapeRendering="geometricPrecision"
      focusable="false"
      {...a11y}
      {...rest}
      style={{ flexShrink: 0, verticalAlign: "-0.125em", ...rest.style }}
    >
      {glyph}
    </svg>
  );
}
