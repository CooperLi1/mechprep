import type { TopicContent } from "../types";

// ---------------------------------------------------------------------------
// GD&T: Geometric Dimensioning & Tolerancing
//
// GD&T glyphs (position, profile, runout, cylindricity…) have poor coverage in
// system UI fonts, so every geometric-characteristic symbol below is DRAWN as
// vector geometry rather than typed as a Unicode character. Only the diameter
// sign (&#8960;) appears as text, and only beside a numeric value.
// All SVG element ids are prefixed "gdt<n>-".
// ---------------------------------------------------------------------------

const INK = "#334155";
const DIM = "#64748b";
const HOT = "#dc2626";
const KEY = "#1d4ed8";

// ---- vector GD&T symbol builders -----------------------------------------

/** diameter sign: circle + 45&deg; slash */
const dia = (x: number, y: number, r = 7, c = INK, sw = 1.7) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="${c}" stroke-width="${sw}"/>` +
  `<line x1="${x - r - 3}" y1="${y + r + 3}" x2="${x + r + 3}" y2="${y - r - 3}" stroke="${c}" stroke-width="${sw}"/>`;

/** position: circle with a full crosshair through it */
const symPos = (x: number, y: number, r = 7, c = INK) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="${c}" stroke-width="1.8"/>` +
  `<line x1="${x - r - 5}" y1="${y}" x2="${x + r + 5}" y2="${y}" stroke="${c}" stroke-width="1.8"/>` +
  `<line x1="${x}" y1="${y - r - 5}" x2="${x}" y2="${y + r + 5}" stroke="${c}" stroke-width="1.8"/>`;

/** perpendicularity */
const symPerp = (x: number, y: number, s = 9, c = INK) =>
  `<line x1="${x}" y1="${y - s}" x2="${x}" y2="${y + s}" stroke="${c}" stroke-width="1.8"/>` +
  `<line x1="${x - s}" y1="${y + s}" x2="${x + s}" y2="${y + s}" stroke="${c}" stroke-width="1.8"/>`;

/** parallelism: two slanted parallel lines */
const symPar = (x: number, y: number, s = 8, c = INK) =>
  `<line x1="${x - 7}" y1="${y + s}" x2="${x - 1}" y2="${y - s}" stroke="${c}" stroke-width="1.8"/>` +
  `<line x1="${x + 1}" y1="${y + s}" x2="${x + 7}" y2="${y - s}" stroke="${c}" stroke-width="1.8"/>`;

/** angularity: baseline plus a rising hypotenuse */
const symAng = (x: number, y: number, s = 8, c = INK) =>
  `<line x1="${x - 9}" y1="${y + s}" x2="${x + 9}" y2="${y + s}" stroke="${c}" stroke-width="1.8"/>` +
  `<line x1="${x - 9}" y1="${y + s}" x2="${x + 8}" y2="${y - s}" stroke="${c}" stroke-width="1.8"/>`;

/** flatness: parallelogram */
const symFlat = (x: number, y: number, c = INK) =>
  `<polygon points="${x - 4},${y - 7} ${x + 11},${y - 7} ${x + 4},${y + 7} ${x - 11},${y + 7}" fill="none" stroke="${c}" stroke-width="1.8"/>`;

/** straightness: a single horizontal line */
const symStraight = (x: number, y: number, c = INK) =>
  `<line x1="${x - 11}" y1="${y}" x2="${x + 11}" y2="${y}" stroke="${c}" stroke-width="1.8"/>`;

/** circularity: a circle */
const symCirc = (x: number, y: number, r = 8, c = INK) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="${c}" stroke-width="1.8"/>`;

/** cylindricity: circle flanked by two slanted parallel lines */
const symCyl = (x: number, y: number, r = 7, c = INK) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="${c}" stroke-width="1.8"/>` +
  `<line x1="${x - r - 7}" y1="${y + r + 3}" x2="${x - r - 1}" y2="${y - r - 3}" stroke="${c}" stroke-width="1.8"/>` +
  `<line x1="${x + r + 1}" y1="${y + r + 3}" x2="${x + r + 7}" y2="${y - r - 3}" stroke="${c}" stroke-width="1.8"/>`;

/** profile of a surface: arc closed by a baseline */
const symProfS = (x: number, y: number, c = INK) =>
  `<path d="M ${x - 9} ${y + 6} A 9 9 0 0 1 ${x + 9} ${y + 6}" fill="none" stroke="${c}" stroke-width="1.8"/>` +
  `<line x1="${x - 12}" y1="${y + 6}" x2="${x + 12}" y2="${y + 6}" stroke="${c}" stroke-width="1.8"/>`;

/** profile of a line: bare arc */
const symProfL = (x: number, y: number, c = INK) =>
  `<path d="M ${x - 9} ${y + 6} A 9 9 0 0 1 ${x + 9} ${y + 6}" fill="none" stroke="${c}" stroke-width="1.8"/>`;

/** circular runout: one slanted arrow */
const symRunC = (x: number, y: number, c = INK) =>
  `<line x1="${x - 5}" y1="${y + 8}" x2="${x + 5}" y2="${y - 7}" stroke="${c}" stroke-width="1.8"/>` +
  `<polygon points="${x + 6},${y - 9} ${x - 2},${y - 6} ${x + 3},${y - 1}" fill="${c}"/>`;

/** total runout: two slanted arrows over a baseline */
const symRunT = (x: number, y: number, c = INK) =>
  `<line x1="${x - 10}" y1="${y + 8}" x2="${x}" y2="${y - 7}" stroke="${c}" stroke-width="1.8"/>` +
  `<polygon points="${x + 1},${y - 9} ${x - 7},${y - 6} ${x - 2},${y - 1}" fill="${c}"/>` +
  `<line x1="${x - 1}" y1="${y + 8}" x2="${x + 9}" y2="${y - 7}" stroke="${c}" stroke-width="1.8"/>` +
  `<polygon points="${x + 10},${y - 9} ${x + 2},${y - 6} ${x + 7},${y - 1}" fill="${c}"/>`;

/** concentricity: two concentric circles */
const symConc = (x: number, y: number, c = INK) =>
  `<circle cx="${x}" cy="${y}" r="9" fill="none" stroke="${c}" stroke-width="1.8"/>` +
  `<circle cx="${x}" cy="${y}" r="4" fill="none" stroke="${c}" stroke-width="1.8"/>`;

/** circled modifier letter: M = MMC, L = LMC, P = projected zone, U = unequal */
const symMod = (x: number, y: number, letter: string, r = 9, c = INK) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="${c}" stroke-width="1.5"/>` +
  `<text x="${x}" y="${y + 4.5}" text-anchor="middle" font-size="12" font-weight="700" fill="${c}">${letter}</text>`;

// ---- feature control frame builder ---------------------------------------

type FcfCell = { w: number; draw: (cx: number, cy: number) => string };

function fcf(x: number, y: number, h: number, cells: FcfCell[], sw = 1.8): string {
  const total = cells.reduce((s, c) => s + c.w, 0);
  let out = `<rect x="${x}" y="${y}" width="${total}" height="${h}" fill="#ffffff" stroke="${INK}" stroke-width="${sw}"/>`;
  let cx = x;
  cells.forEach((cell, i) => {
    if (i > 0)
      out += `<line x1="${cx}" y1="${y}" x2="${cx}" y2="${y + h}" stroke="${INK}" stroke-width="${sw}"/>`;
    out += cell.draw(cx + cell.w / 2, y + h / 2);
    cx += cell.w;
  });
  return out;
}

/** plain text compartment (datum letters, angles, …) */
const cText = (w: number, s: string, fs = 15): FcfCell => ({
  w,
  draw: (cx, cy) =>
    `<text x="${cx}" y="${cy + fs * 0.36}" text-anchor="middle" font-size="${fs}" font-weight="600" fill="${INK}">${s}</text>`,
});

/** symbol compartment */
const cSym = (w: number, f: (cx: number, cy: number) => string): FcfCell => ({ w, draw: f });

/** tolerance compartment: optional diameter sign, value, optional modifier */
const cTol = (w: number, value: string, mod?: string, withDia = true): FcfCell => ({
  w,
  draw: (cx, cy) => {
    const dw = withDia ? 22 : 0;
    const mw = mod ? 24 : 0;
    const tw = value.length * 8.4;
    let x0 = cx - (dw + tw + mw) / 2;
    let out = "";
    if (withDia) {
      out += dia(x0 + 10, cy, 7);
      x0 += dw;
    }
    out += `<text x="${x0 + tw / 2}" y="${cy + 5.5}" text-anchor="middle" font-size="15" font-weight="600" fill="${INK}">${value}</text>`;
    x0 += tw;
    if (mod) out += symMod(x0 + 12, cy, mod);
    return out;
  },
});

/** datum feature symbol: filled triangle on the surface, leader, boxed letter */
const datumSym = (x: number, y: number, letter: string, dir: "down" | "left" = "down") => {
  if (dir === "left") {
    return (
      `<polygon points="${x},${y} ${x - 11},${y - 6} ${x - 11},${y + 6}" fill="${INK}"/>` +
      `<line x1="${x - 11}" y1="${y}" x2="${x - 22}" y2="${y}" stroke="${INK}" stroke-width="1.5"/>` +
      `<rect x="${x - 44}" y="${y - 11}" width="22" height="22" fill="#ffffff" stroke="${INK}" stroke-width="1.5"/>` +
      `<text x="${x - 33}" y="${y + 5}" text-anchor="middle" font-size="14" font-weight="700" fill="${INK}">${letter}</text>`
    );
  }
  return (
    `<polygon points="${x},${y} ${x - 6},${y + 11} ${x + 6},${y + 11}" fill="${INK}"/>` +
    `<line x1="${x}" y1="${y + 11}" x2="${x}" y2="${y + 22}" stroke="${INK}" stroke-width="1.5"/>` +
    `<rect x="${x - 11}" y="${y + 22}" width="22" height="22" fill="#ffffff" stroke="${INK}" stroke-width="1.5"/>` +
    `<text x="${x}" y="${y + 38}" text-anchor="middle" font-size="14" font-weight="700" fill="${INK}">${letter}</text>`
  );
};

/** boxed basic dimension */
const basicBox = (x: number, y: number, s: string, w = 34, h = 20) =>
  `<rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" fill="#ffffff" stroke="${INK}" stroke-width="1.4"/>` +
  `<text x="${x}" y="${y + 5}" text-anchor="middle" font-size="13" fill="${INK}">${s}</text>`;

const SVG_OPEN = (h: number) =>
  `<svg viewBox="0 0 460 ${h}" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">`;

// ===========================================================================
// LESSON FIGURES
// ===========================================================================

// --- fig 1: square vs round tolerance zone ---------------------------------
const figZones = `${SVG_OPEN(280)}
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="${INK}">The zone shape is the whole argument</text>
  <!-- LEFT: square zone -->
  <line x1="60" y1="150" x2="180" y2="150" stroke="${DIM}" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="120" y1="90" x2="120" y2="210" stroke="${DIM}" stroke-width="1" stroke-dasharray="5 4"/>
  <circle cx="120" cy="150" r="62" fill="none" stroke="${DIM}" stroke-width="1.2" stroke-dasharray="4 4"/>
  <rect x="76" y="106" width="88" height="88" fill="#fee2e2" fill-opacity="0.65" stroke="${HOT}" stroke-width="1.6"/>
  <line x1="120" y1="150" x2="164" y2="106" stroke="${KEY}" stroke-width="1.8"/>
  <circle cx="164" cy="106" r="3.6" fill="${KEY}"/>
  <circle cx="164" cy="150" r="3.6" fill="${INK}"/>
  <line x1="114" y1="150" x2="126" y2="150" stroke="${INK}" stroke-width="1.4"/>
  <line x1="120" y1="144" x2="120" y2="156" stroke="${INK}" stroke-width="1.4"/>
  <text x="170" y="100" font-size="12" fill="${KEY}" font-weight="600">0.141</text>
  <line x1="168" y1="152" x2="185" y2="157" stroke="${DIM}" stroke-width="1"/>
  <text x="188" y="161" font-size="12" fill="${INK}">0.100</text>
  <text x="120" y="232" text-anchor="middle" font-size="12" fill="${HOT}" font-weight="600">&plusmn;0.1 in x and y &#8594; square zone</text>
  <text x="120" y="250" text-anchor="middle" font-size="12" fill="${DIM}">corner reaches 0.141: 41% more error</text>
  <text x="120" y="266" text-anchor="middle" font-size="12" fill="${DIM}">dashed circle = &#8960;0.283 through corners</text>
  <!-- RIGHT: round zone -->
  <line x1="290" y1="150" x2="410" y2="150" stroke="${DIM}" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="350" y1="90" x2="350" y2="210" stroke="${DIM}" stroke-width="1" stroke-dasharray="5 4"/>
  <circle cx="350" cy="150" r="44" fill="#dbeafe" fill-opacity="0.75" stroke="${KEY}" stroke-width="1.6"/>
  <line x1="350" y1="150" x2="394" y2="150" stroke="${KEY}" stroke-width="1.6"/>
  <line x1="350" y1="150" x2="381" y2="119" stroke="${KEY}" stroke-width="1.6"/>
  <line x1="350" y1="150" x2="350" y2="106" stroke="${KEY}" stroke-width="1.6"/>
  <line x1="350" y1="150" x2="319" y2="181" stroke="${KEY}" stroke-width="1.6"/>
  <line x1="344" y1="150" x2="356" y2="150" stroke="${INK}" stroke-width="1.4"/>
  <line x1="350" y1="144" x2="350" y2="156" stroke="${INK}" stroke-width="1.4"/>
  <text x="398" y="146" font-size="12" fill="${KEY}" font-weight="600">0.100</text>
  <text x="350" y="232" text-anchor="middle" font-size="12" fill="${KEY}" font-weight="600">position &#8960;0.2 &#8594; round zone</text>
  <text x="350" y="250" text-anchor="middle" font-size="12" fill="${DIM}">0.100 allowed in every direction</text>
  <text x="350" y="266" text-anchor="middle" font-size="12" fill="${DIM}">matches how a bolt actually clears</text>
</svg>`;

// --- fig 2: annotated feature control frame --------------------------------
const figFCF = `${SVG_OPEN(238)}
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="${INK}">Feature control frame &#8212; read it left to right</text>
  <circle cx="100" cy="42" r="9" fill="${KEY}"/><text x="100" y="46.5" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">1</text>
  <circle cx="168" cy="42" r="9" fill="${KEY}"/><text x="168" y="46.5" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">2</text>
  <circle cx="214" cy="42" r="9" fill="${KEY}"/><text x="214" y="46.5" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">3</text>
  <circle cx="320" cy="42" r="9" fill="${KEY}"/><text x="320" y="46.5" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">4</text>
  ${fcf(70, 58, 42, [
    cSym(60, (cx, cy) => symPos(cx, cy)),
    cTol(120, "0.25", "M"),
    cText(46, "A", 17),
    cText(47, "B", 17),
    cText(47, "C", 17),
  ])}
  <circle cx="82" cy="128" r="8" fill="${KEY}"/><text x="82" y="132.5" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">1</text>
  <text x="100" y="132" font-size="12.5" fill="${INK}">Geometric characteristic &#8212; here, position</text>
  <circle cx="82" cy="154" r="8" fill="${KEY}"/><text x="82" y="158.5" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">2</text>
  <text x="100" y="158" font-size="12.5" fill="${INK}">Zone shape + value &#8212; &#8960; = cylinder, 0.25 wide</text>
  <circle cx="82" cy="180" r="8" fill="${KEY}"/><text x="82" y="184.5" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">3</text>
  <text x="100" y="184" font-size="12.5" fill="${INK}">Modifier &#8212; at MMC, so bonus tolerance applies</text>
  <circle cx="82" cy="206" r="8" fill="${KEY}"/><text x="82" y="210.5" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">4</text>
  <text x="100" y="210" font-size="12.5" fill="${INK}">Datums &#8212; A primary, B secondary, C tertiary</text>
</svg>`;

// --- fig 3: perpendicularity zone shapes -----------------------------------
const figPerp = `${SVG_OPEN(320)}
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="${INK}">Perpendicularity: the callout decides the zone shape</text>
  <text x="118" y="42" text-anchor="middle" font-size="12" fill="${DIM}">applied to a surface</text>
  <text x="342" y="42" text-anchor="middle" font-size="12" fill="${DIM}">applied to a size dimension</text>
  <!-- LEFT: two parallel planes -->
  <rect x="52" y="208" width="150" height="22" fill="#e2e8f0" stroke="${INK}" stroke-width="1.5"/>
  <line x1="60" y1="240" x2="70" y2="230" stroke="${DIM}" stroke-width="1"/>
  <line x1="78" y1="240" x2="88" y2="230" stroke="${DIM}" stroke-width="1"/>
  <line x1="96" y1="240" x2="106" y2="230" stroke="${DIM}" stroke-width="1"/>
  <line x1="114" y1="240" x2="124" y2="230" stroke="${DIM}" stroke-width="1"/>
  <polygon points="80,86 134,86 126,208 80,208" fill="#dbeafe" stroke="${INK}" stroke-width="1.6"/>
  <line x1="122" y1="86" x2="122" y2="208" stroke="${KEY}" stroke-width="1.4" stroke-dasharray="6 4"/>
  <line x1="140" y1="86" x2="140" y2="208" stroke="${KEY}" stroke-width="1.4" stroke-dasharray="6 4"/>
  <line x1="122" y1="74" x2="140" y2="74" stroke="${KEY}" stroke-width="1"/>
  <line x1="122" y1="70" x2="122" y2="78" stroke="${KEY}" stroke-width="1"/>
  <line x1="140" y1="70" x2="140" y2="78" stroke="${KEY}" stroke-width="1"/>
  <text x="150" y="70" font-size="12" fill="${KEY}" font-weight="600">0.1</text>
  <text x="150" y="150" font-size="12" fill="${HOT}">actual face</text>
  <text x="150" y="166" font-size="12" fill="${HOT}">tilts inside</text>
  ${datumSym(178, 230, "A")}
  ${fcf(34, 268, 26, [cSym(34, (cx, cy) => symPerp(cx, cy, 8)), cTol(52, "0.1", undefined, false), cText(32, "A", 14)])}
  <text x="118" y="312" text-anchor="middle" font-size="12" fill="${INK}">zone = two parallel planes 0.1 apart</text>
  <!-- RIGHT: cylindrical zone -->
  <rect x="262" y="208" width="176" height="22" fill="#e2e8f0" stroke="${INK}" stroke-width="1.5"/>
  <line x1="272" y1="240" x2="282" y2="230" stroke="${DIM}" stroke-width="1"/>
  <line x1="290" y1="240" x2="300" y2="230" stroke="${DIM}" stroke-width="1"/>
  <line x1="308" y1="240" x2="318" y2="230" stroke="${DIM}" stroke-width="1"/>
  <line x1="326" y1="240" x2="336" y2="230" stroke="${DIM}" stroke-width="1"/>
  <rect x="322" y="100" width="46" height="108" fill="#dbeafe" stroke="${INK}" stroke-width="1.6"/>
  <ellipse cx="345" cy="100" rx="23" ry="6" fill="#dbeafe" stroke="${INK}" stroke-width="1.6"/>
  <line x1="345" y1="86" x2="345" y2="222" stroke="${DIM}" stroke-width="1" stroke-dasharray="10 3 3 3"/>
  <line x1="337" y1="100" x2="337" y2="208" stroke="${KEY}" stroke-width="1.4" stroke-dasharray="6 4"/>
  <line x1="353" y1="100" x2="353" y2="208" stroke="${KEY}" stroke-width="1.4" stroke-dasharray="6 4"/>
  <ellipse cx="345" cy="100" rx="8" ry="2.6" fill="none" stroke="${KEY}" stroke-width="1.2"/>
  <ellipse cx="345" cy="208" rx="8" ry="2.6" fill="none" stroke="${KEY}" stroke-width="1.2"/>
  <path d="M 342 208 C 350 176 340 138 349 100" fill="none" stroke="${HOT}" stroke-width="1.8"/>
  <line x1="356" y1="140" x2="392" y2="128" stroke="${DIM}" stroke-width="1"/>
  <text x="396" y="126" font-size="12" fill="${KEY}" font-weight="600">&#8960;0.1</text>
  <text x="396" y="142" font-size="12" fill="${HOT}">axis</text>
  <text x="278" y="150" font-size="12" fill="${INK}">&#8960;20</text>
  <text x="278" y="166" font-size="12" fill="${INK}">boss</text>
  ${datumSym(414, 230, "A")}
  ${fcf(258, 268, 26, [cSym(34, (cx, cy) => symPerp(cx, cy, 8)), cTol(72, "0.1", undefined, true), cText(32, "A", 14)])}
  <text x="342" y="312" text-anchor="middle" font-size="12" fill="${INK}">zone = a cylinder &#8960;0.1 around the axis</text>
</svg>`;

// --- fig 4: position zones on a hole pattern -------------------------------
const figPos = `${SVG_OPEN(300)}
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="${INK}">Position: a &#8960; zone centred on true position</text>
  <rect x="40" y="48" width="250" height="170" fill="#e2e8f0" stroke="${INK}" stroke-width="1.8"/>
  <!-- hole 1 -->
  <circle cx="100" cy="95" r="15" fill="#ffffff" stroke="${INK}" stroke-width="1.5"/>
  <line x1="93" y1="95" x2="107" y2="95" stroke="${DIM}" stroke-width="1"/><line x1="100" y1="88" x2="100" y2="102" stroke="${DIM}" stroke-width="1"/>
  <circle cx="100" cy="95" r="9" fill="none" stroke="${KEY}" stroke-width="1.4" stroke-dasharray="4 3"/>
  <circle cx="104" cy="98" r="3" fill="${HOT}"/>
  <!-- hole 2: axis outside its zone -->
  <circle cx="230" cy="95" r="15" fill="#ffffff" stroke="${INK}" stroke-width="1.5"/>
  <line x1="223" y1="95" x2="237" y2="95" stroke="${DIM}" stroke-width="1"/><line x1="230" y1="88" x2="230" y2="102" stroke="${DIM}" stroke-width="1"/>
  <circle cx="230" cy="95" r="9" fill="none" stroke="${KEY}" stroke-width="1.4" stroke-dasharray="4 3"/>
  <circle cx="241" cy="90" r="3" fill="${HOT}"/>
  <!-- hole 3 -->
  <circle cx="100" cy="170" r="15" fill="#ffffff" stroke="${INK}" stroke-width="1.5"/>
  <line x1="93" y1="170" x2="107" y2="170" stroke="${DIM}" stroke-width="1"/><line x1="100" y1="163" x2="100" y2="177" stroke="${DIM}" stroke-width="1"/>
  <circle cx="100" cy="170" r="9" fill="none" stroke="${KEY}" stroke-width="1.4" stroke-dasharray="4 3"/>
  <circle cx="96" cy="174" r="3" fill="${HOT}"/>
  <!-- hole 4 -->
  <circle cx="230" cy="170" r="15" fill="#ffffff" stroke="${INK}" stroke-width="1.5"/>
  <line x1="223" y1="170" x2="237" y2="170" stroke="${DIM}" stroke-width="1"/><line x1="230" y1="163" x2="230" y2="177" stroke="${DIM}" stroke-width="1"/>
  <circle cx="230" cy="170" r="9" fill="none" stroke="${KEY}" stroke-width="1.4" stroke-dasharray="4 3"/>
  <circle cx="233" cy="165" r="3" fill="${HOT}"/>
  <!-- callout on the failing hole -->
  <line x1="300" y1="62" x2="246" y2="88" stroke="${DIM}" stroke-width="1"/>
  <text x="360" y="58" text-anchor="middle" font-size="12" fill="${HOT}" font-weight="600">axis outside its zone</text>
  <text x="360" y="74" text-anchor="middle" font-size="12" fill="${HOT}">&#8594; reject</text>
  <!-- basic dimensions -->
  <line x1="100" y1="218" x2="100" y2="252" stroke="${DIM}" stroke-width="1"/>
  <line x1="230" y1="218" x2="230" y2="252" stroke="${DIM}" stroke-width="1"/>
  <line x1="100" y1="246" x2="230" y2="246" stroke="${DIM}" stroke-width="1"/>
  ${basicBox(165, 246, "130")}
  <line x1="290" y1="95" x2="322" y2="95" stroke="${DIM}" stroke-width="1"/>
  <line x1="290" y1="170" x2="322" y2="170" stroke="${DIM}" stroke-width="1"/>
  <line x1="316" y1="95" x2="316" y2="170" stroke="${DIM}" stroke-width="1"/>
  ${basicBox(316, 132, "75", 30)}
  <!-- legend -->
  <circle cx="336" cy="182" r="3" fill="${HOT}"/>
  <text x="348" y="186" font-size="12" fill="${INK}">actual axis</text>
  <circle cx="336" cy="204" r="6" fill="none" stroke="${KEY}" stroke-width="1.4" stroke-dasharray="4 3"/>
  <text x="348" y="208" font-size="12" fill="${INK}">&#8960;0.25 zone</text>
  <line x1="330" y1="226" x2="342" y2="226" stroke="${DIM}" stroke-width="1"/>
  <line x1="336" y1="220" x2="336" y2="232" stroke="${DIM}" stroke-width="1"/>
  <text x="348" y="230" font-size="12" fill="${INK}">true position</text>
  ${fcf(40, 268, 28, [
    cSym(40, (cx, cy) => symPos(cx, cy)),
    cTol(96, "0.25", "M"),
    cText(30, "A", 14),
    cText(30, "B", 14),
    cText(30, "C", 14),
  ])}
  <text x="286" y="276" font-size="12" fill="${DIM}">basic dims locate the holes;</text>
  <text x="286" y="292" font-size="12" fill="${DIM}">the FCF tolerances them</text>
</svg>`;

// --- fig 5: bonus tolerance / virtual condition ----------------------------
const figBonus = `${SVG_OPEN(288)}
  <defs>
    <marker id="gdt5-ax" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="${INK}"/></marker>
    <marker id="gdt5-bn" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="${KEY}"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="${INK}">Bonus tolerance: the zone grows as the hole grows</text>
  <polygon points="120,220 360,220 360,60 120,180" fill="#dbeafe" fill-opacity="0.7"/>
  <line x1="80" y1="220" x2="404" y2="220" stroke="${INK}" stroke-width="1.6" marker-end="url(#gdt5-ax)"/>
  <line x1="80" y1="220" x2="80" y2="46" stroke="${INK}" stroke-width="1.6" marker-end="url(#gdt5-ax)"/>
  <line x1="120" y1="180" x2="360" y2="60" stroke="${KEY}" stroke-width="2.5"/>
  <line x1="80" y1="180" x2="360" y2="180" stroke="${DIM}" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="120" y1="220" x2="120" y2="180" stroke="${DIM}" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="360" y1="220" x2="360" y2="60" stroke="${DIM}" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="300" y1="180" x2="300" y2="94" stroke="${KEY}" stroke-width="1.6" marker-end="url(#gdt5-bn)"/>
  <text x="308" y="140" font-size="12" fill="${KEY}" font-weight="600">bonus</text>
  <text x="74" y="184" text-anchor="end" font-size="12" fill="${INK}">0.2</text>
  <text x="74" y="64" text-anchor="end" font-size="12" fill="${INK}">0.7</text>
  <text x="120" y="238" text-anchor="middle" font-size="12" fill="${INK}">MMC &#8960;10.00</text>
  <text x="360" y="238" text-anchor="middle" font-size="12" fill="${INK}">LMC &#8960;10.50</text>
  <text x="240" y="256" text-anchor="middle" font-size="12" fill="${DIM}">actual mating size of the hole</text>
  <text x="26" y="140" text-anchor="middle" font-size="12" fill="${DIM}" transform="rotate(-90 26 140)">total position tolerance</text>
  <text x="86" y="198" font-size="12" fill="${DIM}">stated &#8960;0.2</text>
  <text x="230" y="276" text-anchor="middle" font-size="12" fill="${INK}">virtual condition = 10.00 &minus; 0.20 = &#8960;9.80: the largest pin that always fits</text>
</svg>`;

// --- fig 6: profile of a surface -------------------------------------------
const figProfile = `${SVG_OPEN(300)}
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="${INK}">Profile of a surface: a band that follows the true profile</text>
  <path d="M 108.8 260 A 140 140 0 0 1 351.2 260 L 351.2 246 L 108.8 246 Z" fill="#e2e8f0" stroke="none"/>
  <path d="M 93.2 251 A 158 158 0 0 1 366.8 251 L 335.7 269 A 122 122 0 0 0 124.3 269 Z" fill="#dbeafe" fill-opacity="0.85" stroke="none"/>
  <path d="M 93.2 251 A 158 158 0 0 1 366.8 251" fill="none" stroke="${KEY}" stroke-width="1.4" stroke-dasharray="6 4"/>
  <path d="M 124.3 269 A 122 122 0 0 1 335.7 269" fill="none" stroke="${KEY}" stroke-width="1.4" stroke-dasharray="6 4"/>
  <path d="M 108.8 260 A 140 140 0 0 1 351.2 260" fill="none" stroke="${INK}" stroke-width="2"/>
  <path d="M 112 252 C 160 200 200 182 232 190 C 268 199 310 218 348 254" fill="none" stroke="${HOT}" stroke-width="1.8"/>
  <line x1="108.8" y1="260" x2="108.8" y2="284" stroke="${INK}" stroke-width="1.5"/>
  <line x1="351.2" y1="260" x2="351.2" y2="284" stroke="${INK}" stroke-width="1.5"/>
  <line x1="176.0" y1="181.5" x2="188.3" y2="215.4" stroke="${DIM}" stroke-width="1"/>
  <line x1="140" y1="150" x2="176" y2="181.5" stroke="${DIM}" stroke-width="1"/>
  <text x="136" y="146" text-anchor="end" font-size="12" fill="${KEY}" font-weight="600">0.2 out</text>
  <line x1="188.3" y1="215.4" x2="126" y2="162" stroke="${DIM}" stroke-width="1"/>
  <text x="122" y="166" text-anchor="end" font-size="12" fill="${KEY}" font-weight="600">0.2 in</text>
  <text x="300" y="150" font-size="12" fill="${HOT}">actual surface</text>
  <text x="300" y="166" font-size="12" fill="${HOT}">stays in the band</text>
  ${basicBox(230, 118, "R140", 44)}
  ${fcf(36, 40, 26, [
    cSym(34, (cx, cy) => symProfS(cx, cy)),
    cTol(52, "0.4", undefined, false),
    cText(30, "A", 14),
    cText(30, "B", 14),
  ])}
  <text x="230" y="296" text-anchor="middle" font-size="12" fill="${DIM}">no modifier &#8594; equal bilateral: 0.2 each side of the basic contour</text>
</svg>`;

// --- fig 7: runout setup ----------------------------------------------------
const figRunout = `${SVG_OPEN(278)}
  <defs>
    <marker id="gdt7-sw" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="${KEY}"/></marker>
  </defs>
  <text x="230" y="18" text-anchor="middle" font-weight="600" fill="${INK}">Runout: spin about the datum axis, read the indicator</text>
  <!-- dial indicator -->
  <circle cx="235" cy="52" r="25" fill="#ffffff" stroke="${INK}" stroke-width="2"/>
  <circle cx="235" cy="52" r="18" fill="none" stroke="${DIM}" stroke-width="1"/>
  <line x1="235" y1="52" x2="248" y2="37" stroke="${HOT}" stroke-width="2"/>
  <circle cx="235" cy="52" r="2.5" fill="${INK}"/>
  <rect x="231" y="77" width="8" height="16" fill="#e2e8f0" stroke="${INK}" stroke-width="1.2"/>
  <line x1="235" y1="93" x2="235" y2="98" stroke="${INK}" stroke-width="1.5"/>
  <!-- shaft -->
  <rect x="70" y="112" width="320" height="36" fill="#dbeafe" stroke="${INK}" stroke-width="1.6"/>
  <rect x="180" y="98" width="110" height="64" fill="#dbeafe" stroke="${INK}" stroke-width="1.6"/>
  <line x1="52" y1="130" x2="408" y2="130" stroke="${DIM}" stroke-width="1" stroke-dasharray="12 3 3 3"/>
  <text x="412" y="134" font-size="12" fill="${DIM}">A-B</text>
  <!-- V-blocks -->
  <path d="M 82 200 L 82 150 L 110 172 L 138 150 L 138 200 Z" fill="#e2e8f0" stroke="${INK}" stroke-width="1.5"/>
  <path d="M 322 200 L 322 150 L 350 172 L 378 150 L 378 200 Z" fill="#e2e8f0" stroke="${INK}" stroke-width="1.5"/>
  <line x1="78" y1="200" x2="142" y2="200" stroke="${INK}" stroke-width="1.5"/>
  <line x1="318" y1="200" x2="382" y2="200" stroke="${INK}" stroke-width="1.5"/>
  <line x1="84" y1="210" x2="94" y2="200" stroke="${DIM}" stroke-width="1"/>
  <line x1="102" y1="210" x2="112" y2="200" stroke="${DIM}" stroke-width="1"/>
  <line x1="120" y1="210" x2="130" y2="200" stroke="${DIM}" stroke-width="1"/>
  <line x1="324" y1="210" x2="334" y2="200" stroke="${DIM}" stroke-width="1"/>
  <line x1="342" y1="210" x2="352" y2="200" stroke="${DIM}" stroke-width="1"/>
  <line x1="360" y1="210" x2="370" y2="200" stroke="${DIM}" stroke-width="1"/>
  <!-- rotation arrow -->
  <path d="M 130 90 A 34 34 0 1 1 96 124" fill="none" stroke="${KEY}" stroke-width="1.8"/>
  <polygon points="90,128 104,120 104,132" fill="${KEY}"/>
  <text x="112" y="72" text-anchor="middle" font-size="12" fill="${KEY}" font-weight="600">rotate 360&deg;</text>
  <!-- section marker + traverse -->
  <line x1="235" y1="92" x2="235" y2="168" stroke="${KEY}" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="188" y1="178" x2="282" y2="178" stroke="${KEY}" stroke-width="1.6" marker-end="url(#gdt7-sw)"/>
  <text x="235" y="196" text-anchor="middle" font-size="12" fill="${KEY}">total runout: whole surface</text>
  <text x="235" y="212" text-anchor="middle" font-size="12" fill="${DIM}">circular runout: one section</text>
  <text x="450" y="52" text-anchor="end" font-size="12" fill="${INK}" font-weight="600">FIM = max &minus; min</text>
  ${fcf(40, 232, 26, [
    cSym(34, (cx, cy) => symRunT(cx, cy)),
    cTol(56, "0.05", undefined, false),
    cText(40, "A-B", 14),
  ])}
  <text x="180" y="250" font-size="12" fill="${DIM}">runout is always RFS &#8212; no MMC modifier</text>
</svg>`;

// ===========================================================================
// QUESTION FIGURES (base bank)
// ===========================================================================

const figQ01 = `${SVG_OPEN(230)}
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="${INK}">Coordinate tolerance zone, hole at the corner</text>
  <line x1="120" y1="120" x2="300" y2="120" stroke="${DIM}" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="210" y1="52" x2="210" y2="188" stroke="${DIM}" stroke-width="1" stroke-dasharray="5 4"/>
  <rect x="160" y="70" width="100" height="100" fill="#fee2e2" fill-opacity="0.6" stroke="${HOT}" stroke-width="1.6"/>
  <line x1="204" y1="120" x2="216" y2="120" stroke="${INK}" stroke-width="1.4"/>
  <line x1="210" y1="114" x2="210" y2="126" stroke="${INK}" stroke-width="1.4"/>
  <circle cx="260" cy="70" r="4" fill="${KEY}"/>
  <line x1="210" y1="120" x2="260" y2="70" stroke="${KEY}" stroke-width="1.8"/>
  <text x="268" y="64" font-size="12" fill="${KEY}" font-weight="600">measured hole axis</text>
  <text x="268" y="80" font-size="12" fill="${KEY}">x = +0.10, y = +0.10</text>
  <line x1="160" y1="192" x2="260" y2="192" stroke="${DIM}" stroke-width="1"/>
  <line x1="160" y1="186" x2="160" y2="198" stroke="${DIM}" stroke-width="1"/>
  <line x1="260" y1="186" x2="260" y2="198" stroke="${DIM}" stroke-width="1"/>
  <text x="210" y="212" text-anchor="middle" font-size="12" fill="${DIM}">0.2 wide (&plusmn;0.1 each way in x and y)</text>
  <text x="150" y="46" text-anchor="end" font-size="12" fill="${INK}">true</text>
  <text x="150" y="62" text-anchor="end" font-size="12" fill="${INK}">position</text>
  <line x1="152" y1="56" x2="204" y2="114" stroke="${DIM}" stroke-width="1"/>
</svg>`;

const figQ03 = `${SVG_OPEN(190)}
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="${INK}">Hole callout as it appears on the print</text>
  <text x="230" y="62" text-anchor="middle" font-size="16" fill="${INK}">&#8960;12.00 &minus; 12.40</text>
  ${fcf(120, 84, 34, [
    cSym(46, (cx, cy) => symPos(cx, cy)),
    cTol(104, "0.25", "M"),
    cText(24, "A", 15),
    cText(25, "B", 15),
    cText(25, "C", 15),
  ])}
  <line x1="230" y1="70" x2="230" y2="84" stroke="${INK}" stroke-width="1.2"/>
  <text x="230" y="150" text-anchor="middle" font-size="12" fill="${DIM}">the hole is produced at its MMC size</text>
  <text x="230" y="170" text-anchor="middle" font-size="12" fill="${DIM}">basic dimensions (not shown) locate it from A, B, C</text>
</svg>`;

const figQ06 = `${SVG_OPEN(300)}
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="${INK}">&#8960;20 boss, 50 tall, on datum face A</text>
  <rect x="120" y="196" width="220" height="24" fill="#e2e8f0" stroke="${INK}" stroke-width="1.6"/>
  <line x1="246" y1="232" x2="256" y2="220" stroke="${DIM}" stroke-width="1"/>
  <line x1="266" y1="232" x2="276" y2="220" stroke="${DIM}" stroke-width="1"/>
  <line x1="286" y1="232" x2="296" y2="220" stroke="${DIM}" stroke-width="1"/>
  <line x1="306" y1="232" x2="316" y2="220" stroke="${DIM}" stroke-width="1"/>
  <rect x="204" y="86" width="52" height="110" fill="#dbeafe" stroke="${INK}" stroke-width="1.6"/>
  <ellipse cx="230" cy="86" rx="26" ry="7" fill="#dbeafe" stroke="${INK}" stroke-width="1.6"/>
  <line x1="230" y1="72" x2="230" y2="212" stroke="${DIM}" stroke-width="1" stroke-dasharray="10 3 3 3"/>
  <line x1="262" y1="86" x2="392" y2="86" stroke="${DIM}" stroke-width="1"/>
  <line x1="346" y1="196" x2="392" y2="196" stroke="${DIM}" stroke-width="1"/>
  <line x1="386" y1="86" x2="386" y2="196" stroke="${DIM}" stroke-width="1"/>
  <line x1="380" y1="86" x2="392" y2="86" stroke="${DIM}" stroke-width="1"/>
  <line x1="380" y1="196" x2="392" y2="196" stroke="${DIM}" stroke-width="1"/>
  <text x="398" y="145" font-size="12" fill="${DIM}">50</text>
  <text x="128" y="120" text-anchor="middle" font-size="14" fill="${INK}">&#8960;20.0</text>
  <line x1="154" y1="120" x2="204" y2="132" stroke="${INK}" stroke-width="1.2"/>
  ${datumSym(160, 220, "A")}
  ${fcf(248, 248, 28, [
    cSym(36, (cx, cy) => symPerp(cx, cy, 8)),
    cTol(74, "0.1", undefined, true),
    cText(30, "A", 15),
  ])}
  <text x="40" y="292" font-size="12" fill="${DIM}">attached to the size dimension</text>
</svg>`;

const figQ09 = `${SVG_OPEN(260)}
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="${INK}">CMM result for one hole</text>
  <line x1="90" y1="150" x2="330" y2="150" stroke="${DIM}" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="180" y1="60" x2="180" y2="192" stroke="${DIM}" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="174" y1="150" x2="186" y2="150" stroke="${INK}" stroke-width="1.6"/>
  <line x1="180" y1="144" x2="180" y2="156" stroke="${INK}" stroke-width="1.6"/>
  <text x="176" y="140" text-anchor="end" font-size="12" fill="${INK}">true position</text>
  <circle cx="270" cy="90" r="4.5" fill="${HOT}"/>
  <text x="280" y="82" font-size="12" fill="${HOT}" font-weight="600">actual hole axis</text>
  <line x1="180" y1="150" x2="270" y2="150" stroke="${KEY}" stroke-width="1.2"/>
  <line x1="270" y1="150" x2="270" y2="90" stroke="${KEY}" stroke-width="1.2"/>
  <line x1="180" y1="150" x2="270" y2="90" stroke="${KEY}" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="225" y="168" text-anchor="middle" font-size="12" fill="${KEY}">&#916;x = 0.15</text>
  <text x="280" y="124" font-size="12" fill="${KEY}">&#916;y = 0.20</text>
  <text x="186" y="90" font-size="12" fill="${KEY}" font-weight="600">radial error</text>
  <text x="230" y="212" text-anchor="middle" font-size="12" fill="${DIM}">deviations measured from the basic dimensions</text>
  ${fcf(150, 224, 26, [
    cSym(32, (cx, cy) => symPos(cx, cy)),
    cTol(70, "0.5", undefined, true),
    cText(24, "A", 14),
    cText(24, "B", 14),
    cText(24, "C", 14),
  ])}
</svg>`;

const figQ10 = `${SVG_OPEN(250)}
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="${INK}">Locating pin on the fixture plate</text>
  <rect x="60" y="176" width="340" height="26" fill="#e2e8f0" stroke="${INK}" stroke-width="1.6"/>
  <rect x="196" y="76" width="46" height="100" fill="#dbeafe" stroke="${INK}" stroke-width="1.6"/>
  <ellipse cx="219" cy="76" rx="23" ry="6" fill="#dbeafe" stroke="${INK}" stroke-width="1.6"/>
  <line x1="188" y1="76" x2="188" y2="176" stroke="${HOT}" stroke-width="1.4" stroke-dasharray="6 4"/>
  <line x1="250" y1="76" x2="250" y2="176" stroke="${HOT}" stroke-width="1.4" stroke-dasharray="6 4"/>
  <text x="262" y="112" font-size="12" fill="${HOT}" font-weight="600">virtual condition</text>
  <text x="262" y="128" font-size="12" fill="${HOT}">boundary = ?</text>
  <text x="110" y="112" text-anchor="middle" font-size="14" fill="${INK}">&#8960;6.00 &minus; 6.10</text>
  <line x1="152" y1="116" x2="196" y2="126" stroke="${INK}" stroke-width="1.2"/>
  ${fcf(96, 210, 26, [
    cSym(32, (cx, cy) => symPos(cx, cy)),
    cTol(96, "0.30", "M"),
    cText(24, "A", 14),
    cText(24, "B", 14),
    cText(24, "C", 14),
  ])}
</svg>`;

const figQ12 = `${SVG_OPEN(270)}
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="${INK}">Profile callout on a contoured edge</text>
  <path d="M 100 230 A 130 130 0 0 1 360 230 L 360 246 L 100 246 Z" fill="#e2e8f0" stroke="none"/>
  <path d="M 84 222 A 146 146 0 0 1 376 222 L 348 236 A 114 114 0 0 0 112 236 Z" fill="#dbeafe" fill-opacity="0.85" stroke="none"/>
  <path d="M 84 222 A 146 146 0 0 1 376 222" fill="none" stroke="${KEY}" stroke-width="1.4" stroke-dasharray="6 4"/>
  <path d="M 112 236 A 114 114 0 0 1 348 236" fill="none" stroke="${KEY}" stroke-width="1.4" stroke-dasharray="6 4"/>
  <path d="M 100 230 A 130 130 0 0 1 360 230" fill="none" stroke="${INK}" stroke-width="2"/>
  <text x="230" y="205" text-anchor="middle" font-size="12" fill="${INK}">true profile (basic)</text>
  <line x1="230" y1="196" x2="230" y2="104" stroke="${INK}" stroke-width="1"/>
  <line x1="98" y1="140" x2="112" y2="158" stroke="${DIM}" stroke-width="1"/>
  <text x="56" y="136" font-size="12" fill="${KEY}" font-weight="600">0.4 zone</text>
  ${fcf(150, 244, 24, [
    cSym(32, (cx, cy) => symProfS(cx, cy)),
    cTol(50, "0.4", undefined, false),
    cText(28, "A", 14),
    cText(28, "B", 14),
  ])}
</svg>`;

const figQ13 = `${SVG_OPEN(240)}
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="${INK}">Bowed shaft inside its Rule #1 envelope</text>
  <rect x="70" y="88" width="320" height="76" fill="none" stroke="${KEY}" stroke-width="1.6" stroke-dasharray="7 4"/>
  <path d="M 70 108 C 160 82 300 82 390 108 L 390 144 C 300 118 160 118 70 144 Z" fill="#dbeafe" stroke="${INK}" stroke-width="1.6"/>
  <line x1="70" y1="126" x2="390" y2="126" stroke="${DIM}" stroke-width="1" stroke-dasharray="10 3 3 3"/>
  <text x="230" y="76" text-anchor="middle" font-size="12" fill="${KEY}" font-weight="600">perfect-form envelope at MMC: &#8960;20.20</text>
  <text x="230" y="188" text-anchor="middle" font-size="12" fill="${INK}">every local diameter measures &#8960;20.00</text>
  <line x1="70" y1="200" x2="390" y2="200" stroke="${DIM}" stroke-width="1"/>
  <line x1="70" y1="194" x2="70" y2="206" stroke="${DIM}" stroke-width="1"/>
  <line x1="390" y1="194" x2="390" y2="206" stroke="${DIM}" stroke-width="1"/>
  <text x="230" y="222" text-anchor="middle" font-size="12" fill="${DIM}">shaft dimensioned &#8960;20.00 &minus; 20.20, no form callout</text>
</svg>`;

const figQ15 = `${SVG_OPEN(280)}
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="${INK}">Four-hole pattern, hole 3 inspected</text>
  <rect x="60" y="44" width="240" height="160" fill="#e2e8f0" stroke="${INK}" stroke-width="1.8"/>
  <circle cx="120" cy="88" r="16" fill="#ffffff" stroke="${INK}" stroke-width="1.5"/>
  <circle cx="240" cy="88" r="16" fill="#ffffff" stroke="${INK}" stroke-width="1.5"/>
  <circle cx="240" cy="160" r="16" fill="#ffffff" stroke="${INK}" stroke-width="1.5"/>
  <circle cx="120" cy="160" r="16" fill="#ffffff" stroke="${INK}" stroke-width="1.8"/>
  <line x1="112" y1="160" x2="128" y2="160" stroke="${DIM}" stroke-width="1"/>
  <line x1="120" y1="152" x2="120" y2="168" stroke="${DIM}" stroke-width="1"/>
  <circle cx="127" cy="166" r="3.4" fill="${HOT}"/>
  <text x="120" y="196" text-anchor="middle" font-size="12" fill="${HOT}" font-weight="600">hole 3</text>
  <text x="316" y="72" font-size="12" fill="${INK}">hole size &#8960;10.0 &minus; 10.5</text>
  <text x="316" y="92" font-size="12" fill="${HOT}">hole 3 made at &#8960;10.30</text>
  <text x="316" y="112" font-size="12" fill="${HOT}">offset x = 0.18</text>
  <text x="316" y="132" font-size="12" fill="${HOT}">offset y = 0.16</text>
  ${fcf(60, 222, 28, [
    cSym(38, (cx, cy) => symPos(cx, cy)),
    cTol(88, "0.2", "M"),
    cText(28, "A", 14),
    cText(28, "B", 14),
    cText(28, "C", 14),
  ])}
  <text x="60" y="268" font-size="12" fill="${DIM}">all four holes located by basic dimensions</text>
</svg>`;

const figQ19 = `${SVG_OPEN(250)}
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="${INK}">Ground shaft that passed circular runout</text>
  <polygon points="90,104 380,96 380,152 90,144" fill="#dbeafe" stroke="${INK}" stroke-width="1.6"/>
  <line x1="70" y1="124" x2="400" y2="124" stroke="${DIM}" stroke-width="1" stroke-dasharray="12 3 3 3"/>
  <circle cx="150" cy="60" r="17" fill="#ffffff" stroke="${INK}" stroke-width="1.8"/>
  <line x1="150" y1="60" x2="160" y2="49" stroke="${HOT}" stroke-width="1.8"/>
  <rect x="146" y="77" width="8" height="14" fill="#e2e8f0" stroke="${INK}" stroke-width="1.2"/>
  <line x1="150" y1="91" x2="150" y2="102" stroke="${INK}" stroke-width="1.4"/>
  <line x1="150" y1="96" x2="330" y2="96" stroke="${KEY}" stroke-width="1.4" stroke-dasharray="5 4"/>
  <polygon points="336,96 324,91 324,101" fill="${KEY}"/>
  <text x="288" y="78" text-anchor="middle" font-size="12" fill="${KEY}">indicator can be moved along the shaft</text>
  <text x="230" y="190" text-anchor="middle" font-size="12" fill="${INK}">every single cross-section reads within 0.05 FIM</text>
  <text x="230" y="208" text-anchor="middle" font-size="12" fill="${HOT}">yet the mating bore binds along its length</text>
  ${fcf(150, 218, 24, [
    cSym(30, (cx, cy) => symRunC(cx, cy)),
    cTol(52, "0.05", undefined, false),
    cText(38, "A-B", 14),
  ])}
</svg>`;

const figQ20 = `${SVG_OPEN(220)}
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="${INK}">Composite position callout on a 6-hole pattern</text>
  <rect x="120" y="50" width="220" height="76" fill="#ffffff" stroke="${INK}" stroke-width="1.8"/>
  <line x1="120" y1="88" x2="340" y2="88" stroke="${INK}" stroke-width="1.8"/>
  <line x1="166" y1="50" x2="166" y2="126" stroke="${INK}" stroke-width="1.8"/>
  <line x1="262" y1="50" x2="262" y2="88" stroke="${INK}" stroke-width="1.8"/>
  <line x1="288" y1="50" x2="288" y2="88" stroke="${INK}" stroke-width="1.8"/>
  <line x1="314" y1="50" x2="314" y2="88" stroke="${INK}" stroke-width="1.8"/>
  <line x1="262" y1="88" x2="262" y2="126" stroke="${INK}" stroke-width="1.8"/>
  ${symPos(143, 88)}
  ${dia(186, 69, 7)}
  <text x="222" y="75" text-anchor="middle" font-size="15" font-weight="600" fill="${INK}">0.8</text>
  <text x="275" y="75" text-anchor="middle" font-size="15" font-weight="600" fill="${INK}">A</text>
  <text x="301" y="75" text-anchor="middle" font-size="15" font-weight="600" fill="${INK}">B</text>
  <text x="327" y="75" text-anchor="middle" font-size="15" font-weight="600" fill="${INK}">C</text>
  ${dia(186, 107, 7)}
  <text x="222" y="113" text-anchor="middle" font-size="15" font-weight="600" fill="${INK}">0.2</text>
  <text x="275" y="113" text-anchor="middle" font-size="15" font-weight="600" fill="${INK}">A</text>
  <text x="356" y="72" font-size="12" fill="${DIM}">pattern-locating</text>
  <text x="356" y="112" font-size="12" fill="${DIM}">feature-relating</text>
  <text x="230" y="164" text-anchor="middle" font-size="12" fill="${INK}">measured: whole pattern shifted 0.30 mm off datum B</text>
  <text x="230" y="184" text-anchor="middle" font-size="12" fill="${INK}">hole-to-hole spacing is exactly on basic</text>
</svg>`;

const content: TopicContent = {
  lesson: {
    title: "GD&T: Geometric Dimensioning & Tolerancing",
    intro: `<p>A plus-minus dimension says how big something is. GD&amp;T says what it has to <em>do</em>. That difference matters because &plusmn; describes a part inside a coordinate system that exists only in the designer's head, while GD&amp;T describes tolerance <strong>zones</strong> tied to a datum reference frame. Designer, machinist and inspector then measure the same thing the same way.</p>
<p>What follows: why &plusmn; runs out of road, how to read a feature control frame left to right, the form, orientation, location, profile and runout families, material condition modifiers and the bonus tolerance they buy, the position arithmetic you will be asked to do on a whiteboard, and how to pick a control that inspection can afford.</p>`,
    sections: [
      {
        heading: "Why plus-minus tolerancing runs out of road",
        html: `<p>Locate a hole with 30 &plusmn;0.1 in x and 20 &plusmn;0.1 in y and you have quietly specified a <strong>square</strong> tolerance zone, 0.2 mm on a side. The bolt that goes through that hole has no opinion about x and y separately. It sees the <em>radial</em> distance from where the hole should be, and a square zone hands out radial freedom unevenly.</p>
<figure class="fig">${figZones}<figcaption>The same intent, two zone shapes. A hole sitting exactly at the corner of the &plusmn;0.1 square is 0.141 mm from true position, 41% farther than one displaced 0.100 mm straight along an axis. The print accepts both.</figcaption></figure>
<p>Along an axis the square allows 0.100 mm of error. On the diagonal it allows &radic;(0.1&sup2; + 0.1&sup2;) = <strong>0.141 mm</strong>, 41% more. A coordinate-toleranced print is therefore too tight in four directions and too loose in four others at the same time. Three more failures grow from that same root:</p>
<ul>
<li><strong>No stated origin.</strong> "30 from the edge" leaves three questions open: which edge, touched where, in what order. Two inspectors get two answers and both are defensible.</li>
<li><strong>No bonus tolerance.</strong> A hole made larger than minimum carries extra clearance that could pay for extra location error. &plusmn; has no mechanism to collect it, so good parts get scrapped.</li>
<li><strong>Tolerance stacks accumulate.</strong> Chain dimensions add up. Basic dimensions from a common datum frame do not.</li>
</ul>
<p>Converting a coordinate tolerance to position is arithmetic. The circle that <em>circumscribes</em> the square, the generous conversion, has diameter &radic;2 times the full square width:</p>
<p class="eq">&#8960;T = 2&radic;2 &middot; t = 2.83 t&nbsp;&nbsp;&nbsp;&nbsp;(t = the &plusmn; value on each axis)</p>
<p>The circle <em>inscribed</em> in the square, &#8960;T = 2t, is the conservative conversion. It is never more permissive than the original print, and it throws away 21.5% of the zone area.</p>
<div class="callout"><strong>Zone shape is the root cause.</strong> &plusmn; tolerancing gets the shape wrong. Ambiguous origin, no bonus and accumulating stacks are all downstream of the same mismatch between the drawing and the function.</div>`,
      },
      {
        heading: "Reading a feature control frame",
        html: `<p>A feature control frame (FCF) is read strictly left to right, and each compartment answers one question.</p>
<figure class="fig">${figFCF}<figcaption>The four things an FCF tells you, in order: what characteristic, what zone shape and size, what modifier, and which datum reference frame.</figcaption></figure>
<table>
<thead><tr><th>Compartment</th><th>Answers</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Characteristic symbol</td><td>Which geometric property is being controlled</td><td>position, flatness, profile&hellip;</td></tr>
<tr><td>Tolerance</td><td>Zone shape (&#8960; = cylindrical) and its size</td><td>&#8960;0.25</td></tr>
<tr><td>Material modifier</td><td>Whether tolerance grows with feature size</td><td>MMC, LMC, or blank (RFS)</td></tr>
<tr><td>Datum references</td><td>The frame the zone is held in, in precedence order</td><td>A primary, B secondary, C tertiary</td></tr>
</tbody>
</table>
<p>Two habits separate a fluent reader from a beginner:</p>
<ul>
<li><strong>Look for the &#8960;.</strong> With it, the zone is a cylinder. Without it, two parallel planes, or two parallel lines in a cross-section. That one character changes the zone area by a factor of &pi;/4 and decides whether the control is direction-neutral.</li>
<li><strong>Boxed dimensions are basic.</strong> A number in a rectangle carries <em>no</em> tolerance of its own. It defines the theoretically exact location or contour, and the FCF supplies the only tolerance. A boxed 130 and a 130 &plusmn;0.2 on the same feature means the print is wrong.</li>
</ul>
<p>The datum compartment names a datum reference frame; how that frame is physically established belongs to the datums topic. For reading purposes the letters are a <em>sequence</em>, not a set. A|B|C means something different from B|A|C.</p>`,
      },
      {
        heading: "Form and orientation: what shape is the zone?",
        html: `<p><strong>Form</strong> controls constrain a feature against its own perfect counterpart. They never take a datum. A datum letter after flatness means the print is wrong.</p>
<table>
<thead><tr><th>Form control</th><th>Zone</th><th>Applies to</th></tr></thead>
<tbody>
<tr><td>Flatness</td><td>Two parallel planes, t apart</td><td>A planar surface</td></tr>
<tr><td>Straightness (surface)</td><td>Two parallel lines in the view plane</td><td>Line elements of a surface</td></tr>
<tr><td>Circularity</td><td>Two concentric circles, t apart <em>radially</em></td><td>One cross-section at a time</td></tr>
<tr><td>Cylindricity</td><td>Two concentric cylinders, t apart radially</td><td>The whole cylindrical surface</td></tr>
</tbody>
</table>
<p>Cylindricity is the expensive one. It bounds roundness, straightness and taper at once, and it is the only single control that guarantees a bore will not bind over a long stroke. Circularity alone will happily pass a perfectly round but badly tapered bore.</p>
<p>Perpendicularity, parallelism and angularity are the <strong>orientation</strong> family. All three are the same control; they differ only in the basic angle they imply, 90&deg;, 0&deg;, or a stated one. They always need at least one datum, and they constrain <em>tilt only</em>, never location.</p>
<figure class="fig">${figPerp}<figcaption>Same characteristic, same value, two different zones. Attached to a surface with a leader, perpendicularity 0.1 gives two parallel planes. Attached to a size dimension with &#8960; in the frame, it gives a cylindrical zone that the derived axis must lie within.</figcaption></figure>
<div class="callout warn"><strong>Orientation does not locate.</strong> A boss face carries perpendicularity 0.1 to A and measures 50.6 mm from A against a 50 &plusmn;0.2 dimension. Perpendicularity is not violated: the zone is square to A but free to slide along it. The size dimension is what failed, and it is a separate verdict.</div>`,
      },
      {
        heading: "Position: the workhorse and its arithmetic",
        html: `<p>Position locates a <em>feature of size</em>: a hole, a pin, a slot, a boss. Basic dimensions put true position exactly where it belongs. The FCF supplies a cylindrical zone of diameter t centred there, and the feature's derived axis must lie inside it.</p>
<figure class="fig">${figPos}<figcaption>A four-hole pattern. Every zone is the same diameter and every zone is centred on a basic-dimensioned true position. Three axes fall inside; one does not.</figcaption></figure>
<p>Three calculations come up over and over.</p>
<p><strong>1. Position error from a measured deviation.</strong> The CMM reports the axis at some &Delta;x, &Delta;y from true position. Double that radial miss, because the tolerance is stated as a <em>diameter</em>:</p>
<p class="eq">e = 2&radic;(&Delta;x&sup2; + &Delta;y&sup2;)</p>
<p>Forgetting the factor of two is the most common GD&amp;T arithmetic error there is. &Delta;x = 0.15, &Delta;y = 0.20 gives &radic;0.0625 = 0.25 radial, so e = <strong>0.50</strong>. Against a &#8960;0.5 callout that is exactly at the limit, not comfortably inside it.</p>
<p><strong>2. Fastener formulas.</strong> For a <em>floating</em> fastener (clearance holes in both parts, a bolt and nut through them), each part can carry</p>
<p class="eq">T = H<sub>MMC</sub> &minus; F<sub>MMC</sub></p>
<p>For a <em>fixed</em> fastener (one part threaded or press-fitted, so the fastener cannot move), the same clearance must be shared between both parts:</p>
<p class="eq">T = (H<sub>MMC</sub> &minus; F<sub>MMC</sub>) / 2</p>
<p>H is the smallest clearance hole and F the largest fastener. The split need not be equal. If tooling has already pinned one part at T<sub>1</sub>, the other gets the remainder.</p>
<p><strong>3. Composite position.</strong> A two-segment frame with one position symbol spanning both rows says two things at once. The upper (pattern-locating) tolerance holds the pattern <em>as a group</em> to the full datum frame. The lower (feature-relating) tolerance holds hole-to-hole spacing more tightly and repeats only the orientation datums. A pattern shifted bodily but internally perfect passes the lower segment outright.</p>`,
      },
      {
        heading: "Material condition, bonus tolerance, virtual condition, Rule #1",
        html: `<p>A material condition modifier ties the geometric tolerance to the feature's produced size.</p>
<ul>
<li><strong>MMC</strong>, maximum material condition: the <em>smallest</em> hole, the <em>largest</em> shaft. The condition in which assembly is hardest.</li>
<li><strong>LMC</strong>, least material condition: the largest hole, the smallest shaft. Used to protect wall thickness and edge distance.</li>
<li><strong>RFS</strong>, regardless of feature size, the default when no modifier appears. The stated tolerance applies at every produced size and you get nothing extra.</li>
</ul>
<p><strong>Bonus tolerance</strong> is the departure of the produced feature from the stated material condition, handed back to you as extra geometric tolerance:</p>
<p class="eq">bonus = | actual mating size &minus; MMC size |&nbsp;&nbsp;&nbsp;&nbsp;T<sub>total</sub> = T<sub>stated</sub> + bonus</p>
<figure class="fig">${figBonus}<figcaption>A hole specified &#8960;10.00&ndash;10.50 with position &#8960;0.2 at MMC. Produce it at 10.30 and you get 0.30 of bonus, so the zone is &#8960;0.50. At MMC there is no bonus at all, which is a very common misread.</figcaption></figure>
<p>Bonus is free because it is real clearance you already paid for: a bigger hole physically tolerates more mislocation before the fastener interferes. That is why the whole scheme collapses into one boundary, the <strong>virtual condition</strong>, the worst-case envelope the feature can occupy:</p>
<p class="eq">VC<sub>internal</sub> = MMC &minus; T&nbsp;&nbsp;&nbsp;&nbsp;VC<sub>external</sub> = MMC + T</p>
<p>Two parts assemble if the hole's virtual condition is at least the pin's virtual condition. This is the sentence to say out loud in an interview, because it turns a tolerance argument into a single number comparison, and it is exactly what a functional gage measures: a gage pin is cut to the hole's virtual condition.</p>
<p><strong>Rule #1 (the envelope principle)</strong> says that for an individual regular feature of size, perfect form is required at MMC. A shaft dimensioned &#8960;20.00&ndash;20.20 must fit inside a perfect cylinder of &#8960;20.20; produced at 20.00 everywhere, it may bow up to 0.20 and still comply. Where Rule #1 does <em>not</em> apply:</p>
<ul>
<li>Commercial stock (bar, tube, sheet), which is governed by its own standard.</li>
<li>Features carrying the independency symbol, or non-rigid parts with a free-state note.</li>
<li>Relationships <em>between</em> features: Rule #1 never controls one feature against another.</li>
<li>A straightness tolerance applied to the derived median line at MMC deliberately overrides it, pushing the boundary out to MMC + t.</li>
</ul>`,
      },
      {
        heading: "Profile, runout, and choosing a control that pays for itself",
        html: `<p><strong>Profile of a surface</strong> is the most versatile control on the drawing. The zone is a band of width t that follows the basic contour, and with datums referenced it controls size, form, orientation and location of that surface simultaneously. One callout instead of four.</p>
<figure class="fig">${figProfile}<figcaption>Profile of a surface 0.4 to A|B. With no modifier the band is equally disposed: 0.2 outside and 0.2 inside the basic contour. The Ⓤ modifier lets you push it unilaterally, e.g. 0.4 outside and 0 inside.</figcaption></figure>
<p><strong>Profile of a line</strong> applies the same band to each cross-section independently. Use it when the part is allowed to twist or sag along its span, as sheet metal, extrusions and an airfoil rib do, and you only care about the section shape.</p>
<p><strong>Runout</strong> is what you specify on anything that spins. It is measured as full indicator movement while the part rotates about a datum axis, and it is always RFS, because there is no MMC modifier on runout.</p>
<figure class="fig">${figRunout}<figcaption>Circular runout fixes the indicator at one cross-section; total runout sweeps it across the whole surface. FIM is a diametral reading: a perfectly round part running 0.02 eccentric shows 0.04 FIM.</figcaption></figure>
<ul>
<li><strong>Circular runout</strong> catches circularity plus eccentricity, one section at a time. A tapered journal passes it everywhere and still binds.</li>
<li><strong>Total runout</strong> adds straightness, taper and cylindricity along the length. On a face it catches perpendicularity to the axis plus flatness.</li>
<li><strong>Concentricity and symmetry</strong> are gone from ASME Y14.5-2018 and should be gone from your prints. They control <em>derived median points</em>, which means a full surface scan on a CMM, no functional gage, and no MMC modifier. Use runout for rotating parts, position for located axes, profile for anything else.</li>
</ul>
<p><strong>The gage-able test.</strong> Ask: could a machinist build a hard gage that answers pass/fail? A position tolerance at MMC to a well-defined frame can be checked by dropping the part over fixed pins cut to virtual condition, in seconds per part. RFS position, concentricity, and profile on a free-form surface all require a CMM. Cost climbs roughly like this: flatness on a surface plate &rarr; position at MMC on a functional gage &rarr; position RFS on a CMM &rarr; profile everywhere &rarr; cylindricity on a roundness machine.</p>
<div class="callout warn"><strong>When GD&amp;T is overkill:</strong> a clearance hole with 1 mm of slop does not need &#8960;0.1 at MMC. Every tightened zone buys scrap and inspection time. Size the tolerance from the clearance the assembly actually has. The fastener formulas above tell you exactly how much you are allowed to give away.</div>`,
      },
    ],
    equations: [
      {
        name: "Position error from a measured deviation",
        formula: "e = 2&radic;(&Delta;x&sup2; + &Delta;y&sup2;)",
        note: "&Delta;x, &Delta;y are the axis deviations from the basic (true) position. The factor 2 converts a radial miss to the diametral zone the FCF states.",
      },
      {
        name: "Coordinate-to-position conversion",
        formula: "&#8960;T = 2&radic;2 &middot; t&nbsp;&nbsp;(circumscribed)&nbsp;&nbsp;or&nbsp;&nbsp;&#8960;T = 2t&nbsp;&nbsp;(inscribed)",
        note: "t is the &plusmn; value on each axis. The circumscribed circle never rejects a part the &plusmn; print accepted; the inscribed circle never accepts one it rejected.",
      },
      {
        name: "Bonus tolerance",
        formula: "bonus = | actual mating size &minus; MMC |",
        note: "Applies only when Ⓜ appears in the tolerance compartment. Swap MMC for LMC when the modifier is Ⓛ. RFS gets no bonus at all.",
      },
      {
        name: "Total geometric tolerance",
        formula: "T<sub>total</sub> = T<sub>stated</sub> + bonus",
        note: "T<sub>stated</sub> is the number in the frame. At MMC exactly, bonus = 0 and T<sub>total</sub> = T<sub>stated</sub>.",
      },
      {
        name: "Virtual condition",
        formula: "VC<sub>internal</sub> = MMC &minus; T&nbsp;&nbsp;&nbsp;&nbsp;VC<sub>external</sub> = MMC + T",
        note: "The worst-case boundary the feature may occupy. Assembly is guaranteed when the hole's VC &ge; the pin's VC.",
      },
      {
        name: "Floating fastener",
        formula: "T = H<sub>MMC</sub> &minus; F<sub>MMC</sub>",
        note: "Both parts have clearance holes. H<sub>MMC</sub> is the smallest hole, F<sub>MMC</sub> the largest fastener. Each part gets the full T.",
      },
      {
        name: "Fixed fastener",
        formula: "T = (H<sub>MMC</sub> &minus; F<sub>MMC</sub>) / 2",
        note: "One part is threaded or press-fitted, so the clearance is shared. Unequal splits are allowed provided T<sub>1</sub> + T<sub>2</sub> = H<sub>MMC</sub> &minus; F<sub>MMC</sub>.",
      },
      {
        name: "Functional gage pin size",
        formula: "D<sub>gage</sub> = hole MMC &minus; T<sub>position</sub>",
        note: "The gage pin is cut to the hole's virtual condition. If the part drops over the pins, it passes. That is why MMC callouts are cheap to inspect.",
      },
      {
        name: "Runout from eccentricity",
        formula: "FIM = 2e",
        note: "e is the radial offset of a perfectly round surface from the datum axis. FIM is full indicator movement over one revolution, so it reads the diametral swing.",
      },
    ],
    interviewTips: [
      "Lead with the square-versus-round zone argument. It shows fastest that you know why GD&T exists, not just what the symbols look like.",
      "Say the factor of two out loud: position error is 2 times the radial deviation, because the zone is stated as a diameter.",
      "With an MMC modifier, reduce the whole problem to virtual condition. One number per feature, and assembly becomes a comparison.",
      "Never call out concentricity or symmetry. Name the replacement instead (runout, position, or profile) and the reason: derived median points cannot be gaged.",
      "Ask whether a hard gage can check it before you finalize a callout. If it cannot, you have just committed the program to CMM time on every part.",
      "Tie the tolerance value back to the clearance available. Quoting the floating- or fixed-fastener formula shows you sized the tolerance rather than copied it.",
    ],
  },

  questions: [
    {
      id: "gd-and-t-q01",
      type: "mc",
      difficulty: 1,
      figure: figQ01,
      prompt: `<p>A hole is located with 30 &plusmn;0.1 in x and 20 &plusmn;0.1 in y. Inspection finds the axis exactly at the corner of the zone: +0.10 in x and +0.10 in y. What is the verdict, and what does it reveal about the print?</p>`,
      choices: [
        "Fails &mdash; the 0.141 mm radial error is outside the 0.1 mm the print allows.",
        "Fails &mdash; a diagonal error has to be split between the two &plusmn;0.1 limits, so each gets 0.071.",
        "Passes &mdash; each axis is inside &plusmn;0.1, yet the hole is 0.141 from true position.",
        "Passes, and a &#8960;0.2 position callout would have allowed exactly the same corner point.",
      ],
      answer: 2,
      explanation: `<p>The part passes. Coordinate tolerances are checked axis by axis, and both readings sit exactly on their limits.</p>
<p class="eq">radial error = &radic;(0.10&sup2; + 0.10&sup2;) = &radic;0.02 = 0.141 mm</p>
<p>So a conforming hole can be 0.141 from where the drawing wanted it, 41% further than the same print allows along x or y alone. The square zone is an artifact of writing location in Cartesian coordinates. The bolt going through the hole only feels radial clearance, and that mismatch is the whole argument for a round position zone.</p>
<p>No round zone reproduces the square exactly. &#8960;0.283 circumscribes it and accepts this corner point. &#8960;0.2 inscribes it and would reject the part, since 2(0.141) = 0.283 exceeds 0.2.</p>`,
    },
    {
      id: "gd-and-t-q02",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A hole is currently located with &plusmn;0.1 in both x and y. You want to convert to a position tolerance that is <strong>never tighter</strong> than the existing print &mdash; the circle that circumscribes the square zone. What diameter, in mm?</p>`,
      answer: 0.283,
      unit: "mm",
      explanation: `<p>The &plusmn;0.1 limits make a square zone 0.2 mm on a side, and the circle through its corners has a diameter equal to the diagonal.</p>
<p class="eq">&#8960;T = 0.2 &middot; &radic;2 = 2&radic;2 &middot; (0.1) = <strong>0.283 mm</strong></p>
<p>Answering 0.2 gives the <em>inscribed</em> circle instead. That conversion never accepts a part the &plusmn; print rejected, but it throws away 21.5% of the zone area. Circumscribed protects the supplier's yield; inscribed protects a marginal assembly.</p>`,
    },
    {
      id: "gd-and-t-q03",
      type: "mc",
      difficulty: 1,
      figure: figQ03,
      prompt: `<p>The hole shown is specified &#8960;12.00&ndash;12.40 and carries the feature control frame in the figure. The hole is produced at its MMC size. What total position tolerance is available?</p>`,
      choices: ["&#8960;0.65 mm", "&#8960;0.125 mm", "&#8960;0.45 mm", "&#8960;0.25 mm"],
      answer: 3,
      explanation: `<p>The hole was produced right at MMC, so there is no departure to collect.</p>
<p class="eq">bonus = | actual mating size &minus; MMC | = | 12.00 &minus; 12.00 | = 0</p>
<p class="eq">T<sub>total</sub> = 0.25 + 0 = <strong>&#8960;0.25 mm</strong></p>
<p>MMC for a hole is the <em>smallest</em> size. At 12.00 there is no spare clearance around the fastener, so Ⓜ buys nothing here. It only starts paying as the hole grows.</p>`,
    },
    {
      id: "gd-and-t-q04",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A sealing face must be flat within 0.05 mm so the gasket seats evenly. You do not care where the face sits, how thick the part is, or how the face is oriented to anything else. Which callout, and does it reference a datum?</p>`,
      choices: [
        "Parallelism 0.05 to A &mdash; datum required.",
        "Perpendicularity 0.05 to A &mdash; datum required.",
        "Flatness 0.05 &mdash; no datum reference.",
        "Profile of a surface 0.05 to A &mdash; datum required.",
      ],
      answer: 2,
      explanation: `<p>Every point on the face must lie between two parallel planes 0.05 apart, and nothing else on the part is involved. That is <strong>flatness</strong>, a form control, and form controls take no datum. The zone floats to wherever it best fits the surface.</p>
<p>A datum would over-specify. Parallelism to A also forces the face to stay parallel to A, so a tilted-but-flat face fails. Profile to A locates it as well. Both are legitimate controls for a <em>different</em> requirement, and both cost more to inspect.</p>
<p>Flatness is checked by sweeping an indicator over the face on a surface plate and taking max minus min. A few seconds, no CMM. That cheapness follows directly from picking the control that matches the function.</p>`,
    },
    {
      id: "gd-and-t-q05",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A shaft journal is perfectly round, but its axis is offset 0.02 mm from the datum axis the part is rotated about. What circular runout (full indicator movement) will the dial gauge read, in mm?</p>`,
      answer: 0.04,
      unit: "mm",
      explanation: `<p>Runout is a total indicator sweep. Over one revolution the surface advances toward the indicator by e at one angular position and retreats by e half a turn later.</p>
<p class="eq">FIM = 2e = 2(0.02) = <strong>0.04 mm</strong></p>
<p>Answering 0.02 reports the eccentricity itself. The doubling is what makes runout a diametral quantity, the same factor-of-two habit position tolerances need.</p>`,
    },
    {
      id: "gd-and-t-q06",
      type: "mc",
      difficulty: 1,
      figure: figQ06,
      prompt: `<p>The &#8960;20 boss shown stands 50 mm above datum face A. The feature control frame is attached to the &#8960;20 size dimension and contains a diameter sign. What is the tolerance zone?</p>`,
      choices: [
        "Two parallel planes 0.1 apart and perpendicular to A, bounding the boss surface.",
        "A cylinder &#8960;0.1 centred on the boss axis as produced, rather than on true position.",
        "Two coaxial cylinders 0.1 apart radially, which is how a diameter symbol reads.",
        "A cylinder &#8960;0.1 perpendicular to A at true position, containing the boss axis.",
      ],
      answer: 3,
      explanation: `<p>Two clues fix the zone shape. The frame hangs off the <em>size</em> dimension, so the control applies to the derived axis rather than the surface, and the &#8960; in the tolerance compartment makes the zone cylindrical.</p>
<p>So it is a cylinder 0.1 mm in diameter and 50 mm long, held perfectly square to datum plane A, and the boss axis must lie entirely inside it.</p>
<p>Two parallel planes is what a leader to a flat surface with no &#8960; would give. Two coaxial cylinders 0.1 apart radially is a <em>cylindricity</em> zone, which is form rather than orientation. Centring the zone on the boss axis as produced inverts the whole idea: the drawing fixes the zone and the feature has to fit inside it. A is a <em>plane</em> here, so perpendicularity constrains tilt only and the zone can sit anywhere laterally.</p>`,
    },
    {
      id: "gd-and-t-q07",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A designer has called out concentricity &#8960;0.05 to datum A on a rotating shaft journal. Your inspection lead pushes back immediately. What is the substantive objection, and what should the print say instead?</p>`,
      choices: [
        "Concentricity controls derived median points, so no hard gage works &mdash; use total runout.",
        "Concentricity may not reference a datum at all &mdash; use position to A instead.",
        "Concentricity is RFS-only, so add &#9410; to the frame and keep the symbol.",
        "Concentricity applies only to internal features &mdash; use cylindricity on the journal.",
      ],
      answer: 0,
      explanation: `<p>Concentricity tolerances the <em>median points</em> of diametrically opposed elements. Verifying it means mapping the whole surface on a CMM, computing opposed-point midpoints, and showing that cloud lies inside the zone. No functional gage exists, no MMC modifier is permitted, and the answer shifts with how you sampled. ASME Y14.5-2018 removed the symbol for exactly those reasons.</p>
<p>For a rotating journal the requirement is almost always "does it run true?", and that is <strong>total runout</strong> to the datum axis. One indicator, one setup, seconds per part, and it catches eccentricity, out-of-roundness and taper together. Position would be the answer if the requirement were really about axis location, profile if it were about surface form.</p>
<p>The other options misstate the rules. Concentricity always takes a datum axis, carries no value limit, and applies to external features just as much as internal ones.</p>`,
    },
    {
      id: "gd-and-t-q08",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A clearance hole is specified &#8960;8.00&ndash;8.30 with position &#8960;0.20 at MMC to A|B|C. The hole is produced at &#8960;8.10. What total position tolerance is available, in mm of diameter?</p>`,
      answer: 0.3,
      unit: "mm",
      explanation: `<p>MMC for a hole is the smallest size, &#8960;8.00, so a hole produced at 8.10 has departed 0.10 from it.</p>
<p class="eq">bonus = 8.10 &minus; 8.00 = 0.10 mm</p>
<p class="eq">T<sub>total</sub> = 0.20 + 0.10 = <strong>0.30 mm</strong></p>
<p>The physics matters more than the arithmetic. The hole came out 0.10 larger than the worst case the designer protected against, so there is 0.10 of extra clearance around the fastener, and that clearance can be spent on mislocation with no risk to assembly. Bonus is not a favour. It is clearance you already own.</p>
<p>0.20 ignores the modifier. 0.40 measures departure off the 8.30 end (8.30 &minus; 8.10 = 0.20) as if the modifier were &#9409;. The produced size sits deliberately off-centre in the band, because at mid-band, 8.15, both errors land on 0.35 and the question could not separate them.</p>`,
    },
    {
      id: "gd-and-t-q09",
      type: "numeric",
      difficulty: 2,
      figure: figQ09,
      prompt: `<p>A CMM reports a hole axis 0.15 mm off in x and 0.20 mm off in y from its basic (true) position. What is the hole's position error expressed the way the feature control frame states it, in mm?</p>`,
      answer: 0.5,
      unit: "mm",
      explanation: `<p>Radial miss first, then the doubling that turns it into a diametral zone.</p>
<p class="eq">r = &radic;(0.15&sup2; + 0.20&sup2;) = &radic;(0.0225 + 0.0400) = &radic;0.0625 = 0.25 mm</p>
<p class="eq">e = 2r = <strong>0.50 mm</strong></p>
<p>Against the &#8960;0.5 in the frame the hole sits <em>exactly</em> on the limit: conforming, with zero margin. A 3-4-5 triangle in the deviations always lands there. Skip the factor of two and you report 0.25 and declare comfortable margin on a part that has none.</p>`,
    },
    {
      id: "gd-and-t-q10",
      type: "numeric",
      difficulty: 2,
      figure: figQ10,
      tolerance: 0.005,
      prompt: `<p>A fixture locating pin is specified &#8960;6.00&ndash;6.10 and carries position &#8960;0.30 at MMC to A|B|C. What is the pin's virtual condition, in mm?</p>`,
      answer: 6.4,
      unit: "mm",
      explanation: `<p>MMC for an external feature is the <em>largest</em> size, and the geometric tolerance pushes the worst-case boundary further out.</p>
<p class="eq">VC<sub>external</sub> = MMC + T = 6.10 + 0.30 = <strong>&#8960;6.40 mm</strong></p>
<p>That single number is what the mating hole must clear, whatever combination of size and mislocation the shop produces. Subtracting instead of adding gives 5.80 and fails the sign check: a fat, mislocated pin is the hard case, so the boundary has to grow.</p>`,
    },
    {
      id: "gd-and-t-q11",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>The pin from the previous setup has a virtual condition of &#8960;6.40. Its mating plate has holes specified &#8960;6.50&ndash;6.70 with position at MMC to the same datum frame. What is the largest position tolerance the holes can carry and still guarantee assembly, in mm?</p>`,
      answer: 0.1,
      unit: "mm",
      explanation: `<p>Assembly is guaranteed when the hole's virtual condition is at least as large as the pin's.</p>
<p class="eq">VC<sub>hole</sub> = MMC<sub>hole</sub> &minus; T &ge; VC<sub>pin</sub></p>
<p class="eq">6.50 &minus; T &ge; 6.40&nbsp;&nbsp;&rarr;&nbsp;&nbsp;T &le; <strong>0.10 mm</strong></p>
<p>Look at which sizes appear: the <em>smallest</em> hole, 6.50, and the <em>largest</em> pin plus its full tolerance, 6.40. Both parts are evaluated at their most difficult condition at once, which is what MMC callouts buy you. One worst-case boundary per feature instead of a probabilistic stack.</p>
<p>The clearance arithmetic agrees. Total clearance is 6.50 &minus; 6.10 = 0.40, the pin already consumed 0.30, and 0.10 is left for the hole. If 0.10 is too tight for the process, open the hole size rather than argue about the tolerance.</p>`,
    },
    {
      id: "gd-and-t-q12",
      type: "mc",
      difficulty: 2,
      figure: figQ12,
      prompt: `<p>A contoured edge carries profile of a surface 0.4 to A|B, with no modifier in the tolerance compartment. Where does the 0.4 zone sit relative to the true (basic) profile?</p>`,
      choices: [
        "0.4 mm outside the true profile only.",
        "0.2 mm each side of the true profile.",
        "0.4 mm each side of the true profile.",
        "0.4 mm inside the true profile only.",
      ],
      answer: 1,
      explanation: `<p>With no modifier, a profile tolerance is <strong>equally disposed bilaterally</strong>. The stated value is the total band width, split evenly, so 0.4 becomes 0.2 outside and 0.2 inside the basic contour.</p>
<p>"0.4 each side" doubles the zone and quietly accepts parts twice as far off contour as the designer intended. The unilateral readings describe what you get only when the Ⓤ modifier appears with a value after it: profile 0.4 Ⓤ 0.4 puts all 0.4 outside and nothing inside, which is how you protect a sealing surface or keep a casting from going undersize.</p>`,
    },
    {
      id: "gd-and-t-q13",
      type: "numeric",
      difficulty: 2,
      figure: figQ13,
      prompt: `<p>A shaft is dimensioned &#8960;20.00&ndash;20.20 with no form or orientation callout anywhere on the print. It is produced with every local diameter measuring &#8960;20.00, but it is bowed. How much total axis bow is permitted, in mm?</p>`,
      answer: 0.2,
      unit: "mm",
      explanation: `<p>Rule #1 applies, so perfect form is required at MMC. MMC of an external feature is the largest size, and the shaft must fit inside a perfect cylinder of &#8960;20.20.</p>
<p class="eq">enclosing cylinder = local diameter + axis bow &le; 20.20</p>
<p class="eq">20.00 + bow &le; 20.20&nbsp;&nbsp;&rarr;&nbsp;&nbsp;bow &le; <strong>0.20 mm</strong></p>
<p>That is the free trade Rule #1 hands the shop. As the feature departs from MMC toward LMC, the form error it may carry grows one for one. A shaft made exactly at 20.20 must be perfectly straight and perfectly round; one made at 20.00 gets 0.20 of slack.</p>
<p>If you actually need it straighter, a straightness callout is the tool, but pick the modifier carefully. Straightness applied to the derived median line at MMC deliberately <em>overrides</em> Rule #1 and pushes the boundary out to 20.20 + t.</p>`,
    },
    {
      id: "gd-and-t-q14",
      type: "mc",
      difficulty: 2,
      prompt: `<p>Your print dimensions a turned length of supplied cold-drawn bar as &#8960;24.90&ndash;25.00. The incoming bar is bowed roughly 0.8 mm over its length, though every local diameter measures in spec. Do you have grounds to reject the raw stock?</p>`,
      choices: [
        "No &mdash; Rule #1 is waived for commercial stock; add a straightness callout.",
        "Yes &mdash; bow violates the size limits by definition once measured.",
        "Yes &mdash; Rule #1 requires perfect form at MMC on every feature of size.",
        "No &mdash; Rule #1 governs holes only and never applies to external features.",
      ],
      answer: 0,
      explanation: `<p>Commercial stock is the explicit exception to Rule #1. Bar, tube, sheet and structural shapes are governed by their own material standard, with straightness and camber allowances written into it, not by the perfect-form-at-MMC envelope. A rejection argued on Rule #1 will not survive the supplier's quality engineer.</p>
<p>The engineering move is to decide whether the bow hurts. If the bar is chucked and machined all over, it does not. If the as-drawn surface is a functional feature, invoke the requirement explicitly: put a straightness tolerance on the print, or specify the envelope requirement, and price the stock accordingly.</p>
<p>The other options misstate the rule in the two usual ways. It applies to external and internal features alike, and out-of-straightness is not itself a size violation. Local diameters and form are separate ideas, which is why Rule #1 has to say anything at all.</p>`,
    },
    {
      id: "gd-and-t-q15",
      type: "mc",
      difficulty: 2,
      figure: figQ15,
      prompt: `<p>The four holes shown are &#8960;10.0&ndash;10.5 with position &#8960;0.2 at MMC to A|B|C. Hole 3 is produced at &#8960;10.30 and its axis sits 0.18 off in x and 0.16 off in y. What is the verdict?</p>`,
      choices: [
        "Fails &mdash; the 0.482 diametral deviation exceeds the stated &#8960;0.2 zone.",
        "Fails &mdash; the 0.241 radial deviation exceeds the stated &#8960;0.2 zone.",
        "Passes &mdash; the 0.241 radial deviation is inside the stated &#8960;0.2 zone.",
        "Passes &mdash; 0.482 is inside the &#8960;0.50 that bonus makes available.",
      ],
      answer: 3,
      explanation: `<p class="eq">e = 2&radic;(0.18&sup2; + 0.16&sup2;) = 2&radic;(0.0324 + 0.0256) = 2&radic;0.0580 = 2(0.2408) = 0.482 mm</p>
<p class="eq">T<sub>total</sub> = 0.2 + (10.30 &minus; 10.00) = 0.2 + 0.30 = 0.50 mm</p>
<p>0.482 &lt; 0.50, so hole 3 <strong>passes</strong>, with 0.018 mm of margin.</p>
<p>Both distractors are real mistakes. 0.241 means the radial deviation was never doubled into a diametral value. Comparing 0.482 against 0.2 means the Ⓜ modifier was ignored and 0.30 of bonus thrown away, which is how good parts get scrapped and why machinists care about this modifier.</p>
<p>The margin is thin. At MMC this hole would have failed outright, and that is the honest picture of a &#8960;0.2 callout on a drilled pattern.</p>`,
    },
    {
      id: "gd-and-t-q16",
      type: "mc",
      difficulty: 2,
      prompt: `<p>Production wants a hard go/no-go gage instead of CMM time on every part. Which of these callouts can actually be verified with a fixed functional gage?</p>`,
      choices: [
        "Position &#8960;0.3 at MMC to A|B|C on a clearance hole.",
        "Position &#8960;0.3 with no modifier to A|B|C on a clearance hole.",
        "Concentricity &#8960;0.3 to datum A on a shaft journal.",
        "Profile of a surface 0.3 to A|B|C on a cast contour.",
      ],
      answer: 0,
      explanation: `<p>A functional gage is a physical embodiment of the <strong>virtual condition</strong>. Pins at true position, cut to hole MMC minus the position tolerance, sitting in a fixture that reproduces the datum frame. The part drops on or it does not. That only works when the tolerance is stated at MMC, because only then is the acceptance boundary one fixed size, independent of the produced feature size.</p>
<p>The RFS version has a different acceptance boundary for every produced hole size, so no single pin diameter serves and you need a variable measurement. Concentricity needs derived median points, which no gage can touch. Profile on a free-form contour needs a scanned surface compared against a CAD nominal.</p>
<p>Adding Ⓜ where function allows it can turn a 4-minute CMM routine into a 5-second gage check. That is an inspection-cost decision, made at design time.</p>`,
    },
    {
      id: "gd-and-t-q17",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>Two plates are joined by M6 screws passing through clearance holes in <em>both</em> plates and picked up by nuts. The clearance holes are &#8960;6.60 minimum. What position tolerance at MMC can each plate's holes carry, in mm?</p>`,
      answer: 0.6,
      unit: "mm",
      explanation: `<p>The screw floats laterally in both plates, so this is the <strong>floating fastener</strong> case and each plate gets the full clearance.</p>
<p class="eq">T = H<sub>MMC</sub> &minus; F<sub>MMC</sub> = 6.60 &minus; 6.00 = <strong>0.60 mm</strong></p>
<p>H is the smallest hole, 6.60, and F the largest fastener, which for an M6 screw is a 6.00 major diameter. Both parts may use the full 0.60 at the same time: in the worst case the two hole patterns shift in opposite directions and the screw centres itself between them.</p>
<p>Halving it to 0.30 gives the fixed-fastener answer. Ask which part <em>holds</em> the fastener. Tap either plate and the screw can no longer float, so the same 0.60 of clearance has to be shared. Getting that backwards is a factor-of-two error in the direction that causes assembly failures.</p>`,
    },
    {
      id: "gd-and-t-q18",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A cover is bolted to a housing with M8 screws. The housing has tapped M8 holes; the cover has &#8960;8.50 minimum clearance holes. Assuming the tolerance is split evenly, what position tolerance at MMC applies to each part, in mm?</p>`,
      answer: 0.25,
      unit: "mm",
      explanation: `<p>The tapped hole locks the screw laterally, so this is the <strong>fixed fastener</strong> case and the clearance has to cover misalignment on both parts.</p>
<p class="eq">T = (H<sub>MMC</sub> &minus; F<sub>MMC</sub>) / 2 = (8.50 &minus; 8.00) / 2 = 0.50 / 2 = <strong>0.25 mm</strong></p>
<p>There is only 0.50 mm of clearance on the diameter, and the tapped hole's own position error eats into it before the cover hole gets a share. The even split is a convention rather than a law. What the physics demands is T<sub>housing</sub> + T<sub>cover</sub> &le; 0.50.</p>
<p>Answering 0.50 assumes the tapped hole is perfect. It usually is not, since drilling and tapping compound, so tapped-hole position is often the worse of the two. If the shop cannot hold 0.25, put a larger clearance hole in the cover rather than a wishful tolerance on the print.</p>`,
    },
    {
      id: "gd-and-t-q19",
      type: "mc",
      difficulty: 2,
      figure: figQ19,
      prompt: `<p>A ground shaft passes circular runout 0.05 to A-B at every cross-section the inspector checks, but the mating bore still binds when it is pushed on. What slipped through, and what should the print have said?</p>`,
      choices: [
        "Out-of-roundness &mdash; call out circularity instead.",
        "Taper along the length &mdash; call out total runout instead.",
        "Eccentricity to the datum axis &mdash; call out position instead.",
        "Surface finish &mdash; call out a roughness value instead.",
      ],
      answer: 1,
      explanation: `<p>Circular runout is evaluated one cross-section at a time. The indicator stays put, the part turns, and the reading is that section's own FIM. A shaft that is round and concentric at <em>every</em> section but steadily changes diameter along its length passes each check individually while being a cone.</p>
<p><strong>Total runout</strong> holds the indicator against the surface as it traverses the full length, so one FIM envelopes roundness, coaxiality, straightness and taper together. That is what a press fit or a long bearing journal needs.</p>
<p>Circular runout already catches out-of-roundness and eccentricity at each section, so neither could have slipped past the checks described. Surface finish would cause galling, not the progressive binding of a taper.</p>
<p>If the mating part engages a <em>length</em> of the surface, specify total runout. If it engages a line or a narrow band, circular runout is enough and cheaper.</p>`,
    },
    {
      id: "gd-and-t-q20",
      type: "mc",
      difficulty: 3,
      figure: figQ20,
      prompt: `<p>The six-hole pattern shown carries a composite position callout: upper segment &#8960;0.8 to A|B|C, lower segment &#8960;0.2 to A. Inspection finds the whole pattern shifted 0.30 mm off datum B, with hole-to-hole spacing exactly on basic. Verdict?</p>`,
      choices: [
        "Fails &mdash; the 0.30 shift exceeds the &#8960;0.2 feature-relating zone.",
        "Fails &mdash; 0.60 diametral exceeds the &#8960;0.2 lower segment.",
        "Passes &mdash; 0.60 diametral is inside &#8960;0.8, and spacing is inside &#8960;0.2.",
        "Passes &mdash; a perfect internal spacing makes the upper segment inapplicable.",
      ],
      answer: 2,
      explanation: `<p>The two segments control different things, so check them separately.</p>
<p><strong>Upper (pattern-locating):</strong> the pattern as a group must sit within &#8960;0.8 of true position in the full A|B|C frame. A bodily shift of 0.30 mm is a radial deviation, so the diametral position error is 2(0.30) = 0.60 mm, inside 0.8. &#10003;</p>
<p><strong>Lower (feature-relating):</strong> this segment holds the holes relative to <em>each other</em>, repeating only the orientation datum A. Spacing is exactly on basic, so the error is zero, comfortably inside &#8960;0.2. &#10003;</p>
<p>Both pass. Composite tolerancing exists for this case: a bolt pattern often needs to be tight <em>internally</em> so the mating pattern engages, while the group as a whole can float relative to the part outline. Measuring the pattern shift against the lower segment is the standard mistake, since the lower zone framework translates with the pattern and never sees a bodily shift.</p>`,
    },
    {
      id: "gd-and-t-q21",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A boss on a casting is specified &#8960;12.00&ndash;12.40 with position &#8960;0.1 at <strong>LMC</strong> to A|B|C, chosen to protect the minimum wall thickness around it. The boss is produced at &#8960;12.30. What total position tolerance is available, in mm?</p>`,
      answer: 0.4,
      unit: "mm",
      explanation: `<p>LMC is the least-material size, and for an <em>external</em> feature that is the smallest diameter, &#8960;12.00. Bonus accrues as the boss grows away from it.</p>
<p class="eq">bonus = | 12.30 &minus; 12.00 | = 0.30 mm</p>
<p class="eq">T<sub>total</sub> = 0.1 + 0.30 = <strong>0.40 mm</strong></p>
<p>The physics is the real content here. The callout protects wall thickness, so a <em>fatter</em> boss leaves more material around it and can afford to sit further off nominal. Bonus growing with size is exactly right. Under an MMC callout the logic runs the other way and the fat boss would get nothing.</p>
<p>0.20 comes from measuring departure from 12.40 as if the modifier were Ⓜ. Which extreme makes your failure mode worse? Assembly interference points to MMC. Thin walls and edge break-out point to LMC.</p>`,
    },
    {
      id: "gd-and-t-q22",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A non-structural cover has a clearance hole for an M5 screw with roughly 1.0 mm of diametral clearance available. The drawing carries position &#8960;0.1 at MMC to A|B|C on that hole, and the shop is scrapping covers. What is your drawing-review comment?</p>`,
      choices: [
        "Leave it &mdash; a tighter zone is always the safer choice and costs nothing on a cover.",
        "Open it to about &#8960;1.0 at MMC, sized from the clearance that actually exists.",
        "Replace it with profile of a surface to A|B|C, controlling location and form at once.",
        "Switch the modifier to LMC, so the hole earns bonus as it is drilled larger.",
      ],
      answer: 1,
      explanation: `<p>Tolerance should follow function, and the function here is "the screw goes through". With about 1.0 mm of diametral clearance and a floating fastener, T = H<sub>MMC</sub> &minus; F<sub>MMC</sub> &asymp; 1.0 mm. A &#8960;0.1 callout is ten times tighter than anything the assembly can detect, so every scrapped cover is pure waste.</p>
<p>"Tighter is safer" ignores that tolerance is a cost with no offsetting benefit once function is satisfied, and it teaches the shop to treat the print as negotiable. Profile is the wrong family: the feature is a hole, a feature of size, so position is the natural control. LMC is the wrong family too. For a hole, LMC <em>is</em> the largest limit, so an &#9410; callout hands back bonus as the hole is drilled <em>smaller</em>, which is backwards for clearance, where the big hole is the forgiving case. It would also give up the fixed-size virtual condition that makes a functional gage possible.</p>
<p>Size the geometric tolerance from the clearance the assembly gives you, then check whether the process can hold it. Not the other way round.</p>`,
    },
  ],

  qna: [
    {
      id: "gd-and-t-qa01",
      q: `<p>Why isn't plus-minus tolerancing good enough for locating a hole? Walk me through the argument.</p>`,
      a: `<p>Start with the zone shape. Writing 30 &plusmn;0.1 and 20 &plusmn;0.1 defines a <strong>square</strong> zone 0.2 mm on a side. A fastener passing through the hole cares about radial clearance, which is round. On the diagonal the square allows &radic;(0.1&sup2;+0.1&sup2;) = 0.141 mm, 41% more error than the same print allows straight along x. The drawing is simultaneously too loose in four directions and too tight in four others, and neither matches the function.</p>
<p>Then the origin problem. "30 from the edge" does not say which edge, contacted where, in what order, so two inspectors legitimately get two answers. GD&amp;T replaces that with an explicit datum reference frame.</p>
<p>Then the wasted clearance. A hole made larger than minimum has real extra room around the fastener, and a &plusmn; scheme has no mechanism to collect it, so parts that would function perfectly get scrapped. Chained &plusmn; dimensions also stack, while basic dimensions from a common frame do not.</p>
<p>I'd close with the conversion so it doesn't sound theoretical. The circumscribed equivalent is &#8960;0.283 (2&radic;2 t), the inscribed equivalent is &#8960;0.2, and choosing between them is a real decision about whether you are protecting yield or protecting a marginal assembly.</p>`,
    },
    {
      id: "gd-and-t-qa02",
      q: `<p>Read me this feature control frame: position, &#8960;0.25, MMC, A, B, C &mdash; and tell me what a machinist actually does with it.</p>`,
      a: `<p>Left to right. <strong>Position</strong> is the characteristic, so this controls where a feature of size sits. <strong>&#8960;0.25</strong> gives the zone: the diameter sign makes it a cylinder 0.25 mm across, centred on the true position defined by the boxed basic dimensions elsewhere on the print. <strong>MMC</strong> says the tolerance grows as the feature departs from maximum material condition. <strong>A|B|C</strong> is the datum reference frame in precedence order, A first, then B, then C. The order is part of the specification, not a list.</p>
<p>The machinist reads the basic dimensions to set his nominal, then knows he has a radial budget of 0.125 mm at worst case, and more than that if he lets the hole run to the larger end of its size band, since every 0.01 of extra hole diameter buys 0.01 of extra position tolerance. That is why "drill it on the big side" is often a legitimate answer to a tight pattern.</p>
<p>The inspector gets a functional gage out of the same modifier: pins at true position, cut to hole MMC minus 0.25, and the part drops on or it doesn't. Take the modifier away and he needs a CMM with a datum-alignment routine on every part.</p>`,
    },
    {
      id: "gd-and-t-qa03",
      q: `<p>Explain bonus tolerance to a machinist who has never heard the term, and tell me why it's free.</p>`,
      a: `<p>I'd frame it the way a machinist hears it. "The print gives you 0.2 of position tolerance when the hole is at its smallest. Every thousandth you drill it bigger, you get back to move the hole." The formula is bonus = |actual mating size &minus; MMC|, and the total available is T<sub>stated</sub> + bonus.</p>
<p>Concretely: a &#8960;10.00&ndash;10.50 hole with position &#8960;0.2 at MMC. Drilled at 10.00 you have &#8960;0.2. Drilled at 10.30 you have 0.2 + 0.30 = &#8960;0.50, two and a half times the budget, for free.</p>
<p>It is free because the designer sized 0.2 to guarantee the fastener clears when the hole is at its <em>worst</em> case, the smallest it is allowed to be. A bigger hole is physically more forgiving, so the mislocation it can absorb without interference really is larger. The MMC scheme collects that clearance instead of throwing it away, and the whole thing collapses to one fixed number, the virtual condition, 9.80 here.</p>
<p>Bonus only exists when Ⓜ or Ⓛ is in the frame. With no modifier the callout is RFS and the stated tolerance applies at every size, however generous the hole.</p>`,
    },
    {
      id: "gd-and-t-qa04",
      q: `<p>What is virtual condition, and how do you use it to prove two parts will assemble?</p>`,
      a: `<p>Virtual condition is the single worst-case boundary a feature can occupy once you combine its size extreme with its geometric tolerance. For an external feature, a pin, VC = MMC + T. For an internal feature, a hole, VC = MMC &minus; T. It is a fixed number, independent of the size the part actually comes out at, and that is what makes it useful.</p>
<p>The assembly proof is then one comparison: <strong>VC<sub>hole</sub> &ge; VC<sub>pin</sub></strong>. Pins &#8960;6.00&ndash;6.10 with position &#8960;0.30 at MMC give VC = 6.10 + 0.30 = 6.40. Mating holes &#8960;6.50&ndash;6.70 with position &#8960;T at MMC give VC = 6.50 &minus; T. Setting 6.50 &minus; T &ge; 6.40 gives T &le; 0.10 mm. No statistics, no stack-up spreadsheet, a guaranteed fit.</p>
<p>It also tells you what you are allowed to trade. A functional gage pin is cut to the hole's virtual condition, so the gage is a physical statement of the same number. When a supplier asks for relief, opening the hole size hands back position tolerance one for one.</p>
<p>The boundary is worst case, so it is conservative. If a part with every feature simultaneously at virtual condition is implausible, a statistical stack-up may justify looser tolerances. Say so explicitly rather than quietly assuming it.</p>`,
    },
    {
      id: "gd-and-t-qa05",
      q: `<p>When would you reach for profile of a surface instead of a stack of individual controls?</p>`,
      a: `<p>Whenever a surface has to be the right shape, in the right orientation, in the right place, and saying that any other way would take three or four callouts. Profile of a surface with datums referenced controls size, form, orientation and location in one frame: a band of width t straddling the basic contour, and everything must lie inside it.</p>
<p>Castings, forgings and moulded parts are the clearest cases, because the surface is not a plane or a cylinder and there is nothing to hang flatness or perpendicularity on. A sealing face that must be flat, square to a bore, and located 25 basic from a datum is one profile callout instead of flatness plus perpendicularity plus a located dimension, and the three-callout version leaves the interactions ambiguous.</p>
<p>Profile is also the answer when someone reaches for concentricity or symmetry. Those are deleted controls, and profile, position or runout says the functional thing more cheaply.</p>
<p>I would not use it on a feature of size where the requirement is really about an axis. A hole pattern wants position, because position brings MMC bonus and a functional gage with it and profile brings neither. Cost is the other constraint: profile on a free-form surface means a CMM scan compared to CAD nominal, so it only goes where the surface really matters.</p>
<p>Profile of a <em>line</em> applies the band per cross-section, which is what you want on sheet metal or an extrusion that is allowed to twist along its span.</p>`,
    },
    {
      id: "gd-and-t-qa06",
      q: `<p>Circular versus total runout &mdash; what does each actually catch, and when do you spend the money on total?</p>`,
      a: `<p>Both are full indicator movement while the part rotates about a datum axis, and both are always RFS, since no MMC modifier exists for runout. The difference is what the indicator does.</p>
<p><strong>Circular runout</strong> holds the indicator at one cross-section. That section's FIM lumps together out-of-roundness and eccentricity to the datum axis, and you repeat it at a few sections, but each reading stands alone. A taper is the classic escape: a shaft perfectly round and coaxial at every section but changing diameter along its length passes every check and is still a cone.</p>
<p><strong>Total runout</strong> traverses the indicator along the surface while the part turns, so one FIM envelopes roundness, coaxiality, straightness and taper together. On a face perpendicular to the axis it catches wobble, which is perpendicularity to the axis, plus flatness.</p>
<p>I spend the money on total runout when the mating part engages a <em>length</em> of the surface: a press fit, a long bearing journal, a seal land that has to stay concentric across its width. Circular runout is enough when engagement is effectively a narrow band, such as a single ball bearing race or a lip seal.</p>
<p>FIM = 2e, so a perfectly round surface running 0.02 eccentric reads 0.04. And runout is composite, so it never tells you <em>which</em> defect consumed the budget. Separating them needs circularity and coaxiality data, which costs more.</p>`,
    },
    {
      id: "gd-and-t-qa07",
      q: `<p>What is Rule #1, and where does it not apply?</p>`,
      a: `<p>Rule #1, the envelope principle, says that for an individual regular feature of size the size limits also control form. At MMC the feature must have perfect form, and form error may grow as the feature departs toward LMC. A shaft dimensioned &#8960;20.00&ndash;20.20 must fit inside a perfect cylinder of &#8960;20.20. Made at 20.00 everywhere it can carry up to 0.20 of bow and still comply; made at 20.20 it must be perfectly straight and round.</p>
<p>So a print with only size dimensions is not silent about form. It is also why a "go" gage is a full-length ring or plug rather than a snap gage: the go gage checks the MMC envelope, the no-go checks local size at LMC.</p>
<p>The exemptions matter. <strong>Commercial stock</strong> (bar, tube, sheet, structural shapes) follows its own material standard, so you cannot reject bowed bar on Rule #1 grounds. Features carrying the independency symbol are exempt, as are non-rigid parts with a free-state note. Rule #1 also says nothing about the relationship <em>between</em> features: two holes each perfect in form can still be badly located relative to one another, which is what position exists for.</p>
<p>The exception I would raise unprompted is straightness applied to the derived median line at MMC. It deliberately overrides Rule #1 and pushes the boundary out to MMC + t, so adding that callout to a pin makes the fit <em>worse</em>, not better.</p>`,
    },
    {
      id: "gd-and-t-qa08",
      q: `<p>A junior engineer has put concentricity on a shaft drawing. Coach them through it.</p>`,
      a: `<p>They almost certainly meant "this diameter should run true to that one", which is a legitimate and common requirement. It just should not be spelled with the concentricity symbol.</p>
<p>Concentricity tolerances the <em>derived median points</em> of diametrically opposed surface elements, not the surface and not an axis. Verifying it means scanning the whole surface on a CMM, computing opposed-point midpoints, and showing that point cloud lies inside the zone. There is no functional gage, no MMC modifier is permitted, and the result depends on how you sampled. ASME Y14.5-2018 removed the symbol for those reasons. Most shops will either quote it expensively or quietly measure runout and call it good, which is worse, because now the print and the practice disagree.</p>
<p>What to write instead follows the function. If the part <em>rotates</em> and the worry is that it runs true, use circular or total runout to the datum axis: one indicator, one setup, seconds per part. If the worry is where an axis <em>sits</em> so a mating feature engages, use position, which brings MMC bonus and functional gaging with it. If the worry is the shape of the surface itself, use profile.</p>
<p>Pick the control by asking what failure you are preventing and how someone will check it. Concentricity fails on both counts, which is why it is gone.</p>`,
    },
    {
      id: "gd-and-t-qa09",
      q: `<p>How do you decide how much GD&amp;T a part needs? Talk me through the cost curve.</p>`,
      a: `<p>I start from failure modes, not from symbols. For each feature: what goes wrong if it drifts? Does the fastener not go through, does the seal leak, does the bearing run hot, does the wall break out. That determines the control family and the value together, and it usually shows that most features on a part need nothing beyond size and a general tolerance block.</p>
<p>Then I size the number from the clearance that actually exists. For a bolted joint that is the fastener formula: floating T = H<sub>MMC</sub> &minus; F<sub>MMC</sub>, fixed T = half that. If the assembly gives me 1.0 mm of diametral clearance and the print says &#8960;0.1, I have specified something ten times tighter than anything the product can detect, and every scrapped part is pure waste.</p>
<p>The cost curve runs roughly like this: general tolerance block, free; flatness or perpendicularity with an indicator on a surface plate, cheap; position at MMC on a functional gage, cheap per part with a one-time tooling cost; position RFS on a CMM, per-part programme time and datum alignment; profile on a free-form surface, a CMM scan against CAD; cylindricity or roundness on a dedicated machine, slow, expensive and often outsourced. Every step down that list also lengthens first-article approval and makes supplier disputes more likely.</p>
<p>So: the loosest control in the cheapest family that still prevents the failure, MMC wherever the requirement is clearance-driven, and tight form controls reserved for the two or three features that genuinely earn them.</p>`,
    },
    {
      id: "gd-and-t-qa10",
      q: `<p>Which callouts can be checked with a hard gage and which force a CMM &mdash; and why should a designer care?</p>`,
      a: `<p>My test is whether the acceptance boundary is a <em>single fixed shape</em>, independent of the produced feature size. If it is, someone can build a gage.</p>
<p><strong>Gage-able.</strong> Position at MMC to a well-defined datum frame: pins at true position cut to the hole's virtual condition, in a fixture that reproduces the datums, and the part drops on or it doesn't. Rule #1 size envelopes check with go/no-go plug and ring gages, and profile at MMB boundaries can be gaged in some cases.</p>
<p><strong>Not gage-able.</strong> Anything RFS, because the acceptance boundary changes with every produced size, so RFS position needs a variable measurement. Concentricity and symmetry, because derived median points cannot be touched by a physical gage. Profile on a free-form contour, which needs a scan compared to CAD. Cylindricity to a tight value, which needs a roundness machine.</p>
<p>This is a decision made at drawing time that production cannot undo. Adding Ⓜ where the requirement is clearance-driven turns a multi-minute CMM routine with a datum-alignment step into a five-second gage check, and it loosens nothing functionally, because the virtual condition boundary is identical. One thoughtless RFS callout on a high-volume part can commit the programme to CMM capacity for its life. I'd also raise gage tooling cost and gage R&amp;R: a functional gage is worth building at volume, less so for twenty prototypes.</p>`,
    },
  ],
};

export default content;
