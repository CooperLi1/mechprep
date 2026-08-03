import type { TopicContent } from "../types";

// ---------------------------------------------------------------------------
// Stress, Strain & Axial Loading
// ---------------------------------------------------------------------------

// Engineering tensile curve. The path terminates AT fracture (non-zero
// engineering stress) — it does not decay to the strain axis. The unloading
// line is drawn parallel to the elastic slope so the permanent set reads
// correctly.
const figCurve = `<svg viewBox="0 0 460 270" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ss1-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <line x1="66" y1="220" x2="424" y2="220" stroke="#64748b" stroke-width="1.5" marker-end="url(#ss1-ax)"/>
  <line x1="66" y1="220" x2="66" y2="36" stroke="#64748b" stroke-width="1.5" marker-end="url(#ss1-ax)"/>
  <text x="398" y="242" text-anchor="middle" fill="#64748b">strain &epsilon;</text>
  <text x="58" y="34" text-anchor="end" fill="#64748b">stress &sigma;</text>
  <line x1="66" y1="220" x2="94" y2="74" stroke="#334155" stroke-width="1.2" stroke-dasharray="5 4"/>
  <text x="104" y="60" fill="#334155" font-size="12">slope = E</text>
  <path d="M66,220 L86,116 C104,96 138,82 182,76 C214,72 240,70 258,72 C302,78 332,96 362,140" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <circle cx="86" cy="116" r="4" fill="#1d4ed8"/>
  <line x1="86" y1="116" x2="118" y2="152" stroke="#64748b" stroke-width="1"/>
  <text x="122" y="157" fill="#334155" font-weight="600">yield</text>
  <line x1="258" y1="72" x2="258" y2="220" stroke="#64748b" stroke-dasharray="5 4"/>
  <text x="258" y="60" text-anchor="middle" fill="#1d4ed8" font-weight="600">UTS (peak load)</text>
  <text x="362" y="134" text-anchor="middle" fill="#1d4ed8" font-weight="700" font-size="19">&times;</text>
  <text x="392" y="164" text-anchor="middle" fill="#334155" font-weight="600">fracture</text>
  <text x="312" y="126" text-anchor="middle" fill="#64748b" font-size="12">necking</text>
  <line x1="215" y1="72" x2="187" y2="220" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="6 4"/>
  <text x="200" y="132" text-anchor="end" fill="#dc2626" font-size="12">unload</text>
  <line x1="66" y1="238" x2="187" y2="238" stroke="#64748b" stroke-width="1"/>
  <line x1="66" y1="232" x2="66" y2="244" stroke="#64748b" stroke-width="1"/>
  <line x1="187" y1="232" x2="187" y2="244" stroke="#64748b" stroke-width="1"/>
  <text x="126" y="258" text-anchor="middle" fill="#64748b" font-size="12">permanent set</text>
</svg>`;

// 0.2% offset construction, drawn on a real numeric scale so E can be
// recovered from the marked yield point.
const figOffset = `<svg viewBox="0 0 460 262" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ss4-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="24" text-anchor="middle" font-weight="600" fill="#334155">0.2% offset yield construction</text>
  <line x1="70" y1="214" x2="424" y2="214" stroke="#64748b" stroke-width="1.5" marker-end="url(#ss4-ax)"/>
  <line x1="70" y1="214" x2="70" y2="40" stroke="#64748b" stroke-width="1.5" marker-end="url(#ss4-ax)"/>
  <line x1="125" y1="214" x2="125" y2="219" stroke="#64748b"/>
  <line x1="180" y1="214" x2="180" y2="221" stroke="#64748b"/>
  <line x1="235" y1="214" x2="235" y2="219" stroke="#64748b"/>
  <line x1="290" y1="214" x2="290" y2="221" stroke="#64748b"/>
  <line x1="345" y1="214" x2="345" y2="219" stroke="#64748b"/>
  <line x1="400" y1="214" x2="400" y2="221" stroke="#64748b"/>
  <text x="180" y="234" text-anchor="middle" fill="#64748b" font-size="11">0.002</text>
  <text x="290" y="234" text-anchor="middle" fill="#64748b" font-size="11">0.004</text>
  <text x="400" y="234" text-anchor="middle" fill="#64748b" font-size="11">0.006</text>
  <text x="404" y="252" text-anchor="middle" fill="#64748b" font-size="12">strain &epsilon;</text>
  <line x1="65" y1="165" x2="70" y2="165" stroke="#64748b"/>
  <line x1="65" y1="117" x2="70" y2="117" stroke="#64748b"/>
  <line x1="65" y1="68" x2="70" y2="68" stroke="#64748b"/>
  <text x="60" y="169" text-anchor="end" fill="#64748b" font-size="11">100</text>
  <text x="60" y="121" text-anchor="end" fill="#64748b" font-size="11">200</text>
  <text x="60" y="72" text-anchor="end" fill="#64748b" font-size="11">300</text>
  <text x="62" y="34" text-anchor="end" fill="#64748b" font-size="12">&sigma; (MPa)</text>
  <line x1="70" y1="214" x2="150" y2="73" stroke="#334155" stroke-width="1.2" stroke-dasharray="5 4"/>
  <text x="156" y="70" fill="#334155" font-size="12">slope E</text>
  <line x1="180" y1="214" x2="262" y2="69" stroke="#1d4ed8" stroke-width="1.4" stroke-dasharray="6 4"/>
  <text x="268" y="66" fill="#1d4ed8" font-size="12">offset line</text>
  <path d="M70,214 L133,102 C158,93 190,90 225,88 C265,85 320,80 400,74" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <circle cx="251" cy="87" r="4.5" fill="#dc2626"/>
  <line x1="70" y1="87" x2="251" y2="87" stroke="#64748b" stroke-dasharray="4 4"/>
  <line x1="251" y1="87" x2="251" y2="214" stroke="#64748b" stroke-dasharray="4 4"/>
  <text x="258" y="112" fill="#dc2626" font-weight="600">&sigma;<tspan baseline-shift="sub" font-size="9">y</tspan> = 260 MPa</text>
  <text x="258" y="130" fill="#dc2626" font-size="12">at &epsilon; = 0.0033</text>
  <text x="152" y="200" text-anchor="middle" fill="#64748b" font-size="11">0.002 offset</text>
</svg>`;

// A threaded tension member: the P arrows point OUTWARD (tension), and the
// figure names the two competing areas — shank and tensile-stress area.
const figAxial = `<svg viewBox="0 0 460 236" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ss2-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="ss2-dim" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="26" text-anchor="middle" font-weight="600" fill="#334155">Threaded tension member (tension: P pulls outward)</text>
  <rect x="112" y="96" width="236" height="26" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="124" y1="96" x2="118" y2="122" stroke="#64748b" stroke-width="1"/>
  <line x1="136" y1="96" x2="130" y2="122" stroke="#64748b" stroke-width="1"/>
  <line x1="148" y1="96" x2="142" y2="122" stroke="#64748b" stroke-width="1"/>
  <line x1="160" y1="96" x2="154" y2="122" stroke="#64748b" stroke-width="1"/>
  <line x1="172" y1="96" x2="166" y2="122" stroke="#64748b" stroke-width="1"/>
  <line x1="184" y1="96" x2="178" y2="122" stroke="#64748b" stroke-width="1"/>
  <line x1="196" y1="96" x2="190" y2="122" stroke="#64748b" stroke-width="1"/>
  <line x1="208" y1="96" x2="202" y2="122" stroke="#64748b" stroke-width="1"/>
  <line x1="220" y1="96" x2="214" y2="122" stroke="#64748b" stroke-width="1"/>
  <line x1="232" y1="96" x2="226" y2="122" stroke="#64748b" stroke-width="1"/>
  <line x1="244" y1="96" x2="238" y2="122" stroke="#64748b" stroke-width="1"/>
  <line x1="256" y1="96" x2="250" y2="122" stroke="#64748b" stroke-width="1"/>
  <line x1="268" y1="96" x2="262" y2="122" stroke="#64748b" stroke-width="1"/>
  <line x1="280" y1="96" x2="274" y2="122" stroke="#64748b" stroke-width="1"/>
  <line x1="292" y1="96" x2="286" y2="122" stroke="#64748b" stroke-width="1"/>
  <line x1="304" y1="96" x2="298" y2="122" stroke="#64748b" stroke-width="1"/>
  <line x1="316" y1="96" x2="310" y2="122" stroke="#64748b" stroke-width="1"/>
  <line x1="328" y1="96" x2="322" y2="122" stroke="#64748b" stroke-width="1"/>
  <line x1="340" y1="96" x2="334" y2="122" stroke="#64748b" stroke-width="1"/>
  <rect x="150" y="86" width="26" height="46" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="284" y="86" width="26" height="46" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="112" y1="109" x2="74" y2="109" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ss2-load)"/>
  <line x1="348" y1="109" x2="386" y2="109" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ss2-load)"/>
  <text x="66" y="100" text-anchor="middle" fill="#dc2626" font-weight="600">P</text>
  <text x="394" y="100" text-anchor="middle" fill="#dc2626" font-weight="600">P</text>
  <line x1="230" y1="74" x2="230" y2="140" stroke="#1d4ed8" stroke-width="1.6" stroke-dasharray="6 4"/>
  <text x="230" y="66" text-anchor="middle" fill="#1d4ed8" font-weight="600">cut through the threads</text>
  <line x1="150" y1="166" x2="310" y2="166" stroke="#64748b" stroke-width="1" marker-end="url(#ss2-dim)"/>
  <line x1="310" y1="180" x2="150" y2="180" stroke="#64748b" stroke-width="1" marker-end="url(#ss2-dim)"/>
  <line x1="150" y1="150" x2="150" y2="186" stroke="#64748b"/>
  <line x1="310" y1="150" x2="310" y2="186" stroke="#64748b"/>
  <text x="230" y="161" text-anchor="middle" fill="#64748b">grip length L</text>
  <text x="230" y="204" text-anchor="middle" fill="#334155">shank area A = &pi;d&sup2;/4 &nbsp; &nbsp; thread area A<tspan baseline-shift="sub" font-size="9">t</tspan> from the size table</text>
  <text x="230" y="224" text-anchor="middle" fill="#64748b" font-size="12">the thread root, not the shank, sets the stress</text>
</svg>`;

// Restrained heated bar. Wall reactions act INWARD on the member — the bar is
// in compression, matching the caption.
const figThermal = `<svg viewBox="0 0 460 230" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ss3-rxn" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <line x1="90" y1="62" x2="90" y2="168" stroke="#334155" stroke-width="3"/>
  <line x1="370" y1="62" x2="370" y2="168" stroke="#334155" stroke-width="3"/>
  <line x1="78" y1="76" x2="90" y2="64" stroke="#64748b"/>
  <line x1="78" y1="96" x2="90" y2="84" stroke="#64748b"/>
  <line x1="78" y1="116" x2="90" y2="104" stroke="#64748b"/>
  <line x1="78" y1="136" x2="90" y2="124" stroke="#64748b"/>
  <line x1="358" y1="76" x2="370" y2="64" stroke="#64748b"/>
  <line x1="358" y1="96" x2="370" y2="84" stroke="#64748b"/>
  <line x1="358" y1="116" x2="370" y2="104" stroke="#64748b"/>
  <line x1="358" y1="136" x2="370" y2="124" stroke="#64748b"/>
  <rect x="90" y="104" width="280" height="28" fill="#fee2e2" stroke="#334155" stroke-width="1.5"/>
  <path d="M185 91 C190 78 203 78 208 91 C213 104 226 104 231 91 C236 78 249 78 254 91 C259 104 272 104 277 91" fill="none" stroke="#dc2626" stroke-width="2"/>
  <text x="230" y="74" text-anchor="middle" fill="#dc2626" font-weight="600">temperature rises by &Delta;T</text>
  <line x1="98" y1="118" x2="138" y2="118" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#ss3-rxn)"/>
  <line x1="362" y1="118" x2="322" y2="118" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#ss3-rxn)"/>
  <text x="230" y="188" text-anchor="middle" fill="#334155">free expansion blocked &rarr; compressive thermal stress</text>
  <text x="230" y="210" text-anchor="middle" fill="#64748b" font-size="12">wall reactions push inward on the bar</text>
</svg>`;

// Which area resists? Four load paths that all start from "sigma = P/A".
const figAreas = `<svg viewBox="0 0 460 286" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="12">
  <defs>
    <marker id="ss5-load" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
  </defs>
  <text x="115" y="26" text-anchor="middle" font-weight="600" fill="#334155">Tension at a hole</text>
  <rect x="46" y="52" width="140" height="42" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="46" y="52" width="42" height="42" fill="#fee2e2" stroke="#334155" stroke-width="1"/>
  <rect x="144" y="52" width="42" height="42" fill="#fee2e2" stroke="#334155" stroke-width="1"/>
  <circle cx="116" cy="73" r="14" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <line x1="46" y1="73" x2="20" y2="73" stroke="#dc2626" stroke-width="2" marker-end="url(#ss5-load)"/>
  <line x1="186" y1="73" x2="212" y2="73" stroke="#dc2626" stroke-width="2" marker-end="url(#ss5-load)"/>
  <text x="115" y="112" text-anchor="middle" fill="#334155">net area = (w &minus; d)t</text>
  <text x="345" y="26" text-anchor="middle" font-weight="600" fill="#334155">Single shear</text>
  <rect x="258" y="50" width="102" height="18" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="330" y="68" width="102" height="18" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="341" y="40" width="10" height="56" fill="#93c5fd" stroke="#334155" stroke-width="1.5"/>
  <line x1="326" y1="68" x2="366" y2="68" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 3"/>
  <line x1="258" y1="59" x2="234" y2="59" stroke="#dc2626" stroke-width="2" marker-end="url(#ss5-load)"/>
  <line x1="432" y1="77" x2="452" y2="77" stroke="#dc2626" stroke-width="2" marker-end="url(#ss5-load)"/>
  <text x="345" y="112" text-anchor="middle" fill="#334155">1 plane: A = &pi;d&sup2;/4</text>
  <text x="115" y="160" text-anchor="middle" font-weight="600" fill="#334155">Double shear (clevis)</text>
  <rect x="40" y="182" width="76" height="16" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="40" y="226" width="76" height="16" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="100" y="198" width="90" height="28" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="103" y="172" width="10" height="80" fill="#93c5fd" stroke="#334155" stroke-width="1.5"/>
  <line x1="88" y1="198" x2="128" y2="198" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 3"/>
  <line x1="88" y1="226" x2="128" y2="226" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 3"/>
  <line x1="190" y1="212" x2="214" y2="212" stroke="#dc2626" stroke-width="2" marker-end="url(#ss5-load)"/>
  <text x="115" y="270" text-anchor="middle" fill="#334155">2 planes: A = 2(&pi;d&sup2;/4)</text>
  <text x="345" y="160" text-anchor="middle" font-weight="600" fill="#334155">Bearing at the hole</text>
  <rect x="272" y="188" width="150" height="46" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <circle cx="322" cy="211" r="15" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <circle cx="322" cy="211" r="12" fill="#93c5fd" stroke="#334155" stroke-width="1.5"/>
  <line x1="307" y1="196" x2="307" y2="226" stroke="#dc2626" stroke-width="3"/>
  <line x1="422" y1="211" x2="446" y2="211" stroke="#dc2626" stroke-width="2" marker-end="url(#ss5-load)"/>
  <text x="345" y="270" text-anchor="middle" fill="#334155">projected area = d &middot; t</text>
</svg>`;

const content: TopicContent = {
  lesson: {
    title: "Stress, Strain & Axial Loading",
    intro: `<p>Stress and strain are the bridge between a free-body diagram and a material decision. The FBD tells you the internal force; stress says how hard the material is working; strain says how much the part moves. Interviewers keep coming back to axial bars, pins, and pressure vessels because the algebra is short enough to do out loud, which leaves the whole conversation focused on the part that actually separates candidates: choosing the right area and the right boundary condition.</p>
<figure class="fig">${figCurve}<figcaption>A ductile tensile curve. Stiffness is the elastic slope, strength is the yield or ultimate level, toughness is the area under the curve, and unloading runs back down parallel to the elastic line, leaving permanent set.</figcaption></figure>`,
    sections: [
      {
        heading: "Stress is internal load divided by resisting area",
        html: `<p>Normal stress from an axial force is the average internal force per area:</p>
<p class="eq">&sigma; = P/A</p>
<p><strong>&sigma;</strong> is normal stress (Pa, MPa, or psi), <strong>P</strong> is the internal axial force crossing the cut, and <strong>A</strong> is the load-carrying area. Tension is positive by convention; compression is negative.</p>
<p>That equation is deceptively small. It only works after you have made a clean cut through the part and identified the internal force crossing that cut. Almost every mistake in an interview happens in the denominator, not the numerator.</p>
<div class="callout warn">A 12 mm threaded rod has a shank area of &pi;(12)&sup2;/4 = 113 mm&sup2; but a tensile-stress area of only 84.3 mm&sup2;. Using the shank underpredicts thread-root stress by 25%. Fastener catalogs publish A<sub>t</sub> for exactly this reason.</div>
<figure class="fig">${figAxial}<figcaption>A threaded tension member. Tension is drawn with both P arrows pointing away from the part, and the governing section is the thread root, not the shank.</figcaption></figure>`,
      },
      {
        heading: "Pick the right area: net section, shear plane, bearing",
        html: `<p>Four different load paths all start from &sigma; = P/A, and each uses a different denominator. Getting this wrong is the single most common way a candidate loses a sizing question.</p>
<figure class="fig">${figAreas}<figcaption>The same joint offers four competing areas. A bolted lap joint must be checked against all of them; the smallest capacity wins.</figcaption></figure>
<table><thead><tr><th>Mode</th><th>Area to use</th><th>Stress</th></tr></thead><tbody>
<tr><td>Tension at a hole</td><td>net section (w &minus; d)t</td><td>&sigma; = P/[(w &minus; d)t]</td></tr>
<tr><td>Pin in single shear</td><td>one pin cross-section</td><td>&tau; = P/(&pi;d&sup2;/4)</td></tr>
<tr><td>Pin in double shear</td><td>two pin cross-sections</td><td>&tau; = P/[2(&pi;d&sup2;/4)]</td></tr>
<tr><td>Bearing on the hole wall</td><td>projected area d&middot;t</td><td>&sigma;<sub>b</sub> = P/(dt)</td></tr>
<tr><td>Tear-out behind the hole</td><td>two planes 2(e &minus; d/2)t</td><td>&tau; = P/[2(e &minus; d/2)t]</td></tr>
</tbody></table>
<div class="callout">The double-shear factor of 2 catches people in both directions. A clevis pin is cut by <em>two</em> planes, so it sees half the shear stress of the same pin in a single-shear lap joint. But stress scales with d&sup2;, so halving the stress shrinks the required diameter by only &radic;2 &asymp; 1.41&times;, not 2&times;.</div>`,
      },
      {
        heading: "Strain measures deformation, not force",
        html: `<p>Engineering strain is change in length divided by original length:</p>
<p class="eq">&epsilon; = &Delta;L/L</p>
<p>In the elastic region, stress and strain are proportional through Young&rsquo;s modulus E:</p>
<p class="eq">&sigma; = E&epsilon;</p>
<p><strong>&epsilon;</strong> is dimensionless, often reported as microstrain (&mu;&epsilon;); <strong>&Delta;L</strong> and <strong>L</strong> must use the same length units; <strong>E</strong> is Young&rsquo;s modulus. Hooke&rsquo;s law applies only before yielding.</p>
<p>Modulus is stiffness, not strength. Every carbon and alloy steel sits near E = 200 GPa, whether it is annealed mild steel, quenched-and-tempered 4340, or spring wire. Heat treatment can triple yield strength and barely move E. A stronger alloy prevents yield and does nothing for a deflection complaint.</p>
<figure class="fig">${figOffset}<figcaption>Yield on a real curve is defined by construction: draw a line of slope E offset by 0.002 strain and read the stress where it crosses the curve. The construction itself lets you back out E from a reported yield point.</figcaption></figure>`,
      },
      {
        heading: "Axial deformation, series, parallel, and indeterminate bars",
        html: `<p>Combining equilibrium, geometry and Hooke&rsquo;s law gives the elongation of a uniform member:</p>
<p class="eq">&Delta;L = PL/(AE)</p>
<p>This assumes a straight prismatic bar, constant P, constant A and E, small strain and linear elasticity. For stepped bars, sum PL/(AE) by segment; for variable area, integrate.</p>
<p>Axial stiffness is k = AE/L. Members in <strong>series</strong> carry the same force and their elongations add, so the softest member dominates total compliance and a rubber grommet or gasket can swamp a massive aluminium bracket. Members in <strong>parallel</strong> share the same deformation and split load in proportion to AE/L, so <em>the stiffer path carries more load</em>.</p>
<p>When equilibrium alone cannot find the internal forces, as in a bar fixed at both ends, two materials clamped between rigid plates, or a bolt clamping a spacer, the structure is statically indeterminate and you need a second equation. That equation is always compatibility: write the deformations, force them to be consistent with the geometry, and solve with equilibrium. For a bar fixed at both ends with a load P applied a distance a from end A and b from end B, compatibility gives R<sub>A</sub> = Pb/L and R<sub>B</sub> = Pa/L, so the shorter, stiffer segment takes the bigger reaction.</p>
<table><thead><tr><th>Configuration</th><th>Same quantity</th><th>Add what?</th></tr></thead><tbody><tr><td>Series bars</td><td>Force P</td><td>Elongations, or flexibilities L/AE</td></tr><tr><td>Parallel bars</td><td>Deformation &Delta;L</td><td>Stiffnesses AE/L</td></tr></tbody></table>`,
      },
      {
        heading: "Thermal strain and Poisson's ratio create hidden loads",
        html: `<p>Free thermal strain is &epsilon;<sub>T</sub> = &alpha;&Delta;T. A part that is free to expand develops displacement and <em>no stress</em>. Stress appears only when something blocks the motion:</p>
<p class="eq">&sigma;<sub>thermal</sub> = E&alpha;&Delta;T &nbsp; (fully restrained only)</p>
<figure class="fig">${figThermal}<figcaption>Thermal stress exists only because the walls enforce zero net change in length. Remove one wall and the stress goes to zero.</figcaption></figure>
<p>Real hardware lives between the two extremes. If the restraint has finite stiffness k<sub>s</sub>, the thermal force is F = &alpha;&Delta;T&middot;L / (1/k<sub>bar</sub> + 1/k<sub>s</sub>), always less than the fully restrained value. If there is a clearance gap g, nothing happens until &alpha;&Delta;T&middot;L = g, and only the excess expansion builds stress.</p>
<p>Poisson&rsquo;s ratio &nu; links axial and lateral strain: pull a bar longer and it gets narrower, &epsilon;<sub>lat</sub> = &minus;&nu;&epsilon;<sub>axial</sub>. The volume consequence matters more than most candidates expect. For uniaxial strain, &Delta;V/V = &epsilon;(1 &minus; 2&nu;), so a material with &nu; &rarr; 0.5 is <strong>incompressible</strong>. That is why rubber at &nu; &asymp; 0.4995, squeezed into a rigid bore, behaves like a trapped fluid and stops acting as a spring.</p>`,
      },
      {
        heading: "Thin-wall pressure vessels: hoop is twice longitudinal",
        html: `<p>Cut a pressurized cylinder lengthwise and the pressure acting on the projected area 2rL is resisted by two wall strips of area tL. Cut it across and the pressure on &pi;r&sup2; is resisted by a ring of area 2&pi;rt. The two results differ by a factor of two:</p>
<p class="eq">&sigma;<sub>hoop</sub> = pr/t &nbsp; &nbsp; &sigma;<sub>long</sub> = pr/2t</p>
<p>Use the <strong>inner radius</strong> r, not the diameter. That is a factor-of-2 error hiding in plain sight. The thin-wall assumption needs r/t greater than about 10; below that the through-thickness stress gradient matters and you need thick-wall Lam&eacute; equations.</p>
<div class="callout">Because hoop stress is twice longitudinal, a pressurized can, a sausage or an over-pressured pipe splits <em>along its length</em>. Design follows the physics: hoop governs wall thickness, and a spiral-welded pipe puts its weld at an angle so the seam never sees the full hoop stress head-on.</div>
<p>The answer is checkable by intuition, which is why it keeps getting asked. Everyone has seen a hot dog split lengthwise, and almost nobody has seen one snap in half.</p>`,
      },
      {
        heading: "Engineering vs true stress-strain",
        html: `<p>Engineering stress and strain use the original area and length. True stress and strain use the instantaneous area and incremental deformation. Before necking, true stress is higher because the specimen has thinned:</p>
<p class="eq">&sigma;<sub>true</sub> = &sigma;<sub>eng</sub>(1 + &epsilon;<sub>eng</sub>), &nbsp; &epsilon;<sub>true</sub> = ln(1 + &epsilon;<sub>eng</sub>)</p>
<p>Those conversions rest on two assumptions: deformation is <strong>uniform</strong> along the gauge length, and volume is conserved in plastic flow. The moment a neck forms the first assumption dies. Strain localises, the engineering curve turns down because load falls while the original area stays in the denominator, and the true stress in the neck keeps climbing until fracture. Past necking you cannot convert. You have to measure the local minimum area.</p>
<p>For elastic interview problems, engineering values are fine. For forming, crash and nonlinear FEA material cards, true stress-strain is the required input, corrected beyond necking with a Bridgman or inverse-FE method.</p>`,
      },
    ],
    equations: [
      { name: "Normal stress", formula: "<p>&sigma; = P/A</p>", note: "A is the actual load-carrying area: net section at a hole, tensile-stress area at a thread." },
      { name: "Engineering strain", formula: "<p>&epsilon; = &Delta;L/L</p>", note: "Dimensionless; &Delta;L and original length L must use the same units. 1 microstrain = 10<sup>&minus;6</sup>." },
      { name: "Hooke's law", formula: "<p>&sigma; = E&epsilon;</p>", note: "Linear elastic region only. Steels cluster near E = 200 GPa regardless of heat treat." },
      { name: "Axial deformation", formula: "<p>&Delta;L = PL/(AE)</p>", note: "Uniform prismatic bar. Axial stiffness k = AE/L; sum PL/(AE) segment by segment." },
      { name: "Pin shear", formula: "<p>&tau; = P/(n &middot; &pi;d&sup2;/4)</p>", note: "n = 1 for single shear, n = 2 for a clevis pin in double shear. Counting the cut planes is the whole question." },
      { name: "Bearing stress", formula: "<p>&sigma;<sub>b</sub> = P/(d &middot; t)</p>", note: "Projected area of the hole wall, not the hole circumference. Governs hole elongation and ovalling." },
      { name: "Thin-wall vessel", formula: "<p>&sigma;<sub>hoop</sub> = pr/t, &nbsp; &sigma;<sub>long</sub> = pr/2t</p>", note: "r is the inner radius. Valid for r/t &ge; 10; hoop is always twice longitudinal, which is why cylinders split lengthwise." },
      { name: "Thermal stress", formula: "<p>&sigma; = E&alpha;&Delta;T</p>", note: "Fully restrained case only. Free to expand means zero stress; partial restraint gives something in between." },
      { name: "Poisson effect", formula: "<p>&epsilon;<sub>lat</sub> = &minus;&nu;&epsilon;<sub>axial</sub>, &nbsp; &Delta;V/V = &epsilon;(1 &minus; 2&nu;)</p>", note: "&nu; &rarr; 0.5 means no volume change — rubber is effectively incompressible when confined." },
      { name: "Isotropic shear modulus", formula: "<p>G = E/[2(1 + &nu;)]</p>", note: "Steel: 200/2.6 = 77 GPa. Aluminum: 70/2.66 = 26 GPa. G is roughly E/2.6, never E/2." },
    ],
    interviewTips: [
      "Draw the cut and name the resisting area out loud before you touch a number: net, shear, bearing, or tear-out.",
      "Single or double shear? Count the planes the pin is cut on. The factor of 2 catches more candidates than anything else in this topic.",
      "Never fix a stiffness complaint with a strength change; E, A, and L set elastic motion, not yield strength.",
      "For anything thermal, ask first whether the part is free to expand, gapped, or truly restrained.",
      "On a pressure vessel use the inner radius and remember hoop = 2 x longitudinal, so seams and splits run lengthwise.",
      "Parallel load paths split by stiffness AE/L, so the stiffer member attracts more load even with less area.",
      "State whether the stress you quote is nominal or a local peak that already includes Kt.",
    ],
  },
  questions: [
    {
      id: "stress-strain-q01",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A test lab reports yield for the coupon shown using the standard 0.2% offset construction: the offset line meets the curve at &sigma;<sub>y</sub> = 260 MPa and total strain &epsilon; = 0.0033. From those two numbers alone, what is Young's modulus in GPa?</p>`,
      figure: figOffset,
      answer: 200,
      unit: "GPa",
      explanation: `<p class="eq">&epsilon;<sub>elastic</sub> = 0.0033 &minus; 0.0020 = 0.0013</p>
<p class="eq">E = &sigma;<sub>y</sub>/&epsilon;<sub>elastic</sub> = 260/0.0013 = 200,000 MPa = <strong>200 GPa</strong></p>
<p>The offset line has slope E and starts at &epsilon; = 0.0020, so at the intersection the strain measured along that line is the elastic part. Dividing 260 by the total strain 0.0033 gives 78.8 GPa, a number no steel has. And 200 GPa is exactly where every carbon and alloy steel sits, so the coupon is steel.</p>`,
    },
    {
      id: "stress-strain-q02",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>The member shown is an M12 threaded rod (nominal shank diameter 12 mm, tensile-stress area A<sub>t</sub> = 84.3 mm<sup>2</sup>) pulled in tension by 25 kN. What is the tensile stress at the governing section, in MPa?</p>`,
      figure: figAxial,
      answer: 297,
      unit: "MPa",
      explanation: `<p class="eq">&sigma; = P/A<sub>t</sub> = 25000/84.3 = <strong>297 MPa</strong></p>
<p>The governing section is the thread root, so use the tensile-stress area. Working in N and mm<sup>2</sup> gives MPa directly. The shank area 113 mm<sup>2</sup> would give 221 MPa, 25% low and on the unsafe side. For a class 8.8 fastener with proof stress around 580 MPa, 297 MPa is roughly half proof, typical of a correctly preloaded bolt.</p>`,
    },
    {
      id: "stress-strain-q03",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A steel tie rod in a machine frame stretches 3 mm under load; the customer wants 1 mm. Peak stress is only 90 MPa against a 250 MPa yield. A teammate proposes swapping to a 700 MPa yield alloy steel. What happens to the stretch?</p>`,
      choices: [
        "It falls in proportion to the yield strength increase",
        "It is unchanged; elastic stretch depends on E, A and L, not on yield",
        "It falls, because high-strength steel has a higher E",
        "It rises, because stronger alloys are more brittle",
      ],
      answer: 1,
      explanation: `<p>Elastic stretch is &Delta;L = PL/(AE), and yield strength appears nowhere in it. Mild steel, HSLA and quenched-and-tempered alloy steel all sit within a few percent of E = 200 GPa, so the swap buys yield margin the rod did not need and no deflection improvement at all.</p>
<p>Getting from 3 mm to 1 mm needs AE/L to triple: triple the area, cut the length to a third, or leave steel for something with a genuinely higher modulus. Geometry is the realistic answer, because among structural metals only a handful beat steel&rsquo;s modulus and none of them cheaply.</p>
<p>This strength-versus-stiffness confusion is one of the most common screening filters in mechanical interviews.</p>`,
    },
    {
      id: "stress-strain-q04",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A uniaxial strain gage bonded along the axis of an aluminum link reads 850 microstrain in service. Using E = 70 GPa, what axial stress does that imply, in MPa?</p>`,
      answer: 59.5,
      unit: "MPa",
      tolerance: 0.025,
      explanation: `<p class="eq">&sigma; = E&epsilon; = (70&times;10<sup>9</sup>)(850&times;10<sup>&minus;6</sup>) = 59.5&times;10<sup>6</sup> Pa = <strong>59.5 MPa</strong></p>
<p>Convert microstrain first, then Hooke&rsquo;s law does the rest. Two assumptions ride along: the gauge is aligned with the principal strain direction, and the state is uniaxial. If the link also bends, one gauge on one face reads membrane plus bending and cannot separate them, which is why back-to-back gauges are standard.</p>`,
    },
    {
      id: "stress-strain-q05",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A 2 m aluminum rail sits on low-friction rollers inside an oven and is heated 80 &deg;C. A colleague reports the rail is now carrying &sigma; = E&alpha;&Delta;T = (70 GPa)(23&times;10<sup>&minus;6</sup>)(80) = 129 MPa. What is wrong with that?</p>`,
      figure: figThermal,
      choices: [
        "The 2 m length was left out of the thermal stress formula",
        "&Delta;T belongs in kelvin, which changes the computed stress",
        "Nothing restrains the rail, so it expands stress-free; that formula needs full restraint",
        "The &alpha; used is for aluminum where steel's value belongs",
      ],
      answer: 2,
      explanation: `<p>&sigma; = E&alpha;&Delta;T is the <em>fully restrained</em> result. It comes from forcing total strain to zero so that mechanical strain cancels free thermal strain. On rollers nothing cancels anything: the rail simply grows by &alpha;&Delta;T&middot;L = (23&times;10<sup>&minus;6</sup>)(80)(2000) = 3.7 mm and carries essentially zero axial stress.</p>
<p>The other options are worth understanding. Length genuinely does not appear, so a restrained 10 m bar and a restrained 10 mm bar reach the same stress. And &Delta;T is a temperature <em>difference</em>, so a change of 80 &deg;C equals a change of 80 K and the unit swap changes nothing.</p>
<p>Before writing E&alpha;&Delta;T, say out loud whether the part is free, gapped or restrained. Applying the restrained formula to a free part is the most common thermal error there is.</p>`,
    },
    {
      id: "stress-strain-q06",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A steel strut is welded between two massive fixtures at 20 &deg;C. The assembly is then taken into a cold chamber at &minus;10 &deg;C. Use E = 200 GPa and &alpha; = 12&times;10<sup>&minus;6</sup>/&deg;C. What is the magnitude of the axial stress in the strut, in MPa?</p>`,
      figure: figThermal,
      answer: 72,
      unit: "MPa",
      explanation: `<p class="eq">&sigma; = E&alpha;|&Delta;T| = (200&times;10<sup>9</sup>)(12&times;10<sup>&minus;6</sup>)(30) = 72&times;10<sup>6</sup> Pa = <strong>72 MPa</strong></p>
<p>&Delta;T = &minus;10 &minus; 20 = &minus;30 &deg;C. A free strut would shrink, the fixtures prevent it, so they pull the strut into <strong>tension</strong>.</p>
<p>The sign is the point. Heating a restrained bar compresses it; cooling puts it in tension, which is far more dangerous because tension drives cracks. Welded steel structures assembled warm crack at the welds in winter for this reason, and a hot-assembled shrink fit relaxes rather than tightens when the assembly cools uniformly. Note the strut length never entered: fully restrained thermal stress is length-independent.</p>`,
    },
    {
      id: "stress-strain-q07",
      type: "mc",
      difficulty: 2,
      prompt: `<p>Your drawing calls out a 0.2% offset yield of 250 MPa minimum. A supplier's material cert reports 305 MPa for the same lot but states the value was taken at a <em>0.5%</em> offset. How should you treat that number?</p>`,
      figure: figOffset,
      choices: [
        "It is optimistic; on a still-hardening curve the 0.2% construction reads lower",
        "It is conservative; a bigger offset always lowers yield",
        "It is identical, since offset size never moves the crossing",
        "It is unusable, since offset yield only exists at 0.2%",
      ],
      answer: 0,
      explanation: `<p>The offset construction slides a line of slope E to the right by the offset strain and reads the stress where it crosses the flow curve. Push the line further right and it crosses a curve that has kept work-hardening, so the reported stress is <em>higher</em>. A 0.5% offset reports a number the 0.2% test would not support.</p>
<p>Reading the figure, the 0.2% line crosses at 260 MPa while the same curve at 0.5% offset crosses higher up the hardening branch. The cert&rsquo;s 305 MPa is not fraudulent, it is measured to a different convention, and it may still fail your 250 MPa requirement when retested at 0.2%.</p>
<p>Ask for a retest at the specified offset, or write the offset convention into the drawing note. Offsets of 0.1%, 0.2% and 0.5% are all used, with 0.5% common for copper alloys and some plastics, so a yield strength without a stated offset is an incomplete specification.</p>`,
    },
    {
      id: "stress-strain-q08",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A steel bracket is accidentally overloaded. A gage records a total strain of 0.0030 at the moment of peak load, where the stress had reached 300 MPa. The load is removed and unloading is elastic with E = 200 GPa. How much permanent strain remains, in microstrain?</p>`,
      figure: figCurve,
      answer: 1500,
      unit: "microstrain",
      explanation: `<p>Unloading follows a line of slope E, so the strain that comes back is the elastic part only:</p>
<p class="eq">&epsilon;<sub>recovered</sub> = &sigma;/E = 300/200000 = 0.0015</p>
<p class="eq">&epsilon;<sub>permanent</sub> = 0.0030 &minus; 0.0015 = 0.0015 = <strong>1500 microstrain</strong></p>
<p>Exactly half the strain at peak load was plastic. On the figure that is the horizontal gap between the origin and where the dashed unloading line lands on the strain axis.</p>
<p>1500 &mu;&epsilon; permanent is 0.15%, so a 100 mm feature is now 0.15 mm out of position. Invisible to the eye and fatal to a precision fit, which is why &ldquo;it sprang back and looks fine&rdquo; is never an acceptance criterion after an overload. The part is also work-hardened now, and has burned some of its remaining ductility.</p>`,
    },
    {
      id: "stress-strain-q09",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A steel bar and an aluminum bar are clamped in parallel between rigid end plates and share a slowly increasing load. The aluminum reaches yield first. What happens to the elastic stiffness-ratio load split from that point on?</p>`,
      choices: [
        "The split is unchanged, since member stiffness never changes",
        "Both members fracture as soon as one of them reaches yield",
        "The yielded member immediately sheds all its load to the other",
        "Tangent stiffness drops, so further load shifts to the steel bar while aluminum holds what it has",
      ],
      answer: 3,
      explanation: `<p>The split P<sub>i</sub> &prop; A<sub>i</sub>E<sub>i</sub>/L assumes every member is still on its elastic slope. Once the aluminium yields, its tangent modulus collapses from 70 GPa to a small hardening slope, so each further increment of displacement produces almost no extra force in it and the steel, still elastic, picks up nearly all of the added load.</p>
<p>Note what does <em>not</em> happen. The aluminium keeps carrying the force it already had, plus a little more through strain hardening. Yield is not failure and it is not an off switch.</p>
<p>This redistribution is what makes ductile structures forgiving. A brittle member in the same position would crack and dump its entire share instantly, which is why designers hate a brittle load path in parallel with a ductile one. What limits the redistribution is the steel bar&rsquo;s own yield, or the total displacement the joint can tolerate.</p>`,
    },
    {
      id: "stress-strain-q10",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>An M12 property-class 8.8 bolt is preloaded to 25 kN. Its effective grip length is 60 mm, its tensile-stress area is 84.3 mm<sup>2</sup>, and E = 200 GPa. How far does the bolt stretch, in mm?</p>`,
      answer: 0.089,
      unit: "mm",
      tolerance: 0.03,
      explanation: `<p class="eq">&Delta;L = PL/(A<sub>t</sub>E) = (25000)(60)/[(84.3)(200000)]</p>
<p class="eq">&Delta;L = 1,500,000/16,860,000 = <strong>0.0890 mm</strong></p>
<p>Work in N, mm and N/mm<sup>2</sup>, so E = 200 GPa = 200,000 N/mm<sup>2</sup>. Under a tenth of a millimetre, and that tiny number <em>is</em> the preload. Bolt tightening is unforgiving for exactly this reason: lose 0.02 mm of stretch to embedment or gasket creep and a quarter of the clamp force goes with it.</p>
<p>It also explains why long bolts and stud-plus-nut arrangements hold preload better than short ones. For the same preload a longer grip stores more stretch, so the same absolute 0.02 mm loss costs a smaller fraction. Using the 113 mm<sup>2</sup> shank area instead of A<sub>t</sub> would under-predict the stretch by 25%.</p>`,
    },
    {
      id: "stress-strain-q11",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A tie rod is machined with a 20 mm diameter mid-section and 12 mm diameter ends, all in one piece, and pulled in tension. Before yield, what is true of the two sections?</p>`,
      choices: [
        "The larger section takes more force because it is the stiffer one",
        "Both carry the same force; the smaller section sees more stress",
        "Both sections see the same stress because they act in series",
        "The smaller section cannot stretch; the larger one restrains it",
      ],
      answer: 1,
      explanation: `<p>One load path in series means one internal force. Cut anywhere along the rod and the same P crosses the cut. Stress is then P/A, so the 12 mm ends see (20/12)<sup>2</sup> = 2.8 times the stress of the 20 mm middle.</p>
<p>Load splitting by stiffness is a <em>parallel</em> concept, and importing it into a series problem is the classic confusion. What does differ by section in series is the elongation, since each contributes PL/(AE), so the thin ends also stretch more per unit length.</p>
<p>Real hardware where this bites: a bolt with a reduced-diameter waist, deliberately the weakest and most compliant section so it is the designed failure point and holds preload well; a stepped shaft; a turnbuckle. This rod yields at the 12 mm ends, every time.</p>`,
    },
    {
      id: "stress-strain-q12",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A notched tie carries 10 kN through a net section of 80 mm<sup>2</sup>. The notch has K<sub>t</sub> = 2.4 and the material yield strength is 450 MPa. What is the factor of safety against <em>local</em> yielding at the notch root?</p>`,
      answer: 1.5,
      explanation: `<p class="eq">&sigma;<sub>nom</sub> = P/A = 10000/80 = 125 MPa</p>
<p class="eq">&sigma;<sub>local</sub> = K<sub>t</sub>&sigma;<sub>nom</sub> = 2.4(125) = 300 MPa</p>
<p class="eq">n = S<sub>y</sub>/&sigma;<sub>local</sub> = 450/300 = <strong>1.50</strong></p>
<p>Skipping K<sub>t</sub> gives n = 450/125 = 3.6 and a false sense of safety. Handbook K<sub>t</sub> values are usually referenced to the <em>net</em> section, so applying one to a gross-section stress double-counts or under-counts depending on the chart.</p>
<p>For a static load on a ductile material, local yielding at the notch root redistributes and the part survives well past n = 1. For fatigue, that notch root is where the crack starts and K<sub>t</sub> matters enormously.</p>`,
    },
    {
      id: "stress-strain-q13",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A cast aluminum bracket clears its static check with 3x margin on the net section, yet field returns keep cracking at the same spot: the inside corner of a machined slot, where nominal stress is 60 MPa. Which explanation do you chase first?</p>`,
      choices: [
        "Residual tension left by the final machining pass on the flats",
        "Fretting damage where the mounting clamp bears on the flange",
        "The sharp corner multiplies nominal stress far above 60 MPa",
        "The net section through the slot is undersized for static load",
      ],
      answer: 2,
      explanation: `<p>Location plus repetition is the tell. Every failure is at one geometric feature, and that feature is a sharp re-entrant corner. A near-zero root radius drives K<sub>t</sub> well past 3, so 60 MPa nominal can be 200 MPa or more locally, enough to initiate a fatigue crack in cast aluminium, whose as-cast fatigue strength is modest.</p>
<p>The other three are real mechanisms, which is why they are here. Machining residual stress matters but would not localise every failure at one corner. Fretting is a genuine bracket killer, but it appears under the clamped face rather than in the slot. And the static net-section check already passed with 3&times;, so this is not a static overload.</p>
<p>The fix is geometry, not material. Going from a 0.2 mm to a 3 mm root radius on a slot this size can cut K<sub>t</sub> nearly in half, worth more fatigue life than any alloy change available.</p>`,
    },
    {
      id: "stress-strain-q14",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A steel element in a bumper mount is stressed to 120 MPa and stays linear elastic (E = 200 GPa). How much strain energy per unit volume is stored, in kJ/m<sup>3</sup>?</p>`,
      answer: 36,
      unit: "kJ/m^3",
      explanation: `<p class="eq">u = &frac12;&sigma;&epsilon; = &sigma;<sup>2</sup>/(2E)</p>
<p class="eq">u = (120&times;10<sup>6</sup>)<sup>2</sup>/[2(200&times;10<sup>9</sup>)] = 1.44&times;10<sup>16</sup>/4&times;10<sup>11</sup></p>
<p class="eq">u = 36,000 J/m<sup>3</sup> = <strong>36 kJ/m<sup>3</sup></strong></p>
<p>For a linear elastic uniaxial state the energy density is the triangular area under the stress-strain line, and the units work because 1 Pa = 1 J/m<sup>3</sup>. This is the material&rsquo;s <em>resilience</em>, and it scales as &sigma;<sup>2</sup>/E, so a high-strength low-modulus material stores far more elastic energy per unit volume than a stiff one. Springs are made from high-strength steel and titanium rather than tungsten for that reason, and a stiff structure is a poor energy absorber.</p>`,
    },
    {
      id: "stress-strain-q15",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A tie bar has a 120 mm<sup>2</sup> cross-section and a 300 MPa yield strength. Design rules require a factor of safety of 2.5 on yield. What is the largest tensile load you may put on it, in kN?</p>`,
      answer: 14.4,
      unit: "kN",
      explanation: `<p class="eq">&sigma;<sub>allow</sub> = S<sub>y</sub>/n = 300/2.5 = 120 MPa</p>
<p class="eq">P<sub>allow</sub> = &sigma;<sub>allow</sub>A = (120 N/mm<sup>2</sup>)(120 mm<sup>2</sup>) = 14,400 N = <strong>14.4 kN</strong></p>
<p>Clean because 1 MPa = 1 N/mm<sup>2</sup>, and the coincidence that both numbers are 120 checks that you did not swap them.</p>
<p>What this number is not is an as-built capacity. It assumes 120 mm<sup>2</sup> is the true minimum section, with no holes, threads or weld undercut, that the load is purely axial with no eccentricity, and that the duty is static. Add a bolt hole and you work on the net section; add cyclic loading and yield is the wrong criterion entirely.</p>`,
    },
    {
      id: "stress-strain-q16",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A press operator overloads a mild steel link well past yield, then releases the press. Tracing the stress-strain path during the release, what does the curve do?</p>`,
      figure: figCurve,
      choices: [
        "It drops along a line of slope E, leaving permanent set",
        "It retraces the loading curve exactly back to zero strain",
        "It goes flat, since plastic strain contributes no stiffness",
        "It drops vertically, so all of the strain recovers at once",
      ],
      answer: 0,
      explanation: `<p>Unloading from the plastic region is an elastic process. The atomic bonds relax at the same stiffness they had originally, so the unloading line runs parallel to the initial elastic slope. At zero stress the elastic strain &sigma;/E has been recovered and the plastic strain remains as permanent set, which is the dashed red line in the figure.</p>
<p>Retracing the loading curve would mean zero permanent deformation after yielding, contradicting what plasticity means. A vertical drop would mean instant full recovery. A flat line would mean the stress could not fall at all.</p>
<p>Two consequences. A bent bracket springs back partway and stays bent, which is springback in sheet forming and why press brakes overbend. And reloading the link now behaves elastically all the way up to the previous peak stress, because the material has been work-hardened to a higher effective yield, at the cost of ductility.</p>`,
    },
    {
      id: "stress-strain-q17",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A tie is built from a steel segment (L = 0.80 m, A = 90 mm<sup>2</sup>, E = 200 GPa) butt-joined end to end with an aluminum segment (L = 0.60 m, A = 150 mm<sup>2</sup>, E = 70 GPa). Under 12 kN of tension, what is the total elongation, in mm?</p>`,
      answer: 1.22,
      unit: "mm",
      tolerance: 0.025,
      explanation: `<p>Series segments carry the same 12 kN, and their elongations add.</p>
<p class="eq">&Delta;L<sub>steel</sub> = (12000)(0.80)/[(90&times;10<sup>&minus;6</sup>)(200&times;10<sup>9</sup>)] = 0.533 mm</p>
<p class="eq">&Delta;L<sub>alum</sub> = (12000)(0.60)/[(150&times;10<sup>&minus;6</sup>)(70&times;10<sup>9</sup>)] = 0.686 mm</p>
<p class="eq">&Delta;L<sub>total</sub> = 0.533 + 0.686 = <strong>1.22 mm</strong></p>
<p>The aluminium segment contributes <em>more</em> stretch despite being shorter and having 67% more area, because AE is 10.5 MN for aluminium against 18 MN for steel. In series, compliance L/(AE) adds, so the softest link dominates.</p>
<p>To cut this tie&rsquo;s stretch, work on the aluminium. Doubling the steel area saves 0.27 mm; doubling the aluminium area saves 0.34 mm for less added mass.</p>`,
    },
    {
      id: "stress-strain-q18",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A wide plate is pulled axially while rigid side rails prevent any lateral strain. An FEA report shows a substantial transverse stress even though no transverse force is applied anywhere. Why?</p>`,
      choices: [
        "Stress follows applied force only, so no transverse stress exists",
        "Young's modulus converts axial stress into shear at the grips",
        "The transverse stress is an artifact of the constraint elements",
        "Blocking the Poisson contraction requires transverse stress, with no transverse force needed",
      ],
      answer: 3,
      explanation: `<p>Free in tension, the plate would contract laterally by &epsilon;<sub>lat</sub> = &minus;&nu;&epsilon;<sub>axial</sub>. The rails forbid that, so the material has to be held out to its original width, and only a transverse stress can do it. Setting &epsilon;<sub>y</sub> = 0 in the 2D Hooke&rsquo;s law gives &sigma;<sub>y</sub> = &nu;&sigma;<sub>x</sub>, so for steel 30% of the axial stress appears sideways with no sideways load in sight.</p>
<p>Stress arises from <em>either</em> applied traction or enforced displacement. Restrained thermal expansion, press fits, shrink fits, plane strain at the mid-thickness of a thick plate, and a constrained adhesive layer are all the same phenomenon.</p>
<p>It also makes things worse than they look. The resulting biaxial tension raises the hydrostatic stress and suppresses plastic flow, so heavily constrained material behaves in a more brittle way than a thin coupon of the very same alloy. That is the origin of the thickness effect in fracture toughness testing.</p>`,
    },
    {
      id: "stress-strain-q19",
      type: "mc",
      difficulty: 3,
      prompt: `<p>Past the ultimate point of a tensile test, the plotted engineering stress falls steadily while the specimen visibly necks, right up to fracture. What is actually happening in the material?</p>`,
      figure: figCurve,
      choices: [
        "The cross-section has grown, so the same load gives less stress",
        "Load over the original area falls while neck true stress rises",
        "Young's modulus drops, so the bar carries less stress than before",
        "The bar has unloaded elastically and no longer carries any force",
      ],
      answer: 1,
      explanation: `<p>Engineering stress is P/A<sub>0</sub>, forever divided by the original area. After the ultimate point, deformation localises into the neck: the local area collapses fast, so the load the specimen can carry falls even though the material in the neck is still work-hardening. Plot true stress against true strain and the curve keeps climbing to fracture.</p>
<p>The instability condition is worth knowing. Necking begins when d&sigma;<sub>true</sub>/d&epsilon;<sub>true</sub> = &sigma;<sub>true</sub>, Considere&rsquo;s criterion, the point where hardening can no longer outrun area loss. That is exactly the UTS on the engineering plot.</p>
<p>So UTS is not a stress the material fails at; it is the peak of a load-carrying instability. And past necking &sigma;<sub>true</sub> = &sigma;<sub>eng</sub>(1 + &epsilon;<sub>eng</sub>) no longer applies, because that conversion assumes uniform deformation. You have to measure the minimum neck diameter directly.</p>`,
    },
    {
      id: "stress-strain-q20",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>Whiteboard estimate: a 100 m steel wire rope hangs vertically from a crane drum with nothing on the hook. Using &rho; = 7850 kg/m<sup>3</sup> and E = 200 GPa, how much does the rope stretch under its own weight, in mm?</p>`,
      answer: 1.93,
      unit: "mm",
      tolerance: 0.04,
      explanation: `<p>The tension varies linearly from &rho;gAL at the top to zero at the bottom, so the average tension is half the total weight. Integrating P(x)dx/(AE):</p>
<p class="eq">&delta; = &rho;gL<sup>2</sup>/(2E)</p>
<p>The area cancels, so a thick rope and a thin rope of the same material and length stretch the same amount under self-weight.</p>
<p class="eq">&delta; = (7850)(9.81)(100)<sup>2</sup>/[2(200&times;10<sup>9</sup>)] = 7.70&times;10<sup>7</sup>/4&times;10<sup>11</sup></p>
<p class="eq">&delta; = 1.93&times;10<sup>&minus;3</sup> m = <strong>1.93 mm</strong></p>
<p>Forgetting the factor of 2, by using the full weight at every section, gives 3.85 mm. The stress at the top is &rho;gL = 7.70 MPa, trivial for steel, which is why self-weight only limits rope length at the kilometre scale, as in deep mine hoists where the classic answer is a tapered rope.</p>`,
    },
    {
      id: "stress-strain-q21",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A round bar is in pure uniaxial tension at &sigma; = 300 MPa, with no torsion and no bending. Considering every possible cutting plane through the bar, what is the largest shear stress present, and where?</p>`,
      choices: [
        "Zero; a purely tensile load produces no shear on any plane",
        "300 MPa, on the plane normal to the load axis",
        "150 MPa, on planes at 45&deg; to the load axis",
        "600 MPa, on planes at 45&deg; to the load axis",
      ],
      answer: 2,
      explanation: `<p class="eq">&tau;<sub>max</sub> = &sigma;/2 = 300/2 = <strong>150 MPa</strong></p>
<p>Resolve the force onto a plane inclined at &theta;. Both normal and tangential components scale, and the shear works out to &tau;(&theta;) = (&sigma;/2)sin2&theta;, maximised at &theta; = 45&deg;. Answering &ldquo;no shear because there is no shear load&rdquo; treats shear as a property of the loading label rather than of the plane you choose.</p>
<p>This single fact explains a lot of hardware. Ductile metals slip on the plane of maximum shear, so a mild steel coupon tears with a 45&deg; shear lip and a compressed ductile cylinder shears diagonally, while cast iron, limited by normal stress, breaks flat and square. It is also why Tresca compares &sigma;/2 with a shear yield of S<sub>y</sub>/2, and why a fracture surface tells you the failure mode before any calculation.</p>`,
    },
    {
      id: "stress-strain-q22",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A shell FEA of a bracket reports 640 MPa at a fillet where your hand calculation gives 120 MPa nominal. Looking at the model, the mesh has two elements across the fillet radius. What is the right next step?</p>`,
      choices: [
        "Refine the mesh at the fillet and confirm the peak converges",
        "Average the fillet stress over the whole bracket volume",
        "Discard the hand calculation, since it cannot resolve fillets",
        "Report the 640 MPa as-is; FEA resolves local stress correctly",
      ],
      answer: 0,
      explanation: `<p>Two elements across a radius cannot resolve a stress gradient, so 640 MPa is a mesh-dependent number rather than a material demand. Refine until the peak stops moving, typically three to five quadratic elements through the radius, and only then compare it with yield.</p>
<p>The hand calculation is not wrong, it answers a different question. 120 MPa is the nominal section stress that sizes the member; the FEA peak is the local hot-spot stress that drives yielding and fatigue initiation. A competent review carries both.</p>
<p>Two related failures. If the CAD has a sharp corner rather than a real fillet, the elastic solution is <em>singular</em>, the stress rises without limit as the mesh refines, and there is no converged answer to find. And a converged 640 MPa peak in a ductile material under static load is often acceptable, because local plasticity redistributes. Under cyclic load it is not.</p>`,
    },
    {
      id: "stress-strain-q23",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A quarter-bridge gage on an exhaust bracket reads 900 microstrain at idle. Ten minutes into a load hold it reads 1500 microstrain, but an inline load cell shows the mechanical load never changed. What do you fix first?</p>`,
      choices: [
        "Raise the bridge excitation voltage to improve signal-to-noise",
        "Re-zero the amplifier once the bracket reaches steady state",
        "Switch to a stiffer adhesive so the gage tracks the part better",
        "Add a dummy gage on unloaded material at the same temperature",
      ],
      answer: 3,
      explanation: `<p>The bracket got hot. A bonded gauge responds to temperature three ways at once: the foil&rsquo;s own resistance drifts, the gauge factor shifts slightly, and the part expands underneath the gauge. Together that is <em>thermal output</em>, or apparent strain, and 600 &mu;&epsilon; of drift over a 100 &deg;C rise is entirely typical.</p>
<p>The standard fix is a compensating dummy gauge on an unloaded coupon of the same material at the same temperature, wired into the adjacent bridge arm so the common-mode thermal signal subtracts out. A self-temperature-compensated gauge matched to the substrate&rsquo;s &alpha; helps, but only over its rated range.</p>
<p>More excitation raises self-heating and makes drift worse. Re-zeroing works only if the temperature has stabilised, and here it is still climbing. Adhesive stiffness affects strain transfer at high strain, not slow thermal drift. With 1500 &mu;&epsilon; on steel you would report 300 MPa and send a whole team chasing a load that does not exist.</p>`,
    },
    {
      id: "stress-strain-q24",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>Continuously welded rail is clamped to the ties and was destressed at its neutral temperature. Rail section area is 7700 mm<sup>2</sup>, E = 200 GPa, and &alpha; = 11.5&times;10<sup>&minus;6</sup>/&deg;C. Track standards cap the compressive force in the rail at 600 kN. How far above the neutral temperature may the rail go, in &deg;C?</p>`,
      answer: 33.9,
      unit: "deg C",
      tolerance: 0.03,
      explanation: `<p>A clamped rail cannot grow, so the whole thermal strain becomes stress. Turn the force cap into a stress cap first:</p>
<p class="eq">&sigma; = P/A = 600,000/(7700&times;10<sup>&minus;6</sup>) = 77.9&times;10<sup>6</sup> Pa = 77.9 MPa</p>
<p>Then invert the restrained thermal stress relation:</p>
<p class="eq">&Delta;T = &sigma;/(E&alpha;) = 77.9&times;10<sup>6</sup>/[(200&times;10<sup>9</sup>)(11.5&times;10<sup>&minus;6</sup>)] = <strong>33.9 &deg;C</strong></p>
<p>Rail length never appears, which is the whole point of continuously welded rail: shorter rails do not solve the problem. Instead the track is <em>destressed</em>, laid or stretched so its neutral temperature sits near the middle of the expected range, typically 27&ndash;32 &deg;C, so neither summer compression nor winter tension exceeds the limit.</p>
<p>Rail steel in full sun runs about 20 &deg;C above air temperature, so a 35 &deg;C day puts rail near 55 &deg;C. With a neutral temperature of 30 &deg;C that is &Delta;T = 25 &deg;C, inside the 33.9 &deg;C allowance. It is also why heat waves trigger speed restrictions, and why the failure mode is lateral track buckling, a sun kink, rather than a rail fracture.</p>`,
    },
  ],
  qna: [
    {
      id: "stress-strain-qa01",
      q: `<p>A customer says a machined link "moves too much" under load. Walk me through how you would diagnose and fix it.</p>`,
      a: `<p>First separate elastic deflection from permanent set, because they have different fixes. Load the link, unload it, and measure. If it returns to its original dimension the problem is stiffness. If it does not, something yielded and the problem is strength or a stress concentration.</p>
<p>For stiffness the governing relation is &Delta; = PL/(AE) for axial, or something proportional to PL<sup>3</sup>/(EI) if it is really bending. So the levers are geometry, span, boundary conditions and modulus, in that order of practical payoff. Check the whole load path too, because compliance adds in series: a soft grommet, a bearing clearance or a flexible mounting bracket often contributes more motion than the link itself, and no amount of beefing up the link will help.</p>
<p>The change to push back on is &ldquo;use a stronger alloy&rdquo;. All steels sit near E = 200 GPa, so a higher-yield grade does nothing for elastic motion. If it is permanent set, then strength is the right lever, and you should also look for a sharp corner or a hole where K<sub>t</sub> pushed local stress past yield while the nominal stress looked fine.</p>`,
    },
    {
      id: "stress-strain-qa02",
      q: `<p>What is the difference between stiffness and strength, and when has that distinction cost you?</p>`,
      a: `<p>Stiffness is resistance to elastic deformation; strength is the stress at which permanent deformation or fracture begins. Axial stiffness is AE/L, bending stiffness is EI, and neither contains a strength term. Yield strength S<sub>y</sub> is a stress limit and says nothing about how far the part moves on the way there.</p>
<p>Heat treatment and alloying change strength dramatically and modulus almost not at all. 7075-T6 aluminium is roughly twice as strong as 6061-T6 and both sit near E = 70 GPa. Quenched-and-tempered 4340 can reach four times the yield of mild steel with the same 200 GPa.</p>
<p>So when someone reports a deflection problem and proposes a material upgrade, stop and ask which failure mode we actually have. If it bends too much, change geometry, shorten the span, add a rib, or move to a genuinely higher-modulus material. If it takes a permanent set, compare stress to strength, include stress concentrations and the real safety factor, and confirm whether the governing check is yield, fatigue or buckling. A slender strut that is buckling-limited does not care about yield strength either.</p>`,
    },
    {
      id: "stress-strain-qa03",
      q: `<p>Temperature is not a mechanical load. So how do thermal stresses arise, and what makes the real cases harder than the textbook one?</p>`,
      a: `<p>Thermal strain is a free strain: a material wants to change length by &alpha;&Delta;T. If nothing blocks it, the part moves and there is no stress at all. Stress appears only when compatibility prevents the free motion. For a fully restrained bar, total strain must be zero, so mechanical strain is &minus;&alpha;&Delta;T and Hooke&rsquo;s law gives &sigma; = E&alpha;&Delta;T, compressive on heating and tensile on cooling. Length cancels entirely, which surprises people.</p>
<p>Real assemblies are harder in three ways. Restraint is rarely rigid, and with a support of finite stiffness the force is &alpha;&Delta;T&middot;L/(1/k<sub>bar</sub> + 1/k<sub>support</sub>), so a support as stiff as the bar halves the stress. Clearance gaps mean nothing happens until the gap closes and only the excess expansion builds stress. And most commonly, the restraint is another material: an aluminium spacer inside a steel bolt, or a copper trace on an FR-4 board. Then the driver is the <em>mismatch</em> &Delta;&alpha;, and the stress depends on both stiffnesses and both areas.</p>
<p>The design levers follow directly. Add a slot or slip joint, use a flexure, match the CTEs, or deliberately let something yield or creep as the compliant member.</p>`,
    },
    {
      id: "stress-strain-qa04",
      q: `<p>How do you size a pin, and what is the mistake you see most often?</p>`,
      a: `<p>Start by counting shear planes. A pin in a clevis is cut by two planes, so each carries P/2 and &tau; = P/(2 &middot; &pi;d<sup>2</sup>/4). The same pin in a two-plate lap joint is cut once and sees twice the stress. That factor of 2 is the most common mistake here, and it goes both ways: applying the double-shear formula to a single-shear joint undersizes the pin by 41%, since d scales with the square root of the required area.</p>
<p>Then check the other three modes on the same joint, because the pin is rarely the weakest thing. Bearing on the hole wall uses the projected area d&middot;t and is what makes holes go oval in service. Tear-out is the pin ripping a plug of material out toward the free edge, resisted by two planes of area (e &minus; d/2)t, which is why edge distance is typically specified at two hole diameters. And net-section tension through the reduced ligament is what actually breaks the plate.</p>
<p>Design capacity is the smallest of the four, and a well-proportioned joint keeps them roughly balanced. Then ask whether the pin also bends: a long unsupported pin in a sloppy fit sees bending on top of shear, which is why clevis clearances are held tight and pins are supported close to the load.</p>`,
    },
    {
      id: "stress-strain-qa05",
      q: `<p>Two members share a load. How do you decide who carries what, and what if statics alone cannot tell you?</p>`,
      a: `<p>In <strong>series</strong>, statics answers it immediately. The same force passes through both, so the smaller-area member sees higher stress and the elongations add. Total compliance is the sum of L/(AE), so the softest member dominates the motion, and a rubber grommet or a gasket can swamp a solid aluminium bracket in the same load path.</p>
<p>In <strong>parallel</strong> between rigid plates, statics gives one equation and two unknowns, so the structure is indeterminate and you need compatibility. Equal deformation means load splits by stiffness AE/L, and the stiffer path attracts more load even with less area: steel at 100 mm<sup>2</sup> beats aluminium at 200 mm<sup>2</sup> because 100(200) = 20,000 exceeds 200(70) = 14,000.</p>
<p>Assuming load splits by area alone is only true when E and L match. A subtler point: equal strain makes the stress ratio equal the modulus ratio, so the stiffer material is also the one working closest to its yield. Steel in that pair sees 2.86 times the aluminium&rsquo;s stress and will usually yield first despite carrying only 59% of the load. Once one member yields the elastic split stops applying and load redistributes to whatever is still elastic.</p>`,
    },
    {
      id: "stress-strain-qa06",
      q: `<p>When do you need true stress-strain instead of engineering values, and what exactly breaks at necking?</p>`,
      a: `<p>Engineering stress and strain use the original area and gauge length. They are the right thing for test reporting, elastic design checks, and anything where strains are under a percent or two, which covers nearly all structural work.</p>
<p>True stress and strain use the instantaneous area and integrate the incremental stretch: &sigma;<sub>true</sub> = P/A<sub>inst</sub> and &epsilon;<sub>true</sub> = ln(1 + &epsilon;<sub>eng</sub>). You need them whenever plastic strain is large, so sheet forming, deep drawing, crash and impact, bolt thread rolling, and any nonlinear FEA material card.</p>
<p>The conversion &sigma;<sub>true</sub> = &sigma;<sub>eng</sub>(1 + &epsilon;<sub>eng</sub>) rests on two assumptions: deformation uniform along the gauge length, and plastic flow conserving volume. Necking kills the first. Once strain localises, the gauge length no longer describes what is happening in the neck, the engineering curve turns down because load falls while A<sub>0</sub> stays in the denominator, and true stress in the neck keeps rising to fracture.</p>
<p>Past that point you cannot convert. You measure the minimum neck diameter, and even then a Bridgman triaxiality correction is needed because the neck is no longer in uniaxial tension. For forming cards, people fit a hardening law to the uniform region and extrapolate, or use inverse FE to match the measured load-displacement curve.</p>`,
    },
    {
      id: "stress-strain-qa07",
      q: `<p>What is a stress concentration, when does it actually matter, and how do you reduce it?</p>`,
      a: `<p>A stress concentration is a local amplification of stress caused by an abrupt change in geometry: holes, sharp internal corners, keyways, grooves, thread roots, section changes. The elastic peak is K<sub>t</sub> times the nominal stress, where nominal is usually referenced to the net section. Typical values are about 3 for a round hole in a wide plate and easily 5 or more for a sharp corner.</p>
<p>When it matters depends on the failure mode. Under a <em>static</em> load on a ductile material, local yielding blunts the peak and redistributes load, so a part can survive K<sub>t</sub>&sigma;<sub>nom</sub> well above yield, which is why ductile static design often ignores K<sub>t</sub>. Under <em>fatigue</em>, or in a brittle material, or at low temperature, that notch root is exactly where the crack starts and K<sub>t</sub> dominates life. Fatigue uses K<sub>f</sub>, somewhat less than K<sub>t</sub> through the notch sensitivity factor, but the effect is still large.</p>
<p>Reductions are all about smoothing the load path: generous fillet radii, never a sharp re-entrant corner, relief grooves that spread the transition, holes moved out of the peak-stress region, more material so the net section grows, better surface finish at the critical feature. Compressive residual stress from shot peening or cold expansion of holes is very effective for fatigue. Radiusing a corner is nearly always cheaper and more effective than upgrading the alloy.</p>`,
    },
    {
      id: "stress-strain-qa08",
      q: `<p>Why does a pressurized can, a hot dog, or an over-pressured pipe split along its length rather than snapping in two?</p>`,
      a: `<p>Because hoop stress is twice longitudinal stress in a thin-wall cylinder. Cut the cylinder lengthwise: pressure acts on the projected area 2rL and is resisted by two wall strips of area tL, giving &sigma;<sub>hoop</sub> = pr/t. Cut it across: pressure acts on &pi;r<sup>2</sup> and is resisted by a ring of area 2&pi;rt, giving &sigma;<sub>long</sub> = pr/2t. The ratio is exactly 2:1, independent of pressure and material.</p>
<p>A crack grows perpendicular to the largest tensile stress, and the largest is hoop, acting circumferentially. A crack that opens against hoop stress runs axially, so the split is lengthwise. The hot dog demonstration works every time for the same reason.</p>
<p>Design consequences worth naming. Hoop governs wall thickness, so t = pr/&sigma;<sub>allow</sub>. Longitudinal seams in welded pipe see the full hoop stress and get the strictest inspection, which is why spiral-welded pipe exists, since a helical seam sees a resolved component instead. The end caps see only the longitudinal stress, so they are usually not the critical section, though a flat cap is far worse than a hemispherical one because a flat plate carries pressure in bending rather than membrane tension. And the whole set of formulas needs r/t above roughly 10; below that the through-thickness gradient matters and you need thick-wall Lam&eacute;.</p>`,
    },
    {
      id: "stress-strain-qa09",
      q: `<p>You are handed a failed part. What do you read off the fracture surface before doing any calculation?</p>`,
      a: `<p>First, ductile or brittle. A ductile overload shows visible plastic deformation, necking or thinning near the break, and a fibrous grey surface, classically a cup-and-cone in a round bar with a 45&deg; shear lip around the rim, because ductile metals slip on the plane of maximum shear, which in uniaxial tension is 45&deg; at &tau; = &sigma;/2. A brittle fracture is flat and square to the load with little or no deformation, and looks either shiny and faceted for cleavage or granular for intergranular.</p>
<p>Second, single overload or fatigue. Fatigue leaves a smooth, often burnished region with beach marks curving away from an initiation site, and a rough final-fracture zone where the remaining ligament let go. The size of that final zone tells you how highly stressed the part was: small means low nominal stress and a long crack tolerated, large means the part was near its static limit.</p>
<p>Third, where it started. Initiation almost always sits at a stress concentration: a thread root, a sharp corner, a tool mark, a corrosion pit, a weld toe. Ratchet marks along an edge mean multiple initiation sites, which points to a high stress concentration or a high nominal stress.</p>
<p>Only then calculate. The surface has already told you whether to chase a load case, a geometry, a material change or a manufacturing defect, and that decides which calculation is even worth doing.</p>`,
    },
    {
      id: "stress-strain-qa10",
      q: `<p>Why is Poisson's ratio near 0.5 special, and what does it do to a rubber part pressed into a rigid bore?</p>`,
      a: `<p>Poisson&rsquo;s ratio links lateral to axial strain, &epsilon;<sub>lat</sub> = &minus;&nu;&epsilon;<sub>axial</sub>. The important consequence is volumetric: for a uniaxial state, &Delta;V/V = &epsilon;(1 &minus; 2&nu;). At &nu; = 0.5 that factor is exactly zero, so the material deforms at constant volume and is <em>incompressible</em>. Rubber sits at about 0.4995; metals near 0.3 lose about 40% of the axial strain to volume change; cork is close to 0, which is why it goes into a bottle without bulging.</p>
<p>The bulk modulus tells the same story. K = E/[3(1 &minus; 2&nu;)] blows up as &nu; approaches 0.5, so rubber has a shear modulus of about 1 MPa but a bulk modulus around 2 GPa. Three orders of magnitude apart: soft in shear, essentially as incompressible as water.</p>
<p>Now confine it. A rubber plug in a close-fitting rigid bore cannot bulge sideways and cannot compress in volume either, so it stops behaving like a spring and starts behaving like a trapped fluid, with stiffness up by orders of magnitude and nearly hydrostatic pressure transmitted to the wall. Elastomer mounts are designed with a shape factor and free bulge surfaces for that reason, an O-ring in a properly sized groove seals by pressure transmission rather than by squash, and over-filling a groove or a bonded pad kills the isolation you were paying for. It is also a well-known FEA pitfall, since standard displacement elements lock at &nu; near 0.5 and you need hybrid or mixed formulations.</p>`,
    },
  ],
};

export default content;
