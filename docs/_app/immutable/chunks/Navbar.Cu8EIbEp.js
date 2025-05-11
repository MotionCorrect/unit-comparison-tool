import { b as p, w as i } from './paths.CC_1dxGD.js';
import { a as A, t as j } from './disclose-version.D6IHqBz7.js';
import './legacy.BC6soP9j.js';
import {
	ad as L,
	h as l,
	aF as k,
	aG as $,
	aH as y,
	d as B,
	t as T,
	c,
	s as g,
	r as _,
	m as F,
	g as h
} from './runtime.B6PTYWss.js';
import { b as z } from './events.CuhszENT.js';
function U(s) {
	if (l) {
		var a = !1,
			e = () => {
				if (!a) {
					if (((a = !0), s.hasAttribute('value'))) {
						var t = s.value;
						f(s, 'value', null), (s.value = t);
					}
					if (s.hasAttribute('checked')) {
						var r = s.checked;
						f(s, 'checked', null), (s.checked = r);
					}
				}
			};
		(s.__on_r = e), $(e), z();
	}
}
function f(s, a, e, t) {
	var r = s.__attributes ?? (s.__attributes = {});
	(l &&
		((r[a] = s.getAttribute(a)),
		a === 'src' || a === 'srcset' || (a === 'href' && s.nodeName === 'LINK'))) ||
		(r[a] !== (r[a] = e) &&
			(a === 'style' && '__styles' in s && (s.__styles = {}),
			a === 'loading' && (s[y] = e),
			e == null
				? s.removeAttribute(a)
				: typeof e != 'string' && D(s).includes(a)
					? (s[a] = e)
					: s.setAttribute(a, e)));
}
var b = new Map();
function D(s) {
	var a = b.get(s.nodeName);
	if (a) return a;
	b.set(s.nodeName, (a = []));
	for (var e, t = s, r = Element.prototype; r !== t; ) {
		e = k(t);
		for (var n in e) e[n].set && a.push(n);
		t = L(t);
	}
	return a;
}
function V(s) {
	if (!l && s.loading === 'lazy') {
		var a = s.src;
		(s[y] = null),
			(s.loading = 'eager'),
			s.removeAttribute('src'),
			requestAnimationFrame(() => {
				s[y] !== 'eager' && (s.loading = 'lazy'), (s.src = a);
			});
	}
}
function X(s, a) {
	var e = s.__className,
		t = N(a);
	l && s.getAttribute('class') === t
		? (s.__className = t)
		: (e !== t || (l && s.getAttribute('class') !== t)) &&
			(t === '' ? s.removeAttribute('class') : s.setAttribute('class', t), (s.__className = t));
}
function m(s, a) {
	var e = s.__className,
		t = N(a);
	l && s.className === t
		? (s.__className = t)
		: (e !== t || (l && s.className !== t)) &&
			(a == null ? s.removeAttribute('class') : (s.className = t), (s.__className = t));
}
function N(s) {
	return s ?? '';
}
function Z(s, a, e) {
	if (e) {
		if (s.classList.contains(a)) return;
		s.classList.add(a);
	} else {
		if (!s.classList.contains(a)) return;
		s.classList.remove(a);
	}
}
let I = i(null),
	M = i(null),
	q = i(null),
	E = i(null),
	G = i(null),
	H = i(null),
	O = i(null),
	P = i(null),
	S = i(null),
	x = !1;
async function ss() {
	if (x) return;
	const s = [
			'units_data.json',
			'unit_names_details.json',
			'units_by_faction.json',
			'units_by_type.json',
			'units_by_tech.json',
			'units_by_faction_type_tech.json',
			'factions_list.json',
			'types_with_subtypes.json',
			'unit_icon_map.json'
		],
		[a, e, t, r, n, u, v, o, d] = await Promise.all(
			s.map(async (w) => (await fetch(`${p}/${w}`)).json())
		);
	I.set(a),
		M.set(e),
		q.set(t),
		E.set(r),
		G.set(n),
		H.set(u),
		O.set(v),
		P.set(o),
		S.set(d),
		(x = !0);
}
var C = j(
	'<nav class="sticky top-0 z-50 border-b border-gray-800/50 bg-gray-900/95 backdrop-blur-sm"><div class="container mx-auto px-4"><div class="flex h-14 items-center"><div class="flex items-center space-x-8"><a class="font-medium text-gray-200 transition-colors hover:text-teal-400">Home</a> <div class="flex items-center space-x-4"><a>Explore</a> <a>Browse & Compare</a></div></div></div></div></nav>'
);
function as(s) {
	let a = F('');
	typeof window < 'u' && B(a, window.location.pathname);
	var e = C(),
		t = c(e),
		r = c(t),
		n = c(r),
		u = c(n);
	f(u, 'href', `${p ?? ''}/`);
	var v = g(u, 2),
		o = c(v);
	f(o, 'href', `${p ?? ''}/explore`);
	var d = g(o, 2);
	f(d, 'href', `${p ?? ''}/compare`),
		_(v),
		_(n),
		_(r),
		_(t),
		_(e),
		T(() => {
			m(
				o,
				`rounded-md px-3 py-2 ${(h(a) === '/explore' ? 'bg-gray-900 text-teal-400' : 'text-gray-200 hover:bg-gray-800/50 hover:text-teal-400') ?? ''} transition-all`
			),
				m(
					d,
					`rounded-md px-3 py-2 ${(h(a) === '/compare' ? 'bg-gray-900 text-teal-400' : 'text-gray-200 hover:bg-gray-800/50 hover:text-teal-400') ?? ''} transition-all`
				);
		}),
		A(s, e);
}
export {
	as as N,
	M as a,
	X as b,
	m as c,
	S as d,
	Z as e,
	O as f,
	H as g,
	V as h,
	ss as l,
	U as r,
	f as s,
	P as t,
	I as u
};
