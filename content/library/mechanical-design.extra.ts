import type { Question } from "../types";

// ---------------------------------------------------------------------------
// Mechanical Design Process & Judgment — extra question bank (q23–q45)
// SVG ids prefixed mdx<n>- to stay globally unique.
// ---------------------------------------------------------------------------

const figXAlloy = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">6061-T6 against 7075-T6, same nominal geometry</text>
  <text x="126" y="52" text-anchor="middle" fill="#334155" font-size="12">Young&#39;s modulus E (GPa)</text>
  <line x1="56" y1="66" x2="56" y2="200" stroke="#334155" stroke-width="1.2"/>
  <line x1="56" y1="200" x2="196" y2="200" stroke="#334155" stroke-width="1.2"/>
  <line x1="52" y1="70" x2="56" y2="70" stroke="#64748b" stroke-width="1"/>
  <line x1="52" y1="135" x2="56" y2="135" stroke="#64748b" stroke-width="1"/>
  <text x="48" y="74" text-anchor="end" fill="#64748b" font-size="11">80</text>
  <text x="48" y="139" text-anchor="end" fill="#64748b" font-size="11">40</text>
  <text x="48" y="204" text-anchor="end" fill="#64748b" font-size="11">0</text>
  <rect x="70" y="88" width="40" height="112" fill="#dbeafe" stroke="#334155" stroke-width="1.4"/>
  <rect x="130" y="84" width="40" height="116" fill="#dbeafe" stroke="#334155" stroke-width="1.4"/>
  <text x="90" y="82" text-anchor="middle" fill="#1d4ed8" font-size="12">68.9</text>
  <text x="150" y="78" text-anchor="middle" fill="#1d4ed8" font-size="12">71.7</text>
  <text x="90" y="216" text-anchor="middle" fill="#64748b" font-size="12">6061</text>
  <text x="150" y="216" text-anchor="middle" fill="#64748b" font-size="12">7075</text>
  <text x="346" y="52" text-anchor="middle" fill="#334155" font-size="12">Yield strength S<tspan baseline-shift="sub" font-size="9">y</tspan> (MPa)</text>
  <line x1="276" y1="66" x2="276" y2="200" stroke="#334155" stroke-width="1.2"/>
  <line x1="276" y1="200" x2="416" y2="200" stroke="#334155" stroke-width="1.2"/>
  <line x1="272" y1="70" x2="276" y2="70" stroke="#64748b" stroke-width="1"/>
  <line x1="272" y1="135" x2="276" y2="135" stroke="#64748b" stroke-width="1"/>
  <text x="268" y="74" text-anchor="end" fill="#64748b" font-size="11">600</text>
  <text x="268" y="139" text-anchor="end" fill="#64748b" font-size="11">300</text>
  <text x="268" y="204" text-anchor="end" fill="#64748b" font-size="11">0</text>
  <rect x="290" y="140" width="40" height="60" fill="#fee2e2" stroke="#334155" stroke-width="1.4"/>
  <rect x="350" y="91" width="40" height="109" fill="#fee2e2" stroke="#334155" stroke-width="1.4"/>
  <text x="310" y="134" text-anchor="middle" fill="#dc2626" font-size="12">276</text>
  <text x="370" y="85" text-anchor="middle" fill="#dc2626" font-size="12">503</text>
  <text x="310" y="216" text-anchor="middle" fill="#64748b" font-size="12">6061</text>
  <text x="370" y="216" text-anchor="middle" fill="#64748b" font-size="12">7075</text>
  <text x="230" y="240" text-anchor="middle" fill="#64748b" font-size="12">Heat treatment moves strength, not stiffness</text>
</svg>`;

const figXCoupling = `<svg viewBox="0 0 460 268" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mdx4-n" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#1d4ed8"/></marker>
    <marker id="mdx4-f" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="140" y="20" text-anchor="middle" font-weight="600" fill="#334155">Three-vee kinematic coupling</text>
  <text x="360" y="20" text-anchor="middle" font-weight="600" fill="#334155">One ball in its vee</text>
  <!-- plate outline -->
  <circle cx="140" cy="136" r="96" fill="#dbeafe" stroke="#334155" stroke-width="1.5" stroke-dasharray="7 5" opacity="0.7"/>
  <circle cx="140" cy="136" r="3" fill="#334155"/>
  <!-- three vee grooves + balls, radial -->
  <g transform="translate(140,136) rotate(-90)">
    <rect x="48" y="-15" width="52" height="30" fill="#e2e8f0" stroke="#334155" stroke-width="1.4"/>
    <line x1="48" y1="0" x2="100" y2="0" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
    <circle cx="70" cy="0" r="12" fill="#fff" stroke="#1d4ed8" stroke-width="2"/>
  </g>
  <g transform="translate(140,136) rotate(150)">
    <rect x="48" y="-15" width="52" height="30" fill="#e2e8f0" stroke="#334155" stroke-width="1.4"/>
    <line x1="48" y1="0" x2="100" y2="0" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
    <circle cx="70" cy="0" r="12" fill="#fff" stroke="#1d4ed8" stroke-width="2"/>
  </g>
  <g transform="translate(140,136) rotate(30)">
    <rect x="48" y="-15" width="52" height="30" fill="#e2e8f0" stroke="#334155" stroke-width="1.4"/>
    <line x1="48" y1="0" x2="100" y2="0" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
    <circle cx="70" cy="0" r="12" fill="#fff" stroke="#1d4ed8" stroke-width="2"/>
  </g>
  <text x="140" y="46" text-anchor="middle" fill="#1d4ed8" font-size="12">ball 1</text>
  <text x="66" y="196" text-anchor="middle" fill="#1d4ed8" font-size="12">ball 2</text>
  <text x="214" y="196" text-anchor="middle" fill="#1d4ed8" font-size="12">ball 3</text>
  <text x="140" y="252" text-anchor="middle" fill="#64748b" font-size="12">12 kg plate, 2.0 kN clamp preload</text>
  <!-- ===== inset ===== -->
  <polygon points="306,182 306,120 320,120 360,160 400,120 414,120 414,182" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
  <circle cx="360" cy="132" r="20" fill="#fff" stroke="#1d4ed8" stroke-width="2"/>
  <line x1="332" y1="160" x2="346" y2="146" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#mdx4-n)"/>
  <line x1="388" y1="160" x2="374" y2="146" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#mdx4-n)"/>
  <text x="322" y="176" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">N</text>
  <text x="398" y="176" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">N</text>
  <line x1="360" y1="76" x2="360" y2="106" stroke="#dc2626" stroke-width="2.5" marker-end="url(#mdx4-f)"/>
  <text x="360" y="68" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="12">load per ball</text>
  <path d="M 360 160 L 360 140 M 360 150 A 10 10 0 0 0 350 160" fill="none" stroke="#64748b" stroke-width="1"/>
  <text x="336" y="140" text-anchor="middle" fill="#64748b" font-size="12">45&#176;</text>
  <text x="360" y="204" text-anchor="middle" fill="#64748b" font-size="12">2 contacts per vee,</text>
  <text x="360" y="220" text-anchor="middle" fill="#64748b" font-size="12">flanks at 45&#176; to the load</text>
  <text x="360" y="244" text-anchor="middle" fill="#64748b" font-size="12">3 vees &#215; 2 = 6 point contacts</text>
</svg>`;

const figXTrade = `<svg viewBox="0 0 460 252" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="18" text-anchor="middle" font-weight="600" fill="#334155">Mass vs stiffness for one architecture (k grows as t&sup3;, m as t)</text>
  <!-- axes -->
  <line x1="60" y1="210" x2="440" y2="210" stroke="#334155" stroke-width="1.6"/>
  <line x1="60" y1="210" x2="60" y2="36" stroke="#334155" stroke-width="1.6"/>
  <text x="250" y="244" text-anchor="middle" fill="#64748b" font-size="12">assembly mass (kg)</text>
  <text x="66" y="32" fill="#64748b" font-size="12">tip stiffness (N/&#956;m)</text>
  <!-- x ticks -->
  <line x1="180" y1="210" x2="180" y2="216" stroke="#64748b" stroke-width="1"/>
  <text x="180" y="230" text-anchor="middle" fill="#64748b" font-size="12">1.0</text>
  <line x1="276" y1="210" x2="276" y2="216" stroke="#64748b" stroke-width="1"/>
  <text x="276" y="230" text-anchor="middle" fill="#64748b" font-size="12">1.8</text>
  <line x1="372" y1="210" x2="372" y2="216" stroke="#64748b" stroke-width="1"/>
  <text x="372" y="230" text-anchor="middle" fill="#64748b" font-size="12">2.6</text>
  <!-- y ticks -->
  <line x1="54" y1="176" x2="60" y2="176" stroke="#64748b" stroke-width="1"/>
  <text x="48" y="180" text-anchor="end" fill="#64748b" font-size="12">10</text>
  <line x1="54" y1="108" x2="60" y2="108" stroke="#64748b" stroke-width="1"/>
  <text x="48" y="112" text-anchor="end" fill="#64748b" font-size="12">30</text>
  <line x1="54" y1="74" x2="60" y2="74" stroke="#64748b" stroke-width="1"/>
  <text x="48" y="78" text-anchor="end" fill="#64748b" font-size="12">40</text>
  <!-- required region -->
  <rect x="60" y="40" width="216" height="34" fill="#fee2e2" stroke="#dc2626" stroke-width="1.4" stroke-dasharray="6 4"/>
  <text x="168" y="60" text-anchor="middle" fill="#b91c1c" font-size="12">required: &#8804;1.8 kg AND &#8805;40 N/&#956;m</text>
  <!-- curve -->
  <path d="M 180 195 C 206 184 218 178 228 169 C 250 149 262 136 276 123 C 292 104 302 89 311 74 C 322 58 330 50 340 42" fill="none" stroke="#1d4ed8" stroke-width="2.4"/>
  <circle cx="228" cy="169" r="4" fill="#1d4ed8"/>
  <text x="238" y="176" fill="#1d4ed8" font-size="12">today: 1.4 kg, 12 N/&#956;m</text>
  <circle cx="311" cy="74" r="4" fill="#dc2626"/>
  <text x="322" y="90" fill="#dc2626" font-size="12">40 N/&#956;m lands here</text>
  <line x1="276" y1="123" x2="276" y2="74" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
</svg>`;

const figXPlate = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Same misfit, same curvature &#8212; two thicknesses</text>
  <!-- thin plate -->
  <path d="M 40 128 Q 128 84 216 128" fill="none" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
  <path d="M 40 128 Q 128 84 216 128" fill="none" stroke="#dbeafe" stroke-width="8" stroke-linecap="round"/>
  <text x="128" y="60" text-anchor="middle" fill="#334155" font-size="12">t = 4 mm</text>
  <text x="128" y="164" text-anchor="middle" fill="#1d4ed8" font-size="12">&#949; = t / 2R</text>
  <text x="128" y="184" text-anchor="middle" fill="#1d4ed8" font-size="12">&#963; = E t / 2R</text>
  <!-- thick plate -->
  <path d="M 244 128 Q 332 84 420 128" fill="none" stroke="#334155" stroke-width="21" stroke-linecap="round"/>
  <path d="M 244 128 Q 332 84 420 128" fill="none" stroke="#dbeafe" stroke-width="18" stroke-linecap="round"/>
  <text x="332" y="60" text-anchor="middle" fill="#334155" font-size="12">t = 8 mm</text>
  <text x="332" y="164" text-anchor="middle" fill="#dc2626" font-size="12">&#949; doubles</text>
  <text x="332" y="184" text-anchor="middle" fill="#dc2626" font-size="12">&#963; doubles</text>
  <!-- curvature note -->
  <line x1="216" y1="40" x2="216" y2="200" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="230" y="212" text-anchor="middle" fill="#64748b" font-size="12">R is fixed by the 0.4 mm flatness error over the bolt span, not by the plate.</text>
  <text x="230" y="232" text-anchor="middle" fill="#64748b" font-size="12">The bolts impose a displacement; the plate has no say in the curvature.</text>
</svg>`;

const extra: Question[] = [
  {
    id: "mechanical-design-q23",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A legacy drawing calls out 0.05 mm flatness on the back face of a cover plate that bolts on with four screws and a gasket. Nobody on the team can say where the number came from, and the shop quotes an extra grinding operation to hold it. What do you do?</p>`,
    choices: [
      "Hold 0.05 mm: a tighter tolerance is never a risk, only a modest cost",
      "Trace what function the face serves, then loosen it if 0.2 mm breaks nothing",
      "Delete the callout entirely; flatness on a gasketed face is not functional",
      "Keep 0.05 mm and add the grinding step so production is never the bottleneck",
    ],
    answer: 1,
    explanation: `<p>Every tolerance is a cheque somebody writes in production, every unit, forever. A number nobody can justify is the cheapest thing in the design to attack, but you attack it by finding the <em>function</em>, not by assuming there isn't one. Here the plausible functions are gasket compression uniformity and bolt-up distortion; both give you a way to compute what flatness is actually needed, and both usually land nearer 0.2 mm than 0.05 mm on a gasketed joint.</p>
<p>Choice A is the belief that costs companies the most money: a tighter tolerance is a risk, because it drives extra operations, raises scrap, and can force a process change that introduces new variation. Choice C swings too far. Deleting a callout without understanding it is the same mistake in the opposite direction, and gasketed faces genuinely can need flatness control. Choice D pays the bill without asking the question.</p>
<p>The habit to carry into interviews: for every number on a drawing ask "where did it come from?" and "what breaks if it is twice as loose?" If nobody can answer either, you have found free money.</p>`,
  },
  {
    id: "mechanical-design-q24",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A bracket's governing allowable stress is 250 MPa and the calculated working stress is 180 MPa. Report the <strong>margin of safety</strong> against a required factor of 1.0.</p>`,
    answer: 0.389,
    unit: "(dimensionless)",
    explanation: `<p class="eq">n = &sigma;<sub>allow</sub> / &sigma;<sub>applied</sub> = 250 / 180 = 1.389</p>
<p class="eq">MS = n &minus; 1 = 1.389 &minus; 1 = <strong>0.389</strong></p>
<p>MS is fractional headroom: the load could rise 38.9% before reaching the allowable. Aerospace and defence reviews report MS rather than n, and MS = 0 means "exactly adequate" rather than "failed", which is why a well-optimised structure produces a report full of zeros and near-zeros.</p>
<p>Quote the required factor alongside it. If the program mandates 1.5, then MS = 250/(1.5 &times; 180) &minus; 1 = &minus;0.074 and the same part fails on identical physics.</p>`,
  },
  {
    id: "mechanical-design-q25",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A 6061-T6 aluminium arm (E = 68.9 GPa) deflects 0.60 mm at the tip. A colleague proposes remaking it in 7075-T6, pointing out that 7075 has more than twice the yield strength for the same density and machines much the same way. 7075-T6 has E = 71.7 GPa. What tip deflection does the swap give, in mm?</p>`,
    figure: figXAlloy,
    answer: 0.577,
    unit: "mm",
    tolerance: 0.03,
    explanation: `<p>Elastic deflection depends on stiffness, not strength. For any given geometry and load, &delta; &prop; 1/E, so the swap buys exactly the ratio of the two moduli:</p>
<p class="eq">&delta;<sub>7075</sub> = &delta;<sub>6061</sub> &times; E<sub>6061</sub>/E<sub>7075</sub> = 0.60 &times; 68.9/71.7 = <strong>0.577 mm</strong></p>
<p>That is a <strong>4% improvement</strong> for a material that costs several times as much, and it fixes nothing if the problem is stiffness. The confusion is extremely common, because "stronger" and "stiffer" are the same word in ordinary English and completely different properties in a datasheet. Every aluminium alloy sits within a few percent of 70 GPa; every steel sits within a few percent of 200 GPa. Heat treatment moves yield strength by a factor of three and moves E essentially not at all, because E is set by the atomic bonding of the base metal.</p>
<p>So the questions to ask before an alloy change are: is this a stiffness problem or a strength problem? If deflection is the requirement, the levers are geometric. Section depth (&delta; goes as 1/h&sup3;), length (as L&sup3;), or a different load path, or you change to a genuinely stiffer material class, which for aluminium means steel at 3&times; the E and 3&times; the density, or a carbon composite. 7075 is the right answer to a different question: it earns its cost when the part is strength- or fatigue-limited, or when you need to thin a section down and stay clear of yield.</p>`,
  },
  {
    id: "mechanical-design-q26",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A stakeholder hands you this requirement: "the filter cover shall be easy to remove for service." You have to turn it into something the design can be built and verified against. Which restatement is the right one?</p>`,
    choices: [
      "The cover shall be retained by four quarter-turn latches on the front face",
      "The cover shall be removable in under 30 s by one technician, without tools",
      "The cover shall be judged easy to remove by the team at design review",
      "The cover shall require a removal force no greater than 20 N at the handle",
    ],
    answer: 1,
    explanation: `<p>A usable requirement states <em>what</em> must be true, measurably, and leaves the <em>how</em> to the designer. "Under 30 s, one technician, no tools" does all three jobs: it is verifiable with a stopwatch and a real technician, it captures what the customer actually cares about (service time on a machine that is down), and it leaves latches, magnets, captive screws and hinges all on the table.</p>
<p>The other three fail differently, and you will meet all of them.</p>
<ul>
<li><strong>Naming the solution.</strong> Specifying quarter-turn latches writes the answer into the requirement. It looks decisive and it quietly kills every alternative, including cheaper ones, before anyone has evaluated them, and if the latches turn out to be unavailable, the requirement is now unmeetable for no functional reason.</li>
<li><strong>Unverifiable.</strong> "Judged easy at design review" cannot pass or fail a design; it can only pass or fail a meeting. There is no test you can write and nothing to hand a supplier.</li>
<li><strong>Measuring the wrong thing.</strong> A 20 N force limit is perfectly verifiable and almost certainly not what makes service hard. A cover held by eight captive screws passes it comfortably and takes four minutes. Precision is not the same as relevance.</li>
</ul>
<p>Raise it unprompted: ask <em>why</em> 30 s, and whether the real driver is downtime cost, a technician working overhead on a ladder, or a competitor's spec. That answer usually reshapes the number, and sometimes reveals that the filter should not need a cover at all.</p>`,
  },
  {
    id: "mechanical-design-q27",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A 3D-printed prototype of an enclosure passed a 1 m drop test on its corner boss. Production will injection-mould the same nominal geometry in the same nominal polymer. What do you re-verify before release, and why?</p>`,
    choices: [
      "Nothing structural &mdash; same geometry, same material, same drop energy",
      "The drop test, because moulded parts are weak at knit lines and gate marks",
      "Dimensional fit only, since strength follows directly from the wall thickness",
      "Cosmetics and finish, which are the properties the moulding process changes",
    ],
    answer: 1,
    explanation: `<p>A prototype process and a production process give you two different materials with the same name on the box. Injection moulding introduces features the printed part never had: <strong>knit lines</strong> where two flow fronts meet behind a boss or a hole, which can carry a fraction of the bulk strength because the polymer chains never entangle across the join; molecular orientation along the flow direction, which makes the part anisotropic; residual stress from packing and differential cooling; and a gate mark that is a geometric and metallurgical notch in one. A corner boss is exactly where flow fronts meet.</p>
<p>Printed parts have their own weaknesses, layer adhesion, usually the weakest direction, so the two processes fail in different places, and neither test result transfers. The 1 m drop is a structural test of the <em>process</em> as much as the geometry, and it has to be repeated on production-representative parts from the production tool.</p>
<p>The other answers each contain a true statement used wrongly. Geometry and drop energy really are unchanged, which is precisely why it is tempting to skip the retest. Wall thickness really does drive stiffness, but strength at a knit line does not follow from it. And moulding really does change cosmetics, sink marks, weld-line witness, gate vestige, but treating those as the only change is how a boss cracks in the field. The practical version of this rule: <strong>a test is only evidence about the process it was run on.</strong> Plan first-article structural testing into the tooling schedule rather than discovering it after PPAP.</p>`,
  },
  {
    id: "mechanical-design-q28",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A spec says a linear stage must hold 5 &micro;m repeatability. Talking to the operator, you learn what they actually do: measure a feature, retract, change the tool, and re-measure the same feature about ten minutes later. The number that matters to them is the difference between those two readings. What does that change?</p>`,
    choices: [
      "Nothing &mdash; positioning to 5 &micro;m twice is exactly what repeatability means",
      "It relaxes it: ten minutes lets the stage settle and any servo error decay",
      "It makes thermal drift over ten minutes the governing term, not the bearings",
      "It turns it into an accuracy spec, so a calibrated scale replaces a better stage",
    ],
    answer: 2,
    explanation: `<p>Catalogue repeatability is a short-term number: approach the same commanded position many times in quick succession and see the spread. It is dominated by bearing and drive behaviour, friction, stick-slip, backlash, encoder quantisation, servo settling. Over ten minutes an entirely different mechanism takes over. A steel stage 300 mm long drifts about 3.6 &micro;m per degree of temperature change (&alpha; &asymp; 12 &times; 10<sup>&minus;6</sup>/K), so <strong>one degree of ambient drift, or the motor warming up, eats the whole budget</strong>. Spindle heat, coolant temperature, sunlight on the enclosure and the machine's own duty cycle all live on that timescale.</p>
<p>So the requirement has quietly turned into a thermal-stability requirement wearing a repeatability label. What you do about it is different too: a better bearing buys nothing, while a temperature-controlled enclosure, a low-expansion scale mounted on a stable reference, symmetric structure, or a re-datuming routine between measurements all buy a great deal. Very often the cheapest fix is procedural. Re-measure a reference feature after the tool change and subtract the drift, and that only becomes visible once you know which mechanism you are fighting.</p>
<p>The two seductive wrong answers are the ones that sound generous. Time does not help: servo settling is a sub-second effect, and the drift you accumulate over ten minutes far outweighs it. And this is not an accuracy problem, absolute position never enters, only the difference between two readings of the same feature, so a calibrated scale corrects nothing. So: <strong>a specification number means nothing without its timescale and its measurement conditions</strong>, and the fastest way to find both is to watch the operator.</p>`,
  },
  {
    id: "mechanical-design-q29",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A machine's emergency stop depends on a single compression spring returning a valve to its safe position. Failure analysis shows a broken or relaxed spring leaves the valve open. Which change most reduces the risk?</p>`,
    choices: [
      "Double the spring rate so the return force carries much more margin",
      "Specify a higher-grade wire and a shot-peened spring for longer fatigue life",
      "Add a position sensor that reports valve state back to the controller",
      "Fit two parallel springs, each sized to return the valve on its own",
    ],
    answer: 3,
    explanation: `<p>The defect here is architectural, not parametric: one component's failure defeats the safety function. A stronger or better spring (choices A and B) reduces the <em>probability</em> of that failure but leaves the single point of failure in place, and both act on a mode you can only partly predict, since spring failures come from fatigue, set, corrosion and installation damage in unknown proportions. Two parallel springs each capable of the full return removes the single point entirely: the function survives losing either one.</p>
<p>The sensor (choice C) is worth having, but it is <strong>detection</strong>, not prevention. It tells you the valve did not close; it does not close the valve. In safety work you rank interventions in that order. Eliminate the failure, then make it fail safe, then detect it, then instruct around it, and the sensor sits third.</p>
<p>Two more questions this raises. Are the two springs genuinely independent, or do they share a failure cause such as one bad wire lot, one plating batch, or one over-compression during assembly? Common-cause failure is what turns paper redundancy into real redundancy or into theatre. And can you test each spring individually, or does redundancy just mean the machine runs for months on one spring while nobody notices? Redundancy without a way to detect the first failure buys much less than it looks like it does.</p>`,
  },
  {
    id: "mechanical-design-q30",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A three-vee kinematic coupling is proposed for a tool-changer interface that must repeat to 5 &micro;m and carry a 2.0 kN clamp preload plus a 400 N transverse cutting load. What is the real risk you should flag in review?</p>`,
    figure: figXCoupling,
    choices: [
      "It cannot repeat to 5 &micro;m; kinematic couplings are a 50 &micro;m technology",
      "It over-constrains the plate, so repeatability will drift as the vees wear in",
      "Hertzian contact stress at six small points may brinell the vee flanks",
      "Thermal growth of the plate will walk the balls out of their vee grooves",
    ],
    answer: 2,
    explanation: `<p>A three-vee coupling is exactly constrained: three vees, two contact points each, six point contacts removing six degrees of freedom with nothing doubled. That is precisely why it repeats, a well-made coupling repeats to well under a micron, so choice A is off by two orders of magnitude and choice B misreads the constraint count. It is also inherently athermal in the usual arrangement, because the vee axes point at the centre so the plate expands radially <em>along</em> each groove rather than fighting it, which kills choice D.</p>
<p>What you actually pay for exact constraint is <strong>contact area</strong>. All the load funnels through six near-point Hertzian contacts, so with 2.1 kN total the local pressures run into the GPa range and hardened steel can brinell, permanent indentation that destroys the very repeatability you bought the coupling for. Contact stress in a sphere-on-flat scales roughly as P<sup>1/3</sup>, so it is remarkably forgiving of <em>load</em>. Doubling the clamp force raises the peak pressure only 26%, but that same exponent means you cannot fix a marginal contact by trimming the load either. What it is not forgiving of is a small contact radius, which is the lever that actually moves the number. The low stiffness of point contact also shows up as a soft interface under the transverse cutting load.</p>
<p>The standard fixes are all about spreading the contact without adding constraint: hardened and ground vee inserts, larger ball and groove radii (a "canoe ball" or gothic-arch groove raises the contact area by an order of magnitude while keeping the same six-point kinematics), or a quasi-kinematic coupling that trades a little repeatability for much more capacity. Naming the true limitation and the design lever that fixes it is the answer that lands.</p>`,
  },
  {
    id: "mechanical-design-q31",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>The coupling shown carries a 12 kg plate plus a 2.0 kN clamp preload, shared equally by three balls. Each ball sits in a vee whose flanks are at 45&deg; to the load direction, giving two contacts per ball. What normal force does <strong>one contact</strong> carry, in N? (g = 9.81 m/s&sup2;)</p>`,
    figure: figXCoupling,
    explanation: `<p>Total axial load on the interface:</p>
<p class="eq">F = 2000 N + (12 &times; 9.81) = 2000 + 117.7 = 2117.7 N</p>
<p>Shared by three balls: F<sub>ball</sub> = 2117.7 / 3 = 705.9 N.</p>
<p>Each ball rests on two flanks whose normals are inclined 45&deg; from the load direction, so only the component along the load carries it:</p>
<p class="eq">2 N sin 45&deg; = F<sub>ball</sub> &rarr; N = 705.9 / (2 &times; 0.7071) = <strong>499 N</strong></p>
<p>(With the flank angle &theta; measured from the load direction, the component of each normal force along the load is N sin&theta;. At 45&deg; sine and cosine happen to coincide, which is why this one is easy to get right for the wrong reason. Check the geometry at any other angle before you trust the formula.)</p>
<p>The result is the point of the calculation: the vee <em>amplifies</em> the contact force. Each contact sees 499 N while the ball only carries 706 N, and the flank angle sets how bad that gets:</p>
<p class="eq">N/F<sub>ball</sub> = 1/(2 sin&theta;):&nbsp;&nbsp;&theta; = 30&deg; &rarr; 1.00,&nbsp;&nbsp;45&deg; &rarr; 0.707,&nbsp;&nbsp;60&deg; &rarr; 0.577</p>
<p>So a <em>narrower, deeper</em> vee (flanks closer to the load line, &theta; small) wedges the ball and drives the contact force up, but it is also what buys lateral stiffness and self-centring, because the flanks then oppose sideways motion directly. A <em>wider, shallower</em> vee lowers the contact force and gives that location up. There is no free choice here: the contact stress you are trying to escape and the constraint you are trying to keep are bought with the same angle, which is why 90&deg; included (45&deg; flanks) is the usual compromise.</p>
<p>Summing checks it: 6 contacts &times; 499 N &times; cos 45&deg; = 6 &times; 353 = 2118 N, which recovers the applied load. &#10003; Now feed 499 N into a Hertz calculation with your ball radius to see whether you are anywhere near brinelling the flank. That, not the statics, is what decides whether this coupling works.</p>`,
    answer: 499,
    unit: "N",
  },
  {
    id: "mechanical-design-q32",
    type: "mc",
    difficulty: 1,
    prompt: `<p>Twenty minutes into the problem you have sketched a welded steel weldment that meets every requirement on paper. The design review is in three days. What is the right next move?</p>`,
    choices: [
      "Start detailing it: it meets spec, and more concepts only burn schedule",
      "Detail it now and only revisit the architecture if the prototype fails its test",
      "Spend two more hours generating architectures that fail differently, then screen",
      "Detail it, but have a colleague review the drawings before you release them",
    ],
    answer: 2,
    explanation: `<p>Your first concept is the one your last project trained you to draw. That is not a criticism. It is how experience works, but it means the first idea samples your habits rather than the solution space. Two more hours at the sketch stage is the cheapest engineering you will ever buy: a concept costs an hour now and a quarter of a year once it is tooled.</p>
<p>The important qualifier is in the wording: architectures that <strong>fail differently</strong>, not three variants of the same weldment. A weldment, a folded sheet-metal part with a bonded stiffener, and a machined billet fail by different modes, cost differently at different volumes, and have different lead times, so they genuinely test different assumptions. Three weldments with different rib patterns tell you almost nothing new.</p>
<p>Choice B is the expensive version of the same reflex: waiting for the prototype to fail means you find out at the point where changing your mind costs the most. Choice D is good practice but it is a quality check, not a design decision. A reviewer looking at drawings will catch a missed fillet, not a wrong architecture. And note when to stop: once new concepts stop changing the ranking, or once generating another costs more than prototyping the leader, diverging further is procrastination.</p>`,
  },
  {
    id: "mechanical-design-q33",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A mount must hold tip deflection to 0.25 mm at the specified load. Two things are not exact: the load is an estimate good to +20%, and against the last three measured builds your cantilever hand calculation has read about 15% <em>low</em> compared with the test. What deflection should your hand calculation predict, so that the built hardware still meets 0.25 mm? Give the answer in mm.</p>`,
    answer: 0.181,
    unit: "mm",
    tolerance: 0.03,
    explanation: `<p>Both corrections act on the same response, and deflection is linear in load, so they multiply rather than add. Work backwards from the requirement:</p>
<p class="eq">&delta;<sub>real</sub> = 1.20 &times; 1.15 &times; &delta;<sub>calc</sub> = 1.38 &delta;<sub>calc</sub> &le; 0.25 mm</p>
<p class="eq">&delta;<sub>calc</sub> &le; 0.25 / 1.38 = <strong>0.181 mm</strong></p>
<p>So the calculation has to show 0.181 mm, not 0.25 mm, for the hardware to land inside spec. Adding the two allowances instead of multiplying gives 0.25/1.35 = 0.185 mm, which is close enough here not to matter, but the habit does matter, because with four or five such factors the two methods diverge fast.</p>
<p>The engineering content is in where the two numbers came from, and they are not the same kind of thing. The +20% on load is <em>uncertainty</em>: you do not know the load, and the honest response is a conservative allowance now and a measurement later to retire it. The 15% is <em>bias</em>: your model is systematically wrong in a known direction, almost certainly because the real root joint is not the perfectly fixed end the cantilever formula assumes. A bias you have measured three times is a correlation factor you should apply openly and write down, not fold silently into a factor of safety, where nobody downstream can see it, trade it, or notice when a design change makes it invalid.</p>`,
  },
  {
    id: "mechanical-design-q34",
    type: "mc",
    difficulty: 1,
    prompt: `<p>Two structurally identical brackets carry the same load in the same material. Bracket A is behind a removable panel and gets a visual inspection every six months. Bracket B is welded inside a sealed frame and will never be seen again. How should the two designs differ?</p>`,
    choices: [
      "B needs more margin, or a load path that fails in a way somebody would notice",
      "They should be identical: same load, same material, same calculated stress",
      "A needs more margin, because being accessible exposes it to handling damage",
      "B needs less margin, since a sealed frame protects it from moisture and dirt",
    ],
    answer: 0,
    explanation: `<p>Inspectability is one of the four legitimate inputs to a factor of safety, alongside load uncertainty, material variability and consequence of failure. Bracket A has a safety net: a crack that initiates has up to six months of growth before someone sees it, and cracks in ductile metal grow slowly and visibly for most of their life. Bracket B has no net at all. The first anyone knows is the fracture.</p>
<p>So B gets one of two treatments. Either carry more margin, particularly on modes with slow, hidden progression like fatigue and corrosion, or change the design so failure announces itself: a redundant load path so losing one member degrades performance rather than dropping the load, or a deliberate fail-safe geometry where the first thing to go is detectable. Aircraft structure formalises exactly this as damage-tolerant versus safe-life design.</p>
<p>Choice B ignores that identical calculated stress does not mean identical risk. Choice C is not silly. Accessible parts genuinely do get stood on and levered against, but that argues for local protection, not for reversing the inspection logic. Choice D confuses the environment with the failure mode; a sealed frame does not stop fatigue, and it can trap condensation and make corrosion worse than an open, drained, inspectable one.</p>`,
  },
  {
    id: "mechanical-design-q35",
    type: "mc",
    difficulty: 2,
    prompt: `<p>You claim a sensor mount holds alignment within 0.05&deg; over a 0&ndash;50&nbsp;&deg;C operating range. Verification has one environmental chamber and two weeks. Which test actually verifies the claim?</p>`,
    choices: [
      "Soak at 50 &deg;C for an hour, then measure the alignment back at room temperature",
      "Measure ten units at 25 &deg;C to capture build-to-build variation in the mount",
      "Run a thermal FEA load case and correlate it to one room-temperature reading",
      "Measure alignment continuously while ramping the chamber from 0 to 50 &deg;C",
    ],
    answer: 3,
    explanation: `<p>The requirement is stated at temperature, so the measurement has to happen at temperature. Choice A measures something different and useful. Permanent set, meaning whether the mount comes <em>back</em>, but a mount can drift 0.3&deg; at 50&nbsp;&deg;C and return perfectly to zero, passing that test while failing the actual spec every hot afternoon.</p>
<p>Ramping continuously is better than soaking at the endpoints for two reasons. It catches non-monotonic behaviour, such as a bolted joint that sticks and then slips at some threshold, which endpoint testing steps straight over. And it gives you a slope in degrees per kelvin that you can compare directly against the differential-growth prediction &delta; = (&alpha;<sub>1</sub> &minus; &alpha;<sub>2</sub>)L&Delta;T, so the test does more than pass or fail. It tells you whether your model of <em>why</em> it moves is right. Instrument the quantity the model predicts.</p>
<p>Choice B measures a real and separate axis (unit-to-unit variation), which you also need, but at one temperature it cannot address the claim. Choice C uses analysis to substitute for the measurement that is in dispute, which is exactly backwards. Practical additions worth mentioning: hold the ramp slow enough that the assembly is near thermal equilibrium, or you measure the gradient rather than the steady state; and put a thermocouple on the part, not just in the chamber air.</p>`,
  },
  {
    id: "mechanical-design-q36",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>The arm is a solid rib of fixed depth and length, so tip stiffness scales with rib thickness cubed (I = bt&sup3;/12) while mass scales linearly with it. The current design weighs 1.4 kg and gives 12 N/&micro;m. The requirement is 40 N/&micro;m at no more than 1.8 kg. What mass does 40 N/&micro;m demand from this architecture, in kg?</p>`,
    figure: figXTrade,
    answer: 2.09,
    unit: "kg",
    explanation: `<p>Since k &prop; t&sup3;, the thickness ratio needed is the cube root of the stiffness ratio:</p>
<p class="eq">t<sub>2</sub>/t<sub>1</sub> = (40/12)<sup>1/3</sup> = (3.333)<sup>1/3</sup> = 1.494</p>
<p>and since m &prop; t, mass scales by the same factor:</p>
<p class="eq">m<sub>2</sub> = 1.4 &times; 1.494 = <strong>2.09 kg</strong></p>
<p>Check it the other way: at the 1.8 kg limit, t only grows by 1.8/1.4 = 1.286, so k = 12 &times; (1.286)&sup3; = 25.5 N/&micro;m, well short of 40. The requirement set has <strong>no feasible point</strong> for this architecture: you can have 1.8 kg or 40 N/&micro;m, not both.</p>
<p>Notice how forgiving the cube law is in one direction and how brutal in the other. Tripling stiffness costs only 49% more mass, which is why stiffness problems are usually cheaper to fix than people fear. But it also means the requirement writer who asked for 3.3&times; the stiffness at 29% more mass was asking for something the geometry cannot give, and no amount of detailing will close that gap. The move is not to grind harder. It is to go back with the curve, or to change the architecture so the exponent changes (move material outboard, add a second load path, shorten the arm).</p>`,
  },
  {
    id: "mechanical-design-q37",
    type: "mc",
    difficulty: 3,
    prompt: `<p>Your calculation says 40 N/&micro;m costs 2.09 kg from this architecture, and the mass limit is 1.8 kg. Review is tomorrow. What do you bring?</p>`,
    figure: figXTrade,
    choices: [
      "Report 2.09 kg with the trade curve and ask which requirement to relax",
      "Ship at 1.8 kg and 25 N/&micro;m and record the stiffness target as a stretch goal",
      "Switch to titanium, which buys stiffness at the same assembly mass",
      "Add a rib and claim the stiffness target without re-running the calculation",
    ],
    answer: 0,
    explanation: `<p>When a requirement set has no feasible point, the deliverable is the <strong>trade</strong>, not a compromise you chose privately. "At 1.8 kg this architecture gives 25 N/&micro;m; 40 N/&micro;m costs 2.09 kg; which do you want, or shall I change the architecture?" hands the decision to the people who own the requirements, with the numbers they need to make it. That is what separates a recommendation from a preference.</p>
<p>Choice B is the failure mode that ends badly: quietly missing a requirement and relabelling it. Somebody downstream sized the servo, the control loop or the tolerance budget around 40 N/&micro;m, and they will find out at integration.</p>
<p>Choice C is the material-selection error. Titanium's modulus is around 114 GPa against steel's 200, and its density is 4.43 against 7.85, so specific stiffness E/&rho; is roughly 26 for titanium, 25 for steel and 26 for aluminium. All three structural metals are within a few percent on stiffness per unit mass; titanium buys strength, temperature capability and corrosion resistance, not stiffness. For a stiffness-limited part, geometry beats material almost every time.</p>
<p>Choice D is the one that gets people fired. If you add a rib, re-run the number, and note that a rib genuinely can help, because it changes the exponent by moving material away from the neutral axis, which is exactly the architecture change worth proposing alongside the trade curve.</p>`,
  },
  {
    id: "mechanical-design-q38",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>An FMEA lists two items. A leaking pump seal: severity 7, occurrence 3, detection 2 (a technician notices within days). A bearing seizure: severity 9, occurrence 2, detection 8 (no warning at all). Compute the <strong>risk priority number</strong> for the bearing seizure.</p>`,
    answer: 144,
    unit: "(RPN)",
    explanation: `<p>RPN is the product of the three ratings:</p>
<p class="eq">RPN = S &times; O &times; D = 9 &times; 2 &times; 8 = <strong>144</strong></p>
<p>For comparison the seal is 7 &times; 3 &times; 2 = 42. The bearing wins the queue by 3.4&times; despite being <em>less</em> likely to occur, and the term driving it is detection: a failure nobody sees coming carries far more risk than a more frequent one that announces itself. That is the whole reason detection is in the product.</p>
<p>Now read the result as an engineer rather than a spreadsheet. The lever with the most travel is the detection score of 8, adding a bearing temperature or vibration sensor, or a simple wear indicator, can take it to 2 or 3 and cut the RPN to around 50 for the cost of one component. Reducing occurrence (better lubrication, a larger bearing) is usually more expensive per point. Severity is normally the hardest to change, because it is set by what the failure does downstream, not by the part.</p>
<p>One limit on all this: RPN is an ordinal score dressed up as arithmetic, and 144 versus 138 means nothing. Use it to rank and to argue, never as a threshold to clear, and always look separately at any row with severity 9 or 10, regardless of its RPN.</p>`,
  },
  {
    id: "mechanical-design-q39",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A benchtop instrument passes every operating load case with margin. Three of the first twenty units arrive at customers from the courier with a cracked internal bracket. What is the most likely cause?</p>`,
    choices: [
      "The bracket material was out of specification on that production lot",
      "Operating vibration accumulated fatigue damage before the units shipped",
      "Shipping shock: a packaged corner drop far exceeds any operating load case",
      "Thermal cycling in an unheated truck exceeded the differential-growth clearance",
    ],
    answer: 2,
    explanation: `<p>A 15% failure rate concentrated at delivery, on units that passed operating tests, points squarely at the transport environment. Do the arithmetic: a 1 m drop onto packaging that crushes 25 mm gives a deceleration of roughly h/s = 40 g. An internal bracket sized for a 1 g static instrument load is suddenly carrying forty times its design load, no analysis of the operating case covers that, because nobody wrote the shipping case down.</p>
<p>Choice A is possible but does not fit the pattern: a bad material lot produces failures scattered across the load spectrum, not clustered at delivery. Choice B fails on exposure. Brand-new units have logged hours, not the millions of cycles high-cycle fatigue needs. Choice D is a real mechanism in trucks, but 0.2 mm of differential growth cracks joints over hundreds of cycles, not on a single trip.</p>
<p>So: <strong>shipping is frequently the worst load case a product ever sees, and it is the one most often absent from the requirements.</strong> The fixes are cheap if you get there early. More crush distance and better foam (deceleration scales as 1/s, so doubling the crush halves the g), internal restraint for heavy sub-assemblies so they do not swing on their mounts, and an ISTA or drop-test requirement written into the spec so it gets verified rather than discovered.</p>`,
  },
  {
    id: "mechanical-design-q40",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A 12 kg packaged instrument is dropped from 1.0 m onto foam that crushes 25 mm at roughly constant force before stopping it. Estimate the peak deceleration in <strong>g</strong>. (g = 9.81 m/s&sup2;)</p>`,
    answer: 40,
    unit: "g",
    explanation: `<p>Impact velocity from the free fall:</p>
<p class="eq">v = &radic;(2gh) = &radic;(2 &times; 9.81 &times; 1.0) = 4.43 m/s</p>
<p>Constant deceleration over the crush distance s:</p>
<p class="eq">a = v&sup2; / (2s) = 19.62 / (2 &times; 0.025) = 392 m/s&sup2; = 392/9.81 = <strong>40.0 g</strong></p>
<p>The shortcut worth carrying into an interview: for a constant-force stop, deceleration in g is just the ratio of drop height to stopping distance, h/s = 1000/25 = 40. (Including the work done over the crush itself gives a = g(h/s + 1) = 41 g, a 2.5% refinement not worth arguing about.) Note the mass cancels entirely. A heavier instrument does not decelerate harder, though it does need more foam <em>area</em> to keep the foam from bottoming out, which is where mass re-enters the problem.</p>
<p>Design consequences: deceleration scales as 1/s, so the single most effective change is more crush distance, and doubling the foam thickness halves the load. Every internal component now needs a 40 g inertial check. A 200 g PCB pulls 80 N on its standoffs, and a 3 kg transformer pulls 1.2 kN through its bracket. That is why shipping so often governs the design of internal supports even though the instrument only ever sees 1 g in use.</p>`,
  },
  {
    id: "mechanical-design-q41",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A pump module contains a filter (replace every 500 h), a seal kit (4000 h), a motor (20000 h) and a controller board (life of product). In the current layout the motor must come off to reach the filter. What is the strongest fix?</p>`,
    choices: [
      "Specify more filter media so the filter interval stretches out to 4000 hours",
      "Re-order the stack so the filter comes out without removing anything else",
      "Add a quick-release motor mount so the motor comes off in under five minutes",
      "Write a clear service procedure and train the field technicians on the sequence",
    ],
    answer: 1,
    explanation: `<p>Sort the components by service frequency and the answer falls out: the filter is touched 40&times; more often than the motor and 8&times; more often than the seals, so it belongs at the <em>top</em> of the disassembly stack and the controller belongs at the bottom. Every service event currently pays motor-removal time, plus the risk that comes with it, disturbed alignment, damaged leads, a coupling reassembled wrong. That cost recurs for the life of every unit in the field.</p>
<p>Choice C is the reasonable second-best and worth taking if the layout genuinely cannot change: it reduces the cost per event without removing it. Choice A attacks the frequency instead of the access, which sometimes wins, but a 8&times; increase in media usually means a much larger housing and it does nothing for the units already built. Choice D is documentation standing in for design. It makes the bad layout survivable rather than fixing it.</p>
<p>The general rule: <strong>lay out the assembly in order of service frequency, not in order of assembly convenience.</strong> The related checks are whether service can be done with standard tools in the space available, whether anything must be re-aligned or re-calibrated afterwards (if so, add a locating feature so it goes back the same way), and whether a technician can tell from outside that the filter needs changing at all.</p>`,
  },
  {
    id: "mechanical-design-q42",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A cover plate bolted at four points to a boss with a 0.4 mm flatness error keeps cracking after a few hundred thermal cycles. A colleague proposes doubling the plate thickness to "give it more margin". What happens?</p>`,
    figure: figXPlate,
    choices: [
      "Stress halves: doubling the thickness doubles the section modulus",
      "Life improves about fourfold, since bending stress falls as one over t squared",
      "Nothing changes: the misfit stress depends only on E and the flatness error",
      "Stress roughly doubles: curvature is fixed, and bending stress goes as E&middot;t/2R",
    ],
    answer: 3,
    explanation: `<p>The bolts impose a <strong>displacement</strong>, not a force. The 0.4 mm misfit over the bolt span sets the radius of curvature R the plate must adopt, and the plate gets no say in it. The bolt preload is orders of magnitude more than it takes to bend a cover. For a plate bent to radius R, the surface strain is &epsilon; = t/(2R) and the surface stress is &sigma; = Et/(2R). Both are <em>proportional to thickness</em>, so doubling t doubles the stress and makes the cracking worse.</p>
<p>This inverts every instinct trained on load-controlled problems. Choices A and B apply &sigma; = M/Z, which is correct when M is fixed, but here M is not fixed; the curvature is. A thicker plate simply generates a larger moment resisting the same imposed shape.</p>
<p>Choice C is the answer that catches good engineers, because it is right for a different geometry: a fully restrained bar in pure tension does see &sigma; = E&alpha;&Delta;T independent of area. Bending is different, because the strain at the surface depends on how far the surface is from the neutral axis, and that distance is t/2.</p>
<p>The fixes all reduce the imposed curvature or the stiffness fighting it: machine the four pads coplanar in one setup, drop to three pads, add a compliant shim or spherical washer at the fourth point, or slot the extra holes so the plate is located but not forced. If you must keep four rigid points, a <em>thinner</em> or more compliant plate with a local stiffener away from the bolt line is the counter-intuitive but correct direction.</p>`,
  },
  {
    id: "mechanical-design-q43",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>The load on a part is an estimate with &plusmn;40% uncertainty, and the part is uninspectable once installed. Your programme requires that at the <strong>worst-case</strong> load the factor of safety is still at least 1.25. What factor of safety must you carry against the <strong>nominal</strong> estimated load?</p>`,
    answer: 1.75,
    unit: "(dimensionless)",
    explanation: `<p>Worst-case load is 1.4&times; nominal. Factor of safety scales inversely with load, so a factor n<sub>nom</sub> at the nominal load becomes n<sub>nom</sub>/1.4 at the worst case. Setting that equal to the required 1.25:</p>
<p class="eq">n<sub>nom</sub> / 1.4 = 1.25 &rarr; n<sub>nom</sub> = 1.25 &times; 1.4 = <strong>1.75</strong></p>
<p>What makes this worth doing explicitly is the bookkeeping discipline. The 1.4 covers load uncertainty and the 1.25 covers everything else, material scatter, analysis error, consequence, inspectability. Each source is named and applied once, so when the load is later measured and turns out to be within 10%, you can defensibly drop to 1.25 &times; 1.1 = 1.38 and recover the mass, because you know exactly which term you are retiring.</p>
<p>Compare that with quoting "1.75" as a single opaque number: nobody, including you in six months, can tell what it covers or what would justify changing it. And notice how uninspectability pushes on the <em>other</em> factor, not this one. If the part could be inspected on a six-month interval, 1.15 rather than 1.25 might be defensible, giving n<sub>nom</sub> = 1.61. Check it end to end: at the worst-case load of 1.4&times; nominal, capacity/load = 1.75/1.4 = 1.25. &#10003;</p>`,
  },
  {
    id: "mechanical-design-q44",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A 300 mm cast-iron machine base must mount to a welded steel frame that is flat to about 1 mm. The joint carries cutting loads, so it needs to be stiff, and the base must not be warped by the mounting or the spindle goes out of alignment. Which approach?</p>`,
    choices: [
      "Three machined pads with through bolts, accepting a less stiff joint",
      "Six bolts pulled down hard, letting the cast iron average out the error",
      "Locate on three pads, grout the remaining gap, then torque the other bolts",
      "Machine the welded frame flat to 0.05 mm and bolt down all six for stiffness",
    ],
    answer: 2,
    explanation: `<p>This problem has two requirements that pull in opposite directions: exact constraint says three points, and stiffness under cutting load says as much contact area as you can get. The resolution is <strong>over-constraint with the misfit removed</strong>. Locate the base kinematically on three machined pads so its position and orientation are defined with no built-in stress; then fill the remaining gap with a medium that takes the as-built shape, epoxy grout, a chocking compound, or shims fitted individually, and only then torque the remaining fasteners. The extra bolts now add stiffness and load capacity without fighting the locators, because there is no gap left to close.</p>
<p>Choice A is safe but gives up the joint stiffness the cutting loads need. Choice B is the failure mode itself: 1 mm of misfit forced closed by six bolts warps the base, and cast iron's low ductility means the strain shows up as a cracked foot or a bowed way surface rather than yielding out harmlessly.</p>
<p>Choice D is technically valid and is what a machine tool builder does for a premium product, but post-weld machining a large steel weldment flat to 0.05 mm means stress-relieving, a large machine, and real money, for a result that grout achieves at a fraction of the cost. It is the "best technical answer that is not the right answer" in miniature.</p>
<p>The same pattern appears everywhere once you see it: potting a connector after alignment, bonding a bearing housing in place, torquing a fastener into a curing adhesive. Locate first, then lock in the geometry you actually got.</p>`,
  },
  {
    id: "mechanical-design-q45",
    type: "mc",
    difficulty: 2,
    prompt: `<p>Your report states "factor of safety 3.2". A reviewer asks which failure mode that applies to. You realise your calculation only covered static yield, and the part is a welded steel bracket that cycles roughly 10<sup>6</sup> times over its life. What do you say?</p>`,
    choices: [
      "3.2 on static yield only; I have no fatigue number yet, and that is the gap",
      "3.2 covers it, because fatigue strength is roughly half of the yield strength",
      "3.2 on yield, so about 1.6 against the endurance limit by the usual rule",
      "The weld is not the concern here: the heat-affected zone is stronger than parent",
    ],
    answer: 0,
    explanation: `<p>The right answer in a review is the one that is true. You have a static number, the part is a fatigue problem, and saying so costs you five minutes of discomfort and saves a field failure. Reviewers are far more forgiving of a named gap than of a number that turns out to have been covering nothing.</p>
<p>Choice C is wrong in a way that sounds like knowledge. The endurance limit is roughly half the <em>ultimate tensile strength</em>, not the yield strength, and more importantly it applies to a polished, unnotched, unwelded specimen. A welded joint is not that. Weld fatigue is assessed by <strong>detail category</strong> against the nominal stress range: a transverse fillet-welded attachment might allow a stress range of only 40&ndash;70 MPa at 2 million cycles regardless of the parent metal's strength, because the toe geometry, the tensile residual stress and the flaw population dominate. Dividing a yield-based factor by two is not conservative here; it can be optimistic by a large multiple.</p>
<p>Choice B makes the same substitution more casually, and choice D reverses the physics. The heat-affected zone may be locally harder, but hardness is not fatigue resistance, and the toe notch plus residual stress make the weld the worst detail on the part.</p>
<p>The useful close: "give me a day, I will pull the stress range at the toe, pick the detail category, and come back with a life number and the assumption it rests on." That is the answer that gets you the day.</p>`,
  },
];

export default extra;
