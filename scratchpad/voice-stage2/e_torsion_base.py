from lib import rewrite_file

E = {
"torsion-q01": [
 (0,"SET",'<p><strong>6.25%</strong>, and the shear peaks at the outer surface. Shear is &tau; = T&rho;/J, linear in radius, so the torque carried inside radius &rho; follows the polar moment of that inner core:</p>'),
 (2,"SET",'<p>At &rho; = c/2 that is (1/2)&#8308; = 1/16. The inner half-radius is a quarter of the area and carries a sixteenth of the load.</p>'),
 (3,"SET",'<p>25% is the <em>area</em> fraction, the number most candidates blurt out. "Uniform across the section" is the thin-walled-tube idealisation, valid only when all the metal sits at one radius. A peak at half the radius contradicts the linear distribution.</p>'),
 (4,"SET",'<p>That ratio is the whole argument for hollow shafts. Bore out the middle half of the diameter and you throw away a quarter of the mass to lose 6% of the capacity. Shafts stay solid for reasons that have nothing to do with torsion: cost, keyways, bearing seats, and thin walls that dent.</p>'),
],
"torsion-q02": [
 (0,"SET",'<p>c = d/2 = 0.010 m, and</p>'),
 (2,"DROP"),
 (4,"SET",'<p>The one-line version is &tau; = 16T/(&pi;d&sup3;) = 16(50)/(&pi; &times; 8&times;10<sup>&minus;6</sup>) = 31.8 MPa. Substituting d for c doubles the answer to 63.7 MPa.</p>'),
],
"torsion-q03": [
 (3,"SET",'<p>G has to be in Pa: 80 GPa = 8&times;10<sup>10</sup>. And TL/GJ returns radians. Skipping the 57.3&deg;/rad conversion is the usual slip and leaves you reporting 0.0398 "degrees".</p>'),
 (4,"SET",'<p>Two degrees of wind-up per metre is something you can feel by hand. The 31.8 MPa stress from the previous question is fine, yet a precision gimbal or encoder drive would still need a fatter shaft. Stiffness and strength are separate checks and either can govern.</p>'),
],
"torsion-q04": [
 (0,"SET",'<p>Elastic twist is &theta; = TL/(GJ). T and L are fixed and mass is capped, so the only move left is putting the same metal at a larger radius. Take a 40 mm solid bar (A = 1257 mm&sup2;, J = 2.51&times;10<sup>5</sup> mm&#8308;) and respin it as a 60 mm OD tube with a 7.6 mm wall. Same area, J = 8.80&times;10<sup>5</sup> mm&#8308;, 3.5&times; stiffer. Twist drops to 29% of the original, comfortably past the 2&times; target.</p>'),
 (1,"SET",'<p>Heat treatment triples yield strength and leaves G at roughly 80 GPa for every steel, so the twist does not move. That is the most common wrong answer in shaft interviews. 7075-T6 aluminium has G &asymp; 26 GPa and triples the twist at the same diameter. Polishing and a fillet buy fatigue life at the notch and nothing at all in stiffness.</p>'),
 (2,"SET",'<p>What stops you going thinner still is wall buckling under torque, denting, and the difficulty of splining or welding a thin tube.</p>'),
],
"torsion-q05": [
 (0,"SET",'<p>P = T&omega;, so convert the speed first.</p>'),
 (2,"SET",'<p>10 kW is 10,000 W, so</p>'),
 (4,"SET",'<p>Dividing 10000 by 1200 gives 8.33 and is wrong by exactly 2&pi;/60 = 1/9.55. If a power-torque answer looks about ten times too small, that is why.</p>'),
 (5,"SET",'<p>At fixed power, lower speed means higher torque. That is why the slow side of a gearbox gets the bigger shaft, key, and coupling.</p>'),
],
"torsion-q06": [
 (3,"SET",'<p>Assuming both scale the same way is the mistake this question is built on. So is quoting 16&times; for stress because J went up 16&times;, while forgetting that c doubled too.</p>'),
 (4,"SET",'<p>Every shaft designer carries the 20% version of this: 1.20&sup3; = 1.73&times; on stress, 1.20&#8308; = 2.07&times; on stiffness. A shaft that is 2&times; too flexible is fixed by one 20% size step. A shaft that is 2&times; overstressed is not.</p>'),
],
"torsion-q07": [
 (3,"SET",'<p>Writing J = &pi;(D &minus; d)&#8308;/32 = &pi;(0.010)&#8308;/32 = 9.8&times;10<sup>&minus;10</sup> is 65&times; too small and predicts 1530 MPa. Subtract the fourth powers, never the diameters.</p>'),
 (4,"SET",'<p>Look at what the bore bought. It removed 1 &minus; (20/30)&sup2; = 44% of the metal and only 1 &minus; (20/30)&#8308; = 20% of J. Against a solid 30 mm bar at 18.9 MPa, this tube runs 24% more stressed for 44% less mass.</p>'),
],
"torsion-q08": [
 (1,"SET",'<p>A material fails on whichever plane it runs out of strength on first. Ductile steel yields in shear well before it reaches its tensile strength, so it shears off on the transverse plane. That face is flat, square to the axis, and often smeared from rubbing. A brittle material (grey cast iron, chalk, a hardened tool steel, a filament-wound tube) reaches its tensile strength first and unzips along the 45&deg; helix normal to &sigma;<sub>1</sub>. A is ductile, B is brittle.</p>'),
 (2,"SET",'<p>Option 0 is exactly backwards and is the most-picked wrong answer. Superimposed bending does not tilt a torsion fracture into a clean helix; it rotates the principal directions to somewhere between 0&deg; and 45&deg; and usually leaves a flatter, one-sided face. Fatigue is ruled out by the prompt, and a fatigue surface would show beach marks and a distinct final-fracture zone.</p>'),
 (3,"SET",'<p>A 45&deg; helix on a shaft that should have been ductile tells you the material is wrong, embrittled by heat treatment or hydrogen, or simply cold.</p>'),
],
"torsion-q09": [
 (0,"SET",'<p>The gauge reads strain and you want torque, so start from Hooke\'s law in shear.</p>'),
 (4,"SET",'<p>The gauge only reads the <em>surface</em>, so c = d/2 = 15 mm. Using 30 mm as the radius gives 8&times; the torque. And 400 &mu;&epsilon; of shear strain is only 200 &mu;&epsilon; of normal strain along the 45&deg; principal direction, which is what one gauge grid actually sees. A torque bridge sums four grids for exactly that reason.</p>'),
 (5,"SET",'<p>At 32 MPa the shaft sits at about a fifth of mild steel\'s shear yield, so &tau; = G&gamma; is safely elastic. A reading that drifts with shop temperature rather than with load is a bridge-compensation problem, not a shaft problem.</p>'),
],
"torsion-q10": [
 (0,"SET",'<p>One surface point carries a bending normal stress and a torsional shear stress at the same time. Build each from its own section property, then combine.</p>'),
 (5,"SET",'<p>Using 16 in the bending term (or 32 in the torsion term) is the classic slip. So is adding &sigma; and &tau; directly, which gives 170 MPa and looks plausible enough to pass unchallenged. Against a 350 MPa yield, 161 MPa is a static factor of 2.2. Static is not the design driver here: the shaft rotates, so bending fully reverses every revolution while the torque stays steady, and the shoulder fillet adds a K<sub>f</sub> of roughly 1.5 to 1.8. Size this one on fatigue at the fillet.</p>'),
],
"torsion-q11": [
 (0,"SET",'<p>Closing the section gives the shear flow a loop to circulate in, so torque is carried by q = T/(2A<sub>m</sub>) rather than by weak St. Venant twisting of thin strips. The costs are all manufacturing and service costs. Two long welds pump heat into the rail and bow it, the sealed cavity traps moisture and machining coolant with no drain path, and you lose access to whatever was inside.</p>'),
 (1,"SET",'<p>A cover plate <em>increases</em> bending stiffness about both axes, because the plate sits away from at least one neutral axis. G is a lattice property; a heat-affected zone changes hardness and residual stress, not the shear modulus. And closing the cell <em>lowers</em> wall shear stress sharply, since the same torque now spreads over a long circulating loop instead of a through-thickness couple in each strip.</p>'),
 (2,"SET",'<p>Take the 40&times;, then add drain holes at the low points, specify a stitch weld pattern to limit distortion, and confirm the plate does not buckle under the shear flow.</p>'),
],
"torsion-q12": [
 (4,"SET",'<p>This is a nominal static shear limit at a smooth section and nothing more. Angle of twist may set a lower torque, a keyway or shoulder raises the local stress by a factor of 1.5 to 3, and a rotating shaft under bending usually has a fatigue allowable well under half the static one.</p>'),
],
"torsion-q13": [
 (0,"SET",'<p>Cut the shaft anywhere between the coupling and the brake and take equilibrium of one free body. The only external torque on that side is the coupling torque, so the internal torque at the cut equals it, and equals it at every cut. Internal torque steps only where an external torque enters or leaves: a gear, pulley, brake, or coupling.</p>'),
 (1,"SET",'<p>Length does not make torque accumulate. It makes <em>twist</em> accumulate, through &theta; = TL/GJ, and that is the confusion this question hunts. The brake face is where the reaction is applied, not where internal torque peaks. The centreline is where shear stress is <em>zero</em>.</p>'),
 (2,"SET",'<p>Sketch the torque diagram first, then size each segment from its own internal torque. On a shaft with several take-offs the segment nearest the driver usually governs.</p>'),
],
"torsion-q14": [
 (0,"SET",'<p>Three steps, and the middle one is where people fall off.</p>'),
 (6,"SET",'<p>Sizing from the motor nameplate torque is the error the figure is warning about. That torque is 15000/183.3 = 81.9 N&middot;m and gives d = 19.6 mm, under a tenth of the required capacity, because torque scales with the gear ratio while d&sup3; only scales with torque. Dividing 15000 by 145.8 rpm directly under-predicts the torque by 9.55.</p>'),
 (7,"SET",'<p>You would round up to a stock 50 mm shaft, then re-check twist, the key and keyway, the bearing seats, and fatigue at the drum flange.</p>'),
],
"torsion-q15": [
 (0,"SET",'<p>Which shear stress corresponds to yield? In pure shear the von Mises equivalent is &sigma;<sub>vm</sub> = &radic;3&tau;, so yielding starts at</p>'),
 (5,"SET",'<p>Comparing &tau; straight against S<sub>y</sub> and skipping the &radic;3 gives 2200 N&middot;m, overstating capacity by 73%. It is the single most common error in a shaft screen. Tresca puts &tau;<sub>y</sub> = S<sub>y</sub>/2 and gives 1100 N&middot;m, which is conservative and perfectly defensible as long as you say which criterion you used.</p>'),
 (6,"DROP"),
],
"torsion-q16": [
 (6,"SET",'<p>The 4/3 shape factor for a solid round bar in torsion sits alongside the 1.5 for a rectangle in bending. Reserve past first yield is only 33%, far less than people expect, because the outer fibres that do most of the work were already at yield.</p>'),
 (7,"SET",'<p>Do not design to T<sub>p</sub>. Reaching it means large permanent twist, and a rotating shaft that has taken a set is scrap. The one place it gets used deliberately is presetting torsion bars at the factory: overload once in the service direction, unload, and the residual shear left behind raises the elastic limit in that direction.</p>'),
],
}

print("edited", rewrite_file("torsion", False, E))
