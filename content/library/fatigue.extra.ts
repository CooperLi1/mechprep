import type { Question } from "../types";

// Additional question bank for this topic (merged after the base questions
// in content/index.ts). Authored per-question — no generated templates.
// SVG element ids are prefixed fa<n>- and are unique across the whole app.

const figSNAl = `<svg viewBox="0 0 460 255" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="fa5-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Steel vs aluminum S-N (log-log axes)</text>
  <line x1="80" y1="52" x2="80" y2="205" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="133" y1="52" x2="133" y2="205" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="186" y1="52" x2="186" y2="205" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="239" y1="52" x2="239" y2="205" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="292" y1="52" x2="292" y2="205" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="345" y1="52" x2="345" y2="205" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="398" y1="52" x2="398" y2="205" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="62" y1="205" x2="62" y2="48" stroke="#64748b" stroke-width="1.5" marker-end="url(#fa5-ax)"/>
  <line x1="62" y1="205" x2="424" y2="205" stroke="#64748b" stroke-width="1.5" marker-end="url(#fa5-ax)"/>
  <text x="24" y="40" fill="#64748b" font-size="12">S<tspan baseline-shift="sub" font-size="9">a</tspan> (MPa)</text>
  <path d="M80,71 L239,137" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <path d="M239,137 L406,137" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <path d="M80,118 C110,131 150,148 186,158 C220,167 260,176 292,180 C320,185 365,190 398,193" fill="none" stroke="#dc2626" stroke-width="3"/>
  <circle cx="239" cy="137" r="5" fill="#1d4ed8"/>
  <line x1="239" y1="142" x2="239" y2="205" stroke="#64748b" stroke-width="1" stroke-dasharray="4 4"/>
  <text x="239" y="122" text-anchor="middle" fill="#64748b" font-size="12">knee</text>
  <text x="332" y="128" text-anchor="middle" fill="#1d4ed8" font-size="12" font-weight="600">steel: flat past the knee</text>
  <text x="150" y="198" text-anchor="middle" fill="#dc2626" font-size="12" font-weight="600">aluminum: keeps falling</text>
  <text x="56" y="75" text-anchor="end" fill="#64748b" font-size="12">630</text>
  <text x="56" y="141" text-anchor="end" fill="#64748b" font-size="12">350</text>
  <text x="56" y="197" text-anchor="end" fill="#64748b" font-size="12">110</text>
  <text x="80" y="222" text-anchor="middle" fill="#64748b" font-size="12">10<tspan baseline-shift="super" font-size="9">3</tspan></text>
  <text x="133" y="222" text-anchor="middle" fill="#64748b" font-size="12">10<tspan baseline-shift="super" font-size="9">4</tspan></text>
  <text x="186" y="222" text-anchor="middle" fill="#64748b" font-size="12">10<tspan baseline-shift="super" font-size="9">5</tspan></text>
  <text x="239" y="222" text-anchor="middle" fill="#64748b" font-size="12">10<tspan baseline-shift="super" font-size="9">6</tspan></text>
  <text x="292" y="222" text-anchor="middle" fill="#64748b" font-size="12">10<tspan baseline-shift="super" font-size="9">7</tspan></text>
  <text x="345" y="222" text-anchor="middle" fill="#64748b" font-size="12">10<tspan baseline-shift="super" font-size="9">8</tspan></text>
  <text x="398" y="222" text-anchor="middle" fill="#64748b" font-size="12">10<tspan baseline-shift="super" font-size="9">9</tspan></text>
  <text x="240" y="242" text-anchor="middle" fill="#64748b" font-size="12">cycles to failure N</text>
</svg>`;

const figRotShaft = `<svg viewBox="0 0 460 235" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="fa6-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
    <marker id="fa6-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="fa6-rot" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#334155"/></marker>
    <marker id="fa6-dimE" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
    <marker id="fa6-dimS" markerWidth="8" markerHeight="8" refX="1.5" refY="4" orient="auto"><path d="M8,0L0,4L8,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">A point on a rotating shaft sees fully reversed bending</text>
  <circle cx="104" cy="124" r="42" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="54" y1="124" x2="156" y2="124" stroke="#64748b" stroke-width="1" stroke-dasharray="6 4"/>
  <text x="104" y="106" text-anchor="middle" fill="#334155" font-size="11">compression</text>
  <text x="104" y="152" text-anchor="middle" fill="#334155" font-size="11">tension</text>
  <path d="M55,142 A52,52 0 0 0 55,106" fill="none" stroke="#334155" stroke-width="1.8" marker-end="url(#fa6-rot)"/>
  <text x="36" y="124" text-anchor="middle" fill="#334155" font-size="12" font-weight="600">&omega;</text>
  <line x1="104" y1="32" x2="104" y2="58" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fa6-load)"/>
  <text x="112" y="46" fill="#dc2626" font-size="12" font-weight="600">F steady</text>
  <circle cx="143" cy="138" r="5" fill="#1d4ed8"/>
  <text x="152" y="134" fill="#1d4ed8" font-size="12" font-weight="600">A</text>
  <text x="104" y="192" text-anchor="middle" fill="#64748b" font-size="12">shaft section</text>
  <line x1="232" y1="195" x2="232" y2="62" stroke="#64748b" stroke-width="1.5" marker-end="url(#fa6-ax)"/>
  <line x1="232" y1="125" x2="430" y2="125" stroke="#64748b" stroke-width="1.5" marker-end="url(#fa6-ax)"/>
  <path d="M240,125 C248.1,125 254.4,75 262.5,75 C270.6,75 276.9,125 285,125 C293.1,125 299.4,175 307.5,175 C315.6,175 321.9,125 330,125 C338.1,125 344.4,75 352.5,75 C360.6,75 366.9,125 375,125 C383.1,125 389.4,175 397.5,175 C405.6,175 411.9,125 420,125" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <text x="226" y="79" text-anchor="end" fill="#64748b" font-size="12">+&sigma;</text>
  <text x="226" y="129" text-anchor="end" fill="#64748b" font-size="12">0</text>
  <text x="226" y="179" text-anchor="end" fill="#64748b" font-size="12">&minus;&sigma;</text>
  <text x="426" y="118" fill="#64748b" font-size="12">time</text>
  <line x1="240" y1="200" x2="330" y2="200" stroke="#64748b" stroke-width="1" marker-start="url(#fa6-dimS)" marker-end="url(#fa6-dimE)"/>
  <text x="285" y="216" text-anchor="middle" fill="#64748b" font-size="12">1 revolution</text>
  <text x="392" y="216" text-anchor="middle" fill="#1d4ed8" font-size="12" font-weight="600">R = &minus;1</text>
</svg>`;

const figFrac = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <clipPath id="fa7-clip"><circle cx="155" cy="140" r="76"/></clipPath>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Reading a fatigue fracture surface</text>
  <g clip-path="url(#fa7-clip)">
    <circle cx="155" cy="140" r="76" fill="#fee2e2"/>
    <circle cx="79" cy="140" r="126" fill="#e2e8f0"/>
    <circle cx="79" cy="140" r="45" fill="none" stroke="#64748b" stroke-width="1.2"/>
    <circle cx="79" cy="140" r="72" fill="none" stroke="#64748b" stroke-width="1.2"/>
    <circle cx="79" cy="140" r="98" fill="none" stroke="#64748b" stroke-width="1.2"/>
    <circle cx="79" cy="140" r="120" fill="none" stroke="#64748b" stroke-width="1.2"/>
  </g>
  <circle cx="155" cy="140" r="76" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="80" cy="140" r="4" fill="#dc2626"/>
  <line x1="81" y1="124" x2="90" y2="127" stroke="#334155" stroke-width="1.6"/>
  <line x1="79" y1="140" x2="89" y2="140" stroke="#334155" stroke-width="1.6"/>
  <line x1="81" y1="156" x2="90" y2="153" stroke="#334155" stroke-width="1.6"/>
  <line x1="60" y1="100" x2="77" y2="134" stroke="#64748b" stroke-width="1"/>
  <text x="16" y="96" fill="#dc2626" font-size="12" font-weight="600">crack origin</text>
  <line x1="62" y1="202" x2="80" y2="160" stroke="#64748b" stroke-width="1"/>
  <text x="14" y="214" fill="#334155" font-size="12">ratchet marks</text>
  <line x1="194" y1="46" x2="168" y2="74" stroke="#64748b" stroke-width="1"/>
  <text x="196" y="42" fill="#334155" font-size="12">beach marks</text>
  <line x1="248" y1="202" x2="216" y2="170" stroke="#64748b" stroke-width="1"/>
  <text x="250" y="212" fill="#dc2626" font-size="12">final fast-fracture zone</text>
  <text x="230" y="240" text-anchor="middle" fill="#64748b" font-size="12">beach marks are concentric about the origin</text>
</svg>`;

const figFracRatio = `<svg viewBox="0 0 460 245" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <clipPath id="fa8-cA"><circle cx="120" cy="125" r="68"/></clipPath>
    <clipPath id="fa8-cB"><circle cx="330" cy="125" r="68"/></clipPath>
  </defs>
  <rect x="58" y="14" width="14" height="12" fill="#e2e8f0" stroke="#334155" stroke-width="1"/>
  <text x="78" y="25" fill="#334155" font-size="12">fatigue zone</text>
  <rect x="240" y="14" width="14" height="12" fill="#fee2e2" stroke="#334155" stroke-width="1"/>
  <text x="260" y="25" fill="#334155" font-size="12">final overload zone</text>
  <g clip-path="url(#fa8-cA)">
    <circle cx="120" cy="125" r="68" fill="#fee2e2"/>
    <circle cx="52" cy="125" r="116" fill="#e2e8f0"/>
    <circle cx="52" cy="125" r="40" fill="none" stroke="#64748b" stroke-width="1.2"/>
    <circle cx="52" cy="125" r="72" fill="none" stroke="#64748b" stroke-width="1.2"/>
    <circle cx="52" cy="125" r="100" fill="none" stroke="#64748b" stroke-width="1.2"/>
  </g>
  <circle cx="120" cy="125" r="68" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="53" cy="125" r="3.5" fill="#dc2626"/>
  <g clip-path="url(#fa8-cB)">
    <circle cx="330" cy="125" r="68" fill="#fee2e2"/>
    <circle cx="262" cy="125" r="20" fill="#e2e8f0"/>
    <circle cx="262" cy="125" r="12" fill="none" stroke="#64748b" stroke-width="1.2"/>
  </g>
  <circle cx="330" cy="125" r="68" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="263" cy="125" r="3.5" fill="#dc2626"/>
  <text x="120" y="212" text-anchor="middle" fill="#334155" font-weight="600">Face A</text>
  <text x="330" y="212" text-anchor="middle" fill="#334155" font-weight="600">Face B</text>
  <text x="120" y="232" text-anchor="middle" fill="#64748b" font-size="12">fatigue zone about 85%</text>
  <text x="330" y="232" text-anchor="middle" fill="#64748b" font-size="12">fatigue zone about 15%</text>
</svg>`;

const figSpec = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="fa9-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Load spectrum: one flight</text>
  <line x1="64" y1="190" x2="400" y2="190" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="64" y1="160" x2="400" y2="160" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="64" y1="130" x2="400" y2="130" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="64" y1="100" x2="400" y2="100" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="64" y1="70" x2="400" y2="70" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="64" y1="205" x2="64" y2="50" stroke="#64748b" stroke-width="1.5" marker-end="url(#fa9-ax)"/>
  <line x1="64" y1="205" x2="414" y2="205" stroke="#64748b" stroke-width="1.5" marker-end="url(#fa9-ax)"/>
  <text x="20" y="38" fill="#64748b" font-size="12">cycles this flight</text>
  <rect x="87" y="190" width="46" height="15" fill="#1d4ed8" opacity="0.75"/>
  <rect x="167" y="146" width="46" height="59" fill="#1d4ed8" opacity="0.75"/>
  <rect x="247" y="112" width="46" height="93" fill="#1d4ed8" opacity="0.75"/>
  <rect x="327" y="79" width="46" height="126" fill="#1d4ed8" opacity="0.75"/>
  <text x="110" y="184" text-anchor="middle" fill="#1d4ed8" font-size="12" font-weight="600">1</text>
  <text x="190" y="140" text-anchor="middle" fill="#1d4ed8" font-size="12" font-weight="600">30</text>
  <text x="270" y="106" text-anchor="middle" fill="#1d4ed8" font-size="12" font-weight="600">400</text>
  <text x="350" y="73" text-anchor="middle" fill="#1d4ed8" font-size="12" font-weight="600">5,000</text>
  <text x="58" y="194" text-anchor="end" fill="#64748b" font-size="12">10<tspan baseline-shift="super" font-size="9">0</tspan></text>
  <text x="58" y="164" text-anchor="end" fill="#64748b" font-size="12">10<tspan baseline-shift="super" font-size="9">1</tspan></text>
  <text x="58" y="134" text-anchor="end" fill="#64748b" font-size="12">10<tspan baseline-shift="super" font-size="9">2</tspan></text>
  <text x="58" y="104" text-anchor="end" fill="#64748b" font-size="12">10<tspan baseline-shift="super" font-size="9">3</tspan></text>
  <text x="58" y="74" text-anchor="end" fill="#64748b" font-size="12">10<tspan baseline-shift="super" font-size="9">4</tspan></text>
  <text x="110" y="222" text-anchor="middle" fill="#334155" font-size="12">140 MPa</text>
  <text x="190" y="222" text-anchor="middle" fill="#334155" font-size="12">110 MPa</text>
  <text x="270" y="222" text-anchor="middle" fill="#334155" font-size="12">80 MPa</text>
  <text x="350" y="222" text-anchor="middle" fill="#334155" font-size="12">50 MPa</text>
  <text x="110" y="238" text-anchor="middle" fill="#64748b" font-size="11">N = 2&times;10<tspan baseline-shift="super" font-size="8">4</tspan></text>
  <text x="190" y="238" text-anchor="middle" fill="#64748b" font-size="11">N = 2&times;10<tspan baseline-shift="super" font-size="8">5</tspan></text>
  <text x="270" y="238" text-anchor="middle" fill="#64748b" font-size="11">N = 2.5&times;10<tspan baseline-shift="super" font-size="8">6</tspan></text>
  <text x="350" y="238" text-anchor="middle" fill="#64748b" font-size="11">below S<tspan baseline-shift="sub" font-size="8">e</tspan> = 60</text>
</svg>`;

const figQrad = `<svg viewBox="0 0 460 265" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="fa10-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Notch sensitivity vs notch root radius</text>
  <line x1="70" y1="55" x2="405" y2="55" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="70" y1="200" x2="70" y2="48" stroke="#64748b" stroke-width="1.5" marker-end="url(#fa10-ax)"/>
  <line x1="70" y1="200" x2="418" y2="200" stroke="#64748b" stroke-width="1.5" marker-end="url(#fa10-ax)"/>
  <text x="64" y="42" text-anchor="end" fill="#64748b" font-size="12">q</text>
  <path d="M72,151.7 L74,127.5 L76.6,109.4 L79.9,96.4 L83.2,88.5 L89.8,79.2 L96.4,73.9 L103,70.5 L116.2,66.4 L136,63.2 L162.4,61 L202,59.2 L241.6,58.3 L294.4,57.5 L347.2,57 L400,56.7" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="7 4"/>
  <path d="M72,184.5 L74,171.9 L76.6,158.6 L79.9,145.6 L83.2,135.6 L89.8,120.9 L96.4,110.8 L103,103.3 L116.2,93.2 L136,84 L162.4,77 L202,71.1 L241.6,67.7 L294.4,64.9 L347.2,63.1 L400,61.9" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <line x1="126" y1="50" x2="108" y2="68" stroke="#64748b" stroke-width="1"/>
  <text x="128" y="46" fill="#64748b" font-size="12">high-strength steel (a = 0.06 mm)</text>
  <line x1="150" y1="120" x2="136" y2="88" stroke="#64748b" stroke-width="1"/>
  <text x="152" y="128" fill="#1d4ed8" font-size="12">mild steel (a = 0.25 mm)</text>
  <circle cx="103" cy="103" r="4.5" fill="#dc2626"/>
  <circle cx="268" cy="66" r="4.5" fill="#dc2626"/>
  <line x1="112" y1="142" x2="105" y2="110" stroke="#64748b" stroke-width="1"/>
  <text x="110" y="152" fill="#dc2626" font-size="12">r = 0.5 mm, q = 0.67</text>
  <line x1="274" y1="86" x2="270" y2="71" stroke="#64748b" stroke-width="1"/>
  <text x="276" y="96" fill="#dc2626" font-size="12">r = 3 mm, q = 0.92</text>
  <text x="64" y="204" text-anchor="end" fill="#64748b" font-size="12">0</text>
  <text x="64" y="132" text-anchor="end" fill="#64748b" font-size="12">0.5</text>
  <text x="64" y="59" text-anchor="end" fill="#64748b" font-size="12">1.0</text>
  <text x="70" y="216" text-anchor="middle" fill="#64748b" font-size="12">0</text>
  <text x="136" y="216" text-anchor="middle" fill="#64748b" font-size="12">1</text>
  <text x="202" y="216" text-anchor="middle" fill="#64748b" font-size="12">2</text>
  <text x="268" y="216" text-anchor="middle" fill="#64748b" font-size="12">3</text>
  <text x="334" y="216" text-anchor="middle" fill="#64748b" font-size="12">4</text>
  <text x="400" y="216" text-anchor="middle" fill="#64748b" font-size="12">5</text>
  <text x="244" y="234" text-anchor="middle" fill="#64748b" font-size="12">notch root radius r (mm)</text>
  <text x="230" y="254" text-anchor="middle" fill="#334155" font-size="12">sharper notch means LOWER q, so K<tspan baseline-shift="sub" font-size="9">f</tspan> falls short of K<tspan baseline-shift="sub" font-size="9">t</tspan></text>
</svg>`;

const figFillet = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="fa11-ar" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Same shoulder, two fillet radii</text>
  <path d="M40,58 H150 V84 Q150,90 156,90 H215 V150 H156 Q150,150 150,156 V182 H40 Z" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <path d="M250,58 H358 V70 Q358,90 378,90 H420 V150 H378 Q358,150 358,170 V182 H250 Z" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="36" y1="120" x2="219" y2="120" stroke="#64748b" stroke-width="1" stroke-dasharray="12 3 2 3"/>
  <line x1="246" y1="120" x2="424" y2="120" stroke="#64748b" stroke-width="1" stroke-dasharray="12 3 2 3"/>
  <circle cx="158" cy="92" r="18" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 4"/>
  <circle cx="376" cy="92" r="22" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 4"/>
  <line x1="222" y1="120" x2="244" y2="120" stroke="#64748b" stroke-width="1.8" marker-end="url(#fa11-ar)"/>
  <text x="128" y="202" text-anchor="middle" fill="#334155" font-weight="600">r = 0.5 mm</text>
  <text x="128" y="220" text-anchor="middle" fill="#64748b" font-size="12">K<tspan baseline-shift="sub" font-size="9">t</tspan> = 2.8, q = 0.67</text>
  <text x="128" y="238" text-anchor="middle" fill="#1d4ed8" font-size="12" font-weight="600">K<tspan baseline-shift="sub" font-size="9">f</tspan> = ?</text>
  <text x="335" y="202" text-anchor="middle" fill="#334155" font-weight="600">r = 3.0 mm</text>
  <text x="335" y="220" text-anchor="middle" fill="#64748b" font-size="12">K<tspan baseline-shift="sub" font-size="9">t</tspan> = 1.8, q = 0.92</text>
  <text x="335" y="238" text-anchor="middle" fill="#1d4ed8" font-size="12" font-weight="600">K<tspan baseline-shift="sub" font-size="9">f</tspan> = ?</text>
</svg>`;

const figWeld = `<svg viewBox="0 0 460 225" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="fa12-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Fillet-welded attachment: the toe is the crack site</text>
  <text x="230" y="42" text-anchor="middle" fill="#64748b" font-size="12">weld shrinkage leaves tensile residual stress at the toe</text>
  <rect x="40" y="150" width="380" height="34" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="212" y="62" width="36" height="88" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <polygon points="212,150 212,112 174,150" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <polygon points="248,150 248,112 286,150" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <path d="M174,150 L171,161 L176,170 L172,180" fill="none" stroke="#dc2626" stroke-width="2.2"/>
  <circle cx="174" cy="158" r="22" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 4"/>
  <line x1="162" y1="176" x2="140" y2="198" stroke="#64748b" stroke-width="1"/>
  <text x="30" y="206" fill="#dc2626" font-size="12" font-weight="600">crack at the weld toe</text>
  <line x1="294" y1="144" x2="284" y2="150" stroke="#64748b" stroke-width="1"/>
  <text x="296" y="140" fill="#334155" font-size="12">toe angle</text>
  <text x="256" y="84" fill="#334155" font-size="12">attachment</text>
  <line x1="38" y1="167" x2="14" y2="167" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fa12-load)"/>
  <line x1="422" y1="167" x2="446" y2="167" stroke="#dc2626" stroke-width="2.5" marker-end="url(#fa12-load)"/>
  <text x="14" y="156" fill="#dc2626" font-size="12" font-weight="600">&plusmn;&sigma;</text>
  <text x="424" y="156" fill="#dc2626" font-size="12" font-weight="600">&plusmn;&sigma;</text>
</svg>`;

const figBolt = `<svg viewBox="0 0 460 255" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="fa13-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
    <marker id="fa13-dimE" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
    <marker id="fa13-dimS" markerWidth="8" markerHeight="8" refX="1.5" refY="4" orient="auto"><path d="M8,0L0,4L8,8z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Joint diagram: the bolt takes only C of the external load</text>
  <line x1="50" y1="210" x2="50" y2="42" stroke="#64748b" stroke-width="1.5" marker-end="url(#fa13-ax)"/>
  <line x1="50" y1="210" x2="424" y2="210" stroke="#64748b" stroke-width="1.5" marker-end="url(#fa13-ax)"/>
  <text x="24" y="38" fill="#64748b" font-size="12">force</text>
  <line x1="50" y1="90" x2="340" y2="90" stroke="#64748b" stroke-width="1" stroke-dasharray="6 4"/>
  <text x="46" y="94" text-anchor="end" fill="#64748b" font-size="12">F<tspan baseline-shift="sub" font-size="9">i</tspan></text>
  <line x1="50" y1="210" x2="215" y2="90" stroke="#1d4ed8" stroke-width="2.5"/>
  <line x1="330" y1="210" x2="215" y2="90" stroke="#334155" stroke-width="2.5"/>
  <line x1="215" y1="90" x2="252" y2="63" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="6 4"/>
  <line x1="215" y1="90" x2="252" y2="128" stroke="#334155" stroke-width="2" stroke-dasharray="6 4"/>
  <line x1="252" y1="63" x2="252" y2="128" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="252" cy="63" r="4.5" fill="#1d4ed8"/>
  <circle cx="252" cy="128" r="4.5" fill="#334155"/>
  <line x1="272" y1="90" x2="272" y2="63" stroke="#dc2626" stroke-width="1.5" marker-start="url(#fa13-dimS)" marker-end="url(#fa13-dimE)"/>
  <text x="280" y="74" fill="#dc2626" font-size="12">&Delta;F<tspan baseline-shift="sub" font-size="9">b</tspan> = C&middot;P</text>
  <line x1="272" y1="90" x2="272" y2="128" stroke="#dc2626" stroke-width="1.5" marker-start="url(#fa13-dimS)" marker-end="url(#fa13-dimE)"/>
  <text x="280" y="120" fill="#dc2626" font-size="12">&Delta;F<tspan baseline-shift="sub" font-size="9">m</tspan> = (1&minus;C)P</text>
  <text x="118" y="182" fill="#1d4ed8" font-size="12" font-weight="600">bolt (k<tspan baseline-shift="sub" font-size="9">b</tspan>)</text>
  <text x="300" y="168" fill="#334155" font-size="12" font-weight="600">members (k<tspan baseline-shift="sub" font-size="9">m</tspan>)</text>
  <text x="370" y="228" text-anchor="middle" fill="#64748b" font-size="12">deflection</text>
  <text x="200" y="246" text-anchor="middle" fill="#64748b" font-size="12">lose preload and the bolt sees the whole load range</text>
</svg>`;

const figPeen = `<svg viewBox="0 0 460 270" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="fa14-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Shot-peened surface: residual stress vs depth</text>
  <path d="M80,207 C110,214 128,218 144,218 C190,216 240,170 272,130 L80,130 Z" fill="#dbeafe" opacity="0.55"/>
  <line x1="80" y1="228" x2="80" y2="52" stroke="#64748b" stroke-width="1.5" marker-end="url(#fa14-ax)"/>
  <line x1="80" y1="228" x2="418" y2="228" stroke="#64748b" stroke-width="1.5" marker-end="url(#fa14-ax)"/>
  <line x1="80" y1="130" x2="412" y2="130" stroke="#64748b" stroke-width="1" stroke-dasharray="6 4"/>
  <path d="M80,207 C110,214 128,218 144,218 C190,216 240,170 272,130 C310,120 360,114 400,112" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <line x1="272" y1="130" x2="272" y2="228" stroke="#64748b" stroke-width="1" stroke-dasharray="4 4"/>
  <text x="74" y="90" text-anchor="end" fill="#64748b" font-size="12">+200</text>
  <text x="74" y="134" text-anchor="end" fill="#64748b" font-size="12">0</text>
  <text x="74" y="222" text-anchor="end" fill="#64748b" font-size="12">&minus;400</text>
  <text x="150" y="172" text-anchor="middle" fill="#334155" font-size="12" font-weight="600">compressive layer</text>
  <line x1="340" y1="150" x2="350" y2="118" stroke="#64748b" stroke-width="1"/>
  <text x="336" y="162" text-anchor="middle" fill="#64748b" font-size="12">balancing tension</text>
  <text x="278" y="222" fill="#64748b" font-size="12">layer about 0.3 mm deep</text>
  <text x="20" y="40" fill="#64748b" font-size="12">residual stress (MPa)</text>
  <text x="80" y="244" text-anchor="middle" fill="#64748b" font-size="12">0</text>
  <text x="144" y="244" text-anchor="middle" fill="#64748b" font-size="12">0.1</text>
  <text x="208" y="244" text-anchor="middle" fill="#64748b" font-size="12">0.2</text>
  <text x="272" y="244" text-anchor="middle" fill="#64748b" font-size="12">0.3</text>
  <text x="336" y="244" text-anchor="middle" fill="#64748b" font-size="12">0.4</text>
  <text x="400" y="244" text-anchor="middle" fill="#64748b" font-size="12">0.5</text>
  <text x="250" y="262" text-anchor="middle" fill="#64748b" font-size="12">depth below surface (mm)</text>
</svg>`;

const figCrackGrowth = `<svg viewBox="0 0 460 255" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="fa15-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Crack growth rate vs stress-intensity range</text>
  <line x1="70" y1="205" x2="70" y2="48" stroke="#64748b" stroke-width="1.5" marker-end="url(#fa15-ax)"/>
  <line x1="70" y1="205" x2="424" y2="205" stroke="#64748b" stroke-width="1.5" marker-end="url(#fa15-ax)"/>
  <line x1="96" y1="54" x2="96" y2="205" stroke="#64748b" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="340" y1="54" x2="340" y2="205" stroke="#64748b" stroke-width="1" stroke-dasharray="4 4"/>
  <path d="M96,196 C106,180 116,156 130,140 L296,88 C314,78 330,64 340,54" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <line x1="170" y1="128" x2="230" y2="128" stroke="#64748b" stroke-width="1"/>
  <line x1="230" y1="128" x2="230" y2="109" stroke="#64748b" stroke-width="1"/>
  <text x="236" y="122" fill="#64748b" font-size="12">m</text>
  <text x="112" y="120" text-anchor="middle" fill="#334155" font-size="12" font-weight="600">I</text>
  <text x="200" y="152" text-anchor="middle" fill="#334155" font-size="12" font-weight="600">II</text>
  <text x="318" y="134" text-anchor="middle" fill="#334155" font-size="12" font-weight="600">III</text>
  <text x="238" y="176" text-anchor="middle" fill="#1d4ed8" font-size="12">da/dN = C(&Delta;K)<tspan baseline-shift="super" font-size="9">m</tspan></text>
  <text x="96" y="220" text-anchor="middle" fill="#dc2626" font-size="12">&Delta;K<tspan baseline-shift="sub" font-size="9">th</tspan></text>
  <text x="340" y="220" text-anchor="middle" fill="#dc2626" font-size="12">K<tspan baseline-shift="sub" font-size="9">c</tspan></text>
  <text x="22" y="40" fill="#64748b" font-size="12">da/dN (log)</text>
  <text x="240" y="242" text-anchor="middle" fill="#64748b" font-size="12">&Delta;K (log scale)</text>
</svg>`;

const figGood3 = `<svg viewBox="0 0 460 265" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="fa16-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Three mean-stress criteria, one operating point</text>
  <line x1="70" y1="215" x2="70" y2="50" stroke="#64748b" stroke-width="1.5" marker-end="url(#fa16-ax)"/>
  <line x1="70" y1="215" x2="424" y2="215" stroke="#64748b" stroke-width="1.5" marker-end="url(#fa16-ax)"/>
  <text x="26" y="42" fill="#64748b" font-size="12">&sigma;<tspan baseline-shift="sub" font-size="9">a</tspan> (MPa)</text>
  <path d="M70,75 L78,75.1 L86,75.3 L94,75.8 L102,76.4 L110,77.2 L118,78.1 L126,79.3 L134,80.6 L142,82.1 L150,83.8 L158,85.6 L166,87.6 L174,89.8 L182,92.1 L190,94.7 L198,97.4 L206,100.3 L214,103.3 L222,106.6 L230,110 L238,113.6 L246,117.3 L254,121.3 L262,125.4 L270,129.7 L278,134.2 L286,138.8 L294,143.6 L302,148.6 L310,153.8 L318,159.1 L326,164.6 L334,170.3 L342,176.1 L350,182.2 L358,188.4 L366,194.8 L374,201.3 L382,208.1 L390,215" fill="none" stroke="#64748b" stroke-width="2"/>
  <line x1="70" y1="75" x2="390" y2="215" stroke="#dc2626" stroke-width="2.5"/>
  <line x1="70" y1="75" x2="283" y2="215" stroke="#334155" stroke-width="2" stroke-dasharray="7 4"/>
  <line x1="70" y1="215" x2="230" y2="110" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="5 4"/>
  <circle cx="177" cy="145" r="5.5" fill="#1d4ed8"/>
  <circle cx="198" cy="131" r="4.5" fill="#fff" stroke="#dc2626" stroke-width="2"/>
  <circle cx="230" cy="110" r="4.5" fill="#fff" stroke="#64748b" stroke-width="2"/>
  <line x1="140" y1="164" x2="172" y2="149" stroke="#64748b" stroke-width="1"/>
  <text x="110" y="176" text-anchor="middle" fill="#1d4ed8" font-size="12">operating point</text>
  <line x1="282" y1="56" x2="312" y2="56" stroke="#dc2626" stroke-width="2.5"/>
  <text x="318" y="60" fill="#dc2626" font-size="12">Goodman &nbsp;n = 1.20</text>
  <line x1="282" y1="78" x2="312" y2="78" stroke="#334155" stroke-width="2" stroke-dasharray="7 4"/>
  <text x="318" y="82" fill="#334155" font-size="12">Soderberg &nbsp;n = 1.00</text>
  <line x1="282" y1="100" x2="312" y2="100" stroke="#64748b" stroke-width="2"/>
  <text x="318" y="104" fill="#64748b" font-size="12">Gerber &nbsp;n = 1.50</text>
  <text x="80" y="64" fill="#dc2626" font-size="12">S<tspan baseline-shift="sub" font-size="9">e</tspan> = 240</text>
  <text x="283" y="231" text-anchor="middle" fill="#334155" font-size="12">S<tspan baseline-shift="sub" font-size="9">y</tspan> = 400</text>
  <text x="390" y="231" text-anchor="middle" fill="#dc2626" font-size="12">S<tspan baseline-shift="sub" font-size="9">ut</tspan> = 600</text>
  <text x="230" y="252" text-anchor="middle" fill="#64748b" font-size="12">mean stress &sigma;<tspan baseline-shift="sub" font-size="9">m</tspan> (MPa)</text>
</svg>`;

const extra: Question[] = [
  {
    id: "fatigue-q15",
    type: "mc",
    difficulty: 1,
    prompt: `<p>The figure overlays S-N data for a low-alloy steel and a 2024 aluminum on the same log axes. Your part has to reach 10<sup>9</sup> cycles. What does the shape difference tell you about picking an allowable stress?</p>`,
    figure: figSNAl,
    choices: [
      "Read the steel off its flat portion, but read the aluminum at the required 10<sup>9</sup> cycles",
      "Read both off their flat portions, since every structural metal flattens somewhere past 10<sup>7</sup>",
      "Use half the ultimate strength for both, which is what the flat portion of each curve equals",
      "Aluminum is unusable past 10<sup>7</sup> cycles, so the steel is the only real candidate here",
    ],
    answer: 0,
    explanation: `<p>The steel curve has a knee near 10<sup>6</sup> cycles and then runs flat, so one number covers every life beyond it. The aluminum curve has no knee at all: it keeps sloping down through 10<sup>8</sup> and 10<sup>9</sup>, so the allowable is a point on a falling line and you must name the life you are designing to.</p><p>Choice B is the single most common fatigue error in industry. The plateau is a ferrous phenomenon, tied to interstitial carbon and nitrogen locking dislocations. Choice C applies the 0.5S<sub>ut</sub> steel rule to aluminum, where it typically overpredicts by close to a factor of two. Choice D is defeatist: aluminum runs happily at very high cycle counts, just at a stress you have to look up rather than assume. Follow up by noting that no aluminum part truly has a "safe forever" stress, only a designed life and an inspection plan.</p>`,
  },
  {
    id: "fatigue-q16",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A tie rod of cross-sectional area 200 mm<sup>2</sup> carries a load that swings from 8 kN in compression to 32 kN in tension every machine cycle. What alternating stress amplitude does the fatigue check need?</p>`,
    answer: 100,
    unit: "MPa",
    tolerance: 0.03,
    explanation: `<p>Convert the loads to stresses first, keeping the sign:</p><p class="eq">&sigma;<sub>max</sub> = +160 MPa, &nbsp; &sigma;<sub>min</sub> = &minus;40 MPa</p><p class="eq">&sigma;<sub>a</sub> = (160 &minus; (&minus;40))/2 = <strong>100 MPa</strong></p><p>Drop the minus sign on the compressive end and you get 60 MPa, understating the amplitude by 40%. The mean is also 60 MPa, so this is a tensile-mean cycle at R = &minus;0.25 and it needs a mean-stress correction.</p>`,
  },
  {
    id: "fatigue-q17",
    type: "mc",
    difficulty: 1,
    prompt: `<p>Two machined steel links are tested. Link A cycles between &minus;100 and +100 MPa; link B cycles between 0 and +200 MPa. Which fatigue statement is defensible?</p>`,
    choices: [
      "They behave identically, because both swing through exactly 200 MPa of stress.",
      "Link B fails sooner, because it carries a +100 MPa tensile mean stress.",
      "Link A fails sooner, because compressive excursions open cracks faster.",
      "Neither can fail by fatigue, because the stress never becomes compressive twice.",
    ],
    answer: 1,
    explanation: `<p>Both links have exactly the same amplitude, &sigma;<sub>a</sub> = 100 MPa, and the same range, &Delta;&sigma; = 200 MPa. What differs is the mean: link A has &sigma;<sub>m</sub> = 0 (R = &minus;1) and link B has &sigma;<sub>m</sub> = +100 MPa (R = 0). Tensile mean stress holds small cracks open through more of each cycle, so link B fails first, typically a factor of two to five in life for this shift. That is exactly the effect Goodman, Soderberg and Gerber exist to quantify.</p><p>Choice A is the whole point: identical range is not identical damage. Choice C inverts the crack-closure physics. Compression closes cracks, it does not open them. Choice D is nonsense dressed as caution. Test link B at &minus;200 to 0 instead and you get the same range with a compressive mean, and now it outlasts link A.</p>`,
  },
  {
    id: "fatigue-q18",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A simply supported shaft carries a steady radial belt load while turning at constant speed. What stress history does a single material point on the shaft surface experience?</p>`,
    figure: figRotShaft,
    choices: [
      "Constant tension, because the belt pull that bends the shaft never changes",
      "A steady mean stress with a small ripple at the bearing ball-pass frequency",
      "Fully reversed bending, tension to compression once per revolution",
      "No net stress at all, since one revolution averages the bending moment to zero",
    ],
    answer: 2,
    explanation: `<p>The bending moment is fixed in space, but the material is not. A point on the surface travels from the tension side to the compression side and back once per revolution, so it sees &sigma;<sub>m</sub> = 0 and R = &minus;1: the most damaging ratio there is, generated by a load that never changes. At 1500 rpm that is 2.2 million cycles a day.</p><p>Choice A is the classic confusion between the stationary frame and the material frame. The load is steady, the stress at a point is not. Choice B describes a lightly loaded bearing, not bending. Choice D averages a quantity that must not be averaged; the whole point of fatigue is that the excursions matter, not their mean. Which is why shaft fatigue is checked with fully reversed bending plus whatever steady torsion is present, and why keyways and shoulders are so lethal here.</p>`,
  },
  {
    id: "fatigue-q19",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A 20 mm diameter shaft rotates under a steady bending moment of 45 N&middot;m. What fully reversed surface bending stress amplitude does a point on the shaft see? Use &sigma; = 32M/(&pi;d<sup>3</sup>).</p>`,
    answer: 57.3,
    unit: "MPa",
    tolerance: 0.03,
    explanation: `<p>The shaft rotates under a stationary moment, so the surface stress is fully reversed and its amplitude equals the static bending magnitude.</p><p class="eq">&sigma;<sub>a</sub> = 32M/(&pi;d<sup>3</sup>) = 32(45)/(&pi;(0.020)<sup>3</sup>) = <strong>57.3 MPa</strong></p><p>Substituting d = 20 rather than 0.020 shrinks the answer by 10<sup>9</sup>. A shoulder or keyway then multiplies this by K<sub>f</sub> while the finish factor cuts the strength you compare it against, which is how nominal-looking margins evaporate at real shaft details.</p>`,
  },
  {
    id: "fatigue-q20",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A shaft shoulder sees a nominal alternating stress of 70 MPa. The fatigue notch factor at that shoulder is K<sub>f</sub> = 1.8. What local alternating stress should the first fatigue check use?</p>`,
    answer: 126,
    unit: "MPa",
    tolerance: 0.03,
    explanation: `<p class="eq">&sigma;<sub>a,local</sub> = K<sub>f</sub> &sigma;<sub>a,nom</sub> = 1.8(70) = <strong>126 MPa</strong></p><p>The factor goes onto the stress rather than the strength, and onto the alternating component.</p><p>Two questions decide whether 126 MPa is trustworthy. Where did 1.8 come from, a K<sub>t</sub> chart plus notch sensitivity or test data for this radius and finish? And is the nominal 70 MPa computed on the reduced section at the shoulder or on the full diameter? The wrong section double-counts or misses a stress rise before K<sub>f</sub> is applied at all.</p>`,
  },
  {
    id: "fatigue-q21",
    type: "mc",
    difficulty: 1,
    prompt: `<p>An S-N test report marks five steel specimens as runouts at 10<sup>7</sup> cycles under 180 MPa alternating stress. What are you being told?</p>`,
    choices: [
      "Those five specimens fractured at almost exactly 10<sup>7</sup> cycles in the test.",
      "The load cell logged zero stress amplitude for those five test channels.",
      "Every future specimen of this steel will survive 180 MPa indefinitely.",
      "Those five tests were stopped at 10<sup>7</sup> cycles with no crack observed.",
    ],
    answer: 3,
    explanation: `<p>A runout is a censored data point: the machine was stopped at a preset cutoff and the specimen had not failed. It is genuine evidence and it is what an endurance limit is built from, but it is a lower bound on those five lives, not a measurement of them. Treating runouts as failures at the cutoff biases the fitted curve down; treating them as infinite biases it up. Statistically they must be handled as censored data.</p><p>Choice A is exactly the misreading the notation exists to prevent. Choice B invents an instrumentation fault. Choice C over-claims in the direction that gets parts cracked: five survivors at 10<sup>7</sup> in dry air at 50% survival says nothing about a rough, larger, corroded part at 99% reliability. The practical move is to keep the runout evidence, then apply the Marin factors and a reliability factor before quoting any design allowable.</p>`,
  },
  {
    id: "fatigue-q22",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A forklift mast weld accumulates D = 0.002 of Miner damage per representative shift. The customer runs two shifts a day, 250 days a year, and wants a five-year life. What does that number tell you?</p>`,
    choices: [
      "About 500 shifts reaches D = 1, roughly a year, so the design misses by 5&times;",
      "About 2,000 shifts reaches D = 1, which clears the five-year target comfortably",
      "Damage of 0.002 per shift is negligible, so no redesign is warranted",
      "Miner damage cannot be inverted, so no service life follows from it",
    ],
    answer: 0,
    explanation: `<p>Invert the per-shift damage: 1/0.002 = 500 shifts to D = 1. The duty is 2 &times; 250 = 500 shifts a year, so the weld reaches unit damage in about one year against a five-year requirement. Put the other way round, five years is 2,500 shifts, giving D = 2,500(0.002) = 5.0. The design is short by a factor of five in damage, which on a typical weld S-N slope of m = 3 means the stress range has to come down by about 40% (5<sup>1/3</sup> = 1.71).</p><p>Choice C is the seductive one: 0.002 looks tiny until it is multiplied by the cycle count the customer actually runs, which is the entire reason Miner exists. Choice D confuses "approximate" with "unusable". The honest caveats go with the answer: weld fatigue scatter is wide, the load measurement behind that 0.002 may be optimistic, and D = 1 is a nominal failure point, not a guarantee. Say the fix out loud. Lower the stress range, grind the toe, or move to a better detail category.</p>`,
  },
  {
    id: "fatigue-q23",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A broken crank arm shows smooth curved bands covering most of the fracture face and a small rough region at one edge. What does that surface tell you?</p>`,
    figure: figFrac,
    choices: [
      "A casting shrinkage cavity was present but never actually grew in service.",
      "Progressive fatigue crack growth, ending in overload of the last ligament.",
      "One ductile overload event, with no crack present before that final load.",
      "Corrosion attack alone, with the cyclic stress playing no part in the failure.",
    ],
    answer: 1,
    explanation: `<p>Smooth curved bands are beach marks: each one records a change in load level or a pause in service while the crack was advancing cycle by cycle. Because they are concentric about the origin, tracing their curvature backwards finds where the crack started, and it is nearly always at a notch, thread root, tool mark, pit or inclusion at the surface. The small rough zone is the final fast fracture, where the remaining area could no longer carry the peak load.</p><p>A pure ductile overload gives a uniformly fibrous face with shear lips and visible distortion, no beach marks. A casting cavity would show as a defect at the origin, not as bands across the whole face. Corrosion without cycling produces branched or intergranular cracking, not this pattern. One extra reading is free here: the fatigue zone dominating the face means the nominal stress was low, so the problem lives at the detail, not in the overall section size.</p>`,
  },
  {
    id: "fatigue-q24",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A solid round shaft 25 mm in diameter carries a fully reversed torque of &plusmn;80 N&middot;m. Estimate the alternating surface shear stress from &tau; = 16T/(&pi;d<sup>3</sup>).</p>`,
    answer: 26.1,
    unit: "MPa",
    tolerance: 0.03,
    explanation: `<p class="eq">&tau;<sub>a</sub> = 16T/(&pi;d<sup>3</sup>) = 16(80)/(&pi;(0.025)<sup>3</sup>) = <strong>26.1 MPa</strong></p><p>The &plusmn; already states the amplitude. Do not double it; you would only halve a stated range.</p><p>Before this meets an S<sub>e</sub> measured in bending it has to become an equivalent normal stress. Von Mises gives &radic;3 &tau;<sub>a</sub> = 45.2 MPa for pure torsion, so comparing 26.1 MPa directly is unconservative by &radic;3.</p>`,
  },
  {
    id: "fatigue-q25",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A steel with S<sub>ut</sub> = 900 MPa is used in the as-hot-rolled condition. The surface factor follows k<sub>a</sub> = a S<sub>ut</sub><sup>b</sup> with a = 57.7 and b = &minus;0.718 for hot-rolled surfaces (S<sub>ut</sub> in MPa). What surface factor applies?</p>`,
    answer: 0.437,
    tolerance: 0.03,
    explanation: `<p>Substitute directly:</p><p class="eq">k<sub>a</sub> = 57.7(900)<sup>&minus;0.718</sup> = 57.7(0.007566) = <strong>0.437</strong></p><p>That single factor throws away 56% of the endurance strength before any other correction. Run the same S<sub>ut</sub> through the machined constants (a = 4.51, b = &minus;0.265) and you get k<sub>a</sub> = 0.743; through the ground constants (a = 1.58, b = &minus;0.085) you get 0.886. So machining the critical diameter instead of leaving mill scale is worth a 70% increase in S<sub>e</sub>, and grinding on top of that adds another 19%.</p><p>Notice the exponent is negative and steeper for rougher finishes: <em>stronger</em> steels are punished harder by a bad surface, because a strong matrix converts a surface notch into crack initiation more readily. That is the reason specifying a 1400 MPa alloy and leaving it as-forged is usually a waste of money.</p>`,
  },
  {
    id: "fatigue-q26",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A steel bar of area 250 mm<sup>2</sup> carries a tensile load cycling from 5 kN to 45 kN. Its corrected endurance strength is S<sub>e</sub> = 210 MPa and S<sub>ut</sub> = 600 MPa. What Goodman fatigue safety factor does it have?</p>`,
    answer: 1.83,
    tolerance: 0.03,
    explanation: `<p>Get the stress components before touching Goodman:</p><p class="eq">&sigma;<sub>max</sub> = 45,000/(250 &times; 10<sup>&minus;6</sup>) = 180 MPa, &nbsp; &sigma;<sub>min</sub> = 5,000/(250 &times; 10<sup>&minus;6</sup>) = 20 MPa</p><p class="eq">&sigma;<sub>a</sub> = (180 &minus; 20)/2 = 80 MPa, &nbsp; &sigma;<sub>m</sub> = (180 + 20)/2 = 100 MPa</p><p class="eq">1/n = 80/210 + 100/600 = 0.3810 + 0.1667 = 0.5476</p><p class="eq">n = 1/0.5476 = <strong>1.83</strong></p><p>Feeding &sigma;<sub>max</sub> = 180 MPa into the amplitude slot gives 1/n = 1.024 and a fictitious n = 0.98, and swapping the amplitude and mean terms gives 1/n = 80/600 + 100/210 = 0.610 and n = 1.64. The amplitude always divides by S<sub>e</sub> and the mean always divides by the strength intercept. The amplitude term is more than twice the mean term, so effort spent reducing the load swing beats effort spent reducing the preload or dead weight.</p>`,
  },
  {
    id: "fatigue-q27",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A fatigue calculation currently uses S<sub>e</sub> = 280 MPa, which came from a mean S-N curve at 50% survival. Program safety requires 99.9% survival, for which the reliability factor is k<sub>e</sub> = 0.753. What endurance strength should the check use?</p>`,
    answer: 211,
    unit: "MPa",
    tolerance: 0.03,
    explanation: `<p>The reliability factor multiplies straight in:</p><p class="eq">S<sub>e,99.9%</sub> = k<sub>e</sub>S<sub>e</sub> = 0.753(280) = <strong>211 MPa</strong></p><p>That is a 25% cut for nothing but a change in how much scatter you are willing to absorb, which is exactly the point. Fatigue life at a given stress scatters by a factor of three or more between nominally identical specimens, so a mean curve is a coin flip by construction. The factor comes from the standard deviation of the endurance limit, taken as about 8% of the mean: k<sub>e</sub> = 1 &minus; 0.08z, and z = 3.091 for 99.9% gives 0.753.</p><p>The interpretation is where this gets misused. It is a survival probability for the fatigue strength distribution, not a system reliability, and it does not cover load uncertainty at all. That belongs in the applied stress side. Stacking a large load factor and a 99.9% reliability factor and a Goodman conservatism gives a part nobody can afford.</p>`,
  },
  {
    id: "fatigue-q28",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A polished rotating-beam value of 500 MPa becomes a corrected S<sub>e</sub> of 190 MPa on the real shaft. One correction did most of the damage. Which is it, and what is the cheap recovery?</p>`,
    choices: [
      "The size factor, and the only recovery is to reduce the shaft diameter.",
      "The surface factor, and grinding the critical fillet recovers much of it.",
      "The temperature factor, since the shaft runs at 60 &deg;C in an enclosed gearbox.",
      "The loading factor, because bending always costs about half the specimen value.",
    ],
    answer: 1,
    explanation: `<p>Work the chain. Size on a 50 mm shaft is about 0.85, loading in bending is 1.0, temperature at 60 &deg;C is 1.0, and 99% reliability is 0.814. Those alone give 0.69, so 500 becomes 345 MPa. Getting down to 190 needs another factor of 0.55. That is the surface term, consistent with a hot-rolled or coarsely machined finish. Surface is almost always the biggest bite and almost always the cheapest to change: grinding one fillet moves k<sub>a</sub> from roughly 0.55 to 0.89 and lifts S<sub>e</sub> to about 305 MPa for a few minutes of machine time and no drawing rework anywhere else.</p><p>Size is real but modest and is fixed by the architecture. Temperature does nothing for steel until a few hundred degrees. And the loading factor is 1.0 in bending by definition. The 0.85 penalty belongs to axial loading, where there is no stress gradient for a surface flaw to hide behind. That distractor is the one candidates fall for most often.</p>`,
  },
  {
    id: "fatigue-q29",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>The histogram gives the load spectrum a wing fitting sees in one flight. The corrected endurance limit is S<sub>e</sub> = 60 MPa. Using Miner's rule, how many flights does this spectrum need to reach D = 1?</p>`,
    figure: figSpec,
    answer: 2780,
    unit: "flights",
    tolerance: 0.04,
    explanation: `<p>The 5,000 cycles at 50 MPa sit below the 60 MPa corrected endurance limit, so in the simple Miner form they contribute nothing. Sum the other three:</p><p class="eq">D<sub>flight</sub> = 1/(2&times;10<sup>4</sup>) + 30/(2&times;10<sup>5</sup>) + 400/(2.5&times;10<sup>6</sup>)</p><p class="eq">= 5.00&times;10<sup>&minus;5</sup> + 1.50&times;10<sup>&minus;4</sup> + 1.60&times;10<sup>&minus;4</sup> = 3.60&times;10<sup>&minus;4</sup></p><p class="eq">flights to D = 1: 1/(3.60&times;10<sup>&minus;4</sup>) = 2778 &asymp; <strong>2,780 flights</strong></p><p>Look at the damage split: 14% from the single ground-air-ground cycle, 42% from thirty gust cycles, 44% from four hundred smaller ones, and 0% from the five thousand smallest. No block dominates, which means no single load reduction fixes this, and it also means the answer is extremely sensitive to where S<sub>e</sub> lands. Add a notch or corrosion that drops the effective S<sub>e</sub> to 45 MPa and those 5,000 cycles come back and cut the life by more than half.</p>`,
  },
  {
    id: "fatigue-q30",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A qualification spectrum applies one large overload followed by many small cycles. Miner's rule predicts D = 0.7 for the full test, yet the part cracks well before the test ends. Which limitation best explains the miss?</p>`,
    choices: [
      "Miner's rule needs constant amplitude and cannot add damage fractions.",
      "Miner's rule only applies when every cycle is below the endurance limit.",
      "Miner's rule is order-blind, and an overload can start or alter crack growth.",
      "Miner's rule predicts failure only when the damage sum reaches exactly zero.",
    ],
    answer: 2,
    explanation: `<p>Linear damage summation treats the history as a bag of cycles with no order. Real fatigue is path dependent. A large tensile overload can plastically damage the notch root and start a crack that the small cycles then propagate, which is what happened here. Interestingly the same overload can also help: the plastic zone it leaves behind can put the crack tip into residual compression and <em>retard</em> subsequent growth, which is why fleet spectra sometimes outlive the prediction. Either way, D at failure is not reliably 1. Observed values scatter from roughly 0.3 to 3.</p><p>Choice A is backwards; summing fractions across levels is precisely what the rule does. Choice B inverts the endurance-limit condition, since sub-limit cycles are the ones excluded. Choice D misstates the criterion. The engineering response is not to abandon Miner but to bound it: run spectrum tests in service order, and back the result with an inspection interval derived from crack growth.</p>`,
  },
  {
    id: "fatigue-q31",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A suspension control arm returns from a proving ground with an irregular strain-time record full of reversals of every size. What must happen to that record before any S-N damage calculation?</p>`,
    choices: [
      "Average every reading into one representative constant stress level and count it",
      "Keep the single largest peak in the record and discard every smaller reversal",
      "Convert the whole record into a static yield check at the maximum measured strain",
      "Cycle count it, normally by rainflow, into closed stress ranges and counts",
    ],
    answer: 3,
    explanation: `<p>An S-N curve is indexed by (range, count) pairs, and a raw time history contains neither until you extract them. Rainflow counting walks the reversal sequence and pairs each small excursion with the larger one that encloses it, producing closed hysteresis loops, which is exactly what the material sees. Only then can each range be looked up on the S-N curve and summed with Miner.</p><p>Averaging destroys the information that matters, since damage goes roughly as the range to a power of three to ten, so a few large cycles outweigh thousands of average ones. Keeping only the peak throws away the mid-size cycles that usually dominate the damage sum. A static yield check answers a different question entirely. Two details worth naming: rainflow also returns the mean of each cycle, which you need for the mean-stress correction, and the largest cycle still matters separately for overload and residual stress even though it is only one count.</p>`,
  },
  {
    id: "fatigue-q32",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A shoulder fillet with a 0.5 mm root radius has K<sub>t</sub> = 2.8. The steel has a Peterson constant a = 0.25 mm, so q = 1/(1 + a/r). What fatigue notch factor applies at that fillet?</p>`,
    figure: figQrad,
    answer: 2.2,
    tolerance: 0.03,
    explanation: `<p>Get the notch sensitivity from the radius first, then apply it:</p><p class="eq">q = 1/(1 + a/r) = 1/(1 + 0.25/0.5) = 1/1.5 = 0.667</p><p class="eq">K<sub>f</sub> = 1 + q(K<sub>t</sub> &minus; 1) = 1 + 0.667(2.8 &minus; 1) = 1 + 1.20 = <strong>2.20</strong></p><p>Read the direction off the curve: q rises with radius. A 0.5 mm radius is on the steep low-q part, so the material only realises about two thirds of the elastic concentration and K<sub>f</sub> lands well below K<sub>t</sub> = 2.8. Shrink the radius to 0.25 mm and q drops to 0.50, which is the point candidates get backwards. Sharper notches are <em>less</em> notch sensitive, and as r goes to zero, q goes to zero and K<sub>f</sub> goes to 1.</p><p>None of that makes the sharp fillet safe, because K<sub>t</sub> is climbing much faster than q is falling. Using K<sub>t</sub> = 2.8 directly is conservative by 27%; using 1.0 pretends the shoulder is not there.</p>`,
  },
  {
    id: "fatigue-q33",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>The same shoulder is reworked from a 0.5 mm to a 3.0 mm fillet radius. That drops K<sub>t</sub> from 2.8 to 1.8, while notch sensitivity rises from q = 0.67 to q = 0.92 (Peterson constant a = 0.25 mm). What is the new fatigue notch factor?</p>`,
    figure: figFillet,
    answer: 1.74,
    tolerance: 0.03,
    explanation: `<p>Check the notch sensitivity first, since it moves the wrong way for the answer:</p><p class="eq">q = 1/(1 + 0.25/3.0) = 1/1.0833 = 0.923</p><p class="eq">K<sub>f</sub> = 1 + 0.923(1.8 &minus; 1) = 1 + 0.738 = <strong>1.74</strong></p><p>This is the whole point of the question. Opening the radius makes the material <em>more</em> notch sensitive, q goes from 0.67 to 0.92, a 38% rise, and K<sub>f</sub> still falls from 2.20 to 1.74, a 21% cut in local alternating stress, because K<sub>t</sub> fell by 36% and that term dominates. Anyone who reasons "bigger radius, higher q, therefore worse" has the arithmetic right and the conclusion backwards.</p><p>Translate it into life. On a typical S-N slope of b = &minus;0.11, a 21% stress reduction multiplies life by (1/0.79)<sup>1/0.11</sup>, roughly a factor of eight. That is why opening a fillet is the first and cheapest fatigue fix, ahead of material upgrades and ahead of adding section.</p>`,
  },
  {
    id: "fatigue-q34",
    type: "mc",
    difficulty: 2,
    prompt: `<p>Reading the notch-sensitivity chart, a designer argues that the sharpest notch is the worst because it has the highest notch sensitivity. Where does that reasoning go wrong?</p>`,
    figure: figQrad,
    choices: [
      "Nothing is wrong; q does climb as the radius shrinks, which is why sharp is worse.",
      "q falls as the radius shrinks, so K<sub>f</sub> trails K<sub>t</sub>; sharp is still worse via K<sub>t</sub>.",
      "q depends only on material strength, so the root radius never enters the curve.",
      "q climbs with radius, so the blunt notch ends up with the higher K<sub>f</sub> and shorter life.",
    ],
    answer: 1,
    explanation: `<p>The conclusion is right and the reason is inverted. Notch sensitivity is q = 1/(1 + a/r), so it <em>rises</em> with root radius: with a = 0.25 mm, r = 0.25 mm gives q = 0.50 and r = 2.5 mm gives q = 0.91. As r goes to zero, q goes to zero and K<sub>f</sub> goes to 1. Physically, a very sharp notch has such a steep stress gradient that only a few grains ever see the elastic peak, and a crack needs a finite volume of highly stressed material to nucleate in.</p><p>Sharp notches are still worse, but through K<sub>t</sub>, which climbs roughly as 1/&radic;r and therefore outruns the falling q. Choice D is what catches anyone who fixes the q direction but forgets that K<sub>t</sub> is also moving, a blunt notch has the higher q and the lower K<sub>f</sub>. Choice C misses that a is the material term and r is the geometry term. The design consequence stands unchanged: open the radius.</p>`,
  },
  {
    id: "fatigue-q35",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A welded bracket is upgraded from S275 to S690 plate to fix a fatigue problem, and it still cracks at the weld toe during vibration testing. Why did the stronger parent metal buy so little?</p>`,
    figure: figWeld,
    choices: [
      "Weld fatigue strength is set by the static yield strength of the parent plate",
      "High-strength steels cannot be welded at all in cyclically loaded structures",
      "Vibration loading does not produce fatigue damage in a properly welded assembly",
      "Toe geometry, tensile residual stress and defects govern it, not S<sub>ut</sub>",
    ],
    answer: 3,
    explanation: `<p>Welded joints are classified by detail category, and the categories are essentially independent of parent strength. Three things dominate: the sharp re-entrant geometry at the toe, which gives a high K<sub>t</sub> regardless of alloy; the tensile residual stress left by weld shrinkage, which is often near yield and pushes the local mean stress to the top of the Goodman line no matter what the applied mean is; and defects such as undercut and lack of fusion, which act as pre-existing cracks so that most of the life is growth rather than initiation. If the life is spent growing a crack, S<sub>ut</sub> barely enters. Crack growth rates in steels are remarkably insensitive to strength.</p><p>The fixes that do work attack those three: toe grinding or TIG dressing to blend the geometry, hammer or needle peening to replace residual tension with compression, better fit-up and inspection, and above all a lower stress range or a better detail. Upgrading parent steel improves the static case and almost nothing else.</p>`,
  },
  {
    id: "fatigue-q36",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A fillet-welded attachment on a steel beam cracks at the weld toe. Four remedies cost about the same. Which one attacks both of the things that actually control weld-toe fatigue?</p>`,
    figure: figWeld,
    choices: [
      "Upgrade the plate to a higher-strength grade and keep the same weld profile",
      "Increase the fillet leg length by 50% without changing the toe angle at all",
      "Grind the toe to a smooth radius, then peen it into local compression",
      "Specify a tighter root gap so that the weld root fuses more completely",
    ],
    answer: 2,
    explanation: `<p>Weld-toe fatigue is controlled by the toe geometry and by the near-yield tensile residual stress left there. Toe grinding blends the sharp re-entrant angle into a radius, cutting K<sub>t</sub> and removing the undercut and slag intrusions that sit exactly at the toe. Hammer or needle peening then replaces the residual tension with compression. Doing both typically moves a joint up two detail categories, worth a factor of two or more in allowable stress range and much more in life, and each is a shop-floor operation, not a redesign.</p><p>A stronger plate does nothing for the detail category. A longer leg adds weight and metal without changing the toe angle, so the notch stays and the residual stress may get worse. A tighter root gap addresses the root, which matters for a partial-penetration joint loaded through the throat, but this crack is at the toe. The follow-up is to ask what happens if the part later runs hot: peening residual stress relaxes with temperature, so the grinding half survives and the peening half does not.</p>`,
  },
  {
    id: "fatigue-q37",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A preloaded bolt in a stiff joint takes 25% of any external separating load, the members taking the rest. The external load cycles from 0 to 8 kN and the bolt tensile stress area is 58 mm<sup>2</sup>. What stress amplitude does the bolt see?</p>`,
    figure: figBolt,
    answer: 17.2,
    unit: "MPa",
    tolerance: 0.03,
    explanation: `<p>While the joint stays closed, the bolt only picks up the stiffness fraction C of the external load change:</p><p class="eq">&Delta;F<sub>b</sub> = C&Delta;P = 0.25(8,000) = 2,000 N, so F<sub>a</sub> = 2,000/2 = 1,000 N</p><p class="eq">&sigma;<sub>a</sub> = 1,000/(58 &times; 10<sup>&minus;6</sup>) = 1.72 &times; 10<sup>7</sup> Pa = <strong>17.2 MPa</strong></p><p>Putting the full 8 kN range through the bolt gives 69.0 MPa, four times too high and enough to condemn a perfectly good joint. Forgetting to halve the range to get an amplitude is the other half of it.</p><p>C comes from the stiffnesses, C = k<sub>b</sub>/(k<sub>b</sub> + k<sub>m</sub>), and clamped steel members are typically three to six times stiffer than the bolt, so C of 0.15 to 0.30 is normal. A soft gasket drives C up and the bolt amplitude with it. And all of this holds only while preload keeps the joint closed; once it separates, the bolt takes the entire external range.</p>`,
  },
  {
    id: "fatigue-q38",
    type: "mc",
    difficulty: 2,
    prompt: `<p>Raising the preload on a bolted joint raises the bolt's mean stress, yet the joint's fatigue life goes up. What is the mechanism?</p>`,
    figure: figBolt,
    choices: [
      "Preload keeps the joint closed, so the bolt sees only the fraction C of the range",
      "Preload work hardens the thread roots, raising the bolt's own fatigue strength",
      "Preload cancels the external load, leaving the bolt no alternating stress at all",
      "Preload pre-stretches the bolt, lowering its mean stress under load",
    ],
    answer: 0,
    explanation: `<p>While the joint is clamped, an external load is shared: the bolt stretches a little more and the members decompress a little, so the bolt takes only C&Delta;P with C typically 0.15 to 0.30. The moment preload is lost and the faces separate, that sharing stops and the bolt sees the whole external range, a jump of three to six times in alternating stress, which is what kills bolts. Higher preload simply raises the load level at which separation happens.</p><p>So the tradeoff is real but lopsided: preload does raise &sigma;<sub>m</sub>, and Goodman does penalise that, but the penalty is linear in the mean while the benefit is a multiplier on the amplitude. Amplitude wins, which is why the standard practice is to preload to 75&ndash;90% of proof strength.</p><p>Choice B invents a strength change. Choice C over-claims. The bolt still cycles, just by less. Choice D has the sign backwards: preload raises the bolt's mean stress, it does not lower it. Follow-up worth volunteering: lower C by making the members stiffer or the bolt longer and more compliant.</p>`,
  },
  {
    id: "fatigue-q39",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A press-fit hub on a shaft develops cracks right at the edge of the fit after many small torque reversals, and there is reddish-brown debris at the interface. What should be top of your list?</p>`,
    choices: [
      "Creep rupture, since the shaft carries a constant stress at room temperature",
      "Fretting fatigue from micro-slip, debris and contact stress at the fit edge",
      "Hydrodynamic lubrication breakdown, confined to the middle of the fit length",
      "Elastic buckling of the shaft wall under the radial pressure applied by the hub",
    ],
    answer: 1,
    explanation: `<p>Reddish-brown debris at a clamped interface is the signature: fretting produces fine iron oxide powder, sometimes called cocoa. The mechanism is micro-slip of a few microns at a contact that is nominally fixed. The relative motion strips the protective oxide film, the freshly exposed metal re-oxidises, the hard debris abrades further, and the combination of surface damage and high contact stress produces cracks at a fraction of the plain fatigue strength, knockdowns of two to five are normal.</p><p>Fretting concentrates at the <em>edge</em> of the contact, where the slip amplitude peaks, which is exactly where these cracks are. Press-fit hub ends, spline ends, dovetail roots and bolted lap faces are the classic sites. Room-temperature steel does not creep, lubrication is not the issue in a dry interference fit, and a solid shaft has nothing to buckle. Fixes: relieve the hub bore at the ends so the pressure tapers off, increase interference so slip stops entirely, add a compliant or lubricious interlayer, peen the shaft under the fit, or cut the alternating torque.</p>`,
  },
  {
    id: "fatigue-q40",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A stainless pump shaft passes a dry bench endurance test but cracks within weeks in warm chlorinated water at the same stress level. What mechanism do you suspect first?</p>`,
    choices: [
      "The water cools the shaft, so thermal fatigue from the temperature swing dominates.",
      "Corrosion fatigue: pits act as crack starters and the environment speeds growth.",
      "Cavitation erosion at the impeller, which is cosmetic and unrelated to the cracks.",
      "The water lubricates the bearings, so a misalignment bending load has appeared.",
    ],
    answer: 1,
    explanation: `<p>Warm chlorinated water breaks down the passive film on stainless steel locally, and the resulting pits are sharp, deep and exactly at the surface where fatigue cracks start. Each one is a ready-made notch. Once a crack exists the environment keeps working at the tip, so growth per cycle is faster than in air. The two effects together routinely halve the fatigue strength and it <strong>erases the endurance limit entirely</strong>: an S-N curve measured in a corrosive medium keeps sloping down with no knee, so a dry-air runout at 10<sup>7</sup> cycles proves nothing about service.</p><p>That is why the bench test passed. It is also why the fix is rarely just a bigger shaft: consider a more resistant alloy such as a duplex or super-austenitic grade, a coating or sleeve at the wetted section, cathodic protection where the system allows it, better water chemistry control, a finer surface finish so there are fewer pit initiation sites, and testing in representative fluid. Frequency matters too. Corrosion fatigue is time dependent, so a fast bench test is unconservative even in the right fluid.</p>`,
  },
  {
    id: "fatigue-q41",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A shot-peened bracket surface carries a residual stress of &minus;250 MPa. The applied cycle at that surface is &sigma;<sub>a</sub> = 95 MPa with an applied mean of &sigma;<sub>m</sub> = 140 MPa, and S<sub>e</sub> = 210 MPa with S<sub>ut</sub> = 600 MPa. What fatigue safety factor should you report?</p>`,
    figure: figPeen,
    answer: 2.21,
    tolerance: 0.03,
    explanation: `<p>Residual stress adds to the applied mean, so combine them first:</p><p class="eq">&sigma;<sub>m,total</sub> = 140 + (&minus;250) = &minus;110 MPa</p><p>The total mean is compressive. Standard practice is to take no credit for a negative mean rather than let the Goodman term go negative and inflate the answer, so set the mean term to zero:</p><p class="eq">n = S<sub>e</sub>/&sigma;<sub>a</sub> = 210/95 = <strong>2.21</strong></p><p>Compare with the number you get if you ignore the peening: 1/n = 95/210 + 140/600 = 0.686, n = 1.46. The peening is worth 51% more margin, which is what buys the process its place on the drawing.</p><p>Say the caveats, because this is where the interview goes. The &minus;250 MPa lives in a layer only 0.1&ndash;0.3 mm deep, so it protects initiation and does very little for a crack that is already through it. It relaxes at temperature and under overload. And any finishing cut after peening removes the layer along with the benefit.</p>`,
  },
  {
    id: "fatigue-q42",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A vendor shot peens a gear tooth root to a depth of 0.25 mm, then finish-grinds 0.15 mm off the flank and root to bring the profile into tolerance. What has that done to the fatigue benefit?</p>`,
    figure: figPeen,
    choices: [
      "Nothing, because residual stress is a bulk property that grinding cannot change.",
      "Improved it, because grinding smooths the peened surface and lowers K<sub>t</sub>.",
      "Removed most of it, and grinding heat can leave the new surface in tension.",
      "Doubled it, because grinding is itself a cold-working process at the surface.",
    ],
    answer: 2,
    explanation: `<p>The compressive layer is thin and its peak sits close to the surface. Taking 0.15 mm off a 0.25 mm layer removes the most useful part and leaves a weak remnant. Worse, abusive grinding generates enough local heat to produce tempering or untempered martensite and can leave the fresh surface in residual <em>tension</em> of several hundred MPa, so the operation can end up net negative rather than merely neutral.</p><p>Choice A is the conceptual error worth naming: residual stress is a depth-dependent field in a self-equilibrating layer, not a bulk material property, so machining it away is exactly what happens. Choice B confuses roughness with residual stress; peened surfaces are rougher, and they win anyway, which tells you which effect dominates. The process rule is simple and gets written on drawings: <strong>peen last</strong>. If the profile has to be ground for accuracy, grind first and peen afterwards, or specify gentle grinding parameters plus a residual stress check on first articles.</p>`,
  },
  {
    id: "fatigue-q43",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A rolling bearing inner race develops small pits that grow into spalls, even though the bulk hoop and bending stress in the ring is low. Which fatigue mode fits?</p>`,
    choices: [
      "Thermal fatigue driven by a uniform temperature swing across the whole ring.",
      "Goodman mean-stress failure of the ring under steady axial tension.",
      "Rolling contact fatigue from repeated Hertzian contact as elements pass.",
      "Low-cycle strain fatigue caused by ring ovalisation during press-fit assembly.",
    ],
    answer: 2,
    explanation: `<p>Each rolling element passing a point on the race applies a Hertzian pressure field. The maximum alternating shear stress sits a small distance <em>below</em> the surface, roughly 0.5 times the contact half-width, which is why classic subsurface-initiated spalling starts as a crack under the raceway that then works its way up and lifts a flake off. Surface-initiated spalling happens instead when the lubricant film is thin, when there is contamination denting the race, or when the finish is poor. Either way a nominal ring-stress calculation sees none of it.</p><p>This is high-cycle fatigue with an enormous cycle count, a bearing at 3,000 rpm with ten elements loads each point on the inner race a few hundred times a second, of order 10<sup>6</sup> stress cycles per hour, which is why L10 life is quoted statistically rather than as a stress margin. The levers are contact geometry and conformity, steel cleanliness, case hardness and depth, compressive residual stress, film thickness (the lambda ratio), contamination control, alignment and preload. Gear tooth flanks pit by the same mechanism.</p>`,
  },
  {
    id: "fatigue-q44",
    type: "mc",
    difficulty: 2,
    prompt: `<p>Two shafts of the same alloy and diameter have failed. Face A has a fatigue zone covering about 85% of the section; face B's fatigue zone covers about 15%. What does that tell you about the loads?</p>`,
    figure: figFracRatio,
    choices: [
      "A ran at a low nominal stress and B ran at a high one, relative to their strength.",
      "A ran at a high nominal stress and B ran at a low one, relative to their strength.",
      "A failed by fatigue while B failed by a single static overload with no cycling.",
      "A simply spent longer in service, so its crack had more time to spread across.",
    ],
    answer: 0,
    explanation: `<p>Final fracture happens when the remaining ligament can no longer carry the peak load. A high load needs a large remaining area to hold it, so it breaks early and leaves a big rough overload zone and a small fatigue zone. A low load lets the crack eat 85% of the section before the remnant gives up. Reading the ratio is therefore a direct measurement of how hard the part was working, and it is the first thing an experienced failure analyst does with a fracture face.</p><p>The design conclusion differs completely between the two. Face A says the section is adequately sized and the problem is local, a notch, a finish, a weld toe, so fix the detail. Face B says the part was running near its static capacity, so the section or the material has to change and detail fixes will only buy a little. Choice C misreads B, which still shows a fatigue zone. Choice D confuses elapsed time with load level: the zone ratio is set by stress, not by how many months the crack took to get there.</p>`,
  },
  {
    id: "fatigue-q45",
    type: "mc",
    difficulty: 2,
    prompt: `<p>The fracture face of a keyed shaft shows a row of small steps along one edge, each leading into its own set of curved bands. What do those steps tell you?</p>`,
    figure: figFrac,
    choices: [
      "The crack front halted and restarted every time the machine was shut down",
      "A worn cutting tool left machining steps along the surface before service",
      "Many separate cracks started along that edge and later merged into one",
      "A bending moment displaced the final overload zone toward that same edge",
    ],
    answer: 2,
    explanation: `<p>Those are ratchet marks. Several cracks nucleate at slightly different heights along an edge, each grows on its own plane, and where two neighbouring fronts meet they leave a small step. The count matters: one origin points to a single defect, while a whole row means the entire edge was above the initiation threshold. That in turn means a severe stress concentration or a high surface stress. On a keyed shaft, a square-ended keyseat corner is the usual culprit.</p><p>Choice A describes beach marks, which are the curved bands, not the steps; keeping the two straight is a standard interview discriminator. Choice B confuses a manufacturing artefact with a fracture feature, though a bad machining finish may well be the cause of the multiple origins. Choice D describes how the final zone shifts off-centre under bending, which is a different reading of the same face.</p><p>The design response follows from the count: a single origin means find and remove that one defect, while a row of them means the detail itself is wrong. Radius the keyseat ends, use a sled-runner profile, or move to a spline or shrink fit.</p>`,
  },
  {
    id: "fatigue-q46",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A failure lab reports fatigue striations spaced 1.0 &times; 10<sup>&minus;7</sup> m apart in the mid-life region of a fracture. The steel follows da/dN = C(&Delta;K)<sup>m</sup> with C = 6.9 &times; 10<sup>&minus;12</sup> and m = 3.0 in units of m/cycle and MPa&radic;m. What &Delta;K was acting there?</p>`,
    answer: 24.4,
    unit: "MPa*sqrt(m)",
    tolerance: 0.03,
    explanation: `<p>In the Paris regime one striation is one cycle, so the spacing is the local growth rate: da/dN = 1.0 &times; 10<sup>&minus;7</sup> m/cycle. Invert the Paris law:</p><p class="eq">&Delta;K = (da/dN / C)<sup>1/m</sup> = (1.0&times;10<sup>&minus;7</sup> / 6.9&times;10<sup>&minus;12</sup>)<sup>1/3</sup></p><p class="eq">= (1.449 &times; 10<sup>4</sup>)<sup>1/3</sup> = <strong>24.4 MPa&radic;m</strong></p><p>That is a genuinely useful piece of forensic engineering: from one SEM measurement you recover the stress-intensity range the part was running at, and with &Delta;K = Y&Delta;&sigma;&radic;(&pi;a) and a measured crack length you can back out the stress range the part actually saw, often the only way to prove the service loads exceeded the design spectrum.</p><p>Two caveats to state. Striations are a micron-scale SEM feature and are not the same thing as macroscopic beach marks, which each cover thousands of cycles. And striation counting under-reports life, because near threshold the growth per cycle is smaller than one visible striation and many alloys do not form clean striations at all.</p>`,
  },
  {
    id: "fatigue-q47",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>An inspection finds an edge crack of length a = 2.0 mm in a plate running at a stress range of &Delta;&sigma; = 80 MPa. Taking the geometry factor Y = 1.1, what is &Delta;K = Y&Delta;&sigma;&radic;(&pi;a)?</p>`,
    answer: 6.98,
    unit: "MPa*sqrt(m)",
    tolerance: 0.03,
    explanation: `<p>Convert the crack length to metres before anything else. That is the entire question.</p><p class="eq">a = 2.0 mm = 0.0020 m</p><p class="eq">&radic;(&pi;a) = &radic;(0.006283) = 0.07927</p><p class="eq">&Delta;K = 1.1(80)(0.07927) = <strong>6.98 MPa&radic;m</strong></p><p>Leaving a in millimetres inflates &Delta;K by &radic;1000 = 31.6, giving 221 MPa&radic;m and a panicked call to replace a perfectly serviceable part.</p><p>Now interpret it. Long-crack thresholds for structural steels sit around 5&ndash;8 MPa&radic;m at R = 0, so 6.98 is right on the threshold: the crack may be growing very slowly or barely at all, and a small stress reduction could stop it. That is a much better answer than a number alone. The next questions are what &Delta;K<sub>th</sub> is for this material at this R ratio, and what &Delta;K becomes when the crack doubles. It goes as &radic;a, so 4 mm gives 9.87 MPa&radic;m and the growth is clearly established.</p>`,
  },
  {
    id: "fatigue-q48",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A crack grows from a = 2.0 mm to a critical 10.0 mm under &Delta;&sigma; = 80 MPa with Y = 1.1 constant. The material follows da/dN = 3.0 &times; 10<sup>&minus;12</sup>(&Delta;K)<sup>3</sup> in m/cycle and MPa&radic;m. How many cycles does that take?</p>`,
    figure: figCrackGrowth,
    answer: 2170000,
    unit: "cycles",
    tolerance: 0.05,
    explanation: `<p>Substitute &Delta;K = Y&Delta;&sigma;&radic;(&pi;a) into the Paris law and separate variables. With m = 3 the crack length appears as a<sup>3/2</sup>:</p><p class="eq">N = &int; da / [C(Y&Delta;&sigma;)<sup>3</sup>&pi;<sup>3/2</sup>a<sup>3/2</sup>] = 2(a<sub>0</sub><sup>&minus;1/2</sup> &minus; a<sub>c</sub><sup>&minus;1/2</sup>) / [C(Y&Delta;&sigma;)<sup>3</sup>&pi;<sup>3/2</sup>]</p><p class="eq">denominator = 3.0&times;10<sup>&minus;12</sup>(1.1&times;80)<sup>3</sup>(5.568) = 3.0&times;10<sup>&minus;12</sup>(681,472)(5.568) = 1.138&times;10<sup>&minus;5</sup></p><p class="eq">numerator = 2(0.0020<sup>&minus;1/2</sup> &minus; 0.0100<sup>&minus;1/2</sup>) = 2(22.36 &minus; 10.00) = 24.72</p><p class="eq">N = 24.72/1.138&times;10<sup>&minus;5</sup> = <strong>2.17 &times; 10<sup>6</sup> cycles</strong></p><p>The a<sup>&minus;1/2</sup> form shows where the life lives: 22.36 versus 10.00 means the first couple of millimetres of growth consume most of the cycles, and the last few millimetres go almost instantly. Doubling the detectable crack size from 2 to 4 mm would cut the remaining life from 2.17 to 1.0 million cycles, which is why NDT capability, not toughness, usually sets the inspection interval.</p>`,
  },
  {
    id: "fatigue-q49",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A crack becomes critical when K<sub>max</sub> reaches K<sub>IC</sub>. For K<sub>IC</sub> = 50 MPa&radic;m, Y = 1.12 and &sigma;<sub>max</sub> = 240 MPa, estimate the critical crack length from a<sub>c</sub> = (K<sub>IC</sub>/(Y&sigma;<sub>max</sub>))<sup>2</sup>/&pi;.</p>`,
    answer: 11,
    unit: "mm",
    tolerance: 0.03,
    explanation: `<p>Keep the stress in MPa so K stays in MPa&radic;m and the length comes out in metres.</p><p class="eq">a<sub>c</sub> = (50/(1.12 &times; 240))<sup>2</sup>/&pi; = (0.18601)<sup>2</sup>/&pi; = <strong>11.0 mm</strong></p><p>This is a fracture limit, not a life. It says nothing about how long the crack takes to get there, and it is a strong function of stress: a<sub>c</sub> goes as 1/&sigma;<sup>2</sup>, so a 20% overload shrinks it to 7.6 mm.</p><p>Then compare 11 mm with the part. In a 12 mm bracket that is a through-crack you would never tolerate. In a 200 mm rotor it is a size NDT can find with room to spare. That comparison decides whether the part runs damage tolerant or has to be designed for safe life.</p>`,
  },
  {
    id: "fatigue-q50",
    type: "mc",
    difficulty: 3,
    prompt: `<p>Crack growth from the smallest reliably detectable size, 2 mm, to the critical 10 mm takes 2.2 million cycles, and the machine runs 1.2 million cycles a year. What inspection interval do you set, and on what reasoning?</p>`,
    figure: figCrackGrowth,
    choices: [
      "Twenty-two months, matching the calculated crack-growth window exactly",
      "Eleven months or less, so at least two inspections fall inside the window",
      "Twelve months, because annual maintenance shutdowns are already scheduled",
      "Retire the part outright at a hard limit of 2.2 million cycles",
    ],
    answer: 1,
    explanation: `<p>The growth window is 2.2/1.2 = 1.83 years, about 22 months. The damage-tolerance rule is to set the interval so that at least two inspections fall within it, because any single inspection can miss a crack. Probability of detection at the threshold size is typically 90%, not 100%. Two independent looks take the miss probability to about 1%. That means an interval of 11 months or shorter, and most operators then apply a further factor of two or three for load spectrum uncertainty.</p><p>Choice A leaves no margin for a missed call. Choice C is how real programs go wrong, letting the maintenance calendar set the interval instead of the crack physics, and 12 months guarantees only one look inside the window. Choice D throws away the whole benefit of a damage-tolerant approach, though it is the correct answer when the part is not inspectable, when the growth window is too short for any practical interval, or when the critical crack is smaller than NDT can find.</p><p>The strong follow-up: the interval depends far more on detectable crack size than on toughness, since growth life goes as a<sub>0</sub><sup>&minus;1/2</sup>. Better NDT is often cheaper than a better alloy.</p>`,
  },
  {
    id: "fatigue-q51",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A notched plate has K<sub>t</sub> = 3.0 and carries a nominal stress of 200 MPa. The steel has E = 200 GPa and yields at S<sub>y</sub> = 400 MPa, taken as elastic&ndash;perfectly plastic. Using Neuber's rule K<sub>t</sub><sup>2</sup>&sigma;<sub>nom</sub>&epsilon;<sub>nom</sub> = &sigma;&epsilon;, what strain does the notch root reach, in percent?</p>`,
    answer: 0.45,
    unit: "%",
    tolerance: 0.03,
    explanation: `<p>The nominal field is elastic, so &epsilon;<sub>nom</sub> = 200/200,000 = 0.00100. Form the Neuber product:</p><p class="eq">&sigma;&epsilon; = K<sub>t</sub><sup>2</sup>&sigma;<sub>nom</sub>&epsilon;<sub>nom</sub> = 9.0(200)(0.00100) = 1.80 MPa</p><p>A purely elastic estimate would give &sigma; = 600 MPa, above yield, so the root is plastic and &sigma; = S<sub>y</sub> = 400 MPa. The strain follows from the Neuber hyperbola:</p><p class="eq">&epsilon; = 1.80/400 = 0.00450 = <strong>0.450%</strong></p><p>Compare with the linear-elastic prediction, &epsilon; = 600/200,000 = 0.300%. Neuber gives 50% more strain, and in a strain-life calculation with an exponent near &minus;0.6 that is roughly a factor of two in predicted life, entirely in the unconservative direction if you had stayed elastic.</p><p>This is the bridge between a notch factor and low-cycle fatigue: whenever K<sub>t</sub>&sigma;<sub>nom</sub> exceeds yield, the stress at the root is capped and the excess goes into strain, so the problem becomes strain controlled and belongs to Coffin-Manson rather than S-N. Neuber tends to over-predict strain in plane strain, where the Glinka energy method is the usual alternative.</p>`,
  },
  {
    id: "fatigue-q52",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A press tool insert survives only about 800 strokes, and strain gauges show measurable plastic strain at the critical radius on every stroke. Which framework belongs at the front of the analysis?</p>`,
    choices: [
      "Euler buckling, since the cycle count is below the usual fatigue threshold.",
      "Creep rupture, because local plasticity means the tool is running hot.",
      "Rotating-bending S-N data, because all fatigue reduces to stress amplitude.",
      "Strain-life low-cycle fatigue, worked through Coffin-Manson.",
    ],
    answer: 3,
    explanation: `<p>Once each cycle produces plastic strain and the life is in the hundreds or low thousands, the controlling variable is strain range, not stress amplitude. Stress saturates at the flow strength and stops discriminating between a mildly and a severely loaded root, whereas the plastic strain range keeps growing. Coffin-Manson splits the total strain amplitude into an elastic term that scales as (2N)<sup>b</sup> and a plastic term as (2N)<sup>c</sup>, and below the transition life, typically 10<sup>3</sup> to 10<sup>4</sup> cycles for steels, the plastic term dominates completely.</p><p>Trying to force an S-N curve onto this gives a meaningless answer because the S-N curve was measured in the elastic regime. Buckling is a stability problem, not a cycle-count one, and room-temperature tool steel does not creep.</p><p>The design consequences also differ from high-cycle work. In low-cycle fatigue ductility matters more than strength, so the hardest available grade is often the wrong choice. The levers are lower stroke load, a larger radius to cut notch-root plasticity, a tougher grade, and controlled compressive residual stress at the root.</p>`,
  },
  {
    id: "fatigue-q53",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A fully constrained steel strip is heated and cooled through &Delta;T = 250 &deg;C every duty cycle. With &alpha; = 12 &times; 10<sup>&minus;6</sup>/&deg;C, what total mechanical strain range does full constraint impose, in percent?</p>`,
    answer: 0.3,
    unit: "%",
    tolerance: 0.03,
    explanation: `<p>Full constraint converts every bit of free thermal expansion into mechanical strain of the opposite sign:</p><p class="eq">&Delta;&epsilon; = &alpha;&Delta;T = (12 &times; 10<sup>&minus;6</sup>)(250) = 0.00300 = <strong>0.300%</strong></p><p>Now do the part that matters. The elastic strain the steel can carry before yielding is S<sub>y</sub>/E = 350/200,000 = 0.175%. The imposed 0.300% is well beyond that, so the strip yields on every heating cycle and the elastic formula &sigma; = E&alpha;&Delta;T = 600 MPa is fiction. The real stress is capped near the flow strength and the excess appears as plastic strain.</p><p>That reframes the problem completely: this is strain-controlled low-cycle fatigue, so use Coffin-Manson, not an S-N curve and not an endurance limit. It is exactly why exhaust manifolds, solder joints, turbine casings and hot tooling crack with no external mechanical load at all. The design levers are also strain based. Allow the part to expand, add compliance loops, cut &Delta;T, or pick an alloy with lower &alpha; or higher ductility.</p>`,
  },
  {
    id: "fatigue-q54",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A shaft section carries an alternating bending stress &sigma;<sub>a</sub> = 80 MPa together with an alternating torsional shear &tau;<sub>a</sub> = 45 MPa, in phase. What equivalent von Mises alternating stress goes into the fatigue check?</p>`,
    answer: 112,
    unit: "MPa",
    tolerance: 0.03,
    explanation: `<p>Reduce the multiaxial amplitude to a uniaxial equivalent with the distortion-energy form before comparing against an S<sub>e</sub> that was measured in bending:</p><p class="eq">&sigma;<sub>a,eq</sub> = &radic;(&sigma;<sub>a</sub><sup>2</sup> + 3&tau;<sub>a</sub><sup>2</sup>) = &radic;(80<sup>2</sup> + 3(45)<sup>2</sup>)</p><p class="eq">= &radic;(6,400 + 6,075) = &radic;12,475 = <strong>112 MPa</strong></p><p>The factor of 3 is the point. Adding the two amplitudes gives 125 MPa and treating shear as harmless gives 80 MPa; both are wrong, and the shear term contributes almost exactly as much as the bending term here (6,075 versus 6,400) despite being numerically smaller. On a shaft with comparable bending and torsion, leaving out the torsion understates the driving stress by 1 &minus; 80/112 = 28%.</p><p>Two conditions to state. This works when the components are in phase and proportional; out-of-phase loading needs a critical-plane method, because the principal directions rotate during the cycle. And mean stresses must be combined separately, a steady torque contributes to &sigma;<sub>m,eq</sub>, not to the amplitude.</p>`,
  },
  {
    id: "fatigue-q55",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A ductile steel part runs at &sigma;<sub>a</sub> = 120 MPa and &sigma;<sub>m</sub> = 200 MPa, with S<sub>e</sub> = 240 MPa, S<sub>y</sub> = 400 MPa and S<sub>ut</sub> = 600 MPa. What safety factor does the Gerber criterion give, n&sigma;<sub>a</sub>/S<sub>e</sub> + (n&sigma;<sub>m</sub>/S<sub>ut</sub>)<sup>2</sup> = 1?</p>`,
    figure: figGood3,
    answer: 1.5,
    tolerance: 0.03,
    explanation: `<p>Gerber is quadratic in n, so it has to be solved rather than inverted. Write A = &sigma;<sub>a</sub>/S<sub>e</sub> = 0.500 and B = &sigma;<sub>m</sub>/S<sub>ut</sub> = 0.3333:</p><p class="eq">B<sup>2</sup>n<sup>2</sup> + An &minus; 1 = 0 &rarr; 0.11111n<sup>2</sup> + 0.500n &minus; 1 = 0</p><p class="eq">n = [&minus;0.500 + &radic;(0.250 + 0.44444)]/(2 &times; 0.11111) = (&minus;0.500 + 0.83333)/0.22222</p><p class="eq">n = <strong>1.50</strong></p><p>Compare the three criteria on the same point. Goodman: 1/n = 0.500 + 0.3333 = 0.8333, n = 1.20. Soderberg: 1/n = 120/240 + 200/400 = 1.000, n = 1.00. The operating point sits exactly on the Soderberg line, which is why the figure shows it there. Gerber: 1.50.</p><p>The spread of 1.00 to 1.50 on identical inputs is the whole lesson. Soderberg is most conservative because it uses S<sub>y</sub> as the mean intercept and therefore also guarantees no first-cycle yielding; Gerber is a parabola fitted to ductile-steel data and is least conservative. Quoting a safety factor without naming the criterion is meaningless.</p>`,
  },
  {
    id: "fatigue-q56",
    type: "mc",
    difficulty: 2,
    prompt: `<p>Your Goodman check on a ductile steel bracket returns n = 1.20 and the program requires 1.5. Before adding metal, what analysis change is defensible, and what does it cost you?</p>`,
    figure: figGood3,
    choices: [
      "Move to Gerber, which fits mean-stress data better but leaves less conservatism.",
      "Move to Soderberg, which is less conservative because it uses yield strength.",
      "Drop the mean-stress term, since Goodman applies only when the mean exceeds S<sub>e</sub>.",
      "Use the raw specimen S<sub>e</sub>, since the Marin factors double count the surface effect.",
    ],
    answer: 0,
    explanation: `<p>Gerber is the parabola that actually fits scattered ductile-steel data, where Goodman deliberately runs below almost all of it. Switching criteria on the same numbers here takes n from 1.20 to 1.50, which meets the requirement without touching the hardware. The cost is exactly what you gave up: Goodman's built-in margin against data scatter, so you now need better justification, material data for this alloy, a defensible load spectrum, and ideally component test evidence. Say that out loud in the review rather than presenting 1.50 as if it were free.</p><p>Choice B has the ranking inverted: Soderberg uses S<sub>y</sub> &lt; S<sub>ut</sub> as the intercept, so it is <em>more</em> conservative. It would give n = 1.00 here. Choice C invents a condition; the mean-stress term applies at any tensile mean. Choice D is the dangerous one, discarding real physics to manufacture margin. If Gerber is not enough, the honest options are lowering the alternating stress, raising S<sub>e</sub> through surface work, or adding section.</p>`,
  },
  {
    id: "fatigue-q57",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A sheet-steel bracket cracks at 200,000 cycles. The crack starts at a laser-cut edge inside a relief notch; the nominal stress amplitude there is 55 MPa against a corrected S<sub>e</sub> of 90 MPa. What do you change first?</p>`,
    choices: [
      "Move to a higher-strength steel, since 55 MPa is already under the corrected limit.",
      "Add a stiffener to bring the nominal amplitude from 55 MPa down to 45 MPa.",
      "Deburr and blend the laser-cut notch edge, where K<sub>f</sub> and the finish both bite.",
      "Increase the sheet thickness by 25% to lower the nominal bending stress.",
    ],
    answer: 2,
    explanation: `<p>The numbers already tell you where the problem is not. Nominal 55 MPa against S<sub>e</sub> = 90 MPa is a nominal margin of 1.6, so the section is not undersized, yet the part failed at 200,000 cycles, which means the local stress at the crack site is at least 90/55 = 1.6 times nominal. A laser-cut edge inside a notch supplies exactly that: the geometric K<sub>f</sub> of the relief, plus a recast layer with microcracks and a heat-affected zone that behaves like a pre-existing flaw. Deburring and blending removes the recast layer and softens the notch at the same time, and it is a process change with no drawing or tooling impact.</p><p>Choices B and D attack a nominal stress that already has margin, adding weight for a modest gain while leaving the actual initiation site untouched. Choice A is worse than neutral: a stronger steel raises notch sensitivity, so it feels the cut edge more, and crack growth once initiated barely improves with strength. The general rule is that when the nominal margin is fine but the part cracks anyway, the answer is at the detail, not in the section.</p>`,
  },
  {
    id: "fatigue-q58",
    type: "mc",
    difficulty: 3,
    prompt: `<p>An electronics housing survived 10<sup>7</sup> cycles on a shaker at the qualification level, then cracked in the field within three months. Which explanation do you chase first?</p>`,
    choices: [
      "The field spectrum adds a mean load or a resonance the shaker sweep never applied.",
      "The shaker test was too severe, so the parts shipped already partly damaged.",
      "The material lot changed, since fatigue strength is set almost entirely by alloy.",
      "The field units were installed inverted, reversing the applied stress sign.",
    ],
    answer: 0,
    explanation: `<p>When a qualification test and the field disagree this badly, the test almost always applied a different load, not a smaller one. The three usual culprits, in order: a mean load the shaker never applied, a mounting preload, a thermal constraint, a gravity or aerodynamic bias, which shifts the whole cycle up the Goodman line; a resonance excited in service but skipped by the sweep, particularly a mode that a rigid test fixture suppressed; and boundary conditions, since a stiff test fixture changes both the mode shapes and where the load path actually runs.</p><p>Choice B is self-defeating: if the shaker level were the damaging one, the failures would show up on the shaker. Choice C over-weights material, which sits well below surface, detail and load in the list of things that control fatigue life. Choice D is worth ten seconds of checking but does not explain a systematic failure, since sign reversal alone does not change an alternating stress.</p><p>The move is to instrument a field unit, rainflow count the real signal, and compare it against the qualification profile, including its mean, not just its amplitude spectrum.</p>`,
  },
  {
    id: "fatigue-q59",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A high-cycle aluminum bracket cracks at a drilled hole. Four changes cost roughly the same. Which buys the most fatigue life?</p>`,
    choices: [
      "Ream and cold-expand the hole, leaving compressive hoop stress right at the bore.",
      "Switch the bracket from 6061-T6 to 7075-T6 and keep the as-drilled hole finish.",
      "Add a doubler plate around the hole, cutting nominal bore stress by 10%.",
      "Shot peen the outer faces of the bracket, away from the bore where it cracked.",
    ],
    answer: 0,
    explanation: `<p>The crack starts at the bore, so the fix has to act at the bore. Cold expansion pulls an oversized mandrel through the hole, yielding a ring of material that the surrounding elastic bulk then squeezes into compressive hoop stress of several hundred MPa. Reaming removes the drill's torn edge and burrs at the same time. This is standard practice on aircraft holes precisely because it delivers life improvements of three to ten times, more than any other single-hole treatment, and it needs no extra weight.</p><p>The other three are genuinely tempting, which is the point. 7075-T6 is stronger statically but no better in fatigue at a notch: aluminum fatigue strength is only weakly tied to S<sub>ut</sub>, and 7075 is more notch sensitive and less corrosion resistant. A doubler adds weight and its own fastener holes, and a 10% nominal stress cut is worth roughly a factor of two to three in life, real, but less than cold expansion. Peening the outer faces is the right process in the wrong place: it does nothing at the bore where the crack lives.</p>`,
  },
  {
    id: "fatigue-q60",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>An avionics bracket has a resonance at 62 Hz, and the qualification profile dwells at that frequency for 4 hours. How many stress cycles does the dwell accumulate?</p>`,
    answer: 892800,
    unit: "cycles",
    tolerance: 0.03,
    explanation: `<p>At resonance the bracket completes one full stress cycle per excitation cycle:</p><p class="eq">N = f &times; t = 62 &times; (4 &times; 3,600) = 62 &times; 14,400</p><p class="eq">N = 892,800 &asymp; <strong>8.93 &times; 10<sup>5</sup> cycles</strong></p><p>Nearly a million cycles in an afternoon is the reason vibration fatigue sneaks up on people: the part is firmly in the high-cycle regime after a single test run, so it must be checked against the endurance limit rather than a static allowable. Any structure with a resonance in the excitation band accumulates cycles this fast, which is why the first design move is to shift the natural frequency out of the band rather than to strengthen the part.</p><p>A caution on the number. Real qualification is usually random vibration, not a sine dwell, so there is no single frequency and no single amplitude; the standard treatment is to take the response PSD, estimate a zero-crossing rate for the cycle count, and use a Rayleigh amplitude distribution with Miner's rule, the three-band method is the quick version. The sine-dwell arithmetic here is the right order of magnitude and the right instinct.</p>`,
  },
];

export default extra;
