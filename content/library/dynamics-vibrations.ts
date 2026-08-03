import type { TopicContent } from "../types";

// ---------------------------------------------------------------------------
// Dynamics & Vibrations
// ---------------------------------------------------------------------------

const figMSD = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <line x1="72" y1="62" x2="72" y2="190" stroke="#334155" stroke-width="3"/>
  <line x1="60" y1="76" x2="72" y2="64" stroke="#64748b"/>
  <line x1="60" y1="98" x2="72" y2="86" stroke="#64748b"/>
  <line x1="60" y1="120" x2="72" y2="108" stroke="#64748b"/>
  <line x1="60" y1="142" x2="72" y2="130" stroke="#64748b"/>
  <line x1="60" y1="164" x2="72" y2="152" stroke="#64748b"/>
  <line x1="60" y1="186" x2="72" y2="174" stroke="#64748b"/>
  <path d="M72,105 h28 l10,-20 l20,40 l20,-40 l20,40 l20,-40 l10,20 h28" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <rect x="300" y="82" width="70" height="70" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="72" y1="145" x2="152" y2="145" stroke="#334155" stroke-width="2"/>
  <rect x="152" y="131" width="62" height="28" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="188" y1="145" x2="300" y2="145" stroke="#334155" stroke-width="2"/>
  <line x1="188" y1="133" x2="188" y2="157" stroke="#334155" stroke-width="2.5"/>
  <text x="150" y="74" text-anchor="middle" fill="#1d4ed8" font-weight="600">spring k</text>
  <text x="183" y="182" text-anchor="middle" fill="#334155" font-weight="600">damper c</text>
  <text x="335" y="121" text-anchor="middle" fill="#334155" font-weight="600">mass m</text>
  <text x="230" y="222" text-anchor="middle" fill="#64748b">k and c both act between ground and the mass: one translational DOF</text>
</svg>`;

// Displacement magnification M = 1/sqrt((1-r^2)^2 + (2 zeta r)^2), computed
// point-by-point. The damped peaks sit at r = sqrt(1 - 2 zeta^2), which is
// always at or LEFT of r = 1 — heavier damping moves the peak toward zero.
const figRes = `<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="dv2-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <line x1="64" y1="222" x2="430" y2="222" stroke="#64748b" stroke-width="1.5" marker-end="url(#dv2-ax)"/>
  <line x1="64" y1="222" x2="64" y2="40" stroke="#64748b" stroke-width="1.5" marker-end="url(#dv2-ax)"/>
  <line x1="60" y1="190" x2="64" y2="190" stroke="#64748b"/>
  <line x1="60" y1="158" x2="64" y2="158" stroke="#64748b"/>
  <line x1="60" y1="126" x2="64" y2="126" stroke="#64748b"/>
  <line x1="60" y1="94" x2="64" y2="94" stroke="#64748b"/>
  <line x1="60" y1="62" x2="64" y2="62" stroke="#64748b"/>
  <text x="56" y="194" text-anchor="end" fill="#64748b" font-size="12">1</text>
  <text x="56" y="162" text-anchor="end" fill="#64748b" font-size="12">2</text>
  <text x="56" y="130" text-anchor="end" fill="#64748b" font-size="12">3</text>
  <text x="56" y="98" text-anchor="end" fill="#64748b" font-size="12">4</text>
  <text x="56" y="66" text-anchor="end" fill="#64748b" font-size="12">5</text>
  <line x1="180" y1="222" x2="180" y2="226" stroke="#64748b"/>
  <line x1="296" y1="222" x2="296" y2="226" stroke="#64748b"/>
  <line x1="412" y1="222" x2="412" y2="226" stroke="#64748b"/>
  <text x="180" y="240" text-anchor="middle" fill="#64748b" font-size="12">1</text>
  <text x="296" y="240" text-anchor="middle" fill="#64748b" font-size="12">2</text>
  <text x="412" y="240" text-anchor="middle" fill="#64748b" font-size="12">3</text>
  <text x="10" y="34" fill="#64748b">magnification X k / F</text>
  <text x="246" y="256" text-anchor="middle" fill="#64748b">frequency ratio r = &omega; / &omega;<tspan baseline-shift="sub" font-size="10">n</tspan></text>
  <line x1="64" y1="190" x2="412" y2="190" stroke="#cbd5e1" stroke-dasharray="4 4"/>
  <line x1="180" y1="222" x2="180" y2="52" stroke="#64748b" stroke-dasharray="5 4"/>
  <text x="186" y="46" fill="#64748b">r = 1</text>
  <polyline fill="none" stroke="#dc2626" stroke-width="2.5" points="64.0,190.0 67.5,190.0 71.0,189.9 74.4,189.7 77.9,189.5 81.4,189.3 84.9,189.0 88.4,188.6 91.8,188.1 95.3,187.5 98.8,186.9 102.3,186.2 105.8,185.4 109.2,184.4 112.7,183.3 116.2,182.1 119.7,180.7 123.2,179.2 126.6,177.3 130.1,175.3 133.6,172.9 137.1,170.1 140.6,166.8 144.0,162.9 147.5,158.3 151.0,152.8 154.5,146.1 158.0,137.8 161.4,127.6 164.9,115.0 168.4,99.7 171.9,82.8 175.4,67.7 178.8,61.2 182.3,68.1 185.8,85.1 189.3,104.6 192.8,122.4 196.2,137.0 199.7,148.7 203.2,158.2 206.7,165.7 210.2,171.9 213.6,177.1 217.1,181.4 220.6,185.0 224.1,188.2 227.6,190.9 231.0,193.2 234.5,195.3 238.0,197.1 241.5,198.7 245.0,200.2 248.4,201.5 251.9,202.7 255.4,203.8 258.9,204.7 262.4,205.6 276.3,208.5 290.2,210.7 304.1,212.3 318.0,213.6 332.0,214.7 345.9,215.5 359.8,216.2 373.7,216.8 387.6,217.3 401.6,217.7 412.0,218.0"/>
  <polyline fill="none" stroke="#1d4ed8" stroke-width="2.5" points="64.0,190.0 67.5,190.0 71.0,189.9 74.4,189.8 77.9,189.6 81.4,189.4 84.9,189.1 88.4,188.7 91.8,188.3 95.3,187.8 98.8,187.3 102.3,186.7 105.8,186.0 109.2,185.2 112.7,184.4 116.2,183.4 119.7,182.3 123.2,181.1 126.6,179.8 130.1,178.3 133.6,176.7 137.1,175.0 140.6,173.1 144.0,171.0 147.5,168.8 151.0,166.5 154.5,164.1 158.0,161.8 161.4,159.6 164.9,157.8 168.4,156.5 171.9,155.9 172.5,155.9 175.4,156.2 178.8,157.4 182.3,159.5 185.8,162.2 189.3,165.4 192.8,168.8 196.2,172.3 199.7,175.7 203.2,179.0 206.7,182.0 210.2,184.9 213.6,187.4 217.1,189.8 220.6,191.9 224.1,193.9 227.6,195.6 231.0,197.2 234.5,198.7 238.0,200.0 241.5,201.3 245.0,202.4 248.4,203.4 251.9,204.4 255.4,205.2 258.9,206.1 262.4,206.8 276.3,209.3 290.2,211.2 304.1,212.7 318.0,213.9 332.0,214.9 345.9,215.7 359.8,216.3 373.7,216.9 387.6,217.4 401.6,217.8 412.0,218.1"/>
  <polyline fill="none" stroke="#334155" stroke-width="2.5" points="64.0,190.0 67.5,190.0 71.0,189.9 74.4,189.9 77.9,189.8 81.4,189.6 84.9,189.5 88.4,189.3 91.8,189.1 95.3,188.9 98.8,188.6 102.3,188.3 105.8,188.0 109.2,187.7 112.7,187.4 116.2,187.1 119.7,186.7 123.2,186.4 126.6,186.1 130.1,185.8 133.6,185.5 137.1,185.3 140.6,185.2 144.0,185.1 146.0,185.0 147.5,185.1 151.0,185.1 154.5,185.3 158.0,185.6 161.4,186.0 164.9,186.6 168.4,187.2 171.9,187.9 175.4,188.8 178.8,189.7 182.3,190.7 185.8,191.7 189.3,192.7 192.8,193.8 196.2,194.9 199.7,195.9 203.2,197.0 206.7,198.0 210.2,199.0 213.6,199.9 217.1,200.9 220.6,201.8 224.1,202.6 227.6,203.4 231.0,204.2 234.5,204.9 238.0,205.6 241.5,206.3 245.0,206.9 248.4,207.5 251.9,208.1 255.4,208.6 258.9,209.1 262.4,209.6 276.3,211.3 290.2,212.6 304.1,213.8 318.0,214.7 332.0,215.5 345.9,216.2 359.8,216.7 373.7,217.2 387.6,217.6 401.6,218.0 412.0,218.3"/>
  <polyline fill="none" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="4 3" points="146.0,185.0 172.5,155.9 178.8,61.2"/>
  <circle cx="178.8" cy="61.2" r="4" fill="#dc2626"/>
  <circle cx="172.5" cy="155.9" r="4" fill="#1d4ed8"/>
  <circle cx="146.0" cy="185.0" r="4" fill="#334155"/>
  <line x1="300" y1="62" x2="324" y2="62" stroke="#dc2626" stroke-width="3"/>
  <text x="330" y="66" fill="#334155" font-size="12">&zeta; = 0.10</text>
  <line x1="300" y1="84" x2="324" y2="84" stroke="#1d4ed8" stroke-width="3"/>
  <text x="330" y="88" fill="#334155" font-size="12">&zeta; = 0.25</text>
  <line x1="300" y1="106" x2="324" y2="106" stroke="#334155" stroke-width="3"/>
  <text x="330" y="110" fill="#334155" font-size="12">&zeta; = 0.50</text>
  <text x="230" y="272" text-anchor="middle" fill="#64748b" font-size="12">peak sits at r = &radic;(1 &minus; 2&zeta;&sup2;) &le; 1 &mdash; more damping moves it LEFT, never right</text>
</svg>`;

const figSpr = `<svg viewBox="0 0 460 265" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="115" y="24" text-anchor="middle" font-weight="600" fill="#334155">Series (end to end)</text>
  <line x1="55" y1="44" x2="175" y2="44" stroke="#334155" stroke-width="3"/>
  <line x1="60" y1="34" x2="70" y2="44" stroke="#64748b"/>
  <line x1="76" y1="34" x2="86" y2="44" stroke="#64748b"/>
  <line x1="92" y1="34" x2="102" y2="44" stroke="#64748b"/>
  <line x1="108" y1="34" x2="118" y2="44" stroke="#64748b"/>
  <line x1="124" y1="34" x2="134" y2="44" stroke="#64748b"/>
  <line x1="140" y1="34" x2="150" y2="44" stroke="#64748b"/>
  <line x1="156" y1="34" x2="166" y2="44" stroke="#64748b"/>
  <path d="M115,44 v8 l-11,6 l22,9 l-22,9 l22,9 l-11,6 v9" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <circle cx="115" cy="100" r="3.5" fill="#334155"/>
  <path d="M115,100 v8 l-11,6 l22,9 l-22,9 l22,9 l-11,6 v9" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <rect x="86" y="156" width="58" height="42" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <text x="115" y="182" text-anchor="middle" fill="#334155" font-weight="600">m</text>
  <text x="136" y="76" fill="#1d4ed8" font-weight="600">k<tspan baseline-shift="sub" font-size="10">1</tspan></text>
  <text x="136" y="132" fill="#1d4ed8" font-weight="600">k<tspan baseline-shift="sub" font-size="10">2</tspan></text>
  <text x="115" y="222" text-anchor="middle" fill="#334155" font-size="12">1/k = 1/k<tspan baseline-shift="sub" font-size="9">1</tspan> + 1/k<tspan baseline-shift="sub" font-size="9">2</tspan></text>
  <text x="115" y="242" text-anchor="middle" fill="#64748b" font-size="12">softer than either spring</text>
  <line x1="230" y1="36" x2="230" y2="248" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="345" y="24" text-anchor="middle" font-weight="600" fill="#334155">Parallel (side by side)</text>
  <line x1="285" y1="44" x2="405" y2="44" stroke="#334155" stroke-width="3"/>
  <line x1="290" y1="34" x2="300" y2="44" stroke="#64748b"/>
  <line x1="306" y1="34" x2="316" y2="44" stroke="#64748b"/>
  <line x1="322" y1="34" x2="332" y2="44" stroke="#64748b"/>
  <line x1="338" y1="34" x2="348" y2="44" stroke="#64748b"/>
  <line x1="354" y1="34" x2="364" y2="44" stroke="#64748b"/>
  <line x1="370" y1="34" x2="380" y2="44" stroke="#64748b"/>
  <line x1="386" y1="34" x2="396" y2="44" stroke="#64748b"/>
  <path d="M315,44 v10 l-11,8 l22,12 l-22,12 l22,12 l-22,12 l22,12 l-11,8 v10" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <path d="M375,44 v10 l-11,8 l22,12 l-22,12 l22,12 l-22,12 l22,12 l-11,8 v10" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <rect x="300" y="144" width="90" height="12" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="316" y="156" width="58" height="42" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <text x="345" y="182" text-anchor="middle" fill="#334155" font-weight="600">m</text>
  <text x="288" y="100" text-anchor="end" fill="#1d4ed8" font-weight="600">k<tspan baseline-shift="sub" font-size="10">1</tspan></text>
  <text x="398" y="100" fill="#1d4ed8" font-weight="600">k<tspan baseline-shift="sub" font-size="10">2</tspan></text>
  <text x="345" y="222" text-anchor="middle" fill="#334155" font-size="12">k = k<tspan baseline-shift="sub" font-size="9">1</tspan> + k<tspan baseline-shift="sub" font-size="9">2</tspan></text>
  <text x="345" y="242" text-anchor="middle" fill="#64748b" font-size="12">stiffer than either spring</text>
</svg>`;

const figCant = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="dv5-mo" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="dv5-dim" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0L7,3.5L0,7z" fill="#64748b"/></marker>
  </defs>
  <line x1="72" y1="52" x2="72" y2="182" stroke="#334155" stroke-width="3"/>
  <line x1="60" y1="66" x2="72" y2="54" stroke="#64748b"/>
  <line x1="60" y1="88" x2="72" y2="76" stroke="#64748b"/>
  <line x1="60" y1="110" x2="72" y2="98" stroke="#64748b"/>
  <line x1="60" y1="132" x2="72" y2="120" stroke="#64748b"/>
  <line x1="60" y1="154" x2="72" y2="142" stroke="#64748b"/>
  <line x1="60" y1="176" x2="72" y2="164" stroke="#64748b"/>
  <rect x="72" y="112" width="248" height="12" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="320" y="96" width="50" height="44" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <text x="345" y="123" text-anchor="middle" fill="#334155" font-weight="600">m</text>
  <path d="M72,118 C170,118 250,104 320,80" fill="none" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="5 4"/>
  <path d="M72,118 C170,118 250,132 320,156" fill="none" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="5 4"/>
  <line x1="392" y1="78" x2="392" y2="158" stroke="#dc2626" stroke-width="2.5" marker-end="url(#dv5-mo)"/>
  <line x1="392" y1="158" x2="392" y2="78" stroke="#dc2626" stroke-width="2.5" marker-end="url(#dv5-mo)"/>
  <text x="392" y="122" fill="#dc2626" font-weight="600" font-size="12">tip motion</text>
  <line x1="72" y1="206" x2="320" y2="206" stroke="#64748b" stroke-width="1" marker-end="url(#dv5-dim)"/>
  <line x1="320" y1="206" x2="72" y2="206" stroke="#64748b" stroke-width="1" marker-end="url(#dv5-dim)"/>
  <line x1="72" y1="200" x2="72" y2="212" stroke="#64748b" stroke-width="1"/>
  <line x1="320" y1="200" x2="320" y2="212" stroke="#64748b" stroke-width="1"/>
  <text x="196" y="226" text-anchor="middle" fill="#64748b" font-size="12">L</text>
  <text x="150" y="86" fill="#1d4ed8" font-weight="600">k = 3EI / L<tspan baseline-shift="super" font-size="10">3</tspan></text>
  <rect x="96" y="36" width="44" height="14" fill="#dbeafe" stroke="#334155" stroke-width="1.2"/>
  <text x="118" y="30" text-anchor="middle" fill="#64748b" font-size="11">b</text>
  <text x="148" y="48" fill="#64748b" font-size="11">h</text>
  <text x="176" y="48" fill="#64748b" font-size="11">section: I = b h<tspan baseline-shift="super" font-size="9">3</tspan> / 12</text>
</svg>`;

const figImbalance = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="dv3-force" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <circle cx="230" cy="112" r="72" fill="#dbeafe" stroke="#334155" stroke-width="2"/>
  <circle cx="230" cy="112" r="5" fill="#334155"/>
  <circle cx="280" cy="78" r="11" fill="#dc2626"/>
  <line x1="230" y1="112" x2="280" y2="78" stroke="#64748b" stroke-width="1.5"/>
  <text x="257" y="91" fill="#64748b">e</text>
  <path d="M167 112 A63 63 0 0 1 230 49" fill="none" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#dv3-force)"/>
  <line x1="280" y1="78" x2="332" y2="42" stroke="#dc2626" stroke-width="2.5" marker-end="url(#dv3-force)"/>
  <text x="342" y="41" fill="#dc2626" font-weight="600">F = m e &omega;&sup2;</text>
  <text x="230" y="211" text-anchor="middle" fill="#334155">eccentric mass creates a speed-dependent forcing vector</text>
</svg>`;

const content: TopicContent = {
  lesson: {
    title: "Dynamics & Vibrations",
    intro: `<p>Dynamics is mechanics with acceleration. What gets tested is whether you can choose between force balance, energy, impulse-momentum and vibration models. Vibrations are especially common in hardware interviews because resonance, isolation, and rotating unbalance show up in motors, fans, pumps, vehicles, robots, and instruments. Almost every vibration question reduces to one reflex: estimate &radic;(k/m), convert it to Hz, and compare it with the excitation.</p>
<figure class="fig">${figMSD}<figcaption>The single-degree-of-freedom mass-spring-damper is the vocabulary of mechanical vibration.</figcaption></figure>`,
    sections: [
      {
        heading: "Newton and Euler equations",
        html: `<p>For translation, sum forces equals mass times acceleration. For rotation about a fixed axis, sum moments equals mass moment of inertia times angular acceleration:</p>
<p class="eq">&Sigma;F = ma, &nbsp;&nbsp; &Sigma;M = I&alpha;</p>
<p><strong>m</strong> is mass, <strong>a</strong> is acceleration, <strong>I</strong> here is mass moment of inertia (kg&middot;m<sup>2</sup>), and <strong>&alpha;</strong> is angular acceleration. Do not confuse this I with the area moment of inertia used in beam bending.</p>
<p>Mass moment of inertia is defined <em>about a particular axis</em>. A uniform rod of mass m and length L has I = mL<sup>2</sup>/12 about its centre and mL<sup>2</sup>/3 about one end, a factor of four for the same part. When the axis is offset a distance d from the centre of mass, use the parallel axis theorem:</p>
<p class="eq">I = I<sub>cm</sub> + m d<sup>2</sup></p>
<p>Choose coordinates carefully, draw an FBD, and keep signs consistent. Dynamics problems fail quickly when acceleration directions are guessed instead of defined.</p>`,
      },
      {
        heading: "Energy and impulse-momentum",
        html: `<p>Energy is best when forces act over distance and you do not need time history. Impulse-momentum is best for impacts or short-duration forces:</p>
<p class="eq">T<sub>1</sub> + V<sub>1</sub> + W<sub>nc</sub> = T<sub>2</sub> + V<sub>2</sub>, &nbsp;&nbsp; &int;Fdt = &Delta;p</p>
<p><strong>T</strong> is kinetic energy, <strong>V</strong> is potential energy, and <strong>W<sub>nc</sub></strong> is work by non-conservative forces such as friction or actuator input. In the impulse equation, <strong>F</strong> is force over time <strong>t</strong>, and <strong>&Delta;p</strong> is change in linear momentum. Here T means kinetic energy, not torque.</p>
<p>For a body that rolls without slipping, kinetic energy has two parts, &frac12;mv<sup>2</sup> + &frac12;I&omega;<sup>2</sup> with &omega; = v/R. That is why a solid cylinder released down a slope arrives slower than a block sliding on ice: part of the potential energy went into spin.</p>
<p>For impacts, momentum is conserved along the contact normal and the coefficient of restitution <strong>e</strong> supplies the second equation:</p>
<p class="eq">e = (v<sub>2</sub>&prime; &minus; v<sub>1</sub>&prime;) / (v<sub>1</sub> &minus; v<sub>2</sub>)</p>
<p>In interviews, name why you are choosing a method. Energy avoids solving time history when only speed or displacement is needed; impulse-momentum avoids detailed force history when collision duration is short. That method choice is often more impressive than forcing every problem through Newton's second law.</p>`,
      },
      {
        heading: "Natural frequency: the first number to estimate",
        html: `<p>For an undamped mass-spring system:</p>
<p class="eq">&omega;<sub>n</sub> = &radic;(k/m), &nbsp;&nbsp; f<sub>n</sub> = &omega;<sub>n</sub>/(2&pi;)</p>
<p><strong>k</strong> is stiffness (N/m), <strong>m</strong> is mass, <strong>&omega;<sub>n</sub></strong> is angular natural frequency (rad/s), and <strong>f<sub>n</sub></strong> is cycles per second (Hz). Damping ratio is <strong>&zeta; = c/c<sub>c</sub></strong>, where c is viscous damping and c<sub>c</sub> = 2&radic;(km).</p>
<div class="callout warn"><p><strong>The single most common error in this topic:</strong> quoting &radic;(k/m) as if it were Hz. &radic;(k/m) is rad/s. Divide by 2&pi; before you compare it to a spec, a motor speed in Hz, or a shaker profile. A 400 rad/s mode is a 63.7 Hz mode, and mistaking one for the other is a 6.28&times; error that changes every conclusion.</p></div>
<p>Three conversions you should be able to do without thinking: rpm to Hz is divide by 60; rpm to rad/s is multiply by 2&pi;/60 (&asymp; 0.105); Hz to rad/s is multiply by 2&pi;.</p>
<p>If you know the static sag of a vertical mount, you already know its frequency: &delta; = mg/k means k/m = g/&delta;, so f<sub>n</sub> = (1/2&pi;)&radic;(g/&delta;). One millimetre of sag is about 15.8 Hz, 10 mm is about 5 Hz, 25 mm is about 3.2 Hz. That one-line check catches most isolator selection mistakes.</p>`,
      },
      {
        heading: "Effective stiffness: springs, beams, and shafts",
        html: `<p>Real hardware rarely hands you k. You build it from the load path. Springs that share the load and deflect together are <strong>in parallel</strong> and their rates add. Springs that carry the same force and deflect one after another are <strong>in series</strong> and their compliances add, so the pair is softer than either one alone.</p>
<p class="eq">parallel: k = k<sub>1</sub> + k<sub>2</sub> &nbsp;&nbsp;&nbsp; series: 1/k = 1/k<sub>1</sub> + 1/k<sub>2</sub></p>
<figure class="fig">${figSpr}<figcaption>Adding a spring in parallel stiffens; stacking one in series softens. Reading the load path wrong is the classic setup error.</figcaption></figure>
<p>The series case is the one people forget in the field: a beautifully specified isolator bolted to a floppy sheet-metal pan sees the pan's compliance in series with its own, and the assembly lands far below the design frequency.</p>
<p>A structure acts as a spring too. For a cantilever loaded at the free end, and for a shaft in torsion:</p>
<p class="eq">k = 3EI/L<sup>3</sup> &nbsp;&nbsp;&nbsp; k<sub>t</sub> = GJ/L</p>
<p><strong>E</strong> is Young's modulus, <strong>I</strong> is the <em>area</em> moment of inertia of the section, <strong>L</strong> is length, <strong>G</strong> is shear modulus, and <strong>J</strong> is the polar area moment. A simply supported beam loaded at mid-span gives k = 48EI/L<sup>3</sup>.</p>
<figure class="fig">${figCant}<figcaption>Cantilever with a tip mass: the guaranteed interview question. f<sub>n</sub> = (1/2&pi;)&radic;(3EI/mL<sup>3</sup>).</figcaption></figure>
<p>Note the cubes. Doubling a bracket's length drops its stiffness eightfold and its frequency by 2.83&times;; doubling its thickness raises stiffness eightfold. Length and thickness are far stronger levers than material choice, because steel and aluminium have almost the same E/&rho; ratio.</p>`,
      },
      {
        heading: "Damping, resonance, and Q",
        html: `<p>Forced vibration becomes dangerous near a natural frequency. The steady-state magnification of a harmonically forced SDOF system is</p>
<p class="eq">X k / F = 1 / &radic;[(1 &minus; r<sup>2</sup>)<sup>2</sup> + (2&zeta;r)<sup>2</sup>], &nbsp;&nbsp; r = &omega;/&omega;<sub>n</sub></p>
<figure class="fig">${figRes}<figcaption>Magnification versus frequency ratio. The peak sits at r = &radic;(1 &minus; 2&zeta;<sup>2</sup>), so heavier damping moves it to the left of r = 1 and it disappears entirely above &zeta; = 0.707.</figcaption></figure>
<p>Read three things off that plot. Well below resonance the response is stiffness-controlled and magnification is 1 regardless of damping. Well above resonance it is mass-controlled and rolls off as 1/r<sup>2</sup>, again almost regardless of damping. Damping only earns its keep in the narrow band around r = 1, where the peak height is approximately 1/(2&zeta;).</p>
<p>That reciprocal is the quality factor:</p>
<p class="eq">Q = 1/(2&zeta;) &asymp; f<sub>n</sub>/&Delta;f</p>
<p>where <strong>&Delta;f</strong> is the half-power bandwidth measured between the points 0.707 of peak amplitude. A bolted steel structure typically shows &zeta; of 1&ndash;2% (Q of 25&ndash;50), a welded frame less, an elastomer mount 5&ndash;15%.</p>
<p>Damping is measured, not looked up. From a free-decay trace, take the logarithmic decrement over n cycles:</p>
<p class="eq">&delta; = (1/n) ln(x<sub>0</sub>/x<sub>n</sub>), &nbsp;&nbsp; &zeta; = &delta;/&radic;(4&pi;<sup>2</sup> + &delta;<sup>2</sup>)</p>
<p>Damping barely shifts the frequency itself: &omega;<sub>d</sub> = &omega;<sub>n</sub>&radic;(1 &minus; &zeta;<sup>2</sup>), which is a 0.5% change at &zeta; = 0.10. So if you need to move a mode, change k or m. Damping will not do it.</p>
<div class="callout"><p><strong>Moving a mode costs more than you think.</strong> Because f &prop; &radic;(k/m), doubling frequency needs <em>four times</em> the stiffness at constant mass, or a quarter of the mass at constant stiffness. Ribs, gussets, and shorter spans are the practical levers. If you cannot separate the frequencies, the remaining options are to reduce the excitation (balance, alignment), avoid the speed band, or accelerate through it quickly.</p></div>`,
      },
      {
        heading: "Isolation and transmissibility: the √2 rule",
        html: `<p>An isolator is a deliberately soft spring placed between a source and whatever you are protecting. Force transmissibility, the fraction of the source force that reaches the floor, is</p>
<p class="eq">T = &radic;[1 + (2&zeta;r)<sup>2</sup>] / &radic;[(1 &minus; r<sup>2</sup>)<sup>2</sup> + (2&zeta;r)<sup>2</sup>]</p>
<p>Every curve of that family passes through T = 1 at r = &radic;2, whatever the damping. That single fact drives isolator design:</p>
<ul>
<li>Below r = &radic;2 an isolator makes things <strong>worse</strong>, not better. It amplifies.</li>
<li>Above r = &radic;2 it isolates, and for light damping T &asymp; 1/(r<sup>2</sup> &minus; 1).</li>
<li>Aim for r of 3 or more: r = 3 gives T = 12.5%, r = 4 gives 6.7%.</li>
</ul>
<div class="callout warn"><p><strong>The classic field failure:</strong> a machine vibrates, so someone fits stiffer mounts because stiff sounds stronger. Stiffer raises f<sub>n</sub>, lowers r, and can drag the machine from the isolation region back through resonance. Vibration gets several times worse. Isolation always wants a <em>lower</em> natural frequency, limited by static sag, travel stops, and stability, never a higher one.</p></div>
<p>Damping is a genuine tradeoff here. It tames the resonance you must cross during run-up and shutdown, but the damper force is proportional to relative velocity, so at high r a heavily damped mount transmits more than a lightly damped one. Elastomer mounts around &zeta; = 0.05&ndash;0.10 are the usual compromise.</p>`,
      },
      {
        heading: "Rotating unbalance and critical speed",
        html: `<p>A small eccentric mass creates a rotating force:</p>
<p class="eq">F = m e &omega;&sup2;</p>
<p><strong>m</strong> is the unbalance mass, <strong>e</strong> is eccentricity from the rotation axis, and <strong>&omega;</strong> is shaft speed in rad/s. The force rotates with the shaft, so it excites the structure at running speed, the 1x order, and its amplitude grows with the <em>square</em> of speed. Double the rpm and the same residual unbalance pushes four times as hard. That is why balance grades are tied to operating speed and why a fan that is fine at 900 rpm can destroy its bearings at 3600 rpm.</p>
<figure class="fig">${figImbalance}<figcaption>Unbalance force scales with speed squared, so small offsets become large at high rpm.</figcaption></figure>
<p>The speed at which the 1x order coincides with a lateral natural frequency of the rotor-bearing system is the <strong>critical speed</strong>. It is the same &radic;(k/m) calculation, expressed in rpm:</p>
<p class="eq">N<sub>cr</sub> = (60/2&pi;)&radic;(k/m)</p>
<p>Many machines run supercritical, above the first critical, and cross it on every start and stop. The design answer is not to dwell there: balance well, provide damping at the bearings, keep a separation margin at steady speed, and ramp through the critical region quickly enough that transient amplitude stays inside the clearances.</p>`,
      },
    ],
    equations: [
      { name: "Newton's second law", formula: "<p>&Sigma;F = ma</p>", note: "&Sigma;F is net external force, m mass, and a acceleration along the chosen coordinate." },
      { name: "Euler rotation", formula: "<p>&Sigma;M = I&alpha;</p>", note: "&Sigma;M is net moment, I is mass moment of inertia about that axis, and &alpha; is angular acceleration." },
      { name: "Parallel axis theorem", formula: "<p>I = I<sub>cm</sub> + m d<sup>2</sup></p>", note: "I about an axis offset d from the centre of mass. Mass moment of inertia is meaningless until you name the axis." },
      { name: "Natural frequency", formula: "<p>&omega;<sub>n</sub> = &radic;(k/m), &nbsp; f<sub>n</sub> = &omega;<sub>n</sub>/2&pi;</p>", note: "&omega;<sub>n</sub> is in rad/s; divide by 2&pi; to get Hz before comparing with any spec or machine speed." },
      { name: "Effective stiffness", formula: "<p>k<sub>parallel</sub> = &Sigma;k<sub>i</sub>, &nbsp; 1/k<sub>series</sub> = &Sigma;1/k<sub>i</sub></p>", note: "Springs that deflect together add rates; springs that deflect in sequence add compliances." },
      { name: "Beam and shaft as springs", formula: "<p>k = 3EI/L<sup>3</sup>, &nbsp; k<sub>t</sub> = GJ/L</p>", note: "Cantilever tip stiffness and torsional stiffness. I and J are area moments here, not mass moments." },
      { name: "Damping ratio and Q", formula: "<p>&zeta; = c/[2&radic;(km)], &nbsp; Q = 1/(2&zeta;)</p>", note: "&zeta; is dimensionless; Q is the resonant magnification and equals f<sub>n</sub>/&Delta;f at the half-power points." },
      { name: "Logarithmic decrement", formula: "<p>&delta; = (1/n)ln(x<sub>0</sub>/x<sub>n</sub>), &nbsp; &zeta; = &delta;/&radic;(4&pi;<sup>2</sup>+&delta;<sup>2</sup>)</p>", note: "How damping is actually measured: read two peaks n cycles apart off a free-decay trace." },
      { name: "Force transmissibility", formula: "<p>T = &radic;[1+(2&zeta;r)<sup>2</sup>] / &radic;[(1&minus;r<sup>2</sup>)<sup>2</sup>+(2&zeta;r)<sup>2</sup>]</p>", note: "T = 1 at r = &radic;2 for every &zeta;. Isolation only exists above that; below it an isolator amplifies." },
      { name: "Unbalance force", formula: "<p>F = m e &omega;&sup2;</p>", note: "m is unbalance mass, e is offset radius from the spin axis, &omega; is shaft speed in rad/s. Quadruples when speed doubles." },
    ],
    interviewTips: [
      "Estimate the natural frequency first, then compare it with every excitation you can name (rpm, blade pass, gear mesh, road input).",
      "Say the units out loud: sqrt(k/m) is rad/s, divide by 2*pi to get Hz. Reporting rad/s as Hz is the classic 6.28x blunder.",
      "Build stiffness from the load path: parallel adds rates, series adds compliances, and a flimsy mounting pan sits in series with your isolator.",
      "To move a mode, change k or m (f scales as the square root, so 4x stiffness to double f). Damping lowers the peak but leaves the frequency alone.",
      "Isolation needs r above sqrt(2). If a mount is too stiff, r drops below sqrt(2) and the isolator amplifies instead of isolating.",
      "Unbalance force grows as omega-squared, so quote balance requirements against the top operating speed, not the nominal one.",
      "For impacts reach for impulse-momentum or energy, not F = ma; for anything rolling, remember the rotational half of the kinetic energy.",
    ],
  },
  questions: [
    {
      id: "dynamics-vibrations-q01",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A machine is modelled as a single mass on a single spring, m = 10 kg and k = 1000 N/m. What is the undamped natural frequency &omega;<sub>n</sub> in rad/s?</p>`,
      figure: figMSD,
      answer: 10,
      unit: "rad/s",
      explanation: `<p class="eq">&omega;<sub>n</sub> = &radic;(k/m) = &radic;(1000/10) = <strong>10 rad/s</strong></p><p>Units under the root are (N/m)/kg = 1/s<sup>2</sup>, so the answer is rad/s. Do not report 10 Hz: in Hz it is 10/(2&pi;) = 1.59 Hz, and confusing the two is a 6.28&times; error.</p>`,
    },
    {
      id: "dynamics-vibrations-q02",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A sensor bracket has an effective stiffness of 2.4 &times; 10<sup>5</sup> N/m and an effective mass of 1.5 kg. The requirement says its first mode must sit above 80 Hz. Where does it actually land, and does it pass?</p>`,
      choices: [
        "400 Hz, so it clears the 80 Hz requirement with a wide margin.",
        "63.7 Hz, which still clears the 80 Hz requirement comfortably.",
        "63.7 Hz, so it fails the 80 Hz requirement and needs stiffening.",
        "400 Hz, but the limit is in rad/s, so the bracket fails anyway.",
      ],
      answer: 2,
      explanation: `<p>Two steps, and the units matter in both.</p><p class="eq">&omega;<sub>n</sub> = &radic;(k/m) = &radic;(2.4 &times; 10<sup>5</sup> / 1.5) = 400 rad/s</p><p class="eq">f<sub>n</sub> = &omega;<sub>n</sub>/(2&pi;) = 400/6.283 = <strong>63.7 Hz</strong></p><p>That is below the 80 Hz floor, so the bracket fails and needs about (80/63.7)<sup>2</sup> = 1.58&times; the stiffness. A rib or a shorter span, not a material swap.</p><p>Answering 400 treats radians per second as cycles per second and makes a failing part look like a 5&times; pass. When a requirement is written in Hz, convert before comparing.</p>`,
    },
    {
      id: "dynamics-vibrations-q03",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A mount has m = 10 kg, k = 1000 N/m, and a viscous damper rated c = 20 N&middot;s/m. Compute the damping ratio &zeta;.</p>`,
      answer: 0.1,
      explanation: `<p>Damping ratio compares actual viscous damping with critical damping:</p><p class="eq">c<sub>c</sub> = 2&radic;(km) = 2&radic;(1000 &times; 10) = 200 N&middot;s/m</p><p class="eq">&zeta; = c/c<sub>c</sub> = 20/200 = <strong>0.10</strong></p><p>That is lightly damped. Free vibration decays slowly and the resonant peak is roughly Q = 1/(2&zeta;) = 5 times the static response. For orientation, a bolted steel structure runs 0.01&ndash;0.02 and an elastomer mount 0.05&ndash;0.15.</p><p>Treating c itself as the damping ratio is the slip to avoid: c carries units, &zeta; does not.</p>`,
    },
    {
      id: "dynamics-vibrations-q04",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A 12 kg instrument is carried on two springs rated k<sub>1</sub> = 1200 N/m and k<sub>2</sub> = 1800 N/m. In the left arrangement they are stacked end to end; in the right one they sit side by side sharing the load. What are the two vertical natural frequencies?</p>`,
      figure: figSpr,
      choices: [
        "Stacked 2.52 Hz, side by side 1.23 Hz &mdash; stacking raises the rate.",
        "Stacked 1.23 Hz, side by side 2.52 Hz &mdash; stacking lowers the rate.",
        "Both 1.78 Hz, because the two rates simply average over one mass.",
        "Stacked 1.23 Hz, side by side 1.23 Hz &mdash; layout only splits load.",
      ],
      answer: 1,
      explanation: `<p>Stacked end to end the springs are <strong>in series</strong>: each carries the full load and the deflections add, so compliances add.</p><p class="eq">1/k = 1/1200 + 1/1800 &rarr; k = 720 N/m</p><p class="eq">f = (1/2&pi;)&radic;(720/12) = (1/2&pi;)(7.746) = <strong>1.23 Hz</strong></p><p>Side by side they are <strong>in parallel</strong>: they deflect together and their rates add.</p><p class="eq">k = 1200 + 1800 = 3000 N/m, &nbsp; f = (1/2&pi;)&radic;(3000/12) = <strong>2.52 Hz</strong></p><p>The series result is softer than <em>either</em> spring alone (720 &lt; 1200), which is the check people skip. Averaging the rates to 1500 N/m gives the 1.78 Hz distractor and is simply the wrong model. This matters in the field: an isolator bolted onto a flexible sheet-metal pan has the pan's compliance in series with its own, so the installed frequency lands below the catalogue value.</p>`,
    },
    {
      id: "dynamics-vibrations-q05",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A vertical machine mount sags 10 mm under the weight it carries. Estimate the vertical natural frequency in Hz.</p>`,
      answer: 4.98,
      unit: "Hz",
      explanation: `<p>Static sag already contains the stiffness-to-mass ratio. &delta; = mg/k, so k/m = g/&delta;, and</p><p class="eq">f<sub>n</sub> = (1/2&pi;)&radic;(g/&delta;) = (1/2&pi;)&radic;(9.81/0.010) = <strong>4.98 Hz</strong></p><p>The fastest isolator check there is: a ruler, no data sheet. Worth memorising that 1 mm of sag is about 15.8 Hz, 10 mm about 5 Hz, 25 mm about 3.2 Hz. Frequency falls only as the square root of sag, so going from 5 Hz to 2.5 Hz costs 40 mm of travel.</p>`,
    },
    {
      id: "dynamics-vibrations-q06",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A fan runs at a fixed 1800 rpm. You want its mounts to pass no more than 10% of the unbalance force into the floor. Assuming light damping, what mount natural frequency in Hz do you need?</p>`,
      answer: 9.05,
      unit: "Hz",
      explanation: `<p>For a lightly damped isolator above resonance, force transmissibility is</p><p class="eq">T &asymp; 1/(r<sup>2</sup> &minus; 1), &nbsp; r = f/f<sub>n</sub></p><p>Set T = 0.10 and solve for the required ratio:</p><p class="eq">r<sup>2</sup> &minus; 1 = 1/0.10 = 10 &rarr; r = &radic;11 = 3.317</p><p>The excitation is the running speed: f = 1800/60 = 30 Hz. So</p><p class="eq">f<sub>n</sub> = f/r = 30/3.317 = <strong>9.05 Hz</strong></p><p>Check it against the hardware. 9.05 Hz corresponds to a static sag of &delta; = g/(2&pi;f<sub>n</sub>)<sup>2</sup> = 9.81/(56.9)<sup>2</sup> = 3.0 mm, which is an ordinary elastomer mount. The design is realistic. Note what the requirement costs: 90% isolation needs f<sub>n</sub> a factor of 3.3 below running speed, not just "below". The follow-up question is what happens during run-up, when the fan sweeps through 9 Hz and the mount amplifies instead of isolating.</p>`,
    },
    {
      id: "dynamics-vibrations-q07",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A 2 kg cart is pushed along a track and its speed rises from 1 m/s to 6 m/s. What impulse was applied, in N&middot;s?</p>`,
      answer: 10,
      unit: "N*s",
      explanation: `<p>Impulse equals change in momentum:</p><p class="eq">J = m(v<sub>2</sub> &minus; v<sub>1</sub>) = 2(6 &minus; 1) = <strong>10 N&middot;s</strong></p><p>kg&middot;m/s is the same unit as N&middot;s.</p><p>You never needed the force history, which is exactly why impulse-momentum is the tool for pushes and impacts. Over 0.2 s the average force is 50 N; stretch the same impulse to 0.4 s and it halves. That inverse relation between contact time and peak force is the whole argument for crumple zones, foam pads and compliant bumpers.</p>`,
    },
    {
      id: "dynamics-vibrations-q08",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A flywheel has mass moment of inertia I = 0.20 kg&middot;m<sup>2</sup> and must reach an angular acceleration of &alpha; = 15 rad/s<sup>2</sup>. What net torque is required, in N&middot;m?</p>`,
      answer: 3.0,
      unit: "N*m",
      explanation: `<p class="eq">&Sigma;M = I&alpha; = 0.20(15) = <strong>3.0 N&middot;m</strong></p><p>I is the <strong>mass</strong> moment of inertia in kg&middot;m<sup>2</sup>, not the area moment used for beam bending. The two share a symbol and nothing else.</p><p>This is also the <em>net</em> torque, so bearing drag, windage and load torque all stack on top when you size the motor. And I is defined about the spin axis, so quoting inertia without naming the axis means nothing.</p>`,
    },
    {
      id: "dynamics-vibrations-q09",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A 1 kg mass slides along a frictionless surface at 4 m/s into a bumper spring with k = 200 N/m. Estimate the maximum spring compression in m.</p>`,
      answer: 0.283,
      unit: "m",
      explanation: `<p>At maximum compression the mass is momentarily at rest, so all of its kinetic energy has become spring strain energy. With no friction:</p><p class="eq">&frac12;mv<sup>2</sup> = &frac12;kx<sup>2</sup></p><p>Cancel the halves and solve for x:</p><p class="eq">x = v&radic;(m/k)</p><p>Substitute m = 1 kg, v = 4 m/s, and k = 200 N/m:</p><p class="eq">x = 4&radic;(1/200) = 4(0.0707) = <strong>0.283 m</strong></p><p>Energy is the clean method because the question asks for a <em>position</em>, not a time history. Reaching for F = ma here means integrating a differential equation for no reason. The peak force is F = kx = 200(0.283) = 56.6 N, about 5.8&times; the mass's weight, so the bumper mounting has to carry that. A stiffer spring shortens the stroke but raises the force in exactly the same proportion, which is the tradeoff every bumper design lives on.</p>`,
    },
    {
      id: "dynamics-vibrations-q10",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A motor on flexible mounts shakes hard in a narrow band around 1450 rpm during run-up, and is noticeably smoother both below and above that band. Coasting back down, the same rough band appears at the same speed. Which explanation fits the data best?</p>`,
      choices: [
        "A rolling-element bearing defect, whose impact rate climbs with speed.",
        "Residual unbalance, whose force grows as &omega;&sup2; up to the top speed.",
        "A soft foot, which preloads the frame the same way at every speed.",
        "A support resonance that the 1x order crosses at that one speed.",
      ],
      answer: 3,
      explanation: `<p>The signature is that the roughness is <em>localised</em> in speed and repeats on the way down. That points at a fixed structural natural frequency being crossed by an excitation whose frequency scales with speed, here the once-per-revolution (1x) unbalance order crossing a mount or frame mode near 1450/60 = 24 Hz.</p><p>Rule the others out with the same test. Unbalance force does grow as &omega;<sup>2</sup>, so it would keep getting worse toward top speed rather than peaking and clearing. A bearing defect produces energy at a non-integer multiple of shaft speed and shows up across the whole speed range as broadband bursts and sidebands, not one clean band. A soft foot or loose hold-down is a static preload problem: it distorts the frame identically at all speeds.</p><p>The fixes attack either side of the crossing: balance the rotor to shrink the excitation, change mount stiffness or add mass to move the mode, add damping at the mode, or ramp through 1450 rpm quickly and never dwell there. The wrong conclusion is that the motor is simply "bad at that rpm" independent of the structure it is bolted to.</p>`,
    },
    {
      id: "dynamics-vibrations-q11",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A rotor carries an unbalance mass of 0.050 kg at an eccentricity of 2.0 mm and spins at 3000 rpm. Estimate the rotating unbalance force in N.</p>`,
      figure: figImbalance,
      answer: 9.87,
      unit: "N",
      explanation: `<p>Convert both speed and eccentricity first: &omega; = 314 rad/s and e = 0.0020 m.</p><p class="eq">F = m e &omega;<sup>2</sup> = 0.050(0.0020)(314<sup>2</sup>) = <strong>9.87 N</strong></p><p>Using 3000 directly inflates this 91&times;; leaving e in millimetres, 1000&times;.</p><p>The force goes as &omega;<sup>2</sup>, so the same rotor at 6000 rpm pushes 39.5 N and at 12,000 rpm nearly 158 N. A residual unbalance invisible on a slow shaft becomes a bearing-life problem at speed, which is why balance grades are quoted against maximum service speed.</p>`,
    },
    {
      id: "dynamics-vibrations-q12",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A steel cantilever bracket is 100 mm long with a 20 mm wide by 5 mm thick rectangular section, and it carries a 200 g sensor at its free end. Bending happens through the 5 mm dimension. Take E = 200 GPa and neglect the bracket's own mass. Estimate the first natural frequency in Hz.</p>`,
      figure: figCant,
      answer: 126,
      unit: "Hz",
      explanation: `<p>Treat the bracket as a spring with the sensor as the mass. Start with the section's area moment of inertia about the bending axis, using the thickness as h:</p><p class="eq">I = bh<sup>3</sup>/12 = (0.020)(0.005)<sup>3</sup>/12 = 2.08 &times; 10<sup>&minus;10</sup> m<sup>4</sup></p><p>Cantilever tip stiffness:</p><p class="eq">k = 3EI/L<sup>3</sup> = 3(200 &times; 10<sup>9</sup>)(2.08 &times; 10<sup>&minus;10</sup>)/(0.100)<sup>3</sup> = 125 / 0.001 = 1.25 &times; 10<sup>5</sup> N/m</p><p class="eq">&omega;<sub>n</sub> = &radic;(k/m) = &radic;(125,000/0.200) = 791 rad/s, &nbsp; f<sub>n</sub> = 791/(2&pi;) = <strong>126 Hz</strong></p><p>Watch the cube on h: swapping to a 10 mm thick bracket multiplies I by 8, and since f &prop; &radic;k that raises the frequency by &radic;8 = 2.83&times;, to 356 Hz. Watch the cube on L too. Going to a 200 mm arm would divide k by 8 and drop the mode to 44 Hz. Two things shade it. The bracket's own mass lowers it slightly (add roughly a quarter of it to the tip mass), and a bolted rather than welded root is softer than the ideal fixed end, so measured values usually land 10&ndash;20% below the hand calculation.</p>`,
    },
    {
      id: "dynamics-vibrations-q13",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A bracket's first bending mode measures 118 Hz. It carries a motor running at a fixed 7000 rpm, which cannot be changed. Which modification actually gets the mode clear of the excitation?</p>`,
      choices: [
        "Add a rib that triples bending stiffness, moving the mode to 204 Hz.",
        "Bond damping tape on the face, raising &zeta; from 0.01 to about 0.04.",
        "Bolt a 50 g mass at the tip, which pulls the mode down to 108 Hz.",
        "Machine 20% off the wall thickness so the lighter bracket runs faster.",
      ],
      answer: 0,
      explanation: `<p>The motor excites at 7000/60 = 117 Hz, essentially on top of the 118 Hz mode. Only a change to k or m moves a natural frequency, and because f &prop; &radic;(k/m) you need a big change: tripling stiffness gives 118&radic;3 = 204 Hz, a frequency ratio of 117/204 = 0.57 and comfortable separation.</p><p>The damping tape is the tempting wrong answer. It will cut the resonant amplitude by roughly 4&times; (peak &asymp; 1/2&zeta;), which is real relief, but the mode stays at 118 Hz. The structure is still resonant, still hot with strain energy, and still sensitive to any speed drift. Damping treats the symptom; it never moves the frequency, since &omega;<sub>d</sub> = &omega;<sub>n</sub>&radic;(1&minus;&zeta;<sup>2</sup>) changes by 0.1% at &zeta; = 0.04.</p><p>The tip mass moves the mode the wrong way and only to 108 Hz, 8% away, which any speed tolerance or temperature drift will erase. Machining the wall thinner is the assumption that lighter means faster. For a bending element k &prop; t<sup>3</sup> while m &prop; t, so f &prop; t and a 20% thinner wall <em>lowers</em> the mode to about 94 Hz.</p>`,
    },
    {
      id: "dynamics-vibrations-q14",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A panel mode measured at 85 Hz has to be pushed above 150 Hz, and the mass cannot change. By what factor must the modal stiffness increase?</p>`,
      answer: 3.11,
      explanation: `<p>Frequency scales with the square root of stiffness at fixed mass:</p><p class="eq">f &prop; &radic;k &rarr; f<sub>2</sub>/f<sub>1</sub> = &radic;(k<sub>2</sub>/k<sub>1</sub>)</p><p>So the stiffness ratio is the square of the frequency ratio:</p><p class="eq">k<sub>2</sub>/k<sub>1</sub> = (150/85)<sup>2</sup> = (1.765)<sup>2</sup> = <strong>3.11</strong></p><p>Answering 1.76 reads the frequency ratio straight across, as if stiffness and frequency were proportional. Getting this backwards makes people badly underestimate the redesign. Doubling a frequency always costs 4&times; the stiffness, and a 3.11&times; increase on a panel is not a thicker coat of paint: it means ribs, a bead pattern, a bonded doubler, or an extra fastener line that shortens the unsupported span. Since panel stiffness scales roughly with t<sup>3</sup>, the same result comes from 3.11<sup>1/3</sup> = 1.46&times; the thickness, but that also adds 46% mass, which pushes the frequency back down, so ribbing is usually the better lever.</p>`,
    },
    {
      id: "dynamics-vibrations-q15",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A 200 kg compressor running at 1200 rpm sits on mounts with a 12 Hz vertical natural frequency. Floor vibration is judged too high, so a technician swaps in much stiffer mounts that raise the natural frequency to 25 Hz. What happens to the force reaching the floor?</p>`,
      choices: [
        "It falls by roughly half, because stiffer mounts deflect much less.",
        "It changes very little, since transmissibility follows the force level.",
        "It falls a little further, because r improves from 1.67 up to 2.08.",
        "It rises about 5&times;, because r drops from 1.67 to 0.80 through &radic;2.",
      ],
      answer: 3,
      explanation: `<p>Excitation is 1200/60 = 20 Hz in both cases; only the mount changed.</p><p class="eq">before: r = 20/12 = 1.67, &nbsp; T &asymp; 1/(r<sup>2</sup> &minus; 1) = 1/1.78 = 0.56</p><p class="eq">after: r = 20/25 = 0.80, &nbsp; T &asymp; 1/|1 &minus; r<sup>2</sup>| = 1/0.36 = 2.78</p><p>The ratio is 2.78/0.56 = <strong>5&times; worse</strong>. The original mount was already isolating, barely, at r = 1.67 just above the &radic;2 = 1.41 break-even, and the "upgrade" dragged the system back below &radic;2, into the amplification region on the wrong side of resonance.</p><p>This is the single most useful fact in isolation: <em>every</em> transmissibility curve passes through T = 1 at r = &radic;2, whatever the damping. Below it an isolator makes things worse. Stiffer feels stronger and is exactly backwards here; the correct move is softer mounts (say 6 Hz, r = 3.3, T = 0.10), limited by static sag, travel stops, and rocking stability. Choice C also fails on arithmetic: raising f<sub>n</sub> lowers r, it cannot raise it.</p>`,
    },
    {
      id: "dynamics-vibrations-q16",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A uniform disk of mass 3.0 kg and radius 120 mm is pivoted about an axis through a point on its rim, perpendicular to the disk face. What is its mass moment of inertia about that axis, in kg&middot;m<sup>2</sup>?</p>`,
      answer: 0.0648,
      unit: "kg*m^2",
      explanation: `<p class="eq">I<sub>cm</sub> = &frac12;mR<sup>2</sup> = 0.5(3.0)(0.120)<sup>2</sup> = 0.0216 kg&middot;m<sup>2</sup></p><p class="eq">I = I<sub>cm</sub> + md<sup>2</sup> = 0.0216 + 0.0432 = <strong>0.0648 kg&middot;m<sup>2</sup></strong></p><p>The rim axis gives exactly 3&times; the centroidal value, and the transfer term is the larger of the two. Inertia means nothing until you name the axis.</p><p>The theorem only works <em>from</em> the centroidal axis. You cannot hop directly between two offset axes.</p>`,
    },
    {
      id: "dynamics-vibrations-q17",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A solid cylinder is released from rest and rolls without slipping down a ramp, dropping 1.2 m in height. What is the speed of its centre at the bottom, in m/s?</p>`,
      answer: 3.96,
      unit: "m/s",
      explanation: `<p>Energy is the right tool: the only forces are gravity and a rolling contact that does no work. The catch is that kinetic energy has two parts, and rolling without slipping links them through &omega; = v/R.</p><p class="eq">mgh = &frac12;mv<sup>2</sup> + &frac12;I&omega;<sup>2</sup>, &nbsp; I = &frac12;mR<sup>2</sup></p><p class="eq">mgh = &frac12;mv<sup>2</sup> + &frac12;(&frac12;mR<sup>2</sup>)(v/R)<sup>2</sup> = &frac34;mv<sup>2</sup></p><p>Mass and radius both cancel:</p><p class="eq">v = &radic;(4gh/3) = &radic;(4 &times; 9.81 &times; 1.2/3) = &radic;15.7 = <strong>3.96 m/s</strong></p><p>4.85 m/s from &radic;(2gh) is the tempting answer, which is what a block sliding on frictionless ice would reach. A third of the potential energy went into spin, so the cylinder arrives 18% slower, and independent of its mass and radius, which is why a race between a large and a small solid cylinder is always a dead heat. A hoop (I = mR<sup>2</sup>) would be slower still at &radic;(gh) = 3.43 m/s.</p>`,
    },
    {
      id: "dynamics-vibrations-q18",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A 2 kg uniform rod 600 mm long is driven about a transverse axis. A prototype pivots it at mid-length; a design change moves the pivot to one end. For the same angular acceleration, how does the required torque change?</p>`,
      choices: [
        "It is unchanged, since inertia is a fixed property of the rod itself.",
        "It quadruples, because I rises from mL<sup>2</sup>/12 to mL<sup>2</sup>/3.",
        "It doubles, because the distance out to the far end has doubled.",
        "It halves, since the centre of mass now sits closer to the pivot.",
      ],
      answer: 1,
      explanation: `<p>Torque for a given angular acceleration is T = I&alpha;, so everything turns on how I changes with the axis.</p><p class="eq">centre: I = mL<sup>2</sup>/12 = 2(0.6)<sup>2</sup>/12 = 0.060 kg&middot;m<sup>2</sup></p><p class="eq">end: I = mL<sup>2</sup>/3 = 2(0.6)<sup>2</sup>/3 = 0.240 kg&middot;m<sup>2</sup></p><p>That is a factor of <strong>four</strong>, and the parallel axis theorem shows why: I = mL<sup>2</sup>/12 + m(L/2)<sup>2</sup> = mL<sup>2</sup>/12 + mL<sup>2</sup>/4 = mL<sup>2</sup>/3. At &alpha; = 10 rad/s<sup>2</sup> the motor goes from 0.60 to 2.40 N&middot;m.</p><p>Choice A is the standard misconception. Mass is a property of the body, but mass moment of inertia belongs to a body <em>and an axis</em>. Choice C guesses that inertia scales with distance rather than distance squared. Which is why robot arm designers fight to keep actuators and payloads near the joint: inertia, and therefore torque, motor size, and gearbox cost, all scale with d<sup>2</sup>.</p>`,
    },
    {
      id: "dynamics-vibrations-q19",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>An 8 kg disk is mounted mid-span on a 25 mm diameter steel shaft running between two bearings 600 mm apart. Take E = 200 GPa, treat the bearings as simple supports (k = 48EI/L<sup>3</sup>), and neglect the shaft's own mass. Estimate the first critical speed in rpm.</p>`,
      answer: 3120,
      unit: "rpm",
      explanation: `<p>Critical speed is just the lateral natural frequency of the rotor expressed in rpm, so build the stiffness first. For a round shaft the area moment of inertia is</p><p class="eq">I = &pi;d<sup>4</sup>/64 = &pi;(0.025)<sup>4</sup>/64 = 1.92 &times; 10<sup>&minus;8</sup> m<sup>4</sup></p><p class="eq">k = 48EI/L<sup>3</sup> = 48(200 &times; 10<sup>9</sup>)(1.92 &times; 10<sup>&minus;8</sup>)/(0.600)<sup>3</sup> = 8.52 &times; 10<sup>5</sup> N/m</p><p class="eq">&omega;<sub>n</sub> = &radic;(k/m) = &radic;(852,000/8) = 326 rad/s &rarr; 51.9 Hz</p><p class="eq">N<sub>cr</sub> = 326 &times; 60/(2&pi;) = <strong>3120 rpm</strong></p><p>Two things bite. The fourth power: a 20 mm shaft instead of 25 mm drops I by 1 &minus; (20/25)<sup>4</sup> = 59% and, since N<sub>cr</sub> &prop; &radic;I &prop; d<sup>2</sup>, the critical speed by 1 &minus; (20/25)<sup>2</sup> = 36%, so shaft diameter is the dominant lever. Second, the units chain, 326 is rad/s, 51.9 is Hz, and 3120 is rpm; quoting the wrong one is the usual way this answer goes wrong by 2&pi; or 60.</p><p>The model is deliberately crude. Real bearings are not rigid pins, so their support flexibility sits in series with the shaft and pushes the true critical speed <em>below</em> 3120 rpm. Distributed shaft mass, gyroscopic stiffening, and overhung couplings all shift it further, which is why you keep a separation margin of 20% or more rather than designing to run at 3000 rpm.</p>`,
    },
    {
      id: "dynamics-vibrations-q20",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A panel resonates at 240 Hz with Q &asymp; 25. A constrained-layer damping patch is bonded on, roughly tripling &zeta;. The panel is also excited at 60 Hz by a separate source. What should you expect at each frequency?</p>`,
      choices: [
        "Roughly 3&times; less at 60 Hz, but almost no change at the 240 Hz peak.",
        "About 3&times; less at both frequencies, since damping acts across the band.",
        "Roughly 3&times; less at 240 Hz, and essentially no change at 60 Hz.",
        "About 3&times; less at 240 Hz, and the mode also shifts down near 80 Hz.",
      ],
      answer: 2,
      explanation: `<p>Put numbers on both frequencies. At resonance the magnification is approximately 1/(2&zeta;) = Q, so tripling &zeta; from 0.02 to 0.06 takes Q from 25 to about 8.3, a factor of three off the peak.</p><p>At 60 Hz the frequency ratio is r = 60/240 = 0.25, and the damping term in the denominator is (2&zeta;r)<sup>2</sup> = (2 &times; 0.02 &times; 0.25)<sup>2</sup> = 1 &times; 10<sup>&minus;4</sup>, utterly swamped by (1 &minus; r<sup>2</sup>)<sup>2</sup> = 0.879. Magnification is 1.07 before the patch and 1.07 after. Off resonance the response is stiffness-controlled and damping is invisible.</p><p>That is the practical rule: <strong>damping buys you almost everything at resonance and almost nothing elsewhere</strong>. If your problem is broadband or well away from a mode, damping treatment is wasted mass and cost, go after the source or the transmission path instead. Choice D adds a second error: &omega;<sub>d</sub> = &omega;<sub>n</sub>&radic;(1 &minus; &zeta;<sup>2</sup>) at &zeta; = 0.06 shifts the frequency by 0.2%, not 65%.</p>`,
    },
  ],
  qna: [
    {
      id: "dynamics-vibrations-qa01",
      q: `<p>How do you decide whether to use Newton's laws, energy, or momentum?</p>`,
      a: `<p>I pick the method by what the question asks for. If I need acceleration, a time history, or an internal reaction force, I draw a dynamic free-body diagram and write &Sigma;F = ma and &Sigma;M = I&alpha;. If forces act over a distance and I only want a speed or a position, a mass compressing a bumper, a cylinder rolling down a ramp. Energy is cleaner, because the normal force does no work and I never integrate anything. If the event is short and I care about the change in motion rather than the force shape, impulse-momentum wins: for a 3 kg part stopped from 2 m/s in 40 ms the average force is just m&Delta;v/&Delta;t = 150 N, no contact model needed. For impacts I combine momentum conservation with the coefficient of restitution to get the second equation. The tell that I have chosen wrong is finding myself integrating a nonlinear differential equation to answer a question about a single end state.</p>`,
    },
    {
      id: "dynamics-vibrations-qa02",
      q: `<p>Walk me through estimating the first natural frequency of a bracket on a whiteboard.</p>`,
      a: `<p>I reduce it to one mass on one spring. First the mass: whatever is bolted to the tip, plus roughly a quarter of the bracket's own mass if the bracket is not negligible. Then the stiffness from the load path, for a cantilever, k = 3EI/L<sup>3</sup> with I = bh<sup>3</sup>/12 for the bending direction. A 100 mm steel arm, 20 mm wide and 5 mm thick, gives I = 2.1 &times; 10<sup>&minus;10</sup> m<sup>4</sup> and k = 125 kN/m; with a 200 g sensor that is &radic;(125000/0.2) = 790 rad/s, so 126 Hz. Then I say the number in Hz, because &radic;(k/m) is rad/s and the spec will be in Hz. Finally I sanity-check and discount: a bolted root is softer than an ideal fixed end, cables and connectors add mass, so I expect the measured mode 10&ndash;20% low, and I would not accept a hand calculation that lands within 20% of an excitation without a test or an FE model.</p>`,
    },
    {
      id: "dynamics-vibrations-qa03",
      q: `<p>What does damping actually buy you, and where does it not help?</p>`,
      a: `<p>Damping dissipates vibrational energy as heat, and its effect is concentrated almost entirely at resonance. Peak magnification is about Q = 1/(2&zeta;), so going from &zeta; = 0.01 to 0.04 cuts a resonant peak by roughly four. Away from resonance it does almost nothing: at a frequency ratio of 0.25 the damping term in the response denominator is four orders of magnitude smaller than the stiffness term, so a damping treatment there is wasted mass. It also does not move the frequency, &omega;<sub>d</sub> = &omega;<sub>n</sub>&radic;(1&minus;&zeta;<sup>2</sup>) is a 0.5% change at &zeta; = 0.1, so if the problem is a mode sitting on an excitation, I change stiffness or mass instead. Typical numbers I carry: bolted steel 1&ndash;2%, welded frames under 1%, elastomer mounts 5&ndash;15%, constrained-layer treatments 5&ndash;10% on panels. And there is a real penalty: in an isolator the damper force scales with relative velocity, so heavy damping tames the startup resonance but transmits more high-frequency buzz.</p>`,
    },
    {
      id: "dynamics-vibrations-qa04",
      q: `<p>A machine has a resonance problem. How do you attack it?</p>`,
      a: `<p>I list the excitations first, in Hz: running speed and its orders, blade pass, gear mesh, motor pole-pass, reciprocating orders, road or duty-cycle input. Then I identify the mode, a bump test or a run-up with order tracking tells me whether the peak tracks speed (an order, so an excitation problem) or stays put in Hz (a structural mode). Then I choose a lever. Move the mode by adding stiffness where the mode strains most, or mass at an antinode; remember f &prop; &radic;(k/m), so doubling frequency needs four times the stiffness, usually a rib, a gusset, or a shorter unsupported span, not a thicker coat of material. Reduce the excitation by balancing (unbalance force scales as &omega;<sup>2</sup>), aligning, or fixing a soft foot. Avoid the speed band, or ramp through it fast if the crossing is unavoidable. Add damping only if I have to live at resonance, since it lowers the peak but not the frequency. My preference order is excitation, then frequency separation, then damping, because the first two remove the problem and the third only manages it.</p>`,
    },
    {
      id: "dynamics-vibrations-qa05",
      q: `<p>How does vibration isolation work, and when does an isolator make things worse?</p>`,
      a: `<p>An isolator is a soft spring that lowers the natural frequency until the excitation sits well above it. The governing number is r = f/f<sub>n</sub>. Every transmissibility curve crosses T = 1 at r = &radic;2 regardless of damping, so below r = &radic;2 an isolator <em>amplifies</em> and above it isolates, with T &asymp; 1/(r<sup>2</sup>&minus;1) for light damping. I aim for r of 3 or more: r = 3 gives 12.5% transmission, r = 4 gives 6.7%. For a 1800 rpm fan (30 Hz) that means f<sub>n</sub> around 9 Hz, which is about 3 mm of static sag. The classic failure is fitting stiffer mounts because stiff sounds stronger. That raises f<sub>n</sub>, drops r below &radic;2, and can make floor vibration five times worse. The limits on going softer are static sag, travel stops, rocking stability, shock loads, and the fact that you must cross resonance on every start and stop. Damping is the tradeoff knob: 5&ndash;10% controls that crossing without ruining high-frequency performance.</p>`,
    },
    {
      id: "dynamics-vibrations-qa06",
      q: `<p>Why does rotating unbalance get worse so quickly with speed, and what do you specify?</p>`,
      a: `<p>An eccentric mass needs centripetal acceleration e&omega;<sup>2</sup>, so the reaction is a rotating force F = me&omega;<sup>2</sup> that turns with the shaft and excites everything at the 1x order. Double the speed and the force quadruples. A 0.050 kg unbalance at 2 mm eccentricity is 9.9 N at 3000 rpm and 158 N at 12,000 rpm from exactly the same hardware. What I specify is a residual unbalance U = me, usually in g&middot;mm, tied to the maximum service speed, for example, allowing 20 N at 3600 rpm means U = F/&omega;<sup>2</sup> = 141 g&middot;mm, which could be 14 g at 10 mm radius or 1.4 g at 100 mm. I would quote an ISO balance grade such as G6.3 for a fan or G2.5 for a machine-tool spindle, and state the number of balance planes: a thin disk needs one, anything long enough for a couple unbalance needs two. Balancing shrinks the excitation; changing support stiffness and damping only changes the response to it.</p>`,
    },
    {
      id: "dynamics-vibrations-qa07",
      q: `<p>Someone hands you a free-decay trace from a bump test. What do you extract from it?</p>`,
      a: `<p>Two numbers, and I get them without any curve-fitting software. The damped natural frequency comes straight off the zero crossings or peak spacing. Count cycles over a known time window. Damping comes from the logarithmic decrement: pick two peaks n cycles apart, &delta; = (1/n)ln(x<sub>0</sub>/x<sub>n</sub>), then &zeta; = &delta;/&radic;(4&pi;<sup>2</sup>+&delta;<sup>2</sup>). If the amplitude falls from 10 mm to 2.5 mm in three cycles, &delta; = ln(4)/3 = 0.462 and &zeta; = 0.073, so Q is about 6.8 and I would expect a resonant magnification near 7. Using several cycles rather than one averages out noise. Two things I check before trusting it: whether the decay is a straight line on a log-amplitude plot. If it curves, the damping is amplitude-dependent, meaning friction or an elastomer rather than viscous damping, and whether the trace contains one mode or several beating together, which shows up as an envelope that pulses instead of decaying cleanly. Since &zeta; is small, &omega;<sub>d</sub> &asymp; &omega;<sub>n</sub> and I do not bother correcting the frequency.</p>`,
    },
    {
      id: "dynamics-vibrations-qa08",
      q: `<p>What unit mistakes do you actively guard against in dynamics?</p>`,
      a: `<p>The big one is reporting &radic;(k/m) in rad/s as if it were Hz, a 6.28&times; error that turns a failing 63.7 Hz bracket into an apparent 400 Hz pass. I write the unit next to every intermediate number for that reason. Next is rpm: it is neither Hz nor rad/s, and it needs &divide;60 or &times;2&pi;/60 depending on where it is going; dropping 3000 rpm straight into F = me&omega;<sup>2</sup> inflates the force by 91&times;. Then millimetres in equations that expect metres, eccentricity, static deflection, and section dimensions are the usual offenders, and in a d<sup>4</sup> or L<sup>3</sup> term the error explodes. Others I watch: mass moment of inertia versus area moment of inertia sharing the symbol I; weight quoted in kgf or lbf being used as mass; degrees where radians are required; and g&middot;mm versus kg&middot;m for unbalance, which is a factor of 10<sup>6</sup>. My habit is a dimensional check on the final expression plus an order-of-magnitude sanity anchor, a hand-sized steel bracket should land in the hundreds of Hz, a machine on soft mounts in the single digits.</p>`,
    },
    {
      id: "dynamics-vibrations-qa09",
      q: `<p>Your FEA says 220 Hz and the shaker test says 170 Hz. What do you do?</p>`,
      a: `<p>I do not start by blaming either one; a 23% shift means the effective k/m in the real assembly is about 40% lower than modelled, and I go looking for where the stiffness went or the mass came from. The usual suspects, in the order I check them: boundary conditions, because a bolted or spot-welded joint is far softer than the bonded contact an idealised model assumes, and a fixture that is not much stiffer than the part becomes part of the mode; added mass from accelerometers, cables, and connectors, which can matter enormously on a light bracket, a 10 g sensor on a 100 g part shifts a mode about 5%; material and section assumptions, including as-built thickness and any cast or moulded draft; and preload or gravity effects if the structure is stress-stiffened. Then I compare <em>mode shapes</em>, not just frequencies, because matching one number by accident proves nothing. The productive outcome is a model update, joint stiffness elements, sensor masses, a realistic fixture, and a re-test at the same points, so the correlated model can be trusted for the load cases I cannot test.</p>`,
    },
    {
      id: "dynamics-vibrations-qa10",
      q: `<p>A rotor has to operate above its first critical speed. How do you make that safe?</p>`,
      a: `<p>Running supercritical is normal for turbomachinery and it is genuinely better at speed: above the critical the rotor whirls about its own mass centre and effectively self-centres, so vibration settles down once you are through. The risk is entirely in the crossing, on every start and every coast-down. So: first, balance well, because response at the critical is proportional to residual unbalance, a two-plane balance to a grade appropriate for the top speed. Second, provide damping where it acts on the mode, usually squeeze-film dampers or the right bearing support, since at the peak the amplitude is set almost entirely by damping. Third, check that the transient amplitude during a realistic ramp stays inside seal and blade-tip clearances. A fast ramp genuinely helps, because the mode does not have time to build to steady-state amplitude. Fourth, define speed exclusion bands and a minimum separation margin, typically 15&ndash;20% between the continuous operating speed and any critical, and never permit a dwell there outside a controlled test. Finally, instrument it: proximity probes for shaft orbit, a Campbell diagram of the crossings, and trip logic on vibration amplitude.</p>`,
    },
  ],
};

export default content;
