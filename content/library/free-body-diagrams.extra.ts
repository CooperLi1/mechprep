import type { Question } from "../types";

// ---------------------------------------------------------------------------
// Free-Body Diagrams — additional question bank
// ---------------------------------------------------------------------------
// Same SVG building blocks as the base file; every figure carries its own id
// prefix ("fbd16".."fbd26") so marker ids stay globally unique across the app.

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

function dimH(x1: number, x2: number, y: number, label: string): string {
  return `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="#64748b" stroke-width="1"/><line x1="${x1}" y1="${y - 5}" x2="${x1}" y2="${y + 5}" stroke="#64748b" stroke-width="1"/><line x1="${x2}" y1="${y - 5}" x2="${x2}" y2="${y + 5}" stroke="#64748b" stroke-width="1"/><text x="${(x1 + x2) / 2}" y="${y - 8}" text-anchor="middle" fill="#64748b" font-size="12">${label}</text>`;
}

function dimV(x: number, y1: number, y2: number, label: string): string {
  const mid = (y1 + y2) / 2;
  return `<line x1="${x}" y1="${y1}" x2="${x}" y2="${mid - 11}" stroke="#64748b" stroke-width="1"/><line x1="${x}" y1="${mid + 9}" x2="${x}" y2="${y2}" stroke="#64748b" stroke-width="1"/><line x1="${x - 5}" y1="${y1}" x2="${x + 5}" y2="${y1}" stroke="#64748b" stroke-width="1"/><line x1="${x - 5}" y1="${y2}" x2="${x + 5}" y2="${y2}" stroke="#64748b" stroke-width="1"/><text x="${x}" y="${mid + 4}" text-anchor="middle" fill="#64748b" font-size="12">${label}</text>`;
}

const figQ24 = `<svg viewBox="0 0 460 226" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbd26")}
  <line x1="60" y1="58" x2="60" y2="166" stroke="#334155" stroke-width="2.5"/>
  <line x1="49" y1="70" x2="60" y2="59" stroke="#64748b" stroke-width="1"/>
  <line x1="49" y1="83" x2="60" y2="72" stroke="#64748b" stroke-width="1"/>
  <line x1="49" y1="96" x2="60" y2="85" stroke="#64748b" stroke-width="1"/>
  <line x1="49" y1="109" x2="60" y2="98" stroke="#64748b" stroke-width="1"/>
  <line x1="49" y1="122" x2="60" y2="111" stroke="#64748b" stroke-width="1"/>
  <line x1="49" y1="135" x2="60" y2="124" stroke="#64748b" stroke-width="1"/>
  <line x1="49" y1="148" x2="60" y2="137" stroke="#64748b" stroke-width="1"/>
  <line x1="49" y1="161" x2="60" y2="150" stroke="#64748b" stroke-width="1"/>
  <rect x="60" y="112" width="350" height="13" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="242" y="68" width="168" height="40" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <line x1="246" y1="70" x2="246" y2="106" stroke="#dc2626" stroke-width="1.8" marker-end="url(#fbd26-l)"/>
  <line x1="287" y1="70" x2="287" y2="106" stroke="#dc2626" stroke-width="1.8" marker-end="url(#fbd26-l)"/>
  <line x1="328" y1="70" x2="328" y2="106" stroke="#dc2626" stroke-width="1.8" marker-end="url(#fbd26-l)"/>
  <line x1="369" y1="70" x2="369" y2="106" stroke="#dc2626" stroke-width="1.8" marker-end="url(#fbd26-l)"/>
  <line x1="408" y1="70" x2="408" y2="106" stroke="#dc2626" stroke-width="1.8" marker-end="url(#fbd26-l)"/>
  <text x="326" y="58" text-anchor="middle" fill="#dc2626" font-weight="600">w = 6 kN/m</text>
  <text x="80" y="104" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <text x="150" y="98" text-anchor="middle" fill="#64748b" font-size="11">no load on this stretch</text>
  ${dimH(242, 410, 158, "2.4 m")}
  ${dimH(60, 410, 190, "5.0 m")}
  <text x="230" y="216" text-anchor="middle" fill="#64748b" font-size="11">built in at A; the uniform load covers the outer part of the span only</text>
</svg>`;

const figQ26 = `<svg viewBox="0 0 460 226" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbd16")}
  <text x="230" y="26" text-anchor="middle" font-weight="600" fill="#334155">The FBD as drawn</text>
  <rect x="70" y="110" width="320" height="13" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="180" y1="52" x2="224" y2="104" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbd16-l)"/>
  <text x="168" y="48" text-anchor="end" fill="#dc2626" font-weight="600">P = 10 kN</text>
  <line x1="76" y1="192" x2="76" y2="132" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#fbd16-r)"/>
  <text x="76" y="210" text-anchor="middle" fill="#1d4ed8" font-weight="600">A<tspan baseline-shift="sub" font-size="10">y</tspan></text>
  <line x1="384" y1="192" x2="384" y2="132" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#fbd16-r)"/>
  <text x="384" y="210" text-anchor="middle" fill="#1d4ed8" font-weight="600">B<tspan baseline-shift="sub" font-size="10">y</tspan></text>
  <text x="76" y="100" text-anchor="middle" fill="#334155" font-size="12">A (pin)</text>
  <text x="384" y="100" text-anchor="middle" fill="#334155" font-size="12">B (roller)</text>
</svg>`;

const figQ30 = `<svg viewBox="0 0 460 268" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbd17")}
  <rect x="133" y="70" width="14" height="150" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="133" y="63" width="127" height="14" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="100" y1="220" x2="180" y2="220" stroke="#334155" stroke-width="2.5"/>
  ${hatchH(102, 178, 220)}
  <line x1="260" y1="20" x2="260" y2="57" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbd17-l)"/>
  <text x="260" y="14" text-anchor="middle" fill="#dc2626" font-weight="600">600 N</text>
  <line x1="112" y1="145" x2="168" y2="145" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="106" y="150" text-anchor="end" fill="#1d4ed8" font-size="12">a</text>
  <text x="176" y="150" text-anchor="start" fill="#1d4ed8" font-size="12">a</text>
  <line x1="200" y1="48" x2="200" y2="92" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="200" y="42" text-anchor="middle" fill="#1d4ed8" font-size="12">b</text>
  <text x="200" y="106" text-anchor="middle" fill="#1d4ed8" font-size="12">b</text>
  ${dimV(70, 70, 220, "0.5 m")}
  ${dimH(140, 260, 258, "0.4 m")}
  <text x="300" y="150" text-anchor="start" fill="#64748b" font-size="11">base is welded</text>
  <text x="300" y="166" text-anchor="start" fill="#64748b" font-size="11">to the plate</text>
</svg>`;

const figQ32 = `<svg viewBox="0 0 460 284" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbd18")}
  <line x1="60" y1="240" x2="265" y2="240" stroke="#334155" stroke-width="2.5"/>
  ${hatchH(62, 263, 240)}
  <line x1="265" y1="240" x2="265" y2="228" stroke="#334155" stroke-width="2.5"/>
  <line x1="265" y1="228" x2="420" y2="228" stroke="#334155" stroke-width="2.5"/>
  ${hatchH(276, 418, 228)}
  <circle cx="220" cy="150" r="90" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
  <circle cx="220" cy="150" r="8" fill="#334155"/>
  <line x1="120" y1="150" x2="206" y2="150" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbd18-l)"/>
  <text x="112" y="146" text-anchor="end" fill="#dc2626" font-weight="600">F</text>
  <line x1="220" y1="160" x2="220" y2="234" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#fbd18-r)"/>
  <text x="234" y="206" text-anchor="start" fill="#1d4ed8" font-weight="600">W</text>
  <line x1="220" y1="150" x2="220" y2="62" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <text x="232" y="96" text-anchor="start" fill="#64748b" font-size="12">r = 300 mm</text>
  <circle cx="265" cy="228" r="4" fill="#dc2626"/>
  <line x1="288" y1="252" x2="270" y2="234" stroke="#64748b" stroke-width="1"/>
  <text x="292" y="258" text-anchor="start" fill="#64748b" font-size="12">step 40 mm</text>
  <text x="140" y="274" text-anchor="middle" fill="#64748b" font-size="11">roller mass 60 kg</text>
</svg>`;

const figQ35 = `<svg viewBox="0 0 460 248" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbd19")}
  <rect x="60" y="120" width="340" height="13" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <circle cx="287" cy="126" r="7" fill="#fff" stroke="#334155" stroke-width="2"/>
  ${pinSup(60, 133)}
  ${rollerSup(230, 133)}
  ${rollerSup(400, 133)}
  <line x1="343" y1="54" x2="343" y2="114" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbd19-l)"/>
  <text x="343" y="46" text-anchor="middle" fill="#dc2626" font-weight="600">20 kN</text>
  <text x="60" y="110" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <text x="230" y="110" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  <text x="400" y="110" text-anchor="middle" font-weight="600" fill="#334155">C</text>
  <text x="287" y="108" text-anchor="middle" fill="#64748b" font-size="11">hinge H</text>
  ${dimH(60, 230, 208, "6 m")}
  ${dimH(230, 287, 208, "2 m")}
  ${dimH(287, 400, 208, "4 m")}
  ${dimH(287, 343, 236, "2 m")}
</svg>`;

const figQ39 = `<svg viewBox="0 0 460 276" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbd20")}
  <rect x="113" y="60" width="14" height="160" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="113" y="53" width="103" height="14" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="80" y1="220" x2="160" y2="220" stroke="#334155" stroke-width="2.5"/>
  ${hatchH(82, 158, 220)}
  <line x1="216" y1="14" x2="216" y2="47" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbd20-l)"/>
  <text x="232" y="30" text-anchor="start" fill="#dc2626" font-weight="600">3 kN</text>
  <line x1="60" y1="66" x2="106" y2="66" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbd20-l)"/>
  <text x="56" y="70" text-anchor="end" fill="#dc2626" font-weight="600">0.5 kN</text>
  <text x="120" y="242" text-anchor="middle" font-weight="600" fill="#334155">base A</text>
  <line x1="223" y1="60" x2="294" y2="60" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="134" y1="220" x2="294" y2="220" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  ${dimV(300, 60, 220, "2.0 m")}
  ${dimH(120, 216, 264, "1.2 m")}
</svg>`;

const figQ40 = `<svg viewBox="0 0 460 258" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbd21")}
  <line x1="70" y1="50" x2="390" y2="50" stroke="#334155" stroke-width="2.5"/>
  <line x1="76" y1="40" x2="86" y2="50" stroke="#64748b" stroke-width="1"/>
  <line x1="102" y1="40" x2="112" y2="50" stroke="#64748b" stroke-width="1"/>
  <line x1="128" y1="40" x2="138" y2="50" stroke="#64748b" stroke-width="1"/>
  <line x1="154" y1="40" x2="164" y2="50" stroke="#64748b" stroke-width="1"/>
  <line x1="180" y1="40" x2="190" y2="50" stroke="#64748b" stroke-width="1"/>
  <line x1="206" y1="40" x2="216" y2="50" stroke="#64748b" stroke-width="1"/>
  <line x1="232" y1="40" x2="242" y2="50" stroke="#64748b" stroke-width="1"/>
  <line x1="258" y1="40" x2="268" y2="50" stroke="#64748b" stroke-width="1"/>
  <line x1="284" y1="40" x2="294" y2="50" stroke="#64748b" stroke-width="1"/>
  <line x1="310" y1="40" x2="320" y2="50" stroke="#64748b" stroke-width="1"/>
  <line x1="336" y1="40" x2="346" y2="50" stroke="#64748b" stroke-width="1"/>
  <line x1="362" y1="40" x2="372" y2="50" stroke="#64748b" stroke-width="1"/>
  <line x1="120" y1="50" x2="120" y2="160" stroke="#334155" stroke-width="3"/>
  <line x1="230" y1="50" x2="230" y2="160" stroke="#334155" stroke-width="3"/>
  <line x1="340" y1="50" x2="340" y2="160" stroke="#334155" stroke-width="3"/>
  <circle cx="120" cy="56" r="4.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="230" cy="56" r="4.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="340" cy="56" r="4.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="120" cy="160" r="4.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="230" cy="160" r="4.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="340" cy="160" r="4.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <rect x="90" y="160" width="280" height="24" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="416" y1="172" x2="378" y2="172" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbd21-l)"/>
  <text x="424" y="176" text-anchor="start" fill="#dc2626" font-weight="600">H</text>
  <line x1="230" y1="196" x2="230" y2="234" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbd21-l)"/>
  <text x="230" y="250" text-anchor="middle" fill="#dc2626" font-weight="600">W</text>
  <text x="120" y="118" text-anchor="middle" fill="#64748b" font-size="11">link 1</text>
  <text x="230" y="118" text-anchor="middle" fill="#64748b" font-size="11">link 2</text>
  <text x="340" y="118" text-anchor="middle" fill="#64748b" font-size="11">link 3</text>
</svg>`;

const figQ41 = `<svg viewBox="0 0 460 278" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbd22")}
  <line x1="90" y1="210" x2="370" y2="210" stroke="#334155" stroke-width="2.5"/>
  ${hatchH(92, 368, 210)}
  <line x1="125" y1="210" x2="230" y2="70" stroke="#334155" stroke-width="5"/>
  <line x1="335" y1="210" x2="230" y2="70" stroke="#334155" stroke-width="5"/>
  <line x1="178" y1="140" x2="282" y2="140" stroke="#334155" stroke-width="2.5"/>
  <circle cx="230" cy="70" r="5.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="178" cy="140" r="4.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="282" cy="140" r="4.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <line x1="230" y1="20" x2="230" y2="62" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbd22-l)"/>
  <text x="230" y="14" text-anchor="middle" fill="#dc2626" font-weight="600">800 N</text>
  <text x="230" y="132" text-anchor="middle" fill="#64748b" font-size="12">tie rod</text>
  <text x="112" y="204" text-anchor="end" font-weight="600" fill="#334155">A</text>
  <text x="348" y="204" text-anchor="start" font-weight="600" fill="#334155">C</text>
  <text x="248" y="62" text-anchor="start" font-weight="600" fill="#334155">B</text>
  <text x="96" y="232" text-anchor="start" fill="#64748b" font-size="11">smooth floor</text>
  <line x1="240" y1="70" x2="394" y2="70" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="345" y1="210" x2="394" y2="210" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  ${dimV(400, 70, 210, "2.0 m")}
  ${dimH(125, 335, 264, "3.0 m")}
</svg>`;

const figQ42 = `<svg viewBox="0 0 460 268" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbd23")}
  <text x="230" y="28" text-anchor="middle" font-weight="600" fill="#334155">Cylinder in a 90&#176; V-groove</text>
  <line x1="130" y1="130" x2="230" y2="230" stroke="#334155" stroke-width="2.5"/>
  <line x1="230" y1="230" x2="330" y2="130" stroke="#334155" stroke-width="2.5"/>
  <line x1="145" y1="145" x2="138" y2="152" stroke="#64748b" stroke-width="1"/>
  <line x1="165" y1="165" x2="158" y2="172" stroke="#64748b" stroke-width="1"/>
  <line x1="185" y1="185" x2="178" y2="192" stroke="#64748b" stroke-width="1"/>
  <line x1="205" y1="205" x2="198" y2="212" stroke="#64748b" stroke-width="1"/>
  <line x1="255" y1="205" x2="262" y2="212" stroke="#64748b" stroke-width="1"/>
  <line x1="275" y1="185" x2="282" y2="192" stroke="#64748b" stroke-width="1"/>
  <line x1="295" y1="165" x2="302" y2="172" stroke="#64748b" stroke-width="1"/>
  <line x1="315" y1="145" x2="322" y2="152" stroke="#64748b" stroke-width="1"/>
  <circle cx="230" cy="145" r="60" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
  <circle cx="230" cy="145" r="3.5" fill="#334155"/>
  <line x1="187" y1="188" x2="218" y2="157" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#fbd23-r)"/>
  <line x1="273" y1="188" x2="242" y2="157" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#fbd23-r)"/>
  <text x="168" y="184" text-anchor="end" fill="#1d4ed8" font-weight="600">N<tspan baseline-shift="sub" font-size="10">1</tspan></text>
  <text x="292" y="184" text-anchor="start" fill="#1d4ed8" font-weight="600">N<tspan baseline-shift="sub" font-size="10">2</tspan></text>
  <line x1="230" y1="145" x2="230" y2="200" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbd23-l)"/>
  <text x="244" y="192" text-anchor="start" fill="#dc2626" font-weight="600">W</text>
  <line x1="170" y1="230" x2="290" y2="230" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <text x="196" y="248" text-anchor="middle" fill="#64748b" font-size="12">45&#176;</text>
  <text x="264" y="248" text-anchor="middle" fill="#64748b" font-size="12">45&#176;</text>
</svg>`;

const figQ45 = `<svg viewBox="0 0 460 242" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbd24")}
  <circle cx="230" cy="40" r="4.5" fill="#1d4ed8"/>
  <text x="242" y="36" text-anchor="start" fill="#1d4ed8" font-weight="600">O</text>
  <line x1="140" y1="118" x2="230" y2="40" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="230" y1="118" x2="230" y2="40" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="320" y1="118" x2="230" y2="40" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <rect x="110" y="104" width="240" height="14" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="140" y1="118" x2="88" y2="163" stroke="#334155" stroke-width="4.5"/>
  <line x1="230" y1="118" x2="230" y2="175" stroke="#334155" stroke-width="4.5"/>
  <line x1="320" y1="118" x2="372" y2="163" stroke="#334155" stroke-width="4.5"/>
  <circle cx="140" cy="118" r="4.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="230" cy="118" r="4.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="320" cy="118" r="4.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  ${pinSup(88, 163)}
  ${pinSup(230, 175)}
  ${pinSup(372, 163)}
  <line x1="404" y1="111" x2="358" y2="111" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbd24-l)"/>
  <text x="412" y="115" text-anchor="start" fill="#dc2626" font-weight="600">P</text>
  <text x="106" y="98" text-anchor="middle" fill="#64748b" font-size="11">link 1</text>
  <text x="212" y="98" text-anchor="middle" fill="#64748b" font-size="11">link 2</text>
  <text x="352" y="98" text-anchor="middle" fill="#64748b" font-size="11">link 3</text>
  <text x="230" y="232" text-anchor="middle" fill="#64748b" font-size="11">three pin-ended links; the dashed lines are their axes extended</text>
</svg>`;

const figQ38 = `<svg viewBox="0 0 460 272" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  ${defs("fbd25")}
  <text x="230" y="28" text-anchor="middle" font-weight="600" fill="#334155">Candidate FBD of member BC</text>
  <line x1="140" y1="70" x2="320" y2="210" stroke="#334155" stroke-width="5"/>
  <circle cx="140" cy="70" r="5.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="320" cy="210" r="5.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  ${pinSup(320, 216)}
  <line x1="230" y1="86" x2="230" y2="134" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fbd25-l)"/>
  <text x="230" y="78" text-anchor="middle" fill="#dc2626" font-weight="600">P = 5 kN</text>
  <line x1="98" y1="38" x2="134" y2="66" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#fbd25-r)"/>
  <text x="90" y="36" text-anchor="end" fill="#1d4ed8" font-weight="600">F<tspan baseline-shift="sub" font-size="10">B</tspan></text>
  <text x="126" y="62" text-anchor="end" font-weight="600" fill="#334155">B</text>
  <text x="340" y="206" text-anchor="start" font-weight="600" fill="#334155">C</text>
  <text x="230" y="256" text-anchor="middle" fill="#64748b" font-size="11">F drawn along BC; the 5 kN load acts at the midpoint of BC</text>
</svg>`;

const extra: Question[] = [
  {
    id: "free-body-diagrams-q23",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A motor is bolted on top of a steel bracket, and the bracket is bolted to a wall. You are asked for the free-body diagram of <strong>the bracket alone</strong>. Which of these belongs on it?</p>`,
    choices: [
      "The motor's weight, applied at the motor's centre of gravity",
      "The bolt and contact forces the motor applies at the mounting pads",
      "The internal bending stress carried by the bracket's vertical leg",
      "The reaction of the bracket on the wall, at the wall bolt line",
    ],
    answer: 1,
    explanation: `<p>The boundary encloses the bracket only, so the motor is outside it. Everything the motor does to the bracket arrives through the mounting interface, as <strong>contact and bolt forces at the pads</strong>.</p>
<p>The motor&rsquo;s weight is a force the Earth applies to the <em>motor</em>. It belongs on the motor&rsquo;s own diagram, or on a combined diagram of motor plus bracket. Internal stress in the bracket&rsquo;s leg lives inside the boundary and cancels in equal-and-opposite pairs, so it cannot appear until you cut the leg. The last option names a force of the right magnitude in the right place but on the wrong body: the bracket-on-wall reaction acts on the <em>wall</em>, and its partner, wall-on-bracket, is what belongs here.</p>
<p>For every arrow you draw, name the external body that applies it. If you cannot, delete it.</p>`,
  },
  {
    id: "free-body-diagrams-q24",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>The 5.0 m cantilever shown is built in at A and carries 6 kN/m, but only over its <strong>outer 2.4 m</strong>. Replace that distributed load with a single resultant. How far from A does the resultant act?</p>`,
    figure: figQ24,
    answer: 3.8,
    unit: "m",
    explanation: `<p class="eq">R = wL<sub>loaded</sub> = 6 &times; 2.4 = 14.4 kN</p>
<p class="eq">x&#772; = 2.6 + 2.4/2 = <strong>3.80 m</strong> from A</p>
<p>The resultant sits at the centroid of the <em>loaded region</em>, not the centre of the beam. The strip runs from 5.0 &minus; 2.4 = 2.6 m to 5.0 m, so its centroid is halfway along it. 1.20 m measures from the free tip instead of from A.</p>`,
  },
  {
    id: "free-body-diagrams-q25",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A 3D bracket is welded all round to a machine frame and loaded at its free end. On the bracket's free-body diagram, what does the weld represent, and how many equations do you have?</p>`,
    choices: [
      "3 force components only; six equations in 3D",
      "2 forces plus 1 moment; three equations, since the loading is planar",
      "3 forces plus 3 moments; three equations in 3D",
      "3 force components plus 3 moment components; six equations in 3D",
    ],
    answer: 3,
    explanation: `<p>A fully welded joint blocks all six degrees of freedom, three translations and three rotations, so it supplies <strong>six reaction components</strong>: three forces and three moments, two bending and one torsional.</p>
<p>3D equilibrium provides exactly six equations, &Sigma;F<sub>x</sub> = &Sigma;F<sub>y</sub> = &Sigma;F<sub>z</sub> = 0 and &Sigma;M<sub>x</sub> = &Sigma;M<sub>y</sub> = &Sigma;M<sub>z</sub> = 0. Six against six, so a 3D cantilever is statically determinate and a welded bracket can be sized from statics alone.</p>
<p>Answer 2 collapses to 2D without checking whether the load really lies in one plane. An off-axis load puts torsion into the weld, and that torsional component is what cracks the toe of a fillet weld in service.</p>`,
  },
  {
    id: "free-body-diagrams-q26",
    type: "mc",
    difficulty: 1,
    prompt: `<p>The diagram below is offered as the free-body diagram of a beam that is pinned at A and on a roller at B, under an inclined 10 kN load. What is missing?</p>`,
    figure: figQ26,
    choices: [
      "A reaction moment at the pin A, to stop the beam rotating",
      "The horizontal component of the pin reaction at A",
      "A horizontal reaction at the roller B, to react the load",
      "Nothing &mdash; the diagram is complete as drawn",
    ],
    answer: 1,
    explanation: `<p>A<sub>x</sub> has been left off. The applied load is inclined, so it carries a horizontal component of about 6.5 kN against a vertical component of 7.6 kN. A roller can only push perpendicular to its surface, so nothing at B can balance the horizontal part. Only the <strong>pin at A</strong> can, and it supplies two components.</p>
<p>As drawn, &Sigma;F<sub>x</sub> = 0 is violated and the beam accelerates sideways. Restore A<sub>x</sub> and it takes the entire horizontal component of the load, which is often the number that sizes the pin.</p>
<p>A moment reaction at A would turn the pin into a fixed support and make the beam indeterminate. A horizontal reaction at B would turn the roller into a pin. Draw <em>both</em> pin components as unknowns every time and let &Sigma;F<sub>x</sub> tell you whether one is zero.</p>`,
  },
  {
    id: "free-body-diagrams-q27",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A rectangular window pane is 2.5 m wide and 1.8 m tall and sees a uniform wind pressure of 800 Pa. Replace the pressure with a single resultant force on the pane.</p>`,
    choices: [
      "1.80 kN acting at the centre of the pane",
      "1.44 kN acting at the centre of the pane",
      "3.60 kN acting at the centre of the pane",
      "3.60 kN acting one third of the height up from the sill",
    ],
    answer: 2,
    explanation: `<p class="eq">R = p A = 800 Pa &times; (2.5 &times; 1.8) m&sup2; = 800 &times; 4.5 = 3600 N = <strong>3.60 kN</strong></p>
<p>Uniform pressure over a flat area gives pressure times area at the <strong>area centroid</strong>. 1.80 kN halves it as if the distribution were triangular, and 1.44 kN multiplies by the height only, which the units rule out on their own. The last option has the magnitude right but puts it at the one-third point, the centroid of a hydrostatic distribution.</p>`,
  },
  {
    id: "free-body-diagrams-q28",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A cable passes over a frictionless, massless pulley. The load hanging on one side pulls with 250 N. What is the tension on the other side, and what has the pulley done?</p>`,
    choices: [
      "125 N; the pulley halves the force it transmits to the other side",
      "500 N; the pulley doubles the tension in the cable at the axle",
      "250 N; the pulley also adds a moment equal to T times its radius",
      "250 N; the pulley changes the direction of the force, not its size",
    ],
    answer: 3,
    explanation: `<p>Take moments about the pulley&rsquo;s axle. The bearing is frictionless so it transmits no moment, and the two cable tensions act at the same radius on opposite sides. &Sigma;M<sub>axle</sub> = 0 then requires T<sub>1</sub>r = T<sub>2</sub>r, so <strong>T<sub>1</sub> = T<sub>2</sub> = 250 N</strong>. A single ideal pulley redirects force without amplifying it.</p>
<p>Multiplication needs <em>multiple</em> rope falls supporting the load, as in a block and tackle. That is the 125 N option, correct for a movable pulley with two supporting falls and wrong for a fixed redirect.</p>
<p>What does change is the axle load, which carries the vector sum of the two runs, 2T cos(&alpha;/2): 354 N for a 90&deg; redirect, 500 N for a 180&deg; wrap. A real pulley with bearing friction does develop a small moment, which is why tensions differ slightly on a stiff or dirty sheave.</p>`,
  },
  {
    id: "free-body-diagrams-q29",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A 20 kg motor sits on a beam, bolted through its feet. On the free-body diagram of the <strong>beam</strong>, how does the motor appear? (Take g = 9.81 m/s&sup2;.)</p>`,
    choices: [
      "As a single 196 N downward force applied at the mounting feet",
      "As a 196 N downward force plus the motor's 196 N weight",
      "As a 196 N upward reaction at the mounting feet",
      "It does not appear: the motor is a separate body",
    ],
    answer: 0,
    explanation: `<p>The motor is outside the beam&rsquo;s boundary, so it appears only through what crosses that boundary: the contact and bolt force at the feet, W = mg = 20 &times; 9.81 = <strong>196 N</strong> pushing <strong>down</strong>.</p>
<p>Option 2 double-counts. Option 3 has the right magnitude on the wrong body, since 196 N upward is what the beam applies to the motor. If the motor runs and vibrates that force oscillates about 196 N, and the beam is sized for the peak.</p>`,
  },
  {
    id: "free-body-diagrams-q30",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>The L-bracket shown has a 0.5 m vertical post welded to a base plate and a 0.4 m horizontal arm, with a 600 N downward load at the arm tip. You cut the post at section a&ndash;a, halfway up. What bending moment acts on the cut face of the upper piece?</p>`,
    figure: figQ30,
    answer: 240,
    unit: "N&middot;m",
    explanation: `<p>Keep the piece <em>above</em> the cut. It carries only the 600 N tip load, so the weld reactions never enter.</p>
<p>The moment arm is the perpendicular distance from the cut to the load&rsquo;s line of action. The load is vertical, so that distance is the <strong>horizontal</strong> offset, 0.4 m, however far up the cut is:</p>
<p class="eq">M = F &middot; d<sub>&perp;</sub> = 600 N &times; 0.400 m = <strong>240 N&middot;m</strong></p>
<p>The same face also carries an axial force N = 600 N in compression along the post axis, and a shear V = 0, because the load has no component perpendicular to the post.</p>
<p>Using the 0.25 m cut height as the arm gives 150 N&middot;m. Since the perpendicular distance is fixed, the bending moment stays <em>constant</em> at 240 N&middot;m all the way down the post, so moving the cut changes nothing.</p>`,
  },
  {
    id: "free-body-diagrams-q31",
    type: "mc",
    difficulty: 2,
    prompt: `<p>Now cut the same bracket at section b&ndash;b, through the horizontal arm midway between the corner and the tip. What acts on the cut face of the outer piece?</p>`,
    figure: figQ30,
    choices: [
      "N = 600 N, V = 0, M = 120 N&middot;m",
      "N = 0, V = 600 N, M = 120 N&middot;m",
      "N = 0, V = 600 N, M = 240 N&middot;m",
      "N = 600 N, V = 600 N, M = 120 N&middot;m",
    ],
    answer: 1,
    explanation: `<p>N, V and M are defined relative to the <strong>member axis</strong>, and the arm&rsquo;s axis is horizontal. The 600 N load is perpendicular to it, so it is entirely shear:</p>
<p class="eq">V = <strong>600 N</strong>,&nbsp;&nbsp; N = <strong>0</strong></p>
<p>The cut is 0.2 m from the tip, so the moment arm is 0.2 m:</p>
<p class="eq">M = 600 &times; 0.200 = <strong>120 N&middot;m</strong></p>
<p>In the post the same load produced N = 600 N and V = 0. Nothing about the load changed, only the orientation of the member, which is how shear ends up being called vertical everywhere on a bent frame.</p>
<p>240 N&middot;m is the value at the corner rather than at b&ndash;b. The moment grows linearly from zero at the tip to 240 N&middot;m at the corner, then holds constant down the post.</p>`,
  },
  {
    id: "free-body-diagrams-q32",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A 60 kg roller of 300 mm radius must be pulled over a 40 mm step by a horizontal force F applied at its axle. What is the minimum F that starts it over the step? (g = 9.81 m/s&sup2;.)</p>`,
    figure: figQ32,
    answer: 339,
    unit: "N",
    explanation: `<p>At the instant it starts to climb, the roller pivots about the step corner C and lifts off the flat ground, so the ground normal goes to zero. The roller is then a <strong>three-force body</strong>: W, F and the corner reaction. Moments about C kill the corner reaction.</p>
<p>Geometry first. The centre O is r above the flat ground and C is h above it, so C sits (r &minus; h) = 0.260 m below O, and the horizontal offset is</p>
<p class="eq">d = &radic;(r&sup2; &minus; (r &minus; h)&sup2;) = &radic;(0.300&sup2; &minus; 0.260&sup2;) = &radic;0.02240 = 0.1497 m</p>
<p>Moments about C, with W = mg = 60(9.81) = 588.6 N down at O and F horizontal at O:</p>
<p class="eq">F(r &minus; h) = W d &rarr; F(0.260) = 588.6(0.1497) = 88.1 N&middot;m</p>
<p class="eq">F = 88.1 / 0.260 = <strong>339 N</strong></p>
<p>F comes out well under W because the step is shallow. Push at the top of the roller instead of the axle and the arm nearly doubles, roughly halving the force, which is why you lever a drum over a threshold from high up rather than at the hub.</p>`,
  },
  {
    id: "free-body-diagrams-q33",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A ladder leans against a smooth (frictionless) vertical wall, with its foot on a rough floor. On the free-body diagram of the ladder, what acts at the wall contact?</p>`,
    choices: [
      "A normal force plus friction acting up the wall",
      "A single normal force perpendicular to the wall, and nothing else",
      "A normal force plus a moment restraining rotation",
      "A vertical friction force only, since a smooth wall cannot push",
    ],
    answer: 1,
    explanation: `<p>A frictionless contact can transmit force only <strong>perpendicular to the contact surface</strong>. The wall is vertical, so it supplies a single horizontal normal force pushing the ladder away. One unknown, direction known.</p>
<p>That is what makes the classic ladder problem tractable. Three unknowns, N<sub>wall</sub>, N<sub>floor</sub> and f<sub>floor</sub>, against three equilibrium equations, so the ladder is statically <strong>determinate</strong>. The slip condition f = &mu;N is not needed to close the system; it comes in only when you are asked for the shallowest angle at which the ladder still stands.</p>
<p>Friction at the wall would let the wall carry vertical load, and assuming it is how people over-predict stability. A moment reaction would require the wall to grip the ladder. The last option inverts the physics, since a smooth surface pushes but does not rub. Slip starts at the floor, and worst when the climber is near the top, because that raises the wall normal force and with it the friction demand at the base.</p>`,
  },
  {
    id: "free-body-diagrams-q34",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A machine frame is bolted down at three separate feet, each of which is stiff enough to treat as fully fixed. Treating the frame as one rigid body in 2D, how does it classify?</p>`,
    choices: [
      "Statically determinate &mdash; 9 unknowns and 9 equations",
      "Statically indeterminate to the 3rd degree &mdash; one foot spare",
      "Statically indeterminate to the 6th degree &mdash; 9 unknowns",
      "Statically indeterminate to the 1st degree &mdash; one foot is redundant",
    ],
    answer: 2,
    explanation: `<p>Each fully fixed foot supplies three reactions in 2D, two forces plus a moment, so r = 3 &times; 3 = <strong>9</strong>. A single rigid body still provides only <strong>3</strong> equations no matter how many supports it has, which is where the answer &ldquo;9 equations&rdquo; comes from. Indeterminacy is 9 &minus; 3 = <strong>6</strong>.</p>
<p>So the individual foot loads cannot be computed from statics. They depend on the relative stiffness of frame and floor, on how flat the floor really is, and on bolt-tightening sequence. Shim one foot by half a millimetre and the distribution changes completely.</p>
<p>Precision equipment is mounted on <strong>three</strong> points for this reason, preferably on kinematic mounts that remove the redundant constraints rather than adding them. A four-foot machine on an uneven floor rocks; a three-foot machine never does.</p>`,
  },
  {
    id: "free-body-diagrams-q35",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>The compound beam shown has a pin at A, rollers at B (6 m from A) and C (12 m from A), and an internal hinge H at 8 m. A 20 kN load acts at 10 m from A. Find the magnitude of the vertical reaction at A.</p>`,
    figure: figQ35,
    answer: 3.33,
    unit: "kN",
    explanation: `<p>Cut at the hinge and take the simpler side first. Segment H&ndash;C is 4 m long, held by the hinge at H and the roller at C, with the 20 kN load 2 m from H:</p>
<p class="eq">&Sigma;M<sub>H</sub> = 0: C(4) = 20(2) &rarr; C = 10.0 kN, and the hinge carries 20 &minus; 10 = 10.0 kN</p>
<p>By Newton&rsquo;s third law the H&ndash;C segment presses <strong>down</strong> on the A&ndash;H segment with 10 kN, at 8 m from A. That segment is supported by the pin at A and the roller at B, 6 m along:</p>
<p class="eq">&Sigma;M<sub>A</sub> = 0: B(6) = 10(8) &rarr; B = 13.33 kN up</p>
<p class="eq">&Sigma;F<sub>y</sub> = 0: A<sub>y</sub> = 10 &minus; 13.33 = &minus;3.33 kN</p>
<p>So A<sub>y</sub> is <strong>3.33 kN downward</strong>. The load overhangs past B, end A is being levered up, and the pin has to hold it down.</p>
<p>The hinge is what makes this solvable: four unknowns, but three equilibrium equations plus &Sigma;M = 0 at the hinge for one segment. Attack the whole beam in one go and you get four unknowns in three equations and conclude wrongly that it is indeterminate.</p>`,
  },
  {
    id: "free-body-diagrams-q36",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A bracket is held by a pin at A and a single cable at B, and carries one applied load P. Before doing any algebra, what do you know about the direction of the pin reaction at A?</p>`,
    choices: [
      "It is horizontal, because the cable takes the entire vertical component of P",
      "It acts from A toward where the lines of P and the cable cross",
      "It acts along the line from A to B, joining the two support points",
      "It is perpendicular to P, because a pin cannot resist a moment",
    ],
    answer: 1,
    explanation: `<p>Three forces act on the bracket: P, the cable tension and the pin reaction. A body in equilibrium under exactly three forces requires their lines of action to be <strong>concurrent</strong>. Extend P&rsquo;s line and the cable&rsquo;s line until they cross at O; the pin reaction must pass through O too, so its direction is the line A&ndash;O. One construction, zero equations.</p>
<p>The proof is one line. Take moments about O: P and the cable both contribute zero because they pass through it, so the pin reaction must as well.</p>
<p>Option 3 is the seductive one. The line joining the supports is irrelevant unless the bracket is a two-force member, which it is not, because P is applied to it. Option 1 assumes something the geometry has not established, and option 4 confuses having no moment reaction at the pin with the reaction being perpendicular to the load. Once the direction is known, one moment equation gives the magnitude.</p>`,
  },
  {
    id: "free-body-diagrams-q37",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A vertical gate 2.0 m tall and 1.5 m wide holds back water. The pressure on it varies linearly from zero at the surface to 19.6 kPa at the base. The gate is hinged along its base. What moment about the hinge must the gate's latch resist?</p>`,
    answer: 19.6,
    unit: "kN&middot;m",
    explanation: `<p>The pressure distribution is triangular, so the resultant is the volume under it, average pressure times area:</p>
<p class="eq">R = &frac12; p<sub>max</sub> &times; h &times; b = &frac12; (19.6 kPa)(2.0 m)(1.5 m) = <strong>29.4 kN</strong></p>
<p>It acts through the centroid of that triangle, one third of the depth up from the base:</p>
<p class="eq">y&#772; = h/3 = 2.0/3 = 0.667 m above the hinge</p>
<p class="eq">M = R &middot; y&#772; = 29.4 &times; 0.667 = <strong>19.6 kN&middot;m</strong></p>
<p>Putting the resultant at mid-depth inflates the moment to 29.4 kN&middot;m, a 50% over-prediction on hinge and latch loads. Using base pressure over the whole area runs the other way and doubles R to 58.8 kN. Pressure grows with depth, so on a vertical surface the resultant always sits <em>below</em> mid-depth, and the deeper the gate the more the load concentrates near the bottom.</p>`,
  },
  {
    id: "free-body-diagrams-q38",
    type: "mc",
    difficulty: 3,
    prompt: `<p>In a pin-jointed frame, member BC is pinned at B to member AB and pinned at C to ground, and it carries a 5 kN load at its midpoint. A candidate drew the diagram below for member BC. What is the error?</p>`,
    figure: figQ38,
    choices: [
      "B needs two force components &mdash; BC is not a two-force member",
      "The force at B should be perpendicular to BC rather than along it",
      "The 5 kN load should be transferred to the pin at B",
      "A moment reaction is also required at the pin B",
    ],
    answer: 0,
    explanation: `<p>A member is two-force only if it is loaded at exactly two points and nowhere else. BC carries the 5 kN load <em>between</em> its pins, so three separate forces act on it and the collinearity argument collapses. The pin at B contributes <strong>two unknown components</strong>, B<sub>x</sub> and B<sub>y</sub>, with no known direction.</p>
<p>Drawing a single force along BC silently imposes an extra constraint and produces a wrong but plausible-looking answer for the whole frame. It is the most common frame-analysis mistake there is.</p>
<p>The other options fail for instructive reasons. Nothing makes the force perpendicular either. Moving the load to the pin changes the moment about C and is legal only with a compensating couple. And a pin never transmits a moment, whatever else is going on.</p>
<p>Before drawing a pin force as a single arrow, check that nothing is applied between the member&rsquo;s two pin points. Weight counts whenever it is not negligible.</p>`,
  },
  {
    id: "free-body-diagrams-q39",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>The davit shown has a 2.0 m vertical post welded to a deck plate and a 1.2 m horizontal arm. A 3 kN load hangs at the arm tip and a 0.5 kN horizontal wind load acts at the top of the post. What is the magnitude of the reaction moment at the welded base A?</p>`,
    figure: figQ39,
    answer: 4.6,
    unit: "kN&middot;m",
    explanation: `<p class="eq">From the vertical 3 kN at 1.2 m out: M<sub>1</sub> = 3 &times; 1.2 = 3.60 kN&middot;m</p>
<p class="eq">From the horizontal 0.5 kN at 2.0 m up: M<sub>2</sub> = 0.5 &times; 2.0 = 1.00 kN&middot;m</p>
<p class="eq">M<sub>A</sub> = 3.60 + 1.00 = <strong>4.60 kN&middot;m</strong></p>
<p>Both loads tip the davit the same way, so the two moments add. Each force uses the offset <em>perpendicular to itself</em>: the vertical load uses the horizontal reach, the horizontal load uses the height. Crossing them gives 3 &times; 2.0 + 0.5 &times; 1.2 = 6.6 kN&middot;m and over-predicts the weld by 43%.</p>
<p>The base also carries R<sub>y</sub> = 3 kN and R<sub>x</sub> = 0.5 kN, three reactions in total as a fixed support must. The 4.60 kN&middot;m is what sizes the weld and the deck doubler plate; the direct forces are almost never critical.</p>`,
  },
  {
    id: "free-body-diagrams-q40",
    type: "mc",
    difficulty: 3,
    prompt: `<p>The rigid bar shown hangs from three <strong>parallel vertical</strong> links and carries a vertical load W plus a horizontal load H. How does this structure classify?</p>`,
    figure: figQ40,
    choices: [
      "Statically determinate &mdash; three unknowns against three equations",
      "Statically indeterminate to the 1st degree",
      "Improperly constrained &mdash; nothing resists the horizontal load",
      "Improperly constrained &mdash; the links are redundant and one carries no force",
    ],
    answer: 2,
    explanation: `<p>The count looks perfect: three links, each a two-force member with one unknown force, against three equilibrium equations. But every one of those forces is <strong>vertical</strong>, so &Sigma;F<sub>x</sub> = 0 reads 0 = H, impossible for any non-zero H. The bar swings sideways. It is a <strong>mechanism in the horizontal direction</strong>, or in the standard language, <em>improperly constrained</em>.</p>
<p>Counting reactions is necessary and not sufficient. The reactions must also <em>span</em> all three motions. The other classic failure of the same kind is three reaction lines all concurrent, which cannot generate a moment about the common point, so the body spins even though r = 3.</p>
<p>Option 4 has the reasoning backwards. Nothing here is redundant; the structure is short of a constraint, not carrying a spare. Angle one link, add a diagonal brace, or replace a pin-ended link with a fixed connection. Anything that puts a horizontal component into the reaction set will do.</p>`,
  },
  {
    id: "free-body-diagrams-q41",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>The A-frame shown has two legs pinned together at the apex B, feet 3.0 m apart on a smooth floor, and apex 2.0 m above the floor. A horizontal tie rod joins the legs at mid-height. An 800 N vertical load is applied at the apex. Find the tension in the tie rod.</p>`,
    figure: figQ41,
    answer: 600,
    unit: "N",
    explanation: `<p>Whole frame first. The floor is smooth, so each foot supplies only a vertical force, and symmetry gives</p>
<p class="eq">N<sub>A</sub> = N<sub>C</sub> = 800/2 = 400 N</p>
<p>Now isolate <strong>one leg</strong>. This is the step being tested, because the tie force is internal to the whole frame and invisible until you cut it. Take the left leg, foot A at (0, 0) and apex B at (1.5, 2.0). The tie attaches at mid-height, (0.75, 1.0), pulling horizontally inward with tension T. Sum moments about B, where the apex pin force acts:</p>
<p class="eq">&Sigma;M<sub>B</sub> = 0: N<sub>A</sub>(1.5) = T(2.0 &minus; 1.0)</p>
<p class="eq">400(1.5) = T(1.0) &rarr; T = <strong>600 N</strong></p>
<p>The tie comes out in tension, as it must: a smooth floor lets the feet splay and the rod is what stops them. Its lever arm about B is the vertical drop from the apex, so moving the rod up toward B shrinks the arm and drives T up sharply. A tie at three-quarter height, 0.5 m below B, would carry 1200 N. Stepladder spreaders are mounted low for exactly that reason.</p>`,
  },
  {
    id: "free-body-diagrams-q42",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A smooth cylinder rests in the 90&deg; V-groove shown. On the free-body diagram of the cylinder, how do the two contact forces act?</p>`,
    figure: figQ42,
    choices: [
      "Vertically upward at both contacts, sharing the weight equally",
      "Each along its own radius toward the centre, perpendicular to that face",
      "Tangent to the cylinder at each contact, opposing any tendency to slide",
      "Both along the bisector of the groove, one on each side of it",
    ],
    answer: 1,
    explanation: `<p>A smooth contact transmits force only <strong>perpendicular to the contact surface</strong>. For a cylinder touching a flat face, the perpendicular at the contact point is the radius through that point, so each normal force points from its contact straight at the cylinder&rsquo;s centre.</p>
<p>That is what makes the problem easy. All three forces, W and the two normals, are concurrent at the centre, so &Sigma;M is satisfied automatically and only &Sigma;F<sub>x</sub> and &Sigma;F<sub>y</sub> remain.</p>
<p>Vertical forces at both contacts would need horizontal faces. Tangential forces are friction, which a smooth contact cannot supply. Both forces along the bisector would be parallel and unable to cancel horizontally. Open the groove toward flat and the normals rotate toward vertical, each dropping toward W/2. Close it toward a narrow vee and they rotate toward horizontal and blow up, which is how a vee-block grips a shaft.</p>`,
  },
  {
    id: "free-body-diagrams-q43",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>The same cylinder weighs 500 N, and each face of the 90&deg; V-groove is inclined at 45&deg; to the horizontal. Find the magnitude of the normal force at each contact.</p>`,
    figure: figQ42,
    answer: 354,
    unit: "N",
    explanation: `<p>Each face is at 45&deg; to the horizontal, so each normal is at 45&deg; from the vertical. Symmetry makes the two normals equal and cancels their horizontal components. Vertical equilibrium:</p>
<p class="eq">&Sigma;F<sub>y</sub> = 0: 2N cos 45&deg; = W</p>
<p class="eq">N = 500 / (2 &times; 0.7071) = 500 / 1.4142 = <strong>354 N</strong></p>
<p>Each contact carries more than half the weight, 354 against 250. Wedging a cylinder into a vee always raises the contact force above what a flat surface would give, because part of each normal is spent fighting the other one horizontally.</p>
<p>Answering 250 N splits the weight equally without resolving the angle. The general result is N = W / (2 cos &theta;) with &theta; measured from vertical: at &theta; = 0 each contact carries W/2, and as the groove narrows toward &theta; &rarr; 90&deg; the contact force diverges. Vee-blocks and vee-belt pulleys trade contact stress for that multiplied normal force and the grip it buys.</p>`,
  },
  {
    id: "free-body-diagrams-q44",
    type: "mc",
    difficulty: 1,
    prompt: `<p>You cut a loaded beam at a section and analyse the left portion, then repeat the analysis keeping the right portion instead. How do the internal actions on the cut face compare?</p>`,
    choices: [
      "The moment reverses sign but the shear does not",
      "Both change magnitude, because the loads on the two sides differ",
      "The axial force disappears on one face but not the other",
      "Same magnitudes on both faces, with the senses reversed",
    ],
    answer: 3,
    explanation: `<p>One cut creates two faces, and the actions on them are an action-reaction pair: <strong>equal in magnitude, opposite in sense</strong>. N, V and M all obey it. Work out V and M from the left, then from the right, and the magnitudes must agree. Which is why you can always keep whichever side has fewer forces on it.</p>`,
  },
  {
    id: "free-body-diagrams-q45",
    type: "mc",
    difficulty: 3,
    prompt: `<p>The rigid bar shown is held by three pin-ended links. None of them is parallel to another, and the count looks right: three unknown link forces against three equilibrium equations. But all three link axes, extended, pass through the single point O. What does that do to the diagram?</p>`,
    figure: figQ45,
    choices: [
      "Nothing is wrong: three non-parallel unknowns against three equations",
      "The bar spins about O, because no link force can produce a moment there",
      "The concurrency supplies an extra equation, so the bar is indeterminate",
      "The links become two-force members, dropping the unknowns from three to one",
    ],
    answer: 1,
    explanation: `<p>Take moments about O. Every link force has its line of action through O, so every one has zero arm about that point:</p>
<p class="eq">&Sigma;M<sub>O</sub> = 0 reads &nbsp;0 = M<sub>O</sub>(P)</p>
<p>P does <em>not</em> pass through O, so its moment about O is not zero and the equation cannot be satisfied. The bar rotates about O. Three unknowns and three equations, but only two of the equations are independent, because the reaction set cannot generate a moment about the common point.</p>
<p>Alongside the parallel-reaction case, this is the second classic failure of determinacy counting. <strong>The count is necessary, never sufficient.</strong> Check that the reactions between them restrain x, y and rotation before trusting r = 3.</p>
<p>Option 3 has the logic backwards: concurrency removes an independent equation rather than adding one, leaving the structure short of a constraint rather than carrying a spare. Option 4 is true but irrelevant, since the links <em>are</em> two-force members, which is precisely why each contributes one unknown along a known line. It is the arrangement of those lines that fails. Move one link so its axis misses O, or replace it with a support that can carry a moment.</p>`,
  },
];

export default extra;
