import {
	T as Be,
	aN as Re,
	aO as Pe,
	V as De,
	X as Fe,
	z as le,
	aP as Ee,
	K as We,
	ay as J,
	aQ as Ge,
	aB as me,
	ai as ce,
	J as Oe,
	p as be,
	l as de,
	a as He,
	a7 as G,
	b as Ce,
	c as z,
	s as I,
	r as P,
	g as h,
	d as T,
	t as U,
	m as Y,
	a2 as pe,
	a6 as ue
} from './runtime.B6PTYWss.js';
import { a as Ne, s as ie } from './render.DTXsa5-Z.js';
import { c as q, a as v, t as A } from './disclose-version.D6IHqBz7.js';
import './legacy.BC6soP9j.js';
import { e as ee } from './events.CuhszENT.js';
import { i as L } from './if.Bxm8qDEX.js';
import { s as ae, c as oe } from './Navbar.Cu8EIbEp.js';
import { b as ze } from './this.j9i47_k0.js';
import { p as W } from './props.CjMNljKH.js';
import { e as ge, i as Ie } from './each.Bw4TUKtu.js';
import { i as Ue } from './lifecycle.ZI99Jbm1.js';
const Ve = () => performance.now(),
	D = { tick: (a) => requestAnimationFrame(a), now: () => Ve(), tasks: new Set() };
function Ae() {
	const a = D.now();
	D.tasks.forEach((e) => {
		e.c(a) || (D.tasks.delete(e), e.f());
	}),
		D.tasks.size !== 0 && D.tick(Ae);
}
function je(a) {
	let e;
	return (
		D.tasks.size === 0 && D.tick(Ae),
		{
			promise: new Promise((o) => {
				D.tasks.add((e = { c: a, f: o }));
			}),
			abort() {
				D.tasks.delete(e);
			}
		}
	);
}
function re(a, e) {
	a.dispatchEvent(new CustomEvent(e));
}
function Ke(a) {
	if (a === 'float') return 'cssFloat';
	if (a === 'offset') return 'cssOffset';
	if (a.startsWith('--')) return a;
	const e = a.split('-');
	return e.length === 1
		? e[0]
		: e[0] +
				e
					.slice(1)
					.map((o) => o[0].toUpperCase() + o.slice(1))
					.join('');
}
function he(a) {
	const e = {},
		o = a.split(';');
	for (const t of o) {
		const [d, m] = t.split(':');
		if (!d || m === void 0) break;
		const s = Ke(d.trim());
		e[s] = m.trim();
	}
	return e;
}
const $e = (a) => a;
function wa(a, e, o, t) {
	var d = (a & Ge) !== 0,
		m = 'both',
		s,
		y = e.inert,
		p,
		i;
	function r() {
		var c = Oe,
			b = le;
		me(null), ce(null);
		try {
			return s ?? (s = o()(e, (t == null ? void 0 : t()) ?? {}, { direction: m }));
		} finally {
			me(c), ce(b);
		}
	}
	var l = {
			is_global: d,
			in() {
				(e.inert = y),
					re(e, 'introstart'),
					(p = ne(e, r(), i, 1, () => {
						re(e, 'introend'), p == null || p.abort(), (p = s = void 0);
					}));
			},
			out(c) {
				(e.inert = !0),
					re(e, 'outrostart'),
					(i = ne(e, r(), p, 0, () => {
						re(e, 'outroend'), c == null || c();
					}));
			},
			stop: () => {
				p == null || p.abort(), i == null || i.abort();
			}
		},
		n = le;
	if (((n.transitions ?? (n.transitions = [])).push(l), Ne)) {
		var g = d;
		if (!g) {
			for (var u = n.parent; u && u.f & Be; ) for (; (u = u.parent) && !(u.f & Re); );
			g = !u || (u.f & Pe) !== 0;
		}
		g &&
			De(() => {
				Fe(() => l.in());
			});
	}
}
function ne(a, e, o, t, d) {
	var m = t === 1;
	if (Ee(e)) {
		var s,
			y = !1;
		return (
			We(() => {
				if (!y) {
					var b = e({ direction: m ? 'in' : 'out' });
					s = ne(a, b, o, t, d);
				}
			}),
			{
				abort: () => {
					(y = !0), s == null || s.abort();
				},
				deactivate: () => s.deactivate(),
				reset: () => s.reset(),
				t: () => s.t()
			}
		);
	}
	if ((o == null || o.deactivate(), !(e != null && e.duration)))
		return d(), { abort: J, deactivate: J, reset: J, t: () => t };
	const { delay: p = 0, css: i, tick: r, easing: l = $e } = e;
	var n = [];
	if (m && o === void 0 && (r && r(0, 1), i)) {
		var g = he(i(0, 1));
		n.push(g, g);
	}
	var u = () => 1 - t,
		c = a.animate(n, { duration: p });
	return (
		(c.onfinish = () => {
			var b = (o == null ? void 0 : o.t()) ?? 1 - t;
			o == null || o.abort();
			var f = t - b,
				F = e.duration * Math.abs(f),
				O = [];
			if (F > 0) {
				if (i)
					for (var E = Math.ceil(F / 16.666666666666668), w = 0; w <= E; w += 1) {
						var H = b + f * l(w / E),
							B = i(H, 1 - H);
						O.push(he(B));
					}
				(u = () => {
					var x = c.currentTime;
					return b + f * l(x / F);
				}),
					r &&
						je(() => {
							if (c.playState !== 'running') return !1;
							var x = u();
							return r(x, 1 - x), !0;
						});
			}
			(c = a.animate(O, { duration: F, fill: 'forwards' })),
				(c.onfinish = () => {
					(u = () => t), r == null || r(t, 1 - t), d();
				});
		}),
		{
			abort: () => {
				c && (c.cancel(), (c.effect = null), (c.onfinish = J));
			},
			deactivate: () => {
				d = J;
			},
			reset: () => {
				t === 0 && (r == null || r(1, 0));
			},
			t: () => u()
		}
	);
}
var Xe = A(
		'<div class="flex h-16 w-full items-center justify-center text-xs text-gray-400">Loading image...</div>'
	),
	Je = A('<div class="p-1 text-center text-xs text-red-400">Image not found</div>'),
	Ye = A('<!> <img style="max-width: 180px; max-height: 180px;"> <!>', 1),
	qe = A(
		'<div class="flex h-8 w-full items-center justify-center text-xs text-gray-400">Loading icon...</div>'
	),
	Qe = A('<div class="p-1 text-center text-xs text-red-400">Icon not found</div>'),
	Ze = A('<!> <img alt="Unit icon" style="max-width: 48px; max-height: 48px;"> <!>', 1),
	ea = A('<div><!> <!></div>');
function xa(a, e) {
	be(e, !1);
	let o = W(e, 'imageUrl', 8, ''),
		t = W(e, 'iconUrl', 8, ''),
		d = W(e, 'altText', 8, 'Unit Image'),
		m = W(e, 'visible', 8, !1),
		s = W(e, 'x', 8, 0),
		y = W(e, 'y', 8, 0),
		p = Y(),
		i = Y(!1),
		r = Y(!1),
		l = Y(!1),
		n = Y(!1);
	function g() {
		T(i, !0), T(r, !1);
	}
	function u() {
		T(i, !1), T(r, !0);
	}
	function c() {
		T(l, !0), T(n, !1);
	}
	function b() {
		T(l, !1), T(n, !0);
	}
	de(
		() => pe(o()),
		() => {
			o() && (T(i, !1), T(r, !1));
		}
	),
		de(
			() => pe(t()),
			() => {
				t() && (T(l, !1), T(n, !1));
			}
		),
		He();
	var f = q(),
		F = G(f);
	{
		var O = (E) => {
			var w = ea(),
				H = z(w);
			{
				var B = (k) => {
					var N = Ye(),
						M = G(N);
					{
						var R = (_) => {
							var S = Xe();
							v(_, S);
						};
						L(M, (_) => {
							!h(i) && !h(r) && _(R);
						});
					}
					var C = I(M, 2),
						$ = I(C, 2);
					{
						var X = (_) => {
							var S = Je();
							v(_, S);
						};
						L($, (_) => {
							h(r) && _(X);
						});
					}
					U(() => {
						ae(C, 'src', o()),
							ae(C, 'alt', d()),
							oe(
								C,
								`max-h-full max-w-full object-contain ${(h(i) && !h(r) ? 'block' : 'hidden') ?? ''} svelte-1egad61`
							);
					}),
						ee('load', C, g),
						ee('error', C, u),
						v(k, N);
				};
				L(H, (k) => {
					o() && k(B);
				});
			}
			var x = I(H, 2);
			{
				var K = (k) => {
					var N = Ze(),
						M = G(N);
					{
						var R = (_) => {
							var S = qe();
							v(_, S);
						};
						L(M, (_) => {
							!h(l) && !h(n) && _(R);
						});
					}
					var C = I(M, 2),
						$ = I(C, 2);
					{
						var X = (_) => {
							var S = Qe();
							v(_, S);
						};
						L($, (_) => {
							h(n) && _(X);
						});
					}
					U(() => {
						ae(C, 'src', t()),
							oe(
								C,
								`max-h-full max-w-full object-contain ${(h(l) && !h(n) ? 'block' : 'hidden') ?? ''} svelte-1egad61`
							);
					}),
						ee('load', C, c),
						ee('error', C, b),
						v(k, N);
				};
				L(x, (k) => {
					t() && k(K);
				});
			}
			P(w),
				ze(
					w,
					(k) => T(p, k),
					() => h(p)
				),
				U(() => {
					oe(
						w,
						`pointer-events-none fixed z-[100] flex flex-col items-center gap-1 rounded-lg border border-gray-700 bg-gray-800 p-2 shadow-xl transition-opacity duration-150
          ${((h(i) || h(l)) && !(h(r) && h(n)) ? 'opacity-100' : 'opacity-0') ?? ''}`
					),
						ae(
							w,
							'style',
							`left: ${s() + 15}px; top: ${y() + 15}px; transform: translate(-50%, -50%); max-width: 200px;`
						);
				}),
				v(E, w);
		};
		L(F, (E) => {
			m() && (o() || t()) && E(O);
		});
	}
	v(a, f), Ce();
}
const fe = {
	1: 'Property 1',
	10: 'Property 10',
	11: 'Property 11',
	12: 'Property 12',
	13: 'Property 13',
	14: 'Property 14',
	15: 'Property 15',
	16: 'Property 16',
	17: 'Property 17',
	18: 'Property 18',
	19: 'Property 19',
	2: 'Property 2',
	20: 'Property 20',
	21: 'Property 21',
	22: 'Property 22',
	23: 'Property 23',
	24: 'Property 24',
	25: 'Property 25',
	26: 'Property 26',
	27: 'Property 27',
	28: 'Property 28',
	29: 'Property 29',
	3: 'Property 3',
	30: 'Property 30',
	31: 'Property 31',
	32: 'Property 32',
	33: 'Property 33',
	34: 'Property 34',
	35: 'Property 35',
	36: 'Property 36',
	37: 'Property 37',
	38: 'Property 38',
	39: 'Property 39',
	4: 'Property 4',
	40: 'Property 40',
	41: 'Property 41',
	42: 'Property 42',
	43: 'Property 43',
	44: 'Property 44',
	45: 'Property 45',
	46: 'Property 46',
	5: 'Property 5',
	6: 'Property 6',
	7: 'Property 7',
	8: 'Property 8',
	9: 'Property 9',
	SoundHitDry: 'Sound Hit Dry',
	SoundHitDryVolume: 'Sound Hit Dry Volume',
	aa_gun: 'AA Gun',
	aa_minigun: 'AA Minigun',
	aa_missile: 'AA Missile',
	aa_missiles: 'AA Missiles',
	aa_railgun: 'AA Railgun',
	aakflak: 'AAK Flak',
	aamissile: 'AA Missile',
	aaweapon: 'AA Weapon',
	acceleration: 'Acceleration',
	accuracy: 'Accuracy',
	acidbomb: 'Acid Bomb',
	acidgoo: 'Acid Goo',
	acidspit: 'Acid Spit',
	activate: 'Activate',
	activatewhenbuilt: 'Activate When Built',
	adv_decklaser: 'Advanced Deck Laser',
	adv_rocket: 'Advanced Rocket',
	advdepthcharge: 'Advanced Depth Charge',
	aimhull: 'Aim Hull',
	airfactory: 'Air Factory',
	airhoverfactor: 'Air Hover Factor',
	airsightdistance: 'Air Sight Distance',
	airstrafe: 'Air Strafe',
	allowNonBlockingAim: 'Allow Non Blocking Aim',
	alphaDecay: 'Alpha Decay',
	alphadecay: 'Alpha Decay',
	alwaysVisible: 'Always Visible',
	alwaysvisible: 'Always Visible',
	amd_rocket: 'AMD Rocket',
	amphibious: 'Amphibious',
	antiair: 'Anti Air',
	antiground: 'Anti Ground',
	area_mexT15_def: 'Area MEX T15 Defense',
	area_mex_def: 'Area MEX Defense',
	area_ondeath_ceg: 'Area On Death CEG',
	area_ondeath_damage: 'Area On Death Damage',
	area_ondeath_damageCeg: 'Area On Death Damage CEG',
	area_ondeath_range: 'Area On Death Range',
	area_ondeath_resistance: 'Area On Death Resistance',
	area_ondeath_time: 'Area On Death Time',
	areaofeffect: 'Area Of Effect',
	arm_advsam: 'Arm Advanced SAM',
	arm_artillery: 'Arm Artillery',
	arm_bats: 'Arm Bats',
	arm_bosscannon: 'Arm Boss Cannon',
	arm_bot_rocket: 'Arm Bot Rocket',
	arm_botrail: 'Arm Bot Railgun',
	arm_bull: 'Arm Bull',
	arm_cir: 'Arm CIR',
	arm_fast: 'Arm Fast',
	arm_fatboy_notalaser: 'Arm Fatboy Not A Laser',
	arm_ham: 'Arm HAM',
	arm_laser: 'Arm Laser',
	arm_laserh1: 'Arm Laser H1',
	arm_lightcannon: 'Arm Light Cannon',
	arm_lightlaser: 'Arm Light Laser',
	arm_pidr: 'Arm PIDR',
	arm_pidrbomb: 'Arm PIDR Bomb',
	arm_pincer_gauss: 'Arm Pincer Gauss',
	arm_seaadvbomb: 'Arm Sea Advanced Bomb',
	arm_triton: 'Arm Triton',
	armaabot_missile1: 'Arm AA Bot Missile 1',
	armaabot_missile2: 'Arm AA Bot Missile 2',
	armadvbomb: 'Arm Advanced Bomb',
	armageddon_blue_laser: 'Armageddon Blue Laser',
	armageddon_green_laser: 'Armageddon Green Laser',
	armagmheat: 'Arm AGM Heat',
	armah_weapon: 'Arm AH Weapon',
	armair_torpedo: 'Arm Air Torpedo',
	armamb_gun: 'Arm Ambusher Gun',
	armamb_gun_high: 'Arm Ambusher Gun High',
	armamph_missile: 'Arm Amphibious Missile',
	armamph_weapon1: 'Arm Amphibious Weapon 1',
	armanac_weapon: 'Arm Annihilator Weapon',
	armatl_torpedo: 'Arm Atlas Torpedo',
	armbantha_fire: 'Arm Bantha Fire',
	armbeamer_weapon: 'Arm Beamer Weapon',
	armbomb: 'Arm Bomb',
	armbot_missile: 'Arm Bot Missile',
	armcannon: 'Arm Cannon',
	armcl_missile: 'Arm Claw Missile',
	armcomlaser: 'Arm Commander Laser',
	armcomlaserboss: 'Arm Commander Laser Boss',
	armcomsealaser: 'Arm Commander Sea Laser',
	armcomsealaserboss: 'Arm Commander Sea Laser Boss',
	armdfly_paralyzer: 'Arm Dragonfly Paralyzer',
	armemp_weapon: 'Arm EMP Weapon',
	armfhlt_laser: 'Arm FHLT Laser',
	armflak_gun: 'Arm Flak Gun',
	armgremlin_gauss: 'Arm Gremlin Gauss',
	armlun_rocket: 'Arm Lunar Rocket',
	armmav_weapon: 'Arm MAV Weapon',
	armmech_cannon: 'Arm Mech Cannon',
	armmg_weapon: 'Arm Machine Gun Weapon',
	armmh_weapon: 'Arm MH Weapon',
	armminivulc_weapon: 'Arm Mini Vulcan Weapon',
	armor_class: 'Armor Class',
	armor_type: 'Armor Type',
	armpb_weapon: 'Arm PB Weapon',
	armrl_missile: 'Arm RL Missile',
	armscab_weapon: 'Arm Scab Weapon',
	armseap_weapon1: 'Arm Seaplane Weapon 1',
	armserp_weapon: 'Arm Serpent Weapon',
	armsfig_weapon: 'Arm SFighter Weapon',
	armsh_weapon: 'Arm SH Weapon',
	armshlt_dead: 'Arm SHLT Dead',
	armshlt_heap: 'Arm SHLT Heap',
	armsmart_torpedo: 'Arm Smart Torpedo',
	armsnipe_weapon: 'Arm Sniper Weapon',
	armtruck_aa: 'Arm Truck AA',
	armtruck_missile: 'Arm Truck Missile',
	armtruck_rocket: 'Arm Truck Rocket',
	armvtol_advmissile: 'Arm VTOL Advanced Missile',
	armvtol_missile: 'Arm VTOL Missile',
	armwar_laser: 'Arm Warlock Laser',
	ata: 'ATA',
	atadr: 'ATADR',
	atam: 'ATAM',
	atdronewep: 'AT Drone Weapon',
	attackrunlength: 'Attack Run Length',
	autoheal: 'Autoheal',
	avoidfeature: 'Avoid Feature',
	avoidfriendly: 'Avoid Friendly',
	avoidground: 'Avoid Ground',
	avoidneutral: 'Avoid Neutral',
	backlauncher: 'Back Launcher',
	badTargetCategory: 'Bad Target Category',
	badtargetcategory: 'Bad Target Category',
	banisher: 'Banisher',
	bankingallowed: 'Banking Allowed',
	bankscale: 'Bank Scale',
	bantha_rocket: 'Bantha Rocket',
	banthfootstep: 'Bantha Footstep',
	basename: 'Base Name',
	beamTTL: 'Beam TTL',
	beamburst: 'Beam Burst',
	beamdecay: 'Beam Decay',
	beamtime: 'Beam Time',
	beamttl: 'Beam TTL',
	bfido: 'B Fido',
	bigfootstep: 'Big Footstep',
	birdshot: 'Birdshot',
	bladewing_lyzer: 'Blade Wing Lyzer',
	blocking: 'Blocking',
	bloodyeggs: 'Bloody Eggs',
	bogus_missile: 'Bogus Missile',
	bombardier_weapon: 'Bombardier Weapon',
	botcannon: 'Bot Cannon',
	bounce: 'Bounce',
	bounceSlip: 'Bounce Slip',
	bounceexplosiongenerator: 'Bounce Explosion Generator',
	bouncerebound: 'Bounce Rebound',
	bounceslip: 'Bounce Slip',
	brakerate: 'Brake Rate',
	build: 'Build',
	buildangle: 'Build Angle',
	buildcostenergy: 'Energy Cost',
	buildcostmetal: 'Metal Cost',
	builddistance: 'Build Distance',
	builder: 'Builder',
	buildinggrounddecalalpha: 'Building Ground Decal Alpha',
	buildinggrounddecaldecayspeed: 'Building Ground Decal Decay Speed',
	buildinggrounddecalsizex: 'Building Ground Decal Size X',
	buildinggrounddecalsizey: 'Building Ground Decal Size Y',
	buildinggrounddecaltype: 'Building Ground Decal Type',
	buildingmask: 'Building Mask',
	buildoptions: 'Build Options',
	buildpic: 'Build Pic',
	buildtime: 'Build Time',
	burnblow: 'Burn Blow',
	burst: 'Burst',
	burstControlWhenOutOfArc: 'Burst Control When Out Of Arc',
	burst_aa_missile: 'Burst AA Missile',
	burst_length: 'Burst Length',
	burstcontrolwhenoutofarc: 'Burst Control When Out Of Arc',
	burstrate: 'Burst Rate',
	cameraShake: 'Camera Shake',
	camerashake: 'Camera Shake',
	canSelfDestruct: 'Can Self Destruct',
	canareaattack: 'Can Area Attack',
	canassist: 'Can Assist',
	canattack: 'Can Attack',
	canattackground: 'Can Attack Ground',
	canbuild: 'Can Build',
	cancapture: 'Can Capture',
	canceldestruct: 'Cancel Destruct',
	cancloak: 'Can Cloak',
	cancrash: 'Can Crash',
	candgun: 'Can Dgun',
	canfight: 'Can Fight',
	canfly: 'Can Fly',
	canguard: 'Can Guard',
	canhover: 'Can Hover',
	canhvylaserroar: 'Can Heavy Laser Roar',
	canland: 'Can Land',
	canloopbackattack: 'Can Loopback Attack',
	canmanualfire: 'Can Manual Fire',
	canmove: 'Can Move',
	cannon: 'Cannon',
	cannon1name: 'Cannon 1 Name',
	cannonuw: 'Underwater Cannon',
	canpatrol: 'Can Patrol',
	canreclaim: 'Can Reclaim',
	canrepair: 'Can Repair',
	canrepeat: 'Can Repeat',
	canrestore: 'Can Restore',
	canresurrect: 'Can Resurrect',
	canselfdestruct: 'Can Self Destruct',
	canselfrepair: 'Can Self Repair',
	canstop: 'Can Stop',
	cansubmerge: 'Can Submerge',
	cant: 'Cant',
	cantbetransported: 'Cant Be Transported',
	capturable: 'Capturable',
	capture: 'Capture',
	capturespeed: 'Capture Speed',
	castshadow: 'Cast Shadow',
	category: 'Category',
	cdragonseyes_dead: 'C Dragonseyes Dead',
	cegtag: 'CEG Tag',
	chaseweapon: 'Chase Weapon',
	childreninheritxp: 'Children Inherit XP',
	cloak: 'Cloak',
	cloakable: 'Cloakable',
	cloakcost: 'Cloak Cost',
	cloakcostmoving: 'Cloak Cost Moving',
	close_plasma: 'Close Plasma',
	cluster_munition: 'Cluster Munition',
	clusternapalm: 'Cluster Napalm',
	clusterplasma: 'Cluster Plasma',
	coax_depthcharge: 'Coaxial Depth Charge',
	cobkickbackrestorespeed: 'COB Kickback Restore Speed',
	collide: 'Collide',
	collideFriendly: 'Collide Friendly',
	collide_friendly: 'Collide Friendly',
	collideenemy: 'Collide Enemy',
	collidefeature: 'Collide Feature',
	collidefirebase: 'Collide Firebase',
	collidefriendly: 'Collide Friendly',
	collideground: 'Collide Ground',
	collideneutral: 'Collide Neutral',
	collision: 'Collision',
	collisionSize: 'Collision Size',
	collisionsize: 'Collision Size',
	collisionspherescale: 'Collision Sphere Scale',
	collisionvolumeoffsets: 'Collision Volume Offsets',
	collisionvolumescales: 'Collision Volume Scales',
	collisionvolumetest: 'Collision Volume Test',
	collisionvolumetype: 'Collision Volume Type',
	colormap: 'Color Map',
	combatradius: 'Combat Radius',
	commandfire: 'Command Fire',
	commando_back_cannon: 'Commando Back Cannon',
	commando_blaster: 'Commando Blaster',
	commando_stunner: 'Commando Stunner',
	comment: 'Comment',
	controlblob: 'Control Blob',
	cor_advsam: 'Cor Advanced SAM',
	cor_artillery: 'Cor Artillery',
	cor_bats: 'Cor Bats',
	cor_batslaser: 'Cor Bats Laser',
	cor_bot_rocket: 'Cor Bot Rocket',
	cor_burst_laser: 'Cor Burst Laser',
	cor_canlaser: 'Cor Cannon Laser',
	cor_croc: 'Cor Crocodile',
	cor_crus: 'Cor Crusader',
	cor_erad: 'Cor Eradicator',
	cor_gol: 'Cor Goliath',
	cor_heat_laser: 'Cor Heat Laser',
	cor_intimidator: 'Cor Intimidator',
	cor_laser: 'Cor Laser',
	cor_laserh1: 'Cor Laser H1',
	cor_lightlaser: 'Cor Light Laser',
	cor_mort: 'Cor Mortar',
	cor_parrow: 'Cor PArrow',
	cor_reap: 'Cor Reaper',
	cor_seaadvbomb: 'Cor Sea Advanced Bomb',
	cor_termite_laser: 'Cor Termite Laser',
	cor_tiger_laser: 'Cor Tiger Laser',
	coraabot_missile1: 'Cor AA Bot Missile 1',
	coraabot_missile2: 'Cor AA Bot Missile 2',
	coraabot_missile3: 'Cor AA Bot Missile 3',
	coraabot_missile4: 'Cor AA Bot Missile 4',
	coradvbomb: 'Cor Advanced Bomb',
	corah_weapon: 'Cor AH Weapon',
	coramph_weapon1: 'Cor Amphibious Weapon 1',
	coramph_weapon2: 'Cor Amphibious Weapon 2',
	coratl_torpedo: 'Cor Atlas Torpedo',
	corbhmth_weapon: 'Cor Behemoth Weapon',
	corbomb: 'Cor Bomb',
	corbot_missile: 'Cor Bot Missile',
	corcomeyelaser: 'Cor Commander Eye Laser',
	corcomlaser: 'Cor Commander Laser',
	corcomlaserboss: 'Cor Commander Laser Boss',
	corcomsealaser: 'Cor Commander Sea Laser',
	corcomsealaserboss: 'Cor Commander Sea Laser Boss',
	corethickness: 'Core Thickness',
	corfhlt_laser: 'Cor FHLT Laser',
	corgol_sidelaser: 'Cor Goliath Side Laser',
	corhrk_rocket: 'Cor HRK Rocket',
	corkorg_fire: 'Cor KORG Fire',
	corkorg_laser: 'Cor KORG Laser',
	corkorg_rocket: 'Cor KORG Rocket',
	corlevlr_weapon: 'Cor Leveler Weapon',
	cormabm_weapon: 'Cor MABM Weapon',
	cormexp_rocket: 'Cor Medium Explosion Rocket',
	cormh_weapon: 'Cor MH Weapon',
	corminibuzz_weapon: 'Cor Mini Buzz Weapon',
	corpse: 'Corpse',
	corrl_missile: 'Cor RL Missile',
	corsfig_weapon: 'Cor SFighter Weapon',
	corsok_laser: 'Cor SOK Laser',
	corsumo_weapon: 'Cor Sumo Weapon',
	cortoast_gun: 'Cor Toaster Gun',
	cortoast_gun_high: 'Cor Toaster Gun High',
	cortron_weapon: 'Cor Tron Weapon',
	cortruck_aa: 'Cor Truck AA',
	cortruck_missile: 'Cor Truck Missile',
	cortruck_rocket: 'Cor Truck Rocket',
	corvtol_advmissile: 'Cor VTOL Advanced Missile',
	corvtol_missile: 'Cor VTOL Missile',
	corwar_laser: 'Cor Warlock Laser',
	corwolv_gun: 'Cor Wolverine Gun',
	cotd_depthcharge: 'COTD Depth Charge',
	count: 'Count',
	coverage: 'Coverage',
	crashable: 'Crashable',
	crashexplosiongenerators: 'Crash Explosion Generators',
	craterareaofeffect: 'Crater Area Of Effect',
	craterboost: 'Crater Boost',
	cratermult: 'Crater Multiplier',
	crawl_detonator: 'Crawler Detonator',
	crawl_dummy: 'Crawler Dummy',
	crblmssl: 'CRBL Missile',
	cruisealt: 'Cruise Altitude',
	cruisealtitude: 'Cruise Altitude',
	crushresistance: 'Crush Resistance',
	customparams: 'Custom Parameters',
	customrange: 'Custom Range',
	cvbuildable: 'CV Buildable',
	cylindertargeting: 'Cylinder Targeting',
	damage: 'Damage',
	damage_per_cost: 'Damage Per Cost',
	damage_type: 'Damage Type',
	damageareaofeffect: 'Damage Area Of Effect',
	damagemodifier: 'Damage Modifier',
	dance: 'Dance',
	dclaw: 'DClaw',
	deactivate: 'Deactivate',
	dead: 'Dead',
	decoration: 'Decoration',
	decoyfor: 'Decoy For',
	def: 'Defense',
	defaultmissiontype: 'Default Mission Type',
	depthcharge: 'Depth Charge',
	description: 'Description',
	detonaterange: 'Detonate Range',
	disable_when_no_air: 'Disable When No Air',
	disintegrator: 'Disintegrator',
	disintegratorxl: 'Disintegrator XL',
	distance_stun_multiplier: 'Distance Stun Multiplier',
	dmaw: 'DMAW',
	doomsday_blue_laser: 'Doomsday Blue Laser',
	doomsday_red_laser: 'Doomsday Red Laser',
	dps: 'DPS',
	dragon_missileh: 'Dragon Missile H',
	dragonmawh: 'Dragon Maw H',
	dragonseyes_dead: 'Dragonseyes Dead',
	dreadovercharge: 'Dreadnought Overcharge',
	dreadshot: 'Dreadnought Shot',
	driftratio: 'Drift Ratio',
	drone: 'Drone',
	duration: 'Duration',
	edgeeffectiveness: 'Edge Effectiveness',
	edragon_missile: 'EDragon Missile',
	effigy: 'Effigy',
	effigy_offset: 'Effigy Offset',
	emg: 'EMG',
	emgx: 'EMGX',
	emp: 'EMP',
	empflashbang: 'EMP Flashbang',
	empgrenade: 'EMP Grenade',
	empmissile: 'EMP Missile',
	energyconv_capacity: 'Energy Converter Capacity',
	energyconv_efficiency: 'Energy Converter Efficiency',
	energycost: 'Energy Cost',
	energymake: 'Energy Make',
	energymultiplier: 'Energy Multiplier',
	energypershot: 'Energy Per Shot',
	energystorage: 'Energy Storage',
	energyupkeep: 'Energy Upkeep',
	evocomlvl: 'Evolution Commander Level',
	evolution_condition: 'Evolution Condition',
	evolution_health_transfer: 'Evolution Health Transfer',
	evolution_power_multiplier: 'Evolution Power Multiplier',
	evolution_power_threshold: 'Evolution Power Threshold',
	evolution_target: 'Evolution Target',
	evolution_timer: 'Evolution Timer',
	exata: 'EX ATA',
	exemptcategory: 'Exempt Category',
	exp_heavyrocket: 'Experimental Heavy Rocket',
	explodeas: 'Explode As',
	explosiongenerator: 'Explosion Generator',
	explosiongenerators: 'Explosion Generators',
	explosionscar: 'Explosion Scar',
	extractsmetal: 'Extracts Metal',
	eyelaser: 'Eye Laser',
	fallOffRate: 'Fall Off Rate',
	fall_damage_multiplier: 'Fall Damage Multiplier',
	falloffrate: 'Fall Off Rate',
	far_plasma: 'Far Plasma',
	fastAutoRetargeting: 'Fast Auto Retargeting',
	fastautoretargeting: 'Fast Auto Retargeting',
	featuredefs: 'Feature Definitions',
	ferret_missile: 'Ferret Missile',
	festorbeam: 'Festor Beam',
	fighter: 'Fighter',
	fireTolerance: 'Fire Tolerance',
	fire_rate: 'Fire Rate',
	firestarter: 'Firestarter',
	firestate: 'Fire State',
	firesubmersed: 'Fire Submersed',
	firetolerance: 'Fire Tolerance',
	firingceg: 'Firing CEG',
	fixedlauncher: 'Fixed Launcher',
	flak: 'Flak',
	flameGFXTime: 'Flame GFX Time',
	flame_thrower: 'Flame Thrower',
	flamegfxtime: 'Flame GFX Time',
	flamer: 'Flamer',
	flamethrower: 'Flamethrower',
	flamethrower_ce: 'Flamethrower CE',
	flamethrowermain: 'Flamethrower Main',
	flamethrowerspike: 'Flamethrower Spike',
	flare1name: 'Flare 1 Name',
	flashlightmin: 'Flashlight Minimum',
	flea_laser: 'Flea Laser',
	flightTime: 'Flight Time',
	flighttime: 'Flight Time',
	floater: 'Floater',
	fmd_rocket: 'FMD Rocket',
	footprintx: 'Footprint X',
	footprintz: 'Footprint Z',
	frontgun: 'Front Gun',
	ga2: 'GA2',
	gatling_gun: 'Gatling Gun',
	gator_laser: 'Gator Laser',
	gator_laserx: 'Gator Laser X',
	gauss: 'Gauss',
	geothermal: 'Geothermal',
	goo: 'Goo',
	goolauncher: 'Goo Launcher',
	gravityaffected: 'Gravity Affected',
	groundbounce: 'Ground Bounce',
	gun: 'Gun',
	hardstop: 'Hard Stop',
	health: 'Health',
	heap: 'Heap',
	heat_ray: 'Heat Ray',
	heatray1: 'Heat Ray 1',
	heatraylarge: 'Heat Ray Large',
	heatroy: 'Heat Ray',
	heavy_torpedo: 'Heavy Torpedo',
	heavylaser: 'Heavy Laser',
	heavyplasma: 'Heavy Plasma',
	heightboostfactor: 'Height Boost Factor',
	hidedamage: 'Hide Damage',
	highTrajectory: 'High Trajectory',
	hightrajectory: 'High Trajectory',
	hllt_1: 'HLLT 1',
	hllt_2: 'HLLT 2',
	hllt_3: 'HLLT 3',
	hllt_4: 'HLLT 4',
	hllt_bottom: 'HLLT Bottom',
	hllt_top: 'HLLT Top',
	holdsteady: 'Hold Steady',
	hoverAttack: 'Hover Attack',
	hoverattack: 'Hover Attack',
	hplasma: 'Heavy Plasma',
	i18nfromunit: 'I18N From Unit',
	icontype: 'Icon Type',
	idleautoheal: 'Idle Autoheal',
	idletime: 'Idle Time',
	impactonly: 'Impact Only',
	impulse_factor: 'Impulse Factor',
	impulseboost: 'Impulse Boost',
	impulsefactor: 'Impulse Factor',
	inheritxpratemultiplier: 'Inherit XP Rate Multiplier',
	initcloak: 'Initial Cloak',
	initcloaked: 'Initial Cloaked',
	instantselfd: 'Instant Self Destruct',
	intensity: 'Intensity',
	interceptedByShieldType: 'Intercepted By Shield Type',
	interceptedbyshieldtype: 'Intercepted By Shield Type',
	interceptor: 'Interceptor',
	isairbase: 'Is Airbase',
	iscommander: 'Is Commander',
	isdecoycommander: 'Is Decoy Commander',
	istargetingupgrade: 'Is Targeting Upgrade',
	iswatervariable: 'Is Water Variable',
	janus_rocket: 'Janus Rocket',
	juggernaut_bottom: 'Juggernaut Bottom',
	juggernaut_fire: 'Juggernaut Fire',
	juggernaut_top: 'Juggernaut Top',
	juggfootstep: 'Juggernaut Footstep',
	juno_pulse: 'Juno Pulse',
	juno_pulse_ghost: 'Juno Pulse Ghost',
	juno_pulse_mini: 'Juno Pulse Mini',
	kamikaze: 'Kamikaze',
	kamikazedistance: 'Kamikaze Distance',
	karg_shoulder: 'Karg Shoulder',
	kickback: 'Kickback',
	kmaw: 'KMAW',
	krogfootstep: 'Krog Footstep',
	krogkick: 'Krog Kick',
	krogweaponaim: 'Krog Weapon Aim',
	krogweaponrestore: 'Krog Weapon Restore',
	krowbosslaser: 'Krow Boss Laser',
	krowbosslaser2: 'Krow Boss Laser 2',
	krowlaser: 'Krow Laser',
	krowlaser2: 'Krow Laser 2',
	krowlaserh: 'Krow Laser H',
	largebeamlaser: 'Large Beam Laser',
	laser: 'Laser',
	laserFlareSize: 'Laser Flare Size',
	laserflaresize: 'Laser Flare Size',
	leadbonus: 'Lead Bonus',
	leadlimit: 'Lead Limit',
	leavetracks: 'Leave Tracks',
	leg_amph_gauss: 'Legion Amphibious Gauss',
	leg_bot_rocket: 'Legion Bot Rocket',
	legacyname: 'Legacy Name',
	legah_gun: 'Legion AH Gun',
	legair_torp: 'Legion Air Torpedo',
	legcomlaser: 'Legion Commander Laser',
	legflak_gun: 'Legion Flak Gun',
	legfloat_gatling: 'Legion Float Gatling',
	legfloat_gauss: 'Legion Float Gauss',
	leggun: 'Legion Gun',
	legheatray: 'Legion Heat Ray',
	legicbm: 'Legion ICBM',
	legion_riot_cannon_t2: 'Legion Riot Cannon T2',
	legion_shotgun: 'Legion Shotgun',
	legkeres_cannon: 'Legion Keres Cannon',
	legkeres_gatling: 'Legion Keres Gatling',
	legmed_missile: 'Legion Medium Missile',
	legmgplasma: 'Legion Machine Gun Plasma',
	legmh_weapon: 'Legion MH Weapon',
	legner_weapon: 'Legion Ner Weapon',
	legphsound: 'Legion PH Sound',
	legphtarg: 'Legion PH Target',
	legrl_missile: 'Legion RL Missile',
	levelground: 'Level Ground',
	lightning: 'Lightning',
	loadingradius: 'Loading Radius',
	longgun: 'Long Gun',
	losemitheight: 'LOS Emit Height',
	lrpc: 'LRPC',
	lumamult: 'Luminosity Multiplier',
	machinegun: 'Machine Gun',
	madsam_missile: 'Mad SAM Missile',
	maindir: 'Main Direction',
	maneuverleashlength: 'Maneuver Leash Length',
	martyrbomb: 'Martyr Bomb',
	mass: 'Mass',
	maxacc: 'Max Acceleration',
	maxaileron: 'Max Aileron',
	maxangledif: 'Max Angle Difference',
	maxbank: 'Max Bank',
	maxdamage: 'Max Health',
	maxdec: 'Max Deceleration',
	maxelevator: 'Max Elevator',
	maxpitch: 'Max Pitch',
	maxrange: 'Max Range',
	maxreversevelocity: 'Max Reverse Velocity',
	maxrudder: 'Max Rudder',
	maxslope: 'Max Slope',
	maxvelocity: 'Max Velocity',
	maxwaterdepth: 'Max Water Depth',
	mech_rapidlaser: 'Mech Rapid Laser',
	med_emg: 'Medium EMG',
	mediumplasma: 'Medium Plasma',
	melee: 'Melee',
	meleeBig: 'Melee Big',
	metal_extractor: 'Metal Extractor',
	metalcost: 'Metal Cost',
	metalmake: 'Metal Make',
	metalpershot: 'Metal Per Shot',
	metalstorage: 'Metal Storage',
	mg_guns: 'Machine Guns',
	minIntensity: 'Min Intensity',
	mincloakdistance: 'Min Cloak Distance',
	mine: 'Mine',
	minerange: 'Mine Range',
	minesweep: 'Mine Sweep',
	minesweeper: 'Minesweeper',
	minimum_respawn_stun: 'Minimum Respawn Stun',
	minintensity: 'Min Intensity',
	ministarfire: 'Mini Starfire',
	minwaterdepth: 'Min Water Depth',
	missile: 'Missile',
	mobileflak: 'Mobile Flak',
	mobilestandorders: 'Mobile Stand Orders',
	model: 'Model',
	model_author: 'Model Author',
	mortar: 'Mortar',
	movementclass: 'Movement Class',
	moverate1: 'Move Rate 1',
	movestate: 'Move State',
	movingaccuracy: 'Moving Accuracy',
	mygravity: 'My Gravity',
	name: 'Name',
	nanocolor: 'Nano Color',
	napalmbombs: 'Napalm Bombs',
	napalmmissile: 'Napalm Missile',
	neutral_when_closed: 'Neutral When Closed',
	newdmaw: 'New DMAW',
	noautofire: 'No Autofire',
	nochase: 'No Chase',
	nochasecategory: 'No Chase Category',
	noexplode: 'No Explode',
	nogap: 'No Gap',
	nohealthbars: 'No Healthbars',
	nopvebuilder: 'No PVE Builder',
	norestrict: 'No Restrict',
	normalmaps: 'Normal Maps',
	normaltex: 'Normal Texture',
	noselfdamage: 'No Self Damage',
	nuclear_launch: 'Nuclear Launch',
	nuclear_missile: 'Nuclear Missile',
	nuketest: 'Nuke Test',
	nuketestcor: 'Nuke Test Cor',
	numbounce: 'Number Bounces',
	objectify: 'Objectify',
	objectname: 'Object Name',
	off_on_stun: 'Off On Stun',
	ok: 'OK',
	old_armsnipe_weapon: 'Old Arm Sniper Weapon',
	onlytargetcategory: 'Only Target Category',
	onlytargetcategory2: 'Only Target Category 2',
	onoffable: 'On Off Able',
	onoffname: 'On Off Name',
	ownerExpAccWeight: 'Owner XP Accumulation Weight',
	ownerexpaccweight: 'Owner XP Accumulation Weight',
	paralyzemultiplier: 'Paralyze Multiplier',
	paralyzer: 'Paralyzer',
	paralyzetime: 'Paralyze Time',
	paratrooper: 'Paratrooper',
	parentsinheritxp: 'Parents Inherit XP',
	pieceexplosiongenerators: 'Piece Explosion Generators',
	piledriver: 'Pile Driver',
	plasma: 'Plasma',
	plasma_high: 'High Plasma',
	predictBoost: 'Predict Boost',
	predictboost: 'Predict Boost',
	projectiles: 'Projectiles',
	proximityPriority: 'Proximity Priority',
	proximitypriority: 'Proximity Priority',
	pulsespeed: 'Pulse Speed',
	pushresistant: 'Push Resistant',
	quickshot_cannon: 'Quickshot Cannon',
	radardistance: 'Radar Distance',
	radardistancejam: 'Radar Distance Jam',
	radaremitheight: 'Radar Emit Height',
	railgun: 'Railgun',
	railgunt2: 'Railgun T2',
	railgunt3: 'Railgun T3',
	range: 'Range',
	range_max: 'Max Range',
	range_min: 'Min Range',
	rangefinder: 'Range Finder',
	rangexpscale: 'Range XP Scale',
	rapidnapalm: 'Rapid Napalm',
	raptorparalyzerbig: 'Raptor Paralyzer Big',
	raptorparalyzersmall: 'Raptor Paralyzer Small',
	reclaimable: 'Reclaimable',
	reclaimspeed: 'Reclaim Speed',
	releaseheld: 'Release Held',
	reload_time: 'Reload Time',
	reloadtime: 'Reload Time',
	removestop: 'Remove Stop',
	removewait: 'Remove Wait',
	repair: 'Repair',
	repairable: 'Repairable',
	repulsor: 'Repulsor',
	repulsor1: 'Repulsor 1',
	respawn_announcement: 'Respawn Announcement',
	restoretime: 'Restore Time',
	rflrpc: 'RF LRPC',
	rgbcolor: 'RGB Color',
	rgbcolor2: 'RGB Color 2',
	rocket: 'Rocket',
	rocket_split: 'Rocket Split',
	rockrestorespeed: 'Rock Restore Speed',
	rockspeed: 'Rock Speed',
	rockstrength: 'Rock Strength',
	rockteeth: 'Rock Teeth',
	rockteethx: 'Rock Teeth X',
	salvo_size: 'Salvo Size',
	scav_swap_override_captured: 'Scavenger Swap Override Captured',
	scav_swap_override_created: 'Scavenger Swap Override Created',
	script: 'Script',
	scrollspeed: 'Scroll Speed',
	sdmssl: 'SD Missile',
	sea_repulsor: 'Sea Repulsor',
	seismicdistance: 'Seismic Distance',
	seismicsignature: 'Seismic Signature',
	select: 'Select',
	selfdestructas: 'Self Destruct As',
	selfdestructcountdown: 'Self Destruct Countdown',
	semiauto: 'Semiauto',
	sentinel_depthcharge: 'Sentinel Depth Charge',
	separation: 'Separation',
	separationDistance: 'Separation Distance',
	sfxtypes: 'SFX Types',
	shield: 'Shield',
	shield_color_mult: 'Shield Color Multiplier',
	shield_power: 'Shield Power',
	shield_radius: 'Shield Radius',
	shield_rate: 'Shield Rate',
	shield_recharge: 'Shield Recharge',
	shiva_gun: 'Shiva Gun',
	shiva_rocket: 'Shiva Rocket',
	shocker: 'Shocker',
	shocker_high: 'Shocker High',
	shocker_low: 'Shocker Low',
	shortgun: 'Short Gun',
	shot: 'Shot',
	shotgun: 'Shotgun',
	showplayername: 'Show Player Name',
	side: 'Side',
	sightdistance: 'Sight Distance',
	sightemitheight: 'Sight Emit Height',
	size: 'Size',
	sizeDecay: 'Size Decay',
	sizedecay: 'Size Decay',
	sizegrowth: 'Size Growth',
	skybeam: 'Skybeam',
	slaveTo: 'Slave To',
	slaveto: 'Slave To',
	sleevename: 'Sleeve Name',
	small_weapon: 'Small Weapon',
	smart_trajectory_dummy: 'Smart Trajectory Dummy',
	smokePeriod: 'Smoke Period',
	smokeTrailCastShadow: 'Smoke Trail Cast Shadow',
	smokecolor: 'Smoke Color',
	smokeperiod: 'Smoke Period',
	smokesize: 'Smoke Size',
	smoketime: 'Smoke Time',
	smoketrail: 'Smoke Trail',
	smoketrailcastshadow: 'Smoke Trail Cast Shadow',
	smoothanim: 'Smooth Animation',
	solar: 'Solar',
	sonardistance: 'Sonar Distance',
	sonarstealth: 'Sonar Stealth',
	soundhit: 'Sound Hit',
	soundhitdry: 'Sound Hit Dry',
	soundhitdryvolume: 'Sound Hit Dry Volume',
	soundhitvolume: 'Sound Hit Volume',
	soundhitwet: 'Sound Hit Wet',
	soundhitwetvolume: 'Sound Hit Wet Volume',
	sounds: 'Sounds',
	soundstart: 'Sound Start',
	soundstartvolume: 'Sound Start Volume',
	soundtrigger: 'Sound Trigger',
	spawnmeteor: 'Spawn Meteor',
	speed: 'Speed',
	speedtofront: 'Speed To Front',
	spider: 'Spider',
	spike_acid_blob: 'Spike Acid Blob',
	spike_emp_blob: 'Spike EMP Blob',
	sprayAngle: 'Spray Angle',
	sprayangle: 'Spray Angle',
	stages: 'Stages',
	standingmoveorder: 'Standing Move Order',
	starfire: 'Starfire',
	startvelocity: 'Start Velocity',
	stealth: 'Stealth',
	stiletto_bomb: 'Stiletto Bomb',
	stoa_missile: 'STOA Missile',
	stockpile: 'Stockpile',
	stockpiletime: 'Stockpile Time',
	strafetoattack: 'Strafe To Attack',
	subfolder: 'Subfolder',
	sumohvylaserroar: 'Sumo Heavy Laser Roar',
	super_missile: 'Super Missile',
	t2heatray: 'T2 Heat Ray',
	t3_rail_accelerator: 'T3 Rail Accelerator',
	targetBorder: 'Target Border',
	targetable: 'Targetable',
	targetborder: 'Target Border',
	targeting: 'Targeting',
	targetmoveerror: 'Target Move Error',
	tawf113_weapon: 'TAWF 113 Weapon',
	td_depthcharge: 'TD Depth Charge',
	techlevel: 'Tech Level',
	tehlazerofdewm: 'The Lazer Of Doom',
	terraformspeed: 'Terraform Speed',
	texture1: 'Texture 1',
	texture2: 'Texture 2',
	texture3: 'Texture 3',
	thermite_laser: 'Thermite Laser',
	thickness: 'Thickness',
	thunder: 'Thunder',
	tidalgenerator: 'Tidal Generator',
	tilelength: 'Tile Length',
	tmaw: 'TMAW',
	tolerace: 'Tolerance',
	tolerance: 'Tolerance',
	topgunaa: 'Top Gun AA',
	torpedo: 'Torpedo',
	torplauncher: 'Torpedo Launcher',
	trackoffset: 'Track Offset',
	tracks: 'Tracks',
	trackstrength: 'Track Strength',
	trackstretch: 'Track Stretch',
	tracktype: 'Track Type',
	trackwidth: 'Track Width',
	trajectoryheight: 'Trajectory Height',
	transportByEnemy: 'Transport By Enemy',
	transportbyenemy: 'Transport By Enemy',
	transportcapacity: 'Transport Capacity',
	transportmass: 'Transport Mass',
	transportsize: 'Transport Size',
	transportunloadmethod: 'Transport Unload Method',
	treeshader: 'Tree Shader',
	tremor_spread_fire: 'Tremor Spread Fire',
	trident_depthcharge: 'Trident Depth Charge',
	trigger: 'Trigger',
	turninplace: 'Turn In Place',
	turninplaceanglelimit: 'Turn In Place Angle Limit',
	turninplacespeedlimit: 'Turn In Place Speed Limit',
	turnradius: 'Turn Radius',
	turnrate: 'Turn Rate',
	turret: 'Turret',
	turretname: 'Turret Name',
	ultraheavyriotcannon: 'Ultra Heavy Riot Cannon',
	uncloak: 'Uncloak',
	underattack: 'Under Attack',
	unitcomplete: 'Unit Complete',
	unitgroup: 'Unit Group',
	unitname: 'Unit Name',
	unloadspread: 'Unload Spread',
	upright: 'Upright',
	usePieceCollisionVolumes: 'Use Piece Collision Volumes',
	usebuildinggrounddecal: 'Use Building Ground Decal',
	usepiececollisionvolumes: 'Use Piece Collision Volumes',
	useskinning: 'Use Skinning',
	usesmoothmesh: 'Use Smooth Mesh',
	velgun: 'Velocity Gun',
	verticalspeed: 'Vertical Speed',
	vipersabot: 'Viper Sabot',
	vtol_emg: 'VTOL EMG',
	vtol_emg2: 'VTOL EMG 2',
	vtol_rocket: 'VTOL Rocket',
	vtol_rocket2: 'VTOL Rocket 2',
	vtol_sabot: 'VTOL Sabot',
	water_fall_damage_multiplier: 'Water Fall Damage Multiplier',
	waterballon: 'Water Balloon',
	waterbounce: 'Water Bounce',
	waterline: 'Waterline',
	waterspeed: 'Water Speed',
	waterweapon: 'Water Weapon',
	weapon: 'Weapon',
	weapon1turretx: 'Weapon 1 Turret X',
	weapon1turrety: 'Weapon 1 Turret Y',
	weaponAimAdjustPriority: 'Weapon Aim Adjust Priority',
	weapon_type: 'Weapon Type',
	weaponacceleration: 'Weapon Acceleration',
	weapondefs: 'Weapon Definitions',
	weapons: 'Weapons',
	weapontimer: 'Weapon Timer',
	weapontype: 'Weapon Type',
	weaponvelocity: 'Weapon Velocity',
	windgenerator: 'Wind Generator',
	wingangle: 'Wing Angle',
	wingdrag: 'Wing Drag',
	wobble: 'Wobble',
	workertime: 'Worker Time',
	workertimeboost: 'Worker Time Boost',
	working: 'Working',
	wpn1turretx: 'Weapon 1 Turret X',
	wpn1turrety: 'Weapon 1 Turret Y',
	wtboostunittype: 'WT Boost Unit Type',
	yardmap: 'Yard Map',
	yellow_missile: 'Yellow Missile'
};
function aa(a) {
	return a in fe
		? fe[a]
		: a
				.replace(/_/g, ' ')
				.replace(/([A-Z])/g, ' $1')
				.replace(/^./, (e) => e.toUpperCase())
				.trim();
}
function ra(a) {
	return a == null
		? '—'
		: typeof a == 'boolean'
			? a
				? 'Yes'
				: 'No'
			: typeof a == 'number'
				? a.toLocaleString()
				: Array.isArray(a)
					? a.join(', ')
					: a;
}
function _e(a, e) {
	return e === 'buildtime' && typeof a == 'number'
		? `${(a / 100).toFixed(2)}s`
		: e.toLowerCase().includes('time') && typeof a == 'number'
			? `${a.toFixed(2)}s`
			: (e === 'dps' ||
						e === 'maxRange' ||
						e === 'range' ||
						e === 'sightDistance' ||
						e === 'sightdistance') &&
				  typeof a == 'number'
				? e === 'dps' || e === 'maxRange' || e === 'range'
					? a % 1 === 0
						? a.toFixed(0)
						: a.toFixed(1)
					: a.toLocaleString()
				: typeof a == 'number'
					? a.toLocaleString()
					: ra(a);
}
var oa = A('<span class="text-xs italic text-gray-300"></span> <!>', 1),
	ta = A('<span class="text-xs text-gray-200"> </span>'),
	ia = A('<div class="rounded bg-gray-700/40 p-1.5"><!></div>'),
	na = A('<div class="space-y-1"></div>'),
	sa = A('<span class="text-xs font-medium italic text-gray-400">(Empty Array)</span>'),
	la = A('<span class="font-medium text-gray-100"> </span>'),
	ma = A(
		'<div class="flex flex-col items-start rounded-md py-1 text-sm"><span class="mb-0.5 text-xs text-gray-400"> </span> <div class="ml-2 w-full overflow-hidden"><!></div></div>'
	),
	ca = A('<div></div>'),
	da = A('<span class="text-xs italic text-gray-500">No data to display.</span>');
function ye(a, e) {
	be(e, !1);
	let o = W(e, 'data', 8),
		t = W(e, 'depth', 8, 0);
	function d(r) {
		return typeof r == 'object' && r !== null && !Array.isArray(r);
	}
	function m(r) {
		return Array.isArray(r);
	}
	Ue();
	var s = q(),
		y = G(s);
	{
		var p = (r) => {
				var l = ca();
				ge(
					l,
					5,
					() => Object.entries(o()),
					([n, g]) => n,
					(n, g) => {
						let u = () => h(g)[0],
							c = () => h(g)[1];
						var b = ma(),
							f = z(b),
							F = z(f);
						U(() => ie(F, `${aa(u()) ?? ''}:`)), P(f);
						var O = I(f, 2),
							E = z(O);
						{
							var w = (B) => {
									var x = q(),
										K = G(x),
										k = ue(() => t() + 1);
									ye(K, {
										get data() {
											return c();
										},
										get depth() {
											return h(k);
										}
									}),
										v(B, x);
								},
								H = (B) => {
									var x = q(),
										K = G(x);
									{
										var k = (M) => {
												var R = q(),
													C = G(R);
												{
													var $ = (_) => {
															var S = na();
															ge(S, 5, c, Ie, (Se, Q, se) => {
																var te = ia(),
																	Te = z(te);
																{
																	var we = (V) => {
																			var j = oa(),
																				Z = G(j);
																			Z.textContent = `(Item ${se + 1} - Object):`;
																			var Me = I(Z, 2),
																				Le = ue(() => t() + 1);
																			ye(Me, {
																				get data() {
																					return h(Q);
																				},
																				get depth() {
																					return h(Le);
																				}
																			}),
																				v(V, j);
																		},
																		xe = (V) => {
																			var j = ta(),
																				Z = z(j, !0);
																			U(() => ie(Z, _e(h(Q), u() + '_' + se))), P(j), v(V, j);
																		};
																	L(Te, (V) => {
																		typeof h(Q) == 'object' && h(Q) !== null ? V(we) : V(xe, !1);
																	});
																}
																P(te), v(Se, te);
															}),
																P(S),
																v(_, S);
														},
														X = (_) => {
															var S = sa();
															v(_, S);
														};
													L(C, (_) => {
														c().length > 0 ? _($) : _(X, !1);
													});
												}
												v(M, R);
											},
											N = (M) => {
												var R = la(),
													C = z(R, !0);
												U(() => ie(C, _e(c(), u()))), P(R), v(M, R);
											};
										L(
											K,
											(M) => {
												m(c()) ? M(k) : M(N, !1);
											},
											!0
										);
									}
									v(B, x);
								};
							L(E, (B) => {
								d(c()) ? B(w) : B(H, !1);
							});
						}
						P(O), P(b), v(n, b);
					}
				),
					P(l),
					U(() =>
						oe(l, `space-y-1.5 ${(t() > 0 ? 'ml-3 border-l border-gray-600/50 pl-3' : '') ?? ''}`)
					),
					v(r, l);
			},
			i = (r) => {
				var l = da();
				v(r, l);
			};
		L(y, (r) => {
			o() ? r(p) : r(i, !1);
		});
	}
	v(a, s), Ce();
}
function ke(a) {
	const e = a - 1;
	return e * e * e + 1;
}
function ve(a) {
	const e = typeof a == 'string' && a.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
	return e ? [parseFloat(e[1]), e[2] || 'px'] : [a, 'px'];
}
function Ma(
	a,
	{ delay: e = 0, duration: o = 400, easing: t = ke, x: d = 0, y: m = 0, opacity: s = 0 } = {}
) {
	const y = getComputedStyle(a),
		p = +y.opacity,
		i = y.transform === 'none' ? '' : y.transform,
		r = p * (1 - s),
		[l, n] = ve(d),
		[g, u] = ve(m);
	return {
		delay: e,
		duration: o,
		easing: t,
		css: (c, b) => `
			transform: ${i} translate(${(1 - c) * l}${n}, ${(1 - c) * g}${u});
			opacity: ${p - r * b}`
	};
}
function La(a, { delay: e = 0, duration: o = 400, easing: t = ke, axis: d = 'y' } = {}) {
	const m = getComputedStyle(a),
		s = +m.opacity,
		y = d === 'y' ? 'height' : 'width',
		p = parseFloat(m[y]),
		i = d === 'y' ? ['top', 'bottom'] : ['left', 'right'],
		r = i.map((f) => `${f[0].toUpperCase()}${f.slice(1)}`),
		l = parseFloat(m[`padding${r[0]}`]),
		n = parseFloat(m[`padding${r[1]}`]),
		g = parseFloat(m[`margin${r[0]}`]),
		u = parseFloat(m[`margin${r[1]}`]),
		c = parseFloat(m[`border${r[0]}Width`]),
		b = parseFloat(m[`border${r[1]}Width`]);
	return {
		delay: e,
		duration: o,
		easing: t,
		css: (f) =>
			`overflow: hidden;opacity: ${Math.min(f * 20, 1) * s};${y}: ${f * p}px;padding-${i[0]}: ${f * l}px;padding-${i[1]}: ${f * n}px;margin-${i[0]}: ${f * g}px;margin-${i[1]}: ${f * u}px;border-${i[0]}-width: ${f * c}px;border-${i[1]}-width: ${f * b}px;`
	};
}
const pa = {
		corsktl: 3350,
		corroach: 2e3,
		armvader: 2e3,
		armmine1: 445,
		armmine2: 1110,
		armmine3: 1390,
		armfmine3: 1940,
		cormine1: 400,
		cormine2: 1110,
		cormine3: 1390,
		cormine4: 1110,
		corfmine3: 1940
	},
	ua = 1e3;
function Ba(a) {
	return a
		? Object.entries(a).map(([o, t]) => {
				const d = t.damage
						? Object.entries(t.damage).map(([n, g]) => ({
								type: n === 'default' ? 'Base' : n,
								value: Number(g || 0)
							}))
						: [],
					m = d.length > 0 ? Math.max(...d.map((n) => Number(n.value))) : 0,
					s = t.paralyzer === 'Yes' || t.paralyzer === !0,
					y = Number(t.paralyzemultiplier) || 1,
					p = t.weapontype === 'notFlame',
					i = t.burst ? Number(t.burst) : 1,
					r = s || p ? 0 : (m * i) / (t.reloadtime || 1),
					l = s ? (m * i * y) / (t.reloadtime || 1) : 0;
				return {
					originalDefKey: o,
					name: t.name || o,
					type: t.weapontype || 'Unknown',
					damage: m,
					maxDamage: m,
					dps: typeof r == 'number' ? r.toFixed(1) : r,
					paralyzeDps: typeof l == 'number' ? l.toFixed(1) : 0,
					paralyzeMultiplier: y,
					range: Number(t.range || 0),
					reloadTime: Number(t.reloadtime || 1),
					isEMP: s,
					isNotFlame: p,
					burstCount: i
				};
			})
		: [];
}
function Ra(a, e, o) {
	var i;
	if (
		(console.log(
			`[getUnitCombatStats for ${o}] Received processed weapons array (weaponsProcessed):`,
			a ? JSON.parse(JSON.stringify(a)) : void 0
		),
		console.log(
			`[getUnitCombatStats for ${o}] Received unitDataSource.weapons (slots):`,
			e != null && e.weapons ? JSON.parse(JSON.stringify(e.weapons)) : void 0
		),
		console.log(
			`[getUnitCombatStats for ${o}] Received unitDataSource.weapondefs:`,
			e != null && e.weapondefs ? JSON.parse(JSON.stringify(e.weapondefs)) : void 0
		),
		!(a != null && a.length))
	)
		return (
			console.log(`[getUnitCombatStats for ${o}] No processed weapon definitions, returning null.`),
			null
		);
	if (((i = e == null ? void 0 : e.customparams) == null ? void 0 : i.instantselfd) === !0) {
		const r = pa[o] || ua,
			l = a.length > 0 ? Math.max(...a.map((n) => Number(n.range || 0))) : 0;
		return { totalDps: r.toFixed(1), totalParalyzeDps: '0.0', maxRange: l };
	}
	let d = 0,
		m = 0,
		s = 0;
	const y = [];
	if (e && e.weapons && Object.keys(e.weapons).length > 0 && a.length > 0) {
		console.log(`[getUnitCombatStats for ${o}] Phase 1: Processing ALL weapon slots.`);
		for (const r in e.weapons) {
			const l = e.weapons[r];
			if (l && l.def) {
				const n = l.def.toLowerCase();
				y.push(n);
				const g = a.find((u) => u.originalDefKey === n);
				g
					? ((d += Number(g.dps || 0)),
						(m += Number(g.paralyzeDps || 0)),
						(s = Math.max(s, Number(g.range || 0))))
					: e.weapondefs &&
						e.weapondefs[n] &&
						(s = Math.max(s, Number(e.weapondefs[n].range || 0)));
			}
		}
	}
	const p = new Set(y);
	return (
		a.length > 0 &&
			(console.log(
				`[getUnitCombatStats for ${o}] Phase 2: Checking for unslotted weapon definitions and finalizing max range.`
			),
			a.forEach((r) => {
				p.has(r.originalDefKey) ||
					(console.log(
						`[getUnitCombatStats for ${o}]     Adding DPS for unslotted definition: ${r.originalDefKey} (DPS: ${r.dps})`
					),
					(d += Number(r.dps || 0)),
					(m += Number(r.paralyzeDps || 0))),
					(s = Math.max(s, Number(r.range || 0)));
			})),
		{ totalDps: d.toFixed(1), totalParalyzeDps: m.toFixed(1), maxRange: s }
	);
}
function ga(a) {
	var e;
	return ((e = a == null ? void 0 : a.customparams) == null ? void 0 : e.instantselfd) === !0;
}
function Pa(a) {
	var e;
	return ga(a) && ((e = a == null ? void 0 : a.customparams) == null ? void 0 : e.mine) === !0;
}
export {
	xa as I,
	ye as R,
	Pa as a,
	Ra as b,
	Ma as c,
	_e as f,
	aa as g,
	ga as i,
	Ba as p,
	La as s,
	wa as t
};
