import type { TopicContent } from "../types";

// ---------------------------------------------------------------------------
// Beam Deflection & Stiffness
// ---------------------------------------------------------------------------

// Lesson fig 1, the four table cases side by side, each with its formula.
const figShapes = `<svg viewBox="0 0 460 288" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bd1-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="bd1-udl" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto"><path d="M0,0L7,3.5L0,7z" fill="#dc2626"/></marker>
    <marker id="bd1-dim" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Four standard cases and their maximum deflections</text>

  <!-- A: cantilever, tip load -->
  <text x="120" y="42" text-anchor="middle" font-weight="600" fill="#334155" font-size="12">Cantilever, tip load</text>
  <line x1="42" y1="62" x2="42" y2="112" stroke="#334155" stroke-width="3"/>
  <line x1="32" y1="72" x2="42" y2="62" stroke="#64748b" stroke-width="1"/>
  <line x1="32" y1="92" x2="42" y2="82" stroke="#64748b" stroke-width="1"/>
  <line x1="32" y1="112" x2="42" y2="102" stroke="#64748b" stroke-width="1"/>
  <rect x="42" y="80" width="138" height="10" fill="#dbeafe" stroke="#334155" stroke-width="1.4"/>
  <path d="M42,85 C82,85 146,94 180,108" fill="none" stroke="#1d4ed8" stroke-width="2.2"/>
  <line x1="180" y1="54" x2="180" y2="76" stroke="#dc2626" stroke-width="2.2" marker-end="url(#bd1-load)"/>
  <text x="188" y="60" fill="#dc2626" font-weight="600" font-size="12">P</text>
  <line x1="42" y1="124" x2="180" y2="124" stroke="#64748b" stroke-width="1" marker-start="url(#bd1-dim)" marker-end="url(#bd1-dim)"/>
  <line x1="42" y1="118" x2="42" y2="130" stroke="#64748b" stroke-width="1"/>
  <line x1="180" y1="118" x2="180" y2="130" stroke="#64748b" stroke-width="1"/>
  <text x="111" y="119" text-anchor="middle" fill="#64748b" font-size="12">L</text>
  <text x="120" y="146" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">&delta;<tspan baseline-shift="sub" font-size="9">tip</tspan> = PL&sup3;/3EI</text>

  <!-- B: cantilever, UDL -->
  <text x="330" y="42" text-anchor="middle" font-weight="600" fill="#334155" font-size="12">Cantilever, uniform load</text>
  <line x1="260" y1="62" x2="260" y2="112" stroke="#334155" stroke-width="3"/>
  <line x1="250" y1="72" x2="260" y2="62" stroke="#64748b" stroke-width="1"/>
  <line x1="250" y1="92" x2="260" y2="82" stroke="#64748b" stroke-width="1"/>
  <line x1="250" y1="112" x2="260" y2="102" stroke="#64748b" stroke-width="1"/>
  <line x1="260" y1="56" x2="398" y2="56" stroke="#dc2626" stroke-width="1.8"/>
  <line x1="260" y1="58" x2="260" y2="74" stroke="#dc2626" stroke-width="1.4" marker-end="url(#bd1-udl)"/>
  <line x1="288" y1="58" x2="288" y2="74" stroke="#dc2626" stroke-width="1.4" marker-end="url(#bd1-udl)"/>
  <line x1="316" y1="58" x2="316" y2="74" stroke="#dc2626" stroke-width="1.4" marker-end="url(#bd1-udl)"/>
  <line x1="344" y1="58" x2="344" y2="74" stroke="#dc2626" stroke-width="1.4" marker-end="url(#bd1-udl)"/>
  <line x1="372" y1="58" x2="372" y2="74" stroke="#dc2626" stroke-width="1.4" marker-end="url(#bd1-udl)"/>
  <line x1="398" y1="58" x2="398" y2="74" stroke="#dc2626" stroke-width="1.4" marker-end="url(#bd1-udl)"/>
  <text x="406" y="58" fill="#dc2626" font-weight="600" font-size="12">w</text>
  <rect x="260" y="80" width="138" height="10" fill="#dbeafe" stroke="#334155" stroke-width="1.4"/>
  <path d="M260,85 C300,85 360,94 398,106" fill="none" stroke="#1d4ed8" stroke-width="2.2"/>
  <line x1="260" y1="124" x2="398" y2="124" stroke="#64748b" stroke-width="1" marker-start="url(#bd1-dim)" marker-end="url(#bd1-dim)"/>
  <line x1="260" y1="118" x2="260" y2="130" stroke="#64748b" stroke-width="1"/>
  <line x1="398" y1="118" x2="398" y2="130" stroke="#64748b" stroke-width="1"/>
  <text x="329" y="119" text-anchor="middle" fill="#64748b" font-size="12">L</text>
  <text x="330" y="146" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">&delta;<tspan baseline-shift="sub" font-size="9">tip</tspan> = wL&#8308;/8EI</text>

  <!-- C: simply supported, centre load -->
  <text x="120" y="176" text-anchor="middle" font-weight="600" fill="#334155" font-size="12">Simply supported, centre load</text>
  <line x1="111" y1="188" x2="111" y2="206" stroke="#dc2626" stroke-width="2.2" marker-end="url(#bd1-load)"/>
  <text x="122" y="190" fill="#dc2626" font-weight="600" font-size="12">P</text>
  <rect x="42" y="210" width="138" height="10" fill="#dbeafe" stroke="#334155" stroke-width="1.4"/>
  <path d="M42,215 C70,232 152,232 180,215" fill="none" stroke="#1d4ed8" stroke-width="2.2"/>
  <polygon points="42,220 32,238 52,238" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="42" cy="220" r="2.6" fill="#334155"/>
  <line x1="28" y1="238" x2="56" y2="238" stroke="#334155" stroke-width="1.4"/>
  <line x1="32" y1="246" x2="39" y2="238" stroke="#64748b" stroke-width="1"/>
  <line x1="42" y1="246" x2="49" y2="238" stroke="#64748b" stroke-width="1"/>
  <polygon points="180,220 170,236 190,236" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="175" cy="241" r="3.4" fill="none" stroke="#334155" stroke-width="1.3"/>
  <circle cx="185" cy="241" r="3.4" fill="none" stroke="#334155" stroke-width="1.3"/>
  <line x1="166" y1="247" x2="194" y2="247" stroke="#334155" stroke-width="1.4"/>
  <line x1="42" y1="260" x2="180" y2="260" stroke="#64748b" stroke-width="1" marker-start="url(#bd1-dim)" marker-end="url(#bd1-dim)"/>
  <line x1="42" y1="254" x2="42" y2="266" stroke="#64748b" stroke-width="1"/>
  <line x1="180" y1="254" x2="180" y2="266" stroke="#64748b" stroke-width="1"/>
  <text x="111" y="255" text-anchor="middle" fill="#64748b" font-size="12">L</text>
  <text x="120" y="282" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">&delta;<tspan baseline-shift="sub" font-size="9">mid</tspan> = PL&sup3;/48EI</text>

  <!-- D: simply supported, UDL -->
  <text x="330" y="176" text-anchor="middle" font-weight="600" fill="#334155" font-size="12">Simply supported, uniform load</text>
  <line x1="260" y1="188" x2="398" y2="188" stroke="#dc2626" stroke-width="1.8"/>
  <line x1="260" y1="190" x2="260" y2="206" stroke="#dc2626" stroke-width="1.4" marker-end="url(#bd1-udl)"/>
  <line x1="288" y1="190" x2="288" y2="206" stroke="#dc2626" stroke-width="1.4" marker-end="url(#bd1-udl)"/>
  <line x1="316" y1="190" x2="316" y2="206" stroke="#dc2626" stroke-width="1.4" marker-end="url(#bd1-udl)"/>
  <line x1="344" y1="190" x2="344" y2="206" stroke="#dc2626" stroke-width="1.4" marker-end="url(#bd1-udl)"/>
  <line x1="372" y1="190" x2="372" y2="206" stroke="#dc2626" stroke-width="1.4" marker-end="url(#bd1-udl)"/>
  <line x1="398" y1="190" x2="398" y2="206" stroke="#dc2626" stroke-width="1.4" marker-end="url(#bd1-udl)"/>
  <text x="406" y="190" fill="#dc2626" font-weight="600" font-size="12">w</text>
  <rect x="260" y="210" width="138" height="10" fill="#dbeafe" stroke="#334155" stroke-width="1.4"/>
  <path d="M260,215 C290,234 368,234 398,215" fill="none" stroke="#1d4ed8" stroke-width="2.2"/>
  <polygon points="260,220 250,238 270,238" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="260" cy="220" r="2.6" fill="#334155"/>
  <line x1="246" y1="238" x2="274" y2="238" stroke="#334155" stroke-width="1.4"/>
  <line x1="250" y1="246" x2="257" y2="238" stroke="#64748b" stroke-width="1"/>
  <line x1="260" y1="246" x2="267" y2="238" stroke="#64748b" stroke-width="1"/>
  <polygon points="398,220 388,236 408,236" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="393" cy="241" r="3.4" fill="none" stroke="#334155" stroke-width="1.3"/>
  <circle cx="403" cy="241" r="3.4" fill="none" stroke="#334155" stroke-width="1.3"/>
  <line x1="384" y1="247" x2="412" y2="247" stroke="#334155" stroke-width="1.4"/>
  <line x1="260" y1="260" x2="398" y2="260" stroke="#64748b" stroke-width="1" marker-start="url(#bd1-dim)" marker-end="url(#bd1-dim)"/>
  <line x1="260" y1="254" x2="260" y2="266" stroke="#64748b" stroke-width="1"/>
  <line x1="398" y1="254" x2="398" y2="266" stroke="#64748b" stroke-width="1"/>
  <text x="329" y="255" text-anchor="middle" fill="#64748b" font-size="12">L</text>
  <text x="330" y="282" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">&delta;<tspan baseline-shift="sub" font-size="9">mid</tspan> = 5wL&#8308;/384EI</text>
</svg>`;

// Lesson fig 2, the span law, drawn as a genuine cubic (the Bezier below is
// exactly y = 200 - 130t^3 with x linear in t, so the curve really is L^3).
const figScaling = `<svg viewBox="0 0 460 252" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bd2-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Deflection is cubic in span, so length beats every other lever</text>
  <line x1="64" y1="200" x2="410" y2="200" stroke="#64748b" stroke-width="1.5" marker-end="url(#bd2-ax)"/>
  <line x1="64" y1="200" x2="64" y2="52" stroke="#64748b" stroke-width="1.5" marker-end="url(#bd2-ax)"/>
  <text x="34" y="128" text-anchor="middle" transform="rotate(-90 34 128)" fill="#64748b" font-size="12">deflection &delta;</text>
  <text x="232" y="238" text-anchor="middle" fill="#64748b" font-size="12">span L</text>
  <line x1="64" y1="70" x2="384" y2="70" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="384" y1="70" x2="384" y2="200" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="64" y1="183.7" x2="224" y2="183.7" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="224" y1="183.7" x2="224" y2="200" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <path d="M64,200 C170.67,200 277.33,200 384,70" fill="none" stroke="#dc2626" stroke-width="3"/>
  <circle cx="224" cy="183.7" r="4" fill="#1d4ed8"/>
  <circle cx="384" cy="70" r="4" fill="#1d4ed8"/>
  <text x="58" y="188" text-anchor="end" fill="#1d4ed8" font-size="12">&delta;</text>
  <text x="58" y="74" text-anchor="end" fill="#1d4ed8" font-size="12">8&delta;</text>
  <text x="224" y="216" text-anchor="middle" fill="#64748b" font-size="12">L</text>
  <text x="384" y="216" text-anchor="middle" fill="#64748b" font-size="12">2L</text>
  <text x="200" y="130" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="12">double the span &rarr; 8&times; the deflection</text>
  <text x="20" y="250" fill="#64748b" font-size="12">Tip load: &delta; &prop; L&sup3;. Distributed load: &delta; &prop; L&#8308;. Bending stress only &prop; L.</text>
</svg>`;

// Lesson fig 3. Superposition drawn as three beams: case 1 + case 2 = total.
const figSuper = `<svg viewBox="0 0 460 290" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bd3-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Superposition: solve each load case, then add the deflections</text>
  <!-- case 1 -->
  <line x1="110" y1="44" x2="110" y2="78" stroke="#334155" stroke-width="3"/>
  <line x1="100" y1="54" x2="110" y2="44" stroke="#64748b" stroke-width="1"/>
  <line x1="100" y1="72" x2="110" y2="62" stroke="#64748b" stroke-width="1"/>
  <rect x="110" y="56" width="270" height="9" fill="#dbeafe" stroke="#334155" stroke-width="1.3"/>
  <line x1="245" y1="32" x2="245" y2="52" stroke="#dc2626" stroke-width="2.2" marker-end="url(#bd3-load)"/>
  <text x="253" y="40" fill="#dc2626" font-weight="600" font-size="12">P<tspan baseline-shift="sub" font-size="9">1</tspan></text>
  <path d="M110,60 C150,60 226,67.5 245,70 L380,88" fill="none" stroke="#1d4ed8" stroke-width="2.2"/>
  <text x="388" y="92" fill="#1d4ed8" font-weight="600" font-size="12">&delta;<tspan baseline-shift="sub" font-size="9">1</tspan></text>
  <text x="60" y="104" text-anchor="middle" fill="#334155" font-size="18" font-weight="600">+</text>
  <!-- case 2 -->
  <line x1="110" y1="108" x2="110" y2="142" stroke="#334155" stroke-width="3"/>
  <line x1="100" y1="118" x2="110" y2="108" stroke="#64748b" stroke-width="1"/>
  <line x1="100" y1="136" x2="110" y2="126" stroke="#64748b" stroke-width="1"/>
  <rect x="110" y="120" width="270" height="9" fill="#dbeafe" stroke="#334155" stroke-width="1.3"/>
  <line x1="380" y1="96" x2="380" y2="116" stroke="#dc2626" stroke-width="2.2" marker-end="url(#bd3-load)"/>
  <text x="388" y="110" fill="#dc2626" font-weight="600" font-size="12">P<tspan baseline-shift="sub" font-size="9">2</tspan></text>
  <path d="M110,124 C160,124 300,140 380,158" fill="none" stroke="#1d4ed8" stroke-width="2.2"/>
  <text x="388" y="162" fill="#1d4ed8" font-weight="600" font-size="12">&delta;<tspan baseline-shift="sub" font-size="9">2</tspan></text>
  <text x="60" y="184" text-anchor="middle" fill="#334155" font-size="18" font-weight="600">=</text>
  <!-- total -->
  <line x1="110" y1="196" x2="110" y2="230" stroke="#334155" stroke-width="3"/>
  <line x1="100" y1="206" x2="110" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="100" y1="224" x2="110" y2="214" stroke="#64748b" stroke-width="1"/>
  <rect x="110" y="208" width="270" height="9" fill="#dbeafe" stroke="#334155" stroke-width="1.3"/>
  <line x1="245" y1="176" x2="245" y2="204" stroke="#dc2626" stroke-width="2.2" marker-end="url(#bd3-load)"/>
  <line x1="380" y1="176" x2="380" y2="204" stroke="#dc2626" stroke-width="2.2" marker-end="url(#bd3-load)"/>
  <text x="228" y="184" text-anchor="end" fill="#dc2626" font-weight="600" font-size="12">P<tspan baseline-shift="sub" font-size="9">1</tspan></text>
  <text x="388" y="184" fill="#dc2626" font-weight="600" font-size="12">P<tspan baseline-shift="sub" font-size="9">2</tspan></text>
  <path d="M110,212 C155,212 220,220 245,228 C295,244 345,256 380,266" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <text x="388" y="266" fill="#1d4ed8" font-weight="600" font-size="12">&delta;<tspan baseline-shift="sub" font-size="9">1</tspan>+&delta;<tspan baseline-shift="sub" font-size="9">2</tspan></text>
  <text x="20" y="284" fill="#64748b" font-size="12">Valid while the beam stays linear elastic and supports do not change.</text>
</svg>`;

// Lesson fig 4. Propped cantilever: one redundant reaction, huge stiffness gain.
const figPropped = `<svg viewBox="0 0 460 258" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bd4-udl" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto"><path d="M0,0L7,3.5L0,7z" fill="#dc2626"/></marker>
    <marker id="bd4-rxn" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Propped cantilever: one redundant reaction, one compatibility equation</text>
  <line x1="60" y1="72" x2="60" y2="148" stroke="#334155" stroke-width="3"/>
  <line x1="48" y1="84" x2="60" y2="72" stroke="#64748b" stroke-width="1"/>
  <line x1="48" y1="106" x2="60" y2="94" stroke="#64748b" stroke-width="1"/>
  <line x1="48" y1="128" x2="60" y2="116" stroke="#64748b" stroke-width="1"/>
  <line x1="48" y1="148" x2="60" y2="136" stroke="#64748b" stroke-width="1"/>
  <line x1="60" y1="74" x2="400" y2="74" stroke="#dc2626" stroke-width="1.8"/>
  <line x1="60" y1="76" x2="60" y2="98" stroke="#dc2626" stroke-width="1.5" marker-end="url(#bd4-udl)"/>
  <line x1="117" y1="76" x2="117" y2="98" stroke="#dc2626" stroke-width="1.5" marker-end="url(#bd4-udl)"/>
  <line x1="174" y1="76" x2="174" y2="98" stroke="#dc2626" stroke-width="1.5" marker-end="url(#bd4-udl)"/>
  <line x1="231" y1="76" x2="231" y2="98" stroke="#dc2626" stroke-width="1.5" marker-end="url(#bd4-udl)"/>
  <line x1="288" y1="76" x2="288" y2="98" stroke="#dc2626" stroke-width="1.5" marker-end="url(#bd4-udl)"/>
  <line x1="345" y1="76" x2="345" y2="98" stroke="#dc2626" stroke-width="1.5" marker-end="url(#bd4-udl)"/>
  <line x1="400" y1="76" x2="400" y2="98" stroke="#dc2626" stroke-width="1.5" marker-end="url(#bd4-udl)"/>
  <text x="410" y="76" fill="#dc2626" font-weight="600">w</text>
  <rect x="60" y="104" width="340" height="12" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <path d="M60,110 C110,110 160,132 230,134 C300,136 372,122 400,110" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <circle cx="315" cy="129" r="4" fill="#1d4ed8"/>
  <line x1="315" y1="133" x2="315" y2="150" stroke="#64748b" stroke-width="1"/>
  <text x="315" y="162" text-anchor="middle" fill="#64748b" font-size="12">inflection, M = 0</text>
  <polygon points="400,116 390,134 410,134" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="394" cy="139" r="3.6" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="406" cy="139" r="3.6" fill="none" stroke="#334155" stroke-width="1.4"/>
  <line x1="386" y1="145" x2="414" y2="145" stroke="#334155" stroke-width="1.5"/>
  <line x1="400" y1="182" x2="400" y2="152" stroke="#1d4ed8" stroke-width="2.4" marker-end="url(#bd4-rxn)"/>
  <text x="392" y="188" text-anchor="end" fill="#1d4ed8" font-weight="600" font-size="12">R<tspan baseline-shift="sub" font-size="9">B</tspan> = 3wL/8</text>
  <text x="66" y="188" fill="#1d4ed8" font-weight="600" font-size="12">R<tspan baseline-shift="sub" font-size="9">A</tspan> = 5wL/8</text>
  <text x="66" y="208" fill="#1d4ed8" font-weight="600" font-size="12">M<tspan baseline-shift="sub" font-size="9">A</tspan> = wL&sup2;/8</text>
  <text x="20" y="234" fill="#64748b" font-size="12">Propping the free end drops &delta;<tspan baseline-shift="sub" font-size="9">max</tspan> from wL&#8308;/8EI to wL&#8308;/185EI.</text>
  <text x="20" y="252" fill="#64748b" font-size="12">Statics alone is one equation short; you also need &delta;<tspan baseline-shift="sub" font-size="9">B</tspan> = 0.</text>
</svg>`;

// --- question figures -------------------------------------------------------

// q02, the exact cantilever the question asks about.
const figCantQ = `<svg viewBox="0 0 460 232" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bd5-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="bd5-dim" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Cantilever with a tip load: find the free-end deflection</text>
  <line x1="66" y1="66" x2="66" y2="142" stroke="#334155" stroke-width="3"/>
  <line x1="54" y1="78" x2="66" y2="66" stroke="#64748b" stroke-width="1"/>
  <line x1="54" y1="100" x2="66" y2="88" stroke="#64748b" stroke-width="1"/>
  <line x1="54" y1="122" x2="66" y2="110" stroke="#64748b" stroke-width="1"/>
  <line x1="54" y1="142" x2="66" y2="130" stroke="#64748b" stroke-width="1"/>
  <rect x="66" y="98" width="290" height="12" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <polyline points="66,104.0 84,104.3 102,105.0 120,106.2 138,107.8 157,109.8 175,112.1 193,114.8 211,117.8 229,121.0 247,124.4 265,128.0 284,131.8 302,135.8 320,139.8 338,143.9 356,148.0" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <line x1="356" y1="62" x2="356" y2="94" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bd5-load)"/>
  <text x="356" y="54" text-anchor="middle" fill="#dc2626" font-weight="600">P = 100 N</text>
  <line x1="356" y1="148" x2="392" y2="148" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="356" y1="104" x2="392" y2="104" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="386" y1="104" x2="386" y2="148" stroke="#1d4ed8" stroke-width="1.4" marker-start="url(#bd5-dim)" marker-end="url(#bd5-dim)"/>
  <text x="396" y="130" fill="#1d4ed8" font-weight="600">&delta;</text>
  <line x1="66" y1="182" x2="356" y2="182" stroke="#64748b" stroke-width="1" marker-start="url(#bd5-dim)" marker-end="url(#bd5-dim)"/>
  <line x1="66" y1="176" x2="66" y2="188" stroke="#64748b" stroke-width="1"/>
  <line x1="356" y1="176" x2="356" y2="188" stroke="#64748b" stroke-width="1"/>
  <text x="211" y="177" text-anchor="middle" fill="#64748b" font-size="12">L = 1.0 m</text>
  <text x="20" y="210" fill="#334155" font-size="12">E = 200 GPa &nbsp; I = 1.0 &times; 10<tspan baseline-shift="super" font-size="9">&minus;6</tspan> m<tspan baseline-shift="super" font-size="9">4</tspan> &nbsp; EI = 200 kN&middot;m&sup2;</text>
  <text x="20" y="228" fill="#64748b" font-size="12">Free end only: no reaction there, so &delta; = PL&sup3;/3EI.</text>
</svg>`;

// q04, the simply supported centre-load case with its numbers.
const figSSQ = `<svg viewBox="0 0 460 236" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bd6-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="bd6-dim" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Simply supported beam, load at midspan</text>
  <line x1="230" y1="44" x2="230" y2="86" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bd6-load)"/>
  <text x="230" y="38" text-anchor="middle" fill="#dc2626" font-weight="600">P = 1.0 kN</text>
  <rect x="70" y="90" width="320" height="12" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <path d="M70,96 C126,134 334,134 390,96" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <line x1="230" y1="96" x2="230" y2="126" stroke="#1d4ed8" stroke-width="1.4" marker-start="url(#bd6-dim)" marker-end="url(#bd6-dim)"/>
  <text x="242" y="118" fill="#1d4ed8" font-weight="600">&delta;<tspan baseline-shift="sub" font-size="9">max</tspan></text>
  <polygon points="70,102 58,124 82,124" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="70" cy="102" r="3" fill="#334155"/>
  <line x1="52" y1="124" x2="88" y2="124" stroke="#334155" stroke-width="1.5"/>
  <line x1="58" y1="133" x2="66" y2="124" stroke="#64748b" stroke-width="1"/>
  <line x1="70" y1="133" x2="78" y2="124" stroke="#64748b" stroke-width="1"/>
  <line x1="82" y1="133" x2="90" y2="124" stroke="#64748b" stroke-width="1"/>
  <text x="70" y="152" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <polygon points="390,102 378,120 402,120" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="383" cy="126" r="4" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="397" cy="126" r="4" fill="none" stroke="#334155" stroke-width="1.4"/>
  <line x1="372" y1="132" x2="408" y2="132" stroke="#334155" stroke-width="1.5"/>
  <text x="390" y="152" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  <line x1="70" y1="180" x2="230" y2="180" stroke="#64748b" stroke-width="1" marker-start="url(#bd6-dim)" marker-end="url(#bd6-dim)"/>
  <line x1="230" y1="180" x2="390" y2="180" stroke="#64748b" stroke-width="1" marker-start="url(#bd6-dim)" marker-end="url(#bd6-dim)"/>
  <line x1="70" y1="174" x2="70" y2="186" stroke="#64748b" stroke-width="1"/>
  <line x1="230" y1="174" x2="230" y2="186" stroke="#64748b" stroke-width="1"/>
  <line x1="390" y1="174" x2="390" y2="186" stroke="#64748b" stroke-width="1"/>
  <text x="150" y="175" text-anchor="middle" fill="#64748b" font-size="12">1.0 m</text>
  <text x="310" y="175" text-anchor="middle" fill="#64748b" font-size="12">1.0 m</text>
  <text x="20" y="208" fill="#334155" font-size="12">E = 70 GPa &nbsp; I = 4.0 &times; 10<tspan baseline-shift="super" font-size="9">&minus;6</tspan> m<tspan baseline-shift="super" font-size="9">4</tspan> &nbsp; span L = 2.0 m</text>
  <text x="20" y="226" fill="#64748b" font-size="12">Pins allow rotation, so this is 16&times; stiffer than the cantilever case.</text>
</svg>`;

// q05, the same area, rearranged: I scales with h^2 at constant A.
const figSectionDepth = `<svg viewBox="0 0 460 262" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bd7-dim" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Same area, twice the depth: I = bh&sup3;/12 quadruples</text>
  <!-- shallow: 40 wide x 20 deep -->
  <rect x="78" y="120" width="80" height="40" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <line x1="66" y1="140" x2="170" y2="140" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="8 3 2 3"/>
  <text x="178" y="144" fill="#dc2626" font-size="12">N.A.</text>
  <line x1="78" y1="180" x2="158" y2="180" stroke="#64748b" stroke-width="1" marker-start="url(#bd7-dim)" marker-end="url(#bd7-dim)"/>
  <line x1="78" y1="164" x2="78" y2="186" stroke="#64748b" stroke-width="1"/>
  <line x1="158" y1="164" x2="158" y2="186" stroke="#64748b" stroke-width="1"/>
  <text x="118" y="175" text-anchor="middle" fill="#64748b" font-size="12">b = 40</text>
  <line x1="52" y1="120" x2="52" y2="160" stroke="#64748b" stroke-width="1" marker-start="url(#bd7-dim)" marker-end="url(#bd7-dim)"/>
  <line x1="46" y1="120" x2="72" y2="120" stroke="#64748b" stroke-width="1"/>
  <line x1="46" y1="160" x2="72" y2="160" stroke="#64748b" stroke-width="1"/>
  <text x="44" y="144" text-anchor="end" fill="#64748b" font-size="12">h = 20</text>
  <text x="118" y="212" text-anchor="middle" font-weight="600" fill="#334155">shallow</text>
  <text x="118" y="232" text-anchor="middle" fill="#1d4ed8" font-size="12">I = 26.7 &times; 10&sup3; mm&#8308;</text>
  <!-- deep: 20 wide x 40 deep -->
  <rect x="300" y="100" width="40" height="80" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <line x1="288" y1="140" x2="352" y2="140" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="8 3 2 3"/>
  <text x="360" y="144" fill="#dc2626" font-size="12">N.A.</text>
  <line x1="300" y1="196" x2="340" y2="196" stroke="#64748b" stroke-width="1" marker-start="url(#bd7-dim)" marker-end="url(#bd7-dim)"/>
  <line x1="300" y1="184" x2="300" y2="202" stroke="#64748b" stroke-width="1"/>
  <line x1="340" y1="184" x2="340" y2="202" stroke="#64748b" stroke-width="1"/>
  <text x="348" y="200" fill="#64748b" font-size="12">b = 20</text>
  <line x1="274" y1="100" x2="274" y2="180" stroke="#64748b" stroke-width="1" marker-start="url(#bd7-dim)" marker-end="url(#bd7-dim)"/>
  <line x1="268" y1="100" x2="294" y2="100" stroke="#64748b" stroke-width="1"/>
  <line x1="268" y1="180" x2="294" y2="180" stroke="#64748b" stroke-width="1"/>
  <text x="266" y="144" text-anchor="end" fill="#64748b" font-size="12">h = 40</text>
  <text x="320" y="212" text-anchor="middle" font-weight="600" fill="#334155">deep</text>
  <text x="320" y="232" text-anchor="middle" fill="#1d4ed8" font-size="12">I = 107 &times; 10&sup3; mm&#8308;</text>
  <text x="230" y="76" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">A = 800 mm&sup2; in both</text>
  <text x="20" y="254" fill="#64748b" font-size="12">At constant area I = Ah&sup2;/12, so 4&times; the I and about &frac14; the deflection.</text>
</svg>`;

// q12, the propped cantilever solved by releasing the redundant and superposing.
const figCompat = `<svg viewBox="0 0 460 296" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bd10-udl" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto"><path d="M0,0L7,3.5L0,7z" fill="#dc2626"/></marker>
    <marker id="bd10-rxn" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
    <marker id="bd10-dim" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Solving the propped cantilever: release, superpose, then close the gap</text>
  <text x="230" y="40" text-anchor="middle" font-weight="600" fill="#334155" font-size="12">Step 1 &mdash; take the prop away: B sags</text>
  <line x1="64" y1="52" x2="64" y2="112" stroke="#334155" stroke-width="3"/>
  <line x1="52" y1="64" x2="64" y2="52" stroke="#64748b" stroke-width="1"/>
  <line x1="52" y1="86" x2="64" y2="74" stroke="#64748b" stroke-width="1"/>
  <line x1="52" y1="108" x2="64" y2="96" stroke="#64748b" stroke-width="1"/>
  <line x1="64" y1="52" x2="396" y2="52" stroke="#dc2626" stroke-width="1.6"/>
  <line x1="64" y1="54" x2="64" y2="70" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd10-udl)"/>
  <line x1="119" y1="54" x2="119" y2="70" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd10-udl)"/>
  <line x1="175" y1="54" x2="175" y2="70" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd10-udl)"/>
  <line x1="230" y1="54" x2="230" y2="70" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd10-udl)"/>
  <line x1="285" y1="54" x2="285" y2="70" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd10-udl)"/>
  <line x1="341" y1="54" x2="341" y2="70" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd10-udl)"/>
  <line x1="396" y1="54" x2="396" y2="70" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd10-udl)"/>
  <text x="404" y="56" fill="#dc2626" font-weight="600" font-size="12">w</text>
  <rect x="64" y="74" width="332" height="10" fill="#dbeafe" stroke="#334155" stroke-width="1.4"/>
  <polyline points="64,79.0 85,79.3 106,80.1 126,81.5 147,83.2 168,85.3 188,87.7 209,90.3 230,93.2 251,96.2 272,99.3 292,102.5 313,105.7 334,109.0 354,112.3 375,115.7 396,119.0" fill="none" stroke="#1d4ed8" stroke-width="2.4"/>
  <line x1="412" y1="79" x2="412" y2="119" stroke="#64748b" stroke-width="1" marker-start="url(#bd10-dim)" marker-end="url(#bd10-dim)"/>
  <line x1="396" y1="79" x2="418" y2="79" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="396" y1="119" x2="418" y2="119" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="230" y="140" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">&delta;<tspan baseline-shift="sub" font-size="9">1</tspan> = wL&#8308;/8EI &nbsp;(downward at B)</text>
  <text x="230" y="164" text-anchor="middle" font-weight="600" fill="#334155" font-size="12">Step 2 &mdash; put the prop force back and push B up</text>
  <line x1="64" y1="176" x2="64" y2="234" stroke="#334155" stroke-width="3"/>
  <line x1="52" y1="188" x2="64" y2="176" stroke="#64748b" stroke-width="1"/>
  <line x1="52" y1="210" x2="64" y2="198" stroke="#64748b" stroke-width="1"/>
  <line x1="52" y1="232" x2="64" y2="220" stroke="#64748b" stroke-width="1"/>
  <rect x="64" y="196" width="332" height="10" fill="#dbeafe" stroke="#334155" stroke-width="1.4"/>
  <polyline points="64,201.0 85,200.8 106,200.3 126,199.4 147,198.2 168,196.8 188,195.1 209,193.2 230,191.0 251,188.7 272,186.2 292,183.5 313,180.8 334,177.9 354,175.0 375,172.0 396,169.0" fill="none" stroke="#1d4ed8" stroke-width="2.4"/>
  <line x1="396" y1="234" x2="396" y2="176" stroke="#1d4ed8" stroke-width="2.4" marker-end="url(#bd10-rxn)"/>
  <text x="404" y="228" fill="#1d4ed8" font-weight="600" font-size="12">R</text>
  <line x1="412" y1="201" x2="412" y2="169" stroke="#64748b" stroke-width="1" marker-start="url(#bd10-dim)" marker-end="url(#bd10-dim)"/>
  <text x="152" y="250" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">&delta;<tspan baseline-shift="sub" font-size="9">2</tspan> = RL&sup3;/3EI</text>
  <text x="20" y="274" fill="#64748b" font-size="12">The prop holds B at zero, so &delta;<tspan baseline-shift="sub" font-size="9">1</tspan> = &delta;<tspan baseline-shift="sub" font-size="9">2</tspan>: wL&#8308;/8EI = RL&sup3;/3EI.</text>
  <text x="20" y="292" fill="#64748b" font-size="12">One compatibility equation replaces the missing equilibrium equation.</text>
</svg>`;

// q11. Fixed-fixed against simply supported, both drawn at the same scale.
const figFixedVsSS = `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bd11-udl" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto"><path d="M0,0L7,3.5L0,7z" fill="#dc2626"/></marker>
    <marker id="bd11-dim" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Same span, same uniform load, drawn at the same deflection scale</text>
  <text x="230" y="40" text-anchor="middle" font-weight="600" fill="#334155" font-size="12">Pinned ends: rotation is free</text>
  <line x1="70" y1="50" x2="390" y2="50" stroke="#dc2626" stroke-width="1.6"/>
  <line x1="70" y1="52" x2="70" y2="68" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd11-udl)"/>
  <line x1="110" y1="52" x2="110" y2="68" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd11-udl)"/>
  <line x1="150" y1="52" x2="150" y2="68" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd11-udl)"/>
  <line x1="190" y1="52" x2="190" y2="68" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd11-udl)"/>
  <line x1="230" y1="52" x2="230" y2="68" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd11-udl)"/>
  <line x1="270" y1="52" x2="270" y2="68" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd11-udl)"/>
  <line x1="310" y1="52" x2="310" y2="68" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd11-udl)"/>
  <line x1="350" y1="52" x2="350" y2="68" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd11-udl)"/>
  <line x1="390" y1="52" x2="390" y2="68" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd11-udl)"/>
  <text x="398" y="54" fill="#dc2626" font-weight="600" font-size="12">w</text>
  <rect x="70" y="72" width="320" height="10" fill="#dbeafe" stroke="#334155" stroke-width="1.4"/>
  <polyline points="70,77.0 90,88.5 110,99.5 130,109.6 150,118.3 170,125.4 190,130.7 210,133.9 230,135.0 250,133.9 270,130.7 290,125.4 310,118.3 330,109.6 350,99.5 370,88.5 390,77.0" fill="none" stroke="#1d4ed8" stroke-width="2.4"/>
  <polygon points="70,82 58,102 82,102" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="70" cy="82" r="2.6" fill="#334155"/>
  <line x1="52" y1="102" x2="88" y2="102" stroke="#334155" stroke-width="1.4"/>
  <line x1="56" y1="110" x2="64" y2="102" stroke="#64748b" stroke-width="1"/>
  <line x1="70" y1="110" x2="78" y2="102" stroke="#64748b" stroke-width="1"/>
  <polygon points="390,82 378,100 402,100" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="383" cy="105" r="3.6" fill="none" stroke="#334155" stroke-width="1.3"/>
  <circle cx="397" cy="105" r="3.6" fill="none" stroke="#334155" stroke-width="1.3"/>
  <line x1="372" y1="111" x2="408" y2="111" stroke="#334155" stroke-width="1.4"/>
  <line x1="230" y1="77" x2="230" y2="135" stroke="#1d4ed8" stroke-width="1.3" marker-start="url(#bd11-dim)" marker-end="url(#bd11-dim)"/>
  <text x="230" y="152" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">&delta; = 5wL&#8308;/384EI</text>
  <text x="230" y="170" text-anchor="middle" font-weight="600" fill="#334155" font-size="12">Fixed ends: rotation is blocked</text>
  <line x1="70" y1="180" x2="390" y2="180" stroke="#dc2626" stroke-width="1.6"/>
  <line x1="70" y1="182" x2="70" y2="198" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd11-udl)"/>
  <line x1="110" y1="182" x2="110" y2="198" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd11-udl)"/>
  <line x1="150" y1="182" x2="150" y2="198" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd11-udl)"/>
  <line x1="190" y1="182" x2="190" y2="198" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd11-udl)"/>
  <line x1="230" y1="182" x2="230" y2="198" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd11-udl)"/>
  <line x1="270" y1="182" x2="270" y2="198" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd11-udl)"/>
  <line x1="310" y1="182" x2="310" y2="198" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd11-udl)"/>
  <line x1="350" y1="182" x2="350" y2="198" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd11-udl)"/>
  <line x1="390" y1="182" x2="390" y2="198" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd11-udl)"/>
  <text x="398" y="184" fill="#dc2626" font-weight="600" font-size="12">w</text>
  <rect x="70" y="202" width="320" height="10" fill="#dbeafe" stroke="#334155" stroke-width="1.4"/>
  <polyline points="70,207.0 90,207.6 110,209.2 130,211.3 150,213.5 170,215.6 190,217.2 210,218.2 230,218.6 250,218.2 270,217.2 290,215.6 310,213.5 330,211.3 350,209.2 370,207.6 390,207.0" fill="none" stroke="#1d4ed8" stroke-width="2.4"/>
  <line x1="70" y1="190" x2="70" y2="234" stroke="#334155" stroke-width="3"/>
  <line x1="58" y1="202" x2="70" y2="190" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="222" x2="70" y2="210" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="234" x2="70" y2="222" stroke="#64748b" stroke-width="1"/>
  <line x1="390" y1="190" x2="390" y2="234" stroke="#334155" stroke-width="3"/>
  <line x1="390" y1="190" x2="402" y2="202" stroke="#64748b" stroke-width="1"/>
  <line x1="390" y1="210" x2="402" y2="222" stroke="#64748b" stroke-width="1"/>
  <line x1="390" y1="222" x2="402" y2="234" stroke="#64748b" stroke-width="1"/>
  <line x1="230" y1="207" x2="230" y2="219" stroke="#1d4ed8" stroke-width="1.3"/>
  <circle cx="230" cy="219" r="3" fill="#1d4ed8"/>
  <text x="230" y="248" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">&delta; = wL&#8308;/384EI &mdash; one fifth as much</text>
  <text x="20" y="274" fill="#64748b" font-size="12">Blocking end rotation also moves the peak moment from midspan to the ends,</text>
  <text x="20" y="292" fill="#64748b" font-size="12">where it is wL&sup2;/12 instead of wL&sup2;/8.</text>
</svg>`;

// q14, a serviceability limit drawn against the sag it allows.
const figLimit = `<svg viewBox="0 0 460 248" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bd12-udl" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto"><path d="M0,0L7,3.5L0,7z" fill="#dc2626"/></marker>
    <marker id="bd12-dim" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">A deflection limit is a requirement, not a stress check</text>
  <line x1="60" y1="42" x2="400" y2="42" stroke="#dc2626" stroke-width="1.6"/>
  <line x1="60" y1="44" x2="60" y2="60" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd12-udl)"/>
  <line x1="117" y1="44" x2="117" y2="60" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd12-udl)"/>
  <line x1="173" y1="44" x2="173" y2="60" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd12-udl)"/>
  <line x1="230" y1="44" x2="230" y2="60" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd12-udl)"/>
  <line x1="287" y1="44" x2="287" y2="60" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd12-udl)"/>
  <line x1="343" y1="44" x2="343" y2="60" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd12-udl)"/>
  <line x1="400" y1="44" x2="400" y2="60" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd12-udl)"/>
  <text x="410" y="46" fill="#dc2626" font-weight="600" font-size="12">w</text>
  <rect x="60" y="68" width="340" height="10" fill="#dbeafe" stroke="#334155" stroke-width="1.4"/>
  <line x1="60" y1="73" x2="400" y2="73" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <polyline points="60,73.0 81,82.9 102,92.4 124,101.1 145,108.6 166,114.8 188,119.3 209,122.1 230,123.0 251,122.1 272,119.3 294,114.8 315,108.6 336,101.1 358,92.4 379,82.9 400,73.0" fill="none" stroke="#1d4ed8" stroke-width="2.4"/>
  <polygon points="60,78 48,98 72,98" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="60" cy="78" r="2.6" fill="#334155"/>
  <line x1="42" y1="98" x2="78" y2="98" stroke="#334155" stroke-width="1.4"/>
  <line x1="46" y1="106" x2="54" y2="98" stroke="#64748b" stroke-width="1"/>
  <line x1="60" y1="106" x2="68" y2="98" stroke="#64748b" stroke-width="1"/>
  <polygon points="400,78 388,96 412,96" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="393" cy="101" r="3.6" fill="none" stroke="#334155" stroke-width="1.3"/>
  <circle cx="407" cy="101" r="3.6" fill="none" stroke="#334155" stroke-width="1.3"/>
  <line x1="382" y1="107" x2="418" y2="107" stroke="#334155" stroke-width="1.4"/>
  <line x1="230" y1="73" x2="230" y2="123" stroke="#1d4ed8" stroke-width="1.3" marker-start="url(#bd12-dim)" marker-end="url(#bd12-dim)"/>
  <text x="240" y="104" fill="#1d4ed8" font-weight="600" font-size="12">&delta;<tspan baseline-shift="sub" font-size="9">max</tspan></text>
  <line x1="60" y1="146" x2="400" y2="146" stroke="#64748b" stroke-width="1" marker-start="url(#bd12-dim)" marker-end="url(#bd12-dim)"/>
  <line x1="60" y1="140" x2="60" y2="152" stroke="#64748b" stroke-width="1"/>
  <line x1="400" y1="140" x2="400" y2="152" stroke="#64748b" stroke-width="1"/>
  <text x="230" y="141" text-anchor="middle" fill="#64748b" font-size="12">span L = 3.0 m</text>
  <text x="20" y="176" fill="#334155" font-weight="600" font-size="12">Common serviceability criteria for this span:</text>
  <text x="30" y="196" fill="#64748b" font-size="12">L/180 = 16.7 mm &nbsp;&mdash;&nbsp; rough framing, no finish to crack</text>
  <text x="30" y="214" fill="#64748b" font-size="12">L/240 = 12.5 mm &nbsp;&mdash;&nbsp; general floors and shelving</text>
  <text x="30" y="232" fill="#1d4ed8" font-size="12">L/360 = 8.33 mm &nbsp;&mdash;&nbsp; visible sag, doors, brittle finishes</text>
</svg>`;

// q18, the beam and the joint are springs in series.
const figSeries = `<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bd13-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="bd13-rot" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">A bolted end is a spring, not a wall</text>
  <line x1="54" y1="44" x2="54" y2="160" stroke="#334155" stroke-width="3"/>
  <line x1="42" y1="56" x2="54" y2="44" stroke="#64748b" stroke-width="1"/>
  <line x1="42" y1="80" x2="54" y2="68" stroke="#64748b" stroke-width="1"/>
  <line x1="42" y1="104" x2="54" y2="92" stroke="#64748b" stroke-width="1"/>
  <line x1="42" y1="128" x2="54" y2="116" stroke="#64748b" stroke-width="1"/>
  <line x1="42" y1="152" x2="54" y2="140" stroke="#64748b" stroke-width="1"/>
  <rect x="54" y="56" width="32" height="88" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <circle cx="70" cy="72" r="5" fill="#ffffff" stroke="#334155" stroke-width="1.4"/>
  <circle cx="70" cy="128" r="5" fill="#ffffff" stroke="#334155" stroke-width="1.4"/>
  <text x="92" y="164" fill="#64748b" font-size="11">2 bolts</text>
  <rect x="86" y="94" width="214" height="12" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="300" y1="72" x2="300" y2="90" stroke="#dc2626" stroke-width="2.4" marker-end="url(#bd13-load)"/>
  <text x="308" y="82" fill="#dc2626" font-weight="600" font-size="12">P</text>
  <line x1="86" y1="100" x2="300" y2="128" stroke="#64748b" stroke-width="1.2" stroke-dasharray="5 4"/>
  <path d="M86,100 C150,109 240,127 300,146" fill="none" stroke="#1d4ed8" stroke-width="2.4"/>
  <path d="M92,62 Q114,52 136,64" fill="none" stroke="#1d4ed8" stroke-width="1.8" marker-end="url(#bd13-rot)"/>
  <text x="144" y="58" fill="#1d4ed8" font-weight="600" font-size="12">&theta;<tspan baseline-shift="sub" font-size="9">joint</tspan> &mdash; the plate rotates</text>
  <text x="308" y="140" fill="#64748b" font-size="11">rigid-body part</text>
  <text x="308" y="156" fill="#64748b" font-size="11">plus beam bending</text>
  <line x1="60" y1="180" x2="60" y2="222" stroke="#334155" stroke-width="3"/>
  <line x1="48" y1="192" x2="60" y2="180" stroke="#64748b" stroke-width="1"/>
  <line x1="48" y1="212" x2="60" y2="200" stroke="#64748b" stroke-width="1"/>
  <path d="M60,201 L74,201 L80,190 L92,212 L104,190 L116,212 L128,190 L140,212 L148,201 L162,201" fill="none" stroke="#334155" stroke-width="1.8"/>
  <rect x="162" y="192" width="10" height="18" fill="#e2e8f0" stroke="#334155" stroke-width="1.2"/>
  <path d="M172,201 L186,201 L192,190 L204,212 L216,190 L228,212 L240,190 L252,212 L260,201 L274,201" fill="none" stroke="#334155" stroke-width="1.8"/>
  <line x1="274" y1="201" x2="326" y2="201" stroke="#dc2626" stroke-width="2.4" marker-end="url(#bd13-load)"/>
  <text x="334" y="205" fill="#dc2626" font-weight="600" font-size="12">P</text>
  <text x="111" y="234" text-anchor="middle" fill="#334155" font-size="12">k<tspan baseline-shift="sub" font-size="9">joint</tspan></text>
  <text x="223" y="234" text-anchor="middle" fill="#334155" font-size="12">k<tspan baseline-shift="sub" font-size="9">beam</tspan></text>
  <text x="20" y="254" fill="#64748b" font-size="12">Series springs: 1/k<tspan baseline-shift="sub" font-size="9">total</tspan> = 1/k<tspan baseline-shift="sub" font-size="9">joint</tspan> + 1/k<tspan baseline-shift="sub" font-size="9">beam</tspan>. The softest link sets the answer,</text>
  <text x="20" y="270" fill="#64748b" font-size="12">so stiffening only the beam can change nothing you can measure.</text>
</svg>`;

// q19. Deflection against section depth, drawn as the true 1/h^3 curve.
const figDepthCurve = `<svg viewBox="0 0 460 256" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bd16-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Deflection falls with the cube of section depth</text>
  <line x1="96" y1="214" x2="428" y2="214" stroke="#64748b" stroke-width="1.5" marker-end="url(#bd16-ax)"/>
  <line x1="96" y1="214" x2="96" y2="52" stroke="#64748b" stroke-width="1.5" marker-end="url(#bd16-ax)"/>
  <text x="62" y="140" text-anchor="middle" transform="rotate(-90 62 140)" fill="#64748b" font-size="12">tip deflection</text>
  <text x="262" y="246" text-anchor="middle" fill="#64748b" font-size="12">section depth h (width b held constant)</text>
  <polyline points="110,70.0 120,107.9 131,133.6 141,151.6 151,164.6 162,174.2 172,181.5 182,187.1 193,191.5 203,195.0 214,197.8 224,200.1 234,201.9 245,203.5 255,204.8 265,205.9 276,206.8 286,207.6 296,208.3 307,208.9 317,209.4 328,209.8 338,210.2 348,210.5 359,210.8 369,211.1 379,211.3 390,211.6 400,211.8" fill="none" stroke="#dc2626" stroke-width="2.6"/>
  <circle cx="110" cy="70" r="4.5" fill="#1d4ed8"/>
  <circle cx="207" cy="196" r="4.5" fill="#1d4ed8"/>
  <circle cx="303" cy="209" r="4.5" fill="#1d4ed8"/>
  <line x1="96" y1="70" x2="110" y2="70" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="110" y1="70" x2="110" y2="214" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="207" y1="196" x2="207" y2="214" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="303" y1="209" x2="303" y2="214" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="120" y="66" fill="#1d4ed8" font-weight="600" font-size="12">&delta;</text>
  <text x="216" y="188" fill="#1d4ed8" font-weight="600" font-size="12">&delta;/8</text>
  <text x="312" y="202" fill="#1d4ed8" font-weight="600" font-size="12">&delta;/27</text>
  <text x="110" y="230" text-anchor="middle" fill="#64748b" font-size="12">h</text>
  <text x="207" y="230" text-anchor="middle" fill="#64748b" font-size="12">2h</text>
  <text x="303" y="230" text-anchor="middle" fill="#64748b" font-size="12">3h</text>
  <text x="400" y="230" text-anchor="middle" fill="#64748b" font-size="12">4h</text>
  <text x="270" y="88" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">I = bh&sup3;/12, so &delta; &prop; 1/h&sup3;</text>
  <text x="270" y="110" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="12">adding width only helps 1:1</text>
</svg>`;

// q21, the two deformation modes a stubby beam actually uses.
const figShear = `<svg viewBox="0 0 460 256" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bd14-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Where the deflection of a stubby beam comes from</text>
  <text x="118" y="42" text-anchor="middle" font-weight="600" fill="#334155" font-size="12">Bending: sections rotate</text>
  <line x1="52" y1="54" x2="52" y2="180" stroke="#334155" stroke-width="3"/>
  <line x1="40" y1="66" x2="52" y2="54" stroke="#64748b" stroke-width="1"/>
  <line x1="40" y1="94" x2="52" y2="82" stroke="#64748b" stroke-width="1"/>
  <line x1="40" y1="122" x2="52" y2="110" stroke="#64748b" stroke-width="1"/>
  <line x1="40" y1="150" x2="52" y2="138" stroke="#64748b" stroke-width="1"/>
  <line x1="40" y1="178" x2="52" y2="166" stroke="#64748b" stroke-width="1"/>
  <rect x="52" y="70" width="130" height="70" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 3"/>
  <path d="M52,70 C92,70 140,84 184,104 L178,172 C136,152 92,140 52,140 Z" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <path d="M96,72 L92,142" fill="none" stroke="#64748b" stroke-width="1"/>
  <path d="M140,82 L134,152" fill="none" stroke="#64748b" stroke-width="1"/>
  <line x1="198" y1="104" x2="198" y2="140" stroke="#dc2626" stroke-width="2.4" marker-end="url(#bd14-load)"/>
  <text x="206" y="126" fill="#dc2626" font-weight="600" font-size="12">P</text>
  <text x="118" y="206" text-anchor="middle" fill="#64748b" font-size="11">grid lines tilt but stay perpendicular</text>
  <text x="340" y="42" text-anchor="middle" font-weight="600" fill="#334155" font-size="12">Shear: sections slide</text>
  <line x1="272" y1="54" x2="272" y2="180" stroke="#334155" stroke-width="3"/>
  <line x1="260" y1="66" x2="272" y2="54" stroke="#64748b" stroke-width="1"/>
  <line x1="260" y1="94" x2="272" y2="82" stroke="#64748b" stroke-width="1"/>
  <line x1="260" y1="122" x2="272" y2="110" stroke="#64748b" stroke-width="1"/>
  <line x1="260" y1="150" x2="272" y2="138" stroke="#64748b" stroke-width="1"/>
  <line x1="260" y1="178" x2="272" y2="166" stroke="#64748b" stroke-width="1"/>
  <rect x="272" y="70" width="130" height="70" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 3"/>
  <path d="M272,70 L402,104 L402,174 L272,140 Z" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="316" y1="82" x2="316" y2="152" stroke="#64748b" stroke-width="1"/>
  <line x1="360" y1="93" x2="360" y2="163" stroke="#64748b" stroke-width="1"/>
  <line x1="416" y1="110" x2="416" y2="146" stroke="#dc2626" stroke-width="2.4" marker-end="url(#bd14-load)"/>
  <text x="424" y="132" fill="#dc2626" font-weight="600" font-size="12">P</text>
  <text x="340" y="206" text-anchor="middle" fill="#64748b" font-size="11">grid lines stay vertical, the block skews</text>
  <text x="20" y="230" fill="#334155" font-size="12">&delta;<tspan baseline-shift="sub" font-size="9">shear</tspan>/&delta;<tspan baseline-shift="sub" font-size="9">bend</tspan> = 3EI/(kGAL&sup2;), which for a solid rectangle is (E/4kG)(h/L)&sup2;.</text>
  <text x="20" y="246" fill="#64748b" font-size="12">Negligible when L/h &gt; 10; worth several percent when L/h is about 3.</text>
</svg>`;

// q22, the deflected shape with the max-deflection and max-slope points marked.
const figCurve = `<svg viewBox="0 0 460 232" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bd15-udl" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto"><path d="M0,0L7,3.5L0,7z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="18" text-anchor="middle" font-weight="600" fill="#334155">Deflection and slope do not peak in the same place</text>
  <line x1="70" y1="38" x2="390" y2="38" stroke="#dc2626" stroke-width="1.6"/>
  <line x1="70" y1="40" x2="70" y2="56" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd15-udl)"/>
  <line x1="110" y1="40" x2="110" y2="56" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd15-udl)"/>
  <line x1="150" y1="40" x2="150" y2="56" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd15-udl)"/>
  <line x1="190" y1="40" x2="190" y2="56" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd15-udl)"/>
  <line x1="230" y1="40" x2="230" y2="56" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd15-udl)"/>
  <line x1="270" y1="40" x2="270" y2="56" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd15-udl)"/>
  <line x1="310" y1="40" x2="310" y2="56" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd15-udl)"/>
  <line x1="350" y1="40" x2="350" y2="56" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd15-udl)"/>
  <line x1="390" y1="40" x2="390" y2="56" stroke="#dc2626" stroke-width="1.3" marker-end="url(#bd15-udl)"/>
  <text x="398" y="42" fill="#dc2626" font-weight="600" font-size="12">w</text>
  <rect x="70" y="60" width="320" height="8" fill="#dbeafe" stroke="#334155" stroke-width="1.3"/>
  <line x1="70" y1="64" x2="390" y2="64" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <polyline points="70,64.0 86,74.8 102,85.3 118,95.3 134,104.4 150,112.5 166,119.3 182,124.8 198,128.8 214,131.2 230,132.0 246,131.2 262,128.8 278,124.8 294,119.3 310,112.5 326,104.4 342,95.3 358,85.3 374,74.8 390,64.0" fill="none" stroke="#1d4ed8" stroke-width="2.6"/>
  <polygon points="70,68 58,88 82,88" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="70" cy="68" r="2.6" fill="#334155"/>
  <line x1="52" y1="88" x2="88" y2="88" stroke="#334155" stroke-width="1.4"/>
  <line x1="56" y1="96" x2="64" y2="88" stroke="#64748b" stroke-width="1"/>
  <line x1="70" y1="96" x2="78" y2="88" stroke="#64748b" stroke-width="1"/>
  <polygon points="390,68 378,86 402,86" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="383" cy="91" r="3.6" fill="none" stroke="#334155" stroke-width="1.3"/>
  <circle cx="397" cy="91" r="3.6" fill="none" stroke="#334155" stroke-width="1.3"/>
  <line x1="372" y1="97" x2="408" y2="97" stroke="#334155" stroke-width="1.4"/>
  <line x1="196" y1="132" x2="264" y2="132" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="6 4"/>
  <circle cx="230" cy="132" r="4.5" fill="#dc2626"/>
  <line x1="70" y1="64" x2="170" y2="140" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="6 4"/>
  <circle cx="70" cy="64" r="4.5" fill="#dc2626"/>
  <text x="20" y="158" fill="#334155" font-size="12">At midspan the tangent is flat: v&prime; = 0, and &delta; is largest there.</text>
  <text x="20" y="178" fill="#334155" font-size="12">At the supports &delta; = 0, but the tangent is steepest: &theta; = wL&sup3;/24EI.</text>
  <text x="20" y="204" fill="#64748b" font-size="12">Slope is the derivative of deflection, so the two maxima are a quarter</text>
  <text x="20" y="222" fill="#64748b" font-size="12">wave apart. Bearings, gears and optics usually care about the slope.</text>
</svg>`;

const content: TopicContent = {
  lesson: {
    title: "Beam Deflection & Stiffness",
    intro: `<p>Beam stress asks "will it yield?" Beam deflection asks "will it move too much?" Many real designs are stiffness-limited long before they are strength-limited: optical mounts, robot arms, shelves, shafts, brackets, machine frames, and anything with alignment requirements. Interviewers love deflection because it tests whether you understand boundary conditions, EI, and scaling.</p>
<figure class="fig">${figShapes}<figcaption>Learn these four cold. Same load and span, different supports: a cantilever is much more flexible than a simply supported beam.</figcaption></figure>`,
    sections: [
      {
        heading: "Moment-curvature is the source",
        html: `<p>For an Euler-Bernoulli beam in the linear elastic range, curvature is proportional to bending moment:</p>
<p class="eq">EI v''(x) = M(x)</p>
<p><strong>E</strong> is Young's modulus, <strong>I</strong> is the second moment of area about the bending axis, <strong>v(x)</strong> is transverse deflection, and <strong>M(x)</strong> is internal bending moment. The product <strong>EI</strong> is flexural rigidity; if either material stiffness or geometric stiffness is small, deflection grows.</p>
<p>Integrating once gives slope, integrating twice gives deflection. The constants come from boundary conditions: a fixed end has zero slope and zero deflection; a pin or roller has zero deflection but can rotate; a free end has no reaction unless a load is applied there.</p>
<div class="callout">A formula table is useful, but a strong interview answer can explain where the formula comes from: FBD &rarr; moment diagram &rarr; integrate M/EI &rarr; apply boundary conditions.</div>`,
      },
      {
        heading: "The big levers: load, length, modulus, and I",
        html: `<p>Every one of the four standard cases has the same shape: a load times a length cubed or fourth power, divided by EI. That means span dominates. Doubling a cantilever span under an end load multiplies deflection by 8; doubling a simply supported UDL span multiplies it by 16.</p>
<p>The reflex worth carrying into an interview is that <strong>deflection scales as L&sup3; or L&#8308; while bending stress only scales as L</strong>. A cantilever with twice the arm sees twice the root stress but eight times the tip motion. That single asymmetry explains why long slender parts pass their stress check and still fail the product.</p>
<p>Geometry is the next lever. For a rectangle I = bh&sup3;/12, so doubling <em>depth</em> cuts deflection by eight while doubling <em>width</em> only halves it. Depth is worth three times as much per unit of added material, which is why ribs, I-sections, box sections and tubes exist.</p>
<figure class="fig">${figScaling}<figcaption>Length is the fastest way to lose stiffness; depth is the fastest geometric way to regain it.</figcaption></figure>`,
      },
      {
        heading: "Boundary conditions are not cosmetic",
        html: `<p>Support conditions determine both the moment diagram and the integration constants. A fixed end blocks rotation, so it is far stiffer than a pin. A cantilever end-load deflection is PL<sup>3</sup>/3EI, while a simply supported center-load deflection is PL<sup>3</sup>/48EI. Same P, L, E, and I; sixteen times different. Under a uniform load, fixed-fixed is exactly <strong>five times</strong> stiffer than simply supported: wL<sup>4</sup>/384EI against 5wL<sup>4</sup>/384EI.</p>
<p>Those boundary conditions are displacement and rotation constraints, not labels. A fixed end imposes v = 0 and slope v' = 0. A pin or roller imposes v = 0 but allows rotation. A free end can translate and rotate unless loads or moments are applied there.</p>
<p>Real fixtures are rarely perfectly fixed. A bolted flange rotates: the plate bends, the bolts stretch, the contact faces bed in, and the structure behind the joint gives. That puts real hardware <em>between</em> the fixed-fixed and pinned answers, and a factor of five is a big band to land somewhere in. If deflection is critical, either measure the joint rotation or bound the answer with both idealisations and design for the soft end.</p>
<p>Add one more support and the beam becomes statically indeterminate: a propped cantilever has four reaction components but only three equilibrium equations. The missing equation is a compatibility statement, the deflection at the prop is zero, and it is what lets you solve for the redundant reaction. Release the prop, compute the free sag wL<sup>4</sup>/8EI, then find the force R that pushes the tip back up by RL<sup>3</sup>/3EI. Setting them equal gives R = 3wL/8 immediately.</p>
<figure class="fig">${figPropped}<figcaption>A prop at the free end changes the reactions, moves the peak moment to the wall, and cuts maximum deflection by more than twenty times.</figcaption></figure>`,
      },
      {
        heading: "Superposition works in the linear range",
        html: `<p>If the beam is linear elastic and deflections are small, you can add deflections from separate load cases. This is how engineers handle several point loads, a point load plus self-weight, or thermal bow plus mechanical load. It is also how the indeterminate cases get solved: release a redundant, superpose, then enforce the displacement the real support imposes.</p>
<p>Superposition needs <em>linearity</em>, and that is three separate assumptions: the material obeys Hooke's law, the geometry does not change enough to alter the load path, and the supports and contacts stay the same throughout the loading. Break any one and the sum is wrong. A gap that closes, a face that lifts off, a bolt that slips, a beam that yields at one fibre. Each of those makes the structure a different structure at different load levels.</p>
<figure class="fig">${figSuper}<figcaption>Superposition is valid when material and geometry remain linear; it fails after yielding, contact changes, or large deflection.</figcaption></figure>`,
      },
      {
        heading: "Designing for stiffness, not strength",
        html: `<p>The classic complaint is "it doesn't break, but it feels flimsy." That is a stiffness requirement failing while the stress check passes with room to spare. Stiffness is set by <strong>E and geometry</strong>, and only those.</p>
<p>This is why the most common wrong answer in a design review is "let's use a stronger material." Heat-treating a steel bracket from annealed to quenched-and-tempered can triple its yield strength and change its deflection by nothing measurable, because E for steel stays near 200&ndash;210 GPa across every heat treatment. The same story runs through aluminium: 7075-T6 is roughly twice as strong as 6061-T6, and both sit near 70 GPa. Changing <em>alloy</em> within a metal family is a strength move; changing <em>material class</em> (aluminium &rarr; steel &rarr; carbon composite) is a stiffness move.</p>
<p>The ordered list of real fixes: shorten the span or move the load inboard; add a support and make the beam indeterminate; increase depth (I &prop; bh&sup3;); use a closed or ribbed section; stiffen the joints; and only then change material class. Check the load path end to end, a stiff beam on a soft bolted foot moves like a soft beam.</p>
<div class="callout"><strong>Senior-engineer follow-up:</strong> ask what deflection actually breaks: alignment, clearance, optical pointing, seal compression, human feel, fatigue, or control bandwidth. The allowable deflection is a requirement, not a universal number.</div>`,
      },
      {
        heading: "Deflection limits, and where the motion really comes from",
        html: `<p>Industry writes stiffness requirements as a fraction of span: L/180 for rough framing, L/240 for general floors and shelving, L/360 where a brittle finish will crack or a door will bind, and much tighter ratios (or an absolute micron figure) for machine tools and optics. Sizing to a deflection limit runs the formula backwards: pick the allowable &delta;, solve for the required I, then solve for a real section, and be ready for the answer to be a much deeper beam than the stress check would have asked for.</p>
<p>Two effects routinely dominate the number you measure and are missing from the textbook formula:</p>
<ul>
<li><strong>Shear deflection.</strong> Euler-Bernoulli assumes plane sections stay plane and ignores transverse shear. For a solid rectangle the shear share is roughly (E/4kG)(h/L)<sup>2</sup> of the bending term: negligible at L/h &gt; 10, several percent at L/h &asymp; 3, and dominant in sandwich panels with a soft core.</li>
<li><strong>Joint compliance.</strong> Beam bending and joint rotation are springs in series, so 1/k<sub>total</sub> = 1/k<sub>beam</sub> + 1/k<sub>joint</sub>. On short stiff brackets the joint is usually the soft one, and stiffening only the beam changes nothing you can measure.</li>
</ul>
<div class="callout warn">If a test reads two to four times the hand calculation on a bolted part, suspect the joint before you suspect the beam. Sign errors and mesh density do not produce a clean factor of three; a rotating end plate does.</div>`,
      },
    ],
    equations: [
      { name: "Moment-curvature", formula: "<p>EI v''(x) = M(x)</p>", note: "E is modulus, I is area moment, v is deflection, and M(x) is bending moment for small-slope Euler-Bernoulli beams." },
      { name: "Cantilever end load", formula: "<p>&delta;<sub>max</sub> = PL&sup3;/3EI, &nbsp; &theta;<sub>tip</sub> = PL&sup2;/2EI</p>", note: "P is end load and L is cantilever length. Maximum deflection and slope both occur at the free end." },
      { name: "Cantilever uniform load", formula: "<p>&delta;<sub>max</sub> = wL&#8308;/8EI</p>", note: "w is load per unit length over the full cantilever. Compare with the tip-load case: the same total load spread out gives 3/8 of the tip deflection." },
      { name: "Simply supported center load", formula: "<p>&delta;<sub>max</sub> = PL&sup3;/48EI</p>", note: "P is the midspan point load and L is span. Maximum deflection occurs at midspan; 16 times stiffer than the cantilever." },
      { name: "Simply supported UDL", formula: "<p>&delta;<sub>max</sub> = 5wL&#8308;/384EI, &nbsp; &theta;<sub>end</sub> = wL&sup3;/24EI</p>", note: "w is uniform load per length over full span L; deflection scales with L<sup>4</sup> for fixed w." },
      { name: "Fixed-fixed UDL", formula: "<p>&delta;<sub>max</sub> = wL&#8308;/384EI</p>", note: "Exactly one fifth of the simply supported value. The peak moment moves to the ends and becomes wL<sup>2</sup>/12." },
      { name: "Propped cantilever UDL", formula: "<p>R<sub>prop</sub> = 3wL/8, &nbsp; &delta;<sub>max</sub> = wL&#8308;/185EI</p>", note: "Solved by releasing the prop and enforcing zero deflection there: wL&#8308;/8EI = RL&sup3;/3EI." },
      { name: "Cantilever stiffness", formula: "<p>k = P/&delta; = 3EI/L&sup3;</p>", note: "Equivalent tip stiffness for an end-loaded cantilever; k rises with EI and falls with L<sup>3</sup>." },
      { name: "Rectangle inertia", formula: "<p>I = bh&sup3;/12</p>", note: "b is width and h is depth in the bending direction. Doubling h gives 8x the I; doubling b gives 2x." },
      { name: "Shear deflection share", formula: "<p>&delta;<sub>s</sub>/&delta;<sub>b</sub> = 3EI/(kGAL&sup2;)</p>", note: "k is the shear correction factor (5/6 for a rectangle). Only matters for stubby beams and soft-core sandwiches." },
    ],
    interviewTips: [
      "Know the four standard cases cold, and say the boundary conditions out loud before you use one.",
      "Deflection goes as L cubed or L to the fourth; bending stress only goes as L. That asymmetry is the whole topic.",
      "Depth beats width: I goes as bh cubed, so 2x depth is 8x the I but 2x width is only 2x.",
      "A stronger alloy or a harder heat treatment does nothing for deflection; E is what matters and it barely moves.",
      "Use superposition only while the beam is linear elastic and support and contact conditions do not change.",
      "If a test is 2-4x softer than the hand calculation on a bolted part, suspect the joint, not the beam.",
    ],
  },
  questions: [
    {
      id: "beam-deflection-q01",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A camera boom is a cantilever with the camera hung on the free end. You are asked to make the boom twice as long, keeping the same camera, the same tube, and the same material. What happens to the tip deflection?</p>`,
      figure: figScaling,
      choices: [
        "2&times;. Length acts as a simple lever arm",
        "4&times;. Deflection follows the square of length",
        "8&times;. Deflection follows the cube of length",
        "16&times;. Deflection follows the fourth power",
      ],
      answer: 2,
      explanation: `<p class="eq">&delta;<sub>new</sub>/&delta;<sub>old</sub> = (2L)<sup>3</sup>/L<sup>3</sup> = <strong>8</strong></p>
<p>Hold P, E and I fixed and only the length factor in &delta; = PL<sup>3</sup>/3EI moves. The 2&times; answer treats length as a lever arm, which is how <em>moment</em> behaves. The 16&times; answer is the fourth-power law, which belongs to a distributed load over the span.</p>
<p>Root stress only doubles, since &sigma; = PLc/I is linear in L. The boom passes its strength check and the picture still shakes. That gap between L and L<sup>3</sup> is the whole reason this topic exists.</p>`,
    },
    {
      id: "beam-deflection-q02",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A steel cantilever arm carries a 100 N load at its free end. L = 1.0 m, E = 200 GPa, I = 1.0&times;10<sup>&minus;6</sup> m<sup>4</sup>. What is the free-end deflection in mm?</p>`,
      figure: figCantQ,
      answer: 0.167,
      unit: "mm",
      explanation: `<p class="eq">&delta; = PL&sup3;/3EI = 100(1.0)&sup3;/[3(200&times;10<sup>9</sup>)(1.0&times;10<sup>&minus;6</sup>)] = <strong>0.167 mm</strong></p>
<p>Free end with no support there, so this is the tip-load cantilever case. EI = 200 kN&middot;m<sup>2</sup> is a stiff arm and 100 N is a light load, so a fraction of a millimetre is right. The number that should worry you is what happens at 2 m, where the same load gives 1.33 mm.</p>`,
    },
    {
      id: "beam-deflection-q03",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A cantilevered sensor mount is being lengthened from 150 mm to 300 mm. The load at the tip and the extruded section are unchanged. By what factors do the <em>root bending stress</em> and the <em>tip deflection</em> change?</p>`,
      choices: [
        "Stress 2&times;, deflection 2&times;",
        "Stress 8&times;, deflection 8&times;",
        "Stress 4&times;, deflection 16&times;",
        "Stress 2&times;, deflection 8&times;",
      ],
      answer: 3,
      explanation: `<p class="eq">&sigma;<sub>root</sub> = PLc/I &prop; L &rarr; <strong>2&times;</strong>&nbsp;&nbsp;&nbsp;&delta;<sub>tip</sub> = PL&sup3;/3EI &prop; L&sup3; &rarr; <strong>8&times;</strong></p>
<p>Two different powers of L. Choosing 2&times; and 2&times; treats deflection as a moment problem; choosing 8&times; and 8&times; applies the deflection exponent to the stress.</p>
<p>This asymmetry is the most useful reflex in the topic. A part with 3&times; margin on stress still has 1.5&times; after doubling the arm, but a mount that was just inside its 0.05 mm pointing budget is now four times outside it.</p>`,
    },
    {
      id: "beam-deflection-q04",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A 2.0 m aluminium extrusion spans two mounts and carries a 1.0 kN motor at midspan. E = 70 GPa and I = 4.0&times;10<sup>&minus;6</sup> m<sup>4</sup>. What is the maximum deflection in mm?</p>`,
      figure: figSSQ,
      answer: 0.595,
      unit: "mm",
      explanation: `<p class="eq">&delta;<sub>max</sub> = PL&sup3;/48EI = 1000(2.0)&sup3;/[48(70&times;10<sup>9</sup>)(4.0&times;10<sup>&minus;6</sup>)] = <strong>0.595 mm</strong></p>
<p>Both ends sit on mounts that can rotate, so this is the simply supported centre-load case. The classic wrong answer is 9.52 mm, exactly 16 times larger, from reaching for PL<sup>3</sup>/3EI out of habit. Say which end conditions you are assuming before you plug in.</p>`,
    },
    {
      id: "beam-deflection-q05",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A rectangular bar is re-rolled so its depth in the bending direction doubles while the width halves, keeping the cross-sectional area (and therefore the mass per metre) exactly the same. What happens to I and to the deflection?</p>`,
      figure: figSectionDepth,
      choices: [
        "I &times;2 and deflection halved, since depth enters I once",
        "I &times;4 and deflection about one quarter of before",
        "I is unchanged, because the section area is unchanged",
        "I &times;8 and deflection about one eighth of before",
      ],
      answer: 1,
      explanation: `<p>Area alone tells you nothing about bending stiffness. What matters is where that area sits relative to the neutral axis.</p><p class="eq">I = bh&sup3;/12, &nbsp; and at constant area A = bh so b = A/h</p><p class="eq">I = (A/h)h&sup3;/12 = Ah&sup2;/12 &nbsp;&rarr;&nbsp; I &prop; h&sup2; at constant area</p><p>Doubling h therefore gives <strong>4&times;</strong> the I, and since &delta; &prop; 1/EI, deflection drops to about one quarter. The 8&times; answer is the constant-<em>width</em> result (I &prop; h&sup3;), which needs extra material; here you got a factor of four for free.</p><p>That free factor of four is the whole argument for I-beams, channels, deep ribs and box sections. The limit is that a tall thin web will eventually buckle locally or the beam will trip laterally, so depth is not free forever.</p>`,
    },
    {
      id: "beam-deflection-q06",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A steel shelf spans 1.5 m between two brackets and carries 900 N of books spread evenly along its length. E = 200 GPa and I = 3.0&times;10<sup>&minus;7</sup> m<sup>4</sup>. What is the mid-span sag in mm?</p>`,
      answer: 0.659,
      unit: "mm",
      explanation: `<p class="eq">w = 900 N / 1.5 m = 600 N/m</p>
<p class="eq">&delta;<sub>max</sub> = 5wL&#8308;/384EI = 5(600)(1.5&#8308;)/[384(200&times;10<sup>9</sup>)(3.0&times;10<sup>&minus;7</sup>)] = <strong>0.659 mm</strong></p>
<p>Convert the total load into a line load first; the brackets let the ends rotate, so the simply supported uniform case applies. Forgetting the 5/384 and reaching for 1/384 or 1/8 is the usual slip. L/360 for this span is 4.2 mm, so 0.66 mm is comfortably inside a criterion that makes sag invisible.</p>`,
    },
    {
      id: "beam-deflection-q07",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A 1.2 m aluminium LED light bar cantilevers off a wall bracket. Its weight and fittings work out to 30 N/m spread along it. E = 69 GPa and I = 1.5&times;10<sup>&minus;8</sup> m<sup>4</sup>. How far does the free end droop, in mm?</p>`,
      answer: 7.51,
      unit: "mm",
      explanation: `<p>Fixed at one end, free at the other, load spread along the whole length:</p><p class="eq">&delta;<sub>tip</sub> = wL&#8308;/8EI</p><p class="eq">&delta; = 30(1.2)&#8308;/[8(69&times;10<sup>9</sup>)(1.5&times;10<sup>&minus;8</sup>)] = 62.2/8280</p><p class="eq">&delta; = 7.51&times;10<sup>&minus;3</sup> m = <strong>7.51 mm</strong></p><p>That is visible droop on a 1.2 m bar, and it comes entirely from self-weight, there is no payload at all. Two ways to slip: using L<sup>3</sup> instead of L<sup>4</sup> (gives 6.26 mm, close enough to look plausible), and using the tip-load coefficient 1/3 instead of 1/8.</p><p>Useful cross-check: the same total load (36 N) placed at the tip would give PL<sup>3</sup>/3EI = 20.0 mm, so spreading it out gives exactly 3/8 of that. Remember the 3/8 ratio; it comes up whenever someone lumps a distributed load at the tip to be "conservative."</p>`,
    },
    {
      id: "beam-deflection-q08",
      type: "mc",
      difficulty: 1,
      prompt: `<p>You need to model a cantilever bracket as a single spring in a vibration model. The bracket has E = 200 GPa, I = 2.0&times;10<sup>&minus;6</sup> m<sup>4</sup> and L = 1.0 m, and the mass hangs on its tip. What tip stiffness do you enter?</p>`,
      choices: ["400 kN/m", "2400 kN/m", "1200 kN/m", "19200 kN/m"],
      answer: 2,
      explanation: `<p class="eq">k = P/&delta; = 3EI/L&sup3; = 3(200&times;10<sup>9</sup>)(2.0&times;10<sup>&minus;6</sup>)/(1.0)&sup3; = <strong>1200 kN/m</strong></p>
<p>400 kN/m drops the factor of 3. 2400 kN/m uses 6EI/L<sup>3</sup>, the guided-end coefficient. 19200 kN/m uses 48EI/L<sup>3</sup>, which is the simply supported centre-load stiffness and belongs to a different structure entirely.</p>
<p>Stiffness form is usually more useful than deflection form once the beam has to talk to a spring, a mount, a control loop or a modal model.</p>`,
    },
    {
      id: "beam-deflection-q09",
      type: "mc",
      difficulty: 2,
      prompt: `<p>You have added the deflections from two separate load cases on the same beam using table formulas. Which of the following, if true, makes that sum wrong?</p>`,
      figure: figSuper,
      choices: [
        "The two loads are applied at different points along the same span",
        "One load closes a 0.2 mm clearance and brings a stop into contact",
        "The beam has the same EI from one end of the span to the other",
        "Both loads act downward and stay well inside the elastic range",
      ],
      answer: 1,
      explanation: `<p>Superposition needs the structure to be the <em>same structure</em> at every load level. Once the gap closes, a new reaction appears: the beam that responds to load B is not the beam that responded to load A, so the individual table results no longer add.</p><p>The other three options are all conditions that <em>support</em> superposition. Loads at different points is exactly what superposition is for. Uniform EI and small elastic downward loads are precisely the linearity assumptions the method requires.</p><p>The same failure appears with any of: yielding at one fibre, a preloaded face lifting off, a bolt slipping, buckling, or deflection large enough to change the load direction. Say the assumption out loud before you add two rows of a formula table. That sentence is what gets listened for.</p>`,
    },
    {
      id: "beam-deflection-q10",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A bracket machined from 6061-T6 deflects too much in test. A colleague proposes re-machining it from 7075-T6, which has roughly twice the yield strength, with the drawing otherwise unchanged. What will the test show?</p>`,
      choices: [
        "Deflection roughly halves, tracking the yield-strength ratio",
        "Deflection barely moves; both alloys sit near E = 70 GPa",
        "Deflection halves only if the section is also made deeper",
        "Deflection rises, because harder alloys carry less bending",
      ],
      answer: 1,
      explanation: `<p>Elastic deflection is set by E and geometry. Yield strength does not appear anywhere in PL<sup>3</sup>/3EI. 6061-T6 and 7075-T6 both have Young's modulus near 69&ndash;72 GPa, so with identical geometry EI is unchanged and the measured deflection moves by a couple of percent at most, inside test scatter.</p><p>7075 buys yield margin, bearing strength and sometimes fatigue life. It does not buy stiffness, and it costs machinability, corrosion resistance and weldability.</p><p>The genuine fixes, in order of effect: shorten the arm, move the load inboard, deepen the section, close the section, stiffen the joint, or move up a material <em>class</em> (aluminium 70 GPa &rarr; steel 200 GPa &rarr; CFRP or ceramic). Note that steel at 200 GPa is 2.9&times; stiffer but 2.9&times; denser, so at equal mass the aluminium section can be made deeper and often wins.</p>`,
    },
    {
      id: "beam-deflection-q11",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A cross-member under a uniform load is currently pinned at both ends and deflects 6.0 mm at midspan. The design is changed so both ends are welded into heavy end plates that genuinely block rotation. What is the new midspan deflection?</p>`,
      figure: figFixedVsSS,
      choices: [
        "3.0 mm, since fixing both ends halves the peak bending moment",
        "1.2 mm, one fifth: 5wL&#8308;/384EI becomes wL&#8308;/384EI",
        "0.375 mm, one sixteenth, the cantilever-to-pinned ratio",
        "1.5 mm, one quarter, taken from the moment ratio squared",
      ],
      answer: 1,
      explanation: `<p>Compare the two standard uniform-load coefficients directly:</p><p class="eq">pinned: &delta; = 5wL&#8308;/384EI &nbsp;&nbsp; fixed: &delta; = wL&#8308;/384EI</p><p class="eq">ratio = 1/5 &nbsp;&rarr;&nbsp; &delta; = 6.0/5 = <strong>1.2 mm</strong></p><p>The factor of 16 in option three is the cantilever-versus-pinned ratio for a <em>point</em> load and does not apply here. The moment ratio (wL<sup>2</sup>/8 at midspan pinned against wL<sup>2</sup>/12 at the ends fixed) is 2/3, not 1/2 or 1/4, and in any case moments do not map onto deflections by a simple power.</p><p>Is your joint really fixed? A bolted flange rotates, so real hardware lands somewhere between 1.2 mm and 6.0 mm. Designing to 1.2 mm and getting 3 mm is the most common way this calculation goes wrong in the field.</p>`,
    },
    {
      id: "beam-deflection-q12",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A 3.0 m walkway rail is welded to a column at one end and simply rests on a roller post at the other. It carries a uniform 4.0 kN/m. What vertical force does the roller post carry, in kN?</p>`,
      figure: figCompat,
      answer: 4.5,
      unit: "kN",
      explanation: `<p>Four reaction components (wall force, wall moment, wall horizontal, post force) against three equilibrium equations means one redundant. Release the post and use compatibility.</p><p>Step 1, with the post removed: the free cantilever tip sags under the uniform load.</p><p class="eq">&delta;<sub>1</sub> = wL&#8308;/8EI</p><p>Step 2, the post force R alone pushes that tip back up:</p><p class="eq">&delta;<sub>2</sub> = RL&sup3;/3EI</p><p>Step 3, the post holds the end at zero, so set them equal. EI cancels, which is why the answer does not depend on the section:</p><p class="eq">wL&#8308;/8 = RL&sup3;/3 &nbsp;&rarr;&nbsp; R = 3wL/8</p><p class="eq">R = 3(4000)(3.0)/8 = 4500 N = <strong>4.50 kN</strong></p><p>Checking it: the total load is wL = 12 kN, and the wall takes the other 5wL/8 = 7.5 kN. If you had treated this as simply supported you would have said 6.0 kN, a 33% under-prediction at the wall and a 25% over-prediction at the post, and you would have completely missed the wall moment wL<sup>2</sup>/8 = 4.5 kN&middot;m that actually sizes the weld.</p>`,
    },
    {
      id: "beam-deflection-q13",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A 4140 steel lever bends further than the spec allows in a rig test. A colleague proposes quenching and tempering it to a much higher hardness, arguing that a harder part is a stiffer part. What will the rig read afterwards?</p>`,
      choices: [
        "It drops in proportion to the increase in tensile strength",
        "It drops by roughly the square root of the hardness ratio",
        "It is essentially unchanged; E of steel stays near 205 GPa",
        "It rises, since tempering leaves the lattice more compliant",
      ],
      answer: 2,
      explanation: `<p>Young's modulus is a measure of interatomic bond stiffness. Heat treatment rearranges microstructure. Carbide size, dislocation density, grain structure, which controls yield strength, hardness and toughness, but leaves bond stiffness essentially alone. Every steel from mild annealed to fully hardened tool steel sits within a few percent of 200&ndash;210 GPa.</p><p>So the lever will bend by the same amount, and now it is also more brittle and more expensive. The one thing heat treatment does buy is that the lever can now be loaded further before it takes a permanent set. Useful if the complaint were yielding, useless if the complaint is deflection.</p><p>This is the most common material mistake in the topic, and it is the same one as the 6061-to-7075 swap: strength moves a lot, E does not. Fix stiffness with geometry, span, supports or a different material class.</p>`,
    },
    {
      id: "beam-deflection-q14",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A 3.0 m pine shelf 250 mm wide must meet an L/360 sag limit under a uniform 250 N/m of stored load. Pine has E = 10 GPa and the shelf sits on simple supports at each end. What minimum board thickness is required, in mm?</p>`,
      figure: figLimit,
      answer: 53.4,
      unit: "mm",
      explanation: `<p>Work the formula backwards from the requirement, not from a stress allowable.</p><p>Step 1, turn the criterion into a number:</p><p class="eq">&delta;<sub>allow</sub> = L/360 = 3.0/360 = 8.33 mm</p><p>Step 2, required I from the simply supported uniform-load case:</p><p class="eq">I = 5wL&#8308;/(384E&delta;) = 5(250)(3.0&#8308;)/[384(10&times;10<sup>9</sup>)(0.008333)]</p><p class="eq">I = 101250/(3.20&times;10<sup>10</sup>) = 3.16&times;10<sup>&minus;6</sup> m&#8308;</p><p>Step 3, solve I = bh<sup>3</sup>/12 for h with b = 0.250 m:</p><p class="eq">h = (12I/b)<sup>1/3</sup> = [12(3.16&times;10<sup>&minus;6</sup>)/0.250]<sup>1/3</sup> = 0.0534 m = <strong>53.4 mm</strong></p><p>That is the real lesson: a 3 m shelf at L/360 needs a board over 50 mm thick, not the 18 mm plank anyone would reach for. The practical answers are to add a mid-span bracket (span drops to 1.5 m and the L<sup>4</sup> term drops the requirement by 16), to add a stiffening lip on the front edge, or to relax the criterion to L/240 if nothing brittle is attached.</p>`,
    },
    {
      id: "beam-deflection-q15",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A moulded ABS laptop stand is stressed to 18% of yield and passes every strength check, but reviewers call it flimsy because it visibly flexes when they type on it. Which requirement is actually being violated?</p>`,
      choices: [
        "Ultimate strength, since visible flex means fracture is close",
        "Hardness, because the flexing is really surface indentation",
        "Stiffness: it meets the stress limit but not a motion limit",
        "Fatigue strength, because typing is a cyclic load case",
      ],
      answer: 2,
      explanation: `<p>Strength and stiffness are independent requirements. At 18% of yield the part will never break, and it still fails the product, because the thing customers are judging is displacement per unit hand force, a stiffness number.</p><p>The correct specification is a deflection or rotation limit tied to the actual function: a millimetre value, an L/240-style ratio, a clearance, a pointing angle, or in this case a "feel" target measured as mm per newton at the keyboard deck.</p><p>Fixing it means raising EI or shortening the span: deepen the ribs (I &prop; bh<sup>3</sup>), add a diagonal or a closed box section, move the support feet inboard so the unsupported overhang shrinks, or move from ABS at about 2.3 GPa to a glass-filled grade at 6&ndash;9 GPa. Going to a stronger unfilled polymer would change nothing, for the same reason a harder steel changes nothing.</p>`,
    },
    {
      id: "beam-deflection-q16",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A cross-member is bolted at both ends through flanged end plates and was analysed as fixed-fixed. The model predicted 0.9 mm under a uniform load; the rig measures 2.6 mm. What is the most likely explanation?</p>`,
      choices: [
        "The bolts yielded in tension and the beam has taken a set",
        "The end plates rotate: real fixity lies between the two ideals",
        "The mesh was too coarse, and coarse meshes soften a beam",
        "The delivered steel had a lower modulus than the data sheet",
      ],
      answer: 1,
      explanation: `<p>Put a band around the answer before you go hunting. Fixed-fixed gives wL<sup>4</sup>/384EI and pinned gives 5wL<sup>4</sup>/384EI, so the pinned answer is 5(0.9) = 4.5 mm. The measurement of 2.6 mm lands neatly between the two idealisations, which is exactly the signature of a partially fixed end: the flange plates bend, the bolts stretch, and the contact faces bed in, so the ends rotate a fraction of what a pin would allow.</p><p>The alternatives do not fit the evidence. Yielded bolts would show hysteresis and a permanent set on unloading, not a repeatable linear 2.6 mm. Coarse meshes make FEA models artificially <em>stiff</em>, not soft. And modulus scatter in steel is a couple of percent, nowhere near a factor of three.</p><p>What to do: measure the end-plate rotation directly with a dial indicator or a pair of proximity probes, convert it to a rotational spring, and put that spring in the model. Then either accept 2.6 mm, or fix the joint with more bolts on a wider pattern, a thicker flange, a gusset, or a welded connection.</p>`,
    },
    {
      id: "beam-deflection-q17",
      type: "mc",
      difficulty: 2,
      prompt: `<p>An optical bench mount passes its 0.10 mm vertical deflection budget, but the reflected spot still walks off the detector when the load is applied. What did the deflection budget leave out?</p>`,
      choices: [
        "Slope: an angular tilt at the optic steers the reflected ray",
        "Yield strength, which is what sets the elastic pointing error",
        "Density, since a heavier mount damps out pointing error",
        "Hardness of the mirror substrate underneath the clamp",
      ],
      answer: 0,
      explanation: `<p>Deflection v and slope v' are two separate outputs of the same beam solution, and they peak in different places. A mount can translate by very little and still rotate enough to ruin the alignment.</p><p>The optical amplification is brutal, and there is a factor of two most people forget: rotating a <em>mirror</em> by &theta; tilts the reflected <em>ray</em> by 2&theta;. So a 1 mrad tilt of the mirror steers the beam by 2 mrad, which walks the spot about 2 mm for every metre of optical path. On a 3 m folded path that is 6 mm of spot motion from a rotation you would never see by eye.</p><p>The fix is to specify both limits. Maximum displacement <em>and</em> maximum slope at the optic, and then attack rotation specifically: shorten the moment arm from the mount to the optic, widen the bolt pattern, use a closed section, or support the optic kinematically so that structural rotation does not couple into the mirror normal.</p>`,
    },
    {
      id: "beam-deflection-q18",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A short, stubby bolted cantilever bracket measures three times the tip deflection that PL<sup>3</sup>/3EI predicts. The load cell, dial indicator and dimensions have all been checked. What do you investigate first?</p>`,
      figure: figSeries,
      choices: [
        "The sign convention, which flips the deflection direction",
        "The density, which drives static deflection under load",
        "Fixture compliance: base plate, bolts and contact all rotate",
        "The yield strength, which appears in elastic deflection",
      ],
      answer: 2,
      explanation: `<p>A perfectly fixed end enforces v = 0 <em>and</em> v' = 0. A real bolted foot enforces neither exactly: the base plate bends, the bolts stretch, the contact faces bed in and micro-slip, and the structure behind the joint gives. Any rotation &theta; at the root adds &theta;L of tip motion on top of the beam's own bending, and on a <em>short</em> bracket the beam's own bending is small, so the joint dominates.</p><p>Think of it as springs in series: 1/k<sub>total</sub> = 1/k<sub>beam</sub> + 1/k<sub>joint</sub>. If the joint is half as stiff as the beam, the assembly is a third as stiff as the beam alone, which is exactly the factor of three observed.</p><p>The other options fail on inspection: a sign error changes direction, not magnitude; density does not appear in the deflection under an applied load; and yield strength does not appear in an elastic formula at all.</p><p>Diagnostics: put an indicator on the base plate itself and see how much of the tip motion is rigid-body rotation. If it is most of it, stiffening the beam is wasted effort. Add bolts, widen the pattern, thicken the flange, or add a gusset.</p>`,
    },
    {
      id: "beam-deflection-q19",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A rectangular aluminium rib 12 mm deep deflects 6.4 mm under its design load. The width and span cannot change. What depth, in mm, would bring the deflection down to 1.0 mm?</p>`,
      figure: figDepthCurve,
      answer: 22.3,
      unit: "mm",
      explanation: `<p>At fixed width, I = bh<sup>3</sup>/12 so I &prop; h<sup>3</sup>, and deflection goes as 1/I:</p><p class="eq">&delta; &prop; 1/h&sup3; &nbsp;&rarr;&nbsp; h<sub>new</sub> = h<sub>old</sub>(&delta;<sub>old</sub>/&delta;<sub>new</sub>)<sup>1/3</sup></p><p class="eq">h<sub>new</sub> = 12(6.4/1.0)<sup>1/3</sup> = 12(1.857) = <strong>22.3 mm</strong></p><p>Note how mild that is: a 6.4&times; reduction in deflection costs only 86% more depth, and only 86% more material. Scaling depth linearly and asking for 12(6.4) = 77 mm, or scaling by the square root and asking for 30 mm.</p><p>Compare the width route: to get the same 6.4&times; you would need 6.4 times the width, since I is only linear in b. Depth is worth three times as much per gram, which is the whole reason ribs are tall and thin rather than short and fat. Just watch that a tall thin rib does not become a local buckling problem.</p>`,
    },
    {
      id: "beam-deflection-q20",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A 1.5 m cantilever gantry arm has EI = 3.0&times;10<sup>4</sup> N&middot;m<sup>2</sup>. It carries a 200 N tool at the free end plus its own weight, which works out to 150 N/m along the arm. Estimate the total tip deflection in mm.</p>`,
      answer: 10.7,
      unit: "mm",
      explanation: `<p>Two standard cases, both linear elastic on the same unchanged structure, so superpose them.</p><p>Tip load:</p><p class="eq">&delta;<sub>P</sub> = PL&sup3;/3EI = 200(1.5)&sup3;/[3(3.0&times;10&#8308;)] = 675/90000 = 7.50 mm</p><p>Self-weight as a uniform load:</p><p class="eq">&delta;<sub>w</sub> = wL&#8308;/8EI = 150(1.5)&#8308;/[8(3.0&times;10&#8308;)] = 759.4/240000 = 3.16 mm</p><p class="eq">&delta;<sub>total</sub> = 7.50 + 3.16 = <strong>10.7 mm</strong></p><p>Self-weight is 30% of the answer here, and the usual mistake is to leave it out entirely because no arrow was drawn on the sketch. A quick check: the total self-weight is 225 N, more than the tool, yet it contributes less than half as much, because distributed load is worth only 3/8 of the same load at the tip.</p><p>If 10.7 mm is too much, the ranking is clear: shortening the arm to 1.2 m alone would take the tip-load term to 3.84 mm and the self-weight term to 1.30 mm, more than halving the total.</p>`,
    },
    {
      id: "beam-deflection-q21",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A stubby steel cantilever block is 300 mm long with a 40 mm wide by 100 mm deep rectangular section, loaded by 5 kN at the tip. E = 200 GPa, G = 77 GPa, and the shear correction factor for a rectangle is k = 5/6. What percentage of the total tip deflection comes from shear?</p>`,
      figure: figShear,
      answer: 7.97,
      unit: "%",
      explanation: `<p>Compute the two contributions separately.</p><p class="eq">I = bh&sup3;/12 = 0.040(0.100)&sup3;/12 = 3.33&times;10<sup>&minus;6</sup> m&#8308;, &nbsp; A = 0.0040 m&sup2;</p><p>Bending term:</p><p class="eq">&delta;<sub>b</sub> = PL&sup3;/3EI = 5000(0.30)&sup3;/[3(200&times;10<sup>9</sup>)(3.33&times;10<sup>&minus;6</sup>)] = 6.75&times;10<sup>&minus;5</sup> m</p><p>Shear term:</p><p class="eq">&delta;<sub>s</sub> = PL/(kGA) = 5000(0.30)/[(5/6)(77&times;10<sup>9</sup>)(0.0040)] = 5.84&times;10<sup>&minus;6</sup> m</p><p class="eq">share = 5.84/(67.5 + 5.84) = <strong>7.97%</strong></p><p>The shortcut worth remembering is that the ratio depends only on material and aspect ratio: &delta;<sub>s</sub>/&delta;<sub>b</sub> = 3EI/(kGAL<sup>2</sup>) = (E/4kG)(h/L)<sup>2</sup> = (200/257)(1/3)<sup>2</sup> = 0.087, giving the same 8% share.</p><p>So at L/h = 3 shear is worth about 8%; at L/h = 10 it falls to under 1% and you can forget it. The place it stops being a footnote is a sandwich panel, where G of a foam core can be three orders of magnitude below the face-sheet modulus and shear becomes most of the answer.</p>`,
    },
    {
      id: "beam-deflection-q22",
      type: "mc",
      difficulty: 1,
      prompt: `<p>The figure shows the deflected shape of a simply supported beam under a uniform load. Where do the maximum deflection and the maximum slope occur?</p>`,
      figure: figCurve,
      choices: [
        "Deflection max at midspan; slope max at the two supports",
        "Both at midspan, where the bending moment also peaks",
        "Both at the supports, where the shear force also peaks",
        "Deflection max at the supports; slope max at midspan",
      ],
      answer: 0,
      explanation: `<p>Slope is the derivative of deflection, so wherever deflection is at a maximum the slope must be zero, and vice versa. On this symmetric shape the tangent is flat at midspan (&delta;<sub>max</sub> = 5wL<sup>4</sup>/384EI) and steepest at the supports (&theta; = wL<sup>3</sup>/24EI), where the deflection itself is pinned to zero.</p><p>This is not a bookkeeping detail. Bearings, gear meshes, seals and optics are usually limited by <em>rotation</em>, and rotation is largest exactly where the displacement is smallest. A shaft that deflects 0.03 mm at the gear may still be rotating 0.6 mrad at its bearings, which is what the bearing catalogue cares about.</p><p>Swap the uniform load for a single point load at midspan and the locations are the same, but the coefficients change to PL<sup>3</sup>/48EI and PL<sup>2</sup>/16EI.</p>`,
    },
  ],
  qna: [
    {
      id: "beam-deflection-qa01",
      q: `<p>Walk me through estimating the deflection of a beam without a formula table in front of you.</p>`,
      a: `<p>I start from EIv'' = M(x) and rebuild the case I need. FBD, reactions, then M(x), then integrate twice and pin the constants with the boundary conditions: fixed end means v = 0 and v' = 0, pin or roller means v = 0 with slope free, free end means shear and moment are zero unless something is applied there.</p><p>In practice I carry four results in my head and derive anything else from them: cantilever tip load PL<sup>3</sup>/3EI, cantilever UDL wL<sup>4</sup>/8EI, simply supported centre load PL<sup>3</sup>/48EI, simply supported UDL 5wL<sup>4</sup>/384EI. If I ever blank on the 5/384 I sanity-check it against the point-load case: put the same total load W = wL at midspan and you get WL<sup>3</sup>/48EI, and spreading it out should be softer by a factor of about 1.6. 5/384 versus 8/384, so 0.625. That factor is the check I actually use.</p><p>Then I write the answer as a scaling law rather than a single number, because that is what the next question will be. If the tip deflection is 4 mm at 1 m, it is 32 mm at 2 m, and the root stress only doubled. That is usually more useful to the person asking than three significant figures.</p>`,
    },
    {
      id: "beam-deflection-qa02",
      q: `<p>A part passes every stress check but the customer says it feels flimsy. How do you attack that?</p>`,
      a: `<p>First I make the complaint measurable. "Flimsy" is a stiffness spec nobody wrote down, so I go and get a number: mm of motion per newton of hand load at the place the user touches, or a sag limit like L/240, or a clearance that must not close. Without that I have no way to know when I am done.</p><p>Then I measure where the compliance actually lives, because it is usually not where people assume. On the last bracket I did this on, the part was a 180 mm aluminium cantilever, and hand calculation said 0.4 mm at the design load. The rig read 1.3 mm. I put a second indicator on the base plate itself and found about 0.8 mm of that was rigid-body rotation of the bolted foot. Stiffening the beam would have bought me almost nothing.</p><p>The fix ranking I use is: shorten the span or move the load inboard, add a support, deepen the section, close the section, stiffen the joint, and only then change material class. Note what is not on that list, a stronger alloy or a harder heat treatment. Deflection is E and geometry, and E is essentially fixed once you have chosen aluminium or steel.</p>`,
    },
    {
      id: "beam-deflection-qa03",
      q: `<p>Someone proposes heat-treating a steel bracket to reduce its deflection. What do you say?</p>`,
      a: `<p>I say it will not work, and I say why in one sentence: E is a bond-stiffness property, and heat treatment rearranges microstructure, not bonds. Every steel from annealed mild to fully hardened tool steel sits within a few percent of 200 to 210 GPa. So a bracket that deflects 2 mm annealed will deflect 2 mm hardened, and now it is also more brittle and more expensive.</p><p>The same thing comes up with aluminium. 7075-T6 is roughly twice as strong as 6061-T6 and both are near 70 GPa, so swapping them for a stiffness problem does nothing. I have seen that change signed off in a design review twice.</p><p>Then I redirect the conversation, because usually the person raising it has a real problem. If the complaint is permanent set after an overload, heat treatment is exactly right, that is a yield problem. If the complaint is elastic movement, I go after geometry. Going from a 6 mm to a 9 mm wall on a rib is 3.4 times the I for 50% more material; going up a material class from aluminium to steel is 2.9 times the E but also 2.9 times the density, so at equal mass the aluminium can be made deeper and usually wins.</p>`,
    },
    {
      id: "beam-deflection-qa04",
      q: `<p>Your FEA says 0.02 mm and your hand calculation says 0.9 mm. Which do you believe?</p>`,
      a: `<p>Neither, until I have found the disagreement. A factor of 45 is not a modelling refinement, it is a mistake, and in my experience it is nearly always in the boundary conditions or the units.</p><p>My checklist, in the order I actually run it. Units first: I in mm<sup>4</sup> against E in GPa is the classic, and it lands you off by 10<sup>12</sup> or by a clean factor that looks almost plausible. Then constraints: a fixed face where the real part is bolted through two holes, or a face accidentally tied to ground, will stiffen a model enormously. Then load application: a load smeared over a whole face instead of a small pad, or applied to the wrong node set. Then material: did the model pick up steel when the part is glass-filled nylon? Then contacts: bonded contacts everywhere is the fastest way to make an assembly ten times too stiff.</p><p>Mesh density is last on my list, because refining a mesh makes a model <em>softer</em> and converges within a few percent. It will never explain a factor of 45. If FEA is far stiffer than PL<sup>3</sup>/3EI on a slender part, the model is over-constrained until proven otherwise, and I will not present the result until I can reproduce the hand number by simplifying the model back down to the textbook case.</p>`,
    },
    {
      id: "beam-deflection-qa05",
      q: `<p>How do you solve a propped cantilever, and why does it come up so often?</p>`,
      a: `<p>Release the redundant and enforce compatibility. For a propped cantilever with a uniform load, I remove the prop, compute the free tip sag wL<sup>4</sup>/8EI, then find the upward force R that pushes that tip back by RL<sup>3</sup>/3EI. The prop holds the end at zero, so set them equal: wL<sup>4</sup>/8 = RL<sup>3</sup>/3, which gives R = 3wL/8. EI cancels, which is the neat part, the load sharing does not depend on the section at all, as long as EI is uniform.</p><p>From there the wall takes 5wL/8, the wall moment is wL<sup>2</sup>/8, and the peak deflection drops from wL<sup>4</sup>/8EI to about wL<sup>4</sup>/185EI. That is a factor of 23 for the cost of one post.</p><p>It comes up constantly because it is what happens whenever someone adds a support to a floppy part. On a 3 m walkway rail at 4 kN/m, the post carries 4.5 kN, not the 6 kN a simply supported reading would give you, and the wall sees a 4.5 kN&middot;m moment that a simply supported model says is zero. Getting that wrong under-sizes the weld and over-sizes the post. The other thing I flag is that indeterminate structures are sensitive to support movement, a shim or a settled foundation now generates real reactions, which a determinate structure would just absorb.</p>`,
    },
    {
      id: "beam-deflection-qa06",
      q: `<p>How much does it matter whether a bolted end is modelled as fixed or pinned?</p>`,
      a: `<p>Under a uniform load it is a factor of five: wL<sup>4</sup>/384EI fixed-fixed against 5wL<sup>4</sup>/384EI pinned. That is an enormous band to be uncertain in, and a real bolted flange sits somewhere inside it, not at either end.</p><p>So I do not pick one, I bound it. I run both, and if the pinned answer still meets the requirement I stop worrying, the joint stiffness cannot hurt me. If only the fixed answer passes, I have to go and earn that fixity, and I treat it as a measurement task rather than an argument.</p><p>On a cross-member last year the model said 0.9 mm fixed-fixed and the rig read 2.6 mm. Pinned would have been 4.5 mm, so 2.6 mm was right in the band. Classic partial fixity. I put a dial indicator on the end plate and confirmed the rotation directly, converted it to a rotational spring, and put that in the model. The design fix was a thicker flange and a wider bolt pattern, not a bigger beam.</p><p>The general rule I carry: rotational fixity comes from the bolt pattern's ability to resist a couple, so what buys it is bolt spacing squared and flange thickness cubed, not bolt torque.</p>`,
    },
    {
      id: "beam-deflection-qa07",
      q: `<p>When is deflection not really coming from the beam?</p>`,
      a: `<p>Two situations, and both are common enough that I check for them by reflex.</p><p>The first is joint compliance. Beam bending and joint rotation are springs in series, so 1/k<sub>total</sub> = 1/k<sub>beam</sub> + 1/k<sub>joint</sub>. On a short stiff bracket the beam term is tiny and the joint dominates, which is why a stubby bracket can measure three times the hand calculation while a long slender one matches to within 10%. The same logic covers an adhesive bond line shearing, a bearing seating, or a soft base structure behind the fixture. Anything in the load path adds compliance.</p><p>The second is shear deflection. Euler-Bernoulli ignores transverse shear, and for a solid rectangle the shear share is roughly (E/4kG)(h/L)<sup>2</sup>. At L/h = 10 that is under 1%, at L/h = 3 it is about 8%, and in a sandwich panel with a foam core it can be most of the deflection because the core G might be 5 MPa against face sheets at 70 GPa. Once I see a soft core or an aspect ratio under about 5, I add the PL/kGA term.</p><p>The practical test that separates them: joint compliance usually shows up as hysteresis and a non-zero intercept in a load-deflection sweep, whereas shear deflection is perfectly linear and repeatable.</p>`,
    },
    {
      id: "beam-deflection-qa08",
      q: `<p>Where do L/360-type criteria come from, and how do you use one to size a beam?</p>`,
      a: `<p>They are serviceability limits, and each one traces back to something that visibly or functionally fails at that ratio. L/180 is rough framing where nothing brittle is attached. L/240 is general floors and shelving, roughly where sag stops looking flat to the eye. L/360 is what you use when a plaster ceiling will crack or a door will bind. Precision machinery ignores ratios entirely and writes an absolute number, because a 50 micron budget does not care how long the beam is.</p><p>To size to one, I run the formula backwards. On a 3 m pine shelf 250 mm wide at 250 N/m and L/360: the allowable is 3000/360 = 8.33 mm, then I = 5wL<sup>4</sup>/(384E&delta;) gives 3.16&times;10<sup>-6</sup> m<sup>4</sup>, and h = (12I/b)<sup>1/3</sup> comes out at 53 mm. Which tells me immediately that the answer is not a thicker board. Nobody makes a 53 mm shelf. The answer is a mid-span bracket, which cuts the span in half and drops the requirement by 16, or a stiffening lip on the front edge.</p><p>The reason I like doing it this way round is that it makes the tradeoff visible. Because the requirement scales as L<sup>4</sup>, arguing about span is always worth more than arguing about section, and getting the criterion relaxed from L/360 to L/240 only buys 1.5 times the I, about 15% more depth. Span is where the payoff is.</p>`,
    },
    {
      id: "beam-deflection-qa09",
      q: `<p>Tell me about a time deflection, not stress, drove a design.</p>`,
      a: `<p>An inspection camera boom, about 600 mm of 25 mm aluminium tube cantilevered off a bolted foot, with a 400 g camera on the end. The stress case was trivial. Single digit MPa, two orders of magnitude below yield. The failure was that the image was unusable because the boom rang for about two seconds every time the stage indexed.</p><p>The chain is short: static compliance and first mode are the same problem. k = 3EI/L<sup>3</sup> at the tip, then f &asymp; (1/2&pi;)&radic;(k/m). We measured about 0.9 mm of static sag under the camera weight, which put the first mode near 17 Hz, and the stage motion profile had content right there.</p><p>What we did not do was make the tube thicker. Doubling wall thickness on a thin tube is close to doubling I, so about 1.4 times the frequency, and it adds mass which pulls the other way. Instead we shortened the boom from 600 to 450 mm, which is L<sup>3</sup>, so 2.4 times the stiffness and about 1.5 times the frequency on its own. Then we added a gusset at the foot, because an indicator on the base plate showed roughly a third of the tip motion was joint rotation rather than tube bending. Together that took the first mode past 35 Hz and the ringing stopped.</p><p>The lesson I took from it is that I now ask "what is the first mode?" at the same time as "what is the sag?", because they are the same number wearing different units.</p>`,
    },
    {
      id: "beam-deflection-qa10",
      q: `<p>When does superposition stop being valid, and how do you spot it in test data?</p>`,
      a: `<p>Superposition needs three things at once: Hookean material, geometry that does not change enough to alter the load path, and boundary and contact conditions that stay the same across the whole load range. Break any one and the sum of the individual answers is wrong.</p><p>The one that catches people is the third, because it is invisible in the model. A clearance closing onto a stop, a preloaded face lifting off, a bolt slipping, a one-way support going into tension. Each of those means the structure that responds to the second load is not the structure that responded to the first.</p><p>In test data it is easy to spot if you look at the right plot. I always run a full load-deflection sweep rather than a single point, because a linear structure gives a straight line through the origin and everything else shows up as a shape. A soft segment followed by a stiffer one is clearance taking up or a joint bedding in. A stiff segment followed by a soft one is a face separating or the onset of yield. Any loop between the loading and unloading curves is friction or slip, and it means the part will not return to the same place twice. A single point at full load would have shown me none of that.</p><p>Large deflection is the other one worth naming: past roughly 10 to 15% of span, the load direction relative to the deformed beam has changed enough that small-deflection theory over-predicts motion, and you need an elastica or nonlinear FEA solution even though the material never left the elastic range.</p>`,
    },
  ],
};

export default content;
