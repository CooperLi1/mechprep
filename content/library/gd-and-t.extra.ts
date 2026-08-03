import type { Question } from "../types";

// ---------------------------------------------------------------------------
// GD&T — additional question bank (merged after the base questions in
// content/index.ts). GD&T glyphs are drawn as vector geometry rather than
// typed as Unicode, because system UI fonts do not carry them reliably.
// SVG element ids are prefixed "gdte<n>-".
// ---------------------------------------------------------------------------

const INK = "#334155";
const DIM = "#64748b";
const HOT = "#dc2626";
const KEY = "#1d4ed8";

const dia = (x: number, y: number, r = 7, c = INK, sw = 1.7) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="${c}" stroke-width="${sw}"/>` +
  `<line x1="${x - r - 3}" y1="${y + r + 3}" x2="${x + r + 3}" y2="${y - r - 3}" stroke="${c}" stroke-width="${sw}"/>`;

const symPos = (x: number, y: number, r = 7, c = INK) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="${c}" stroke-width="1.8"/>` +
  `<line x1="${x - r - 5}" y1="${y}" x2="${x + r + 5}" y2="${y}" stroke="${c}" stroke-width="1.8"/>` +
  `<line x1="${x}" y1="${y - r - 5}" x2="${x}" y2="${y + r + 5}" stroke="${c}" stroke-width="1.8"/>`;

const symAng = (x: number, y: number, s = 8, c = INK) =>
  `<line x1="${x - 9}" y1="${y + s}" x2="${x + 9}" y2="${y + s}" stroke="${c}" stroke-width="1.8"/>` +
  `<line x1="${x - 9}" y1="${y + s}" x2="${x + 8}" y2="${y - s}" stroke="${c}" stroke-width="1.8"/>`;

const symProfS = (x: number, y: number, c = INK) =>
  `<path d="M ${x - 9} ${y + 6} A 9 9 0 0 1 ${x + 9} ${y + 6}" fill="none" stroke="${c}" stroke-width="1.8"/>` +
  `<line x1="${x - 12}" y1="${y + 6}" x2="${x + 12}" y2="${y + 6}" stroke="${c}" stroke-width="1.8"/>`;

const symProfL = (x: number, y: number, c = INK) =>
  `<path d="M ${x - 9} ${y + 6} A 9 9 0 0 1 ${x + 9} ${y + 6}" fill="none" stroke="${c}" stroke-width="1.8"/>`;

const symRunT = (x: number, y: number, c = INK) =>
  `<line x1="${x - 10}" y1="${y + 8}" x2="${x}" y2="${y - 7}" stroke="${c}" stroke-width="1.8"/>` +
  `<polygon points="${x + 1},${y - 9} ${x - 7},${y - 6} ${x - 2},${y - 1}" fill="${c}"/>` +
  `<line x1="${x - 1}" y1="${y + 8}" x2="${x + 9}" y2="${y - 7}" stroke="${c}" stroke-width="1.8"/>` +
  `<polygon points="${x + 10},${y - 9} ${x + 2},${y - 6} ${x + 7},${y - 1}" fill="${c}"/>`;

const symMod = (x: number, y: number, letter: string, r = 9, c = INK) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="${c}" stroke-width="1.5"/>` +
  `<text x="${x}" y="${y + 4.5}" text-anchor="middle" font-size="12" font-weight="700" fill="${c}">${letter}</text>`;

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

const cText = (w: number, s: string, fs = 15): FcfCell => ({
  w,
  draw: (cx, cy) =>
    `<text x="${cx}" y="${cy + fs * 0.36}" text-anchor="middle" font-size="${fs}" font-weight="600" fill="${INK}">${s}</text>`,
});

const cSym = (w: number, f: (cx: number, cy: number) => string): FcfCell => ({ w, draw: f });

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

const datumSym = (x: number, y: number, letter: string) =>
  `<polygon points="${x},${y} ${x - 6},${y + 11} ${x + 6},${y + 11}" fill="${INK}"/>` +
  `<line x1="${x}" y1="${y + 11}" x2="${x}" y2="${y + 22}" stroke="${INK}" stroke-width="1.5"/>` +
  `<rect x="${x - 11}" y="${y + 22}" width="22" height="22" fill="#ffffff" stroke="${INK}" stroke-width="1.5"/>` +
  `<text x="${x}" y="${y + 38}" text-anchor="middle" font-size="14" font-weight="700" fill="${INK}">${letter}</text>`;

const basicBox = (x: number, y: number, s: string, w = 34, h = 20) =>
  `<rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" fill="#ffffff" stroke="${INK}" stroke-width="1.4"/>` +
  `<text x="${x}" y="${y + 5}" text-anchor="middle" font-size="13" fill="${INK}">${s}</text>`;

const SVG_OPEN = (h: number) =>
  `<svg viewBox="0 0 460 ${h}" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">`;

// ---- figures ---------------------------------------------------------------

const figE28 = `${SVG_OPEN(210)}
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="${INK}">Drilled hole, as inspected</text>
  <text x="230" y="60" text-anchor="middle" font-size="16" fill="${INK}">&#8960;20.0 &minus; 20.6</text>
  ${fcf(118, 80, 34, [
    cSym(46, (cx, cy) => symPos(cx, cy)),
    cTol(100, "0.4", "M"),
    cText(26, "A", 15),
    cText(26, "B", 15),
    cText(26, "C", 15),
  ])}
  <line x1="230" y1="68" x2="230" y2="80" stroke="${INK}" stroke-width="1.2"/>
  <rect x="118" y="140" width="224" height="28" fill="#fee2e2" stroke="${HOT}" stroke-width="1.4"/>
  <text x="230" y="159" text-anchor="middle" font-size="14" fill="${HOT}" font-weight="600">produced size: &#8960;20.10</text>
  <text x="230" y="192" text-anchor="middle" font-size="12" fill="${DIM}">an inspector reports the total tolerance as &#8960;0.90</text>
</svg>`;

const figE35 = `${SVG_OPEN(300)}
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="${INK}">Inclined face held to a basic 30&deg; from datum A</text>
  <polygon points="100,214 100,110 180,110 360,214" fill="#dbeafe" stroke="${INK}" stroke-width="1.8"/>
  <line x1="184" y1="103" x2="364" y2="207" stroke="${KEY}" stroke-width="1.4" stroke-dasharray="6 4"/>
  <line x1="176" y1="117" x2="350" y2="217" stroke="${KEY}" stroke-width="1.4" stroke-dasharray="6 4"/>
  <line x1="90" y1="214" x2="374" y2="214" stroke="${INK}" stroke-width="2"/>
  <line x1="104" y1="226" x2="114" y2="214" stroke="${DIM}" stroke-width="1"/>
  <line x1="126" y1="226" x2="136" y2="214" stroke="${DIM}" stroke-width="1"/>
  <line x1="148" y1="226" x2="158" y2="214" stroke="${DIM}" stroke-width="1"/>
  <path d="M 300 214 A 60 60 0 0 0 308 184" fill="none" stroke="${DIM}" stroke-width="1.2"/>
  ${basicBox(276, 178, "30&deg;", 40)}
  <line x1="276" y1="188" x2="300" y2="200" stroke="${DIM}" stroke-width="1"/>
  <text x="196" y="88" font-size="12" fill="${KEY}" font-weight="600">zone: two parallel planes</text>
  <text x="196" y="72" font-size="12" fill="${KEY}">at the basic 30&deg;</text>
  ${datumSym(150, 214, "A")}
  ${fcf(230, 246, 28, [
    cSym(36, (cx, cy) => symAng(cx, cy, 8)),
    cTol(60, "0.2", undefined, false),
    cText(30, "A", 15),
  ])}
  <text x="60" y="276" font-size="12" fill="${INK}">face length 60 mm</text>
  <text x="60" y="294" font-size="12" fill="${HOT}">measured angle 30.15&deg;</text>
</svg>`;

const figE39 = `${SVG_OPEN(250)}
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="${INK}">Stamped rib: section shape matters, span twist does not</text>
  <path d="M 80 152 C 150 100 300 96 384 138 C 300 172 150 180 80 152 Z" fill="#dbeafe" stroke="${INK}" stroke-width="1.8"/>
  <path d="M 88 166 C 158 118 306 112 388 152" fill="none" stroke="${DIM}" stroke-width="1.3" stroke-dasharray="6 4"/>
  <line x1="150" y1="72" x2="150" y2="188" stroke="${HOT}" stroke-width="1.3" stroke-dasharray="7 4"/>
  <line x1="310" y1="72" x2="310" y2="188" stroke="${HOT}" stroke-width="1.3" stroke-dasharray="7 4"/>
  <text x="150" y="64" text-anchor="middle" font-size="12" fill="${HOT}" font-weight="600">section A-A</text>
  <text x="310" y="64" text-anchor="middle" font-size="12" fill="${HOT}" font-weight="600">section B-B</text>
  <text x="230" y="206" text-anchor="middle" font-size="12" fill="${DIM}">dashed outline: the same rib after a small twist along the span</text>
  ${fcf(150, 214, 26, [
    cSym(32, (cx, cy) => symProfL(cx, cy)),
    cTol(52, "0.3", undefined, false),
    cText(28, "A", 14),
    cText(28, "B", 14),
  ])}
</svg>`;

const figE41 = `${SVG_OPEN(290)}
  <defs>
    <marker id="gdte41-drop" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="${KEY}"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="${INK}">Functional gage: the part drops over fixed pins</text>
  <rect x="80" y="180" width="300" height="26" fill="#e2e8f0" stroke="${INK}" stroke-width="1.6"/>
  <rect x="132" y="110" width="16" height="70" rx="3" fill="#e2e8f0" stroke="${INK}" stroke-width="1.5"/>
  <rect x="222" y="110" width="16" height="70" rx="3" fill="#e2e8f0" stroke="${INK}" stroke-width="1.5"/>
  <rect x="312" y="110" width="16" height="70" rx="3" fill="${"#e2e8f0"}" stroke="${INK}" stroke-width="1.5"/>
  <rect x="100" y="58" width="260" height="30" fill="#dbeafe" stroke="${INK}" stroke-width="1.6"/>
  <rect x="126" y="58" width="28" height="30" fill="#ffffff" stroke="${INK}" stroke-width="1.2"/>
  <rect x="216" y="58" width="28" height="30" fill="#ffffff" stroke="${INK}" stroke-width="1.2"/>
  <rect x="306" y="58" width="28" height="30" fill="#ffffff" stroke="${INK}" stroke-width="1.2"/>
  <line x1="140" y1="94" x2="140" y2="106" stroke="${KEY}" stroke-width="2" marker-end="url(#gdte41-drop)"/>
  <line x1="230" y1="94" x2="230" y2="106" stroke="${KEY}" stroke-width="2" marker-end="url(#gdte41-drop)"/>
  <line x1="320" y1="94" x2="320" y2="106" stroke="${KEY}" stroke-width="2" marker-end="url(#gdte41-drop)"/>
  <line x1="238" y1="130" x2="334" y2="130" stroke="${DIM}" stroke-width="1"/>
  <text x="340" y="134" font-size="13" fill="${HOT}" font-weight="600">&#8960; = ?</text>
  ${fcf(140, 216, 28, [
    cSym(32, (cx, cy) => symPos(cx, cy)),
    cTol(86, "0.25", "M"),
    cText(22, "A", 13),
    cText(22, "B", 13),
    cText(22, "C", 13),
  ])}
  <text x="230" y="262" text-anchor="middle" font-size="12" fill="${INK}">part holes &#8960;6.20 &minus; 6.50</text>
  <text x="230" y="282" text-anchor="middle" font-size="12" fill="${DIM}">pins held at true position in the gage body</text>
</svg>`;

const figE42 = `${SVG_OPEN(266)}
  <defs>
    <marker id="gdte42-tr" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="${KEY}"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="${INK}">Total runout applied to a flange face</text>
  <rect x="70" y="118" width="216" height="44" fill="#dbeafe" stroke="${INK}" stroke-width="1.6"/>
  <rect x="286" y="62" width="26" height="156" fill="#dbeafe" stroke="${INK}" stroke-width="1.6"/>
  <line x1="52" y1="140" x2="340" y2="140" stroke="${DIM}" stroke-width="1" stroke-dasharray="12 3 3 3"/>
  <text x="344" y="144" font-size="12" fill="${DIM}">A</text>
  <circle cx="392" cy="70" r="22" fill="#ffffff" stroke="${INK}" stroke-width="2"/>
  <line x1="392" y1="70" x2="403" y2="57" stroke="${HOT}" stroke-width="1.8"/>
  <rect x="388" y="92" width="8" height="16" fill="#e2e8f0" stroke="${INK}" stroke-width="1.2"/>
  <rect x="318" y="104" width="74" height="8" fill="#e2e8f0" stroke="${INK}" stroke-width="1.2"/>
  <circle cx="315" cy="108" r="3.4" fill="${INK}"/>
  <line x1="315" y1="118" x2="315" y2="206" stroke="${KEY}" stroke-width="1.6" stroke-dasharray="6 4" marker-end="url(#gdte42-tr)"/>
  <text x="330" y="174" font-size="12" fill="${KEY}">indicator traverses</text>
  <text x="330" y="190" font-size="12" fill="${KEY}">the face radially</text>
  <path d="M 110 92 A 32 32 0 1 1 78 124" fill="none" stroke="${KEY}" stroke-width="1.8"/>
  <polygon points="72,128 86,120 86,132" fill="${KEY}"/>
  <text x="96" y="76" text-anchor="middle" font-size="12" fill="${KEY}" font-weight="600">rotate about A</text>
  ${datumSym(180, 162, "A")}
  ${fcf(60, 230, 26, [
    cSym(32, (cx, cy) => symRunT(cx, cy)),
    cTol(56, "0.05", undefined, false),
    cText(30, "A", 14),
  ])}
  <text x="192" y="248" font-size="12" fill="${DIM}">one FIM over the whole annular face</text>
</svg>`;

const figE45 = `${SVG_OPEN(300)}
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="${INK}">Profile with an unequally disposed modifier</text>
  ${fcf(126, 34, 28, [
    cSym(34, (cx, cy) => symProfS(cx, cy)),
    cTol(56, "0.5", undefined, false),
    cSym(30, (cx, cy) => symMod(cx, cy, "U")),
    cTol(48, "0.4", undefined, false),
    cText(28, "A", 14),
    cText(28, "B", 14),
  ])}
  <path d="M 117.4 265 A 130 130 0 0 1 342.6 265 L 342.6 288 L 117.4 288 Z" fill="#e2e8f0" stroke="none"/>
  <path d="M 89.7 249 A 162 162 0 0 1 370.3 249 L 335.65 269 A 122 122 0 0 0 124.35 269 Z" fill="#dbeafe" fill-opacity="0.85" stroke="none"/>
  <path d="M 89.7 249 A 162 162 0 0 1 370.3 249" fill="none" stroke="${KEY}" stroke-width="1.4" stroke-dasharray="6 4"/>
  <path d="M 124.35 269 A 122 122 0 0 1 335.65 269" fill="none" stroke="${KEY}" stroke-width="1.4" stroke-dasharray="6 4"/>
  <path d="M 117.4 265 A 130 130 0 0 1 342.6 265" fill="none" stroke="${INK}" stroke-width="2"/>
  <line x1="174.6" y1="177.8" x2="126" y2="140" stroke="${DIM}" stroke-width="1"/>
  <text x="122" y="136" text-anchor="end" font-size="12" fill="${KEY}" font-weight="600">outside</text>
  <line x1="188.3" y1="215.4" x2="126" y2="168" stroke="${DIM}" stroke-width="1"/>
  <text x="122" y="172" text-anchor="end" font-size="12" fill="${KEY}" font-weight="600">inside</text>
  <text x="230" y="104" text-anchor="middle" font-size="12" fill="${INK}">basic contour drawn solid; band drawn dashed</text>
  <text x="230" y="296" text-anchor="middle" font-size="12" fill="${DIM}">total band width 0.5, with 0.4 of it on the outside</text>
</svg>`;

const extra: Question[] = [
  {
    id: "gd-and-t-q23",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>An old print locates a hole with &plusmn;0.1 in x and y. To be certain you never accept a part the old print rejected, you convert to the position tolerance <em>inscribed</em> in that square zone, &#8960;0.2. What percentage of the original zone <strong>area</strong> do you give up?</p>`,
    answer: 21.5,
    unit: "%",
    explanation: `<p>Compare the two areas.</p>
<p class="eq">A<sub>square</sub> = (0.2)&sup2; = 0.0400 mm&sup2;</p>
<p class="eq">A<sub>circle</sub> = &pi;(0.1)&sup2; = 0.0314 mm&sup2;</p>
<p class="eq">loss = (0.0400 &minus; 0.0314)/0.0400 = 1 &minus; &pi;/4 = 0.215 &rarr; <strong>21.5%</strong></p>
<p>A fifth of the shop's process window disappears for no functional reason. The generous conversion, the circumscribed &#8960;0.283, has area &pi;(0.1414)&sup2; = 0.0628 mm&sup2;, 57% <em>larger</em> than the square.</p>
<p>Neither circle is "the" equivalent. Take the inscribed one when the assembly is already marginal, the circumscribed one when you are converting a working print and must not disrupt a supplier who is meeting it today.</p>`,
  },
  {
    id: "gd-and-t-q24",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A 400 mm machined rail must sit solidly on a granite plate without rocking. One engineer proposes flatness 0.05; another proposes straightness 0.05 in two directions. What is the practical difference?</p>`,
    choices: [
      "None &mdash; on a nominally flat surface the two controls are equivalent.",
      "Straightness checks line elements, so a twisted surface passes it and still rocks.",
      "Flatness checks line elements, while straightness controls the whole surface.",
      "Straightness needs a datum reference, so only flatness is legal here.",
    ],
    answer: 1,
    explanation: `<p>Straightness on a surface controls <strong>individual line elements</strong> in the specified viewing direction. Each line must lie between two parallel lines 0.05 apart, evaluated on its own. A saddle- or propeller-shaped surface can have every line element dead straight in both directions and still rock on two diagonal corners when you set it on a plate.</p>
<p>Flatness is the 3D control. <em>All</em> points must lie between two parallel planes 0.05 apart, so twist is captured, and that is the requirement described.</p>
<p>Both are form controls and neither takes a datum, so the last option is wrong on the rule as well as the physics. If the check you picture is sweeping an indicator over the whole face on a surface plate and taking max minus min, you are measuring flatness, which is a hint that flatness is what you meant.</p>`,
  },
  {
    id: "gd-and-t-q25",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A hole is specified &#8960;12.00&ndash;12.25 with position &#8960;0.15 at MMC to A|B|C. The hole comes off the machine at its least material condition. What total position tolerance is available, in mm?</p>`,
    answer: 0.4,
    unit: "mm",
    explanation: `<p>For a hole, MMC is the <em>smallest</em> size (12.00) and LMC the largest (12.25), so a hole made at LMC has departed as far from MMC as it can.</p>
<p class="eq">bonus = 12.25 &minus; 12.00 = 0.25 mm</p>
<p class="eq">T<sub>total</sub> = 0.15 + 0.25 = <strong>0.40 mm</strong></p>
<p>Anchor it physically rather than memorizing which is which. Maximum <em>material</em> means the most metal left behind, and a small hole leaves more metal than a big one. The big hole leaves the most clearance around the fastener, so it absorbs the most mislocation.</p>`,
  },
  {
    id: "gd-and-t-q26",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A vendor drawing arrives with a feature control frame reading flatness 0.05 followed by a datum reference to A. What is the defect, and what did the designer probably want?</p>`,
    choices: [
      "Nothing is wrong &mdash; flatness may reference a datum to fix its orientation.",
      "Flatness needs two datums to be complete; add B alongside A.",
      "Flatness may reference a datum only when an MMC modifier is present.",
      "Form controls take no datum; if relation to A matters, use parallelism.",
    ],
    answer: 3,
    explanation: `<p>Flatness is a <strong>form</strong> control, so the callout is invalid as written. Its zone, two parallel planes, floats freely to wherever it best fits the surface, and that is exactly what makes it independent of everything else on the part. A datum in the frame means nothing.</p>
<p>If the surface really must relate to A, the designer wanted an <strong>orientation</strong> control: parallelism 0.05 to A if it should be parallel to it, perpendicularity if square to it. Those zones are also two parallel planes, but they are pinned at the basic angle to the datum, so a tilted-but-flat face passes flatness and fails parallelism.</p>
<p>If location matters too, profile of a surface to A does the whole job in one callout. Check the family before the value: form controls never take datums, orientation and location controls always do.</p>`,
  },
  {
    id: "gd-and-t-q27",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A bore cross-section is checked against a circularity tolerance. Measured about the best-fit centre, the maximum radius is 10.04 mm and the minimum is 10.00 mm. What circularity value does this section report, in mm?</p>`,
    answer: 0.04,
    unit: "mm",
    explanation: `<p>The circularity zone is two concentric circles in the cross-sectional plane, and the tolerance value is their <strong>radial</strong> separation.</p>
<p class="eq">circularity = r<sub>max</sub> &minus; r<sub>min</sub> = 10.04 &minus; 10.00 = <strong>0.04 mm</strong></p>
<p>Doubling into a diameter gives 0.08, which is the right habit for position and runout and the wrong one here. Position is diametral, runout FIM is diametral, circularity and cylindricity zones are radial.</p>`,
  },
  {
    id: "gd-and-t-q28",
    type: "mc",
    difficulty: 2,
    figure: figE28,
    prompt: `<p>The hole shown is &#8960;20.0&ndash;20.6 with position &#8960;0.4 at MMC to A|B|C and is produced at &#8960;20.10. The inspector's report claims a total position tolerance of &#8960;0.90. What is the correct value?</p>`,
    choices: ["&#8960;0.50 mm", "&#8960;0.90 mm", "&#8960;0.40 mm", "&#8960;1.00 mm"],
    answer: 0,
    explanation: `<p class="eq">bonus = 20.10 &minus; 20.00 = 0.10 mm</p>
<p class="eq">T<sub>total</sub> = 0.4 + 0.10 = <strong>&#8960;0.50 mm</strong></p>
<p>The inspector measured departure from the wrong limit: 20.60 &minus; 20.10 = 0.50, added to 0.4, gives his 0.90. That is Ⓛ behaviour, and it is the most damaging bonus error of the lot because it <em>accepts</em> parts that will not assemble. This hole is nearly at MMC, so almost no real clearance exists to spend.</p>`,
  },
  {
    id: "gd-and-t-q29",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A hole's basic location is X = 30.00, Y = 20.00. The CMM reports the actual axis at X = 30.22, Y = 19.86. The callout is position &#8960;0.4 at MMC on a &#8960;20.0&ndash;20.6 hole produced at &#8960;20.35. What is the hole's position error, in mm?</p>`,
    answer: 0.522,
    unit: "mm",
    explanation: `<p>Subtract the basic values first, because CMM output is absolute coordinates rather than deviations.</p>
<p class="eq">&Delta;x = 30.22 &minus; 30.00 = +0.22&nbsp;&nbsp;&nbsp;&Delta;y = 19.86 &minus; 20.00 = &minus;0.14</p>
<p class="eq">e = 2&radic;(0.22&sup2; + 0.14&sup2;) = 2&radic;(0.0484 + 0.0196) = 2&radic;0.0680 = 2(0.2608) = <strong>0.522 mm</strong></p>
<p>Signs vanish in the squaring; only the magnitude of the radial miss counts. Available tolerance is 0.4 + (20.35 &minus; 20.00) = 0.75 mm, so the hole passes comfortably. Reporting 0.261 is the classic miss.</p>`,
  },
  {
    id: "gd-and-t-q30",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A cast housing's sealing face must be located a basic 25 mm from datum A, flat enough to seal, and square to bore B. Which <strong>single</strong> callout delivers all three requirements?</p>`,
    choices: [
      "Flatness, plus perpendicularity to B, plus 25 &plusmn;0.2 on the height.",
      "Parallelism to A, with the 25 written as a basic dimension.",
      "Profile of a surface to A|B, with the 25 written as a basic dimension.",
      "Position to A|B applied directly to the sealing face.",
    ],
    answer: 2,
    explanation: `<p>Profile of a surface referencing A|B creates a band straddling the basic contour and held in the datum frame. Because the 25 is basic, the datums fix the band's <em>location</em>, B fixes its <em>orientation</em>, and the surface must stay inside the band's width, which bounds flatness. One frame, three requirements, one inspection routine.</p>
<p>Parallelism to A controls tilt but never location, so the 25 would be uncontrolled. Position cannot be applied to a planar surface at all, since position tolerances features of size and a face has no size. The three-callout option is not wrong, just more drawing clutter, three separate measurements, and an ambiguous interaction between the controls.</p>`,
  },
  {
    id: "gd-and-t-q31",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A flange face is checked for circular runout to datum axis A with the indicator at a radius of 15 mm. The face is perfectly flat but tilted 0.001 rad away from square to A. What FIM does the indicator read over one revolution?</p>`,
    choices: ["0.015 mm", "0.0075 mm", "0.030 mm", "0.060 mm"],
    answer: 2,
    explanation: `<p>A face tilted by &theta; presents a height that varies sinusoidally through the revolution, peak r&theta; on one side of the axis and &minus;r&theta; on the other, so FIM is the peak-to-peak swing.</p>
<p class="eq">FIM = 2r&theta; = 2(15)(0.001) = <strong>0.030 mm</strong></p>
<p>0.015 is the amplitude alone; 0.060 comes from using the &#8960;30 instead of the radius. Face runout scales with r, so always state the radius when you specify or report it.</p>`,
  },
  {
    id: "gd-and-t-q32",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A boss face carries perpendicularity 0.1 to A, and the print also dimensions it 50.0 &plusmn;0.2 from A. Inspection finds the face 50.6 mm from A but tilted only 0.04 mm across its width. Which callout did the part violate?</p>`,
    choices: [
      "Perpendicularity &mdash; the 0.6 mm departure from 50.0 is well outside the 0.1 zone.",
      "The 50.0 &plusmn;0.2 dimension &mdash; perpendicularity does not locate anything.",
      "Both &mdash; the perpendicularity frame implies the basic 50.0 as its own location.",
      "Neither &mdash; an orientation zone floats with the feature, so it absorbs the 0.6 offset.",
    ],
    answer: 1,
    explanation: `<p>Orientation controls constrain <strong>tilt only</strong>. The perpendicularity zone is two parallel planes 0.1 apart, held square to A but free to sit anywhere along it. The face is tilted 0.04, comfortably inside 0.1, so perpendicularity is satisfied.</p>
<p>What failed is the size and location dimension: 50.6 against a 50.0 &plusmn;0.2 limit is 0.4 mm out. Two separate requirements, two separate verdicts.</p>
<p>Reading a print family by family is what keeps these apart. Form controls shape, orientation controls angle, location controls where, whether that is position, profile or a &plusmn; dimension. If you want one callout to do angle <em>and</em> location here, use profile of a surface with a basic 50.</p>`,
  },
  {
    id: "gd-and-t-q33",
    type: "numeric",
    difficulty: 3,
    tolerance: 0.001,
    prompt: `<p>A dowel pin is specified &#8960;16.00&ndash;16.08 and carries a straightness tolerance of &#8960;0.04 at MMC applied to the size dimension (that is, to the derived median line). What is the largest boundary the pin can occupy, in mm?</p>`,
    answer: 16.12,
    unit: "mm",
    explanation: `<p>Straightness applied to a derived median line at MMC is the one control that deliberately <em>overrides</em> Rule #1. The perfect-form-at-MMC envelope of &#8960;16.08 is replaced by the virtual condition of an external feature.</p>
<p class="eq">VC = MMC + T = 16.08 + 0.04 = <strong>&#8960;16.12 mm</strong></p>
<p>So the callout does not tighten the pin. It <em>loosens</em> the envelope by 0.04, in exchange for letting the shop use up to 0.04 of bow at MMC, and more as the pin shrinks toward 16.00 and bonus applies.</p>
<p>An engineer who adds this hoping for a straighter pin has made the fit worse: a mating bore sized for &#8960;16.08 will now sometimes refuse the part. For a straighter pin, tighten the size band, or apply straightness RFS and keep the boundary at 16.08.</p>`,
  },
  {
    id: "gd-and-t-q34",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A supplier's quote comes back with a large inspection adder on a machined housing. Which of these callouts on the print is most likely responsible?</p>`,
    choices: [
      "Flatness 0.1 on a mounting face.",
      "Position &#8960;0.5 at MMC on four clearance holes.",
      "Perpendicularity 0.2 on a machined boss.",
      "Cylindricity 0.005 on a 200 mm long bore.",
    ],
    answer: 3,
    explanation: `<p>Cylindricity is the most demanding control in the form family. It bounds roundness, straightness and taper over the entire surface at once, and 0.005 mm over 200 mm needs either a roundness machine with a long traverse or a dense CMM scan. Both are slow, both want a temperature-controlled room, and many shops subcontract it.</p>
<p>The alternatives are much cheaper. Flatness sweeps with an indicator on a surface plate in seconds. Perpendicularity takes a square and an indicator, or a quick CMM plane fit. Position at MMC is cheapest of all at volume: a functional gage with pins at virtual condition gives pass or fail in one motion.</p>
<p>The cost curve runs general tolerance block &rarr; indicator checks &rarr; functional gage at MMC &rarr; CMM point measurements (RFS) &rarr; CMM surface scans (profile) &rarr; roundness machine (cylindricity). Move a callout one step down that list only when a failure mode requires it.</p>`,
  },
  {
    id: "gd-and-t-q35",
    type: "numeric",
    difficulty: 2,
    figure: figE35,
    prompt: `<p>The 60 mm long inclined face shown is held to a basic 30&deg; from datum A with angularity 0.2. Inspection measures the face at 30.15&deg;. What is the total departure from the basic plane across the face length, in mm?</p>`,
    answer: 0.157,
    unit: "mm",
    explanation: `<p>The angularity zone is two parallel planes 0.2 apart, oriented at exactly 30&deg; to A. A perfectly flat face that is simply mis-angled drifts steadily away from the basic plane along its length.</p>
<p class="eq">&Delta;&theta; = 0.15&deg; = 0.15 &times; &pi;/180 = 0.002618 rad</p>
<p class="eq">departure = L &middot; &Delta;&theta; = 60 &times; 0.002618 = <strong>0.157 mm</strong></p>
<p>0.157 &lt; 0.2, so the face conforms with 0.043 of margin. Any flatness error eats directly into what remains, because both have to fit inside the same 0.2 band.</p>
<p>An angular error becomes a linear error multiplied by the feature length. Double the face to 120 mm and the same 0.15&deg; gives 0.314 mm and fails. Angularity, perpendicularity and parallelism values only mean something alongside the size of the surface they control.</p>`,
  },
  {
    id: "gd-and-t-q36",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>M10 screws thread into tapped holes in part A and pass through &#8960;11.00 minimum clearance holes in part B. Part A's tapped-hole position is already locked at &#8960;0.15 by existing tooling. What position tolerance can part B's clearance holes carry, in mm?</p>`,
    answer: 0.85,
    unit: "mm",
    explanation: `<p>The thread fixes the screw laterally, so this is the fixed-fastener case and the two parts share one clearance budget.</p>
<p class="eq">T<sub>A</sub> + T<sub>B</sub> = H<sub>MMC</sub> &minus; F<sub>MMC</sub> = 11.00 &minus; 10.00 = 1.00 mm</p>
<p class="eq">T<sub>B</sub> = 1.00 &minus; 0.15 = <strong>0.85 mm</strong></p>
<p>The familiar (H &minus; F)/2 is only the equal-split special case, which would give 0.50 each. Nothing in the physics demands 50/50; the constraint is on the sum. Tooling has already made part A better than an even share requires, so part B banks the difference.</p>
<p>That is a useful move when a supplier says a pattern is unachievable. Check what the mating part is actually holding. Reallocating an existing surplus costs nothing, while opening the clearance hole changes the joint's shear behaviour and the washer sizing.</p>`,
  },
  {
    id: "gd-and-t-q37",
    type: "mc",
    difficulty: 3,
    prompt: `<p>Two shafts are both dimensioned &#8960;10.00&ndash;10.10. Shaft (a) has no form callout. Shaft (b) carries straightness &#8960;0.05 at MMC on its size dimension. Which is guaranteed to enter a &#8960;10.12 bore?</p>`,
    choices: [
      "Both &mdash; the size limits are identical, so the fits are identical.",
      "Only (b) &mdash; adding a straightness callout can only tighten the part.",
      "Only (a) &mdash; its Rule #1 envelope is &#8960;10.10.",
      "Neither &mdash; both worst-case boundaries exceed &#8960;10.12.",
    ],
    answer: 2,
    explanation: `<p>Shaft (a) is governed by Rule #1. With no form callout, perfect form is required at MMC, so the whole feature must fit inside a perfect cylinder of &#8960;10.10. That is its worst-case boundary, and 10.10 &lt; 10.12, so it always enters.</p>
<p>Shaft (b)'s straightness at MMC overrides Rule #1 and moves the boundary to the virtual condition.</p>
<p class="eq">VC = MMC + T = 10.10 + 0.05 = &#8960;10.15</p>
<p>10.15 &gt; 10.12, so a conforming shaft (b) can fail to enter. Adding a geometric control made the fit <em>worse</em>, which runs against the natural assumption that more callouts mean a better part.</p>
<p>MMC-modified straightness is a permission, not a restriction. It buys the shop bow in exchange for a larger envelope, which is fine only if the mating bore was sized for that envelope.</p>`,
  },
  {
    id: "gd-and-t-q38",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A pattern of clearance holes is specified &#8960;8.40&ndash;8.90 with position &#8960;0 at MMC to A|B|C &mdash; a zero-tolerance-at-MMC callout. One hole is produced at &#8960;8.62. What position tolerance is available for that hole, in mm?</p>`,
    answer: 0.22,
    unit: "mm",
    explanation: `<p>The stated tolerance really is zero, so every bit of available tolerance comes from bonus.</p>
<p class="eq">bonus = 8.62 &minus; 8.40 = 0.22 mm</p>
<p class="eq">T<sub>total</sub> = 0 + 0.22 = <strong>0.22 mm</strong></p>
<p>Zero at MMC is neither a mistake nor an impossible requirement. It says the hole must be perfectly located <em>only if</em> it is made at its smallest size, and every thousandth of extra diameter converts one for one into location freedom. Virtual condition is VC = 8.40 &minus; 0 = &#8960;8.40, so the functional gage pin is 8.40.</p>
<p>Designers use it because it hands the shop the largest possible trade space while guaranteeing the identical assembly boundary. A machinist struggling to hold location just opens the drill a little. Compare &#8960;0.2 on a &#8960;8.60&ndash;8.90 hole, which locks in a smaller boundary for no functional gain.</p>`,
  },
  {
    id: "gd-and-t-q39",
    type: "mc",
    difficulty: 3,
    figure: figE39,
    prompt: `<p>A stamped rib must hold its cross-sectional shape accurately, but a small twist along its span is functionally harmless and expensive to prevent. Which profile control fits, and why?</p>`,
    choices: [
      "Profile of a surface &mdash; it evaluates each cross-section independently.",
      "Profile of a line &mdash; it applies per cross-section, so span twist is not accumulated.",
      "Profile of a surface &mdash; twist is never within the scope of a profile control.",
      "Profile of a line &mdash; it is the only profile control that may reference datums.",
    ],
    answer: 1,
    explanation: `<p>Profile of a <strong>line</strong> applies its band to each cross-section on its own. Section A-A must match the basic contour within 0.3, section B-B must match it within 0.3, and nothing ties the two together beyond whatever the referenced datums imply. A rib that twists slightly along the span passes.</p>
<p>Profile of a <strong>surface</strong> is the 3D version. The band wraps the whole surface at once, so a twist consumes tolerance and eventually fails. Right control for a machined sealing contour, wrong one for sheet metal, where forcing out twist means added forming operations or a stress-relief step.</p>
<p>The last option is simply false. Both profile controls may reference datums, or omit them, in which case only the shape is controlled and not its location.</p>
<p>Circularity versus cylindricity is the same argument. Per-section controls are cheaper and looser, whole-surface controls stricter and dearer. Match the choice to whether the mating part engages a section or a span.</p>`,
  },
  {
    id: "gd-and-t-q40",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A &#8960;30 journal is perfectly round and perfectly coaxial with the datum axis, but it is tapered: &#8960;30.020 at one end and &#8960;29.990 at the other. What total runout does it show?</p>`,
    choices: [
      "0.015 mm",
      "0.030 mm",
      "Zero &mdash; it is round and coaxial",
      "0.0075 mm",
    ],
    answer: 0,
    explanation: `<p>Total runout is the full indicator movement recorded while the indicator traverses the surface and the part rotates. The part is round and coaxial, so rotation contributes nothing. The reading changes only as the indicator moves along the taper, and the indicator senses <em>radius</em>, not diameter.</p>
<p class="eq">FIM = (30.020 &minus; 29.990)/2 = 0.030/2 = <strong>0.015 mm</strong></p>
<p>0.030 is the diameter difference, which is intuitive and wrong: the indicator sits on one side of the part. "Zero" follows from assuming runout only detects rotational defects, which is true for <em>circular</em> runout. It would read 0.000 at every individual cross-section here and pass the part completely.</p>
<p>That contrast is why total runout exists. If a mating bore engages the length of this journal, circular runout cannot see the defect that will cause the interference.</p>`,
  },
  {
    id: "gd-and-t-q41",
    type: "numeric",
    difficulty: 2,
    figure: figE41,
    tolerance: 0.01,
    prompt: `<p>You are building a functional gage for a three-hole pattern specified &#8960;6.20&ndash;6.50 with position &#8960;0.25 at MMC to A|B|C. What diameter should the gage pins be, in mm?</p>`,
    answer: 5.95,
    unit: "mm",
    explanation: `<p>The gage embodies the hole's <strong>virtual condition</strong>, the worst-case boundary that must stay clear whatever combination of size and location the shop produces.</p>
<p class="eq">D<sub>gage</sub> = MMC<sub>hole</sub> &minus; T<sub>position</sub> = 6.20 &minus; 0.25 = <strong>&#8960;5.95 mm</strong></p>
<p>The pins sit at true position in a body that reproduces the A|B|C frame. If the part drops over all three, every hole is within size and within its position tolerance including bonus. One motion, no arithmetic, no CMM.</p>
<p>Using 6.20, the MMC hole with nothing subtracted, builds a gage that rejects perfectly good parts. Using 6.50 &minus; 0.25 = 6.25 takes the LMC hole and builds one that passes parts which will not assemble.</p>
<p>Gage-makers then cut the pins slightly under 5.95, taking the wear allowance and gage tolerance out of the part's tolerance, so the gage never accepts a bad part as it wears.</p>`,
  },
  {
    id: "gd-and-t-q42",
    type: "mc",
    difficulty: 2,
    figure: figE42,
    prompt: `<p>The flange face shown carries total runout 0.05 to datum axis A. Which two errors does that single reading lump together?</p>`,
    choices: [
      "Circularity and cylindricity, since runout sweeps a circular path on the face.",
      "Axial position of the face plus its surface roughness, both read by the indicator.",
      "Parallelism of the face to A and concentricity of the hub bore to A.",
      "Perpendicularity of the face to datum axis A, plus flatness of the face.",
    ],
    answer: 3,
    explanation: `<p>Rotate the part about A and traverse the indicator radially across the face. Two things move the needle. A face not square to A wobbles, so the reading swings as the part turns, which is <strong>perpendicularity</strong> to the datum axis. A face that is dished, domed or wavy changes height as the indicator moves outward, which is <strong>flatness</strong>. Total runout bounds their combined effect with one number.</p>
<p>Circularity and cylindricity describe cylindrical surfaces, not planar ones. Position does not apply to a face, which has no size, and roughness is a different measurement at a different scale. Parallelism is worth pausing on: it is the right idea for a face read against a datum <em>plane</em>, but A here is an <em>axis</em>, and a face square to an axis is a perpendicularity relationship. Concentricity belongs to the hub bore and would need its own frame.</p>
<p>Total runout on a face is a cheap functional control for a seal land or a brake rotor, but it is <em>composite</em>. A failed part tells you the face is bad without telling you whether to fix the fixturing or the tool path. Separating wobble from dish means specifying perpendicularity and flatness individually and paying for the extra inspection.</p>`,
  },
  {
    id: "gd-and-t-q43",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A hydraulic spool must slide freely in a honed bore over a 120 mm stroke, with no binding anywhere along the travel. Which single control on the bore best protects that function?</p>`,
    choices: [
      "Circularity &mdash; binding comes from the bore being out of round.",
      "Total runout referenced to the outside diameter of the body.",
      "Cylindricity &mdash; it bounds roundness, straightness and taper together.",
      "Position &#8960;0.02 at MMC referenced to the end face.",
    ],
    answer: 2,
    explanation: `<p>The spool sees the bore as a <em>volume</em>, not a section. It binds if the bore is out of round anywhere, if the axis is bowed, or if the bore tapers. Cylindricity is the one control whose zone, two concentric cylinders separated radially by t, bounds all three at once, and it needs no datum because the requirement is purely about the feature's own form.</p>
<p>Circularity checks each cross-section independently, so it passes a perfectly round banana or cone. Total runout to the OD controls the bore's relationship to the body, which matters for assembly concentricity but says nothing about local form inside the bore. Position controls where the bore axis sits, not whether the bore is a good cylinder.</p>
<p>Cylindricity is also the most expensive form control to verify, so specify the loosest value the spool clearance allows, and only over the length that actually strokes.</p>`,
  },
  {
    id: "gd-and-t-q44",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A hole is specified &#8960;14.00&ndash;14.30 with position &#8960;0.25 to A|B|C and <em>no</em> modifier in the tolerance compartment. The hole is produced at &#8960;14.28. What total position tolerance is available, in mm?</p>`,
    answer: 0.25,
    unit: "mm",
    explanation: `<p>An empty modifier field means <strong>RFS</strong>, regardless of feature size. The stated tolerance applies at every produced size and no bonus is earned however generous the hole turns out.</p>
<p class="eq">T<sub>total</sub> = T<sub>stated</sub> = <strong>0.25 mm</strong></p>
<p>Computing 14.28 &minus; 14.00 = 0.28 and reporting 0.53 is the right arithmetic for the wrong callout. Bonus exists only when Ⓜ or Ⓛ is present.</p>
<p>The question worth asking is why it is RFS at all. Legitimate reasons exist: a press fit or a bearing bore where the actual mating size is used at assembly, or a hole that is a datum feature and should anchor the frame independently of size. If it is only a clearance hole, RFS throws away 0.28 mm of free tolerance and forces a CMM check where a functional gage would have done.</p>`,
  },
  {
    id: "gd-and-t-q45",
    type: "mc",
    difficulty: 3,
    figure: figE45,
    prompt: `<p>A gasket groove contour carries profile of a surface 0.5 with the unequally disposed modifier followed by 0.4, referenced to A|B. Where does the tolerance band sit relative to the basic contour?</p>`,
    choices: [
      "0.4 outside and 0.1 inside the basic contour.",
      "0.5 outside and nothing inside the basic contour.",
      "0.25 each side of the basic contour.",
      "0.4 inside and 0.1 outside the basic contour.",
    ],
    answer: 0,
    explanation: `<p>The unequally disposed modifier keeps the total band width at the stated value and tells you how much of it lies in the "outside", added-material direction. The total is 0.5 and 0.4 of it is outside, so the remainder, 0.5 &minus; 0.4 = 0.1, lies inside.</p>
<p class="eq">band = 0.4 outside + 0.1 inside = 0.5 total</p>
<p>0.25 each side is the default equal-bilateral answer you get with no modifier at all, which is precisely what the modifier exists to override. The 0.5-outside answer would need the value after the modifier to be 0.5, and the last option reverses the direction convention.</p>
<p>On a sealing groove you usually care far more about not going undersize, which crushes the gasket, than about extra material, so you push nearly the whole band outward and leave a sliver of inside tolerance for machining reality. The same trick shows up on cast surfaces that will be machined later, where the band goes entirely into the added-material direction.</p>`,
  },
];

export default extra;
