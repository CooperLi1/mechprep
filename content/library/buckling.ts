import type { TopicContent } from "../types";

// ---------------------------------------------------------------------------
// Column Buckling & Stability
//
// Figure ids are prefixed bk1-…bk3- here; the question-bank figures in
// buckling.extra.ts use bk4-…bk16-.
// NOTE: never put HTML <sub>/<sup> inside an SVG <text>. sub/sup are on the
// HTML5 foreign-content breakout list, so the parser LEAVES the <svg> at that
// tag and discards every element after it. Use
// <tspan baseline-shift="sub" font-size="9">…</tspan>.
// ---------------------------------------------------------------------------

// Lesson fig 1 — the four ideal end conditions drawn with the CORRECT
// fundamental mode shape for each, with K, KL and the P_cr ratio labelled.
// Curves are sampled from the exact mode shapes:
//   pinned-pinned  v = sin(pi s)                       K = 1.0
//   fixed-fixed    v = (1 - cos(2 pi s))/2             K = 0.5, inflections at L/4, 3L/4
//   fixed-pinned   tan(kL) = kL, kL = 4.4934           K = 0.7, inflection at 0.3L from the fixed end
//   fixed-free     v = 1 - cos(pi u/2)                 K = 2.0
const figModes = `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bk1-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" fill="#334155" font-weight="600">Same column, same section: the end restraint sets K</text>

  <!-- undeformed axes -->
  <line x1="62" y1="72" x2="62" y2="218" stroke="#94a3b8" stroke-dasharray="4 4"/>
  <line x1="168" y1="72" x2="168" y2="218" stroke="#94a3b8" stroke-dasharray="4 4"/>
  <line x1="274" y1="72" x2="274" y2="218" stroke="#94a3b8" stroke-dasharray="4 4"/>
  <line x1="380" y1="72" x2="380" y2="218" stroke="#94a3b8" stroke-dasharray="4 4"/>

  <!-- 1: pinned-pinned, single half-sine -->
  <path d="M62,68 L64.7,74.2 L67.4,80.5 L70,86.8 L72.5,93 L74.8,99.2 L76.8,105.5 L78.7,111.8 L80.2,118 L81.4,124.2 L82.3,130.5 L82.8,136.8 L83,143 L82.8,149.2 L82.3,155.5 L81.4,161.8 L80.2,168 L78.7,174.2 L76.8,180.5 L74.8,186.8 L72.5,193 L70,199.2 L67.4,205.5 L64.7,211.8 L62,218" fill="none" stroke="#1d4ed8" stroke-width="2.6"/>
  <line x1="48" y1="68" x2="76" y2="68" stroke="#334155" stroke-width="2"/>
  <circle cx="62" cy="68" r="4.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <line x1="48" y1="218" x2="76" y2="218" stroke="#334155" stroke-width="2"/>
  <circle cx="62" cy="218" r="4.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <line x1="50" y1="228" x2="56" y2="220" stroke="#64748b"/>
  <line x1="60" y1="228" x2="66" y2="220" stroke="#64748b"/>
  <line x1="70" y1="228" x2="76" y2="220" stroke="#64748b"/>

  <!-- 2: fixed-fixed, cosine bulge with inflections at the quarter points -->
  <path d="M168,68 L168.4,74.2 L169.4,80.5 L171.1,86.8 L173.2,93 L175.8,99.2 L178.5,105.5 L181.2,111.8 L183.8,118 L185.9,124.2 L187.6,130.5 L188.6,136.8 L189,143 L188.6,149.2 L187.6,155.5 L185.9,161.8 L183.8,168 L181.2,174.2 L178.5,180.5 L175.8,186.8 L173.2,193 L171.1,199.2 L169.4,205.5 L168.4,211.8 L168,218" fill="none" stroke="#1d4ed8" stroke-width="2.6"/>
  <line x1="150" y1="68" x2="186" y2="68" stroke="#334155" stroke-width="3.5"/>
  <line x1="152" y1="60" x2="158" y2="67" stroke="#64748b"/>
  <line x1="178" y1="60" x2="184" y2="67" stroke="#64748b"/>
  <line x1="150" y1="218" x2="186" y2="218" stroke="#334155" stroke-width="3.5"/>
  <line x1="152" y1="228" x2="158" y2="220" stroke="#64748b"/>
  <line x1="163" y1="228" x2="169" y2="220" stroke="#64748b"/>
  <line x1="174" y1="228" x2="180" y2="220" stroke="#64748b"/>
  <circle cx="178.5" cy="105.5" r="3.5" fill="#fff" stroke="#1d4ed8" stroke-width="1.8"/>
  <circle cx="178.5" cy="180.5" r="3.5" fill="#fff" stroke="#1d4ed8" stroke-width="1.8"/>
  <line x1="197" y1="105.5" x2="197" y2="180.5" stroke="#1d4ed8" stroke-width="1"/>
  <line x1="193" y1="105.5" x2="201" y2="105.5" stroke="#1d4ed8" stroke-width="1"/>
  <line x1="193" y1="180.5" x2="201" y2="180.5" stroke="#1d4ed8" stroke-width="1"/>
  <text x="203" y="147" fill="#1d4ed8" font-size="11">0.5L</text>

  <!-- 3: fixed(bottom)-pinned(top) -->
  <path d="M274,68 L277.5,74.2 L280.9,80.5 L284.1,86.8 L287,93 L289.5,99.2 L291.6,105.5 L293.2,111.8 L294.4,118 L294.9,124.2 L294.9,130.5 L294.5,136.8 L293.5,143 L292.1,149.2 L290.4,155.5 L288.4,161.8 L286.3,168 L284,174.2 L281.8,180.5 L279.7,186.8 L277.8,193 L276.2,199.2 L275,205.5 L274.3,211.8 L274,218" fill="none" stroke="#1d4ed8" stroke-width="2.6"/>
  <line x1="260" y1="68" x2="288" y2="68" stroke="#334155" stroke-width="2"/>
  <circle cx="274" cy="68" r="4.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <line x1="256" y1="218" x2="292" y2="218" stroke="#334155" stroke-width="3.5"/>
  <line x1="258" y1="228" x2="264" y2="220" stroke="#64748b"/>
  <line x1="269" y1="228" x2="275" y2="220" stroke="#64748b"/>
  <line x1="280" y1="228" x2="286" y2="220" stroke="#64748b"/>
  <circle cx="284.5" cy="172.9" r="3.5" fill="#fff" stroke="#1d4ed8" stroke-width="1.8"/>
  <line x1="306" y1="68" x2="306" y2="172.9" stroke="#1d4ed8" stroke-width="1"/>
  <line x1="302" y1="68" x2="310" y2="68" stroke="#1d4ed8" stroke-width="1"/>
  <line x1="302" y1="172.9" x2="310" y2="172.9" stroke="#1d4ed8" stroke-width="1"/>
  <text x="312" y="124" fill="#1d4ed8" font-size="11">0.7L</text>

  <!-- 4: fixed(bottom)-free(top), quarter cosine -->
  <path d="M401,68 L399.6,74.2 L398.3,80.5 L396.9,86.8 L395.6,93 L394.2,99.2 L393,105.5 L391.7,111.8 L390.5,118 L389.3,124.2 L388.2,130.5 L387.2,136.8 L386.2,143 L385.2,149.2 L384.3,155.5 L383.5,161.8 L382.8,168 L382.2,174.2 L381.6,180.5 L381.1,186.8 L380.7,193 L380.4,199.2 L380.2,205.5 L380,211.8 L380,218" fill="none" stroke="#1d4ed8" stroke-width="2.6"/>
  <line x1="362" y1="218" x2="398" y2="218" stroke="#334155" stroke-width="3.5"/>
  <line x1="364" y1="228" x2="370" y2="220" stroke="#64748b"/>
  <line x1="375" y1="228" x2="381" y2="220" stroke="#64748b"/>
  <line x1="386" y1="228" x2="392" y2="220" stroke="#64748b"/>
  <text x="406" y="66" fill="#64748b" font-size="11">free</text>

  <!-- applied loads -->
  <line x1="62" y1="38" x2="62" y2="60" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bk1-load)"/>
  <text x="70" y="50" fill="#dc2626" font-size="11">P</text>
  <line x1="168" y1="38" x2="168" y2="52" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bk1-load)"/>
  <text x="176" y="46" fill="#dc2626" font-size="11">P</text>
  <line x1="274" y1="38" x2="274" y2="60" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bk1-load)"/>
  <text x="282" y="50" fill="#dc2626" font-size="11">P</text>
  <line x1="401" y1="38" x2="401" y2="60" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bk1-load)"/>
  <text x="409" y="50" fill="#dc2626" font-size="11">P</text>

  <!-- captions -->
  <line x1="20" y1="240" x2="440" y2="240" stroke="#e2e8f0"/>
  <text x="62" y="256" text-anchor="middle" fill="#334155" font-size="12">pinned-pinned</text>
  <text x="168" y="256" text-anchor="middle" fill="#334155" font-size="12">fixed-fixed</text>
  <text x="274" y="256" text-anchor="middle" fill="#334155" font-size="12">fixed-pinned</text>
  <text x="380" y="256" text-anchor="middle" fill="#334155" font-size="12">fixed-free</text>
  <text x="62" y="274" text-anchor="middle" fill="#1d4ed8" font-weight="600">K = 1.0</text>
  <text x="168" y="274" text-anchor="middle" fill="#1d4ed8" font-weight="600">K = 0.5</text>
  <text x="274" y="274" text-anchor="middle" fill="#1d4ed8" font-weight="600">K = 0.7</text>
  <text x="380" y="274" text-anchor="middle" fill="#1d4ed8" font-weight="600">K = 2.0</text>
  <text x="62" y="291" text-anchor="middle" fill="#64748b" font-size="11">P = 1.0 &times; base</text>
  <text x="168" y="291" text-anchor="middle" fill="#64748b" font-size="11">4.0 &times;</text>
  <text x="274" y="291" text-anchor="middle" fill="#64748b" font-size="11">2.0 &times;</text>
  <text x="380" y="291" text-anchor="middle" fill="#64748b" font-size="11">0.25 &times;</text>
</svg>`;

// Lesson fig 2 — critical stress vs slenderness: yield cap, Johnson parabola,
// Euler hyperbola, and the transition slenderness where they meet.
const figSlender = `<svg viewBox="0 0 460 262" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bk2-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <text x="34" y="42" fill="#64748b" font-size="12">&sigma;<tspan baseline-shift="sub" font-size="9">cr</tspan> (MPa) &mdash; steel, E = 200 GPa</text>
  <line x1="72" y1="214" x2="430" y2="214" stroke="#64748b" stroke-width="1.5" marker-end="url(#bk2-ax)"/>
  <line x1="72" y1="214" x2="72" y2="52" stroke="#64748b" stroke-width="1.5" marker-end="url(#bk2-ax)"/>
  <text x="430" y="234" text-anchor="end" fill="#64748b" font-size="12">slenderness KL/r</text>

  <line x1="154.4" y1="214" x2="154.4" y2="209" stroke="#64748b"/>
  <text x="154.4" y="228" text-anchor="middle" fill="#94a3b8" font-size="11">50</text>
  <line x1="236.8" y1="214" x2="236.8" y2="209" stroke="#64748b"/>
  <text x="236.8" y="228" text-anchor="middle" fill="#94a3b8" font-size="11">100</text>
  <line x1="319.1" y1="214" x2="319.1" y2="209" stroke="#64748b"/>
  <text x="319.1" y="228" text-anchor="middle" fill="#94a3b8" font-size="11">150</text>
  <line x1="401.5" y1="214" x2="401.5" y2="209" stroke="#64748b"/>
  <text x="401.5" y="228" text-anchor="middle" fill="#94a3b8" font-size="11">200</text>
  <line x1="72" y1="165.2" x2="77" y2="165.2" stroke="#64748b"/>
  <text x="66" y="169" text-anchor="end" fill="#94a3b8" font-size="11">100</text>
  <line x1="72" y1="116.5" x2="77" y2="116.5" stroke="#64748b"/>
  <text x="66" y="120" text-anchor="end" fill="#94a3b8" font-size="11">200</text>
  <line x1="72" y1="67.8" x2="77" y2="67.8" stroke="#64748b"/>
  <text x="66" y="71" text-anchor="end" fill="#94a3b8" font-size="11">300</text>

  <line x1="72" y1="92.1" x2="279" y2="92.1" stroke="#dc2626" stroke-dasharray="6 4" stroke-width="1.5"/>
  <text x="80" y="86" fill="#dc2626" font-size="11" font-weight="600">S<tspan baseline-shift="sub" font-size="9">y</tspan> = 250 MPa cap</text>

  <path d="M201.4,58 L204.9,66.2 L208.5,73.7 L212,80.7 L215.5,87.2 L219,93.2 L222.6,98.8 L226.1,104 L229.6,108.9 L233.2,113.4 L236.7,117.7 L240.2,121.7 L243.8,125.4 L247.3,129 L250.8,132.3 L254.3,135.4 L257.9,138.4 L261.4,141.2 L264.9,143.8 L268.5,146.3 L272,148.7 L275.5,150.9 L279,153.1" fill="none" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="5 4"/>
  <text x="196" y="54" text-anchor="middle" fill="#94a3b8" font-size="11">Euler extended &mdash; not valid here</text>

  <path d="M72,92.1 L80.2,92.2 L88.5,92.5 L96.7,93 L105,93.7 L113.2,94.5 L121.4,95.6 L129.7,96.9 L137.9,98.3 L146.1,99.9 L154.4,101.8 L162.6,103.8 L170.9,106 L179.1,108.4 L187.3,111 L195.6,113.8 L203.8,116.8 L212,120 L220.3,123.4 L228.5,127 L236.8,130.7 L245,134.7 L253.2,138.8 L261.5,143.2 L269.7,147.7 L278,152.4 L279,153.1" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <path d="M279,153.1 L282.9,155.3 L286.2,157.1 L289.5,158.8 L292.8,160.4 L296.1,162 L299.4,163.5 L302.7,164.9 L306,166.3 L309.3,167.6 L312.6,168.9 L315.8,170.1 L319.1,171.2 L322.4,172.3 L325.7,173.4 L329,174.5 L332.3,175.5 L335.6,176.4 L338.9,177.3 L342.2,178.2 L345.5,179.1 L348.8,179.9 L352.1,180.7 L355.4,181.5 L358.7,182.2 L362,182.9 L365.3,183.6 L368.6,184.3 L371.9,184.9 L375.2,185.6 L378.5,186.2 L381.8,186.8 L385,187.3 L388.3,187.9 L391.6,188.4 L394.9,189 L398.2,189.5 L401.5,189.9 L404.8,190.4 L408.1,190.9 L411.4,191.3 L414.7,191.8 L418,192.2" fill="none" stroke="#1d4ed8" stroke-width="3"/>

  <line x1="279" y1="214" x2="279" y2="153.1" stroke="#334155" stroke-dasharray="4 4"/>
  <circle cx="279" cy="153.1" r="4.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <text x="285" y="207" fill="#334155" font-size="11">(KL/r)<tspan baseline-shift="sub" font-size="9">c</tspan> = 126</text>
  <text x="140" y="196" text-anchor="middle" fill="#1d4ed8" font-size="11">Johnson parabola</text>
  <text x="140" y="210" text-anchor="middle" fill="#64748b" font-size="11">short / intermediate</text>
  <text x="368" y="207" text-anchor="middle" fill="#1d4ed8" font-size="11">Euler &mdash; slender</text>
  <text x="230" y="252" text-anchor="middle" fill="#64748b" font-size="11">Raising S<tspan baseline-shift="sub" font-size="9">y</tspan> lifts the left-hand cap only. The Euler branch does not move.</text>
</svg>`;

// Lesson fig 3 — ideal vs imperfect column geometry.
const figImperfection = `<svg viewBox="0 0 460 254" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bk3-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="bk3-dim" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" fill="#334155" font-weight="600">The imperfection is the load path for bending</text>

  <line x1="130" y1="34" x2="130" y2="56" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bk3-load)"/>
  <text x="138" y="46" fill="#dc2626" font-size="11">P</text>
  <line x1="130" y1="60" x2="130" y2="196" stroke="#334155" stroke-width="2.6"/>
  <circle cx="130" cy="60" r="4.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="130" cy="196" r="4.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <line x1="116" y1="196" x2="144" y2="196" stroke="#334155" stroke-width="2"/>
  <line x1="118" y1="206" x2="124" y2="198" stroke="#64748b"/>
  <line x1="128" y1="206" x2="134" y2="198" stroke="#64748b"/>
  <line x1="138" y1="206" x2="144" y2="198" stroke="#64748b"/>
  <text x="130" y="228" text-anchor="middle" fill="#64748b" font-size="12">ideal: straight, centred</text>
  <text x="130" y="244" text-anchor="middle" fill="#64748b" font-size="11">M = 0 until P = P<tspan baseline-shift="sub" font-size="9">cr</tspan></text>

  <line x1="310" y1="34" x2="310" y2="56" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bk3-load)"/>
  <text x="318" y="46" fill="#dc2626" font-size="11">P</text>
  <line x1="310" y1="60" x2="310" y2="196" stroke="#94a3b8" stroke-dasharray="4 4"/>
  <path d="M310,60 C330,92 330,164 310,196" fill="none" stroke="#334155" stroke-width="2.2" stroke-dasharray="6 4"/>
  <path d="M310,60 C350,92 350,164 310,196" fill="none" stroke="#1d4ed8" stroke-width="2.8"/>
  <circle cx="310" cy="60" r="4.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="310" cy="196" r="4.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <line x1="296" y1="196" x2="324" y2="196" stroke="#334155" stroke-width="2"/>
  <line x1="298" y1="206" x2="304" y2="198" stroke="#64748b"/>
  <line x1="308" y1="206" x2="314" y2="198" stroke="#64748b"/>
  <line x1="318" y1="206" x2="324" y2="198" stroke="#64748b"/>
  <line x1="310" y1="128" x2="325" y2="128" stroke="#64748b" stroke-width="1" marker-end="url(#bk3-dim)"/>
  <line x1="325" y1="128" x2="340" y2="128" stroke="#64748b" stroke-width="1" marker-end="url(#bk3-dim)"/>
  <text x="346" y="122" fill="#64748b" font-size="11">e<tspan baseline-shift="sub" font-size="9">0</tspan> initial bow</text>
  <text x="346" y="138" fill="#1d4ed8" font-size="11">&delta; grows with P</text>
  <text x="310" y="228" text-anchor="middle" fill="#64748b" font-size="12">real: crooked, eccentric</text>
  <text x="310" y="244" text-anchor="middle" fill="#1d4ed8" font-size="11">M = P(e<tspan baseline-shift="sub" font-size="9">0</tspan> + &delta;) from the first newton</text>
</svg>`;

const content: TopicContent = {
  lesson: {
    title: "Column Buckling & Stability",
    intro: `<p>Buckling is a stability failure, not a strength failure. A slender column can collapse while the average compressive stress sits at a third of yield, and it does it without the necking, cracking or permanent set that warns you about a yielding part. In an interview the test is almost never "state Euler's formula". It is whether you check the right failure mode, pick the right axis, and refuse to hand yourself an end condition the hardware does not deliver.</p>
<figure class="fig">${figModes}<figcaption>The same column with four ideal end conditions. Euler load scales with 1/(KL)<sup>2</sup>, so K = 0.5 and K = 2 are a factor of 16 apart.</figcaption></figure>`,
    sections: [
      {
        heading: "Euler load, and what it does not contain",
        html: `<p>For a slender, straight, elastic column loaded through its centroid:</p>
<p class="eq">P<sub>cr</sub> = &pi;&sup2;EI/(KL)&sup2;</p>
<p>Read the right-hand side carefully, because the interview question is usually hidden in what is <em>missing</em>. There is stiffness E, there is geometry I, there is length L, and there is restraint K. <strong>There is no yield strength.</strong> Swapping mild steel for a 700 MPa alloy leaves E at about 200 GPa and therefore leaves the elastic buckling load essentially unchanged. Heat treatment, cold work and alloying move S<sub>y</sub> by factors of three; they move E by a few percent at most.</p>
<p>The same reading tells you which levers do work. Capacity scales linearly with I, so moving material outward beats adding material: a tube of the same mass as a solid rod can carry roughly seven times the buckling load. Capacity scales with 1/L<sup>2</sup>, so a genuine mid-span brace quadruples it. And it scales with 1/K<sup>2</sup>, which is why the end condition is the number people argue about in design reviews.</p>
<div class="callout warn">A low compressive stress does not prove a slender member is safe. Compute P<sub>cr</sub> and P<sub>y</sub> = S<sub>y</sub>A and design to the lower one.</div>`,
      },
      {
        heading: "Effective length: theory versus hardware",
        html: `<p>K converts real end restraint into an equivalent pinned-pinned length KL. The ideal values are fixed-fixed 0.5, fixed-pinned 0.7, pinned-pinned 1.0, fixed-free 2.0. Look at the mode shapes in the figure above: for the fixed-fixed column the curvature reverses at the quarter points, and the piece between those two inflection points is exactly a pinned-pinned column of length 0.5L. That is where K = 0.5 comes from. It is not a table to memorise.</p>
<p>No real joint is ideal. A base plate bolted to a thin floor, a small bolt group, a weld to a panel that can itself flex, a bearing that has clearance. All of them rotate under moment. Design guidance therefore recommends values <em>more conservative</em> than theory: for a column theoretically fixed-fixed, recommended design K is about 0.65 rather than 0.50; for fixed-pinned, 0.80 rather than 0.70; for fixed-free, 2.10 rather than 2.00. Only pinned-pinned keeps its ideal value, because you cannot be less restrained than a pin except by being free.</p>
<p>Since P<sub>cr</sub> goes as 1/K<sup>2</sup>, an unjustified K = 0.5 instead of a realistic K = 0.8 inflates capacity by (0.8/0.5)<sup>2</sup> = 2.6&times;. That single assumption has sunk more compression members than any arithmetic slip.</p>`,
      },
      {
        heading: "Slenderness, and where Euler stops",
        html: `<p>Divide the Euler load by area to get a stress, and the section shrinks to one number, the radius of gyration r = &radic;(I/A):</p>
<p class="eq">&sigma;<sub>cr</sub> = &pi;&sup2;E/(KL/r)&sup2;</p>
<p>r is <em>not</em> the radius of the bar. For a solid round bar r = d/4, so a 50 mm rod has r = 12.5 mm, and a candidate who uses 25 mm halves the slenderness and doubles the apparent capacity.</p>
<p>Euler predicts an infinite stress as slenderness goes to zero, which is nonsense: the material yields first. The two curves cross at the transition slenderness</p>
<p class="eq">(KL/r)<sub>c</sub> = &radic;(2&pi;&sup2;E/S<sub>y</sub>)</p>
<p>which is about 126 for 250 MPa steel and only 75 for a 700 MPa steel. Above it, use Euler. Below it, real columns fail between the Euler curve and the yield cap because residual stresses cause partial yielding, and the standard hand fit is the J.B. Johnson parabola &sigma;<sub>cr</sub> = S<sub>y</sub>[1 &minus; S<sub>y</sub>(KL/r)&sup2;/(4&pi;&sup2;E)], which is tangent to Euler exactly at (KL/r)<sub>c</sub> and equal to S<sub>y</sub> at zero slenderness.</p>
<figure class="fig">${figSlender}<figcaption>Three regimes on one chart. Note that the high-strength alloy only raises the flat left-hand cap; the slender right-hand branch is shared by every steel.</figcaption></figure>`,
      },
      {
        heading: "Weak axis and bracing",
        html: `<p>A column buckles about the axis with the <strong>smallest</strong> I, because that is the cheapest way for it to bend. Checking only the strong axis is the single most common error in a compression check. For a 100 &times; 50 rectangular tube, I<sub>x</sub> is about three times I<sub>y</sub>, so the weak-axis capacity is a third of what the impressive-looking depth suggests.</p>
<p>Bracing is the strongest lever available, because L is squared. Halving the unbraced length quadruples P<sub>cr</sub>. Three caveats decide whether you actually get that:</p>
<ul>
<li><strong>Direction.</strong> A brace only helps the mode whose displacement it blocks. A brace in the strong-axis direction does nothing for weak-axis buckling.</li>
<li><strong>Position.</strong> The governing segment is the <em>longest</em> one. A brace at the third point of a 3 m column leaves a 2 m segment, so capacity rises by (3/2)<sup>2</sup> = 2.25&times;, not 9&times;.</li>
<li><strong>Stiffness and engagement.</strong> A guide with 3 mm of clearance, or a shoe that can only push, is not a brace at the displacement scale where buckling starts.</li>
</ul>
<p>Bracing one axis can hand control to the other. Brace the weak axis of a 4 m, 100 &times; 50 &times; 4 tube at mid-height and its weak-axis slenderness drops from 196 to 98, at which point the unbraced strong axis, at 112, governs. Adding more weak-axis bracing then buys nothing.</p>`,
      },
      {
        heading: "Imperfections, and why buckling is scarier than yielding",
        html: `<p>Euler assumes a mathematically straight bar loaded exactly through the centroid. Real columns arrive with mill out-of-straightness (typically L/1000), residual stress from rolling or welding, and load introduced through a bolt that can sit anywhere in its clearance hole. Every one of those puts the load off the centroid by some e<sub>0</sub>, so a bending moment P&middot;e<sub>0</sub> exists from the first newton and grows by amplification:</p>
<p class="eq">&delta; = e<sub>0</sub>/(1 &minus; P/P<sub>cr</sub>), &nbsp;&nbsp; M = P&delta;</p>
<p>At P = 0.8P<sub>cr</sub> the initial bow has already grown fivefold. So the practical column never reaches the Euler load; it fails when the amplified bending stress plus P/A reaches yield somewhere on the section.</p>
<figure class="fig">${figImperfection}<figcaption>The ideal column is a mathematical knife edge. The real one starts bent, so every increment of load is also a bending load.</figcaption></figure>
<p>The safety argument matters as much as the number. A yielding part deforms visibly, redistributes load and gives you inspection warning. A buckling column is stiff and straight right up to the moment it goes, and then it goes fast and sheds load. That asymmetry is why stability checks carry larger factors than yield checks.</p>`,
      },
      {
        heading: "Beyond the column: plates, shells and crippling",
        html: `<p>Global column buckling is only one of the family. Every thin flat element in a compressed section is a plate, and it has its own critical stress:</p>
<p class="eq">&sigma;<sub>cr</sub> = k&pi;&sup2;E/[12(1 &minus; &nu;&sup2;)] &middot; (t/b)&sup2;</p>
<p>Note (t/b)<sup>2</sup>: halving the panel width b quadruples its buckling stress, which is the entire reason plate girders carry vertical web stiffeners and aircraft skins carry stringers. A 600 mm deep, 6 mm web of a steel girder buckles at about 72 MPa, far below yield, and one longitudinal stiffener at mid-depth pushes that above 250 MPa.</p>
<p>Related modes worth naming in an interview:</p>
<ul>
<li><strong>Local buckling</strong> of a tube wall or flange, which can beat the global mode entirely when D/t or b/t is large. Making a section deeper and thinner raises global I while making local buckling worse.</li>
<li><strong>Crippling</strong>: the post-local-buckling collapse of a formed section, where the corners keep carrying load after the flat faces have wrinkled.</li>
<li><strong>Lateral-torsional buckling</strong> of a deep unbraced beam, where the compression flange runs sideways and the section twists before the bending stress reaches yield.</li>
<li><strong>Shell buckling</strong> under external pressure or axial load, which is severely imperfection-sensitive; a small dent or ovality can cut the classical prediction by half or more, so shells use empirical knockdown factors and test correlation.</li>
<li><strong>Snap-through</strong> of a shallow arch or dome, a limit-point instability rather than a bifurcation. The structure reaches a peak load and then falls to a remote equilibrium, and a bigger safety factor on stress does not fix it.</li>
</ul>`,
      },
    ],
    equations: [
      { name: "Euler buckling load", formula: "<p>P<sub>cr</sub> = &pi;&sup2;EI/(KL)&sup2;</p>", note: "Ideal elastic critical load. I is the smallest centroidal second moment of area, L the unbraced length, K the effective-length factor. S<sub>y</sub> does not appear." },
      { name: "Euler critical stress", formula: "<p>&sigma;<sub>cr</sub> = &pi;&sup2;E/(KL/r)&sup2;</p>", note: "Same statement per unit area. Valid only while &sigma;<sub>cr</sub> stays below the yield cap." },
      { name: "Radius of gyration", formula: "<p>r = &radic;(I/A)</p>", note: "d/4 for a solid round bar, b/&radic;12 for a rectangle bending about the b direction. Never the physical radius." },
      { name: "Transition slenderness", formula: "<p>(KL/r)<sub>c</sub> = &radic;(2&pi;&sup2;E/S<sub>y</sub>)</p>", note: "Where Euler meets the Johnson parabola: 126 for S<sub>y</sub> = 250 MPa steel, 75 for 700 MPa. Above it Euler governs, below it use Johnson." },
      { name: "Johnson parabola", formula: "<p>&sigma;<sub>cr</sub> = S<sub>y</sub>[1 &minus; S<sub>y</sub>(KL/r)&sup2;/(4&pi;&sup2;E)]</p>", note: "Intermediate-column fit, tangent to the Euler curve at (KL/r)<sub>c</sub> and equal to S<sub>y</sub> at zero slenderness." },
      { name: "Plate buckling stress", formula: "<p>&sigma;<sub>cr</sub> = k&pi;&sup2;E/[12(1 &minus; &nu;&sup2;)] &middot; (t/b)&sup2;</p>", note: "k &asymp; 4 for a long panel simply supported on both unloaded edges. Halving b quadruples the capacity. That is what a stiffener buys." },
      { name: "Deflection amplification", formula: "<p>&delta; = e<sub>0</sub>/(1 &minus; P/P<sub>cr</sub>)</p>", note: "How an initial bow e<sub>0</sub> grows. Multiply the first-order moment by the same factor for a beam-column screen." },
      { name: "Yield compression load", formula: "<p>P<sub>y</sub> = S<sub>y</sub>A</p>", note: "The other limit state. Design to min(P<sub>cr</sub>, P<sub>y</sub>) with the appropriate factor on each." },
    ],
    interviewTips: [
      "Say the failure mode out loud before you pick a formula: stocky member means yield, slender member means buckling, thin wall means local buckling first.",
      "Use the smallest I and the actual unbraced length for that axis. Bracing is usually different in the two directions.",
      "A higher-strength alloy does nothing for an elastic buckling problem. Reach for section shape, shorter unbraced length or better end restraint instead.",
      "Never claim fixity you cannot defend. State the K you used, say why, and show how sensitive the answer is to it.",
      "For a solid round bar r = d/4, not d/2. Getting r wrong is the classic factor-of-two error in a slenderness check.",
      "Mention imperfections unprompted: real columns are crooked and eccentrically loaded, so they fail below the Euler load and give no warning when they do.",
    ],
  },
  questions: [
    {
      id: "buckling-q01",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A 1.5 m steel strut is compressed to an average stress of 90 MPa. The steel yields at 250 MPa, yet the strut bows sideways and collapses. What happened?</p>`,
      choices: [
        "Steel yields in compression at about a third of its tensile yield stress",
        "The strut reached its shear yield stress, which is half of 250 MPa",
        "The straight shape lost stability, so bending finished it below yield",
        "The load cell must be wrong; 90 MPa cannot fail a 250 MPa steel",
      ],
      answer: 2,
      explanation: `<p>Buckling is a <strong>stability</strong> failure, not a strength failure. Once a slender member deflects sideways by a small amount &delta;, the axial load acts on that offset and makes a bending moment P&delta;, which makes more deflection. Above the critical load the straight shape is no longer a stable equilibrium, and the average stress P/A has nothing to say about it.</p><p>Compressive and tensile yield are essentially equal for structural steel. Shear yield is around 125 MPa here, still above the 90 MPa applied. The load cell was fine; the model was wrong.</p><p>For any compression member, compute both P<sub>cr</sub> = &pi;&sup2;EI/(KL)&sup2; and P<sub>y</sub> = S<sub>y</sub>A, and design to the lower one.</p>`,
    },
    {
      id: "buckling-q02",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A column is pinned at both ends, 2.0 m long, made of steel with E = 200 GPa, and its smallest second moment of area is I = 1.0&times;10<sup>&minus;6</sup> m<sup>4</sup>. What is the Euler critical load, in kN?</p>`,
      answer: 493,
      unit: "kN",
      explanation: `<p>Pinned-pinned means K = 1, so the effective length is the physical length.</p>
<p class="eq">P<sub>cr</sub> = &pi;&sup2;EI/(KL)&sup2; = &pi;&sup2;(200&times;10<sup>9</sup>)(1.0&times;10<sup>&minus;6</sup>)/4.00 = <strong>493 kN</strong></p>
<p>Use the <em>smallest</em> I. A stronger axis is irrelevant unless the weak direction is braced.</p>`,
    },
    {
      id: "buckling-q03",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A slender pinned-pinned rod buckles at 20 kN in test. Purchasing offers a heat-treated alloy steel with twice the yield strength, identical dimensions, E still about 200 GPa. What buckling load do you now expect?</p>`,
      choices: [
        "40 kN, because capacity scales with yield strength",
        "28 kN, roughly the square root of the strength gain",
        "20 kN, because Euler load is set by E and geometry",
        "Somewhat above 20 kN; strength always helps a little",
      ],
      answer: 2,
      explanation: `<p>Write the formula and look for S<sub>y</sub>:</p>
<p class="eq">P<sub>cr</sub> = &pi;&sup2;EI/(KL)&sup2;</p>
<p>It is not there. Elastic buckling is set by stiffness, section shape and effective length. E stays within a few percent of 200 GPa across mild, HSLA, and quenched and tempered steel alike, so <strong>the buckling load is unchanged at 20 kN</strong> and the expensive alloy buys nothing.</p>
<p>Higher S<sub>y</sub> does raise the flat left-hand cap of the strength-versus-slenderness chart, so it helps stocky columns. This rod is on the Euler branch.</p>
<p>To actually raise its capacity: change I by going to a tube, change L by adding a brace, or change K by stiffening the ends. Those are the only three levers in the equation.</p>`,
    },
    {
      id: "buckling-q04",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>An unbraced pinned-pinned strut has a critical load of 80 kN. A stiff lateral brace is added at exactly mid-height, restraining motion in the direction the strut wants to bow. What is the new critical load, in kN?</p>`,
      answer: 320,
      unit: "kN",
      explanation: `<p>The brace forces a node at mid-height, so each half behaves as a pinned-pinned column of half the original length. Euler load goes as 1/L&sup2;:</p>
<p class="eq">P<sub>new</sub>/P<sub>old</sub> = (L/(L/2))&sup2; = 4</p>
<p class="eq">P<sub>new</sub> = 4 &times; 80 = <strong>320 kN</strong></p>
<p>Best value-for-mass move in the topic. A small brace multiplies capacity fourfold and adds almost nothing, where getting 4&times; by growing the section costs roughly twice the material.</p>
<p>Three things decide whether you get it: does the brace restrain the direction the strut wants to bow, is it stiff enough that the node really holds, and can its connection carry the brace force, usually taken as 1&ndash;2% of the column load. A brace that flexes returns a fraction of the theory.</p>`,
    },
    {
      id: "buckling-q05",
      type: "mc",
      difficulty: 2,
      prompt: `<p>Two identical columns share the same section, material and physical length. One is ideally fixed at both ends; the other is fixed at the base with a completely free top. How do their ideal Euler loads compare?</p>`,
      choices: [
        "Equal, because the physical length and section are the same",
        "The fixed-free column carries one sixteenth as much",
        "The fixed-free column carries one quarter as much",
        "The fixed-free column carries four times as much",
      ],
      answer: 1,
      explanation: `<p>Effective lengths are KL = 0.5L for fixed-fixed and KL = 2L for fixed-free, a factor of 4 in <em>length</em>. Euler load goes as 1/(KL)&sup2;, so the load ratio is the square of that:</p>
<p class="eq">P<sub>fixed-free</sub>/P<sub>fixed-fixed</sub> = (0.5/2)&sup2; = (1/4)&sup2; = 1/16</p>
<p>So the cantilevered column is <strong>sixteen times weaker</strong>. One quarter is what you get comparing K linearly (2/0.5 = 4) and forgetting to square it. Four times has the direction backwards. Calling them equal ignores end conditions altogether.</p>
<p>Which is why unsupported actuator rods, jack screws and free-standing posts are the compression members that surprise people. A 1 m cantilevered post behaves like a 2 m pinned column, and if the base is bolted to something that can rotate, worse still. Design guidance uses K = 2.1 for the fixed-free case for exactly that reason.</p>`,
    },
    {
      id: "buckling-q06",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A compression member has A = 1000 mm<sup>2</sup> and a smallest second moment of area I = 250&thinsp;000 mm<sup>4</sup>. It spans 1000 mm between pinned ends. What is its slenderness ratio KL/r?</p>`,
      answer: 63.2,
      explanation: `<p class="eq">r = &radic;(I/A) = &radic;(250000/1000) = 15.81 mm</p>
<p class="eq">KL/r = (1)(1000)/15.81 = <strong>63.2</strong></p>
<p>Dimensionless, because L and r are both in mm. Units in your answer mean metres crept into the square root.</p>
<p>At 63 this member is in the intermediate range, where Euler would predict 494 MPa against a 250 MPa yield. Reach for the Johnson parabola.</p>`,
    },
    {
      id: "buckling-q07",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A solid steel bar 30 mm wide and 80 mm deep is used as a 1.2 m column, pinned at both ends, with no lateral bracing in either direction. E = 200 GPa. What is its Euler critical load, in kN?</p>`,
      answer: 247,
      unit: "kN",
      explanation: `<p>Both directions are unbraced, so the column buckles about its weak axis, the one that bends the 30 mm dimension:</p>
<p class="eq">I<sub>weak</sub> = h b&sup3;/12 = 80(30)&sup3;/12 = 180&thinsp;000 mm<sup>4</sup></p>
<p class="eq">P<sub>cr</sub> = &pi;&sup2;EI/(KL)&sup2; = &pi;&sup2;(200000)(180000)/(1200)&sup2; = <strong>247 kN</strong></p>
<p>Take the strong axis instead and I = 1&thinsp;280&thinsp;000 mm<sup>4</sup>, seven times larger, giving 1755 kN. That is a 7&times; unconservative error and the most common single mistake in a compression check.</p>
<p>The response is to brace the weak direction. Braced at mid-height this bar reaches 987 kN about the weak axis, still below the 1755 kN strong axis, so the brace is worth having.</p>`,
    },
    {
      id: "buckling-q08",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A 1.5 m link made from 30 mm OD &times; 2 mm wall steel tube (A = 176 mm<sup>2</sup>, S<sub>y</sub> = 250 MPa) is rated at 44 kN in tension. Pinned at both ends, it collapses at only 15 kN in a compression test. Which explanation fits?</p>`,
      choices: [
        "Steel's compressive yield runs about a third of its tensile value, so 44 kN never applied",
        "Euler buckling: &pi;&sup2;EI/L&sup2; comes out at 15 kN, well below the 44 kN squash load",
        "Local wall wrinkling, since a D/t of 15 is high enough for the shell mode to govern",
        "Cold-drawing residual stress, leaving only about a third of the section strength",
      ],
      answer: 1,
      explanation: `<p>Run the number. For the tube, I = &pi;(30<sup>4</sup> &minus; 26<sup>4</sup>)/64 = 17&thinsp;300 mm<sup>4</sup>, and with K = 1:</p>
<p class="eq">P<sub>cr</sub> = &pi;&sup2;(200000)(17300)/(1500)&sup2; = 1.52&times;10<sup>4</sup> N = 15.2 kN</p>
<p>That is the measured collapse load, and it is 0.35 of the 44 kN tension rating, the classic "fine in tension, thirds in compression" result. The average stress at collapse is only 15200/176 = 86 MPa, a third of yield.</p>
<p>Why the others fail: steel has essentially the same yield in tension and compression. D/t = 15 is a thick-walled tube by local-buckling standards (trouble starts well above D/t &asymp; 50 for steel), so the wall is not the problem. And residual stress shifts a column curve by a modest amount, never by 65%.</p>
<p>The design fix follows from the formula: the same 176 mm<sup>2</sup> arranged as a 50 mm OD &times; 1.15 mm wall tube gives I = 52&thinsp;700 mm<sup>4</sup>, three times as much, or a single mid-span brace gives four times.</p>`,
    },
    {
      id: "buckling-q09",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A column's governing mode moves it sideways in the weak-axis direction. A designer proposes a mid-height brace that restrains movement only in the strong-axis direction. What does that brace buy for the governing mode?</p>`,
      choices: [
        "Nothing for that mode; a brace must block motion in the direction the column bows",
        "It halves the effective length about both principal axes, since a node is a node",
        "It stiffens the column in the braced plane, so P<sub>cr</sub> rises for whichever mode governs",
        "It forces the buckle into the strong axis, so only the strong-axis check now matters",
      ],
      answer: 0,
      explanation: `<p>A brace works by creating a node, a point of zero lateral displacement, in the buckled shape. If the mode displaces the column in the y direction and the brace only resists x displacement, the mode passes straight through the brace without loading it, and KL for that mode is unchanged.</p>
<p>Bracing is genuinely three questions, and the direction is only the first: (1) does it block the displacement the mode actually uses; (2) is it stiff enough that the node barely moves; (3) can the brace and its connections carry the brace force, conventionally taken as 1&ndash;2% of the column load, without themselves buckling?</p>
<p>This is a common field failure. A member added because it "looks supportive in elevation" restrains the in-plane direction while the column quietly buckles out of plane. When you review a brace, sketch the mode shape first, then check that the brace sits on a point that the mode wants to move.</p>`,
    },
    {
      id: "buckling-q10",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A steel column has E = 200 GPa and a slenderness ratio KL/r of 100 about its governing axis. What Euler critical stress does that give, in MPa?</p>`,
      answer: 197,
      unit: "MPa",
      explanation: `<p>Work in MPa throughout: E = 200 GPa = 200&thinsp;000 MPa.</p>
<p class="eq">&sigma;<sub>cr</sub> = &pi;&sup2;E/(KL/r)&sup2; = &pi;&sup2;(200000)/(100)&sup2; = <strong>197 MPa</strong></p>
<p>Now check the answer is legal. For 250 MPa steel, Euler holds only above the transition slenderness (KL/r)<sub>c</sub> = &radic;(2&pi;&sup2;E/S<sub>y</sub>) = 126. At 100 we are below it, so 197 MPa is not the right prediction. The Johnson parabola gives 171 MPa, about 13% lower.</p>
<p>Plugging into Euler is easy. Knowing whether you are allowed to is the skill. On a 700 MPa alloy the transition sits at 75 and the 197 MPa answer would stand.</p>`,
    },
    {
      id: "buckling-q11",
      type: "mc",
      difficulty: 2,
      prompt: `<p>Two legs on a test rig are overloaded. The stocky one yields and visibly squats; the slender one buckles and drops the rig. The safety engineer treats the buckling case as the more serious hazard. What is the technical justification?</p>`,
      choices: [
        "Plastic yielding absorbs energy, so a buckled part rebounds harder",
        "A buckled member is harder to remove from the finished assembly",
        "Yield always occurs at a lower load than buckling for any member",
        "Buckling gives no visible warning and sheds load once it starts",
      ],
      answer: 3,
      explanation: `<p>A yielding member deforms progressively, hardens a little, redistributes load to its neighbours, and leaves permanent set that an inspection will find. It fails <em>gradually</em>, and the structure usually holds while it does.</p>
<p>A slender column stays straight and stiff essentially all the way to P<sub>cr</sub>, then loses its lateral stiffness almost completely. Be precise about what happens next, because it is a classic follow-up. The <em>elastic</em> post-buckling path of a slender column is <strong>stable-symmetric</strong>: the exact elastica rises slightly above P<sub>cr</sub>, needing about 1.5% more load to reach 20&deg; of end rotation. What makes it lethal is not a descending elastic branch but the rate, deflection runs from millimetres to a substantial fraction of the length for almost no extra load, and the P&delta; moment that comes with it drives the mid-height section into yield. Once that plastic hinge forms the member <em>does</em> shed load, and it does so with no warning displacement to see and no redistribution to catch it.</p>
<p>Contrast the two other cases this topic treats, so the three do not blur together. A thin <strong>shell</strong> is unstable-symmetric. Its path genuinely falls away after the peak, which is why cylinders test at 20&ndash;40% of the classical load and need a knockdown factor. A thin <strong>plate</strong> is strongly stable: it keeps taking load after wrinkling through diagonal tension, which is exactly what post-buckled aircraft skin is sold on.</p>
<p>Design practice reflects the asymmetry between yield and stability: stability checks carry higher factors than yield checks, codes apply column curves that sit below the theoretical Euler load, and imperfection allowances are mandatory rather than optional. The last option is simply false. For the slender leg buckling happened first, which is the whole scenario.</p>`,
    },
    {
      id: "buckling-q12",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A 50 mm diameter solid steel rod is used as a 2.0 m pinned-pinned column. A colleague writes KL/r = 2000/25 = 80 and calls it a stocky member. What is the correct slenderness ratio?</p>`,
      choices: [
        "80, because r for a solid round bar is its radius, 25 mm",
        "160, because r = &radic;(I/A) = d/4 = 12.5 mm for a round bar",
        "40, because slenderness uses the diameter, so 2000/50",
        "113, from taking r as d/&radic;8 = 17.7 mm, the polar radius of gyration",
      ],
      answer: 1,
      explanation: `<p>The radius of gyration is defined by r = &radic;(I/A), and for a solid circle that works out to a quarter of the diameter, not half:</p>
<p class="eq">I = &pi;d<sup>4</sup>/64, &nbsp; A = &pi;d&sup2;/4 &nbsp;&rarr;&nbsp; r = &radic;(d&sup2;/16) = d/4 = 12.5 mm</p>
<p class="eq">KL/r = 2000/12.5 = <strong>160</strong></p>
<p>The colleague's 80 comes from using the radius, so KL/r is a factor of two low and P<sub>cr</sub> looks four times larger than it is. The 40 answer uses the diameter and is four times low, unconservative in the same direction but twice as badly. The 113 answer is the subtlest real error: d/&radic;8 = 17.7 mm is the <em>polar</em> radius of gyration &radic;(J/A), which belongs in torsional problems, not column buckling, and it still reads 29% low.</p>
<p>At KL/r = 160 the rod is comfortably past the transition slenderness of 126, so Euler applies and &sigma;<sub>cr</sub> = &pi;&sup2;(200000)/160&sup2; = 77 MPa, less than a third of yield. Calling it stocky would have been a 4&times; overestimate of capacity.</p>`,
    },
    {
      id: "buckling-q13",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>For a structural steel with S<sub>y</sub> = 250 MPa and E = 200 GPa, above what slenderness ratio KL/r is the elastic Euler formula the correct one to use?</p>`,
      answer: 126,
      explanation: `<p>Euler is legitimate only while its predicted stress stays below the material's capacity. The boundary is where the Euler curve meets the yield cap. Setting &sigma;<sub>cr</sub> = S<sub>y</sub> would give &radic;(&pi;&sup2;E/S<sub>y</sub>) = 88.9, but the standard transition is taken where Euler meets the <em>Johnson parabola</em> tangentially, at half the yield stress:</p>
<p class="eq">&pi;&sup2;E/(KL/r)&sup2; = S<sub>y</sub>/2 &nbsp;&rarr;&nbsp; (KL/r)<sub>c</sub> = &radic;(2&pi;&sup2;E/S<sub>y</sub>)</p>
<p class="eq">(KL/r)<sub>c</sub> = &radic;(2&pi;&sup2;(200000)/250) = &radic;(15791) = <strong>126</strong></p>
<p>Above 126, use Euler. Below it, the column fails inelastically. Residual stresses from rolling or welding start yielding parts of the section before the whole thing is elastic-critical, so use the Johnson parabola S<sub>y</sub>[1 &minus; S<sub>y</sub>(KL/r)&sup2;/(4&pi;&sup2;E)] or a code column curve.</p>
<p>The number moves with the material, and this is the payoff of the question: for a 700 MPa alloy steel (KL/r)<sub>c</sub> drops to &radic;(2&pi;&sup2;(200000)/700) = 75. The strong alloy only extends the flat cap further to the right. Beyond KL/r = 126 both steels land on the identical Euler curve.</p>`,
    },
    {
      id: "buckling-q14",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A vertical column carries axial compression and also supports a bracket that hangs a load off one side, so there is a real bending moment along its length. Separate checks &mdash; pure Euler for the axial load and pure bending stress for the moment &mdash; both pass with margin. Why is that not sufficient?</p>`,
      choices: [
        "Bending can be neglected once axial compression is present in a member",
        "The pure-bending check should have used the polar rather than the area moment",
        "Compression amplifies the bracket moment, so the two effects interact",
        "Only the tensile ultimate strength matters when a moment is applied",
      ],
      answer: 2,
      explanation: `<p>This is a beam-column, and the two loads are not independent. The bracket produces a first-order moment M<sub>0</sub> and therefore a lateral deflection. The axial load P then acts on that deflection and adds P&delta;, which deflects it further. The result is a second-order magnification:</p>
<p class="eq">M &asymp; M<sub>0</sub>/(1 &minus; P/P<sub>cr</sub>)</p>
<p>At P = 0.5P<sub>cr</sub> the bracket moment doubles; at 0.7P<sub>cr</sub> it more than triples. A member that passes both checks separately with 40% margin can fail once the interaction is included.</p>
<p>The practical treatment is an interaction equation of the form P/P<sub>allow</sub> + C<sub>m</sub>M/[M<sub>allow</sub>(1 &minus; P/P<sub>cr</sub>)] &le; 1, or a geometrically nonlinear FEA run. The tell in an interview is any member carrying compression <em>and</em> a transverse or eccentric load, brackets, mast arms, hoist columns, actuator rods with side loads.</p>`,
    },
    {
      id: "buckling-q15",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A column carries a first-order bending moment of 1.2 kN&middot;m from a side-mounted bracket, plus 60 kN of axial compression. Its buckling load about the bending axis is 150 kN. Estimate the magnified design moment, in kN&middot;m.</p>`,
      answer: 2.0,
      unit: "kN*m",
      explanation: `<p>Axial compression acting on the bracket-induced deflection adds moment, and the standard first-cut magnifier is:</p>
<p class="eq">M = M<sub>0</sub>/(1 &minus; P/P<sub>cr</sub>)</p>
<p class="eq">P/P<sub>cr</sub> = 60/150 = 0.40</p>
<p class="eq">M = 1.2/(1 &minus; 0.40) = 1.2/0.60 = <strong>2.0 kN&middot;m</strong></p>
<p>The axial load is at only 40% of critical, a buckling factor of safety of 2.5, which sounds comfortable, and it has still increased the design moment by 67%. Sizing the section on 1.2 kN&middot;m would undersize it badly.</p>
<p>Two things worth saying out loud. The magnifier blows up as P approaches P<sub>cr</sub>, so a member with a modest stability margin has a large moment penalty; and the P<sub>cr</sub> in the magnifier must be the one for bending about the <em>same</em> axis as M<sub>0</sub>, with that axis's own unbraced length. Mixing axes here is a common slip.</p>`,
    },
    {
      id: "buckling-q16",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A vacuum chamber is a long steel cylinder, 400 mm inside diameter with a 3 mm wall, evacuated to hard vacuum so it sees 1 atm outside. Using the long-cylinder collapse relation p<sub>cr</sub> = 2E(t/D)<sup>3</sup>/(1 &minus; &nu;&sup2;) with E = 200 GPa and &nu; = 0.3, what is the critical external pressure, in kPa?</p>`,
      answer: 185,
      unit: "kPa",
      explanation: `<p>Substitute directly, keeping t/D dimensionless:</p>
<p class="eq">t/D = 3/400 = 0.0075, &nbsp; (t/D)<sup>3</sup> = 4.219&times;10<sup>&minus;7</sup></p>
<p class="eq">p<sub>cr</sub> = 2(200&times;10<sup>9</sup>)(4.219&times;10<sup>&minus;7</sup>)/(1 &minus; 0.09) = 1.688&times;10<sup>5</sup>/0.91 = 1.85&times;10<sup>5</sup> Pa</p>
<p>So <strong>185 kPa</strong>, about 1.83 atm, a nominal margin of only 1.8 against the 101 kPa the chamber actually sees.</p>
<p>Now the engineering. That margin is <em>not</em> acceptable as it stands, because the cube on t/D makes shell buckling brutally sensitive to geometry and imperfection. A 10% thin spot costs 27% of the capacity. Ovality, weld shrinkage, dents from handling, and nozzle penetrations all reduce it further, which is why pressure-vessel codes apply empirical knockdown factors and design charts rather than the classical formula, and why external-pressure shells are the classic case for stiffening rings. A ring shortens the effective unsupported length of the shell and can lift the collapse pressure severalfold for very little mass.</p>`,
    },
  ],
  qna: [
    {
      id: "buckling-qa01",
      q: `<p>Walk me through how you would size a compression member from scratch.</p>`,
      a: `<p>I start by asking what the member is really connected to, because that fixes the unbraced length and the end restraint in each direction separately. They are often different. Then I compute section properties: A, both principal second moments, and r = &radic;(I/A) about each axis. Slenderness KL/r goes with each axis using that axis's own unbraced length, and the largest value governs.</p><p>Next I decide which regime I am in by comparing to the transition slenderness &radic;(2&pi;&sup2;E/S<sub>y</sub>), about 126 for mild steel. Above it I use Euler, below it the Johnson parabola or a code column curve, and for a stocky member I just check S<sub>y</sub>A. If the section is thin-walled I also check local plate or shell buckling on every flat, because that can govern before the column mode.</p><p>Then I stop trusting the ideal number: I apply an imperfection allowance, take a conservative K rather than the theoretical one, and if there is any transverse load I magnify the moment by 1/(1 &minus; P/P<sub>cr</sub>) and run a beam-column interaction. Finally I do the sensitivity: if the answer changes a lot when K moves from 0.65 to 1.0, I go and justify the joint stiffness rather than hoping.</p>`,
    },
    {
      id: "buckling-qa02",
      q: `<p>A design review says a column base is "welded, so it is fixed". How do you respond?</p>`,
      a: `<p>I would push back, because fixity is a property of the whole load path, not of the weld. The weld may be perfectly strong and the base plate still bend; the anchor bolts may stretch; the floor plate, beam or frame the column lands on may rotate. If the joint rotates under moment, the effective length is longer than the fixed-end ideal and the capacity drops as 1/K&sup2;.</p><p>Concretely, taking K = 0.5 when the real behaviour is K = 0.8 overstates capacity by 2.6&times;. Even the guidance for a genuinely well-detailed fixed-fixed column recommends K = 0.65 rather than the theoretical 0.50, precisely because ideal fixity is not achievable in hardware.</p><p>What I would ask for is either a rotational-stiffness estimate for the connection and the structure behind it, a test, or a bracketed result. Run the case pinned and fixed and show the decision-maker how much of the margin depends on that assumption. If nobody can defend the stiffness number, we size on the conservative K and revisit only if mass actually matters.</p>`,
    },
    {
      id: "buckling-qa03",
      q: `<p>How do you decide whether a compression member will yield or buckle?</p>`,
      a: `<p>I compute both limits and take the lower. Yield gives P<sub>y</sub> = S<sub>y</sub>A. Stability gives P<sub>cr</sub> = &pi;&sup2;EI/(KL)&sup2; using the smallest I and the real unbraced length. But the more useful single number is slenderness KL/r compared with the transition value &radic;(2&pi;&sup2;E/S<sub>y</sub>).</p><p>Well above the transition, elastic buckling governs and material strength is irrelevant. Well below it, the member crushes or yields and strength is what matters. In the intermediate band, which is where an awful lot of real hardware sits, neither pure formula is right, because residual stress from rolling or welding starts yielding part of the section while the rest is still elastic. There I use the Johnson parabola or a code column curve.</p><p>I would then add the checks that are easy to forget: local buckling of any thin wall in the section, the second principal axis if bracing differs between the two directions, and the end fittings, which are part of the stability system and often govern before the member body does.</p>`,
    },
    {
      id: "buckling-qa04",
      q: `<p>A slender strut is failing. Rank the ways you could fix it, and say what each costs.</p>`,
      a: `<p>The strongest lever is length, because P<sub>cr</sub> goes as 1/L&sup2;. A stiff brace at mid-height quadruples capacity for a few percent of the mass. Nothing else comes close on a value-per-gram basis, provided the brace restrains the direction the mode actually moves and is stiff enough to hold a node.</p><p>Second is section shape. Capacity is linear in I, and I is where you put the area, not how much of it you have. At equal mass, replacing a 20 mm solid rod with a 40 mm tube of the same cross-sectional area raises I by about 7&times;. The cost is that the wall gets thin, so you inherit a local-buckling and denting check you did not have before.</p><p>Third is end restraint, worth up to 4&times; going from pinned to genuinely fixed, but only if you can defend the joint stiffness, and the practical gain is nearer 2&times; once realistic K values are used.</p><p>Last, and usually not worth it: material. Going from steel to a stronger steel does nothing at all for elastic buckling since E is unchanged. Going to a higher-E material helps linearly. Aluminium at equal geometry is 2.9&times; worse, though at equal <em>mass</em> aluminium wins because you can make the section much bigger.</p>`,
    },
    {
      id: "buckling-qa05",
      q: `<p>Why does the weak axis control, and when does that stop being true?</p>`,
      a: `<p>Buckling is a bending instability, and bending stiffness is EI. The column will always deform in whichever way is cheapest, so it picks the axis with the smallest I. Using the strong-axis value is unconservative by exactly the ratio of the two inertias, a factor of seven for a 30 &times; 80 rectangle.</p><p>It stops being true when the two axes have different unbraced lengths, which is common. What governs is not the smallest I but the largest KL/r. Take a 4 m tall 100 &times; 50 &times; 4 rectangular tube: r<sub>y</sub> = 20.4 mm and r<sub>x</sub> = 35.6 mm, so unbraced the weak axis governs at KL/r = 196 against 112. Add a mid-height brace in the weak direction and the weak-axis value drops to 98. Now the <em>strong</em> axis at 112 governs, and further weak-axis bracing buys nothing.</p><p>So the discipline is to tabulate KL and r for both axes and compare the ratios, rather than deciding the answer by looking at the cross-section. This also tells you when to stop adding bracing, which is a question about cost, not just safety.</p>`,
    },
    {
      id: "buckling-qa06",
      q: `<p>Real columns fail below the Euler load. Explain why, and what you do about it.</p>`,
      a: `<p>Euler describes a perfectly straight bar loaded exactly through its centroid; it predicts a bifurcation, with zero lateral deflection until an exact critical load. Real members are not like that. Mill out-of-straightness is typically L/1000, load comes in through a bolt that can sit anywhere in its clearance hole, welding leaves residual stress, and end fittings introduce their own eccentricity.</p><p>The consequence is that a bending moment P&middot;e<sub>0</sub> exists from zero load, and it amplifies as &delta; = e<sub>0</sub>/(1 &minus; P/P<sub>cr</sub>). At 80% of the Euler load an initial 2 mm bow has already become 10 mm, and the section reaches yield on its compression face well before P<sub>cr</sub> is attained. So the failure is a smooth, progressive loss of stiffness ending in a collapse, not a clean bifurcation.</p><p>So I do three things. Use a code column curve or a knockdown rather than the raw Euler load, put a real straightness callout on the drawing and check it, and control load introduction with spherical bearings, matched pads or tight-fitting pins. Eccentricity you can design out is cheaper than the margin you would otherwise have to buy with material.</p>`,
    },
    {
      id: "buckling-qa07",
      q: `<p>Where does local buckling come from, and how does it interact with the global column mode?</p>`,
      a: `<p>Every flat element in a compressed section is a plate in its own right, with critical stress &sigma;<sub>cr</sub> = k&pi;&sup2;E/[12(1 &minus; &nu;&sup2;)](t/b)&sup2;. Because the ratio is squared, a wall that is twice as wide for the same thickness buckles at a quarter of the stress. So local stability depends on b/t (or D/t for a tube), on how the edges are supported, and on imperfections, and not at all on the global length of the member.</p><p>The interaction is what catches people. Chasing global capacity pushes you toward deeper, larger sections, and if the mass is held constant that means thinner walls, so global I goes up while every plate in the section gets closer to its own limit. A tube that comfortably passes an Euler check can wrinkle at a load the column calculation never sees. Once a wall buckles you also lose stiffness, shift the effective centroid, and change the fastener and fatigue picture.</p><p>Aerospace structure deliberately works past this point. Skins are allowed to buckle and the stringers carry on, with crippling allowables and test evidence to back it. Ordinary machine and frame hardware should not claim post-buckling capacity without that evidence. So I check both: global KL/r for the member, and b/t or D/t for every flat and every tube wall.</p>`,
    },
    {
      id: "buckling-qa08",
      q: `<p>What assumptions sit behind Euler's formula, and which one usually breaks first?</p>`,
      a: `<p>Euler assumes a prismatic, initially straight, slender column; linear elastic material throughout; load applied exactly through the centroid; ideal end restraints described by a single K; small deflections; and no local instability. It is derived from EIv&Prime; + Pv = 0, so everything in that derivation is baked in.</p><p>Which one breaks first depends on the hardware, but in my experience it is the end conditions, because they enter as 1/K&sup2; and are the assumption with the least evidence behind them. Second is imperfection, which never breaks the formula so much as makes its answer unattainable. Third is the elastic assumption, which fails whenever KL/r sits below the transition slenderness. At that point Euler will happily predict a stress above yield, which is a giveaway that the model is out of range.</p><p>So I use Euler as a first estimate, then say explicitly which assumption I am least comfortable with and what I would do to close it: measure joint rotational stiffness, put a straightness tolerance on the drawing, or run a nonlinear analysis with a seeded imperfection. Then I name the assumption I am least sure of, because that is where the answer will move.</p>`,
    },
    {
      id: "buckling-qa09",
      q: `<p>How would you actually test a column to measure its buckling capacity?</p>`,
      a: `<p>The hardest part is the fixture, not the loading. Whatever I claim about K has to be reproduced in the rig, so pinned means real spherical seats or knife edges with the pivot on the member's centroidal axis, and fixed means a joint whose rotational stiffness I have measured, not just a thick-looking block. Alignment matters more than load accuracy: a millimetre of eccentricity on a slender specimen can cost double-digit percentages of capacity, so I would align optically or with a low-load strain-balance step, adjusting until the strain gauges around the section read within a few percent of each other.</p><p>Instrumentation would be axial load, lateral displacement at mid-height in both directions, and back-to-back strain gauges at mid-height so I can separate axial strain from bending strain and watch the bending component grow.</p><p>Then I would not push it straight to collapse. The Southwell plot lets me extract P<sub>cr</sub> from sub-critical data: plot &delta;/P against &delta; and the slope is 1/P<sub>cr</sub>, with the intercept giving the effective initial imperfection. That gets a non-destructive estimate from a load well below failure, tells me how crooked the specimen actually was, and it costs nothing but a plot.</p>`,
    },
    {
      id: "buckling-qa10",
      q: `<p>An FEA eigenvalue buckling run reports a load factor of 3.2. How much do you trust it?</p>`,
      a: `<p>As an upper bound with useful mode-shape information, not as a capacity. A linear eigenvalue solve gives you the classical bifurcation load of a perfect structure with the boundary conditions you actually typed in, so it inherits all of Euler's optimism plus whatever the model got wrong.</p><p>The checks I run before believing it: is the mode shape physical, or is it a mesh artefact at a load pad or a spurious local wrinkle at a constraint? Do the boundary conditions match hardware. A spherical rod end modelled with rotations locked will inflate the answer badly. Is the load introduced the way the real fitting introduces it? And does a hand calculation land in the same neighbourhood? If the closed-form Euler estimate says 3.2 and FEA says 3.2, I believe both; if they differ by 2&times;, one of us has the effective length wrong.</p><p>For anything imperfection-sensitive, shells, thin panels, arches, the eigenvalue answer can be a large multiple of the real one, so I would follow up with a nonlinear analysis seeded with a realistic imperfection, usually the first eigenmode scaled to the manufacturing tolerance, and take the limit point from that. And if the first few eigenvalues are closely spaced, that is a warning in itself: closely spaced modes mean the structure is imperfection-sensitive and the linear number should be discounted.</p>`,
    },
  ],
};

export default content;
