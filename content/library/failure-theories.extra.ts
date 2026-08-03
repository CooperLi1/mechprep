import type { Question } from "../types";

// ---------------------------------------------------------------------------
// Additional question bank for `failure-theories` (merged after the base
// questions in content/index.ts).
//
// SCOPE NOTE: stress transformation, principal-stress derivation, Mohr's
// circle construction, plane stress vs plane strain and K_t lookup belong to
// the `stress-analysis` topic. Everything here starts from a known stress
// state or a known load and asks the failure question: which mode, which
// criterion, what margin.
// ---------------------------------------------------------------------------

// Fig — cantilever shaft under a tip force and a torque, with the critical
// surface element at the wall (bending stress + torsional shear).
const figShaft = `<svg viewBox="0 0 460 248" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ft6-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="ft6-shear" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#1d4ed8"/></marker>
  </defs>
  <line x1="36" y1="58" x2="36" y2="118" stroke="#334155" stroke-width="3"/>
  <line x1="36" y1="64" x2="26" y2="74" stroke="#64748b" stroke-width="1"/>
  <line x1="36" y1="78" x2="26" y2="88" stroke="#64748b" stroke-width="1"/>
  <line x1="36" y1="92" x2="26" y2="102" stroke="#64748b" stroke-width="1"/>
  <line x1="36" y1="106" x2="26" y2="116" stroke="#64748b" stroke-width="1"/>
  <rect x="36" y="70" width="234" height="36" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <line x1="36" y1="88" x2="270" y2="88" stroke="#64748b" stroke-width="1" stroke-dasharray="6 4"/>
  <line x1="262" y1="26" x2="262" y2="66" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ft6-load)"/>
  <text x="262" y="20" text-anchor="middle" fill="#dc2626" font-weight="600">F = 3 kN</text>
  <path d="M180,66 Q206,48 232,66" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ft6-load)"/>
  <text x="206" y="42" text-anchor="middle" fill="#dc2626" font-weight="600">T = 1200 N&middot;m</text>
  <line x1="290" y1="70" x2="290" y2="106" stroke="#64748b" stroke-width="1"/>
  <line x1="284" y1="70" x2="296" y2="70" stroke="#64748b" stroke-width="1"/>
  <line x1="284" y1="106" x2="296" y2="106" stroke="#64748b" stroke-width="1"/>
  <text x="300" y="92" fill="#64748b" font-size="11">d = 40 mm</text>
  <line x1="36" y1="124" x2="270" y2="124" stroke="#64748b" stroke-width="1"/>
  <line x1="36" y1="119" x2="36" y2="129" stroke="#64748b" stroke-width="1"/>
  <line x1="270" y1="119" x2="270" y2="129" stroke="#64748b" stroke-width="1"/>
  <text x="153" y="140" text-anchor="middle" fill="#64748b" font-size="11">L = 300 mm</text>
  <circle cx="46" cy="70" r="5" fill="none" stroke="#1d4ed8" stroke-width="2"/>
  <text x="56" y="62" fill="#1d4ed8" font-size="10">critical point</text>
  <line x1="20" y1="158" x2="440" y2="158" stroke="#e2e8f0" stroke-width="1"/>
  <rect x="60" y="176" width="52" height="52" fill="#ffffff" stroke="#334155" stroke-width="1.8"/>
  <line x1="58" y1="202" x2="34" y2="202" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ft6-load)"/>
  <line x1="114" y1="202" x2="138" y2="202" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ft6-load)"/>
  <line x1="66" y1="172" x2="106" y2="172" stroke="#1d4ed8" stroke-width="2" marker-end="url(#ft6-shear)"/>
  <line x1="106" y1="232" x2="66" y2="232" stroke="#1d4ed8" stroke-width="2" marker-end="url(#ft6-shear)"/>
  <line x1="56" y1="226" x2="56" y2="180" stroke="#1d4ed8" stroke-width="2" marker-end="url(#ft6-shear)"/>
  <line x1="116" y1="178" x2="116" y2="224" stroke="#1d4ed8" stroke-width="2" marker-end="url(#ft6-shear)"/>
  <text x="144" y="206" fill="#dc2626" font-weight="600">&sigma;</text>
  <text x="86" y="166" text-anchor="middle" fill="#1d4ed8" font-weight="600">&tau;</text>
  <text x="170" y="184" fill="#334155" font-size="11">Top fibre at the wall:</text>
  <text x="170" y="202" fill="#64748b" font-size="11">&sigma; = 32M/(&pi;d&sup3;), M = F&middot;L</text>
  <text x="170" y="220" fill="#64748b" font-size="11">&tau; = 16T/(&pi;d&sup3;)</text>
  <text x="170" y="238" fill="#64748b" font-size="11">&sigma;vm = &radic;(&sigma;&sup2; + 3&tau;&sup2;)</text>
</svg>`;

// Fig — thin-walled cylinder: the biaxial wall element that every pressure
// vessel failure check starts from.
const figVessel = `<svg viewBox="0 0 460 228" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ft7-p" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="ft7-s" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#1d4ed8"/></marker>
  </defs>
  <rect x="50" y="70" width="250" height="90" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <ellipse cx="300" cy="115" rx="14" ry="45" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <ellipse cx="50" cy="115" rx="14" ry="45" fill="none" stroke="#334155" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="180" y1="108" x2="180" y2="78" stroke="#dc2626" stroke-width="2" marker-end="url(#ft7-p)"/>
  <line x1="180" y1="122" x2="180" y2="152" stroke="#dc2626" stroke-width="2" marker-end="url(#ft7-p)"/>
  <line x1="240" y1="108" x2="240" y2="78" stroke="#dc2626" stroke-width="2" marker-end="url(#ft7-p)"/>
  <line x1="240" y1="122" x2="240" y2="152" stroke="#dc2626" stroke-width="2" marker-end="url(#ft7-p)"/>
  <text x="210" y="119" text-anchor="middle" fill="#dc2626" font-weight="600">p = 2.0 MPa</text>
  <line x1="80" y1="115" x2="80" y2="70" stroke="#64748b" stroke-width="1"/>
  <line x1="74" y1="115" x2="86" y2="115" stroke="#64748b" stroke-width="1"/>
  <line x1="74" y1="70" x2="86" y2="70" stroke="#64748b" stroke-width="1"/>
  <text x="90" y="88" fill="#64748b" font-size="11">r = 250 mm</text>
  <line x1="120" y1="70" x2="110" y2="52" stroke="#64748b" stroke-width="1"/>
  <text x="114" y="46" fill="#64748b" font-size="11">t = 6 mm</text>
  <rect x="350" y="88" width="52" height="52" fill="#ffffff" stroke="#334155" stroke-width="1.8"/>
  <line x1="376" y1="86" x2="376" y2="62" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ft7-p)"/>
  <line x1="376" y1="142" x2="376" y2="166" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ft7-p)"/>
  <line x1="348" y1="114" x2="326" y2="114" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#ft7-s)"/>
  <line x1="404" y1="114" x2="426" y2="114" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#ft7-s)"/>
  <text x="376" y="54" text-anchor="middle" fill="#dc2626" font-weight="600">&sigma;<tspan baseline-shift="sub" font-size="9">h</tspan></text>
  <text x="430" y="118" fill="#1d4ed8" font-weight="600">&sigma;<tspan baseline-shift="sub" font-size="9">l</tspan></text>
  <text x="376" y="182" text-anchor="middle" fill="#64748b" font-size="10">wall element</text>
  <text x="20" y="200" fill="#334155" font-size="11">&sigma;<tspan baseline-shift="sub" font-size="8">h</tspan> = pr/t and &sigma;<tspan baseline-shift="sub" font-size="8">l</tspan> = pr/2t &mdash; biaxial tension, &sigma;<tspan baseline-shift="sub" font-size="8">3</tspan> &asymp; 0 at the outer wall</text>
  <text x="20" y="218" fill="#64748b" font-size="11">&sigma;vm = &radic;(&sigma;<tspan baseline-shift="sub" font-size="8">h</tspan>&sup2; &minus; &sigma;<tspan baseline-shift="sub" font-size="8">h</tspan>&sigma;<tspan baseline-shift="sub" font-size="8">l</tspan> + &sigma;<tspan baseline-shift="sub" font-size="8">l</tspan>&sup2;) = 0.866 &sigma;<tspan baseline-shift="sub" font-size="8">h</tspan></text>
</svg>`;

// Fig — brittle failure envelopes: max normal stress, Coulomb-Mohr and
// modified Mohr, drawn for S_uc = 3.5 S_ut with a load point in Q4.
const figBrittle = `<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ft8-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <line x1="120" y1="80" x2="400" y2="80" stroke="#64748b" stroke-width="1.5" marker-end="url(#ft8-ax)"/>
  <line x1="300" y1="252" x2="300" y2="24" stroke="#64748b" stroke-width="1.5" marker-end="url(#ft8-ax)"/>
  <text x="404" y="85" fill="#64748b">&sigma;<tspan baseline-shift="sub" font-size="9">1</tspan></text>
  <text x="306" y="34" fill="#64748b">&sigma;<tspan baseline-shift="sub" font-size="9">3</tspan></text>
  <rect x="146" y="36" width="198" height="198" fill="none" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="4 4"/>
  <polygon points="344,36 344,80 300,234 146,234 146,80 300,36" fill="none" stroke="#dc2626" stroke-width="2.2"/>
  <polyline points="344,80 344,124 300,234" fill="none" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="6 4"/>
  <polyline points="300,36 256,36 146,80" fill="none" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="6 4"/>
  <circle cx="318" cy="120" r="4.5" fill="#334155"/>
  <text x="324" y="114" fill="#334155" font-weight="600">A</text>
  <text x="350" y="74" fill="#64748b" font-size="11">S<tspan baseline-shift="sub" font-size="8">ut</tspan></text>
  <text x="140" y="74" text-anchor="end" fill="#64748b" font-size="11">&minus;S<tspan baseline-shift="sub" font-size="8">uc</tspan></text>
  <text x="306" y="52" fill="#64748b" font-size="11">S<tspan baseline-shift="sub" font-size="8">ut</tspan></text>
  <text x="306" y="248" fill="#64748b" font-size="11">&minus;S<tspan baseline-shift="sub" font-size="8">uc</tspan></text>
  <line x1="14" y1="40" x2="38" y2="40" stroke="#dc2626" stroke-width="2.2"/>
  <text x="42" y="44" fill="#dc2626" font-size="11">Coulomb&ndash;Mohr</text>
  <line x1="14" y1="58" x2="38" y2="58" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="42" y="62" fill="#1d4ed8" font-size="11">modified Mohr</text>
  <line x1="14" y1="76" x2="38" y2="76" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="4 4"/>
  <text x="42" y="80" fill="#94a3b8" font-size="11">max normal</text>
  <text x="20" y="270" fill="#64748b" font-size="11">Grey iron: S<tspan baseline-shift="sub" font-size="8">uc</tspan> &asymp; 3.5 S<tspan baseline-shift="sub" font-size="8">ut</tspan>, so the tensile side sets the limit.</text>
</svg>`;

// Fig — leak-before-break: critical crack size falls as 1/stress^2 and must
// stay above the wall thickness.
const figLBB = `<svg viewBox="0 0 460 244" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ft9-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <line x1="70" y1="190" x2="430" y2="190" stroke="#64748b" stroke-width="1.5" marker-end="url(#ft9-ax)"/>
  <line x1="70" y1="190" x2="70" y2="40" stroke="#64748b" stroke-width="1.5" marker-end="url(#ft9-ax)"/>
  <text x="70" y="32" text-anchor="middle" fill="#64748b">a<tspan baseline-shift="sub" font-size="9">c</tspan></text>
  <text x="150" y="32" fill="#64748b" font-size="10">critical crack size</text>
  <path d="M110,50 C126,92 142,112 160,128 C185,145 195,151 210,155 C240,164 280,172 310,174 C345,177 380,180 410,181" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <line x1="70" y1="155" x2="430" y2="155" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="6 4"/>
  <text x="76" y="149" fill="#dc2626" font-size="11">wall thickness t</text>
  <line x1="210" y1="155" x2="210" y2="190" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="5 4"/>
  <circle cx="210" cy="155" r="4.5" fill="#dc2626"/>
  <text x="300" y="60" fill="#64748b" font-size="10">a<tspan baseline-shift="sub" font-size="8">c</tspan> = (K<tspan baseline-shift="sub" font-size="8">IC</tspan>/Y&sigma;)&sup2;/&pi;</text>
  <text x="210" y="204" text-anchor="middle" fill="#dc2626" font-size="11">&sigma;<tspan baseline-shift="sub" font-size="8">LBB</tspan></text>
  <text x="135" y="204" text-anchor="middle" fill="#1d4ed8" font-size="10">leak before break</text>
  <text x="320" y="204" text-anchor="middle" fill="#dc2626" font-size="10">break before leak</text>
  <text x="250" y="230" text-anchor="middle" fill="#64748b" font-size="11">applied stress &sigma;</text>
</svg>`;

// Fig — a factor on load is not a factor on stress once the response is
// nonlinear.
const figNonlin = `<svg viewBox="0 0 460 236" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ft10-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <line x1="60" y1="190" x2="420" y2="190" stroke="#64748b" stroke-width="1.5" marker-end="url(#ft10-ax)"/>
  <line x1="60" y1="190" x2="60" y2="40" stroke="#64748b" stroke-width="1.5" marker-end="url(#ft10-ax)"/>
  <text x="60" y="30" text-anchor="middle" fill="#64748b" font-size="11">peak stress</text>
  <line x1="60" y1="190" x2="324" y2="40" stroke="#dc2626" stroke-width="2.2"/>
  <path d="M60,190 C72,152 96,140 120,136 C145,131 165,126 180,122 C215,114 260,108 300,104 C340,100 385,95 420,92" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <line x1="180" y1="190" x2="180" y2="122" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="300" y1="190" x2="300" y2="54" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="60" y1="122" x2="180" y2="122" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 4"/>
  <circle cx="180" cy="122" r="4" fill="#334155"/>
  <circle cx="300" cy="54" r="4" fill="#dc2626"/>
  <circle cx="300" cy="104" r="4" fill="#1d4ed8"/>
  <text x="52" y="126" text-anchor="end" fill="#64748b" font-size="11">&sigma;</text>
  <text x="180" y="206" text-anchor="middle" fill="#64748b" font-size="11">P</text>
  <text x="300" y="206" text-anchor="middle" fill="#64748b" font-size="11">2P</text>
  <text x="240" y="68" fill="#dc2626" font-size="11">&sigma; &prop; P</text>
  <text x="196" y="150" fill="#1d4ed8" font-size="11">&sigma; &prop; P<tspan baseline-shift="super" font-size="8">1/3</tspan></text>
  <text x="306" y="50" fill="#dc2626" font-size="10">linear: 2.00&times;</text>
  <line x1="302" y1="108" x2="308" y2="120" stroke="#94a3b8" stroke-width="1"/>
  <text x="306" y="126" fill="#1d4ed8" font-size="10">Hertz: 1.26&times;</text>
  <text x="240" y="224" text-anchor="middle" fill="#64748b" font-size="11">applied load P</text>
</svg>`;

// Fig — residual stress superimposed on an applied bending stress; the peak of
// the sum moves below the surface.
const figResidual = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ft11-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <line x1="60" y1="120" x2="430" y2="120" stroke="#64748b" stroke-width="1.5" marker-end="url(#ft11-ax)"/>
  <line x1="60" y1="210" x2="60" y2="30" stroke="#64748b" stroke-width="1.5" marker-end="url(#ft11-ax)"/>
  <text x="60" y="22" text-anchor="middle" fill="#64748b" font-size="11">stress</text>
  <text x="52" y="124" text-anchor="end" fill="#64748b" font-size="11">0</text>
  <text x="54" y="60" text-anchor="end" fill="#64748b" font-size="11">+</text>
  <text x="54" y="190" text-anchor="end" fill="#64748b" font-size="11">&minus;</text>
  <line x1="60" y1="45" x2="420" y2="112" stroke="#dc2626" stroke-width="2.2"/>
  <path d="M60,183 C90,180 110,150 130,128 C145,112 155,106 175,106 C220,108 300,114 420,118" fill="none" stroke="#1d4ed8" stroke-width="2.2"/>
  <path d="M60,107 C85,92 110,76 130,66 C148,57 160,52 175,52 C220,58 260,72 300,84 C345,95 390,105 420,110" fill="none" stroke="#334155" stroke-width="2.5"/>
  <text x="256" y="74" fill="#dc2626" font-size="11">applied</text>
  <text x="256" y="132" fill="#1d4ed8" font-size="11">residual</text>
  <text x="180" y="44" fill="#334155" font-size="11">applied + residual</text>
  <text x="66" y="206" fill="#64748b" font-size="10">surface</text>
  <text x="250" y="232" text-anchor="middle" fill="#64748b" font-size="11">depth below the surface</text>
</svg>`;

// Fig — eccentric axial load: uniform plus linear stress on the section.
const figEccentric = `<svg viewBox="0 0 460 232" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ft12-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <line x1="30" y1="76" x2="30" y2="164" stroke="#334155" stroke-width="3"/>
  <line x1="30" y1="82" x2="20" y2="92" stroke="#64748b" stroke-width="1"/>
  <line x1="30" y1="98" x2="20" y2="108" stroke="#64748b" stroke-width="1"/>
  <line x1="30" y1="114" x2="20" y2="124" stroke="#64748b" stroke-width="1"/>
  <line x1="30" y1="130" x2="20" y2="140" stroke="#64748b" stroke-width="1"/>
  <line x1="30" y1="146" x2="20" y2="156" stroke="#64748b" stroke-width="1"/>
  <rect x="30" y="90" width="200" height="60" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <line x1="30" y1="120" x2="292" y2="120" stroke="#64748b" stroke-width="1" stroke-dasharray="6 4"/>
  <line x1="30" y1="109" x2="230" y2="109" stroke="#dc2626" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="230" y1="109" x2="288" y2="109" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ft12-load)"/>
  <text x="258" y="98" text-anchor="middle" fill="#dc2626" font-weight="600">P = 24 kN</text>
  <line x1="60" y1="109" x2="60" y2="120" stroke="#64748b" stroke-width="1"/>
  <line x1="54" y1="109" x2="66" y2="109" stroke="#64748b" stroke-width="1"/>
  <line x1="54" y1="120" x2="66" y2="120" stroke="#64748b" stroke-width="1"/>
  <text x="70" y="118" fill="#64748b" font-size="11">e = 7.5 mm</text>
  <text x="130" y="166" text-anchor="middle" fill="#64748b" font-size="11">centroidal axis (dashed)</text>
  <rect x="310" y="60" width="24" height="96" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="336" y1="60" x2="336" y2="156" stroke="#334155" stroke-width="1"/>
  <polygon points="336,60 406,60 332,156 336,156" fill="#fee2e2" stroke="#dc2626" stroke-width="1.8"/>
  <text x="376" y="52" text-anchor="middle" fill="#dc2626" font-size="10">+127.5 MPa</text>
  <text x="330" y="172" text-anchor="middle" fill="#dc2626" font-size="10">&minus;7.5 MPa</text>
  <text x="370" y="188" text-anchor="middle" fill="#64748b" font-size="10">40 &times; 10 mm section</text>
  <text x="20" y="204" fill="#334155" font-size="11">&sigma; = P/A + P&middot;e&middot;c/I &mdash; uniform axial plus linear bending</text>
  <text x="20" y="222" fill="#64748b" font-size="11">At the extreme fibre &tau; = 0, so &sigma;vm = |&sigma;| there.</text>
</svg>`;

// Fig — the failure-mode ledger: five factors for one part, smallest governs.
const figLedger = `<svg viewBox="0 0 460 244" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="24" text-anchor="middle" font-weight="600" fill="#334155">One part, five checks &mdash; the smallest factor is the design</text>
  <line x1="120" y1="44" x2="120" y2="206" stroke="#64748b" stroke-width="1.5"/>
  <line x1="190" y1="44" x2="190" y2="206" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="5 4"/>
  <rect x="120" y="50" width="280" height="20" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
  <rect x="120" y="82" width="77" height="20" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
  <rect x="120" y="114" width="56" height="20" fill="#fee2e2" stroke="#dc2626" stroke-width="1.8"/>
  <rect x="120" y="146" width="182" height="20" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
  <rect x="120" y="178" width="224" height="20" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="112" y="65" text-anchor="end" fill="#334155" font-size="12">yield</text>
  <text x="112" y="97" text-anchor="end" fill="#334155" font-size="12">buckling</text>
  <text x="112" y="129" text-anchor="end" fill="#dc2626" font-size="12" font-weight="600">fatigue</text>
  <text x="112" y="161" text-anchor="end" fill="#334155" font-size="12">fracture</text>
  <text x="112" y="193" text-anchor="end" fill="#334155" font-size="12">creep</text>
  <text x="408" y="65" fill="#334155" font-size="11">4.0</text>
  <text x="205" y="97" fill="#334155" font-size="11">1.1</text>
  <text x="184" y="129" fill="#dc2626" font-size="11" font-weight="600">0.8 &mdash; governs</text>
  <text x="310" y="161" fill="#334155" font-size="11">2.6</text>
  <text x="352" y="193" fill="#334155" font-size="11">3.2</text>
  <line x1="120" y1="206" x2="120" y2="211" stroke="#64748b" stroke-width="1"/>
  <line x1="190" y1="206" x2="190" y2="211" stroke="#64748b" stroke-width="1"/>
  <line x1="260" y1="206" x2="260" y2="211" stroke="#64748b" stroke-width="1"/>
  <line x1="330" y1="206" x2="330" y2="211" stroke="#64748b" stroke-width="1"/>
  <line x1="400" y1="206" x2="400" y2="211" stroke="#64748b" stroke-width="1"/>
  <text x="120" y="222" text-anchor="middle" fill="#64748b" font-size="10">0</text>
  <text x="190" y="222" text-anchor="middle" fill="#dc2626" font-size="10">1</text>
  <text x="260" y="222" text-anchor="middle" fill="#64748b" font-size="10">2</text>
  <text x="330" y="222" text-anchor="middle" fill="#64748b" font-size="10">3</text>
  <text x="400" y="222" text-anchor="middle" fill="#64748b" font-size="10">4</text>
  <text x="260" y="238" text-anchor="middle" fill="#64748b" font-size="11">factor of safety n</text>
</svg>`;

const extra: Question[] = [
  {
    id: "failure-theories-q21",
    type: "numeric",
    difficulty: 2,
    figure: figVessel,
    prompt: `<p>A thin-walled cylinder has a 250 mm mean radius, a 6 mm wall and 2.0 MPa internal gauge pressure. The shell is 250 MPa yield steel. What static yield factor of safety does von Mises give at the wall?</p>`,
    answer: 3.46,
    explanation: `<p>Get the wall stresses from p, r and t, then combine them:</p><p class="eq">&sigma;<sub>h</sub> = pr/t = 2.0(250)/6 = 83.3 MPa</p><p class="eq">&sigma;<sub>l</sub> = pr/2t = 41.7 MPa</p><p>These are the two in-plane principal stresses; the third is the radial stress, which is &minus;p on the inside and zero on the outside, negligible against 83 MPa, which is exactly what "thin-walled" means. So:</p><p class="eq">&sigma;<sub>vm</sub> = &radic;(83.3&sup2; &minus; 83.3(41.7) + 41.7&sup2;) = &radic;5208 = 72.2 MPa</p><p class="eq">n = 250/72.2 = <strong>3.46</strong></p><p>Note the payoff of combining properly: &sigma;<sub>vm</sub> is only 0.866 &times; &sigma;<sub>h</sub>, because same-sign biaxial tension carries hydrostatic content that does not drive yielding. Checking hoop alone would have given 3.00, conservative here, but the habit fails badly when the two stresses have opposite signs.</p>`,
  },
  {
    id: "failure-theories-q22",
    type: "mc",
    difficulty: 1,
    figure: figVessel,
    prompt: `<p>An over-pressured cylindrical tank splits along a seam running the length of the tank, not around its circumference. Why does it fail that way?</p>`,
    choices: [
      "Hoop stress is twice longitudinal and pulls the long seam apart",
      "The longitudinal seam is always the weaker weld on any tank",
      "Longitudinal stress is twice hoop, which tears the tank lengthways",
      "End caps carry the pressure, so the barrel only sees axial load",
    ],
    answer: 0,
    explanation: `<p>Hoop stress is pr/t and longitudinal stress is pr/2t, so the hoop stress is twice as large. Hoop stress acts circumferentially and therefore pulls apart any plane that contains the axis, a longitudinal seam. Longitudinal stress acts along the axis and pulls apart a circumferential plane. With twice the driving stress, the longitudinal split wins.</p><p>The design consequences follow directly. A longitudinal weld in a cylinder is loaded twice as hard as a circumferential one, so codes assign it a stricter joint efficiency and more demanding NDT. It is also why a cylinder is less material-efficient than a sphere, where both membrane stresses are pr/2t: for the same pressure and radius, a sphere needs half the wall.</p><p>The option about a weaker weld inverts cause and effect. The seam is treated more carefully <em>because</em> it is loaded harder, not the other way round. And the end caps do not relieve the barrel: their load is precisely what produces the longitudinal stress.</p>`,
  },
  {
    id: "failure-theories-q23",
    type: "numeric",
    difficulty: 2,
    figure: figShaft,
    prompt: `<p>The 40 mm shaft shown carries a 3 kN tip force on a 300 mm arm plus a 1200 N&middot;m torque. At the top fibre at the wall, what is the von Mises equivalent stress, in MPa?</p>`,
    answer: 219,
    unit: "MPa",
    explanation: `<p>The critical point is the top (or bottom) fibre at the wall, where bending stress is maximum and transverse shear is zero, but torsional shear is at its full surface value.</p><p class="eq">M = F&middot;L = 3000 &times; 0.300 = 900 N&middot;m</p><p class="eq">&sigma; = 32M/(&pi;d&sup3;) = 32(900)/(&pi; &times; 0.040&sup3;) = 28800/2.011&times;10<sup>&minus;4</sup> = 143.2 MPa</p><p class="eq">&tau; = 16T/(&pi;d&sup3;) = 16(1200)/2.011&times;10<sup>&minus;4</sup> = 95.5 MPa</p><p class="eq">&sigma;<sub>vm</sub> = &radic;(143.2&sup2; + 3 &times; 95.5&sup2;) = &radic;(20518 + 27356) = &radic;47874 = <strong>219 MPa</strong></p><p>The shear contributes more than the bending here because of the factor of 3, even though &tau; is the smaller number. Adding &sigma; and &tau; arithmetically gives 239 MPa. Using &radic;(&sigma;&sup2; + &tau;&sup2;) gives 172 MPa, 21% unconservative. For 4140 at S<sub>y</sub> = 415 MPa the yield factor is 415/219 = 1.90.</p>`,
  },
  {
    id: "failure-theories-q24",
    type: "numeric",
    difficulty: 3,
    figure: figShaft,
    prompt: `<p>The same shaft and loads give &sigma;<sub>vm</sub> = 219 MPa on a 40 mm diameter, and the material has S<sub>y</sub> = 415 MPa. What minimum diameter, in mm, gives a static yield factor of exactly 2.0?</p>`,
    answer: 40.7,
    unit: "mm",
    tolerance: 0.02,
    explanation: `<p>Both &sigma; and &tau; scale as 1/d&sup3;, and von Mises is a homogeneous function of them, so &sigma;<sub>vm</sub> itself scales as 1/d&sup3;. That is the modelling step: you do not need to redo the stress calculation, only the scaling.</p><p class="eq">&sigma;<sub>vm,required</sub> = S<sub>y</sub>/n = 415/2.0 = 207.5 MPa</p><p class="eq">(d<sub>new</sub>/40)&sup3; = 219/207.5 = 1.0545</p><p class="eq">d<sub>new</sub> = 40 &times; 1.0545<sup>1/3</sup> = 40 &times; 1.0179 = <strong>40.7 mm</strong></p><p>The cube root is the whole lesson: a 5.5% stress reduction costs only 1.8% on diameter, so you would go to a standard 42 mm bar and stop worrying. The inverse is the warning. Shaving 10% off a shaft diameter raises stress by 37%. Scale back to check: 219/1.0179&sup3; = 207.6 MPa, giving n = 2.00.</p>`,
  },
  {
    id: "failure-theories-q25",
    type: "numeric",
    difficulty: 2,
    figure: figEccentric,
    prompt: `<p>The 40 mm &times; 10 mm bar shown carries 24 kN applied 7.5 mm off the centroidal axis. Using S<sub>y</sub> = 250 MPa, what yield factor of safety does the tension face have?</p>`,
    answer: 1.96,
    explanation: `<p>An eccentric axial load is an axial force plus a moment about the centroid. Handle them separately, then superpose on the critical fibre.</p><p class="eq">A = 40 &times; 10 = 400 mm&sup2; &rarr; &sigma;<sub>axial</sub> = 24000/400 = 60.0 MPa</p><p class="eq">M = P&middot;e = 24000 &times; 0.0075 = 180 N&middot;m</p><p class="eq">I = 10(40)&sup3;/12 = 53333 mm&#8308;, c = 20 mm &rarr; &sigma;<sub>bend</sub> = 180000(20)/53333 = 67.5 MPa</p><p class="eq">&sigma;<sub>total</sub> = 60.0 + 67.5 = 127.5 MPa (tension face)</p><p>At the extreme fibre the transverse shear stress is zero, so this is a uniaxial state and &sigma;<sub>vm</sub> = 127.5 MPa.</p><p class="eq">n = 250/127.5 = <strong>1.96</strong></p><p>Ignoring the eccentricity entirely would give 250/60 = 4.17, more than twice the real margin, from a 7.5 mm offset. The far face sees 60 &minus; 67.5 = &minus;7.5 MPa, i.e. it has gone into compression, which is the tell-tale that bending now dominates the axial term.</p>`,
  },
  {
    id: "failure-theories-q26",
    type: "mc",
    difficulty: 2,
    figure: figEccentric,
    prompt: `<p>A colleague checking that same eccentrically loaded bar computes the average transverse shear V/A at the section and folds it into &radic;(&sigma;&sup2; + 3&tau;&sup2;) at the tension face. What is wrong with that?</p>`,
    choices: [
      "Transverse shear should be multiplied by 1.5 for a rectangle first",
      "Shear stress never belongs in a von Mises calculation at all",
      "V/A understates the peak, which sits at the extreme fibre",
      "Shear is zero at the extreme fibre, so it does not combine there",
    ],
    answer: 3,
    explanation: `<p>Transverse shear stress in a beam follows &tau; = VQ/(Ib). At the extreme fibre the first moment Q of the area beyond that level is zero, so &tau; is zero there; the parabolic distribution peaks at the neutral axis, where it reaches 1.5V/A for a rectangle. The maximum bending stress and the maximum shear stress therefore occur at different points in the section and do not combine.</p><p>So the critical point for a beam is normally the extreme fibre with a uniaxial state, &sigma;<sub>vm</sub> = |&sigma;|. Adding a shear term there is not conservative bookkeeping, it is a wrong stress state, and it hides the fact that the analyst has not identified the critical point.</p><p>The exception worth naming in an interview: for a short, deep beam or a thin-web I-section the neutral-axis shear can be large enough that the web point, low bending, high shear, governs instead. The right process is to evaluate &sigma;<sub>vm</sub> at several points through the depth and take the worst, not to smear an average shear across all of them.</p>`,
  },
  {
    id: "failure-theories-q27",
    type: "numeric",
    difficulty: 3,
    figure: figBrittle,
    prompt: `<p>A grey cast-iron bracket (S<sub>ut</sub> = 200 MPa, S<sub>uc</sub> = 700 MPa) has &sigma;<sub>1</sub> = 80 MPa and &sigma;<sub>3</sub> = &minus;180 MPa at the critical point, with &sigma;<sub>2</sub> = 0. What factor of safety does Coulomb&ndash;Mohr give?</p>`,
    answer: 1.52,
    explanation: `<p>With tension and compression present together, Coulomb&ndash;Mohr interpolates linearly between the two strengths:</p><p class="eq">&sigma;<sub>1</sub>/S<sub>ut</sub> &minus; &sigma;<sub>3</sub>/S<sub>uc</sub> = 1/n</p><p class="eq">80/200 &minus; (&minus;180)/700 = 0.400 + 0.257 = 0.657</p><p class="eq">n = 1/0.657 = <strong>1.52</strong></p><p>Compare the alternatives. Maximum normal stress would report min(200/80, 700/180) = min(2.50, 3.89) = 2.50, a 64% overstatement, because it ignores the fact that a large compressive stress on the other axis makes the tensile side easier to fail. Von Mises gives &radic;(80&sup2; + 80(180) + 180&sup2;) = 231 MPa, and there is no strength to compare it against. Grey iron has no meaningful yield point, and setting 231 against S<sub>ut</sub> = 200 would declare the part already broken.</p><p>Coulomb&ndash;Mohr is the conservative choice for grey iron; modified Mohr fits the data better and would give a slightly higher factor here. Either way, the point of the question is that a mixed-sign state on a brittle material needs an envelope, not a single stress.</p>`,
  },
  {
    id: "failure-theories-q28",
    type: "mc",
    difficulty: 3,
    figure: figBrittle,
    prompt: `<p>Looking at the brittle envelopes plotted, where do Coulomb&ndash;Mohr and modified Mohr give different answers, and which one matches cast-iron test data better?</p>`,
    choices: [
      "In pure compression; Coulomb&ndash;Mohr matches the data better there",
      "In the mixed quadrants; modified Mohr is the better fit to iron data",
      "In pure tension; modified Mohr predicts failure at a lower stress",
      "Nowhere &mdash; they are two names for the same straight-line envelope",
    ],
    answer: 1,
    explanation: `<p>In the tension&ndash;tension quadrant both envelopes reduce to &sigma;<sub>1</sub> = S<sub>ut</sub>, and in compression&ndash;compression both reduce to &sigma;<sub>3</sub> = &minus;S<sub>uc</sub>. They can only differ where the principal stresses have opposite signs.</p><p>There, Coulomb&ndash;Mohr runs a straight line from (S<sub>ut</sub>, 0) to (0, &minus;S<sub>uc</sub>), so a modest tensile stress is penalised as soon as any compression appears. Measured grey-iron data sits <em>outside</em> that line: the material tolerates full S<sub>ut</sub> in tension until the compressive principal stress reaches roughly &minus;S<sub>ut</sub>, and only then falls away. Modified Mohr adds exactly that horizontal leg, which is why it is the usual recommendation for grey iron.</p><p>So Coulomb&ndash;Mohr is the conservative envelope and modified Mohr is the accurate one. The practical rule: use Coulomb&ndash;Mohr for a quick, defensible screen; move to modified Mohr when the conservatism is costing real weight or cost and you have data to support it.</p>`,
  },
  {
    id: "failure-theories-q29",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A 30 mm diameter grey cast-iron shaft (S<sub>ut</sub> = 210 MPa) is loaded in pure torsion. Using the maximum-normal-stress criterion, at what torque, in N&middot;m, does it fracture?</p>`,
    answer: 1110,
    unit: "N·m",
    tolerance: 0.02,
    explanation: `<p>In pure torsion the surface principal stresses are &sigma;<sub>1</sub> = +&tau; and &sigma;<sub>3</sub> = &minus;&tau;. Grey iron cracks on the tensile plane, so the criterion is &sigma;<sub>1</sub> = S<sub>ut</sub>, which means fracture at &tau; = S<sub>ut</sub> = 210 MPa. (Which is why the torsional strength of grey iron is quoted as roughly equal to its tensile strength.)</p><p class="eq">&tau; = 16T/(&pi;d&sup3;) &rarr; T = S<sub>ut</sub>&pi;d&sup3;/16</p><p class="eq">&pi;d&sup3; = &pi;(0.030)&sup3; = 8.482&times;10<sup>&minus;5</sup> m&sup3;</p><p class="eq">T = 210&times;10<sup>6</sup> &times; 8.482&times;10<sup>&minus;5</sup>/16 = <strong>1110 N&middot;m</strong></p><p>Now the contrast that makes this an interview question. A ductile steel of the same 210 MPa "strength" would be limited to &tau; = 0.577 &times; 210 = 121 MPa and only 641 N&middot;m. Grey iron is <em>better</em> in torsion than a steel of equal tensile strength, because its failure plane sees only &tau; while the ductile criterion penalises shear by &radic;3.</p><p>The catch is how it fails: the iron gives no warning and separates on a 45&deg; helix. Also check the compressive principal, 700/210 = 3.3, which confirms tension governs.</p>`,
  },
  {
    id: "failure-theories-q30",
    type: "mc",
    difficulty: 2,
    prompt: `<p>You are laying out a grey cast-iron machine base. Knowing S<sub>uc</sub> is roughly 3.5 times S<sub>ut</sub>, what does that buy you in the design?</p>`,
    choices: [
      "Nothing useful; the ratio only matters for material certificates",
      "You can raise the allowable stress everywhere by a factor of 3.5",
      "Arrange ribs and load paths so the iron works in compression",
      "You can now apply von Mises, since the strengths are known",
    ],
    answer: 2,
    explanation: `<p>Strength asymmetry is a design instruction, not a data-sheet curiosity. Grey iron is cheap, damps vibration well and casts into complex shapes, but it cracks in tension at a fraction of its compressive strength. So you put the iron where the load is compressive: ribs on the compression side, arches rather than beams, generous fillets to keep tensile peaks off inside corners, and steel or ductile iron wherever the load path is genuinely tensile.</p><p>Which is why machine tool bases, engine blocks, brake discs and press frames use grey iron in largely compressive geometries, and why a cast-iron beam is loaded with the flange in tension made much heavier than the compression flange, the opposite of steel practice.</p><p>Raising every allowable by 3.5 is wrong because the tensile stresses have not gone anywhere. And knowing both strengths does not license von Mises: von Mises is symmetric in tension and compression, so it cannot represent an asymmetric material at all. That asymmetry is exactly what Coulomb&ndash;Mohr and modified Mohr exist to capture.</p>`,
  },
  {
    id: "failure-theories-q31",
    type: "numeric",
    difficulty: 2,
    figure: figNonlin,
    prompt: `<p>A cam follower is contact-stress limited, and Hertzian peak stress varies as P<sup>1/3</sup>. The requirement is a factor of 2.0 on load. What factor does that leave you on peak contact stress? Give the factor.</p>`,
    answer: 1.26,
    explanation: `<p>The stress factor is what you get when you scale the load by 2 and follow the actual response, not the load ratio:</p><p class="eq">&sigma;(2P)/&sigma;(P) = (2P/P)<sup>1/3</sup> = 2<sup>1/3</sup> = 1.26</p><p>So a factor of 2 on load buys only <strong>1.26</strong> on stress. Turn it round and the point gets sharper: to obtain a factor of 2 on <em>stress</em> in a Hertzian contact you would need a factor of 2&sup3; = 8 on load.</p><p>So a factor of 2 is a meaningless phrase until you say a factor of 2 on what. Whenever the response is nonlinear the two numbers diverge: contact goes as P<sup>1/3</sup>, a bolted joint hardly changes bolt stress at all until separation and then changes it very fast, plastic collapse is bounded by the limit load however much you increase the elastic stress, and fatigue life goes roughly as the inverse cube of stress range.</p><p>Practical rule: quote the factor on whichever quantity is actually uncertain. For a cam follower the load is usually well known and the material and lubrication are not, so a stress or life factor is the honest statement.</p>`,
  },
  {
    id: "failure-theories-q32",
    type: "mc",
    difficulty: 3,
    figure: figNonlin,
    prompt: `<p>A slender strut and a Hertzian contact are both signed off with "factor of safety 2". Why can those two statements not be compared with each other?</p>`,
    choices: [
      "The strut factor is on load, the contact factor is on stress",
      "Buckling has no factor of safety, only a critical load",
      "Contact problems are elastic, so their factor is always higher",
      "Both are on stress, but the strut uses a different yield criterion",
    ],
    answer: 0,
    explanation: `<p>Buckling has no stress to divide: the capacity is a load, P<sub>cr</sub>, and the natural factor is P<sub>cr</sub>/P. Hertzian contact has no meaningful load capacity in the same sense, nothing collapses, so the factor is quoted on stress against a contact-fatigue allowable. The two "2"s are answers to different questions.</p><p>They also behave completely differently if the load grows. Doubling the load on the strut uses up its entire margin exactly, because the capacity is a load. Doubling the load on the contact multiplies stress by only 2<sup>1/3</sup> = 1.26, so a stress factor of 2 survives a load increase of 8. The strut is far more sensitive to a load surprise despite carrying the same headline number.</p><p>The discipline this enforces: in a design review, factors of safety should be tabulated with the quantity named, n on load, n on stress, n on life, and compared only within a column. Buckling absolutely does have a factor of safety, and the last option describes an error of a different kind.</p>`,
  },
  {
    id: "failure-theories-q33",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A drawing calls for a factor of 1.5 on yield. The analyst used 1.4&times; the service load, minimum-spec yield (250 MPa when typical is 300 MPa), and rounded the computed stress up by 10% "for safety". Against a typical part at service load, what factor of safety is really being carried?</p>`,
    answer: 2.77,
    explanation: `<p>Each conservatism is an independent multiplier on the effective margin, so they compound rather than add:</p><p class="eq">n<sub>eff</sub> = 1.4 (load) &times; 1.5 (stated factor) &times; (300/250) (strength) &times; 1.10 (round-up)</p><p class="eq">n<sub>eff</sub> = 1.4 &times; 1.5 &times; 1.20 &times; 1.10 = <strong>2.77</strong></p><p>The drawing claims 1.5 and the part is actually carrying 2.77, roughly 85% more margin than anyone has agreed to, which on a stiffness-independent part is close to 85% more material than needed.</p><p>Why this is bad engineering rather than merely cautious: the margin is invisible, so it cannot be traded. When mass or cost has to come out later, nobody knows which of the four factors is real and which was a habit, so the team either strips a genuine allowance or refuses to touch anything. Stacked conservatism also hides real risk, because a part that looks marginal at 1.5 might have three hidden multipliers while the one next to it has none.</p><p>The fix is to carry uncertainty in one declared place: one factor, with the load basis, the property basis and the analysis assumptions listed separately so each can be challenged on its own.</p>`,
  },
  {
    id: "failure-theories-q34",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A new programme has to choose a factor of safety for a structural fitting. Which set of considerations actually drives the number?</p>`,
    choices: [
      "The stiffness of the part and the tolerance on its bore diameter",
      "The yield strength of the material and its elastic modulus",
      "Whatever value the last programme used, scaled by mass ratio",
      "Consequence of failure, load and material scatter, inspection",
    ],
    answer: 3,
    explanation: `<p>A factor of safety exists to cover what you do not know and what happens if you are wrong. The real inputs are: consequence of failure (nuisance, expensive, or somebody gets hurt), how well the load spectrum is known, scatter in the material and whether you are using minimum-specified or measured properties, fidelity of the analysis and how far it has been validated, manufacturing and inspection quality, environment and degradation over life, and whether the part is inspectable or fail-safe. A redundant, inspectable, well-instrumented part earns a lower factor than a single-load-path casting that nobody can see.</p><p>Notice that yield strength and modulus are not on that list. They go into the stress calculation, not into the factor. A stronger material lets you use less section at the same factor, it does not justify a lower factor.</p><p>Copying the last programme is the most common answer in industry and is defensible only if the load environment, criticality and manufacturing route are genuinely comparable, and if someone can say why the original number was chosen. If nobody can, that is a finding, not a heritage justification.</p>`,
  },
  {
    id: "failure-theories-q35",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A welded joint sits in the finite-life regime where cycles to failure vary as the inverse cube of stress range. A redesign cuts the stress range by 20%. By what factor does the predicted life increase?</p>`,
    answer: 1.95,
    explanation: `<p>With N &prop; &Delta;&sigma;<sup>&minus;3</sup>, the life ratio is the inverse cube of the stress ratio:</p><p class="eq">N<sub>2</sub>/N<sub>1</sub> = (&Delta;&sigma;<sub>1</sub>/&Delta;&sigma;<sub>2</sub>)&sup3; = (1/0.80)&sup3; = 1.953 &rarr; <strong>1.95&times;</strong></p><p>A 20% stress reduction nearly doubles life. That is why fatigue work concentrates on details, a bigger radius, a ground weld toe, moving a hole, a better joint class, rather than on switching to a stronger alloy, which does very little for a welded joint because its endurance strength is set by the geometry and residual stress at the toe, not by the parent metal.</p><p>It also shows why a factor of safety on life and a factor on stress are wildly different numbers. A factor of 2 on life is a factor of only 2<sup>1/3</sup> = 1.26 on stress; conversely a comfortable-sounding factor of 3 on stress is a factor of 27 on life. Always say which one you mean.</p><p>The same arithmetic run backwards is the warning: a 20% <em>increase</em> in stress range, easily caused by an unexpected resonance or a stiffer mount, halves the life.</p>`,
  },
  {
    id: "failure-theories-q36",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A test report says a bracket achieved "a factor of 4 on life" in a rig test. Your structures lead asks what margin that leaves on stress. What do you tell her?</p>`,
    choices: [
      "Four on life is four on stress; the two scale together directly",
      "Nothing can be said without rerunning the whole rig test again",
      "About 1.6 on stress, because life goes as roughly stress cubed",
      "Two on stress, since life varies with the square of stress range",
    ],
    answer: 2,
    explanation: `<p>In the finite-life regime the S&ndash;N relation is a power law, typically N &prop; &Delta;&sigma;<sup>&minus;3</sup> for welded steel and steeper (m of 5 or more) for smooth machined parts. Inverting a factor of 4 on life:</p><p class="eq">n<sub>stress</sub> = n<sub>life</sub><sup>1/3</sup> = 4<sup>1/3</sup> = 1.59 &rarr; about 1.6</p><p>So a headline that sounds enormous is really about 60% margin on stress, and a 26% error in the load estimate would wipe it out, because 1.26&sup3; = 2. That is the honest message to a structures lead, and it is why fatigue substantiation usually reports both numbers.</p><p>If the exponent were 5 the answer would be 4<sup>1/5</sup> = 1.32, tighter still, so the conversion depends on knowing the slope of the curve you tested against. What you cannot do is quote 4 as though it were a stress margin: the whole point of the power law is that life is a violently amplified measure of stress.</p>`,
  },
  {
    id: "failure-theories-q37",
    type: "numeric",
    difficulty: 2,
    figure: figLedger,
    prompt: `<p>A pinned-pinned aluminium strut is 25 mm &times; 12 mm in section and 500 mm long, with E = 70 GPa and S<sub>y</sub> = 240 MPa. What compressive load, in kN, does the part actually fail at?</p>`,
    answer: 9.95,
    unit: "kN",
    explanation: `<p>Compute both candidate capacities and take the smaller. Squash first:</p><p class="eq">P<sub>yield</sub> = S<sub>y</sub>A = 240 &times; (25 &times; 12) = 240 &times; 300 = 72000 N = 72.0 kN</p><p>Then Euler buckling about the <em>weak</em> axis, the 12 mm dimension:</p><p class="eq">I<sub>min</sub> = 25(12)&sup3;/12 = 3600 mm&#8308; = 3.60&times;10<sup>&minus;9</sup> m&#8308;</p><p class="eq">P<sub>cr</sub> = &pi;&sup2;EI/L&sup2; = 9.87 &times; 70&times;10<sup>9</sup> &times; 3.60&times;10<sup>&minus;9</sup>/0.500&sup2; = 2487/0.25 = 9949 N = <strong>9.95 kN</strong></p><p>Buckling governs by a factor of 7.2, so a designer who checked only P/A against yield would over-predict the capacity by more than seven times. Using the strong-axis I gives 15.6 kN, which is still not what fails first. Quoting a yield factor as if it were the answer is the other way to miss.</p><p>Slenderness confirms it: r = &radic;(I/A) = &radic;(3600/300) = 3.46 mm, so L/r = 500/3.46 = 144, far above the transition value of about 60 for this alloy, which is the one-line way to see that buckling must win.</p>`,
  },
  {
    id: "failure-theories-q38",
    type: "mc",
    difficulty: 2,
    figure: figLedger,
    prompt: `<p>The ledger shown lists five factors of safety computed for the same bracket. Which number goes on the front page of the design review?</p>`,
    choices: [
      "4.0, the yield factor, because yield is the primary failure mode",
      "2.9, the arithmetic mean of the five, as a balanced summary",
      "3.2, the creep factor, because creep is the slowest to develop",
      "0.8, the fatigue factor, because the smallest one is the design",
    ],
    answer: 3,
    explanation: `<p>The five modes are independent checks on the same part, and the part fails by whichever runs out first. So the governing factor is the minimum, and here it is below 1.0, which means the bracket is predicted to fail in fatigue before its design life. That is the headline, not the comfortable 4.0 on yield.</p><p>Averaging is meaningless: margin in one mode cannot pay for a deficit in another. A part with a huge yield margin and no fatigue margin is a part that breaks.</p><p>What the front page should carry is the minimum factor, the mode it belongs to, and the next-lowest one, because that is what tells the reviewer how much room there is to fix the problem. Here the fix has to attack fatigue, a bigger radius, a ground weld toe, shot peening, a lower stress range, and after that the buckling factor of 1.1 becomes the new constraint, so there is no point over-solving fatigue.</p>`,
  },
  {
    id: "failure-theories-q39",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A thin-walled aluminium tube in bending is sized to a comfortable yield factor of 2.5 on the extreme-fibre stress. It collapses at 60% of the predicted load, with a sharp kink on the compression side. What was missed?</p>`,
    choices: [
      "Local wall buckling on the compression side caps the moment",
      "The tensile side yielded first and unloaded the compression side",
      "Von Mises was needed instead of the simple bending stress formula",
      "The section modulus was computed for a solid rather than a tube",
    ],
    answer: 0,
    explanation: `<p>The flexure formula assumes plane sections stay plane and the wall stays where you put it. A thin wall in compression can buckle locally, a dimple or kink forms, long before it reaches yield, and once it does the wall loses stiffness, the section can no longer carry the compressive resultant, and the whole moment capacity collapses. The sharp kink on the compression side is the visual signature.</p><p>The governing parameter is the diameter-to-thickness ratio D/t (or b/t for a flat plate). Local buckling stress scales with (t/D)&sup2;-like terms and with E rather than S<sub>y</sub>, so a stronger alloy does not help at all, another example of a yield-based check being blind to the mode that governs.</p><p>Two hints that should have triggered it before the test: the failure was on the compression side with no gross yielding, and the section was thin-walled. The design fixes are to reduce D/t, add stiffeners or an internal mandrel or foam, or accept a lower allowable stress from a local-buckling curve.</p>`,
  },
  {
    id: "failure-theories-q40",
    type: "mc",
    difficulty: 2,
    prompt: `<p>An aluminium manifold bracket runs at 260 &deg;C under constant bolt-preload tension. The static von Mises check against the hot yield strength passes with a factor of 2.2. Why is that not sufficient?</p>`,
    choices: [
      "The yield strength should be taken at room temperature, not hot",
      "At 533 K the bracket is over half the melting point: creep relaxes the preload",
      "Von Mises is not valid above 200 &deg;C for any aluminium alloy",
      "Thermal expansion cancels the preload, so the check is unnecessary",
    ],
    answer: 1,
    explanation: `<p>Aluminium melts around 930 K, so 260 &deg;C = 533 K is roughly 0.57 of the melting temperature on an absolute scale, well into the creep regime, which becomes relevant above about 0.4 T<sub>m</sub>. Under sustained load the material deforms with time at stresses far below yield, so a static yield check cannot bound the behaviour no matter how large its factor.</p><p>In a preloaded joint the specific consequence is stress relaxation: the strain is held roughly constant by the bolt geometry, creep converts elastic strain into permanent strain, and the preload decays. The joint then loosens, gaps, leaks or starts to fret and fatigue, a failure with no yielding and no fracture anywhere in it.</p><p>What the check needs instead is time-dependent data: creep rupture or a stress-to-produce-1%-strain-in-N-hours allowable at temperature, plus a relaxation estimate over the service life, and often a design change, a different alloy, Belleville washers to hold load through relaxation, or a scheduled re-torque. Von Mises is still valid as a stress measure; it is the yield <em>criterion</em> that has stopped being the limit state.</p>`,
  },
  {
    id: "failure-theories-q41",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>Your NDT can reliably find a 3 mm surface crack and no smaller. The material has K<sub>IC</sub> = 30 MPa&radic;m and the geometry factor is Y = 1.12. What is the highest stress, in MPa, you can allow and still be sure an undetected flaw will not run?</p>`,
    answer: 276,
    unit: "MPa",
    explanation: `<p>Take the largest flaw that inspection could miss as the assumed initial flaw, and set K = K<sub>IC</sub> at that size:</p><p class="eq">&sigma;<sub>allow</sub> = K<sub>IC</sub>/[Y&radic;(&pi;a)]</p><p class="eq">&radic;(&pi; &times; 0.003) = &radic;0.009425 = 0.09708 &radic;m</p><p class="eq">&sigma;<sub>allow</sub> = 30/(1.12 &times; 0.09708) = 30/0.10873 = <strong>276 MPa</strong></p><p>Now push on the material. Switch to a higher-strength steel with K<sub>IC</sub> = 60 MPa&radic;m and the allowable doubles to 552 MPa, because &sigma; scales linearly with toughness. But real high-strength steels usually trade the other way, strength up, toughness down, so the more common move is K<sub>IC</sub> falling to 40 while S<sub>y</sub> rises to 1400. Then the fracture allowable is 368 MPa even though the yield allowable has gone up far more, and the part is now fracture-governed.</p><p>Note that this number carries no factor of safety at all: it is the stress at which a just-missable flaw is critical. A real allowable divides it further, or uses crack-growth analysis to set an inspection interval instead.</p>`,
  },
  {
    id: "failure-theories-q42",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A 4340 steel part is heat-treated to S<sub>y</sub> = 1500 MPa with K<sub>IC</sub> = 50 MPa&radic;m and Y = 1.12. At what crack size, in mm, does fracture at yield-level stress become as likely as yielding?</p>`,
    answer: 0.282,
    unit: "mm",
    tolerance: 0.03,
    explanation: `<p>This is the transition flaw size: the crack length at which the fracture allowable equals the yield allowable. Set &sigma; = S<sub>y</sub> in the fracture condition:</p><p class="eq">a<sub>t</sub> = (K<sub>IC</sub>/(Y S<sub>y</sub>))&sup2;/&pi;</p><p class="eq">K<sub>IC</sub>/(Y S<sub>y</sub>) = 50/(1.12 &times; 1500) = 0.02976 &radic;m</p><p class="eq">a<sub>t</sub> = 0.02976&sup2;/&pi; = 8.858&times;10<sup>&minus;4</sup>/&pi; = 2.82&times;10<sup>&minus;4</sup> m = <strong>0.282 mm</strong></p><p>Under a third of a millimetre. That is smaller than a machining mark, a grinding check, a corrosion pit or a stray arc strike, and well below what routine inspection will find. So this part is fracture-critical everywhere: designing it against yield is fiction, and it needs a damage-tolerance case, tight process control and real NDT.</p><p>Run the same arithmetic on a mild steel, S<sub>y</sub> = 250 MPa, K<sub>IC</sub> = 100 MPa&radic;m, and a<sub>t</sub> comes out around 40 mm, larger than most sections, so yielding always wins and fracture mechanics can be skipped. That contrast is the single most useful thing this calculation tells you, and it is why heat-treating a part harder to gain margin can make it dramatically less safe.</p>`,
  },
  {
    id: "failure-theories-q43",
    type: "numeric",
    difficulty: 2,
    figure: figLBB,
    prompt: `<p>A 25 mm thick pressure boundary runs at a membrane stress of 180 MPa, with Y = 1.0 for the relevant through-wall crack. What minimum K<sub>IC</sub>, in MPa&radic;m, does a leak-before-break argument require?</p>`,
    answer: 50.4,
    unit: "MPa√m",
    explanation: `<p>Leak before break requires that the critical crack size at operating stress be at least the wall thickness, so that a crack penetrates and leaks before it reaches instability. Set a<sub>c</sub> = t and solve for toughness:</p><p class="eq">K<sub>IC</sub> = Y&sigma;&radic;(&pi;t)</p><p class="eq">&radic;(&pi; &times; 0.025) = &radic;0.07854 = 0.2803 &radic;m</p><p class="eq">K<sub>IC</sub> = 1.0 &times; 180 &times; 0.2803 = <strong>50.4 MPa&radic;m</strong></p><p>Anything below that and a buried crack reaches critical size while still inside the wall, and the vessel bursts with no warning. A normalised carbon steel at room temperature comfortably exceeds 50 MPa&radic;m; the same steel at &minus;30 &deg;C may not, which is why leak-before-break cases are always stated with a minimum service temperature attached.</p><p>The three levers are visible in the equation. Toughness up, stress down, and, counter-intuitively, wall thickness <em>down</em>, since a thinner wall is easier to penetrate before instability. That last one is why simply thickening a vessel is not automatically the safe move: it lowers stress but raises the crack size you must tolerate, and it increases plane-strain constraint, which lowers the effective toughness at the same time.</p>`,
  },
  {
    id: "failure-theories-q44",
    type: "mc",
    difficulty: 3,
    figure: figLBB,
    prompt: `<p>To save mass, a vessel is re-specified from a 350 MPa yield steel to a 900 MPa one and the wall is thinned to keep the same yield factor. Why might the safety case get worse?</p>`,
    choices: [
      "Thinning the wall raises the hoop stress above the new yield strength",
      "Stress rose and toughness fell, so the tolerable crack shrank sharply",
      "Higher-strength steel has a lower elastic modulus, so it deflects more",
      "The lighter vessel is harder to support, adding bending to the wall",
    ],
    answer: 1,
    explanation: `<p>Two things move in the wrong direction at once. Keeping the same yield factor on a stronger steel means running at a much higher operating stress, roughly 2.5 times here. And higher-strength steels almost always have lower fracture toughness. Since a<sub>c</sub> = (K<sub>IC</sub>/Y&sigma;)&sup2;/&pi;, the critical crack size falls with the square of the stress increase and with the square of the toughness loss.</p><p>Put numbers on it: 350 MPa steel at 140 MPa operating stress with K<sub>IC</sub> = 100 gives a<sub>c</sub> = 162 mm. The 900 MPa steel at 360 MPa with K<sub>IC</sub> = 60 gives a<sub>c</sub> = 8.8 mm, an eighteen-fold reduction. The tolerable flaw has gone from "obvious" to "needs careful ultrasonics", and any leak-before-break argument that relied on a<sub>c</sub> exceeding the wall has probably been destroyed.</p><p>The yield factor, meanwhile, is unchanged and reports nothing at all about this. That is the shape of it: the substitution passes every check that was written down, and the failure mode it created was never checked. The right response is to redo the fracture and damage-tolerance case whenever material or wall thickness changes, not just the stress check.</p>`,
  },
  {
    id: "failure-theories-q45",
    type: "mc",
    difficulty: 1,
    prompt: `<p>An intern reports K = 276 MPa&radic;m for a 2 mm crack under 100 MPa with Y = 1.1, and concludes the part will fracture instantly. You expected about 8.7. What did they do?</p>`,
    choices: [
      "Used the diameter of the crack instead of its half-length",
      "Applied Y twice, once in the formula and once as a correction",
      "Used the ultimate strength in place of the applied stress",
      "Left the crack size in millimetres instead of metres",
    ],
    answer: 3,
    explanation: `<p>Check the ratio: 276/8.72 = 31.6 = &radic;1000. That is the signature of a millimetre-to-metre slip inside a square root, and recognising it by inspection is worth having.</p><p class="eq">Correct: K = 1.1(100)&radic;(&pi; &times; 0.002) = <strong>8.72 MPa&radic;m</strong></p><p class="eq">Wrong: K = 1.1(100)&radic;(&pi; &times; 2) = 276 MPa&radic;m</p><p>MPa&radic;m has metres baked into it, so <em>a</em> must be in metres. The error is dangerous in both directions. Here it manufactures a phantom fracture and would trigger an unnecessary redesign; the reverse slip makes a genuinely critical flaw look harmless.</p><p>Say the dimensional check out loud, because MPa &times; &radic;m only gives MPa&radic;m when the length is in metres. And carry a reference point: a 1 mm crack under 100 MPa with Y = 1 gives 5.6 MPa&radic;m.</p>`,
  },
  {
    id: "failure-theories-q46",
    type: "numeric",
    difficulty: 3,
    figure: figResidual,
    prompt: `<p>A 4 mm deep crack sits in an as-welded joint (Y = 1.0). Applied membrane stress is 150 MPa, and the weld carries residual tension at the 350 MPa yield level. What stress intensity, in MPa&radic;m, should the fracture assessment use?</p>`,
    answer: 56.1,
    unit: "MPa√m",
    explanation: `<p>The crack tip does not know which part of the tensile stress came from the pressure gauge and which from the welding torch. Both open the crack, so both go into K:</p><p class="eq">&sigma;<sub>total</sub> = &sigma;<sub>applied</sub> + &sigma;<sub>residual</sub> = 150 + 350 = 500 MPa</p><p class="eq">&radic;(&pi; &times; 0.004) = &radic;0.012566 = 0.1121 &radic;m</p><p class="eq">K = 1.0 &times; 500 &times; 0.1121 = <strong>56.1 MPa&radic;m</strong></p><p>Using applied stress alone gives 150 &times; 0.1121 = 16.8 MPa&radic;m, a factor of 3.3 too low, and the difference between "comfortably below a 60 MPa&radic;m toughness" and "at it". This is precisely why welded fracture assessments such as BS 7910 and the R6 procedure carry residual stress as a primary input, usually assumed to be at yield magnitude transverse to the weld unless stress relief has been performed and demonstrated.</p><p>The engineering responses follow: post-weld heat treatment, which can take residual stress down to 10&ndash;20% of yield; mechanical stress relief or local peening; or accepting the number and designing to a tougher material. What you cannot do is leave residual stress out because it is self-equilibrating. That argument works for a ductile limit-load check and nowhere else.</p>`,
  },
  {
    id: "failure-theories-q47",
    type: "mc",
    difficulty: 3,
    figure: figResidual,
    prompt: `<p>A shot-peened steel shaft has 250 MPa of compressive residual stress at the surface. How should that change the two numbers you report &mdash; the static limit load and the fatigue life?</p>`,
    choices: [
      "Both improve: residual compression raises limit load and life alike",
      "Limit load falls because the residual stress consumes yield capacity",
      "Limit load is essentially unchanged; fatigue life improves, since cracks start at the surface",
      "Neither changes, since residual stresses are self-equilibrating",
    ],
    answer: 2,
    explanation: `<p>Residual stresses are self-equilibrating. The surface compression is balanced by subsurface tension, so they carry no net load. For a ductile static check that means they wash out: the section yields, redistributes, and the plastic collapse load is what it always was. Reporting a higher limit load because of peening would be wrong.</p><p>Fatigue is a different mechanism and a different answer. Cracks initiate at the surface, and surface compression subtracts from the applied tensile mean stress there, so the effective R-ratio drops, crack opening is suppressed and small cracks may not propagate at all. Life gains of several times are routine, which is why peening is used on springs, gear roots, crankshaft fillets and landing gear.</p><p>Two caveats worth naming: the compressive layer is thin, so machining after peening removes the benefit entirely, and it relaxes under heat or under overloads that yield the surface. And, as the figure shows, the peak of the combined applied-plus-residual stress moves below the surface, so on a heavily peened part the initiation site can migrate subsurface to where the balancing tension lives.</p>`,
  },
  {
    id: "failure-theories-q48",
    type: "mc",
    difficulty: 2,
    prompt: `<p>Two batches of the same shaft are identical on the drawing, but one was finish-ground aggressively enough to show temper colours. Those shafts fail early. Why?</p>`,
    choices: [
      "Grinding removed enough material to raise the nominal stress",
      "The temper colours indicate the steel has softened past its yield",
      "Grinding changes the polar moment of area, raising surface shear",
      "Grinding burn leaves tensile residual stress at the surface",
    ],
    answer: 3,
    explanation: `<p>Temper colours mean the surface reached several hundred degrees under the wheel. Local heating and rapid quenching by the coolant leave the surface in <em>tension</em>, often at a large fraction of yield, and severe grinding burn can also re-austenitise and re-quench a thin layer into untempered martensite, which is hard, brittle and frequently cracked.</p><p>Fatigue cracks start at the surface, so surface tensile residual stress adds directly to the applied mean stress and makes crack initiation easier, the exact mirror image of shot peening. The static strength check sees none of this: nominal stress, geometry and material certificate are all identical between the two batches.</p><p>The give-away in a failure investigation is that the difference is process, not design. Look for grinding checks (fine perpendicular cracks visible under magnetic particle inspection), a hardness dip or spike at the surface, and residual stress by X-ray diffraction. The fixes are process fixes: softer wheel, more dressing, lighter passes, better coolant delivery, and a specified post-grind stress relief or peening operation.</p>`,
  },
  {
    id: "failure-theories-q49",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A high-strength steel lug is comfortably below yield on von Mises, but ultrasonic inspection finds a sharp 2 mm crack in the highest-tension region. What governs the disposition?</p>`,
    choices: [
      "The von Mises margin, since a crack below yield cannot propagate",
      "The mean stress over the lug cross-section, ignoring the flaw",
      "Stress intensity at the flaw against K<sub>IC</sub>, plus its growth over the service cycles",
      "The lug's ultimate strength, since fracture happens above ultimate",
    ],
    answer: 2,
    explanation: `<p>A crack changes the failure mode, so it changes the criterion. Nominal von Mises stress describes a body without a crack; once one exists, the crack-tip field is what decides, and its driving force is K = Y&sigma;&radic;(&pi;a). Fast fracture occurs at K = K<sub>IC</sub>, and for high-strength steels K<sub>IC</sub> is low, often 40 to 60 MPa&radic;m, so the fracture stress can sit far below yield.</p><p>Numerically, a 2 mm crack with Y = 1.12 in a 50 MPa&radic;m material fractures at 50/(1.12 &times; 0.0793) = 563 MPa. On a 1400 MPa yield steel that is a von Mises factor of 2.5 while the fracture factor at 563 MPa is exactly 1.0. The yield number is comfortable and irrelevant.</p><p>The full disposition needs more than one number: the residual stress at the location, the environment (hydrogen or a corrodent lowers the threshold), and the load spectrum, because subcritical fatigue crack growth will enlarge the flaw between inspections. Deliverables are a remaining-life estimate and an inspection interval, or repair. Fracture also happens well below ultimate, which rules out the last option.</p>`,
  },
  {
    id: "failure-theories-q50",
    type: "mc",
    difficulty: 3,
    prompt: `<p>Coupon tests on 3 mm sheet of an alloy show an apparent toughness of 90 MPa&radic;m; a 60 mm forging of the same alloy behaves as if it were around 45. Which is the safe number for the forging, and why the difference?</p>`,
    choices: [
      "90, since the thin-sheet test is the more carefully controlled one",
      "45, because thickness constrains the crack tip into plane strain",
      "The mean of the two, since real parts fall between the extremes",
      "90, because toughness is a material property independent of size",
    ],
    answer: 1,
    explanation: `<p>Toughness is a material property only once the specimen is thick enough to enforce plane strain. In thin sheet the crack tip can contract through the thickness, plastic flow is easy, a large plastic zone and shear lips form, and the measured resistance is high. In a thick section the surrounding material prevents that contraction, the crack tip sits under high triaxial tension, plastic flow is suppressed, and the resistance falls to a lower bound.</p><p>That lower bound is K<sub>IC</sub>, the plane-strain fracture toughness, a genuine material property, conservative, and the number to design the forging with. The 90 MPa&radic;m figure is an apparent, thickness-dependent K<sub>c</sub> and is only valid for that thickness. Standards require B &ge; 2.5(K<sub>IC</sub>/S<sub>y</sub>)&sup2; before a test result may be reported as K<sub>IC</sub> at all.</p><p>The practical consequences: never lift a toughness value from a thin-sheet datasheet for a heavy section; expect thick welded joints, forgings and castings to behave worse than coupons suggest; and note that this is the same constraint effect that makes thick sections more vulnerable to low-temperature brittle fracture.</p>`,
  },
  {
    id: "failure-theories-q51",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A glass-filled nylon clip snaps at an internal corner in cold-chamber testing. The FEA shows von Mises comfortably under the datasheet yield stress. What should be looked at before the design is accepted?</p>`,
    choices: [
      "The average density of the clip and its moulded-in mass distribution",
      "Only the hydrostatic component, which drives polymer failure",
      "Peak principal tensile stress at the corner, with cold data",
      "The buckling load of the clip's arm during assembly onto the boss",
    ],
    answer: 2,
    explanation: `<p>A glass-filled thermoplastic is not a ductile metal. The fibres raise stiffness and strength but destroy the polymer's ability to draw and yield, so the material behaves semi-brittle and becomes markedly more brittle as temperature falls or strain rate rises, exactly the cold-chamber condition that caused the failure. The controlling quantity is tensile stress opening a defect, not distortion energy.</p><p>So the checks are: maximum principal tensile stress at the corner rather than von Mises, against strength data at the actual test temperature and rate; and a hard look at moulding features that a stress plot does not show, corner radius, fibre orientation around the corner, and especially weld lines, where fibres do not cross the joint and the local strength can be half the bulk value.</p><p>The wider lesson is that a single datasheet "yield stress" for a filled polymer hides temperature, rate, moisture, creep and anisotropy. If the part matters, the design allowable comes from tests on moulded specimens in the service condition, not from a headline number.</p>`,
  },
  {
    id: "failure-theories-q52",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A lifting lug is welded on with visible undercut at the toe and a rough as-welded profile. Nominal stress in the plate is well inside allowables. Which mode moves to the top of your checklist?</p>`,
    choices: [
      "Yielding of the plate remote from the weld under peak lifted load",
      "Fatigue or brittle fracture initiating at the weld toe",
      "Elastic buckling of the plate between the lug and the base structure",
      "Creep of the weld metal under the sustained weight of the load",
    ],
    answer: 1,
    explanation: `<p>A weld toe stacks four aggravating factors in one place: a sharp geometric notch made worse by undercut, residual tension usually at yield magnitude, a coarse and possibly untempered heat-affected microstructure, and a surface that may contain slag or lack-of-fusion defects. Any of them alone shortens life; together they make the toe the initiation site for essentially every fatigue failure in welded structure.</p><p>The reason nominal stress does not warn you is that welded fatigue classes are defined on nominal stress but with allowables set by the detail, not by the parent metal. A welded joint's endurance strength is around 50 MPa regardless of whether the plate is 250 or 700 MPa yield, so upgrading the steel buys nothing at all. Lifting gear also sees shock loads and cold outdoor temperatures, which brings brittle fracture at the same toe into play.</p><p>Actions to raise: classify the detail and check it against a fatigue class, require full-profile or ground toes with undercut repaired, specify NDT, and ask about the duty cycle and the minimum service temperature. Yielding of the remote plate is exactly the check that already passed.</p>`,
  },
  {
    id: "failure-theories-q53",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A ductile alloy yields at 250 MPa in a uniaxial tension test. A thin-walled tube of the same alloy is loaded in pure torsion. Using Tresca, at what shear stress, in MPa, does it yield?</p>`,
    answer: 125,
    unit: "MPa",
    explanation: `<p>Tresca yields when the maximum shear reaches its uniaxial-yield value. In a tension test at yield &tau;<sub>max</sub> = S<sub>y</sub>/2, and in pure torsion the surface shear <em>is</em> the maximum shear:</p><p class="eq">&tau;<sub>y</sub> = S<sub>y</sub>/2 = 250/2 = <strong>125 MPa</strong></p><p>Von Mises gives 144 MPa for the same tube, 15.5% higher, and thin-walled tube data sits closer to that. Whichever you use, shear yields at roughly half to six-tenths of tensile yield, never at the same number.</p>`,
  },
  {
    id: "failure-theories-q54",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>At a surface point on a loaded bracket the normal stress is 180 MPa and the shear stress at that same point is 70 MPa. What is the von Mises equivalent stress, in MPa?</p>`,
    answer: 217,
    unit: "MPa",
    explanation: `<p>A free surface has one zero principal stress, so the state is one normal plus one shear:</p><p class="eq">&sigma;<sub>vm</sub> = &radic;(&sigma;&sup2; + 3&tau;&sup2;) = &radic;(180&sup2; + 3 &times; 70&sup2;) = &radic;47100 = <strong>217 MPa</strong></p><p>The factor of 3 earns its keep: 70 MPa of shear adds as much as 121 MPa of tension. Drop it and you report 193 MPa, an 11% under-estimate.</p>`,
  },
  {
    id: "failure-theories-q55",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A sintered ceramic insulator has a tensile strength of 120 MPa. The largest tensile principal stress anywhere in the part is 45 MPa. What factor of safety does the maximum-normal-stress criterion give?</p>`,
    answer: 2.67,
    explanation: `<p>For a brittle material the criterion is tensile principal stress against tensile strength:</p><p class="eq">n = S<sub>ut</sub>/&sigma;<sub>1</sub> = 120/45 = <strong>2.67</strong></p><p>The arithmetic is trivial; the judgement is not. Brittle strengths are flaw-controlled and scatter widely, a Weibull modulus of 10 is typical for a ceramic, which means the weakest few percent of parts can be 30&ndash;40% below the nominal strength. They are also size-dependent, because a larger stressed volume is more likely to contain a big flaw, so a strength measured on a small bend bar overstates what a large part will do.</p><p>So a deterministic 2.67 does not mean a 2.67&times; margin on failure probability. A real ceramic design uses a statistical allowable at a stated failure probability, keeps the stressed volume in mind, and often adds proof testing to truncate the low tail. It also asks whether von Mises was used anywhere in the chain by mistake. On a ceramic that number has no meaning.</p>`,
  },
  {
    id: "failure-theories-q56",
    type: "mc",
    difficulty: 1,
    prompt: `<p>The same bracket geometry and the same load are quoted in 6061-T6 aluminium and in grey cast iron. Which pair of first-pass checks do you run?</p>`,
    choices: [
      "Von Mises against S<sub>y</sub> for both; the geometry decides the rest",
      "Von Mises for the aluminium, max normal stress for the iron",
      "Maximum normal stress for both, since both are cast metals",
      "Euler buckling for both, since bracket arms are always slender",
    ],
    answer: 1,
    explanation: `<p>Choose the criterion from the material's failure mechanism, not from the shape. 6061-T6 is ductile: it yields by shear on slip planes, redistributes stress around notches, and has a well-defined yield strength, so von Mises against S<sub>y</sub> is the right first-pass check.</p><p>Grey cast iron is brittle: the graphite flakes act as internal cracks, there is no meaningful yield point, and it separates when the tensile principal stress reaches S<sub>ut</sub>. Its compressive strength is 3 to 4 times its tensile strength, and von Mises, being symmetric in tension and compression and having no S<sub>ut</sub> in it, simply cannot describe that. Use maximum normal stress, or Coulomb&ndash;Mohr if a large compressive principal stress accompanies the tension.</p><p>Same geometry, same load, same stress state, two different criteria and two different numbers. That is the whole point: the failure theory belongs to the material, not to the part.</p>`,
  },
  {
    id: "failure-theories-q57",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A drawing note for a grey cast-iron pump housing calls for an allowable of "S<sub>y</sub>/1.5". What do you say in the review?</p>`,
    choices: [
      "Grey iron has no usable S<sub>y</sub>; base the allowable on S<sub>ut</sub>",
      "It is fine; use the 0.2% offset yield from the material certificate",
      "Change it to S<sub>ut</sub>/1.5 only if the housing sees pressure loads",
      "Raise the divisor to 3.0 to cover the scatter in cast properties",
    ],
    answer: 0,
    explanation: `<p>Grey cast iron has no distinct yield point. Its stress&ndash;strain curve is non-linear from the very start because the graphite flakes open under load, and it fractures with well under 1% elongation. A 0.2% offset yield can be forced out of a test but it is close to the fracture stress and is not a useful design quantity. Handbooks therefore quote grey iron by class in terms of S<sub>ut</sub>, not S<sub>y</sub>.</p><p>So the allowable has to be built on S<sub>ut</sub>, and with a larger divisor than a ductile material would need, typically 3 to 4, because there is no ductility to redistribute a local peak, casting-to-casting scatter is wide, and section thickness affects the properties of the very casting you are holding. The check itself is on maximum principal tensile stress, not von Mises.</p><p>The last option is close to right in spirit but fixes only the number, leaving the wrong strength in the note. The third makes the criterion depend on the load type, which it does not: the material's behaviour is what selects it.</p>`,
  },
  {
    id: "failure-theories-q58",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A gasketed flange joint leaks under a fluctuating external load, but every bolt is well inside its proof stress and the flange is nowhere near yield. Which limit state was actually reached?</p>`,
    choices: [
      "Fatigue of the bolt threads at the first engaged thread root",
      "Yield of the gasket, which reduced the joint's effective stiffness",
      "Joint separation &mdash; the external load exceeded preload, so the faces opened at the gasket",
      "Brittle fracture of the flange at the bolt-hole corner radius",
    ],
    answer: 2,
    explanation: `<p>A preloaded joint has a limit state that has nothing to do with material strength. While the members stay in contact, the stiffness ratio between bolt and clamped members means the bolt takes only a small share of any external tensile load, typically 10 to 20%, which is why bolt stress barely moves. But once the external load exceeds the clamping force, the joint separates: the members lift, the gasket unloads, and it leaks.</p><p>After separation the behaviour changes completely and dangerously. The bolt now takes the <em>entire</em> external load, so its stress jumps abruptly, and the load range it sees per cycle goes from small to large, which is why fatigue failures in bolts almost always follow a separation problem rather than causing it.</p><p>The check that was missing is a separation margin: P<sub>separation</sub> = F<sub>preload</sub>/(1 &minus; C) against the maximum external load, where C is the joint stiffness factor. The fixes are more preload, more bolts, a stiffer flange or a softer gasket, not a stronger bolt, which does nothing until you actually tighten it further.</p>`,
  },
  {
    id: "failure-theories-q59",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A steel plate with a drilled hole yields slightly at the hole edge during a one-off proof overload and survives. Under normal service loads the hole later cracks. Why did the single overload not warn you?</p>`,
    choices: [
      "The overload work-hardened the hole edge and made it brittle",
      "Local yielding blunts a static peak, but the notch still owns fatigue",
      "The hole grew during the overload, raising the nominal stress",
      "The overload relieved residual stress, which removed the safety margin",
    ],
    answer: 1,
    explanation: `<p>Ductile yielding is a very effective defence against a single static overload. The material at the hole edge yields, the peak stress is capped near S<sub>y</sub>, and load sheds to the surrounding elastic material, so the plate survives an overload that a purely elastic calculation would say should have failed it. The static check therefore looks fine.</p><p>Fatigue does not work that way. The notch is still a strain concentration on every cycle, and crack initiation is driven by the local cyclic stress and strain range, not by whether the peak was blunted once. So a hole that a static overload could not break will still initiate a crack after enough cycles, and it is the standard failure location on brackets, spars and lugs.</p><p>There is a further subtlety worth mentioning: yielding at the hole under the overload leaves <em>compressive</em> residual stress there when the load is removed, which can genuinely improve subsequent fatigue life, the principle behind cold expansion of fastener holes. But it relaxes over time and under load reversal, so it is not something to rely on unless it is a controlled process.</p>`,
  },
  {
    id: "failure-theories-q60",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A flat diaphragm sits in equal biaxial tension, &sigma;<sub>1</sub> = &sigma;<sub>2</sub> = 180 MPa with the third principal stress zero. For a 250 MPa yield material, what factor of safety does von Mises give?</p>`,
    answer: 1.39,
    explanation: `<p>Put the three principal stresses into the von Mises expression, remembering &sigma;<sub>3</sub> = 0:</p><p class="eq">&sigma;<sub>vm</sub> = &radic;{[(180&minus;180)&sup2; + (180&minus;0)&sup2; + (0&minus;180)&sup2;]/2} = &radic;(64800/2) = 180 MPa</p><p class="eq">n = 250/180 = <strong>1.39</strong></p><p>The result that surprises people is that &sigma;<sub>vm</sub> equals 180 MPa exactly. Equal biaxial tension is no more damaging than uniaxial tension of the same magnitude, and Tresca agrees: &sigma;<sub>1</sub> &minus; &sigma;<sub>3</sub> = 180 &minus; 0 = 180 MPa. This is one of the six points where the hexagon touches the ellipse, so the choice of criterion makes no difference here at all.</p><p>Assuming two stresses instead of one must be worse leads to something like 250/360 or 250/255. It is not worse. Adding a second equal tension adds hydrostatic content, which does not drive yielding. Contrast with the opposite-sign case, &sigma;<sub>1</sub> = 180 and &sigma;<sub>2</sub> = &minus;180, where &sigma;<sub>vm</sub> = 312 MPa and the part has already yielded.</p>`,
  },
  {
    id: "failure-theories-q61",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A pressed steel panel is analysed with both von Mises and Tresca; both pass at limit load with margin. The first article comes back with a permanent bulge in exactly the analysed region. Which explanation deserves checking first?</p>`,
    choices: [
      "Von Mises and Tresca disagree by more than 15% in this stress state",
      "The as-formed yield strength differs from the certified value",
      "The panel yielded in compression, which neither criterion covers",
      "Tresca should have been compared against S<sub>y</sub>/2, not S<sub>y</sub>",
    ],
    answer: 1,
    explanation: `<p>Both criteria passing means the arithmetic is not the problem. They never differ by more than 15.5%, and they are both symmetric in tension and compression, so a compressive yield is fully covered. What the criteria cannot check is whether S<sub>y</sub> was the right number.</p><p>A pressed panel has been plastically strained during forming, and that changes the local properties in ways the certificate does not describe: work hardening raises yield in some regions, thinning in the draw reduces the load-carrying section, springback leaves residual stress, and the Bauschinger effect lowers yield on load reversal in regions that were strained the other way. Anisotropy from rolling means the sheet's yield differs with direction. A panel analysed with nominal flat-sheet properties and nominal thickness can easily be 20% off in the drawn corners.</p><p>Also worth checking in the same breath: whether the panel actually buckled elastically and then set, rather than yielding under membrane stress, and whether the real load path matched the model's boundary conditions. The general lesson is that failing to fail is a property of the part, not of the criterion. When a check passes and the hardware disagrees, question the inputs before the formula.</p>`,
  },
  {
    id: "failure-theories-q62",
    type: "mc",
    difficulty: 2,
    prompt: `<p>Your fitting is 3 kg over budget. The analysis used maximum credible load, minimum-spec properties, an S<sub>y</sub>/1.5 allowable, and a K<sub>t</sub> taken from a sharper geometry than the drawing shows. What is the right first move?</p>`,
    choices: [
      "Cut the allowable divisor from 1.5 to 1.2 and re-issue the drawing",
      "Move to a stronger alloy and keep every assumption exactly as it is",
      "Unstack the assumptions, quantify each, and keep one declared factor",
      "Accept the mass; conservative analysis is always the safer engineering",
    ],
    answer: 2,
    explanation: `<p>Four independent conservatisms are multiplying together, and nobody knows what the real margin is. The first job is to make it visible: what is the actual load distribution rather than the maximum credible envelope, what do measured or statistical material properties give against minimum spec, and what K<sub>t</sub> does the drawn radius really produce. Each of those can be defended or removed on its own evidence.</p><p>Then carry the remaining uncertainty in one declared place, a single factor with the basis written next to it, so that the next person can see what has been assumed and challenge it. That is what makes the margin tradeable.</p><p>Cutting the divisor without touching the other three changes the number that is documented while leaving the hidden ones intact, which is the worst of both worlds. Changing alloy spends money and schedule to buy margin you may already have. And "conservative is always safer" is not true: unnecessary mass costs performance elsewhere, and stacked conservatism hides which parts are genuinely marginal, so it degrades the whole team's judgement about risk.</p>`,
  },
];

export default extra;
