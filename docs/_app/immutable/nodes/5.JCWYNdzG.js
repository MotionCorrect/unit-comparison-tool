import { a as r, t as g, c as Me, b as te } from '../chunks/disclose-version.D6IHqBz7.js';
import '../chunks/legacy.BC6soP9j.js';
import {
	p as va,
	g as e,
	l as Ot,
	a as ma,
	b as pa,
	m as ae,
	d as W,
	a5 as ga,
	c as s,
	s as o,
	r as a,
	t as d,
	a6 as J,
	a7 as Pe,
	n as fa
} from '../chunks/runtime.B6PTYWss.js';
import { s as c } from '../chunks/render.DTXsa5-Z.js';
import { i as p } from '../chunks/if.Bxm8qDEX.js';
import { e as lt, i as Ct } from '../chunks/each.Bw4TUKtu.js';
import {
	N as xa,
	l as _a,
	s as ue,
	u as ba,
	a as ua,
	h as Yt,
	b as ha,
	c as ya,
	d as Jt
} from '../chunks/Navbar.Cu8EIbEp.js';
import { e as wa } from '../chunks/events.CuhszENT.js';
import {
	I as ka,
	p as ja,
	i as Ma,
	a as Pa,
	g as nt,
	t as za,
	f as dt,
	b as Ua,
	R as Oa,
	s as Ca
} from '../chunks/dpsCalculations.BjJuydXE.js';
import { i as Ea } from '../chunks/lifecycle.ZI99Jbm1.js';
import { s as Sa, a as Et } from '../chunks/store.CxMiR7dL.js';
import { o as Ta } from '../chunks/index-client.BbMgc3IQ.js';
import { s as Va } from '../chunks/entry.pjfs3gTR.js';
import { b as ct } from '../chunks/paths.CC_1dxGD.js';
const Ba = () => {
		const ze = Va;
		return {
			page: { subscribe: ze.page.subscribe },
			navigating: { subscribe: ze.navigating.subscribe },
			updated: ze.updated
		};
	},
	Ra = {
		subscribe(ze) {
			return Ba().page.subscribe(ze);
		}
	};
var Ha = g(
		'<div class="flex h-24 w-24 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-700/50 bg-gray-800/50"><img class="max-h-full max-w-full object-contain" loading="lazy"></div>'
	),
	$a = g(
		'<div class="h-8 w-8 flex-shrink-0"><img class="max-h-full max-w-full object-contain" loading="lazy"></div>'
	),
	Na = g(
		'<span class="rounded-full bg-pink-500/20 px-3 py-1 text-sm font-medium text-pink-400"> </span>'
	),
	Wa = g(
		'<span class="rounded-full bg-red-500/20 px-3 py-1 text-sm font-medium text-red-400"> </span>'
	),
	Aa = g(
		'<span class="rounded-full bg-indigo-500/20 px-3 py-1 text-sm font-medium text-indigo-400">Model by <a href="https://www.beyondallreason.info/team" target="_blank" class="underline hover:text-indigo-300"> </a></span>'
	),
	Fa = g(
		'<div class="mt-2"><a target="_blank" class="inline-flex items-center text-sm text-blue-400 hover:text-blue-300"><svg class="mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg> View source on GitHub</a></div>'
	),
	La = g(
		'<div class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/70 backdrop-blur-sm"><div class="rounded-lg bg-gray-800 p-6 shadow-xl"><div class="flex flex-col items-center justify-center space-y-4"><div class="h-12 w-12 animate-spin rounded-full border-4 border-teal-400/20 border-t-teal-400"></div> <p class="text-lg text-gray-300">Loading unit data...</p></div></div></div>'
	),
	Ka = g(
		'<button class="text-gray-400 transition-colors hover:text-white"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>'
	),
	qa = g('<span class="rounded-full bg-teal-500/20 px-2 py-0.5 text-teal-300"> </span>'),
	Ga = g('<span class="rounded-full bg-purple-500/20 px-2 py-0.5 text-purple-300"> </span>'),
	Xa = g(
		'<div class="mt-2 grid grid-cols-3 gap-2 border-t border-gray-700/50 pt-2 text-xs"><div class="flex flex-col items-center rounded bg-gray-700/50 p-1.5"><span class="text-gray-400">HP</span> <span class="font-medium text-red-400"> </span></div> <div class="flex flex-col items-center rounded bg-gray-700/50 p-1.5"><span class="text-gray-400">Metal</span> <span class="font-medium text-blue-400"> </span></div> <div class="flex flex-col items-center rounded bg-gray-700/50 p-1.5"><span class="text-gray-400">Time</span> <span class="font-medium text-green-400"> </span></div></div>'
	),
	Ya = g(
		'<a class="block rounded-lg bg-gray-800/70 p-3 transition-all hover:bg-gray-700/70 hover:shadow-md"><div class="flex items-center justify-between"><span class="font-semibold text-teal-400"> </span> <span class="rounded bg-blue-500/20 px-1.5 py-0.5 text-xs font-medium text-blue-400"> </span></div> <div class="mt-1.5 flex flex-wrap gap-1.5 text-xs"><!> <!></div> <!></a>'
	),
	Ja = g('<div class="grid grid-cols-1 gap-3 md:grid-cols-2"></div>'),
	Qa = g(
		`<span class="text-gray-500">—</span> /* No build options or empty object
															*/`,
		1
	),
	Za = g(
		'<div class="bg-gray-850/50 mt-2 space-y-1 overflow-y-auto rounded-md p-2" style="max-height: 250px;"><!></div>'
	),
	Ia = g(
		'<div><div class="rounded-lg border border-gray-700/50 bg-gray-900/95 p-4 shadow-xl"><div class="max-h-80 overflow-y-auto"><!></div></div></div>'
	),
	Da = g('<div class="mt-1 font-medium text-white"><!></div>'),
	es = g(
		'<div class="relative rounded-lg bg-gray-800/50 p-4 transition-colors hover:bg-gray-700/50"><div class="flex items-center justify-between"><span class="text-sm text-gray-400"> </span> <!></div> <!></div>'
	),
	ts = g(
		'<div class="flex gap-4"><span class="rounded-full bg-red-500/20 px-3 py-1 text-sm font-medium text-red-400"> </span> <span class="rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-400"> </span></div>'
	),
	as = g(
		'<div class="mb-2 inline-block rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-medium text-yellow-400">EMP Weapon</div>'
	),
	ss = g(
		'<div class="mb-2 inline-block rounded-full bg-orange-500/20 px-3 py-1 text-xs font-medium text-orange-400">Special Weapon</div>'
	),
	rs = g(
		'<div class="flex justify-between"><span class="text-gray-400"> </span> <span class="font-medium text-yellow-400"> </span></div>'
	),
	os = g(
		'<div class="flex justify-between"><span class="text-gray-400">Burst</span> <span class="font-medium text-green-400"> </span></div>'
	),
	is = g(
		'<div class="rounded-lg border border-gray-700/30 bg-gray-800/50 p-4 transition-colors hover:bg-gray-700/50"><h3 class="mb-2 font-medium text-white"> </h3> <!> <!> <div class="space-y-3 text-sm"><div class="flex justify-between"><span class="text-gray-400">Damage</span> <span class="font-medium text-red-400"> </span></div> <div class="flex justify-between"><span class="text-gray-400">DPS</span> <span class="font-medium text-orange-400"><!></span></div> <!> <!> <div class="flex justify-between"><span class="text-gray-400">Range</span> <span class="font-medium text-blue-400"> </span></div> <div class="flex justify-between"><span class="text-gray-400">Reload Time</span> <span class="font-medium text-purple-400"> </span></div></div></div>'
	),
	ls = g(
		'<div class="mt-8 border-t border-gray-700/50 pt-6"><div class="mb-4 flex items-center justify-between"><h3 class="text-lg font-semibold text-white">Weapons</h3> <!></div> <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"></div></div>'
	),
	ns = g(
		'<section class="rounded-xl bg-gray-800/30 p-6"><div class="mb-6 flex items-center gap-3"><svg class="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg> <h2 class="text-xl font-semibold capitalize text-white"> </h2></div> <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3"></div> <!></section>'
	),
	ds = g(
		'<div class="rounded-lg bg-gray-800/50 p-4 transition-colors hover:bg-gray-700/50"><span class="text-sm text-gray-400"> </span> <div class="mt-1 font-medium text-white"> </div></div>'
	),
	cs = g(
		'<section class="rounded-xl bg-gray-800/30 p-6"><h2 class="text-xl font-semibold text-white">Custom Parameters</h2> <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"></div></section>'
	),
	vs = g(
		'<div class="space-y-8"><header class="mb-8"><div class="mb-6 flex items-center gap-6"><!> <div><div class="mb-2 flex items-center gap-4"><h1 class="cursor-default bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-4xl font-bold text-transparent"> </h1> <!></div> <div class="flex flex-wrap gap-3"><span class="rounded-full bg-teal-500/20 px-3 py-1 text-sm font-medium text-teal-400"> </span> <span class="rounded-full bg-orange-500/20 px-3 py-1 text-sm font-medium text-orange-400"> </span> <!> <span class="rounded-full bg-purple-500/20 px-3 py-1 text-sm font-medium text-purple-400"> </span> <!> <!></div> <!></div> <a class="ml-auto self-start rounded-lg bg-gray-800/50 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-700/50">Back to Explorer</a></div></header> <!> <!> <!></div>'
	),
	ms = g(
		'<div class="flex h-[60vh] items-center justify-center text-center"><div><h2 class="mb-2 text-2xl text-gray-400">Loading unit data...</h2> <p class="text-gray-500">Please wait while we fetch the information.</p></div></div>'
	),
	ps = g(
		'<div class="min-h-screen bg-gray-900 text-gray-100"><!> <!> <div class="container mx-auto max-w-7xl px-4 py-8"><!></div></div>'
	);
function Us(ze, $t) {
	va($t, !1);
	const vt = Sa(),
		Nt = () => Et(Ra, '$page', vt),
		Re = () => Et(Jt, '$unitIconMap', vt),
		ce = () => Et(ba, '$unitsData', vt),
		St = () => Et(ua, '$unitNamesDetails', vt),
		y = ae(),
		Tt = ae(),
		mt = ae();
	let P = ae(null),
		f = ae(null),
		pt = ae(''),
		Wt = ae({}),
		he = ae([]),
		Ye = ae([]),
		gt = ae(!1),
		Qt = !1,
		Zt = '',
		It = 0,
		Dt = 0;
	console.log(e(mt));
	function ea(t) {
		if (!t || !t.buildpic) return '';
		const H = t.buildpic.split('/'),
			V = H.pop(),
			E = H.pop(),
			B = V.split('.')[0].toLowerCase();
		return E ? `${ct}/unitpics_webp/${E}/${B}.webp` : `${ct}/unitpics_webp/${B}.webp`;
	}
	function ta(t) {
		return console.log(Jt, t, Re()[t]), !Re() || !t || !Re()[t] ? '' : `${ct}/${Re()[t]}`;
	}
	function At(t, i) {
		var V, E, B, k, _, b, se, me, Ue, pe, ge, Oe, fe, Ce;
		return (
			[
				t == null ? void 0 : t.maxdamage,
				t == null ? void 0 : t.health,
				(V = t == null ? void 0 : t[i]) == null ? void 0 : V.maxdamage,
				(E = t == null ? void 0 : t[i]) == null ? void 0 : E.health,
				(k = (B = t == null ? void 0 : t.data) == null ? void 0 : B[i]) == null
					? void 0
					: k.maxdamage,
				(b = (_ = t == null ? void 0 : t.data) == null ? void 0 : _[i]) == null ? void 0 : b.health,
				(pe =
					(Ue = (me = (se = ce()) == null ? void 0 : se[i]) == null ? void 0 : me.data) == null
						? void 0
						: Ue[i]) == null
					? void 0
					: pe.maxdamage,
				(Ce =
					(fe = (Oe = (ge = ce()) == null ? void 0 : ge[i]) == null ? void 0 : Oe.data) == null
						? void 0
						: fe[i]) == null
					? void 0
					: Ce.health
			].find((Ee) => Ee !== void 0) || 0
		);
	}
	function aa(t, i) {
		var V,
			E,
			B,
			k,
			_,
			b,
			se,
			me,
			Ue,
			pe,
			ge,
			Oe,
			fe,
			Ce,
			Ee,
			ft,
			He,
			xt,
			Je,
			_t,
			bt,
			ut,
			ht,
			yt,
			wt,
			Qe,
			kt,
			Ze,
			jt,
			Mt,
			n,
			l,
			x,
			ye,
			xe,
			_e;
		return (
			[
				t == null ? void 0 : t.buildcostmetal,
				(V = t == null ? void 0 : t[i]) == null ? void 0 : V.buildcostmetal,
				(E = t == null ? void 0 : t.cost) == null ? void 0 : E.metal,
				(k = (B = t == null ? void 0 : t[i]) == null ? void 0 : B.cost) == null ? void 0 : k.metal,
				t == null ? void 0 : t.metalcost,
				(_ = t == null ? void 0 : t[i]) == null ? void 0 : _.metalcost,
				(b = t == null ? void 0 : t.customparams) == null ? void 0 : b.buildcostmetal,
				(me = (se = t == null ? void 0 : t[i]) == null ? void 0 : se.customparams) == null
					? void 0
					: me.buildcostmetal,
				(pe = (Ue = t == null ? void 0 : t.data) == null ? void 0 : Ue[i]) == null
					? void 0
					: pe.buildcostmetal,
				(fe =
					(Oe = (ge = t == null ? void 0 : t.data) == null ? void 0 : ge[i]) == null
						? void 0
						: Oe.cost) == null
					? void 0
					: fe.metal,
				(Ee = (Ce = t == null ? void 0 : t.data) == null ? void 0 : Ce[i]) == null
					? void 0
					: Ee.metalcost,
				(xt =
					(He = (ft = t == null ? void 0 : t.data) == null ? void 0 : ft[i]) == null
						? void 0
						: He.customparams) == null
					? void 0
					: xt.buildcostmetal,
				(ut =
					(bt = (_t = (Je = ce()) == null ? void 0 : Je[i]) == null ? void 0 : _t.data) == null
						? void 0
						: bt[i]) == null
					? void 0
					: ut.buildcostmetal,
				(kt =
					(Qe =
						(wt = (yt = (ht = ce()) == null ? void 0 : ht[i]) == null ? void 0 : yt.data) == null
							? void 0
							: wt[i]) == null
						? void 0
						: Qe.cost) == null
					? void 0
					: kt.metal,
				(n =
					(Mt = (jt = (Ze = ce()) == null ? void 0 : Ze[i]) == null ? void 0 : jt.data) == null
						? void 0
						: Mt[i]) == null
					? void 0
					: n.metalcost,
				(_e =
					(xe =
						(ye = (x = (l = ce()) == null ? void 0 : l[i]) == null ? void 0 : x.data) == null
							? void 0
							: ye[i]) == null
						? void 0
						: xe.customparams) == null
					? void 0
					: _e.buildcostmetal
			].find((we) => we != null) || 0
		);
	}
	async function Ft(t) {
		var i, H, V, E, B, k;
		if ((W(gt, !0), await _a(), ce() && St())) {
			if (
				(W(P, ce()[t]),
				W(f, ((H = (i = e(P)) == null ? void 0 : i.data) == null ? void 0 : H[t]) || {}),
				!e(f).maxdamage &&
					(k =
						(B = (E = (V = e(P)) == null ? void 0 : V.data) == null ? void 0 : E[t]) == null
							? void 0
							: B[t]) != null &&
					k.maxdamage &&
					ga(f, (e(f).maxdamage = e(P).data[t][t].maxdamage)),
				W(pt, St().units.names[t] || t),
				W(Wt, sa(e(f))),
				W(he, ja(e(f).weapondefs || {})),
				e(f) && e(f).weapons && Object.keys(e(f).weapons).length > 0 && e(he).length > 0)
			) {
				const _ = Object.values(e(f).weapons).map((b) => b.def);
				W(
					Ye,
					e(he)
						.map((b) => {
							const se = _.filter((me) => me === b.originalDefKey).length;
							return { ...b, count: se > 0 ? se : 1 };
						})
						.filter((b) => b.count > 0)
				);
			} else
				e(he).length > 0
					? W(
							Ye,
							e(he).map((_) => ({ ..._, count: 1 }))
						)
					: W(Ye, []);
			console.log('weaponsData for getUnitCombatStats:', e(he)),
				console.log('weaponsForDisplay for UI:', e(Ye));
		}
		W(gt, !1);
	}
	Ta(async () => {
		e(y) && (await Ft(e(y)));
	});
	function Lt() {
		return Ua(e(he), e(f), e(y));
	}
	function sa(t) {
		const i = [
				'name',
				'faction',
				'type',
				'subtype',
				'path',
				'description',
				'unitname',
				'side',
				'icontype',
				'script',
				'buildpic',
				'category',
				'customparams'
			],
			H = [
				'health',
				'maxdamage',
				'damagemodifier',
				'armorType',
				'seismicdistance',
				'seismicsignature',
				'hidedamage',
				'autoheal',
				'idleautoheal',
				'idletime',
				'mass',
				'footprintx',
				'footprintz'
			],
			V = [
				'maxvelocity',
				'acceleration',
				'brakerate',
				'turnradius',
				'turnrate',
				'turninplace',
				'turninplaceanglelimit',
				'turninplacespeedlimit',
				'movementclass',
				'moverate1',
				'cruisealt',
				'cruisealtitude',
				'amphibious',
				'floater',
				'upright',
				'canhover',
				'canfly',
				'canmove',
				'canland',
				'airstrafe',
				'airhoverfactor',
				'hoverattack',
				'leavetracks',
				'trackoffset',
				'trackstretch',
				'trackstrength',
				'tracktype',
				'trackwidth',
				'maxacc',
				'maxdec',
				'speed',
				'transportcapacity'
			],
			E = [
				'canattack',
				'canattackground',
				'canmanualfire',
				'canpatrol',
				'canrepeat',
				'canresurrect',
				'cancloak',
				'cancapture',
				'weapondefs',
				'weapons',
				'radardistance',
				'radardistancejam',
				'sonardistance',
				'sonarstealth',
				'stealth',
				'cloaked',
				'cloakcost',
				'cloakcostmoving',
				'initcloak',
				'firestate',
				'standingmoveorder',
				'strafetoattack',
				'hightrajectory',
				'kamikaze',
				'kamikazedistance',
				'sightdistance',
				'airsightdistance',
				'onlytargetcategory2',
				'exemptcategory',
				'radarEmitHeight',
				'noautofire',
				'nochase',
				'nochasecategory',
				'turret'
			],
			B = [
				'buildcostenergy',
				'buildcostmetal',
				'buildtime',
				'energycost',
				'energymake',
				'energypershot',
				'energystorage',
				'energyupkeep',
				'extractsmetal',
				'metalcost',
				'metalmake',
				'metalstorage',
				'terraformspeed',
				'workertime',
				'capture',
				'reclaimable',
				'reclaimspeed',
				'repairable',
				'buildoptions'
			],
			k = { general: {}, stats: {}, movement: {}, combat: {}, resources: {}, custom: {} };
		return (
			Object.entries(t).forEach(([_, b]) => {
				i.includes(_)
					? (k.general[_] = b)
					: H.includes(_)
						? (k.stats[_] = b)
						: V.includes(_)
							? (k.movement[_] = b)
							: E.includes(_)
								? (k.combat[_] = b)
								: B.includes(_)
									? (k.resources[_] = b)
									: (k.custom[_] = b);
			}),
			k
		);
	}
	function Vt(t) {
		return typeof t == 'object' && t !== null;
	}
	let ve = ae(new Set());
	function ra(t) {
		e(ve).has(t) ? e(ve).delete(t) : e(ve).add(t), W(ve, e(ve));
	}
	function oa(t) {
		const i = {
			general: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
			stats:
				'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
			movement:
				'M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z',
			combat:
				'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064',
			resources:
				'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
			custom:
				'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
		};
		return i[t] || i.general;
	}
	function ia(t) {
		if (!t) return 'bottom';
		const i = t.getBoundingClientRect();
		return window.innerHeight - i.bottom < 400 ? 'top' : 'bottom';
	}
	Ot(
		() => Nt(),
		() => {
			W(y, Nt().url.searchParams.get('name'));
		}
	),
		Ot(
			() => e(y),
			() => {
				e(y) && Ft(e(y));
			}
		),
		Ot(
			() => e(f),
			() => {
				W(Tt, ea(e(f)));
			}
		),
		Ot(
			() => (Re(), e(y)),
			() => {
				W(mt, Re() ? ta(e(y)) : '');
			}
		),
		ma(),
		Ea();
	var Bt = ps(),
		Kt = s(Bt);
	xa(Kt);
	var qt = o(Kt, 2);
	ka(qt, { imageUrl: Zt, visible: Qt, x: It, y: Dt });
	var Gt = o(qt, 2),
		la = s(Gt);
	{
		var na = (t) => {
				var i = vs(),
					H = s(i),
					V = s(H),
					E = s(V);
				{
					var B = (n) => {
						var l = Ha(),
							x = s(l);
						a(l),
							d(() => {
								ue(x, 'src', e(Tt)), ue(x, 'alt', `${e(pt) ?? ''} image`);
							}),
							Yt(x),
							r(n, l);
					};
					p(E, (n) => {
						e(Tt) && n(B);
					});
				}
				var k = o(E, 2),
					_ = s(k),
					b = s(_),
					se = s(b, !0);
				a(b);
				var me = o(b, 2);
				{
					var Ue = (n) => {
						var l = $a(),
							x = s(l);
						a(l),
							d(() => {
								ue(x, 'src', e(mt)), ue(x, 'alt', `${e(pt) ?? ''} icon`);
							}),
							Yt(x),
							r(n, l);
					};
					p(me, (n) => {
						!e(gt) && e(mt) && n(Ue);
					});
				}
				a(_);
				var pe = o(_, 2),
					ge = s(pe),
					Oe = s(ge, !0);
				a(ge);
				var fe = o(ge, 2),
					Ce = s(fe, !0);
				a(fe);
				var Ee = o(fe, 2);
				{
					var ft = (n) => {
						var l = Na(),
							x = s(l, !0);
						a(l), d(() => c(x, e(P).subtype)), r(n, l);
					};
					p(Ee, (n) => {
						e(P).subtype !== 'none' && n(ft);
					});
				}
				var He = o(Ee, 2),
					xt = s(He);
				a(He);
				var Je = o(He, 2);
				{
					var _t = (n) => {
						var l = Wa(),
							x = s(l, !0);
						d(() => c(x, Pa(e(f)) ? 'Mine' : 'Suicide Unit')), a(l), r(n, l);
					};
					p(Je, (n) => {
						Ma(e(f)) && n(_t);
					});
				}
				var bt = o(Je, 2);
				{
					var ut = (n) => {
						var l = Aa(),
							x = o(s(l)),
							ye = s(x, !0);
						a(x), a(l), d(() => c(ye, e(f).customparams.model_author)), r(n, l);
					};
					p(bt, (n) => {
						var l;
						(l = e(f).customparams) != null && l.model_author && n(ut);
					});
				}
				a(pe);
				var ht = o(pe, 2);
				{
					var yt = (n) => {
						var l = Fa(),
							x = s(l);
						d(() =>
							ue(
								x,
								'href',
								`https://github.com/beyond-all-reason/Beyond-All-Reason/blob/master/units/${e(P).path.join('/')}.lua`
							)
						),
							a(l),
							r(n, l);
					};
					p(ht, (n) => {
						e(P).path && n(yt);
					});
				}
				a(k);
				var wt = o(k, 2);
				ue(wt, 'href', `${ct ?? ''}/explore`), a(V), a(H);
				var Qe = o(H, 2);
				{
					var kt = (n) => {
						var l = La();
						r(n, l);
					};
					p(Qe, (n) => {
						e(gt) && n(kt);
					});
				}
				var Ze = o(Qe, 2);
				lt(
					Ze,
					1,
					() => Object.entries(e(Wt)),
					Ct,
					(n, l) => {
						let x = () => e(l)[0],
							ye = () => e(l)[1];
						var xe = ns(),
							_e = s(xe),
							we = s(_e),
							Ie = s(we);
						d(() => ue(Ie, 'd', oa(x()))), a(we);
						var $e = o(we, 2),
							Rt = s($e, !0);
						a($e), a(_e);
						var Ne = o(_e, 2);
						lt(
							Ne,
							5,
							() => Object.entries(ye()),
							Ct,
							(De, We) => {
								let j = () => e(We)[0],
									S = () => e(We)[1];
								var et = es(),
									Ae = s(et),
									Q = s(Ae),
									M = s(Q, !0);
								d(() => c(M, nt(j()))), a(Q);
								var ke = o(Q, 2);
								{
									var be = (A) => {
										var U = Ka();
										d(() =>
											ue(U, 'aria-label', e(ve).has(j()) ? 'Collapse details' : 'Expand details')
										);
										var je = s(U);
										const re = J(
											() =>
												`h-5 w-5 transform transition-transform ${(e(ve).has(j()) ? 'rotate-180' : '') ?? ''}`
										);
										a(U), d(() => ha(je, e(re))), wa('click', U, () => ra(j())), r(A, U);
									};
									p(ke, (A) => {
										Vt(S()) && A(be);
									});
								}
								a(Ae);
								var tt = o(Ae, 2);
								{
									var Se = (A) => {
											var U = Ia();
											const je = J(
												() =>
													`absolute z-10 w-96 ${(ia(e(ve).has(j()) ? document.activeElement : null) === 'top' ? 'bottom-full mb-2' : 'top-full mt-2') ?? ''}`
											);
											var re = s(U),
												Te = s(re),
												oe = s(Te);
											{
												var Z = (ie) => {
														var le = Me(),
															q = Pe(le);
														{
															var ne = (O) => {
																	var G = Ja();
																	lt(
																		G,
																		5,
																		() => Object.entries(S()),
																		Ct,
																		(R, F) => {
																			let $ = () => e(F)[1];
																			var X = Ya();
																			const Y = J(() => {
																					var v;
																					return ((v = ce()) == null ? void 0 : v[$()]) || {};
																				}),
																				C = J(() => {
																					var v, h;
																					return (
																						((h = (v = e(Y)) == null ? void 0 : v.data) == null
																							? void 0
																							: h[$()]) || {}
																					);
																				}),
																				m = J(() => {
																					var v, h, K;
																					return (
																						((K =
																							(h = (v = St()) == null ? void 0 : v.units) == null
																								? void 0
																								: h.names) == null
																							? void 0
																							: K[$()]) || $()
																					);
																				}),
																				u = J(() => {
																					var v;
																					return ((v = e(Y)) == null ? void 0 : v.tech_level) || 1;
																				}),
																				T = J(() => {
																					var v;
																					return (v = e(Y)) == null ? void 0 : v.faction;
																				}),
																				N = J(() => {
																					var v;
																					return (v = e(Y)) == null ? void 0 : v.type;
																				});
																			var z = s(X),
																				w = s(z),
																				I = s(w, !0);
																			a(w);
																			var Be = o(w, 2),
																				Le = s(Be);
																			a(Be), a(z);
																			var L = o(z, 2),
																				D = s(L);
																			{
																				var Ke = (v) => {
																					var h = qa(),
																						K = s(h, !0);
																					a(h),
																						d(() => c(K, e(T) === 'arm' ? 'ARM' : 'COR')),
																						r(v, h);
																				};
																				p(D, (v) => {
																					e(T) && v(Ke);
																				});
																			}
																			var qe = o(D, 2);
																			{
																				var Ge = (v) => {
																					var h = Ga(),
																						K = s(h, !0);
																					a(h), d(() => c(K, e(N))), r(v, h);
																				};
																				p(qe, (v) => {
																					e(N) && e(N) !== 'other' && v(Ge);
																				});
																			}
																			a(L);
																			var ee = o(L, 2);
																			{
																				var de = (v) => {
																					var h = Xa(),
																						K = s(h),
																						st = o(s(K), 2),
																						Pt = s(st, !0);
																					d(() => c(Pt, dt(At(e(C), $()), 'maxdamage'))),
																						a(st),
																						a(K);
																					var Xe = o(K, 2),
																						rt = o(s(Xe), 2),
																						zt = s(rt, !0);
																					d(() => c(zt, dt(aa(e(C), $()), 'buildcostmetal'))),
																						a(rt),
																						a(Xe);
																					var ot = o(Xe, 2),
																						it = o(s(ot), 2),
																						Ut = s(it, !0);
																					d(() => c(Ut, dt(e(C).buildtime, 'buildtime'))),
																						a(it),
																						a(ot),
																						a(h),
																						r(v, h);
																				};
																				p(ee, (v) => {
																					e(C) && Object.keys(e(C)).length > 0 && v(de);
																				});
																			}
																			a(X),
																				d(() => {
																					ue(X, 'href', `${ct ?? ''}/unit?name=${$() ?? ''}`),
																						c(I, e(m)),
																						c(Le, `T${e(u) ?? ''}`);
																				}),
																				r(R, X);
																		}
																	),
																		a(G),
																		r(O, G);
																},
																Ve = (O) => {
																	var G = Qa();
																	fa(), r(O, G);
																};
															p(q, (O) => {
																typeof S() == 'object' &&
																S() !== null &&
																Object.keys(S()).length > 0
																	? O(ne)
																	: O(Ve, !1);
															});
														}
														r(ie, le);
													},
													Fe = (ie) => {
														var le = Za(),
															q = s(le);
														Oa(q, {
															get data() {
																return S();
															}
														}),
															a(le),
															r(ie, le);
													};
												p(oe, (ie) => {
													j() === 'buildoptions' ? ie(Z) : ie(Fe, !1);
												});
											}
											a(Te), a(re), a(U), d(() => ya(U, e(je))), za(3, U, () => Ca), r(A, U);
										},
										at = (A) => {
											var U = Da(),
												je = s(U);
											{
												var re = (oe) => {
														var Z = te();
														d(() => c(Z, At(e(f), e(y)))), r(oe, Z);
													},
													Te = (oe) => {
														var Z = Me(),
															Fe = Pe(Z);
														{
															var ie = (q) => {
																	var ne = te();
																	const Ve = J(() => {
																		var O,
																			G,
																			R,
																			F,
																			$,
																			X,
																			Y,
																			C,
																			m,
																			u,
																			T,
																			N,
																			z,
																			w,
																			I,
																			Be,
																			Le,
																			L,
																			D,
																			Ke,
																			qe,
																			Ge,
																			ee,
																			de,
																			v,
																			h,
																			K,
																			st,
																			Pt,
																			Xe,
																			rt,
																			zt,
																			ot,
																			it,
																			Ut,
																			Xt;
																		return [
																			(O = e(f)) == null ? void 0 : O.buildcostmetal,
																			(R = (G = e(f)) == null ? void 0 : G[e(y)]) == null
																				? void 0
																				: R.buildcostmetal,
																			(X =
																				($ = (F = e(P)) == null ? void 0 : F.data) == null
																					? void 0
																					: $[e(y)]) == null
																				? void 0
																				: X.buildcostmetal,
																			(u =
																				(m =
																					(C = (Y = e(P)) == null ? void 0 : Y.data) == null
																						? void 0
																						: C[e(y)]) == null
																					? void 0
																					: m[e(y)]) == null
																				? void 0
																				: u.buildcostmetal,
																			(N = (T = e(f)) == null ? void 0 : T.cost) == null
																				? void 0
																				: N.metal,
																			(I =
																				(w = (z = e(f)) == null ? void 0 : z[e(y)]) == null
																					? void 0
																					: w.cost) == null
																				? void 0
																				: I.metal,
																			(D =
																				(L =
																					(Le = (Be = e(P)) == null ? void 0 : Be.data) == null
																						? void 0
																						: Le[e(y)]) == null
																					? void 0
																					: L.cost) == null
																				? void 0
																				: D.metal,
																			(de =
																				(ee =
																					(Ge =
																						(qe = (Ke = e(P)) == null ? void 0 : Ke.data) == null
																							? void 0
																							: qe[e(y)]) == null
																						? void 0
																						: Ge[e(y)]) == null
																					? void 0
																					: ee.cost) == null
																				? void 0
																				: de.metal,
																			(v = e(f)) == null ? void 0 : v.metalcost,
																			(K = (h = e(f)) == null ? void 0 : h[e(y)]) == null
																				? void 0
																				: K.metalcost,
																			(Xe =
																				(Pt = (st = e(P)) == null ? void 0 : st.data) == null
																					? void 0
																					: Pt[e(y)]) == null
																				? void 0
																				: Xe.metalcost,
																			(zt = (rt = e(f)) == null ? void 0 : rt.customparams) == null
																				? void 0
																				: zt.buildcostmetal,
																			(Xt =
																				(Ut =
																					(it = (ot = e(P)) == null ? void 0 : ot.data) == null
																						? void 0
																						: it[e(y)]) == null
																					? void 0
																					: Ut.customparams) == null
																				? void 0
																				: Xt.buildcostmetal
																		];
																	});
																	d(() => c(ne, e(Ve).find((O) => O != null) || 0)), r(q, ne);
																},
																le = (q) => {
																	var ne = Me(),
																		Ve = Pe(ne);
																	{
																		var O = (R) => {
																				var F = Me(),
																					$ = Pe(F);
																				{
																					var X = (C) => {
																							var m = te();
																							d(() =>
																								c(
																									m,
																									`Build Options (${Object.keys(S()).length ?? ''})`
																								)
																							),
																								r(C, m);
																						},
																						Y = (C) => {
																							var m = Me(),
																								u = Pe(m);
																							{
																								var T = (z) => {
																										var w = te();
																										d(() =>
																											c(
																												w,
																												`Weapon Definitions (${Object.keys(S()).length ?? ''})`
																											)
																										),
																											r(z, w);
																									},
																									N = (z) => {
																										var w = Me(),
																											I = Pe(w);
																										{
																											var Be = (L) => {
																													var D = te();
																													d(() =>
																														c(
																															D,
																															`Weapons (${Object.keys(S()).length ?? ''})`
																														)
																													),
																														r(L, D);
																												},
																												Le = (L) => {
																													var D = Me(),
																														Ke = Pe(D);
																													{
																														var qe = (ee) => {
																																var de = te();
																																d(() =>
																																	c(
																																		de,
																																		`Custom Parameters (${Object.keys(S()).length ?? ''})`
																																	)
																																),
																																	r(ee, de);
																															},
																															Ge = (ee) => {
																																var de = te();
																																const v = J(() => nt(j()) ?? ''),
																																	h = J(
																																		() =>
																																			Object.keys(S()).length ?? ''
																																	);
																																d(() => c(de, `${e(v)} (${e(h)})`)),
																																	r(ee, de);
																															};
																														p(
																															Ke,
																															(ee) => {
																																j() === 'customparams'
																																	? ee(qe)
																																	: ee(Ge, !1);
																															},
																															!0
																														);
																													}
																													r(L, D);
																												};
																											p(
																												I,
																												(L) => {
																													j() === 'weapons' ? L(Be) : L(Le, !1);
																												},
																												!0
																											);
																										}
																										r(z, w);
																									};
																								p(
																									u,
																									(z) => {
																										j() === 'weapondefs' ? z(T) : z(N, !1);
																									},
																									!0
																								);
																							}
																							r(C, m);
																						};
																					p($, (C) => {
																						j() === 'buildoptions' ? C(X) : C(Y, !1);
																					});
																				}
																				r(R, F);
																			},
																			G = (R) => {
																				var F = te();
																				d(() => c(F, dt(S(), j()))), r(R, F);
																			};
																		p(
																			Ve,
																			(R) => {
																				Vt(S()) ? R(O) : R(G, !1);
																			},
																			!0
																		);
																	}
																	r(q, ne);
																};
															p(
																Fe,
																(q) => {
																	j() === 'buildcostmetal' ? q(ie) : q(le, !1);
																},
																!0
															);
														}
														r(oe, Z);
													};
												p(je, (oe) => {
													j() === 'maxdamage' || j() === 'health' ? oe(re) : oe(Te, !1);
												});
											}
											a(U), r(A, U);
										};
									p(tt, (A) => {
										Vt(S()) && e(ve).has(j()) ? A(Se) : A(at, !1);
									});
								}
								a(et), r(De, et);
							}
						),
							a(Ne);
						var Ht = o(Ne, 2);
						{
							var ca = (De) => {
								var We = ls(),
									j = s(We),
									S = o(s(j), 2);
								{
									var et = (Q) => {
										var M = ts();
										const ke = J(Lt);
										var be = s(M),
											tt = s(be);
										a(be);
										var Se = o(be, 2),
											at = s(Se);
										a(Se),
											a(M),
											d(() => {
												c(tt, `Total DPS: ${e(ke).totalDps ?? ''}`),
													c(at, `Max Range: ${e(ke).maxRange ?? ''}`);
											}),
											r(Q, M);
									};
									p(S, (Q) => {
										Lt() && Q(et);
									});
								}
								a(j);
								var Ae = o(j, 2);
								lt(
									Ae,
									5,
									() => e(Ye),
									(Q) => Q.originalDefKey,
									(Q, M) => {
										var ke = is(),
											be = s(ke),
											tt = s(be, !0);
										d(() => c(tt, nt(e(M).name))), a(be);
										var Se = o(be, 2);
										{
											var at = (m) => {
												var u = as();
												r(m, u);
											};
											p(Se, (m) => {
												e(M).isEMP && m(at);
											});
										}
										var A = o(Se, 2);
										{
											var U = (m) => {
												var u = ss();
												r(m, u);
											};
											p(A, (m) => {
												e(M).isNotFlame && m(U);
											});
										}
										var je = o(A, 2),
											re = s(je),
											Te = o(s(re), 2),
											oe = s(Te, !0);
										a(Te), a(re);
										var Z = o(re, 2),
											Fe = o(s(Z), 2),
											ie = s(Fe);
										{
											var le = (m) => {
													var u = te('N/A (EMP)');
													r(m, u);
												},
												q = (m) => {
													var u = Me(),
														T = Pe(u);
													{
														var N = (w) => {
																var I = te('N/A (Special)');
																r(w, I);
															},
															z = (w) => {
																var I = te();
																d(() => c(I, e(M).dps)), r(w, I);
															};
														p(
															T,
															(w) => {
																e(M).isNotFlame ? w(N) : w(z, !1);
															},
															!0
														);
													}
													r(m, u);
												};
											p(ie, (m) => {
												e(M).isEMP ? m(le) : m(q, !1);
											});
										}
										a(Fe), a(Z);
										var ne = o(Z, 2);
										{
											var Ve = (m) => {
												var u = rs(),
													T = s(u),
													N = s(T, !0);
												d(() => c(N, nt('paralyzemultiplier'))), a(T);
												var z = o(T, 2),
													w = s(z);
												a(z), a(u), d(() => c(w, `x${e(M).paralyzeMultiplier ?? ''}`)), r(m, u);
											};
											p(ne, (m) => {
												e(M).isEMP && m(Ve);
											});
										}
										var O = o(ne, 2);
										{
											var G = (m) => {
												var u = os(),
													T = o(s(u), 2),
													N = s(T);
												a(T), a(u), d(() => c(N, `x${e(M).burstCount ?? ''}`)), r(m, u);
											};
											p(O, (m) => {
												e(M).burstCount > 1 && m(G);
											});
										}
										var R = o(O, 2),
											F = o(s(R), 2),
											$ = s(F, !0);
										a(F), a(R);
										var X = o(R, 2),
											Y = o(s(X), 2),
											C = s(Y);
										a(Y),
											a(X),
											a(je),
											a(ke),
											d(() => {
												c(oe, e(M).damage), c($, e(M).range), c(C, `${e(M).reloadTime ?? ''}s`);
											}),
											r(Q, ke);
									}
								),
									a(Ae),
									a(We),
									r(De, We);
							};
							p(Ht, (De) => {
								x() === 'combat' && e(he).length > 0 && De(ca);
							});
						}
						a(xe), d(() => c(Rt, x())), r(n, xe);
					}
				);
				var jt = o(Ze, 2);
				{
					var Mt = (n) => {
						var l = cs(),
							x = o(s(l), 2);
						lt(
							x,
							5,
							() => Object.entries(e(f).customparams),
							Ct,
							(ye, xe) => {
								let _e = () => e(xe)[0],
									we = () => e(xe)[1];
								var Ie = ds(),
									$e = s(Ie),
									Rt = s($e, !0);
								d(() => c(Rt, nt(_e()))), a($e);
								var Ne = o($e, 2),
									Ht = s(Ne, !0);
								d(() => c(Ht, dt(we(), _e()))), a(Ne), a(Ie), r(ye, Ie);
							}
						),
							a(x),
							a(l),
							r(n, l);
					};
					p(jt, (n) => {
						e(f).customparams && n(Mt);
					});
				}
				a(i),
					d(() => {
						c(se, e(pt)),
							c(Oe, e(P).faction === 'arm' ? 'Armada' : 'Cortex'),
							c(Ce, e(P).type),
							c(xt, `Tech ${e(P).tech_level ?? ''}`);
					}),
					r(t, i);
			},
			da = (t) => {
				var i = ms();
				r(t, i);
			};
		p(la, (t) => {
			e(P) && e(f) ? t(na) : t(da, !1);
		});
	}
	a(Gt), a(Bt), r(ze, Bt), pa();
}
export { Us as component };
