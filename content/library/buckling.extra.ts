import type { Question } from "../types";

// ---------------------------------------------------------------------------
// Additional buckling question bank (merged after the base questions in
// content/index.ts). Figure ids are prefixed bk4-…bk16-; the lesson figures in
// buckling.ts own bk1-…bk3-.
//
// SVG RULE: never put HTML <sub>/<sup> inside an SVG <text>. They are on the
// HTML5 foreign-content breakout list, so the parser exits the <svg> at that
// tag and every later element is discarded. Use
// <tspan baseline-shift="sub" font-size="9">…</tspan>.
// ---------------------------------------------------------------------------

// bk4 — two steels on one strength/slenderness chart. The yield cap and the
// Johnson parabola move with S_y; the Euler branch is shared.
const figTwoSteels = `<svg viewBox="0 0 460 268" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bk4-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <text x="30" y="38" fill="#64748b" font-size="12">&sigma;<tspan baseline-shift="sub" font-size="9">cr</tspan> (MPa) &mdash; both steels have E = 200 GPa</text>
  <line x1="76" y1="210" x2="436" y2="210" stroke="#64748b" stroke-width="1.5" marker-end="url(#bk4-ax)"/>
  <line x1="76" y1="210" x2="76" y2="48" stroke="#64748b" stroke-width="1.5" marker-end="url(#bk4-ax)"/>
  <text x="436" y="230" text-anchor="end" fill="#64748b" font-size="12">slenderness KL/r</text>
  <line x1="161" y1="210" x2="161" y2="205" stroke="#64748b"/>
  <text x="161" y="224" text-anchor="middle" fill="#94a3b8" font-size="11">50</text>
  <line x1="246" y1="210" x2="246" y2="205" stroke="#64748b"/>
  <text x="246" y="224" text-anchor="middle" fill="#94a3b8" font-size="11">100</text>
  <line x1="331" y1="210" x2="331" y2="205" stroke="#64748b"/>
  <text x="331" y="224" text-anchor="middle" fill="#94a3b8" font-size="11">150</text>
  <line x1="416" y1="210" x2="416" y2="205" stroke="#64748b"/>
  <text x="416" y="224" text-anchor="middle" fill="#94a3b8" font-size="11">200</text>
  <line x1="76" y1="171.5" x2="81" y2="171.5" stroke="#64748b"/>
  <text x="70" y="175" text-anchor="end" fill="#94a3b8" font-size="11">200</text>
  <line x1="76" y1="133" x2="81" y2="133" stroke="#64748b"/>
  <text x="70" y="137" text-anchor="end" fill="#94a3b8" font-size="11">400</text>
  <line x1="76" y1="94.5" x2="81" y2="94.5" stroke="#64748b"/>
  <text x="70" y="98" text-anchor="end" fill="#94a3b8" font-size="11">600</text>

  <line x1="76" y1="75.2" x2="203.7" y2="75.2" stroke="#dc2626" stroke-dasharray="6 4" stroke-width="1.4"/>
  <text x="84" y="70" fill="#dc2626" font-size="11">S<tspan baseline-shift="sub" font-size="9">y</tspan> = 700 MPa alloy steel</text>
  <path d="M76,75.2 L84.5,75.5 L93,76.4 L101.5,77.9 L110,80 L118.5,82.7 L127,86 L135.5,89.9 L144,94.4 L152.5,99.4 L161,105.1 L169.5,111.4 L178,118.3 L186.5,125.7 L195,133.8 L203.5,142.4 L203.7,142.6" fill="none" stroke="#dc2626" stroke-width="2.4"/>

  <line x1="76" y1="161.9" x2="289.6" y2="161.9" stroke="#0f766e" stroke-dasharray="6 4" stroke-width="1.4"/>
  <text x="84" y="156" fill="#0f766e" font-size="11">S<tspan baseline-shift="sub" font-size="9">y</tspan> = 250 MPa mild steel</text>
  <path d="M76,161.9 L84.5,161.9 L93,162 L101.5,162.2 L110,162.5 L118.5,162.8 L127,163.2 L135.5,163.7 L144,164.3 L152.5,165 L161,165.7 L169.5,166.5 L178,167.4 L186.5,168.3 L195,169.3 L203.5,170.4 L212,171.6 L220.5,172.9 L229,174.2 L237.5,175.6 L246,177.1 L254.5,178.7 L263,180.3 L271.5,182 L280,183.8 L288.5,185.7 L289.6,185.9" fill="none" stroke="#0f766e" stroke-width="2.4"/>

  <path d="M161,58 L165.2,72.1 L169.5,84.4 L173.8,95.1 L178,104.5 L182.2,112.7 L186.5,120.1 L190.8,126.6 L195,132.5 L199.2,137.7 L203.5,142.4 L207.8,146.7 L212,150.6 L216.2,154.2 L220.5,157.4 L224.8,160.4 L229,163.1 L233.2,165.6 L237.5,167.9 L241.8,170 L246,172 L250.2,173.8 L254.5,175.5 L258.8,177.1 L263,178.6 L267.2,180 L271.5,181.3 L275.8,182.5 L280,183.6 L284.2,184.7 L288.5,185.7 L292.8,186.6 L297,187.5 L301.2,188.4 L305.5,189.2 L309.8,189.9 L314,190.6 L318.2,191.3 L322.5,191.9 L326.8,192.5 L331,193.1 L335.2,193.7 L339.5,194.2 L343.8,194.7 L348,195.2 L352.2,195.6 L356.5,196 L360.8,196.5 L365,196.9 L369.2,197.2 L373.5,197.6 L377.8,197.9 L382,198.3 L386.2,198.6 L390.5,198.9 L394.8,199.2 L399,199.5 L403.2,199.7 L407.5,200 L411.8,200.3 L416,200.5" fill="none" stroke="#1d4ed8" stroke-width="3"/>

  <circle cx="203.7" cy="142.6" r="4.5" fill="#fff" stroke="#dc2626" stroke-width="2"/>
  <circle cx="289.6" cy="185.9" r="4.5" fill="#fff" stroke="#0f766e" stroke-width="2"/>
  <line x1="203.7" y1="210" x2="203.7" y2="147" stroke="#94a3b8" stroke-dasharray="3 3"/>
  <line x1="289.6" y1="210" x2="289.6" y2="190" stroke="#94a3b8" stroke-dasharray="3 3"/>
  <text x="203.7" y="205" text-anchor="middle" fill="#dc2626" font-size="11">75</text>
  <text x="289.6" y="205" text-anchor="middle" fill="#0f766e" font-size="11">126</text>
  <text x="366" y="176" text-anchor="middle" fill="#1d4ed8" font-size="11">shared Euler branch</text>
  <line x1="366" y1="181" x2="360" y2="192" stroke="#1d4ed8" stroke-width="1"/>
  <text x="230" y="252" text-anchor="middle" fill="#64748b" font-size="11">Past KL/r &asymp; 126 the two steels give the same capacity: E is what is left in the formula.</text>
</svg>`;

// bk5 — weak vs strong axis of a rectangular tube.
const figAxes = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bk5-tip" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" fill="#334155" font-weight="600">100 &times; 50 &times; 4 rectangular tube: which axis does it pick?</text>
  <rect x="77.5" y="63" width="65" height="130" fill="#dbeafe" stroke="#334155" stroke-width="2"/>
  <rect x="82.7" y="68.2" width="54.6" height="119.6" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <line x1="58" y1="128" x2="162" y2="128" stroke="#64748b" stroke-dasharray="6 4"/>
  <line x1="110" y1="46" x2="110" y2="210" stroke="#64748b" stroke-dasharray="6 4"/>
  <text x="168" y="132" fill="#64748b" font-size="12">x</text>
  <text x="110" y="40" text-anchor="middle" fill="#64748b" font-size="12">y</text>
  <line x1="77.5" y1="204" x2="142.5" y2="204" stroke="#64748b" stroke-width="1"/>
  <line x1="77.5" y1="200" x2="77.5" y2="208" stroke="#64748b" stroke-width="1"/>
  <line x1="142.5" y1="200" x2="142.5" y2="208" stroke="#64748b" stroke-width="1"/>
  <text x="110" y="220" text-anchor="middle" fill="#64748b" font-size="11">50 mm</text>
  <line x1="40" y1="63" x2="40" y2="193" stroke="#64748b" stroke-width="1"/>
  <line x1="36" y1="63" x2="44" y2="63" stroke="#64748b" stroke-width="1"/>
  <line x1="36" y1="193" x2="44" y2="193" stroke="#64748b" stroke-width="1"/>
  <text x="34" y="132" text-anchor="end" fill="#64748b" font-size="11">100</text>
  <text x="110" y="240" text-anchor="middle" fill="#334155" font-size="11">I about x-x = 1.44&times;10&#8310; mm&#8308;</text>

  <line x1="340" y1="60" x2="340" y2="196" stroke="#94a3b8" stroke-dasharray="4 4"/>
  <path d="M340,60 C378,94 378,162 340,196" fill="none" stroke="#1d4ed8" stroke-width="2.8"/>
  <circle cx="340" cy="60" r="4.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="340" cy="196" r="4.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <line x1="326" y1="196" x2="354" y2="196" stroke="#334155" stroke-width="2"/>
  <line x1="328" y1="206" x2="334" y2="198" stroke="#64748b"/>
  <line x1="338" y1="206" x2="344" y2="198" stroke="#64748b"/>
  <line x1="348" y1="206" x2="354" y2="198" stroke="#64748b"/>
  <line x1="340" y1="128" x2="374" y2="128" stroke="#1d4ed8" stroke-width="1.4" marker-end="url(#bk5-tip)"/>
  <text x="380" y="118" fill="#1d4ed8" font-size="11">bends across</text>
  <text x="380" y="132" fill="#1d4ed8" font-size="11">the 50 mm width</text>
  <text x="330" y="240" text-anchor="middle" fill="#1d4ed8" font-size="11">I about y-y = 0.474&times;10&#8310; mm&#8308; governs (3.0&times; smaller)</text>
</svg>`;

// bk6 — where the brace goes decides what you get.
const figBracePos = `<svg viewBox="0 0 460 268" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bk6-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" fill="#334155" font-weight="600">The longest unbraced segment sets the capacity</text>
  <line x1="90" y1="30" x2="90" y2="48" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bk6-load)"/>
  <line x1="230" y1="30" x2="230" y2="48" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bk6-load)"/>
  <line x1="370" y1="30" x2="370" y2="48" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bk6-load)"/>
  <line x1="90" y1="56" x2="90" y2="206" stroke="#94a3b8" stroke-dasharray="4 4"/>
  <line x1="230" y1="56" x2="230" y2="206" stroke="#94a3b8" stroke-dasharray="4 4"/>
  <line x1="370" y1="56" x2="370" y2="206" stroke="#94a3b8" stroke-dasharray="4 4"/>

  <path d="M90,56 L93.1,63.5 L96.2,71 L99.1,78.5 L101.8,86 L104.1,93.5 L106.2,101 L107.8,108.5 L109,116 L109.8,123.5 L110,131 L109.8,138.5 L109,146 L107.8,153.5 L106.2,161 L104.1,168.5 L101.8,176 L99.1,183.5 L96.2,191 L93.1,198.5 L90,206" fill="none" stroke="#1d4ed8" stroke-width="2.6"/>
  <path d="M230,56 L233.1,62.2 L236,68.5 L238.5,74.8 L240.4,81 L241.6,87.2 L242,93.5 L241.6,99.8 L240.4,106 L238.5,112.2 L236,118.5 L233.1,124.8 L230,131" fill="none" stroke="#1d4ed8" stroke-width="2.6"/>
  <path d="M230,131 L226.9,137.2 L224,143.5 L221.5,149.8 L219.6,156 L218.4,162.2 L218,168.5 L218.4,174.8 L219.6,181 L221.5,187.2 L224,193.5 L226.9,199.8 L230,206" fill="none" stroke="#1d4ed8" stroke-width="2.6"/>
  <path d="M370,56 L372.2,61 L374.1,66 L375.7,71 L376.7,76 L377,81 L376.7,86 L375.7,91 L374.1,96 L372.2,101 L370,106" fill="none" stroke="#1d4ed8" stroke-width="2.6"/>
  <path d="M370,106 L366.9,112.2 L363.9,118.5 L361.1,124.8 L358.7,131 L356.7,137.2 L355.2,143.5 L354.3,149.8 L354,156 L354.3,162.2 L355.2,168.5 L356.7,174.8 L358.7,181 L361.1,187.2 L363.9,193.5 L366.9,199.8 L370,206" fill="none" stroke="#1d4ed8" stroke-width="2.6"/>

  <g stroke="#334155" stroke-width="2" fill="none">
    <line x1="76" y1="56" x2="104" y2="56"/><line x1="76" y1="206" x2="104" y2="206"/>
    <line x1="216" y1="56" x2="244" y2="56"/><line x1="216" y1="206" x2="244" y2="206"/>
    <line x1="356" y1="56" x2="384" y2="56"/><line x1="356" y1="206" x2="384" y2="206"/>
  </g>
  <circle cx="90" cy="56" r="4" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="90" cy="206" r="4" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="230" cy="56" r="4" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="230" cy="206" r="4" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="370" cy="56" r="4" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="370" cy="206" r="4" fill="#fff" stroke="#334155" stroke-width="2"/>

  <polygon points="230,131 246,124 246,138" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <line x1="248" y1="120" x2="248" y2="142" stroke="#dc2626" stroke-width="2"/>
  <polygon points="370,106 386,99 386,113" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <line x1="388" y1="95" x2="388" y2="117" stroke="#dc2626" stroke-width="2"/>

  <line x1="46" y1="56" x2="46" y2="206" stroke="#64748b" stroke-width="1"/>
  <line x1="42" y1="56" x2="50" y2="56" stroke="#64748b" stroke-width="1"/>
  <line x1="42" y1="206" x2="50" y2="206" stroke="#64748b" stroke-width="1"/>
  <text x="38" y="134" text-anchor="end" fill="#64748b" font-size="11">3.0 m</text>
  <text x="404" y="82" fill="#dc2626" font-size="11">1.0 m</text>
  <text x="404" y="160" fill="#dc2626" font-size="11">2.0 m</text>

  <line x1="20" y1="220" x2="440" y2="220" stroke="#e2e8f0"/>
  <text x="90" y="238" text-anchor="middle" fill="#334155" font-size="12">no brace</text>
  <text x="230" y="238" text-anchor="middle" fill="#334155" font-size="12">brace at mid-height</text>
  <text x="370" y="238" text-anchor="middle" fill="#334155" font-size="12">brace at the third point</text>
  <text x="90" y="257" text-anchor="middle" fill="#1d4ed8" font-weight="600">1.0 &times;</text>
  <text x="230" y="257" text-anchor="middle" fill="#1d4ed8" font-weight="600">4.0 &times;</text>
  <text x="370" y="257" text-anchor="middle" fill="#1d4ed8" font-weight="600">2.25 &times;</text>
</svg>`;

// bk7 — global column mode vs local wall wrinkling on the same tube.
const figLocalGlobal = `<svg viewBox="0 0 460 252" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bk7-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" fill="#334155" font-weight="600">One tube, two independent instabilities</text>
  <line x1="92" y1="30" x2="92" y2="48" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bk7-load)"/>
  <line x1="320" y1="30" x2="320" y2="48" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bk7-load)"/>

  <path d="M83,56 L87.3,64.8 L91.4,73.5 L95.2,82.2 L98.6,91 L101.3,99.8 L103.3,108.5 L104.6,117.2 L105,126 L104.6,134.8 L103.3,143.5 L101.3,152.2 L98.6,161 L95.2,169.8 L91.4,178.5 L87.3,187.2 L83,196" fill="none" stroke="#334155" stroke-width="2"/>
  <path d="M101,56 L105.3,64.8 L109.4,73.5 L113.2,82.2 L116.6,91 L119.3,99.8 L121.3,108.5 L122.6,117.2 L123,126 L122.6,134.8 L121.3,143.5 L119.3,152.2 L116.6,161 L113.2,169.8 L109.4,178.5 L105.3,187.2 L101,196" fill="none" stroke="#334155" stroke-width="2"/>
  <line x1="83" y1="56" x2="101" y2="56" stroke="#334155" stroke-width="2"/>
  <line x1="83" y1="196" x2="101" y2="196" stroke="#334155" stroke-width="2"/>
  <line x1="70" y1="196" x2="114" y2="196" stroke="#334155" stroke-width="2.5"/>
  <line x1="72" y1="206" x2="78" y2="198" stroke="#64748b"/>
  <line x1="88" y1="206" x2="94" y2="198" stroke="#64748b"/>
  <line x1="104" y1="206" x2="110" y2="198" stroke="#64748b"/>
  <text x="92" y="226" text-anchor="middle" fill="#334155" font-size="12">global column mode</text>
  <text x="92" y="242" text-anchor="middle" fill="#1d4ed8" font-size="11">set by KL and I</text>

  <line x1="300" y1="56" x2="300" y2="196" stroke="#334155" stroke-width="2"/>
  <line x1="340" y1="56" x2="340" y2="196" stroke="#334155" stroke-width="2"/>
  <line x1="300" y1="56" x2="340" y2="56" stroke="#334155" stroke-width="2"/>
  <line x1="300" y1="196" x2="340" y2="196" stroke="#334155" stroke-width="2"/>
  <line x1="286" y1="196" x2="354" y2="196" stroke="#334155" stroke-width="2.5"/>
  <line x1="288" y1="206" x2="294" y2="198" stroke="#64748b"/>
  <line x1="308" y1="206" x2="314" y2="198" stroke="#64748b"/>
  <line x1="328" y1="206" x2="334" y2="198" stroke="#64748b"/>
  <g stroke="#1d4ed8" stroke-width="1.6" fill="none">
    <path d="M300,100 Q310,92 320,100 Q330,108 340,100"/>
    <path d="M300,114 Q310,122 320,114 Q330,106 340,114"/>
    <path d="M300,128 Q310,120 320,128 Q330,136 340,128"/>
    <path d="M300,142 Q310,150 320,142 Q330,134 340,142"/>
    <path d="M300,156 Q310,148 320,156 Q330,164 340,156"/>
  </g>
  <line x1="352" y1="96" x2="352" y2="160" stroke="#1d4ed8" stroke-width="1"/>
  <line x1="348" y1="96" x2="356" y2="96" stroke="#1d4ed8" stroke-width="1"/>
  <line x1="348" y1="160" x2="356" y2="160" stroke="#1d4ed8" stroke-width="1"/>
  <text x="362" y="122" fill="#1d4ed8" font-size="11">wrinkle</text>
  <text x="362" y="136" fill="#1d4ed8" font-size="11">band</text>
  <text x="320" y="226" text-anchor="middle" fill="#334155" font-size="12">local wall mode</text>
  <text x="320" y="242" text-anchor="middle" fill="#1d4ed8" font-size="11">set by D/t &mdash; length does not enter</text>
</svg>`;

// bk8 — a longitudinal stiffener halves b and quadruples the plate stress.
const figWeb = `<svg viewBox="0 0 460 254" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" fill="#334155" font-weight="600">Web panel in compression: &sigma;<tspan baseline-shift="sub" font-size="9">cr</tspan> scales with (t/b)&sup2;</text>
  <rect x="62" y="56" width="130" height="140" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
  <g stroke="#1d4ed8" stroke-width="1.5" fill="none" stroke-dasharray="5 3">
    <ellipse cx="95" cy="126" rx="24" ry="56"/>
    <ellipse cx="159" cy="126" rx="24" ry="56"/>
  </g>
  <line x1="48" y1="56" x2="48" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="44" y1="56" x2="52" y2="56" stroke="#64748b" stroke-width="1"/>
  <line x1="44" y1="196" x2="52" y2="196" stroke="#64748b" stroke-width="1"/>
  <text x="42" y="130" text-anchor="end" fill="#64748b" font-size="11">b = 600</text>
  <text x="127" y="214" text-anchor="middle" fill="#334155" font-size="12">t = 6 mm, unstiffened</text>
  <text x="127" y="232" text-anchor="middle" fill="#dc2626" font-size="12" font-weight="600">&sigma;<tspan baseline-shift="sub" font-size="9">cr</tspan> = 72 MPa</text>
  <text x="127" y="248" text-anchor="middle" fill="#64748b" font-size="11">buckles well below yield</text>

  <rect x="268" y="56" width="130" height="140" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
  <line x1="268" y1="126" x2="398" y2="126" stroke="#334155" stroke-width="5"/>
  <g stroke="#1d4ed8" stroke-width="1.5" fill="none" stroke-dasharray="5 3">
    <ellipse cx="300" cy="91" rx="16" ry="26"/>
    <ellipse cx="333" cy="91" rx="16" ry="26"/>
    <ellipse cx="366" cy="91" rx="16" ry="26"/>
    <ellipse cx="300" cy="161" rx="16" ry="26"/>
    <ellipse cx="333" cy="161" rx="16" ry="26"/>
    <ellipse cx="366" cy="161" rx="16" ry="26"/>
  </g>
  <line x1="254" y1="56" x2="254" y2="126" stroke="#64748b" stroke-width="1"/>
  <line x1="250" y1="56" x2="258" y2="56" stroke="#64748b" stroke-width="1"/>
  <line x1="250" y1="126" x2="258" y2="126" stroke="#64748b" stroke-width="1"/>
  <text x="248" y="95" text-anchor="end" fill="#64748b" font-size="11">300</text>
  <text x="410" y="123" fill="#334155" font-size="11">stiffener</text>
  <text x="333" y="214" text-anchor="middle" fill="#334155" font-size="12">one longitudinal stiffener</text>
  <text x="333" y="232" text-anchor="middle" fill="#1d4ed8" font-size="12" font-weight="600">&sigma;<tspan baseline-shift="sub" font-size="9">cr</tspan> = 289 MPa</text>
  <text x="333" y="248" text-anchor="middle" fill="#64748b" font-size="11">half the width, four times the stress</text>
</svg>`;

// bk9 — lateral-torsional buckling of a deep unbraced beam.
const figLTB = `<svg viewBox="0 0 460 262" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bk9-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="bk9-tip" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" fill="#334155" font-weight="600">Deep beam, no lateral brace: the compression flange runs away</text>
  <line x1="230" y1="34" x2="230" y2="54" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bk9-load)"/>
  <text x="238" y="46" fill="#dc2626" font-size="11">W</text>
  <rect x="70" y="58" width="320" height="7" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="226" y="65" width="8" height="42" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="70" y="107" width="320" height="7" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="70" y1="58" x2="70" y2="114" stroke="#334155" stroke-width="1.5"/>
  <line x1="390" y1="58" x2="390" y2="114" stroke="#334155" stroke-width="1.5"/>
  <polygon points="70,116 60,130 80,130" fill="none" stroke="#334155" stroke-width="1.5"/>
  <polygon points="390,116 380,130 400,130" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="54" y1="130" x2="86" y2="130" stroke="#334155" stroke-width="1.5"/>
  <line x1="374" y1="130" x2="406" y2="130" stroke="#334155" stroke-width="1.5"/>
  <line x1="70" y1="144" x2="390" y2="144" stroke="#64748b" stroke-width="1"/>
  <line x1="70" y1="140" x2="70" y2="148" stroke="#64748b" stroke-width="1"/>
  <line x1="390" y1="140" x2="390" y2="148" stroke="#64748b" stroke-width="1"/>
  <text x="230" y="158" text-anchor="middle" fill="#64748b" font-size="11">unbraced length L<tspan baseline-shift="sub" font-size="9">b</tspan></text>
  <text x="404" y="62" fill="#64748b" font-size="11">elevation</text>

  <text x="118" y="182" text-anchor="middle" fill="#64748b" font-size="11">section at mid-span, before</text>
  <line x1="88" y1="192" x2="148" y2="192" stroke="#334155" stroke-width="4"/>
  <line x1="118" y1="192" x2="118" y2="232" stroke="#334155" stroke-width="3"/>
  <line x1="88" y1="232" x2="148" y2="232" stroke="#334155" stroke-width="4"/>
  <text x="156" y="196" fill="#dc2626" font-size="11">compression flange</text>
  <text x="156" y="236" fill="#64748b" font-size="11">tension flange</text>

  <text x="330" y="182" text-anchor="middle" fill="#64748b" font-size="11">after: it moves and twists</text>
  <g stroke="#94a3b8" stroke-dasharray="4 3" stroke-width="1.4" fill="none">
    <line x1="300" y1="192" x2="360" y2="192"/>
    <line x1="330" y1="192" x2="330" y2="232"/>
    <line x1="300" y1="232" x2="360" y2="232"/>
  </g>
  <line x1="322" y1="188" x2="382" y2="198" stroke="#1d4ed8" stroke-width="4"/>
  <line x1="352" y1="193" x2="336" y2="231" stroke="#1d4ed8" stroke-width="3"/>
  <line x1="306" y1="226" x2="366" y2="236" stroke="#1d4ed8" stroke-width="4"/>
  <line x1="330" y1="176" x2="352" y2="176" stroke="#1d4ed8" stroke-width="1.4" marker-end="url(#bk9-tip)"/>
  <text x="358" y="172" fill="#1d4ed8" font-size="11">u</text>
  <text x="288" y="252" fill="#1d4ed8" font-size="11">&theta; = twist</text>
  <text x="230" y="252" text-anchor="middle" fill="#64748b" font-size="11">bending stress is still below yield when this happens</text>
</svg>`;

// bk10 — four real end mountings, deliberately unlabelled with K.
const figMounts = `<svg viewBox="0 0 460 268" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bk10-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" fill="#334155" font-weight="600">Four ways the same strut gets mounted</text>
  <line x1="62" y1="30" x2="62" y2="46" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bk10-load)"/>
  <line x1="168" y1="30" x2="168" y2="46" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bk10-load)"/>
  <line x1="274" y1="30" x2="274" y2="46" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bk10-load)"/>
  <line x1="380" y1="30" x2="380" y2="46" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bk10-load)"/>

  <rect x="57" y="70" width="10" height="112" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <circle cx="62" cy="66" r="10" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="62" cy="66" r="3.5" fill="#334155"/>
  <circle cx="62" cy="186" r="10" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="62" cy="186" r="3.5" fill="#334155"/>
  <text x="62" y="222" text-anchor="middle" fill="#334155" font-size="12">(a)</text>
  <text x="62" y="240" text-anchor="middle" fill="#64748b" font-size="11">rod ends,</text>
  <text x="62" y="254" text-anchor="middle" fill="#64748b" font-size="11">both ends</text>

  <rect x="163" y="70" width="10" height="112" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="146" y="52" width="44" height="18" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="146" y="182" width="44" height="18" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="150" y1="208" x2="156" y2="200" stroke="#64748b"/>
  <line x1="164" y1="208" x2="170" y2="200" stroke="#64748b"/>
  <line x1="178" y1="208" x2="184" y2="200" stroke="#64748b"/>
  <text x="168" y="222" text-anchor="middle" fill="#334155" font-size="12">(b)</text>
  <text x="168" y="240" text-anchor="middle" fill="#64748b" font-size="11">clamped into</text>
  <text x="168" y="254" text-anchor="middle" fill="#64748b" font-size="11">machined blocks</text>

  <rect x="269" y="70" width="10" height="112" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <path d="M258,68 A16 16 0 0 1 290,68" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="274" cy="66" r="6" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <rect x="252" y="182" width="44" height="18" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="256" y1="208" x2="262" y2="200" stroke="#64748b"/>
  <line x1="270" y1="208" x2="276" y2="200" stroke="#64748b"/>
  <line x1="284" y1="208" x2="290" y2="200" stroke="#64748b"/>
  <text x="274" y="222" text-anchor="middle" fill="#334155" font-size="12">(c)</text>
  <text x="274" y="240" text-anchor="middle" fill="#64748b" font-size="11">block base,</text>
  <text x="274" y="254" text-anchor="middle" fill="#64748b" font-size="11">spherical seat top</text>

  <rect x="375" y="70" width="10" height="112" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="362" y="60" width="36" height="8" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <line x1="352" y1="64" x2="360" y2="64" stroke="#94a3b8" stroke-dasharray="3 2"/>
  <line x1="400" y1="64" x2="408" y2="64" stroke="#94a3b8" stroke-dasharray="3 2"/>
  <rect x="358" y="182" width="44" height="18" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="362" y1="208" x2="368" y2="200" stroke="#64748b"/>
  <line x1="376" y1="208" x2="382" y2="200" stroke="#64748b"/>
  <line x1="390" y1="208" x2="396" y2="200" stroke="#64748b"/>
  <text x="380" y="222" text-anchor="middle" fill="#334155" font-size="12">(d)</text>
  <text x="380" y="240" text-anchor="middle" fill="#64748b" font-size="11">block base, tip</text>
  <text x="380" y="254" text-anchor="middle" fill="#64748b" font-size="11">free on a loose pad</text>
</svg>`;

// bk11 — perfect bifurcation vs the smooth response of crooked columns.
const figAmplify = `<svg viewBox="0 0 460 258" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bk11-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <text x="34" y="36" fill="#64748b" font-size="12">P / P<tspan baseline-shift="sub" font-size="9">cr</tspan></text>
  <line x1="76" y1="214" x2="430" y2="214" stroke="#64748b" stroke-width="1.5" marker-end="url(#bk11-ax)"/>
  <line x1="76" y1="214" x2="76" y2="46" stroke="#64748b" stroke-width="1.5" marker-end="url(#bk11-ax)"/>
  <text x="430" y="234" text-anchor="end" fill="#64748b" font-size="12">mid-height lateral deflection &delta; (mm)</text>
  <line x1="196" y1="214" x2="196" y2="209" stroke="#64748b"/>
  <text x="196" y="228" text-anchor="middle" fill="#94a3b8" font-size="11">10</text>
  <line x1="304" y1="214" x2="304" y2="209" stroke="#64748b"/>
  <text x="304" y="228" text-anchor="middle" fill="#94a3b8" font-size="11">20</text>
  <line x1="412" y1="214" x2="412" y2="209" stroke="#64748b"/>
  <text x="412" y="228" text-anchor="middle" fill="#94a3b8" font-size="11">30</text>
  <line x1="76" y1="149.2" x2="81" y2="149.2" stroke="#64748b"/>
  <text x="70" y="153" text-anchor="end" fill="#94a3b8" font-size="11">0.5</text>
  <line x1="76" y1="84.4" x2="81" y2="84.4" stroke="#64748b"/>
  <text x="70" y="88" text-anchor="end" fill="#94a3b8" font-size="11">1.0</text>
  <line x1="76" y1="84.4" x2="420" y2="84.4" stroke="#94a3b8" stroke-dasharray="5 4"/>

  <line x1="88" y1="214" x2="88" y2="84.4" stroke="#dc2626" stroke-width="3"/>
  <line x1="88" y1="84.4" x2="412" y2="84.4" stroke="#dc2626" stroke-width="3"/>
  <circle cx="88" cy="84.4" r="4.5" fill="#fff" stroke="#dc2626" stroke-width="2"/>
  <text x="150" y="76" fill="#dc2626" font-size="11">perfect column: no warning, then a bifurcation</text>

  <path d="M98.8,214 L99.3,208.2 L100.4,197 L102.1,184 L104.1,171.3 L106.6,159.8 L109.4,149.8 L112.6,141.4 L116.1,134.3 L119.9,128.3 L124,123.2 L128.5,119 L133.2,115.4 L138.2,112.3 L143.5,109.6 L149.1,107.3 L154.9,105.3 L161,103.6 L167.3,102 L173.9,100.7 L180.8,99.5 L187.9,98.4 L195.2,97.5 L202.8,96.6 L210.6,95.8 L218.6,95.1 L226.9,94.5 L235.3,93.9 L244.1,93.4 L253,92.9 L262.1,92.4 L271.5,92 L281.1,91.6 L290.9,91.3 L300.9,91 L311.1,90.7 L321.5,90.4 L332.1,90.1 L342.9,89.9 L353.9,89.7 L365.2,89.5 L376.6,89.3 L388.2,89.1 L400,88.9 L412,88.7" fill="none" stroke="#1d4ed8" stroke-width="2.6"/>
  <path d="M131.2,214 L131.7,212.7 L132.7,209.7 L134.1,205.8 L136,201.1 L138.2,196 L140.7,190.7 L143.5,185.2 L146.7,179.8 L150.1,174.5 L153.8,169.5 L157.8,164.6 L162,160 L166.5,155.7 L171.3,151.6 L176.3,147.8 L181.5,144.3 L187,141 L192.6,137.9 L198.6,135 L204.7,132.4 L211.1,129.9 L217.6,127.6 L224.4,125.4 L231.4,123.4 L238.6,121.6 L246,119.8 L253.6,118.2 L261.4,116.7 L269.4,115.3 L277.6,113.9 L286,112.7 L294.6,111.5 L303.4,110.4 L312.4,109.4 L321.5,108.4 L330.8,107.5 L340.4,106.6 L350.1,105.8 L359.9,105 L370,104.3 L380.2,103.6 L390.6,102.9 L401.2,102.3 L412,101.7" fill="none" stroke="#0f766e" stroke-width="2.6"/>
  <text x="200" y="116" fill="#1d4ed8" font-size="11">e<tspan baseline-shift="sub" font-size="9">0</tspan> = 1 mm</text>
  <text x="200" y="146" fill="#0f766e" font-size="11">e<tspan baseline-shift="sub" font-size="9">0</tspan> = 4 mm</text>
  <text x="230" y="252" text-anchor="middle" fill="#64748b" font-size="11">&delta; = e<tspan baseline-shift="sub" font-size="9">0</tspan>/(1 &minus; P/P<tspan baseline-shift="sub" font-size="9">cr</tspan>) &mdash; a crooked column never reaches P<tspan baseline-shift="sub" font-size="9">cr</tspan></text>
</svg>`;

// bk12 — same area, very different second moment.
const figRodTube = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" fill="#334155" font-weight="600">Equal cross-sectional area, therefore equal mass per metre</text>
  <circle cx="120" cy="112" r="24" fill="#dbeafe" stroke="#334155" stroke-width="2"/>
  <line x1="96" y1="112" x2="144" y2="112" stroke="#64748b" stroke-dasharray="5 3"/>
  <line x1="96" y1="150" x2="144" y2="150" stroke="#64748b" stroke-width="1"/>
  <line x1="96" y1="146" x2="96" y2="154" stroke="#64748b" stroke-width="1"/>
  <line x1="144" y1="146" x2="144" y2="154" stroke="#64748b" stroke-width="1"/>
  <text x="120" y="166" text-anchor="middle" fill="#64748b" font-size="11">&#8709; 20 mm solid</text>
  <text x="120" y="192" text-anchor="middle" fill="#334155" font-size="12">A = 314 mm&sup2;</text>
  <text x="120" y="210" text-anchor="middle" fill="#334155" font-size="12">I = 7.9&times;10&sup3; mm&#8308;</text>

  <path d="M320,64 A48 48 0 1 0 320,160 A48 48 0 1 0 320,64 Z M320,70.4 A41.6 41.6 0 1 1 320,153.6 A41.6 41.6 0 1 1 320,70.4 Z" fill="#dbeafe" stroke="#334155" stroke-width="2" fill-rule="evenodd"/>
  <line x1="272" y1="112" x2="368" y2="112" stroke="#64748b" stroke-dasharray="5 3"/>
  <line x1="272" y1="176" x2="368" y2="176" stroke="#64748b" stroke-width="1"/>
  <line x1="272" y1="172" x2="272" y2="180" stroke="#64748b" stroke-width="1"/>
  <line x1="368" y1="172" x2="368" y2="180" stroke="#64748b" stroke-width="1"/>
  <text x="320" y="192" text-anchor="middle" fill="#64748b" font-size="11">&#8709; 40 mm &times; 2.7 mm wall</text>
  <text x="320" y="212" text-anchor="middle" fill="#334155" font-size="12">A = 314 mm&sup2;</text>
  <text x="320" y="230" text-anchor="middle" fill="#1d4ed8" font-size="12" font-weight="600">I = 55&times;10&sup3; mm&#8308; (7.0&times;)</text>
  <text x="120" y="230" text-anchor="middle" fill="#64748b" font-size="11">baseline</text>
</svg>`;

// bk13 — lead screw: the root diameter is the column.
const figScrew = `<svg viewBox="0 0 460 252" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bk13-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" fill="#334155" font-weight="600">Acme lead screw pushing a load</text>
  <line x1="150" y1="30" x2="150" y2="50" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bk13-load)"/>
  <text x="158" y="44" fill="#dc2626" font-size="11">5 kN</text>
  <rect x="126" y="52" width="48" height="10" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <circle cx="150" cy="57" r="3.5" fill="#334155"/>
  <text x="182" y="60" fill="#64748b" font-size="11">thrust pad: pinned</text>
  <rect x="142" y="62" width="16" height="126" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <g stroke="#64748b" stroke-width="1">
    <line x1="142" y1="76" x2="158" y2="70"/><line x1="142" y1="90" x2="158" y2="84"/>
    <line x1="142" y1="104" x2="158" y2="98"/><line x1="142" y1="118" x2="158" y2="112"/>
    <line x1="142" y1="132" x2="158" y2="126"/><line x1="142" y1="146" x2="158" y2="140"/>
    <line x1="142" y1="160" x2="158" y2="154"/><line x1="142" y1="174" x2="158" y2="168"/>
  </g>
  <rect x="118" y="188" width="64" height="24" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <text x="192" y="204" fill="#64748b" font-size="11">nut block: fixed</text>
  <line x1="120" y1="220" x2="126" y2="212" stroke="#64748b"/>
  <line x1="138" y1="220" x2="144" y2="212" stroke="#64748b"/>
  <line x1="156" y1="220" x2="162" y2="212" stroke="#64748b"/>
  <line x1="174" y1="220" x2="180" y2="212" stroke="#64748b"/>
  <line x1="100" y1="62" x2="100" y2="188" stroke="#64748b" stroke-width="1"/>
  <line x1="96" y1="62" x2="104" y2="62" stroke="#64748b" stroke-width="1"/>
  <line x1="96" y1="188" x2="104" y2="188" stroke="#64748b" stroke-width="1"/>
  <text x="92" y="128" text-anchor="end" fill="#64748b" font-size="11">600 mm</text>

  <text x="330" y="94" text-anchor="middle" fill="#334155" font-size="12">thread cross-section</text>
  <circle cx="330" cy="150" r="42" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <circle cx="330" cy="150" r="34" fill="#dbeafe" stroke="#334155" stroke-width="2"/>
  <line x1="288" y1="150" x2="372" y2="150" stroke="#94a3b8" stroke-width="1"/>
  <text x="330" y="212" text-anchor="middle" fill="#94a3b8" font-size="11">major &#8709; 16 mm</text>
  <text x="330" y="230" text-anchor="middle" fill="#1d4ed8" font-size="11" font-weight="600">root &#8709; 13 mm carries the column</text>
</svg>`;

// bk14 — restrained bar: temperature becomes load.
const figThermal = `<svg viewBox="0 0 460 244" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bk14-f" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" fill="#334155" font-weight="600">Rod trapped between rigid abutments, then heated</text>
  <rect x="46" y="52" width="18" height="112" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="396" y="52" width="18" height="112" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <g stroke="#64748b">
    <line x1="38" y1="62" x2="46" y2="54"/><line x1="38" y1="80" x2="46" y2="72"/>
    <line x1="38" y1="98" x2="46" y2="90"/><line x1="38" y1="116" x2="46" y2="108"/>
    <line x1="38" y1="134" x2="46" y2="126"/><line x1="38" y1="152" x2="46" y2="144"/>
    <line x1="414" y1="62" x2="422" y2="54"/><line x1="414" y1="80" x2="422" y2="72"/>
    <line x1="414" y1="98" x2="422" y2="90"/><line x1="414" y1="116" x2="422" y2="108"/>
    <line x1="414" y1="134" x2="422" y2="126"/><line x1="414" y1="152" x2="422" y2="144"/>
  </g>
  <line x1="64" y1="108" x2="396" y2="108" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5 4"/>
  <path d="M64,108 C150,50 310,50 396,108" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <line x1="84" y1="108" x2="64" y2="108" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bk14-f)"/>
  <line x1="376" y1="108" x2="396" y2="108" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bk14-f)"/>
  <text x="118" y="128" fill="#dc2626" font-size="11">P = EA&alpha;&Delta;T</text>
  <text x="300" y="128" fill="#dc2626" font-size="11">P = EA&alpha;&Delta;T</text>
  <text x="230" y="68" text-anchor="middle" fill="#1d4ed8" font-size="11">buckled shape once P reaches P<tspan baseline-shift="sub" font-size="9">cr</tspan></text>
  <line x1="64" y1="180" x2="396" y2="180" stroke="#64748b" stroke-width="1"/>
  <line x1="64" y1="176" x2="64" y2="184" stroke="#64748b" stroke-width="1"/>
  <line x1="396" y1="176" x2="396" y2="184" stroke="#64748b" stroke-width="1"/>
  <text x="230" y="196" text-anchor="middle" fill="#64748b" font-size="11">L = 1.5 m, &#8709; 28 mm steel rod</text>
  <text x="230" y="220" text-anchor="middle" fill="#334155" font-size="11">Free expansion is &alpha;&Delta;T&middot;L. Blocking it converts the whole strain into compression.</text>
  <text x="230" y="238" text-anchor="middle" fill="#64748b" font-size="11">Rails, pipe runs and long tie bars fail this way with no external load at all.</text>
</svg>`;

// bk15 — snap-through of a shallow arch: a limit point, not a bifurcation.
const figSnap = `<svg viewBox="0 0 460 258" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bk15-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="bk15-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" fill="#334155" font-weight="600">Shallow arch: it reaches a peak load and jumps</text>
  <line x1="130" y1="42" x2="130" y2="62" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bk15-load)"/>
  <text x="138" y="56" fill="#dc2626" font-size="11">P</text>
  <path d="M56,140 Q130,64 204,140" fill="none" stroke="#334155" stroke-width="3"/>
  <path d="M56,140 Q130,216 204,140" fill="none" stroke="#1d4ed8" stroke-width="2.4" stroke-dasharray="6 4"/>
  <polygon points="56,140 46,156 66,156" fill="none" stroke="#334155" stroke-width="1.5"/>
  <polygon points="204,140 194,156 214,156" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="40" y1="156" x2="72" y2="156" stroke="#334155" stroke-width="1.5"/>
  <line x1="188" y1="156" x2="220" y2="156" stroke="#334155" stroke-width="1.5"/>
  <text x="130" y="184" text-anchor="middle" fill="#94a3b8" font-size="11">snapped-through shape</text>
  <text x="130" y="204" text-anchor="middle" fill="#64748b" font-size="11">a remote equilibrium, reached</text>
  <text x="130" y="220" text-anchor="middle" fill="#64748b" font-size="11">dynamically and without warning</text>

  <line x1="262" y1="180" x2="424" y2="180" stroke="#64748b" stroke-width="1.5" marker-end="url(#bk15-ax)"/>
  <line x1="262" y1="180" x2="262" y2="54" stroke="#64748b" stroke-width="1.5" marker-end="url(#bk15-ax)"/>
  <text x="424" y="198" text-anchor="end" fill="#64748b" font-size="11">apex displacement</text>
  <text x="256" y="50" text-anchor="end" fill="#64748b" font-size="11">P</text>
  <path d="M262,180 C282,140 296,102 316,96 C336,90 344,124 356,150 C368,176 384,168 410,132" fill="none" stroke="#1d4ed8" stroke-width="2.8"/>
  <circle cx="316" cy="96" r="4.5" fill="#fff" stroke="#dc2626" stroke-width="2"/>
  <text x="322" y="82" fill="#dc2626" font-size="11">limit point</text>
  <line x1="316" y1="96" x2="384" y2="96" stroke="#dc2626" stroke-dasharray="4 3"/>
  <text x="392" y="100" fill="#dc2626" font-size="11">snap</text>
  <text x="343" y="220" text-anchor="middle" fill="#64748b" font-size="11">The path turns over: there is no</text>
  <text x="343" y="236" text-anchor="middle" fill="#64748b" font-size="11">adjacent stable state to hold the load.</text>
</svg>`;

// bk16 — bracing one axis can hand control to the other.
const figSwapAxis = `<svg viewBox="0 0 460 282" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bk16-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" fill="#334155" font-weight="600">100 &times; 50 &times; 4 tube, 4.0 m pinned: r</text>
  <text x="230" y="38" text-anchor="middle" fill="#64748b" font-size="12">weak axis r = 20.4 mm, strong axis r = 35.6 mm</text>
  <line x1="120" y1="48" x2="120" y2="64" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bk16-load)"/>
  <line x1="330" y1="48" x2="330" y2="64" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bk16-load)"/>
  <line x1="120" y1="72" x2="120" y2="202" stroke="#94a3b8" stroke-dasharray="4 4"/>
  <line x1="330" y1="72" x2="330" y2="202" stroke="#94a3b8" stroke-dasharray="4 4"/>

  <path d="M120,72 C152,102 152,172 120,202" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <circle cx="120" cy="72" r="4" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="120" cy="202" r="4" fill="#fff" stroke="#334155" stroke-width="2"/>
  <line x1="106" y1="72" x2="134" y2="72" stroke="#334155" stroke-width="2"/>
  <line x1="106" y1="202" x2="134" y2="202" stroke="#334155" stroke-width="2"/>
  <text x="160" y="140" fill="#1d4ed8" font-size="11">weak-axis mode</text>

  <path d="M330,72 C346,90 346,120 330,137" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5 3"/>
  <path d="M330,137 C314,154 314,184 330,202" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5 3"/>
  <path d="M330,72 C360,102 360,172 330,202" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <circle cx="330" cy="72" r="4" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="330" cy="202" r="4" fill="#fff" stroke="#334155" stroke-width="2"/>
  <line x1="316" y1="72" x2="344" y2="72" stroke="#334155" stroke-width="2"/>
  <line x1="316" y1="202" x2="344" y2="202" stroke="#334155" stroke-width="2"/>
  <polygon points="330,137 314,130 314,144" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <line x1="312" y1="126" x2="312" y2="148" stroke="#dc2626" stroke-width="2"/>
  <text x="248" y="128" text-anchor="end" fill="#dc2626" font-size="11">weak-direction</text>
  <text x="248" y="142" text-anchor="end" fill="#dc2626" font-size="11">brace only</text>
  <text x="368" y="140" fill="#1d4ed8" font-size="11">strong-axis mode</text>

  <line x1="20" y1="216" x2="440" y2="216" stroke="#e2e8f0"/>
  <text x="120" y="234" text-anchor="middle" fill="#334155" font-size="12">unbraced</text>
  <text x="120" y="252" text-anchor="middle" fill="#1d4ed8" font-size="11">weak KL/r = 196 governs</text>
  <text x="120" y="268" text-anchor="middle" fill="#64748b" font-size="11">strong KL/r = 112</text>
  <text x="330" y="234" text-anchor="middle" fill="#334155" font-size="12">braced at mid-height</text>
  <text x="330" y="252" text-anchor="middle" fill="#64748b" font-size="11">weak KL/r = 98</text>
  <text x="330" y="268" text-anchor="middle" fill="#1d4ed8" font-size="11">strong KL/r = 112 now governs</text>
</svg>`;

const extra: Question[] = [
  {
    id: "buckling-q17",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A square steel tube measures 40 mm across the outside and 34 mm across the inside. Using I = (b<sup>4</sup> &minus; b<sub>i</sub><sup>4</sup>)/12 and A = b<sup>2</sup> &minus; b<sub>i</sub><sup>2</sup>, what is its radius of gyration, in mm?</p>`,
    answer: 15.2,
    unit: "mm",
    explanation: `<p class="eq">I = (40<sup>4</sup> &minus; 34<sup>4</sup>)/12 = 101&thinsp;972 mm<sup>4</sup>, &nbsp; A = 40&sup2; &minus; 34&sup2; = 444 mm&sup2;</p>
<p class="eq">r = &radic;(I/A) = &radic;229.7 = <strong>15.2 mm</strong></p>
<p>A solid 40 mm square gives 11.5 mm. The tube buys 32% more radius of gyration from 28% of the metal.</p>`,
  },
  {
    id: "buckling-q18",
    type: "mc",
    difficulty: 1,
    prompt: `<p>The same strut is mounted four different ways in the sketch. Which mounting behaves closest to the K = 2 case?</p>`,
    figure: figMounts,
    choices: [
      "(a) spherical rod ends fitted at both ends of the strut",
      "(b) both ends clamped into thick machined blocks",
      "(c) machined block at the base, spherical seat on top",
      "(d) machined block at the base, tip free on a loose pad",
    ],
    answer: 3,
    explanation: `<p>K = 2 is the fixed-free case, and what defines it is not the base. It is that the loaded end can <strong>translate sideways as well as rotate</strong>. Case (d) has exactly that: the tip only rests on a pad, so nothing stops it moving laterally. The strut buckles into a quarter-wave with an effective length of twice the physical length.</p>
<p>The others: (a) is two pins, K = 1. (b) restrains rotation at both ends, theoretically 0.5, nearer 0.65 in design because the blocks and their mounting are not infinitely stiff. (c) is fixed-pinned, theoretically 0.7.</p>
<p>Since P<sub>cr</sub> goes as 1/K&sup2;, (d) carries one sixteenth of what (b) carries with identical hardware in between. Ask what stops the loaded end from moving sideways. If the answer is friction on a pad, assume nothing does.</p>`,
  },
  {
    id: "buckling-q19",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A standard steel scaffold tube is 48.3 mm OD with a 3.2 mm wall, giving A = 453 mm<sup>2</sup> and I = 1.16&times;10<sup>5</sup> mm<sup>4</sup>. A vertical leg spans 2.0 m between couplers, which you may treat as pins. With E = 200 GPa, what is its Euler critical load, in kN?</p>`,
    answer: 57.2,
    unit: "kN",
    explanation: `<p>Couplers are effectively pins, so K = 1 over the 2.0 m lift.</p>
<p class="eq">P<sub>cr</sub> = &pi;&sup2;(200000)(1.16&times;10<sup>5</sup>)/(2000)&sup2; = <strong>57.2 kN</strong></p>
<p>Yield would take 113 kN, so buckling governs at half that. Double the coupler spacing and capacity falls to 14 kN, which is why scaffold rules cap lift height rather than load.</p>`,
  },
  {
    id: "buckling-q20",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A rectangular tube column can be installed with its wide face facing either front or side. A wall rail braces the column against side-to-side movement only. How should the orientation be chosen?</p>`,
    choices: [
      "Orientation does not matter while the load stays centred on the section",
      "Put the weak bending direction where the brace is, then re-check both axes",
      "Turn the wide face toward the rail, so the brace bears on the stiffer side",
      "Either way P<sub>cr</sub> follows I<sub>min</sub>, so pick whichever suits the fixings",
    ],
    answer: 1,
    explanation: `<p>What governs is the largest KL/r, and both K&middot;L and r change with orientation. Turning the section so its weak bending direction lines up with what the rail actually restrains lets the brace halve KL for the axis that needs it most.</p>
<p>That is where the reasoning starts, not where it ends. Once the weak axis is braced its slenderness may fall <em>below</em> the unbraced strong-axis value, and the strong axis takes over as the governing mode. Tabulate KL and r for both axes, each with its own real unbraced length, and compare.</p>
<p>A centred axial load removes first-order bending and does nothing about stability. Area does not appear in the Euler load at all.</p>`,
  },
  {
    id: "buckling-q21",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>An aluminium strut with E = 70 GPa and a smallest second moment of area of 0.80&times;10<sup>&minus;6</sup> m<sup>4</sup> is pinned at both ends. Its ideal buckling load must not fall below 60 kN. What is the longest unsupported length permitted, in m?</p>`,
    answer: 3.04,
    unit: "m",
    explanation: `<p class="eq">L = &radic;(&pi;&sup2;EI/P<sub>cr</sub>) = &radic;[&pi;&sup2;(70&times;10<sup>9</sup>)(0.80&times;10<sup>&minus;6</sup>)/60000] = <strong>3.04 m</strong></p>
<p>Note the square root: doubling the permitted length needs four times the second moment.</p>
<p>This is not an allowable length. The factor of safety at 3.04 m is exactly 1.0, so any crookedness puts you under it. At a stability factor of 2 the length drops to about 2.1 m.</p>`,
  },
  {
    id: "buckling-q22",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A solid 20 mm steel rod is a marginal compression member. You are told to roughly double its buckling capacity without increasing its mass per metre. What is the move?</p>`,
    figure: figRodTube,
    choices: [
      "Respin the same area into a large-diameter thin-walled tube, raising I sharply",
      "Switch to a steel with twice the yield strength, since capacity scales with S<sub>y</sub>",
      "Brace it at mid-height, since halving the length doubles P<sub>cr</sub>",
      "Shot-peen the surface: the compressive residual layer raises the buckling load",
    ],
    answer: 0,
    explanation: `<p>P<sub>cr</sub> is linear in I, and I depends on <em>where</em> the area sits, not how much of it there is. Keep A = 314 mm&sup2; and rearrange it as a 40 mm OD tube with a 2.7 mm wall: I goes from 7.9&times;10<sup>3</sup> mm<sup>4</sup> to 55&times;10<sup>3</sup> mm<sup>4</sup>, a factor of <strong>7.0</strong> for identical mass. You asked for 2&times; and the shape change gives seven.</p>
<p>The others do nothing. Yield strength is absent from the Euler formula. Doubling the length quarters the capacity. Shot-peening improves fatigue life at a surface and does not change E, I or L.</p>
<p>The 2.7 mm wall on a 40 mm tube gives D/t = 15, still comfortably thick. Keep pushing the diameter and you trade the global mode you just fixed for a local wall-buckling or denting problem. Section efficiency has a limit and local stability sets it.</p>`,
  },
  {
    id: "buckling-q23",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A steel column has an Euler critical load of 100 kN. It is replaced by an aluminium one with identical section, length and end conditions. Take E = 200 GPa for steel and 70 GPa for aluminium. What is the new critical load, in kN?</p>`,
    answer: 35.0,
    unit: "kN",
    explanation: `<p class="eq">P<sub>Al</sub> = P<sub>steel</sub>(E<sub>Al</sub>/E<sub>steel</sub>) = 100(70/200) = <strong>35.0 kN</strong></p>
<p>Yield strength never entered. Only E moved, and aluminium's E is about a third of steel's whatever the temper.</p>
<p>That does not make aluminium a bad column material. At equal geometry it loses 2.9&times;. At equal mass, with the freedom to resize the section, it wins. Ask which comparison is on the table.</p>`,
  },
  {
    id: "buckling-q24",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A 40 kN compressive load is introduced 5.0 mm off the centroid of a strut because of a misaligned clevis. What first-order bending moment does that eccentricity create, in N&middot;m?</p>`,
    answer: 200,
    unit: "N*m",
    explanation: `<p class="eq">M = P e = 40&thinsp;000 &times; 0.0050 = <strong>200 N&middot;m</strong></p>
<p>That moment exists at zero deflection. It is not a buckling effect, just where the load line sits. Buckling then makes it worse: as the strut bows by &delta; the moment grows to P(e + &delta;), and &delta; is amplified by 1/(1 &minus; P/P<sub>cr</sub>).</p>
<p>Put it in context. On a 50 mm OD, 4 mm wall tube (A = 578 mm&sup2;, S = 6160 mm&sup3;) the axial stress is 69.2 MPa and the eccentricity adds 32.5 MPa of bending, for a peak of 102 MPa. Five millimetres of misalignment raised the peak stress by <strong>47%</strong>, before any buckling amplification. Spherical bearings, close-fitting pins and matched pads earn their cost on slender members for exactly this reason.</p>`,
  },
  {
    id: "buckling-q25",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A slender column passes through a guide bushing at mid-height. The bushing has 3 mm of diametral clearance and only touches the column after noticeable lateral movement. How should it be treated when sizing?</p>`,
    choices: [
      "As a perfect brace at mid-height, so KL halves and P<sub>cr</sub> quadruples",
      "As no reliable brace until the gap and the contact stiffness are modelled",
      "As a stiffness gain, modelled by raising the column's effective EI",
      "As a restraint that leaves only the local wall mode to be checked",
    ],
    answer: 1,
    explanation: `<p>Buckling is triggered by <em>small</em> lateral displacement. The instability develops at deflections far below 1.5 mm of radial slop, so a guide that does not touch until the column has already moved that far provides no restraint during the part of the response that decides stability.</p>
<p>What the bushing does is limit how far the column travels <em>after</em> it goes unstable, which may protect surrounding hardware without raising P<sub>cr</sub>. The contact, when it comes, is one-sided and nonlinear, so a linear eigenvalue model that ties the column to the bushing node reports a capacity the hardware cannot deliver.</p>
<p>Size the column for the full unbraced length. If you need the brace to count, make it count: preloaded, close-clearance, or a proper bracket. Then say so on the drawing, because a maintenance team that fits a looser bushing has quietly halved your capacity.</p>`,
  },
  {
    id: "buckling-q26",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A pinned-pinned steel column 1.5 m long must reach an ideal critical load of 100 kN with E = 200 GPa. What is the smallest second moment of area that will do it, in m<sup>4</sup>?</p>`,
    answer: 1.14e-7,
    unit: "m^4",
    tolerance: 0.04,
    explanation: `<p class="eq">I = P<sub>cr</sub>(KL)&sup2;/(&pi;&sup2;E) = (100&thinsp;000)(1.5)&sup2;/[&pi;&sup2;(200&times;10<sup>9</sup>)] = <strong>1.14&times;10<sup>&minus;7</sup> m<sup>4</sup></strong></p>
<p>That is 1.14&times;10<sup>5</sup> mm<sup>4</sup>. A 45 mm OD &times; 3 mm wall tube clears it; a 25 mm solid rod misses by 6&times;.</p>
<p>It is the <em>smallest</em> principal second moment that has to reach it, in the orientation the part is installed. And the margin is 1.0, so a real design wants two to three times that I.</p>`,
  },
  {
    id: "buckling-q27",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A compression strut is machined from an extrusion, then large lightening holes are cut through its web. The buckling check reused the gross-section I from the uncut extrusion. What has been missed?</p>`,
    choices: [
      "Nothing: holes cut net area, which matters in tension, not in stability",
      "Only the stress concentration at each hole, which the fatigue check covers",
      "Gross-section I is conservative here, since cutting metal relieves residual stress",
      "Reduced local stiffness, plus a new local buckling panel at each hole",
    ],
    answer: 3,
    explanation: `<p>Cutting the web does three things a gross-section calculation cannot see. It reduces area and second moment over part of the length. It interrupts the shear path between the flanges, which is what makes the section act as a unit. And it leaves short unsupported strips between and around the holes, each a small plate that can buckle on its own.</p>
<p>Gross I is the <em>optimistic</em> value, so reusing it is unconservative, not conservative. Holes are the classic concern in net-section tension checks too, but for a different reason.</p>
<p>A review should ask for net section properties, the b/t of the strips left between holes, edge distance, whether the holes are flanged or reinforced, and correlation by test if the cut-outs are aggressive. Aerospace practice flanges lightening holes precisely to restore local stability at the free edge.</p>`,
  },
  {
    id: "buckling-q28",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>An analyst assumed K = 1 and reported P<sub>cr</sub> = 180 kN for a member carrying 90 kN. A checker argues the real end restraint is closer to K = 1.2. What buckling factor of safety does the checker's assumption give?</p>`,
    answer: 1.39,
    explanation: `<p>Euler load scales as 1/K&sup2;, so revising K rescales the whole result:</p>
<p class="eq">P<sub>cr,new</sub> = 180/(1.2)&sup2; = 125 kN</p>
<p class="eq">n = P<sub>cr,new</sub>/P = 125/90 = <strong>1.39</strong></p>
<p>A 20% change in an assumption nobody measured cut the margin from 2.00 to 1.39, a 31% loss. No other input to a buckling calculation is at once this influential and this poorly evidenced.</p>
<p>Where does K &gt; 1 come from, when the textbook calls pinned-pinned the worst pinned case? End translation. If the top of the column can sway, K climbs above 1 and can reach 2 or beyond: an unbraced frame, a sloppy guide, a flexible supporting beam. The checker is asking whether anything actually holds that column top in position.</p>`,
  },
  {
    id: "buckling-q29",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A compression link uses spherical rod ends, so it cannot transmit end moment. The FEA model was built with both ends fully constrained against rotation. What does that do to the result?</p>`,
    choices: [
      "It underpredicts capacity, since fixed ends are the weaker case",
      "It overpredicts capacity by inventing end rotational restraint",
      "It converts the compression case into an equivalent tension case",
      "It removes the need to run the weak-axis check on this link",
    ],
    answer: 1,
    explanation: `<p>A spherical rod end is close to a true pin: it rotates freely, so K &asymp; 1. Constraining rotation makes the model fixed-fixed, K = 0.5, and since P<sub>cr</sub> goes as 1/K&sup2; the reported critical load is <strong>four times too high</strong>. Worse, the error is invisible in the output. The model runs, the mode shape looks plausible, and only the boundary condition is wrong.</p>
<p>This is one of the most common FEA mistakes in stability work, because rotational constraints are often added for convenience to stop a model spinning as a rigid body. The fix is to restrain rigid-body motion with the minimum necessary set, or to model the bearing itself.</p>
<p>Generalise the check: for every boundary condition in a buckling model, ask what hardware provides it. Clevises and rod ends are pins. Bolted flanges are somewhere between pinned and fixed depending on the bolt group and what is behind it. Welds to a flexible panel are much closer to pinned than they look.</p>`,
  },
  {
    id: "buckling-q30",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A column base is welded to a 6 mm floor plate. A junior engineer models the base as perfectly fixed on the grounds that a weld cannot rotate. What is the right review comment?</p>`,
    choices: [
      "Justify the rotational stiffness of plate, weld and structure first",
      "A welded joint is a moment connection, so K = 0.5 applies to the whole column",
      "End fixity shifts P<sub>cr</sub> by only a few percent, so K = 0.7 is close enough",
      "Use K = 2: with nothing framing into the top, it is effectively a cantilever",
    ],
    answer: 0,
    explanation: `<p>Fixity is a property of the load path, not of the weld. The weld may be perfectly rigid and the 6 mm plate still bends under the base moment; behind the plate the joist or slab can rotate too. What the column sees is the <em>series</em> stiffness of all of that, and the softest element dominates.</p>
<p>Numbers make the stakes clear. Taking K = 0.5 rather than a realistic 0.8 inflates P<sub>cr</sub> by (0.8/0.5)&sup2; = 2.6&times;. Even for a genuinely well-detailed fixed-fixed column, design guidance recommends K = 0.65 instead of the theoretical 0.50, precisely because ideal fixity is not achievable in hardware.</p>
<p>The productive review comment gives the engineer a route: estimate the connection rotational stiffness and compare it to the column's own 4EI/L, or bracket the answer by running pinned and fixed and showing how much of the margin rides on the assumption. If the answer barely moves, stop worrying; if it halves, go get evidence.</p>`,
  },
  {
    id: "buckling-q31",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>The web of a steel plate girder is 600 mm deep and 6 mm thick, and the compressed panel is long with both long edges simply supported (k = 4). Using &sigma;<sub>cr</sub> = k&pi;&sup2;E/[12(1 &minus; &nu;&sup2;)]&middot;(t/b)&sup2; with E = 200 GPa and &nu; = 0.3, at what stress does the web buckle, in MPa?</p>`,
    figure: figWeb,
    answer: 72.3,
    unit: "MPa",
    explanation: `<p>Substitute, keeping E in MPa:</p>
<p class="eq">&sigma;<sub>cr</sub> = 4&pi;&sup2;(200000)/[12(1 &minus; 0.09)] &times; (6/600)&sup2;</p>
<p class="eq">= 7.896&times;10<sup>6</sup>/10.92 &times; 1.0&times;10<sup>&minus;4</sup> = 723&thinsp;048 &times; 10<sup>&minus;4</sup> = <strong>72.3 MPa</strong></p>
<p>That is less than a third of a 250 MPa yield, so the web wrinkles long before the material is anywhere near its limit, and the girder's beautiful global section properties do not help, because this is a plate problem, not a beam problem.</p>
<p>The design response is in the (t/b)&sup2;: halve the panel width and you quadruple the stress. A single longitudinal stiffener at mid-depth takes b to 300 mm and &sigma;<sub>cr</sub> to 289 MPa, now above yield, so the web is no longer the limit. That is why every deep girder and every thin aircraft rib carries stiffeners. They buy stability by subdividing panels, at a small fraction of the mass that thickening the web would cost.</p>`,
  },
  {
    id: "buckling-q32",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A thin panel in compression buckles at an unacceptably low stress. A colleague proposes adding one stiffener down the middle, halving the unsupported panel width while adding almost no thickness. What does that achieve?</p>`,
    choices: [
      "It roughly doubles the panel's critical buckling stress",
      "It leaves the buckling stress unchanged but adds useful mass",
      "It roughly quadruples it, because the stress goes as (t/b)&sup2;",
      "It lowers it, because the stiffener acts as a stress raiser",
    ],
    answer: 2,
    explanation: `<p>Plate buckling stress is &sigma;<sub>cr</sub> = k&pi;&sup2;E/[12(1 &minus; &nu;&sup2;)]&middot;(t/b)&sup2;. The panel width appears squared in the denominator, so halving b multiplies &sigma;<sub>cr</sub> by <strong>four</strong>. Option 1 is the answer you get by treating the relationship as linear, which is the most common slip.</p>
<p>Compare the alternatives at equal effect. To get 4&times; by thickening instead, you would need to double t, doubling the mass of the entire panel. The stiffener achieves the same for a few percent. This is the same 1/L&sup2; logic that makes a column brace so efficient, applied to a plate.</p>
<p>Two conditions. The stiffener must be stiff enough to hold a node in the buckled shape, which sets a minimum second moment for the stiffener itself; and the stiffener must not buckle or trip on its own, which sets its own b/t. A flimsy stiffener buys a fraction of the theoretical gain, exactly like a flimsy column brace.</p>`,
  },
  {
    id: "buckling-q33",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A thin square tube has an excellent calculated global Euler load, but every test article develops a wrinkle in one wall near mid-height at a much lower load. What is happening?</p>`,
    figure: figLocalGlobal,
    choices: [
      "The material lost its compressive stress capability at that point",
      "The global Euler calculation was run with too high a density",
      "The tube actually failed in tension rather than in compression",
      "Local plate buckling of the wall beat the global column mode",
    ],
    answer: 3,
    explanation: `<p>The Euler calculation treats the tube as a line member with properties E and I, and asks when the <em>whole thing</em> bows. But each flat wall is separately a plate in compression, with its own critical stress that depends on b/t and not at all on the tube's length. If b/t is large enough, the wall reaches its limit first and wrinkles while the member as a whole is still straight.</p>
<p>The two checks pull in opposite directions. Making a section deeper and thinner at constant mass raises I, which is what the global check rewards, while raising b/t, which is what the local check punishes. Optimising on the global calculation alone walks you straight into a local failure.</p>
<p>Density does not appear in either formula, and steel does not lose compressive capability, so options 1 and 2 are not mechanisms. What the design needs is both checks: global KL/r for the member, and b/t (or D/t for a round tube) for every flat in the section.</p>`,
  },
  {
    id: "buckling-q34",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A 16 mm Acme lead screw pushes 5 kN. It extends 600 mm from a fixed nut to a thrust pad that can rotate but not move sideways, so K = 0.7. The thread's root diameter is 13.0 mm and E = 200 GPa. What is the screw's critical load, in kN?</p>`,
    figure: figScrew,
    answer: 15.7,
    unit: "kN",
    explanation: `<p>The column is the <strong>root</strong> of the thread, the smallest continuous section along the length, not the 16 mm major diameter.</p>
<p class="eq">I = &pi;d<sup>4</sup>/64 = &pi;(13.0)<sup>4</sup>/64 = 1402 mm<sup>4</sup></p>
<p class="eq">P<sub>cr</sub> = &pi;&sup2;EI/(KL)&sup2; = &pi;&sup2;(200000)(1402)/(0.7 &times; 600)&sup2;</p>
<p class="eq">= 2.767&times;10<sup>9</sup>/176&thinsp;400 = 1.57&times;10<sup>4</sup> N = <strong>15.7 kN</strong></p>
<p>Against the 5 kN service load that is a factor of 3.1, which is about right for a mechanism screw.</p>
<p>Using the 16 mm major diameter gives I = 3217 mm<sup>4</sup> and P<sub>cr</sub> = 36 kN, 2.3&times; optimistic, because I scales with d<sup>4</sup> and (16/13)<sup>4</sup> = 2.29. Screw manufacturers publish column-load charts based on root diameter for exactly this reason. The other thing to check on any lead screw: the whip speed, since the same slenderness that hurts here also sets the critical rotational speed.</p>`,
  },
  {
    id: "buckling-q35",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A 900 mm pin-ended strut is loaded through a 12 mm bolt in a 13 mm clearance hole, so the load line can sit anywhere within that clearance. The drawing also allows a manufacturing straightness of L/1000. What total initial eccentricity should you design to, in mm?</p>`,
    answer: 1.4,
    unit: "mm",
    explanation: `<p>Two independent imperfections, both of which can be at their worst at the same time and in the same direction, so add them:</p>
<p class="eq">clearance: (13 &minus; 12)/2 = 0.5 mm radial offset of the load line</p>
<p class="eq">straightness: L/1000 = 900/1000 = 0.9 mm mid-span bow</p>
<p class="eq">e<sub>0</sub> = 0.5 + 0.9 = <strong>1.4 mm</strong></p>
<p>People routinely remember one of these and forget the other. The bolt clearance is the one that gets missed, because it feels like an assembly detail rather than a structural input, but a hole that lets the load line wander is exactly an eccentricity.</p>
<p>What you do with 1.4 mm: feed it into &delta; = e<sub>0</sub>/(1 &minus; P/P<sub>cr</sub>) and check that P/A + M/S stays below yield at the working load. If it does not, the cheap fixes are a reamed or interference-fit pin (kills the 0.5 mm) and a tighter straightness callout with an inspection method (halves the 0.9 mm), both far cheaper than growing the section.</p>`,
  },
  {
    id: "buckling-q36",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A long, deep I-beam carries a mid-span load with no lateral restraint anywhere along its span. In test it swings sideways and rotates while the calculated bending stress is still comfortably below yield. What is this?</p>`,
    figure: figLTB,
    choices: [
      "Lateral-torsional buckling of the unbraced compression flange",
      "Plain axial yielding of the tension flange material",
      "Shear buckling of the web between the two end supports",
      "Fatigue crack growth starting at the mid-span load point",
    ],
    answer: 0,
    explanation: `<p>The top half of a sagging beam is in compression, and a compression flange with nothing holding it sideways is a column. It wants to buckle laterally, but it is attached to a tension flange that does not, so the whole section twists as the flange moves out. That coupled sideways-plus-twist mode is lateral-torsional buckling, and it happens at a bending moment well below the section's yield moment when the unbraced length is large.</p>
<p>Nothing about this is a material failure, which rules out option 2, and it happened on a single monotonic load, which rules out fatigue. Shear buckling is a real web mode but it shows as diagonal web wrinkling near the supports, not as the whole beam swinging out.</p>
<p>The levers, in order of effectiveness: brace the compression flange (the unbraced length L<sub>b</sub> is what the capacity depends on most strongly), increase torsional stiffness by closing the section into a box, or use a section with more lateral stiffness in the flange. The interview tell is any deep, narrow beam with a long unbraced span, crane runways, purlins, temporary works.</p>`,
  },
  {
    id: "buckling-q37",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A 3.0 m pin-ended column buckles at 40 kN unbraced. Structure only exists at a point 1.0 m from the top, so a brace can be fitted there and nowhere else. Treating each resulting segment as pin-ended, what critical load do you now get, in kN?</p>`,
    figure: figBracePos,
    answer: 90,
    unit: "kN",
    explanation: `<p>The brace splits the column into a 1.0 m segment and a 2.0 m segment. Both carry the same axial load, so the column fails when the <strong>weaker</strong> segment does, the long one.</p>
<p class="eq">P<sub>new</sub> = P<sub>old</sub>(L<sub>old</sub>/L<sub>governing</sub>)&sup2; = 40(3.0/2.0)&sup2; = 40 &times; 2.25 = <strong>90 kN</strong></p>
<p>The 1.0 m segment would carry 40(3.0/1.0)&sup2; = 360 kN on its own; that capacity is simply wasted.</p>
<p>Compare with a brace at mid-height, which leaves two 1.5 m segments and gives 40 &times; 4 = 160 kN. So moving the brace half a metre off centre drops the braced capacity from 160 kN to 90 kN, 44% of the capacity, and 58% of the 120 kN the brace could have bought. The rule to carry away: bracing pays according to the <em>longest remaining segment</em>, so if you can only fit one brace, fight for it to be at mid-height, and if you are offered a second brace, put it where it shortens the longest span rather than wherever a bracket happens to be convenient.</p>`,
  },
  {
    id: "buckling-q38",
    type: "mc",
    difficulty: 2,
    prompt: `<p>An engineer computes Euler critical stress for a mild-steel column at KL/r = 80 and gets 308 MPa. The steel yields at 250 MPa. What should be concluded?</p>`,
    choices: [
      "The column is very safe, since its capacity exceeds the yield stress",
      "Euler applies, but a knockdown of about 25% should be taken",
      "Euler is out of range here; use Johnson or a code column curve",
      "The modulus E must have been entered incorrectly in the calculation",
    ],
    answer: 2,
    explanation: `<p>A predicted critical stress above yield is a signal that the model has been used outside its domain, not a signal of a strong column. Euler assumes the material stays linear elastic all the way to instability. At 308 MPa this steel is long past yielding, so the derivation's own assumption has failed.</p>
<p>The boundary is the transition slenderness (KL/r)<sub>c</sub> = &radic;(2&pi;&sup2;E/S<sub>y</sub>) = &radic;(2&pi;&sup2;(200000)/250) = 126. At KL/r = 80 we are well below it, so this is an intermediate column, and the appropriate hand method is the Johnson parabola:</p>
<p class="eq">&sigma;<sub>cr</sub> = 250[1 &minus; 250(80)&sup2;/(4&pi;&sup2;&middot;200000)] = 250(0.797) = 199 MPa</p>
<p>That is 35% below the Euler answer, and below yield as it must be. Residual stresses from rolling or welding start yielding parts of the section before the whole member is elastically critical, which is exactly what the parabola is fitted to. Option 2 is tempting but arbitrary. There is a proper curve for this range, so use it.</p>`,
  },
  {
    id: "buckling-q39",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A 100 &times; 50 &times; 4 rectangular steel tube is used as an unbraced pinned column. Which second moment of area belongs in the Euler formula?</p>`,
    figure: figAxes,
    choices: [
      "I about x-x = 1.44&times;10<sup>6</sup> mm<sup>4</sup>; the deeper direction resists more",
      "I about y-y = 0.474&times;10<sup>6</sup> mm<sup>4</sup>; the column bows the easy way",
      "The average of the two, because the mode is a combination of both",
      "The polar value I<sub>x</sub> + I<sub>y</sub>, because the section can also twist",
    ],
    answer: 1,
    explanation: `<p>Buckling is bending instability, and the column will bend whichever way costs least energy, about the axis with the <em>smallest</em> second moment. Here that is y-y, at 0.474&times;10<sup>6</sup> mm<sup>4</sup>, so the tube bows across its 50 mm width.</p>
<p>Using I<sub>x</sub> overstates the capacity by 1.44/0.474 = <strong>3.0&times;</strong>. That is the single most common error in a compression check, and it is seductive precisely because the 100 mm depth looks like the important dimension.</p>
<p>Averaging has no physical basis: the buckled shape is a single mode with one curvature, not a blend. The polar second moment belongs to torsion; a closed rectangular tube is torsionally very stiff, so a pure twisting mode is not a concern here (it would be for an open channel or angle, where torsional-flexural buckling is a real additional check).</p>
<p>The nuance worth stating out loud: if the weak direction were braced and the strong direction were not, the governing quantity would be the larger KL/r, not the smaller I, and the answer could flip.</p>`,
  },
  {
    id: "buckling-q40",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A 25 mm square solid steel bar, 900 mm long between pins, carries 30 kN of compression. S<sub>y</sub> = 250 MPa and E = 200 GPa. What is the governing factor of safety?</p>`,
    answer: 2.64,
    explanation: `<p>Compute both limit states and take the lower margin.</p>
<p class="eq">Yield: P<sub>y</sub> = S<sub>y</sub>A = 250 &times; 625 = 156 kN &nbsp;&rarr;&nbsp; n = 156/30 = 5.21</p>
<p class="eq">I = b<sup>4</sup>/12 = 25<sup>4</sup>/12 = 32&thinsp;552 mm<sup>4</sup></p>
<p class="eq">P<sub>cr</sub> = &pi;&sup2;(200000)(32552)/(900)&sup2; = 79.3 kN &nbsp;&rarr;&nbsp; n = 79.3/30 = <strong>2.64</strong></p>
<p>Buckling governs, at half the margin the yield check advertised. Quoting 5.21 would be technically true and practically misleading.</p>
<p>Check the slenderness to confirm which regime we are in: r = 25/&radic;12 = 7.22 mm, so KL/r = 900/7.22 = 125, essentially exactly the transition value of 126 for this steel. The bar sits right at the boundary, which means the elastic Euler answer is about as optimistic as it can legitimately be, a Johnson or code check would give something close to 79 kN, and any real crookedness pushes it below. A margin of 2.64 on a member sitting at the transition is not generous.</p>`,
  },
  {
    id: "buckling-q41",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A 1.0 m pin-ended aluminium tube strut must carry 8 kN with a factor of safety of 2.5 against buckling. E = 70 GPa. Stock is available in 2 mm wall in four outside diameters. Which is the smallest that works?</p>`,
    choices: [
      "25 mm OD &times; 2 mm wall",
      "32 mm OD &times; 2 mm wall",
      "38 mm OD &times; 2 mm wall",
      "50 mm OD &times; 2 mm wall",
    ],
    answer: 2,
    explanation: `<p>The requirement is P<sub>cr</sub> &ge; 2.5 &times; 8 = 20 kN. With K = 1 and L = 1000 mm, P<sub>cr</sub> = &pi;&sup2;(70000)I/10<sup>6</sup> = 0.691&thinsp;I newtons with I in mm<sup>4</sup>, so we need I &ge; 28&thinsp;900 mm<sup>4</sup>.</p>
<p>Running I = &pi;(D<sup>4</sup> &minus; d<sup>4</sup>)/64 for each stock size:</p>
<table><thead><tr><th>OD</th><th>I (mm<sup>4</sup>)</th><th>P<sub>cr</sub> (kN)</th><th>n</th></tr></thead><tbody>
<tr><td>25</td><td>9630</td><td>6.65</td><td>0.83</td></tr>
<tr><td>32</td><td>21&thinsp;300</td><td>14.7</td><td>1.84</td></tr>
<tr><td>38</td><td>36&thinsp;800</td><td>25.4</td><td>3.17</td></tr>
<tr><td>50</td><td>87&thinsp;000</td><td>60.1</td><td>7.51</td></tr>
</tbody></table>
<p>The 38 mm tube is the first to clear 2.5, at n = 3.17. Note the 25 mm tube does not even reach the working load. It buckles at 6.65 kN under an 8 kN demand.</p>
<p>The lesson in the table is the jump sizes. Going 32 &rarr; 38 mm adds 20% to the mass and 73% to the capacity, because I for a thin tube grows roughly as D<sup>3</sup>. On compression members, one stock size up is almost always cheaper than any other fix.</p>`,
  },
  {
    id: "buckling-q42",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A 25 mm diameter solid steel rod, 2.0 m long, is pinned at both ends and loaded in compression. With E = 200 GPa, what average stress does it buckle at, in MPa?</p>`,
    answer: 19.3,
    unit: "MPa",
    explanation: `<p>Go through slenderness so the result is directly comparable to yield. For a solid round bar r = d/4:</p>
<p class="eq">r = 25/4 = 6.25 mm &nbsp;&rarr;&nbsp; KL/r = 2000/6.25 = 320</p>
<p class="eq">&sigma;<sub>cr</sub> = &pi;&sup2;E/(KL/r)&sup2; = &pi;&sup2;(200000)/320&sup2; = 1.974&times;10<sup>6</sup>/102&thinsp;400 = <strong>19.3 MPa</strong></p>
<p>Under 8% of a 250 MPa yield. The rod carries 19.3 &times; 491 = 9.5 kN before it goes, about the weight of a small car resting on a bar you could not bend by hand in tension.</p>
<p>Which is why it feels solid is not an argument about compression members. At KL/r = 320 the rod is deeply into the Euler regime (transition is 126), so material choice is irrelevant and the only useful moves are geometric. Rearranging the same 491 mm&sup2; as a 50 mm OD &times; 3.4 mm tube raises r to about 16.5 mm, drops KL/r to 121, and multiplies capacity roughly sevenfold for identical mass.</p>`,
  },
  {
    id: "buckling-q43",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A slender column is supported sideways by a contact shoe that can push against it but cannot pull. Under one credible mode the column moves away from the shoe. What is the modelling issue?</p>`,
    choices: [
      "The shoe halves KL in every mode, since it fixes that point laterally",
      "Push-only contact can open, so a linear model overstates the bracing it gives",
      "Contact is a nonlinearity, so the column must be checked by yield, not stability",
      "Only the mode that pushes into the shoe is credible, so the other one is discarded",
    ],
    answer: 1,
    explanation: `<p>One-way contact is a nonlinear boundary condition. It only contributes restraint while the column presses into it; if the buckled shape moves the other way, the gap opens and the shoe carries nothing. A linear eigenvalue analysis with the column tied or coupled to the shoe node has no way to represent that, so it will report a node the hardware does not provide.</p>
<p>Since imperfections decide which way a real column goes, and you do not get to choose, the safe assumption is that the column bows away from the shoe. Check both signs of imperfection and take the worse.</p>
<p>The other two miss for related reasons. Nonlinearity in a boundary condition does not move the failure mode from stability to yield. The column still buckles, it just buckles at a load a linear eigensolver cannot compute. And you do not get to discard the mode that opens the gap: the initial bow decides which way the column goes, and the imperfection sign is not yours to specify.</p>
<p>It bites on guides and stops for lifting columns, backing shoes on press rams, snubbers on piping, anti-buckling supports on test coupons. The fix is either a two-sided restraint (a collar rather than a shoe), a preload that keeps contact closed, or an explicit contact analysis. Assuming symmetry is the mistake.</p>`,
  },
  {
    id: "buckling-q44",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A solid 20 mm round bar (A = 314 mm<sup>2</sup>, I = 7.85&times;10<sup>3</sup> mm<sup>4</sup>) is replaced by a tube of the same material and the same cross-sectional area: 40 mm outside diameter with a 34.6 mm bore, giving I = 55.0&times;10<sup>3</sup> mm<sup>4</sup>. By what ratio does the buckling capacity change?</p>`,
    answer: 7.0,
    explanation: `<p>With the same material, length and end conditions, P<sub>cr</sub> is proportional to I:</p>
<p class="eq">P<sub>tube</sub>/P<sub>rod</sub> = 55.0&times;10<sup>3</sup>/7.85&times;10<sup>3</sup> = <strong>7.0</strong></p>
<p>Same alloy, same mass per metre, same length, seven times the buckling load, because the area moved outward. The radius of gyration tells the same story more compactly: r = 5.0 mm for the rod and 13.2 mm for the tube, and P<sub>cr</sub> goes as r&sup2;.</p>
<p>Push the idea further and it eventually breaks. Take the same 314 mm&sup2; out to 100 mm OD and the wall is 1.0 mm, D/t = 100, and local shell buckling at roughly 0.6Et/R, degraded by a knockdown factor for imperfections, becomes the limit long before the column mode. So the correct statement is that section efficiency in compression is bounded by <em>local</em> stability, not by the Euler formula. Choosing where to stop on that curve is the actual design skill.</p>`,
  },
  {
    id: "buckling-q45",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A compression member clears its Euler check by 15%. Reviewing the drawing, you notice there is no straightness callout on the 1.6 m machined bar. What is the right action?</p>`,
    choices: [
      "Nothing; standard mill tolerances are always tight enough for this",
      "Increase the material yield strength to absorb the initial bow",
      "Remove the buckling check, because real columns never bow at all",
      "Add a straightness tolerance and redo the check with that bow",
    ],
    answer: 3,
    explanation: `<p>An uncontrolled dimension is an unbounded input. Without a callout the supplier is entitled to deliver anything within general tolerance, and hot-rolled or drawn stock can arrive at L/500 or worse, 3.2 mm of bow over 1.6 m. Feed that into &delta; = e<sub>0</sub>/(1 &minus; P/P<sub>cr</sub>): at 15% margin, P/P<sub>cr</sub> = 0.87, so the amplification factor is 1/(1 &minus; 0.87) = 7.7 and the 3.2 mm bow becomes 25 mm. The bending stress from that will reach yield long before the Euler load.</p>
<p>Raising S<sub>y</sub> does not change P<sub>cr</sub> at all, so option 2 misses the mechanism, though it does raise the stress the amplified bending can be taken to, which is why it feels plausible.</p>
<p>The action is cheap: specify straightness (L/1000 is a normal, inspectable requirement), state the inspection method, and rerun the check with that value as e<sub>0</sub>. If the member still passes, you have converted an unknown into a controlled one. If it does not, you have found a real problem at drawing-review cost rather than at test cost.</p>`,
  },
  {
    id: "buckling-q46",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>An aluminium mast is a 3.0 m tube, 60 mm OD with a 2 mm wall, giving A = 364 mm<sup>2</sup> and I = 1.534&times;10<sup>5</sup> mm<sup>4</sup>. Treating it as pinned at both ends, what is its slenderness ratio KL/r?</p>`,
    answer: 146,
    explanation: `<p class="eq">r = &radic;(I/A) = &radic;(1.534&times;10<sup>5</sup>/364) = 20.5 mm</p>
<p class="eq">KL/r = (1)(3000)/20.5 = <strong>146</strong></p>
<p>For a thin round tube r &asymp; 0.354D, giving 21.2 mm, close enough to check the arithmetic in your head.</p>
<p>At 146 the mast is well past the transition slenderness of 71, so elastic Euler applies: &sigma;<sub>cr</sub> = 32 MPa and P<sub>cr</sub> = 11.7 kN. The temper is irrelevant to that.</p>`,
  },
  {
    id: "buckling-q47",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A structural steel member has S<sub>y</sub> = 250 MPa, E = 200 GPa and a slenderness ratio of 80. Using the appropriate curve for that slenderness, what critical stress should be reported, in MPa?</p>`,
    figure: figTwoSteels,
    answer: 199,
    unit: "MPa",
    explanation: `<p>First decide which curve is legal. The transition is at</p>
<p class="eq">(KL/r)<sub>c</sub> = &radic;(2&pi;&sup2;E/S<sub>y</sub>) = &radic;(2&pi;&sup2;(200000)/250) = 126</p>
<p>At 80 the member is below the transition, so it is an intermediate column and Euler is not applicable. It would return &pi;&sup2;(200000)/80&sup2; = 308 MPa, above yield, which is impossible. Use the Johnson parabola:</p>
<p class="eq">&sigma;<sub>cr</sub> = S<sub>y</sub>[1 &minus; S<sub>y</sub>(KL/r)&sup2;/(4&pi;&sup2;E)]</p>
<p class="eq">= 250[1 &minus; 250(6400)/(4&pi;&sup2;&middot;200000)] = 250[1 &minus; 0.2026] = <strong>199 MPa</strong></p>
<p>The parabola behaves at both ends. At KL/r = 0 it returns S<sub>y</sub> = 250, as a stub column should. At KL/r = 126 it returns 125 MPa, the Euler value there, because the two curves are tangent at the transition by construction.</p>
<p>The figure makes the real point. Switch to a 700 MPa alloy and the transition drops to 75, so at KL/r = 80 that member would be on the shared Euler branch at 308 MPa. The strong alloy helps here only because 80 happens to sit near its own boundary. Go out to KL/r = 150 and both steels give an identical 88 MPa.</p>`,
  },
  {
    id: "buckling-q48",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A 4.0 m pinned column is a 100 &times; 50 &times; 4 rectangular tube with r about the strong axis of 35.6 mm and r about the weak axis of 20.4 mm. A brace is fitted at mid-height that restrains movement in the weak direction only. After bracing, what is the governing slenderness ratio?</p>`,
    figure: figSwapAxis,
    answer: 112,
    explanation: `<p>Each axis has its own unbraced length, so evaluate both.</p>
<p class="eq">weak axis, now braced: KL/r = 2000/20.4 = 98.0</p>
<p class="eq">strong axis, still unbraced: KL/r = 4000/35.6 = <strong>112</strong></p>
<p>The larger value governs, so after bracing it is the <em>strong</em> axis that controls, at 112. Before bracing the weak axis governed at 4000/20.4 = 196.</p>
<p>The design consequence is the interesting part. Bracing lifted capacity by (196/112)&sup2; = 3.1&times;, not by the 4&times; you would expect from halving a length, because control changed hands partway. A <em>second</em> weak-direction brace would take the weak axis to 49 and buy nothing at all, since the strong axis stays at 112. To go further you would have to brace the strong direction too, or change the section.</p>
<p>Generalise it: bracing is worth doing only until the two axes are balanced. A well-proportioned column has roughly equal KL/r about both axes, and that is what you aim for when choosing between orientations, section shapes and brace positions.</p>`,
  },
  {
    id: "buckling-q49",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A 28 mm diameter steel rod, 1.5 m long, is trapped between two rigid abutments with no axial gap and no external load. With E = 200 GPa, &alpha; = 12&times;10<sup>&minus;6</sup>/&deg;C and pinned-end behaviour, what uniform temperature rise makes it buckle, in &deg;C?</p>`,
    figure: figThermal,
    answer: 17.9,
    unit: "deg C",
    explanation: `<p>Blocked expansion turns the free thermal strain into compressive mechanical strain, so the rod develops P = EA&alpha;&Delta;T. Set that equal to the Euler load and solve for &Delta;T.</p>
<p class="eq">A = &pi;(28)&sup2;/4 = 616 mm&sup2;, &nbsp; I = &pi;(28)<sup>4</sup>/64 = 30&thinsp;172 mm<sup>4</sup></p>
<p class="eq">P<sub>cr</sub> = &pi;&sup2;(200000)(30172)/(1500)&sup2; = 26&thinsp;470 N</p>
<p class="eq">&Delta;T<sub>cr</sub> = P<sub>cr</sub>/(EA&alpha;) = 26470/[(200000)(616)(12&times;10<sup>&minus;6</sup>)] = <strong>17.9 &deg;C</strong></p>
<p>Barely more than the difference between a cool morning and a warm afternoon. For reference, a 40 &deg;C rise would generate 59.1 kN of compression against a 26.5 kN capacity. The rod goes at less than half that temperature.</p>
<p>Now the elegant part: substitute P<sub>cr</sub> and E cancels completely, leaving &Delta;T<sub>cr</sub> = &pi;&sup2;I/(A&alpha;L&sup2;) = &pi;&sup2;r&sup2;/(&alpha;L&sup2;). The buckling temperature depends only on slenderness and expansion coefficient, not on the modulus, so a stiffer material does not help at all. This is the mechanism behind railway sun kinks, buckled pipe runs and bowed sheet-metal panels between rigid frames, and the fixes are all the same: expansion joints, sliding supports, or enough r to survive the temperature range.</p>`,
  },
  {
    id: "buckling-q50",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A test column with a measured initial bow shows lateral deflection growing smoothly and continuously with load, rather than staying at zero and then snapping at one exact value. Why?</p>`,
    figure: figAmplify,
    choices: [
      "A real column yields progressively, so there is no distinct critical load",
      "The initial bow bends it from the start, and P&delta; then amplifies",
      "The test rig was too compliant, so its deflection masked the sudden jump",
      "Initial crookedness raises the critical load, spreading the response over load",
    ],
    answer: 1,
    explanation: `<p>A perfect column has two equilibrium branches that meet at P<sub>cr</sub>, a bifurcation. Below P<sub>cr</sub> the only equilibrium is straight; above it, bent. That is why the ideal curve in the figure is a vertical line with a corner.</p>
<p>A crooked column has no such branch point. It starts at &delta; = e<sub>0</sub> with zero load, and every increment of P acts on the existing offset to produce moment P&delta;, which produces more offset. The exact result for an initially sinusoidal bow is:</p>
<p class="eq">&delta; = e<sub>0</sub>/(1 &minus; P/P<sub>cr</sub>)</p>
<p>a smooth hyperbola that approaches P<sub>cr</sub> asymptotically without ever reaching it. Real failure happens earlier, when P/A + M/S hits yield on the concave face.</p>
<p>The other explanations do not fit the evidence. Progressive yielding would show up as a curve that softens near the end, not one that departs from straight at the very first increment of load. A compliant rig adds axial shortening, not lateral deflection, and the measurement here is lateral. Two things follow from the real mechanism. Crookedness always <em>reduces</em> usable capacity, never raises it, so the last option has the sign backwards. And the shape of that curve is exploitable: plotting &delta;/P against &delta; gives a straight line of slope 1/P<sub>cr</sub>, which is the Southwell plot. It extracts the critical load from sub-critical test data without ever failing the specimen.</p>`,
  },
  {
    id: "buckling-q51",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A shallow arched cover panel carries a centre load. As the load rises the panel suddenly inverts, jumping to a downward-curved shape. An engineer proposes a stronger alloy to prevent it. What is the flaw in that reasoning?</p>`,
    figure: figSnap,
    choices: [
      "It is ordinary Euler buckling and only K needs a different value",
      "It is a fatigue failure that is driven by the number of load cycles",
      "It is a limit point, so extra strength does not create a stable path",
      "It is local plate buckling of the arch's own cross-section",
    ],
    answer: 2,
    explanation: `<p>Snap-through is a <strong>limit-point</strong> instability, not a bifurcation. The load-deflection path rises, turns over at a maximum, and then descends: past that peak there is no adjacent stable equilibrium near the original shape, so under load control the structure accelerates dynamically to a remote configuration. Nothing yielded and nothing broke; the equilibrium path simply ran out.</p>
<p>Because the peak is set by geometry, principally the rise-to-span ratio and the membrane stiffness, a stronger alloy does not move it. The structure was never stress-limited. Stiffness (E) helps, rise helps a great deal, and edge restraint helps; strength does not.</p>
<p>It is also why a bigger stress-based safety factor is misleading here: the failure is not at a stress limit, so factoring stress does not factor the event. You need to compute or measure the limit load itself, usually with a geometrically nonlinear analysis under displacement control that can trace the descending branch.</p>
<p>Where it shows up: shallow domes and covers, over-centre mechanisms and click springs (which use it deliberately), bistable panels, and thin shells under external pressure.</p>`,
  },
  {
    id: "buckling-q52",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A thin cylindrical shell collapses in test at well under half the buckling pressure the closed-form analysis predicted. The test article has small dents and measurable ovality. What is the most likely explanation?</p>`,
    choices: [
      "Shell buckling is imperfection-sensitive, so a knockdown is needed",
      "Dents and ovality raise the collapse pressure slightly, not lower it",
      "Closed sections such as cylinders are not able to buckle at all",
      "Only the yield strength of the shell material matters in this case",
    ],
    answer: 0,
    explanation: `<p>Shells behave very differently from columns in this respect. A column's capacity degrades roughly in proportion to its imperfection; a shell's can fall off a cliff. The classical solutions assume a perfect surface, and real shells have many closely spaced buckling modes, so a small geometric deviation lets the structure find a much lower-energy path. Axially compressed cylinders famously test at 20&ndash;40% of the classical value; externally pressurised ones at 50&ndash;70%.</p>
<p>Ovality is particularly damaging under external pressure because it introduces bending in the shell wall from the first increment of pressure, the same mechanism as an initially crooked column, but the shell has far less reserve.</p>
<p>What practice does about it: empirical knockdown factors from test databases, explicit out-of-roundness limits in pressure-vessel codes, nonlinear analysis with a seeded imperfection (usually the first eigenmode scaled to the manufacturing tolerance), and stiffening rings to shorten the effective unsupported shell length. The tell in an interview is any thin shell where the analysis and the test disagree by a factor rather than a percentage. That is imperfection sensitivity, not an arithmetic error.</p>`,
  },
  {
    id: "buckling-q53",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A thin aircraft skin panel is permitted to wrinkle at loads below ultimate, and the assembly still passes qualification because the stringers pick up the redistributed load. What has to be true for that to be acceptable?</p>`,
    choices: [
      "Any local buckling is harmless once the load has redistributed",
      "Yield strength stops mattering after a panel has once buckled",
      "The panel must carry zero compressive stress after wrinkling",
      "Stable post-buckling and residual strength were demonstrated by test",
    ],
    answer: 3,
    explanation: `<p>Post-buckled skin is a deliberate, qualified design strategy, not an accident that was forgiven. It is allowed because the panel's buckling is <em>stable</em>: the wrinkled skin keeps carrying membrane load along diagonal tension fields, and the load it sheds goes into stringers and frames that were sized to accept it. Effective-width methods and crippling allowables quantify how much the buckled skin still contributes.</p>
<p>What has to be shown, and shown by test as well as analysis: that the post-buckled path is stable rather than a snap; that residual strength to ultimate is adequate with the redistributed load paths; that fastener loads, which change once the skin buckles, remain acceptable; that fatigue and stiffness at limit load are still met; and that repeated buckling does not cause damage growth.</p>
<p>Option 1 is the dangerous generalisation. In an ordinary machine frame or bracket, local buckling changes stiffness, moves the effective centroid, loads fasteners unexpectedly and often precedes collapse. You do not get to claim post-buckling capacity by analogy with aerospace. You get to claim it with the same evidence aerospace produces.</p>`,
  },
  {
    id: "buckling-q54",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A carbon-fibre tube is proposed as a compression strut. The layup is mostly unidirectional, so axial modulus is high but shear stiffness is low and the wall is thin. What deserves the most caution?</p>`,
    choices: [
      "Anisotropy, low shear stiffness and local shell modes can all govern before Euler",
      "Nothing extra: put the axial modulus into &pi;&sup2;EI/(KL)&sup2; and the answer stands",
      "Only compressive fibre strength, since a high-modulus layup cannot buckle globally",
      "Only the resin, since the matrix carries all the compression between the fibres",
    ],
    answer: 0,
    explanation: `<p>Substituting the axial modulus into &pi;&sup2;EI/(KL)&sup2; gives a number, and for a long slender strut it is often a usable first estimate. The trouble is everything the isotropic formula cannot express.</p>
<p>A mostly unidirectional layup has very low transverse and shear stiffness, so shear deformation contributes to the buckling response in a way steel never does. The correct form includes a shear-flexibility correction that reduces capacity. The thin wall makes local shell buckling and crippling live concerns, and those depend on hoop and shear properties the axial modulus says nothing about. Layup asymmetry introduces bend-twist coupling, so the mode may be combined rather than pure bending. And the end fittings usually govern: bonded or bolted joints into a thin composite tube can crush, split or shear out well before the tube's own limit.</p>
<p>None of which means refusing the estimate. State its limits: use the axial-modulus Euler value as a bound, then name shear flexibility, local shell buckling, layup coupling and load introduction as the checks that decide whether the bound is meaningful, and say that composite compression allowables are established by test.</p>`,
  },
  {
    id: "buckling-q55",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A strut passes its global buckling check with a factor of 2.2. In test, the end fitting deforms and rotates, and the strut bows at a load well below the prediction. What did the analysis miss?</p>`,
    choices: [
      "Euler buckling is not possible when end fittings are present",
      "The fitting is part of the stability system, not a rigid support",
      "The member should have been checked as a tension member instead",
      "Crushing at the end acts to increase the rotational restraint there",
    ],
    answer: 1,
    explanation: `<p>P<sub>cr</sub> depends on how load enters the member and on what the ends are attached to, and both of those live in the fitting. When the fitting yields locally or rotates, two things happen at once: the effective K rises, which cuts capacity as 1/K&sup2;; and the load line shifts off the centroid, which adds an eccentricity moment that amplifies. A factor of 2.2 on the bare member evaporates quickly under both.</p>
<p>Option 4 has the mechanism backwards. A fitting that crushes is losing stiffness, not gaining it.</p>
<p>The generalisable point is that a compression member's stability is an <em>assembly</em> property. A complete check covers the member body, the fitting's own stiffness and strength, bearing stress at the pin or bolt, the fastener group, alignment tolerance, and the stiffness of the structure the fitting attaches to. This is also why buckling tests so often expose joint problems rather than member problems: small end rotations have outsized effects that a member-only calculation cannot see.</p>`,
  },
  {
    id: "buckling-q56",
    type: "mc",
    difficulty: 3,
    prompt: `<p>An eigenvalue buckling run returns load factors of 0.8, 3.1 and 7.4. Inspection shows the 0.8 mode is a small wrinkle at a coarsely meshed load pad that does not exist on the real part. What should be done?</p>`,
    choices: [
      "Accept the 7.4 factor, because it is the largest one reported",
      "Discard every mode below 1.0 and leave the model unchanged",
      "Fix the load pad and mesh, then reassess the physical modes",
      "Delete local modes from the output; only global modes matter",
    ],
    answer: 2,
    explanation: `<p>An eigenvalue result is only as good as the geometry, mesh, loads and constraints that produced it. A spurious mode at a badly modelled load pad tells you the model is wrong, which means <em>every</em> number it produced is suspect, including 3.1 and 7.4, since a bad load introduction changes the stress distribution feeding the whole eigenvalue problem.</p>
<p>Picking the largest factor (option 1) is mode shopping. Ignoring sub-unity modes (option 2) leaves a model you have admitted is wrong. Deleting local modes (option 4) is worse still: thin parts genuinely fail locally, and a real local mode at 0.8 would be the answer.</p>
<p>The process is to represent the load pad or contact as it exists, refine the mesh where the mode appeared, rerun, and then look at the lowest <em>physically meaningful</em> mode. Cross-check it against a hand Euler or plate estimate. If they disagree by a factor of two, the boundary conditions are usually the reason. And because eigenvalue analysis assumes a perfect structure, follow up anything imperfection-sensitive with a nonlinear run seeded with a realistic imperfection.</p>`,
  },
  {
    id: "buckling-q57",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A 3.0 m aluminium mast (60 mm OD, 2 mm wall, A = 364 mm<sup>2</sup>, I = 1.534&times;10<sup>5</sup> mm<sup>4</sup>, E = 70 GPa) stands as a cantilever carrying nothing but its own weight. For a free-standing column under self-weight the critical total weight is (qL)<sub>cr</sub> = 7.837EI/L<sup>2</sup>. What is that critical weight, in N?</p>`,
    answer: 9350,
    unit: "N",
    explanation: `<p>Substitute with consistent units (N and mm):</p>
<p class="eq">EI = 70&thinsp;000 &times; 1.534&times;10<sup>5</sup> = 1.074&times;10<sup>10</sup> N&middot;mm&sup2;</p>
<p class="eq">(qL)<sub>cr</sub> = 7.837(1.074&times;10<sup>10</sup>)/(3000)&sup2; = 8.415&times;10<sup>10</sup>/9.0&times;10<sup>6</sup> = <strong>9350 N</strong></p>
<p>Now compare with what the mast actually weighs: volume = 364 &times; 3000 = 1.09&times;10<sup>6</sup> mm&sup3;, mass = 2.95 kg at 2700 kg/m&sup3;, weight = 29 N. The margin is about 320.</p>
<p>So the answer to "does it buckle under its own weight?" is a resounding no, and the number tells you why the question is still worth asking. Self-weight buckling scales as EI/L&sup2; against a weight that grows as L, so the critical length goes as the cube root of EI/(&rho;A). Push this mast to 20 m and the margin falls to 1.1, so wind or ice takes it under; 25 m is well past the limit. That is the regime of tall slender masts, chimneys, launch vehicles on the pad and (famously) the height limit on trees. The other thing to notice: 7.837 is not &pi;&sup2;/4 = 2.47, because the load is distributed rather than applied at the tip, which makes the mast substantially more tolerant than a tip-loaded cantilever.</p>`,
  },
  {
    id: "buckling-q58",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>Estimate the axial load an empty aluminium drinks can supports before its wall buckles. Take it as a 66 mm diameter cylinder with a 0.10 mm wall, E = 70 GPa, classical local buckling stress 0.6Et/R, and a knockdown factor of 0.3 for real imperfections. Give the load in N.</p>`,
    answer: 790,
    unit: "N",
    explanation: `<p>Three steps: local stress, then area, then load.</p>
<p class="eq">R = (66 &minus; 0.1)/2 &asymp; 33.0 mm</p>
<p class="eq">&sigma;<sub>cr</sub> = 0.3 &times; 0.6 &times; 70&thinsp;000 &times; 0.10/33.0 = 0.18 &times; 70000 &times; 0.00303 = 38.2 MPa</p>
<p class="eq">A = &pi;Dt &asymp; &pi;(65.9)(0.10) = 20.7 mm&sup2;</p>
<p class="eq">P = &sigma;<sub>cr</sub>A = 38.2 &times; 20.7 = <strong>790 N</strong></p>
<p>About 80 kg, which matches the well-known result that an undamaged can will support an adult standing on it, and that a small dent drops it to almost nothing.</p>
<p>Every part of this is instructive. The governing mode is <em>local</em> shell buckling, not Euler: with D/t = 660 the wall gives up long before the 120 mm-tall can behaves as a column, and length does not enter the calculation at all. The knockdown factor is not a fudge. Classical shell theory would give 2600 N, and the factor of 3 gap between theory and reality is the standard, measured imperfection sensitivity of axially compressed cylinders. And the failure is catastrophic rather than gradual, which is why the dent-then-stand demonstration works so reliably.</p>`,
  },
  {
    id: "buckling-q59",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A test lab measured the rotational stiffness of a bolted column base and reports a value. The design team wants to use K = 0.7 instead of 1.0, which would double the buckling capacity. On what basis is that acceptable?</p>`,
    choices: [
      "Yes, since the joint is bolted and 0.7 is automatically the safe choice",
      "No, because K may never be taken below 1.0 in a real design",
      "Yes, but only if the applied load stays below half the yield load",
      "Only if the measured stiffness holds over the full load range",
    ],
    answer: 3,
    explanation: `<p>Claiming K = 0.7 is claiming a specific rotational stiffness at the base, and a single measured number is not the same thing. What has to be true is that the joint delivers at least that stiffness at the load level where buckling matters, and keeps delivering it: no slip into bolt clearance, no yielding of the base plate, no loss of preload, no gapping under the combined axial-plus-moment condition, and the same behaviour after thermal cycling and service loads.</p>
<p>The stiffness also has to be compared against the right reference. What matters is the ratio of joint stiffness to the column's own 4EI/L; a joint that seems stiff in isolation can be soft relative to a stubby column.</p>
<p>Option 2 is wrong. K below 1 is entirely legitimate when restraint is real and demonstrated. But note the direction of the risk. Because P<sub>cr</sub> goes as 1/K&sup2;, an optimistic K is unconservative, and it is the one input least likely to be revisited once it is in the calculation. The defensible position is to use the measured value, state the load range it was validated over, and show the sensitivity of the answer between K = 0.7 and K = 1.0 so reviewers can see what rides on it.</p>`,
  },
  {
    id: "buckling-q60",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A column has an initial mid-height bow of 3.0 mm and a critical load of 120 kN. It is loaded to 80 kN in service. What total mid-height lateral deflection should you expect, in mm?</p>`,
    answer: 9.0,
    unit: "mm",
    explanation: `<p>An initially bowed column amplifies its own imperfection:</p>
<p class="eq">&delta; = e<sub>0</sub>/(1 &minus; P/P<sub>cr</sub>)</p>
<p class="eq">P/P<sub>cr</sub> = 80/120 = 0.667</p>
<p class="eq">&delta; = 3.0/(1 &minus; 0.667) = 3.0/0.333 = <strong>9.0 mm</strong></p>
<p>A buckling factor of safety of 1.5, which sounds respectable, has tripled the bow. That is the shape of the amplification curve: it is nearly flat at low load and then climbs steeply, reaching 5&times; at P/P<sub>cr</sub> = 0.8 and 10&times; at 0.9.</p>
<p>The number that actually matters next is stress. The bending moment is P&delta; = 80&thinsp;000 &times; 0.009 = 720 N&middot;m, and that has to be added to P/A before comparing with yield. For most slender members it is this combined check, not the Euler load itself, that sets the allowable. The column reaches yield on its concave face at a load noticeably below P<sub>cr</sub>. It is also why a stability margin of 1.5 is generally regarded as thin: the deflection, the moment and the stress are all still climbing steeply at that point.</p>`,
  },
];

export default extra;
