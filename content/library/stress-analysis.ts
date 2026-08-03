import type { TopicContent } from "../types";

// ---------------------------------------------------------------------------
// Stress Analysis & Transformation
// ---------------------------------------------------------------------------

const figElement = `<svg viewBox="0 0 460 270" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sa1-n" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="sa1-s" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
    <marker id="sa1-ax" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">The 2D stress element at a point</text>
  <rect x="180" y="90" width="100" height="100" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="280" y1="140" x2="340" y2="140" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa1-n)"/>
  <line x1="180" y1="140" x2="120" y2="140" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa1-n)"/>
  <line x1="230" y1="90" x2="230" y2="46" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa1-n)"/>
  <line x1="230" y1="190" x2="230" y2="226" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa1-n)"/>
  <text x="348" y="144" fill="#dc2626" font-weight="600">&sigma;<tspan baseline-shift="sub" font-size="10">x</tspan></text>
  <text x="112" y="144" text-anchor="end" fill="#dc2626" font-weight="600">&sigma;<tspan baseline-shift="sub" font-size="10">x</tspan></text>
  <text x="230" y="38" text-anchor="middle" fill="#dc2626" font-weight="600">&sigma;<tspan baseline-shift="sub" font-size="10">y</tspan></text>
  <text x="240" y="222" fill="#dc2626" font-weight="600">&sigma;<tspan baseline-shift="sub" font-size="10">y</tspan></text>
  <line x1="280" y1="180" x2="280" y2="100" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sa1-s)"/>
  <line x1="180" y1="100" x2="180" y2="180" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sa1-s)"/>
  <line x1="190" y1="90" x2="270" y2="90" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sa1-s)"/>
  <line x1="270" y1="190" x2="190" y2="190" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sa1-s)"/>
  <text x="288" y="106" fill="#1d4ed8" font-weight="600">&tau;<tspan baseline-shift="sub" font-size="10">xy</tspan></text>
  <text x="172" y="186" text-anchor="end" fill="#1d4ed8" font-weight="600">&tau;<tspan baseline-shift="sub" font-size="10">xy</tspan></text>
  <text x="276" y="80" fill="#1d4ed8" font-weight="600">&tau;<tspan baseline-shift="sub" font-size="10">yx</tspan></text>
  <text x="184" y="206" text-anchor="end" fill="#1d4ed8" font-weight="600">&tau;<tspan baseline-shift="sub" font-size="10">yx</tspan></text>
  <line x1="60" y1="215" x2="98" y2="215" stroke="#64748b" stroke-width="1.2" marker-end="url(#sa1-ax)"/>
  <line x1="60" y1="215" x2="60" y2="180" stroke="#64748b" stroke-width="1.2" marker-end="url(#sa1-ax)"/>
  <text x="104" y="219" fill="#64748b" font-size="12">x</text>
  <text x="54" y="176" text-anchor="end" fill="#64748b" font-size="12">y</text>
  <text x="230" y="252" text-anchor="middle" fill="#64748b" font-size="12">&tau;<tspan baseline-shift="sub" font-size="9">xy</tspan> = &tau;<tspan baseline-shift="sub" font-size="9">yx</tspan> &#8212; moment balance on the element demands it</text>
</svg>`;

const figStates = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sa2-n" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Three idealizations of the same 3D reality</text>
  <polygon points="40,70 50,60 122,60 112,70" fill="#eff6ff" stroke="#334155" stroke-width="1.3"/>
  <polygon points="112,70 122,60 122,130 112,140" fill="#e2e8f0" stroke="#334155" stroke-width="1.3"/>
  <rect x="40" y="70" width="72" height="70" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="40" y1="108" x2="16" y2="108" stroke="#dc2626" stroke-width="2.2" marker-end="url(#sa2-n)"/>
  <line x1="122" y1="108" x2="148" y2="108" stroke="#dc2626" stroke-width="2.2" marker-end="url(#sa2-n)"/>
  <line x1="76" y1="60" x2="76" y2="38" stroke="#dc2626" stroke-width="2.2" marker-end="url(#sa2-n)"/>
  <line x1="76" y1="140" x2="76" y2="160" stroke="#dc2626" stroke-width="2.2" marker-end="url(#sa2-n)"/>
  <text x="78" y="182" text-anchor="middle" font-weight="600" fill="#334155" font-size="12">Plane stress</text>
  <text x="78" y="200" text-anchor="middle" fill="#1d4ed8" font-size="11">&sigma;<tspan baseline-shift="sub" font-size="8">z</tspan> = 0, &epsilon;<tspan baseline-shift="sub" font-size="8">z</tspan> &ne; 0</text>
  <text x="78" y="216" text-anchor="middle" fill="#64748b" font-size="11">thin plate, in-plane load</text>
  <polygon points="188,72 236,44 292,44 244,72" fill="#eff6ff" stroke="#334155" stroke-width="1.3"/>
  <polygon points="244,72 292,44 292,110 244,138" fill="#e2e8f0" stroke="#334155" stroke-width="1.3"/>
  <rect x="188" y="72" width="56" height="66" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="188" y1="105" x2="166" y2="105" stroke="#dc2626" stroke-width="2.2" marker-end="url(#sa2-n)"/>
  <line x1="216" y1="72" x2="216" y2="50" stroke="#dc2626" stroke-width="2.2" marker-end="url(#sa2-n)"/>
  <line x1="296" y1="48" x2="306" y2="42" stroke="#64748b" stroke-width="1.2"/>
  <line x1="296" y1="62" x2="306" y2="56" stroke="#64748b" stroke-width="1.2"/>
  <line x1="296" y1="76" x2="306" y2="70" stroke="#64748b" stroke-width="1.2"/>
  <line x1="296" y1="90" x2="306" y2="84" stroke="#64748b" stroke-width="1.2"/>
  <line x1="296" y1="104" x2="306" y2="98" stroke="#64748b" stroke-width="1.2"/>
  <text x="230" y="182" text-anchor="middle" font-weight="600" fill="#334155" font-size="12">Plane strain</text>
  <text x="230" y="200" text-anchor="middle" fill="#1d4ed8" font-size="11">&epsilon;<tspan baseline-shift="sub" font-size="8">z</tspan> = 0 &rarr; &sigma;<tspan baseline-shift="sub" font-size="8">z</tspan> = &nu;(&sigma;<tspan baseline-shift="sub" font-size="8">x</tspan>+&sigma;<tspan baseline-shift="sub" font-size="8">y</tspan>)</text>
  <text x="230" y="216" text-anchor="middle" fill="#64748b" font-size="11">long dam, press-fit hub</text>
  <polygon points="348,74 366,56 422,56 404,74" fill="#eff6ff" stroke="#334155" stroke-width="1.3"/>
  <polygon points="404,74 422,56 422,112 404,130" fill="#e2e8f0" stroke="#334155" stroke-width="1.3"/>
  <rect x="348" y="74" width="56" height="56" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="348" y1="102" x2="326" y2="102" stroke="#dc2626" stroke-width="2.2" marker-end="url(#sa2-n)"/>
  <line x1="376" y1="74" x2="376" y2="52" stroke="#dc2626" stroke-width="2.2" marker-end="url(#sa2-n)"/>
  <line x1="418" y1="88" x2="440" y2="72" stroke="#dc2626" stroke-width="2.2" marker-end="url(#sa2-n)"/>
  <text x="380" y="182" text-anchor="middle" font-weight="600" fill="#334155" font-size="12">Triaxial</text>
  <text x="380" y="200" text-anchor="middle" fill="#1d4ed8" font-size="11">all three &sigma; nonzero</text>
  <text x="380" y="216" text-anchor="middle" fill="#64748b" font-size="11">notch root, contact</text>
  <text x="230" y="240" text-anchor="middle" fill="#dc2626" font-size="12">The trap: plane strain does NOT mean &sigma;<tspan baseline-shift="sub" font-size="9">z</tspan> = 0</text>
</svg>`;

const figTransform = `<svg viewBox="0 0 460 265" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sa3-n" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="sa3-s" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Stress on a plane cut at angle &theta;</text>
  <rect x="150" y="53" width="147" height="147" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 4"/>
  <polygon points="150,53 150,200 235,200" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <line x1="150" y1="98" x2="96" y2="98" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa3-n)"/>
  <text x="88" y="102" text-anchor="end" fill="#dc2626" font-weight="600">&sigma;<tspan baseline-shift="sub" font-size="10">x</tspan></text>
  <line x1="150" y1="120" x2="150" y2="186" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sa3-s)"/>
  <text x="142" y="186" text-anchor="end" fill="#1d4ed8" font-weight="600">&tau;<tspan baseline-shift="sub" font-size="10">xy</tspan></text>
  <line x1="170" y1="200" x2="170" y2="234" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa3-n)"/>
  <text x="162" y="228" text-anchor="end" fill="#dc2626" font-weight="600">&sigma;<tspan baseline-shift="sub" font-size="10">y</tspan></text>
  <line x1="232" y1="200" x2="190" y2="200" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sa3-s)"/>
  <text x="238" y="212" fill="#1d4ed8" font-weight="600">&tau;<tspan baseline-shift="sub" font-size="10">yx</tspan></text>
  <line x1="192" y1="126" x2="268" y2="126" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <path d="M 232.5 126.4 A 40 40 0 0 0 227.1 106.4" fill="none" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="240" y="120" fill="#1d4ed8" font-size="12">&theta;</text>
  <line x1="192" y1="126" x2="245" y2="96" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa3-n)"/>
  <text x="252" y="92" fill="#dc2626" font-weight="600">&sigma;<tspan baseline-shift="sub" font-size="10">&theta;</tspan></text>
  <line x1="198" y1="123" x2="220" y2="162" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sa3-s)"/>
  <text x="226" y="172" fill="#1d4ed8" font-weight="600">&tau;<tspan baseline-shift="sub" font-size="10">&theta;</tspan></text>
  <circle cx="192" cy="126" r="3" fill="#334155"/>
  <text x="230" y="252" text-anchor="middle" fill="#64748b" font-size="12">&theta; is measured CCW from the x-axis to the face normal</text>
</svg>`;

const figMohr = `<svg viewBox="0 0 460 295" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sa4-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#334155"/></marker>
  </defs>
  <text x="230" y="18" text-anchor="middle" font-weight="600" fill="#334155">Mohr&#39;s circle: &sigma;<tspan baseline-shift="sub" font-size="9">x</tspan> = 80, &sigma;<tspan baseline-shift="sub" font-size="9">y</tspan> = &minus;20, &tau;<tspan baseline-shift="sub" font-size="9">xy</tspan> = 30 MPa</text>
  <line x1="100" y1="130" x2="392" y2="130" stroke="#334155" stroke-width="1.5" marker-end="url(#sa4-ax)"/>
  <line x1="175" y1="238" x2="175" y2="46" stroke="#334155" stroke-width="1.5" marker-end="url(#sa4-ax)"/>
  <text x="398" y="134" fill="#334155" font-size="12">&sigma; (MPa)</text>
  <text x="167" y="52" text-anchor="end" fill="#334155" font-size="12">&tau; (MPa)</text>
  <circle cx="214" cy="130" r="75.8" fill="none" stroke="#1d4ed8" stroke-width="2"/>
  <line x1="149" y1="91" x2="279" y2="169" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="214" y1="130" x2="214" y2="54.2" stroke="#64748b" stroke-width="1.5"/>
  <text x="208" y="94" text-anchor="end" fill="#64748b" font-size="12">R</text>
  <circle cx="214" cy="54.2" r="3.5" fill="#1d4ed8"/>
  <text x="222" y="52" fill="#1d4ed8" font-size="12">&tau;<tspan baseline-shift="sub" font-size="9">max</tspan> = R</text>
  <circle cx="214" cy="130" r="3.5" fill="#334155"/>
  <text x="222" y="124" fill="#334155" font-size="12">C</text>
  <circle cx="289.8" cy="130" r="4" fill="#1d4ed8"/>
  <text x="296" y="124" fill="#1d4ed8" font-weight="600">&sigma;<tspan baseline-shift="sub" font-size="10">1</tspan></text>
  <circle cx="138.2" cy="130" r="4" fill="#1d4ed8"/>
  <text x="130" y="120" text-anchor="end" fill="#1d4ed8" font-weight="600">&sigma;<tspan baseline-shift="sub" font-size="10">2</tspan></text>
  <circle cx="279" cy="169" r="4.5" fill="#dc2626"/>
  <text x="288" y="182" fill="#dc2626" font-size="12">X (80, &minus;30) &#8212; x-face</text>
  <circle cx="149" cy="91" r="4.5" fill="#dc2626"/>
  <text x="140" y="84" text-anchor="end" fill="#dc2626" font-size="12">Y (&minus;20, 30)</text>
  <path d="M 243.2 147.5 A 34 34 0 0 0 248 130" fill="none" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="252" y="150" fill="#1d4ed8" font-size="12">2&theta;<tspan baseline-shift="sub" font-size="9">p</tspan></text>
  <text x="30" y="258" fill="#334155" font-size="12">C = (&sigma;<tspan baseline-shift="sub" font-size="9">x</tspan>+&sigma;<tspan baseline-shift="sub" font-size="9">y</tspan>)/2 = 30, R = 58.3 &rarr; &sigma;<tspan baseline-shift="sub" font-size="9">1</tspan> = 88.3, &sigma;<tspan baseline-shift="sub" font-size="9">2</tspan> = &minus;28.3 MPa</text>
  <text x="30" y="278" fill="#334155" font-size="12">2&theta;<tspan baseline-shift="sub" font-size="9">p</tspan> = 31.0&deg; on the circle &rarr; &theta;<tspan baseline-shift="sub" font-size="9">p</tspan> = 15.5&deg; on the part (CCW)</text>
</svg>`;

const figKt = `<svg viewBox="0 0 460 270" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sa5-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#334155"/></marker>
    <marker id="sa5-a" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <line x1="70" y1="210" x2="404" y2="210" stroke="#334155" stroke-width="1.5" marker-end="url(#sa5-ax)"/>
  <line x1="70" y1="210" x2="70" y2="40" stroke="#334155" stroke-width="1.5" marker-end="url(#sa5-ax)"/>
  <text x="240" y="238" text-anchor="middle" fill="#334155" font-size="12">fillet radius ratio r/d</text>
  <text x="70" y="30" text-anchor="middle" fill="#334155" font-size="12">K<tspan baseline-shift="sub" font-size="9">t</tspan></text>
  <line x1="70" y1="206" x2="70" y2="214" stroke="#64748b" stroke-width="1"/>
  <line x1="170" y1="206" x2="170" y2="214" stroke="#64748b" stroke-width="1"/>
  <line x1="270" y1="206" x2="270" y2="214" stroke="#64748b" stroke-width="1"/>
  <line x1="370" y1="206" x2="370" y2="214" stroke="#64748b" stroke-width="1"/>
  <text x="70" y="226" text-anchor="middle" fill="#64748b" font-size="11">0</text>
  <text x="170" y="226" text-anchor="middle" fill="#64748b" font-size="11">0.1</text>
  <text x="270" y="226" text-anchor="middle" fill="#64748b" font-size="11">0.2</text>
  <text x="370" y="226" text-anchor="middle" fill="#64748b" font-size="11">0.3</text>
  <line x1="66" y1="190" x2="74" y2="190" stroke="#64748b" stroke-width="1"/>
  <line x1="66" y1="120" x2="74" y2="120" stroke="#64748b" stroke-width="1"/>
  <line x1="66" y1="50" x2="74" y2="50" stroke="#64748b" stroke-width="1"/>
  <text x="62" y="194" text-anchor="end" fill="#64748b" font-size="11">1.0</text>
  <text x="62" y="124" text-anchor="end" fill="#64748b" font-size="11">2.0</text>
  <text x="62" y="54" text-anchor="end" fill="#64748b" font-size="11">3.0</text>
  <line x1="70" y1="190" x2="396" y2="190" stroke="#64748b" stroke-width="1" stroke-dasharray="6 4"/>
  <text x="300" y="184" text-anchor="middle" fill="#64748b" font-size="11">K<tspan baseline-shift="sub" font-size="8">t</tspan> = 1: no concentration</text>
  <path d="M 90 78 Q 105 100 120 116 Q 145 133 170 142 Q 195 150 220 154 Q 245 158 270 161 Q 320 165 370 168" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <line x1="112" y1="66" x2="94" y2="76" stroke="#64748b" stroke-width="1.2" marker-end="url(#sa5-a)"/>
  <text x="118" y="62" fill="#dc2626" font-size="11">r &rarr; 0: K<tspan baseline-shift="sub" font-size="8">t</tspan> climbs without bound</text>
  <path d="M 318 87 L 318 63 L 358 63 Q 370 63 370 51 L 430 51 L 430 99 L 370 99 Q 370 87 358 87 Z" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="332" y1="63" x2="332" y2="87" stroke="#64748b" stroke-width="1"/>
  <text x="332" y="56" text-anchor="middle" fill="#64748b" font-size="11">d</text>
  <line x1="406" y1="51" x2="406" y2="99" stroke="#64748b" stroke-width="1"/>
  <text x="406" y="112" text-anchor="middle" fill="#64748b" font-size="11">D</text>
  <line x1="392" y1="34" x2="373" y2="52" stroke="#64748b" stroke-width="1.2" marker-end="url(#sa5-a)"/>
  <text x="396" y="32" fill="#64748b" font-size="11">r</text>
  <text x="240" y="256" text-anchor="middle" fill="#64748b" font-size="11">shouldered shaft in bending, D/d = 1.5 (representative)</text>
</svg>`;

const figHole = `<svg viewBox="0 0 460 288" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sa6-n" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Small hole in a wide plate: the classic 3&times;</text>
  <rect x="90" y="64" width="280" height="160" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <circle cx="230" cy="144" r="24" fill="#ffffff" stroke="#334155" stroke-width="1.5"/>
  <line x1="150" y1="64" x2="150" y2="34" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa6-n)"/>
  <line x1="310" y1="64" x2="310" y2="34" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa6-n)"/>
  <line x1="150" y1="224" x2="150" y2="258" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa6-n)"/>
  <line x1="310" y1="224" x2="310" y2="258" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa6-n)"/>
  <text x="230" y="42" text-anchor="middle" fill="#dc2626" font-weight="600">&sigma;<tspan baseline-shift="sub" font-size="10">&infin;</tspan></text>
  <path d="M 254 144 L 254 84 C 275 112 300 122 366 126 L 366 144 Z" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
  <text x="262" y="80" fill="#dc2626" font-weight="600">3&sigma;<tspan baseline-shift="sub" font-size="10">&infin;</tspan></text>
  <text x="362" y="114" text-anchor="end" fill="#dc2626" font-size="12">&sigma;<tspan baseline-shift="sub" font-size="9">&infin;</tspan></text>
  <line x1="206" y1="144" x2="254" y2="144" stroke="#64748b" stroke-width="1"/>
  <line x1="206" y1="138" x2="206" y2="150" stroke="#64748b" stroke-width="1"/>
  <line x1="254" y1="138" x2="254" y2="150" stroke="#64748b" stroke-width="1"/>
  <text x="230" y="190" text-anchor="middle" fill="#64748b" font-size="11">d</text>
  <text x="230" y="282" text-anchor="middle" fill="#64748b" font-size="12">K<tspan baseline-shift="sub" font-size="9">t</tspan> = 3 is independent of hole size &#8212; only of shape</text>
</svg>`;

const figQTorsion = `<svg viewBox="0 0 460 235" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sa7-t" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <rect x="70" y="78" width="260" height="84" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <ellipse cx="330" cy="120" rx="13" ry="42" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <ellipse cx="70" cy="120" rx="13" ry="42" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <path d="M 356 84 A 26 40 0 0 1 356 156" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa7-t)"/>
  <text x="372" y="124" fill="#dc2626" font-weight="600">T</text>
  <path d="M 44 156 A 26 40 0 0 1 44 84" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa7-t)"/>
  <text x="30" y="124" text-anchor="end" fill="#dc2626" font-weight="600">T</text>
  <line x1="150" y1="162" x2="234" y2="78" stroke="#dc2626" stroke-width="3" stroke-dasharray="8 4"/>
  <text x="242" y="72" fill="#dc2626" font-weight="600">45&deg; helical crack</text>
  <text x="40" y="196" fill="#334155" font-size="12">Surface element in pure torsion: &sigma;<tspan baseline-shift="sub" font-size="9">x</tspan> = &sigma;<tspan baseline-shift="sub" font-size="9">y</tspan> = 0, &tau;<tspan baseline-shift="sub" font-size="9">xy</tspan> = &tau;</text>
  <text x="40" y="220" fill="#1d4ed8" font-size="12">Cast iron splits normal to the maximum tensile stress</text>
</svg>`;

const figQElement = `<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sa8-n" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="sa8-s" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <rect x="190" y="70" width="80" height="80" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="270" y1="110" x2="326" y2="110" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa8-n)"/>
  <line x1="190" y1="110" x2="134" y2="110" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa8-n)"/>
  <text x="334" y="114" fill="#dc2626" font-weight="600">&sigma;<tspan baseline-shift="sub" font-size="10">x</tspan> = 60 MPa</text>
  <text x="126" y="114" text-anchor="end" fill="#dc2626" font-weight="600">&sigma;<tspan baseline-shift="sub" font-size="10">x</tspan></text>
  <line x1="230" y1="70" x2="230" y2="34" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa8-n)"/>
  <line x1="230" y1="150" x2="230" y2="186" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa8-n)"/>
  <text x="230" y="26" text-anchor="middle" fill="#dc2626" font-weight="600">&sigma;<tspan baseline-shift="sub" font-size="10">y</tspan> = 20 MPa</text>
  <text x="230" y="204" text-anchor="middle" fill="#dc2626" font-weight="600">&sigma;<tspan baseline-shift="sub" font-size="10">y</tspan></text>
  <line x1="270" y1="144" x2="270" y2="76" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sa8-s)"/>
  <line x1="190" y1="76" x2="190" y2="144" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sa8-s)"/>
  <line x1="196" y1="70" x2="264" y2="70" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sa8-s)"/>
  <line x1="264" y1="150" x2="196" y2="150" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sa8-s)"/>
  <text x="278" y="62" fill="#1d4ed8" font-weight="600">&tau;<tspan baseline-shift="sub" font-size="10">xy</tspan> = 30 MPa</text>
  <text x="182" y="166" text-anchor="end" fill="#1d4ed8" font-weight="600">&tau;<tspan baseline-shift="sub" font-size="10">xy</tspan></text>
</svg>`;

const figQFea = `<svg viewBox="0 0 460 245" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sa9-p" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <polygon points="60,50 130,50 130,160 300,160 300,212 60,212" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <circle cx="130" cy="160" r="9" fill="#dc2626"/>
  <line x1="95" y1="22" x2="95" y2="44" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa9-p)"/>
  <text x="95" y="16" text-anchor="middle" fill="#dc2626" font-weight="600">P</text>
  <line x1="300" y1="160" x2="300" y2="212" stroke="#334155" stroke-width="2.5"/>
  <line x1="300" y1="166" x2="312" y2="156" stroke="#64748b" stroke-width="1"/>
  <line x1="300" y1="180" x2="312" y2="170" stroke="#64748b" stroke-width="1"/>
  <line x1="300" y1="194" x2="312" y2="184" stroke="#64748b" stroke-width="1"/>
  <line x1="300" y1="208" x2="312" y2="198" stroke="#64748b" stroke-width="1"/>
  <line x1="138" y1="156" x2="196" y2="116" stroke="#64748b" stroke-width="1"/>
  <text x="202" y="112" fill="#dc2626" font-weight="600">peak reads 900 MPa</text>
  <text x="202" y="130" fill="#64748b" font-size="11">sharp re-entrant corner, r = 0 on the CAD</text>
  <text x="202" y="146" fill="#64748b" font-size="11">material yield S<tspan baseline-shift="sub" font-size="8">y</tspan> = 250 MPa</text>
  <text x="40" y="236" fill="#334155" font-size="11.5">mesh 2 mm &rarr; 470 MPa&nbsp;&nbsp;|&nbsp;&nbsp;1 mm &rarr; 640 MPa&nbsp;&nbsp;|&nbsp;&nbsp;0.5 mm &rarr; 900 MPa</text>
</svg>`;

const figQPlateHole = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sa10-p" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <rect x="150" y="60" width="160" height="140" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <circle cx="230" cy="130" r="16" fill="#ffffff" stroke="#334155" stroke-width="1.5"/>
  <line x1="180" y1="60" x2="180" y2="32" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa10-p)"/>
  <line x1="280" y1="60" x2="280" y2="32" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa10-p)"/>
  <text x="230" y="22" text-anchor="middle" fill="#dc2626" font-weight="600">P = 48 kN</text>
  <line x1="150" y1="200" x2="310" y2="200" stroke="#334155" stroke-width="2.5"/>
  <line x1="156" y1="212" x2="168" y2="200" stroke="#64748b" stroke-width="1"/>
  <line x1="180" y1="212" x2="192" y2="200" stroke="#64748b" stroke-width="1"/>
  <line x1="204" y1="212" x2="216" y2="200" stroke="#64748b" stroke-width="1"/>
  <line x1="228" y1="212" x2="240" y2="200" stroke="#64748b" stroke-width="1"/>
  <line x1="252" y1="212" x2="264" y2="200" stroke="#64748b" stroke-width="1"/>
  <line x1="276" y1="212" x2="288" y2="200" stroke="#64748b" stroke-width="1"/>
  <line x1="150" y1="228" x2="310" y2="228" stroke="#64748b" stroke-width="1"/>
  <line x1="150" y1="222" x2="150" y2="234" stroke="#64748b" stroke-width="1"/>
  <line x1="310" y1="222" x2="310" y2="234" stroke="#64748b" stroke-width="1"/>
  <text x="230" y="224" text-anchor="middle" fill="#64748b" font-size="12">w = 60 mm</text>
  <line x1="214" y1="130" x2="246" y2="130" stroke="#64748b" stroke-width="1"/>
  <line x1="214" y1="124" x2="214" y2="136" stroke="#64748b" stroke-width="1"/>
  <line x1="246" y1="124" x2="246" y2="136" stroke="#64748b" stroke-width="1"/>
  <text x="230" y="162" text-anchor="middle" fill="#64748b" font-size="12">d = 12 mm</text>
  <rect x="350" y="60" width="22" height="140" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <text x="361" y="224" text-anchor="middle" fill="#64748b" font-size="12">t = 8 mm</text>
</svg>`;

const figQPeen = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sa11-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#334155"/></marker>
  </defs>
  <line x1="90" y1="140" x2="410" y2="140" stroke="#334155" stroke-width="1.5" marker-end="url(#sa11-ax)"/>
  <line x1="90" y1="215" x2="90" y2="40" stroke="#334155" stroke-width="1.5" marker-end="url(#sa11-ax)"/>
  <text x="90" y="32" text-anchor="middle" fill="#334155" font-size="12">residual &sigma;</text>
  <text x="330" y="178" text-anchor="middle" fill="#334155" font-size="12">depth below surface</text>
  <text x="84" y="144" text-anchor="end" fill="#64748b" font-size="11">0</text>
  <text x="84" y="200" text-anchor="end" fill="#64748b" font-size="11">&minus;400 MPa</text>
  <text x="84" y="120" text-anchor="end" fill="#64748b" font-size="11">+100</text>
  <path d="M 90 192 Q 102 204 120 200 C 150 195 176 174 190 140 C 204 128 222 124 246 126 C 300 130 348 132 396 134" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <path d="M 90 192 Q 102 204 120 200 C 150 195 176 174 190 140 L 90 140 Z" fill="#dbeafe" stroke="none"/>
  <text x="112" y="228" fill="#1d4ed8" font-size="11">compressive layer left by peening</text>
  <text x="256" y="108" fill="#64748b" font-size="11">balancing tension deeper in</text>
  <text x="230" y="246" text-anchor="middle" fill="#64748b" font-size="11">service stress adds algebraically to this curve</text>
</svg>`;

const figQKtRead = `<svg viewBox="0 0 460 265" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sa12-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#334155"/></marker>
    <marker id="sa12-a" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <line x1="70" y1="210" x2="404" y2="210" stroke="#334155" stroke-width="1.5" marker-end="url(#sa12-ax)"/>
  <line x1="70" y1="210" x2="70" y2="40" stroke="#334155" stroke-width="1.5" marker-end="url(#sa12-ax)"/>
  <text x="240" y="240" text-anchor="middle" fill="#334155" font-size="12">r/d</text>
  <text x="70" y="30" text-anchor="middle" fill="#334155" font-size="12">K<tspan baseline-shift="sub" font-size="9">t</tspan></text>
  <line x1="170" y1="206" x2="170" y2="214" stroke="#64748b" stroke-width="1"/>
  <line x1="270" y1="206" x2="270" y2="214" stroke="#64748b" stroke-width="1"/>
  <line x1="370" y1="206" x2="370" y2="214" stroke="#64748b" stroke-width="1"/>
  <text x="70" y="226" text-anchor="middle" fill="#64748b" font-size="11">0</text>
  <text x="170" y="226" text-anchor="middle" fill="#64748b" font-size="11">0.1</text>
  <text x="270" y="226" text-anchor="middle" fill="#64748b" font-size="11">0.2</text>
  <text x="370" y="226" text-anchor="middle" fill="#64748b" font-size="11">0.3</text>
  <line x1="66" y1="190" x2="74" y2="190" stroke="#64748b" stroke-width="1"/>
  <line x1="66" y1="120" x2="74" y2="120" stroke="#64748b" stroke-width="1"/>
  <line x1="66" y1="50" x2="74" y2="50" stroke="#64748b" stroke-width="1"/>
  <text x="62" y="194" text-anchor="end" fill="#64748b" font-size="11">1.0</text>
  <text x="62" y="124" text-anchor="end" fill="#64748b" font-size="11">2.0</text>
  <text x="62" y="54" text-anchor="end" fill="#64748b" font-size="11">3.0</text>
  <path d="M 90 64 Q 105 92 120 109 Q 145 122 170 130 Q 195 137 220 142 Q 245 146 270 149 Q 320 154 370 158" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <line x1="70" y1="130" x2="170" y2="130" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="170" y1="210" x2="170" y2="130" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="5 4"/>
  <circle cx="170" cy="130" r="4.5" fill="#dc2626"/>
  <text x="78" y="124" fill="#dc2626" font-weight="600">K<tspan baseline-shift="sub" font-size="10">t</tspan> = 1.85</text>
  <text x="178" y="200" fill="#dc2626" font-size="11">r/d = 0.10</text>
  <path d="M 318 87 L 318 63 L 358 63 Q 370 63 370 51 L 430 51 L 430 99 L 370 99 Q 370 87 358 87 Z" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="332" y1="63" x2="332" y2="87" stroke="#64748b" stroke-width="1"/>
  <text x="330" y="56" text-anchor="middle" fill="#64748b" font-size="11">d = 40</text>
  <line x1="406" y1="51" x2="406" y2="99" stroke="#64748b" stroke-width="1"/>
  <text x="406" y="114" text-anchor="middle" fill="#64748b" font-size="11">D = 60</text>
  <line x1="392" y1="34" x2="373" y2="52" stroke="#64748b" stroke-width="1.2" marker-end="url(#sa12-a)"/>
  <text x="396" y="32" fill="#64748b" font-size="11">r = 4</text>
  <text x="240" y="258" text-anchor="middle" fill="#64748b" font-size="11">shoulder fillet in bending, D/d = 1.5 (dimensions in mm)</text>
</svg>`;

const figQMohrRead = `<svg viewBox="0 0 460 270" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sa13-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#334155"/></marker>
  </defs>
  <line x1="95" y1="140" x2="390" y2="140" stroke="#334155" stroke-width="1.5" marker-end="url(#sa13-ax)"/>
  <line x1="150" y1="240" x2="150" y2="52" stroke="#334155" stroke-width="1.5" marker-end="url(#sa13-ax)"/>
  <text x="396" y="144" fill="#334155" font-size="12">&sigma; (MPa)</text>
  <text x="158" y="58" fill="#334155" font-size="12">&tau; (MPa)</text>
  <line x1="194" y1="136" x2="194" y2="144" stroke="#64748b" stroke-width="1"/>
  <line x1="238" y1="136" x2="238" y2="144" stroke="#64748b" stroke-width="1"/>
  <line x1="282" y1="136" x2="282" y2="144" stroke="#64748b" stroke-width="1"/>
  <text x="144" y="158" text-anchor="end" fill="#64748b" font-size="11">0</text>
  <text x="194" y="158" text-anchor="middle" fill="#64748b" font-size="11">40</text>
  <text x="238" y="158" text-anchor="middle" fill="#64748b" font-size="11">80</text>
  <text x="282" y="158" text-anchor="middle" fill="#64748b" font-size="11">120</text>
  <circle cx="199.5" cy="140" r="71.5" fill="none" stroke="#1d4ed8" stroke-width="2"/>
  <circle cx="199.5" cy="140" r="3.5" fill="#334155"/>
  <text x="206" y="134" fill="#334155" font-size="12">C = 45</text>
  <line x1="199.5" y1="140" x2="242.4" y2="197.2" stroke="#64748b" stroke-width="1.5"/>
  <text x="168" y="192" fill="#64748b" font-size="12">R = 65</text>
  <line x1="156.6" y1="82.8" x2="242.4" y2="197.2" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="5 4"/>
  <circle cx="242.4" cy="197.2" r="4.5" fill="#dc2626"/>
  <text x="250" y="208" fill="#dc2626" font-size="12">X (84, &minus;52) &#8212; x-face</text>
  <circle cx="156.6" cy="82.8" r="4.5" fill="#dc2626"/>
  <text x="142" y="74" text-anchor="end" fill="#dc2626" font-size="12">Y (6, 52)</text>
  <text x="230" y="258" text-anchor="middle" fill="#64748b" font-size="12">Read the principal stresses and the maximum shear off the circle</text>
</svg>`;

const content: TopicContent = {
  lesson: {
    title: "Stress Analysis & Transformation",
    intro: `<p>A load tells you what the structure carries. A <strong>stress state at a point</strong> tells you whether the material survives. Everything between those two statements is what this topic covers: the stress element, transformation, principal stresses, Mohr&rsquo;s circle, stress concentrations. After statics it is the most-asked analytical block in a mechanical interview, because it separates candidates who think in planes and directions from candidates who plug numbers into whichever formula they remember.</p>
<p>Note the boundary. Here you learn how to <em>get</em> the stress state and how to <em>read</em> it. Deciding whether that state yields a part, von Mises against Tresca and factors of safety, belongs to failure theories. Get the state right first. Every criterion downstream is only as good as the &sigma;<sub>1</sub>, &sigma;<sub>2</sub>, &sigma;<sub>3</sub> you feed it.</p>`,
    sections: [
      {
        heading: "The stress element and sign conventions",
        html: `<p>Stress is not a single number. At a point it is a <strong>tensor</strong> with six independent components in 3D, three normal and three shear. Draw it as an infinitesimal cube, the <strong>stress element</strong>, aligned with your chosen x&ndash;y axes.</p>
<figure class="fig">${figElement}<figcaption>Positive convention: tension is positive, and on the +x face a positive &tau;<sub>xy</sub> points along +y. The two shear pairs are equal because the element must not spin.</figcaption></figure>
<p>Two conventions do all the work:</p>
<ul>
<li><strong>Normal stress</strong> &sigma; is positive in tension. The sign is not cosmetic: it decides whether a crack opens or closes, and whether a column buckles.</li>
<li><strong>Shear stress</strong> &tau;<sub>xy</sub>: the first index is the face normal, the second is the direction it acts. On a +x face, positive &tau;<sub>xy</sub> acts along +y; on the opposite face it reverses.</li>
</ul>
<p>Moment equilibrium of the element forces the complementary shears to be equal. Take moments about the element center: the &tau;<sub>xy</sub> pair contributes &tau;<sub>xy</sub>(dy&middot;t)dx and the &tau;<sub>yx</sub> pair &tau;<sub>yx</sub>(dx&middot;t)dy, so</p>
<p class="eq">&tau;<sub>xy</sub> = &tau;<sub>yx</sub></p>
<div class="callout"><strong>The stress tensor is symmetric.</strong> A post-processor that reports &tau;<sub>xy</sub> &ne; &tau;<sub>yx</sub> at a point in a converged static solution is telling you the model or the coordinate frame is wrong, not that the physics is unusual.</div>`,
      },
      {
        heading: "Plane stress, plane strain, and triaxial states",
        html: `<p>Real stress states are 3D. You get to drop to 2D only when the geometry earns it, and the two 2D idealizations are <em>not</em> interchangeable.</p>
<figure class="fig">${figStates}<figcaption>Plane stress zeroes the out-of-plane <em>stress</em>; plane strain zeroes the out-of-plane <em>strain</em> and therefore develops an out-of-plane stress.</figcaption></figure>
<table>
<thead><tr><th>State</th><th>What is zero</th><th>Legitimate when</th></tr></thead>
<tbody>
<tr><td>Plane stress</td><td>&sigma;<sub>z</sub> = &tau;<sub>xz</sub> = &tau;<sub>yz</sub> = 0; &epsilon;<sub>z</sub> &ne; 0</td><td>Thin part loaded in its plane: sheet-metal bracket, gusset, thin-wall vessel, any free surface</td></tr>
<tr><td>Plane strain</td><td>&epsilon;<sub>z</sub> = 0; &sigma;<sub>z</sub> = &nu;(&sigma;<sub>x</sub>+&sigma;<sub>y</sub>) &ne; 0</td><td>Long body with a constant cross-section, restrained axially: dam, press-fit hub, extruded rail, thick roller</td></tr>
<tr><td>Triaxial</td><td>Nothing</td><td>Notch roots, contact patches, thick-wall pressure, weld interiors</td></tr>
</tbody>
</table>
<div class="callout warn"><strong>Plane strain does not mean &sigma;<sub>z</sub> = 0.</strong> Setting &epsilon;<sub>z</sub> = 0 <em>generates</em> &sigma;<sub>z</sub> = &nu;(&sigma;<sub>x</sub> + &sigma;<sub>y</sub>). With &nu; = 0.3 and &sigma;<sub>x</sub> + &sigma;<sub>y</sub> = 200 MPa that is 60 MPa out of plane which a plane-stress model would have missed entirely. It pushes the state toward hydrostatic, lowering von Mises stress and raising the constraint at a crack tip, which is why thick sections are less crack-tolerant than thin ones.</div>
<p>A free surface is always plane stress, since nothing can push on air. So the surface of a thick part is plane stress while its interior approaches plane strain, and the two blend across the thickness.</p>`,
      },
      {
        heading: "Transforming stress onto an inclined plane",
        html: `<p>The components &sigma;<sub>x</sub>, &sigma;<sub>y</sub>, &tau;<sub>xy</sub> describe one particular pair of planes. Cracks, welds, bond lines and slip planes do not care about your axes, so you need the stress on a plane whose normal is rotated &theta; counterclockwise from x.</p>
<figure class="fig">${figTransform}<figcaption>Cut the element and take equilibrium of the wedge. Each face carries its stress times its own area, and the area ratios produce the cos&theta;/sin&theta; terms.</figcaption></figure>
<p>Equilibrium of the wedge, normal and tangential to the cut, gives the transformation equations:</p>
<p class="eq">&sigma;<sub>&theta;</sub> = (&sigma;<sub>x</sub>+&sigma;<sub>y</sub>)/2 + [(&sigma;<sub>x</sub>&minus;&sigma;<sub>y</sub>)/2] cos 2&theta; + &tau;<sub>xy</sub> sin 2&theta;</p>
<p class="eq">&tau;<sub>&theta;</sub> = &minus;[(&sigma;<sub>x</sub>&minus;&sigma;<sub>y</sub>)/2] sin 2&theta; + &tau;<sub>xy</sub> cos 2&theta;</p>
<p>Three structural facts fall straight out of them:</p>
<ul>
<li>Everything depends on <strong>2&theta;</strong>, not &theta;. Rotate the element 90&deg; and you are back on the same physical planes, so the maths must repeat every 180&deg; of &theta;, which is every 360&deg; of 2&theta;.</li>
<li>&sigma;<sub>&theta;</sub> + &sigma;<sub>&theta;+90&deg;</sub> = &sigma;<sub>x</sub> + &sigma;<sub>y</sub> for any &theta;. The sum of normal stresses on perpendicular planes is <strong>invariant</strong>, which is a free five-second check on any transformation you do.</li>
<li>The stress on a plane can exceed both &sigma;<sub>x</sub> and &sigma;<sub>y</sub>. Shear feeds normal stress onto rotated planes, and that is why a shaft in pure torsion has any tensile stress at all.</li>
</ul>`,
      },
      {
        heading: "Principal stresses and maximum shear",
        html: `<p>Set d&sigma;<sub>&theta;</sub>/d&theta; = 0 and you find the planes where the normal stress is extreme. On those planes &tau; = 0; the two conditions turn out to be the same condition. These are the <strong>principal planes</strong>, and the stresses on them are the principal stresses:</p>
<p class="eq">&sigma;<sub>1,2</sub> = (&sigma;<sub>x</sub>+&sigma;<sub>y</sub>)/2 &plusmn; &radic;{ [(&sigma;<sub>x</sub>&minus;&sigma;<sub>y</sub>)/2]<sup>2</sup> + &tau;<sub>xy</sub><sup>2</sup> }</p>
<p class="eq">tan 2&theta;<sub>p</sub> = 2&tau;<sub>xy</sub> / (&sigma;<sub>x</sub> &minus; &sigma;<sub>y</sub>)</p>
<p>The maximum in-plane shear is the radical term itself, acting on planes rotated <strong>45&deg;</strong> from the principal planes:</p>
<p class="eq">&tau;<sub>max</sub> = &radic;{ [(&sigma;<sub>x</sub>&minus;&sigma;<sub>y</sub>)/2]<sup>2</sup> + &tau;<sub>xy</sub><sup>2</sup> } = (&sigma;<sub>1</sub> &minus; &sigma;<sub>2</sub>)/2,&nbsp;&nbsp;&theta;<sub>s</sub> = &theta;<sub>p</sub> &plusmn; 45&deg;</p>
<p>On those max-shear planes the normal stress is <em>not</em> zero. It is the average, (&sigma;<sub>1</sub>+&sigma;<sub>2</sub>)/2. The 45&deg; relationship is why a mild-steel tensile coupon shows L&uuml;ders bands and cup-and-cone shear lips at roughly 45&deg; to the load: pure tension &sigma; has &tau;<sub>max</sub> = &sigma;/2 on the 45&deg; planes, and a ductile metal yields by shear.</p>
<div class="callout warn"><strong>The third principal stress still counts.</strong> In plane stress &sigma;<sub>3</sub> = 0, which is a value, not an absence. For &sigma;<sub>1</sub> = 120, &sigma;<sub>2</sub> = 40 MPa the in-plane circle gives 40 MPa of shear, but the real maximum is (120 &minus; 0)/2 = 60 MPa on a plane cutting through the thickness. The absolute maximum shear is always (&sigma;<sub>max</sub> &minus; &sigma;<sub>min</sub>)/2 over all three principals.</div>
<p><strong>Pure torsion</strong> is the classic worked case: &sigma;<sub>x</sub> = &sigma;<sub>y</sub> = 0, &tau;<sub>xy</sub> = &tau;, so &sigma;<sub>1</sub> = +&tau; and &sigma;<sub>2</sub> = &minus;&tau; at &theta;<sub>p</sub> = 45&deg;. A brittle shaft fails normal to maximum tension and breaks on a 45&deg; helix. A ductile shaft fails in shear and breaks flat across the section. Two fracture surfaces out of one stress state.</p>`,
      },
      {
        heading: "Mohr’s circle",
        html: `<p>Plot every possible (&sigma;<sub>&theta;</sub>, &tau;<sub>&theta;</sub>) pair and you get a circle. The transformation equations are the parametric equations of one, with</p>
<p class="eq">center C = (&sigma;<sub>x</sub>+&sigma;<sub>y</sub>)/2&nbsp;&nbsp;&nbsp;&nbsp;radius R = &radic;{ [(&sigma;<sub>x</sub>&minus;&sigma;<sub>y</sub>)/2]<sup>2</sup> + &tau;<sub>xy</sub><sup>2</sup> }</p>
<figure class="fig">${figMohr}<figcaption>Plot the x-face at (&sigma;<sub>x</sub>, &minus;&tau;<sub>xy</sub>) and the y-face at (&sigma;<sub>y</sub>, +&tau;<sub>xy</sub>); they are diametrically opposite. Rotating the element &theta; on the part moves you 2&theta; around the circle in the same sense.</figcaption></figure>
<p>The recipe, runnable in 60 seconds on a whiteboard:</p>
<ol>
<li>Plot C on the &sigma; axis at the average of &sigma;<sub>x</sub> and &sigma;<sub>y</sub>.</li>
<li>Plot the x-face point X at (&sigma;<sub>x</sub>, &minus;&tau;<sub>xy</sub>). The distance CX is R.</li>
<li>&sigma;<sub>1</sub> and &sigma;<sub>2</sub> are where the circle crosses the &sigma; axis: C &plusmn; R. The top of the circle is &tau;<sub>max</sub> = R, sitting directly above C at &sigma; = C.</li>
<li>The angle from CX round to the &sigma; axis is 2&theta;<sub>p</sub>; halve it for the physical rotation.</li>
</ol>
<p>For the state drawn above: C = (80 &minus; 20)/2 = 30 MPa, R = &radic;(50<sup>2</sup> + 30<sup>2</sup>) = 58.3 MPa, so &sigma;<sub>1</sub> = 88.3 MPa, &sigma;<sub>2</sub> = &minus;28.3 MPa, &tau;<sub>max</sub> = 58.3 MPa. tan 2&theta;<sub>p</sub> = 60/100 gives 2&theta;<sub>p</sub> = 31.0&deg;, so the &sigma;<sub>1</sub> plane sits 15.5&deg; CCW from the x-face.</p>
<div class="callout warn"><strong>Angles on the circle are double the physical angles.</strong> If the interviewer says the principal point is 60&deg; around the circle, the element rotates 30&deg;. Getting this backwards is the most common Mohr error there is, and it shows up immediately when your &theta;<sub>p</sub> disagrees with tan 2&theta;<sub>p</sub> = 2&tau;<sub>xy</sub>/(&sigma;<sub>x</sub>&minus;&sigma;<sub>y</sub>).</div>
<p>Sketch the circle even when you use the formulas. It answers whether &sigma;<sub>2</sub> is compressive, whether the state is close to pure shear, and where the third circle sits, faster than algebra can, and it makes your reasoning visible.</p>`,
      },
      {
        heading: "Stress concentrations, residual stress, and hot spots",
        html: `<p>Everything above assumed a smooth stress field. Real parts have holes, fillets, keyways and grooves, and geometry funnels the load lines around them:</p>
<p class="eq">&sigma;<sub>max</sub> = K<sub>t</sub> &middot; &sigma;<sub>nom</sub></p>
<figure class="fig">${figHole}<figcaption>A small circular hole in a wide plate under remote tension: the peak at the hole edge is 3&sigma;<sub>&infin;</sub> regardless of hole diameter, decaying back to &sigma;<sub>&infin;</sub> within roughly one diameter.</figcaption></figure>
<p>Three things about K<sub>t</sub> get probed:</p>
<ul>
<li>K<sub>t</sub> is a <strong>geometry</strong> factor from elasticity. Material, load magnitude and units do not enter, so steel and aluminium parts of identical shape share the same K<sub>t</sub>.</li>
<li>It multiplies a <strong>defined nominal stress</strong>. Most published charts are net-section based: for a plate with a hole, &sigma;<sub>nom</sub> = P/[(w&minus;d)t]. Applying a net-section K<sub>t</sub> to a gross-section stress silently under-predicts the peak.</li>
<li>The driver is the local radius. K<sub>t</sub> rises steeply as r/d &rarr; 0 and flattens toward 1 as the radius grows.</li>
</ul>
<figure class="fig">${figKt}<figcaption>Typical K<sub>t</sub> trend for a shoulder fillet. The steep left branch is why a 0.5 mm radius and a 3 mm radius are completely different parts; the flat right branch is why going from 3 mm to 6 mm buys very little.</figcaption></figure>
<p><strong>When does K<sub>t</sub> actually matter?</strong> Under a <em>static</em> load on a <em>ductile</em> material, barely. The notch root yields locally, load redistributes to neighbouring fibres, and the part carries close to its unnotched capacity. Under <em>cyclic</em> load, or in a brittle material, it matters enormously, because fatigue cracks initiate at the local peak and every cycle sees the elevated stress. A hole that a static hand-calc ignores becomes the failure origin after 10<sup>6</sup> cycles.</p>
<p><strong>Residual stress</strong> is locked into the part with no external load, from welding, quenching, machining, forming or grinding, and it adds algebraically to the applied stress. It self-equilibrates over the section, so tension somewhere means compression elsewhere. Used deliberately it is close to free strength: <strong>shot peening</strong> and cold-rolling put the surface into compression, typically a few hundred MPa a few tenths of a millimetre deep, which subtracts from applied tension exactly where fatigue cracks start. Used accidentally it is free failure, since a weld toe can sit near yield in tension before any service load arrives.</p>
<div class="callout warn"><strong>Reading FEA hot spots.</strong> A perfectly sharp re-entrant corner in a linear-elastic model is a <strong>singularity</strong>. The theoretical stress is infinite, so the reported value is set by element size and grows every time you refine the mesh. A peak that doubles on refinement is a mesh reading, not a stress. Model the real fillet radius, check a section force or a structural stress, or use a mesh-insensitive fatigue method. A genuine concentration <em>converges</em> to a finite value as the mesh refines.</div>`,
      },
    ],
    equations: [
      { name: "Normal stress on an inclined plane", formula: "&sigma;<sub>&theta;</sub> = (&sigma;<sub>x</sub>+&sigma;<sub>y</sub>)/2 + [(&sigma;<sub>x</sub>&minus;&sigma;<sub>y</sub>)/2]cos2&theta; + &tau;<sub>xy</sub>sin2&theta;", note: "&theta; is measured CCW from the x-axis to the plane's outward normal. Everything is a function of 2&theta;." },
      { name: "Shear stress on an inclined plane", formula: "&tau;<sub>&theta;</sub> = &minus;[(&sigma;<sub>x</sub>&minus;&sigma;<sub>y</sub>)/2]sin2&theta; + &tau;<sub>xy</sub>cos2&theta;", note: "Setting this to zero recovers the principal planes: shear vanishes exactly where normal stress is extreme." },
      { name: "Principal stresses (2D)", formula: "&sigma;<sub>1,2</sub> = (&sigma;<sub>x</sub>+&sigma;<sub>y</sub>)/2 &plusmn; &radic;{[(&sigma;<sub>x</sub>&minus;&sigma;<sub>y</sub>)/2]<sup>2</sup> + &tau;<sub>xy</sub><sup>2</sup>}", note: "Centre &plusmn; radius of Mohr's circle. In plane stress the third principal stress &sigma;<sub>3</sub> = 0 and must be kept in the list." },
      { name: "Principal plane orientation", formula: "tan 2&theta;<sub>p</sub> = 2&tau;<sub>xy</sub>/(&sigma;<sub>x</sub>&minus;&sigma;<sub>y</sub>)", note: "Solve for 2&theta;<sub>p</sub> then halve. Two roots 90&deg; apart in &theta; give &sigma;<sub>1</sub> and &sigma;<sub>2</sub>; substitute back to see which is which." },
      { name: "Maximum in-plane shear", formula: "&tau;<sub>max</sub> = &radic;{[(&sigma;<sub>x</sub>&minus;&sigma;<sub>y</sub>)/2]<sup>2</sup> + &tau;<sub>xy</sub><sup>2</sup>} = (&sigma;<sub>1</sub>&minus;&sigma;<sub>2</sub>)/2", note: "Acts on planes at &theta;<sub>p</sub> &plusmn; 45&deg;, where the normal stress equals the average (&sigma;<sub>1</sub>+&sigma;<sub>2</sub>)/2, not zero." },
      { name: "Absolute maximum shear (3D)", formula: "&tau;<sub>abs</sub> = (&sigma;<sub>max</sub> &minus; &sigma;<sub>min</sub>)/2", note: "Taken over all three principal stresses including &sigma;<sub>3</sub> = 0 in plane stress. This is the number Tresca uses." },
      { name: "Mohr's circle", formula: "C = (&sigma;<sub>x</sub>+&sigma;<sub>y</sub>)/2, &nbsp;R = &radic;{[(&sigma;<sub>x</sub>&minus;&sigma;<sub>y</sub>)/2]<sup>2</sup> + &tau;<sub>xy</sub><sup>2</sup>}", note: "Plot the x-face at (&sigma;<sub>x</sub>, &minus;&tau;<sub>xy</sub>). Angles on the circle are 2&times; the physical rotation, in the same sense." },
      { name: "Out-of-plane stress in plane strain", formula: "&sigma;<sub>z</sub> = &nu;(&sigma;<sub>x</sub> + &sigma;<sub>y</sub>)", note: "&nu; is Poisson's ratio. Follows from &epsilon;<sub>z</sub> = 0. Zero only if &sigma;<sub>x</sub> + &sigma;<sub>y</sub> = 0 &mdash; never assume plane strain implies &sigma;<sub>z</sub> = 0." },
      { name: "Stress concentration", formula: "&sigma;<sub>max</sub> = K<sub>t</sub> &middot; &sigma;<sub>nom</sub>", note: "K<sub>t</sub> is geometric only. Use the nominal area the chart was built on (usually net section), and remember K<sub>t</sub> = 3 for a small hole in a wide plate." },
    ],
    interviewTips: [
      "Sketch Mohr's circle even when you are using the formulas. It catches sign errors, shows at a glance whether the second principal stress is compressive, and makes your reasoning visible to whoever is watching.",
      "Say '2 theta on the circle, theta on the part' out loud. The factor-of-two angle error is the most common mistake in this topic.",
      "In plane stress, write sigma_3 = 0 down explicitly before computing maximum shear. The through-thickness circle often governs and candidates drop it.",
      "Pure torsion giving sigma_1 = +tau at 45 degrees is the classic setup. Be ready to explain the brittle 45-degree helix and the ductile flat break from that one state.",
      "Before quoting a K_t, say which nominal area it belongs to. Net section versus gross section is a factor most candidates never mention.",
      "An FEA peak that keeps growing as the mesh refines is a singularity, not a stress. Say so, then say what you would model instead: the real fillet radius, or a section-force check by hand.",
    ],
  },

  questions: [
    {
      id: "stress-analysis-q01",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A round tensile coupon is pulled to a uniaxial stress of 120 MPa (&sigma;<sub>y</sub> = 0, &tau;<sub>xy</sub> = 0). What is the <strong>maximum shear stress</strong> at a point in the gauge length, in MPa?</p>`,
      answer: 60,
      unit: "MPa",
      explanation: `<p class="eq">&tau;<sub>max</sub> = (&sigma;<sub>1</sub> &minus; &sigma;<sub>2</sub>)/2 = (120 &minus; 0)/2 = <strong>60 MPa</strong></p>
<p>Uniaxial tension is shear-free only on the planes you happened to draw. The maximum shear sits at 45&deg; to the load axis, which is why a mild-steel coupon shows L&uuml;ders bands and a shear lip at roughly that angle, and why ductile metals yield at half their tensile strength in pure shear.</p>`,
    },
    {
      id: "stress-analysis-q02",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A cast-iron shaft in <strong>pure torsion</strong> reaches a surface shear stress of 90 MPa and fractures along a 45&deg; helix, as sketched. Which stress state explains that fracture surface?</p>`,
      figure: figQTorsion,
      choices: [
        "&sigma;<sub>1</sub> = +45 MPa at 45&deg;; the helix follows the plane of maximum shear",
        "&sigma;<sub>1</sub> = +90 MPa on the transverse plane; the helix follows the shear planes",
        "&sigma;<sub>1</sub> = +90 MPa at 45&deg; and &sigma;<sub>2</sub> = &minus;90 MPa at &minus;45&deg;; it splits normal to &sigma;<sub>1</sub>",
        "&sigma;<sub>1</sub> = +180 MPa at 45&deg;; brittle materials fail on the maximum-shear plane",
      ],
      answer: 2,
      explanation: `<p>Pure shear means &sigma;<sub>x</sub> = &sigma;<sub>y</sub> = 0 and &tau;<sub>xy</sub> = 90 MPa, so Mohr&rsquo;s circle is centred at the origin with R = 90 MPa:</p>
<p class="eq">&sigma;<sub>1</sub> = +90 MPa, &sigma;<sub>2</sub> = &minus;90 MPa, at &theta;<sub>p</sub> = &plusmn;45&deg;</p>
<p>Cast iron is brittle, so it fails normal to the maximum <em>tensile</em> stress, and the plane normal to &sigma;<sub>1</sub> spirals around the shaft. Run the same test on ductile steel and it breaks flat across the section, because steel yields on the maximum-shear plane, which in torsion is transverse. One stress state, two fracture surfaces. The 45 MPa option halves &tau; as if the circle were centred somewhere other than the origin.</p>`,
    },
    {
      id: "stress-analysis-q03",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>At a point on the outer surface of a thin-walled pressure vessel the hoop stress is 120 MPa and the longitudinal stress is 60 MPa, with negligible shear on those planes. What is the maximum <strong>in-plane</strong> shear stress, in MPa?</p>`,
      answer: 30,
      unit: "MPa",
      explanation: `<p class="eq">&tau;<sub>max,in-plane</sub> = (&sigma;<sub>1</sub> &minus; &sigma;<sub>2</sub>)/2 = (120 &minus; 60)/2 = <strong>30 MPa</strong></p>
<p>Both given stresses act on shear-free planes, so they are already principal. Then volunteer the other number: the outer surface is free, &sigma;<sub>3</sub> = 0, and the through-thickness circle gives 60 MPa. That is the one a Tresca check consumes.</p>`,
    },
    {
      id: "stress-analysis-q04",
      type: "mc",
      difficulty: 1,
      prompt: `<p>You have two parts to analyse in 2D: a 2 mm thick sheet-metal bracket loaded in its own plane, and a 300 mm long steel hub press-fitted onto a shaft (you are cutting a section at mid-length). Which idealization goes with which part?</p>`,
      choices: [
        "Both as plane stress &mdash; a 2D solver zeroes the out-of-plane stress anyway",
        "Bracket plane stress, hub plane strain: the hub's length blocks axial contraction",
        "Bracket plane strain, hub plane stress: thin parts are the ones held flat by neighbours",
        "Both as plane strain &mdash; any 2D slice cut from a solid body has zero out-of-plane strain",
      ],
      answer: 1,
      explanation: `<p>Plane stress applies when nothing can push on the out-of-plane faces: a thin part with free surfaces on both sides, loaded in its plane. That is the bracket. &sigma;<sub>z</sub> = 0 while &epsilon;<sub>z</sub> is free to be nonzero, so it thins under tension.</p>
<p>Plane strain applies when a long body of constant section cannot strain axially, because the material on either side of your slice holds it. That is the hub at mid-length, where &epsilon;<sub>z</sub> &asymp; 0 <em>generates</em> &sigma;<sub>z</sub> = &nu;(&sigma;<sub>x</sub>+&sigma;<sub>y</sub>).</p>
<p>The first and last options treat the choice as a solver setting rather than a statement about the hardware. It changes the answer: at the hub bore, plane strain adds tens of MPa out of plane, pushes the state toward hydrostatic and lowers von Mises relative to a plane-stress run of the same section.</p>`,
    },
    {
      id: "stress-analysis-q05",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A wide plate carries a remote tensile stress of 100 MPa. A 10 mm diameter hole is drilled through it, far from any edge. What is the peak stress at the hole edge, in MPa?</p>`,
      answer: 300,
      unit: "MPa",
      explanation: `<p class="eq">&sigma;<sub>max</sub> = K<sub>t</sub> &sigma;<sub>nom</sub> = 3 &times; 100 = <strong>300 MPa</strong></p>
<p>K<sub>t</sub> = 3 for a small circular hole in a wide plate under remote uniaxial tension. The peak sits at the two points on the hole boundary lying on the diameter perpendicular to the load, and it decays to the remote value within about one hole diameter.</p>
<p>Two numbers to have ready. The factor 3 is independent of hole <em>size</em>, so a 1 mm hole and a 10 mm hole both give 3&times; in a wide plate; size enters through fatigue notch sensitivity, not K<sub>t</sub>. And at the hole edge on the load axis the stress is &minus;100 MPa, compressive.</p>`,
    },
    {
      id: "stress-analysis-q06",
      type: "mc",
      difficulty: 1,
      prompt: `<p>You physically rotate a stress element 30&deg; counterclockwise on the part. How far, and in which sense, does the point representing that face move around Mohr’s circle?</p>`,
      choices: [
        "30&deg; counterclockwise &mdash; the circle maps physical rotation one-to-one",
        "15&deg; counterclockwise &mdash; circle angles are half the physical angle",
        "60&deg; clockwise &mdash; the circle always reverses the sense of the rotation",
        "60&deg; counterclockwise &mdash; circle angles are twice the physical angle",
      ],
      answer: 3,
      explanation: `<p>The transformation equations contain cos 2&theta; and sin 2&theta;, so the circle is parameterized in <strong>2&theta;</strong>. A 30&deg; physical rotation is 60&deg; on the circle, and with the standard convention (x-face plotted at &sigma;<sub>x</sub>, &minus;&tau;<sub>xy</sub>) the sense is preserved.</p>
<p>Rotate the element 90&deg; and the x and y faces swap, which is physically the same pair of planes. On the circle that is 180&deg;, the diametrically opposite point. Exactly right.</p>
<p>This factor of two causes more errors than anything else in the topic. A &theta;<sub>p</sub> that disagrees with tan 2&theta;<sub>p</sub> = 2&tau;<sub>xy</sub>/(&sigma;<sub>x</sub>&minus;&sigma;<sub>y</sub>) means you halved or doubled the wrong quantity.</p>`,
    },
    {
      id: "stress-analysis-q07",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>The stress element shown has &sigma;<sub>x</sub> = 60 MPa, &sigma;<sub>y</sub> = 20 MPa and &tau;<sub>xy</sub> = 30 MPa. Find the maximum principal stress &sigma;<sub>1</sub>, in MPa.</p>`,
      figure: figQElement,
      answer: 76.1,
      unit: "MPa",
      explanation: `<p class="eq">C = (60 + 20)/2 = 40 MPa</p>
<p class="eq">R = &radic;{[(60 &minus; 20)/2]<sup>2</sup> + 30<sup>2</sup>} = &radic;(20<sup>2</sup> + 30<sup>2</sup>) = &radic;1300 = 36.1 MPa</p>
<p class="eq">&sigma;<sub>1</sub> = C + R = 40 + 36.1 = <strong>76.1 MPa</strong>&nbsp;&nbsp;(&sigma;<sub>2</sub> = 3.94 MPa)</p>
<p>&sigma;<sub>1</sub> + &sigma;<sub>2</sub> = 80 = &sigma;<sub>x</sub> + &sigma;<sub>y</sub>, so the invariant holds. &#10003; Using (&sigma;<sub>x</sub> &minus; &sigma;<sub>y</sub>) instead of half of it inside the radical gives R = 50 and &sigma;<sub>1</sub> = 90. And &sigma;<sub>3</sub> = 0 here, which is what actually sets the absolute maximum shear at 38.0 MPa rather than the in-plane 36.1 MPa.</p>`,
    },
    {
      id: "stress-analysis-q08",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>At the toe of a fillet weld the stress state is &sigma;<sub>x</sub> = 50 MPa, &sigma;<sub>y</sub> = &minus;30 MPa, &tau;<sub>xy</sub> = 40 MPa. Through what angle, counterclockwise from the x-axis, must you rotate to reach the plane carrying &sigma;<sub>1</sub>? Answer in degrees.</p>`,
      answer: 22.5,
      unit: "degrees",
      explanation: `<p class="eq">tan 2&theta;<sub>p</sub> = 2&tau;<sub>xy</sub>/(&sigma;<sub>x</sub> &minus; &sigma;<sub>y</sub>) = 80/[50 &minus; (&minus;30)] = 80/80 = 1</p>
<p class="eq">2&theta;<sub>p</sub> = 45&deg; &rarr; &theta;<sub>p</sub> = <strong>22.5&deg;</strong></p>
<p>Substituting back confirms this is &sigma;<sub>1</sub> and not &sigma;<sub>2</sub>: &sigma;<sub>&theta;</sub> = 10 + 40cos45&deg; + 40sin45&deg; = 66.6 MPa, matching C + R = 10 + 56.6. &#10003;</p>
<p>Reporting 45&deg; quotes the circle angle instead of the physical one. Dropping the minus sign on &sigma;<sub>y</sub> gives tan 2&theta;<sub>p</sub> = 80/20 and &theta;<sub>p</sub> = 38.0&deg;, a sign slip that also throws &sigma;<sub>1</sub> off by 20 MPa.</p>`,
    },
    {
      id: "stress-analysis-q09",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A gearbox housing wall is in plane stress with &sigma;<sub>1</sub> = 120 MPa and &sigma;<sub>2</sub> = 40 MPa, both tensile. The in-plane Mohr’s circle has a radius of 40 MPa. What is the largest shear stress acting at that point?</p>`,
      choices: [
        "40 MPa &mdash; in plane stress the in-plane circle is the only one that exists",
        "60 MPa &mdash; the circle through &sigma;<sub>1</sub> = 120 and &sigma;<sub>3</sub> = 0 is larger",
        "80 MPa &mdash; the governing circle runs from &sigma;<sub>1</sub> down to &minus;&sigma;<sub>2</sub>",
        "120 MPa &mdash; the maximum shear equals the largest principal stress",
      ],
      answer: 1,
      explanation: `<p>Plane stress means &sigma;<sub>3</sub> = 0, not that there is no third principal stress. Order the full set: 120, 40, 0. Three Mohr circles exist, and the absolute maximum shear is the radius of the largest.</p>
<p class="eq">&tau;<sub>abs</sub> = (&sigma;<sub>max</sub> &minus; &sigma;<sub>min</sub>)/2 = (120 &minus; 0)/2 = <strong>60 MPa</strong></p>
<p>40 MPa is the in-plane radius, and choosing it under-predicts a Tresca check by 50% while putting the yield plane in the wrong place. Carry the rule: when both in-plane principal stresses share a sign, the through-thickness circle governs. When they straddle zero, the in-plane circle is already the biggest.</p>`,
    },
    {
      id: "stress-analysis-q10",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A long steel hub is press-fitted onto a shaft, and you model the mid-length cross-section as plane strain (&nu; = 0.30). At a point in the hub the in-plane stresses are &sigma;<sub>x</sub> = 100 MPa and &sigma;<sub>y</sub> = 40 MPa. What is the out-of-plane stress &sigma;<sub>z</sub>, in MPa?</p>`,
      answer: 42,
      unit: "MPa",
      explanation: `<p>Plane strain is defined by &epsilon;<sub>z</sub> = 0. Put that into the 3D Hooke&rsquo;s law for the z direction:</p>
<p class="eq">&epsilon;<sub>z</sub> = [&sigma;<sub>z</sub> &minus; &nu;(&sigma;<sub>x</sub> + &sigma;<sub>y</sub>)]/E = 0 &rarr; &sigma;<sub>z</sub> = &nu;(&sigma;<sub>x</sub> + &sigma;<sub>y</sub>)</p>
<p class="eq">&sigma;<sub>z</sub> = 0.30 (100 + 40) = <strong>42 MPa</strong></p>
<p>The 2D state is really 100 / 42 / 40 MPa. That 42 MPa sits between the in-plane values, so it does not change the maximum shear here, but it raises the hydrostatic part and cuts the von Mises stress. Answering zero confuses plane strain with plane stress. The same constraint that produces &sigma;<sub>z</sub> suppresses shear yielding at a crack tip, which is why thick sections behave more brittle.</p>`,
    },
    {
      id: "stress-analysis-q11",
      type: "mc",
      difficulty: 2,
      prompt: `<p>Your FEA of the steel bracket shown reports 900 MPa at the inside corner, on a material with S<sub>y</sub> = 250 MPa. You refine the mesh from 2 mm to 1 mm to 0.5 mm and the peak reads 470, then 640, then 900 MPa. What do you conclude?</p>`,
      figure: figQFea,
      choices: [
        "The bracket yields: add material until the reported peak falls under 250 MPa",
        "The mesh is still too coarse: keep refining until the peak stress settles down",
        "It is a singularity: with r = 0 the peak is set by element size, not by physics",
        "The load is about 4&times; too high: recheck the units on the applied force",
      ],
      answer: 2,
      explanation: `<p>A perfectly sharp re-entrant corner in a linear-elastic model has a theoretically <strong>infinite</strong> stress. The solver cannot report infinity, so it reports whatever the smallest element averages, and that grows without limit as you refine. A stress that never converges is not a stress. It is a mesh reading.</p>
<p>The trend gives it away. A real stress concentration converges (470, 610, 640, 645&hellip;); a singularity keeps climbing. Model the fillet radius the machinist will actually leave, since even 0.5 mm changes everything. Or extract a section force and compute a nominal stress by hand. Or use a mesh-insensitive structural-stress method for welds.</p>
<p>Refining further is the right instinct applied to the wrong situation, and it will burn an afternoon producing a bigger number every time.</p>`,
    },
    {
      id: "stress-analysis-q12",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>The plate shown is 60 mm wide and 8 mm thick with a 12 mm hole on the centreline, and carries 48 kN of tension. The chart you are using gives K<sub>t</sub> = 2.6 <strong>based on the net section</strong>. What is the peak stress at the hole edge, in MPa?</p>`,
      figure: figQPlateHole,
      answer: 325,
      unit: "MPa",
      explanation: `<p>Get the nominal stress on the area the chart was built for, which is the material actually left beside the hole:</p>
<p class="eq">A<sub>net</sub> = (w &minus; d)t = (60 &minus; 12)(8) = 384 mm<sup>2</sup></p>
<p class="eq">&sigma;<sub>nom</sub> = P/A<sub>net</sub> = 48 000/384 = 125 MPa</p>
<p class="eq">&sigma;<sub>max</sub> = K<sub>t</sub> &sigma;<sub>nom</sub> = 2.6 &times; 125 = <strong>325 MPa</strong></p>
<p>Using the gross area gives 48 000/(60&times;8) = 100 MPa and 260 MPa, a 20% under-prediction. Published K<sub>t</sub> values belong to a specific nominal stress: net section for holes and grooves, small-diameter section for shaft shoulders. K<sub>t</sub> is below 3 here because the hole is a fifth of the width, so the plate is not wide any more.</p>`,
    },
    {
      id: "stress-analysis-q13",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A valve spring is shot-peened before assembly. The applied stress cycle in service is unchanged, yet fatigue life goes up several-fold. The measured residual stress profile is shown. What is the mechanism?</p>`,
      figure: figQPeen,
      choices: [
        "The compressive residual layer lowers the local mean stress that drives cracking",
        "Peening work-hardens the surface, which lowers the K<sub>t</sub> of the wire surface",
        "The dimpled surface spreads the load, cutting the peak stress carried by the wire",
        "Peening raises the local modulus, so the surface strains less under the same load",
      ],
      answer: 0,
      explanation: `<p>Residual stress adds algebraically to applied stress. Peening leaves a few hundred MPa of compression in a layer a few tenths of a millimetre deep, which is exactly where fatigue cracks initiate. The service cycle still swings by the same amount, but the whole cycle shifts down: peak tensile stress and mean stress both drop, so on a Goodman or Haigh diagram the operating point moves well inside the line.</p>
<p>Geometry is untouched, so K<sub>t</sub> is identical, and stiffness is untouched, so any modulus argument is wrong. The balancing tension deeper in the section is visible on the plot, because residual stress always self-equilibrates. Overdo the peening and the crack origin moves subsurface to meet it.</p>`,
    },
    {
      id: "stress-analysis-q14",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A bonded lap joint has an adhesive line whose outward normal lies 30&deg; counterclockwise from the x-axis. The stress state in the adherend is &sigma;<sub>x</sub> = 100 MPa, &sigma;<sub>y</sub> = 40 MPa, &tau;<sub>xy</sub> = 25 MPa. What normal stress acts on the bond plane, in MPa?</p>`,
      answer: 107,
      unit: "MPa",
      explanation: `<p>Straight substitution, with 2&theta; = 60&deg;:</p>
<p class="eq">&sigma;<sub>&theta;</sub> = (&sigma;<sub>x</sub>+&sigma;<sub>y</sub>)/2 + [(&sigma;<sub>x</sub>&minus;&sigma;<sub>y</sub>)/2]cos2&theta; + &tau;<sub>xy</sub>sin2&theta;</p>
<p class="eq">&sigma;<sub>&theta;</sub> = 70 + 30(0.500) + 25(0.866) = 70 + 15 + 21.7 = 106.65 &rarr; <strong>107 MPa</strong></p>
<p>The bond plane carries more normal stress than either &sigma;<sub>x</sub> or &sigma;<sub>y</sub>, which is not an error: shear feeds normal stress onto rotated planes, and 107 MPa sits just under &sigma;<sub>1</sub> = 70 + &radic;(30<sup>2</sup>+25<sup>2</sup>) = 109 MPa. Entering 30&deg; where 2&theta; belongs returns 70 + 26.0 + 12.5 = 108.5 MPa, close enough to look right and wrong for the wrong reason. An adhesive also needs &tau;<sub>&theta;</sub> = &minus;30(0.866) + 25(0.5) = &minus;13.5 MPa, since bond lines are rated separately in peel and shear.</p>`,
    },
    {
      id: "stress-analysis-q15",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A 6061-T6 bracket (S<sub>y</sub> = 275 MPa) has a drilled hole with K<sub>t</sub> = 2.4; nominal net-section stress is 90 MPa. Do you have to apply the K<sub>t</sub> before comparing with yield?</p>`,
      choices: [
        "Yes for both cases: the local peak of 216 MPa is what the material actually sees",
        "No for either case: local yielding blunts the notch and redistributes the load",
        "Yes for static, no for fatigue: notch sensitivity q is well below 1 for aluminium",
        "No for the static check; yes under cyclic load, where the local peak starts cracks",
      ],
      answer: 3,
      explanation: `<p>Under a static load on a ductile material the notch root yields first (2.4 &times; 90 = 216 MPa, below the 275 MPa yield here, and local even if it were above). Once it yields it cannot carry more stress, so load redistributes to neighbouring fibres and the section keeps working. Failure comes when the <em>net section</em> reaches capacity, not when one fibre reaches yield, which is why static ductile sizing normally uses &sigma;<sub>nom</sub>.</p>
<p>Cyclic load kills that argument. Fatigue cracks initiate from local plastic cycling at the notch root, so the peak stress governs from cycle one and you apply K<sub>t</sub>, adjusted to K<sub>f</sub> for notch sensitivity, to the alternating stress. Same hole, same K<sub>t</sub>, opposite conclusion. Parts that pass static analysis and then die in the field usually died here.</p>
<p>Brittle materials, low temperature and high constraint remove the redistribution argument altogether. Apply K<sub>t</sub> statically in those cases.</p>`,
    },
    {
      id: "stress-analysis-q16",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A shouldered shaft steps from D = 60 mm to d = 40 mm with a 4 mm fillet radius and carries a bending moment of 900 N&middot;m. Read K<sub>t</sub> off the chart shown and compute the peak stress at the fillet, in MPa.</p>`,
      figure: figQKtRead,
      answer: 265,
      unit: "MPa",
      explanation: `<p>Enter the chart at r/d = 4/40 = 0.10, giving K<sub>t</sub> = 1.85. For shaft shoulders the nominal stress uses the <strong>small</strong> diameter:</p>
<p class="eq">&sigma;<sub>nom</sub> = 32M/(&pi;d<sup>3</sup>) = 32(900)/[&pi;(0.040)<sup>3</sup>] = 28 800/2.011&times;10<sup>&minus;4</sup> = 143 MPa</p>
<p class="eq">&sigma;<sub>max</sub> = 1.85 &times; 143 = <strong>265 MPa</strong></p>
<p>Using D = 60 mm gives &sigma;<sub>nom</sub> = 42.4 MPa and a badly unconservative 78 MPa. Reading the chart at r/D instead of r/d (0.067) lands further up the steep branch, near K<sub>t</sub> = 2.1. Doubling the radius to 8 mm takes r/d to 0.20, K<sub>t</sub> to about 1.58 and the peak to 226 MPa, a 15% cut in stress for a different insert.</p>`,
    },
    {
      id: "stress-analysis-q17",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>At the surface of a shaft carrying bending and torque together, the bending stress is 120 MPa (axial direction) and the torsional shear is 45 MPa. What is the maximum principal stress &sigma;<sub>1</sub>, in MPa?</p>`,
      answer: 135,
      unit: "MPa",
      explanation: `<p>Set the element up on the shaft surface: &sigma;<sub>x</sub> = 120 MPa along the axis, &sigma;<sub>y</sub> = 0 since nothing hoops it, &tau;<sub>xy</sub> = 45 MPa.</p>
<p class="eq">C = 120/2 = 60 MPa,&nbsp;&nbsp;R = &radic;(60<sup>2</sup> + 45<sup>2</sup>) = &radic;5625 = 75.0 MPa</p>
<p class="eq">&sigma;<sub>1</sub> = 60 + 75 = <strong>135 MPa</strong>,&nbsp;&nbsp;&sigma;<sub>2</sub> = 60 &minus; 75 = &minus;15 MPa</p>
<p>The 60&ndash;45&ndash;75 triangle is a scaled 3-4-5, which saves twenty seconds on a whiteboard. Maximum shear is R = 75.0 MPa, the number a Tresca check needs, and &sigma;<sub>1</sub> exceeds the bending stress alone by 12%, so torsion is not a small correction. Adding 120 + 45 = 165 MPa treats stresses on different planes as though they stacked.</p>`,
    },
    {
      id: "stress-analysis-q18",
      type: "mc",
      difficulty: 3,
      prompt: `<p>At one surface point of a loaded bracket you have computed three contributions: axial tension 40 MPa, bending 60 MPa (tensile, same direction as the axial stress), and torsional shear 35 MPa. What is the correct first step toward the principal stresses?</p>`,
      choices: [
        "Add the two normal stresses to 100 MPa, keep &tau; = 35 MPa, then transform",
        "Add all three to 135 MPa and treat the result as the maximum principal stress",
        "Take the largest single component, 60 MPa, since the others act on other planes",
        "Root-sum-square the three components to 80 MPa and compare that with yield",
      ],
      answer: 0,
      explanation: `<p>Superposition works <strong>component by component in a common coordinate frame</strong>, never on magnitudes. Axial and bending are both &sigma;<sub>x</sub> here, so they add to 100 MPa. Torsion contributes &tau;<sub>xy</sub> = 35 MPa, which cannot be added to a normal stress at all. Transform the assembled state:</p>
<p class="eq">&sigma;<sub>1</sub> = 50 + &radic;(50<sup>2</sup> + 35<sup>2</sup>) = 50 + 61.0 = 111 MPa</p>
<p>Adding all three gives 135 MPa and is dimensionally naive. Root-sum-square gives 80 MPa and has no basis, besides being unconservative. Taking the largest component ignores the other two.</p>
<p>Two cautions earn credit here. Bending and axial only add where their tensile faces coincide, since bending subtracts on the compression face. And every component has to be evaluated at the same physical point, because bending peaks at the outer fibre while torsional shear is uniform around the surface.</p>`,
    },
    {
      id: "stress-analysis-q19",
      type: "mc",
      difficulty: 3,
      prompt: `<p>The Mohr’s circle below was constructed for a point in a bracket, with the centre and radius marked. Which set of results does it give?</p>`,
      figure: figQMohrRead,
      choices: [
        "&sigma;<sub>1</sub> = 110, &sigma;<sub>2</sub> = &minus;20, &tau;<sub>max</sub> = 130 MPa",
        "&sigma;<sub>1</sub> = 130, &sigma;<sub>2</sub> = &minus;40, &tau;<sub>max</sub> = 65 MPa",
        "&sigma;<sub>1</sub> = 110, &sigma;<sub>2</sub> = &minus;20, &tau;<sub>max</sub> = 65 MPa",
        "&sigma;<sub>1</sub> = 65, &sigma;<sub>2</sub> = &minus;65, &tau;<sub>max</sub> = 45 MPa",
      ],
      answer: 2,
      explanation: `<p>Read the circle directly. The principal stresses are the two &sigma;-axis crossings, C &plusmn; R, and the maximum in-plane shear is the height of the top of the circle above the axis, which is R.</p>
<p class="eq">&sigma;<sub>1</sub> = 45 + 65 = 110 MPa,&nbsp;&nbsp;&sigma;<sub>2</sub> = 45 &minus; 65 = &minus;20 MPa,&nbsp;&nbsp;&tau;<sub>max</sub> = R = 65 MPa</p>
<p>The plotted x-face point X (84, &minus;52) checks it: C = (84 + 6)/2 = 45 and R = &radic;(39<sup>2</sup> + 52<sup>2</sup>) = 65. &#10003;</p>
<p>The three misreads are taking the diameter as &tau;<sub>max</sub> (130), reading C off the top of the circle rather than the axis (130 and &minus;40), and swapping C with R (65 and &minus;65). Since &sigma;<sub>1</sub> and &sigma;<sub>2</sub> straddle zero, the in-plane circle is the largest of the three and 65 MPa is the absolute maximum shear too.</p>`,
    },
    {
      id: "stress-analysis-q20",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A long extruded rail is restrained axially, so its cross-section is analysed as plane strain with &nu; = 0.30. At a point &sigma;<sub>x</sub> = 140 MPa, &sigma;<sub>y</sub> = 60 MPa, &tau;<sub>xy</sub> = 0. What is the <strong>absolute</strong> maximum shear stress at that point, in MPa?</p>`,
      answer: 40,
      unit: "MPa",
      explanation: `<p>Recover the third principal stress first, which plane strain generates rather than zeroes:</p>
<p class="eq">&sigma;<sub>z</sub> = &nu;(&sigma;<sub>x</sub> + &sigma;<sub>y</sub>) = 0.30(200) = 60 MPa</p>
<p>With &tau;<sub>xy</sub> = 0 the given stresses are already principal, so the full set is 140, 60, 60 MPa.</p>
<p class="eq">&tau;<sub>abs</sub> = (&sigma;<sub>max</sub> &minus; &sigma;<sub>min</sub>)/2 = (140 &minus; 60)/2 = <strong>40 MPa</strong></p>
<p>Assuming &sigma;<sub>z</sub> = 0 instead gives (140 &minus; 0)/2 = 70 MPa, a 75% over-prediction of the shear that drives yielding. Out-of-plane constraint pulls the state toward hydrostatic, cutting shear and von Mises while raising the mean stress. The same constraint is why thick sections resist yielding but tolerate cracks poorly.</p>`,
    },
    {
      id: "stress-analysis-q21",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A wide plate under remote tension contains an elliptical hole whose major axis is three times its minor axis and lies <strong>perpendicular</strong> to the load. Using K<sub>t</sub> = 1 + 2a/b (a is the semi-axis perpendicular to the load, b the one along it), what is K<sub>t</sub>?</p>`,
      answer: 7,
      unit: "(dimensionless)",
      explanation: `<p class="eq">K<sub>t</sub> = 1 + 2(a/b) = 1 + 2(3) = <strong>7.0</strong></p>
<p>The major axis is perpendicular to the load, so a/b = 3. Turn the same hole 90&deg; and a/b = 1/3, giving K<sub>t</sub> = 1.67. Identical hole, identical area removed, factor of four in peak stress. That is why slots in loaded plates are drawn with their length along the load path.</p>
<p>The formula also explains cracks. As b &rarr; 0 the ellipse becomes a sharp flaw and K<sub>t</sub> &rarr; &infin;, the singularity that forces fracture mechanics and K<sub>I</sub> once the notch tip radius gets small. Setting a = b recovers the circle at K<sub>t</sub> = 3. &#10003;</p>`,
    },
    {
      id: "stress-analysis-q22",
      type: "mc",
      difficulty: 3,
      prompt: `<p>Two bars of the same diameter are pulled to failure. The mild-steel bar necks and its fracture shows shear lips at roughly 45&deg; to the axis; the grey cast-iron bar breaks on a flat plane perpendicular to the axis. Both saw the same stress state right up to failure. What does the difference tell you?</p>`,
      choices: [
        "Cast iron sees higher shear stress because brittle solids concentrate load internally",
        "Steel fails on the max-shear planes at 45&deg;; cast iron fails normal to &sigma;<sub>1</sub>",
        "Steel fails normal to &sigma;<sub>1</sub>; cast iron follows the max-shear planes at 45&deg;",
        "The angle difference comes from loading rate, not from the underlying stress state",
      ],
      answer: 1,
      explanation: `<p>In uniaxial tension &sigma;<sub>1</sub> = &sigma; along the axis and &tau;<sub>max</sub> = &sigma;/2 on planes 45&deg; away. Same state in both bars. The fracture surface reveals which quantity the <em>material</em> is weakest against.</p>
<ul>
<li>Ductile steel yields by dislocation slip, driven by shear. Slip runs on the 45&deg; max-shear planes, giving L&uuml;ders bands, necking and the cup-and-cone shear lip.</li>
<li>Grey cast iron is brittle, with graphite flakes acting as internal notches. It separates normal to the maximum tensile stress, on the transverse plane.</li>
</ul>
<p>The torsion shaft is the same argument in reverse: there the brittle material breaks on a 45&deg; helix and the ductile one breaks flat, because torsion puts &sigma;<sub>1</sub> at 45&deg; and &tau;<sub>max</sub> on the transverse plane. Explaining both from one Mohr&rsquo;s circle is why ductile metals get a shear-based criterion and brittle ones a maximum-normal-stress criterion.</p>`,
    },
  ],

  qna: [
    {
      id: "stress-analysis-qa01",
      q: `<p>Walk me through building Mohr’s circle from &sigma;<sub>x</sub>, &sigma;<sub>y</sub> and &tau;<sub>xy</sub>, and what you read off it.</p>`,
      a: `<p>1) <strong>Axes</strong>: normal stress &sigma; horizontal, shear &tau; vertical. 2) <strong>Centre</strong> C = (&sigma;<sub>x</sub>+&sigma;<sub>y</sub>)/2 on the &sigma; axis. It never moves, because the sum of normal stresses on perpendicular planes is invariant. 3) <strong>Plot the x-face</strong> at (&sigma;<sub>x</sub>, &minus;&tau;<sub>xy</sub>) and the y-face at (&sigma;<sub>y</sub>, +&tau;<sub>xy</sub>). They are diametrically opposite, so the line joining them passes through C. 4) <strong>Radius</strong> R = &radic;{[(&sigma;<sub>x</sub>&minus;&sigma;<sub>y</sub>)/2]<sup>2</sup> + &tau;<sub>xy</sub><sup>2</sup>}, or just measure the distance from C to the plotted point.</p>
<p>Then read it. <strong>&sigma;<sub>1</sub>, &sigma;<sub>2</sub> = C &plusmn; R</strong> at the &sigma;-axis crossings, where &tau; = 0 by construction. <strong>&tau;<sub>max</sub> = R</strong> at the top of the circle, directly above C, so the normal stress on the max-shear plane is C rather than zero. The <strong>orientation</strong> is the angle from the x-face point round to the &sigma; axis, which is 2&theta;<sub>p</sub>; halve it for the physical rotation and keep the same sense.</p>
<p>Then say out loud that in plane stress &sigma;<sub>3</sub> = 0, so there are three circles and the absolute maximum shear is the radius of the biggest. Skipping that step is how a Tresca check ends up 50% light.</p>`,
    },
    {
      id: "stress-analysis-qa02",
      q: `<p>Plane stress versus plane strain &mdash; when is each legitimate, and what goes wrong if you pick the wrong one?</p>`,
      a: `<p><strong>Plane stress</strong> is legitimate when the out-of-plane faces are free: a thin part loaded in its own plane, so a sheet-metal bracket, a gusset, a thin-wall vessel. It also holds at any free surface, since nothing can push on air. Then &sigma;<sub>z</sub> = &tau;<sub>xz</sub> = &tau;<sub>yz</sub> = 0 and &epsilon;<sub>z</sub> is free, so the part thins under in-plane tension.</p>
<p><strong>Plane strain</strong> is legitimate when a long body of constant cross-section cannot strain axially because its own neighbouring material restrains it: a dam, a long press-fit hub, an extruded rail, a wide roller, the mid-thickness of a thick plate. Then &epsilon;<sub>z</sub> = 0 and &sigma;<sub>z</sub> = &nu;(&sigma;<sub>x</sub>+&sigma;<sub>y</sub>).</p>
<p>The failure mode is assuming plane strain means &sigma;<sub>z</sub> = 0. The constraint <em>creates</em> out-of-plane stress. With &nu; = 0.3 and &sigma;<sub>x</sub>+&sigma;<sub>y</sub> = 200 MPa that is 60 MPa you never see in a plane-stress run. Plane strain also pushes the state toward hydrostatic, so von Mises and the maximum shear both drop and you predict less yielding than really happens if the part is thin. The same constraint raises triaxiality at a crack tip, which is why thick sections have lower fracture toughness and why K<sub>IC</sub> is defined under plane strain.</p>`,
    },
    {
      id: "stress-analysis-qa03",
      q: `<p>Why does a brittle shaft in torsion fail on a 45&deg; helix while a ductile one breaks flat?</p>`,
      a: `<p>Pure torsion at the shaft surface is pure shear: &sigma;<sub>x</sub> = &sigma;<sub>y</sub> = 0, &tau;<sub>xy</sub> = &tau; = Tr/J. Mohr&rsquo;s circle is centred at the origin with radius &tau;, so &sigma;<sub>1</sub> = +&tau; and &sigma;<sub>2</sub> = &minus;&tau;, with the principal planes at &plusmn;45&deg; to the axis. The maximum shear, magnitude &tau;, acts on the original transverse and longitudinal planes.</p>
<p>One stress state, two competing failure paths. A <strong>brittle</strong> material such as grey cast iron, chalk or hardened tool steel separates normal to the maximum tensile stress, and the plane normal to &sigma;<sub>1</sub> wraps around the shaft as a 45&deg; helix. Twist a piece of chalk and you get exactly that spiral. A <strong>ductile</strong> material yields by shear on the transverse plane and breaks flat, square across the section, usually with a rubbed and burnished face.</p>
<p>The fracture surface is therefore a diagnostic. A helical break on a steel shaft says the material was harder or more brittle than intended: over-hardened heat treat, hydrogen embrittlement, or a low service temperature. A flat break with a smooth beach-marked region and a rough final zone is fatigue, not static overload at all.</p>`,
    },
    {
      id: "stress-analysis-qa04",
      q: `<p>What is a stress concentration factor, what does it depend on, and when do you actually need to apply it?</p>`,
      a: `<p>K<sub>t</sub> is the ratio of the peak <em>elastic</em> stress at a geometric feature to a defined nominal stress: &sigma;<sub>max</sub> = K<sub>t</sub>&sigma;<sub>nom</sub>. It falls out of elasticity theory, so it depends only on <strong>geometry</strong>: the ratio of feature radius to section size, and the ratio of section sizes. Material, load magnitude and units do not enter, so a steel and an aluminium bracket of identical shape share a K<sub>t</sub>. Typical values run 3 for a small hole in a wide plate, 1.5&ndash;3 for shaft shoulders depending on r/d, 2&ndash;4 for a keyway, higher for a sharp groove.</p>
<p>Always state the nominal stress it belongs to. Hole and groove charts are net-section based; shaft shoulder charts use the small diameter. Applying a net-section K<sub>t</sub> to a gross-section stress is a silent under-prediction.</p>
<p>It matters under any <strong>cyclic</strong> loading, because fatigue cracks initiate at the local peak, and there you use K<sub>f</sub> = 1 + q(K<sub>t</sub>&minus;1). It matters for <strong>brittle</strong> materials, at low temperature, and under high constraint. It matters much less for <strong>static</strong> loading of a <strong>ductile</strong> material, where the notch root yields locally and hands load to neighbouring fibres, so capacity is set by the net section rather than by first yield at one fibre.</p>
<p>The design lever is nearly always the local radius. Going from r/d = 0.02 to 0.10 typically cuts K<sub>t</sub> by a third at zero part cost.</p>`,
    },
    {
      id: "stress-analysis-qa05",
      q: `<p>Your FEA shows 900 MPa at a corner on a part with 250 MPa yield strength. How do you decide whether that is real?</p>`,
      a: `<p>First question: <strong>what is the geometry at that node?</strong> A perfectly sharp re-entrant corner in the CAD makes the linear-elastic solution singular there, theoretically infinite. The solver returns whatever the smallest element averages, so the number describes the mesh, not the part.</p>
<p>Second: <strong>refine and watch the trend.</strong> A genuine concentration converges: 470, 610, 640, 645 MPa. A singularity climbs indefinitely: 470, 640, 900, 1300 MPa. Ten minutes settles the argument. Other tells are a hot spot one or two elements wide, a peak sitting exactly at a point load or a single-node constraint, or one at the edge of a bonded contact.</p>
<p>Third: <strong>get a usable number another way.</strong> Model the fillet radius the shop will actually leave and put three or four elements through the arc. Or cut a section, extract the section forces, compute a nominal stress by hand and multiply by a handbook K<sub>t</sub>. For welds, use a mesh-insensitive structural-stress or hot-spot extrapolation method.</p>
<p>Then answer the design question. A ductile, statically loaded part tolerates local yielding at a small corner and the net section governs. A cyclically loaded or brittle part has its failure origin right there and needs a real radius. What you never do is report a singular stress as a stress.</p>`,
    },
    {
      id: "stress-analysis-qa06",
      q: `<p>How do you combine stresses from axial load, bending, and torsion at a single point?</p>`,
      a: `<p>Superposition applies to <strong>components in a common frame</strong>, never to magnitudes. Pick the critical point, usually the outer surface where bending and torsion both peak. Set up a local x&ndash;y frame with x along the member axis. Then add component by component.</p>
<p>Axial gives &sigma;<sub>x</sub> = P/A everywhere on the section. Bending gives &sigma;<sub>x</sub> = My/I, which adds to the axial stress on the tension face and subtracts on the compression face, so check both: the compression face may govern buckling or a brittle criterion differently. Torsion gives &tau;<sub>xy</sub> = Tr/J, uniform around a circular surface. Transverse shear VQ/(It) is zero at the outer fibre and maximum at the neutral axis, so it rarely stacks with peak bending, though a short stubby member deserves a check at the neutral axis too.</p>
<p>With &sigma;<sub>x</sub>, &sigma;<sub>y</sub> and &tau;<sub>xy</sub> at one point, transform to &sigma;<sub>1,2</sub> = C &plusmn; R. Only then hand the principal stresses to a failure criterion.</p>
<p>Two things go wrong most often. Components get evaluated at different physical points, typically peak bending combined with peak transverse shear. And load cases get combined that are really separate design cases rather than simultaneous ones.</p>`,
    },
    {
      id: "stress-analysis-qa07",
      q: `<p>Where do the maximum-shear planes lie relative to the principal planes, and why does that matter in practice?</p>`,
      a: `<p>Exactly <strong>45&deg;</strong> away in physical space, which is 90&deg; on Mohr&rsquo;s circle, since the top of the circle is a quarter turn from the &sigma;-axis crossing. On those planes the shear is &tau;<sub>max</sub> = (&sigma;<sub>1</sub>&minus;&sigma;<sub>2</sub>)/2 and the normal stress is the <em>average</em> (&sigma;<sub>1</sub>+&sigma;<sub>2</sub>)/2, not zero. On the principal planes the shear is exactly zero, which is the definition.</p>
<p>Ductile metals yield by shear, so plastic flow shows up on those 45&deg; planes. A mild-steel tensile coupon gives L&uuml;ders bands and a cup-and-cone shear lip at 45&deg;. A punched hole shears on the plane of maximum shear. A ductile shaft in torsion breaks flat, because in pure shear the max-shear planes <em>are</em> the transverse and longitudinal planes. Brittle materials fail normal to &sigma;<sub>1</sub> and take the other set: the 45&deg; torsion helix, the flat transverse tensile break.</p>
<p>It also fixes the numbers you carry around. In uniaxial tension &tau;<sub>max</sub> = &sigma;/2, so a ductile material yields in pure shear at roughly half its tensile yield, 0.5 by Tresca and 0.577 by von Mises. And in plane stress keep &sigma;<sub>3</sub> = 0 in view: when both in-plane principals share a sign, the governing max-shear plane cuts through the thickness rather than lying in the plane you drew.</p>`,
    },
    {
      id: "stress-analysis-qa08",
      q: `<p>Where does residual stress come from, how does it combine with service stress, and how would you use it deliberately?</p>`,
      a: `<p>Residual stress is stress locked into a part with no external load, produced by any process that makes one region deform permanently relative to another. Welding leaves the weld metal shrinking against cold plate and ending up near yield in tension. Quenching transforms and contracts the surface first. Machining and grinding cause surface plastic flow, tensile if the tool is dull or the feed aggressive. Forming, straightening, shot peening and cold-rolling all do it too.</p>
<p>It <strong>adds algebraically</strong> to applied stress at the same point in the same direction, and it always <strong>self-equilibrates</strong> over the section, so tension somewhere requires compression elsewhere. A weld toe can sit at 200&ndash;300 MPa of tension before any service load arrives, which is why weld fatigue curves are given independent of mean stress: the residual field already dominates the R-ratio.</p>
<p>Used deliberately it is close to free strength. Shot peening, cold-rolled fillets, autofrettaged gun barrels and hydraulic cylinders, and case hardening all put compression exactly where fatigue cracks start. A few hundred MPa of compression a few tenths of a millimetre deep shifts the applied cycle down, cutting mean and peak tensile stress without touching geometry or K<sub>t</sub>. Typical fatigue-life gains run two to five times on springs, gears and shaft fillets.</p>
<p>The limits are worth knowing. The benefit is thin, so it does nothing for subsurface or bulk-driven failures and can push the initiation site below the layer. It relaxes with heat or heavy overload. And it does essentially nothing for static ductile strength, since first yield redistributes it away.</p>`,
    },
    {
      id: "stress-analysis-qa09",
      q: `<p>Why must &tau;<sub>xy</sub> equal &tau;<sub>yx</sub>, and what does the shear sign convention actually mean?</p>`,
      a: `<p>Take moments about the centre of an infinitesimal element of thickness t and sides dx, dy. The shear on the x-faces forms a couple &tau;<sub>xy</sub>(dy&middot;t)dx, and the pair on the y-faces forms the opposing couple &tau;<sub>yx</sub>(dx&middot;t)dy. Moment equilibrium makes them cancel, so &tau;<sub>xy</sub> = &tau;<sub>yx</sub>. The alternative is an element carrying a net moment with vanishing rotational inertia, which means infinite angular acceleration. Hence a symmetric stress tensor with six independent components in 3D, not nine.</p>
<p>On convention: in &tau;<sub>xy</sub> the first subscript names the face by its outward normal and the second names the direction the stress acts. Positive &tau;<sub>xy</sub> acts along +y on the +x face and along &minus;y on the &minus;x face, so the four arrows on a positive element run head to tail around two opposite corners. Normal stress is positive in tension.</p>
<p>Complementary shear is why transverse shear in a beam produces longitudinal shear. That is what makes a stack of unglued planks slide, and why glue lines and web-to-flange welds are sized for VQ/It. It is also why a keyway or a bonded joint sees shear on planes you never loaded directly. If a post-processor reports &tau;<sub>xy</sub> &ne; &tau;<sub>yx</sub> at a point in a converged static run, suspect the coordinate frame or the extraction rather than the physics.</p>`,
    },
    {
      id: "stress-analysis-qa10",
      q: `<p>An interviewer gives you &sigma;<sub>x</sub>, &sigma;<sub>y</sub>, &tau;<sub>xy</sub> and a whiteboard. What do you do in the next two minutes?</p>`,
      a: `<p>Talk while drawing. 1) <strong>Sketch the stress element</strong> with the given components and their signs. Ten seconds, and it prevents sign errors later. 2) <strong>Compute C and R</strong>: C = (&sigma;<sub>x</sub>+&sigma;<sub>y</sub>)/2, R = &radic;{[(&sigma;<sub>x</sub>&minus;&sigma;<sub>y</sub>)/2]<sup>2</sup> + &tau;<sub>xy</sub><sup>2</sup>}. 3) <strong>Sketch the circle</strong> to enough scale to see whether &sigma;<sub>2</sub> is compressive. 4) <strong>Write &sigma;<sub>1</sub> = C+R, &sigma;<sub>2</sub> = C&minus;R, &tau;<sub>max,in-plane</sub> = R</strong>. 5) <strong>Add &sigma;<sub>3</sub> = 0</strong> if it is plane stress, order all three, and give the absolute maximum shear as (&sigma;<sub>max</sub>&minus;&sigma;<sub>min</sub>)/2. 6) <strong>Orientation</strong>: tan2&theta;<sub>p</sub> = 2&tau;<sub>xy</sub>/(&sigma;<sub>x</sub>&minus;&sigma;<sub>y</sub>), then halve it, saying &ldquo;2&theta; on the circle, &theta; on the part&rdquo;.</p>
<p>Two checks cost nothing. &sigma;<sub>1</sub>+&sigma;<sub>2</sub> must equal &sigma;<sub>x</sub>+&sigma;<sub>y</sub>, and &sigma;<sub>1</sub> must be at least as large as the bigger of &sigma;<sub>x</sub> and &sigma;<sub>y</sub>.</p>
<p>Then close the loop. Hand the principal stresses to the right criterion, von Mises for ductile and maximum normal stress for brittle, and mention any stress concentration or residual stress at that location. Organising the problem this way is what gets scored, not the arithmetic.</p>`,
    },
  ],
};

export default content;
