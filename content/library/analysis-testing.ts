import type { TopicContent } from "../types";

// ---------------------------------------------------------------------------
// Engineering Analysis, FEA & Test Validation
// ---------------------------------------------------------------------------

const figVModel = `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="atv-arrow" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#334155"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Analysis and test live in a verification/validation loop</text>
  <path d="M66 64 L192 226 L268 226 L394 64" fill="none" stroke="#334155" stroke-width="2"/>
  <circle cx="66" cy="64" r="28" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.6"/>
  <circle cx="148" cy="170" r="28" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
  <circle cx="230" cy="226" r="30" fill="#dcfce7" stroke="#28724f" stroke-width="1.6"/>
  <circle cx="312" cy="170" r="28" fill="#fee2e2" stroke="#dc2626" stroke-width="1.6"/>
  <circle cx="394" cy="64" r="28" fill="#fff7ed" stroke="#b45309" stroke-width="1.6"/>
  <text x="66" y="60" text-anchor="middle" font-weight="700" fill="#1d4ed8" font-size="12">Reqs</text>
  <text x="66" y="76" text-anchor="middle" fill="#64748b" font-size="10">loads</text>
  <text x="148" y="166" text-anchor="middle" font-weight="700" fill="#334155" font-size="12">Model</text>
  <text x="148" y="182" text-anchor="middle" fill="#64748b" font-size="10">idealise</text>
  <text x="230" y="222" text-anchor="middle" font-weight="700" fill="#28724f" font-size="12">Verify</text>
  <text x="230" y="238" text-anchor="middle" fill="#64748b" font-size="10">solve right</text>
  <text x="312" y="166" text-anchor="middle" font-weight="700" fill="#dc2626" font-size="12">Test</text>
  <text x="312" y="182" text-anchor="middle" fill="#64748b" font-size="10">measure</text>
  <text x="394" y="60" text-anchor="middle" font-weight="700" fill="#b45309" font-size="12">Validate</text>
  <text x="394" y="76" text-anchor="middle" fill="#64748b" font-size="10">vs reality</text>
  <line x1="186" y1="118" x2="274" y2="118" stroke="#334155" stroke-width="1.8" marker-end="url(#atv-arrow)"/>
  <text x="230" y="106" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">correlate and update</text>
  <text x="230" y="272" text-anchor="middle" fill="#64748b" font-size="12">Verification: are the equations solved correctly?</text>
  <text x="230" y="292" text-anchor="middle" fill="#64748b" font-size="12">Validation: is this the right model of the hardware?</text>
</svg>`;

const figMeshConvergence = `<svg viewBox="0 0 460 278" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="atmesh-axis" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#334155"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Mesh convergence: the quantity of interest settles</text>
  <line x1="76" y1="212" x2="428" y2="212" stroke="#334155" stroke-width="1.7" marker-end="url(#atmesh-axis)"/>
  <line x1="76" y1="212" x2="76" y2="44" stroke="#334155" stroke-width="1.7" marker-end="url(#atmesh-axis)"/>
  <text x="426" y="232" text-anchor="end" fill="#334155" font-size="12">smaller element size h</text>
  <text x="44" y="128" text-anchor="middle" transform="rotate(-90 44 128)" fill="#334155" font-size="12">quantity of interest</text>
  <line x1="88" y1="176" x2="418" y2="176" stroke="#28724f" stroke-width="1.4" stroke-dasharray="6 5"/>
  <text x="416" y="168" text-anchor="end" fill="#28724f" font-weight="700" font-size="12">converged value</text>
  <path d="M96 72 C 124 92, 150 110, 178 128 C 210 148, 250 164, 300 171 C 340 175, 380 177, 412 178" fill="none" stroke="#1d4ed8" stroke-width="2.8"/>
  <circle cx="96" cy="72" r="4.5" fill="#dc2626"/>
  <circle cx="178" cy="128" r="4.5" fill="#dc2626"/>
  <circle cx="300" cy="171" r="4.5" fill="#dc2626"/>
  <circle cx="412" cy="178" r="4.5" fill="#dc2626"/>
  <text x="102" y="60" text-anchor="middle" fill="#64748b" font-size="12">coarse</text>
  <text x="394" y="196" text-anchor="middle" fill="#64748b" font-size="12">fine</text>
  <text x="230" y="254" text-anchor="middle" fill="#64748b" font-size="12">Converge displacement, reaction, or averaged stress.</text>
  <text x="230" y="272" text-anchor="middle" fill="#64748b" font-size="12">A singular peak stress may never converge at all.</text>
</svg>`;

const figBoundaryCheck = `<svg viewBox="0 0 460 244" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="atbc-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="atbc-react" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Boundary-condition sanity check</text>
  <rect x="92" y="72" width="16" height="88" fill="#334155"/>
  <path d="M92 76 L74 90 M92 94 L74 108 M92 136 L74 150 M92 154 L74 168" stroke="#64748b" stroke-width="1.3"/>
  <rect x="108" y="104" width="248" height="24" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <line x1="356" y1="116" x2="418" y2="116" stroke="#dc2626" stroke-width="2.6" marker-end="url(#atbc-load)"/>
  <text x="388" y="100" text-anchor="middle" fill="#dc2626" font-weight="700">P = 1 kN</text>
  <line x1="92" y1="116" x2="46" y2="116" stroke="#1d4ed8" stroke-width="2.6" marker-end="url(#atbc-react)"/>
  <text x="52" y="102" text-anchor="middle" fill="#1d4ed8" font-weight="700" font-size="11">R = 1 kN</text>
  <text x="232" y="92" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">does &Sigma;F = 0 and &Sigma;M = 0 still hold?</text>
  <text x="252" y="152" text-anchor="middle" fill="#64748b" font-size="12">the fixed face also carries a reaction moment</text>
  <line x1="20" y1="180" x2="440" y2="180" stroke="#e2e8f0" stroke-width="1"/>
  <text x="230" y="200" text-anchor="middle" fill="#64748b" font-size="12">Reactions must sum to the applied load, and moments must balance.</text>
  <text x="230" y="220" text-anchor="middle" fill="#64748b" font-size="12">If they do not, the model is answering a different problem.</text>
</svg>`;

const figStrainGauge = `<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="atg-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="250" y="24" text-anchor="middle" font-weight="700" fill="#334155">Strain-gauge test setup</text>
  <rect x="90" y="118" width="320" height="44" fill="#dbeafe" stroke="#334155" stroke-width="1.7"/>
  <line x1="56" y1="140" x2="88" y2="140" stroke="#dc2626" stroke-width="3" marker-end="url(#atg-load)"/>
  <line x1="444" y1="140" x2="412" y2="140" stroke="#dc2626" stroke-width="3" marker-end="url(#atg-load)"/>
  <text x="58" y="124" fill="#dc2626" font-weight="700">P</text>
  <text x="438" y="124" fill="#dc2626" font-weight="700">P</text>
  <rect x="232" y="104" width="52" height="28" rx="3" fill="#fff" stroke="#28724f" stroke-width="1.8"/>
  <path d="M238 128 L246 106 L254 128 L262 106 L270 128 L278 106" fill="none" stroke="#28724f" stroke-width="1.5"/>
  <text x="258" y="94" text-anchor="middle" fill="#28724f" font-weight="700">strain gauge</text>
  <text x="250" y="202" text-anchor="middle" fill="#334155" font-weight="700">convert measured strain using the material model</text>
  <text x="250" y="224" text-anchor="middle" fill="#64748b" font-size="12">valid only when the gauge direction and elastic assumptions match the test</text>
</svg>`;

const figUncertainty = `<svg viewBox="0 0 460 268" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="atu-axis" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#334155"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Uncertainty budget: the largest term dominates</text>
  <line x1="78" y1="226" x2="418" y2="226" stroke="#334155" stroke-width="1.6" marker-end="url(#atu-axis)"/>
  <line x1="78" y1="226" x2="78" y2="50" stroke="#334155" stroke-width="1.6" marker-end="url(#atu-axis)"/>
  <rect x="122" y="172" width="54" height="54" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
  <rect x="208" y="142" width="54" height="84" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="294" y="94" width="54" height="132" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="149" y="244" text-anchor="middle" fill="#64748b" font-size="12">sensor</text>
  <text x="235" y="244" text-anchor="middle" fill="#64748b" font-size="12">fixture</text>
  <text x="321" y="244" text-anchor="middle" fill="#64748b" font-size="12">calibration</text>
  <text x="149" y="164" text-anchor="middle" fill="#1d4ed8" font-weight="700">2</text>
  <text x="235" y="134" text-anchor="middle" fill="#334155" font-weight="700">3</text>
  <text x="321" y="86" text-anchor="middle" fill="#dc2626" font-weight="700">6</text>
  <text x="240" y="72" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">independent terms combine by root-sum-square</text>
  <text x="240" y="258" text-anchor="middle" fill="#64748b" font-size="12">U = &radic;(2&sup2; + 3&sup2; + 6&sup2;) = 7 N, so only calibration is worth fixing</text>
</svg>`;

// Question figure — a half model with a symmetry plane cannot produce the
// antisymmetric mode, so half the eigenvalue answer is deleted by construction.
const figSymmetryModes = `<svg viewBox="0 0 460 262" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="18" text-anchor="middle" font-weight="600" fill="#334155">A symmetry plane deletes every antisymmetric mode</text>
  <line x1="230" y1="40" x2="230" y2="212" stroke="#e2e8f0" stroke-width="1"/>
  <polygon points="110,44 100,58 120,58" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="94" y1="58" x2="126" y2="58" stroke="#334155" stroke-width="1.5"/>
  <polygon points="110,212 100,198 120,198" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="94" y1="198" x2="126" y2="198" stroke="#334155" stroke-width="1.5"/>
  <line x1="110" y1="44" x2="110" y2="212" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4 4"/>
  <path d="M110 44 C 162 84, 162 172, 110 212" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <line x1="62" y1="128" x2="186" y2="128" stroke="#dc2626" stroke-width="1.4" stroke-dasharray="6 4"/>
  <text x="62" y="122" fill="#dc2626" font-size="11">symmetry plane</text>
  <polygon points="330,44 320,58 340,58" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="314" y1="58" x2="346" y2="58" stroke="#334155" stroke-width="1.5"/>
  <polygon points="330,212 320,198 340,198" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="314" y1="198" x2="346" y2="198" stroke="#334155" stroke-width="1.5"/>
  <line x1="330" y1="44" x2="330" y2="212" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4 4"/>
  <path d="M330 44 C 372 72, 372 108, 330 128 C 288 148, 288 184, 330 212" fill="none" stroke="#b45309" stroke-width="3"/>
  <line x1="282" y1="128" x2="406" y2="128" stroke="#dc2626" stroke-width="1.4" stroke-dasharray="6 4"/>
  <circle cx="330" cy="128" r="5" fill="#fff" stroke="#b45309" stroke-width="2"/>
  <text x="110" y="234" text-anchor="middle" fill="#1d4ed8" font-weight="700" font-size="12">mode 1, symmetric</text>
  <text x="110" y="252" text-anchor="middle" fill="#64748b" font-size="11">the half model finds this</text>
  <text x="330" y="234" text-anchor="middle" fill="#b45309" font-weight="700" font-size="12">mode 2, antisymmetric</text>
  <text x="330" y="252" text-anchor="middle" fill="#64748b" font-size="11">the half model cannot exist</text>
</svg>`;

// Question figure — what a linear elastic run reports once the material has
// actually yielded, versus what the hardware does.
const figLinearVsReal = `<svg viewBox="0 0 460 268" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="at44-axis" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#334155"/></marker>
  </defs>
  <text x="230" y="18" text-anchor="middle" font-weight="600" fill="#334155">A linear run past yield reports a stress that cannot exist</text>
  <line x1="70" y1="220" x2="424" y2="220" stroke="#334155" stroke-width="1.6" marker-end="url(#at44-axis)"/>
  <line x1="70" y1="220" x2="70" y2="44" stroke="#334155" stroke-width="1.6" marker-end="url(#at44-axis)"/>
  <line x1="70" y1="140" x2="410" y2="140" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 4"/>
  <text x="84" y="134" fill="#64748b" font-size="11">S<tspan baseline-shift="sub" font-size="9">y</tspan> = 250 MPa</text>
  <line x1="70" y1="220" x2="392" y2="60" stroke="#1d4ed8" stroke-width="2.4" stroke-dasharray="7 5"/>
  <path d="M70 220 L180 140 C 220 132, 300 124, 400 118" fill="none" stroke="#28724f" stroke-width="2.8"/>
  <circle cx="392" cy="60" r="5" fill="#dc2626"/>
  <circle cx="392" cy="119" r="5" fill="#28724f"/>
  <text x="388" y="52" text-anchor="end" fill="#dc2626" font-weight="700" font-size="12">480 MPa, fictitious</text>
  <line x1="392" y1="126" x2="392" y2="150" stroke="#94a3b8" stroke-width="1"/>
  <text x="396" y="166" text-anchor="end" fill="#28724f" font-weight="700" font-size="12">real: about 270 MPa</text>
  <text x="182" y="132" fill="#64748b" font-size="11">yield</text>
  <text x="420" y="240" text-anchor="end" fill="#334155" font-size="12">strain</text>
  <text x="46" y="132" text-anchor="middle" transform="rotate(-90 46 132)" fill="#334155" font-size="12">stress</text>
  <text x="20" y="258" fill="#64748b" font-size="11">Past yield the linear run over-states stress and under-states local strain.</text>
</svg>`;

const content: TopicContent = {
  lesson: {
    title: "Engineering Analysis, FEA & Test Validation",
    intro: `<p>Mechanical engineering interviews rarely reward a pretty FEA screenshot by itself. They reward judgment: what was idealized, what assumptions make the model legal, whether the result passes statics and units checks, how sensitive it is to mesh and boundary conditions, and how a physical test would prove or disprove it. This topic ties analysis and test together so you can defend numbers instead of just reporting them.</p>
<figure class="fig">${figVModel}<figcaption>Analysis is strongest when it is connected to requirements, verification, validation, and test correlation.</figcaption></figure>`,
    sections: [
      {
        heading: "Model idealization and assumptions",
        html: `<p>An engineering model is a controlled simplification. Before solving, define the <strong>quantity of interest</strong>: peak stress at a fillet, tip deflection, first natural frequency, heat sink temperature, bolt load, or measured strain. Then choose the least complicated model that can answer that question. A beam formula may be better than a full solid mesh if the part is slender and the load path is clear; a nonlinear contact model may be necessary if gaps, friction, or separation control the result.</p>
<p>In finite element analysis (FEA), the basic linear static equation is:</p>
<p class="eq">K u = F</p>
<p>Here <strong>K</strong> is the global stiffness matrix assembled from elements, <strong>u</strong> is the unknown nodal displacement vector, and <strong>F</strong> is the applied load vector. Units must be consistent: if K is N/m and F is N, u is in meters. Stress is then recovered from displacement gradients and material law. The commonest error is treating every FEA result as exact while ignoring assumptions: small deflection, linear elastic material, bonded contact, rigid fixtures, perfect geometry, no residual stress, and ideal load introduction.</p>
<div class="callout"><strong>Key interview move:</strong> say what you would check with hand calculations before opening FEA: total reactions, order-of-magnitude stress, expected deflection direction, and the likely hot spots.</div>`,
      },
      {
        heading: "Verification: did we solve the model right?",
        html: `<p>Verification asks whether the mathematics and implementation are trustworthy for the model you chose. It includes units, load/resultant checks, reaction balance, element quality, mesh convergence, solver tolerances, and comparison to a closed-form solution where one exists. If a cantilever FEA cannot reproduce PL<sup>3</sup>/(3EI) deflection in a simple benchmark, it has not earned trust on a complex bracket.</p>
<figure class="fig">${figMeshConvergence}<figcaption>Mesh convergence is about the quantity of interest settling as the mesh is refined.</figcaption></figure>
<p>Convergence should be judged on the output that matters. Displacement and strain energy often converge smoothly. Peak stress at a sharp reentrant corner, point load, or perfectly fixed edge may be a <strong>singularity</strong>; refining the mesh can make the peak keep rising. That is not a stronger design insight. It is a signal to improve load introduction, add a physical radius, average stress over a meaningful path, or use fracture/fatigue methods.</p>`,
      },
      {
        heading: "Boundary conditions and load paths",
        html: `<p>Most wrong FEA comes from wrong restraints and loads, not from the color plot. A fully fixed face is often much stiffer than the real fixture. A point load can create artificial local stress. Bonded contact may hide joint slip. Symmetry constraints can be powerful, but only if the geometry, load, and response are truly symmetric.</p>
<figure class="fig">${figBoundaryCheck}<figcaption>A numerical model should still pass simple force and moment equilibrium checks.</figcaption></figure>
<p>Always ask: where does the load enter, where does it leave, and what part of the structure carries it? If the reaction forces do not sum to the applied loads, if the moment balance is wrong, or if the deformed shape contradicts intuition, stop. The model is telling you about your setup, not the product.</p>`,
      },
      {
        heading: "Validation and physical testing",
        html: `<p>Validation asks whether the model represents the real system closely enough for the decision. A test plan starts from the same quantity of interest as the model: strain at a gauge location, displacement under a proof load, temperature rise at steady state, natural frequency, leak rate, or fatigue life. Good tests define the fixture, load path, instrumentation, calibration, sampling rate, environment, acceptance criteria, and uncertainty before data is collected.</p>
<figure class="fig">${figStrainGauge}<figcaption>Strain gauges turn local strain into stress only when placement, material behavior, temperature, and calibration are controlled.</figcaption></figure>
<p>For a linear elastic uniaxial strain measurement:</p>
<p class="eq">&sigma; = E&epsilon;</p>
<p><strong>E</strong> is Young's modulus, <strong>&epsilon;</strong> is strain in unitless form (500 microstrain = 500 &times; 10<sup>&minus;6</sup>), and <strong>&sigma;</strong> is normal stress. Test correlation is rarely exact. If test and model disagree, do not tune material properties first. Check the fixture, load calibration, gauge placement, sensor drift, actual dimensions, boundary conditions, and whether the model omitted contact, preload, damping, temperature, or residual stress.</p>`,
      },
      {
        heading: "Uncertainty and decision quality",
        html: `<p>A result without uncertainty can be dangerously overconfident. Measurement uncertainty comes from calibration, sensor resolution, noise, thermal drift, fixture compliance, alignment, repeatability, and data reduction. Independent uncertainty terms are commonly combined by root-sum-square:</p>
<p class="eq">U = &radic;(u<sub>1</sub><sup>2</sup> + u<sub>2</sub><sup>2</sup> + ... + u<sub>n</sub><sup>2</sup>)</p>
<p><strong>U</strong> is combined standard uncertainty and <strong>u<sub>i</sub></strong> are independent uncertainty contributors in the same units as the measured result. RSS is appropriate for independent contributors; correlated bias errors must be handled deliberately rather than hidden in the square root.</p>
<figure class="fig">${figUncertainty}<figcaption>An uncertainty budget shows which measurement limits the conclusion.</figcaption></figure>
<p>The practical interview answer is not only "my FEA says factor of safety 1.8." It is "with load uncertainty, material scatter, mesh sensitivity, and test uncertainty, the decision margin is still acceptable" or "the result is too close to the limit, so I would reduce uncertainty or redesign." That is engineering judgment.</p>`,
      },
    ],
    equations: [
      { name: "Linear static FEA", formula: "<p>K u = F</p>", note: "K is stiffness matrix, u displacement vector, and F nodal load vector for small-deflection linear behavior." },
      { name: "Linear elastic stress from strain", formula: "<p>&sigma; = E&epsilon;</p>", note: "&sigma; is stress, E Young's modulus, and &epsilon; unitless strain aligned with the stress direction." },
      { name: "Percent mesh change", formula: "<p>% change = |x<sub>fine</sub> - x<sub>coarse</sub>| / |x<sub>fine</sub>| &times; 100%</p>", note: "x is the quantity of interest, such as displacement, reaction, or averaged stress, not a singular contour peak." },
      { name: "RSS uncertainty", formula: "<p>U = &radic;(u<sub>1</sub><sup>2</sup> + u<sub>2</sub><sup>2</sup> + ...)</p>", note: "U is combined standard uncertainty and u<sub>i</sub> are independent contributors in the same units." },
      { name: "Yield factor of safety", formula: "<p>n = S<sub>y</sub>/&sigma;<sub>vm</sub></p>", note: "S<sub>y</sub> is yield strength and &sigma;<sub>vm</sub> von Mises stress for a static ductile yield check." },
      { name: "Natural frequency estimate", formula: "<p>f<sub>n</sub> = (1/2&pi;)&radic;(k/m)</p>", note: "k is equivalent stiffness, m equivalent mass, and f<sub>n</sub> is cycles per second for an SDOF estimate." },
    ],
    interviewTips: [
      "Never present FEA without stating loads, boundary conditions, material model, mesh checks, and the quantity of interest.",
      "Use hand calculations to check reactions, stress scale, deflection direction, and natural frequency.",
      "Distinguish verification from validation: solving the model right is not the same as modeling the real hardware correctly.",
      "If test and model disagree, investigate fixture/load path/instrumentation before tuning parameters to force agreement.",
      "A singular peak stress is not automatically a product failure; understand whether the singularity is physical.",
    ],
  },
  questions: [
    {
      id: "analysis-testing-q01",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A linear static run of a bracket under a single applied force has just finished. What is the first thing you look at?</p>`,
      figure: figBoundaryCheck,
      choices: [
        "Read the peak von Mises value off the contour plot and compare it against yield",
        "Confirm the support reactions balance the applied forces and moments",
        "Refine the mesh on the smallest cosmetic fillet until the stress stops moving",
        "Remove the restraints, so the model cannot be artificially stiffened anywhere",
      ],
      answer: 1,
      explanation: `<p>A linear static FEA is still a statics problem. Reactions must sum to the applied load, and reaction moments must balance applied moments, to within solver round-off. That single check catches wrong load directions, loads applied in a local coordinate system, missing or duplicated constraints, contact that never engaged, unattached bodies, and unit slips. The errors that make a stress plot precise and irrelevant.</p><p>Only after equilibrium passes is it worth looking at the deformed shape (does it move the way you expect?) and then at stress. The peak red value is the least trustworthy number on the screen: it may sit on a constraint node or a sharp corner and be a property of the mesh rather than of the part. Removing restraints does not fix stiffness, it produces a singular stiffness matrix and no solution at all.</p>`,
    },
    {
      id: "analysis-testing-q02",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A bracket model has its whole mounting face perfectly fixed. In hardware the bracket is held by two bolts and can slip and rock slightly on the interface. What does the fixed face do to the answer?</p>`,
      choices: [
        "The model becomes less stiff than the hardware, so deflection is over-predicted",
        "Fixing the whole face is always the more accurate boundary condition of the two",
        "The model is artificially stiff: motion is under-predicted and load paths shift",
        "Boundary conditions change reactions but never the stress distribution in a part",
      ],
      answer: 2,
      explanation: `<p>An encastre face removes all six degrees of freedom over an entire surface. A two-bolt joint restrains the bolt footprints, resists rocking only through clamp load and friction, and lets the rest of the face lift or slide. The model is therefore stiffer than the hardware: deflection comes out low, the first natural frequency comes out high, and load that would have travelled around the joint gets forced straight into the fixed boundary.</p><p>It also plants a stress singularity on the boundary of the fixed patch, which is why the peak stress there climbs with every refinement. Better representations, in ascending cost: fix only the bolt washer footprints, use bolt connectors with preload plus frictional contact on the interface, or model the mating structure. When you keep the fixed face, say so in the report and quote the stress a bolt diameter away from the boundary rather than at it.</p>`,
    },
    {
      id: "analysis-testing-q03",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A uniaxial gauge on a steel tie rod reads 500 microstrain at proof load. E = 200 GPa. What axial stress does that imply, in MPa?</p>`,
      figure: figStrainGauge,
      answer: 100,
      unit: "MPa",
      explanation: `<p>Convert microstrain to unitless strain first, which is where most people lose the answer by a factor of a million:</p><p class="eq">&epsilon; = 500 &times; 10<sup>&minus;6</sup> = 0.000500</p><p class="eq">&sigma; = E&epsilon; = 200 GPa(0.000500) = 0.100 GPa = <strong>100 MPa</strong></p><p>The inference holds only under its assumptions: linear elastic material, uniaxial stress state, the gauge aligned with the load axis, good bonding, temperature compensation. In a biaxial state the same reading means a different stress, which is why correlation locations are chosen where the stress state is simple.</p>`,
    },
    {
      id: "analysis-testing-q04",
      type: "mc",
      difficulty: 1,
      prompt: `<p>Four activities are on your analysis plan. Which one produces validation evidence rather than verification evidence?</p>`,
      figure: figVModel,
      choices: [
        "Reproducing the cantilever result PL<sup>3</sup>/(3EI) with the same solver settings and mesh",
        "Showing tip deflection changes by less than 1% between two mesh refinements",
        "Confirming that the reaction forces sum to the applied load to within 0.1%",
        "Measuring strain on the real bracket at proof load and comparing it with the model",
      ],
      answer: 3,
      explanation: `<p>Verification asks whether you solved the model correctly; validation asks whether the model is a fair description of the hardware. The benchmark, the convergence study and the equilibrium check are all internal to the mathematics. You could pass all three with a completely wrong idealisation of the joint, the load path or the material.</p><p>Only the strain measurement puts the model against reality. That is why a review that shows only mesh plots and residuals has not demonstrated the part will work. In practice: verify first, because it is cheap and a model that fails verification cannot be validated, then validate at the level of risk the decision deserves, a coupon, a subassembly proof test, or full qualification.</p>`,
    },
    {
      id: "analysis-testing-q05",
      type: "mc",
      difficulty: 1,
      prompt: `<p>Four locations in one linear elastic model report high stress. At which one will the peak stress <em>not</em> converge as the mesh is refined?</p>`,
      choices: [
        "A re-entrant corner between a web and a flange modelled with zero radius",
        "The root of a 3 mm fillet whose radius is meshed with eight elements",
        "The bore of a pin hole loaded through a distributed bearing pressure",
        "Mid-span of a large flat plate carrying a uniform pressure over its whole face",
      ],
      answer: 0,
      explanation: `<p>Linear elasticity gives an unbounded stress at a re-entrant corner of zero radius. Every refinement puts a smaller element on the singular point and returns a larger number, so there is no value to converge to. The result is a property of the mesh. The other three all have finite exact solutions: a modelled radius spreads the gradient over real geometry, a distributed bearing pressure has no point load, and a pressurised plate is smooth everywhere.</p><p>Recognising this is the single most valuable habit in FEA review. When the peak keeps climbing, do not refine harder and do not pick a mesh that flatters you: model the radius the drawing calls out, or use net-section stress times a handbook K<sub>t</sub>, or move to a fatigue/fracture method that does not depend on a peak elastic value. Confirm the diagnosis by checking that stress a few millimetres away is stable. If the far field is converged and only the corner runs away, it is a singularity.</p>`,
    },
    {
      id: "analysis-testing-q06",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A 0-50 kN load cell is specified as &plusmn;0.5% of full scale. You use it to measure a 4.0 kN reaction in a bracket test. What is the worst-case error as a percent of the reading?</p>`,
      answer: 6.25,
      unit: "%",
      explanation: `<p>Percent-of-full-scale means the error is a fixed number of newtons regardless of what you are measuring:</p><p class="eq">error = 0.005(50 000 N) = 250 N</p><p class="eq">250/4000 &times; 100% = <strong>6.25%</strong> of the reading</p><p>A "0.5% load cell" is 0.5% only at full scale. If your acceptance margin is 5%, this measurement cannot decide it. Size the transducer to the load: a 0-10 kN cell of the same class gives 50 N, or 1.25% of reading.</p>`,
    },
    {
      id: "analysis-testing-q07",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A convergence study on averaged fillet stress gives 118 MPa (coarse), 112 MPa (medium) and 110.5 MPa (fine). Using the fine value as the reference, what is the percent change from the medium mesh to the fine mesh?</p>`,
      figure: figMeshConvergence,
      answer: 1.36,
      unit: "%",
      explanation: `<p>Take the change between the last two levels against the best current estimate:</p><p class="eq">% change = |x<sub>fine</sub> &minus; x<sub>medium</sub>|/|x<sub>fine</sub>| &times; 100%</p><p class="eq">= |110.5 &minus; 112|/110.5 &times; 100% = 1.5/110.5 &times; 100% = <strong>1.36%</strong></p><p>The shape of the sequence matters more than the number. 6 MPa then 1.5 MPa is a factor-of-four reduction, which is what a converging quantity looks like. 6 then 8 then 12 means you are chasing a singularity.</p>`,
    },
    {
      id: "analysis-testing-q08",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>An aluminium member is fully restrained from expanding. Estimate the thermal stress for E = 70 GPa, &alpha; = 23 &times; 10<sup>&minus;6</sup>/&deg;C and &Delta;T = 50&deg;C, in MPa.</p>`,
      answer: 80.5,
      unit: "MPa",
      explanation: `<p>A fully restrained member cannot expand, so the free thermal strain &alpha;&Delta;T is converted entirely into elastic strain of the opposite sign:</p><p class="eq">&sigma; = E&alpha;&Delta;T = 70 GPa(23 &times; 10<sup>&minus;6</sup>/&deg;C)(50&deg;C)</p><p class="eq">&sigma; = 0.0805 GPa = <strong>80.5 MPa</strong></p><p>Neither length nor area appears, so a fully restrained bar develops the same stress at 10 mm as at 10 m. And the answer is only as good as the word "fully": real fixtures have finite stiffness, so the actual stress is lower.</p>`,
    },
    {
      id: "analysis-testing-q09",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>Before you believe a modal run, you make a single-degree-of-freedom estimate. The test article behaves like a spring-mass system with k = 1.6 &times; 10<sup>6</sup> N/m and m = 25 kg. What first natural frequency does that predict, in Hz?</p>`,
      answer: 40.3,
      unit: "Hz",
      explanation: `<p>Angular natural frequency for a single mass on a spring:</p><p class="eq">&omega;<sub>n</sub> = &radic;(k/m) = &radic;(1.6 &times; 10<sup>6</sup>/25) = &radic;64000 = 253 rad/s</p><p class="eq">f<sub>n</sub> = &omega;<sub>n</sub>/(2&pi;) = 253/6.283 = <strong>40.3 Hz</strong></p><p>Forgetting the 2&pi; lands you at 253 Hz. Use the estimate as a gate on the modal run. If the modal result is far higher, suspect the density or the unit system; if far lower, suspect a soft or missing restraint.</p>`,
    },
    {
      id: "analysis-testing-q10",
      type: "mc",
      difficulty: 2,
      prompt: `<p>You model half of a pin-ended steel column, with a symmetry plane at mid-height, and run eigenvalue buckling. What can that half model never tell you?</p>`,
      figure: figSymmetryModes,
      choices: [
        "The first buckling load, because a symmetry plane removes the axial load path",
        "Any antisymmetric mode: the S-shaped second mode is deleted by construction",
        "The stress at mid-height, because a symmetry plane carries no normal stress",
        "The deflected shape, because symmetry constraints fix all rotations at the plane",
      ],
      answer: 1,
      explanation: `<p>A symmetry boundary enforces zero normal displacement and zero rotation about the in-plane axes. That is exactly the condition the symmetric modes satisfy anyway, so mode 1 (the single bow, symmetric about mid-height) comes out correctly. The antisymmetric modes have a node at mid-height with non-zero slope there, which the symmetry constraint forbids. The solver simply never sees them, and does not warn you.</p><p>For a plain pin-ended column that is harmless, since mode 1 is the critical one. It becomes dangerous the moment the real structure can go antisymmetric first: a column with an intermediate brace, a plate with an eccentric stiffener, a frame that can sway. The general rule is that symmetry in geometry is not enough. Loads, restraints, contact and the <em>response</em> must all be symmetric. For buckling and modal work, run the full model at least once to confirm which modes you are throwing away.</p>`,
    },
    {
      id: "analysis-testing-q11",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A rectangular plate carries a central 8 kN force normal to its face and is supported symmetrically on all four edges. You build a quarter model. Which load and boundary conditions are right?</p>`,
      choices: [
        "Apply 8 kN at the corner node and fix all three translations on both cut faces",
        "Apply 4 kN at the corner node and leave both of the cut faces completely free",
        "Apply 2 kN, with zero normal displacement and zero in-plane rotation on each cut face",
        "Apply the full 8 kN, with zero normal displacement applied on one of the two cut faces",
      ],
      answer: 2,
      explanation: `<p>A quarter model sees a quarter of the load: 8/4 = 2 kN. Each of the two cut faces is a symmetry plane, so it needs zero displacement normal to that plane plus zero rotation about the two in-plane axes. That combination is what makes the quarter behave as if the missing three-quarters were still attached.</p><p>The wrong answers are the three ways people actually get this wrong. Applying full load to a quarter model over-loads it by 4&times;. Applying half load is the error you make if you think in halves out of habit. Leaving the cut faces free turns a plate into a cantilevered corner. Fully fixing the cut faces over-constrains them: the material must be free to slide <em>within</em> the symmetry plane, only its motion out of the plane is blocked. Check the result by comparing the quarter model's reaction sum to 2 kN, and by running the full model once.</p>`,
    },
    {
      id: "analysis-testing-q12",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>At the critical location an FEA reports &sigma;<sub>x</sub> = 120 MPa, &sigma;<sub>y</sub> = &minus;40 MPa and &tau;<sub>xy</sub> = 60 MPa. The material is ductile with S<sub>y</sub> = 250 MPa. What is the yield factor of safety?</p>`,
      answer: 1.41,
      explanation: `<p>Build the von Mises stress for plane stress first, you cannot compare a component stress to a yield strength:</p><p class="eq">&sigma;<sub>vm</sub> = &radic;(&sigma;<sub>x</sub><sup>2</sup> &minus; &sigma;<sub>x</sub>&sigma;<sub>y</sub> + &sigma;<sub>y</sub><sup>2</sup> + 3&tau;<sub>xy</sub><sup>2</sup>)</p><p class="eq">= &radic;(14400 + 4800 + 1600 + 10800) = &radic;31600 = 178 MPa</p><p class="eq">n = S<sub>y</sub>/&sigma;<sub>vm</sub> = 250/178 = <strong>1.41</strong></p><p>Watch the cross term: with &sigma;<sub>y</sub> negative, &minus;&sigma;<sub>x</sub>&sigma;<sub>y</sub> becomes +4800 and raises the von Mises stress. Using &sigma;<sub>x</sub> alone would give n = 2.08 and a badly optimistic answer; the shear term contributes a third of the total on its own. This factor covers static ductile yielding only, it says nothing about fatigue, buckling, fracture from a defect, or the load uncertainty that sits behind the 120 MPa.</p>`,
    },
    {
      id: "analysis-testing-q13",
      type: "mc",
      difficulty: 2,
      prompt: `<p>Your FEA reports 3.0 mm of tip deflection on a steel bracket arm. The cantilever hand calculation gives 0.40 mm. Which check comes first?</p>`,
      choices: [
        "The unit system and the second moment of area the model actually used",
        "Refine the mesh globally until the FEA deflection settles on a stable value",
        "Switch large-displacement effects on and re-run the same load case",
        "Tighten the solver convergence tolerance by two orders of magnitude",
      ],
      answer: 0,
      explanation: `<p>A factor of 7.5 is not a modelling nuance, it is a blunder, and blunders live in inputs. Deflection goes as 1/EI, so an I that is off by 7.5&times;, a wrong section, a thickness read as radius, a sketch dimensioned in the wrong units, explains it exactly. So does an E entered as 200 instead of 200 000 in an N/mm model. Check the model's reported mass and the section properties, then the material card.</p><p>The other three options all address effects worth a few percent, applied to an error of 750%. Mesh refinement makes a model slightly softer, never 7.5 times. Large displacement matters only once deflection is a sizeable fraction of length, and at 0.4 mm predicted it plainly is not. Solver tolerance changes the last decimal place. The habit worth building: when the ratio is large, look for a wrong number, not wrong physics; when the ratio is 10-30%, then look at physics.</p>`,
    },
    {
      id: "analysis-testing-q14",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A 4 mm thick steel plate loaded in bending is meshed with one layer of linear tetrahedra through the thickness. What does that mesh do to the answer?</p>`,
      choices: [
        "It over-predicts deflection, because tetrahedral elements are too flexible in bending",
        "It under-predicts deflection: linear tets cannot represent bending curvature at all",
        "It has no effect on deflection, only on the recovered stress values at the surface",
        "It only matters in thermal runs, where the gradient through the thickness is steep",
      ],
      answer: 1,
      explanation: `<p>A linear tetrahedron is a constant-strain element: strain is the same everywhere inside it. Bending needs strain that varies linearly through the thickness, from tension on one face to compression on the other, so a single layer of constant-strain tets cannot represent the deformation at all. It resists with spurious stiffness instead, and the plate comes out far too stiff, deflection under-predicted by factors, not percentages.</p><p>The same disease, in milder form, is why one layer of fully integrated linear hex elements shear-locks. Fixes: shells for a thin plate, quadratic tetrahedra (which can vary strain linearly), or at least three or four linear elements through the wall. The diagnostic in review is easy. Ask how many elements sit through the thickness, and compare deflection to a plate or beam formula before believing any of it.</p>`,
    },
    {
      id: "analysis-testing-q15",
      type: "mc",
      difficulty: 2,
      prompt: `<p>Four load cases are queued for a small-displacement linear elastic run. Which one is <em>not</em> valid in that formulation?</p>`,
      choices: [
        "A cast bracket loaded to 40% of yield, with joints that stay closed throughout",
        "A slow thermal soak on a frame whose restraints do not change during the load",
        "A steel beam under static pressure that deflects about 1/900 of its span",
        "A 20 mm snap-fit arm that deflects 5 mm and yields locally at its root",
      ],
      answer: 3,
      explanation: `<p>Linear static assumes the stiffness matrix does not change during loading: linear elastic material, small rotations, unchanged contact and restraints, and no significant inertia. Under those assumptions the response scales with load and superposition works.</p><p>The snap-fit breaks two of them at once. A 5 mm deflection on a 20 mm arm is 25% of the length, so the geometry, and therefore the stiffness. Changes substantially as it deflects, and the arm also yields, so the material law is no longer linear. It needs a large-displacement elastic-plastic run. The other three are fine: 40% of yield with closed joints stays elastic and linear, a slow thermal soak with fixed restraints is a linear load case (though watch that "fixed" is really fixed), and L/900 is deep in the small-deflection regime. The practical screen is to check deflection against a characteristic dimension, and peak stress against yield, <em>before</em> you accept a linear result.</p>`,
    },
    {
      id: "analysis-testing-q16",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A linear static run on a 300 mm long leaf spring predicts 42 mm of tip deflection. Express that deflection as a percent of the length, to decide whether the linear result stands.</p>`,
      answer: 14,
      unit: "%",
      explanation: `<p>Compare deflection to the characteristic dimension:</p><p class="eq">&delta;/L = 42/300 = 0.140 = <strong>14.0%</strong></p><p>Small-displacement theory starts to lose accuracy once tip deflection passes roughly 10% of the span, and for a slender leaf spring the geometric stiffening is real: the deflected shape shortens the effective moment arm, so the true deflection is <em>less</em> than the linear result and the linear run is non-conservative on stiffness but conservative on stress. At 14% you must re-run with large-displacement effects on and compare.</p><p>Two companion checks: for plates the equivalent threshold is deflection above about half the thickness, and for any part you also need peak stress well under yield before a linear elastic answer means anything. Quote both ratios in the report so a reviewer can see why you did or did not go nonlinear.</p>`,
    },
    {
      id: "analysis-testing-q17",
      type: "mc",
      difficulty: 2,
      prompt: `<p>Deflection in a bend test is measured between the machine crosshead and the frame. The load train and fixture turn out to be far more compliant than assumed. What is the right response?</p>`,
      choices: [
        "Ignore it, since fixture stiffness is never part of a measurement uncertainty budget",
        "Increase the modelled material stiffness until FEA and the test curve overlap again",
        "Use fewer displacement channels, so the disagreement no longer shows in the data",
        "Measure or model the load-train compliance and correct the reported deflection",
      ],
      answer: 3,
      explanation: `<p>Crosshead displacement is the sum of specimen deflection and everything else in series: load cell, grips, fixture, and the frame itself. On a stiff specimen the machine can contribute more than the part, which is why crosshead data routinely reports a modulus 20-40% below the truth.</p><p>Two clean fixes. Measure the specimen directly, an extensometer, an LVDT referenced to the fixture, or DIC, so the machine drops out. Or characterise the load-train compliance with a stiff dummy specimen and subtract it, which is valid while everything stays linear. If neither is possible, include the fixture in the model so both sides describe the same system. Tuning the material modulus to close the gap encodes your test stand into the part's material card and will not transfer to the next test.</p>`,
    },
    {
      id: "analysis-testing-q18",
      type: "mc",
      difficulty: 2,
      prompt: `<p>You get one strain gauge on a bracket for correlation. FEA shows a 380 MPa peak inside a 2 mm wide band at a fillet root, and a smooth 150 MPa field 25 mm away. Where do you bond it?</p>`,
      choices: [
        "Inside the 2 mm band, because that is where the model prediction is largest",
        "Straddling the fillet tangent, so the grid averages the peak and the field",
        "In the smooth field, where placement error changes the reading only slightly",
        "On the fixture right beside the bracket, where the surface is flat and accessible",
      ],
      answer: 2,
      explanation: `<p>The purpose of one correlation gauge is to test the model, not to measure the worst stress. A gauge in the 2 mm band is dominated by placement uncertainty: a millimetre of offset, a slightly different modelled radius, or the grid averaging over its own length can shift the reading by tens of percent, so any disagreement is uninterpretable. In the smooth 150 MPa field, a millimetre of error costs a percent or two, so a 15% mismatch is real evidence about loads, stiffness or boundary conditions.</p><p>Straddling a tangent point gives you a spatial average of an unknown weighting, the worst of both. A gauge on the fixture measures the fixture. The professional move is to validate the model in the well-behaved field, then trust the same validated model to report the fillet peak. If the fillet stress itself must be measured, that is a different instrument: a small-grid gauge, a gauge chain, or DIC, with the placement uncertainty stated.</p>`,
    },
    {
      id: "analysis-testing-q19",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A force measurement has independent uncertainty contributors of 2 N (sensor noise), 3 N (fixture repeatability) and 6 N (calibration). You can recalibrate against a traceable standard and cut the calibration term to 1 N. What combined standard uncertainty results, in N?</p>`,
      figure: figUncertainty,
      answer: 3.74,
      unit: "N",
      explanation: `<p>Before the recalibration, U = &radic;(2<sup>2</sup> + 3<sup>2</sup> + 6<sup>2</sup>) = &radic;49 = 7.00 N. After it:</p><p class="eq">U = &radic;(2<sup>2</sup> + 3<sup>2</sup> + 1<sup>2</sup>) = &radic;(4 + 9 + 1) = &radic;14 = <strong>3.74 N</strong></p><p>Root-sum-square is dominated by the largest term. Halving the 2 N noise term instead takes 7.00 N to 6.86 N, a 2% improvement for real effort. There is also a floor: even a perfect calibration leaves &radic;(4 + 9) = 3.61 N, so the next target has to be fixture repeatability.</p>`,
    },
    {
      id: "analysis-testing-q20",
      type: "mc",
      difficulty: 2,
      prompt: `<p>You must pick one output to drive a mesh convergence study on a bracket. Which choice gives a usable convergence curve?</p>`,
      choices: [
        "Peak stress at the single node where a point force is applied to the lug hole",
        "Peak stress at the sharp corner where the fixed face meets the web",
        "The total node count, tracked against successive refinement levels",
        "Tip deflection under load, which converges from below towards a limit",
      ],
      answer: 3,
      explanation: `<p>Convergence has to be judged on a quantity that has a finite exact value. Displacement and strain energy are global integrals of the solution: they converge monotonically from below for a displacement-based formulation, they converge fast, and they can be checked against a beam or plate formula. That is what makes tip deflection the standard first target.</p><p>The two stress options are both singular. A point force and a zero-radius corner at a rigid boundary both have unbounded exact solutions, so neither peak has a limit to converge to. Node count is an input, not a result; a study that reports "converged at 400 000 nodes" without naming the quantity has demonstrated nothing. Once deflection is settled, converge the stress you actually intend to report, at a location with real geometry, and quote both curves.</p>`,
    },
    {
      id: "analysis-testing-q21",
      type: "mc",
      difficulty: 2,
      prompt: `<p>Your mesh report flags 900 elements with aspect ratio above 20 and 40 elements with Jacobian below 0.4. The model has 600 000 elements. What is the right way to act on that?</p>`,
      choices: [
        "Judge them by location: distorted elements matter where the gradient you report is",
        "Any aspect ratio above 10 invalidates the whole model no matter where it happens to sit",
        "Aspect ratio affects only solve time, never the accuracy of the recovered stress",
        "A low Jacobian is harmless as long as the solver reports a converged residual",
      ],
      answer: 0,
      explanation: `<p>Element quality metrics are a screening tool, not a pass/fail gate. A 30:1 element in a uniform-stress region far from anything you report is harmless. High aspect ratio is only a problem when the element has to resolve a gradient across its long direction, which is exactly why a well-built boundary-layer or shell mesh is deliberately stretched. The same 30:1 element sitting at the fillet you are quoting is a real error.</p><p>So: plot the flagged elements, see where they are, and re-mesh the ones inside the region of interest or within a couple of element layers of it. A negative or near-zero Jacobian is different. That means the element is inverted or badly warped, the mapping is ill-conditioned, and it can corrupt the solution locally regardless of location, so those get fixed on sight. And no, a converged residual does not vouch for element quality: the solver converges the equations it was handed, distorted or not.</p>`,
    },
    {
      id: "analysis-testing-q22",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A bracket passes static analysis with a yield factor of safety of 2.6 at a fillet. It cracks at that same fillet after 3 &times; 10<sup>7</sup> cycles of a load swinging from zero to full. Which check was missing?</p>`,
      choices: [
        "Alternating stress against the notched endurance limit, with mean stress included",
        "Elastic buckling of the flange under the compressive half of each load cycle",
        "Creep of the aluminium at the fillet under the sustained portion of the load",
        "Fretting at the bolted interface, which then propagated across into the fillet region",
      ],
      answer: 0,
      explanation: `<p>3 &times; 10<sup>7</sup> cycles with an initiation site at a geometric notch is high-cycle fatigue, and static margin does not cover it. A zero-to-full cycle has alternating stress equal to half the peak and a mean stress equal to the other half, so a Goodman or Gerber correction is required on top of the endurance limit, and the endurance limit must be knocked down for surface finish, size, loading type and reliability, then divided by the fatigue notch factor K<sub>f</sub> at the fillet.</p><p>The other three are real mechanisms, which is why they belong in the list, but none fits the evidence. Buckling is instantaneous, not cycle-counted. Creep needs elevated temperature and a sustained load, and would show distortion before cracking. Fretting initiates at the contact interface, not at the fillet. A static factor of safety answers exactly one failure mode, so name the modes you have and have not checked.</p>`,
    },
    {
      id: "analysis-testing-q23",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A linear eigenvalue run on a thin cylindrical shell in axial compression predicts 240 kN. Test shells of the same design collapse near 90 kN. Which effect dominates that gap?</p>`,
      choices: [
        "The mesh was too coarse to resolve the short-wavelength buckling mode shape",
        "Load eccentricity at the end fittings shifted the axial line of action slightly",
        "Imperfection sensitivity: small geometric deviations cut the real load sharply",
        "Prebuckling material nonlinearity softened the shell before it ever buckled",
      ],
      answer: 2,
      explanation: `<p>Axially compressed cylindrical shells are the textbook imperfection-sensitive structure. Many buckling modes sit at nearly the same eigenvalue, so a small out-of-roundness, often a fraction of the wall thickness, couples them and triggers collapse far below the perfect-shell value. Knockdown factors of 0.2 to 0.5 are normal, and 90/240 = 0.38 sits squarely in that band.</p><p>The other three matter but are second order here. A coarse mesh usually raises the predicted load and is easy to rule out with a refinement check. Eccentricity is real but produces tens of percent, not a factor of 2.7. Material nonlinearity matters for stocky shells, not thin elastic ones. The practical route is an empirical knockdown for screening, then a nonlinear run with a seeded imperfection scaled to the manufacturing tolerance, and finally test, which is why shell structures are one of the few places where analysis alone is not accepted.</p>`,
    },
    {
      id: "analysis-testing-q24",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A material has mean strength 320 MPa with standard deviation 18 MPa. The load case has mean stress 190 MPa with standard deviation 12 MPa. Using a two-sigma screen on both, what is the ratio of lower-bound strength to upper-bound stress?</p>`,
      answer: 1.33,
      explanation: `<p>Take two standard deviations off capacity and add two onto demand:</p><p class="eq">S<sub>low</sub> = 320 &minus; 2(18) = 284 MPa</p><p class="eq">&sigma;<sub>high</sub> = 190 + 2(12) = 214 MPa</p><p class="eq">ratio = 284/214 = <strong>1.33</strong></p><p>The nominal factor is 320/190 = 1.68, so scatter has eaten a fifth of the apparent margin. That is the point of the exercise: a single-number factor of safety hides how much of it is real. This is a screen, not a reliability analysis. It treats two-sigma as a bound rather than a probability, and combining the two tails this way is conservative because both extremes rarely occur together.</p><p>The proper version computes the reliability index from the difference distribution, which for these numbers gives a much smaller failure probability than the crude ratio suggests. Use the screen to decide whether the proper calculation is worth doing.</p>`,
    },
    {
      id: "analysis-testing-q25",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A linear elastic run on a bracket in 250 MPa yield steel reports 480 MPa von Mises at a fillet. What does the 480 MPa actually mean?</p>`,
      figure: figLinearVsReal,
      choices: [
        "The bracket has already fractured, since 480 MPa sits well past the ultimate tensile strength",
        "It is fictitious: past yield the material redistributes and true stress stays near 270",
        "It is correct, because von Mises stress is defined independently of yield behaviour",
        "It is conservative, so it can be reported directly as the design peak stress value",
      ],
      answer: 1,
      explanation: `<p>A linear elastic model keeps extrapolating &sigma; = E&epsilon; forever. Real steel stops at yield and then flows, so the material at the fillet cannot carry 480 MPa, it yields locally, redistributes load into the surrounding elastic material, and settles a little above 250 MPa depending on hardening. The linear run has told you the true answer to a different question: how much stress <em>would</em> be there if the material never yielded, which is useful as a notch-strain input and useless as a reported stress.</p><p>Nor is it conservative in the way that matters. It over-states stress but badly under-states local plastic strain, which is what drives low-cycle fatigue and ductile tearing, so a design signed off on "480 MPa but it is conservative" can still fail. The right moves are an elastic-plastic run, or Neuber/Glinka to convert the elastic result into local stress and strain, and then a strain-life check. It has certainly not fractured. Local yielding at a notch is normal and often acceptable.</p>`,
    },
    {
      id: "analysis-testing-q26",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>Three articles are proof-tested and all three pass with no failures. Using the standard success-run relation R = (1 &minus; C)<sup>1/n</sup>, what reliability can you demonstrate at 90% confidence? Give the answer as a percent.</p>`,
      answer: 46.4,
      unit: "%",
      explanation: `<p>For n successes with zero failures, the one-sided lower confidence bound on reliability is:</p><p class="eq">R = (1 &minus; C)<sup>1/n</sup> = (1 &minus; 0.90)<sup>1/3</sup> = 0.10<sup>0.3333</sup></p><p class="eq">R = <strong>46.4%</strong></p><p>Three passing articles demonstrate, at 90% confidence, that fewer than half the population would pass. This is the number that stops a programme claiming "we tested three and they all passed, so the design is proven." Reaching 90% reliability at 90% confidence needs 22 zero-failure samples; 99% at 90% needs 229.</p><p>The engineering conclusion is not "test 229 units". It is that small-sample testing demonstrates capability, not reliability, and the confidence has to come from somewhere else: a validated model, a qualified material allowable, margin against a known failure mode, or accelerated testing with a physics-based acceleration factor. Say which one you are relying on.</p>`,
    },
    {
      id: "analysis-testing-q27",
      type: "mc",
      difficulty: 3,
      prompt: `<p>An M10 bolted joint is modelled with the bolts as simple beam elements and no preload. The external load cycles from 0 to 12 kN. What does that model get wrong?</p>`,
      choices: [
        "It over-predicts joint stiffness, because a preloaded joint is really the more flexible one",
        "It gets the bolt mean load right but reports a bolt stress range that is too small",
        "It cannot compute bolt stress at all until a preload value has been supplied to it",
        "It hands the bolt the whole external swing instead of the small share it really takes",
      ],
      answer: 3,
      explanation: `<p>In a properly preloaded joint the clamped members are much stiffer than the bolt, so an external tensile load is shared: the bolt picks up only C times the external load, where the joint stiffness factor C is typically 0.1 to 0.3, while the rest goes into unloading the clamped interface. Model the bolt as a bare beam with no preload and there is no clamped path at all, the bolt takes all 12 kN.</p><p>The consequence is fatigue. With C = 0.2 the bolt sees a 2.4 kN swing, not 12 kN, so the unpreloaded model over-states the alternating stress by roughly five times and will fail a bolt that is actually fine. It also misses the two things preload exists to control: joint separation (above which the bolt does take the full load and fatigue life collapses) and the friction capacity that carries shear. Note the direction of the first option is backwards. Preload makes the joint stiffer, not softer.</p>`,
    },
    {
      id: "analysis-testing-q28",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A strain reading of 512 microstrain, a gauge factor known to &plusmn;1% and a modulus known to &plusmn;3% produce 102.4 MPa on your spreadsheet. How should that be reported?</p>`,
      choices: [
        "102.40 MPa, matching the precision the spreadsheet calculation carried through",
        "102.4 MPa, since the strain indicator resolved the reading to one microstrain",
        "About 102 MPa with a stated &plusmn;3 MPa, since the inputs support three figures",
        "100 MPa, because a measured value should always be rounded to one significant figure",
      ],
      answer: 2,
      explanation: `<p>Propagate the uncertainty before you choose the digits. For a product, relative uncertainties combine: &radic;(0.01<sup>2</sup> + 0.03<sup>2</sup>) = 0.032, so 102.4 &times; 0.032 = 3.2 MPa. The result is 102 &plusmn; 3 MPa, and any digit past the units place is noise dressed as precision.</p><p>Resolution is not accuracy: an indicator that displays single microstrain can still be 3% wrong, and quoting 102.40 claims a hundredth of a megapascal from inputs good to three. Rounding to one figure throws away information you legitimately have. Report the value, the uncertainty and the confidence basis together. That is what lets a reviewer decide whether a margin of 4% is a pass or a coin flip.</p>`,
    },
    {
      id: "analysis-testing-q29",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A welded-and-bolted steel frame measures twice the tip deflection your model predicts. Which single model change is most likely to close a gap that size?</p>`,
      choices: [
        "Model the bolted joints with real contact and preload instead of bonded faces",
        "Refine the mesh at every single weld toe until the local peak stress stops changing",
        "Reduce Young's modulus of the steel from 200 GPa down to about 100 GPa",
        "Switch from linear tetrahedra to quadratic tetrahedra throughout the frame",
      ],
      answer: 0,
      explanation: `<p>Work in order of plausible size. A factor of two in stiffness is enormous, and joints are the only part of a bolted frame that can supply it: bonded interfaces behave as welded, so clearance take-up, local bearing at the holes, and interface slip. All of which are real and all of which are soft, are absent from the model. Bolted joints modelled as bonded are routinely 30-100% too stiff.</p><p>Mesh refinement at weld toes changes local stress and essentially nothing about global deflection. Halving the modulus of steel is not a physical option; it is the fudge that hides the joint problem, and it will mispredict the next structure. Element order buys perhaps 10-20% on a coarse tet mesh, worth doing but not the main term. Before changing anything, confirm the measurement itself: check the deflection reference point and the load-train compliance, because a soft test stand produces the same symptom.</p>`,
    },
    {
      id: "analysis-testing-q30",
      type: "mc",
      difficulty: 3,
      prompt: `<p>FEA gives a yield factor of safety of 1.35 at a fillet. Load is known to &plusmn;20%, and the 1.5 mm fillet radius carries a &plusmn;0.3 mm tolerance. There is no test. What do you recommend?</p>`,
      choices: [
        "Release it, since any factor of safety above 1.0 satisfies the static requirement",
        "Run load and radius sensitivities, then open the radius or add a proof test",
        "Refine the mesh until the reported peak drops and the factor of safety rises",
        "Average stress over 3 mm around the fillet and report the lower number instead",
      ],
      answer: 1,
      explanation: `<p>Do the arithmetic before the judgement. A 20% load increase alone takes 1.35 to 1.13. The radius tolerance bites too: at 1.2 mm instead of 1.5 mm on a typical section, K<sub>t</sub> rises by roughly 8-10%, taking the factor to about 1.03. The two together leave essentially no margin, so 1.35 is a nominal number that does not survive its own tolerances.</p><p>The recommendation is to quantify that, re-run at 1.2&times; load and at minimum radius, which costs an afternoon, and then either buy margin back cheaply by opening the fillet to 2.5 mm (usually free at the machining stage) or buy evidence with a proof test at 1.2&times; limit with a gauge nearby. Releasing on the nominal ignores the inputs. Mesh refinement to make a number look better is choosing the mesh that flatters you. Averaging over 3 mm is legitimate only where the peak is singular, and here it is a real modelled radius carrying real stress.</p>`,
    },
  ],
  qna: [
    {
      id: "analysis-testing-qa01",
      q: `<p>Walk me through how you would set up an FEA model for a new bracket.</p>`,
      a: `<p>I would start by defining the decision: yield margin, deflection, fatigue risk, or modal frequency. Then I would identify the load path, supports, materials, real interfaces, and likely hot spots. Before meshing, I would do a hand estimate of reactions, stress scale, and deflection. In FEA I would choose element type based on geometry, apply realistic loads and boundary conditions, check material assumptions, and run an initial model. Then I would verify equilibrium, units, deformed shape, mesh quality, and convergence of the quantity of interest. Finally I would compare results to allowables with stated limitations and, if needed, plan a physical test for validation.</p>`,
    },
    {
      id: "analysis-testing-qa02",
      q: `<p>What is the difference between verification and validation?</p>`,
      a: `<p>Verification asks, "Did we solve the model right?" It covers equations, implementation, mesh convergence, units, reaction balance, solver settings, and benchmarks against known solutions. Validation asks, "Did we solve the right model?" It compares model predictions to physical reality for the intended use. A model can be verified but not valid if the boundary conditions, material model, contact, loads, or omitted physics do not represent the real hardware. In a design review I would explicitly discuss both, because a clean solver run is not proof that the part will work.</p>`,
    },
    {
      id: "analysis-testing-qa03",
      q: `<p>How do you know whether an FEA mesh is good enough?</p>`,
      a: `<p>I judge the mesh against the quantity of interest. I check element quality, local refinement where gradients are high, enough elements through thickness for bending if using solids, and smooth stress/strain fields away from discontinuities. Then I perform a convergence study: refine the mesh and see whether the target result, such as tip deflection, strain energy, reaction force, or averaged stress, changes acceptably. I avoid using singular peak stresses at point loads or sharp corners as convergence targets. The mesh is good enough when further refinement does not change the engineering decision within the required margin.</p>`,
    },
    {
      id: "analysis-testing-qa04",
      q: `<p>What are common FEA boundary-condition mistakes?</p>`,
      a: `<p>Common mistakes include fixing an entire face that is really bolted or supported locally, applying a point load where the real load is distributed through contact, bonding interfaces that can slip or separate, forgetting preload, constraining degrees of freedom that should be free, using symmetry when load or response is asymmetric, and ignoring fixture compliance. These mistakes change stiffness and load path, so the stress plot may look precise while answering the wrong problem. I always check reactions, deformed shape, and whether the modeled restraints could physically exist.</p>`,
    },
    {
      id: "analysis-testing-qa05",
      q: `<p>If test data and FEA disagree, what do you do?</p>`,
      a: `<p>I first confirm the comparison is apples to apples: same load, same location, same coordinate direction, same temperature, same units, and same data reduction. Then I check the test setup: calibration, fixture compliance, sensor placement, drift, noise, actual dimensions, and load path. On the model side I check boundary conditions, contact, material properties, mesh convergence, preload, damping, and omitted physics. I do not immediately tune Young's modulus or loads to match. The goal is to identify the physical cause of disagreement, update the model if justified, and document remaining uncertainty.</p>`,
    },
    {
      id: "analysis-testing-qa06",
      q: `<p>What makes a physical validation test good?</p>`,
      a: `<p>A good validation test is tied to a requirement and measures the same quantity the model predicts. It has a defined fixture, load path, instrumentation plan, calibration records, sampling rate, environmental conditions, acceptance criteria, and uncertainty budget. It includes pre-test predictions so the team cannot move the target after seeing data. It also has enough repeatability or replication to separate real behavior from noise. The best tests are designed with analysis in mind: sensor locations correspond to model outputs, and fixtures are either very stiff or explicitly included in the model.</p>`,
    },
    {
      id: "analysis-testing-qa07",
      q: `<p>How would you explain a stress singularity to a non-FEA audience?</p>`,
      a: `<p>A stress singularity is a place where the mathematical idealization creates an unrealistically infinite stress as the mesh gets finer, such as a perfectly sharp corner, point load, or perfectly fixed edge. Real hardware has finite radii, distributed contact, material yielding, or cracks, so the infinite peak is not directly physical. I would explain that the red spot flags a design feature needing attention, but the exact peak value is not a reliable acceptance number. We should model physical geometry and load introduction, look at averaged or nearby stress, and use fatigue or fracture methods if the local feature is critical.</p>`,
    },
    {
      id: "analysis-testing-qa08",
      q: `<p>How do uncertainty and safety factor relate?</p>`,
      a: `<p>A safety factor compares capacity to demand; uncertainty decides how much that comparison is worth. Work an example. Say the nominal factor is 1.8: yield 320 MPa over a predicted 178 MPa. Now put numbers on the scatter. Load is known to &plusmn;15%, so demand can be 205 MPa. The material certificate is a mean, and a &minus;2&sigma; allowable at 18 MPa standard deviation is 284 MPa. The working margin is 284/205 = 1.39, not 1.8, and if the FEA itself carries 5% mesh and boundary-condition uncertainty, it drops to about 1.32.</p><p>That is the number to defend in review. Once it is visible you have three real options: buy margin back in the design (a bigger fillet, a thicker section, a better material), reduce the uncertainty (measure the load spectrum, test coupons from the actual lot, run a mesh study), or accept it with evidence from a proof test. Which one is right depends on consequence of failure, a bracket in a service loop and a bracket over a person do not get the same answer. What is not acceptable is quoting 1.8 without saying what it does not include.</p>`,
    },
    {
      id: "analysis-testing-qa09",
      q: `<p>What hand checks would you do before trusting a simulation?</p>`,
      a: `<p>I would check units first. Then I would draw a free-body diagram and estimate reactions and moments. I would estimate nominal stress with P/A, Mc/I, or Tc/J as appropriate; estimate deflection with a beam or spring formula; and estimate natural frequency with f = (1/2&pi;)&radic;(k/m) if dynamics matter. I would also predict the deformed shape and likely hot spots before looking at the contour plot. These checks do not replace FEA, but they catch wrong load directions, bad constraints, unit mistakes, and results that are off by orders of magnitude.</p>`,
    },
    {
      id: "analysis-testing-qa10",
      q: `<p>What should be in an analysis or test report for an interview-quality answer?</p>`,
      a: `<p>The report should state the engineering question, requirements, assumptions, geometry version, material data, loads, boundary conditions, contacts, mesh/element choices, solver type, convergence checks, hand checks, key results, margins, uncertainty, and limitations. For a test, add fixture description, instrumentation, calibration, sampling, environment, procedure, acceptance criteria, raw-data treatment, and repeatability. The conclusion should connect evidence to a decision: pass, fail, redesign, retest, or reduce uncertainty. That is much stronger than simply saying "FEA passed" or "the test looked good."</p>`,
    },
    {
      id: "analysis-testing-qa11",
      q: `<p>A model comes to you predicting a quarter of the deflection beam theory gives. How do you work out whether the element formulation is the problem?</p>`,
      a: `<p>A factor of four in the stiff direction is the signature of shear locking, so I would go straight at the element formulation, but in order. First I confirm the inputs, because a wrong E or I explains any factor at all: check reported mass, section properties, and the material card in the model's unit system. If those are right, the error is in how the mesh represents bending.</p><p>Then I count elements through the thickness. One layer of fully integrated linear hex or, worse, linear tetrahedra cannot curve: the edges stay straight, so the element develops a shear strain that is not physically there, that parasitic shear absorbs energy, and the part comes out three to five times too stiff. Constant-strain linear tets cannot represent a bending gradient at all. The fix is three or four elements through the wall, quadratic elements, incompatible modes, or shells if the geometry is thin.</p><p>The opposite symptom belongs to the same family. Reduced-integration elements have one integration point at the centroid, and there is a deformation pattern in which that point sees zero strain, the hourglass mode. It costs no energy, so the mesh folds into a checkerboard and the structure reads too soft. I check it on the energy summary: artificial energy should stay under about 5% of total strain energy. Either way, the confirmation is the same: refine, re-run, and see whether deflection converges towards the hand calculation.</p>`,
    },
    {
      id: "analysis-testing-qa12",
      q: `<p>You have a bracket, three articles, four strain channels and a proof requirement. How do you plan the test?</p>`,
      a: `<p>I start from the decision the test has to support, not from the hardware. Requirement first: say 1.5&times; limit as proof with no permanent set, 2.0&times; as ultimate without rupture. That sets the load steps, and it means proof and ultimate are separate claims that should not be stacked on one article.</p><p>Article plan: one to limit load with the full strain survey, which is the model-correlation article; one to 1.5&times; proof with a hold, then release and inspect for permanent set; one to failure, because only a failure gives the real ultimate margin and the actual failure mode. The third article also covers a fixture problem or a lost channel, and running out of articles halfway through is how test programmes slip.</p><p>Instrumentation: I write the predicted value for every channel before the test runs. Two gauges just outside the steep gradient at the critical fillet, not inside it, because a millimetre of placement error there moves the reading 20% and makes any disagreement uninterpretable. One on a clean far-field section where P/A or Mc/I gives an unambiguous prediction, to confirm the load is going where I think. One on the fixture, because fixture compliance is the single most common cause of a test that appears to contradict the model. Add a load cell sized to the load, not to the machine, and a displacement reference on the fixture rather than the floor.</p><p>Finally, acceptance criteria and uncertainty go in the plan before any data exists, so nobody moves the goalposts after seeing it. And I state plainly what three passing articles prove: at 90% confidence, a success run of three demonstrates only about 46% reliability. It shows capability, not reliability; the confidence has to come from the validated model and the known failure mode.</p>`,
    },
  ],
};

export default content;
