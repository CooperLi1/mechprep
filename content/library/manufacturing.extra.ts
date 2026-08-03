import type { Question } from "../types";

// Additional question bank for Manufacturing Processes & DFM (merged after the
// base questions in content/index.ts). Authored per-question — no templates.
//
// Scope: processes only. GD&T symbols and position arithmetic live in
// `gd-and-t`, datum theory in `datums`, tolerance stack-ups, joining-method
// selection and DFA in `assembly-strategies`.
//
// SVG element ids are prefixed mf<n>- to stay globally unique.

const figSinkFix = `<svg viewBox="0 0 460 244" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mf11-lead" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
    <marker id="mf11-ok" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="118" y="24" text-anchor="middle" font-weight="600" fill="#dc2626">Solid boss: sink on the show face</text>
  <text x="342" y="24" text-anchor="middle" font-weight="600" fill="#1d4ed8">Cored boss: wall stays uniform</text>

  <path d="M34 168 L92 168 Q118 184 144 168 L204 168 L204 156 L34 156 Z" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="98" y="80" width="40" height="76" fill="#fee2e2" stroke="#dc2626" stroke-width="1.6"/>
  <text x="118" y="66" text-anchor="middle" fill="#dc2626" font-size="12">solid 8 mm boss</text>
  <line x1="118" y1="212" x2="118" y2="186" stroke="#dc2626" stroke-width="1.4" marker-end="url(#mf11-lead)"/>
  <text x="118" y="228" text-anchor="middle" fill="#dc2626" font-size="12">sink mark</text>
  <text x="22" y="150" fill="#64748b" font-size="12">2.5 mm wall</text>

  <rect x="258" y="156" width="170" height="12" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <path d="M320 156 L320 84 L366 84 L366 156 L354 156 L354 100 L332 100 L332 156 Z" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <path d="M320 156 L320 126 L300 156 Z" fill="#e2e8f0" stroke="#334155" stroke-width="1.3"/>
  <path d="M366 156 L366 126 L386 156 Z" fill="#e2e8f0" stroke="#334155" stroke-width="1.3"/>
  <text x="343" y="70" text-anchor="middle" fill="#334155" font-size="12">cored tube + gussets</text>
  <line x1="343" y1="212" x2="343" y2="176" stroke="#1d4ed8" stroke-width="1.4" marker-end="url(#mf11-ok)"/>
  <text x="343" y="228" text-anchor="middle" fill="#1d4ed8" font-size="12">show face stays flat</text>
</svg>`;

const figUndercut = `<svg viewBox="0 0 460 256" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mf12-pull" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
    <marker id="mf12-slide" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Snap window through a side wall, section view</text>

  <line x1="60" y1="212" x2="60" y2="52" stroke="#1d4ed8" stroke-width="2.4" marker-end="url(#mf12-pull)"/>
  <text x="68" y="58" fill="#1d4ed8" font-weight="600" font-size="12">pull</text>

  <path d="M118 208 L118 70 L286 70 L286 208 L258 208 L258 98 L146 98 L146 208 Z" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <rect x="258" y="126" width="28" height="42" fill="#fff" stroke="#dc2626" stroke-width="1.8"/>
  <text x="196" y="120" text-anchor="middle" fill="#334155" font-size="12">moulded wall</text>

  <rect x="316" y="122" width="86" height="50" fill="#fee2e2" stroke="#dc2626" stroke-width="1.6"/>
  <rect x="286" y="132" width="30" height="30" fill="#fee2e2" stroke="#dc2626" stroke-width="1.6"/>
  <text x="359" y="152" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="12">slide</text>
  <line x1="404" y1="196" x2="440" y2="196" stroke="#dc2626" stroke-width="2" marker-end="url(#mf12-slide)"/>
  <text x="404" y="216" text-anchor="middle" fill="#dc2626" font-size="12">withdraws sideways</text>
  <text x="230" y="240" text-anchor="middle" fill="#64748b" font-size="12">the window does not release along the pull &mdash; it is an undercut</text>
</svg>`;

const figSpringback = `<svg viewBox="0 0 460 244" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mf13-arc" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="24" text-anchor="middle" font-weight="600" fill="#334155">The sheet unloads elastically and opens up</text>

  <path d="M96 182 L252 182" stroke="#334155" stroke-width="14" stroke-linecap="round" fill="none"/>
  <path d="M252 182 L252 64" stroke="#1d4ed8" stroke-width="14" stroke-linecap="round" fill="none" opacity="0.35"/>
  <path d="M252 182 L279 66" stroke="#dc2626" stroke-width="14" stroke-linecap="round" fill="none"/>

  <path d="M252 122 A 60 60 0 0 1 264 124" fill="none" stroke="#dc2626" stroke-width="1.6" marker-end="url(#mf13-arc)"/>
  <text x="300" y="132" fill="#dc2626" font-size="12">&Delta;&theta; springback</text>

  <text x="196" y="56" text-anchor="middle" fill="#1d4ed8" font-size="12">in the die: 90&deg;</text>
  <line x1="240" y1="60" x2="252" y2="76" stroke="#1d4ed8" stroke-width="1.2"/>
  <text x="366" y="56" text-anchor="middle" fill="#dc2626" font-size="12">released: 93&deg;</text>
  <line x1="330" y1="60" x2="288" y2="74" stroke="#dc2626" stroke-width="1.2"/>

  <text x="230" y="232" text-anchor="middle" fill="#64748b" font-size="12">angle exaggerated; real springback here is 3&deg;</text>
</svg>`;

const figBuildOrient = `<svg viewBox="0 0 460 248" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mf14-dim" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto-start-reverse"><path d="M8,0L0,4L8,8" fill="#64748b"/></marker>
  </defs>
  <text x="116" y="24" text-anchor="middle" font-weight="600" fill="#dc2626">Standing: 80 mm tall</text>
  <text x="344" y="24" text-anchor="middle" font-weight="600" fill="#1d4ed8">Lying down: 40 mm tall</text>

  <rect x="42" y="192" width="152" height="12" fill="#e2e8f0" stroke="#334155" stroke-width="1.4"/>
  <rect x="92" y="52" width="52" height="140" fill="#fee2e2" stroke="#dc2626" stroke-width="1.6"/>
  <line x1="92" y1="80" x2="144" y2="80" stroke="#dc2626" stroke-width="0.8"/>
  <line x1="92" y1="108" x2="144" y2="108" stroke="#dc2626" stroke-width="0.8"/>
  <line x1="92" y1="136" x2="144" y2="136" stroke="#dc2626" stroke-width="0.8"/>
  <line x1="92" y1="164" x2="144" y2="164" stroke="#dc2626" stroke-width="0.8"/>
  <line x1="70" y1="52" x2="70" y2="192" stroke="#64748b" marker-start="url(#mf14-dim)" marker-end="url(#mf14-dim)"/>
  <text x="62" y="126" text-anchor="end" fill="#64748b" font-size="12">80</text>
  <text x="116" y="224" text-anchor="middle" fill="#dc2626" font-size="12">1600 layers</text>

  <rect x="266" y="192" width="152" height="12" fill="#e2e8f0" stroke="#334155" stroke-width="1.4"/>
  <rect x="278" y="122" width="128" height="70" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.6"/>
  <line x1="278" y1="140" x2="406" y2="140" stroke="#1d4ed8" stroke-width="0.8"/>
  <line x1="278" y1="158" x2="406" y2="158" stroke="#1d4ed8" stroke-width="0.8"/>
  <line x1="278" y1="176" x2="406" y2="176" stroke="#1d4ed8" stroke-width="0.8"/>
  <line x1="256" y1="122" x2="256" y2="192" stroke="#64748b" marker-start="url(#mf14-dim)" marker-end="url(#mf14-dim)"/>
  <text x="248" y="162" text-anchor="end" fill="#64748b" font-size="12">40</text>
  <text x="344" y="224" text-anchor="middle" fill="#1d4ed8" font-size="12">800 layers</text>
  <text x="230" y="242" text-anchor="middle" fill="#64748b" font-size="12">layer thickness 0.05 mm, 9 s per layer</text>
</svg>`;

const figWeldLine = `<svg viewBox="0 0 460 246" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mf15-flow" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Plan view: flow front splits at the boss</text>
  <rect x="72" y="52" width="316" height="140" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
  <circle cx="222" cy="122" r="24" fill="#fff" stroke="#334155" stroke-width="1.6"/>
  <text x="222" y="126" text-anchor="middle" fill="#334155" font-size="12">boss</text>

  <path d="M72 122 L106 122" stroke="#dc2626" stroke-width="4"/>
  <text x="70" y="112" text-anchor="end" fill="#dc2626" font-size="12">gate</text>

  <path d="M132 62 A 74 74 0 0 1 132 182" fill="none" stroke="#1d4ed8" stroke-width="1.4" stroke-dasharray="5 4"/>
  <path d="M170 58 A 100 100 0 0 1 170 186" fill="none" stroke="#1d4ed8" stroke-width="1.4" stroke-dasharray="5 4"/>
  <line x1="112" y1="122" x2="188" y2="122" stroke="#1d4ed8" stroke-width="2" marker-end="url(#mf15-flow)"/>
  <text x="150" y="204" text-anchor="middle" fill="#1d4ed8" font-size="12">flow fronts</text>

  <path d="M246 122 L246 122" stroke="#dc2626" stroke-width="2"/>
  <line x1="248" y1="122" x2="330" y2="122" stroke="#dc2626" stroke-width="2.6"/>
  <text x="344" y="104" text-anchor="middle" fill="#dc2626" font-size="12">weld line</text>
  <line x1="336" y1="112" x2="312" y2="119" stroke="#dc2626" stroke-width="1.2"/>
  <text x="230" y="236" text-anchor="middle" fill="#64748b" font-size="12">the two fronts rejoin downstream of the obstruction</text>
</svg>`;

const figBrakeCollide = `<svg viewBox="0 0 460 262" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mf16-hit" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Forming the second bend of a channel</text>

  <path d="M120 178 L206 178 L230 214 L254 178 L344 178 L344 234 L120 234 Z" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
  <text x="356" y="212" fill="#334155" font-size="12">V-die</text>

  <path d="M204 40 L256 40 L256 94 L240 128 L230 152 L220 128 L204 94 Z" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
  <text x="230" y="34" text-anchor="middle" fill="#334155" font-size="12">punch</text>

  <path d="M206 162 L318 162 L318 170 L206 170 Z" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
  <path d="M206 170 L206 64 L214 64 L214 170 Z" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>

  <circle cx="211" cy="82" r="21" fill="none" stroke="#dc2626" stroke-width="2"/>
  <line x1="300" y1="66" x2="234" y2="78" stroke="#dc2626" stroke-width="1.5" marker-end="url(#mf16-hit)"/>
  <text x="306" y="62" fill="#dc2626" font-size="12">first flange, already up</text>
  <text x="230" y="254" text-anchor="middle" fill="#64748b" font-size="12">the punch body needs the space the standing flange occupies</text>
</svg>`;

const figProjArea = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mf17-clamp" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="126" y="24" text-anchor="middle" font-weight="600" fill="#334155">Plan view along the pull</text>
  <text x="350" y="24" text-anchor="middle" font-weight="600" fill="#334155">Section: clamp resists it</text>

  <path d="M42 68 L188 68 L210 112 L188 186 L42 186 L20 112 Z" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.8"/>
  <circle cx="90" cy="126" r="18" fill="#fff" stroke="#334155" stroke-width="1.4"/>
  <circle cx="146" cy="126" r="18" fill="#fff" stroke="#334155" stroke-width="1.4"/>
  <rect x="196" y="120" width="34" height="10" fill="#fee2e2" stroke="#dc2626" stroke-width="1.4"/>
  <text x="126" y="210" text-anchor="middle" fill="#1d4ed8" font-size="12">shaded area = 180 cm&sup2;</text>
  <text x="126" y="230" text-anchor="middle" fill="#64748b" font-size="12">holes still count: steel carries no pressure</text>

  <rect x="272" y="94" width="156" height="26" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="272" y="140" width="156" height="26" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="292" y="120" width="116" height="20" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="350" y="134" text-anchor="middle" fill="#1d4ed8" font-size="12">cavity 350 bar</text>
  <line x1="350" y1="62" x2="350" y2="88" stroke="#dc2626" stroke-width="2.4" marker-end="url(#mf17-clamp)"/>
  <line x1="350" y1="198" x2="350" y2="172" stroke="#dc2626" stroke-width="2.4" marker-end="url(#mf17-clamp)"/>
  <text x="350" y="54" text-anchor="middle" fill="#dc2626" font-size="12">clamp force</text>
  <text x="350" y="216" text-anchor="middle" fill="#dc2626" font-size="12">clamp force</text>
</svg>`;

const extra: Question[] = [
  {
    id: "manufacturing-q31",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A bracket blank is punched from 2.0 mm low-carbon steel. The cut perimeter is 120 mm and the material's shear strength is 300 MPa. Estimate the punching force, in kN, ignoring stripping and friction.</p>`,
    answer: 72,
    unit: "kN",
    tolerance: 0.03,
    explanation: `<p>The punch shears a ribbon of material whose area is the cut perimeter times the sheet thickness, not the flat area of the blank:</p><p class="eq">A<sub>shear</sub> = 120 mm &times; 2.0 mm = 240 mm<sup>2</sup></p><p>With 300 MPa = 300 N/mm<sup>2</sup>:</p><p class="eq">F = &tau;A = 300 &times; 240 = 72000 N = <strong>72.0 kN</strong></p><p>Using the blank's projected area overstates the force by roughly the ratio of blank width to thickness, about 15&times; here. For press selection add margin: dull tooling raises the force, stripping the slug off the punch takes another 5&ndash;20%, and an off-centre load tips the ram.</p>`,
  },
  {
    id: "manufacturing-q32",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A moulded ABS enclosure shows visible dimples on the show face opposite four screw bosses. The nominal wall is 2.5 mm; the bosses are near-solid 8 mm cylinders. Which change attacks the cause?</p>`,
    figure: figSinkFix,
    choices: [
      "Polish the cavity steel harder and leave the boss geometry as it is",
      "Move the ejector pins onto the show face so the sink is hidden",
      "Core the boss out and tie it back with ribs at about half the nominal wall",
      "Tighten the overall dimensional tolerance on the enclosure",
    ],
    answer: 2,
    explanation: `<p>A sink mark is a shrinkage problem, not a surface problem. The skin freezes against the cool steel while the thick core behind it is still molten; as that core solidifies it shrinks and pulls the already-solid skin inward. An 8 mm boss on a 2.5 mm wall is a 3.2:1 section ratio, so it is the last thing on the part to freeze and it drags the face with it.</p><p>Coring the boss removes the mass while keeping the screw thread engagement, and gussets at 40&ndash;60% of the wall restore the bending stiffness without adding another thick section. Local wall thickness stays close to nominal, so the region cools with everything else.</p><p>Polishing changes gloss, which makes a sink <em>more</em> obvious rather than less. Putting ejectors on the show face adds a second cosmetic defect on top of the first. A tighter tolerance is a requirement, not a fix, the same thick boss still sinks, you just reject more parts.</p><p>Process settings (higher pack pressure, longer hold, a gate nearer the boss) can shave the last bit, but they compensate for geometry rather than correcting it.</p>`,
  },
  {
    id: "manufacturing-q33",
    type: "mc",
    difficulty: 3,
    prompt: `<p>The moulded housing in the section has a snap window running clean through the side wall, perpendicular to the pull direction. Can it come out of a straight-pull two-plate tool, and if not, what is the tooling consequence?</p>`,
    figure: figUndercut,
    choices: [
      "It releases fine; the tool steel simply flexes past the window",
      "It cannot; the window needs a side action, lifter or shutoff",
      "It releases if the window is drafted 3&deg; like the rest of the wall",
      "It releases once the ejector stroke is lengthened to clear it",
    ],
    answer: 1,
    explanation: `<p>Ask one question of every feature: does it clear along the pull? The steel that forms this window sticks sideways into the wall, so as the tool opens vertically that steel is trapped inside the moulding. That is the definition of an undercut, and no amount of draft, ejector stroke or steel flex changes it.</p><p>Three ways out, in the order you should propose them:</p><ul><li><strong>Pass-through shutoff.</strong> Put an opening in the opposite wall so a core coming from the other half can touch off against the cavity and form the window face on the way past. It costs a visible hole in the part. Look inside almost any moulded consumer product and you will find them, but nothing in tool mechanism or cycle.</li><li><strong>Lifter.</strong> An angled ejector that moves inward as it rises. Cheaper than a slide, limited travel, needs clearance inside the part.</li><li><strong>Side action (slide).</strong> Angle-pin driven steel that withdraws sideways before ejection. Works for anything external, but it costs real tool money, a slice of cycle time, a witness line where it shuts off, and a wearing mechanism to maintain.</li></ul><p>The cheapest answer is usually the fourth one: rotate the snap so it pulls in the open direction. That is a CAD change, and it costs nothing for the life of the tool.</p>`,
  },
  {
    id: "manufacturing-q34",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>You set a press brake to form a 90&deg; included angle in 6061-T6 and the part relaxes to 93&deg;. Treating springback as proportional to the angle bent, what included angle must the tool be set to so the part lands on 90&deg;?</p>`,
    answer: 86.9,
    unit: "deg",
    tolerance: 0.03,
    explanation: `<p>Work in the angle actually bent through, not the included angle. Driving to a 90&deg; included angle turns the material through 90&deg;; relaxing to 93&deg; included means it only kept 87&deg; of that turn. So the springback ratio is:</p><p class="eq">K<sub>s</sub> = &theta;<sub>final</sub>/&theta;<sub>tool</sub> = 87/90 = 0.9667</p><p>To keep 90&deg; of bend, overbend by 1/K<sub>s</sub>:</p><p class="eq">&theta;<sub>tool</sub> = 90 / 0.9667 = 93.1&deg; of bend</p><p class="eq">included angle = 180 &minus; 93.1 = <strong>86.9&deg;</strong></p><p>The simpler fixed-offset estimate. "it opened 3&deg;, so aim 3&deg; past", gives 87.0&deg; and is close enough here; the two models only diverge at large angles.</p><p>The caveat matters more than the number. Springback scales with yield strength and with R/t, so it changes with coil lot, temper and gauge. Overbending compensates for one specific material condition; the next coil moves the answer. If the volume justifies it, bottom or coin the bend instead so the recovery is suppressed rather than corrected.</p>`,
  },
  {
    id: "manufacturing-q35",
    type: "mc",
    difficulty: 3,
    prompt: `<p>You air-bend a bracket with a compensated punch angle and the first article is spot on. Six weeks later a new coil of the same alloy and gauge comes in and the bends land 1.5&deg; off, in the same direction on every part. What is the durable fix?</p>`,
    figure: figSpringback,
    choices: [
      "Raise the press tonnage until every coil lands on 90&deg;",
      "Re-cut the punch radius smaller so the bend is tighter",
      "Sort incoming coil by yield strength and reset the angle each lot",
      "Bottom the bend in a matched die, removing the yield sensitivity",
    ],
    answer: 3,
    explanation: `<p>Read the symptom: consistent within the lot, shifted between lots. That is incoming material variation, not a machine or operator problem. Springback is elastic recovery, so it scales with yield strength divided by modulus, and mill certificates routinely allow a yield spread of 10&ndash;20% within one alloy and temper. Air bending compensates for one specific yield value, so it inherits that spread directly.</p><p>Bottoming (or coining) changes the mechanism. The die closes onto the material and forces it to yield through the full thickness at the radius, so the part takes the die's angle instead of settling wherever its own elastic recovery puts it. Sensitivity to incoming yield drops sharply. The price is several times the tonnage and a die matched to the radius, which is why you do it when the volume justifies buying repeatability.</p><p>More tonnage in an air bend just pushes the punch deeper into an unchanged geometry. A smaller punch radius raises the strain and moves you toward cracking in T6 temper. Sorting coil by yield is real quality-control work that some shops do, but it is a permanent inspection and setup burden imposed to work around a process that was never capable.</p>`,
  },
  {
    id: "manufacturing-q36",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A DMLS titanium bracket passes its static analysis with margin but cracks in fatigue testing. The cracks all start at rough support-removal scars on a surface the FEA shows in tension. What do you change?</p>`,
    choices: [
      "Reorient so scars miss tension faces, machine them, retest fatigue",
      "Accept the scars, since the static yield margin already passes review",
      "Halve the layer height and skip every post-processing operation",
      "Re-run the FEA with a higher mesh density to recover the margin",
    ],
    answer: 0,
    explanation: `<p>Static strength and fatigue life fail for different reasons. Static capacity is a bulk property, so a rough surface barely moves it. Fatigue is crack initiation, and initiation is governed by the worst local stress raiser on a tensile surface. An as-built AM surface is Ra 6&ndash;20 &mu;m of partially fused powder, and a support-removal scar is worse: a torn, notched break face. Under cyclic tension that is where a crack starts, every time.</p><p>The response is a process chain, and it has to be all of it: reorient the build so the supported surfaces land where the stress is low or compressive; redesign supports so what remains is reachable; machine or polish the critical faces; stress relieve on the plate, and consider HIP to close internal porosity; then qualify with fatigue coupons built in the <em>same</em> orientation on the same machine with the same post-processing.</p><p>Accepting the scars ignores the mechanism. A finer layer height improves the as-built finish somewhat but does nothing about the scar left where a support was snapped off. Refining the mesh changes the number the FEA prints, not the part, and static FEA was never going to predict this failure anyway.</p>`,
  },
  {
    id: "manufacturing-q37",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A 4-cavity mould runs a 32 s cycle on a 3.0 mm nominal wall; 6 s of that is injection, opening and ejection, and the rest is cooling. Design agrees to thin the wall to 2.0 mm. At 85% uptime over an 8 hour shift, how many parts come off the machine?</p>`,
    answer: 5580,
    unit: "parts",
    tolerance: 0.02,
    explanation: `<p>Split the cycle before scaling it. Only the cooling portion depends on wall thickness.</p><p class="eq">t<sub>cool,3mm</sub> = 32 &minus; 6 = 26 s</p><p>Cooling goes as the square of the wall:</p><p class="eq">t<sub>cool,2mm</sub> = 26 &times; (2.0/3.0)<sup>2</sup> = 26 &times; 0.4444 = 11.6 s</p><p class="eq">t<sub>cycle</sub> = 6 + 11.6 = 17.6 s</p><p>Then the shift:</p><p class="eq">productive time = 8 &times; 3600 &times; 0.85 = 24480 s</p><p class="eq">cycles = 24480 / 17.6 = 1394&nbsp;&nbsp;&rarr;&nbsp;&nbsp;parts = 1394 &times; 4 &asymp; <strong>5580 parts</strong></p><p>At the original 32 s cycle the same shift yields 3060 parts, so a 1 mm wall reduction raises output by 82% on a machine you already own. Scaling the whole 32 s by (2/3)<sup>2</sup> is the usual slip. It gives 14.2 s and overstates the gain, because the mechanical part of the cycle does not shrink.</p><p>Whether the thinner wall fills and is stiff enough is the next question: check flow length against wall (roughly 150:1 for ABS), and expect to add ribs to get the stiffness back.</p>`,
  },
  {
    id: "manufacturing-q38",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A long aluminium plate is machined heavily from one face only. It measures flat in the fixture, then bows as soon as it is unclamped. Re-machining the high spots makes the next batch worse. What is happening?</p>`,
    choices: [
      "Unbalanced stock removal released residual stress; rough both sides",
      "The end mill was too large; use the smallest available cutter throughout",
      "The flatness callout is unnecessary; delete it from the drawing",
      "The bowed face needs a finer surface finish to hold it flat",
    ],
    answer: 0,
    explanation: `<p>Rolled and extruded plate carries locked-in residual stress from its own production, and it is self-balanced only while the section is intact. Cut a lot of material off one face and the remaining stress no longer balances, so the plate curls until it finds a new equilibrium. The fixture hides this: clamping flattens the part, machining cuts a flat surface onto a distorted blank, and releasing the clamps lets the whole thing spring.</p><p>Chasing it with a re-cut makes it worse. Removing the high spots removes more material from one side, which is exactly what caused the bow, you are feeding the mechanism.</p><p>The process fix has four parts: rough both faces symmetrically leaving 0.5&ndash;1 mm of stock, unclamp and let the part relax (stress relieve if the material and schedule allow), re-fixture with light, evenly distributed clamping rather than four hard corner clamps, then take the finish cuts. Ordering stress-relieved plate such as MIC-6 or Alca-5 rather than standard 6061 rolled plate removes the problem at source and is usually cheaper than the scrap.</p><p>A smaller cutter adds heat and hours. Deleting the flatness callout stops you measuring the failure without stopping the failure.</p>`,
  },
  {
    id: "manufacturing-q39",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A shaft must measure &oslash;10.000&ndash;10.010 mm <em>after</em> electroless nickel plating, which deposits 5 &mu;m per side. What diameter limits go on the pre-plate machining drawing?</p>`,
    choices: [
      "&oslash;9.995 to 10.005, taking off one plating thickness",
      "&oslash;10.005 to 10.015, since plating is removed on stripping",
      "&oslash;9.990 to 10.000, allowing two plating thicknesses on the diameter",
      "&oslash;10.000 to 10.010, keeping the plating inside the tolerance band",
    ],
    answer: 2,
    explanation: `<p>Plating is deposited on the surface, so on a diameter it lands twice, once on each side:</p><p class="eq">&Delta;&oslash; = 2 &times; 5 &mu;m = 0.010 mm</p><p class="eq">pre-plate limits = 10.000 &minus; 0.010 to 10.010 &minus; 0.010 = <strong>&oslash;9.990 to 10.000</strong></p><p>Subtracting only one thickness leaves every shaft 5 &mu;m oversize, which on a 10 &mu;m tolerance band is 100% scrap.</p><p>The drawing also has to state which condition the dimension applies to. "&oslash;10.000&minus;10.010 after plating" and "&oslash;9.990&minus;10.000 before plating" are different requirements, and someone will machine whichever number they see.</p>`,
  },
  {
    id: "manufacturing-q40",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A sand-cast pump body repeatedly shows shrink porosity in the metal beside a thick mounting lug where it meets a thin wall. Which change attacks the solidification physics?</p>`,
    choices: [
      "Specify a mirror surface finish on the as-cast lug face",
      "Thin the adjacent wall further so that it freezes first",
      "Remove the draft from the lug so it is dimensionally exact",
      "Blend and core out the lug mass, and feed it from a riser",
    ],
    answer: 3,
    explanation: `<p>Metal loses volume as it freezes, so every solidifying region has to be fed liquid from somewhere. A heavy lug next to a thin wall is the worst case: the thin wall freezes first and seals off the feed path, then the lug shrinks with nothing to draw on and opens a void. Located exactly where the bolt load is.</p><p>The fix has to change the thermal geometry. Core out the lug so its section is closer to the wall, blend it in with generous fillets so there is no isolated hot spot, and arrange gating and risering so solidification runs directionally from the far end of the casting back toward a riser that is still liquid. A chill placed against the hot spot is the process-side version of the same idea.</p><p>Surface finish does nothing about internal porosity. Making the adjacent wall thinner makes the feeding cutoff happen sooner, which is the opposite of what you want. Removing draft makes the pattern hard to draw and does not touch solidification.</p><p>The last question is whether the porosity actually matters: subsurface porosity in a clamping boss may be acceptable to a stated limit, but if the lug is machined into and fatigue loaded, it is not, and the feature should be redesigned or moved.</p>`,
  },
  {
    id: "manufacturing-q41",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A supplier's capability study on a bored feature gives a standard deviation of 0.012 mm with the process centred. Your release standard is C<sub>pk</sub> &ge; 1.33. What is the tightest bilateral half-tolerance (the &plusmn; value) you can put on the drawing, in mm?</p>`,
    answer: 0.0479,
    unit: "mm",
    tolerance: 0.03,
    explanation: `<p>Capability compares the distance to the nearest spec limit with three standard deviations of process spread. For a centred process the nearest limit is half the tolerance band away:</p><p class="eq">C<sub>pk</sub> = (T/2) / (3&sigma;)&nbsp;&nbsp;&rarr;&nbsp;&nbsp;T/2 = 3&sigma;C<sub>pk</sub></p><p class="eq">T/2 = 3 &times; 0.012 &times; 1.33 = <strong>0.0479 mm</strong></p><p>So you can honestly print &plusmn;0.048 mm, and you would round out to &plusmn;0.05 and buy back a little margin. Note the shape of it: C<sub>pk</sub> = 1.33 means four standard deviations of headroom on each side, which is roughly 63 parts per million outside the limits before any drift.</p><p>Two ways this goes wrong in review. Someone writes &plusmn;0.02 because it "looks like a machined tolerance", which is C<sub>pk</sub> = 0.56, about 9% of parts out, a sorting operation dressed up as a specification. Or someone assumes the process stays centred; a real mean drifts with tool wear, so the usable band is narrower still. If the function genuinely needs &plusmn;0.02, the answer is not a tighter number on the print, it is a process with a smaller &sigma;.</p>`,
  },
  {
    id: "manufacturing-q42",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A laser-cut hole in a 1.5 mm stainless bracket sits 1.0 mm from a 90&deg; bend line. After forming, the hole is oval and small cracks run from its edge. What do you change?</p>`,
    choices: [
      "Add a tighter diameter tolerance to the now-distorted hole",
      "Move the hole to 2.5t + R, or pierce it after forming",
      "Raise the bend force until the hole is pushed back round",
      "Deburr and polish the outside of the bend after forming",
    ],
    answer: 1,
    explanation: `<p>The material within roughly one bend radius of the bend line is inside the forming strain field: the outer fibre stretches, the inner fibre compresses, and anything in that zone deforms with it. A hole there goes out of round as the sheet flows, and its cut edge. Already work-hardened and micro-cracked by the laser, becomes a crack starter.</p><p>The rule is geometric. Keep the near edge of the hole at least 2.5t + R from the bend line, which here is 2.5(1.5) + 1.5 = 5.25 mm, not 1.0 mm. If the hole position is functionally fixed and cannot move, pierce or drill it after forming and accept the second operation.</p><p>More press force applies the same strain harder and cracks it faster. A tighter diameter tolerance demands a result the process physically cannot produce. Polishing the bend removes surface marks but not a stretched, cracked hole edge.</p><p>Worth adding: a slot running parallel to the bend survives better than a round hole of the same size, because it distorts along its length rather than going out of round. A useful trick when the layout is tight.</p>`,
  },
  {
    id: "manufacturing-q43",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A bracket measuring 80 &times; 60 &times; 40 mm is built on a powder-bed machine at 0.05 mm layers and about 9 s per layer. Lying it down puts 40 mm in the build direction instead of 80 mm. How many hours of build time does that save?</p>`,
    figure: figBuildOrient,
    answer: 2,
    unit: "h",
    tolerance: 0.03,
    explanation: `<p>Build time on a powder-bed machine tracks the layer count, because every layer costs a recoat plus its scan regardless of orientation:</p><p class="eq">standing: 80 / 0.05 = 1600 layers &times; 9 s = 14400 s = 4.00 h</p><p class="eq">lying down: 40 / 0.05 = 800 layers &times; 9 s = 7200 s = 2.00 h</p><p class="eq">saving = 4.00 &minus; 2.00 = <strong>2.00 h</strong></p><p>Half the build time, same part, same file. On a machine costing well over 100 an hour to run, orientation is one of the largest cost levers you have, and it is a design decision rather than a technician's default.</p><p>What stops you taking it every time is that orientation also fixes three other things: which surfaces need support and whether that support can be reached to remove it, which faces come out rough on a down-skin, and how the layer planes sit relative to the principal stress. If lying it down puts the tensile load across the layers or buries support in a passage, the two hours are not worth it. Decide all four together, not one at a time.</p>`,
  },
  {
    id: "manufacturing-q44",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A moulded housing drawing carries four things the tool shop dislikes: a 3.0 mm boss on a 1.2 mm wall, zero draft on a 30 mm deep internal rib, a snap window through a side wall, and a fine texture drawn with 1&deg; of draft. Three are expensive. Which one actually makes a straight-pull two-plate tool impossible?</p>`,
    choices: [
      "The 3.0 mm boss on a 1.2 mm wall, which will sink on the show face",
      "The zero-draft 30 mm rib, which drags hard against the tool steel",
      "The side snap window, which no straight-pull tool can form",
      "The fine texture, which needs more draft than the model carries",
    ],
    answer: 2,
    explanation: `<p>Separate "bad" from "impossible", because that is the judgement the question is testing.</p><p>The 3.0 mm boss on a 1.2 mm wall is a 2.5:1 section ratio, a guaranteed sink mark, and it lengthens the cycle, but the tool builds and the part ejects. The zero-draft rib scuffs and needs high ejection force and a polished, possibly vented core; painful and sometimes damaging, still not impossible. The textured wall needs roughly 1&ndash;1.5&deg; extra draft per 0.025 mm of texture depth, so at 1&deg; it will drag, again a defect, not a blocker.</p><p>The side window is different in kind. The steel that forms it projects into the part perpendicular to the pull, so opening the tool cannot free it. That is topology, and no process setting or steel finish touches it. It forces a side action, a lifter, a pass-through shutoff, or a redesign that turns the snap to pull in the open direction.</p><p>The habit worth building: when you review a moulded part, sweep once for anything that does not clear along the pull, <em>then</em> go back for wall thickness, draft and cosmetics. Undercuts change the tool architecture and the quote; the rest change the yield.</p>`,
  },
  {
    id: "manufacturing-q45",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>An ABS part has a 1.5 mm nominal wall. Taking the resin's flow-length-to-wall-thickness ratio as 150:1, how far from the gate can the melt travel before it freezes off, in mm?</p>`,
    answer: 225,
    unit: "mm",
    tolerance: 0.03,
    explanation: `<p>Flow length scales with wall thickness because a thicker channel keeps a molten core for longer against the freezing skin:</p><p class="eq">L<sub>flow</sub> = (L/t) &times; t = 150 &times; 1.5 = <strong>225 mm</strong></p><p>So a single gate can reach about 225 mm through this wall. Any point on the part further than that from a gate risks a short shot, and the parts nearest the limit will be under-packed, which shows up as extra shrinkage and warp long before an obvious short shot appears.</p><p>Read it as a design constraint, not a trivia number. A 400 mm long panel in a 1.5 mm wall cannot be filled from one gate; either add a second gate, and accept the weld line where the two fronts meet, so place it away from the load, or thicken the wall, or specify a higher-flow grade with a better ratio.</p><p>Typical ratios: ABS and PC around 100&ndash;150:1, polypropylene 200&ndash;300:1, glass-filled grades much worse. This is also why "just make the wall thinner to cut cycle time" has a floor: cooling time improves as the square of the wall, but fill gets harder in direct proportion.</p>`,
  },
  {
    id: "manufacturing-q46",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A moulded cover survives drop testing everywhere except one spot: it cracks in the wall immediately downstream of a boss, on the far side of that boss from the gate. The wall thickness is uniform and there is no ejector pin nearby. What is the defect?</p>`,
    figure: figWeldLine,
    choices: [
      "A weld line forms behind the boss where the split flow fronts rejoin",
      "The gate froze early, so the far end was never packed out",
      "An ejector pin under the boss left a hidden stress riser",
      "The boss cooled faster than the wall and pulled a void",
    ],
    answer: 0,
    explanation: `<p>The melt front reaches the boss, splits to pass either side of the core pin, and re-joins behind it. At that meeting line the two fronts have cooled, their skins are partly frozen and the polymer chains do not interdiffuse across the interface. In an unfilled resin a weld line typically retains 60&ndash;90% of the base strength; in a glass-filled grade it can be under 50%, because the fibres align along the flow and end up lying parallel to the weld rather than bridging it.</p><p>The location gives it away: directly downstream of an obstruction, on the far side from the gate, in an otherwise uniform wall. Short shots and under-packing show up at the end of fill, not immediately behind a boss. An ejector mark would be visible and is ruled out. A void from a thick section would be inside the boss, not in the wall past it.</p><p>The fixes, cheapest first: move the gate so the weld line lands somewhere unloaded; add a flow leader (a slightly thicker path) to steer the fronts; put a small overflow or flow tab past the weld so the cold front pushes out of the part; raise melt and mould temperature to improve knitting. If the load path genuinely runs through that spot, moving the boss is better than tuning the process.</p>`,
  },
  {
    id: "manufacturing-q47",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A &oslash;30 bore is currently milled to &plusmn;0.1 mm in 2.0 min. Holding &plusmn;0.01 mm requires a bore-and-hone routing that adds 6.0 min of machine time plus a 40 s gauge check, and scraps 3% of parts. At a shop rate of &#36;95/hr, what does the tighter tolerance add per good part, in &#36;?</p>`,
    answer: 11,
    unit: "USD",
    tolerance: 0.03,
    explanation: `<p>Price both routings, then divide by yield.</p><p class="eq">loose: 2.0 min &rarr; (2.0/60) &times; 95 = 3.17</p><p class="eq">tight: 2.0 + 6.0 + 0.67 = 8.67 min &rarr; (8.67/60) &times; 95 = 13.72</p><p>Scrap means you must start more parts than you ship, so divide by the yield:</p><p class="eq">per good part = 13.72 / 0.97 = 14.15</p><p class="eq">added cost = 14.15 &minus; 3.17 = <strong>11.0 per part</strong></p><p>One order of magnitude on one dimension costs about 11 dollars a part. On a part whose whole machining cost might be 25. That is the number to bring to a design review, because "that tolerance seems tight" gets waved through and "that tolerance is 11 dollars a part, or 110,000 across the programme" does not.</p><p>Note the shape of the cost curve. It is not linear in the tolerance; it is a step function. Nothing happens until you cross a process boundary, then a whole operation, an inspection gauge and a scrap rate appear at once. Which is why the useful question is never "how tight can we go?" but "which side of the boundary does the function actually need?"</p>`,
  },
  {
    id: "manufacturing-q48",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A 3 mm thick, 250 mm long aluminium cover is being face-milled to depth. The finish comes out wavy, the cut is loud, and the surface pattern changes as the tool crosses the middle of the plate. What is the right response?</p>`,
    choices: [
      "Increase the depth of cut so the cutter stays engaged for longer",
      "Back the floor with a vacuum plate or wax, and lighten the cut",
      "Switch to a larger diameter cutter so more teeth are in the cut",
      "Raise the spindle speed until the tooth-pass frequency has doubled",
    ],
    answer: 1,
    explanation: `<p>The clue is that the pattern changes across the plate. A thin unsupported panel is a membrane: its stiffness and natural frequency vary with position, they are lowest at the centre, and the cutting force pushes it away and lets it spring back. That is regenerative chatter, and it is a workholding problem, not a cutting-parameters problem.</p><p>The fix is to stiffen the workpiece. A vacuum plate that supports the whole underside, low-melt wax or a machinable sacrificial fixture that fills behind the pocket, or a wave clamp under the span. All of them raise the local stiffness by orders of magnitude. Then lighten the radial engagement and take more passes so the cutting force pushing on the panel drops.</p><p>A deeper cut raises the force and drives it harder. A larger cutter increases engagement and the force with it. Changing spindle speed can dodge a specific chatter frequency and is a genuine technique, but on a part whose natural frequency varies along the toolpath, there is no single stable speed to find.</p><p>The design-side version of this answer matters too: if the part must be thin and large, say so at design review, because it needs a fixture, and that fixture belongs in the quote.</p>`,
  },
  {
    id: "manufacturing-q49",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A bracket is to be bent 90&deg; from 3.0 mm thick 6061-T6. The supplier's forming guide lists a minimum inside bend radius of 3t for that alloy and temper. What inside radius do you put on the drawing, in mm?</p>`,
    answer: 9,
    unit: "mm",
    tolerance: 0.03,
    explanation: `<p class="eq">R<sub>min</sub> = 3t = 3 &times; 3.0 = <strong>9.0 mm</strong></p><p>The reason behind the rule is outer-fibre strain, roughly &epsilon; &asymp; t/(2R + t). At R = 9 mm that is about 14%; at R = 1t it would be 33%, far beyond what a precipitation-hardened T6 aluminium will take before it cracks.</p><p>Alloy and temper dominate. Annealed 5052 will bend to 0.5&ndash;1t and mild steel to about 1t, so specifying 5052 instead of 6061-T6 can beat opening the radius. And a 9 mm inside radius is a large feature on a 3 mm part: it changes the flat pattern and eats flange length, so it belongs in the model rather than in a shop note.</p>`,
  },
  {
    id: "manufacturing-q50",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A snap-fit latch worked reliably in unfilled nylon prototypes. Production switched to 30% glass-filled nylon for stiffness, and latches now crack on first assembly. What is going on and what do you do?</p>`,
    choices: [
      "Glass fill raises toughness in bending, so the cracks must be cosmetic",
      "Increase the latch interference, since a tighter snap lowers peak stress",
      "Keep the prototype geometry and change only the moulding colour",
      "The filled grade takes less strain; lengthen the beam, add radii",
    ],
    answer: 3,
    explanation: `<p>A snap fit is a strain-controlled problem, not a stress-controlled one: the assembler deflects the beam by a fixed amount set by the geometry, and the material either tolerates that strain or it cracks. Glass fill roughly doubles the modulus and raises strength, but it cuts the strain to break sharply. Unfilled nylon may take several percent, a 30% filled grade often under 2%. Same deflection, same geometry, but now beyond the material's limit.</p><p>The design response is to reduce the strain rather than to strengthen the beam. Lengthen the cantilever (strain falls with the square of length for a given deflection), taper it so the section reduces toward the tip and the strain is spread along it rather than concentrated at the root, reduce the retention height, and put a generous radius at the root where the strain peaks. Check the result against the supplier's published allowable strain for that grade. It is on the datasheet.</p><p>Fibre orientation is the second half: fibres align with the flow, so a latch gated to fill along the beam behaves quite differently from one filled across it, and a weld line at the root is close to fatal.</p><p>Increasing interference raises the deflection and cracks it faster. And test moulded parts. A machined or printed prototype has none of the fibre orientation that decides the answer.</p>`,
  },
  {
    id: "manufacturing-q51",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A DMLS manifold in 316L has a &oslash;3 mm internal passage 200 mm long with two bends, none of which can be drilled. Which constraint decides whether the part is actually buildable?</p>`,
    choices: [
      "The laser spot size, which sets the smallest wall that can be built",
      "Powder recycling, which changes the alloy chemistry over the build",
      "Whether unfused powder and internal supports can actually be got out again",
      "The plate temperature, which sets the residual stress in the part",
    ],
    answer: 2,
    explanation: `<p>Every internal volume in a powder-bed build finishes the job full of loose, partly sintered powder. If you cannot get it out, the passage is not a passage, and a 3 mm bore 200 mm long with two bends is exactly the geometry where powder packs and refuses to flow, particularly at the inside of the bends.</p><p>Worse, if the passage roof needs support, that support is inside the tube with no access to remove it. That is why AM channels are designed self-supporting: a teardrop or diamond cross-section instead of a circle, so the top of the channel never exceeds the ~45&deg; overhang limit and no support is generated at all. Combine that with generous bend radii, a clear line of sight for the powder to flow out, and dedicated drain and inspection ports that are welded or plugged afterwards.</p><p>The other three are genuine AM concerns but none of them decides buildability here. Laser spot size sets minimum wall, around 0.4&ndash;0.5 mm, and a 3 mm passage is nowhere near it. Powder chemistry drift is a batch-control issue managed by the supplier. Plate temperature and residual stress are handled by supports and stress relief on the plate.</p><p>Say the verification out loud too: flow-test or CT-scan the first article. You cannot see inside the part, and "we assumed the powder came out" is how a manifold ships blocked.</p>`,
  },
  {
    id: "manufacturing-q52",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>Two faces of a housing must end up parallel within 0.020 mm. If they are cut in two setups, the machine contributes 0.010 mm and re-fixturing contributes 0.015 mm, both independent. Combining them statistically, what parallelism can you promise, in mm?</p>`,
    answer: 0.018,
    unit: "mm",
    tolerance: 0.03,
    explanation: `<p>Independent error sources combine as the root of the sum of squares:</p><p class="eq">e = &radic;(0.010<sup>2</sup> + 0.015<sup>2</sup>) = &radic;(0.0001 + 0.000225)</p><p class="eq">e = &radic;0.000325 = <strong>0.0180 mm</strong></p><p>Now judge it rather than reporting it. 0.0180 against a 0.020 budget consumes 90% of the requirement, leaving nothing for thermal drift, tool wear, burrs or measurement uncertainty. And the statistical combination is optimistic: the worst-case sum is 0.010 + 0.015 = 0.025 mm, which fails outright. A process planned this way passes on paper and produces arguments in the inspection room.</p><p>The manufacturing answer is not a tighter fixture. It is to remove the fixture from the loop. Cut both faces in one setup and the re-fixturing term disappears entirely, leaving 0.010 mm and a comfortable 2:1 margin. If the geometry makes that impossible, the options are a 4th axis or a tombstone so the part indexes without unclamping, or going back to design to ask whether 0.020 mm is really what the function needs.</p><p>The general lesson: setups do not just cost money, they consume tolerance, and the second setup is usually the largest single contributor in a machined part.</p>`,
  },
  {
    id: "manufacturing-q53",
    type: "mc",
    difficulty: 2,
    prompt: `<p>The figure shows the second bend of a channel section being formed on a press brake. The flat pattern is correct and the material and radius are within limits, yet the part cannot be made in this sequence. Why?</p>`,
    figure: figBrakeCollide,
    choices: [
      "The V-die opening is too narrow for the sheet thickness",
      "The bend radius is smaller than the material will tolerate",
      "The flange is shorter than half the V-die opening",
      "The first flange hits the punch body as the bend closes",
    ],
    answer: 3,
    explanation: `<p>A press brake punch is a solid wedge that has to descend through the space above the bend line. The flange formed by the first bend is now standing up in exactly that space, so as the ram comes down the punch strikes it. The part is geometrically correct and completely unmakeable in this order.</p><p>Three ways out. Change the bend sequence. Often the same channel forms cleanly if the bends are made in the opposite order or from the other end. Change the tooling. A gooseneck or offset punch is shaped precisely to clear a formed return flange, which is why brake shops own a rack of them. Or change the design: shorten the flange, open the angle, or split the channel into two parts.</p><p>The other three options are the real checks you would also run, which is why they belong here as distractors: V-die width should be roughly 8t, minimum flange is about V/2 + t, and the inside radius has to respect the alloy's minimum. All of those pass on this part.</p><p>A sheet-metal part is not manufacturable just because the flat pattern unfolds. It has to be formable in some order with tools that physically fit, and the time to find that out is at design review with the brake shop, not at first article.</p>`,
  },
  {
    id: "manufacturing-q54",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A 2.0 mm steel bracket is air bent on a press brake. The shop selects a V-die about 8t wide and applies the usual minimum flange rule of V/2 + t. What is the shortest flange it can form, in mm?</p>`,
    answer: 10,
    unit: "mm",
    tolerance: 0.03,
    explanation: `<p>Two steps, and the first is the one that gets skipped.</p><p class="eq">V = 8t = 8 &times; 2.0 = 16 mm</p><p class="eq">flange<sub>min</sub> = V/2 + t = 8.0 + 2.0 = <strong>10.0 mm</strong></p><p>The rule comes straight from the geometry of air bending: the sheet spans the V opening and is pushed into it by the punch, so it has to reach at least to the far shoulder of the die or it slips into the opening instead of bending. Anything shorter comes out with a wandering angle, a marked surface, or it flies out of the die.</p><p>What to do when the design needs a shorter flange: use a narrower V-die (which raises the tonnage sharply and tightens the achievable radius), bottom the bend in a matched die, or form the flange with a die set rather than a brake. All of those are real options, all of them cost something, and the reason to know the number is so the conversation happens at design review.</p><p>Minimum flange is about 5t, which is a useful figure to carry. A 1 mm sheet will not hold a 3 mm flange on a brake.</p>`,
  },
  {
    id: "manufacturing-q55",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A flat steel retainer is 0.8 mm thick and &oslash;24 mm, with three tabs bent up 90&deg; and a central hole. Annual volume is 200,000. Which process do you quote?</p>`,
    choices: [
      "Progressive die stamping from coil, tabs formed in-die",
      "Laser cut from sheet, then brake the tabs on a job shop",
      "Turn from bar on a CNC lathe with live tooling for the tabs",
      "Metal injection moulding, then sinter and coin for flatness",
    ],
    answer: 0,
    explanation: `<p>The part is thin, flat, small and simple, and the volume is 200,000 a year. That is the definition of a progressive die: coil feeds in, a sequence of stations pierces, blanks and forms the tabs, and a finished part drops out every stroke. Cycle time is a fraction of a second, piece price is dominated by material, and a die that costs tens of thousands amortises to well under a cent per part at this volume.</p><p>Laser cutting and braking is right for tens or hundreds of parts, but here you would be paying a per-part cutting time and three separate brake hits, forever. Turning from bar is the wrong geometry entirely. You would machine away almost all of a &oslash;24 bar to leave 0.8 mm, with a buy-to-fly ratio around 30:1, and the tabs still need a second operation. MIP is for complex 3D small parts in hard-to-machine alloys, not for something a stamping die makes in one stroke.</p><p>The design work that follows the process choice is the interesting half: nest the blank efficiently, because material utilisation is now the biggest cost line; keep the tabs a sensible distance from cut edges; add a carrier strip and pilot holes; and set tolerances that a progressive die holds naturally, roughly &plusmn;0.1 mm on formed features, rather than machining tolerances.</p>`,
  },
  {
    id: "manufacturing-q56",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A moulded cover has a projected area of 180 cm&sup2; looking down the pull, including runners and the two cored holes. Peak cavity pressure is 350 bar. What clamp force must the machine provide, in kN?</p>`,
    figure: figProjArea,
    answer: 630,
    unit: "kN",
    tolerance: 0.03,
    explanation: `<p>Cavity pressure acts on the projected area of the cavity seen along the clamp axis, trying to push the mould halves apart:</p><p class="eq">F = p A</p><p>Convert both to SI: 350 bar = 35 MPa = 35 &times; 10<sup>6</sup> Pa, and 180 cm&sup2; = 0.0180 m&sup2;.</p><p class="eq">F = 35 &times; 10<sup>6</sup> &times; 0.0180 = 630000 N = <strong>630 kN</strong></p><p>That is about 64 tonnes-force, so with the usual 10&ndash;20% margin you would run it on an 80 tonne press.</p><p>Two ways to get this wrong. First, use the <em>projected</em> area, not the wetted surface area. A deep box has far more surface than projected area, and using the wrong one can overstate the requirement several-fold. Second, cored holes still count: there is no cavity steel carrying pressure over a hole in the plan view unless it shuts off against the other half, so unless you know it shuts off, keep it in the area.</p><p>If the part will not fit the presses you have, the levers are fewer cavities, a lower-viscosity grade or higher melt temperature to drop the required pressure, a gate nearer the far end to reduce the pressure gradient, or a thinner wall, which cuts the clamp force and the cycle at once.</p>`,
  },
  {
    id: "manufacturing-q57",
    type: "mc",
    difficulty: 1,
    prompt: `<p>An M6 steel bolt threads into a tapped boss in a 6061 aluminium housing. The joint is opened and re-torqued at every service interval. How do you specify the thread?</p>`,
    choices: [
      "Tap 6 mm deep (1&times;D), which is standard practice in aluminium",
      "Tap ~12 mm (2&times;D) and fit an insert for repeated service",
      "Tap 6 mm deep and rely on a thread-locking compound instead",
      "Tap 18 mm deep (3&times;D), which removes any need for an insert",
    ],
    answer: 1,
    explanation: `<p>Engagement depth is set by matching the strength of the internal thread to the bolt. In steel-into-steel, about 1&times;D is enough because both threads have similar shear strength. Aluminium is roughly a third the strength of a property-class 8.8 bolt, so the female thread strips first unless you give it more length. The working figure is 2&times;D, here about 12 mm, and 2.5&times;D in soft or cast alloys.</p><p>Depth alone does not solve the service problem, though. Aluminium threads gall, pick up on the steel bolt and wear a little on every cycle, so a joint assembled and re-torqued repeatedly loses thread over time. That is exactly what a threaded insert, a wire coil or a solid bushing, is for: it puts a steel thread in an aluminium boss, spreads the load over more of the engagement length and survives repeated assembly.</p><p>1&times;D in aluminium strips at or below the bolt's proof load. Thread locker prevents loosening but does nothing about stripping or wear. 3&times;D adds boss height, wall thickness and mass for essentially no extra strength, past about 2.5&times;D the load is carried by the first few threads regardless.</p>`,
  },
  {
    id: "manufacturing-q58",
    type: "mc",
    difficulty: 2,
    prompt: `<p>An industrial designer specifies Ra 0.2 &mu;m &mdash; a high-gloss finish &mdash; on the show face of an injection-moulded part. Where does that finish physically come from?</p>`,
    choices: [
      "The cavity steel is polished to that finish; the part copies it",
      "The part is buffed after moulding on a secondary polishing line",
      "A higher-flow resin grade is specified to reproduce fine detail",
      "Melt and mould temperature are raised until the skin runs smooth",
    ],
    answer: 0,
    explanation: `<p>A moulded part is a replica of the tool surface. The plastic freezes against the cavity steel and takes whatever finish that steel has, so a gloss finish is bought once, in the tool shop, by polishing the cavity through progressively finer diamond compounds, an SPI A-1 to A-3 finish. It is a line item on the tool quote and it takes hours of skilled hand work on a large cavity.</p><p>That has three consequences a designer should know. Polishing is not free and it is not reversible. You can always texture a polished cavity, but you cannot un-texture one without welding and re-cutting. A high-gloss surface shows every defect: sink, flow lines, weld lines and ejector marks are all far more visible on gloss than on a light texture, which is precisely why so many consumer products use texture. And gloss surfaces need less draft than textured ones but still need some, so the polish direction has to run along the pull or the part will drag.</p><p>Buffing after moulding is a secondary operation nobody wants at volume and it rounds edges and details. Resin grade affects replication of fine detail but cannot produce a finish the steel does not have. Higher melt and mould temperature improves surface replication at the margins. A genuine process lever, but it cannot make a matte cavity glossy.</p>`,
  },
  {
    id: "manufacturing-q59",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>Your flat pattern used K = 0.42 for a 90&deg; bend at inside radius R = 2.0 mm in t = 2.0 mm sheet. The first article comes back 0.35 mm too long across the bend. What K-factor is the shop's tooling actually producing?</p>`,
    answer: 0.309,
    unit: "",
    tolerance: 0.03,
    explanation: `<p>A part that is too long means the blank was cut with too much bend allowance, so the true BA is smaller than the one you used.</p><p class="eq">BA<sub>used</sub> = (&pi;/180)(90)(2.0 + 0.42 &times; 2.0) = 1.5708 &times; 2.84 = 4.461 mm</p><p class="eq">BA<sub>actual</sub> = 4.461 &minus; 0.35 = 4.111 mm</p><p>Now invert the formula for K:</p><p class="eq">4.111 = 1.5708(2.0 + 2.0K) &rarr; 2.0 + 2.0K = 2.617</p><p class="eq">K = 0.617/2.0 = <strong>0.309</strong></p><p>Check it against the physics: K is the fraction of the thickness at which the neutral axis sits, so it must lie between 0 and 0.5, and it falls toward 0.3 for tight radii where the inside face is heavily compressed. 0.309 at R/t = 1 is entirely believable; had the arithmetic produced 0.53 you would know a sign was wrong.</p><p>This is how flat patterns are actually established in a shop. The handbook K is a starting point; you cut one part, measure it, back out the real value for that combination of material, gauge, radius and forming method, and put it in a table. That table, not the formula, is what a sheet-metal shop's accuracy really rests on.</p>`,
  },
  {
    id: "manufacturing-q60",
    type: "mc",
    difficulty: 3,
    prompt: `<p>An aluminium housing has a 2.5 mm nominal wall, heavily ribbed bulk geometry, and one bearing bore that must be H7. Annual volume is 30,000 and the programme runs five years. Which route do you take to the review?</p>`,
    choices: [
      "Machine each one from solid billet, since the bore must be machined anyway",
      "Sand cast the bulk, then machine the bore and the mounting pads",
      "Die cast the bulk, then machine the bore and the mounting pads",
      "Print each housing in AlSi10Mg, then machine the bore and the pads",
    ],
    answer: 2,
    explanation: `<p>Two constraints decide this: 30,000 a year over five years is 150,000 parts, which amortises a hard tool easily; and a 2.5 mm ribbed wall is a thin section that only a pressure process fills reliably.</p><p>Die casting does both. It fills thin ribbed sections at high pressure, holds &plusmn;0.1&ndash;0.3 mm as cast so most features need no machining at all, and runs at cycle times measured in tens of seconds. A die costing 60&ndash;100k lands at well under a dollar a part over the programme. You still machine the bearing bore and the mounting pads, because die casting cannot reach H7. That is the near-net-plus-finish chain, and it is the normal answer, not a compromise.</p><p>Sand casting struggles with a 2.5 mm wall (it will run cold and mis-run), holds only about &plusmn;1 mm, and leaves a rough skin, so you would machine far more of it. Machining from billet is fine for the first hundred but at 150,000 parts the cycle time and the buy-to-fly ratio are indefensible. Printing is the same argument an order of magnitude worse.</p><p>What could overturn it: if the design is still moving, a 16-week die and its change cost are a real risk, and the honest answer becomes machine or sand cast the first year's volume while the design settles, then cut the die.</p>`,
  },
];

export default extra;
