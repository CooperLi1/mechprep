import type { TopicContent } from "../types";

// ---------------------------------------------------------------------------
// Failure Theories & the Failure Decision
//
// SCOPE NOTE: getting *to* the stress state — transformation equations,
// principal-stress formulas, Mohr's circle construction, plane stress vs plane
// strain, and stress-concentration factors K_t — is owned by the
// `stress-analysis` topic. This topic starts from a stress state that is
// already known and answers the next question: does it fail, by which mode,
// and with what margin. Principal stresses are used here as an input; they are
// not derived here.
// ---------------------------------------------------------------------------

// Lesson fig 1 — the two ductile yield loci in principal-stress space.
// The Tresca hexagon is INSCRIBED in the von Mises ellipse and touches it at
// six points; the ellipse's major axis lies along sigma1 = sigma2.
// Geometry: origin (200,126), 1 Sy = 74 px. Ellipse semi-axes are
// sqrt(2)*Sy = 104.7 px along the 45 deg line and sqrt(2/3)*Sy = 60.4 px
// across it. Hexagon vertices: (Sy,0) (Sy,Sy) (0,Sy) (-Sy,0) (-Sy,-Sy) (0,-Sy).
const figEnvelope = `<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ft2-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="18" text-anchor="middle" font-weight="600" fill="#334155">Ductile yield loci in plane stress (&sigma;<tspan baseline-shift="sub" font-size="9">3</tspan> = 0), axes scaled by S<tspan baseline-shift="sub" font-size="9">y</tspan></text>
  <line x1="92" y1="126" x2="372" y2="126" stroke="#64748b" stroke-width="1.5" marker-end="url(#ft2-ax)"/>
  <line x1="200" y1="230" x2="200" y2="30" stroke="#64748b" stroke-width="1.5" marker-end="url(#ft2-ax)"/>
  <text x="376" y="131" fill="#64748b">&sigma;<tspan baseline-shift="sub" font-size="9">1</tspan></text>
  <text x="206" y="42" fill="#64748b">&sigma;<tspan baseline-shift="sub" font-size="9">2</tspan></text>
  <line x1="120" y1="206" x2="280" y2="46" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4 4"/>
  <text x="286" y="44" fill="#94a3b8" font-size="11">&sigma;<tspan baseline-shift="sub" font-size="8">1</tspan> = &sigma;<tspan baseline-shift="sub" font-size="8">2</tspan></text>
  <ellipse cx="0" cy="0" rx="104.7" ry="60.4" fill="none" stroke="#1d4ed8" stroke-width="2.2" transform="translate(200,126) rotate(-45)"/>
  <polygon points="274,126 274,52 200,52 126,126 126,200 200,200" fill="none" stroke="#dc2626" stroke-width="2.2"/>
  <circle cx="274" cy="126" r="3.2" fill="#334155"/>
  <circle cx="274" cy="52" r="3.2" fill="#334155"/>
  <circle cx="200" cy="52" r="3.2" fill="#334155"/>
  <circle cx="126" cy="126" r="3.2" fill="#334155"/>
  <circle cx="126" cy="200" r="3.2" fill="#334155"/>
  <circle cx="200" cy="200" r="3.2" fill="#334155"/>
  <line x1="274" y1="121" x2="274" y2="131" stroke="#64748b" stroke-width="1.2"/>
  <line x1="195" y1="52" x2="205" y2="52" stroke="#64748b" stroke-width="1.2"/>
  <text x="280" y="143" fill="#64748b" font-size="11">S<tspan baseline-shift="sub" font-size="8">y</tspan></text>
  <text x="190" y="50" text-anchor="end" fill="#64748b" font-size="11">S<tspan baseline-shift="sub" font-size="8">y</tspan></text>
  <line x1="292" y1="72" x2="310" y2="72" stroke="#1d4ed8" stroke-width="2.2"/>
  <text x="314" y="76" fill="#1d4ed8" font-weight="600" font-size="12">von Mises</text>
  <line x1="292" y1="96" x2="310" y2="96" stroke="#dc2626" stroke-width="2.2"/>
  <text x="314" y="100" fill="#dc2626" font-weight="600" font-size="12">Tresca</text>
  <line x1="200" y1="126" x2="278" y2="204" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="232" y1="168" x2="242" y2="158" stroke="#dc2626" stroke-width="2.4"/>
  <line x1="238" y1="174" x2="248" y2="164" stroke="#1d4ed8" stroke-width="2.4"/>
  <line x1="246" y1="172" x2="284" y2="182" stroke="#94a3b8" stroke-width="1"/>
  <text x="288" y="178" fill="#334155" font-size="11">pure shear ray:</text>
  <text x="288" y="192" fill="#dc2626" font-size="11">Tresca 0.500 S<tspan baseline-shift="sub" font-size="8">y</tspan></text>
  <text x="288" y="206" fill="#1d4ed8" font-size="11">von Mises 0.577 S<tspan baseline-shift="sub" font-size="8">y</tspan></text>
  <circle cx="246" cy="107" r="4.5" fill="#1d4ed8"/>
  <text x="240" y="100" text-anchor="end" fill="#1d4ed8" font-weight="600">A</text>
  <text x="20" y="252" fill="#64748b" font-size="11">A (&sigma;<tspan baseline-shift="sub" font-size="8">1</tspan> = 0.62 S<tspan baseline-shift="sub" font-size="8">y</tspan>, &sigma;<tspan baseline-shift="sub" font-size="8">2</tspan> = 0.25 S<tspan baseline-shift="sub" font-size="8">y</tspan>): n = 1.85 von Mises, 1.61 Tresca</text>
  <text x="20" y="268" fill="#64748b" font-size="11">Tresca is inscribed in von Mises and touches it at the six marked vertices.</text>
</svg>`;

// Lesson fig 2 — the classic torsion pair: ductile breaks on the max-shear
// plane (square to the axis), brittle breaks on the max-tension plane (45 deg).
const figTorsion = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ft3-t" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="18" text-anchor="middle" font-weight="600" fill="#334155">Same pure torsion, two fracture surfaces</text>
  <rect x="40" y="76" width="170" height="44" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <path d="M46,70 Q70,52 94,70" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ft3-t)"/>
  <path d="M204,70 Q180,52 156,70" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ft3-t)"/>
  <text x="70" y="46" text-anchor="middle" fill="#dc2626" font-weight="600">T</text>
  <text x="180" y="46" text-anchor="middle" fill="#dc2626" font-weight="600">T</text>
  <path d="M140,76 L144,88 L136,98 L143,110 L140,120" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <text x="125" y="142" text-anchor="middle" font-weight="600" fill="#334155">1045 steel &mdash; ductile</text>
  <text x="125" y="160" text-anchor="middle" fill="#64748b" font-size="11">flat break, square to the axis</text>
  <rect x="250" y="76" width="170" height="44" fill="#fee2e2" stroke="#334155" stroke-width="1.8"/>
  <path d="M256,70 Q280,52 304,70" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ft3-t)"/>
  <path d="M414,70 Q390,52 366,70" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ft3-t)"/>
  <text x="280" y="46" text-anchor="middle" fill="#dc2626" font-weight="600">T</text>
  <text x="390" y="46" text-anchor="middle" fill="#dc2626" font-weight="600">T</text>
  <line x1="330" y1="76" x2="374" y2="120" stroke="#dc2626" stroke-width="2.5"/>
  <line x1="306" y1="76" x2="350" y2="120" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="4 4"/>
  <text x="380" y="98" fill="#dc2626" font-size="11">45&deg;</text>
  <text x="335" y="142" text-anchor="middle" font-weight="600" fill="#334155">grey cast iron &mdash; brittle</text>
  <text x="335" y="160" text-anchor="middle" fill="#64748b" font-size="11">helical break at 45&deg; to the axis</text>
  <line x1="20" y1="174" x2="440" y2="174" stroke="#e2e8f0" stroke-width="1"/>
  <text x="20" y="192" fill="#334155" font-size="11">Pure shear: &tau; acts on the transverse plane, &sigma;<tspan baseline-shift="sub" font-size="8">1</tspan> = +&tau; on the 45&deg; plane.</text>
  <text x="20" y="210" fill="#64748b" font-size="11">Ductile metal separates on the max-shear plane &rarr; von Mises or Tresca.</text>
  <text x="20" y="228" fill="#64748b" font-size="11">Brittle iron separates on the max-tension plane &rarr; maximum normal stress.</text>
</svg>`;

// Lesson fig 3 — five competing modes; the design is set by the smallest factor.
const figModes = `<svg viewBox="0 0 460 216" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <rect x="20" y="16" width="420" height="34" rx="6" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <text x="230" y="38" text-anchor="middle" fill="#334155" font-size="11">Critical point: material, stress state, temperature, cycles, flaws</text>
  <line x1="231" y1="50" x2="231" y2="60" stroke="#334155" stroke-width="1.2"/>
  <line x1="51" y1="60" x2="411" y2="60" stroke="#334155" stroke-width="1.2"/>
  <line x1="51" y1="60" x2="51" y2="72" stroke="#334155" stroke-width="1.2"/>
  <line x1="141" y1="60" x2="141" y2="72" stroke="#334155" stroke-width="1.2"/>
  <line x1="231" y1="60" x2="231" y2="72" stroke="#334155" stroke-width="1.2"/>
  <line x1="321" y1="60" x2="321" y2="72" stroke="#334155" stroke-width="1.2"/>
  <line x1="411" y1="60" x2="411" y2="72" stroke="#334155" stroke-width="1.2"/>
  <rect x="10" y="72" width="82" height="42" rx="6" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
  <rect x="100" y="72" width="82" height="42" rx="6" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
  <rect x="190" y="72" width="82" height="42" rx="6" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
  <rect x="280" y="72" width="82" height="42" rx="6" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
  <rect x="370" y="72" width="82" height="42" rx="6" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="51" y="90" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">yield</text>
  <text x="51" y="106" text-anchor="middle" fill="#64748b" font-size="10">&sigma;vm vs Sy</text>
  <text x="141" y="90" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">buckling</text>
  <text x="141" y="106" text-anchor="middle" fill="#64748b" font-size="10">P vs Pcr</text>
  <text x="231" y="90" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">fatigue</text>
  <text x="231" y="106" text-anchor="middle" fill="#64748b" font-size="10">&sigma;a vs Se</text>
  <text x="321" y="90" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">fracture</text>
  <text x="321" y="106" text-anchor="middle" fill="#64748b" font-size="10">K vs KIC</text>
  <text x="411" y="90" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">creep</text>
  <text x="411" y="106" text-anchor="middle" fill="#64748b" font-size="10">time at T</text>
  <text x="51" y="134" text-anchor="middle" fill="#64748b" font-size="10">one big load</text>
  <text x="141" y="134" text-anchor="middle" fill="#64748b" font-size="10">slender / thin</text>
  <text x="231" y="134" text-anchor="middle" fill="#64748b" font-size="10">many cycles</text>
  <text x="321" y="134" text-anchor="middle" fill="#64748b" font-size="10">flaw present</text>
  <text x="411" y="134" text-anchor="middle" fill="#64748b" font-size="10">hot + loaded</text>
  <line x1="20" y1="152" x2="440" y2="152" stroke="#e2e8f0" stroke-width="1"/>
  <text x="20" y="172" fill="#334155" font-size="11">The design is governed by the lowest factor across all five columns.</text>
  <text x="20" y="190" fill="#64748b" font-size="11">A factor of 4 on yield says nothing at all about the other four.</text>
</svg>`;

// Lesson fig 4 — crack geometry and the K vs a curve crossing K_IC at a_c.
const figCrack = `<svg viewBox="0 0 460 262" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ft5-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="ft5-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <rect x="50" y="58" width="110" height="130" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <ellipse cx="105" cy="123" rx="22" ry="4" fill="#ffffff" stroke="#334155" stroke-width="1.5"/>
  <line x1="75" y1="52" x2="75" y2="30" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ft5-load)"/>
  <line x1="105" y1="52" x2="105" y2="30" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ft5-load)"/>
  <line x1="135" y1="52" x2="135" y2="30" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ft5-load)"/>
  <line x1="75" y1="194" x2="75" y2="216" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ft5-load)"/>
  <line x1="105" y1="194" x2="105" y2="216" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ft5-load)"/>
  <line x1="135" y1="194" x2="135" y2="216" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ft5-load)"/>
  <text x="105" y="22" text-anchor="middle" fill="#dc2626" font-weight="600">&sigma;</text>
  <text x="105" y="232" text-anchor="middle" fill="#dc2626" font-weight="600">&sigma;</text>
  <line x1="83" y1="142" x2="127" y2="142" stroke="#64748b" stroke-width="1"/>
  <line x1="83" y1="137" x2="83" y2="147" stroke="#64748b" stroke-width="1"/>
  <line x1="127" y1="137" x2="127" y2="147" stroke="#64748b" stroke-width="1"/>
  <text x="105" y="158" text-anchor="middle" fill="#64748b" font-size="11">2a</text>
  <text x="105" y="250" text-anchor="middle" fill="#64748b" font-size="10">Y depends on geometry</text>
  <line x1="250" y1="200" x2="440" y2="200" stroke="#64748b" stroke-width="1.5" marker-end="url(#ft5-ax)"/>
  <line x1="250" y1="200" x2="250" y2="50" stroke="#64748b" stroke-width="1.5" marker-end="url(#ft5-ax)"/>
  <text x="250" y="42" text-anchor="middle" fill="#64748b">K</text>
  <text x="345" y="36" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">K = Y&sigma;&radic;(&pi;a)</text>
  <path d="M250,200 C258,168 275,145 297,130 C330,108 380,80 440,60" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <line x1="250" y1="105" x2="440" y2="105" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="6 4"/>
  <text x="256" y="99" fill="#dc2626" font-size="11">K<tspan baseline-shift="sub" font-size="8">IC</tspan></text>
  <line x1="337" y1="105" x2="337" y2="200" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="5 4"/>
  <circle cx="337" cy="105" r="4.5" fill="#dc2626"/>
  <text x="337" y="216" text-anchor="middle" fill="#dc2626" font-size="11">a<tspan baseline-shift="sub" font-size="8">c</tspan></text>
  <text x="290" y="192" text-anchor="middle" fill="#64748b" font-size="10">stable</text>
  <text x="392" y="192" text-anchor="middle" fill="#dc2626" font-size="10">unstable</text>
  <text x="345" y="236" text-anchor="middle" fill="#64748b" font-size="11">crack size a</text>
</svg>`;

const content: TopicContent = {
  lesson: {
    title: "Failure Theories: Turning a Stress State into a Decision",
    intro: `<p>By the time you reach this topic the stress state is already on the table: someone has run the numbers or the FEA and handed you &sigma;<sub>1</sub>, &sigma;<sub>2</sub>, &sigma;<sub>3</sub> at the critical point. The remaining question is the one that gets asked in the interview and in the design review: <strong>does it fail?</strong> Answering it means picking a criterion that matches how the material actually breaks, comparing against the right allowable, and then admitting which of the other four failure modes you never checked.</p>
<figure class="fig">${figEnvelope}<figcaption>Von Mises and Tresca in principal-stress space. The Tresca hexagon is inscribed in the von Mises ellipse, touching at six points; the ellipse's major axis lies along &sigma;<sub>1</sub> = &sigma;<sub>2</sub>. The gap is widest in pure shear.</figcaption></figure>`,
    sections: [
      {
        heading: "Name the failure mode before you pick a formula",
        html: `<p>A failure theory is a hypothesis about <em>how</em> the material comes apart. Choose it from the material and the loading, never from habit:</p>
<table><thead><tr><th>Situation</th><th>Criterion</th></tr></thead><tbody>
<tr><td>Ductile metal, static load, yielding matters</td><td>Von Mises (or Tresca)</td></tr>
<tr><td>Brittle material, no flaw data</td><td>Maximum normal stress, Coulomb–Mohr, modified Mohr</td></tr>
<tr><td>Known or credible crack</td><td>Fracture mechanics: K vs K<sub>IC</sub></td></tr>
<tr><td>Cyclic load</td><td>Fatigue: alternating and mean stress vs an S&ndash;N allowable</td></tr>
<tr><td>Slender or thin-walled in compression</td><td>Stability: P vs P<sub>cr</sub></td></tr>
</tbody></table>
<p>Getting the stress state itself, transformation, principal stresses, Mohr's circle, K<sub>t</sub> from a chart, is a separate skill and a separate topic. Here the stress state is an input.</p>
<div class="callout">Answer pattern that scores well: material behaviour &rarr; failure mode &rarr; criterion &rarr; allowable &rarr; number &rarr; what the number does <em>not</em> cover.</div>`,
      },
      {
        heading: "Von Mises and Tresca: the ductile pair",
        html: `<p>Von Mises says a ductile metal yields when the distortion energy reaches the level it reaches in a uniaxial tension test. In terms of principal stresses:</p>
<p class="eq">&sigma;<sub>vm</sub> = &radic;{[(&sigma;<sub>1</sub> &minus; &sigma;<sub>2</sub>)&sup2; + (&sigma;<sub>2</sub> &minus; &sigma;<sub>3</sub>)&sup2; + (&sigma;<sub>3</sub> &minus; &sigma;<sub>1</sub>)&sup2;] / 2}</p>
<p>and at a free surface with one normal stress and one shear stress, the shaft, the bracket, the weld toe:</p>
<p class="eq">&sigma;<sub>vm</sub> = &radic;(&sigma;&sup2; + 3&tau;&sup2;)</p>
<p>Tresca says the metal yields when the maximum shear stress reaches the value it has at uniaxial yield, S<sub>y</sub>/2. Written as an equivalent stress:</p>
<p class="eq">&sigma;<sub>eq,T</sub> = &sigma;<sub>1</sub> &minus; &sigma;<sub>3</sub></p>
<p>with &sigma;<sub>1</sub> and &sigma;<sub>3</sub> the algebraically largest and smallest of the three principal stresses, <strong>including the zero</strong> in plane stress. Forgetting that a plane-stress point has &sigma;<sub>3</sub> = 0 is the single most common Tresca error.</p>
<p><strong>Why von Mises for ductile metals:</strong> it matches thin-walled tube test data on steel, aluminium and copper better than Tresca; it is smooth, so it differentiates cleanly and behaves well in plasticity solvers; and it is what every FEA post-processor plots. <strong>Why Tresca is more conservative:</strong> the hexagon is inscribed in the ellipse, so for the same stress state Tresca never predicts a higher capacity. The gap is zero in uniaxial tension and in equal biaxial tension, and largest in pure shear, where Tresca allows &tau; = 0.500 S<sub>y</sub> and von Mises allows &tau; = 0.577 S<sub>y</sub>, a 15.5% difference in allowable load.</p>
<div class="callout warn">Von Mises is a <em>yielding</em> criterion for <em>ductile</em> materials. It is not a fracture criterion, it says nothing about fatigue, and applying it to grey cast iron or a ceramic is a physics error, not a conservative simplification.</div>`,
      },
      {
        heading: "Brittle materials need a different criterion",
        html: `<p>Ductile metals yield by shear on slip planes, so a criterion built on shear (von Mises, Tresca) works. Brittle materials separate by tensile opening of a flaw, so the criterion has to be built on tensile normal stress. Three levels of sophistication:</p>
<ul>
<li><strong>Maximum normal stress:</strong> fail when &sigma;<sub>1</sub> &ge; S<sub>ut</sub> or &sigma;<sub>3</sub> &le; &minus;S<sub>uc</sub>. Fine in the tension&ndash;tension quadrant, unsafe when tension and compression coexist.</li>
<li><strong>Coulomb–Mohr:</strong> in the mixed quadrant, &sigma;<sub>1</sub>/S<sub>ut</sub> &minus; &sigma;<sub>3</sub>/S<sub>uc</sub> = 1/n. Straight-line interpolation between the two strengths; conservative and easy to defend.</li>
<li><strong>Modified Mohr:</strong> the same idea corrected to fit cast-iron data, which sits above the Coulomb–Mohr line until the compressive stress reaches about &minus;S<sub>ut</sub>. Usually the best fit for grey iron.</li>
</ul>
<p>Brittle materials are also strongly asymmetric: grey cast iron typically has S<sub>uc</sub> of 3 to 4 times S<sub>ut</sub>. That asymmetry is exactly what von Mises cannot represent. Von Mises is symmetric in tension and compression and has no S<sub>ut</sub> in it at all. Run von Mises on a cast-iron housing and compare it to S<sub>ut</sub> and you will call a part safe that is about to crack from a tensile principal stress half the size.</p>
<figure class="fig">${figTorsion}<figcaption>The classic pair. In pure torsion the surface sees pure shear: &tau; on the transverse and longitudinal planes, and &sigma;<sub>1</sub> = +&tau; on the 45&deg; plane. Ductile steel yields and separates on the shear plane, giving a flat break square to the axis. Grey iron cracks on the tension plane, giving a 45&deg; helix.</figcaption></figure>`,
      },
      {
        heading: "Factor of safety: on stress, on load, or on life?",
        html: `<p>A factor of safety is a ratio, and the first question in any review is <em>a ratio of what</em>. The three common choices are not interchangeable:</p>
<p class="eq">n<sub>stress</sub> = S<sub>y</sub> / &sigma;<sub>vm</sub> &nbsp;&nbsp; n<sub>load</sub> = P<sub>fail</sub> / P<sub>applied</sub> &nbsp;&nbsp; n<sub>life</sub> = N<sub>fail</sub> / N<sub>required</sub></p>
<p>For a linear problem, stress proportional to load, the first two are the same number and nobody notices the distinction. They diverge as soon as the response is nonlinear. Hertzian contact gives &sigma; &prop; P<sup>1/3</sup>, so doubling the load raises the peak stress by only 2<sup>1/3</sup> = 1.26; a stress factor of 1.26 is really a load factor of 2. Buckling, snap-through, bolted-joint separation, plastic collapse and any contact problem all behave this way. Fatigue is worse: with N &prop; &Delta;&sigma;<sup>&minus;3</sup>, a 20% cut in stress range multiplies life by 1/0.8&sup3; = 1.95.</p>
<p><strong>Quote the factor on the quantity that is uncertain.</strong> If the load spectrum is what you do not know, a factor on load is the honest statement. If the material scatter dominates, a factor on strength is. Saying "we have a factor of 3" without saying on what is a non-answer.</p>
<p><strong>Where the number comes from:</strong> consequence of failure, confidence in the load, material scatter and whether you use minimum-specified or measured properties, fidelity of the analysis, inspectability, and whatever the governing code demands. It is not a personal preference.</p>
<div class="callout warn">Stacking conservatisms is bad engineering. A 1.4 load factor, an S<sub>y</sub>/1.5 allowable, minimum-spec strength instead of typical (1.2), and a 10% analyst round-up multiply to a real factor of 2.77 while the drawing claims 1.5. Nobody can see the margin, so nobody can trade it. Carry one explicit factor and state the assumptions separately.</div>`,
      },
      {
        heading: "Which mode actually governs",
        html: `<p>Every real failure investigation ends the same way: the part was checked for one mode and failed by another. Yield, buckling, fatigue, fracture and creep are five independent checks on the same piece of metal, and the design is set by the smallest factor among them.</p>
<figure class="fig">${figModes}<figcaption>Five checks, five factors. A yield factor of 4 constrains only the first column.</figcaption></figure>
<p>Rules of thumb for spotting the likely winner before you compute anything: a slender or thin-walled member in compression is a buckling problem long before it is a yield problem; anything that moves or vibrates is a fatigue problem; a high-strength steel, a weld, a casting, or a part below its transition temperature is a fracture problem; anything above roughly 0.4 of its absolute melting temperature under sustained load is a creep problem. Bolted joints add a sixth: the joint separates or slips well before the bolt yields.</p>`,
      },
      {
        heading: "Fracture mechanics: when a flaw sets the allowable",
        html: `<p>Once a crack-like flaw is credible, stress alone no longer decides. The crack-tip driving force is the stress intensity factor:</p>
<p class="eq">K = Y&sigma;&radic;(&pi;a)</p>
<p><strong>&sigma;</strong> is the stress that would exist at the crack location if the crack were not there, <strong>a</strong> is crack size <em>in metres</em>, and <strong>Y</strong> is a dimensionless geometry factor (about 1.12 for a surface crack, 1.0 for a central crack in a wide plate). Fast fracture occurs when K reaches the plane-strain fracture toughness <strong>K<sub>IC</sub></strong>, a material property in MPa&radic;m. Rearranged, that gives the critical crack size:</p>
<p class="eq">a<sub>c</sub> = (K<sub>IC</sub> / Y&sigma;)&sup2; / &pi;</p>
<figure class="fig">${figCrack}<figcaption>K grows as &radic;a. Where it crosses K<sub>IC</sub> is the critical crack size for that stress level; because a<sub>c</sub> goes as 1/&sigma;&sup2;, doubling stress quarters the tolerable flaw.</figcaption></figure>
<p>Three consequences worth knowing cold. First, the classic unit error: leaving <em>a</em> in millimetres inflates K by &radic;1000 = 31.6. Second, toughness and strength usually trade against each other, so raising S<sub>y</sub> to gain yield margin can shrink a<sub>c</sub> below what your inspection can find. The part gets less safe. Third, <strong>leak before break</strong>: design a pressure boundary so that a<sub>c</sub> at operating stress exceeds the wall thickness. A crack then grows through the wall and leaks detectably instead of running as a burst.</p>`,
      },
      {
        heading: "Residual and mean stress change the decision",
        html: `<p>Residual stresses are self-equilibrating: they carry no net load, which is why they do <em>not</em> change the plastic collapse load of a ductile part. Beyond first yield the material redistributes and the limit load is unchanged. That is the one place you may legitimately ignore them.</p>
<p>Everywhere else they matter, because the mechanisms that care are driven by the <em>total</em> local tensile stress:</p>
<ul>
<li><strong>Fracture:</strong> K is driven by applied plus residual stress. A weld with residual tension at yield magnitude can double or triple the driving force. Post-weld heat treatment exists for that reason, and fracture assessments treat weld residual stress as a primary input rather than a footnote.</li>
<li><strong>Fatigue:</strong> residual stress acts as a mean stress. Shot peening puts the surface into compression and buys life at no weight cost; grinding burn, aggressive machining and welding leave surface tension and take it away.</li>
<li><strong>Stress-corrosion and hydrogen cracking:</strong> both need sustained tensile stress, and residual stress supplies it with no external load at all.</li>
</ul>
<div class="callout">If someone hands you a fatigue or fracture result computed from applied stress only on a welded or ground part, that number is optimistic. Ask what mean-stress or residual-stress assumption went in.</div>`,
      },
    ],
    equations: [
      { name: "Von Mises (principal form)", formula: "<p>&sigma;<sub>vm</sub> = &radic;{[(&sigma;<sub>1</sub>&minus;&sigma;<sub>2</sub>)&sup2; + (&sigma;<sub>2</sub>&minus;&sigma;<sub>3</sub>)&sup2; + (&sigma;<sub>3</sub>&minus;&sigma;<sub>1</sub>)&sup2;]/2}</p>", note: "Compare with S<sub>y</sub> for ductile static yielding. Responds only to differences between principal stresses, so hydrostatic pressure contributes nothing." },
      { name: "Von Mises at a free surface", formula: "<p>&sigma;<sub>vm</sub> = &radic;(&sigma;&sup2; + 3&tau;&sup2;)</p>", note: "&sigma; is the normal stress and &tau; the shear stress at the same point. The workhorse for shafts under bending plus torsion." },
      { name: "Tresca equivalent stress", formula: "<p>&sigma;<sub>eq,T</sub> = &sigma;<sub>1</sub> &minus; &sigma;<sub>3</sub></p>", note: "Largest minus smallest principal stress, and in plane stress the third principal stress is zero. Include it." },
      { name: "Shear yield strength", formula: "<p>&tau;<sub>y</sub> = 0.577 S<sub>y</sub> (von Mises) &nbsp; &tau;<sub>y</sub> = 0.500 S<sub>y</sub> (Tresca)</p>", note: "The pure-shear case, where the two criteria differ most: 15.5% in allowable load." },
      { name: "Coulomb–Mohr (brittle)", formula: "<p>&sigma;<sub>1</sub>/S<sub>ut</sub> &minus; &sigma;<sub>3</sub>/S<sub>uc</sub> = 1/n</p>", note: "For a brittle material with &sigma;<sub>1</sub> &gt; 0 &gt; &sigma;<sub>3</sub>. S<sub>uc</sub> is entered as a positive magnitude." },
      { name: "Factor of safety", formula: "<p>n = capacity / demand</p>", note: "State the quantity: stress, load or life. They coincide only when the response is linear." },
      { name: "Stress intensity factor", formula: "<p>K = Y&sigma;&radic;(&pi;a)</p>", note: "a in metres, &sigma; the stress at the crack location without the crack, Y a geometry factor. Fast fracture at K = K<sub>IC</sub>." },
      { name: "Critical crack size", formula: "<p>a<sub>c</sub> = (K<sub>IC</sub>/Y&sigma;)&sup2; / &pi;</p>", note: "Inverse-square in stress: doubling the stress quarters the tolerable flaw. Compare a<sub>c</sub> to your NDT detection limit and to the wall thickness." },
    ],
    interviewTips: [
      "Name the material behaviour and the failure mode before you write a criterion down.",
      "Von Mises for ductile yielding, maximum normal stress or Coulomb-Mohr for brittle, K vs K_IC once a flaw is credible.",
      "In plane stress the third principal stress is zero and it belongs in the Tresca difference.",
      "Say what your factor of safety is a factor on. On load and on stress are different numbers as soon as anything is nonlinear.",
      "Yield, buckling, fatigue, fracture and creep are five separate checks; the smallest factor is the design.",
      "Keep crack size in metres, and remember a_c scales as 1/stress squared.",
      "Residual stress does not change a ductile limit load but does change fatigue and fracture.",
    ],
  },
  questions: [
    {
      id: "failure-theories-q01",
      type: "mc",
      difficulty: 2,
      figure: figEnvelope,
      prompt: `<p>At the critical point of a 6061-T6 bracket (S<sub>y</sub> = 275 MPa) the principal stresses are &sigma;<sub>1</sub> = 90 MPa, &sigma;<sub>2</sub> = &minus;40 MPa, &sigma;<sub>3</sub> = 0. The design review wants one equivalent stress for the yield check. Which number do you put on the slide?</p>`,
      choices: [
        "130 MPa &mdash; the Tresca difference &sigma;<sub>1</sub> &minus; &sigma;<sub>3</sub>",
        "90 MPa &mdash; the largest principal stress on its own",
        "115 MPa &mdash; the von Mises equivalent stress",
        "50 MPa &mdash; the algebraic sum &sigma;<sub>1</sub> + &sigma;<sub>2</sub>",
      ],
      answer: 2,
      explanation: `<p>6061-T6 is a ductile metal under static load, so the yielding criterion is von Mises:</p><p class="eq">&sigma;<sub>vm</sub> = &radic;(&sigma;<sub>1</sub>&sup2; &minus; &sigma;<sub>1</sub>&sigma;<sub>2</sub> + &sigma;<sub>2</sub>&sup2;)</p><p class="eq">&sigma;<sub>vm</sub> = &radic;(90&sup2; &minus; 90(&minus;40) + 40&sup2;) = &radic;(8100 + 3600 + 1600) = &radic;13300 = <strong>115 MPa</strong></p><p>n = 275/115 = 2.39. The distractors are the three standard errors: 130 MPa is Tresca, which is correct physics but the conservative answer, not the one that matches ductile metal data; 90 MPa is the maximum-principal-stress criterion, which belongs to brittle materials; and adding the principal stresses has no criterion behind it at all. Report von Mises, and say Tresca gives 130 MPa if you want the conservative bound.</p>`,
    },
    {
      id: "failure-theories-q02",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A ductile steel shaft in pure torsion has a surface shear stress of 110 MPa and no normal stress at that point. What is the von Mises equivalent stress, in MPa?</p>`,
      answer: 191,
      unit: "MPa",
      explanation: `<p>At a free surface with no normal stress the von Mises expression collapses to the shear term:</p><p class="eq">&sigma;<sub>vm</sub> = &radic;3 &middot; &tau; = 1.732 &times; 110 = <strong>191 MPa</strong></p><p>Shear is more damaging than the same number in tension. 110 MPa of shear works the material as hard as 191 MPa of pull, which is why you never compare &tau; against S<sub>y</sub> directly.</p>`,
    },
    {
      id: "failure-theories-q03",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A steel lug (S<sub>y</sub> = 250 MPa) has &sigma;<sub>x</sub> = 100 MPa, &sigma;<sub>y</sub> = 0 and &tau;<sub>xy</sub> = 50 MPa at the critical point. What static yield factor of safety do you report?</p>`,
      answer: 1.89,
      explanation: `<p class="eq">&sigma;<sub>vm</sub> = &radic;(&sigma;<sub>x</sub>&sup2; &minus; &sigma;<sub>x</sub>&sigma;<sub>y</sub> + &sigma;<sub>y</sub>&sup2; + 3&tau;<sub>xy</sub>&sup2;) = &radic;(100&sup2; + 3(50&sup2;)) = 132.3 MPa</p><p class="eq">n = S<sub>y</sub>/&sigma;<sub>vm</sub> = 250/132.3 = <strong>1.89</strong></p><p>No need to go through principal stresses. The shear carries a factor of 3, so 50 MPa of it adds as much as 87 MPa of tension would. Drop the 3 and you get an optimistic 2.24.</p>`,
    },
    {
      id: "failure-theories-q04",
      type: "mc",
      difficulty: 2,
      prompt: `<p>Your company's structures manual mandates Tresca; your supplier's report uses von Mises. In which stress state will the two disagree most, and by how much?</p>`,
      choices: [
        "Equal biaxial tension &sigma;<sub>1</sub> = &sigma;<sub>2</sub>; Tresca is 15% lower",
        "Uniaxial tension; Tresca is about 15% lower there",
        "Hydrostatic tension; both go to zero, so the gap is 100%",
        "Pure shear &sigma;<sub>2</sub> = &minus;&sigma;<sub>1</sub>; Tresca is 15.5% lower, 0.50S<sub>y</sub> vs 0.577S<sub>y</sub>",
      ],
      answer: 3,
      explanation: `<p>The hexagon is inscribed in the ellipse and touches it at six points, so the two criteria agree exactly at those points and Tresca is conservative in between. The touch points include uniaxial tension (&sigma;<sub>1</sub> = S<sub>y</sub>, &sigma;<sub>2</sub> = 0) and equal biaxial tension (&sigma;<sub>1</sub> = &sigma;<sub>2</sub> = S<sub>y</sub>), so those two states show <em>no</em> disagreement at all.</p><p>The maximum gap is at the mid-edge, which is pure shear. There von Mises allows &tau; = S<sub>y</sub>/&radic;3 = 0.577 S<sub>y</sub> and Tresca allows &tau; = S<sub>y</sub>/2 = 0.500 S<sub>y</sub>:</p><p class="eq">0.577/0.500 = 1.155 &rarr; <strong>15.5% difference in allowable load</strong></p><p>Practically: on a shaft in near-pure torsion the manual costs you 15% of torque capacity; on a pressure vessel in biaxial tension it costs nothing. Hydrostatic tension is not a gap case. Von Mises gives zero there, and so does Tresca, because all three principal stresses are equal.</p>`,
    },
    {
      id: "failure-theories-q05",
      type: "numeric",
      difficulty: 3,
      figure: figEnvelope,
      prompt: `<p>A ductile part (S<sub>y</sub> = 200 MPa) carries &sigma;<sub>1</sub> = 140 MPa, &sigma;<sub>2</sub> = &minus;60 MPa, &sigma;<sub>3</sub> = 0 at limit load. Tresca puts it exactly at yield. By what percentage more load would von Mises allow before yielding? Give the answer in percent.</p>`,
      answer: 12.5,
      unit: "%",
      tolerance: 0.05,
      explanation: `<p>Both criteria scale linearly with load, so the ratio of allowable loads equals the ratio of the two factors of safety.</p><p class="eq">&sigma;<sub>eq,T</sub> = &sigma;<sub>1</sub> &minus; &sigma;<sub>3</sub> = 140 &minus; (&minus;60) = 200 MPa &rarr; n<sub>T</sub> = 200/200 = 1.00</p><p class="eq">&sigma;<sub>vm</sub> = &radic;(140&sup2; &minus; 140(&minus;60) + 60&sup2;) = &radic;(19600 + 8400 + 3600) = &radic;31600 = 177.8 MPa</p><p class="eq">n<sub>vm</sub> = 200/177.8 = 1.125 &rarr; (1.125 &minus; 1.00)/1.00 = <strong>12.5%</strong></p><p>The slip is taking &sigma;<sub>3</sub> as &minus;60 rather than recognising that the smallest principal stress here <em>is</em> &minus;60 and the zero is the middle one. Order them: 140 &gt; 0 &gt; &minus;60, so &sigma;<sub>1</sub> = 140 and &sigma;<sub>3</sub> = &minus;60. This state is not far off pure shear, which is why the gap is close to the 15.5% maximum. Whether you spend that 12.5% is a policy question: if the manual says Tresca, you are buying margin, not finding an error.</p>`,
    },
    {
      id: "failure-theories-q06",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A supplier rated a ductile steel shaft by requiring the surface shear stress to stay below the tensile yield strength (&tau; &le; S<sub>y</sub>). Judged against von Mises, by what factor is that torque rating unconservative? Give the factor.</p>`,
      answer: 1.73,
      explanation: `<p>Under von Mises the shear stress at yield is not S<sub>y</sub>:</p><p class="eq">&radic;3 &tau; = S<sub>y</sub> &rarr; &tau;<sub>y</sub> = 0.577 S<sub>y</sub></p><p>The supplier permitted &tau; = S<sub>y</sub>, so the rating runs high by &radic;3 = <strong>1.73</strong>. The shaft yields at 58% of its rated torque. Against Tresca the error is a clean factor of 2.00.</p>`,
    },
    {
      id: "failure-theories-q07",
      type: "mc",
      difficulty: 2,
      figure: figTorsion,
      prompt: `<p>Two 30 mm shafts are twisted to destruction. The 1045 steel one breaks on a flat plane square to the axis; the grey cast iron one breaks on a 45&deg; helix. Which pair of criteria should have been used to size them?</p>`,
      choices: [
        "von Mises for the steel, maximum normal stress for the iron",
        "maximum normal stress for both, since both broke in tension",
        "von Mises for both, since both are metals in pure shear",
        "Tresca for the steel, and Euler buckling for the cast iron",
      ],
      answer: 0,
      explanation: `<p>Pure torsion puts the surface in pure shear: &tau; on the transverse and longitudinal planes, and principal stresses &sigma;<sub>1</sub> = +&tau; at 45&deg;, &sigma;<sub>3</sub> = &minus;&tau; at 135&deg;. Both materials see the same stress state; they choose different planes because they have different failure mechanisms.</p><p>Ductile steel yields by shear on slip planes, so it fails on the plane of maximum shear, the transverse plane, and that is a von Mises or Tresca problem. Grey iron separates by tensile opening of graphite flakes, so it fails on the plane carrying &sigma;<sub>1</sub>, which is at 45&deg; and sweeps around the shaft as a helix; that is a maximum-normal-stress problem.</p><p>The fracture surface is therefore free diagnostic information at the failure-analysis table: a flat torsional break says the material behaved ductilely, a helix says it behaved brittlely, and a helix on a part you specified as ductile steel means something changed, heat treatment, temperature, hydrogen, or the wrong bar.</p>`,
    },
    {
      id: "failure-theories-q08",
      type: "mc",
      difficulty: 2,
      prompt: `<p>An FEA report on a grey cast-iron housing states: peak &sigma;<sub>vm</sub> = 180 MPa, S<sub>ut</sub> = 210 MPa, therefore safe. The housing cracks in service. What is wrong with the report?</p>`,
      choices: [
        "Nothing &mdash; von Mises is the right scalar for any metal",
        "&sigma;<sub>vm</sub> should have been compared with S<sub>y</sub>, not S<sub>ut</sub>",
        "Grey iron is brittle: compare &sigma;<sub>1</sub> against S<sub>ut</sub>, not &sigma;<sub>vm</sub>",
        "&sigma;<sub>vm</sub> must be scaled by &radic;3 for cast materials",
      ],
      answer: 2,
      explanation: `<p>Von Mises is a distortion-energy yielding criterion. Grey cast iron does not yield in any useful sense. It separates by tensile opening at graphite flakes, with essentially no plastic redistribution, so the whole basis of the criterion is absent. Von Mises is also symmetric in tension and compression, while grey iron has S<sub>uc</sub> of roughly 3 to 4 times S<sub>ut</sub>.</p><p>The correct check is on the maximum principal tensile stress (or Coulomb–Mohr / modified Mohr if a compressive principal stress is also present). The failure mode is easy to miss numerically: at a point with &sigma;<sub>1</sub> = 190 MPa and &sigma;<sub>3</sub> = &minus;60 MPa, von Mises gives &radic;(190&sup2; + 190(60) + 60&sup2;) = 227 MPa, but you would not compare that number to S<sub>ut</sub> at all, and the honest brittle check is 190 vs 210, a factor of only 1.11.</p><p>Grey iron cannot yield first, so there is no S<sub>y</sub> to compare with, which rules out the second option.</p>`,
    },
    {
      id: "failure-theories-q09",
      type: "mc",
      difficulty: 3,
      figure: figCrack,
      prompt: `<p>A pressure vessel must be qualified "leak before break". What does that requirement impose on the critical crack size a<sub>c</sub> at operating stress?</p>`,
      choices: [
        "a<sub>c</sub> must be smaller than the wall so the crack arrests inside it",
        "a<sub>c</sub> must exceed the wall thickness, so a crack breaks through and leaks first",
        "a<sub>c</sub> must equal the NDT detection limit within a factor of two",
        "a<sub>c</sub> stops mattering once the vessel has passed a proof test",
      ],
      answer: 1,
      explanation: `<p>Leak before break is a containment argument, not a stress argument. You want a growing part-through crack to penetrate the wall and start leaking, a detectable, benign event, before it reaches the size at which K = K<sub>IC</sub> and the crack runs as a burst. That requires:</p><p class="eq">a<sub>c</sub> = (K<sub>IC</sub>/Y&sigma;)&sup2;/&pi; &gt; t</p><p>Since a<sub>c</sub> scales as 1/&sigma;&sup2;, the levers are toughness (up), operating stress (down) and wall thickness (down, and here a thinner wall helps the argument, which is counter-intuitive). It also explains why swapping to a higher-strength, lower-toughness steel to save weight can quietly destroy a leak-before-break case.</p><p>Option one has the inequality backwards: if a<sub>c</sub> is smaller than the wall, the crack reaches critical size while still buried and the vessel bursts with no warning. A proof test screens gross defects at one instant but does nothing about subcritical growth afterwards, so it cannot replace the argument.</p>`,
    },
    {
      id: "failure-theories-q10",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A plate carries a remote tensile stress of 100 MPa and contains a crack of size a = 2.0 mm with geometry factor Y = 1.1. What is the stress intensity K, in MPa&radic;m?</p>`,
      answer: 8.72,
      unit: "MPa√m",
      explanation: `<p><em>a</em> goes in <strong>metres</strong>.</p><p class="eq">K = Y&sigma;&radic;(&pi;a) = 1.1 &times; 100 &times; &radic;(&pi; &times; 0.0020) = 1.1 &times; 100 &times; 0.07927 = <strong>8.72 MPa&radic;m</strong></p><p>Leave <em>a</em> in millimetres and you get 276 MPa&radic;m, too big by &radic;1000 = 31.6, which turns a comfortable margin into an apparent instant fracture.</p>`,
    },
    {
      id: "failure-theories-q11",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A component runs at a tensile stress of 150 MPa. The material has K<sub>IC</sub> = 30 MPa&radic;m and the relevant geometry factor is Y = 1.1. Above what crack size, in mm, does fast fracture become possible?</p>`,
      answer: 10.5,
      unit: "mm",
      explanation: `<p>Set K = K<sub>IC</sub> and solve for a:</p><p class="eq">a<sub>c</sub> = (K<sub>IC</sub>/(Y&sigma;))&sup2;/&pi; = (30/(1.1 &times; 150))&sup2;/&pi; = 0.1818&sup2;/&pi; = <strong>10.5 mm</strong></p><p>A 10.5 mm flaw is large and easily found by dye penetrant or ultrasonics, so this design is flaw-tolerant and the yield check probably governs. Push the stress to 300 MPa and a<sub>c</sub> drops to 2.6 mm, since a<sub>c</sub> goes as 1/&sigma;&sup2;.</p>`,
    },
    {
      id: "failure-theories-q12",
      type: "mc",
      difficulty: 3,
      figure: figModes,
      prompt: `<p>A welded steel bracket was signed off with a static yield factor of 4.0 and broke in service after nine months on a vibrating skid. Which line of enquiry is worth opening first?</p>`,
      choices: [
        "Recheck the arithmetic; a factor of 4 cannot fail statically",
        "Fatigue at the weld toe, web buckling, cold brittle fracture",
        "Use ultimate strength instead of yield to raise the factor",
        "Switch the same static check from von Mises to Tresca and rerun",
      ],
      answer: 1,
      explanation: `<p>A yield factor of 4.0 is a statement about exactly one failure mode. Nine months on a vibrating skid is roughly 10<sup>8</sup> cycles, and a welded joint has an endurance limit around 50 MPa regardless of the parent metal's strength, so a static stress of S<sub>y</sub>/4 = 60&ndash;90 MPa is already at or over the fatigue allowable. That is the first suspect.</p><p>The second and third are the other modes the static check never touched: a thin web in compression can buckle at a fraction of the yield load, and a welded, notched steel section below its transition temperature can fracture from a small flaw at a nominal stress far below yield.</p><p>The three wrong options all stay inside the mode that already passed. Rechecking arithmetic, moving to S<sub>ut</sub>, or swapping criterion changes the number in column one and leaves the other four columns unexamined. The sentence that matters is: yield was never the governing mode.</p>`,
    },
    {
      id: "failure-theories-q13",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A point in a ductile part has principal stresses &sigma;<sub>1</sub> = 120 MPa, &sigma;<sub>2</sub> = 40 MPa, &sigma;<sub>3</sub> = &minus;20 MPa. What is the Tresca equivalent stress, in MPa?</p>`,
      answer: 140,
      unit: "MPa",
      explanation: `<p>Tresca runs on the largest difference between any two principal stresses, the outermost Mohr circle:</p><p class="eq">&sigma;<sub>eq,T</sub> = &sigma;<sub>max</sub> &minus; &sigma;<sub>min</sub> = 120 &minus; (&minus;20) = <strong>140 MPa</strong></p><p>The intermediate 40 MPa plays no part. Tresca ignores it, which is one reason it fits test data less well than von Mises.</p><p>Dropping the compressive stress gives 80 MPa. Comparing &tau;<sub>max</sub> = 70 against S<sub>y</sub> rather than S<sub>y</sub>/2 is the other classic slip.</p>`,
    },
    {
      id: "failure-theories-q14",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A solid steel block sits in a deep-sea housing at 60 MPa of pressure on all six faces, with no shear. How much of the yield capacity has that pressure consumed under von Mises?</p>`,
      choices: [
        "All of it &mdash; 60 MPa is a large fraction of yield",
        "Half of it, because pressure counts at half weighting",
        "It cannot be assessed until the block is machined hollow",
        "None &mdash; &sigma;<sub>vm</sub> = 0 for a hydrostatic state",
      ],
      answer: 3,
      explanation: `<p>Von Mises responds only to <em>differences</em> between principal stresses. With &sigma;<sub>1</sub> = &sigma;<sub>2</sub> = &sigma;<sub>3</sub> = &minus;60 MPa every difference is zero:</p><p class="eq">&sigma;<sub>vm</sub> = &radic;{[0&sup2; + 0&sup2; + 0&sup2;]/2} = 0</p><p>Ductile yielding is a shear process. Dislocations move on slip planes under shear, and uniform pressure produces no shear on any plane. Metals therefore survive enormous hydrostatic pressure, well above their yield strength, while yielding readily under much smaller shear-producing states. Tresca agrees: &sigma;<sub>1</sub> &minus; &sigma;<sub>3</sub> = 0.</p><p>The moment the block has a hole, a seal groove or a free surface, the state stops being hydrostatic and the shear reappears. Pressure also drives things von Mises never claimed to cover: void closure, phase change, seal extrusion.</p>`,
    },
    {
      id: "failure-theories-q15",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A ductile bracket (S<sub>y</sub> = 250 MPa, S<sub>ut</sub> = 420 MPa) locates an optical mount, and the requirement is that it must not take a permanent set in service. Which strength sets the static allowable?</p>`,
      choices: [
        "S<sub>ut</sub> = 420 MPa, since it is the true breaking strength",
        "S<sub>y</sub> = 250 MPa, since permanent set starts at yield",
        "The average of the two, as a compromise design allowable",
        "Neither; use hardness converted to an equivalent strength",
      ],
      answer: 1,
      explanation: `<p>The requirement names the limit state. "No permanent set" is a yielding requirement, so the allowable is built on S<sub>y</sub>, typically S<sub>y</sub>/n with n chosen from load uncertainty and consequence. S<sub>ut</sub> describes rupture after large plastic deformation; a mount that has yielded 2 mm has already failed its job even though it is nowhere near breaking.</p><p>The practical version of this on hardware: preloaded joints, sealing faces, bearing fits, gear meshes and anything holding an alignment are all yield-limited, because a permanent set of a few tenths of a millimetre destroys the function. Structures whose only job is to not come apart may legitimately be ultimate-limited.</p><p>Many codes require you to satisfy <em>both</em>: yield at limit load and ultimate at limit load times a larger factor. Averaging strengths has no basis, and hardness is a correlation for S<sub>ut</sub>, not a substitute for a yield allowable.</p>`,
    },
    {
      id: "failure-theories-q16",
      type: "mc",
      difficulty: 2,
      prompt: `<p>An alumina insulator sees &sigma;<sub>1</sub> = +45 MPa and &sigma;<sub>3</sub> = &minus;300 MPa at the same point. Alumina has a tensile strength near 250 MPa and a compressive strength near 2000 MPa. Which check decides whether it survives?</p>`,
      choices: [
        "The compressive stress, since 300 MPa is by far the larger",
        "Von Mises, which combines both into a single equivalent stress",
        "The mean of the two principal stresses against tensile strength",
        "The +45 MPa tension against the 250 MPa tensile strength, with flaw size",
      ],
      answer: 3,
      explanation: `<p>Ceramics fail by tensile opening of pre-existing flaws, pores, machining damage, grain-boundary defects. Compression closes flaws instead of opening them, which is why alumina is roughly eight times stronger in compression than in tension. Run the numbers both ways: 250/45 = 5.6 in tension and 2000/300 = 6.7 in compression, so tension governs even though its stress is a sixth of the compressive one.</p><p>Von Mises would give &radic;(45&sup2; + 45(300) + 300&sup2;) = 325 MPa, and there is no strength to compare it with: a ceramic has no yield strength, and comparing 325 to S<sub>ut</sub> = 250 would declare a perfectly sound part failed.</p><p>Then there is scatter. Ceramic strength is flaw-controlled and Weibull-distributed, so a single deterministic factor of 5.6 does not mean a 5.6&times; margin on failure probability. Real practice uses a Weibull modulus, proof testing, and a design stress well under the mean strength.</p>`,
    },
    {
      id: "failure-theories-q17",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A point deep inside a forged fitting has principal stresses of 120 MPa, 120 MPa and 20 MPa. What is the von Mises equivalent stress, in MPa?</p>`,
      answer: 100,
      unit: "MPa",
      explanation: `<p>Use the principal form:</p><p class="eq">&sigma;<sub>vm</sub> = &radic;{[(&sigma;<sub>1</sub>&minus;&sigma;<sub>2</sub>)&sup2; + (&sigma;<sub>2</sub>&minus;&sigma;<sub>3</sub>)&sup2; + (&sigma;<sub>3</sub>&minus;&sigma;<sub>1</sub>)&sup2;]/2}</p><p class="eq">= &radic;{[0 + (100)&sup2; + (&minus;100)&sup2;]/2} = &radic;10000 = <strong>100 MPa</strong></p><p>Lower than any of the three stresses, which surprises people the first time. The state carries a large hydrostatic part, mean stress 86.7 MPa, and only the deviatoric remainder drives yielding. Tresca lands on the same number here, 120 &minus; 20 = 100 MPa, because this state sits at a hexagon vertex where the two criteria touch.</p><p>High triaxial tension suppresses yielding, which sounds good and is not. It removes the plastic blunting that protects a crack tip. Constraint of exactly this kind is why thick sections fracture at stresses a thin sheet would shrug off.</p>`,
    },
    {
      id: "failure-theories-q18",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A safety-critical casting has porosity that analysis cannot bound. Someone proposes proof-loading every unit to 1.5&times; limit load and shipping the survivors. What is the main technical objection?</p>`,
      choices: [
        "Proof loads cannot be applied accurately enough to be meaningful",
        "The test would have to be repeated on every batch, not every unit",
        "The proof load can grow subcritical flaws, so survivors ship with less life left",
        "Measuring load and displacement during the test adds no information",
      ],
      answer: 2,
      explanation: `<p>Proof testing is a real and respected screening tool. It is how pressure vessels, lifting gear and some aerospace castings are qualified. It works because a part that survives a known load demonstrably has no flaw larger than the size that would have been critical at that load, which caps the initial flaw for a damage-tolerance calculation.</p><p>The objection is what the test does to the survivors. At 1.5&times; limit load the stress intensity at every existing flaw is 1.5 times higher, which can drive subcritical growth (tearing, or crack extension under sustained load) and can leave the part with a larger flaw and shorter life than it started with. In ductile material it can also introduce local plasticity and change the residual stress field at the very locations you care about.</p><p>A defensible proof plan therefore states the load level, hold time, temperature and environment, and then does the fracture-mechanics arithmetic to show that a flaw just surviving the proof load still has adequate remaining life at service stress. Proof testing is evidence, not a substitute for understanding the damage mechanism.</p>`,
    },
    {
      id: "failure-theories-q19",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A pressure-cap fillet sees bolt preload, internal pressure and a prying bracket load. The report checks each of the three load cases separately against yield and finds factors of 3.1, 2.8 and 4.0. Why is that not a safe conclusion?</p>`,
      choices: [
        "Load cases evaluated one at a time are always conservative anyway",
        "Preload is a residual stress and never combines with service stress",
        "Fillets remove multiaxiality, so the checks should have been uniaxial",
        "The material sees the sum of the three at the same instant and point",
      ],
      answer: 3,
      explanation: `<p>A failure criterion acts on the stress state that exists at a point at an instant, not on a list of separate contributions. Preload puts tension across the fillet, pressure adds membrane stress, and the bracket adds bending and shear at the same location, and they are present together. You must sum the components with their correct signs and directions first, and only then form &sigma;<sub>vm</sub>.</p><p>Numerically this bites hard. Three individually modest components can combine to a von Mises stress well above any of them, especially when one adds shear: &sigma; = 100 MPa alone gives 100, but with &tau; = 60 MPa alongside it gives &radic;(100&sup2; + 3&times;60&sup2;) = 148 MPa, so a "3.1" and a "2.8" become about 1.7 together.</p><p>Individual load cases are only conservative in the special situation where you are looking for a single dominant case and the others oppose it, which is exactly what you cannot know without combining them. The correct process is defined load combinations with signs, evaluated at each critical point.</p>`,
    },
    {
      id: "failure-theories-q20",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A welded carbon-steel lifting bracket passes qualification at +20 &deg;C and shatters at the same load on a &minus;40 &deg;C morning, with a flat, faceted fracture surface and no visible deformation. What happened?</p>`,
      choices: [
        "The steel dropped below its transition temperature and fractured",
        "The yield strength fell far enough at &minus;40 &deg;C to allow collapse",
        "Thermal contraction of the bracket doubled the applied load",
        "The elastic modulus rose enough to raise stresses past ultimate",
      ],
      answer: 0,
      explanation: `<p>Body-centred-cubic steels have a ductile-to-brittle transition. Above it, a Charpy specimen absorbs tens of joules and the fracture is a fibrous shear surface; below it the absorbed energy collapses to a few joules and the fracture goes flat and faceted by cleavage. The flat, deformation-free surface described is the signature.</p><p>Everything that makes the transition worse was present: a weld (residual tension near yield plus a toe notch), a thick section (plane-strain constraint), a fast load application, and a coarse or unnormalised heat-affected zone. Effective fracture toughness can fall from over 100 to under 30 MPa&radic;m across a few tens of degrees, so a flaw that was harmless at +20 &deg;C becomes critical.</p><p>The wrong options invert the physics: cold steel is <em>stronger</em>, not weaker. Yield and ultimate both rise as temperature falls, which is why a yield-based check gives no warning at all. E changes by only a few percent, and unrestrained contraction produces no load. The fix is a steel with a specified Charpy value at the minimum service temperature, plus attention to the weld detail.</p>`,
    },
  ],
  qna: [
    {
      id: "failure-theories-qa01",
      q: `<p>I hand you a stress state and a material. Talk me through how you decide the part is safe.</p>`,
      a: `<p>First I ask what the material does when it is overloaded, because that picks the criterion. If it is a ductile metal under a static load I use von Mises, either &radic;(&sigma;&sup2; + 3&tau;&sup2;) at a surface point or the principal form, and compare to S<sub>y</sub>. If it is grey iron, a ceramic or a filled polymer I switch to maximum principal tensile stress, or Coulomb–Mohr if there is a big compressive principal stress alongside the tension, because those materials open flaws in tension rather than yielding in shear.</p><p>Then I ask what else could get it. A static factor only covers static yielding, so I want to know: is the load cyclic, is the member slender or thin-walled in compression, is there a credible crack or a weld, is it hot, is it cold enough to be below transition? Each of those is a separate check with its own factor, and the design is the smallest one.</p><p>Finally I say what my number is a factor <em>on</em>, stress, load or life, and what assumptions it hides: minimum-spec versus typical properties, whether residual stress is in there, how well I actually know the load. If I can't name those, the factor isn't a real number, it's a decoration.</p>`,
    },
    {
      id: "failure-theories-qa02",
      q: `<p>Your post-processor only plots von Mises. When does that plot lie to you?</p>`,
      a: `<p>Three situations. First, when the material is not ductile. Von Mises is symmetric in tension and compression and is built on distortion energy, so on grey cast iron, a ceramic, a glass-filled polymer or concrete it can show a comfortable number while the part is about to crack from a tensile principal stress. On those materials I switch the plot to maximum principal stress and look at where the tension is.</p><p>Second, when the failure mode is not yielding. Von Mises is blind to fatigue. It is a scalar with no sign or direction, so it cannot tell me the alternating and mean components, and it is blind to fracture, where the driver is K, not stress. It also says nothing about stability: a thin web can be well inside a green von Mises contour and buckle.</p><p>Third, when the peak is not real. A sharp reentrant corner or a single-node point load produces a stress that keeps rising with mesh refinement, and the colour scale will happily show it as the hottest spot in the model. Before I believe any peak I check convergence and whether the geometry and load introduction are physical.</p><p>What I do trust it for: ductile metal, static load, converged mesh, real geometry. That is a lot of parts, which is why it is the default, but it is a default, not a law.</p>`,
    },
    {
      id: "failure-theories-qa03",
      q: `<p>The design guide says factor of safety 2.0. Two on what? Convince me your number means something.</p>`,
      a: `<p>It has to be a ratio of a capacity to a demand, and I have to name both. On a ductile static check I mean n = S<sub>y</sub>/&sigma;<sub>vm</sub>: a factor on stress, using minimum-specified yield, with the stress computed at the critical point of a converged model. That is a different number from a factor on load unless the problem is linear, and plenty of the problems that matter are not: Hertzian contact goes as P<sup>1/3</sup>, so a load factor of 2 is only a stress factor of 1.26; buckling and joint separation have their own load-capacity definitions; and in fatigue a factor of 2 on life is a factor of about 1.26 on stress if the S&ndash;N slope is cubic.</p><p>So the rule I follow is to put the factor on whatever is actually uncertain. If the load spectrum is the unknown, quote a factor on load, because that is the question being answered. If the material is the unknown, quote it on strength.</p><p>Where the 2.0 itself comes from is a separate conversation: consequence of failure, quality of the load data, material scatter, analysis fidelity, whether the part is inspectable, and what the code demands. And I want it carried in one place. If I also use worst-case loads, minimum properties and a rounded-up stress, the real factor is 3 or more, the drawing says 2, and nobody can trade the margin because nobody can see it.</p>`,
    },
    {
      id: "failure-theories-qa04",
      q: `<p>A cracked bracket comes back from the field. How do you run that investigation?</p>`,
      a: `<p>I start with the part, not the spreadsheet. Where did it crack, a fillet, a weld toe, a hole, a machining mark? What does the fracture surface say: beach marks and a small final-overload zone mean fatigue and tell me roughly how many cycles and where initiation was; a flat faceted surface with no deformation means cleavage and points at temperature, material or hydrogen; a shear lip and necking means a genuine overload; a 45&deg; helix on a torsion member means the material behaved brittlely.</p><p>Then I reconstruct the load. Was the service duty what we designed to? Vibration, resonance, transport, misuse, a stuck actuator, thermal cycling? A surprising number of field cracks are a load case nobody wrote down.</p><p>In parallel I check what the part actually is: certificate, hardness, microstructure, weld procedure, heat treatment, surface condition, residual stress. Grinding burn or a missed stress relief will show up here.</p><p>Only then do I redo the analysis, and I redo it for the mode the fracture surface pointed at, not the one in the original report. Finally I ask the fleet question: is this one bad part or a design margin problem, what do we inspect, and what is the interim disposition while we fix it?</p>`,
    },
    {
      id: "failure-theories-qa05",
      q: `<p>Two shafts, same torque test: one breaks flat, one breaks on a 45&deg; helix. What do you read off that at the failure-analysis table?</p>`,
      a: `<p>The stress state was identical in both, pure shear at the surface, with &tau; on the transverse and longitudinal planes and principal stresses &sigma;<sub>1</sub> = +&tau; at 45&deg;, &sigma;<sub>3</sub> = &minus;&tau; at 135&deg;. The difference is which of those the material could not tolerate.</p><p>A flat break square to the axis means the material failed on the maximum-shear plane. That is the ductile signature, and it tells me the right sizing criterion was von Mises or Tresca against S<sub>y</sub>, and that the torque simply exceeded the shaft's capacity.</p><p>A 45&deg; helix means it failed on the maximum-tension plane, which is the brittle signature. Grey cast iron does that by design; a shaft I specified as 4140 doing it does not, and that is now a metallurgy investigation: over-hardened without temper, hydrogen embrittlement, temper embrittlement, service below transition temperature, or the wrong bar in the bin.</p><p>So the fracture surface is free information about which criterion was ever appropriate. If the helix appears on a part sized with von Mises, the sizing was never the right calculation and the number in the report was meaningless regardless of its value.</p>`,
    },
    {
      id: "failure-theories-qa06",
      q: `<p>Your yield factor is 4 and the part broke anyway. Where do you look?</p>`,
      a: `<p>A factor of 4 on yield is a statement about one column of a five-column table, so I look at the other four. Fatigue first, because it is the most common: if the part moves, vibrates or is bolted to something that does, then at 10<sup>7</sup> to 10<sup>8</sup> cycles the allowable is the endurance limit, not S<sub>y</sub>. On a welded joint that allowable is around 50 MPa whatever the parent strength, which S<sub>y</sub>/4 will often exceed.</p><p>Second, stability: a slender strut, a thin web, a thin-walled tube in bending. Buckling loads have nothing to do with yield strength, so a yield factor tells you nothing about them at all.</p><p>Third, fracture: a weld, a casting, a high-strength steel, a cold morning, or any credible crack. Once K reaches K<sub>IC</sub> the part goes at a stress far below yield, and the higher the strength the smaller the tolerable flaw.</p><p>Fourth, environment and time: creep and relaxation if it is hot, stress-corrosion or hydrogen if the chemistry is unfriendly, wear or fretting at a joint.</p><p>And then the boring ones that are still real: the load was not what we assumed, the geometry as-built is not the geometry analysed, or the stress was evaluated at the wrong point.</p>`,
    },
    {
      id: "failure-theories-qa07",
      q: `<p>At what point do you stop doing stress analysis and start doing fracture mechanics?</p>`,
      a: `<p>When a crack-like flaw is credible and the material cannot tolerate it by yielding. Concretely, that is: welded structures, castings and forgings with known defect populations, high-strength steels and titanium where toughness is low, anything below its ductile-to-brittle transition, anything in a hydrogen or stress-corrosion environment, and anything where a formal damage-tolerance case is required by the customer or the code.</p><p>The mental test I use is the transition flaw size: set K = K<sub>IC</sub> with &sigma; = S<sub>y</sub> and solve for a. That gives the flaw size at which fracture and yielding become equally likely. For a mild steel at 250 MPa with 100 MPa&radic;m of toughness it comes out around 40 mm, bigger than most parts, so yielding always wins and fracture mechanics is irrelevant. For a 1500 MPa steel with 50 MPa&radic;m it is about 0.3 mm, which is smaller than anything you can reliably find, so fracture governs everywhere and a yield-based design is fiction.</p><p>Once I am in that regime the deliverables change: I need K<sub>IC</sub> at the right temperature and thickness, a defensible initial flaw size tied to what the NDT can actually detect, a crack-growth law and a spectrum if the loads cycle, and an inspection interval. And I would look hard at whether leak before break or a fail-safe load path gets me out of relying on inspection at all.</p>`,
    },
    {
      id: "failure-theories-qa08",
      q: `<p>How do residual stresses change the numbers you put in a design review?</p>`,
      a: `<p>It depends which check. For a ductile static limit-load check, they largely do not: residual stresses are self-equilibrating, they carry no net load, and once the section yields the material redistributes and the collapse load is unchanged. That is the one place I can honestly leave them out, and codes generally let me classify them as secondary for that reason.</p><p>For fatigue they matter a lot, because they act as a mean stress on the surface where cracks start. Shot peening or rolling puts a few hundred MPa of compression into the surface layer and can multiply life several times at no weight cost. Grinding burn, aggressive machining, flame cutting and welding do the opposite and leave surface tension. So if someone shows me a fatigue result computed from applied stress only on a ground or welded part, I treat it as optimistic and ask what mean stress went in.</p><p>For fracture they matter even more, because K is driven by the total tensile stress at the crack location. Weld residual stress can sit at yield magnitude, so a joint at 150 MPa of applied membrane stress may really be driving the crack tip at 500 MPa, more than a threefold increase in K. That is why post-weld heat treatment exists and why fracture assessments carry residual stress as a primary input.</p><p>Same for stress-corrosion and hydrogen cracking: both need sustained tension, and residual stress supplies it with the machine switched off.</p>`,
    },
    {
      id: "failure-theories-qa09",
      q: `<p>Your customer's manual mandates Tresca instead of von Mises. What actually changes in your design?</p>`,
      a: `<p>Never more than 15.5%, and often nothing. The Tresca hexagon is inscribed in the von Mises ellipse and touches it at six points, so Tresca is never less conservative and is sometimes identical. The two agree exactly in uniaxial tension and in equal biaxial tension, which covers a lot of real hardware, a tension member, a bar in bending, a spherical vessel.</p><p>The gap opens where the principal stresses have opposite signs and peaks at pure shear, where von Mises allows &tau; = 0.577 S<sub>y</sub> and Tresca allows 0.500 S<sub>y</sub>. So the parts that actually get heavier are the shear-dominated ones: shafts in torsion, torque tubes, shear webs, pins, and cylindrical vessels where hoop and longitudinal put you part way toward that region. On a shaft in near-pure torsion I would expect to give up about 15% of torque capacity, which is roughly a 5% diameter increase since torque goes as d&sup3;.</p><p>The other thing that changes is the conversation. Tresca is easy to explain from a Mohr's circle and easy to hand-check, which is a genuine advantage in a review. And I would make sure the whole chain is consistent. If the allowable stresses in the manual were derived on a Tresca basis, mixing in a von Mises stress silently removes the margin the manual thought it had.</p>`,
    },
    {
      id: "failure-theories-qa10",
      q: `<p>You have to set an allowable stress for a part nobody has built before. How do you land on a number?</p>`,
      a: `<p>I work backwards from the consequence. What happens if it fails, a scrapped print, a stopped line, or someone hurt? That sets how much of the distribution I need to stay away from, and often it sets a code that already answers the question, in which case I use the code.</p><p>Then I decide the limit state. Permanent set forbidden means yield-based; rupture only means ultimate-based; and I check whether fatigue, buckling or fracture will beat both, because there is no point setting a beautiful static allowable on a part that is fatigue-limited.</p><p>Then the inputs and their spread: minimum specified properties rather than typical, corrected for temperature and for the actual section size and orientation; how well I know the load, including transport, misuse and dynamic amplification; how good the analysis is; and how the part is made and inspected, because a casting, a weld and a machined billet do not deserve the same number.</p><p>Then I put the uncertainty in exactly one place. One explicit factor, with the assumptions listed next to it, rather than a worst-case load times a minimum property times a rounded-up stress times a factor, which stacks to something like 2.8 while claiming 1.5.</p><p>And I say how I will retire the uncertainty: a strain-gauged prototype, a load survey, a coupon programme. An allowable set from judgement is a starting point that a test should be allowed to move.</p>`,
    },
  ],
};

export default content;
