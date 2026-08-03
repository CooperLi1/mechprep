import type { Question } from "../types";

// ---------------------------------------------------------------------------
// Material Behavior & Selection — extra question bank
// Figure ids are prefixed mpx<n>- and are unique across the app.
// ---------------------------------------------------------------------------

const figSSD = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mpx1-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <line x1="62" y1="205" x2="428" y2="205" stroke="#64748b" stroke-width="1.5" marker-end="url(#mpx1-ax)"/>
  <line x1="62" y1="205" x2="62" y2="34" stroke="#64748b" stroke-width="1.5" marker-end="url(#mpx1-ax)"/>
  <text x="382" y="224" fill="#64748b">strain &epsilon;</text>
  <text x="26" y="28" fill="#64748b">stress &sigma;</text>
  <path d="M62,205 L104,124 C124,110 156,102 200,99 C252,96 300,100 340,116 L340,205 Z" fill="#dbeafe" opacity="0.55" stroke="none"/>
  <path d="M62,205 L148,58 L148,205 Z" fill="#fee2e2" opacity="0.6" stroke="none"/>
  <path d="M62,205 L148,58" fill="none" stroke="#dc2626" stroke-width="3"/>
  <path d="M62,205 L104,124 C124,110 156,102 200,99 C252,96 300,100 340,116" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <path d="M143,53 L153,63 M153,53 L143,63" stroke="#dc2626" stroke-width="2.5"/>
  <path d="M335,111 L345,121 M345,111 L335,121" stroke="#1d4ed8" stroke-width="2.5"/>
  <text x="160" y="52" fill="#dc2626" font-weight="600">brittle</text>
  <text x="160" y="68" fill="#dc2626" font-size="12">high strength, tiny strain</text>
  <text x="252" y="86" fill="#1d4ed8" font-weight="600">ductile</text>
  <text x="252" y="146" fill="#1d4ed8" font-size="12">shaded area = toughness</text>
  <line x1="148" y1="205" x2="148" y2="212" stroke="#64748b"/>
  <line x1="340" y1="205" x2="340" y2="212" stroke="#64748b"/>
  <text x="148" y="228" text-anchor="middle" fill="#64748b" font-size="12">0.01</text>
  <text x="340" y="228" text-anchor="middle" fill="#64748b" font-size="12">0.20</text>
  <text x="244" y="245" text-anchor="middle" fill="#64748b" font-size="12">the stronger material absorbs far less energy before it breaks</text>
</svg>`;

const figLug = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mpx2-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="mpx2-dim" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <path d="M170,62 L330,62 L330,142 L170,142 A40,40 0 0 1 170,62 Z" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <path d="M148,86 A26,26 0 0 0 148,118 L170,118 L170,86 Z" fill="#fee2e2" stroke="none"/>
  <circle cx="170" cy="102" r="26" fill="#ffffff" stroke="#334155" stroke-width="1.6"/>
  <circle cx="170" cy="102" r="24" fill="#e2e8f0" stroke="#334155" stroke-width="1.2"/>
  <text x="170" y="106" text-anchor="middle" fill="#334155" font-size="12">pin</text>
  <line x1="332" y1="102" x2="404" y2="102" stroke="#dc2626" stroke-width="2.5" marker-end="url(#mpx2-load)"/>
  <text x="368" y="94" text-anchor="middle" fill="#dc2626" font-weight="600">F = 2.0 kN</text>
  <line x1="144" y1="102" x2="196" y2="102" stroke="#64748b" stroke-width="1" marker-end="url(#mpx2-dim)"/>
  <text x="212" y="150" fill="#64748b" font-size="12">hole d = 6 mm</text>
  <text x="112" y="72" fill="#dc2626" font-size="12">bearing</text>
  <text x="112" y="86" fill="#dc2626" font-size="12">contact</text>
  <rect x="170" y="182" width="160" height="16" fill="#dbeafe" stroke="#334155" stroke-width="1.4"/>
  <line x1="152" y1="182" x2="152" y2="198" stroke="#64748b" stroke-width="1"/>
  <line x1="146" y1="182" x2="158" y2="182" stroke="#64748b" stroke-width="1"/>
  <line x1="146" y1="198" x2="158" y2="198" stroke="#64748b" stroke-width="1"/>
  <text x="140" y="195" text-anchor="end" fill="#64748b" font-size="12">t = 4 mm</text>
  <text x="250" y="216" text-anchor="middle" fill="#334155" font-size="12">side view: lug thickness</text>
  <text x="250" y="240" text-anchor="middle" fill="#1d4ed8" font-size="12">projected bearing area A = d &times; t, not the hole circumference</text>
</svg>`;

// Elastic unloading runs DOWN and to the LEFT, parallel to the initial elastic
// leg. Elastic leg (62,190)->(128,80): slope 110/66 = 1.667 stress-px per
// strain-px. Unload from B(240,56) to the strain axis at y=190 therefore lands
// at x = 240 - 134/1.667 = 159.6, i.e. (160,190); drawn slope 134/80 = 1.675,
// within 0.5% of the loading slope. Permanent strain then spans 62->160 and
// elastic recovery 160->240, and the two add up to the strain at B.
const figUnload = `<svg viewBox="0 0 460 274" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mpx3-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
    <marker id="mpx3-dim" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <line x1="62" y1="190" x2="428" y2="190" stroke="#64748b" stroke-width="1.5" marker-end="url(#mpx3-ax)"/>
  <line x1="62" y1="190" x2="62" y2="34" stroke="#64748b" stroke-width="1.5" marker-end="url(#mpx3-ax)"/>
  <text x="382" y="209" fill="#64748b">strain &epsilon;</text>
  <text x="26" y="28" fill="#64748b">stress &sigma;</text>
  <path d="M62,190 L128,80 C150,68 190,60 240,56 C286,53 330,58 366,70" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <line x1="240" y1="56" x2="160" y2="190" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 4"/>
  <circle cx="240" cy="56" r="4.5" fill="#dc2626"/>
  <text x="252" y="46" fill="#dc2626" font-weight="600">B: load released here</text>
  <line x1="62" y1="56" x2="240" y2="56" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="24" y="60" fill="#64748b" font-size="12">&sigma;<tspan baseline-shift="sub" font-size="9">B</tspan></text>
  <text x="104" y="140" fill="#334155" font-size="12">slope E</text>
  <text x="190" y="120" text-anchor="end" fill="#dc2626" font-size="12">same slope E</text>
  <!-- strain markers -->
  <line x1="160" y1="190" x2="160" y2="248" stroke="#cbd5e1" stroke-dasharray="4 4"/>
  <line x1="240" y1="190" x2="240" y2="248" stroke="#cbd5e1" stroke-dasharray="4 4"/>
  <text x="246" y="203" text-anchor="start" fill="#64748b" font-size="12">&epsilon;<tspan baseline-shift="sub" font-size="9">B</tspan></text>
  <line x1="62" y1="210" x2="160" y2="210" stroke="#64748b" stroke-width="1" marker-end="url(#mpx3-dim)"/>
  <line x1="62" y1="204" x2="62" y2="216" stroke="#64748b" stroke-width="1"/>
  <text x="111" y="226" text-anchor="middle" fill="#64748b" font-size="12">permanent strain &epsilon;<tspan baseline-shift="sub" font-size="9">p</tspan></text>
  <line x1="160" y1="240" x2="240" y2="240" stroke="#dc2626" stroke-width="1" marker-end="url(#mpx3-dim)"/>
  <line x1="160" y1="234" x2="160" y2="246" stroke="#dc2626" stroke-width="1"/>
  <text x="250" y="244" fill="#dc2626" font-size="12">elastic recovery = &sigma;<tspan baseline-shift="sub" font-size="9">B</tspan>/E</text>
  <text x="230" y="266" text-anchor="middle" fill="#64748b" font-size="12">unloading runs parallel to the initial elastic line</text>
</svg>`;

const figRoll = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mpx4-ar" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <path d="M96,96 L136,66 L356,66 L316,96 Z" fill="#cbd5e1" stroke="#334155" stroke-width="1.4"/>
  <path d="M316,96 L356,66 L356,142 L316,172 Z" fill="#94a3b8" stroke="#334155" stroke-width="1.4"/>
  <rect x="96" y="96" width="220" height="76" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
  <ellipse cx="140" cy="114" rx="26" ry="5" fill="none" stroke="#64748b"/>
  <ellipse cx="212" cy="114" rx="26" ry="5" fill="none" stroke="#64748b"/>
  <ellipse cx="284" cy="114" rx="26" ry="5" fill="none" stroke="#64748b"/>
  <ellipse cx="140" cy="134" rx="26" ry="5" fill="none" stroke="#64748b"/>
  <ellipse cx="212" cy="134" rx="26" ry="5" fill="none" stroke="#64748b"/>
  <ellipse cx="284" cy="134" rx="26" ry="5" fill="none" stroke="#64748b"/>
  <ellipse cx="140" cy="154" rx="26" ry="5" fill="none" stroke="#64748b"/>
  <ellipse cx="212" cy="154" rx="26" ry="5" fill="none" stroke="#64748b"/>
  <ellipse cx="284" cy="154" rx="26" ry="5" fill="none" stroke="#64748b"/>
  <line x1="112" y1="200" x2="300" y2="200" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#mpx4-ar)"/>
  <text x="200" y="220" text-anchor="middle" fill="#1d4ed8" font-weight="600">L — rolling direction</text>
  <line x1="72" y1="164" x2="72" y2="102" stroke="#dc2626" stroke-width="2.5" marker-end="url(#mpx4-ar)"/>
  <text x="66" y="188" fill="#dc2626" font-weight="600">ST</text>
  <text x="14" y="88" fill="#dc2626" font-size="12">short transverse</text>
  <line x1="330" y1="196" x2="372" y2="164" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#mpx4-ar)"/>
  <text x="356" y="212" fill="#1d4ed8" font-weight="600">LT</text>
  <text x="380" y="112" fill="#334155" font-size="12">grains and</text>
  <text x="380" y="128" fill="#334155" font-size="12">inclusions are</text>
  <text x="380" y="144" fill="#334155" font-size="12">pancaked flat</text>
  <text x="200" y="244" text-anchor="middle" fill="#64748b" font-size="12">ST elongation and toughness can be a third of the L values quoted on the certificate</text>
</svg>`;

const figDBTT = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mpx5-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <line x1="70" y1="200" x2="428" y2="200" stroke="#64748b" stroke-width="1.5" marker-end="url(#mpx5-ax)"/>
  <line x1="70" y1="200" x2="70" y2="34" stroke="#64748b" stroke-width="1.5" marker-end="url(#mpx5-ax)"/>
  <text x="330" y="224" fill="#64748b">temperature</text>
  <text x="22" y="28" fill="#64748b">Charpy energy</text>
  <path d="M86,182 C124,180 148,177 172,168 C196,158 208,110 240,88 C272,68 330,60 414,57" fill="none" stroke="#dc2626" stroke-width="3"/>
  <path d="M86,104 C160,100 260,96 414,94" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <line x1="206" y1="52" x2="206" y2="200" stroke="#334155" stroke-dasharray="5 4"/>
  <text x="212" y="48" fill="#334155" font-size="12">transition temperature</text>
  <line x1="132" y1="52" x2="132" y2="200" stroke="#64748b" stroke-dasharray="3 3"/>
  <text x="126" y="48" text-anchor="end" fill="#64748b" font-size="12">service &minus;20 &deg;C</text>
  <circle cx="132" cy="179" r="4" fill="#dc2626"/>
  <circle cx="132" cy="102" r="4" fill="#1d4ed8"/>
  <text x="264" y="80" fill="#dc2626" font-weight="600">BCC carbon steel</text>
  <text x="268" y="116" fill="#1d4ed8" font-weight="600">FCC alloy (Al, 304L)</text>
  <text x="140" y="166" fill="#dc2626" font-size="12">brittle shelf</text>
  <text x="330" y="46" fill="#dc2626" font-size="12">ductile shelf</text>
  <text x="230" y="242" text-anchor="middle" fill="#64748b" font-size="12">the same plate is tough in a warm harbour and brittle in winter water</text>
</svg>`;

const figCreepT = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mpx6-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <line x1="70" y1="200" x2="428" y2="200" stroke="#64748b" stroke-width="1.5" marker-end="url(#mpx6-ax)"/>
  <line x1="70" y1="200" x2="70" y2="30" stroke="#64748b" stroke-width="1.5" marker-end="url(#mpx6-ax)"/>
  <text x="366" y="222" fill="#64748b">time (log)</text>
  <text x="26" y="26" fill="#64748b">strain &epsilon;</text>
  <path d="M70,178 C140,170 240,164 410,160" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <path d="M70,178 C130,160 220,142 300,124 C340,112 366,96 384,66" fill="none" stroke="#d97706" stroke-width="3"/>
  <path d="M70,178 C110,150 150,126 186,104 C212,86 228,66 238,42" fill="none" stroke="#dc2626" stroke-width="3"/>
  <path d="M233,37 L243,47 M243,37 L233,47" stroke="#dc2626" stroke-width="2.5"/>
  <path d="M379,61 L389,71 M389,61 L379,71" stroke="#d97706" stroke-width="2.5"/>
  <text x="246" y="44" fill="#dc2626" font-size="12">rupture</text>
  <text x="150" y="88" fill="#dc2626" font-weight="600">600 &deg;C</text>
  <text x="290" y="108" fill="#d97706" font-weight="600">500 &deg;C</text>
  <text x="330" y="176" fill="#1d4ed8" font-weight="600">400 &deg;C</text>
  <text x="88" y="60" fill="#64748b" font-size="12">same stress in all three tests</text>
  <text x="230" y="240" text-anchor="middle" fill="#64748b" font-size="12">100 &deg;C buys or costs an order of magnitude in life — yield strength never sees this</text>
</svg>`;

// q41 — polymer creep. Deliberately NOT figCreepT (a 400/500/600 C metal
// creep-rupture family): a plastic latch creeps at 20-60 C, and the quantity
// the question integrates is the steady secondary slope, so that is what is
// drawn. No axis numbers, so the figure cannot hand over the answer.
const figPolyCreep = `<svg viewBox="0 0 460 264" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mpx12-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <line x1="70" y1="196" x2="430" y2="196" stroke="#64748b" stroke-width="1.5" marker-end="url(#mpx12-ax)"/>
  <line x1="70" y1="196" x2="70" y2="40" stroke="#64748b" stroke-width="1.5" marker-end="url(#mpx12-ax)"/>
  <text x="398" y="214" text-anchor="end" fill="#64748b">time at load</text>
  <text x="26" y="24" fill="#64748b">creep strain &epsilon;</text>
  <!-- end of the primary knee -->
  <line x1="104" y1="196" x2="104" y2="178" stroke="#cbd5e1" stroke-dasharray="4 4"/>
  <text x="108" y="190" text-anchor="start" fill="#64748b" font-size="11">&larr; primary</text>
  <!-- 23 C: knee, then a straight secondary stage -->
  <path d="M70,192 C82,180 92,174 104,171 L400,122" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <text x="406" y="126" text-anchor="start" fill="#1d4ed8" font-weight="600">23 &deg;C</text>
  <!-- 60 C: same stress, steeper steady slope -->
  <path d="M70,192 C82,174 92,164 104,158 L400,68" fill="none" stroke="#dc2626" stroke-width="3"/>
  <text x="406" y="72" text-anchor="start" fill="#dc2626" font-weight="600">60 &deg;C</text>
  <!-- slope triangle on the steady stage -->
  <line x1="160" y1="162" x2="300" y2="162" stroke="#1d4ed8" stroke-width="1.2"/>
  <line x1="300" y1="162" x2="300" y2="139" stroke="#1d4ed8" stroke-width="1.2"/>
  <text x="230" y="180" text-anchor="middle" fill="#1d4ed8" font-size="11">steady rate d&epsilon;/dt</text>
  <text x="230" y="238" text-anchor="middle" fill="#64748b" font-size="12">same latch, same stress, two service temperatures</text>
  <text x="230" y="256" text-anchor="middle" fill="#64748b" font-size="12">primary creep is over quickly; the steady slope does the damage</text>
</svg>`;

const figComposite = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mpx7-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <rect x="72" y="76" width="128" height="78" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="72" y1="88" x2="200" y2="88" stroke="#334155" stroke-width="2.5"/>
  <line x1="72" y1="104" x2="200" y2="104" stroke="#334155" stroke-width="2.5"/>
  <line x1="72" y1="120" x2="200" y2="120" stroke="#334155" stroke-width="2.5"/>
  <line x1="72" y1="136" x2="200" y2="136" stroke="#334155" stroke-width="2.5"/>
  <line x1="66" y1="115" x2="34" y2="115" stroke="#dc2626" stroke-width="2.5" marker-end="url(#mpx7-load)"/>
  <line x1="206" y1="115" x2="238" y2="115" stroke="#dc2626" stroke-width="2.5" marker-end="url(#mpx7-load)"/>
  <text x="136" y="64" text-anchor="middle" fill="#dc2626" font-weight="600">load along fibres</text>
  <text x="136" y="176" text-anchor="middle" fill="#334155" font-size="12">iso-strain (Voigt)</text>
  <text x="136" y="194" text-anchor="middle" fill="#1d4ed8" font-size="12">E<tspan baseline-shift="sub" font-size="9">1</tspan> = V<tspan baseline-shift="sub" font-size="9">f</tspan>E<tspan baseline-shift="sub" font-size="9">f</tspan> + V<tspan baseline-shift="sub" font-size="9">m</tspan>E<tspan baseline-shift="sub" font-size="9">m</tspan></text>
  <text x="136" y="212" text-anchor="middle" fill="#1d4ed8" font-weight="600">139 GPa</text>
  <rect x="286" y="76" width="112" height="78" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="286" y1="88" x2="398" y2="88" stroke="#334155" stroke-width="2.5"/>
  <line x1="286" y1="104" x2="398" y2="104" stroke="#334155" stroke-width="2.5"/>
  <line x1="286" y1="120" x2="398" y2="120" stroke="#334155" stroke-width="2.5"/>
  <line x1="286" y1="136" x2="398" y2="136" stroke="#334155" stroke-width="2.5"/>
  <line x1="342" y1="70" x2="342" y2="42" stroke="#dc2626" stroke-width="2.5" marker-end="url(#mpx7-load)"/>
  <line x1="342" y1="160" x2="342" y2="188" stroke="#dc2626" stroke-width="2.5" marker-end="url(#mpx7-load)"/>
  <text x="342" y="34" text-anchor="middle" fill="#dc2626" font-weight="600">load across fibres</text>
  <text x="342" y="206" text-anchor="middle" fill="#334155" font-size="12">iso-stress (Reuss)</text>
  <text x="342" y="224" text-anchor="middle" fill="#1d4ed8" font-size="12">1/E<tspan baseline-shift="sub" font-size="9">2</tspan> = V<tspan baseline-shift="sub" font-size="9">f</tspan>/E<tspan baseline-shift="sub" font-size="9">f</tspan> + V<tspan baseline-shift="sub" font-size="9">m</tspan>/E<tspan baseline-shift="sub" font-size="9">m</tspan> &rarr; 8.3 GPa</text>
  <text x="243" y="115" text-anchor="middle" fill="#64748b" font-size="12">vs</text>
</svg>`;

const figRate = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mpx8-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <line x1="62" y1="200" x2="428" y2="200" stroke="#64748b" stroke-width="1.5" marker-end="url(#mpx8-ax)"/>
  <line x1="62" y1="200" x2="62" y2="30" stroke="#64748b" stroke-width="1.5" marker-end="url(#mpx8-ax)"/>
  <text x="378" y="222" fill="#64748b">strain &epsilon;</text>
  <text x="26" y="26" fill="#64748b">stress &sigma;</text>
  <path d="M62,200 L112,50 L118,58" fill="none" stroke="#dc2626" stroke-width="3"/>
  <path d="M112,44 L122,54 M122,44 L112,54" stroke="#dc2626" stroke-width="2.5"/>
  <path d="M62,200 L124,96 C140,86 162,86 184,96 C210,108 232,116 254,122" fill="none" stroke="#d97706" stroke-width="3"/>
  <path d="M249,117 L259,127 M259,117 L249,127" stroke="#d97706" stroke-width="2.5"/>
  <path d="M62,200 L136,142 C160,130 190,130 230,136 C290,144 340,150 388,156" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <path d="M383,151 L393,161 M393,151 L383,161" stroke="#1d4ed8" stroke-width="2.5"/>
  <text x="128" y="46" fill="#dc2626" font-weight="600">fast or cold</text>
  <text x="128" y="62" fill="#dc2626" font-size="12">stiff, strong, brittle</text>
  <text x="266" y="118" fill="#d97706" font-weight="600">intermediate</text>
  <text x="252" y="166" fill="#1d4ed8" font-weight="600">slow or warm</text>
  <text x="252" y="182" fill="#1d4ed8" font-size="12">compliant, tough, draws out</text>
  <text x="230" y="240" text-anchor="middle" fill="#64748b" font-size="12">one polymer, three test conditions — the datasheet quotes only one of these curves</text>
</svg>`;

const figSN = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mpx9-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <line x1="80" y1="200" x2="440" y2="200" stroke="#64748b" stroke-width="1.5" marker-end="url(#mpx9-ax)"/>
  <line x1="80" y1="200" x2="80" y2="34" stroke="#64748b" stroke-width="1.5" marker-end="url(#mpx9-ax)"/>
  <text x="340" y="238" fill="#64748b">cycles to failure N</text>
  <text x="24" y="28" fill="#64748b">stress amplitude</text>
  <line x1="80" y1="196" x2="80" y2="204" stroke="#64748b"/>
  <line x1="254" y1="196" x2="254" y2="204" stroke="#64748b"/>
  <line x1="428" y1="196" x2="428" y2="204" stroke="#64748b"/>
  <text x="80" y="218" text-anchor="middle" fill="#64748b" font-size="12">10<tspan baseline-shift="super" font-size="9">3</tspan></text>
  <text x="254" y="218" text-anchor="middle" fill="#64748b" font-size="12">10<tspan baseline-shift="super" font-size="9">6</tspan></text>
  <text x="428" y="218" text-anchor="middle" fill="#64748b" font-size="12">10<tspan baseline-shift="super" font-size="9">9</tspan></text>
  <path d="M84,66 C140,92 200,124 254,148" fill="none" stroke="#dc2626" stroke-width="3"/>
  <line x1="254" y1="148" x2="428" y2="148" stroke="#dc2626" stroke-width="3"/>
  <line x1="80" y1="148" x2="254" y2="148" stroke="#dc2626" stroke-width="1" stroke-dasharray="4 4"/>
  <text x="292" y="140" fill="#dc2626" font-size="12">endurance limit — steel</text>
  <path d="M84,86 C150,116 220,146 300,166 C350,178 392,186 424,190" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <text x="300" y="184" fill="#1d4ed8" font-size="12">aluminum keeps falling</text>
  <circle cx="254" cy="148" r="4" fill="#dc2626"/>
  <text x="196" y="72" fill="#dc2626" font-weight="600">steel</text>
  <text x="150" y="128" fill="#1d4ed8" font-weight="600">aluminum</text>
  <text x="240" y="46" text-anchor="middle" fill="#64748b" font-size="12">below the knee a steel runs forever; an aluminum part always has a finite life</text>
</svg>`;

const figAM = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mpx10-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="mpx10-z" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <line x1="40" y1="180" x2="40" y2="52" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#mpx10-z)"/>
  <text x="30" y="44" fill="#1d4ed8" font-size="12" font-weight="600">build Z</text>
  <rect x="80" y="150" width="140" height="10" fill="#94a3b8" stroke="#334155"/>
  <text x="150" y="176" text-anchor="middle" fill="#64748b" font-size="12">build plate</text>
  <rect x="96" y="88" width="108" height="62" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="96" y1="100" x2="204" y2="100" stroke="#64748b"/>
  <line x1="96" y1="112" x2="204" y2="112" stroke="#64748b"/>
  <line x1="96" y1="124" x2="204" y2="124" stroke="#64748b"/>
  <line x1="96" y1="136" x2="204" y2="136" stroke="#64748b"/>
  <line x1="150" y1="82" x2="150" y2="50" stroke="#dc2626" stroke-width="2.5" marker-end="url(#mpx10-load)"/>
  <text x="150" y="42" text-anchor="middle" fill="#dc2626" font-weight="600">load &perp; layers</text>
  <text x="150" y="200" text-anchor="middle" fill="#dc2626" font-size="12">upright build: load pulls layers apart</text>
  <text x="150" y="216" text-anchor="middle" fill="#dc2626" font-size="12">lack-of-fusion defects lie in the crack plane</text>
  <rect x="272" y="150" width="150" height="10" fill="#94a3b8" stroke="#334155"/>
  <text x="347" y="176" text-anchor="middle" fill="#64748b" font-size="12">build plate</text>
  <rect x="288" y="106" width="118" height="44" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="288" y1="118" x2="406" y2="118" stroke="#64748b"/>
  <line x1="288" y1="130" x2="406" y2="130" stroke="#64748b"/>
  <line x1="288" y1="142" x2="406" y2="142" stroke="#64748b"/>
  <line x1="282" y1="88" x2="412" y2="88" stroke="#dc2626" stroke-width="2.5" marker-end="url(#mpx10-load)"/>
  <text x="347" y="76" text-anchor="middle" fill="#dc2626" font-weight="600">load &#8741; layers</text>
  <text x="347" y="200" text-anchor="middle" fill="#334155" font-size="12">flat build: load runs along the layers</text>
  <text x="347" y="216" text-anchor="middle" fill="#334155" font-size="12">this is the orientation the coupon was tested in</text>
  <text x="230" y="240" text-anchor="middle" fill="#64748b" font-size="12">same alloy, same machine, same heat treat — different properties</text>
</svg>`;

const figAge = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mpx11-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <line x1="70" y1="196" x2="428" y2="196" stroke="#64748b" stroke-width="1.5" marker-end="url(#mpx11-ax)"/>
  <line x1="70" y1="196" x2="70" y2="30" stroke="#64748b" stroke-width="1.5" marker-end="url(#mpx11-ax)"/>
  <text x="336" y="218" fill="#64748b">ageing time (log)</text>
  <text x="24" y="26" fill="#64748b">S<tspan baseline-shift="sub" font-size="9">y</tspan>, hardness</text>
  <path d="M70,170 C110,150 150,110 190,84 C230,62 268,56 300,58 C344,62 386,74 420,88" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <path d="M70,170 C96,140 118,104 140,86 C158,72 176,68 194,72 C238,82 320,120 420,152" fill="none" stroke="#dc2626" stroke-width="3"/>
  <circle cx="296" cy="57" r="4.5" fill="#1d4ed8"/>
  <circle cx="186" cy="70" r="4.5" fill="#dc2626"/>
  <line x1="296" y1="57" x2="296" y2="196" stroke="#cbd5e1" stroke-dasharray="4 4"/>
  <text x="304" y="48" fill="#1d4ed8" font-size="12">peak aged = T6</text>
  <text x="150" y="58" fill="#dc2626" font-size="12">hotter age peaks sooner and lower</text>
  <text x="352" y="106" fill="#1d4ed8" font-size="12">over-aged = T7</text>
  <text x="118" y="130" fill="#334155" font-size="12">under-aged</text>
  <text x="230" y="238" text-anchor="middle" fill="#64748b" font-size="12">over-ageing costs strength and buys back SCC resistance — that is the T73 trade</text>
</svg>`;

const extra: Question[] = [
  {
    id: "material-properties-q23",
    type: "mc",
    difficulty: 1,
    prompt: "<p>A drone arm is strength-limited in axial tension and its outside geometry is already frozen by packaging. Which comparison is the right first screen across candidate materials?</p>",
    choices: [
      "Hardness divided by density, since indentation resistance tracks tensile failure",
      "Young's modulus, because stiffness and yield move together in light alloys",
      "Yield strength divided by density, the stress capacity carried per unit mass",
      "Elongation at break, because ductility sets the allowable tensile load",
    ],
    answer: 2,
    explanation: `<p>Two facts in the prompt fix the answer: the failure mode is yielding in tension, and the geometry is frozen. With shape unavailable as a variable, the only way to carry the same load for less mass is more allowable stress per unit density, so specific strength S<sub>y</sub>/&rho;.</p>
<p>Hardness is an indentation and wear metric. It correlates with strength within a steel family but is not a tensile allowable and is meaningless across material classes. Modulus governs how far the arm stretches, not when it takes a permanent set, and in aluminium the modulus is identical across every temper while yield spans 14&times;. Elongation tells you forming and damage tolerance, not load capacity.</p>
<p>Note the difference from the stiffness case. Because geometry is frozen, no exponent appears. Free the section to grow and a strength-limited beam would screen on S<sub>y</sub><sup>2/3</sup>/&rho;, for the same reason a stiffness-limited beam uses E<sup>1/2</sup>/&rho;.</p>`,
  },
  {
    id: "material-properties-q24",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>Approximate a material's stress-strain curve as a triangle rising linearly to 600 MPa at a fracture strain of 0.18. Estimate its toughness, the area under the curve, in MJ/m<sup>3</sup>.</p>",
    figure: figSSD,
    answer: 54,
    unit: "MJ/m^3",
    explanation: `<p class="eq">U = &frac12; &sigma;<sub>max</sub> &epsilon;<sub>f</sub> = 0.5 (600&times;10<sup>6</sup>)(0.18) = <strong>54 MJ/m<sup>3</sup></strong></p>
<p>Toughness is the area under the stress-strain curve, and the units work because strain is dimensionless and 1 Pa = 1 J/m<sup>3</sup>. Entering strain as 18 gives 54,000 MJ/m<sup>3</sup>; structural steels land around 100&ndash;200 and a brittle ceramic under 1. The red curve peaks higher and encloses a fraction of the area.</p>`,
  },
  {
    id: "material-properties-q25",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A steel pin bears against an aluminum lug: hole diameter 6 mm, lug thickness 4 mm, load 2.0 kN. Estimate the nominal bearing stress in the lug in MPa.</p>",
    figure: figLug,
    answer: 83.3,
    unit: "MPa",
    explanation: `<p class="eq">A<sub>b</sub> = d&middot;t = 6 &times; 4 = 24 mm<sup>2</sup></p>
<p class="eq">p = F/A<sub>b</sub> = 2000 N / 24 mm<sup>2</sup> = <strong>83.3 MPa</strong></p>
<p>Bearing stress uses the <em>projected</em> area, not the wrapped contact area &pi;dt, which gives 26.5 MPa, nor the circular area &pi;d<sup>2</sup>/4, which gives 70.7 MPa. A lug can pass net-section tension comfortably and still fail by bearing, hole elongation or tear-out, so check all three.</p>`,
  },
  {
    id: "material-properties-q26",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A beam is re-quoted in magnesium (E = 45 GPa) instead of aluminum (E = 69 GPa) with identical geometry and load. What is the ratio of magnesium deflection to aluminum deflection?</p>",
    answer: 1.53,
    unit: "(ratio)",
    explanation: `<p class="eq">&delta;<sub>Mg</sub>/&delta;<sub>Al</sub> = E<sub>Al</sub>/E<sub>Mg</sub> = 69/45 = <strong>1.53</strong></p>
<p>Geometry and load unchanged, so deflection scales as 1/E and the magnesium beam sags 53% more. Let the section change and the picture reverses: on E<sup>1/2</sup>/&rho; magnesium scores 3.73 against aluminium&rsquo;s 3.08, so a stiffness-matched magnesium beam is about 17% lighter, provided it is allowed to be deeper.</p>`,
  },
  {
    id: "material-properties-q27",
    type: "mc",
    difficulty: 1,
    prompt: "<p>A sheet-metal bracket must be bent 90&deg; at a tight radius during fabrication and then carry a modest static load. The stockroom has the same alloy in 5052-H32 (half hard) and 5052-O (annealed). Which do you take?</p>",
    choices: [
      "The annealed sheet, accepting that the bend zone work-hardens as it forms",
      "The half-hard sheet, since a harder sheet holds the bend radius more precisely",
      "Either one; temper does not change the minimum bend radius of aluminum sheet",
      "Half-hard, then anneal after bending to restore the strength lost in forming",
    ],
    answer: 0,
    explanation: `<p>Minimum bend radius is set by the remaining ductility. Annealed O-temper 5052 has roughly 25% elongation and bends to about 1t; H32 has half the elongation and needs a larger radius or it cracks on the outer fibre. The softer sheet is the one that survives the tight bend.</p>
<p>You lose less strength than you think, because bending is cold work. The material in the bend zone hardens as it deforms, so the corner, usually the highest-stress region, ends up stronger than the flat. If the flats still need strength, bump the gauge, or bend annealed and heat treat afterwards on an alloy that allows it.</p>
<p>Option D reverses the physics, since annealing after bending would <em>remove</em> strength. Two more things worth saying: bend across the rolling direction where possible, because bending parallel to it splits along the elongated grain, and springback is proportional to S<sub>y</sub>/E, so the harder sheet springs back further and holds the angle worse rather than better.</p>`,
  },
  {
    id: "material-properties-q28",
    type: "mc",
    difficulty: 1,
    prompt: "<p>A through-hardened steel pin resists scratching beautifully in a dusty hinge, then cracks in half the first time the door is slammed. Which distinction did the design review miss?</p>",
    choices: [
      "Hardness and toughness are the same property, so the crack is unrelated to it",
      "Hardness sets the modulus, so a harder pin should have flexed less on impact",
      "A hard pin carries no residual stress, so only the hinge geometry can matter",
      "Hardness buys wear resistance; surviving an impact needs toughness instead",
    ],
    answer: 3,
    explanation: `<p>Two different failure modes are in play. Abrasive wear in a dusty hinge is a surface problem, and hardness is exactly the right property for it. A slam is an energy problem: the pin has to absorb strain energy without letting a crack run from a grinding mark, a shoulder or a case boundary. That is toughness, and within one alloy family hardness and toughness move in <em>opposite</em> directions.</p>
<p>Option B is the other classic error. Heat treatment can triple hardness and yield strength while leaving E at 200 GPa, so a harder pin flexes exactly as much as a soft one under the same load.</p>
<p>Stop asking one bulk property to do both jobs. Case-harden or nitride a tough core so the surface is hard and the interior still absorbs energy, add a generous fillet at the shoulder, improve the ground finish, or temper back to a lower hardness and accept slightly faster wear. Hard case on a tough core is the standard answer for gears, shafts and pins.</p>`,
  },
  {
    id: "material-properties-q29",
    type: "mc",
    difficulty: 1,
    prompt: "<p>The figure overlays tensile curves for two candidate materials on the same axes. You are choosing material for a machine guard that must stay intact when a tool is dropped on it. Which curve do you want, and why?</p>",
    figure: figSSD,
    choices: [
      "The red one: it reaches a much higher stress before it fails",
      "The blue one: the area under it, the energy absorbed, is far larger",
      "Neither &mdash; impact resistance cannot be read from a tensile curve",
      "The red one, because its steeper slope means it stores more energy",
    ],
    answer: 1,
    explanation: `<p>A dropped tool delivers <em>energy</em>, not stress. The guard survives by absorbing that energy through deformation, and energy per unit volume is the area under the stress-strain curve. The blue curve reaches a lower peak stress and strains twenty times further, so its area is several times larger. It will dent; the red material will shatter.</p>
<p>Option A is what the whole topic is built around: strength and toughness are different properties, and inside one alloy family they trade against each other. Option D confuses stiffness with energy, since a steeper initial slope is a higher E, which for a given <em>stress</em> means less strain and therefore less stored energy.</p>
<p>What a tensile curve does not tell you is notch and rate behaviour, which is why the real specification for an impact part is a notched Charpy or Izod value at the lowest service temperature, plus generous radii wherever the geometry changes.</p>`,
  },
  {
    id: "material-properties-q30",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>Compare specific yield strength for a tie: steel at S<sub>y</sub> = 350 MPa, &rho; = 7850 kg/m<sup>3</sup> against aluminum at S<sub>y</sub> = 276 MPa, &rho; = 2700 kg/m<sup>3</sup>. What is the ratio (aluminum)/(steel)?</p>",
    answer: 2.29,
    unit: "(ratio)",
    explanation: `<p class="eq">steel: 350&times;10<sup>6</sup>/7850 = 44.6&times;10<sup>3</sup> N&middot;m/kg</p>
<p class="eq">aluminum: 276&times;10<sup>6</sup>/2700 = 102&times;10<sup>3</sup> N&middot;m/kg</p>
<p class="eq">ratio = 102/44.6 = <strong>2.29</strong></p>
<p>The 6061-T6 tie carries the same load at 44% of the mass despite a lower absolute strength. Contrast that with the <em>stiffness</em> comparison of the same two materials, where E/&rho; is 25.6 against 25.9 and there is no advantage at all.</p>
<p>Aluminium&rsquo;s real case is strength per mass, not stiffness per mass. Before promising the 56% saving, check what else the tie has to do: fatigue, since aluminium has no endurance limit; the joints at each end, where rivet or bolt bearing usually sizes the fitting rather than the free length; buckling if the load ever reverses into compression; and whether the higher-strength temper is weldable.</p>`,
  },
  {
    id: "material-properties-q31",
    type: "mc",
    difficulty: 1,
    prompt: "<p>An injection-molded glass-filled nylon cover measures noticeably stiffer along one axis than across it, even though the datasheet lists one modulus. What is the most likely cause?</p>",
    choices: [
      "The nylon crystallised into a metallic phase along the flow direction",
      "Density varies enough across the part to explain the stiffness change",
      "Gate position and melt flow aligned the short glass fibres one way",
      "Fibre orientation is irrelevant; the datasheet lists a single modulus",
    ],
    answer: 2,
    explanation: `<p>Short glass fibres rotate into alignment with the melt-flow direction as the cavity fills, most strongly in the skin layers where shear is highest. The result is an anisotropic part, with modulus, strength, shrinkage and creep all differing along and across the flow, often by a factor of two in modulus for a 30% glass grade.</p>
<p>The datasheet modulus is measured on an end-gated tensile bar in which every fibre is aligned along the specimen axis. Best case, and a value your cover will only reach in the flow direction.</p>
<p>So orient ribs and load paths with the expected flow, keep critical loads away from weld lines where two flow fronts meet with fibres lying across the joint, since strength there can be half the bulk value, fix the gate position before tuning wall thickness, ask the moulder for a fibre-orientation prediction, and validate on moulded parts rather than trusting an isotropic hand calculation or FE card.</p>`,
  },
  {
    id: "material-properties-q32",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A 500 mm aluminum rail (&alpha; = 23&times;10<sup>&minus;6</sup>/&deg;C) is bolted at both ends to a steel base (&alpha; = 12&times;10<sup>&minus;6</sup>/&deg;C). For an 80 &deg;C rise, how much more would the aluminum expand freely than the steel, in mm?</p>",
    answer: 0.44,
    unit: "mm",
    explanation: `<p class="eq">&Delta; = (&alpha;<sub>Al</sub> &minus; &alpha;<sub>steel</sub>) L &Delta;T</p>
<p class="eq">&Delta; = (23 &minus; 12)&times;10<sup>&minus;6</sup> &times; 500 mm &times; 80 = <strong>0.44 mm</strong></p>
<p>Nearly half a millimetre, against alignment tolerances usually measured in hundredths. And because both ends are bolted, that movement does not happen. It converts into fastener shear, bolt slip, or bowing of the rail.</p>
<p>Size the consequence: blocking a strain of &Delta;/L = 8.8&times;10<sup>&minus;4</sup> in aluminium at E = 70 GPa implies about 62 MPa if the base were perfectly rigid, a significant fraction of 6061-T6&rsquo;s yield on a part nobody thought was loaded.</p>
<p>The fix is architectural rather than analytical. One fixed datum with slotted or flexured holes elsewhere, matched-CTE materials, or a compliant bond line. State which end is the datum on the drawing.</p>`,
  },
  {
    id: "material-properties-q33",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A high-strength, low-ductility steel lug passes its nominal yield check with margin, but inspection finds a 2 mm crack at the fillet radius. Which property now belongs in the conversation?</p>",
    choices: [
      "Specific heat, because a crack changes how the lug stores thermal energy",
      "Fracture toughness: flaw size plus tensile stress now sets the failure",
      "Density, since a denser alloy closes the crack faces under load",
      "Poisson's ratio, because lateral contraction governs how a crack grows",
    ],
    answer: 1,
    explanation: `<p>Once a crack exists the part is no longer governed by smooth-section yielding. The governing quantity is the stress intensity K = Y&sigma;&radic;(&pi;a) compared against the material&rsquo;s fracture toughness K<sub>IC</sub>. Failure comes when K reaches K<sub>IC</sub>, however much yield margin the nominal section shows.</p>
<p>What makes this counter-intuitive is that the two properties often move in opposite directions. Heat treating a steel from 900 to 1500 MPa yield can halve K<sub>IC</sub>, so the stronger lug tolerates a <em>smaller</em> flaw. A 2 mm crack in a tough alloy is a maintenance item; the same crack in a peak-hardened alloy can be critical.</p>
<p>Three questions follow. Is the crack in a tension field or a compression one? What is the smallest flaw your inspection method can reliably find? And will fatigue grow this crack to critical size before the next inspection? That last one, inspection interval against crack growth rate, is the whole basis of damage-tolerant design.</p>`,
  },
  {
    id: "material-properties-q34",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A plate of K<sub>IC</sub> = 35 MPa&radic;m contains an edge flaw approximated by Y = 1 and a = 2.0 mm. Using K = Y&sigma;&radic;(&pi;a), estimate the tensile stress at fracture, in MPa.</p>",
    answer: 441,
    unit: "MPa",
    explanation: `<p class="eq">&sigma; = K<sub>IC</sub> / [Y&radic;(&pi;a)] = 35 / &radic;(&pi; &times; 0.0020) = 35 / 0.07927 = <strong>441 MPa</strong></p>
<p>Leaving a in millimetres inflates the answer by &radic;1000 &asymp; 31.6, the most common slip in fracture arithmetic. Allowable stress falls with &radic;a, so quadrupling the crack to 8 mm halves it to 221 MPa. A smooth-section yield check on a 700 MPa plate would have called 441 MPa perfectly safe.</p>`,
  },
  {
    id: "material-properties-q35",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A press-fit plastic bushing holds fine on the bench at 23 &deg;C but is loose after a week inside a 70 &deg;C motor housing. Which data do you go and get first?</p>",
    choices: [
      "Room-temperature tensile yield only, since creep cannot occur below yield",
      "The housing's hardness, because it sets the modulus of the plastic bushing",
      "Dry density only: heat drives out moisture and mass but not stiffness",
      "T<sub>g</sub>, creep modulus and stress relaxation at the actual 70 &deg;C service temperature",
    ],
    answer: 3,
    explanation: `<p>The failure is time-dependent, so a one-minute tensile number cannot describe it. A press fit works by holding elastic hoop strain in the bushing, and a polymer under sustained strain relaxes, with relaxation accelerating sharply as temperature approaches T<sub>g</sub>. Over a week at 70 &deg;C the retained contact pressure can fall to a fraction of its installed value while the material is nowhere near its yield stress, which is why option A&rsquo;s reasoning fails. Creep and relaxation happen well below yield; that is their defining feature.</p>
<p>The data you want is an isochronous stress-strain or relaxation-modulus curve at 70 &deg;C for the required life, plus T<sub>g</sub> or HDT, and moisture conditioning if the polymer is a nylon.</p>
<p>Fixes in order of robustness: capture the bushing mechanically with a shoulder, flange or retaining ring so the plastic is not the only thing holding it; add a metal sleeve or a wave spring to supply the preload; move to a higher-T<sub>g</sub> grade; or reduce installed strain and increase contact area so the sustained stress is lower.</p>`,
  },
  {
    id: "material-properties-q36",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A carbon-fibre panel is bolted directly to an aluminum frame with steel fasteners, and the assembly sees rainwater. What is the dominant material-selection risk?</p>",
    choices: [
      "The carbon panel will soften below the aluminum's stiffness when it is wet",
      "Galvanic attack on the aluminum: carbon is cathodic and rain conducts",
      "Aluminum picks up density from absorbed salt until the fasteners loosen",
      "The joint is fine as long as the aluminum's nominal stress stays below yield",
    ],
    answer: 1,
    explanation: `<p>Carbon fibre is electrically conductive and sits at the noble end of the galvanic series, close to graphite. Aluminium sits near the active end. Bolt them together, add rainwater as an electrolyte, and you have a galvanic cell in which the aluminium is the anode and corrodes. The steel fasteners make a second couple.</p>
<p>The area ratio makes it worse. A large cathodic carbon panel driving a small anodic aluminium area, a fastener shank or a washer face, concentrates the entire current into that small area, so the attack is fast and local. Corrosion appears exactly where the joint&rsquo;s strength lives.</p>
<p>Standard mitigations: a glass-fibre or adhesive isolation ply between laminate and metal, wet-installed sealant, titanium or A286 fasteners rather than aluminium ones, non-conductive washers and sleeves, a full paint or primer system, and drainage so water does not sit in the joint. The stress check in option D is not wrong, just irrelevant to this failure mode.</p>`,
  },
  {
    id: "material-properties-q37",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A part machined from thick rolled 7075-T6 plate cracks through the thickness during forming, even though the certificate's longitudinal tensile properties looked comfortable. What did the specification miss?</p>",
    figure: figRoll,
    choices: [
      "The plate is anisotropic: ST ductility and toughness are far lower",
      "Density varies through the thickness of the plate after hot rolling",
      "Young's modulus is roughly doubled along the rolling direction",
      "Rolling removes residual stress, so the certificate values always apply",
    ],
    answer: 0,
    explanation: `<p>Rolling pancakes the grains and strings out the inclusions, so the plate has three distinct property directions: longitudinal along rolling, long transverse, and short transverse through the thickness. Strength varies modestly between them, maybe 5&ndash;10%, but <em>ductility and toughness</em> do not. ST elongation in thick 7xxx plate can be a third of the L value, and ST fracture toughness substantially lower, because a crack running through the thickness only has to separate weakly bonded interfaces between flattened grains and inclusion stringers.</p>
<p>A mill certificate usually reports the L direction. If your load, bend or crack path is ST, that number is the wrong one.</p>
<p>Call out grain direction on the drawing, orient lugs and bends so the tension and the bend axis avoid ST, ask for ST-direction property data or an ST-tested lot for critical parts, and consider a forging, where the grain flow can be made to follow the part shape, or an extrusion instead of thick plate. Modulus and density are essentially isotropic here; only the fracture-related properties swing.</p>`,
  },
  {
    id: "material-properties-q38",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A handheld product housing must survive waist-height drops onto concrete, including outdoors in winter. Beyond a yield-strength check, which material data decides whether the material passes?</p>",
    figure: figDBTT,
    choices: [
      "Room-temperature density, since a lighter housing hits the ground softer",
      "Surface hardness only, because every drop is fundamentally a wear event",
      "Notched impact toughness at the coldest temperature the product sees",
      "Static tensile strength from a slow coupon test, with a factor of safety",
    ],
    answer: 2,
    explanation: `<p>A drop is an energy event delivered fast, at a notch, possibly cold. Three of the four conditions that push a material toward brittle behaviour. The property that captures all of it is notched impact toughness, Charpy or Izod, measured at the minimum service temperature rather than a slow tensile number.</p>
<p>The figure shows why the temperature qualifier is load-bearing. A BCC steel or a glassy polymer can absorb 100 J at +20 &deg;C and 10 J at &minus;20 &deg;C, with the transition falling inside the ordinary service range. Qualify the housing on a warm bench and you have tested the material in the one condition where it passes. FCC metals such as aluminium and austenitic stainless have no such transition, which is one reason they are used cryogenically.</p>
<p>The design details matter as much as the material. Screw bosses and rib intersections are the notches that concentrate the impact, so radii, wall-thickness transitions, gate and weld-line placement, and moulded-in stress all belong in the same review. Specify the drop test at temperature and on production-moulded parts.</p>`,
  },
  {
    id: "material-properties-q39",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A glass pane is bonded into an aluminum frame and the assembly cycles between &minus;20 &deg;C and 80 &deg;C. The glass keeps cracking at the corners. What is driving it?</p>",
    choices: [
      "The glass is too dense, so thermal cycling adds inertial load at the corners",
      "Aluminum's modulus is too high for it to expand when it is heated",
      "The adhesive cannot matter, because it is not a structural material",
      "CTE mismatch: the frame strains a brittle pane every temperature cycle",
    ],
    answer: 3,
    explanation: `<p>Aluminium expands at about 23 &micro;m/m/&deg;C, soda-lime glass at about 9. Over a 100 &deg;C swing that is 1.4 mm of relative movement on a 1 m frame. If the bond is stiff and the corners are constrained, the frame drags the pane, and glass is brittle with essentially no ability to yield away a local peak, so the stress concentrates where two constrained edges meet and finds an edge flaw.</p>
<p>The adhesive is the opposite of irrelevant. It is the compliance budget. A thicker, lower-modulus structural sealant lets the frame slide relative to the pane and drops the transferred stress dramatically, which is exactly how automotive and curtain-wall glazing is done. Silicone glazing sealants are chosen for shear compliance and durability, not adhesion strength alone.</p>
<p>Fix list: compliant bond line with a specified thickness, setting blocks so the pane floats rather than being pinned at four corners, corner relief, edge treatment, since seamed or polished edges have fewer flaws than as-cut, and where the design allows, tempered or heat-strengthened glass to raise the surface compression a flaw must overcome.</p>`,
  },
  {
    id: "material-properties-q40",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A supplier datasheet lists &ldquo;typical tensile strength 520 MPa&rdquo; for a glass-filled composite, and your part is safety-critical. What number belongs in the stress analysis?</p>",
    choices: [
      "The typical 520 MPa, since roughly half of production exceeds that value",
      "A minimum-basis allowable knocked down for temperature and moisture",
      "The highest value plotted in the supplier's marketing literature",
      "No material number is needed once the FEA stress plot comes back blue",
    ],
    answer: 1,
    explanation: `<p>&ldquo;Typical&rdquo; is roughly the mean of the supplier&rsquo;s test data, so about half of what you receive is weaker than that. A coin flip is not a design basis. Safety-critical work uses a statistically derived minimum: A-basis, where 99% of the population exceeds it at 95% confidence, for a single load path; B-basis at 90%/95% where load paths are redundant; or the specification minimum from the material standard for less formal programmes.</p>
<p>Then apply the knockdowns the coupon never saw: temperature, moisture absorption, UV and thermal ageing, orientation relative to fibre or flow direction, weld lines, void content, surface finish for fatigue, and the difference between a moulded coupon and your part&rsquo;s geometry. For filled polymers and composites those knockdowns run to 30&ndash;40% routinely, because the scatter is much wider than for wrought metal.</p>
<p>A reviewer will also want incoming test and lot traceability on the drawing, since an allowable is only real if the delivered material matches what you qualified, and confirmation that the coupon&rsquo;s failure mode is the same as the part&rsquo;s.</p>`,
  },
  {
    id: "material-properties-q41",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A plastic latch shows a steady secondary creep rate of 2.0&times;10<sup>&minus;10</sup> s<sup>&minus;1</sup> at its service stress and temperature. Estimate the creep strain accumulated over 1000 hours, expressed as a percentage.</p>",
    figure: figPolyCreep,
    answer: 0.072,
    unit: "%",
    tolerance: 0.04,
    explanation: `<p class="eq">t = 1000 h &times; 3600 s/h = 3.60&times;10<sup>6</sup> s</p>
<p class="eq">&epsilon; = (2.0&times;10<sup>&minus;10</sup>)(3.60&times;10<sup>6</sup>) = 7.20&times;10<sup>&minus;4</sup> = <strong>0.072%</strong></p>
<p>Whether that is acceptable depends entirely on what the strain does. For a structural bracket, 0.07% is nothing. For a snap fit holding preload it can be most of the installed interference, and once the preload is gone the joint rattles, the seal leaks, or the latch releases.</p>
<p>Two cautions on the extrapolation. It ignores primary creep, which adds strain early, and it assumes you never reach tertiary creep, which is where rupture lives. The rate itself is enormously sensitive to conditions: as the figure shows, raising the temperature can move creep rate by an order of magnitude, so a rate measured at 20 &deg;C says nothing about the same latch at 60 &deg;C.</p>`,
  },
  {
    id: "material-properties-q42",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A small bumper must absorb 12 J before it cracks, and the volume of material that actually deforms is 4.0 cm<sup>3</sup>. What energy density (toughness) does the material need, in MJ/m<sup>3</sup>?</p>",
    answer: 3,
    unit: "MJ/m^3",
    explanation: `<p class="eq">V = 4.0 cm<sup>3</sup> = 4.0&times;10<sup>&minus;6</sup> m<sup>3</sup></p>
<p class="eq">U = 12 J / 4.0&times;10<sup>&minus;6</sup> m<sup>3</sup> = 3.0&times;10<sup>6</sup> J/m<sup>3</sup> = <strong>3.0 MJ/m<sup>3</sup></strong></p>
<p>The value of this calculation is that it forces an energy view instead of a stress view. Asked how strong the bumper must be, most candidates reach for a force and a yield stress, but an impact delivers a fixed amount of energy and the design question is where that energy goes.</p>
<p>The assumption to watch is that the whole 4 cm<sup>3</sup> strains uniformly. Real parts do not. If deformation localises into a thin ligament that is a tenth of the volume, the local material needs ten times the toughness. Crush structures are designed to fold progressively because folding recruits volume, and a sharp corner that concentrates strain into a small region is the enemy of energy absorption.</p>`,
  },
  {
    id: "material-properties-q43",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A unidirectional carbon/epoxy has 60% fibre by volume with E<sub>f</sub> = 230 GPa and E<sub>m</sub> = 3.4 GPa. Estimate the modulus along the fibres, E<sub>1</sub>, by the rule of mixtures, in GPa.</p>",
    figure: figComposite,
    answer: 139,
    unit: "GPa",
    explanation: `<p class="eq">E<sub>1</sub> = V<sub>f</sub>E<sub>f</sub> + V<sub>m</sub>E<sub>m</sub> = 0.60(230) + 0.40(3.4)</p>
<p class="eq">E<sub>1</sub> = 138 + 1.36 = <strong>139 GPa</strong></p>
<p>Loaded along the fibres, fibre and matrix are constrained to the same strain, the iso-strain Voigt bound, so the moduli add in proportion to volume fraction. The matrix contributes 1% of the result: along the fibres the resin is essentially just glue, which is exactly why the transverse direction behaves so differently, with the same resin in series with the fibres and controlling everything.</p>
<p>Check the answer against something you know. 139 GPa is roughly twice aluminium&rsquo;s stiffness at 60% of its density, giving a specific stiffness around 87 MN&middot;m/kg against aluminium&rsquo;s 26. That ratio is the entire commercial case for carbon fibre, and it exists only in the fibre direction, only if the laminate is actually unidirectional, and only if the fibre volume fraction was really achieved in the layup.</p>`,
  },
  {
    id: "material-properties-q44",
    type: "mc",
    difficulty: 2,
    prompt: "<p>Same laminate as before (60% fibre, E<sub>f</sub> = 230 GPa, E<sub>m</sub> = 3.4 GPa), but now loaded across the fibres. Roughly what transverse modulus E<sub>2</sub> should you expect?</p>",
    figure: figComposite,
    choices: [
      "About 8 GPa: the compliant matrix is in series and dominates",
      "About 139 GPa, the same as along the fibres, since it is one solid",
      "About 70 GPa, roughly the average of the fibre and matrix moduli",
      "About 230 GPa, because the fibres carry load in every direction",
    ],
    answer: 0,
    explanation: `<p class="eq">1/E<sub>2</sub> = V<sub>f</sub>/E<sub>f</sub> + V<sub>m</sub>/E<sub>m</sub> = 0.60/230 + 0.40/3.4</p>
<p class="eq">1/E<sub>2</sub> = 0.00261 + 0.1176 = 0.1202 &rarr; E<sub>2</sub> = <strong>8.3 GPa</strong></p>
<p>Across the fibres, fibre and matrix carry the <em>same stress</em> and their strains add, the iso-stress Reuss bound, so the compliances add. The stiff fibres contribute 2% of the compliance and the soft resin does the rest, leaving the same panel at 139 GPa one way and 8.3 GPa the other, a factor of 17. The series-versus-parallel intuition from springs is exactly right: in series the softest element governs.</p>
<p>So unidirectional material is almost never used alone. You lay up 0/&plusmn;45/90 so some fibres point at every load, accepting a lower peak modulus for usable properties in all directions. It is also why a composite part fails at its resin-dominated features first: bolt bearing, interlaminar shear and free edges, none of which the fibre-direction number describes.</p>`,
  },
  {
    id: "material-properties-q45",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A steel bar (E = 200 GPa) is pulled to a total strain of 0.0080, at which point the stress is 380 MPa. The load is then released completely. What permanent strain remains?</p>",
    figure: figUnload,
    answer: 0.0061,
    unit: "mm/mm",
    explanation: `<p class="eq">&epsilon;<sub>recovered</sub> = &sigma;<sub>B</sub>/E = 380 MPa / 200,000 MPa = 0.0019</p>
<p class="eq">&epsilon;<sub>permanent</sub> = 0.0080 &minus; 0.0019 = <strong>0.0061</strong></p>
<p>Unloading follows a line parallel to the original elastic line, so the strain recovered is purely elastic at the stress reached. The bar ends 0.61% longer than it started, with 0.19% springing back, which on a 500 mm bar is 3.05 mm of permanent stretch.</p>
<p>Two things fall out. Springback is proportional to &sigma;/E, which is why forming a high-strength sheet needs far more over-bend than a mild one, and why the modulus rather than the strength sets how much deformation you get back. And reloading the bar now behaves elastically all the way to 380 MPa, because the cold work has raised its yield strength to the stress it last saw. That is strain hardening, the same mechanism that makes a cold-drawn bar strong.</p>`,
  },
  {
    id: "material-properties-q46",
    type: "mc",
    difficulty: 2,
    prompt: "<p>The figure shows one polymer tested at three combinations of strain rate and temperature. Your clip is assembled slowly at room temperature and must also survive a &minus;10 &deg;C drop. Which curve governs the drop case?</p>",
    figure: figRate,
    choices: [
      "The slow, warm curve, because that is the one on the datasheet",
      "The middle curve, since a drop sits between the two extremes",
      "The fast, cold curve — the condition the drop actually creates",
      "Any of them; polymers behave the same at every rate and temperature",
    ],
    answer: 2,
    explanation: `<p>Design each load case against the curve for that case&rsquo;s conditions. A drop is a millisecond event at the coldest service temperature, so the governing curve is the stiff, strong, brittle one, and the material will reach a higher stress and break at a fraction of the strain the assembly case sees.</p>
<p>The physics is one idea: deformation in a polymer needs chains to move, and chain motion takes time. Loading fast outruns it, cooling slows it down. High rate and low temperature are therefore equivalent, which is time-temperature superposition, and why a rate you cannot test can be simulated by testing colder.</p>
<p>Datasheet values are usually quoted at a slow standard rate and 23 &deg;C, so they flatter the impact case. Ductility, not strength, is what disappears, and the strain to break can drop by an order of magnitude, which is what actually kills snap features. Design the clip so the peak strain in the drop stays well inside the cold, fast curve, put a generous radius at the hinge root, and qualify with a cold drop test on moulded parts.</p>`,
  },
  {
    id: "material-properties-q47",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A power-electronics baseplate must pull heat out of a chip and also stay flat under bolt preload. Why might copper beat stainless steel here, even though stainless is much stronger?</p>",
    choices: [
      "Copper spreads heat far better, and its lower strength becomes a separate check",
      "Copper is lower density than stainless, so the assembly is always lighter",
      "Stainless has essentially zero expansion, so it cannot be bolted to a chip",
      "High conductivity also guarantees the copper will not yield under the bolts",
    ],
    answer: 0,
    explanation: `<p>Identify the controlling requirement. If the part&rsquo;s job is to spread heat, thermal conductivity decides it: copper is about 400 W/m&middot;K, stainless about 15, a factor of 25. No amount of yield strength compensates for that, and the chip&rsquo;s junction temperature is usually the binding constraint on the whole design.</p>
<p>Choosing copper does not delete the mechanical requirements, it moves them into a separate check. Copper is dense at 8.9 g/cm<sup>3</sup>, relatively soft, and creeps or relaxes under sustained contact pressure, so bolt preload can decay, opening the thermal interface and undoing the reason you picked copper. You would size the bearing area under each bolt head, consider steel washers or shoulder bushings to carry preload, watch the CTE mismatch against the ceramic substrate, and specify plating for corrosion and solderability.</p>
<p>Options B and C are simply false, since copper is denser than stainless and stainless expands at about 17 &micro;m/m/&deg;C, and D is the single-property thinking the question is testing for.</p>`,
  },
  {
    id: "material-properties-q48",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A cover panel of fixed plan area must meet a bending-stiffness target with thickness free. Using the plate index E<sup>1/3</sup>/&rho; = 0.750 for steel and 1.53 for aluminum, what is the mass ratio m<sub>Al</sub>/m<sub>steel</sub>?</p>",
    answer: 0.49,
    unit: "(ratio)",
    explanation: `<p class="eq">m<sub>Al</sub>/m<sub>steel</sub> = 0.750/1.53 = <strong>0.490</strong></p>
<p>Mass at fixed stiffness is inversely proportional to the index, since the index came from m &prop; &rho;/E<sup>1/3</sup>. The stiffness-matched aluminium panel is 49% of the mass of the steel one, a 51% saving, larger than the 42% a beam gives, which is larger than the 0% a tie gives. The freer the section, the bigger aluminium&rsquo;s advantage, with the exponent running 1, 1/2, 1/3 across tie, beam and plate.</p>
<p>Check what it costs geometrically. Thickness scales as (E<sub>steel</sub>/E<sub>Al</sub>)<sup>1/3</sup> = (200/70)<sup>1/3</sup> = 1.42, so the aluminium panel is 42% thicker, and if the envelope cannot take that the index does not apply.</p>
<p>One warning specific to panels: making a thin panel thicker in a lighter material changes its buckling and its natural frequencies as well as its static stiffness. Oil-canning and drumming are stiffness problems a static index does not see.</p>`,
  },
  {
    id: "material-properties-q49",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A stainless bracket inside a 500 &deg;C furnace carries a constant load for 20,000 hours. Its room-temperature yield strength is comfortably above the calculated stress. What data is missing?</p>",
    figure: figCreepT,
    choices: [
      "Rockwell hardness measured at room temperature after the exposure",
      "The alloy's density at 500 &deg;C, to recompute the self-weight stress",
      "Nothing more: stress below room-temperature yield cannot fail in time",
      "Creep-rupture and strain data at 500 &deg;C for the required life",
    ],
    answer: 3,
    explanation: `<p>500 &deg;C is 773 K and austenitic stainless melts near 1700 K, so T/T<sub>m</sub> &asymp; 0.45, well into the creep regime. Under sustained load the bracket will accumulate strain and eventually rupture at a stress a room-temperature tensile test calls perfectly safe. Option C has the misconception exactly: creep operates entirely below yield, which is what makes it dangerous.</p>
<p>The data you need is stress versus rupture life at 500 &deg;C, and stress versus strain accumulated over 20,000 h. Allowables are then set as a fraction of the stress for rupture in the design life, often life times 10 or more as a margin, or by the stress causing 1% creep strain, whichever governs.</p>
<p>Alloys that look interchangeable on a room-temperature datasheet diverge wildly here. 304 against 321 against 310 against a nickel alloy such as Inconel 625 can differ by an order of magnitude in rupture life. Also check oxidation and scaling, thermal cycling, relaxation of any bolted preload, and whether a stress-relieved weld sits in the hot zone.</p>`,
  },
  {
    id: "material-properties-q50",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A rotating aluminum link sees fully reversed bending for 10<sup>8</sup> cycles. The team proposes sizing it &ldquo;below the endurance limit&rdquo; the way they would for a steel shaft. What is wrong with that?</p>",
    figure: figSN,
    choices: [
      "Nothing: every metal has an endurance limit at about half its UTS",
      "Aluminum has no S-N knee, so you must size to a finite-life allowable",
      "Aluminum's endurance limit exists but sits at 0.9 UTS, so it is safe",
      "Fatigue does not apply to aluminum because it is ductile and FCC",
    ],
    answer: 1,
    explanation: `<p>Ferrous alloys show a knee in the S-N curve near 10<sup>6</sup>&ndash;10<sup>7</sup> cycles, below which life is effectively infinite, a genuine endurance limit tied to interstitial carbon pinning dislocations. Aluminium, copper and most non-ferrous alloys have no such knee. The curve keeps sloping down, so no stress amplitude guarantees survival forever.</p>
<p>Aluminium design is therefore finite-life design. Pick a target life, say 10<sup>8</sup> cycles, read the allowable from the S-N curve at that life, and accept that doubling the life target costs allowable stress. Many references quote a fatigue strength at 5&times;10<sup>8</sup> cycles for aluminium precisely because there is no limit to quote instead.</p>
<p>Then apply the corrections that dominate real parts: surface finish, since machining marks are the usual crack starter, size, notch factor K<sub>f</sub> at any hole or fillet, mean stress via Goodman, and corrosion, which removes the steel knee too. If infinite life is genuinely required, that is an argument for steel.</p>`,
  },
  {
    id: "material-properties-q51",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>Creep-rupture data is correlated with the Larson-Miller parameter P = T(20 + log<sub>10</sub> t)/1000, with T in kelvin and t the rupture time in hours. Compute P for a component at 538 &deg;C required to last 10,000 hours.</p>",
    answer: 19.5,
    unit: "(dimensionless)",
    explanation: `<p class="eq">T = 538 + 273 = 811 K, &nbsp; log<sub>10</sub>(10,000) = 4</p>
<p class="eq">P = 811(20 + 4)/1000 = 811(24)/1000 = <strong>19.5</strong></p>
<p>Larson-Miller exists because you cannot run a 100,000-hour test to qualify a 100,000-hour part. Hold P at 19.5 and raise the metal temperature to 566 &deg;C, 839 K: log t = 19,500/839 &minus; 20 = 3.24, so t = 1,740 h. A 28 &deg;C rise cut the life by nearly six.</p>`,
  },
  {
    id: "material-properties-q52",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A steel shaft is nitrided to improve wear resistance at a bearing journal. What new risk does that introduce, which the wear improvement can hide?</p>",
    choices: [
      "Nitriding drives the surface density to zero, so the skin carries no load",
      "Nitriding permanently removes both fatigue and corrosion as concerns",
      "The core stops mattering, since only the hardened case carries the torque",
      "A brittle white layer, distortion and dimensional growth come with it",
    ],
    answer: 3,
    explanation: `<p>Nitriding is a real improvement: a 60+ HRC case with compressive residual stress that usually raises bending fatigue strength as well as wear resistance, at temperatures low enough to avoid a quench. But it is a process change, and process changes have side effects.</p>
<p>The compound or white layer at the very surface is hard and brittle, and it spalls or cracks at a sharp corner or under impact, so it is often ground or lapped off. Parts grow a few microns and can distort, so finish dimensions and any tight fit must account for it. Grinding after nitriding risks burns and can cut through the case into the softer core, throwing away the benefit and leaving a tensile-stressed surface. Case depth must suit the contact stress, since too shallow and the case collapses into the core under Hertzian load.</p>
<p>The core still carries the torque and bending. Case-hardening is hard surface on tough core, so specify core hardness, case depth and surface finish, not just &ldquo;nitride&rdquo;.</p>`,
  },
  {
    id: "material-properties-q53",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A high-strength 7xxx aluminum landing-gear fitting sits under sustained tensile load in a salt-spray environment. Which failure mode gets its own review item?</p>",
    choices: [
      "Stress-corrosion cracking in a susceptible temper under sustained tension",
      "A uniform density increase as the alloy absorbs salt from the spray",
      "Only room-temperature hardness, since corrosion cannot interact with stress",
      "Thermal conductivity, because salt spray is fundamentally a heat problem",
    ],
    answer: 0,
    explanation: `<p>Stress-corrosion cracking needs three things at once: a susceptible material condition, a sustained <em>tensile</em> stress, and a specific environment. High-strength 7xxx aluminium in the peak-aged T6 condition, held in tension, in chlorides, is the textbook combination. The result is delayed, brittle, branching cracking at stresses far below yield, with no warning deformation, which is what makes it a review item rather than a footnote.</p>
<p>Direction matters. SCC in rolled plate is worst in the short-transverse direction, so a fitting machined with ST tension across it is the worst case, and residual stress from machining or an interference fit counts as sustained tension just as much as service load does.</p>
<p>Mitigations, roughly in order: specify an over-aged temper, T73 or T7351, trading 10&ndash;15% of yield strength for a large gain in SCC resistance; relieve or reverse surface residual stress by shot peening; protect with anodise, primer and sealant; avoid ST tension in the design; provide drainage; and set an inspection interval. Choosing T73 for landing gear is the standard industry answer.</p>`,
  },
  {
    id: "material-properties-q54",
    type: "mc",
    difficulty: 3,
    prompt: "<p>Qualification coupons for a laser-powder-bed bracket were built flat, but production brackets are printed upright and fail between layers at loads the coupons survived. What assumption broke?</p>",
    figure: figAM,
    choices: [
      "AM metal is isotropic once it is metallic, so orientation cannot matter",
      "Layer lines change the surface colour, not the mechanical properties",
      "Build direction is a material variable; test coupons in that build",
      "The upright print must be denser, and higher density caused the fracture",
    ],
    answer: 2,
    explanation: `<p>In powder-bed fusion, build orientation changes the material. Grains grow columnar along the thermal gradient, so the microstructure is directional. Lack-of-fusion defects are flat and lie in the plane between layers. Down-facing surfaces are rough and partially supported. Residual stress builds along the build axis. Load a part across those layer interfaces and you are pulling directly on the defect population, so Z-direction elongation and fatigue strength sit well below XY even when static ultimate strength looks similar.</p>
<p>&ldquo;Ti-6Al-4V, HIP&rsquo;d, per spec&rdquo; is therefore not a complete material definition for an AM part. The definition includes machine and parameter set, build orientation, support strategy, stress relief and HIP, surface finish, and inspection method.</p>
<p>Fix the qualification plan accordingly: build witness coupons in the same orientation, same build and ideally the same plate as the parts; test in the loading direction that matters; hot isostatic press to close internal porosity; machine or polish critical surfaces, since as-built roughness dominates fatigue; and CT-inspect the first articles to find where the defects actually sit.</p>`,
  },
  {
    id: "material-properties-q55",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A designer specifies a very hard ceramic roller to stop conveyor wear. It stops wearing, but now the roller chips at its edges whenever a load lands on it. What is the correct engineering response?</p>",
    choices: [
      "Push hardness higher still, since chipping proves the surface was soft",
      "Chipping is brittle fracture: chamfer the edges or use a tougher grade",
      "Ignore the chips; hardness is the only property in rolling contact",
      "Switch to the densest ceramic available, because density arrests cracks",
    ],
    answer: 1,
    explanation: `<p>Read the failure mode from the symptom. Abrasive wear removes material gradually across the contact; this is sudden loss of material at an edge, which is brittle fracture under contact stress. Ceramics have excellent hardness and terrible fracture toughness, with alumina around 4 MPa&radic;m against 50&ndash;100 for a structural steel, so a tensile stress at an edge flaw runs a crack immediately. Within ceramics, harder generally means <em>less</em> tough, so option A actively makes it worse.</p>
<p>The corrections combine geometry and material. Chamfer or radius the edges so contact never lands on a corner, improve alignment and support so load is not concentrated at the end of the roller, reduce impact by softening the infeed, and move to a tougher grade, zirconia or a silicon nitride rather than alumina, or a hard coating on a steel substrate so the tough core takes the shock.</p>
<p>Hardness and toughness are different properties, and specifying one without checking the other is how a wear fix becomes a fracture problem.</p>`,
  },
  {
    id: "material-properties-q56",
    type: "mc",
    difficulty: 3,
    prompt: "<p>Two alloys have the same yield strength. Alloy A is ductile; Alloy B is high-strength and notch-sensitive. Your part has a sharp internal corner under cyclic load. What is the right instinct?</p>",
    choices: [
      "Take the high-strength alloy: equal yield means equal fatigue behaviour",
      "Cut the notch severity first, then choose on notched fatigue data",
      "Ignore the corner, because nominal stress governs every material",
      "Pick the denser alloy, since higher density blunts a propagating crack",
    ],
    answer: 1,
    explanation: `<p>Equal yield strength says nothing about fatigue at a notch. A sharp internal corner multiplies local stress by K<sub>t</sub>, easily 3, and how much of that the part feels in fatigue is set by notch sensitivity q through K<sub>f</sub> = 1 + q(K<sub>t</sub> &minus; 1). Ductile, lower-strength alloys have low q, because local plasticity blunts the peak, while high-strength, low-ductility alloys approach q = 1 and feel the full concentration. Two alloys can differ by several times in life at the same nominal stress.</p>
<p>Geometry first, because it is usually free and always bigger. A fillet radius that takes K<sub>t</sub> from 3 to 1.6 more than doubles the fatigue allowable, and no material change will match that. Then improve the surface with finish and shot peening for compressive residual stress, and only then choose the alloy, using notched fatigue data at the relevant R-ratio rather than smooth-specimen curves.</p>
<p>Material selection and detail design are one decision under cyclic load, and the highest-strength alloy is frequently the worse choice.</p>`,
  },
  {
    id: "material-properties-q57",
    type: "mc",
    difficulty: 3,
    prompt: "<p>An LED heat-sink material is picked purely for maximum thermal conductivity, and the first prototype strips its threaded mounting holes during assembly. What should the design review record?</p>",
    choices: [
      "Conductivity and thread strength are separate requirements; both belong in the spec",
      "A high thermal conductivity implies high mechanical properties as well",
      "Threads strip only when the coefficient of thermal expansion is too low",
      "A heat sink never needs a structural check, because its function is thermal",
    ],
    answer: 0,
    explanation: `<p>The part has more than one function and it was selected against one of them. High-conductivity materials, pure copper, 1000-series aluminium, graphite, are chosen precisely because they are pure, and purity is what makes them soft. 1050 aluminium yields around 30 MPa against 275 MPa for 6061-T6, so its thread shear capacity is roughly a tenth. Nothing about conductivity predicts strength; if anything, alloying additions that raise strength scatter electrons and lower k, so the two requirements pull in opposite directions.</p>
<p>The fixes are ordinary once the requirement is written down: steel or brass threaded inserts, longer thread engagement of two to three diameters in a soft material, through-bolts with washers into a nut rather than tapped holes, a controlled and lower assembly torque, larger bearing area under each head, or splitting the functions with a soft high-k spreader clamped by a stiffer structural frame.</p>
<p>List every function the part performs before screening on any single property, and give each function its own margin.</p>`,
  },
  {
    id: "material-properties-q58",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A housing drawing specifies only &ldquo;Aluminum, yield &gt; 200 MPa.&rdquo; Suppliers come back proposing die casting, machining from billet, and additive manufacturing, all claiming compliance. What is wrong with the spec?</p>",
    choices: [
      "It is complete: all aluminum at the same yield strength behaves alike",
      "It should call out density instead; yield is irrelevant for a housing",
      "It omits the process route, which sets defects, temper and finish",
      "It should forbid heat treatment, since temper does not change strength",
    ],
    answer: 2,
    explanation: `<p>Three parts can all meet &ldquo;yield &gt; 200 MPa&rdquo; and behave nothing alike. A die casting carries gas porosity, so its elongation may be 3% and its fatigue strength poor, and porosity is not distributed predictably. Billet is wrought, consistent and directional, with the grain properties on the certificate and lower short-transverse values nobody quotes. An AM part is anisotropic by build direction, rough as-built, and its properties depend on stress relief and HIP.</p>
<p>Yield strength is only the one number they happen to share. The spec has to add alloy and temper, or process-specific allowables, the heat treatment, the acceptable defect population and the inspection method that verifies it, surface treatment and finish, critical dimensions and datums, and any orientation requirement.</p>
<p>Material and process are a single specification, not two independent choices. This is where textbook material selection turns into production engineering, and it is why a drawing naming only an alloy family invites three incomparable quotes.</p>`,
  },
  {
    id: "material-properties-q59",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A 7075 fitting will carry sustained tension in a marine environment. The heat-treat shop asks whether you want T6 (peak aged) or T73 (over-aged). Reading the ageing curve, what exactly are you trading?</p>",
    figure: figAge,
    choices: [
      "Nothing is traded: T73 is a longer T6 and reaches the same strength",
      "T73 gives higher strength and better corrosion resistance than T6",
      "T6 gives up strength in exchange for stress-corrosion resistance",
      "Roughly 10-15% of yield strength, bought back as SCC resistance",
    ],
    answer: 3,
    explanation: `<p>Precipitation hardening runs along the curve in the figure. Solution treat, quench to trap solute, then age so fine coherent precipitates form and pin dislocations. Strength rises to a peak, T6, and if you keep going the precipitates coarsen, lose coherency, and strength falls again. That is over-ageing, and T73 is deliberately parked on the far side of the peak.</p>
<p>You give up roughly 10&ndash;15% of yield, with 7075-T6 near 500 MPa and T73 near 435 MPa, and get back a large improvement in resistance to stress-corrosion cracking and exfoliation, because the grain-boundary precipitate structure that made the peak-aged alloy susceptible has been coarsened. For sustained tension in chlorides that is a good trade, which is why aerospace fittings and landing-gear parts are routinely specified T73 or T7351.</p>
<p>Over-ageing is a deliberate design choice, not a processing error. The same curve explains why a hotter age peaks sooner and lower, and why welding a T6 part over-ages the heat-affected zone whether you wanted it or not.</p>`,
  },
  {
    id: "material-properties-q60",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A 6061-T6 tube is welded. Parent allowable is 275 MPa but the as-welded heat-affected zone allowable is 165 MPa. To carry the same axial load, by what percentage must the cross-sectional area be increased at the weld?</p>",
    answer: 66.7,
    unit: "%",
    explanation: `<p class="eq">A<sub>weld</sub>/A<sub>parent</sub> = 275/165 = 1.667</p>
<p class="eq">increase = (1.667 &minus; 1) &times; 100 = <strong>66.7%</strong></p>
<p>Same load, lower allowable stress, so the area rises in inverse proportion. Two thirds more material, local to the joint. That is the real cost of welding a precipitation-hardened aluminium, and it is invisible if you size the tube on parent-metal properties and then decide how to join it.</p>
<p>The mechanism: 6061-T6 gets its strength from fine precipitates, and the weld thermal cycle dissolves or coarsens them over a band 20&ndash;30 mm wide. The HAZ ends up somewhere between T4 and annealed and does not recover on its own, since only a full solution treatment and re-age restores T6, which usually distorts the assembly.</p>
<p>So thicken locally with a boss or doubler, move the weld to a low-stress region, re-heat-treat if the part can take it, or avoid the problem with bolts, rivets or adhesive. Choose the joining method while choosing the material, not afterwards.</p>`,
  },
];

export default extra;
