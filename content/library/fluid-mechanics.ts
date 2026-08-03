import type { TopicContent } from "../types";

// ---------------------------------------------------------------------------
// Fluid Mechanics
// ---------------------------------------------------------------------------

// Lesson fig 1 — venturi drawn so continuity is actually satisfied: the duct
// CONVERGES, the throat velocity arrow is twice as long, and the throat
// piezometer column is shorter (lower static pressure).
const figBernoulli = `<svg viewBox="0 0 460 286" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="fm1-flow" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
    <marker id="fm1-dim" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Continuity sets the speed; Bernoulli then sets the pressure</text>
  <!-- piezometer columns: tall = high static pressure -->
  <line x1="116" y1="44" x2="350" y2="44" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="326" y1="76" x2="350" y2="76" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="344" y1="44" x2="344" y2="76" stroke="#64748b" stroke-width="1" marker-start="url(#fm1-dim)" marker-end="url(#fm1-dim)"/>
  <text x="354" y="64" fill="#64748b" font-size="12">&Delta;h</text>
  <rect x="104" y="44" width="12" height="52" fill="#fee2e2" stroke="#334155" stroke-width="1.3"/>
  <rect x="314" y="76" width="12" height="20" fill="#fee2e2" stroke="#334155" stroke-width="1.3"/>
  <line x1="110" y1="96" x2="110" y2="130" stroke="#334155" stroke-width="1.3"/>
  <line x1="320" y1="96" x2="320" y2="150" stroke="#334155" stroke-width="1.3"/>
  <text x="98" y="40" text-anchor="end" fill="#64748b" font-size="12">p<tspan baseline-shift="sub" font-size="9">1</tspan></text>
  <text x="308" y="72" text-anchor="end" fill="#64748b" font-size="12">p<tspan baseline-shift="sub" font-size="9">2</tspan></text>
  <!-- converging duct -->
  <path d="M60,130 L180,130 L250,150 L400,150 L400,190 L250,190 L180,210 L60,210 Z" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <!-- velocity arrows: throat arrow is twice as long -->
  <line x1="85" y1="170" x2="135" y2="170" stroke="#1d4ed8" stroke-width="2.6" marker-end="url(#fm1-flow)"/>
  <line x1="280" y1="170" x2="380" y2="170" stroke="#1d4ed8" stroke-width="2.6" marker-end="url(#fm1-flow)"/>
  <!-- area dimensions -->
  <line x1="46" y1="130" x2="46" y2="210" stroke="#64748b" stroke-width="1" marker-start="url(#fm1-dim)" marker-end="url(#fm1-dim)"/>
  <text x="38" y="174" text-anchor="end" fill="#64748b" font-size="12">A<tspan baseline-shift="sub" font-size="9">1</tspan></text>
  <line x1="416" y1="150" x2="416" y2="190" stroke="#64748b" stroke-width="1" marker-start="url(#fm1-dim)" marker-end="url(#fm1-dim)"/>
  <text x="424" y="174" fill="#64748b" font-size="12">A<tspan baseline-shift="sub" font-size="9">2</tspan></text>
  <text x="110" y="234" text-anchor="middle" fill="#334155" font-size="12">station 1</text>
  <text x="320" y="234" text-anchor="middle" fill="#334155" font-size="12">station 2 (throat)</text>
  <text x="20" y="260" fill="#1d4ed8" font-size="12">A<tspan baseline-shift="sub" font-size="9">2</tspan> = A<tspan baseline-shift="sub" font-size="9">1</tspan>/2 &rarr; V<tspan baseline-shift="sub" font-size="9">2</tspan> = 2V<tspan baseline-shift="sub" font-size="9">1</tspan> (longer arrow)</text>
  <text x="20" y="278" fill="#dc2626" font-size="12">&frac12;&rho;V&sup2; quadruples, so p<tspan baseline-shift="sub" font-size="9">2</tspan> &lt; p<tspan baseline-shift="sub" font-size="9">1</tspan> (shorter column)</text>
</svg>`;

// Lesson fig 2, the real difference between the regimes: the velocity profile.
const figRe = `<svg viewBox="0 0 460 272" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="fm2-lam" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0L7,3.5L0,7z" fill="#1d4ed8"/></marker>
    <marker id="fm2-tur" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0L7,3.5L0,7z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Regime changes the velocity profile, and with it the loss</text>
  <!-- laminar pipe -->
  <line x1="50" y1="70" x2="200" y2="70" stroke="#334155" stroke-width="3"/>
  <line x1="50" y1="170" x2="200" y2="170" stroke="#334155" stroke-width="3"/>
  <line x1="56" y1="62" x2="64" y2="70" stroke="#64748b" stroke-width="1"/>
  <line x1="86" y1="62" x2="94" y2="70" stroke="#64748b" stroke-width="1"/>
  <line x1="116" y1="62" x2="124" y2="70" stroke="#64748b" stroke-width="1"/>
  <line x1="146" y1="62" x2="154" y2="70" stroke="#64748b" stroke-width="1"/>
  <line x1="176" y1="62" x2="184" y2="70" stroke="#64748b" stroke-width="1"/>
  <line x1="56" y1="178" x2="64" y2="170" stroke="#64748b" stroke-width="1"/>
  <line x1="86" y1="178" x2="94" y2="170" stroke="#64748b" stroke-width="1"/>
  <line x1="116" y1="178" x2="124" y2="170" stroke="#64748b" stroke-width="1"/>
  <line x1="146" y1="178" x2="154" y2="170" stroke="#64748b" stroke-width="1"/>
  <line x1="176" y1="178" x2="184" y2="170" stroke="#64748b" stroke-width="1"/>
  <line x1="50" y1="120" x2="200" y2="120" stroke="#64748b" stroke-width="0.9" stroke-dasharray="8 3 2 3"/>
  <path d="M110,70 Q230,120 110,170" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2.2"/>
  <line x1="110" y1="70" x2="110" y2="170" stroke="#1d4ed8" stroke-width="1.4"/>
  <line x1="110" y1="90" x2="144" y2="90" stroke="#1d4ed8" stroke-width="1.4" marker-end="url(#fm2-lam)"/>
  <line x1="110" y1="120" x2="166" y2="120" stroke="#1d4ed8" stroke-width="1.4" marker-end="url(#fm2-lam)"/>
  <line x1="110" y1="150" x2="144" y2="150" stroke="#1d4ed8" stroke-width="1.4" marker-end="url(#fm2-lam)"/>
  <line x1="140" y1="70" x2="140" y2="170" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="140" y="60" text-anchor="middle" fill="#64748b" font-size="11">mean</text>
  <text x="125" y="200" text-anchor="middle" font-weight="600" fill="#334155">Laminar, Re &lt; 2300</text>
  <text x="125" y="220" text-anchor="middle" fill="#64748b" font-size="12">parabolic, peak = 2 &times; mean</text>
  <!-- turbulent pipe -->
  <line x1="260" y1="70" x2="410" y2="70" stroke="#334155" stroke-width="3"/>
  <line x1="260" y1="170" x2="410" y2="170" stroke="#334155" stroke-width="3"/>
  <line x1="266" y1="62" x2="274" y2="70" stroke="#64748b" stroke-width="1"/>
  <line x1="296" y1="62" x2="304" y2="70" stroke="#64748b" stroke-width="1"/>
  <line x1="326" y1="62" x2="334" y2="70" stroke="#64748b" stroke-width="1"/>
  <line x1="356" y1="62" x2="364" y2="70" stroke="#64748b" stroke-width="1"/>
  <line x1="386" y1="62" x2="394" y2="70" stroke="#64748b" stroke-width="1"/>
  <line x1="266" y1="178" x2="274" y2="170" stroke="#64748b" stroke-width="1"/>
  <line x1="296" y1="178" x2="304" y2="170" stroke="#64748b" stroke-width="1"/>
  <line x1="326" y1="178" x2="334" y2="170" stroke="#64748b" stroke-width="1"/>
  <line x1="356" y1="178" x2="364" y2="170" stroke="#64748b" stroke-width="1"/>
  <line x1="386" y1="178" x2="394" y2="170" stroke="#64748b" stroke-width="1"/>
  <line x1="260" y1="120" x2="410" y2="120" stroke="#64748b" stroke-width="0.9" stroke-dasharray="8 3 2 3"/>
  <path d="M320,70 C348,72 357,80 357,92 L357,148 C357,160 348,168 320,170" fill="#fee2e2" stroke="#dc2626" stroke-width="2.2"/>
  <line x1="320" y1="70" x2="320" y2="170" stroke="#dc2626" stroke-width="1.4"/>
  <line x1="320" y1="78" x2="342" y2="78" stroke="#dc2626" stroke-width="1.4" marker-end="url(#fm2-tur)"/>
  <line x1="320" y1="100" x2="357" y2="100" stroke="#dc2626" stroke-width="1.4" marker-end="url(#fm2-tur)"/>
  <line x1="320" y1="120" x2="357" y2="120" stroke="#dc2626" stroke-width="1.4" marker-end="url(#fm2-tur)"/>
  <line x1="320" y1="140" x2="357" y2="140" stroke="#dc2626" stroke-width="1.4" marker-end="url(#fm2-tur)"/>
  <line x1="350" y1="70" x2="350" y2="170" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="350" y="60" text-anchor="middle" fill="#64748b" font-size="11">mean</text>
  <text x="335" y="200" text-anchor="middle" font-weight="600" fill="#334155">Turbulent, Re &gt; 4000</text>
  <text x="335" y="220" text-anchor="middle" fill="#64748b" font-size="12">blunt core, steep wall gradient</text>
  <text x="20" y="246" fill="#64748b" font-size="12">Same mean velocity in both pipes, so the flow rates are equal.</text>
  <text x="20" y="264" fill="#64748b" font-size="12">The turbulent wall gradient is far steeper, so &Delta;p is far higher.</text>
</svg>`;

// Lesson fig 3, Moody chart in outline: laminar line, transition band,
// smooth-pipe curve and the fully rough plateaus.
const figMoody = `<svg viewBox="0 0 460 276" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="fm3-ax" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Moody chart, in outline</text>
  <rect x="115" y="52" width="17" height="158" fill="#e2e8f0"/>
  <text x="124" y="140" text-anchor="middle" transform="rotate(-90 124 140)" fill="#64748b" font-size="11">transition</text>
  <line x1="64" y1="210" x2="424" y2="210" stroke="#64748b" stroke-width="1.4" marker-end="url(#fm3-ax)"/>
  <line x1="64" y1="210" x2="64" y2="46" stroke="#64748b" stroke-width="1.4" marker-end="url(#fm3-ax)"/>
  <text x="20" y="130" text-anchor="middle" transform="rotate(-90 20 130)" fill="#64748b" font-size="12">friction factor f</text>
  <text x="240" y="242" text-anchor="middle" fill="#64748b" font-size="12">Reynolds number (log scale)</text>
  <line x1="60" y1="190" x2="64" y2="190" stroke="#64748b" stroke-width="1"/>
  <line x1="60" y1="151" x2="64" y2="151" stroke="#64748b" stroke-width="1"/>
  <line x1="60" y1="99" x2="64" y2="99" stroke="#64748b" stroke-width="1"/>
  <line x1="60" y1="60" x2="64" y2="60" stroke="#64748b" stroke-width="1"/>
  <text x="58" y="194" text-anchor="end" fill="#64748b" font-size="11">0.01</text>
  <text x="58" y="155" text-anchor="end" fill="#64748b" font-size="11">0.02</text>
  <text x="58" y="103" text-anchor="end" fill="#64748b" font-size="11">0.05</text>
  <text x="58" y="64" text-anchor="end" fill="#64748b" font-size="11">0.10</text>
  <line x1="90" y1="210" x2="90" y2="215" stroke="#64748b" stroke-width="1"/>
  <line x1="160" y1="210" x2="160" y2="215" stroke="#64748b" stroke-width="1"/>
  <line x1="230" y1="210" x2="230" y2="215" stroke="#64748b" stroke-width="1"/>
  <line x1="300" y1="210" x2="300" y2="215" stroke="#64748b" stroke-width="1"/>
  <line x1="370" y1="210" x2="370" y2="215" stroke="#64748b" stroke-width="1"/>
  <text x="90" y="226" text-anchor="middle" fill="#64748b" font-size="11">10&sup3;</text>
  <text x="160" y="226" text-anchor="middle" fill="#64748b" font-size="11">10&#8308;</text>
  <text x="230" y="226" text-anchor="middle" fill="#64748b" font-size="11">10&#8309;</text>
  <text x="300" y="226" text-anchor="middle" fill="#64748b" font-size="11">10&#8310;</text>
  <text x="370" y="226" text-anchor="middle" fill="#64748b" font-size="11">10&#8311;</text>
  <!-- laminar line -->
  <line x1="83" y1="73" x2="115" y2="132" stroke="#1d4ed8" stroke-width="2.6"/>
  <line x1="118" y1="86" x2="136" y2="74" stroke="#64748b" stroke-width="1"/>
  <text x="140" y="72" fill="#1d4ed8" font-weight="600" font-size="12">laminar: f = 64/Re</text>
  <!-- turbulent curves -->
  <path d="M132,97 C160,99 200,100 260,100 L410,100" fill="none" stroke="#dc2626" stroke-width="2.2"/>
  <path d="M132,112 C152,124 176,134 210,139 C260,143 320,142 410,142" fill="none" stroke="#dc2626" stroke-width="2.2"/>
  <path d="M132,112 C148,120 170,127 200,141 C240,158 300,182 380,199 L410,205" fill="none" stroke="#334155" stroke-width="2.2"/>
  <circle cx="230" cy="145" r="4.5" fill="#1d4ed8"/>
  <text x="406" y="92" text-anchor="end" fill="#dc2626" font-size="11">&epsilon;/D = 0.02</text>
  <text x="406" y="134" text-anchor="end" fill="#dc2626" font-size="11">&epsilon;/D = 0.002</text>
  <text x="406" y="192" text-anchor="end" fill="#334155" font-size="11">smooth pipe</text>
  <text x="290" y="122" text-anchor="middle" fill="#64748b" font-size="11">fully rough: f stops changing with Re</text>
  <text x="20" y="266" fill="#1d4ed8" font-size="12">Worked read (blue dot): Re = 10&#8309; on the &epsilon;/D = 9&times;10&#8315;&#8308; curve gives f &asymp; 0.022.</text>
</svg>`;

// Lesson fig 4 — the operating point is an intersection, not a pump property.
const figPump = `<svg viewBox="0 0 460 262" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="fm4-ax" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Operating point: the pump curve meets the system curve</text>
  <line x1="70" y1="210" x2="424" y2="210" stroke="#64748b" stroke-width="1.4" marker-end="url(#fm4-ax)"/>
  <line x1="70" y1="210" x2="70" y2="44" stroke="#64748b" stroke-width="1.4" marker-end="url(#fm4-ax)"/>
  <text x="34" y="128" text-anchor="middle" transform="rotate(-90 34 128)" fill="#64748b" font-size="12">total head H</text>
  <text x="246" y="242" text-anchor="middle" fill="#64748b" font-size="12">flow rate Q</text>
  <path d="M70,70 Q235,70 400,190" fill="none" stroke="#1d4ed8" stroke-width="2.8"/>
  <path d="M70,196 Q235,196 400,120" fill="none" stroke="#334155" stroke-width="2.8"/>
  <line x1="64" y1="196" x2="70" y2="196" stroke="#64748b" stroke-width="1"/>
  <text x="60" y="200" text-anchor="end" fill="#64748b" font-size="11">H<tspan baseline-shift="sub" font-size="9">static</tspan></text>
  <line x1="70" y1="147" x2="335" y2="147" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="335" y1="147" x2="335" y2="210" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <circle cx="335" cy="147" r="5.5" fill="#dc2626"/>
  <line x1="339" y1="142" x2="360" y2="106" stroke="#64748b" stroke-width="1"/>
  <text x="406" y="98" text-anchor="end" fill="#dc2626" font-weight="600" font-size="12">operating point</text>
  <text x="112" y="62" fill="#1d4ed8" font-weight="600" font-size="12">pump curve</text>
  <text x="122" y="184" fill="#334155" font-weight="600" font-size="12">system curve (static lift + losses)</text>
  <text x="335" y="226" text-anchor="middle" fill="#64748b" font-size="11">Q<tspan baseline-shift="sub" font-size="9">op</tspan></text>
  <text x="64" y="151" text-anchor="end" fill="#64748b" font-size="11">H<tspan baseline-shift="sub" font-size="9">op</tspan></text>
  <text x="20" y="258" fill="#64748b" font-size="12">Throttling steepens the system curve, moving the point left and up.</text>
</svg>`;

// Lesson fig 5, hydrostatic pressure distribution on a vertical wall, with the
// resultant placed correctly (below the centroid) and the manometer principle.
const figHydro = `<svg viewBox="0 0 460 288" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="fm10-p" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
    <marker id="fm10-r" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
    <marker id="fm10-dim" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Pressure grows linearly with depth; the resultant sits low</text>
  <!-- water body -->
  <rect x="60" y="56" width="150" height="164" fill="#dbeafe"/>
  <line x1="60" y1="56" x2="238" y2="56" stroke="#1d4ed8" stroke-width="2"/>
  <text x="66" y="46" fill="#1d4ed8" font-size="12">free surface, p = 0 gauge</text>
  <!-- wall -->
  <rect x="210" y="56" width="10" height="164" fill="#334155"/>
  <line x1="60" y1="220" x2="240" y2="220" stroke="#334155" stroke-width="2.4"/>
  <!-- pressure prism on the dry face, arrows pushing back on the wall -->
  <path d="M220,56 L340,220 L220,220 Z" fill="#fee2e2" stroke="#dc2626" stroke-width="1.6"/>
  <line x1="249" y1="96" x2="226" y2="96" stroke="#dc2626" stroke-width="1.2" marker-end="url(#fm10-p)"/>
  <line x1="281" y1="140" x2="226" y2="140" stroke="#dc2626" stroke-width="1.2" marker-end="url(#fm10-p)"/>
  <line x1="314" y1="184" x2="226" y2="184" stroke="#dc2626" stroke-width="1.2" marker-end="url(#fm10-p)"/>
  <text x="350" y="206" fill="#dc2626" font-weight="600" font-size="12">p = &rho;gh</text>
  <!-- depth dimension -->
  <line x1="44" y1="56" x2="44" y2="220" stroke="#64748b" stroke-width="1" marker-start="url(#fm10-dim)" marker-end="url(#fm10-dim)"/>
  <text x="36" y="142" text-anchor="end" fill="#64748b" font-size="12">H</text>
  <!-- centroid level and the resultant, which acts lower at 2H/3 -->
  <line x1="62" y1="138" x2="208" y2="138" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <text x="66" y="132" fill="#64748b" font-size="11">centroid, depth H/2</text>
  <line x1="104" y1="165" x2="206" y2="165" stroke="#1d4ed8" stroke-width="2.6" marker-end="url(#fm10-r)"/>
  <text x="98" y="169" text-anchor="end" fill="#1d4ed8" font-weight="600" font-size="12">F</text>
  <text x="66" y="190" fill="#1d4ed8" font-size="11">F = &rho;gh<tspan baseline-shift="sub" font-size="9">c</tspan>A</text>
  <text x="20" y="246" fill="#1d4ed8" font-size="12">The resultant acts at depth 2H/3 &mdash; below the centroid, not at it.</text>
  <text x="20" y="266" fill="#64748b" font-size="12">Shape and volume do not matter; only vertical depth sets p.</text>
  <text x="20" y="284" fill="#64748b" font-size="12">Manometer: read a height difference, multiply by (&rho;<tspan baseline-shift="sub" font-size="9">m</tspan> &minus; &rho;<tspan baseline-shift="sub" font-size="9">f</tspan>)g.</text>
</svg>`;

// --- question figures -------------------------------------------------------

// q02 — the pipe the flow-rate question describes.
const figPipeQ = `<svg viewBox="0 0 460 238" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="fm5-flow" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
    <marker id="fm5-dim" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Volume flow rate is area times average velocity</text>
  <line x1="60" y1="76" x2="260" y2="76" stroke="#334155" stroke-width="3"/>
  <line x1="60" y1="156" x2="260" y2="156" stroke="#334155" stroke-width="3"/>
  <rect x="60" y="79" width="200" height="74" fill="#dbeafe"/>
  <line x1="90" y1="116" x2="180" y2="116" stroke="#1d4ed8" stroke-width="2.6" marker-end="url(#fm5-flow)"/>
  <text x="140" y="106" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">V = 2.0 m/s</text>
  <line x1="46" y1="76" x2="46" y2="156" stroke="#64748b" stroke-width="1" marker-start="url(#fm5-dim)" marker-end="url(#fm5-dim)"/>
  <text x="38" y="120" text-anchor="end" fill="#64748b" font-size="12">D</text>
  <text x="160" y="180" text-anchor="middle" fill="#64748b" font-size="12">D = 50 mm, water</text>
  <!-- cross-section -->
  <circle cx="356" cy="116" r="40" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <line x1="316" y1="116" x2="396" y2="116" stroke="#64748b" stroke-width="1" marker-start="url(#fm5-dim)" marker-end="url(#fm5-dim)"/>
  <text x="356" y="110" text-anchor="middle" fill="#64748b" font-size="12">&oslash;50</text>
  <text x="356" y="180" text-anchor="middle" fill="#334155" font-size="12">A = &pi;D&sup2;/4</text>
  <text x="20" y="208" fill="#1d4ed8" font-size="12">Q = AV, then convert: 1 m&sup3;/s = 1000 L/s.</text>
  <text x="20" y="228" fill="#64748b" font-size="12">Classic slip: using D in A = &pi;r&sup2; overstates the area 4&times;.</text>
</svg>`;

// q08, Pitot-static probe: stagnation minus static is the dynamic pressure.
const figPitot = `<svg viewBox="0 0 460 264" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="fm6-flow" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#1d4ed8"/></marker>
    <marker id="fm6-dim" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Pitot-static probe: stagnation minus static = &frac12;&rho;V&sup2;</text>
  <!-- free stream -->
  <line x1="30" y1="70" x2="120" y2="70" stroke="#1d4ed8" stroke-width="2" marker-end="url(#fm6-flow)"/>
  <line x1="30" y1="100" x2="120" y2="100" stroke="#1d4ed8" stroke-width="2" marker-end="url(#fm6-flow)"/>
  <line x1="30" y1="130" x2="120" y2="130" stroke="#1d4ed8" stroke-width="2" marker-end="url(#fm6-flow)"/>
  <line x1="30" y1="160" x2="120" y2="160" stroke="#1d4ed8" stroke-width="2" marker-end="url(#fm6-flow)"/>
  <text x="76" y="52" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">air at V, &rho; = 1.2 kg/m&sup3;</text>
  <!-- probe body -->
  <path d="M160,100 L360,100 L360,130 L160,130 Z" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
  <path d="M160,100 C144,102 138,110 138,115 C138,120 144,128 160,130 Z" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
  <circle cx="138" cy="115" r="3.5" fill="#dc2626"/>
  <line x1="106" y1="200" x2="134" y2="124" stroke="#64748b" stroke-width="1"/>
  <text x="20" y="208" fill="#dc2626" font-weight="600" font-size="12">stagnation port</text>
  <circle cx="220" cy="100" r="3" fill="#1d4ed8"/>
  <circle cx="240" cy="100" r="3" fill="#1d4ed8"/>
  <text x="230" y="88" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">static ports</text>
  <line x1="138" y1="118" x2="138" y2="176" stroke="#dc2626" stroke-width="1.4"/>
  <line x1="138" y1="176" x2="300" y2="176" stroke="#dc2626" stroke-width="1.4"/>
  <line x1="230" y1="104" x2="230" y2="152" stroke="#1d4ed8" stroke-width="1.4"/>
  <line x1="230" y1="152" x2="340" y2="152" stroke="#1d4ed8" stroke-width="1.4"/>
  <!-- gauge -->
  <rect x="300" y="152" width="90" height="46" rx="5" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <text x="345" y="172" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">&Delta;p gauge</text>
  <text x="345" y="190" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="12">500 Pa</text>
  <text x="20" y="238" fill="#1d4ed8" font-size="12">&Delta;p = p<tspan baseline-shift="sub" font-size="9">0</tspan> &minus; p = &frac12;&rho;V&sup2; &rarr; V = &radic;(2&Delta;p/&rho;)</text>
  <text x="20" y="256" fill="#64748b" font-size="12">Valid at low Mach; misalignment and nearby wakes corrupt the reading.</text>
</svg>`;

const content: TopicContent = {
  lesson: {
    title: "Fluid Mechanics",
    intro: `<p>Fluid interview problems are usually about conservation and losses: mass conservation sets velocity, Bernoulli estimates pressure-energy tradeoffs, Reynolds number tells you the flow regime, and pipe losses tell you what pump head is required. The strongest answers also state the assumptions behind Bernoulli rather than applying it everywhere.</p>
<figure class="fig">${figBernoulli}<figcaption>A Venturi shows continuity and Bernoulli together: the throat has higher velocity and lower static pressure.</figcaption></figure>`,
    sections: [
      {
        heading: "Continuity",
        html: `<p>For steady incompressible flow, volume flow rate is constant along a single streamtube:</p>
<p class="eq">Q = AV, &nbsp;&nbsp; A<sub>1</sub>V<sub>1</sub> = A<sub>2</sub>V<sub>2</sub></p>
<p><strong>Q</strong> is volume flow rate (m<sup>3</sup>/s or L/min), <strong>A</strong> is flow area, and <strong>V</strong> is average velocity. The incompressible form assumes density is effectively constant; otherwise conserve mass flow <strong>&#7745; = &rho;AV</strong>.</p>
<p>For gases at low Mach number, incompressible approximations may still be reasonable. For high-speed compressible flow, density changes and mass flow rate &rho;AV is the correct conservation form.</p>
<div class="callout">Carry a few numbers in your head so you can sanity-check any answer on a whiteboard: water &rho; = 1000 kg/m<sup>3</sup> and &mu; &asymp; 1 &times; 10<sup>&minus;3</sup> Pa&middot;s; air &rho; &asymp; 1.2 kg/m<sup>3</sup> and &mu; &asymp; 1.8 &times; 10<sup>&minus;5</sup> Pa&middot;s; design liquid velocity 1&ndash;3 m/s in pipe, 5&ndash;10 m/s in a duct for air. Anything far outside those bands should make you re-read the question.</div>`,
      },
      {
        heading: "Bernoulli and its limits",
        html: `<p>Along a streamline for steady, incompressible, inviscid flow with no shaft work:</p>
<p class="eq">p + &frac12;&rho;V&sup2; + &rho;gz = constant</p>
<p><strong>p</strong> is static pressure, <strong>&rho;</strong> is density, <strong>V</strong> is speed, <strong>g</strong> is gravitational acceleration, and <strong>z</strong> is elevation. Each term is energy per volume (Pa). In head form, divide by &rho;g to get meters of fluid.</p>
<p>Real pipes need loss terms; pumps and turbines add or remove head. Bernoulli is excellent for quick estimates, Pitot tubes, nozzles, and elevation-pressure tradeoffs, but it is not a substitute for viscous losses in long pipes.</p>
<div class="callout warn">Bernoulli is illegal across a pump or fan (shaft work is added), across a long or fouled pipe run (mechanical energy is dissipated), through a valve, orifice or any separated region (the loss is the whole point), across a shock, and in strongly unsteady flow. The classic interview favourite is a valve with equal pipe diameter on both sides: V is unchanged, so a naive Bernoulli says p is unchanged, yet the gauge reads a large drop, because the missing loss term is exactly what the valve exists to produce.</div>`,
      },
      {
        heading: "Reynolds number",
        html: `<p>Reynolds number compares inertial to viscous effects:</p>
<p class="eq">Re = &rho; V D/&mu;</p>
<p><strong>D</strong> is pipe diameter or characteristic length and <strong>&mu;</strong> is dynamic viscosity. Re is dimensionless. For internal pipe flow, laminar is roughly Re &lt; 2300, turbulent is usually Re &gt; 4000, and the transition range is not a clean cliff.</p>
<p>Treat Re as a decision, not a definition: you compute it in order to choose a correlation. For water at room temperature &mu; &asymp; 10<sup>&minus;3</sup> Pa&middot;s, so Re &asymp; 10<sup>6</sup> &times; V(m/s) &times; D(m), practically every water line in a building is turbulent. Air has roughly 15 times the kinematic viscosity of water, so the same duct at the same velocity sits at about one fifteenth the Reynolds number.</p>
<figure class="fig">${figRe}<figcaption>Flow regime affects velocity profile, mixing, heat transfer, and pressure drop.</figcaption></figure>`,
      },
      {
        heading: "Pipe losses",
        html: `<p>For fully developed pipe flow, Darcy-Weisbach head loss is:</p>
<p class="eq">&Delta;p = f(L/D)(&rho; V&sup2;/2)</p>
<p><strong>&Delta;p</strong> is pressure drop, <strong>f</strong> is the Darcy friction factor, <strong>L</strong> is pipe length, <strong>D</strong> is diameter, <strong>&rho;</strong> is fluid density, and <strong>V</strong> is average velocity. The term &rho;V<sup>2</sup>/2 is dynamic pressure. Do not mix Darcy f with the Fanning friction factor; they differ by a factor of 4.</p>
<p>Minor losses from bends, valves, entrances, exits, and fittings add K(&rho;V<sup>2</sup>/2), where <strong>K</strong> is the minor-loss coefficient for that fitting. Compare &Sigma;K against fL/D before deciding which matters: a long straight run is friction-dominated, but a two-metre skid with six elbows and a globe valve is dominated by the fittings, often by three or four to one. Useful K values to remember: 90&deg; elbow 0.3&ndash;0.9, gate valve open 0.2, globe valve open &asymp; 10, sharp entrance 0.5, exit into a tank 1.0.</p>
<p>The single most-asked pipe result follows from holding <em>flow rate</em> fixed and changing diameter. Since V = Q/A &prop; 1/D<sup>2</sup>, the velocity head goes as 1/D<sup>4</sup>, and the L/D factor adds one more power:</p>
<p class="eq">&Delta;p &prop; f L Q&sup2; / D<sup>5</sup></p>
<p>Halve the diameter at the same flow and pressure drop rises by 2<sup>5</sup> = 32 times. That is why the honest answer to "can we use a smaller line?" is almost always no, and why one pipe size up is the cheapest fix in a fluid system.</p>
<figure class="fig">${figMoody}<figcaption>Three regions to know: the laminar line f = 64/Re, the messy transition band, and the fully rough plateau where roughness alone sets f.</figcaption></figure>
<p>Read the chart in that order. Below Re &asymp; 2300 only Reynolds number matters. Above about 4000 both Re and relative roughness &epsilon;/D matter, and at high enough Re each roughness curve flattens: the friction factor becomes a function of &epsilon;/D alone, so pumping more flow no longer changes f, only the V<sup>2</sup> term. If you have no chart, Swamee-Jain reproduces it well: f = 0.25/[log<sub>10</sub>(&epsilon;/3.7D + 5.74/Re<sup>0.9</sup>)]<sup>2</sup>.</p>`,
      },
      {
        heading: "Hydrostatics, buoyancy and manometry",
        html: `<p>With no motion, pressure depends only on vertical depth:</p>
<p class="eq">p = p<sub>0</sub> + &rho;gh</p>
<p>Tank shape and volume are irrelevant. A narrow standpipe produces the same bottom pressure as a lake of equal depth. Ten metres of water is almost exactly one bar, which is the fastest check in the subject.</p>
<figure class="fig">${figHydro}<figcaption>The resultant on a submerged plane is &rho;gh<sub>c</sub>A, but it acts below the centroid because the pressure grows with depth.</figcaption></figure>
<p>For a submerged plane surface, the resultant force is the pressure at the <em>centroid</em> times the area, F = &rho;gh<sub>c</sub>A, and it acts at the centre of pressure, y<sub>cp</sub> = y<sub>c</sub> + I<sub>c</sub>/(y<sub>c</sub>A), which is always deeper than the centroid. Placing it at the centroid is a classic gate-hinge error that undersizes the hinge moment.</p>
<p>Buoyancy is the weight of displaced fluid, F<sub>B</sub> = &rho;gV, independent of the body's own material. Manometers read a height difference: for a heavy fluid of density &rho;<sub>m</sub> in a line carrying fluid &rho;<sub>f</sub>, &Delta;p = (&rho;<sub>m</sub> &minus; &rho;<sub>f</sub>)gR. Forgetting the subtraction over-reads a mercury/water manometer by about 8%.</p>
<div class="callout warn">Gauge and absolute pressure are not interchangeable. Cavitation, NPSH, boiling and every gas law need absolute pressure; structural loads and most gauges are relative to ambient. A transmitter reading &minus;80 kPa gauge at sea level means 21 kPa absolute, not a negative pressure.</div>`,
      },
      {
        heading: "Pumps, drag, and control volumes",
        html: `<p>Pumps add head. Hydraulic power is &rho;gQH, and shaft power is higher because efficiency is below one.</p>
<p class="eq">P<sub>shaft</sub> = &rho; gQH/&eta;</p>
<figure class="fig">${figPump}<figcaption>A pump raises total head; the system curve and pump curve decide the operating flow.</figcaption></figure>
<p>The operating point is an intersection, not a pump property. Throttling a valve steepens the system curve and slides the point left and up: less flow, more head, and the extra head is burned in the valve. Two identical pumps in parallel double the head curve's flow at each head, but on a steep (loss-dominated) system curve the flow gain is closer to 1.4&times; than 2&times;. Speed control is the efficient alternative because affinity laws give Q &prop; N, H &prop; N<sup>2</sup>, P &prop; N<sup>3</sup>.</p>
<p>For external flow, drag is F<sub>D</sub> = &frac12;&rho;V&sup2;C<sub>D</sub>A. Because power is F<sub>D</sub>V, aerodynamic power scales with V<sup>3</sup>, the reason highway speed dominates fuel use while city driving is dominated by rolling resistance and braking. Magnitudes worth knowing: flat plate normal to flow C<sub>D</sub> &asymp; 1.2, cylinder &asymp; 1.2, sphere &asymp; 0.47, modern car &asymp; 0.30, streamlined strut &asymp; 0.05. Always state the reference area with any C<sub>D</sub>.</p>
<p>When the question asks for a <em>force</em> rather than a pressure, nozzle reaction, elbow thrust, jet impingement, switch from the energy view to a control-volume momentum balance: &Sigma;F = &#7745;(V<sub>out</sub> &minus; V<sub>in</sub>) plus the pressure-area terms.</p>`,
      },
    ],
    equations: [
      { name: "Continuity", formula: "<p>Q = AV</p>", note: "Q is volume flow rate, A is area, and V is average speed for steady incompressible flow." },
      { name: "Bernoulli", formula: "<p>p + &frac12;&rho;V&sup2; + &rho;gz = constant</p>", note: "p is static pressure, &rho; density, V speed, z elevation; ideal steady inviscid streamline form." },
      { name: "Reynolds number", formula: "<p>Re = &rho;VD/&mu;</p>", note: "&rho; is density, V speed, D characteristic length, and &mu; dynamic viscosity; Re is dimensionless." },
      { name: "Darcy pressure loss", formula: "<p>&Delta;p = f(L/D)(&rho;V&sup2;/2)</p>", note: "&Delta;p is pressure drop, f Darcy friction factor, L pipe length, D diameter, and &rho;V<sup>2</sup>/2 dynamic pressure." },
      { name: "Minor loss", formula: "<p>&Delta;p = K(&rho;V&sup2;/2)</p>", note: "K is the fitting loss coefficient; compare &Sigma;K against fL/D to see which term dominates." },
      { name: "Diameter sensitivity", formula: "<p>&Delta;p &prop; fLQ&sup2;/D<sup>5</sup></p>", note: "At fixed flow rate, halving diameter multiplies pressure drop by 32; one size up is the cheapest fix." },
      { name: "Hydrostatic pressure", formula: "<p>p = p<sub>0</sub> + &rho;gh</p>", note: "h is vertical depth only; force on a submerged plane is &rho;gh<sub>c</sub>A acting below the centroid." },
      { name: "Pump power", formula: "<p>P = &rho;gQH/&eta;</p>", note: "P is shaft power, Q flow rate, H head rise, &eta; efficiency, and &rho;gQH is hydraulic power." },
      { name: "Drag", formula: "<p>F<sub>D</sub> = &frac12;&rho;V&sup2;C<sub>D</sub>A</p>", note: "F<sub>D</sub> is drag, C<sub>D</sub> coefficient, and A reference/projected area; drag power goes as V<sup>3</sup>." },
    ],
    interviewTips: [
      "State Bernoulli assumptions out loud, then say where it is illegal: across a pump, a valve, a lossy run, a shock, or an unsteady transient.",
      "Use continuity before Bernoulli; velocity errors contaminate pressure estimates.",
      "Compute Reynolds number to make a decision, not to recite a definition, it picks the correlation, and the 2300-4000 band is genuinely uncertain.",
      "At fixed flow, pressure drop scales as 1/D^5, so a pipe size up beats a bigger pump almost every time.",
      "Compare sum-K against fL/D before assuming friction dominates; short skids with many fittings are minor-loss dominated.",
      "Anchor numbers: water 1000 kg/m^3 and 1e-3 Pa.s, air 1.2 kg/m^3, 10 m of water is 1 bar, design liquid velocity 1-3 m/s.",
      "For pumps, distinguish pressure/head requirement from flow requirement, include efficiency, and check NPSH in absolute pressure.",
    ],
  },
  questions: [
    {
      id: "fluid-mechanics-q01",
      type: "mc",
      difficulty: 1,
      prompt: `<p>For steady incompressible flow in a pipe contraction, the area halves. What happens to average velocity?</p>`,
      figure: figBernoulli,
      choices: ["It halves", "It doubles", "It stays the same", "It becomes zero"],
      answer: 1,
      explanation: `<p>Continuity for steady incompressible flow: Q = A<sub>1</sub>V<sub>1</sub> = A<sub>2</sub>V<sub>2</sub>. Halving the area forces V<sub>2</sub> = (A<sub>1</sub>/A<sub>2</sub>)V<sub>1</sub> = 2V<sub>1</sub>. The same volume must pass through half the opening every second, so it moves twice as fast.</p><p>"It halves" is the answer for an <em>expansion</em>, not a contraction. It inverts the area ratio. "Stays the same" would require mass to accumulate inside the contraction, impossible in steady flow. "Becomes zero" confuses a contraction with a blockage. The natural next question: what happens to static pressure? It drops, the kinetic-energy term &frac12;&rho;V&sup2; quadruples when V doubles, and along a streamline that energy comes out of the pressure term (Bernoulli). The clean 2&times; result relies on constant density; for a gas at high Mach number the scaling breaks.</p>`,
    },
    {
      id: "fluid-mechanics-q02",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>Water flows in a 50 mm diameter pipe at average velocity 2.0 m/s. What is volume flow rate Q in L/s?</p>`,
      figure: figPipeQ,
      answer: 3.93,
      unit: "L/s",
      explanation: `<p>Given D = 50 mm = 0.050 m and V = 2.0 m/s. Flow area first:</p><p class="eq">A = &pi;D&sup2;/4 = &pi;(0.050)&sup2;/4 = 1.963 &times; 10<sup>&minus;3</sup> m&sup2;</p><p class="eq">Q = AV = (1.963 &times; 10<sup>&minus;3</sup>)(2.0) = 3.93 &times; 10<sup>&minus;3</sup> m&sup3;/s = <strong>3.93 L/s</strong></p><p>Conversion: 1 m&sup3;/s = 1000 L/s. The classic slip is plugging the diameter into A = &pi;r&sup2;, which overstates the area 4&times; and gives 15.7 L/s.</p><p>3.93 L/s fills a 10 L bucket in about 2.5 s, believable for a 50 mm pipe at a brisk 2 m/s. Mass flow follows directly: &#7745; = &rho;Q = 1000 &times; 0.00393 = 3.93 kg/s for water.</p>`,
    },
    {
      id: "fluid-mechanics-q03",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>What pressure change corresponds to a 5.0 m water column? Use &rho; = 1000 kg/m<sup>3</sup> and g = 9.81 m/s<sup>2</sup>.</p>`,
      answer: 49.1,
      unit: "kPa",
      explanation: `<p>Hydrostatic pressure rises linearly with depth: &Delta;p = &rho;gh.</p><p class="eq">&Delta;p = 1000 &times; 9.81 &times; 5.0 = 49&#8201;050 Pa = <strong>49.1 kPa</strong></p><p>Against the rule of thumb: 10 m of water &asymp; 1 bar (98.1 kPa), so 5 m should be about half a bar, and 49.1 kPa is exactly that. Two things follow. The result depends only on vertical depth, not tank shape or volume. A narrow standpipe produces the same bottom pressure as a lake of equal depth (the hydrostatic paradox); (2) this is the <em>gauge</em> pressure change; absolute pressure at depth is p<sub>atm</sub> + &rho;gh. Common error: leaving h in cm, or reporting Pa as kPa, which shifts the answer by orders of magnitude.</p>`,
    },
    {
      id: "fluid-mechanics-q04",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>Water with &rho; = 1000 kg/m<sup>3</sup> and &mu; = 0.001 Pa&middot;s flows at V = 2.0 m/s in a D = 50 mm pipe. What is Reynolds number?</p>`,
      figure: figRe,
      answer: 100000,
      explanation: `<p>Reynolds number compares inertia to viscous forces:</p><p class="eq">Re = &rho;VD/&mu; = (1000)(2.0)(0.050)/0.001 = <strong>100&#8201;000</strong></p><p>Work the numerator first: 1000 &times; 2.0 &times; 0.050 = 100 kg/(m&middot;s); dividing by &mu; = 0.001 Pa&middot;s gives 10<sup>5</sup>, dimensionless as it must be. The classic slip is leaving D in millimetres, which inflates Re by 1000&times;. At Re = 10<sup>5</sup> the flow is decisively turbulent (transition ends around 4000), so f = 64/Re does not apply. A smooth-pipe correlation gives f &asymp; 0.018 here. Worth memorizing: water at room temperature has &mu; &asymp; 0.001 Pa&middot;s, so Re &asymp; 10<sup>6</sup> &times; V(m/s) &times; D(m). Almost any practical water flow in a building is turbulent.</p>`,
    },
    {
      id: "fluid-mechanics-q05",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A pipe has f = 0.020, L = 10 m, D = 0.050 m, &rho; = 1000 kg/m<sup>3</sup>, and V = 2.0 m/s. Estimate Darcy pressure drop in kPa.</p>`,
      answer: 8.0,
      unit: "kPa",
      explanation: `<p>Use the Darcy-Weisbach pressure-loss form:</p><p class="eq">&Delta;p = f(L/D)(&rho;V<sup>2</sup>/2)</p><p>First compute the length ratio and dynamic pressure:</p><p class="eq">L/D = 10/0.050 = 200, &nbsp;&nbsp; &rho;V<sup>2</sup>/2 = 1000(2.0)<sup>2</sup>/2 = 2000 Pa</p><p>Then:</p><p class="eq">&Delta;p = 0.020(200)(2000) = 8000 Pa = <strong>8.0 kPa</strong></p><p>The biggest hazard is the friction-factor convention: Darcy f is four times the Fanning factor. Using the wrong one would make pressure drop off by 4&times;. In head, 8 kPa is 0.82 m of water over 10 m of pipe, a normal-looking gradient for a 50 mm line at 2 m/s.</p>`,
    },
    {
      id: "fluid-mechanics-q06",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A pump delivers Q = 0.010 m<sup>3</sup>/s of water against head H = 20 m with efficiency &eta; = 0.70. Estimate shaft power in kW.</p>`,
      figure: figPump,
      answer: 2.8,
      unit: "kW",
      explanation: `<p>Start with hydraulic power, the rate of useful energy added to the water:</p><p class="eq">P<sub>hyd</sub> = &rho;gQH</p><p>For water, use &rho; = 1000 kg/m<sup>3</sup>. Substitute Q = 0.010 m<sup>3</sup>/s and H = 20 m:</p><p class="eq">P<sub>hyd</sub> = 1000(9.81)(0.010)(20) = 1962 W</p><p>The shaft must supply more than this because efficiency is 70%, so divide by &eta; rather than multiply:</p><p class="eq">P<sub>shaft</sub> = 1962/0.70 = 2803 W = <strong>2.8 kW</strong></p><p>A practical motor choice would also include service factor, pump-curve margin, startup conditions, and extra head from fittings or valves.</p>`,
    },
    {
      id: "fluid-mechanics-q07",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A test engineer estimates the loss across a half-open globe valve by writing Bernoulli between taps 200 mm upstream and 200 mm downstream. The pipe bore is identical on both sides, so V is unchanged, and he concludes the static pressures must also be equal. The gauge across the valve reads 180 kPa. Which statement identifies the actual error?</p>`,
      choices: [
        "Continuity fails at a valve, so the two velocities at the taps are not really equal.",
        "The two taps are at different elevations, so the &rho;gz terms do not cancel as assumed.",
        "The flow through a valve is unsteady, so the transient term dominates the balance.",
        "Bernoulli carries no loss term, and dissipation is exactly what a throttling valve does.",
      ],
      answer: 3,
      explanation: `<p>Continuity is fine: same bore, same flow, same average velocity, so the velocity heads genuinely do cancel. Elevation is fine too on a horizontal run. What is not fine is using the <em>ideal</em> Bernoulli equation across a device whose entire purpose is to destroy mechanical energy. The honest statement is the extended energy equation:</p><p class="eq">p<sub>1</sub> + &frac12;&rho;V<sub>1</sub>&sup2; + &rho;gz<sub>1</sub> = p<sub>2</sub> + &frac12;&rho;V<sub>2</sub>&sup2; + &rho;gz<sub>2</sub> + &Delta;p<sub>loss</sub></p><p>With the kinetic and elevation terms cancelling, the whole 180 kPa <em>is</em> the loss: &Delta;p<sub>loss</sub> = K(&rho;V&sup2;/2). At 3 m/s in water that dynamic pressure is 4.5 kPa, implying K &asymp; 40, entirely plausible for a globe valve part way closed.</p><p>The question separates people who memorised the equation from people who know its assumptions. The same reasoning bans Bernoulli across a pump or fan (shaft work added), a long fouled line (distributed loss), a shock, and a fast transient. Follow-up they will ask: where does the 180 kPa go? Into heat and noise, and if the local pressure dips below vapour pressure at the vena contracta, into cavitation damage on the trim.</p>`,
    },
    {
      id: "fluid-mechanics-q08",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A Pitot tube in air reads dynamic pressure &Delta;p = 500 Pa. If air density is 1.2 kg/m<sup>3</sup>, estimate speed in m/s.</p>`,
      figure: figPitot,
      answer: 28.9,
      unit: "m/s",
      explanation: `<p>A Pitot tube converts flow speed into a stagnation-minus-static pressure reading. For low-speed incompressible flow:</p><p class="eq">&Delta;p = &frac12;&rho;V<sup>2</sup></p><p>Solve for speed and substitute &Delta;p = 500 Pa and &rho; = 1.2 kg/m<sup>3</sup>:</p><p class="eq">V = &radic;(2&Delta;p/&rho;) = &radic;(2(500)/1.2) = &radic;833.3 = <strong>28.9 m/s</strong></p><p>The units work because Pa = kg/(m&middot;s<sup>2</sup>). This result is about Mach 0.08 at room conditions, so incompressible Pitot theory is fine. Misalignment, nearby wakes, and compressibility at higher Mach numbers are the practical pitfalls.</p>`,
    },
    {
      id: "fluid-mechanics-q09",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A test skid runs 1.0 m of 20 mm bore tube containing four 90&deg; elbows (K = 0.9 each), a ball valve (K = 0.1) and a sharp entrance (K = 0.5). The friction factor is 0.028. Which loss term dominates, and roughly by how much?</p>`,
      choices: [
        "The fittings, by about 3&times;: &Sigma;K = 4.2 against fL/D = 1.4.",
        "The straight tube, by about 3&times;: fL/D = 4.2 against &Sigma;K = 1.4.",
        "Neither &mdash; both terms must be equal because K and fL/D are dimensionless.",
        "The straight tube, because fitting losses never exceed 10% of a system total.",
      ],
      answer: 0,
      explanation: `<p>Put both terms on the same dynamic-pressure scale before judging. Friction: fL/D = 0.028 &times; (1.0/0.020) = <strong>1.4</strong>. Fittings: &Sigma;K = 4(0.9) + 0.1 + 0.5 = <strong>4.2</strong>. The fittings are three times the straight-pipe term, so this skid is minor-loss dominated and total &Delta;p = (1.4 + 4.2)(&rho;V&sup2;/2) = 5.6(&rho;V&sup2;/2).</p><p>The name "minor losses" is the catch. It is only true for long transmission lines where L/D runs into the thousands. On short runs, manifolds, cold plates and instrument skids, fittings usually carry most of the loss. Option 2 simply swaps the two numbers; option 3 confuses "both dimensionless" with "both equal"; option 4 states a rule of thumb that is exactly backwards for compact hardware.</p><p>Practical consequence: adding pipe length here changes little, but deleting two elbows or opening the valve fully changes a lot. The follow-up worth volunteering is that a globe valve at K &asymp; 10 would by itself have doubled the whole system loss.</p>`,
    },
    {
      id: "fluid-mechanics-q10",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A roof box adds C<sub>D</sub> = 0.8 over a projected area of 0.50 m<sup>2</sup> to a car. With air at &rho; = 1.2 kg/m<sup>3</sup>, how much extra engine power (kW) does the box demand at a steady 20 m/s?</p>`,
      answer: 1.92,
      unit: "kW",
      explanation: `<p>Two steps: force, then power. Drag first:</p><p class="eq">F<sub>D</sub> = &frac12;&rho;V&sup2;C<sub>D</sub>A = 0.5(1.2)(20&sup2;)(0.8)(0.50) = 96 N</p><p>Power is the rate that force does work against the oncoming air:</p><p class="eq">P = F<sub>D</sub>V = 96 &times; 20 = 1920 W = <strong>1.92 kW</strong></p><p>About 2.6 hp at the wheels, so with a driveline at roughly 30% thermal efficiency the box costs some 6 kW of fuel power, a believable few litres per 100 km.</p><p>The number that matters is what happens next. Because P = &frac12;&rho;V&sup3;C<sub>D</sub>A, power goes as V<sup>3</sup>: at 40 m/s the same box takes 0.5(1.2)(40&sup3;)(0.8)(0.5) = 15.4 kW, eight times as much. Forgetting the &frac12; doubles the answer to 3.84 kW. Quoting the drag force in newtons answers a different question. Always state the reference area with any C<sub>D</sub>, frontal, planform and wetted areas give different coefficients for the same measured force.</p>`,
    },
    {
      id: "fluid-mechanics-q11",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A turbulent water line runs at its design flow. Production asks to double the throughput through the same pipe, with the friction factor roughly unchanged. What happens to the pump shaft power?</p>`,
      choices: [
        "About 2&times; &mdash; power tracks volume flow, and the head is fixed by the pipe.",
        "About 4&times; &mdash; the velocity head goes as V&sup2;, and the pump power follows it directly.",
        "About 8&times; &mdash; &Delta;p rises 4&times; and power is Q&Delta;p, so 2 &times; 4.",
        "About 16&times; &mdash; both &Delta;p and Q scale with V&sup2; in turbulent flow.",
      ],
      answer: 2,
      explanation: `<p>Chain the two scalings. In a fixed pipe, V &prop; Q, and Darcy gives &Delta;p = f(L/D)(&rho;V&sup2;/2) &prop; V&sup2; when f is roughly constant, so doubling flow multiplies pressure drop by 4. Hydraulic power is the product:</p><p class="eq">P = Q&Delta;p &prop; Q &middot; Q&sup2; = Q&sup3; &rarr; 2&sup3; = <strong>8&times;</strong></p><p>Option 1 forgets that head is not fixed. It is a function of flow. Option 2 gets &Delta;p right but forgets to multiply by the extra flow. Option 4 double-counts the square. If any static lift is present the true factor lands between 4 and 8, because the &rho;gz part of the head does not grow with flow; a pure friction loop is the 8&times; limit.</p><p>Two consequences worth stating: a 20 kW pump becomes a 160 kW pump, which usually means a new motor, starter and cable, not a bigger impeller; and running the same job at half speed with a VFD saves roughly 8&times; the power, which is the same law read backwards.</p>`,
    },
    {
      id: "fluid-mechanics-q12",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>Water at 20 &deg;C (&rho; = 1000 kg/m<sup>3</sup>, &mu; = 1.0 &times; 10<sup>&minus;3</sup> Pa&middot;s) flows at 2.0 m/s through 20 m of 50 mm commercial steel pipe, roughness &epsilon; = 0.045 mm. No friction factor is given &mdash; get it off the Moody chart yourself, then estimate the pressure drop in kPa.</p>`,
      figure: figMoody,
      answer: 17.5,
      unit: "kPa",
      tolerance: 0.06,
      explanation: `<p>Three steps, and the first two are the ones candidates skip.</p><p><strong>1. Reynolds number picks the branch.</strong> Re = &rho;VD/&mu; = (1000)(2.0)(0.050)/0.001 = 1.0 &times; 10<sup>5</sup>. That is well past 4000, so the laminar branch f = 64/Re is illegal here. It would return 0.00064 and understate the loss by about 34&times;.</p><p><strong>2. Relative roughness picks the curve.</strong> &epsilon;/D = 0.045/50 = 9.0 &times; 10<sup>&minus;4</sup>. Entering the chart at Re = 10<sup>5</sup> on that curve gives f &asymp; 0.022. Swamee-Jain confirms it: f = 0.25/[log<sub>10</sub>(9.0&times;10<sup>&minus;4</sup>/3.7 + 5.74/(10<sup>5</sup>)<sup>0.9</sup>)]<sup>2</sup> = 0.0220, and full Colebrook gives 0.0218.</p><p><strong>3. Darcy-Weisbach finishes it.</strong></p><p class="eq">&Delta;p = f(L/D)(&rho;V&sup2;/2) = 0.0218 &times; (20/0.050) &times; (1000 &times; 2.0&sup2;/2)</p><p class="eq">&Delta;p = 0.0218 &times; 400 &times; 2000 = 17&#8201;500 Pa = <strong>17.5 kPa</strong></p><p>Chart reading is not precise, so anything from f = 0.021 to 0.022 (16.8 to 17.6 kPa) is a defensible answer. The tolerance here is deliberately loose. Note where this pipe sits: at Re = 10<sup>5</sup> it is still on the sloping part of the curve, so f falls slowly as flow rises. Push Re to about 10<sup>7</sup> and this roughness curve flattens onto its fully rough plateau, where f depends on &epsilon;/D alone. In head, 17.5 kPa is 1.8 m of water over 20 m of pipe, a normal design gradient.</p>`,
    },
  ],
  qna: [
    {
      id: "fluid-mechanics-qa01",
      q: `<p>How do you approach a basic fluid mechanics interview problem?</p>`,
      a: `<p>I start with a control volume and identify what is conserved: mass, momentum, or energy. For steady incompressible flow, continuity gives Q = AV. If pressure, elevation, and velocity trade off and losses are small, Bernoulli gives a first estimate. If the flow is in a pipe or duct, I compute Reynolds number and include friction/minor losses. If a pump is involved, I convert required flow and head into power with efficiency. I also state assumptions: steady/unsteady, incompressible/compressible, viscous losses, and whether the chosen points lie along a streamline.</p>`,
    },
    {
      id: "fluid-mechanics-qa02",
      q: `<p>Explain Bernoulli's equation and when it fails.</p>`,
      a: `<p>Bernoulli is a mechanical energy balance along a streamline: pressure energy, kinetic energy, and potential energy trade off. In its simplest form, p + &frac12;&rho;V<sup>2</sup> + &rho;gz is constant. It assumes steady incompressible inviscid flow along a streamline with no shaft work or heat effects. It fails or needs added terms when viscous losses matter, when pumps or turbines add or remove work, in strongly unsteady flow, across shocks, and when compressibility is important above roughly Mach 0.3. The one I would flag first in an interview is a throttling valve: the bore is the same either side, so the velocity heads cancel, and naive Bernoulli predicts no pressure change even though the gauge reads hundreds of kPa. All of it is loss. In real pipe problems I write the extended energy equation with a head-loss term and, if a pump is inside the control volume, a pump-head term.</p>`,
    },
    {
      id: "fluid-mechanics-qa03",
      q: `<p>What does Reynolds number tell you?</p>`,
      a: `<p>Reynolds number Re = &rho;VD/&mu; compares inertia to viscous forces, and I compute it to make a decision rather than to state a definition: it selects the friction correlation, the heat-transfer correlation, and my intuition about mixing. In internal pipe flow, laminar is typically below about 2300, turbulent above about 4000, and in between it is genuinely uncertain, roughness, upstream fittings and vibration all move the switch, so I bracket the answer rather than pretend one correlation is exact. The numbers I keep in my head: water at room temperature has &mu; &asymp; 1 &times; 10<sup>&minus;3</sup> Pa&middot;s and &rho; = 1000 kg/m<sup>3</sup>, so Re &asymp; 10<sup>6</sup> &times; V(m/s) &times; D(m). Anything above about 1 m/s in a 25 mm water line is already at Re &asymp; 25 000 and firmly turbulent. Air has roughly 15 times the kinematic viscosity, so the same duct at the same speed sits about 15 times lower in Re, which is why small air passages go laminar much more readily than water ones.</p>`,
    },
    {
      id: "fluid-mechanics-qa04",
      q: `<p>How do you estimate pressure drop in a pipe?</p>`,
      a: `<p>I compute velocity from Q/A, then Reynolds number to identify the regime, then pick f from laminar f = 64/Re or from the Moody chart / Swamee-Jain using &epsilon;/D, then apply Darcy-Weisbach &Delta;p = f(L/D)(&rho;V<sup>2</sup>/2). I add minor losses &Sigma;K(&rho;V<sup>2</sup>/2) for fittings, valves, entrances, exits and bends, and I compare &Sigma;K against fL/D rather than assuming friction dominates, on a short skid with six elbows and a globe valve the fittings usually win three or four to one. Required pump head is total pressure drop divided by &rho;g plus static lift. For orientation I keep design liquid velocity in the 1&ndash;3 m/s band; at 2 m/s in commercial steel, &rho;V<sup>2</sup>/2 is 2 kPa and a typical f is 0.02, so a 50 mm line costs roughly 0.8 kPa per metre. And I state whether f is Darcy or Fanning, because they differ by four. The lever that actually moves the answer is diameter: at fixed flow &Delta;p goes as 1/D<sup>5</sup>, so one size up cuts the drop by about 3&times; and is nearly always cheaper than a bigger pump.</p>`,
    },
    {
      id: "fluid-mechanics-qa05",
      q: `<p>What is cavitation and how do you avoid it?</p>`,
      a: `<p>Cavitation occurs when local static pressure falls below the fluid vapor pressure, causing vapor bubbles to form and then collapse in higher-pressure regions. Collapse can erode metal, create noise and vibration, and reduce pump or propeller performance. The quantitative test is NPSH available versus NPSH required at the actual flow, computed in absolute pressure: NPSH<sub>A</sub> = p<sub>atm</sub>/&rho;g + static suction head &minus; suction losses &minus; p<sub>vap</sub>/&rho;g. Atmospheric head is about 10.3 m of water, so even a perfect pump cannot lift water more than that, and once you subtract friction, NPSH required and a safety margin the practical suction lift is nearer 6 m. To avoid cavitation: lower the pump relative to the source, shorten and enlarge the suction line, reduce speed or flow, cool the liquid (vapor pressure is very temperature-sensitive, water goes from 2.3 kPa at 20 &deg;C to 101 kPa at 100 &deg;C), pressurise the tank, or pick a pump with lower NPSH required.</p>`,
    },
    {
      id: "fluid-mechanics-qa06",
      q: `<p>How do pumps fit into Bernoulli or energy equations?</p>`,
      a: `<p>A pump adds head to the fluid, so the extended Bernoulli equation includes pump head minus losses. The hydraulic power added is &rho;gQH, and required shaft power is &rho;gQH/&eta;. The actual operating point is where the pump curve intersects the system curve. Increasing flow raises losses, often roughly with Q<sup>2</sup>, so the pump does not deliver a fixed flow regardless of system resistance. In design, specify both required flow and head at the operating point and include efficiency, NPSH, and fluid properties.</p>`,
    },
    {
      id: "fluid-mechanics-qa07",
      q: `<p>What is the difference between laminar and turbulent flow?</p>`,
      a: `<p>Laminar flow is orderly, with fluid moving in layers and little cross-stream mixing. Turbulent flow has fluctuations, eddies, and strong mixing. Laminar pipe flow has a parabolic velocity profile whose peak is exactly twice the mean, and pressure drop proportional to flow rate. Turbulent flow has a much blunter profile with a steep wall gradient, pressure drop closer to flow rate squared, and far better mixing and heat transfer. Reynolds number helps predict the regime, but roughness, disturbances, entrances, and geometry matter. In interviews, the key is that regime changes the correlations and the scaling of losses.</p>`,
    },
    {
      id: "fluid-mechanics-qa08",
      q: `<p>How would you estimate drag on a body?</p>`,
      a: `<p>For an external-flow estimate, use F<sub>D</sub> = &frac12;&rho;V<sup>2</sup>C<sub>D</sub>A, where A is projected reference area and C<sub>D</sub> comes from shape, orientation, and Reynolds number. Drag scales with speed squared, so power to overcome drag scales with speed cubed. That cube is why highway speed dominates a vehicle's fuel use while city driving is dominated by rolling resistance and braking. The magnitudes I carry: flat plate normal to flow C<sub>D</sub> &asymp; 1.2, circular cylinder &asymp; 1.2, sphere &asymp; 0.47, modern car &asymp; 0.30, streamlined strut &asymp; 0.05, so fairing a bluff strut can cut its drag by a factor of twenty at the same frontal area. I would identify whether pressure drag or skin friction dominates, whether the flow is separated, and I would always state the reference area alongside C<sub>D</sub>, because frontal, planform and wetted areas give different coefficients for the same measured force. For detailed design, wind tunnel, CFD, or validated empirical data is needed.</p>`,
    },
    {
      id: "fluid-mechanics-qa09",
      q: `<p>A pump is delivering less flow than the datasheet promises. Walk me through how you would diagnose it.</p>`,
      a: `<p>First I remind myself that a datasheet flow is a point on a curve, not a property of the pump. The machine runs where its curve crosses the system curve, so "less flow than expected" almost always means the system curve is steeper than the design assumed. I would measure suction and discharge pressure and convert to total head, then locate that head on the pump curve; if the point lies on the curve at the measured flow, the pump is healthy and the piping is the problem. Common causes: a partly closed valve, a fouled or undersized line (remember &Delta;p goes as 1/D<sup>5</sup>, so a 10% bore reduction from scale is a 1.7&times; loss increase), a clogged strainer, or more fittings than the calculation carried. If the measured point falls <em>below</em> the curve, suspect the pump: worn wear rings, wrong impeller diameter, reversed rotation on a three-phase motor, or entrained air. Cavitation shows itself as gravel noise, unstable discharge pressure and pitting at the impeller eye, and is diagnosed by comparing NPSH available with NPSH required in absolute pressure. I would also check speed with a tachometer, since the affinity laws make Q &prop; N and a belt slipping 10% costs 10% of flow.</p>`,
    },
    {
      id: "fluid-mechanics-qa10",
      q: `<p>You have to size a water line for 200 L/min in a new machine. Talk me through the decision.</p>`,
      a: `<p>200 L/min is 3.33 &times; 10<sup>&minus;3</sup> m<sup>3</sup>/s. I start from a velocity target rather than a pressure drop, because the 1&ndash;3 m/s band for liquids is what keeps erosion, noise and water hammer under control. At 3 m/s the required area is Q/V = 1.11 &times; 10<sup>&minus;3</sup> m<sup>2</sup>, so D = &radic;(4A/&pi;) = 37.6 mm. Call it a 40 mm line, which runs at 2.65 m/s. Then I check the cost: Re = &rho;VD/&mu; = 1.06 &times; 10<sup>5</sup>, &epsilon;/D = 1.1 &times; 10<sup>&minus;3</sup> for commercial steel, so f &asymp; 0.022 and &Delta;p = f(L/D)(&rho;V<sup>2</sup>/2) &asymp; 20 kPa per 10 m, about 2 m of head. I then add the fittings, which on a compact machine usually exceed the straight-pipe term. If the head budget is tight the honest lever is diameter, not the pump: going to 50 mm drops velocity to 1.7 m/s and cuts &Delta;p by roughly (40/50)<sup>5</sup> = 0.33, a factor of three, for a small increase in material cost. Going the other way to 25 mm would multiply the drop by about 10 and put the velocity at 6.8 m/s, which is where erosion and noise complaints start. Finally I check what the fluid is doing at the ends, NPSH at the pump inlet, and whether a fast-closing valve makes water hammer the sizing case rather than steady friction.</p>`,
    },
  ],
};

export default content;
