import type { Question } from "../types";

// Additional question bank for this topic (merged after the base questions
// in content/index.ts). Authored per-question, no generated templates.
//
// Figures live here as well as in the base file. SVG element ids are prefixed
// ht12-…ht19- so they never collide with the base file's ht1-…ht11-.
// Reminder: HTML <sub>/<sup> render as NOTHING inside SVG <text> — use
// <tspan baseline-shift="sub" font-size="9">.

const figTIMBond = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Bond line beats bulk conductivity</text>
  <rect x="60" y="62" width="140" height="30" fill="#fee2e2" stroke="#334155" stroke-width="1.5"/>
  <text x="130" y="82" text-anchor="middle" fill="#334155" font-size="12">die, 25 &times; 25 mm</text>
  <rect x="60" y="92" width="140" height="18" fill="#fde68a" stroke="#334155" stroke-width="1.5"/>
  <rect x="60" y="110" width="140" height="30" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <text x="130" y="130" text-anchor="middle" fill="#334155" font-size="12">copper base</text>
  <text x="130" y="160" text-anchor="middle" fill="#64748b" font-size="11">gap pad 0.20 mm, k = 3</text>
  <text x="130" y="178" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">R = 0.107 K/W</text>
  <rect x="260" y="62" width="140" height="30" fill="#fee2e2" stroke="#334155" stroke-width="1.5"/>
  <text x="330" y="82" text-anchor="middle" fill="#334155" font-size="12">die, 25 &times; 25 mm</text>
  <rect x="260" y="92" width="140" height="6" fill="#fde68a" stroke="#334155" stroke-width="1.2"/>
  <rect x="260" y="98" width="140" height="30" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <text x="330" y="118" text-anchor="middle" fill="#334155" font-size="12">copper base</text>
  <text x="330" y="160" text-anchor="middle" fill="#64748b" font-size="11">grease 0.05 mm, k = 1</text>
  <text x="330" y="178" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">R = 0.080 K/W</text>
  <line x1="212" y1="92" x2="212" y2="110" stroke="#64748b" stroke-width="1"/>
  <line x1="208" y1="92" x2="216" y2="92" stroke="#64748b" stroke-width="1"/>
  <line x1="208" y1="110" x2="216" y2="110" stroke="#64748b" stroke-width="1"/>
  <line x1="412" y1="92" x2="412" y2="98" stroke="#64748b" stroke-width="1"/>
  <line x1="408" y1="92" x2="416" y2="92" stroke="#64748b" stroke-width="1"/>
  <line x1="408" y1="98" x2="416" y2="98" stroke="#64748b" stroke-width="1"/>
  <text x="228" y="106" fill="#64748b" font-size="10">4&times;</text>
  <text x="424" y="98" fill="#64748b" font-size="10">1&times;</text>
  <text x="230" y="212" text-anchor="middle" fill="#334155" font-size="12">3&times; lower k wins, because the line is 4&times; thinner</text>
  <text x="230" y="234" text-anchor="middle" fill="#64748b" font-size="11">R = (bond line)/(k &middot; A): thickness is the lever, not the datasheet k</text>
</svg>`;

const figSpread = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ht13-flux" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Spreading: a small die feeding a large base</text>
  <rect x="205" y="60" width="50" height="26" fill="#fee2e2" stroke="#334155" stroke-width="1.5"/>
  <text x="230" y="78" text-anchor="middle" fill="#334155" font-size="12">die</text>
  <text x="230" y="52" text-anchor="middle" fill="#64748b" font-size="11">10 &times; 10 mm</text>
  <rect x="60" y="86" width="340" height="42" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <text x="110" y="112" fill="#334155" font-size="12">aluminium base 100 &times; 100 &times; 5 mm</text>
  <line x1="212" y1="88" x2="150" y2="124" stroke="#dc2626" stroke-width="1.6" marker-end="url(#ht13-flux)"/>
  <line x1="220" y1="88" x2="196" y2="124" stroke="#dc2626" stroke-width="1.6" marker-end="url(#ht13-flux)"/>
  <line x1="230" y1="88" x2="230" y2="124" stroke="#dc2626" stroke-width="1.6" marker-end="url(#ht13-flux)"/>
  <line x1="240" y1="88" x2="264" y2="124" stroke="#dc2626" stroke-width="1.6" marker-end="url(#ht13-flux)"/>
  <line x1="248" y1="88" x2="310" y2="124" stroke="#dc2626" stroke-width="1.6" marker-end="url(#ht13-flux)"/>
  <rect x="205" y="86" width="50" height="42" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5 3"/>
  <text x="230" y="152" text-anchor="middle" fill="#dc2626" font-size="11">footprint bound</text>
  <text x="230" y="168" text-anchor="middle" fill="#dc2626" font-size="11">L/kA = 0.278 K/W</text>
  <text x="90" y="152" fill="#1d4ed8" font-size="11">full-area bound</text>
  <text x="90" y="168" fill="#1d4ed8" font-size="11">L/kA = 0.0028 K/W</text>
  <line x1="60" y1="134" x2="400" y2="134" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="5 3"/>
  <text x="230" y="200" text-anchor="middle" fill="#334155" font-size="12">the truth is between them: roughly 0.04 &ndash; 0.08 K/W</text>
  <text x="230" y="224" text-anchor="middle" fill="#64748b" font-size="11">thicker or higher-k base, or a bigger footprint, closes the gap</text>
</svg>`;

const figVias = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ht14-heat" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Thermal vias under a QFN pad</text>
  <rect x="140" y="46" width="180" height="26" fill="#334155" opacity="0.85"/>
  <text x="230" y="64" text-anchor="middle" fill="#ffffff" font-size="12">QFN body</text>
  <rect x="160" y="72" width="140" height="10" fill="#f59e0b" stroke="#334155" stroke-width="1"/>
  <text x="322" y="81" fill="#64748b" font-size="11">thermal pad</text>
  <rect x="60" y="82" width="340" height="60" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <text x="76" y="108" fill="#64748b" font-size="11">FR4 1.6 mm</text>
  <text x="76" y="126" fill="#64748b" font-size="11">k = 0.3</text>
  <rect x="166" y="82" width="7" height="60" fill="#f59e0b"/>
  <rect x="186" y="82" width="7" height="60" fill="#f59e0b"/>
  <rect x="206" y="82" width="7" height="60" fill="#f59e0b"/>
  <rect x="226" y="82" width="7" height="60" fill="#f59e0b"/>
  <rect x="246" y="82" width="7" height="60" fill="#f59e0b"/>
  <rect x="266" y="82" width="7" height="60" fill="#f59e0b"/>
  <rect x="286" y="82" width="7" height="60" fill="#f59e0b"/>
  <rect x="60" y="142" width="340" height="10" fill="#f59e0b" stroke="#334155" stroke-width="1"/>
  <text x="230" y="170" text-anchor="middle" fill="#64748b" font-size="11">ground plane / spreader</text>
  <line x1="230" y1="86" x2="230" y2="136" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ht14-heat)"/>
  <text x="230" y="216" text-anchor="middle" fill="#dc2626" font-size="11">heat leaves through the vias, not the laminate</text>
  <text x="230" y="238" text-anchor="middle" fill="#1d4ed8" font-size="11">one 0.30 mm via with 25 &mu;m plating &asymp; 185 K/W</text>
</svg>`;

const figNTU = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ht15-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Counterflow effectiveness versus NTU</text>
  <line x1="80" y1="200" x2="424" y2="200" stroke="#64748b" stroke-width="1.5" marker-end="url(#ht15-ax)"/>
  <line x1="80" y1="200" x2="80" y2="46" stroke="#64748b" stroke-width="1.5" marker-end="url(#ht15-ax)"/>
  <text x="250" y="238" text-anchor="middle" fill="#64748b" font-size="11">NTU = UA/C<tspan baseline-shift="sub" font-size="8">min</tspan></text>
  <text x="52" y="128" text-anchor="middle" fill="#64748b" font-size="11">&epsilon;</text>
  <polyline points="80,200.0 106,153.8 131,122.9 157,102.2 182,88.3 208,78.9 234,72.7 259,68.5 285,65.7 310,63.8 336,62.6 362,61.7 387,61.2" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <polyline points="80,200.0 106,157.0 131,130.6 157,112.9 182,100.6 208,91.6 234,84.8 259,79.7 285,75.7 310,72.6 336,70.2 362,68.2 387,66.7" fill="none" stroke="#334155" stroke-width="2.5"/>
  <polyline points="80,200.0 106,160.0 131,137.8 157,123.6 182,113.8 208,106.7 234,101.2 259,96.8 285,93.3 310,90.4 336,88.0 362,85.9 387,84.1" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <text x="392" y="58" fill="#1d4ed8" font-size="11">C<tspan baseline-shift="sub" font-size="8">r</tspan> = 0</text>
  <text x="392" y="72" fill="#334155" font-size="11">C<tspan baseline-shift="sub" font-size="8">r</tspan> = 0.5</text>
  <text x="392" y="88" fill="#dc2626" font-size="11">C<tspan baseline-shift="sub" font-size="8">r</tspan> = 1</text>
  <circle cx="272" cy="77.6" r="4.5" fill="#334155"/>
  <text x="268" y="66" text-anchor="middle" fill="#334155" font-size="11">read &epsilon; here</text>
  <line x1="272" y1="200" x2="272" y2="82" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="80" y1="200" x2="80" y2="206" stroke="#64748b" stroke-width="1"/>
  <line x1="144" y1="200" x2="144" y2="206" stroke="#64748b" stroke-width="1"/>
  <line x1="208" y1="200" x2="208" y2="206" stroke="#64748b" stroke-width="1"/>
  <line x1="272" y1="200" x2="272" y2="206" stroke="#64748b" stroke-width="1"/>
  <line x1="336" y1="200" x2="336" y2="206" stroke="#64748b" stroke-width="1"/>
  <line x1="400" y1="200" x2="400" y2="206" stroke="#64748b" stroke-width="1"/>
  <text x="80" y="218" text-anchor="middle" fill="#64748b" font-size="10">0</text>
  <text x="144" y="218" text-anchor="middle" fill="#64748b" font-size="10">1</text>
  <text x="208" y="218" text-anchor="middle" fill="#64748b" font-size="10">2</text>
  <text x="272" y="218" text-anchor="middle" fill="#64748b" font-size="10">3</text>
  <text x="336" y="218" text-anchor="middle" fill="#64748b" font-size="10">4</text>
  <text x="400" y="218" text-anchor="middle" fill="#64748b" font-size="10">5</text>
  <text x="70" y="204" text-anchor="end" fill="#64748b" font-size="10">0</text>
  <text x="70" y="134" text-anchor="end" fill="#64748b" font-size="10">0.5</text>
  <text x="70" y="64" text-anchor="end" fill="#64748b" font-size="10">1.0</text>
</svg>`;

const figWallStack = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ht16-heat" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Wall stack, area-normalised resistances</text>
  <rect x="110" y="56" width="26" height="110" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="136" y="56" width="150" height="110" fill="#fef3c7" stroke="#334155" stroke-width="1.5"/>
  <rect x="286" y="56" width="20" height="110" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="86" y1="56" x2="86" y2="166" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="5 3"/>
  <line x1="330" y1="56" x2="330" y2="166" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="5 3"/>
  <text x="123" y="182" text-anchor="middle" fill="#64748b" font-size="10">layer 1</text>
  <text x="211" y="182" text-anchor="middle" fill="#64748b" font-size="10">insulation</text>
  <text x="296" y="182" text-anchor="middle" fill="#64748b" font-size="10">layer 2</text>
  <text x="86" y="182" text-anchor="middle" fill="#1d4ed8" font-size="10">film</text>
  <text x="330" y="182" text-anchor="middle" fill="#1d4ed8" font-size="10">film</text>
  <text x="86" y="200" text-anchor="middle" fill="#334155" font-size="10">0.10</text>
  <text x="123" y="200" text-anchor="middle" fill="#334155" font-size="10">0.025</text>
  <text x="211" y="200" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="11">1.25</text>
  <text x="296" y="200" text-anchor="middle" fill="#334155" font-size="10">0.040</text>
  <text x="330" y="200" text-anchor="middle" fill="#334155" font-size="10">&mdash;</text>
  <text x="230" y="220" text-anchor="middle" fill="#64748b" font-size="11">m&sup2;K/W each; total R&Prime; = 1.415 m&sup2;K/W</text>
  <line x1="30" y1="106" x2="80" y2="106" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ht16-heat)"/>
  <text x="30" y="92" fill="#dc2626" font-size="11">inside 20 K warmer</text>
  <line x1="336" y1="106" x2="400" y2="106" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ht16-heat)"/>
  <text x="360" y="92" fill="#dc2626" font-size="11">outside</text>
  <text x="230" y="242" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">q&Prime; = &Delta;T / &Sigma;R&Prime; (add the four layers first)</text>
</svg>`;

const figShield = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ht17-q" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">One low-emissivity shield between two plates</text>
  <rect x="70" y="52" width="18" height="130" fill="#fee2e2" stroke="#334155" stroke-width="1.5"/>
  <rect x="372" y="52" width="18" height="130" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="224" y="52" width="10" height="130" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5"/>
  <text x="79" y="200" text-anchor="middle" fill="#334155" font-size="11">500 K</text>
  <text x="79" y="216" text-anchor="middle" fill="#64748b" font-size="11">&epsilon; = 0.8</text>
  <text x="381" y="200" text-anchor="middle" fill="#334155" font-size="11">300 K</text>
  <text x="381" y="216" text-anchor="middle" fill="#64748b" font-size="11">&epsilon; = 0.8</text>
  <text x="229" y="200" text-anchor="middle" fill="#334155" font-size="11">shield</text>
  <text x="229" y="216" text-anchor="middle" fill="#64748b" font-size="11">&epsilon; = 0.05</text>
  <line x1="94" y1="86" x2="216" y2="86" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ht17-q)"/>
  <line x1="242" y1="86" x2="364" y2="86" stroke="#dc2626" stroke-width="1.2" marker-end="url(#ht17-q)"/>
  <text x="158" y="74" text-anchor="middle" fill="#dc2626" font-size="10">without shield 2 056 W/m&sup2;</text>
  <text x="303" y="74" text-anchor="middle" fill="#dc2626" font-size="10">with shield q&Prime; = ?</text>
  <line x1="94" y1="150" x2="216" y2="150" stroke="#64748b" stroke-width="1"/>
  <line x1="242" y1="150" x2="364" y2="150" stroke="#64748b" stroke-width="1"/>
  <text x="155" y="166" text-anchor="middle" fill="#64748b" font-size="10">1/&epsilon;&#8321; + 1/&epsilon;&#8323; &minus; 1 = 20.25</text>
  <text x="303" y="166" text-anchor="middle" fill="#64748b" font-size="10">1/&epsilon;&#8323; + 1/&epsilon;&#8322; &minus; 1 = 20.25</text>
  <text x="230" y="240" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">27&times; reduction from one foil &mdash; this is why MLI works</text>
</svg>`;

const figBL = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ht18-flow" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Boundary layer growth over a flat plate</text>
  <line x1="60" y1="170" x2="415" y2="170" stroke="#334155" stroke-width="3"/>
  <line x1="66" y1="180" x2="76" y2="170" stroke="#64748b" stroke-width="1"/>
  <line x1="106" y1="180" x2="116" y2="170" stroke="#64748b" stroke-width="1"/>
  <line x1="146" y1="180" x2="156" y2="170" stroke="#64748b" stroke-width="1"/>
  <line x1="186" y1="180" x2="196" y2="170" stroke="#64748b" stroke-width="1"/>
  <line x1="226" y1="180" x2="236" y2="170" stroke="#64748b" stroke-width="1"/>
  <line x1="266" y1="180" x2="276" y2="170" stroke="#64748b" stroke-width="1"/>
  <line x1="306" y1="180" x2="316" y2="170" stroke="#64748b" stroke-width="1"/>
  <line x1="346" y1="180" x2="356" y2="170" stroke="#64748b" stroke-width="1"/>
  <line x1="386" y1="180" x2="396" y2="170" stroke="#64748b" stroke-width="1"/>
  <polyline points="60,170 90,157.4 120,152.2 150,148.2 180,144.8 210,141.8 232,140" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <path d="M232,140 C246,136 258,132 270,128" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="5 3"/>
  <polyline points="270,128 310,119 350,110 410,100" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <line x1="232" y1="170" x2="232" y2="60" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="5 3"/>
  <text x="232" y="52" text-anchor="middle" fill="#dc2626" font-size="11">Re<tspan baseline-shift="sub" font-size="8">x</tspan> &asymp; 5 &times; 10&#8309;</text>
  <line x1="20" y1="80" x2="52" y2="80" stroke="#1d4ed8" stroke-width="2" marker-end="url(#ht18-flow)"/>
  <line x1="20" y1="104" x2="52" y2="104" stroke="#1d4ed8" stroke-width="2" marker-end="url(#ht18-flow)"/>
  <line x1="20" y1="128" x2="52" y2="128" stroke="#1d4ed8" stroke-width="2" marker-end="url(#ht18-flow)"/>
  <text x="20" y="68" fill="#1d4ed8" font-size="11">U<tspan baseline-shift="sub" font-size="8">&infin;</tspan></text>
  <text x="140" y="188" text-anchor="middle" fill="#64748b" font-size="11">laminar</text>
  <text x="340" y="188" text-anchor="middle" fill="#64748b" font-size="11">turbulent</text>
  <line x1="180" y1="170" x2="180" y2="144.8" stroke="#64748b" stroke-width="1"/>
  <text x="192" y="160" fill="#64748b" font-size="11">&delta;</text>
  <text x="230" y="216" text-anchor="middle" fill="#334155" font-size="12">h &prop; x<tspan baseline-shift="super" font-size="9">&minus;1/2</tspan> in the laminar region, then jumps at transition</text>
  <text x="230" y="238" text-anchor="middle" fill="#64748b" font-size="11">turbulent side: Nu = 0.037 Re<tspan baseline-shift="super" font-size="9">0.8</tspan> Pr<tspan baseline-shift="super" font-size="9">1/3</tspan>, so h &prop; V<tspan baseline-shift="super" font-size="9">0.8</tspan></text>
</svg>`;

const figPulse = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ht19-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="18" text-anchor="middle" font-weight="600" fill="#334155">Pulsed load: mass sets the peak, resistance sets the mean</text>
  <line x1="80" y1="56" x2="420" y2="56" stroke="#64748b" stroke-width="1"/>
  <rect x="80" y="34" width="5" height="22" fill="#dc2626"/>
  <rect x="146" y="34" width="5" height="22" fill="#dc2626"/>
  <rect x="212" y="34" width="5" height="22" fill="#dc2626"/>
  <rect x="278" y="34" width="5" height="22" fill="#dc2626"/>
  <rect x="344" y="34" width="5" height="22" fill="#dc2626"/>
  <text x="424" y="48" fill="#dc2626" font-size="10">P</text>
  <text x="230" y="30" text-anchor="middle" fill="#64748b" font-size="10">30 W for 10 s every 300 s (pulse width not to scale)</text>
  <line x1="80" y1="212" x2="424" y2="212" stroke="#64748b" stroke-width="1.5" marker-end="url(#ht19-ax)"/>
  <line x1="80" y1="212" x2="80" y2="66" stroke="#64748b" stroke-width="1.5" marker-end="url(#ht19-ax)"/>
  <text x="410" y="228" fill="#64748b" font-size="11">time</text>
  <text x="56" y="140" text-anchor="middle" fill="#64748b" font-size="11">&Delta;T</text>
  <polyline points="80,200.0 82,133.3 93,140.9 103,147.6 114,153.6 125,158.9 135,163.6 146,167.7 148,101.8 159,113.0 169,122.9 180,131.7 191,139.5 201,146.4 212,152.5 214,87.0 225,99.8 235,111.2 246,121.3 257,130.3 267,138.2 278,145.3 280,79.9 291,93.6 301,105.7 312,116.5 323,126.0 333,134.4 344,141.9 346,76.6 357,90.7 367,103.1 378,114.1 389,123.9 399,132.6 410,140.2" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <line x1="80" y1="110" x2="415" y2="110" stroke="#334155" stroke-width="1" stroke-dasharray="5 4"/>
  <text x="330" y="104" fill="#334155" font-size="11">4 K from average power</text>
  <line x1="352" y1="76.6" x2="352" y2="110" stroke="#dc2626" stroke-width="1"/>
  <line x1="348" y1="76.6" x2="356" y2="76.6" stroke="#dc2626" stroke-width="1"/>
  <text x="360" y="72" fill="#dc2626" font-size="11">+3 K per burst</text>
  <text x="230" y="242" text-anchor="middle" fill="#64748b" font-size="11">burst rise = Qt/C, so thermal mass &mdash; not fin area &mdash; holds the peak down</text>
</svg>`;

const extra: Question[] = [
  {
    id: "heat-transfer-q25",
    type: "mc",
    difficulty: 1,
    prompt: `<p>An electronics module has a copper base, a thin interface material, and natural convection to air. A quick model gives R<sub>Cu</sub> = 0.02 K/W, R<sub>TIM</sub> = 0.35 K/W and R<sub>air</sub> = 6.0 K/W. Which improvement should be investigated first?</p>`,
    choices: [
      `Halve the copper resistance by switching the base to silver.`,
      `Make the interface ten times thinner and leave the airflow alone.`,
      `Cut the air-side resistance, which owns 94% of the total.`,
      `Thicken the copper base, since the three terms are comparable.`,
    ],
    answer: 2,
    explanation: `<p>Total is 6.37 K/W and the air side is 6.0 of it, 94% of the rise. A perfect copper base buys 0.3% of the budget, and silver's k of 430 against copper's 400 is a rounding error at ten times the price.</p><p>The interface is worth more at 5.5%, but a ten-times-thinner bond line is not achievable on a real joint, and even perfect it caps out at 0.35 K/W.</p><p>Everything useful is on the air side: forced convection instead of natural, more effective fin area, better spacing, a ducted path, a lower local ambient. Rank the resistances before choosing a lever, because your possible gain is bounded by the size of the term you attack.</p>`,
  },
  {
    id: "heat-transfer-q26",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>An IC dissipates 8 W. In the installed product its junction-to-ambient thermal resistance is 12 K/W and the ambient inside the enclosure is 40 &deg;C. Estimate the junction temperature in &deg;C.</p>`,
    answer: 136,
    unit: "°C",
    explanation: `<p class="eq">&Delta;T = P R<sub>&theta;JA</sub> = 8(12) = 96 K, &nbsp; T<sub>j</sub> = 40 + 96 = <strong>136 &deg;C</strong></p><p>A kelvin rise adds directly to a Celsius temperature, because it is a difference.</p><p>Whether 136 &deg;C is acceptable is the real question. Against a 150 &deg;C rating that is 14 K of margin, and the 40 &deg;C is <em>internal</em> ambient that rises with everything else in the box. R<sub>&theta;JA</sub> is not a package property either: 12 K/W implies a particular board copper area and airflow, and a two-layer board could give 20 K/W and 200 &deg;C.</p>`,
  },
  {
    id: "heat-transfer-q27",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A thermal design packs a paraffin phase-change material around a battery module that sees 90-second discharge pulses. What does it actually buy you?</p>`,
    choices: [
      `It removes the need to reject the pulse energy to ambient later.`,
      `It absorbs latent heat while holding near its melt temperature.`,
      `It lowers the module's steady-state resistance to ambient air.`,
      `It raises the thermal conductivity of the pack by roughly 10 times.`,
    ],
    answer: 1,
    explanation: `<p>Paraffin absorbs roughly 200 kJ/kg of latent heat at a nearly constant melt temperature, so during a pulse the module temperature is clamped near that point instead of climbing linearly. For a 90-second, 500 W pulse that is 45 kJ, which about 0.25 kg of PCM can swallow with almost no temperature rise.</p><p>It is a <strong>capacitor, not a resistor</strong>. The energy is still in the pack and must leave during the rest period; a PCM that never fully re-freezes has no capacity left for the next pulse, which is the failure mode you see on the third or fourth cycle of a duty-cycle test. It does not change the steady-state path to ambient at all.</p><p>Paraffin's own conductivity is poor (about 0.2 W/m&middot;K), which is why real designs use graphite-loaded or foam-matrix PCM. Otherwise the heat cannot reach the material fast enough to use it. Melt point selection, containment of the ~10% volume change, flammability and cycling stability are the other four things a reviewer will ask about.</p>`,
  },
  {
    id: "heat-transfer-q28",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>Aluminium has k = 205 W/(m&middot;K), &rho; = 2700 kg/m<sup>3</sup> and c = 900 J/(kg&middot;K). Estimate its thermal diffusivity &alpha; = k/(&rho;c), in mm<sup>2</sup>/s.</p>`,
    answer: 84.4,
    unit: "mm2/s",
    tolerance: 0.03,
    explanation: `<p class="eq">&alpha; = k/(&rho;c) = 205/(2700 &times; 900) = 8.44 &times; 10<sup>&minus;5</sup> m<sup>2</sup>/s = <strong>84.4 mm<sup>2</sup>/s</strong></p><p>1 m<sup>2</sup>/s = 10<sup>6</sup> mm<sup>2</sup>/s, so the exponent moves by six, not three.</p><p>What it buys you is diffusion time, t &asymp; L<sup>2</sup>/&alpha;. A 5 mm aluminium section equilibrates in 0.30 s; an epoxy at &alpha; &asymp; 0.15 mm<sup>2</sup>/s takes 170 s. That is why an aluminium fixture tracks its heater almost instantly while a plastic housing lags a test profile by minutes.</p>`,
  },
  {
    id: "heat-transfer-q29",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A 20 W device sits on a 3 mm aluminium spreader (k = 180 W/m&middot;K) with a 40 &times; 40 mm footprint. Above it are an interface material at 0.300 K/W and a convection path at 1.000 K/W. What is the total temperature rise across the stack, in K?</p>`,
    answer: 26.2,
    unit: "K",
    tolerance: 0.03,
    explanation: `<p>Get the conduction term from the geometry:</p><p class="eq">R<sub>cond</sub> = L/(kA) = 0.003/(180 &times; 1.6&times;10<sup>&minus;3</sup>) = 0.0104 K/W</p><p class="eq">&Delta;T = Q(R<sub>cond</sub> + 0.300 + 1.000) = 20(1.310) = <strong>26.2 K</strong></p><p>The split is convection 20.0 K, interface 6.0 K, aluminium 0.21 K. The metal is 0.8% of the problem, so a thicker or fancier spreader is wasted effort. The interface is 23%, and that is worth engineering.</p>`,
  },
  {
    id: "heat-transfer-q30",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A design memo assumes h = 200 W/m<sup>2</sup>&middot;K for still air over a vertical enclosure wall of 0.05 m<sup>2</sup>, dissipating 20 W. What does that assumption do to the predicted surface temperature rise?</p>`,
    choices: [
      `Nothing much: h only shifts the transient, not the steady rise.`,
      `It overstates the rise, because a large h means a large resistance.`,
      `It is roughly right; 200 is a normal value for a vertical plate.`,
      `It underpredicts the rise by about 40 times: still air is nearer 5.`,
    ],
    answer: 3,
    explanation: `<p>Still air over a vertical plate gives h &asymp; 5&ndash;8 W/m<sup>2</sup>&middot;K; 200 belongs to well-ducted forced air or a modest liquid flow. Work both:</p><p class="eq">h = 200: R = 1/(hA) = 1/(200 &times; 0.05) = 0.10 K/W &rarr; &Delta;T = 2 K</p><p class="eq">h = 5: R = 1/(5 &times; 0.05) = 4.0 K/W &rarr; &Delta;T = 80 K</p><p>The memo predicts a wall 2 K above ambient; the wall will actually sit about 80 K above it. That is not a refinement, it is the difference between a product and a fire hazard, and it comes from a single unexamined number.</p><p>The lesson is that h is the output of a fluid problem, not a property you look up for "air". Always state the regime (still or forced), the orientation, the length scale and the &Delta;T. And add radiation: at this temperature a painted surface contributes h<sub>rad</sub> &asymp; 7 W/m<sup>2</sup>&middot;K, so the combined coefficient is about 12 and the honest steady rise is 20/(12 &times; 0.05) = 33 K rather than 80. Strictly you then have to iterate, because natural convection scales as &Delta;T<sup>1/4</sup> and h<sub>conv</sub> falls a little as the wall cools; two passes land in the mid 30s. Either way the memo's 2 K is not in the same conversation.</p>`,
  },
  {
    id: "heat-transfer-q31",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>An aluminium block has &rho; = 2700 kg/m<sup>3</sup>, V = 1.0 &times; 10<sup>&minus;4</sup> m<sup>3</sup>, c = 900 J/(kg&middot;K), exposed area A = 0.050 m<sup>2</sup> and h = 25 W/(m<sup>2</sup>&middot;K). Estimate the lumped thermal time constant, in s.</p>`,
    answer: 194,
    unit: "s",
    tolerance: 0.03,
    explanation: `<p>&tau; is just RC.</p><p class="eq">C = &rho;Vc = 243 J/K, &nbsp; hA = 1.25 W/K</p><p class="eq">&tau; = C/(hA) = 243/1.25 = <strong>194 s</strong></p><p>One time constant gets 63% of the step; 3&tau; is about 10 minutes and lands within 5% of steady state. That is the soak time to quote before anyone takes data.</p>`,
  },
  {
    id: "heat-transfer-q32",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A transient estimate treats a metal sensor body as a single uniform temperature. Which check makes that lumped-capacitance assumption credible?</p>`,
    choices: [
      `Bi = hL<sub>c</sub>/k is below about 0.1, so internal gradients stay small.`,
      `The Fourier number stays exactly zero throughout the transient.`,
      `The surface is polished, so internal conduction can be neglected.`,
      `The body is heavy, which makes internal gradients impossible.`,
    ],
    answer: 0,
    explanation: `<p>Lumped capacitance is a statement about <em>gradients</em>, not about speed. Biot compares internal conduction resistance L<sub>c</sub>/k with external convection resistance 1/h, and below about 0.1 the inside equalises much faster than the surface exchanges heat.</p><p>Mass is irrelevant to the test, which is what makes the heavy-body option tempting and wrong. A 10 kg stainless block quenched in water has Bi &gt; 1 and 300 K between surface and core; a 2 g plastic bead in still air also fails, because k is tiny.</p><p>Fourier number says how far the transient has <em>progressed</em>. It is the time coordinate, not the validity criterion.</p>`,
  },
  {
    id: "heat-transfer-q33",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A 1 m length of pipe carries insulation from inner radius r<sub>1</sub> = 0.020 m to outer radius r<sub>2</sub> = 0.040 m, with k = 0.040 W/(m&middot;K). Estimate the conduction resistance of the insulation, in K/W.</p>`,
    answer: 2.76,
    unit: "K/W",
    tolerance: 0.03,
    explanation: `<p>Radial conduction cannot use L/kA, because the flow area 2&pi;rL grows with radius. Integrating gives a logarithm:</p><p class="eq">R<sub>cyl</sub> = ln(r<sub>2</sub>/r<sub>1</sub>)/(2&pi;kL)</p><p class="eq">R = ln(0.040/0.020)/(2&pi; &times; 0.040 &times; 1) = 0.693/0.2513 = <strong>2.76 K/W</strong></p><p>Compare with the plane-wall shortcut. Using the inner area, A = 2&pi;(0.020)(1) = 0.126 m<sup>2</sup> and L = 0.020 m gives R = 0.020/(0.040 &times; 0.126) = 3.98 K/W, 44% too high. Using the outer area gives 1.99 K/W, 28% too low. The log-mean area is what reconciles them.</p><p>Two follow-ups an intervio follow. Doubling the radius again (0.040 &rarr; 0.080) adds another 2.76 K/W, so insulation has strictly diminishing returns on a cylinder. Every doubling costs the same resistance but four times the material volume. Second, do not forget the outside film: at h = 10 the outer convection is 1/(10 &times; 2&pi; &times; 0.040) = 0.40 K/W, which is only 13% of the total here, so this insulation is doing its job.</p>`,
  },
  {
    id: "heat-transfer-q34",
    type: "mc",
    difficulty: 2,
    prompt: `<p>You know that adding insulation to a thin wire can increase its heat loss. A colleague now proposes leaving a 100 mm diameter steam pipe bare on the same reasoning, with mineral wool at k = 0.040 W/m&middot;K and h = 10 W/m<sup>2</sup>&middot;K outside. Is that right?</p>`,
    choices: [
      `Yes: the critical-radius effect applies to any cylinder regardless of size.`,
      `Yes, but only until the wool is thicker than the pipe's own wall.`,
      `No: r<sub>crit</sub> = k/h = 4 mm, far inside the 50 mm pipe, so wool helps.`,
      `No: the effect vanishes because steam pipes carry a phase-change fluid.`,
    ],
    answer: 2,
    explanation: `<p>The critical radius is r<sub>crit</sub> = k/h = 0.040/10 = 0.004 m = 4 mm. The pipe's outer radius is already 50 mm, so it sits far out on the falling side of the curve: every millimetre of wool strictly reduces heat loss.</p><p>The effect is real but it is a <em>small-cylinder</em> phenomenon, and it depends on both numbers. It bites when the bare radius is smaller than k/h, which needs a thin object, a relatively conductive covering, or a low h. A 3 mm wire with PVC (k = 0.15) in still air (h = 10) gives r<sub>crit</sub> = 15 mm, ten times the wire radius, so insulation there genuinely raises the loss.</p><p>The two wrong "yes" answers generalise a special case, which is exactly the failure mode this question is testing. The last option invents a mechanism: the fluid inside sets the inner boundary temperature and has nothing to do with where the area-versus-conduction balance falls.</p><p>Rule of thumb: compute k/h before you argue about it. For any real lagging material on any real pipe, r<sub>crit</sub> is a few millimetres and the argument never applies.</p>`,
  },
  {
    id: "heat-transfer-q35",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>An oil cooler must remove 40 kW. The oil flows at 0.60 kg/s with c<sub>p</sub> = 2100 J/(kg&middot;K) and enters at 110 &deg;C; cooling water flows at 0.40 kg/s with c<sub>p</sub> = 4180 J/(kg&middot;K) and enters at 25 &deg;C. What oil outlet temperature does that duty imply, in &deg;C?</p>`,
    answer: 78.3,
    unit: "&deg;C",
    tolerance: 0.03,
    explanation: `<p>Before any LMTD or effectiveness work, close the energy balance on each stream separately. Each stream's temperature swing is set by <em>its own</em> capacity rate C = &#7745;c<sub>p</sub>:</p><p class="eq">C<sub>oil</sub> = 0.60(2100) = 1260 W/K, &nbsp; C<sub>water</sub> = 0.40(4180) = 1672 W/K</p><p class="eq">T<sub>oil,out</sub> = 110 &minus; Q/C<sub>oil</sub> = 110 &minus; 40 000/1260 = 110 &minus; 31.7 = <strong>78.3 &deg;C</strong></p><p>The water, on the larger capacity rate, moves less for the same duty: 25 + 40 000/1672 = 48.9 &deg;C. That asymmetry is the whole point. Oil's c<sub>p</sub> is half water's, so per kilogram per kilowatt the oil always swings further, which is why oil is usually the stream that sets the pinch.</p><p>Assuming both streams share a temperature change means dividing the duty by the wrong C, which gives 110 &minus; 40 000/1672 = 86.1 &deg;C, nearly 8 K optimistic, and optimistic in the direction that lets an undersized cooler pass review.</p><p>Now sanity-check that the duty is even reachable. C<sub>min</sub> is the oil at 1260 W/K, so the most this pairing could ever transfer is Q<sub>max</sub> = C<sub>min</sub>(110 &minus; 25) = 107 kW, and the requested 40 kW is an effectiveness of 0.37, modest, so a reasonable exchanger will do it. In counterflow the terminal differences come out 110 &minus; 48.9 = 61.1 K and 78.3 &minus; 25 = 53.3 K, both comfortably positive, so there is no temperature cross to design around.</p>`,
  },
  {
    id: "heat-transfer-q36",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A heat exchanger must transfer 15 kW with a log-mean temperature difference of 30 K. What UA value does it need, in W/K?</p>`,
    answer: 500,
    unit: "W/K",
    explanation: `<p class="eq">UA = Q/&Delta;T<sub>lm</sub> = 15 000/30 = <strong>500 W/K</strong></p><p>UA covers both films, the wall and any fouling, so the same duty can be met many ways. A plate unit at U = 3000 needs 0.17 m<sup>2</sup>; a gas-to-gas unit at U = 30 needs 17 m<sup>2</sup>.</p><p>Anything other than pure counterflow makes the driving force F&middot;&Delta;T<sub>lm</sub>, and F = 0.85 pushes this to 588 W/K.</p>`,
  },
  {
    id: "heat-transfer-q37",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A heat exchanger wall has h<sub>i</sub> = 1000 W/(m<sup>2</sup>&middot;K), h<sub>o</sub> = 2000 W/(m<sup>2</sup>&middot;K), wall thickness 0.001 m with k = 16 W/(m&middot;K), and a fouling allowance R<sub>f</sub> = 0.0005 m<sup>2</sup>K/W. Estimate U based on flat-wall area, in W/(m<sup>2</sup>&middot;K).</p>`,
    answer: 485,
    unit: "W/m2K",
    tolerance: 0.03,
    explanation: `<p>Add area-normalised resistances in series, then invert:</p><p class="eq">1/U = 1/h<sub>i</sub> + L/k + R<sub>f</sub> + 1/h<sub>o</sub></p><p class="eq">1/U = 0.001000 + 0.0000625 + 0.000500 + 0.000500 = 0.0020625 m<sup>2</sup>K/W</p><p class="eq">U = 1/0.0020625 = <strong>485 W/(m<sup>2</sup>&middot;K)</strong></p><p>Read the shares: inside film 48%, outside film 24%, fouling 24%, wall metal 3%. Two conclusions follow immediately. Changing the wall from stainless (k = 16) to titanium or even copper cannot buy more than 3%, so the metallurgy argument is usually about corrosion, not heat transfer. And fouling already costs as much as the entire outside film. A cleaning schedule or a filter is worth more than any hardware change here.</p><p>The lever that <em>would</em> matter is the inside film: doubling h<sub>i</sub> to 2000 (higher velocity, turbulators) takes 1/U to 0.0015625 and U to 640 W/(m<sup>2</sup>&middot;K), a 32% gain. That is the bottleneck rule applied to an exchanger.</p>`,
  },
  {
    id: "heat-transfer-q38",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A counterflow exchanger has C<sub>min</sub> = 500 W/K, capacity ratio C<sub>r</sub> = 0.5 and UA = 1500 W/K. Compute the effectiveness &epsilon;.</p>`,
    figure: figNTU,
    answer: 0.874,
    tolerance: 0.03,
    explanation: `<p>First the number of transfer units:</p><p class="eq">NTU = UA/C<sub>min</sub> = 1500/500 = 3.00</p><p>Then the counterflow effectiveness relation:</p><p class="eq">&epsilon; = [1 &minus; e<sup>&minus;NTU(1&minus;C<sub>r</sub>)</sup>]/[1 &minus; C<sub>r</sub>e<sup>&minus;NTU(1&minus;C<sub>r</sub>)</sup>]</p><p class="eq">NTU(1 &minus; C<sub>r</sub>) = 1.5, e<sup>&minus;1.5</sup> = 0.2231</p><p class="eq">&epsilon; = (1 &minus; 0.2231)/(1 &minus; 0.5 &times; 0.2231) = 0.7769/0.8884 = <strong>0.874</strong></p><p>With T<sub>h,in</sub> = 90 &deg;C and T<sub>c,in</sub> = 20 &deg;C, Q = &epsilon;C<sub>min</sub>&Delta;T<sub>max</sub> = 0.874(500)(70) = 30.6 kW, so the hot stream (C = 500) leaves at 90 &minus; 30 605/500 = 28.8 &deg;C and the cold stream (C = 1000) leaves at 50.6 &deg;C.</p><p>Why use &epsilon;-NTU rather than LMTD here: LMTD needs the outlet temperatures, which is what you are solving for, so it forces iteration. And read the curve's shape before designing, going from NTU 1 to 2 lifts &epsilon; from 0.565 to 0.775, while going from 3 to 6 lifts it only from 0.874 to 0.975. Doubling the hardware for 10 points of effectiveness is a decision, not a default.</p>`,
  },
  {
    id: "heat-transfer-q39",
    type: "mc",
    difficulty: 3,
    prompt: `<p>An oil cooler underperforms. You double the cooling-water flow rate and the duty rises by only 15%. What does that tell you, and what should you change?</p>`,
    choices: [
      `The water film controls; add a second pump in parallel to raise flow again.`,
      `The oil-side film controls; raise oil velocity or add turbulators on that side.`,
      `The wall metal controls; specify copper tubes instead of stainless.`,
      `Nothing is wrong; duty rises as the square root of flow on both sides.`,
    ],
    answer: 1,
    explanation: `<p>On the water side, h &prop; V<sup>0.8</sup>, so doubling flow raises that film coefficient by 2<sup>0.8</sup> = 1.74&times;. If duty barely moved, the water film was never a significant share of 1/U, something else owns the resistance, and for a viscous oil at low Reynolds number that something is almost always the oil-side film.</p><p>Put numbers on it. Suppose 1/U = 1/h<sub>oil</sub> + 1/h<sub>water</sub> with h<sub>oil</sub> = 250 and h<sub>water</sub> = 3000: 1/U = 0.00400 + 0.00033, so water is 8% of the total and U = 231 W/m<sup>2</sup>&middot;K. Raising h<sub>water</sub> to 5200 takes U to 239, a change of 3.4%. Meanwhile doubling h<sub>oil</sub> to 500 takes U to 429, up 86%.</p><p>The fixes therefore live on the oil side: higher velocity (more passes, smaller tubes), turbulators or a plate geometry that trips the flow, a higher oil temperature to cut viscosity, or simply more area. Note the cost you avoided. More water flow means more pumping power (roughly V<sup>3</sup>) for a 15% return.</p><p>The generalisation is the useful part: <strong>if a change of the size you expected does not move the answer, you improved the wrong resistance.</strong> That is a diagnostic, not a disappointment.</p>`,
  },
  {
    id: "heat-transfer-q40",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A power module matched its thermal model on the bench. After vibration testing, junction temperature is 18 K higher at the same power. The screws are still at torque and the heat sink is unchanged. Which term is most suspicious?</p>`,
    choices: [
      `Bulk copper conduction through the heat sink base has degraded.`,
      `Radiation from the sink has fallen because the finish oxidised.`,
      `The die's specific heat changed, so it now stores less energy.`,
      `Interface resistance rose from TIM voiding, pump-out or lost wetting.`,
    ],
    answer: 3,
    explanation: `<p>18 K at, say, 60 W is 0.30 K/W of new resistance. Ask which element in the stack can plausibly change by that much without anything visibly moving. Bulk copper cannot. Its conductivity is a material constant and the geometry is unchanged. Radiation from a sink is worth a few percent of the total at these temperatures and could not supply 0.30 K/W. Specific heat is a transient quantity and has no effect at all on a steady-state temperature.</p><p>The interface can. Real contact happens at asperities, and a soft TIM under vibration and thermal cycling can pump out from the joint, crack, form voids or lose wetting on one face. Torque on the screws proves the clamp force, not the microscopic contact. A grease line can migrate out from under a perfectly clamped lid.</p><p>The investigation follows from that: tear down and photograph the wet-out pattern, measure the bond-line thickness, check for dry patches near the centre or edges, then rebuild with fresh TIM and controlled mounting and retest. If the resistance returns to the original value, you have your answer and the fix is a pump-out-resistant material (phase-change film or a cured gel) plus a bond line the assembly process can actually hold.</p>`,
  },
  {
    id: "heat-transfer-q41",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>After 300 thermal cycles, a 60 W module's junction temperature has risen 18 K at unchanged power, ambient and airflow. How much did the interface resistance increase, in K/W?</p>`,
    answer: 0.3,
    unit: "K/W",
    tolerance: 0.03,
    explanation: `<p>Everything else in the network is unchanged, so the whole extra rise sits on the new resistance:</p><p class="eq">&Delta;R = &Delta;T/Q = 18/60 = <strong>0.30 K/W</strong></p><p>On a typical stack of 0.35, 0.25 and 0.90 K/W, that means the interface term went from 0.25 to 0.55. It more than doubled while the total rose 20%.</p><p>Plausible for a gap pad? R = t/(kA), so on a 25 &times; 25 mm die at k = 3 W/m&middot;K it corresponds to about 0.56 mm of extra effective bond line, which dry-out voids over half the area would produce. Had the arithmetic demanded 5 mm you would be looking elsewhere.</p><p>18 K per 300 cycles on a product qualified for 3000 is a trajectory, not a fault. Fix the interface or the retention before the field does the extrapolation for you.</p>`,
  },
  {
    id: "heat-transfer-q42",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A 25 &times; 25 mm die is bonded with a 0.20 mm gap pad at k = 3 W/(m&middot;K). A grease at k = 1 W/(m&middot;K) in a 0.05 mm bond line is offered instead. At 60 W, how many kelvin does switching to the grease save?</p>`,
    figure: figTIMBond,
    answer: 1.6,
    unit: "K",
    tolerance: 0.03,
    explanation: `<p>Both are plane layers, so R = t/(kA) with A = 0.025<sup>2</sup> = 6.25 &times; 10<sup>&minus;4</sup> m<sup>2</sup>.</p><p class="eq">Pad: R = 0.00020/(3 &times; 6.25&times;10<sup>&minus;4</sup>) = 0.00020/0.001875 = 0.1067 K/W</p><p class="eq">Grease: R = 0.00005/(1 &times; 6.25&times;10<sup>&minus;4</sup>) = 0.00005/0.000625 = 0.0800 K/W</p><p class="eq">&Delta;T saved = Q&Delta;R = 60(0.1067 &minus; 0.0800) = 60(0.0267) = <strong>1.6 K</strong></p><p>The grease wins despite having <em>three times worse</em> conductivity, because its bond line is four times thinner. That is the whole lesson of interface selection: R scales linearly with thickness and only inversely with k, so a datasheet k is meaningless without the bond line the joint will actually achieve.</p><p>Now the engineering judgement. 1.6 K is a modest gain, so the decision turns on other factors: the grease needs a flat, well-clamped joint and can pump out over life, while the pad tolerates a variable gap and is cleaner to assemble. If the joint gap were 0.5 mm instead of 0.05, a sheet-metal chassis rather than a lapped lid, the grease would be unusable and the pad would be the only credible answer.</p>`,
  },
  {
    id: "heat-transfer-q43",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A bolted aluminium joint of 40 &times; 40 mm has a contact resistance of R&Prime;<sub>c</sub> = 1.0 &times; 10<sup>&minus;4</sup> m<sup>2</sup>K/W at its present preload, and doubling the preload halves it. If 200 W crosses the joint, how many kelvin does the extra preload save?</p>`,
    answer: 6.25,
    unit: "K",
    tolerance: 0.03,
    explanation: `<p>Contact resistance is quoted per unit area, so divide by the joint area A = 0.040<sup>2</sup> = 1.6 &times; 10<sup>&minus;3</sup> m<sup>2</sup>.</p><p class="eq">Present: R = 1.0&times;10<sup>&minus;4</sup>/1.6&times;10<sup>&minus;3</sup> = 0.0625 K/W</p><p class="eq">Doubled preload: R = 5.0&times;10<sup>&minus;5</sup>/1.6&times;10<sup>&minus;3</sup> = 0.03125 K/W</p><p class="eq">&Delta;T saved = 200(0.0625 &minus; 0.03125) = 200(0.03125) = <strong>6.25 K</strong></p><p>Free kelvins, in the sense that no new part is needed, but not free in engineering. Doubling preload means checking bolt stress, thread engagement, the aluminium's bearing strength under the washer, and creep relaxation of the aluminium at temperature, which can give the improvement back over months. It also means the joint is now sensitive to torque control on the line.</p><p>The physics behind the trend: real contact occurs at asperity peaks covering perhaps 1&ndash;2% of the nominal area, and pressure flattens them, so conductance rises roughly with contact pressure to the 0.5&ndash;1 power. That is also why surface flatness and finish matter as much as force, and why filling the remaining 98% with grease or a pad usually beats any amount of bolt torque.</p>`,
  },
  {
    id: "heat-transfer-q44",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A catalogue quotes a large total fin area, but on the sample the long thin fins measure close to ambient temperature near their tips. Which concept explains why that quoted area overstates performance?</p>`,
    choices: [
      `Thermal contact resistance between the fan hub and the sink base.`,
      `Fin efficiency: only part of the area sits near base temperature.`,
      `Radiation view factor between neighbouring fins in the array.`,
      `Latent heat storage in the aluminium as the fins warm up.`,
    ],
    answer: 1,
    explanation: `<p>A fin has to conduct heat outward while losing it sideways to the air, so its temperature decays from the base toward the tip. Fin efficiency &eta;<sub>f</sub> = tanh(mL)/(mL) is exactly the ratio of the real heat flow to the fictitious flow you would get if the whole fin sat at base temperature. Tips near ambient mean &eta;<sub>f</sub> is small, often 0.3&ndash;0.5 for the long thin fins that maximise catalogue area, so the effective area is &eta;<sub>f</sub>A<sub>f</sub>, not A<sub>f</sub>.</p><p>Radiation between adjacent fins is a genuine effect but a second-order one, and it mostly cancels since neighbouring fins are at similar temperatures. Contact resistance at the fan is not in the heat path at all, and aluminium has no latent heat below its melting point.</p><p>Two practical consequences. First, compare sinks by measured R<sub>SA</sub> at a stated airflow, never by quoted area. Second, the cure is to raise m = &radic;(2h/kt) rather than length: thicker fins, higher-k material, or more h so the array runs closer to base temperature. And check the flow. Cool tips with warm bases can also mean the air is simply not getting down the channel.</p>`,
  },
  {
    id: "heat-transfer-q45",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A fin array adds 0.080 m<sup>2</sup> of fin surface. Fin efficiency is 0.65, h = 30 W/(m<sup>2</sup>&middot;K), and the base-to-air temperature difference is 40 K. Estimate the heat removed by the fin area alone, in W.</p>`,
    answer: 62.4,
    unit: "W",
    tolerance: 0.03,
    explanation: `<p>Use the effective area &eta;<sub>f</sub>A<sub>f</sub>, not the geometric area:</p><p class="eq">Q<sub>fin</sub> = &eta;<sub>f</sub> h A<sub>f</sub> &Delta;T = 0.65(30)(0.080)(40)</p><p class="eq">Q<sub>fin</sub> = <strong>62.4 W</strong></p><p>Counting all the area as isothermal would predict 96 W, an overestimate of 54%. In a design review that error shows up as a sink that "should" have worked.</p><p>&eta;<sub>f</sub> = tanh(mL)/mL = 0.65 corresponds to mL &asymp; 1.34, so this array is past the efficient region and the marginal area is earning about 0.65 of its face value, and falling. The question to ask next is which change buys more: <strong>shorter or thicker fins</strong> (raises &eta;<sub>f</sub> toward 0.9 but removes area), <strong>higher-k material</strong> (copper roughly doubles k, cutting m by 1.4&times;), or <strong>more airflow</strong> (raises h, which lowers &eta;<sub>f</sub> but raises hA&Delta;T faster, so it usually wins). Note the last one: h appears both inside m and outside, and the product &eta;<sub>f</sub>h always increases with h. More flow never hurts thermally, only acoustically.</p>`,
  },
  {
    id: "heat-transfer-q46",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A heat sink has total area A<sub>t</sub> = 0.35 m<sup>2</sup>, of which the fins are A<sub>f</sub> = 0.90 A<sub>t</sub> at &eta;<sub>f</sub> = 0.70, with h = 30 W/(m<sup>2</sup>&middot;K). Using &eta;<sub>o</sub> = 1 &minus; (A<sub>f</sub>/A<sub>t</sub>)(1 &minus; &eta;<sub>f</sub>), what is the sink's convective resistance, in K/W?</p>`,
    answer: 0.13,
    unit: "K/W",
    tolerance: 0.03,
    explanation: `<p>Overall surface efficiency weights the fin area by its efficiency while leaving the exposed base at full value:</p><p class="eq">&eta;<sub>o</sub> = 1 &minus; 0.90(1 &minus; 0.70) = 1 &minus; 0.90(0.30) = 0.73</p><p class="eq">R<sub>sink</sub> = 1/(&eta;<sub>o</sub> h A<sub>t</sub>) = 1/(0.73 &times; 30 &times; 0.35) = 1/7.665 = <strong>0.130 K/W</strong></p><p>Ignoring &eta;<sub>o</sub> entirely would give 1/(30 &times; 0.35) = 0.0952 K/W, optimistic by 27%. At 200 W that is 7 K of junction temperature you did not have.</p><p>Notice the structure of &eta;<sub>o</sub>: because 10% of the area is un-finned base at full effectiveness, the overall figure (0.73) is better than the fin figure (0.70). That also tells you where a design gains. A sink whose base is largely covered by fins is dominated by &eta;<sub>f</sub>, so improving fin geometry matters; a sink with lots of exposed base is dominated by total area, so adding fins matters. Quote R<sub>SA</sub>, not area, and always state the h it assumes.</p>`,
  },
  {
    id: "heat-transfer-q47",
    type: "mc",
    difficulty: 3,
    prompt: `<p>At fixed overall width and fan, doubling the fin count of an extrusion doubles the surface area but improves measured thermal resistance by only 12%. What is going on?</p>`,
    choices: [
      `The fins now shade one another radiatively, cancelling most of the gain.`,
      `Aluminium conductivity falls once the fins are thinner than about 1 mm.`,
      `Halving the gap chokes the channel: h collapses and the fan backs off.`,
      `The base plate saturates, so it cannot deliver heat to any extra fins.`,
    ],
    answer: 2,
    explanation: `<p>At fixed width, twice the fins means half the channel gap. Three things then happen at once. The boundary layers on facing fin walls merge, so the flow becomes fully developed and h stops behaving like an entrance-region flat plate. It falls toward a constant Nu based on the small hydraulic diameter. The pressure drop rises steeply (roughly as gap<sup>&minus;2</sup> in laminar channel flow), so the system impedance curve steepens and the fan's operating point slides to lower flow. Less flow lowers h again and raises the air's own temperature rise from Q = m&#775;c<sub>p</sub>&Delta;T.</p><p>The net is the familiar optimum: R<sub>SA</sub> versus fin count is a shallow U, and doubling the count from near the optimum buys single-digit percentages. Radiation between fins is small and largely self-cancelling; aluminium's k does not depend on fin thickness; and the base does not "saturate". It just adds spreading resistance, which is a separate and much smaller effect here.</p><p>What to do instead: find the optimum gap for your actual flow (about 6&ndash;10 mm in natural convection, 1.5&ndash;3 mm under a strong fan), duct the air so none of it bypasses the fins, and check the fan curve against the sink's pressure drop rather than assuming constant flow.</p>`,
  },
  {
    id: "heat-transfer-q48",
    type: "mc",
    difficulty: 2,
    prompt: `<p>Under which condition does bolting a finned plate onto a surface make its heat rejection <em>worse</em> rather than better?</p>`,
    choices: [
      `When h is already very high, so the added fin resistance outweighs area.`,
      `When the fins are made of copper rather than aluminium or steel.`,
      `When the surface temperature is above 100 &deg;C, where radiation dominates.`,
      `When the ambient air temperature is below the fin material's melt point.`,
    ],
    answer: 0,
    explanation: `<p>A fin only pays if the conduction resistance along it is small compared with the convection resistance off it. That is exactly what mL measures. When h is very high (boiling, impinging jets, dense liquid flow), the bare surface already rejects heat easily, while each fin adds a conduction path and a base-to-tip temperature drop. The classic criterion is that fins help when the fin Biot number ht/(2k) is well below 1; above about 0.25 the array is marginal, and above 1 the fins are net obstacles.</p><p>Copper fins are strictly better than aluminium thermally (higher k, higher &eta;<sub>f</sub>), so the second option has the sign backwards. Radiation at 100 &deg;C is worth only 7&ndash;9 W/m<sup>2</sup>&middot;K, and fins add radiating area too, though they do shade one another, which is a real but small penalty. The fourth option is not a condition at all.</p><p>The other genuine ways fins hurt: they block or divert the flow so the effective h falls; they trap dust and fouling that acts as an insulating blanket; and in natural convection, spacing them too closely suppresses the buoyant plume. All three are flow effects rather than conduction effects, which is why "add more fins" is never automatically the right answer.</p>`,
  },
  {
    id: "heat-transfer-q49",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A vertical electronics enclosure runs cool in the lab with a bench fan blowing on it, then overheats when installed lying flat inside a sealed cabinet. Which change is most responsible?</p>`,
    choices: [
      `Conduction inside the aluminium wall stops once the box is horizontal.`,
      `Radiation only leaves a surface when it faces upward, not sideways.`,
      `The air's specific heat drops inside a closed cabinet at higher pressure.`,
      `Forced convection was replaced by weaker, orientation-sensitive buoyancy.`,
    ],
    answer: 3,
    explanation: `<p>The bench fan supplied forced convection at h &asymp; 25&ndash;60 W/m<sup>2</sup>&middot;K and, just as important, an unlimited supply of room-temperature air. In a sealed cabinet the box must reject heat by natural convection to trapped air, at h &asymp; 3&ndash;6, and that air heats up until it reaches its own equilibrium with the cabinet. Two multiplying degradations, easily 5&minus;10&times; in total resistance.</p><p>Orientation makes it worse. Buoyant flow on a vertical wall forms a rising boundary layer along the full height; lay the box flat and the top surface produces weak plumes while the bottom surface is nearly stagnant, typically half the vertical value. Any fins that were spaced for a chimney no longer have one.</p><p>None of the other options is physical: aluminium conducts identically in any orientation, radiation leaves every surface regardless of direction (subject to view factor), and c<sub>p</sub> of air is essentially constant here.</p><p>The real failure, though, was in the process: the design was validated under a boundary condition that does not exist in the installation. The fix list is derating, vents, conducting the load into the cabinet structure, black-anodising to recruit radiation, or a fan that ships with the product, and re-testing in the actual enclosure and orientation.</p>`,
  },
  {
    id: "heat-transfer-q50",
    type: "mc",
    difficulty: 3,
    prompt: `<p>An immersion-cooled power module is stable at 40 W/cm<sup>2</sup> of surface flux, then overheats catastrophically when the flux is raised to 45 W/cm<sup>2</sup>. Which boiling limit was crossed?</p>`,
    choices: [
      `The Leidenfrost minimum, where film boiling gives way to nucleate.`,
      `The onset of nucleate boiling, where the first bubbles form and depart.`,
      `Critical heat flux, where vapour blankets the surface and h collapses.`,
      `The free-convection limit, above which buoyancy cannot lift the heat.`,
    ],
    answer: 2,
    explanation: `<p>Nucleate boiling carries huge flux at a small surface superheat, because bubbles grow, depart and let liquid rewet. At the <strong>critical heat flux</strong> the bubble departure rate can no longer clear the surface, vapour coalesces into an insulating blanket, and the effective h falls by one to two orders of magnitude. The surface temperature then leaps by hundreds of kelvin for a tiny increase in power.</p><p>What makes it catastrophic is that a power-controlled device cannot back off. A temperature-controlled system (a hotplate on a controller) simply moves along the transition branch; an IGBT dissipating a fixed 45 W/cm<sup>2</sup> has no such option and burns out. That is the practical distinction that matters.</p><p>The Leidenfrost minimum is the other end of the transition region, the point on the way <em>back down</em> where film boiling collapses. Onset of nucleate boiling happens at a few kelvin of superheat, far below this operating point. Free convection is not a limit at all, just the regime below boiling.</p><p>Design response: size for 50&ndash;70% of CHF, remembering that CHF depends on orientation, subcooling, pressure and surface finish; enhanced surfaces such as porous coatings and micro-fins can raise it substantially.</p>`,
  },
  {
    id: "heat-transfer-q51",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A MOSFET's conduction losses rise with junction temperature. In a poorly cooled enclosure a 10 K rise in ambient produces a 40 K rise at the junction. What is this design flirting with?</p>`,
    choices: [
      `A self-limiting system, since silicon losses always fall as it heats up.`,
      `A pure steady conduction problem, with no feedback path to worry about.`,
      `The critical radius effect, familiar from insulated pipes and thin wires.`,
      `Thermal runaway: the loop gain (dP/dT)&middot;R is approaching one.`,
    ],
    answer: 3,
    explanation: `<p>Temperature-dependent losses close a feedback loop: &Delta;T raises P, which raises &Delta;T again. The steady-state amplification is 1/(1 &minus; G) with G = (dP/dT)R<sub>&theta;JA</sub>.</p><p class="eq">40/10 = 4 = 1/(1 &minus; G) &rarr; G = 0.75</p><p>So this design already sits three quarters of the way to instability, and it will run away outright once R<sub>&theta;JA</sub> rises by a third, well within reach of a dusty filter, a stalled fan or a hot day.</p><p>Silicon MOSFET R<sub>DS(on)</sub> rises roughly 0.4% per kelvin, so losses genuinely increase with temperature and the first option has the physics backwards. There is no such thing as "no feedback" once dP/dT is non-zero, and critical radius is a geometry effect for cylinders with nothing to do with this.</p><p>Fixes, in order of effect: cut R (better sink, forced air, spread the load over paralleled devices), cut dP/dT (a lower-R<sub>DS(on)</sub> part, lower current, better gate drive to cut switching loss), and add protection (temperature-derated current limit or shutdown). Paralleling helps twice, because it reduces both terms at once. The same loop appears in lithium cells and in brake fade.</p>`,
  },
  {
    id: "heat-transfer-q52",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A small processor die is attached at the centre of a much larger heat spreader. A one-dimensional stack model underpredicts the peak die temperature by 15 K. Which effect is missing?</p>`,
    figure: figSpread,
    choices: [
      `Spreading resistance as heat constricts near the small source.`,
      `The Biot number, which must be forced to exactly one at the die.`,
      `Latent heat of vaporisation inside the solid copper spreader.`,
      `A negative radiation term from the die back onto its own surface.`,
    ],
    answer: 0,
    explanation: `<p>A one-dimensional L/kA model assumes heat instantly occupies the whole cross-section. It does not: near a small source the flux lines constrict, and the extra temperature drop that constriction causes is the spreading resistance. It depends on the source-to-base area ratio, base thickness, base conductivity and the boundary condition on the far face.</p><p>Bound the problem to see the scale. A 10 &times; 10 mm die on a 100 &times; 100 &times; 5 mm aluminium base gives L/kA = 0.278 K/W using the die footprint and 0.0028 K/W using the full base, a factor of 100 apart. The true value sits between, typically 0.04&ndash;0.08 K/W here, and 15 K at 200 W is 0.075 K/W, right in that band.</p><p>The other options are not real mechanisms: Biot number is a criterion, not a term you add; solid copper has no latent heat below melting; and a surface does not radiate to itself.</p><p>The design levers follow from what spreading depends on: a thicker or higher-k base, a copper insert or vapour chamber under the die, or a larger attach footprint. The diagnostic signature is always the same, a hot spot directly over the die while the outer fins run cool.</p>`,
  },
  {
    id: "heat-transfer-q53",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A QFN thermal pad must reach the ground plane through 1.6 mm of FR4 using 0.30 mm diameter vias plated with 25 &mu;m of copper (k = 400 W/m&middot;K). How many vias in parallel are needed for the via array to come in below 5 K/W?</p>`,
    figure: figVias,
    answer: 38,
    unit: "vias",
    tolerance: 0.03,
    explanation: `<p>Only the plated copper annulus conducts; the barrel is hollow or resin-filled. With outer radius 0.150 mm and inner radius 0.125 mm:</p><p class="eq">A<sub>via</sub> = &pi;(0.150<sup>2</sup> &minus; 0.125<sup>2</sup>) = &pi;(0.006875) = 0.0216 mm<sup>2</sup> = 2.16 &times; 10<sup>&minus;8</sup> m<sup>2</sup></p><p class="eq">R<sub>via</sub> = L/(kA) = 0.0016/(400 &times; 2.16&times;10<sup>&minus;8</sup>) = 185 K/W</p><p>Vias are in parallel, so R = 185/N:</p><p class="eq">N &ge; 185.2/5 = 37.0, and 37 vias give 5.01 K/W, so specify <strong>38 vias</strong></p><p>Sanity-check the alternative path. Bare FR4 under an 8 &times; 8 mm pad is 64 mm<sup>2</sup> less the 38 via holes at &pi;(0.150)<sup>2</sup> each, so 64 &minus; 2.69 = 61.3 mm<sup>2</sup>, and 0.0016/(0.3 &times; 6.13&times;10<sup>&minus;5</sup>) = 87 K/W in parallel with the array, it shaves the result slightly but cannot rescue a design without vias. That is the point: at k = 0.3 the laminate is an insulator, and a copper pour on the far side is useless if nothing connects to it.</p><p>Practical notes: 38 vias on a 0.6&ndash;1.0 mm grid fit comfortably under an 8 mm pad; specify tenting or filling so solder does not wick down the barrels during reflow; and remember that the plane must then spread the heat, which is a separate resistance again.</p>`,
  },
  {
    id: "heat-transfer-q54",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>Air at 20 &deg;C flows at 3.0 m/s along a 100 mm long circuit board. Take &nu; = 1.5 &times; 10<sup>&minus;5</sup> m<sup>2</sup>/s. Compute the Reynolds number at the trailing edge.</p>`,
    figure: figBL,
    answer: 20000,
    tolerance: 0.03,
    explanation: `<p>Reynolds number compares inertial with viscous forces, using distance from the leading edge as the length scale:</p><p class="eq">Re<sub>L</sub> = VL/&nu; = 3.0(0.10)/1.5&times;10<sup>&minus;5</sup></p><p class="eq">Re<sub>L</sub> = 0.30/1.5&times;10<sup>&minus;5</sup> = 2.0 &times; 10<sup>4</sup> = <strong>20 000</strong></p><p>Transition on a smooth flat plate happens near Re<sub>x</sub> = 5 &times; 10<sup>5</sup>, so at 2 &times; 10<sup>4</sup> the whole board is <strong>laminar</strong>, 25 times below transition. You would need 2.5 m of board, or 75 m/s, to trip it.</p><p>That matters because it selects the correlation and therefore h. Laminar gives Nu = 0.664 Re<sup>1/2</sup>Pr<sup>1/3</sup> with h &prop; V<sup>0.5</sup>; turbulent gives Nu = 0.037 Re<sup>0.8</sup>Pr<sup>1/3</sup> with h &prop; V<sup>0.8</sup> and roughly two to three times the coefficient at the same speed. Using the turbulent form here would badly overpredict cooling.</p><p>The engineering escape is that a real board is not a smooth flat plate: packages, connectors and upstream obstructions trip the flow early, so measured h often exceeds the laminar prediction. Quote the laminar number as the conservative bound and say why.</p>`,
  },
  {
    id: "heat-transfer-q55",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>For that same board (Re<sub>L</sub> = 2.0 &times; 10<sup>4</sup>, laminar), use Nu = 0.664 Re<sup>1/2</sup>Pr<sup>1/3</sup> with Pr = 0.71, k<sub>air</sub> = 0.026 W/m&middot;K and L = 0.10 m. What average convection coefficient results, in W/(m<sup>2</sup>&middot;K)?</p>`,
    figure: figBL,
    answer: 21.8,
    unit: "W/m2K",
    tolerance: 0.03,
    explanation: `<p>Evaluate the Nusselt number, then convert:</p><p class="eq">Re<sup>1/2</sup> = &radic;20 000 = 141.4, &nbsp; Pr<sup>1/3</sup> = 0.71<sup>1/3</sup> = 0.892</p><p class="eq">Nu = 0.664(141.4)(0.892) = 83.8</p><p class="eq">h = Nu &middot; k/L = 83.8(0.026)/0.10 = <strong>21.8 W/(m<sup>2</sup>&middot;K)</strong></p><p>Now use it, because the number alone proves nothing. A board dissipating 15 W over 0.01 m<sup>2</sup> of exposed area needs</p><p class="eq">&Delta;T = Q/(hA) = 15/(21.8 &times; 0.01) = 68.9 K</p><p>which puts the surface near 89 &deg;C in a 20 &deg;C room. That fails almost any consumer specification, and the follow-up question is what you change.</p><p>Rank the options. More area is linear and cheap: a heat sink at five times the area takes the rise to 14 K. More velocity buys only V<sup>0.5</sup> while the flow stays laminar, so tripling fan speed gains 73%. Tripping the flow turbulent gains two to three times at the same speed, which is why turbulators and upstream obstructions help. Radiation adds 6&ndash;7 W/m<sup>2</sup>&middot;K free if the surface is dark. Note too that 21.8 sits at the bottom of the 25&ndash;250 forced-air band, exactly where a gentle laminar 3 m/s flow should land, a useful check on the arithmetic.</p>`,
  },
  {
    id: "heat-transfer-q56",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>In turbulent forced convection h &prop; V<sup>0.8</sup>. You double the fan speed. By what factor does h increase?</p>`,
    answer: 1.74,
    tolerance: 0.03,
    explanation: `<p>Scale the correlation directly:</p><p class="eq">h<sub>2</sub>/h<sub>1</sub> = (V<sub>2</sub>/V<sub>1</sub>)<sup>0.8</sup> = 2<sup>0.8</sup></p><p class="eq">2<sup>0.8</sup> = e<sup>0.8 ln 2</sup> = e<sup>0.5545</sup> = <strong>1.74</strong></p><p>Now price it. The fan laws give flow proportional to speed, pressure to speed squared and power to speed cubed, so you paid <strong>eight times the shaft power</strong> for a 74% improvement in h, plus roughly 15&ndash;18 dB more acoustic noise, since radiated sound power scales close to the fifth power of speed.</p><p>The picture is worse than it looks, because h is not the whole resistance. If a sink is 1.0 K/W of which 0.8 is convective and 0.2 is spreading plus interface, doubling speed takes the total to 0.66 K/W, a 34% gain, not 74%. The air-side temperature rise Q/(m&#775;c<sub>p</sub>) does improve with the extra mass flow, which offsets part of that.</p><p>The design conclusion: fan speed is an expensive, noisy, late-stage lever. Cheaper ones come first, eliminate bypass so the air you already move goes through the fins, open up the inlet, pick the right fin gap, and add area.</p>`,
  },
  {
    id: "heat-transfer-q57",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A 200 mm tall vertical plate sits at 60 &deg;C in 20 &deg;C still air. Use &nu; = 1.70 &times; 10<sup>&minus;5</sup> m<sup>2</sup>/s, &alpha; = 2.41 &times; 10<sup>&minus;5</sup> m<sup>2</sup>/s, k = 0.0271 W/m&middot;K and &beta; = 1/313 K<sup>&minus;1</sup>. Estimate h from Nu = 0.59 Ra<sup>1/4</sup>, in W/(m<sup>2</sup>&middot;K).</p>`,
    answer: 5.62,
    unit: "W/m2K",
    tolerance: 0.04,
    explanation: `<p>Properties are evaluated at the film temperature (60 + 20)/2 = 40 &deg;C = 313 K, which is where &beta; = 1/313 comes from. Build the Rayleigh number:</p><p class="eq">Ra<sub>L</sub> = g&beta;&Delta;TL<sup>3</sup>/(&nu;&alpha;) = 9.81(1/313)(40)(0.008)/(1.70&times;10<sup>&minus;5</sup> &times; 2.41&times;10<sup>&minus;5</sup>)</p><p class="eq">Ra<sub>L</sub> = 0.01003/4.10&times;10<sup>&minus;10</sup> = 2.45 &times; 10<sup>7</sup></p><p>That is well below 10<sup>9</sup>, so the buoyant layer is laminar and the 0.59 Ra<sup>1/4</sup> correlation applies:</p><p class="eq">Nu = 0.59(2.45&times;10<sup>7</sup>)<sup>1/4</sup> = 0.59(70.3) = 41.5</p><p class="eq">h = Nu &middot; k/L = 41.5(0.0271)/0.2 = <strong>5.62 W/(m<sup>2</sup>&middot;K)</strong></p><p>That is the point of the exercise: a rigorous natural-convection calculation on a realistic plate lands at 5.6, right at the bottom of the 5&ndash;25 band. Anyone quoting 25 for a still-air panel is optimistic by four times.</p><p>Two riders. Because h &prop; (&Delta;T/L)<sup>1/4</sup>, a 10 K rise instead of 40 gives 5.62(1/4)<sup>1/4</sup> = 4.0, and a 1 m panel gives 5.62(0.2)<sup>1/4</sup> = 3.8, bigger is worse per unit area. And add radiation: a painted surface here contributes h<sub>rad</sub> &asymp; 6, more than doubling the total, which is why the finish is not cosmetic.</p>`,
  },
  {
    id: "heat-transfer-q58",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A fan-cooled industrial power supply is rated for 55 &deg;C ambient at sea level but only 45 &deg;C at 3000 m. Why does altitude cost 10 K?</p>`,
    choices: [
      `The fan turns more slowly in thin air, so volumetric flow rate falls.`,
      `Air density drops about 30%, so mass flow and h both fall.`,
      `Ambient air is colder at altitude, which suppresses radiative loss.`,
      `Lower pressure raises the specific heat, so air absorbs less energy.`,
    ],
    answer: 1,
    explanation: `<p>A fan is a volumetric machine: at 3000 m it still moves close to the same m<sup>3</sup>/s, but the air is only about 70% as dense. Two consequences follow. The mass flow in Q = m&#775;c<sub>p</sub>&Delta;T falls 30%, so the same heat load produces a 43% larger air temperature rise through the box. And h falls too, because Re is proportional to &rho; and h &prop; Re<sup>0.8</sup> gives 0.7<sup>0.8</sup> = 0.75, a 25% reduction in the coefficient.</p><p>Combine them and the effective junction-to-ambient resistance rises by roughly 30&ndash;40%. On a supply that ran 30 K above ambient at sea level, that is the 10 K of margin the derating curve removes.</p><p>The distractors sound plausible but fail: a fan's speed is set by its motor, not by air density (its torque and power actually drop slightly); ambient temperature at altitude is a separate specification, and radiation depends on surface temperature rather than pressure; and c<sub>p</sub> of air is essentially independent of pressure in this range.</p><p>The practical fix is to specify the fan and the sink at worst-case altitude, or to fit a larger fan and accept the sea-level acoustic penalty.</p>`,
  },
  {
    id: "heat-transfer-q59",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A report uses Q = &epsilon;&sigma;A(T<sub>s</sub><sup>4</sup> &minus; T<sub>sur</sub><sup>4</sup>) for three cases: a small sensor inside a large oven, two facing plates 5 mm apart, and a satellite panel facing deep space. Where is it invalid?</p>`,
    choices: [
      `The oven case: an enclosure has no single surrounding temperature.`,
      `The satellite case: deep space has no surface, so no exchange occurs.`,
      `The two-plate case: it assumes F = 1, a small body in large surroundings.`,
      `All three: without an explicit view factor the formula is never usable.`,
    ],
    answer: 2,
    explanation: `<p>That equation is the special case of a <strong>small convex object completely enclosed by much larger surroundings</strong>. Then the view factor from object to surroundings is exactly 1, essentially all the object's emission is absorbed, and re-radiation back is negligible, so the surroundings behave as a blackbody at T<sub>sur</sub> whatever their own emissivity.</p><p>A sensor in an oven fits perfectly. A satellite panel facing space also fits, with T<sub>sur</sub> &asymp; 4 K; the second option's physics is simply wrong, since radiating to space is precisely how spacecraft reject heat.</p><p>Two plates 5 mm apart do <em>not</em> fit. They see each other and almost nothing else, both emissivities matter, and the correct expression is q&Prime; = &sigma;(T<sub>1</sub><sup>4</sup> &minus; T<sub>2</sub><sup>4</sup>)/(1/&epsilon;<sub>1</sub> + 1/&epsilon;<sub>2</sub> &minus; 1). With &epsilon; = 0.8 on both, that denominator is 1.5 while the simple formula effectively uses 1/0.8 = 1.25, so it overpredicts the flux by 1.5/1.25 = 1.20, a clean 20% too much.</p><p>The habit worth building: every time you write that equation, say out loud "small object, large enclosure, F = 1". If either condition fails, switch to surface and space resistances.</p>`,
  },
  {
    id: "heat-transfer-q60",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>Two large parallel plates at 500 K and 300 K both have &epsilon; = 0.8. A single shield with &epsilon; = 0.05 on both faces is inserted between them. What is the net radiative flux with the shield in place, in W/m<sup>2</sup>?</p>`,
    figure: figShield,
    answer: 76.2,
    unit: "W/m2",
    tolerance: 0.03,
    explanation: `<p>First the bare case, using the two-surface parallel-plate result:</p><p class="eq">q&Prime; = &sigma;(T<sub>1</sub><sup>4</sup> &minus; T<sub>2</sub><sup>4</sup>)/(1/&epsilon;<sub>1</sub> + 1/&epsilon;<sub>2</sub> &minus; 1)</p><p class="eq">&sigma;(500<sup>4</sup> &minus; 300<sup>4</sup>) = 5.67&times;10<sup>&minus;8</sup>(5.44&times;10<sup>10</sup>) = 3085 W/m<sup>2</sup></p><p class="eq">q&Prime; = 3085/(1.25 + 1.25 &minus; 1) = 3085/1.5 = 2056 W/m<sup>2</sup></p><p>The shield creates a second gap in series, so the two denominators add:</p><p class="eq">(1/0.8 + 1/0.05 &minus; 1) + (1/0.05 + 1/0.8 &minus; 1) = 20.25 + 20.25 = 40.5</p><p class="eq">q&Prime; = 3085/40.5 = <strong>76.2 W/m<sup>2</sup></strong></p><p>A single foil cuts the flux by 27 times, and it works for two reasons at once: it adds a resistance in series, and that resistance is enormous because 1/0.05 = 20. Stack N such shields and the flux falls roughly as 1/(N+1) in the low-emissivity limit, which is exactly the multilayer insulation used on spacecraft, where 20 layers of aluminised film with spacers give milliwatt-level conductances.</p><p>The caveats matter as much as the arithmetic: the shield must not touch either plate, because one conduction short defeats it entirely; contamination and oxide raise &epsilon; sharply; and the shield's own equilibrium temperature follows from the two gap resistances being equal, so T<sub>s</sub><sup>4</sup> = (500<sup>4</sup> + 300<sup>4</sup>)/2 and T<sub>s</sub> = 433 K, which its mounting has to survive.</p>`,
  },
  {
    id: "heat-transfer-q61",
    type: "mc",
    difficulty: 2,
    prompt: `<p>Two identical aluminium boxes sit in a vacuum chamber at the same surface temperature. One is polished bare aluminium, the other is black anodised. Which rejects more heat?</p>`,
    choices: [
      `The polished box, because a shiny surface emits more of its heat.`,
      `They are equal, because both boxes are made of the same aluminium.`,
      `Neither, because a vacuum blocks every mode of heat transfer.`,
      `The black anodised box: its emissivity is about ten times higher.`,
    ],
    answer: 3,
    explanation: `<p>In vacuum there is no conduction or convection to the surroundings, so radiation is the only external path and emissivity sets it directly. Polished aluminium has &epsilon; &asymp; 0.05&ndash;0.10; black anodised aluminium has &epsilon; &asymp; 0.85&ndash;0.90, a factor of roughly ten in heat rejection at the same temperature and area.</p><p>Put a number on it: at 350 K to 300 K surroundings over 0.1 m<sup>2</sup>, the anodised box rejects 0.88(5.67&times;10<sup>&minus;8</sup>)(0.1)(350<sup>4</sup> &minus; 300<sup>4</sup>) = 34 W and the polished box about 2.7 W. Same metal, same geometry, twelve times the cooling, from a surface treatment measured in microns.</p><p>Emissivity is a <em>surface</em> property, not a bulk one, which is why the second option fails, and vacuum removes convection rather than radiation, which is why the third does.</p><p>The counterpoint worth knowing: anodising is only 15&ndash;25 &mu;m thick and adds negligible conduction resistance, so thermally it is nearly free. But if the surface also sees sunlight you must ask about solar absorptivity separately, because a high infrared &epsilon; does not force a high visible &alpha;.</p>`,
  },
  {
    id: "heat-transfer-q62",
    type: "mc",
    difficulty: 3,
    prompt: `<p>An outdoor roadside cabinet is specified in black-anodised aluminium because "black radiates best". It sits in up to 1000 W/m<sup>2</sup> of sunlight. Is that the right call?</p>`,
    choices: [
      `No: high solar absorptivity dominates; use a low-&alpha;, high-&epsilon; finish.`,
      `Yes: absorptivity equals emissivity, so the two effects always cancel.`,
      `Yes: a black surface rejects more heat at every relevant wavelength.`,
      `No: the anodising layer insulates the wall and blocks conduction outward.`,
    ],
    answer: 0,
    explanation: `<p>Kirchhoff's law says &alpha; = &epsilon; <strong>at each wavelength</strong>, not averaged across different spectra. Sunlight peaks near 0.5 &mu;m; a 320 K cabinet emits near 9 &mu;m. A surface can therefore have low solar &alpha; and high infrared &epsilon; simultaneously, and that combination is exactly what you want outdoors.</p><p>Compare finishes on a 1 m<sup>2</sup> sunlit wall. Black anodise has &alpha;<sub>solar</sub> &asymp; 0.9, absorbing 900 W of solar on top of the internal dissipation, with &epsilon;<sub>IR</sub> &asymp; 0.88 to emit. White paint has &alpha;<sub>solar</sub> &asymp; 0.2 (200 W absorbed) with essentially the same &epsilon;<sub>IR</sub> &asymp; 0.9. For a cabinet dissipating a few hundred watts, that 700 W difference swamps every other thermal decision.</p><p>The second option is the seductive half-truth this question exists to catch; the third ignores the spectral split entirely; the fourth invents a mechanism, since an anodic layer is 15&ndash;25 &mu;m thick and thermally negligible.</p><p>So the specification is right for a shaded or indoor box and wrong for a sunlit one. Outdoors you want white or a selective coating plus a ventilated sunshade, which is why real telecom and roadside cabinets are pale and double-skinned.</p>`,
  },
  {
    id: "heat-transfer-q63",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>Linearise radiation near 325 K using h<sub>rad</sub> &asymp; 4&epsilon;&sigma;T<sup>3</sup>. For &epsilon; = 0.90, T = 325 K and &sigma; = 5.67 &times; 10<sup>&minus;8</sup> W/(m<sup>2</sup>&middot;K<sup>4</sup>), estimate h<sub>rad</sub> in W/(m<sup>2</sup>&middot;K).</p>`,
    answer: 7.01,
    unit: "W/m2K",
    tolerance: 0.03,
    explanation: `<p>Substitute absolute temperature into the linearised coefficient:</p><p class="eq">325<sup>3</sup> = 3.433 &times; 10<sup>7</sup> K<sup>3</sup></p><p class="eq">h<sub>rad</sub> = 4(0.90)(5.67&times;10<sup>&minus;8</sup>)(3.433&times;10<sup>7</sup>) = <strong>7.01 W/(m<sup>2</sup>&middot;K)</strong></p><p>Why linearise: it lets radiation join the resistance network as an ordinary parallel conductance R<sub>rad</sub> = 1/(h<sub>rad</sub>A) instead of forcing an iterative fourth-power solve. It stays accurate to a few percent as long as the two temperatures are within roughly 50 K of each other.</p><p>The result is the payoff. Natural convection in air gives 5&ndash;8 W/m<sup>2</sup>&middot;K, so on a warm painted surface radiation is not a correction. It is about half the cooling. Painting or anodising an enclosure roughly doubles its passive heat rejection for the cost of a finish. Repeat the sum for polished aluminium at &epsilon; = 0.05 and you get 0.39 W/m<sup>2</sup>&middot;K, i.e. nothing, which is exactly why a shiny chassis runs hotter than a black one.</p>`,
  },
  {
    id: "heat-transfer-q64",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A thermocouple taped to a small hot transistor reads 15 K lower than an infrared microscope aimed at the same package. Which explanation is most plausible?</p>`,
    choices: [
      `The bead and its tape conduct heat away and average a cooler area.`,
      `Thermocouples cannot read above 60 &deg;C without cold-junction drift.`,
      `Infrared readings are exact regardless of the surface emissivity used.`,
      `Attaching a sensor never perturbs a small, low-thermal-mass system.`,
    ],
    answer: 0,
    explanation: `<p>Small hot spots are easy to spoil. A thermocouple bead is typically 0.3&ndash;1 mm across, so on a 3 mm package it averages over a large fraction of the area including cooler leads. Its wires are a conduction path out to ambient, and the tape holding it on both insulates the hot surface and adds radiating area. Together those readily produce a 10&ndash;20 K low reading.</p><p>Infrared is not automatically right either, which is what makes this a judgement question rather than a trick. IR needs a known emissivity: a shiny package with &epsilon; = 0.3 read as if &epsilon; = 0.95 will report a temperature well off, usually low, though a reflection from a hot neighbour can push it high. Spot size matters too, since a measurement circle larger than the die returns an area average.</p><p>The other options are false as written: modern thermocouples with proper cold-junction compensation work to hundreds of degrees, and every contact sensor perturbs a small system to some degree.</p><p>How to settle it: paint a small high-emissivity dot for the IR, use the finest bead and thinnest wires available, route the wires isothermally along the surface before leading them away, and cross-check against the die's own temperature-sense diode if it has one. Report both numbers with uncertainties rather than picking a favourite.</p>`,
  },
  {
    id: "heat-transfer-q65",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A wall has an inside convection resistance of 0.10 m<sup>2</sup>K/W, a structural layer of 0.025, insulation of 1.25, and outside convection of 0.040 m<sup>2</sup>K/W. For a 20 K indoor-to-outdoor difference, estimate the heat flux in W/m<sup>2</sup>.</p>`,
    figure: figWallStack,
    answer: 14.1,
    unit: "W/m2",
    tolerance: 0.03,
    explanation: `<p>Area-normalised resistances in series add just like ordinary ones:</p><p class="eq">R&Prime;<sub>total</sub> = 0.10 + 0.025 + 1.25 + 0.040 = 1.415 m<sup>2</sup>K/W</p><p class="eq">q&Prime; = &Delta;T/R&Prime;<sub>total</sub> = 20/1.415 = <strong>14.1 W/m<sup>2</sup></strong></p><p>Working in m<sup>2</sup>K/W keeps the calculation independent of wall area until you need a total load, multiply by a 120 m<sup>2</sup> envelope and you get 1.7 kW.</p><p>The insulation owns 88% of the resistance, which sets the priorities. Doubling it to 2.5 takes the flux to 7.5 W/m<sup>2</sup>, a 47% cut. Doubling the structural layer changes the answer by 1.7%. Improving the outside film is worth almost nothing here, and in fact more outdoor wind <em>lowers</em> R&Prime; slightly and raises the loss.</p><p>The number a building engineer would quote is U = 1/1.415 = 0.71 W/m<sup>2</sup>K, and the check that catches most errors is remembering that U and R&Prime; are reciprocals <em>with the surface films included</em>, not just the solid layers.</p>`,
  },
  {
    id: "heat-transfer-q66",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A heat sink runs very hot directly above a small chip, while the fin tips are cool and the exhaust air temperature rise is modest. Which change best targets that symptom?</p>`,
    choices: [
      `Add fin height at the outer edges without changing the base at all.`,
      `Improve spreading at the chip with a copper slug or vapour chamber.`,
      `Lower the emissivity of every surface to reduce radiative coupling.`,
      `Remove the interface material and let an air gap even out the flux.`,
    ],
    answer: 1,
    explanation: `<p>Read the three symptoms together. A local hot spot over the chip says the constriction is near the source. Cool fin tips say the outer area is starved of heat, not of air. A modest exhaust temperature rise says the airflow is more than adequate for the load, since Q = m&#775;c<sub>p</sub>&Delta;T with a small &Delta;T means plenty of mass flow. The bottleneck is therefore getting heat <em>sideways</em> into the sink: spreading resistance.</p><p>The fix is a thicker or higher-k base, an embedded copper slug, a vapour chamber, or a larger die-attach footprint, anything that relieves the constriction. Heat pipes buried in the base do the same job by transporting heat to the far fins.</p><p>Adding fin height at the edges makes things worse in the way that matters: more area the heat cannot reach, plus more pressure drop. Lowering emissivity removes a small but genuinely useful parallel path. Removing the TIM leaves an air gap at k = 0.026 W/m&middot;K, which would add several K/W and is the worst option on the list.</p><p>The general diagnostic: match the symptom to the resistance. Uniformly hot sink with hot exhaust means not enough airflow; uniformly hot sink with cool exhaust means not enough area; hot spot with cool fins means not enough spreading.</p>`,
  },
  {
    id: "heat-transfer-q67",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>An electronics enclosure must remove 50 W with air, and the allowed air temperature rise through the box is 10 K. With c<sub>p</sub> = 1005 J/(kg&middot;K), what air mass flow rate is required, in kg/s?</p>`,
    answer: 0.00498,
    unit: "kg/s",
    tolerance: 0.03,
    explanation: `<p>Steady energy balance on the air stream:</p><p class="eq">Q = m&#775;c<sub>p</sub>&Delta;T &rarr; m&#775; = Q/(c<sub>p</sub>&Delta;T)</p><p class="eq">m&#775; = 50/(1005 &times; 10) = 50/10 050 = <strong>0.00498 kg/s</strong></p><p>Convert it into something you can buy: at &rho; = 1.2 kg/m<sup>3</sup> that is 0.00415 m<sup>3</sup>/s = 8.8 CFM, so a 40 mm fan rated 10 CFM looks sufficient, on paper.</p><p>Three caveats separate the calculation from a working design. A fan's rating is its <em>free-air</em> flow; against the impedance of vents, a filter and a fin stack it may deliver half of that, so you must intersect the fan curve with the system curve. The 10 K is a bulk mean rise, and the component sitting at the exhaust end sees the full 10 K on top of inlet ambient. And bypass is fatal: air that satisfies this flow number while travelling around the hot part cools nothing.</p><p>Note also that this rise sits <em>in series</em> with every sink resistance. Even a perfect 0 K/W heat sink cannot get the last component below inlet plus 10 K.</p>`,
  },
  {
    id: "heat-transfer-q68",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>Estimate the conduction time scale t &asymp; L<sup>2</sup>/&alpha; for a 5.0 mm thick slab with thermal diffusivity &alpha; = 1.0 &times; 10<sup>&minus;5</sup> m<sup>2</sup>/s, in seconds.</p>`,
    answer: 2.5,
    unit: "s",
    tolerance: 0.03,
    explanation: `<p>Convert the thickness first. This is where factor-of-a-million errors come from:</p><p class="eq">L = 5.0 mm = 0.005 m</p><p class="eq">t &asymp; L<sup>2</sup>/&alpha; = (0.005)<sup>2</sup>/(1.0&times;10<sup>&minus;5</sup>) = 2.5&times;10<sup>&minus;5</sup>/1.0&times;10<sup>&minus;5</sup> = <strong>2.5 s</strong></p><p>This is an order-of-magnitude diffusion time, equivalent to setting the Fourier number Fo = &alpha;t/L<sup>2</sup> to 1. The exact answer for a specific boundary condition differs by a factor of about two, which does not change any decision it informs.</p><p>The square dependence is the useful part. Double the thickness and the response time quadruples: a 10 mm slab takes 10 s, a 50 mm casting 250 s. That is why thin walls track a thermal cycle while heavy castings lag it by minutes, and why soak times in an environmental chamber are set by the thickest section rather than the total mass.</p><p>It gets used two ways. It sets the minimum dwell before a measurement means anything, and compared with the load's own timescale it tells you whether a transient analysis is needed at all. If your heat pulse is 100 ms and the wall's diffusion time is 2.5 s, the far face never sees it.</p>`,
  },
  {
    id: "heat-transfer-q69",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A 30 W device runs in 10 s bursts every 5 minutes. Its heat sink has R = 4 K/W and a time constant &tau; = 400 s. Estimate the temperature rise caused by a single burst, in K.</p>`,
    figure: figPulse,
    answer: 3,
    unit: "K",
    tolerance: 0.05,
    explanation: `<p>Because &tau; = RC, the thermal capacitance is:</p><p class="eq">C = &tau;/R = 400/4 = 100 J/K</p><p>The burst lasts 10 s, which is 2.5% of &tau;, so almost no heat escapes during it and the sink behaves as a pure capacitor:</p><p class="eq">&Delta;T<sub>burst</sub> &asymp; Qt/C = 30(10)/100 = <strong>3.0 K</strong></p><p>Now the other half of the picture. The duty cycle is 10/300 = 3.3%, so average power is 1.0 W and the steady rise is 1.0(4) = 4 K. Peak temperature is therefore about 4 + 3 = 7 K above ambient.</p><p>Sizing this sink for 30 W steady would have demanded 30(4) = 120 K of capability, a seventeen-fold over-design, and the wrong <em>kind</em> of design as well. Fins reduce R, and R is not what limits the peak here. The lever that matters is C: adding 200 g of aluminium (C = 180 J/K) cuts the burst rise from 3.0 K to about 1.1 K, while adding fins does nothing for it.</p><p>The rule to carry: <strong>steady loads are a resistance problem, short pulses are a mass problem.</strong> Check the duty cycle before sizing anything, and ask what happens if the bursts ever arrive back to back. Ten in a row pushes this design toward the 120 K case.</p>`,
  },
  {
    id: "heat-transfer-q70",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A 2.0 kg aluminium fixture (c = 900 J/kg&middot;K) is warmed by a 200 W heater and loses heat to ambient through hA = 3.0 W/K. How long does it take to reach 35 K above ambient, in seconds?</p>`,
    answer: 447,
    unit: "s",
    tolerance: 0.03,
    explanation: `<p>This is a first-order system driven by a step input, not a pure mc&Delta;T energy sum. The fixture is losing heat the whole time it warms.</p><p class="eq">C = mc = 2.0(900) = 1800 J/K, &nbsp; &tau; = C/(hA) = 1800/3.0 = 600 s</p><p class="eq">&Delta;T<sub>&infin;</sub> = Q/(hA) = 200/3.0 = 66.7 K</p><p class="eq">&Delta;T(t) = &Delta;T<sub>&infin;</sub>(1 &minus; e<sup>&minus;t/&tau;</sup>) = 35 &rarr; e<sup>&minus;t/600</sup> = 1 &minus; 0.525 = 0.475</p><p class="eq">t = 600 ln(1/0.475) = 600(0.744) = <strong>447 s</strong></p><p>Compare the naive answer, mc&Delta;T/Q = 1800(35)/200 = 315 s. That ignores the loss to ambient during the ramp, which climbs from 0 to hA&Delta;T = 3.0(35) = 105 W and averages (200 &times; 447 &minus; 1800 &times; 35)/447 = 59 W across the whole warm-up, and it is 30% optimistic, the classic oven and soak-test error.</p><p>Two checks worth stating out loud. The 35 K target is 52% of the 66.7 K steady value, so it is reachable; asking for 70 K would never happen with this heater no matter how long you wait. And full steady state needs about 3&tau; = 30 minutes, which is the number to quote when someone asks how long to precondition the fixture.</p>`,
  },
  {
    id: "heat-transfer-q71",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A hot device inside a plastic box is re-housed in an aluminium box of identical size. The internal air is still stagnant and the outside area is unchanged, and the device temperature barely improves. Which action would actually help?</p>`,
    choices: [
      `Specify a higher-conductivity aluminium alloy for the enclosure walls.`,
      `Polish the inner wall surfaces so they reflect heat back to the device.`,
      `Bridge the internal air gap: bolt or gap-pad the part to the wall.`,
      `Add mass to the enclosure so it stores more of the dissipated energy.`,
    ],
    answer: 2,
    explanation: `<p>Put numbers on the series path. A 5 mm still-air gap over a 40 cm<sup>2</sup> path is R = L/(kA) = 0.005/(0.026 &times; 0.004) = 48 K/W. The plastic wall was perhaps 3 K/W; the aluminium wall is 0.02 K/W. Swapping the wall material changed 3 K/W inside a chain dominated by 48, a 6% improvement, which is exactly the "barely improves" that was observed.</p><p>Bridge that gap with a bolted joint or a gap pad and the 48 K/W collapses to well under 1 K/W, at which point the metal enclosure finally earns its keep as a spreader and radiator. This is the bottleneck rule again: a good conductor is worthless if nothing feeds it.</p><p>The alloy choice is irrelevant, 6061 versus 1050 is 170 versus 230 W/m&middot;K, both negligible next to 48. Polishing the inside is actively harmful, because a low-emissivity inner surface removes the radiative path that was carrying part of the heat across the gap (h<sub>rad</sub> &asymp; 6&ndash;7 W/m<sup>2</sup>&middot;K for painted surfaces). Extra mass changes the time constant, not the steady temperature.</p><p>Other legitimate ways to bridge the gap: a thermal pad up to the lid, a bent sheet-metal bracket, a heat pipe to the wall, or an internal fan that at least stirs the trapped air.</p>`,
  },
];

export default extra;
