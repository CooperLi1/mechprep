import type { TopicContent } from "../types";

// ---------------------------------------------------------------------------
// Shear & Bending Moment Diagrams
// ---------------------------------------------------------------------------

const figSign = `<svg viewBox="0 0 460 230" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sm1-v" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
    <marker id="sm1-m" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="115" y="26" text-anchor="middle" font-weight="600" fill="#334155">Positive shear V</text>
  <text x="345" y="26" text-anchor="middle" font-weight="600" fill="#334155">Positive moment M</text>
  <!-- shear element -->
  <rect x="70" y="90" width="90" height="50" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="58" y1="148" x2="58" y2="96" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#sm1-v)"/>
  <line x1="172" y1="82" x2="172" y2="134" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#sm1-v)"/>
  <text x="44" y="122" text-anchor="middle" fill="#1d4ed8" font-weight="600">V</text>
  <text x="188" y="112" text-anchor="middle" fill="#1d4ed8" font-weight="600">V</text>
  <text x="115" y="176" text-anchor="middle" fill="#64748b" font-size="12">up on left face, down on right:</text>
  <text x="115" y="193" text-anchor="middle" fill="#64748b" font-size="12">element rotates clockwise</text>
  <!-- moment element -->
  <rect x="300" y="90" width="90" height="50" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <path d="M 288 140 A 25 25 0 0 1 288 90" fill="none" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sm1-m)"/>
  <path d="M 402 140 A 25 25 0 0 0 402 90" fill="none" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sm1-m)"/>
  <path d="M 306 101 Q 345 122 384 101" fill="none" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="5 3"/>
  <text x="345" y="99" text-anchor="middle" fill="#dc2626" font-size="11">C</text>
  <text x="345" y="136" text-anchor="middle" fill="#dc2626" font-size="11">T</text>
  <text x="252" y="118" text-anchor="middle" fill="#1d4ed8" font-weight="600">M</text>
  <text x="438" y="118" text-anchor="middle" fill="#1d4ed8" font-weight="600">M</text>
  <text x="345" y="176" text-anchor="middle" fill="#64748b" font-size="12">sagging (a smile): CW on the left face,</text>
  <text x="345" y="193" text-anchor="middle" fill="#64748b" font-size="12">CCW on the right, tension on the bottom</text>
</svg>`;

const figPointStack = `<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sm2-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <!-- dashed guides at load / midspan -->
  <line x1="230" y1="46" x2="230" y2="252" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4 4"/>
  <!-- beam -->
  <rect x="76" y="34" width="308" height="11" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="230" y1="10" x2="230" y2="30" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sm2-load)"/>
  <text x="243" y="20" fill="#dc2626" font-weight="600">P</text>
  <!-- pin at A -->
  <polygon points="76,45 66,61 86,61" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="76" cy="45" r="2.5" fill="#334155"/>
  <line x1="60" y1="61" x2="92" y2="61" stroke="#334155" stroke-width="1.5"/>
  <text x="52" y="58" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <!-- roller at B -->
  <polygon points="384,45 374,58 394,58" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="378" cy="62" r="3.8" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="390" cy="62" r="3.8" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="368" y1="66" x2="400" y2="66" stroke="#334155" stroke-width="1.5"/>
  <text x="410" y="58" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  <!-- V diagram -->
  <text x="48" y="144" text-anchor="middle" font-weight="600" fill="#334155">V</text>
  <line x1="62" y1="140" x2="402" y2="140" stroke="#64748b" stroke-width="1"/>
  <rect x="76" y="112" width="154" height="28" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
  <rect x="230" y="140" width="154" height="28" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="150" y="106" text-anchor="middle" fill="#1d4ed8" font-weight="600">+P/2</text>
  <text x="310" y="184" text-anchor="middle" fill="#1d4ed8" font-weight="600">&#8722;P/2</text>
  <!-- M diagram -->
  <text x="48" y="256" text-anchor="middle" font-weight="600" fill="#334155">M</text>
  <line x1="62" y1="252" x2="402" y2="252" stroke="#64748b" stroke-width="1"/>
  <path d="M 76 252 L 230 208 L 384 252" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="230" y="198" text-anchor="middle" fill="#1d4ed8" font-weight="600">PL/4</text>
  <text x="418" y="256" fill="#64748b" font-size="12">x</text>
</svg>`;

const figUdlStack = `<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sm3-load" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
  </defs>
  <line x1="230" y1="46" x2="230" y2="252" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4 4"/>
  <!-- UDL -->
  <line x1="76" y1="14" x2="384" y2="14" stroke="#dc2626" stroke-width="2"/>
  <line x1="76" y1="17" x2="76" y2="30" stroke="#dc2626" stroke-width="1.6" marker-end="url(#sm3-load)"/>
  <line x1="127" y1="17" x2="127" y2="30" stroke="#dc2626" stroke-width="1.6" marker-end="url(#sm3-load)"/>
  <line x1="178" y1="17" x2="178" y2="30" stroke="#dc2626" stroke-width="1.6" marker-end="url(#sm3-load)"/>
  <line x1="230" y1="17" x2="230" y2="30" stroke="#dc2626" stroke-width="1.6" marker-end="url(#sm3-load)"/>
  <line x1="281" y1="17" x2="281" y2="30" stroke="#dc2626" stroke-width="1.6" marker-end="url(#sm3-load)"/>
  <line x1="332" y1="17" x2="332" y2="30" stroke="#dc2626" stroke-width="1.6" marker-end="url(#sm3-load)"/>
  <line x1="384" y1="17" x2="384" y2="30" stroke="#dc2626" stroke-width="1.6" marker-end="url(#sm3-load)"/>
  <text x="60" y="19" text-anchor="end" fill="#dc2626" font-weight="600">w</text>
  <!-- beam -->
  <rect x="76" y="34" width="308" height="11" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <polygon points="76,45 66,61 86,61" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="76" cy="45" r="2.5" fill="#334155"/>
  <line x1="60" y1="61" x2="92" y2="61" stroke="#334155" stroke-width="1.5"/>
  <text x="52" y="58" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <polygon points="384,45 374,58 394,58" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="378" cy="62" r="3.8" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="390" cy="62" r="3.8" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="368" y1="66" x2="400" y2="66" stroke="#334155" stroke-width="1.5"/>
  <text x="410" y="58" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  <!-- V diagram: straight line from +wL/2 to -wL/2 -->
  <text x="48" y="144" text-anchor="middle" font-weight="600" fill="#334155">V</text>
  <line x1="62" y1="140" x2="402" y2="140" stroke="#64748b" stroke-width="1"/>
  <polygon points="76,140 76,112 230,140" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
  <polygon points="230,140 384,168 384,140" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="106" y="106" text-anchor="middle" fill="#1d4ed8" font-weight="600">+wL/2</text>
  <text x="354" y="184" text-anchor="middle" fill="#1d4ed8" font-weight="600">&#8722;wL/2</text>
  <text x="252" y="128" fill="#64748b" font-size="12">V = 0</text>
  <!-- M diagram: parabola -->
  <text x="48" y="256" text-anchor="middle" font-weight="600" fill="#334155">M</text>
  <line x1="62" y1="252" x2="402" y2="252" stroke="#64748b" stroke-width="1"/>
  <path d="M 76 252 Q 230 164 384 252" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="230" y="198" text-anchor="middle" fill="#1d4ed8" font-weight="600">wL&#178;/8</text>
  <text x="418" y="256" fill="#64748b" font-size="12">x</text>
</svg>`;

const figCantStack = `<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sm4-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <!-- wall -->
  <line x1="76" y1="12" x2="76" y2="62" stroke="#334155" stroke-width="2"/>
  <line x1="64" y1="26" x2="76" y2="14" stroke="#64748b" stroke-width="1"/>
  <line x1="64" y1="42" x2="76" y2="30" stroke="#64748b" stroke-width="1"/>
  <line x1="64" y1="58" x2="76" y2="46" stroke="#64748b" stroke-width="1"/>
  <!-- beam -->
  <rect x="76" y="32" width="308" height="11" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="380" y1="6" x2="380" y2="27" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sm4-load)"/>
  <text x="394" y="18" fill="#dc2626" font-weight="600">P</text>
  <text x="98" y="60" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <text x="380" y="60" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  <!-- V diagram: constant +P -->
  <text x="48" y="134" text-anchor="middle" font-weight="600" fill="#334155">V</text>
  <line x1="62" y1="130" x2="402" y2="130" stroke="#64748b" stroke-width="1"/>
  <rect x="76" y="102" width="304" height="28" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="230" y="96" text-anchor="middle" fill="#1d4ed8" font-weight="600">+P (constant)</text>
  <!-- M diagram: linear from -PL to 0 -->
  <text x="48" y="214" text-anchor="middle" font-weight="600" fill="#334155">M</text>
  <line x1="62" y1="210" x2="402" y2="210" stroke="#64748b" stroke-width="1"/>
  <polygon points="76,210 76,254 380,210" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="106" y="270" text-anchor="middle" fill="#dc2626" font-weight="600">&#8722;PL</text>
  <text x="272" y="248" fill="#64748b" font-size="12">hogging: tension on top</text>
  <text x="418" y="214" fill="#64748b" font-size="12">x</text>
</svg>`;

const figQ3 = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="smq3-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <rect x="70" y="110" width="320" height="14" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="230" y1="48" x2="230" y2="106" stroke="#dc2626" stroke-width="2.5" marker-end="url(#smq3-load)"/>
  <text x="230" y="38" text-anchor="middle" fill="#dc2626" font-weight="600">20 kN</text>
  <!-- pin at A -->
  <polygon points="70,124 58,148 82,148" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="70" cy="124" r="3" fill="#334155"/>
  <line x1="50" y1="148" x2="90" y2="148" stroke="#334155" stroke-width="1.5"/>
  <line x1="56" y1="158" x2="66" y2="148" stroke="#64748b" stroke-width="1"/>
  <line x1="68" y1="158" x2="78" y2="148" stroke="#64748b" stroke-width="1"/>
  <line x1="80" y1="158" x2="90" y2="148" stroke="#64748b" stroke-width="1"/>
  <text x="70" y="176" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <!-- roller at B -->
  <polygon points="390,124 378,144 402,144" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="383" cy="150" r="4.5" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="397" cy="150" r="4.5" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="370" y1="156" x2="410" y2="156" stroke="#334155" stroke-width="1.5"/>
  <text x="390" y="176" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  <!-- dimensions -->
  <line x1="70" y1="208" x2="230" y2="208" stroke="#64748b" stroke-width="1"/>
  <line x1="230" y1="208" x2="390" y2="208" stroke="#64748b" stroke-width="1"/>
  <line x1="70" y1="202" x2="70" y2="214" stroke="#64748b" stroke-width="1"/>
  <line x1="230" y1="202" x2="230" y2="214" stroke="#64748b" stroke-width="1"/>
  <line x1="390" y1="202" x2="390" y2="214" stroke="#64748b" stroke-width="1"/>
  <text x="150" y="203" text-anchor="middle" fill="#64748b" font-size="12">2 m</text>
  <text x="310" y="203" text-anchor="middle" fill="#64748b" font-size="12">2 m</text>
</svg>`;

const figQ4 = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="smq4-load" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
  </defs>
  <rect x="70" y="120" width="360" height="14" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <!-- UDL over full span -->
  <line x1="70" y1="62" x2="430" y2="62" stroke="#dc2626" stroke-width="2"/>
  <line x1="70" y1="66" x2="70" y2="112" stroke="#dc2626" stroke-width="1.8" marker-end="url(#smq4-load)"/>
  <line x1="130" y1="66" x2="130" y2="112" stroke="#dc2626" stroke-width="1.8" marker-end="url(#smq4-load)"/>
  <line x1="190" y1="66" x2="190" y2="112" stroke="#dc2626" stroke-width="1.8" marker-end="url(#smq4-load)"/>
  <line x1="250" y1="66" x2="250" y2="112" stroke="#dc2626" stroke-width="1.8" marker-end="url(#smq4-load)"/>
  <line x1="310" y1="66" x2="310" y2="112" stroke="#dc2626" stroke-width="1.8" marker-end="url(#smq4-load)"/>
  <line x1="370" y1="66" x2="370" y2="112" stroke="#dc2626" stroke-width="1.8" marker-end="url(#smq4-load)"/>
  <line x1="430" y1="66" x2="430" y2="112" stroke="#dc2626" stroke-width="1.8" marker-end="url(#smq4-load)"/>
  <text x="250" y="50" text-anchor="middle" fill="#dc2626" font-weight="600">w = 4 kN/m</text>
  <!-- pin at A -->
  <polygon points="70,134 58,158 82,158" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="70" cy="134" r="3" fill="#334155"/>
  <line x1="50" y1="158" x2="90" y2="158" stroke="#334155" stroke-width="1.5"/>
  <line x1="56" y1="168" x2="66" y2="158" stroke="#64748b" stroke-width="1"/>
  <line x1="68" y1="168" x2="78" y2="158" stroke="#64748b" stroke-width="1"/>
  <line x1="80" y1="168" x2="90" y2="158" stroke="#64748b" stroke-width="1"/>
  <text x="70" y="186" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <!-- roller at B -->
  <polygon points="430,134 418,154 442,154" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="423" cy="160" r="4.5" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="437" cy="160" r="4.5" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="410" y1="166" x2="450" y2="166" stroke="#334155" stroke-width="1.5"/>
  <text x="430" y="186" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  <!-- dims -->
  <line x1="70" y1="214" x2="430" y2="214" stroke="#64748b" stroke-width="1"/>
  <line x1="70" y1="208" x2="70" y2="220" stroke="#64748b" stroke-width="1"/>
  <line x1="430" y1="208" x2="430" y2="220" stroke="#64748b" stroke-width="1"/>
  <text x="250" y="209" text-anchor="middle" fill="#64748b" font-size="12">6 m</text>
</svg>`;

const figQ5 = `<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="smq5-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <!-- wall -->
  <line x1="100" y1="70" x2="100" y2="164" stroke="#334155" stroke-width="2"/>
  <line x1="88" y1="86" x2="100" y2="74" stroke="#64748b" stroke-width="1"/>
  <line x1="88" y1="106" x2="100" y2="94" stroke="#64748b" stroke-width="1"/>
  <line x1="88" y1="126" x2="100" y2="114" stroke="#64748b" stroke-width="1"/>
  <line x1="88" y1="146" x2="100" y2="134" stroke="#64748b" stroke-width="1"/>
  <line x1="88" y1="164" x2="100" y2="154" stroke="#64748b" stroke-width="1"/>
  <!-- beam -->
  <rect x="100" y="110" width="300" height="14" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="396" y1="48" x2="396" y2="106" stroke="#dc2626" stroke-width="2.5" marker-end="url(#smq5-load)"/>
  <text x="396" y="38" text-anchor="middle" fill="#dc2626" font-weight="600">2 kN</text>
  <text x="118" y="100" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <text x="380" y="100" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  <!-- dim -->
  <line x1="100" y1="160" x2="396" y2="160" stroke="#64748b" stroke-width="1"/>
  <line x1="100" y1="154" x2="100" y2="166" stroke="#64748b" stroke-width="1"/>
  <line x1="396" y1="154" x2="396" y2="166" stroke="#64748b" stroke-width="1"/>
  <text x="248" y="155" text-anchor="middle" fill="#64748b" font-size="12">1.5 m</text>
</svg>`;

const figQ8 = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="smq8-load" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
  </defs>
  <rect x="70" y="120" width="360" height="14" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <!-- UDL over left 4 m of a 6 m span (70 to 310) -->
  <line x1="70" y1="62" x2="310" y2="62" stroke="#dc2626" stroke-width="2"/>
  <line x1="70" y1="66" x2="70" y2="112" stroke="#dc2626" stroke-width="1.8" marker-end="url(#smq8-load)"/>
  <line x1="118" y1="66" x2="118" y2="112" stroke="#dc2626" stroke-width="1.8" marker-end="url(#smq8-load)"/>
  <line x1="166" y1="66" x2="166" y2="112" stroke="#dc2626" stroke-width="1.8" marker-end="url(#smq8-load)"/>
  <line x1="214" y1="66" x2="214" y2="112" stroke="#dc2626" stroke-width="1.8" marker-end="url(#smq8-load)"/>
  <line x1="262" y1="66" x2="262" y2="112" stroke="#dc2626" stroke-width="1.8" marker-end="url(#smq8-load)"/>
  <line x1="310" y1="66" x2="310" y2="112" stroke="#dc2626" stroke-width="1.8" marker-end="url(#smq8-load)"/>
  <text x="190" y="50" text-anchor="middle" fill="#dc2626" font-weight="600">w = 5 kN/m</text>
  <!-- pin at A -->
  <polygon points="70,134 58,158 82,158" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="70" cy="134" r="3" fill="#334155"/>
  <line x1="50" y1="158" x2="90" y2="158" stroke="#334155" stroke-width="1.5"/>
  <line x1="56" y1="168" x2="66" y2="158" stroke="#64748b" stroke-width="1"/>
  <line x1="68" y1="168" x2="78" y2="158" stroke="#64748b" stroke-width="1"/>
  <line x1="80" y1="168" x2="90" y2="158" stroke="#64748b" stroke-width="1"/>
  <text x="70" y="186" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <!-- roller at B -->
  <polygon points="430,134 418,154 442,154" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="423" cy="160" r="4.5" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="437" cy="160" r="4.5" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="410" y1="166" x2="450" y2="166" stroke="#334155" stroke-width="1.5"/>
  <text x="430" y="186" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  <!-- dims -->
  <line x1="70" y1="214" x2="310" y2="214" stroke="#64748b" stroke-width="1"/>
  <line x1="310" y1="214" x2="430" y2="214" stroke="#64748b" stroke-width="1"/>
  <line x1="70" y1="208" x2="70" y2="220" stroke="#64748b" stroke-width="1"/>
  <line x1="310" y1="208" x2="310" y2="220" stroke="#64748b" stroke-width="1"/>
  <line x1="430" y1="208" x2="430" y2="220" stroke="#64748b" stroke-width="1"/>
  <text x="190" y="209" text-anchor="middle" fill="#64748b" font-size="12">4 m</text>
  <text x="370" y="209" text-anchor="middle" fill="#64748b" font-size="12">2 m</text>
</svg>`;

const figQ10 = `<svg viewBox="0 0 460 230" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="smq10-ax" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <!-- shaded areas -->
  <rect x="70" y="90" width="110" height="60" fill="#dbeafe"/>
  <rect x="180" y="150" width="220" height="30" fill="#dbeafe"/>
  <!-- axes -->
  <line x1="70" y1="210" x2="70" y2="36" stroke="#64748b" stroke-width="1.4" marker-end="url(#smq10-ax)"/>
  <line x1="58" y1="150" x2="432" y2="150" stroke="#64748b" stroke-width="1.4" marker-end="url(#smq10-ax)"/>
  <text x="82" y="34" fill="#334155" font-weight="600" font-size="12">V (kN)</text>
  <text x="436" y="168" text-anchor="end" fill="#334155" font-weight="600" font-size="12">x (m)</text>
  <!-- V trace -->
  <path d="M 70 90 L 180 90 L 180 180 L 400 180 L 400 150" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <!-- value labels -->
  <text x="125" y="80" text-anchor="middle" fill="#1d4ed8" font-weight="600">+10</text>
  <text x="290" y="198" text-anchor="middle" fill="#1d4ed8" font-weight="600">&#8722;5</text>
  <!-- ticks -->
  <line x1="180" y1="146" x2="180" y2="154" stroke="#64748b" stroke-width="1"/>
  <text x="180" y="142" text-anchor="middle" fill="#64748b" font-size="12">2</text>
  <line x1="400" y1="146" x2="400" y2="154" stroke="#64748b" stroke-width="1"/>
  <text x="408" y="142" text-anchor="middle" fill="#64748b" font-size="12">6</text>
  <text x="60" y="154" text-anchor="end" fill="#64748b" font-size="12">0</text>
  <text x="230" y="222" text-anchor="middle" fill="#64748b" font-size="12">Shear diagram for a 6 m simply supported beam</text>
</svg>`;

const figMatchM = `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="smq11-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <!-- beam -->
  <rect x="60" y="40" width="340" height="11" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="173" y1="6" x2="173" y2="36" stroke="#dc2626" stroke-width="2.5" marker-end="url(#smq11-load)"/>
  <text x="186" y="18" fill="#dc2626" font-weight="600">15 kN</text>
  <polygon points="60,51 50,66 70,66" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="60" cy="51" r="2.5" fill="#334155"/>
  <line x1="44" y1="66" x2="76" y2="66" stroke="#334155" stroke-width="1.5"/>
  <text x="36" y="62" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <polygon points="400,51 390,64 410,64" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="394" cy="68" r="3.6" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="406" cy="68" r="3.6" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="384" y1="72" x2="416" y2="72" stroke="#334155" stroke-width="1.5"/>
  <text x="426" y="62" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  <!-- dims -->
  <line x1="60" y1="88" x2="173" y2="88" stroke="#64748b" stroke-width="1"/>
  <line x1="173" y1="88" x2="400" y2="88" stroke="#64748b" stroke-width="1"/>
  <line x1="60" y1="82" x2="60" y2="94" stroke="#64748b" stroke-width="1"/>
  <line x1="173" y1="82" x2="173" y2="94" stroke="#64748b" stroke-width="1"/>
  <line x1="400" y1="82" x2="400" y2="94" stroke="#64748b" stroke-width="1"/>
  <text x="116" y="84" text-anchor="middle" fill="#64748b" font-size="12">2 m</text>
  <text x="286" y="84" text-anchor="middle" fill="#64748b" font-size="12">4 m</text>
  <!-- candidate A: triangle peaking at midspan -->
  <text x="30" y="118" font-weight="600" fill="#334155">A</text>
  <line x1="30" y1="175" x2="196" y2="175" stroke="#64748b" stroke-width="1"/>
  <path d="M 30 175 L 128 135 L 190 175" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.6"/>
  <!-- candidate B: parabola peaking near the load -->
  <text x="250" y="118" font-weight="600" fill="#334155">B</text>
  <line x1="250" y1="175" x2="416" y2="175" stroke="#64748b" stroke-width="1"/>
  <path d="M 250 175 Q 321 105 410 175" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.6"/>
  <!-- candidate C: triangle peaking at 2 m (correct) -->
  <text x="30" y="218" font-weight="600" fill="#334155">C</text>
  <line x1="30" y1="275" x2="196" y2="275" stroke="#64748b" stroke-width="1"/>
  <path d="M 30 275 L 101 235 L 190 275" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.6"/>
  <!-- candidate D: triangle peaking at 4 m -->
  <text x="250" y="218" font-weight="600" fill="#334155">D</text>
  <line x1="250" y1="275" x2="416" y2="275" stroke="#64748b" stroke-width="1"/>
  <path d="M 250 275 L 357 235 L 410 275" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.6"/>
  <text x="228" y="298" text-anchor="middle" fill="#64748b" font-size="11">Four candidate bending-moment diagrams (sagging plotted up)</text>
</svg>`;

const figFixFix = `<svg viewBox="0 0 460 210" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="smq12-load" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
  </defs>
  <!-- UDL -->
  <line x1="90" y1="60" x2="370" y2="60" stroke="#dc2626" stroke-width="2"/>
  <line x1="90" y1="64" x2="90" y2="108" stroke="#dc2626" stroke-width="1.8" marker-end="url(#smq12-load)"/>
  <line x1="146" y1="64" x2="146" y2="108" stroke="#dc2626" stroke-width="1.8" marker-end="url(#smq12-load)"/>
  <line x1="202" y1="64" x2="202" y2="108" stroke="#dc2626" stroke-width="1.8" marker-end="url(#smq12-load)"/>
  <line x1="258" y1="64" x2="258" y2="108" stroke="#dc2626" stroke-width="1.8" marker-end="url(#smq12-load)"/>
  <line x1="314" y1="64" x2="314" y2="108" stroke="#dc2626" stroke-width="1.8" marker-end="url(#smq12-load)"/>
  <line x1="370" y1="64" x2="370" y2="108" stroke="#dc2626" stroke-width="1.8" marker-end="url(#smq12-load)"/>
  <text x="230" y="48" text-anchor="middle" fill="#dc2626" font-weight="600">w = 12 kN/m</text>
  <!-- beam -->
  <rect x="90" y="116" width="280" height="14" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <!-- left wall -->
  <line x1="90" y1="98" x2="90" y2="150" stroke="#334155" stroke-width="2.5"/>
  <line x1="78" y1="112" x2="90" y2="100" stroke="#64748b" stroke-width="1"/>
  <line x1="78" y1="128" x2="90" y2="116" stroke="#64748b" stroke-width="1"/>
  <line x1="78" y1="144" x2="90" y2="132" stroke="#64748b" stroke-width="1"/>
  <line x1="78" y1="158" x2="90" y2="146" stroke="#64748b" stroke-width="1"/>
  <text x="90" y="168" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <!-- right wall -->
  <line x1="370" y1="98" x2="370" y2="150" stroke="#334155" stroke-width="2.5"/>
  <line x1="370" y1="100" x2="382" y2="112" stroke="#64748b" stroke-width="1"/>
  <line x1="370" y1="116" x2="382" y2="128" stroke="#64748b" stroke-width="1"/>
  <line x1="370" y1="132" x2="382" y2="144" stroke="#64748b" stroke-width="1"/>
  <line x1="370" y1="146" x2="382" y2="158" stroke="#64748b" stroke-width="1"/>
  <text x="370" y="168" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  <!-- dim -->
  <line x1="90" y1="190" x2="370" y2="190" stroke="#64748b" stroke-width="1"/>
  <line x1="90" y1="184" x2="90" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="370" y1="184" x2="370" y2="196" stroke="#64748b" stroke-width="1"/>
  <text x="230" y="185" text-anchor="middle" fill="#64748b" font-size="12">L = 4 m, both ends built in</text>
</svg>`;

const figErrV = `<svg viewBox="0 0 460 270" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="smq13-m" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
    <marker id="smq13-ax" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <!-- beam -->
  <rect x="70" y="52" width="320" height="11" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <!-- applied couple at midspan, clockwise -->
  <path d="M 208 26 A 22 22 0 1 1 208 70" fill="none" stroke="#dc2626" stroke-width="2.2" marker-end="url(#smq13-m)"/>
  <text x="230" y="20" text-anchor="middle" fill="#dc2626" font-weight="600">24 kN&#183;m</text>
  <polygon points="70,63 60,78 80,78" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="70" cy="63" r="2.5" fill="#334155"/>
  <line x1="54" y1="78" x2="86" y2="78" stroke="#334155" stroke-width="1.5"/>
  <text x="46" y="74" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <polygon points="390,63 380,76 400,76" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="384" cy="80" r="3.6" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="396" cy="80" r="3.6" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="374" y1="84" x2="406" y2="84" stroke="#334155" stroke-width="1.5"/>
  <text x="416" y="74" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  <line x1="70" y1="100" x2="230" y2="100" stroke="#64748b" stroke-width="1"/>
  <line x1="230" y1="100" x2="390" y2="100" stroke="#64748b" stroke-width="1"/>
  <line x1="70" y1="94" x2="70" y2="106" stroke="#64748b" stroke-width="1"/>
  <line x1="230" y1="94" x2="230" y2="106" stroke="#64748b" stroke-width="1"/>
  <line x1="390" y1="94" x2="390" y2="106" stroke="#64748b" stroke-width="1"/>
  <text x="150" y="96" text-anchor="middle" fill="#64748b" font-size="12">3 m</text>
  <text x="310" y="96" text-anchor="middle" fill="#64748b" font-size="12">3 m</text>
  <!-- candidate V diagram (WRONG) -->
  <line x1="70" y1="240" x2="70" y2="132" stroke="#64748b" stroke-width="1.3" marker-end="url(#smq13-ax)"/>
  <line x1="58" y1="190" x2="424" y2="190" stroke="#64748b" stroke-width="1.3" marker-end="url(#smq13-ax)"/>
  <text x="82" y="132" fill="#334155" font-weight="600" font-size="12">V (kN)</text>
  <text x="428" y="208" text-anchor="end" fill="#334155" font-weight="600" font-size="12">x (m)</text>
  <rect x="70" y="162" width="160" height="28" fill="#dbeafe"/>
  <rect x="230" y="190" width="160" height="28" fill="#dbeafe"/>
  <path d="M 70 162 L 230 162 L 230 218 L 390 218 L 390 190" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <text x="150" y="156" text-anchor="middle" fill="#1d4ed8" font-weight="600">+4</text>
  <text x="310" y="234" text-anchor="middle" fill="#1d4ed8" font-weight="600">&#8722;4</text>
  <text x="228" y="262" text-anchor="middle" fill="#64748b" font-size="11">Candidate shear diagram submitted in a design review</text>
</svg>`;

const content: TopicContent = {
  lesson: {
    title: "Shear & Bending Moment Diagrams",
    intro: `<p>Given any beam, an interviewer&rsquo;s favourite request is <strong>&ldquo;sketch the shear and moment diagrams&rdquo;</strong>. The diagrams are how you find where a beam works hardest. The peak bending moment sets the bending stress, and its location tells you where the part cracks first. Strong candidates sketch them in seconds using two differential relations and a handful of jump rules, without ever writing a piecewise equation.</p>
<p>This lesson builds that skill: sign conventions, the slope and area rules, what each load type does to the diagrams, the three classic cases every interviewer expects you to know cold, and how to pin down the maximum moment.</p>`,
    sections: [
      {
        heading: "Internal loads and sign conventions",
        html: `<p>Cut a beam at any section and the removed material must be replaced by internal loads: an axial force N, a <strong>shear force V</strong> transverse to the axis, and a <strong>bending moment M</strong>. V and M vary along the beam, and the diagrams are simply plots of V(x) and M(x).</p>
<p><strong>N</strong> has force units, <strong>V</strong> has force units, <strong>M</strong> has force times length units, and <strong>x</strong> is distance along the beam from your chosen origin. The sign convention is not sacred; consistency is. State it once, then let negative values tell you the internal action runs opposite your assumed positive direction.</p>
<figure class="fig">${figSign}<figcaption>The standard beam sign convention: positive shear rotates an element clockwise; positive moment makes the beam sag.</figcaption></figure>
<ul>
<li><strong>Positive V</strong>: the material on the left of the cut pushes the right portion <em>up</em>, equivalently V acts up on the left face of an element and down on the right face, a clockwise couple.</li>
<li><strong>Positive M</strong>: <em>sagging</em>, concave up, compression in the top fibre and tension in the bottom. Negative M is <em>hogging</em>, cantilever behaviour, with tension on top.</li>
</ul>
<div class="callout"><strong>Fast method to evaluate V and M at any section:</strong> look only at one side of the cut. V = sum of upward forces on the left segment; M = sum of moments of those forces about the cut, with <strong>clockwise</strong> from the left segment counting as positive and sagging, so an upward force to the left of the cut gives positive M of arm &times; force. You never need the other side.</div>
<p>Check it on the simplest case: a simply supported beam with R<sub>A</sub> = P/2 up, cut a distance x to the right. R<sub>A</sub> turns the left segment clockwise about the cut, and M(x) = +Px/2 is sagging, positive as it must be. Call counterclockwise positive instead and you get the sign of every simply supported moment backwards.</p>`,
      },
      {
        heading: "The two differential relations",
        html: `<p>With distributed load w(x) taken positive downward, equilibrium of a beam slice dx gives the two equations that generate every diagram:</p>
<p class="eq">dV/dx = &minus;w&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dM/dx = V</p>
<p>Here <strong>w</strong> is load intensity in N/m or kN/m. These relations assume a slender beam model with loads transverse to the beam, and concentrated forces and applied couples are handled as jumps rather than forced into w(x) as ordinary smooth functions.</p>
<p>Read them as drawing instructions:</p>
<ul>
<li><strong>The slope of V equals minus the load intensity.</strong> No load &rarr; V is flat. Uniform load &rarr; V is a straight ramp with slope &minus;w.</li>
<li><strong>The slope of M equals the value of V.</strong> Where V is large and positive, M climbs steeply; where V = 0, M has a horizontal tangent, a local max or min.</li>
</ul>
<p>Integrated between two sections, these become the <strong>area rules</strong>:</p>
<p class="eq">&Delta;V = &minus;(area under the load diagram)&nbsp;&nbsp;&nbsp;&nbsp;&Delta;M = area under the V diagram</p>
<p>The area rule for M is the workhorse. To get the moment at any point, start where M is known, zero at a simple or free end, and add up the signed area of the shear diagram. Faster and less error-prone than writing M(x) piecewise.</p>`,
      },
      {
        heading: "What each load type does to the diagrams",
        html: `<p>Because V integrates the load and M integrates V, each load feature shows up one polynomial degree higher in M than in V:</p>
<table>
<thead><tr><th>Feature</th><th>Effect on V</th><th>Effect on M</th></tr></thead>
<tbody>
<tr><td>Point load P (down)</td><td>Jump <strong>down</strong> by P</td><td>Kink (slope change), no jump</td></tr>
<tr><td>Support reaction R (up)</td><td>Jump <strong>up</strong> by R</td><td>Kink</td></tr>
<tr><td>UDL w over a segment</td><td>Straight line, slope &minus;w</td><td>Parabola, curving downward</td></tr>
<tr><td>Applied couple M&#8320;</td><td><strong>No change</strong></td><td>Jump by M&#8320; (clockwise couple &rarr; jump up, moving left to right)</td></tr>
<tr><td>Free or simple end</td><td>&mdash;</td><td>M = 0 (unless a couple acts right at the end)</td></tr>
</tbody>
</table>
<div class="callout warn"><strong>An applied couple leaves the shear diagram completely untouched</strong>, because a couple contributes zero net force. A V diagram that steps at a couple is wrong. Conversely M jumps <em>only</em> at applied couples, never at point forces.</div>`,
      },
      {
        heading: "The three classics — memorize these shapes",
        html: `<p><strong>1. Simply supported, centre point load P.</strong> Reactions P/2 each. V is +P/2 on the left half and drops through the load to &minus;P/2. M is a triangle peaking under the load:</p>
<figure class="fig">${figPointStack}<figcaption>Simply supported beam, center point load: rectangular shear blocks, triangular moment diagram with peak PL/4 at midspan.</figcaption></figure>
<p><strong>2. Simply supported, full UDL w.</strong> Reactions wL/2 each. V ramps linearly from +wL/2 to &minus;wL/2, crossing zero at midspan, and M is a parabola with peak wL&sup2;/8 there:</p>
<figure class="fig">${figUdlStack}<figcaption>Simply supported beam with a uniform load: linear shear crossing zero at midspan, parabolic moment with peak wL&sup2;/8.</figcaption></figure>
<p><strong>3. Cantilever, end load P.</strong> V = +P everywhere; M runs linearly from &minus;PL at the wall to zero at the tip. The beam hogs, with tension in the top fibre:</p>
<figure class="fig">${figCantStack}<figcaption>Cantilever with a tip load: constant shear, linear moment reaching &minus;PL at the fixed end. The wall section is always the critical one.</figcaption></figure>
<p>Two more values worth memorizing. A cantilever under full UDL has |M|<sub>max</sub> = wL&sup2;/2 at the wall. And a midspan point load P = wL produces <em>double</em> the peak moment of the same total load spread out, PL/4 = wL&sup2;/4 against wL&sup2;/8, so spreading load out is good for beams.</p>`,
      },
      {
        heading: "Finding the maximum moment",
        html: `<p>Since dM/dx = V, interior extrema of M occur <strong>where V = 0 or changes sign</strong>. The full checklist of candidate locations:</p>
<ul>
<li>every point where V crosses zero (set V(x) = 0 and solve),</li>
<li>every applied couple, since M jumps there,</li>
<li>fixed supports and interior supports, where |M| can peak with V &ne; 0; the cantilever wall is the standard example.</li>
</ul>
<p><strong>Worked partial-UDL example</strong>, the interview favourite. A 6 m simply supported beam carries w = 6 kN/m over the left 3 m only. Reactions: total load 18 kN at 1.5 m from A, so &Sigma;M<sub>A</sub> gives B<sub>y</sub> = 18(1.5)/6 = 4.5 kN and A<sub>y</sub> = 13.5 kN.</p>
<p class="eq">V(x) = 13.5 &minus; 6x = 0 &nbsp;&rarr;&nbsp; x = 2.25 m</p>
<p>The zero crossing is <em>inside</em> the loaded region, not at midspan. The peak moment is the area under V up to that point, a triangle, or directly:</p>
<p class="eq">M<sub>max</sub> = 13.5(2.25) &minus; 6(2.25)&sup2;/2 = 30.4 &minus; 15.2 = 15.2 kN&middot;m</p>
<p>Closure confirms it. Keep integrating V past the peak and M must land on zero at B. From 2.25 m to 3 m the shear ramps from 0 to &minus;4.5 kN, shedding a triangle &frac12;(0.75)(4.5) = 1.69 kN&middot;m; from 3 m to 6 m it is constant at &minus;4.5 kN, shedding a rectangle 4.5 &times; 3 = 13.5 kN&middot;m. Then 15.19 &minus; 1.69 &minus; 13.5 = 0 at B. &#10003;</p>
<p>The common slip here is a <em>modelling</em> error rather than arithmetic. Treating the whole 2.25&ndash;6 m stretch as one rectangle at &minus;4.5 kN gives 4.5 &times; 3.75 = 16.9 and lands at &minus;1.7 instead of 0, because shear is not constant until the load ends at 3 m. Closure at the far support is the built-in error check, so use it every time.</p>`,
      },
      {
        heading: "Reading diagrams like a designer",
        html: `<p>Interviewers push past the sketch: <em>what do you do with it?</em></p>
<ul>
<li><strong>Peak |M| sets bending stress</strong>, &sigma; = Mc/I at the extreme fibre of the critical section. The moment diagram tells you where to beef up a section, add a doubler, or expect the first crack.</li>
<li><strong>Sign of M tells you which side is in tension</strong>, which is where fatigue cracks start and where concrete needs rebar. A cantilever bracket cracks on top at the root, not at the tip.</li>
<li><strong>Inflection points</strong>, the M = 0 crossings inside the span, are where curvature reverses. Good places to splice members, since the splice sees little bending.</li>
<li><strong>Peak |V| matters too.</strong> Shear governs short stubby beams, thin webs, and bolted or welded connections near supports.</li>
</ul>
<div class="callout"><strong>A flow that scores well:</strong> reactions &rarr; V diagram left-to-right using jumps and slopes &rarr; M diagram by areas &rarr; state the peak values with units &rarr; point at the critical section and say what fails there. Narrate each rule as you use it.</div>`,
      },
    ],
    equations: [
      { name: "Load–shear relation", formula: "dV/dx = &minus;w", note: "V is internal shear, x is beam coordinate, and w is distributed load intensity using the chosen sign convention." },
      { name: "Shear–moment relation", formula: "dM/dx = V", note: "M is internal bending moment. Moment extrema occur where V crosses zero, not necessarily where the load is largest." },
      { name: "Area rule", formula: "M&#8322; &minus; M&#8321; = area under V from x&#8321; to x&#8322;", note: "The signed area under the shear diagram gives change in bending moment between two stations." },
      { name: "Jump rules", formula: "&Delta;V = &minus;P at a point load; &Delta;M = M&#8320; at a couple", note: "P is point load and M&#8320; is applied couple. Couples jump moment but do not change shear." },
      { name: "SS beam, center point load", formula: "M<sub>max</sub> = PL/4", note: "P is the midspan point load and L is span. Maximum moment occurs at midspan where shear changes sign." },
      { name: "SS beam, full UDL", formula: "M<sub>max</sub> = wL&sup2;/8", note: "w is uniform load over full simply supported span L; reactions are wL/2 and max moment is at midspan." },
      { name: "Cantilever, end load", formula: "|M|<sub>max</sub> = PL", note: "P is the free-end load and L is cantilever length. The wall carries the maximum moment and shear is P throughout." },
      { name: "Cantilever, full UDL", formula: "|M|<sub>max</sub> = wL&sup2;/2", note: "w is uniform load along cantilever length L. Maximum moment occurs at the fixed wall." },
    ],
    interviewTips: [
      "Get the reactions right first, because every diagram value downstream inherits a reaction error. Check them against the total load before drawing anything.",
      "Draw V left to right with just two moves: jump at every concentrated force, up for reactions and down for loads, and ramp at slope minus w across distributed load. Then build M from areas under V.",
      "Use closure as your error check. V and M must both return to zero at the far end of the beam, and if they do not, find the mistake before the interviewer does.",
      "Memorize the big four peak values, PL/4, wL^2/8, PL and wL^2/2, along with their diagram shapes. Interviewers expect them without derivation.",
      "The maximum moment is usually where V crosses zero, but check applied couples and fixed supports too, where |M| can be largest with V nowhere near zero.",
      "At an applied couple only M jumps; at a point force only V jumps. Mixing those up is the most common diagram error there is.",
    ],
  },

  questions: [
    {
      id: "shear-moment-q01",
      type: "mc",
      difficulty: 1,
      prompt: `<p>The welded steel bracket in the figure cracked in service after roughly 200&nbsp;000 load cycles. Where did the crack start, and on which face?</p>`,
      figure: figQ5,
      choices: [
        "Bottom face at the wall, where the moment reaches its peak value",
        "Top face at the wall &mdash; hogging peaks there, and the weld toe sits in that tension field",
        "Top face at the tip, directly beneath the point where load is applied",
        "Bottom face at midlength, where shear and moment are both moderate",
      ],
      answer: 1,
      explanation: `<p>Two facts decide it. The internal moment grows linearly from zero at the tip to its largest magnitude at the wall, so &sigma; = Mc/I peaks at the root, and the weld toe adds a stress concentration in the same place. And the cantilever hogs, so M is negative and the <em>top</em> fibre carries tension.</p>
<p class="eq">|M|<sub>wall</sub> = PL = 2 &times; 1.5 = 3 kN&middot;m, tension on top</p>
<p>Fatigue cracks initiate under tension, so the crack starts at the top surface at the weld toe and grows downward. The bottom face at the root is in compression, the last place a crack will start, and the tip carries M = 0 however big P is. The fix is a generous root fillet or a gusset that moves the weld toe off the peak-moment section, not a thicker plate.</p>`,
    },
    {
      id: "shear-moment-q02",
      type: "mc",
      difficulty: 1,
      prompt: `<p>Walking left to right along a beam, you find a 2 m stretch where the shear diagram is a straight line falling from +9 kN to +1 kN. What acts on the beam over that stretch?</p>`,
      choices: [
        "A downward uniform load of 4 kN/m, with no concentrated force",
        "A downward uniform load of 8 kN/m spread over the 2 m stretch",
        "A single 8 kN downward point load somewhere inside the stretch",
        "An applied couple of 8 kN&middot;m acting at the middle of the stretch",
      ],
      answer: 0,
      explanation: `<p class="eq">w = &minus;&Delta;V/&Delta;x = &minus;(1 &minus; 9)/2 = <strong>4 kN/m downward</strong></p>
<p>Read the slope, not the drop. 8 kN/m is the total drop in kN; dividing by the 2 m length is the step people skip. A point load would step V rather than ramping it, and a couple leaves V untouched.</p>`,
    },
    {
      id: "shear-moment-q03",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>The 4 m simply supported gantry rail shown carries a 20 kN hoist parked at midspan. What is the peak bending moment in the rail, in kN&middot;m?</p>`,
      figure: figQ3,
      answer: 20,
      unit: "kN·m",
      explanation: `<p class="eq">M<sub>max</sub> = PL/4 = 20 &times; 4 / 4 = <strong>20 kN&middot;m</strong></p>
<p>Symmetry gives each reaction 10 kN, so V flips sign under the hoist and M peaks there at 10 &times; 2. PL/8 is the peak for the same total load spread uniformly. Off-centre it becomes Pab/L, largest at midspan, which is why midspan is the design case.</p>`,
    },
    {
      id: "shear-moment-q04",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>The 6 m walkway beam shown is simply supported and carries a uniform load of 4 kN/m over its whole length. What is its peak bending moment, in kN&middot;m?</p>`,
      figure: figQ4,
      answer: 18,
      unit: "kN·m",
      explanation: `<p class="eq">M<sub>max</sub> = wL&sup2;/8 = 4 &times; 6&sup2;/8 = 144/8 = <strong>18 kN&middot;m</strong></p>
<p>Total load wL = 24 kN, split evenly into 12 kN reactions, so V runs linearly from +12 kN at A to &minus;12 kN at B and crosses zero at midspan. The positive triangle of V is &frac12; &times; 3 m &times; 12 kN = 18 kN&middot;m, which is the same number by area. &#10003;</p>
<p>36 kN&middot;m replaces the UDL with a 24 kN point load at midspan, giving wL&sup2;/4. That doubles the true peak, and while the substitution is fine for reactions it is never legal for internal diagrams. 3 kN&middot;m drops the square and breaks the units on the way.</p>`,
    },
    {
      id: "shear-moment-q05",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>The cantilever shown is 1.5 m long and carries a 2 kN downward load at its free end. What is the magnitude of the bending moment at the fixed end, in kN&middot;m?</p>`,
      figure: figQ5,
      answer: 3,
      unit: "kN·m",
      explanation: `<p>Cut at the wall and look only at what hangs outboard: a single 2 kN force on a 1.5 m arm.</p>
<p class="eq">|M|<sub>wall</sub> = PL = 2 &times; 1.5 = <strong>3 kN&middot;m</strong></p>
<p>V = +2 kN constant everywhere, since the same single force sits outboard of every cut, and M runs linearly from &minus;3 kN&middot;m at the wall to 0 at the tip. Negative means hogging, so the top fibre is in tension along the whole member.</p>
<p>Spread that same 2 kN uniformly and the wall moment halves, because the resultant moves from the tip to midlength: wL&sup2;/2 = (1.333)(1.5&sup2;)/2 = 1.5 kN&middot;m, which is 2 &times; 0.75. &#10003; Where the load sits matters as much as how much of it there is.</p>`,
    },
    {
      id: "shear-moment-q06",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>The measured <strong>shear diagram</strong> for a 6 m floor joist is plotted below. Using the area rule alone, what is the largest bending moment the joist carries, in kN&middot;m?</p>`,
      figure: figQ10,
      answer: 20,
      unit: "kN·m",
      explanation: `<p>M starts at zero at the simple support and accumulates the signed area under V, peaking where V changes sign at x = 2 m:</p>
<p class="eq">M<sub>max</sub> = M(0) + (10 kN)(2 m) = 0 + <strong>20 kN&middot;m</strong></p>
<p>The remaining area is (&minus;5)(4) = &minus;20 kN&middot;m, bringing M back to zero at the far support exactly as a simple end demands. &#10003; Had it not closed, a reaction would be wrong.</p>
<p>Read the plot further and it tells you the loading. The 15 kN downward step at x = 2 m is a point load, and the flat segments say there is no distributed load anywhere, so M has to be straight lines: a triangle peaking at 20 kN&middot;m. Being handed a V plot and asked for M checks whether you treat M as the running integral of V rather than starting over.</p>`,
    },
    {
      id: "shear-moment-q07",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>The 6 m simply supported beam shown carries 5 kN/m over the left 4 m only, and nothing over the right 2 m. What is the maximum bending moment, in kN&middot;m?</p>`,
      figure: figQ8,
      answer: 17.8,
      unit: "kN·m",
      tolerance: 0.02,
      explanation: `<p>Reactions first. The partial UDL totals 5 &times; 4 = 20 kN acting at its centroid, 2 m from A:</p>
<p class="eq">&Sigma;M<sub>A</sub> = 0: B<sub>y</sub>(6) = 20(2) &rarr; B<sub>y</sub> = 6.67 kN, A<sub>y</sub> = 13.33 kN</p>
<p>Inside the loaded region V starts at +13.33 kN and falls 5 kN per metre:</p>
<p class="eq">V(x) = 13.33 &minus; 5x = 0 &rarr; x = 2.67 m</p>
<p>That crossing lies inside the loaded stretch, so it is the real peak. Evaluate M there from the left segment:</p>
<p class="eq">M<sub>max</sub> = 13.33(2.67) &minus; 5(2.67)&sup2;/2 = 35.56 &minus; 17.78 = <strong>17.8 kN&middot;m</strong></p>
<p>Closure: from 2.67 to 4 m V ramps to &minus;6.67 kN, shedding &frac12;(1.33)(6.67) = 4.44; from 4 to 6 m it is flat at &minus;6.67 kN, shedding 13.33. Then 17.78 &minus; 4.44 &minus; 13.33 = 0 at B. &#10003; The two wrong answers are wL&sup2;/8 with L = 6, which needs full-span load, and putting the peak at midspan. With a partial load the peak always drifts toward the loaded end.</p>`,
    },
    {
      id: "shear-moment-q08",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A 6 m simply supported beam carries a single 15 kN load 2 m from A. Four candidate bending-moment diagrams are drawn below. Which one is correct?</p>`,
      figure: figMatchM,
      choices: [
        "A &mdash; triangular, apex at midspan, peak of 22.5 kN&middot;m",
        "B &mdash; parabolic, apex near the load, peak of 20 kN&middot;m",
        "C &mdash; triangular, apex 2 m from A, peak of 20 kN&middot;m",
        "D &mdash; triangular, apex 4 m from A, peak of 20 kN&middot;m",
      ],
      answer: 2,
      explanation: `<p>Work the diagram, then match. Reactions are A<sub>y</sub> = 15(4)/6 = 10 kN and B<sub>y</sub> = 15(2)/6 = 5 kN, so V = +10 kN up to the load and &minus;5 kN after it. Piecewise constant V forces M to be piecewise <em>linear</em>, which kills the parabola in B on its own; parabolas need a distributed load.</p>
<p>V changes sign at the load, so the apex sits 2 m from A:</p>
<p class="eq">M<sub>max</sub> = Pab/L = 15(2)(4)/6 = <strong>20 kN&middot;m</strong></p>
<p>Diagram A reaches for PL/4 = 22.5 kN&middot;m without noticing the load is off-centre. D is the same shape mirrored, which is what measuring the load position from the wrong end gives you. The apex is always under the load, and the steeper side of the triangle is the one with the larger reaction, here the short left side. &#10003;</p>`,
    },
    {
      id: "shear-moment-q09",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A colleague submits the shear diagram below for a 6 m simply supported beam loaded only by a 24 kN&middot;m clockwise couple at midspan. What is wrong with it?</p>`,
      figure: figErrV,
      choices: [
        "V must step at the couple, but by 24 kN instead of by 8 kN",
        "V must be zero on both sides, since no vertical load is applied here",
        "V must ramp linearly from +4 kN down to &minus;4 kN across the span",
        "V must stay constant at &minus;4 kN right across the span &mdash; a couple steps M, not V",
      ],
      answer: 3,
      explanation: `<p>Get the reactions, then check the shape. Taking counterclockwise moments about A as positive, the clockwise couple enters as &minus;24:</p>
<p class="eq">&Sigma;M<sub>A</sub> = 0: B<sub>y</sub>(6) &minus; 24 = 0 &rarr; B<sub>y</sub> = +4 kN, so A<sub>y</sub> = &minus;4 kN</p>
<p>The two reactions form a couple: 4 kN up at B, 4 kN <em>down</em> at A. Shear just right of A is therefore &minus;4 kN, and nothing else pushes on the beam until B, so <strong>V = &minus;4 kN all the way across</strong>, one flat line. The submitted plot draws the left half positive and steps at the couple. A couple applies zero net force, so it can never move V.</p>
<p>Where the couple does show up is the moment diagram. M falls linearly to &minus;12 kN&middot;m just left of midspan, jumps the full 24 kN&middot;m to +12 kN&middot;m, then falls linearly back to zero at B. Putting the couple&rsquo;s discontinuity on the wrong diagram is the most common beam-diagram error there is.</p>`,
    },
    {
      id: "shear-moment-q10",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>The 4 m beam shown is built in at both ends and carries 12 kN/m over its full length. What is the magnitude of the bending moment at each built-in end, in kN&middot;m?</p>`,
      figure: figFixFix,
      answer: 16,
      unit: "kN·m",
      explanation: `<p>The fixed-fixed beam under a full UDL is a standard case worth knowing cold:</p>
<p class="eq">|M|<sub>end</sub> = wL&sup2;/12 = 12 &times; 4&sup2;/12 = 192/12 = <strong>16 kN&middot;m</strong> (hogging)</p>
<p class="eq">M<sub>midspan</sub> = wL&sup2;/24 = 8 kN&middot;m (sagging)</p>
<p>V is still the straight line from +wL/2 = +24 kN to &minus;24 kN, unchanged by the clamping, because vertical equilibrium and symmetry alone set the reactions. What clamping changes is where M starts. Instead of zero it begins at &minus;16 kN&middot;m, so the same shear area of wL&sup2;/8 = 24 kN&middot;m carries it up to +8 kN&middot;m at midspan.</p>
<p>The parabola crosses zero twice, at x = 0.211L and 0.789L, which is why a fixed-ended beam needs tension reinforcement on top near the supports and on the bottom at midspan.</p>`,
    },
    {
      id: "shear-moment-q11",
      type: "mc",
      difficulty: 3,
      prompt: `<p>The same 4 m beam under 12 kN/m is redesigned: the built-in ends are replaced by a pin and a roller because the end plates were expensive. What happens to the peak bending moment?</p>`,
      figure: figFixFix,
      choices: [
        "It rises from 16 to 24 kN&middot;m and moves from the ends to midspan",
        "It falls from 24 to 16 kN&middot;m and moves from midspan out to the ends",
        "It stays at 16 kN&middot;m; only the midspan deflection becomes larger",
        "It rises from 8 to 24 kN&middot;m, sitting at midspan in both designs",
      ],
      answer: 0,
      explanation: `<p>Compare the two standard cases at w = 12 kN/m, L = 4 m:</p>
<table>
<thead><tr><th>Case</th><th>|M| at ends</th><th>M at midspan</th></tr></thead>
<tbody>
<tr><td>Fixed&ndash;fixed</td><td>wL&sup2;/12 = 16 kN&middot;m</td><td>wL&sup2;/24 = 8 kN&middot;m</td></tr>
<tr><td>Pin&ndash;roller</td><td>0</td><td>wL&sup2;/8 = 24 kN&middot;m</td></tr>
</tbody>
</table>
<p>The governing moment goes from <strong>16 kN&middot;m at the supports to 24 kN&middot;m at midspan</strong>, 50% worse, and the critical section relocates. Midspan deflection is hit harder still, rising by a factor of five, 5wL&#8308;/384EI against wL&#8308;/384EI.</p>
<p>Comparing midspan to midspan, 8 to 24, misses that the fixed case is governed by its <em>end</em> moment. Clamping is not free stiffness. It buys a 33% cut in peak moment only if the end connection can really deliver a 16 kN&middot;m restraint. A joint that slips converts the design into the 24 kN&middot;m case, which is why partially fixed ends are often designed for the simply supported moment anyway.</p>`,
    },
    {
      id: "shear-moment-q12",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A 6 m straight run of steel pipe with a 154 mm inside diameter spans two hangers and is filled with water (&rho; = 1000 kg/m&sup3;). Ignoring the steel's own weight, what midspan bending moment does the water alone produce, in kN&middot;m?</p>`,
      answer: 0.822,
      unit: "kN·m",
      explanation: `<p>The modelling step is turning a physical fill into a line load. Water area first:</p>
<p class="eq">A = &pi;d&sup2;/4 = &pi;(0.154)&sup2;/4 = 0.01863 m&sup2;</p>
<p class="eq">w = &rho;gA = 1000 &times; 9.81 &times; 0.01863 = 183 N/m</p>
<p>Then treat the run as a simply supported beam on its hangers:</p>
<p class="eq">M = wL&sup2;/8 = 183 &times; 6&sup2;/8 = <strong>0.822 kN&middot;m</strong></p>
<p>Magnitude check: the pipe holds 0.01863 &times; 6 = 0.112 m&sup3;, about 110 kg or 1.1 kN of water, a bit more than a person&rsquo;s weight spread over 6 m, so a moment under 1 kN&middot;m is the right order.</p>
<p>Hydrotest is the case that bites. Water is heavier than most process fluids, so a gas line hydrotested full of water sees a load the operating condition never produces. Hanger spacing tables are written for the flooded weight, not the operating weight.</p>`,
    },
    {
      id: "shear-moment-q13",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A four-point bend rig loads a specimen through two outer rollers and two inner rollers. Why is the material between the two <em>inner</em> rollers the useful test section?</p>`,
      choices: [
        "M peaks under the outer rollers, so the specimen breaks there first",
        "M is zero there, so only transverse shear acts on the gauge length",
        "V is constant there, which makes stress uniform through the depth",
        "M is constant and V is zero between them, so the gauge length sees pure bending",
      ],
      answer: 3,
      explanation: `<p>Put numbers on it. Total load P splits evenly between the outer rollers, so with a the distance from an outer to an inner roller, between the inner rollers</p>
<p class="eq">V = P/2 &minus; P/2 = 0 &nbsp;&nbsp;&rarr;&nbsp;&nbsp; dM/dx = 0</p>
<p class="eq">M = (P/2)a, constant across the whole inner span</p>
<p>Zero shear with constant moment is the definition of <strong>pure bending</strong>: no transverse shear stress contaminating the stress state, and a uniformly stressed gauge length, so the specimen breaks at its genuinely weakest flaw rather than under a roller.</p>
<p>Three-point bending carries V = &plusmn;P/2 right through the peak-moment section and concentrates the maximum moment at a single point under the loading nose, where roller contact stress is also highest. Modulus-of-rupture standards prefer four-point for exactly that reason: less scatter, cleaner stress state, no contact artefact at the failure site.</p>`,
    },
    {
      id: "shear-moment-q14",
      type: "mc",
      difficulty: 1,
      prompt: `<p>You finish sketching a shear diagram for a beam and it ends at &minus;3 kN at the free right-hand end, instead of at zero. What does that tell you?</p>`,
      choices: [
        "Nothing: V may end anywhere as long as M closes back to zero",
        "The beam is indeterminate, so a compatibility equation is needed",
        "A vertical load or reaction is missing or has the wrong sign",
        "The moment diagram will simply finish 3 kN&middot;m below the axis",
      ],
      answer: 2,
      explanation: `<p>Closure is &Sigma;F<sub>y</sub> = 0 restated graphically. The shear at any station equals the net upward force to its left, and at the far end of the beam that sum is <em>every</em> force on the structure, which equilibrium makes zero. An unloaded free end must also carry V = 0, because there is nothing outboard of it to shear.</p>
<p>So a non-zero finish means a force is missing, double-counted or signed backwards, most often a reaction that was never solved for, or a distributed load whose resultant was computed over the wrong length.</p>
<p>M must close to zero at a free or simply supported end as well. Run both checks before saying a number out loud. Determinacy is a separate question, and an indeterminate beam&rsquo;s diagram still closes once the reactions are known.</p>`,
    },
    {
      id: "shear-moment-q15",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A 5 m simply supported floor joist carries 3 kN/m of floor load over its full length, plus a 9 kN line load from a partition wall sitting 2 m from support A. What is the maximum bending moment, in kN&middot;m?</p>`,
      answer: 19.8,
      unit: "kN·m",
      tolerance: 0.02,
      explanation: `<p>Reactions: the UDL totals 15 kN at 2.5 m, the wall adds 9 kN at 2 m.</p>
<p class="eq">&Sigma;M<sub>A</sub> = 0: B<sub>y</sub>(5) = 15(2.5) + 9(2) = 55.5 &rarr; B<sub>y</sub> = 11.1 kN, A<sub>y</sub> = 12.9 kN</p>
<p>Setting V = 0 in the left region gives 12.9 &minus; 3x = 0 &rarr; x = 4.30 m, which is <em>past</em> the wall, so that root is invalid. Track V properly instead:</p>
<p class="eq">V(2&#8315;) = 12.9 &minus; 3(2) = +6.9 kN, then V(2&#8314;) = 6.9 &minus; 9 = &minus;2.1 kN</p>
<p>Shear changes sign <strong>through the jump</strong>, so the peak sits exactly at the wall, x = 2 m:</p>
<p class="eq">M<sub>max</sub> = 12.9(2) &minus; 3(2)&sup2;/2 = 25.8 &minus; 6 = <strong>19.8 kN&middot;m</strong></p>
<p>Closure: from 2 m to B, V runs &minus;2.1 to &minus;11.1 kN, area = &minus;[(2.1 + 11.1)/2](3) = &minus;19.8, landing M on zero at B. &#10003; Whenever a point load is big enough to flip the sign of V by itself, stop solving V(x) = 0 and read the peak off the load location.</p>`,
    },
    {
      id: "shear-moment-q16",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A rectangular steel bar 60 mm wide and 200 mm deep spans 400 mm between simple supports and carries 50 kN at midspan. What is the ratio of peak bending stress to peak transverse shear stress?</p>`,
      answer: 4,
      explanation: `<p>Compute each demand and compare. Guessing that a short beam must be shear-governed is how this goes wrong.</p>
<p class="eq">M<sub>max</sub> = PL/4 = 50 &times; 0.4/4 = 5 kN&middot;m; S = bh&sup2;/6 = 60(200)&sup2;/6 = 4.00 &times; 10&#8309; mm&sup3;</p>
<p class="eq">&sigma; = M/S = 5 &times; 10&#8310; / (4.00 &times; 10&#8309;) = 12.5 MPa</p>
<p class="eq">V<sub>max</sub> = P/2 = 25 kN; &tau;<sub>max</sub> = 3V/2A = 3(25 000)/(2 &times; 12 000) = 3.13 MPa</p>
<p class="eq">&sigma;/&tau; = 12.5/3.13 = <strong>4.00</strong></p>
<p>That is not an accident. For a rectangular section with a midspan point load the ratio collapses to pure geometry:</p>
<p class="eq">&sigma;/&tau; = 2L/h = 2(400)/200 = 4</p>
<p>Bending still leads at a span-to-depth ratio of only 2, and it leads by more once each is compared against its own allowable, since steel shear allowable is roughly 0.6 of the bending allowable. Transverse shear takes over only for very stubby members, thin webs, short bolted brackets, and low-shear-strength materials such as wood along the grain or unidirectional composites.</p>`,
    },
    {
      id: "shear-moment-q17",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>You cut a beam 2.5 m to the right of support A. Everything on the left segment is known: a 15 kN upward reaction at A, and a 10 kN downward load 1.5 m from A. Using sagging-positive, what is the internal bending moment at the cut, in kN&middot;m?</p>`,
      answer: 27.5,
      unit: "kN·m",
      explanation: `<p class="eq">M = 15(2.5) &minus; 10(2.5 &minus; 1.5) = 37.5 &minus; 10 = <strong>27.5 kN&middot;m</strong></p>
<p>Sum moments of the left-segment forces about the cut, counting <strong>clockwise as positive</strong>, which is the convention that makes an upward force to the left of a cut produce sagging.</p>
<p>Watch the two arms. The reaction acts 2.5 m from the cut, the 10 kN load only 1.0 m from it, because arms are measured from the <em>cut</em> and not from the support. Using 1.5 m for the load gives 22.5 kN&middot;m, the usual slip here.</p>
<p>A sign check you can run in your head: an upward reaction to the left of a cut always bends the beam into a smile, so it contributes positively, and a downward load to the left always subtracts. A convention that gives the opposite on a simply supported beam is upside down.</p>`,
    },
    {
      id: "shear-moment-q18",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A 12 m crane runway girder runs continuously over three supports and is too long to ship in one piece, so it needs one bolted splice. Where do you put it?</p>`,
      choices: [
        "Directly over the centre support, where the girder section is deepest",
        "At the midspan of one bay, where the sagging moment is largest",
        "Right at an end support, where the reaction and the shear both peak",
        "At an inflection point, where M = 0, so the splice carries shear and no bending couple",
      ],
      answer: 3,
      explanation: `<p>Put the joint where the demand it is worst at carrying is smallest. A bolted splice transfers moment through flange plates and bolt groups, which is expensive, fatigue-sensitive and stiffness-sensitive. Between the hogging region over the centre support and the sagging region at midspan, the moment diagram must pass through zero, and that inflection point is the cheapest place in the girder to interrupt.</p>
<p>For two equal spans under uniform load the hogging peak is wL&sup2;/8 over the middle support and the sagging peak is 9wL&sup2;/128 near 0.375L, with the crossing at 0.25L from the centre support, a location you can quote from the standard case.</p>
<p>The other three all put the joint at a peak: over the centre support is peak hogging, the worst spot on the whole girder; midspan is peak sagging; an end support is peak shear and reaction bearing. The splice still needs full shear capacity, since zero moment is not zero load, and on a crane runway it also has to survive millions of cycles, so slip-critical bolts and a ground flush joint are the usual answer.</p>`,
    },
    {
      id: "shear-moment-q19",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A candidate reports: "for the 5 m simply supported beam under 6 kN/m, the peak moment is 18.75 kN." What, if anything, is wrong with that statement?</p>`,
      choices: [
        "The value should be 15 kN&middot;m, because wL&sup2;/10 governs a floor beam",
        "The number is right but the unit is wrong: moment is kN&middot;m",
        "The value should be 37.5 kN&middot;m, since wL&sup2;/4 governs a uniform load",
        "Nothing is wrong; kN is accepted shorthand for a beam moment value",
      ],
      answer: 1,
      explanation: `<p class="eq">M<sub>max</sub> = wL&sup2;/8 = 6 &times; 5&sup2;/8 = 150/8 = 18.75 kN&middot;m</p>
<p>The arithmetic is fine and the units are not. A bending moment is force times length, so kN&middot;m; reporting kN says force. wL&sup2;/8 produces (kN/m)(m&sup2;) = kN&middot;m on its own, so a formula that does not give kN&middot;m is the wrong formula. wL&sup2;/4 = 37.5 kN&middot;m is the point-load model: right units, wrong model.</p>`,
    },
    {
      id: "shear-moment-q20",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A jib crane boom is a 3 m cantilever off a mast. A trolley carrying 8 kN can run all the way out to the tip, and the boom itself weighs 1.2 kN per metre. What bending moment do you design the boom-to-mast joint for, in kN&middot;m?</p>`,
      answer: 29.4,
      unit: "kN·m",
      explanation: `<p>Two contributions, both about the root, with the trolley parked in its worst position at the tip:</p>
<p class="eq">M<sub>trolley</sub> = 8 &times; 3 = 24.0 kN&middot;m</p>
<p class="eq">M<sub>self</sub> = (1.2 &times; 3)(1.5) = 3.6 &times; 1.5 = 5.4 kN&middot;m</p>
<p class="eq">M<sub>root</sub> = 24.0 + 5.4 = <strong>29.4 kN&middot;m</strong></p>
<p>The two loads are treated differently. The trolley is a real point load at its worst location; the distributed self-weight is replaced by its resultant 3.6 kN at midlength. Forgetting self-weight gives 24 kN&middot;m, an 18% under-prediction. Putting the self-weight resultant at the tip gives 34.8 kN&middot;m, an 18% over-design.</p>
<p>Crane codes then multiply the hoist load by an impact factor, typically 1.15&ndash;1.25, for snatch pickup, and a tapered boom has to be checked with the trolley at intermediate positions too.</p>`,
    },
    {
      id: "shear-moment-q21",
      type: "mc",
      difficulty: 3,
      prompt: `<p>That same jib boom is being drawn for manufacture. How should the section depth vary along its length, and why?</p>`,
      choices: [
        "Deepest at the pivot and tapering toward the tip, following M(x)",
        "Deepest at the tip, where the trolley load is applied to the rail",
        "Constant depth, because the trolley position keeps on changing",
        "Deepest at midlength, where the moment envelope reaches its peak",
      ],
      answer: 0,
      explanation: `<p>Sketch the moment envelope, the largest |M| each station ever sees as the trolley sweeps the boom. With the trolley at distance a from the root, M(x) = P(a &minus; x) for x &lt; a, so every station is worst when the trolley is at the tip and the envelope is the single straight line M(x) = P(L &minus; x) plus the parabolic self-weight term. Maximum at the root, zero at the tip.</p>
<p>Required section modulus S = M/&sigma;<sub>allow</sub> follows that envelope, so the efficient boom is deepest at the root and tapers out. Depth buys section modulus as h&sup2;, so tapering saves real mass: halving the depth at the tip cuts local capacity by 4&times; and there is still margin.</p>
<p>Constant depth is the honest fallback, what you build when fabrication cost beats mass, and it is why cheap jibs are plain I-beams. It is not what the diagram asks for. Nothing peaks at midlength, and the tip carries M = 0 wherever the trolley sits. Watch the limits of the taper: keep enough depth at the tip for the trolley rail and local wheel bearing, and check the tapered web for buckling near the root where shear is also highest.</p>`,
    },
    {
      id: "shear-moment-q22",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A balcony beam is 5 m long overall. It is propped at A (x = 0) and B (x = 3.5 m) and overhangs 1.5 m past B. It carries 6 kN/m along its entire length. What is the magnitude of the hogging moment at B, in kN&middot;m?</p>`,
      answer: 6.75,
      unit: "kN·m",
      explanation: `<p>Cut at B and take the <em>overhang</em> side. Nothing is on it but the load it carries, so the reactions never enter:</p>
<p class="eq">Overhang load = 6 &times; 1.5 = 9 kN, acting 0.75 m out from B</p>
<p class="eq">M<sub>B</sub> = &minus;9 &times; 0.75 = &minus;6.75 kN&middot;m, magnitude <strong>6.75 kN&middot;m</strong></p>
<p>The sign is hogging. The overhang pulls the beam down beyond B, lifting the span and putting the <strong>top</strong> fibre at B in tension, which is why a cantilevered balcony slab is reinforced on top over the support and why the crack on a failing balcony runs along the upper surface at the wall line.</p>
<p>Choosing the cut side well is the whole trick. The A-side segment needs both reactions and the full 3.5 m of load; the overhang side needs one resultant and one arm. Same answer, a third of the work, a third of the chances to slip a sign. The general result for an overhang of length c under UDL is wc&sup2;/2 = 6(1.5&sup2;)/2 = 6.75 kN&middot;m. &#10003;</p>`,
    },
    {
      id: "shear-moment-q23",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A beam's moment diagram shows a clean vertical jump of 6 kN&middot;m at x = 2 m, while the shear diagram runs through x = 2 m with no step at all. What sits at that station?</p>`,
      choices: [
        "A 6 kN downward point load applied right at that station",
        "A 3 kN&middot;m couple, since a moment jump counts double",
        "An applied couple of 6 kN&middot;m, carrying no net force",
        "An internal hinge, which forces the moment there to zero",
      ],
      answer: 2,
      explanation: `<p>The two singularities live on different diagrams:</p>
<ul>
<li><strong>Point force</strong> &rarr; V steps by the force; M stays continuous and only kinks, its slope changing from the left V to the right V.</li>
<li><strong>Applied couple</strong> &rarr; M steps by the couple; V is untouched, because a couple has zero resultant force.</li>
</ul>
<p>Here V is continuous and M jumps, so the load is a pure couple of exactly 6 kN&middot;m. No halving, no doubling: the jump <em>is</em> the couple. Physically this appears wherever an eccentric load is transferred into a beam, so a bracket bolted to the side of a girder, a column landing off the beam&rsquo;s centreline, a shaft coupling reaction.</p>
<p>An internal hinge is the opposite condition. It forces M to zero at that station rather than making it jump, and it still transmits shear.</p>`,
    },
    {
      id: "shear-moment-q24",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A 6 m simply supported conveyor beam carries a single 12 kN drive unit 4 m from support A. What is the shear force just to the right of A, in kN?</p>`,
      answer: 4,
      unit: "kN",
      explanation: `<p class="eq">&Sigma;M<sub>B</sub> = 0: A<sub>y</sub>(6) = 12(6 &minus; 4) &rarr; A<sub>y</sub> = 24/6 = 4 kN</p>
<p class="eq">V(0&#8314;) = +A<sub>y</sub> = <strong>+4 kN</strong></p>
<p>Shear just right of a support equals that reaction. The load sits nearer B, so B takes the bigger share, 8 kN; reactions split inversely with distance. 6 kN assumes a midspan load.</p>`,
    },
  ],

  qna: [
    {
      id: "shear-moment-qa01",
      q: `<p>Sketch the shear and moment diagrams for a simply supported beam with a single off-center point load. Talk through your process.</p>`,
      a: `<p>1) <strong>Reactions</strong>: for load P at distance a from A on span L, &Sigma;M<sub>A</sub> gives B<sub>y</sub> = Pa/L and A<sub>y</sub> = Pb/L with b = L &minus; a. 2) <strong>V diagram, left to right</strong>: jump up by A<sub>y</sub> at A, flat to the load point since nothing is applied, jump down by P so V goes negative at &minus;Pa/L, flat to B, and the jump up by B<sub>y</sub> closes it to zero. &#10003; 3) <strong>M diagram from areas</strong>: M rises linearly at slope A<sub>y</sub> to the load point, peaking at M<sub>max</sub> = Pab/L, then falls linearly at slope &minus;Pa/L back to zero at B. A triangle with its apex under the load, kinked but not jumping.</p>
<p>4) <strong>Report</strong>: peak moment Pab/L at the load, largest when the load is at midspan, PL/4; maximum shear is the larger reaction, on the shorter side. The two closure checks, V and M both returning to zero at B, are how you catch your own arithmetic before anyone else does.</p>`,
    },
    {
      id: "shear-moment-qa02",
      q: `<p>Explain the sign conventions for shear force and bending moment, and why we bother with them.</p>`,
      a: `<p><strong>Positive shear</strong>: the material to the left of a cut pushes the right-hand portion up. On a small element, V acts up on the left face and down on the right, a clockwise couple. <strong>Positive moment</strong>: sagging, concave up, compression in the top fibre and tension in the bottom. Negative moment is hogging, the cantilever curvature, with tension on top.</p>
<p>The convention matters for three reasons. dV/dx = &minus;w and dM/dx = V only hold with a consistent convention, and those relations are what let you sketch diagrams quickly. Saying &ldquo;the moment is &minus;3 kN&middot;m&rdquo; tells another engineer immediately that the top fibre is in tension. And the sign tells you which surface sees tension, so where fatigue cracks initiate, which flange needs the doubler, and which side of a concrete beam needs rebar.</p>
<p>The sign of M does not depend on which side of the cut you analyse. Both sides give the same sagging or hogging answer, which makes a useful self-check.</p>`,
    },
    {
      id: "shear-moment-qa03",
      q: `<p>State the differential relationships between load, shear, and moment, and show how you use them to sketch diagrams without writing equations.</p>`,
      a: `<p>With w positive downward: <strong>dV/dx = &minus;w</strong> and <strong>dM/dx = V</strong>. Integrated, &Delta;V = &minus;(area of the load diagram) and &Delta;M = (area of the shear diagram).</p>
<p>Compute reactions, then walk left to right. The V diagram needs only two moves: jump at every concentrated force, up for reactions and down for loads, and ramp at slope &minus;w across distributed loads. The M diagram follows by accumulating shear areas. Rectangles of V give linear M, triangles of V give parabolic M; M kinks at point loads, jumps only at applied couples, and has a horizontal tangent wherever V = 0, which is where it peaks.</p>
<p>Degree bookkeeping keeps the shapes honest, since each integration raises the polynomial degree by one: UDL gives linear V gives parabolic M. Finish with closure, both diagrams returning to zero at the far end. Done this way a full diagram set for a typical interview beam takes under a minute.</p>`,
    },
    {
      id: "shear-moment-qa04",
      q: `<p>Why does the maximum bending moment occur where the shear is zero? Are there exceptions?</p>`,
      a: `<p>Because dM/dx = V. The shear <em>is</em> the slope of the moment diagram, so where V passes through zero M has a horizontal tangent, a local extremum, exactly like setting a derivative to zero. Physically, shear is the rate at which bending moment accumulates along the beam, and when the accumulation rate changes sign the running total has peaked.</p>
<p>Three exceptions separate candidates. Applied couples make M jump discontinuously, so the extreme value can occur at the couple with V &ne; 0. Fixed supports: a tip-loaded cantilever has V = P everywhere, never zero, yet |M| = PL is maximal at the wall, because the extremum sits on the boundary of the domain where the derivative test does not apply. And interior supports of continuous beams, where hogging moment peaks.</p>
<p>So the complete procedure is to find all V-zero crossings, all couple locations and all supports or boundaries, evaluate M at each, and take the largest magnitude, treating hogging and sagging even-handedly.</p>`,
    },
    {
      id: "shear-moment-qa05",
      q: `<p>What happens to the V and M diagrams at (a) a point load, (b) the start of a UDL, and (c) an applied couple?</p>`,
      a: `<p>(a) <strong>Point load P down</strong>: V jumps down by exactly P; M stays continuous and kinks, its slope changing from the left-side V to the right-side V.</p>
<p>(b) <strong>Start of a UDL</strong>: nothing jumps. V transitions from flat to a ramp of slope &minus;w, so its slope is discontinuous rather than its value; M transitions from straight line to parabola with matching value <em>and</em> slope, so the parabola is tangent to the incoming line.</p>
<p>(c) <strong>Applied couple M&#8320;</strong>: V is completely unaffected, since a couple has zero net force; M jumps by M&#8320;, upward as you traverse left to right for a clockwise couple.</p>
<p>The compact summary: concentrated <em>forces</em> make V discontinuous, concentrated <em>moments</em> make M discontinuous, and distributed loads make nothing discontinuous, they only change slopes. Each effect appears one integration level down from where the load enters.</p>`,
    },
    {
      id: "shear-moment-qa06",
      q: `<p>A simply supported beam can carry a total load W either as a midspan point load or spread uniformly. Compare the moment diagrams and peak values.</p>`,
      a: `<p>Same total load, very different demand. A <strong>point load W at midspan</strong> gives a triangular M diagram peaking at WL/4. A <strong>uniform load w = W/L</strong> gives a parabolic M diagram peaking at wL&sup2;/8 = WL/8. The concentrated load produces <strong>exactly double</strong> the peak moment, so spreading load out is structurally kind.</p>
<p>The shapes matter too. The triangle concentrates high moment near midspan with linear falloff, while the parabola is flatter near the peak and its <em>average</em> moment is lower. Reactions are identical at W/2 each, a good reminder that reactions tell you nothing about internal distribution: replacing a distributed load by its resultant is legal for reactions and illegal for V and M diagrams.</p>
<p>This is why point-loading a shelf at midspan is the worst thing you can do to it, why test standards distinguish 3-point bending, with triangular M peaking at the centre, from 4-point bending, with constant M between the inner rollers, and why machine designers spread footprints with pads and stiffeners.</p>`,
    },
    {
      id: "shear-moment-qa07",
      q: `<p>Describe the shear and moment diagrams for a cantilever with a tip load, and explain where and how it fails.</p>`,
      a: `<p>For a cantilever of length L fixed at A with tip load P down at B, the wall reaction is P up plus a reaction moment PL. <strong>V</strong> is constant at +P over the whole span, since every cut has the same P outboard of it. <strong>M</strong> is linear from &minus;PL at the wall to 0 at the tip, negative and hogging everywhere, so the <em>top</em> fibre is in tension along the whole beam.</p>
<p>The critical section is unambiguous. At the wall |M| = PL and bending stress &sigma; = Mc/I peaks, and the first crack appears at the top surface at the root, usually right at the fillet or weld where the geometric stress concentration stacks on the peak moment. The fatigue crack initiates top-of-root, grows down through the section, and the part hinges.</p>
<p>Design responses follow: add root fillets or gussets, taper the section, since depth can shrink toward the tip as M does, and never put a sharp notch, hole or weld toe at the root. Constant shear, linear moment, fails at the wall, on top. That story is a rapid-fire interview standard.</p>`,
    },
    {
      id: "shear-moment-qa08",
      q: `<p>You've drawn a moment diagram. What does a designer actually do with it?</p>`,
      a: `<p>Four things. <strong>Size the section</strong>: the peak |M| sets the required section modulus through &sigma; = M/S &le; &sigma;<sub>allow</sub>, so the moment diagram dictates the beam depth or flange area at the critical section. <strong>Place material where the moment is</strong>: taper cantilevers, add cover plates or doublers over the peak-moment region, and lighten the beam where M is small, which is the logic behind tapered leaf springs and fishbelly girders. <strong>Use the sign</strong>: the tension face is where fatigue cracks start and where rebar or reinforcing straps go, and hogging over an interior support means tension on <em>top</em> there, which surprises people. <strong>Exploit inflection points</strong>, the M = 0 crossings, as the smart places for splices, bolted joints and section changes, because the connection sees mostly shear and little bending.</p>
<p>Meanwhile the V diagram still matters. Peak shear sizes webs, weld throats and support-adjacent bolts, and it dominates for short, deep beams. The diagrams are the beam&rsquo;s load map, and every downstream stress, deflection and joint calculation reads from them.</p>`,
    },
    {
      id: "shear-moment-qa09",
      q: `<p>What is an inflection point in a moment diagram, and why do overhanging or continuous beams have them?</p>`,
      a: `<p>An inflection point is where the bending moment passes through <strong>zero and changes sign</strong> inside the span. Curvature flips from sagging to hogging and the tension face switches sides. Overhanging and continuous beams necessarily have them: the load on an overhang, or the restraint at an interior or fixed support, produces hogging near that support while the loaded bays sag near midspan, and since M varies continuously between those regions with no couple applied, it has to cross zero somewhere in between.</p>
<p>Three consequences. Reinforcement or strengthening must switch faces at the crossover, so in concrete that means top steel over supports and bottom steel at midspan. Inflection points are favoured locations for splices and joints, since bending is momentarily nil, though shear is not and the connection still needs shear capacity. And for compression flanges, the hogging region puts the <em>bottom</em> flange in compression, changing where lateral bracing is needed.</p>
<p>Finding them is routine: write M(x) for the relevant segment and set it to zero, or spot where the accumulated shear area returns to zero.</p>`,
    },
  ],
};

export default content;
