import type { TopicContent } from "../types";

// ---------------------------------------------------------------------------
// Statics & Equilibrium
//
// Scope note: constructing the free-body diagram (isolating a body, replacing
// supports with reactions, counting reactions, distributed-load resultants) is
// owned by the `free-body-diagrams` topic. This topic starts one step later —
// SOLVING equilibrium: choosing equations, two- and three-force members,
// trusses by joints and by sections, frames and machines, and friction.
// ---------------------------------------------------------------------------

// Lesson fig 1 — the method of sections, drawn generically (no numbers; the
// worked arithmetic lives only in the questions).
const figSection = `<svg viewBox="0 0 460 284" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="stsec-tip" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Method of sections: cut 3 members, pick the moment centre</text>
  <!-- chords -->
  <line x1="50" y1="185" x2="370" y2="185" stroke="#334155" stroke-width="2.5"/>
  <line x1="130" y1="115" x2="290" y2="115" stroke="#334155" stroke-width="2.5"/>
  <!-- end diagonals -->
  <line x1="50" y1="185" x2="130" y2="115" stroke="#334155" stroke-width="2.5"/>
  <line x1="290" y1="115" x2="370" y2="185" stroke="#334155" stroke-width="2.5"/>
  <!-- verticals -->
  <line x1="130" y1="185" x2="130" y2="115" stroke="#334155" stroke-width="2.5"/>
  <line x1="210" y1="185" x2="210" y2="115" stroke="#334155" stroke-width="2.5"/>
  <line x1="290" y1="185" x2="290" y2="115" stroke="#334155" stroke-width="2.5"/>
  <!-- interior diagonals -->
  <line x1="130" y1="115" x2="210" y2="185" stroke="#334155" stroke-width="2.5"/>
  <line x1="290" y1="115" x2="210" y2="185" stroke="#334155" stroke-width="2.5"/>
  <!-- joints -->
  <circle cx="50" cy="185" r="4" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="130" cy="185" r="4" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="210" cy="185" r="4" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="290" cy="185" r="4" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="370" cy="185" r="4" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="130" cy="115" r="4" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="210" cy="115" r="4" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="290" cy="115" r="4" fill="#fff" stroke="#334155" stroke-width="2"/>
  <!-- moment centres highlighted -->
  <circle cx="130" cy="115" r="8.5" fill="none" stroke="#1d4ed8" stroke-width="2"/>
  <circle cx="210" cy="185" r="8.5" fill="none" stroke="#1d4ed8" stroke-width="2"/>
  <!-- section cut -->
  <line x1="162" y1="95" x2="186" y2="205" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="7 5"/>
  <text x="158" y="90" text-anchor="middle" fill="#1d4ed8" font-weight="600">a</text>
  <text x="190" y="219" text-anchor="middle" fill="#1d4ed8" font-weight="600">a</text>
  <!-- moment-centre joint names -->
  <text x="118" y="104" text-anchor="middle" font-weight="600" fill="#1d4ed8">F</text>
  <text x="222" y="204" text-anchor="start" font-weight="600" fill="#1d4ed8">D</text>
  <!-- depth dimension -->
  <line x1="398" y1="115" x2="398" y2="185" stroke="#64748b" stroke-width="1"/>
  <line x1="392" y1="115" x2="404" y2="115" stroke="#64748b" stroke-width="1"/>
  <line x1="392" y1="185" x2="404" y2="185" stroke="#64748b" stroke-width="1"/>
  <text x="410" y="154" text-anchor="start" fill="#64748b" font-size="12">h</text>
  <!-- supports -->
  <polygon points="50,189 38,209 62,209" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="32" y1="209" x2="68" y2="209" stroke="#334155" stroke-width="1.5"/>
  <line x1="38" y1="218" x2="47" y2="209" stroke="#64748b" stroke-width="1"/>
  <line x1="50" y1="218" x2="59" y2="209" stroke="#64748b" stroke-width="1"/>
  <polygon points="370,189 358,205 382,205" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="364" cy="210" r="4" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="376" cy="210" r="4" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="352" y1="216" x2="388" y2="216" stroke="#334155" stroke-width="1.5"/>
  <!-- recipe -->
  <line x1="20" y1="222" x2="440" y2="222" stroke="#e2e8f0" stroke-width="1"/>
  <text x="20" y="240" fill="#1d4ed8" font-size="12">Vertical sum on the cut piece gives the diagonal.</text>
  <text x="20" y="256" fill="#1d4ed8" font-size="12">Moments about D give the top chord; about F, the bottom.</text>
  <text x="20" y="272" fill="#64748b" font-size="12">Each centre kills the two members whose lines pass through it.</text>
</svg>`;

// Lesson fig 2 — three-force member: the lines of action must be concurrent.
const figConcur = `<svg viewBox="0 0 460 258" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="stcon-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="stcon-rxn" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <!-- body -->
  <polygon points="90,200 300,200 200,86" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <!-- pin at O -->
  <circle cx="90" cy="200" r="4" fill="#334155"/>
  <polygon points="90,204 78,226 102,226" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="70" y1="226" x2="110" y2="226" stroke="#334155" stroke-width="1.5"/>
  <line x1="76" y1="236" x2="86" y2="226" stroke="#64748b" stroke-width="1"/>
  <line x1="90" y1="236" x2="100" y2="226" stroke="#64748b" stroke-width="1"/>
  <text x="76" y="196" text-anchor="end" font-weight="600" fill="#334155">O</text>
  <text x="308" y="206" text-anchor="start" font-weight="600" fill="#334155">A</text>
  <text x="196" y="80" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  <!-- force P at A: vertical, line of action x = 300 -->
  <line x1="300" y1="140" x2="300" y2="194" stroke="#dc2626" stroke-width="2.5" marker-end="url(#stcon-load)"/>
  <text x="312" y="136" text-anchor="start" fill="#dc2626" font-weight="600">P</text>
  <line x1="300" y1="140" x2="300" y2="52" stroke="#dc2626" stroke-width="1" stroke-dasharray="5 4"/>
  <!-- force Q at B: horizontal, line of action y = 62 -->
  <line x1="118" y1="62" x2="194" y2="62" stroke="#dc2626" stroke-width="2.5" marker-end="url(#stcon-load)"/>
  <text x="110" y="58" text-anchor="end" fill="#dc2626" font-weight="600">Q</text>
  <line x1="200" y1="62" x2="312" y2="62" stroke="#dc2626" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="200" y1="62" x2="200" y2="86" stroke="#dc2626" stroke-width="1" stroke-dasharray="5 4"/>
  <!-- concurrency point C -->
  <circle cx="300" cy="62" r="5.5" fill="none" stroke="#1d4ed8" stroke-width="2"/>
  <text x="310" y="52" text-anchor="start" fill="#1d4ed8" font-weight="600">C</text>
  <!-- pin reaction along O to C -->
  <line x1="90" y1="200" x2="300" y2="62" stroke="#1d4ed8" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="90" y1="200" x2="176" y2="143" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#stcon-rxn)"/>
  <text x="150" y="180" text-anchor="middle" fill="#1d4ed8" font-weight="600">R</text>
  <text x="20" y="248" fill="#64748b" font-size="12">Three forces, no couple: the lines meet at C, so R lies along OC.</text>
</svg>`;

// Lesson fig 3 — frame: two members, a pin that carries an interaction force.
const figFrame = `<svg viewBox="0 0 460 262" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="stfrm-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="stfrm-rxn" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#1d4ed8"/></marker>
  </defs>
  <!-- wall -->
  <line x1="100" y1="18" x2="100" y2="212" stroke="#334155" stroke-width="2.5"/>
  <line x1="88" y1="42" x2="100" y2="30" stroke="#64748b" stroke-width="1"/>
  <line x1="88" y1="72" x2="100" y2="60" stroke="#64748b" stroke-width="1"/>
  <line x1="88" y1="102" x2="100" y2="90" stroke="#64748b" stroke-width="1"/>
  <line x1="88" y1="132" x2="100" y2="120" stroke="#64748b" stroke-width="1"/>
  <line x1="88" y1="162" x2="100" y2="150" stroke="#64748b" stroke-width="1"/>
  <line x1="88" y1="192" x2="100" y2="180" stroke="#64748b" stroke-width="1"/>
  <line x1="88" y1="212" x2="100" y2="200" stroke="#64748b" stroke-width="1"/>
  <!-- strut BD -->
  <line x1="300" y1="176" x2="100" y2="34" stroke="#334155" stroke-width="6"/>
  <line x1="300" y1="176" x2="100" y2="34" stroke="#dbeafe" stroke-width="2.5"/>
  <!-- member ABC -->
  <rect x="100" y="168" width="300" height="16" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <!-- pins -->
  <circle cx="100" cy="176" r="5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="100" cy="34" r="5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="300" cy="176" r="5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <!-- load -->
  <line x1="400" y1="106" x2="400" y2="162" stroke="#dc2626" stroke-width="2.5" marker-end="url(#stfrm-load)"/>
  <text x="400" y="98" text-anchor="middle" fill="#dc2626" font-weight="600">P</text>
  <!-- interaction pair at B -->
  <line x1="300" y1="196" x2="330" y2="196" stroke="#1d4ed8" stroke-width="2" marker-end="url(#stfrm-rxn)"/>
  <line x1="300" y1="206" x2="270" y2="206" stroke="#1d4ed8" stroke-width="2" marker-end="url(#stfrm-rxn)"/>
  <text x="340" y="209" text-anchor="start" fill="#1d4ed8" font-size="12">equal and opposite</text>
  <!-- labels -->
  <text x="114" y="200" text-anchor="start" font-weight="600" fill="#334155">A</text>
  <text x="296" y="164" text-anchor="end" font-weight="600" fill="#334155">B</text>
  <text x="400" y="206" text-anchor="middle" font-weight="600" fill="#334155">C</text>
  <text x="114" y="30" text-anchor="start" font-weight="600" fill="#334155">D</text>
  <!-- height dimension -->
  <line x1="62" y1="34" x2="62" y2="176" stroke="#64748b" stroke-width="1"/>
  <line x1="56" y1="34" x2="68" y2="34" stroke="#64748b" stroke-width="1"/>
  <line x1="56" y1="176" x2="68" y2="176" stroke="#64748b" stroke-width="1"/>
  <text x="52" y="108" text-anchor="end" fill="#64748b" font-size="12">a</text>
  <!-- span dimensions -->
  <line x1="100" y1="234" x2="300" y2="234" stroke="#64748b" stroke-width="1"/>
  <line x1="300" y1="234" x2="400" y2="234" stroke="#64748b" stroke-width="1"/>
  <line x1="100" y1="228" x2="100" y2="240" stroke="#64748b" stroke-width="1"/>
  <line x1="300" y1="228" x2="300" y2="240" stroke="#64748b" stroke-width="1"/>
  <line x1="400" y1="228" x2="400" y2="240" stroke="#64748b" stroke-width="1"/>
  <text x="200" y="229" text-anchor="middle" fill="#64748b" font-size="12">b</text>
  <text x="350" y="229" text-anchor="middle" fill="#64748b" font-size="12">c</text>
  <text x="20" y="256" fill="#64748b" font-size="12">BD is pinned at both ends with nothing between: two-force member.</text>
</svg>`;

// Lesson fig 4 — tipping vs sliding.
const figTipSlide = `<svg viewBox="0 0 460 252" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="stts-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="stts-rxn" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <!-- ground -->
  <line x1="60" y1="196" x2="300" y2="196" stroke="#334155" stroke-width="2"/>
  <line x1="66" y1="206" x2="76" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="90" y1="206" x2="100" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="114" y1="206" x2="124" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="138" y1="206" x2="148" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="162" y1="206" x2="172" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="186" y1="206" x2="196" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="210" y1="206" x2="220" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="234" y1="206" x2="244" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="258" y1="206" x2="268" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="282" y1="206" x2="292" y2="196" stroke="#64748b" stroke-width="1"/>
  <!-- block -->
  <rect x="120" y="66" width="140" height="130" fill="#e2e8f0" stroke="#334155" stroke-width="1.8"/>
  <!-- weight at CG -->
  <circle cx="190" cy="131" r="3.5" fill="#334155"/>
  <line x1="190" y1="131" x2="190" y2="182" stroke="#dc2626" stroke-width="2.5" marker-end="url(#stts-load)"/>
  <text x="200" y="160" text-anchor="start" fill="#dc2626" font-weight="600">W</text>
  <!-- applied push at height h -->
  <line x1="58" y1="80" x2="114" y2="80" stroke="#dc2626" stroke-width="2.5" marker-end="url(#stts-load)"/>
  <text x="52" y="76" text-anchor="end" fill="#dc2626" font-weight="600">P</text>
  <!-- normal at the tipping edge -->
  <line x1="260" y1="238" x2="260" y2="202" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#stts-rxn)"/>
  <text x="268" y="234" text-anchor="start" fill="#1d4ed8" font-weight="600">N</text>
  <!-- friction -->
  <line x1="212" y1="212" x2="160" y2="212" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#stts-rxn)"/>
  <text x="220" y="216" text-anchor="start" fill="#1d4ed8" font-weight="600">f</text>
  <!-- dimensions -->
  <line x1="98" y1="80" x2="98" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="92" y1="80" x2="104" y2="80" stroke="#64748b" stroke-width="1"/>
  <line x1="92" y1="196" x2="104" y2="196" stroke="#64748b" stroke-width="1"/>
  <text x="88" y="140" text-anchor="end" fill="#64748b" font-size="12">h</text>
  <line x1="190" y1="58" x2="260" y2="58" stroke="#64748b" stroke-width="1"/>
  <line x1="190" y1="52" x2="190" y2="64" stroke="#64748b" stroke-width="1"/>
  <line x1="260" y1="52" x2="260" y2="64" stroke="#64748b" stroke-width="1"/>
  <text x="225" y="48" text-anchor="middle" fill="#64748b" font-size="12">b/2</text>
  <!-- comparison -->
  <text x="316" y="96" text-anchor="start" fill="#334155" font-weight="600">Slides when</text>
  <text x="316" y="116" text-anchor="start" fill="#1d4ed8">P &gt; &mu;W</text>
  <text x="316" y="150" text-anchor="start" fill="#334155" font-weight="600">Tips when</text>
  <text x="316" y="170" text-anchor="start" fill="#1d4ed8">P &gt; W b / 2h</text>
  <text x="316" y="200" text-anchor="start" fill="#64748b" font-size="12">Whichever is</text>
  <text x="316" y="216" text-anchor="start" fill="#64748b" font-size="12">smaller happens</text>
  <text x="316" y="232" text-anchor="start" fill="#64748b" font-size="12">first.</text>
</svg>`;

// Lesson fig 5 — capstan / belt friction.
const figCapstan = `<svg viewBox="0 0 460 262" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="stcap-t" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="stcap-b" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#1d4ed8"/></marker>
  </defs>
  <!-- bollard -->
  <circle cx="200" cy="130" r="52" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
  <circle cx="200" cy="130" r="4" fill="#334155"/>
  <!-- rope, 180 degree wrap -->
  <path d="M 60 64 L 200 64 A 66 66 0 0 1 200 196 L 60 196" fill="none" stroke="#334155" stroke-width="4"/>
  <!-- tensions -->
  <line x1="118" y1="50" x2="62" y2="50" stroke="#dc2626" stroke-width="2.5" marker-end="url(#stcap-t)"/>
  <text x="126" y="46" text-anchor="start" fill="#dc2626" font-weight="600">T<tspan baseline-shift="sub" font-size="10">2</tspan> (load side)</text>
  <line x1="100" y1="212" x2="62" y2="212" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#stcap-b)"/>
  <text x="108" y="216" text-anchor="start" fill="#1d4ed8" font-weight="600">T<tspan baseline-shift="sub" font-size="10">1</tspan> (hand side)</text>
  <!-- wrap angle arc -->
  <path d="M 200 96 A 34 34 0 0 1 200 164" fill="none" stroke="#1d4ed8" stroke-width="1.6" stroke-dasharray="4 3"/>
  <text x="168" y="138" text-anchor="middle" fill="#1d4ed8" font-weight="600">&beta;</text>
  <!-- formula and note -->
  <text x="300" y="80" text-anchor="start" fill="#334155" font-weight="600">T<tspan baseline-shift="sub" font-size="10">2</tspan> = T<tspan baseline-shift="sub" font-size="10">1</tspan> e<tspan baseline-shift="super" font-size="10">&mu;&beta;</tspan></text>
  <text x="300" y="106" text-anchor="start" fill="#64748b" font-size="12">&beta; in radians:</text>
  <text x="300" y="124" text-anchor="start" fill="#64748b" font-size="12">half turn = &pi;</text>
  <text x="300" y="142" text-anchor="start" fill="#64748b" font-size="12">1.5 turns = 3&pi;</text>
  <text x="300" y="168" text-anchor="start" fill="#64748b" font-size="12">Only the product</text>
  <text x="300" y="184" text-anchor="start" fill="#64748b" font-size="12">&mu;&beta; matters, and</text>
  <text x="300" y="200" text-anchor="start" fill="#64748b" font-size="12">it is an exponent.</text>
  <text x="20" y="246" fill="#64748b" font-size="12">Radius does not appear: a thin post holds as well as a fat one.</text>
</svg>`;

// Lesson fig 6 — zero-force members (kept from the original bank).
const figTrussZF = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="stzf-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <line x1="80" y1="190" x2="230" y2="60" stroke="#334155" stroke-width="2.5"/>
  <line x1="230" y1="60" x2="380" y2="190" stroke="#334155" stroke-width="2.5"/>
  <line x1="80" y1="190" x2="230" y2="190" stroke="#334155" stroke-width="2.5"/>
  <line x1="230" y1="190" x2="380" y2="190" stroke="#334155" stroke-width="2.5"/>
  <line x1="230" y1="60" x2="230" y2="190" stroke="#1d4ed8" stroke-width="2.5" stroke-dasharray="6 4"/>
  <circle cx="80" cy="190" r="4.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="380" cy="190" r="4.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="230" cy="60" r="4.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="230" cy="190" r="4.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <text x="66" y="182" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <text x="394" y="182" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  <text x="230" y="48" text-anchor="middle" font-weight="600" fill="#334155">C</text>
  <text x="244" y="208" text-anchor="middle" font-weight="600" fill="#334155">D</text>
  <line x1="290" y1="30" x2="242" y2="54" stroke="#dc2626" stroke-width="2.5" marker-end="url(#stzf-load)"/>
  <text x="300" y="26" text-anchor="middle" fill="#dc2626" font-weight="600">P</text>
  <polygon points="80,194 68,216 92,216" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="60" y1="216" x2="100" y2="216" stroke="#334155" stroke-width="1.5"/>
  <line x1="66" y1="226" x2="76" y2="216" stroke="#64748b" stroke-width="1"/>
  <line x1="78" y1="226" x2="88" y2="216" stroke="#64748b" stroke-width="1"/>
  <polygon points="380,194 368,212 392,212" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="373" cy="218" r="4.5" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="387" cy="218" r="4.5" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="360" y1="224" x2="400" y2="224" stroke="#334155" stroke-width="1.5"/>
</svg>`;

// --- question figures -------------------------------------------------------

// The worked truss: 4 panels @ 4 m, 3 m deep, 20 kN at each bottom-chord joint.
const figTrussQ = `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sttq-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <!-- chords -->
  <line x1="45" y1="200" x2="405" y2="200" stroke="#334155" stroke-width="2.5"/>
  <line x1="135" y1="132" x2="315" y2="132" stroke="#334155" stroke-width="2.5"/>
  <!-- end diagonals -->
  <line x1="45" y1="200" x2="135" y2="132" stroke="#334155" stroke-width="2.5"/>
  <line x1="315" y1="132" x2="405" y2="200" stroke="#334155" stroke-width="2.5"/>
  <!-- verticals -->
  <line x1="135" y1="200" x2="135" y2="132" stroke="#334155" stroke-width="2.5"/>
  <line x1="225" y1="200" x2="225" y2="132" stroke="#334155" stroke-width="2.5"/>
  <line x1="315" y1="200" x2="315" y2="132" stroke="#334155" stroke-width="2.5"/>
  <!-- interior diagonals -->
  <line x1="135" y1="132" x2="225" y2="200" stroke="#334155" stroke-width="2.5"/>
  <line x1="315" y1="132" x2="225" y2="200" stroke="#334155" stroke-width="2.5"/>
  <!-- joints -->
  <circle cx="45" cy="200" r="4" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="135" cy="200" r="4" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="225" cy="200" r="4" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="315" cy="200" r="4" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="405" cy="200" r="4" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="135" cy="132" r="4" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="225" cy="132" r="4" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="315" cy="132" r="4" fill="#fff" stroke="#334155" stroke-width="2"/>
  <!-- section cut a-a -->
  <line x1="168" y1="114" x2="192" y2="220" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="7 5"/>
  <text x="164" y="108" text-anchor="middle" fill="#1d4ed8" font-weight="600">a</text>
  <text x="197" y="234" text-anchor="middle" fill="#1d4ed8" font-weight="600">a</text>
  <!-- joint labels -->
  <text x="32" y="196" text-anchor="end" font-weight="600" fill="#334155">A</text>
  <text x="405" y="192" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  <text x="120" y="217" text-anchor="end" font-weight="600" fill="#334155">C</text>
  <text x="210" y="217" text-anchor="end" font-weight="600" fill="#334155">D</text>
  <text x="300" y="217" text-anchor="end" font-weight="600" fill="#334155">E</text>
  <text x="135" y="122" text-anchor="middle" font-weight="600" fill="#334155">F</text>
  <text x="225" y="122" text-anchor="middle" font-weight="600" fill="#334155">G</text>
  <text x="315" y="122" text-anchor="middle" font-weight="600" fill="#334155">H</text>
  <!-- loads -->
  <line x1="135" y1="208" x2="135" y2="246" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sttq-load)"/>
  <line x1="225" y1="208" x2="225" y2="246" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sttq-load)"/>
  <line x1="315" y1="208" x2="315" y2="246" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sttq-load)"/>
  <text x="135" y="262" text-anchor="middle" fill="#dc2626" font-weight="600">20 kN</text>
  <text x="225" y="262" text-anchor="middle" fill="#dc2626" font-weight="600">20 kN</text>
  <text x="315" y="262" text-anchor="middle" fill="#dc2626" font-weight="600">20 kN</text>
  <!-- supports -->
  <polygon points="45,204 33,224 57,224" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="45" cy="204" r="3" fill="#334155"/>
  <line x1="27" y1="224" x2="63" y2="224" stroke="#334155" stroke-width="1.5"/>
  <line x1="33" y1="233" x2="42" y2="224" stroke="#64748b" stroke-width="1"/>
  <line x1="45" y1="233" x2="54" y2="224" stroke="#64748b" stroke-width="1"/>
  <polygon points="405,204 393,220 417,220" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="399" cy="225" r="4" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="411" cy="225" r="4" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="387" y1="231" x2="423" y2="231" stroke="#334155" stroke-width="1.5"/>
  <!-- dimensions -->
  <line x1="45" y1="288" x2="405" y2="288" stroke="#64748b" stroke-width="1"/>
  <line x1="45" y1="282" x2="45" y2="294" stroke="#64748b" stroke-width="1"/>
  <line x1="135" y1="282" x2="135" y2="294" stroke="#64748b" stroke-width="1"/>
  <line x1="225" y1="282" x2="225" y2="294" stroke="#64748b" stroke-width="1"/>
  <line x1="315" y1="282" x2="315" y2="294" stroke="#64748b" stroke-width="1"/>
  <line x1="405" y1="282" x2="405" y2="294" stroke="#64748b" stroke-width="1"/>
  <text x="225" y="283" text-anchor="middle" fill="#64748b" font-size="12">4 panels @ 4 m = 16 m</text>
  <line x1="428" y1="132" x2="428" y2="200" stroke="#64748b" stroke-width="1"/>
  <line x1="422" y1="132" x2="434" y2="132" stroke="#64748b" stroke-width="1"/>
  <line x1="422" y1="200" x2="434" y2="200" stroke="#64748b" stroke-width="1"/>
  <text x="443" y="170" text-anchor="middle" fill="#64748b" font-size="12">3 m</text>
</svg>`;

// Simply supported machine base: 18 kN skid load 1.5 m from A on a 5 m span.
const figBeamR = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="stbr-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <rect x="70" y="110" width="320" height="14" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="166" y1="48" x2="166" y2="106" stroke="#dc2626" stroke-width="2.5" marker-end="url(#stbr-load)"/>
  <text x="166" y="38" text-anchor="middle" fill="#dc2626" font-weight="600">18 kN</text>
  <polygon points="70,124 58,148 82,148" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="70" cy="124" r="3" fill="#334155"/>
  <line x1="50" y1="148" x2="90" y2="148" stroke="#334155" stroke-width="1.5"/>
  <line x1="56" y1="158" x2="66" y2="148" stroke="#64748b" stroke-width="1"/>
  <line x1="68" y1="158" x2="78" y2="148" stroke="#64748b" stroke-width="1"/>
  <line x1="80" y1="158" x2="90" y2="148" stroke="#64748b" stroke-width="1"/>
  <text x="70" y="176" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <polygon points="390,124 378,144 402,144" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="383" cy="150" r="4.5" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="397" cy="150" r="4.5" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="370" y1="156" x2="410" y2="156" stroke="#334155" stroke-width="1.5"/>
  <text x="390" y="176" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  <line x1="70" y1="208" x2="166" y2="208" stroke="#64748b" stroke-width="1"/>
  <line x1="166" y1="208" x2="390" y2="208" stroke="#64748b" stroke-width="1"/>
  <line x1="70" y1="202" x2="70" y2="214" stroke="#64748b" stroke-width="1"/>
  <line x1="166" y1="202" x2="166" y2="214" stroke="#64748b" stroke-width="1"/>
  <line x1="390" y1="202" x2="390" y2="214" stroke="#64748b" stroke-width="1"/>
  <text x="118" y="203" text-anchor="middle" fill="#64748b" font-size="12">1.5 m</text>
  <text x="278" y="203" text-anchor="middle" fill="#64748b" font-size="12">3.5 m</text>
</svg>`;

const figOverhang = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="stoh-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <rect x="70" y="110" width="320" height="14" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="390" y1="48" x2="390" y2="106" stroke="#dc2626" stroke-width="2.5" marker-end="url(#stoh-load)"/>
  <text x="390" y="38" text-anchor="middle" fill="#dc2626" font-weight="600">8 kN</text>
  <polygon points="70,124 58,148 82,148" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="70" cy="124" r="3" fill="#334155"/>
  <line x1="50" y1="148" x2="90" y2="148" stroke="#334155" stroke-width="1.5"/>
  <line x1="56" y1="158" x2="66" y2="148" stroke="#64748b" stroke-width="1"/>
  <line x1="68" y1="158" x2="78" y2="148" stroke="#64748b" stroke-width="1"/>
  <line x1="80" y1="158" x2="90" y2="148" stroke="#64748b" stroke-width="1"/>
  <text x="70" y="176" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <polygon points="310,124 298,144 322,144" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="303" cy="150" r="4.5" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="317" cy="150" r="4.5" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="290" y1="156" x2="330" y2="156" stroke="#334155" stroke-width="1.5"/>
  <text x="310" y="176" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  <line x1="70" y1="208" x2="310" y2="208" stroke="#64748b" stroke-width="1"/>
  <line x1="310" y1="208" x2="390" y2="208" stroke="#64748b" stroke-width="1"/>
  <line x1="70" y1="202" x2="70" y2="214" stroke="#64748b" stroke-width="1"/>
  <line x1="310" y1="202" x2="310" y2="214" stroke="#64748b" stroke-width="1"/>
  <line x1="390" y1="202" x2="390" y2="214" stroke="#64748b" stroke-width="1"/>
  <text x="190" y="203" text-anchor="middle" fill="#64748b" font-size="12">3 m</text>
  <text x="350" y="203" text-anchor="middle" fill="#64748b" font-size="12">1 m</text>
</svg>`;

const figTri = `<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sttr-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <line x1="90" y1="200" x2="210" y2="40" stroke="#334155" stroke-width="2.5"/>
  <line x1="210" y1="40" x2="330" y2="200" stroke="#334155" stroke-width="2.5"/>
  <line x1="90" y1="200" x2="330" y2="200" stroke="#334155" stroke-width="2.5"/>
  <circle cx="90" cy="200" r="4.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="330" cy="200" r="4.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="210" cy="40" r="4.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <text x="76" y="192" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <text x="344" y="192" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  <text x="196" y="34" text-anchor="middle" font-weight="600" fill="#334155">C</text>
  <line x1="258" y1="20" x2="224" y2="34" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sttr-load)"/>
  <text x="290" y="18" text-anchor="middle" fill="#dc2626" font-weight="600">12 kN &#8595;</text>
  <polygon points="90,204 78,226 102,226" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="70" y1="226" x2="110" y2="226" stroke="#334155" stroke-width="1.5"/>
  <line x1="76" y1="236" x2="86" y2="226" stroke="#64748b" stroke-width="1"/>
  <line x1="88" y1="236" x2="98" y2="226" stroke="#64748b" stroke-width="1"/>
  <polygon points="330,204 318,222 342,222" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="323" cy="228" r="4.5" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="337" cy="228" r="4.5" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="310" y1="234" x2="350" y2="234" stroke="#334155" stroke-width="1.5"/>
  <line x1="368" y1="200" x2="368" y2="40" stroke="#64748b" stroke-width="1"/>
  <line x1="362" y1="200" x2="374" y2="200" stroke="#64748b" stroke-width="1"/>
  <line x1="362" y1="40" x2="374" y2="40" stroke="#64748b" stroke-width="1"/>
  <text x="382" y="124" fill="#64748b" font-size="12">2 m</text>
  <line x1="90" y1="252" x2="330" y2="252" stroke="#64748b" stroke-width="1"/>
  <line x1="90" y1="246" x2="90" y2="258" stroke="#64748b" stroke-width="1"/>
  <line x1="330" y1="246" x2="330" y2="258" stroke="#64748b" stroke-width="1"/>
  <text x="210" y="248" text-anchor="middle" fill="#64748b" font-size="12">3 m (C above midspan)</text>
</svg>`;

const figCables = `<svg viewBox="0 0 460 230" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="stcb-t" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <line x1="60" y1="40" x2="400" y2="40" stroke="#334155" stroke-width="2"/>
  <line x1="72" y1="30" x2="84" y2="40" stroke="#64748b" stroke-width="1"/>
  <line x1="100" y1="30" x2="112" y2="40" stroke="#64748b" stroke-width="1"/>
  <line x1="128" y1="30" x2="140" y2="40" stroke="#64748b" stroke-width="1"/>
  <line x1="156" y1="30" x2="168" y2="40" stroke="#64748b" stroke-width="1"/>
  <line x1="184" y1="30" x2="196" y2="40" stroke="#64748b" stroke-width="1"/>
  <line x1="212" y1="30" x2="224" y2="40" stroke="#64748b" stroke-width="1"/>
  <line x1="240" y1="30" x2="252" y2="40" stroke="#64748b" stroke-width="1"/>
  <line x1="268" y1="30" x2="280" y2="40" stroke="#64748b" stroke-width="1"/>
  <line x1="324" y1="30" x2="336" y2="40" stroke="#64748b" stroke-width="1"/>
  <line x1="352" y1="30" x2="364" y2="40" stroke="#64748b" stroke-width="1"/>
  <line x1="380" y1="30" x2="392" y2="40" stroke="#64748b" stroke-width="1"/>
  <line x1="80" y1="40" x2="220" y2="121" stroke="#334155" stroke-width="2"/>
  <line x1="360" y1="40" x2="220" y2="121" stroke="#334155" stroke-width="2"/>
  <line x1="220" y1="121" x2="128" y2="68" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#stcb-t)"/>
  <line x1="220" y1="121" x2="312" y2="68" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#stcb-t)"/>
  <path d="M 116 40 A 36 36 0 0 1 111 58" fill="none" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="134" y="62" fill="#1d4ed8" font-size="12">30&#176;</text>
  <path d="M 324 40 A 36 36 0 0 0 329 58" fill="none" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="306" y="62" text-anchor="end" fill="#1d4ed8" font-size="12">30&#176;</text>
  <circle cx="220" cy="121" r="4" fill="#334155"/>
  <line x1="220" y1="121" x2="220" y2="150" stroke="#334155" stroke-width="2"/>
  <rect x="196" y="150" width="48" height="34" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="220" y="172" text-anchor="middle" fill="#dc2626" font-weight="600">100 N</text>
  <text x="130" y="104" fill="#1d4ed8" font-weight="600">T<tspan baseline-shift="sub" font-size="10">1</tspan></text>
  <text x="310" y="104" text-anchor="end" fill="#1d4ed8" font-weight="600">T<tspan baseline-shift="sub" font-size="10">2</tspan></text>
</svg>`;

const figHalfUDL = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sthu-load" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
  </defs>
  <rect x="70" y="120" width="360" height="14" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="70" y1="62" x2="250" y2="62" stroke="#dc2626" stroke-width="2"/>
  <line x1="70" y1="66" x2="70" y2="112" stroke="#dc2626" stroke-width="1.8" marker-end="url(#sthu-load)"/>
  <line x1="106" y1="66" x2="106" y2="112" stroke="#dc2626" stroke-width="1.8" marker-end="url(#sthu-load)"/>
  <line x1="142" y1="66" x2="142" y2="112" stroke="#dc2626" stroke-width="1.8" marker-end="url(#sthu-load)"/>
  <line x1="178" y1="66" x2="178" y2="112" stroke="#dc2626" stroke-width="1.8" marker-end="url(#sthu-load)"/>
  <line x1="214" y1="66" x2="214" y2="112" stroke="#dc2626" stroke-width="1.8" marker-end="url(#sthu-load)"/>
  <line x1="250" y1="66" x2="250" y2="112" stroke="#dc2626" stroke-width="1.8" marker-end="url(#sthu-load)"/>
  <text x="160" y="50" text-anchor="middle" fill="#dc2626" font-weight="600">w = 6 kN/m</text>
  <polygon points="70,134 58,158 82,158" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="70" cy="134" r="3" fill="#334155"/>
  <line x1="50" y1="158" x2="90" y2="158" stroke="#334155" stroke-width="1.5"/>
  <line x1="56" y1="168" x2="66" y2="158" stroke="#64748b" stroke-width="1"/>
  <line x1="68" y1="168" x2="78" y2="158" stroke="#64748b" stroke-width="1"/>
  <line x1="80" y1="168" x2="90" y2="158" stroke="#64748b" stroke-width="1"/>
  <text x="70" y="186" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <polygon points="430,134 418,154 442,154" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="423" cy="160" r="4.5" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="437" cy="160" r="4.5" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="410" y1="166" x2="450" y2="166" stroke="#334155" stroke-width="1.5"/>
  <text x="430" y="186" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  <line x1="70" y1="214" x2="250" y2="214" stroke="#64748b" stroke-width="1"/>
  <line x1="250" y1="214" x2="430" y2="214" stroke="#64748b" stroke-width="1"/>
  <line x1="70" y1="208" x2="70" y2="220" stroke="#64748b" stroke-width="1"/>
  <line x1="250" y1="208" x2="250" y2="220" stroke="#64748b" stroke-width="1"/>
  <line x1="430" y1="208" x2="430" y2="220" stroke="#64748b" stroke-width="1"/>
  <text x="160" y="209" text-anchor="middle" fill="#64748b" font-size="12">3 m</text>
  <text x="340" y="209" text-anchor="middle" fill="#64748b" font-size="12">3 m</text>
</svg>`;

const figLbracket = `<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="stlb-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <line x1="120" y1="30" x2="120" y2="190" stroke="#334155" stroke-width="2"/>
  <line x1="108" y1="46" x2="120" y2="34" stroke="#64748b" stroke-width="1"/>
  <line x1="108" y1="70" x2="120" y2="58" stroke="#64748b" stroke-width="1"/>
  <line x1="108" y1="94" x2="120" y2="82" stroke="#64748b" stroke-width="1"/>
  <line x1="108" y1="118" x2="120" y2="106" stroke="#64748b" stroke-width="1"/>
  <line x1="108" y1="142" x2="120" y2="130" stroke="#64748b" stroke-width="1"/>
  <line x1="108" y1="166" x2="120" y2="154" stroke="#64748b" stroke-width="1"/>
  <rect x="132" y="52" width="16" height="76" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="132" y="52" width="106" height="16" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <circle cx="140" cy="120" r="6" fill="#fff" stroke="#334155" stroke-width="2"/>
  <text x="158" y="112" fill="#334155" font-weight="600">bolt A</text>
  <circle cx="230" cy="60" r="4" fill="#334155"/>
  <line x1="242" y1="60" x2="310" y2="60" stroke="#dc2626" stroke-width="2.5" marker-end="url(#stlb-load)"/>
  <text x="322" y="64" fill="#dc2626" font-weight="600">100 N</text>
  <line x1="140" y1="150" x2="230" y2="150" stroke="#64748b" stroke-width="1"/>
  <line x1="140" y1="144" x2="140" y2="156" stroke="#64748b" stroke-width="1"/>
  <line x1="230" y1="144" x2="230" y2="156" stroke="#64748b" stroke-width="1"/>
  <text x="185" y="145" text-anchor="middle" fill="#64748b" font-size="12">0.3 m</text>
  <line x1="146" y1="120" x2="276" y2="120" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="270" y1="60" x2="270" y2="120" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="264" y1="120" x2="276" y2="120" stroke="#64748b" stroke-width="1"/>
  <line x1="264" y1="60" x2="276" y2="60" stroke="#64748b" stroke-width="1"/>
  <text x="284" y="94" fill="#64748b" font-size="12">0.2 m</text>
</svg>`;

const figLever = `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="stlv-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="stlv-rxn" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <polygon points="130,230 130,40 244,154" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <!-- pin at O -->
  <circle cx="130" cy="230" r="4" fill="#334155"/>
  <polygon points="130,234 120,252 140,252" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="112" y1="252" x2="148" y2="252" stroke="#334155" stroke-width="1.5"/>
  <line x1="118" y1="260" x2="126" y2="252" stroke="#64748b" stroke-width="1"/>
  <line x1="130" y1="260" x2="138" y2="252" stroke="#64748b" stroke-width="1"/>
  <line x1="142" y1="260" x2="150" y2="252" stroke="#64748b" stroke-width="1"/>
  <text x="118" y="226" text-anchor="end" font-weight="600" fill="#334155">O</text>
  <text x="252" y="168" text-anchor="start" font-weight="600" fill="#334155">A</text>
  <text x="118" y="44" text-anchor="end" font-weight="600" fill="#334155">B</text>
  <!-- horizontal cable force at B -->
  <line x1="206" y1="40" x2="136" y2="40" stroke="#dc2626" stroke-width="2.5" marker-end="url(#stlv-load)"/>
  <text x="214" y="36" text-anchor="start" fill="#dc2626" font-weight="600">T (horizontal)</text>
  <!-- vertical load at A -->
  <line x1="244" y1="96" x2="244" y2="148" stroke="#dc2626" stroke-width="2.5" marker-end="url(#stlv-load)"/>
  <text x="244" y="88" text-anchor="middle" fill="#dc2626" font-weight="600">P = 500 N</text>
  <!-- unknown pin reaction -->
  <line x1="130" y1="230" x2="176" y2="192" stroke="#1d4ed8" stroke-width="2.5" stroke-dasharray="6 4" marker-end="url(#stlv-rxn)"/>
  <text x="192" y="190" text-anchor="start" fill="#1d4ed8" font-weight="600">R = ?</text>
  <!-- dimensions -->
  <line x1="96" y1="40" x2="96" y2="230" stroke="#64748b" stroke-width="1"/>
  <line x1="90" y1="40" x2="102" y2="40" stroke="#64748b" stroke-width="1"/>
  <line x1="90" y1="230" x2="102" y2="230" stroke="#64748b" stroke-width="1"/>
  <text x="86" y="138" text-anchor="end" fill="#64748b" font-size="12">0.50 m</text>
  <line x1="286" y1="154" x2="286" y2="230" stroke="#64748b" stroke-width="1"/>
  <line x1="280" y1="154" x2="292" y2="154" stroke="#64748b" stroke-width="1"/>
  <line x1="280" y1="230" x2="292" y2="230" stroke="#64748b" stroke-width="1"/>
  <text x="298" y="196" text-anchor="start" fill="#64748b" font-size="12">0.20 m</text>
  <line x1="130" y1="272" x2="244" y2="272" stroke="#64748b" stroke-width="1"/>
  <line x1="130" y1="266" x2="130" y2="278" stroke="#64748b" stroke-width="1"/>
  <line x1="244" y1="266" x2="244" y2="278" stroke="#64748b" stroke-width="1"/>
  <text x="187" y="267" text-anchor="middle" fill="#64748b" font-size="12">0.30 m</text>
  <text x="20" y="294" fill="#64748b" font-size="12">Bell crank pinned at O. Cable at B horizontal, load at A vertical.</text>
</svg>`;

const figBoom = `<svg viewBox="0 0 460 262" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="stbm-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <line x1="140" y1="28" x2="140" y2="204" stroke="#334155" stroke-width="2.5"/>
  <line x1="128" y1="52" x2="140" y2="40" stroke="#64748b" stroke-width="1"/>
  <line x1="128" y1="82" x2="140" y2="70" stroke="#64748b" stroke-width="1"/>
  <line x1="128" y1="112" x2="140" y2="100" stroke="#64748b" stroke-width="1"/>
  <line x1="128" y1="142" x2="140" y2="130" stroke="#64748b" stroke-width="1"/>
  <line x1="128" y1="172" x2="140" y2="160" stroke="#64748b" stroke-width="1"/>
  <line x1="128" y1="202" x2="140" y2="190" stroke="#64748b" stroke-width="1"/>
  <!-- cable -->
  <line x1="140" y1="43" x2="280" y2="160" stroke="#1d4ed8" stroke-width="2.2"/>
  <circle cx="140" cy="43" r="4" fill="#fff" stroke="#334155" stroke-width="2"/>
  <text x="186" y="92" text-anchor="end" fill="#1d4ed8" font-weight="600">T</text>
  <!-- boom -->
  <rect x="140" y="153" width="140" height="14" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <circle cx="140" cy="160" r="5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <text x="128" y="180" text-anchor="end" font-weight="600" fill="#334155">A</text>
  <text x="292" y="152" text-anchor="start" font-weight="600" fill="#334155">B</text>
  <!-- angle -->
  <path d="M 240 160 A 40 40 0 0 1 249.4 134.3" fill="none" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="234" y="136" text-anchor="end" fill="#1d4ed8" font-size="12">40&#176;</text>
  <!-- load -->
  <line x1="280" y1="172" x2="280" y2="212" stroke="#dc2626" stroke-width="2.5" marker-end="url(#stbm-load)"/>
  <text x="280" y="228" text-anchor="middle" fill="#dc2626" font-weight="600">600 N</text>
  <!-- dimension -->
  <line x1="140" y1="248" x2="280" y2="248" stroke="#64748b" stroke-width="1"/>
  <line x1="140" y1="242" x2="140" y2="254" stroke="#64748b" stroke-width="1"/>
  <line x1="280" y1="242" x2="280" y2="254" stroke="#64748b" stroke-width="1"/>
  <text x="210" y="243" text-anchor="middle" fill="#64748b" font-size="12">2.0 m</text>
</svg>`;

const figPanel = `<svg viewBox="0 0 460 268" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="stpn-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="stpn-rxn" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <!-- sill -->
  <line x1="60" y1="190" x2="200" y2="190" stroke="#334155" stroke-width="2"/>
  <line x1="66" y1="200" x2="76" y2="190" stroke="#64748b" stroke-width="1"/>
  <line x1="86" y1="200" x2="96" y2="190" stroke="#64748b" stroke-width="1"/>
  <line x1="106" y1="200" x2="116" y2="190" stroke="#64748b" stroke-width="1"/>
  <line x1="126" y1="200" x2="136" y2="190" stroke="#64748b" stroke-width="1"/>
  <line x1="146" y1="200" x2="156" y2="190" stroke="#64748b" stroke-width="1"/>
  <line x1="166" y1="200" x2="176" y2="190" stroke="#64748b" stroke-width="1"/>
  <!-- panel -->
  <polygon points="113.5,196.1 321.5,76.1 314.5,63.9 106.5,183.9" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <circle cx="110" cy="190" r="5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <text x="96" y="182" text-anchor="end" font-weight="600" fill="#334155">hinge</text>
  <!-- angle -->
  <path d="M 156 190 A 46 46 0 0 0 149.8 167" fill="none" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="152" y="187" text-anchor="middle" fill="#1d4ed8" font-size="12">30&#176;</text>
  <!-- weight -->
  <line x1="214" y1="136" x2="214" y2="184" stroke="#dc2626" stroke-width="2.5" marker-end="url(#stpn-load)"/>
  <text x="226" y="172" text-anchor="start" fill="#dc2626" font-weight="600">W = 392 N</text>
  <!-- strut -->
  <line x1="198" y1="203" x2="171" y2="155" stroke="#334155" stroke-width="6"/>
  <line x1="198" y1="203" x2="171" y2="155" stroke="#e2e8f0" stroke-width="2.5"/>
  <circle cx="198" cy="203" r="4" fill="#fff" stroke="#334155" stroke-width="2"/>
  <line x1="208" y1="212" x2="181" y2="164" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#stpn-rxn)"/>
  <text x="236" y="212" text-anchor="start" fill="#1d4ed8" font-weight="600">F (&perp; to panel)</text>
  <text x="20" y="242" fill="#64748b" font-size="12">Panel: 1.2 m long, 40 kg, uniform. Strut acts 0.35 m from the hinge.</text>
  <text x="20" y="258" fill="#64748b" font-size="12">Both the weight arm and the strut arm shorten as the panel opens.</text>
</svg>`;

const content: TopicContent = {
  lesson: {
    title: "Statics & Equilibrium",
    intro: `<p>The free-body diagram is the setup. This topic is the <strong>solve</strong>: given a correct FBD, how do you get the number out with the fewest equations and the fewest chances to make a sign error? Anyone can write &Sigma;F = 0. What separates people is choosing a moment centre that kills two unknowns, recognising a two-force member before writing anything, cutting a truss instead of walking it joint by joint, and knowing that friction is an inequality until something actually slips.</p>
<p>The toolkit: equilibrium equations and how to pick them, two- and three-force members, trusses by joints and by sections, frames and machines, where a pin carries an interaction force between bodies, and dry friction. Tipping versus sliding, wedges, screws, and the exponential surprise of a rope wrapped round a post.</p>`,
    sections: [
      {
        heading: "Three equations, and the art of choosing them",
        html: `<p>A rigid body in 2D gives exactly three independent equations:</p>
<p class="eq">&Sigma;F<sub>x</sub> = 0&nbsp;&nbsp;&nbsp;&nbsp;&Sigma;F<sub>y</sub> = 0&nbsp;&nbsp;&nbsp;&nbsp;&Sigma;M<sub>O</sub> = 0 (any point O)</p>
<p>Three is the budget. You may spend it differently: one force sum plus two moment sums, or three moment sums about points that are not collinear. All are valid. None gives you a fourth equation.</p>
<p>The moment of a force is the force times the <strong>perpendicular</strong> distance to its line of action. In coordinates, for a force <strong>F</strong> = (F<sub>x</sub>, F<sub>y</sub>) applied at (x, y) relative to O:</p>
<p class="eq">M<sub>O</sub> = F &middot; d<sub>&perp;</sub> = x F<sub>y</sub> &minus; y F<sub>x</sub></p>
<p>Memorise the coordinate form. It never asks you to eyeball a perpendicular distance, and it gets the sign right on its own (counterclockwise positive).</p>
<p><strong>Choosing the moment centre is the whole game.</strong> Put O where the most unknowns intersect. A pin support removes two of them in one line. In a truss section, put O where two of the three cut members cross and the third falls out alone.</p>
<div class="callout warn"><strong>The counting rule is necessary, not sufficient.</strong> Three reactions in 2D means <em>possibly</em> determinate. If the three reaction lines of action are all <strong>concurrent</strong> at a point, nothing resists rotation about that point; if they are all <strong>parallel</strong>, nothing resists transverse translation. Either way the body is a mechanism despite a correct count. Anyone who has watched a fixture spin on its bolts asks about this.</div>`,
      },
      {
        heading: "Two- and three-force members: shortcuts you should take on sight",
        html: `<p>A <strong>two-force member</strong> is loaded at exactly two points and nowhere else. No weight worth counting, no mid-span load, no applied couple. Equilibrium then forces the two end forces to be equal, opposite, and collinear, and since the member is straight that line is the member axis. Two unknown components have become <em>one</em> unknown scalar with a known direction. Struts, links, cables, hydraulic cylinders and every truss member qualify.</p>
<p>A <strong>three-force member</strong> is the underused twin. If exactly three forces act on a body and there is no couple, their lines of action must be <strong>concurrent</strong> (or all three parallel, the degenerate case). Sum moments about the intersection of any two: both vanish, so the third must have zero arm too, meaning it passes through that same point.</p>
<figure class="fig">${figConcur}<figcaption>Forces P and Q are known in direction, so their lines of action fix the concurrency point C. The pin reaction R at O must point along OC, one unknown direction obtained for free before any equation is written.</figcaption></figure>
<p>What that buys you is the <em>direction</em> of an unknown pin reaction with no algebra. One force triangle, or a single &Sigma;F equation, then gives the magnitudes. On a whiteboard this beats components badly, and it shows you understand equilibrium geometrically rather than as a formula.</p>
<div class="callout"><strong>Interview cue:</strong> "only three forces act on this bracket" is never a throwaway sentence. It is the interviewer telling you to use concurrency.</div>`,
      },
      {
        heading: "Trusses: joints, zero-force members, and the section cut",
        html: `<p>A truss is straight members pinned at their ends and loaded only at joints, so every member is a two-force member carrying pure tension or compression. Two tools:</p>
<ul>
<li><strong>Method of joints.</strong> Isolate one joint, &Sigma;F<sub>x</sub> = &Sigma;F<sub>y</sub> = 0. Two equations per joint, so start where at most two members are unknown. Best when you want <em>every</em> member.</li>
<li><strong>Method of sections.</strong> Cut straight through at most three members, discard one side, apply full rigid-body equilibrium to what is left. Best when you want <em>one</em> member deep inside the truss.</li>
</ul>
<figure class="fig">${figSection}<figcaption>Cut a–a passes through the top chord, a diagonal, and the bottom chord. Each of the three unknowns has an equation that isolates it: sum moments where the other two cross, or sum vertical forces for the only member with a vertical component.</figcaption></figure>
<p>Two shortcuts fall straight out of the cut, and both are worth knowing as formulas:</p>
<p class="eq">F<sub>diagonal</sub> sin &theta; = V<sub>panel</sub>&nbsp;&nbsp;&nbsp;&nbsp;F<sub>chord</sub> &middot; h = M<sub>cut</sub></p>
<p>The chords carry the bending moment as a force couple over the truss depth <em>h</em>; the diagonals carry the shear. Deepen the truss and the chord forces drop in direct proportion, which is the same reason a deep beam beats a shallow one.</p>
<figure class="fig">${figTrussZF}<figcaption>Zero-force spotting: at joint D three members meet, AD and DB are collinear, and there is no load at D, so CD carries nothing for this load case.</figcaption></figure>
<p><strong>Zero-force rules</strong>, worth having on instant recall: two non-collinear members at an unloaded, unsupported joint &rarr; both are zero. Three members at such a joint with two collinear &rarr; the odd one is zero. Apply them repeatedly, because removing one can expose the next. They are not useless members. They brace compression chords against buckling and pick up load in other load cases.</p>`,
      },
      {
        heading: "Frames and machines: multi-body equilibrium",
        html: `<p>A <strong>frame</strong> has at least one member carrying load between its pins, so that member bends and is <em>not</em> a two-force member. A <strong>machine</strong> is the same idea with moving parts (pliers, a bolt cutter, a linkage). Both are solved by <strong>dismembering</strong>: draw an FBD of each member separately, and put the connecting pin force on both, equal and opposite.</p>
<figure class="fig">${figFrame}<figcaption>A frame: ABC carries the load between its pins, so it bends; BD is pinned at both ends with nothing between, so it is a two-force member and its force acts along BD.</figcaption></figure>
<p>The recipe that keeps it short:</p>
<ol>
<li><strong>Scan for two-force members first.</strong> Every one you find replaces two unknowns with one and fixes a direction.</li>
<li><strong>Try the whole assembly first.</strong> Interaction pins are internal to the assembly and cancel, so three equations may already give the external reactions.</li>
<li><strong>Then dismember</strong> for the interaction forces. Sum moments about the connecting pin on one member to eliminate that pin's two unknowns.</li>
<li><strong>Check equal-and-opposite.</strong> If the pin force you drew on member 1 is not the exact negative of the one on member 2, you have a sign error, not a new result.</li>
</ol>
<p>Counting for a frame of <em>n</em> members: 3<em>n</em> equations against (reactions + 2 per internal pin) unknowns. A two-member frame with a pin support, a roller, and one connecting pin has 6 equations and 3 + 2 + 1 = 6 unknowns, so it is determinate.</p>
<div class="callout"><strong>Machines earn their name:</strong> for a lever or plier jaw, the mechanical advantage is just the ratio of moment arms about the pivot. When input and output act on opposite sides of the pivot the pin itself often carries <em>less</em> than their sum, which is a quick way to catch a sloppy force balance.</div>`,
      },
      {
        heading: "Dry friction: an inequality, and two ways to lose",
        html: `<p>Coulomb friction is not a formula you apply, it is a limit you check:</p>
<p class="eq">f &le; &mu;<sub>s</sub>N&nbsp;&nbsp;&nbsp;(equality only at impending slip)</p>
<p>Below the limit, friction takes exactly the value equilibrium demands and not a newton more. Writing f = &mu;N on a body that is comfortably at rest is the single most common statics error in interviews, and it is instantly visible.</p>
<figure class="fig">${figTipSlide}<figcaption>Two competing failure modes for a pushed block. Sliding needs P &gt; &mu;W; tipping needs P h &gt; W(b/2), because the normal force can only migrate as far as the leading edge. Whichever threshold is lower is what actually happens.</figcaption></figure>
<p><strong>Tipping versus sliding</strong> is the classic pairing. Set them equal to find the crossover: tipping wins when h &gt; b/(2&mu;). Tall and narrow tips; short and wide slides. On an incline the same fight appears as two angles. It slides at tan &theta; = &mu; and tips at tan &theta; = b/h.</p>
<p><strong>Self-locking</strong> is the same inequality wearing a different hat. Define the friction angle &phi; = tan<sup>&minus;1</sup>&mu;<sub>s</sub>:</p>
<ul>
<li>A block on an incline holds while &theta; &le; &phi; (the angle of repose).</li>
<li>A wedge with one friction face is self-locking while its included angle &alpha; &le; &phi;; with friction on both faces the criterion becomes &alpha; &le; 2&phi;.</li>
<li>A power screw will not back-drive while the lead angle &lambda; satisfies tan &lambda; &le; &mu; (square thread). Steep leads back-drive; that is why a fast-lead ball screw needs a brake and an Acme jack does not.</li>
</ul>
<div class="callout warn">Self-locking is a <em>static</em> result. Vibration, lubricant ingress and a shock unload all destroy it. That is why a self-locking screw still gets a locknut on anything that moves.</div>`,
      },
      {
        heading: "Belt and capstan friction",
        html: `<p>Wrap a rope around a fixed post and the tension ratio grows exponentially with the wrap angle:</p>
<p class="eq">T<sub>2</sub> = T<sub>1</sub> e<sup>&mu;&beta;</sup></p>
<p>Here T<sub>2</sub> is the tight (load) side, T<sub>1</sub> the slack (hold) side, &mu; the rope-to-post friction coefficient, and &beta; the total wrap angle <strong>in radians</strong>. A half turn is &pi;, a full turn 2&pi;, three turns 6&pi;.</p>
<figure class="fig">${figCapstan}<figcaption>Capstan friction. The post radius never appears in the equation: only how far round the rope goes and how rough the contact is.</figcaption></figure>
<p>Three consequences:</p>
<ul>
<li><strong>The numbers are shocking.</strong> With &mu; = 0.3, one turn multiplies your grip by 6.6, two turns by 43, three turns by 286. That is why a dock worker holds a ship with one hand.</li>
<li><strong>Only the product &mu;&beta; matters.</strong> Adding 50% more wrap and adding 50% more friction change the answer by exactly the same amount. Wrap is free. Friction is not.</li>
<li><strong>Same maths runs the brake and the drive.</strong> Band brake or flat belt drive, the torque you can carry is (T<sub>2</sub> &minus; T<sub>1</sub>)r, with T<sub>2</sub> capped by belt strength and the ratio capped by e<sup>&mu;&beta;</sup>. Slipping V-belts are the same equation with &mu; replaced by &mu;/sin(&alpha;/2), which is why the vee wedges harder and grips better.</li>
</ul>`,
      },
    ],
    equations: [
      { name: "Force equilibrium (2D)", formula: "&Sigma;F<sub>x</sub> = 0, &nbsp;&Sigma;F<sub>y</sub> = 0", note: "Sum all external force components on the isolated body. Three equations total in 2D, six in 3D." },
      { name: "Moment about any point", formula: "&Sigma;M<sub>O</sub> = 0", note: "Valid about every point O. Choose O where the most unknown lines of action intersect so those unknowns drop out." },
      { name: "Moment of a force", formula: "M<sub>O</sub> = F &middot; d<sub>&perp;</sub> = x F<sub>y</sub> &minus; y F<sub>x</sub>", note: "d<sub>&perp;</sub> is the perpendicular distance from O to the line of action. The coordinate form gets the sign right automatically (CCW positive)." },
      { name: "Truss section shortcuts", formula: "F<sub>diag</sub> sin &theta; = V<sub>panel</sub>, &nbsp;F<sub>chord</sub> h = M<sub>cut</sub>", note: "&theta; is the diagonal's angle to horizontal, h the truss depth, V and M the shear and moment carried across the cut. Chords take moment, diagonals take shear." },
      { name: "Static friction limit", formula: "f &le; &mu;<sub>s</sub>N", note: "f is the actual friction force, N the normal force. Equality holds only at impending slip; otherwise f is whatever equilibrium requires." },
      { name: "Tipping vs sliding", formula: "P<sub>tip</sub> = W b / 2h, &nbsp;P<sub>slide</sub> = &mu;W", note: "b is the base width, h the height of the horizontal push, W the weight. The smaller of the two thresholds is the mode that actually occurs." },
      { name: "Capstan / belt friction", formula: "T<sub>2</sub> = T<sub>1</sub> e<sup>&mu;&beta;</sup>", note: "&beta; is the total wrap angle in radians. Post radius does not appear. Transmissible torque is (T<sub>2</sub> &minus; T<sub>1</sub>)r." },
      { name: "Eccentric bolt group (in-plane)", formula: "F<sub>i</sub> = P/n &nbsp;(vector +)&nbsp; M r<sub>i</sub> / &Sigma;r<sup>2</sup>", note: "Direct shear P/n on every bolt plus a torsional term M r<sub>i</sub>/&Sigma;r<sup>2</sup> perpendicular to r<sub>i</sub>, where M = P&middot;e and r<sub>i</sub> is measured from the bolt-group centroid. Add the two as vectors, never as magnitudes." },
    ],
    interviewTips: [
      "Before writing an equation, say which point you are summing moments about and why. 'About B, because both pin reactions pass through it' is the sentence that earns the tick.",
      "Scan for two-force members first; each one you spot turns two unknown components into one scalar with a known direction.",
      "If exactly three forces act with no couple, use concurrency to get the unknown reaction's direction for free before touching algebra.",
      "Never write f = μN unless slip actually impends. Check the required friction against the limit first.",
      "For anything tall being pushed, compute both the tipping force and the sliding force and report which is smaller. Volunteering both is what separates a good answer from a right one.",
      "Check truss results by sign and by feel: bottom chords of a simply supported truss are in tension, top chords in compression, and doubling the depth halves the chord forces.",
    ],
  },

  questions: [
    {
      id: "statics-q01",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A machine base beam spans 5 m between a pin at A and a roller at B. An 18 kN skid load lands 1.5 m from A. Find the vertical reaction at <strong>A</strong>, in kN.</p>`,
      figure: figBeamR,
      answer: 12.6,
      unit: "kN",
      explanation: `<p class="eq">&Sigma;M<sub>A</sub> = 0: B<sub>y</sub>(5) &minus; 18(1.5) = 0 &rarr; B<sub>y</sub> = 27/5 = 5.4 kN</p>
<p class="eq">&Sigma;F<sub>y</sub> = 0: A<sub>y</sub> = 18 &minus; 5.4 = <strong>12.6 kN</strong></p>
<p>Moments about A, because both pin components pass through it. Report 5.4 kN at A and you used the near arm.</p>`,
    },
    {
      id: "statics-q02",
      type: "mc",
      difficulty: 2,
      prompt: `<p>The beam shown has a pin at A and a roller at B 3 m away, then overhangs 1 m past B and carries an 8 kN load at the free end. What is the vertical reaction at <strong>A</strong>?</p>`,
      figure: figOverhang,
      choices: [
        "2.67 kN upward &mdash; the pin shares the load",
        "2.67 kN downward &mdash; the pin holds A down",
        "5.33 kN upward &mdash; the load splits by span",
        "8.00 kN upward &mdash; the pin takes the whole load",
      ],
      answer: 1,
      explanation: `<p>&Sigma;M<sub>A</sub> = 0: B<sub>y</sub>(3) &minus; 8(4) = 0 &rarr; B<sub>y</sub> = 10.67 kN up.</p>
<p class="eq">&Sigma;F<sub>y</sub> = 0: A<sub>y</sub> + 10.67 &minus; 8 = 0 &rarr; A<sub>y</sub> = &minus;2.67 kN</p>
<p>The minus sign is the answer, not an error. The overhung load levers the beam about the roller and tries to lift end A, so the pin has to <strong>pull down</strong> with 2.67 kN. Trust the algebra over the arrow you drew.</p>
<p>A pin or a hold-down bolt can supply that force. A beam simply <em>resting</em> on a bearing pad at A would lift off instead. Whenever an overhang moment beats the back-span moment, go and check the far support for uplift.</p>`,
    },
    {
      id: "statics-q03",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>An L-bracket is bolted to a wall at A. A 100 N <em>horizontal</em> force is applied at a point 0.3 m to the right of and 0.2 m above the bolt, as shown. What is the magnitude of the moment about bolt A, in N&middot;m?</p>`,
      figure: figLbracket,
      answer: 20,
      unit: "N*m",
      explanation: `<p>The force is horizontal, so its line of action is a horizontal line 0.2 m above A. The perpendicular distance to that line is the <em>vertical</em> offset:</p>
<p class="eq">M<sub>A</sub> = 100 N &times; 0.2 m = <strong>20 N&middot;m</strong></p>
<p>Grabbing the 0.3 m horizontal offset gives 30 N&middot;m and is the most common moment error there is. The coordinate form protects you: 0.3(0) &minus; 0.2(100) = &minus;20 N&middot;m, i.e. 20 N&middot;m clockwise.</p>`,
    },
    {
      id: "statics-q04",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A technician pulls a 0.50 m breaker bar with an 80 N force applied at 60&deg; to the handle. What moment does the fastener see, in N&middot;m?</p>`,
      answer: 34.6,
      unit: "N*m",
      explanation: `<p>Only the component of the pull perpendicular to the handle makes moment:</p>
<p class="eq">M = F L sin &theta; = (80)(0.50) sin 60&deg;</p>
<p class="eq">M = 40(0.866) = <strong>34.6 N&middot;m</strong></p>
<p>Two ways to get this wrong. Using the full 40 N&middot;m assumes you are pulling square. Using cos 60&deg; gives 20 N&middot;m &mdash; that is the component along the handle, which pushes the socket onto the fastener and makes no torque at all. You lose 10% of your torque at 26&deg; off perpendicular, which is further than most people expect.</p>`,
    },
    {
      id: "statics-q05",
      type: "mc",
      difficulty: 1,
      prompt: `<p>In the truss shown, load P acts at joint C, with a pin at A and a roller at B. Which member carries <strong>zero force</strong> for this load case?</p>`,
      figure: figTrussZF,
      choices: ["AC", "AD", "CD", "CB"],
      answer: 2,
      explanation: `<p>Joint <strong>D</strong> is where to look. Three members meet there (AD, DB, CD), AD and DB are collinear, and nothing loads or supports the joint. Resolve perpendicular to the collinear pair and one equation is left with one term in it:</p>
<p class="eq">&Sigma;F<sub>&perp;</sub> at D = 0 &rarr; F<sub>CD</sub> = 0</p>
<p>Three members at an unloaded joint with two of them collinear: the odd one out carries nothing.</p>
<p>So can we delete it? No. CD halves the unsupported length of the bottom chord, holds the geometry during erection, and picks up force the moment P moves off joint C. Zero-force describes a load case, not a member.</p>`,
    },
    {
      id: "statics-q06",
      type: "mc",
      difficulty: 3,
      prompt: `<p>The symmetric triangular truss shown spans 3 m with apex C 2 m above midspan and carries a 12 kN downward load at C. Diagonal AC makes angle &theta; with the horizontal, with sin &theta; = 0.8 and cos &theta; = 0.6. What force does member <strong>AC</strong> carry?</p>`,
      figure: figTri,
      choices: [
        "6.0 kN in compression",
        "7.5 kN in compression",
        "7.5 kN in tension",
        "10.0 kN in compression",
      ],
      answer: 1,
      explanation: `<p>By symmetry each support carries half the load: A<sub>y</sub> = B<sub>y</sub> = 6 kN.</p>
<p>Method of joints at A, assuming AC is in tension (so it pulls the joint up the slope toward C):</p>
<p class="eq">&Sigma;F<sub>y</sub> = 0: 6 + F<sub>AC</sub> sin &theta; = 0 &rarr; F<sub>AC</sub> = &minus;6/0.8 = &minus;7.5 kN</p>
<p>Negative means the assumed direction was wrong, so <strong>7.5 kN compression</strong>. The 6.0 kN distractor is the reaction itself, with nobody dividing by sin &theta;. The tension answer is the sign flip.</p>
<p>Press down on an apex and the truss wants to spread: rafters squash, bottom tie stretches. Carrying on at joint A gives F<sub>AB</sub> = 7.5 &times; 0.6 = 4.5 kN tension, the tie holding the feet together.</p>`,
    },
    {
      id: "statics-q07",
      type: "mc",
      difficulty: 2,
      prompt: `<p>The Pratt truss shown carries 20 kN at each of the three interior bottom-chord joints C, D and E. Before doing any arithmetic, which member can you declare <strong>zero-force</strong> by inspection?</p>`,
      figure: figTrussQ,
      choices: [
        "DG, the centre vertical",
        "CF, the left vertical",
        "FD, the left diagonal",
        "GH, the right-hand top chord",
      ],
      answer: 0,
      explanation: `<p>Work the joints, not the members. Joint <strong>G</strong> at the top has exactly three members: FG and GH are collinear along the top chord, and DG is the odd one out. No load is applied at G. Summing forces perpendicular to the top chord at G leaves only DG:</p>
<p class="eq">&Sigma;F<sub>y</sub> at G = 0 &rarr; F<sub>DG</sub> = 0</p>
<p>The other candidates fail the test. CF and EH sit at joints where a 20 kN load is applied, so they carry that load straight up into the truss, 20 kN of tension each. FD is a diagonal in a panel with real shear across it, so it is heavily loaded.</p>
<p>A centre vertical looks like the most important member in the picture and does nothing at all under symmetric load. Move one load off-centre and it wakes up immediately, which is why you cannot delete it.</p>`,
    },
    {
      id: "statics-q08",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>Section a&ndash;a cuts the Pratt truss shown through three members: the top chord FG, the diagonal FD, and the bottom chord CD. Working with the piece to the <em>left</em> of the cut, find the force in the <strong>diagonal FD</strong> in kN. Report a positive number for tension.</p>`,
      figure: figTrussQ,
      answer: 16.7,
      unit: "kN",
      explanation: `<p>Reactions first. The loading is symmetric (20 kN at C, D and E), so A<sub>y</sub> = B<sub>y</sub> = 60/2 = 30 kN.</p>
<p>Now take everything left of the cut as one rigid body. Its external forces are the 30 kN reaction at A, the 20 kN load at C, and the three cut member forces. Both chords are horizontal, so the diagonal is the only one of the three with a vertical component and a single vertical sum isolates it:</p>
<p class="eq">&Sigma;F<sub>y</sub> = 0: 30 &minus; 20 &minus; F<sub>FD</sub> sin &theta; = 0</p>
<p>The diagonal runs 4 m across and 3 m down, so its length is 5 m and sin &theta; = 3/5 = 0.6:</p>
<p class="eq">F<sub>FD</sub> = 10/0.6 = <strong>16.7 kN (tension)</strong></p>
<p>Read the physics off the equation. 30 &minus; 20 = 10 kN is the <strong>shear carried across that panel</strong>, and the diagonal is the only member that can take it. Hence F<sub>diag</sub> = V<sub>panel</sub>/sin &theta;. Method of joints needs joints A, C and F to reach the same number.</p>`,
    },
    {
      id: "statics-q09",
      type: "mc",
      difficulty: 3,
      prompt: `<p>Staying with that same cut, you now want the top chord. Which point should you sum moments about, and what force does <strong>FG</strong> carry?</p>`,
      figure: figTrussQ,
      choices: [
        "40.0 kN, compression",
        "53.3 kN, tension",
        "80.0 kN, compression",
        "53.3 kN, compression",
      ],
      answer: 3,
      explanation: `<p>Sum moments where the other two cut members intersect. The diagonal FD and the bottom chord CD both pass through joint <strong>D</strong>, so a moment sum there leaves FG alone.</p>
<p>Left-hand piece, moments about D (D is 8 m from A, 4 m from C), counterclockwise positive, FG assumed in tension pulling to the right at a height of 3 m:</p>
<p class="eq">&minus;30(8) + 20(4) &minus; F<sub>FG</sub>(3) = 0</p>
<p class="eq">F<sub>FG</sub> = (&minus;240 + 80)/3 = &minus;53.3 kN &rarr; <strong>53.3 kN compression</strong></p>
<p>Every distractor is a specific mistake. 53.3 kN tension is the sign flip. 80.0 kN compression drops the 20 kN load at C and uses the reaction alone. 40.0 kN compression comes from summing about joint C, a perfectly legal moment centre that happens to leave the diagonal in the equation.</p>
<p>The chord rule gets there in one line. The moment carried across the cut is 240 &minus; 80 = 160 kN&middot;m, resisted as a couple over the 3 m depth: 160/3 = 53.3 kN. Deepen the truss to 4 m and that force falls to 40 kN.</p>`,
    },
    {
      id: "statics-q10",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>Last member from that cut. Sum moments about the upper joint F this time. How much force does the bottom chord <strong>CD</strong> carry, in kN?</p>`,
      figure: figTrussQ,
      answer: 40,
      unit: "kN",
      explanation: `<p>Joint <strong>F</strong> is where the top chord FG and the diagonal FD meet, so a moment sum there wipes out both and leaves CD alone.</p>
<p>F sits 4 m from A horizontally and 3 m above the bottom chord. Taking the left-hand piece, counterclockwise positive, with CD assumed in tension (pulling right, 3 m below F):</p>
<p class="eq">&minus;30(4) + 20(0) + F<sub>CD</sub>(3) = 0</p>
<p class="eq">F<sub>CD</sub> = 120/3 = <strong>40.0 kN (tension)</strong></p>
<p>The 20 kN load at C contributes nothing because it acts directly below F. Zero horizontal offset, zero moment arm. Spotting that saves a term and is exactly why F was the right centre.</p>
<p>The chord couple agrees: 30(4) = 120 kN&middot;m across the section, over the 3 m depth, gives 40 kN. Bottom chord in tension, top chord in compression, as they must be for a sagging simply supported truss. Signs the other way round mean you have flipped something.</p>`,
    },
    {
      id: "statics-q11",
      type: "mc",
      difficulty: 2,
      prompt: `<p>You need the force in one diagonal, six panels into a twelve-panel bridge truss. Nothing else about the truss is asked for. What is the fastest correct route to that single number?</p>`,
      choices: [
        "Walk the method of joints out from the nearer support",
        "Cut the panel and sum vertical forces on one piece",
        "Cut the panel and sum moments about the far support",
        "Solve every joint, then read off that member's force",
      ],
      answer: 1,
      explanation: `<p>Cut the panel. The diagonal is then the only cut member with a vertical component, so one vertical force sum on either free piece gives it directly: F<sub>diag</sub> = V<sub>panel</sub>/sin &theta;. Two equations in total, reactions and then the cut.</p>
<p>Method of joints is correct but slow. Five or six joints to grind through, with every arithmetic slip propagating forward. Summing moments about the far support is a legal equation that fails to eliminate the two chord forces, leaving you one equation and three unknowns.</p>
<p>Say the principle out loud: <em>joints when you want every member, sections when you want one member.</em> A cut through four unknowns will not solve in one step, so find a cut through three or combine two cuts.</p>`,
    },
    {
      id: "statics-q12",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A short link runs from a wall bracket to a machine guard, pinned at both ends, with nothing else touching it. On the <em>guard's</em> free-body diagram, how should the force from that link be drawn?</p>`,
      choices: [
        "As a couple, since the link is pinned at both of its ends.",
        "As equal horizontal and vertical components of known size.",
        "As one unknown force along the line of its two pins.",
        "As a vertical force, because the guard's weight is vertical.",
      ],
      answer: 2,
      explanation: `<p>Two forces act on the link and nothing else, so equilibrium makes them equal, opposite and collinear. The link is straight, so that line is the pin-to-pin axis: one unknown scalar with a known direction. Frictionless pins carry no moment, so a couple is impossible.</p>`,
    },
    {
      id: "statics-q13",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A slender pinned link has a sensor cable clipped to its midpoint, and the cable pulls sideways. Can you still treat the link as a two-force member?</p>`,
      choices: [
        "Yes &mdash; any slender member with a pin at each end is two-force.",
        "Yes, because the side pull is small next to the pin reactions.",
        "No &mdash; a two-force member must be straight and vertically loaded.",
        "No &mdash; a third force between the pins breaks collinearity, so the link now carries bending too.",
      ],
      answer: 3,
      explanation: `<p>The two-force rule is about how many external forces act, not about how the part looks. Add a third force anywhere between the pins and the two end forces can no longer be collinear; the link now carries an internal bending moment as well as axial load, and its pin reactions have components across the axis.</p>
<p>The "it's small" answer is the interesting wrong one, because it is sometimes what an engineer actually does. You just have to say so out loud: "I am neglecting the 20 N clip load against a 4 kN axial force, which changes the pin reaction by under a percent." That is an approximation you own, not a rule you invoked.</p>
<p>It matters on hardware. Route a cable tie or a hose clamp onto a slender tie rod and you have put bending into a member sized for pure tension, with a small section modulus to resist it.</p>`,
    },
    {
      id: "statics-q14",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A bell crank is pinned to the frame at O. A cable pulls on it at A and a pushrod loads it at B, and nothing else touches it. Before writing a single equation, what do you already know about the pin reaction at O?</p>`,
      choices: [
        "With three forces and no couple, it passes through the point where the cable and rod lines cross",
        "It is perpendicular to the line joining the two load points A and B",
        "It is equal and opposite to the larger of the two applied forces",
        "It acts along the line from the pin O to the midpoint of AB",
      ],
      answer: 0,
      explanation: `<p>Exactly three forces act with no applied couple, so the crank is a <strong>three-force member</strong> and the three lines of action must be <strong>concurrent</strong>. Sum moments about the point where the cable and rod lines cross: both of those have zero arm there, so the pin reaction must have zero arm too, and its line passes through the same point.</p>
<p>That hands you the <em>direction</em> of the pin reaction free of charge, before any algebra. One force triangle then closes the problem. Draw the two known forces tip-to-tail and the closing side is the reaction, magnitude and sense included.</p>
<p>Have the exception ready. If the two known forces are parallel they meet at infinity, and the reaction is parallel to them. Degenerate case of the same rule, not a counterexample.</p>`,
    },
    {
      id: "statics-q15",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>The bell crank shown is pinned at O. A vertical 500 N load hangs at A, which sits 0.30 m to the right of and 0.20 m above O. A horizontal cable acts at B, 0.50 m directly above O. At what angle <strong>above the horizontal</strong> does the pin reaction at O act? Give degrees.</p>`,
      figure: figLever,
      answer: 59,
      unit: "degrees above horizontal",
      tolerance: 0.03,
      explanation: `<p>Concurrency is the fast route. Only three forces act, so their lines of action meet at one point. The 500 N load acts on the vertical line x = 0.30 m; the cable acts on the horizontal line y = 0.50 m. They cross at C = (0.30, 0.50), so the pin reaction points from O(0, 0) toward C:</p>
<p class="eq">tan &alpha; = 0.50 / 0.30 = 1.667 &rarr; &alpha; = <strong>59.0&deg;</strong></p>
<p>Components confirm it. Moments about O: 0.30(&minus;500) &minus; 0.20(0) = &minus;150 N&middot;m from the load, so the cable supplies +150 N&middot;m with an arm of 0.50 m &rarr; T = 300 N pulling in the &minus;x direction. Then &Sigma;F gives R = (+300, +500) N, so |R| = &radic;(300&sup2; + 500&sup2;) = 583 N at tan<sup>&minus;1</sup>(500/300) = 59.0&deg;. Same answer, three times the work.</p>
<p>What concurrency does not give you is the magnitude. That still costs one equation. But settling the direction first lets you sketch the force triangle and catch a wrong sign before committing.</p>`,
    },
    {
      id: "statics-q16",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A 2.0 m horizontal boom is pinned to a wall at A and carries a 600 N load hanging at its free end B. A cable runs from B back to the wall at 40&deg; above the boom. What tension does the cable carry, in N?</p>`,
      figure: figBoom,
      answer: 933,
      unit: "N",
      tolerance: 0.025,
      explanation: `<p>Sum moments about the wall pin so both pin components disappear. Only the vertical component of the cable tension has an arm about A. The horizontal component runs straight along the boom axis and through the pin.</p>
<p class="eq">&Sigma;M<sub>A</sub> = 0: T sin 40&deg;(2.0) &minus; 600(2.0) = 0</p>
<p class="eq">T = 600 / sin 40&deg; = 600 / 0.643 = <strong>933 N</strong></p>
<p>The boom length cancels because load and cable both act at B. Move the cable to the boom's midpoint and its arm halves, so the tension doubles to 1.87 kN.</p>
<p>933 N of cable to hold 600 N, plus a horizontal pin thrust of T cos 40&deg; = 715 N pressing the boom into the wall. Shallow guy angles are expensive. At 20&deg; the same boom needs 1.75 kN.</p>`,
    },
    {
      id: "statics-q17",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A 1.2 m long, 40 kg uniform access panel is hinged along its lower edge and propped open at 30&deg; above horizontal by a strut that acts <strong>perpendicular to the panel</strong>, 0.35 m from the hinge. What strut force is required, in N? Use g = 9.81 m/s&sup2;.</p>`,
      figure: figPanel,
      answer: 583,
      unit: "N",
      tolerance: 0.025,
      explanation: `<p>Weight: W = 40(9.81) = 392.4 N, acting at the panel's midpoint, 0.6 m along it from the hinge.</p>
<p>Take moments about the hinge. The weight is vertical while the panel is inclined, so its moment arm is the <em>horizontal</em> projection of that 0.6 m:</p>
<p class="eq">M<sub>W</sub> = 392.4 &times; 0.6 cos 30&deg; = 392.4 &times; 0.5196 = 203.9 N&middot;m</p>
<p>The strut acts perpendicular to the panel, so its full 0.35 m distance <em>is</em> the moment arm, with no cosine on it:</p>
<p class="eq">F = 203.9 / 0.35 = <strong>583 N</strong></p>
<p>Applying cos 30&deg; to both terms, or to neither, is where this goes wrong. Only the weight needs projecting, because only the weight is inclined relative to the panel.</p>
<p>Now close the panel toward horizontal. cos &theta; grows toward 1, the weight moment rises to 235 N&middot;m and the strut force climbs to 673 N. The strut is worst-loaded near the closed position, which is exactly where a gas strut has the least gas force. That mismatch is why lift-assist geometry is so fussy to get right.</p>`,
    },
    {
      id: "statics-q18",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A 100 N weight hangs from a knot held by two cables, each running up to the ceiling at 30&deg; <strong>above the horizontal</strong> as shown. What is the tension in each cable, in N?</p>`,
      figure: figCables,
      answer: 100,
      unit: "N",
      explanation: `<p class="eq">2T sin 30&deg; = 100 &rarr; 2T(0.5) = 100 &rarr; T = <strong>100 N</strong></p>
<p>Each cable is 30&deg; above horizontal, so each contributes T sin 30&deg; upward and each ends up carrying the whole weight despite there being two of them. At 10&deg; it is 288 N each; at 5&deg;, 574 N.</p>`,
    },
    {
      id: "statics-q19",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A 500 N sign hangs from a ring held by two cables of unequal slope: the left cable runs up at 45&deg; to the horizontal, the right cable at 30&deg;. What is the tension in the <strong>left</strong> cable, in N?</p>`,
      answer: 448,
      unit: "N",
      tolerance: 0.025,
      explanation: `<p>Two unknowns, two equations at the ring. Horizontal components must cancel:</p>
<p class="eq">T<sub>R</sub> cos 30&deg; = T<sub>L</sub> cos 45&deg; &rarr; T<sub>L</sub> = 1.225 T<sub>R</sub></p>
<p>Vertical components must carry the sign:</p>
<p class="eq">T<sub>L</sub> sin 45&deg; + T<sub>R</sub> sin 30&deg; = 500</p>
<p>Substituting: 1.225 T<sub>R</sub>(0.7071) + 0.5 T<sub>R</sub> = 500 &rarr; 1.366 T<sub>R</sub> = 500 &rarr; T<sub>R</sub> = 366 N, and T<sub>L</sub> = <strong>448 N</strong>.</p>
<p>The <em>steeper</em> cable takes more, because it also has to balance the shallower cable's larger horizontal pull. The instinct that the flatter cable always sees more tension comes from the symmetric case and does not survive unequal angles. Solve both components rather than guessing.</p>`,
    },
    {
      id: "statics-q20",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A crane hook lifts a 2.0 kN load through two symmetric slings, each 25&deg; <strong>from the vertical</strong>. What tension does each sling carry, in kN?</p>`,
      answer: 1.1,
      unit: "kN",
      tolerance: 0.025,
      explanation: `<p>Symmetry cancels the horizontals, and the angle is measured from the vertical, so each sling contributes T cos 25&deg; upward:</p>
<p class="eq">2T cos 25&deg; = 2.0 kN</p>
<p class="eq">T = 2.0 / [2(0.9063)] = <strong>1.10 kN</strong></p>
<p>Reach for sin 25&deg; out of habit and you get 2.37 kN, and you specify slings twice as strong as needed.</p>`,
    },
    {
      id: "statics-q21",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A 6 m simply supported beam carries 6 kN/m of uniform load over its <strong>left half only</strong>, as shown. Find the vertical reaction at <strong>A</strong>, in kN.</p>`,
      figure: figHalfUDL,
      answer: 13.5,
      unit: "kN",
      explanation: `<p>For reactions, the distributed load may be replaced by its resultant: R = 6 kN/m &times; 3 m = 18 kN acting at the centroid of the loaded strip, 1.5 m from A.</p>
<p class="eq">&Sigma;M<sub>A</sub> = 0: B<sub>y</sub>(6) &minus; 18(1.5) = 0 &rarr; B<sub>y</sub> = 4.5 kN</p>
<p class="eq">&Sigma;F<sub>y</sub> = 0: A<sub>y</sub> = 18 &minus; 4.5 = <strong>13.5 kN</strong></p>
<p>The load hugs the left support, so A takes the large majority: 13.5 of 18 kN, or 75%. Putting the resultant at midspan of the <em>beam</em> (3 m) instead of the centroid of the <em>loaded region</em> (1.5 m) gives an even 9/9 split, and that is the usual error.</p>
<p>The substitution is good for reactions only. You cannot then use that point load to draw the shear and moment diagrams, because the internal distribution is nothing like it.</p>`,
    },
    {
      id: "statics-q22",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A beam on two supports 3 m apart carries a 4 kN downward point load at midspan <em>and</em> a 6 kN&middot;m clockwise couple, also applied at midspan. Find the reaction at the right support <strong>B</strong>, in kN.</p>`,
      answer: 4,
      unit: "kN",
      explanation: `<p>Take counterclockwise as positive and sum moments about A. The point load acts 1.5 m from A and makes a clockwise moment of 4(1.5) = 6 kN&middot;m; the applied couple adds another 6 kN&middot;m clockwise <em>wherever it is drawn</em>:</p>
<p class="eq">&Sigma;M<sub>A</sub> = 0: B<sub>y</sub>(3) &minus; 4(1.5) &minus; 6 = 0</p>
<p class="eq">B<sub>y</sub> = 12/3 = <strong>4.0 kN</strong></p>
<p>Then A<sub>y</sub> = 4 &minus; 4 = <strong>0</strong>. The couple contributes no vertical force at all, yet it has pushed the entire 4 kN onto one support and unloaded the other completely.</p>
<p>A couple is a <strong>free vector</strong>: its 6 kN&middot;m enters &Sigma;M<sub>A</sub> at full value with no lever arm, and it would enter &Sigma;M<sub>B</sub> the same way. Then look at what the reactions came out as. A support reading zero is one design change from lifting off.</p>`,
    },
    {
      id: "statics-q23",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A torque wrench clicks at 80 N&middot;m. It is driving a socket through a straight 200 mm extension bar that is <em>coaxial</em> with the fastener. What torque reaches the fastener?</p>`,
      choices: [
        "96 N&middot;m, because the 0.2 m extension adds its own lever arm",
        "80 N&middot;m, because a couple transfers along the axis",
        "400 N&middot;m, because torque scales inversely with the 0.2 m arm",
        "16 N&middot;m, because the 0.2 m arm divides the applied torque",
      ],
      answer: 1,
      explanation: `<p>A pure torque is a <strong>couple</strong>, and a couple is a free vector: its moment is the same about every point, so it transmits along a coaxial shaft unchanged. The extension length does not enter. Every distractor invents a lever arm with no perpendicular offset to go with it.</p>
<p>What does change the reading is a <strong>crowfoot or offset adapter</strong>, which moves the socket a distance <em>e</em> along the wrench handle. That adds real offset, and the fastener sees</p>
<p class="eq">T<sub>fastener</sub> = T<sub>set</sub> &times; (L + e)/L</p>
<p>with L the wrench's own effective length. A 75 mm crowfoot on a 375 mm wrench over-torques by 20%. Turn the crowfoot 90&deg; to the handle and the correction vanishes again, because <em>e</em> is then perpendicular to the handle and adds no arm in the direction that matters.</p>`,
    },
    {
      id: "statics-q24",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A flat plate is held by three links. The count says three unknown reactions against three equilibrium equations, so it looks determinate &mdash; but the three link axes all intersect at a single point. What actually happens?</p>`,
      choices: [
        "It is determinate; concurrency only affects the algebra, not stability",
        "It is indeterminate to the first degree because of the shared point",
        "It is determinate but the reactions become sensitive to link stiffness",
        "It is a mechanism &mdash; every link has zero arm about that point, so nothing resists rotation",
      ],
      answer: 3,
      explanation: `<p>Every link force has zero moment arm about the shared point, so &Sigma;M about that point contains <em>no</em> unknowns. Any applied load with a moment about that point cannot be balanced, and the plate rotates. This is <strong>improper constraint</strong>: the reaction count is right, the arrangement is not.</p>
<p>The counting rule is necessary and not sufficient. Two arrangements fail it: three reactions concurrent, as here, and three reactions all <strong>parallel</strong>, in which case nothing resists translation across them. Both give three equations that are not independent, and the giveaway when you try to solve is a singular system.</p>
<p>Where this bites: a fixture with three pins that happen to lie on one circle, a weldment tacked with three links radiating from a common node, an FEA model constrained by three coincident-axis rods. The solver reports a singularity or a huge rigid-body displacement. The fix is geometric, moving one constraint off the concurrency point, never numerical.</p>`,
    },
    {
      id: "statics-q25",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A beam sits on a pin at A and rollers at B and C. A teammate tries to find all the reactions from &Sigma;F<sub>x</sub>, &Sigma;F<sub>y</sub> and &Sigma;M alone and gets stuck. What is missing?</p>`,
      choices: [
        "Nothing &mdash; three supports always give three usable equations.",
        "A friction coefficient at each roller to close the moment sum.",
        "A compatibility condition; one reaction is redundant, so the split depends on how the beam bends.",
        "A dynamic term, since extra supports forbid static equilibrium.",
      ],
      answer: 2,
      explanation: `<p>Unknowns: pin (2) + roller (1) + roller (1) = <strong>4</strong>. A single rigid body supplies only <strong>3</strong> equations, so the beam is statically indeterminate to the first degree. Statics alone cannot split the load between B and C; the split depends on how much the beam bends, so you need a deformation compatibility condition plus EI. Zero deflection at the middle support, for instance.</p>
<p>In hardware that means the reactions now depend on <strong>stiffness, fit-up and settlement</strong>. Shim the middle support 0.5 mm high and you have manufactured a load. Let a foundation settle and the load redistributes. A determinate beam does not care.</p>
<p>Name the trade. Indeterminate structures are stiffer, lighter for the same load, and fail gracefully because load redistributes, which is why bridges are continuous. The price is thermal and misfit stress, which is why they also get expansion bearings.</p>`,
    },
    {
      id: "statics-q26",
      type: "mc",
      difficulty: 2,
      prompt: `<p>Real truss joints are welded gusset plates, not frictionless pins, yet we analyse them as pinned and assume pure axial member forces. When does that idealisation stop being safe?</p>`,
      choices: [
        "When members are stocky or loads land between joints, so secondary bending is no longer small",
        "When the truss is statically indeterminate rather than determinate",
        "Never &mdash; the pinned model is conservative for any truss geometry",
        "Whenever a member carries compression instead of tension",
      ],
      answer: 0,
      explanation: `<p>The pinned model works because a rigid joint does induce bending, but in a <em>slender</em> member that secondary bending stress is small next to the axial stress, typically a few percent. Two things break that.</p>
<p><strong>Stocky members.</strong> Secondary moment scales with member stiffness EI/L, so short deep members attract real bending. Start worrying once span-to-depth drops below about 10.</p>
<p><strong>Loads between joints.</strong> Hang a hoist or a walkway off mid-member and it is not a two-force member at all. It is a beam-column, and it needs checking for combined axial plus bending. This is the failure mode you actually see in the field, when someone bolts a service line to a chord.</p>
<p>Two more earn credit if you raise them. Joint eccentricity, where member centrelines do not meet at a point, puts a real moment into the connection. And fatigue: that small secondary bending stress at a weld toe drives crack initiation even though it is irrelevant for static strength.</p>`,
    },
  ],

  qna: [
    {
      id: "statics-qa01",
      q: `<p>When do you reach for the method of sections instead of the method of joints, and how do you set the cut up?</p>`,
      a: `<p>Method of joints when I need <em>every</em> member; method of sections when I need <em>one</em> member that sits deep in the truss. Joints costs me two equations per joint and I have to walk inward from a support, so a member six panels in costs six joints and six chances to propagate an arithmetic slip. A section gets it in two steps.</p>
<p>Setup: solve the support reactions first from the whole truss. Then cut a single line through <strong>at most three</strong> members whose forces I do not know, throw away one side, and treat what remains as a rigid body with the three cut forces as external unknowns. Then I choose the equation that isolates the member I want. For the diagonal, sum vertical forces, since it is usually the only cut member with a vertical component, so F sin &theta; is the panel shear. For a chord, sum moments about the joint where the other two cut members intersect, and the chord force is the moment across the cut divided by the truss depth.</p>
<p>Two gotchas. A cut that passes through four unknowns needs either a different cut or a second cut combined with the first. And the cut does not have to be a straight vertical line: a stepped or angled cut is perfectly legal as long as it fully separates the truss and crosses three unknown members.</p>`,
    },
    {
      id: "statics-qa02",
      q: `<p>Explain the three-force member rule and give me a case where it saves real time.</p>`,
      a: `<p>If exactly three forces act on a rigid body and there is no applied couple, the three lines of action must be <strong>concurrent</strong>. They meet at one point. The proof is one sentence: sum moments about the intersection of any two, both vanish, so the third must pass through that point too. The degenerate case is all three parallel, meeting at infinity.</p>
<p>What it buys is the <em>direction</em> of an unknown force with zero algebra. The standard case is a member pinned at one end with two known-direction loads. I find where those two lines cross, and the pin reaction points from the pin to that crossing. Then I draw the three forces as a closed triangle and read the magnitudes off, or write one &Sigma;F equation now that the direction is fixed.</p>
<p>Concrete example: a bell crank with a cable pulling at one arm and a pushrod at the other. Component algebra means two unknown reaction components plus one unknown force magnitude, so three unknowns and three equations. Concurrency reduces it to two unknown magnitudes and a force triangle I can sketch and check by eye. On a whiteboard that is the difference between two minutes and eight.</p>
<p>It is also a fast check on someone else's answer. If a reported pin reaction does not point at the concurrency point on a three-force body, the answer is wrong.</p>`,
    },
    {
      id: "statics-qa03",
      q: `<p>Why do engineers usually sum moments about a support point first?</p>`,
      a: `<p>Because a force whose line of action passes through the moment centre contributes nothing to that equation. A pin carries two unknown components and both pass through the pin, so &Sigma;M about the pin eliminates two unknowns in a single line and typically leaves one equation with one unknown in it, the far reaction. Then &Sigma;F<sub>y</sub> and &Sigma;F<sub>x</sub> mop up.</p>
<p>It is a convenience, not a rule. Equilibrium holds about every point, and I am free to use three moment equations about three non-collinear points instead of force equations if that is cleaner. What matters is that I only ever get three independent equations in 2D, however I spend them.</p>
<p>The same instinct generalises. In a truss section, I put the moment centre where two of the three cut members intersect. In a frame, on the connecting pin, to kill that pin's two unknowns. In a bracket problem, on the bolt. Saying which point and why, "about B, because both pin components pass through it", is the sentence that tells an interviewer I am choosing rather than grinding.</p>`,
    },
    {
      id: "statics-qa04",
      q: `<p>What is a two-force member, and why does truss analysis assume members carry only axial load?</p>`,
      a: `<p>A two-force member has external forces applied at exactly two points and nowhere else: no mid-span load, no applied couple, negligible self-weight. Equilibrium of that member alone then forces the two end forces to be equal, opposite and <strong>collinear</strong>. Equal and opposite from &Sigma;F, collinear from &Sigma;M, because any offset would leave an unbalanced couple. The member is straight, so that common line is the member axis and the load is purely axial.</p>
<p>A truss is idealised to make every member qualify: frictionless pins at the ends, loads applied only at joints. That is why truss members are sized for tension or column buckling and never for bending.</p>
<p>The value is in the bookkeeping. A general pin connection contributes two unknown components; a two-force member contributes one unknown scalar with a known direction. Spotting one before you start writing equations is the biggest single time saver in a frame problem.</p>
<p>Know when it fails. Load a member between its pins, or weld the ends so a moment can transfer, and it is gone. The curved member is the subtle one: its end forces are still collinear along the chord joining the pins, but the member is off that line, so it carries bending internally. Then it needs a full FBD like any frame member.</p>`,
    },
    {
      id: "statics-qa05",
      q: `<p>Determinate versus indeterminate — how do you classify a structure, and where does the simple count let you down?</p>`,
      a: `<p>Start with the count: unknown reactions versus available equilibrium equations, three per rigid body in 2D (six in 3D), plus one extra equation per internal release such as a hinge. Equal means determinate and statics alone solves it. More unknowns means indeterminate, and closing it needs compatibility: deflections and member stiffnesses. Fewer means a mechanism.</p>
<p>Where the count lets you down is that it is <strong>necessary but not sufficient</strong>. Three reactions in 2D can still be a mechanism if they are <em>improperly arranged</em>. All three lines of action concurrent at a point and nothing resists rotation about that point. All three parallel and nothing resists translation across them. The count says determinate, the structure moves. You spot it when the equations come out singular, or in FEA as a rigid-body mode.</p>
<p>The trade-offs matter more than the label. Indeterminate structures are stiffer, usually lighter for the same load, and redundant: lose one load path and the rest redistribute instead of collapsing. The price is that reactions now depend on stiffness, so thermal expansion, foundation settlement and manufacturing misfit all generate real stress. That is why long bridges get expansion bearings, and why a three-legged stool never rocks but a four-legged one does.</p>`,
    },
    {
      id: "statics-qa06",
      q: `<p>How do you find zero-force members quickly, and why would you keep them in the design?</p>`,
      a: `<p>Two inspection rules, applied only at joints with <strong>no applied load and no support reaction</strong>. If exactly two non-collinear members meet, both are zero-force, because neither can balance the other's off-axis component. If exactly three members meet and two of them are collinear, the odd one out is zero-force. Apply them iteratively, because deleting one zero-force member can turn a four-member joint into a three-member joint and expose the next one.</p>
<p>Then I check by symmetry. For a symmetric truss under symmetric load, the centre vertical of a Pratt truss usually comes out zero, which surprises people because it looks like the most important member on the drawing.</p>
<p>Why keep them: they brace long compression chords, cutting the unbraced length and roughly quadrupling the Euler buckling load of the chord segment. They hold geometry during erection, before the truss is fully loaded. And zero-force is true for <em>one</em> load case only. Move the load off-centre, add wind, add a moving crane trolley, and those members pick up force at once. So the answer is that they carry nothing here and are structurally essential anyway.</p>`,
    },
    {
      id: "statics-qa07",
      q: `<p>A bolted bracket takes an in-plane load applied well off the bolt-group centroid. How do you find the worst bolt?</p>`,
      a: `<p>Move the load to the centroid and account for the move with a couple: the group sees a <strong>direct shear</strong> P and a <strong>torsional moment</strong> M = P&middot;e, where e is the perpendicular offset from the load's line of action to the bolt-group centroid.</p>
<p>Then two components on each bolt. Direct shear splits equally if the bolts are the same size: P/n, parallel to P on every bolt. Torsional shear is proportional to distance from the centroid and acts perpendicular to the radius: F<sub>i</sub> = M r<sub>i</sub> / &Sigma;r<sub>j</sub>&sup2;, summed over all bolts. The critical bolt is the one where those two vectors line up best, usually the outermost bolt on the side the load leans toward. Add them as <strong>vectors</strong>, never as magnitudes. Adding magnitudes is the classic overestimate and it is the error interviewers look for.</p>
<p>Worked shape of the answer: four bolts on a 100 &times; 60 rectangle, 5 kN applied 150 mm off the centroid. &Sigma;r&sup2; = 4(50&sup2; + 30&sup2;) = 13600 mm&sup2;. Direct = 1.25 kN each; torsional = 750000 &times; 58.3/13600 = 3.22 kN. At the worst bolt the vector sum is about 4.34 kN, not the 4.47 kN you get by adding magnitudes, and 3.5&times; the naive P/n.</p>
<p>Then the caveats that show hardware sense. This assumes a shear-bearing joint with identical bolts and rigid plates. A friction-grip joint carries load by preload instead and is checked against slip. And widening the bolt pattern beats adding a bolt in the middle, because &Sigma;r&sup2; grows with the square of the spread.</p>`,
    },
    {
      id: "statics-qa08",
      q: `<p>A ladder leans against a frictionless wall. What keeps it up, and how do you set the problem up?</p>`,
      a: `<p>Floor friction is the only thing preventing slip. FBD of the ladder: weight W at midlength, a horizontal normal N<sub>w</sub> from the frictionless wall with no vertical component available, and at the floor a normal N<sub>f</sub> plus friction f pointing toward the wall.</p>
<p>Equilibrium: N<sub>f</sub> = W (plus any climber's weight), and f = N<sub>w</sub>. Taking moments about the floor contact eliminates both floor unknowns and gives N<sub>w</sub> directly: for a bare ladder at angle &theta; to the floor, N<sub>w</sub> = (W/2)cot &theta;. Slip impends when f reaches &mu;N<sub>f</sub>, which gives tan &theta;<sub>min</sub> = 1/(2&mu;).</p>
<p>Three things worth saying. A shallower ladder needs more friction, because the cot &theta; term blows up as the ladder flattens. A climber's weight enters with a lever arm proportional to how far up they are, so the ladder is most likely to slip when they are near the <em>top</em>, which is the opposite of most people's intuition. And if the wall has friction too the problem goes indeterminate: four unknowns against three equations, and you have to assume impending slip at both contacts simultaneously to close it.</p>`,
    },
    {
      id: "statics-qa09",
      q: `<p>A tall cabinet is going to be pushed across a floor. How do you decide whether it slides or tips, and what would you change?</p>`,
      a: `<p>Compute both thresholds and report the smaller. Sliding starts at P = &mu;W. Tipping starts when the normal force has migrated all the way to the leading edge and the applied moment balances the weight moment: P&middot;h = W&middot;(b/2), so P = W b / 2h, with h the height of the push and b the base width.</p>
<p>Setting them equal gives the crossover: it tips first when <strong>h &gt; b/(2&mu;)</strong>. That compact form is worth carrying, because it says the decision is pure geometry against friction and the weight cancels out entirely. Tall and narrow on grippy floor tips; short and wide on slick floor slides.</p>
<p>Numbers make it concrete: a 1000 N cabinet 0.8 m wide and 1.2 m tall, pushed at the top with &mu; = 0.5, slides at 500 N but tips at 1000(0.4)/1.2 = 333 N. It tips, and no amount of extra weight changes that, because both thresholds scale with W.</p>
<p>What I would change, biggest effect first. Push lower: halving h doubles the tipping force and costs nothing. Widen the base or add outriggers, since the threshold is linear in b. Lower the centre of gravity by putting mass in the bottom shelf, which raises the tipping threshold without touching sliding. Reducing &mu; makes it slide sooner, which is often the <em>desired</em> failure mode. A cabinet that skids is a nuisance; one that topples is an injury.</p>`,
    },
    {
      id: "statics-qa10",
      q: `<p>Why can one person hold a ship with a rope round a bollard? Where else does that maths show up?</p>`,
      a: `<p>Capstan friction. Every element of rope in contact with the post adds friction proportional to the local normal pressure, which is itself proportional to the local tension. So tension grows <em>exponentially</em> with wrap angle rather than linearly:</p>
<p>T<sub>2</sub> = T<sub>1</sub>e<sup>&mu;&beta;</sup>, with &beta; the total wrap in radians. With &mu; = 0.3, one turn gives a ratio of 6.6, two turns 43, three turns 286. A 100 N grip holds 28 kN after three turns. The post radius never appears, only how far around the rope goes and how rough the contact is, which is why a thin bollard works as well as a fat one.</p>
<p>Same equation elsewhere: band brakes, where braking torque is (T<sub>2</sub> &minus; T<sub>1</sub>)r with the ratio capped by e<sup>&mu;&beta;</sup>; flat belt drives, where you buy capacity with an idler that adds wrap rather than with more tension; rope rescue and climbing belay devices; and V-belts, which behave as if &mu; were replaced by &mu;/sin(&alpha;/2), so a 38&deg; groove roughly triples the effective friction.</p>
<p>The insight worth volunteering: only the product &mu;&beta; matters, and it sits in an exponent. Adding wrap is usually free and reliable. Raising &mu; means a friction surface that wears, glazes and changes with oil and water. So the answer to "we need more grip" is nearly always more wrap.</p>`,
    },
    {
      id: "statics-qa11",
      q: `<p>Walk me through how you attack a frame or machine problem — a pin-connected assembly rather than a single body.</p>`,
      a: `<p>First I classify. If every member is loaded only at its two pins, it is a truss and I use joints or sections. If any member carries load between its pins, it bends, and I am in frame territory, which means dismembering.</p>
<p>Then the sequence. <strong>One:</strong> scan for two-force members and mark them, because each one converts two unknown pin components into one scalar along a known line. <strong>Two:</strong> take the whole assembly as one body first, since internal pin forces cancel in pairs and three equations often give me the external reactions immediately. <strong>Three:</strong> only then take the assembly apart, drawing each member separately with the connecting pin force shown equal and opposite on the two mating members. <strong>Four:</strong> on each member's FBD, sum moments about the connecting pin to kill its two unknowns.</p>
<p>Bookkeeping check before I start: n members give 3n equations, and unknowns are the external reactions plus two per internal pin. A two-member frame with a pin support, a roller, and one connecting pin has six equations and six unknowns, so it is determinate.</p>
<p>The errors I actively look for. Drawing the same pin force in the same direction on both members instead of reversing it, which is the classic and shows up as a force balance that will not close. Forgetting that a pulley pin transmits the vector sum of both rope tensions. And treating a member as two-force when a load or a pin from a third member lands between its ends.</p>`,
    },
  ],
};

export default content;
