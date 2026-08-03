import type { TopicContent } from "../types";

// ---------------------------------------------------------------------------
// Beam Bending Stress
// ---------------------------------------------------------------------------

const figStressDist = `<svg viewBox="0 0 460 270" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bb1-comp" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
    <marker id="bb1-tens" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Bending stress is linear across the depth, zero at the neutral axis</text>
  <!-- cross-section -->
  <rect x="120" y="55" width="60" height="160" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <circle cx="150" cy="135" r="3" fill="#334155"/>
  <!-- neutral axis -->
  <line x1="95" y1="135" x2="415" y2="135" stroke="#64748b" stroke-width="1" stroke-dasharray="6 4"/>
  <text x="88" y="139" text-anchor="end" fill="#64748b" font-size="12">N.A.</text>
  <!-- c dimension -->
  <line x1="102" y1="55" x2="102" y2="135" stroke="#64748b" stroke-width="1"/>
  <line x1="96" y1="55" x2="108" y2="55" stroke="#64748b" stroke-width="1"/>
  <line x1="96" y1="135" x2="108" y2="135" stroke="#64748b" stroke-width="1"/>
  <text x="90" y="99" text-anchor="end" fill="#64748b" font-size="12" font-style="italic">c</text>
  <!-- stress profile baseline and line -->
  <line x1="330" y1="55" x2="330" y2="215" stroke="#64748b" stroke-width="1"/>
  <line x1="272" y1="55" x2="388" y2="215" stroke="#334155" stroke-width="1.5"/>
  <!-- compression arrows (top, pointing left, blue) -->
  <line x1="330" y1="55" x2="276" y2="55" stroke="#1d4ed8" stroke-width="2" marker-end="url(#bb1-comp)"/>
  <line x1="330" y1="75" x2="290" y2="75" stroke="#1d4ed8" stroke-width="2" marker-end="url(#bb1-comp)"/>
  <line x1="330" y1="95" x2="305" y2="95" stroke="#1d4ed8" stroke-width="2" marker-end="url(#bb1-comp)"/>
  <line x1="330" y1="115" x2="319" y2="115" stroke="#1d4ed8" stroke-width="2" marker-end="url(#bb1-comp)"/>
  <!-- tension arrows (bottom, pointing right, red) -->
  <line x1="330" y1="155" x2="341" y2="155" stroke="#dc2626" stroke-width="2" marker-end="url(#bb1-tens)"/>
  <line x1="330" y1="175" x2="355" y2="175" stroke="#dc2626" stroke-width="2" marker-end="url(#bb1-tens)"/>
  <line x1="330" y1="195" x2="369" y2="195" stroke="#dc2626" stroke-width="2" marker-end="url(#bb1-tens)"/>
  <line x1="330" y1="215" x2="384" y2="215" stroke="#dc2626" stroke-width="2" marker-end="url(#bb1-tens)"/>
  <!-- labels -->
  <text x="285" y="42" text-anchor="middle" fill="#1d4ed8" font-weight="600">&#963;<tspan font-size="10" dy="3">max</tspan><tspan dy="-3"> compression</tspan></text>
  <text x="360" y="238" text-anchor="middle" fill="#dc2626" font-weight="600">&#963;<tspan font-size="10" dy="3">max</tspan><tspan dy="-3"> tension</tspan></text>
  <text x="398" y="131" text-anchor="start" fill="#64748b" font-size="12">&#963; = 0</text>
  <text x="150" y="238" text-anchor="middle" fill="#64748b" font-size="12">sagging beam: top shortens, bottom stretches</text>
</svg>`;

const figTwoByFour = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Same board, same weight &#8212; orientation changes strength 2.3&#215;</text>
  <!-- flat -->
  <text x="120" y="48" text-anchor="middle" font-weight="600" fill="#334155">Flat</text>
  <rect x="58" y="95" width="125" height="53" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="48" y1="121" x2="193" y2="121" stroke="#64748b" stroke-width="1" stroke-dasharray="6 4"/>
  <line x1="58" y1="164" x2="183" y2="164" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="158" x2="58" y2="170" stroke="#64748b" stroke-width="1"/>
  <line x1="183" y1="158" x2="183" y2="170" stroke="#64748b" stroke-width="1"/>
  <text x="120" y="159" text-anchor="middle" fill="#64748b" font-size="12">89 mm</text>
  <line x1="197" y1="95" x2="197" y2="148" stroke="#64748b" stroke-width="1"/>
  <line x1="191" y1="95" x2="203" y2="95" stroke="#64748b" stroke-width="1"/>
  <line x1="191" y1="148" x2="203" y2="148" stroke="#64748b" stroke-width="1"/>
  <text x="207" y="125" text-anchor="start" fill="#64748b" font-size="12">38 mm</text>
  <text x="120" y="196" text-anchor="middle" fill="#334155">S = 21.4&#215;10&#179; mm&#179;</text>
  <!-- on edge -->
  <text x="330" y="48" text-anchor="middle" font-weight="600" fill="#334155">On edge</text>
  <rect x="303" y="59" width="53" height="125" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="293" y1="121" x2="366" y2="121" stroke="#64748b" stroke-width="1" stroke-dasharray="6 4"/>
  <line x1="303" y1="200" x2="356" y2="200" stroke="#64748b" stroke-width="1"/>
  <line x1="303" y1="194" x2="303" y2="206" stroke="#64748b" stroke-width="1"/>
  <line x1="356" y1="194" x2="356" y2="206" stroke="#64748b" stroke-width="1"/>
  <text x="330" y="219" text-anchor="middle" fill="#64748b" font-size="12">38 mm</text>
  <line x1="374" y1="59" x2="374" y2="184" stroke="#64748b" stroke-width="1"/>
  <line x1="368" y1="59" x2="380" y2="59" stroke="#64748b" stroke-width="1"/>
  <line x1="368" y1="184" x2="380" y2="184" stroke="#64748b" stroke-width="1"/>
  <text x="384" y="125" text-anchor="start" fill="#64748b" font-size="12">89 mm</text>
  <text x="330" y="242" text-anchor="middle" fill="#1d4ed8" font-weight="600">S = 50.2&#215;10&#179; mm&#179; (2.3&#215;)</text>
  <text x="120" y="219" text-anchor="middle" fill="#64748b" font-size="12">bending about the</text>
  <text x="120" y="236" text-anchor="middle" fill="#64748b" font-size="12">dashed (horizontal) axis</text>
</svg>`;

const figIBeam = `<svg viewBox="0 0 460 288" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Equal area (6000 mm&#178;) &#8212; the I-beam has 11&#215; the moment of inertia</text>
  <!-- rectangle 60x100 -->
  <rect x="98" y="94" width="43" height="72" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="80" y1="130" x2="160" y2="130" stroke="#64748b" stroke-width="1" stroke-dasharray="6 4"/>
  <text x="120" y="196" text-anchor="middle" fill="#334155">Rectangle 60 &#215; 100</text>
  <text x="120" y="214" text-anchor="middle" fill="#64748b" font-size="12">I = 5.0&#215;10&#8310; mm&#8308;</text>
  <text x="120" y="231" text-anchor="middle" fill="#64748b" font-size="12">S = 100&#215;10&#179; mm&#179;</text>
  <!-- I-beam: flanges 100x20, web 10x200, depth 240 (scale 0.72) -->
  <path d="M294,44 L366,44 L366,58 L334,58 L334,202 L366,202 L366,216 L294,216 L294,202 L326,202 L326,58 L294,58 Z" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="280" y1="130" x2="380" y2="130" stroke="#64748b" stroke-width="1" stroke-dasharray="6 4"/>
  <text x="392" y="55" text-anchor="start" fill="#64748b" font-size="12">flanges do</text>
  <text x="392" y="70" text-anchor="start" fill="#64748b" font-size="12">the bending</text>
  <text x="392" y="140" text-anchor="start" fill="#64748b" font-size="12">web carries</text>
  <text x="392" y="155" text-anchor="start" fill="#64748b" font-size="12">the shear</text>
  <text x="330" y="238" text-anchor="middle" fill="#334155">I-beam, 240 deep, same area</text>
  <text x="330" y="257" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">I = 55&#215;10&#8310; mm&#8308; (11&#215;)</text>
  <text x="330" y="275" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">S = 460&#215;10&#179; mm&#179; (4.6&#215;)</text>
</svg>`;

const figShear = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Transverse shear stress: zero at the faces, maximum at the neutral axis</text>
  <!-- rectangle section -->
  <rect x="45" y="60" width="38" height="120" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="35" y1="120" x2="200" y2="120" stroke="#64748b" stroke-width="1" stroke-dasharray="6 4"/>
  <text x="33" y="124" text-anchor="end" fill="#64748b" font-size="12">N.A.</text>
  <line x1="110" y1="60" x2="110" y2="180" stroke="#64748b" stroke-width="1"/>
  <path d="M110,60 Q190,120 110,180" fill="#fee2e2" stroke="#dc2626" stroke-width="1.8"/>
  <line x1="110" y1="120" x2="146" y2="120" stroke="#dc2626" stroke-width="1"/>
  <text x="152" y="117" text-anchor="start" fill="#dc2626" font-weight="600" font-size="12">&#964;<tspan baseline-shift="sub" font-size="9">max</tspan> = 3V/2A</text>
  <text x="112" y="55" text-anchor="middle" fill="#64748b" font-size="12">&#964; = 0</text>
  <!-- I section -->
  <rect x="265" y="60" width="80" height="12" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="300" y="72" width="10" height="96" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="265" y="168" width="80" height="12" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="255" y1="120" x2="440" y2="120" stroke="#64748b" stroke-width="1" stroke-dasharray="6 4"/>
  <line x1="370" y1="60" x2="370" y2="180" stroke="#64748b" stroke-width="1"/>
  <path d="M370,60 L376,72 L406,72 Q434,120 406,168 L376,168 L370,180" fill="#fee2e2" stroke="#dc2626" stroke-width="1.8"/>
  <text x="125" y="205" text-anchor="middle" fill="#334155" font-size="12">rectangle: peak is 1.5&#215; the average V/A</text>
  <text x="350" y="205" text-anchor="middle" fill="#334155" font-size="12">I-beam: the web takes almost all of V</text>
  <text x="230" y="230" text-anchor="middle" fill="#64748b" font-size="12">the step at the flange junction is the width t changing</text>
</svg>`;

const figQ3 = `<svg viewBox="0 0 460 230" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bbq3-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <!-- wall -->
  <line x1="70" y1="60" x2="70" y2="170" stroke="#334155" stroke-width="2"/>
  <line x1="58" y1="76" x2="70" y2="64" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="98" x2="70" y2="86" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="120" x2="70" y2="108" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="142" x2="70" y2="130" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="164" x2="70" y2="152" stroke="#64748b" stroke-width="1"/>
  <!-- beam -->
  <rect x="70" y="105" width="260" height="17" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <!-- tip load -->
  <line x1="324" y1="48" x2="324" y2="100" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bbq3-load)"/>
  <text x="324" y="38" text-anchor="middle" fill="#dc2626" font-weight="600">P = 2 kN</text>
  <!-- length dimension -->
  <line x1="70" y1="192" x2="330" y2="192" stroke="#64748b" stroke-width="1"/>
  <line x1="70" y1="186" x2="70" y2="198" stroke="#64748b" stroke-width="1"/>
  <line x1="330" y1="186" x2="330" y2="198" stroke="#64748b" stroke-width="1"/>
  <text x="200" y="187" text-anchor="middle" fill="#64748b" font-size="12">L = 1 m</text>
  <!-- cross-section inset -->
  <text x="404" y="78" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">section</text>
  <rect x="390" y="88" width="28" height="42" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <text x="404" y="148" text-anchor="middle" fill="#64748b" font-size="12">b = 40 mm</text>
  <text x="404" y="164" text-anchor="middle" fill="#64748b" font-size="12">h = 60 mm</text>
</svg>`;

const figQ5 = `<svg viewBox="0 0 460 230" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bbq5-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <!-- flat plank -->
  <text x="130" y="24" text-anchor="middle" font-weight="600" fill="#334155">(a) flat</text>
  <line x1="130" y1="38" x2="130" y2="72" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bbq5-load)"/>
  <rect x="76" y="80" width="108" height="48" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="66" y1="104" x2="194" y2="104" stroke="#64748b" stroke-width="1" stroke-dasharray="6 4"/>
  <line x1="76" y1="146" x2="184" y2="146" stroke="#64748b" stroke-width="1"/>
  <line x1="76" y1="140" x2="76" y2="152" stroke="#64748b" stroke-width="1"/>
  <line x1="184" y1="140" x2="184" y2="152" stroke="#64748b" stroke-width="1"/>
  <text x="130" y="167" text-anchor="middle" fill="#64748b" font-size="12">90 mm</text>
  <line x1="198" y1="80" x2="198" y2="128" stroke="#64748b" stroke-width="1"/>
  <line x1="192" y1="80" x2="204" y2="80" stroke="#64748b" stroke-width="1"/>
  <line x1="192" y1="128" x2="204" y2="128" stroke="#64748b" stroke-width="1"/>
  <text x="208" y="108" text-anchor="start" fill="#64748b" font-size="12">40 mm</text>
  <!-- on edge -->
  <text x="340" y="24" text-anchor="middle" font-weight="600" fill="#334155">(b) on edge</text>
  <line x1="340" y1="38" x2="340" y2="60" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bbq5-load)"/>
  <rect x="316" y="68" width="48" height="108" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="306" y1="122" x2="374" y2="122" stroke="#64748b" stroke-width="1" stroke-dasharray="6 4"/>
  <line x1="316" y1="194" x2="364" y2="194" stroke="#64748b" stroke-width="1"/>
  <line x1="316" y1="188" x2="316" y2="200" stroke="#64748b" stroke-width="1"/>
  <line x1="364" y1="188" x2="364" y2="200" stroke="#64748b" stroke-width="1"/>
  <text x="340" y="215" text-anchor="middle" fill="#64748b" font-size="12">40 mm</text>
  <line x1="382" y1="68" x2="382" y2="176" stroke="#64748b" stroke-width="1"/>
  <line x1="376" y1="68" x2="388" y2="68" stroke="#64748b" stroke-width="1"/>
  <line x1="376" y1="176" x2="388" y2="176" stroke="#64748b" stroke-width="1"/>
  <text x="392" y="126" text-anchor="start" fill="#64748b" font-size="12">90 mm</text>
</svg>`;

const figQ10 = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">T-section, sagging (compression on top)</text>
  <!-- flange 100x20 (scale 1.2) -->
  <rect x="170" y="50" width="120" height="24" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <!-- stem 20x80 -->
  <rect x="218" y="74" width="24" height="96" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <!-- neutral axis at 32.2 mm from top: y = 50 + 1.2(32.2) = 88.7 -->
  <line x1="140" y1="89" x2="330" y2="89" stroke="#1d4ed8" stroke-width="1.2" stroke-dasharray="6 4"/>
  <text x="336" y="93" text-anchor="start" fill="#1d4ed8" font-size="12">N.A. (32.2 mm down)</text>
  <!-- points A and B -->
  <circle cx="230" cy="50" r="3.5" fill="#dc2626"/>
  <text x="230" y="42" text-anchor="middle" fill="#dc2626" font-weight="600">A</text>
  <circle cx="230" cy="170" r="3.5" fill="#dc2626"/>
  <text x="244" y="176" text-anchor="start" fill="#dc2626" font-weight="600">B</text>
  <!-- dims -->
  <line x1="170" y1="36" x2="290" y2="36" stroke="#64748b" stroke-width="1"/>
  <line x1="170" y1="30" x2="170" y2="42" stroke="#64748b" stroke-width="1"/>
  <line x1="290" y1="30" x2="290" y2="42" stroke="#64748b" stroke-width="1"/>
  <text x="150" y="40" text-anchor="end" fill="#64748b" font-size="12">100 mm</text>
  <line x1="150" y1="50" x2="150" y2="74" stroke="#64748b" stroke-width="1"/>
  <line x1="144" y1="50" x2="156" y2="50" stroke="#64748b" stroke-width="1"/>
  <line x1="144" y1="74" x2="156" y2="74" stroke="#64748b" stroke-width="1"/>
  <text x="138" y="66" text-anchor="end" fill="#64748b" font-size="12">20 mm</text>
  <line x1="196" y1="74" x2="196" y2="170" stroke="#64748b" stroke-width="1"/>
  <line x1="190" y1="74" x2="202" y2="74" stroke="#64748b" stroke-width="1"/>
  <line x1="190" y1="170" x2="202" y2="170" stroke="#64748b" stroke-width="1"/>
  <text x="184" y="126" text-anchor="end" fill="#64748b" font-size="12">80 mm</text>
  <line x1="218" y1="196" x2="242" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="218" y1="190" x2="218" y2="202" stroke="#64748b" stroke-width="1"/>
  <line x1="242" y1="190" x2="242" y2="202" stroke="#64748b" stroke-width="1"/>
  <text x="230" y="218" text-anchor="middle" fill="#64748b" font-size="12">20 mm</text>
</svg>`;

const figQ14 = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bbq14-load" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
  </defs>
  <rect x="60" y="120" width="280" height="14" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <!-- UDL over full span -->
  <line x1="60" y1="66" x2="340" y2="66" stroke="#dc2626" stroke-width="2"/>
  <line x1="60" y1="70" x2="60" y2="112" stroke="#dc2626" stroke-width="1.8" marker-end="url(#bbq14-load)"/>
  <line x1="116" y1="70" x2="116" y2="112" stroke="#dc2626" stroke-width="1.8" marker-end="url(#bbq14-load)"/>
  <line x1="172" y1="70" x2="172" y2="112" stroke="#dc2626" stroke-width="1.8" marker-end="url(#bbq14-load)"/>
  <line x1="228" y1="70" x2="228" y2="112" stroke="#dc2626" stroke-width="1.8" marker-end="url(#bbq14-load)"/>
  <line x1="284" y1="70" x2="284" y2="112" stroke="#dc2626" stroke-width="1.8" marker-end="url(#bbq14-load)"/>
  <line x1="340" y1="70" x2="340" y2="112" stroke="#dc2626" stroke-width="1.8" marker-end="url(#bbq14-load)"/>
  <text x="200" y="54" text-anchor="middle" fill="#dc2626" font-weight="600">w = 4 kN/m</text>
  <!-- pin at A -->
  <polygon points="60,134 48,158 72,158" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="60" cy="134" r="3" fill="#334155"/>
  <line x1="40" y1="158" x2="80" y2="158" stroke="#334155" stroke-width="1.5"/>
  <line x1="46" y1="168" x2="56" y2="158" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="168" x2="68" y2="158" stroke="#64748b" stroke-width="1"/>
  <line x1="70" y1="168" x2="80" y2="158" stroke="#64748b" stroke-width="1"/>
  <!-- roller at B -->
  <polygon points="340,134 328,154 352,154" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="333" cy="160" r="4.5" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="347" cy="160" r="4.5" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="320" y1="166" x2="360" y2="166" stroke="#334155" stroke-width="1.5"/>
  <!-- span dimension -->
  <line x1="60" y1="200" x2="340" y2="200" stroke="#64748b" stroke-width="1"/>
  <line x1="60" y1="194" x2="60" y2="206" stroke="#64748b" stroke-width="1"/>
  <line x1="340" y1="194" x2="340" y2="206" stroke="#64748b" stroke-width="1"/>
  <text x="200" y="195" text-anchor="middle" fill="#64748b" font-size="12">L = 3 m</text>
  <!-- section inset -->
  <text x="410" y="78" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">section</text>
  <rect x="398" y="86" width="24" height="48" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <text x="410" y="152" text-anchor="middle" fill="#64748b" font-size="12">60 mm wide</text>
  <text x="410" y="168" text-anchor="middle" fill="#64748b" font-size="12">120 mm deep</text>
</svg>`;

const figQ54 = `<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Which plot is the bending stress through this T-section?</text>
  <!-- T section, flange 100x20 on top, stem 20x80, depth 100 (scale 1.1) -->
  <rect x="22" y="70" width="88" height="22" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="57" y="92" width="18" height="88" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="16" y1="70" x2="120" y2="70" stroke="#64748b" stroke-width="0.8" stroke-dasharray="3 3"/>
  <line x1="16" y1="180" x2="120" y2="180" stroke="#64748b" stroke-width="0.8" stroke-dasharray="3 3"/>
  <text x="66" y="200" text-anchor="middle" fill="#334155" font-size="12">section</text>
  <text x="66" y="216" text-anchor="middle" fill="#64748b" font-size="12">sagging M</text>
  <!-- panel a: linear, zero at mid-depth -->
  <line x1="176" y1="70" x2="176" y2="180" stroke="#64748b" stroke-width="1"/>
  <line x1="154" y1="70" x2="198" y2="180" stroke="#1d4ed8" stroke-width="1.8"/>
  <text x="176" y="200" text-anchor="middle" fill="#334155" font-weight="600">(a)</text>
  <!-- panel b: parabolic -->
  <line x1="248" y1="70" x2="248" y2="180" stroke="#64748b" stroke-width="1"/>
  <path d="M248,70 Q292,125 248,180" fill="none" stroke="#1d4ed8" stroke-width="1.8"/>
  <text x="248" y="200" text-anchor="middle" fill="#334155" font-weight="600">(b)</text>
  <!-- panel c: linear, zero one third down, larger below -->
  <line x1="320" y1="70" x2="320" y2="180" stroke="#64748b" stroke-width="1"/>
  <line x1="306" y1="70" x2="349" y2="180" stroke="#1d4ed8" stroke-width="1.8"/>
  <line x1="316" y1="107" x2="324" y2="107" stroke="#dc2626" stroke-width="1.5"/>
  <text x="320" y="200" text-anchor="middle" fill="#334155" font-weight="600">(c)</text>
  <!-- panel d: uniform blocks -->
  <line x1="404" y1="70" x2="404" y2="180" stroke="#64748b" stroke-width="1"/>
  <rect x="386" y="70" width="18" height="55" fill="#e2e8f0" stroke="#1d4ed8" stroke-width="1.5"/>
  <rect x="404" y="125" width="18" height="55" fill="#e2e8f0" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="404" y="200" text-anchor="middle" fill="#334155" font-weight="600">(d)</text>
  <text x="290" y="230" text-anchor="middle" fill="#64748b" font-size="12">compression plotted left of the axis, tension right</text>
  <text x="290" y="248" text-anchor="middle" fill="#64748b" font-size="12">the short red tick marks where &#963; = 0 in panel (c)</text>
</svg>`;

const figQ55 = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bb55-slip" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Two 50 &#215; 150 mm planks: free to slip vs fully glued</text>
  <!-- case 1: two planks, slipped at the ends -->
  <text x="115" y="46" text-anchor="middle" font-weight="600" fill="#334155">(1) free to slip</text>
  <path d="M40,74 L190,74 L190,96 L40,96 Z" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <path d="M30,100 L180,100 L180,122 L30,122 Z" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="196" y1="85" x2="222" y2="85" stroke="#dc2626" stroke-width="2" marker-end="url(#bb55-slip)"/>
  <line x1="24" y1="111" x2="4" y2="111" stroke="#dc2626" stroke-width="2" marker-end="url(#bb55-slip)"/>
  <text x="115" y="146" text-anchor="middle" fill="#dc2626" font-size="12">faces slide past each other</text>
  <text x="115" y="164" text-anchor="middle" fill="#64748b" font-size="12">each plank bends about its</text>
  <text x="115" y="180" text-anchor="middle" fill="#64748b" font-size="12">own mid-height (two N.A.s)</text>
  <!-- case 2: glued -->
  <text x="330" y="46" text-anchor="middle" font-weight="600" fill="#334155">(2) fully glued</text>
  <rect x="255" y="74" width="150" height="48" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="255" y1="98" x2="405" y2="98" stroke="#334155" stroke-width="1.5" stroke-dasharray="5 3"/>
  <text x="330" y="146" text-anchor="middle" fill="#1d4ed8" font-size="12">glue line carries the shear flow</text>
  <text x="330" y="164" text-anchor="middle" fill="#64748b" font-size="12">acts as one 300 mm deep beam</text>
  <text x="330" y="180" text-anchor="middle" fill="#64748b" font-size="12">with a single neutral axis</text>
  <!-- cross-sections -->
  <rect x="60" y="196" width="22" height="18" fill="#e2e8f0" stroke="#334155" stroke-width="1.2"/>
  <rect x="60" y="216" width="22" height="18" fill="#e2e8f0" stroke="#334155" stroke-width="1.2"/>
  <text x="92" y="220" text-anchor="start" fill="#64748b" font-size="12">50 wide, 2 &#215; 150 deep</text>
  <rect x="275" y="196" width="22" height="38" fill="#e2e8f0" stroke="#334155" stroke-width="1.2"/>
  <text x="307" y="220" text-anchor="start" fill="#64748b" font-size="12">50 wide, 300 deep</text>
</svg>`;

const figQ56 = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Welded plate girder with unequal flanges (drawn to scale)</text>
  <!-- scale 0.8; depth 200 -> 160 px, top of section at y = 42 -->
  <rect x="120" y="42" width="160" height="10" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="197" y="52" width="6" height="141" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="160" y="193" width="80" height="10" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <!-- neutral axis: 77.5 mm below the top -> y = 42 + 0.8(77.5) = 104 -->
  <line x1="100" y1="104" x2="330" y2="104" stroke="#1d4ed8" stroke-width="1.2" stroke-dasharray="6 4"/>
  <text x="336" y="108" text-anchor="start" fill="#1d4ed8" font-size="12">N.A. (locate it)</text>
  <!-- dimensions -->
  <line x1="120" y1="30" x2="280" y2="30" stroke="#64748b" stroke-width="1"/>
  <line x1="120" y1="24" x2="120" y2="36" stroke="#64748b" stroke-width="1"/>
  <line x1="280" y1="24" x2="280" y2="36" stroke="#64748b" stroke-width="1"/>
  <text x="300" y="34" text-anchor="start" fill="#64748b" font-size="12">200 &#215; 12</text>
  <line x1="160" y1="219" x2="240" y2="219" stroke="#64748b" stroke-width="1"/>
  <line x1="160" y1="213" x2="160" y2="225" stroke="#64748b" stroke-width="1"/>
  <line x1="240" y1="213" x2="240" y2="225" stroke="#64748b" stroke-width="1"/>
  <text x="256" y="223" text-anchor="start" fill="#64748b" font-size="12">100 &#215; 12</text>
  <text x="176" y="130" text-anchor="end" fill="#64748b" font-size="12">web 8 &#215; 176</text>
  <line x1="92" y1="42" x2="92" y2="203" stroke="#64748b" stroke-width="1"/>
  <line x1="86" y1="42" x2="98" y2="42" stroke="#64748b" stroke-width="1"/>
  <line x1="86" y1="203" x2="98" y2="203" stroke="#64748b" stroke-width="1"/>
  <text x="82" y="126" text-anchor="end" fill="#64748b" font-size="12">200 mm</text>
  <text x="230" y="243" text-anchor="middle" fill="#64748b" font-size="12">all dimensions in mm; sagging moment about the horizontal axis</text>
</svg>`;

const figQ59 = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Four sections, all of area &#8776; 2000 mm&#178; (drawn to scale)</text>
  <!-- (a) solid square 45 x 45 -->
  <rect x="60" y="90" width="41" height="41" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <text x="80" y="168" text-anchor="middle" fill="#334155" font-weight="600">(a)</text>
  <text x="80" y="186" text-anchor="middle" fill="#64748b" font-size="12">square</text>
  <text x="80" y="202" text-anchor="middle" fill="#64748b" font-size="12">45 &#215; 45</text>
  <!-- (b) rectangle 20 x 100 on edge -->
  <rect x="161" y="65" width="18" height="90" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <text x="170" y="168" text-anchor="middle" fill="#334155" font-weight="600">(b)</text>
  <text x="170" y="186" text-anchor="middle" fill="#64748b" font-size="12">rectangle</text>
  <text x="170" y="202" text-anchor="middle" fill="#64748b" font-size="12">20 &#215; 100</text>
  <!-- (c) tube OD 80, wall 9 -->
  <circle cx="265" cy="110" r="36" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <circle cx="265" cy="110" r="28" fill="#ffffff" stroke="#334155" stroke-width="1.5"/>
  <text x="265" y="168" text-anchor="middle" fill="#334155" font-weight="600">(c)</text>
  <text x="265" y="186" text-anchor="middle" fill="#64748b" font-size="12">tube &#8960;80</text>
  <text x="265" y="202" text-anchor="middle" fill="#64748b" font-size="12">9 mm wall</text>
  <!-- (d) I-section: flanges 60x12, web 8x70, depth 94 -->
  <rect x="348" y="68" width="54" height="11" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="371" y="79" width="8" height="63" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="348" y="142" width="54" height="11" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <text x="375" y="168" text-anchor="middle" fill="#334155" font-weight="600">(d)</text>
  <text x="375" y="186" text-anchor="middle" fill="#64748b" font-size="12">I: 60 &#215; 12 flanges</text>
  <text x="375" y="202" text-anchor="middle" fill="#64748b" font-size="12">8 &#215; 70 web</text>
  <line x1="40" y1="110" x2="430" y2="110" stroke="#64748b" stroke-width="1" stroke-dasharray="6 4"/>
  <text x="230" y="228" text-anchor="middle" fill="#64748b" font-size="12">bending about the dashed horizontal axis</text>
</svg>`;

const content: TopicContent = {
  lesson: {
    title: "Beam Bending Stress",
    intro: `<p>Bending is how most structural hardware actually fails or deflects: brackets, shafts, PCB standoffs, chassis rails, robot arms. Interviewers love it because one formula, <strong>&sigma; = Mc/I</strong>, unlocks a whole family of questions about geometry, load paths, and design intuition. If you can explain <em>why</em> the flexure formula works and <em>why</em> an I-beam is shaped the way it is, you are ahead of most candidates.</p>
<p>This lesson builds the flexure formula from first principles, covers the section properties you must know cold (I, S, parallel axis theorem), adds the transverse shear stress that rides along with every bending moment, and finishes with the shape-efficiency arguments that power the classic interview question: "make this beam stronger without adding weight."</p>`,
    sections: [
      {
        heading: "The flexure formula and where it comes from",
        html: `<p>Bend a straight beam with a moment M and three things happen, in order:</p>
<ol>
<li><strong>Plane sections remain plane.</strong> A flat cross-section stays flat, it just rotates slightly. This is the key kinematic observation (draw grid lines on an eraser and bend it. They stay straight).</li>
<li><strong>Strain is therefore linear with depth.</strong> Fibers on the inside of the curve shorten, fibers on the outside stretch, and somewhere in between is a surface with zero strain, the <strong>neutral axis</strong>. Geometry gives &epsilon; = &minus;y/&rho;, where y is distance from the neutral axis and &rho; is the radius of curvature.</li>
<li><strong>Stress follows strain</strong> (linear elastic material): &sigma; = E&epsilon;, so stress is also linear with depth.</li>
</ol>
<p>Requiring zero net axial force puts the neutral axis <strong>through the centroid</strong>, and requiring the stress distribution to sum to the applied moment M gives:</p>
<p class="eq">&sigma; = M y / I&nbsp;&nbsp;&nbsp;&nbsp;&sigma;<sub>max</sub> = M c / I</p>
<p>Here <strong>&sigma;</strong> is normal bending stress (Pa or MPa), <strong>M</strong> is the internal bending moment at the section (N&middot;m), <strong>y</strong> is distance from the neutral axis, <strong>I</strong> is the second moment of area about the bending axis (m<sup>4</sup>), and <strong>c</strong> is the distance to the farthest fiber. Assumptions to state in an interview: initially straight beam, linear elastic material, homogeneous section, bending about a principal axis, small deflection, and slender enough that shear deformation is negligible.</p>
<p>Common misuse: &sigma; = Mc/I gives the nominal far-field bending stress. It does not automatically include holes, fillets, weld toes, local bearing, thin-flange buckling, or curved-beam effects.</p>
<div class="callout"><strong>Say it in one line:</strong> "Plane sections stay plane, so strain is linear in y; elasticity makes stress linear too; integrating stress to match M gives &sigma; = Mc/I."</div>`,
      },
      {
        heading: "The stress distribution: tension one side, compression the other",
        html: `<p>The picture below is the one to draw on the whiteboard. For a sagging beam (like a shelf under load), the top fibers are in <strong>compression</strong>, the bottom fibers in <strong>tension</strong>, stress varies linearly, and it is exactly <strong>zero at the neutral axis</strong>.</p>
<figure class="fig">${figStressDist}<figcaption>Bending stress across a rectangular section under a sagging moment: linear profile, zero at the neutral axis (through the centroid), maximum at the outer fibers a distance c away.</figcaption></figure>
<p>Consequences interviewers probe:</p>
<ul>
<li>The <strong>outer fibers do all the work</strong>; material near the neutral axis is nearly unstressed in bending. This single fact explains I-beams, tubes, and sandwich panels.</li>
<li>Which side cracks first depends on the material: concrete and cast iron are weak in <strong>tension</strong>, so a sagging concrete beam cracks on the bottom (that is where the rebar goes).</li>
<li>On an <strong>unsymmetric</strong> section the two extreme fibers sit at different distances c<sub>top</sub> and c<sub>bot</sub>, so the peak tensile and peak compressive stresses are <em>different numbers</em>. Linear does not mean symmetric. You then need two section moduli, S<sub>top</sub> = I/c<sub>top</sub> and S<sub>bot</sub> = I/c<sub>bot</sub>, and must check the one on the side where the material is weaker.</li>
<li>Bending stress is zero at the neutral axis, but transverse <strong>shear stress peaks there</strong>. Don't mix the two distributions up.</li>
</ul>`,
      },
      {
        heading: "Second moment of area I, and the parallel axis theorem",
        html: `<p>I measures how far the area sits from the bending axis. Because the distance is <em>squared</em> in the integral I = &int;y&sup2;dA, area far from the neutral axis counts enormously more than area near it. The three results to memorize:</p>
<table>
<thead><tr><th>Section</th><th>I about centroid</th><th>c</th></tr></thead>
<tbody>
<tr><td>Rectangle b wide &times; h deep</td><td>bh&sup3;/12</td><td>h/2</td></tr>
<tr><td>Solid circle, diameter d</td><td>&pi;d&#8308;/64</td><td>d/2</td></tr>
<tr><td>Hollow circle (tube)</td><td>&pi;(d<sub>o</sub>&#8308; &minus; d<sub>i</sub>&#8308;)/64</td><td>d<sub>o</sub>/2</td></tr>
</tbody>
</table>
<p><strong>Hollow and composite sections by subtraction:</strong> a box section is the outer rectangle minus the inner one, computed about the <em>same</em> (shared centroidal) axis: I = (BH&sup3; &minus; bh&sup3;)/12. This works whenever the removed shape shares the centroid.</p>
<p><strong>Parallel axis theorem:</strong> to move I from a shape's own centroid to another parallel axis a distance d away,</p>
<p class="eq">I = I&#772; + A d&sup2;</p>
<p>The three-step recipe for any built-up section: (1) locate the overall centroid as the area-weighted average of the pieces' centroids; (2) for each piece take its own bh&sup3;/12 and add A d&sup2; using its offset from that overall centroid; (3) sum. For flanges far from the neutral axis the Ad&sup2; term dominates, often by a factor of 100, which is the quantitative reason flanges are so effective.</p>
<div class="callout warn"><strong>Watch the direction:</strong> in bh&sup3;/12 the cubed dimension is the one <em>parallel to the load</em> (the depth). Swapping b and h is the single most common arithmetic slip in bending questions. The second most common is forgetting Ad&sup2; entirely, which can understate I by an order of magnitude.</div>`,
      },
      {
        heading: "Section modulus S = I/c",
        html: `<p>Since the maximum stress is always &sigma; = Mc/I, engineers bundle the geometry into one number, the <strong>section modulus</strong>:</p>
<p class="eq">S = I / c&nbsp;&nbsp;&nbsp;&nbsp;&sigma;<sub>max</sub> = M / S</p>
<p>S is the "strength" of a cross-section in bending: to survive a moment M with allowable stress &sigma;<sub>allow</sub>, you need S &ge; M/&sigma;<sub>allow</sub>. Steel handbooks tabulate S for every rolled shape precisely so designers can do this in one division. Sizing a rectangular member is then a one-line inversion: S = bh&sup2;/6 &ge; M/&sigma;<sub>allow</sub> gives h &ge; &radic;(6M/(b&sigma;<sub>allow</sub>)).</p>
<ul>
<li>Rectangle: S = bh&sup2;/6. Strength scales with <strong>depth squared</strong>.</li>
<li>Solid circle: S = &pi;d&sup3;/32. Strength scales with <strong>diameter cubed</strong>.</li>
</ul>
<p>Keep the two scalings straight: <strong>stress</strong> (strength) goes with S &prop; h&sup2;, while <strong>deflection</strong> (stiffness) goes with I &prop; h&sup3;. Doubling the depth of a rectangular beam cuts the bending stress to 1/4 but cuts deflection to 1/8, a distinction interviewers check explicitly.</p>`,
      },
      {
        heading: "Transverse shear: the other stress in a bent beam",
        html: `<p>Wherever the bending moment changes along the span there is a shear force V, and V produces a <strong>transverse shear stress</strong> whose distribution is the mirror image of the bending profile: zero at the free top and bottom surfaces, maximum at the neutral axis.</p>
<p class="eq">&tau; = V Q / (I t)</p>
<p>Q is the first moment of the area <em>beyond</em> the level where you want &tau; (Q = A&prime;&#375;&prime;), and t is the width of the section at that level. Two results carry most interview questions:</p>
<ul>
<li><strong>Rectangle:</strong> &tau;<sub>max</sub> = 3V/2A at the neutral axis, exactly 1.5&times; the naive average V/A.</li>
<li><strong>I-beam:</strong> almost all of V is carried by the web, and &tau; &asymp; V/A<sub>web</sub> is within a few percent of the exact VQ/It. The flanges contribute almost nothing to shear, just as the web contributes almost nothing to bending.</li>
</ul>
<figure class="fig">${figShear}<figcaption>Transverse shear stress through the depth. In a rectangle the profile is parabolic and peaks at 3V/2A on the neutral axis; in an I-beam it jumps at the flange-to-web junction because the width t collapses from the flange width to the web thickness.</figcaption></figure>
<p><strong>When does shear matter?</strong> For a simply supported rectangular beam with a midspan point load, &sigma; = 3PL/2bh&sup2; and &tau; = 3P/4bh, so</p>
<p class="eq">&tau;/&sigma; = h/(2L)</p>
<p>Shear is negligible for a slender beam (L/h = 20 gives &tau; only 2.5% of &sigma;) and becomes a real check for <strong>short, deep members</strong>, and especially for materials whose shear allowable is a small fraction of their bending allowable: timber (roughly 1/8), composite laminates, adhesive joints, and thin webs. That is why a stubby timber beam splits horizontally along the neutral axis rather than snapping in tension.</p>
<p><strong>Shear flow</strong> is the same equation without dividing by width: q = VQ/I, in N per mm of length. It is the longitudinal force per unit length that the glue, welds, screws, or rivets in a built-up beam must transfer to make the pieces act as one section. Connector spacing follows directly: s = F<sub>connector</sub>/q.</p>`,
      },
      {
        heading: "Shape efficiency: the 2×4 and the I-beam",
        html: `<p>Because only the outer fibers work, the same material rearranged deeper is dramatically stronger. The classic demonstration is a 2&times;4 joist (actual 38 &times; 89 mm):</p>
<figure class="fig">${figTwoByFour}<figcaption>A 38 &times; 89 mm board bent about the horizontal axis. On edge, S = 38&middot;89&sup2;/6 = 50.2&times;10&sup3; mm&sup3; vs 89&middot;38&sup2;/6 = 21.4&times;10&sup3; mm&sup3; flat, a factor of h/b = 2.3 in strength, (h/b)&sup2; = 5.5 in stiffness.</figcaption></figure>
<p>In general, upright vs flat for a rectangle: <strong>strength improves by h/b, stiffness by (h/b)&sup2;</strong>. This is why floor joists always stand on edge.</p>
<p>The I-beam takes the idea to its limit: put almost all the area in two flanges far from the neutral axis, and keep just enough web to hold them apart and carry the shear.</p>
<figure class="fig">${figIBeam}<figcaption>A 60 &times; 100 rectangle vs an I-beam of identical area (flanges 100 &times; 20, web 10 &times; 200): I = 5.0&times;10&#8310; vs 55&times;10&#8310; mm&#8308;. Same weight, 11&times; stiffer, 4.6&times; lower peak stress.</figcaption></figure>
<p>Check the numbers with the parallel axis theorem: each flange contributes 100&middot;20&sup3;/12 + (2000)(110)&sup2; &asymp; 24.3&times;10&#8310; mm&#8308;, and the Ad&sup2; term is 99.7% of that. The web adds 6.7&times;10&#8310;. The flanges are doing essentially all the bending work.</p>
<p>The same logic explains the tube. At equal cross-sectional area (equal mass per metre), a tube must have a larger outer diameter than the solid rod it replaces, and every square millimetre sits at a larger radius, so I and S both climb sharply. A 40 mm solid rod and an equal-area 60 mm tube (7.6 mm wall) differ by 3.5&times; in I and 2.33&times; in S. For free.</p>`,
      },
      {
        heading: "Interview favorite: stronger without adding weight",
        html: `<p>"How would you make this beam stronger (or stiffer) without adding weight?" is a top-five mechanical interview question. Structure your answer as a hierarchy:</p>
<ol>
<li><strong>Redistribute the section:</strong> move material away from the neutral axis. Go deeper and thinner, switch rectangle &rarr; I-beam or tube, add flanges/ribs. Same area, much larger I and S.</li>
<li><strong>Remove useless material:</strong> material at the neutral axis carries almost no bending stress. Lightening holes in webs cost little strength. (Caveat: the web still carries shear, so don't perforate near supports where shear peaks.)</li>
<li><strong>Change the boundary conditions or load path:</strong> shorten the span, add a support, fix an end, or move the load toward a support. Better still, add a tie or strut that converts bending into axial load, an axially loaded member uses its whole area at once, so it beats any section change by a wide margin.</li>
<li><strong>Taper to the moment diagram:</strong> a cantilever's moment is maximum at the wall and zero at the tip. Deep at the root, slim at the tip (think of a wing spar or a diving board).</li>
</ol>
<div class="callout warn"><strong>Know the limits:</strong> deep-and-thin has a failure mode of its own, thin webs and compression flanges buckle (lateral-torsional buckling, local crippling), transverse shear starts to govern as the member gets stubby, and a very efficient bending section can be terrible in torsion if it is open. Mention these and you sound like someone who has built hardware; ignore them and a good interviewer will push until it breaks.</div>`,
      },
    ],
    equations: [
      { name: "Flexure formula", formula: "&sigma; = M c / I", note: "&sigma; is bending stress, M is internal moment, c is distance to outer fiber, and I is area moment about the neutral axis." },
      { name: "Section modulus", formula: "S = I/c, &nbsp;&sigma;<sub>max</sub> = M/S", note: "S packages section geometry. Larger S lowers peak bending stress for the same moment M." },
      { name: "Rectangle", formula: "I = b h&sup3;/12, &nbsp;S = b h&sup2;/6", note: "b is width and h is depth in the bending direction. Depth dominates because it is cubed." },
      { name: "Solid circle", formula: "I = &pi;d&#8308;/64, &nbsp;S = &pi;d&sup3;/32", note: "d is diameter for bending about any centroidal diameter. Tube uses &pi;(d<sub>o</sub>&#8308; &minus; d<sub>i</sub>&#8308;)/64." },
      { name: "Parallel axis theorem", formula: "I = I&#772; + A d&sup2;", note: "I&#772; is centroidal inertia of the piece, A is its area, and d is offset to the composite neutral axis." },
      { name: "Transverse shear stress", formula: "&tau; = V Q / (I t)", note: "Q is the first moment of the area beyond the cut level; t is the width there. Peaks at the neutral axis." },
      { name: "Rectangle shear peak", formula: "&tau;<sub>max</sub> = 3V / 2A", note: "Exactly 1.5&times; the average V/A. For an I-beam use &tau; &asymp; V/A<sub>web</sub> instead." },
      { name: "Shear flow for connectors", formula: "q = V Q / I, &nbsp;s = F<sub>conn</sub>/q", note: "q is force per unit length that glue, welds or screws must carry; s is the resulting fastener spacing." },
      { name: "Common max moments", formula: "PL (cantilever tip load), PL/4 (SS center load), wL&sup2;/8 (SS UDL)", note: "P is point load, w is uniform load, and L is span. Feed the correct M<sub>max</sub> into stress checks." },
    ],
    interviewTips: [
      "Lead with the one-line derivation: plane sections → linear strain → linear stress → σ = Mc/I. It shows you understand the formula rather than memorized it.",
      "State which fiber is in tension and which in compression before computing anything. Interviewers use it to check physical intuition, and it decides where a brittle material cracks.",
      "Keep the scalings straight under pressure: strength S ∝ h², stiffness I ∝ h³ for a rectangle; σ ∝ 1/d³ for a round bar.",
      "For any built-up section, expect a parallel axis theorem step, and point out that the Ad² term dwarfs the flange's own bh³/12.",
      "Volunteer the shear check on any short, deep member: τ_max = 3V/2A for a rectangle, and τ/σ ≈ h/2L tells you in one line whether it matters.",
      "When asked to improve a beam, give the hierarchy (deeper section → remove neutral-axis material → change supports/span or add a tie) and volunteer the buckling caveat before they ask.",
    ],
  },

  questions: [
    {
      id: "beam-bending-q01",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>Compute the second moment of area I of a rectangular cross-section 30 mm wide and 60 mm deep, about its horizontal centroidal axis (bending in the plane of the depth). Give your answer in mm&#8308;.</p>`,
      answer: 540000,
      unit: "mm⁴",
      explanation: `<p class="eq">I = b h&sup3;/12 = 30 &times; 60&sup3;/12 = 30 &times; 216,000/12 = <strong>540,000 mm&#8308;</strong></p>
<p>For a rectangle the dimension parallel to the load is cubed. Swapping b and h gives 60 &times; 30&sup3;/12 = 135,000 mm&#8308;, a factor of 4 low, and that error propagates into every stress and deflection downstream. The ratio (h/b)&sup2; = 4 checks it: the deep orientation should be 4&times; the flat one, and 540,000/135,000 = 4. &#10003;</p>`,
    },
    {
      id: "beam-bending-q02",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A rectangular steel beam is loaded in bending. Gauges bonded to the top and bottom faces read &minus;900 and +900 &micro;&epsilon;. A third gauge, bonded to the <em>side</em> face at exactly mid-depth, reads about 5 &micro;&epsilon;. What does that third reading tell you?</p>`,
      choices: [
        "The gauge has debonded: in bending, every fibre must strain a little",
        "The load must actually be axial, because axial strain is uniform",
        "The gauge sits on the neutral axis, where bending strain is zero; 5 &micro;&epsilon; is noise",
        "Transverse shear vanishes at mid-depth, so the gauge reads nothing",
      ],
      answer: 2,
      explanation: `<p>Bending strain is linear in distance from the neutral axis, &epsilon; = &minus;y/&rho;, so it passes through zero exactly on that axis. For a homogeneous rectangular section with no axial load the neutral axis sits at the <strong>centroid</strong>, mid-depth, which is precisely where this gauge is. A reading of 5 &micro;&epsilon; against &plusmn;900 &micro;&epsilon; on the faces is the expected answer, not a fault.</p>
<p>An <em>axial</em> load would give all three gauges the same sign and roughly the same magnitude, which is not what was measured. And the shear distribution is the <strong>opposite</strong> of the bending one: transverse shear is zero at the free faces and <em>maximum</em> at mid-depth, so this gauge sits at the shear peak rather than a shear null. A foil gauge aligned with the beam axis does not sense that shear anyway; you would need a rosette.</p>
<p>So is the material at mid-depth useless? No. It carries &tau;<sub>max</sub> = 3V/2A, which is why webs exist.</p>`,
    },
    {
      id: "beam-bending-q03",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>The cantilever shown is 1 m long and carries a 2 kN load at the tip. The cross-section is a rectangle 40 mm wide and 60 mm deep. Find the maximum bending stress, in MPa.</p>`,
      figure: figQ3,
      answer: 83.3,
      unit: "MPa",
      explanation: `<p class="eq">M = P L = 2000 N &times; 1 m = 2000 N&middot;m</p>
<p class="eq">S = bh&sup2;/6 = 0.04 &times; 0.06&sup2;/6 = 2.4&times;10<sup>&minus;5</sup> m&sup3;</p>
<p class="eq">&sigma; = M/S = 2000/2.4&times;10<sup>&minus;5</sup> = <strong>83.3 MPa</strong></p>
<p>Equivalently &sigma; = Mc/I with I = 7.2&times;10<sup>&minus;7</sup> m&#8308; and c = 0.030 m. That is about a 3&times; static margin against structural steel or 6061-T6, though you would still check fatigue if the load cycles. Top fibre is in tension for a downward tip load on a cantilever.</p>`,
    },
    {
      id: "beam-bending-q04",
      type: "mc",
      difficulty: 1,
      prompt: `<p>You double the <strong>depth</strong> h of a rectangular beam and keep everything else the same. Same width, same span, same load. What happens to the maximum bending stress and to the deflection?</p>`,
      choices: [
        "Stress falls to 1/2; deflection falls to 1/4",
        "Stress falls to 1/4; deflection falls to 1/8",
        "Stress falls to 1/4; deflection falls to 1/4",
        "Stress falls to 1/8; deflection falls to 1/8",
      ],
      answer: 1,
      explanation: `<p class="eq">&delta; &prop; 1/I with I &prop; h&sup3; &rarr; &delta; &rarr; <strong>1/8</strong></p>
<p class="eq">&sigma; = M/S with S &prop; h&sup2; &rarr; &sigma; &rarr; <strong>1/4</strong></p>
<p>Two different exponents, because c also doubles with the depth, so stress falls as h&sup3;/h = h&sup2; while stiffness gets the full h&sup3;. Deepening a beam helps deflection even more than it helps strength, so a member sized by stress usually has stiffness margin and not the reverse. The change also doubles the mass.</p>`,
    },
    {
      id: "beam-bending-q05",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A 40 &times; 90 mm plank carries the same vertical load bent (a) flat and (b) on edge, as shown. Compare the maximum bending stress in the two orientations.</p>`,
      figure: figQ5,
      choices: [
        "On edge the stress is 5.06&times; lower, the ratio is (h/b)&sup2;",
        "The stress is the same, because the area is unchanged",
        "On edge the stress is 2.25&times; lower, the ratio is h/b",
        "On edge the stress is 1.50&times; lower, the ratio is &radic;(h/b)",
      ],
      answer: 2,
      explanation: `<p class="eq">S<sub>edge</sub> = b h&sup2;/6 = 40 &times; 90&sup2;/6 = 54.0&times;10&sup3; mm&sup3;</p>
<p class="eq">S<sub>flat</sub> = 90 &times; 40&sup2;/6 = 24.0&times;10&sup3; mm&sup3;</p>
<p class="eq">&sigma;<sub>flat</sub>/&sigma;<sub>edge</sub> = 54/24 = 2.25 = h/b &#10003;</p>
<p>Flipping a rectangle on edge improves strength by h/b and stiffness by (h/b)&sup2;. The 5.06 option is the I ratio, which governs deflection rather than stress. In pure tension area is all that matters; in bending the <em>distribution</em> of area is everything.</p>`,
    },
    {
      id: "beam-bending-q06",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>An I-beam flange is a 100 mm &times; 20 mm rectangle whose centroid sits 60 mm from the beam's neutral axis. Using the parallel axis theorem, find the flange's contribution to the beam's I, in units of 10&#8310; mm&#8308;. (Flange bends about the axis parallel to its 100 mm side.)</p>`,
      answer: 7.27,
      unit: "×10⁶ mm⁴",
      explanation: `<p class="eq">I&#772; = b h&sup3;/12 = 100 &times; 20&sup3;/12 = 66,667 mm&#8308;</p>
<p class="eq">A d&sup2; = (100 &times; 20)(60)&sup2; = <strong>7,200,000 mm&#8308;</strong></p>
<p class="eq">I = 0.0667&times;10&#8310; + 7.20&times;10&#8310; = <strong>7.27&times;10&#8310; mm&#8308;</strong></p>
<p>The transport term is over 100&times; the flange&rsquo;s own I&#772;, and that lopsidedness is the design lesson of the I-beam. For thin flanges you can drop bh&sup3;/12 and quote I &asymp; Ad&sup2; within 1%. Dropping Ad&sup2; instead is wrong by a factor of 109.</p>`,
    },
    {
      id: "beam-bending-q07",
      type: "mc",
      difficulty: 1,
      prompt: `<p>Why is the I-beam an efficient shape for carrying bending loads?</p>`,
      choices: [
        "The web carries most of the bending moment, so flanges can be thin",
        "The I shape lowers stress concentrations compared with a rectangle",
        "The flanges resist the transverse shear and so protect the thin web",
        "Bending stress peaks at the outer fibres, so flanges go there",
      ],
      answer: 3,
      explanation: `<p>Bending stress is linear in distance from the neutral axis, so material at the outer fibres works hardest while material near the middle barely works. The I-beam concentrates area in two <strong>flanges</strong> at maximum distance, where I gets the benefit of Ad&sup2;, and uses a minimal <strong>web</strong> to hold the flanges apart and carry the transverse shear, which peaks at the neutral axis.</p>
<p>Two distractors invert the roles of web and flange. The stress-concentration option is a different mechanism, since an I-beam has re-entrant fillets and is no kinder to notches than a rectangle. Flanges take the moment, web takes the shear, and what limits the proportions is local buckling of the compression flange and shear buckling or crippling of the web.</p>`,
    },
    {
      id: "beam-bending-q09",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A solid round bar and a hollow tube have the <strong>same cross-sectional area</strong> (same weight per length) and carry the same bending moment. Which statement is correct?</p>`,
      choices: [
        "The solid bar wins, because it has no hole to weaken the section",
        "Stresses are equal, since stress depends only on area and moment",
        "The tube always wins, with no limit as the wall is made thinner",
        "The tube wins, because its area sits farther out, so I and S grow",
      ],
      answer: 3,
      explanation: `<p>With equal area the tube must have a larger outer diameter, and the material is pushed outward where the y&sup2; weighting in I = &int;y&sup2;dA makes it far more effective. Concretely: a 40 mm solid rod has I = 126&times;10&sup3; mm&#8308;, while an equal-area 60 mm tube with a 7.64 mm wall has I = 440&times;10&sup3; mm&#8308;. That is 3.5&times; more, and 2.33&times; the section modulus, at identical mass. Bike frames, driveshafts and scaffolding are tubes for this reason.</p>
<p>The equal-stresses option is axial-loading intuition misapplied: in pure tension only A matters and the two would indeed tie.</p>
<p>The no-limit option fails on <strong>local buckling</strong>. As the wall thins at constant area the diameter grows, and eventually the thin wall wrinkles or ovalizes, through the Brazier effect or local crippling, long before the material yields. A soda can is the everyday demonstration: superb stiffness-to-weight until the wall buckles at a touch.</p>`,
    },
    {
      id: "beam-bending-q10",
      type: "mc",
      difficulty: 3,
      prompt: `<p>The T-section shown (flange 100 &times; 20 mm on top, stem 20 &times; 80 mm below, total depth 100 mm) sags under a positive bending moment, putting the top in compression. Where is the bending stress magnitude highest, and why?</p>`,
      figure: figQ10,
      choices: [
        "Point A, top of the flange, the flange holds the most area",
        "Point B, bottom of the stem, which sits farther from the N.A.",
        "A and B are equal, the stress distribution is linear in y",
        "At the neutral axis, where the bending stress reaches its peak",
      ],
      answer: 1,
      explanation: `<p>Locate the centroid measuring down from the top face. Flange: A = 100 &times; 20 = 2000 mm&sup2; at y&#772; = 10 mm. Stem: A = 20 &times; 80 = <strong>1600 mm&sup2;</strong> at y&#772; = 20 + 40 = 60 mm.</p>
<p class="eq">y&#772; = (2000&middot;10 + 1600&middot;60)/(2000 + 1600) = 116,000/3600 = <strong>32.2 mm from the top</strong></p>
<p>Total depth is 100 mm, so c<sub>top</sub> = 32.2 mm and c<sub>bottom</sub> = 67.8 mm. Stress is linear in distance from the neutral axis, so</p>
<p class="eq">&sigma;<sub>B</sub>/&sigma;<sub>A</sub> = 67.8/32.2 = <strong>2.10</strong></p>
<p>B is in tension, A in compression. Three things go wrong here. Linear is not symmetric, and equal magnitudes top and bottom happen only when the centroid lands at mid-depth. Taking the stem as 20 &times; 100 = 2000 mm&sup2; double-counts the top 20 mm already claimed by the flange, giving y&#772; = 35 mm and a ratio of 1.9. And the neutral axis is where bending stress is <em>zero</em>, not peak.</p>
<p>With two different c values there are two section moduli, S<sub>top</sub> = I/c<sub>top</sub> and S<sub>bot</sub> = I/c<sub>bot</sub>, and the one to check is whichever sits on the side where the material is weaker.</p>`,
    },
    {
      id: "beam-bending-q13",
      type: "mc",
      difficulty: 3,
      prompt: `<p>An interviewer hands you a rectangular-section beam design that is overstressed in bending and says: "reduce the maximum stress, but you get <strong>no additional mass</strong>." What is the most effective first move?</p>`,
      choices: [
        "Keep the area constant but make the section deeper and thinner",
        "Keep the area constant but make the section wider and shallower",
        "Move material toward the neutral axis, where it is protected",
        "Switch to a higher-strength alloy of the same density and shape",
      ],
      answer: 0,
      explanation: `<p>At constant area A = bh, the section modulus S = bh&sup2;/6 = Ah/6 grows <strong>linearly with depth</strong>, so trade width for depth. Doubling depth while halving width at constant area halves the stress and quadruples I, so deflection drops 4&times;. Pushed to the limit, this logic invents the I-beam and the tube.</p>
<p>Wider-and-shallower moves the same area <em>closer</em> to the neutral axis and raises stress by the same factor. Moving material <em>to</em> the neutral axis is exactly backwards, since that is where material does nothing in bending, which is why lightening holes go there. And a stronger alloy raises the <em>allowable</em> rather than the actual stress; if the real constraint were deflection it would do nothing at all, because E barely varies between alloys of the same base metal.</p>
<p>Then flag the limit. Deep, thin sections eventually fail by lateral-torsional or local buckling, and as the member gets stubby transverse shear starts to govern, so check web and flange slenderness plus &tau;<sub>max</sub> = 3V/2A before shipping it.</p>`,
    },
    {
      id: "beam-bending-q14",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>The simply supported beam shown spans 3 m and carries a uniform load of 4 kN/m over the whole span. The cross-section is a rectangle 60 mm wide &times; 120 mm deep. Find the maximum bending stress, in MPa.</p>`,
      figure: figQ14,
      answer: 31.3,
      unit: "MPa",
      explanation: `<p class="eq">M<sub>max</sub> = w L&sup2;/8 = 4000 &times; 3&sup2;/8 = 4500 N&middot;m&nbsp;&nbsp;(at midspan)</p>
<p class="eq">S = b h&sup2;/6 = 0.060 &times; 0.120&sup2;/6 = 1.44&times;10<sup>&minus;4</sup> m&sup3;</p>
<p class="eq">&sigma; = M/S = <strong>31.3 MPa</strong></p>
<p>Using wL&sup2;/2, the cantilever result, gives 125 MPa. Swapping b and h gives 62.5 MPa. Tension is on the bottom face at midspan.</p>`,
    },
    {
      id: "beam-bending-q51",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A rectangular steel beam 25 mm wide and 100 mm deep carries an internal shear force V = 20 kN at a section. What is the maximum transverse shear stress on that section, in MPa?</p>`,
      answer: 12,
      unit: "MPa",
      explanation: `<p class="eq">&tau;<sub>max</sub> = 3V / (2A) = 3(20,000) / (2 &times; 2500) = <strong>12.0 MPa</strong></p>
<p>The transverse shear profile on a rectangle is parabolic, zero at the free faces and maximum at the neutral axis, peaking at exactly 1.5&times; the average. Quoting V/A = 8.0 MPa is 33% unconservative. Note where this stress lives: at mid-depth, exactly where bending stress is zero. The two peaks never coincide on a rectangle, but on an I-beam the flange-to-web junction sees both.</p>`,
    },
    {
      id: "beam-bending-q52",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>That same 25 mm wide &times; 100 mm deep beam is simply supported on a <strong>300 mm</strong> span with a 40 kN load at midspan. What is the ratio of maximum bending stress to maximum transverse shear stress on the section?</p>`,
      answer: 6,
      unit: "(dimensionless)",
      explanation: `<p class="eq">M<sub>max</sub> = PL/4 = 40,000 &times; 300/4 = 3.00&times;10<sup>6</sup> N&middot;mm</p>
<p class="eq">S = bh&sup2;/6 = 25(100)&sup2;/6 = 41,667 mm&sup3; &rarr; &sigma; = 3.00&times;10<sup>6</sup>/41,667 = 72.0 MPa</p>
<p class="eq">V = P/2 = 20,000 N &rarr; &tau;<sub>max</sub> = 3V/2A = 3(20,000)/(2 &times; 2500) = 12.0 MPa</p>
<p class="eq">&sigma;/&tau; = 72.0/12.0 = <strong>6.00</strong></p>
<p>The general result is worth memorising, because it answers whether shear matters in one line with no arithmetic:</p>
<p class="eq">&tau;/&sigma; = h/(2L)</p>
<p>Here h/2L = 100/600 = 1/6. &#10003; A slender beam at L/h = 20 gives &tau;/&sigma; = 2.5%, which is why textbook problems ignore shear. At L/h = 3, as here, shear is a sixth of bending, still not governing for steel where &tau;<sub>allow</sub> &asymp; 0.6&sigma;<sub>allow</sub>, but very much governing for timber or a composite laminate where the shear allowable can be an eighth of the bending allowable. Run the shear check whenever L/h drops below about 8, or whenever the material is weak between its layers.</p>`,
    },
    {
      id: "beam-bending-q53",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A Douglas-fir beam 140 mm wide &times; 240 mm deep is simply supported on an <strong>800 mm</strong> span and loaded with a single point load P at midspan. Allowable bending stress is 12 MPa; allowable horizontal shear stress is 1.5 MPa. What is the largest P the beam can carry, in kN?</p>`,
      answer: 67.2,
      unit: "kN",
      explanation: `<p>Short, deep, and made of a material weak in shear, so run <em>both</em> checks and take the smaller load.</p>
<p><strong>Bending limit:</strong></p>
<p class="eq">S = bh&sup2;/6 = 140(240)&sup2;/6 = 1.344&times;10<sup>6</sup> mm&sup3;</p>
<p class="eq">M<sub>allow</sub> = &sigma;<sub>allow</sub>S = 12(1.344&times;10<sup>6</sup>) = 1.613&times;10<sup>7</sup> N&middot;mm</p>
<p class="eq">P = 4M/L = 4(1.613&times;10<sup>7</sup>)/800 = 80,600 N = 80.6 kN</p>
<p><strong>Shear limit:</strong> V = P/2 at every section, and &tau;<sub>max</sub> = 3V/2A.</p>
<p class="eq">A = 140 &times; 240 = 33,600 mm&sup2;</p>
<p class="eq">V<sub>allow</sub> = 2A&tau;<sub>allow</sub>/3 = 2(33,600)(1.5)/3 = 33,600 N</p>
<p class="eq">P = 2V<sub>allow</sub> = <strong>67,200 N = 67.2 kN</strong></p>
<p><strong>Shear governs</strong>, at 83% of the bending capacity. The shortcut confirms it: &tau;/&sigma; = h/2L = 0.150 while the allowable ratio is 1.5/12 = 0.125. The <em>demand</em> ratio exceeds the <em>capacity</em> ratio, so shear wins, and it keeps winning for any span shorter than L = h&sigma;<sub>allow</sub>/(2&tau;<sub>allow</sub>) = 960 mm.</p>
<p>Timber design codes make you check horizontal shear on short spans for exactly this reason, and it is why an overloaded stubby timber beam splits along its neutral axis rather than snapping on the tension face. Computing only 80.6 kN misses the failure mode that actually happens.</p>`,
    },
    {
      id: "beam-bending-q54",
      type: "mc",
      difficulty: 2,
      prompt: `<p>The T-section on the left (flange 100 &times; 20 mm on top, stem 20 &times; 80 mm below) carries a <strong>sagging</strong> moment. Four candidate through-depth plots of bending stress are shown, compression drawn left of the axis and tension right. Which plot is correct?</p>`,
      figure: figQ54,
      choices: [
        "(a) linear, zero at mid-depth, equal peaks top and bottom face",
        "(b) parabolic, zero at both faces, peak at the neutral axis",
        "(c) linear, zero one third down, bigger peak at the stem tip",
        "(d) uniform compression above the axis, uniform tension below",
      ],
      answer: 2,
      explanation: `<p>Three facts pin the answer down. Elastic bending stress is <strong>linear</strong> in y, which kills the parabola and the uniform blocks. The zero crossing is at the <strong>centroid</strong>, and for this T that is y&#772; = (2000&middot;10 + 1600&middot;60)/3600 = 32.2 mm below the top, about a third of the way down the 100 mm depth rather than mid-depth. And the peak magnitudes therefore differ, with c<sub>bot</sub>/c<sub>top</sub> = 67.8/32.2 = 2.10, so the tensile peak at the stem tip is twice the compressive peak at the flange face. Only <strong>(c)</strong> has all three.</p>
<p>What each wrong plot is really showing: (a) is the correct answer for a <em>symmetric</em> section, the reflex of assuming every section is a rectangle. (b) is the <strong>transverse shear</strong> distribution &tau; = VQ/It, genuinely parabolic with its peak at the neutral axis, and swapping the two profiles is one of the most common mistakes in this topic. (d) is the <em>fully plastic</em> distribution, correct only after the whole section has yielded, and even then the neutral axis moves to the equal-area axis rather than the centroid.</p>
<p>Being able to sketch this in ten seconds is worth more than any single number. It tells you where to put the gauge, which face cracks, and which section modulus to check.</p>`,
    },
    {
      id: "beam-bending-q55",
      type: "mc",
      difficulty: 2,
      prompt: `<p>Two identical 50 mm wide &times; 150 mm deep planks are stacked to make a 300 mm deep beam. In case (1) they simply rest on each other and are free to slip at the interface; in case (2) the interface is fully glued. Compared with case (1), how much stronger and stiffer is case (2)?</p>`,
      figure: figQ55,
      choices: [
        "2&times; stronger and 2&times; stiffer",
        "4&times; stronger and 4&times; stiffer",
        "4&times; stronger and 8&times; stiffer",
        "2&times; stronger and 4&times; stiffer",
      ],
      answer: 3,
      explanation: `<p>Loose planks each bend about <em>their own</em> mid-height, so you add two independent sections. Glued planks share one neutral axis at 150 mm depth and the parallel axis theorem pays off.</p>
<p class="eq">I<sub>glued</sub> = 50(300)&sup3;/12 = 112.5&times;10&#8310; mm&#8308;</p>
<p class="eq">I<sub>loose</sub> = 2 &times; 50(150)&sup3;/12 = 2(14.06&times;10&#8310;) = 28.1&times;10&#8310; mm&#8308;</p>
<p class="eq">stiffness ratio = 112.5/28.1 = <strong>4&times;</strong></p>
<p class="eq">S<sub>glued</sub> = 50(300)&sup2;/6 = 750&times;10&sup3; mm&sup3;;&nbsp; S<sub>loose</sub> = 2 &times; 50(150)&sup2;/6 = 375&times;10&sup3; mm&sup3;</p>
<p class="eq">strength ratio = 750/375 = <strong>2&times;</strong></p>
<p>The two factors differ for the usual reason: doubling depth multiplies I by 2&sup3;, but c also doubles, so S only gains 2&sup2;/2 = 2. Answering 4 and 4, or 2 and 2, is the classic slip.</p>
<p>The physical point is what the question is really after. What the glue buys is <strong>shear transfer</strong>. Loose planks slide relative to each other at the interface, and you can see the ends step past one another; that sliding is exactly what a glue line, weld or row of screws prevents. The force it must carry is the shear flow q = VQ/I, and if your connectors are too weak or too sparse the section quietly degrades from the 4&times; case toward the 1&times; case. That is a real and common failure in built-up beams and bonded sandwich panels.</p>`,
    },
    {
      id: "beam-bending-q56",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>The welded plate girder shown has a top flange 200 &times; 12 mm, a web 8 &times; 176 mm, and a bottom flange 100 &times; 12 mm, for a total depth of 200 mm. Find the second moment of area about the horizontal centroidal axis, in units of 10&#8310; mm&#8308;.</p>`,
      figure: figQ56,
      answer: 32.9,
      unit: "×10⁶ mm⁴",
      explanation: `<p>The section is unsymmetric, so the neutral axis is not at mid-depth. Locate the centroid, measuring y down from the top face:</p>
<table>
<thead><tr><th>Piece</th><th>A (mm&sup2;)</th><th>y&#772; (mm)</th><th>A&middot;y&#772;</th></tr></thead>
<tbody>
<tr><td>Top flange 200&times;12</td><td>2400</td><td>6</td><td>14,400</td></tr>
<tr><td>Web 8&times;176</td><td>1408</td><td>100</td><td>140,800</td></tr>
<tr><td>Bottom flange 100&times;12</td><td>1200</td><td>194</td><td>232,800</td></tr>
</tbody>
</table>
<p class="eq">y&#772; = 388,000/5008 = <strong>77.5 mm from the top</strong>&nbsp;&nbsp;(not 100 mm)</p>
<p>Then the parallel axis theorem on each piece, with d measured from that centroid:</p>
<p class="eq">Top flange: 200(12)&sup3;/12 + 2400(71.5)&sup2; = 0.029&times;10&#8310; + 12.26&times;10&#8310; = 12.29&times;10&#8310;</p>
<p class="eq">Web: 8(176)&sup3;/12 + 1408(22.5)&sup2; = 3.63&times;10&#8310; + 0.71&times;10&#8310; = 4.35&times;10&#8310;</p>
<p class="eq">Bottom flange: 100(12)&sup3;/12 + 1200(116.5)&sup2; = 0.014&times;10&#8310; + 16.29&times;10&#8310; = 16.31&times;10&#8310;</p>
<p class="eq">I = 12.29 + 4.35 + 16.31 = <strong>32.9&times;10&#8310; mm&#8308;</strong></p>
<p>Assuming the neutral axis at mid-depth gives 34.5&times;10&#8310;, 5% high, and worse, it puts c on the wrong side. Dropping the Ad&sup2; terms leaves 3.67&times;10&#8310;, low by a factor of nine. The <em>smaller</em> bottom flange contributes the most, because it sits farthest from the centroid: distance beats area every time.</p>
<p>With c<sub>top</sub> = 77.5 and c<sub>bot</sub> = 122.5, S<sub>bot</sub> = 269&times;10&sup3; mm&sup3; is only 63% of S<sub>top</sub> = 425&times;10&sup3; mm&sup3;, so under a sagging moment the small bottom flange is the critical fibre. That is the price of an unsymmetric girder, and the reason you would only build one if the compression flange also needs the extra width for lateral stability.</p>`,
    },
    {
      id: "beam-bending-q57",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A rectangular aluminium extrusion is overstressed in bending. You need to <strong>double</strong> its section modulus with the smallest possible increase in mass per metre, keeping the shape rectangular. Which change does it?</p>`,
      choices: [
        "Increase the depth by 41%, which adds 41% mass",
        "Increase the width by 100%, which adds 100% mass",
        "Increase the depth by 100%, which adds 100% mass",
        "Increase width and depth by 41%, adding 100% mass",
      ],
      answer: 0,
      explanation: `<p class="eq">Depth route: S &prop; h&sup2; &rarr; need h &times; &radic;2 = 1.414 &rarr; mass +41%</p>
<p class="eq">Width route: S &prop; b &rarr; need b &times; 2 &rarr; mass +100%</p>
<p>S = bh&sup2;/6, so S is <strong>linear in width but quadratic in depth</strong> while mass is linear in both. That asymmetry is the whole answer: the same doubling of capacity costs 41% mass instead of 100%.</p>
<p>The other two options overshoot. Doubling the depth gives S &times; 4 for +100% mass, fine if you need 4&times; and wasteful if you need 2&times;. Growing both dimensions by 41% gives S &times; 2.83 for +100% mass, strictly worse than depth alone.</p>
<p>The same reasoning one step further is what produces I-beams: keep adding depth and take width back out until you are left with two flanges and a web. The caveats worth voicing are that a deeper extrusion must still fit the envelope, and a deeper, thinner section eventually runs into lateral-torsional buckling and die-tooling limits.</p>`,
    },
    {
      id: "beam-bending-q58",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>An aluminium shelf rail spans 900 mm simply supported and must carry a 1.2 kN load at midspan. The extrusion is 30 mm wide, and the allowable bending stress is 90 MPa. What minimum depth h does the rail need, in mm?</p>`,
      answer: 24.5,
      unit: "mm",
      explanation: `<p class="eq">M<sub>max</sub> = PL/4 = 1200(900)/4 = 2.70&times;10<sup>5</sup> N&middot;mm</p>
<p class="eq">S<sub>req</sub> = M/&sigma;<sub>allow</sub> = 2.70&times;10<sup>5</sup>/90 = 3000 mm&sup3;</p>
<p class="eq">S = bh&sup2;/6 &rarr; h = &radic;(6S/b) = &radic;(6 &times; 3000/30) = &radic;600 = <strong>24.5 mm</strong></p>
<p>This is the design direction of the flexure formula: find the moment, convert an allowable stress into a required section modulus, then invert the geometry. Round up to a stock 25 mm section for S = 3125 mm&sup3; and &sigma; = 86.4 MPa, comfortably inside the allowable.</p>
<p>Unit mixing is what catches people. Leaving M in N&middot;m while S is in mm&sup3; produces 3 mm&sup3; and a nonsensical depth. Keep everything in N and mm and the units fall out as N&middot;mm / mm&sup3; = N/mm&sup2; = MPa.</p>
<p>Say the next thing unprompted: this is a strength check only. A 900 mm span at 24.5 mm depth has L/h = 37, which is slender, so deflection will very likely govern before stress does. Compute &delta; = PL&sup3;/48EI and compare against a serviceability limit such as L/360 = 2.5 mm before committing to the size.</p>`,
    },
    {
      id: "beam-bending-q59",
      type: "mc",
      difficulty: 3,
      prompt: `<p>The four cross-sections shown all have a cross-sectional area of about 2000 mm&sup2;. Identical mass per metre. Bending is about the dashed horizontal axis. Rank them by section modulus (bending strength), largest first.</p>`,
      figure: figQ59,
      choices: [
        "Deep rectangle &gt; I-section &gt; round tube &gt; solid square",
        "I-section &gt; deep rectangle &asymp; round tube &gt; solid square",
        "Round tube &gt; I-section &gt; deep rectangle &gt; solid square",
        "All four are equal, because the cross-sectional areas match",
      ],
      answer: 1,
      explanation: `<p>Run the four numbers. This is a genuine two-minute whiteboard exercise.</p>
<p class="eq">Square 45&times;45: S = 45(45)&sup2;/6 = 15.2&times;10&sup3; mm&sup3;</p>
<p class="eq">Rectangle 20&times;100: S = 20(100)&sup2;/6 = 33.3&times;10&sup3; mm&sup3;</p>
<p class="eq">Tube &#8960;80, 9 mm wall: I = &pi;(80&#8308; &minus; 62.1&#8308;)/64 = 1.28&times;10&#8310; &rarr; S = I/40 = 32.0&times;10&sup3; mm&sup3;</p>
<p class="eq">I-section (60&times;12 flanges, 8&times;70 web, 94 deep): I = 2.67&times;10&#8310; &rarr; S = I/47 = 56.7&times;10&sup3; mm&sup3;</p>
<p>The ranking is I-section 56.7, then rectangle 33.3 and tube 32.0, then square 15.2. A spread of <strong>3.7&times;</strong> across shapes of identical mass, which is the headline: shape, not material, is the biggest lever in bending.</p>
<p>Two subtleties worth stating. The I-section wins even though it is <em>shallower</em> at 94 mm than the rectangle at 100 mm, because it puts its area in the flanges instead of smearing it uniformly, so depth alone is not the whole story. And the tube nearly ties the deep rectangle about this axis while being far superior in practice: equally strong about <em>every</em> axis, vastly better in torsion as a closed section, and it will not roll over in lateral-torsional buckling the way a 20 &times; 100 blade will. Ranking by one number and stopping there is the mistake.</p>`,
    },
  ],

  qna: [
    {
      id: "beam-bending-qa01",
      q: `<p>Derive or explain where the flexure formula &sigma; = Mc/I comes from.</p>`,
      a: `<p>Start with kinematics: when a beam bends, <strong>plane cross-sections remain plane</strong> and simply rotate, observable by bending an eraser with grid lines. That forces the axial strain to vary linearly with distance y from some axis: &epsilon; = &minus;y/&rho;, where &rho; is the radius of curvature. With a linear-elastic material, &sigma; = E&epsilon;, so stress is linear in y too. Now apply statics to the stress field: (1) net axial force must be zero, &int;&sigma; dA = 0, which requires the zero-stress axis (the <strong>neutral axis</strong>) to pass through the <strong>centroid</strong>; (2) the stress distribution's moment must equal the applied M: &int;&sigma;y dA = M. Substituting the linear field gives M = EI/&rho; and hence &sigma; = My/I, maximum &sigma; = Mc/I at the outer fiber. Assumptions worth stating: initially straight, slender beam; homogeneous linear-elastic material; bending about a principal axis; shear deformation negligible. The structure of the argument, kinematics then constitutive law then equilibrium, is the template for every strength-of-materials formula, and it is worth presenting that way.</p>`,
    },
    {
      id: "beam-bending-qa02",
      q: `<p>Why does the neutral axis pass through the centroid, and when would it not?</p>`,
      a: `<p>In pure bending there is no net axial force on the section, so the linear stress distribution must integrate to zero: &int;&sigma; dA = (E/&rho;)&int;y dA = 0, which is precisely the definition of the centroidal axis (&int;y dA = 0 about the centroid). So for a homogeneous, linear-elastic section, neutral axis = centroidal axis. It moves when any assumption breaks: (1) <strong>combined loading</strong>: add an axial force and the zero-stress line shifts (enough compression and the whole section is compressive, e.g. a prestressed concrete beam); (2) <strong>composite sections</strong>, where with two materials you weight areas by their moduli (transformed-section method), pulling the neutral axis toward the stiffer material, as with steel rebar in concrete; (3) <strong>plastic bending</strong>, where past yield the stress profile flattens, and at full plasticity the neutral axis moves to the axis that splits the <em>area</em> in half (equal-area axis), which differs from the centroid for unsymmetric sections; (4) <strong>curved beams</strong> like crane hooks, where the distribution is hyperbolic and the neutral axis sits inward of the centroid.</p>`,
    },
    {
      id: "beam-bending-qa03",
      q: `<p>Explain why I-beams are shaped the way they are. What does the web actually do?</p>`,
      a: `<p>Bending stress is linear in distance from the neutral axis, so the outer fibers do essentially all the work while material near the middle idles. An I-beam is the rational response: concentrate the area in two <strong>flanges</strong> as far from the neutral axis as possible, where the parallel axis theorem term Ad&sup2; makes each square millimetre count. For a typical flange, Ad&sup2; is ~100&times; its own bh&sup3;/12. The <strong>web</strong> has two jobs: hold the flanges apart at distance d, since without it two loose plates would slide and bend independently, and that relative sliding is exactly what shear flow resists; and carry the <strong>transverse shear</strong>, which peaks at the neutral axis where the flanges are absent. In fact &tau; &asymp; V/A<sub>web</sub> is accurate to a few percent for a rolled I-section, the mirror image of "the flanges take all the moment". Numbers make it vivid: rearranging a 60&times;100 rectangle into an equal-area I-beam of 240 depth multiplies I by ~11 and S by ~4.6 at identical weight. Limits of the shape: thin compression flanges and webs invite local and lateral-torsional buckling, webs need stiffeners where concentrated loads enter, and an I-beam is poor in torsion (open section). If the load twists, you want a closed box or tube instead.</p>`,
    },
    {
      id: "beam-bending-qa04",
      q: `<p>How would you make a beam stronger and stiffer in bending without adding weight? (Classic.)</p>`,
      a: `<p>Give a hierarchy, not one trick. <strong>1) Reshape the section:</strong> at constant area, S = Ah/6 for a rectangle grows linearly with depth. Go deeper and thinner, or better, move to an I, box, or tube section so material sits far from the neutral axis. This is the biggest lever: an equal-weight I-beam can be ~10&times; stiffer than a square bar. <strong>2) Remove low-stress material:</strong> lightening holes near the neutral axis (mid-web) cost little bending capacity, but keep them away from support regions where shear peaks. <strong>3) Attack the moment itself:</strong> shorten the span, move the load toward a support, add a support, or fix an end. M<sub>max</sub> drops linearly or better, and deflection drops with L&sup3;. Best of all, add a tie or strut that turns bending into axial load; an axially loaded member stresses its whole area uniformly, so it beats any section tweak by a wide margin. <strong>4) Taper to the moment diagram:</strong> match depth to |M(x)|. Deep at a cantilever root, slim at the tip (wing spars, diving boards). <strong>5) If the constraint is deflection, not strength,</strong> note that a stronger alloy does nothing (E is nearly constant within an alloy family). Only geometry or a different material class helps. Then volunteer the caveat: deep thin sections trade the stress problem for a <strong>buckling</strong> problem (lateral-torsional, web crippling) and, as the member gets stubby, for a <strong>shear</strong> problem. That caveat is usually what separates a good answer from a great one.</p>`,
    },
    {
      id: "beam-bending-qa05",
      q: `<p>What is the section modulus, and why do designers prefer it over I?</p>`,
      a: `<p>Section modulus S = I/c packages the two geometric quantities in the flexure formula into one number, so the design check collapses to &sigma;<sub>max</sub> = M/S. It is the <strong>strength</strong> rating of a cross-section in bending: given an allowable stress, the required section satisfies S &ge; M/&sigma;<sub>allow</sub>, one division. That is why steel handbooks tabulate S (with Z reserved for the plastic version) for every rolled shape. A designer scans the table for the lightest shape meeting S and is done. For a rectangle you can invert it directly: h &ge; &radic;(6M/b&sigma;<sub>allow</sub>). Key values: rectangle S = bh&sup2;/6, solid circle S = &pi;d&sup3;/32. The subtlety worth mentioning: <strong>S governs strength, I governs stiffness</strong>, and they scale differently. S &prop; h&sup2; but I &prop; h&sup3; for a rectangle. Two sections with equal S can have different I, so the lightest "strong-enough" beam may still deflect too much; precision equipment is usually sized by I (deflection) and merely checked against S. For unsymmetric sections like a T there are two section moduli (S<sub>top</sub> = I/c<sub>top</sub>, S<sub>bottom</sub> = I/c<sub>bottom</sub>) and you must check the one on the weaker side of the material.</p>`,
    },
    {
      id: "beam-bending-qa06",
      q: `<p>State the parallel axis theorem and explain when and why you need it.</p>`,
      a: `<p>The theorem: the second moment of area about any axis equals the value about the shape's own centroidal axis plus an area-transport term, <strong>I = I&#772; + Ad&sup2;</strong>, where d is the distance between the two parallel axes. It exists because I is defined about a specific axis: the tabulated bh&sup3;/12 and &pi;d&#8308;/64 are only valid about each shape's <em>own</em> centroid. You need it whenever you build a composite section: (1) locate the overall centroid by area-weighted average; (2) for each constituent rectangle or circle, take its own I&#772; and add A times the square of its centroid's offset from the overall neutral axis; (3) sum. Two important notes. First, the sign: I about a non-centroidal axis is always <em>larger</em>. You can never subtract Ad&sup2; going away from the centroid, and applying the theorem between two non-centroidal axes directly is invalid (always route through the centroid). Second, the design insight: for a flange 60 mm off-axis, Ad&sup2; can be two orders of magnitude bigger than the flange's own bh&sup3;/12. The theorem is not just bookkeeping; it is the quantitative reason spread-out sections (I-beams, honeycomb panels, truss chords) dominate structural design. The everyday failure of the same idea: two planks that are free to slip give 2 &times; bh&sup3;/12 with no transport term at all, which is why gluing them into one deep section quadruples the stiffness.</p>`,
    },
    {
      id: "beam-bending-qa07",
      q: `<p>Why is a 2&times;4 so much stronger on edge than flat? Put numbers on it.</p>`,
      a: `<p>Because bending strength depends on how <em>deep</em> the section is in the load direction, not how much wood there is. For a rectangle, S = bh&sup2;/6, with h the dimension parallel to the load. An actual 2&times;4 is 38 &times; 89 mm. On edge: S = 38 &times; 89&sup2;/6 = 50.2&times;10&sup3; mm&sup3;. Flat: S = 89 &times; 38&sup2;/6 = 21.4&times;10&sup3; mm&sup3;. Ratio = 89/38 = <strong>2.3&times; stronger on edge</strong>, at identical weight. Stiffness is even more dramatic: I = bh&sup3;/12 gives 2.23&times;10&#8310; vs 0.41&times;10&#8310; mm&#8308;, ratio (h/b)&sup2; = <strong>5.5&times; stiffer</strong>, so a flat joist feels bouncy long before it breaks. (Cross-check the two: I<sub>edge</sub> = S<sub>edge</sub>&middot;c = 50.2&times;10&sup3; &times; 44.5 = 2.23&times;10&#8310; mm&#8308;. &#10003;) The general rules to quote: strength improves by h/b, stiffness by (h/b)&sup2;. This is why floor joists, rafters and bookshelf stiffeners always stand on edge, and it is the same principle, continued, that produces the I-beam. What stops an extremely tall, thin plank is lateral-torsional buckling. Deep narrow rectangles roll over sideways under load, which is why long joists get blocking or bridging between them.</p>`,
    },
    {
      id: "beam-bending-qa08",
      q: `<p>When does &sigma; = Mc/I stop being valid, and what do you use instead?</p>`,
      a: `<p>Walk the assumptions and break each one. <strong>(1) Yielding:</strong> past the proportional limit the linear profile flattens; the section carries moment up to the plastic moment M<sub>p</sub> = &sigma;<sub>y</sub>Z (for a rectangle Z = bh&sup2;/4, a shape factor of 1.5 over the elastic S = bh&sup2;/6). Use plastic analysis. <strong>(2) Short, stubby beams:</strong> for L/h below roughly 5, shear deformation and the plane-sections assumption degrade. Use Timoshenko beam theory, and check &tau;<sub>max</sub> = 3V/2A, because for timber and composites shear often governs outright (&tau;/&sigma; &asymp; h/2L tells you in one line). <strong>(3) Sharply curved beams</strong> (crane hooks, chain links): the strain distribution becomes hyperbolic and the neutral axis shifts toward the center of curvature. Use the Winkler curved-beam formula; the inner fiber stress is higher than Mc/I predicts. <strong>(4) Stress concentrations:</strong> holes, fillets, and notches multiply the nominal Mc/I by K<sub>t</sub>, and the formula gives only the far-field value. <strong>(5) Thin-walled and unsymmetric sections:</strong> loads not through the shear center add torsion; bending about a non-principal axis needs the generalized (skew bending) formula. <strong>(6) Instability:</strong> thin compression flanges and deep slender webs can buckle below the material limit, so a stability check governs rather than a stress formula. <strong>(7) Composite or built-up sections</strong> whose connectors slip: the assumed I never materializes. Name the assumption you are violating, then name the replacement tool.</p>`,
    },
    {
      id: "beam-bending-qa09",
      q: `<p>For the same weight, when would you choose a tube over a solid bar in bending, and what limits how thin the tube can get?</p>`,
      a: `<p>Almost always choose the tube, if bending (or torsion) dominates. At equal area (equal weight), the tube's material sits at larger radius; since I = &int;y&sup2;dA weights area by distance squared, the tube gets substantially larger I and S, hence lower stress and deflection per kilogram. Concretely: a 40 mm solid rod (A = 1257 mm&sup2;) has I = 126&times;10&sup3; mm&#8308; and S = 6.28&times;10&sup3; mm&sup3;; an equal-area 60 mm tube with a 7.64 mm wall has I = 440&times;10&sup3; mm&#8308; and S = 14.7&times;10&sup3; mm&sup3;. 3.5&times; the stiffness and 2.3&times; the strength for free. This is why bike frames, driveshafts, golf shafts, scaffolding, and aircraft structures are tubular. The gains grow as the tube gets larger in diameter and thinner in wall, but three practical limits stop you: <strong>(1) local buckling</strong>, a thin wall in compression wrinkles (and in bending the cross-section also ovalizes, the Brazier effect), collapsing well below material yield; a soda can shows both the efficiency and the failure mode; thin shells are also imperfection-sensitive, so real knockdown factors are severe; <strong>(2) envelope and joints</strong>, a big diameter may not fit the assembly, and thin walls are hard to weld, clamp, or bolt without crushing (hence inserts and doublers at fittings); <strong>(3) dents and handling</strong>, thin walls are vulnerable to local damage that seeds buckles. When would the solid bar win? When loading is dominated by bearing or contact or wear, when the part is tiny (minimum gauge limits), or when machining cost trumps mass. The strong answer names the y&sup2; weighting for the "why" and local buckling as the limit.</p>`,
    },
    {
      id: "beam-bending-qa10",
      q: `<p>A short, deep beam is loaded near its support. Walk me through deciding whether bending or transverse shear governs.</p>`,
      a: `<p>Do it in three moves. <strong>1) Get both demands.</strong> For a rectangle, &sigma; = Mc/I = M/(bh&sup2;/6) and &tau;<sub>max</sub> = 3V/2A at the neutral axis. Note the 1.5 factor over the naive V/A, which people forget and then run 33% unconservative. For an I-section use &tau; &asymp; V/A<sub>web</sub> instead; the flanges carry almost none of the shear. <strong>2) Use the scaling shortcut before computing anything.</strong> For a simply supported rectangular beam with a midspan point load, &tau;/&sigma; = h/(2L). At L/h = 20 shear is 2.5% of bending and irrelevant; at L/h = 3 it is 17%; below L/h &asymp; 2 it dominates. So the span-to-depth ratio alone tells you whether to bother. <strong>3) Compare demands to the right allowables, not to each other.</strong> This is the step candidates skip. Shear governs when &tau;/&tau;<sub>allow</sub> &gt; &sigma;/&sigma;<sub>allow</sub>, i.e. when h/2L exceeds &tau;<sub>allow</sub>/&sigma;<sub>allow</sub>. For steel that ratio is roughly 0.6, so shear essentially never governs a steel beam of sane proportions. For timber it is about 1/8, for many composite laminates and adhesive joints it is worse, so a stubby timber beam or a sandwich panel will split along the neutral axis long before the outer fibers reach their bending limit. Worked example: a 140 &times; 240 mm fir beam on an 800 mm span (12 MPa bending, 1.5 MPa shear allowables) takes 80.6 kN by bending but only 67.2 kN by shear. Shear wins by 17%. Then add the caveats: a load applied <em>close to a support</em> mostly arches straight into it rather than bending the beam, but it does put the full reaction into a small area, so web crippling and local bearing become the next checks; and drilling a lightening hole at mid-depth, which is harmless for bending. Lands exactly on the shear peak.</p>`,
    },
  ],
};

export default content;
