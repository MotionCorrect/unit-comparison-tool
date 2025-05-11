import { a as i, t as v, c as at, n as Bt, b as rt } from '../chunks/disclose-version.D6IHqBz7.js';
import '../chunks/legacy.BC6soP9j.js';
import {
	aD as Ia,
	h as Ca,
	X as ja,
	W as Sa,
	V as Na,
	p as Da,
	l as It,
	a as er,
	t as u,
	b as tr,
	d as A,
	g as e,
	m as q,
	c as s,
	s as l,
	r,
	n as ar,
	a7 as Ne,
	aE as He,
	a5 as xa,
	a6 as qe
} from '../chunks/runtime.B6PTYWss.js';
import { s as _ } from '../chunks/render.DTXsa5-Z.js';
import { i as M } from '../chunks/if.Bxm8qDEX.js';
import { e as K, i as ie } from '../chunks/each.Bw4TUKtu.js';
import {
	N as rr,
	l as sr,
	r as Dt,
	u as lr,
	a as or,
	d as ir,
	s as ce,
	c as he,
	b as nr,
	h as Ot
} from '../chunks/Navbar.Cu8EIbEp.js';
import { l as sa, e as Ue } from '../chunks/events.CuhszENT.js';
import {
	g as Mt,
	I as dr,
	t as cr,
	p as ha,
	b as ya,
	i as wa,
	a as ea,
	f as ka,
	c as vr,
	R as pr
} from '../chunks/dpsCalculations.BjJuydXE.js';
import { i as mr } from '../chunks/props.CjMNljKH.js';
import { i as ur } from '../chunks/lifecycle.ZI99Jbm1.js';
import { s as gr, a as ta } from '../chunks/store.CxMiR7dL.js';
import { o as fr } from '../chunks/index-client.BbMgc3IQ.js';
import { b as Rt } from '../chunks/paths.CC_1dxGD.js';
function Ma(d, $, W = $) {
	var N = Ia();
	sa(d, 'input', (B) => {
		var X = B ? d.defaultValue : d.value;
		if (((X = aa(d) ? ra(X) : X), W(X), N && X !== (X = $()))) {
			var st = d.selectionStart,
				se = d.selectionEnd;
			(d.value = X ?? ''),
				se !== null && ((d.selectionStart = st), (d.selectionEnd = Math.min(se, d.value.length)));
		}
	}),
		((Ca && d.defaultValue !== d.value) || (ja($) == null && d.value)) &&
			W(aa(d) ? ra(d.value) : d.value),
		Sa(() => {
			var B = $();
			(aa(d) && B === ra(d.value)) ||
				(d.type === 'date' && !B && !d.value) ||
				(B !== d.value && (d.value = B ?? ''));
		});
}
function br(d, $, W = $) {
	sa(d, 'change', (N) => {
		var B = N ? d.defaultChecked : d.checked;
		W(B);
	}),
		((Ca && d.defaultChecked !== d.checked) || ja($) == null) && W(d.checked),
		Sa(() => {
			var N = $();
			d.checked = !!N;
		});
}
function aa(d) {
	var $ = d.type;
	return $ === 'number' || $ === 'range';
}
function ra(d) {
	return d === '' ? null : +d;
}
function Ua(d, $, W) {
	if (d.multiple) return xr(d, $);
	for (var N of d.options) {
		var B = Tt(N);
		if (mr(B, $)) {
			N.selected = !0;
			return;
		}
	}
	(!W || $ !== void 0) && (d.selectedIndex = -1);
}
function _r(d, $) {
	Na(() => {
		var W = new MutationObserver(() => {
			var N = d.__value;
			Ua(d, N);
		});
		return (
			W.observe(d, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ['value'] }),
			() => {
				W.disconnect();
			}
		);
	});
}
function ft(d, $, W = $) {
	var N = !0;
	sa(d, 'change', (B) => {
		var X = B ? '[selected]' : ':checked',
			st;
		if (d.multiple) st = [].map.call(d.querySelectorAll(X), Tt);
		else {
			var se = d.querySelector(X) ?? d.querySelector('option:not([disabled])');
			st = se && Tt(se);
		}
		W(st);
	}),
		Na(() => {
			var B = $();
			if ((Ua(d, B, N), N && B === void 0)) {
				var X = d.querySelector(':checked');
				X !== null && ((B = Tt(X)), W(B));
			}
			(d.__value = B), (N = !1);
		}),
		_r(d);
}
function xr(d, $) {
	for (var W of d.options) W.selected = ~$.indexOf(Tt(W));
}
function Tt(d) {
	return '__value' in d ? d.__value : d.value;
}
var hr = v('<option> </option>'),
	yr = v('<option> </option>'),
	wr = v('<option> </option>'),
	kr = v('<optgroup></optgroup>'),
	Mr = v(
		'<div class="flex items-center gap-3"><select class="rounded-lg bg-gray-900 px-3 py-2 text-gray-200"><option>Select field...</option><!></select> <select class="rounded-lg bg-gray-900 px-3 py-2 text-gray-200"><option>greater than</option><option>less than</option><option>=</option></select> <input type="number" class="rounded-lg bg-gray-900 px-3 py-2 text-gray-200" placeholder="Value"> <button aria-label="Remove filter" class="text-gray-400 hover:text-red-400"><svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>'
	),
	Cr = v('<div class="space-y-3"></div>'),
	jr = v(
		'<label class="flex items-center gap-2 rounded-lg bg-gray-900/50 px-3 py-2"><input type="checkbox" class="rounded border-gray-600 bg-gray-800 text-teal-500 focus:ring-teal-500"> <span class="text-sm text-gray-300"> </span></label>'
	),
	Sr = Bt(
		'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9L4 4m0 0l5 0m-5 0l0 5M9 15l-5 5m0 0l5 0m-5 0l0 -5M15 9l5 -5m0 0l-5 0m5 0l0 5M15 15l5 5m0 0l-5 0m5 0l0 -5"></path>'
	),
	Nr = Bt(
		'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5h-4m4 0v-4m0 4l-5-5"></path>'
	),
	Ur = Bt(
		'<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>'
	),
	Pr = v('<th><div class="flex items-center gap-1"> <!></div></th>'),
	zr = v('<img class="max-h-full max-w-full object-contain" loading="lazy">'),
	Ar = v('<span class="text-xs text-gray-500">?</span>'),
	Rr = v(
		'<div class="h-8 w-8 flex-shrink-0"><img class="max-h-full max-w-full object-contain" loading="lazy"></div>'
	),
	Tr = Bt(
		'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>'
	),
	Br = Bt(
		'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>'
	),
	Er = v('<span class="rounded-full bg-pink-500/20 px-2 py-0.5 text-xs text-pink-400"> </span>'),
	Vr = v('<span class="rounded-full bg-red-500/20 px-2 py-0.5 text-xs text-red-400"> </span>'),
	$r = v('<td class="p-3 text-right text-gray-300"> </td>'),
	Or = v(
		'<tr class="border-b border-gray-800/50 hover:bg-gray-800/30"><td class="sticky left-0 z-10 bg-gray-900 p-3"><div class="flex min-w-[300px] items-center gap-3"><div class="flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded bg-gray-800/50"><!></div> <!> <div class="flex flex-grow items-center justify-between"><div class="flex items-center gap-2"><button><span><svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><!></svg></span> <span class="opacity-70 group-hover:opacity-100"> </span></button> <a class="text-teal-400 hover:underline"> </a></div> <div class="flex h-6 items-center gap-2"><span class="rounded-full bg-teal-500/20 px-2 py-0.5 text-teal-400"> </span> <span class="rounded-full bg-purple-500/20 px-2 py-0.5 text-xs text-purple-400"> </span> <!> <span class="rounded-full bg-blue-500/20 px-2 py-0.5 text-xs text-blue-400"> </span> <!></div></div></div></td><!></tr>'
	),
	Fr = v(
		'<div><div class="table-controls mb-2 flex justify-end svelte-dsi7k9"><button class="flex items-center gap-2 rounded-lg bg-gray-800/80 px-3 py-1.5 text-sm text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"><svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><!></svg> </button></div> <div id="browse-table-container"><table class="relative w-full"><thead><tr class="sticky top-0 z-20 border-b border-gray-700 bg-gray-900/95 backdrop-blur-sm"></tr></thead><tbody class="divide-y divide-gray-800/50"></tbody></table></div></div>'
	),
	Lr = v('<div class="py-12 text-center text-gray-400">Loading unit data and icons...</div>'),
	Hr = v(
		'<div class="rounded-lg bg-gray-800/50 p-6"><div class="mb-6"><div class="relative"><input type="text" placeholder="Search units..." class="w-full rounded-lg bg-gray-900 py-2 pl-10 pr-4 text-gray-200 placeholder-gray-500"> <svg class="absolute left-3 top-2.5 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div></div> <div class="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"><div class="space-y-2"><label for="tech-level" class="text-sm text-gray-400">Tech Level</label> <select id="tech-level" class="w-full rounded-lg bg-gray-900 px-3 py-2 text-gray-200"><option>All Tech Levels</option><option>Tech 1</option><option>Tech 2</option></select></div> <div class="space-y-2"><label for="unit-type" class="text-sm text-gray-400">Unit Type</label> <select id="unit-type" class="w-full rounded-lg bg-gray-900 px-3 py-2 text-gray-200"><option>All Types</option><!></select></div> <div class="space-y-2"><label for="sub-type" class="text-sm text-gray-400">Sub Type</label> <select id="sub-type" class="w-full rounded-lg bg-gray-900 px-3 py-2 text-gray-200"><option>All Sub Types</option><!></select></div> <div class="space-y-2"><label for="faction" class="text-sm text-gray-400">Faction</label> <select id="faction" class="w-full rounded-lg bg-gray-900 px-3 py-2 text-gray-200"><option>All Factions</option><option>Armada</option><option>Cortex</option></select></div></div> <div class="mb-6"><div class="mb-4 flex items-center justify-between"><h3 class="text-sm font-medium text-gray-300">Custom Filters</h3> <button class="flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300"><svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg> Add Filter</button></div> <!></div> <div class="mb-6"><div class="mb-4 flex items-center justify-between"><h3 class="text-sm font-medium text-gray-300">Visible Columns</h3> <button class="flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300"><svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg> Add Column</button></div> <div class="flex flex-wrap gap-2"></div></div>  <!></div>'
	),
	qr = v(
		'<button class="text-gray-400 transition-colors hover:text-red-400" aria-label="Remove unit slot"><svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>'
	),
	Wr = v('<option class="flex items-center gap-2"> </option>'),
	Jr = v(
		'<div class="min-w-[250px] max-w-[300px] flex-1 rounded-lg bg-gray-800/50 p-4"><div class="mb-4 flex items-center justify-between"><h3 class="font-medium text-white"></h3> <!></div> <select class="w-full rounded-lg border border-gray-600/50 bg-gray-700/50 px-3 py-2 text-white"><option>Select a unit...</option><!></select></div>'
	),
	Xr = v('<img class="max-h-full max-w-full object-contain" loading="lazy">'),
	Yr = v('<span class="text-xs text-gray-500">?</span>'),
	Gr = v(
		'<div class="mx-auto h-6 w-6"><img class="max-h-full max-w-full object-contain" loading="lazy"></div>'
	),
	Qr = v('<span class="rounded-full bg-pink-500/20 px-2 py-0.5 text-pink-400"> </span>'),
	Kr = v('<span class="rounded-full bg-red-500/20 px-2 py-0.5 text-red-400"> </span>'),
	Zr = v(
		'<div class="flex flex-col items-center gap-3"><div class="flex h-16 w-16 items-center justify-center overflow-hidden rounded bg-gray-700/50"><!></div> <div class="space-y-1 text-center"><a class="inline-block font-medium text-white transition-colors hover:text-teal-400"> </a> <!> <div class="flex justify-center gap-2 text-sm"><span class="rounded-full bg-teal-500/20 px-2 py-0.5 text-teal-400"> </span> <span class="rounded-full bg-purple-500/20 px-2 py-0.5 text-purple-400"> </span> <!> <span class="rounded-full bg-blue-500/20 px-2 py-0.5 text-blue-400"> </span> <!></div></div></div>'
	),
	Ir = v('<span class="text-gray-500">No unit selected</span>'),
	Dr = v('<th><!></th>'),
	es = v(
		'<div class="flex justify-center gap-2 text-sm"><span class="rounded-full bg-red-500/20 px-2 py-0.5 text-red-400"> </span> <span class="rounded-full bg-blue-500/20 px-2 py-0.5 text-blue-400"> </span></div>'
	),
	ts = v(
		'<span class="ml-1 rounded-full bg-yellow-500/20 px-2 py-0.5 text-xs font-medium text-yellow-400">EMP</span>'
	),
	as = v(
		'<span class="ml-1 rounded-full bg-orange-500/20 px-2 py-0.5 text-xs font-medium text-orange-400">Special</span>'
	),
	rs = v(
		'<div class="flex justify-between"><span class="text-gray-400"> </span> <span class="font-medium text-yellow-400"> </span></div> <div class="flex justify-between"><span class="text-gray-400">Paralyze DPS</span> <span class="font-medium text-yellow-400"> </span></div>',
		1
	),
	ss = v(
		'<div class="flex justify-between"><span class="text-gray-400">Burst</span> <span class="font-medium text-green-400"> </span></div>'
	),
	ls = v(
		'<div class="rounded-lg border border-gray-700/30 bg-gray-900/50 p-3"><div class="mb-2 font-medium text-gray-300"> <!> <!></div> <div class="grid grid-cols-2 gap-2 text-sm"><div class="flex justify-between"><span class="text-gray-400">Damage</span> <span class="font-medium text-red-400"> </span></div> <div class="flex justify-between"><span class="text-gray-400">DPS</span> <span class="font-medium text-orange-400"><!></span></div> <!> <!> <div class="flex justify-between"><span class="text-gray-400">Range</span> <span class="font-medium text-blue-400"> </span></div> <div class="flex justify-between"><span class="text-gray-400">Reload</span> <span class="font-medium text-purple-400"> </span></div></div></div>'
	),
	os = v('<!> <div class="mt-4 space-y-3"></div>', 1),
	is = v(
		'<div class="flex items-center justify-center rounded-lg border border-gray-700/30 bg-gray-900/50 p-4"><span class="text-sm text-gray-500">No weapons</span></div>'
	),
	ns = v(
		'<td class="p-4 align-top"><div class="top-0 rounded-lg bg-gray-800/50 p-4"><!></div></td>'
	),
	ds = v('<tr><td class="left-0 bg-gray-900/95 p-4"></td><!></tr>'),
	cs = v('<span class="text-gray-500">—</span>'),
	vs = v(
		'<div class="bg-gray-850/50 space-y-1 overflow-y-auto rounded-md p-2" style="max-height: 32rem;"><!></div> <button class="mt-2 text-xs text-teal-400 hover:text-teal-300">Collapse</button>',
		1
	),
	ps = v('<button class="text-sm text-teal-400 hover:text-teal-300"><!></button>'),
	ms = v('<td><!></td>'),
	us = v(
		'<tr class="transition-colors hover:bg-gray-800/30"><td class="sticky left-0 z-10 p-4 pl-8 text-gray-400" style="background: linear-gradient(to right, rgb(17 24 39 / 0.95), rgb(17 24 39 / 0.95)) padding-box, rgb(55 65 81 / 0.5) border-box; border-right: 2px solid transparent; backdrop-filter: blur(4px);"> </td><!></tr>'
	),
	gs = v(
		'<tr><td class="sticky left-0 p-4 font-medium text-teal-400"><div class="flex items-center gap-2"><div></div> <div class="relative flex items-center gap-2"><svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg> <span class="capitalize"> </span></div></div></td></tr> <!> <!>',
		1
	),
	fs = v(
		'<div class="relative overflow-auto" style="max-height: calc(100vh - 250px);" role="region"><table class="relative w-full border-collapse"><thead><tr class="sticky top-0 z-20"><th class="sticky left-0 z-30 w-1/4 min-w-[200px] rounded-tl-lg bg-gray-800/95 p-4 text-left backdrop-blur-sm">Property</th><!></tr></thead><tbody class="divide-y divide-gray-800/50"></tbody></table></div>'
	),
	bs = v(
		'<div class="py-12 text-center text-gray-400">Select units to compare their properties</div>'
	),
	_s = v(
		'<div class="rounded-lg bg-gray-900 shadow-xl"><header class="mb-8 text-center"><h1 class="mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-4xl font-bold text-transparent">Unit Comparison</h1> <p class="mx-auto max-w-2xl text-gray-400">Compare multiple units side by side. Add or remove units using the controls below.</p></header> <div class="mb-8"><div class="flex flex-wrap items-start gap-4"><!> <button class="flex items-center gap-2 rounded-lg bg-teal-600/20 px-4 py-2 text-teal-400 transition-colors hover:bg-teal-600/30"><svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg> Add Unit</button></div></div> <!></div>'
	),
	xs = v('<div class="py-12 text-center text-gray-400">Loading unit data and icons...</div>'),
	hs = v('<div> </div>'),
	ys = v(
		'<div class="min-h-screen bg-gray-900 text-gray-100"><!> <div class="container mx-auto max-w-7xl px-4 py-8"><div class="mb-12 grid gap-8 md:grid-cols-2"><div><div class="mb-4 flex items-center gap-3"><svg class="h-6 w-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> <h2 class="text-xl font-semibold text-teal-300">Browse Mode</h2></div> <ul class="ml-4 space-y-2 text-gray-300"><li>• Filter units by type, faction, and tech level</li> <li>• Add custom filters for specific unit properties</li> <li>• Sort columns by clicking column headers</li> <li>• Customize visible columns using the column manager</li> <li>• Click unit names to view detailed information</li></ul></div> <div><div class="mb-4 flex items-center gap-3"><svg class="h-6 w-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg> <h2 class="text-xl font-semibold text-teal-300">Compare Mode</h2></div> <ul class="ml-4 space-y-2 text-gray-300"><li>• Select multiple units to compare side by side</li> <li>• Add or remove unit slots as needed</li> <li>• Properties are grouped by category</li> <li>• Different values are highlighted for easy comparison</li> <li>• Expand object properties to see detailed information</li></ul></div></div> <div class="mb-8 flex justify-center gap-4"><button>Browse Units</button> <button>Compare Units</button></div> <!></div> <div class="fixed bottom-4 right-4 z-50 flex flex-col gap-2"></div> <!></div>'
	);
function Es(d, $) {
	Da($, !1);
	const W = gr(),
		N = () => ta(lr, '$unitsData', W),
		B = () => ta(or, '$unitNamesDetails', W),
		X = () => ta(ir, '$unitIconMap', W),
		st = q(),
		se = q();
	let dt = q('browse'),
		ve = q([
			{ id: 'unit', name: 'Unit', visible: !0 },
			{ id: 'type', name: 'Type', visible: !0 },
			{ id: 'subtype', name: 'Subtype', visible: !1 },
			{ id: 'faction', name: 'Faction', visible: !1 },
			{ id: 'tech', name: 'Tech Level', visible: !1 },
			{ id: 'health', name: 'Health', visible: !0 },
			{ id: 'sightDistance', name: 'Sight Range', visible: !0 },
			{ id: 'maxRange', name: 'Weapon Range', visible: !0 },
			{ id: 'dps', name: 'DPS', visible: !0 },
			{ id: 'buildcostmetal', name: 'Metal Cost', visible: !0 }
		]),
		Et = q(''),
		Ct = q('all'),
		ct = q('all'),
		jt = q('all'),
		St = q('all'),
		ye = q([]),
		Nt = q('name'),
		Ut = q('asc'),
		j = q(['', '']),
		Vt = q(!1),
		Ft = q([]),
		bt = q(new Set());
	const la = [
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
		Lt = [
			'health',
			'maxdamage',
			'damagemodifier',
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
		Ht = [
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
		qt = [
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
			'turret',
			'maxRange',
			'dps'
		],
		Wt = [
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
		$t = [
			{ category: 'Stats', fields: [...Lt.map((t) => ({ id: t, name: Mt(t), type: 'number' }))] },
			{
				category: 'Combat',
				fields: [
					...qt.map((t) => ({
						id: t,
						name: Mt(t),
						type: [
							'maxRange',
							'dps',
							'sightdistance',
							'airsightdistance',
							'radardistance',
							'sonardistance',
							'cloakcost',
							'cloakcostmoving'
						].includes(t)
							? 'number'
							: 'other'
					}))
				]
			},
			{
				category: 'Movement',
				fields: [...Ht.map((t) => ({ id: t, name: Mt(t), type: 'number' }))]
			},
			{
				category: 'Resources',
				fields: [...Wt.map((t) => ({ id: t, name: Mt(t), type: 'number' }))]
			}
		];
	function Pa() {
		A(j, [...e(j), '']);
	}
	function za(t) {
		A(
			j,
			e(j).filter((a, o) => o !== t)
		);
	}
	function Aa(t) {
		const a = new Set();
		t.forEach((n) => {
			var g, P;
			if (!n) return;
			const y = (g = N()) == null ? void 0 : g[n];
			(P = y == null ? void 0 : y.data) != null &&
				P[n] &&
				Object.keys(y.data[n]).forEach((F) => a.add(F));
		});
		const o = Array.from(a),
			c = (n) =>
				e(se).reduce(
					(y, g) =>
						y +
						((g == null ? void 0 : g[n]) !== void 0 && (g == null ? void 0 : g[n]) !== null
							? 1
							: 0),
					0
				),
			f = (n) =>
				[
					...n.filter(
						(g) =>
							g !== 'data' &&
							g !== 'id' &&
							g !== 'isSuicideUnit' &&
							g !== 'isMineUnit' &&
							g !== 'weapons' &&
							g !== 'combatStats'
					)
				].sort((g, P) => c(P) - c(g));
		return {
			general: f(o.filter((n) => la.includes(n))),
			stats: f(o.filter((n) => Lt.includes(n))),
			movement: f(o.filter((n) => Ht.includes(n))),
			combat: f(o.filter((n) => qt.includes(n))),
			resources: f(o.filter((n) => Wt.includes(n))),
			custom: f(
				o.filter(
					(n) =>
						!la.includes(n) &&
						!Lt.includes(n) &&
						!Ht.includes(n) &&
						!qt.includes(n) &&
						!Wt.includes(n) &&
						n !== 'data' &&
						n !== 'id' &&
						n !== 'isSuicideUnit' &&
						n !== 'isMineUnit' &&
						n !== 'weapons' &&
						n !== 'combatStats'
				)
			)
		};
	}
	function oa(t) {
		e(bt).has(t) ? e(bt).delete(t) : e(bt).add(t), A(bt, e(bt));
	}
	fr(async () => {
		await sr(),
			N() &&
				B() &&
				(A(
					Ft,
					Object.entries(N())
						.map(([t, a]) => ({
							id: t,
							name: B().units.names[t] || t,
							faction: a.faction,
							type: a.type,
							subtype: a.subtype,
							tech: a.tech_level
						}))
						.filter((t) => t.type && t.type !== 'other')
						.sort((t, a) => t.name.localeCompare(a.name))
				),
				A(Vt, !0));
	});
	let vt = q(!1);
	function Ra() {
		A(vt, !e(vt));
	}
	function ia(t) {
		const a = {
			general: 'bg-blue-900/20 border-l-4 border-blue-500/50',
			stats: 'bg-green-900/20 border-l-4 border-green-500/50',
			movement: 'bg-yellow-900/20 border-l-4 border-yellow-500/50',
			combat: 'bg-red-900/20 border-l-4 border-red-500/50',
			resources: 'bg-purple-900/20 border-l-4 border-purple-500/50',
			custom: 'bg-gray-800/30 border-l-4 border-gray-500/50'
		};
		return a[t] || a.custom;
	}
	function na(t) {
		const a = {
			general: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0114 0z',
			stats:
				'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
			movement:
				'M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z',
			combat:
				'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064',
			resources:
				'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
			custom:
				'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
		};
		return a[t] || a.custom;
	}
	function da(t, a) {
		var c,
			f,
			n,
			y,
			g,
			P,
			F,
			Pe,
			we,
			ke,
			pe,
			J,
			O,
			Z,
			le,
			Ee,
			We,
			Ve,
			ze,
			z,
			I,
			oe,
			Y,
			L,
			me,
			Q,
			D,
			ue,
			Ze,
			Me,
			Ie,
			De,
			lt,
			C,
			w,
			E;
		return (
			[
				t == null ? void 0 : t.buildcostmetal,
				(c = t == null ? void 0 : t[a]) == null ? void 0 : c.buildcostmetal,
				(f = t == null ? void 0 : t.cost) == null ? void 0 : f.metal,
				(y = (n = t == null ? void 0 : t[a]) == null ? void 0 : n.cost) == null ? void 0 : y.metal,
				t == null ? void 0 : t.metalcost,
				(g = t == null ? void 0 : t[a]) == null ? void 0 : g.metalcost,
				(P = t == null ? void 0 : t.customparams) == null ? void 0 : P.buildcostmetal,
				(Pe = (F = t == null ? void 0 : t[a]) == null ? void 0 : F.customparams) == null
					? void 0
					: Pe.buildcostmetal,
				(ke = (we = t == null ? void 0 : t.data) == null ? void 0 : we[a]) == null
					? void 0
					: ke.buildcostmetal,
				(O =
					(J = (pe = t == null ? void 0 : t.data) == null ? void 0 : pe[a]) == null
						? void 0
						: J.cost) == null
					? void 0
					: O.metal,
				(le = (Z = t == null ? void 0 : t.data) == null ? void 0 : Z[a]) == null
					? void 0
					: le.metalcost,
				(Ve =
					(We = (Ee = t == null ? void 0 : t.data) == null ? void 0 : Ee[a]) == null
						? void 0
						: We.customparams) == null
					? void 0
					: Ve.buildcostmetal,
				(oe =
					(I = (z = (ze = N()) == null ? void 0 : ze[a]) == null ? void 0 : z.data) == null
						? void 0
						: I[a]) == null
					? void 0
					: oe.buildcostmetal,
				(D =
					(Q =
						(me = (L = (Y = N()) == null ? void 0 : Y[a]) == null ? void 0 : L.data) == null
							? void 0
							: me[a]) == null
						? void 0
						: Q.cost) == null
					? void 0
					: D.metal,
				(Ie =
					(Me = (Ze = (ue = N()) == null ? void 0 : ue[a]) == null ? void 0 : Ze.data) == null
						? void 0
						: Me[a]) == null
					? void 0
					: Ie.metalcost,
				(E =
					(w =
						(C = (lt = (De = N()) == null ? void 0 : De[a]) == null ? void 0 : lt.data) == null
							? void 0
							: C[a]) == null
						? void 0
						: w.customparams) == null
					? void 0
					: E.buildcostmetal
			].find((U) => U != null) || 0
		);
	}
	function ca(t, a) {
		var c, f, n, y, g, P, F, Pe, we, ke, pe, J, O, Z;
		return (
			[
				t == null ? void 0 : t.maxdamage,
				t == null ? void 0 : t.health,
				(c = t == null ? void 0 : t[a]) == null ? void 0 : c.maxdamage,
				(f = t == null ? void 0 : t[a]) == null ? void 0 : f.health,
				(y = (n = t == null ? void 0 : t.data) == null ? void 0 : n[a]) == null
					? void 0
					: y.maxdamage,
				(P = (g = t == null ? void 0 : t.data) == null ? void 0 : g[a]) == null ? void 0 : P.health,
				(ke =
					(we = (Pe = (F = N()) == null ? void 0 : F[a]) == null ? void 0 : Pe.data) == null
						? void 0
						: we[a]) == null
					? void 0
					: ke.maxdamage,
				(Z =
					(O = (J = (pe = N()) == null ? void 0 : pe[a]) == null ? void 0 : J.data) == null
						? void 0
						: O[a]) == null
					? void 0
					: Z.health
			].find((le) => le !== void 0) || 0
		);
	}
	function Ta() {
		if (!e(Vt) || !N() || !B()) return [];
		let t = Object.entries(N())
			.filter(([a, o]) => o.type && o.type !== 'other')
			.map(([a, o]) => {
				var pe;
				const c = ((pe = o.data) == null ? void 0 : pe[a]) || {},
					f = ha(c == null ? void 0 : c.weapondefs),
					n = ya(f, c, a),
					y = Number(ca(c, a)),
					g = Number(da(c, a)),
					P = Number((c == null ? void 0 : c.buildcostenergy) || 0),
					F = Number((c == null ? void 0 : c.buildtime) || 0),
					Pe = Number((c == null ? void 0 : c.sightdistance) || 0),
					we = Number((n == null ? void 0 : n.maxRange) || 0),
					ke = Number((n == null ? void 0 : n.totalDps) || 0);
				return {
					id: a,
					name: B().units.names[a] || a,
					type: o.type,
					subtype: o.subtype,
					tech: o.tech_level,
					faction: o.faction,
					health: y,
					sightDistance: Pe,
					maxRange: we,
					dps: ke,
					buildcostmetal: g,
					buildcostenergy: P,
					buildtime: F,
					isSuicideUnit: wa(c),
					isMineUnit: ea(c),
					data: c,
					...Object.fromEntries(
						Object.entries(c)
							.filter(
								([J]) =>
									![
										'maxdamage',
										'health',
										'buildcostmetal',
										'buildcostenergy',
										'buildtime',
										'sightdistance',
										'weapondefs',
										'dps',
										'maxRange'
									].includes(J)
							)
							.map(([J, O]) => [J, typeof O == 'object' ? JSON.stringify(O) : O])
					)
				};
			});
		return (
			e(Et) && (t = t.filter((a) => a.name.toLowerCase().includes(e(Et).toLowerCase()))),
			e(Ct) !== 'all' && (t = t.filter((a) => a.tech === parseInt(e(Ct)))),
			e(ct) !== 'all' && (t = t.filter((a) => a.type === e(ct))),
			e(jt) !== 'all' && (t = t.filter((a) => a.subtype === e(jt))),
			e(St) !== 'all' && (t = t.filter((a) => a.faction === e(St))),
			e(ye).forEach((a) => {
				a.field &&
					a.value !== '' &&
					(t = t.filter((o) => {
						const c = o[a.field],
							f = parseFloat(a.value);
						return typeof c != 'number' || isNaN(c) || isNaN(f)
							? !1
							: a.operator === '>'
								? c > f
								: a.operator === '<'
									? c < f
									: a.operator === '='
										? c === f
										: !1;
					}));
			}),
			t.sort((a, o) => {
				const c = a[e(Nt)],
					f = o[e(Nt)];
				let n = 0;
				const y = parseFloat(c),
					g = parseFloat(f);
				if (!isNaN(y) && !isNaN(g)) n = y - g;
				else {
					const P = String(c ?? ''),
						F = String(f ?? '');
					n = P.localeCompare(F);
				}
				return e(Ut) === 'asc' ? n : -n;
			})
		);
	}
	function Ba() {
		return N() ? [...new Set(Object.values(N()).map((t) => t.type))].filter(Boolean).sort() : [];
	}
	function Ea() {
		if (!N()) return [];
		const a = Object.values(N())
			.filter((o) => e(ct) === 'all' || o.type === e(ct))
			.map((o) => o.subtype);
		return [...new Set(a)].filter(Boolean).sort();
	}
	function Va() {
		A(ye, [...e(ye), { field: '', operator: '>', value: '' }]);
	}
	function $a(t) {
		A(
			ye,
			e(ye).filter((a, o) => o !== t)
		);
	}
	function Oa(t) {
		const a = t.id === 'unit' ? 'name' : t.id;
		e(Nt) === a
			? A(Ut, e(Ut) === 'asc' ? 'desc' : 'asc')
			: (A(Nt, a),
				A(
					Ut,
					[
						'health',
						'sightDistance',
						'maxRange',
						'dps',
						'buildcostmetal',
						'buildcostenergy',
						'buildtime',
						'tech'
					].includes(a)
						? 'desc'
						: 'asc'
				));
	}
	function Fa() {
		const t = document.createElement('dialog');
		t.className = 'bg-gray-900 rounded-lg p-6 backdrop:bg-black/50 max-w-7xl';
		const a = document.createElement('div');
		(a.className = 'mb-4 border-b border-gray-700 pb-3'),
			(a.innerHTML = `
			<h2 class="text-xl font-semibold text-white">Add Columns to Table</h2>
			<p class="text-sm text-gray-400 mt-1">Select columns to add to your comparison view</p>
		`);
		const o = document.createElement('div');
		o.className = 'max-h-[60vh] overflow-auto';
		const c = document.createElement('div');
		(c.className = 'grid grid-cols-4 gap-6'),
			o.appendChild(c),
			$t.forEach((n) => {
				const y = n.fields.filter((g) => !e(ve).some((P) => P.id === g.id));
				if (y.length) {
					const g = document.createElement('div');
					(g.className = 'mb-4'),
						(g.innerHTML = `
					<h3 class="text-white font-medium mb-2 flex items-center gap-2">
						<svg class="h-5 w-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="${na(n.category.toLowerCase())}"></path>
						</svg>
						${n.category}
					</h3>
					<div class="space-y-1 border rounded-lg border-gray-700/50 bg-gray-800/30 p-2">
						${y
							.map(
								(P) => `
							<label class="flex items-center gap-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
								<input type="checkbox" value="${P.id}" data-name="${P.name}" class="rounded border-gray-600">
								<span class="text-gray-200">${P.name}</span>
							</label>
						`
							)
							.join('')}
					</div>
				`),
						c.appendChild(g);
				}
			});
		const f = document.createElement('div');
		(f.className = 'mt-6 flex justify-end gap-3 border-t border-gray-700 pt-3'),
			(f.innerHTML = `
			<button class="px-4 py-2 text-gray-400 hover:text-gray-300 rounded" id="cancel">Cancel</button>
			<button class="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-500 transition-colors" id="add">Add Selected Columns</button>
		`),
			t.appendChild(a),
			t.appendChild(o),
			t.appendChild(f),
			document.body.appendChild(t),
			(t.querySelector('#cancel').onclick = () => t.close()),
			(t.querySelector('#add').onclick = () => {
				const n = Array.from(t.querySelectorAll('input:checked')).map((y) => ({
					id: y.value,
					name: y.dataset.name,
					visible: !0
				}));
				A(ve, [...e(ve), ...n]), t.close();
			}),
			t.showModal();
	}
	function La(t) {
		const a = t.originalTarget;
		if (a) {
			const o = a.getBoundingClientRect(),
				c = window.scrollY + o.top - 100;
			window.scrollTo({ top: c, behavior: 'smooth' });
		}
	}
	let Pt = q([]);
	function va(t, a = 'success') {
		A(Pt, [...e(Pt), { message: t, type: a, id: Date.now() }]),
			setTimeout(() => {
				A(Pt, e(Pt).slice(1));
			}, 3e3);
	}
	let Ha = q(!1),
		qa = '',
		Wa = q(0),
		Ja = q(0);
	function pa(t) {
		if (!t || !t.buildpic) return '';
		const a = t.buildpic,
			o = a.split('/'),
			c = o.pop(),
			f = o.pop(),
			n = c.split('.')[0].toLowerCase();
		return f
			? `${Rt}/unitpics_webp/${f}/${n}.webp`
			: (console.warn(`Buildpic might be missing category: ${a}. Using fallback path.`),
				`${Rt}/unitpics_webp/${n}.webp`);
	}
	function ma(t) {
		return !X() || !t || !X()[t] ? '' : `${Rt}/${X()[t]}`;
	}
	It(
		() => e(j),
		() => {
			A(st, Aa(e(j)));
		}
	),
		It(
			() => (e(j), N(), B(), ea),
			() => {
				A(
					se,
					e(j).map((t) => {
						var n, y, g, P, F;
						if (!t) return null;
						const a = (n = N()) == null ? void 0 : n[t],
							o = ((y = a == null ? void 0 : a.data) == null ? void 0 : y[t]) || {},
							c = ha(o == null ? void 0 : o.weapondefs),
							f = ya(c, o, t);
						return {
							id: t,
							name:
								((F = (P = (g = B()) == null ? void 0 : g.units) == null ? void 0 : P.names) == null
									? void 0
									: F[t]) || t,
							data: o,
							faction: a == null ? void 0 : a.faction,
							type: a == null ? void 0 : a.type,
							subtype: a == null ? void 0 : a.subtype,
							weapons: c,
							combatStats: f,
							tech: a == null ? void 0 : a.tech_level,
							isSuicideUnit: wa(o),
							isMineUnit: ea(o),
							health: Number(ca(o, t)),
							buildcostmetal: Number(da(o, t)),
							buildcostenergy: Number((o == null ? void 0 : o.buildcostenergy) || 0),
							buildtime: Number((o == null ? void 0 : o.buildtime) || 0),
							dps: Number((f == null ? void 0 : f.totalDps) || 0),
							maxRange: Number((f == null ? void 0 : f.maxRange) || 0),
							sightdistance: Number((o == null ? void 0 : o.sightdistance) || 0)
						};
					})
				);
			}
		),
		It(
			() => (e(ye), e(ve)),
			() => {
				if (
					(e(ye).forEach((t) => {
						if (t.field && !e(ve).some((a) => a.id === t.field)) {
							const a = $t.flatMap((o) => o.fields).find((o) => o.id === t.field);
							a && A(ve, [...e(ve), { id: a.id, name: a.name, visible: !0 }]);
						}
					}),
					e(ye).some((t) => t.field === 'buildcostmetal') &&
						!e(ve).some((t) => t.id === 'buildcostmetal'))
				) {
					const t = $t.flatMap((a) => a.fields).find((a) => a.id === 'buildcostmetal');
					t && A(ve, [...e(ve), { id: t.id, name: t.name, visible: !0 }]);
				}
			}
		),
		er(),
		ur();
	var Jt = ys(),
		ua = s(Jt);
	rr(ua);
	var Xt = l(ua, 2),
		Yt = s(Xt),
		ga = s(Yt),
		Xa = l(ga, 2);
	r(Yt);
	var Gt = l(Yt, 2),
		Qt = s(Gt),
		fa = l(Qt, 2);
	r(Gt);
	var Ya = l(Gt, 2);
	{
		var Ga = (t) => {
				var a = Hr(),
					o = s(a),
					c = s(o),
					f = s(c);
				Dt(f), ar(2), r(c), r(o);
				var n = l(o, 2),
					y = s(n),
					g = l(s(y), 2);
				u(() => {
					e(Ct), He(() => {});
				});
				var P = s(g);
				P.value = (P.__value = 'all') == null ? '' : 'all';
				var F = l(P);
				F.value = (F.__value = '1') == null ? '' : '1';
				var Pe = l(F);
				(Pe.value = (Pe.__value = '2') == null ? '' : '2'), r(g), r(y);
				var we = l(y, 2),
					ke = l(s(we), 2);
				u(() => {
					e(ct), He(() => {});
				});
				var pe = s(ke);
				pe.value = (pe.__value = 'all') == null ? '' : 'all';
				var J = l(pe);
				K(J, 1, Ba, ie, (C, w) => {
					var E = hr(),
						U = {},
						ee = s(E, !0);
					r(E),
						u(() => {
							U !== (U = e(w)) && (E.value = (E.__value = e(w)) == null ? '' : e(w)), _(ee, e(w));
						}),
						i(C, E);
				}),
					r(ke),
					r(we);
				var O = l(we, 2),
					Z = l(s(O), 2);
				u(() => {
					e(jt), He(() => {});
				});
				var le = s(Z);
				le.value = (le.__value = 'all') == null ? '' : 'all';
				var Ee = l(le);
				K(Ee, 1, Ea, ie, (C, w) => {
					var E = yr(),
						U = {},
						ee = s(E, !0);
					r(E),
						u(() => {
							U !== (U = e(w)) && (E.value = (E.__value = e(w)) == null ? '' : e(w)), _(ee, e(w));
						}),
						i(C, E);
				}),
					r(Z),
					r(O);
				var We = l(O, 2),
					Ve = l(s(We), 2);
				u(() => {
					e(St), He(() => {});
				});
				var ze = s(Ve);
				ze.value = (ze.__value = 'all') == null ? '' : 'all';
				var z = l(ze);
				z.value = (z.__value = 'arm') == null ? '' : 'arm';
				var I = l(z);
				(I.value = (I.__value = 'cor') == null ? '' : 'cor'), r(Ve), r(We), r(n);
				var oe = l(n, 2),
					Y = s(oe),
					L = l(s(Y), 2);
				r(Y);
				var me = l(Y, 2);
				{
					var Q = (C) => {
						var w = Cr();
						K(
							w,
							5,
							() => e(ye),
							ie,
							(E, U, ee) => {
								var ge = Mr(),
									fe = s(ge);
								u(() => {
									e(U), He(() => {});
								});
								var $e = s(fe);
								$e.value = (($e.__value = '') == null, '');
								var Ce = l($e);
								K(
									Ce,
									1,
									() => $t,
									ie,
									(p, h) => {
										var m = kr();
										K(
											m,
											5,
											() => e(h).fields,
											ie,
											(S, be) => {
												var ae = wr(),
													_e = {},
													de = s(ae, !0);
												r(ae),
													u(() => {
														_e !== (_e = e(be).id) &&
															(ae.value = (ae.__value = e(be).id) == null ? '' : e(be).id),
															_(de, e(be).name);
													}),
													i(S, ae);
											}
										),
											r(m),
											u(() => ce(m, 'label', e(h).category)),
											i(p, m);
									}
								),
									r(fe);
								var R = l(fe, 2);
								u(() => {
									e(U), He(() => {});
								});
								var ne = s(R);
								ne.value = (ne.__value = '>') == null ? '' : '>';
								var je = l(ne);
								je.value = (je.__value = '<') == null ? '' : '<';
								var te = l(je);
								(te.value = (te.__value = '=') == null ? '' : '='), r(R);
								var G = l(R, 2);
								Dt(G);
								var T = l(G, 2);
								r(ge),
									ft(
										fe,
										() => e(U).field,
										(p) => ((e(U).field = p), He(() => e(ye)))
									),
									ft(
										R,
										() => e(U).operator,
										(p) => ((e(U).operator = p), He(() => e(ye)))
									),
									Ma(
										G,
										() => e(U).value,
										(p) => ((e(U).value = p), He(() => e(ye)))
									),
									Ue('click', T, () => $a(ee)),
									i(E, ge);
							}
						),
							r(w),
							i(C, w);
					};
					M(me, (C) => {
						e(ye).length > 0 && C(Q);
					});
				}
				r(oe);
				var D = l(oe, 2),
					ue = s(D),
					Ze = l(s(ue), 2);
				r(ue);
				var Me = l(ue, 2);
				K(
					Me,
					5,
					() => e(ve),
					ie,
					(C, w, E) => {
						var U = jr(),
							ee = s(U);
						Dt(ee);
						var ge = l(ee, 2),
							fe = s(ge, !0);
						r(ge),
							r(U),
							u(() => _(fe, e(w).name)),
							br(
								ee,
								() => e(w).visible,
								($e) => ((e(w).visible = $e), He(() => e(ve)))
							),
							i(C, U);
					}
				),
					r(Me),
					r(D);
				var Ie = l(D, 2);
				{
					var De = (C) => {
							var w = Fr(),
								E = s(w),
								U = s(E),
								ee = s(U),
								ge = s(ee);
							{
								var fe = (T) => {
										var p = Sr();
										i(T, p);
									},
									$e = (T) => {
										var p = Nr();
										i(T, p);
									};
								M(ge, (T) => {
									e(vt) ? T(fe) : T($e, !1);
								});
							}
							r(ee);
							var Ce = l(ee);
							r(U), r(E);
							var R = l(E, 2),
								ne = s(R),
								je = s(ne),
								te = s(je);
							K(
								te,
								5,
								() => e(ve).filter((T) => T.visible),
								ie,
								(T, p) => {
									var h = Pr(),
										m = s(h),
										S = s(m),
										be = l(S);
									{
										var ae = (_e) => {
											var de = Ur();
											u(() =>
												nr(
													de,
													`h-4 w-4 transition-transform ${(e(Ut) === 'desc' ? 'rotate-180' : '') ?? ''}`
												)
											),
												i(_e, de);
										};
										M(be, (_e) => {
											e(Nt) === (e(p).id === 'unit' ? 'name' : e(p).id) && _e(ae);
										});
									}
									r(m),
										r(h),
										u(() => {
											he(
												h,
												`cursor-pointer whitespace-nowrap p-3 text-left text-gray-400 hover:text-white ${(e(p).id === 'unit' ? 'sticky left-0 z-30 min-w-[250px] bg-gray-900/95 backdrop-blur-sm' : '') ?? ''}`
											),
												_(S, `${e(p).name ?? ''} `);
										}),
										Ue('click', h, () => Oa(e(p))),
										i(T, h);
								}
							),
								r(te),
								r(je);
							var G = l(je);
							K(
								G,
								5,
								Ta,
								(T) => T.id,
								(T, p) => {
									var h = Or();
									const m = qe(() => pa(e(p).data)),
										S = qe(() => ma(e(p).id));
									var be = s(h),
										ae = s(be),
										_e = s(ae),
										de = s(_e);
									{
										var Oe = (b) => {
												var k = zr();
												u(() => {
													ce(k, 'src', e(m)), ce(k, 'alt', e(p).name);
												}),
													Ot(k),
													i(b, k);
											},
											xe = (b) => {
												var k = Ar();
												i(b, k);
											};
										M(de, (b) => {
											e(m) ? b(Oe) : b(xe, !1);
										});
									}
									r(_e);
									var et = l(_e, 2);
									{
										var _t = (b) => {
											var k = Rr(),
												x = s(k);
											r(k),
												u(() => {
													ce(x, 'src', e(S)), ce(x, 'alt', `${e(p).name ?? ''} icon`);
												}),
												Ot(x),
												i(b, k);
										};
										M(et, (b) => {
											e(S) && b(_t);
										});
									}
									var Je = l(et, 2),
										V = s(Je),
										H = s(V);
									const Se = qe(
										() =>
											`rounded-lg ${(e(j).includes(e(p).id) ? 'bg-red-600/20 hover:bg-red-600/30' : 'bg-teal-600/20 hover:bg-teal-600/30') ?? ''} group flex items-center gap-1.5 px-2 py-1 text-xs`
									);
									u(() =>
										ce(
											H,
											'aria-label',
											e(j).includes(e(p).id) ? 'Remove from comparison' : 'Add to comparison'
										)
									);
									var Ae = s(H);
									const ot = qe(() => (e(j).includes(e(p).id) ? 'text-red-400' : 'text-teal-400'));
									var xt = s(Ae),
										Xe = s(xt);
									{
										var Fe = (b) => {
												var k = Tr();
												i(b, k);
											},
											Ye = (b) => {
												var k = Br();
												i(b, k);
											};
										M(Xe, (b) => {
											e(j).includes(e(p).id) ? b(Fe) : b(Ye, !1);
										});
									}
									r(xt), r(Ae);
									var Ge = l(Ae, 2),
										it = s(Ge, !0);
									u(() => _(it, e(j).includes(e(p).id) ? 'Remove' : 'Compare')), r(Ge), r(H);
									var Re = l(H, 2),
										Le = s(Re, !0);
									r(Re), r(V);
									var pt = l(V, 2),
										mt = s(pt),
										zt = s(mt, !0);
									r(mt);
									var Te = l(mt, 2),
										Qe = s(Te, !0);
									r(Te);
									var ht = l(Te, 2);
									{
										var yt = (b) => {
											var k = Er(),
												x = s(k, !0);
											r(k), u(() => _(x, e(p).subtype)), i(b, k);
										};
										M(ht, (b) => {
											e(p).subtype && e(p).subtype !== 'none' && b(yt);
										});
									}
									var ut = l(ht, 2),
										Be = s(ut);
									r(ut);
									var Ke = l(ut, 2);
									{
										var At = (b) => {
											var k = Vr(),
												x = s(k, !0);
											r(k), u(() => _(x, e(p).isMineUnit ? 'Mine' : 'Suicide')), i(b, k);
										};
										M(Ke, (b) => {
											e(p).isSuicideUnit && b(At);
										});
									}
									r(pt), r(Je), r(ae), r(be);
									var wt = l(be);
									K(
										wt,
										1,
										() => e(ve).filter((b) => b.visible && b.id !== 'unit'),
										ie,
										(b, k) => {
											var x = $r(),
												re = s(x, !0);
											u(() => _(re, ka(e(p)[e(k).id], e(k).id))), r(x), i(b, x);
										}
									),
										r(h),
										u(() => {
											he(H, e(Se)),
												he(Ae, e(ot)),
												ce(Re, 'href', `${Rt ?? ''}/unit?name=${e(p).id ?? ''}`),
												_(Le, e(p).name),
												_(zt, e(p).faction === 'arm' ? 'ARM' : 'COR'),
												_(Qe, e(p).type),
												_(Be, `T${e(p).tech ?? ''}`);
										}),
										Ue('click', H, () => {
											if (e(j).includes(e(p).id)) {
												for (
													A(
														j,
														e(j)
															.filter((b) => b && b !== e(p).id)
															.concat(e(j).length < 2 ? [''] : [])
													);
													e(j).length < 2;

												)
													A(j, [...e(j), '']);
												va(`Removed ${e(p).name} from comparison`);
											} else {
												const b = e(j).findIndex((k) => !k);
												b >= 0
													? (xa(j, (e(j)[b] = e(p).id)), A(j, e(j)))
													: A(j, [...e(j), e(p).id]),
													va(`Added ${e(p).name} to comparison`);
											}
										}),
										i(T, h);
								}
							),
								r(G),
								r(ne),
								r(R),
								r(w),
								u(() => {
									he(w, `relative ${(e(vt) ? 'fullscreen-container' : '') ?? ''} svelte-dsi7k9`),
										ce(U, 'aria-label', e(vt) ? 'Exit fullscreen' : 'Enter fullscreen'),
										_(Ce, ` ${(e(vt) ? 'Exit Fullscreen' : 'Fullscreen') ?? ''}`),
										he(
											R,
											`overflow-x-auto ${(e(vt) ? 'fullscreen-table' : 'max-h-[70vh]') ?? ''} svelte-dsi7k9`
										);
								}),
								Ue('click', U, Ra),
								i(C, w);
						},
						lt = (C) => {
							var w = Lr();
							i(C, w);
						};
					M(Ie, (C) => {
						e(Vt) && X() ? C(De) : C(lt, !1);
					});
				}
				r(a),
					Ma(
						f,
						() => e(Et),
						(C) => A(Et, C)
					),
					ft(
						g,
						() => e(Ct),
						(C) => A(Ct, C)
					),
					ft(
						ke,
						() => e(ct),
						(C) => A(ct, C)
					),
					ft(
						Z,
						() => e(jt),
						(C) => A(jt, C)
					),
					ft(
						Ve,
						() => e(St),
						(C) => A(St, C)
					),
					Ue('click', L, Va),
					Ue('click', Ze, Fa),
					i(t, a);
			},
			Qa = (t) => {
				var a = at(),
					o = Ne(a);
				{
					var c = (n) => {
							var y = _s(),
								g = l(s(y), 2),
								P = s(g),
								F = s(P);
							K(
								F,
								1,
								() => e(j),
								ie,
								(J, O, Z) => {
									var le = Jr(),
										Ee = s(le),
										We = s(Ee);
									We.textContent = `Unit ${Z + 1}`;
									var Ve = l(We, 2);
									{
										var ze = (Y) => {
											var L = qr();
											Ue('click', L, () => za(Z)), i(Y, L);
										};
										M(Ve, (Y) => {
											e(j).length > 2 && Y(ze);
										});
									}
									r(Ee);
									var z = l(Ee, 2);
									u(() => {
										e(j),
											He(() => {
												e(Ft);
											});
									});
									var I = s(z);
									I.value = ((I.__value = '') == null, '');
									var oe = l(I);
									K(
										oe,
										1,
										() => e(Ft),
										ie,
										(Y, L) => {
											var me = Wr(),
												Q = {},
												D = s(me);
											r(me),
												u(() => {
													Q !== (Q = e(L).id) &&
														(me.value = (me.__value = e(L).id) == null ? '' : e(L).id),
														_(
															D,
															`${e(L).name ?? ''}
												[${(e(L).faction === 'arm' ? 'ARM' : 'COR') ?? ''}] [${e(L).type ?? ''}
												${(e(L).subtype !== 'none' ? `/${e(L).subtype}` : '') ?? ''}] [T${e(L).tech ?? ''}]`
														);
												}),
												i(Y, me);
										}
									),
										r(z),
										r(le),
										ft(
											z,
											() => e(j)[Z],
											(Y) => xa(j, (e(j)[Z] = Y))
										),
										i(J, le);
								}
							);
							var Pe = l(F, 2);
							r(P), r(g);
							var we = l(g, 2);
							{
								var ke = (J) => {
										var O = fs(),
											Z = s(O),
											le = s(Z),
											Ee = s(le),
											We = l(s(Ee));
										K(
											We,
											1,
											() => e(se),
											ie,
											(ze, z, I) => {
												var oe = Dr(),
													Y = s(oe);
												{
													var L = (Q) => {
															var D = Zr();
															const ue = qe(() => pa(e(z).data)),
																Ze = qe(() => ma(e(z).id));
															var Me = s(D),
																Ie = s(Me);
															{
																var De = (h) => {
																		var m = Xr();
																		u(() => {
																			ce(m, 'src', e(ue)), ce(m, 'alt', e(z).name);
																		}),
																			Ot(m),
																			i(h, m);
																	},
																	lt = (h) => {
																		var m = Yr();
																		i(h, m);
																	};
																M(Ie, (h) => {
																	e(ue) ? h(De) : h(lt, !1);
																});
															}
															r(Me);
															var C = l(Me, 2),
																w = s(C),
																E = s(w, !0);
															r(w);
															var U = l(w, 2);
															{
																var ee = (h) => {
																	var m = Gr(),
																		S = s(m);
																	r(m),
																		u(() => {
																			ce(S, 'src', e(Ze)), ce(S, 'alt', `${e(z).name ?? ''} icon`);
																		}),
																		Ot(S),
																		i(h, m);
																};
																M(U, (h) => {
																	e(Ze) && h(ee);
																});
															}
															var ge = l(U, 2),
																fe = s(ge),
																$e = s(fe, !0);
															r(fe);
															var Ce = l(fe, 2),
																R = s(Ce, !0);
															r(Ce);
															var ne = l(Ce, 2);
															{
																var je = (h) => {
																	var m = Qr(),
																		S = s(m, !0);
																	r(m), u(() => _(S, e(z).subtype)), i(h, m);
																};
																M(ne, (h) => {
																	e(z).subtype && e(z).subtype !== 'none' && h(je);
																});
															}
															var te = l(ne, 2),
																G = s(te);
															r(te);
															var T = l(te, 2);
															{
																var p = (h) => {
																	var m = Kr(),
																		S = s(m, !0);
																	r(m),
																		u(() => _(S, e(z).isMineUnit ? 'Mine' : 'Suicide')),
																		i(h, m);
																};
																M(T, (h) => {
																	var m;
																	(m = e(z)) != null && m.isSuicideUnit && h(p);
																});
															}
															r(ge),
																r(C),
																r(D),
																u(() => {
																	ce(w, 'href', `${Rt ?? ''}/unit?name=${e(z).id ?? ''}`),
																		_(E, e(z).name),
																		_($e, e(z).faction === 'arm' ? 'Armada' : 'Cortex'),
																		_(R, e(z).type),
																		_(G, `Tech ${e(z).tech ?? ''}`);
																}),
																i(Q, D);
														},
														me = (Q) => {
															var D = Ir();
															i(Q, D);
														};
													M(Y, (Q) => {
														e(z) ? Q(L) : Q(me, !1);
													});
												}
												r(oe),
													u(() =>
														he(
															oe,
															`w-1/4 min-w-[300px] bg-gray-800/95 p-4 backdrop-blur-sm ${(I === e(se).length - 1 ? 'rounded-tr-lg' : '') ?? ''}`
														)
													),
													i(ze, oe);
											}
										),
											r(Ee),
											r(le);
										var Ve = l(le);
										K(
											Ve,
											5,
											() => Object.entries(e(st)),
											ie,
											(ze, z) => {
												let I = () => e(z)[0],
													oe = () => e(z)[1];
												var Y = at(),
													L = Ne(Y);
												{
													var me = (Q) => {
														var D = gs(),
															ue = Ne(D);
														const Ze = qe(() => `${ia(I()) ?? ''} svelte-dsi7k9`);
														var Me = s(ue),
															Ie = s(Me),
															De = s(Ie);
														const lt = qe(() => `absolute inset-0 ${ia(I()) ?? ''} svelte-dsi7k9`);
														var C = l(De, 2),
															w = s(C),
															E = s(w);
														u(() => ce(E, 'd', na(I()))), r(w);
														var U = l(w, 2),
															ee = s(U, !0);
														r(U), r(C), r(Ie), r(Me), r(ue);
														var ge = l(ue, 2);
														{
															var fe = (Ce) => {
																var R = at(),
																	ne = Ne(R);
																{
																	var je = (te) => {
																		var G = ds(),
																			T = l(s(G));
																		K(
																			T,
																			1,
																			() => e(se),
																			ie,
																			(p, h) => {
																				var m = ns(),
																					S = s(m),
																					be = s(S);
																				{
																					var ae = (de) => {
																							var Oe = os(),
																								xe = Ne(Oe);
																							{
																								var et = (Je) => {
																									var V = es(),
																										H = s(V),
																										Se = s(H);
																									r(H);
																									var Ae = l(H, 2),
																										ot = s(Ae);
																									r(Ae),
																										r(V),
																										u(() => {
																											_(
																												Se,
																												`DPS: ${e(h).combatStats.totalDps ?? ''}`
																											),
																												_(
																													ot,
																													`Range: ${e(h).combatStats.maxRange ?? ''}`
																												);
																										}),
																										i(Je, V);
																								};
																								M(xe, (Je) => {
																									e(h).combatStats && Je(et);
																								});
																							}
																							var _t = l(xe, 2);
																							K(
																								_t,
																								5,
																								() => e(h).weapons,
																								ie,
																								(Je, V) => {
																									var H = ls(),
																										Se = s(H),
																										Ae = s(Se),
																										ot = l(Ae);
																									{
																										var xt = (x) => {
																											var re = ts();
																											i(x, re);
																										};
																										M(ot, (x) => {
																											e(V).isEMP && x(xt);
																										});
																									}
																									var Xe = l(ot, 2);
																									{
																										var Fe = (x) => {
																											var re = as();
																											i(x, re);
																										};
																										M(Xe, (x) => {
																											e(V).isNotFlame && x(Fe);
																										});
																									}
																									r(Se);
																									var Ye = l(Se, 2),
																										Ge = s(Ye),
																										it = l(s(Ge), 2),
																										Re = s(it, !0);
																									r(it), r(Ge);
																									var Le = l(Ge, 2),
																										pt = l(s(Le), 2),
																										mt = s(pt);
																									{
																										var zt = (x) => {
																												var re = rt('N/A (EMP)');
																												i(x, re);
																											},
																											Te = (x) => {
																												var re = at(),
																													nt = Ne(re);
																												{
																													var gt = (tt) => {
																															var kt = rt('N/A (Special)');
																															i(tt, kt);
																														},
																														Zt = (tt) => {
																															var kt = rt();
																															u(() => _(kt, e(V).dps)), i(tt, kt);
																														};
																													M(
																														nt,
																														(tt) => {
																															e(V).isNotFlame ? tt(gt) : tt(Zt, !1);
																														},
																														!0
																													);
																												}
																												i(x, re);
																											};
																										M(mt, (x) => {
																											e(V).isEMP ? x(zt) : x(Te, !1);
																										});
																									}
																									r(pt), r(Le);
																									var Qe = l(Le, 2);
																									{
																										var ht = (x) => {
																											var re = rs(),
																												nt = Ne(re),
																												gt = s(nt),
																												Zt = s(gt, !0);
																											u(() => _(Zt, Mt('paralyzemultiplier'))),
																												r(gt);
																											var tt = l(gt, 2),
																												kt = s(tt);
																											r(tt), r(nt);
																											var ba = l(nt, 2),
																												_a = l(s(ba), 2),
																												Za = s(_a, !0);
																											r(_a),
																												r(ba),
																												u(() => {
																													_(
																														kt,
																														`x${e(V).paralyzeMultiplier ?? ''}`
																													),
																														_(Za, e(V).paralyzeDps);
																												}),
																												i(x, re);
																										};
																										M(Qe, (x) => {
																											e(V).isEMP && x(ht);
																										});
																									}
																									var yt = l(Qe, 2);
																									{
																										var ut = (x) => {
																											var re = ss(),
																												nt = l(s(re), 2),
																												gt = s(nt);
																											r(nt),
																												r(re),
																												u(() => _(gt, `x${e(V).burstCount ?? ''}`)),
																												i(x, re);
																										};
																										M(yt, (x) => {
																											e(V).burstCount > 1 && x(ut);
																										});
																									}
																									var Be = l(yt, 2),
																										Ke = l(s(Be), 2),
																										At = s(Ke, !0);
																									r(Ke), r(Be);
																									var wt = l(Be, 2),
																										b = l(s(wt), 2),
																										k = s(b);
																									r(b),
																										r(wt),
																										r(Ye),
																										r(H),
																										u(() => {
																											_(Ae, `${e(V).type ?? ''} `),
																												_(Re, e(V).damage),
																												_(At, e(V).range),
																												_(k, `${e(V).reloadTime ?? ''}s`);
																										}),
																										i(Je, H);
																								}
																							),
																								r(_t),
																								i(de, Oe);
																						},
																						_e = (de) => {
																							var Oe = is();
																							i(de, Oe);
																						};
																					M(be, (de) => {
																						var Oe, xe;
																						((xe = (Oe = e(h)) == null ? void 0 : Oe.weapons) ==
																						null
																							? void 0
																							: xe.length) > 0
																							? de(ae)
																							: de(_e, !1);
																					});
																				}
																				r(S), r(m), i(p, m);
																			}
																		),
																			r(G),
																			i(te, G);
																	};
																	M(ne, (te) => {
																		e(se).some((G) => {
																			var T;
																			return (
																				((T = G == null ? void 0 : G.weapons) == null
																					? void 0
																					: T.length) > 0
																			);
																		}) && te(je);
																	});
																}
																i(Ce, R);
															};
															M(ge, (Ce) => {
																I() === 'combat' && Ce(fe);
															});
														}
														var $e = l(ge, 2);
														K($e, 1, oe, ie, (Ce, R) => {
															var ne = us();
															const je = qe(() =>
																	e(se).map((m) => {
																		var S;
																		return m
																			? typeof ((S = m.data) == null ? void 0 : S[e(R)]) == 'object'
																				? m.data[e(R)]
																				: m[e(R)]
																			: void 0;
																	})
																),
																te = qe(() => e(se).map((m) => (m ? m[e(R)] : void 0))),
																G = qe(() =>
																	e(te).every((m) => JSON.stringify(m) === JSON.stringify(e(te)[0]))
																);
															var T = s(ne),
																p = s(T, !0);
															u(() => _(p, Mt(e(R)))), r(T);
															var h = l(T);
															K(
																h,
																1,
																() => e(je),
																ie,
																(m, S, be) => {
																	var ae = ms(),
																		_e = s(ae);
																	{
																		var de = (xe) => {
																				var et = cs();
																				i(xe, et);
																			},
																			Oe = (xe) => {
																				var et = at(),
																					_t = Ne(et);
																				{
																					var Je = (H) => {
																							var Se = at(),
																								Ae = Ne(Se);
																							{
																								var ot = (Xe) => {
																										var Fe = vs(),
																											Ye = Ne(Fe),
																											Ge = s(Ye);
																										pr(Ge, {
																											get data() {
																												return e(S);
																											}
																										}),
																											r(Ye);
																										var it = l(Ye, 2);
																										Ue('click', it, () => oa(e(R))), i(Xe, Fe);
																									},
																									xt = (Xe) => {
																										var Fe = ps(),
																											Ye = s(Fe);
																										{
																											var Ge = (Re) => {
																													var Le = rt();
																													u(() =>
																														_(
																															Le,
																															`View Build Options (${Object.keys(e(S)).length ?? ''})`
																														)
																													),
																														i(Re, Le);
																												},
																												it = (Re) => {
																													var Le = at(),
																														pt = Ne(Le);
																													{
																														var mt = (Te) => {
																																var Qe = rt();
																																u(() =>
																																	_(
																																		Qe,
																																		`View Weapon Definitions (${Object.keys(e(S)).length ?? ''})`
																																	)
																																),
																																	i(Te, Qe);
																															},
																															zt = (Te) => {
																																var Qe = at(),
																																	ht = Ne(Qe);
																																{
																																	var yt = (Be) => {
																																			var Ke = rt();
																																			u(() =>
																																				_(
																																					Ke,
																																					`View Weapons (${Object.keys(e(S)).length ?? ''})`
																																				)
																																			),
																																				i(Be, Ke);
																																		},
																																		ut = (Be) => {
																																			var Ke = at(),
																																				At = Ne(Ke);
																																			{
																																				var wt = (k) => {
																																						var x = rt();
																																						u(() =>
																																							_(
																																								x,
																																								`View Custom Parameters (${Object.keys(e(S)).length ?? ''})`
																																							)
																																						),
																																							i(k, x);
																																					},
																																					b = (k) => {
																																						var x = rt();
																																						u(() =>
																																							_(
																																								x,
																																								`View Details (${Object.keys(e(S)).length ?? ''})`
																																							)
																																						),
																																							i(k, x);
																																					};
																																				M(
																																					At,
																																					(k) => {
																																						e(R) === 'customparams'
																																							? k(wt)
																																							: k(b, !1);
																																					},
																																					!0
																																				);
																																			}
																																			i(Be, Ke);
																																		};
																																	M(
																																		ht,
																																		(Be) => {
																																			e(R) === 'weapons'
																																				? Be(yt)
																																				: Be(ut, !1);
																																		},
																																		!0
																																	);
																																}
																																i(Te, Qe);
																															};
																														M(
																															pt,
																															(Te) => {
																																e(R) === 'weapondefs'
																																	? Te(mt)
																																	: Te(zt, !1);
																															},
																															!0
																														);
																													}
																													i(Re, Le);
																												};
																											M(Ye, (Re) => {
																												e(R) === 'buildoptions'
																													? Re(Ge)
																													: Re(it, !1);
																											});
																										}
																										r(Fe),
																											Ue('click', Fe, () => oa(e(R))),
																											i(Xe, Fe);
																									};
																								M(Ae, (Xe) => {
																									e(bt).has(e(R)) ? Xe(ot) : Xe(xt, !1);
																								});
																							}
																							i(H, Se);
																						},
																						V = (H) => {
																							var Se = rt();
																							u(() => _(Se, ka(e(te)[be], e(R)))), i(H, Se);
																						};
																					M(
																						_t,
																						(H) => {
																							typeof e(S) == 'object' && e(S) !== null
																								? H(Je)
																								: H(V, !1);
																						},
																						!0
																					);
																				}
																				i(xe, et);
																			};
																		M(_e, (xe) => {
																			e(S) === void 0 || e(S) === null ? xe(de) : xe(Oe, !1);
																		});
																	}
																	r(ae),
																		u(() =>
																			he(
																				ae,
																				`p-4 text-center ${(!e(G) && e(S) !== void 0 ? 'font-medium' : '') ?? ''} ${(e(G) ? 'text-gray-300' : 'text-white') ?? ''}`
																			)
																		),
																		i(m, ae);
																}
															),
																r(ne),
																i(Ce, ne);
														}),
															u(() => {
																he(ue, e(Ze)),
																	ce(Me, 'colspan', e(se).length + 1),
																	he(De, e(lt)),
																	_(ee, I());
															}),
															i(Q, D);
													};
													M(L, (Q) => {
														oe().length > 0 && Q(me);
													});
												}
												i(ze, Y);
											}
										),
											r(Ve),
											r(Z),
											r(O),
											Ue('mouseenter', O, La),
											i(J, O);
									},
									pe = (J) => {
										var O = bs();
										i(J, O);
									};
								M(we, (J) => {
									e(se).some((O) => O) ? J(ke) : J(pe, !1);
								});
							}
							r(y), Ue('click', Pe, Pa), i(n, y);
						},
						f = (n) => {
							var y = xs();
							i(n, y);
						};
					M(o, (n) => {
						e(Vt) && X() ? n(c) : n(f, !1);
					});
				}
				i(t, a);
			};
		M(Ya, (t) => {
			e(dt) === 'browse' ? t(Ga) : t(Qa, !1);
		});
	}
	r(Xt);
	var Kt = l(Xt, 2);
	K(
		Kt,
		5,
		() => e(Pt),
		(t) => t.id,
		(t, a) => {
			var o = hs(),
				c = s(o, !0);
			r(o),
				u(() => {
					he(
						o,
						`rounded-lg bg-gray-900 px-4 py-3 text-sm shadow-lg ring-1 ${(e(a).type === 'success' ? 'text-teal-400 ring-teal-500/50' : 'text-red-400 ring-red-500/50') ?? ''}`
					),
						_(c, e(a).message);
				}),
				cr(
					3,
					o,
					() => vr,
					() => ({ y: 20, duration: 300 })
				),
				i(t, o);
		}
	),
		r(Kt);
	var Ka = l(Kt, 2);
	dr(Ka, {
		imageUrl: qa,
		get visible() {
			return e(Ha);
		},
		get x() {
			return e(Wa);
		},
		get y() {
			return e(Ja);
		}
	}),
		r(Jt),
		u(() => {
			he(
				ga,
				`rounded-xl bg-gray-800/50 p-6 ${(e(dt) === 'browse' ? 'ring-2 ring-teal-500/50' : '') ?? ''}`
			),
				he(
					Xa,
					`rounded-xl bg-gray-800/50 p-6 ${(e(dt) === 'compare' ? 'ring-2 ring-teal-500/50' : '') ?? ''}`
				),
				he(
					Qt,
					`rounded-lg px-6 py-3 font-medium transition-all ${(e(dt) === 'browse' ? 'bg-teal-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700') ?? ''}`
				),
				he(
					fa,
					`rounded-lg px-6 py-3 font-medium transition-all ${(e(dt) === 'compare' ? 'bg-teal-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700') ?? ''}`
				);
		}),
		Ue('click', Qt, () => A(dt, 'browse')),
		Ue('click', fa, () => A(dt, 'compare')),
		i(d, Jt),
		tr();
}
export { Es as component };
