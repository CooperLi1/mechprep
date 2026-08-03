import type { Question } from "../types";

// q24, the two load cases that get superposed on one simply supported beam.
const figSuperQ = `<svg viewBox="0 0 460 278" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bd8-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="bd8-udl" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto"><path d="M0,0L7,3.5L0,7z" fill="#dc2626"/></marker>
    <marker id="bd8-dim" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Both loads act on the same 2.0 m simply supported beam</text>
  <!-- case 1 -->
  <line x1="230" y1="42" x2="230" y2="70" stroke="#dc2626" stroke-width="2.4" marker-end="url(#bd8-load)"/>
  <text x="240" y="52" fill="#dc2626" font-weight="600" font-size="12">P = 500 N</text>
  <rect x="80" y="74" width="300" height="10" fill="#dbeafe" stroke="#334155" stroke-width="1.4"/>
  <path d="M80,79 C132,110 328,110 380,79" fill="none" stroke="#1d4ed8" stroke-width="2.2"/>
  <polygon points="80,84 70,102 90,102" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="80" cy="84" r="2.6" fill="#334155"/>
  <line x1="66" y1="102" x2="94" y2="102" stroke="#334155" stroke-width="1.4"/>
  <polygon points="380,84 370,100 390,100" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="375" cy="105" r="3.4" fill="none" stroke="#334155" stroke-width="1.3"/>
  <circle cx="385" cy="105" r="3.4" fill="none" stroke="#334155" stroke-width="1.3"/>
  <line x1="366" y1="111" x2="394" y2="111" stroke="#334155" stroke-width="1.4"/>
  <text x="400" y="100" fill="#1d4ed8" font-weight="600" font-size="12">&delta;<tspan baseline-shift="sub" font-size="9">P</tspan></text>
  <text x="40" y="128" text-anchor="middle" fill="#334155" font-size="18" font-weight="600">+</text>
  <!-- case 2 -->
  <line x1="80" y1="140" x2="380" y2="140" stroke="#dc2626" stroke-width="1.8"/>
  <line x1="80" y1="142" x2="80" y2="160" stroke="#dc2626" stroke-width="1.4" marker-end="url(#bd8-udl)"/>
  <line x1="140" y1="142" x2="140" y2="160" stroke="#dc2626" stroke-width="1.4" marker-end="url(#bd8-udl)"/>
  <line x1="200" y1="142" x2="200" y2="160" stroke="#dc2626" stroke-width="1.4" marker-end="url(#bd8-udl)"/>
  <line x1="260" y1="142" x2="260" y2="160" stroke="#dc2626" stroke-width="1.4" marker-end="url(#bd8-udl)"/>
  <line x1="320" y1="142" x2="320" y2="160" stroke="#dc2626" stroke-width="1.4" marker-end="url(#bd8-udl)"/>
  <line x1="380" y1="142" x2="380" y2="160" stroke="#dc2626" stroke-width="1.4" marker-end="url(#bd8-udl)"/>
  <text x="82" y="134" fill="#dc2626" font-weight="600" font-size="12">w = 100 N/m</text>
  <rect x="80" y="164" width="300" height="10" fill="#dbeafe" stroke="#334155" stroke-width="1.4"/>
  <path d="M80,169 C132,194 328,194 380,169" fill="none" stroke="#1d4ed8" stroke-width="2.2"/>
  <polygon points="80,174 70,192 90,192" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="80" cy="174" r="2.6" fill="#334155"/>
  <line x1="66" y1="192" x2="94" y2="192" stroke="#334155" stroke-width="1.4"/>
  <polygon points="380,174 370,190 390,190" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="375" cy="195" r="3.4" fill="none" stroke="#334155" stroke-width="1.3"/>
  <circle cx="385" cy="195" r="3.4" fill="none" stroke="#334155" stroke-width="1.3"/>
  <line x1="366" y1="201" x2="394" y2="201" stroke="#334155" stroke-width="1.4"/>
  <text x="400" y="190" fill="#1d4ed8" font-weight="600" font-size="12">&delta;<tspan baseline-shift="sub" font-size="9">w</tspan></text>
  <!-- span dimension -->
  <line x1="80" y1="222" x2="380" y2="222" stroke="#64748b" stroke-width="1" marker-start="url(#bd8-dim)" marker-end="url(#bd8-dim)"/>
  <line x1="80" y1="216" x2="80" y2="228" stroke="#64748b" stroke-width="1"/>
  <line x1="230" y1="216" x2="230" y2="228" stroke="#64748b" stroke-width="1"/>
  <line x1="380" y1="216" x2="380" y2="228" stroke="#64748b" stroke-width="1"/>
  <text x="230" y="217" text-anchor="middle" fill="#64748b" font-size="12">L = 2.0 m (load at midspan)</text>
  <text x="20" y="248" fill="#334155" font-size="12">E = 70 GPa &nbsp; I = 3.0 &times; 10<tspan baseline-shift="super" font-size="9">&minus;6</tspan> m<tspan baseline-shift="super" font-size="9">4</tspan></text>
  <text x="20" y="270" fill="#1d4ed8" font-size="12">&delta;<tspan baseline-shift="sub" font-size="9">mid</tspan> = PL&sup3;/48EI + 5wL&#8308;/384EI</text>
</svg>`;

// q23, the third support that makes the beam indeterminate.
const figIndet = `<svg viewBox="0 0 460 252" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bd9-rxn" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
    <marker id="bd9-udl" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto"><path d="M0,0L7,3.5L0,7z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Three supports, three equations, four unknowns</text>
  <line x1="60" y1="52" x2="400" y2="52" stroke="#dc2626" stroke-width="1.8"/>
  <line x1="60" y1="54" x2="60" y2="74" stroke="#dc2626" stroke-width="1.4" marker-end="url(#bd9-udl)"/>
  <line x1="128" y1="54" x2="128" y2="74" stroke="#dc2626" stroke-width="1.4" marker-end="url(#bd9-udl)"/>
  <line x1="196" y1="54" x2="196" y2="74" stroke="#dc2626" stroke-width="1.4" marker-end="url(#bd9-udl)"/>
  <line x1="264" y1="54" x2="264" y2="74" stroke="#dc2626" stroke-width="1.4" marker-end="url(#bd9-udl)"/>
  <line x1="332" y1="54" x2="332" y2="74" stroke="#dc2626" stroke-width="1.4" marker-end="url(#bd9-udl)"/>
  <line x1="400" y1="54" x2="400" y2="74" stroke="#dc2626" stroke-width="1.4" marker-end="url(#bd9-udl)"/>
  <text x="410" y="52" fill="#dc2626" font-weight="600" font-size="12">w</text>
  <rect x="60" y="80" width="340" height="12" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <polyline points="60,86.0 77,95.0 94,102.5 111,107.7 128,109.9 145,109.1 162,105.5 179,100.0 196,93.7 213,88.3 230,86.0 247,88.3 264,93.7 281,100.0 298,105.5 315,109.1 332,109.9 349,107.7 366,102.5 383,95.0 400,86.0" fill="none" stroke="#1d4ed8" stroke-width="2.2"/>
  <!-- pin A -->
  <polygon points="60,92 48,112 72,112" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="60" cy="92" r="3" fill="#334155"/>
  <line x1="42" y1="112" x2="78" y2="112" stroke="#334155" stroke-width="1.5"/>
  <line x1="48" y1="121" x2="56" y2="112" stroke="#64748b" stroke-width="1"/>
  <line x1="60" y1="121" x2="68" y2="112" stroke="#64748b" stroke-width="1"/>
  <text x="60" y="140" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <!-- roller C mid -->
  <polygon points="230,92 218,110 242,110" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="224" cy="115" r="4" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="236" cy="115" r="4" fill="none" stroke="#334155" stroke-width="1.4"/>
  <line x1="212" y1="121" x2="248" y2="121" stroke="#334155" stroke-width="1.5"/>
  <text x="230" y="140" text-anchor="middle" font-weight="600" fill="#334155">C</text>
  <!-- roller B -->
  <polygon points="400,92 388,110 412,110" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="394" cy="115" r="4" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="406" cy="115" r="4" fill="none" stroke="#334155" stroke-width="1.4"/>
  <line x1="382" y1="121" x2="418" y2="121" stroke="#334155" stroke-width="1.5"/>
  <text x="400" y="140" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  <!-- reactions -->
  <line x1="60" y1="176" x2="60" y2="150" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#bd9-rxn)"/>
  <line x1="230" y1="176" x2="230" y2="150" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#bd9-rxn)"/>
  <line x1="400" y1="176" x2="400" y2="150" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#bd9-rxn)"/>
  <text x="60" y="192" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">R<tspan baseline-shift="sub" font-size="9">A</tspan></text>
  <text x="230" y="192" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">R<tspan baseline-shift="sub" font-size="9">C</tspan></text>
  <text x="400" y="192" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">R<tspan baseline-shift="sub" font-size="9">B</tspan></text>
  <text x="20" y="220" fill="#334155" font-size="12">Statics gives &Sigma;F = 0 and &Sigma;M = 0: two useful equations, three unknowns.</text>
  <text x="20" y="240" fill="#1d4ed8" font-size="12">The missing equation is compatibility: v = 0 at C.</text>
</svg>`;

// q33, a measured load-deflection sweep with a knee in it.
const figKnee = `<svg viewBox="0 0 460 274" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bd17-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Measured load-deflection sweep on a bolted bracket</text>
  <line x1="76" y1="210" x2="424" y2="210" stroke="#64748b" stroke-width="1.5" marker-end="url(#bd17-ax)"/>
  <line x1="76" y1="210" x2="76" y2="46" stroke="#64748b" stroke-width="1.5" marker-end="url(#bd17-ax)"/>
  <text x="44" y="130" text-anchor="middle" transform="rotate(-90 44 130)" fill="#64748b" font-size="12">load P</text>
  <text x="250" y="232" text-anchor="middle" fill="#64748b" font-size="12">tip deflection</text>
  <line x1="76" y1="210" x2="284" y2="50" stroke="#64748b" stroke-width="1.5" stroke-dasharray="6 4"/>
  <text x="180" y="62" text-anchor="middle" fill="#64748b" font-size="12">hand prediction</text>
  <polyline points="76,210 110,194 145,177 175,163 200,150 230,127 260,104 295,77 330,50" fill="none" stroke="#dc2626" stroke-width="2.8"/>
  <text x="338" y="46" fill="#dc2626" font-weight="600" font-size="12">measured</text>
  <circle cx="200" cy="150" r="4.5" fill="#1d4ed8"/>
  <line x1="200" y1="150" x2="200" y2="210" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="208" y="174" fill="#1d4ed8" font-weight="600" font-size="12">knee at about 300 N</text>
  <text x="90" y="120" fill="#64748b" font-size="11">soft here</text>
  <text x="20" y="248" fill="#64748b" font-size="12">Above the knee the slope matches the calculation.</text>
  <text x="20" y="264" fill="#64748b" font-size="12">Below it, something other than the beam is moving.</text>
</svg>`;

// q48, an L-bracket where the leg rotation moves the tip more than the arm bending.
const figLBracket = `<svg viewBox="0 0 460 252" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bd18-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="bd18-dim" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
    <marker id="bd18-rot" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">L-bracket: the arm bends and the leg rotates</text>
  <line x1="70" y1="200" x2="200" y2="200" stroke="#334155" stroke-width="2.5"/>
  <line x1="76" y1="210" x2="86" y2="200" stroke="#64748b" stroke-width="1"/>
  <line x1="100" y1="210" x2="110" y2="200" stroke="#64748b" stroke-width="1"/>
  <line x1="124" y1="210" x2="134" y2="200" stroke="#64748b" stroke-width="1"/>
  <line x1="148" y1="210" x2="158" y2="200" stroke="#64748b" stroke-width="1"/>
  <line x1="172" y1="210" x2="182" y2="200" stroke="#64748b" stroke-width="1"/>
  <rect x="110" y="110" width="12" height="90" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="110" y="110" width="180" height="12" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="92" y="188" width="48" height="12" fill="#e2e8f0" stroke="#334155" stroke-width="1.3"/>
  <circle cx="100" cy="194" r="3.4" fill="#ffffff" stroke="#334155" stroke-width="1.2"/>
  <circle cx="132" cy="194" r="3.4" fill="#ffffff" stroke="#334155" stroke-width="1.2"/>
  <path d="M118,116 C160,126 240,146 298,166" fill="none" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="6 4"/>
  <path d="M136,104 Q152,98 168,104" fill="none" stroke="#1d4ed8" stroke-width="1.6" marker-end="url(#bd18-rot)"/>
  <text x="176" y="106" fill="#1d4ed8" font-size="11">&theta; at the corner</text>
  <line x1="296" y1="70" x2="296" y2="106" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bd18-load)"/>
  <text x="306" y="84" fill="#dc2626" font-weight="600" font-size="12">P = 300 N</text>
  <line x1="122" y1="92" x2="290" y2="92" stroke="#64748b" stroke-width="1" marker-start="url(#bd18-dim)" marker-end="url(#bd18-dim)"/>
  <line x1="122" y1="86" x2="122" y2="98" stroke="#64748b" stroke-width="1"/>
  <line x1="290" y1="86" x2="290" y2="98" stroke="#64748b" stroke-width="1"/>
  <text x="206" y="87" text-anchor="middle" fill="#64748b" font-size="12">a = 120 mm</text>
  <line x1="88" y1="122" x2="88" y2="200" stroke="#64748b" stroke-width="1" marker-start="url(#bd18-dim)" marker-end="url(#bd18-dim)"/>
  <line x1="82" y1="122" x2="94" y2="122" stroke="#64748b" stroke-width="1"/>
  <line x1="82" y1="200" x2="94" y2="200" stroke="#64748b" stroke-width="1"/>
  <text x="76" y="165" text-anchor="end" fill="#64748b" font-size="12">H = 80 mm</text>
  <text x="308" y="166" fill="#1d4ed8" font-size="11">deformed</text>
  <text x="20" y="226" fill="#334155" font-size="12">Both members are 25 mm wide &times; 6 mm thick steel, E = 200 GPa.</text>
  <text x="20" y="244" fill="#64748b" font-size="12">The leg carries a constant moment M = Pa over its whole height.</text>
</svg>`;

// q54, a gear at shaft midspan: deflection at the mesh, slope at the bearings.
const figShaft = `<svg viewBox="0 0 460 244" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bd19-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="bd19-dim" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="18" text-anchor="middle" font-weight="600" fill="#334155">Gear at midspan between two bearings</text>
  <line x1="230" y1="34" x2="230" y2="72" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bd19-load)"/>
  <text x="230" y="30" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="12">W = 2.4 kN</text>
  <rect x="80" y="96" width="300" height="14" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="210" y="80" width="40" height="46" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="216" y1="80" x2="216" y2="126" stroke="#94a3b8" stroke-width="1"/>
  <line x1="230" y1="80" x2="230" y2="126" stroke="#94a3b8" stroke-width="1"/>
  <line x1="244" y1="80" x2="244" y2="126" stroke="#94a3b8" stroke-width="1"/>
  <text x="258" y="86" fill="#334155" font-size="12">gear</text>
  <polyline points="80,103.0 99,109.3 118,115.5 136,121.2 155,126.4 174,130.7 192,134.1 211,136.2 230,137.0 249,136.2 268,134.1 286,130.7 305,126.4 324,121.2 342,115.5 361,109.3 380,103.0" fill="none" stroke="#1d4ed8" stroke-width="2.4"/>
  <polygon points="80,110 68,130 92,130" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="80" cy="110" r="2.8" fill="#334155"/>
  <line x1="62" y1="130" x2="98" y2="130" stroke="#334155" stroke-width="1.5"/>
  <line x1="66" y1="139" x2="74" y2="130" stroke="#64748b" stroke-width="1"/>
  <line x1="80" y1="139" x2="88" y2="130" stroke="#64748b" stroke-width="1"/>
  <polygon points="380,110 368,128 392,128" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="373" cy="133" r="3.8" fill="none" stroke="#334155" stroke-width="1.3"/>
  <circle cx="387" cy="133" r="3.8" fill="none" stroke="#334155" stroke-width="1.3"/>
  <line x1="362" y1="139" x2="398" y2="139" stroke="#334155" stroke-width="1.5"/>
  <line x1="80" y1="103" x2="152" y2="103" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="80" y1="103" x2="152" y2="127" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="6 4"/>
  <text x="132" y="94" fill="#dc2626" font-weight="600" font-size="12">&theta;</text>
  <line x1="230" y1="137" x2="300" y2="137" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="250" y1="103" x2="300" y2="103" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="294" y1="103" x2="294" y2="137" stroke="#1d4ed8" stroke-width="1.3" marker-start="url(#bd19-dim)" marker-end="url(#bd19-dim)"/>
  <text x="302" y="124" fill="#1d4ed8" font-weight="600" font-size="12">&delta;</text>
  <line x1="80" y1="174" x2="380" y2="174" stroke="#64748b" stroke-width="1" marker-start="url(#bd19-dim)" marker-end="url(#bd19-dim)"/>
  <line x1="80" y1="168" x2="80" y2="180" stroke="#64748b" stroke-width="1"/>
  <line x1="380" y1="168" x2="380" y2="180" stroke="#64748b" stroke-width="1"/>
  <text x="230" y="169" text-anchor="middle" fill="#64748b" font-size="12">180 mm between bearings</text>
  <text x="20" y="200" fill="#334155" font-size="12">30 mm solid steel shaft, E = 207 GPa.</text>
  <text x="20" y="220" fill="#64748b" font-size="12">Ball bearings tolerate roughly 0.6&ndash;3 mrad of misalignment;</text>
  <text x="20" y="238" fill="#64748b" font-size="12">cylindrical roller bearings only about 0.3&ndash;1.2 mrad.</text>
</svg>`;

// q56. Load on an overhang: the back span hogs and rotates the support.
const figOverhang = `<svg viewBox="0 0 460 242" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bd20-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="bd20-dim" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">A load on the overhang moves the tip mostly by rotating B</text>
  <rect x="70" y="90" width="330" height="10" fill="#dbeafe" stroke="#334155" stroke-width="1.4"/>
  <polyline points="70,95.0 91,89.9 111,85.0 132,80.5 152,76.7 173,73.7 194,71.8 214,71.2 235,72.1 256,74.7 276,79.2 297,85.9 318,95.0 328,100.2 338,105.5 348,111.2 359,117.3 369,124.1 379,131.7 390,140.3 400,150.0" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <polygon points="70,100 58,120 82,120" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="70" cy="100" r="2.8" fill="#334155"/>
  <line x1="52" y1="120" x2="88" y2="120" stroke="#334155" stroke-width="1.5"/>
  <line x1="56" y1="129" x2="64" y2="120" stroke="#64748b" stroke-width="1"/>
  <line x1="70" y1="129" x2="78" y2="120" stroke="#64748b" stroke-width="1"/>
  <polygon points="318,100 306,118 330,118" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="311" cy="123" r="3.8" fill="none" stroke="#334155" stroke-width="1.3"/>
  <circle cx="325" cy="123" r="3.8" fill="none" stroke="#334155" stroke-width="1.3"/>
  <line x1="300" y1="129" x2="336" y2="129" stroke="#334155" stroke-width="1.5"/>
  <text x="70" y="146" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <text x="318" y="146" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  <line x1="400" y1="52" x2="400" y2="86" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bd20-load)"/>
  <text x="400" y="46" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="12">P = 500 N</text>
  <line x1="70" y1="168" x2="318" y2="168" stroke="#64748b" stroke-width="1" marker-start="url(#bd20-dim)" marker-end="url(#bd20-dim)"/>
  <line x1="318" y1="168" x2="400" y2="168" stroke="#64748b" stroke-width="1" marker-start="url(#bd20-dim)" marker-end="url(#bd20-dim)"/>
  <line x1="70" y1="162" x2="70" y2="174" stroke="#64748b" stroke-width="1"/>
  <line x1="318" y1="162" x2="318" y2="174" stroke="#64748b" stroke-width="1"/>
  <line x1="400" y1="162" x2="400" y2="174" stroke="#64748b" stroke-width="1"/>
  <text x="194" y="163" text-anchor="middle" fill="#64748b" font-size="12">1.2 m</text>
  <text x="359" y="163" text-anchor="middle" fill="#64748b" font-size="12">0.4 m</text>
  <text x="20" y="196" fill="#334155" font-size="12">EI = 20 kN&middot;m&sup2; throughout.</text>
  <text x="20" y="216" fill="#64748b" font-size="12">The back span hogs upward, so the beam rotates at B &mdash; and that</text>
  <text x="20" y="234" fill="#64748b" font-size="12">rotation swings the overhang tip down further than its own bending does.</text>
</svg>`;

// q57. End supports against Airy points on a straightedge.
const figAiry = `<svg viewBox="0 0 460 274" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bd21-dim" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Where you support a straightedge decides how straight it stays</text>
  <text x="230" y="42" text-anchor="middle" font-weight="600" fill="#334155" font-size="12">Supported at the two ends</text>
  <rect x="60" y="70" width="340" height="10" fill="#dbeafe" stroke="#334155" stroke-width="1.4"/>
  <polyline points="60,75.0 81,82.9 102,90.5 124,97.5 145,103.5 166,108.4 188,112.0 209,114.3 230,115.0 251,114.3 272,112.0 294,108.4 315,103.5 336,97.5 358,90.5 379,82.9 400,75.0" fill="none" stroke="#1d4ed8" stroke-width="2.4"/>
  <polygon points="60,80 48,100 72,100" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="60" cy="80" r="2.6" fill="#334155"/>
  <line x1="42" y1="100" x2="78" y2="100" stroke="#334155" stroke-width="1.4"/>
  <polygon points="400,80 388,98 412,98" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="393" cy="103" r="3.6" fill="none" stroke="#334155" stroke-width="1.3"/>
  <circle cx="407" cy="103" r="3.6" fill="none" stroke="#334155" stroke-width="1.3"/>
  <line x1="382" y1="109" x2="418" y2="109" stroke="#334155" stroke-width="1.4"/>
  <line x1="230" y1="75" x2="230" y2="115" stroke="#1d4ed8" stroke-width="1.3" marker-start="url(#bd21-dim)" marker-end="url(#bd21-dim)"/>
  <text x="230" y="138" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">sag = 5wL&#8308;/384EI</text>
  <text x="230" y="154" text-anchor="middle" font-weight="600" fill="#334155" font-size="12">Supported at the Airy points, 0.211L from each end</text>
  <rect x="60" y="185" width="340" height="10" fill="#dbeafe" stroke="#334155" stroke-width="1.4"/>
  <line x1="46" y1="177" x2="78" y2="177" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="5 3"/>
  <line x1="382" y1="177" x2="414" y2="177" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="5 3"/>
  <polyline points="60,177.0 77,177.0 94,177.2 111,177.9 128,179.9 145,183.9 162,189.1 179,194.5 196,199.0 213,202.1 230,203.0 247,202.1 264,199.5 281,194.5 298,189.1 315,183.9 332,179.9 349,177.9 366,177.2 383,177.0 400,177.0" fill="none" stroke="#1d4ed8" stroke-width="2.4"/>
  <polygon points="132,195 120,215 144,215" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="132" cy="195" r="2.6" fill="#334155"/>
  <line x1="114" y1="215" x2="150" y2="215" stroke="#334155" stroke-width="1.4"/>
  <polygon points="328,195 316,213 340,213" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="321" cy="218" r="3.6" fill="none" stroke="#334155" stroke-width="1.3"/>
  <circle cx="335" cy="218" r="3.6" fill="none" stroke="#334155" stroke-width="1.3"/>
  <line x1="310" y1="224" x2="346" y2="224" stroke="#334155" stroke-width="1.4"/>
  <text x="230" y="168" text-anchor="middle" fill="#dc2626" font-size="11">(vertical scale exaggerated: the real error is about 20&times; smaller)</text>
  <line x1="60" y1="244" x2="132" y2="244" stroke="#64748b" stroke-width="1" marker-start="url(#bd21-dim)" marker-end="url(#bd21-dim)"/>
  <line x1="328" y1="244" x2="400" y2="244" stroke="#64748b" stroke-width="1" marker-start="url(#bd21-dim)" marker-end="url(#bd21-dim)"/>
  <line x1="60" y1="238" x2="60" y2="250" stroke="#64748b" stroke-width="1"/>
  <line x1="132" y1="238" x2="132" y2="250" stroke="#64748b" stroke-width="1"/>
  <line x1="328" y1="238" x2="328" y2="250" stroke="#64748b" stroke-width="1"/>
  <line x1="400" y1="238" x2="400" y2="250" stroke="#64748b" stroke-width="1"/>
  <text x="96" y="239" text-anchor="middle" fill="#64748b" font-size="12">0.211 L</text>
  <text x="364" y="239" text-anchor="middle" fill="#64748b" font-size="12">0.211 L</text>
  <text x="20" y="268" fill="#64748b" font-size="12">Airy spacing is L/&radic;3 = 0.577L, and it leaves the two end faces parallel.</text>
</svg>`;

// q31, a cantilever leaf spring sized from its rate.
const figSpring = `<svg viewBox="0 0 460 244" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bd22-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="bd22-dim" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Cantilever leaf spring: the rate fixes the geometry</text>
  <line x1="70" y1="60" x2="70" y2="172" stroke="#334155" stroke-width="3"/>
  <line x1="58" y1="72" x2="70" y2="60" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="96" x2="70" y2="84" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="120" x2="70" y2="108" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="144" x2="70" y2="132" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="168" x2="70" y2="156" stroke="#64748b" stroke-width="1"/>
  <rect x="70" y="100" width="270" height="8" fill="#dbeafe" stroke="#334155" stroke-width="1.4"/>
  <polyline points="70,104.0 87,104.3 104,105.3 121,107.0 138,109.2 154,111.9 171,115.1 188,118.7 205,122.8 222,127.1 239,131.8 256,136.8 272,142.0 289,147.3 306,152.8 323,158.4 340,164.0" fill="none" stroke="#1d4ed8" stroke-width="2.8"/>
  <line x1="340" y1="132" x2="340" y2="160" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bd22-load)"/>
  <text x="332" y="130" text-anchor="end" fill="#dc2626" font-weight="600" font-size="12">P</text>
  <line x1="340" y1="104" x2="376" y2="104" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="340" y1="164" x2="376" y2="164" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="370" y1="104" x2="370" y2="164" stroke="#1d4ed8" stroke-width="1.4" marker-start="url(#bd22-dim)" marker-end="url(#bd22-dim)"/>
  <text x="378" y="138" fill="#1d4ed8" font-weight="600" font-size="12">&delta; = 40 mm</text>
  <line x1="70" y1="196" x2="340" y2="196" stroke="#64748b" stroke-width="1" marker-start="url(#bd22-dim)" marker-end="url(#bd22-dim)"/>
  <line x1="70" y1="190" x2="70" y2="202" stroke="#64748b" stroke-width="1"/>
  <line x1="340" y1="190" x2="340" y2="202" stroke="#64748b" stroke-width="1"/>
  <text x="205" y="191" text-anchor="middle" fill="#64748b" font-size="12">L = 150 mm free length</text>
  <text x="20" y="220" fill="#334155" font-size="12">Rectangular leaf, b = 30 mm wide, spring steel E = 207 GPa, rate 50 N/mm.</text>
  <text x="20" y="238" fill="#64748b" font-size="12">Root stress at full travel is &sigma; = 3E&delta;h/2L&sup2;, independent of the width.</text>
</svg>`;

const extra: Question[] = [
  {
    id: "beam-deflection-q23",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A simply supported beam is given a third support at midspan to cut its sag. Your colleague tries to find the three reactions from equilibrium alone and cannot. Why not?</p>",
    figure: figIndet,
    choices: [
      "Adding another support removes all bending moment from the beam",
      "The extra reaction is redundant; compatibility sets the sharing",
      "The modulus E drops out, so the problem becomes unsolvable",
      "There are only two independent equilibrium equations in 2D here",
    ],
    answer: 1,
    explanation: "<p>A pin plus a roller gives three reaction components, which is exactly what planar equilibrium can solve. Add a third vertical support and you have four unknowns against the same three equations, so the structure is indeterminate to the first degree.</p><p>Equilibrium still holds, it tells you the reactions sum to wL and that moments balance, but it cannot say how the load splits between the middle support and the ends. The extra equation is geometric: the beam deflection at the middle support must equal whatever displacement that support imposes, usually zero. That equation is the only place EI enters, which is why an indeterminate problem needs a stiffness calculation and a determinate one does not.</p><p>The practical consequence is worth naming in an interview: because reactions now depend on stiffness and imposed displacement, support settlement, thermal growth and assembly shims generate real forces in an indeterminate beam. In a determinate beam they generate none.</p>",
  },
  {
    id: "beam-deflection-q24",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A 2.0 m bench rail sits on two end mounts. E = 70 GPa and I = 3.0&times;10<sup>&minus;6</sup> m<sup>4</sup>. It carries a 500 N fixture bolted at midspan plus 100 N/m of cable tray hung uniformly along it. What is the total midspan deflection in mm?</p>",
    figure: figSuperQ,
    answer: 0.496,
    unit: "mm",
    explanation: "<p>Both cases are linear elastic on the same unchanged structure, so superpose them.</p><p class=\"eq\">&delta;<sub>P</sub> = PL<sup>3</sup>/48EI = 500(2.0)<sup>3</sup>/[48(70&times;10<sup>9</sup>)(3.0&times;10<sup>&minus;6</sup>)] = 3.97&times;10<sup>&minus;4</sup> m</p><p class=\"eq\">&delta;<sub>w</sub> = 5wL<sup>4</sup>/384EI = 5(100)(2.0)<sup>4</sup>/[384(70&times;10<sup>9</sup>)(3.0&times;10<sup>&minus;6</sup>)] = 9.92&times;10<sup>&minus;5</sup> m</p><p class=\"eq\">&delta;<sub>total</sub> = 3.97&times;10<sup>&minus;4</sup> + 9.92&times;10<sup>&minus;5</sup> = <strong>0.496 mm</strong></p><p>Notice the split: the point load contributes 80% even though the tray totals 200 N against the fixture's 500 N. The centre of the span is where a load does the most damage.</p><p>Superposition is legitimate here only because the mounts stay in contact, nothing yields, and 0.5 mm on a 2 m span is far into the small-deflection regime. If the tray hangers had slack that took up partway through loading, the sum would be wrong.</p>",
  },
  {
    id: "beam-deflection-q25",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A 1.0 m granite bar sags 0.40 mm under its own weight when supported at both ends. A 3.0 m version is made by scaling every dimension by three. What is the new self-weight sag?</p>",
    choices: [
      "0.40 mm. Geometric scaling leaves the sag unchanged",
      "1.2 mm. Sag grows in proportion to the length",
      "32.4 mm. Sag grows with the fourth power of the scale",
      "3.6 mm. Sag grows with the square of the scale",
    ],
    answer: 3,
    explanation: "<p>Track how each term scales with a linear scale factor s. Self-weight per unit length is w = &rho;gA, and area goes as s<sup>2</sup>. Second moment of area goes as s<sup>4</sup>. Span goes as s.</p><p class=\"eq\">&delta; = 5wL<sup>4</sup>/384EI &prop; s<sup>2</sup> &middot; s<sup>4</sup> / s<sup>4</sup> = s<sup>2</sup></p><p class=\"eq\">&delta; = 0.40 &times; 3<sup>2</sup> = <strong>3.6 mm</strong></p><p>The L<sup>4</sup> answer forgets that I grows too, and the unchanged answer assumes the s<sup>4</sup> terms cancel completely.</p><p>The deeper point is the ratio: sag over length goes as s<sup>2</sup>/s = s, so the big bar is <em>relatively</em> three times floppier, not equally floppy. This is why you cannot scale a structure up and expect it to behave the same, why large telescope mirrors need active support, and why a 10 m version of a working 1 m gantry is a different design, not a bigger drawing.</p>",
  },
  {
    id: "beam-deflection-q26",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A 0.50 m aluminium cantilever strip 10 mm thick has electronics on one face, giving a steady 20 &deg;C difference through its thickness. With &alpha; = 23&times;10<sup>&minus;6</sup>/&deg;C, estimate the free-end thermal bow using &kappa; = &alpha;&Delta;T/h and &delta; &asymp; &kappa;L<sup>2</sup>/2. Give the answer in mm.</p>",
    answer: 5.75,
    unit: "mm",
    explanation: "<p>The hot face wants to be longer than the cold face; compatibility through the thickness turns that mismatch into curvature, with no mechanical load involved at all.</p><p class=\"eq\">&kappa; = &alpha;&Delta;T/h = (23&times;10<sup>&minus;6</sup>)(20)/(0.010) = 0.046 m<sup>&minus;1</sup></p><p class=\"eq\">&delta; &asymp; &kappa;L<sup>2</sup>/2 = 0.046(0.50)<sup>2</sup>/2 = 5.75&times;10<sup>&minus;3</sup> m = <strong>5.75 mm</strong></p><p>5.75 mm from a 20 &deg;C gradient is enormous for a precision part, and that is the point of the estimate: on thin strips the thermal case routinely beats the mechanical one. Note the h in the denominator, a <em>thinner</em> strip bows more for the same &Delta;T, which is the opposite of the mechanical intuition.</p><p>The model assumes a free, homogeneous strip and a linear gradient. Constraints, bonded layers with different &alpha; (a bimetallic effect), and temperature-dependent properties all change it. Design fixes: spread the heat, make the path symmetric about the neutral axis, or mount the strip kinematically so bow does not become alignment error.</p>",
  },
  {
    id: "beam-deflection-q27",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A cantilever has a 1.0 mm gap to a hard stop below it. The linear formula predicts 1.5 mm of tip deflection at the design load. What is the modelling caution?</p>",
    choices: [
      "The stop cannot change the reactions, only the local stress",
      "The 1.5 mm figure is impossible, because gaps remove stiffness",
      "Stiffness changes at contact, so one linear curve is not valid",
      "The tip must pass through the stop, since the formula is exact",
    ],
    answer: 2,
    explanation: "<p>The beam follows its free cantilever stiffness only until it has travelled 1.0 mm. After that the stop supplies a reaction, the structure becomes a propped cantilever, the moment diagram redistributes, and the load-deflection curve gets a knee in it. The response is piecewise linear at best, and genuinely nonlinear once friction or local contact flattening are involved.</p><p>So the right analysis is in two parts: find the load at first contact from &delta; = PL<sup>3</sup>/3EI = 1.0 mm, then solve the post-contact structure with compatibility at the stop for the remaining load. In this case the beam reaches contact at two thirds of the design load and the last third goes into a much stiffer system, so the final deflection is a little over 1.0 mm, not 1.5 mm.</p><p>Then check what the stop is now carrying, whether it can take the reaction, and whether repeated contact means impact, noise, wear or fretting fatigue at the contact patch.</p>",
  },
  {
    id: "beam-deflection-q28",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>Two identical flexure blades support a platform in parallel. Each measures 300 N/mm of vertical stiffness on its own. The platform carries 120 N applied centrally between them. What is the vertical deflection in mm?</p>",
    answer: 0.2,
    unit: "mm",
    explanation: `<p class="eq">k<sub>total</sub> = k<sub>1</sub> + k<sub>2</sub> = 300 + 300 = 600 N/mm</p>
<p class="eq">&delta; = P/k = 120/600 = <strong>0.200 mm</strong></p>
<p>Parallel load paths share the same displacement, so their stiffnesses add. Springs side by side add stiffness; springs end to end add <em>compliance</em>, so two 300 N/mm flexures in series would give 150 N/mm and 0.8 mm. Get that backwards and you are out by a factor of four.</p>`,
  },
  {
    id: "beam-deflection-q29",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A pick-and-place arm has acceptable static sag but its first natural frequency is too low, and it rings for a second after every move. How are the two symptoms connected?</p>",
    choices: [
      "Tip stiffness k = P/&delta; also sets f = (1/2&pi;)&radic;(k/m)",
      "They are unrelated; sag is static and modes are dynamic",
      "Natural frequency is governed by the yield strength of the arm",
      "Adding mass at the tip will raise the first natural frequency",
    ],
    answer: 0,
    explanation: "<p>Static sag and first mode are the same compliance wearing different units. Measure the deflection under a known tip load, get k = P/&delta;, and a single-degree-of-freedom estimate gives f &asymp; (1/2&pi;)&radic;(k/m) immediately. A structure that visibly sags almost always has a low first mode.</p><p>Yield strength appears nowhere in an elastic frequency estimate. And adding mass <em>lowers</em> frequency. F goes as 1/&radic;m, which is why bolting a counterweight on to &ldquo;settle it down&rdquo; usually makes the ringing worse.</p><p>Because f goes as &radic;(k/m) and k goes as 1/L<sup>3</sup>, span is the strongest lever here too: shortening the arm by 25% gives 2.4 times the stiffness and about 1.5 times the frequency, while doubling the wall thickness of a thin tube buys roughly 1.4 times the frequency and adds mass working against you.</p>",
  },
  {
    id: "beam-deflection-q30",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A flexible bracket measures 20 000 N/m of tip stiffness and supports an effective mass of 5.0 kg. Estimate the first natural frequency in Hz using f = (1/2&pi;)&radic;(k/m).</p>",
    answer: 10.1,
    unit: "Hz",
    explanation: `<p class="eq">f = (1/2&pi;)&radic;(k/m) = (1/6.283)&radic;(20000/5.0) = <strong>10.1 Hz</strong></p>
<p>Cross-check against the static sag: under its own 49 N of weight this bracket droops 2.45 mm, and the rule of thumb f &asymp; 15.8/&radic;(&delta; in mm) gives 10.1 Hz. The two agree because they are the same calculation.</p>
<p>10 Hz is low enough that most machine motion will excite it. The estimate is crude, since real brackets have distributed mass and several modes, but it is the right number to compute before booking modal FEA. It also names the fix: raise k by shortening the span or deepening the section, because m is usually payload you cannot remove.</p>`,
  },
  {
    id: "beam-deflection-q31",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>Design a rectangular cantilever leaf spring: 50 N/mm rate at the tip, 150 mm free length, 30 mm wide, spring steel with E = 207 GPa. What leaf thickness h is required, in mm?</p>",
    figure: figSpring,
    answer: 4.77,
    unit: "mm",
    explanation: "<p>Start from the tip stiffness of a cantilever and work back to the section.</p><p class=\"eq\">k = 3EI/L&sup3; &nbsp;&rarr;&nbsp; I = kL&sup3;/3E</p><p class=\"eq\">I = (5.0&times;10<sup>4</sup>)(0.150)&sup3;/[3(207&times;10<sup>9</sup>)] = 168.75/6.21&times;10<sup>11</sup> = 2.72&times;10<sup>&minus;10</sup> m&#8308;</p><p class=\"eq\">h = (12I/b)<sup>1/3</sup> = [12(2.72&times;10<sup>&minus;10</sup>)/0.030]<sup>1/3</sup> = 4.77&times;10<sup>&minus;3</sup> m = <strong>4.77 mm</strong></p><p>Now do the check that decides whether the design is real. At 40 mm of travel the tip force is P = k&delta; = 2000 N, the root moment is PL = 300 N&middot;m, and</p><p class=\"eq\">&sigma;<sub>root</sub> = 3E&delta;h/2L&sup2; = 3(207&times;10<sup>9</sup>)(0.040)(0.00477)/[2(0.150)&sup2;] = 2630 MPa</p><p>Spring steel tops out near 1600&ndash;1900 MPa, so this leaf yields long before full travel. Note that width cancels out of the stress expression entirely: once you fix the travel, the length and the thickness alone decide the stress. To fix it you must make the leaf longer or thinner (&sigma; falls as h/L<sup>2</sup>) and then recover the lost rate with width, which is free in stress terms. Doubling L to 300 mm and re-solving drops the peak stress by about four.</p>",
  },
  {
    id: "beam-deflection-q32",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A 20 mm wide solid rectangular aluminium cantilever must not deflect more than 1.0 mm under a 20 N tip load. L = 0.50 m and E = 70 GPa. What minimum depth h is required, in mm?</p>",
    answer: 19.3,
    unit: "mm",
    explanation: "<p>Two steps: required I from the stiffness requirement, then the depth that delivers it.</p><p class=\"eq\">I = PL&sup3;/(3E&delta;) = 20(0.50)&sup3;/[3(70&times;10<sup>9</sup>)(0.001)] = 2.5/2.1&times;10<sup>8</sup> = 1.19&times;10<sup>&minus;8</sup> m&#8308;</p><p class=\"eq\">h = (12I/b)<sup>1/3</sup> = [12(1.19&times;10<sup>&minus;8</sup>)/0.020]<sup>1/3</sup> = 0.0193 m = <strong>19.3 mm</strong></p><p>This depth is driven entirely by stiffness. Check the stress that comes with it: M = 20(0.5) = 10 N&middot;m, I = 1.19&times;10<sup>&minus;8</sup> m<sup>4</sup>, c = 9.65 mm, so &sigma; = Mc/I = 8.1 MPa, about 3% of 6061-T6 yield. The part is 30 times over-strength and exactly on its deflection limit, which is the normal state of affairs for a stiffness-driven design.</p><p>A 20 &times; 19 mm solid aluminium bar is also a wasteful way to buy that I. The same 1.19&times;10<sup>&minus;8</sup> m<sup>4</sup> from a thin-walled box or a ribbed section costs a fraction of the mass, because almost all of the solid bar's material sits near the neutral axis doing nothing.</p>",
  },
  {
    id: "beam-deflection-q33",
    type: "mc",
    difficulty: 2,
    prompt: "<p>You sweep load against tip deflection on a bolted bracket instead of taking a single point. The curve is soft up to about 300 N, then straightens into a stiffer line whose slope matches the hand calculation. What happened?</p>",
    figure: figKnee,
    choices: [
      "The material yielded and then recovered its original modulus",
      "The load cell was miscalibrated over the first part of its range",
      "Shear deflection dominates at low load and bending takes over",
      "Clearance took up and the joint bedded in before it went solid",
    ],
    answer: 3,
    explanation: "<p>Read the shape. The upper segment has the slope the beam theory predicts, so above 300 N the bracket is behaving exactly like the model. The extra motion is all in the first segment, and it is a fixed offset rather than a proportional error, the signature of something taking up: bolt-hole clearance closing, a burr flattening, paint crushing, or the faying surfaces bedding into contact.</p><p>The alternatives do not fit. Yielding softens a structure permanently and would show as a knee going the <em>other</em> way, with a set on unloading. A miscalibrated load cell would scale the whole curve, not add a kink. And shear deflection is perfectly linear, it changes the slope, never the shape.</p><p>The diagnostic that confirms it is to unload: take-up shows as hysteresis and a non-zero deflection at zero load on the first cycle, and it largely disappears by the third cycle once the joint has bedded. That is also the fix. Preload the joint, use fitted or reamed holes, or shim the interface, and it is why acceptance tests specify a preconditioning cycle before the real measurement.</p>",
  },
  {
    id: "beam-deflection-q34",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A cantilever carries P = 100 N at the tip with L = 0.40 m, E = 200 GPa and I = 4.0&times;10<sup>&minus;8</sup> m<sup>4</sup>. Using &theta; = PL<sup>2</sup>/2EI, what is the tip slope in milliradians?</p>",
    answer: 1,
    unit: "mrad",
    explanation: `<p class="eq">&theta; = PL<sup>2</sup>/(2EI) = 100(0.40)<sup>2</sup>/[2(200&times;10<sup>9</sup>)(4.0&times;10<sup>&minus;8</sup>)] = <strong>1.00 mrad</strong></p>
<p>1 mrad is 0.057&deg;, invisible by eye, and it steers a laser about 1 mm per metre of path, twice that if the tilting element is a mirror. It also sits right at the misalignment limit for a cylindrical roller bearing. The corresponding tip deflection is PL<sup>3</sup>/3EI = 0.267 mm, so quoting only the displacement reports a comfortable number and misses the requirement that bites.</p>`,
  },
  {
    id: "beam-deflection-q35",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A beam continuous over three supports gets a 1 mm shim under the middle support during assembly. The measured reaction there jumps by several kN. Why can a shim that small do that?</p>",
    choices: [
      "Equilibrium stops applying once a support is moved by a shim",
      "Only a beam with zero stiffness can generate load from a shim",
      "Compatibility forces the beam to bend to the imposed position",
      "The shim raised the yield strength of the material underneath",
    ],
    answer: 2,
    explanation: "<p>In an indeterminate beam the redundant reaction is whatever force is needed to make the beam's deflected shape agree with the support positions. Shim the middle support up by 1 mm and the beam has no choice but to bend that extra millimetre, and the force required is the beam's stiffness at that point times 1 mm.</p><p>For a short, stiff span that stiffness can easily be several kN/mm, so a 1 mm shim is worth several kN, exactly like compressing a stiff spring by 1 mm. The zero-stiffness option has it exactly backwards: a floppy beam would generate almost nothing.</p><p>Equilibrium has not stopped applying; it simply was never enough on its own. That is the definition of indeterminate.</p><p>This is why fit-up matters so much more on continuous beams, machine bases on three or more feet, and multi-bearing shafts than on determinate structures. Foundation settlement, thermal growth and manufacturing tolerance all become load cases. The standard mitigations are to make one support adjustable, to use a determinate three-point mount, or to specify the shim stack as a controlled assembly step with a measured reaction.</p>",
  },
  {
    id: "beam-deflection-q36",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A 1.5 m aluminium linear-guide rail is bolted down only at its two ends. Its mass works out to 29.4 N/m. E = 69 GPa and I = 2.0&times;10<sup>&minus;8</sup> m<sup>4</sup>. How far does the middle of the rail drop, in mm?</p>",
    answer: 1.4,
    unit: "mm",
    explanation: "<p>There is no external load in the problem statement. Self-weight is the load.</p><p class=\"eq\">&delta;<sub>max</sub> = 5wL<sup>4</sup>/(384EI), &nbsp; L<sup>4</sup> = (1.5)<sup>4</sup> = 5.0625</p><p class=\"eq\">&delta; = 5(29.4)(5.0625)/[384(69&times;10<sup>9</sup>)(2.0&times;10<sup>&minus;8</sup>)] = 744/529900</p><p class=\"eq\">&delta; = 1.40&times;10<sup>&minus;3</sup> m = <strong>1.40 mm</strong></p><p>For a linear guide that is a serious number: the carriage will run 1.4 mm low at midspan and, worse, the rail is curved, so the bearing blocks see a changing angle along the travel. Straightness specifications on profiled rails are typically tens of microns per metre, so this rail is a hundred times out of tolerance purely from gravity.</p><p>The fix is not a stiffer alloy. It is intermediate bolt-down points. Adding one at midspan quarters the span and drops sag by a factor of 16. Or bolting the rail to a stiff base along its whole length, which is exactly what rail manufacturers require in their installation instructions.</p>",
  },
  {
    id: "beam-deflection-q37",
    type: "mc",
    difficulty: 2,
    prompt: "<p>An FEA run reports 0.002 mm of tip deflection for a 1 m nylon cantilever under a 50 N hand load. What do you do before showing that to anyone?</p>",
    choices: [
      "Accept the result, because small deflections are always safe",
      "Check units, modulus, constraints and where the load is applied",
      "Refine the mesh, since only mesh density affects deflection",
      "Look at the peak stress plot instead, since deflection is not meshed",
    ],
    answer: 1,
    explanation: "<p>Do the back-of-envelope first. Nylon is around 2 GPa, and even a fairly chunky 40 &times; 10 mm section gives I = 3.3&times;10<sup>&minus;9</sup> m<sup>4</sup>, so PL<sup>3</sup>/3EI = 50/(3 &times; 2&times;10<sup>9</sup> &times; 3.3&times;10<sup>&minus;9</sup>) &asymp; 2.5 mm. The model is three orders of magnitude stiff. That is not a refinement question, it is a bug.</p><p>The usual culprits, in the order worth checking: a unit mismatch (I in mm<sup>4</sup> against E in Pa), a material card that still says steel, a whole face fixed where the real part is bolted through two holes, bonded contacts tying parts that should slide, or the load smeared over an area that braces the structure.</p><p>Mesh refinement is the wrong instinct here for a specific reason: displacement-based elements are too <em>stiff</em>, so refining a mesh makes a model softer and converges within a few percent. It can never explain a factor of 1000. And a stress plot validates nothing about stiffness.</p><p>The rule to state out loud: never present an FEA number you cannot bracket with a hand calculation.</p>",
  },
  {
    id: "beam-deflection-q38",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A short sandwich-panel cantilever has a soft foam core, so its shear deflection &delta;<sub>s</sub> = PL/(kGA) is not negligible. With P = 1000 N, L = 0.30 m, k = 0.8, G = 5 MPa and A = 0.010 m<sup>2</sup>, what is &delta;<sub>s</sub> in mm?</p>",
    answer: 7.5,
    unit: "mm",
    explanation: "<p>Everything in SI, and watch the MPa:</p><p class=\"eq\">&delta;<sub>s</sub> = PL/(kGA) = 1000(0.30)/[0.8(5&times;10<sup>6</sup>)(0.010)]</p><p class=\"eq\">&delta;<sub>s</sub> = 300/40000 = 7.50&times;10<sup>&minus;3</sup> m = <strong>7.5 mm</strong></p><p>7.5 mm on a 300 mm cantilever is enormous, and none of it is bending. The face sheets can be carbon fibre with a bending stiffness that would suggest microns of movement, and the panel still moves millimetres because the shear has to cross a core with G of 5 MPa. Four orders of magnitude below the face-sheet modulus.</p><p>The design levers follow straight from the formula: raise the core shear modulus (denser foam, honeycomb, or a corrugated core), increase the shear area, shorten the span, or add shear webs. Making the face sheets thicker does almost nothing, which is the counterintuitive result that catches people out on sandwich structures.</p>",
  },
  {
    id: "beam-deflection-q39",
    type: "mc",
    difficulty: 2,
    prompt: "<p>An aluminium cantilever bracket is too flexible. Steel has about three times the modulus. The span and width are fixed, the mass is capped at its current value, and the depth may be chosen freely. Which material gives the stiffer bracket?</p>",
    choices: [
      "Steel, because EI rises with E and the section is unchanged",
      "They tie exactly, because specific stiffness E/&rho; is equal",
      "Aluminium, since at equal mass it can be made much deeper",
      "Steel, but only if the bracket is also made shorter in span",
    ],
    answer: 2,
    explanation: "<p>Hold mass, width and length fixed. Mass goes as &rho;bhL, so the available depth goes as 1/&rho;. Then I = bh<sup>3</sup>/12 goes as 1/&rho;<sup>3</sup>, and the figure of merit is:</p><p class=\"eq\">EI &prop; E/&rho;<sup>3</sup></p><p class=\"eq\">aluminium: 69/2.70&sup3; = 3.51 &nbsp;&nbsp; steel: 200/7.85&sup3; = 0.41</p><p>Aluminium wins by about 8.5&times;. It is 2.9 times less stiff per unit volume but 2.9 times less dense, and because depth enters cubed, that density advantage is worth three factors while the modulus penalty is worth only one.</p><p>The tie answer is a real result, but for a different constraint: if the <em>depth</em> is fixed and only the width can grow, then I goes as 1/&rho; and the merit index is E/&rho;, which is close to 25 GPa per g/cm<sup>3</sup> for steel, aluminium and magnesium alike. That is the famous &ldquo;all structural metals have the same specific stiffness&rdquo; fact, and it only applies when you cannot use the third dimension.</p><p>So the real question in a design review is always which dimension you are allowed to grow. If packaging lets you go deeper, light alloys and composites win; if you are stuck with a thin section, they do not.</p>",
  },
  {
    id: "beam-deflection-q40",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A 1.0 m cantilever with EI = 5000 N&middot;m<sup>2</sup> carries 100 N at the tip and 50 N at 0.50 m from the wall. Using &delta;<sub>tip</sub> = Pa<sup>2</sup>(3L &minus; a)/6EI for a load at distance a, estimate the total tip deflection in mm.</p>",
    answer: 7.71,
    unit: "mm",
    explanation: "<p>Superpose the two point loads.</p><p class=\"eq\">&delta;<sub>1</sub> = PL&sup3;/3EI = 100(1.0)&sup3;/[3(5000)] = 6.67&times;10<sup>&minus;3</sup> m</p><p class=\"eq\">&delta;<sub>2</sub> = Pa&sup2;(3L &minus; a)/6EI = 50(0.50)&sup2;(3.0 &minus; 0.50)/[6(5000)] = 31.25/30000 = 1.04&times;10<sup>&minus;3</sup> m</p><p class=\"eq\">&delta;<sub>total</sub> = 6.67 + 1.04 = <strong>7.71 mm</strong></p><p>Look at what the position bought you. The inboard load is half the size of the tip load but contributes only 16% as much tip motion, a factor of six, not two. Put the same 50 N at the tip instead and it would add 3.33 mm.</p><p>That ratio is a genuine design lever. Moving a motor, a battery or a counterweight inboard on a gantry arm is often the cheapest stiffness fix available, because it costs nothing in material and the payoff goes roughly as the cube of how far in you move it. Check the formula at a = L: Pa<sup>2</sup>(3L &minus; a)/6EI becomes PL<sup>3</sup>(2)/6EI = PL<sup>3</sup>/3EI, the familiar tip case.</p>",
  },
  {
    id: "beam-deflection-q41",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A thin spring-steel arm deflects about 15% of its length under load, and the measured force is noticeably higher than PL<sup>3</sup>/3EI predicts. The steel never yields. Why does the small-deflection formula fail?</p>",
    choices: [
      "Geometry changes the moment arm, so stiffness is not constant",
      "The formula gets more accurate as the deflection grows larger",
      "Young's modulus stops applying once deflection becomes visible",
      "Boundary conditions no longer matter at large deflections",
    ],
    answer: 0,
    explanation: "<p>Small-deflection beam theory writes equilibrium on the <em>undeformed</em> geometry and approximates curvature as v'' rather than the full expression. Both approximations assume rotations are small.</p><p>At 15% of span the arm has curled enough that its tip has pulled measurably back towards the root, so the horizontal moment arm from the wall to the load is shorter than L. A shorter arm means less moment for the same force, which means the arm resists more, the structure stiffens. That is exactly the direction of the discrepancy observed, and it is a pure geometry effect with the material still perfectly Hookean.</p><p>The other options invert the limitation or discard properties that have not changed. E is a material constant and does not care how far the part has moved; boundary conditions matter more at large deflection, not less.</p><p>The next tool is an elastica solution or a geometrically nonlinear FEA run. This matters for compliant mechanisms, snap-fits, leaf springs, catheter and endoscope tubes, and anything designed to flex as a feature rather than as an error.</p>",
  },
  {
    id: "beam-deflection-q42",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A 1.6 m steel cross-member is welded at both ends into heavy plates that block rotation, and carries 8 kN at midspan. E = 200 GPa and I = 1.2&times;10<sup>&minus;5</sup> m<sup>4</sup>. Using &delta; = PL<sup>3</sup>/192EI for the fixed-fixed case, find the midspan deflection in mm.</p>",
    answer: 0.0711,
    unit: "mm",
    explanation: "<p>Straight substitution into the fixed-fixed centre-load case:</p><p class=\"eq\">&delta; = PL&sup3;/192EI = 8000(1.6)&sup3;/[192(200&times;10<sup>9</sup>)(1.2&times;10<sup>&minus;5</sup>)]</p><p class=\"eq\">&delta; = 32768/(4.608&times;10<sup>8</sup>) = 7.11&times;10<sup>&minus;5</sup> m = <strong>0.0711 mm</strong></p><p>Compare the coefficients for a centre point load: 1/3 cantilever, 1/48 simply supported, 1/192 fixed-fixed. Fixing both ends is worth a factor of four over pinning them. Note that this is <em>not</em> the same factor of five you get under a uniform load, which is a detail worth having straight.</p><p>The usual caveat applies harder than usual at these numbers. 0.071 mm is small enough that any real rotation at the welded plates will dominate it, so the honest statement is that the beam contributes 0.07 mm and the joint contributes whatever it contributes. If the requirement is anywhere near 0.1 mm, go and measure the end plates.</p>",
  },
  {
    id: "beam-deflection-q43",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A stiff CFRP beam is bonded to its mount through a 0.5 mm adhesive layer. The assembly measures far softer than the beam calculation. How should the total compliance be handled?</p>",
    choices: [
      "Ignore the bond line, since it is outside the beam span",
      "Use only the adhesive yield strength; shear modulus cannot matter",
      "Add the compliances in series: beam bending plus bond-line shear",
      "Stiffen the beam further and leave the bonded joint as it is",
    ],
    answer: 2,
    explanation: "<p>Everything in the load path deforms, and compliances in series add: 1/k<sub>total</sub> = 1/k<sub>beam</sub> + 1/k<sub>joint</sub>. A structural epoxy has G around 1 GPa against CFRP's 100 GPa or more along the fibre, so the bond line can easily be the softest element even though it is only half a millimetre thick.</p><p>The shear compliance of the layer goes as t/(G&middot;A<sub>bond</sub>), which tells you the three levers immediately: a thinner bond line, a larger bonded area, or a higher-modulus adhesive. Yield strength tells you whether the joint <em>fails</em>; shear modulus tells you how far it <em>moves</em>, and those are different questions.</p><p>Stiffening the beam is the option that feels productive and achieves nothing. If the beam already contributes a tenth of the total compliance, making it twice as stiff improves the assembly by 5%.</p><p>The other fix worth naming is to move the joint out of the high-moment region, or to carry the moment through mechanical fasteners and let the adhesive do sealing and load spreading only.</p>",
  },
  {
    id: "beam-deflection-q44",
    type: "mc",
    difficulty: 1,
    prompt: "<p>A cantilever 0.40 m long with EI = 1000 N&middot;m<sup>2</sup> has a pure moment of 20 N&middot;m applied at its free end, with no transverse force. Using &theta; = ML/EI, what is the free-end rotation?</p>",
    choices: ["1.6 mrad", "8.0 mrad", "20 mrad", "4.0 mrad"],
    answer: 1,
    explanation: "<p>A pure end moment gives constant curvature along the beam, so the rotation is just curvature times length:</p><p class=\"eq\">&theta; = ML/EI = 20(0.40)/1000 = 8.00&times;10<sup>&minus;3</sup> rad = <strong>8.0 mrad</strong></p><p>The distractors are each a specific slip. 20 mrad drops the length entirely (M/EI). 4.0 mrad borrows the factor of 2 from the transverse-load slope formula PL<sup>2</sup>/2EI. 1.6 mrad is actually the tip <em>displacement</em> ML<sup>2</sup>/2EI = 1.6 mm, read off as if it were an angle, an easy mistake when both come out as small numbers.</p><p>Units are the check: N&middot;m times m over N&middot;m<sup>2</sup> is dimensionless, which is what a radian is.</p><p>Pure end moments are easy to overlook because no force arrow appears on the sketch, yet they arise wherever an offset load is carried in through a bracket foot or a bolted flange, and they are usually what ruins the angular alignment of an optic or a bearing.</p>",
  },
  {
    id: "beam-deflection-q45",
    type: "mc",
    difficulty: 2,
    prompt: "<p>An injection-moulded polypropylene shelf meets its deflection spec on day one and has sagged visibly after six months under exactly the same constant load. What belongs in the model?</p>",
    choices: [
      "Creep modulus: stiffness falls with time under sustained load",
      "Only the short-term modulus, since the load has not changed",
      "Only Poisson's ratio, because the sag is a lateral strain effect",
      "Only surface hardness, since creep is a form of indentation",
    ],
    answer: 0,
    explanation: "<p>Polymers are viscoelastic. Under sustained stress the strain keeps growing, so the <em>effective</em> modulus you should use falls with time. For polypropylene the 1000-hour creep modulus can be a third to a half of the short-term tensile modulus at room temperature, and it drops further with temperature and stress level.</p><p>So the correct calculation is not PL<sup>3</sup>/3EI with the data-sheet E, it is the same formula with the creep modulus at the design life, design temperature and design stress, read off an isochronous stress-strain curve.</p><p>The design fixes follow from that: lower the sustained stress (deeper section, shorter span, more supports), pick a semi-crystalline or filled grade with better creep resistance, add a metal or glass-filled stiffener that carries the sustained load elastically, or design an adjustable support so the sag can be taken out in service.</p><p>The interviewer's follow-up is usually about validation: accelerated creep testing at elevated temperature with time-temperature superposition, because nobody has six months to wait for every design iteration.</p>",
  },
  {
    id: "beam-deflection-q46",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A simply supported beam under a full-span uniform load deflects 8.0 mm at a 2.0 m span. Section, material and load per metre are all fixed. What span meets a 2.0 mm allowable, in m?</p>",
    answer: 1.41,
    unit: "m",
    explanation: "<p>With w, E and I held constant, the only variable is the span, and it enters to the fourth power:</p><p class=\"eq\">&delta;<sub>new</sub>/&delta;<sub>old</sub> = (L<sub>new</sub>/L<sub>old</sub>)<sup>4</sup></p><p class=\"eq\">L<sub>new</sub> = L<sub>old</sub>(&delta;<sub>new</sub>/&delta;<sub>old</sub>)<sup>1/4</sup> = 2.0(2.0/8.0)<sup>1/4</sup> = 2.0(0.25)<sup>0.25</sup></p><p class=\"eq\">L<sub>new</sub> = 2.0(0.7071) = <strong>1.41 m</strong></p><p>A 29% reduction in span buys a 75% reduction in deflection. The classic wrong answer is 0.5 m, from scaling span in direct proportion to deflection.</p><p>This is the most useful single number in the topic when you are arguing for a design change. Nobody will let you make a beam four times stiffer, but almost everyone will consider moving a support in by 30%, and it does the same job. Note the total load also falls, since w is per metre. If the total load were held fixed instead, the exponent would be 3 rather than 4 and you would need 1.26 m.</p>",
  },
  {
    id: "beam-deflection-q47",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A 2 m aluminium rail has 0.2 mm of clearance to a neighbouring casting and will see a 50 &deg;C temperature rise in service. Why is a bending-deflection review on its own incomplete?</p>",
    choices: [
      "Thermal growth only begins once the material has yielded first",
      "Beam deflection formulas already contain thermal expansion",
      "Heating changes appearance and colour, but not dimensions",
      "Free growth &alpha;L&Delta;T here is 2.3 mm, far over the gap",
    ],
    answer: 3,
    explanation: "<p>Run the number before anything else:</p><p class=\"eq\">&Delta;L = &alpha;L&Delta;T = (23&times;10<sup>&minus;6</sup>)(2.0)(50) = 2.3&times;10<sup>&minus;3</sup> m = 2.3 mm</p><p>That is eleven times the available clearance, and it has nothing to do with bending. The rail will hit the casting long before any load is applied.</p><p>Once it does, the growth stops being free and becomes a constraint problem: the rail is now loaded in compression against the casting at whatever force the two stiffnesses demand, which can be very large, and if that force is off the neutral axis it also bends the rail. Yielding is not required for thermal strain to exist, it is the consequence, not the cause.</p><p>Standard beam formulas contain no temperature term at all, so thermal effects have to be added as separate cases: free growth, constrained thermal stress, and through-thickness gradient bow. Design answers are to provide a slot or a sliding foot at one end, to fix at the centre and let the rail grow both ways (halving the motion at each end), or to match the coefficients of expansion across the interface.</p>",
  },
  {
    id: "beam-deflection-q48",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A steel L-bracket has an 80 mm vertical leg bolted to the wall at its base and a 120 mm horizontal arm at the top of that leg. A 300 N vertical load hangs at the arm tip. Both members are 25 mm wide and 6 mm thick, E = 200 GPa. Estimate the tip deflection in mm.</p>",
    figure: figLBracket,
    answer: 5.76,
    unit: "mm",
    explanation: "<p>The tip moves for two reasons, and most candidates find only the first.</p><p class=\"eq\">I = bh&sup3;/12 = 0.025(0.006)&sup3;/12 = 4.50&times;10<sup>&minus;10</sup> m&#8308;, &nbsp; EI = 90 N&middot;m&sup2;</p><p><strong>1. The arm bends</strong> as a cantilever off the corner:</p><p class=\"eq\">&delta;<sub>arm</sub> = Pa&sup3;/3EI = 300(0.12)&sup3;/[3(90)] = 0.5184/270 = 1.92 mm</p><p><strong>2. The leg rotates.</strong> The applied load runs parallel to the leg, so its moment about every point on the leg is the same: M = Pa = 300(0.12) = 36 N&middot;m, constant over the whole height. Constant moment gives constant curvature, so the corner rotates by</p><p class=\"eq\">&theta; = MH/EI = 36(0.08)/90 = 0.0320 rad</p><p>and that rotation swings the whole arm through</p><p class=\"eq\">&delta;<sub>rot</sub> = &theta;a = 0.0320(0.12) = 3.84 mm</p><p class=\"eq\">&delta;<sub>tip</sub> = 1.92 + 3.84 = <strong>5.76 mm</strong></p><p>The leg contributes two thirds of the answer even though it is shorter than the arm, because rotation gets multiplied by the arm length. Anyone who models only the arm is 67% low.</p><p>The design lesson follows directly: thicken the <em>leg</em>, not the arm. Going from 6 mm to 9 mm on the leg alone cuts its term by 3.4 and takes the total to about 3.0 mm.</p>",
  },
  {
    id: "beam-deflection-q49",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A preloaded bolted mount behaves very stiffly for small service loads in one direction, then becomes noticeably softer when the load reverses. Stress stays well below yield throughout. What is the mechanism?</p>",
    choices: [
      "Preload permanently raises the modulus of the clamped members",
      "Reversal unloads the faces, so contact and stiffness change",
      "Bolted joints have constant stiffness in every load direction",
      "Load reversal cannot alter deflection while stress is below yield",
    ],
    answer: 1,
    explanation: "<p>Preload puts the clamped interface into compression over a broad contact area. While that contact stays closed, load transfers through the faces themselves and the joint is stiff and repeatable, often far stiffer than the bolts alone.</p><p>Reverse the load and part of the interface unloads. Once local contact pressure reaches zero the faces begin to separate, and the load path shifts from broad face contact to bolt tension, bolt bending and local bearing at the hole. All much more compliant. The transition is gradual, so the measured stiffness falls smoothly rather than stepping.</p><p>Nothing about the material changed. E is the same and no fibre yielded; the <em>boundary condition</em> changed, which is the same lesson as a gap closing onto a stop, running in reverse.</p><p>What to design and test for: keep the service load below the separation load with margin, size the preload against that rather than only against slip, and run a full reversed load-deflection cycle looking for hysteresis. A loop between the loading and unloading curves means friction and microslip, and it means the mount will not return to the same position twice. Fatal for anything that has to hold alignment.</p>",
  },
  {
    id: "beam-deflection-q50",
    type: "mc",
    difficulty: 1,
    prompt: "<p>A simply supported member with a centre load deflects 1.2 mm. The same member, same span, same load, same section, is instead cantilevered with the load at the free end. What deflection would you expect?</p>",
    choices: ["4.8 mm", "2.4 mm", "19.2 mm", "0.075 mm"],
    answer: 2,
    explanation: "<p>Take the ratio of the two coefficients; P, L, E and I all cancel:</p><p class=\"eq\">(PL&sup3;/3EI)/(PL&sup3;/48EI) = 48/3 = 16</p><p class=\"eq\">&delta;<sub>cantilever</sub> = 16(1.2) = <strong>19.2 mm</strong></p><p>Sixteen times, from removing one support. Nothing about the material or the section changed. Only the boundary conditions and the resulting moment diagram, which goes from a peak of PL/4 at midspan to PL at the wall.</p><p>This is the ratio worth memorising as a check, because it catches formula-selection errors instantly. If a spreadsheet ever reports a simply supported beam deflecting more than the equivalent cantilever, the support case was entered wrong.</p><p>It is also the reason overhangs and unsupported ends are so expensive in stiffness terms, and why adding one modest support to a floppy assembly usually beats any amount of material.</p>",
  },
  {
    id: "beam-deflection-q51",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A cantilever carries a 250 N tip load. The drawing gives L = 800 mm, E = 70 GPa and I = 45 000 mm<sup>4</sup>. What is the tip deflection?</p>",
    choices: ["13.5 mm", "0.0135 mm", "1.35 mm", "135 mm"],
    answer: 0,
    explanation: "<p>Unit hygiene decides this one. Work consistently in newtons and millimetres, where E = 70 GPa = 70 000 N/mm<sup>2</sup>:</p><p class=\"eq\">&delta; = PL&sup3;/3EI = 250(800)&sup3;/[3(70000)(45000)]</p><p class=\"eq\">&delta; = 1.28&times;10<sup>11</sup>/9.45&times;10<sup>9</sup> = <strong>13.5 mm</strong></p><p>Or convert to SI: I = 45 000 mm<sup>4</sup> = 4.5&times;10<sup>&minus;8</sup> m<sup>4</sup>, L = 0.8 m, and &delta; = 250(0.512)/[3(70&times;10<sup>9</sup>)(4.5&times;10<sup>&minus;8</sup>)] = 128/9450 = 0.01354 m. Same answer.</p><p>The failure mode this question is built around is mixing the two: putting I in mm<sup>4</sup> alongside E in Pa and L in m gives an answer off by 10<sup>12</sup>. What makes it dangerous is that the wrong answers are often not absurd. 0.0135 mm looks like a perfectly reasonable deflection for a bracket, so nothing about it triggers suspicion.</p><p>The defence is an order-of-magnitude expectation before you compute. This is an aluminium-modulus beam 800 mm long with an I equivalent to roughly a 20 &times; 28 mm rectangle, carrying 250 N. Millimetres is the right ballpark; microns is not.</p>",
  },
  {
    id: "beam-deflection-q52",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A 3.0 m conveyor support beam is built into a wall at one end and rests on a stanchion at the other. It carries 4.0 kN/m and has EI = 6.0&times;10<sup>6</sup> N&middot;m<sup>2</sup>. Using &delta;<sub>max</sub> = wL<sup>4</sup>/185EI for a propped cantilever, find the maximum deflection in mm.</p>",
    answer: 0.292,
    unit: "mm",
    explanation: "<p>Substitute into the propped-cantilever result:</p><p class=\"eq\">&delta;<sub>max</sub> = wL&#8308;/185EI = 4000(3.0)&#8308;/[185(6.0&times;10<sup>6</sup>)]</p><p class=\"eq\">&delta; = 324000/(1.11&times;10<sup>9</sup>) = 2.92&times;10<sup>&minus;4</sup> m = <strong>0.292 mm</strong></p><p>Two comparisons make the number meaningful. Without the stanchion the same beam is a plain cantilever at wL<sup>4</sup>/8EI = 6.75 mm. 23 times worse. Simply supported at both ends it would be 5wL<sup>4</sup>/384EI = 4.22 mm. The propped case beats both because the built-in end supplies a restraining moment as well as a force.</p><p>Two details that catch people out. The maximum does not occur at midspan: it sits about 0.42L from the propped end, which is why the coefficient is the odd-looking 1/185 rather than something tidy. And the result assumes the prop does not settle. Because the beam is indeterminate, a stanchion that drops even 0.3 mm changes the reactions substantially, so the foundation under it matters as much as the beam.</p>",
  },
  {
    id: "beam-deflection-q53",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A 20 mm solid steel rod is replaced by a steel tube of 25 mm outside diameter carrying the same cross-sectional area, so mass per metre is unchanged. By what factor does the second moment of area increase?</p>",
    choices: [
      "1.0&times;. Area is unchanged, so I is too",
      "1.25&times;. Scaling with the diameter ratio",
      "2.1&times;. Area moved out to a larger radius",
      "2.4&times;. Treating the 25 mm tube as solid",
    ],
    answer: 2,
    explanation: "<p>Find the bore that keeps the area equal, then compare the two I values.</p><p class=\"eq\">A = &pi;(20)&sup2;/4 = 314 mm&sup2; &rarr; 25&sup2; &minus; d<sub>i</sub>&sup2; = 400 &rarr; d<sub>i</sub> = 15 mm (2.5 mm wall)</p><p class=\"eq\">I<sub>solid</sub> = &pi;(20)&#8308;/64 = 7850 mm&#8308;</p><p class=\"eq\">I<sub>tube</sub> = &pi;(25&#8308; &minus; 15&#8308;)/64 = 16 690 mm&#8308;</p><p class=\"eq\">ratio = 16690/7850 = <strong>2.13&times;</strong></p><p>Free stiffness for identical mass, purely from moving material away from the neutral axis. The 2.4&times; answer treats the tube as a solid 25 mm bar, which would also be 56% heavier; the 1.0&times; answer confuses area with second moment.</p><p>Push it further and the returns grow: a 32 mm outside diameter tube at the same area needs a 1.6 mm wall and gives roughly 3.4&times;. What stops you is not the formula but local wall buckling, ovalisation, denting in handling, and joint design, which is why the ratio of diameter to wall thickness is a design limit in its own right.</p>",
  },
  {
    id: "beam-deflection-q54",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A spur gear sits at the midspan of a 30 mm solid steel shaft carried in bearings 180 mm apart. The resultant tooth load is 2.4 kN and E = 207 GPa. Using &theta; = PL<sup>2</sup>/16EI, what is the shaft slope at each bearing, in mrad?</p>",
    figure: figShaft,
    answer: 0.59,
    unit: "mrad",
    explanation: "<p>Get the section property first, then the slope.</p><p class=\"eq\">I = &pi;d&#8308;/64 = &pi;(0.030)&#8308;/64 = 3.976&times;10<sup>&minus;8</sup> m&#8308;, &nbsp; EI = 8231 N&middot;m&sup2;</p><p class=\"eq\">&theta; = PL&sup2;/16EI = 2400(0.180)&sup2;/[16(8231)] = 77.76/131700</p><p class=\"eq\">&theta; = 5.90&times;10<sup>&minus;4</sup> rad = <strong>0.590 mrad</strong></p><p>That is 0.034&deg;, or a little over 2 arc-minutes. For context, deep-groove ball bearings are typically rated for 2&ndash;10 arc-minutes of misalignment while cylindrical roller bearings tolerate only about 1&ndash;4, so this shaft is comfortable on balls and marginal on rollers.</p><p>Worth computing the companion number too: the deflection at the gear is PL<sup>3</sup>/48EI = 0.0354 mm, which is well inside the 0.1&ndash;0.13 mm that gear practice usually allows across a face. So the deflection passes easily and the slope is the number under pressure, exactly the pattern from the deflected-shape question, where slope peaks where displacement is zero.</p><p>Since &theta; goes as L<sup>2</sup>/d<sup>4</sup>, moving the bearings 20% closer buys 36%, and going to a 33 mm shaft buys 41%.</p>",
  },
  {
    id: "beam-deflection-q55",
    type: "mc",
    difficulty: 2,
    prompt: "<p>That gearbox shaft works out at about 0.6 mrad of slope at each bearing and 0.035 mm of deflection at the gear. Which consequence should you look at first?</p>",
    choices: [
      "The tooth root stress, which the slope raises directly",
      "Nothing, since 0.035 mm is below any credible tolerance",
      "Shaft fatigue, because slope is itself a cyclic stress",
      "Bearing misalignment and uneven tooth face loading",
    ],
    answer: 3,
    explanation: "<p>0.035 mm of deflection at the mesh is genuinely comfortable. Gear practice normally allows 0.1 mm or so across the face. The number that is not comfortable is the angle.</p><p>Two things care about it. First, the bearings: cylindrical roller bearings tolerate only about 1&ndash;4 arc-minutes (0.3&ndash;1.2 mrad) of misalignment before the rollers edge-load and life collapses, and 0.6 mrad sits inside that band with very little margin. Second, the mesh: shaft slope tilts the gear so the tooth face no longer contacts evenly, concentrating load at one end of the face width and driving up local contact stress and scuffing risk.</p><p>The tooth root stress is not raised &ldquo;directly&rdquo; by slope, it rises because the load distribution across the face becomes uneven, which is the same story told the other way round. And slope is a deflection, not a stress, so it does not itself fatigue the shaft.</p><p>The standard fixes are lead crowning on the teeth to tolerate misalignment, self-aligning or spherical bearings, moving the bearings closer to the gear, or a larger shaft diameter, and note that d<sup>4</sup> in I means diameter is by far the cheapest lever.</p>",
  },
  {
    id: "beam-deflection-q56",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A beam is pinned at A and on a roller at B, 1.2 m apart, and continues 0.4 m past B as an overhang. A 500 N load hangs at the overhang tip. EI = 2.0&times;10<sup>4</sup> N&middot;m<sup>2</sup>. Estimate the tip deflection in mm.</p>",
    figure: figOverhang,
    answer: 2.13,
    unit: "mm",
    explanation: "<p>Treating the overhang as a cantilever off a rigid support is the mistake. B is not rigid; it rotates.</p><p><strong>1. The overhang bends</strong> like a cantilever off B:</p><p class=\"eq\">&delta;<sub>1</sub> = Pa&sup3;/3EI = 500(0.4)&sup3;/[3(2.0&times;10&#8308;)] = 32/60000 = 0.533 mm</p><p><strong>2. The back span rotates B.</strong> The overhang applies a moment M = Pa = 200 N&middot;m to the end of span AB, which is a simply supported span with an end moment. Its end rotation is</p><p class=\"eq\">&theta;<sub>B</sub> = ML/3EI = 200(1.2)/[3(2.0&times;10&#8308;)] = 4.00&times;10<sup>&minus;3</sup> rad</p><p>and that rotation swings the overhang tip down by</p><p class=\"eq\">&delta;<sub>2</sub> = &theta;<sub>B</sub>a = 4.00&times;10<sup>&minus;3</sup>(0.4) = 1.60 mm</p><p class=\"eq\">&delta;<sub>tip</sub> = 0.533 + 1.60 = <strong>2.13 mm</strong></p><p>Three quarters of the tip motion comes from the back span, not the overhang. Cantilevering off B alone would have given 0.53 mm and been 75% low.</p><p>The design consequence is counterintuitive: to stiffen this tip, stiffen or shorten the <em>back span</em>. Halving L to 0.6 m removes 0.8 mm; stiffening the overhang itself removes at most 0.53 mm even if you make it infinitely rigid.</p>",
  },
  {
    id: "beam-deflection-q57",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A 1.5 m granite straightedge is stored on two supports. Moving the supports inboard from the very ends to about 0.21L from each end has what effect?</p>",
    figure: figAiry,
    choices: [
      "It increases the sag, because the two ends now hang unsupported",
      "Peak-to-peak error falls about 20&times;, with ends left parallel",
      "Nothing changes, since the total weight carried is the same",
      "It only helps if the straightedge is stood on edge instead of flat",
    ],
    answer: 1,
    explanation: "<p>The overhangs are doing useful work. Each one applies a hogging moment at its support that fights the sagging moment in the middle span, and the middle span itself is now only 0.577L long, so its 5wL<sup>4</sup>/384EI term collapses by a factor of about nine on span alone.</p><p>Solving the beam properly, the peak-to-peak departure from straight at 0.211L in from each end is about <strong>1/22</strong> of the end-supported value. Support at the ends and the whole 5wL<sup>4</sup>/384EI sag is yours.</p><p>0.2113L is the <strong>Airy</strong> position, defined by separation L/&radic;3 = 0.577L, and it is chosen so the two end faces of the bar stay <em>parallel</em>, which is what matters for a length standard measured face to face. Move slightly further in, to about 0.223L (separation 0.554L), and you minimise the peak-to-peak straightness error instead, giving roughly 1/48 of the end-supported value. Those are the <strong>Bessel</strong>-type minimum-sag points, and they are what you want for a straightedge or a surface plate.</p><p>The two criteria genuinely differ, and knowing which one you are optimising is the whole point of the question. It is also why granite surface plates ship with support-point locations marked on them.</p>",
  },
  {
    id: "beam-deflection-q58",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A rectangular aluminium rib in a chassis is three times more flexible than the requirement allows. Length and end conditions are fixed and the mass budget cannot increase. Which single change buys the stiffness?</p>",
    choices: [
      "Make it 73% deeper and reduce the width to keep mass",
      "Switch to steel at the same section, tripling the modulus",
      "Change from 6061-T6 to 7075-T6 at the same dimensions",
      "Triple the width, which triples I at the same depth",
    ],
    answer: 0,
    explanation: "<p>The mass cap is what makes this a real question. At constant area, b = A/h so I = Ah<sup>2</sup>/12, meaning I goes as the <em>square</em> of depth for free:</p><p class=\"eq\">h<sub>new</sub>/h<sub>old</sub> = &radic;3 = 1.73 &nbsp;&rarr;&nbsp; 73% deeper, width reduced to 1/1.73 of before</p><p>Now check the others against the constraint. Tripling the width does triple I, and triples the mass, so it fails the brief. Steel at the same section triples EI and also triples the mass; if you were allowed the mass you would still be better off making the aluminium deeper, since at fixed mass the merit index for free depth is E/&rho;<sup>3</sup>, where aluminium beats steel by more than eight. And 7075 changes E by a couple of percent, so it does nothing at all.</p><p>The follow-up the interviewer wants: what stops you going deeper still? A tall thin rib eventually buckles locally in the compression flange or trips laterally, and it may not fit the packaging or draw from the mould. So the honest answer is &ldquo;deeper until local stability or manufacturing says stop, then add a flange or close the section.&rdquo;</p>",
  },
  {
    id: "beam-deflection-q59",
    type: "mc",
    difficulty: 2,
    prompt: "<p>Two shelves each span 3.0 m. One carries loose books. The other is a bookcase top with a glued mitre joint and a glass door hung beneath it. Which criteria fit, and what are the allowables?</p>",
    choices: [
      "Both get L/180 = 16.7 mm; criteria do not depend on finish",
      "Books L/360, glass L/180; heavier loads need tighter limits",
      "Books L/240 = 12.5 mm; glass and mitre L/360 = 8.3 mm",
      "Both get L/360; the tighter limit is always the safe choice",
    ],
    answer: 2,
    explanation: "<p>A deflection criterion is chosen from what fails at that deflection, not from the load. Loose books tolerate visible sag, so L/240 (12.5 mm here) is the normal shelving figure, roughly where sag stops reading as flat to the eye. A glued mitre will open and a hung door will bind long before that, so the tighter L/360 (8.3 mm) applies. Brittle plaster finishes get the same treatment for the same reason.</p><p>Option two has the logic backwards: the criterion tracks the <em>consequence</em>, not the magnitude of the load. And &ldquo;always use the tightest&rdquo; is not free. Tightening from L/240 to L/360 needs 1.5 times the I, which on a fixed width is about 15% more depth and 15% more material on every unit you ship.</p><p>The point worth making in an interview is that L/360 on a 3 m span (8.3 mm) is a looser absolute requirement than L/240 on a 1 m span (4.2 mm). Span ratios are a shorthand that works for structures; precision machinery abandons them and writes an absolute micron figure, because a 50 &micro;m alignment budget does not care how long the beam is.</p>",
  },
  {
    id: "beam-deflection-q60",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A 2.0 m cantilever carries a uniform 200 N/m. A colleague wants to replace it in a spreadsheet with a single tip load that produces the same tip deflection. What load should they enter?</p>",
    choices: [
      "400 N, the whole distributed load moved to the tip",
      "200 N, half the load, acting at its centroid",
      "133 N, one third of the total distributed load",
      "150 N, three eighths of the total distributed load",
    ],
    answer: 3,
    explanation: "<p>Set the two tip deflections equal and solve:</p><p class=\"eq\">wL&#8308;/8EI = P<sub>eq</sub>L&sup3;/3EI &nbsp;&rarr;&nbsp; P<sub>eq</sub> = 3wL/8</p><p class=\"eq\">P<sub>eq</sub> = 3(200)(2.0)/8 = <strong>150 N</strong></p><p>EI cancels, so the 3/8 factor holds for any section and any material, it is pure geometry of the load distribution.</p><p>The instinct to move the whole 400 N to the tip is &ldquo;conservative&rdquo; but by a factor of 2.7, which is enough to drive a needlessly heavy design. Putting the resultant at its centroid (1.0 m out) is closer but still wrong, because Pa<sup>2</sup>(3L &minus; a)/6EI at a = L/2 gives 5/48 of PL<sup>3</sup>/EI rather than the 1/8 the uniform load produces.</p><p>Two warnings before using the equivalent load anywhere else. It is calibrated for tip <em>deflection</em> only, the root moment from the real UDL is wL<sup>2</sup>/2 = 400 N&middot;m while 150 N at the tip gives 300 N&middot;m, so the substitution under-predicts stress by 25%. And the equivalent fraction is different for other quantities and other support cases; for tip <em>slope</em> on this same cantilever it is 4wL/9, not 3wL/8.</p>",
  },
];

export default extra;
