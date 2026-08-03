import type { Question } from "../types";

// Additional question bank for this topic (merged after the base questions
// in content/index.ts). Authored per-question, no generated templates.
//
// SVG id prefixes: th1- … th13-. Never use HTML <sub>/<sup> inside <text>;
// SVG is a different namespace and the label silently renders as nothing.
// Use <tspan baseline-shift="sub" font-size="9"> instead.

// --- th1: control volume energy balance -----------------------------------
const figCV = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="th1-flow" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#334155"/></marker>
    <marker id="th1-work" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <rect x="152" y="52" width="176" height="132" fill="none" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="7 5"/>
  <text x="240" y="45" text-anchor="middle" fill="#1d4ed8" font-size="12" font-weight="600">control volume (steady state)</text>
  <rect x="180" y="96" width="120" height="52" rx="5" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <text x="240" y="127" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">compressor</text>
  <line x1="30" y1="122" x2="176" y2="122" stroke="#334155" stroke-width="2" marker-end="url(#th1-flow)"/>
  <line x1="304" y1="122" x2="432" y2="122" stroke="#334155" stroke-width="2" marker-end="url(#th1-flow)"/>
  <text x="26" y="106" fill="#334155" font-size="12">1&#160; h<tspan baseline-shift="sub" font-size="9">1</tspan> = 300 kJ/kg</text>
  <text x="26" y="145" fill="#64748b" font-size="12">V<tspan baseline-shift="sub" font-size="9">1</tspan> = 20 m/s</text>
  <text x="336" y="106" fill="#334155" font-size="12">2&#160; h<tspan baseline-shift="sub" font-size="9">2</tspan> = 500 kJ/kg</text>
  <text x="336" y="145" fill="#64748b" font-size="12">V<tspan baseline-shift="sub" font-size="9">2</tspan> = 120 m/s</text>
  <line x1="240" y1="212" x2="240" y2="154" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#th1-work)"/>
  <text x="252" y="200" fill="#1d4ed8" font-weight="600" font-size="12">w in</text>
  <text x="240" y="76" text-anchor="middle" fill="#dc2626" font-size="12">q = 0 (insulated)</text>
  <text x="230" y="234" text-anchor="middle" fill="#64748b" font-size="12">w in = (h<tspan baseline-shift="sub" font-size="9">2</tspan> &#8722; h<tspan baseline-shift="sub" font-size="9">1</tspan>) + (V<tspan baseline-shift="super" font-size="9">2</tspan><tspan baseline-shift="sub" font-size="9">2</tspan> &#8722; V<tspan baseline-shift="super" font-size="9">2</tspan><tspan baseline-shift="sub" font-size="9">1</tspan>)/2</text>
</svg>`;

// --- th2: adiabatic nozzle control volume ---------------------------------
const figNozzle = `<svg viewBox="0 0 460 230" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="th2-slow" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#334155"/></marker>
    <marker id="th2-fast" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <path d="M152,58 C230,58 268,96 330,100 L330,132 C268,136 230,174 152,174 Z" fill="#dbeafe"/>
  <path d="M152,58 C230,58 268,96 330,100" fill="none" stroke="#334155" stroke-width="2.5"/>
  <path d="M152,174 C230,174 268,136 330,132" fill="none" stroke="#334155" stroke-width="2.5"/>
  <rect x="138" y="44" width="206" height="144" fill="none" stroke="#1d4ed8" stroke-width="1.3" stroke-dasharray="7 5"/>
  <text x="241" y="36" text-anchor="middle" fill="#1d4ed8" font-size="12" font-weight="600">adiabatic, no shaft work</text>
  <line x1="168" y1="116" x2="204" y2="116" stroke="#334155" stroke-width="2" marker-end="url(#th2-slow)"/>
  <line x1="348" y1="116" x2="434" y2="116" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#th2-fast)"/>
  <text x="14" y="98" fill="#334155" font-size="12">1&#160; 3 MPa, 350 &#176;C</text>
  <text x="14" y="118" fill="#334155" font-size="12">h<tspan baseline-shift="sub" font-size="9">1</tspan> = 3115 kJ/kg</text>
  <text x="14" y="138" fill="#64748b" font-size="12">V<tspan baseline-shift="sub" font-size="9">1</tspan> &#8776; 0</text>
  <text x="352" y="88" fill="#334155" font-size="12">2&#160; 1.5 MPa</text>
  <text x="352" y="150" fill="#334155" font-size="12">h<tspan baseline-shift="sub" font-size="9">2</tspan> = 2942</text>
  <text x="352" y="170" fill="#1d4ed8" font-size="12" font-weight="600">V<tspan baseline-shift="sub" font-size="9">2</tspan> = ?</text>
  <text x="230" y="212" text-anchor="middle" fill="#64748b" font-size="12">enthalpy drop buys kinetic energy: V<tspan baseline-shift="super" font-size="9">2</tspan><tspan baseline-shift="sub" font-size="9">2</tspan>/2 = h<tspan baseline-shift="sub" font-size="9">1</tspan> &#8722; h<tspan baseline-shift="sub" font-size="9">2</tspan></text>
</svg>`;

// --- th3: counterflow oil cooler + temperature profile --------------------
const figHX = `<svg viewBox="0 0 460 278" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="th3-hot" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
    <marker id="th3-cold" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#1d4ed8"/></marker>
    <marker id="th3-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <rect x="86" y="28" width="288" height="74" fill="#fee2e2" stroke="#334155" stroke-width="1.5"/>
  <rect x="86" y="58" width="288" height="22" fill="#dbeafe" stroke="#334155" stroke-width="1.2"/>
  <line x1="120" y1="44" x2="200" y2="44" stroke="#dc2626" stroke-width="2.5" marker-end="url(#th3-hot)"/>
  <line x1="250" y1="44" x2="330" y2="44" stroke="#dc2626" stroke-width="2.5" marker-end="url(#th3-hot)"/>
  <line x1="330" y1="69" x2="250" y2="69" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#th3-cold)"/>
  <line x1="200" y1="69" x2="120" y2="69" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#th3-cold)"/>
  <text x="80" y="44" text-anchor="end" fill="#dc2626" font-size="12" font-weight="600">oil 90 &#176;C</text>
  <text x="380" y="44" fill="#dc2626" font-size="12" font-weight="600">60 &#176;C</text>
  <text x="80" y="74" text-anchor="end" fill="#1d4ed8" font-size="12" font-weight="600">water ?</text>
  <text x="380" y="74" fill="#1d4ed8" font-size="12" font-weight="600">30 &#176;C</text>
  <text x="230" y="120" text-anchor="middle" fill="#64748b" font-size="12">counterflow shell-and-tube oil cooler</text>
  <line x1="86" y1="252" x2="416" y2="252" stroke="#64748b" stroke-width="1.3" marker-end="url(#th3-ax)"/>
  <line x1="86" y1="252" x2="86" y2="140" stroke="#64748b" stroke-width="1.3" marker-end="url(#th3-ax)"/>
  <text x="252" y="270" text-anchor="middle" fill="#64748b" font-size="12">position along exchanger</text>
  <text x="76" y="150" text-anchor="end" fill="#64748b" font-size="12">T</text>
  <line x1="95" y1="159" x2="390" y2="204" stroke="#dc2626" stroke-width="2.5"/>
  <line x1="95" y1="204" x2="390" y2="245" stroke="#1d4ed8" stroke-width="2.5"/>
  <line x1="86" y1="204" x2="404" y2="204" stroke="#64748b" stroke-width="1" stroke-dasharray="4 4"/>
  <text x="428" y="208" text-anchor="end" fill="#64748b" font-size="11">60 &#176;C</text>
  <text x="104" y="150" fill="#dc2626" font-size="12">oil</text>
  <text x="104" y="226" fill="#1d4ed8" font-size="12">water</text>
  <text x="404" y="164" text-anchor="end" fill="#334155" font-size="11">water out overtakes oil out</text>
</svg>`;

// --- th4: real vs isentropic compression on T-s ---------------------------
const figIsenComp = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="th4-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
    <marker id="th4-id" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#1d4ed8"/></marker>
    <marker id="th4-ac" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
  </defs>
  <line x1="62" y1="212" x2="436" y2="212" stroke="#64748b" stroke-width="1.4" marker-end="url(#th4-ax)"/>
  <line x1="62" y1="212" x2="62" y2="32" stroke="#64748b" stroke-width="1.4" marker-end="url(#th4-ax)"/>
  <text x="440" y="228" text-anchor="end" fill="#64748b" font-style="italic">s</text>
  <text x="52" y="40" text-anchor="middle" fill="#64748b" font-style="italic">T</text>
  <path d="M92,190 C170,183 280,160 410,132" fill="none" stroke="#64748b" stroke-width="1.4"/>
  <path d="M92,110 C160,100 270,72 380,42" fill="none" stroke="#64748b" stroke-width="1.4"/>
  <text x="436" y="124" text-anchor="end" fill="#64748b" font-size="11">p<tspan baseline-shift="sub" font-size="9">1</tspan> = 100 kPa</text>
  <text x="436" y="38" text-anchor="end" fill="#64748b" font-size="11">p<tspan baseline-shift="sub" font-size="9">2</tspan> = 600 kPa</text>
  <line x1="140" y1="186" x2="140" y2="108" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#th4-id)"/>
  <line x1="140" y1="186" x2="214" y2="90" stroke="#dc2626" stroke-width="2.5" marker-end="url(#th4-ac)"/>
  <circle cx="140" cy="186" r="4" fill="#334155"/>
  <circle cx="140" cy="103" r="4" fill="#1d4ed8"/>
  <circle cx="217" cy="84" r="4" fill="#dc2626"/>
  <text x="130" y="203" text-anchor="middle" fill="#334155" font-weight="600">1</text>
  <text x="152" y="122" fill="#1d4ed8" font-size="12">2s&#160; 501 K</text>
  <text x="226" y="80" fill="#dc2626" font-size="12">2a&#160; 557 K</text>
  <text x="82" y="180" fill="#334155" font-size="12">300 K</text>
  <line x1="140" y1="228" x2="217" y2="228" stroke="#64748b" stroke-width="1"/>
  <line x1="140" y1="223" x2="140" y2="233" stroke="#64748b" stroke-width="1"/>
  <line x1="217" y1="223" x2="217" y2="233" stroke="#64748b" stroke-width="1"/>
  <text x="228" y="232" fill="#64748b" font-size="11">s generated by the real compressor</text>
</svg>`;

// --- th5: two-stage compression with intercooling -------------------------
const figIntercool = `<svg viewBox="0 0 460 272" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="th5-flow" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#334155"/></marker>
    <marker id="th5-heat" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <polygon points="72,44 120,32 120,102 72,90" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <text x="96" y="72" text-anchor="middle" fill="#334155" font-size="11" font-weight="600">LP</text>
  <rect x="184" y="46" width="86" height="44" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <text x="227" y="73" text-anchor="middle" fill="#334155" font-size="11" font-weight="600">intercooler</text>
  <line x1="227" y1="40" x2="227" y2="14" stroke="#dc2626" stroke-width="2.5" marker-end="url(#th5-heat)"/>
  <text x="238" y="24" fill="#dc2626" font-size="11" font-weight="600">heat out</text>
  <polygon points="330,44 378,32 378,102 330,90" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <text x="354" y="72" text-anchor="middle" fill="#334155" font-size="11" font-weight="600">HP</text>
  <line x1="24" y1="67" x2="68" y2="67" stroke="#334155" stroke-width="2" marker-end="url(#th5-flow)"/>
  <line x1="120" y1="67" x2="180" y2="67" stroke="#334155" stroke-width="2" marker-end="url(#th5-flow)"/>
  <line x1="270" y1="67" x2="326" y2="67" stroke="#334155" stroke-width="2" marker-end="url(#th5-flow)"/>
  <line x1="378" y1="67" x2="428" y2="67" stroke="#334155" stroke-width="2" marker-end="url(#th5-flow)"/>
  <text x="22" y="112" fill="#64748b" font-size="11">100 kPa</text>
  <text x="22" y="126" fill="#64748b" font-size="11">300 K</text>
  <text x="130" y="112" fill="#64748b" font-size="11">265 kPa</text>
  <text x="130" y="126" fill="#64748b" font-size="11">396 K</text>
  <text x="278" y="112" fill="#64748b" font-size="11">265 kPa</text>
  <text x="278" y="126" fill="#64748b" font-size="11">300 K</text>
  <text x="386" y="112" fill="#64748b" font-size="11">700 kPa</text>
  <text x="386" y="126" fill="#64748b" font-size="11">396 K</text>
  <text x="16" y="160" fill="#334155" font-size="12" font-weight="600">compressor work, kJ per kg of air</text>
  <rect x="16" y="172" width="290" height="18" fill="#fee2e2" stroke="#dc2626" stroke-width="1.2"/>
  <text x="314" y="186" fill="#334155" font-size="11">224&#160; single stage</text>
  <rect x="16" y="200" width="250" height="18" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.2"/>
  <text x="274" y="214" fill="#334155" font-size="11">193&#160; two stages, intercooled</text>
  <rect x="16" y="228" width="217" height="18" fill="#e2e8f0" stroke="#64748b" stroke-width="1.2"/>
  <text x="241" y="242" fill="#334155" font-size="11">168&#160; isothermal (unreachable)</text>
  <text x="16" y="264" fill="#64748b" font-size="11">intercooling recovers about 55% of the gap to the isothermal ideal</text>
</svg>`;

// --- th6: P-v dome with a quality point and the ideal-gas trap ------------
const figDome = `<svg viewBox="0 0 460 258" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="th6-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <line x1="64" y1="226" x2="436" y2="226" stroke="#64748b" stroke-width="1.4" marker-end="url(#th6-ax)"/>
  <line x1="64" y1="226" x2="64" y2="34" stroke="#64748b" stroke-width="1.4" marker-end="url(#th6-ax)"/>
  <text x="432" y="244" text-anchor="end" fill="#64748b" font-size="12">v&#160;(m&#179;/kg)</text>
  <text x="54" y="42" text-anchor="middle" fill="#64748b" font-size="12">p</text>
  <path d="M105,205 C120,160 145,95 170,55" fill="none" stroke="#334155" stroke-width="2"/>
  <path d="M170,55 C215,105 300,170 420,205" fill="none" stroke="#334155" stroke-width="2"/>
  <circle cx="170" cy="55" r="4" fill="#334155"/>
  <text x="176" y="50" fill="#334155" font-size="11">critical point</text>
  <path d="M150,60 C200,96 280,140 425,182" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="436" y="84" text-anchor="end" fill="#dc2626" font-size="11">ideal-gas isotherm:</text>
  <text x="436" y="100" text-anchor="end" fill="#dc2626" font-size="11">pv = RT reads 1190 kPa at this v</text>
  <line x1="126" y1="149" x2="297" y2="149" stroke="#1d4ed8" stroke-width="2.5"/>
  <circle cx="219" cy="149" r="5" fill="#1d4ed8"/>
  <text x="219" y="170" text-anchor="middle" fill="#1d4ed8" font-size="12" font-weight="600">v = 0.020, x = 0.55</text>
  <text x="66" y="146" fill="#1d4ed8" font-size="11">572 kPa</text>
  <text x="102" y="196" text-anchor="end" fill="#64748b" font-size="11">v<tspan baseline-shift="sub" font-size="9">f</tspan></text>
  <text x="310" y="196" fill="#64748b" font-size="11">v<tspan baseline-shift="sub" font-size="9">g</tspan></text>
  <text x="150" y="215" fill="#64748b" font-size="11">20 &#176;C saturation line &#8212; pressure is fixed by T alone</text>
</svg>`;

// --- th7: Rankine cycle on T-s -------------------------------------------
const figRankTs = `<svg viewBox="0 0 460 256" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="th7-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <line x1="62" y1="220" x2="436" y2="220" stroke="#64748b" stroke-width="1.4" marker-end="url(#th7-ax)"/>
  <line x1="62" y1="220" x2="62" y2="30" stroke="#64748b" stroke-width="1.4" marker-end="url(#th7-ax)"/>
  <text x="432" y="238" text-anchor="end" fill="#64748b" font-size="12">s&#160;(kJ/kg&#183;K)</text>
  <text x="52" y="38" text-anchor="middle" fill="#64748b" font-style="italic">T</text>
  <path d="M95,195 C130,150 175,95 215,75" fill="none" stroke="#334155" stroke-width="2"/>
  <path d="M215,75 C265,95 340,150 400,190" fill="none" stroke="#334155" stroke-width="2"/>
  <line x1="178" y1="100" x2="262" y2="100" stroke="#dc2626" stroke-width="2.5"/>
  <path d="M104,184 C130,150 158,116 178,100" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <path d="M262,100 C292,84 314,64 330,48" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <line x1="330" y1="48" x2="356" y2="184" stroke="#1d4ed8" stroke-width="2.5"/>
  <line x1="356" y1="184" x2="106" y2="184" stroke="#64748b" stroke-width="2.5"/>
  <line x1="104" y1="184" x2="106" y2="178" stroke="#1d4ed8" stroke-width="3"/>
  <circle cx="104" cy="184" r="4" fill="#334155"/>
  <circle cx="330" cy="48" r="4" fill="#334155"/>
  <circle cx="356" cy="184" r="4" fill="#334155"/>
  <text x="96" y="202" text-anchor="end" fill="#334155" font-weight="600">1</text>
  <text x="96" y="168" text-anchor="end" fill="#334155" font-weight="600">2</text>
  <text x="336" y="42" fill="#334155" font-weight="600">3</text>
  <text x="364" y="190" fill="#334155" font-weight="600">4</text>
  <text x="184" y="120" fill="#dc2626" font-size="11">8 MPa boiler, 295 &#176;C</text>
  <text x="300" y="46" text-anchor="end" fill="#dc2626" font-size="11">superheat to 500 &#176;C</text>
  <text x="150" y="202" fill="#64748b" font-size="11">10 kPa condenser, 46 &#176;C</text>
  <text x="366" y="128" fill="#1d4ed8" font-size="11">real</text>
  <text x="366" y="144" fill="#1d4ed8" font-size="11">turbine</text>
  <text x="230" y="248" text-anchor="middle" fill="#64748b" font-size="11">area under 2&#8211;3 is heat in; area under 4&#8211;1 is heat rejected</text>
</svg>`;

// --- th8: Rankine schematic paired with its T-s --------------------------
const figRankPair = `<svg viewBox="0 0 460 252" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="th8-flow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0L7,3.5L0,7z" fill="#334155"/></marker>
    <marker id="th8-ax" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <rect x="26" y="42" width="66" height="42" fill="#fee2e2" stroke="#334155" stroke-width="1.5"/>
  <text x="59" y="68" text-anchor="middle" fill="#334155" font-size="11" font-weight="600">boiler</text>
  <polygon points="150,40 194,30 194,96 150,86" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <text x="172" y="68" text-anchor="middle" fill="#334155" font-size="10" font-weight="600">turbine</text>
  <rect x="140" y="158" width="66" height="38" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <text x="173" y="182" text-anchor="middle" fill="#334155" font-size="10" font-weight="600">condenser</text>
  <circle cx="59" cy="177" r="18" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <text x="59" y="181" text-anchor="middle" fill="#334155" font-size="10" font-weight="600">pump</text>
  <line x1="92" y1="63" x2="146" y2="63" stroke="#334155" stroke-width="1.8" marker-end="url(#th8-flow)"/>
  <line x1="172" y1="100" x2="172" y2="154" stroke="#334155" stroke-width="1.8" marker-end="url(#th8-flow)"/>
  <line x1="140" y1="177" x2="81" y2="177" stroke="#334155" stroke-width="1.8" marker-end="url(#th8-flow)"/>
  <line x1="59" y1="157" x2="59" y2="88" stroke="#334155" stroke-width="1.8" marker-end="url(#th8-flow)"/>
  <text x="118" y="56" text-anchor="middle" fill="#1d4ed8" font-size="11" font-weight="600">3</text>
  <text x="182" y="130" fill="#1d4ed8" font-size="11" font-weight="600">4</text>
  <text x="110" y="192" text-anchor="middle" fill="#1d4ed8" font-size="11" font-weight="600">1</text>
  <text x="46" y="120" text-anchor="end" fill="#1d4ed8" font-size="11" font-weight="600">2</text>
  <text x="115" y="228" text-anchor="middle" fill="#64748b" font-size="11">4 MPa / 400 &#176;C in, 15 kPa out</text>
  <line x1="248" y1="200" x2="440" y2="200" stroke="#64748b" stroke-width="1.2" marker-end="url(#th8-ax)"/>
  <line x1="248" y1="200" x2="248" y2="32" stroke="#64748b" stroke-width="1.2" marker-end="url(#th8-ax)"/>
  <text x="436" y="216" text-anchor="end" fill="#64748b" font-size="11" font-style="italic">s</text>
  <text x="240" y="40" text-anchor="end" fill="#64748b" font-size="11" font-style="italic">T</text>
  <path d="M266,182 C288,146 314,104 338,88" fill="none" stroke="#334155" stroke-width="1.8"/>
  <path d="M338,88 C368,110 404,152 424,180" fill="none" stroke="#334155" stroke-width="1.8"/>
  <line x1="286" y1="108" x2="352" y2="108" stroke="#dc2626" stroke-width="2"/>
  <path d="M352,108 C368,96 380,80 390,64" fill="none" stroke="#dc2626" stroke-width="2"/>
  <line x1="390" y1="64" x2="404" y2="174" stroke="#1d4ed8" stroke-width="2"/>
  <line x1="404" y1="174" x2="272" y2="174" stroke="#64748b" stroke-width="2"/>
  <circle cx="390" cy="64" r="3.5" fill="#334155"/>
  <circle cx="404" cy="174" r="3.5" fill="#334155"/>
  <text x="378" y="58" text-anchor="end" fill="#334155" font-size="11" font-weight="600">3</text>
  <text x="410" y="168" fill="#334155" font-size="11" font-weight="600">4</text>
  <text x="266" y="196" fill="#64748b" font-size="11">state 4 sits inside the dome</text>
</svg>`;

// --- th9: ideal Brayton cycle on T-s -------------------------------------
const figBrayTs = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="th9-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <line x1="62" y1="216" x2="436" y2="216" stroke="#64748b" stroke-width="1.4" marker-end="url(#th9-ax)"/>
  <line x1="62" y1="216" x2="62" y2="30" stroke="#64748b" stroke-width="1.4" marker-end="url(#th9-ax)"/>
  <text x="432" y="234" text-anchor="end" fill="#64748b" font-size="12" font-style="italic">s</text>
  <text x="52" y="38" text-anchor="middle" fill="#64748b" font-style="italic">T</text>
  <path d="M95,200 C180,192 300,160 412,120" fill="none" stroke="#64748b" stroke-width="1.4"/>
  <path d="M95,118 C160,108 260,72 372,36" fill="none" stroke="#64748b" stroke-width="1.4"/>
  <text x="416" y="116" text-anchor="end" fill="#64748b" font-size="11">p<tspan baseline-shift="sub" font-size="9">1</tspan></text>
  <text x="376" y="32" text-anchor="end" fill="#64748b" font-size="11">p<tspan baseline-shift="sub" font-size="9">2</tspan> = 12 p<tspan baseline-shift="sub" font-size="9">1</tspan></text>
  <line x1="150" y1="196" x2="150" y2="110" stroke="#1d4ed8" stroke-width="2.5"/>
  <path d="M150,110 C200,96 260,72 310,50" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <line x1="310" y1="50" x2="310" y2="152" stroke="#1d4ed8" stroke-width="2.5"/>
  <path d="M310,152 C260,166 200,182 150,196" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <circle cx="150" cy="196" r="4" fill="#334155"/>
  <circle cx="150" cy="110" r="4" fill="#334155"/>
  <circle cx="310" cy="50" r="4" fill="#334155"/>
  <circle cx="310" cy="152" r="4" fill="#334155"/>
  <text x="140" y="212" text-anchor="middle" fill="#334155" font-weight="600">1</text>
  <text x="138" y="106" text-anchor="middle" fill="#334155" font-weight="600">2</text>
  <text x="318" y="46" fill="#334155" font-weight="600">3</text>
  <text x="318" y="164" fill="#334155" font-weight="600">4</text>
  <text x="84" y="196" text-anchor="end" fill="#64748b" font-size="11">300 K</text>
  <text x="224" y="66" text-anchor="middle" fill="#dc2626" font-size="11">q in (combustor)</text>
  <text x="230" y="192" text-anchor="middle" fill="#dc2626" font-size="11">q out (exhaust)</text>
  <text x="142" y="154" text-anchor="end" fill="#1d4ed8" font-size="11">w compressor</text>
  <text x="322" y="104" fill="#1d4ed8" font-size="11">w turbine</text>
</svg>`;

// --- th10: real Brayton with component efficiencies ----------------------
const figBrayReal = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="th10-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <line x1="62" y1="216" x2="436" y2="216" stroke="#64748b" stroke-width="1.4" marker-end="url(#th10-ax)"/>
  <line x1="62" y1="216" x2="62" y2="30" stroke="#64748b" stroke-width="1.4" marker-end="url(#th10-ax)"/>
  <text x="432" y="234" text-anchor="end" fill="#64748b" font-size="12" font-style="italic">s</text>
  <text x="52" y="38" text-anchor="middle" fill="#64748b" font-style="italic">T</text>
  <path d="M95,200 C180,192 300,160 412,120" fill="none" stroke="#64748b" stroke-width="1.4"/>
  <path d="M95,118 C160,108 260,72 372,36" fill="none" stroke="#64748b" stroke-width="1.4"/>
  <text x="416" y="116" text-anchor="end" fill="#64748b" font-size="11">p<tspan baseline-shift="sub" font-size="9">1</tspan></text>
  <text x="376" y="32" text-anchor="end" fill="#64748b" font-size="11">p<tspan baseline-shift="sub" font-size="9">2</tspan></text>
  <line x1="140" y1="198" x2="140" y2="112" stroke="#1d4ed8" stroke-width="1.6" stroke-dasharray="5 4"/>
  <line x1="140" y1="198" x2="186" y2="98" stroke="#dc2626" stroke-width="2.5"/>
  <line x1="300" y1="54" x2="300" y2="154" stroke="#1d4ed8" stroke-width="1.6" stroke-dasharray="5 4"/>
  <line x1="300" y1="54" x2="348" y2="140" stroke="#dc2626" stroke-width="2.5"/>
  <path d="M186,98 C230,80 268,64 300,54" fill="none" stroke="#64748b" stroke-width="2"/>
  <path d="M348,140 C280,158 200,180 140,198" fill="none" stroke="#64748b" stroke-width="2"/>
  <circle cx="140" cy="198" r="4" fill="#334155"/>
  <circle cx="186" cy="98" r="4" fill="#dc2626"/>
  <circle cx="300" cy="54" r="4" fill="#334155"/>
  <circle cx="348" cy="140" r="4" fill="#dc2626"/>
  <text x="130" y="214" text-anchor="middle" fill="#334155" font-weight="600">1&#160; 300 K</text>
  <text x="192" y="94" fill="#dc2626" font-size="12">2a&#160; 665 K</text>
  <text x="128" y="108" text-anchor="end" fill="#1d4ed8" font-size="11">2s</text>
  <text x="294" y="50" text-anchor="end" fill="#334155" font-weight="600">3&#160; 1500 K</text>
  <text x="356" y="154" fill="#dc2626" font-size="12">4a&#160; 814 K</text>
  <text x="292" y="168" text-anchor="end" fill="#1d4ed8" font-size="11">4s</text>
  <text x="230" y="240" text-anchor="middle" fill="#64748b" font-size="11">both real paths drift right: entropy is generated, not conserved</text>
</svg>`;

// --- th11: combined cycle energy flow ------------------------------------
const figCombined = `<svg viewBox="0 0 460 244" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="th11-heat" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="th11-work" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <rect x="106" y="34" width="180" height="52" fill="#fee2e2" stroke="#334155" stroke-width="1.5"/>
  <text x="196" y="56" text-anchor="middle" fill="#334155" font-size="12" font-weight="600">gas turbine (Brayton)</text>
  <text x="196" y="74" text-anchor="middle" fill="#64748b" font-size="11">&#951; = 40%, exhaust at 850 K</text>
  <rect x="106" y="146" width="180" height="52" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <text x="196" y="168" text-anchor="middle" fill="#334155" font-size="12" font-weight="600">steam bottoming (Rankine)</text>
  <text x="196" y="186" text-anchor="middle" fill="#64748b" font-size="11">&#951; = 35% of what it is fed</text>
  <line x1="22" y1="60" x2="102" y2="60" stroke="#dc2626" stroke-width="2.5" marker-end="url(#th11-heat)"/>
  <text x="22" y="46" fill="#dc2626" font-size="12" font-weight="600">fuel 100</text>
  <line x1="290" y1="60" x2="404" y2="60" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#th11-work)"/>
  <text x="408" y="64" fill="#1d4ed8" font-size="12" font-weight="600">40</text>
  <line x1="196" y1="90" x2="196" y2="142" stroke="#dc2626" stroke-width="2.5" marker-end="url(#th11-heat)"/>
  <text x="206" y="122" fill="#dc2626" font-size="12" font-weight="600">60 in the exhaust</text>
  <line x1="290" y1="172" x2="404" y2="172" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#th11-work)"/>
  <text x="408" y="176" fill="#1d4ed8" font-size="12" font-weight="600">21</text>
  <line x1="196" y1="202" x2="196" y2="228" stroke="#dc2626" stroke-width="2.5" marker-end="url(#th11-heat)"/>
  <text x="206" y="224" fill="#dc2626" font-size="12">39 to the cooling tower</text>
  <text x="22" y="176" fill="#334155" font-size="12" font-weight="600">total work</text>
  <text x="22" y="194" fill="#334155" font-size="12" font-weight="600">40 + 21 = 61</text>
</svg>`;

// --- th12: ideal Otto cycle on p-v ---------------------------------------
const figOtto = `<svg viewBox="0 0 460 252" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="th12-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <line x1="66" y1="218" x2="436" y2="218" stroke="#64748b" stroke-width="1.4" marker-end="url(#th12-ax)"/>
  <line x1="66" y1="218" x2="66" y2="30" stroke="#64748b" stroke-width="1.4" marker-end="url(#th12-ax)"/>
  <text x="432" y="236" text-anchor="end" fill="#64748b" font-size="12" font-style="italic">V</text>
  <text x="56" y="38" text-anchor="middle" fill="#64748b" font-style="italic">p</text>
  <path d="M350,195 C258,188 152,166 110,120" fill="none" stroke="#334155" stroke-width="2.5"/>
  <line x1="110" y1="120" x2="110" y2="50" stroke="#dc2626" stroke-width="2.5"/>
  <path d="M110,50 C152,96 250,132 350,150" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <line x1="350" y1="150" x2="350" y2="195" stroke="#dc2626" stroke-width="2.5"/>
  <circle cx="350" cy="195" r="4" fill="#334155"/>
  <circle cx="110" cy="120" r="4" fill="#334155"/>
  <circle cx="110" cy="50" r="4" fill="#334155"/>
  <circle cx="350" cy="150" r="4" fill="#334155"/>
  <text x="358" y="204" fill="#334155" font-weight="600">1</text>
  <text x="98" y="118" text-anchor="end" fill="#334155" font-weight="600">2</text>
  <text x="98" y="50" text-anchor="end" fill="#334155" font-weight="600">3</text>
  <text x="358" y="148" fill="#334155" font-weight="600">4</text>
  <text x="126" y="42" fill="#dc2626" font-size="11">spark: heat in at constant V</text>
  <text x="140" y="212" fill="#334155" font-size="11">isentropic compression</text>
  <text x="430" y="100" text-anchor="end" fill="#1d4ed8" font-size="11">isentropic expansion (power stroke)</text>
  <text x="360" y="176" fill="#dc2626" font-size="11">blowdown</text>
  <line x1="110" y1="232" x2="350" y2="232" stroke="#64748b" stroke-width="1"/>
  <line x1="110" y1="227" x2="110" y2="237" stroke="#64748b" stroke-width="1"/>
  <line x1="350" y1="227" x2="350" y2="237" stroke="#64748b" stroke-width="1"/>
  <text x="230" y="246" text-anchor="middle" fill="#64748b" font-size="11">r = V<tspan baseline-shift="sub" font-size="9">1</tspan>/V<tspan baseline-shift="sub" font-size="9">2</tspan> = 10</text>
  <text x="110" y="248" text-anchor="middle" fill="#64748b" font-size="11">TDC</text>
  <text x="350" y="248" text-anchor="middle" fill="#64748b" font-size="11">BDC</text>
</svg>`;

// --- th13: vapor-compression cycle on p-h --------------------------------
const figPh = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="th13-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <line x1="66" y1="218" x2="436" y2="218" stroke="#64748b" stroke-width="1.4" marker-end="url(#th13-ax)"/>
  <line x1="66" y1="218" x2="66" y2="30" stroke="#64748b" stroke-width="1.4" marker-end="url(#th13-ax)"/>
  <text x="432" y="236" text-anchor="end" fill="#64748b" font-size="12">h&#160;(kJ/kg)</text>
  <text x="56" y="38" text-anchor="middle" fill="#64748b" font-size="12">p</text>
  <path d="M92,201 C106,172 128,142 165,112 C232,88 312,72 382,58" fill="none" stroke="#334155" stroke-width="2"/>
  <path d="M382,58 C340,76 300,100 284,128 C272,155 265,180 261,201" fill="none" stroke="#334155" stroke-width="2"/>
  <circle cx="382" cy="58" r="3.5" fill="#334155"/>
  <line x1="146" y1="201" x2="261" y2="201" stroke="#1d4ed8" stroke-width="2.5"/>
  <line x1="261" y1="201" x2="298" y2="128" stroke="#dc2626" stroke-width="2.5"/>
  <line x1="298" y1="128" x2="146" y2="128" stroke="#dc2626" stroke-width="2.5"/>
  <line x1="146" y1="128" x2="146" y2="201" stroke="#64748b" stroke-width="2.5"/>
  <circle cx="261" cy="201" r="4" fill="#334155"/>
  <circle cx="298" cy="128" r="4" fill="#334155"/>
  <circle cx="146" cy="128" r="4" fill="#334155"/>
  <circle cx="146" cy="201" r="4" fill="#334155"/>
  <text x="266" y="216" fill="#334155" font-weight="600">1</text>
  <text x="304" y="122" fill="#334155" font-weight="600">2</text>
  <text x="140" y="120" text-anchor="end" fill="#334155" font-weight="600">3</text>
  <text x="140" y="214" text-anchor="end" fill="#334155" font-weight="600">4</text>
  <text x="200" y="194" text-anchor="middle" fill="#1d4ed8" font-size="11">evaporator, 140 kPa</text>
  <text x="222" y="121" text-anchor="middle" fill="#dc2626" font-size="11">condenser, 800 kPa</text>
  <text x="316" y="168" fill="#dc2626" font-size="11">compressor</text>
  <text x="156" y="168" fill="#64748b" font-size="11">valve: h fixed</text>
  <text x="146" y="240" text-anchor="middle" fill="#64748b" font-size="11">95.5</text>
  <text x="261" y="240" text-anchor="middle" fill="#64748b" font-size="11">239.2</text>
  <text x="300" y="240" text-anchor="middle" fill="#64748b" font-size="11">284.5</text>
</svg>`;

const extra: Question[] = [
  // ---- first law, closed systems, properties ----------------------------
  {
    id: "thermodynamics-q15",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A gas is taken from state 1 to state 2 twice: once slowly along an isothermal path with a heat bath, once rapidly along an insulated path plus a stir-bar. The end states are identical. Which pair of quantities must match between the two runs?</p>`,
    choices: [
      "The heat transferred and the boundary work, since both paths link the same two states",
      "The change in internal energy and the change in entropy, because both are properties",
      "The boundary work alone, because pressure and volume are fixed at the end states",
      "The pressure-versus-time history, because the end states pin down the whole path",
    ],
    answer: 1,
    explanation: `<p>Internal energy and entropy are <strong>state properties</strong>: their changes depend only on where you start and where you finish, never on the route. Heat and work are <strong>path functions</strong>. The isothermal run exchanges a large Q with the bath and does a large W, while the insulated run has Q = 0 and gets its energy from stirring. Both satisfy &Delta;U = Q &minus; W with the <em>same</em> &Delta;U but wildly different Q and W.</p>
<p>The practical consequence, and the reason it gets asked: you may never write &Delta;Q or &Delta;W. There is no "amount of heat stored in the gas" to take a difference of. Say "Q for this process", not "the change in heat". The giveaway that someone has this backwards is a solution that tries to look up heat in a property table.</p>`,
  },
  {
    id: "thermodynamics-q16",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A piston&#8211;cylinder expands at constant pressure p = 200 kPa from V<sub>1</sub> = 0.050 m<sup>3</sup> to V<sub>2</sub> = 0.120 m<sup>3</sup>. What boundary work does the gas do?</p>`,
    answer: 14,
    unit: "kJ",
    explanation: `<p>Constant-pressure boundary work is the rectangle under the p&#8211;V path:</p>
<p class="eq">W = p(V<sub>2</sub> &minus; V<sub>1</sub>) = 200 &times; (0.120 &minus; 0.050) = <strong>14.0 kJ</strong></p>
<p>using 1 kPa&middot;m<sup>3</sup> = 1 kJ. Positive because the volume grew.</p>
<p>The pressure has to be absolute, and this is only the boundary work. The heat added is larger, because part of it raised internal energy.</p>`,
  },
  {
    id: "thermodynamics-q17",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A 0.20 m<sup>3</sup> rigid tank contains air at 100 kPa and 300 K. A fire outside raises the contents to 450 K. What is the final pressure?</p>`,
    answer: 150,
    unit: "kPa",
    explanation: `<p>Fixed mass in a fixed volume means p/T is constant:</p>
<p class="eq">p<sub>2</sub> = p<sub>1</sub>(T<sub>2</sub>/T<sub>1</sub>) = 100 &times; (450/300) = <strong>150 kPa</strong></p>
<p>The 0.20 m<sup>3</sup> is padding. Volume cancels because it does not change.</p>
<p>Run it in Celsius and you get 100 &times; (177/27) = 656 kPa, more than four times too high. The relation also holds only while the mass is truly fixed, which a lifting relief valve or a yielding seam ends. Relief sizing for a fire case is exactly this calculation.</p>`,
  },
  {
    id: "thermodynamics-q18",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>Two kg of water at 80 &deg;C are mixed adiabatically with 3 kg of water at 20 &deg;C. Assume equal specific heats and no phase change. What is the final temperature?</p>`,
    answer: 44,
    unit: "C",
    explanation: `<p>No heat crosses the boundary, so the mixture lands at the mass-weighted mean:</p>
<p class="eq">T<sub>f</sub> = (2&times;80 + 3&times;20)/5 = <strong>44 &deg;C</strong></p>
<p>One of the few places Celsius is safe, because only differences appear. Weighted, not plain: 50 &deg;C is wrong because there is more cold water than hot.</p>
<p>It breaks the moment the streams have different specific heats, the vessel leaks heat, or either changes phase.</p>`,
  },
  {
    id: "thermodynamics-q19",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A 2.0 kW kettle holds 1.5 kg of water already at 100 &deg;C. Left switched on, how long does it take to boil dry? Take h<sub>fg</sub> = 2257 kJ/kg and assume all the element power reaches the water.</p>`,
    answer: 1690,
    unit: "s",
    explanation: `<p>Boiling at constant pressure is a pure latent-heat load. The temperature never moves, so all the energy goes into the phase change:</p>
<p class="eq">Q = m h<sub>fg</sub> = 1.5 &times; 2257 = 3386 kJ</p>
<p class="eq">t = Q/P&#775; = 3386/2.0 = <strong>1690 s &asymp; 28 min</strong></p>
<p>Now the point of the question. Heating that same 1.5 kg from 20 &deg;C to boiling takes only mc&Delta;T = 1.5 &times; 4.18 &times; 80 = 502 kJ, or 251 s. <strong>Boiling the water away costs about 6.7&times; as much energy as heating it to boiling in the first place</strong>, the ratio h<sub>fg</sub>/(c&Delta;T) = 2257/334.</p>
<p>That ratio is why phase change is the workhorse in evaporators, condensers, boilers, and heat pipes: a kilogram of fluid moves enormous heat with no temperature swing at all. It is also why a pot boils dry so much more slowly than it comes to the boil, and why a steam burn is far worse than a hot-water burn.</p>`,
  },
  {
    id: "thermodynamics-q20",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>An electric duct heater must raise 400 CFM of supply air by 12 &deg;C. Take 1 CFM = 4.72 &times; 10<sup>&minus;4</sup> m<sup>3</sup>/s, air density 1.20 kg/m<sup>3</sup> and c<sub>p</sub> = 1.005 kJ/kg&middot;K. What element rating do you need?</p>`,
    answer: 2.73,
    unit: "kW",
    explanation: `<p>Volume flow to mass flow, then the sensible-heat rate:</p>
<p class="eq">V&#775; = 400 &times; 4.72&times;10<sup>&minus;4</sup> = 0.189 m<sup>3</sup>/s</p>
<p class="eq">Q&#775; = &rho;V&#775; c<sub>p</sub> &Delta;T = (1.20 &times; 0.189) &times; 1.005 &times; 12 = <strong>2.73 kW</strong></p>
<p>m&#775;c<sub>p</sub>&Delta;T is the single most-used estimate in thermal work. The American rule of thumb agrees: 1.08 &times; 400 &times; 21.6 = 9330 Btu/h.</p>
<p>Use c<sub>p</sub>, not c<sub>v</sub>, because the duct runs at essentially constant pressure. And this is <em>sensible</em> heat only. Cool below the dew point and a latent term appears that can nearly double the load.</p>`,
  },
  {
    id: "thermodynamics-q21",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A rigid insulated tank of compressed air is fitted with a valve. Case A: the valve stays shut and an electric resistor inside runs for a minute. Case B: the valve is cracked open and half the air escapes. A candidate uses &Delta;U = Q &minus; W for both. Where does that go wrong?</p>`,
    choices: [
      "It fails in Case A, because electrical work through the boundary is not covered by the first law",
      "It fails in Case B, because the tank is rigid and rigid systems have no energy balance at all",
      "It fails in Case B: mass leaves, so the balance needs the enthalpy carried out by the escaping air",
      "It fails in both cases, because an insulated tank is isolated and no energy can cross either boundary",
    ],
    answer: 2,
    explanation: `<p>Case A is a genuine <strong>closed system</strong>: no mass crosses, the resistor does electrical work <em>on</em> the gas (W is negative in the "work by the system" convention), the tank is rigid so there is no boundary work, and Q = 0. So &Delta;U = &minus;W<sub>elec</sub> and the air heats up. The closed-system form is exactly right.</p>
<p>Case B is a <strong>control volume with mass leaving</strong>. Each kilogram that escapes carries away its internal energy <em>plus</em> the flow work the remaining gas does pushing it through the valve, that is, its enthalpy h, not its internal energy u. The correct balance is d(mu)<sub>cv</sub>/dt = &minus;m&#775;<sub>out</sub>h<sub>out</sub>, and the gas remaining in the tank <strong>cools sharply</strong>. Use &Delta;U = Q &minus; W here and you will predict the wrong final temperature and the wrong residual pressure.</p>
<p>This is the whole reason the guide says "declare your boundary first." Same hardware, same insulation, two different equations, and the difference is entirely whether mass crosses the line you drew. Blowdown cooling is real: vent a nitrogen bottle fast and you can frost the valve body and stiffen elastomer seals.</p>`,
  },
  {
    id: "thermodynamics-q22",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A gas is compressed polytropically (pV<sup>n</sup> = const, n = 1.3) from p<sub>1</sub> = 100 kPa, V<sub>1</sub> = 0.100 m<sup>3</sup> to p<sub>2</sub> = 500 kPa. Find the magnitude of the work input, using W<sub>by</sub> = (p<sub>2</sub>V<sub>2</sub> &minus; p<sub>1</sub>V<sub>1</sub>)/(1 &minus; n).</p>`,
    answer: 15,
    unit: "kJ",
    tolerance: 0.03,
    explanation: `<p>The final volume is not given, and that is deliberate. You have to get it from the process itself, not from a data sheet:</p>
<p class="eq">V<sub>2</sub> = V<sub>1</sub>(p<sub>1</sub>/p<sub>2</sub>)<sup>1/n</sup> = 0.100 &times; (0.2)<sup>1/1.3</sup> = 0.100 &times; 0.290 = 0.0290 m<sup>3</sup></p>
<p>Check the states really do sit on the polytrope: p<sub>1</sub>V<sub>1</sub><sup>1.3</sup> = 100(0.100)<sup>1.3</sup> = 5.01 and p<sub>2</sub>V<sub>2</sub><sup>1.3</sup> = 500(0.0290)<sup>1.3</sup> = 5.01. &#10003; Now the work:</p>
<p class="eq">p<sub>2</sub>V<sub>2</sub> = 500 &times; 0.0290 = 14.5 kJ,&nbsp;&nbsp;p<sub>1</sub>V<sub>1</sub> = 100 &times; 0.100 = 10.0 kJ</p>
<p class="eq">W<sub>by</sub> = (14.5 &minus; 10.0)/(1 &minus; 1.3) = 4.5/(&minus;0.3) = &minus;15.0 kJ</p>
<p>Negative work by the gas means work went <em>in</em>: the magnitude is <strong>15.0 kJ</strong>. The sign is the classic compression error; state the convention before you substitute.</p>
<p>Worth pre-empting: n = 1.3 sits between the isothermal value 1.0 and the isentropic 1.4, which is exactly what a real air compressor with partial jacket cooling does, some, but not all, of the heat of compression is removed as you go. If someone hands you p, V pairs and an n that do not satisfy pV<sup>n</sup> = const, the data are inconsistent and you should say so rather than pick one and press on.</p>`,
  },

  // ---- steady-flow devices ----------------------------------------------
  {
    id: "thermodynamics-q23",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>Steam flows through a well-insulated turbine at 2.0 kg/s. Inlet enthalpy is 3200 kJ/kg, outlet 2800 kJ/kg, and velocity changes are negligible. What shaft power comes off?</p>`,
    answer: 800,
    unit: "kW",
    explanation: `<p>Steady-flow energy equation with q = 0 and &Delta;KE &asymp; 0 collapses to mass flow times enthalpy drop:</p>
<p class="eq">W&#775;<sub>out</sub> = m&#775;(h<sub>1</sub> &minus; h<sub>2</sub>) = 2.0 &times; (3200 &minus; 2800) = <strong>800 kW</strong></p>
<p>The outlet enthalpy is lower precisely because that energy left as shaft work. Enthalpy is the currency, and the turbine spends it. A compressor is the mirror image: enthalpy rises and you pay for it.</p>
<p>800 kW is a small industrial back-pressure turbine, not a power station (a 500 MW unit passes hundreds of kg/s). And if you were handed velocities instead of "negligible", check the kinetic term before dropping it, at typical turbine exhaust speeds of 100&#8211;200 m/s the &Delta;(V&sup2;/2) term is 5&#8211;20 kJ/kg against a 400 kJ/kg enthalpy drop, so a few percent.</p>`,
  },
  {
    id: "thermodynamics-q24",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>An intern sizes a steam turbine passing 3.0 kg/s by writing W&#775; = m&#775;&Delta;u and using &Delta;u = 380 kJ/kg from a table, when the correct enthalpy drop is &Delta;h = 400 kJ/kg. By how much does he under-predict the shaft power?</p>`,
    answer: 60,
    unit: "kW",
    explanation: `<p>Both numbers, then the difference:</p>
<p class="eq">Correct: W&#775; = m&#775;&Delta;h = 3.0 &times; 400 = 1200 kW</p>
<p class="eq">Intern: W&#775; = m&#775;&Delta;u = 3.0 &times; 380 = 1140 kW</p>
<p class="eq">Shortfall = 1200 &minus; 1140 = <strong>60 kW</strong>, i.e. 5% of the machine</p>
<p><strong>Where did the missing 20 kJ/kg go?</strong> Into flow work. h = u + pv, so &Delta;h &minus; &Delta;u = &Delta;(pv) = 20 kJ/kg, the net work the surrounding fluid does pushing each kilogram in at the inlet minus the work that kilogram does pushing itself out at the exit. In a control volume that term is real, recoverable shaft work, and dropping it silently loses it.</p>
<p>That is the entire reason enthalpy exists as a property. Rule to carry into the interview: <strong>closed system &rarr; u, flowing device &rarr; h</strong>. Five percent may sound survivable, but on a 5 MW machine it is a 250 kW error, which is the difference between meeting a performance guarantee and paying liquidated damages.</p>`,
  },
  {
    id: "thermodynamics-q25",
    type: "numeric",
    difficulty: 2,
    figure: figCV,
    prompt: `<p>For the compressor control volume shown, air enters at 20 m/s and leaves at 120 m/s, with the enthalpy rising from 300 to 500 kJ/kg. What is the kinetic-energy term in the steady-flow energy balance, per kilogram?</p>`,
    answer: 7,
    unit: "kJ/kg",
    explanation: `<p>Do not drop a term before you have sized it. In SI, velocities in m/s give J/kg:</p>
<p class="eq">&Delta;(V&sup2;/2) = (120&sup2; &minus; 20&sup2;)/2 = (14400 &minus; 400)/2 = 7000 J/kg = <strong>7.00 kJ/kg</strong></p>
<p>Compare it with the enthalpy rise of 200 kJ/kg: the kinetic term is 7/207 = <strong>3.4%</strong> of the total work input. That is why the standard compressor idealization drops it, but notice you only know that <em>after</em> the arithmetic, and 3.4% is not nothing if you are chasing a 2% efficiency guarantee.</p>
<p>The unit slip is brutal here. Forget that m&sup2;/s&sup2; is J/kg and not kJ/kg, and you get 7000 kJ/kg, thirty-five times the entire enthalpy rise. If a kinetic term ever comes out comparable to the enthalpy change in a turbomachine, you have made a factor-of-1000 error.</p>
<p>The flip side is the nozzle, where the same term <em>is</em> the answer: a nozzle exists to convert &Delta;h into V&sup2;/2, so dropping it there deletes the physics. Same equation, opposite decision, and being able to say which term matters in which device is what the question is actually testing.</p>`,
  },
  {
    id: "thermodynamics-q26",
    type: "numeric",
    difficulty: 2,
    figure: figNozzle,
    prompt: `<p>Steam enters the adiabatic nozzle shown at 3 MPa and 350 &deg;C (h<sub>1</sub> = 3115 kJ/kg) with negligible velocity, and leaves at 1.5 MPa where h<sub>2</sub> = 2942 kJ/kg. What is the exit velocity?</p>`,
    answer: 588,
    unit: "m/s",
    explanation: `<p>A nozzle has no shaft work and no heat transfer, so the steady-flow balance keeps only two terms, enthalpy and kinetic energy, and with V<sub>1</sub> &asymp; 0:</p>
<p class="eq">V<sub>2</sub>&sup2;/2 = h<sub>1</sub> &minus; h<sub>2</sub> = 3115 &minus; 2942 = 173 kJ/kg</p>
<p class="eq">V<sub>2</sub> = &radic;(2 &times; 173 &times; 1000) = &radic;346000 = <strong>588 m/s</strong></p>
<p>The factor of 1000 decides this one. Enthalpies come in kJ/kg; V&sup2;/2 comes out in J/kg. Skip the conversion and you get &radic;346 = 18.6 m/s, a "nozzle" slower than a desk fan, which should fail your smell test instantly.</p>
<p>The speed of sound in steam at these conditions is roughly 600 m/s, so 588 m/s puts the exit right around Mach 1. That is exactly what you would expect at a pressure ratio of 2 in a converging nozzle, and it is the physical reason the flow would <strong>choke</strong> if you dropped the back pressure further. It is also why real turbine nozzle rings are sized on choked mass flux, and why anything faster demands a converging&#8211;diverging shape.</p>`,
  },
  {
    id: "thermodynamics-q27",
    type: "mc",
    difficulty: 2,
    prompt: `<p>Refrigerant passes through an insulated expansion valve with no shaft work and negligible velocity change. Which idealization should you write down for it?</p>`,
    choices: [
      "Temperature is unchanged across the valve, whatever the fluid and whatever its state",
      "Pressure is unchanged across the valve, since no work is being extracted from the flow",
      "Entropy is unchanged across the valve, because it is adiabatic and therefore isentropic",
      "Enthalpy is unchanged across the valve, so h at exit equals h at inlet",
    ],
    answer: 3,
    explanation: `<p>Strike out the terms one at a time: no shaft work, no heat, no meaningful &Delta;KE, no elevation change. The steady-flow energy equation q &minus; w = &Delta;h + &Delta;(V&sup2;/2) reduces to <strong>h<sub>2</sub> = h<sub>1</sub></strong>. The valve is <em>isenthalpic</em>.</p>
<p>The distractor that catches good candidates is "adiabatic therefore isentropic". Adiabatic plus <em>reversible</em> is isentropic; a valve is violently irreversible, so entropy rises sharply even with zero heat transfer. That single error propagates straight into a fake chiller COP.</p>
<p>Constant enthalpy is also not constant temperature. For an ideal gas h depends only on T, so an ideal gas throttles with no temperature change at all. Worth saying, because it shows you know the model's limits. A real refrigerant near saturation partly flashes to vapor, stealing latent heat from itself and emerging much colder. That is the expansion device in every vapor-compression system, and pressure "staying constant" is the one thing a valve certainly does not do.</p>`,
  },
  {
    id: "thermodynamics-q28",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>An adiabatic air compressor handles 0.50 kg/s and raises the air from 300 K to 450 K. Using c<sub>p</sub> = 1.005 kJ/kg&middot;K, estimate the shaft power it absorbs.</p>`,
    answer: 75.4,
    unit: "kW",
    tolerance: 0.03,
    explanation: `<p>Adiabatic, steady, negligible &Delta;KE: the work input is exactly the enthalpy rise.</p>
<p class="eq">W&#775;<sub>in</sub> = m&#775; c<sub>p</sub>(T<sub>2</sub> &minus; T<sub>1</sub>) = 0.50 &times; 1.005 &times; (450 &minus; 300) = <strong>75.4 kW</strong></p>
<p>Reaching for c<sub>v</sub> is the error. For air c<sub>v</sub> = 0.718 kJ/kg&middot;K, which would give 53.9 kW, a 29% under-prediction, and enough to specify a motor that trips on startup. <strong>Flowing device &rarr; enthalpy &rarr; c<sub>p</sub></strong>; c<sub>v</sub> belongs to a closed rigid system.</p>
<p>Notice this needs no efficiency and no pressure ratio: whatever irreversibility exists inside the machine already shows up as extra exit temperature, so the measured &Delta;T <em>is</em> the actual work. That is exactly how a field engineer estimates compressor power with nothing but two thermocouples and a flow meter, and why an unexpectedly high discharge temperature means you are paying for entropy generation.</p>`,
  },
  {
    id: "thermodynamics-q29",
    type: "numeric",
    difficulty: 2,
    figure: figHX,
    prompt: `<p>In the counterflow oil cooler shown, 0.80 kg/s of engine oil (c<sub>p</sub> = 2.1 kJ/kg&middot;K) is cooled from 90 &deg;C to 60 &deg;C by 0.40 kg/s of water (c<sub>p</sub> = 4.18 kJ/kg&middot;K) entering at 30 &deg;C. What temperature does the water leave at?</p>`,
    answer: 60.1,
    unit: "C",
    tolerance: 0.03,
    explanation: `<p>A heat exchanger does no work and (well insulated) loses no heat to ambient, so the two stream balances couple through one number, the duty:</p>
<p class="eq">Q&#775; = (m&#775;c<sub>p</sub>)<sub>oil</sub>&Delta;T<sub>oil</sub> = 0.80 &times; 2.1 &times; (90 &minus; 60) = 50.4 kW</p>
<p class="eq">&Delta;T<sub>water</sub> = Q&#775;/(m&#775;c<sub>p</sub>)<sub>water</sub> = 50.4/(0.40 &times; 4.18) = 50.4/1.672 = 30.1 K</p>
<p class="eq">T<sub>water,out</sub> = 30 + 30.1 = <strong>60.1 &deg;C</strong></p>
<p>Now the part that separates candidates: the water leaves at 60.1 &deg;C while the oil leaves at 60.0 &deg;C. That is a <strong>temperature cross</strong>, and it is only possible in <em>counterflow</em>. In a parallel-flow exchanger both streams march toward each other and the outlets must converge. The cold outlet can never overtake the hot outlet. So this duty is unbuildable as a parallel-flow unit, and in a single-shell-pass two-tube-pass design you would need a correction factor or a second shell.</p>
<p>Look at the capacity rates: (m&#775;c<sub>p</sub>)<sub>oil</sub> = 1.68 kW/K versus 1.67 kW/K for the water. They are nearly equal, which is why the two temperature profiles in the lower plot are almost parallel, the classic balanced-counterflow signature.</p>`,
  },
  {
    id: "thermodynamics-q30",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A plant knocks 700 kPa shop air down to 200 kPa through a pressure regulator. The air enters at 300 K, and c<sub>p</sub> = 1.005 kJ/kg&middot;K, &gamma; = 1.4. How much shaft work per kilogram is thrown away, compared with an ideal expander doing the same pressure drop?</p>`,
    answer: 90.7,
    unit: "kJ/kg",
    tolerance: 0.03,
    explanation: `<p>The regulator is a throttle: h<sub>2</sub> = h<sub>1</sub>, so for an ideal gas T<sub>2</sub> = T<sub>1</sub> = 300 K and the shaft work is exactly <strong>zero</strong>. An ideal (isentropic) expander over the same pressures would give:</p>
<p class="eq">T<sub>2s</sub> = T<sub>1</sub>(p<sub>2</sub>/p<sub>1</sub>)<sup>(&gamma;&minus;1)/&gamma;</sup> = 300 &times; (200/700)<sup>0.2857</sup> = 300 &times; 0.699 = 210 K</p>
<p class="eq">w<sub>out</sub> = c<sub>p</sub>(T<sub>1</sub> &minus; T<sub>2s</sub>) = 1.005 &times; (300 &minus; 210) = <strong>90.7 kJ/kg</strong></p>
<p>So every kilogram through that regulator forfeits 90.7 kJ of recoverable work. At a modest 0.1 kg/s that is 9 kW dumped continuously, and the second law records it as entropy generation: s<sub>gen</sub> = &minus;R ln(p<sub>2</sub>/p<sub>1</sub>) = 0.287 ln(3.5) = 0.359 kJ/kg&middot;K.</p>
<p>Why does industry accept it? Valves are cheap, tiny, and need no lubrication, bearings, or control system, while a 90 kJ/kg expander is a turbomachine. The calculus flips at scale: LNG plants, large air separation units and cryogenic cycles genuinely do replace throttles with work-recovering expanders, and gaining the 210 K exit temperature is often worth more than the shaft work.</p>
<p>Throttling is often claimed to cool the gas. For an <em>ideal gas</em> it does not. The temperature drop only appears with real fluids near saturation, or through the Joule&#8211;Thomson effect.</p>`,
  },

  // ---- second law, entropy, isentropic efficiency ------------------------
  {
    id: "thermodynamics-q31",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>Ten kJ of heat leaks directly from a 500 K reservoir to a 300 K reservoir through a bare pipe. How much entropy is generated?</p>`,
    answer: 0.0133,
    unit: "kJ/K",
    tolerance: 0.03,
    explanation: `<p>Each reservoir is large enough to stay at its own temperature, so each entropy change is simply Q/T:</p>
<p class="eq">&Delta;S<sub>hot</sub> = &minus;10/500 = &minus;0.0200 kJ/K</p>
<p class="eq">&Delta;S<sub>cold</sub> = +10/300 = +0.0333 kJ/K</p>
<p class="eq">S<sub>gen</sub> = 0.0333 &minus; 0.0200 = <strong>+0.0133 kJ/K</strong></p>
<p>Positive, as it must be. Heat crossing a finite temperature difference is irreversible. The asymmetry is the whole story: the same 10 kJ carries <em>more</em> entropy when it arrives at 300 K than it carried leaving at 500 K, because entropy transfer is Q/T.</p>
<p>Put a price on it. The work you could have taken with a reversible engine between those reservoirs is &eta;<sub>Carnot</sub>Q = (1 &minus; 300/500)(10) = 4.0 kJ, and that is exactly T<sub>0</sub>S<sub>gen</sub> = 300 &times; 0.0133 = 4.0 kJ of destroyed work potential. Entropy generation is not an abstraction; it is a work bill, and lagging that pipe is how you stop paying it.</p>`,
  },
  {
    id: "thermodynamics-q32",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A turbine stage takes steam in at h<sub>1</sub> = 1500 kJ/kg. Expanding to the exit pressure isentropically would land at h<sub>2s</sub> = 1100 kJ/kg, but the stage's isentropic efficiency is 0.85. What is the actual exit enthalpy?</p>`,
    answer: 1160,
    unit: "kJ/kg",
    tolerance: 0.02,
    explanation: `<p>Isentropic efficiency for a turbine is actual work over ideal work, output on top, because the real machine delivers <em>less</em>:</p>
<p class="eq">&eta;<sub>t</sub> = (h<sub>1</sub> &minus; h<sub>2a</sub>)/(h<sub>1</sub> &minus; h<sub>2s</sub>)</p>
<p class="eq">h<sub>1</sub> &minus; h<sub>2a</sub> = 0.85 &times; (1500 &minus; 1100) = 340 kJ/kg</p>
<p class="eq">h<sub>2a</sub> = 1500 &minus; 340 = <strong>1160 kJ/kg</strong></p>
<p><strong>Where did the missing 60 kJ/kg go?</strong> Not out of the machine. It is still in the steam. Friction, tip leakage, and shock losses degrade shaft work back into internal energy, so the exit stream is <em>hotter and higher-enthalpy</em> than the ideal exit, and its entropy is higher. On a T&#8211;s diagram the real expansion leans to the right instead of dropping straight down.</p>
<p>Two checks that catch inverted formulas instantly: h<sub>2a</sub> must be <em>above</em> h<sub>2s</sub> (an answer below 1100 means the ratio was flipped), and &eta;<sub>t</sub> must be &le; 1. A compressor inverts the fraction, ideal on top, because a real compressor demands <em>more</em> work than the ideal one. Same physics, opposite arrangement, and mixing them up is one of the most common interview slips.</p>
<p>Follow-up to expect: does the lost 60 kJ/kg help the next stage? Slightly. Reheat factor means some of it is recoverable downstream, but it is never a free lunch.</p>`,
  },
  {
    id: "thermodynamics-q33",
    type: "numeric",
    difficulty: 3,
    figure: figIsenComp,
    prompt: `<p>An adiabatic air compressor takes 1.0 kg/s from 100 kPa, 300 K to 600 kPa with an isentropic efficiency of 0.78. Using c<sub>p</sub> = 1.005 kJ/kg&middot;K and &gamma; = 1.4, how much extra shaft power does its irreversibility cost, compared with the isentropic machine?</p>`,
    answer: 56.8,
    unit: "kW",
    tolerance: 0.03,
    explanation: `<p>Ideal path first, then the real one, then the difference:</p>
<p class="eq">T<sub>2s</sub> = 300 &times; 6<sup>0.2857</sup> = 300 &times; 1.669 = 501 K</p>
<p class="eq">w<sub>s</sub> = c<sub>p</sub>(T<sub>2s</sub> &minus; T<sub>1</sub>) = 1.005 &times; 201 = 202 kJ/kg</p>
<p class="eq">w<sub>a</sub> = w<sub>s</sub>/&eta;<sub>s</sub> = 202/0.78 = 258 kJ/kg</p>
<p class="eq">Extra power = m&#775;(w<sub>a</sub> &minus; w<sub>s</sub>) = 1.0 &times; (258 &minus; 202) = <strong>56.8 kW</strong></p>
<p>Where does it show up? As temperature. The actual exit is T<sub>2a</sub> = 300 + 258/1.005 = 557 K instead of 501 K, and the entropy generated is s<sub>gen</sub> = c<sub>p</sub>ln(T<sub>2a</sub>/T<sub>2s</sub>) = 1.005 ln(557/501) = 0.108 kJ/kg&middot;K. That is the rightward drift of the red path on the T&#8211;s diagram.</p>
<p>The subtle part, and the reason this is a difficulty-3 question: the 56.8 kW is <em>not</em> all destroyed. Exergy destroyed is T<sub>0</sub>s<sub>gen</sub> = 300 &times; 0.108 = 32.4 kW; the remaining ~24 kW is still recoverable in principle, sitting in the hotter discharge air, which is why compressed-air heat recovery is a real energy-saving measure. Distinguishing "extra work paid" from "work potential destroyed" is what separates a first-law answer from a second-law one.</p>
<p>&eta;<sub>s</sub> = 0.78 is typical of a single-stage industrial machine, and the 56 K of extra discharge temperature it buys you is exactly why discharge-temperature alarms are a proxy for compressor health.</p>`,
  },
  {
    id: "thermodynamics-q34",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A factory exhaust stream rejects 1 MW of heat at 35 &deg;C into a 25 &deg;C plant room. Why is the recoverable shaft work tiny despite the large heat rate?</p>`,
    choices: [
      "Low-temperature heat carries little energy, so the quoted 1 MW is an overstatement",
      "A 1 MW stream can in fact be fully converted to shaft work with a good enough turbine",
      "Recoverable work scales with mass flow rate, and this stream has a low mass flow rate",
      "The stream sits only 10 K above ambient, so its Carnot work potential is minute",
    ],
    answer: 3,
    explanation: `<p>Run the number: the reversible fraction is 1 &minus; T<sub>0</sub>/T<sub>source</sub> = 1 &minus; 298/308 = <strong>3.2%</strong>. One megawatt of heat at 35 &deg;C is worth at most 32 kW of shaft work, and a real ORC machine at half of Carnot would give you ~16 kW, probably less than the parasitic pumping.</p>
<p>The first law and the second law disagree about what this stream is worth. Energy <em>quantity</em> is 1 MW; energy <em>quality</em> (exergy) is 32 kW. Nothing about the mass flow rate changes that. A huge flow at 35 &deg;C is still nearly worthless for work, because the temperature ratio, not the flow, sets the ceiling.</p>
<p>What the stream <em>is</em> good for: space heating, feedwater or make-up preheat, absorption chilling, or a heat pump's source side, all uses that need heat rather than work. The engineering habit worth demonstrating: when someone offers you "waste heat", ask for the temperature before you ask for the megawatts. Below about 100 &deg;C, plan on cascading it into a thermal use, not into a generator.</p>`,
  },
  {
    id: "thermodynamics-q35",
    type: "mc",
    difficulty: 2,
    prompt: `<p>Two compressors raise the same ideal gas from 1 bar to 8 bar from the same inlet temperature, both reversible: one is cooled to stay nearly isothermal, the other is adiabatic. Which comparison holds?</p>`,
    choices: [
      "Adiabatic needs less work, since no energy leaves the gas as heat along the way",
      "Both need identical work, because the pressure ratio and the inlet state are the same",
      "Isothermal needs less work: cooling holds specific volume down, shrinking the v dp integral",
      "Isothermal is a textbook fiction that cannot be analysed or approached in real hardware",
    ],
    answer: 2,
    explanation: `<p>Steady-flow compression work is &int;v dp, so whatever keeps <strong>specific volume</strong> small through the squeeze wins. Adiabatic compression keeps the heat of compression, the gas gets hot, v stays large, and the integral grows. Isothermal compression rejects that heat continuously, keeping the gas dense and compliant.</p>
<p>The numbers for 1 &rarr; 8 bar at 300 K: isothermal w = RT ln(8) = 0.287 &times; 300 &times; 2.08 = 179 kJ/kg; isentropic w = &gamma;RT/(&gamma;&minus;1) &times; (8<sup>0.2857</sup> &minus; 1) = 301 &times; 0.811 = 244 kJ/kg. That is <strong>36% more work for the adiabatic machine</strong>, and the reason is entirely the hot gas.</p>
<p>The misleading intuition is that adiabatic means no losses and therefore efficient. Adiabatic means no heat crosses the boundary; it says nothing about how much work you had to spend. Truly isothermal compression is unreachably slow, so industry approximates it with <strong>multistage compression and intercooling</strong>, and gets most of the benefit with two or three stages.</p>`,
  },
  {
    id: "thermodynamics-q36",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>Size the motor for a shop air compressor: 0.50 m<sup>3</sup>/s of atmospheric air at 100 kPa and 300 K, discharged at 700 kPa, single stage, isentropic efficiency 0.75. Use R = 0.287 kJ/kg&middot;K, c<sub>p</sub> = 1.005 kJ/kg&middot;K, &gamma; = 1.4.</p>`,
    answer: 174,
    unit: "kW",
    tolerance: 0.03,
    explanation: `<p>Three steps: mass flow, ideal work, then divide by efficiency.</p>
<p class="eq">m&#775; = pV&#775;/(RT) = (100 &times; 0.50)/(0.287 &times; 300) = 50/86.1 = 0.581 kg/s</p>
<p class="eq">T<sub>2s</sub> = 300 &times; 7<sup>0.2857</sup> = 300 &times; 1.744 = 523 K</p>
<p class="eq">W&#775;<sub>s</sub> = m&#775;c<sub>p</sub>(T<sub>2s</sub> &minus; T<sub>1</sub>) = 0.581 &times; 1.005 &times; 223 = 130 kW</p>
<p class="eq">W&#775;<sub>actual</sub> = 130/0.75 = <strong>174 kW</strong></p>
<p>Check it against shop-floor numbers. 0.50 m<sup>3</sup>/s is about 1060 CFM, and 174 kW is 233 hp, so 4.5 CFM per horsepower. The industry rule of thumb for a 7-bar reciprocating or screw compressor is 4&#8211;5 CFM/hp. &#10003; If your answer lands at 40 or 400 CFM/hp, you have a unit error.</p>
<p>Three ways to get it wrong. Use the <strong>inlet</strong> density for m&#775; (the discharge is five times denser and would give a wildly wrong flow); use c<sub>p</sub>, not c<sub>v</sub>; and divide by &eta;<sub>s</sub> rather than multiply. Real machines need <em>more</em> work than ideal. Also note the 523 K isentropic discharge is already 250 &deg;C, and the real machine will be hotter still, which is why single-stage air compressors need aftercoolers and why oil-flooded screws exist.</p>`,
  },
  {
    id: "thermodynamics-q37",
    type: "numeric",
    difficulty: 3,
    figure: figIntercool,
    prompt: `<p>The same 100 &rarr; 700 kPa duty is split into two equal-pressure-ratio stages with an intercooler returning the air to 300 K between them, as shown. Compared with single-stage isentropic compression, what percentage of the ideal work is saved?</p>`,
    answer: 13.8,
    unit: "%",
    tolerance: 0.03,
    explanation: `<p>Equal pressure ratios per stage minimize total work, so the intermediate pressure is the geometric mean:</p>
<p class="eq">p<sub>i</sub> = &radic;(100 &times; 700) = 265 kPa,&nbsp;&nbsp;ratio per stage = &radic;7 = 2.646</p>
<p class="eq">&Delta;T per stage = 300 &times; (2.646<sup>0.2857</sup> &minus; 1) = 300 &times; 0.320 = 96.1 K</p>
<p class="eq">w<sub>2-stage</sub> = 2 c<sub>p</sub> &Delta;T = 2 &times; 1.005 &times; 96.1 = 193 kJ/kg</p>
<p class="eq">w<sub>1-stage</sub> = c<sub>p</sub>(523 &minus; 300) = 224 kJ/kg</p>
<p class="eq">Saving = (224 &minus; 193)/224 = <strong>13.8%</strong></p>
<p>Why it works: the second stage starts cold and therefore <em>dense</em>, so its &int;v dp is smaller. Diminishing returns set in fast. The isothermal floor for this duty is 168 kJ/kg, so one stage is 34% above it, two stages 15%, three stages 10%, four stages 7%. Beyond three stages you are buying intercooler pressure drop, footprint, and leak paths for a couple of percent.</p>
<p>The other prize is the discharge temperature: 396 K per stage instead of 523 K single-stage. That is what keeps lubricant out of coking territory and valve plates alive, and on many machines it, rather than the energy saving, is what forces the second stage. Condensate is a bonus and a nuisance. Cooling to 300 K between stages drops liquid water out, which is why intercoolers carry hidden assumptions.</p>`,
  },

  // ---- ideal gas vs real substance, two-phase states ---------------------
  {
    id: "thermodynamics-q38",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>At a certain saturation pressure, water has h<sub>f</sub> = 419 kJ/kg and h<sub>fg</sub> = 2257 kJ/kg. A sample of the saturated mixture is measured at h = 1000 kJ/kg. What is its quality?</p>`,
    answer: 0.257,
    unit: "(mass fraction vapor)",
    tolerance: 0.025,
    explanation: `<p>Any property of a saturated mixture is the lever rule between the two saturation values:</p>
<p class="eq">h = h<sub>f</sub> + x h<sub>fg</sub>&nbsp;&#8594;&nbsp;x = (h &minus; h<sub>f</sub>)/h<sub>fg</sub> = (1000 &minus; 419)/2257 = <strong>0.257</strong></p>
<p>So 25.7% of the <strong>mass</strong> is vapor. The word "mass" matters: because v<sub>g</sub> is hundreds of times v<sub>f</sub>, that quarter of the mass occupies almost all of the physical volume. A sight glass on this vessel would look like it holds mostly steam with a puddle at the bottom.</p>
<p>Two guardrails. Quality is only defined <em>between</em> the saturated liquid and saturated vapor states at the same pressure; if the arithmetic hands you x &gt; 1 the state is superheated vapor and if x &lt; 0 it is compressed liquid, and in either case you must leave the dome and use a different table. And h, u, v and s all use the same lever rule with the same x, a useful cross-check when a table value looks wrong.</p>`,
  },
  {
    id: "thermodynamics-q39",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A saturated mixture has quality x = 0.20. At that pressure, v<sub>f</sub> = 0.001 m<sup>3</sup>/kg and v<sub>g</sub> = 0.8857 m<sup>3</sup>/kg. What is the mixture's specific volume?</p>`,
    answer: 0.178,
    unit: "m3/kg",
    tolerance: 0.03,
    explanation: `<p>Same lever rule, applied to volume:</p>
<p class="eq">v = v<sub>f</sub> + x(v<sub>g</sub> &minus; v<sub>f</sub>) = 0.001 + 0.20 &times; (0.8857 &minus; 0.001) = <strong>0.178 m<sup>3</sup>/kg</strong></p>
<p>Notice how lopsided it is: only 20% of the mass is vapor, but v is already 178 times the liquid value, so the vapor holds roughly 99.6% of the volume. The tempting wrong move is a simple arithmetic mean of v<sub>f</sub> and v<sub>g</sub>, which is a <em>volume</em>-weighted idea applied to a <em>mass</em>-fraction quantity, and it gives 0.443, 2.5 times too big.</p>
<p>Practical consequence engineers actually live with: a small amount of flashing creates an enormous volume flow. That is why a relief line sized on liquid flow chokes when the fluid flashes, why two-phase pressure drop is so much worse than single-phase, and why cavitation damages pumps. The vapor fraction by mass is tiny, but the volume it demands is not.</p>`,
  },
  {
    id: "thermodynamics-q40",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A team models the vapor leaving a boiler drum &#8212; steam close to saturation at 4 MPa &#8212; with pv = RT and a constant c<sub>p</sub>. What is the right critique?</p>`,
    choices: [
      "Steam near the saturation dome departs from pv = RT, so use steam tables or an equation of state",
      "Any vapor obeys pv = RT once it is above its saturation temperature, so the model is fine",
      "At 4 MPa the compressibility factor is still near 1, so pv = RT is good to a percent or two",
      "Pressure and temperature are not independent at saturation, so no property model can fix the state",
    ],
    answer: 0,
    explanation: `<p>Ideal-gas behaviour needs molecules far apart and interactions weak, true for highly superheated, low-pressure vapor, and badly false near the dome. At 4 MPa the compressibility factor for saturated steam is roughly 0.8, so pv = RT is already 20% off on specific volume before you even reach the latent-heat problem: the ideal-gas model has <strong>no phase change in it at all</strong>, so it cannot represent h<sub>fg</sub>, quality, or the flat saturation line the boiler actually operates on.</p>
<p>Constant c<sub>p</sub> is the second error. Steam's c<sub>p</sub> near saturation climbs steeply with pressure and diverges at the critical point; treating it as a constant 1.87 kJ/kg&middot;K is a superheated-vapor approximation borrowed out of its range.</p>
<p>The critique to give in an interview is not "never use ideal gas". It is: <strong>state the phase region and the accuracy you need</strong>. Air in a duct, combustion products, low-pressure superheat, pv = RT is fine and fast. Anything within a factor of two of the saturation line, or anything where quality appears, needs tables or a real equation of state. The other two are worth checking numerically rather than by feel. Compressibility at 4 MPa saturated is Z = pv<sub>g</sub>/RT = 4000(0.04978)/(0.4615 &times; 523.5) = <strong>0.82</strong>, so the claim that Z is near 1 is 18% wrong on volume. And being above the saturation temperature is not enough on its own. It is being far above it, at low reduced pressure, that makes pv = RT usable. The fourth claim is right that p and T are dependent inside the dome, but it draws the wrong conclusion: tables fix the state from p and quality, so a property model handles it perfectly well.</p>`,
  },
  {
    id: "thermodynamics-q41",
    type: "numeric",
    difficulty: 3,
    figure: figDome,
    prompt: `<p>A rigid 0.30 m<sup>3</sup> vessel holds 15 kg of R-134a at 20 &deg;C. An intern uses pv = RT with R = 0.0815 kJ/kg&middot;K and reports 1190 kPa. At 20 &deg;C, R-134a has p<sub>sat</sub> = 572 kPa, v<sub>f</sub> = 0.00082 and v<sub>g</sub> = 0.0360 m<sup>3</sup>/kg. What is the real pressure in the vessel?</p>`,
    answer: 572,
    unit: "kPa",
    explanation: `<p>Start with the specific volume, then find out where that state actually lives:</p>
<p class="eq">v = V/m = 0.30/15 = 0.0200 m<sup>3</sup>/kg</p>
<p>Compare with the saturation values at 20 &deg;C: v<sub>f</sub> = 0.00082 &lt; 0.0200 &lt; v<sub>g</sub> = 0.0360. The state is <strong>inside the two-phase dome</strong>, so liquid and vapor coexist and the pressure is not free to be anything. It is pinned to the saturation pressure at that temperature:</p>
<p class="eq">p = p<sub>sat</sub>(20 &deg;C) = <strong>572 kPa</strong></p>
<p class="eq">x = (v &minus; v<sub>f</sub>)/(v<sub>g</sub> &minus; v<sub>f</sub>) = (0.0200 &minus; 0.00082)/0.0352 = 0.545</p>
<p>The intern's 1190 kPa is <strong>108% too high</strong>, and the error is conceptual, not arithmetic. Inside the dome p and T are <em>not</em> independent. Fix one and the other is determined, which is exactly what the state postulate warns you about. Ideal-gas relations assume a single gaseous phase and have no mechanism for a liquid puddle sitting at the bottom of the vessel.</p>
<p>How to catch it in two seconds: an ideal gas has no saturation pressure, so if the fluid is a refrigerant, steam, or anything near ambient conditions, compute v and compare it against v<sub>f</sub> and v<sub>g</sub> <em>before</em> reaching for pv = RT. Real consequences: a relief valve set on the intern's number would be set at twice the pressure the vessel will ever see in normal service, while a vessel filled liquid-full and then warmed goes hydraulically solid and can burst, which is the reason refrigerant cylinders carry a fill limit at all.</p>`,
  },
  {
    id: "thermodynamics-q42",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A pressure cooker cooks faster because the sealed pot runs above atmospheric pressure. What is the actual mechanism?</p>`,
    choices: [
      "Sealing the pot removes the latent-heat barrier, so water boils with no phase-change cost",
      "Raising the pressure raises the saturation temperature, so the water gets hotter than 100 &deg;C",
      "The trapped steam raises the water's specific heat, so it stores more energy per degree",
      "The higher pressure raises the flame temperature under the pot, so heat flows in faster",
    ],
    answer: 1,
    explanation: `<p>Boiling happens when the liquid's vapor pressure equals the surrounding pressure. Seal the pot and let it reach ~200 kPa absolute, and water no longer boils until 120 &deg;C. The food is therefore cooked at <strong>120 &deg;C rather than 100 &deg;C</strong>, and cooking chemistry roughly doubles in rate for every 10 K, which is where the factor-of-three time saving comes from.</p>
<p>Nothing about the latent heat changes. H<sub>fg</sub> actually <em>falls</em> slightly with pressure (2202 kJ/kg at 200 kPa versus 2257 at 101 kPa), and it certainly does not vanish. The flame temperature is set by combustion, not by what is happening inside the pot.</p>
<p>The same p&#8211;T saturation relation runs in reverse at altitude: in Denver water boils at 94 &deg;C and pasta takes longer; on Everest it boils at about 70 &deg;C and you cannot cook rice at all. And industrially it is why condenser vacuum matters, why autoclaves sterilise at 121 &deg;C, and why a boiler's drum pressure sets its saturation temperature and therefore its metal temperature.</p>`,
  },
  {
    id: "thermodynamics-q43",
    type: "mc",
    difficulty: 2,
    prompt: `<p>Air at 25 &deg;C and 60% relative humidity flows over a metal panel held at 12 &deg;C. What happens at the panel surface?</p>`,
    choices: [
      "Vapour condenses on the panel, because its surface sits below the dew point of the air",
      "Nothing condenses, because the bulk air is at 25 &deg;C and comfortably above freezing",
      "Nothing condenses until the relative humidity of the bulk airstream reaches 100%",
      "The panel dries the air, because 60% relative humidity is well below the saturation line",
    ],
    answer: 0,
    explanation: `<p>Dew point is the temperature at which the air's existing vapor would be saturated. At 25 &deg;C, p<sub>sat</sub> = 3.17 kPa, so the vapor pressure is 0.60 &times; 3.17 = 1.90 kPa, whose saturation temperature is about <strong>16.7 &deg;C</strong>. The 12 &deg;C panel is below that, so vapor diffuses to the cold surface and condenses there. The bulk air can stay at 60% RH all day.</p>
<p>That is the key idea: condensation is governed by the <em>local surface</em> temperature, not the bulk air state. It is why chilled-water pipes sweat in a warm plant room, why a cold drink beads, and why an electronics enclosure with an internal cold plate can drip onto a board while the room humidity looks perfectly benign.</p>
<p>Consequences you should raise unprompted: the condensing load is <strong>latent</strong> heat, which can rival or exceed the sensible load on a cooling coil, so the panel is doing far more thermal work than a dry-bulb calculation suggests; and the condensate needs somewhere to go, drainage, insulation with a vapor barrier, or a raised surface temperature. Corrosion and mould follow the water, not the temperature.</p>`,
  },
  {
    id: "thermodynamics-q44",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>An air handler pulls 500 CFM (0.236 m<sup>3</sup>/s) of outdoor air at 30 &deg;C and 60% RH and cools it to 13 &deg;C saturated. With p = 101.3 kPa, p<sub>sat</sub>(30 &deg;C) = 4.25 kPa and p<sub>sat</sub>(13 &deg;C) = 1.50 kPa, how much water drips off the coil per hour?</p>`,
    answer: 6.48,
    unit: "kg/h",
    tolerance: 0.04,
    explanation: `<p>Humidity ratios first. Dry air is the conserved stream, so everything is per kilogram of dry air:</p>
<p class="eq">p<sub>v1</sub> = 0.60 &times; 4.25 = 2.55 kPa&nbsp;&#8594;&nbsp;&omega;<sub>1</sub> = 0.622 &times; 2.55/(101.3 &minus; 2.55) = 0.0160</p>
<p class="eq">&omega;<sub>2</sub> = 0.622 &times; 1.50/(101.3 &minus; 1.50) = 0.00933&nbsp;(saturated at 13 &deg;C)</p>
<p class="eq">v<sub>1</sub> = R<sub>a</sub>T/(p &minus; p<sub>v1</sub>) = 0.287 &times; 303/98.8 = 0.881 m<sup>3</sup>/kg dry air</p>
<p class="eq">m&#775;<sub>a</sub> = 0.236/0.881 = 0.268 kg dry air/s</p>
<p class="eq">m&#775;<sub>w</sub> = m&#775;<sub>a</sub>(&omega;<sub>1</sub> &minus; &omega;<sub>2</sub>) = 0.268 &times; 0.00671 = 0.00180 kg/s = <strong>6.48 kg/h</strong></p>
<p>That is about 6.5 litres an hour off one small air handler. Condensate pumps and drain pans exist for a reason, and a blocked one floods a ceiling.</p>
<p>The bigger lesson is the load split. Latent load = m&#775;<sub>w</sub>h<sub>fg</sub> &asymp; 0.00180 &times; 2460 = 4.4 kW; sensible load = m&#775;<sub>a</sub>c<sub>p</sub>&Delta;T &asymp; 0.268 &times; 1.02 &times; 17 = 4.6 kW. <strong>Nearly half the coil duty is dehumidification</strong>, and a designer who sized on m&#775;c<sub>p</sub>&Delta;T alone would have specified a coil half the size it needs to be. That is the single most common HVAC screening assumption.</p>
<p>State the modelling choices. Mass flow is tracked per kilogram of <em>dry</em> air (the water content changes, the dry air does not), specific volume is per kg dry air using the partial pressure of air, and the exit is assumed saturated because the coil surface is below the dew point. A real coil with bypass would leave slightly above saturation.</p>`,
  },
  {
    id: "thermodynamics-q45",
    type: "mc",
    difficulty: 3,
    prompt: `<p>Gas escapes a high-pressure tank through a small hole. Below a certain downstream pressure, dropping the downstream pressure further does not increase the leak rate at all. What is going on?</p>`,
    choices: [
      "The flow has choked: Mach 1 at the controlling section fixes the mass flux",
      "The gas has become effectively incompressible at these high pressures",
      "The leak path has partly plugged, so the effective throat area has shrunk",
      "The tank has emptied to the point where upstream pressure no longer matters",
    ],
    answer: 0,
    explanation: `<p>Once the throat reaches Mach 1, pressure information cannot travel <em>upstream</em> against a sonic flow. The exit plane stops knowing what the receiver is doing, so mass flux is fixed by the upstream stagnation state and the throat area alone: m&#775; = &rho;*A V* . For air the choke point is p<sub>downstream</sub>/p<sub>upstream</sub> &le; 0.528, so any tank above roughly 2 bar absolute venting to atmosphere is choked.</p>
<p>The distractors are all testable alternatives, which is the point. A partially plugged path would reduce flow but the flow would still respond to downstream pressure. The signature of choking is specifically that the <em>response</em> disappears. Incompressibility would give the opposite behaviour (flow rising as &radic;&Delta;p forever), and a drained tank would show falling flow, not flat flow.</p>
<p>Where this bites on relief-valve and blowdown sizing (the code equations are choked-flow equations), leak-rate estimates for hazardous gas, pneumatic tool consumption, rocket and turbine nozzle mass flow, and the reason a nozzle must go converging&#8211;diverging to exceed Mach 1. Treating a gas leak with an incompressible orifice equation over-predicts flow badly and is a classic screening question in process-safety interviews.</p>`,
  },

  // ---- Rankine ----------------------------------------------------------
  {
    id: "thermodynamics-q46",
    type: "numeric",
    difficulty: 3,
    figure: figRankTs,
    prompt: `<p>A steam plant runs the cycle shown: turbine inlet 8 MPa / 500 &deg;C (h = 3399.5 kJ/kg, s = 6.7266 kJ/kg&middot;K), condenser at 10 kPa (h<sub>f</sub> = 191.8, h<sub>fg</sub> = 2392.1 kJ/kg, s<sub>f</sub> = 0.6492, s<sub>fg</sub> = 7.4996 kJ/kg&middot;K, v<sub>f</sub> = 0.00101 m<sup>3</sup>/kg), turbine isentropic efficiency 0.85, pump 0.80. What is the cycle's thermal efficiency, in percent?</p>`,
    answer: 33.4,
    unit: "%",
    tolerance: 0.03,
    explanation: `<p>Walk the four state points. <strong>Turbine (3&rarr;4):</strong> set s<sub>4s</sub> = s<sub>3</sub> and find the ideal exit inside the dome.</p>
<p class="eq">x<sub>4s</sub> = (6.7266 &minus; 0.6492)/7.4996 = 0.810&nbsp;&#8594;&nbsp;h<sub>4s</sub> = 191.8 + 0.810(2392.1) = 2130 kJ/kg</p>
<p class="eq">w<sub>t</sub> = &eta;<sub>t</sub>(h<sub>3</sub> &minus; h<sub>4s</sub>) = 0.85 &times; (3399.5 &minus; 2130) = 1079 kJ/kg</p>
<p><strong>Pump (1&rarr;2):</strong> liquid, so w<sub>p</sub> = v&Delta;p and then divide by pump efficiency.</p>
<p class="eq">w<sub>p</sub> = 0.00101 &times; (8000 &minus; 10)/0.80 = 8.07/0.80 = 10.1 kJ/kg</p>
<p class="eq">h<sub>2</sub> = 191.8 + 10.1 = 201.9 kJ/kg</p>
<p><strong>Boiler and the bottom line:</strong></p>
<p class="eq">q<sub>in</sub> = h<sub>3</sub> &minus; h<sub>2</sub> = 3399.5 &minus; 201.9 = 3198 kJ/kg</p>
<p class="eq">w<sub>net</sub> = 1079 &minus; 10 = 1069 kJ/kg</p>
<p class="eq">&eta; = w<sub>net</sub>/q<sub>in</sub> = 1069/3198 = 0.334 = <strong>33.4%</strong></p>
<p>Three things to say out loud. (1) The pump costs <strong>0.9% of turbine output</strong>, that asymmetry between compressing a liquid and expanding a vapor is the entire reason Rankine works, and it is why a candidate who neglects pump work entirely gets 33.7% and is barely wrong. (2) Do <em>not</em> divide by h<sub>3</sub> alone; q<sub>in</sub> starts from the pump exit h<sub>2</sub>, not from zero. (3) The Carnot efficiency between 500 &deg;C and the 46 &deg;C condenser is 58.7%. The cycle reaches 57% of that, which is a healthy real number, and the gap is mostly because heat is added starting at 46 &deg;C rather than all at 500 &deg;C.</p>
<p>Follow-ups that follows: raise the boiler pressure, superheat further, add reheat, add feedwater regeneration, or pull a deeper condenser vacuum, and each of those has a materials or capital cost attached.</p>`,
  },
  {
    id: "thermodynamics-q47",
    type: "numeric",
    difficulty: 3,
    figure: figRankPair,
    prompt: `<p>The unit sketched admits steam at 4 MPa / 400 &deg;C (h = 3214.5 kJ/kg, s = 6.7714 kJ/kg&middot;K) and exhausts at 15 kPa, where h<sub>f</sub> = 225.9, h<sub>fg</sub> = 2372.3 kJ/kg, s<sub>f</sub> = 0.7549 and s<sub>fg</sub> = 7.2522 kJ/kg&middot;K. With a stage efficiency of 0.82, what is the quality at the exhaust hood?</p>`,
    answer: 0.907,
    unit: "(mass fraction vapor)",
    tolerance: 0.02,
    explanation: `<p>You cannot get exit quality without first going through the isentropic state. That is the step candidates skip.</p>
<p class="eq">x<sub>4s</sub> = (s<sub>3</sub> &minus; s<sub>f</sub>)/s<sub>fg</sub> = (6.7714 &minus; 0.7549)/7.2522 = 0.830</p>
<p class="eq">h<sub>4s</sub> = 225.9 + 0.830(2372.3) = 2194 kJ/kg</p>
<p class="eq">w<sub>actual</sub> = 0.82 &times; (3214.5 &minus; 2194) = 0.82 &times; 1020 = 837 kJ/kg</p>
<p class="eq">h<sub>4a</sub> = 3214.5 &minus; 837 = 2378 kJ/kg</p>
<p class="eq">x<sub>4a</sub> = (2378 &minus; 225.9)/2372.3 = <strong>0.907</strong></p>
<p>So the exhaust carries <strong>9.3% moisture</strong>. The usual last-stage limit is about 10&#8211;12%, beyond that, water droplets travelling at hundreds of metres per second erode the leading edges of the blades, and you lose both metal and stage efficiency. At 9.3% this machine is acceptable but has no margin.</p>
<p>Note the direction of the irreversibility, because it is counter-intuitive: inefficiency <strong>raises</strong> the exit enthalpy (2378 versus 2194 ideal), so the real exhaust is <em>drier</em> than the ideal one, x = 0.907 against x<sub>4s</sub> = 0.830. Lost shaft work reappears as internal energy in the steam. An answer below x<sub>4s</sub> means the efficiency was applied the wrong way round.</p>
<p>The fixes if the number came out too wet: more superheat at the throttle, or reheat between stages. Both raise the expansion line on the T&#8211;s chart so it exits closer to the saturated-vapor boundary, and reheat buys extra work at the same time.</p>`,
  },
  {
    id: "thermodynamics-q48",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>Estimate the Rankine feed-pump work for liquid water with v = 0.0010 m<sup>3</sup>/kg raised from 10 kPa to 8.01 MPa, using w<sub>p</sub> = v&Delta;p.</p>`,
    answer: 8,
    unit: "kJ/kg",
    tolerance: 0.03,
    explanation: `<p>Liquid is nearly incompressible, so the reversible work is just v&Delta;p:</p>
<p class="eq">&Delta;p = 8010 &minus; 10 = 8000 kPa</p>
<p class="eq">w<sub>p</sub> = 0.0010 &times; 8000 = <strong>8.0 kJ/kg</strong></p>
<p>Now put it in context, because that is the point of the question: the turbine in the same plant produces roughly 1000&#8211;1300 kJ/kg. The pump therefore costs under 1% of the gross output, and the plant's <strong>back-work ratio</strong> is about 0.01.</p>
<p>Compare a gas turbine, where the compressor eats 40&#8211;60% of turbine work. The difference is entirely that Rankine pressurises a <em>liquid</em> (v = 0.001 m<sup>3</sup>/kg) while Brayton pressurises a <em>gas</em> (v &asymp; 0.86 m<sup>3</sup>/kg at ambient), and compression work scales with specific volume. That single fact is why the condenser exists at all: you condense the steam so the pump has liquid to work with rather than compressing vapor from 10 kPa to 8 MPa.</p>`,
  },
  {
    id: "thermodynamics-q49",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A Rankine turbine's exhaust is wet enough to erode the last-stage blades. Which change most directly cuts the moisture <em>and</em> yields additional expansion work?</p>`,
    choices: [
      "Raise the condenser pressure so the expansion stops before the steam gets very wet",
      "Reheat: expand partway, return the steam to the boiler, then finish the expansion",
      "Throttle the main steam ahead of the stop valve so it enters the turbine drier",
      "Fit a moisture separator and accept the same expansion work as before it was fitted",
    ],
    answer: 1,
    explanation: `<p><strong>Reheat</strong> does both jobs at once. Expand from, say, 8 MPa to 2 MPa, send the steam back through a reheater to bring it near the original inlet temperature, then expand to condenser pressure. The second expansion starts far to the right on the T&#8211;s diagram, so it ends at higher quality, typically taking exit moisture from 12% down to 6&#8211;8%, and the extra expansion produces real additional work while also lifting the average heat-addition temperature.</p>
<p>Why the others fail. Raising condenser pressure does reduce moisture, but by throwing away the low-pressure end of the expansion. You lose work and efficiency, and you have to reject heat at a higher temperature. Throttling the throttle-valve is pure lost availability: constant enthalpy, lower pressure, less work, and the exit is no drier for it. A moisture separator is genuinely used (it is standard in nuclear plants, which run saturated cycles), but it removes water rather than producing work, the question asked for both.</p>
<p>The trade-offs to volunteer: reheat needs a second high-temperature pass through the boiler, more piping at high temperature, a larger turbine casing, and a control scheme for reheat temperature. It is worth it above about 100 MW, which is why almost every large fossil unit has it and almost no small one does.</p>`,
  },
  {
    id: "thermodynamics-q50",
    type: "mc",
    difficulty: 2,
    prompt: `<p>Steam plants go to real expense &#8212; big condensers, cooling towers, air-ejector systems &#8212; to hold the condenser at 10 kPa rather than simply exhausting to atmosphere at 101 kPa. What does that vacuum buy?</p>`,
    choices: [
      "It reduces the feed-pump work, which is the largest parasitic load on the cycle",
      "It raises the boiler's saturation temperature and so raises the heat-addition temperature",
      "It drops the condensing temperature from 100 &deg;C to 46 &deg;C, extending the expansion",
      "It keeps the turbine exhaust dry, because low pressure moves the state out of the dome",
    ],
    answer: 2,
    explanation: `<p>Condenser pressure sets the condensing <em>temperature</em>, which is the cycle's T<sub>C</sub>. At 101 kPa that is 100 &deg;C; at 10 kPa it is 46 &deg;C. Lowering the exhaust pressure lets the turbine keep expanding, and the extra enthalpy drop is large: for 8 MPa / 500 &deg;C steam, the ideal work goes from 958 kJ/kg exhausting at 101 kPa to 1269 kJ/kg at 10 kPa, <strong>32% more work for the same fuel</strong>. Carnot says the same thing from the other side: 1 &minus; 319/773 = 58.7% versus 1 &minus; 373/773 = 51.7%.</p>
<p>The other options invert the physics. Feed-pump work actually <em>rises</em> slightly (larger &Delta;p) but it is under 1% of output either way, so it is irrelevant. Boiler saturation temperature is set by boiler pressure, not condenser pressure. And the vacuum makes the exhaust <strong>wetter</strong>, not drier. Extending the expansion drives the state further into the dome, which is exactly why superheat and reheat are needed alongside it.</p>
<p>What the vacuum costs: enormous low-pressure last-stage blades (specific volume at 10 kPa is about 15 m<sup>3</sup>/kg), a condenser surface area set by cold-water temperature, and continuous air removal because the whole low-pressure end is below atmospheric and leaks inward. Cold cooling water is worth money. Plant output measurably drops on hot summer days for exactly this reason.</p>`,
  },

  // ---- Brayton, combined cycle, reciprocating engines, combustion --------
  {
    id: "thermodynamics-q51",
    type: "numeric",
    difficulty: 2,
    figure: figBrayTs,
    prompt: `<p>For the air-standard Brayton cycle shown, the compressor pressure ratio is 12 and &gamma; = 1.4. What is the ideal thermal efficiency, in percent?</p>`,
    answer: 50.8,
    unit: "%",
    tolerance: 0.03,
    explanation: `<p>Because 1&rarr;2 and 3&rarr;4 are isentropic between the same two isobars, the temperature ratio is the same across both, and everything collapses to the pressure ratio alone:</p>
<p class="eq">r<sub>p</sub><sup>(&gamma;&minus;1)/&gamma;</sup> = 12<sup>0.2857</sup> = 2.034</p>
<p class="eq">&eta; = 1 &minus; 1/r<sub>p</sub><sup>(&gamma;&minus;1)/&gamma;</sup> = 1 &minus; 1/2.034 = 0.508 = <strong>50.8%</strong></p>
<p>Notice what is <em>absent</em>: turbine inlet temperature does not appear. For the ideal cycle, T<sub>3</sub> sets the specific work (kJ per kg of air, and therefore engine size) but not the efficiency. That is a genuinely surprising result and a favourite follow-up.</p>
<p>The exponent is where this goes wrong. Using &gamma; gives 12<sup>1.4</sup> = 32.4 and a nonsense 96.9%; using &gamma;&minus;1 gives 12<sup>0.4</sup> = 2.70 and 63%. That is the <em>Otto</em> formula, which takes a volume ratio, not a pressure ratio. Getting the two mixed up is the single most common Brayton error, so say which ratio you have before you pick an exponent.</p>
<p>Reality check: real simple-cycle industrial gas turbines land at 33&#8211;42%, not 51%, because component efficiencies, turbine cooling air, pressure losses, and real gas properties all take their cut.</p>`,
  },
  {
    id: "thermodynamics-q52",
    type: "numeric",
    difficulty: 3,
    figure: figBrayReal,
    prompt: `<p>Now give that same pressure-ratio-12 machine real components: &eta;<sub>compressor</sub> = 0.85, &eta;<sub>turbine</sub> = 0.90, inlet 300 K, turbine inlet 1500 K, c<sub>p</sub> = 1.005 kJ/kg&middot;K. What net work does it produce per kilogram of air?</p>`,
    answer: 323,
    unit: "kJ/kg",
    tolerance: 0.03,
    explanation: `<p>Both real paths drift right on the T&#8211;s diagram, and they drift in the same direction, which hurts the compressor and the turbine in opposite senses.</p>
<p class="eq">T<sub>2s</sub> = 300 &times; 2.034 = 610 K&nbsp;&#8594;&nbsp;T<sub>2a</sub> = 300 + (610 &minus; 300)/0.85 = 665 K</p>
<p class="eq">T<sub>4s</sub> = 1500/2.034 = 737 K&nbsp;&#8594;&nbsp;T<sub>4a</sub> = 1500 &minus; 0.90(1500 &minus; 737) = 814 K</p>
<p class="eq">w<sub>c</sub> = 1.005(665 &minus; 300) = 367 kJ/kg</p>
<p class="eq">w<sub>t</sub> = 1.005(1500 &minus; 814) = 690 kJ/kg</p>
<p class="eq">w<sub>net</sub> = 690 &minus; 367 = <strong>323 kJ/kg</strong></p>
<p>The ideal machine gave 455 kJ/kg, so 15 points of component inefficiency cost <strong>29% of the net work</strong>. That sensitivity is the defining feature of Brayton: net work is the difference of two large numbers, and the <strong>back-work ratio</strong> here is w<sub>c</sub>/w<sub>t</sub> = 0.53, the compressor consumes over half the turbine's output. Shave a point off compressor efficiency and you lose roughly two points of net output.</p>
<p>Efficiency for completeness: q<sub>in</sub> = 1.005(1500 &minus; 665) = 839 kJ/kg, so &eta; = 323/839 = 38.5%, down from the ideal 50.8%. Compare a Rankine plant, whose pump back-work ratio is about 0.01. That contrast is why gas turbines are so sensitive to compressor fouling that operators wash the compressor on a schedule, and why a Rankine plant barely notices its feed pump.</p>
<p>Note also that T<sub>3</sub> now <em>does</em> matter: with real components, dropping turbine inlet temperature shrinks w<sub>t</sub> while w<sub>c</sub> stays put, so net work collapses. That is why hot-day power derating on gas turbines is so severe.</p>`,
  },
  {
    id: "thermodynamics-q53",
    type: "mc",
    difficulty: 3,
    prompt: `<p>An engineer objects to your gas-turbine report: "You say 38.5%, but Carnot between 300 K ambient and the 1500 K turbine inlet is 80%. Why are you throwing away 41 points?" What is the right answer?</p>`,
    choices: [
      "The 80% figure applies only to steam cycles; gas cycles obey a different efficiency bound",
      "It is a fair target &#8212; the gap is entirely component inefficiency and can be engineered out",
      "Carnot does not apply, because air is not the ideal gas the derivation assumes as a working fluid",
      "Nothing here is isothermal at 1500 K or 300 K &#8212; heat crosses over sliding temperatures",
    ],
    answer: 3,
    explanation: `<p>Carnot's bound assumes heat is taken in <em>entirely at</em> T<sub>H</sub> and rejected <em>entirely at</em> T<sub>C</sub>. A Brayton cycle does neither. Combustion heats the air from 665 K up to 1500 K along an isobar, so the entropy-weighted <em>average</em> temperature of heat addition is (1500 &minus; 665)/ln(1500/665) = 1030 K, not 1500 K. Exhaust is rejected from 814 K down toward 300 K, averaging 515 K. Use those averages and the reversible ceiling for this cycle's actual heat-transfer profile is 1 &minus; 515/1030 = 50%, which is essentially the 50.8% ideal-cycle number.</p>
<p>So the honest accounting is: 80% is the bound for a <em>different machine</em> (one with isothermal heat exchange); 51% is the bound for <em>this cycle shape</em> with perfect components; 38.5% is what real components give. Only that last 12-point gap is engineering headroom. Blaming the whole 41 points on the hardware team is a category error.</p>
<p>Carnot is not useless, though. It is fluid-independent, it is an absolute ceiling nothing can beat, and it correctly tells you that raising turbine inlet temperature or dropping inlet air temperature is where the sensitivity lives. Just do not use it as a target. The right target is the reversible efficiency <em>of your cycle's own heat-transfer profile</em>, and the right way to close the remaining gap is a bottoming cycle that harvests that 814 K exhaust.</p>`,
  },
  {
    id: "thermodynamics-q54",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A gas-turbine designer keeps pushing compressor pressure ratio upward, since ideal Brayton efficiency rises with it. With turbine inlet temperature fixed by blade metallurgy, which effect eventually bites?</p>`,
    choices: [
      "Compressor work stops growing past a pressure ratio of about 15, so net work keeps rising",
      "Turbine inlet temperature limits stop binding at high pressure ratio, relaxing blade metallurgy",
      "Compressor discharge temperature is set by the fuel flow rather than by the pressure ratio",
      "Compressor work and discharge temperature climb, so at fixed T<sub>3</sub> net work peaks then falls",
    ],
    answer: 3,
    explanation: `<p>Two curves fight each other. Efficiency of the ideal cycle rises monotonically with pressure ratio, but <strong>specific net work</strong> does not: raising r<sub>p</sub> pushes T<sub>2</sub> up, which both increases compressor work and eats into the available temperature rise in the combustor (q<sub>in</sub> = c<sub>p</sub>(T<sub>3</sub> &minus; T<sub>2</sub>) shrinks). With T<sub>3</sub> pinned, net work peaks at r<sub>p</sub> = (T<sub>3</sub>/T<sub>1</sub>)<sup>&gamma;/(2(&gamma;&minus;1))</sup>, for T<sub>3</sub>/T<sub>1</sub> = 1500/300 = 5 that is 5<sup>1.4/0.8</sup> = 5<sup>1.75</sup> = <strong>16.7</strong>, and falls beyond it. The peak is flat: 461 kJ/kg at r<sub>p</sub> = 16.7 against 458 at r<sub>p</sub> = 21 and 452 at 25. Push far enough and T<sub>2</sub> reaches T<sub>3</sub>, at which point net work is zero.</p>
<p>That is why aero engines and industrial machines sit at different pressure ratios. Aircraft engines chase <em>fuel efficiency</em> and run r<sub>p</sub> of 40&#8211;50 with multi-spool compressors; peaking industrial units chase <em>power per unit of hardware</em> and sit nearer the specific-work optimum.</p>
<p>The practical limits stack up alongside the thermodynamic one: compressor discharge temperature (450&#8211;600 &deg;C at high r<sub>p</sub>) degrades the effectiveness of the turbine cooling air bled from that same compressor, surge margin narrows, blade heights at the back of the compressor shrink toward tip-clearance-loss territory, and stage count, weight and cost all climb. "More pressure ratio" is never free.</p>`,
  },
  {
    id: "thermodynamics-q55",
    type: "numeric",
    difficulty: 2,
    figure: figCombined,
    prompt: `<p>A gas turbine converts 40% of its fuel energy to work and exhausts the rest at 850 K. A steam bottoming cycle recovers that exhaust and converts 35% of what it is fed. What is the combined-cycle efficiency, in percent?</p>`,
    answer: 61,
    unit: "%",
    tolerance: 0.03,
    explanation: `<p>Follow 100 units of fuel through both machines:</p>
<p class="eq">Gas turbine: work = 0.40 &times; 100 = 40, exhaust = 60</p>
<p class="eq">Steam cycle: work = 0.35 &times; 60 = 21, rejected = 39</p>
<p class="eq">&eta;<sub>combined</sub> = (40 + 21)/100 = <strong>61%</strong></p>
<p>Or in one line: &eta; = &eta;<sub>B</sub> + &eta;<sub>R</sub>(1 &minus; &eta;<sub>B</sub>) = 0.40 + 0.35(0.60) = 0.61. Adding them gives 0.40 + 0.35 = 75%, the bottoming cycle only sees the 60 units the topping cycle rejected, not the original 100.</p>
<p>Why it works at all: a simple-cycle gas turbine throws away its heat at 850 K, which is <em>hot enough to raise steam</em>. Brayton rejects high, Rankine accepts low, and the two are thermodynamically complementary. The exhaust that is waste to one is premium fuel to the other. Neither cycle alone reaches 50% in practice; stacked, modern units are certified above 62%, the highest thermal efficiency of any heat engine ever built.</p>
<p>It is not free. The heat-recovery steam generator is a large, expensive piece of hardware; the plant needs cooling water or an air-cooled condenser; and start-up is slower because the steam side has thermal-stress limits. That is why peaking plants often stay simple-cycle while baseload plants go combined.</p>`,
  },
  {
    id: "thermodynamics-q56",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>An ideal air-standard Otto cycle has compression ratio r = 10 with &gamma; = 1.4. Estimate the thermal efficiency, in percent, using &eta; = 1 &minus; r<sup>1&minus;&gamma;</sup>.</p>`,
    answer: 60.2,
    unit: "%",
    tolerance: 0.02,
    explanation: `<p>Otto efficiency depends on the <strong>volume</strong> compression ratio only:</p>
<p class="eq">&eta; = 1 &minus; 1/r<sup>&gamma;&minus;1</sup> = 1 &minus; 1/10<sup>0.4</sup></p>
<p class="eq">10<sup>0.4</sup> = 2.512, so &eta; = 1 &minus; 1/2.512 = 0.602 = <strong>60.2%</strong></p>
<p>Real gasoline engines reach 25&#8211;38% brake efficiency, so the air-standard number is optimistic by roughly a factor of two. The gap is worth being able to itemise: real gas properties and dissociation at peak temperature (the largest single term), heat loss through the cylinder walls, finite combustion duration rather than instantaneous constant-volume burn, throttling and pumping work at part load, friction, incomplete expansion, and exhaust blowdown.</p>
<p>The design lever the formula exposes is r, and what limits it is <strong>knock</strong>: raise the compression ratio and the end gas auto-ignites before the flame front arrives. That is why octane rating exists, why direct injection and cooled EGR let modern engines run r = 12&#8211;14 where 1970s engines ran 8, and why Diesel engines, which compress air alone and inject fuel at the end, can run r = 16&#8211;22 and are fundamentally more efficient.</p>`,
  },
  {
    id: "thermodynamics-q57",
    type: "numeric",
    difficulty: 2,
    figure: figOtto,
    prompt: `<p>For the Otto cycle drawn, the charge is at 300 K at bottom dead centre and the compression ratio is 10 with &gamma; = 1.4. What is the temperature at the end of compression (state 2), before the spark?</p>`,
    answer: 754,
    unit: "K",
    tolerance: 0.03,
    explanation: `<p>Isentropic compression with a known <em>volume</em> ratio uses the volume form of the relation:</p>
<p class="eq">T<sub>2</sub>/T<sub>1</sub> = (V<sub>1</sub>/V<sub>2</sub>)<sup>&gamma;&minus;1</sup> = 10<sup>0.4</sup> = 2.512</p>
<p class="eq">T<sub>2</sub> = 300 &times; 2.512 = <strong>754 K</strong> (481 &deg;C)</p>
<p>And that number is the whole story of engine design. The end-gas temperature before any combustion has occurred is already 481 &deg;C; add the pressure rise (p<sub>2</sub>/p<sub>1</sub> = 10<sup>1.4</sup> = 25) and the unburned mixture in the far corner of the chamber is sitting close to its auto-ignition point. Push the compression ratio higher and it lights on its own ahead of the flame front, <strong>knock</strong>, which destroys pistons.</p>
<p>Which exponent goes with which ratio decides this: with a <em>volume</em> ratio use &gamma;&minus;1 = 0.4; with a <em>pressure</em> ratio use (&gamma;&minus;1)/&gamma; = 0.286. Applying the pressure exponent here gives 300 &times; 10<sup>0.286</sup> = 579 K, and you would wrongly conclude there is plenty of knock margin.</p>
<p>Follow-ups this sets up: why a diesel with r = 18 reaches 950 K and needs no spark plug at all; why intercooling a turbocharged engine's charge air is not a luxury (every 10 K off T<sub>1</sub> is 25 K off T<sub>2</sub>); and why direct injection helps by cooling the charge as the fuel evaporates.</p>`,
  },
  {
    id: "thermodynamics-q58",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>Gasoline is roughly octane, C<sub>8</sub>H<sub>18</sub>. Taking air as 21% O<sub>2</sub> / 79% N<sub>2</sub> by mole (3.76 mol N<sub>2</sub> per mol O<sub>2</sub>), molar mass of air 28.97 and of C<sub>8</sub>H<sub>18</sub> 114.2 kg/kmol, what is the stoichiometric air&#8211;fuel ratio by mass?</p>`,
    answer: 15.1,
    unit: "(kg air per kg fuel)",
    tolerance: 0.03,
    explanation: `<p>Balance the carbon and hydrogen first, then let oxygen follow:</p>
<p class="eq">C<sub>8</sub>H<sub>18</sub> + 12.5(O<sub>2</sub> + 3.76 N<sub>2</sub>) &rarr; 8 CO<sub>2</sub> + 9 H<sub>2</sub>O + 47 N<sub>2</sub></p>
<p>8 carbons need 8 CO<sub>2</sub>; 18 hydrogens make 9 H<sub>2</sub>O; that consumes 8 + 4.5 = 12.5 O<sub>2</sub>. Now go to mass:</p>
<p class="eq">air = 12.5 &times; 4.76 kmol &times; 28.97 = 1724 kg per kmol of fuel</p>
<p class="eq">AFR = 1724/114.2 = <strong>15.1 kg air per kg fuel</strong></p>
<p>Worth committing to memory: gasoline &asymp; 14.7 (real blends carry some oxygenates), diesel &asymp; 14.5, methane &asymp; 17.2, hydrogen &asymp; 34. Every automotive lambda sensor and fuel map is calibrated against this number, and &lambda; = 1 <em>means</em> AFR at stoichiometric.</p>
<p><strong>What running rich does:</strong> extra fuel cannot burn without oxygen, so it absorbs heat as it vaporises and dissociates, and the exhaust temperature <em>falls</em>. Manufacturers exploit this deliberately, commanding &lambda; &asymp; 0.85 at full load protects turbocharger turbine wheels and catalyst bricks from overtemperature, at a direct cost in fuel and in CO and unburned hydrocarbon emissions. Running lean raises flame temperature (and NO<sub>x</sub>) until it gets lean enough to cool the flame again, which is why lean-burn engines walk a narrow line.</p>
<p>About 15 kg of air per kg of fuel means a 50-litre tank of petrol needs roughly 550 kg, some 450 m<sup>3</sup>, of air to burn. That is why engines are fundamentally air pumps and why boost is the lever on power.</p>`,
  },

  // ---- refrigeration and heat pumps -------------------------------------
  {
    id: "thermodynamics-q59",
    type: "numeric",
    difficulty: 2,
    figure: figPh,
    prompt: `<p>For the R-134a cycle plotted, the compressor takes saturated vapour at 140 kPa (h<sub>1</sub> = 239.2 kJ/kg) and discharges at 800 kPa with h<sub>2</sub> = 284.5 kJ/kg; the condenser delivers saturated liquid at h<sub>3</sub> = 95.5 kJ/kg. What is the refrigeration COP?</p>`,
    answer: 3.17,
    unit: "(dimensionless)",
    tolerance: 0.03,
    explanation: `<p>The fourth state is the one you must supply yourself. The expansion device is a <strong>throttle</strong>, so h<sub>4</sub> = h<sub>3</sub> = 95.5 kJ/kg. That is the vertical leg on the p&#8211;h plot.</p>
<p class="eq">q<sub>L</sub> = h<sub>1</sub> &minus; h<sub>4</sub> = 239.2 &minus; 95.5 = 143.7 kJ/kg</p>
<p class="eq">w<sub>in</sub> = h<sub>2</sub> &minus; h<sub>1</sub> = 284.5 &minus; 239.2 = 45.3 kJ/kg</p>
<p class="eq">COP<sub>R</sub> = q<sub>L</sub>/w<sub>in</sub> = 143.7/45.3 = <strong>3.17</strong></p>
<p>Two checks worth doing out loud. The condenser must reject q<sub>H</sub> = h<sub>2</sub> &minus; h<sub>3</sub> = 189.0 kJ/kg, and 143.7 + 45.3 = 189.0 &#10003;, the first law closes, and COP<sub>HP</sub> for the same machine would be 189.0/45.3 = 4.17 = COP<sub>R</sub> + 1. Second, the saturation temperatures are &minus;18.8 &deg;C and 31.3 &deg;C, so the Carnot ceiling is 254.4/(304.5 &minus; 254.4) = 5.08. This cycle achieves <strong>62% of Carnot</strong>, which is a believable real number for a small hermetic machine.</p>
<p>The classic error is treating the expansion as isentropic. Do that and h<sub>4</sub> comes out at 88.9 kJ/kg, q<sub>L</sub> rises to 150.3, and the reported COP becomes 3.32, a 5% optimistic bias baked into every downstream calculation, all from one wrong idealization on a component that has no shaft.</p>`,
  },
  {
    id: "thermodynamics-q60",
    type: "mc",
    difficulty: 2,
    prompt: `<p>To make a chiller model "more rigorous", an engineer sets s<sub>4</sub> = s<sub>3</sub> across the expansion valve instead of h<sub>4</sub> = h<sub>3</sub>. What does that do to the predicted performance?</p>`,
    choices: [
      "It over-predicts the refrigeration effect, because the isentropic exit enthalpy is lower",
      "It under-predicts the refrigeration effect, because entropy always rises across a real valve",
      "It leaves COP unchanged, since the valve produces no shaft work under either idealization",
      "It over-predicts the compressor work, because the suction state shifts to a higher enthalpy",
    ],
    answer: 0,
    explanation: `<p>Isentropic expansion extracts work, so it drops the fluid to a <em>lower</em> enthalpy than an isenthalpic throttle does. In the R-134a example, h<sub>4</sub> falls from 95.5 to 88.9 kJ/kg, so the modelled refrigeration effect q<sub>L</sub> = h<sub>1</sub> &minus; h<sub>4</sub> grows from 143.7 to 150.3 kJ/kg and the reported COP climbs from 3.17 to 3.32, about <strong>5% optimistic</strong>, invisibly.</p>
<p>The physical error is assuming that "adiabatic" implies "isentropic". A valve is adiabatic and <em>violently</em> irreversible: it destroys pressure with no work output, generating entropy. There is no shaft, no impeller, nothing to take work out with. Constant enthalpy is what the energy balance actually gives you once you strike out q, w and &Delta;KE.</p>
<p>Ironically the "rigorous" model describes a real device that engineers genuinely want, a work-recovering <strong>expander</strong> in place of the valve. Transcritical CO<sub>2</sub> systems and large ammonia plants sometimes fit one, precisely to capture the flash losses this idealization pretends are free. But you have to actually install the machine; you cannot get its benefit by writing s<sub>4</sub> = s<sub>3</sub> in a spreadsheet.</p>`,
  },
  {
    id: "thermodynamics-q61",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A chiller evaporates at &minus;19 &deg;C (254 K) and condenses at 31 &deg;C (304 K). You can spend the same money either warming the evaporator by 5 K or cooling the condenser by 5 K. Which buys more COP, and why?</p>`,
    choices: [
      "Raise the evaporator 5 K: it cuts the lift and also raises T<sub>C</sub> in the numerator",
      "Cool the condenser 5 K: heat rejection dominates, so the condenser end always wins out",
      "They are exactly equivalent, since COP depends only on the lift T<sub>H</sub> &minus; T<sub>C</sub>",
      "Neither helps &#8212; Carnot COP is fixed by the refrigerant's properties, not by temperatures",
    ],
    answer: 0,
    explanation: `<p>Run all three numbers against COP<sub>R,max</sub> = T<sub>C</sub>/(T<sub>H</sub> &minus; T<sub>C</sub>):</p>
<p class="eq">Baseline: 254/(304 &minus; 254) = 5.08</p>
<p class="eq">Evaporator +5 K: 259/(304 &minus; 259) = 5.76&nbsp;&nbsp;(+13.3%)</p>
<p class="eq">Condenser &minus;5 K: 254/(299 &minus; 254) = 5.64&nbsp;&nbsp;(+11.1%)</p>
<p>Both shrink the lift by the same 5 K, so the <em>denominators</em> match, but raising the evaporator temperature also raises the <em>numerator</em> T<sub>C</sub>. That is the asymmetry, and it says: when in doubt, chase the cold end first.</p>
<p>Practically that means oversized evaporator coils, clean filters, adequate airflow, and not setting the chilled-water setpoint colder than the process actually needs. The rule of thumb from the field, roughly 2&#8211;3% of compressor power per kelvin of evaporator lift, falls straight out of this arithmetic, and a fouled evaporator that has slid 5 K low is a very common, very expensive fault.</p>
<p>Where the intuition fails: people assume "5 K is 5 K" because only the lift appears in the denominator. It appears in the numerator too. Note also that a heat pump's COP<sub>HP</sub> = T<sub>H</sub>/(T<sub>H</sub> &minus; T<sub>C</sub>) flips the asymmetry. There the numerator is the hot side, so lowering the delivery temperature (underfloor heating rather than radiators) is the analogous best move.</p>`,
  },
  {
    id: "thermodynamics-q62",
    type: "mc",
    difficulty: 3,
    prompt: `<p>Saturated liquid refrigerant leaves the condenser and passes through an expansion valve to a much lower evaporator pressure. Why does part of it turn to vapour on the way through?</p>`,
    choices: [
      "The valve does shaft work on the refrigerant, and that work boils part of the liquid",
      "Enthalpy is unchanged, and at the lower pressure that enthalpy lands inside the two-phase dome",
      "The pressure drop is fast enough to be isentropic, and isentropic expansion always vaporises",
      "The insulated valve holds the refrigerant as saturated liquid right up to the evaporator tubes",
    ],
    answer: 1,
    explanation: `<p>Throttling is isenthalpic. Saturated liquid at the condenser pressure has a higher enthalpy than saturated liquid at the evaporator pressure, for R-134a, h<sub>f</sub> = 95.5 kJ/kg at 800 kPa versus 27.1 kJ/kg at 140 kPa. Hold h fixed at 95.5 and drop to 140 kPa and the state is no longer on the liquid line at all; it sits <strong>inside the dome</strong> at x = (95.5 &minus; 27.1)/212.1 = 0.32.</p>
<p>The energy for that vaporisation is not supplied from outside. It is stolen from the fluid's own sensible heat, which is why the mixture emerges much colder, the entire trick of the expansion device, achieved with no heat removal and no moving parts.</p>
<p>The distractor worth dwelling on is "isentropic". A valve is adiabatic but wildly irreversible, so entropy <em>rises</em>; treating it as isentropic makes the exit colder and the modelled cooling capacity larger than reality. And note the cost of that 32% flash gas: it does no cooling in the evaporator (it has already boiled) yet still has to be pumped by the compressor. Reducing it, by subcooling the liquid, or by an economizer with a flash tank and vapour injection, is one of the standard ways to lift chiller capacity.</p>`,
  },
  {
    id: "thermodynamics-q63",
    type: "mc",
    difficulty: 2,
    prompt: `<p>Refrigeration systems are deliberately controlled so the refrigerant leaves the evaporator with 5&#8211;8 K of superheat rather than as exactly saturated vapour. What is the primary reason?</p>`,
    choices: [
      "Superheat raises the evaporating pressure, which lowers the compressor's pressure ratio",
      "Superheat raises the refrigeration effect enough to pay for itself in every system",
      "Superheat guarantees no liquid reaches the compressor, which would slug valves and rods",
      "Superheat lowers the discharge temperature by cooling the suction gas before the inlet",
    ],
    answer: 2,
    explanation: `<p>It is a <strong>hardware protection</strong> measure, not a thermodynamic optimisation. Liquid is incompressible; a slug of it arriving in a reciprocating compressor's clearance volume bends connecting rods, breaks valve plates and washes oil off the bearings. Scroll and screw machines survive better but still suffer. Superheat is the control engineer's guarantee that the last drop has boiled before the suction line, and it is exactly what a thermostatic or electronic expansion valve modulates on: it senses suction-line temperature and pressure and meters liquid to hold a superheat setpoint.</p>
<p>The trade-off runs the other way thermodynamically. Superheat does add a little refrigeration effect, but it also raises the discharge temperature (superheated suction gas enters the compressor hotter and leaves hotter still, threatening oil breakdown above ~120 &deg;C), and the superheated section of the evaporator has a much poorer heat-transfer coefficient than the boiling section, so that surface area is doing less work. Too much superheat starves the evaporator and costs capacity.</p>
<p>Hence the narrow window: enough to be certain of dry suction, not a kelvin more. Flooded evaporators, which run with zero superheat and a suction accumulator to catch liquid, exist precisely to get the heat-transfer benefit back, at the cost of extra hardware.</p>`,
  },
  {
    id: "thermodynamics-q64",
    type: "mc",
    difficulty: 2,
    prompt: `<p>Spray a can of compressed air for thirty seconds and the can itself becomes painfully cold, sometimes frosting up. What is chiefly responsible?</p>`,
    choices: [
      "Rapid expansion of the escaping jet chills the can walls by conduction from that jet",
      "Liquefied propellant boils to replace the vapour drawn off, taking latent heat from the can",
      "Joule&#8211;Thomson cooling in the nozzle is the whole effect, as for any throttled gas",
      "The remaining gas inside is compressed by the spring-loaded valve, which cools it",
    ],
    answer: 1,
    explanation: `<p>A "compressed air" duster is not compressed air. It holds a <strong>liquefied</strong> gas (typically HFC-152a or HFO-1234ze) with liquid and vapour in equilibrium. Draw off vapour and the pressure would fall, so liquid boils to restore saturation, and the latent heat for that boiling comes out of the liquid and the can wall. The can is an evaporator, exactly like the one in your fridge, and it cools to whatever saturation temperature matches the pressure it can hold.</p>
<p>That is why the effect is so much stronger than a genuine gas throttle. Joule&#8211;Thomson cooling of the escaping jet is real but small and mostly leaves with the jet; latent heat of vaporisation is 200&#8211;300 kJ/kg and stays behind in the can. It is also why the can frosts on the outside. The wall drops below the room's dew point, then below 0 &deg;C, and why performance collapses in long bursts: once the can chills, its saturation pressure drops and the spray goes weak. Pause and it warms back up.</p>
<p>Same physics as the fridge, the propane cylinder that ices up when you draw hard on it, and a sweating LPG tank on a hot day. It is also why the warning label says not to invert the can: tipping it delivers <em>liquid</em>, which flashes on whatever it lands on and causes frostbite.</p>`,
  },
];

export default extra;
