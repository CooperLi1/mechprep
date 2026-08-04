import type { TopicContent } from "../types";

// ---------------------------------------------------------------------------
// Free-Body Diagrams
// ---------------------------------------------------------------------------
// Shared SVG building blocks. Every figure passes its own id prefix ("fbdNN")
// so marker ids stay globally unique across the whole app.

function defs(p: string): string {
  return `<defs><marker id="${p}-l" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker><marker id="${p}-r" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker><marker id="${p}-g" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker></defs>`;
}

function hatchH(x1: number, x2: number, y: number): string {
  let s = "";
  for (let x = x1; x <= x2 - 9; x += 11)
    s += `<line x1="${x}" y1="${y + 9}" x2="${x + 9}" y2="${y}" stroke="#64748b" stroke-width="1"/>`;
  return s;
}

function pinSup(x: number, y: number): string {
  return `<polygon points="${x},${y} ${x - 13},${y + 24} ${x + 13},${y + 24}" fill="none" stroke="#334155" stroke-width="1.5"/><circle cx="${x}" cy="${y}" r="3" fill="#334155"/><line x1="${x - 20}" y1="${y + 24}" x2="${x + 20}" y2="${y + 24}" stroke="#334155" stroke-width="1.5"/>${hatchH(x - 19, x + 19, y + 24)}`;
}

function rollerSup(x: number, y: number): string {
  return `<polygon points="${x},${y} ${x - 13},${y + 20} ${x + 13},${y + 20}" fill="none" stroke="#334155" stroke-width="1.5"/><circle cx="${x - 7}" cy="${y + 25}" r="5" fill="none" stroke="#334155" stroke-width="1.5"/><circle cx="${x + 7}" cy="${y + 25}" r="5" fill="none" stroke="#334155" stroke-width="1.5"/><line x1="${x - 20}" y1="${y + 30}" x2="${x + 20}" y2="${y + 30}" stroke="#334155" stroke-width="1.5"/>${hatchH(x - 19, x + 19, y + 30)}`;
}

function wallV(x: number, y1: number, y2: number): string {
  let s = `<line x1="${x}" y1="${y1}" x2="${x}" y2="${y2}" stroke="#334155" stroke-width="2.5"/>`;
  for (let y = y1 + 12; y <= y2; y += 13)
    s += `<line x1="${x - 11}" y1="${y}" x2="${x}" y2="${y - 11}" stroke="#64748b" stroke-width="1"/>`;
  return s;
}

function dimH(x1: number, x2: number, y: number, label: string): string {
  return `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="#64748b" stroke-width="1"/><line x1="${x1}" y1="${y - 5}" x2="${x1}" y2="${y + 5}" stroke="#64748b" stroke-width="1"/><line x1="${x2}" y1="${y - 5}" x2="${x2}" y2="${y + 5}" stroke="#64748b" stroke-width="1"/><text x="${(x1 + x2) / 2}" y="${y - 8}" text-anchor="middle" fill="#64748b" font-size="12">${label}</text>`;
}

function dimV(x: number, y1: number, y2: number, label: string): string {
  const mid = (y1 + y2) / 2;
  return `<line x1="${x}" y1="${y1}" x2="${x}" y2="${mid - 11}" stroke="#64748b" stroke-width="1"/><line x1="${x}" y1="${mid + 9}" x2="${x}" y2="${y2}" stroke="#64748b" stroke-width="1"/><line x1="${x - 5}" y1="${y1}" x2="${x + 5}" y2="${y1}" stroke="#64748b" stroke-width="1"/><line x1="${x - 5}" y1="${y2}" x2="${x + 5}" y2="${y2}" stroke="#64748b" stroke-width="1"/><text x="${x}" y="${mid + 4}" text-anchor="middle" fill="#64748b" font-size="12">${label}</text>`;
}

function springV(x: number, y1: number, y2: number): string {
  const top = y1 + 12;
  const bot = y2 - 12;
  const n = 6;
  const step = (bot - top) / n;
  let d = `M ${x} ${y1} L ${x} ${top}`;
  for (let i = 0; i < n; i++) {
    const xx = i % 2 === 0 ? x + 11 : x - 11;
    d += ` L ${xx} ${(top + step * (i + 0.5)).toFixed(1)} L ${x} ${(top + step * (i + 1)).toFixed(1)}`;
  }
  d += ` L ${x} ${y2}`;
  return `<path d="${d}" fill="none" stroke="#334155" stroke-width="1.6"/>`;
}

// --- lesson figures --------------------------------------------------------

const figIsolate = `<svg viewBox="0 0 460 258" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbdl1")}
  <text x="110" y="24" text-anchor="middle" font-weight="600" fill="#334155">1. The assembly</text>
  <text x="330" y="24" text-anchor="middle" font-weight="600" fill="#334155">2. FBD of the bracket</text>
  ${wallV(40, 45, 195)}
  <rect x="40" y="95" width="13" height="75" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="40" y="95" width="118" height="13" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="88" y="62" width="56" height="33" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <text x="116" y="84" text-anchor="middle" fill="#334155" font-size="11">motor</text>
  <circle cx="46" cy="115" r="4" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <circle cx="46" cy="158" r="4" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <rect x="36" y="88" width="128" height="90" rx="8" fill="none" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="6 4"/>
  <text x="112" y="206" text-anchor="middle" fill="#1d4ed8" font-size="11">cut here: wall and motor stay outside</text>
  <rect x="280" y="95" width="13" height="75" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="280" y="95" width="118" height="13" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="340" y1="52" x2="340" y2="90" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbdl1-l)"/>
  <text x="340" y="44" text-anchor="middle" fill="#dc2626" font-weight="600">F = 250 N</text>
  <line x1="286" y1="215" x2="286" y2="178" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#fbdl1-r)"/>
  <text x="286" y="232" text-anchor="middle" fill="#1d4ed8" font-weight="600">R<tspan baseline-shift="sub" font-size="10">y</tspan></text>
  <line x1="240" y1="130" x2="272" y2="130" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#fbdl1-r)"/>
  <text x="236" y="134" text-anchor="end" fill="#1d4ed8" font-weight="600">R<tspan baseline-shift="sub" font-size="10">x</tspan></text>
  <path d="M 320 138 A 18 18 0 1 1 302 156" fill="none" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#fbdl1-r)"/>
  <text x="346" y="162" text-anchor="start" fill="#1d4ed8" font-weight="600">M</text>
  <text x="336" y="206" text-anchor="middle" fill="#64748b" font-size="11">supports gone, reactions in</text>
</svg>`;

const figSupports = `<svg viewBox="0 0 460 352" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbdl2")}
  <text x="77" y="34" text-anchor="middle" font-weight="600" fill="#334155">Roller</text>
  <rect x="41" y="52" width="72" height="11" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  ${rollerSup(77, 63)}
  <line x1="77" y1="140" x2="77" y2="110" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#fbdl2-r)"/>
  <text x="93" y="130" text-anchor="start" fill="#1d4ed8">N</text>
  <text x="77" y="162" text-anchor="middle" fill="#64748b" font-size="11">1 unknown</text>
  <text x="77" y="176" text-anchor="middle" fill="#64748b" font-size="11">normal to surface</text>
  <text x="230" y="34" text-anchor="middle" font-weight="600" fill="#334155">Pin / hinge</text>
  <rect x="194" y="52" width="72" height="11" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  ${pinSup(230, 63)}
  <line x1="230" y1="140" x2="230" y2="110" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#fbdl2-r)"/>
  <line x1="190" y1="122" x2="220" y2="122" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#fbdl2-r)"/>
  <text x="246" y="130" text-anchor="start" fill="#1d4ed8">R<tspan baseline-shift="sub" font-size="10">y</tspan></text>
  <text x="186" y="118" text-anchor="end" fill="#1d4ed8">R<tspan baseline-shift="sub" font-size="10">x</tspan></text>
  <text x="230" y="162" text-anchor="middle" fill="#64748b" font-size="11">2 unknowns</text>
  <text x="230" y="176" text-anchor="middle" fill="#64748b" font-size="11">no moment</text>
  <text x="383" y="34" text-anchor="middle" font-weight="600" fill="#334155">Fixed / weld</text>
  ${wallV(345, 44, 100)}
  <rect x="345" y="52" width="70" height="11" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="356" y1="140" x2="356" y2="110" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#fbdl2-r)"/>
  <line x1="392" y1="122" x2="422" y2="122" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#fbdl2-r)"/>
  <path d="M 398 92 A 15 15 0 1 1 383 107" fill="none" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#fbdl2-r)"/>
  <text x="340" y="130" text-anchor="end" fill="#1d4ed8">R<tspan baseline-shift="sub" font-size="10">y</tspan></text>
  <text x="426" y="118" text-anchor="start" fill="#1d4ed8">R<tspan baseline-shift="sub" font-size="10">x</tspan></text>
  <text x="418" y="94" text-anchor="start" fill="#1d4ed8">M</text>
  <text x="383" y="162" text-anchor="middle" fill="#64748b" font-size="11">3 unknowns</text>
  <text x="383" y="176" text-anchor="middle" fill="#64748b" font-size="11">2 forces + moment</text>
  <text x="77" y="212" text-anchor="middle" font-weight="600" fill="#334155">Cable / link</text>
  <line x1="47" y1="228" x2="107" y2="228" stroke="#334155" stroke-width="2"/>
  ${hatchH(48, 106, 219)}
  <line x1="77" y1="228" x2="77" y2="278" stroke="#334155" stroke-width="1.8"/>
  <rect x="57" y="278" width="40" height="26" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="103" y1="288" x2="103" y2="248" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#fbdl2-r)"/>
  <text x="112" y="272" text-anchor="start" fill="#1d4ed8">T</text>
  <text x="77" y="326" text-anchor="middle" fill="#64748b" font-size="11">1 unknown</text>
  <text x="77" y="340" text-anchor="middle" fill="#64748b" font-size="11">along cable, pull only</text>
  <text x="230" y="212" text-anchor="middle" font-weight="600" fill="#334155">Rough contact</text>
  <line x1="176" y1="288" x2="286" y2="248" stroke="#334155" stroke-width="2"/>
  <line x1="180" y1="298" x2="188" y2="286" stroke="#64748b" stroke-width="1"/>
  <line x1="200" y1="291" x2="208" y2="279" stroke="#64748b" stroke-width="1"/>
  <line x1="220" y1="284" x2="228" y2="272" stroke="#64748b" stroke-width="1"/>
  <line x1="240" y1="277" x2="248" y2="265" stroke="#64748b" stroke-width="1"/>
  <line x1="260" y1="270" x2="268" y2="258" stroke="#64748b" stroke-width="1"/>
  <polygon points="206,281 240,269 249,293 215,305" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="227" y1="287" x2="216" y2="257" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#fbdl2-r)"/>
  <text x="204" y="252" text-anchor="middle" fill="#1d4ed8">N</text>
  <line x1="227" y1="287" x2="264" y2="273" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#fbdl2-r)"/>
  <text x="276" y="272" text-anchor="start" fill="#1d4ed8">f</text>
  <text x="230" y="326" text-anchor="middle" fill="#64748b" font-size="11">2 unknowns</text>
  <text x="230" y="340" text-anchor="middle" fill="#64748b" font-size="11">normal + friction</text>
  <text x="383" y="212" text-anchor="middle" font-weight="600" fill="#334155">Journal bearing</text>
  <circle cx="383" cy="272" r="34" fill="#e2e8f0" stroke="#334155" stroke-width="1.8"/>
  <circle cx="383" cy="272" r="21" fill="#fff" stroke="#334155" stroke-width="1.8"/>
  <circle cx="383" cy="272" r="4" fill="#334155"/>
  <line x1="383" y1="272" x2="383" y2="230" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#fbdl2-r)"/>
  <line x1="383" y1="272" x2="428" y2="272" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#fbdl2-r)"/>
  <text x="366" y="238" text-anchor="end" fill="#1d4ed8">R<tspan baseline-shift="sub" font-size="10">y</tspan></text>
  <text x="432" y="264" text-anchor="start" fill="#1d4ed8">R<tspan baseline-shift="sub" font-size="10">x</tspan></text>
  <text x="383" y="326" text-anchor="middle" fill="#64748b" font-size="11">2 unknowns (radial)</text>
  <text x="383" y="340" text-anchor="middle" fill="#64748b" font-size="11">no thrust, no moment</text>
</svg>`;

const figMembers = `<svg viewBox="0 0 460 262" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbdl3")}
  <text x="115" y="24" text-anchor="middle" font-weight="600" fill="#334155">Two-force member</text>
  <path d="M 60 190 Q 155 172 180 70" fill="none" stroke="#334155" stroke-width="5"/>
  <line x1="60" y1="190" x2="180" y2="70" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <circle cx="60" cy="190" r="5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="180" cy="70" r="5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <line x1="54" y1="196" x2="30" y2="220" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#fbdl3-r)"/>
  <line x1="186" y1="64" x2="210" y2="40" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#fbdl3-r)"/>
  <text x="46" y="182" text-anchor="end" font-weight="600" fill="#334155">A</text>
  <text x="192" y="62" text-anchor="start" font-weight="600" fill="#334155">B</text>
  <text x="24" y="236" text-anchor="middle" fill="#1d4ed8" font-weight="600">F</text>
  <text x="216" y="34" text-anchor="middle" fill="#1d4ed8" font-weight="600">F</text>
  <text x="115" y="252" text-anchor="middle" fill="#64748b" font-size="11">force acts along AB whatever the shape</text>
  <text x="336" y="24" text-anchor="middle" font-weight="600" fill="#334155">Three-force member</text>
  <rect x="264" y="80" width="12" height="122" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="264" y="190" width="126" height="12" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  ${pinSup(270, 204)}
  <line x1="390" y1="60" x2="390" y2="242" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="246" y1="86" x2="404" y2="86" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="270" y1="196" x2="390" y2="86" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="262" y1="86" x2="238" y2="86" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbdl3-l)"/>
  <line x1="390" y1="208" x2="390" y2="238" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbdl3-l)"/>
  <circle cx="390" cy="86" r="4" fill="#1d4ed8"/>
  <text x="398" y="78" text-anchor="start" fill="#1d4ed8" font-weight="600">O</text>
  <text x="234" y="78" text-anchor="end" fill="#dc2626" font-weight="600">T</text>
  <text x="402" y="228" text-anchor="start" fill="#dc2626" font-weight="600">P</text>
  <text x="256" y="222" text-anchor="end" font-weight="600" fill="#334155">A</text>
  <text x="336" y="252" text-anchor="middle" fill="#64748b" font-size="11">all three lines meet at one point O</text>
</svg>`;

const figResultants = `<svg viewBox="0 0 460 232" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbdl4")}
  <text x="78" y="24" text-anchor="middle" font-weight="600" fill="#334155">Uniform</text>
  <rect x="23" y="96" width="110" height="44" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <rect x="23" y="140" width="110" height="10" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="78" y1="52" x2="78" y2="92" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#fbdl4-r)"/>
  <text x="78" y="44" text-anchor="middle" fill="#1d4ed8" font-weight="600">R = wL</text>
  ${dimH(23, 78, 176, "L/2")}
  <text x="78" y="200" text-anchor="middle" fill="#64748b" font-size="11">acts at midspan</text>
  <text x="230" y="24" text-anchor="middle" font-weight="600" fill="#334155">Triangular</text>
  <polygon points="175,140 285,140 285,96" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <rect x="175" y="140" width="110" height="10" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="248" y1="52" x2="248" y2="107" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#fbdl4-r)"/>
  <text x="248" y="44" text-anchor="middle" fill="#1d4ed8" font-weight="600">R = w<tspan baseline-shift="sub" font-size="10">0</tspan>L/2</text>
  ${dimH(175, 248, 176, "2L/3")}
  <text x="230" y="200" text-anchor="middle" fill="#64748b" font-size="11">2L/3 from the zero end</text>
  <text x="382" y="24" text-anchor="middle" font-weight="600" fill="#334155">Trapezoidal</text>
  <polygon points="327,140 437,140 437,96 327,118" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <line x1="327" y1="118" x2="437" y2="118" stroke="#dc2626" stroke-width="1" stroke-dasharray="4 3"/>
  <rect x="327" y="140" width="110" height="10" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="388" y1="52" x2="388" y2="106" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#fbdl4-r)"/>
  <text x="388" y="44" text-anchor="middle" fill="#1d4ed8" font-weight="600">R</text>
  ${dimH(327, 388, 176, "x")}
  <text x="382" y="200" text-anchor="middle" fill="#64748b" font-size="11">rectangle + triangle</text>
  <text x="382" y="214" text-anchor="middle" fill="#64748b" font-size="11">weighted centroid</text>
</svg>`;

const figCut = `<svg viewBox="0 0 460 268" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbdl5")}
  <rect x="60" y="62" width="340" height="12" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  ${pinSup(60, 74)}
  ${rollerSup(400, 74)}
  <line x1="250" y1="20" x2="250" y2="56" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbdl5-l)"/>
  <text x="250" y="14" text-anchor="middle" fill="#dc2626" font-weight="600">P</text>
  <line x1="180" y1="46" x2="180" y2="92" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="180" y="40" text-anchor="middle" fill="#1d4ed8" font-size="12">a</text>
  <text x="180" y="106" text-anchor="middle" fill="#1d4ed8" font-size="12">a</text>
  <rect x="40" y="176" width="110" height="12" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  ${pinSup(46, 188)}
  <rect x="270" y="176" width="150" height="12" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  ${rollerSup(410, 188)}
  <line x1="152" y1="170" x2="192" y2="170" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#fbdl5-r)"/>
  <line x1="268" y1="170" x2="228" y2="170" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#fbdl5-r)"/>
  <text x="210" y="166" text-anchor="middle" fill="#1d4ed8" font-weight="600">N</text>
  <line x1="158" y1="194" x2="158" y2="226" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#fbdl5-r)"/>
  <line x1="262" y1="226" x2="262" y2="194" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#fbdl5-r)"/>
  <text x="210" y="216" text-anchor="middle" fill="#1d4ed8" font-weight="600">V</text>
  <path d="M 176 146 A 14 14 0 1 1 162 132" fill="none" stroke="#1d4ed8" stroke-width="2" marker-end="url(#fbdl5-r)"/>
  <path d="M 244 132 A 14 14 0 1 1 258 146" fill="none" stroke="#1d4ed8" stroke-width="2" marker-end="url(#fbdl5-r)"/>
  <text x="210" y="136" text-anchor="middle" fill="#1d4ed8" font-weight="600">M</text>
  <text x="230" y="256" text-anchor="middle" fill="#64748b" font-size="11">the two cut faces carry equal and opposite N, V and M</text>
</svg>`;

const figMultiBody = `<svg viewBox="0 0 460 306" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbdl6")}
  <rect x="110" y="58" width="240" height="12" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  ${pinSup(110, 70)}
  <rect x="336" y="70" width="14" height="66" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  ${pinSup(343, 136)}
  <line x1="260" y1="22" x2="260" y2="52" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbdl6-l)"/>
  <text x="260" y="16" text-anchor="middle" fill="#dc2626" font-weight="600">P</text>
  <text x="96" y="54" text-anchor="end" font-weight="600" fill="#334155">A</text>
  <text x="362" y="54" text-anchor="start" font-weight="600" fill="#334155">C</text>
  <text x="50" y="196" text-anchor="start" fill="#334155" font-size="12" font-weight="600">Beam alone</text>
  <rect x="50" y="212" width="180" height="12" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="160" y1="176" x2="160" y2="206" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbdl6-l)"/>
  <text x="176" y="190" text-anchor="start" fill="#dc2626" font-weight="600">P</text>
  <line x1="56" y1="266" x2="56" y2="232" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#fbdl6-r)"/>
  <text x="56" y="284" text-anchor="middle" fill="#1d4ed8" font-weight="600">A<tspan baseline-shift="sub" font-size="10">y</tspan></text>
  <line x1="222" y1="266" x2="222" y2="232" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#fbdl6-r)"/>
  <text x="222" y="284" text-anchor="middle" fill="#1d4ed8" font-weight="600">N</text>
  <text x="298" y="196" text-anchor="start" fill="#334155" font-size="12" font-weight="600">Post alone</text>
  <rect x="390" y="216" width="16" height="60" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="398" y1="178" x2="398" y2="210" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#fbdl6-r)"/>
  <text x="414" y="194" text-anchor="start" fill="#1d4ed8" font-weight="600">N</text>
  <line x1="398" y1="300" x2="398" y2="282" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#fbdl6-r)"/>
  <text x="414" y="298" text-anchor="start" fill="#1d4ed8" font-weight="600">N</text>
  <text x="316" y="248" text-anchor="middle" fill="#64748b" font-size="11">equal and</text>
  <text x="316" y="262" text-anchor="middle" fill="#64748b" font-size="11">opposite</text>
</svg>`;

// --- question figures ------------------------------------------------------

const figQ01 = `<svg viewBox="0 0 460 258" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbd01")}
  <rect x="70" y="120" width="330" height="13" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="400" y1="52" x2="400" y2="114" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbd01-l)"/>
  <text x="400" y="44" text-anchor="middle" fill="#dc2626" font-weight="600">3 kN</text>
  ${pinSup(70, 133)}
  ${rollerSup(276, 133)}
  <text x="70" y="190" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <text x="276" y="196" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  ${dimH(70, 276, 216, "250 mm")}
  ${dimH(70, 400, 244, "400 mm")}
</svg>`;

const figQ02 = `<svg viewBox="0 0 460 226" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbd27")}
  <rect x="60" y="118" width="360" height="13" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="180" y1="46" x2="180" y2="112" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbd27-l)"/>
  <text x="180" y="38" text-anchor="middle" fill="#dc2626" font-weight="600">6 kN</text>
  <path d="M 330 100 A 22 22 0 1 1 308 122" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbd27-l)"/>
  <text x="356" y="98" text-anchor="start" fill="#dc2626" font-weight="600">4.5 kN&middot;m</text>
  <circle cx="60" cy="124" r="4" fill="#334155"/>
  <text x="60" y="108" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  ${dimH(60, 180, 176, "1.2 m")}
  <text x="230" y="206" text-anchor="middle" fill="#64748b" font-size="11">the couple is a free vector: same moment about every point on the beam</text>
</svg>`;

const figQ04 = `<svg viewBox="0 0 460 202" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbd02")}
  <text x="112" y="24" text-anchor="middle" font-weight="600" fill="#334155">Actual structure</text>
  <text x="332" y="24" text-anchor="middle" font-weight="600" fill="#334155">The FBD as drawn</text>
  ${wallV(55, 55, 165)}
  <rect x="55" y="95" width="130" height="12" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="178" y1="48" x2="178" y2="89" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbd02-l)"/>
  <text x="178" y="40" text-anchor="middle" fill="#dc2626" font-weight="600">P = 2 kN</text>
  <rect x="270" y="95" width="130" height="12" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="393" y1="48" x2="393" y2="89" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbd02-l)"/>
  <text x="393" y="40" text-anchor="middle" fill="#dc2626" font-weight="600">P = 2 kN</text>
  <line x1="276" y1="162" x2="276" y2="115" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#fbd02-r)"/>
  <text x="276" y="180" text-anchor="middle" fill="#1d4ed8" font-weight="600">R<tspan baseline-shift="sub" font-size="10">y</tspan></text>
  <line x1="238" y1="101" x2="266" y2="101" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#fbd02-r)"/>
  <text x="234" y="105" text-anchor="end" fill="#1d4ed8" font-weight="600">R<tspan baseline-shift="sub" font-size="10">x</tspan></text>
</svg>`;

const figQ05 = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbd03")}
  <text x="230" y="26" text-anchor="middle" font-weight="600" fill="#334155">FBD as drawn (crate about to slide right)</text>
  <line x1="40" y1="180" x2="420" y2="180" stroke="#334155" stroke-width="2"/>
  ${hatchH(42, 418, 180)}
  <rect x="140" y="118" width="100" height="62" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="240" y1="124" x2="348" y2="74" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbd03-l)"/>
  <text x="356" y="66" text-anchor="start" fill="#dc2626" font-weight="600">T = 300 N</text>
  <text x="272" y="116" text-anchor="middle" fill="#64748b" font-size="12">25&#176;</text>
  <line x1="178" y1="149" x2="178" y2="176" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#fbd03-r)"/>
  <text x="166" y="172" text-anchor="end" fill="#1d4ed8" font-weight="600">W</text>
  <line x1="212" y1="178" x2="212" y2="146" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#fbd03-r)"/>
  <text x="224" y="152" text-anchor="start" fill="#1d4ed8" font-weight="600">N</text>
  <line x1="112" y1="172" x2="152" y2="172" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#fbd03-r)"/>
  <text x="106" y="176" text-anchor="end" fill="#1d4ed8" font-weight="600">f</text>
  <line x1="240" y1="124" x2="300" y2="124" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <text x="230" y="220" text-anchor="middle" fill="#64748b" font-size="11">rope pulls up and to the right; the crate is on the point of sliding right</text>
</svg>`;

const figQ06 = `<svg viewBox="0 0 460 246" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbd04")}
  ${wallV(70, 40, 220)}
  <rect x="70" y="90" width="270" height="12" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="72" y1="192" x2="198" y2="100" stroke="#334155" stroke-width="5"/>
  <circle cx="76" cy="96" r="5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="200" cy="96" r="5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="74" cy="190" r="5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <line x1="340" y1="40" x2="340" y2="84" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbd04-l)"/>
  <text x="340" y="32" text-anchor="middle" fill="#dc2626" font-weight="600">6 kN</text>
  <text x="90" y="82" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <text x="200" y="80" text-anchor="middle" font-weight="600" fill="#334155">C</text>
  <text x="356" y="102" text-anchor="start" font-weight="600" fill="#334155">B</text>
  <text x="92" y="212" text-anchor="middle" font-weight="600" fill="#334155">D</text>
  <text x="272" y="84" text-anchor="middle" fill="#64748b" font-size="12">member AB</text>
  <text x="176" y="168" text-anchor="middle" fill="#64748b" font-size="12">member CD</text>
  <text x="230" y="232" text-anchor="middle" fill="#64748b" font-size="11">CD is pinned at C and D and carries nothing in between</text>
</svg>`;

const figQ07 = `<svg viewBox="0 0 460 244" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbd05")}
  ${wallV(60, 52, 148)}
  <line x1="60" y1="100" x2="410" y2="100" stroke="#334155" stroke-width="8" stroke-linecap="round"/>
  <circle cx="66" cy="100" r="5.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <rect x="268" y="82" width="30" height="36" fill="none" stroke="#334155" stroke-width="2"/>
  <line x1="283" y1="118" x2="283" y2="186" stroke="#334155" stroke-width="4"/>
  <line x1="248" y1="186" x2="318" y2="186" stroke="#334155" stroke-width="2.5"/>
  ${hatchH(250, 316, 186)}
  <line x1="410" y1="146" x2="410" y2="110" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbd05-l)"/>
  <text x="410" y="166" text-anchor="middle" fill="#dc2626" font-weight="600">P</text>
  <text x="84" y="88" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <text x="283" y="72" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  <text x="96" y="128" text-anchor="start" fill="#64748b" font-size="11">pin to the wall</text>
  <text x="330" y="106" text-anchor="start" fill="#64748b" font-size="11">guide collar,</text>
  <text x="330" y="122" text-anchor="start" fill="#64748b" font-size="11">welded to the frame</text>
  <line x1="330" y1="60" x2="374" y2="60" stroke="#64748b" stroke-width="1.4" marker-end="url(#fbd05-g)"/>
  <line x1="330" y1="60" x2="286" y2="60" stroke="#64748b" stroke-width="1.4" marker-end="url(#fbd05-g)"/>
  <text x="330" y="50" text-anchor="middle" fill="#64748b" font-size="11">rod slides freely along its own axis</text>
  <text x="230" y="230" text-anchor="middle" fill="#64748b" font-size="11">the collar is a close fit: the rod cannot move sideways or tilt inside it</text>
</svg>`;

const figQ08 = `<svg viewBox="0 0 460 226" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbd06")}
  <polygon points="70,126 400,126 400,56" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <rect x="70" y="126" width="330" height="13" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="136" y1="112" x2="136" y2="122" stroke="#dc2626" stroke-width="1.8" marker-end="url(#fbd06-l)"/>
  <line x1="202" y1="98" x2="202" y2="122" stroke="#dc2626" stroke-width="1.8" marker-end="url(#fbd06-l)"/>
  <line x1="268" y1="84" x2="268" y2="122" stroke="#dc2626" stroke-width="1.8" marker-end="url(#fbd06-l)"/>
  <line x1="334" y1="70" x2="334" y2="122" stroke="#dc2626" stroke-width="1.8" marker-end="url(#fbd06-l)"/>
  <line x1="399" y1="57" x2="399" y2="122" stroke="#dc2626" stroke-width="1.8" marker-end="url(#fbd06-l)"/>
  <text x="396" y="48" text-anchor="end" fill="#dc2626" font-weight="600">w = 9 kN/m</text>
  ${pinSup(70, 139)}
  ${rollerSup(400, 139)}
  <text x="40" y="134" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <text x="430" y="134" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  ${dimH(70, 400, 214, "4 m")}
</svg>`;

const figQ10 = `<svg viewBox="0 0 460 234" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbd07")}
  <polygon points="60,140 410,140 410,60 60,108" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <rect x="60" y="140" width="350" height="13" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="61" y1="109" x2="61" y2="136" stroke="#dc2626" stroke-width="1.8" marker-end="url(#fbd07-l)"/>
  <line x1="130" y1="98" x2="130" y2="136" stroke="#dc2626" stroke-width="1.8" marker-end="url(#fbd07-l)"/>
  <line x1="200" y1="89" x2="200" y2="136" stroke="#dc2626" stroke-width="1.8" marker-end="url(#fbd07-l)"/>
  <line x1="270" y1="79" x2="270" y2="136" stroke="#dc2626" stroke-width="1.8" marker-end="url(#fbd07-l)"/>
  <line x1="340" y1="70" x2="340" y2="136" stroke="#dc2626" stroke-width="1.8" marker-end="url(#fbd07-l)"/>
  <line x1="409" y1="61" x2="409" y2="136" stroke="#dc2626" stroke-width="1.8" marker-end="url(#fbd07-l)"/>
  <text x="60" y="100" text-anchor="middle" fill="#dc2626" font-weight="600">4 kN/m</text>
  <text x="410" y="52" text-anchor="middle" fill="#dc2626" font-weight="600">10 kN/m</text>
  ${pinSup(60, 153)}
  ${rollerSup(410, 153)}
  <text x="30" y="148" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <text x="440" y="148" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  ${dimH(60, 410, 224, "6 m")}
</svg>`;

const figQ11 = `<svg viewBox="0 0 460 234" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbd08")}
  ${wallV(60, 55, 198)}
  <line x1="60" y1="72" x2="410" y2="72" stroke="#dc2626" stroke-width="2"/>
  <line x1="61" y1="76" x2="61" y2="116" stroke="#dc2626" stroke-width="1.8" marker-end="url(#fbd08-l)"/>
  <line x1="110" y1="76" x2="110" y2="116" stroke="#dc2626" stroke-width="1.8" marker-end="url(#fbd08-l)"/>
  <line x1="160" y1="76" x2="160" y2="116" stroke="#dc2626" stroke-width="1.8" marker-end="url(#fbd08-l)"/>
  <line x1="210" y1="76" x2="210" y2="116" stroke="#dc2626" stroke-width="1.8" marker-end="url(#fbd08-l)"/>
  <line x1="260" y1="76" x2="260" y2="116" stroke="#dc2626" stroke-width="1.8" marker-end="url(#fbd08-l)"/>
  <line x1="310" y1="76" x2="310" y2="116" stroke="#dc2626" stroke-width="1.8" marker-end="url(#fbd08-l)"/>
  <line x1="360" y1="76" x2="360" y2="116" stroke="#dc2626" stroke-width="1.8" marker-end="url(#fbd08-l)"/>
  <line x1="409" y1="76" x2="409" y2="116" stroke="#dc2626" stroke-width="1.8" marker-end="url(#fbd08-l)"/>
  <text x="235" y="64" text-anchor="middle" fill="#dc2626" font-weight="600">w = 5 kN/m</text>
  <rect x="60" y="120" width="350" height="13" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="293" y1="104" x2="293" y2="152" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="293" y="100" text-anchor="middle" fill="#1d4ed8" font-size="12">a</text>
  <text x="293" y="166" text-anchor="middle" fill="#1d4ed8" font-size="12">a</text>
  ${dimH(293, 410, 196, "1 m")}
  ${dimH(60, 293, 224, "2 m")}
</svg>`;

const figQ12 = `<svg viewBox="0 0 460 216" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbd09")}
  ${wallV(60, 52, 188)}
  <rect x="60" y="115" width="350" height="13" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="235" y1="52" x2="235" y2="109" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbd09-l)"/>
  <text x="235" y="44" text-anchor="middle" fill="#dc2626" font-weight="600">P</text>
  ${rollerSup(410, 128)}
  <text x="78" y="108" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <text x="410" y="106" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  ${dimH(60, 235, 202, "L/2")}
  ${dimH(235, 410, 202, "L/2")}
</svg>`;

const figQ13 = `<svg viewBox="0 0 460 270" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbd10")}
  <rect x="60" y="90" width="350" height="13" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  ${pinSup(60, 103)}
  <rect x="396" y="103" width="14" height="100" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  ${pinSup(403, 203)}
  <line x1="293" y1="32" x2="293" y2="84" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbd10-l)"/>
  <text x="293" y="24" text-anchor="middle" fill="#dc2626" font-weight="600">12 kN</text>
  <text x="60" y="82" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <text x="434" y="100" text-anchor="middle" font-weight="600" fill="#334155">C</text>
  <text x="380" y="160" text-anchor="end" fill="#64748b" font-size="12">post</text>
  ${dimH(60, 293, 256, "4 m")}
  ${dimH(293, 410, 256, "2 m")}
</svg>`;

const figQ14 = `<svg viewBox="0 0 460 262" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbd11")}
  <text x="316" y="26" text-anchor="middle" font-weight="600" fill="#334155">Ideal pulley, 90&#176; wrap</text>
  <circle cx="230" cy="110" r="48" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
  <path d="M 50 62 L 230 62 A 48 48 0 0 1 278 110 L 278 200" fill="none" stroke="#334155" stroke-width="2"/>
  <line x1="150" y1="62" x2="58" y2="62" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbd11-l)"/>
  <text x="104" y="52" text-anchor="middle" fill="#dc2626" font-weight="600">T = 400 N</text>
  <rect x="254" y="200" width="48" height="34" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="278" y="222" text-anchor="middle" fill="#dc2626" font-weight="600">400 N</text>
  <circle cx="230" cy="110" r="9" fill="#334155"/>
  <line x1="224" y1="118" x2="172" y2="168" stroke="#64748b" stroke-width="1"/>
  <text x="168" y="176" text-anchor="end" fill="#334155" font-size="12">axle A</text>
</svg>`;

const figQ15 = `<svg viewBox="0 0 460 276" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbd12")}
  <rect x="70" y="90" width="330" height="12" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  ${pinSup(70, 102)}
  ${springV(202, 102, 196)}
  <line x1="170" y1="196" x2="234" y2="196" stroke="#334155" stroke-width="2"/>
  ${hatchH(172, 232, 196)}
  <text x="248" y="152" text-anchor="start" fill="#334155" font-size="12">k = 80 kN/m</text>
  <line x1="400" y1="34" x2="400" y2="84" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbd12-l)"/>
  <text x="400" y="26" text-anchor="middle" fill="#dc2626" font-weight="600">P = 300 N</text>
  <text x="70" y="82" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <text x="202" y="82" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  <text x="418" y="100" text-anchor="start" font-weight="600" fill="#334155">C</text>
  ${dimH(70, 202, 240, "0.2 m")}
  ${dimH(70, 400, 266, "0.5 m")}
</svg>`;

const figQ17 = `<svg viewBox="0 0 460 246" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbd13")}
  <line x1="100" y1="190" x2="291" y2="80" stroke="#334155" stroke-width="7" stroke-linecap="round"/>
  <circle cx="100" cy="190" r="11" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
  <circle cx="100" cy="190" r="4" fill="#334155"/>
  ${pinSup(100, 201)}
  <line x1="100" y1="190" x2="252" y2="190" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <path d="M 155 190 A 55 55 0 0 0 148 163" fill="none" stroke="#64748b" stroke-width="1.4"/>
  <text x="170" y="180" text-anchor="start" fill="#64748b" font-size="12">30&#176;</text>
  <line x1="291" y1="22" x2="291" y2="74" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbd13-l)"/>
  <text x="291" y="14" text-anchor="middle" fill="#dc2626" font-weight="600">200 N</text>
  <line x1="89" y1="171" x2="280" y2="61" stroke="#64748b" stroke-width="1"/>
  <line x1="86" y1="166" x2="92" y2="176" stroke="#64748b" stroke-width="1"/>
  <line x1="277" y1="56" x2="283" y2="66" stroke="#64748b" stroke-width="1"/>
  <text x="176" y="104" text-anchor="middle" fill="#64748b" font-size="12">0.5 m</text>
  <text x="78" y="200" text-anchor="end" font-weight="600" fill="#334155">O</text>
</svg>`;

const figQ19 = `<svg viewBox="0 0 460 254" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbd14")}
  <rect x="70" y="110" width="325" height="13" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  ${pinSup(70, 123)}
  <circle cx="370" cy="138" r="10" fill="none" stroke="#334155" stroke-width="1.8"/>
  <circle cx="370" cy="138" r="2.5" fill="#334155"/>
  <line x1="370" y1="123" x2="370" y2="128" stroke="#334155" stroke-width="1.8"/>
  <line x1="345" y1="129" x2="430" y2="178" stroke="#334155" stroke-width="2.5"/>
  <line x1="352" y1="140" x2="344" y2="146" stroke="#64748b" stroke-width="1"/>
  <line x1="370" y1="150" x2="362" y2="156" stroke="#64748b" stroke-width="1"/>
  <line x1="388" y1="161" x2="380" y2="167" stroke="#64748b" stroke-width="1"/>
  <line x1="406" y1="171" x2="398" y2="177" stroke="#64748b" stroke-width="1"/>
  <line x1="345" y1="129" x2="428" y2="129" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <path d="M 405 129 A 60 60 0 0 0 400 156" fill="none" stroke="#64748b" stroke-width="1.2"/>
  <text x="386" y="200" text-anchor="middle" fill="#64748b" font-size="12">30&#176; incline</text>
  <line x1="230" y1="50" x2="230" y2="104" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbd14-l)"/>
  <text x="230" y="42" text-anchor="middle" fill="#dc2626" font-weight="600">8 kN</text>
  <text x="150" y="244" text-anchor="middle" fill="#64748b" font-size="11">roller at B runs on the inclined pad</text>
  <text x="70" y="100" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <text x="370" y="100" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  ${dimH(70, 370, 220, "2.4 m")}
</svg>`;

const figQ21 = `<svg viewBox="0 0 460 272" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbd15")}
  ${wallV(60, 40, 226)}
  <rect x="60" y="104" width="250" height="12" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="62" y1="199" x2="179" y2="112" stroke="#334155" stroke-width="5"/>
  <circle cx="66" cy="110" r="5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="66" cy="200" r="5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="180" cy="116" r="5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <line x1="310" y1="44" x2="310" y2="98" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbd15-l)"/>
  <text x="310" y="36" text-anchor="middle" fill="#dc2626" font-weight="600">4 kN</text>
  <text x="82" y="98" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <text x="326" y="104" text-anchor="start" font-weight="600" fill="#334155">B</text>
  <text x="86" y="216" text-anchor="middle" font-weight="600" fill="#334155">D</text>
  <text x="198" y="134" text-anchor="start" font-weight="600" fill="#334155">E</text>
  <text x="140" y="176" text-anchor="middle" fill="#64748b" font-size="12">strut DE</text>
  ${dimH(60, 180, 252, "1.2 m")}
  ${dimH(180, 310, 252, "1.2 m")}
  ${dimV(32, 110, 200, "0.9 m")}
</svg>`;

const content: TopicContent = {
  lesson: {
    title: "Free-Body Diagrams",
    intro: `<p>The free-body diagram is the one skill an interviewer can screen in ninety seconds, and it is where most candidates actually lose the problem. Not in the algebra. In the diagram. A forgotten moment reaction at a weld, an internal force drawn on a single-body FBD, a weight counted twice, a moment arm measured along the member instead of perpendicular to the force: every one of those produces a confident, wrong answer.</p>
<p>This lesson is about <strong>constructing and checking the diagram</strong>, not about grinding the equilibrium equations afterwards. Isolate the body, replace every support with the right number of reactions, get the signs consistent, spot the two- and three-force members that collapse the problem, reduce distributed loads to resultants, and know when you have to cut the body open or draw more than one diagram.</p>`,
    sections: [
      {
        heading: "Isolating the body: draw the boundary first",
        html: `<p>An FBD starts with a decision, not a drawing: <strong>what is inside the boundary?</strong> Draw an imaginary closed curve around the piece you want to analyse. Then apply one rule mechanically:</p>
<div class="callout"><strong>Everything the boundary cuts through becomes a force (and possibly a moment) on the diagram. Everything inside the boundary disappears into the body. Nothing outside the boundary appears at all.</strong></div>
<figure class="fig">${figIsolate}<figcaption>Isolating a wall bracket. The cut removes the wall and the motor; the wall comes back as R<sub>x</sub>, R<sub>y</sub> and M, and the motor comes back as a single 250 N contact force. Neither the wall nor the motor is drawn.</figcaption></figure>
<p>Three consequences follow immediately, and interviewers probe all three:</p>
<ul>
<li><strong>Weight belongs to the body, not to what sits on it.</strong> If the motor is outside the boundary its weight never appears, only the contact force it pushes down with. Draw both and you have counted 250 N twice.</li>
<li><strong>Internal forces cancel.</strong> Bolt preload, weld stresses, the shear at midspan: all of these come in equal-and-opposite pairs inside the boundary and sum to zero. They cannot appear on a single-body FBD. To see them you must move the boundary so it cuts them.</li>
<li><strong>Every arrow must have an owner.</strong> If you cannot name the body outside the boundary that applies a force, delete the arrow. "Centrifugal force" and "the force of the beam pushing back on itself" both fail this test.</li>
</ul>
<p>The boundary can also enclose several parts at once. Enclosing a whole frame hides all the internal pin forces and gives you the support reactions in three equations, and then you cut it apart to get the pin forces. Choosing the boundary <em>is</em> the modelling step.</p>`,
      },
      {
        heading: "Replacing supports with reactions: get the count right",
        html: `<p>Each support removes one or more degrees of freedom, and <strong>each removed degree of freedom returns as exactly one unknown reaction</strong>. That is the whole rule. Count the motions the support blocks and you have the count of unknowns.</p>
<figure class="fig">${figSupports}<figcaption>The standard supports and what each contributes to the FBD. The count, not the picture, is what you must have right before writing a single equation.</figcaption></figure>
<table>
<thead><tr><th>Support</th><th>Blocks</th><th>Unknowns</th></tr></thead>
<tbody>
<tr><td>Roller, rocker, smooth surface</td><td>Translation &perp; to the surface</td><td>1 (normal force)</td></tr>
<tr><td>Pin, hinge, clevis</td><td>Both translations, rotation free</td><td>2 (force components)</td></tr>
<tr><td>Fixed end, weld, deep clamp</td><td>Both translations + rotation</td><td>3 (2 forces + moment)</td></tr>
<tr><td>Cable, rope, flexible link</td><td>Motion along its own axis, pull only</td><td>1 (tension along the cable)</td></tr>
<tr><td>Rigid two-force link</td><td>Motion along the line of its pins</td><td>1 (push or pull along the line)</td></tr>
<tr><td>Rough contact surface</td><td>Normal + tangential (until slip)</td><td>2 (normal + friction)</td></tr>
<tr><td>Guided slider / collar on a shaft</td><td>Transverse translation + rotation</td><td>2 (1 force + 1 moment)</td></tr>
<tr><td>3D ball-and-socket</td><td>All three translations</td><td>3 forces, no moment</td></tr>
<tr><td>3D journal (radial) bearing</td><td>Two radial translations</td><td>2 radial forces</td></tr>
<tr><td>3D fixed / welded joint</td><td>Everything</td><td>6 (3 forces + 3 moments)</td></tr>
</tbody>
</table>
<p>Two habits separate a clean diagram from a wrong one. <strong>A pin is two unknowns, never one</strong>; drawing a single inclined arrow at a pin is fine only when you already know the direction, from a two-force member or three-force concurrency. And <strong>a cable can only pull</strong>. A negative cable tension in your solution means the cable has gone slack and the whole model is wrong, not just the sign.</p>`,
      },
      {
        heading: "Signs, unknown counts, and determinacy",
        html: `<p>Assumed directions do not have to be right. They have to be <strong>consistent</strong>. Pick positive x, positive y and a positive moment sense, draw every unknown in some direction, then let the algebra report the truth: a negative result means the force acts opposite to your arrow, with the magnitude you computed. Do not redraw and re-solve. Say "A<sub>y</sub> is 2 kN downward" and move on. Redrawing is where sign errors are actually born.</p>
<p>The moment of a force about a point uses the <strong>perpendicular</strong> distance to the line of action:</p>
<p class="eq">M<sub>O</sub> = F &middot; d<sub>&perp;</sub>&nbsp;&nbsp;&nbsp;or, in components,&nbsp;&nbsp;&nbsp;M<sub>O</sub> = x&middot;F<sub>y</sub> &minus; y&middot;F<sub>x</sub></p>
<p>The component form is worth memorising because it never lets you use the wrong offset. Here (x, y) is the position of the force&rsquo;s point of application measured from O, and F<sub>x</sub>, F<sub>y</sub> are its components. A horizontal force offset vertically by 0.2 m gives M = &minus;0.2F, no matter how far along the beam it acts.</p>
<p>Once the unknowns are drawn, count them <em>before</em> solving:</p>
<ul>
<li><strong>r = 3</strong> unknown reactions on a 2D rigid body &rarr; statically determinate; statics alone gives the answer.</li>
<li><strong>r &gt; 3</strong> &rarr; statically indeterminate to degree r &minus; 3; you need compatibility (deflections, stiffnesses) as well.</li>
<li><strong>r &lt; 3</strong> &rarr; a mechanism; it moves, and no set of static equations will hold it still.</li>
<li>An internal hinge adds one extra equation (&Sigma;M = 0 about the hinge, for the part on one side of it), which is how compound beams stay determinate with four reactions.</li>
</ul>
<div class="callout warn"><strong>Counting is necessary, not sufficient.</strong> Three parallel vertical links give r = 3 and still cannot resist a horizontal load, leaving the structure <em>improperly constrained</em>. The same failure appears when all three reaction lines are concurrent, since they cannot generate a moment about the common point. Check that the reactions span all three motions, not just that there are three of them.</div>`,
      },
      {
        heading: "Two-force and three-force members",
        html: `<p>These two shortcuts are interview currency. Both replace unknown directions with known ones and turn a messy frame into arithmetic.</p>
<figure class="fig">${figMembers}<figcaption>Left: a two-force member, loaded only at two pins, so its force must lie on the line joining them regardless of its shape. Right: a three-force member, where the three lines of action must intersect at a single point O.</figcaption></figure>
<p><strong>Two-force member.</strong> A body loaded at exactly two points, with no other force, no applied moment and negligible weight. Force balance makes the two end forces equal and opposite; moment balance makes them <strong>collinear</strong>, so they act along the straight line joining the two load points. Note what this does <em>not</em> require: the member does not have to be straight. A bent link, a hydraulic cylinder, a curved bracket pinned at both ends all carry force along the chord between the pins. A straight two-force member is therefore in pure tension or compression; a curved one also bends, but the <em>end forces</em> still act along the chord.</p>
<p>The practical effect is that a pin which would have given you two unknown components gives you one unknown magnitude with a known direction. Spot them by scanning for members with pins at both ends and nothing applied in between.</p>
<p><strong>Three-force member.</strong> A body in equilibrium under exactly three forces requires the three lines of action to be <strong>concurrent</strong>, or all parallel, which is the degenerate case where the meeting point is at infinity. Proof by contradiction: take moments about the intersection of any two, and the third would have to produce zero moment there, so it must pass through the point as well.</p>
<p>This is the fastest route to an unknown pin reaction&rsquo;s <em>direction</em>. Find where the other two lines of action cross, then draw the line from the pin to that crossing. In the bell-crank problem a vertical load and a horizontal link fix the concurrency point immediately, so the pin reaction angle drops out with no equations at all, and one moment equation gives the magnitude.</p>`,
      },
      {
        heading: "Distributed loads and their resultants",
        html: `<p>Pressure, self-weight, snow, wind, bearing loads: real loads are spread out. For computing <em>external</em> equilibrium you replace the distribution with a single resultant.</p>
<p class="eq">R = area under the load curve&nbsp;&nbsp;&nbsp;&nbsp;acting at the <strong>centroid</strong> of that area</p>
<figure class="fig">${figResultants}<figcaption>The three cases worth knowing by heart. Trapezoids are handled by splitting into a rectangle plus a triangle and taking the weighted centroid, never by averaging the end intensities and putting the resultant at midspan.</figcaption></figure>
<ul>
<li><strong>Uniform</strong> w over length L: R = wL at L/2.</li>
<li><strong>Triangular</strong>, zero at one end and w<sub>0</sub> at the other: R = w<sub>0</sub>L/2, acting at L/3 from the <em>heavy</em> end, i.e. 2L/3 from the zero end. Getting this backwards is the single most common distributed-load error.</li>
<li><strong>Trapezoidal</strong> from w<sub>1</sub> to w<sub>2</sub>: split it. R<sub>1</sub> = w<sub>1</sub>L at L/2 plus R<sub>2</sub> = (w<sub>2</sub> &minus; w<sub>1</sub>)L/2 at 2L/3, then combine with x&#772; = &Sigma;R<sub>i</sub>x<sub>i</sub> / &Sigma;R<sub>i</sub>.</li>
<li><strong>Pressure on an area</strong>: R = p &middot; A for uniform pressure; hydrostatic pressure on a vertical wall is triangular, so its resultant sits one third of the depth up from the base.</li>
</ul>
<div class="callout warn">The resultant is valid for <strong>reactions and overall equilibrium only</strong>. It is wrong for shear and bending-moment diagrams, deflection, or contact stress. A uniform load wL and a point load wL at midspan give identical reactions but peak moments of wL&sup2;/8 and wL&sup2;/4, a factor of two. Collapse the load to find reactions, then put it back to find internals.</div>`,
      },
      {
        heading: "Internal FBDs and multi-body systems",
        html: `<p>To see a force that lives inside a body, move the boundary so it cuts that force. Slice the member at the section of interest, throw away one side, and put back on the cut face whatever is needed to keep the remaining piece in equilibrium: an <strong>axial force N</strong>, a <strong>shear force V</strong>, and a <strong>bending moment M</strong>, plus a torque in 3D.</p>
<figure class="fig">${figCut}<figcaption>Cutting at section a&ndash;a. Either side can be kept; the two cut faces carry equal and opposite N, V and M. Keep the side with fewer forces on it and you may not even need the reactions.</figcaption></figure>
<p>Two habits pay off. <strong>Keep the simpler side</strong>: cutting a cantilever and keeping the free end means you never have to compute the wall reactions at all. And <strong>N, V and M are defined relative to the member axis</strong> rather than to global x and y, so on a vertical post carrying an offset load the shear is horizontal and the axial force is vertical.</p>
<p>The same boundary logic drives multi-body problems. When bodies are pinned or resting on one another you draw one FBD per body, and the interaction force appears on both, <strong>equal in magnitude, opposite in direction</strong>. It is one unknown, not two.</p>
<figure class="fig">${figMultiBody}<figcaption>A beam resting on a post. N pushes up on the beam and down on the post with the same magnitude. Draw it as two arrows of different size on the two diagrams and the system will not balance.</figcaption></figure>
<p>Order of attack for a frame: draw the whole system first, since internal pin forces vanish and you get the support reactions, then cut it apart and use the reactions you already have. Ideal pulleys fit the same pattern. A frictionless pulley changes the direction of a cable force but not its magnitude, so the tension is the same on both sides, and the axle carries the <em>vector</em> sum of the two runs.</p>
<p>Finally, the errors to hunt for when you check any FBD, yours or a candidate&rsquo;s:</p>
<table>
<thead><tr><th>Error</th><th>How it shows up</th><th>Check</th></tr></thead>
<tbody>
<tr><td>Missing reaction</td><td>Fixed support drawn with two forces and no moment</td><td>Count blocked DOF at every support before drawing</td></tr>
<tr><td>Internal force on a single body</td><td>Shear or member force drawn inside the boundary</td><td>Only forces crossing the boundary belong</td></tr>
<tr><td>Weight double-counted</td><td>Mounted part shown as both weight and contact force</td><td>The part is either inside the boundary or outside it</td></tr>
<tr><td>Wrong moment arm</td><td>Force &times; distance along the member</td><td>Use d<sub>&perp;</sub>, or M = x&middot;F<sub>y</sub> &minus; y&middot;F<sub>x</sub></td></tr>
<tr><td>Friction reversed</td><td>f drawn along the direction of impending slip</td><td>f opposes the relative sliding that would occur</td></tr>
<tr><td>Action and reaction on one diagram</td><td>Both arrows of an interaction pair on the same FBD</td><td>One on each body, opposite senses</td></tr>
</tbody>
</table>`,
      },
    ],
    equations: [
      {
        name: "Equilibrium (2D)",
        formula: "&Sigma;F<sub>x</sub> = 0,&nbsp; &Sigma;F<sub>y</sub> = 0,&nbsp; &Sigma;M<sub>O</sub> = 0",
        note: "Three independent equations for one rigid body. O is any point &mdash; choose it on the line of the reactions you want to eliminate.",
      },
      {
        name: "Equilibrium (3D)",
        formula: "&Sigma;F<sub>x</sub> = &Sigma;F<sub>y</sub> = &Sigma;F<sub>z</sub> = 0,&nbsp; &Sigma;M<sub>x</sub> = &Sigma;M<sub>y</sub> = &Sigma;M<sub>z</sub> = 0",
        note: "Six equations, so a 3D body needs six reaction components to be determinate. A 3D fixed joint supplies all six by itself.",
      },
      {
        name: "Moment of a force",
        formula: "M<sub>O</sub> = F &middot; d<sub>&perp;</sub> = x&middot;F<sub>y</sub> &minus; y&middot;F<sub>x</sub>",
        note: "d<sub>&perp;</sub> is the perpendicular distance from O to the line of action; (x, y) is the force's point of application relative to O.",
      },
      {
        name: "Determinacy count (2D)",
        formula: "degree = r + c &minus; 3n",
        note: "r = reaction components, c = internal force components transmitted between parts, n = number of rigid parts. Zero means determinate; positive means indeterminate; negative means a mechanism.",
      },
      {
        name: "Uniform load resultant",
        formula: "R = wL, at x = L/2",
        note: "w is intensity (N/m) and L the loaded length. Valid for reactions and overall equilibrium, not for internal shear and moment.",
      },
      {
        name: "Triangular load resultant",
        formula: "R = w<sub>0</sub>L/2, at L/3 from the heavy end",
        note: "w<sub>0</sub> is the peak intensity. Equivalently 2L/3 from the zero end &mdash; the direction people most often get backwards.",
      },
      {
        name: "Combined (trapezoidal) resultant",
        formula: "x&#772; = &Sigma;R<sub>i</sub>x<sub>i</sub> / &Sigma;R<sub>i</sub>",
        note: "Split the trapezoid into a rectangle plus a triangle, locate each part's resultant, then take the force-weighted average position.",
      },
      {
        name: "Ideal pulley",
        formula: "T<sub>1</sub> = T<sub>2</sub> = T,&nbsp; R<sub>axle</sub> = 2T cos(&alpha;/2)",
        note: "&alpha; is the angle between the two cable runs <em>leaving</em> the pulley. A 90&deg; direction change leaves the runs at &alpha; = 90&deg;, giving R = 1.41T; a full 180&deg; wrap leaves them parallel (&alpha; = 0), giving R = 2T.",
      },
      {
        name: "Linear spring",
        formula: "F<sub>s</sub> = k&delta;",
        note: "k is the spring rate (N/m) and &delta; the deflection from free length. On the FBD a spring is a known-direction force along its axis whose magnitude follows from equilibrium.",
      },
    ],
    interviewTips: [
      "Draw the FBD before writing a single equation, and narrate the support count out loud: 'pin gives two, roller gives one, that is three unknowns against three equations, so it is determinate.' The setup is scored more heavily than the arithmetic.",
      "Challenge every arrow by naming the body outside the boundary that applies it. If you cannot, it does not belong on the diagram. That one test kills internal forces, double-counted weights and imaginary forces at once.",
      "Scan for two-force members first. Each one converts two unknown components into one unknown magnitude with a known direction, and often collapses a frame to a single moment equation.",
      "For a body under exactly three forces, find where two lines of action cross before doing any algebra. The third must pass through that point, which hands you the pin reaction direction for free.",
      "When you reduce a distributed load, say out loud what the resultant is valid for. Reactions yes, shear and moment diagrams no.",
      "A negative reaction is an answer, not a mistake. State the magnitude and the corrected direction, then check whether the support can actually deliver it: a pin can pull down, a roller or a resting contact cannot.",
    ],
  },

  questions: [
    {
      id: "free-body-diagrams-q01",
      type: "mc",
      difficulty: 1,
      prompt: `<p>The bracket shown is held by a pin at A and a roller at B, and carries a 3 kN vertical load at its free end. Before writing any equations: how many unknown reaction components belong on its free-body diagram?</p>`,
      figure: figQ01,
      choices: [
        "2 &mdash; one force at the pin, one at the roller",
        "3 &mdash; two force components at the pin, one at the roller",
        "4 &mdash; two components at the pin, two at the roller",
        "5 &mdash; three at the pin (including a moment), two at the roller",
      ],
      answer: 1,
      hint: `Count blocked degrees of freedom support by support: how many directions of motion does a pin stop, and how many does a roller stop?`,
      whyWrong: [
        `Treating the pin as a single force quietly deletes A<sub>x</sub>. A pin blocks translation in <em>both</em> x and y, so it contributes two unknown components, not one.`,
        ``,
        `This gives the roller two components — that is a pin's count. A roller only blocks translation perpendicular to its rolling surface, so it contributes exactly one.`,
        `A moment reaction at A would make it a fixed (built-in) support. A pin lets the bracket rotate freely, so it supplies no moment — only the two force components.`,
      ],
      explanation: `<p>Count blocked degrees of freedom. The <strong>pin</strong> stops translation in both x and y but lets the bracket rotate, so it supplies <strong>two force components and no moment</strong>. The <strong>roller</strong> stops translation only perpendicular to its surface, so it supplies <strong>one</strong>. Total <strong>3 unknowns</strong>, matching the three 2D equilibrium equations, so the bracket is determinate.</p>
<p>Treating a pin as a single force quietly deletes A<sub>x</sub> and is the most common miss. Giving a roller two components confuses it with a pin. Adding a moment at the pin turns it into a fixed support. Say the count out loud before writing equations; it is also how you spot indeterminacy in one second.</p>`,
    },
    {
      id: "free-body-diagrams-q02",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A gearbox pushes down on the beam shown with 6 kN at 1.2 m from A, and its casing also applies a 4.5 kN&middot;m clockwise couple to the beam. Before you draw any supports, reduce those two actions to a <strong>single equivalent force</strong>. How far from A does its line of action cross the beam?</p>`,
      figure: figQ02,
      answer: 1.95,
      unit: "m",
      hint: `A couple is a free vector — it adds the same moment about every point, but no force. Match the resultant moment about A.`,
      explanation: `<p>An equivalent system has to match both the resultant force and the resultant moment about <em>any</em> point. The couple contributes no force, so</p>
<p class="eq">R = 6 kN downward</p>
<p>Now match moments about A, clockwise positive. The 6 kN at 1.2 m gives 7.20 kN&middot;m, and the couple adds its 4.50 kN&middot;m at full value, because a couple is a free vector with the same moment about every point:</p>
<p class="eq">&Sigma;M<sub>A</sub> = 6(1.2) + 4.5 = 11.7 kN&middot;m</p>
<p class="eq">R&middot;x = 11.7 &rarr; x = 11.7 / 6 = <strong>1.95 m</strong> from A</p>
<p>The couple shifts the line of action 0.75 m further out. Leaving the resultant at 1.2 m and carrying the couple separately is not wrong, just not what was asked. Subtracting instead, to get 0.45 m, reverses the couple&rsquo;s sense, moves the resultant the wrong way and flips the sign of the far reaction.</p>
<p>Once the load is a single force you can see at a glance whether it falls inside or outside the supports. A couple applied to a beam is how a motor, a gearbox or an eccentric bracket loads its mount.</p>`,
    },
    {
      id: "free-body-diagrams-q03",
      type: "mc",
      difficulty: 2,
      prompt: `<p>The same bracket, with the 3 kN load overhanging past the roller. Taking moments about A gives B<sub>y</sub> = 4.80 kN upward. What is the vertical reaction at the pin A, and which way does it act?</p>`,
      figure: figQ01,
      choices: [
        "1.80 kN upward, sharing the load with the roller",
        "3.00 kN upward, because the pin takes the whole load",
        "1.80 kN downward, holding the end from lifting",
        "7.80 kN downward, the roller reaction plus the load",
      ],
      answer: 2,
      explanation: `<p class="eq">&Sigma;F<sub>y</sub> = 0: A<sub>y</sub> + 4.80 &minus; 3.00 = 0 &rarr; A<sub>y</sub> = <strong>&minus;1.80 kN</strong></p>
<p>With B<sub>y</sub> = 4.80 kN up from the moment equation, vertical equilibrium leaves A<sub>y</sub> negative. The assumed upward arrow was wrong: the pin pulls <strong>down</strong> with 1.80 kN. The overhung load levers the bracket about the roller and tries to lift end A, so the pin has to hold it down.</p>
<p>7.80 kN adds the roller reaction instead of subtracting it. And A could not be a roller or a simple rest, because those can only push. A downward reaction needs a pin, a bolt or a hold-down, and this calculation is what tells you the bracket needs one.</p>`,
    },
    {
      id: "free-body-diagrams-q04",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A candidate drew the diagram on the right as the free-body diagram of the cantilever on the left. What is wrong with it?</p>`,
      figure: figQ04,
      choices: [
        "The tip load should be replaced by a couple at the wall",
        "R<sub>x</sub> does not belong: a wall cannot push horizontally",
        "A vertical reaction is also needed at the free end of the beam",
        "The reaction moment the built-in end applies to the beam is missing",
      ],
      answer: 3,
      explanation: `<p>A fixed end blocks horizontal translation, vertical translation <em>and</em> rotation, so it delivers <strong>three</strong> reactions: R<sub>x</sub>, R<sub>y</sub> and a couple M. The diagram shows only the two forces, so the beam as drawn is free to spin about the wall and &Sigma;M cannot be satisfied.</p>
<p>With the moment restored, R<sub>y</sub> = 2 kN up and M = 2 kN times the span, reacting the tip load&rsquo;s tendency to rotate the beam.</p>
<p>R<sub>x</sub> does equal zero here, but it belongs on the diagram as an unknown until the equations say so. Deleting unknowns by inspection is how horizontal loads get missed later. Adding a reaction at the free end invents a support that does not exist, and a load is never replaced by a couple unless you keep the force as well.</p>`,
    },
    {
      id: "free-body-diagrams-q05",
      type: "mc",
      difficulty: 2,
      prompt: `<p>The crate below is on the point of sliding to the right under the rope tension. Which single error does this free-body diagram contain?</p>`,
      figure: figQ05,
      choices: [
        "The normal force should act at the centre of the crate, not at the base",
        "The friction force is drawn along the direction of impending sliding",
        "The weight should act at the top face of the crate, where the rope pulls",
        "The rope tension should be resolved into components before it is drawn",
      ],
      answer: 1,
      explanation: `<p>Friction always opposes the <em>relative sliding that would occur</em>. The crate is about to move right, so friction on the crate from the floor acts to the <strong>left</strong>. As drawn, T and f both push right and the diagram cannot balance horizontally.</p>
<p>The other three are fine. The normal force resultant does act at the contact surface, and its position along the base shifts with the load, which is what governs tipping. Weight acts at the centre of gravity. Resolving T into components is bookkeeping, not a diagram error.</p>
<p>N is not equal to W, though. The rope has an upward component, so N = W &minus; T sin 25&deg;. Assuming N = W overestimates the available friction and predicts the crate holds when it actually slips.</p>`,
    },
    {
      id: "free-body-diagrams-q06",
      type: "mc",
      difficulty: 2,
      prompt: `<p>In the frame shown, member CD is pinned at C and at D and nothing is applied to it between those pins. Which member is a two-force member, and along what line does its force act?</p>`,
      figure: figQ06,
      choices: [
        "AB, along AB, because it is straight between two pin joints",
        "CD, perpendicular to CD at the pin C",
        "Both AB and CD, since every pin-ended member is two-force",
        "CD, along the straight line joining its two pins",
      ],
      answer: 3,
      explanation: `<p>A member qualifies as two-force when the <em>only</em> loads on it are at two points. CD is pinned at C and D and carries nothing in between, so force equilibrium makes the two end forces equal and opposite, and moment equilibrium makes them collinear along CD.</p>
<p>AB does not qualify. It carries the 6 kN load at B and the strut force at C, so three separate forces act on it. It bends, and its pin at A keeps two unknown components.</p>
<p>CD&rsquo;s pin at C would normally add two unknowns to AB&rsquo;s diagram. Because CD is two-force, it adds one unknown magnitude with a <strong>known direction</strong>, usually enough to solve the frame with a single moment equation about A. The member does not have to be straight: a bent or curved link pinned at both ends still transmits force along the chord joining the pins.</p>`,
    },
    {
      id: "free-body-diagrams-q07",
      type: "mc",
      difficulty: 3,
      prompt: `<p>The rod shown is pinned to a wall at A and passes through a close-fitting guide collar at B that is welded to the frame. The rod slides freely along its own axis inside the collar but cannot move sideways or tilt in it. A load P is applied at the free end. What goes on the rod's free-body diagram at B, and how does the rod classify?</p>`,
      figure: figQ07,
      choices: [
        "A transverse force and a moment at B: 4 unknowns, indeterminate to 1st degree",
        "Two force components at B, as for a pin: 4 unknowns, indeterminate to 1st degree",
        "A single transverse force at B, as for a roller: 3 unknowns, so determinate",
        "Force and moment at B and only an axial force at A: 3 unknowns, determinate",
      ],
      answer: 0,
      explanation: `<p>Work from the motions the collar blocks, not from what it looks like. It stops the rod translating <strong>perpendicular</strong> to its axis and stops it <strong>rotating</strong>, but it does not stop axial sliding. Two blocked degrees of freedom, so two unknowns: one transverse force and one couple, with no axial reaction at all.</p>
<p class="eq">r = 2 (pin at A) + 2 (collar at B) = 4 &nbsp;against&nbsp; 3 equations &rarr; indeterminate to degree 1</p>
<p>Every distractor is a real misread. Treating the collar as a pin invents an axial reaction it cannot supply, and the axial equilibrium equation then quietly balances against a force that does not exist. Treating it as a roller drops the couple, which is the whole reason a guided collar exists: it resists a moment while allowing thermal growth. The last option keeps the couple but demotes the pin, which no pin ever does.</p>
<p>So the rod cannot be solved by statics alone. Handed this, the right first sentence is that four unknowns against three equations needs a compatibility condition, or needs to know whether the collar is really rigid. Real collars have clearance and go slack in the moment sense, which is the assumption worth challenging out loud.</p>`,
    },
    {
      id: "free-body-diagrams-q08",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>The 4 m beam shown carries a triangular distributed load that is zero at A and rises to 9 kN/m at B. Replace it with a single resultant force: what is its magnitude?</p>`,
      figure: figQ08,
      answer: 18,
      unit: "kN",
      explanation: `<p class="eq">R = &frac12; w<sub>0</sub> L = &frac12; (9 kN/m)(4 m) = <strong>18.0 kN</strong></p>
<p>Area under the load diagram, acting at the triangle&rsquo;s centroid, L/3 = 1.33 m from the heavy end at B. 36 kN is the enclosing rectangle, exactly twice the truth.</p>`,
    },
    {
      id: "free-body-diagrams-q09",
      type: "mc",
      difficulty: 2,
      prompt: `<p>For that same triangular load (zero at A, 9 kN/m at B, 4 m span), where does the resultant act, measured from A?</p>`,
      figure: figQ08,
      choices: [
        "1.33 m from A",
        "2.00 m from A",
        "2.67 m from A",
        "3.00 m from A",
      ],
      answer: 2,
      explanation: `<p class="eq">x from B = L/3 = 4/3 = 1.33 m &rarr; x from A = 4 &minus; 1.33 = <strong>2.67 m</strong></p>
<p>A triangle&rsquo;s centroid sits one third of the base from its <strong>tall</strong> end, which here is B. 1.33 m is the right number measured from the wrong end. Most of the load area is near B, so the resultant has to fall past midspan.</p>`,
    },
    {
      id: "free-body-diagrams-q10",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>The 6 m beam shown carries a trapezoidal load that varies linearly from 4 kN/m at A to 10 kN/m at B. How far from A does the resultant of the distributed load act?</p>`,
      figure: figQ10,
      answer: 3.43,
      unit: "m",
      explanation: `<p>Split the trapezoid into a rectangle plus a triangle and take the force-weighted centroid.</p>
<p class="eq">Rectangle: R<sub>1</sub> = 4 &times; 6 = 24 kN at x<sub>1</sub> = 3.00 m</p>
<p class="eq">Triangle: R<sub>2</sub> = &frac12;(10 &minus; 4)(6) = 18 kN at x<sub>2</sub> = 2/3 &times; 6 = 4.00 m</p>
<p class="eq">x&#772; = (24 &times; 3.00 + 18 &times; 4.00) / (24 + 18) = (72 + 72) / 42 = <strong>3.43 m</strong></p>
<p>The total 42 kN is also the trapezoid area, &frac12;(4 + 10)(6) = 42 kN, which comes free.</p>
<p>Averaging the end intensities to 7 kN/m and putting 42 kN at midspan gets the magnitude right and the location wrong by 0.43 m, and that error goes straight into both reactions. The load is heavier toward B, so the resultant must sit past midspan. 3.43 &gt; 3.00. &#10003;</p>`,
    },
    {
      id: "free-body-diagrams-q11",
      type: "mc",
      difficulty: 2,
      prompt: `<p>The 3 m cantilever shown carries 5 kN/m over its whole length. You cut it at section a&ndash;a, 1 m from the free end, and keep the free-end piece. What acts on the cut face of that piece?</p>`,
      figure: figQ11,
      choices: [
        "V = 5 kN, M = 2.50 kN&middot;m, N = 0",
        "V = 5 kN, M = 5.00 kN&middot;m, N = 0",
        "V = 15 kN, M = 22.5 kN&middot;m, N = 0",
        "V = 2.5 kN, M = 2.50 kN&middot;m, N = 5 kN",
      ],
      answer: 0,
      explanation: `<p>Keep the free-end segment. It is 1 m long carrying w = 5 kN/m, so its resultant is 5 kN acting 0.5 m from the cut, and nothing else touches this piece:</p>
<p class="eq">V = wL = 5(1) = <strong>5 kN</strong></p>
<p class="eq">M = wL&sup2;/2 = 5(1)&sup2;/2 = <strong>2.50 kN&middot;m</strong></p>
<p class="eq">N = 0 (no axial load on the beam)</p>
<p>M = 5 kN&middot;m uses the full 1 m as the arm instead of the 0.5 m centroid distance. V = 15 kN and M = 22.5 kN&middot;m are the reactions at the <em>wall</em>, 5 &times; 3 and 5 &times; 3 &times; 1.5, which is what keeping the wrong side and then forgetting the load between wall and cut produces.</p>
<p>Keeping the free end meant the wall reactions were never needed. Cut and keep the simpler side.</p>`,
    },
    {
      id: "free-body-diagrams-q12",
      type: "mc",
      difficulty: 2,
      prompt: `<p>The beam shown is built into a wall at A and rests on a roller at B. Classify it, and state the unknown count against the equation count.</p>`,
      figure: figQ12,
      choices: [
        "Statically determinate &mdash; 3 unknowns against 3 equations",
        "Statically indeterminate to the 1st degree &mdash; 4 unknowns, 3 equations",
        "Statically indeterminate to the 2nd degree &mdash; 5 unknowns, 3 equations",
        "A mechanism &mdash; only 2 unknowns against 3 equations",
      ],
      answer: 1,
      explanation: `<p>The fixed end at A gives 3 reactions, two forces plus a moment, and the roller at B gives 1, so r = <strong>4</strong>. A single 2D rigid body supplies 3 equations, so indeterminacy is 4 &minus; 3 = <strong>1</strong>. The classic propped cantilever.</p>
<p>Statics alone cannot finish it. You need one compatibility condition, usually that deflection at B is zero, which is where the standard R<sub>B</sub> = 3wL/8 for a uniform load comes from.</p>
<p>Noticing before you start solving is the whole point. Writing equilibrium equations for an indeterminate beam and then discovering they are not independent wastes five minutes and looks bad. The extra restraint also buys real things: a stiffer beam and a redundant load path, paid for by stress whenever the roller settles or the beam is heated.</p>`,
    },
    {
      id: "free-body-diagrams-q13",
      type: "mc",
      difficulty: 2,
      prompt: `<p>The 6 m beam shown is pinned at A and rests on top of a post at C, with a 12 kN load 4 m from A. What force does the beam apply to the post, and what does the post apply to the beam?</p>`,
      figure: figQ13,
      choices: [
        "The beam pushes down on the post with 8 kN; the post pushes up on the beam with 8 kN",
        "The beam pushes down on the post with 4 kN; the post pushes up on the beam with 4 kN",
        "The beam pushes down on the post with 12 kN; the post pushes up on the beam with 12 kN",
        "The beam pushes down on the post with 8 kN; the post pushes up on the beam with 4 kN",
      ],
      answer: 0,
      explanation: `<p>Draw the beam alone. The post is outside that boundary, so it appears only as a contact force N pushing up at C.</p>
<p class="eq">&Sigma;M<sub>A</sub> = 0: N(6) &minus; 12(4) = 0 &rarr; N = 48/6 = <strong>8.00 kN</strong></p>
<p>Now draw the post alone. The beam is outside <em>that</em> boundary, so it appears as a force pushing <strong>down</strong> on the post: same 8 kN, opposite direction. Newton&rsquo;s third law, one unknown shared by two diagrams rather than two independent unknowns.</p>
<p>4 kN uses the 2 m distance instead of the 4 m one. 12 kN assumes the post carries the whole load and forgets the pin. An interaction pair can never have different magnitudes on the two bodies, so if your two diagrams disagree, one of them is wrong.</p>`,
    },
    {
      id: "free-body-diagrams-q14",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A cable runs over the ideal (frictionless, massless) pulley shown, entering horizontally and leaving vertically downward to a 400 N hanging weight. What is the magnitude of the resultant force the cable applies to the pulley axle at A?</p>`,
      figure: figQ14,
      answer: 566,
      unit: "N",
      explanation: `<p>An ideal pulley cannot transmit a moment about its axle, so the tension is the <strong>same on both sides</strong>, T = 400 N throughout. The pulley changes the cable&rsquo;s direction, not its magnitude.</p>
<p>The cable then pulls the pulley along both runs, 400 N horizontally toward the anchor and 400 N vertically toward the weight, at 90&deg; to each other:</p>
<p class="eq">R = &radic;(400&sup2; + 400&sup2;) = 400&radic;2 = <strong>566 N</strong> at 45&deg;</p>
<p>Equivalently R = 2T cos(&alpha;/2) with &alpha; = 90&deg;: 2(400)(0.7071) = 566 N.</p>
<p>800 N adds the two tensions as scalars, which is only right for a 180&deg; wrap where the runs are parallel. 400 N assumes the axle feels one side. Bracket loads depend on wrap angle, so a redirect sheave and a snatch block of the same rated tension need very different mountings.</p>`,
    },
    {
      id: "free-body-diagrams-q15",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>The rigid lever shown is pinned at A. A spring of rate k = 80 kN/m connects point B, 0.2 m from A, to the ground, and a 300 N vertical load is applied at C, 0.5 m from A. How much does the spring compress?</p>`,
      figure: figQ15,
      answer: 9.38,
      unit: "mm",
      explanation: `<p>Put the spring on the diagram as a force of unknown magnitude acting along its axis, vertically at B. Take moments about the pin so its two unknown components drop out:</p>
<p class="eq">&Sigma;M<sub>A</sub> = 0: F<sub>s</sub>(0.2) = 300(0.5) = 150 N&middot;m</p>
<p class="eq">F<sub>s</sub> = 150 / 0.2 = 750 N</p>
<p>Then the spring law gives the deflection:</p>
<p class="eq">&delta; = F<sub>s</sub> / k = 750 / 80 000 = 9.38 &times; 10<sup>&minus;3</sup> m = <strong>9.38 mm</strong></p>
<p>The lever amplifies the load by 0.5/0.2 = 2.5, so the spring sees 750 N rather than 300 N. Using 300/80 000 = 3.75 mm skips that step. Equilibrium first, spring law second: the spring rate never enters the moment equation, which is why this stays a statics problem.</p>
<p>Check the small-displacement assumption before quoting the answer. 9.38 mm at a 0.2 m radius is a lever rotation of 0.047 rad, about 2.7&deg;, so arms measured on the undeformed geometry are good to well under 1%. A spring ten times softer would swing the lever 27&deg; and the arms in that moment equation would no longer be the ones you drew.</p>`,
    },
    {
      id: "free-body-diagrams-q16",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A 50 kg gearbox is bolted on top of a steel bracket. On the free-body diagram of the <em>bracket alone</em>, a candidate has drawn a 490 N downward force labelled "gearbox weight" at the mounting face and, at the same face, a 490 N downward contact force from the gearbox. What is wrong?</p>`,
      choices: [
        "Nothing &mdash; the two arrows represent physically different effects on the bracket",
        "The contact force should be 980 N, to include the equal and opposite reaction",
        "The 490 N is counted twice; only the contact force belongs on the bracket",
        "The weight belongs on the bracket diagram but the contact force does not",
      ],
      answer: 2,
      explanation: `<p>The gearbox is <em>outside</em> the bracket&rsquo;s boundary. Its weight is a force the Earth applies to the <strong>gearbox</strong>, so it never appears on the bracket&rsquo;s diagram. What the bracket feels is the contact and bolt force at the mounting face, which happens to equal 490 N precisely because that is how the gearbox&rsquo;s weight gets transmitted. Draw both and the bracket carries 980 N, doubling every reaction downstream.</p>
<p>The last option inverts the logic: the contact force is the one that crosses the boundary, so it is the one that stays.</p>
<p>A body is either inside the cut or outside it, never both. Enclose the gearbox <em>and</em> the bracket together and the 490 N weight appears while the interaction force vanishes as internal, giving the same total. Mixing the two choices is what you may not do.</p>`,
    },
    {
      id: "free-body-diagrams-q17",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>The lever shown is 0.5 m long and inclined at 30&deg; above the horizontal, pivoted at O. A 200 N <strong>vertical</strong> force is applied at its tip. What is the magnitude of the moment about O?</p>`,
      figure: figQ17,
      answer: 86.6,
      unit: "N&middot;m",
      explanation: `<p>The moment arm is the <strong>perpendicular</strong> distance from O to the force&rsquo;s line of action. The force is vertical, so that distance is the <em>horizontal</em> projection of the lever, not its length:</p>
<p class="eq">d<sub>&perp;</sub> = L cos 30&deg; = 0.5(0.866) = 0.433 m</p>
<p class="eq">M<sub>O</sub> = F &middot; d<sub>&perp;</sub> = 200(0.433) = <strong>86.6 N&middot;m</strong></p>
<p>100 N&middot;m uses the full 0.5 m, correct only if the force is perpendicular to the lever. 50 N&middot;m uses L sin 30&deg;, the vertical projection, which is the arm for a <em>horizontal</em> force.</p>
<p>The component form removes the ambiguity. With the tip at (0.433, 0.250) relative to O and F = (0, &minus;200), M = x&middot;F<sub>y</sub> &minus; y&middot;F<sub>x</sub> = 0.433(&minus;200) &minus; 0 = &minus;86.6 N&middot;m, so 86.6 N&middot;m clockwise. As the lever rotates toward vertical the moment has to fall to zero, and cos 30&deg; does exactly that.</p>`,
    },
    {
      id: "free-body-diagrams-q18",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A shaft is carried by a ball-and-socket joint at one end and a short journal (radial) bearing at the other, both frictionless. How many unknown reaction components go on the shaft's free-body diagram?</p>`,
      choices: [
        "5 &mdash; three at the ball joint, two radial at the bearing",
        "6 &mdash; three at the ball joint and three at a thrust bearing",
        "4 &mdash; three at the ball joint, one at the bearing",
        "8 &mdash; three at the ball joint, five at the bearing",
      ],
      answer: 0,
      explanation: `<p>A <strong>ball-and-socket</strong> blocks all three translations and no rotations: 3 force components, no moments. A short <strong>journal bearing</strong> carries radial load only, blocking the two translations perpendicular to the shaft axis while taking no thrust and, if it is short or self-aligning, no moment: 2 components. So r = <strong>5</strong>.</p>
<p>3D equilibrium offers six equations, which makes this look under-constrained by one. It is deliberate. The shaft is free to rotate about its own axis, and &Sigma;M about that axis contains no reactions at all. That equation becomes the useful one, saying the applied torques must balance, which is how you size the drive torque.</p>
<p>The distractors are practical variants. Give the bearing a thrust face and it supplies 3, six in total and fully constrained; a long or press-fitted bearing adds two moment components as well. Knowing which idealisation you picked is what the question is checking.</p>`,
    },
    {
      id: "free-body-diagrams-q19",
      type: "mc",
      difficulty: 2,
      prompt: `<p>The beam shown is pinned at A and carried at B by a roller that runs on a pad inclined 30&deg; to the horizontal. A candidate has drawn the reaction at B as a vertical force. What is wrong with that free-body diagram?</p>`,
      figure: figQ19,
      choices: [
        "Nothing: a roller reaction is vertical whatever the surface under it does",
        "The reaction must be normal to the pad, so it leans 30&deg; off vertical",
        "The roller needs two components once the surface it runs on is inclined",
        "The reaction should lie along the pad, since the roller runs freely on it",
      ],
      answer: 1,
      explanation: `<p>A roller supplies one force <strong>normal to the surface it rolls on</strong>, not one vertical force. Tilt the pad 30&deg; and the reaction tilts with it, so B contributes a horizontal component R<sub>B</sub> sin 30&deg; = 0.5 R<sub>B</sub> alongside its vertical R<sub>B</sub> cos 30&deg;.</p>
<p>It is still <em>one</em> unknown, since the direction is known, so three unknowns against three equations and the beam stays determinate. What changes is &Sigma;F<sub>x</sub>. As drawn, the pin at A would have to take every horizontal force in the problem, and A<sub>x</sub> comes out wrong by 0.5 R<sub>B</sub>. On a beam carrying only vertical loads that error is invisible in the vertical reactions and shows up only in the pin.</p>
<p>The other options over- and under-correct. Two components at the roller turn it into a pin and add an unknown the support cannot deliver. A reaction <em>along</em> the pad is friction, which a free-rolling contact cannot supply. Say the rule as you draw it: normal to the surface, pointing into the body, magnitude unknown.</p>`,
    },
    {
      id: "free-body-diagrams-q20",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A two-span beam has a pin at A, rollers at B and C, and an internal hinge between B and C. Is it solvable by statics alone?</p>`,
      choices: [
        "No &mdash; indeterminate to the 1st degree; the hinge adds no equation",
        "No &mdash; a mechanism, because the hinge removes rotational continuity",
        "No &mdash; indeterminate to the 2nd degree; 5 unknowns against 3 equations",
        "Yes &mdash; determinate; the hinge supplies a fourth equation",
      ],
      answer: 3,
      explanation: `<p>Count both sides. Unknowns: pin (2) + roller (1) + roller (1) = <strong>4</strong>. Equations: the three rigid-body equations, <strong>plus one more</strong>, because a hinge cannot transmit moment and taking moments about the hinge for the portion on one side gives an extra independent equation. Four against four, so <strong>determinate</strong>.</p>
<p>The general rule behind that count is degree = r + c &minus; 3n, with n the number of rigid parts and c the force components transmitted between them. Here n = 2, c = 2 for a hinge that passes force but no moment, r = 4, so degree = 4 + 2 &minus; 6 = 0.</p>
<p>Gerber bridges, cantilever spans with suspended spans hung between them, are built exactly this way. The hinges keep a multi-span deck determinate, so differential settlement and thermal growth induce no stress. Remove the hinge and the same beam becomes indeterminate to the first degree and starts fighting its own supports.</p>`,
    },
    {
      id: "free-body-diagrams-q21",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>The horizontal beam shown is pinned to the wall at A and propped by a strut DE. D is on the wall 0.9 m below A; E is on the beam 1.2 m from A. The strut is pinned at both ends. A 4 kN load acts at B, 2.4 m from A. Find the force in the strut.</p>`,
      figure: figQ21,
      answer: 13.3,
      unit: "kN",
      explanation: `<p>DE is pinned at both ends with nothing applied between, so it is a <strong>two-force member</strong> and its force acts along DE. That line rises 0.9 m over 1.2 m, giving length 1.5 m and direction components (0.8, 0.6).</p>
<p>Take moments about A for the beam. The strut pushes at E with components (0.8F, 0.6F), and the horizontal component passes through the level of A with no arm, so only the vertical component counts:</p>
<p class="eq">&Sigma;M<sub>A</sub> = 0: (0.6F)(1.2) = 4(2.4)</p>
<p class="eq">0.72F = 9.6 &rarr; F = <strong>13.3 kN</strong> (compression)</p>
<p>Checking: the vertical component 0.6(13.33) = 8 kN at 1.2 m gives 9.6 kN&middot;m, matching the load&rsquo;s 4 &times; 2.4. Then &Sigma;F<sub>y</sub> gives A<sub>y</sub> = 4 &minus; 8 = &minus;4 kN, so the pin pulls <em>down</em> 4 kN, and &Sigma;F<sub>x</sub> gives A<sub>x</sub> = 10.7 kN.</p>
<p>Dividing 9.6 by 1.2 gives 8 kN, which is the strut&rsquo;s vertical component and not its force. The strut is inclined, so the axial force is larger by 1/0.6.</p>`,
    },
    {
      id: "free-body-diagrams-q22",
      type: "mc",
      difficulty: 1,
      prompt: `<p>You assume the <strong>pin</strong> reaction at B points upward, solve the equilibrium equations, and get B<sub>y</sub> = &minus;6 kN. What should you conclude?</p>`,
      choices: [
        "There is an algebra error, since a reaction magnitude cannot come out negative",
        "The support actually pulls down with 6 kN, so the assumed sense was wrong",
        "The structure is unstable and the equations have no physically valid solution",
        "You must reverse the arrow on the diagram and re-solve to get the true value",
      ],
      answer: 1,
      explanation: `<p>A negative result means the force acts <strong>opposite to your assumed arrow</strong>, with exactly the magnitude computed. State it as 6 kN downward and carry on. Re-solving with the arrow flipped is not wrong, just wasted time, and it is where fresh sign errors get introduced.</p>
<p>The support is what makes it legitimate. A <strong>pin</strong>, a bolt or a hold-down is bidirectional, so a downward reaction there is a real answer and the model stands.</p>
<p>Run the same question on a roller and the conclusion changes completely. A roller or a plain resting contact can only <em>push</em>, so a negative roller reaction is not a sign to reinterpret. It means the body is lifting off at B, the contact is not active, and the correct model deletes that support and lets the body tip about the other one. Same arithmetic, different verdict, decided by what the support can do. Cables follow the same logic: a negative tension means the cable has gone slack.</p>`,
    },
  ],

  qna: [
    {
      id: "free-body-diagrams-qa01",
      q: `<p>Walk me through how you build a free-body diagram for a loaded bracket, step by step.</p>`,
      a: `<p>1) <strong>Choose the boundary.</strong> Decide exactly what is inside, the bracket only or the bracket plus what it carries, and draw that closed cut mentally before drawing anything else. 2) <strong>Sketch the isolated body</strong> with its geometry and the dimensions that will become moment arms. 3) <strong>Add applied loads</strong>: forces, applied couples, pressure resultants, and the body&rsquo;s own weight at its centre of gravity if it is significant. 4) <strong>Replace every support the cut removed with its reactions</strong>, using the DOF count: roller one, pin two, fixed three, cable one along its axis, rough contact normal plus friction. 5) <strong>Replace every removed body with the contact force it applies</strong>, not with its weight. 6) <strong>Define axes and a positive moment sense</strong>, label each unknown, and pick assumed directions. 7) <strong>Audit</strong>: for every arrow, name the external body that applies it, then count unknowns against available equations.</p>
<p>Only then write &Sigma;F and &Sigma;M. The audit is what separates a diagram that solves cleanly from one that produces a confident wrong answer.</p>`,
    },
    {
      id: "free-body-diagrams-qa02",
      q: `<p>How do you decide what belongs inside the isolated body and what becomes a force on the diagram?</p>`,
      a: `<p>One rule: <strong>whatever the boundary cuts through becomes a force; whatever is inside disappears; whatever is outside does not appear at all.</strong> A motor bolted on top of a bracket is outside, so on the bracket&rsquo;s diagram it shows up only as the contact and bolt forces at the mounting pads, never as its weight. Draw both and you have double-counted. Enclose motor and bracket together instead and the motor&rsquo;s weight appears while the interaction force vanishes as internal. Both choices are valid. Mixing them is not.</p>
<p>How to choose: enclose the largest region that hides the unknowns you do not care about. To get support reactions on a frame, cut around the whole frame, since every internal pin force cancels and three equations give you the reactions. To get the pin force itself, cut through that pin, which exposes it. Internal shear and moment work the same way and only appear if the cut passes through the section. The boundary choice is the modelling decision.</p>`,
    },
    {
      id: "free-body-diagrams-qa03",
      q: `<p>Run through the common supports and how many unknowns each contributes. How do you use that count?</p>`,
      a: `<p>Each blocked degree of freedom equals one unknown. In 2D: <strong>roller / rocker / smooth surface</strong> = 1 force normal to the surface; <strong>pin or hinge</strong> = 2 force components, no moment; <strong>fixed end or weld</strong> = 2 forces + 1 moment; <strong>cable</strong> = 1 tension along its own line, pull only; <strong>rigid two-force link</strong> = 1 force along the line joining its pins, push or pull; <strong>rough contact</strong> = normal + friction, so 2; <strong>guided collar</strong> = 1 transverse force + 1 moment. In 3D: <strong>ball-and-socket</strong> = 3 forces; <strong>short journal bearing</strong> = 2 radial forces; <strong>thrust bearing</strong> = 3; <strong>welded joint</strong> = 6.</p>
<p>The count classifies the structure before you solve it. In 2D, r = 3 is determinate, r &gt; 3 is indeterminate to degree r &minus; 3, r &lt; 3 is a mechanism. It also tells you which tools you need: three unknowns means statics finishes it, four means you need a compatibility condition such as a deflection constraint. Say that in the first thirty seconds.</p>`,
    },
    {
      id: "free-body-diagrams-qa04",
      q: `<p>What is a two-force member, how do you spot one, and why does it save you so much work?</p>`,
      a: `<p>A two-force member is a body loaded at exactly two points, with no other applied force, no applied couple, and negligible self-weight. Force equilibrium makes the two end forces equal and opposite; moment equilibrium makes them collinear. Since the only line through both load points is the chord joining them, <strong>the force acts along that line</strong>.</p>
<p>Spot them by scanning for members with pins at both ends and nothing applied in between: struts, ties, hydraulic cylinders, turnbuckles, connecting links, and every member of an idealised truss. Two cautions. The member does <em>not</em> have to be straight, since a bent or curved link pinned at both ends still transmits force along the chord even though it bends internally. And weight breaks the idealisation, because a heavy link is really a three-force member, which is why we ask whether self-weight is negligible.</p>
<p>The payoff is direct. A pin normally contributes two unknown components; a two-force member reduces that to one unknown magnitude with a known direction. In a frame that often collapses the whole problem to a single moment equation, and it means a straight member carries pure tension or compression, which is what makes truss analysis tractable at all.</p>`,
    },
    {
      id: "free-body-diagrams-qa05",
      q: `<p>What is the three-force member rule and when would you actually reach for it?</p>`,
      a: `<p>If a body is in equilibrium under exactly three forces, their lines of action must be <strong>concurrent</strong>, all passing through one point, or else all parallel, which is the degenerate case with the meeting point at infinity. The proof is one line: take moments about the intersection of any two forces; both contribute zero, so the third must produce zero moment about that point too, which means its line passes through it.</p>
<p>Reach for it when two of the three lines of action are already known and you want the third&rsquo;s <em>direction</em> without algebra. The typical setup is a bracket carrying a single load, held by a cable or link with a known line and a pin. The load&rsquo;s line and the cable&rsquo;s line cross somewhere; draw the line from the pin to that crossing and you have the pin reaction&rsquo;s direction for free. One moment equation gives the magnitude.</p>
<p>It also checks algebra. Plot the three lines after solving a three-force body, and if they do not meet at a point you have an error. And it is the fastest way to answer &ldquo;which way does the pin push?&rdquo; on a whiteboard when nobody wants a full solve.</p>`,
    },
    {
      id: "free-body-diagrams-qa06",
      q: `<p>When can you replace a distributed load with a single resultant, and where does the resultant go?</p>`,
      a: `<p>You can always replace a distributed load with its resultant, the <strong>area under the load curve acting at the centroid of that area</strong>, for computing <em>external</em> effects: support reactions and overall equilibrium of a rigid body. The standard cases: uniform w over L gives wL at L/2; triangular from zero to w<sub>0</sub> gives w<sub>0</sub>L/2 at L/3 from the heavy end, equivalently 2L/3 from the zero end; a trapezoid splits into a rectangle plus a triangle, each with its own resultant, combined by the force-weighted centroid. Uniform pressure on an area gives pA at the area centroid, and hydrostatic pressure on a vertical wall is triangular, so its resultant sits one third of the depth up from the base.</p>
<p>It is <strong>invalid</strong> for anything that depends on the internal distribution: shear and bending-moment diagrams, deflections, stresses, contact pressure. The demonstration is a simply supported beam. A uniform load wL and a point load wL at midspan give identical reactions but peak moments of wL&sup2;/8 against wL&sup2;/4, a factor of two, with completely different diagram shapes. Collapse the load to find reactions, then restore the real distribution before touching anything internal.</p>`,
    },
    {
      id: "free-body-diagrams-qa07",
      q: `<p>How do you draw an internal free-body diagram, and what appears on the cut face?</p>`,
      a: `<p>Move the boundary so it cuts the member at the section of interest, discard one side, and restore on the exposed face whatever is required to keep the retained piece in equilibrium. In 2D that is three quantities: an <strong>axial force N</strong> along the member axis, a <strong>shear force V</strong> perpendicular to it, and a <strong>bending moment M</strong>. In 3D you add a torque and a second shear and moment pair.</p>
<p>Four practical points. <strong>Keep the simpler side</strong>: cut a cantilever, keep the free end, and you never need the wall reactions. N, V and M are defined relative to the <em>member axis</em> rather than global axes, so on a vertical post with an offset load the axial force is vertical and the shear is horizontal. The two faces created by one cut carry equal and opposite N, V and M, so analysing both sides gives the same magnitudes and a free check. And adopt a sign convention and stick to it, because positive shear is a convention rather than a physical fact.</p>
<p>This also answers why the shear is invisible on a whole-beam diagram. Internal forces come in cancelling pairs inside the boundary. They exist; your cut just has not exposed them yet.</p>`,
    },
    {
      id: "free-body-diagrams-qa08",
      q: `<p>How do you tell whether a structure is statically determinate, and when does the count mislead you?</p>`,
      a: `<p>Count unknown reaction components r against available equations. For a single 2D rigid body there are three equations, so r = 3 is determinate, r &gt; 3 is indeterminate to degree r &minus; 3, and r &lt; 3 is a mechanism. For assemblies use degree = r + c &minus; 3n, with n rigid parts and c the force components transmitted between them. An internal hinge passes two force components but no moment, which is exactly why a hinge adds one equation and keeps compound beams determinate.</p>
<p>The count misleads whenever the reactions are badly <em>arranged</em>. Three parallel vertical links give r = 3 and still cannot resist any horizontal load, so the structure is improperly constrained and will move whatever the count says. The same failure occurs when all three reaction lines are concurrent, since they can produce no moment about the common point and the body spins. So the check is two-part: the right number of reactions, and reactions that between them restrain all three motions.</p>
<p>Why it matters on hardware: indeterminate structures are stiffer and carry redundant load paths, but they build up stress from thermal growth, support settlement and manufacturing misfit. Determinate ones simply move. Long bridges get expansion bearings for that reason, and a precision instrument gets a three-point mount, because a four-point mount is indeterminate and rocks or distorts.</p>`,
    },
    {
      id: "free-body-diagrams-qa09",
      q: `<p>How do you handle a system of connected bodies &mdash; how many diagrams, and how do the interaction forces work?</p>`,
      a: `<p>Draw one FBD per body you cut apart, plus optionally one for the whole system. The interaction at every connection appears on <strong>both</strong> adjoining diagrams, equal in magnitude and opposite in direction. It is one unknown shared by two diagrams, not two independent unknowns, and if your two diagrams show different magnitudes then one of them is wrong.</p>
<p>The efficient order of attack starts with the <strong>whole system</strong>, because every internal connection force cancels and three equations give you the external support reactions. Then cut the system apart and analyse individual members using the reactions you already have. A pin between two bodies contributes two unknown components unless one of the members is a two-force member, in which case the direction is known and it drops to one.</p>
<p>Two cases recur. An <strong>ideal pulley</strong> transmits the same tension to both sides, changing the direction of the cable force but not its magnitude, and its axle carries the vector sum of the two runs, so a 90&deg; redirect loads the axle at 1.41T and a 180&deg; wrap at 2T. A body <strong>resting</strong> on another transmits a compression-only normal force, so a negative value means the contact has separated and the model needs redrawing rather than a sign flip.</p>`,
    },
    {
      id: "free-body-diagrams-qa10",
      q: `<p>I hand you a candidate's free-body diagram. What do you check, in order?</p>`,
      a: `<p>1) <strong>Is the boundary stated?</strong> If I cannot tell what body was isolated, nothing else can be checked. 2) <strong>Support count</strong>: every fixed end must show a moment, every pin two components, every roller a force normal to <em>its</em> surface. A fixed support drawn with two forces and no couple is the most common single error. 3) <strong>Orphan arrows</strong>: for each force, name the external body applying it. This catches internal shear drawn on a whole-body diagram, and invented forces. 4) <strong>Double-counted weight</strong>: a mounted component shown as both a weight and a contact force. 5) <strong>Moment arms</strong>: perpendicular to the force, or has someone used the along-member distance? 6) <strong>Friction direction</strong>: it opposes the relative sliding that would occur, never follows it. 7) <strong>Action-reaction placement</strong>: both arrows of a pair must never sit on the same diagram. 8) <strong>Determinacy</strong>: unknowns against equations, before any solving.</p>
<p>Then two closing checks on the result. Do the reactions sum to the applied load, and does the support nearer the load carry more? And is any negative reaction physically deliverable, given that a pin can pull down and a roller cannot.</p>`,
    },
  ],
};

export default content;
