import type { TopicContent } from "../types";

// ---------------------------------------------------------------------------
// Datums & Datum Reference Frames
// ---------------------------------------------------------------------------

// Fig 1 — datum feature vs. datum vs. datum feature simulator
const figSimulator = `<svg viewBox="0 0 460 268" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Three different things people call &quot;datum A&quot;</text>
  <!-- part with an exaggerated wavy bottom face -->
  <path d="M 100 92 L 380 92 L 380 146 C 374 148, 368 150, 360 150 C 346 150, 340 136, 310 138 C 278 140, 272 150, 240 150 C 215 150, 210 135, 185 134 C 160 133, 150 150, 120 150 C 114 150, 106 150, 100 144 Z" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <text x="240" y="118" text-anchor="middle" fill="#334155" font-size="12">machined part</text>
  <!-- theoretical datum plane through the three high points -->
  <line x1="76" y1="150" x2="424" y2="150" stroke="#1d4ed8" stroke-width="1.8" stroke-dasharray="7 4"/>
  <circle cx="120" cy="150" r="3.6" fill="#1d4ed8"/>
  <circle cx="240" cy="150" r="3.6" fill="#1d4ed8"/>
  <circle cx="360" cy="150" r="3.6" fill="#1d4ed8"/>
  <!-- surface plate (the physical simulator) -->
  <rect x="76" y="153" width="324" height="20" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="82" y1="183" x2="92" y2="173" stroke="#64748b" stroke-width="1"/>
  <line x1="112" y1="183" x2="122" y2="173" stroke="#64748b" stroke-width="1"/>
  <line x1="142" y1="183" x2="152" y2="173" stroke="#64748b" stroke-width="1"/>
  <line x1="172" y1="183" x2="182" y2="173" stroke="#64748b" stroke-width="1"/>
  <line x1="202" y1="183" x2="212" y2="173" stroke="#64748b" stroke-width="1"/>
  <line x1="232" y1="183" x2="242" y2="173" stroke="#64748b" stroke-width="1"/>
  <line x1="262" y1="183" x2="272" y2="173" stroke="#64748b" stroke-width="1"/>
  <line x1="292" y1="183" x2="302" y2="173" stroke="#64748b" stroke-width="1"/>
  <line x1="322" y1="183" x2="332" y2="173" stroke="#64748b" stroke-width="1"/>
  <line x1="352" y1="183" x2="362" y2="173" stroke="#64748b" stroke-width="1"/>
  <line x1="382" y1="183" x2="392" y2="173" stroke="#64748b" stroke-width="1"/>
  <!-- datum feature symbol: boxed letter + filled triangle on the surface -->
  <line x1="380" y1="150" x2="428" y2="150" stroke="#334155" stroke-width="1"/>
  <polygon points="420,141 436,141 428,150" fill="#334155"/>
  <line x1="428" y1="141" x2="428" y2="126" stroke="#334155" stroke-width="1"/>
  <rect x="416" y="104" width="24" height="22" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <text x="428" y="120" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <!-- numbered keys -->
  <circle cx="150" cy="129" r="9" fill="#fff" stroke="#334155" stroke-width="1.4"/>
  <text x="150" y="133" text-anchor="middle" font-size="11" fill="#334155">1</text>
  <circle cx="60" cy="150" r="9" fill="#fff" stroke="#1d4ed8" stroke-width="1.4"/>
  <text x="60" y="154" text-anchor="middle" font-size="11" fill="#1d4ed8">2</text>
  <circle cx="60" cy="186" r="9" fill="#fff" stroke="#334155" stroke-width="1.4"/>
  <text x="60" y="190" text-anchor="middle" font-size="11" fill="#334155">3</text>
  <line x1="60" y1="177" x2="60" y2="166" stroke="#334155" stroke-width="1"/>
  <line x1="69" y1="186" x2="82" y2="176" stroke="#334155" stroke-width="1"/>
  <!-- legend -->
  <text x="30" y="216" fill="#334155" font-size="12">1  datum feature &#8212; the real bottom face (form error shown &times;200)</text>
  <text x="30" y="235" fill="#1d4ed8" font-size="12">2  datum A &#8212; the perfect plane through the three high points</text>
  <text x="30" y="254" fill="#334155" font-size="12">3  datum feature simulator &#8212; the granite plate that stands in for it</text>
</svg>`;

// Fig 2 — the datum reference frame: three mutually perpendicular planes
const figDRF = `<svg viewBox="0 0 460 272" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="dat2-ax" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">The datum reference frame: three perpendicular planes</text>
  <!-- plane B (back-right wall) -->
  <polygon points="240,140 370,140 370,58 240,58" fill="#e2e8f0" stroke="#334155" stroke-width="1.4" opacity="0.85"/>
  <!-- plane C (back-left wall) -->
  <polygon points="240,140 170,175 170,93 240,58" fill="#e2e8f0" stroke="#334155" stroke-width="1.4" opacity="0.6"/>
  <!-- plane A (floor) -->
  <polygon points="170,175 300,175 370,140 240,140" fill="#f1f5f9" stroke="#334155" stroke-width="1.4"/>
  <!-- part sitting in the corner -->
  <polygon points="252,152 312,152 352,132 292,132" fill="#dbeafe" stroke="#334155" stroke-width="1.4"/>
  <polygon points="252,152 252,120 312,120 312,152" fill="#bfdbfe" stroke="#334155" stroke-width="1.4"/>
  <polygon points="312,152 312,120 352,100 352,132" fill="#dbeafe" stroke="#334155" stroke-width="1.4"/>
  <polygon points="252,120 292,100 352,100 312,120" fill="#eff6ff" stroke="#334155" stroke-width="1.4"/>
  <!-- plane letters -->
  <text x="272" y="166" font-weight="600" fill="#334155">A</text>
  <text x="336" y="90" font-weight="600" fill="#334155">B</text>
  <text x="196" y="126" font-weight="600" fill="#334155">C</text>
  <!-- axis triad -->
  <line x1="60" y1="228" x2="112" y2="228" stroke="#64748b" stroke-width="1.6" marker-end="url(#dat2-ax)"/>
  <line x1="60" y1="228" x2="60" y2="186" stroke="#64748b" stroke-width="1.6" marker-end="url(#dat2-ax)"/>
  <line x1="60" y1="228" x2="94" y2="211" stroke="#64748b" stroke-width="1.6" marker-end="url(#dat2-ax)"/>
  <text x="118" y="232" fill="#64748b" font-size="12">X</text>
  <text x="98" y="205" fill="#64748b" font-size="12">Y</text>
  <text x="55" y="181" fill="#64748b" font-size="12">Z</text>
  <!-- DOF accounting -->
  <text x="150" y="205" fill="#334155" font-size="12">A (primary, 3 contacts) locks T<tspan baseline-shift="sub" font-size="9">Z</tspan>, R<tspan baseline-shift="sub" font-size="9">X</tspan>, R<tspan baseline-shift="sub" font-size="9">Y</tspan></text>
  <text x="150" y="226" fill="#334155" font-size="12">B (secondary, 2 contacts) locks T<tspan baseline-shift="sub" font-size="9">Y</tspan>, R<tspan baseline-shift="sub" font-size="9">Z</tspan></text>
  <text x="150" y="247" fill="#334155" font-size="12">C (tertiary, 1 contact) locks T<tspan baseline-shift="sub" font-size="9">X</tspan></text>
  <text x="150" y="266" fill="#1d4ed8" font-size="12" font-weight="600">3 + 2 + 1 = all six degrees of freedom</text>
</svg>`;

// Fig 3 — the 3-2-1 locating scheme with DOF accounting
const fig321 = `<svg viewBox="0 0 460 288" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">3-2-1 locating scheme (plan view, A is the bottom face)</text>
  <!-- part -->
  <rect x="118" y="62" width="212" height="126" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <!-- primary A: three contacts on the underside, seen through the part -->
  <circle cx="150" cy="92" r="7" fill="#fff" stroke="#1d4ed8" stroke-width="1.8"/>
  <circle cx="150" cy="92" r="2.4" fill="#1d4ed8"/>
  <circle cx="298" cy="92" r="7" fill="#fff" stroke="#1d4ed8" stroke-width="1.8"/>
  <circle cx="298" cy="92" r="2.4" fill="#1d4ed8"/>
  <circle cx="224" cy="164" r="7" fill="#fff" stroke="#1d4ed8" stroke-width="1.8"/>
  <circle cx="224" cy="164" r="2.4" fill="#1d4ed8"/>
  <line x1="150" y1="92" x2="298" y2="92" stroke="#1d4ed8" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="298" y1="92" x2="224" y2="164" stroke="#1d4ed8" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="224" y1="164" x2="150" y2="92" stroke="#1d4ed8" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="150" y="80" text-anchor="middle" fill="#1d4ed8" font-size="11">A1</text>
  <text x="298" y="80" text-anchor="middle" fill="#1d4ed8" font-size="11">A2</text>
  <text x="224" y="182" text-anchor="middle" fill="#1d4ed8" font-size="11">A3</text>
  <!-- secondary B: two locators along the lower edge -->
  <rect x="112" y="200" width="224" height="12" fill="#e2e8f0" stroke="#334155" stroke-width="1.4"/>
  <polygon points="156,188 148,200 164,200" fill="#dc2626"/>
  <polygon points="292,188 284,200 300,200" fill="#dc2626"/>
  <circle cx="156" cy="188" r="3" fill="#dc2626"/>
  <circle cx="292" cy="188" r="3" fill="#dc2626"/>
  <text x="156" y="228" text-anchor="middle" fill="#dc2626" font-size="11">B1</text>
  <text x="292" y="228" text-anchor="middle" fill="#dc2626" font-size="11">B2</text>
  <!-- tertiary C: one locator on the left edge -->
  <rect x="94" y="56" width="12" height="138" fill="#e2e8f0" stroke="#334155" stroke-width="1.4"/>
  <polygon points="118,125 106,117 106,133" fill="#0f766e"/>
  <circle cx="118" cy="125" r="3" fill="#0f766e"/>
  <text x="86" y="129" text-anchor="end" fill="#0f766e" font-size="11">C1</text>
  <!-- DOF accounting -->
  <text x="352" y="86" fill="#1d4ed8" font-size="12">A: 3 pts</text>
  <text x="352" y="103" fill="#1d4ed8" font-size="12">locks T<tspan baseline-shift="sub" font-size="9">Z</tspan> R<tspan baseline-shift="sub" font-size="9">X</tspan> R<tspan baseline-shift="sub" font-size="9">Y</tspan></text>
  <text x="352" y="130" fill="#dc2626" font-size="12">B: 2 pts</text>
  <text x="352" y="147" fill="#dc2626" font-size="12">locks T<tspan baseline-shift="sub" font-size="9">Y</tspan> R<tspan baseline-shift="sub" font-size="9">Z</tspan></text>
  <text x="352" y="174" fill="#0f766e" font-size="12">C: 1 pt</text>
  <text x="352" y="191" fill="#0f766e" font-size="12">locks T<tspan baseline-shift="sub" font-size="9">X</tspan></text>
  <text x="230" y="258" text-anchor="middle" fill="#334155" font-size="12">6 contacts, 6 degrees of freedom removed &#8212; the part cannot move or rock.</text>
  <text x="230" y="277" text-anchor="middle" fill="#64748b" font-size="12">A 7th contact over-constrains it: the part rocks between fits.</text>
</svg>`;

// Fig 4 — datum precedence: A|B|C vs A|C|B on the same part
const figPrecedence = `<svg viewBox="0 0 460 292" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="dat4-dim" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Same part, same hole &#8212; precedence changes the number</text>
  <!-- ============ LEFT: A | B | C ============ -->
  <text x="118" y="44" text-anchor="middle" font-weight="600" fill="#1d4ed8">A | B | C</text>
  <text x="118" y="62" text-anchor="middle" fill="#64748b" font-size="11">B secondary &#8594; 2 contacts</text>
  <!-- simulators -->
  <rect x="36" y="76" width="12" height="144" fill="#e2e8f0" stroke="#334155" stroke-width="1.3"/>
  <rect x="36" y="216" width="176" height="11" fill="#e2e8f0" stroke="#334155" stroke-width="1.3"/>
  <text x="26" y="150" text-anchor="middle" fill="#334155" font-size="11">C</text>
  <text x="128" y="240" text-anchor="middle" fill="#334155" font-size="11">B</text>
  <!-- part: bottom face flush on B, left face out of square, single touch on C -->
  <polygon points="60,216 200,216 200,100 48,88" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <circle cx="95" cy="216" r="3.6" fill="#dc2626"/>
  <circle cx="172" cy="216" r="3.6" fill="#dc2626"/>
  <circle cx="48" cy="88" r="3.6" fill="#0f766e"/>
  <text x="66" y="80" fill="#0f766e" font-size="11">1 contact</text>
  <text x="134" y="207" text-anchor="middle" fill="#dc2626" font-size="11">2 contacts</text>
  <circle cx="140" cy="150" r="11" fill="#fff" stroke="#334155" stroke-width="1.6"/>
  <circle cx="140" cy="150" r="2" fill="#334155"/>
  <!-- dimension from the C plane to the hole -->
  <line x1="48" y1="186" x2="140" y2="186" stroke="#1d4ed8" stroke-width="1" marker-end="url(#dat4-dim)"/>
  <line x1="140" y1="161" x2="140" y2="196" stroke="#1d4ed8" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="92" y="181" text-anchor="middle" fill="#1d4ed8" font-size="12">X<tspan baseline-shift="sub" font-size="9">1</tspan></text>
  <!-- ============ RIGHT: A | C | B ============ -->
  <text x="342" y="44" text-anchor="middle" font-weight="600" fill="#1d4ed8">A | C | B</text>
  <text x="342" y="62" text-anchor="middle" fill="#64748b" font-size="11">C secondary &#8594; 2 contacts</text>
  <rect x="247" y="76" width="12" height="144" fill="#e2e8f0" stroke="#334155" stroke-width="1.3"/>
  <rect x="247" y="216" width="176" height="11" fill="#e2e8f0" stroke="#334155" stroke-width="1.3"/>
  <text x="237" y="150" text-anchor="middle" fill="#334155" font-size="11">C</text>
  <text x="339" y="240" text-anchor="middle" fill="#334155" font-size="11">B</text>
  <g transform="translate(198.8,0) rotate(5.36 200 216)">
    <polygon points="60,216 200,216 200,100 48,88" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
    <circle cx="140" cy="150" r="11" fill="#fff" stroke="#334155" stroke-width="1.6"/>
    <circle cx="140" cy="150" r="2" fill="#334155"/>
  </g>
  <circle cx="259.4" cy="102" r="3.6" fill="#0f766e"/>
  <circle cx="259.4" cy="190" r="3.6" fill="#0f766e"/>
  <circle cx="398.8" cy="216" r="3.6" fill="#dc2626"/>
  <text x="270" y="100" fill="#0f766e" font-size="11">2 contacts</text>
  <text x="386" y="207" text-anchor="end" fill="#dc2626" font-size="11">1 contact</text>
  <line x1="259.4" y1="186" x2="345.2" y2="186" stroke="#1d4ed8" stroke-width="1" marker-end="url(#dat4-dim)"/>
  <line x1="345.2" y1="156" x2="345.2" y2="196" stroke="#1d4ed8" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="300" y="181" text-anchor="middle" fill="#1d4ed8" font-size="12">X<tspan baseline-shift="sub" font-size="9">2</tspan></text>
  <text x="230" y="264" text-anchor="middle" fill="#334155" font-size="12">B and C are not perfectly square, so the part clocks between setups.</text>
  <text x="230" y="283" text-anchor="middle" fill="#1d4ed8" font-size="12" font-weight="600">X<tspan baseline-shift="sub" font-size="9">2</tspan> &#8800; X<tspan baseline-shift="sub" font-size="9">1</tspan>: the swing is (out-of-squareness angle) &times; (distance to the feature).</text>
</svg>`;

// Fig 5 — datum feature of size: gage pin in a hole, and the resulting shift
const figShift = `<svg viewBox="0 0 460 262" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="dat5-dim" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Datum feature of size at MMB &#8594; datum shift</text>
  <!-- part material -->
  <rect x="42" y="52" width="186" height="186" fill="#e2e8f0" stroke="#334155" stroke-width="1.4"/>
  <!-- produced hole -->
  <circle cx="135" cy="145" r="66" fill="#fff" stroke="#334155" stroke-width="1.8"/>
  <!-- fixed gage pin at MMB -->
  <circle cx="135" cy="145" r="54" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.8"/>
  <!-- locus of possible hole axes -->
  <circle cx="135" cy="145" r="12" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4 3"/>
  <circle cx="135" cy="145" r="2.2" fill="#dc2626"/>
  <!-- radial clearance dimension -->
  <line x1="189" y1="145" x2="201" y2="145" stroke="#1d4ed8" stroke-width="1.4"/>
  <line x1="189" y1="139" x2="189" y2="151" stroke="#1d4ed8" stroke-width="1"/>
  <line x1="201" y1="139" x2="201" y2="151" stroke="#1d4ed8" stroke-width="1"/>
  <line x1="195" y1="145" x2="195" y2="102" stroke="#1d4ed8" stroke-width="1" marker-end="url(#dat5-dim)"/>
  <text x="196" y="94" text-anchor="middle" fill="#1d4ed8" font-size="11">0.20 radial</text>
  <text x="135" y="230" text-anchor="middle" fill="#dc2626" font-size="11">&#8960;0.40 shift zone</text>
  <text x="80" y="70" fill="#334155" font-size="11">part</text>
  <text x="135" y="97" text-anchor="middle" fill="#1d4ed8" font-size="11">gage pin</text>
  <!-- annotation column -->
  <text x="248" y="72" fill="#334155" font-size="12">datum feature B: &#8960;20.0 &#8211; 20.5 hole</text>
  <text x="248" y="96" fill="#334155" font-size="12">referenced at MMB (&#8960;20.0)</text>
  <text x="248" y="120" fill="#334155" font-size="12">simulator: a fixed &#8960;20.0 pin</text>
  <text x="248" y="144" fill="#334155" font-size="12">produced size: &#8960;20.4</text>
  <line x1="248" y1="158" x2="440" y2="158" stroke="#64748b" stroke-width="1"/>
  <text x="248" y="180" fill="#1d4ed8" font-size="12" font-weight="600">shift = 20.4 &#8722; 20.0 = 0.40</text>
  <text x="248" y="202" fill="#1d4ed8" font-size="12">the part floats on the pin;</text>
  <text x="248" y="220" fill="#1d4ed8" font-size="12">the tolerance zone does not grow.</text>
  <text x="248" y="244" fill="#dc2626" font-size="12">At RMB the pin expands &#8594; shift = 0.</text>
</svg>`;

// Fig 6 — datum targets on an as-cast surface
const figTargets = `<svg viewBox="0 0 460 268" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Datum targets: three pads replace a surface you cannot use whole</text>
  <!-- casting with a rough, warped bottom face -->
  <path d="M 78 66 L 382 66 L 382 122 C 372 130, 366 118, 350 124 C 330 132, 318 118, 296 128 C 268 141, 252 120, 226 132 C 198 145, 178 118, 152 128 C 126 138, 110 120, 92 128 C 86 131, 82 130, 78 126 Z" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
  <text x="230" y="94" text-anchor="middle" fill="#334155" font-size="12">as-cast surface: scale, draft, 2 mm of warp</text>
  <!-- three fixture pads -->
  <rect x="119" y="132" width="26" height="12" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
  <rect x="217" y="136" width="26" height="12" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
  <rect x="337" y="128" width="26" height="12" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
  <!-- leaders to the target symbols -->
  <line x1="132" y1="144" x2="132" y2="182" stroke="#334155" stroke-width="1"/>
  <line x1="230" y1="148" x2="230" y2="182" stroke="#334155" stroke-width="1"/>
  <line x1="350" y1="140" x2="350" y2="182" stroke="#334155" stroke-width="1"/>
  <!-- datum target symbols: circle split by a horizontal line -->
  <circle cx="132" cy="200" r="18" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <line x1="114" y1="200" x2="150" y2="200" stroke="#334155" stroke-width="1.5"/>
  <text x="132" y="196" text-anchor="middle" font-size="11" fill="#334155">&#8960;12</text>
  <text x="132" y="214" text-anchor="middle" font-size="11" font-weight="600" fill="#334155">A1</text>
  <circle cx="230" cy="200" r="18" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <line x1="212" y1="200" x2="248" y2="200" stroke="#334155" stroke-width="1.5"/>
  <text x="230" y="196" text-anchor="middle" font-size="11" fill="#334155">&#8960;12</text>
  <text x="230" y="214" text-anchor="middle" font-size="11" font-weight="600" fill="#334155">A2</text>
  <circle cx="350" cy="200" r="18" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <line x1="332" y1="200" x2="368" y2="200" stroke="#334155" stroke-width="1.5"/>
  <text x="350" y="196" text-anchor="middle" font-size="11" fill="#334155">&#8960;12</text>
  <text x="350" y="214" text-anchor="middle" font-size="11" font-weight="600" fill="#334155">A3</text>
  <text x="230" y="244" text-anchor="middle" fill="#334155" font-size="12">Upper half = target size, lower half = datum letter and target number.</text>
  <text x="230" y="262" text-anchor="middle" fill="#1d4ed8" font-size="12">Basic dimensions fix the pads, so every gage touches the same spots.</text>
</svg>`;

// Fig 7 — drawing datums vs. the mating scheme (question figure)
const figMismatch = `<svg viewBox="0 0 460 276" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">The print and the fixture, side by side</text>
  <text x="112" y="44" text-anchor="middle" font-weight="600" fill="#1d4ed8">as drawn (datums B, C)</text>
  <!-- part with two holes dimensioned from the edges -->
  <rect x="42" y="60" width="160" height="112" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <circle cx="80" cy="112" r="10" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <circle cx="168" cy="112" r="10" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <line x1="42" y1="196" x2="80" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="42" y1="190" x2="42" y2="202" stroke="#64748b" stroke-width="1"/>
  <line x1="80" y1="190" x2="80" y2="202" stroke="#64748b" stroke-width="1"/>
  <text x="61" y="212" text-anchor="middle" fill="#64748b" font-size="11">30 &#177;0.15</text>
  <line x1="42" y1="232" x2="168" y2="232" stroke="#64748b" stroke-width="1"/>
  <line x1="42" y1="226" x2="42" y2="238" stroke="#64748b" stroke-width="1"/>
  <line x1="168" y1="226" x2="168" y2="238" stroke="#64748b" stroke-width="1"/>
  <text x="105" y="248" text-anchor="middle" fill="#64748b" font-size="11">118 &#177;0.15</text>
  <line x1="34" y1="60" x2="34" y2="172" stroke="#334155" stroke-width="2.5"/>
  <polygon points="26,110 26,126 34,118" fill="#334155"/>
  <rect x="6" y="107" width="20" height="22" fill="#fff" stroke="#334155" stroke-width="1.4"/>
  <text x="16" y="123" text-anchor="middle" font-size="11" font-weight="600" fill="#334155">C</text>
  <line x1="42" y1="178" x2="202" y2="178" stroke="#334155" stroke-width="2.5"/>
  <polygon points="114,186 130,186 122,178" fill="#334155"/>
  <rect x="110" y="186" width="22" height="20" fill="#fff" stroke="#334155" stroke-width="1.4"/>
  <text x="121" y="201" text-anchor="middle" font-size="11" font-weight="600" fill="#334155">B</text>
  <!-- ===== right: the fixture ===== -->
  <text x="344" y="44" text-anchor="middle" font-weight="600" fill="#dc2626">as assembled (two dowels)</text>
  <g transform="rotate(-4 296 150)">
    <rect x="258" y="86" width="160" height="64" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
    <circle cx="296" cy="132" r="10" fill="#fff" stroke="#334155" stroke-width="1.5"/>
    <circle cx="384" cy="132" r="10" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  </g>
  <rect x="248" y="182" width="192" height="26" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="290" y="126" width="12" height="56" fill="#94a3b8" stroke="#334155" stroke-width="1.4"/>
  <rect x="378" y="126" width="12" height="56" fill="#94a3b8" stroke="#334155" stroke-width="1.4"/>
  <text x="344" y="224" text-anchor="middle" fill="#334155" font-size="11">dowels at 88.0 basic, &#8960;9.98</text>
  <line x1="372" y1="112" x2="386" y2="126" stroke="#dc2626" stroke-width="2.5"/>
  <line x1="386" y1="112" x2="372" y2="126" stroke="#dc2626" stroke-width="2.5"/>
  <text x="404" y="108" text-anchor="middle" fill="#dc2626" font-size="11" font-weight="600">jam</text>
  <text x="230" y="264" text-anchor="middle" fill="#334155" font-size="12">Left: how the part is dimensioned. Right: what it has to drop onto.</text>
</svg>`;

// Fig 8 — datums that match the mating interface (question figure)
const figSchemeChoice = `<svg viewBox="0 0 460 272" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="dat8-ld" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">How the bracket actually mounts (section view)</text>
  <!-- housing -->
  <rect x="300" y="52" width="60" height="176" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
  <line x1="360" y1="60" x2="372" y2="48" stroke="#64748b" stroke-width="1"/>
  <line x1="360" y1="88" x2="372" y2="76" stroke="#64748b" stroke-width="1"/>
  <line x1="360" y1="116" x2="372" y2="104" stroke="#64748b" stroke-width="1"/>
  <line x1="360" y1="144" x2="372" y2="132" stroke="#64748b" stroke-width="1"/>
  <line x1="360" y1="172" x2="372" y2="160" stroke="#64748b" stroke-width="1"/>
  <line x1="360" y1="200" x2="372" y2="188" stroke="#64748b" stroke-width="1"/>
  <line x1="360" y1="228" x2="372" y2="216" stroke="#64748b" stroke-width="1"/>
  <text x="330" y="244" text-anchor="middle" fill="#334155" font-size="11">housing</text>
  <!-- housing pilot bore (open pocket) -->
  <rect x="300" y="112" width="30" height="56" fill="#fff" stroke="#334155" stroke-width="1.4"/>
  <!-- bracket: flange plus pilot boss entering the bore -->
  <rect x="262" y="62" width="38" height="156" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <rect x="300" y="118" width="26" height="44" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <rect x="150" y="112" width="112" height="56" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <text x="200" y="146" text-anchor="middle" fill="#334155" font-size="12">bracket</text>
  <!-- callouts -->
  <line x1="240" y1="76" x2="286" y2="76" stroke="#dc2626" stroke-width="1.6" marker-end="url(#dat8-ld)"/>
  <text x="236" y="80" text-anchor="end" fill="#dc2626" font-size="11">flange face</text>
  <line x1="352" y1="186" x2="318" y2="164" stroke="#dc2626" stroke-width="1.6" marker-end="url(#dat8-ld)"/>
  <text x="356" y="192" fill="#dc2626" font-size="11">pilot boss</text>
  <!-- outer edges nobody touches -->
  <line x1="150" y1="98" x2="150" y2="182" stroke="#64748b" stroke-width="2" stroke-dasharray="5 4"/>
  <text x="144" y="208" text-anchor="end" fill="#64748b" font-size="11">outer edge</text>
  <text x="230" y="262" text-anchor="middle" fill="#334155" font-size="12">Section through the bracket and housing at the mounting interface.</text>
</svg>`;

// Fig 7 — datum axis from a cylindrical datum feature: envelope vs least squares
const figUAME = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Out-of-round shaft: two candidate axes</text>
  <circle cx="156" cy="132" r="64" fill="none" stroke="#1d4ed8" stroke-width="1.8" stroke-dasharray="7 4"/>
  <path d="M 150 74 A 58 58 0 1 0 150 190 C 198 184 220 162 220 132 C 220 102 198 80 150 74 Z" fill="#e2e8f0" stroke="#334155" stroke-width="1.8"/>
  <line x1="146" y1="132" x2="166" y2="132" stroke="#1d4ed8" stroke-width="1.6"/>
  <line x1="156" y1="122" x2="156" y2="142" stroke="#1d4ed8" stroke-width="1.6"/>
  <line x1="140" y1="132" x2="160" y2="132" stroke="#dc2626" stroke-width="1.6"/>
  <line x1="150" y1="122" x2="150" y2="142" stroke="#dc2626" stroke-width="1.6"/>
  <text x="230" y="72" fill="#1d4ed8" font-size="12">smallest circumscribed cylinder</text>
  <text x="230" y="90" fill="#1d4ed8" font-size="12">&#8212; the mating envelope, and</text>
  <text x="230" y="108" fill="#1d4ed8" font-size="12">the datum axis for a shaft</text>
  <text x="230" y="144" fill="#dc2626" font-size="12">least-squares centre of the</text>
  <text x="230" y="162" fill="#dc2626" font-size="12">same probed points</text>
  <text x="230" y="196" fill="#334155" font-size="12">The two centres do not coincide</text>
  <text x="230" y="214" fill="#334155" font-size="12">on any real surface.</text>
  <text x="230" y="240" text-anchor="middle" fill="#334155" font-size="12">A ring gage or collet finds the envelope; software defaults find the mean.</text>
</svg>`;

const content: TopicContent = {
  lesson: {
    title: "Datums & Datum Reference Frames",
    intro: `<p>Every geometric tolerance that says "relative to something" needs that something defined without ambiguity. That job belongs to <strong>datums</strong>. Get them right and a print is a contract the machine shop, the inspector and the assembly line all read the same way. Get them wrong and you get the classic industrial failure: a bin of parts that pass inspection and will not go together.</p>
<p>What follows covers the three separate things people call "datum A", how a 3-2-1 scheme removes six degrees of freedom, why <em>A|B|C</em> and <em>A|C|B</em> give different numbers on the same part, and what datum shift is and is not. Then the decision that makes the rest of it worth anything: choosing datums that match how the part is actually located in the assembly.</p>`,
    sections: [
      {
        heading: "Datum feature, datum, datum feature simulator",
        html: `<p>Three different things share the word "datum" in casual shop talk. Keeping them apart is the foundation for everything else here.</p>
<ul>
<li><strong>Datum feature.</strong> The <em>real</em> surface, hole, or pin on the part. It is imperfect: wavy, tilted, tapered, scratched. This is what the datum feature symbol (the boxed letter with the filled triangle) points at.</li>
<li><strong>Datum.</strong> The <em>theoretically exact</em> plane, axis, or point derived from that feature. It has no form error, ever. A datum plane is perfectly flat; a datum axis is perfectly straight.</li>
<li><strong>Datum feature simulator.</strong> The physical or software stand-in used to establish the datum: the granite plate, the gage pin, the expanding mandrel, the chuck, the CMM's fitted plane. It is what actually touches the part.</li>
</ul>
<figure class="fig">${figSimulator}<figcaption>The part rests on the simulator; the simulator contacts the datum feature at its three highest points; the datum is the perfect plane those contacts define.</figcaption></figure>
<p>Two consequences fall straight out of this:</p>
<ul>
<li>A datum can never have form error. "Datum A is flat within 0.02" is sloppy language; the <em>datum feature</em> is flat within 0.02. And the four form controls (flatness, straightness, circularity, cylindricity) never take a datum reference at all, because they control a feature against itself.</li>
<li>The part contacts the simulator at <strong>high points</strong>, not at an average surface. A hard gage and a least-squares CMM fit therefore disagree on the same part, and the gap is about half the form error.</li>
</ul>
<div class="callout"><strong>Say it precisely:</strong> "the datum feature is the machined face; the datum is the plane established by the surface plate."</div>`,
      },
      {
        heading: "Six degrees of freedom and the datum reference frame",
        html: `<p>A rigid body free in space has <strong>six degrees of freedom (DOF)</strong>: three translations (T<sub>X</sub>, T<sub>Y</sub>, T<sub>Z</sub>) and three rotations (R<sub>X</sub>, R<sub>Y</sub>, R<sub>Z</sub>). Remove all six or the measurement does not repeat. Any DOF left free is a direction the part can move in while you are measuring it, and the number you report moves with it.</p>
<p>A <strong>datum reference frame (DRF)</strong> is three mutually perpendicular planes that do exactly that. The feature control frame lists the datums in order, primary then secondary then tertiary, and that order is an instruction for how to immobilize the part.</p>
<figure class="fig">${figDRF}<figcaption>The DRF is a corner of three perpendicular planes. The part is pushed into that corner in a defined order, and the coordinate system for every measurement hangs off it.</figcaption></figure>
<table>
<thead><tr><th>Datum feature</th><th>Contacts</th><th>DOF removed</th></tr></thead>
<tbody>
<tr><td>Primary plane (A)</td><td>3 points</td><td>T<sub>Z</sub>, R<sub>X</sub>, R<sub>Y</sub> (3)</td></tr>
<tr><td>Secondary plane (B)</td><td>2 points</td><td>T<sub>Y</sub>, R<sub>Z</sub> (2)</td></tr>
<tr><td>Tertiary plane (C)</td><td>1 point</td><td>T<sub>X</sub> (1)</td></tr>
<tr><td>Long cylinder, primary</td><td>full contact</td><td>2 translations + 2 rotations (4)</td></tr>
<tr><td>Short pin / hole, secondary</td><td>full contact</td><td>2 translations (2)</td></tr>
</tbody>
</table>
<p>The cylindrical rows are the ones people forget. A long primary bore removes four DOF at once, leaving only rotation about its own axis and sliding along it. The common production scheme <strong>plane &#8211; round pin &#8211; diamond pin</strong> is 3 + 2 + 1 in different hardware: the face kills 3, the round pin kills the two translations, and the diamond pin kills the remaining clocking rotation without fighting the round pin for the translations.</p>`,
      },
      {
        heading: "The 3-2-1 locating scheme",
        html: `<p>3-2-1 is the canonical way to immobilize a prismatic part. Work the count out loud, contact by contact:</p>
<ol>
<li><strong>Primary, 3 points.</strong> Set the part on the primary datum plane. It can no longer sink into the plane (T<sub>Z</sub>) and it can no longer tip either way (R<sub>X</sub>, R<sub>Y</sub>). <strong>3 DOF gone, 3 remain.</strong> Three points is the minimum that defines a plane and the maximum that cannot rock. A fourth support makes the part rock between fits.</li>
<li><strong>Secondary, 2 points.</strong> Slide the part against the secondary plane. It can no longer translate toward that plane (T<sub>Y</sub>) and, because two contacts are separated along the surface, it can no longer spin in the primary plane (R<sub>Z</sub>). <strong>2 more gone, 1 remains.</strong></li>
<li><strong>Tertiary, 1 point.</strong> Push it against the tertiary plane. The last translation (T<sub>X</sub>) disappears. <strong>0 DOF remain.</strong></li>
</ol>
<figure class="fig">${fig321}<figcaption>3 + 2 + 1 = 6. Every contact is doing a specific job; the count is the answer to "is this part fully constrained?"</figcaption></figure>
<p>Design rules that follow directly:</p>
<ul>
<li>Spread the three primary contacts as widely as the part allows and keep the centre of gravity inside their triangle, or the part tips off the fixture.</li>
<li>Put the two secondary contacts on the <strong>longest</strong> available surface. They set the clocking angle, and their spacing is the lever arm that divides the contact error. Two pads 25 mm apart amplify a 0.01 error into 0.4 mrad; the same error on 200 mm pads gives 0.05 mrad.</li>
<li>Never add a seventh contact. Over-constraint does not locate the part harder. It makes the location bimodal, and the part rocks between two valid rest positions.</li>
</ul>
<div class="callout warn"><strong>Say three, not one.</strong> People often say the primary plane removes a single DOF ("it stops the part going down"). It removes three: one translation and two rotations.</div>`,
      },
      {
        heading: "Precedence: why A|B|C and A|C|B are different parts",
        html: `<p>The datum order in the feature control frame is not alphabetical decoration. It is the sequence in which the part is brought into contact, and higher precedence always wins: the secondary datum only takes up what the primary left free, and the tertiary takes up what is left after that.</p>
<figure class="fig">${figPrecedence}<figcaption>The same part in both setups. As secondary, B gets two contacts and controls the clocking; demoted to tertiary it gets one, and C takes over. The part sits at a different angle, so every measured coordinate changes.</figcaption></figure>
<p>Real surfaces are never perfectly square to each other. Suppose B and C are out of square by a small angle &alpha;. Whichever one is <em>secondary</em> gets two contacts and sets the rotation of the whole coordinate system; the other one merely provides an origin. Swap them and the part clocks by &alpha;, so a feature a distance L from the contact region swings by</p>
<p class="eq">&Delta; = L &middot; &alpha;</p>
<p>with &alpha; in radians. A 2 mrad squareness error (0.10 mm over a 50 mm face) moves a hole 120 mm away by 0.24 mm, enough to fail a &#8960;0.2 position callout that would have passed in the other order. Same part, same CMM, different answer.</p>
<div class="callout"><strong>Practical rule:</strong> the primary datum should be the surface that carries the load or seats first in the assembly; the secondary should be the longest surface that controls orientation; the tertiary just stops the part sliding. If you cannot justify the order from the assembly, you have not chosen it. You have defaulted it.</div>`,
      },
      {
        heading: "Datum features of size and datum shift",
        html: `<p>A datum feature can be a <em>feature of size</em>: a hole, a pin, a slot, a boss. Then the datum is not a plane but an <strong>axis</strong> or <strong>centre plane</strong>, derived from the actual mating envelope, the largest pin that fits the hole, the smallest ring that fits over the shaft. Which envelope depends on precedence: the <em>unrelated</em> AME when the feature is primary and free to find its own orientation, and the <em>related</em> AME, the same envelope held square to (and located from) the higher-precedence datums, when the feature is secondary or tertiary. The B in the worked example below is a secondary datum feature, so its simulator is a pin held perpendicular to A, not one free to tilt.</p>
<figure class="fig">${figUAME}<figcaption>For an external feature of size the mating envelope is the smallest perfect cylinder that contains the surface; for an internal one it is the largest that fits inside. A least-squares fit of the same points lands somewhere else, which is why a ring gage and a CMM can disagree about where the datum axis is.</figcaption></figure>
<p>How the simulator behaves depends on the material-boundary modifier:</p>
<ul>
<li><strong>RMB</strong> (regardless of material boundary, no modifier): the simulator must <em>adjust</em> to the feature: an expanding mandrel, a collet, a chuck. It always closes on the actual surface, so there is <strong>no shift</strong>, whatever size the feature came out.</li>
<li><strong>MMB</strong> (the &#9410; modifier applied to the datum reference): the simulator is a <strong>fixed-size</strong> gage element at the maximum material boundary. If the feature is produced away from that boundary, the part is loose on the simulator, and that looseness is <strong>datum shift</strong>.</li>
</ul>
<figure class="fig">${figShift}<figcaption>A &#8960;20.4 hole on a fixed &#8960;20.0 pin: the part can float 0.20 mm in any radial direction. The locus of possible datum axis positions is a &#8960;0.40 zone.</figcaption></figure>
<p class="eq">datum shift = |produced mating size &#8722; MMB size| &nbsp;&nbsp;(diametral); radial float = shift / 2</p>
<p>Now the distinction that matters most. <strong>Bonus tolerance</strong> and <strong>datum shift</strong> both come from a feature departing from MMC, but they are not the same thing:</p>
<table>
<thead><tr><th></th><th>Bonus tolerance</th><th>Datum shift</th></tr></thead>
<tbody>
<tr><td>Comes from</td><td>the toleranced (considered) feature</td><td>the referenced datum feature</td></tr>
<tr><td>Triggered by</td><td>&#9410; in the tolerance compartment</td><td>&#9410; after the datum letter</td></tr>
<tr><td>Effect</td><td>the tolerance zone gets bigger</td><td>the zones move as a rigid set</td></tr>
<tr><td>Per feature?</td><td>yes, each feature earns its own</td><td>no, one displacement for the whole pattern</td></tr>
</tbody>
</table>
<p>That last row is the one people miss. Bonus is extra <em>size</em> of the tolerance zone and each hole gets its own. Shift is a rigid-body <em>displacement</em> of the whole pattern of zones relative to the DRF: you may use it once, and it has to work for every feature in the pattern simultaneously. Saying "I have 0.4 of shift so every hole gets 0.4 more" is wrong twice over.</p>`,
      },
      {
        heading: "Datum targets, functional selection, and inspection reality",
        html: `<p><strong>Datum targets</strong> exist for surfaces you cannot use whole: sand-cast and die-cast faces, weldments, forgings, sheet metal, large warped plates, anything with scale or draft. Instead of "the whole bottom face is A", the print specifies points, lines, or areas that the fixture must contact.</p>
<figure class="fig">${figTargets}<figcaption>Datum target symbol: a circle split horizontally, target size on top, datum letter and target number below. Basic dimensions locate each target, so every fixture in the world touches the same three spots.</figcaption></figure>
<ul>
<li><strong>Target points</strong> (drawn as an X) are spherical-tipped pins; the classic 3-2-1 becomes A1&#8211;A3, B1&#8211;B2, C1.</li>
<li><strong>Target lines and areas</strong> mean a line of contact or a &#8960;12 pad, used when a point would dent a soft casting or a rough surface would give a random contact.</li>
<li>Targets make the fixture and the CMM agree, because both are told exactly where to touch. Without them, two inspectors get two answers from the same warped face.</li>
</ul>
<p><strong>Choosing datums that match function.</strong> The rule is short: <em>datums should replicate how the part is located in the assembly, not what is convenient to measure.</em> If a bracket seats on a machined face and is centred by a pilot boss, then A is that face and B is that boss, even if the outside edges would have been easier to touch with calipers. The classic failure is the reverse: the drawing calls the two machined outer edges as B and C while the assembly locates on two dowel holes. Every hole is toleranced to the edges, nothing controls hole-to-hole, and the parts pass inspection and jam on the fixture.</p>
<p><strong>Inspection reality.</strong> A hard fixture realizes the DRF physically: the part is wrung down onto three pads, pushed against two, then one. A CMM realizes it in software: it probes a set of points on each datum feature and fits planes and axes. Those are not automatically the same thing.</p>
<ul>
<li>The default CMM fit is <strong>least squares</strong>, which passes through the middle of the surface. A surface plate contacts the <strong>high points</strong>. On a convex face the two differ by roughly half the form error, and the CMM will pass parts the gage rejects.</li>
<li>Ask for a constrained fit (tangent plane, outside the material) when correlation with a functional gage matters.</li>
<li>Probe enough points to represent the surface. Three points on a 300 mm face is a plane through noise, not a datum.</li>
<li>If the primary datum feature has form error &delta; over a contact span L, the part can rock by roughly &delta;/L radians and every orientation tolerance referenced to A inherits that uncertainty. Tightening the perpendicularity callout does nothing; tighten the flatness of A instead.</li>
</ul>`,
      },
    ],
    equations: [
      { name: "Degrees of freedom", formula: "6 = 3 translations + 3 rotations", note: "A rigid body in space. Any DOF left unconstrained by the DRF is a direction in which the measurement can drift." },
      { name: "3-2-1 DOF accounting", formula: "3 (primary) + 2 (secondary) + 1 (tertiary) = 6", note: "Rule, not formula: the primary plane removes T<sub>Z</sub>, R<sub>X</sub>, R<sub>Y</sub>; the secondary removes T<sub>Y</sub>, R<sub>Z</sub>; the tertiary removes T<sub>X</sub>." },
      { name: "Cylindrical datum features", formula: "long bore primary = 4 DOF; short pin secondary = 2 DOF", note: "Rule: a long primary cylinder removes 2 translations + 2 rotations, leaving spin about and slide along its own axis. Plane + round pin + diamond pin = 3 + 2 + 1." },
      { name: "Datum shift", formula: "shift = |produced mating size &#8722; MMB size|", note: "Diametral value for a cylindrical datum feature referenced at MMB; radial float is half of it. At RMB the simulator adjusts and shift = 0." },
      { name: "Bonus tolerance (for contrast)", formula: "bonus = |produced mating size &#8722; MMC| of the toleranced feature", note: "Adds to the size of that one feature's tolerance zone. Datum shift instead translates or rotates the whole pattern of zones; the two are never added into one bigger zone." },
      { name: "Precedence swing", formula: "&Delta; = L &middot; &alpha;", note: "&alpha; is the out-of-squareness between two datum features (radians) and L the distance from the contact region to the feature. This is how much a reading moves when you swap secondary and tertiary." },
      { name: "Rock from primary form error", formula: "&alpha; &asymp; &delta; / L<sub>span</sub>", note: "&delta; is the form error of the primary datum feature and L<sub>span</sub> the distance between contact points. Multiply by the height of a feature to get the orientation error it injects." },
      { name: "Locator lever arm", formula: "&alpha; = e / s", note: "e is the contact or form error at a secondary datum and s the spacing between its two contacts. Short secondary datum features amplify small errors into large angular errors." },
    ],
    interviewTips: [
      "Use the three words precisely: datum feature (the real surface), datum (the perfect plane or axis), datum feature simulator (the plate, pin or mandrel). Conflating them is the fastest way to look untrained.",
      "When any datum question appears, count degrees of freedom out loud: 3 for the primary, 2 for the secondary, 1 for the tertiary, six total. Name which translation and which rotations each one kills.",
      "Before defending a datum scheme, ask how the part is located in its assembly. Datums that do not match the mating interface are the root cause of 'passes inspection, fails assembly'.",
      "Have the one-sentence distinction ready: bonus tolerance enlarges one feature's zone, datum shift moves the whole pattern of zones and only exists when the datum is referenced at MMB.",
      "If the primary datum feature is a casting, weldment, or a large sheet, propose datum targets before anyone asks. Say why: repeatability between the fixture and the CMM.",
      "Know that a CMM builds the DRF from a least-squares fit while a gage sits on high points. If a part passes on the CMM and fails the gage, that difference is the first place to look.",
    ],
  },

  questions: [
    {
      id: "datums-q01",
      type: "mc",
      difficulty: 1,
      prompt: `<p>An inspection report says <em>"datum A is flat within 0.02 mm"</em>. On this print A is the seating face, contacted over a 200 mm span, and the tightest callout referencing it is perpendicularity 0.05 mm on a boss 60 mm tall. How should you read that line, and what does it cost you?</p>`,
      choices: [
        "The datum plane itself carries 0.02 of form error, so the perpendicularity zone opens to 0.07 mm",
        "The 0.02 mm is the surface plate's own error, so it is gage noise and cancels out of the part result",
        "It means datum feature A has 0.02 of form error, which alone can eat 0.006 mm of the 0.05 budget",
        "Flatness may not be applied to a datum feature, so the report measures something the print never called",
      ],
      answer: 2,
      explanation: `<p>First fix the language, because the arithmetic depends on it. The <strong>datum feature</strong> is the real machined face and it does have form error, 0.02 mm of it. The <strong>datum</strong> is the theoretically exact plane through the three high points where that face contacts the simulator, and a theoretical plane has no flatness error by definition. So the report means "datum feature A is flat within 0.02".</p>
<p>Now the consequence. Re-seating on different high points tilts the part by roughly the form error divided by the contact span:</p>
<p class="eq">&alpha; &asymp; &delta; / L = 0.02 / 200 = 1.0 &times; 10<sup>&minus;4</sup> rad</p>
<p class="eq">&Delta; = &alpha; &middot; h = 1.0 &times; 10<sup>&minus;4</sup> &times; 60 = <strong>0.006 mm</strong></p>
<p>That is 12% of the 0.05 mm perpendicularity budget consumed before the boss is even considered. Comfortable here, but the same face used with a 300 mm boss and a 0.02 mm callout would be hopeless. That ratio, feature height over datum contact span, is the number to reach for whenever someone quotes a datum feature's flatness.</p>
<p>The distractors are the three standard misreadings: the datum is exact so nothing "opens the zone"; the plate's own flatness is a separate gage-error question, not this number; and flatness is perfectly legal on a datum feature, since it is a form control and takes no datum reference of its own.</p>`,
    },
    {
      id: "datums-q02",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A rectangular block is set down on a surface plate that simulates datum A. Nothing else touches it &#8212; no side rails, no clamps. How many of its six degrees of freedom are still unconstrained?</p>`,
      answer: 3,
      unit: "degrees of freedom",
      tolerance: 0.01,
      explanation: `<p>Start from six: three translations and three rotations.</p>
<p>Resting on the plate makes three contacts, and those three remove <strong>T<sub>Z</sub></strong>, since the block cannot sink into the plate, plus <strong>R<sub>X</sub></strong> and <strong>R<sub>Y</sub></strong>, since it cannot tip either way.</p>
<p class="eq">6 &#8722; 3 = <strong>3 remaining</strong>: T<sub>X</sub>, T<sub>Y</sub>, R<sub>Z</sub></p>
<p>The block still slides anywhere on the plate and spins about the vertical axis. You can measure a height from A, but any X or Y coordinate is meaningless until the secondary and tertiary datums are engaged.</p>`,
    },
    {
      id: "datums-q03",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A fixture seats a casting on three primary pads, then brings it against secondary datum B using a <em>single</em> contact pad instead of two. Position readings on a hole 150 mm from B scatter by about 0.3 mm from loading to loading, with no repeatable pattern. What is the mechanism, and what fixes it?</p>`,
      choices: [
        "The single pad dents the soft casting, so contact moves each time; fit a hardened spherical locator",
        "One contact cannot fix the clocking, so the part swings about it; add a second B pad, widely spaced",
        "The single pad stands proud of the A pads and lifts the casting off its primary seating; shim it down",
        "One contact cannot stop translation toward B, so the part drifts off; add a clamp pushing it onto the pad",
      ],
      answer: 1,
      explanation: `<p>Count what the hardware actually removes. Three primary pads take T<sub>Z</sub>, R<sub>X</sub> and R<sub>Y</sub>. A single secondary contact takes <em>one</em> more: translation toward B. It cannot take R<sub>Z</sub>, because one point is a pivot, not an angle. The casting is free to swing flat on the primary pads until friction or a clamp happens to stop it, and where that is depends on how the operator loaded it.</p>
<p>Check the scale against the symptom:</p>
<p class="eq">&alpha; = &Delta; / L = 0.3 / 150 = 2.0 &times; 10<sup>&minus;3</sup> rad</p>
<p>2 mrad is 0.12 mm across a 60 mm pad face, a swing nobody would notice at the fixture, producing 0.3 mm of scatter out at the hole. The fix is a second B contact, spaced as widely along that surface as the part allows, because the spacing is the lever arm that divides any contact error into an angle.</p>
<p>The other options are real fixture failures aimed at the wrong symptom. Denting and a proud pad both bias the result or move it in a repeatable way once the pad settles; neither produces load-to-load scatter that grows with distance from the datum corner. And a clamp supplies force, not location. Clamping harder against one pad still leaves the part free to rotate about it.</p>`,
    },
    {
      id: "datums-q04",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A fixture seats a casting on three pads and slides it against a two-pad rail. The single tertiary locating pin has not been swung into place yet. How many degrees of freedom is the casting still free to use?</p>`,
      answer: 1,
      unit: "degrees of freedom",
      tolerance: 0.01,
      explanation: `<p>Three pads = primary datum plane = 3 DOF removed, one translation and two rotations. The two-pad rail = secondary datum plane = 2 more, one translation and the clocking rotation.</p>
<p class="eq">6 &#8722; 3 &#8722; 2 = <strong>1 remaining</strong></p>
<p>The survivor is a single translation: the casting can still slide along the rail. That is what the tertiary pin is there to kill, and it is why the tertiary locator only ever needs one point of contact. Specify two tertiary contacts and you have over-constrained the part, which will then rock between two rest positions.</p>`,
    },
    {
      id: "datums-q05",
      type: "mc",
      difficulty: 1,
      prompt: `<p>You are building an inspection fixture. Datum feature B is a &#8960;20.0&#8211;20.5 hole, referenced in the feature control frame with <em>no</em> material boundary modifier (RMB). Which locator honours the drawing?</p>`,
      choices: [
        "A fixed &#8960;20.0 pin ground to the hole's MMC size",
        "A fixed &#8960;20.5 pin ground to the hole's LMC size",
        "An expanding mandrel that grows until it fits the hole",
        "A loose slip-fit bushing dropped into the hole by hand",
      ],
      answer: 2,
      explanation: `<p>RMB means the simulator must contact the actual surface of the datum feature <em>regardless</em> of the size it came out at. That takes an adjustable simulator: an expanding mandrel, a collet, a chuck, or on a CMM the fitted mating envelope of the probed points.</p>
<p>A fixed pin leaves clearance whenever the hole is produced above pin size, and the part floats in that clearance. Floating is legitimate only where the drawing says MMB, the &#9410; modifier after the datum letter. Using a fixed pin for an RMB datum makes the gage more permissive than the print, so it passes parts the design does not allow.</p>`,
    },
    {
      id: "datums-q06",
      type: "mc",
      difficulty: 1,
      prompt: `<p>Two inspectors measure the same part in the same fixture and their hole-position results differ by 0.15 mm. Watching them work, you notice the part visibly rocks when it is set down on the primary datum pads. What do you investigate first?</p>`,
      choices: [
        "The form error of the primary datum feature",
        "The calibration certificate for the CMM probe",
        "The position tolerance value shown on the drawing",
        "The material boundary modifier applied to datum B",
      ],
      answer: 0,
      explanation: `<p>A part rocks whenever the primary datum feature fails to present exactly three stable contacts. A <strong>convex</strong> (crowned) face is the common case and it does the opposite of what people say: it touches on <em>one</em> high point or ridge and tips either way about it. A <strong>wavy</strong> surface or a <strong>four-pad</strong> fixture is the other case: more than three candidate contacts, so the part has two competing three-point rest positions. Either way each rest position tilts the part slightly differently, and every coordinate measured afterwards inherits that tilt.</p>
<p>Quantify it before you argue: form error &delta; across a contact span L gives a rocking angle of about &delta;/L radians, and a feature a height h above A moves by roughly h&middot;&delta;/L. A 0.1 mm crown over a 150 mm span is 0.67 mrad, which is 0.13 mm at a feature 200 mm away. That is the scatter these two inspectors are seeing.</p>
<p>Probe calibration would show up on every measurement, not just this one; the drawing tolerance and B's modifier do not change repeatability. Fix the datum feature or the fixture, then re-measure.</p>`,
    },
    {
      id: "datums-q07",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>Datum feature B is a &#8960;16.00&#8211;16.40 hole referenced at MMB, and it carries no geometric tolerance of its own. The hole on this part is produced at &#8960;16.25. How much datum shift is available, expressed as a diameter in mm?</p>`,
      answer: 0.25,
      unit: "mm",
      explanation: `<p>B carries no geometric tolerance of its own to build a virtual condition from, so its MMB is simply MMC. For an internal feature that is the <strong>smallest</strong> hole: &#8960;16.00. The simulator is a fixed &#8960;16.00 gage pin.</p>
<p class="eq">shift = produced mating size &#8722; MMB = 16.25 &#8722; 16.00 = <strong>0.25 mm</strong> (diametral)</p>
<p>Physically: a &#8960;16.00 pin in a &#8960;16.25 hole leaves 0.125 mm of radial clearance all round, so the datum axis can sit anywhere inside a &#8960;0.25 zone. Both numbers describe the same freedom. Quote the diametral value when the drawing is written diametrally, and always say which one you mean.</p>
<p>Two ways to get this wrong. Taking 16.40 &#8722; 16.25 = 0.15 uses the LMC limit, which would only be the boundary if the reference were LMB. And this is <em>not</em> bonus tolerance: no positional zone got bigger, the whole framework of zones simply floats.</p>`,
    },
    {
      id: "datums-q08",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A pattern of four holes is positioned to A | B&#9410; | C. On this part, datum feature B departs from its MMB by 0.30 mm. How may the inspector legitimately use that 0.30 mm?</p>`,
      choices: [
        "Add 0.30 mm to the position tolerance zone of every hole",
        "Add 0.30 mm to the zone of whichever one hole is failing",
        "Displace all four zones as one rigid set, 0.15 radial",
        "Split it: 0.15 mm of extra zone on each of the four holes",
      ],
      answer: 2,
      explanation: `<p>Departure of a <em>datum</em> feature from its MMB produces <strong>datum shift</strong>: the part is loose on the fixed-size simulator, so the whole pattern of tolerance zones may translate (and rotate) relative to the DRF. Watch the units. A 0.30 mm diametral departure gives a &#8960;0.30 shift zone, which is <strong>0.15 mm radially</strong> in any direction, not 0.30. It is a single rigid-body displacement that must work for all four holes at once.</p>
<p>What it is <strong>not</strong> is bonus tolerance. Bonus comes from the <em>considered</em> feature departing from its own MMC and enlarges that one feature's zone; each hole earns its own bonus independently. Datum shift never makes a zone bigger.</p>
<p>If two holes need to move in opposite directions, shift cannot rescue both, and the part fails. That asymmetry is why "I have 0.30 of shift" is not the same as "I have 0.30 more tolerance".</p>`,
    },
    {
      id: "datums-q09",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>The part shown is inspected twice: once to A | B | C, then re-fixtured and measured to A | C | B. Datum features B and C are out of square with each other by 0.10 mm over the 50 mm length of C. A hole lies 120 mm from the corner where B and C meet. How much does the hole's measured position change between the two setups, in mm?</p>`,
      answer: 0.24,
      unit: "mm",
      explanation: `<p>Whichever datum feature is <strong>secondary</strong> gets two contacts and therefore sets the rotation of the whole coordinate system; the tertiary only supplies an origin. Swapping B and C rotates the part by the full out-of-squareness angle.</p>
<p class="eq">&alpha; = 0.10 / 50 = 0.0020 rad (2.0 mrad)</p>
<p class="eq">&Delta; = L &middot; &alpha; = 120 &times; 0.0020 = <strong>0.24 mm</strong></p>
<p>That is the entire story of datum precedence in one calculation: a squareness error you would never notice on a surface plate becomes 0.24 mm of position error at a feature 120 mm away, easily the difference between passing and failing a &#8960;0.2 position callout.</p>
<p>Double the distance to the hole and the discrepancy doubles. Features close to the datum corner barely move; features out at the end of the part move the most, which is also where designers tend to put the critical holes.</p>`,
    },
    {
      id: "datums-q10",
      type: "mc",
      difficulty: 2,
      prompt: `<p>Same part, same CMM, same hole. Measured to A | B | C the position is comfortably in tolerance; measured to A | C | B it fails. The machine repeats to 0.002 mm. What explains the difference?</p>`,
      choices: [
        "The machine repeatability is too coarse for this tolerance",
        "Whichever datum is secondary gets two contacts and sets clocking",
        "Datum shift is available in one order but not in the other one",
        "The tertiary datum plane is not perpendicular to the primary one",
      ],
      answer: 1,
      explanation: `<p>Precedence is an instruction for immobilizing the part, not a label. The secondary datum feature is contacted at two points, so it fixes the rotation of the coordinate system in the primary plane; the tertiary gets one contact and only fixes an origin. Because no two real surfaces are perfectly square, promoting C over B re-clocks the part and every coordinate changes.</p>
<p>The other options fail on inspection: 0.002 mm of repeatability cannot produce the disagreement; datum shift requires a datum feature of size with an MMB reference, and neither is present here; and the datum <em>planes</em> of a DRF are perpendicular by definition. It is the datum <em>features</em> that are out of square.</p>
<p>So: A | B | C and A | C | B are two different specifications of the same geometry. Choose the order that matches how the part is seated in its assembly, and never let it be decided by which surface is easiest to reach.</p>`,
    },
    {
      id: "datums-q11",
      type: "mc",
      difficulty: 2,
      prompt: `<p>Every part passes incoming inspection, yet on the line about one in five will not drop onto the two dowels of the mating fixture. The drawing dimensions each hole from the same machined edge (datum C) at 30 &#177;0.15 and 118 &#177;0.15 mm; the dowels sit at 88.0 basic apart. Diagnose the root cause.</p>`,
      figure: figMismatch,
      choices: [
        "The dowels are undersized for the produced holes, so the plate rattles on them",
        "The inspection fixture is not repeatable enough to catch the drift",
        "Nothing on the print controls hole-to-hole; both are tied to an edge",
        "The hole diameter tolerance is too loose to give a proper dowel fit",
      ],
      answer: 2,
      explanation: `<p>The drawing controls each hole <em>independently</em> against the edge. Nominal spacing is 118 &#8722; 30 = 88 mm, matching the dowels, but the spacing is never dimensioned, so its error is a stack of two independent tolerances:</p>
<p class="eq">worst-case spacing error = &#177;0.15 + &#177;0.15 = &#177;0.30 mm</p>
<p>The assembly does not care where the edge is: it locates on the two dowels, so the relationship that has to be controlled is hole-to-hole and the fit onto the pins. Parts can be perfectly in tolerance to the print and still be 0.30 mm off the pin spacing.</p>
<p>The fix is to make the datums match the mating scheme: call the seating face A, one hole B and the second hole (or a slot) C, and position the pattern to that frame, ideally at MMB so the produced clearance is credited as datum shift. Then the inspection is a functional check of the same interface the fixture uses.</p>
<p>Note what is <em>not</em> the cause: pin size and hole size affect clearance, but a 0.30 mm spacing error will jam even with generous diameters.</p>`,
    },
    {
      id: "datums-q12",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A machined face used as primary datum feature A is crowned (convex): its centre stands 0.20 mm proud of its ends over a 200 mm length. The part rocks on the surface plate. A hole axis lies 50 mm above the face. Between the two extreme rest positions, how much does the measured position of that axis move, in mm?</p>`,
      answer: 0.2,
      unit: "mm",
      explanation: `<p>The part pivots on the crown. Tipping until one end touches rotates it through</p>
<p class="eq">&alpha; = 0.20 / 100 = 0.0020 rad</p>
<p>(the half-length, 100 mm, is the lever). It can rock the same amount the other way, so the total angular swing between extreme rest positions is 0.0040 rad. A feature 50 mm above the pivot then sweeps</p>
<p class="eq">&Delta; = 0.0040 &times; 50 = <strong>0.20 mm</strong></p>
<p>Two lessons. First, the rocking uncertainty scales with the height of the feature above the datum, so tall bosses suffer most. Second, no amount of tightening the hole's position tolerance fixes this; you control the <em>flatness</em> of A, or you specify datum targets so the part always rests on the same three spots.</p>
<p>The inspector's number errs in neither direction. It is scatter, not bias, which is why it shows up as poor gage R&amp;R rather than a shifted mean.</p>`,
    },
    {
      id: "datums-q13",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A sand casting's as-cast parting-line surface is called out as primary datum feature A. The face is 380 mm across, carries flash and draft, and warps up to 2 mm; mould halves also shift slightly relative to each other. What is the right correction?</p>`,
      choices: [
        "Replace it with three datum targets on defined pads",
        "Add a 0.1 mm flatness tolerance to the same surface",
        "Machine the whole face flat before any inspection",
        "Keep it and open up the position tolerances instead",
      ],
      answer: 0,
      explanation: `<p>Two things are wrong with the callout. The surface is far too irregular to give repeatable contact. Every fixture and every inspector touches different high points, and the parting line is the one place on a casting where the two mould halves can be offset, so it moves relative to the rest of the part.</p>
<p><strong>Datum targets</strong> solve both: specify three pads (typically &#8960;10&#8211;12 areas), locate them with basic dimensions, and keep them on <em>one</em> side of the parting line so mould shift does not enter the datum. Every fixture and the CMM then contact the same three spots and correlate.</p>
<p>Each distractor is a live temptation. A 0.1 mm flatness on an as-cast face is not producible and would scrap good castings; machining the whole face adds cost for a function that may not need it; and loosening the position tolerances hides a repeatability problem rather than fixing it, and the parts still will not correlate between two gages.</p>`,
    },
    {
      id: "datums-q14",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A weld fixture locates a plate on a face plus two pins that engage two holes 250 mm apart. The build standard insists the second pin be a diamond (relieved) pin. What goes wrong if both pins are round and a close fit?</p>`,
      choices: [
        "The plate ends up located in only five of its six freedoms",
        "The pins take the clamp load instead of the locating pads",
        "Datum shift disappears and the tolerance zones get smaller",
        "The scheme asks for 7 DOF of constraint, so parts will bind",
      ],
      answer: 3,
      explanation: `<p>Count the constraint the hardware demands: face = 3 DOF, first round pin = 2 (both translations), second round pin = another 2. That totals <strong>7</strong>, one more than the part has. The redundant constraint is along the line joining the pins, and it is fought over by two tolerances: the hole-to-hole spacing on the part and the pin-to-pin spacing in the fixture.</p>
<p>The result is that parts at the ends of the spacing distribution will not go on, or they go on and elastically distort. Either way the located position is no longer repeatable.</p>
<p>A <strong>diamond pin</strong> is relieved along the line of centres, so it contacts only across that line: it removes just the clocking rotation (1 DOF) and lets the spacing tolerance float. That gives exactly 3 + 2 + 1 = 6. This is the <strong>plane &#8211; round pin &#8211; diamond pin</strong> scheme, which is 3-2-1 in round hardware. Plane&#8211;pin&#8211;slot is the same idea with the relief moved onto the hole instead of the pin, and it only works if the slot is relieved along the line of centres. A hole opened up in <em>both</em> directions frees the clocking as well and you are back to five constrained freedoms.</p>`,
    },
    {
      id: "datums-q15",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>Primary datum feature A is flat within 0.30 mm over its 250 mm length. A boss standing 80 mm tall carries a perpendicularity tolerance of 0.10 mm to A. When the part re-seats on different high points of A, how much apparent perpendicularity error does the form error of A alone inject at the top of the boss, in mm?</p>`,
      answer: 0.096,
      unit: "mm",
      explanation: `<p>Re-seating on different high points tilts the part by up to the form error divided by the contact span:</p>
<p class="eq">&alpha; &asymp; 0.30 / 250 = 0.00120 rad</p>
<p>At the top of an 80 mm boss that tilt displaces the axis by</p>
<p class="eq">&Delta; = 0.00120 &times; 80 = <strong>0.096 mm</strong></p>
<p>which is 96% of the entire 0.10 mm perpendicularity budget, consumed before the boss's own geometry is even considered. The boss could be machined perfectly and the part would still measure marginal.</p>
<p>So: <strong>the form tolerance on a primary datum feature must be small compared with every orientation tolerance referenced to it.</strong> A rough rule is to keep the datum feature's flatness at or under a quarter of the tightest tolerance that references it. Tightening the perpendicularity callout here would achieve nothing.</p>`,
    },
    {
      id: "datums-q16",
      type: "mc",
      difficulty: 2,
      prompt: `<p>Datum feature B is a 300 mm machined side, but the mating part only ever touches the middle 60 mm of it &#8212; the rest is relieved by 1 mm. The print references the whole side as B. Inspection and the assembly fixture disagree on hole position by about 0.05 mm. What is the correct drawing change?</p>`,
      choices: [
        "Limit B to the 60 mm land that mates, using a chain line with basic dimensions",
        "Leave B as the whole side: the longer contact span divides form error into a smaller angle",
        "Move B onto two datum targets on the relieved portion, so contact cannot land on the land",
        "Hold the whole 300 mm side flat and square enough that where contact lands stops mattering",
      ],
      answer: 0,
      explanation: `<p>The datum feature has to be the geometry the assembly actually uses. A 1 mm relief means the fixture can only touch the 60 mm land, while the print invites the inspector to probe the full 300 mm, and a CMM to fit over all of it. Two different surfaces, two different datum planes, and the 0.05 mm disagreement follows.</p>
<p>ASME Y14.5 has a purpose-built answer: the <strong>partial datum feature</strong>. Draw a heavy chain line alongside the portion that is the datum feature, locate its ends with basic dimensions, and B is then unambiguously that 60 mm land for everyone.</p>
<p>Say the cost out loud, because that is the mark of a real answer. Contact span drops from 300 mm to 60 mm, so the same form error produces five times the tilt:</p>
<p class="eq">&alpha; = &delta; / L: 0.02/300 = 6.7 &times; 10<sup>&minus;5</sup> rad &nbsp;&#8594;&nbsp; 0.02/60 = 3.3 &times; 10<sup>&minus;4</sup> rad</p>
<p>At a hole 150 mm away that is 0.010 mm against 0.050 mm. So the partial datum has to come with a tighter flatness or straightness on the land. You buy correlation and pay for it in form tolerance.</p>
<p>Option 2 is the genuinely tempting one and it is the right instinct applied to the wrong constraint: a long span really is a better lever, but a datum the hardware cannot touch is not a datum. Datum targets on the <em>relieved</em> area point the fixture at metal that never mates, and holding a 300 mm side to a form tolerance fine enough to make contact location irrelevant is expensive and still leaves the print ambiguous.</p>`,
    },
    {
      id: "datums-q17",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A four-hole pattern is located to A | B&#9410;. Datum feature B is a &#8960;10.00&#8211;10.30 hole and on this part it measures &#8960;10.30. Ignoring each hole's own tolerance zone, how far can the pattern as a whole be displaced relative to the datum reference frame, in mm (radial)?</p>`,
      answer: 0.15,
      unit: "mm",
      explanation: `<p>MMB for an internal datum feature is its MMC, the smallest hole: &#8960;10.00. The simulator is a fixed &#8960;10.00 pin, so the departure is</p>
<p class="eq">shift = 10.30 &#8722; 10.00 = 0.30 mm diametral</p>
<p class="eq">radial float = 0.30 / 2 = <strong>0.15 mm</strong></p>
<p>Quoting 0.30 answers a diametral question, not a radial one. And the displacement is shared: all four zones move together by the same vector, so a hole can finish 0.15 mm plus its own zone radius from true position only if every other hole tolerates the same move.</p>`,
    },
    {
      id: "datums-q18",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A part passes position on the CMM but is rejected by the functional hard gage. Its primary datum feature is slightly convex, and the CMM is running its default datum plane fit. What is going on?</p>`,
      choices: [
        "The hard gage has worn oversize, so the boundary it presents is no longer the print's",
        "The probe radius is being compensated in the wrong direction",
        "The convex face makes the part rock, so the CMM cannot repeat",
        "Least squares fits the mean surface; the gage sits on high points",
      ],
      answer: 3,
      explanation: `<p>A surface plate or a hard gage contacts a convex datum feature at its <strong>high points</strong>. A CMM's default plane fit is <strong>least squares</strong>, which passes through the middle of the probed points. For a convex face that plane sits roughly half the form error below the contact plane, and it is also tilted differently.</p>
<p>Every coordinate is then referenced to a datum the physical world never uses, so the CMM reports smaller deviations than the gage sees. On a face with 0.2 mm of crown that is a systematic 0.1 mm of optimism, more than enough to disagree at a &#8960;0.2 callout.</p>
<p>The fix is to change the fit, not the part: request a constrained (tangent-plane, outside-the-material) fit for datum planes and a mating-envelope fit for datum features of size, and probe enough points to see the form. Then the CMM and the gage tell the same story.</p>
<p>Wear and probe compensation are real failure modes but they would bias every part and every feature, not only the datum-referenced ones; rocking would show as scatter, not a consistent pass/fail split.</p>`,
    },
    {
      id: "datums-q19",
      type: "mc",
      difficulty: 3,
      prompt: `<p>The bracket in the section view seats on its flange face and is centred by a pilot boss entering the housing bore; the outer edges touch nothing in the assembly. The current drawing calls the two outer machined edges as datums B and C. What do you propose?</p>`,
      figure: figSchemeChoice,
      choices: [
        "Make the flange face A and the pilot boss B, then re-reference",
        "Keep the edges but tighten their perpendicularity to the face",
        "Add a profile control on the outer edges relative to the boss",
        "Add a runout callout tying the pilot boss to the outer edges",
      ],
      answer: 0,
      explanation: `<p>Datums exist to reproduce the mating interface. Here the part is immobilized by a plane (the flange face, which seats first and carries the bolt load) and a cylindrical feature of size (the pilot boss, which centres it). The right scheme is therefore <strong>A = flange face, B = pilot boss</strong>, with a tertiary only if something clocks the part: a bolt hole, a dowel, or a keyway.</p>
<p>With the boss as B, reference it at MMB: the produced clearance between boss and bore becomes legitimate datum shift, which is exactly the freedom the assembly really has.</p>
<p>Tightening tolerances on the outer edges (options 2 and 3) spends money controlling geometry nothing touches, and it still leaves the boss-to-face relationship uncontrolled, which is the one relationship that decides whether the bracket seats square. Option 4 has the dependency backwards: it controls the functional feature <em>to</em> a non-functional one.</p>`,
    },
    {
      id: "datums-q20",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A designer chooses a 40 mm-wide rib as the secondary datum feature rather than the part's 220 mm-long machined side. The rib carries 0.02 mm of form error between its two contact points. How much position error does that inject at a hole 150 mm away from the rib, in mm?</p>`,
      answer: 0.075,
      unit: "mm",
      explanation: `<p>The two secondary contacts set the clocking of the whole coordinate system, so a height difference between them is an angular error with the contact spacing as its lever arm:</p>
<p class="eq">&alpha; = e / s = 0.02 / 40 = 0.00050 rad</p>
<p class="eq">&Delta; = L &middot; &alpha; = 150 &times; 0.00050 = <strong>0.075 mm</strong></p>
<p>Now repeat the calculation with the 220 mm side: &alpha; = 0.02/220 = 0.000091 rad, giving 0.0136 mm at the same hole, a 5.5&times; improvement for free, purely from picking a longer surface.</p>
<p>So the design rule is this: <strong>the secondary datum feature should be the longest available surface that the assembly actually uses</strong>, because angular error scales as 1/spacing and then gets multiplied by the distance out to the features you care about. Short datum features are error amplifiers.</p>`,
    },
    {
      id: "datums-q21",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A two-hole pattern positioned to A | B&#9410; | C comes out 0.36 mm further apart than the basic spacing, so each hole sits 0.18 mm out of position; the zones are &#8960;0.30 (radius 0.15 mm). Datum feature B offers 0.40 mm of datum shift. Does the part pass?</p>`,
      choices: [
        "Yes &#8212; 0.20 mm of radial shift covers each 0.18 mm error",
        "Yes &#8212; each hole may claim the available shift separately",
        "No &#8212; a rigid displacement cannot fix a spacing error",
        "No &#8212; datum shift can never be applied to a hole pattern",
      ],
      answer: 2,
      explanation: `<p>Datum shift is a <strong>rigid-body</strong> displacement of the entire framework of tolerance zones: one translation (and possibly one rotation) applied to all of them together. A rigid motion preserves distances, so it cannot absorb an error in the <em>spacing</em> between two holes. Move the framework 0.18 mm toward one hole and the other hole gets 0.18 mm worse.</p>
<p>Each hole needs 0.18 mm of correction and has only 0.15 mm of zone radius, so both fail and the part is rejected. If instead both holes had drifted 0.18 mm in the <em>same</em> direction, a single 0.18 mm shift would have rescued both. That is the whole distinction.</p>
<p>Option 2 treats shift like bonus tolerance, which each feature does earn independently. Option 4 overcorrects: shift applies to patterns routinely, it just applies once.</p>`,
    },
    {
      id: "datums-q22",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A pattern of holes carries position &#8960;0.25&#9410; to A | B&#9410; | C. Each hole's MMC is &#8960;12.00 and every one is produced at &#8960;12.09. Datum feature B is a &#8960;25.00 hole at MMB, produced at &#8960;25.30, and the whole pattern has drifted the same way. How far from true position may a hole axis actually sit, in mm (radial)?</p>`,
      answer: 0.32,
      unit: "mm",
      explanation: `<p>Two different mechanisms are in play and they act on different things, so you have to size each one separately and only then add the <em>radial</em> results.</p>
<p><strong>Bonus</strong> comes from the <em>considered</em> feature departing from its own MMC, and it enlarges that hole's own zone:</p>
<p class="eq">bonus = 12.09 &#8722; 12.00 = 0.09&nbsp;&#8594;&nbsp;zone = 0.25 + 0.09 = &#8960;0.34, i.e. 0.17 mm radius</p>
<p><strong>Datum shift</strong> comes from the <em>datum</em> feature departing from its MMB. It changes no zone size; it lets the entire framework of zones translate on the fixed &#8960;25.00 simulator:</p>
<p class="eq">shift = 25.30 &#8722; 25.00 = 0.30 diametral&nbsp;&#8594;&nbsp;0.15 mm radial</p>
<p class="eq">max distance from true position = 0.17 + 0.15 = <strong>0.32 mm</strong></p>
<p>The condition hidden in the prompt is the phrase "the whole pattern has drifted the same way". Shift is one rigid displacement shared by every zone, so it is only worth 0.15 mm to a hole if it is worth 0.15 mm to all of them at once. Scatter the holes in different directions and each is back to its own 0.17 mm.</p>
<p>Two ways to get this wrong. Quoting &#8960;0.64 adds the diametral bonus zone to the diametral shift as if they were one zone. Quoting 0.17 forgets that the frame itself is allowed to move, which is exactly the freedom the mating hardware has.</p>`,
    },
    // @@QUESTIONS@@
  ],

  qna: [
    {
      id: "datums-qa01",
      q: `<p>Explain the difference between a datum feature, a datum, and a datum feature simulator. Use a real setup as your example.</p>`,
      a: `<p>Take a bracket resting on a granite plate. The <strong>datum feature</strong> is the bracket's real bottom face: machined, but wavy, tilted and scratched at some level. The <strong>datum</strong> is the theoretically exact plane derived from that face: perfectly flat, no form error, an abstraction. The <strong>datum feature simulator</strong> is the granite plate itself, the physical thing that contacts the feature and establishes the datum; on a CMM the simulator is a fitted plane in software instead.</p>
<p>Why it matters practically: the part touches the plate at its three highest points, so the datum is defined by high points and not by an average surface. That single fact explains three real problems. Why a part can rock and give two different answers, why the flatness of the datum feature limits every orientation tolerance referenced to it, and why a least-squares CMM plane can disagree with a hard gage. It also cleans up your language: "datum A is flat within 0.02" is wrong; the datum <em>feature</em> is flat within 0.02.</p>`,
    },
    {
      id: "datums-qa02",
      q: `<p>Walk me through the 3-2-1 locating scheme and account for all six degrees of freedom.</p>`,
      a: `<p>A free rigid body has six degrees of freedom: translations T<sub>X</sub>, T<sub>Y</sub>, T<sub>Z</sub> and rotations R<sub>X</sub>, R<sub>Y</sub>, R<sub>Z</sub>.</p>
<p><strong>Primary, three contacts.</strong> Seat the part on the primary datum plane. It can no longer move normal to that plane (T<sub>Z</sub>) and it can no longer tip about either in-plane axis (R<sub>X</sub>, R<sub>Y</sub>). Three DOF gone. Three points is the minimum that defines a plane and the maximum that cannot rock.</p>
<p><strong>Secondary, two contacts.</strong> Slide the part against the secondary plane. The first contact removes translation toward it (T<sub>Y</sub>); the second, spaced along the surface, removes the spin in the primary plane (R<sub>Z</sub>). Two more gone.</p>
<p><strong>Tertiary, one contact.</strong> Push it against the tertiary plane and the last translation (T<sub>X</sub>) goes. Total 3 + 2 + 1 = 6, fully constrained.</p>
<p>Design consequences: spread the primary contacts wide and keep the centre of gravity inside their triangle; put the secondary contacts on the longest surface because their spacing is the lever arm that sets angular error; and never add a seventh contact, because over-constraint makes the rest position bimodal instead of unique. The same accounting in round hardware is plane &#8211; round pin &#8211; diamond pin.</p>`,
    },
    {
      id: "datums-qa03",
      q: `<p>Does it matter whether a drawing says A|B|C or A|C|B? Convince me with numbers.</p>`,
      a: `<p>It matters enormously. They are different specifications of the same geometry. The datum order is the sequence in which the part is immobilized, and higher precedence wins: the secondary datum feature gets <strong>two</strong> contacts and therefore sets the rotation of the entire coordinate system, while the tertiary gets <strong>one</strong> and only supplies an origin.</p>
<p>Real surfaces are never perfectly square. Say B and C are out of square by 0.10 mm over the 50 mm length of C, which is &alpha; = 0.002 rad. Measure A|B|C and the frame is clocked to B; measure A|C|B and it clocks to C instead. A hole 120 mm from the datum corner then reads differently by &Delta; = L&middot;&alpha; = 120 &times; 0.002 = 0.24 mm, the difference between passing and failing a &#8960;0.2 position callout, on the same part, on the same machine.</p>
<p>So how do you choose? Primary is the surface that seats first and carries the load in the assembly; secondary is the longest surface that controls orientation there; tertiary just stops the part sliding. If you cannot justify the order from the mating interface, you have not chosen it. You have defaulted it, and inspection will find out.</p>`,
    },
    {
      id: "datums-qa04",
      q: `<p>What is datum shift, and how is it different from bonus tolerance?</p>`,
      a: `<p>Both arise from a feature of size departing from a material boundary, but they act on different things.</p>
<p><strong>Bonus tolerance</strong> belongs to the <em>considered</em> feature, the one being toleranced. Put &#9410; in the tolerance compartment and the zone grows by however far the feature's mating size departs from its own MMC. Each feature earns its own bonus independently, and the zone gets bigger.</p>
<p><strong>Datum shift</strong> belongs to the <em>datum</em> feature. Put &#9410; after the datum letter and the simulator becomes a fixed-size gage element at the maximum material boundary. If the datum feature is produced away from that boundary, the part is loose on the simulator by shift = |produced mating size &#8722; MMB|, half of that radially. Nothing gets bigger: instead the whole framework of tolerance zones may translate and rotate as a rigid set relative to the datum reference frame.</p>
<p>The consequence that catches people out: shift is used once for the entire pattern. If two holes need correcting in opposite directions, say because the pattern came out too far apart, a rigid displacement cannot help both, and the part fails even with plenty of shift on paper. And at RMB there is no shift at all: the simulator expands or collapses onto the actual feature, so an expanding mandrel or collet is required.</p>`,
    },
    {
      id: "datums-qa05",
      q: `<p>How do you choose datums for a new part?</p>`,
      a: `<p>Start from the assembly, not the drawing. I ask three questions: what surface does this part <em>seat</em> on, what feature <em>centres</em> or aligns it, and what stops it <em>clocking</em>? Those three answers become A, B and C in that order, because that is the order in which the part is actually immobilized in service.</p>
<p>Then I sanity-check the choice:</p>
<ul>
<li>Primary should be the largest, flattest, load-carrying surface. It removes 3 DOF and everything else hangs off it.</li>
<li>Secondary should be the longest surface or the tightest-fitting feature of size that controls orientation, because its contact spacing divides the angular error.</li>
<li>If the part is located by a bore or pins in the assembly, use those as datum features of size at MMB, so the real clearance is credited as datum shift and inspection matches the fixture.</li>
<li>If the natural datum surface is as-cast, welded, or large and warped, specify datum targets.</li>
<li>Keep it repeatable: the inspector must be able to realize the same DRF the fixture does.</li>
</ul>
<p>The failure mode I am designing against is datums chosen for measuring convenience (two machined edges) while the assembly locates on something else (two dowel holes). Then the drawing controls the wrong relationship, parts pass inspection and jam on the line.</p>`,
    },
    {
      id: "datums-qa06",
      q: `<p>When would you use datum targets, and how are they specified?</p>`,
      a: `<p>Whenever the surface that ought to be the datum feature cannot be used as a whole: sand and die castings, forgings, weldments, large sheet-metal panels, flame-cut plate. Anything with scale, draft, weld distortion, or several millimetres of warp. On such a surface every fixture and every inspector contacts different high points, so the DRF is not repeatable and no amount of tolerance tightening downstream helps.</p>
<p>Specification: the target symbol is a circle divided by a horizontal line. The lower half carries the datum letter and target number (A1, A2, A3); the upper half carries the target size if it is an area, for example &#8960;12. Targets can be <strong>points</strong> (drawn as an X, contacted by spherical-tipped pins), <strong>lines</strong>, or <strong>areas</strong> (a hatched circle or rectangle, used where a point would dent a soft casting). Their locations are fixed with <strong>basic</strong> dimensions, so the fixture and the CMM are told exactly where to touch.</p>
<p>A typical scheme mirrors 3-2-1: A1&#8211;A3 on the seating face, B1&#8211;B2 on the side, C1 on the end. Two extra points of judgement: keep all targets for one datum on the same side of a casting's parting line so mould shift does not enter the datum, and place them where the part is stiff, not on an unsupported wall that deflects under fixture load.</p>`,
    },
    {
      id: "datums-qa07",
      q: `<p>How is a datum reference frame physically realized on a CMM versus a hard fixture, and why can the two disagree?</p>`,
      a: `<p>A hard fixture realizes the DRF in steel: the part is wrung down onto three pads (primary), pushed against two (secondary), then one (tertiary). Contact happens at the surfaces' <strong>high points</strong>, and the part is where the hardware puts it.</p>
<p>A CMM realizes the DRF in software: it probes a set of points on each datum feature, fits a plane or an axis, and builds the coordinate system from the fitted geometry. The default fit is usually <strong>least squares</strong>, which runs through the middle of the probed points rather than resting on the peaks.</p>
<p>On a convex primary datum feature those two planes differ by roughly half the form error and are tilted differently, so the CMM systematically reports smaller deviations than the gage, so parts pass on the machine and fail on the fixture. Other correlation killers: too few probe points to represent the surface (three points on a 300 mm face is a plane through noise), fitting a datum feature of size by least squares instead of by its mating envelope, and probing where the fixture cannot touch.</p>
<p>The fixes are concrete: request constrained tangent-plane fits outside the material for datum planes and mating-envelope fits for features of size, probe enough points, and use datum targets so both methods contact the same defined spots.</p>`,
    },
    {
      id: "datums-qa08",
      q: `<p>Parts pass incoming inspection but will not assemble. Walk me through your investigation.</p>`,
      a: `<p>First I establish that inspection is measuring what assembly cares about, because that is the usual answer. I get the print, the inspection setup, and the assembly fixture side by side and ask: <strong>which features locate the part on the line, and are those the datum features on the drawing?</strong> If the line locates on two dowel holes while the print calls two machined edges as B and C, the drawing never controlled hole-to-hole spacing. Each hole is toleranced to the edges at, say, &#177;0.15, so the pair can be 0.30 mm off the pin spacing and still be a good part on paper.</p>
<p>Next I check precedence: is the order on the print the order in which the part seats in the assembly? Swapping secondary and tertiary re-clocks the frame by the out-of-squareness angle, and a feature L away moves by L&middot;&alpha;.</p>
<p>Then repeatability: does the part rock on the primary datum feature, is the primary flat enough compared with the tolerances that reference it, is the CMM fit matching how the fixture contacts?</p>
<p>Finally I check whether the shop is using fixed pins for RMB datums, which quietly grants shift the drawing never allowed. The fix is nearly always to re-datum the print onto the mating interface, meaning face plus hole plus slot at MMB, rather than to tighten tolerances.</p>`,
    },
    {
      id: "datums-qa09",
      q: `<p>Your primary datum feature is flat within 0.3 mm. What does that do to every tolerance referenced to it?</p>`,
      a: `<p>It puts a floor under all of them. When the part re-seats on different high points, it tilts by roughly the form error divided by the contact span: &alpha; &asymp; &delta;/L. With 0.3 mm over a 250 mm face that is 1.2 mrad. Multiply by the distance out to whatever you are measuring and you get the uncertainty injected into that measurement: 0.096 mm at the top of an 80 mm boss, 0.18 mm at a feature 150 mm away.</p>
<p>So a 0.1 mm perpendicularity or a &#8960;0.2 position referenced to A is largely consumed before you measure the feature itself. Symptoms are poor gage repeatability rather than a biased mean: the part rocks and different inspectors get different numbers. If the surface is convex, it will physically rock; if it is dished, contact moves to the rim and the effective span changes with clamping.</p>
<p>Fixes, in order of preference: tighten the flatness of the datum feature (hold it to roughly a quarter of the tightest tolerance that references it), specify datum targets so contact is always at the same three spots, or change the datum to a surface that is actually flat. What does <em>not</em> work is tightening the downstream orientation tolerance. The error is not in the feature being toleranced.</p>`,
    },
    {
      id: "datums-qa10",
      q: `<p>How do you locate a part whose primary datum feature is a bore rather than a face?</p>`,
      a: `<p>A cylindrical datum feature yields a datum <strong>axis</strong>, taken as the axis of the actual mating envelope, the largest cylinder that fits inside the bore (or the smallest that fits over a shaft), not a least-squares centreline. If the bore is <em>primary</em> that is the <strong>unrelated</strong> AME, free to find its own orientation; a bore used as secondary or tertiary gives the <strong>related</strong> AME, because its simulator is constrained square to (and located from) the higher-precedence datums.</p>
<p>The DOF accounting changes. A <em>long</em> bore referenced primary removes four degrees of freedom: two translations and two rotations. What remains is rotation about its own axis and translation along it, so the secondary datum is usually a face perpendicular to the axis, removing <em>only</em> that axial translation, because the two tips are already gone, and a face that tried to take them as well would be the seventh contact. A tertiary feature such as a keyway, dowel hole or bolt hole then kills the clocking, and 4 + 1 + 1 = 6. A <em>short</em> bore behaves differently: it removes only the two translations, and a face must be primary to control the tilt. Which one is primary follows the assembly: for a gear on a shaft with a long fit, the bore leads; for a flange with a shallow pilot, the face leads.</p>
<p>Simulators: at RMB you need an expanding mandrel, collet or chuck that closes on the actual surface, and there is no datum shift. At MMB you use a fixed gage pin at the maximum material boundary and the clearance becomes legitimate datum shift for the whole pattern.</p>`,
    },
    // @@QNA@@
  ],
};

export default content;
