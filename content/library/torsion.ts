import type { TopicContent } from "../types";

// ---------------------------------------------------------------------------
// Torsion of Shafts
// ---------------------------------------------------------------------------

// Lesson fig 1 — the shear-stress distribution itself: linear in radius, zero
// on the axis, maximum at the surface. Cross-section on the left, the plotted
// distribution on the right.
const figStress = `<svg viewBox="0 0 460 268" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="to1-tq" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="to1-ax" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Shear is linear in radius: &tau;(&rho;) = T&rho;/J, zero on the axis</text>
  <!-- applied torque, drawn around the section -->
  <path d="M45.9,103 A74,74 0 0 1 174.1,103" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#to1-tq)"/>
  <text x="184" y="98" fill="#dc2626" font-weight="600">T</text>
  <!-- cross-section -->
  <circle cx="110" cy="140" r="62" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <circle cx="110" cy="140" r="3.5" fill="#334155"/>
  <line x1="110" y1="140" x2="172" y2="140" stroke="#64748b" stroke-width="1"/>
  <line x1="172" y1="134" x2="172" y2="146" stroke="#64748b" stroke-width="1"/>
  <text x="141" y="132" text-anchor="middle" fill="#64748b" font-size="12">c</text>
  <line x1="110" y1="140" x2="129" y2="107" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <circle cx="129" cy="107" r="3" fill="#1d4ed8"/>
  <text x="137" y="102" fill="#1d4ed8" font-size="12">&rho;</text>
  <text x="110" y="222" text-anchor="middle" fill="#64748b" font-size="12">cross-section</text>
  <!-- distribution plot -->
  <line x1="252" y1="200" x2="404" y2="200" stroke="#64748b" stroke-width="1.5" marker-end="url(#to1-ax)"/>
  <line x1="252" y1="200" x2="252" y2="72" stroke="#64748b" stroke-width="1.5" marker-end="url(#to1-ax)"/>
  <text x="414" y="205" fill="#64748b" font-size="12">&rho;</text>
  <text x="242" y="76" text-anchor="end" fill="#64748b" font-size="12">&tau;</text>
  <polygon points="252,200 388,94 388,200" fill="#fee2e2"/>
  <line x1="252" y1="200" x2="388" y2="94" stroke="#dc2626" stroke-width="2.5"/>
  <line x1="252" y1="94" x2="388" y2="94" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="388" y1="94" x2="388" y2="200" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <text x="258" y="88" fill="#dc2626" font-weight="600" font-size="12">&tau;<tspan baseline-shift="sub" font-size="9">max</tspan> = Tc/J</text>
  <text x="252" y="218" text-anchor="middle" fill="#64748b" font-size="12">&rho; = 0</text>
  <text x="388" y="218" text-anchor="middle" fill="#64748b" font-size="12">&rho; = c</text>
  <text x="20" y="248" fill="#64748b" font-size="12">The core carries little shear: a solid centre is mostly dead mass.</text>
</svg>`;

// Lesson fig 2 — angle-of-twist geometry: fixed end, surface fibre, end view
// with the reference mark and the swept angle.
const figTwist = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="to2-dim" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
    <marker id="to2-tq" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Angle of twist &theta; = TL/GJ, measured from the undeformed mark</text>
  <text x="54" y="72" text-anchor="middle" fill="#334155" font-weight="600">fixed end</text>
  <!-- wall -->
  <line x1="54" y1="84" x2="54" y2="186" stroke="#334155" stroke-width="3"/>
  <line x1="42" y1="98" x2="54" y2="86" stroke="#64748b" stroke-width="1"/>
  <line x1="42" y1="120" x2="54" y2="108" stroke="#64748b" stroke-width="1"/>
  <line x1="42" y1="142" x2="54" y2="130" stroke="#64748b" stroke-width="1"/>
  <line x1="42" y1="164" x2="54" y2="152" stroke="#64748b" stroke-width="1"/>
  <line x1="42" y1="186" x2="54" y2="174" stroke="#64748b" stroke-width="1"/>
  <!-- shaft -->
  <rect x="54" y="104" width="246" height="60" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <line x1="54" y1="104" x2="300" y2="126" stroke="#1d4ed8" stroke-width="2.5"/>
  <text x="196" y="150" text-anchor="middle" fill="#1d4ed8" font-size="12">surface fibre after twist</text>
  <!-- end view -->
  <text x="382" y="66" text-anchor="middle" fill="#64748b" font-size="12">mark before twist</text>
  <circle cx="382" cy="120" r="44" fill="#e2e8f0" stroke="#334155" stroke-width="1.8"/>
  <circle cx="382" cy="120" r="3.5" fill="#334155"/>
  <line x1="382" y1="120" x2="382" y2="76" stroke="#64748b" stroke-width="1.6" stroke-dasharray="5 4"/>
  <line x1="382" y1="120" x2="420" y2="98" stroke="#1d4ed8" stroke-width="2.5"/>
  <path d="M382,102 A18,18 0 0 1 397.6,111" fill="none" stroke="#dc2626" stroke-width="1.6"/>
  <text x="397" y="94" text-anchor="middle" fill="#dc2626" font-weight="600">&theta;</text>
  <path d="M371.9,177.1 A58,58 0 0 1 324.9,130.1" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#to2-tq)"/>
  <text x="326" y="178" text-anchor="end" fill="#dc2626" font-weight="600">T</text>
  <!-- length dimension -->
  <line x1="54" y1="200" x2="300" y2="200" stroke="#64748b" stroke-width="1" marker-start="url(#to2-dim)" marker-end="url(#to2-dim)"/>
  <line x1="54" y1="194" x2="54" y2="206" stroke="#64748b" stroke-width="1"/>
  <line x1="300" y1="194" x2="300" y2="206" stroke="#64748b" stroke-width="1"/>
  <text x="177" y="194" text-anchor="middle" fill="#64748b" font-size="12">L</text>
  <text x="20" y="234" fill="#64748b" font-size="12">Twist exaggerated for clarity; real service twist is a few degrees.</text>
</svg>`;

// Lesson fig 3 — solid bar vs tube at EQUAL MASS (equal cross-sectional area),
// with both J values and both peak stresses for the same applied torque.
const figHollow = `<svg viewBox="0 0 460 286" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="to3-dim" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Equal mass, unequal torsion: same area A = 1257 mm&sup2;</text>
  <!-- solid -->
  <circle cx="118" cy="112" r="40" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <circle cx="118" cy="112" r="3.5" fill="#334155"/>
  <line x1="78" y1="112" x2="78" y2="202" stroke="#64748b" stroke-width="1"/>
  <line x1="158" y1="112" x2="158" y2="202" stroke="#64748b" stroke-width="1"/>
  <line x1="78" y1="196" x2="158" y2="196" stroke="#64748b" stroke-width="1" marker-start="url(#to3-dim)" marker-end="url(#to3-dim)"/>
  <text x="118" y="190" text-anchor="middle" fill="#64748b" font-size="12">&oslash;40</text>
  <!-- tube -->
  <circle cx="310" cy="112" r="60" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <circle cx="310" cy="112" r="44.7" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <circle cx="310" cy="112" r="3.5" fill="#334155"/>
  <line x1="250" y1="112" x2="250" y2="202" stroke="#64748b" stroke-width="1"/>
  <line x1="370" y1="112" x2="370" y2="202" stroke="#64748b" stroke-width="1"/>
  <line x1="250" y1="196" x2="370" y2="196" stroke="#64748b" stroke-width="1" marker-start="url(#to3-dim)" marker-end="url(#to3-dim)"/>
  <text x="310" y="190" text-anchor="middle" fill="#64748b" font-size="12">&oslash;60</text>
  <line x1="250" y1="106" x2="250" y2="118" stroke="#64748b" stroke-width="1"/>
  <line x1="265" y1="106" x2="265" y2="118" stroke="#64748b" stroke-width="1"/>
  <line x1="250" y1="112" x2="265" y2="112" stroke="#64748b" stroke-width="1"/>
  <line x1="250" y1="112" x2="224" y2="140" stroke="#64748b" stroke-width="1"/>
  <text x="220" y="144" text-anchor="end" fill="#64748b" font-size="12">wall 7.6</text>
  <!-- names and numbers -->
  <text x="118" y="218" text-anchor="middle" font-weight="600" fill="#334155">solid bar</text>
  <text x="310" y="218" text-anchor="middle" font-weight="600" fill="#334155">hollow tube</text>
  <text x="118" y="238" text-anchor="middle" fill="#1d4ed8" font-size="12">J = 2.51 &times; 10&#8309; mm&#8308;</text>
  <text x="118" y="256" text-anchor="middle" fill="#1d4ed8" font-size="12">&tau;<tspan baseline-shift="sub" font-size="9">max</tspan> = 39.8 MPa</text>
  <text x="310" y="238" text-anchor="middle" fill="#1d4ed8" font-size="12">J = 8.80 &times; 10&#8309; mm&#8308;</text>
  <text x="310" y="256" text-anchor="middle" fill="#1d4ed8" font-size="12">&tau;<tspan baseline-shift="sub" font-size="9">max</tspan> = 17.1 MPa</text>
  <text x="20" y="278" fill="#64748b" font-size="12">Same mass, T = 500 N&middot;m: the tube has 3.5&times; the J and 2.3&times; less peak shear.</text>
</svg>`;

// Lesson fig 4 — the classic "why did this shaft break?" figure: pure torsion
// is pure shear, so ductile metals shear off flat and brittle ones tear on the
// 45 degree tensile plane.
const figFracture = `<svg viewBox="0 0 460 288" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="to4-tq" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="to4-sh" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Reading a torsion fracture surface</text>
  <!-- ductile -->
  <path d="M60,54 A90,90 0 0 1 140,54" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#to4-tq)"/>
  <text x="150" y="52" fill="#dc2626" font-weight="600">T</text>
  <rect x="34" y="62" width="156" height="44" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <line x1="124" y1="58" x2="124" y2="110" stroke="#dc2626" stroke-width="3"/>
  <text x="112" y="132" text-anchor="middle" font-weight="600" fill="#334155">Ductile (mild steel)</text>
  <text x="112" y="150" text-anchor="middle" fill="#64748b" font-size="12">flat break, 90&deg; to the axis</text>
  <text x="112" y="168" text-anchor="middle" fill="#64748b" font-size="12">yields on the max-shear plane</text>
  <!-- brittle -->
  <path d="M276,54 A90,90 0 0 1 356,54" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#to4-tq)"/>
  <text x="366" y="52" fill="#dc2626" font-weight="600">T</text>
  <rect x="250" y="62" width="156" height="44" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <line x1="312" y1="110" x2="364" y2="58" stroke="#dc2626" stroke-width="3"/>
  <path d="M336,110 A24,24 0 0 0 329,93" fill="none" stroke="#64748b" stroke-width="1.2"/>
  <text x="346" y="100" fill="#64748b" font-size="12">45&deg;</text>
  <text x="328" y="132" text-anchor="middle" font-weight="600" fill="#334155">Brittle (cast iron)</text>
  <text x="328" y="150" text-anchor="middle" fill="#64748b" font-size="12">45&deg; helical break</text>
  <text x="328" y="168" text-anchor="middle" fill="#64748b" font-size="12">tears on the max-tension plane</text>
  <!-- pure-shear element -->
  <rect x="76" y="196" width="68" height="68" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
  <line x1="82" y1="188" x2="138" y2="188" stroke="#dc2626" stroke-width="1.8" marker-end="url(#to4-sh)"/>
  <line x1="138" y1="272" x2="82" y2="272" stroke="#dc2626" stroke-width="1.8" marker-end="url(#to4-sh)"/>
  <line x1="152" y1="258" x2="152" y2="202" stroke="#dc2626" stroke-width="1.8" marker-end="url(#to4-sh)"/>
  <line x1="68" y1="202" x2="68" y2="258" stroke="#dc2626" stroke-width="1.8" marker-end="url(#to4-sh)"/>
  <line x1="66" y1="274" x2="154" y2="186" stroke="#1d4ed8" stroke-width="1.6" stroke-dasharray="5 4"/>
  <line x1="66" y1="186" x2="154" y2="274" stroke="#64748b" stroke-width="1.6" stroke-dasharray="5 4"/>
  <text x="162" y="182" fill="#1d4ed8" font-weight="600" font-size="12">&sigma;<tspan baseline-shift="sub" font-size="9">1</tspan></text>
  <text x="58" y="182" text-anchor="end" fill="#64748b" font-weight="600" font-size="12">&sigma;<tspan baseline-shift="sub" font-size="9">3</tspan></text>
  <text x="200" y="200" fill="#334155" font-size="12">Pure torsion = pure shear.</text>
  <text x="200" y="220" fill="#334155" font-size="12">&sigma;<tspan baseline-shift="sub" font-size="9">1</tspan> = +&tau; at 45&deg;; &sigma;<tspan baseline-shift="sub" font-size="9">3</tspan> = &minus;&tau; at &minus;45&deg;.</text>
  <text x="200" y="244" fill="#64748b" font-size="12">Ductile: shear yields first &rarr; flat face.</text>
  <text x="200" y="264" fill="#64748b" font-size="12">Brittle: tension parts first &rarr; 45&deg; helix.</text>
</svg>`;

// --- question figures -------------------------------------------------------

// q01 — how the torque is actually shared across the radius. Four equal-width
// radius bands, each labelled with the share of T it carries (rho^4 weighting).
const figCore = `<svg viewBox="0 0 460 262" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="to10-dim" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Torque carried inside radius &rho; scales as &rho;&#8308;</text>
  <circle cx="112" cy="150" r="78" fill="#fee2e2" stroke="#334155" stroke-width="1.8"/>
  <circle cx="112" cy="150" r="58.5" fill="#dbeafe" stroke="#64748b" stroke-width="1"/>
  <circle cx="112" cy="150" r="39" fill="#e2e8f0" stroke="#64748b" stroke-width="1"/>
  <circle cx="112" cy="150" r="19.5" fill="#f8fafc" stroke="#64748b" stroke-width="1"/>
  <circle cx="112" cy="150" r="3.5" fill="#334155"/>
  <line x1="112" y1="150" x2="190" y2="150" stroke="#64748b" stroke-width="1" marker-end="url(#to10-dim)"/>
  <text x="152" y="138" text-anchor="middle" fill="#64748b" font-size="12">c</text>
  <text x="112" y="246" text-anchor="middle" fill="#64748b" font-size="12">four equal radius bands</text>
  <!-- bar chart -->
  <text x="234" y="58" fill="#334155" font-weight="600" font-size="12">share of the torque carried</text>
  <rect x="330" y="70" width="68" height="17" fill="#fee2e2" stroke="#334155" stroke-width="1"/>
  <text x="326" y="83" text-anchor="end" fill="#64748b" font-size="12">0.75c to c</text>
  <text x="404" y="83" fill="#334155" font-size="12">68.4%</text>
  <rect x="330" y="104" width="25" height="17" fill="#dbeafe" stroke="#334155" stroke-width="1"/>
  <text x="326" y="117" text-anchor="end" fill="#64748b" font-size="12">0.50c to 0.75c</text>
  <text x="361" y="117" fill="#334155" font-size="12">25.4%</text>
  <rect x="330" y="138" width="6" height="17" fill="#e2e8f0" stroke="#334155" stroke-width="1"/>
  <text x="326" y="151" text-anchor="end" fill="#64748b" font-size="12">0.25c to 0.50c</text>
  <text x="342" y="151" fill="#334155" font-size="12">5.9%</text>
  <rect x="330" y="172" width="2" height="17" fill="#f8fafc" stroke="#334155" stroke-width="1"/>
  <text x="326" y="185" text-anchor="end" fill="#64748b" font-size="12">0 to 0.25c</text>
  <text x="338" y="185" fill="#334155" font-size="12">0.4%</text>
  <text x="234" y="216" fill="#64748b" font-size="12">Inner half-radius: 25% of the area,</text>
  <text x="234" y="234" fill="#64748b" font-size="12">6.3% of the torque.</text>
</svg>`;

// q08 — two failed specimens, deliberately unlabelled as to material. The
// candidate has to read the fracture planes, not a caption.
const figFractureQ = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="to11-tq" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Same diameter, same pure-torque test, two fracture planes</text>
  <!-- specimen A -->
  <path d="M76,52 A70,70 0 0 1 164,52" fill="none" stroke="#dc2626" stroke-width="2.4" marker-end="url(#to11-tq)"/>
  <text x="174" y="50" fill="#dc2626" font-weight="600">T</text>
  <rect x="40" y="64" width="170" height="58" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <line x1="32" y1="93" x2="218" y2="93" stroke="#64748b" stroke-width="0.9" stroke-dasharray="8 3 2 3"/>
  <line x1="150" y1="56" x2="150" y2="130" stroke="#dc2626" stroke-width="3.2"/>
  <path d="M178,93 A28,28 0 0 0 150,65" fill="none" stroke="#64748b" stroke-width="1.2"/>
  <text x="182" y="76" fill="#64748b" font-size="12">90&deg;</text>
  <text x="125" y="152" text-anchor="middle" font-weight="600" fill="#334155">Specimen A</text>
  <text x="125" y="170" text-anchor="middle" fill="#64748b" font-size="12">break square to the axis</text>
  <!-- specimen B -->
  <path d="M286,52 A70,70 0 0 1 374,52" fill="none" stroke="#dc2626" stroke-width="2.4" marker-end="url(#to11-tq)"/>
  <text x="384" y="50" fill="#dc2626" font-weight="600">T</text>
  <rect x="250" y="64" width="170" height="58" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <line x1="242" y1="93" x2="428" y2="93" stroke="#64748b" stroke-width="0.9" stroke-dasharray="8 3 2 3"/>
  <line x1="326" y1="122" x2="384" y2="64" stroke="#dc2626" stroke-width="3.2"/>
  <path d="M383,93 A28,28 0 0 0 374.8,73.2" fill="none" stroke="#64748b" stroke-width="1.2"/>
  <text x="386" y="78" fill="#64748b" font-size="12">45&deg;</text>
  <text x="335" y="152" text-anchor="middle" font-weight="600" fill="#334155">Specimen B</text>
  <text x="335" y="170" text-anchor="middle" fill="#64748b" font-size="12">break on a 45&deg; helix</text>
  <text x="20" y="200" fill="#64748b" font-size="12">Pure torque only &mdash; no bending, no axial load, no prior service.</text>
  <text x="20" y="222" fill="#64748b" font-size="12">One specimen is a low-carbon steel, the other a grey cast iron.</text>
</svg>`;

// q10 — the two stresses that live at one surface point on a real shaft.
const figCombined = `<svg viewBox="0 0 460 262" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="to6-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="to6-tq" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="to6-sh" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">One surface point, two stresses acting at once</text>
  <!-- wall and shaft -->
  <line x1="40" y1="86" x2="40" y2="158" stroke="#334155" stroke-width="3"/>
  <line x1="28" y1="98" x2="40" y2="86" stroke="#64748b" stroke-width="1"/>
  <line x1="28" y1="120" x2="40" y2="108" stroke="#64748b" stroke-width="1"/>
  <line x1="28" y1="142" x2="40" y2="130" stroke="#64748b" stroke-width="1"/>
  <line x1="28" y1="158" x2="40" y2="146" stroke="#64748b" stroke-width="1"/>
  <rect x="40" y="104" width="200" height="36" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <path d="M110,90 A48,48 0 0 1 166,90" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#to6-tq)"/>
  <text x="138" y="70" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="12">T = 400 N&middot;m</text>
  <path d="M244,118 A40,40 0 0 1 244,58" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#to6-load)"/>
  <text x="300" y="48" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="12">M = 250 N&middot;m</text>
  <circle cx="196" cy="104" r="3.5" fill="#1d4ed8"/>
  <text x="192" y="98" text-anchor="end" fill="#1d4ed8" font-weight="600">A</text>
  <text x="140" y="164" text-anchor="middle" fill="#64748b" font-size="12">solid shaft, &oslash;30 mm</text>
  <!-- stress element at A -->
  <line x1="200" y1="102" x2="296" y2="140" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <rect x="300" y="130" width="60" height="60" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
  <line x1="300" y1="160" x2="278" y2="160" stroke="#dc2626" stroke-width="2.4" marker-end="url(#to6-load)"/>
  <line x1="360" y1="160" x2="382" y2="160" stroke="#dc2626" stroke-width="2.4" marker-end="url(#to6-load)"/>
  <line x1="310" y1="136" x2="350" y2="136" stroke="#1d4ed8" stroke-width="1.8" marker-end="url(#to6-sh)"/>
  <line x1="350" y1="184" x2="310" y2="184" stroke="#1d4ed8" stroke-width="1.8" marker-end="url(#to6-sh)"/>
  <line x1="354" y1="180" x2="354" y2="140" stroke="#1d4ed8" stroke-width="1.8" marker-end="url(#to6-sh)"/>
  <line x1="306" y1="140" x2="306" y2="180" stroke="#1d4ed8" stroke-width="1.8" marker-end="url(#to6-sh)"/>
  <text x="330" y="212" text-anchor="middle" fill="#dc2626" font-size="12">&sigma; = 32M/&pi;d&sup3;</text>
  <text x="330" y="230" text-anchor="middle" fill="#1d4ed8" font-size="12">&tau; = 16T/&pi;d&sup3;</text>
  <text x="20" y="252" fill="#334155" font-size="12">Ductile check at A: &sigma;<tspan baseline-shift="sub" font-size="9">vm</tspan> = &radic;(&sigma;&sup2; + 3&tau;&sup2;) compared with S<tspan baseline-shift="sub" font-size="9">y</tspan>.</text>
</svg>`;

// q11 — closed section circulates shear flow; an open section cannot.
const figSections = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="to7-q" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Closed section circulates shear flow; an open one cannot</text>
  <!-- closed box -->
  <rect x="50" y="60" width="140" height="90" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <rect x="62" y="72" width="116" height="66" fill="#fff" stroke="#334155" stroke-width="1.4"/>
  <line x1="70" y1="66" x2="162" y2="66" stroke="#1d4ed8" stroke-width="2" marker-end="url(#to7-q)"/>
  <line x1="184" y1="76" x2="184" y2="130" stroke="#1d4ed8" stroke-width="2" marker-end="url(#to7-q)"/>
  <line x1="170" y1="144" x2="78" y2="144" stroke="#1d4ed8" stroke-width="2" marker-end="url(#to7-q)"/>
  <line x1="56" y1="134" x2="56" y2="80" stroke="#1d4ed8" stroke-width="2" marker-end="url(#to7-q)"/>
  <text x="120" y="176" text-anchor="middle" font-weight="600" fill="#334155">closed box</text>
  <text x="120" y="196" text-anchor="middle" fill="#64748b" font-size="12">shear flow closes the loop</text>
  <!-- open channel -->
  <path d="M380,62 L262,62 L262,148 L380,148" fill="none" stroke="#334155" stroke-width="14" stroke-linejoin="miter"/>
  <path d="M380,62 L262,62 L262,148 L380,148" fill="none" stroke="#dbeafe" stroke-width="9" stroke-linejoin="miter"/>
  <line x1="372" y1="62" x2="284" y2="62" stroke="#1d4ed8" stroke-width="2" marker-end="url(#to7-q)"/>
  <line x1="262" y1="76" x2="262" y2="134" stroke="#1d4ed8" stroke-width="2" marker-end="url(#to7-q)"/>
  <line x1="274" y1="148" x2="362" y2="148" stroke="#1d4ed8" stroke-width="2" marker-end="url(#to7-q)"/>
  <line x1="388" y1="148" x2="388" y2="62" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="5 4"/>
  <line x1="382" y1="99" x2="394" y2="111" stroke="#dc2626" stroke-width="2"/>
  <line x1="394" y1="99" x2="382" y2="111" stroke="#dc2626" stroke-width="2"/>
  <text x="370" y="121" text-anchor="end" fill="#dc2626" font-size="12">no return</text>
  <text x="320" y="176" text-anchor="middle" font-weight="600" fill="#334155">open C-channel</text>
  <text x="320" y="196" text-anchor="middle" fill="#64748b" font-size="12">the loop is broken, so it warps</text>
  <text x="20" y="226" fill="#64748b" font-size="12">Same wall and mass: the closed box can be orders of magnitude stiffer.</text>
</svg>`;

// q07 — the dimensioned hollow section actually used by the question.
const figHollowQ = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="to5-tq" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="to5-dim" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Hollow shaft section: &oslash;30 outside, &oslash;20 bore</text>
  <path d="M84.2,88 A76,76 0 0 1 215.8,88" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#to5-tq)"/>
  <text x="226" y="84" fill="#dc2626" font-weight="600">T</text>
  <circle cx="150" cy="126" r="60" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <circle cx="150" cy="126" r="40" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <circle cx="150" cy="126" r="3.5" fill="#334155"/>
  <line x1="110" y1="126" x2="190" y2="126" stroke="#64748b" stroke-width="1" marker-start="url(#to5-dim)" marker-end="url(#to5-dim)"/>
  <text x="150" y="120" text-anchor="middle" fill="#64748b" font-size="12">&oslash;20</text>
  <line x1="90" y1="126" x2="90" y2="216" stroke="#64748b" stroke-width="1"/>
  <line x1="210" y1="126" x2="210" y2="216" stroke="#64748b" stroke-width="1"/>
  <line x1="90" y1="210" x2="210" y2="210" stroke="#64748b" stroke-width="1" marker-start="url(#to5-dim)" marker-end="url(#to5-dim)"/>
  <text x="150" y="204" text-anchor="middle" fill="#64748b" font-size="12">&oslash;30</text>
  <text x="252" y="118" fill="#334155">c = D/2 = 15 mm</text>
  <text x="252" y="146" fill="#334155">J = &pi;(D&#8308; &minus; d&#8308;)/32</text>
  <text x="252" y="174" fill="#1d4ed8" font-weight="600">&tau;<tspan baseline-shift="sub" font-size="9">max</tspan> = Tc/J</text>
  <text x="20" y="240" fill="#64748b" font-size="12">The bore removes 44% of the area but only 20% of J.</text>
</svg>`;

// q14 — the drivetrain: power passes through, speed drops, torque rises.
const figPower = `<svg viewBox="0 0 460 244" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="to12-tq" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Size the shaft that carries the torque, not the one with the nameplate</text>
  <!-- motor -->
  <rect x="24" y="70" width="80" height="64" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
  <text x="64" y="100" text-anchor="middle" font-weight="600" fill="#334155" font-size="12">MOTOR</text>
  <text x="64" y="118" text-anchor="middle" fill="#64748b" font-size="12">15 kW</text>
  <text x="64" y="152" text-anchor="middle" fill="#1d4ed8" font-size="12">1750 rpm</text>
  <!-- input shaft -->
  <rect x="104" y="94" width="42" height="16" fill="#dbeafe" stroke="#334155" stroke-width="1.4"/>
  <!-- gearbox -->
  <rect x="146" y="62" width="96" height="80" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
  <text x="194" y="96" text-anchor="middle" font-weight="600" fill="#334155" font-size="12">GEARBOX</text>
  <text x="194" y="118" text-anchor="middle" fill="#1d4ed8" font-size="12">12 : 1 reduction</text>
  <!-- output shaft -->
  <rect x="242" y="88" width="122" height="28" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <path d="M274,80 A40,40 0 0 1 330,80" fill="none" stroke="#dc2626" stroke-width="2.4" marker-end="url(#to12-tq)"/>
  <text x="303" y="62" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="12">T</text>
  <text x="303" y="136" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">d = ?</text>
  <!-- load -->
  <rect x="364" y="66" width="62" height="72" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
  <text x="395" y="106" text-anchor="middle" font-weight="600" fill="#334155" font-size="12">DRUM</text>
  <!-- annotations -->
  <text x="24" y="188" fill="#334155" font-size="12">Ideal gearbox: power passes straight through.</text>
  <text x="24" y="208" fill="#334155" font-size="12">Speed divides by 12, so torque multiplies by 12.</text>
  <text x="24" y="230" fill="#1d4ed8" font-size="12">Allowable torsional shear on the output shaft: 55 MPa.</text>
</svg>`;

// q16 — elastic, first-yield and fully plastic shear distributions.
const figPlastic = `<svg viewBox="0 0 460 258" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="to13-ax" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Shear across the radius as torque is raised past first yield</text>
  <!-- plot 1 -->
  <line x1="34" y1="80" x2="140" y2="80" stroke="#dc2626" stroke-width="1" stroke-dasharray="5 4"/>
  <polygon points="34,170 128,122 128,170" fill="#dbeafe"/>
  <line x1="34" y1="170" x2="128" y2="122" stroke="#1d4ed8" stroke-width="2.4"/>
  <line x1="34" y1="170" x2="140" y2="170" stroke="#64748b" stroke-width="1.4" marker-end="url(#to13-ax)"/>
  <line x1="34" y1="170" x2="34" y2="66" stroke="#64748b" stroke-width="1.4" marker-end="url(#to13-ax)"/>
  <text x="82" y="192" text-anchor="middle" font-weight="600" fill="#334155" font-size="12">elastic</text>
  <text x="82" y="210" text-anchor="middle" fill="#64748b" font-size="12">T &lt; T<tspan baseline-shift="sub" font-size="9">y</tspan></text>
  <!-- plot 2 -->
  <line x1="176" y1="80" x2="282" y2="80" stroke="#dc2626" stroke-width="1" stroke-dasharray="5 4"/>
  <polygon points="176,170 270,80 270,170" fill="#dbeafe"/>
  <line x1="176" y1="170" x2="270" y2="80" stroke="#1d4ed8" stroke-width="2.4"/>
  <line x1="176" y1="170" x2="282" y2="170" stroke="#64748b" stroke-width="1.4" marker-end="url(#to13-ax)"/>
  <line x1="176" y1="170" x2="176" y2="66" stroke="#64748b" stroke-width="1.4" marker-end="url(#to13-ax)"/>
  <text x="224" y="192" text-anchor="middle" font-weight="600" fill="#334155" font-size="12">first yield</text>
  <text x="224" y="210" text-anchor="middle" fill="#64748b" font-size="12">T = T<tspan baseline-shift="sub" font-size="9">y</tspan></text>
  <!-- plot 3 -->
  <line x1="318" y1="80" x2="424" y2="80" stroke="#dc2626" stroke-width="1" stroke-dasharray="5 4"/>
  <polygon points="318,170 318,80 412,80 412,170" fill="#fee2e2"/>
  <path d="M318,170 L318,80 L412,80" fill="none" stroke="#1d4ed8" stroke-width="2.4"/>
  <line x1="318" y1="170" x2="424" y2="170" stroke="#64748b" stroke-width="1.4" marker-end="url(#to13-ax)"/>
  <line x1="318" y1="170" x2="318" y2="66" stroke="#64748b" stroke-width="1.4" marker-end="url(#to13-ax)"/>
  <text x="366" y="192" text-anchor="middle" font-weight="600" fill="#334155" font-size="12">fully plastic</text>
  <text x="366" y="210" text-anchor="middle" fill="#1d4ed8" font-size="12">T<tspan baseline-shift="sub" font-size="9">p</tspan> = 4T<tspan baseline-shift="sub" font-size="9">y</tspan>/3</text>
  <text x="146" y="76" fill="#dc2626" font-size="12">&tau;<tspan baseline-shift="sub" font-size="9">y</tspan></text>
  <text x="288" y="76" fill="#dc2626" font-size="12">&tau;<tspan baseline-shift="sub" font-size="9">y</tspan></text>
  <text x="430" y="76" fill="#dc2626" font-size="12">&tau;<tspan baseline-shift="sub" font-size="9">y</tspan></text>
  <text x="24" y="232" fill="#64748b" font-size="12">Horizontal axis is radius 0 to c in every plot.</text>
  <text x="24" y="250" fill="#64748b" font-size="12">The last 33% of capacity is bought with permanent twist.</text>
</svg>`;

const content: TopicContent = {
  lesson: {
    title: "Torsion of Shafts",
    intro: `<p>Torsion shows up anywhere power or torque moves through hardware: motor shafts, drive axles, couplings, screws, handles, hinges, and gearboxes. The interview pattern is usually simple: draw torque equilibrium, compute shear stress, compute angle of twist, then ask whether a hollow shaft, bigger diameter, or different material is the better fix.</p>
<figure class="fig">${figStress}<figcaption>Circular shafts have shear stress that increases linearly with radius, so the outer surface governs.</figcaption></figure>`,
    sections: [
      {
        heading: "Circular shaft stress",
        html: `<p>For a circular shaft in elastic torsion, shear stress varies linearly with radius:</p>
<p class="eq">&tau; = T&rho;/J, &nbsp;&nbsp; &tau;<sub>max</sub> = Tc/J</p>
<p><strong>&tau;</strong> is shear stress (Pa or MPa), <strong>T</strong> is internal torque at the section (N&middot;m), <strong>&rho;</strong> is radius to the point, <strong>c</strong> is the outer radius, and <strong>J</strong> is the polar second moment of area (m<sup>4</sup>). The center carries zero torsional shear; the outside carries the maximum. That radius weighting is the reason diameter is such a powerful design variable.</p>
<p>For a solid shaft, substituting J = &pi;d<sup>4</sup>/32 and c = d/2 collapses the whole thing to one line worth memorizing:</p>
<p class="eq">&tau;<sub>max</sub> = 16T/(&pi;d&sup3;)</p>
<p>The formula assumes a circular shaft, linear elastic material, small twist, and no major warping restraint. For rectangles, channels, splines, and thin open sections, use the appropriate torsion constant and expect warping.</p>`,
      },
      {
        heading: "Angle of twist is the stiffness check",
        html: `<p>Strength is not the only question. A shaft can be safe in stress but twist too much for pointing accuracy, gear mesh, control response, or coupling alignment.</p>
<p class="eq">&theta; = TL/(GJ)</p>
<p><strong>&theta;</strong> is twist in radians, <strong>L</strong> is shaft length, and <strong>G</strong> is shear modulus. Like E in bending, G is a stiffness property, not a strength property; heat treatment rarely changes it much for the same alloy family. That single fact kills the most common wrong answer in shaft interviews: you cannot heat-treat your way out of a twist problem.</p>
<p>Segments in series add twist (&theta; = &Sigma;T<sub>i</sub>L<sub>i</sub>/G<sub>i</sub>J<sub>i</sub>, signed). Parallel torque paths share the same twist, so they split torque in proportion to their stiffness GJ/L, not equally.</p>
<figure class="fig">${figTwist}<figcaption>Angle of twist accumulates with length and falls with shear modulus G and polar inertia J.</figcaption></figure>`,
      },
      {
        heading: "J and the diameter effect",
        html: `<p>For a solid circular shaft, J = &pi;d<sup>4</sup>/32. For a hollow circular shaft, J = &pi;(D<sup>4</sup> &minus; d<sup>4</sup>)/32. Subtract the fourth powers, never the diameters. The fourth power means modest diameter increases are huge: a shaft 20% larger in diameter is 1.20<sup>4</sup> = 2.07&times; stiffer in torsion, so its twist halves. Doubling the diameter increases J by 16&times;, reduces twist by 16&times;, and reduces maximum shear stress by 8&times; because &tau;<sub>max</sub> = Tc/J carries c = d/2 in the numerator.</p>
<p>The same weighting explains hollow shafts. Torque carried inside radius &rho; grows as &rho;<sup>4</sup>, so the inner half of the radius holds 25% of the area but only (1/2)<sup>4</sup> = 6.25% of the torque. Move that metal outward and you buy stiffness for free.</p>
<figure class="fig">${figHollow}<figcaption>For equal mass, a tube usually beats a solid bar in torsion because more material sits at large radius.</figcaption></figure>`,
      },
      {
        heading: "Power transmission",
        html: `<p>Rotating shafts often give power and speed instead of torque. Convert first:</p>
<p class="eq">P = T&omega;, &nbsp;&nbsp; &omega; = 2&pi;N/60</p>
<p><strong>P</strong> is power in watts, <strong>T</strong> is torque in N&middot;m, <strong>&omega;</strong> is angular speed in rad/s, and <strong>N</strong> is rotational speed in rpm. Radians are dimensionless, so P/&omega; returns torque. Always convert kW to W and rpm to rad/s before using SI units. Dividing watts by rpm is the single most common unit error in this topic and it is wrong by a factor of 9.55.</p>
<p>At fixed power, lower speed means higher torque. That is the reason output shafts after a gearbox are often larger than high-speed motor shafts, and why the low-speed side of a drivetrain usually controls key, spline and coupling sizing. In US practice the shortcut is T (lb&middot;ft) = 5252 &times; hp / rpm.</p>`,
      },
      {
        heading: "Thin-walled and non-circular sections",
        html: `<p>The clean formulas assume circular cross-sections, linear elastic material, small twist, and no warping restraint complications. They work well for round shafts away from shoulders, keyways, splines, holes, and load-introduction details.</p>
<p>For a thin-walled <em>closed</em> cell, torque is carried by a shear flow q (force per unit length) that is constant all the way round the loop:</p>
<p class="eq">q = T/(2A<sub>m</sub>), &nbsp;&nbsp; &tau; = q/t</p>
<p><strong>A<sub>m</sub></strong> is the area enclosed by the mid-wall line, not the area of the metal. Cutting one slit along the length destroys that loop: the section reverts to St. Venant torsion of a thin strip, J &asymp; st<sup>3</sup>/3, and the stiffness falls by roughly 3(R/t)<sup>2</sup>, a factor of hundreds for a normal tube. Open channels and angles are terrible in torsion for that reason, and it is why a cover plate transforms a machine frame rail.</p>
<p>Real shafts also see bending from gears, belts, or overhung loads, so combine bending normal stress with torsional shear using a failure theory such as von Mises for ductile metals. For rotating shafts, fatigue at shoulders, keyways, and fillets may govern before static yielding.</p>`,
      },
      {
        heading: "Reading a broken shaft",
        html: `<p>When a shaft does break, the fracture surface tells you which physics won. Pure torsion is a state of pure shear, so the principal stresses are &plusmn;&tau; on planes at &plusmn;45&deg; to the axis and the maximum shear planes are the transverse and longitudinal ones.</p>
<p>A ductile metal reaches its shear yield first and shears off on a flat plane perpendicular to the axis. A brittle material reaches its tensile strength first and tears open along the 45&deg; helix, which is why a piece of chalk, a cast-iron rod, and a carbon-fibre tube all break the same spiral way. Torsional <em>fatigue</em> is a third signature: beach marks fanning out from a keyway corner, fillet root, or spline tooth, with a small final fast-fracture zone.</p>
<p>The static shear-yield number that goes with this picture is &tau;<sub>y</sub> = S<sub>y</sub>/&radic;3 under von Mises (or S<sub>y</sub>/2 under the more conservative Tresca). Comparing torsional shear directly against tensile yield overstates the allowable torque by 73%.</p>
<figure class="fig">${figFracture}<figcaption>The classic "why did this shaft break?" figure: flat transverse face means shear-driven ductile failure, 45&deg; helix means tension-driven brittle failure.</figcaption></figure>`,
      },
    ],
    equations: [
      { name: "Torsional shear stress", formula: "<p>&tau; = T&rho;/J</p>", note: "&tau; is shear stress at radius &rho;, T is internal torque, and J is polar second moment for a circular elastic shaft." },
      { name: "Solid-shaft shortcut", formula: "<p>&tau;<sub>max</sub> = 16T/(&pi;d&sup3;)</p>", note: "Same result as Tc/J for a solid round bar. Stress scales as 1/d&sup3;, so 20% more diameter cuts stress 42%." },
      { name: "Angle of twist", formula: "<p>&theta; = TL/GJ</p>", note: "&theta; is twist in radians, L is shaft length, G is shear modulus, and J is polar second moment." },
      { name: "Solid circular J", formula: "<p>J = &pi;d&#8308;/32</p>", note: "d is solid shaft diameter. The fourth power makes diameter the dominant torsional stiffness lever." },
      { name: "Hollow circular J", formula: "<p>J = &pi;(D&#8308; &minus; d&#8308;)/32</p>", note: "D is outside diameter and d is inside diameter. Subtract fourth powers, not diameters." },
      { name: "Power-speed-torque", formula: "<p>P = T&omega;, &nbsp; &omega; = 2&pi;N/60</p>", note: "P is power, T is torque, and &omega; is angular speed in rad/s; convert rpm before using." },
      { name: "Thin-walled shear flow", formula: "<p>q = T/(2A<sub>m</sub>), &nbsp; &tau; = q/t</p>", note: "A<sub>m</sub> is the area enclosed by the mid-wall line of a single closed cell. Slitting the cell open destroys it." },
      { name: "Ductile combined stress", formula: "<p>&sigma;<sub>vm</sub> = &radic;(&sigma;&sup2; + 3&tau;&sup2;)</p>", note: "&sigma; is normal stress from bending/axial load and &tau; is torsional shear for a ductile von Mises check." },
    ],
    interviewTips: [
      "Torque equilibrium comes first; do not use applied motor torque on every shaft segment blindly.",
      "Maximum torsional shear is at the outside radius of a circular shaft, and zero on the axis.",
      "Diameter is powerful because J scales with d to the fourth power: 20% bigger is twice as stiff.",
      "Convert rpm to rad/s before touching P = Tω. Watts divided by rpm is wrong by 9.55.",
      "G, not yield strength, sets elastic twist. Heat treatment does not fix a stiffness problem.",
      "A hollow tube is usually torsion-efficient, but check local buckling, joints, and packaging.",
      "For real shafts, combine torsion with bending and fatigue rather than checking torsion alone.",
      "Read the fracture: flat and square means ductile shear, 45 degree helix means brittle tension.",
    ],
  },
  questions: [
    {
      id: "torsion-q01",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A solid round shaft carries a steady torque. Roughly what share of that torque is carried by the material inside half the radius, and where does the shear stress peak?</p>`,
      figure: figCore,
      choices: [
        "About 25% of the torque, with the shear stress peaking on the axis",
        "About 6% of the torque, with the shear stress peaking at the outer surface",
        "About 50% of the torque, with the shear stress uniform across the section",
        "About 6% of the torque, with the shear stress peaking at half the radius",
      ],
      answer: 1,
      explanation: `<p><strong>6.25%</strong>, and the peak is at the outer surface. Shear runs &tau; = T&rho;/J, linear in radius, so the torque carried inside radius &rho; goes as the fourth power:</p><p class="eq">T(&rho;)/T = &rho;&#8308;/c&#8308;</p><p>At &rho; = c/2 that is 1/16. A quarter of the area, a sixteenth of the load. 25% is the <em>area</em> fraction, which is the number most people say before they think.</p>`,
    },
    {
      id: "torsion-q02",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A solid circular shaft has diameter d = 20 mm and carries torque T = 50 N&middot;m. Find the maximum shear stress in MPa.</p>`,
      answer: 31.8,
      unit: "MPa",
      explanation: `<p>c = d/2 = 0.010 m, and</p><p class="eq">J = &pi;d&#8308;/32 = &pi;(0.020)&#8308;/32 = 1.571&times;10<sup>&minus;8</sup> m&#8308;</p><p class="eq">&tau;<sub>max</sub> = Tc/J = 50(0.010)/(1.571&times;10<sup>&minus;8</sup>) = 3.18&times;10<sup>7</sup> Pa = <strong>31.8 MPa</strong></p><p>The one-line version is &tau; = 16T/(&pi;d&sup3;) = 16(50)/(&pi; &times; 8&times;10<sup>&minus;6</sup>) = 31.8 MPa. Substituting d for c doubles the answer to 63.7 MPa.</p>`,
    },
    {
      id: "torsion-q03",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>That same solid shaft &mdash; 20 mm diameter, steel with G = 80 GPa &mdash; is 1.0 m long and carries T = 50 N&middot;m. What is the angle of twist in degrees?</p>`,
      answer: 2.28,
      unit: "deg",
      explanation: `<p>J = &pi;d&#8308;/32 = &pi;(0.020)&#8308;/32 = 1.571&times;10<sup>&minus;8</sup> m&#8308;, then</p><p class="eq">&theta; = TL/(GJ) = 50(1.0)/[(80&times;10<sup>9</sup>)(1.571&times;10<sup>&minus;8</sup>)] = 0.0398 rad</p><p class="eq">&theta; = 0.0398 &times; (180/&pi;) = <strong>2.28&deg;</strong></p><p>TL/GJ returns radians. Reporting 0.0398 quotes radians as degrees, which is the usual slip. G has to be in Pa, not GPa.</p>`,
    },
    {
      id: "torsion-q04",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A solid 40 mm diameter steel driveshaft winds up 2.5&deg; at peak torque, twice the gearbox alignment budget. Mass must not increase and the length is fixed by packaging. Which change actually halves the twist?</p>`,
      choices: [
        "Heat treat the shaft to lift its yield strength from 300 MPa to 900 MPa",
        "Replace it with an equal-mass steel tube of larger outside diameter",
        "Switch to 7075-T6 aluminium at the same 40 mm diameter to save mass",
        "Polish the surface and add a generous fillet at the bearing shoulder",
      ],
      answer: 1,
      explanation: `<p>Elastic twist is &theta; = TL/(GJ). T and L are fixed and mass is capped, so the only move left is putting the same metal at a bigger radius. Take the 40 mm solid bar (A = 1257 mm&sup2;, J = 2.51&times;10<sup>5</sup> mm&#8308;) and respin it as a 60 mm OD tube with a 7.6 mm wall. Same area, J = 8.80&times;10<sup>5</sup> mm&#8308;, 3.5&times; stiffer. Twist falls to 29% of the original.</p><p>Heat treatment triples yield strength and leaves G at roughly 80 GPa for every steel, so the twist does not move at all. 7075-T6 aluminium has G &asymp; 26 GPa and makes it three times worse. Polishing and a fillet buy fatigue life at the notch and nothing in stiffness.</p><p>What stops you going thinner still is wall buckling under torque, denting, and the difficulty of splining or welding a thin tube.</p>`,
    },
    {
      id: "torsion-q05",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A shaft transmits 10 kW at 1200 rpm. What torque does it carry in N&middot;m?</p>`,
      answer: 79.6,
      unit: "N*m",
      explanation: `<p class="eq">&omega; = 2&pi;N/60 = 2&pi;(1200)/60 = 125.66 rad/s</p><p class="eq">T = P/&omega; = 10000/125.66 = <strong>79.6 N&middot;m</strong></p><p>Watts divided by rpm gives 8.33, wrong by 2&pi;/60. If a torque-from-power answer looks about ten times too small, that is why.</p>`,
    },
    {
      id: "torsion-q06",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A solid shaft diameter is doubled while the torque and length stay the same. What happens to peak torsional shear stress and to the angle of twist?</p>`,
      choices: [
        "Peak shear falls 16&times; and the angle of twist falls 16&times;",
        "Peak shear falls 2&times; and the angle of twist falls 4&times;",
        "Peak shear falls 4&times; and the angle of twist is unchanged",
        "Peak shear falls 8&times; and the angle of twist falls 16&times;",
      ],
      answer: 3,
      explanation: `<p>For a solid circular shaft J &prop; d&#8308; and c &prop; d, so the two scale differently:</p><p class="eq">&tau;<sub>max</sub> = Tc/J &prop; d/d&#8308; = 1/d&sup3; &nbsp;&rarr;&nbsp; falls 2&sup3; = 8&times;</p><p class="eq">&theta; = TL/GJ &prop; 1/d&#8308; &nbsp;&rarr;&nbsp; falls 2&#8308; = 16&times;</p><p>Quoting 16&times; for stress is the near miss. J did rise 16&times;, but c doubled at the same time and it sits in the numerator.</p><p>The 20% version is the one to carry: 1.20&sup3; = 1.73&times; on stress, 1.20&#8308; = 2.07&times; on stiffness. A shaft twice as flexible as you want is fixed by one size step. A shaft twice overstressed is not.</p>`,
    },
    {
      id: "torsion-q07",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A hollow shaft has 30 mm outside diameter and a 20 mm diameter bore. It carries T = 100 N&middot;m. Find the maximum shear stress in MPa.</p>`,
      figure: figHollowQ,
      answer: 23.5,
      unit: "MPa",
      explanation: `<p>Use J = &pi;(D&#8308; &minus; d&#8308;)/32 with the outer radius c = D/2 = 0.015 m.</p><p class="eq">J = &pi;(0.030&#8308; &minus; 0.020&#8308;)/32 = &pi;(8.10&times;10<sup>&minus;7</sup> &minus; 1.60&times;10<sup>&minus;7</sup>)/32 = 6.38&times;10<sup>&minus;8</sup> m&#8308;</p><p class="eq">&tau;<sub>max</sub> = Tc/J = 100(0.015)/(6.38&times;10<sup>&minus;8</sup>) = <strong>23.5 MPa</strong></p><p>Subtract the fourth powers, never the diameters. J = &pi;(D &minus; d)&#8308;/32 comes out 65&times; too small and predicts 1530 MPa.</p><p>Look at what the bore bought. It removed 44% of the metal and only 20% of J. Against a solid 30 mm bar at 18.9 MPa this tube runs 24% hotter for 44% less mass.</p>`,
    },
    {
      id: "torsion-q08",
      type: "mc",
      difficulty: 2,
      prompt: `<p>Two shafts of the same diameter were twisted to destruction in pure torque. Specimen A broke on a flat face square to the axis; specimen B broke along a helix at 45&deg; to the axis. What do you conclude?</p>`,
      figure: figFractureQ,
      choices: [
        "A is brittle and cracked in tension, B is ductile and sheared along the helix",
        "A saw pure torque while B also saw bending, which is what tilts a fracture face",
        "A is ductile and sheared on the max-shear plane, B is brittle and tore in tension",
        "Both failed in torsional fatigue: A initiated at the surface, B initiated at a bore",
      ],
      answer: 2,
      explanation: `<p>Pure torsion is pure shear. On a surface element the maximum shear planes are the transverse and longitudinal ones, while the principal stresses are &sigma;<sub>1</sub> = +&tau; and &sigma;<sub>3</sub> = &minus;&tau; acting on planes at &plusmn;45&deg; to the axis.</p><p>A material fails on whichever plane it runs out of strength on first. Ductile steel yields in shear well before it reaches its tensile strength, so it shears off on the transverse plane. That face is flat, square to the axis, and often smeared from rubbing. A brittle material (grey cast iron, chalk, a hardened tool steel, a filament-wound tube) reaches its tensile strength first and unzips along the 45&deg; helix normal to &sigma;<sub>1</sub>. A is ductile, B is brittle.</p><p>Option 0 is exactly backwards and is the most-picked wrong answer. Superimposed bending does not tilt a torsion fracture into a clean helix; it rotates the principal directions to somewhere between 0&deg; and 45&deg; and usually leaves a flatter, one-sided face. Fatigue is ruled out by the prompt, and a fatigue surface would show beach marks and a distinct final-fracture zone.</p><p>A 45&deg; helix on a shaft that should have been ductile tells you the material is wrong, embrittled by heat treatment or hydrogen, or simply cold.</p>`,
    },
    {
      id: "torsion-q09",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A torque-measuring bridge bonded to the surface of a 30 mm diameter solid steel shaft reports a peak surface shear strain of 400 microstrain (&gamma; = 400&times;10<sup>&minus;6</sup>). The steel has G = 80 GPa. What torque is the shaft carrying, in N&middot;m?</p>`,
      answer: 170,
      unit: "N*m",
      explanation: `<p>The gauge reads strain and you want torque, so start from Hooke's law in shear.</p><p class="eq">&tau; = G&gamma; = (80&times;10<sup>9</sup>)(400&times;10<sup>&minus;6</sup>) = 32.0 MPa</p><p>That is the surface shear stress, so invert the solid-shaft relation &tau; = 16T/(&pi;d&sup3;):</p><p class="eq">T = &tau;&pi;d&sup3;/16 = (32.0&times;10<sup>6</sup>)&pi;(0.030)&sup3;/16 = <strong>170 N&middot;m</strong></p><p>The gauge only reads the <em>surface</em>, so c = d/2 = 15 mm. Using 30 mm as the radius gives 8&times; the torque. And 400 &mu;&epsilon; of shear strain is only 200 &mu;&epsilon; of normal strain along the 45&deg; principal direction, which is what one gauge grid actually sees. A torque bridge sums four grids for exactly that reason.</p><p>At 32 MPa the shaft sits at about a fifth of mild steel's shear yield, so &tau; = G&gamma; is safely elastic. A reading that drifts with shop temperature rather than with load is a bridge-compensation problem, not a shaft problem.</p>`,
    },
    {
      id: "torsion-q10",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>An overhung spur gear loads a solid 30 mm diameter steel shaft at the bearing shoulder with a bending moment M = 250 N&middot;m and a torque T = 400 N&middot;m acting at the same section. Ignoring the shoulder stress concentration, what is the von Mises stress at the most-loaded surface point, in MPa?</p>`,
      figure: figCombined,
      answer: 161,
      unit: "MPa",
      explanation: `<p>One surface point carries a bending normal stress and a torsional shear stress at the same time. Build each from its own section property, then combine.</p><p class="eq">&sigma; = Mc/I = 32M/(&pi;d&sup3;) = 32(250)/[&pi;(0.030)&sup3;] = 94.3 MPa</p><p class="eq">&tau; = Tc/J = 16T/(&pi;d&sup3;) = 16(400)/[&pi;(0.030)&sup3;] = 75.5 MPa</p><p>Note that J = 2I for a circle, which is why the torsion constant is 16 and the bending constant is 32. Now combine for a ductile metal:</p><p class="eq">&sigma;<sub>vm</sub> = &radic;(&sigma;&sup2; + 3&tau;&sup2;) = &radic;(94.3&sup2; + 3&times;75.5&sup2;) = &radic;25970 = <strong>161 MPa</strong></p><p>Using 16 in the bending term (or 32 in the torsion term) is the classic slip. So is adding &sigma; and &tau; directly, which gives 170 MPa and looks plausible enough to pass unchallenged. Against a 350 MPa yield, 161 MPa is a static factor of 2.2. Static is not the design driver here: the shaft rotates, so bending fully reverses every revolution while the torque stays steady, and the shoulder fillet adds a K<sub>f</sub> of roughly 1.5 to 1.8. Size this one on fatigue at the fillet.</p>`,
    },
    {
      id: "torsion-q11",
      type: "mc",
      difficulty: 2,
      prompt: `<p>An open C-channel machine rail twists badly under a belt load applied away from its shear centre. Packaging allows welding a cover plate across the open face, turning it into a closed box and raising torsional stiffness roughly 40&times;. What is the most likely real cost of that fix?</p>`,
      figure: figSections,
      choices: [
        "Weld distortion, plus a sealed cavity you can no longer drain or inspect",
        "Bending stiffness drops, because the cover plate lands on the neutral axis",
        "Shear modulus G falls locally in the heat-affected zone beside each weld",
        "Wall shear stress rises, because a closed cell concentrates flow at corners",
      ],
      answer: 0,
      explanation: `<p>Closing the section gives the shear flow a loop to circulate in, so torque is carried by q = T/(2A<sub>m</sub>) rather than by weak St. Venant twisting of thin strips. The costs are all manufacturing and service costs. Two long welds pump heat into the rail and bow it, the sealed cavity traps moisture and machining coolant with no drain path, and you lose access to whatever was inside.</p><p>A cover plate <em>increases</em> bending stiffness about both axes, because the plate sits away from at least one neutral axis. G is a lattice property; a heat-affected zone changes hardness and residual stress, not the shear modulus. And closing the cell <em>lowers</em> wall shear stress sharply, since the same torque now spreads over a long circulating loop instead of a through-thickness couple in each strip.</p><p>Take the 40&times;, then add drain holes at the low points, specify a stitch weld pattern to limit distortion, and confirm the plate does not buckle under the shear flow.</p>`,
    },
    {
      id: "torsion-q12",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A solid steel shaft has a 25 mm diameter. If the allowable torsional shear stress is 60 MPa, what torque is allowed in N&middot;m?</p>`,
      answer: 184,
      unit: "N*m",
      explanation: `<p class="eq">J = &pi;d&#8308;/32 = &pi;(0.025)&#8308;/32 = 3.83&times;10<sup>&minus;8</sup> m&#8308;</p><p class="eq">T = &tau;J/c = (60&times;10<sup>6</sup>)(3.83&times;10<sup>&minus;8</sup>)/0.0125 = <strong>184 N&middot;m</strong></p><p>Or one line: T = &tau;&pi;d&sup3;/16.</p><p>That is a static shear limit at a smooth section and nothing more. Twist can cap the torque lower, and a keyway or shoulder lifts the local stress by 1.5 to 3.</p>`,
    },
    {
      id: "torsion-q13",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A uniform shaft is driven by a coupling at the left end and loaded by a brake at the right end, with nothing taken off in between. Where along the shaft is the internal torque largest?</p>`,
      choices: [
        "At the brake face, which is where the reacting torque is actually applied",
        "At midspan, because torsional wind-up accumulates along the length",
        "Every section between the coupling and the brake carries the same torque",
        "On the centreline, which is where the torsional shear stress is largest",
      ],
      answer: 2,
      explanation: `<p>The same everywhere between the two. Cut the shaft anywhere in that span and the only external torque on the free body is the coupling torque, so the internal torque at the cut equals it. Torque steps only where a gear, pulley, brake or coupling puts torque in or takes it out.</p><p>Length accumulates <em>twist</em>, through &theta; = TL/GJ, not torque. The centreline is where shear stress is zero, not largest.</p>`,
    },
    {
      id: "torsion-q14",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A 15 kW motor runs at 1750 rpm and drives a hoist drum through a 12:1 speed-reducing gearbox. Treat the gearbox as ideal. Sizing the solid output shaft on nominal torsional shear alone with an allowable of 55 MPa, what minimum diameter is required, in mm?</p>`,
      figure: figPower,
      answer: 45.0,
      unit: "mm",
      explanation: `<p>Three steps, and the middle one is where people fall off.</p><p><strong>1. Output speed.</strong> A 12:1 reduction divides speed: N = 1750/12 = 145.8 rpm, so &omega; = 2&pi;(145.8)/60 = 15.27 rad/s.</p><p><strong>2. Output torque.</strong> An ideal gearbox passes power through unchanged, so</p><p class="eq">T = P/&omega; = 15000/15.27 = 982 N&middot;m</p><p><strong>3. Diameter.</strong> From &tau; = 16T/(&pi;d&sup3;),</p><p class="eq">d = [16T/(&pi;&tau;)]<sup>1/3</sup> = [16(982)/(&pi;&times;55&times;10<sup>6</sup>)]<sup>1/3</sup> = 0.0450 m = <strong>45.0 mm</strong></p><p>Sizing from the motor nameplate torque is the error the figure is warning about. That torque is 15000/183.3 = 81.9 N&middot;m and gives d = 19.6 mm, under a tenth of the required capacity, because torque scales with the gear ratio while d&sup3; only scales with torque. Dividing 15000 by 145.8 rpm directly under-predicts the torque by 9.55.</p><p>You would round up to a stock 50 mm shaft, then re-check twist, the key and keyway, the bearing seats, and fatigue at the drum flange.</p>`,
    },
    {
      id: "torsion-q15",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A 40 mm diameter solid shaft of ductile steel with yield strength S<sub>y</sub> = 350 MPa carries pure torque. Using the von Mises criterion with a design factor of 2.0 on yield, what is the allowable torque in N&middot;m?</p>`,
      answer: 1270,
      unit: "N*m",
      explanation: `<p>Which shear stress corresponds to yield? In pure shear the von Mises equivalent is &sigma;<sub>vm</sub> = &radic;3&tau;, so yielding starts at</p><p class="eq">&tau;<sub>y</sub> = S<sub>y</sub>/&radic;3 = 350/1.732 = 202 MPa</p><p>Apply the design factor to get the allowable shear, then invert the solid-shaft formula:</p><p class="eq">&tau;<sub>allow</sub> = 202/2.0 = 101 MPa</p><p class="eq">T = &tau;<sub>allow</sub>&pi;d&sup3;/16 = (101&times;10<sup>6</sup>)&pi;(0.040)&sup3;/16 = <strong>1270 N&middot;m</strong></p><p>Comparing &tau; straight against S<sub>y</sub> and skipping the &radic;3 gives 2200 N&middot;m, overstating capacity by 73%. It is the single most common error in a shaft screen. Tresca puts &tau;<sub>y</sub> = S<sub>y</sub>/2 and gives 1100 N&middot;m, which is conservative and perfectly defensible as long as you say which criterion you used.</p>`,
    },
    {
      id: "torsion-q16",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A 25 mm diameter solid bar of elastic-perfectly-plastic steel with S<sub>y</sub> = 250 MPa is twisted. Take the shear yield from von Mises, &tau;<sub>y</sub> = S<sub>y</sub>/&radic;3. What torque makes the entire cross-section plastic, in N&middot;m?</p>`,
      figure: figPlastic,
      answer: 590,
      unit: "N*m",
      explanation: `<p>Start at first yield, when the surface just reaches &tau;<sub>y</sub> and the distribution is still the elastic triangle:</p><p class="eq">&tau;<sub>y</sub> = 250/&radic;3 = 144.3 MPa</p><p class="eq">T<sub>y</sub> = &tau;<sub>y</sub>&pi;d&sup3;/16 = (144.3&times;10<sup>6</sup>)&pi;(0.025)&sup3;/16 = 443 N&middot;m</p><p>Now push until every fibre is at &tau;<sub>y</sub>. The distribution is a flat block instead of a triangle, so integrate directly:</p><p class="eq">T<sub>p</sub> = &int;<sub>0</sub><sup>c</sup> &tau;<sub>y</sub>&rho;(2&pi;&rho; d&rho;) = 2&pi;&tau;<sub>y</sub>c&sup3;/3 = &pi;&tau;<sub>y</sub>d&sup3;/12</p><p class="eq">T<sub>p</sub> = (4/3)T<sub>y</sub> = 1.333 &times; 443 = <strong>590 N&middot;m</strong></p><p>The 4/3 shape factor for a solid round bar in torsion sits alongside the 1.5 for a rectangle in bending. Reserve past first yield is only 33%, far less than people expect, because the outer fibres that do most of the work were already at yield.</p><p>Do not design to T<sub>p</sub>. Reaching it means large permanent twist, and a rotating shaft that has taken a set is scrap. The one place it gets used deliberately is presetting torsion bars at the factory: overload once in the service direction, unload, and the residual shear left behind raises the elastic limit in that direction.</p>`,
    },
  ],
  qna: [
    {
      id: "torsion-qa01",
      q: `<p>Derive or explain the torsion formula &tau; = T&rho;/J.</p>`,
      a: `<p>For a circular shaft, cross-sections remain plane and rotate rigidly relative to each other. A point at radius &rho; travels through a shear displacement proportional to &rho;, so shear strain is &gamma; = &rho;&theta;/L. In the elastic range &tau; = G&gamma;, so shear stress is linear in radius. Equilibrium requires the stress distribution to produce the internal torque: T = &int;&tau;&rho; dA. Substituting the linear stress field gives T = (G&theta;/L)&int;&rho;<sup>2</sup>dA = (G&theta;/L)J. Rearranging gives &theta; = TL/GJ and &tau; = T&rho;/J.</p><p>The assumptions worth stating out loud: circular cross-section, so plane sections stay plane and nothing warps; linear elastic material; small twist; prismatic geometry; pure torque. Break any one of them and you need a different torsion constant or a different theory. A rectangular bar, a slit tube, a shaft past yield and a shoulder fillet each break a different one.</p>`,
    },
    {
      id: "torsion-qa02",
      q: `<p>Why are hollow shafts efficient in torsion, and where do you stop?</p>`,
      a: `<p>J = &int;&rho;<sup>2</sup>dA weights every element of area by radius squared, and the torque carried inside radius &rho; grows as &rho;<sup>4</sup>. The inner half of the radius of a solid bar is 25% of the area and carries 6.25% of the torque. A tube relocates that low-value metal outward. Concretely: a 40 mm solid bar has A = 1257 mm&sup2; and J = 2.51&times;10<sup>5</sup> mm&#8308;; a 60 mm OD tube with a 7.6 mm wall has the identical area and J = 8.80&times;10<sup>5</sup> mm&#8308;, 3.5&times; the stiffness and 2.3&times; less peak shear for the same mass. That is why driveshafts, bicycle frames, and aircraft torque tubes are tubes.</p><p>Where I stop: local wall buckling under torque, dent and impact sensitivity, ovalisation at clamps and bearing seats, minimum wall for the joining process, and the fact that splines, keyways and stepped bearing journals all want solid metal. Practical automotive driveshafts sit around D/t of 20 to 40 for exactly these reasons. I would also ask what happens in a crash or a jam-torque event, because a thin tube that buckles is a very different failure from a solid bar that twists.</p>`,
    },
    {
      id: "torsion-qa03",
      q: `<p>What is the difference between torsional strength and torsional stiffness, and which one usually wins?</p>`,
      a: `<p>Strength asks whether &tau;<sub>max</sub> = Tc/J exceeds the allowable. Stiffness asks how much the shaft twists, &theta; = TL/GJ. Both improve with larger J, but strength scales as 1/d&sup3; and stiffness as 1/d&#8308;, and they depend on different material properties: allowable shear stress versus shear modulus G.</p><p>Which wins depends on the application. On a hoist or a press, strength and fatigue win. The shaft is short and the loads are brutal. On anything with a servo loop, an encoder, or a gear mesh at the far end, stiffness usually wins: a shaft can sit at a comfortable 30 MPa and still wind up 2&deg; per metre, which destroys pointing accuracy and puts a torsional resonance right in the control bandwidth. The tell is length. A long, lightly loaded shaft is almost always stiffness-driven.</p><p>What I watch for is someone proposing a higher-strength alloy to fix a twist problem. Every steel has G near 80 GPa regardless of heat treatment, so that change buys nothing. For a real sizing I would run stress, twist, torsional critical speed, and fatigue at the notches, and state which one governs.</p>`,
    },
    {
      id: "torsion-qa04",
      q: `<p>How do power, torque, and speed relate in shaft design?</p>`,
      a: `<p>Mechanical power is P = T&omega; with &omega; = 2&pi;N/60. At fixed power, torque is inversely proportional to speed. A 15 kW motor at 1750 rpm delivers only 82 N&middot;m; put it through a 12:1 reducer and the output shaft carries 982 N&middot;m at 146 rpm. That factor of 12 drives shaft diameter, key width, coupling rating, and bearing loads, which is why gearbox output shafts are so much fatter than motor shafts.</p><p>The habit I would demonstrate: convert units before touching the formula. kW to W, rpm to rad/s. Dividing watts by rpm directly is wrong by 9.55 and it is the most common single error in this topic. In US units the shortcut is T (lb&middot;ft) = 5252 &times; hp / rpm, which comes from the same algebra.</p><p>I would also flag what P = T&omega; misses. Nameplate power is continuous rating, not the peak the shaft sees: motor breakdown torque can be two to three times rated, a jam or a hard stop applies far more, and start-up inertia torque is on top of the load torque. So I would size on a duty cycle or a defined stall torque, not on the nameplate, and ask what the drive's current limit actually is.</p>`,
    },
    {
      id: "torsion-qa05",
      q: `<p>When do the simple circular-shaft torsion formulas fail?</p>`,
      a: `<p>They fail for non-circular sections, because plane sections no longer stay plane. A rectangular bar warps and needs its own torsion constant; a thin open strip has J &asymp; st&sup3;/3, which can be hundreds of times smaller than the polar moment of an equal-area circle. They also fail for open thin-walled sections such as channels and angles, where a load off the shear centre produces twist you did not design for.</p><p>They fail for closed thin-walled cells too, in the sense that the useful relation there is shear flow: q = T/(2A<sub>m</sub>) with &tau; = q/t, where A<sub>m</sub> is the mid-wall enclosed area. And they fail wherever the geometry is not prismatic: shoulders, keyways, cross-holes, splines and snap-ring grooves all raise the local stress by K<sub>t</sub> of roughly 1.5 to 3, and under cyclic torque that notch, not the smooth section, sets the life.</p><p>Finally they fail past first yield, where the linear distribution flattens and the fully plastic torque is 4/3 of the first-yield torque, and under restrained warping, where axial stresses appear that the theory has no term for. My approach is to use Tc/J for the first-pass estimate, then explicitly name which of these effects the real part has and check those.</p>`,
    },
    {
      id: "torsion-qa06",
      q: `<p>Walk me through sizing a shaft from scratch.</p>`,
      a: `<p>First I get torque, either directly or from P = T&omega; after converting rpm to rad/s, and I ask what the peak is rather than the nameplate. Stall, jam, and start-up inertia. Then I draw a torque diagram if there are several gears or pulleys, because internal torque steps at each take-off and the segment nearest the driver usually governs.</p><p>For a first pass on a solid shaft I use &tau; = 16T/(&pi;d&sup3;) against an allowable of S<sub>y</sub>/(&radic;3 n). Then I check twist with &theta; = TL/GJ against whatever the alignment, backlash, or servo bandwidth budget allows. On long shafts this usually drives the answer. If the shaft carries gear, belt, or overhung loads I lay out the bearing reactions, get the bending moment diagram, and combine at the worst section with &sigma;<sub>vm</sub> = &radic;(&sigma;&sup2; + 3&tau;&sup2;).</p><p>Then the parts that actually break: rotating bending means the bending stress fully reverses, so I run a fatigue check with K<sub>f</sub> at every shoulder, keyway and groove, and specify the fillet radii on the drawing. I confirm the key and hub can pass the torque, because keys usually yield before shafts do. Finally I round to a stock size, check torsional critical speed against the operating range, and confirm bearing seats and retaining features fit.</p>`,
    },
    {
      id: "torsion-qa07",
      q: `<p>Why do keyways and shoulders matter in shaft torsion?</p>`,
      a: `<p>They interrupt the load path. A keyway removes metal, forces the shear flow around a sharp internal corner, and typically raises the local stress by a torsional K<sub>t</sub> of 2 to 3 at the keyway root; a sharp shoulder step is around 2.5, dropping to about 1.3 with a generous fillet. These features also tend to sit exactly where the loads are worst, next to the gear that applies both torque and bending, or under the bearing that reacts it.</p><p>Under rotating or reversing service those notches become crack starters even when the nominal Tc/J looks harmless. A shaft with a static factor of safety of 3 can still fail in six months of start-stop cycles, and the fracture surface will show beach marks fanning out from a keyway corner. What actually helps: increase the fillet radius (the cheapest single change, and it is free at the machining stage), specify surface finish, use a radiused or Woodruff key instead of a square-ended slot, move the notch away from the peak moment, and consider shot peening to put the surface into residual compression.</p><p>The message I would give in a review is that &tau; = Tc/J is only the baseline. K<sub>f</sub> and the fatigue limit decide the design, and those live on the drawing as a radius callout and a surface-finish symbol, not in the stress calculation.</p>`,
    },
    {
      id: "torsion-qa08",
      q: `<p>How do you combine torsion with bending for a ductile shaft?</p>`,
      a: `<p>At a surface point, bending gives a normal stress &sigma; = Mc/I = 32M/(&pi;d&sup3;) and torsion gives shear &tau; = Tc/J = 16T/(&pi;d&sup3;). The factor of 2 between them is just J = 2I for a circle, and mixing up the 16 and the 32 is the most common arithmetic error in this calculation. Combine them with von Mises for a ductile metal: &sigma;<sub>vm</sub> = &radic;(&sigma;&sup2; + 3&tau;&sup2;). For M = 250 N&middot;m and T = 400 N&middot;m on a 30 mm shaft that is &radic;(94.3&sup2; + 3&times;75.5&sup2;) = 161 MPa.</p><p>Then I stop and ask what cycles. On a rotating shaft the bending stress fully reverses every revolution while the torque is usually steady or slowly varying, so the static number is not the design driver. I would separate the alternating and mean components, apply K<sub>f</sub> to the alternating bending and to any alternating torsion, knock the endurance limit down for surface finish, size, and reliability, and run a Goodman or ASME-elliptic check at each critical section.</p><p>If the material is brittle rather than ductile, say a cast iron housing or a hardened component, I switch criteria. Maximum principal stress governs and the 45&deg; plane matters. That is the same physics that makes a brittle shaft break on a helix.</p>`,
    },
    {
      id: "torsion-qa09",
      q: `<p>A customer returns a snapped drive shaft. Walk me through your investigation.</p>`,
      a: `<p>Before touching an analysis I look at the fracture surface, because it names the failure mode for free. A flat face square to the axis with a rubbed or smeared appearance is ductile shear from a single torsional overload. A clean 45&deg; helix is brittle tensile fracture. On a part that should be ductile, that immediately points at wrong material, over-hardening, hydrogen embrittlement, or a cold-service condition. Beach marks fanning from a keyway corner or fillet root, with a small final zone, is high-cycle fatigue; a large final zone means the loads were near the static limit too. I photograph it and I do not clean it.</p><p>Then I locate the origin. Almost always it is a geometric feature: keyway corner, snap-ring groove, cross-hole, shoulder fillet, spline root, or a machining witness mark. I measure the actual fillet radius and surface finish against the drawing, because "0.5 mm radius" on paper and 0.1 mm on the part is a routine finding and roughly doubles K<sub>f</sub>.</p><p>In parallel I ask for the load history rather than the nameplate: what does the drive current log show, how many start-stops, was there a jam event, is there torque ripple or a resonance at some speed. Then I rebuild the numbers: nominal Tc/J, combined bending plus torsion at that section, K<sub>f</sub>, a fatigue check. Then I ask whether the calculated life matches the observed life. If it does not, the missing physics is usually misalignment, an unaccounted bending load, or a resonance. Finally I check material certs and hardness on the broken part itself.</p>`,
    },
    {
      id: "torsion-qa10",
      q: `<p>A shaft passes its stress check with a factor of 3 but the machine still has a problem at one particular speed. What is going on and what would you do?</p>`,
      a: `<p>A problem confined to a narrow speed band is a resonance signature, not a strength problem. A drivetrain is a torsional spring-inertia system: the shaft supplies stiffness k = GJ/L and the couplings, flywheels, gears and rotor supply inertia. For a two-inertia system the natural frequency is &omega;<sub>n</sub> = &radic;[k(J<sub>1</sub>+J<sub>2</sub>)/(J<sub>1</sub>J<sub>2</sub>)], and if any excitation harmonic crosses it, the dynamic torque can be many times the mean torque even though the mean is comfortable. Static Tc/J and TL/GJ cannot see this at all.</p><p>The usual excitations are engine firing pulses, motor cogging and drive PWM harmonics, gear mesh frequency (teeth &times; rpm), universal-joint second-order at large angles, and a control loop whose bandwidth overlaps the mode. So my first request is order-tracked torque or strain data, not more analysis: I want to know which order it is, because that identifies the source.</p><p>Fixes, roughly in order of cost: move the natural frequency out of the operating range by changing shaft stiffness (length or diameter) or adding/removing inertia; add damping with an elastomeric or viscous coupling or a tuned absorber; detune the excitation (change tooth count, reduce joint angle, retune the control loop); or, last resort, place a small forbidden speed band in the operating envelope. I would also make sure the fatigue check uses the resonant torque amplitude, not the mean. That is usually where the shaft has really been living.</p>`,
    },
  ],
};

export default content;
