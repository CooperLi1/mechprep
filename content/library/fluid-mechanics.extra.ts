import type { Question } from "../types";

// Additional question bank for this topic (merged after the base questions
// in content/index.ts). Authored per-question, no generated templates.

// q18 — the two curves that must be equated, with the actual coefficients.
const figOperating = `<svg viewBox="0 0 460 262" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="fm8-ax" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Set the two head curves equal to find the operating point</text>
  <line x1="78" y1="200" x2="424" y2="200" stroke="#64748b" stroke-width="1.4" marker-end="url(#fm8-ax)"/>
  <line x1="78" y1="200" x2="78" y2="46" stroke="#64748b" stroke-width="1.4" marker-end="url(#fm8-ax)"/>
  <text x="30" y="124" text-anchor="middle" transform="rotate(-90 30 124)" fill="#64748b" font-size="12">head H (m)</text>
  <text x="250" y="238" text-anchor="middle" fill="#64748b" font-size="12">flow rate Q (m&sup3;/s)</text>
  <line x1="74" y1="60" x2="78" y2="60" stroke="#64748b" stroke-width="1"/>
  <line x1="74" y1="130" x2="78" y2="130" stroke="#64748b" stroke-width="1"/>
  <line x1="74" y1="186" x2="78" y2="186" stroke="#64748b" stroke-width="1"/>
  <text x="70" y="64" text-anchor="end" fill="#64748b" font-size="11">30</text>
  <text x="70" y="134" text-anchor="end" fill="#64748b" font-size="11">14</text>
  <text x="70" y="190" text-anchor="end" fill="#64748b" font-size="11">6</text>
  <line x1="238" y1="200" x2="238" y2="205" stroke="#64748b" stroke-width="1"/>
  <text x="238" y="218" text-anchor="middle" fill="#64748b" font-size="11">0.089</text>
  <path d="M78,60 Q198,60 318,130" fill="none" stroke="#1d4ed8" stroke-width="2.8"/>
  <path d="M78,186 Q158,186 238,130" fill="none" stroke="#334155" stroke-width="2.8"/>
  <line x1="78" y1="130" x2="238" y2="130" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="238" y1="130" x2="238" y2="200" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <circle cx="238" cy="130" r="5.5" fill="#dc2626"/>
  <line x1="243" y1="126" x2="268" y2="100" stroke="#64748b" stroke-width="1"/>
  <text x="272" y="94" fill="#dc2626" font-weight="600" font-size="12">operating point</text>
  <text x="90" y="104" fill="#1d4ed8" font-weight="600" font-size="12">H<tspan baseline-shift="sub" font-size="9">pump</tspan> = 30 &minus; 2000Q&sup2;</text>
  <text x="264" y="176" fill="#334155" font-weight="600" font-size="12">H<tspan baseline-shift="sub" font-size="9">sys</tspan> = 6 + 1000Q&sup2;</text>
  <text x="20" y="256" fill="#64748b" font-size="12">Equate the two and solve for Q; the pump does not set flow on its own.</text>
</svg>`;

// q35, tank draining through a sharp-edged orifice.
const figOrifice = `<svg viewBox="0 0 460 254" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="fm9-jet" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
    <marker id="fm9-dim" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Sharp-edged orifice: the jet contracts, so C<tspan baseline-shift="sub" font-size="9">d</tspan> &lt; 1</text>
  <!-- tank -->
  <path d="M70,52 L70,192 L250,192 L250,52" fill="#dbeafe" stroke="#334155" stroke-width="2"/>
  <line x1="70" y1="60" x2="250" y2="60" stroke="#1d4ed8" stroke-width="2"/>
  <text x="160" y="52" text-anchor="middle" fill="#1d4ed8" font-size="12">free surface, open to atmosphere</text>
  <!-- head dimension -->
  <line x1="290" y1="60" x2="290" y2="160" stroke="#64748b" stroke-width="1" marker-start="url(#fm9-dim)" marker-end="url(#fm9-dim)"/>
  <line x1="250" y1="60" x2="296" y2="60" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="250" y1="160" x2="296" y2="160" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="300" y="114" fill="#64748b" font-size="12">h = 2.0 m</text>
  <!-- orifice and jet -->
  <line x1="250" y1="152" x2="250" y2="168" stroke="#dc2626" stroke-width="3"/>
  <path d="M256,153 C272,156 280,158 292,159 L292,161 C280,162 272,164 256,167 Z" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.4"/>
  <line x1="300" y1="160" x2="390" y2="160" stroke="#1d4ed8" stroke-width="2.6" marker-end="url(#fm9-jet)"/>
  <text x="250" y="206" text-anchor="middle" fill="#dc2626" font-size="12">&oslash;20 mm</text>
  <text x="356" y="150" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">jet</text>
  <text x="330" y="186" text-anchor="middle" fill="#64748b" font-size="11">vena contracta</text>
  <text x="20" y="220" fill="#1d4ed8" font-size="12">Q = C<tspan baseline-shift="sub" font-size="9">d</tspan> A &radic;(2gh), with C<tspan baseline-shift="sub" font-size="9">d</tspan> = 0.62</text>
  <text x="20" y="240" fill="#64748b" font-size="12">Ideal Torricelli flow would overstate Q by about 60%.</text>
</svg>`;

// q51, the diameter law, drawn: same Q, half the bore, 32x the pressure drop.
const figDiameter = `<svg viewBox="0 0 460 256" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="fm11-flow" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
    <marker id="fm11-dim" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Same flow rate, half the bore: pressure drop &times; 32</text>
  <text x="230" y="44" text-anchor="middle" fill="#64748b" font-size="12">Both lines carry the same Q over the same length L</text>
  <rect x="50" y="78" width="150" height="40" fill="#dbeafe"/>
  <line x1="50" y1="78" x2="200" y2="78" stroke="#334155" stroke-width="3"/>
  <line x1="50" y1="118" x2="200" y2="118" stroke="#334155" stroke-width="3"/>
  <line x1="70" y1="98" x2="100" y2="98" stroke="#1d4ed8" stroke-width="2.6" marker-end="url(#fm11-flow)"/>
  <line x1="38" y1="78" x2="38" y2="118" stroke="#64748b" stroke-width="1" marker-start="url(#fm11-dim)" marker-end="url(#fm11-dim)"/>
  <text x="30" y="102" text-anchor="end" fill="#64748b" font-size="12">D</text>
  <rect x="260" y="88" width="150" height="20" fill="#dbeafe"/>
  <line x1="260" y1="88" x2="410" y2="88" stroke="#334155" stroke-width="3"/>
  <line x1="260" y1="108" x2="410" y2="108" stroke="#334155" stroke-width="3"/>
  <line x1="275" y1="98" x2="395" y2="98" stroke="#1d4ed8" stroke-width="2.6" marker-end="url(#fm11-flow)"/>
  <line x1="248" y1="88" x2="248" y2="108" stroke="#64748b" stroke-width="1" marker-start="url(#fm11-dim)" marker-end="url(#fm11-dim)"/>
  <text x="240" y="102" text-anchor="end" fill="#64748b" font-size="12">D/2</text>
  <text x="125" y="140" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">V</text>
  <text x="335" y="140" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">4V</text>
  <text x="125" y="166" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">&Delta;p = 1 (reference)</text>
  <text x="335" y="166" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="12">&Delta;p = 32</text>
  <text x="20" y="200" fill="#64748b" font-size="12">V = Q/A &prop; 1/D&sup2;, so the velocity head &frac12;&rho;V&sup2; &prop; 1/D&#8308;.</text>
  <text x="20" y="220" fill="#64748b" font-size="12">The L/D factor in Darcy adds one more power of D.</text>
  <text x="20" y="244" fill="#dc2626" font-weight="600" font-size="12">&Delta;p &prop; f L Q&sup2; / D&#8309; &rarr; halving D multiplies &Delta;p by 2&#8309; = 32.</text>
</svg>`;

// q54, a short skid where the fittings, not the pipe, own the loss.
const figLosses = `<svg viewBox="0 0 460 248" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Compare &Sigma;K against fL/D before assuming friction wins</text>
  <path d="M50,52 H130 V92 H200 V52 H270 V92 H350" fill="none" stroke="#334155" stroke-width="9"/>
  <path d="M50,52 H130 V92 H200 V52 H270 V92 H350" fill="none" stroke="#dbeafe" stroke-width="5"/>
  <circle cx="130" cy="52" r="4.5" fill="#1d4ed8"/>
  <circle cx="130" cy="92" r="4.5" fill="#1d4ed8"/>
  <circle cx="200" cy="92" r="4.5" fill="#1d4ed8"/>
  <circle cx="200" cy="52" r="4.5" fill="#1d4ed8"/>
  <circle cx="270" cy="52" r="4.5" fill="#1d4ed8"/>
  <circle cx="270" cy="92" r="4.5" fill="#1d4ed8"/>
  <path d="M307,84 L307,100 L315,92 Z" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <path d="M323,84 L323,100 L315,92 Z" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="335" y="118" text-anchor="middle" fill="#dc2626" font-size="11">globe valve, K = 10</text>
  <text x="44" y="40" fill="#64748b" font-size="11">inlet</text>
  <text x="158" y="118" text-anchor="middle" fill="#1d4ed8" font-size="11">six 90&deg; elbows, K = 0.9 each</text>
  <text x="230" y="142" text-anchor="middle" fill="#334155" font-size="12">L = 3.0 m of 25 mm bore, f = 0.025, V = 2.0 m/s</text>
  <text x="102" y="178" text-anchor="end" fill="#64748b" font-size="12">fL/D</text>
  <rect x="110" y="166" width="33" height="16" fill="#e2e8f0" stroke="#64748b" stroke-width="1"/>
  <text x="151" y="178" fill="#334155" font-size="12">3.0</text>
  <text x="102" y="206" text-anchor="end" fill="#64748b" font-size="12">&Sigma;K</text>
  <rect x="110" y="194" width="169" height="16" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
  <text x="287" y="206" fill="#dc2626" font-weight="600" font-size="12">15.4</text>
  <text x="20" y="236" fill="#64748b" font-size="12">The fittings carry 84% of the loss; adding pipe length would barely matter.</text>
</svg>`;

// q40, two pumps in parallel against a loss-dominated system curve.
const figParallel = `<svg viewBox="0 0 460 272" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="fm13-ax" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Two pumps in parallel do not double the flow</text>
  <line x1="70" y1="215" x2="424" y2="215" stroke="#64748b" stroke-width="1.4" marker-end="url(#fm13-ax)"/>
  <line x1="70" y1="215" x2="70" y2="46" stroke="#64748b" stroke-width="1.4" marker-end="url(#fm13-ax)"/>
  <text x="34" y="130" text-anchor="middle" transform="rotate(-90 34 130)" fill="#64748b" font-size="12">head H (m)</text>
  <text x="250" y="248" text-anchor="middle" fill="#64748b" font-size="12">flow rate Q</text>
  <line x1="64" y1="65" x2="70" y2="65" stroke="#64748b" stroke-width="1"/>
  <line x1="64" y1="105" x2="70" y2="105" stroke="#64748b" stroke-width="1"/>
  <line x1="64" y1="145" x2="70" y2="145" stroke="#64748b" stroke-width="1"/>
  <text x="60" y="69" text-anchor="end" fill="#64748b" font-size="11">30</text>
  <text x="60" y="109" text-anchor="end" fill="#64748b" font-size="11">22</text>
  <text x="60" y="149" text-anchor="end" fill="#64748b" font-size="11">14</text>
  <path d="M70,65 Q190,70 276,165" fill="none" stroke="#1d4ed8" stroke-width="2.8"/>
  <path d="M70,65 Q290,70 400,129" fill="none" stroke="#1d4ed8" stroke-width="2.8" stroke-dasharray="8 4"/>
  <path d="M70,185 Q230,185 400,57" fill="none" stroke="#334155" stroke-width="2.8"/>
  <circle cx="254" cy="145" r="5.5" fill="#dc2626"/>
  <circle cx="331" cy="105" r="5.5" fill="#dc2626"/>
  <line x1="254" y1="145" x2="254" y2="215" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="331" y1="105" x2="331" y2="215" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <text x="100" y="132" fill="#334155" font-weight="600" font-size="12">system curve</text>
  <text x="100" y="148" fill="#64748b" font-size="11">(steep: loss dominated)</text>
  <text x="295" y="196" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">one pump</text>
  <text x="398" y="150" text-anchor="end" fill="#1d4ed8" font-weight="600" font-size="12">two in parallel</text>
  <text x="254" y="232" text-anchor="middle" fill="#dc2626" font-size="11">Q&#8321;</text>
  <text x="331" y="232" text-anchor="middle" fill="#dc2626" font-size="11">1.41 Q&#8321;</text>
  <text x="20" y="266" fill="#64748b" font-size="12">The parallel curve doubles Q at each head; the system curve rises to meet it.</text>
</svg>`;

// q57 — the C_D magnitudes a candidate should be able to quote.
const figDrag = `<svg viewBox="0 0 460 268" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="fm14-flow" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Same frontal area, same speed &mdash; shape does the rest</text>
  <text x="200" y="34" fill="#64748b" font-size="11">relative drag (bar length &prop; C<tspan baseline-shift="sub" font-size="9">D</tspan>)</text>
  <line x1="20" y1="56" x2="64" y2="56" stroke="#1d4ed8" stroke-width="2" marker-end="url(#fm14-flow)"/>
  <line x1="20" y1="126" x2="64" y2="126" stroke="#1d4ed8" stroke-width="2" marker-end="url(#fm14-flow)"/>
  <line x1="20" y1="196" x2="64" y2="196" stroke="#1d4ed8" stroke-width="2" marker-end="url(#fm14-flow)"/>
  <rect x="106" y="38" width="8" height="36" fill="#334155"/>
  <text x="110" y="90" text-anchor="middle" fill="#64748b" font-size="11">flat plate</text>
  <rect x="200" y="49" width="192" height="14" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
  <text x="398" y="61" fill="#dc2626" font-weight="600" font-size="11">1.2</text>
  <circle cx="110" cy="126" r="18" fill="#e2e8f0" stroke="#334155" stroke-width="1.8"/>
  <text x="110" y="160" text-anchor="middle" fill="#64748b" font-size="11">sphere</text>
  <rect x="200" y="119" width="75" height="14" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
  <text x="281" y="131" fill="#dc2626" font-weight="600" font-size="11">0.47</text>
  <path d="M94,196 C94,184 104,178 118,178 C140,178 162,188 166,196 C162,204 140,214 118,214 C104,214 94,208 94,196 Z" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <text x="130" y="230" text-anchor="middle" fill="#64748b" font-size="11">streamlined strut</text>
  <rect x="200" y="189" width="8" height="14" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
  <text x="214" y="201" fill="#dc2626" font-weight="600" font-size="11">0.05</text>
  <text x="20" y="256" fill="#64748b" font-size="12">Fairing a bluff strut cuts drag about 20&times; at the same frontal area.</text>
</svg>`;

// q58/q68, submerged vertical gate: pressure prism, resultant below centroid.
const figGate = `<svg viewBox="0 0 460 288" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="fm15-p" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
    <marker id="fm15-r" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
    <marker id="fm15-dim" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Vertical gate: resultant is &rho;gh<tspan baseline-shift="sub" font-size="9">c</tspan>A, but it acts below the centroid</text>
  <rect x="70" y="54" width="128" height="168" fill="#dbeafe"/>
  <line x1="70" y1="54" x2="212" y2="54" stroke="#1d4ed8" stroke-width="2"/>
  <text x="74" y="46" fill="#1d4ed8" font-size="12">free surface</text>
  <rect x="198" y="40" width="14" height="182" fill="#e2e8f0" stroke="#334155" stroke-width="1.4"/>
  <rect x="198" y="114" width="14" height="90" fill="#334155"/>
  <line x1="70" y1="222" x2="212" y2="222" stroke="#334155" stroke-width="2.4"/>
  <path d="M212,114 L252,114 L312,204 L212,204 Z" fill="#fee2e2" stroke="#dc2626" stroke-width="1.6"/>
  <line x1="212" y1="54" x2="252" y2="114" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="252" y1="114" x2="218" y2="114" stroke="#dc2626" stroke-width="1.2" marker-end="url(#fm15-p)"/>
  <line x1="282" y1="159" x2="218" y2="159" stroke="#dc2626" stroke-width="1.2" marker-end="url(#fm15-p)"/>
  <line x1="312" y1="204" x2="218" y2="204" stroke="#dc2626" stroke-width="1.2" marker-end="url(#fm15-p)"/>
  <text x="320" y="214" fill="#dc2626" font-weight="600" font-size="12">p = &rho;gh</text>
  <line x1="52" y1="54" x2="52" y2="114" stroke="#64748b" stroke-width="1" marker-start="url(#fm15-dim)" marker-end="url(#fm15-dim)"/>
  <text x="44" y="88" text-anchor="end" fill="#64748b" font-size="12">1.0 m</text>
  <line x1="52" y1="114" x2="52" y2="204" stroke="#64748b" stroke-width="1" marker-start="url(#fm15-dim)" marker-end="url(#fm15-dim)"/>
  <text x="44" y="162" text-anchor="end" fill="#64748b" font-size="12">1.5 m</text>
  <line x1="140" y1="165" x2="194" y2="165" stroke="#1d4ed8" stroke-width="2.6" marker-end="url(#fm15-r)"/>
  <text x="192" y="152" text-anchor="end" fill="#1d4ed8" font-weight="600" font-size="12">F = 51.5 kN</text>
  <text x="20" y="242" fill="#64748b" font-size="12">Gate is 2.0 m wide into the page, so A = 3.0 m&sup2;.</text>
  <text x="20" y="262" fill="#64748b" font-size="12">Centroid depth h<tspan baseline-shift="sub" font-size="9">c</tspan> = 1.75 m &rarr; F = &rho;gh<tspan baseline-shift="sub" font-size="9">c</tspan>A.</text>
  <text x="20" y="282" fill="#dc2626" font-size="12">The resultant acts at 1.86 m depth, not at the centroid.</text>
</svg>`;

// q60, differential manometer across an orifice, heavy fluid in the U.
const figManometer = `<svg viewBox="0 0 460 282" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="fm16-flow" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#1d4ed8"/></marker>
    <marker id="fm16-dim" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Differential manometer: the reading is a height, not a pressure</text>
  <rect x="50" y="60" width="360" height="36" fill="#dbeafe"/>
  <line x1="50" y1="60" x2="410" y2="60" stroke="#334155" stroke-width="3"/>
  <line x1="50" y1="96" x2="410" y2="96" stroke="#334155" stroke-width="3"/>
  <line x1="66" y1="78" x2="140" y2="78" stroke="#1d4ed8" stroke-width="2.4" marker-end="url(#fm16-flow)"/>
  <text x="100" y="52" text-anchor="middle" fill="#1d4ed8" font-size="12">water line</text>
  <rect x="226" y="60" width="8" height="12" fill="#334155"/>
  <rect x="226" y="84" width="8" height="12" fill="#334155"/>
  <text x="230" y="44" text-anchor="middle" fill="#334155" font-size="11">orifice plate</text>
  <path d="M180,96 V216 Q180,226 190,226 H280 Q290,226 290,216 V96" fill="none" stroke="#334155" stroke-width="16"/>
  <path d="M180,96 V216 Q180,226 190,226 H280 Q290,226 290,216 V96" fill="none" stroke="#dbeafe" stroke-width="12"/>
  <path d="M180,196 V216 Q180,226 190,226 H280 Q290,226 290,216 V150" fill="none" stroke="#dc2626" stroke-width="12"/>
  <text x="172" y="118" text-anchor="end" fill="#334155" font-size="12">p<tspan baseline-shift="sub" font-size="9">1</tspan></text>
  <text x="300" y="118" fill="#334155" font-size="12">p<tspan baseline-shift="sub" font-size="9">2</tspan></text>
  <line x1="174" y1="196" x2="350" y2="196" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="296" y1="150" x2="350" y2="150" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="344" y1="150" x2="344" y2="196" stroke="#64748b" stroke-width="1" marker-start="url(#fm16-dim)" marker-end="url(#fm16-dim)"/>
  <text x="352" y="177" fill="#64748b" font-weight="600" font-size="12">R = 150 mm</text>
  <text x="230" y="252" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="12">mercury, SG 13.6</text>
  <text x="20" y="276" fill="#64748b" font-size="12">&Delta;p = (&rho;<tspan baseline-shift="sub" font-size="9">m</tspan> &minus; &rho;<tspan baseline-shift="sub" font-size="9">f</tspan>)gR &mdash; subtracting the water density is not optional.</text>
</svg>`;

// q61, venturi meter with the two taps that actually get connected.
const figVenturi = `<svg viewBox="0 0 460 252" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="fm17-flow" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
    <marker id="fm17-dim" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Venturi meter: short contraction, long diffuser</text>
  <path d="M50,90 L140,90 L190,102 L240,102 L340,90 L410,90 L410,150 L340,150 L240,138 L190,138 L140,150 L50,150 Z" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <line x1="70" y1="120" x2="90" y2="120" stroke="#1d4ed8" stroke-width="2.6" marker-end="url(#fm17-flow)"/>
  <line x1="196" y1="120" x2="252" y2="120" stroke="#1d4ed8" stroke-width="2.6" marker-end="url(#fm17-flow)"/>
  <circle cx="95" cy="90" r="3.5" fill="#dc2626"/>
  <circle cx="215" cy="102" r="3.5" fill="#dc2626"/>
  <line x1="95" y1="90" x2="95" y2="44" stroke="#dc2626" stroke-width="1.4"/>
  <line x1="95" y1="44" x2="270" y2="44" stroke="#dc2626" stroke-width="1.4"/>
  <line x1="215" y1="102" x2="215" y2="58" stroke="#1d4ed8" stroke-width="1.4"/>
  <line x1="215" y1="58" x2="270" y2="58" stroke="#1d4ed8" stroke-width="1.4"/>
  <rect x="270" y="28" width="130" height="36" rx="5" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <text x="335" y="51" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="12">&Delta;p = 30 kPa</text>
  <line x1="38" y1="90" x2="38" y2="150" stroke="#64748b" stroke-width="1" marker-start="url(#fm17-dim)" marker-end="url(#fm17-dim)"/>
  <text x="30" y="124" text-anchor="end" fill="#64748b" font-size="12">D<tspan baseline-shift="sub" font-size="9">1</tspan></text>
  <text x="95" y="172" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">1</text>
  <text x="215" y="172" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">2</text>
  <text x="20" y="198" fill="#64748b" font-size="12">D<tspan baseline-shift="sub" font-size="9">1</tspan> = 100 mm, throat d = 60 mm, &beta; = d/D<tspan baseline-shift="sub" font-size="9">1</tspan> = 0.60, water.</text>
  <text x="20" y="220" fill="#1d4ed8" font-size="12">Q = C<tspan baseline-shift="sub" font-size="9">d</tspan>A<tspan baseline-shift="sub" font-size="9">2</tspan>&radic;[2&Delta;p / &rho;(1 &minus; &beta;&#8308;)]</text>
  <text x="20" y="242" fill="#64748b" font-size="12">Drop the (1 &minus; &beta;&#8308;) approach factor and you read about 7% low.</text>
</svg>`;

// q64 — jet on a plate: the momentum control volume, not an energy balance.
const figJet = `<svg viewBox="0 0 460 252" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="fm18-flow" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
    <marker id="fm18-f" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Jet on a plate: switch from energy to momentum</text>
  <rect x="150" y="44" width="150" height="152" fill="none" stroke="#64748b" stroke-width="1.2" stroke-dasharray="6 4"/>
  <text x="156" y="58" fill="#64748b" font-size="11">control volume</text>
  <path d="M40,96 L90,110 L90,130 L40,144 Z" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
  <rect x="90" y="110" width="190" height="20" fill="#dbeafe"/>
  <line x1="110" y1="120" x2="200" y2="120" stroke="#1d4ed8" stroke-width="2.6" marker-end="url(#fm18-flow)"/>
  <text x="172" y="96" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">&oslash;15 mm jet, V = 20 m/s</text>
  <rect x="280" y="50" width="12" height="140" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
  <path d="M262,110 C262,92 268,76 268,62" fill="none" stroke="#1d4ed8" stroke-width="2" marker-end="url(#fm18-flow)"/>
  <path d="M262,130 C262,148 268,164 268,178" fill="none" stroke="#1d4ed8" stroke-width="2" marker-end="url(#fm18-flow)"/>
  <line x1="296" y1="120" x2="352" y2="120" stroke="#dc2626" stroke-width="2.8" marker-end="url(#fm18-f)"/>
  <text x="358" y="124" fill="#dc2626" font-weight="600" font-size="12">F</text>
  <text x="20" y="216" fill="#64748b" font-size="12">All x-momentum entering leaves sideways, so F = &#7745;V = (&rho;AV)V.</text>
  <text x="20" y="238" fill="#dc2626" font-size="12">F = &rho;AV&sup2; &mdash; twice the &frac12;&rho;V&sup2;A a dynamic-pressure guess gives.</text>
</svg>`;

const extra: Question[] = [
  {
    id: "fluid-mechanics-q13",
    type: "mc",
    difficulty: 1,
    prompt: "<p>A cooling loop carries water through a 25 mm tube. The flow later enters two identical 25 mm tubes in parallel, and both branches see the same resistance. What happens to the average velocity in each branch compared with the single upstream tube?</p>",
    choices: [
      "It doubles, because the flow now has two separate outlets to leave through.",
      "It stays the same, because every tube in the loop has an identical diameter.",
      "It drops to a quarter of the upstream value, since area and flow both split in two.",
      "It halves, because each branch carries half of the total volume flow."
    ],
    answer: 3,
    explanation: "<p>For steady incompressible flow, the total volume flow is conserved. With two identical parallel branches, symmetry gives Q<sub>branch</sub> = Q<sub>total</sub>/2. Each branch has the same area as the upstream tube, so V<sub>branch</sub> = Q<sub>branch</sub>/A = Q<sub>total</sub>/(2A) = V<sub>upstream</sub>/2. The same-diameter answer ignores the fact that flow rate split, not just area, sets velocity. The one-quarter answer would be correct only if each branch had twice the upstream area and half the flow. A good follow-up is pressure drop: each branch has lower velocity, but the manifold losses may still dominate if the split is abrupt.</p>"
  },
  {
    id: "fluid-mechanics-q14",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A garden nozzle converts a 120 kPa gauge pressure drop into jet velocity. Neglect elevation and losses. Estimate the ideal water jet speed in m/s using &rho; = 1000 kg/m<sup>3</sup>.</p>",
    answer: 15.5,
    unit: "m/s",
    tolerance: 0.03,
    explanation: "<p>Use Bernoulli between the low-speed hose and the free jet: &Delta;p = 0.5&rho;V<sup>2</sup>. Solve for speed:</p><p>V = &radic;(2&Delta;p/&rho;) = &radic;(2(120000)/1000) = &radic;240 = <strong>15.5 m/s</strong>.</p><p>The calculation uses gauge pressure correctly because both points are referenced to atmosphere; the jet exits at atmospheric static pressure. Losses, contraction coefficient, and a nonzero upstream velocity would reduce the real speed. The common unit error is using 120 instead of 120000 Pa, which gives a speed smaller by &radic;1000 and is physically absurd for a garden nozzle.</p>"
  },
  {
    id: "fluid-mechanics-q15",
    type: "mc",
    difficulty: 1,
    prompt: "<p>A pump suction gauge reads &minus;65 kPa gauge while pumping water at 20 &deg;C. Atmospheric pressure is 101 kPa absolute and the vapor pressure of water is about 2.3 kPa absolute. What is the most important cavitation check?</p>",
    choices: [
      "Compare &minus;65 kPa with 2.3 kPa directly, since vapour pressure is also a gauge value.",
      "Ignore the suction gauge, because cavitation is set by discharge pressure alone.",
      "Convert to absolute first: 101 &minus; 65 = 36 kPa, then compare with vapour pressure.",
      "Treat negative gauge pressure as proof that cavitation cannot occur in the line."
    ],
    answer: 2,
    explanation: "<p>Vapor pressure is an absolute pressure, so the suction reading must be converted before judging cavitation. Here p<sub>abs</sub> = 101 - 65 = 36 kPa, which is above 2.3 kPa at the gauge tap, but that alone is not enough. Pressure can fall further through the inlet line and inside the pump eye, and NPSH required includes margin. Comparing the gauge reading straight against vapour pressure mixes two different datums; blaming discharge pressure ignores where cavitation actually starts; and treating negative gauge pressure as proof of safety is backwards, since a deep vacuum on the suction is the warning sign. The design move is to calculate NPSH available and compare it with the pump curve at the actual flow.</p>"
  },
  {
    id: "fluid-mechanics-q16",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A short hose has three fittings with total minor-loss coefficient K = 4.5. Water velocity is 3.0 m/s. Estimate the pressure loss from the fittings in kPa.</p>",
    answer: 20.3,
    unit: "kPa",
    tolerance: 0.03,
    explanation: "<p>Minor losses use the same dynamic-pressure scale as pipe friction:</p><p>&Delta;p = K(&rho;V<sup>2</sup>/2) = 4.5(1000(3.0)<sup>2</sup>/2).</p><p>The dynamic pressure is 1000(9)/2 = 4500 Pa, so &Delta;p = 4.5(4500) = 20250 Pa = <strong>20.3 kPa</strong>.</p><p>Which is why fittings dominate compact plumbing, manifolds and test rigs. A tempting mistake is to add K to L/D directly without multiplying by dynamic pressure, or to forget that velocity is squared. If the hose velocity doubles, this loss rises by roughly 4 times.</p>"
  },
  {
    id: "fluid-mechanics-q17",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A rectangular electronics cooling duct is 80 mm wide and 6 mm tall. A candidate computes Reynolds number using 80 mm as the characteristic length. What is the better first-pass choice for internal duct flow?</p>",
    choices: [
      "Use the duct diagonal, because it is the largest single dimension available.",
      "Use the fan blade diameter, because the fan is what creates the flow here.",
      "Use no length scale at all; Reynolds number applies only to circular pipes.",
      "Use D<sub>h</sub> = 4A/P, since wetted perimeter sets the wall shear."
    ],
    answer: 3,
    explanation: "<p>For noncircular internal ducts, the standard first-pass length scale is hydraulic diameter, D<sub>h</sub> = 4A/P, where P is wetted perimeter. For this shallow duct, D<sub>h</sub> is much closer to the 6 mm gap than the 80 mm width, so using the width would overstate Reynolds number and understate friction. The diagonal is a geometry measurement, not a shear length. The fan diameter may matter to fan performance, but not to duct Reynolds number. Hydraulic diameter is still an approximation; very high aspect-ratio ducts can need geometry-specific friction correlations.</p>"
  },
  {
    id: "fluid-mechanics-q18",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A pump curve is H<sub>pump</sub> = 30 - 2000Q<sup>2</sup> and the system curve is H<sub>sys</sub> = 6 + 1000Q<sup>2</sup>, with H in meters and Q in m<sup>3</sup>/s. Estimate the operating flow rate Q.</p>",
    figure: figOperating,
    answer: 0.0894,
    unit: "m^3/s",
    tolerance: 0.03,
    explanation: "<p>The operating point is the intersection of pump head and required system head:</p><p>30 - 2000Q<sup>2</sup> = 6 + 1000Q<sup>2</sup>.</p><p>Move terms: 24 = 3000Q<sup>2</sup>, so Q<sup>2</sup> = 0.00800 and Q = <strong>0.0894 m<sup>3</sup>/s</strong>.</p><p>The pump does not impose a fixed flow by itself; it supplies whatever head its curve allows at the system resistance. A common interview error is reading 30 m as the operating head at every flow. At this point the head is H = 6 + 1000(0.00800) = 14 m, well below shutoff head, which is physically consistent.</p>"
  },
  {
    id: "fluid-mechanics-q19",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A pump draws water from an open tank. Atmospheric head is 10.3 m of water, the pump centerline is 1.5 m below the tank free surface, suction-line loss is 1.1 m, and vapor-pressure head is 0.3 m. Estimate NPSH available in meters.</p>",
    answer: 10.4,
    unit: "m",
    tolerance: 0.03,
    explanation: "<p>For an open tank feeding a pump below the liquid surface:</p><p>NPSH<sub>A</sub> = atmospheric head + static suction head - vapor-pressure head - suction loss.</p><p>Substitute: NPSH<sub>A</sub> = 10.3 + 1.5 - 0.3 - 1.1 = <strong>10.4 m</strong>.</p><p>The static term is positive because the free surface is above the pump eye. If the pump were above the tank, that term would be negative. Using discharge pressure or gauge pressure directly is the error; cavitation risk is set by absolute pressure at the pump inlet relative to vapor pressure, with losses included. You would compare 10.4 m to NPSH required from the pump curve plus margin at the selected flow.</p>"
  },
  {
    id: "fluid-mechanics-q20",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A microfluidic channel is only 30 hydraulic diameters long, and its Reynolds number is about 800. Which modeling warning matters most for pressure-drop prediction?</p>",
    choices: [
      "The flow is turbulent at Re = 800, so laminar friction relations cannot be used.",
      "Entrance length is about 0.05Re&middot;D &asymp; 40D, longer than the channel itself.",
      "The profile is fully developed within one diameter, so entrance effects change nothing.",
      "Entrance effects exist only in external boundary layers, never inside ducts."
    ],
    answer: 1,
    explanation: "<p>Laminar entrance length is roughly L<sub>e</sub>/D &approx; 0.05Re. At Re = 800, L<sub>e</sub>/D &approx; 40, longer than this 30D channel. That means much of the channel has a developing velocity profile, and the pressure drop can be higher than the fully developed formula predicts. Calling Re = 800 turbulent reverses the interpretation. That is firmly laminar for pipe flow. Claiming the profile is developed within one diameter ignores how slowly wall boundary layers merge in laminar flow, and confining entrance effects to external aerodynamics is simply wrong for ducts. The practical design check is to include entrance-loss/developing-flow correlations, especially in short passages, heat exchangers, and microchannels.</p>"
  },
  {
    id: "fluid-mechanics-q21",
    type: "mc",
    difficulty: 2,
    prompt: "<p>Air at room conditions flows through a test section at 140 m/s. The team wants to use incompressible Bernoulli with constant density. What is the strongest objection?</p>",
    choices: [
      "M &asymp; 140/340 = 0.41, past the M &asymp; 0.3 rule, so density change matters.",
      "Nothing is wrong &mdash; gas flow stays incompressible at any speed below Mach 1 anywhere.",
      "Bernoulli applies only to liquids, so no gas test section may ever use it.",
      "Compressibility is fixed by duct roughness and area ratio, not by flow speed."
    ],
    answer: 0,
    explanation: "<p>Use Mach number as the quick screen: M = V/a &approx; 140/340 = 0.41. A common rule is that incompressible gas flow is usually reasonable below M &approx; 0.3 when pressure changes are modest. At M &approx; 0.41, density variation and compressible-flow relations may matter. Treating everything subsonic as incompressible is far too loose: it is the M &asymp; 0.3 line that matters, not Mach 1. Bernoulli certainly has gas applications, so restricting it to liquids is wrong, and roughness has nothing to do with compressibility. A good interview answer would ask how much pressure drop is allowed and whether stagnation/static measurements need compressible corrections.</p>"
  },
  {
    id: "fluid-mechanics-q22",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A long water line has wave speed a = 1200 m/s. A fast valve closure reduces velocity by 1.4 m/s. Use the Joukowsky estimate &Delta;p = &rho;a&Delta;V with &rho; = 1000 kg/m<sup>3</sup>. What pressure spike results in MPa?</p>",
    answer: 1.68,
    unit: "MPa",
    tolerance: 0.03,
    explanation: "<p>Water hammer converts fluid momentum into a pressure wave. The quick estimate is:</p><p>&Delta;p = &rho;a&Delta;V = 1000(1200)(1.4) = 1680000 Pa = <strong>1.68 MPa</strong>.</p><p>That is about 16.8 bar, often larger than the steady pressure drop in the same line. The calculation assumes a rapid closure relative to wave travel time and a single wave-speed value; real piping adds pipe elasticity, reflections, valve closure profile, and surge devices. The common omission is doing only a steady Darcy loss calculation and missing the transient load that can split fittings or slam supports.</p>"
  },
  {
    id: "fluid-mechanics-q23",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A diffuser expands a duct to recover static pressure, but a prototype shows worse pressure recovery when the expansion angle is increased aggressively. What flow feature is the likely cause?</p>",
    choices: [
      "The inlet area became too small for continuity to hold across the expansion.",
      "Ideal Bernoulli guarantees better recovery whenever the flow area increases.",
      "Boundary-layer separation in the adverse gradient creates recirculation and loss.",
      "Reynolds number must fall to exactly zero for any diffuser to recover pressure."
    ],
    answer: 2,
    explanation: "<p>A diffuser asks the flow to slow down and raise static pressure, which creates an adverse pressure gradient. If the expansion is too steep or the inlet boundary layer is already thick, the near-wall flow can reverse and separate. The separated region destroys pressure recovery and adds loss. The ideal-flow option is the classic misreading: Bernoulli along a streamline says nothing about whether the boundary layer stays attached, so area increase alone does not guarantee recovery. Continuity never fails, and a diffuser at Re = 0 is not a physical case. Designers use modest diffuser angles, boundary-layer control, guide vanes, or longer length. What the question wants is the bridge from conservation equations to viscous flow behaviour.</p>"
  },
  {
    id: "fluid-mechanics-q24",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>Estimate the terminal speed of a falling 0.020 N sensor tag in air if C<sub>D</sub> = 1.2, projected area A = 0.0030 m<sup>2</sup>, and &rho; = 1.2 kg/m<sup>3</sup>. Use W = 0.5&rho;V<sup>2</sup>C<sub>D</sub>A.</p>",
    answer: 3.04,
    unit: "m/s",
    tolerance: 0.03,
    explanation: "<p>At terminal speed, drag equals weight:</p><p>W = 0.5&rho;V<sup>2</sup>C<sub>D</sub>A, so V = &radic;(2W/(&rho;C<sub>D</sub>A)).</p><p>Substitute: V = &radic;(2(0.020)/(1.2(1.2)(0.0030))) = &radic;(0.040/0.00432) = &radic;9.26 = <strong>3.04 m/s</strong>.</p><p>Using mass instead of weight is the slip here; the problem already gives W in newtons. The estimate also assumes a constant C<sub>D</sub>, which may shift with orientation and Reynolds number. A broad, light tag falling at jogging speed is about right.</p>"
  },
  {
    id: "fluid-mechanics-q25",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A stainless tube is replaced by rough cast pipe at the same diameter, flow rate, and length. Reynolds number stays high and turbulent. Which result is most likely?</p>",
    choices: [
      "Pressure drop must fall, because a rough surface trips turbulence earlier on.",
      "Pressure drop is unchanged, because viscosity alone fixes turbulent wall loss.",
      "Pressure drop rises, because turbulent f depends on relative roughness.",
      "Only hydrostatic pressure changes; friction loss ignores the wall condition entirely."
    ],
    answer: 2,
    explanation: "<p>In turbulent pipe flow, friction factor depends on both Reynolds number and relative roughness &epsilon;/D. Once the flow is highly turbulent, roughness can dominate the wall shear and raise pressure drop significantly. The wrong answers confuse transition with loss: tripping turbulence may help some external-flow drag cases, but in a pipe the rough wall usually costs pump power. Hydrostatic pressure depends on elevation, not wall finish, but total head loss includes friction. The practical check is a Moody chart or Colebrook/Swamee-Jain correlation using actual roughness and diameter.</p>"
  },
  {
    id: "fluid-mechanics-q26",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A CFD plot for a manifold shows perfectly even branch flow, but the mesh has one cell across each small port and there is no comparison with pressure-drop tests. What should make you skeptical?</p>",
    choices: [
      "Nothing &mdash; a converged velocity contour plot is direct experimental evidence.",
      "CFD solvers cannot handle incompressible flow, so the whole result is meaningless.",
      "Validation belongs after production tooling is cut, not during the design phase.",
      "One cell across a port cannot resolve the loss, and nothing was checked against test."
    ],
    answer: 3,
    explanation: "<p>Manifold branch balance is sensitive to local losses, separation, port entrance geometry, turbulence treatment, and boundary conditions. One cell across a port cannot resolve a realistic velocity profile or loss. CFD is useful, but it needs mesh refinement, residual and conservation checks, comparison to simple K-loss estimates, and ideally measured pressure/flow data. Treating a colour plot as proof is the answer nobody wants; declaring CFD incapable of incompressible flow throws away a useful tool; and deferring validation until tooling is cut is how the error reaches production. The engineering answer is to use CFD as one piece of evidence and close the loop with scale tests or instrumented prototypes.</p>"
  },
  {
    id: "fluid-mechanics-q27",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>Oil with &mu; = 0.12 Pa&middot;s flows laminar in a 10 mm diameter tube at average velocity 0.40 m/s over L = 2.0 m. Use &Delta;p = 32&mu;LV/D<sup>2</sup>. Estimate pressure drop in kPa.</p>",
    answer: 30.7,
    unit: "kPa",
    tolerance: 0.03,
    explanation: "<p>Use D in meters: D = 0.010 m.</p><p>&Delta;p = 32&mu;LV/D<sup>2</sup> = 32(0.12)(2.0)(0.40)/(0.010)<sup>2</sup>.</p><p>The numerator is 3.072, and D<sup>2</sup> = 0.0001, so &Delta;p = 30720 Pa = <strong>30.7 kPa</strong>.</p><p>This is the laminar fully developed result, equivalent to Hagen-Poiseuille written with average velocity. It is very viscosity-sensitive; warming the oil could cut &mu; and pressure drop dramatically. A common mistake is forgetting the diameter squared, or using 10 instead of 0.010, which destroys the units.</p>"
  },
  {
    id: "fluid-mechanics-q28",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A gas valve has a large upstream-to-downstream pressure ratio. Opening the downstream vent further no longer increases measured mass flow. What phenomenon is the likely limit?</p>",
    choices: [
      "Cavitation, because all fast flows are liquid vaporization problems.",
      "Laminar entrance length, because the valve must be fully developed.",
      "Hydrostatic head, because gas density is infinite at low pressure.",
      "Choked compressible flow, where the controlling section reaches Mach 1."
    ],
    answer: 3,
    explanation: "<p>For compressible gas flow through a restriction, enough pressure ratio can drive the throat or vena contracta to sonic speed. Once choked, downstream pressure reductions do not communicate upstream strongly enough to increase mass flow through the restriction; mass flow is set mainly by upstream stagnation conditions and geometry. Cavitation is a liquid low-pressure vapor problem, not the usual gas choking mechanism. A valve sizing answer should check both choking and noise/temperature effects. Using incompressible Q = C<sub>d</sub>A&radic;(2&Delta;p/&rho;) indefinitely as downstream pressure approaches vacuum.</p>"
  },
  {
    id: "fluid-mechanics-q29",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>Water discharges through a 10 mm diameter sharp-edged orifice with C<sub>d</sub> = 0.62 and pressure drop &Delta;p = 100 kPa. Estimate Q in L/s using Q = C<sub>d</sub>A&radic;(2&Delta;p/&rho;).</p>",
    answer: 0.688,
    unit: "L/s",
    tolerance: 0.03,
    explanation: "<p>Area is A = &pi;D<sup>2</sup>/4 = &pi;(0.010)<sup>2</sup>/4 = 7.85 &times; 10<sup>&minus;5</sup> m<sup>2</sup>.</p><p>The ideal velocity factor is &radic;(2&Delta;p/&rho;) = &radic;(2(100000)/1000) = &radic;200 = 14.14 m/s.</p><p>Q = 0.62(7.85 &times; 10<sup>&minus;5</sup>)(14.14) = 6.88 &times; 10<sup>&minus;4</sup> m<sup>3</sup>/s = <strong>0.688 L/s</strong>.</p><p>The discharge coefficient accounts for contraction and loss. Without it, the answer would be 1.11 L/s, an optimistic ideal-flow error.</p>"
  },
  {
    id: "fluid-mechanics-q30",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A refrigeration suction line carries a mixture of vapor and entrained liquid droplets. A teammate wants to use a single-phase liquid pressure-drop chart because the line contains some liquid. What is the main technical problem?</p>",
    choices: [
      "Two-phase pressure drop is near zero because the vapour carries the liquid along.",
      "Line colour and insulation, not phase behaviour, set two-phase pressure loss.",
      "Slip, changing quality and flow regime make single-phase charts badly wrong here.",
      "Vapour and liquid always travel at identical velocity in every line orientation."
    ],
    answer: 2,
    explanation: "<p>Two-phase flow is not just an averaged single-phase fluid. Gas and liquid can travel at different velocities, arrange as stratified, slug, annular, or bubbly flow, and exchange heat and mass. Orientation matters because gravity separates phases; bends and fittings can trigger slugging. A single-phase liquid chart usually uses the wrong density, viscosity, and wall-shear physics. The design risks are compressor liquid slugging, oil return problems, noise, vibration, and underpredicted pressure loss. A good answer would choose a two-phase correlation or test data for the expected refrigerant, quality, mass flux, and line geometry.</p>"
  },
  {
    id: "fluid-mechanics-q31",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A geometrically similar fan runs at 1800 rpm and draws 2.4 kW. Estimate the power at 1500 rpm at the same operating similarity using the affinity law P &prop; N<sup>3</sup>.</p>",
    answer: 1.39,
    unit: "kW",
    tolerance: 0.03,
    explanation: "<p>For similar fan operation, power scales with speed cubed:</p><p>P<sub>2</sub> = P<sub>1</sub>(N<sub>2</sub>/N<sub>1</sub>)<sup>3</sup> = 2.4(1500/1800)<sup>3</sup>.</p><p>The speed ratio is 0.8333, and 0.8333<sup>3</sup> = 0.579. Therefore P<sub>2</sub> = 2.4(0.579) = <strong>1.39 kW</strong>.</p><p>The useful lesson is that a modest speed reduction can save a large amount of power. The law assumes the operating point remains dynamically similar; a real system curve, stall region, motor efficiency, or control damper can move the actual point.</p>"
  },
  {
    id: "fluid-mechanics-q32",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A control valve is selected only by matching nominal pipe size. In service it is noisy, erodes trim, and cannot hold stable flow at small openings. What was missing from the sizing work?</p>",
    choices: [
      "Required C<sub>v</sub> at the real &Delta;p, plus rangeability, authority and cavitation checks.",
      "Nothing &mdash; matching nominal bore is the standard and sufficient sizing method.",
      "Only the maximum flow case, because the extreme duty bounds every other duty.",
      "Only the catalogue C<sub>v</sub> at full open, which is the valve's rated capacity."
    ],
    answer: 0,
    explanation: "<p>A valve is a controlled restriction, not just a pipe-size adapter. Correct selection needs flow requirement, allowable pressure drop, fluid density and vapor pressure or gas compressibility, valve characteristic, rangeability, installed authority, noise, erosion velocity, and cavitation/choking limits. Oversized valves often hunt near the seat, while high pressure recovery can cavitate and destroy trim. Matching nominal bore is the catalogue shortcut that fails in the field, a line-size valve is usually grossly oversized and ends up throttling on the seat. Sizing on maximum flow alone ignores the low-flow end where control actually happens, and quoting rated C<sub>v</sub> at full open ignores the installed characteristic, where the valve shares the pressure drop with the pipe. A practical interview answer also asks whether the valve is for shutoff, throttling, or control; those duties need different trim and actuators.</p>"
  },
  {
    id: "fluid-mechanics-q33",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A sealed 0.0040 m<sup>3</sup> instrument pod is fully submerged in freshwater. What buoyant force acts upward? Use &rho; = 1000 kg/m<sup>3</sup> and g = 9.81 m/s<sup>2</sup>.</p>",
    answer: 39.2,
    unit: "N",
    tolerance: 0.03,
    explanation: "<p>Archimedes' principle says buoyant force equals the weight of displaced fluid:</p><p>F<sub>B</sub> = &rho;gV = 1000(9.81)(0.0040) = <strong>39.2 N</strong>.</p><p>The pod material does not enter this force directly; material density decides the pod weight, and net float/sink behavior is F<sub>B</sub> - W. A common slip is using the pod mass instead of displaced water volume. 0.0040 m<sup>3</sup> is 4 liters, which displaces about 4 kg of water, so the buoyancy should be about 4g = 39 N.</p>"
  },
  {
    id: "fluid-mechanics-q34",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A pipe network has two parallel branches between the same manifolds. Branch A is short and large diameter; Branch B is long and small diameter. How is the flow split determined?</p>",
    choices: [
      "Each branch carries exactly half the flow, because they share the same endpoints.",
      "Both branches see the same node-to-node &Delta;p; flows adjust until each loss matches.",
      "The branch with the larger internal volume always carries the smaller share of flow.",
      "The higher branch takes all the flow, since elevation outranks pipe resistance."
    ],
    answer: 1,
    explanation: "<p>Parallel branches share the same upstream and downstream manifold pressures, so each branch has the same total head loss between those nodes. The branch flow rates are not generally equal; the lower-resistance branch carries more flow until its loss rises enough to match the common pressure drop. Assuming an even split confuses identical geometry with parallel topology. Internal volume has no hydraulic role at all, and while elevation enters through head terms, it does not override resistance. Elevation matters through head terms, but resistance and boundary pressures still set the solution. The engineering workflow is to write a loss relation for each branch and enforce both continuity and equal node-to-node pressure drop.</p>"
  },
  {
    id: "fluid-mechanics-q35",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>An open tank of constant 1.0 m<sup>2</sup> plan area holds 2.0 m of water above a 20 mm sharp-edged hole (C<sub>d</sub> = 0.62). Nobody tops it up. How long does it take to run dry, in seconds?</p>",
    figure: figOrifice,
    answer: 3280,
    unit: "s",
    tolerance: 0.03,
    explanation: "<p>The instantaneous discharge is Q = C<sub>d</sub>A<sub>o</sub>&radic;(2gh), but h falls as the tank empties, so this is an integration rather than a division.</p><p>Volume balance on the tank: A<sub>t</sub>(dh/dt) = &minus;C<sub>d</sub>A<sub>o</sub>&radic;(2gh). Separating variables and integrating from h<sub>0</sub> down to zero gives</p><p>t = (A<sub>t</sub>/(C<sub>d</sub>A<sub>o</sub>))&radic;(2h<sub>0</sub>/g)</p><p>Substitute A<sub>o</sub> = &pi;(0.020)<sup>2</sup>/4 = 3.142 &times; 10<sup>&minus;4</sup> m<sup>2</sup>, so C<sub>d</sub>A<sub>o</sub> = 1.948 &times; 10<sup>&minus;4</sup> m<sup>2</sup>, and &radic;(2 &times; 2.0/9.81) = &radic;0.4077 = 0.6386:</p><p>t = (1.0/1.948 &times; 10<sup>&minus;4</sup>) &times; 0.6386 = 5134 &times; 0.6386 = <strong>3280 s</strong>, about 55 minutes.</p><p>The error here is exactly a factor of two. The starting flow is Q<sub>0</sub> = 0.62(3.142 &times; 10<sup>&minus;4</sup>)&radic;(2 &times; 9.81 &times; 2.0) = 1.22 L/s, and dividing the 2000 L of stored water by that constant rate gives 1639 s, precisely half the true answer, because the mean of &radic;h over the drain is half its initial value. Whenever a &radic;h potential drives the flow, expect the average rate to be half the initial rate. Real tanks also stop being quasi-steady in the last few centimetres, where vortexing and surface tension take over, and a vented tank is assumed throughout. Seal the top and it will airlock instead of draining.</p>"
  },
  {
    id: "fluid-mechanics-q36",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A U-tube manometer connected across an orifice shows the heavy manometer fluid higher on the downstream side. What does that sign usually indicate?</p>",
    choices: [
      "Downstream static pressure is the higher one, so the orifice is acting as a pump.",
      "Both taps sit at identical pressure, since a manometer cannot resolve a difference.",
      "The sign means nothing unless the pipe is vertical and the fluid is stagnant.",
      "Upstream pressure is higher, pushing the heavy fluid down on the upstream leg."
    ],
    answer: 3,
    explanation: "<p>In a differential manometer with denser manometer fluid, higher pressure on one side pushes the heavy fluid level down on that leg and up on the lower-pressure leg. Across an orifice or restriction, upstream static pressure is normally higher than downstream, so the heavy fluid rising on the downstream side is consistent. Calling the orifice a pump reverses the sign, and saying a manometer cannot resolve a difference denies the device its entire purpose. In real measurements, tap elevation, trapped air, pulsation, and density corrections matter, but the first sign check should match expected pressure loss across the restriction.</p>"
  },
  {
    id: "fluid-mechanics-q37",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>The same 100 mm duct is run at 3.0 m/s first on water (&rho; = 1000 kg/m<sup>3</sup>, &mu; = 1.0 &times; 10<sup>&minus;3</sup> Pa&middot;s) and then on air (&rho; = 1.2 kg/m<sup>3</sup>, &mu; = 1.8 &times; 10<sup>&minus;5</sup> Pa&middot;s). By what factor is the water Reynolds number larger than the air one?</p>",
    answer: 15.0,
    unit: "times",
    tolerance: 0.05,
    explanation: "<p>Same geometry and same velocity, so the ratio is purely a fluid-property question: it is the ratio of kinematic viscosities &nu; = &mu;/&rho;.</p><p>Water: Re = &rho;VD/&mu; = (1000)(3.0)(0.100)/(1.0 &times; 10<sup>&minus;3</sup>) = 3.0 &times; 10<sup>5</sup>.</p><p>Air: Re = (1.2)(3.0)(0.100)/(1.8 &times; 10<sup>&minus;5</sup>) = 0.36/(1.8 &times; 10<sup>&minus;5</sup>) = 2.0 &times; 10<sup>4</sup>.</p><p>Ratio = (3.0 &times; 10<sup>5</sup>)/(2.0 &times; 10<sup>4</sup>) = <strong>15.0</strong>, so the water case sits fifteen times higher.</p><p>Most candidates guess this backwards. Air is far less viscous than water in the &mu; sense, 55 times smaller, so the instinct is that air should give the bigger Reynolds number. But air is also 830 times less dense, and Re depends on &nu; = &mu;/&rho;, which is about 1.5 &times; 10<sup>&minus;5</sup> m<sup>2</sup>/s for air against 1.0 &times; 10<sup>&minus;6</sup> for water. In the only sense Reynolds number cares about, air is the more viscous fluid.</p><p>The consequence worth volunteering: small air passages go laminar far more readily than the equivalent water passages. Fine-pitch heat-sink fins and narrow electronics ducts routinely sit at Re of a few hundred, which brings poor convective heat transfer and entrance lengths comparable to the whole passage.</p>"
  },
  {
    id: "fluid-mechanics-q38",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>Water flows in an annulus with outer diameter 50 mm and inner rod diameter 30 mm. What is the hydraulic diameter in mm?</p>",
    answer: 20.0,
    unit: "mm",
    tolerance: 0.03,
    explanation: "<p>For a circular annulus, D<sub>h</sub> = 4A/P. The flow area is A = &pi;(D<sub>o</sub><sup>2</sup> - D<sub>i</sub><sup>2</sup>)/4, and wetted perimeter is P = &pi;(D<sub>o</sub> + D<sub>i</sub>).</p><p>So D<sub>h</sub> = D<sub>o</sub> - D<sub>i</sub> = 50 - 30 = <strong>20.0 mm</strong>.</p><p>This shortcut works for concentric annuli because the algebra cancels. Using outer diameter alone would overstate Reynolds number and underpredict friction. The design follow-up is whether the annulus is eccentric or rough; either can change pressure drop and heat transfer.</p>"
  },
  {
    id: "fluid-mechanics-q39",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A process line normally computes Re = 2600, and small temperature changes move viscosity by 20%. What is the safest interpretation of the flow regime?</p>",
    choices: [
      "Certainly turbulent in all conditions, so laminar correlations can never apply.",
      "Certainly laminar in all conditions, so upstream disturbances cannot matter.",
      "It sits in the transition band, so loss and heat transfer are genuinely uncertain.",
      "Reynolds number is meaningless here because viscosity varies with temperature."
    ],
    answer: 2,
    explanation: "<p>Pipe flow below about 2300 is typically laminar, above about 4000 is usually turbulent, and the transition range is not a sharp switch. Re = 2600 sits in that uncertain region, and a 20% viscosity shift could move Re enough to change behavior. Entrance disturbances, roughness, vibration, and fittings can also trigger turbulence earlier. The safe design response is not to pretend one correlation is exact; bracket the pressure drop, check operating temperatures, and if performance matters, test or design margin. This is exactly the kind of gray-zone judgment that matters.</p>"
  },
  {
    id: "fluid-mechanics-q40",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A loop runs on one pump with curve H = 30 &minus; 2000Q<sup>2</sup> against a system curve H = 6 + 1000Q<sup>2</sup> (H in m, Q in m<sup>3</sup>/s), settling at 0.0894 m<sup>3</sup>/s. Production wants more flow, so a second identical pump is added in parallel. What flow should you promise?</p>",
    figure: figParallel,
    choices: [
      "About 0.179 m<sup>3</sup>/s &mdash; two identical pumps deliver twice the single-pump flow.",
      "About 0.126 m<sup>3</sup>/s &mdash; only &radic;2 more, because system head climbs as Q<sup>2</sup>.",
      "About 0.089 m<sup>3</sup>/s &mdash; parallel pumps raise head only, so the flow is unchanged.",
      "About 0.045 m<sup>3</sup>/s &mdash; sharing one discharge line halves what each pump passes."
    ],
    answer: 1,
    explanation: "<p>Two identical pumps in parallel each carry half the total flow at the common head, so the combined curve is the single curve with Q doubled at every H:</p><p>H<sub>two</sub> = 30 &minus; 2000(Q/2)<sup>2</sup> = 30 &minus; 500Q<sup>2</sup></p><p>Intersect that with the unchanged system curve:</p><p>30 &minus; 500Q<sup>2</sup> = 6 + 1000Q<sup>2</sup> &rarr; 24 = 1500Q<sup>2</sup> &rarr; Q<sup>2</sup> = 0.0160 &rarr; Q = <strong>0.126 m<sup>3</sup>/s</strong></p><p>That is 0.126/0.0894 = 1.41&times;, not 2&times;. Head rose from 14 m to 6 + 1000(0.0160) = 22 m, and every extra metre is loss the new flow has to pay for. Doubling the pumps bought 41% more flow for twice the capital and roughly 2.2&times; the power.</p><p>State the general rule: parallel pumping pays off on a flat, static-lift-dominated system curve, such as filling a high tank, and pays badly on a steep, loss-dominated curve like this one. Series pumping is the mirror image. Two checks a reviewer will want: each pump now runs at 0.063 m<sup>3</sup>/s, well left of where it sat alone, so confirm that point is still above minimum continuous stable flow; and if one pump trips, the survivor runs out to a higher flow than it ever saw before, which is exactly where NPSH shortfalls and motor overload show up.</p>"
  },
  {
    id: "fluid-mechanics-q41",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A nozzle test stand measures the force on its mounting frame. A candidate uses Bernoulli to compute exit velocity but stops there. What balance is needed to predict the mount load?</p>",
    choices: [
      "A control-volume momentum balance including momentum flux and pressure forces.",
      "Only hydrostatics, because no fluid accelerates inside a nozzle.",
      "Only the vapor pressure table, because thrust is a cavitation property.",
      "No balance; the mount load is always zero if inlet and outlet areas differ."
    ],
    answer: 0,
    explanation: "<p>Bernoulli can help estimate velocity, but support force comes from momentum change and pressure forces over a control volume. The nozzle accelerates fluid, so the hardware must provide an equal and opposite force. If inlet and exit pressures are not both atmospheric, pressure-area terms can be as important as &dot;m&Delta;V. Reaching for hydrostatics ignores the fact that the fluid is accelerating, and claiming zero mount load violates Newton's third law. It usually follows a Bernoulli calculation, to see whether you can switch from an energy view to a force view. The same idea explains forces on elbows, jets, sprinklers, and rocket nozzles.</p>"
  },
  {
    id: "fluid-mechanics-q42",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>Water flows through a 90&deg; elbow at Q = 0.020 m<sup>3</sup>/s with speed 4.0 m/s. Neglect pressure imbalance and weight. Estimate the magnitude of the momentum force the fluid exerts on the elbow in N.</p>",
    answer: 113,
    unit: "N",
    tolerance: 0.03,
    explanation: "<p>Mass flow is &dot;m = &rho;Q = 1000(0.020) = 20 kg/s. The velocity changes from 4.0 m/s in x to 4.0 m/s in y, so the vector change magnitude is &radic;((0 - 4)<sup>2</sup> + (4 - 0)<sup>2</sup>) = 5.657 m/s.</p><p>The momentum-force magnitude is &dot;m|&Delta;V| = 20(5.657) = <strong>113 N</strong>.</p><p>The force on the elbow is opposite the force needed to turn the fluid. Real elbows also have pressure forces, weight, and loss-induced pressure differences, which can be larger than this simplified momentum term. Using only scalar speed change, which is zero, leads straight to concluding there is no force.</p>"
  },
  {
    id: "fluid-mechanics-q43",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A centrifugal pump makes a gravel-like noise, vibration rises, and the impeller shows pitted damage near the inlet after testing hot water. Which root cause deserves first attention?</p>",
    choices: [
      "NPSH margin vanished: hot water raised vapour pressure until the eye flashed.",
      "The discharge pipe was too smooth for turbulence to form and carry the heat away fast.",
      "Inlet absolute pressure was far too high, over-compressing the liquid at the eye.",
      "Motor speed was too low, so the impeller never developed any flow at all."
    ],
    answer: 0,
    explanation: "<p>Noise, vibration, and pitting at the impeller eye are classic cavitation symptoms. Hot water has higher vapor pressure, reducing NPSH available. High flow can also increase suction losses and raise NPSH required. The check is NPSH<sub>A</sub> versus NPSH<sub>R</sub> at the actual temperature and operating point, with margin. Smooth discharge pipe is unrelated and only reduces loss; too much inlet absolute pressure is the opposite of the problem; and a stalled motor would not produce pitting concentrated at the impeller eye. Correct fixes include lowering pump, increasing suction line diameter, reducing flow/speed, cooling the liquid, raising tank pressure, or selecting a pump with lower NPSH required.</p>"
  },
  {
    id: "fluid-mechanics-q44",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A 1:5 scale water model of a pipe fitting is tested with the same fluid as the prototype. To match Reynolds number, how should model velocity compare with prototype velocity?</p>",
    answer: 5.0,
    unit: "times prototype velocity",
    tolerance: 0.03,
    explanation: "<p>Reynolds number is Re = &rho;VD/&mu;. With the same fluid, &rho; and &mu; are unchanged, so matching Re requires V<sub>m</sub>D<sub>m</sub> = V<sub>p</sub>D<sub>p</sub>.</p><p>The model length is D<sub>m</sub> = D<sub>p</sub>/5, so V<sub>m</sub> = 5V<sub>p</sub>. The model must run at <strong>5.0 times</strong> the prototype velocity.</p><p>This can be impractical because dynamic pressure and pump power rise sharply. Scale testing often cannot match every dimensionless group at once; for free-surface flows Froude similarity may be more important, while for pipe losses Reynolds similarity is usually the target.</p>"
  },
  {
    id: "fluid-mechanics-q45",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A team reports drag coefficient for a bluff body but does not specify the reference area. Why is the result ambiguous?</p>",
    choices: [
      "C<sub>D</sub> is dimensionless, so the choice of reference area cannot change it.",
      "Reference area matters in water but not in air, where density is nearly constant.",
      "For one measured force, frontal, planform or wetted area give different C<sub>D</sub>.",
      "A bluff body has no well-defined projected area, so no area needs quoting."
    ],
    answer: 2,
    explanation: "<p>Drag coefficient packages measured drag relative to dynamic pressure and a specified area. For the same force, using frontal area, planform area, or wetted area gives different C<sub>D</sub>. That does not mean the data are wrong; it means the convention must be stated to compare values or use them in design. Saying dimensionless means area-independent misses the normalization entirely, and the water-versus-air distinction does not exist. This is a common data-sheet hazard for vehicles, heat-sink fins, parachutes and valves. Always carry both C<sub>D</sub> and the reference area definition.</p>"
  },
  {
    id: "fluid-mechanics-q46",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A 1:16 scale boat model is tested using Froude similarity. If the prototype speed is 8.0 m/s, what model speed should be used?</p>",
    answer: 2.0,
    unit: "m/s",
    tolerance: 0.03,
    explanation: "<p>Froude number is Fr = V/&radic;(gL). Matching Fr with the same gravity gives V<sub>m</sub>/&radic;L<sub>m</sub> = V<sub>p</sub>/&radic;L<sub>p</sub>.</p><p>For a 1:16 length scale, L<sub>m</sub>/L<sub>p</sub> = 1/16, so V<sub>m</sub> = V<sub>p</sub>&radic;(1/16) = 8.0/4 = <strong>2.0 m/s</strong>.</p><p>Froude scaling is used for free-surface waves because gravity waves set the dominant physics. It will not also match Reynolds number with the same fluid, so viscous drag needs correction. That tradeoff is the central issue in ship-model testing.</p>"
  },
  {
    id: "fluid-mechanics-q47",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>For laminar pipe flow at Re = 1000 in a D = 10 mm tube, estimate entrance length using L<sub>e</sub>/D = 0.05Re. Give L<sub>e</sub> in meters.</p>",
    answer: 0.5,
    unit: "m",
    tolerance: 0.03,
    explanation: "<p>Compute the dimensionless entrance length:</p><p>L<sub>e</sub>/D = 0.05Re = 0.05(1000) = 50.</p><p>With D = 10 mm = 0.010 m, L<sub>e</sub> = 50(0.010) = <strong>0.500 m</strong>.</p><p>If the physical tube is shorter than this, fully developed laminar assumptions are questionable. The result is often surprising in small hydraulic passages: a short-looking tube can be entrance dominated. In turbulent flow the entrance-length estimate differs, and fittings upstream can reset or distort the developing profile.</p>"
  },
  {
    id: "fluid-mechanics-q48",
    type: "mc",
    difficulty: 1,
    prompt: "<p>A sealed vessel pressure transmitter reports &minus;80 kPa gauge at sea level. The vessel contains water near room temperature. Which interpretation is correct?</p>",
    choices: [
      "Absolute pressure is about 21 kPa &mdash; above vapour pressure, but with little margin.",
      "Absolute pressure is &minus;80 kPa, so the pressure in the vessel is truly negative.",
      "The gauge reading can go straight into the ideal gas law with no atmospheric correction applied.",
      "Gauge and absolute pressure coincide whenever liquid water is present in the vessel."
    ],
    answer: 0,
    explanation: "<p>At sea level, p<sub>abs</sub> = p<sub>atm</sub> + p<sub>gauge</sub> = 101 - 80 = 21 kPa. Room-temperature water vapor pressure is only about 2 to 3 kPa, so bulk boiling is not implied by the transmitter reading, but the margin is much smaller than at atmosphere. A negative absolute pressure is impossible; a negative gauge reading only means below ambient. Feeding the gauge value into a gas law would understate absolute pressure by a factor of five here. In pump or siphon problems, this distinction is decisive because cavitation and gas laws use absolute pressure.</p>"
  },
  {
    id: "fluid-mechanics-q49",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A long pipeline repeatedly fails near elbows after quick valve closures, even though steady pressure-drop calculations show modest loads. Which mitigation directly addresses the likely transient mechanism?</p>",
    choices: [
      "Polish the pipe exterior to lower aerodynamic drag along the exposed pipe run.",
      "Fit smaller pipe to raise velocity, which shortens the transient and its load.",
      "Close valves slowly, add surge volume, and check supports for hammer loads.",
      "Ignore valve timing, since only steady Darcy friction generates pipe pressure."
    ],
    answer: 2,
    explanation: "<p>The failure pattern points to water hammer: rapid changes in flow velocity create pressure waves and unsteady forces, especially at elbows and dead ends. Slower valve closure reduces &Delta;V over the critical wave time, while surge tanks, accumulators, air chambers, or arrestors absorb energy. Supports must be designed for transient thrust, not only steady pressure and weight. Smaller pipe usually increases velocity and can worsen the spike. This is a failure-mode question: the calculations were not wrong for steady operation; they were the wrong model for the damaging event.</p>"
  },
  {
    id: "fluid-mechanics-q50",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A pump test shows the operating point far left of the best-efficiency point at very low flow, with high casing temperature and recirculation noise. What is the most defensible design response?</p>",
    choices: [
      "Check minimum continuous stable flow; add a bypass or fit a smaller pump.",
      "Keep running there &mdash; lower flow always means lower load and lower risk.",
      "Remove the suction strainer so the flow drops further and the pump unloads.",
      "Watch only motor current; hydraulic behaviour is irrelevant at low flow."
    ],
    answer: 0,
    explanation: "<p>Centrifugal pumps have preferred operating regions. Far left of best efficiency, internal recirculation, radial thrust, vibration, heating, and seal stress can become severe even though external flow is low. Minimum continuous stable flow and minimum thermal flow are real catalog limits. The fix may be a recirculation bypass, variable speed, impeller trim, a smaller pump, or a different pump type. The idea that less flow is always gentler is the common misconception this question exists to break. In pump design, both high-flow runout and low-flow recirculation can be damaging.</p>"
  },
  {
    id: "fluid-mechanics-q51",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A turbulent water line is to be re-routed through a tighter space, and someone proposes halving the bore from 50 mm to 25 mm. The flow rate and the run length stay the same, and the friction factor barely moves. By what factor does the pressure drop change?</p>",
    figure: figDiameter,
    answer: 32,
    unit: "times",
    tolerance: 0.03,
    explanation: "<p>Hold Q fixed and push the diameter through Darcy-Weisbach one term at a time.</p><p>Velocity: V = Q/A = 4Q/&pi;D<sup>2</sup>, so V &prop; 1/D<sup>2</sup>. Halving D therefore multiplies velocity by 4, from 2 m/s to 8 m/s in a typical line.</p><p>Velocity head: &rho;V<sup>2</sup>/2 &prop; 1/D<sup>4</sup>, a factor of 16.</p><p>Length ratio: L/D &prop; 1/D, one further factor of 2.</p><p class=\"eq\">&Delta;p = f(L/D)(&rho;V<sup>2</sup>/2) &prop; f L Q<sup>2</sup>/D<sup>5</sup> &rarr; 2<sup>5</sup> = <strong>32&times;</strong></p><p>Nothing else in a pipe system has this much weight, which is why the fifth-power law is the most-asked result in the subject. The common wrong answers are 4&times; (only the velocity head, forgetting L/D), 16&times; (V<sup>2</sup> but not the extra 1/D) and 2&times; (treating it as linear in diameter).</p><p>Two refinements a strong candidate adds. First, f is not exactly constant: at four times the velocity Reynolds number quadruples and the relative roughness doubles, so f typically rises slightly in a rough pipe and the real factor lands a little above 32. Second, the law runs the other way too, going one size up from 50 mm to 65 mm cuts &Delta;p to (50/65)<sup>5</sup> = 0.27 of its value. That is almost always cheaper than a bigger pump, and it is the first thing to propose when a system will not make flow. Also flag the velocity: 8 m/s in water is well past the 1&ndash;3 m/s design band, so the small line invites erosion, noise and severe water-hammer loads even before the pressure drop is counted.</p>"
  },
  {
    id: "fluid-mechanics-q52",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A cast-iron main runs at Re = 3 &times; 10<sup>6</sup> with &epsilon;/D = 0.004, which puts it on the flat, fully rough part of its Moody curve. The flow is then doubled. What happens to the friction factor and the pressure drop?</p>",
    choices: [
      "f falls by about half, so &Delta;p rises roughly 2&times; instead of 4&times;.",
      "f rises with Reynolds number here, so &Delta;p climbs by rather more than 4&times;.",
      "f is essentially unchanged, so &Delta;p rises by about 4&times;, tracking V<sup>2</sup>.",
      "f = 64/Re still applies, so the two effects cancel and &Delta;p is unchanged."
    ],
    answer: 2,
    explanation: "<p>The whole point of the fully rough plateau is that the roughness elements protrude through the viscous sublayer, so the wall loss is set by form drag on those elements rather than by viscosity. On that plateau f is a function of &epsilon;/D alone, here roughly 0.028 by the von K&aacute;rm&aacute;n rough-pipe relation, and doubling Re from 3 &times; 10<sup>6</sup> to 6 &times; 10<sup>6</sup> moves it hardly at all.</p><p class=\"eq\">&Delta;p = f(L/D)(&rho;V<sup>2</sup>/2), f constant &rarr; &Delta;p &prop; V<sup>2</sup> &rarr; <strong>about 4&times;</strong></p><p>This is the one region where the sloppy shortcut \"loss goes as velocity squared\" is exactly right. Everywhere else on the chart f drifts down as Re rises, so the true exponent sits nearer 1.8 and the answer would be a little under 4&times;.</p><p>The laminar option is what catches people who reach for f = 64/Re without checking the regime; at Re = 3 &times; 10<sup>6</sup> that formula would return f = 2 &times; 10<sup>&minus;5</sup> and understate the loss by three orders of magnitude. The follow-up question is how the pipe got to &epsilon;/D = 0.004 in the first place: new cast iron is nearer 0.26 mm absolute, and tuberculation or scale in service can easily double the effective roughness, which is a real and unglamorous reason old mains cannot make their design flow.</p>"
  },
  {
    id: "fluid-mechanics-q53",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A graduate writes Bernoulli between a pump's suction flange (120 kPa gauge) and its discharge flange (450 kPa gauge). The bore is the same on both sides, so he concludes from the pressure rise that the water must have decelerated inside the casing. What is the error?</p>",
    choices: [
      "A pump adds shaft work, and ideal Bernoulli has no term for it; use the energy equation.",
      "Bernoulli requires the two flanges at equal elevation, and pump flanges never are.",
      "The suction value is gauge and the discharge value is absolute, so they do not compare.",
      "Nothing is wrong: at constant flow area, a pressure rise does imply the fluid slowed."
    ],
    answer: 0,
    explanation: "<p>Bernoulli is a statement that mechanical energy is conserved along a streamline. A pump violates that premise by construction: the impeller does shaft work on the fluid, so total head is higher at the discharge than at the suction, and there is nowhere in p + &frac12;&rho;V<sup>2</sup> + &rho;gz for that energy to have come from. The correct statement adds a pump-head term:</p><p class=\"eq\">p<sub>1</sub>/&rho;g + V<sub>1</sub><sup>2</sup>/2g + z<sub>1</sub> + H<sub>pump</sub> = p<sub>2</sub>/&rho;g + V<sub>2</sub><sup>2</sup>/2g + z<sub>2</sub> + h<sub>loss</sub></p><p>With equal bore the velocity heads cancel, so H<sub>pump</sub> &asymp; (450 &minus; 120) &times; 10<sup>3</sup>/(1000 &times; 9.81) = 33.6 m. Far from decelerating, the fluid leaves at essentially the speed it entered; the pump simply raised its pressure by 330 kPa.</p><p>Both flanges are quoted as gauge, so no datum mix-up exists, and a flange elevation difference of a few hundred millimetres is worth well under 0.1 m of head against 33.6 m. The deeper lesson is the one being tested: Bernoulli is illegal across anything that adds or removes energy, pumps, fans, turbines, valves, long lossy runs, shocks. The give-away in the wording is \"conclude a velocity change from a pressure change\", which is only valid when the total head is genuinely constant between the two points.</p>"
  },
  {
    id: "fluid-mechanics-q54",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A 3.0 m run of 25 mm bore water pipe (f = 0.025) carries 2.0 m/s through six 90&deg; elbows (K = 0.9 each) and one globe valve (K = 10). Estimate the total pressure drop in kPa.</p>",
    figure: figLosses,
    answer: 36.8,
    unit: "kPa",
    tolerance: 0.03,
    explanation: "<p>Put both loss families on the same dynamic-pressure scale, then add the coefficients before multiplying.</p><p>Dynamic pressure: &rho;V<sup>2</sup>/2 = 1000(2.0)<sup>2</sup>/2 = 2000 Pa.</p><p>Straight pipe: fL/D = 0.025 &times; (3.0/0.025) = 3.0.</p><p>Fittings: &Sigma;K = 6(0.9) + 10 = 5.4 + 10 = 15.4.</p><p class=\"eq\">&Delta;p = (fL/D + &Sigma;K)(&rho;V<sup>2</sup>/2) = (3.0 + 15.4)(2000) = 36&#8201;800 Pa = <strong>36.8 kPa</strong></p><p>The split is the engineering content here. 15.4/18.4 = 84% of the loss is in the fittings, and the globe valve alone is 54% of the whole system. The name \"minor losses\" is actively misleading on any short run. It earns its name only when L/D reaches the thousands, as in a transmission main.</p><p>The practical consequences follow immediately. Adding another metre of pipe costs 1 kPa; swapping the globe valve for a full-bore ball valve at K = 0.1 removes about 20 kPa, more than half the system. Long-radius elbows at K = 0.3 would save another 7 kPa. The classic arithmetic slip here is adding K to fL/D and then forgetting that the sum is dimensionless. It still has to be multiplied by &rho;V<sup>2</sup>/2, or squaring the coefficients. And since every term scales with V<sup>2</sup>, dropping the velocity to 1.5 m/s by going one pipe size up would cut this 36.8 kPa to about 21 kPa.</p>"
  },
  {
    id: "fluid-mechanics-q55",
    type: "mc",
    difficulty: 2,
    prompt: "<p>An operator partially closes the discharge valve on a centrifugal pump to trim the flow by 20%. Describe what actually happens on the pump and system curves.</p>",
    choices: [
      "The pump curve itself shifts downward, so the pump makes less head at the same flow.",
      "Motor power climbs steeply, because the pump must work harder against a closed valve.",
      "The system curve is unchanged and the pump simply selects a new point along it.",
      "The system curve steepens, sliding the point up the pump curve: less flow, more head."
    ],
    answer: 3,
    explanation: "<p>Throttling adds resistance to the <em>system</em>, not to the pump. The valve raises the K term in the system curve H = H<sub>static</sub> + kQ<sup>2</sup>, which makes the curve steeper. The pump curve is a property of the impeller and speed and does not move at all, so the intersection slides up and to the left: less flow, and the pump delivers more head because that is what its curve does at reduced flow.</p><p>The energy story is what the question is after. The extra head the pump now produces is not delivered anywhere useful. It is dissipated across the valve as heat and noise. Shaft power usually falls somewhat, because Q dropped more than H rose, but the <em>efficiency</em> of the installation collapses, since you are paying for head you deliberately destroy.</p><p>The option about motor power rising is the common folk belief; on a centrifugal pump, closing the discharge normally reduces motor current, which is why they are often started against a closed valve. Do not push it far, though: at very low flow you reach the minimum continuous stable flow limit, where recirculation, radial thrust and casing heating become the real risk. The efficient alternative is a variable-speed drive, which moves the pump curve down instead of steepening the system curve, and saves roughly the cube of the speed ratio in power.</p>"
  },
  {
    id: "fluid-mechanics-q56",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A car has C<sub>D</sub>A = 0.65 m<sup>2</sup>. Air is 1.2 kg/m<sup>3</sup>. Estimate the power in kW needed purely to push air aside at a steady 100 km/h.</p>",
    answer: 8.36,
    unit: "kW",
    tolerance: 0.03,
    explanation: "<p>Convert first: V = 100/3.6 = 27.8 m/s.</p><p>Drag: F<sub>D</sub> = &frac12;&rho;V<sup>2</sup>C<sub>D</sub>A = 0.5(1.2)(27.8)<sup>2</sup>(0.65) = 301 N.</p><p>Power is that force times the speed:</p><p class=\"eq\">P = F<sub>D</sub>V = &frac12;&rho;V<sup>3</sup>C<sub>D</sub>A = 0.5(1.2)(27.8)<sup>3</sup>(0.65) = <strong>8.36 kW</strong></p><p>8.4 kW is about 11 hp at the wheels. At roughly 25&ndash;30% tank-to-wheel efficiency that is some 30 kW of fuel power, which at petrol's 34 MJ/L works out near 3 L/100 km from aerodynamics alone, the right order for a modern car cruising.</p><p>The number that matters is the exponent. Because P &prop; V<sup>3</sup>, raising the cruise to 130 km/h costs (1.3)<sup>3</sup> = 2.2 times as much aerodynamic power, 18.4 kW. That cube is precisely why highway speed dominates fuel consumption while urban driving is dominated by rolling resistance and braking losses, and why the cheapest fuel saving available to any driver is 10 km/h.</p><p>Forgetting the &frac12; doubles the answer to 16.7 kW. Reporting the drag force of 301 N answers a different question from the one asked for power. Note also that C<sub>D</sub>A is quoted as a product here, which sidesteps the usual ambiguity. A bare C<sub>D</sub> is meaningless without the reference area it was normalised on.</p>"
  },
  {
    id: "fluid-mechanics-q57",
    type: "mc",
    difficulty: 1,
    prompt: "<p>A 40 mm square-section strut sits in a 30 m/s airstream. It is to be replaced by a streamlined fairing of the same 40 mm frontal width and the same length of span. What should you promise for the drag?</p>",
    figure: figDrag,
    choices: [
      "About the same &mdash; drag is set by frontal area, and the frontal area has not changed.",
      "Roughly a twentieth &mdash; C<sub>D</sub> drops from about 2 to about 0.1 at equal area.",
      "Roughly half &mdash; streamlining removes the skin friction from the rear surface.",
      "Roughly double &mdash; the longer fairing adds wetted area, and so it adds drag."
    ],
    answer: 1,
    explanation: "<p>Drag on a bluff body is dominated by pressure drag: the flow separates at the sharp corners, leaving a wide low-pressure wake that sucks the body backwards. A square section broadside to the flow runs at C<sub>D</sub> &asymp; 2.0. A well-shaped fairing keeps the boundary layer attached almost to the trailing edge, collapsing the wake, and lands near C<sub>D</sub> &asymp; 0.05&ndash;0.1. At the same frontal area and speed the drag ratio is simply the C<sub>D</sub> ratio, so roughly twenty to one.</p><p>The magnitudes are worth memorising because they get asked for cold: flat plate normal to the flow 1.2, long square section about 2.0, circular cylinder 1.2, sphere 0.47, modern car 0.30, streamlined strut 0.05. The span from bluff to streamlined is a factor of twenty to forty, which is far bigger than anything you will win by polishing a surface.</p><p>The wetted-area option contains the germ of a real effect. The fairing does have more surface, so its skin friction is higher, but skin friction is a small fraction of bluff-body drag, so the wake reduction wins overwhelmingly. Two caveats a good answer adds: the fairing only works aligned with the flow, and at 20&deg; of yaw much of the benefit disappears; and slender fairings can shed vortices or flutter, so check the structural side as well as the aerodynamic one.</p>"
  },
  {
    id: "fluid-mechanics-q58",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A vertical rectangular gate is 2.0 m wide and 1.5 m tall. Its top edge sits 1.0 m below the free surface of fresh water, and the far side is dry. Estimate the resultant hydrostatic force on the gate in kN.</p>",
    figure: figGate,
    answer: 51.5,
    unit: "kN",
    tolerance: 0.03,
    explanation: "<p>The resultant on a plane submerged surface is the pressure at its <em>centroid</em> times its area, not the pressure at the top, and not the pressure at the bottom.</p><p>Centroid depth: h<sub>c</sub> = 1.0 + 1.5/2 = 1.75 m. Area: A = 2.0 &times; 1.5 = 3.0 m<sup>2</sup>.</p><p class=\"eq\">F = &rho;gh<sub>c</sub>A = 1000(9.81)(1.75)(3.0) = 51&#8201;503 N = <strong>51.5 kN</strong></p><p>The pressure prism confirms it. Pressure runs from &rho;g(1.0) = 9.81 kPa at the top edge to &rho;g(2.5) = 24.5 kPa at the bottom, averaging 17.2 kPa over 3.0 m<sup>2</sup>, the same 51.5 kN.</p><p>Now the part that gets people fired rather than merely marked down: <em>where</em> it acts. The pressure grows with depth, so the resultant sits below the centroid at</p><p class=\"eq\">y<sub>cp</sub> = h<sub>c</sub> + I<sub>c</sub>/(h<sub>c</sub>A) = 1.75 + (2.0 &times; 1.5<sup>3</sup>/12)/(1.75 &times; 3.0) = 1.75 + 0.107 = 1.86 m</p><p>If the gate is hinged along its top edge, using the centroid instead of 1.86 m understates the hinge moment by about 14%. The other classic error is using the depth to the top edge (giving 29.4 kN, 43% low) or the depth to the bottom (73.6 kN). Tilting the gate is the usual follow-up: F = &rho;gh<sub>c</sub>A still uses the <em>vertical</em> depth of the centroid, while the area and second moment are taken in the plane of the gate.</p>"
  },
  {
    id: "fluid-mechanics-q59",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A cylindrical air receiver has a 0.50 m internal diameter and a 6.0 mm wall, and runs at 1.0 MPa gauge. Treating it as a thin-walled membrane, what is the maximum wall stress in MPa?</p>",
    answer: 41.7,
    unit: "MPa",
    tolerance: 0.03,
    explanation: "<p>A thin-walled cylinder carries two membrane stresses, and they are not equal. Cut it lengthwise and the pressure on the projected area Dl is resisted by two wall strips of area tl:</p><p class=\"eq\">&sigma;<sub>hoop</sub> = pD/2t = (1.0 &times; 10<sup>6</sup>)(0.50)/(2 &times; 0.006) = <strong>41.7 MPa</strong></p><p>Cut it across instead and the pressure on &pi;D<sup>2</sup>/4 is resisted by an annulus &pi;Dt:</p><p class=\"eq\">&sigma;<sub>long</sub> = pD/4t = 20.8 MPa</p><p>So the hoop stress is exactly twice the longitudinal stress, and the hoop value governs. Which is why a hemispherical or dished end sees only about half the membrane stress of the cylindrical shell it closes: a sphere has pD/4t in every direction. It is also why an overpressured pipe splits along its length rather than parting like a sausage on a grill, and why a cooked sausage does the same thing.</p><p>Two checks before quoting the number. Use the pressure <em>difference</em> across the wall, which is the gauge value here. Using 1.1 MPa absolute would be wrong, because the atmosphere pushes back on the outside. And confirm the thin-wall assumption: D/t = 83, comfortably above the usual threshold of 20, so the membrane formulas are good to a few percent. The real design also has to cover the discontinuity stresses where the head meets the shell, weld efficiency, corrosion allowance and a code safety factor, none of which the membrane number contains.</p>"
  },
  {
    id: "fluid-mechanics-q60",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A U-tube manometer filled with mercury (SG 13.6) is connected across an orifice in a horizontal water line. The reading is R = 150 mm. Estimate the pressure difference across the orifice in kPa.</p>",
    figure: figManometer,
    answer: 18.5,
    unit: "kPa",
    tolerance: 0.03,
    explanation: "<p>Work along the manometer from one tap to the other, adding &rho;gh going down and subtracting it going up. Everything cancels except the 150 mm interval, where the two legs contain <em>different</em> fluids: mercury on one side, water on the other. That gives the density-difference form:</p><p class=\"eq\">&Delta;p = (&rho;<sub>m</sub> &minus; &rho;<sub>f</sub>)gR</p><p class=\"eq\">&Delta;p = (13&#8201;600 &minus; 1000)(9.81)(0.150) = 12&#8201;600 &times; 9.81 &times; 0.150 = 18&#8201;541 Pa = <strong>18.5 kPa</strong></p><p>Dropping the &minus;&rho;<sub>f</sub> is the error: using 13&#8201;600 alone gives 20.0 kPa, an 8% over-read. With a light process fluid the error is small, but the same manometer on a heavy oil or on a high-pressure gas line makes the correction essential, and on a water-over-oil manometer the difference term is what makes the instrument sensitive in the first place.</p><p>Note also what the manometer does <em>not</em> care about: the vertical distance from the pipe down to the mercury, and any elevation difference between the two taps, both cancel provided the connecting legs are full of the same fluid at the same temperature. That is exactly why the classic troubleshooting list for a suspect reading is trapped air in one leg, taps swapped, and a partially drained leg, each of them breaks the assumption that the legs are identical, and each shows up as an offset or even a sign reversal rather than a scaling error.</p>"
  },
  {
    id: "fluid-mechanics-q61",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A venturi meter in a 100 mm water line has a 60 mm throat and a discharge coefficient C<sub>d</sub> = 0.98. The differential gauge reads 30 kPa. Estimate the flow rate in L/s.</p>",
    figure: figVenturi,
    answer: 23.0,
    unit: "L/s",
    tolerance: 0.03,
    explanation: "<p>Continuity plus Bernoulli between the inlet tap and the throat, with the upstream velocity kept rather than assumed negligible, gives the standard meter equation:</p><p class=\"eq\">Q = C<sub>d</sub>A<sub>2</sub>&radic;[2&Delta;p / &rho;(1 &minus; &beta;<sup>4</sup>)], &nbsp; &beta; = d/D<sub>1</sub></p><p>Here &beta; = 60/100 = 0.60, so &beta;<sup>4</sup> = 0.1296 and 1 &minus; &beta;<sup>4</sup> = 0.8704. Throat area A<sub>2</sub> = &pi;(0.060)<sup>2</sup>/4 = 2.827 &times; 10<sup>&minus;3</sup> m<sup>2</sup>.</p><p>Velocity term: &radic;[2(30&#8201;000)/(1000 &times; 0.8704)] = &radic;68.9 = 8.30 m/s.</p><p class=\"eq\">Q = 0.98(2.827 &times; 10<sup>&minus;3</sup>)(8.30) = 0.0230 m<sup>3</sup>/s = <strong>23.0 L/s</strong></p><p>Omitting the velocity-of-approach factor (1 &minus; &beta;<sup>4</sup>) gives 21.5 L/s, about 7% low. The inlet is not stagnant, and at &beta; = 0.6 that matters. Using the <em>pipe</em> area rather than the throat area gives 63.9 L/s, wrong by nearly threefold; the throat is where the measured pressure drop occurs.</p><p>Check the velocities: 23.0 L/s in the 100 mm line is 2.93 m/s, and in the throat 8.14 m/s, consistent with continuity (8.14/2.93 = 2.78 = 1/&beta;<sup>2</sup>). The reason a venturi is preferred to an orifice despite the cost is the long diffuser: it recovers most of that throat velocity head, so permanent loss is typically 10&ndash;15% of the measured &Delta;p, against 60&ndash;80% for a sharp orifice plate. And C<sub>d</sub> near 0.98 only holds above roughly Re = 2 &times; 10<sup>5</sup> with adequate straight pipe upstream; a bend close to the inlet swirls the flow and biases the reading.</p>"
  },
  {
    id: "fluid-mechanics-q62",
    type: "mc",
    difficulty: 3,
    prompt: "<p>You must meter a dirty, particle-laden conductive process liquid over a 10:1 turndown, and the line has only about 30 kPa of permanent pressure loss to spare. Which selection is most defensible?</p>",
    choices: [
      "An orifice plate, because it is the cheapest option and the plate is easy to replace.",
      "A Pitot-static probe, because it adds almost no permanent pressure loss to the line.",
      "A magnetic or Coriolis meter: no obstruction, no square-root limit, tolerates solids.",
      "A rotameter, because the float gives a direct visual reading with no electronics at all."
    ],
    answer: 2,
    explanation: "<p>Turndown is what kills the differential-pressure options. Any &Delta;p meter reads Q &prop; &radic;&Delta;p, so a 10:1 flow range compresses into a 100:1 pressure range. At one tenth of full flow the orifice produces one percent of full-scale &Delta;p, which disappears into transmitter error and noise. Practical orifice turndown is nearer 3:1 or 4:1 without switching ranges.</p><p>The dirty service makes it worse: solids erode the sharp edge, and edge sharpness is exactly what sets C<sub>d</sub>, so the calibration drifts in the direction of over-reading. Impulse lines to the transmitter also plug. And an orifice at a useful &Delta;p burns 60&ndash;80% of it permanently, which the 30 kPa budget cannot afford.</p><p>A magnetic flowmeter has a full-bore, obstruction-free tube, no pressure loss beyond the pipe itself, and 20:1 or better turndown. It needs a conductive liquid, which the question supplies. A Coriolis meter also works, adds mass flow and density directly, and tolerates solids, at higher cost and some pressure drop. Either is defensible; naming the conductivity requirement for the magmeter is what makes the answer sound like an engineer rather than a catalogue.</p><p>A Pitot probe measures a point velocity, not the flow profile, and its tiny port plugs almost immediately on a dirty fluid. A rotameter's float and tapered tube foul, it must be mounted vertically in the line, and remote reading is awkward.</p>"
  },
  {
    id: "fluid-mechanics-q63",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A new machine needs 200 L/min of water, and shop practice keeps liquid velocity at or below 3.0 m/s. What is the minimum acceptable pipe bore, in mm?</p>",
    answer: 37.6,
    unit: "mm",
    tolerance: 0.03,
    explanation: "<p>Size from a velocity target, not from a pressure drop. The 1&ndash;3 m/s band for liquids is what keeps erosion, noise and water-hammer loads under control, and it lands you within one size of the economic optimum almost every time.</p><p>Convert: Q = 200 L/min = 200/(1000 &times; 60) = 3.33 &times; 10<sup>&minus;3</sup> m<sup>3</sup>/s.</p><p>Area needed: A = Q/V = 3.33 &times; 10<sup>&minus;3</sup>/3.0 = 1.111 &times; 10<sup>&minus;3</sup> m<sup>2</sup>.</p><p class=\"eq\">D = &radic;(4A/&pi;) = &radic;(4 &times; 1.111 &times; 10<sup>&minus;3</sup>/&pi;) = &radic;(1.415 &times; 10<sup>&minus;3</sup>) = 0.0376 m = <strong>37.6 mm</strong></p><p>So specify the next standard size up, 40 mm, which runs at V = Q/A = 3.33 &times; 10<sup>&minus;3</sup>/1.257 &times; 10<sup>&minus;3</sup> = 2.65 m/s, inside the band.</p><p>Then price it. Re = &rho;VD/&mu; = (1000)(2.65)(0.040)/10<sup>&minus;3</sup> = 1.06 &times; 10<sup>5</sup>; with commercial steel &epsilon; = 0.045 mm, &epsilon;/D = 1.1 &times; 10<sup>&minus;3</sup> gives f &asymp; 0.0225 off the Moody chart. Then &Delta;p = f(L/D)(&rho;V<sup>2</sup>/2) = 0.0225 &times; (10/0.040) &times; 3515 = 19.8 kPa per 10 m, about 2 m of head, and the fittings on a compact machine will typically exceed that.</p><p>If the head budget is tight, the lever is diameter, not the pump: 50 mm cuts &Delta;p to (40/50)<sup>5</sup> = 0.33 of that, a factor of three, for a little more copper. Going the other way to 25 mm would multiply it by about ten and put the velocity at 6.8 m/s, which is where erosion and noise complaints start.</p>"
  },
  {
    id: "fluid-mechanics-q64",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A 15 mm diameter water jet leaves a nozzle at 20 m/s and strikes a large flat plate square on, spreading sideways along it. Estimate the force on the plate in N.</p>",
    figure: figJet,
    answer: 70.7,
    unit: "N",
    tolerance: 0.03,
    explanation: "<p>This is a momentum question, not an energy question. Take a control volume around the impingement zone. Fluid enters with x-momentum and leaves entirely sideways, so <em>all</em> of the incoming x-momentum flux is destroyed and the plate must supply the force that does it.</p><p>Jet area: A = &pi;(0.015)<sup>2</sup>/4 = 1.767 &times; 10<sup>&minus;4</sup> m<sup>2</sup>.</p><p>Mass flow: &#7745; = &rho;AV = 1000(1.767 &times; 10<sup>&minus;4</sup>)(20) = 3.53 kg/s.</p><p class=\"eq\">F = &#7745;(V<sub>in</sub> &minus; V<sub>out</sub>)<sub>x</sub> = &#7745;V = &rho;AV<sup>2</sup> = 1000(1.767 &times; 10<sup>&minus;4</sup>)(20<sup>2</sup>) = <strong>70.7 N</strong></p><p>The classic error is reaching for dynamic pressure and writing F = &frac12;&rho;V<sup>2</sup>A = 35.3 N, exactly half. The &frac12; belongs to Bernoulli's kinetic-energy term; momentum flux carries no &frac12;. If a candidate quotes 35 N, the follow-up question is always \"which conservation law did you just use?\"</p><p>Two extensions worth having ready. Replace the flat plate with a hemispherical cup that turns the jet fully back on itself and the momentum change doubles to 141 N, the principle behind a Pelton bucket. And if the plate is free to move away at speed u, the force drops to &rho;A(V &minus; u)<sup>2</sup>, so the power &rho;A(V &minus; u)<sup>2</sup>u peaks at u = V/3. On magnitude, 70.7 N is about 7 kg of push from a 3.5 kg/s jet, the same order as the recoil you feel on a fire hose.</p>"
  },
  {
    id: "fluid-mechanics-q65",
    type: "mc",
    difficulty: 1,
    prompt: "<p>A contractor wants to mount a pump 9 m above the surface of a water sump and draw the water up the suction line. Why is that a bad plan, and what is the practical ceiling?</p>",
    choices: [
      "Friction in the suction line is the only limit, so a larger suction pipe makes 9 m work.",
      "There is no physical limit at atmospheric conditions; only motor size sets the lift.",
      "The limit is the discharge pressure, which simply has to exceed nine metres of head.",
      "Atmosphere can only push about 10.3 m of water, and losses leave roughly 6 m usable."
    ],
    answer: 3,
    explanation: "<p>A pump does not suck. It lowers the pressure at its inlet, and the atmosphere pushes the liquid up to fill the gap. The absolute ceiling is therefore the atmospheric head: p<sub>atm</sub>/&rho;g = 101&#8201;300/(1000 &times; 9.81) = 10.3 m of cold water, and no impeller design can beat it.</p><p>The usable figure is lower. Write NPSH available:</p><p class=\"eq\">NPSH<sub>A</sub> = p<sub>atm</sub>/&rho;g &minus; z<sub>lift</sub> &minus; h<sub>f,suction</sub> &minus; p<sub>vap</sub>/&rho;g</p><p>At 9 m of lift with, say, 0.8 m of suction friction and 0.24 m of vapour head for 20 &deg;C water, NPSH<sub>A</sub> = 10.3 &minus; 9 &minus; 0.8 &minus; 0.24 = 0.26 m. A typical pump needs 2&ndash;4 m of NPSH required plus margin, so this installation cavitates on day one. Working back, a practical suction lift is about 6 m for cold water, and less as the liquid warms, at 60 &deg;C vapour head alone eats 2 m.</p><p>Bigger suction pipe helps only with the friction term, which is the smallest of the three; it cannot buy the missing metres. The fix is to move the pump down near the sump, or to use a submersible or self-priming pump, or to flood the suction from a header tank. It is also the reason a siphon over a hill taller than about 10 m will break no matter how carefully it is primed.</p>"
  },
  {
    id: "fluid-mechanics-q66",
    type: "mc",
    difficulty: 2,
    prompt: "<p>An electronics enclosure runs an axial fan against a heat-sink impedance curve, sitting at a comfortable operating point. A dust filter is then added at the inlet. What happens, and what is the thermal consequence?</p>",
    choices: [
      "The impedance curve steepens; flow falls and the sink's thermal resistance rises.",
      "The fan curve shifts upward, so the fan compensates and flow rate is maintained.",
      "Flow is unchanged, because a fan is a constant-volume device by construction.",
      "Flow rises, because the filter conditions the inlet and cuts turbulent entry loss."
    ],
    answer: 0,
    explanation: "<p>The filter adds resistance to the system, so the enclosure impedance curve &Delta;p = kQ<sup>2</sup> steepens. The fan curve is a property of the fan and does not move. The intersection therefore slides left and up: less flow, at higher static pressure. This is the same physics as throttling a pump, drawn on a fan chart.</p><p>The thermal consequence is what an electronics-cooling question is really about, and it has two parts. Air temperature rise across the box is &Delta;T = P/(&#7745;c<sub>p</sub>), so it is inversely proportional to flow. Cut flow 30% and the air leaves 43% hotter. Separately, the sink's convective resistance worsens, since h scales roughly with V<sup>0.6</sup>&ndash;V<sup>0.8</sup> in this regime. Both effects push junction temperature the same way, so a modest flow loss can cost noticeably more than expected.</p><p>The design responses are worth listing: size the fan at the <em>dirty</em> filter pressure drop rather than the clean one, since a loaded filter can double its &Delta;p; pick a fan with a steeper curve, which holds flow better against a rising system resistance; increase filter face area, because velocity through the media drops and its &Delta;p falls with it; and set the service interval from a measured pressure differential rather than a calendar. The \"constant-volume device\" option is the folk belief this question exists to break, a fan is a pressure-flow characteristic, not a flow source.</p>"
  },
  {
    id: "fluid-mechanics-q67",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>Air at &rho; = 1.2 kg/m<sup>3</sup> flows through a 200 mm round duct at an average 8.0 m/s. Estimate the mass flow rate in kg/s.</p>",
    answer: 0.302,
    unit: "kg/s",
    tolerance: 0.03,
    explanation: "<p>Mass flow is density times volume flow, and volume flow is area times average velocity.</p><p>Area: A = &pi;D<sup>2</sup>/4 = &pi;(0.200)<sup>2</sup>/4 = 3.142 &times; 10<sup>&minus;2</sup> m<sup>2</sup>.</p><p class=\"eq\">&#7745; = &rho;AV = 1.2(3.142 &times; 10<sup>&minus;2</sup>)(8.0) = <strong>0.302 kg/s</strong></p><p>Volume flow is Q = AV = 0.251 m<sup>3</sup>/s, or 905 m<sup>3</sup>/h, a sensible duty for a 200 mm duct, since 8 m/s sits right in the 5&ndash;10 m/s band used for ventilation branches.</p><p>The number to carry away is that air is about 830 times lighter than water, so a duct moving a quarter of a cubic metre per second is only shifting 0.3 kg/s. That is why air-cooled systems need such large ducts for the heat they remove: with c<sub>p</sub> = 1005 J/kg&middot;K, this stream carries only about 300 W per kelvin of temperature rise, where the same volume flow of water would carry 250 kW/K.</p><p>Using radius in A = &pi;D<sup>2</sup>/4, or diameter in &pi;r<sup>2</sup>, is a factor of four either way; and quoting the volume flow when the question asked for mass. Density also has to match conditions, 1.2 kg/m<sup>3</sup> is sea-level air at about 20 &deg;C, and hot or high-altitude air can be 20&ndash;30% lighter, which is a real derating on fan-cooled equipment.</p>"
  },
  {
    id: "fluid-mechanics-q68",
    type: "mc",
    difficulty: 2,
    prompt: "<p>The same gate &mdash; 2.0 m wide, 1.5 m tall, top edge 1.0 m below the surface, resultant 51.5 kN. It is hinged along its top edge, and a designer sizes the hinge by applying that resultant at the gate's mid-height. What is wrong, and how large is the error?</p>",
    choices: [
      "Nothing is wrong: a gate of uniform width always loads symmetrically about mid-height.",
      "It acts 0.107 m lower, at 1.86 m depth, so the hinge moment is about 14% higher.",
      "It acts above mid-height, since pressure is largest near the free surface above it.",
      "It acts at the bottom edge, where the pressure on the plate reaches its maximum."
    ],
    answer: 1,
    figure: figGate,
    explanation: "<p>The gate has uniform width, but the <em>load</em> on it does not: pressure grows linearly with depth, so the pressure prism is a trapezoid, heavier at the bottom. Its centroid, and therefore the line of action of the resultant, sits below the geometric centre of the gate:</p><p class=\"eq\">y<sub>cp</sub> = h<sub>c</sub> + I<sub>c</sub>/(h<sub>c</sub>A) = 1.75 + (2.0 &times; 1.5<sup>3</sup>/12)/(1.75 &times; 3.0)</p><p class=\"eq\">y<sub>cp</sub> = 1.75 + 0.5625/5.25 = 1.75 + 0.107 = 1.86 m</p><p>Now the moments about the top hinge at 1.0 m depth. Using the centroid: M = 51.5 &times; (1.75 &minus; 1.00) = 38.6 kN&middot;m. Using the true centre of pressure: M = 51.5 &times; (1.86 &minus; 1.00) = 44.1 kN&middot;m. The designer is 14% light on the hinge, the actuator and the latch at the bottom, enough to eat a typical design margin on its own.</p><p>Two things to keep straight. The resultant <em>magnitude</em> genuinely does use the centroid depth, F = &rho;gh<sub>c</sub>A; only its point of application is offset. And the offset I<sub>c</sub>/(h<sub>c</sub>A) shrinks as the gate goes deeper, submerge this same gate under 20 m of water and the correction falls to 0.014 m, because the pressure distribution across it becomes nearly uniform. The error is worst for a gate that breaks the surface, where the resultant sits at two thirds of the depth rather than one half. The choice putting it at the bottom edge confuses the point of maximum pressure with the centroid of the whole distribution.</p>"
  },
];

export default extra;
