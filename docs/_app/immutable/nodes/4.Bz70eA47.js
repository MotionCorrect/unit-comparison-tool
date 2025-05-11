import { a as Ag, t as Eg } from '../chunks/disclose-version.D6IHqBz7.js';
import '../chunks/legacy.BC6soP9j.js';
import {
	p as Ng,
	l as Cg,
	a as Rg,
	a7 as Pg,
	t as Ig,
	b as zg,
	d as pi,
	c as Me,
	s as $e,
	r as Te,
	g as ot,
	n as Dg,
	m as Na
} from '../chunks/runtime.B6PTYWss.js';
import { e as lr } from '../chunks/events.CuhszENT.js';
import {
	N as Og,
	l as Fg,
	e as Ec,
	g as Lg,
	a as Bg,
	u as Ug,
	d as qg
} from '../chunks/Navbar.Cu8EIbEp.js';
import { b as Yg } from '../chunks/this.j9i47_k0.js';
import { i as Hg } from '../chunks/lifecycle.ZI99Jbm1.js';
import { s as Xg, a as mi } from '../chunks/store.CxMiR7dL.js';
import { o as Gg, a as Wg } from '../chunks/index-client.BbMgc3IQ.js';
import { b as Se } from '../chunks/paths.CC_1dxGD.js';
function yt(t, n) {
	return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Wl(t, n) {
	return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Bo(t) {
	let n, e, r;
	t.length !== 2
		? ((n = yt), (e = (u, c) => yt(t(u), c)), (r = (u, c) => t(u) - c))
		: ((n = t === yt || t === Wl ? t : Vg), (e = t), (r = t));
	function i(u, c, s = 0, f = u.length) {
		if (s < f) {
			if (n(c, c) !== 0) return f;
			do {
				const h = (s + f) >>> 1;
				e(u[h], c) < 0 ? (s = h + 1) : (f = h);
			} while (s < f);
		}
		return s;
	}
	function o(u, c, s = 0, f = u.length) {
		if (s < f) {
			if (n(c, c) !== 0) return f;
			do {
				const h = (s + f) >>> 1;
				e(u[h], c) <= 0 ? (s = h + 1) : (f = h);
			} while (s < f);
		}
		return s;
	}
	function a(u, c, s = 0, f = u.length) {
		const h = i(u, c, s, f - 1);
		return h > s && r(u[h - 1], c) > -r(u[h], c) ? h - 1 : h;
	}
	return { left: i, center: a, right: o };
}
function Vg() {
	return 0;
}
function Zi(t) {
	return t === null ? NaN : +t;
}
function* jg(t, n) {
	if (n === void 0) for (let e of t) e != null && (e = +e) >= e && (yield e);
	else {
		let e = -1;
		for (let r of t) (r = n(r, ++e, t)) != null && (r = +r) >= r && (yield r);
	}
}
const Vl = Bo(yt),
	Un = Vl.right,
	Zg = Vl.left,
	Qg = Bo(Zi).center;
function Kg(t, n) {
	if (!((n = +n) >= 0)) throw new RangeError('invalid r');
	let e = t.length;
	if (!((e = Math.floor(e)) >= 0)) throw new RangeError('invalid length');
	if (!e || !n) return t;
	const r = ls(n),
		i = t.slice();
	return r(t, i, 0, e, 1), r(i, t, 0, e, 1), r(t, i, 0, e, 1), t;
}
const jl = Zl(ls),
	Jg = Zl(tp);
function Zl(t) {
	return function (n, e, r = e) {
		if (!((e = +e) >= 0)) throw new RangeError('invalid rx');
		if (!((r = +r) >= 0)) throw new RangeError('invalid ry');
		let { data: i, width: o, height: a } = n;
		if (!((o = Math.floor(o)) >= 0)) throw new RangeError('invalid width');
		if (!((a = Math.floor(a !== void 0 ? a : i.length / o)) >= 0))
			throw new RangeError('invalid height');
		if (!o || !a || (!e && !r)) return n;
		const u = e && t(e),
			c = r && t(r),
			s = i.slice();
		return (
			u && c
				? (ke(u, s, i, o, a),
					ke(u, i, s, o, a),
					ke(u, s, i, o, a),
					Ae(c, i, s, o, a),
					Ae(c, s, i, o, a),
					Ae(c, i, s, o, a))
				: u
					? (ke(u, i, s, o, a), ke(u, s, i, o, a), ke(u, i, s, o, a))
					: c && (Ae(c, i, s, o, a), Ae(c, s, i, o, a), Ae(c, i, s, o, a)),
			n
		);
	};
}
function ke(t, n, e, r, i) {
	for (let o = 0, a = r * i; o < a; ) t(n, e, o, (o += r), 1);
}
function Ae(t, n, e, r, i) {
	for (let o = 0, a = r * i; o < r; ++o) t(n, e, o, o + a, r);
}
function tp(t) {
	const n = ls(t);
	return (e, r, i, o, a) => {
		(i <<= 2),
			(o <<= 2),
			(a <<= 2),
			n(e, r, i + 0, o + 0, a),
			n(e, r, i + 1, o + 1, a),
			n(e, r, i + 2, o + 2, a),
			n(e, r, i + 3, o + 3, a);
	};
}
function ls(t) {
	const n = Math.floor(t);
	if (n === t) return np(t);
	const e = t - n,
		r = 2 * t + 1;
	return (i, o, a, u, c) => {
		if (!((u -= c) >= a)) return;
		let s = n * o[a];
		const f = c * n,
			h = f + c;
		for (let l = a, d = a + f; l < d; l += c) s += o[Math.min(u, l)];
		for (let l = a, d = u; l <= d; l += c)
			(s += o[Math.min(u, l + f)]),
				(i[l] = (s + e * (o[Math.max(a, l - h)] + o[Math.min(u, l + h)])) / r),
				(s -= o[Math.max(a, l - f)]);
	};
}
function np(t) {
	const n = 2 * t + 1;
	return (e, r, i, o, a) => {
		if (!((o -= a) >= i)) return;
		let u = t * r[i];
		const c = a * t;
		for (let s = i, f = i + c; s < f; s += a) u += r[Math.min(o, s)];
		for (let s = i, f = o; s <= f; s += a)
			(u += r[Math.min(o, s + c)]), (e[s] = u / n), (u -= r[Math.max(i, s - c)]);
	};
}
function Uo(t, n) {
	let e = 0;
	if (n === void 0) for (let r of t) r != null && (r = +r) >= r && ++e;
	else {
		let r = -1;
		for (let i of t) (i = n(i, ++r, t)) != null && (i = +i) >= i && ++e;
	}
	return e;
}
function ep(t) {
	return t.length | 0;
}
function rp(t) {
	return !(t > 0);
}
function ip(t) {
	return typeof t != 'object' || 'length' in t ? t : Array.from(t);
}
function op(t) {
	return (n) => t(...n);
}
function ap(...t) {
	const n = typeof t[t.length - 1] == 'function' && op(t.pop());
	t = t.map(ip);
	const e = t.map(ep),
		r = t.length - 1,
		i = new Array(r + 1).fill(0),
		o = [];
	if (r < 0 || e.some(rp)) return o;
	for (;;) {
		o.push(i.map((u, c) => t[c][u]));
		let a = r;
		for (; ++i[a] === e[a]; ) {
			if (a === 0) return n ? o.map(n) : o;
			i[a--] = 0;
		}
	}
}
function up(t, n) {
	var e = 0,
		r = 0;
	return Float64Array.from(
		t,
		n === void 0 ? (i) => (e += +i || 0) : (i) => (e += +n(i, r++, t) || 0)
	);
}
function Ql(t, n) {
	let e = 0,
		r,
		i = 0,
		o = 0;
	if (n === void 0)
		for (let a of t)
			a != null && (a = +a) >= a && ((r = a - i), (i += r / ++e), (o += r * (a - i)));
	else {
		let a = -1;
		for (let u of t)
			(u = n(u, ++a, t)) != null &&
				(u = +u) >= u &&
				((r = u - i), (i += r / ++e), (o += r * (u - i)));
	}
	if (e > 1) return o / (e - 1);
}
function Kl(t, n) {
	const e = Ql(t, n);
	return e && Math.sqrt(e);
}
function Rr(t, n) {
	let e, r;
	if (n === void 0)
		for (const i of t)
			i != null && (e === void 0 ? i >= i && (e = r = i) : (e > i && (e = i), r < i && (r = i)));
	else {
		let i = -1;
		for (let o of t)
			(o = n(o, ++i, t)) != null &&
				(e === void 0 ? o >= o && (e = r = o) : (e > o && (e = o), r < o && (r = o)));
	}
	return [e, r];
}
class xt {
	constructor() {
		(this._partials = new Float64Array(32)), (this._n = 0);
	}
	add(n) {
		const e = this._partials;
		let r = 0;
		for (let i = 0; i < this._n && i < 32; i++) {
			const o = e[i],
				a = n + o,
				u = Math.abs(n) < Math.abs(o) ? n - (a - o) : o - (a - n);
			u && (e[r++] = u), (n = a);
		}
		return (e[r] = n), (this._n = r + 1), this;
	}
	valueOf() {
		const n = this._partials;
		let e = this._n,
			r,
			i,
			o,
			a = 0;
		if (e > 0) {
			for (a = n[--e]; e > 0 && ((r = a), (i = n[--e]), (a = r + i), (o = i - (a - r)), !o); );
			e > 0 &&
				((o < 0 && n[e - 1] < 0) || (o > 0 && n[e - 1] > 0)) &&
				((i = o * 2), (r = a + i), i == r - a && (a = r));
		}
		return a;
	}
}
function sp(t, n) {
	const e = new xt();
	if (n === void 0) for (let r of t) (r = +r) && e.add(r);
	else {
		let r = -1;
		for (let i of t) (i = +n(i, ++r, t)) && e.add(i);
	}
	return +e;
}
function cp(t, n) {
	const e = new xt();
	let r = -1;
	return Float64Array.from(
		t,
		n === void 0 ? (i) => e.add(+i || 0) : (i) => e.add(+n(i, ++r, t) || 0)
	);
}
class Fr extends Map {
	constructor(n, e = nh) {
		if (
			(super(),
			Object.defineProperties(this, { _intern: { value: new Map() }, _key: { value: e } }),
			n != null)
		)
			for (const [r, i] of n) this.set(r, i);
	}
	get(n) {
		return super.get(pu(this, n));
	}
	has(n) {
		return super.has(pu(this, n));
	}
	set(n, e) {
		return super.set(Jl(this, n), e);
	}
	delete(n) {
		return super.delete(th(this, n));
	}
}
class ae extends Set {
	constructor(n, e = nh) {
		if (
			(super(),
			Object.defineProperties(this, { _intern: { value: new Map() }, _key: { value: e } }),
			n != null)
		)
			for (const r of n) this.add(r);
	}
	has(n) {
		return super.has(pu(this, n));
	}
	add(n) {
		return super.add(Jl(this, n));
	}
	delete(n) {
		return super.delete(th(this, n));
	}
}
function pu({ _intern: t, _key: n }, e) {
	const r = n(e);
	return t.has(r) ? t.get(r) : e;
}
function Jl({ _intern: t, _key: n }, e) {
	const r = n(e);
	return t.has(r) ? t.get(r) : (t.set(r, e), e);
}
function th({ _intern: t, _key: n }, e) {
	const r = n(e);
	return t.has(r) && ((e = t.get(r)), t.delete(r)), e;
}
function nh(t) {
	return t !== null && typeof t == 'object' ? t.valueOf() : t;
}
function Xe(t) {
	return t;
}
function eh(t, ...n) {
	return ur(t, Xe, Xe, n);
}
function rh(t, ...n) {
	return ur(t, Array.from, Xe, n);
}
function ih(t, n) {
	for (let e = 1, r = n.length; e < r; ++e)
		t = t.flatMap((i) => i.pop().map(([o, a]) => [...i, o, a]));
	return t;
}
function fp(t, ...n) {
	return ih(rh(t, ...n), n);
}
function lp(t, n, ...e) {
	return ih(ah(t, n, ...e), e);
}
function oh(t, n, ...e) {
	return ur(t, Xe, n, e);
}
function ah(t, n, ...e) {
	return ur(t, Array.from, n, e);
}
function hp(t, ...n) {
	return ur(t, Xe, uh, n);
}
function dp(t, ...n) {
	return ur(t, Array.from, uh, n);
}
function uh(t) {
	if (t.length !== 1) throw new Error('duplicate key');
	return t[0];
}
function ur(t, n, e, r) {
	return (function i(o, a) {
		if (a >= r.length) return e(o);
		const u = new Fr(),
			c = r[a++];
		let s = -1;
		for (const f of o) {
			const h = c(f, ++s, o),
				l = u.get(h);
			l ? l.push(f) : u.set(h, [f]);
		}
		for (const [f, h] of u) u.set(f, i(h, a));
		return n(u);
	})(t, 0);
}
function sh(t, n) {
	return Array.from(n, (e) => t[e]);
}
function mu(t, ...n) {
	if (typeof t[Symbol.iterator] != 'function') throw new TypeError('values is not iterable');
	t = Array.from(t);
	let [e] = n;
	if ((e && e.length !== 2) || n.length > 1) {
		const r = Uint32Array.from(t, (i, o) => o);
		return (
			n.length > 1
				? ((n = n.map((i) => t.map(i))),
					r.sort((i, o) => {
						for (const a of n) {
							const u = Ge(a[i], a[o]);
							if (u) return u;
						}
					}))
				: ((e = t.map(e)), r.sort((i, o) => Ge(e[i], e[o]))),
			sh(t, r)
		);
	}
	return t.sort(hs(e));
}
function hs(t = yt) {
	if (t === yt) return Ge;
	if (typeof t != 'function') throw new TypeError('compare is not a function');
	return (n, e) => {
		const r = t(n, e);
		return r || r === 0 ? r : (t(e, e) === 0) - (t(n, n) === 0);
	};
}
function Ge(t, n) {
	return (t == null || !(t >= t)) - (n == null || !(n >= n)) || (t < n ? -1 : t > n ? 1 : 0);
}
function gp(t, n, e) {
	return (
		n.length !== 2
			? mu(oh(t, n, e), ([r, i], [o, a]) => yt(i, a) || yt(r, o))
			: mu(eh(t, e), ([r, i], [o, a]) => n(i, a) || yt(r, o))
	).map(([r]) => r);
}
var pp = Array.prototype,
	mp = pp.slice;
function Ca(t) {
	return () => t;
}
const yp = Math.sqrt(50),
	bp = Math.sqrt(10),
	vp = Math.sqrt(2);
function Qi(t, n, e) {
	const r = (n - t) / Math.max(0, e),
		i = Math.floor(Math.log10(r)),
		o = r / Math.pow(10, i),
		a = o >= yp ? 10 : o >= bp ? 5 : o >= vp ? 2 : 1;
	let u, c, s;
	return (
		i < 0
			? ((s = Math.pow(10, -i) / a),
				(u = Math.round(t * s)),
				(c = Math.round(n * s)),
				u / s < t && ++u,
				c / s > n && --c,
				(s = -s))
			: ((s = Math.pow(10, i) * a),
				(u = Math.round(t / s)),
				(c = Math.round(n / s)),
				u * s < t && ++u,
				c * s > n && --c),
		c < u && 0.5 <= e && e < 2 ? Qi(t, n, e * 2) : [u, c, s]
	);
}
function ue(t, n, e) {
	if (((n = +n), (t = +t), (e = +e), !(e > 0))) return [];
	if (t === n) return [t];
	const r = n < t,
		[i, o, a] = r ? Qi(n, t, e) : Qi(t, n, e);
	if (!(o >= i)) return [];
	const u = o - i + 1,
		c = new Array(u);
	if (r)
		if (a < 0) for (let s = 0; s < u; ++s) c[s] = (o - s) / -a;
		else for (let s = 0; s < u; ++s) c[s] = (o - s) * a;
	else if (a < 0) for (let s = 0; s < u; ++s) c[s] = (i + s) / -a;
	else for (let s = 0; s < u; ++s) c[s] = (i + s) * a;
	return c;
}
function se(t, n, e) {
	return (n = +n), (t = +t), (e = +e), Qi(t, n, e)[2];
}
function Ki(t, n, e) {
	(n = +n), (t = +t), (e = +e);
	const r = n < t,
		i = r ? se(n, t, e) : se(t, n, e);
	return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function ds(t, n, e) {
	let r;
	for (;;) {
		const i = se(t, n, e);
		if (i === r || i === 0 || !isFinite(i)) return [t, n];
		i > 0
			? ((t = Math.floor(t / i) * i), (n = Math.ceil(n / i) * i))
			: i < 0 && ((t = Math.ceil(t * i) / i), (n = Math.floor(n * i) / i)),
			(r = i);
	}
}
function gs(t) {
	return Math.max(1, Math.ceil(Math.log(Uo(t)) / Math.LN2) + 1);
}
function Nc() {
	var t = Xe,
		n = Rr,
		e = gs;
	function r(i) {
		Array.isArray(i) || (i = Array.from(i));
		var o,
			a = i.length,
			u,
			c,
			s = new Array(a);
		for (o = 0; o < a; ++o) s[o] = t(i[o], o, i);
		var f = n(s),
			h = f[0],
			l = f[1],
			d = e(s, h, l);
		if (!Array.isArray(d)) {
			const v = l,
				b = +d;
			if (
				(n === Rr && ([h, l] = ds(h, l, b)),
				(d = ue(h, l, b)),
				d[0] <= h && (c = se(h, l, b)),
				d[d.length - 1] >= l)
			)
				if (v >= l && n === Rr) {
					const w = se(h, l, b);
					isFinite(w) &&
						(w > 0
							? (l = (Math.floor(l / w) + 1) * w)
							: w < 0 && (l = (Math.ceil(l * -w) + 1) / -w));
				} else d.pop();
		}
		for (var p = d.length, m = 0, g = p; d[m] <= h; ) ++m;
		for (; d[g - 1] > l; ) --g;
		(m || g < p) && ((d = d.slice(m, g)), (p = g - m));
		var y = new Array(p + 1),
			_;
		for (o = 0; o <= p; ++o)
			(_ = y[o] = []), (_.x0 = o > 0 ? d[o - 1] : h), (_.x1 = o < p ? d[o] : l);
		if (isFinite(c)) {
			if (c > 0)
				for (o = 0; o < a; ++o)
					(u = s[o]) != null &&
						h <= u &&
						u <= l &&
						y[Math.min(p, Math.floor((u - h) / c))].push(i[o]);
			else if (c < 0) {
				for (o = 0; o < a; ++o)
					if ((u = s[o]) != null && h <= u && u <= l) {
						const v = Math.floor((h - u) * c);
						y[Math.min(p, v + (d[v] <= u))].push(i[o]);
					}
			}
		} else
			for (o = 0; o < a; ++o)
				(u = s[o]) != null && h <= u && u <= l && y[Un(d, u, 0, p)].push(i[o]);
		return y;
	}
	return (
		(r.value = function (i) {
			return arguments.length ? ((t = typeof i == 'function' ? i : Ca(i)), r) : t;
		}),
		(r.domain = function (i) {
			return arguments.length ? ((n = typeof i == 'function' ? i : Ca([i[0], i[1]])), r) : n;
		}),
		(r.thresholds = function (i) {
			return arguments.length
				? ((e = typeof i == 'function' ? i : Ca(Array.isArray(i) ? mp.call(i) : i)), r)
				: e;
		}),
		r
	);
}
function Lr(t, n) {
	let e;
	if (n === void 0) for (const r of t) r != null && (e < r || (e === void 0 && r >= r)) && (e = r);
	else {
		let r = -1;
		for (let i of t) (i = n(i, ++r, t)) != null && (e < i || (e === void 0 && i >= i)) && (e = i);
	}
	return e;
}
function ps(t, n) {
	let e,
		r = -1,
		i = -1;
	if (n === void 0)
		for (const o of t) ++i, o != null && (e < o || (e === void 0 && o >= o)) && ((e = o), (r = i));
	else
		for (let o of t)
			(o = n(o, ++i, t)) != null && (e < o || (e === void 0 && o >= o)) && ((e = o), (r = i));
	return r;
}
function Ji(t, n) {
	let e;
	if (n === void 0) for (const r of t) r != null && (e > r || (e === void 0 && r >= r)) && (e = r);
	else {
		let r = -1;
		for (let i of t) (i = n(i, ++r, t)) != null && (e > i || (e === void 0 && i >= i)) && (e = i);
	}
	return e;
}
function ms(t, n) {
	let e,
		r = -1,
		i = -1;
	if (n === void 0)
		for (const o of t) ++i, o != null && (e > o || (e === void 0 && o >= o)) && ((e = o), (r = i));
	else
		for (let o of t)
			(o = n(o, ++i, t)) != null && (e > o || (e === void 0 && o >= o)) && ((e = o), (r = i));
	return r;
}
function qo(t, n, e = 0, r = 1 / 0, i) {
	if (
		((n = Math.floor(n)),
		(e = Math.floor(Math.max(0, e))),
		(r = Math.floor(Math.min(t.length - 1, r))),
		!(e <= n && n <= r))
	)
		return t;
	for (i = i === void 0 ? Ge : hs(i); r > e; ) {
		if (r - e > 600) {
			const c = r - e + 1,
				s = n - e + 1,
				f = Math.log(c),
				h = 0.5 * Math.exp((2 * f) / 3),
				l = 0.5 * Math.sqrt((f * h * (c - h)) / c) * (s - c / 2 < 0 ? -1 : 1),
				d = Math.max(e, Math.floor(n - (s * h) / c + l)),
				p = Math.min(r, Math.floor(n + ((c - s) * h) / c + l));
			qo(t, n, d, p, i);
		}
		const o = t[n];
		let a = e,
			u = r;
		for (hr(t, e, n), i(t[r], o) > 0 && hr(t, e, r); a < u; ) {
			for (hr(t, a, u), ++a, --u; i(t[a], o) < 0; ) ++a;
			for (; i(t[u], o) > 0; ) --u;
		}
		i(t[e], o) === 0 ? hr(t, e, u) : (++u, hr(t, u, r)),
			u <= n && (e = u + 1),
			n <= u && (r = u - 1);
	}
	return t;
}
function hr(t, n, e) {
	const r = t[n];
	(t[n] = t[e]), (t[e] = r);
}
function ch(t, n = yt) {
	let e,
		r = !1;
	if (n.length === 1) {
		let i;
		for (const o of t) {
			const a = n(o);
			(r ? yt(a, i) > 0 : yt(a, a) === 0) && ((e = o), (i = a), (r = !0));
		}
	} else for (const i of t) (r ? n(i, e) > 0 : n(i, i) === 0) && ((e = i), (r = !0));
	return e;
}
function Br(t, n, e) {
	if (((t = Float64Array.from(jg(t, e))), !(!(r = t.length) || isNaN((n = +n))))) {
		if (n <= 0 || r < 2) return Ji(t);
		if (n >= 1) return Lr(t);
		var r,
			i = (r - 1) * n,
			o = Math.floor(i),
			a = Lr(qo(t, o).subarray(0, o + 1)),
			u = Ji(t.subarray(o + 1));
		return a + (u - a) * (i - o);
	}
}
function fh(t, n, e = Zi) {
	if (!(!(r = t.length) || isNaN((n = +n)))) {
		if (n <= 0 || r < 2) return +e(t[0], 0, t);
		if (n >= 1) return +e(t[r - 1], r - 1, t);
		var r,
			i = (r - 1) * n,
			o = Math.floor(i),
			a = +e(t[o], o, t),
			u = +e(t[o + 1], o + 1, t);
		return a + (u - a) * (i - o);
	}
}
function lh(t, n, e = Zi) {
	if (!isNaN((n = +n))) {
		if (((r = Float64Array.from(t, (u, c) => Zi(e(t[c], c, t)))), n <= 0)) return ms(r);
		if (n >= 1) return ps(r);
		var r,
			i = Uint32Array.from(t, (u, c) => c),
			o = r.length - 1,
			a = Math.floor(o * n);
		return (
			qo(i, a, 0, o, (u, c) => Ge(r[u], r[c])),
			(a = ch(i.subarray(0, a + 1), (u) => r[u])),
			a >= 0 ? a : -1
		);
	}
}
function _p(t, n, e) {
	const r = Uo(t),
		i = Br(t, 0.75) - Br(t, 0.25);
	return r && i ? Math.ceil((e - n) / (2 * i * Math.pow(r, -1 / 3))) : 1;
}
function wp(t, n, e) {
	const r = Uo(t),
		i = Kl(t);
	return r && i ? Math.ceil(((e - n) * Math.cbrt(r)) / (3.49 * i)) : 1;
}
function xp(t, n) {
	let e = 0,
		r = 0;
	if (n === void 0) for (let i of t) i != null && (i = +i) >= i && (++e, (r += i));
	else {
		let i = -1;
		for (let o of t) (o = n(o, ++i, t)) != null && (o = +o) >= o && (++e, (r += o));
	}
	if (e) return r / e;
}
function Mp(t, n) {
	return Br(t, 0.5, n);
}
function $p(t, n) {
	return lh(t, 0.5, n);
}
function* Tp(t) {
	for (const n of t) yield* n;
}
function ys(t) {
	return Array.from(Tp(t));
}
function Sp(t, n) {
	const e = new Fr();
	if (n === void 0) for (let o of t) o != null && o >= o && e.set(o, (e.get(o) || 0) + 1);
	else {
		let o = -1;
		for (let a of t) (a = n(a, ++o, t)) != null && a >= a && e.set(a, (e.get(a) || 0) + 1);
	}
	let r,
		i = 0;
	for (const [o, a] of e) a > i && ((i = a), (r = o));
	return r;
}
function kp(t, n = Ap) {
	const e = [];
	let r,
		i = !1;
	for (const o of t) i && e.push(n(r, o)), (r = o), (i = !0);
	return e;
}
function Ap(t, n) {
	return [t, n];
}
function Fn(t, n, e) {
	(t = +t), (n = +n), (e = (i = arguments.length) < 2 ? ((n = t), (t = 0), 1) : i < 3 ? 1 : +e);
	for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
		o[r] = t + r * e;
	return o;
}
function Ep(t, n = yt) {
	if (typeof t[Symbol.iterator] != 'function') throw new TypeError('values is not iterable');
	let e = Array.from(t);
	const r = new Float64Array(e.length);
	n.length !== 2 && ((e = e.map(n)), (n = yt));
	const i = (u, c) => n(e[u], e[c]);
	let o, a;
	return (
		(t = Uint32Array.from(e, (u, c) => c)),
		t.sort(n === yt ? (u, c) => Ge(e[u], e[c]) : hs(i)),
		t.forEach((u, c) => {
			const s = i(u, o === void 0 ? u : o);
			s >= 0 ? ((o === void 0 || s > 0) && ((o = u), (a = c)), (r[u] = a)) : (r[u] = NaN);
		}),
		r
	);
}
function Np(t, n = yt) {
	let e,
		r = !1;
	if (n.length === 1) {
		let i;
		for (const o of t) {
			const a = n(o);
			(r ? yt(a, i) < 0 : yt(a, a) === 0) && ((e = o), (i = a), (r = !0));
		}
	} else for (const i of t) (r ? n(i, e) < 0 : n(i, i) === 0) && ((e = i), (r = !0));
	return e;
}
function hh(t, n = yt) {
	if (n.length === 1) return ms(t, n);
	let e,
		r = -1,
		i = -1;
	for (const o of t) ++i, (r < 0 ? n(o, o) === 0 : n(o, e) < 0) && ((e = o), (r = i));
	return r;
}
function Cp(t, n = yt) {
	if (n.length === 1) return ps(t, n);
	let e,
		r = -1,
		i = -1;
	for (const o of t) ++i, (r < 0 ? n(o, o) === 0 : n(o, e) > 0) && ((e = o), (r = i));
	return r;
}
function Rp(t, n) {
	const e = hh(t, n);
	return e < 0 ? void 0 : e;
}
const Pp = dh(Math.random);
function dh(t) {
	return function (e, r = 0, i = e.length) {
		let o = i - (r = +r);
		for (; o; ) {
			const a = (t() * o--) | 0,
				u = e[o + r];
			(e[o + r] = e[a + r]), (e[a + r] = u);
		}
		return e;
	};
}
function Ip(t, n) {
	let e = 0;
	if (n === void 0) for (let r of t) (r = +r) && (e += r);
	else {
		let r = -1;
		for (let i of t) (i = +n(i, ++r, t)) && (e += i);
	}
	return e;
}
function gh(t) {
	if (!(o = t.length)) return [];
	for (var n = -1, e = Ji(t, zp), r = new Array(e); ++n < e; )
		for (var i = -1, o, a = (r[n] = new Array(o)); ++i < o; ) a[i] = t[i][n];
	return r;
}
function zp(t) {
	return t.length;
}
function Dp() {
	return gh(arguments);
}
function Op(t, n) {
	if (typeof n != 'function') throw new TypeError('test is not a function');
	let e = -1;
	for (const r of t) if (!n(r, ++e, t)) return !1;
	return !0;
}
function Fp(t, n) {
	if (typeof n != 'function') throw new TypeError('test is not a function');
	let e = -1;
	for (const r of t) if (n(r, ++e, t)) return !0;
	return !1;
}
function Lp(t, n) {
	if (typeof n != 'function') throw new TypeError('test is not a function');
	const e = [];
	let r = -1;
	for (const i of t) n(i, ++r, t) && e.push(i);
	return e;
}
function Bp(t, n) {
	if (typeof t[Symbol.iterator] != 'function') throw new TypeError('values is not iterable');
	if (typeof n != 'function') throw new TypeError('mapper is not a function');
	return Array.from(t, (e, r) => n(e, r, t));
}
function Up(t, n, e) {
	if (typeof n != 'function') throw new TypeError('reducer is not a function');
	const r = t[Symbol.iterator]();
	let i,
		o,
		a = -1;
	if (arguments.length < 3) {
		if ((({ done: i, value: e } = r.next()), i)) return;
		++a;
	}
	for (; ({ done: i, value: o } = r.next()), !i; ) e = n(e, o, ++a, t);
	return e;
}
function qp(t) {
	if (typeof t[Symbol.iterator] != 'function') throw new TypeError('values is not iterable');
	return Array.from(t).reverse();
}
function Yp(t, ...n) {
	t = new ae(t);
	for (const e of n) for (const r of e) t.delete(r);
	return t;
}
function Hp(t, n) {
	const e = n[Symbol.iterator](),
		r = new ae();
	for (const i of t) {
		if (r.has(i)) return !1;
		let o, a;
		for (; ({ value: o, done: a } = e.next()) && !a; ) {
			if (Object.is(i, o)) return !1;
			r.add(o);
		}
	}
	return !0;
}
function Xp(t, ...n) {
	(t = new ae(t)), (n = n.map(Gp));
	t: for (const e of t)
		for (const r of n)
			if (!r.has(e)) {
				t.delete(e);
				continue t;
			}
	return t;
}
function Gp(t) {
	return t instanceof ae ? t : new ae(t);
}
function ph(t, n) {
	const e = t[Symbol.iterator](),
		r = new Set();
	for (const i of n) {
		const o = Cc(i);
		if (r.has(o)) continue;
		let a, u;
		for (; ({ value: a, done: u } = e.next()); ) {
			if (u) return !1;
			const c = Cc(a);
			if ((r.add(c), Object.is(o, c))) break;
		}
	}
	return !0;
}
function Cc(t) {
	return t !== null && typeof t == 'object' ? t.valueOf() : t;
}
function Wp(t, n) {
	return ph(n, t);
}
function Vp(...t) {
	const n = new ae();
	for (const e of t) for (const r of e) n.add(r);
	return n;
}
function jp(t) {
	return t;
}
var Fi = 1,
	Li = 2,
	yu = 3,
	_r = 4,
	Rc = 1e-6;
function Zp(t) {
	return 'translate(' + t + ',0)';
}
function Qp(t) {
	return 'translate(0,' + t + ')';
}
function Kp(t) {
	return (n) => +t(n);
}
function Jp(t, n) {
	return (
		(n = Math.max(0, t.bandwidth() - n * 2) / 2), t.round() && (n = Math.round(n)), (e) => +t(e) + n
	);
}
function t2() {
	return !this.__axis;
}
function Yo(t, n) {
	var e = [],
		r = null,
		i = null,
		o = 6,
		a = 6,
		u = 3,
		c = typeof window < 'u' && window.devicePixelRatio > 1 ? 0 : 0.5,
		s = t === Fi || t === _r ? -1 : 1,
		f = t === _r || t === Li ? 'x' : 'y',
		h = t === Fi || t === yu ? Zp : Qp;
	function l(d) {
		var p = r ?? (n.ticks ? n.ticks.apply(n, e) : n.domain()),
			m = i ?? (n.tickFormat ? n.tickFormat.apply(n, e) : jp),
			g = Math.max(o, 0) + u,
			y = n.range(),
			_ = +y[0] + c,
			v = +y[y.length - 1] + c,
			b = (n.bandwidth ? Jp : Kp)(n.copy(), c),
			w = d.selection ? d.selection() : d,
			x = w.selectAll('.domain').data([null]),
			k = w.selectAll('.tick').data(p, n).order(),
			E = k.exit(),
			N = k.enter().append('g').attr('class', 'tick'),
			A = k.select('line'),
			$ = k.select('text');
		(x = x.merge(
			x.enter().insert('path', '.tick').attr('class', 'domain').attr('stroke', 'currentColor')
		)),
			(k = k.merge(N)),
			(A = A.merge(
				N.append('line')
					.attr('stroke', 'currentColor')
					.attr(f + '2', s * o)
			)),
			($ = $.merge(
				N.append('text')
					.attr('fill', 'currentColor')
					.attr(f, s * g)
					.attr('dy', t === Fi ? '0em' : t === yu ? '0.71em' : '0.32em')
			)),
			d !== w &&
				((x = x.transition(d)),
				(k = k.transition(d)),
				(A = A.transition(d)),
				($ = $.transition(d)),
				(E = E.transition(d)
					.attr('opacity', Rc)
					.attr('transform', function (P) {
						return isFinite((P = b(P))) ? h(P + c) : this.getAttribute('transform');
					})),
				N.attr('opacity', Rc).attr('transform', function (P) {
					var C = this.parentNode.__axis;
					return h((C && isFinite((C = C(P))) ? C : b(P)) + c);
				})),
			E.remove(),
			x.attr(
				'd',
				t === _r || t === Li
					? a
						? 'M' + s * a + ',' + _ + 'H' + c + 'V' + v + 'H' + s * a
						: 'M' + c + ',' + _ + 'V' + v
					: a
						? 'M' + _ + ',' + s * a + 'V' + c + 'H' + v + 'V' + s * a
						: 'M' + _ + ',' + c + 'H' + v
			),
			k.attr('opacity', 1).attr('transform', function (P) {
				return h(b(P) + c);
			}),
			A.attr(f + '2', s * o),
			$.attr(f, s * g).text(m),
			w
				.filter(t2)
				.attr('fill', 'none')
				.attr('font-size', 10)
				.attr('font-family', 'sans-serif')
				.attr('text-anchor', t === Li ? 'start' : t === _r ? 'end' : 'middle'),
			w.each(function () {
				this.__axis = b;
			});
	}
	return (
		(l.scale = function (d) {
			return arguments.length ? ((n = d), l) : n;
		}),
		(l.ticks = function () {
			return (e = Array.from(arguments)), l;
		}),
		(l.tickArguments = function (d) {
			return arguments.length ? ((e = d == null ? [] : Array.from(d)), l) : e.slice();
		}),
		(l.tickValues = function (d) {
			return arguments.length ? ((r = d == null ? null : Array.from(d)), l) : r && r.slice();
		}),
		(l.tickFormat = function (d) {
			return arguments.length ? ((i = d), l) : i;
		}),
		(l.tickSize = function (d) {
			return arguments.length ? ((o = a = +d), l) : o;
		}),
		(l.tickSizeInner = function (d) {
			return arguments.length ? ((o = +d), l) : o;
		}),
		(l.tickSizeOuter = function (d) {
			return arguments.length ? ((a = +d), l) : a;
		}),
		(l.tickPadding = function (d) {
			return arguments.length ? ((u = +d), l) : u;
		}),
		(l.offset = function (d) {
			return arguments.length ? ((c = +d), l) : c;
		}),
		l
	);
}
function n2(t) {
	return Yo(Fi, t);
}
function e2(t) {
	return Yo(Li, t);
}
function r2(t) {
	return Yo(yu, t);
}
function i2(t) {
	return Yo(_r, t);
}
var o2 = { value: () => {} };
function ye() {
	for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
		if (!(r = arguments[t] + '') || r in e || /[\s.]/.test(r))
			throw new Error('illegal type: ' + r);
		e[r] = [];
	}
	return new Bi(e);
}
function Bi(t) {
	this._ = t;
}
function a2(t, n) {
	return t
		.trim()
		.split(/^|\s+/)
		.map(function (e) {
			var r = '',
				i = e.indexOf('.');
			if ((i >= 0 && ((r = e.slice(i + 1)), (e = e.slice(0, i))), e && !n.hasOwnProperty(e)))
				throw new Error('unknown type: ' + e);
			return { type: e, name: r };
		});
}
Bi.prototype = ye.prototype = {
	constructor: Bi,
	on: function (t, n) {
		var e = this._,
			r = a2(t + '', e),
			i,
			o = -1,
			a = r.length;
		if (arguments.length < 2) {
			for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = u2(e[i], t.name))) return i;
			return;
		}
		if (n != null && typeof n != 'function') throw new Error('invalid callback: ' + n);
		for (; ++o < a; )
			if ((i = (t = r[o]).type)) e[i] = Pc(e[i], t.name, n);
			else if (n == null) for (i in e) e[i] = Pc(e[i], t.name, null);
		return this;
	},
	copy: function () {
		var t = {},
			n = this._;
		for (var e in n) t[e] = n[e].slice();
		return new Bi(t);
	},
	call: function (t, n) {
		if ((i = arguments.length - 2) > 0)
			for (var e = new Array(i), r = 0, i, o; r < i; ++r) e[r] = arguments[r + 2];
		if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t);
		for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(n, e);
	},
	apply: function (t, n, e) {
		if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t);
		for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
	}
};
function u2(t, n) {
	for (var e = 0, r = t.length, i; e < r; ++e) if ((i = t[e]).name === n) return i.value;
}
function Pc(t, n, e) {
	for (var r = 0, i = t.length; r < i; ++r)
		if (t[r].name === n) {
			(t[r] = o2), (t = t.slice(0, r).concat(t.slice(r + 1)));
			break;
		}
	return e != null && t.push({ name: n, value: e }), t;
}
var bu = 'http://www.w3.org/1999/xhtml';
const vu = {
	svg: 'http://www.w3.org/2000/svg',
	xhtml: bu,
	xlink: 'http://www.w3.org/1999/xlink',
	xml: 'http://www.w3.org/XML/1998/namespace',
	xmlns: 'http://www.w3.org/2000/xmlns/'
};
function ei(t) {
	var n = (t += ''),
		e = n.indexOf(':');
	return (
		e >= 0 && (n = t.slice(0, e)) !== 'xmlns' && (t = t.slice(e + 1)),
		vu.hasOwnProperty(n) ? { space: vu[n], local: t } : t
	);
}
function s2(t) {
	return function () {
		var n = this.ownerDocument,
			e = this.namespaceURI;
		return e === bu && n.documentElement.namespaceURI === bu
			? n.createElement(t)
			: n.createElementNS(e, t);
	};
}
function c2(t) {
	return function () {
		return this.ownerDocument.createElementNS(t.space, t.local);
	};
}
function Ho(t) {
	var n = ei(t);
	return (n.local ? c2 : s2)(n);
}
function f2() {}
function Xo(t) {
	return t == null
		? f2
		: function () {
				return this.querySelector(t);
			};
}
function l2(t) {
	typeof t != 'function' && (t = Xo(t));
	for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
		for (var o = n[i], a = o.length, u = (r[i] = new Array(a)), c, s, f = 0; f < a; ++f)
			(c = o[f]) &&
				(s = t.call(c, c.__data__, f, o)) &&
				('__data__' in c && (s.__data__ = c.__data__), (u[f] = s));
	return new Lt(r, this._parents);
}
function mh(t) {
	return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function h2() {
	return [];
}
function bs(t) {
	return t == null
		? h2
		: function () {
				return this.querySelectorAll(t);
			};
}
function d2(t) {
	return function () {
		return mh(t.apply(this, arguments));
	};
}
function g2(t) {
	typeof t == 'function' ? (t = d2(t)) : (t = bs(t));
	for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
		for (var a = n[o], u = a.length, c, s = 0; s < u; ++s)
			(c = a[s]) && (r.push(t.call(c, c.__data__, s, a)), i.push(c));
	return new Lt(r, i);
}
function vs(t) {
	return function () {
		return this.matches(t);
	};
}
function yh(t) {
	return function (n) {
		return n.matches(t);
	};
}
var p2 = Array.prototype.find;
function m2(t) {
	return function () {
		return p2.call(this.children, t);
	};
}
function y2() {
	return this.firstElementChild;
}
function b2(t) {
	return this.select(t == null ? y2 : m2(typeof t == 'function' ? t : yh(t)));
}
var v2 = Array.prototype.filter;
function _2() {
	return Array.from(this.children);
}
function w2(t) {
	return function () {
		return v2.call(this.children, t);
	};
}
function x2(t) {
	return this.selectAll(t == null ? _2 : w2(typeof t == 'function' ? t : yh(t)));
}
function M2(t) {
	typeof t != 'function' && (t = vs(t));
	for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
		for (var o = n[i], a = o.length, u = (r[i] = []), c, s = 0; s < a; ++s)
			(c = o[s]) && t.call(c, c.__data__, s, o) && u.push(c);
	return new Lt(r, this._parents);
}
function bh(t) {
	return new Array(t.length);
}
function $2() {
	return new Lt(this._enter || this._groups.map(bh), this._parents);
}
function to(t, n) {
	(this.ownerDocument = t.ownerDocument),
		(this.namespaceURI = t.namespaceURI),
		(this._next = null),
		(this._parent = t),
		(this.__data__ = n);
}
to.prototype = {
	constructor: to,
	appendChild: function (t) {
		return this._parent.insertBefore(t, this._next);
	},
	insertBefore: function (t, n) {
		return this._parent.insertBefore(t, n);
	},
	querySelector: function (t) {
		return this._parent.querySelector(t);
	},
	querySelectorAll: function (t) {
		return this._parent.querySelectorAll(t);
	}
};
function T2(t) {
	return function () {
		return t;
	};
}
function S2(t, n, e, r, i, o) {
	for (var a = 0, u, c = n.length, s = o.length; a < s; ++a)
		(u = n[a]) ? ((u.__data__ = o[a]), (r[a] = u)) : (e[a] = new to(t, o[a]));
	for (; a < c; ++a) (u = n[a]) && (i[a] = u);
}
function k2(t, n, e, r, i, o, a) {
	var u,
		c,
		s = new Map(),
		f = n.length,
		h = o.length,
		l = new Array(f),
		d;
	for (u = 0; u < f; ++u)
		(c = n[u]) &&
			((l[u] = d = a.call(c, c.__data__, u, n) + ''), s.has(d) ? (i[u] = c) : s.set(d, c));
	for (u = 0; u < h; ++u)
		(d = a.call(t, o[u], u, o) + ''),
			(c = s.get(d)) ? ((r[u] = c), (c.__data__ = o[u]), s.delete(d)) : (e[u] = new to(t, o[u]));
	for (u = 0; u < f; ++u) (c = n[u]) && s.get(l[u]) === c && (i[u] = c);
}
function A2(t) {
	return t.__data__;
}
function E2(t, n) {
	if (!arguments.length) return Array.from(this, A2);
	var e = n ? k2 : S2,
		r = this._parents,
		i = this._groups;
	typeof t != 'function' && (t = T2(t));
	for (var o = i.length, a = new Array(o), u = new Array(o), c = new Array(o), s = 0; s < o; ++s) {
		var f = r[s],
			h = i[s],
			l = h.length,
			d = N2(t.call(f, f && f.__data__, s, r)),
			p = d.length,
			m = (u[s] = new Array(p)),
			g = (a[s] = new Array(p)),
			y = (c[s] = new Array(l));
		e(f, h, m, g, y, d, n);
		for (var _ = 0, v = 0, b, w; _ < p; ++_)
			if ((b = m[_])) {
				for (_ >= v && (v = _ + 1); !(w = g[v]) && ++v < p; );
				b._next = w || null;
			}
	}
	return (a = new Lt(a, r)), (a._enter = u), (a._exit = c), a;
}
function N2(t) {
	return typeof t == 'object' && 'length' in t ? t : Array.from(t);
}
function C2() {
	return new Lt(this._exit || this._groups.map(bh), this._parents);
}
function R2(t, n, e) {
	var r = this.enter(),
		i = this,
		o = this.exit();
	return (
		typeof t == 'function' ? ((r = t(r)), r && (r = r.selection())) : (r = r.append(t + '')),
		n != null && ((i = n(i)), i && (i = i.selection())),
		e == null ? o.remove() : e(o),
		r && i ? r.merge(i).order() : i
	);
}
function P2(t) {
	for (
		var n = t.selection ? t.selection() : t,
			e = this._groups,
			r = n._groups,
			i = e.length,
			o = r.length,
			a = Math.min(i, o),
			u = new Array(i),
			c = 0;
		c < a;
		++c
	)
		for (var s = e[c], f = r[c], h = s.length, l = (u[c] = new Array(h)), d, p = 0; p < h; ++p)
			(d = s[p] || f[p]) && (l[p] = d);
	for (; c < i; ++c) u[c] = e[c];
	return new Lt(u, this._parents);
}
function I2() {
	for (var t = this._groups, n = -1, e = t.length; ++n < e; )
		for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
			(a = r[i]) &&
				(o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), (o = a));
	return this;
}
function z2(t) {
	t || (t = D2);
	function n(h, l) {
		return h && l ? t(h.__data__, l.__data__) : !h - !l;
	}
	for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
		for (var a = e[o], u = a.length, c = (i[o] = new Array(u)), s, f = 0; f < u; ++f)
			(s = a[f]) && (c[f] = s);
		c.sort(n);
	}
	return new Lt(i, this._parents).order();
}
function D2(t, n) {
	return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function O2() {
	var t = arguments[0];
	return (arguments[0] = this), t.apply(null, arguments), this;
}
function F2() {
	return Array.from(this);
}
function L2() {
	for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
		for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
			var a = r[i];
			if (a) return a;
		}
	return null;
}
function B2() {
	let t = 0;
	for (const n of this) ++t;
	return t;
}
function U2() {
	return !this.node();
}
function q2(t) {
	for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
		for (var i = n[e], o = 0, a = i.length, u; o < a; ++o)
			(u = i[o]) && t.call(u, u.__data__, o, i);
	return this;
}
function Y2(t) {
	return function () {
		this.removeAttribute(t);
	};
}
function H2(t) {
	return function () {
		this.removeAttributeNS(t.space, t.local);
	};
}
function X2(t, n) {
	return function () {
		this.setAttribute(t, n);
	};
}
function G2(t, n) {
	return function () {
		this.setAttributeNS(t.space, t.local, n);
	};
}
function W2(t, n) {
	return function () {
		var e = n.apply(this, arguments);
		e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
	};
}
function V2(t, n) {
	return function () {
		var e = n.apply(this, arguments);
		e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
	};
}
function j2(t, n) {
	var e = ei(t);
	if (arguments.length < 2) {
		var r = this.node();
		return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
	}
	return this.each(
		(n == null
			? e.local
				? H2
				: Y2
			: typeof n == 'function'
				? e.local
					? V2
					: W2
				: e.local
					? G2
					: X2)(e, n)
	);
}
function _s(t) {
	return (t.ownerDocument && t.ownerDocument.defaultView) || (t.document && t) || t.defaultView;
}
function Z2(t) {
	return function () {
		this.style.removeProperty(t);
	};
}
function Q2(t, n, e) {
	return function () {
		this.style.setProperty(t, n, e);
	};
}
function K2(t, n, e) {
	return function () {
		var r = n.apply(this, arguments);
		r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
	};
}
function J2(t, n, e) {
	return arguments.length > 1
		? this.each((n == null ? Z2 : typeof n == 'function' ? K2 : Q2)(t, n, e ?? ''))
		: ce(this.node(), t);
}
function ce(t, n) {
	return t.style.getPropertyValue(n) || _s(t).getComputedStyle(t, null).getPropertyValue(n);
}
function tm(t) {
	return function () {
		delete this[t];
	};
}
function nm(t, n) {
	return function () {
		this[t] = n;
	};
}
function em(t, n) {
	return function () {
		var e = n.apply(this, arguments);
		e == null ? delete this[t] : (this[t] = e);
	};
}
function rm(t, n) {
	return arguments.length > 1
		? this.each((n == null ? tm : typeof n == 'function' ? em : nm)(t, n))
		: this.node()[t];
}
function vh(t) {
	return t.trim().split(/^|\s+/);
}
function ws(t) {
	return t.classList || new _h(t);
}
function _h(t) {
	(this._node = t), (this._names = vh(t.getAttribute('class') || ''));
}
_h.prototype = {
	add: function (t) {
		var n = this._names.indexOf(t);
		n < 0 && (this._names.push(t), this._node.setAttribute('class', this._names.join(' ')));
	},
	remove: function (t) {
		var n = this._names.indexOf(t);
		n >= 0 && (this._names.splice(n, 1), this._node.setAttribute('class', this._names.join(' ')));
	},
	contains: function (t) {
		return this._names.indexOf(t) >= 0;
	}
};
function wh(t, n) {
	for (var e = ws(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function xh(t, n) {
	for (var e = ws(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function im(t) {
	return function () {
		wh(this, t);
	};
}
function om(t) {
	return function () {
		xh(this, t);
	};
}
function am(t, n) {
	return function () {
		(n.apply(this, arguments) ? wh : xh)(this, t);
	};
}
function um(t, n) {
	var e = vh(t + '');
	if (arguments.length < 2) {
		for (var r = ws(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
		return !0;
	}
	return this.each((typeof n == 'function' ? am : n ? im : om)(e, n));
}
function sm() {
	this.textContent = '';
}
function cm(t) {
	return function () {
		this.textContent = t;
	};
}
function fm(t) {
	return function () {
		var n = t.apply(this, arguments);
		this.textContent = n ?? '';
	};
}
function lm(t) {
	return arguments.length
		? this.each(t == null ? sm : (typeof t == 'function' ? fm : cm)(t))
		: this.node().textContent;
}
function hm() {
	this.innerHTML = '';
}
function dm(t) {
	return function () {
		this.innerHTML = t;
	};
}
function gm(t) {
	return function () {
		var n = t.apply(this, arguments);
		this.innerHTML = n ?? '';
	};
}
function pm(t) {
	return arguments.length
		? this.each(t == null ? hm : (typeof t == 'function' ? gm : dm)(t))
		: this.node().innerHTML;
}
function mm() {
	this.nextSibling && this.parentNode.appendChild(this);
}
function ym() {
	return this.each(mm);
}
function bm() {
	this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function vm() {
	return this.each(bm);
}
function _m(t) {
	var n = typeof t == 'function' ? t : Ho(t);
	return this.select(function () {
		return this.appendChild(n.apply(this, arguments));
	});
}
function wm() {
	return null;
}
function xm(t, n) {
	var e = typeof t == 'function' ? t : Ho(t),
		r = n == null ? wm : typeof n == 'function' ? n : Xo(n);
	return this.select(function () {
		return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
	});
}
function Mm() {
	var t = this.parentNode;
	t && t.removeChild(this);
}
function $m() {
	return this.each(Mm);
}
function Tm() {
	var t = this.cloneNode(!1),
		n = this.parentNode;
	return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Sm() {
	var t = this.cloneNode(!0),
		n = this.parentNode;
	return n ? n.insertBefore(t, this.nextSibling) : t;
}
function km(t) {
	return this.select(t ? Sm : Tm);
}
function Am(t) {
	return arguments.length ? this.property('__data__', t) : this.node().__data__;
}
function Em(t) {
	return function (n) {
		t.call(this, n, this.__data__);
	};
}
function Nm(t) {
	return t
		.trim()
		.split(/^|\s+/)
		.map(function (n) {
			var e = '',
				r = n.indexOf('.');
			return r >= 0 && ((e = n.slice(r + 1)), (n = n.slice(0, r))), { type: n, name: e };
		});
}
function Cm(t) {
	return function () {
		var n = this.__on;
		if (n) {
			for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
				(o = n[e]),
					(!t.type || o.type === t.type) && o.name === t.name
						? this.removeEventListener(o.type, o.listener, o.options)
						: (n[++r] = o);
			++r ? (n.length = r) : delete this.__on;
		}
	};
}
function Rm(t, n, e) {
	return function () {
		var r = this.__on,
			i,
			o = Em(n);
		if (r) {
			for (var a = 0, u = r.length; a < u; ++a)
				if ((i = r[a]).type === t.type && i.name === t.name) {
					this.removeEventListener(i.type, i.listener, i.options),
						this.addEventListener(i.type, (i.listener = o), (i.options = e)),
						(i.value = n);
					return;
				}
		}
		this.addEventListener(t.type, o, e),
			(i = { type: t.type, name: t.name, value: n, listener: o, options: e }),
			r ? r.push(i) : (this.__on = [i]);
	};
}
function Pm(t, n, e) {
	var r = Nm(t + ''),
		i,
		o = r.length,
		a;
	if (arguments.length < 2) {
		var u = this.node().__on;
		if (u) {
			for (var c = 0, s = u.length, f; c < s; ++c)
				for (i = 0, f = u[c]; i < o; ++i)
					if ((a = r[i]).type === f.type && a.name === f.name) return f.value;
		}
		return;
	}
	for (u = n ? Rm : Cm, i = 0; i < o; ++i) this.each(u(r[i], n, e));
	return this;
}
function Mh(t, n, e) {
	var r = _s(t),
		i = r.CustomEvent;
	typeof i == 'function'
		? (i = new i(n, e))
		: ((i = r.document.createEvent('Event')),
			e
				? (i.initEvent(n, e.bubbles, e.cancelable), (i.detail = e.detail))
				: i.initEvent(n, !1, !1)),
		t.dispatchEvent(i);
}
function Im(t, n) {
	return function () {
		return Mh(this, t, n);
	};
}
function zm(t, n) {
	return function () {
		return Mh(this, t, n.apply(this, arguments));
	};
}
function Dm(t, n) {
	return this.each((typeof n == 'function' ? zm : Im)(t, n));
}
function* Om() {
	for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
		for (var r = t[n], i = 0, o = r.length, a; i < o; ++i) (a = r[i]) && (yield a);
}
var xs = [null];
function Lt(t, n) {
	(this._groups = t), (this._parents = n);
}
function be() {
	return new Lt([[document.documentElement]], xs);
}
function Fm() {
	return this;
}
Lt.prototype = be.prototype = {
	constructor: Lt,
	select: l2,
	selectAll: g2,
	selectChild: b2,
	selectChildren: x2,
	filter: M2,
	data: E2,
	enter: $2,
	exit: C2,
	join: R2,
	merge: P2,
	selection: Fm,
	order: I2,
	sort: z2,
	call: O2,
	nodes: F2,
	node: L2,
	size: B2,
	empty: U2,
	each: q2,
	attr: j2,
	style: J2,
	property: rm,
	classed: um,
	text: lm,
	html: pm,
	raise: ym,
	lower: vm,
	append: _m,
	insert: xm,
	remove: $m,
	clone: km,
	datum: Am,
	on: Pm,
	dispatch: Dm,
	[Symbol.iterator]: Om
};
function ht(t) {
	return typeof t == 'string'
		? new Lt([[document.querySelector(t)]], [document.documentElement])
		: new Lt([[t]], xs);
}
function Lm(t) {
	return ht(Ho(t).call(document.documentElement));
}
var Bm = 0;
function $h() {
	return new _u();
}
function _u() {
	this._ = '@' + (++Bm).toString(36);
}
_u.prototype = $h.prototype = {
	constructor: _u,
	get: function (t) {
		for (var n = this._; !(n in t); ) if (!(t = t.parentNode)) return;
		return t[n];
	},
	set: function (t, n) {
		return (t[this._] = n);
	},
	remove: function (t) {
		return this._ in t && delete t[this._];
	},
	toString: function () {
		return this._;
	}
};
function Th(t) {
	let n;
	for (; (n = t.sourceEvent); ) t = n;
	return t;
}
function Zt(t, n) {
	if (((t = Th(t)), n === void 0 && (n = t.currentTarget), n)) {
		var e = n.ownerSVGElement || n;
		if (e.createSVGPoint) {
			var r = e.createSVGPoint();
			return (
				(r.x = t.clientX),
				(r.y = t.clientY),
				(r = r.matrixTransform(n.getScreenCTM().inverse())),
				[r.x, r.y]
			);
		}
		if (n.getBoundingClientRect) {
			var i = n.getBoundingClientRect();
			return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
		}
	}
	return [t.pageX, t.pageY];
}
function Um(t, n) {
	return (
		t.target && ((t = Th(t)), n === void 0 && (n = t.currentTarget), (t = t.touches || [t])),
		Array.from(t, (e) => Zt(e, n))
	);
}
function qm(t) {
	return typeof t == 'string'
		? new Lt([document.querySelectorAll(t)], [document.documentElement])
		: new Lt([mh(t)], xs);
}
const Ym = { passive: !1 },
	Ur = { capture: !0, passive: !1 };
function Ra(t) {
	t.stopImmediatePropagation();
}
function Be(t) {
	t.preventDefault(), t.stopImmediatePropagation();
}
function Go(t) {
	var n = t.document.documentElement,
		e = ht(t).on('dragstart.drag', Be, Ur);
	'onselectstart' in n
		? e.on('selectstart.drag', Be, Ur)
		: ((n.__noselect = n.style.MozUserSelect), (n.style.MozUserSelect = 'none'));
}
function Wo(t, n) {
	var e = t.document.documentElement,
		r = ht(t).on('dragstart.drag', null);
	n &&
		(r.on('click.drag', Be, Ur),
		setTimeout(function () {
			r.on('click.drag', null);
		}, 0)),
		'onselectstart' in e
			? r.on('selectstart.drag', null)
			: ((e.style.MozUserSelect = e.__noselect), delete e.__noselect);
}
const yi = (t) => () => t;
function wu(
	t,
	{
		sourceEvent: n,
		subject: e,
		target: r,
		identifier: i,
		active: o,
		x: a,
		y: u,
		dx: c,
		dy: s,
		dispatch: f
	}
) {
	Object.defineProperties(this, {
		type: { value: t, enumerable: !0, configurable: !0 },
		sourceEvent: { value: n, enumerable: !0, configurable: !0 },
		subject: { value: e, enumerable: !0, configurable: !0 },
		target: { value: r, enumerable: !0, configurable: !0 },
		identifier: { value: i, enumerable: !0, configurable: !0 },
		active: { value: o, enumerable: !0, configurable: !0 },
		x: { value: a, enumerable: !0, configurable: !0 },
		y: { value: u, enumerable: !0, configurable: !0 },
		dx: { value: c, enumerable: !0, configurable: !0 },
		dy: { value: s, enumerable: !0, configurable: !0 },
		_: { value: f }
	});
}
wu.prototype.on = function () {
	var t = this._.on.apply(this._, arguments);
	return t === this._ ? this : t;
};
function Hm(t) {
	return !t.ctrlKey && !t.button;
}
function Xm() {
	return this.parentNode;
}
function Gm(t, n) {
	return n ?? { x: t.x, y: t.y };
}
function Wm() {
	return navigator.maxTouchPoints || 'ontouchstart' in this;
}
function Sh() {
	var t = Hm,
		n = Xm,
		e = Gm,
		r = Wm,
		i = {},
		o = ye('start', 'drag', 'end'),
		a = 0,
		u,
		c,
		s,
		f,
		h = 0;
	function l(b) {
		b.on('mousedown.drag', d)
			.filter(r)
			.on('touchstart.drag', g)
			.on('touchmove.drag', y, Ym)
			.on('touchend.drag touchcancel.drag', _)
			.style('touch-action', 'none')
			.style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
	}
	function d(b, w) {
		if (!(f || !t.call(this, b, w))) {
			var x = v(this, n.call(this, b, w), b, w, 'mouse');
			x &&
				(ht(b.view).on('mousemove.drag', p, Ur).on('mouseup.drag', m, Ur),
				Go(b.view),
				Ra(b),
				(s = !1),
				(u = b.clientX),
				(c = b.clientY),
				x('start', b));
		}
	}
	function p(b) {
		if ((Be(b), !s)) {
			var w = b.clientX - u,
				x = b.clientY - c;
			s = w * w + x * x > h;
		}
		i.mouse('drag', b);
	}
	function m(b) {
		ht(b.view).on('mousemove.drag mouseup.drag', null), Wo(b.view, s), Be(b), i.mouse('end', b);
	}
	function g(b, w) {
		if (t.call(this, b, w)) {
			var x = b.changedTouches,
				k = n.call(this, b, w),
				E = x.length,
				N,
				A;
			for (N = 0; N < E; ++N)
				(A = v(this, k, b, w, x[N].identifier, x[N])) && (Ra(b), A('start', b, x[N]));
		}
	}
	function y(b) {
		var w = b.changedTouches,
			x = w.length,
			k,
			E;
		for (k = 0; k < x; ++k) (E = i[w[k].identifier]) && (Be(b), E('drag', b, w[k]));
	}
	function _(b) {
		var w = b.changedTouches,
			x = w.length,
			k,
			E;
		for (
			f && clearTimeout(f),
				f = setTimeout(function () {
					f = null;
				}, 500),
				k = 0;
			k < x;
			++k
		)
			(E = i[w[k].identifier]) && (Ra(b), E('end', b, w[k]));
	}
	function v(b, w, x, k, E, N) {
		var A = o.copy(),
			$ = Zt(N || x, w),
			P,
			C,
			M;
		if (
			(M = e.call(
				b,
				new wu('beforestart', {
					sourceEvent: x,
					target: l,
					identifier: E,
					active: a,
					x: $[0],
					y: $[1],
					dx: 0,
					dy: 0,
					dispatch: A
				}),
				k
			)) != null
		)
			return (
				(P = M.x - $[0] || 0),
				(C = M.y - $[1] || 0),
				function S(T, R, O) {
					var z = $,
						L;
					switch (T) {
						case 'start':
							(i[E] = S), (L = a++);
							break;
						case 'end':
							delete i[E], --a;
						case 'drag':
							($ = Zt(O || R, w)), (L = a);
							break;
					}
					A.call(
						T,
						b,
						new wu(T, {
							sourceEvent: R,
							subject: M,
							target: l,
							identifier: E,
							active: L,
							x: $[0] + P,
							y: $[1] + C,
							dx: $[0] - z[0],
							dy: $[1] - z[1],
							dispatch: A
						}),
						k
					);
				}
			);
	}
	return (
		(l.filter = function (b) {
			return arguments.length ? ((t = typeof b == 'function' ? b : yi(!!b)), l) : t;
		}),
		(l.container = function (b) {
			return arguments.length ? ((n = typeof b == 'function' ? b : yi(b)), l) : n;
		}),
		(l.subject = function (b) {
			return arguments.length ? ((e = typeof b == 'function' ? b : yi(b)), l) : e;
		}),
		(l.touchable = function (b) {
			return arguments.length ? ((r = typeof b == 'function' ? b : yi(!!b)), l) : r;
		}),
		(l.on = function () {
			var b = o.on.apply(o, arguments);
			return b === o ? l : b;
		}),
		(l.clickDistance = function (b) {
			return arguments.length ? ((h = (b = +b) * b), l) : Math.sqrt(h);
		}),
		l
	);
}
function sr(t, n, e) {
	(t.prototype = n.prototype = e), (e.constructor = t);
}
function ri(t, n) {
	var e = Object.create(t.prototype);
	for (var r in n) e[r] = n[r];
	return e;
}
function Gn() {}
var fe = 0.7,
	We = 1 / fe,
	Ue = '\\s*([+-]?\\d+)\\s*',
	qr = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
	mn = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
	Vm = /^#([0-9a-f]{3,8})$/,
	jm = new RegExp(`^rgb\\(${Ue},${Ue},${Ue}\\)$`),
	Zm = new RegExp(`^rgb\\(${mn},${mn},${mn}\\)$`),
	Qm = new RegExp(`^rgba\\(${Ue},${Ue},${Ue},${qr}\\)$`),
	Km = new RegExp(`^rgba\\(${mn},${mn},${mn},${qr}\\)$`),
	Jm = new RegExp(`^hsl\\(${qr},${mn},${mn}\\)$`),
	ty = new RegExp(`^hsla\\(${qr},${mn},${mn},${qr}\\)$`),
	Ic = {
		aliceblue: 15792383,
		antiquewhite: 16444375,
		aqua: 65535,
		aquamarine: 8388564,
		azure: 15794175,
		beige: 16119260,
		bisque: 16770244,
		black: 0,
		blanchedalmond: 16772045,
		blue: 255,
		blueviolet: 9055202,
		brown: 10824234,
		burlywood: 14596231,
		cadetblue: 6266528,
		chartreuse: 8388352,
		chocolate: 13789470,
		coral: 16744272,
		cornflowerblue: 6591981,
		cornsilk: 16775388,
		crimson: 14423100,
		cyan: 65535,
		darkblue: 139,
		darkcyan: 35723,
		darkgoldenrod: 12092939,
		darkgray: 11119017,
		darkgreen: 25600,
		darkgrey: 11119017,
		darkkhaki: 12433259,
		darkmagenta: 9109643,
		darkolivegreen: 5597999,
		darkorange: 16747520,
		darkorchid: 10040012,
		darkred: 9109504,
		darksalmon: 15308410,
		darkseagreen: 9419919,
		darkslateblue: 4734347,
		darkslategray: 3100495,
		darkslategrey: 3100495,
		darkturquoise: 52945,
		darkviolet: 9699539,
		deeppink: 16716947,
		deepskyblue: 49151,
		dimgray: 6908265,
		dimgrey: 6908265,
		dodgerblue: 2003199,
		firebrick: 11674146,
		floralwhite: 16775920,
		forestgreen: 2263842,
		fuchsia: 16711935,
		gainsboro: 14474460,
		ghostwhite: 16316671,
		gold: 16766720,
		goldenrod: 14329120,
		gray: 8421504,
		green: 32768,
		greenyellow: 11403055,
		grey: 8421504,
		honeydew: 15794160,
		hotpink: 16738740,
		indianred: 13458524,
		indigo: 4915330,
		ivory: 16777200,
		khaki: 15787660,
		lavender: 15132410,
		lavenderblush: 16773365,
		lawngreen: 8190976,
		lemonchiffon: 16775885,
		lightblue: 11393254,
		lightcoral: 15761536,
		lightcyan: 14745599,
		lightgoldenrodyellow: 16448210,
		lightgray: 13882323,
		lightgreen: 9498256,
		lightgrey: 13882323,
		lightpink: 16758465,
		lightsalmon: 16752762,
		lightseagreen: 2142890,
		lightskyblue: 8900346,
		lightslategray: 7833753,
		lightslategrey: 7833753,
		lightsteelblue: 11584734,
		lightyellow: 16777184,
		lime: 65280,
		limegreen: 3329330,
		linen: 16445670,
		magenta: 16711935,
		maroon: 8388608,
		mediumaquamarine: 6737322,
		mediumblue: 205,
		mediumorchid: 12211667,
		mediumpurple: 9662683,
		mediumseagreen: 3978097,
		mediumslateblue: 8087790,
		mediumspringgreen: 64154,
		mediumturquoise: 4772300,
		mediumvioletred: 13047173,
		midnightblue: 1644912,
		mintcream: 16121850,
		mistyrose: 16770273,
		moccasin: 16770229,
		navajowhite: 16768685,
		navy: 128,
		oldlace: 16643558,
		olive: 8421376,
		olivedrab: 7048739,
		orange: 16753920,
		orangered: 16729344,
		orchid: 14315734,
		palegoldenrod: 15657130,
		palegreen: 10025880,
		paleturquoise: 11529966,
		palevioletred: 14381203,
		papayawhip: 16773077,
		peachpuff: 16767673,
		peru: 13468991,
		pink: 16761035,
		plum: 14524637,
		powderblue: 11591910,
		purple: 8388736,
		rebeccapurple: 6697881,
		red: 16711680,
		rosybrown: 12357519,
		royalblue: 4286945,
		saddlebrown: 9127187,
		salmon: 16416882,
		sandybrown: 16032864,
		seagreen: 3050327,
		seashell: 16774638,
		sienna: 10506797,
		silver: 12632256,
		skyblue: 8900331,
		slateblue: 6970061,
		slategray: 7372944,
		slategrey: 7372944,
		snow: 16775930,
		springgreen: 65407,
		steelblue: 4620980,
		tan: 13808780,
		teal: 32896,
		thistle: 14204888,
		tomato: 16737095,
		turquoise: 4251856,
		violet: 15631086,
		wheat: 16113331,
		white: 16777215,
		whitesmoke: 16119285,
		yellow: 16776960,
		yellowgreen: 10145074
	};
sr(Gn, qn, {
	copy(t) {
		return Object.assign(new this.constructor(), this, t);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: zc,
	formatHex: zc,
	formatHex8: ny,
	formatHsl: ey,
	formatRgb: Dc,
	toString: Dc
});
function zc() {
	return this.rgb().formatHex();
}
function ny() {
	return this.rgb().formatHex8();
}
function ey() {
	return kh(this).formatHsl();
}
function Dc() {
	return this.rgb().formatRgb();
}
function qn(t) {
	var n, e;
	return (
		(t = (t + '').trim().toLowerCase()),
		(n = Vm.exec(t))
			? ((e = n[1].length),
				(n = parseInt(n[1], 16)),
				e === 6
					? Oc(n)
					: e === 3
						? new Mt(
								((n >> 8) & 15) | ((n >> 4) & 240),
								((n >> 4) & 15) | (n & 240),
								((n & 15) << 4) | (n & 15),
								1
							)
						: e === 8
							? bi((n >> 24) & 255, (n >> 16) & 255, (n >> 8) & 255, (n & 255) / 255)
							: e === 4
								? bi(
										((n >> 12) & 15) | ((n >> 8) & 240),
										((n >> 8) & 15) | ((n >> 4) & 240),
										((n >> 4) & 15) | (n & 240),
										(((n & 15) << 4) | (n & 15)) / 255
									)
								: null)
			: (n = jm.exec(t))
				? new Mt(n[1], n[2], n[3], 1)
				: (n = Zm.exec(t))
					? new Mt((n[1] * 255) / 100, (n[2] * 255) / 100, (n[3] * 255) / 100, 1)
					: (n = Qm.exec(t))
						? bi(n[1], n[2], n[3], n[4])
						: (n = Km.exec(t))
							? bi((n[1] * 255) / 100, (n[2] * 255) / 100, (n[3] * 255) / 100, n[4])
							: (n = Jm.exec(t))
								? Bc(n[1], n[2] / 100, n[3] / 100, 1)
								: (n = ty.exec(t))
									? Bc(n[1], n[2] / 100, n[3] / 100, n[4])
									: Ic.hasOwnProperty(t)
										? Oc(Ic[t])
										: t === 'transparent'
											? new Mt(NaN, NaN, NaN, 0)
											: null
	);
}
function Oc(t) {
	return new Mt((t >> 16) & 255, (t >> 8) & 255, t & 255, 1);
}
function bi(t, n, e, r) {
	return r <= 0 && (t = n = e = NaN), new Mt(t, n, e, r);
}
function Ms(t) {
	return (
		t instanceof Gn || (t = qn(t)), t ? ((t = t.rgb()), new Mt(t.r, t.g, t.b, t.opacity)) : new Mt()
	);
}
function Ve(t, n, e, r) {
	return arguments.length === 1 ? Ms(t) : new Mt(t, n, e, r ?? 1);
}
function Mt(t, n, e, r) {
	(this.r = +t), (this.g = +n), (this.b = +e), (this.opacity = +r);
}
sr(
	Mt,
	Ve,
	ri(Gn, {
		brighter(t) {
			return (
				(t = t == null ? We : Math.pow(We, t)),
				new Mt(this.r * t, this.g * t, this.b * t, this.opacity)
			);
		},
		darker(t) {
			return (
				(t = t == null ? fe : Math.pow(fe, t)),
				new Mt(this.r * t, this.g * t, this.b * t, this.opacity)
			);
		},
		rgb() {
			return this;
		},
		clamp() {
			return new Mt(re(this.r), re(this.g), re(this.b), no(this.opacity));
		},
		displayable() {
			return (
				-0.5 <= this.r &&
				this.r < 255.5 &&
				-0.5 <= this.g &&
				this.g < 255.5 &&
				-0.5 <= this.b &&
				this.b < 255.5 &&
				0 <= this.opacity &&
				this.opacity <= 1
			);
		},
		hex: Fc,
		formatHex: Fc,
		formatHex8: ry,
		formatRgb: Lc,
		toString: Lc
	})
);
function Fc() {
	return `#${ne(this.r)}${ne(this.g)}${ne(this.b)}`;
}
function ry() {
	return `#${ne(this.r)}${ne(this.g)}${ne(this.b)}${ne((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Lc() {
	const t = no(this.opacity);
	return `${t === 1 ? 'rgb(' : 'rgba('}${re(this.r)}, ${re(this.g)}, ${re(this.b)}${t === 1 ? ')' : `, ${t})`}`;
}
function no(t) {
	return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function re(t) {
	return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function ne(t) {
	return (t = re(t)), (t < 16 ? '0' : '') + t.toString(16);
}
function Bc(t, n, e, r) {
	return (
		r <= 0 ? (t = n = e = NaN) : e <= 0 || e >= 1 ? (t = n = NaN) : n <= 0 && (t = NaN),
		new an(t, n, e, r)
	);
}
function kh(t) {
	if (t instanceof an) return new an(t.h, t.s, t.l, t.opacity);
	if ((t instanceof Gn || (t = qn(t)), !t)) return new an();
	if (t instanceof an) return t;
	t = t.rgb();
	var n = t.r / 255,
		e = t.g / 255,
		r = t.b / 255,
		i = Math.min(n, e, r),
		o = Math.max(n, e, r),
		a = NaN,
		u = o - i,
		c = (o + i) / 2;
	return (
		u
			? (n === o
					? (a = (e - r) / u + (e < r) * 6)
					: e === o
						? (a = (r - n) / u + 2)
						: (a = (n - e) / u + 4),
				(u /= c < 0.5 ? o + i : 2 - o - i),
				(a *= 60))
			: (u = c > 0 && c < 1 ? 0 : a),
		new an(a, u, c, t.opacity)
	);
}
function eo(t, n, e, r) {
	return arguments.length === 1 ? kh(t) : new an(t, n, e, r ?? 1);
}
function an(t, n, e, r) {
	(this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
}
sr(
	an,
	eo,
	ri(Gn, {
		brighter(t) {
			return (
				(t = t == null ? We : Math.pow(We, t)), new an(this.h, this.s, this.l * t, this.opacity)
			);
		},
		darker(t) {
			return (
				(t = t == null ? fe : Math.pow(fe, t)), new an(this.h, this.s, this.l * t, this.opacity)
			);
		},
		rgb() {
			var t = (this.h % 360) + (this.h < 0) * 360,
				n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
				e = this.l,
				r = e + (e < 0.5 ? e : 1 - e) * n,
				i = 2 * e - r;
			return new Mt(
				Pa(t >= 240 ? t - 240 : t + 120, i, r),
				Pa(t, i, r),
				Pa(t < 120 ? t + 240 : t - 120, i, r),
				this.opacity
			);
		},
		clamp() {
			return new an(Uc(this.h), vi(this.s), vi(this.l), no(this.opacity));
		},
		displayable() {
			return (
				((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
				0 <= this.l &&
				this.l <= 1 &&
				0 <= this.opacity &&
				this.opacity <= 1
			);
		},
		formatHsl() {
			const t = no(this.opacity);
			return `${t === 1 ? 'hsl(' : 'hsla('}${Uc(this.h)}, ${vi(this.s) * 100}%, ${vi(this.l) * 100}%${t === 1 ? ')' : `, ${t})`}`;
		}
	})
);
function Uc(t) {
	return (t = (t || 0) % 360), t < 0 ? t + 360 : t;
}
function vi(t) {
	return Math.max(0, Math.min(1, t || 0));
}
function Pa(t, n, e) {
	return (
		(t < 60 ? n + ((e - n) * t) / 60 : t < 180 ? e : t < 240 ? n + ((e - n) * (240 - t)) / 60 : n) *
		255
	);
}
const Ah = Math.PI / 180,
	Eh = 180 / Math.PI,
	ro = 18,
	Nh = 0.96422,
	Ch = 1,
	Rh = 0.82521,
	Ph = 4 / 29,
	qe = 6 / 29,
	Ih = 3 * qe * qe,
	iy = qe * qe * qe;
function zh(t) {
	if (t instanceof cn) return new cn(t.l, t.a, t.b, t.opacity);
	if (t instanceof gn) return Oh(t);
	t instanceof Mt || (t = Ms(t));
	var n = Oa(t.r),
		e = Oa(t.g),
		r = Oa(t.b),
		i = Ia((0.2225045 * n + 0.7168786 * e + 0.0606169 * r) / Ch),
		o,
		a;
	return (
		n === e && e === r
			? (o = a = i)
			: ((o = Ia((0.4360747 * n + 0.3850649 * e + 0.1430804 * r) / Nh)),
				(a = Ia((0.0139322 * n + 0.0971045 * e + 0.7141733 * r) / Rh))),
		new cn(116 * i - 16, 500 * (o - i), 200 * (i - a), t.opacity)
	);
}
function oy(t, n) {
	return new cn(t, 0, 0, n ?? 1);
}
function io(t, n, e, r) {
	return arguments.length === 1 ? zh(t) : new cn(t, n, e, r ?? 1);
}
function cn(t, n, e, r) {
	(this.l = +t), (this.a = +n), (this.b = +e), (this.opacity = +r);
}
sr(
	cn,
	io,
	ri(Gn, {
		brighter(t) {
			return new cn(this.l + ro * (t ?? 1), this.a, this.b, this.opacity);
		},
		darker(t) {
			return new cn(this.l - ro * (t ?? 1), this.a, this.b, this.opacity);
		},
		rgb() {
			var t = (this.l + 16) / 116,
				n = isNaN(this.a) ? t : t + this.a / 500,
				e = isNaN(this.b) ? t : t - this.b / 200;
			return (
				(n = Nh * za(n)),
				(t = Ch * za(t)),
				(e = Rh * za(e)),
				new Mt(
					Da(3.1338561 * n - 1.6168667 * t - 0.4906146 * e),
					Da(-0.9787684 * n + 1.9161415 * t + 0.033454 * e),
					Da(0.0719453 * n - 0.2289914 * t + 1.4052427 * e),
					this.opacity
				)
			);
		}
	})
);
function Ia(t) {
	return t > iy ? Math.pow(t, 1 / 3) : t / Ih + Ph;
}
function za(t) {
	return t > qe ? t * t * t : Ih * (t - Ph);
}
function Da(t) {
	return 255 * (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055);
}
function Oa(t) {
	return (t /= 255) <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
}
function Dh(t) {
	if (t instanceof gn) return new gn(t.h, t.c, t.l, t.opacity);
	if ((t instanceof cn || (t = zh(t)), t.a === 0 && t.b === 0))
		return new gn(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
	var n = Math.atan2(t.b, t.a) * Eh;
	return new gn(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
}
function ay(t, n, e, r) {
	return arguments.length === 1 ? Dh(t) : new gn(e, n, t, r ?? 1);
}
function oo(t, n, e, r) {
	return arguments.length === 1 ? Dh(t) : new gn(t, n, e, r ?? 1);
}
function gn(t, n, e, r) {
	(this.h = +t), (this.c = +n), (this.l = +e), (this.opacity = +r);
}
function Oh(t) {
	if (isNaN(t.h)) return new cn(t.l, 0, 0, t.opacity);
	var n = t.h * Ah;
	return new cn(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
}
sr(
	gn,
	oo,
	ri(Gn, {
		brighter(t) {
			return new gn(this.h, this.c, this.l + ro * (t ?? 1), this.opacity);
		},
		darker(t) {
			return new gn(this.h, this.c, this.l - ro * (t ?? 1), this.opacity);
		},
		rgb() {
			return Oh(this).rgb();
		}
	})
);
var Fh = -0.14861,
	$s = 1.78277,
	Ts = -0.29227,
	Vo = -0.90649,
	Yr = 1.97294,
	qc = Yr * Vo,
	Yc = Yr * $s,
	Hc = $s * Ts - Vo * Fh;
function uy(t) {
	if (t instanceof ie) return new ie(t.h, t.s, t.l, t.opacity);
	t instanceof Mt || (t = Ms(t));
	var n = t.r / 255,
		e = t.g / 255,
		r = t.b / 255,
		i = (Hc * r + qc * n - Yc * e) / (Hc + qc - Yc),
		o = r - i,
		a = (Yr * (e - i) - Ts * o) / Vo,
		u = Math.sqrt(a * a + o * o) / (Yr * i * (1 - i)),
		c = u ? Math.atan2(a, o) * Eh - 120 : NaN;
	return new ie(c < 0 ? c + 360 : c, u, i, t.opacity);
}
function fn(t, n, e, r) {
	return arguments.length === 1 ? uy(t) : new ie(t, n, e, r ?? 1);
}
function ie(t, n, e, r) {
	(this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
}
sr(
	ie,
	fn,
	ri(Gn, {
		brighter(t) {
			return (
				(t = t == null ? We : Math.pow(We, t)), new ie(this.h, this.s, this.l * t, this.opacity)
			);
		},
		darker(t) {
			return (
				(t = t == null ? fe : Math.pow(fe, t)), new ie(this.h, this.s, this.l * t, this.opacity)
			);
		},
		rgb() {
			var t = isNaN(this.h) ? 0 : (this.h + 120) * Ah,
				n = +this.l,
				e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
				r = Math.cos(t),
				i = Math.sin(t);
			return new Mt(
				255 * (n + e * (Fh * r + $s * i)),
				255 * (n + e * (Ts * r + Vo * i)),
				255 * (n + e * (Yr * r)),
				this.opacity
			);
		}
	})
);
function Lh(t, n, e, r, i) {
	var o = t * t,
		a = o * t;
	return (
		((1 - 3 * t + 3 * o - a) * n +
			(4 - 6 * o + 3 * a) * e +
			(1 + 3 * t + 3 * o - 3 * a) * r +
			a * i) /
		6
	);
}
function Bh(t) {
	var n = t.length - 1;
	return function (e) {
		var r = e <= 0 ? (e = 0) : e >= 1 ? ((e = 1), n - 1) : Math.floor(e * n),
			i = t[r],
			o = t[r + 1],
			a = r > 0 ? t[r - 1] : 2 * i - o,
			u = r < n - 1 ? t[r + 2] : 2 * o - i;
		return Lh((e - r / n) * n, a, i, o, u);
	};
}
function Uh(t) {
	var n = t.length;
	return function (e) {
		var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
			i = t[(r + n - 1) % n],
			o = t[r % n],
			a = t[(r + 1) % n],
			u = t[(r + 2) % n];
		return Lh((e - r / n) * n, i, o, a, u);
	};
}
const jo = (t) => () => t;
function qh(t, n) {
	return function (e) {
		return t + e * n;
	};
}
function sy(t, n, e) {
	return (
		(t = Math.pow(t, e)),
		(n = Math.pow(n, e) - t),
		(e = 1 / e),
		function (r) {
			return Math.pow(t + r * n, e);
		}
	);
}
function Zo(t, n) {
	var e = n - t;
	return e ? qh(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : jo(isNaN(t) ? n : t);
}
function cy(t) {
	return (t = +t) == 1
		? $t
		: function (n, e) {
				return e - n ? sy(n, e, t) : jo(isNaN(n) ? e : n);
			};
}
function $t(t, n) {
	var e = n - t;
	return e ? qh(t, e) : jo(isNaN(t) ? n : t);
}
const Hr = (function t(n) {
	var e = cy(n);
	function r(i, o) {
		var a = e((i = Ve(i)).r, (o = Ve(o)).r),
			u = e(i.g, o.g),
			c = e(i.b, o.b),
			s = $t(i.opacity, o.opacity);
		return function (f) {
			return (i.r = a(f)), (i.g = u(f)), (i.b = c(f)), (i.opacity = s(f)), i + '';
		};
	}
	return (r.gamma = t), r;
})(1);
function Yh(t) {
	return function (n) {
		var e = n.length,
			r = new Array(e),
			i = new Array(e),
			o = new Array(e),
			a,
			u;
		for (a = 0; a < e; ++a) (u = Ve(n[a])), (r[a] = u.r || 0), (i[a] = u.g || 0), (o[a] = u.b || 0);
		return (
			(r = t(r)),
			(i = t(i)),
			(o = t(o)),
			(u.opacity = 1),
			function (c) {
				return (u.r = r(c)), (u.g = i(c)), (u.b = o(c)), u + '';
			}
		);
	};
}
var Hh = Yh(Bh),
	fy = Yh(Uh);
function Ss(t, n) {
	n || (n = []);
	var e = t ? Math.min(n.length, t.length) : 0,
		r = n.slice(),
		i;
	return function (o) {
		for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
		return r;
	};
}
function Xh(t) {
	return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function ly(t, n) {
	return (Xh(n) ? Ss : Gh)(t, n);
}
function Gh(t, n) {
	var e = n ? n.length : 0,
		r = t ? Math.min(e, t.length) : 0,
		i = new Array(r),
		o = new Array(e),
		a;
	for (a = 0; a < r; ++a) i[a] = Wn(t[a], n[a]);
	for (; a < e; ++a) o[a] = n[a];
	return function (u) {
		for (a = 0; a < r; ++a) o[a] = i[a](u);
		return o;
	};
}
function Wh(t, n) {
	var e = new Date();
	return (
		(t = +t),
		(n = +n),
		function (r) {
			return e.setTime(t * (1 - r) + n * r), e;
		}
	);
}
function tn(t, n) {
	return (
		(t = +t),
		(n = +n),
		function (e) {
			return t * (1 - e) + n * e;
		}
	);
}
function Vh(t, n) {
	var e = {},
		r = {},
		i;
	(t === null || typeof t != 'object') && (t = {}),
		(n === null || typeof n != 'object') && (n = {});
	for (i in n) i in t ? (e[i] = Wn(t[i], n[i])) : (r[i] = n[i]);
	return function (o) {
		for (i in e) r[i] = e[i](o);
		return r;
	};
}
var xu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
	Fa = new RegExp(xu.source, 'g');
function hy(t) {
	return function () {
		return t;
	};
}
function dy(t) {
	return function (n) {
		return t(n) + '';
	};
}
function ks(t, n) {
	var e = (xu.lastIndex = Fa.lastIndex = 0),
		r,
		i,
		o,
		a = -1,
		u = [],
		c = [];
	for (t = t + '', n = n + ''; (r = xu.exec(t)) && (i = Fa.exec(n)); )
		(o = i.index) > e && ((o = n.slice(e, o)), u[a] ? (u[a] += o) : (u[++a] = o)),
			(r = r[0]) === (i = i[0])
				? u[a]
					? (u[a] += i)
					: (u[++a] = i)
				: ((u[++a] = null), c.push({ i: a, x: tn(r, i) })),
			(e = Fa.lastIndex);
	return (
		e < n.length && ((o = n.slice(e)), u[a] ? (u[a] += o) : (u[++a] = o)),
		u.length < 2
			? c[0]
				? dy(c[0].x)
				: hy(n)
			: ((n = c.length),
				function (s) {
					for (var f = 0, h; f < n; ++f) u[(h = c[f]).i] = h.x(s);
					return u.join('');
				})
	);
}
function Wn(t, n) {
	var e = typeof n,
		r;
	return n == null || e === 'boolean'
		? jo(n)
		: (e === 'number'
				? tn
				: e === 'string'
					? (r = qn(n))
						? ((n = r), Hr)
						: ks
					: n instanceof qn
						? Hr
						: n instanceof Date
							? Wh
							: Xh(n)
								? Ss
								: Array.isArray(n)
									? Gh
									: (typeof n.valueOf != 'function' && typeof n.toString != 'function') || isNaN(n)
										? Vh
										: tn)(t, n);
}
function gy(t) {
	var n = t.length;
	return function (e) {
		return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))];
	};
}
function py(t, n) {
	var e = Zo(+t, +n);
	return function (r) {
		var i = e(r);
		return i - 360 * Math.floor(i / 360);
	};
}
function Qo(t, n) {
	return (
		(t = +t),
		(n = +n),
		function (e) {
			return Math.round(t * (1 - e) + n * e);
		}
	);
}
var Xc = 180 / Math.PI,
	Mu = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
function jh(t, n, e, r, i, o) {
	var a, u, c;
	return (
		(a = Math.sqrt(t * t + n * n)) && ((t /= a), (n /= a)),
		(c = t * e + n * r) && ((e -= t * c), (r -= n * c)),
		(u = Math.sqrt(e * e + r * r)) && ((e /= u), (r /= u), (c /= u)),
		t * r < n * e && ((t = -t), (n = -n), (c = -c), (a = -a)),
		{
			translateX: i,
			translateY: o,
			rotate: Math.atan2(n, t) * Xc,
			skewX: Math.atan(c) * Xc,
			scaleX: a,
			scaleY: u
		}
	);
}
var _i;
function my(t) {
	const n = new (typeof DOMMatrix == 'function' ? DOMMatrix : WebKitCSSMatrix)(t + '');
	return n.isIdentity ? Mu : jh(n.a, n.b, n.c, n.d, n.e, n.f);
}
function yy(t) {
	return t == null ||
		(_i || (_i = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
		_i.setAttribute('transform', t),
		!(t = _i.transform.baseVal.consolidate()))
		? Mu
		: ((t = t.matrix), jh(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Zh(t, n, e, r) {
	function i(s) {
		return s.length ? s.pop() + ' ' : '';
	}
	function o(s, f, h, l, d, p) {
		if (s !== h || f !== l) {
			var m = d.push('translate(', null, n, null, e);
			p.push({ i: m - 4, x: tn(s, h) }, { i: m - 2, x: tn(f, l) });
		} else (h || l) && d.push('translate(' + h + n + l + e);
	}
	function a(s, f, h, l) {
		s !== f
			? (s - f > 180 ? (f += 360) : f - s > 180 && (s += 360),
				l.push({ i: h.push(i(h) + 'rotate(', null, r) - 2, x: tn(s, f) }))
			: f && h.push(i(h) + 'rotate(' + f + r);
	}
	function u(s, f, h, l) {
		s !== f
			? l.push({ i: h.push(i(h) + 'skewX(', null, r) - 2, x: tn(s, f) })
			: f && h.push(i(h) + 'skewX(' + f + r);
	}
	function c(s, f, h, l, d, p) {
		if (s !== h || f !== l) {
			var m = d.push(i(d) + 'scale(', null, ',', null, ')');
			p.push({ i: m - 4, x: tn(s, h) }, { i: m - 2, x: tn(f, l) });
		} else (h !== 1 || l !== 1) && d.push(i(d) + 'scale(' + h + ',' + l + ')');
	}
	return function (s, f) {
		var h = [],
			l = [];
		return (
			(s = t(s)),
			(f = t(f)),
			o(s.translateX, s.translateY, f.translateX, f.translateY, h, l),
			a(s.rotate, f.rotate, h, l),
			u(s.skewX, f.skewX, h, l),
			c(s.scaleX, s.scaleY, f.scaleX, f.scaleY, h, l),
			(s = f = null),
			function (d) {
				for (var p = -1, m = l.length, g; ++p < m; ) h[(g = l[p]).i] = g.x(d);
				return h.join('');
			}
		);
	};
}
var Qh = Zh(my, 'px, ', 'px)', 'deg)'),
	Kh = Zh(yy, ', ', ')', ')'),
	by = 1e-12;
function Gc(t) {
	return ((t = Math.exp(t)) + 1 / t) / 2;
}
function vy(t) {
	return ((t = Math.exp(t)) - 1 / t) / 2;
}
function _y(t) {
	return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const Jh = (function t(n, e, r) {
	function i(o, a) {
		var u = o[0],
			c = o[1],
			s = o[2],
			f = a[0],
			h = a[1],
			l = a[2],
			d = f - u,
			p = h - c,
			m = d * d + p * p,
			g,
			y;
		if (m < by)
			(y = Math.log(l / s) / n),
				(g = function (k) {
					return [u + k * d, c + k * p, s * Math.exp(n * k * y)];
				});
		else {
			var _ = Math.sqrt(m),
				v = (l * l - s * s + r * m) / (2 * s * e * _),
				b = (l * l - s * s - r * m) / (2 * l * e * _),
				w = Math.log(Math.sqrt(v * v + 1) - v),
				x = Math.log(Math.sqrt(b * b + 1) - b);
			(y = (x - w) / n),
				(g = function (k) {
					var E = k * y,
						N = Gc(w),
						A = (s / (e * _)) * (N * _y(n * E + w) - vy(w));
					return [u + A * d, c + A * p, (s * N) / Gc(n * E + w)];
				});
		}
		return (g.duration = (y * 1e3 * n) / Math.SQRT2), g;
	}
	return (
		(i.rho = function (o) {
			var a = Math.max(0.001, +o),
				u = a * a,
				c = u * u;
			return t(a, u, c);
		}),
		i
	);
})(Math.SQRT2, 2, 4);
function t0(t) {
	return function (n, e) {
		var r = t((n = eo(n)).h, (e = eo(e)).h),
			i = $t(n.s, e.s),
			o = $t(n.l, e.l),
			a = $t(n.opacity, e.opacity);
		return function (u) {
			return (n.h = r(u)), (n.s = i(u)), (n.l = o(u)), (n.opacity = a(u)), n + '';
		};
	};
}
const wy = t0(Zo);
var xy = t0($t);
function My(t, n) {
	var e = $t((t = io(t)).l, (n = io(n)).l),
		r = $t(t.a, n.a),
		i = $t(t.b, n.b),
		o = $t(t.opacity, n.opacity);
	return function (a) {
		return (t.l = e(a)), (t.a = r(a)), (t.b = i(a)), (t.opacity = o(a)), t + '';
	};
}
function n0(t) {
	return function (n, e) {
		var r = t((n = oo(n)).h, (e = oo(e)).h),
			i = $t(n.c, e.c),
			o = $t(n.l, e.l),
			a = $t(n.opacity, e.opacity);
		return function (u) {
			return (n.h = r(u)), (n.c = i(u)), (n.l = o(u)), (n.opacity = a(u)), n + '';
		};
	};
}
const $y = n0(Zo);
var Ty = n0($t);
function e0(t) {
	return (function n(e) {
		e = +e;
		function r(i, o) {
			var a = t((i = fn(i)).h, (o = fn(o)).h),
				u = $t(i.s, o.s),
				c = $t(i.l, o.l),
				s = $t(i.opacity, o.opacity);
			return function (f) {
				return (i.h = a(f)), (i.s = u(f)), (i.l = c(Math.pow(f, e))), (i.opacity = s(f)), i + '';
			};
		}
		return (r.gamma = n), r;
	})(1);
}
const Sy = e0(Zo);
var Ko = e0($t);
function r0(t, n) {
	n === void 0 && ((n = t), (t = Wn));
	for (var e = 0, r = n.length - 1, i = n[0], o = new Array(r < 0 ? 0 : r); e < r; )
		o[e] = t(i, (i = n[++e]));
	return function (a) {
		var u = Math.max(0, Math.min(r - 1, Math.floor((a *= r))));
		return o[u](a - u);
	};
}
function ky(t, n) {
	for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t(r / (n - 1));
	return e;
}
var je = 0,
	wr = 0,
	dr = 0,
	i0 = 1e3,
	ao,
	xr,
	uo = 0,
	le = 0,
	Jo = 0,
	Xr = typeof performance == 'object' && performance.now ? performance : Date,
	o0 =
		typeof window == 'object' && window.requestAnimationFrame
			? window.requestAnimationFrame.bind(window)
			: function (t) {
					setTimeout(t, 17);
				};
function ii() {
	return le || (o0(Ay), (le = Xr.now() + Jo));
}
function Ay() {
	le = 0;
}
function Gr() {
	this._call = this._time = this._next = null;
}
Gr.prototype = ta.prototype = {
	constructor: Gr,
	restart: function (t, n, e) {
		if (typeof t != 'function') throw new TypeError('callback is not a function');
		(e = (e == null ? ii() : +e) + (n == null ? 0 : +n)),
			!this._next && xr !== this && (xr ? (xr._next = this) : (ao = this), (xr = this)),
			(this._call = t),
			(this._time = e),
			$u();
	},
	stop: function () {
		this._call && ((this._call = null), (this._time = 1 / 0), $u());
	}
};
function ta(t, n, e) {
	var r = new Gr();
	return r.restart(t, n, e), r;
}
function a0() {
	ii(), ++je;
	for (var t = ao, n; t; ) (n = le - t._time) >= 0 && t._call.call(void 0, n), (t = t._next);
	--je;
}
function Wc() {
	(le = (uo = Xr.now()) + Jo), (je = wr = 0);
	try {
		a0();
	} finally {
		(je = 0), Ny(), (le = 0);
	}
}
function Ey() {
	var t = Xr.now(),
		n = t - uo;
	n > i0 && ((Jo -= n), (uo = t));
}
function Ny() {
	for (var t, n = ao, e, r = 1 / 0; n; )
		n._call
			? (r > n._time && (r = n._time), (t = n), (n = n._next))
			: ((e = n._next), (n._next = null), (n = t ? (t._next = e) : (ao = e)));
	(xr = t), $u(r);
}
function $u(t) {
	if (!je) {
		wr && (wr = clearTimeout(wr));
		var n = t - le;
		n > 24
			? (t < 1 / 0 && (wr = setTimeout(Wc, t - Xr.now() - Jo)), dr && (dr = clearInterval(dr)))
			: (dr || ((uo = Xr.now()), (dr = setInterval(Ey, i0))), (je = 1), o0(Wc));
	}
}
function Tu(t, n, e) {
	var r = new Gr();
	return (
		(n = n == null ? 0 : +n),
		r.restart(
			(i) => {
				r.stop(), t(i + n);
			},
			n,
			e
		),
		r
	);
}
function Cy(t, n, e) {
	var r = new Gr(),
		i = n;
	return n == null
		? (r.restart(t, n, e), r)
		: ((r._restart = r.restart),
			(r.restart = function (o, a, u) {
				(a = +a),
					(u = u == null ? ii() : +u),
					r._restart(
						function c(s) {
							(s += i), r._restart(c, (i += a), u), o(s);
						},
						a,
						u
					);
			}),
			r.restart(t, n, e),
			r);
}
var Ry = ye('start', 'end', 'cancel', 'interrupt'),
	Py = [],
	u0 = 0,
	Su = 1,
	ku = 2,
	Ui = 3,
	Vc = 4,
	Au = 5,
	qi = 6;
function na(t, n, e, r, i, o) {
	var a = t.__transition;
	if (!a) t.__transition = {};
	else if (e in a) return;
	Iy(t, e, {
		name: n,
		index: r,
		group: i,
		on: Ry,
		tween: Py,
		time: o.time,
		delay: o.delay,
		duration: o.duration,
		ease: o.ease,
		timer: null,
		state: u0
	});
}
function As(t, n) {
	var e = ln(t, n);
	if (e.state > u0) throw new Error('too late; already scheduled');
	return e;
}
function wn(t, n) {
	var e = ln(t, n);
	if (e.state > Ui) throw new Error('too late; already running');
	return e;
}
function ln(t, n) {
	var e = t.__transition;
	if (!e || !(e = e[n])) throw new Error('transition not found');
	return e;
}
function Iy(t, n, e) {
	var r = t.__transition,
		i;
	(r[n] = e), (e.timer = ta(o, 0, e.time));
	function o(s) {
		(e.state = Su), e.timer.restart(a, e.delay, e.time), e.delay <= s && a(s - e.delay);
	}
	function a(s) {
		var f, h, l, d;
		if (e.state !== Su) return c();
		for (f in r)
			if (((d = r[f]), d.name === e.name)) {
				if (d.state === Ui) return Tu(a);
				d.state === Vc
					? ((d.state = qi),
						d.timer.stop(),
						d.on.call('interrupt', t, t.__data__, d.index, d.group),
						delete r[f])
					: +f < n &&
						((d.state = qi),
						d.timer.stop(),
						d.on.call('cancel', t, t.__data__, d.index, d.group),
						delete r[f]);
			}
		if (
			(Tu(function () {
				e.state === Ui && ((e.state = Vc), e.timer.restart(u, e.delay, e.time), u(s));
			}),
			(e.state = ku),
			e.on.call('start', t, t.__data__, e.index, e.group),
			e.state === ku)
		) {
			for (e.state = Ui, i = new Array((l = e.tween.length)), f = 0, h = -1; f < l; ++f)
				(d = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = d);
			i.length = h + 1;
		}
	}
	function u(s) {
		for (
			var f =
					s < e.duration
						? e.ease.call(null, s / e.duration)
						: (e.timer.restart(c), (e.state = Au), 1),
				h = -1,
				l = i.length;
			++h < l;

		)
			i[h].call(t, f);
		e.state === Au && (e.on.call('end', t, t.__data__, e.index, e.group), c());
	}
	function c() {
		(e.state = qi), e.timer.stop(), delete r[n];
		for (var s in r) return;
		delete t.__transition;
	}
}
function oe(t, n) {
	var e = t.__transition,
		r,
		i,
		o = !0,
		a;
	if (e) {
		n = n == null ? null : n + '';
		for (a in e) {
			if ((r = e[a]).name !== n) {
				o = !1;
				continue;
			}
			(i = r.state > ku && r.state < Au),
				(r.state = qi),
				r.timer.stop(),
				r.on.call(i ? 'interrupt' : 'cancel', t, t.__data__, r.index, r.group),
				delete e[a];
		}
		o && delete t.__transition;
	}
}
function zy(t) {
	return this.each(function () {
		oe(this, t);
	});
}
function Dy(t, n) {
	var e, r;
	return function () {
		var i = wn(this, t),
			o = i.tween;
		if (o !== e) {
			r = e = o;
			for (var a = 0, u = r.length; a < u; ++a)
				if (r[a].name === n) {
					(r = r.slice()), r.splice(a, 1);
					break;
				}
		}
		i.tween = r;
	};
}
function Oy(t, n, e) {
	var r, i;
	if (typeof e != 'function') throw new Error();
	return function () {
		var o = wn(this, t),
			a = o.tween;
		if (a !== r) {
			i = (r = a).slice();
			for (var u = { name: n, value: e }, c = 0, s = i.length; c < s; ++c)
				if (i[c].name === n) {
					i[c] = u;
					break;
				}
			c === s && i.push(u);
		}
		o.tween = i;
	};
}
function Fy(t, n) {
	var e = this._id;
	if (((t += ''), arguments.length < 2)) {
		for (var r = ln(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
			if ((a = r[i]).name === t) return a.value;
		return null;
	}
	return this.each((n == null ? Dy : Oy)(e, t, n));
}
function Es(t, n, e) {
	var r = t._id;
	return (
		t.each(function () {
			var i = wn(this, r);
			(i.value || (i.value = {}))[n] = e.apply(this, arguments);
		}),
		function (i) {
			return ln(i, r).value[n];
		}
	);
}
function s0(t, n) {
	var e;
	return (typeof n == 'number' ? tn : n instanceof qn ? Hr : (e = qn(n)) ? ((n = e), Hr) : ks)(
		t,
		n
	);
}
function Ly(t) {
	return function () {
		this.removeAttribute(t);
	};
}
function By(t) {
	return function () {
		this.removeAttributeNS(t.space, t.local);
	};
}
function Uy(t, n, e) {
	var r,
		i = e + '',
		o;
	return function () {
		var a = this.getAttribute(t);
		return a === i ? null : a === r ? o : (o = n((r = a), e));
	};
}
function qy(t, n, e) {
	var r,
		i = e + '',
		o;
	return function () {
		var a = this.getAttributeNS(t.space, t.local);
		return a === i ? null : a === r ? o : (o = n((r = a), e));
	};
}
function Yy(t, n, e) {
	var r, i, o;
	return function () {
		var a,
			u = e(this),
			c;
		return u == null
			? void this.removeAttribute(t)
			: ((a = this.getAttribute(t)),
				(c = u + ''),
				a === c ? null : a === r && c === i ? o : ((i = c), (o = n((r = a), u))));
	};
}
function Hy(t, n, e) {
	var r, i, o;
	return function () {
		var a,
			u = e(this),
			c;
		return u == null
			? void this.removeAttributeNS(t.space, t.local)
			: ((a = this.getAttributeNS(t.space, t.local)),
				(c = u + ''),
				a === c ? null : a === r && c === i ? o : ((i = c), (o = n((r = a), u))));
	};
}
function Xy(t, n) {
	var e = ei(t),
		r = e === 'transform' ? Kh : s0;
	return this.attrTween(
		t,
		typeof n == 'function'
			? (e.local ? Hy : Yy)(e, r, Es(this, 'attr.' + t, n))
			: n == null
				? (e.local ? By : Ly)(e)
				: (e.local ? qy : Uy)(e, r, n)
	);
}
function Gy(t, n) {
	return function (e) {
		this.setAttribute(t, n.call(this, e));
	};
}
function Wy(t, n) {
	return function (e) {
		this.setAttributeNS(t.space, t.local, n.call(this, e));
	};
}
function Vy(t, n) {
	var e, r;
	function i() {
		var o = n.apply(this, arguments);
		return o !== r && (e = (r = o) && Wy(t, o)), e;
	}
	return (i._value = n), i;
}
function jy(t, n) {
	var e, r;
	function i() {
		var o = n.apply(this, arguments);
		return o !== r && (e = (r = o) && Gy(t, o)), e;
	}
	return (i._value = n), i;
}
function Zy(t, n) {
	var e = 'attr.' + t;
	if (arguments.length < 2) return (e = this.tween(e)) && e._value;
	if (n == null) return this.tween(e, null);
	if (typeof n != 'function') throw new Error();
	var r = ei(t);
	return this.tween(e, (r.local ? Vy : jy)(r, n));
}
function Qy(t, n) {
	return function () {
		As(this, t).delay = +n.apply(this, arguments);
	};
}
function Ky(t, n) {
	return (
		(n = +n),
		function () {
			As(this, t).delay = n;
		}
	);
}
function Jy(t) {
	var n = this._id;
	return arguments.length
		? this.each((typeof t == 'function' ? Qy : Ky)(n, t))
		: ln(this.node(), n).delay;
}
function tb(t, n) {
	return function () {
		wn(this, t).duration = +n.apply(this, arguments);
	};
}
function nb(t, n) {
	return (
		(n = +n),
		function () {
			wn(this, t).duration = n;
		}
	);
}
function eb(t) {
	var n = this._id;
	return arguments.length
		? this.each((typeof t == 'function' ? tb : nb)(n, t))
		: ln(this.node(), n).duration;
}
function rb(t, n) {
	if (typeof n != 'function') throw new Error();
	return function () {
		wn(this, t).ease = n;
	};
}
function ib(t) {
	var n = this._id;
	return arguments.length ? this.each(rb(n, t)) : ln(this.node(), n).ease;
}
function ob(t, n) {
	return function () {
		var e = n.apply(this, arguments);
		if (typeof e != 'function') throw new Error();
		wn(this, t).ease = e;
	};
}
function ab(t) {
	if (typeof t != 'function') throw new Error();
	return this.each(ob(this._id, t));
}
function ub(t) {
	typeof t != 'function' && (t = vs(t));
	for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
		for (var o = n[i], a = o.length, u = (r[i] = []), c, s = 0; s < a; ++s)
			(c = o[s]) && t.call(c, c.__data__, s, o) && u.push(c);
	return new yn(r, this._parents, this._name, this._id);
}
function sb(t) {
	if (t._id !== this._id) throw new Error();
	for (
		var n = this._groups,
			e = t._groups,
			r = n.length,
			i = e.length,
			o = Math.min(r, i),
			a = new Array(r),
			u = 0;
		u < o;
		++u
	)
		for (var c = n[u], s = e[u], f = c.length, h = (a[u] = new Array(f)), l, d = 0; d < f; ++d)
			(l = c[d] || s[d]) && (h[d] = l);
	for (; u < r; ++u) a[u] = n[u];
	return new yn(a, this._parents, this._name, this._id);
}
function cb(t) {
	return (t + '')
		.trim()
		.split(/^|\s+/)
		.every(function (n) {
			var e = n.indexOf('.');
			return e >= 0 && (n = n.slice(0, e)), !n || n === 'start';
		});
}
function fb(t, n, e) {
	var r,
		i,
		o = cb(n) ? As : wn;
	return function () {
		var a = o(this, t),
			u = a.on;
		u !== r && (i = (r = u).copy()).on(n, e), (a.on = i);
	};
}
function lb(t, n) {
	var e = this._id;
	return arguments.length < 2 ? ln(this.node(), e).on.on(t) : this.each(fb(e, t, n));
}
function hb(t) {
	return function () {
		var n = this.parentNode;
		for (var e in this.__transition) if (+e !== t) return;
		n && n.removeChild(this);
	};
}
function db() {
	return this.on('end.remove', hb(this._id));
}
function gb(t) {
	var n = this._name,
		e = this._id;
	typeof t != 'function' && (t = Xo(t));
	for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
		for (var u = r[a], c = u.length, s = (o[a] = new Array(c)), f, h, l = 0; l < c; ++l)
			(f = u[l]) &&
				(h = t.call(f, f.__data__, l, u)) &&
				('__data__' in f && (h.__data__ = f.__data__), (s[l] = h), na(s[l], n, e, l, s, ln(f, e)));
	return new yn(o, this._parents, n, e);
}
function pb(t) {
	var n = this._name,
		e = this._id;
	typeof t != 'function' && (t = bs(t));
	for (var r = this._groups, i = r.length, o = [], a = [], u = 0; u < i; ++u)
		for (var c = r[u], s = c.length, f, h = 0; h < s; ++h)
			if ((f = c[h])) {
				for (var l = t.call(f, f.__data__, h, c), d, p = ln(f, e), m = 0, g = l.length; m < g; ++m)
					(d = l[m]) && na(d, n, e, m, l, p);
				o.push(l), a.push(f);
			}
	return new yn(o, a, n, e);
}
var mb = be.prototype.constructor;
function yb() {
	return new mb(this._groups, this._parents);
}
function bb(t, n) {
	var e, r, i;
	return function () {
		var o = ce(this, t),
			a = (this.style.removeProperty(t), ce(this, t));
		return o === a ? null : o === e && a === r ? i : (i = n((e = o), (r = a)));
	};
}
function c0(t) {
	return function () {
		this.style.removeProperty(t);
	};
}
function vb(t, n, e) {
	var r,
		i = e + '',
		o;
	return function () {
		var a = ce(this, t);
		return a === i ? null : a === r ? o : (o = n((r = a), e));
	};
}
function _b(t, n, e) {
	var r, i, o;
	return function () {
		var a = ce(this, t),
			u = e(this),
			c = u + '';
		return (
			u == null && (c = u = (this.style.removeProperty(t), ce(this, t))),
			a === c ? null : a === r && c === i ? o : ((i = c), (o = n((r = a), u)))
		);
	};
}
function wb(t, n) {
	var e,
		r,
		i,
		o = 'style.' + n,
		a = 'end.' + o,
		u;
	return function () {
		var c = wn(this, t),
			s = c.on,
			f = c.value[o] == null ? u || (u = c0(n)) : void 0;
		(s !== e || i !== f) && (r = (e = s).copy()).on(a, (i = f)), (c.on = r);
	};
}
function xb(t, n, e) {
	var r = (t += '') == 'transform' ? Qh : s0;
	return n == null
		? this.styleTween(t, bb(t, r)).on('end.style.' + t, c0(t))
		: typeof n == 'function'
			? this.styleTween(t, _b(t, r, Es(this, 'style.' + t, n))).each(wb(this._id, t))
			: this.styleTween(t, vb(t, r, n), e).on('end.style.' + t, null);
}
function Mb(t, n, e) {
	return function (r) {
		this.style.setProperty(t, n.call(this, r), e);
	};
}
function $b(t, n, e) {
	var r, i;
	function o() {
		var a = n.apply(this, arguments);
		return a !== i && (r = (i = a) && Mb(t, a, e)), r;
	}
	return (o._value = n), o;
}
function Tb(t, n, e) {
	var r = 'style.' + (t += '');
	if (arguments.length < 2) return (r = this.tween(r)) && r._value;
	if (n == null) return this.tween(r, null);
	if (typeof n != 'function') throw new Error();
	return this.tween(r, $b(t, n, e ?? ''));
}
function Sb(t) {
	return function () {
		this.textContent = t;
	};
}
function kb(t) {
	return function () {
		var n = t(this);
		this.textContent = n ?? '';
	};
}
function Ab(t) {
	return this.tween(
		'text',
		typeof t == 'function' ? kb(Es(this, 'text', t)) : Sb(t == null ? '' : t + '')
	);
}
function Eb(t) {
	return function (n) {
		this.textContent = t.call(this, n);
	};
}
function Nb(t) {
	var n, e;
	function r() {
		var i = t.apply(this, arguments);
		return i !== e && (n = (e = i) && Eb(i)), n;
	}
	return (r._value = t), r;
}
function Cb(t) {
	var n = 'text';
	if (arguments.length < 1) return (n = this.tween(n)) && n._value;
	if (t == null) return this.tween(n, null);
	if (typeof t != 'function') throw new Error();
	return this.tween(n, Nb(t));
}
function Rb() {
	for (
		var t = this._name, n = this._id, e = l0(), r = this._groups, i = r.length, o = 0;
		o < i;
		++o
	)
		for (var a = r[o], u = a.length, c, s = 0; s < u; ++s)
			if ((c = a[s])) {
				var f = ln(c, n);
				na(c, t, e, s, a, {
					time: f.time + f.delay + f.duration,
					delay: 0,
					duration: f.duration,
					ease: f.ease
				});
			}
	return new yn(r, this._parents, t, e);
}
function Pb() {
	var t,
		n,
		e = this,
		r = e._id,
		i = e.size();
	return new Promise(function (o, a) {
		var u = { value: a },
			c = {
				value: function () {
					--i === 0 && o();
				}
			};
		e.each(function () {
			var s = wn(this, r),
				f = s.on;
			f !== t && ((n = (t = f).copy()), n._.cancel.push(u), n._.interrupt.push(u), n._.end.push(c)),
				(s.on = n);
		}),
			i === 0 && o();
	});
}
var Ib = 0;
function yn(t, n, e, r) {
	(this._groups = t), (this._parents = n), (this._name = e), (this._id = r);
}
function f0(t) {
	return be().transition(t);
}
function l0() {
	return ++Ib;
}
var Mn = be.prototype;
yn.prototype = f0.prototype = {
	constructor: yn,
	select: gb,
	selectAll: pb,
	selectChild: Mn.selectChild,
	selectChildren: Mn.selectChildren,
	filter: ub,
	merge: sb,
	selection: yb,
	transition: Rb,
	call: Mn.call,
	nodes: Mn.nodes,
	node: Mn.node,
	size: Mn.size,
	empty: Mn.empty,
	each: Mn.each,
	on: lb,
	attr: Xy,
	attrTween: Zy,
	style: xb,
	styleTween: Tb,
	text: Ab,
	textTween: Cb,
	remove: db,
	tween: Fy,
	delay: Jy,
	duration: eb,
	ease: ib,
	easeVarying: ab,
	end: Pb,
	[Symbol.iterator]: Mn[Symbol.iterator]
};
const zb = (t) => +t;
function Db(t) {
	return t * t;
}
function Ob(t) {
	return t * (2 - t);
}
function jc(t) {
	return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}
function Fb(t) {
	return t * t * t;
}
function Lb(t) {
	return --t * t * t + 1;
}
function Eu(t) {
	return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Ns = 3,
	Bb = (function t(n) {
		n = +n;
		function e(r) {
			return Math.pow(r, n);
		}
		return (e.exponent = t), e;
	})(Ns),
	Ub = (function t(n) {
		n = +n;
		function e(r) {
			return 1 - Math.pow(1 - r, n);
		}
		return (e.exponent = t), e;
	})(Ns),
	Zc = (function t(n) {
		n = +n;
		function e(r) {
			return ((r *= 2) <= 1 ? Math.pow(r, n) : 2 - Math.pow(2 - r, n)) / 2;
		}
		return (e.exponent = t), e;
	})(Ns),
	h0 = Math.PI,
	d0 = h0 / 2;
function qb(t) {
	return +t == 1 ? 1 : 1 - Math.cos(t * d0);
}
function Yb(t) {
	return Math.sin(t * d0);
}
function Qc(t) {
	return (1 - Math.cos(h0 * t)) / 2;
}
function Yn(t) {
	return (Math.pow(2, -10 * t) - 0.0009765625) * 1.0009775171065494;
}
function Hb(t) {
	return Yn(1 - +t);
}
function Xb(t) {
	return 1 - Yn(t);
}
function Kc(t) {
	return ((t *= 2) <= 1 ? Yn(1 - t) : 2 - Yn(t - 1)) / 2;
}
function Gb(t) {
	return 1 - Math.sqrt(1 - t * t);
}
function Wb(t) {
	return Math.sqrt(1 - --t * t);
}
function Jc(t) {
	return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}
var Nu = 4 / 11,
	Vb = 6 / 11,
	jb = 8 / 11,
	Zb = 3 / 4,
	Qb = 9 / 11,
	Kb = 10 / 11,
	Jb = 15 / 16,
	tv = 21 / 22,
	nv = 63 / 64,
	wi = 1 / Nu / Nu;
function ev(t) {
	return 1 - Wr(1 - t);
}
function Wr(t) {
	return (t = +t) < Nu
		? wi * t * t
		: t < jb
			? wi * (t -= Vb) * t + Zb
			: t < Kb
				? wi * (t -= Qb) * t + Jb
				: wi * (t -= tv) * t + nv;
}
function rv(t) {
	return ((t *= 2) <= 1 ? 1 - Wr(1 - t) : Wr(t - 1) + 1) / 2;
}
var Cs = 1.70158,
	iv = (function t(n) {
		n = +n;
		function e(r) {
			return (r = +r) * r * (n * (r - 1) + r);
		}
		return (e.overshoot = t), e;
	})(Cs),
	ov = (function t(n) {
		n = +n;
		function e(r) {
			return --r * r * ((r + 1) * n + r) + 1;
		}
		return (e.overshoot = t), e;
	})(Cs),
	tf = (function t(n) {
		n = +n;
		function e(r) {
			return ((r *= 2) < 1 ? r * r * ((n + 1) * r - n) : (r -= 2) * r * ((n + 1) * r + n) + 2) / 2;
		}
		return (e.overshoot = t), e;
	})(Cs),
	Ze = 2 * Math.PI,
	Rs = 1,
	Ps = 0.3,
	av = (function t(n, e) {
		var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Ze);
		function i(o) {
			return n * Yn(-(--o)) * Math.sin((r - o) / e);
		}
		return (
			(i.amplitude = function (o) {
				return t(o, e * Ze);
			}),
			(i.period = function (o) {
				return t(n, o);
			}),
			i
		);
	})(Rs, Ps),
	nf = (function t(n, e) {
		var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Ze);
		function i(o) {
			return 1 - n * Yn((o = +o)) * Math.sin((o + r) / e);
		}
		return (
			(i.amplitude = function (o) {
				return t(o, e * Ze);
			}),
			(i.period = function (o) {
				return t(n, o);
			}),
			i
		);
	})(Rs, Ps),
	uv = (function t(n, e) {
		var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Ze);
		function i(o) {
			return (
				((o = o * 2 - 1) < 0
					? n * Yn(-o) * Math.sin((r - o) / e)
					: 2 - n * Yn(o) * Math.sin((r + o) / e)) / 2
			);
		}
		return (
			(i.amplitude = function (o) {
				return t(o, e * Ze);
			}),
			(i.period = function (o) {
				return t(n, o);
			}),
			i
		);
	})(Rs, Ps),
	sv = { time: null, delay: 0, duration: 250, ease: Eu };
function cv(t, n) {
	for (var e; !(e = t.__transition) || !(e = e[n]); )
		if (!(t = t.parentNode)) throw new Error(`transition ${n} not found`);
	return e;
}
function fv(t) {
	var n, e;
	t instanceof yn
		? ((n = t._id), (t = t._name))
		: ((n = l0()), ((e = sv).time = ii()), (t = t == null ? null : t + ''));
	for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
		for (var a = r[o], u = a.length, c, s = 0; s < u; ++s)
			(c = a[s]) && na(c, t, n, s, a, e || cv(c, n));
	return new yn(r, this._parents, t, n);
}
be.prototype.interrupt = zy;
be.prototype.transition = fv;
var lv = [null];
function hv(t, n) {
	var e = t.__transition,
		r,
		i;
	if (e) {
		n = n == null ? null : n + '';
		for (i in e) if ((r = e[i]).state > Su && r.name === n) return new yn([[t]], lv, n, +i);
	}
	return null;
}
const La = (t) => () => t;
function dv(t, { sourceEvent: n, target: e, selection: r, mode: i, dispatch: o }) {
	Object.defineProperties(this, {
		type: { value: t, enumerable: !0, configurable: !0 },
		sourceEvent: { value: n, enumerable: !0, configurable: !0 },
		target: { value: e, enumerable: !0, configurable: !0 },
		selection: { value: r, enumerable: !0, configurable: !0 },
		mode: { value: i, enumerable: !0, configurable: !0 },
		_: { value: o }
	});
}
function gv(t) {
	t.stopImmediatePropagation();
}
function Ba(t) {
	t.preventDefault(), t.stopImmediatePropagation();
}
var ef = { name: 'drag' },
	Ua = { name: 'space' },
	Ee = { name: 'handle' },
	Ne = { name: 'center' };
const { abs: rf, max: At, min: Et } = Math;
function of(t) {
	return [+t[0], +t[1]];
}
function Cu(t) {
	return [of(t[0]), of(t[1])];
}
var Yi = {
		name: 'x',
		handles: ['w', 'e'].map(Vr),
		input: function (t, n) {
			return t == null
				? null
				: [
						[+t[0], n[0][1]],
						[+t[1], n[1][1]]
					];
		},
		output: function (t) {
			return t && [t[0][0], t[1][0]];
		}
	},
	Hi = {
		name: 'y',
		handles: ['n', 's'].map(Vr),
		input: function (t, n) {
			return t == null
				? null
				: [
						[n[0][0], +t[0]],
						[n[1][0], +t[1]]
					];
		},
		output: function (t) {
			return t && [t[0][1], t[1][1]];
		}
	},
	pv = {
		name: 'xy',
		handles: ['n', 'w', 'e', 's', 'nw', 'ne', 'sw', 'se'].map(Vr),
		input: function (t) {
			return t == null ? null : Cu(t);
		},
		output: function (t) {
			return t;
		}
	},
	$n = {
		overlay: 'crosshair',
		selection: 'move',
		n: 'ns-resize',
		e: 'ew-resize',
		s: 'ns-resize',
		w: 'ew-resize',
		nw: 'nwse-resize',
		ne: 'nesw-resize',
		se: 'nwse-resize',
		sw: 'nesw-resize'
	},
	af = { e: 'w', w: 'e', nw: 'ne', ne: 'nw', se: 'sw', sw: 'se' },
	uf = { n: 's', s: 'n', nw: 'sw', ne: 'se', se: 'ne', sw: 'nw' },
	mv = { overlay: 1, selection: 1, n: null, e: 1, s: null, w: -1, nw: -1, ne: 1, se: 1, sw: -1 },
	yv = { overlay: 1, selection: 1, n: -1, e: null, s: 1, w: null, nw: -1, ne: -1, se: 1, sw: 1 };
function Vr(t) {
	return { type: t };
}
function bv(t) {
	return !t.ctrlKey && !t.button;
}
function vv() {
	var t = this.ownerSVGElement || this;
	return t.hasAttribute('viewBox')
		? ((t = t.viewBox.baseVal),
			[
				[t.x, t.y],
				[t.x + t.width, t.y + t.height]
			])
		: [
				[0, 0],
				[t.width.baseVal.value, t.height.baseVal.value]
			];
}
function _v() {
	return navigator.maxTouchPoints || 'ontouchstart' in this;
}
function qa(t) {
	for (; !t.__brush; ) if (!(t = t.parentNode)) return;
	return t.__brush;
}
function wv(t) {
	return t[0][0] === t[1][0] || t[0][1] === t[1][1];
}
function xv(t) {
	var n = t.__brush;
	return n ? n.dim.output(n.selection) : null;
}
function Mv() {
	return Is(Yi);
}
function $v() {
	return Is(Hi);
}
function Tv() {
	return Is(pv);
}
function Is(t) {
	var n = vv,
		e = bv,
		r = _v,
		i = !0,
		o = ye('start', 'brush', 'end'),
		a = 6,
		u;
	function c(g) {
		var y = g
			.property('__brush', m)
			.selectAll('.overlay')
			.data([Vr('overlay')]);
		y
			.enter()
			.append('rect')
			.attr('class', 'overlay')
			.attr('pointer-events', 'all')
			.attr('cursor', $n.overlay)
			.merge(y)
			.each(function () {
				var v = qa(this).extent;
				ht(this)
					.attr('x', v[0][0])
					.attr('y', v[0][1])
					.attr('width', v[1][0] - v[0][0])
					.attr('height', v[1][1] - v[0][1]);
			}),
			g
				.selectAll('.selection')
				.data([Vr('selection')])
				.enter()
				.append('rect')
				.attr('class', 'selection')
				.attr('cursor', $n.selection)
				.attr('fill', '#777')
				.attr('fill-opacity', 0.3)
				.attr('stroke', '#fff')
				.attr('shape-rendering', 'crispEdges');
		var _ = g.selectAll('.handle').data(t.handles, function (v) {
			return v.type;
		});
		_.exit().remove(),
			_.enter()
				.append('rect')
				.attr('class', function (v) {
					return 'handle handle--' + v.type;
				})
				.attr('cursor', function (v) {
					return $n[v.type];
				}),
			g
				.each(s)
				.attr('fill', 'none')
				.attr('pointer-events', 'all')
				.on('mousedown.brush', l)
				.filter(r)
				.on('touchstart.brush', l)
				.on('touchmove.brush', d)
				.on('touchend.brush touchcancel.brush', p)
				.style('touch-action', 'none')
				.style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
	}
	(c.move = function (g, y, _) {
		g.tween
			? g
					.on('start.brush', function (v) {
						f(this, arguments).beforestart().start(v);
					})
					.on('interrupt.brush end.brush', function (v) {
						f(this, arguments).end(v);
					})
					.tween('brush', function () {
						var v = this,
							b = v.__brush,
							w = f(v, arguments),
							x = b.selection,
							k = t.input(typeof y == 'function' ? y.apply(this, arguments) : y, b.extent),
							E = Wn(x, k);
						function N(A) {
							(b.selection = A === 1 && k === null ? null : E(A)), s.call(v), w.brush();
						}
						return x !== null && k !== null ? N : N(1);
					})
			: g.each(function () {
					var v = this,
						b = arguments,
						w = v.__brush,
						x = t.input(typeof y == 'function' ? y.apply(v, b) : y, w.extent),
						k = f(v, b).beforestart();
					oe(v), (w.selection = x === null ? null : x), s.call(v), k.start(_).brush(_).end(_);
				});
	}),
		(c.clear = function (g, y) {
			c.move(g, null, y);
		});
	function s() {
		var g = ht(this),
			y = qa(this).selection;
		y
			? (g
					.selectAll('.selection')
					.style('display', null)
					.attr('x', y[0][0])
					.attr('y', y[0][1])
					.attr('width', y[1][0] - y[0][0])
					.attr('height', y[1][1] - y[0][1]),
				g
					.selectAll('.handle')
					.style('display', null)
					.attr('x', function (_) {
						return _.type[_.type.length - 1] === 'e' ? y[1][0] - a / 2 : y[0][0] - a / 2;
					})
					.attr('y', function (_) {
						return _.type[0] === 's' ? y[1][1] - a / 2 : y[0][1] - a / 2;
					})
					.attr('width', function (_) {
						return _.type === 'n' || _.type === 's' ? y[1][0] - y[0][0] + a : a;
					})
					.attr('height', function (_) {
						return _.type === 'e' || _.type === 'w' ? y[1][1] - y[0][1] + a : a;
					}))
			: g
					.selectAll('.selection,.handle')
					.style('display', 'none')
					.attr('x', null)
					.attr('y', null)
					.attr('width', null)
					.attr('height', null);
	}
	function f(g, y, _) {
		var v = g.__brush.emitter;
		return v && (!_ || !v.clean) ? v : new h(g, y, _);
	}
	function h(g, y, _) {
		(this.that = g), (this.args = y), (this.state = g.__brush), (this.active = 0), (this.clean = _);
	}
	h.prototype = {
		beforestart: function () {
			return ++this.active === 1 && ((this.state.emitter = this), (this.starting = !0)), this;
		},
		start: function (g, y) {
			return (
				this.starting ? ((this.starting = !1), this.emit('start', g, y)) : this.emit('brush', g),
				this
			);
		},
		brush: function (g, y) {
			return this.emit('brush', g, y), this;
		},
		end: function (g, y) {
			return --this.active === 0 && (delete this.state.emitter, this.emit('end', g, y)), this;
		},
		emit: function (g, y, _) {
			var v = ht(this.that).datum();
			o.call(
				g,
				this.that,
				new dv(g, {
					sourceEvent: y,
					target: c,
					selection: t.output(this.state.selection),
					mode: _,
					dispatch: o
				}),
				v
			);
		}
	};
	function l(g) {
		if ((u && !g.touches) || !e.apply(this, arguments)) return;
		var y = this,
			_ = g.target.__data__.type,
			v = (i && g.metaKey ? (_ = 'overlay') : _) === 'selection' ? ef : i && g.altKey ? Ne : Ee,
			b = t === Hi ? null : mv[_],
			w = t === Yi ? null : yv[_],
			x = qa(y),
			k = x.extent,
			E = x.selection,
			N = k[0][0],
			A,
			$,
			P = k[0][1],
			C,
			M,
			S = k[1][0],
			T,
			R,
			O = k[1][1],
			z,
			L,
			q = 0,
			W = 0,
			I,
			X = b && w && i && g.shiftKey,
			U,
			J,
			B = Array.from(g.touches || [g], (j) => {
				const ut = j.identifier;
				return (j = Zt(j, y)), (j.point0 = j.slice()), (j.identifier = ut), j;
			});
		oe(y);
		var Z = f(y, arguments, !0).beforestart();
		if (_ === 'overlay') {
			E && (I = !0);
			const j = [B[0], B[1] || B[0]];
			(x.selection = E =
				[
					[(A = t === Hi ? N : Et(j[0][0], j[1][0])), (C = t === Yi ? P : Et(j[0][1], j[1][1]))],
					[(T = t === Hi ? S : At(j[0][0], j[1][0])), (z = t === Yi ? O : At(j[0][1], j[1][1]))]
				]),
				B.length > 1 && gt(g);
		} else (A = E[0][0]), (C = E[0][1]), (T = E[1][0]), (z = E[1][1]);
		($ = A), (M = C), (R = T), (L = z);
		var D = ht(y).attr('pointer-events', 'none'),
			V = D.selectAll('.overlay').attr('cursor', $n[_]);
		if (g.touches) (Z.moved = F), (Z.ended = ct);
		else {
			var tt = ht(g.view).on('mousemove.brush', F, !0).on('mouseup.brush', ct, !0);
			i && tt.on('keydown.brush', H, !0).on('keyup.brush', at, !0), Go(g.view);
		}
		s.call(y), Z.start(g, v.name);
		function F(j) {
			for (const ut of j.changedTouches || [j])
				for (const Vt of B) Vt.identifier === ut.identifier && (Vt.cur = Zt(ut, y));
			if (X && !U && !J && B.length === 1) {
				const ut = B[0];
				rf(ut.cur[0] - ut[0]) > rf(ut.cur[1] - ut[1]) ? (J = !0) : (U = !0);
			}
			for (const ut of B) ut.cur && ((ut[0] = ut.cur[0]), (ut[1] = ut.cur[1]));
			(I = !0), Ba(j), gt(j);
		}
		function gt(j) {
			const ut = B[0],
				Vt = ut.point0;
			var Ht;
			switch (((q = ut[0] - Vt[0]), (W = ut[1] - Vt[1]), v)) {
				case Ua:
				case ef: {
					b && ((q = At(N - A, Et(S - T, q))), ($ = A + q), (R = T + q)),
						w && ((W = At(P - C, Et(O - z, W))), (M = C + W), (L = z + W));
					break;
				}
				case Ee: {
					B[1]
						? (b && (($ = At(N, Et(S, B[0][0]))), (R = At(N, Et(S, B[1][0]))), (b = 1)),
							w && ((M = At(P, Et(O, B[0][1]))), (L = At(P, Et(O, B[1][1]))), (w = 1)))
						: (b < 0
								? ((q = At(N - A, Et(S - A, q))), ($ = A + q), (R = T))
								: b > 0 && ((q = At(N - T, Et(S - T, q))), ($ = A), (R = T + q)),
							w < 0
								? ((W = At(P - C, Et(O - C, W))), (M = C + W), (L = z))
								: w > 0 && ((W = At(P - z, Et(O - z, W))), (M = C), (L = z + W)));
					break;
				}
				case Ne: {
					b && (($ = At(N, Et(S, A - q * b))), (R = At(N, Et(S, T + q * b)))),
						w && ((M = At(P, Et(O, C - W * w))), (L = At(P, Et(O, z + W * w))));
					break;
				}
			}
			R < $ &&
				((b *= -1),
				(Ht = A),
				(A = T),
				(T = Ht),
				(Ht = $),
				($ = R),
				(R = Ht),
				_ in af && V.attr('cursor', $n[(_ = af[_])])),
				L < M &&
					((w *= -1),
					(Ht = C),
					(C = z),
					(z = Ht),
					(Ht = M),
					(M = L),
					(L = Ht),
					_ in uf && V.attr('cursor', $n[(_ = uf[_])])),
				x.selection && (E = x.selection),
				U && (($ = E[0][0]), (R = E[1][0])),
				J && ((M = E[0][1]), (L = E[1][1])),
				(E[0][0] !== $ || E[0][1] !== M || E[1][0] !== R || E[1][1] !== L) &&
					((x.selection = [
						[$, M],
						[R, L]
					]),
					s.call(y),
					Z.brush(j, v.name));
		}
		function ct(j) {
			if ((gv(j), j.touches)) {
				if (j.touches.length) return;
				u && clearTimeout(u),
					(u = setTimeout(function () {
						u = null;
					}, 500));
			} else Wo(j.view, I), tt.on('keydown.brush keyup.brush mousemove.brush mouseup.brush', null);
			D.attr('pointer-events', 'all'),
				V.attr('cursor', $n.overlay),
				x.selection && (E = x.selection),
				wv(E) && ((x.selection = null), s.call(y)),
				Z.end(j, v.name);
		}
		function H(j) {
			switch (j.keyCode) {
				case 16: {
					X = b && w;
					break;
				}
				case 18: {
					v === Ee &&
						(b && ((T = R - q * b), (A = $ + q * b)),
						w && ((z = L - W * w), (C = M + W * w)),
						(v = Ne),
						gt(j));
					break;
				}
				case 32: {
					(v === Ee || v === Ne) &&
						(b < 0 ? (T = R - q) : b > 0 && (A = $ - q),
						w < 0 ? (z = L - W) : w > 0 && (C = M - W),
						(v = Ua),
						V.attr('cursor', $n.selection),
						gt(j));
					break;
				}
				default:
					return;
			}
			Ba(j);
		}
		function at(j) {
			switch (j.keyCode) {
				case 16: {
					X && ((U = J = X = !1), gt(j));
					break;
				}
				case 18: {
					v === Ne &&
						(b < 0 ? (T = R) : b > 0 && (A = $),
						w < 0 ? (z = L) : w > 0 && (C = M),
						(v = Ee),
						gt(j));
					break;
				}
				case 32: {
					v === Ua &&
						(j.altKey
							? (b && ((T = R - q * b), (A = $ + q * b)),
								w && ((z = L - W * w), (C = M + W * w)),
								(v = Ne))
							: (b < 0 ? (T = R) : b > 0 && (A = $), w < 0 ? (z = L) : w > 0 && (C = M), (v = Ee)),
						V.attr('cursor', $n[_]),
						gt(j));
					break;
				}
				default:
					return;
			}
			Ba(j);
		}
	}
	function d(g) {
		f(this, arguments).moved(g);
	}
	function p(g) {
		f(this, arguments).ended(g);
	}
	function m() {
		var g = this.__brush || { selection: null };
		return (g.extent = Cu(n.apply(this, arguments))), (g.dim = t), g;
	}
	return (
		(c.extent = function (g) {
			return arguments.length ? ((n = typeof g == 'function' ? g : La(Cu(g))), c) : n;
		}),
		(c.filter = function (g) {
			return arguments.length ? ((e = typeof g == 'function' ? g : La(!!g)), c) : e;
		}),
		(c.touchable = function (g) {
			return arguments.length ? ((r = typeof g == 'function' ? g : La(!!g)), c) : r;
		}),
		(c.handleSize = function (g) {
			return arguments.length ? ((a = +g), c) : a;
		}),
		(c.keyModifiers = function (g) {
			return arguments.length ? ((i = !!g), c) : i;
		}),
		(c.on = function () {
			var g = o.on.apply(o, arguments);
			return g === o ? c : g;
		}),
		c
	);
}
var sf = Math.abs,
	Ce = Math.cos,
	Re = Math.sin,
	g0 = Math.PI,
	xi = g0 / 2,
	cf = g0 * 2,
	ff = Math.max,
	Ya = 1e-12;
function Ha(t, n) {
	return Array.from({ length: n - t }, (e, r) => t + r);
}
function Sv(t) {
	return function (n, e) {
		return t(n.source.value + n.target.value, e.source.value + e.target.value);
	};
}
function kv() {
	return zs(!1, !1);
}
function Av() {
	return zs(!1, !0);
}
function Ev() {
	return zs(!0, !1);
}
function zs(t, n) {
	var e = 0,
		r = null,
		i = null,
		o = null;
	function a(u) {
		var c = u.length,
			s = new Array(c),
			f = Ha(0, c),
			h = new Array(c * c),
			l = new Array(c),
			d = 0,
			p;
		u = Float64Array.from(
			{ length: c * c },
			n ? (m, g) => u[g % c][(g / c) | 0] : (m, g) => u[(g / c) | 0][g % c]
		);
		for (let m = 0; m < c; ++m) {
			let g = 0;
			for (let y = 0; y < c; ++y) g += u[m * c + y] + t * u[y * c + m];
			d += s[m] = g;
		}
		(d = ff(0, cf - e * c) / d), (p = d ? e : cf / c);
		{
			let m = 0;
			r && f.sort((g, y) => r(s[g], s[y]));
			for (const g of f) {
				const y = m;
				if (t) {
					const _ = Ha(~c + 1, c).filter((v) => (v < 0 ? u[~v * c + g] : u[g * c + v]));
					i &&
						_.sort((v, b) =>
							i(v < 0 ? -u[~v * c + g] : u[g * c + v], b < 0 ? -u[~b * c + g] : u[g * c + b])
						);
					for (const v of _)
						if (v < 0) {
							const b = h[~v * c + g] || (h[~v * c + g] = { source: null, target: null });
							b.target = {
								index: g,
								startAngle: m,
								endAngle: (m += u[~v * c + g] * d),
								value: u[~v * c + g]
							};
						} else {
							const b = h[g * c + v] || (h[g * c + v] = { source: null, target: null });
							b.source = {
								index: g,
								startAngle: m,
								endAngle: (m += u[g * c + v] * d),
								value: u[g * c + v]
							};
						}
					l[g] = { index: g, startAngle: y, endAngle: m, value: s[g] };
				} else {
					const _ = Ha(0, c).filter((v) => u[g * c + v] || u[v * c + g]);
					i && _.sort((v, b) => i(u[g * c + v], u[g * c + b]));
					for (const v of _) {
						let b;
						if (
							(g < v
								? ((b = h[g * c + v] || (h[g * c + v] = { source: null, target: null })),
									(b.source = {
										index: g,
										startAngle: m,
										endAngle: (m += u[g * c + v] * d),
										value: u[g * c + v]
									}))
								: ((b = h[v * c + g] || (h[v * c + g] = { source: null, target: null })),
									(b.target = {
										index: g,
										startAngle: m,
										endAngle: (m += u[g * c + v] * d),
										value: u[g * c + v]
									}),
									g === v && (b.source = b.target)),
							b.source && b.target && b.source.value < b.target.value)
						) {
							const w = b.source;
							(b.source = b.target), (b.target = w);
						}
					}
					l[g] = { index: g, startAngle: y, endAngle: m, value: s[g] };
				}
				m += p;
			}
		}
		return (h = Object.values(h)), (h.groups = l), o ? h.sort(o) : h;
	}
	return (
		(a.padAngle = function (u) {
			return arguments.length ? ((e = ff(0, u)), a) : e;
		}),
		(a.sortGroups = function (u) {
			return arguments.length ? ((r = u), a) : r;
		}),
		(a.sortSubgroups = function (u) {
			return arguments.length ? ((i = u), a) : i;
		}),
		(a.sortChords = function (u) {
			return arguments.length ? (u == null ? (o = null) : ((o = Sv(u))._ = u), a) : o && o._;
		}),
		a
	);
}
const Ru = Math.PI,
	Pu = 2 * Ru,
	Kn = 1e-6,
	Nv = Pu - Kn;
function p0(t) {
	this._ += t[0];
	for (let n = 1, e = t.length; n < e; ++n) this._ += arguments[n] + t[n];
}
function Cv(t) {
	let n = Math.floor(t);
	if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
	if (n > 15) return p0;
	const e = 10 ** n;
	return function (r) {
		this._ += r[0];
		for (let i = 1, o = r.length; i < o; ++i) this._ += Math.round(arguments[i] * e) / e + r[i];
	};
}
let oi = class {
	constructor(n) {
		(this._x0 = this._y0 = this._x1 = this._y1 = null),
			(this._ = ''),
			(this._append = n == null ? p0 : Cv(n));
	}
	moveTo(n, e) {
		this._append`M${(this._x0 = this._x1 = +n)},${(this._y0 = this._y1 = +e)}`;
	}
	closePath() {
		this._x1 !== null && ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
	}
	lineTo(n, e) {
		this._append`L${(this._x1 = +n)},${(this._y1 = +e)}`;
	}
	quadraticCurveTo(n, e, r, i) {
		this._append`Q${+n},${+e},${(this._x1 = +r)},${(this._y1 = +i)}`;
	}
	bezierCurveTo(n, e, r, i, o, a) {
		this._append`C${+n},${+e},${+r},${+i},${(this._x1 = +o)},${(this._y1 = +a)}`;
	}
	arcTo(n, e, r, i, o) {
		if (((n = +n), (e = +e), (r = +r), (i = +i), (o = +o), o < 0))
			throw new Error(`negative radius: ${o}`);
		let a = this._x1,
			u = this._y1,
			c = r - n,
			s = i - e,
			f = a - n,
			h = u - e,
			l = f * f + h * h;
		if (this._x1 === null) this._append`M${(this._x1 = n)},${(this._y1 = e)}`;
		else if (l > Kn)
			if (!(Math.abs(h * c - s * f) > Kn) || !o) this._append`L${(this._x1 = n)},${(this._y1 = e)}`;
			else {
				let d = r - a,
					p = i - u,
					m = c * c + s * s,
					g = d * d + p * p,
					y = Math.sqrt(m),
					_ = Math.sqrt(l),
					v = o * Math.tan((Ru - Math.acos((m + l - g) / (2 * y * _))) / 2),
					b = v / _,
					w = v / y;
				Math.abs(b - 1) > Kn && this._append`L${n + b * f},${e + b * h}`,
					this
						._append`A${o},${o},0,0,${+(h * d > f * p)},${(this._x1 = n + w * c)},${(this._y1 = e + w * s)}`;
			}
	}
	arc(n, e, r, i, o, a) {
		if (((n = +n), (e = +e), (r = +r), (a = !!a), r < 0)) throw new Error(`negative radius: ${r}`);
		let u = r * Math.cos(i),
			c = r * Math.sin(i),
			s = n + u,
			f = e + c,
			h = 1 ^ a,
			l = a ? i - o : o - i;
		this._x1 === null
			? this._append`M${s},${f}`
			: (Math.abs(this._x1 - s) > Kn || Math.abs(this._y1 - f) > Kn) && this._append`L${s},${f}`,
			r &&
				(l < 0 && (l = (l % Pu) + Pu),
				l > Nv
					? this
							._append`A${r},${r},0,1,${h},${n - u},${e - c}A${r},${r},0,1,${h},${(this._x1 = s)},${(this._y1 = f)}`
					: l > Kn &&
						this
							._append`A${r},${r},0,${+(l >= Ru)},${h},${(this._x1 = n + r * Math.cos(o))},${(this._y1 = e + r * Math.sin(o))}`);
	}
	rect(n, e, r, i) {
		this
			._append`M${(this._x0 = this._x1 = +n)},${(this._y0 = this._y1 = +e)}h${(r = +r)}v${+i}h${-r}Z`;
	}
	toString() {
		return this._;
	}
};
function Ds() {
	return new oi();
}
Ds.prototype = oi.prototype;
function Rv(t = 3) {
	return new oi(+t);
}
var Pv = Array.prototype.slice;
function Zn(t) {
	return function () {
		return t;
	};
}
function Iv(t) {
	return t.source;
}
function zv(t) {
	return t.target;
}
function lf(t) {
	return t.radius;
}
function Dv(t) {
	return t.startAngle;
}
function Ov(t) {
	return t.endAngle;
}
function Fv() {
	return 0;
}
function Lv() {
	return 10;
}
function m0(t) {
	var n = Iv,
		e = zv,
		r = lf,
		i = lf,
		o = Dv,
		a = Ov,
		u = Fv,
		c = null;
	function s() {
		var f,
			h = n.apply(this, arguments),
			l = e.apply(this, arguments),
			d = u.apply(this, arguments) / 2,
			p = Pv.call(arguments),
			m = +r.apply(this, ((p[0] = h), p)),
			g = o.apply(this, p) - xi,
			y = a.apply(this, p) - xi,
			_ = +i.apply(this, ((p[0] = l), p)),
			v = o.apply(this, p) - xi,
			b = a.apply(this, p) - xi;
		if (
			(c || (c = f = Ds()),
			d > Ya &&
				(sf(y - g) > d * 2 + Ya
					? y > g
						? ((g += d), (y -= d))
						: ((g -= d), (y += d))
					: (g = y = (g + y) / 2),
				sf(b - v) > d * 2 + Ya
					? b > v
						? ((v += d), (b -= d))
						: ((v -= d), (b += d))
					: (v = b = (v + b) / 2)),
			c.moveTo(m * Ce(g), m * Re(g)),
			c.arc(0, 0, m, g, y),
			g !== v || y !== b)
		)
			if (t) {
				var w = +t.apply(this, arguments),
					x = _ - w,
					k = (v + b) / 2;
				c.quadraticCurveTo(0, 0, x * Ce(v), x * Re(v)),
					c.lineTo(_ * Ce(k), _ * Re(k)),
					c.lineTo(x * Ce(b), x * Re(b));
			} else c.quadraticCurveTo(0, 0, _ * Ce(v), _ * Re(v)), c.arc(0, 0, _, v, b);
		if ((c.quadraticCurveTo(0, 0, m * Ce(g), m * Re(g)), c.closePath(), f))
			return (c = null), f + '' || null;
	}
	return (
		t &&
			(s.headRadius = function (f) {
				return arguments.length ? ((t = typeof f == 'function' ? f : Zn(+f)), s) : t;
			}),
		(s.radius = function (f) {
			return arguments.length ? ((r = i = typeof f == 'function' ? f : Zn(+f)), s) : r;
		}),
		(s.sourceRadius = function (f) {
			return arguments.length ? ((r = typeof f == 'function' ? f : Zn(+f)), s) : r;
		}),
		(s.targetRadius = function (f) {
			return arguments.length ? ((i = typeof f == 'function' ? f : Zn(+f)), s) : i;
		}),
		(s.startAngle = function (f) {
			return arguments.length ? ((o = typeof f == 'function' ? f : Zn(+f)), s) : o;
		}),
		(s.endAngle = function (f) {
			return arguments.length ? ((a = typeof f == 'function' ? f : Zn(+f)), s) : a;
		}),
		(s.padAngle = function (f) {
			return arguments.length ? ((u = typeof f == 'function' ? f : Zn(+f)), s) : u;
		}),
		(s.source = function (f) {
			return arguments.length ? ((n = f), s) : n;
		}),
		(s.target = function (f) {
			return arguments.length ? ((e = f), s) : e;
		}),
		(s.context = function (f) {
			return arguments.length ? ((c = f ?? null), s) : c;
		}),
		s
	);
}
function Bv() {
	return m0();
}
function Uv() {
	return m0(Lv);
}
var qv = Array.prototype,
	y0 = qv.slice;
function Yv(t, n) {
	return t - n;
}
function Hv(t) {
	for (var n = 0, e = t.length, r = t[e - 1][1] * t[0][0] - t[e - 1][0] * t[0][1]; ++n < e; )
		r += t[n - 1][1] * t[n][0] - t[n - 1][0] * t[n][1];
	return r;
}
const Dn = (t) => () => t;
function Xv(t, n) {
	for (var e = -1, r = n.length, i; ++e < r; ) if ((i = Gv(t, n[e]))) return i;
	return 0;
}
function Gv(t, n) {
	for (var e = n[0], r = n[1], i = -1, o = 0, a = t.length, u = a - 1; o < a; u = o++) {
		var c = t[o],
			s = c[0],
			f = c[1],
			h = t[u],
			l = h[0],
			d = h[1];
		if (Wv(c, h, n)) return 0;
		f > r != d > r && e < ((l - s) * (r - f)) / (d - f) + s && (i = -i);
	}
	return i;
}
function Wv(t, n, e) {
	var r;
	return Vv(t, n, e) && jv(t[(r = +(t[0] === n[0]))], e[r], n[r]);
}
function Vv(t, n, e) {
	return (n[0] - t[0]) * (e[1] - t[1]) === (e[0] - t[0]) * (n[1] - t[1]);
}
function jv(t, n, e) {
	return (t <= n && n <= e) || (e <= n && n <= t);
}
function Zv() {}
var Tn = [
	[],
	[
		[
			[1, 1.5],
			[0.5, 1]
		]
	],
	[
		[
			[1.5, 1],
			[1, 1.5]
		]
	],
	[
		[
			[1.5, 1],
			[0.5, 1]
		]
	],
	[
		[
			[1, 0.5],
			[1.5, 1]
		]
	],
	[
		[
			[1, 1.5],
			[0.5, 1]
		],
		[
			[1, 0.5],
			[1.5, 1]
		]
	],
	[
		[
			[1, 0.5],
			[1, 1.5]
		]
	],
	[
		[
			[1, 0.5],
			[0.5, 1]
		]
	],
	[
		[
			[0.5, 1],
			[1, 0.5]
		]
	],
	[
		[
			[1, 1.5],
			[1, 0.5]
		]
	],
	[
		[
			[0.5, 1],
			[1, 0.5]
		],
		[
			[1.5, 1],
			[1, 1.5]
		]
	],
	[
		[
			[1.5, 1],
			[1, 0.5]
		]
	],
	[
		[
			[0.5, 1],
			[1.5, 1]
		]
	],
	[
		[
			[1, 1.5],
			[1.5, 1]
		]
	],
	[
		[
			[0.5, 1],
			[1, 1.5]
		]
	],
	[]
];
function Iu() {
	var t = 1,
		n = 1,
		e = gs,
		r = c;
	function i(s) {
		var f = e(s);
		if (Array.isArray(f)) f = f.slice().sort(Yv);
		else {
			const h = Rr(s, Qv);
			for (f = ue(...ds(h[0], h[1], f), f); f[f.length - 1] >= h[1]; ) f.pop();
			for (; f[1] < h[0]; ) f.shift();
		}
		return f.map((h) => o(s, h));
	}
	function o(s, f) {
		const h = f == null ? NaN : +f;
		if (isNaN(h)) throw new Error(`invalid value: ${f}`);
		var l = [],
			d = [];
		return (
			a(s, h, function (p) {
				r(p, s, h), Hv(p) > 0 ? l.push([p]) : d.push(p);
			}),
			d.forEach(function (p) {
				for (var m = 0, g = l.length, y; m < g; ++m)
					if (Xv((y = l[m])[0], p) !== -1) {
						y.push(p);
						return;
					}
			}),
			{ type: 'MultiPolygon', value: f, coordinates: l }
		);
	}
	function a(s, f, h) {
		var l = new Array(),
			d = new Array(),
			p,
			m,
			g,
			y,
			_,
			v;
		for (p = m = -1, y = Qn(s[0], f), Tn[y << 1].forEach(b); ++p < t - 1; )
			(g = y), (y = Qn(s[p + 1], f)), Tn[g | (y << 1)].forEach(b);
		for (Tn[y << 0].forEach(b); ++m < n - 1; ) {
			for (
				p = -1, y = Qn(s[m * t + t], f), _ = Qn(s[m * t], f), Tn[(y << 1) | (_ << 2)].forEach(b);
				++p < t - 1;

			)
				(g = y),
					(y = Qn(s[m * t + t + p + 1], f)),
					(v = _),
					(_ = Qn(s[m * t + p + 1], f)),
					Tn[g | (y << 1) | (_ << 2) | (v << 3)].forEach(b);
			Tn[y | (_ << 3)].forEach(b);
		}
		for (p = -1, _ = s[m * t] >= f, Tn[_ << 2].forEach(b); ++p < t - 1; )
			(v = _), (_ = Qn(s[m * t + p + 1], f)), Tn[(_ << 2) | (v << 3)].forEach(b);
		Tn[_ << 3].forEach(b);
		function b(w) {
			var x = [w[0][0] + p, w[0][1] + m],
				k = [w[1][0] + p, w[1][1] + m],
				E = u(x),
				N = u(k),
				A,
				$;
			(A = d[E])
				? ($ = l[N])
					? (delete d[A.end],
						delete l[$.start],
						A === $
							? (A.ring.push(k), h(A.ring))
							: (l[A.start] = d[$.end] =
									{ start: A.start, end: $.end, ring: A.ring.concat($.ring) }))
					: (delete d[A.end], A.ring.push(k), (d[(A.end = N)] = A))
				: (A = l[N])
					? ($ = d[E])
						? (delete l[A.start],
							delete d[$.end],
							A === $
								? (A.ring.push(k), h(A.ring))
								: (l[$.start] = d[A.end] =
										{ start: $.start, end: A.end, ring: $.ring.concat(A.ring) }))
						: (delete l[A.start], A.ring.unshift(x), (l[(A.start = E)] = A))
					: (l[E] = d[N] = { start: E, end: N, ring: [x, k] });
		}
	}
	function u(s) {
		return s[0] * 2 + s[1] * (t + 1) * 4;
	}
	function c(s, f, h) {
		s.forEach(function (l) {
			var d = l[0],
				p = l[1],
				m = d | 0,
				g = p | 0,
				y = Xa(f[g * t + m]);
			d > 0 && d < t && m === d && (l[0] = hf(d, Xa(f[g * t + m - 1]), y, h)),
				p > 0 && p < n && g === p && (l[1] = hf(p, Xa(f[(g - 1) * t + m]), y, h));
		});
	}
	return (
		(i.contour = o),
		(i.size = function (s) {
			if (!arguments.length) return [t, n];
			var f = Math.floor(s[0]),
				h = Math.floor(s[1]);
			if (!(f >= 0 && h >= 0)) throw new Error('invalid size');
			return (t = f), (n = h), i;
		}),
		(i.thresholds = function (s) {
			return arguments.length
				? ((e = typeof s == 'function' ? s : Array.isArray(s) ? Dn(y0.call(s)) : Dn(s)), i)
				: e;
		}),
		(i.smooth = function (s) {
			return arguments.length ? ((r = s ? c : Zv), i) : r === c;
		}),
		i
	);
}
function Qv(t) {
	return isFinite(t) ? t : NaN;
}
function Qn(t, n) {
	return t == null ? !1 : +t >= n;
}
function Xa(t) {
	return t == null || isNaN((t = +t)) ? -1 / 0 : t;
}
function hf(t, n, e, r) {
	const i = r - n,
		o = e - n,
		a = isFinite(i) || isFinite(o) ? i / o : Math.sign(i) / Math.sign(o);
	return isNaN(a) ? t : t + a - 0.5;
}
function Kv(t) {
	return t[0];
}
function Jv(t) {
	return t[1];
}
function t_() {
	return 1;
}
function n_() {
	var t = Kv,
		n = Jv,
		e = t_,
		r = 960,
		i = 500,
		o = 20,
		a = 2,
		u = o * 3,
		c = (r + u * 2) >> a,
		s = (i + u * 2) >> a,
		f = Dn(20);
	function h(_) {
		var v = new Float32Array(c * s),
			b = Math.pow(2, -a),
			w = -1;
		for (const C of _) {
			var x = (t(C, ++w, _) + u) * b,
				k = (n(C, w, _) + u) * b,
				E = +e(C, w, _);
			if (E && x >= 0 && x < c && k >= 0 && k < s) {
				var N = Math.floor(x),
					A = Math.floor(k),
					$ = x - N - 0.5,
					P = k - A - 0.5;
				(v[N + A * c] += (1 - $) * (1 - P) * E),
					(v[N + 1 + A * c] += $ * (1 - P) * E),
					(v[N + 1 + (A + 1) * c] += $ * P * E),
					(v[N + (A + 1) * c] += (1 - $) * P * E);
			}
		}
		return jl({ data: v, width: c, height: s }, o * b), v;
	}
	function l(_) {
		var v = h(_),
			b = f(v),
			w = Math.pow(2, 2 * a);
		return (
			Array.isArray(b) || (b = ue(Number.MIN_VALUE, Lr(v) / w, b)),
			Iu()
				.size([c, s])
				.thresholds(b.map((x) => x * w))(v)
				.map((x, k) => ((x.value = +b[k]), d(x)))
		);
	}
	l.contours = function (_) {
		var v = h(_),
			b = Iu().size([c, s]),
			w = Math.pow(2, 2 * a),
			x = (k) => {
				k = +k;
				var E = d(b.contour(v, k * w));
				return (E.value = k), E;
			};
		return Object.defineProperty(x, 'max', { get: () => Lr(v) / w }), x;
	};
	function d(_) {
		return _.coordinates.forEach(p), _;
	}
	function p(_) {
		_.forEach(m);
	}
	function m(_) {
		_.forEach(g);
	}
	function g(_) {
		(_[0] = _[0] * Math.pow(2, a) - u), (_[1] = _[1] * Math.pow(2, a) - u);
	}
	function y() {
		return (u = o * 3), (c = (r + u * 2) >> a), (s = (i + u * 2) >> a), l;
	}
	return (
		(l.x = function (_) {
			return arguments.length ? ((t = typeof _ == 'function' ? _ : Dn(+_)), l) : t;
		}),
		(l.y = function (_) {
			return arguments.length ? ((n = typeof _ == 'function' ? _ : Dn(+_)), l) : n;
		}),
		(l.weight = function (_) {
			return arguments.length ? ((e = typeof _ == 'function' ? _ : Dn(+_)), l) : e;
		}),
		(l.size = function (_) {
			if (!arguments.length) return [r, i];
			var v = +_[0],
				b = +_[1];
			if (!(v >= 0 && b >= 0)) throw new Error('invalid size');
			return (r = v), (i = b), y();
		}),
		(l.cellSize = function (_) {
			if (!arguments.length) return 1 << a;
			if (!((_ = +_) >= 1)) throw new Error('invalid cell size');
			return (a = Math.floor(Math.log(_) / Math.LN2)), y();
		}),
		(l.thresholds = function (_) {
			return arguments.length
				? ((f = typeof _ == 'function' ? _ : Array.isArray(_) ? Dn(y0.call(_)) : Dn(_)), l)
				: f;
		}),
		(l.bandwidth = function (_) {
			if (!arguments.length) return Math.sqrt(o * (o + 1));
			if (!((_ = +_) >= 0)) throw new Error('invalid bandwidth');
			return (o = (Math.sqrt(4 * _ * _ + 1) - 1) / 2), y();
		}),
		l
	);
}
const Rn = 11102230246251565e-32,
	Nt = 134217729,
	e_ = (3 + 8 * Rn) * Rn;
function Ga(t, n, e, r, i) {
	let o,
		a,
		u,
		c,
		s = n[0],
		f = r[0],
		h = 0,
		l = 0;
	f > s == f > -s ? ((o = s), (s = n[++h])) : ((o = f), (f = r[++l]));
	let d = 0;
	if (h < t && l < e)
		for (
			f > s == f > -s
				? ((a = s + o), (u = o - (a - s)), (s = n[++h]))
				: ((a = f + o), (u = o - (a - f)), (f = r[++l])),
				o = a,
				u !== 0 && (i[d++] = u);
			h < t && l < e;

		)
			f > s == f > -s
				? ((a = o + s), (c = a - o), (u = o - (a - c) + (s - c)), (s = n[++h]))
				: ((a = o + f), (c = a - o), (u = o - (a - c) + (f - c)), (f = r[++l])),
				(o = a),
				u !== 0 && (i[d++] = u);
	for (; h < t; )
		(a = o + s),
			(c = a - o),
			(u = o - (a - c) + (s - c)),
			(s = n[++h]),
			(o = a),
			u !== 0 && (i[d++] = u);
	for (; l < e; )
		(a = o + f),
			(c = a - o),
			(u = o - (a - c) + (f - c)),
			(f = r[++l]),
			(o = a),
			u !== 0 && (i[d++] = u);
	return (o !== 0 || d === 0) && (i[d++] = o), d;
}
function r_(t, n) {
	let e = n[0];
	for (let r = 1; r < t; r++) e += n[r];
	return e;
}
function ai(t) {
	return new Float64Array(t);
}
const i_ = (3 + 16 * Rn) * Rn,
	o_ = (2 + 12 * Rn) * Rn,
	a_ = (9 + 64 * Rn) * Rn * Rn,
	Pe = ai(4),
	df = ai(8),
	gf = ai(12),
	pf = ai(16),
	Pt = ai(4);
function u_(t, n, e, r, i, o, a) {
	let u, c, s, f, h, l, d, p, m, g, y, _, v, b, w, x, k, E;
	const N = t - i,
		A = e - i,
		$ = n - o,
		P = r - o;
	(b = N * P),
		(l = Nt * N),
		(d = l - (l - N)),
		(p = N - d),
		(l = Nt * P),
		(m = l - (l - P)),
		(g = P - m),
		(w = p * g - (b - d * m - p * m - d * g)),
		(x = $ * A),
		(l = Nt * $),
		(d = l - (l - $)),
		(p = $ - d),
		(l = Nt * A),
		(m = l - (l - A)),
		(g = A - m),
		(k = p * g - (x - d * m - p * m - d * g)),
		(y = w - k),
		(h = w - y),
		(Pe[0] = w - (y + h) + (h - k)),
		(_ = b + y),
		(h = _ - b),
		(v = b - (_ - h) + (y - h)),
		(y = v - x),
		(h = v - y),
		(Pe[1] = v - (y + h) + (h - x)),
		(E = _ + y),
		(h = E - _),
		(Pe[2] = _ - (E - h) + (y - h)),
		(Pe[3] = E);
	let C = r_(4, Pe),
		M = o_ * a;
	if (
		C >= M ||
		-C >= M ||
		((h = t - N),
		(u = t - (N + h) + (h - i)),
		(h = e - A),
		(s = e - (A + h) + (h - i)),
		(h = n - $),
		(c = n - ($ + h) + (h - o)),
		(h = r - P),
		(f = r - (P + h) + (h - o)),
		u === 0 && c === 0 && s === 0 && f === 0) ||
		((M = a_ * a + e_ * Math.abs(C)), (C += N * f + P * u - ($ * s + A * c)), C >= M || -C >= M)
	)
		return C;
	(b = u * P),
		(l = Nt * u),
		(d = l - (l - u)),
		(p = u - d),
		(l = Nt * P),
		(m = l - (l - P)),
		(g = P - m),
		(w = p * g - (b - d * m - p * m - d * g)),
		(x = c * A),
		(l = Nt * c),
		(d = l - (l - c)),
		(p = c - d),
		(l = Nt * A),
		(m = l - (l - A)),
		(g = A - m),
		(k = p * g - (x - d * m - p * m - d * g)),
		(y = w - k),
		(h = w - y),
		(Pt[0] = w - (y + h) + (h - k)),
		(_ = b + y),
		(h = _ - b),
		(v = b - (_ - h) + (y - h)),
		(y = v - x),
		(h = v - y),
		(Pt[1] = v - (y + h) + (h - x)),
		(E = _ + y),
		(h = E - _),
		(Pt[2] = _ - (E - h) + (y - h)),
		(Pt[3] = E);
	const S = Ga(4, Pe, 4, Pt, df);
	(b = N * f),
		(l = Nt * N),
		(d = l - (l - N)),
		(p = N - d),
		(l = Nt * f),
		(m = l - (l - f)),
		(g = f - m),
		(w = p * g - (b - d * m - p * m - d * g)),
		(x = $ * s),
		(l = Nt * $),
		(d = l - (l - $)),
		(p = $ - d),
		(l = Nt * s),
		(m = l - (l - s)),
		(g = s - m),
		(k = p * g - (x - d * m - p * m - d * g)),
		(y = w - k),
		(h = w - y),
		(Pt[0] = w - (y + h) + (h - k)),
		(_ = b + y),
		(h = _ - b),
		(v = b - (_ - h) + (y - h)),
		(y = v - x),
		(h = v - y),
		(Pt[1] = v - (y + h) + (h - x)),
		(E = _ + y),
		(h = E - _),
		(Pt[2] = _ - (E - h) + (y - h)),
		(Pt[3] = E);
	const T = Ga(S, df, 4, Pt, gf);
	(b = u * f),
		(l = Nt * u),
		(d = l - (l - u)),
		(p = u - d),
		(l = Nt * f),
		(m = l - (l - f)),
		(g = f - m),
		(w = p * g - (b - d * m - p * m - d * g)),
		(x = c * s),
		(l = Nt * c),
		(d = l - (l - c)),
		(p = c - d),
		(l = Nt * s),
		(m = l - (l - s)),
		(g = s - m),
		(k = p * g - (x - d * m - p * m - d * g)),
		(y = w - k),
		(h = w - y),
		(Pt[0] = w - (y + h) + (h - k)),
		(_ = b + y),
		(h = _ - b),
		(v = b - (_ - h) + (y - h)),
		(y = v - x),
		(h = v - y),
		(Pt[1] = v - (y + h) + (h - x)),
		(E = _ + y),
		(h = E - _),
		(Pt[2] = _ - (E - h) + (y - h)),
		(Pt[3] = E);
	const R = Ga(T, gf, 4, Pt, pf);
	return pf[R - 1];
}
function Mi(t, n, e, r, i, o) {
	const a = (n - o) * (e - i),
		u = (t - i) * (r - o),
		c = a - u,
		s = Math.abs(a + u);
	return Math.abs(c) >= i_ * s ? c : -u_(t, n, e, r, i, o, s);
}
const mf = Math.pow(2, -52),
	$i = new Uint32Array(512);
class so {
	static from(n, e = h_, r = d_) {
		const i = n.length,
			o = new Float64Array(i * 2);
		for (let a = 0; a < i; a++) {
			const u = n[a];
			(o[2 * a] = e(u)), (o[2 * a + 1] = r(u));
		}
		return new so(o);
	}
	constructor(n) {
		const e = n.length >> 1;
		if (e > 0 && typeof n[0] != 'number') throw new Error('Expected coords to contain numbers.');
		this.coords = n;
		const r = Math.max(2 * e - 5, 0);
		(this._triangles = new Uint32Array(r * 3)),
			(this._halfedges = new Int32Array(r * 3)),
			(this._hashSize = Math.ceil(Math.sqrt(e))),
			(this._hullPrev = new Uint32Array(e)),
			(this._hullNext = new Uint32Array(e)),
			(this._hullTri = new Uint32Array(e)),
			(this._hullHash = new Int32Array(this._hashSize)),
			(this._ids = new Uint32Array(e)),
			(this._dists = new Float64Array(e)),
			this.update();
	}
	update() {
		const { coords: n, _hullPrev: e, _hullNext: r, _hullTri: i, _hullHash: o } = this,
			a = n.length >> 1;
		let u = 1 / 0,
			c = 1 / 0,
			s = -1 / 0,
			f = -1 / 0;
		for (let N = 0; N < a; N++) {
			const A = n[2 * N],
				$ = n[2 * N + 1];
			A < u && (u = A), $ < c && (c = $), A > s && (s = A), $ > f && (f = $), (this._ids[N] = N);
		}
		const h = (u + s) / 2,
			l = (c + f) / 2;
		let d, p, m;
		for (let N = 0, A = 1 / 0; N < a; N++) {
			const $ = Wa(h, l, n[2 * N], n[2 * N + 1]);
			$ < A && ((d = N), (A = $));
		}
		const g = n[2 * d],
			y = n[2 * d + 1];
		for (let N = 0, A = 1 / 0; N < a; N++) {
			if (N === d) continue;
			const $ = Wa(g, y, n[2 * N], n[2 * N + 1]);
			$ < A && $ > 0 && ((p = N), (A = $));
		}
		let _ = n[2 * p],
			v = n[2 * p + 1],
			b = 1 / 0;
		for (let N = 0; N < a; N++) {
			if (N === d || N === p) continue;
			const A = f_(g, y, _, v, n[2 * N], n[2 * N + 1]);
			A < b && ((m = N), (b = A));
		}
		let w = n[2 * m],
			x = n[2 * m + 1];
		if (b === 1 / 0) {
			for (let $ = 0; $ < a; $++) this._dists[$] = n[2 * $] - n[0] || n[2 * $ + 1] - n[1];
			Fe(this._ids, this._dists, 0, a - 1);
			const N = new Uint32Array(a);
			let A = 0;
			for (let $ = 0, P = -1 / 0; $ < a; $++) {
				const C = this._ids[$],
					M = this._dists[C];
				M > P && ((N[A++] = C), (P = M));
			}
			(this.hull = N.subarray(0, A)),
				(this.triangles = new Uint32Array(0)),
				(this.halfedges = new Uint32Array(0));
			return;
		}
		if (Mi(g, y, _, v, w, x) < 0) {
			const N = p,
				A = _,
				$ = v;
			(p = m), (_ = w), (v = x), (m = N), (w = A), (x = $);
		}
		const k = l_(g, y, _, v, w, x);
		(this._cx = k.x), (this._cy = k.y);
		for (let N = 0; N < a; N++) this._dists[N] = Wa(n[2 * N], n[2 * N + 1], k.x, k.y);
		Fe(this._ids, this._dists, 0, a - 1), (this._hullStart = d);
		let E = 3;
		(r[d] = e[m] = p),
			(r[p] = e[d] = m),
			(r[m] = e[p] = d),
			(i[d] = 0),
			(i[p] = 1),
			(i[m] = 2),
			o.fill(-1),
			(o[this._hashKey(g, y)] = d),
			(o[this._hashKey(_, v)] = p),
			(o[this._hashKey(w, x)] = m),
			(this.trianglesLen = 0),
			this._addTriangle(d, p, m, -1, -1, -1);
		for (let N = 0, A, $; N < this._ids.length; N++) {
			const P = this._ids[N],
				C = n[2 * P],
				M = n[2 * P + 1];
			if (
				(N > 0 && Math.abs(C - A) <= mf && Math.abs(M - $) <= mf) ||
				((A = C), ($ = M), P === d || P === p || P === m)
			)
				continue;
			let S = 0;
			for (
				let L = 0, q = this._hashKey(C, M);
				L < this._hashSize && ((S = o[(q + L) % this._hashSize]), !(S !== -1 && S !== r[S]));
				L++
			);
			S = e[S];
			let T = S,
				R;
			for (; (R = r[T]), Mi(C, M, n[2 * T], n[2 * T + 1], n[2 * R], n[2 * R + 1]) >= 0; )
				if (((T = R), T === S)) {
					T = -1;
					break;
				}
			if (T === -1) continue;
			let O = this._addTriangle(T, P, r[T], -1, -1, i[T]);
			(i[P] = this._legalize(O + 2)), (i[T] = O), E++;
			let z = r[T];
			for (; (R = r[z]), Mi(C, M, n[2 * z], n[2 * z + 1], n[2 * R], n[2 * R + 1]) < 0; )
				(O = this._addTriangle(z, P, R, i[P], -1, i[z])),
					(i[P] = this._legalize(O + 2)),
					(r[z] = z),
					E--,
					(z = R);
			if (T === S)
				for (; (R = e[T]), Mi(C, M, n[2 * R], n[2 * R + 1], n[2 * T], n[2 * T + 1]) < 0; )
					(O = this._addTriangle(R, P, T, -1, i[T], i[R])),
						this._legalize(O + 2),
						(i[R] = O),
						(r[T] = T),
						E--,
						(T = R);
			(this._hullStart = e[P] = T),
				(r[T] = e[z] = P),
				(r[P] = z),
				(o[this._hashKey(C, M)] = P),
				(o[this._hashKey(n[2 * T], n[2 * T + 1])] = T);
		}
		this.hull = new Uint32Array(E);
		for (let N = 0, A = this._hullStart; N < E; N++) (this.hull[N] = A), (A = r[A]);
		(this.triangles = this._triangles.subarray(0, this.trianglesLen)),
			(this.halfedges = this._halfedges.subarray(0, this.trianglesLen));
	}
	_hashKey(n, e) {
		return Math.floor(s_(n - this._cx, e - this._cy) * this._hashSize) % this._hashSize;
	}
	_legalize(n) {
		const { _triangles: e, _halfedges: r, coords: i } = this;
		let o = 0,
			a = 0;
		for (;;) {
			const u = r[n],
				c = n - (n % 3);
			if (((a = c + ((n + 2) % 3)), u === -1)) {
				if (o === 0) break;
				n = $i[--o];
				continue;
			}
			const s = u - (u % 3),
				f = c + ((n + 1) % 3),
				h = s + ((u + 2) % 3),
				l = e[a],
				d = e[n],
				p = e[f],
				m = e[h];
			if (
				c_(
					i[2 * l],
					i[2 * l + 1],
					i[2 * d],
					i[2 * d + 1],
					i[2 * p],
					i[2 * p + 1],
					i[2 * m],
					i[2 * m + 1]
				)
			) {
				(e[n] = m), (e[u] = l);
				const y = r[h];
				if (y === -1) {
					let v = this._hullStart;
					do {
						if (this._hullTri[v] === h) {
							this._hullTri[v] = n;
							break;
						}
						v = this._hullPrev[v];
					} while (v !== this._hullStart);
				}
				this._link(n, y), this._link(u, r[a]), this._link(a, h);
				const _ = s + ((u + 1) % 3);
				o < $i.length && ($i[o++] = _);
			} else {
				if (o === 0) break;
				n = $i[--o];
			}
		}
		return a;
	}
	_link(n, e) {
		(this._halfedges[n] = e), e !== -1 && (this._halfedges[e] = n);
	}
	_addTriangle(n, e, r, i, o, a) {
		const u = this.trianglesLen;
		return (
			(this._triangles[u] = n),
			(this._triangles[u + 1] = e),
			(this._triangles[u + 2] = r),
			this._link(u, i),
			this._link(u + 1, o),
			this._link(u + 2, a),
			(this.trianglesLen += 3),
			u
		);
	}
}
function s_(t, n) {
	const e = t / (Math.abs(t) + Math.abs(n));
	return (n > 0 ? 3 - e : 1 + e) / 4;
}
function Wa(t, n, e, r) {
	const i = t - e,
		o = n - r;
	return i * i + o * o;
}
function c_(t, n, e, r, i, o, a, u) {
	const c = t - a,
		s = n - u,
		f = e - a,
		h = r - u,
		l = i - a,
		d = o - u,
		p = c * c + s * s,
		m = f * f + h * h,
		g = l * l + d * d;
	return c * (h * g - m * d) - s * (f * g - m * l) + p * (f * d - h * l) < 0;
}
function f_(t, n, e, r, i, o) {
	const a = e - t,
		u = r - n,
		c = i - t,
		s = o - n,
		f = a * a + u * u,
		h = c * c + s * s,
		l = 0.5 / (a * s - u * c),
		d = (s * f - u * h) * l,
		p = (a * h - c * f) * l;
	return d * d + p * p;
}
function l_(t, n, e, r, i, o) {
	const a = e - t,
		u = r - n,
		c = i - t,
		s = o - n,
		f = a * a + u * u,
		h = c * c + s * s,
		l = 0.5 / (a * s - u * c),
		d = t + (s * f - u * h) * l,
		p = n + (a * h - c * f) * l;
	return { x: d, y: p };
}
function Fe(t, n, e, r) {
	if (r - e <= 20)
		for (let i = e + 1; i <= r; i++) {
			const o = t[i],
				a = n[o];
			let u = i - 1;
			for (; u >= e && n[t[u]] > a; ) t[u + 1] = t[u--];
			t[u + 1] = o;
		}
	else {
		const i = (e + r) >> 1;
		let o = e + 1,
			a = r;
		gr(t, i, o),
			n[t[e]] > n[t[r]] && gr(t, e, r),
			n[t[o]] > n[t[r]] && gr(t, o, r),
			n[t[e]] > n[t[o]] && gr(t, e, o);
		const u = t[o],
			c = n[u];
		for (;;) {
			do o++;
			while (n[t[o]] < c);
			do a--;
			while (n[t[a]] > c);
			if (a < o) break;
			gr(t, o, a);
		}
		(t[e + 1] = t[a]),
			(t[a] = u),
			r - o + 1 >= a - e
				? (Fe(t, n, o, r), Fe(t, n, e, a - 1))
				: (Fe(t, n, e, a - 1), Fe(t, n, o, r));
	}
}
function gr(t, n, e) {
	const r = t[n];
	(t[n] = t[e]), (t[e] = r);
}
function h_(t) {
	return t[0];
}
function d_(t) {
	return t[1];
}
const yf = 1e-6;
class ee {
	constructor() {
		(this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = '');
	}
	moveTo(n, e) {
		this._ += `M${(this._x0 = this._x1 = +n)},${(this._y0 = this._y1 = +e)}`;
	}
	closePath() {
		this._x1 !== null && ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += 'Z'));
	}
	lineTo(n, e) {
		this._ += `L${(this._x1 = +n)},${(this._y1 = +e)}`;
	}
	arc(n, e, r) {
		(n = +n), (e = +e), (r = +r);
		const i = n + r,
			o = e;
		if (r < 0) throw new Error('negative radius');
		this._x1 === null
			? (this._ += `M${i},${o}`)
			: (Math.abs(this._x1 - i) > yf || Math.abs(this._y1 - o) > yf) &&
				(this._ += 'L' + i + ',' + o),
			r &&
				(this._ += `A${r},${r},0,1,1,${n - r},${e}A${r},${r},0,1,1,${(this._x1 = i)},${(this._y1 = o)}`);
	}
	rect(n, e, r, i) {
		this._ += `M${(this._x0 = this._x1 = +n)},${(this._y0 = this._y1 = +e)}h${+r}v${+i}h${-r}Z`;
	}
	value() {
		return this._ || null;
	}
}
class zu {
	constructor() {
		this._ = [];
	}
	moveTo(n, e) {
		this._.push([n, e]);
	}
	closePath() {
		this._.push(this._[0].slice());
	}
	lineTo(n, e) {
		this._.push([n, e]);
	}
	value() {
		return this._.length ? this._ : null;
	}
}
class b0 {
	constructor(n, [e, r, i, o] = [0, 0, 960, 500]) {
		if (!((i = +i) >= (e = +e)) || !((o = +o) >= (r = +r))) throw new Error('invalid bounds');
		(this.delaunay = n),
			(this._circumcenters = new Float64Array(n.points.length * 2)),
			(this.vectors = new Float64Array(n.points.length * 2)),
			(this.xmax = i),
			(this.xmin = e),
			(this.ymax = o),
			(this.ymin = r),
			this._init();
	}
	update() {
		return this.delaunay.update(), this._init(), this;
	}
	_init() {
		const {
			delaunay: { points: n, hull: e, triangles: r },
			vectors: i
		} = this;
		let o, a;
		const u = (this.circumcenters = this._circumcenters.subarray(0, (r.length / 3) * 2));
		for (let m = 0, g = 0, y = r.length, _, v; m < y; m += 3, g += 2) {
			const b = r[m] * 2,
				w = r[m + 1] * 2,
				x = r[m + 2] * 2,
				k = n[b],
				E = n[b + 1],
				N = n[w],
				A = n[w + 1],
				$ = n[x],
				P = n[x + 1],
				C = N - k,
				M = A - E,
				S = $ - k,
				T = P - E,
				R = (C * T - M * S) * 2;
			if (Math.abs(R) < 1e-9) {
				if (o === void 0) {
					o = a = 0;
					for (const z of e) (o += n[z * 2]), (a += n[z * 2 + 1]);
					(o /= e.length), (a /= e.length);
				}
				const O = 1e9 * Math.sign((o - k) * T - (a - E) * S);
				(_ = (k + $) / 2 - O * T), (v = (E + P) / 2 + O * S);
			} else {
				const O = 1 / R,
					z = C * C + M * M,
					L = S * S + T * T;
				(_ = k + (T * z - M * L) * O), (v = E + (C * L - S * z) * O);
			}
			(u[g] = _), (u[g + 1] = v);
		}
		let c = e[e.length - 1],
			s,
			f = c * 4,
			h,
			l = n[2 * c],
			d,
			p = n[2 * c + 1];
		i.fill(0);
		for (let m = 0; m < e.length; ++m)
			(c = e[m]),
				(s = f),
				(h = l),
				(d = p),
				(f = c * 4),
				(l = n[2 * c]),
				(p = n[2 * c + 1]),
				(i[s + 2] = i[f] = d - p),
				(i[s + 3] = i[f + 1] = l - h);
	}
	render(n) {
		const e = n == null ? (n = new ee()) : void 0,
			{
				delaunay: { halfedges: r, inedges: i, hull: o },
				circumcenters: a,
				vectors: u
			} = this;
		if (o.length <= 1) return null;
		for (let f = 0, h = r.length; f < h; ++f) {
			const l = r[f];
			if (l < f) continue;
			const d = Math.floor(f / 3) * 2,
				p = Math.floor(l / 3) * 2,
				m = a[d],
				g = a[d + 1],
				y = a[p],
				_ = a[p + 1];
			this._renderSegment(m, g, y, _, n);
		}
		let c,
			s = o[o.length - 1];
		for (let f = 0; f < o.length; ++f) {
			(c = s), (s = o[f]);
			const h = Math.floor(i[s] / 3) * 2,
				l = a[h],
				d = a[h + 1],
				p = c * 4,
				m = this._project(l, d, u[p + 2], u[p + 3]);
			m && this._renderSegment(l, d, m[0], m[1], n);
		}
		return e && e.value();
	}
	renderBounds(n) {
		const e = n == null ? (n = new ee()) : void 0;
		return (
			n.rect(this.xmin, this.ymin, this.xmax - this.xmin, this.ymax - this.ymin), e && e.value()
		);
	}
	renderCell(n, e) {
		const r = e == null ? (e = new ee()) : void 0,
			i = this._clip(n);
		if (i === null || !i.length) return;
		e.moveTo(i[0], i[1]);
		let o = i.length;
		for (; i[0] === i[o - 2] && i[1] === i[o - 1] && o > 1; ) o -= 2;
		for (let a = 2; a < o; a += 2)
			(i[a] !== i[a - 2] || i[a + 1] !== i[a - 1]) && e.lineTo(i[a], i[a + 1]);
		return e.closePath(), r && r.value();
	}
	*cellPolygons() {
		const {
			delaunay: { points: n }
		} = this;
		for (let e = 0, r = n.length / 2; e < r; ++e) {
			const i = this.cellPolygon(e);
			i && ((i.index = e), yield i);
		}
	}
	cellPolygon(n) {
		const e = new zu();
		return this.renderCell(n, e), e.value();
	}
	_renderSegment(n, e, r, i, o) {
		let a;
		const u = this._regioncode(n, e),
			c = this._regioncode(r, i);
		u === 0 && c === 0
			? (o.moveTo(n, e), o.lineTo(r, i))
			: (a = this._clipSegment(n, e, r, i, u, c)) && (o.moveTo(a[0], a[1]), o.lineTo(a[2], a[3]));
	}
	contains(n, e, r) {
		return (e = +e), e !== e || ((r = +r), r !== r) ? !1 : this.delaunay._step(n, e, r) === n;
	}
	*neighbors(n) {
		const e = this._clip(n);
		if (e)
			for (const r of this.delaunay.neighbors(n)) {
				const i = this._clip(r);
				if (i) {
					t: for (let o = 0, a = e.length; o < a; o += 2)
						for (let u = 0, c = i.length; u < c; u += 2)
							if (
								e[o] === i[u] &&
								e[o + 1] === i[u + 1] &&
								e[(o + 2) % a] === i[(u + c - 2) % c] &&
								e[(o + 3) % a] === i[(u + c - 1) % c]
							) {
								yield r;
								break t;
							}
				}
			}
	}
	_cell(n) {
		const {
				circumcenters: e,
				delaunay: { inedges: r, halfedges: i, triangles: o }
			} = this,
			a = r[n];
		if (a === -1) return null;
		const u = [];
		let c = a;
		do {
			const s = Math.floor(c / 3);
			if ((u.push(e[s * 2], e[s * 2 + 1]), (c = c % 3 === 2 ? c - 2 : c + 1), o[c] !== n)) break;
			c = i[c];
		} while (c !== a && c !== -1);
		return u;
	}
	_clip(n) {
		if (n === 0 && this.delaunay.hull.length === 1)
			return [
				this.xmax,
				this.ymin,
				this.xmax,
				this.ymax,
				this.xmin,
				this.ymax,
				this.xmin,
				this.ymin
			];
		const e = this._cell(n);
		if (e === null) return null;
		const { vectors: r } = this,
			i = n * 4;
		return this._simplify(
			r[i] || r[i + 1]
				? this._clipInfinite(n, e, r[i], r[i + 1], r[i + 2], r[i + 3])
				: this._clipFinite(n, e)
		);
	}
	_clipFinite(n, e) {
		const r = e.length;
		let i = null,
			o,
			a,
			u = e[r - 2],
			c = e[r - 1],
			s,
			f = this._regioncode(u, c),
			h,
			l = 0;
		for (let d = 0; d < r; d += 2)
			if (
				((o = u),
				(a = c),
				(u = e[d]),
				(c = e[d + 1]),
				(s = f),
				(f = this._regioncode(u, c)),
				s === 0 && f === 0)
			)
				(h = l), (l = 0), i ? i.push(u, c) : (i = [u, c]);
			else {
				let p, m, g, y, _;
				if (s === 0) {
					if ((p = this._clipSegment(o, a, u, c, s, f)) === null) continue;
					[m, g, y, _] = p;
				} else {
					if ((p = this._clipSegment(u, c, o, a, f, s)) === null) continue;
					([y, _, m, g] = p),
						(h = l),
						(l = this._edgecode(m, g)),
						h && l && this._edge(n, h, l, i, i.length),
						i ? i.push(m, g) : (i = [m, g]);
				}
				(h = l),
					(l = this._edgecode(y, _)),
					h && l && this._edge(n, h, l, i, i.length),
					i ? i.push(y, _) : (i = [y, _]);
			}
		if (i) (h = l), (l = this._edgecode(i[0], i[1])), h && l && this._edge(n, h, l, i, i.length);
		else if (this.contains(n, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2))
			return [
				this.xmax,
				this.ymin,
				this.xmax,
				this.ymax,
				this.xmin,
				this.ymax,
				this.xmin,
				this.ymin
			];
		return i;
	}
	_clipSegment(n, e, r, i, o, a) {
		const u = o < a;
		for (u && ([n, e, r, i, o, a] = [r, i, n, e, a, o]); ; ) {
			if (o === 0 && a === 0) return u ? [r, i, n, e] : [n, e, r, i];
			if (o & a) return null;
			let c,
				s,
				f = o || a;
			f & 8
				? ((c = n + ((r - n) * (this.ymax - e)) / (i - e)), (s = this.ymax))
				: f & 4
					? ((c = n + ((r - n) * (this.ymin - e)) / (i - e)), (s = this.ymin))
					: f & 2
						? ((s = e + ((i - e) * (this.xmax - n)) / (r - n)), (c = this.xmax))
						: ((s = e + ((i - e) * (this.xmin - n)) / (r - n)), (c = this.xmin)),
				o
					? ((n = c), (e = s), (o = this._regioncode(n, e)))
					: ((r = c), (i = s), (a = this._regioncode(r, i)));
		}
	}
	_clipInfinite(n, e, r, i, o, a) {
		let u = Array.from(e),
			c;
		if (
			((c = this._project(u[0], u[1], r, i)) && u.unshift(c[0], c[1]),
			(c = this._project(u[u.length - 2], u[u.length - 1], o, a)) && u.push(c[0], c[1]),
			(u = this._clipFinite(n, u)))
		)
			for (let s = 0, f = u.length, h, l = this._edgecode(u[f - 2], u[f - 1]); s < f; s += 2)
				(h = l),
					(l = this._edgecode(u[s], u[s + 1])),
					h && l && ((s = this._edge(n, h, l, u, s)), (f = u.length));
		else
			this.contains(n, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2) &&
				(u = [
					this.xmin,
					this.ymin,
					this.xmax,
					this.ymin,
					this.xmax,
					this.ymax,
					this.xmin,
					this.ymax
				]);
		return u;
	}
	_edge(n, e, r, i, o) {
		for (; e !== r; ) {
			let a, u;
			switch (e) {
				case 5:
					e = 4;
					continue;
				case 4:
					(e = 6), (a = this.xmax), (u = this.ymin);
					break;
				case 6:
					e = 2;
					continue;
				case 2:
					(e = 10), (a = this.xmax), (u = this.ymax);
					break;
				case 10:
					e = 8;
					continue;
				case 8:
					(e = 9), (a = this.xmin), (u = this.ymax);
					break;
				case 9:
					e = 1;
					continue;
				case 1:
					(e = 5), (a = this.xmin), (u = this.ymin);
					break;
			}
			(i[o] !== a || i[o + 1] !== u) && this.contains(n, a, u) && (i.splice(o, 0, a, u), (o += 2));
		}
		return o;
	}
	_project(n, e, r, i) {
		let o = 1 / 0,
			a,
			u,
			c;
		if (i < 0) {
			if (e <= this.ymin) return null;
			(a = (this.ymin - e) / i) < o && ((c = this.ymin), (u = n + (o = a) * r));
		} else if (i > 0) {
			if (e >= this.ymax) return null;
			(a = (this.ymax - e) / i) < o && ((c = this.ymax), (u = n + (o = a) * r));
		}
		if (r > 0) {
			if (n >= this.xmax) return null;
			(a = (this.xmax - n) / r) < o && ((u = this.xmax), (c = e + (o = a) * i));
		} else if (r < 0) {
			if (n <= this.xmin) return null;
			(a = (this.xmin - n) / r) < o && ((u = this.xmin), (c = e + (o = a) * i));
		}
		return [u, c];
	}
	_edgecode(n, e) {
		return (
			(n === this.xmin ? 1 : n === this.xmax ? 2 : 0) |
			(e === this.ymin ? 4 : e === this.ymax ? 8 : 0)
		);
	}
	_regioncode(n, e) {
		return (
			(n < this.xmin ? 1 : n > this.xmax ? 2 : 0) | (e < this.ymin ? 4 : e > this.ymax ? 8 : 0)
		);
	}
	_simplify(n) {
		if (n && n.length > 4) {
			for (let e = 0; e < n.length; e += 2) {
				const r = (e + 2) % n.length,
					i = (e + 4) % n.length;
				((n[e] === n[r] && n[r] === n[i]) || (n[e + 1] === n[r + 1] && n[r + 1] === n[i + 1])) &&
					(n.splice(r, 2), (e -= 2));
			}
			n.length || (n = null);
		}
		return n;
	}
}
const g_ = 2 * Math.PI,
	Ie = Math.pow;
function p_(t) {
	return t[0];
}
function m_(t) {
	return t[1];
}
function y_(t) {
	const { triangles: n, coords: e } = t;
	for (let r = 0; r < n.length; r += 3) {
		const i = 2 * n[r],
			o = 2 * n[r + 1],
			a = 2 * n[r + 2];
		if ((e[a] - e[i]) * (e[o + 1] - e[i + 1]) - (e[o] - e[i]) * (e[a + 1] - e[i + 1]) > 1e-10)
			return !1;
	}
	return !0;
}
function b_(t, n, e) {
	return [t + Math.sin(t + n) * e, n + Math.cos(t - n) * e];
}
class Os {
	static from(n, e = p_, r = m_, i) {
		return new Os('length' in n ? v_(n, e, r, i) : Float64Array.from(__(n, e, r, i)));
	}
	constructor(n) {
		(this._delaunator = new so(n)),
			(this.inedges = new Int32Array(n.length / 2)),
			(this._hullIndex = new Int32Array(n.length / 2)),
			(this.points = this._delaunator.coords),
			this._init();
	}
	update() {
		return this._delaunator.update(), this._init(), this;
	}
	_init() {
		const n = this._delaunator,
			e = this.points;
		if (n.hull && n.hull.length > 2 && y_(n)) {
			this.collinear = Int32Array.from({ length: e.length / 2 }, (l, d) => d).sort(
				(l, d) => e[2 * l] - e[2 * d] || e[2 * l + 1] - e[2 * d + 1]
			);
			const c = this.collinear[0],
				s = this.collinear[this.collinear.length - 1],
				f = [e[2 * c], e[2 * c + 1], e[2 * s], e[2 * s + 1]],
				h = 1e-8 * Math.hypot(f[3] - f[1], f[2] - f[0]);
			for (let l = 0, d = e.length / 2; l < d; ++l) {
				const p = b_(e[2 * l], e[2 * l + 1], h);
				(e[2 * l] = p[0]), (e[2 * l + 1] = p[1]);
			}
			this._delaunator = new so(e);
		} else delete this.collinear;
		const r = (this.halfedges = this._delaunator.halfedges),
			i = (this.hull = this._delaunator.hull),
			o = (this.triangles = this._delaunator.triangles),
			a = this.inedges.fill(-1),
			u = this._hullIndex.fill(-1);
		for (let c = 0, s = r.length; c < s; ++c) {
			const f = o[c % 3 === 2 ? c - 2 : c + 1];
			(r[c] === -1 || a[f] === -1) && (a[f] = c);
		}
		for (let c = 0, s = i.length; c < s; ++c) u[i[c]] = c;
		i.length <= 2 &&
			i.length > 0 &&
			((this.triangles = new Int32Array(3).fill(-1)),
			(this.halfedges = new Int32Array(3).fill(-1)),
			(this.triangles[0] = i[0]),
			(a[i[0]] = 1),
			i.length === 2 && ((a[i[1]] = 0), (this.triangles[1] = i[1]), (this.triangles[2] = i[1])));
	}
	voronoi(n) {
		return new b0(this, n);
	}
	*neighbors(n) {
		const { inedges: e, hull: r, _hullIndex: i, halfedges: o, triangles: a, collinear: u } = this;
		if (u) {
			const h = u.indexOf(n);
			h > 0 && (yield u[h - 1]), h < u.length - 1 && (yield u[h + 1]);
			return;
		}
		const c = e[n];
		if (c === -1) return;
		let s = c,
			f = -1;
		do {
			if ((yield (f = a[s]), (s = s % 3 === 2 ? s - 2 : s + 1), a[s] !== n)) return;
			if (((s = o[s]), s === -1)) {
				const h = r[(i[n] + 1) % r.length];
				h !== f && (yield h);
				return;
			}
		} while (s !== c);
	}
	find(n, e, r = 0) {
		if (((n = +n), n !== n || ((e = +e), e !== e))) return -1;
		const i = r;
		let o;
		for (; (o = this._step(r, n, e)) >= 0 && o !== r && o !== i; ) r = o;
		return o;
	}
	_step(n, e, r) {
		const { inedges: i, hull: o, _hullIndex: a, halfedges: u, triangles: c, points: s } = this;
		if (i[n] === -1 || !s.length) return (n + 1) % (s.length >> 1);
		let f = n,
			h = Ie(e - s[n * 2], 2) + Ie(r - s[n * 2 + 1], 2);
		const l = i[n];
		let d = l;
		do {
			let p = c[d];
			const m = Ie(e - s[p * 2], 2) + Ie(r - s[p * 2 + 1], 2);
			if ((m < h && ((h = m), (f = p)), (d = d % 3 === 2 ? d - 2 : d + 1), c[d] !== n)) break;
			if (((d = u[d]), d === -1)) {
				if (
					((d = o[(a[n] + 1) % o.length]),
					d !== p && Ie(e - s[d * 2], 2) + Ie(r - s[d * 2 + 1], 2) < h)
				)
					return d;
				break;
			}
		} while (d !== l);
		return f;
	}
	render(n) {
		const e = n == null ? (n = new ee()) : void 0,
			{ points: r, halfedges: i, triangles: o } = this;
		for (let a = 0, u = i.length; a < u; ++a) {
			const c = i[a];
			if (c < a) continue;
			const s = o[a] * 2,
				f = o[c] * 2;
			n.moveTo(r[s], r[s + 1]), n.lineTo(r[f], r[f + 1]);
		}
		return this.renderHull(n), e && e.value();
	}
	renderPoints(n, e) {
		e === void 0 && (!n || typeof n.moveTo != 'function') && ((e = n), (n = null)),
			(e = e == null ? 2 : +e);
		const r = n == null ? (n = new ee()) : void 0,
			{ points: i } = this;
		for (let o = 0, a = i.length; o < a; o += 2) {
			const u = i[o],
				c = i[o + 1];
			n.moveTo(u + e, c), n.arc(u, c, e, 0, g_);
		}
		return r && r.value();
	}
	renderHull(n) {
		const e = n == null ? (n = new ee()) : void 0,
			{ hull: r, points: i } = this,
			o = r[0] * 2,
			a = r.length;
		n.moveTo(i[o], i[o + 1]);
		for (let u = 1; u < a; ++u) {
			const c = 2 * r[u];
			n.lineTo(i[c], i[c + 1]);
		}
		return n.closePath(), e && e.value();
	}
	hullPolygon() {
		const n = new zu();
		return this.renderHull(n), n.value();
	}
	renderTriangle(n, e) {
		const r = e == null ? (e = new ee()) : void 0,
			{ points: i, triangles: o } = this,
			a = o[(n *= 3)] * 2,
			u = o[n + 1] * 2,
			c = o[n + 2] * 2;
		return (
			e.moveTo(i[a], i[a + 1]),
			e.lineTo(i[u], i[u + 1]),
			e.lineTo(i[c], i[c + 1]),
			e.closePath(),
			r && r.value()
		);
	}
	*trianglePolygons() {
		const { triangles: n } = this;
		for (let e = 0, r = n.length / 3; e < r; ++e) yield this.trianglePolygon(e);
	}
	trianglePolygon(n) {
		const e = new zu();
		return this.renderTriangle(n, e), e.value();
	}
}
function v_(t, n, e, r) {
	const i = t.length,
		o = new Float64Array(i * 2);
	for (let a = 0; a < i; ++a) {
		const u = t[a];
		(o[a * 2] = n.call(r, u, a, t)), (o[a * 2 + 1] = e.call(r, u, a, t));
	}
	return o;
}
function* __(t, n, e, r) {
	let i = 0;
	for (const o of t) yield n.call(r, o, i, t), yield e.call(r, o, i, t), ++i;
}
var bf = {},
	Va = {},
	ja = 34,
	pr = 10,
	Za = 13;
function v0(t) {
	return new Function(
		'd',
		'return {' +
			t
				.map(function (n, e) {
					return JSON.stringify(n) + ': d[' + e + '] || ""';
				})
				.join(',') +
			'}'
	);
}
function w_(t, n) {
	var e = v0(t);
	return function (r, i) {
		return n(e(r), i, t);
	};
}
function vf(t) {
	var n = Object.create(null),
		e = [];
	return (
		t.forEach(function (r) {
			for (var i in r) i in n || e.push((n[i] = i));
		}),
		e
	);
}
function Xt(t, n) {
	var e = t + '',
		r = e.length;
	return r < n ? new Array(n - r + 1).join(0) + e : e;
}
function x_(t) {
	return t < 0 ? '-' + Xt(-t, 6) : t > 9999 ? '+' + Xt(t, 6) : Xt(t, 4);
}
function M_(t) {
	var n = t.getUTCHours(),
		e = t.getUTCMinutes(),
		r = t.getUTCSeconds(),
		i = t.getUTCMilliseconds();
	return isNaN(t)
		? 'Invalid Date'
		: x_(t.getUTCFullYear()) +
				'-' +
				Xt(t.getUTCMonth() + 1, 2) +
				'-' +
				Xt(t.getUTCDate(), 2) +
				(i
					? 'T' + Xt(n, 2) + ':' + Xt(e, 2) + ':' + Xt(r, 2) + '.' + Xt(i, 3) + 'Z'
					: r
						? 'T' + Xt(n, 2) + ':' + Xt(e, 2) + ':' + Xt(r, 2) + 'Z'
						: e || n
							? 'T' + Xt(n, 2) + ':' + Xt(e, 2) + 'Z'
							: '');
}
function ea(t) {
	var n = new RegExp(
			'["' +
				t +
				`
\r]`
		),
		e = t.charCodeAt(0);
	function r(h, l) {
		var d,
			p,
			m = i(h, function (g, y) {
				if (d) return d(g, y - 1);
				(p = g), (d = l ? w_(g, l) : v0(g));
			});
		return (m.columns = p || []), m;
	}
	function i(h, l) {
		var d = [],
			p = h.length,
			m = 0,
			g = 0,
			y,
			_ = p <= 0,
			v = !1;
		h.charCodeAt(p - 1) === pr && --p, h.charCodeAt(p - 1) === Za && --p;
		function b() {
			if (_) return Va;
			if (v) return (v = !1), bf;
			var x,
				k = m,
				E;
			if (h.charCodeAt(k) === ja) {
				for (; (m++ < p && h.charCodeAt(m) !== ja) || h.charCodeAt(++m) === ja; );
				return (
					(x = m) >= p
						? (_ = !0)
						: (E = h.charCodeAt(m++)) === pr
							? (v = !0)
							: E === Za && ((v = !0), h.charCodeAt(m) === pr && ++m),
					h.slice(k + 1, x - 1).replace(/""/g, '"')
				);
			}
			for (; m < p; ) {
				if ((E = h.charCodeAt((x = m++))) === pr) v = !0;
				else if (E === Za) (v = !0), h.charCodeAt(m) === pr && ++m;
				else if (E !== e) continue;
				return h.slice(k, x);
			}
			return (_ = !0), h.slice(k, p);
		}
		for (; (y = b()) !== Va; ) {
			for (var w = []; y !== bf && y !== Va; ) w.push(y), (y = b());
			(l && (w = l(w, g++)) == null) || d.push(w);
		}
		return d;
	}
	function o(h, l) {
		return h.map(function (d) {
			return l
				.map(function (p) {
					return f(d[p]);
				})
				.join(t);
		});
	}
	function a(h, l) {
		return (
			l == null && (l = vf(h)),
			[l.map(f).join(t)].concat(o(h, l)).join(`
`)
		);
	}
	function u(h, l) {
		return (
			l == null && (l = vf(h)),
			o(h, l).join(`
`)
		);
	}
	function c(h) {
		return h.map(s).join(`
`);
	}
	function s(h) {
		return h.map(f).join(t);
	}
	function f(h) {
		return h == null
			? ''
			: h instanceof Date
				? M_(h)
				: n.test((h += ''))
					? '"' + h.replace(/"/g, '""') + '"'
					: h;
	}
	return {
		parse: r,
		parseRows: i,
		format: a,
		formatBody: u,
		formatRows: c,
		formatRow: s,
		formatValue: f
	};
}
var ve = ea(','),
	_0 = ve.parse,
	$_ = ve.parseRows,
	T_ = ve.format,
	S_ = ve.formatBody,
	k_ = ve.formatRows,
	A_ = ve.formatRow,
	E_ = ve.formatValue,
	_e = ea('	'),
	w0 = _e.parse,
	N_ = _e.parseRows,
	C_ = _e.format,
	R_ = _e.formatBody,
	P_ = _e.formatRows,
	I_ = _e.formatRow,
	z_ = _e.formatValue;
function D_(t) {
	for (var n in t) {
		var e = t[n].trim(),
			r,
			i;
		if (!e) e = null;
		else if (e === 'true') e = !0;
		else if (e === 'false') e = !1;
		else if (e === 'NaN') e = NaN;
		else if (!isNaN((r = +e))) e = r;
		else if (
			(i = e.match(
				/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/
			))
		)
			O_ && i[4] && !i[7] && (e = e.replace(/-/g, '/').replace(/T/, ' ')), (e = new Date(e));
		else continue;
		t[n] = e;
	}
	return t;
}
const O_ = new Date('2019-01-01T00:00').getHours() || new Date('2019-07-01T00:00').getHours();
function F_(t) {
	if (!t.ok) throw new Error(t.status + ' ' + t.statusText);
	return t.blob();
}
function L_(t, n) {
	return fetch(t, n).then(F_);
}
function B_(t) {
	if (!t.ok) throw new Error(t.status + ' ' + t.statusText);
	return t.arrayBuffer();
}
function U_(t, n) {
	return fetch(t, n).then(B_);
}
function q_(t) {
	if (!t.ok) throw new Error(t.status + ' ' + t.statusText);
	return t.text();
}
function ra(t, n) {
	return fetch(t, n).then(q_);
}
function x0(t) {
	return function (n, e, r) {
		return (
			arguments.length === 2 && typeof e == 'function' && ((r = e), (e = void 0)),
			ra(n, e).then(function (i) {
				return t(i, r);
			})
		);
	};
}
function Y_(t, n, e, r) {
	arguments.length === 3 && typeof e == 'function' && ((r = e), (e = void 0));
	var i = ea(t);
	return ra(n, e).then(function (o) {
		return i.parse(o, r);
	});
}
var H_ = x0(_0),
	X_ = x0(w0);
function G_(t, n) {
	return new Promise(function (e, r) {
		var i = new Image();
		for (var o in n) i[o] = n[o];
		(i.onerror = r),
			(i.onload = function () {
				e(i);
			}),
			(i.src = t);
	});
}
function W_(t) {
	if (!t.ok) throw new Error(t.status + ' ' + t.statusText);
	if (!(t.status === 204 || t.status === 205)) return t.json();
}
function V_(t, n) {
	return fetch(t, n).then(W_);
}
function Fs(t) {
	return (n, e) => ra(n, e).then((r) => new DOMParser().parseFromString(r, t));
}
const j_ = Fs('application/xml');
var Z_ = Fs('text/html'),
	Q_ = Fs('image/svg+xml');
function M0(t, n) {
	var e,
		r = 1;
	t == null && (t = 0), n == null && (n = 0);
	function i() {
		var o,
			a = e.length,
			u,
			c = 0,
			s = 0;
		for (o = 0; o < a; ++o) (u = e[o]), (c += u.x), (s += u.y);
		for (c = (c / a - t) * r, s = (s / a - n) * r, o = 0; o < a; ++o)
			(u = e[o]), (u.x -= c), (u.y -= s);
	}
	return (
		(i.initialize = function (o) {
			e = o;
		}),
		(i.x = function (o) {
			return arguments.length ? ((t = +o), i) : t;
		}),
		(i.y = function (o) {
			return arguments.length ? ((n = +o), i) : n;
		}),
		(i.strength = function (o) {
			return arguments.length ? ((r = +o), i) : r;
		}),
		i
	);
}
function K_(t) {
	const n = +this._x.call(null, t),
		e = +this._y.call(null, t);
	return $0(this.cover(n, e), n, e, t);
}
function $0(t, n, e, r) {
	if (isNaN(n) || isNaN(e)) return t;
	var i,
		o = t._root,
		a = { data: r },
		u = t._x0,
		c = t._y0,
		s = t._x1,
		f = t._y1,
		h,
		l,
		d,
		p,
		m,
		g,
		y,
		_;
	if (!o) return (t._root = a), t;
	for (; o.length; )
		if (
			((m = n >= (h = (u + s) / 2)) ? (u = h) : (s = h),
			(g = e >= (l = (c + f) / 2)) ? (c = l) : (f = l),
			(i = o),
			!(o = o[(y = (g << 1) | m)]))
		)
			return (i[y] = a), t;
	if (((d = +t._x.call(null, o.data)), (p = +t._y.call(null, o.data)), n === d && e === p))
		return (a.next = o), i ? (i[y] = a) : (t._root = a), t;
	do
		(i = i ? (i[y] = new Array(4)) : (t._root = new Array(4))),
			(m = n >= (h = (u + s) / 2)) ? (u = h) : (s = h),
			(g = e >= (l = (c + f) / 2)) ? (c = l) : (f = l);
	while ((y = (g << 1) | m) === (_ = ((p >= l) << 1) | (d >= h)));
	return (i[_] = o), (i[y] = a), t;
}
function J_(t) {
	var n,
		e,
		r = t.length,
		i,
		o,
		a = new Array(r),
		u = new Array(r),
		c = 1 / 0,
		s = 1 / 0,
		f = -1 / 0,
		h = -1 / 0;
	for (e = 0; e < r; ++e)
		isNaN((i = +this._x.call(null, (n = t[e])))) ||
			isNaN((o = +this._y.call(null, n))) ||
			((a[e] = i),
			(u[e] = o),
			i < c && (c = i),
			i > f && (f = i),
			o < s && (s = o),
			o > h && (h = o));
	if (c > f || s > h) return this;
	for (this.cover(c, s).cover(f, h), e = 0; e < r; ++e) $0(this, a[e], u[e], t[e]);
	return this;
}
function tw(t, n) {
	if (isNaN((t = +t)) || isNaN((n = +n))) return this;
	var e = this._x0,
		r = this._y0,
		i = this._x1,
		o = this._y1;
	if (isNaN(e)) (i = (e = Math.floor(t)) + 1), (o = (r = Math.floor(n)) + 1);
	else {
		for (var a = i - e || 1, u = this._root, c, s; e > t || t >= i || r > n || n >= o; )
			switch (
				((s = ((n < r) << 1) | (t < e)), (c = new Array(4)), (c[s] = u), (u = c), (a *= 2), s)
			) {
				case 0:
					(i = e + a), (o = r + a);
					break;
				case 1:
					(e = i - a), (o = r + a);
					break;
				case 2:
					(i = e + a), (r = o - a);
					break;
				case 3:
					(e = i - a), (r = o - a);
					break;
			}
		this._root && this._root.length && (this._root = u);
	}
	return (this._x0 = e), (this._y0 = r), (this._x1 = i), (this._y1 = o), this;
}
function nw() {
	var t = [];
	return (
		this.visit(function (n) {
			if (!n.length)
				do t.push(n.data);
				while ((n = n.next));
		}),
		t
	);
}
function ew(t) {
	return arguments.length
		? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1])
		: isNaN(this._x0)
			? void 0
			: [
					[this._x0, this._y0],
					[this._x1, this._y1]
				];
}
function Ot(t, n, e, r, i) {
	(this.node = t), (this.x0 = n), (this.y0 = e), (this.x1 = r), (this.y1 = i);
}
function rw(t, n, e) {
	var r,
		i = this._x0,
		o = this._y0,
		a,
		u,
		c,
		s,
		f = this._x1,
		h = this._y1,
		l = [],
		d = this._root,
		p,
		m;
	for (
		d && l.push(new Ot(d, i, o, f, h)),
			e == null ? (e = 1 / 0) : ((i = t - e), (o = n - e), (f = t + e), (h = n + e), (e *= e));
		(p = l.pop());

	)
		if (!(!(d = p.node) || (a = p.x0) > f || (u = p.y0) > h || (c = p.x1) < i || (s = p.y1) < o))
			if (d.length) {
				var g = (a + c) / 2,
					y = (u + s) / 2;
				l.push(
					new Ot(d[3], g, y, c, s),
					new Ot(d[2], a, y, g, s),
					new Ot(d[1], g, u, c, y),
					new Ot(d[0], a, u, g, y)
				),
					(m = ((n >= y) << 1) | (t >= g)) &&
						((p = l[l.length - 1]),
						(l[l.length - 1] = l[l.length - 1 - m]),
						(l[l.length - 1 - m] = p));
			} else {
				var _ = t - +this._x.call(null, d.data),
					v = n - +this._y.call(null, d.data),
					b = _ * _ + v * v;
				if (b < e) {
					var w = Math.sqrt((e = b));
					(i = t - w), (o = n - w), (f = t + w), (h = n + w), (r = d.data);
				}
			}
	return r;
}
function iw(t) {
	if (isNaN((f = +this._x.call(null, t))) || isNaN((h = +this._y.call(null, t)))) return this;
	var n,
		e = this._root,
		r,
		i,
		o,
		a = this._x0,
		u = this._y0,
		c = this._x1,
		s = this._y1,
		f,
		h,
		l,
		d,
		p,
		m,
		g,
		y;
	if (!e) return this;
	if (e.length)
		for (;;) {
			if (
				((p = f >= (l = (a + c) / 2)) ? (a = l) : (c = l),
				(m = h >= (d = (u + s) / 2)) ? (u = d) : (s = d),
				(n = e),
				!(e = e[(g = (m << 1) | p)]))
			)
				return this;
			if (!e.length) break;
			(n[(g + 1) & 3] || n[(g + 2) & 3] || n[(g + 3) & 3]) && ((r = n), (y = g));
		}
	for (; e.data !== t; ) if (((i = e), !(e = e.next))) return this;
	return (
		(o = e.next) && delete e.next,
		i
			? (o ? (i.next = o) : delete i.next, this)
			: n
				? (o ? (n[g] = o) : delete n[g],
					(e = n[0] || n[1] || n[2] || n[3]) &&
						e === (n[3] || n[2] || n[1] || n[0]) &&
						!e.length &&
						(r ? (r[y] = e) : (this._root = e)),
					this)
				: ((this._root = o), this)
	);
}
function ow(t) {
	for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n]);
	return this;
}
function aw() {
	return this._root;
}
function uw() {
	var t = 0;
	return (
		this.visit(function (n) {
			if (!n.length)
				do ++t;
				while ((n = n.next));
		}),
		t
	);
}
function sw(t) {
	var n = [],
		e,
		r = this._root,
		i,
		o,
		a,
		u,
		c;
	for (r && n.push(new Ot(r, this._x0, this._y0, this._x1, this._y1)); (e = n.pop()); )
		if (!t((r = e.node), (o = e.x0), (a = e.y0), (u = e.x1), (c = e.y1)) && r.length) {
			var s = (o + u) / 2,
				f = (a + c) / 2;
			(i = r[3]) && n.push(new Ot(i, s, f, u, c)),
				(i = r[2]) && n.push(new Ot(i, o, f, s, c)),
				(i = r[1]) && n.push(new Ot(i, s, a, u, f)),
				(i = r[0]) && n.push(new Ot(i, o, a, s, f));
		}
	return this;
}
function cw(t) {
	var n = [],
		e = [],
		r;
	for (
		this._root && n.push(new Ot(this._root, this._x0, this._y0, this._x1, this._y1));
		(r = n.pop());

	) {
		var i = r.node;
		if (i.length) {
			var o,
				a = r.x0,
				u = r.y0,
				c = r.x1,
				s = r.y1,
				f = (a + c) / 2,
				h = (u + s) / 2;
			(o = i[0]) && n.push(new Ot(o, a, u, f, h)),
				(o = i[1]) && n.push(new Ot(o, f, u, c, h)),
				(o = i[2]) && n.push(new Ot(o, a, h, f, s)),
				(o = i[3]) && n.push(new Ot(o, f, h, c, s));
		}
		e.push(r);
	}
	for (; (r = e.pop()); ) t(r.node, r.x0, r.y0, r.x1, r.y1);
	return this;
}
function fw(t) {
	return t[0];
}
function lw(t) {
	return arguments.length ? ((this._x = t), this) : this._x;
}
function hw(t) {
	return t[1];
}
function dw(t) {
	return arguments.length ? ((this._y = t), this) : this._y;
}
function ia(t, n, e) {
	var r = new Ls(n ?? fw, e ?? hw, NaN, NaN, NaN, NaN);
	return t == null ? r : r.addAll(t);
}
function Ls(t, n, e, r, i, o) {
	(this._x = t),
		(this._y = n),
		(this._x0 = e),
		(this._y0 = r),
		(this._x1 = i),
		(this._y1 = o),
		(this._root = void 0);
}
function _f(t) {
	for (var n = { data: t.data }, e = n; (t = t.next); ) e = e.next = { data: t.data };
	return n;
}
var Yt = (ia.prototype = Ls.prototype);
Yt.copy = function () {
	var t = new Ls(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
		n = this._root,
		e,
		r;
	if (!n) return t;
	if (!n.length) return (t._root = _f(n)), t;
	for (e = [{ source: n, target: (t._root = new Array(4)) }]; (n = e.pop()); )
		for (var i = 0; i < 4; ++i)
			(r = n.source[i]) &&
				(r.length
					? e.push({ source: r, target: (n.target[i] = new Array(4)) })
					: (n.target[i] = _f(r)));
	return t;
};
Yt.add = K_;
Yt.addAll = J_;
Yt.cover = tw;
Yt.data = nw;
Yt.extent = ew;
Yt.find = rw;
Yt.remove = iw;
Yt.removeAll = ow;
Yt.root = aw;
Yt.size = uw;
Yt.visit = sw;
Yt.visitAfter = cw;
Yt.x = lw;
Yt.y = dw;
function wt(t) {
	return function () {
		return t;
	};
}
function Ln(t) {
	return (t() - 0.5) * 1e-6;
}
function gw(t) {
	return t.x + t.vx;
}
function pw(t) {
	return t.y + t.vy;
}
function T0(t) {
	var n,
		e,
		r,
		i = 1,
		o = 1;
	typeof t != 'function' && (t = wt(t == null ? 1 : +t));
	function a() {
		for (var s, f = n.length, h, l, d, p, m, g, y = 0; y < o; ++y)
			for (h = ia(n, gw, pw).visitAfter(u), s = 0; s < f; ++s)
				(l = n[s]), (m = e[l.index]), (g = m * m), (d = l.x + l.vx), (p = l.y + l.vy), h.visit(_);
		function _(v, b, w, x, k) {
			var E = v.data,
				N = v.r,
				A = m + N;
			if (E) {
				if (E.index > l.index) {
					var $ = d - E.x - E.vx,
						P = p - E.y - E.vy,
						C = $ * $ + P * P;
					C < A * A &&
						($ === 0 && (($ = Ln(r)), (C += $ * $)),
						P === 0 && ((P = Ln(r)), (C += P * P)),
						(C = ((A - (C = Math.sqrt(C))) / C) * i),
						(l.vx += ($ *= C) * (A = (N *= N) / (g + N))),
						(l.vy += (P *= C) * A),
						(E.vx -= $ * (A = 1 - A)),
						(E.vy -= P * A));
				}
				return;
			}
			return b > d + A || x < d - A || w > p + A || k < p - A;
		}
	}
	function u(s) {
		if (s.data) return (s.r = e[s.data.index]);
		for (var f = (s.r = 0); f < 4; ++f) s[f] && s[f].r > s.r && (s.r = s[f].r);
	}
	function c() {
		if (n) {
			var s,
				f = n.length,
				h;
			for (e = new Array(f), s = 0; s < f; ++s) (h = n[s]), (e[h.index] = +t(h, s, n));
		}
	}
	return (
		(a.initialize = function (s, f) {
			(n = s), (r = f), c();
		}),
		(a.iterations = function (s) {
			return arguments.length ? ((o = +s), a) : o;
		}),
		(a.strength = function (s) {
			return arguments.length ? ((i = +s), a) : i;
		}),
		(a.radius = function (s) {
			return arguments.length ? ((t = typeof s == 'function' ? s : wt(+s)), c(), a) : t;
		}),
		a
	);
}
function mw(t) {
	return t.index;
}
function wf(t, n) {
	var e = t.get(n);
	if (!e) throw new Error('node not found: ' + n);
	return e;
}
function S0(t) {
	var n = mw,
		e = h,
		r,
		i = wt(30),
		o,
		a,
		u,
		c,
		s,
		f = 1;
	t == null && (t = []);
	function h(g) {
		return 1 / Math.min(u[g.source.index], u[g.target.index]);
	}
	function l(g) {
		for (var y = 0, _ = t.length; y < f; ++y)
			for (var v = 0, b, w, x, k, E, N, A; v < _; ++v)
				(b = t[v]),
					(w = b.source),
					(x = b.target),
					(k = x.x + x.vx - w.x - w.vx || Ln(s)),
					(E = x.y + x.vy - w.y - w.vy || Ln(s)),
					(N = Math.sqrt(k * k + E * E)),
					(N = ((N - o[v]) / N) * g * r[v]),
					(k *= N),
					(E *= N),
					(x.vx -= k * (A = c[v])),
					(x.vy -= E * A),
					(w.vx += k * (A = 1 - A)),
					(w.vy += E * A);
	}
	function d() {
		if (a) {
			var g,
				y = a.length,
				_ = t.length,
				v = new Map(a.map((w, x) => [n(w, x, a), w])),
				b;
			for (g = 0, u = new Array(y); g < _; ++g)
				(b = t[g]),
					(b.index = g),
					typeof b.source != 'object' && (b.source = wf(v, b.source)),
					typeof b.target != 'object' && (b.target = wf(v, b.target)),
					(u[b.source.index] = (u[b.source.index] || 0) + 1),
					(u[b.target.index] = (u[b.target.index] || 0) + 1);
			for (g = 0, c = new Array(_); g < _; ++g)
				(b = t[g]), (c[g] = u[b.source.index] / (u[b.source.index] + u[b.target.index]));
			(r = new Array(_)), p(), (o = new Array(_)), m();
		}
	}
	function p() {
		if (a) for (var g = 0, y = t.length; g < y; ++g) r[g] = +e(t[g], g, t);
	}
	function m() {
		if (a) for (var g = 0, y = t.length; g < y; ++g) o[g] = +i(t[g], g, t);
	}
	return (
		(l.initialize = function (g, y) {
			(a = g), (s = y), d();
		}),
		(l.links = function (g) {
			return arguments.length ? ((t = g), d(), l) : t;
		}),
		(l.id = function (g) {
			return arguments.length ? ((n = g), l) : n;
		}),
		(l.iterations = function (g) {
			return arguments.length ? ((f = +g), l) : f;
		}),
		(l.strength = function (g) {
			return arguments.length ? ((e = typeof g == 'function' ? g : wt(+g)), p(), l) : e;
		}),
		(l.distance = function (g) {
			return arguments.length ? ((i = typeof g == 'function' ? g : wt(+g)), m(), l) : i;
		}),
		l
	);
}
const yw = 1664525,
	bw = 1013904223,
	xf = 4294967296;
function vw() {
	let t = 1;
	return () => (t = (yw * t + bw) % xf) / xf;
}
function _w(t) {
	return t.x;
}
function ww(t) {
	return t.y;
}
var xw = 10,
	Mw = Math.PI * (3 - Math.sqrt(5));
function k0(t) {
	var n,
		e = 1,
		r = 0.001,
		i = 1 - Math.pow(r, 1 / 300),
		o = 0,
		a = 0.6,
		u = new Map(),
		c = ta(h),
		s = ye('tick', 'end'),
		f = vw();
	t == null && (t = []);
	function h() {
		l(), s.call('tick', n), e < r && (c.stop(), s.call('end', n));
	}
	function l(m) {
		var g,
			y = t.length,
			_;
		m === void 0 && (m = 1);
		for (var v = 0; v < m; ++v)
			for (
				e += (o - e) * i,
					u.forEach(function (b) {
						b(e);
					}),
					g = 0;
				g < y;
				++g
			)
				(_ = t[g]),
					_.fx == null ? (_.x += _.vx *= a) : ((_.x = _.fx), (_.vx = 0)),
					_.fy == null ? (_.y += _.vy *= a) : ((_.y = _.fy), (_.vy = 0));
		return n;
	}
	function d() {
		for (var m = 0, g = t.length, y; m < g; ++m) {
			if (
				((y = t[m]),
				(y.index = m),
				y.fx != null && (y.x = y.fx),
				y.fy != null && (y.y = y.fy),
				isNaN(y.x) || isNaN(y.y))
			) {
				var _ = xw * Math.sqrt(0.5 + m),
					v = m * Mw;
				(y.x = _ * Math.cos(v)), (y.y = _ * Math.sin(v));
			}
			(isNaN(y.vx) || isNaN(y.vy)) && (y.vx = y.vy = 0);
		}
	}
	function p(m) {
		return m.initialize && m.initialize(t, f), m;
	}
	return (
		d(),
		(n = {
			tick: l,
			restart: function () {
				return c.restart(h), n;
			},
			stop: function () {
				return c.stop(), n;
			},
			nodes: function (m) {
				return arguments.length ? ((t = m), d(), u.forEach(p), n) : t;
			},
			alpha: function (m) {
				return arguments.length ? ((e = +m), n) : e;
			},
			alphaMin: function (m) {
				return arguments.length ? ((r = +m), n) : r;
			},
			alphaDecay: function (m) {
				return arguments.length ? ((i = +m), n) : +i;
			},
			alphaTarget: function (m) {
				return arguments.length ? ((o = +m), n) : o;
			},
			velocityDecay: function (m) {
				return arguments.length ? ((a = 1 - m), n) : 1 - a;
			},
			randomSource: function (m) {
				return arguments.length ? ((f = m), u.forEach(p), n) : f;
			},
			force: function (m, g) {
				return arguments.length > 1 ? (g == null ? u.delete(m) : u.set(m, p(g)), n) : u.get(m);
			},
			find: function (m, g, y) {
				var _ = 0,
					v = t.length,
					b,
					w,
					x,
					k,
					E;
				for (y == null ? (y = 1 / 0) : (y *= y), _ = 0; _ < v; ++_)
					(k = t[_]),
						(b = m - k.x),
						(w = g - k.y),
						(x = b * b + w * w),
						x < y && ((E = k), (y = x));
				return E;
			},
			on: function (m, g) {
				return arguments.length > 1 ? (s.on(m, g), n) : s.on(m);
			}
		})
	);
}
function A0() {
	var t,
		n,
		e,
		r,
		i = wt(-30),
		o,
		a = 1,
		u = 1 / 0,
		c = 0.81;
	function s(d) {
		var p,
			m = t.length,
			g = ia(t, _w, ww).visitAfter(h);
		for (r = d, p = 0; p < m; ++p) (n = t[p]), g.visit(l);
	}
	function f() {
		if (t) {
			var d,
				p = t.length,
				m;
			for (o = new Array(p), d = 0; d < p; ++d) (m = t[d]), (o[m.index] = +i(m, d, t));
		}
	}
	function h(d) {
		var p = 0,
			m,
			g,
			y = 0,
			_,
			v,
			b;
		if (d.length) {
			for (_ = v = b = 0; b < 4; ++b)
				(m = d[b]) &&
					(g = Math.abs(m.value)) &&
					((p += m.value), (y += g), (_ += g * m.x), (v += g * m.y));
			(d.x = _ / y), (d.y = v / y);
		} else {
			(m = d), (m.x = m.data.x), (m.y = m.data.y);
			do p += o[m.data.index];
			while ((m = m.next));
		}
		d.value = p;
	}
	function l(d, p, m, g) {
		if (!d.value) return !0;
		var y = d.x - n.x,
			_ = d.y - n.y,
			v = g - p,
			b = y * y + _ * _;
		if ((v * v) / c < b)
			return (
				b < u &&
					(y === 0 && ((y = Ln(e)), (b += y * y)),
					_ === 0 && ((_ = Ln(e)), (b += _ * _)),
					b < a && (b = Math.sqrt(a * b)),
					(n.vx += (y * d.value * r) / b),
					(n.vy += (_ * d.value * r) / b)),
				!0
			);
		if (d.length || b >= u) return;
		(d.data !== n || d.next) &&
			(y === 0 && ((y = Ln(e)), (b += y * y)),
			_ === 0 && ((_ = Ln(e)), (b += _ * _)),
			b < a && (b = Math.sqrt(a * b)));
		do d.data !== n && ((v = (o[d.data.index] * r) / b), (n.vx += y * v), (n.vy += _ * v));
		while ((d = d.next));
	}
	return (
		(s.initialize = function (d, p) {
			(t = d), (e = p), f();
		}),
		(s.strength = function (d) {
			return arguments.length ? ((i = typeof d == 'function' ? d : wt(+d)), f(), s) : i;
		}),
		(s.distanceMin = function (d) {
			return arguments.length ? ((a = d * d), s) : Math.sqrt(a);
		}),
		(s.distanceMax = function (d) {
			return arguments.length ? ((u = d * d), s) : Math.sqrt(u);
		}),
		(s.theta = function (d) {
			return arguments.length ? ((c = d * d), s) : Math.sqrt(c);
		}),
		s
	);
}
function $w(t, n, e) {
	var r,
		i = wt(0.1),
		o,
		a;
	typeof t != 'function' && (t = wt(+t)), n == null && (n = 0), e == null && (e = 0);
	function u(s) {
		for (var f = 0, h = r.length; f < h; ++f) {
			var l = r[f],
				d = l.x - n || 1e-6,
				p = l.y - e || 1e-6,
				m = Math.sqrt(d * d + p * p),
				g = ((a[f] - m) * o[f] * s) / m;
			(l.vx += d * g), (l.vy += p * g);
		}
	}
	function c() {
		if (r) {
			var s,
				f = r.length;
			for (o = new Array(f), a = new Array(f), s = 0; s < f; ++s)
				(a[s] = +t(r[s], s, r)), (o[s] = isNaN(a[s]) ? 0 : +i(r[s], s, r));
		}
	}
	return (
		(u.initialize = function (s) {
			(r = s), c();
		}),
		(u.strength = function (s) {
			return arguments.length ? ((i = typeof s == 'function' ? s : wt(+s)), c(), u) : i;
		}),
		(u.radius = function (s) {
			return arguments.length ? ((t = typeof s == 'function' ? s : wt(+s)), c(), u) : t;
		}),
		(u.x = function (s) {
			return arguments.length ? ((n = +s), u) : n;
		}),
		(u.y = function (s) {
			return arguments.length ? ((e = +s), u) : e;
		}),
		u
	);
}
function Tw(t) {
	var n = wt(0.1),
		e,
		r,
		i;
	typeof t != 'function' && (t = wt(t == null ? 0 : +t));
	function o(u) {
		for (var c = 0, s = e.length, f; c < s; ++c) (f = e[c]), (f.vx += (i[c] - f.x) * r[c] * u);
	}
	function a() {
		if (e) {
			var u,
				c = e.length;
			for (r = new Array(c), i = new Array(c), u = 0; u < c; ++u)
				r[u] = isNaN((i[u] = +t(e[u], u, e))) ? 0 : +n(e[u], u, e);
		}
	}
	return (
		(o.initialize = function (u) {
			(e = u), a();
		}),
		(o.strength = function (u) {
			return arguments.length ? ((n = typeof u == 'function' ? u : wt(+u)), a(), o) : n;
		}),
		(o.x = function (u) {
			return arguments.length ? ((t = typeof u == 'function' ? u : wt(+u)), a(), o) : t;
		}),
		o
	);
}
function Sw(t) {
	var n = wt(0.1),
		e,
		r,
		i;
	typeof t != 'function' && (t = wt(t == null ? 0 : +t));
	function o(u) {
		for (var c = 0, s = e.length, f; c < s; ++c) (f = e[c]), (f.vy += (i[c] - f.y) * r[c] * u);
	}
	function a() {
		if (e) {
			var u,
				c = e.length;
			for (r = new Array(c), i = new Array(c), u = 0; u < c; ++u)
				r[u] = isNaN((i[u] = +t(e[u], u, e))) ? 0 : +n(e[u], u, e);
		}
	}
	return (
		(o.initialize = function (u) {
			(e = u), a();
		}),
		(o.strength = function (u) {
			return arguments.length ? ((n = typeof u == 'function' ? u : wt(+u)), a(), o) : n;
		}),
		(o.y = function (u) {
			return arguments.length ? ((t = typeof u == 'function' ? u : wt(+u)), a(), o) : t;
		}),
		o
	);
}
function kw(t) {
	return Math.abs((t = Math.round(t))) >= 1e21
		? t.toLocaleString('en').replace(/,/g, '')
		: t.toString(10);
}
function co(t, n) {
	if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf('e')) < 0) return null;
	var e,
		r = t.slice(0, e);
	return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)];
}
function Qe(t) {
	return (t = co(Math.abs(t))), t ? t[1] : NaN;
}
function Aw(t, n) {
	return function (e, r) {
		for (
			var i = e.length, o = [], a = 0, u = t[0], c = 0;
			i > 0 &&
			u > 0 &&
			(c + u + 1 > r && (u = Math.max(1, r - c)),
			o.push(e.substring((i -= u), i + u)),
			!((c += u + 1) > r));

		)
			u = t[(a = (a + 1) % t.length)];
		return o.reverse().join(n);
	};
}
function Ew(t) {
	return function (n) {
		return n.replace(/[0-9]/g, function (e) {
			return t[+e];
		});
	};
}
var Nw = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ke(t) {
	if (!(n = Nw.exec(t))) throw new Error('invalid format: ' + t);
	var n;
	return new oa({
		fill: n[1],
		align: n[2],
		sign: n[3],
		symbol: n[4],
		zero: n[5],
		width: n[6],
		comma: n[7],
		precision: n[8] && n[8].slice(1),
		trim: n[9],
		type: n[10]
	});
}
Ke.prototype = oa.prototype;
function oa(t) {
	(this.fill = t.fill === void 0 ? ' ' : t.fill + ''),
		(this.align = t.align === void 0 ? '>' : t.align + ''),
		(this.sign = t.sign === void 0 ? '-' : t.sign + ''),
		(this.symbol = t.symbol === void 0 ? '' : t.symbol + ''),
		(this.zero = !!t.zero),
		(this.width = t.width === void 0 ? void 0 : +t.width),
		(this.comma = !!t.comma),
		(this.precision = t.precision === void 0 ? void 0 : +t.precision),
		(this.trim = !!t.trim),
		(this.type = t.type === void 0 ? '' : t.type + '');
}
oa.prototype.toString = function () {
	return (
		this.fill +
		this.align +
		this.sign +
		this.symbol +
		(this.zero ? '0' : '') +
		(this.width === void 0 ? '' : Math.max(1, this.width | 0)) +
		(this.comma ? ',' : '') +
		(this.precision === void 0 ? '' : '.' + Math.max(0, this.precision | 0)) +
		(this.trim ? '~' : '') +
		this.type
	);
};
function Cw(t) {
	t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
		switch (t[e]) {
			case '.':
				r = i = e;
				break;
			case '0':
				r === 0 && (r = e), (i = e);
				break;
			default:
				if (!+t[e]) break t;
				r > 0 && (r = 0);
				break;
		}
	return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var E0;
function Rw(t, n) {
	var e = co(t, n);
	if (!e) return t + '';
	var r = e[0],
		i = e[1],
		o = i - (E0 = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
		a = r.length;
	return o === a
		? r
		: o > a
			? r + new Array(o - a + 1).join('0')
			: o > 0
				? r.slice(0, o) + '.' + r.slice(o)
				: '0.' + new Array(1 - o).join('0') + co(t, Math.max(0, n + o - 1))[0];
}
function Mf(t, n) {
	var e = co(t, n);
	if (!e) return t + '';
	var r = e[0],
		i = e[1];
	return i < 0
		? '0.' + new Array(-i).join('0') + r
		: r.length > i + 1
			? r.slice(0, i + 1) + '.' + r.slice(i + 1)
			: r + new Array(i - r.length + 2).join('0');
}
const $f = {
	'%': (t, n) => (t * 100).toFixed(n),
	b: (t) => Math.round(t).toString(2),
	c: (t) => t + '',
	d: kw,
	e: (t, n) => t.toExponential(n),
	f: (t, n) => t.toFixed(n),
	g: (t, n) => t.toPrecision(n),
	o: (t) => Math.round(t).toString(8),
	p: (t, n) => Mf(t * 100, n),
	r: Mf,
	s: Rw,
	X: (t) => Math.round(t).toString(16).toUpperCase(),
	x: (t) => Math.round(t).toString(16)
};
function Tf(t) {
	return t;
}
var Sf = Array.prototype.map,
	kf = ['y', 'z', 'a', 'f', 'p', 'n', 'µ', 'm', '', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
function N0(t) {
	var n =
			t.grouping === void 0 || t.thousands === void 0
				? Tf
				: Aw(Sf.call(t.grouping, Number), t.thousands + ''),
		e = t.currency === void 0 ? '' : t.currency[0] + '',
		r = t.currency === void 0 ? '' : t.currency[1] + '',
		i = t.decimal === void 0 ? '.' : t.decimal + '',
		o = t.numerals === void 0 ? Tf : Ew(Sf.call(t.numerals, String)),
		a = t.percent === void 0 ? '%' : t.percent + '',
		u = t.minus === void 0 ? '−' : t.minus + '',
		c = t.nan === void 0 ? 'NaN' : t.nan + '';
	function s(h) {
		h = Ke(h);
		var l = h.fill,
			d = h.align,
			p = h.sign,
			m = h.symbol,
			g = h.zero,
			y = h.width,
			_ = h.comma,
			v = h.precision,
			b = h.trim,
			w = h.type;
		w === 'n' ? ((_ = !0), (w = 'g')) : $f[w] || (v === void 0 && (v = 12), (b = !0), (w = 'g')),
			(g || (l === '0' && d === '=')) && ((g = !0), (l = '0'), (d = '='));
		var x = m === '$' ? e : m === '#' && /[boxX]/.test(w) ? '0' + w.toLowerCase() : '',
			k = m === '$' ? r : /[%p]/.test(w) ? a : '',
			E = $f[w],
			N = /[defgprs%]/.test(w);
		v =
			v === void 0
				? 6
				: /[gprs]/.test(w)
					? Math.max(1, Math.min(21, v))
					: Math.max(0, Math.min(20, v));
		function A($) {
			var P = x,
				C = k,
				M,
				S,
				T;
			if (w === 'c') (C = E($) + C), ($ = '');
			else {
				$ = +$;
				var R = $ < 0 || 1 / $ < 0;
				if (
					(($ = isNaN($) ? c : E(Math.abs($), v)),
					b && ($ = Cw($)),
					R && +$ == 0 && p !== '+' && (R = !1),
					(P = (R ? (p === '(' ? p : u) : p === '-' || p === '(' ? '' : p) + P),
					(C = (w === 's' ? kf[8 + E0 / 3] : '') + C + (R && p === '(' ? ')' : '')),
					N)
				) {
					for (M = -1, S = $.length; ++M < S; )
						if (((T = $.charCodeAt(M)), 48 > T || T > 57)) {
							(C = (T === 46 ? i + $.slice(M + 1) : $.slice(M)) + C), ($ = $.slice(0, M));
							break;
						}
				}
			}
			_ && !g && ($ = n($, 1 / 0));
			var O = P.length + $.length + C.length,
				z = O < y ? new Array(y - O + 1).join(l) : '';
			switch ((_ && g && (($ = n(z + $, z.length ? y - C.length : 1 / 0)), (z = '')), d)) {
				case '<':
					$ = P + $ + C + z;
					break;
				case '=':
					$ = P + z + $ + C;
					break;
				case '^':
					$ = z.slice(0, (O = z.length >> 1)) + P + $ + C + z.slice(O);
					break;
				default:
					$ = z + P + $ + C;
					break;
			}
			return o($);
		}
		return (
			(A.toString = function () {
				return h + '';
			}),
			A
		);
	}
	function f(h, l) {
		var d = s(((h = Ke(h)), (h.type = 'f'), h)),
			p = Math.max(-8, Math.min(8, Math.floor(Qe(l) / 3))) * 3,
			m = Math.pow(10, -p),
			g = kf[8 + p / 3];
		return function (y) {
			return d(m * y) + g;
		};
	}
	return { format: s, formatPrefix: f };
}
var Ti, aa, Bs;
C0({ thousands: ',', grouping: [3], currency: ['$', ''] });
function C0(t) {
	return (Ti = N0(t)), (aa = Ti.format), (Bs = Ti.formatPrefix), Ti;
}
function R0(t) {
	return Math.max(0, -Qe(Math.abs(t)));
}
function P0(t, n) {
	return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Qe(n) / 3))) * 3 - Qe(Math.abs(t)));
}
function I0(t, n) {
	return (t = Math.abs(t)), (n = Math.abs(n) - t), Math.max(0, Qe(n) - Qe(t)) + 1;
}
var Q = 1e-6,
	jr = 1e-12,
	rt = Math.PI,
	vt = rt / 2,
	fo = rt / 4,
	Bt = rt * 2,
	ft = 180 / rt,
	K = rt / 180,
	it = Math.abs,
	cr = Math.atan,
	Ut = Math.atan2,
	G = Math.cos,
	Si = Math.ceil,
	z0 = Math.exp,
	Du = Math.hypot,
	lo = Math.log,
	Qa = Math.pow,
	Y = Math.sin,
	en =
		Math.sign ||
		function (t) {
			return t > 0 ? 1 : t < 0 ? -1 : 0;
		},
	Tt = Math.sqrt,
	Us = Math.tan;
function D0(t) {
	return t > 1 ? 0 : t < -1 ? rt : Math.acos(t);
}
function qt(t) {
	return t > 1 ? vt : t < -1 ? -vt : Math.asin(t);
}
function Af(t) {
	return (t = Y(t / 2)) * t;
}
function mt() {}
function ho(t, n) {
	t && Nf.hasOwnProperty(t.type) && Nf[t.type](t, n);
}
var Ef = {
		Feature: function (t, n) {
			ho(t.geometry, n);
		},
		FeatureCollection: function (t, n) {
			for (var e = t.features, r = -1, i = e.length; ++r < i; ) ho(e[r].geometry, n);
		}
	},
	Nf = {
		Sphere: function (t, n) {
			n.sphere();
		},
		Point: function (t, n) {
			(t = t.coordinates), n.point(t[0], t[1], t[2]);
		},
		MultiPoint: function (t, n) {
			for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
				(t = e[r]), n.point(t[0], t[1], t[2]);
		},
		LineString: function (t, n) {
			Ou(t.coordinates, n, 0);
		},
		MultiLineString: function (t, n) {
			for (var e = t.coordinates, r = -1, i = e.length; ++r < i; ) Ou(e[r], n, 0);
		},
		Polygon: function (t, n) {
			Cf(t.coordinates, n);
		},
		MultiPolygon: function (t, n) {
			for (var e = t.coordinates, r = -1, i = e.length; ++r < i; ) Cf(e[r], n);
		},
		GeometryCollection: function (t, n) {
			for (var e = t.geometries, r = -1, i = e.length; ++r < i; ) ho(e[r], n);
		}
	};
function Ou(t, n, e) {
	var r = -1,
		i = t.length - e,
		o;
	for (n.lineStart(); ++r < i; ) (o = t[r]), n.point(o[0], o[1], o[2]);
	n.lineEnd();
}
function Cf(t, n) {
	var e = -1,
		r = t.length;
	for (n.polygonStart(); ++e < r; ) Ou(t[e], n, 1);
	n.polygonEnd();
}
function un(t, n) {
	t && Ef.hasOwnProperty(t.type) ? Ef[t.type](t, n) : ho(t, n);
}
var go = new xt(),
	po = new xt(),
	O0,
	F0,
	Fu,
	Lu,
	Bu,
	bn = {
		point: mt,
		lineStart: mt,
		lineEnd: mt,
		polygonStart: function () {
			(go = new xt()), (bn.lineStart = Pw), (bn.lineEnd = Iw);
		},
		polygonEnd: function () {
			var t = +go;
			po.add(t < 0 ? Bt + t : t), (this.lineStart = this.lineEnd = this.point = mt);
		},
		sphere: function () {
			po.add(Bt);
		}
	};
function Pw() {
	bn.point = zw;
}
function Iw() {
	L0(O0, F0);
}
function zw(t, n) {
	(bn.point = L0),
		(O0 = t),
		(F0 = n),
		(t *= K),
		(n *= K),
		(Fu = t),
		(Lu = G((n = n / 2 + fo))),
		(Bu = Y(n));
}
function L0(t, n) {
	(t *= K), (n *= K), (n = n / 2 + fo);
	var e = t - Fu,
		r = e >= 0 ? 1 : -1,
		i = r * e,
		o = G(n),
		a = Y(n),
		u = Bu * a,
		c = Lu * o + u * G(i),
		s = u * r * Y(i);
	go.add(Ut(s, c)), (Fu = t), (Lu = o), (Bu = a);
}
function Dw(t) {
	return (po = new xt()), un(t, bn), po * 2;
}
function mo(t) {
	return [Ut(t[1], t[0]), qt(t[2])];
}
function he(t) {
	var n = t[0],
		e = t[1],
		r = G(e);
	return [r * G(n), r * Y(n), Y(e)];
}
function ki(t, n) {
	return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
}
function Je(t, n) {
	return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]];
}
function Ka(t, n) {
	(t[0] += n[0]), (t[1] += n[1]), (t[2] += n[2]);
}
function Ai(t, n) {
	return [t[0] * n, t[1] * n, t[2] * n];
}
function yo(t) {
	var n = Tt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
	(t[0] /= n), (t[1] /= n), (t[2] /= n);
}
var pt,
	Wt,
	bt,
	Qt,
	Jn,
	B0,
	U0,
	Ye,
	Pr,
	On,
	Pn,
	kn = {
		point: Uu,
		lineStart: Rf,
		lineEnd: Pf,
		polygonStart: function () {
			(kn.point = Y0), (kn.lineStart = Ow), (kn.lineEnd = Fw), (Pr = new xt()), bn.polygonStart();
		},
		polygonEnd: function () {
			bn.polygonEnd(),
				(kn.point = Uu),
				(kn.lineStart = Rf),
				(kn.lineEnd = Pf),
				go < 0
					? ((pt = -(bt = 180)), (Wt = -(Qt = 90)))
					: Pr > Q
						? (Qt = 90)
						: Pr < -Q && (Wt = -90),
				(Pn[0] = pt),
				(Pn[1] = bt);
		},
		sphere: function () {
			(pt = -(bt = 180)), (Wt = -(Qt = 90));
		}
	};
function Uu(t, n) {
	On.push((Pn = [(pt = t), (bt = t)])), n < Wt && (Wt = n), n > Qt && (Qt = n);
}
function q0(t, n) {
	var e = he([t * K, n * K]);
	if (Ye) {
		var r = Je(Ye, e),
			i = [r[1], -r[0], 0],
			o = Je(i, r);
		yo(o), (o = mo(o));
		var a = t - Jn,
			u = a > 0 ? 1 : -1,
			c = o[0] * ft * u,
			s,
			f = it(a) > 180;
		f ^ (u * Jn < c && c < u * t)
			? ((s = o[1] * ft), s > Qt && (Qt = s))
			: ((c = ((c + 360) % 360) - 180),
				f ^ (u * Jn < c && c < u * t)
					? ((s = -o[1] * ft), s < Wt && (Wt = s))
					: (n < Wt && (Wt = n), n > Qt && (Qt = n))),
			f
				? t < Jn
					? jt(pt, t) > jt(pt, bt) && (bt = t)
					: jt(t, bt) > jt(pt, bt) && (pt = t)
				: bt >= pt
					? (t < pt && (pt = t), t > bt && (bt = t))
					: t > Jn
						? jt(pt, t) > jt(pt, bt) && (bt = t)
						: jt(t, bt) > jt(pt, bt) && (pt = t);
	} else On.push((Pn = [(pt = t), (bt = t)]));
	n < Wt && (Wt = n), n > Qt && (Qt = n), (Ye = e), (Jn = t);
}
function Rf() {
	kn.point = q0;
}
function Pf() {
	(Pn[0] = pt), (Pn[1] = bt), (kn.point = Uu), (Ye = null);
}
function Y0(t, n) {
	if (Ye) {
		var e = t - Jn;
		Pr.add(it(e) > 180 ? e + (e > 0 ? 360 : -360) : e);
	} else (B0 = t), (U0 = n);
	bn.point(t, n), q0(t, n);
}
function Ow() {
	bn.lineStart();
}
function Fw() {
	Y0(B0, U0),
		bn.lineEnd(),
		it(Pr) > Q && (pt = -(bt = 180)),
		(Pn[0] = pt),
		(Pn[1] = bt),
		(Ye = null);
}
function jt(t, n) {
	return (n -= t) < 0 ? n + 360 : n;
}
function Lw(t, n) {
	return t[0] - n[0];
}
function If(t, n) {
	return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n;
}
function Bw(t) {
	var n, e, r, i, o, a, u;
	if (((Qt = bt = -(pt = Wt = 1 / 0)), (On = []), un(t, kn), (e = On.length))) {
		for (On.sort(Lw), n = 1, r = On[0], o = [r]; n < e; ++n)
			(i = On[n]),
				If(r, i[0]) || If(r, i[1])
					? (jt(r[0], i[1]) > jt(r[0], r[1]) && (r[1] = i[1]),
						jt(i[0], r[1]) > jt(r[0], r[1]) && (r[0] = i[0]))
					: o.push((r = i));
		for (a = -1 / 0, e = o.length - 1, n = 0, r = o[e]; n <= e; r = i, ++n)
			(i = o[n]), (u = jt(r[1], i[0])) > a && ((a = u), (pt = i[0]), (bt = r[1]));
	}
	return (
		(On = Pn = null),
		pt === 1 / 0 || Wt === 1 / 0
			? [
					[NaN, NaN],
					[NaN, NaN]
				]
			: [
					[pt, Wt],
					[bt, Qt]
				]
	);
}
var Mr,
	bo,
	vo,
	_o,
	wo,
	xo,
	Mo,
	$o,
	qu,
	Yu,
	Hu,
	H0,
	X0,
	It,
	zt,
	Dt,
	sn = {
		sphere: mt,
		point: qs,
		lineStart: zf,
		lineEnd: Df,
		polygonStart: function () {
			(sn.lineStart = Yw), (sn.lineEnd = Hw);
		},
		polygonEnd: function () {
			(sn.lineStart = zf), (sn.lineEnd = Df);
		}
	};
function qs(t, n) {
	(t *= K), (n *= K);
	var e = G(n);
	ui(e * G(t), e * Y(t), Y(n));
}
function ui(t, n, e) {
	++Mr, (vo += (t - vo) / Mr), (_o += (n - _o) / Mr), (wo += (e - wo) / Mr);
}
function zf() {
	sn.point = Uw;
}
function Uw(t, n) {
	(t *= K), (n *= K);
	var e = G(n);
	(It = e * G(t)), (zt = e * Y(t)), (Dt = Y(n)), (sn.point = qw), ui(It, zt, Dt);
}
function qw(t, n) {
	(t *= K), (n *= K);
	var e = G(n),
		r = e * G(t),
		i = e * Y(t),
		o = Y(n),
		a = Ut(
			Tt((a = zt * o - Dt * i) * a + (a = Dt * r - It * o) * a + (a = It * i - zt * r) * a),
			It * r + zt * i + Dt * o
		);
	(bo += a),
		(xo += a * (It + (It = r))),
		(Mo += a * (zt + (zt = i))),
		($o += a * (Dt + (Dt = o))),
		ui(It, zt, Dt);
}
function Df() {
	sn.point = qs;
}
function Yw() {
	sn.point = Xw;
}
function Hw() {
	G0(H0, X0), (sn.point = qs);
}
function Xw(t, n) {
	(H0 = t), (X0 = n), (t *= K), (n *= K), (sn.point = G0);
	var e = G(n);
	(It = e * G(t)), (zt = e * Y(t)), (Dt = Y(n)), ui(It, zt, Dt);
}
function G0(t, n) {
	(t *= K), (n *= K);
	var e = G(n),
		r = e * G(t),
		i = e * Y(t),
		o = Y(n),
		a = zt * o - Dt * i,
		u = Dt * r - It * o,
		c = It * i - zt * r,
		s = Du(a, u, c),
		f = qt(s),
		h = s && -f / s;
	qu.add(h * a),
		Yu.add(h * u),
		Hu.add(h * c),
		(bo += f),
		(xo += f * (It + (It = r))),
		(Mo += f * (zt + (zt = i))),
		($o += f * (Dt + (Dt = o))),
		ui(It, zt, Dt);
}
function Gw(t) {
	(Mr = bo = vo = _o = wo = xo = Mo = $o = 0),
		(qu = new xt()),
		(Yu = new xt()),
		(Hu = new xt()),
		un(t, sn);
	var n = +qu,
		e = +Yu,
		r = +Hu,
		i = Du(n, e, r);
	return i < jr &&
		((n = xo),
		(e = Mo),
		(r = $o),
		bo < Q && ((n = vo), (e = _o), (r = wo)),
		(i = Du(n, e, r)),
		i < jr)
		? [NaN, NaN]
		: [Ut(e, n) * ft, qt(r / i) * ft];
}
function ze(t) {
	return function () {
		return t;
	};
}
function Xu(t, n) {
	function e(r, i) {
		return (r = t(r, i)), n(r[0], r[1]);
	}
	return (
		t.invert &&
			n.invert &&
			(e.invert = function (r, i) {
				return (r = n.invert(r, i)), r && t.invert(r[0], r[1]);
			}),
		e
	);
}
function Gu(t, n) {
	return it(t) > rt && (t -= Math.round(t / Bt) * Bt), [t, n];
}
Gu.invert = Gu;
function Ys(t, n, e) {
	return (t %= Bt) ? (n || e ? Xu(Ff(t), Lf(n, e)) : Ff(t)) : n || e ? Lf(n, e) : Gu;
}
function Of(t) {
	return function (n, e) {
		return (n += t), it(n) > rt && (n -= Math.round(n / Bt) * Bt), [n, e];
	};
}
function Ff(t) {
	var n = Of(t);
	return (n.invert = Of(-t)), n;
}
function Lf(t, n) {
	var e = G(t),
		r = Y(t),
		i = G(n),
		o = Y(n);
	function a(u, c) {
		var s = G(c),
			f = G(u) * s,
			h = Y(u) * s,
			l = Y(c),
			d = l * e + f * r;
		return [Ut(h * i - d * o, f * e - l * r), qt(d * i + h * o)];
	}
	return (
		(a.invert = function (u, c) {
			var s = G(c),
				f = G(u) * s,
				h = Y(u) * s,
				l = Y(c),
				d = l * i - h * o;
			return [Ut(h * i + l * o, f * e + d * r), qt(d * e - f * r)];
		}),
		a
	);
}
function W0(t) {
	t = Ys(t[0] * K, t[1] * K, t.length > 2 ? t[2] * K : 0);
	function n(e) {
		return (e = t(e[0] * K, e[1] * K)), (e[0] *= ft), (e[1] *= ft), e;
	}
	return (
		(n.invert = function (e) {
			return (e = t.invert(e[0] * K, e[1] * K)), (e[0] *= ft), (e[1] *= ft), e;
		}),
		n
	);
}
function V0(t, n, e, r, i, o) {
	if (e) {
		var a = G(n),
			u = Y(n),
			c = r * e;
		i == null
			? ((i = n + r * Bt), (o = n - c / 2))
			: ((i = Bf(a, i)), (o = Bf(a, o)), (r > 0 ? i < o : i > o) && (i += r * Bt));
		for (var s, f = i; r > 0 ? f > o : f < o; f -= c)
			(s = mo([a, -u * G(f), -u * Y(f)])), t.point(s[0], s[1]);
	}
}
function Bf(t, n) {
	(n = he(n)), (n[0] -= t), yo(n);
	var e = D0(-n[1]);
	return ((-n[2] < 0 ? -e : e) + Bt - Q) % Bt;
}
function Ww() {
	var t = ze([0, 0]),
		n = ze(90),
		e = ze(2),
		r,
		i,
		o = { point: a };
	function a(c, s) {
		r.push((c = i(c, s))), (c[0] *= ft), (c[1] *= ft);
	}
	function u() {
		var c = t.apply(this, arguments),
			s = n.apply(this, arguments) * K,
			f = e.apply(this, arguments) * K;
		return (
			(r = []),
			(i = Ys(-c[0] * K, -c[1] * K, 0).invert),
			V0(o, s, f, 1),
			(c = { type: 'Polygon', coordinates: [r] }),
			(r = i = null),
			c
		);
	}
	return (
		(u.center = function (c) {
			return arguments.length ? ((t = typeof c == 'function' ? c : ze([+c[0], +c[1]])), u) : t;
		}),
		(u.radius = function (c) {
			return arguments.length ? ((n = typeof c == 'function' ? c : ze(+c)), u) : n;
		}),
		(u.precision = function (c) {
			return arguments.length ? ((e = typeof c == 'function' ? c : ze(+c)), u) : e;
		}),
		u
	);
}
function j0() {
	var t = [],
		n;
	return {
		point: function (e, r, i) {
			n.push([e, r, i]);
		},
		lineStart: function () {
			t.push((n = []));
		},
		lineEnd: mt,
		rejoin: function () {
			t.length > 1 && t.push(t.pop().concat(t.shift()));
		},
		result: function () {
			var e = t;
			return (t = []), (n = null), e;
		}
	};
}
function Xi(t, n) {
	return it(t[0] - n[0]) < Q && it(t[1] - n[1]) < Q;
}
function Ei(t, n, e, r) {
	(this.x = t), (this.z = n), (this.o = e), (this.e = r), (this.v = !1), (this.n = this.p = null);
}
function Z0(t, n, e, r, i) {
	var o = [],
		a = [],
		u,
		c;
	if (
		(t.forEach(function (p) {
			if (!((m = p.length - 1) <= 0)) {
				var m,
					g = p[0],
					y = p[m],
					_;
				if (Xi(g, y)) {
					if (!g[2] && !y[2]) {
						for (i.lineStart(), u = 0; u < m; ++u) i.point((g = p[u])[0], g[1]);
						i.lineEnd();
						return;
					}
					y[0] += 2 * Q;
				}
				o.push((_ = new Ei(g, p, null, !0))),
					a.push((_.o = new Ei(g, null, _, !1))),
					o.push((_ = new Ei(y, p, null, !1))),
					a.push((_.o = new Ei(y, null, _, !0)));
			}
		}),
		!!o.length)
	) {
		for (a.sort(n), Uf(o), Uf(a), u = 0, c = a.length; u < c; ++u) a[u].e = e = !e;
		for (var s = o[0], f, h; ; ) {
			for (var l = s, d = !0; l.v; ) if ((l = l.n) === s) return;
			(f = l.z), i.lineStart();
			do {
				if (((l.v = l.o.v = !0), l.e)) {
					if (d) for (u = 0, c = f.length; u < c; ++u) i.point((h = f[u])[0], h[1]);
					else r(l.x, l.n.x, 1, i);
					l = l.n;
				} else {
					if (d) for (f = l.p.z, u = f.length - 1; u >= 0; --u) i.point((h = f[u])[0], h[1]);
					else r(l.x, l.p.x, -1, i);
					l = l.p;
				}
				(l = l.o), (f = l.z), (d = !d);
			} while (!l.v);
			i.lineEnd();
		}
	}
}
function Uf(t) {
	if ((n = t.length)) {
		for (var n, e = 0, r = t[0], i; ++e < n; ) (r.n = i = t[e]), (i.p = r), (r = i);
		(r.n = i = t[0]), (i.p = r);
	}
}
function Ja(t) {
	return it(t[0]) <= rt ? t[0] : en(t[0]) * (((it(t[0]) + rt) % Bt) - rt);
}
function Q0(t, n) {
	var e = Ja(n),
		r = n[1],
		i = Y(r),
		o = [Y(e), -G(e), 0],
		a = 0,
		u = 0,
		c = new xt();
	i === 1 ? (r = vt + Q) : i === -1 && (r = -vt - Q);
	for (var s = 0, f = t.length; s < f; ++s)
		if ((l = (h = t[s]).length))
			for (
				var h, l, d = h[l - 1], p = Ja(d), m = d[1] / 2 + fo, g = Y(m), y = G(m), _ = 0;
				_ < l;
				++_, p = b, g = x, y = k, d = v
			) {
				var v = h[_],
					b = Ja(v),
					w = v[1] / 2 + fo,
					x = Y(w),
					k = G(w),
					E = b - p,
					N = E >= 0 ? 1 : -1,
					A = N * E,
					$ = A > rt,
					P = g * x;
				if (
					(c.add(Ut(P * N * Y(A), y * k + P * G(A))),
					(a += $ ? E + N * Bt : E),
					$ ^ (p >= e) ^ (b >= e))
				) {
					var C = Je(he(d), he(v));
					yo(C);
					var M = Je(o, C);
					yo(M);
					var S = ($ ^ (E >= 0) ? -1 : 1) * qt(M[2]);
					(r > S || (r === S && (C[0] || C[1]))) && (u += $ ^ (E >= 0) ? 1 : -1);
				}
			}
	return (a < -Q || (a < Q && c < -jr)) ^ (u & 1);
}
function K0(t, n, e, r) {
	return function (i) {
		var o = n(i),
			a = j0(),
			u = n(a),
			c = !1,
			s,
			f,
			h,
			l = {
				point: d,
				lineStart: m,
				lineEnd: g,
				polygonStart: function () {
					(l.point = y), (l.lineStart = _), (l.lineEnd = v), (f = []), (s = []);
				},
				polygonEnd: function () {
					(l.point = d), (l.lineStart = m), (l.lineEnd = g), (f = ys(f));
					var b = Q0(s, r);
					f.length
						? (c || (i.polygonStart(), (c = !0)), Z0(f, jw, b, e, i))
						: b &&
							(c || (i.polygonStart(), (c = !0)), i.lineStart(), e(null, null, 1, i), i.lineEnd()),
						c && (i.polygonEnd(), (c = !1)),
						(f = s = null);
				},
				sphere: function () {
					i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd();
				}
			};
		function d(b, w) {
			t(b, w) && i.point(b, w);
		}
		function p(b, w) {
			o.point(b, w);
		}
		function m() {
			(l.point = p), o.lineStart();
		}
		function g() {
			(l.point = d), o.lineEnd();
		}
		function y(b, w) {
			h.push([b, w]), u.point(b, w);
		}
		function _() {
			u.lineStart(), (h = []);
		}
		function v() {
			y(h[0][0], h[0][1]), u.lineEnd();
			var b = u.clean(),
				w = a.result(),
				x,
				k = w.length,
				E,
				N,
				A;
			if ((h.pop(), s.push(h), (h = null), !!k)) {
				if (b & 1) {
					if (((N = w[0]), (E = N.length - 1) > 0)) {
						for (c || (i.polygonStart(), (c = !0)), i.lineStart(), x = 0; x < E; ++x)
							i.point((A = N[x])[0], A[1]);
						i.lineEnd();
					}
					return;
				}
				k > 1 && b & 2 && w.push(w.pop().concat(w.shift())), f.push(w.filter(Vw));
			}
		}
		return l;
	};
}
function Vw(t) {
	return t.length > 1;
}
function jw(t, n) {
	return (
		((t = t.x)[0] < 0 ? t[1] - vt - Q : vt - t[1]) - ((n = n.x)[0] < 0 ? n[1] - vt - Q : vt - n[1])
	);
}
const Wu = K0(
	function () {
		return !0;
	},
	Zw,
	Kw,
	[-rt, -vt]
);
function Zw(t) {
	var n = NaN,
		e = NaN,
		r = NaN,
		i;
	return {
		lineStart: function () {
			t.lineStart(), (i = 1);
		},
		point: function (o, a) {
			var u = o > 0 ? rt : -rt,
				c = it(o - n);
			it(c - rt) < Q
				? (t.point(n, (e = (e + a) / 2 > 0 ? vt : -vt)),
					t.point(r, e),
					t.lineEnd(),
					t.lineStart(),
					t.point(u, e),
					t.point(o, e),
					(i = 0))
				: r !== u &&
					c >= rt &&
					(it(n - r) < Q && (n -= r * Q),
					it(o - u) < Q && (o -= u * Q),
					(e = Qw(n, e, o, a)),
					t.point(r, e),
					t.lineEnd(),
					t.lineStart(),
					t.point(u, e),
					(i = 0)),
				t.point((n = o), (e = a)),
				(r = u);
		},
		lineEnd: function () {
			t.lineEnd(), (n = e = NaN);
		},
		clean: function () {
			return 2 - i;
		}
	};
}
function Qw(t, n, e, r) {
	var i,
		o,
		a = Y(t - e);
	return it(a) > Q
		? cr((Y(n) * (o = G(r)) * Y(e) - Y(r) * (i = G(n)) * Y(t)) / (i * o * a))
		: (n + r) / 2;
}
function Kw(t, n, e, r) {
	var i;
	if (t == null)
		(i = e * vt),
			r.point(-rt, i),
			r.point(0, i),
			r.point(rt, i),
			r.point(rt, 0),
			r.point(rt, -i),
			r.point(0, -i),
			r.point(-rt, -i),
			r.point(-rt, 0),
			r.point(-rt, i);
	else if (it(t[0] - n[0]) > Q) {
		var o = t[0] < n[0] ? rt : -rt;
		(i = (e * o) / 2), r.point(-o, i), r.point(0, i), r.point(o, i);
	} else r.point(n[0], n[1]);
}
function J0(t) {
	var n = G(t),
		e = 2 * K,
		r = n > 0,
		i = it(n) > Q;
	function o(f, h, l, d) {
		V0(d, t, e, l, f, h);
	}
	function a(f, h) {
		return G(f) * G(h) > n;
	}
	function u(f) {
		var h, l, d, p, m;
		return {
			lineStart: function () {
				(p = d = !1), (m = 1);
			},
			point: function (g, y) {
				var _ = [g, y],
					v,
					b = a(g, y),
					w = r ? (b ? 0 : s(g, y)) : b ? s(g + (g < 0 ? rt : -rt), y) : 0;
				if (
					(!h && (p = d = b) && f.lineStart(),
					b !== d && ((v = c(h, _)), (!v || Xi(h, v) || Xi(_, v)) && (_[2] = 1)),
					b !== d)
				)
					(m = 0),
						b
							? (f.lineStart(), (v = c(_, h)), f.point(v[0], v[1]))
							: ((v = c(h, _)), f.point(v[0], v[1], 2), f.lineEnd()),
						(h = v);
				else if (i && h && r ^ b) {
					var x;
					!(w & l) &&
						(x = c(_, h, !0)) &&
						((m = 0),
						r
							? (f.lineStart(), f.point(x[0][0], x[0][1]), f.point(x[1][0], x[1][1]), f.lineEnd())
							: (f.point(x[1][0], x[1][1]),
								f.lineEnd(),
								f.lineStart(),
								f.point(x[0][0], x[0][1], 3)));
				}
				b && (!h || !Xi(h, _)) && f.point(_[0], _[1]), (h = _), (d = b), (l = w);
			},
			lineEnd: function () {
				d && f.lineEnd(), (h = null);
			},
			clean: function () {
				return m | ((p && d) << 1);
			}
		};
	}
	function c(f, h, l) {
		var d = he(f),
			p = he(h),
			m = [1, 0, 0],
			g = Je(d, p),
			y = ki(g, g),
			_ = g[0],
			v = y - _ * _;
		if (!v) return !l && f;
		var b = (n * y) / v,
			w = (-n * _) / v,
			x = Je(m, g),
			k = Ai(m, b),
			E = Ai(g, w);
		Ka(k, E);
		var N = x,
			A = ki(k, N),
			$ = ki(N, N),
			P = A * A - $ * (ki(k, k) - 1);
		if (!(P < 0)) {
			var C = Tt(P),
				M = Ai(N, (-A - C) / $);
			if ((Ka(M, k), (M = mo(M)), !l)) return M;
			var S = f[0],
				T = h[0],
				R = f[1],
				O = h[1],
				z;
			T < S && ((z = S), (S = T), (T = z));
			var L = T - S,
				q = it(L - rt) < Q,
				W = q || L < Q;
			if (
				(!q && O < R && ((z = R), (R = O), (O = z)),
				W
					? q
						? (R + O > 0) ^ (M[1] < (it(M[0] - S) < Q ? R : O))
						: R <= M[1] && M[1] <= O
					: (L > rt) ^ (S <= M[0] && M[0] <= T))
			) {
				var I = Ai(N, (-A + C) / $);
				return Ka(I, k), [M, mo(I)];
			}
		}
	}
	function s(f, h) {
		var l = r ? t : rt - t,
			d = 0;
		return f < -l ? (d |= 1) : f > l && (d |= 2), h < -l ? (d |= 4) : h > l && (d |= 8), d;
	}
	return K0(a, u, o, r ? [0, -t] : [-rt, t - rt]);
}
function Jw(t, n, e, r, i, o) {
	var a = t[0],
		u = t[1],
		c = n[0],
		s = n[1],
		f = 0,
		h = 1,
		l = c - a,
		d = s - u,
		p;
	if (((p = e - a), !(!l && p > 0))) {
		if (((p /= l), l < 0)) {
			if (p < f) return;
			p < h && (h = p);
		} else if (l > 0) {
			if (p > h) return;
			p > f && (f = p);
		}
		if (((p = i - a), !(!l && p < 0))) {
			if (((p /= l), l < 0)) {
				if (p > h) return;
				p > f && (f = p);
			} else if (l > 0) {
				if (p < f) return;
				p < h && (h = p);
			}
			if (((p = r - u), !(!d && p > 0))) {
				if (((p /= d), d < 0)) {
					if (p < f) return;
					p < h && (h = p);
				} else if (d > 0) {
					if (p > h) return;
					p > f && (f = p);
				}
				if (((p = o - u), !(!d && p < 0))) {
					if (((p /= d), d < 0)) {
						if (p > h) return;
						p > f && (f = p);
					} else if (d > 0) {
						if (p < f) return;
						p < h && (h = p);
					}
					return (
						f > 0 && ((t[0] = a + f * l), (t[1] = u + f * d)),
						h < 1 && ((n[0] = a + h * l), (n[1] = u + h * d)),
						!0
					);
				}
			}
		}
	}
}
var $r = 1e9,
	Ni = -$r;
function ua(t, n, e, r) {
	function i(s, f) {
		return t <= s && s <= e && n <= f && f <= r;
	}
	function o(s, f, h, l) {
		var d = 0,
			p = 0;
		if (s == null || (d = a(s, h)) !== (p = a(f, h)) || (c(s, f) < 0) ^ (h > 0))
			do l.point(d === 0 || d === 3 ? t : e, d > 1 ? r : n);
			while ((d = (d + h + 4) % 4) !== p);
		else l.point(f[0], f[1]);
	}
	function a(s, f) {
		return it(s[0] - t) < Q
			? f > 0
				? 0
				: 3
			: it(s[0] - e) < Q
				? f > 0
					? 2
					: 1
				: it(s[1] - n) < Q
					? f > 0
						? 1
						: 0
					: f > 0
						? 3
						: 2;
	}
	function u(s, f) {
		return c(s.x, f.x);
	}
	function c(s, f) {
		var h = a(s, 1),
			l = a(f, 1);
		return h !== l
			? h - l
			: h === 0
				? f[1] - s[1]
				: h === 1
					? s[0] - f[0]
					: h === 2
						? s[1] - f[1]
						: f[0] - s[0];
	}
	return function (s) {
		var f = s,
			h = j0(),
			l,
			d,
			p,
			m,
			g,
			y,
			_,
			v,
			b,
			w,
			x,
			k = { point: E, lineStart: P, lineEnd: C, polygonStart: A, polygonEnd: $ };
		function E(S, T) {
			i(S, T) && f.point(S, T);
		}
		function N() {
			for (var S = 0, T = 0, R = d.length; T < R; ++T)
				for (var O = d[T], z = 1, L = O.length, q = O[0], W, I, X = q[0], U = q[1]; z < L; ++z)
					(W = X),
						(I = U),
						(q = O[z]),
						(X = q[0]),
						(U = q[1]),
						I <= r
							? U > r && (X - W) * (r - I) > (U - I) * (t - W) && ++S
							: U <= r && (X - W) * (r - I) < (U - I) * (t - W) && --S;
			return S;
		}
		function A() {
			(f = h), (l = []), (d = []), (x = !0);
		}
		function $() {
			var S = N(),
				T = x && S,
				R = (l = ys(l)).length;
			(T || R) &&
				(s.polygonStart(),
				T && (s.lineStart(), o(null, null, 1, s), s.lineEnd()),
				R && Z0(l, u, S, o, s),
				s.polygonEnd()),
				(f = s),
				(l = d = p = null);
		}
		function P() {
			(k.point = M), d && d.push((p = [])), (w = !0), (b = !1), (_ = v = NaN);
		}
		function C() {
			l && (M(m, g), y && b && h.rejoin(), l.push(h.result())), (k.point = E), b && f.lineEnd();
		}
		function M(S, T) {
			var R = i(S, T);
			if ((d && p.push([S, T]), w))
				(m = S), (g = T), (y = R), (w = !1), R && (f.lineStart(), f.point(S, T));
			else if (R && b) f.point(S, T);
			else {
				var O = [(_ = Math.max(Ni, Math.min($r, _))), (v = Math.max(Ni, Math.min($r, v)))],
					z = [(S = Math.max(Ni, Math.min($r, S))), (T = Math.max(Ni, Math.min($r, T)))];
				Jw(O, z, t, n, e, r)
					? (b || (f.lineStart(), f.point(O[0], O[1])),
						f.point(z[0], z[1]),
						R || f.lineEnd(),
						(x = !1))
					: R && (f.lineStart(), f.point(S, T), (x = !1));
			}
			(_ = S), (v = T), (b = R);
		}
		return k;
	};
}
function t3() {
	var t = 0,
		n = 0,
		e = 960,
		r = 500,
		i,
		o,
		a;
	return (a = {
		stream: function (u) {
			return i && o === u ? i : (i = ua(t, n, e, r)((o = u)));
		},
		extent: function (u) {
			return arguments.length
				? ((t = +u[0][0]), (n = +u[0][1]), (e = +u[1][0]), (r = +u[1][1]), (i = o = null), a)
				: [
						[t, n],
						[e, r]
					];
		}
	});
}
var Vu,
	ju,
	Gi,
	Wi,
	tr = { sphere: mt, point: mt, lineStart: n3, lineEnd: mt, polygonStart: mt, polygonEnd: mt };
function n3() {
	(tr.point = r3), (tr.lineEnd = e3);
}
function e3() {
	tr.point = tr.lineEnd = mt;
}
function r3(t, n) {
	(t *= K), (n *= K), (ju = t), (Gi = Y(n)), (Wi = G(n)), (tr.point = i3);
}
function i3(t, n) {
	(t *= K), (n *= K);
	var e = Y(n),
		r = G(n),
		i = it(t - ju),
		o = G(i),
		a = Y(i),
		u = r * a,
		c = Wi * e - Gi * r * o,
		s = Gi * e + Wi * r * o;
	Vu.add(Ut(Tt(u * u + c * c), s)), (ju = t), (Gi = e), (Wi = r);
}
function td(t) {
	return (Vu = new xt()), un(t, tr), +Vu;
}
var Zu = [null, null],
	o3 = { type: 'LineString', coordinates: Zu };
function To(t, n) {
	return (Zu[0] = t), (Zu[1] = n), td(o3);
}
var qf = {
		Feature: function (t, n) {
			return So(t.geometry, n);
		},
		FeatureCollection: function (t, n) {
			for (var e = t.features, r = -1, i = e.length; ++r < i; ) if (So(e[r].geometry, n)) return !0;
			return !1;
		}
	},
	Yf = {
		Sphere: function () {
			return !0;
		},
		Point: function (t, n) {
			return Hf(t.coordinates, n);
		},
		MultiPoint: function (t, n) {
			for (var e = t.coordinates, r = -1, i = e.length; ++r < i; ) if (Hf(e[r], n)) return !0;
			return !1;
		},
		LineString: function (t, n) {
			return Xf(t.coordinates, n);
		},
		MultiLineString: function (t, n) {
			for (var e = t.coordinates, r = -1, i = e.length; ++r < i; ) if (Xf(e[r], n)) return !0;
			return !1;
		},
		Polygon: function (t, n) {
			return Gf(t.coordinates, n);
		},
		MultiPolygon: function (t, n) {
			for (var e = t.coordinates, r = -1, i = e.length; ++r < i; ) if (Gf(e[r], n)) return !0;
			return !1;
		},
		GeometryCollection: function (t, n) {
			for (var e = t.geometries, r = -1, i = e.length; ++r < i; ) if (So(e[r], n)) return !0;
			return !1;
		}
	};
function So(t, n) {
	return t && Yf.hasOwnProperty(t.type) ? Yf[t.type](t, n) : !1;
}
function Hf(t, n) {
	return To(t, n) === 0;
}
function Xf(t, n) {
	for (var e, r, i, o = 0, a = t.length; o < a; o++) {
		if (
			((r = To(t[o], n)),
			r === 0 ||
				(o > 0 &&
					((i = To(t[o], t[o - 1])),
					i > 0 && e <= i && r <= i && (e + r - i) * (1 - Math.pow((e - r) / i, 2)) < jr * i)))
		)
			return !0;
		e = r;
	}
	return !1;
}
function Gf(t, n) {
	return !!Q0(t.map(a3), nd(n));
}
function a3(t) {
	return (t = t.map(nd)), t.pop(), t;
}
function nd(t) {
	return [t[0] * K, t[1] * K];
}
function u3(t, n) {
	return (t && qf.hasOwnProperty(t.type) ? qf[t.type] : So)(t, n);
}
function Wf(t, n, e) {
	var r = Fn(t, n - Q, e).concat(n);
	return function (i) {
		return r.map(function (o) {
			return [i, o];
		});
	};
}
function Vf(t, n, e) {
	var r = Fn(t, n - Q, e).concat(n);
	return function (i) {
		return r.map(function (o) {
			return [o, i];
		});
	};
}
function ed() {
	var t,
		n,
		e,
		r,
		i,
		o,
		a,
		u,
		c = 10,
		s = c,
		f = 90,
		h = 360,
		l,
		d,
		p,
		m,
		g = 2.5;
	function y() {
		return { type: 'MultiLineString', coordinates: _() };
	}
	function _() {
		return Fn(Si(r / f) * f, e, f)
			.map(p)
			.concat(Fn(Si(u / h) * h, a, h).map(m))
			.concat(
				Fn(Si(n / c) * c, t, c)
					.filter(function (v) {
						return it(v % f) > Q;
					})
					.map(l)
			)
			.concat(
				Fn(Si(o / s) * s, i, s)
					.filter(function (v) {
						return it(v % h) > Q;
					})
					.map(d)
			);
	}
	return (
		(y.lines = function () {
			return _().map(function (v) {
				return { type: 'LineString', coordinates: v };
			});
		}),
		(y.outline = function () {
			return {
				type: 'Polygon',
				coordinates: [p(r).concat(m(a).slice(1), p(e).reverse().slice(1), m(u).reverse().slice(1))]
			};
		}),
		(y.extent = function (v) {
			return arguments.length ? y.extentMajor(v).extentMinor(v) : y.extentMinor();
		}),
		(y.extentMajor = function (v) {
			return arguments.length
				? ((r = +v[0][0]),
					(e = +v[1][0]),
					(u = +v[0][1]),
					(a = +v[1][1]),
					r > e && ((v = r), (r = e), (e = v)),
					u > a && ((v = u), (u = a), (a = v)),
					y.precision(g))
				: [
						[r, u],
						[e, a]
					];
		}),
		(y.extentMinor = function (v) {
			return arguments.length
				? ((n = +v[0][0]),
					(t = +v[1][0]),
					(o = +v[0][1]),
					(i = +v[1][1]),
					n > t && ((v = n), (n = t), (t = v)),
					o > i && ((v = o), (o = i), (i = v)),
					y.precision(g))
				: [
						[n, o],
						[t, i]
					];
		}),
		(y.step = function (v) {
			return arguments.length ? y.stepMajor(v).stepMinor(v) : y.stepMinor();
		}),
		(y.stepMajor = function (v) {
			return arguments.length ? ((f = +v[0]), (h = +v[1]), y) : [f, h];
		}),
		(y.stepMinor = function (v) {
			return arguments.length ? ((c = +v[0]), (s = +v[1]), y) : [c, s];
		}),
		(y.precision = function (v) {
			return arguments.length
				? ((g = +v),
					(l = Wf(o, i, 90)),
					(d = Vf(n, t, g)),
					(p = Wf(u, a, 90)),
					(m = Vf(r, e, g)),
					y)
				: g;
		}),
		y
			.extentMajor([
				[-180, -90 + Q],
				[180, 90 - Q]
			])
			.extentMinor([
				[-180, -80 - Q],
				[180, 80 + Q]
			])
	);
}
function s3() {
	return ed()();
}
function c3(t, n) {
	var e = t[0] * K,
		r = t[1] * K,
		i = n[0] * K,
		o = n[1] * K,
		a = G(r),
		u = Y(r),
		c = G(o),
		s = Y(o),
		f = a * G(e),
		h = a * Y(e),
		l = c * G(i),
		d = c * Y(i),
		p = 2 * qt(Tt(Af(o - r) + a * c * Af(i - e))),
		m = Y(p),
		g = p
			? function (y) {
					var _ = Y((y *= p)) / m,
						v = Y(p - y) / m,
						b = v * f + _ * l,
						w = v * h + _ * d,
						x = v * u + _ * s;
					return [Ut(w, b) * ft, Ut(x, Tt(b * b + w * w)) * ft];
				}
			: function () {
					return [e * ft, r * ft];
				};
	return (g.distance = p), g;
}
const Zr = (t) => t;
var tu = new xt(),
	Qu = new xt(),
	rd,
	id,
	Ku,
	Ju,
	An = {
		point: mt,
		lineStart: mt,
		lineEnd: mt,
		polygonStart: function () {
			(An.lineStart = f3), (An.lineEnd = h3);
		},
		polygonEnd: function () {
			(An.lineStart = An.lineEnd = An.point = mt), tu.add(it(Qu)), (Qu = new xt());
		},
		result: function () {
			var t = tu / 2;
			return (tu = new xt()), t;
		}
	};
function f3() {
	An.point = l3;
}
function l3(t, n) {
	(An.point = od), (rd = Ku = t), (id = Ju = n);
}
function od(t, n) {
	Qu.add(Ju * t - Ku * n), (Ku = t), (Ju = n);
}
function h3() {
	od(rd, id);
}
var nr = 1 / 0,
	ko = nr,
	Qr = -nr,
	Ao = Qr,
	Eo = {
		point: d3,
		lineStart: mt,
		lineEnd: mt,
		polygonStart: mt,
		polygonEnd: mt,
		result: function () {
			var t = [
				[nr, ko],
				[Qr, Ao]
			];
			return (Qr = Ao = -(ko = nr = 1 / 0)), t;
		}
	};
function d3(t, n) {
	t < nr && (nr = t), t > Qr && (Qr = t), n < ko && (ko = n), n > Ao && (Ao = n);
}
var ts = 0,
	ns = 0,
	Tr = 0,
	No = 0,
	Co = 0,
	Le = 0,
	es = 0,
	rs = 0,
	Sr = 0,
	ad,
	ud,
	hn,
	dn,
	nn = {
		point: de,
		lineStart: jf,
		lineEnd: Zf,
		polygonStart: function () {
			(nn.lineStart = m3), (nn.lineEnd = y3);
		},
		polygonEnd: function () {
			(nn.point = de), (nn.lineStart = jf), (nn.lineEnd = Zf);
		},
		result: function () {
			var t = Sr
				? [es / Sr, rs / Sr]
				: Le
					? [No / Le, Co / Le]
					: Tr
						? [ts / Tr, ns / Tr]
						: [NaN, NaN];
			return (ts = ns = Tr = No = Co = Le = es = rs = Sr = 0), t;
		}
	};
function de(t, n) {
	(ts += t), (ns += n), ++Tr;
}
function jf() {
	nn.point = g3;
}
function g3(t, n) {
	(nn.point = p3), de((hn = t), (dn = n));
}
function p3(t, n) {
	var e = t - hn,
		r = n - dn,
		i = Tt(e * e + r * r);
	(No += (i * (hn + t)) / 2), (Co += (i * (dn + n)) / 2), (Le += i), de((hn = t), (dn = n));
}
function Zf() {
	nn.point = de;
}
function m3() {
	nn.point = b3;
}
function y3() {
	sd(ad, ud);
}
function b3(t, n) {
	(nn.point = sd), de((ad = hn = t), (ud = dn = n));
}
function sd(t, n) {
	var e = t - hn,
		r = n - dn,
		i = Tt(e * e + r * r);
	(No += (i * (hn + t)) / 2),
		(Co += (i * (dn + n)) / 2),
		(Le += i),
		(i = dn * t - hn * n),
		(es += i * (hn + t)),
		(rs += i * (dn + n)),
		(Sr += i * 3),
		de((hn = t), (dn = n));
}
function cd(t) {
	this._context = t;
}
cd.prototype = {
	_radius: 4.5,
	pointRadius: function (t) {
		return (this._radius = t), this;
	},
	polygonStart: function () {
		this._line = 0;
	},
	polygonEnd: function () {
		this._line = NaN;
	},
	lineStart: function () {
		this._point = 0;
	},
	lineEnd: function () {
		this._line === 0 && this._context.closePath(), (this._point = NaN);
	},
	point: function (t, n) {
		switch (this._point) {
			case 0: {
				this._context.moveTo(t, n), (this._point = 1);
				break;
			}
			case 1: {
				this._context.lineTo(t, n);
				break;
			}
			default: {
				this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, Bt);
				break;
			}
		}
	},
	result: mt
};
var is = new xt(),
	nu,
	fd,
	ld,
	kr,
	Ar,
	Kr = {
		point: mt,
		lineStart: function () {
			Kr.point = v3;
		},
		lineEnd: function () {
			nu && hd(fd, ld), (Kr.point = mt);
		},
		polygonStart: function () {
			nu = !0;
		},
		polygonEnd: function () {
			nu = null;
		},
		result: function () {
			var t = +is;
			return (is = new xt()), t;
		}
	};
function v3(t, n) {
	(Kr.point = hd), (fd = kr = t), (ld = Ar = n);
}
function hd(t, n) {
	(kr -= t), (Ar -= n), is.add(Tt(kr * kr + Ar * Ar)), (kr = t), (Ar = n);
}
let Qf, Ro, Kf, Jf;
class tl {
	constructor(n) {
		(this._append = n == null ? dd : _3(n)), (this._radius = 4.5), (this._ = '');
	}
	pointRadius(n) {
		return (this._radius = +n), this;
	}
	polygonStart() {
		this._line = 0;
	}
	polygonEnd() {
		this._line = NaN;
	}
	lineStart() {
		this._point = 0;
	}
	lineEnd() {
		this._line === 0 && (this._ += 'Z'), (this._point = NaN);
	}
	point(n, e) {
		switch (this._point) {
			case 0: {
				this._append`M${n},${e}`, (this._point = 1);
				break;
			}
			case 1: {
				this._append`L${n},${e}`;
				break;
			}
			default: {
				if ((this._append`M${n},${e}`, this._radius !== Kf || this._append !== Ro)) {
					const r = this._radius,
						i = this._;
					(this._ = ''),
						this._append`m0,${r}a${r},${r} 0 1,1 0,${-2 * r}a${r},${r} 0 1,1 0,${2 * r}z`,
						(Kf = r),
						(Ro = this._append),
						(Jf = this._),
						(this._ = i);
				}
				this._ += Jf;
				break;
			}
		}
	}
	result() {
		const n = this._;
		return (this._ = ''), n.length ? n : null;
	}
}
function dd(t) {
	let n = 1;
	this._ += t[0];
	for (const e = t.length; n < e; ++n) this._ += arguments[n] + t[n];
}
function _3(t) {
	const n = Math.floor(t);
	if (!(n >= 0)) throw new RangeError(`invalid digits: ${t}`);
	if (n > 15) return dd;
	if (n !== Qf) {
		const e = 10 ** n;
		(Qf = n),
			(Ro = function (i) {
				let o = 1;
				this._ += i[0];
				for (const a = i.length; o < a; ++o) this._ += Math.round(arguments[o] * e) / e + i[o];
			});
	}
	return Ro;
}
function w3(t, n) {
	let e = 3,
		r = 4.5,
		i,
		o;
	function a(u) {
		return (
			u && (typeof r == 'function' && o.pointRadius(+r.apply(this, arguments)), un(u, i(o))),
			o.result()
		);
	}
	return (
		(a.area = function (u) {
			return un(u, i(An)), An.result();
		}),
		(a.measure = function (u) {
			return un(u, i(Kr)), Kr.result();
		}),
		(a.bounds = function (u) {
			return un(u, i(Eo)), Eo.result();
		}),
		(a.centroid = function (u) {
			return un(u, i(nn)), nn.result();
		}),
		(a.projection = function (u) {
			return arguments.length ? ((i = u == null ? ((t = null), Zr) : (t = u).stream), a) : t;
		}),
		(a.context = function (u) {
			return arguments.length
				? ((o = u == null ? ((n = null), new tl(e)) : new cd((n = u))),
					typeof r != 'function' && o.pointRadius(r),
					a)
				: n;
		}),
		(a.pointRadius = function (u) {
			return arguments.length ? ((r = typeof u == 'function' ? u : (o.pointRadius(+u), +u)), a) : r;
		}),
		(a.digits = function (u) {
			if (!arguments.length) return e;
			if (u == null) e = null;
			else {
				const c = Math.floor(u);
				if (!(c >= 0)) throw new RangeError(`invalid digits: ${u}`);
				e = c;
			}
			return n === null && (o = new tl(e)), a;
		}),
		a.projection(t).digits(e).context(n)
	);
}
function x3(t) {
	return { stream: si(t) };
}
function si(t) {
	return function (n) {
		var e = new os();
		for (var r in t) e[r] = t[r];
		return (e.stream = n), e;
	};
}
function os() {}
os.prototype = {
	constructor: os,
	point: function (t, n) {
		this.stream.point(t, n);
	},
	sphere: function () {
		this.stream.sphere();
	},
	lineStart: function () {
		this.stream.lineStart();
	},
	lineEnd: function () {
		this.stream.lineEnd();
	},
	polygonStart: function () {
		this.stream.polygonStart();
	},
	polygonEnd: function () {
		this.stream.polygonEnd();
	}
};
function Hs(t, n, e) {
	var r = t.clipExtent && t.clipExtent();
	return (
		t.scale(150).translate([0, 0]),
		r != null && t.clipExtent(null),
		un(e, t.stream(Eo)),
		n(Eo.result()),
		r != null && t.clipExtent(r),
		t
	);
}
function sa(t, n, e) {
	return Hs(
		t,
		function (r) {
			var i = n[1][0] - n[0][0],
				o = n[1][1] - n[0][1],
				a = Math.min(i / (r[1][0] - r[0][0]), o / (r[1][1] - r[0][1])),
				u = +n[0][0] + (i - a * (r[1][0] + r[0][0])) / 2,
				c = +n[0][1] + (o - a * (r[1][1] + r[0][1])) / 2;
			t.scale(150 * a).translate([u, c]);
		},
		e
	);
}
function Xs(t, n, e) {
	return sa(t, [[0, 0], n], e);
}
function Gs(t, n, e) {
	return Hs(
		t,
		function (r) {
			var i = +n,
				o = i / (r[1][0] - r[0][0]),
				a = (i - o * (r[1][0] + r[0][0])) / 2,
				u = -o * r[0][1];
			t.scale(150 * o).translate([a, u]);
		},
		e
	);
}
function Ws(t, n, e) {
	return Hs(
		t,
		function (r) {
			var i = +n,
				o = i / (r[1][1] - r[0][1]),
				a = -o * r[0][0],
				u = (i - o * (r[1][1] + r[0][1])) / 2;
			t.scale(150 * o).translate([a, u]);
		},
		e
	);
}
var nl = 16,
	M3 = G(30 * K);
function el(t, n) {
	return +n ? T3(t, n) : $3(t);
}
function $3(t) {
	return si({
		point: function (n, e) {
			(n = t(n, e)), this.stream.point(n[0], n[1]);
		}
	});
}
function T3(t, n) {
	function e(r, i, o, a, u, c, s, f, h, l, d, p, m, g) {
		var y = s - r,
			_ = f - i,
			v = y * y + _ * _;
		if (v > 4 * n && m--) {
			var b = a + l,
				w = u + d,
				x = c + p,
				k = Tt(b * b + w * w + x * x),
				E = qt((x /= k)),
				N = it(it(x) - 1) < Q || it(o - h) < Q ? (o + h) / 2 : Ut(w, b),
				A = t(N, E),
				$ = A[0],
				P = A[1],
				C = $ - r,
				M = P - i,
				S = _ * C - y * M;
			((S * S) / v > n || it((y * C + _ * M) / v - 0.5) > 0.3 || a * l + u * d + c * p < M3) &&
				(e(r, i, o, a, u, c, $, P, N, (b /= k), (w /= k), x, m, g),
				g.point($, P),
				e($, P, N, b, w, x, s, f, h, l, d, p, m, g));
		}
	}
	return function (r) {
		var i,
			o,
			a,
			u,
			c,
			s,
			f,
			h,
			l,
			d,
			p,
			m,
			g = {
				point: y,
				lineStart: _,
				lineEnd: b,
				polygonStart: function () {
					r.polygonStart(), (g.lineStart = w);
				},
				polygonEnd: function () {
					r.polygonEnd(), (g.lineStart = _);
				}
			};
		function y(E, N) {
			(E = t(E, N)), r.point(E[0], E[1]);
		}
		function _() {
			(h = NaN), (g.point = v), r.lineStart();
		}
		function v(E, N) {
			var A = he([E, N]),
				$ = t(E, N);
			e(
				h,
				l,
				f,
				d,
				p,
				m,
				(h = $[0]),
				(l = $[1]),
				(f = E),
				(d = A[0]),
				(p = A[1]),
				(m = A[2]),
				nl,
				r
			),
				r.point(h, l);
		}
		function b() {
			(g.point = y), r.lineEnd();
		}
		function w() {
			_(), (g.point = x), (g.lineEnd = k);
		}
		function x(E, N) {
			v((i = E), N), (o = h), (a = l), (u = d), (c = p), (s = m), (g.point = v);
		}
		function k() {
			e(h, l, f, d, p, m, o, a, i, u, c, s, nl, r), (g.lineEnd = b), b();
		}
		return g;
	};
}
var S3 = si({
	point: function (t, n) {
		this.stream.point(t * K, n * K);
	}
});
function k3(t) {
	return si({
		point: function (n, e) {
			var r = t(n, e);
			return this.stream.point(r[0], r[1]);
		}
	});
}
function A3(t, n, e, r, i) {
	function o(a, u) {
		return (a *= r), (u *= i), [n + t * a, e - t * u];
	}
	return (
		(o.invert = function (a, u) {
			return [((a - n) / t) * r, ((e - u) / t) * i];
		}),
		o
	);
}
function rl(t, n, e, r, i, o) {
	if (!o) return A3(t, n, e, r, i);
	var a = G(o),
		u = Y(o),
		c = a * t,
		s = u * t,
		f = a / t,
		h = u / t,
		l = (u * e - a * n) / t,
		d = (u * n + a * e) / t;
	function p(m, g) {
		return (m *= r), (g *= i), [c * m - s * g + n, e - s * m - c * g];
	}
	return (
		(p.invert = function (m, g) {
			return [r * (f * m - h * g + l), i * (d - h * m - f * g)];
		}),
		p
	);
}
function xn(t) {
	return Vs(function () {
		return t;
	})();
}
function Vs(t) {
	var n,
		e = 150,
		r = 480,
		i = 250,
		o = 0,
		a = 0,
		u = 0,
		c = 0,
		s = 0,
		f,
		h = 0,
		l = 1,
		d = 1,
		p = null,
		m = Wu,
		g = null,
		y,
		_,
		v,
		b = Zr,
		w = 0.5,
		x,
		k,
		E,
		N,
		A;
	function $(S) {
		return E(S[0] * K, S[1] * K);
	}
	function P(S) {
		return (S = E.invert(S[0], S[1])), S && [S[0] * ft, S[1] * ft];
	}
	($.stream = function (S) {
		return N && A === S ? N : (N = S3(k3(f)(m(x(b((A = S)))))));
	}),
		($.preclip = function (S) {
			return arguments.length ? ((m = S), (p = void 0), M()) : m;
		}),
		($.postclip = function (S) {
			return arguments.length ? ((b = S), (g = y = _ = v = null), M()) : b;
		}),
		($.clipAngle = function (S) {
			return arguments.length ? ((m = +S ? J0((p = S * K)) : ((p = null), Wu)), M()) : p * ft;
		}),
		($.clipExtent = function (S) {
			return arguments.length
				? ((b =
						S == null
							? ((g = y = _ = v = null), Zr)
							: ua((g = +S[0][0]), (y = +S[0][1]), (_ = +S[1][0]), (v = +S[1][1]))),
					M())
				: g == null
					? null
					: [
							[g, y],
							[_, v]
						];
		}),
		($.scale = function (S) {
			return arguments.length ? ((e = +S), C()) : e;
		}),
		($.translate = function (S) {
			return arguments.length ? ((r = +S[0]), (i = +S[1]), C()) : [r, i];
		}),
		($.center = function (S) {
			return arguments.length
				? ((o = (S[0] % 360) * K), (a = (S[1] % 360) * K), C())
				: [o * ft, a * ft];
		}),
		($.rotate = function (S) {
			return arguments.length
				? ((u = (S[0] % 360) * K),
					(c = (S[1] % 360) * K),
					(s = S.length > 2 ? (S[2] % 360) * K : 0),
					C())
				: [u * ft, c * ft, s * ft];
		}),
		($.angle = function (S) {
			return arguments.length ? ((h = (S % 360) * K), C()) : h * ft;
		}),
		($.reflectX = function (S) {
			return arguments.length ? ((l = S ? -1 : 1), C()) : l < 0;
		}),
		($.reflectY = function (S) {
			return arguments.length ? ((d = S ? -1 : 1), C()) : d < 0;
		}),
		($.precision = function (S) {
			return arguments.length ? ((x = el(k, (w = S * S))), M()) : Tt(w);
		}),
		($.fitExtent = function (S, T) {
			return sa($, S, T);
		}),
		($.fitSize = function (S, T) {
			return Xs($, S, T);
		}),
		($.fitWidth = function (S, T) {
			return Gs($, S, T);
		}),
		($.fitHeight = function (S, T) {
			return Ws($, S, T);
		});
	function C() {
		var S = rl(e, 0, 0, l, d, h).apply(null, n(o, a)),
			T = rl(e, r - S[0], i - S[1], l, d, h);
		return (f = Ys(u, c, s)), (k = Xu(n, T)), (E = Xu(f, k)), (x = el(k, w)), M();
	}
	function M() {
		return (N = A = null), $;
	}
	return function () {
		return (n = t.apply(this, arguments)), ($.invert = n.invert && P), C();
	};
}
function js(t) {
	var n = 0,
		e = rt / 3,
		r = Vs(t),
		i = r(n, e);
	return (
		(i.parallels = function (o) {
			return arguments.length ? r((n = o[0] * K), (e = o[1] * K)) : [n * ft, e * ft];
		}),
		i
	);
}
function E3(t) {
	var n = G(t);
	function e(r, i) {
		return [r * n, Y(i) / n];
	}
	return (
		(e.invert = function (r, i) {
			return [r / n, qt(i * n)];
		}),
		e
	);
}
function gd(t, n) {
	var e = Y(t),
		r = (e + Y(n)) / 2;
	if (it(r) < Q) return E3(t);
	var i = 1 + e * (2 * r - e),
		o = Tt(i) / r;
	function a(u, c) {
		var s = Tt(i - 2 * r * Y(c)) / r;
		return [s * Y((u *= r)), o - s * G(u)];
	}
	return (
		(a.invert = function (u, c) {
			var s = o - c,
				f = Ut(u, it(s)) * en(s);
			return (
				s * r < 0 && (f -= rt * en(u) * en(s)), [f / r, qt((i - (u * u + s * s) * r * r) / (2 * r))]
			);
		}),
		a
	);
}
function Po() {
	return js(gd).scale(155.424).center([0, 33.6442]);
}
function pd() {
	return Po()
		.parallels([29.5, 45.5])
		.scale(1070)
		.translate([480, 250])
		.rotate([96, 0])
		.center([-0.6, 38.7]);
}
function N3(t) {
	var n = t.length;
	return {
		point: function (e, r) {
			for (var i = -1; ++i < n; ) t[i].point(e, r);
		},
		sphere: function () {
			for (var e = -1; ++e < n; ) t[e].sphere();
		},
		lineStart: function () {
			for (var e = -1; ++e < n; ) t[e].lineStart();
		},
		lineEnd: function () {
			for (var e = -1; ++e < n; ) t[e].lineEnd();
		},
		polygonStart: function () {
			for (var e = -1; ++e < n; ) t[e].polygonStart();
		},
		polygonEnd: function () {
			for (var e = -1; ++e < n; ) t[e].polygonEnd();
		}
	};
}
function C3() {
	var t,
		n,
		e = pd(),
		r,
		i = Po().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
		o,
		a = Po().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
		u,
		c,
		s = {
			point: function (l, d) {
				c = [l, d];
			}
		};
	function f(l) {
		var d = l[0],
			p = l[1];
		return (c = null), r.point(d, p), c || (o.point(d, p), c) || (u.point(d, p), c);
	}
	(f.invert = function (l) {
		var d = e.scale(),
			p = e.translate(),
			m = (l[0] - p[0]) / d,
			g = (l[1] - p[1]) / d;
		return (
			g >= 0.12 && g < 0.234 && m >= -0.425 && m < -0.214
				? i
				: g >= 0.166 && g < 0.234 && m >= -0.214 && m < -0.115
					? a
					: e
		).invert(l);
	}),
		(f.stream = function (l) {
			return t && n === l ? t : (t = N3([e.stream((n = l)), i.stream(l), a.stream(l)]));
		}),
		(f.precision = function (l) {
			return arguments.length
				? (e.precision(l), i.precision(l), a.precision(l), h())
				: e.precision();
		}),
		(f.scale = function (l) {
			return arguments.length
				? (e.scale(l), i.scale(l * 0.35), a.scale(l), f.translate(e.translate()))
				: e.scale();
		}),
		(f.translate = function (l) {
			if (!arguments.length) return e.translate();
			var d = e.scale(),
				p = +l[0],
				m = +l[1];
			return (
				(r = e
					.translate(l)
					.clipExtent([
						[p - 0.455 * d, m - 0.238 * d],
						[p + 0.455 * d, m + 0.238 * d]
					])
					.stream(s)),
				(o = i
					.translate([p - 0.307 * d, m + 0.201 * d])
					.clipExtent([
						[p - 0.425 * d + Q, m + 0.12 * d + Q],
						[p - 0.214 * d - Q, m + 0.234 * d - Q]
					])
					.stream(s)),
				(u = a
					.translate([p - 0.205 * d, m + 0.212 * d])
					.clipExtent([
						[p - 0.214 * d + Q, m + 0.166 * d + Q],
						[p - 0.115 * d - Q, m + 0.234 * d - Q]
					])
					.stream(s)),
				h()
			);
		}),
		(f.fitExtent = function (l, d) {
			return sa(f, l, d);
		}),
		(f.fitSize = function (l, d) {
			return Xs(f, l, d);
		}),
		(f.fitWidth = function (l, d) {
			return Gs(f, l, d);
		}),
		(f.fitHeight = function (l, d) {
			return Ws(f, l, d);
		});
	function h() {
		return (t = n = null), f;
	}
	return f.scale(1070);
}
function md(t) {
	return function (n, e) {
		var r = G(n),
			i = G(e),
			o = t(r * i);
		return o === 1 / 0 ? [2, 0] : [o * i * Y(n), o * Y(e)];
	};
}
function ci(t) {
	return function (n, e) {
		var r = Tt(n * n + e * e),
			i = t(r),
			o = Y(i),
			a = G(i);
		return [Ut(n * o, r * a), qt(r && (e * o) / r)];
	};
}
var Zs = md(function (t) {
	return Tt(2 / (1 + t));
});
Zs.invert = ci(function (t) {
	return 2 * qt(t / 2);
});
function R3() {
	return xn(Zs)
		.scale(124.75)
		.clipAngle(180 - 0.001);
}
var Qs = md(function (t) {
	return (t = D0(t)) && t / Y(t);
});
Qs.invert = ci(function (t) {
	return t;
});
function P3() {
	return xn(Qs)
		.scale(79.4188)
		.clipAngle(180 - 0.001);
}
function fi(t, n) {
	return [t, lo(Us((vt + n) / 2))];
}
fi.invert = function (t, n) {
	return [t, 2 * cr(z0(n)) - vt];
};
function I3() {
	return yd(fi).scale(961 / Bt);
}
function yd(t) {
	var n = xn(t),
		e = n.center,
		r = n.scale,
		i = n.translate,
		o = n.clipExtent,
		a = null,
		u,
		c,
		s;
	(n.scale = function (h) {
		return arguments.length ? (r(h), f()) : r();
	}),
		(n.translate = function (h) {
			return arguments.length ? (i(h), f()) : i();
		}),
		(n.center = function (h) {
			return arguments.length ? (e(h), f()) : e();
		}),
		(n.clipExtent = function (h) {
			return arguments.length
				? (h == null
						? (a = u = c = s = null)
						: ((a = +h[0][0]), (u = +h[0][1]), (c = +h[1][0]), (s = +h[1][1])),
					f())
				: a == null
					? null
					: [
							[a, u],
							[c, s]
						];
		});
	function f() {
		var h = rt * r(),
			l = n(W0(n.rotate()).invert([0, 0]));
		return o(
			a == null
				? [
						[l[0] - h, l[1] - h],
						[l[0] + h, l[1] + h]
					]
				: t === fi
					? [
							[Math.max(l[0] - h, a), u],
							[Math.min(l[0] + h, c), s]
						]
					: [
							[a, Math.max(l[1] - h, u)],
							[c, Math.min(l[1] + h, s)]
						]
		);
	}
	return f();
}
function Ci(t) {
	return Us((vt + t) / 2);
}
function bd(t, n) {
	var e = G(t),
		r = t === n ? Y(t) : lo(e / G(n)) / lo(Ci(n) / Ci(t)),
		i = (e * Qa(Ci(t), r)) / r;
	if (!r) return fi;
	function o(a, u) {
		i > 0 ? u < -vt + Q && (u = -vt + Q) : u > vt - Q && (u = vt - Q);
		var c = i / Qa(Ci(u), r);
		return [c * Y(r * a), i - c * G(r * a)];
	}
	return (
		(o.invert = function (a, u) {
			var c = i - u,
				s = en(r) * Tt(a * a + c * c),
				f = Ut(a, it(c)) * en(c);
			return c * r < 0 && (f -= rt * en(a) * en(c)), [f / r, 2 * cr(Qa(i / s, 1 / r)) - vt];
		}),
		o
	);
}
function z3() {
	return js(bd).scale(109.5).parallels([30, 30]);
}
function Jr(t, n) {
	return [t, n];
}
Jr.invert = Jr;
function D3() {
	return xn(Jr).scale(152.63);
}
function vd(t, n) {
	var e = G(t),
		r = t === n ? Y(t) : (e - G(n)) / (n - t),
		i = e / r + t;
	if (it(r) < Q) return Jr;
	function o(a, u) {
		var c = i - u,
			s = r * a;
		return [c * Y(s), i - c * G(s)];
	}
	return (
		(o.invert = function (a, u) {
			var c = i - u,
				s = Ut(a, it(c)) * en(c);
			return c * r < 0 && (s -= rt * en(a) * en(c)), [s / r, i - en(r) * Tt(a * a + c * c)];
		}),
		o
	);
}
function O3() {
	return js(vd).scale(131.154).center([0, 13.9389]);
}
var Ir = 1.340264,
	zr = -0.081106,
	Dr = 893e-6,
	Or = 0.003796,
	Io = Tt(3) / 2,
	F3 = 12;
function Ks(t, n) {
	var e = qt(Io * Y(n)),
		r = e * e,
		i = r * r * r;
	return [
		(t * G(e)) / (Io * (Ir + 3 * zr * r + i * (7 * Dr + 9 * Or * r))),
		e * (Ir + zr * r + i * (Dr + Or * r))
	];
}
Ks.invert = function (t, n) {
	for (
		var e = n, r = e * e, i = r * r * r, o = 0, a, u, c;
		o < F3 &&
		((u = e * (Ir + zr * r + i * (Dr + Or * r)) - n),
		(c = Ir + 3 * zr * r + i * (7 * Dr + 9 * Or * r)),
		(e -= a = u / c),
		(r = e * e),
		(i = r * r * r),
		!(it(a) < jr));
		++o
	);
	return [(Io * t * (Ir + 3 * zr * r + i * (7 * Dr + 9 * Or * r))) / G(e), qt(Y(e) / Io)];
};
function L3() {
	return xn(Ks).scale(177.158);
}
function Js(t, n) {
	var e = G(n),
		r = G(t) * e;
	return [(e * Y(t)) / r, Y(n) / r];
}
Js.invert = ci(cr);
function B3() {
	return xn(Js).scale(144.049).clipAngle(60);
}
function U3() {
	var t = 1,
		n = 0,
		e = 0,
		r = 1,
		i = 1,
		o = 0,
		a,
		u,
		c = null,
		s,
		f,
		h,
		l = 1,
		d = 1,
		p = si({
			point: function (b, w) {
				var x = v([b, w]);
				this.stream.point(x[0], x[1]);
			}
		}),
		m = Zr,
		g,
		y;
	function _() {
		return (l = t * r), (d = t * i), (g = y = null), v;
	}
	function v(b) {
		var w = b[0] * l,
			x = b[1] * d;
		if (o) {
			var k = x * a - w * u;
			(w = w * a + x * u), (x = k);
		}
		return [w + n, x + e];
	}
	return (
		(v.invert = function (b) {
			var w = b[0] - n,
				x = b[1] - e;
			if (o) {
				var k = x * a + w * u;
				(w = w * a - x * u), (x = k);
			}
			return [w / l, x / d];
		}),
		(v.stream = function (b) {
			return g && y === b ? g : (g = p(m((y = b))));
		}),
		(v.postclip = function (b) {
			return arguments.length ? ((m = b), (c = s = f = h = null), _()) : m;
		}),
		(v.clipExtent = function (b) {
			return arguments.length
				? ((m =
						b == null
							? ((c = s = f = h = null), Zr)
							: ua((c = +b[0][0]), (s = +b[0][1]), (f = +b[1][0]), (h = +b[1][1]))),
					_())
				: c == null
					? null
					: [
							[c, s],
							[f, h]
						];
		}),
		(v.scale = function (b) {
			return arguments.length ? ((t = +b), _()) : t;
		}),
		(v.translate = function (b) {
			return arguments.length ? ((n = +b[0]), (e = +b[1]), _()) : [n, e];
		}),
		(v.angle = function (b) {
			return arguments.length ? ((o = (b % 360) * K), (u = Y(o)), (a = G(o)), _()) : o * ft;
		}),
		(v.reflectX = function (b) {
			return arguments.length ? ((r = b ? -1 : 1), _()) : r < 0;
		}),
		(v.reflectY = function (b) {
			return arguments.length ? ((i = b ? -1 : 1), _()) : i < 0;
		}),
		(v.fitExtent = function (b, w) {
			return sa(v, b, w);
		}),
		(v.fitSize = function (b, w) {
			return Xs(v, b, w);
		}),
		(v.fitWidth = function (b, w) {
			return Gs(v, b, w);
		}),
		(v.fitHeight = function (b, w) {
			return Ws(v, b, w);
		}),
		v
	);
}
function tc(t, n) {
	var e = n * n,
		r = e * e;
	return [
		t * (0.8707 - 0.131979 * e + r * (-0.013791 + r * (0.003971 * e - 0.001529 * r))),
		n * (1.007226 + e * (0.015085 + r * (-0.044475 + 0.028874 * e - 0.005916 * r)))
	];
}
tc.invert = function (t, n) {
	var e = n,
		r = 25,
		i;
	do {
		var o = e * e,
			a = o * o;
		e -= i =
			(e * (1.007226 + o * (0.015085 + a * (-0.044475 + 0.028874 * o - 0.005916 * a))) - n) /
			(1.007226 + o * (0.015085 * 3 + a * (-0.044475 * 7 + 0.028874 * 9 * o - 0.005916 * 11 * a)));
	} while (it(i) > Q && --r > 0);
	return [
		t /
			(0.8707 +
				(o = e * e) * (-0.131979 + o * (-0.013791 + o * o * o * (0.003971 - 0.001529 * o)))),
		e
	];
};
function q3() {
	return xn(tc).scale(175.295);
}
function nc(t, n) {
	return [G(n) * Y(t), Y(n)];
}
nc.invert = ci(qt);
function Y3() {
	return xn(nc)
		.scale(249.5)
		.clipAngle(90 + Q);
}
function ec(t, n) {
	var e = G(n),
		r = 1 + G(t) * e;
	return [(e * Y(t)) / r, Y(n) / r];
}
ec.invert = ci(function (t) {
	return 2 * cr(t);
});
function H3() {
	return xn(ec).scale(250).clipAngle(142);
}
function rc(t, n) {
	return [lo(Us((vt + n) / 2)), -t];
}
rc.invert = function (t, n) {
	return [-n, 2 * cr(z0(t)) - vt];
};
function X3() {
	var t = yd(rc),
		n = t.center,
		e = t.rotate;
	return (
		(t.center = function (r) {
			return arguments.length ? n([-r[1], r[0]]) : ((r = n()), [r[1], -r[0]]);
		}),
		(t.rotate = function (r) {
			return arguments.length
				? e([r[0], r[1], r.length > 2 ? r[2] + 90 : 90])
				: ((r = e()), [r[0], r[1], r[2] - 90]);
		}),
		e([0, 0, 90]).scale(159.155)
	);
}
function G3(t, n) {
	return t.parent === n.parent ? 1 : 2;
}
function W3(t) {
	return t.reduce(V3, 0) / t.length;
}
function V3(t, n) {
	return t + n.x;
}
function j3(t) {
	return 1 + t.reduce(Z3, 0);
}
function Z3(t, n) {
	return Math.max(t, n.y);
}
function Q3(t) {
	for (var n; (n = t.children); ) t = n[0];
	return t;
}
function K3(t) {
	for (var n; (n = t.children); ) t = n[n.length - 1];
	return t;
}
function J3() {
	var t = G3,
		n = 1,
		e = 1,
		r = !1;
	function i(o) {
		var a,
			u = 0;
		o.eachAfter(function (l) {
			var d = l.children;
			d ? ((l.x = W3(d)), (l.y = j3(d))) : ((l.x = a ? (u += t(l, a)) : 0), (l.y = 0), (a = l));
		});
		var c = Q3(o),
			s = K3(o),
			f = c.x - t(c, s) / 2,
			h = s.x + t(s, c) / 2;
		return o.eachAfter(
			r
				? function (l) {
						(l.x = (l.x - o.x) * n), (l.y = (o.y - l.y) * e);
					}
				: function (l) {
						(l.x = ((l.x - f) / (h - f)) * n), (l.y = (1 - (o.y ? l.y / o.y : 1)) * e);
					}
		);
	}
	return (
		(i.separation = function (o) {
			return arguments.length ? ((t = o), i) : t;
		}),
		(i.size = function (o) {
			return arguments.length ? ((r = !1), (n = +o[0]), (e = +o[1]), i) : r ? null : [n, e];
		}),
		(i.nodeSize = function (o) {
			return arguments.length ? ((r = !0), (n = +o[0]), (e = +o[1]), i) : r ? [n, e] : null;
		}),
		i
	);
}
function t6(t) {
	var n = 0,
		e = t.children,
		r = e && e.length;
	if (!r) n = 1;
	else for (; --r >= 0; ) n += e[r].value;
	t.value = n;
}
function n6() {
	return this.eachAfter(t6);
}
function e6(t, n) {
	let e = -1;
	for (const r of this) t.call(n, r, ++e, this);
	return this;
}
function r6(t, n) {
	for (var e = this, r = [e], i, o, a = -1; (e = r.pop()); )
		if ((t.call(n, e, ++a, this), (i = e.children)))
			for (o = i.length - 1; o >= 0; --o) r.push(i[o]);
	return this;
}
function i6(t, n) {
	for (var e = this, r = [e], i = [], o, a, u, c = -1; (e = r.pop()); )
		if ((i.push(e), (o = e.children))) for (a = 0, u = o.length; a < u; ++a) r.push(o[a]);
	for (; (e = i.pop()); ) t.call(n, e, ++c, this);
	return this;
}
function o6(t, n) {
	let e = -1;
	for (const r of this) if (t.call(n, r, ++e, this)) return r;
}
function a6(t) {
	return this.eachAfter(function (n) {
		for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0; ) e += r[i].value;
		n.value = e;
	});
}
function u6(t) {
	return this.eachBefore(function (n) {
		n.children && n.children.sort(t);
	});
}
function s6(t) {
	for (var n = this, e = c6(n, t), r = [n]; n !== e; ) (n = n.parent), r.push(n);
	for (var i = r.length; t !== e; ) r.splice(i, 0, t), (t = t.parent);
	return r;
}
function c6(t, n) {
	if (t === n) return t;
	var e = t.ancestors(),
		r = n.ancestors(),
		i = null;
	for (t = e.pop(), n = r.pop(); t === n; ) (i = t), (t = e.pop()), (n = r.pop());
	return i;
}
function f6() {
	for (var t = this, n = [t]; (t = t.parent); ) n.push(t);
	return n;
}
function l6() {
	return Array.from(this);
}
function h6() {
	var t = [];
	return (
		this.eachBefore(function (n) {
			n.children || t.push(n);
		}),
		t
	);
}
function d6() {
	var t = this,
		n = [];
	return (
		t.each(function (e) {
			e !== t && n.push({ source: e.parent, target: e });
		}),
		n
	);
}
function* g6() {
	var t = this,
		n,
		e = [t],
		r,
		i,
		o;
	do
		for (n = e.reverse(), e = []; (t = n.pop()); )
			if ((yield t, (r = t.children))) for (i = 0, o = r.length; i < o; ++i) e.push(r[i]);
	while (e.length);
}
function ic(t, n) {
	t instanceof Map ? ((t = [void 0, t]), n === void 0 && (n = y6)) : n === void 0 && (n = m6);
	for (var e = new ge(t), r, i = [e], o, a, u, c; (r = i.pop()); )
		if ((a = n(r.data)) && (c = (a = Array.from(a)).length))
			for (r.children = a, u = c - 1; u >= 0; --u)
				i.push((o = a[u] = new ge(a[u]))), (o.parent = r), (o.depth = r.depth + 1);
	return e.eachBefore(_d);
}
function p6() {
	return ic(this).eachBefore(b6);
}
function m6(t) {
	return t.children;
}
function y6(t) {
	return Array.isArray(t) ? t[1] : null;
}
function b6(t) {
	t.data.value !== void 0 && (t.value = t.data.value), (t.data = t.data.data);
}
function _d(t) {
	var n = 0;
	do t.height = n;
	while ((t = t.parent) && t.height < ++n);
}
function ge(t) {
	(this.data = t), (this.depth = this.height = 0), (this.parent = null);
}
ge.prototype = ic.prototype = {
	constructor: ge,
	count: n6,
	each: e6,
	eachAfter: i6,
	eachBefore: r6,
	find: o6,
	sum: a6,
	sort: u6,
	path: s6,
	ancestors: f6,
	descendants: l6,
	leaves: h6,
	links: d6,
	copy: p6,
	[Symbol.iterator]: g6
};
function Vi(t) {
	return t == null ? null : wd(t);
}
function wd(t) {
	if (typeof t != 'function') throw new Error();
	return t;
}
function te() {
	return 0;
}
function Oe(t) {
	return function () {
		return t;
	};
}
const v6 = 1664525,
	_6 = 1013904223,
	il = 4294967296;
function oc() {
	let t = 1;
	return () => (t = (v6 * t + _6) % il) / il;
}
function w6(t) {
	return typeof t == 'object' && 'length' in t ? t : Array.from(t);
}
function x6(t, n) {
	let e = t.length,
		r,
		i;
	for (; e; ) (i = (n() * e--) | 0), (r = t[e]), (t[e] = t[i]), (t[i] = r);
	return t;
}
function M6(t) {
	return xd(t, oc());
}
function xd(t, n) {
	for (var e = 0, r = (t = x6(Array.from(t), n)).length, i = [], o, a; e < r; )
		(o = t[e]), a && Md(a, o) ? ++e : ((a = T6((i = $6(i, o)))), (e = 0));
	return a;
}
function $6(t, n) {
	var e, r;
	if (eu(n, t)) return [n];
	for (e = 0; e < t.length; ++e) if (Ri(n, t[e]) && eu(Er(t[e], n), t)) return [t[e], n];
	for (e = 0; e < t.length - 1; ++e)
		for (r = e + 1; r < t.length; ++r)
			if (
				Ri(Er(t[e], t[r]), n) &&
				Ri(Er(t[e], n), t[r]) &&
				Ri(Er(t[r], n), t[e]) &&
				eu($d(t[e], t[r], n), t)
			)
				return [t[e], t[r], n];
	throw new Error();
}
function Ri(t, n) {
	var e = t.r - n.r,
		r = n.x - t.x,
		i = n.y - t.y;
	return e < 0 || e * e < r * r + i * i;
}
function Md(t, n) {
	var e = t.r - n.r + Math.max(t.r, n.r, 1) * 1e-9,
		r = n.x - t.x,
		i = n.y - t.y;
	return e > 0 && e * e > r * r + i * i;
}
function eu(t, n) {
	for (var e = 0; e < n.length; ++e) if (!Md(t, n[e])) return !1;
	return !0;
}
function T6(t) {
	switch (t.length) {
		case 1:
			return S6(t[0]);
		case 2:
			return Er(t[0], t[1]);
		case 3:
			return $d(t[0], t[1], t[2]);
	}
}
function S6(t) {
	return { x: t.x, y: t.y, r: t.r };
}
function Er(t, n) {
	var e = t.x,
		r = t.y,
		i = t.r,
		o = n.x,
		a = n.y,
		u = n.r,
		c = o - e,
		s = a - r,
		f = u - i,
		h = Math.sqrt(c * c + s * s);
	return { x: (e + o + (c / h) * f) / 2, y: (r + a + (s / h) * f) / 2, r: (h + i + u) / 2 };
}
function $d(t, n, e) {
	var r = t.x,
		i = t.y,
		o = t.r,
		a = n.x,
		u = n.y,
		c = n.r,
		s = e.x,
		f = e.y,
		h = e.r,
		l = r - a,
		d = r - s,
		p = i - u,
		m = i - f,
		g = c - o,
		y = h - o,
		_ = r * r + i * i - o * o,
		v = _ - a * a - u * u + c * c,
		b = _ - s * s - f * f + h * h,
		w = d * p - l * m,
		x = (p * b - m * v) / (w * 2) - r,
		k = (m * g - p * y) / w,
		E = (d * v - l * b) / (w * 2) - i,
		N = (l * y - d * g) / w,
		A = k * k + N * N - 1,
		$ = 2 * (o + x * k + E * N),
		P = x * x + E * E - o * o,
		C = -(Math.abs(A) > 1e-6 ? ($ + Math.sqrt($ * $ - 4 * A * P)) / (2 * A) : P / $);
	return { x: r + x + k * C, y: i + E + N * C, r: C };
}
function ol(t, n, e) {
	var r = t.x - n.x,
		i,
		o,
		a = t.y - n.y,
		u,
		c,
		s = r * r + a * a;
	s
		? ((o = n.r + e.r),
			(o *= o),
			(c = t.r + e.r),
			(c *= c),
			o > c
				? ((i = (s + c - o) / (2 * s)),
					(u = Math.sqrt(Math.max(0, c / s - i * i))),
					(e.x = t.x - i * r - u * a),
					(e.y = t.y - i * a + u * r))
				: ((i = (s + o - c) / (2 * s)),
					(u = Math.sqrt(Math.max(0, o / s - i * i))),
					(e.x = n.x + i * r - u * a),
					(e.y = n.y + i * a + u * r)))
		: ((e.x = n.x + e.r), (e.y = n.y));
}
function al(t, n) {
	var e = t.r + n.r - 1e-6,
		r = n.x - t.x,
		i = n.y - t.y;
	return e > 0 && e * e > r * r + i * i;
}
function ul(t) {
	var n = t._,
		e = t.next._,
		r = n.r + e.r,
		i = (n.x * e.r + e.x * n.r) / r,
		o = (n.y * e.r + e.y * n.r) / r;
	return i * i + o * o;
}
function Pi(t) {
	(this._ = t), (this.next = null), (this.previous = null);
}
function Td(t, n) {
	if (!(o = (t = w6(t)).length)) return 0;
	var e, r, i, o, a, u, c, s, f, h, l;
	if (((e = t[0]), (e.x = 0), (e.y = 0), !(o > 1))) return e.r;
	if (((r = t[1]), (e.x = -r.r), (r.x = e.r), (r.y = 0), !(o > 2))) return e.r + r.r;
	ol(r, e, (i = t[2])),
		(e = new Pi(e)),
		(r = new Pi(r)),
		(i = new Pi(i)),
		(e.next = i.previous = r),
		(r.next = e.previous = i),
		(i.next = r.previous = e);
	t: for (c = 3; c < o; ++c) {
		ol(e._, r._, (i = t[c])),
			(i = new Pi(i)),
			(s = r.next),
			(f = e.previous),
			(h = r._.r),
			(l = e._.r);
		do
			if (h <= l) {
				if (al(s._, i._)) {
					(r = s), (e.next = r), (r.previous = e), --c;
					continue t;
				}
				(h += s._.r), (s = s.next);
			} else {
				if (al(f._, i._)) {
					(e = f), (e.next = r), (r.previous = e), --c;
					continue t;
				}
				(l += f._.r), (f = f.previous);
			}
		while (s !== f.next);
		for (i.previous = e, i.next = r, e.next = r.previous = r = i, a = ul(e); (i = i.next) !== r; )
			(u = ul(i)) < a && ((e = i), (a = u));
		r = e.next;
	}
	for (e = [r._], i = r; (i = i.next) !== r; ) e.push(i._);
	for (i = xd(e, n), c = 0; c < o; ++c) (e = t[c]), (e.x -= i.x), (e.y -= i.y);
	return i.r;
}
function k6(t) {
	return Td(t, oc()), t;
}
function A6(t) {
	return Math.sqrt(t.value);
}
function E6() {
	var t = null,
		n = 1,
		e = 1,
		r = te;
	function i(o) {
		const a = oc();
		return (
			(o.x = n / 2),
			(o.y = e / 2),
			t
				? o
						.eachBefore(sl(t))
						.eachAfter(ru(r, 0.5, a))
						.eachBefore(cl(1))
				: o
						.eachBefore(sl(A6))
						.eachAfter(ru(te, 1, a))
						.eachAfter(ru(r, o.r / Math.min(n, e), a))
						.eachBefore(cl(Math.min(n, e) / (2 * o.r))),
			o
		);
	}
	return (
		(i.radius = function (o) {
			return arguments.length ? ((t = Vi(o)), i) : t;
		}),
		(i.size = function (o) {
			return arguments.length ? ((n = +o[0]), (e = +o[1]), i) : [n, e];
		}),
		(i.padding = function (o) {
			return arguments.length ? ((r = typeof o == 'function' ? o : Oe(+o)), i) : r;
		}),
		i
	);
}
function sl(t) {
	return function (n) {
		n.children || (n.r = Math.max(0, +t(n) || 0));
	};
}
function ru(t, n, e) {
	return function (r) {
		if ((i = r.children)) {
			var i,
				o,
				a = i.length,
				u = t(r) * n || 0,
				c;
			if (u) for (o = 0; o < a; ++o) i[o].r += u;
			if (((c = Td(i, e)), u)) for (o = 0; o < a; ++o) i[o].r -= u;
			r.r = c + u;
		}
	};
}
function cl(t) {
	return function (n) {
		var e = n.parent;
		(n.r *= t), e && ((n.x = e.x + t * n.x), (n.y = e.y + t * n.y));
	};
}
function Sd(t) {
	(t.x0 = Math.round(t.x0)),
		(t.y0 = Math.round(t.y0)),
		(t.x1 = Math.round(t.x1)),
		(t.y1 = Math.round(t.y1));
}
function li(t, n, e, r, i) {
	for (var o = t.children, a, u = -1, c = o.length, s = t.value && (r - n) / t.value; ++u < c; )
		(a = o[u]), (a.y0 = e), (a.y1 = i), (a.x0 = n), (a.x1 = n += a.value * s);
}
function N6() {
	var t = 1,
		n = 1,
		e = 0,
		r = !1;
	function i(a) {
		var u = a.height + 1;
		return (
			(a.x0 = a.y0 = e), (a.x1 = t), (a.y1 = n / u), a.eachBefore(o(n, u)), r && a.eachBefore(Sd), a
		);
	}
	function o(a, u) {
		return function (c) {
			c.children && li(c, c.x0, (a * (c.depth + 1)) / u, c.x1, (a * (c.depth + 2)) / u);
			var s = c.x0,
				f = c.y0,
				h = c.x1 - e,
				l = c.y1 - e;
			h < s && (s = h = (s + h) / 2),
				l < f && (f = l = (f + l) / 2),
				(c.x0 = s),
				(c.y0 = f),
				(c.x1 = h),
				(c.y1 = l);
		};
	}
	return (
		(i.round = function (a) {
			return arguments.length ? ((r = !!a), i) : r;
		}),
		(i.size = function (a) {
			return arguments.length ? ((t = +a[0]), (n = +a[1]), i) : [t, n];
		}),
		(i.padding = function (a) {
			return arguments.length ? ((e = +a), i) : e;
		}),
		i
	);
}
var C6 = { depth: -1 },
	fl = {},
	iu = {};
function R6(t) {
	return t.id;
}
function P6(t) {
	return t.parentId;
}
function I6() {
	var t = R6,
		n = P6,
		e;
	function r(i) {
		var o = Array.from(i),
			a = t,
			u = n,
			c,
			s,
			f,
			h,
			l,
			d,
			p,
			m,
			g = new Map();
		if (e != null) {
			const y = o.map((b, w) => z6(e(b, w, i))),
				_ = y.map(ll),
				v = new Set(y).add('');
			for (const b of _) v.has(b) || (v.add(b), y.push(b), _.push(ll(b)), o.push(iu));
			(a = (b, w) => y[w]), (u = (b, w) => _[w]);
		}
		for (f = 0, c = o.length; f < c; ++f)
			(s = o[f]),
				(d = o[f] = new ge(s)),
				(p = a(s, f, i)) != null && (p += '') && ((m = d.id = p), g.set(m, g.has(m) ? fl : d)),
				(p = u(s, f, i)) != null && (p += '') && (d.parent = p);
		for (f = 0; f < c; ++f)
			if (((d = o[f]), (p = d.parent))) {
				if (((l = g.get(p)), !l)) throw new Error('missing: ' + p);
				if (l === fl) throw new Error('ambiguous: ' + p);
				l.children ? l.children.push(d) : (l.children = [d]), (d.parent = l);
			} else {
				if (h) throw new Error('multiple roots');
				h = d;
			}
		if (!h) throw new Error('no root');
		if (e != null) {
			for (; h.data === iu && h.children.length === 1; ) (h = h.children[0]), --c;
			for (let y = o.length - 1; y >= 0 && ((d = o[y]), d.data === iu); --y) d.data = null;
		}
		if (
			((h.parent = C6),
			h
				.eachBefore(function (y) {
					(y.depth = y.parent.depth + 1), --c;
				})
				.eachBefore(_d),
			(h.parent = null),
			c > 0)
		)
			throw new Error('cycle');
		return h;
	}
	return (
		(r.id = function (i) {
			return arguments.length ? ((t = Vi(i)), r) : t;
		}),
		(r.parentId = function (i) {
			return arguments.length ? ((n = Vi(i)), r) : n;
		}),
		(r.path = function (i) {
			return arguments.length ? ((e = Vi(i)), r) : e;
		}),
		r
	);
}
function z6(t) {
	t = `${t}`;
	let n = t.length;
	return as(t, n - 1) && !as(t, n - 2) && (t = t.slice(0, -1)), t[0] === '/' ? t : `/${t}`;
}
function ll(t) {
	let n = t.length;
	if (n < 2) return '';
	for (; --n > 1 && !as(t, n); );
	return t.slice(0, n);
}
function as(t, n) {
	if (t[n] === '/') {
		let e = 0;
		for (; n > 0 && t[--n] === '\\'; ) ++e;
		if (!(e & 1)) return !0;
	}
	return !1;
}
function D6(t, n) {
	return t.parent === n.parent ? 1 : 2;
}
function ou(t) {
	var n = t.children;
	return n ? n[0] : t.t;
}
function au(t) {
	var n = t.children;
	return n ? n[n.length - 1] : t.t;
}
function O6(t, n, e) {
	var r = e / (n.i - t.i);
	(n.c -= r), (n.s += e), (t.c += r), (n.z += e), (n.m += e);
}
function F6(t) {
	for (var n = 0, e = 0, r = t.children, i = r.length, o; --i >= 0; )
		(o = r[i]), (o.z += n), (o.m += n), (n += o.s + (e += o.c));
}
function L6(t, n, e) {
	return t.a.parent === n.parent ? t.a : e;
}
function ji(t, n) {
	(this._ = t),
		(this.parent = null),
		(this.children = null),
		(this.A = null),
		(this.a = this),
		(this.z = 0),
		(this.m = 0),
		(this.c = 0),
		(this.s = 0),
		(this.t = null),
		(this.i = n);
}
ji.prototype = Object.create(ge.prototype);
function B6(t) {
	for (var n = new ji(t, 0), e, r = [n], i, o, a, u; (e = r.pop()); )
		if ((o = e._.children))
			for (e.children = new Array((u = o.length)), a = u - 1; a >= 0; --a)
				r.push((i = e.children[a] = new ji(o[a], a))), (i.parent = e);
	return ((n.parent = new ji(null, 0)).children = [n]), n;
}
function U6() {
	var t = D6,
		n = 1,
		e = 1,
		r = null;
	function i(s) {
		var f = B6(s);
		if ((f.eachAfter(o), (f.parent.m = -f.z), f.eachBefore(a), r)) s.eachBefore(c);
		else {
			var h = s,
				l = s,
				d = s;
			s.eachBefore(function (_) {
				_.x < h.x && (h = _), _.x > l.x && (l = _), _.depth > d.depth && (d = _);
			});
			var p = h === l ? 1 : t(h, l) / 2,
				m = p - h.x,
				g = n / (l.x + p + m),
				y = e / (d.depth || 1);
			s.eachBefore(function (_) {
				(_.x = (_.x + m) * g), (_.y = _.depth * y);
			});
		}
		return s;
	}
	function o(s) {
		var f = s.children,
			h = s.parent.children,
			l = s.i ? h[s.i - 1] : null;
		if (f) {
			F6(s);
			var d = (f[0].z + f[f.length - 1].z) / 2;
			l ? ((s.z = l.z + t(s._, l._)), (s.m = s.z - d)) : (s.z = d);
		} else l && (s.z = l.z + t(s._, l._));
		s.parent.A = u(s, l, s.parent.A || h[0]);
	}
	function a(s) {
		(s._.x = s.z + s.parent.m), (s.m += s.parent.m);
	}
	function u(s, f, h) {
		if (f) {
			for (
				var l = s, d = s, p = f, m = l.parent.children[0], g = l.m, y = d.m, _ = p.m, v = m.m, b;
				(p = au(p)), (l = ou(l)), p && l;

			)
				(m = ou(m)),
					(d = au(d)),
					(d.a = s),
					(b = p.z + _ - l.z - g + t(p._, l._)),
					b > 0 && (O6(L6(p, s, h), s, b), (g += b), (y += b)),
					(_ += p.m),
					(g += l.m),
					(v += m.m),
					(y += d.m);
			p && !au(d) && ((d.t = p), (d.m += _ - y)),
				l && !ou(m) && ((m.t = l), (m.m += g - v), (h = s));
		}
		return h;
	}
	function c(s) {
		(s.x *= n), (s.y = s.depth * e);
	}
	return (
		(i.separation = function (s) {
			return arguments.length ? ((t = s), i) : t;
		}),
		(i.size = function (s) {
			return arguments.length ? ((r = !1), (n = +s[0]), (e = +s[1]), i) : r ? null : [n, e];
		}),
		(i.nodeSize = function (s) {
			return arguments.length ? ((r = !0), (n = +s[0]), (e = +s[1]), i) : r ? [n, e] : null;
		}),
		i
	);
}
function ca(t, n, e, r, i) {
	for (var o = t.children, a, u = -1, c = o.length, s = t.value && (i - e) / t.value; ++u < c; )
		(a = o[u]), (a.x0 = n), (a.x1 = r), (a.y0 = e), (a.y1 = e += a.value * s);
}
var kd = (1 + Math.sqrt(5)) / 2;
function Ad(t, n, e, r, i, o) {
	for (
		var a = [],
			u = n.children,
			c,
			s,
			f = 0,
			h = 0,
			l = u.length,
			d,
			p,
			m = n.value,
			g,
			y,
			_,
			v,
			b,
			w,
			x;
		f < l;

	) {
		(d = i - e), (p = o - r);
		do g = u[h++].value;
		while (!g && h < l);
		for (
			y = _ = g, w = Math.max(p / d, d / p) / (m * t), x = g * g * w, b = Math.max(_ / x, x / y);
			h < l;
			++h
		) {
			if (
				((g += s = u[h].value),
				s < y && (y = s),
				s > _ && (_ = s),
				(x = g * g * w),
				(v = Math.max(_ / x, x / y)),
				v > b)
			) {
				g -= s;
				break;
			}
			b = v;
		}
		a.push((c = { value: g, dice: d < p, children: u.slice(f, h) })),
			c.dice
				? li(c, e, r, i, m ? (r += (p * g) / m) : o)
				: ca(c, e, r, m ? (e += (d * g) / m) : i, o),
			(m -= g),
			(f = h);
	}
	return a;
}
const Ed = (function t(n) {
	function e(r, i, o, a, u) {
		Ad(n, r, i, o, a, u);
	}
	return (
		(e.ratio = function (r) {
			return t((r = +r) > 1 ? r : 1);
		}),
		e
	);
})(kd);
function q6() {
	var t = Ed,
		n = !1,
		e = 1,
		r = 1,
		i = [0],
		o = te,
		a = te,
		u = te,
		c = te,
		s = te;
	function f(l) {
		return (
			(l.x0 = l.y0 = 0),
			(l.x1 = e),
			(l.y1 = r),
			l.eachBefore(h),
			(i = [0]),
			n && l.eachBefore(Sd),
			l
		);
	}
	function h(l) {
		var d = i[l.depth],
			p = l.x0 + d,
			m = l.y0 + d,
			g = l.x1 - d,
			y = l.y1 - d;
		g < p && (p = g = (p + g) / 2),
			y < m && (m = y = (m + y) / 2),
			(l.x0 = p),
			(l.y0 = m),
			(l.x1 = g),
			(l.y1 = y),
			l.children &&
				((d = i[l.depth + 1] = o(l) / 2),
				(p += s(l) - d),
				(m += a(l) - d),
				(g -= u(l) - d),
				(y -= c(l) - d),
				g < p && (p = g = (p + g) / 2),
				y < m && (m = y = (m + y) / 2),
				t(l, p, m, g, y));
	}
	return (
		(f.round = function (l) {
			return arguments.length ? ((n = !!l), f) : n;
		}),
		(f.size = function (l) {
			return arguments.length ? ((e = +l[0]), (r = +l[1]), f) : [e, r];
		}),
		(f.tile = function (l) {
			return arguments.length ? ((t = wd(l)), f) : t;
		}),
		(f.padding = function (l) {
			return arguments.length ? f.paddingInner(l).paddingOuter(l) : f.paddingInner();
		}),
		(f.paddingInner = function (l) {
			return arguments.length ? ((o = typeof l == 'function' ? l : Oe(+l)), f) : o;
		}),
		(f.paddingOuter = function (l) {
			return arguments.length
				? f.paddingTop(l).paddingRight(l).paddingBottom(l).paddingLeft(l)
				: f.paddingTop();
		}),
		(f.paddingTop = function (l) {
			return arguments.length ? ((a = typeof l == 'function' ? l : Oe(+l)), f) : a;
		}),
		(f.paddingRight = function (l) {
			return arguments.length ? ((u = typeof l == 'function' ? l : Oe(+l)), f) : u;
		}),
		(f.paddingBottom = function (l) {
			return arguments.length ? ((c = typeof l == 'function' ? l : Oe(+l)), f) : c;
		}),
		(f.paddingLeft = function (l) {
			return arguments.length ? ((s = typeof l == 'function' ? l : Oe(+l)), f) : s;
		}),
		f
	);
}
function Y6(t, n, e, r, i) {
	var o = t.children,
		a,
		u = o.length,
		c,
		s = new Array(u + 1);
	for (s[0] = c = a = 0; a < u; ++a) s[a + 1] = c += o[a].value;
	f(0, u, t.value, n, e, r, i);
	function f(h, l, d, p, m, g, y) {
		if (h >= l - 1) {
			var _ = o[h];
			(_.x0 = p), (_.y0 = m), (_.x1 = g), (_.y1 = y);
			return;
		}
		for (var v = s[h], b = d / 2 + v, w = h + 1, x = l - 1; w < x; ) {
			var k = (w + x) >>> 1;
			s[k] < b ? (w = k + 1) : (x = k);
		}
		b - s[w - 1] < s[w] - b && h + 1 < w && --w;
		var E = s[w] - v,
			N = d - E;
		if (g - p > y - m) {
			var A = d ? (p * N + g * E) / d : g;
			f(h, w, E, p, m, A, y), f(w, l, N, A, m, g, y);
		} else {
			var $ = d ? (m * N + y * E) / d : y;
			f(h, w, E, p, m, g, $), f(w, l, N, p, $, g, y);
		}
	}
}
function H6(t, n, e, r, i) {
	(t.depth & 1 ? ca : li)(t, n, e, r, i);
}
const X6 = (function t(n) {
	function e(r, i, o, a, u) {
		if ((c = r._squarify) && c.ratio === n)
			for (var c, s, f, h, l = -1, d, p = c.length, m = r.value; ++l < p; ) {
				for (s = c[l], f = s.children, h = s.value = 0, d = f.length; h < d; ++h)
					s.value += f[h].value;
				s.dice
					? li(s, i, o, a, m ? (o += ((u - o) * s.value) / m) : u)
					: ca(s, i, o, m ? (i += ((a - i) * s.value) / m) : a, u),
					(m -= s.value);
			}
		else (r._squarify = c = Ad(n, r, i, o, a, u)), (c.ratio = n);
	}
	return (
		(e.ratio = function (r) {
			return t((r = +r) > 1 ? r : 1);
		}),
		e
	);
})(kd);
function G6(t) {
	for (var n = -1, e = t.length, r, i = t[e - 1], o = 0; ++n < e; )
		(r = i), (i = t[n]), (o += r[1] * i[0] - r[0] * i[1]);
	return o / 2;
}
function W6(t) {
	for (var n = -1, e = t.length, r = 0, i = 0, o, a = t[e - 1], u, c = 0; ++n < e; )
		(o = a),
			(a = t[n]),
			(c += u = o[0] * a[1] - a[0] * o[1]),
			(r += (o[0] + a[0]) * u),
			(i += (o[1] + a[1]) * u);
	return (c *= 3), [r / c, i / c];
}
function V6(t, n, e) {
	return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0]);
}
function j6(t, n) {
	return t[0] - n[0] || t[1] - n[1];
}
function hl(t) {
	const n = t.length,
		e = [0, 1];
	let r = 2,
		i;
	for (i = 2; i < n; ++i) {
		for (; r > 1 && V6(t[e[r - 2]], t[e[r - 1]], t[i]) <= 0; ) --r;
		e[r++] = i;
	}
	return e.slice(0, r);
}
function Z6(t) {
	if ((e = t.length) < 3) return null;
	var n,
		e,
		r = new Array(e),
		i = new Array(e);
	for (n = 0; n < e; ++n) r[n] = [+t[n][0], +t[n][1], n];
	for (r.sort(j6), n = 0; n < e; ++n) i[n] = [r[n][0], -r[n][1]];
	var o = hl(r),
		a = hl(i),
		u = a[0] === o[0],
		c = a[a.length - 1] === o[o.length - 1],
		s = [];
	for (n = o.length - 1; n >= 0; --n) s.push(t[r[o[n]][2]]);
	for (n = +u; n < a.length - c; ++n) s.push(t[r[a[n]][2]]);
	return s;
}
function Q6(t, n) {
	for (
		var e = t.length, r = t[e - 1], i = n[0], o = n[1], a = r[0], u = r[1], c, s, f = !1, h = 0;
		h < e;
		++h
	)
		(r = t[h]),
			(c = r[0]),
			(s = r[1]),
			s > o != u > o && i < ((a - c) * (o - s)) / (u - s) + c && (f = !f),
			(a = c),
			(u = s);
	return f;
}
function K6(t) {
	for (var n = -1, e = t.length, r = t[e - 1], i, o, a = r[0], u = r[1], c = 0; ++n < e; )
		(i = a),
			(o = u),
			(r = t[n]),
			(a = r[0]),
			(u = r[1]),
			(i -= a),
			(o -= u),
			(c += Math.hypot(i, o));
	return c;
}
const kt = Math.random,
	J6 = (function t(n) {
		function e(r, i) {
			return (
				(r = r == null ? 0 : +r),
				(i = i == null ? 1 : +i),
				arguments.length === 1 ? ((i = r), (r = 0)) : (i -= r),
				function () {
					return n() * i + r;
				}
			);
		}
		return (e.source = t), e;
	})(kt),
	t5 = (function t(n) {
		function e(r, i) {
			return (
				arguments.length < 2 && ((i = r), (r = 0)),
				(r = Math.floor(r)),
				(i = Math.floor(i) - r),
				function () {
					return Math.floor(n() * i + r);
				}
			);
		}
		return (e.source = t), e;
	})(kt),
	ac = (function t(n) {
		function e(r, i) {
			var o, a;
			return (
				(r = r == null ? 0 : +r),
				(i = i == null ? 1 : +i),
				function () {
					var u;
					if (o != null) (u = o), (o = null);
					else
						do (o = n() * 2 - 1), (u = n() * 2 - 1), (a = o * o + u * u);
						while (!a || a > 1);
					return r + i * u * Math.sqrt((-2 * Math.log(a)) / a);
				}
			);
		}
		return (e.source = t), e;
	})(kt),
	n5 = (function t(n) {
		var e = ac.source(n);
		function r() {
			var i = e.apply(this, arguments);
			return function () {
				return Math.exp(i());
			};
		}
		return (r.source = t), r;
	})(kt),
	Nd = (function t(n) {
		function e(r) {
			return (r = +r) <= 0
				? () => 0
				: function () {
						for (var i = 0, o = r; o > 1; --o) i += n();
						return i + o * n();
					};
		}
		return (e.source = t), e;
	})(kt),
	e5 = (function t(n) {
		var e = Nd.source(n);
		function r(i) {
			if ((i = +i) == 0) return n;
			var o = e(i);
			return function () {
				return o() / i;
			};
		}
		return (r.source = t), r;
	})(kt),
	r5 = (function t(n) {
		function e(r) {
			return function () {
				return -Math.log1p(-n()) / r;
			};
		}
		return (e.source = t), e;
	})(kt),
	i5 = (function t(n) {
		function e(r) {
			if ((r = +r) < 0) throw new RangeError('invalid alpha');
			return (
				(r = 1 / -r),
				function () {
					return Math.pow(1 - n(), r);
				}
			);
		}
		return (e.source = t), e;
	})(kt),
	o5 = (function t(n) {
		function e(r) {
			if ((r = +r) < 0 || r > 1) throw new RangeError('invalid p');
			return function () {
				return Math.floor(n() + r);
			};
		}
		return (e.source = t), e;
	})(kt),
	Cd = (function t(n) {
		function e(r) {
			if ((r = +r) < 0 || r > 1) throw new RangeError('invalid p');
			return r === 0
				? () => 1 / 0
				: r === 1
					? () => 1
					: ((r = Math.log1p(-r)),
						function () {
							return 1 + Math.floor(Math.log1p(-n()) / r);
						});
		}
		return (e.source = t), e;
	})(kt),
	uc = (function t(n) {
		var e = ac.source(n)();
		function r(i, o) {
			if ((i = +i) < 0) throw new RangeError('invalid k');
			if (i === 0) return () => 0;
			if (((o = o == null ? 1 : +o), i === 1)) return () => -Math.log1p(-n()) * o;
			var a = (i < 1 ? i + 1 : i) - 1 / 3,
				u = 1 / (3 * Math.sqrt(a)),
				c = i < 1 ? () => Math.pow(n(), 1 / i) : () => 1;
			return function () {
				do {
					do
						var s = e(),
							f = 1 + u * s;
					while (f <= 0);
					f *= f * f;
					var h = 1 - n();
				} while (
					h >= 1 - 0.0331 * s * s * s * s &&
					Math.log(h) >= 0.5 * s * s + a * (1 - f + Math.log(f))
				);
				return a * f * c() * o;
			};
		}
		return (r.source = t), r;
	})(kt),
	Rd = (function t(n) {
		var e = uc.source(n);
		function r(i, o) {
			var a = e(i),
				u = e(o);
			return function () {
				var c = a();
				return c === 0 ? 0 : c / (c + u());
			};
		}
		return (r.source = t), r;
	})(kt),
	Pd = (function t(n) {
		var e = Cd.source(n),
			r = Rd.source(n);
		function i(o, a) {
			return (
				(o = +o),
				(a = +a) >= 1
					? () => o
					: a <= 0
						? () => 0
						: function () {
								for (var u = 0, c = o, s = a; c * s > 16 && c * (1 - s) > 16; ) {
									var f = Math.floor((c + 1) * s),
										h = r(f, c - f + 1)();
									h <= s ? ((u += f), (c -= f), (s = (s - h) / (1 - h))) : ((c = f - 1), (s /= h));
								}
								for (var l = s < 0.5, d = l ? s : 1 - s, p = e(d), m = p(), g = 0; m <= c; ++g)
									m += p();
								return u + (l ? g : c - g);
							}
			);
		}
		return (i.source = t), i;
	})(kt),
	a5 = (function t(n) {
		function e(r, i, o) {
			var a;
			return (
				(r = +r) == 0 ? (a = (u) => -Math.log(u)) : ((r = 1 / r), (a = (u) => Math.pow(u, r))),
				(i = i == null ? 0 : +i),
				(o = o == null ? 1 : +o),
				function () {
					return i + o * a(-Math.log1p(-n()));
				}
			);
		}
		return (e.source = t), e;
	})(kt),
	u5 = (function t(n) {
		function e(r, i) {
			return (
				(r = r == null ? 0 : +r),
				(i = i == null ? 1 : +i),
				function () {
					return r + i * Math.tan(Math.PI * n());
				}
			);
		}
		return (e.source = t), e;
	})(kt),
	s5 = (function t(n) {
		function e(r, i) {
			return (
				(r = r == null ? 0 : +r),
				(i = i == null ? 1 : +i),
				function () {
					var o = n();
					return r + i * Math.log(o / (1 - o));
				}
			);
		}
		return (e.source = t), e;
	})(kt),
	c5 = (function t(n) {
		var e = uc.source(n),
			r = Pd.source(n);
		function i(o) {
			return function () {
				for (var a = 0, u = o; u > 16; ) {
					var c = Math.floor(0.875 * u),
						s = e(c)();
					if (s > u) return a + r(c - 1, u / s)();
					(a += c), (u -= s);
				}
				for (var f = -Math.log1p(-n()), h = 0; f <= u; ++h) f -= Math.log1p(-n());
				return a + h;
			};
		}
		return (i.source = t), i;
	})(kt),
	f5 = 1664525,
	l5 = 1013904223,
	dl = 1 / 4294967296;
function h5(t = Math.random()) {
	let n = (0 <= t && t < 1 ? t / dl : Math.abs(t)) | 0;
	return () => ((n = (f5 * n + l5) | 0), dl * (n >>> 0));
}
function on(t, n) {
	switch (arguments.length) {
		case 0:
			break;
		case 1:
			this.range(t);
			break;
		default:
			this.range(n).domain(t);
			break;
	}
	return this;
}
function zn(t, n) {
	switch (arguments.length) {
		case 0:
			break;
		case 1: {
			typeof t == 'function' ? this.interpolator(t) : this.range(t);
			break;
		}
		default: {
			this.domain(t), typeof n == 'function' ? this.interpolator(n) : this.range(n);
			break;
		}
	}
	return this;
}
const us = Symbol('implicit');
function fa() {
	var t = new Fr(),
		n = [],
		e = [],
		r = us;
	function i(o) {
		let a = t.get(o);
		if (a === void 0) {
			if (r !== us) return r;
			t.set(o, (a = n.push(o) - 1));
		}
		return e[a % e.length];
	}
	return (
		(i.domain = function (o) {
			if (!arguments.length) return n.slice();
			(n = []), (t = new Fr());
			for (const a of o) t.has(a) || t.set(a, n.push(a) - 1);
			return i;
		}),
		(i.range = function (o) {
			return arguments.length ? ((e = Array.from(o)), i) : e.slice();
		}),
		(i.unknown = function (o) {
			return arguments.length ? ((r = o), i) : r;
		}),
		(i.copy = function () {
			return fa(n, e).unknown(r);
		}),
		on.apply(i, arguments),
		i
	);
}
function sc() {
	var t = fa().unknown(void 0),
		n = t.domain,
		e = t.range,
		r = 0,
		i = 1,
		o,
		a,
		u = !1,
		c = 0,
		s = 0,
		f = 0.5;
	delete t.unknown;
	function h() {
		var l = n().length,
			d = i < r,
			p = d ? i : r,
			m = d ? r : i;
		(o = (m - p) / Math.max(1, l - c + s * 2)),
			u && (o = Math.floor(o)),
			(p += (m - p - o * (l - c)) * f),
			(a = o * (1 - c)),
			u && ((p = Math.round(p)), (a = Math.round(a)));
		var g = Fn(l).map(function (y) {
			return p + o * y;
		});
		return e(d ? g.reverse() : g);
	}
	return (
		(t.domain = function (l) {
			return arguments.length ? (n(l), h()) : n();
		}),
		(t.range = function (l) {
			return arguments.length ? (([r, i] = l), (r = +r), (i = +i), h()) : [r, i];
		}),
		(t.rangeRound = function (l) {
			return ([r, i] = l), (r = +r), (i = +i), (u = !0), h();
		}),
		(t.bandwidth = function () {
			return a;
		}),
		(t.step = function () {
			return o;
		}),
		(t.round = function (l) {
			return arguments.length ? ((u = !!l), h()) : u;
		}),
		(t.padding = function (l) {
			return arguments.length ? ((c = Math.min(1, (s = +l))), h()) : c;
		}),
		(t.paddingInner = function (l) {
			return arguments.length ? ((c = Math.min(1, l)), h()) : c;
		}),
		(t.paddingOuter = function (l) {
			return arguments.length ? ((s = +l), h()) : s;
		}),
		(t.align = function (l) {
			return arguments.length ? ((f = Math.max(0, Math.min(1, l))), h()) : f;
		}),
		(t.copy = function () {
			return sc(n(), [r, i]).round(u).paddingInner(c).paddingOuter(s).align(f);
		}),
		on.apply(h(), arguments)
	);
}
function Id(t) {
	var n = t.copy;
	return (
		(t.padding = t.paddingOuter),
		delete t.paddingInner,
		delete t.paddingOuter,
		(t.copy = function () {
			return Id(n());
		}),
		t
	);
}
function d5() {
	return Id(sc.apply(null, arguments).paddingInner(1));
}
function g5(t) {
	return function () {
		return t;
	};
}
function zo(t) {
	return +t;
}
var gl = [0, 1];
function Ft(t) {
	return t;
}
function ss(t, n) {
	return (n -= t = +t)
		? function (e) {
				return (e - t) / n;
			}
		: g5(isNaN(n) ? NaN : 0.5);
}
function p5(t, n) {
	var e;
	return (
		t > n && ((e = t), (t = n), (n = e)),
		function (r) {
			return Math.max(t, Math.min(n, r));
		}
	);
}
function m5(t, n, e) {
	var r = t[0],
		i = t[1],
		o = n[0],
		a = n[1];
	return (
		i < r ? ((r = ss(i, r)), (o = e(a, o))) : ((r = ss(r, i)), (o = e(o, a))),
		function (u) {
			return o(r(u));
		}
	);
}
function y5(t, n, e) {
	var r = Math.min(t.length, n.length) - 1,
		i = new Array(r),
		o = new Array(r),
		a = -1;
	for (t[r] < t[0] && ((t = t.slice().reverse()), (n = n.slice().reverse())); ++a < r; )
		(i[a] = ss(t[a], t[a + 1])), (o[a] = e(n[a], n[a + 1]));
	return function (u) {
		var c = Un(t, u, 1, r) - 1;
		return o[c](i[c](u));
	};
}
function hi(t, n) {
	return n
		.domain(t.domain())
		.range(t.range())
		.interpolate(t.interpolate())
		.clamp(t.clamp())
		.unknown(t.unknown());
}
function la() {
	var t = gl,
		n = gl,
		e = Wn,
		r,
		i,
		o,
		a = Ft,
		u,
		c,
		s;
	function f() {
		var l = Math.min(t.length, n.length);
		return a !== Ft && (a = p5(t[0], t[l - 1])), (u = l > 2 ? y5 : m5), (c = s = null), h;
	}
	function h(l) {
		return l == null || isNaN((l = +l)) ? o : (c || (c = u(t.map(r), n, e)))(r(a(l)));
	}
	return (
		(h.invert = function (l) {
			return a(i((s || (s = u(n, t.map(r), tn)))(l)));
		}),
		(h.domain = function (l) {
			return arguments.length ? ((t = Array.from(l, zo)), f()) : t.slice();
		}),
		(h.range = function (l) {
			return arguments.length ? ((n = Array.from(l)), f()) : n.slice();
		}),
		(h.rangeRound = function (l) {
			return (n = Array.from(l)), (e = Qo), f();
		}),
		(h.clamp = function (l) {
			return arguments.length ? ((a = l ? !0 : Ft), f()) : a !== Ft;
		}),
		(h.interpolate = function (l) {
			return arguments.length ? ((e = l), f()) : e;
		}),
		(h.unknown = function (l) {
			return arguments.length ? ((o = l), h) : o;
		}),
		function (l, d) {
			return (r = l), (i = d), f();
		}
	);
}
function cc() {
	return la()(Ft, Ft);
}
function zd(t, n, e, r) {
	var i = Ki(t, n, e),
		o;
	switch (((r = Ke(r ?? ',f')), r.type)) {
		case 's': {
			var a = Math.max(Math.abs(t), Math.abs(n));
			return r.precision == null && !isNaN((o = P0(i, a))) && (r.precision = o), Bs(r, a);
		}
		case '':
		case 'e':
		case 'g':
		case 'p':
		case 'r': {
			r.precision == null &&
				!isNaN((o = I0(i, Math.max(Math.abs(t), Math.abs(n))))) &&
				(r.precision = o - (r.type === 'e'));
			break;
		}
		case 'f':
		case '%': {
			r.precision == null && !isNaN((o = R0(i))) && (r.precision = o - (r.type === '%') * 2);
			break;
		}
	}
	return aa(r);
}
function Vn(t) {
	var n = t.domain;
	return (
		(t.ticks = function (e) {
			var r = n();
			return ue(r[0], r[r.length - 1], e ?? 10);
		}),
		(t.tickFormat = function (e, r) {
			var i = n();
			return zd(i[0], i[i.length - 1], e ?? 10, r);
		}),
		(t.nice = function (e) {
			e == null && (e = 10);
			var r = n(),
				i = 0,
				o = r.length - 1,
				a = r[i],
				u = r[o],
				c,
				s,
				f = 10;
			for (u < a && ((s = a), (a = u), (u = s), (s = i), (i = o), (o = s)); f-- > 0; ) {
				if (((s = se(a, u, e)), s === c)) return (r[i] = a), (r[o] = u), n(r);
				if (s > 0) (a = Math.floor(a / s) * s), (u = Math.ceil(u / s) * s);
				else if (s < 0) (a = Math.ceil(a * s) / s), (u = Math.floor(u * s) / s);
				else break;
				c = s;
			}
			return t;
		}),
		t
	);
}
function Dd() {
	var t = cc();
	return (
		(t.copy = function () {
			return hi(t, Dd());
		}),
		on.apply(t, arguments),
		Vn(t)
	);
}
function Od(t) {
	var n;
	function e(r) {
		return r == null || isNaN((r = +r)) ? n : r;
	}
	return (
		(e.invert = e),
		(e.domain = e.range =
			function (r) {
				return arguments.length ? ((t = Array.from(r, zo)), e) : t.slice();
			}),
		(e.unknown = function (r) {
			return arguments.length ? ((n = r), e) : n;
		}),
		(e.copy = function () {
			return Od(t).unknown(n);
		}),
		(t = arguments.length ? Array.from(t, zo) : [0, 1]),
		Vn(e)
	);
}
function Fd(t, n) {
	t = t.slice();
	var e = 0,
		r = t.length - 1,
		i = t[e],
		o = t[r],
		a;
	return (
		o < i && ((a = e), (e = r), (r = a), (a = i), (i = o), (o = a)),
		(t[e] = n.floor(i)),
		(t[r] = n.ceil(o)),
		t
	);
}
function pl(t) {
	return Math.log(t);
}
function ml(t) {
	return Math.exp(t);
}
function b5(t) {
	return -Math.log(-t);
}
function v5(t) {
	return -Math.exp(-t);
}
function _5(t) {
	return isFinite(t) ? +('1e' + t) : t < 0 ? 0 : t;
}
function w5(t) {
	return t === 10 ? _5 : t === Math.E ? Math.exp : (n) => Math.pow(t, n);
}
function x5(t) {
	return t === Math.E
		? Math.log
		: (t === 10 && Math.log10) ||
				(t === 2 && Math.log2) ||
				((t = Math.log(t)), (n) => Math.log(n) / t);
}
function yl(t) {
	return (n, e) => -t(-n, e);
}
function fc(t) {
	const n = t(pl, ml),
		e = n.domain;
	let r = 10,
		i,
		o;
	function a() {
		return (
			(i = x5(r)), (o = w5(r)), e()[0] < 0 ? ((i = yl(i)), (o = yl(o)), t(b5, v5)) : t(pl, ml), n
		);
	}
	return (
		(n.base = function (u) {
			return arguments.length ? ((r = +u), a()) : r;
		}),
		(n.domain = function (u) {
			return arguments.length ? (e(u), a()) : e();
		}),
		(n.ticks = (u) => {
			const c = e();
			let s = c[0],
				f = c[c.length - 1];
			const h = f < s;
			h && ([s, f] = [f, s]);
			let l = i(s),
				d = i(f),
				p,
				m;
			const g = u == null ? 10 : +u;
			let y = [];
			if (!(r % 1) && d - l < g) {
				if (((l = Math.floor(l)), (d = Math.ceil(d)), s > 0)) {
					for (; l <= d; ++l)
						for (p = 1; p < r; ++p)
							if (((m = l < 0 ? p / o(-l) : p * o(l)), !(m < s))) {
								if (m > f) break;
								y.push(m);
							}
				} else
					for (; l <= d; ++l)
						for (p = r - 1; p >= 1; --p)
							if (((m = l > 0 ? p / o(-l) : p * o(l)), !(m < s))) {
								if (m > f) break;
								y.push(m);
							}
				y.length * 2 < g && (y = ue(s, f, g));
			} else y = ue(l, d, Math.min(d - l, g)).map(o);
			return h ? y.reverse() : y;
		}),
		(n.tickFormat = (u, c) => {
			if (
				(u == null && (u = 10),
				c == null && (c = r === 10 ? 's' : ','),
				typeof c != 'function' &&
					(!(r % 1) && (c = Ke(c)).precision == null && (c.trim = !0), (c = aa(c))),
				u === 1 / 0)
			)
				return c;
			const s = Math.max(1, (r * u) / n.ticks().length);
			return (f) => {
				let h = f / o(Math.round(i(f)));
				return h * r < r - 0.5 && (h *= r), h <= s ? c(f) : '';
			};
		}),
		(n.nice = () =>
			e(Fd(e(), { floor: (u) => o(Math.floor(i(u))), ceil: (u) => o(Math.ceil(i(u))) }))),
		n
	);
}
function Ld() {
	const t = fc(la()).domain([1, 10]);
	return (t.copy = () => hi(t, Ld()).base(t.base())), on.apply(t, arguments), t;
}
function bl(t) {
	return function (n) {
		return Math.sign(n) * Math.log1p(Math.abs(n / t));
	};
}
function vl(t) {
	return function (n) {
		return Math.sign(n) * Math.expm1(Math.abs(n)) * t;
	};
}
function lc(t) {
	var n = 1,
		e = t(bl(n), vl(n));
	return (
		(e.constant = function (r) {
			return arguments.length ? t(bl((n = +r)), vl(n)) : n;
		}),
		Vn(e)
	);
}
function Bd() {
	var t = lc(la());
	return (
		(t.copy = function () {
			return hi(t, Bd()).constant(t.constant());
		}),
		on.apply(t, arguments)
	);
}
function _l(t) {
	return function (n) {
		return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t);
	};
}
function M5(t) {
	return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
}
function $5(t) {
	return t < 0 ? -t * t : t * t;
}
function hc(t) {
	var n = t(Ft, Ft),
		e = 1;
	function r() {
		return e === 1 ? t(Ft, Ft) : e === 0.5 ? t(M5, $5) : t(_l(e), _l(1 / e));
	}
	return (
		(n.exponent = function (i) {
			return arguments.length ? ((e = +i), r()) : e;
		}),
		Vn(n)
	);
}
function dc() {
	var t = hc(la());
	return (
		(t.copy = function () {
			return hi(t, dc()).exponent(t.exponent());
		}),
		on.apply(t, arguments),
		t
	);
}
function T5() {
	return dc.apply(null, arguments).exponent(0.5);
}
function wl(t) {
	return Math.sign(t) * t * t;
}
function S5(t) {
	return Math.sign(t) * Math.sqrt(Math.abs(t));
}
function Ud() {
	var t = cc(),
		n = [0, 1],
		e = !1,
		r;
	function i(o) {
		var a = S5(t(o));
		return isNaN(a) ? r : e ? Math.round(a) : a;
	}
	return (
		(i.invert = function (o) {
			return t.invert(wl(o));
		}),
		(i.domain = function (o) {
			return arguments.length ? (t.domain(o), i) : t.domain();
		}),
		(i.range = function (o) {
			return arguments.length ? (t.range((n = Array.from(o, zo)).map(wl)), i) : n.slice();
		}),
		(i.rangeRound = function (o) {
			return i.range(o).round(!0);
		}),
		(i.round = function (o) {
			return arguments.length ? ((e = !!o), i) : e;
		}),
		(i.clamp = function (o) {
			return arguments.length ? (t.clamp(o), i) : t.clamp();
		}),
		(i.unknown = function (o) {
			return arguments.length ? ((r = o), i) : r;
		}),
		(i.copy = function () {
			return Ud(t.domain(), n).round(e).clamp(t.clamp()).unknown(r);
		}),
		on.apply(i, arguments),
		Vn(i)
	);
}
function qd() {
	var t = [],
		n = [],
		e = [],
		r;
	function i() {
		var a = 0,
			u = Math.max(1, n.length);
		for (e = new Array(u - 1); ++a < u; ) e[a - 1] = fh(t, a / u);
		return o;
	}
	function o(a) {
		return a == null || isNaN((a = +a)) ? r : n[Un(e, a)];
	}
	return (
		(o.invertExtent = function (a) {
			var u = n.indexOf(a);
			return u < 0 ? [NaN, NaN] : [u > 0 ? e[u - 1] : t[0], u < e.length ? e[u] : t[t.length - 1]];
		}),
		(o.domain = function (a) {
			if (!arguments.length) return t.slice();
			t = [];
			for (let u of a) u != null && !isNaN((u = +u)) && t.push(u);
			return t.sort(yt), i();
		}),
		(o.range = function (a) {
			return arguments.length ? ((n = Array.from(a)), i()) : n.slice();
		}),
		(o.unknown = function (a) {
			return arguments.length ? ((r = a), o) : r;
		}),
		(o.quantiles = function () {
			return e.slice();
		}),
		(o.copy = function () {
			return qd().domain(t).range(n).unknown(r);
		}),
		on.apply(o, arguments)
	);
}
function Yd() {
	var t = 0,
		n = 1,
		e = 1,
		r = [0.5],
		i = [0, 1],
		o;
	function a(c) {
		return c != null && c <= c ? i[Un(r, c, 0, e)] : o;
	}
	function u() {
		var c = -1;
		for (r = new Array(e); ++c < e; ) r[c] = ((c + 1) * n - (c - e) * t) / (e + 1);
		return a;
	}
	return (
		(a.domain = function (c) {
			return arguments.length ? (([t, n] = c), (t = +t), (n = +n), u()) : [t, n];
		}),
		(a.range = function (c) {
			return arguments.length ? ((e = (i = Array.from(c)).length - 1), u()) : i.slice();
		}),
		(a.invertExtent = function (c) {
			var s = i.indexOf(c);
			return s < 0 ? [NaN, NaN] : s < 1 ? [t, r[0]] : s >= e ? [r[e - 1], n] : [r[s - 1], r[s]];
		}),
		(a.unknown = function (c) {
			return arguments.length && (o = c), a;
		}),
		(a.thresholds = function () {
			return r.slice();
		}),
		(a.copy = function () {
			return Yd().domain([t, n]).range(i).unknown(o);
		}),
		on.apply(Vn(a), arguments)
	);
}
function Hd() {
	var t = [0.5],
		n = [0, 1],
		e,
		r = 1;
	function i(o) {
		return o != null && o <= o ? n[Un(t, o, 0, r)] : e;
	}
	return (
		(i.domain = function (o) {
			return arguments.length
				? ((t = Array.from(o)), (r = Math.min(t.length, n.length - 1)), i)
				: t.slice();
		}),
		(i.range = function (o) {
			return arguments.length
				? ((n = Array.from(o)), (r = Math.min(t.length, n.length - 1)), i)
				: n.slice();
		}),
		(i.invertExtent = function (o) {
			var a = n.indexOf(o);
			return [t[a - 1], t[a]];
		}),
		(i.unknown = function (o) {
			return arguments.length ? ((e = o), i) : e;
		}),
		(i.copy = function () {
			return Hd().domain(t).range(n).unknown(e);
		}),
		on.apply(i, arguments)
	);
}
const uu = new Date(),
	su = new Date();
function _t(t, n, e, r) {
	function i(o) {
		return t((o = arguments.length === 0 ? new Date() : new Date(+o))), o;
	}
	return (
		(i.floor = (o) => (t((o = new Date(+o))), o)),
		(i.ceil = (o) => (t((o = new Date(o - 1))), n(o, 1), t(o), o)),
		(i.round = (o) => {
			const a = i(o),
				u = i.ceil(o);
			return o - a < u - o ? a : u;
		}),
		(i.offset = (o, a) => (n((o = new Date(+o)), a == null ? 1 : Math.floor(a)), o)),
		(i.range = (o, a, u) => {
			const c = [];
			if (((o = i.ceil(o)), (u = u == null ? 1 : Math.floor(u)), !(o < a) || !(u > 0))) return c;
			let s;
			do c.push((s = new Date(+o))), n(o, u), t(o);
			while (s < o && o < a);
			return c;
		}),
		(i.filter = (o) =>
			_t(
				(a) => {
					if (a >= a) for (; t(a), !o(a); ) a.setTime(a - 1);
				},
				(a, u) => {
					if (a >= a)
						if (u < 0) for (; ++u <= 0; ) for (; n(a, -1), !o(a); );
						else for (; --u >= 0; ) for (; n(a, 1), !o(a); );
				}
			)),
		e &&
			((i.count = (o, a) => (uu.setTime(+o), su.setTime(+a), t(uu), t(su), Math.floor(e(uu, su)))),
			(i.every = (o) => (
				(o = Math.floor(o)),
				!isFinite(o) || !(o > 0)
					? null
					: o > 1
						? i.filter(r ? (a) => r(a) % o === 0 : (a) => i.count(0, a) % o === 0)
						: i
			))),
		i
	);
}
const er = _t(
	() => {},
	(t, n) => {
		t.setTime(+t + n);
	},
	(t, n) => n - t
);
er.every = (t) => (
	(t = Math.floor(t)),
	!isFinite(t) || !(t > 0)
		? null
		: t > 1
			? _t(
					(n) => {
						n.setTime(Math.floor(n / t) * t);
					},
					(n, e) => {
						n.setTime(+n + e * t);
					},
					(n, e) => (e - n) / t
				)
			: er
);
const xl = er.range,
	En = 1e3,
	rn = En * 60,
	Nn = rn * 60,
	In = Nn * 24,
	gc = In * 7,
	Ml = In * 30,
	cu = In * 365,
	Cn = _t(
		(t) => {
			t.setTime(t - t.getMilliseconds());
		},
		(t, n) => {
			t.setTime(+t + n * En);
		},
		(t, n) => (n - t) / En,
		(t) => t.getUTCSeconds()
	),
	$l = Cn.range,
	ha = _t(
		(t) => {
			t.setTime(t - t.getMilliseconds() - t.getSeconds() * En);
		},
		(t, n) => {
			t.setTime(+t + n * rn);
		},
		(t, n) => (n - t) / rn,
		(t) => t.getMinutes()
	),
	k5 = ha.range,
	da = _t(
		(t) => {
			t.setUTCSeconds(0, 0);
		},
		(t, n) => {
			t.setTime(+t + n * rn);
		},
		(t, n) => (n - t) / rn,
		(t) => t.getUTCMinutes()
	),
	A5 = da.range,
	ga = _t(
		(t) => {
			t.setTime(t - t.getMilliseconds() - t.getSeconds() * En - t.getMinutes() * rn);
		},
		(t, n) => {
			t.setTime(+t + n * Nn);
		},
		(t, n) => (n - t) / Nn,
		(t) => t.getHours()
	),
	E5 = ga.range,
	pa = _t(
		(t) => {
			t.setUTCMinutes(0, 0, 0);
		},
		(t, n) => {
			t.setTime(+t + n * Nn);
		},
		(t, n) => (n - t) / Nn,
		(t) => t.getUTCHours()
	),
	N5 = pa.range,
	fr = _t(
		(t) => t.setHours(0, 0, 0, 0),
		(t, n) => t.setDate(t.getDate() + n),
		(t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * rn) / In,
		(t) => t.getDate() - 1
	),
	C5 = fr.range,
	di = _t(
		(t) => {
			t.setUTCHours(0, 0, 0, 0);
		},
		(t, n) => {
			t.setUTCDate(t.getUTCDate() + n);
		},
		(t, n) => (n - t) / In,
		(t) => t.getUTCDate() - 1
	),
	R5 = di.range,
	pc = _t(
		(t) => {
			t.setUTCHours(0, 0, 0, 0);
		},
		(t, n) => {
			t.setUTCDate(t.getUTCDate() + n);
		},
		(t, n) => (n - t) / In,
		(t) => Math.floor(t / In)
	),
	P5 = pc.range;
function we(t) {
	return _t(
		(n) => {
			n.setDate(n.getDate() - ((n.getDay() + 7 - t) % 7)), n.setHours(0, 0, 0, 0);
		},
		(n, e) => {
			n.setDate(n.getDate() + e * 7);
		},
		(n, e) => (e - n - (e.getTimezoneOffset() - n.getTimezoneOffset()) * rn) / gc
	);
}
const rr = we(0),
	ti = we(1),
	Xd = we(2),
	Gd = we(3),
	pe = we(4),
	Wd = we(5),
	Vd = we(6),
	Tl = rr.range,
	I5 = ti.range,
	z5 = Xd.range,
	D5 = Gd.range,
	O5 = pe.range,
	F5 = Wd.range,
	L5 = Vd.range;
function xe(t) {
	return _t(
		(n) => {
			n.setUTCDate(n.getUTCDate() - ((n.getUTCDay() + 7 - t) % 7)), n.setUTCHours(0, 0, 0, 0);
		},
		(n, e) => {
			n.setUTCDate(n.getUTCDate() + e * 7);
		},
		(n, e) => (e - n) / gc
	);
}
const ir = xe(0),
	ni = xe(1),
	jd = xe(2),
	Zd = xe(3),
	me = xe(4),
	Qd = xe(5),
	Kd = xe(6),
	Sl = ir.range,
	B5 = ni.range,
	U5 = jd.range,
	q5 = Zd.range,
	Y5 = me.range,
	H5 = Qd.range,
	X5 = Kd.range,
	ma = _t(
		(t) => {
			t.setDate(1), t.setHours(0, 0, 0, 0);
		},
		(t, n) => {
			t.setMonth(t.getMonth() + n);
		},
		(t, n) => n.getMonth() - t.getMonth() + (n.getFullYear() - t.getFullYear()) * 12,
		(t) => t.getMonth()
	),
	G5 = ma.range,
	ya = _t(
		(t) => {
			t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
		},
		(t, n) => {
			t.setUTCMonth(t.getUTCMonth() + n);
		},
		(t, n) => n.getUTCMonth() - t.getUTCMonth() + (n.getUTCFullYear() - t.getUTCFullYear()) * 12,
		(t) => t.getUTCMonth()
	),
	W5 = ya.range,
	vn = _t(
		(t) => {
			t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
		},
		(t, n) => {
			t.setFullYear(t.getFullYear() + n);
		},
		(t, n) => n.getFullYear() - t.getFullYear(),
		(t) => t.getFullYear()
	);
vn.every = (t) =>
	!isFinite((t = Math.floor(t))) || !(t > 0)
		? null
		: _t(
				(n) => {
					n.setFullYear(Math.floor(n.getFullYear() / t) * t),
						n.setMonth(0, 1),
						n.setHours(0, 0, 0, 0);
				},
				(n, e) => {
					n.setFullYear(n.getFullYear() + e * t);
				}
			);
const V5 = vn.range,
	_n = _t(
		(t) => {
			t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
		},
		(t, n) => {
			t.setUTCFullYear(t.getUTCFullYear() + n);
		},
		(t, n) => n.getUTCFullYear() - t.getUTCFullYear(),
		(t) => t.getUTCFullYear()
	);
_n.every = (t) =>
	!isFinite((t = Math.floor(t))) || !(t > 0)
		? null
		: _t(
				(n) => {
					n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t),
						n.setUTCMonth(0, 1),
						n.setUTCHours(0, 0, 0, 0);
				},
				(n, e) => {
					n.setUTCFullYear(n.getUTCFullYear() + e * t);
				}
			);
const j5 = _n.range;
function Jd(t, n, e, r, i, o) {
	const a = [
		[Cn, 1, En],
		[Cn, 5, 5 * En],
		[Cn, 15, 15 * En],
		[Cn, 30, 30 * En],
		[o, 1, rn],
		[o, 5, 5 * rn],
		[o, 15, 15 * rn],
		[o, 30, 30 * rn],
		[i, 1, Nn],
		[i, 3, 3 * Nn],
		[i, 6, 6 * Nn],
		[i, 12, 12 * Nn],
		[r, 1, In],
		[r, 2, 2 * In],
		[e, 1, gc],
		[n, 1, Ml],
		[n, 3, 3 * Ml],
		[t, 1, cu]
	];
	function u(s, f, h) {
		const l = f < s;
		l && ([s, f] = [f, s]);
		const d = h && typeof h.range == 'function' ? h : c(s, f, h),
			p = d ? d.range(s, +f + 1) : [];
		return l ? p.reverse() : p;
	}
	function c(s, f, h) {
		const l = Math.abs(f - s) / h,
			d = Bo(([, , g]) => g).right(a, l);
		if (d === a.length) return t.every(Ki(s / cu, f / cu, h));
		if (d === 0) return er.every(Math.max(Ki(s, f, h), 1));
		const [p, m] = a[l / a[d - 1][2] < a[d][2] / l ? d - 1 : d];
		return p.every(m);
	}
	return [u, c];
}
const [t1, n1] = Jd(_n, ya, ir, pc, pa, da),
	[e1, r1] = Jd(vn, ma, rr, fr, ga, ha);
function fu(t) {
	if (0 <= t.y && t.y < 100) {
		var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
		return n.setFullYear(t.y), n;
	}
	return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
}
function lu(t) {
	if (0 <= t.y && t.y < 100) {
		var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
		return n.setUTCFullYear(t.y), n;
	}
	return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
}
function mr(t, n, e) {
	return { y: t, m: n, d: e, H: 0, M: 0, S: 0, L: 0 };
}
function i1(t) {
	var n = t.dateTime,
		e = t.date,
		r = t.time,
		i = t.periods,
		o = t.days,
		a = t.shortDays,
		u = t.months,
		c = t.shortMonths,
		s = yr(i),
		f = br(i),
		h = yr(o),
		l = br(o),
		d = yr(a),
		p = br(a),
		m = yr(u),
		g = br(u),
		y = yr(c),
		_ = br(c),
		v = {
			a: R,
			A: O,
			b: z,
			B: L,
			c: null,
			d: Rl,
			e: Rl,
			f: b4,
			g: A4,
			G: N4,
			H: p4,
			I: m4,
			j: y4,
			L: o1,
			m: v4,
			M: _4,
			p: q,
			q: W,
			Q: zl,
			s: Dl,
			S: w4,
			u: x4,
			U: M4,
			V: $4,
			w: T4,
			W: S4,
			x: null,
			X: null,
			y: k4,
			Y: E4,
			Z: C4,
			'%': Il
		},
		b = {
			a: I,
			A: X,
			b: U,
			B: J,
			c: null,
			d: Pl,
			e: Pl,
			f: z4,
			g: X4,
			G: W4,
			H: R4,
			I: P4,
			j: I4,
			L: u1,
			m: D4,
			M: O4,
			p: B,
			q: Z,
			Q: zl,
			s: Dl,
			S: F4,
			u: L4,
			U: B4,
			V: U4,
			w: q4,
			W: Y4,
			x: null,
			X: null,
			y: H4,
			Y: G4,
			Z: V4,
			'%': Il
		},
		w = {
			a: A,
			A: $,
			b: P,
			B: C,
			c: M,
			d: Nl,
			e: Nl,
			f: l4,
			g: El,
			G: Al,
			H: Cl,
			I: Cl,
			j: u4,
			L: f4,
			m: a4,
			M: s4,
			p: N,
			q: o4,
			Q: d4,
			s: g4,
			S: c4,
			u: t4,
			U: n4,
			V: e4,
			w: J5,
			W: r4,
			x: S,
			X: T,
			y: El,
			Y: Al,
			Z: i4,
			'%': h4
		};
	(v.x = x(e, v)),
		(v.X = x(r, v)),
		(v.c = x(n, v)),
		(b.x = x(e, b)),
		(b.X = x(r, b)),
		(b.c = x(n, b));
	function x(D, V) {
		return function (tt) {
			var F = [],
				gt = -1,
				ct = 0,
				H = D.length,
				at,
				j,
				ut;
			for (tt instanceof Date || (tt = new Date(+tt)); ++gt < H; )
				D.charCodeAt(gt) === 37 &&
					(F.push(D.slice(ct, gt)),
					(j = kl[(at = D.charAt(++gt))]) != null
						? (at = D.charAt(++gt))
						: (j = at === 'e' ? ' ' : '0'),
					(ut = V[at]) && (at = ut(tt, j)),
					F.push(at),
					(ct = gt + 1));
			return F.push(D.slice(ct, gt)), F.join('');
		};
	}
	function k(D, V) {
		return function (tt) {
			var F = mr(1900, void 0, 1),
				gt = E(F, D, (tt += ''), 0),
				ct,
				H;
			if (gt != tt.length) return null;
			if ('Q' in F) return new Date(F.Q);
			if ('s' in F) return new Date(F.s * 1e3 + ('L' in F ? F.L : 0));
			if (
				(V && !('Z' in F) && (F.Z = 0),
				'p' in F && (F.H = (F.H % 12) + F.p * 12),
				F.m === void 0 && (F.m = 'q' in F ? F.q : 0),
				'V' in F)
			) {
				if (F.V < 1 || F.V > 53) return null;
				'w' in F || (F.w = 1),
					'Z' in F
						? ((ct = lu(mr(F.y, 0, 1))),
							(H = ct.getUTCDay()),
							(ct = H > 4 || H === 0 ? ni.ceil(ct) : ni(ct)),
							(ct = di.offset(ct, (F.V - 1) * 7)),
							(F.y = ct.getUTCFullYear()),
							(F.m = ct.getUTCMonth()),
							(F.d = ct.getUTCDate() + ((F.w + 6) % 7)))
						: ((ct = fu(mr(F.y, 0, 1))),
							(H = ct.getDay()),
							(ct = H > 4 || H === 0 ? ti.ceil(ct) : ti(ct)),
							(ct = fr.offset(ct, (F.V - 1) * 7)),
							(F.y = ct.getFullYear()),
							(F.m = ct.getMonth()),
							(F.d = ct.getDate() + ((F.w + 6) % 7)));
			} else
				('W' in F || 'U' in F) &&
					('w' in F || (F.w = 'u' in F ? F.u % 7 : 'W' in F ? 1 : 0),
					(H = 'Z' in F ? lu(mr(F.y, 0, 1)).getUTCDay() : fu(mr(F.y, 0, 1)).getDay()),
					(F.m = 0),
					(F.d =
						'W' in F ? ((F.w + 6) % 7) + F.W * 7 - ((H + 5) % 7) : F.w + F.U * 7 - ((H + 6) % 7)));
			return 'Z' in F ? ((F.H += (F.Z / 100) | 0), (F.M += F.Z % 100), lu(F)) : fu(F);
		};
	}
	function E(D, V, tt, F) {
		for (var gt = 0, ct = V.length, H = tt.length, at, j; gt < ct; ) {
			if (F >= H) return -1;
			if (((at = V.charCodeAt(gt++)), at === 37)) {
				if (
					((at = V.charAt(gt++)),
					(j = w[at in kl ? V.charAt(gt++) : at]),
					!j || (F = j(D, tt, F)) < 0)
				)
					return -1;
			} else if (at != tt.charCodeAt(F++)) return -1;
		}
		return F;
	}
	function N(D, V, tt) {
		var F = s.exec(V.slice(tt));
		return F ? ((D.p = f.get(F[0].toLowerCase())), tt + F[0].length) : -1;
	}
	function A(D, V, tt) {
		var F = d.exec(V.slice(tt));
		return F ? ((D.w = p.get(F[0].toLowerCase())), tt + F[0].length) : -1;
	}
	function $(D, V, tt) {
		var F = h.exec(V.slice(tt));
		return F ? ((D.w = l.get(F[0].toLowerCase())), tt + F[0].length) : -1;
	}
	function P(D, V, tt) {
		var F = y.exec(V.slice(tt));
		return F ? ((D.m = _.get(F[0].toLowerCase())), tt + F[0].length) : -1;
	}
	function C(D, V, tt) {
		var F = m.exec(V.slice(tt));
		return F ? ((D.m = g.get(F[0].toLowerCase())), tt + F[0].length) : -1;
	}
	function M(D, V, tt) {
		return E(D, n, V, tt);
	}
	function S(D, V, tt) {
		return E(D, e, V, tt);
	}
	function T(D, V, tt) {
		return E(D, r, V, tt);
	}
	function R(D) {
		return a[D.getDay()];
	}
	function O(D) {
		return o[D.getDay()];
	}
	function z(D) {
		return c[D.getMonth()];
	}
	function L(D) {
		return u[D.getMonth()];
	}
	function q(D) {
		return i[+(D.getHours() >= 12)];
	}
	function W(D) {
		return 1 + ~~(D.getMonth() / 3);
	}
	function I(D) {
		return a[D.getUTCDay()];
	}
	function X(D) {
		return o[D.getUTCDay()];
	}
	function U(D) {
		return c[D.getUTCMonth()];
	}
	function J(D) {
		return u[D.getUTCMonth()];
	}
	function B(D) {
		return i[+(D.getUTCHours() >= 12)];
	}
	function Z(D) {
		return 1 + ~~(D.getUTCMonth() / 3);
	}
	return {
		format: function (D) {
			var V = x((D += ''), v);
			return (
				(V.toString = function () {
					return D;
				}),
				V
			);
		},
		parse: function (D) {
			var V = k((D += ''), !1);
			return (
				(V.toString = function () {
					return D;
				}),
				V
			);
		},
		utcFormat: function (D) {
			var V = x((D += ''), b);
			return (
				(V.toString = function () {
					return D;
				}),
				V
			);
		},
		utcParse: function (D) {
			var V = k((D += ''), !0);
			return (
				(V.toString = function () {
					return D;
				}),
				V
			);
		}
	};
}
var kl = { '-': '', _: ' ', 0: '0' },
	St = /^\s*\d+/,
	Z5 = /^%/,
	Q5 = /[\\^$*+?|[\]().{}]/g;
function st(t, n, e) {
	var r = t < 0 ? '-' : '',
		i = (r ? -t : t) + '',
		o = i.length;
	return r + (o < e ? new Array(e - o + 1).join(n) + i : i);
}
function K5(t) {
	return t.replace(Q5, '\\$&');
}
function yr(t) {
	return new RegExp('^(?:' + t.map(K5).join('|') + ')', 'i');
}
function br(t) {
	return new Map(t.map((n, e) => [n.toLowerCase(), e]));
}
function J5(t, n, e) {
	var r = St.exec(n.slice(e, e + 1));
	return r ? ((t.w = +r[0]), e + r[0].length) : -1;
}
function t4(t, n, e) {
	var r = St.exec(n.slice(e, e + 1));
	return r ? ((t.u = +r[0]), e + r[0].length) : -1;
}
function n4(t, n, e) {
	var r = St.exec(n.slice(e, e + 2));
	return r ? ((t.U = +r[0]), e + r[0].length) : -1;
}
function e4(t, n, e) {
	var r = St.exec(n.slice(e, e + 2));
	return r ? ((t.V = +r[0]), e + r[0].length) : -1;
}
function r4(t, n, e) {
	var r = St.exec(n.slice(e, e + 2));
	return r ? ((t.W = +r[0]), e + r[0].length) : -1;
}
function Al(t, n, e) {
	var r = St.exec(n.slice(e, e + 4));
	return r ? ((t.y = +r[0]), e + r[0].length) : -1;
}
function El(t, n, e) {
	var r = St.exec(n.slice(e, e + 2));
	return r ? ((t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), e + r[0].length) : -1;
}
function i4(t, n, e) {
	var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
	return r ? ((t.Z = r[1] ? 0 : -(r[2] + (r[3] || '00'))), e + r[0].length) : -1;
}
function o4(t, n, e) {
	var r = St.exec(n.slice(e, e + 1));
	return r ? ((t.q = r[0] * 3 - 3), e + r[0].length) : -1;
}
function a4(t, n, e) {
	var r = St.exec(n.slice(e, e + 2));
	return r ? ((t.m = r[0] - 1), e + r[0].length) : -1;
}
function Nl(t, n, e) {
	var r = St.exec(n.slice(e, e + 2));
	return r ? ((t.d = +r[0]), e + r[0].length) : -1;
}
function u4(t, n, e) {
	var r = St.exec(n.slice(e, e + 3));
	return r ? ((t.m = 0), (t.d = +r[0]), e + r[0].length) : -1;
}
function Cl(t, n, e) {
	var r = St.exec(n.slice(e, e + 2));
	return r ? ((t.H = +r[0]), e + r[0].length) : -1;
}
function s4(t, n, e) {
	var r = St.exec(n.slice(e, e + 2));
	return r ? ((t.M = +r[0]), e + r[0].length) : -1;
}
function c4(t, n, e) {
	var r = St.exec(n.slice(e, e + 2));
	return r ? ((t.S = +r[0]), e + r[0].length) : -1;
}
function f4(t, n, e) {
	var r = St.exec(n.slice(e, e + 3));
	return r ? ((t.L = +r[0]), e + r[0].length) : -1;
}
function l4(t, n, e) {
	var r = St.exec(n.slice(e, e + 6));
	return r ? ((t.L = Math.floor(r[0] / 1e3)), e + r[0].length) : -1;
}
function h4(t, n, e) {
	var r = Z5.exec(n.slice(e, e + 1));
	return r ? e + r[0].length : -1;
}
function d4(t, n, e) {
	var r = St.exec(n.slice(e));
	return r ? ((t.Q = +r[0]), e + r[0].length) : -1;
}
function g4(t, n, e) {
	var r = St.exec(n.slice(e));
	return r ? ((t.s = +r[0]), e + r[0].length) : -1;
}
function Rl(t, n) {
	return st(t.getDate(), n, 2);
}
function p4(t, n) {
	return st(t.getHours(), n, 2);
}
function m4(t, n) {
	return st(t.getHours() % 12 || 12, n, 2);
}
function y4(t, n) {
	return st(1 + fr.count(vn(t), t), n, 3);
}
function o1(t, n) {
	return st(t.getMilliseconds(), n, 3);
}
function b4(t, n) {
	return o1(t, n) + '000';
}
function v4(t, n) {
	return st(t.getMonth() + 1, n, 2);
}
function _4(t, n) {
	return st(t.getMinutes(), n, 2);
}
function w4(t, n) {
	return st(t.getSeconds(), n, 2);
}
function x4(t) {
	var n = t.getDay();
	return n === 0 ? 7 : n;
}
function M4(t, n) {
	return st(rr.count(vn(t) - 1, t), n, 2);
}
function a1(t) {
	var n = t.getDay();
	return n >= 4 || n === 0 ? pe(t) : pe.ceil(t);
}
function $4(t, n) {
	return (t = a1(t)), st(pe.count(vn(t), t) + (vn(t).getDay() === 4), n, 2);
}
function T4(t) {
	return t.getDay();
}
function S4(t, n) {
	return st(ti.count(vn(t) - 1, t), n, 2);
}
function k4(t, n) {
	return st(t.getFullYear() % 100, n, 2);
}
function A4(t, n) {
	return (t = a1(t)), st(t.getFullYear() % 100, n, 2);
}
function E4(t, n) {
	return st(t.getFullYear() % 1e4, n, 4);
}
function N4(t, n) {
	var e = t.getDay();
	return (t = e >= 4 || e === 0 ? pe(t) : pe.ceil(t)), st(t.getFullYear() % 1e4, n, 4);
}
function C4(t) {
	var n = t.getTimezoneOffset();
	return (n > 0 ? '-' : ((n *= -1), '+')) + st((n / 60) | 0, '0', 2) + st(n % 60, '0', 2);
}
function Pl(t, n) {
	return st(t.getUTCDate(), n, 2);
}
function R4(t, n) {
	return st(t.getUTCHours(), n, 2);
}
function P4(t, n) {
	return st(t.getUTCHours() % 12 || 12, n, 2);
}
function I4(t, n) {
	return st(1 + di.count(_n(t), t), n, 3);
}
function u1(t, n) {
	return st(t.getUTCMilliseconds(), n, 3);
}
function z4(t, n) {
	return u1(t, n) + '000';
}
function D4(t, n) {
	return st(t.getUTCMonth() + 1, n, 2);
}
function O4(t, n) {
	return st(t.getUTCMinutes(), n, 2);
}
function F4(t, n) {
	return st(t.getUTCSeconds(), n, 2);
}
function L4(t) {
	var n = t.getUTCDay();
	return n === 0 ? 7 : n;
}
function B4(t, n) {
	return st(ir.count(_n(t) - 1, t), n, 2);
}
function s1(t) {
	var n = t.getUTCDay();
	return n >= 4 || n === 0 ? me(t) : me.ceil(t);
}
function U4(t, n) {
	return (t = s1(t)), st(me.count(_n(t), t) + (_n(t).getUTCDay() === 4), n, 2);
}
function q4(t) {
	return t.getUTCDay();
}
function Y4(t, n) {
	return st(ni.count(_n(t) - 1, t), n, 2);
}
function H4(t, n) {
	return st(t.getUTCFullYear() % 100, n, 2);
}
function X4(t, n) {
	return (t = s1(t)), st(t.getUTCFullYear() % 100, n, 2);
}
function G4(t, n) {
	return st(t.getUTCFullYear() % 1e4, n, 4);
}
function W4(t, n) {
	var e = t.getUTCDay();
	return (t = e >= 4 || e === 0 ? me(t) : me.ceil(t)), st(t.getUTCFullYear() % 1e4, n, 4);
}
function V4() {
	return '+0000';
}
function Il() {
	return '%';
}
function zl(t) {
	return +t;
}
function Dl(t) {
	return Math.floor(+t / 1e3);
}
var De, mc, c1, ba, yc;
f1({
	dateTime: '%x, %X',
	date: '%-m/%-d/%Y',
	time: '%-I:%M:%S %p',
	periods: ['AM', 'PM'],
	days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	months: [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	],
	shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
});
function f1(t) {
	return (
		(De = i1(t)), (mc = De.format), (c1 = De.parse), (ba = De.utcFormat), (yc = De.utcParse), De
	);
}
var l1 = '%Y-%m-%dT%H:%M:%S.%LZ';
function j4(t) {
	return t.toISOString();
}
var Z4 = Date.prototype.toISOString ? j4 : ba(l1);
function Q4(t) {
	var n = new Date(t);
	return isNaN(n) ? null : n;
}
var K4 = +new Date('2000-01-01T00:00:00.000Z') ? Q4 : yc(l1);
function J4(t) {
	return new Date(t);
}
function t8(t) {
	return t instanceof Date ? +t : +new Date(+t);
}
function bc(t, n, e, r, i, o, a, u, c, s) {
	var f = cc(),
		h = f.invert,
		l = f.domain,
		d = s('.%L'),
		p = s(':%S'),
		m = s('%I:%M'),
		g = s('%I %p'),
		y = s('%a %d'),
		_ = s('%b %d'),
		v = s('%B'),
		b = s('%Y');
	function w(x) {
		return (
			c(x) < x
				? d
				: u(x) < x
					? p
					: a(x) < x
						? m
						: o(x) < x
							? g
							: r(x) < x
								? i(x) < x
									? y
									: _
								: e(x) < x
									? v
									: b
		)(x);
	}
	return (
		(f.invert = function (x) {
			return new Date(h(x));
		}),
		(f.domain = function (x) {
			return arguments.length ? l(Array.from(x, t8)) : l().map(J4);
		}),
		(f.ticks = function (x) {
			var k = l();
			return t(k[0], k[k.length - 1], x ?? 10);
		}),
		(f.tickFormat = function (x, k) {
			return k == null ? w : s(k);
		}),
		(f.nice = function (x) {
			var k = l();
			return (
				(!x || typeof x.range != 'function') && (x = n(k[0], k[k.length - 1], x ?? 10)),
				x ? l(Fd(k, x)) : f
			);
		}),
		(f.copy = function () {
			return hi(f, bc(t, n, e, r, i, o, a, u, c, s));
		}),
		f
	);
}
function n8() {
	return on.apply(
		bc(e1, r1, vn, ma, rr, fr, ga, ha, Cn, mc).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]),
		arguments
	);
}
function e8() {
	return on.apply(
		bc(t1, n1, _n, ya, ir, di, pa, da, Cn, ba).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]),
		arguments
	);
}
function va() {
	var t = 0,
		n = 1,
		e,
		r,
		i,
		o,
		a = Ft,
		u = !1,
		c;
	function s(h) {
		return h == null || isNaN((h = +h))
			? c
			: a(i === 0 ? 0.5 : ((h = (o(h) - e) * i), u ? Math.max(0, Math.min(1, h)) : h));
	}
	(s.domain = function (h) {
		return arguments.length
			? (([t, n] = h), (e = o((t = +t))), (r = o((n = +n))), (i = e === r ? 0 : 1 / (r - e)), s)
			: [t, n];
	}),
		(s.clamp = function (h) {
			return arguments.length ? ((u = !!h), s) : u;
		}),
		(s.interpolator = function (h) {
			return arguments.length ? ((a = h), s) : a;
		});
	function f(h) {
		return function (l) {
			var d, p;
			return arguments.length ? (([d, p] = l), (a = h(d, p)), s) : [a(0), a(1)];
		};
	}
	return (
		(s.range = f(Wn)),
		(s.rangeRound = f(Qo)),
		(s.unknown = function (h) {
			return arguments.length ? ((c = h), s) : c;
		}),
		function (h) {
			return (o = h), (e = h(t)), (r = h(n)), (i = e === r ? 0 : 1 / (r - e)), s;
		}
	);
}
function jn(t, n) {
	return n.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown());
}
function h1() {
	var t = Vn(va()(Ft));
	return (
		(t.copy = function () {
			return jn(t, h1());
		}),
		zn.apply(t, arguments)
	);
}
function d1() {
	var t = fc(va()).domain([1, 10]);
	return (
		(t.copy = function () {
			return jn(t, d1()).base(t.base());
		}),
		zn.apply(t, arguments)
	);
}
function g1() {
	var t = lc(va());
	return (
		(t.copy = function () {
			return jn(t, g1()).constant(t.constant());
		}),
		zn.apply(t, arguments)
	);
}
function vc() {
	var t = hc(va());
	return (
		(t.copy = function () {
			return jn(t, vc()).exponent(t.exponent());
		}),
		zn.apply(t, arguments)
	);
}
function r8() {
	return vc.apply(null, arguments).exponent(0.5);
}
function p1() {
	var t = [],
		n = Ft;
	function e(r) {
		if (r != null && !isNaN((r = +r))) return n((Un(t, r, 1) - 1) / (t.length - 1));
	}
	return (
		(e.domain = function (r) {
			if (!arguments.length) return t.slice();
			t = [];
			for (let i of r) i != null && !isNaN((i = +i)) && t.push(i);
			return t.sort(yt), e;
		}),
		(e.interpolator = function (r) {
			return arguments.length ? ((n = r), e) : n;
		}),
		(e.range = function () {
			return t.map((r, i) => n(i / (t.length - 1)));
		}),
		(e.quantiles = function (r) {
			return Array.from({ length: r + 1 }, (i, o) => Br(t, o / r));
		}),
		(e.copy = function () {
			return p1(n).domain(t);
		}),
		zn.apply(e, arguments)
	);
}
function _a() {
	var t = 0,
		n = 0.5,
		e = 1,
		r = 1,
		i,
		o,
		a,
		u,
		c,
		s = Ft,
		f,
		h = !1,
		l;
	function d(m) {
		return isNaN((m = +m))
			? l
			: ((m = 0.5 + ((m = +f(m)) - o) * (r * m < r * o ? u : c)),
				s(h ? Math.max(0, Math.min(1, m)) : m));
	}
	(d.domain = function (m) {
		return arguments.length
			? (([t, n, e] = m),
				(i = f((t = +t))),
				(o = f((n = +n))),
				(a = f((e = +e))),
				(u = i === o ? 0 : 0.5 / (o - i)),
				(c = o === a ? 0 : 0.5 / (a - o)),
				(r = o < i ? -1 : 1),
				d)
			: [t, n, e];
	}),
		(d.clamp = function (m) {
			return arguments.length ? ((h = !!m), d) : h;
		}),
		(d.interpolator = function (m) {
			return arguments.length ? ((s = m), d) : s;
		});
	function p(m) {
		return function (g) {
			var y, _, v;
			return arguments.length ? (([y, _, v] = g), (s = r0(m, [y, _, v])), d) : [s(0), s(0.5), s(1)];
		};
	}
	return (
		(d.range = p(Wn)),
		(d.rangeRound = p(Qo)),
		(d.unknown = function (m) {
			return arguments.length ? ((l = m), d) : l;
		}),
		function (m) {
			return (
				(f = m),
				(i = m(t)),
				(o = m(n)),
				(a = m(e)),
				(u = i === o ? 0 : 0.5 / (o - i)),
				(c = o === a ? 0 : 0.5 / (a - o)),
				(r = o < i ? -1 : 1),
				d
			);
		}
	);
}
function m1() {
	var t = Vn(_a()(Ft));
	return (
		(t.copy = function () {
			return jn(t, m1());
		}),
		zn.apply(t, arguments)
	);
}
function y1() {
	var t = fc(_a()).domain([0.1, 1, 10]);
	return (
		(t.copy = function () {
			return jn(t, y1()).base(t.base());
		}),
		zn.apply(t, arguments)
	);
}
function b1() {
	var t = lc(_a());
	return (
		(t.copy = function () {
			return jn(t, b1()).constant(t.constant());
		}),
		zn.apply(t, arguments)
	);
}
function _c() {
	var t = hc(_a());
	return (
		(t.copy = function () {
			return jn(t, _c()).exponent(t.exponent());
		}),
		zn.apply(t, arguments)
	);
}
function i8() {
	return _c.apply(null, arguments).exponent(0.5);
}
function et(t) {
	for (var n = (t.length / 6) | 0, e = new Array(n), r = 0; r < n; )
		e[r] = '#' + t.slice(r * 6, ++r * 6);
	return e;
}
const v1 = et('1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf'),
	o8 = et('7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666'),
	a8 = et('1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666'),
	u8 = et('4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0'),
	s8 = et('a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928'),
	c8 = et('fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2'),
	f8 = et('b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc'),
	l8 = et('e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999'),
	h8 = et('66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3'),
	d8 = et('8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f'),
	g8 = et('4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab'),
	lt = (t) => Hh(t[t.length - 1]);
var _1 = new Array(3)
	.concat(
		'd8b365f5f5f55ab4ac',
		'a6611adfc27d80cdc1018571',
		'a6611adfc27df5f5f580cdc1018571',
		'8c510ad8b365f6e8c3c7eae55ab4ac01665e',
		'8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e',
		'8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e',
		'8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e',
		'5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30',
		'5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30'
	)
	.map(et);
const p8 = lt(_1);
var w1 = new Array(3)
	.concat(
		'af8dc3f7f7f77fbf7b',
		'7b3294c2a5cfa6dba0008837',
		'7b3294c2a5cff7f7f7a6dba0008837',
		'762a83af8dc3e7d4e8d9f0d37fbf7b1b7837',
		'762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837',
		'762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837',
		'762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837',
		'40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b',
		'40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b'
	)
	.map(et);
const m8 = lt(w1);
var x1 = new Array(3)
	.concat(
		'e9a3c9f7f7f7a1d76a',
		'd01c8bf1b6dab8e1864dac26',
		'd01c8bf1b6daf7f7f7b8e1864dac26',
		'c51b7de9a3c9fde0efe6f5d0a1d76a4d9221',
		'c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221',
		'c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221',
		'c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221',
		'8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419',
		'8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419'
	)
	.map(et);
const y8 = lt(x1);
var M1 = new Array(3)
	.concat(
		'998ec3f7f7f7f1a340',
		'5e3c99b2abd2fdb863e66101',
		'5e3c99b2abd2f7f7f7fdb863e66101',
		'542788998ec3d8daebfee0b6f1a340b35806',
		'542788998ec3d8daebf7f7f7fee0b6f1a340b35806',
		'5427888073acb2abd2d8daebfee0b6fdb863e08214b35806',
		'5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806',
		'2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08',
		'2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08'
	)
	.map(et);
const b8 = lt(M1);
var $1 = new Array(3)
	.concat(
		'ef8a62f7f7f767a9cf',
		'ca0020f4a58292c5de0571b0',
		'ca0020f4a582f7f7f792c5de0571b0',
		'b2182bef8a62fddbc7d1e5f067a9cf2166ac',
		'b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac',
		'b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac',
		'b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac',
		'67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061',
		'67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061'
	)
	.map(et);
const v8 = lt($1);
var T1 = new Array(3)
	.concat(
		'ef8a62ffffff999999',
		'ca0020f4a582bababa404040',
		'ca0020f4a582ffffffbababa404040',
		'b2182bef8a62fddbc7e0e0e09999994d4d4d',
		'b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d',
		'b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d',
		'b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d',
		'67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a',
		'67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a'
	)
	.map(et);
const _8 = lt(T1);
var S1 = new Array(3)
	.concat(
		'fc8d59ffffbf91bfdb',
		'd7191cfdae61abd9e92c7bb6',
		'd7191cfdae61ffffbfabd9e92c7bb6',
		'd73027fc8d59fee090e0f3f891bfdb4575b4',
		'd73027fc8d59fee090ffffbfe0f3f891bfdb4575b4',
		'd73027f46d43fdae61fee090e0f3f8abd9e974add14575b4',
		'd73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4',
		'a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695',
		'a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695'
	)
	.map(et);
const w8 = lt(S1);
var k1 = new Array(3)
	.concat(
		'fc8d59ffffbf91cf60',
		'd7191cfdae61a6d96a1a9641',
		'd7191cfdae61ffffbfa6d96a1a9641',
		'd73027fc8d59fee08bd9ef8b91cf601a9850',
		'd73027fc8d59fee08bffffbfd9ef8b91cf601a9850',
		'd73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850',
		'd73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850',
		'a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837',
		'a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837'
	)
	.map(et);
const x8 = lt(k1);
var A1 = new Array(3)
	.concat(
		'fc8d59ffffbf99d594',
		'd7191cfdae61abdda42b83ba',
		'd7191cfdae61ffffbfabdda42b83ba',
		'd53e4ffc8d59fee08be6f59899d5943288bd',
		'd53e4ffc8d59fee08bffffbfe6f59899d5943288bd',
		'd53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd',
		'd53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd',
		'9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2',
		'9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2'
	)
	.map(et);
const M8 = lt(A1);
var E1 = new Array(3)
	.concat(
		'e5f5f999d8c92ca25f',
		'edf8fbb2e2e266c2a4238b45',
		'edf8fbb2e2e266c2a42ca25f006d2c',
		'edf8fbccece699d8c966c2a42ca25f006d2c',
		'edf8fbccece699d8c966c2a441ae76238b45005824',
		'f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824',
		'f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b'
	)
	.map(et);
const $8 = lt(E1);
var N1 = new Array(3)
	.concat(
		'e0ecf49ebcda8856a7',
		'edf8fbb3cde38c96c688419d',
		'edf8fbb3cde38c96c68856a7810f7c',
		'edf8fbbfd3e69ebcda8c96c68856a7810f7c',
		'edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b',
		'f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b',
		'f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b'
	)
	.map(et);
const T8 = lt(N1);
var C1 = new Array(3)
	.concat(
		'e0f3dba8ddb543a2ca',
		'f0f9e8bae4bc7bccc42b8cbe',
		'f0f9e8bae4bc7bccc443a2ca0868ac',
		'f0f9e8ccebc5a8ddb57bccc443a2ca0868ac',
		'f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e',
		'f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e',
		'f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081'
	)
	.map(et);
const S8 = lt(C1);
var R1 = new Array(3)
	.concat(
		'fee8c8fdbb84e34a33',
		'fef0d9fdcc8afc8d59d7301f',
		'fef0d9fdcc8afc8d59e34a33b30000',
		'fef0d9fdd49efdbb84fc8d59e34a33b30000',
		'fef0d9fdd49efdbb84fc8d59ef6548d7301f990000',
		'fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000',
		'fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000'
	)
	.map(et);
const k8 = lt(R1);
var P1 = new Array(3)
	.concat(
		'ece2f0a6bddb1c9099',
		'f6eff7bdc9e167a9cf02818a',
		'f6eff7bdc9e167a9cf1c9099016c59',
		'f6eff7d0d1e6a6bddb67a9cf1c9099016c59',
		'f6eff7d0d1e6a6bddb67a9cf3690c002818a016450',
		'fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450',
		'fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636'
	)
	.map(et);
const A8 = lt(P1);
var I1 = new Array(3)
	.concat(
		'ece7f2a6bddb2b8cbe',
		'f1eef6bdc9e174a9cf0570b0',
		'f1eef6bdc9e174a9cf2b8cbe045a8d',
		'f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d',
		'f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b',
		'fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b',
		'fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858'
	)
	.map(et);
const E8 = lt(I1);
var z1 = new Array(3)
	.concat(
		'e7e1efc994c7dd1c77',
		'f1eef6d7b5d8df65b0ce1256',
		'f1eef6d7b5d8df65b0dd1c77980043',
		'f1eef6d4b9dac994c7df65b0dd1c77980043',
		'f1eef6d4b9dac994c7df65b0e7298ace125691003f',
		'f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f',
		'f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f'
	)
	.map(et);
const N8 = lt(z1);
var D1 = new Array(3)
	.concat(
		'fde0ddfa9fb5c51b8a',
		'feebe2fbb4b9f768a1ae017e',
		'feebe2fbb4b9f768a1c51b8a7a0177',
		'feebe2fcc5c0fa9fb5f768a1c51b8a7a0177',
		'feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177',
		'fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177',
		'fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a'
	)
	.map(et);
const C8 = lt(D1);
var O1 = new Array(3)
	.concat(
		'edf8b17fcdbb2c7fb8',
		'ffffcca1dab441b6c4225ea8',
		'ffffcca1dab441b6c42c7fb8253494',
		'ffffccc7e9b47fcdbb41b6c42c7fb8253494',
		'ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84',
		'ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84',
		'ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58'
	)
	.map(et);
const R8 = lt(O1);
var F1 = new Array(3)
	.concat(
		'f7fcb9addd8e31a354',
		'ffffccc2e69978c679238443',
		'ffffccc2e69978c67931a354006837',
		'ffffccd9f0a3addd8e78c67931a354006837',
		'ffffccd9f0a3addd8e78c67941ab5d238443005a32',
		'ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32',
		'ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529'
	)
	.map(et);
const P8 = lt(F1);
var L1 = new Array(3)
	.concat(
		'fff7bcfec44fd95f0e',
		'ffffd4fed98efe9929cc4c02',
		'ffffd4fed98efe9929d95f0e993404',
		'ffffd4fee391fec44ffe9929d95f0e993404',
		'ffffd4fee391fec44ffe9929ec7014cc4c028c2d04',
		'ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04',
		'ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506'
	)
	.map(et);
const I8 = lt(L1);
var B1 = new Array(3)
	.concat(
		'ffeda0feb24cf03b20',
		'ffffb2fecc5cfd8d3ce31a1c',
		'ffffb2fecc5cfd8d3cf03b20bd0026',
		'ffffb2fed976feb24cfd8d3cf03b20bd0026',
		'ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026',
		'ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026',
		'ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026'
	)
	.map(et);
const z8 = lt(B1);
var U1 = new Array(3)
	.concat(
		'deebf79ecae13182bd',
		'eff3ffbdd7e76baed62171b5',
		'eff3ffbdd7e76baed63182bd08519c',
		'eff3ffc6dbef9ecae16baed63182bd08519c',
		'eff3ffc6dbef9ecae16baed64292c62171b5084594',
		'f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594',
		'f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b'
	)
	.map(et);
const D8 = lt(U1);
var q1 = new Array(3)
	.concat(
		'e5f5e0a1d99b31a354',
		'edf8e9bae4b374c476238b45',
		'edf8e9bae4b374c47631a354006d2c',
		'edf8e9c7e9c0a1d99b74c47631a354006d2c',
		'edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32',
		'f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32',
		'f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b'
	)
	.map(et);
const O8 = lt(q1);
var Y1 = new Array(3)
	.concat(
		'f0f0f0bdbdbd636363',
		'f7f7f7cccccc969696525252',
		'f7f7f7cccccc969696636363252525',
		'f7f7f7d9d9d9bdbdbd969696636363252525',
		'f7f7f7d9d9d9bdbdbd969696737373525252252525',
		'fffffff0f0f0d9d9d9bdbdbd969696737373525252252525',
		'fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000'
	)
	.map(et);
const F8 = lt(Y1);
var H1 = new Array(3)
	.concat(
		'efedf5bcbddc756bb1',
		'f2f0f7cbc9e29e9ac86a51a3',
		'f2f0f7cbc9e29e9ac8756bb154278f',
		'f2f0f7dadaebbcbddc9e9ac8756bb154278f',
		'f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486',
		'fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486',
		'fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d'
	)
	.map(et);
const L8 = lt(H1);
var X1 = new Array(3)
	.concat(
		'fee0d2fc9272de2d26',
		'fee5d9fcae91fb6a4acb181d',
		'fee5d9fcae91fb6a4ade2d26a50f15',
		'fee5d9fcbba1fc9272fb6a4ade2d26a50f15',
		'fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d',
		'fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d',
		'fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d'
	)
	.map(et);
const B8 = lt(X1);
var G1 = new Array(3)
	.concat(
		'fee6cefdae6be6550d',
		'feeddefdbe85fd8d3cd94701',
		'feeddefdbe85fd8d3ce6550da63603',
		'feeddefdd0a2fdae6bfd8d3ce6550da63603',
		'feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04',
		'fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04',
		'fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704'
	)
	.map(et);
const U8 = lt(G1);
function q8(t) {
	return (
		(t = Math.max(0, Math.min(1, t))),
		'rgb(' +
			Math.max(
				0,
				Math.min(
					255,
					Math.round(
						-4.54 - t * (35.34 - t * (2381.73 - t * (6402.7 - t * (7024.72 - t * 2710.57))))
					)
				)
			) +
			', ' +
			Math.max(
				0,
				Math.min(
					255,
					Math.round(32.49 + t * (170.73 + t * (52.82 - t * (131.46 - t * (176.58 - t * 67.37)))))
				)
			) +
			', ' +
			Math.max(
				0,
				Math.min(
					255,
					Math.round(
						81.24 + t * (442.36 - t * (2482.43 - t * (6167.24 - t * (6614.94 - t * 2475.67))))
					)
				)
			) +
			')'
	);
}
const Y8 = Ko(fn(300, 0.5, 0), fn(-240, 0.5, 1));
var H8 = Ko(fn(-100, 0.75, 0.35), fn(80, 1.5, 0.8)),
	X8 = Ko(fn(260, 0.75, 0.35), fn(80, 1.5, 0.8)),
	Ii = fn();
function G8(t) {
	(t < 0 || t > 1) && (t -= Math.floor(t));
	var n = Math.abs(t - 0.5);
	return (Ii.h = 360 * t - 100), (Ii.s = 1.5 - 1.5 * n), (Ii.l = 0.8 - 0.9 * n), Ii + '';
}
var zi = Ve(),
	W8 = Math.PI / 3,
	V8 = (Math.PI * 2) / 3;
function j8(t) {
	var n;
	return (
		(t = (0.5 - t) * Math.PI),
		(zi.r = 255 * (n = Math.sin(t)) * n),
		(zi.g = 255 * (n = Math.sin(t + W8)) * n),
		(zi.b = 255 * (n = Math.sin(t + V8)) * n),
		zi + ''
	);
}
function Z8(t) {
	return (
		(t = Math.max(0, Math.min(1, t))),
		'rgb(' +
			Math.max(
				0,
				Math.min(
					255,
					Math.round(
						34.61 + t * (1172.33 - t * (10793.56 - t * (33300.12 - t * (38394.49 - t * 14825.05))))
					)
				)
			) +
			', ' +
			Math.max(
				0,
				Math.min(
					255,
					Math.round(
						23.31 + t * (557.33 + t * (1225.33 - t * (3574.96 - t * (1073.77 + t * 707.56))))
					)
				)
			) +
			', ' +
			Math.max(
				0,
				Math.min(
					255,
					Math.round(
						27.2 + t * (3211.1 - t * (15327.97 - t * (27814 - t * (22569.18 - t * 6838.66))))
					)
				)
			) +
			')'
	);
}
function wa(t) {
	var n = t.length;
	return function (e) {
		return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))];
	};
}
const Q8 = wa(
	et(
		'44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725'
	)
);
var K8 = wa(
		et(
			'00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf'
		)
	),
	J8 = wa(
		et(
			'00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4'
		)
	),
	tx = wa(
		et(
			'0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921'
		)
	);
function nt(t) {
	return function () {
		return t;
	};
}
const Ol = Math.abs,
	Ct = Math.atan2,
	Sn = Math.cos,
	nx = Math.max,
	He = Math.min,
	Gt = Math.sin,
	dt = Math.sqrt,
	Rt = 1e-12,
	Hn = Math.PI,
	Do = Hn / 2,
	Bn = 2 * Hn;
function ex(t) {
	return t > 1 ? 0 : t < -1 ? Hn : Math.acos(t);
}
function Fl(t) {
	return t >= 1 ? Do : t <= -1 ? -Do : Math.asin(t);
}
function gi(t) {
	let n = 3;
	return (
		(t.digits = function (e) {
			if (!arguments.length) return n;
			if (e == null) n = null;
			else {
				const r = Math.floor(e);
				if (!(r >= 0)) throw new RangeError(`invalid digits: ${e}`);
				n = r;
			}
			return t;
		}),
		() => new oi(n)
	);
}
function rx(t) {
	return t.innerRadius;
}
function ix(t) {
	return t.outerRadius;
}
function ox(t) {
	return t.startAngle;
}
function ax(t) {
	return t.endAngle;
}
function ux(t) {
	return t && t.padAngle;
}
function sx(t, n, e, r, i, o, a, u) {
	var c = e - t,
		s = r - n,
		f = a - i,
		h = u - o,
		l = h * c - f * s;
	if (!(l * l < Rt)) return (l = (f * (n - o) - h * (t - i)) / l), [t + l * c, n + l * s];
}
function Di(t, n, e, r, i, o, a) {
	var u = t - e,
		c = n - r,
		s = (a ? o : -o) / dt(u * u + c * c),
		f = s * c,
		h = -s * u,
		l = t + f,
		d = n + h,
		p = e + f,
		m = r + h,
		g = (l + p) / 2,
		y = (d + m) / 2,
		_ = p - l,
		v = m - d,
		b = _ * _ + v * v,
		w = i - o,
		x = l * m - p * d,
		k = (v < 0 ? -1 : 1) * dt(nx(0, w * w * b - x * x)),
		E = (x * v - _ * k) / b,
		N = (-x * _ - v * k) / b,
		A = (x * v + _ * k) / b,
		$ = (-x * _ + v * k) / b,
		P = E - g,
		C = N - y,
		M = A - g,
		S = $ - y;
	return (
		P * P + C * C > M * M + S * S && ((E = A), (N = $)),
		{ cx: E, cy: N, x01: -f, y01: -h, x11: E * (i / w - 1), y11: N * (i / w - 1) }
	);
}
function cx() {
	var t = rx,
		n = ix,
		e = nt(0),
		r = null,
		i = ox,
		o = ax,
		a = ux,
		u = null,
		c = gi(s);
	function s() {
		var f,
			h,
			l = +t.apply(this, arguments),
			d = +n.apply(this, arguments),
			p = i.apply(this, arguments) - Do,
			m = o.apply(this, arguments) - Do,
			g = Ol(m - p),
			y = m > p;
		if ((u || (u = f = c()), d < l && ((h = d), (d = l), (l = h)), !(d > Rt))) u.moveTo(0, 0);
		else if (g > Bn - Rt)
			u.moveTo(d * Sn(p), d * Gt(p)),
				u.arc(0, 0, d, p, m, !y),
				l > Rt && (u.moveTo(l * Sn(m), l * Gt(m)), u.arc(0, 0, l, m, p, y));
		else {
			var _ = p,
				v = m,
				b = p,
				w = m,
				x = g,
				k = g,
				E = a.apply(this, arguments) / 2,
				N = E > Rt && (r ? +r.apply(this, arguments) : dt(l * l + d * d)),
				A = He(Ol(d - l) / 2, +e.apply(this, arguments)),
				$ = A,
				P = A,
				C,
				M;
			if (N > Rt) {
				var S = Fl((N / l) * Gt(E)),
					T = Fl((N / d) * Gt(E));
				(x -= S * 2) > Rt
					? ((S *= y ? 1 : -1), (b += S), (w -= S))
					: ((x = 0), (b = w = (p + m) / 2)),
					(k -= T * 2) > Rt
						? ((T *= y ? 1 : -1), (_ += T), (v -= T))
						: ((k = 0), (_ = v = (p + m) / 2));
			}
			var R = d * Sn(_),
				O = d * Gt(_),
				z = l * Sn(w),
				L = l * Gt(w);
			if (A > Rt) {
				var q = d * Sn(v),
					W = d * Gt(v),
					I = l * Sn(b),
					X = l * Gt(b),
					U;
				if (g < Hn)
					if ((U = sx(R, O, I, X, q, W, z, L))) {
						var J = R - U[0],
							B = O - U[1],
							Z = q - U[0],
							D = W - U[1],
							V = 1 / Gt(ex((J * Z + B * D) / (dt(J * J + B * B) * dt(Z * Z + D * D))) / 2),
							tt = dt(U[0] * U[0] + U[1] * U[1]);
						($ = He(A, (l - tt) / (V - 1))), (P = He(A, (d - tt) / (V + 1)));
					} else $ = P = 0;
			}
			k > Rt
				? P > Rt
					? ((C = Di(I, X, R, O, d, P, y)),
						(M = Di(q, W, z, L, d, P, y)),
						u.moveTo(C.cx + C.x01, C.cy + C.y01),
						P < A
							? u.arc(C.cx, C.cy, P, Ct(C.y01, C.x01), Ct(M.y01, M.x01), !y)
							: (u.arc(C.cx, C.cy, P, Ct(C.y01, C.x01), Ct(C.y11, C.x11), !y),
								u.arc(0, 0, d, Ct(C.cy + C.y11, C.cx + C.x11), Ct(M.cy + M.y11, M.cx + M.x11), !y),
								u.arc(M.cx, M.cy, P, Ct(M.y11, M.x11), Ct(M.y01, M.x01), !y)))
					: (u.moveTo(R, O), u.arc(0, 0, d, _, v, !y))
				: u.moveTo(R, O),
				!(l > Rt) || !(x > Rt)
					? u.lineTo(z, L)
					: $ > Rt
						? ((C = Di(z, L, q, W, l, -$, y)),
							(M = Di(R, O, I, X, l, -$, y)),
							u.lineTo(C.cx + C.x01, C.cy + C.y01),
							$ < A
								? u.arc(C.cx, C.cy, $, Ct(C.y01, C.x01), Ct(M.y01, M.x01), !y)
								: (u.arc(C.cx, C.cy, $, Ct(C.y01, C.x01), Ct(C.y11, C.x11), !y),
									u.arc(0, 0, l, Ct(C.cy + C.y11, C.cx + C.x11), Ct(M.cy + M.y11, M.cx + M.x11), y),
									u.arc(M.cx, M.cy, $, Ct(M.y11, M.x11), Ct(M.y01, M.x01), !y)))
						: u.arc(0, 0, l, w, b, y);
		}
		if ((u.closePath(), f)) return (u = null), f + '' || null;
	}
	return (
		(s.centroid = function () {
			var f = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
				h = (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 - Hn / 2;
			return [Sn(h) * f, Gt(h) * f];
		}),
		(s.innerRadius = function (f) {
			return arguments.length ? ((t = typeof f == 'function' ? f : nt(+f)), s) : t;
		}),
		(s.outerRadius = function (f) {
			return arguments.length ? ((n = typeof f == 'function' ? f : nt(+f)), s) : n;
		}),
		(s.cornerRadius = function (f) {
			return arguments.length ? ((e = typeof f == 'function' ? f : nt(+f)), s) : e;
		}),
		(s.padRadius = function (f) {
			return arguments.length
				? ((r = f == null ? null : typeof f == 'function' ? f : nt(+f)), s)
				: r;
		}),
		(s.startAngle = function (f) {
			return arguments.length ? ((i = typeof f == 'function' ? f : nt(+f)), s) : i;
		}),
		(s.endAngle = function (f) {
			return arguments.length ? ((o = typeof f == 'function' ? f : nt(+f)), s) : o;
		}),
		(s.padAngle = function (f) {
			return arguments.length ? ((a = typeof f == 'function' ? f : nt(+f)), s) : a;
		}),
		(s.context = function (f) {
			return arguments.length ? ((u = f ?? null), s) : u;
		}),
		s
	);
}
var fx = Array.prototype.slice;
function xa(t) {
	return typeof t == 'object' && 'length' in t ? t : Array.from(t);
}
function W1(t) {
	this._context = t;
}
W1.prototype = {
	areaStart: function () {
		this._line = 0;
	},
	areaEnd: function () {
		this._line = NaN;
	},
	lineStart: function () {
		this._point = 0;
	},
	lineEnd: function () {
		(this._line || (this._line !== 0 && this._point === 1)) && this._context.closePath(),
			(this._line = 1 - this._line);
	},
	point: function (t, n) {
		switch (((t = +t), (n = +n), this._point)) {
			case 0:
				(this._point = 1), this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
				break;
			case 1:
				this._point = 2;
			default:
				this._context.lineTo(t, n);
				break;
		}
	}
};
function Ma(t) {
	return new W1(t);
}
function wc(t) {
	return t[0];
}
function xc(t) {
	return t[1];
}
function Mc(t, n) {
	var e = nt(!0),
		r = null,
		i = Ma,
		o = null,
		a = gi(u);
	(t = typeof t == 'function' ? t : t === void 0 ? wc : nt(t)),
		(n = typeof n == 'function' ? n : n === void 0 ? xc : nt(n));
	function u(c) {
		var s,
			f = (c = xa(c)).length,
			h,
			l = !1,
			d;
		for (r == null && (o = i((d = a()))), s = 0; s <= f; ++s)
			!(s < f && e((h = c[s]), s, c)) === l && ((l = !l) ? o.lineStart() : o.lineEnd()),
				l && o.point(+t(h, s, c), +n(h, s, c));
		if (d) return (o = null), d + '' || null;
	}
	return (
		(u.x = function (c) {
			return arguments.length ? ((t = typeof c == 'function' ? c : nt(+c)), u) : t;
		}),
		(u.y = function (c) {
			return arguments.length ? ((n = typeof c == 'function' ? c : nt(+c)), u) : n;
		}),
		(u.defined = function (c) {
			return arguments.length ? ((e = typeof c == 'function' ? c : nt(!!c)), u) : e;
		}),
		(u.curve = function (c) {
			return arguments.length ? ((i = c), r != null && (o = i(r)), u) : i;
		}),
		(u.context = function (c) {
			return arguments.length ? (c == null ? (r = o = null) : (o = i((r = c))), u) : r;
		}),
		u
	);
}
function V1(t, n, e) {
	var r = null,
		i = nt(!0),
		o = null,
		a = Ma,
		u = null,
		c = gi(s);
	(t = typeof t == 'function' ? t : t === void 0 ? wc : nt(+t)),
		(n = typeof n == 'function' ? n : nt(n === void 0 ? 0 : +n)),
		(e = typeof e == 'function' ? e : e === void 0 ? xc : nt(+e));
	function s(h) {
		var l,
			d,
			p,
			m = (h = xa(h)).length,
			g,
			y = !1,
			_,
			v = new Array(m),
			b = new Array(m);
		for (o == null && (u = a((_ = c()))), l = 0; l <= m; ++l) {
			if (!(l < m && i((g = h[l]), l, h)) === y)
				if ((y = !y)) (d = l), u.areaStart(), u.lineStart();
				else {
					for (u.lineEnd(), u.lineStart(), p = l - 1; p >= d; --p) u.point(v[p], b[p]);
					u.lineEnd(), u.areaEnd();
				}
			y &&
				((v[l] = +t(g, l, h)),
				(b[l] = +n(g, l, h)),
				u.point(r ? +r(g, l, h) : v[l], e ? +e(g, l, h) : b[l]));
		}
		if (_) return (u = null), _ + '' || null;
	}
	function f() {
		return Mc().defined(i).curve(a).context(o);
	}
	return (
		(s.x = function (h) {
			return arguments.length ? ((t = typeof h == 'function' ? h : nt(+h)), (r = null), s) : t;
		}),
		(s.x0 = function (h) {
			return arguments.length ? ((t = typeof h == 'function' ? h : nt(+h)), s) : t;
		}),
		(s.x1 = function (h) {
			return arguments.length
				? ((r = h == null ? null : typeof h == 'function' ? h : nt(+h)), s)
				: r;
		}),
		(s.y = function (h) {
			return arguments.length ? ((n = typeof h == 'function' ? h : nt(+h)), (e = null), s) : n;
		}),
		(s.y0 = function (h) {
			return arguments.length ? ((n = typeof h == 'function' ? h : nt(+h)), s) : n;
		}),
		(s.y1 = function (h) {
			return arguments.length
				? ((e = h == null ? null : typeof h == 'function' ? h : nt(+h)), s)
				: e;
		}),
		(s.lineX0 = s.lineY0 =
			function () {
				return f().x(t).y(n);
			}),
		(s.lineY1 = function () {
			return f().x(t).y(e);
		}),
		(s.lineX1 = function () {
			return f().x(r).y(n);
		}),
		(s.defined = function (h) {
			return arguments.length ? ((i = typeof h == 'function' ? h : nt(!!h)), s) : i;
		}),
		(s.curve = function (h) {
			return arguments.length ? ((a = h), o != null && (u = a(o)), s) : a;
		}),
		(s.context = function (h) {
			return arguments.length ? (h == null ? (o = u = null) : (u = a((o = h))), s) : o;
		}),
		s
	);
}
function lx(t, n) {
	return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function hx(t) {
	return t;
}
function dx() {
	var t = hx,
		n = lx,
		e = null,
		r = nt(0),
		i = nt(Bn),
		o = nt(0);
	function a(u) {
		var c,
			s = (u = xa(u)).length,
			f,
			h,
			l = 0,
			d = new Array(s),
			p = new Array(s),
			m = +r.apply(this, arguments),
			g = Math.min(Bn, Math.max(-Bn, i.apply(this, arguments) - m)),
			y,
			_ = Math.min(Math.abs(g) / s, o.apply(this, arguments)),
			v = _ * (g < 0 ? -1 : 1),
			b;
		for (c = 0; c < s; ++c) (b = p[(d[c] = c)] = +t(u[c], c, u)) > 0 && (l += b);
		for (
			n != null
				? d.sort(function (w, x) {
						return n(p[w], p[x]);
					})
				: e != null &&
					d.sort(function (w, x) {
						return e(u[w], u[x]);
					}),
				c = 0,
				h = l ? (g - s * v) / l : 0;
			c < s;
			++c, m = y
		)
			(f = d[c]),
				(b = p[f]),
				(y = m + (b > 0 ? b * h : 0) + v),
				(p[f] = { data: u[f], index: c, value: b, startAngle: m, endAngle: y, padAngle: _ });
		return p;
	}
	return (
		(a.value = function (u) {
			return arguments.length ? ((t = typeof u == 'function' ? u : nt(+u)), a) : t;
		}),
		(a.sortValues = function (u) {
			return arguments.length ? ((n = u), (e = null), a) : n;
		}),
		(a.sort = function (u) {
			return arguments.length ? ((e = u), (n = null), a) : e;
		}),
		(a.startAngle = function (u) {
			return arguments.length ? ((r = typeof u == 'function' ? u : nt(+u)), a) : r;
		}),
		(a.endAngle = function (u) {
			return arguments.length ? ((i = typeof u == 'function' ? u : nt(+u)), a) : i;
		}),
		(a.padAngle = function (u) {
			return arguments.length ? ((o = typeof u == 'function' ? u : nt(+u)), a) : o;
		}),
		a
	);
}
var j1 = $c(Ma);
function Z1(t) {
	this._curve = t;
}
Z1.prototype = {
	areaStart: function () {
		this._curve.areaStart();
	},
	areaEnd: function () {
		this._curve.areaEnd();
	},
	lineStart: function () {
		this._curve.lineStart();
	},
	lineEnd: function () {
		this._curve.lineEnd();
	},
	point: function (t, n) {
		this._curve.point(n * Math.sin(t), n * -Math.cos(t));
	}
};
function $c(t) {
	function n(e) {
		return new Z1(t(e));
	}
	return (n._curve = t), n;
}
function Nr(t) {
	var n = t.curve;
	return (
		(t.angle = t.x),
		delete t.x,
		(t.radius = t.y),
		delete t.y,
		(t.curve = function (e) {
			return arguments.length ? n($c(e)) : n()._curve;
		}),
		t
	);
}
function Ll() {
	return Nr(Mc().curve(j1));
}
function Bl() {
	var t = V1().curve(j1),
		n = t.curve,
		e = t.lineX0,
		r = t.lineX1,
		i = t.lineY0,
		o = t.lineY1;
	return (
		(t.angle = t.x),
		delete t.x,
		(t.startAngle = t.x0),
		delete t.x0,
		(t.endAngle = t.x1),
		delete t.x1,
		(t.radius = t.y),
		delete t.y,
		(t.innerRadius = t.y0),
		delete t.y0,
		(t.outerRadius = t.y1),
		delete t.y1,
		(t.lineStartAngle = function () {
			return Nr(e());
		}),
		delete t.lineX0,
		(t.lineEndAngle = function () {
			return Nr(r());
		}),
		delete t.lineX1,
		(t.lineInnerRadius = function () {
			return Nr(i());
		}),
		delete t.lineY0,
		(t.lineOuterRadius = function () {
			return Nr(o());
		}),
		delete t.lineY1,
		(t.curve = function (a) {
			return arguments.length ? n($c(a)) : n()._curve;
		}),
		t
	);
}
function Cr(t, n) {
	return [(n = +n) * Math.cos((t -= Math.PI / 2)), n * Math.sin(t)];
}
class Q1 {
	constructor(n, e) {
		(this._context = n), (this._x = e);
	}
	areaStart() {
		this._line = 0;
	}
	areaEnd() {
		this._line = NaN;
	}
	lineStart() {
		this._point = 0;
	}
	lineEnd() {
		(this._line || (this._line !== 0 && this._point === 1)) && this._context.closePath(),
			(this._line = 1 - this._line);
	}
	point(n, e) {
		switch (((n = +n), (e = +e), this._point)) {
			case 0: {
				(this._point = 1), this._line ? this._context.lineTo(n, e) : this._context.moveTo(n, e);
				break;
			}
			case 1:
				this._point = 2;
			default: {
				this._x
					? this._context.bezierCurveTo(
							(this._x0 = (this._x0 + n) / 2),
							this._y0,
							this._x0,
							e,
							n,
							e
						)
					: this._context.bezierCurveTo(
							this._x0,
							(this._y0 = (this._y0 + e) / 2),
							n,
							this._y0,
							n,
							e
						);
				break;
			}
		}
		(this._x0 = n), (this._y0 = e);
	}
}
class gx {
	constructor(n) {
		this._context = n;
	}
	lineStart() {
		this._point = 0;
	}
	lineEnd() {}
	point(n, e) {
		if (((n = +n), (e = +e), this._point === 0)) this._point = 1;
		else {
			const r = Cr(this._x0, this._y0),
				i = Cr(this._x0, (this._y0 = (this._y0 + e) / 2)),
				o = Cr(n, this._y0),
				a = Cr(n, e);
			this._context.moveTo(...r), this._context.bezierCurveTo(...i, ...o, ...a);
		}
		(this._x0 = n), (this._y0 = e);
	}
}
function K1(t) {
	return new Q1(t, !0);
}
function J1(t) {
	return new Q1(t, !1);
}
function px(t) {
	return new gx(t);
}
function mx(t) {
	return t.source;
}
function yx(t) {
	return t.target;
}
function $a(t) {
	let n = mx,
		e = yx,
		r = wc,
		i = xc,
		o = null,
		a = null,
		u = gi(c);
	function c() {
		let s;
		const f = fx.call(arguments),
			h = n.apply(this, f),
			l = e.apply(this, f);
		if (
			(o == null && (a = t((s = u()))),
			a.lineStart(),
			(f[0] = h),
			a.point(+r.apply(this, f), +i.apply(this, f)),
			(f[0] = l),
			a.point(+r.apply(this, f), +i.apply(this, f)),
			a.lineEnd(),
			s)
		)
			return (a = null), s + '' || null;
	}
	return (
		(c.source = function (s) {
			return arguments.length ? ((n = s), c) : n;
		}),
		(c.target = function (s) {
			return arguments.length ? ((e = s), c) : e;
		}),
		(c.x = function (s) {
			return arguments.length ? ((r = typeof s == 'function' ? s : nt(+s)), c) : r;
		}),
		(c.y = function (s) {
			return arguments.length ? ((i = typeof s == 'function' ? s : nt(+s)), c) : i;
		}),
		(c.context = function (s) {
			return arguments.length ? (s == null ? (o = a = null) : (a = t((o = s))), c) : o;
		}),
		c
	);
}
function bx() {
	return $a(K1);
}
function vx() {
	return $a(J1);
}
function _x() {
	const t = $a(px);
	return (t.angle = t.x), delete t.x, (t.radius = t.y), delete t.y, t;
}
const wx = dt(3),
	tg = {
		draw(t, n) {
			const e = dt(n + He(n / 28, 0.75)) * 0.59436,
				r = e / 2,
				i = r * wx;
			t.moveTo(0, e),
				t.lineTo(0, -e),
				t.moveTo(-i, -r),
				t.lineTo(i, r),
				t.moveTo(-i, r),
				t.lineTo(i, -r);
		}
	},
	Ta = {
		draw(t, n) {
			const e = dt(n / Hn);
			t.moveTo(e, 0), t.arc(0, 0, e, 0, Bn);
		}
	},
	ng = {
		draw(t, n) {
			const e = dt(n / 5) / 2;
			t.moveTo(-3 * e, -e),
				t.lineTo(-e, -e),
				t.lineTo(-e, -3 * e),
				t.lineTo(e, -3 * e),
				t.lineTo(e, -e),
				t.lineTo(3 * e, -e),
				t.lineTo(3 * e, e),
				t.lineTo(e, e),
				t.lineTo(e, 3 * e),
				t.lineTo(-e, 3 * e),
				t.lineTo(-e, e),
				t.lineTo(-3 * e, e),
				t.closePath();
		}
	},
	eg = dt(1 / 3),
	xx = eg * 2,
	rg = {
		draw(t, n) {
			const e = dt(n / xx),
				r = e * eg;
			t.moveTo(0, -e), t.lineTo(r, 0), t.lineTo(0, e), t.lineTo(-r, 0), t.closePath();
		}
	},
	ig = {
		draw(t, n) {
			const e = dt(n) * 0.62625;
			t.moveTo(0, -e), t.lineTo(e, 0), t.lineTo(0, e), t.lineTo(-e, 0), t.closePath();
		}
	},
	og = {
		draw(t, n) {
			const e = dt(n - He(n / 7, 2)) * 0.87559;
			t.moveTo(-e, 0), t.lineTo(e, 0), t.moveTo(0, e), t.lineTo(0, -e);
		}
	},
	ag = {
		draw(t, n) {
			const e = dt(n),
				r = -e / 2;
			t.rect(r, r, e, e);
		}
	},
	ug = {
		draw(t, n) {
			const e = dt(n) * 0.4431;
			t.moveTo(e, e), t.lineTo(e, -e), t.lineTo(-e, -e), t.lineTo(-e, e), t.closePath();
		}
	},
	Mx = 0.8908130915292852,
	sg = Gt(Hn / 10) / Gt((7 * Hn) / 10),
	$x = Gt(Bn / 10) * sg,
	Tx = -Sn(Bn / 10) * sg,
	cg = {
		draw(t, n) {
			const e = dt(n * Mx),
				r = $x * e,
				i = Tx * e;
			t.moveTo(0, -e), t.lineTo(r, i);
			for (let o = 1; o < 5; ++o) {
				const a = (Bn * o) / 5,
					u = Sn(a),
					c = Gt(a);
				t.lineTo(c * e, -u * e), t.lineTo(u * r - c * i, c * r + u * i);
			}
			t.closePath();
		}
	},
	hu = dt(3),
	fg = {
		draw(t, n) {
			const e = -dt(n / (hu * 3));
			t.moveTo(0, e * 2), t.lineTo(-hu * e, -e), t.lineTo(hu * e, -e), t.closePath();
		}
	},
	Sx = dt(3),
	lg = {
		draw(t, n) {
			const e = dt(n) * 0.6824,
				r = e / 2,
				i = (e * Sx) / 2;
			t.moveTo(0, -e), t.lineTo(i, r), t.lineTo(-i, r), t.closePath();
		}
	},
	Kt = -0.5,
	Jt = dt(3) / 2,
	cs = 1 / dt(12),
	kx = (cs / 2 + 1) * 3,
	hg = {
		draw(t, n) {
			const e = dt(n / kx),
				r = e / 2,
				i = e * cs,
				o = r,
				a = e * cs + e,
				u = -o,
				c = a;
			t.moveTo(r, i),
				t.lineTo(o, a),
				t.lineTo(u, c),
				t.lineTo(Kt * r - Jt * i, Jt * r + Kt * i),
				t.lineTo(Kt * o - Jt * a, Jt * o + Kt * a),
				t.lineTo(Kt * u - Jt * c, Jt * u + Kt * c),
				t.lineTo(Kt * r + Jt * i, Kt * i - Jt * r),
				t.lineTo(Kt * o + Jt * a, Kt * a - Jt * o),
				t.lineTo(Kt * u + Jt * c, Kt * c - Jt * u),
				t.closePath();
		}
	},
	fs = {
		draw(t, n) {
			const e = dt(n - He(n / 6, 1.7)) * 0.6189;
			t.moveTo(-e, -e), t.lineTo(e, e), t.moveTo(-e, e), t.lineTo(e, -e);
		}
	},
	Ul = [Ta, ng, rg, ag, cg, fg, hg],
	Ax = [Ta, og, fs, lg, tg, ug, ig];
function Ex(t, n) {
	let e = null,
		r = gi(i);
	(t = typeof t == 'function' ? t : nt(t || Ta)),
		(n = typeof n == 'function' ? n : nt(n === void 0 ? 64 : +n));
	function i() {
		let o;
		if ((e || (e = o = r()), t.apply(this, arguments).draw(e, +n.apply(this, arguments)), o))
			return (e = null), o + '' || null;
	}
	return (
		(i.type = function (o) {
			return arguments.length ? ((t = typeof o == 'function' ? o : nt(o)), i) : t;
		}),
		(i.size = function (o) {
			return arguments.length ? ((n = typeof o == 'function' ? o : nt(+o)), i) : n;
		}),
		(i.context = function (o) {
			return arguments.length ? ((e = o ?? null), i) : e;
		}),
		i
	);
}
function Xn() {}
function Oo(t, n, e) {
	t._context.bezierCurveTo(
		(2 * t._x0 + t._x1) / 3,
		(2 * t._y0 + t._y1) / 3,
		(t._x0 + 2 * t._x1) / 3,
		(t._y0 + 2 * t._y1) / 3,
		(t._x0 + 4 * t._x1 + n) / 6,
		(t._y0 + 4 * t._y1 + e) / 6
	);
}
function Sa(t) {
	this._context = t;
}
Sa.prototype = {
	areaStart: function () {
		this._line = 0;
	},
	areaEnd: function () {
		this._line = NaN;
	},
	lineStart: function () {
		(this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
	},
	lineEnd: function () {
		switch (this._point) {
			case 3:
				Oo(this, this._x1, this._y1);
			case 2:
				this._context.lineTo(this._x1, this._y1);
				break;
		}
		(this._line || (this._line !== 0 && this._point === 1)) && this._context.closePath(),
			(this._line = 1 - this._line);
	},
	point: function (t, n) {
		switch (((t = +t), (n = +n), this._point)) {
			case 0:
				(this._point = 1), this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
				break;
			case 1:
				this._point = 2;
				break;
			case 2:
				(this._point = 3),
					this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
			default:
				Oo(this, t, n);
				break;
		}
		(this._x0 = this._x1), (this._x1 = t), (this._y0 = this._y1), (this._y1 = n);
	}
};
function Nx(t) {
	return new Sa(t);
}
function dg(t) {
	this._context = t;
}
dg.prototype = {
	areaStart: Xn,
	areaEnd: Xn,
	lineStart: function () {
		(this._x0 =
			this._x1 =
			this._x2 =
			this._x3 =
			this._x4 =
			this._y0 =
			this._y1 =
			this._y2 =
			this._y3 =
			this._y4 =
				NaN),
			(this._point = 0);
	},
	lineEnd: function () {
		switch (this._point) {
			case 1: {
				this._context.moveTo(this._x2, this._y2), this._context.closePath();
				break;
			}
			case 2: {
				this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3),
					this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3),
					this._context.closePath();
				break;
			}
			case 3: {
				this.point(this._x2, this._y2),
					this.point(this._x3, this._y3),
					this.point(this._x4, this._y4);
				break;
			}
		}
	},
	point: function (t, n) {
		switch (((t = +t), (n = +n), this._point)) {
			case 0:
				(this._point = 1), (this._x2 = t), (this._y2 = n);
				break;
			case 1:
				(this._point = 2), (this._x3 = t), (this._y3 = n);
				break;
			case 2:
				(this._point = 3),
					(this._x4 = t),
					(this._y4 = n),
					this._context.moveTo(
						(this._x0 + 4 * this._x1 + t) / 6,
						(this._y0 + 4 * this._y1 + n) / 6
					);
				break;
			default:
				Oo(this, t, n);
				break;
		}
		(this._x0 = this._x1), (this._x1 = t), (this._y0 = this._y1), (this._y1 = n);
	}
};
function Cx(t) {
	return new dg(t);
}
function gg(t) {
	this._context = t;
}
gg.prototype = {
	areaStart: function () {
		this._line = 0;
	},
	areaEnd: function () {
		this._line = NaN;
	},
	lineStart: function () {
		(this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
	},
	lineEnd: function () {
		(this._line || (this._line !== 0 && this._point === 3)) && this._context.closePath(),
			(this._line = 1 - this._line);
	},
	point: function (t, n) {
		switch (((t = +t), (n = +n), this._point)) {
			case 0:
				this._point = 1;
				break;
			case 1:
				this._point = 2;
				break;
			case 2:
				this._point = 3;
				var e = (this._x0 + 4 * this._x1 + t) / 6,
					r = (this._y0 + 4 * this._y1 + n) / 6;
				this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
				break;
			case 3:
				this._point = 4;
			default:
				Oo(this, t, n);
				break;
		}
		(this._x0 = this._x1), (this._x1 = t), (this._y0 = this._y1), (this._y1 = n);
	}
};
function Rx(t) {
	return new gg(t);
}
function pg(t, n) {
	(this._basis = new Sa(t)), (this._beta = n);
}
pg.prototype = {
	lineStart: function () {
		(this._x = []), (this._y = []), this._basis.lineStart();
	},
	lineEnd: function () {
		var t = this._x,
			n = this._y,
			e = t.length - 1;
		if (e > 0)
			for (var r = t[0], i = n[0], o = t[e] - r, a = n[e] - i, u = -1, c; ++u <= e; )
				(c = u / e),
					this._basis.point(
						this._beta * t[u] + (1 - this._beta) * (r + c * o),
						this._beta * n[u] + (1 - this._beta) * (i + c * a)
					);
		(this._x = this._y = null), this._basis.lineEnd();
	},
	point: function (t, n) {
		this._x.push(+t), this._y.push(+n);
	}
};
const Px = (function t(n) {
	function e(r) {
		return n === 1 ? new Sa(r) : new pg(r, n);
	}
	return (
		(e.beta = function (r) {
			return t(+r);
		}),
		e
	);
})(0.85);
function Fo(t, n, e) {
	t._context.bezierCurveTo(
		t._x1 + t._k * (t._x2 - t._x0),
		t._y1 + t._k * (t._y2 - t._y0),
		t._x2 + t._k * (t._x1 - n),
		t._y2 + t._k * (t._y1 - e),
		t._x2,
		t._y2
	);
}
function Tc(t, n) {
	(this._context = t), (this._k = (1 - n) / 6);
}
Tc.prototype = {
	areaStart: function () {
		this._line = 0;
	},
	areaEnd: function () {
		this._line = NaN;
	},
	lineStart: function () {
		(this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN), (this._point = 0);
	},
	lineEnd: function () {
		switch (this._point) {
			case 2:
				this._context.lineTo(this._x2, this._y2);
				break;
			case 3:
				Fo(this, this._x1, this._y1);
				break;
		}
		(this._line || (this._line !== 0 && this._point === 1)) && this._context.closePath(),
			(this._line = 1 - this._line);
	},
	point: function (t, n) {
		switch (((t = +t), (n = +n), this._point)) {
			case 0:
				(this._point = 1), this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
				break;
			case 1:
				(this._point = 2), (this._x1 = t), (this._y1 = n);
				break;
			case 2:
				this._point = 3;
			default:
				Fo(this, t, n);
				break;
		}
		(this._x0 = this._x1),
			(this._x1 = this._x2),
			(this._x2 = t),
			(this._y0 = this._y1),
			(this._y1 = this._y2),
			(this._y2 = n);
	}
};
const Ix = (function t(n) {
	function e(r) {
		return new Tc(r, n);
	}
	return (
		(e.tension = function (r) {
			return t(+r);
		}),
		e
	);
})(0);
function Sc(t, n) {
	(this._context = t), (this._k = (1 - n) / 6);
}
Sc.prototype = {
	areaStart: Xn,
	areaEnd: Xn,
	lineStart: function () {
		(this._x0 =
			this._x1 =
			this._x2 =
			this._x3 =
			this._x4 =
			this._x5 =
			this._y0 =
			this._y1 =
			this._y2 =
			this._y3 =
			this._y4 =
			this._y5 =
				NaN),
			(this._point = 0);
	},
	lineEnd: function () {
		switch (this._point) {
			case 1: {
				this._context.moveTo(this._x3, this._y3), this._context.closePath();
				break;
			}
			case 2: {
				this._context.lineTo(this._x3, this._y3), this._context.closePath();
				break;
			}
			case 3: {
				this.point(this._x3, this._y3),
					this.point(this._x4, this._y4),
					this.point(this._x5, this._y5);
				break;
			}
		}
	},
	point: function (t, n) {
		switch (((t = +t), (n = +n), this._point)) {
			case 0:
				(this._point = 1), (this._x3 = t), (this._y3 = n);
				break;
			case 1:
				(this._point = 2), this._context.moveTo((this._x4 = t), (this._y4 = n));
				break;
			case 2:
				(this._point = 3), (this._x5 = t), (this._y5 = n);
				break;
			default:
				Fo(this, t, n);
				break;
		}
		(this._x0 = this._x1),
			(this._x1 = this._x2),
			(this._x2 = t),
			(this._y0 = this._y1),
			(this._y1 = this._y2),
			(this._y2 = n);
	}
};
const zx = (function t(n) {
	function e(r) {
		return new Sc(r, n);
	}
	return (
		(e.tension = function (r) {
			return t(+r);
		}),
		e
	);
})(0);
function kc(t, n) {
	(this._context = t), (this._k = (1 - n) / 6);
}
kc.prototype = {
	areaStart: function () {
		this._line = 0;
	},
	areaEnd: function () {
		this._line = NaN;
	},
	lineStart: function () {
		(this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN), (this._point = 0);
	},
	lineEnd: function () {
		(this._line || (this._line !== 0 && this._point === 3)) && this._context.closePath(),
			(this._line = 1 - this._line);
	},
	point: function (t, n) {
		switch (((t = +t), (n = +n), this._point)) {
			case 0:
				this._point = 1;
				break;
			case 1:
				this._point = 2;
				break;
			case 2:
				(this._point = 3),
					this._line
						? this._context.lineTo(this._x2, this._y2)
						: this._context.moveTo(this._x2, this._y2);
				break;
			case 3:
				this._point = 4;
			default:
				Fo(this, t, n);
				break;
		}
		(this._x0 = this._x1),
			(this._x1 = this._x2),
			(this._x2 = t),
			(this._y0 = this._y1),
			(this._y1 = this._y2),
			(this._y2 = n);
	}
};
const Dx = (function t(n) {
	function e(r) {
		return new kc(r, n);
	}
	return (
		(e.tension = function (r) {
			return t(+r);
		}),
		e
	);
})(0);
function Ac(t, n, e) {
	var r = t._x1,
		i = t._y1,
		o = t._x2,
		a = t._y2;
	if (t._l01_a > Rt) {
		var u = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
			c = 3 * t._l01_a * (t._l01_a + t._l12_a);
		(r = (r * u - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c),
			(i = (i * u - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c);
	}
	if (t._l23_a > Rt) {
		var s = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
			f = 3 * t._l23_a * (t._l23_a + t._l12_a);
		(o = (o * s + t._x1 * t._l23_2a - n * t._l12_2a) / f),
			(a = (a * s + t._y1 * t._l23_2a - e * t._l12_2a) / f);
	}
	t._context.bezierCurveTo(r, i, o, a, t._x2, t._y2);
}
function mg(t, n) {
	(this._context = t), (this._alpha = n);
}
mg.prototype = {
	areaStart: function () {
		this._line = 0;
	},
	areaEnd: function () {
		this._line = NaN;
	},
	lineStart: function () {
		(this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
			(this._l01_a =
				this._l12_a =
				this._l23_a =
				this._l01_2a =
				this._l12_2a =
				this._l23_2a =
				this._point =
					0);
	},
	lineEnd: function () {
		switch (this._point) {
			case 2:
				this._context.lineTo(this._x2, this._y2);
				break;
			case 3:
				this.point(this._x2, this._y2);
				break;
		}
		(this._line || (this._line !== 0 && this._point === 1)) && this._context.closePath(),
			(this._line = 1 - this._line);
	},
	point: function (t, n) {
		if (((t = +t), (n = +n), this._point)) {
			var e = this._x2 - t,
				r = this._y2 - n;
			this._l23_a = Math.sqrt((this._l23_2a = Math.pow(e * e + r * r, this._alpha)));
		}
		switch (this._point) {
			case 0:
				(this._point = 1), this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
				break;
			case 1:
				this._point = 2;
				break;
			case 2:
				this._point = 3;
			default:
				Ac(this, t, n);
				break;
		}
		(this._l01_a = this._l12_a),
			(this._l12_a = this._l23_a),
			(this._l01_2a = this._l12_2a),
			(this._l12_2a = this._l23_2a),
			(this._x0 = this._x1),
			(this._x1 = this._x2),
			(this._x2 = t),
			(this._y0 = this._y1),
			(this._y1 = this._y2),
			(this._y2 = n);
	}
};
const Ox = (function t(n) {
	function e(r) {
		return n ? new mg(r, n) : new Tc(r, 0);
	}
	return (
		(e.alpha = function (r) {
			return t(+r);
		}),
		e
	);
})(0.5);
function yg(t, n) {
	(this._context = t), (this._alpha = n);
}
yg.prototype = {
	areaStart: Xn,
	areaEnd: Xn,
	lineStart: function () {
		(this._x0 =
			this._x1 =
			this._x2 =
			this._x3 =
			this._x4 =
			this._x5 =
			this._y0 =
			this._y1 =
			this._y2 =
			this._y3 =
			this._y4 =
			this._y5 =
				NaN),
			(this._l01_a =
				this._l12_a =
				this._l23_a =
				this._l01_2a =
				this._l12_2a =
				this._l23_2a =
				this._point =
					0);
	},
	lineEnd: function () {
		switch (this._point) {
			case 1: {
				this._context.moveTo(this._x3, this._y3), this._context.closePath();
				break;
			}
			case 2: {
				this._context.lineTo(this._x3, this._y3), this._context.closePath();
				break;
			}
			case 3: {
				this.point(this._x3, this._y3),
					this.point(this._x4, this._y4),
					this.point(this._x5, this._y5);
				break;
			}
		}
	},
	point: function (t, n) {
		if (((t = +t), (n = +n), this._point)) {
			var e = this._x2 - t,
				r = this._y2 - n;
			this._l23_a = Math.sqrt((this._l23_2a = Math.pow(e * e + r * r, this._alpha)));
		}
		switch (this._point) {
			case 0:
				(this._point = 1), (this._x3 = t), (this._y3 = n);
				break;
			case 1:
				(this._point = 2), this._context.moveTo((this._x4 = t), (this._y4 = n));
				break;
			case 2:
				(this._point = 3), (this._x5 = t), (this._y5 = n);
				break;
			default:
				Ac(this, t, n);
				break;
		}
		(this._l01_a = this._l12_a),
			(this._l12_a = this._l23_a),
			(this._l01_2a = this._l12_2a),
			(this._l12_2a = this._l23_2a),
			(this._x0 = this._x1),
			(this._x1 = this._x2),
			(this._x2 = t),
			(this._y0 = this._y1),
			(this._y1 = this._y2),
			(this._y2 = n);
	}
};
const Fx = (function t(n) {
	function e(r) {
		return n ? new yg(r, n) : new Sc(r, 0);
	}
	return (
		(e.alpha = function (r) {
			return t(+r);
		}),
		e
	);
})(0.5);
function bg(t, n) {
	(this._context = t), (this._alpha = n);
}
bg.prototype = {
	areaStart: function () {
		this._line = 0;
	},
	areaEnd: function () {
		this._line = NaN;
	},
	lineStart: function () {
		(this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
			(this._l01_a =
				this._l12_a =
				this._l23_a =
				this._l01_2a =
				this._l12_2a =
				this._l23_2a =
				this._point =
					0);
	},
	lineEnd: function () {
		(this._line || (this._line !== 0 && this._point === 3)) && this._context.closePath(),
			(this._line = 1 - this._line);
	},
	point: function (t, n) {
		if (((t = +t), (n = +n), this._point)) {
			var e = this._x2 - t,
				r = this._y2 - n;
			this._l23_a = Math.sqrt((this._l23_2a = Math.pow(e * e + r * r, this._alpha)));
		}
		switch (this._point) {
			case 0:
				this._point = 1;
				break;
			case 1:
				this._point = 2;
				break;
			case 2:
				(this._point = 3),
					this._line
						? this._context.lineTo(this._x2, this._y2)
						: this._context.moveTo(this._x2, this._y2);
				break;
			case 3:
				this._point = 4;
			default:
				Ac(this, t, n);
				break;
		}
		(this._l01_a = this._l12_a),
			(this._l12_a = this._l23_a),
			(this._l01_2a = this._l12_2a),
			(this._l12_2a = this._l23_2a),
			(this._x0 = this._x1),
			(this._x1 = this._x2),
			(this._x2 = t),
			(this._y0 = this._y1),
			(this._y1 = this._y2),
			(this._y2 = n);
	}
};
const Lx = (function t(n) {
	function e(r) {
		return n ? new bg(r, n) : new kc(r, 0);
	}
	return (
		(e.alpha = function (r) {
			return t(+r);
		}),
		e
	);
})(0.5);
function vg(t) {
	this._context = t;
}
vg.prototype = {
	areaStart: Xn,
	areaEnd: Xn,
	lineStart: function () {
		this._point = 0;
	},
	lineEnd: function () {
		this._point && this._context.closePath();
	},
	point: function (t, n) {
		(t = +t),
			(n = +n),
			this._point ? this._context.lineTo(t, n) : ((this._point = 1), this._context.moveTo(t, n));
	}
};
function Bx(t) {
	return new vg(t);
}
function ql(t) {
	return t < 0 ? -1 : 1;
}
function Yl(t, n, e) {
	var r = t._x1 - t._x0,
		i = n - t._x1,
		o = (t._y1 - t._y0) / (r || (i < 0 && -0)),
		a = (e - t._y1) / (i || (r < 0 && -0)),
		u = (o * i + a * r) / (r + i);
	return (ql(o) + ql(a)) * Math.min(Math.abs(o), Math.abs(a), 0.5 * Math.abs(u)) || 0;
}
function Hl(t, n) {
	var e = t._x1 - t._x0;
	return e ? ((3 * (t._y1 - t._y0)) / e - n) / 2 : n;
}
function du(t, n, e) {
	var r = t._x0,
		i = t._y0,
		o = t._x1,
		a = t._y1,
		u = (o - r) / 3;
	t._context.bezierCurveTo(r + u, i + u * n, o - u, a - u * e, o, a);
}
function Lo(t) {
	this._context = t;
}
Lo.prototype = {
	areaStart: function () {
		this._line = 0;
	},
	areaEnd: function () {
		this._line = NaN;
	},
	lineStart: function () {
		(this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN), (this._point = 0);
	},
	lineEnd: function () {
		switch (this._point) {
			case 2:
				this._context.lineTo(this._x1, this._y1);
				break;
			case 3:
				du(this, this._t0, Hl(this, this._t0));
				break;
		}
		(this._line || (this._line !== 0 && this._point === 1)) && this._context.closePath(),
			(this._line = 1 - this._line);
	},
	point: function (t, n) {
		var e = NaN;
		if (((t = +t), (n = +n), !(t === this._x1 && n === this._y1))) {
			switch (this._point) {
				case 0:
					(this._point = 1), this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
					break;
				case 1:
					this._point = 2;
					break;
				case 2:
					(this._point = 3), du(this, Hl(this, (e = Yl(this, t, n))), e);
					break;
				default:
					du(this, this._t0, (e = Yl(this, t, n)));
					break;
			}
			(this._x0 = this._x1), (this._x1 = t), (this._y0 = this._y1), (this._y1 = n), (this._t0 = e);
		}
	}
};
function _g(t) {
	this._context = new wg(t);
}
(_g.prototype = Object.create(Lo.prototype)).point = function (t, n) {
	Lo.prototype.point.call(this, n, t);
};
function wg(t) {
	this._context = t;
}
wg.prototype = {
	moveTo: function (t, n) {
		this._context.moveTo(n, t);
	},
	closePath: function () {
		this._context.closePath();
	},
	lineTo: function (t, n) {
		this._context.lineTo(n, t);
	},
	bezierCurveTo: function (t, n, e, r, i, o) {
		this._context.bezierCurveTo(n, t, r, e, o, i);
	}
};
function Ux(t) {
	return new Lo(t);
}
function qx(t) {
	return new _g(t);
}
function xg(t) {
	this._context = t;
}
xg.prototype = {
	areaStart: function () {
		this._line = 0;
	},
	areaEnd: function () {
		this._line = NaN;
	},
	lineStart: function () {
		(this._x = []), (this._y = []);
	},
	lineEnd: function () {
		var t = this._x,
			n = this._y,
			e = t.length;
		if (e)
			if (
				(this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), e === 2)
			)
				this._context.lineTo(t[1], n[1]);
			else
				for (var r = Xl(t), i = Xl(n), o = 0, a = 1; a < e; ++o, ++a)
					this._context.bezierCurveTo(r[0][o], i[0][o], r[1][o], i[1][o], t[a], n[a]);
		(this._line || (this._line !== 0 && e === 1)) && this._context.closePath(),
			(this._line = 1 - this._line),
			(this._x = this._y = null);
	},
	point: function (t, n) {
		this._x.push(+t), this._y.push(+n);
	}
};
function Xl(t) {
	var n,
		e = t.length - 1,
		r,
		i = new Array(e),
		o = new Array(e),
		a = new Array(e);
	for (i[0] = 0, o[0] = 2, a[0] = t[0] + 2 * t[1], n = 1; n < e - 1; ++n)
		(i[n] = 1), (o[n] = 4), (a[n] = 4 * t[n] + 2 * t[n + 1]);
	for (i[e - 1] = 2, o[e - 1] = 7, a[e - 1] = 8 * t[e - 1] + t[e], n = 1; n < e; ++n)
		(r = i[n] / o[n - 1]), (o[n] -= r), (a[n] -= r * a[n - 1]);
	for (i[e - 1] = a[e - 1] / o[e - 1], n = e - 2; n >= 0; --n) i[n] = (a[n] - i[n + 1]) / o[n];
	for (o[e - 1] = (t[e] + i[e - 1]) / 2, n = 0; n < e - 1; ++n) o[n] = 2 * t[n + 1] - i[n + 1];
	return [i, o];
}
function Yx(t) {
	return new xg(t);
}
function ka(t, n) {
	(this._context = t), (this._t = n);
}
ka.prototype = {
	areaStart: function () {
		this._line = 0;
	},
	areaEnd: function () {
		this._line = NaN;
	},
	lineStart: function () {
		(this._x = this._y = NaN), (this._point = 0);
	},
	lineEnd: function () {
		0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y),
			(this._line || (this._line !== 0 && this._point === 1)) && this._context.closePath(),
			this._line >= 0 && ((this._t = 1 - this._t), (this._line = 1 - this._line));
	},
	point: function (t, n) {
		switch (((t = +t), (n = +n), this._point)) {
			case 0:
				(this._point = 1), this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
				break;
			case 1:
				this._point = 2;
			default: {
				if (this._t <= 0) this._context.lineTo(this._x, n), this._context.lineTo(t, n);
				else {
					var e = this._x * (1 - this._t) + t * this._t;
					this._context.lineTo(e, this._y), this._context.lineTo(e, n);
				}
				break;
			}
		}
		(this._x = t), (this._y = n);
	}
};
function Hx(t) {
	return new ka(t, 0.5);
}
function Xx(t) {
	return new ka(t, 0);
}
function Gx(t) {
	return new ka(t, 1);
}
function or(t, n) {
	if ((a = t.length) > 1)
		for (var e = 1, r, i, o = t[n[0]], a, u = o.length; e < a; ++e)
			for (i = o, o = t[n[e]], r = 0; r < u; ++r)
				o[r][1] += o[r][0] = isNaN(i[r][1]) ? i[r][0] : i[r][1];
}
function ar(t) {
	for (var n = t.length, e = new Array(n); --n >= 0; ) e[n] = n;
	return e;
}
function Wx(t, n) {
	return t[n];
}
function Vx(t) {
	const n = [];
	return (n.key = t), n;
}
function jx() {
	var t = nt([]),
		n = ar,
		e = or,
		r = Wx;
	function i(o) {
		var a = Array.from(t.apply(this, arguments), Vx),
			u,
			c = a.length,
			s = -1,
			f;
		for (const h of o) for (u = 0, ++s; u < c; ++u) (a[u][s] = [0, +r(h, a[u].key, s, o)]).data = h;
		for (u = 0, f = xa(n(a)); u < c; ++u) a[f[u]].index = u;
		return e(a, f), a;
	}
	return (
		(i.keys = function (o) {
			return arguments.length ? ((t = typeof o == 'function' ? o : nt(Array.from(o))), i) : t;
		}),
		(i.value = function (o) {
			return arguments.length ? ((r = typeof o == 'function' ? o : nt(+o)), i) : r;
		}),
		(i.order = function (o) {
			return arguments.length
				? ((n = o == null ? ar : typeof o == 'function' ? o : nt(Array.from(o))), i)
				: n;
		}),
		(i.offset = function (o) {
			return arguments.length ? ((e = o ?? or), i) : e;
		}),
		i
	);
}
function Zx(t, n) {
	if ((r = t.length) > 0) {
		for (var e, r, i = 0, o = t[0].length, a; i < o; ++i) {
			for (a = e = 0; e < r; ++e) a += t[e][i][1] || 0;
			if (a) for (e = 0; e < r; ++e) t[e][i][1] /= a;
		}
		or(t, n);
	}
}
function Qx(t, n) {
	if ((c = t.length) > 0)
		for (var e, r = 0, i, o, a, u, c, s = t[n[0]].length; r < s; ++r)
			for (a = u = 0, e = 0; e < c; ++e)
				(o = (i = t[n[e]][r])[1] - i[0]) > 0
					? ((i[0] = a), (i[1] = a += o))
					: o < 0
						? ((i[1] = u), (i[0] = u += o))
						: ((i[0] = 0), (i[1] = o));
}
function Kx(t, n) {
	if ((i = t.length) > 0) {
		for (var e = 0, r = t[n[0]], i, o = r.length; e < o; ++e) {
			for (var a = 0, u = 0; a < i; ++a) u += t[a][e][1] || 0;
			r[e][1] += r[e][0] = -u / 2;
		}
		or(t, n);
	}
}
function Jx(t, n) {
	if (!(!((a = t.length) > 0) || !((o = (i = t[n[0]]).length) > 0))) {
		for (var e = 0, r = 1, i, o, a; r < o; ++r) {
			for (var u = 0, c = 0, s = 0; u < a; ++u) {
				for (
					var f = t[n[u]], h = f[r][1] || 0, l = f[r - 1][1] || 0, d = (h - l) / 2, p = 0;
					p < u;
					++p
				) {
					var m = t[n[p]],
						g = m[r][1] || 0,
						y = m[r - 1][1] || 0;
					d += g - y;
				}
				(c += h), (s += d * h);
			}
			(i[r - 1][1] += i[r - 1][0] = e), c && (e -= s / c);
		}
		(i[r - 1][1] += i[r - 1][0] = e), or(t, n);
	}
}
function Mg(t) {
	var n = t.map(t7);
	return ar(t).sort(function (e, r) {
		return n[e] - n[r];
	});
}
function t7(t) {
	for (var n = -1, e = 0, r = t.length, i, o = -1 / 0; ++n < r; )
		(i = +t[n][1]) > o && ((o = i), (e = n));
	return e;
}
function $g(t) {
	var n = t.map(Tg);
	return ar(t).sort(function (e, r) {
		return n[e] - n[r];
	});
}
function Tg(t) {
	for (var n = 0, e = -1, r = t.length, i; ++e < r; ) (i = +t[e][1]) && (n += i);
	return n;
}
function n7(t) {
	return $g(t).reverse();
}
function e7(t) {
	var n = t.length,
		e,
		r,
		i = t.map(Tg),
		o = Mg(t),
		a = 0,
		u = 0,
		c = [],
		s = [];
	for (e = 0; e < n; ++e) (r = o[e]), a < u ? ((a += i[r]), c.push(r)) : ((u += i[r]), s.push(r));
	return s.reverse().concat(c);
}
function r7(t) {
	return ar(t).reverse();
}
const Oi = (t) => () => t;
function i7(t, { sourceEvent: n, target: e, transform: r, dispatch: i }) {
	Object.defineProperties(this, {
		type: { value: t, enumerable: !0, configurable: !0 },
		sourceEvent: { value: n, enumerable: !0, configurable: !0 },
		target: { value: e, enumerable: !0, configurable: !0 },
		transform: { value: r, enumerable: !0, configurable: !0 },
		_: { value: i }
	});
}
function pn(t, n, e) {
	(this.k = t), (this.x = n), (this.y = e);
}
pn.prototype = {
	constructor: pn,
	scale: function (t) {
		return t === 1 ? this : new pn(this.k * t, this.x, this.y);
	},
	translate: function (t, n) {
		return (t === 0) & (n === 0) ? this : new pn(this.k, this.x + this.k * t, this.y + this.k * n);
	},
	apply: function (t) {
		return [t[0] * this.k + this.x, t[1] * this.k + this.y];
	},
	applyX: function (t) {
		return t * this.k + this.x;
	},
	applyY: function (t) {
		return t * this.k + this.y;
	},
	invert: function (t) {
		return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
	},
	invertX: function (t) {
		return (t - this.x) / this.k;
	},
	invertY: function (t) {
		return (t - this.y) / this.k;
	},
	rescaleX: function (t) {
		return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
	},
	rescaleY: function (t) {
		return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
	},
	toString: function () {
		return 'translate(' + this.x + ',' + this.y + ') scale(' + this.k + ')';
	}
};
var Aa = new pn(1, 0, 0);
Sg.prototype = pn.prototype;
function Sg(t) {
	for (; !t.__zoom; ) if (!(t = t.parentNode)) return Aa;
	return t.__zoom;
}
function gu(t) {
	t.stopImmediatePropagation();
}
function vr(t) {
	t.preventDefault(), t.stopImmediatePropagation();
}
function o7(t) {
	return (!t.ctrlKey || t.type === 'wheel') && !t.button;
}
function a7() {
	var t = this;
	return t instanceof SVGElement
		? ((t = t.ownerSVGElement || t),
			t.hasAttribute('viewBox')
				? ((t = t.viewBox.baseVal),
					[
						[t.x, t.y],
						[t.x + t.width, t.y + t.height]
					])
				: [
						[0, 0],
						[t.width.baseVal.value, t.height.baseVal.value]
					])
		: [
				[0, 0],
				[t.clientWidth, t.clientHeight]
			];
}
function Gl() {
	return this.__zoom || Aa;
}
function u7(t) {
	return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 0.002) * (t.ctrlKey ? 10 : 1);
}
function s7() {
	return navigator.maxTouchPoints || 'ontouchstart' in this;
}
function c7(t, n, e) {
	var r = t.invertX(n[0][0]) - e[0][0],
		i = t.invertX(n[1][0]) - e[1][0],
		o = t.invertY(n[0][1]) - e[0][1],
		a = t.invertY(n[1][1]) - e[1][1];
	return t.translate(
		i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
		a > o ? (o + a) / 2 : Math.min(0, o) || Math.max(0, a)
	);
}
function kg() {
	var t = o7,
		n = a7,
		e = c7,
		r = u7,
		i = s7,
		o = [0, 1 / 0],
		a = [
			[-1 / 0, -1 / 0],
			[1 / 0, 1 / 0]
		],
		u = 250,
		c = Jh,
		s = ye('start', 'zoom', 'end'),
		f,
		h,
		l,
		d = 500,
		p = 150,
		m = 0,
		g = 10;
	function y(M) {
		M.property('__zoom', Gl)
			.on('wheel.zoom', E, { passive: !1 })
			.on('mousedown.zoom', N)
			.on('dblclick.zoom', A)
			.filter(i)
			.on('touchstart.zoom', $)
			.on('touchmove.zoom', P)
			.on('touchend.zoom touchcancel.zoom', C)
			.style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
	}
	(y.transform = function (M, S, T, R) {
		var O = M.selection ? M.selection() : M;
		O.property('__zoom', Gl),
			M !== O
				? w(M, S, T, R)
				: O.interrupt().each(function () {
						x(this, arguments)
							.event(R)
							.start()
							.zoom(null, typeof S == 'function' ? S.apply(this, arguments) : S)
							.end();
					});
	}),
		(y.scaleBy = function (M, S, T, R) {
			y.scaleTo(
				M,
				function () {
					var O = this.__zoom.k,
						z = typeof S == 'function' ? S.apply(this, arguments) : S;
					return O * z;
				},
				T,
				R
			);
		}),
		(y.scaleTo = function (M, S, T, R) {
			y.transform(
				M,
				function () {
					var O = n.apply(this, arguments),
						z = this.__zoom,
						L = T == null ? b(O) : typeof T == 'function' ? T.apply(this, arguments) : T,
						q = z.invert(L),
						W = typeof S == 'function' ? S.apply(this, arguments) : S;
					return e(v(_(z, W), L, q), O, a);
				},
				T,
				R
			);
		}),
		(y.translateBy = function (M, S, T, R) {
			y.transform(
				M,
				function () {
					return e(
						this.__zoom.translate(
							typeof S == 'function' ? S.apply(this, arguments) : S,
							typeof T == 'function' ? T.apply(this, arguments) : T
						),
						n.apply(this, arguments),
						a
					);
				},
				null,
				R
			);
		}),
		(y.translateTo = function (M, S, T, R, O) {
			y.transform(
				M,
				function () {
					var z = n.apply(this, arguments),
						L = this.__zoom,
						q = R == null ? b(z) : typeof R == 'function' ? R.apply(this, arguments) : R;
					return e(
						Aa.translate(q[0], q[1])
							.scale(L.k)
							.translate(
								typeof S == 'function' ? -S.apply(this, arguments) : -S,
								typeof T == 'function' ? -T.apply(this, arguments) : -T
							),
						z,
						a
					);
				},
				R,
				O
			);
		});
	function _(M, S) {
		return (S = Math.max(o[0], Math.min(o[1], S))), S === M.k ? M : new pn(S, M.x, M.y);
	}
	function v(M, S, T) {
		var R = S[0] - T[0] * M.k,
			O = S[1] - T[1] * M.k;
		return R === M.x && O === M.y ? M : new pn(M.k, R, O);
	}
	function b(M) {
		return [(+M[0][0] + +M[1][0]) / 2, (+M[0][1] + +M[1][1]) / 2];
	}
	function w(M, S, T, R) {
		M.on('start.zoom', function () {
			x(this, arguments).event(R).start();
		})
			.on('interrupt.zoom end.zoom', function () {
				x(this, arguments).event(R).end();
			})
			.tween('zoom', function () {
				var O = this,
					z = arguments,
					L = x(O, z).event(R),
					q = n.apply(O, z),
					W = T == null ? b(q) : typeof T == 'function' ? T.apply(O, z) : T,
					I = Math.max(q[1][0] - q[0][0], q[1][1] - q[0][1]),
					X = O.__zoom,
					U = typeof S == 'function' ? S.apply(O, z) : S,
					J = c(X.invert(W).concat(I / X.k), U.invert(W).concat(I / U.k));
				return function (B) {
					if (B === 1) B = U;
					else {
						var Z = J(B),
							D = I / Z[2];
						B = new pn(D, W[0] - Z[0] * D, W[1] - Z[1] * D);
					}
					L.zoom(null, B);
				};
			});
	}
	function x(M, S, T) {
		return (!T && M.__zooming) || new k(M, S);
	}
	function k(M, S) {
		(this.that = M),
			(this.args = S),
			(this.active = 0),
			(this.sourceEvent = null),
			(this.extent = n.apply(M, S)),
			(this.taps = 0);
	}
	k.prototype = {
		event: function (M) {
			return M && (this.sourceEvent = M), this;
		},
		start: function () {
			return ++this.active === 1 && ((this.that.__zooming = this), this.emit('start')), this;
		},
		zoom: function (M, S) {
			return (
				this.mouse && M !== 'mouse' && (this.mouse[1] = S.invert(this.mouse[0])),
				this.touch0 && M !== 'touch' && (this.touch0[1] = S.invert(this.touch0[0])),
				this.touch1 && M !== 'touch' && (this.touch1[1] = S.invert(this.touch1[0])),
				(this.that.__zoom = S),
				this.emit('zoom'),
				this
			);
		},
		end: function () {
			return --this.active === 0 && (delete this.that.__zooming, this.emit('end')), this;
		},
		emit: function (M) {
			var S = ht(this.that).datum();
			s.call(
				M,
				this.that,
				new i7(M, {
					sourceEvent: this.sourceEvent,
					target: y,
					type: M,
					transform: this.that.__zoom,
					dispatch: s
				}),
				S
			);
		}
	};
	function E(M, ...S) {
		if (!t.apply(this, arguments)) return;
		var T = x(this, S).event(M),
			R = this.__zoom,
			O = Math.max(o[0], Math.min(o[1], R.k * Math.pow(2, r.apply(this, arguments)))),
			z = Zt(M);
		if (T.wheel)
			(T.mouse[0][0] !== z[0] || T.mouse[0][1] !== z[1]) &&
				(T.mouse[1] = R.invert((T.mouse[0] = z))),
				clearTimeout(T.wheel);
		else {
			if (R.k === O) return;
			(T.mouse = [z, R.invert(z)]), oe(this), T.start();
		}
		vr(M),
			(T.wheel = setTimeout(L, p)),
			T.zoom('mouse', e(v(_(R, O), T.mouse[0], T.mouse[1]), T.extent, a));
		function L() {
			(T.wheel = null), T.end();
		}
	}
	function N(M, ...S) {
		if (l || !t.apply(this, arguments)) return;
		var T = M.currentTarget,
			R = x(this, S, !0).event(M),
			O = ht(M.view).on('mousemove.zoom', W, !0).on('mouseup.zoom', I, !0),
			z = Zt(M, T),
			L = M.clientX,
			q = M.clientY;
		Go(M.view), gu(M), (R.mouse = [z, this.__zoom.invert(z)]), oe(this), R.start();
		function W(X) {
			if ((vr(X), !R.moved)) {
				var U = X.clientX - L,
					J = X.clientY - q;
				R.moved = U * U + J * J > m;
			}
			R.event(X).zoom(
				'mouse',
				e(v(R.that.__zoom, (R.mouse[0] = Zt(X, T)), R.mouse[1]), R.extent, a)
			);
		}
		function I(X) {
			O.on('mousemove.zoom mouseup.zoom', null), Wo(X.view, R.moved), vr(X), R.event(X).end();
		}
	}
	function A(M, ...S) {
		if (t.apply(this, arguments)) {
			var T = this.__zoom,
				R = Zt(M.changedTouches ? M.changedTouches[0] : M, this),
				O = T.invert(R),
				z = T.k * (M.shiftKey ? 0.5 : 2),
				L = e(v(_(T, z), R, O), n.apply(this, S), a);
			vr(M),
				u > 0
					? ht(this).transition().duration(u).call(w, L, R, M)
					: ht(this).call(y.transform, L, R, M);
		}
	}
	function $(M, ...S) {
		if (t.apply(this, arguments)) {
			var T = M.touches,
				R = T.length,
				O = x(this, S, M.changedTouches.length === R).event(M),
				z,
				L,
				q,
				W;
			for (gu(M), L = 0; L < R; ++L)
				(q = T[L]),
					(W = Zt(q, this)),
					(W = [W, this.__zoom.invert(W), q.identifier]),
					O.touch0
						? !O.touch1 && O.touch0[2] !== W[2] && ((O.touch1 = W), (O.taps = 0))
						: ((O.touch0 = W), (z = !0), (O.taps = 1 + !!f));
			f && (f = clearTimeout(f)),
				z &&
					(O.taps < 2 &&
						((h = W[0]),
						(f = setTimeout(function () {
							f = null;
						}, d))),
					oe(this),
					O.start());
		}
	}
	function P(M, ...S) {
		if (this.__zooming) {
			var T = x(this, S).event(M),
				R = M.changedTouches,
				O = R.length,
				z,
				L,
				q,
				W;
			for (vr(M), z = 0; z < O; ++z)
				(L = R[z]),
					(q = Zt(L, this)),
					T.touch0 && T.touch0[2] === L.identifier
						? (T.touch0[0] = q)
						: T.touch1 && T.touch1[2] === L.identifier && (T.touch1[0] = q);
			if (((L = T.that.__zoom), T.touch1)) {
				var I = T.touch0[0],
					X = T.touch0[1],
					U = T.touch1[0],
					J = T.touch1[1],
					B = (B = U[0] - I[0]) * B + (B = U[1] - I[1]) * B,
					Z = (Z = J[0] - X[0]) * Z + (Z = J[1] - X[1]) * Z;
				(L = _(L, Math.sqrt(B / Z))),
					(q = [(I[0] + U[0]) / 2, (I[1] + U[1]) / 2]),
					(W = [(X[0] + J[0]) / 2, (X[1] + J[1]) / 2]);
			} else if (T.touch0) (q = T.touch0[0]), (W = T.touch0[1]);
			else return;
			T.zoom('touch', e(v(L, q, W), T.extent, a));
		}
	}
	function C(M, ...S) {
		if (this.__zooming) {
			var T = x(this, S).event(M),
				R = M.changedTouches,
				O = R.length,
				z,
				L;
			for (
				gu(M),
					l && clearTimeout(l),
					l = setTimeout(function () {
						l = null;
					}, d),
					z = 0;
				z < O;
				++z
			)
				(L = R[z]),
					T.touch0 && T.touch0[2] === L.identifier
						? delete T.touch0
						: T.touch1 && T.touch1[2] === L.identifier && delete T.touch1;
			if ((T.touch1 && !T.touch0 && ((T.touch0 = T.touch1), delete T.touch1), T.touch0))
				T.touch0[1] = this.__zoom.invert(T.touch0[0]);
			else if (
				(T.end(), T.taps === 2 && ((L = Zt(L, this)), Math.hypot(h[0] - L[0], h[1] - L[1]) < g))
			) {
				var q = ht(this).on('dblclick.zoom');
				q && q.apply(this, arguments);
			}
		}
	}
	return (
		(y.wheelDelta = function (M) {
			return arguments.length ? ((r = typeof M == 'function' ? M : Oi(+M)), y) : r;
		}),
		(y.filter = function (M) {
			return arguments.length ? ((t = typeof M == 'function' ? M : Oi(!!M)), y) : t;
		}),
		(y.touchable = function (M) {
			return arguments.length ? ((i = typeof M == 'function' ? M : Oi(!!M)), y) : i;
		}),
		(y.extent = function (M) {
			return arguments.length
				? ((n =
						typeof M == 'function'
							? M
							: Oi([
									[+M[0][0], +M[0][1]],
									[+M[1][0], +M[1][1]]
								])),
					y)
				: n;
		}),
		(y.scaleExtent = function (M) {
			return arguments.length ? ((o[0] = +M[0]), (o[1] = +M[1]), y) : [o[0], o[1]];
		}),
		(y.translateExtent = function (M) {
			return arguments.length
				? ((a[0][0] = +M[0][0]),
					(a[1][0] = +M[1][0]),
					(a[0][1] = +M[0][1]),
					(a[1][1] = +M[1][1]),
					y)
				: [
						[a[0][0], a[0][1]],
						[a[1][0], a[1][1]]
					];
		}),
		(y.constrain = function (M) {
			return arguments.length ? ((e = M), y) : e;
		}),
		(y.duration = function (M) {
			return arguments.length ? ((u = +M), y) : u;
		}),
		(y.interpolate = function (M) {
			return arguments.length ? ((c = M), y) : c;
		}),
		(y.on = function () {
			var M = s.on.apply(s, arguments);
			return M === s ? y : M;
		}),
		(y.clickDistance = function (M) {
			return arguments.length ? ((m = (M = +M) * M), y) : Math.sqrt(m);
		}),
		(y.tapDistance = function (M) {
			return arguments.length ? ((g = +M), y) : g;
		}),
		y
	);
}
const f7 = Object.freeze(
	Object.defineProperty(
		{
			__proto__: null,
			Adder: xt,
			Delaunay: Os,
			FormatSpecifier: oa,
			InternMap: Fr,
			InternSet: ae,
			Node: ge,
			Path: oi,
			Voronoi: b0,
			ZoomTransform: pn,
			active: hv,
			arc: cx,
			area: V1,
			areaRadial: Bl,
			ascending: yt,
			autoType: D_,
			axisBottom: r2,
			axisLeft: i2,
			axisRight: e2,
			axisTop: n2,
			bin: Nc,
			bisect: Un,
			bisectCenter: Qg,
			bisectLeft: Zg,
			bisectRight: Un,
			bisector: Bo,
			blob: L_,
			blur: Kg,
			blur2: jl,
			blurImage: Jg,
			brush: Tv,
			brushSelection: xv,
			brushX: Mv,
			brushY: $v,
			buffer: U_,
			chord: kv,
			chordDirected: Ev,
			chordTranspose: Av,
			cluster: J3,
			color: qn,
			contourDensity: n_,
			contours: Iu,
			count: Uo,
			create: Lm,
			creator: Ho,
			cross: ap,
			csv: H_,
			csvFormat: T_,
			csvFormatBody: S_,
			csvFormatRow: A_,
			csvFormatRows: k_,
			csvFormatValue: E_,
			csvParse: _0,
			csvParseRows: $_,
			cubehelix: fn,
			cumsum: up,
			curveBasis: Nx,
			curveBasisClosed: Cx,
			curveBasisOpen: Rx,
			curveBumpX: K1,
			curveBumpY: J1,
			curveBundle: Px,
			curveCardinal: Ix,
			curveCardinalClosed: zx,
			curveCardinalOpen: Dx,
			curveCatmullRom: Ox,
			curveCatmullRomClosed: Fx,
			curveCatmullRomOpen: Lx,
			curveLinear: Ma,
			curveLinearClosed: Bx,
			curveMonotoneX: Ux,
			curveMonotoneY: qx,
			curveNatural: Yx,
			curveStep: Hx,
			curveStepAfter: Gx,
			curveStepBefore: Xx,
			descending: Wl,
			deviation: Kl,
			difference: Yp,
			disjoint: Hp,
			dispatch: ye,
			drag: Sh,
			dragDisable: Go,
			dragEnable: Wo,
			dsv: Y_,
			dsvFormat: ea,
			easeBack: tf,
			easeBackIn: iv,
			easeBackInOut: tf,
			easeBackOut: ov,
			easeBounce: Wr,
			easeBounceIn: ev,
			easeBounceInOut: rv,
			easeBounceOut: Wr,
			easeCircle: Jc,
			easeCircleIn: Gb,
			easeCircleInOut: Jc,
			easeCircleOut: Wb,
			easeCubic: Eu,
			easeCubicIn: Fb,
			easeCubicInOut: Eu,
			easeCubicOut: Lb,
			easeElastic: nf,
			easeElasticIn: av,
			easeElasticInOut: uv,
			easeElasticOut: nf,
			easeExp: Kc,
			easeExpIn: Hb,
			easeExpInOut: Kc,
			easeExpOut: Xb,
			easeLinear: zb,
			easePoly: Zc,
			easePolyIn: Bb,
			easePolyInOut: Zc,
			easePolyOut: Ub,
			easeQuad: jc,
			easeQuadIn: Db,
			easeQuadInOut: jc,
			easeQuadOut: Ob,
			easeSin: Qc,
			easeSinIn: qb,
			easeSinInOut: Qc,
			easeSinOut: Yb,
			every: Op,
			extent: Rr,
			fcumsum: cp,
			filter: Lp,
			flatGroup: fp,
			flatRollup: lp,
			forceCenter: M0,
			forceCollide: T0,
			forceLink: S0,
			forceManyBody: A0,
			forceRadial: $w,
			forceSimulation: k0,
			forceX: Tw,
			forceY: Sw,
			get format() {
				return aa;
			},
			formatDefaultLocale: C0,
			formatLocale: N0,
			get formatPrefix() {
				return Bs;
			},
			formatSpecifier: Ke,
			fsum: sp,
			geoAlbers: pd,
			geoAlbersUsa: C3,
			geoArea: Dw,
			geoAzimuthalEqualArea: R3,
			geoAzimuthalEqualAreaRaw: Zs,
			geoAzimuthalEquidistant: P3,
			geoAzimuthalEquidistantRaw: Qs,
			geoBounds: Bw,
			geoCentroid: Gw,
			geoCircle: Ww,
			geoClipAntimeridian: Wu,
			geoClipCircle: J0,
			geoClipExtent: t3,
			geoClipRectangle: ua,
			geoConicConformal: z3,
			geoConicConformalRaw: bd,
			geoConicEqualArea: Po,
			geoConicEqualAreaRaw: gd,
			geoConicEquidistant: O3,
			geoConicEquidistantRaw: vd,
			geoContains: u3,
			geoDistance: To,
			geoEqualEarth: L3,
			geoEqualEarthRaw: Ks,
			geoEquirectangular: D3,
			geoEquirectangularRaw: Jr,
			geoGnomonic: B3,
			geoGnomonicRaw: Js,
			geoGraticule: ed,
			geoGraticule10: s3,
			geoIdentity: U3,
			geoInterpolate: c3,
			geoLength: td,
			geoMercator: I3,
			geoMercatorRaw: fi,
			geoNaturalEarth1: q3,
			geoNaturalEarth1Raw: tc,
			geoOrthographic: Y3,
			geoOrthographicRaw: nc,
			geoPath: w3,
			geoProjection: xn,
			geoProjectionMutator: Vs,
			geoRotation: W0,
			geoStereographic: H3,
			geoStereographicRaw: ec,
			geoStream: un,
			geoTransform: x3,
			geoTransverseMercator: X3,
			geoTransverseMercatorRaw: rc,
			gray: oy,
			greatest: ch,
			greatestIndex: Cp,
			group: eh,
			groupSort: gp,
			groups: rh,
			hcl: oo,
			hierarchy: ic,
			histogram: Nc,
			hsl: eo,
			html: Z_,
			image: G_,
			index: hp,
			indexes: dp,
			interpolate: Wn,
			interpolateArray: ly,
			interpolateBasis: Bh,
			interpolateBasisClosed: Uh,
			interpolateBlues: D8,
			interpolateBrBG: p8,
			interpolateBuGn: $8,
			interpolateBuPu: T8,
			interpolateCividis: q8,
			interpolateCool: X8,
			interpolateCubehelix: Sy,
			interpolateCubehelixDefault: Y8,
			interpolateCubehelixLong: Ko,
			interpolateDate: Wh,
			interpolateDiscrete: gy,
			interpolateGnBu: S8,
			interpolateGreens: O8,
			interpolateGreys: F8,
			interpolateHcl: $y,
			interpolateHclLong: Ty,
			interpolateHsl: wy,
			interpolateHslLong: xy,
			interpolateHue: py,
			interpolateInferno: J8,
			interpolateLab: My,
			interpolateMagma: K8,
			interpolateNumber: tn,
			interpolateNumberArray: Ss,
			interpolateObject: Vh,
			interpolateOrRd: k8,
			interpolateOranges: U8,
			interpolatePRGn: m8,
			interpolatePiYG: y8,
			interpolatePlasma: tx,
			interpolatePuBu: E8,
			interpolatePuBuGn: A8,
			interpolatePuOr: b8,
			interpolatePuRd: N8,
			interpolatePurples: L8,
			interpolateRainbow: G8,
			interpolateRdBu: v8,
			interpolateRdGy: _8,
			interpolateRdPu: C8,
			interpolateRdYlBu: w8,
			interpolateRdYlGn: x8,
			interpolateReds: B8,
			interpolateRgb: Hr,
			interpolateRgbBasis: Hh,
			interpolateRgbBasisClosed: fy,
			interpolateRound: Qo,
			interpolateSinebow: j8,
			interpolateSpectral: M8,
			interpolateString: ks,
			interpolateTransformCss: Qh,
			interpolateTransformSvg: Kh,
			interpolateTurbo: Z8,
			interpolateViridis: Q8,
			interpolateWarm: H8,
			interpolateYlGn: P8,
			interpolateYlGnBu: R8,
			interpolateYlOrBr: I8,
			interpolateYlOrRd: z8,
			interpolateZoom: Jh,
			interrupt: oe,
			intersection: Xp,
			interval: Cy,
			isoFormat: Z4,
			isoParse: K4,
			json: V_,
			lab: io,
			lch: ay,
			least: Np,
			leastIndex: hh,
			line: Mc,
			lineRadial: Ll,
			link: $a,
			linkHorizontal: bx,
			linkRadial: _x,
			linkVertical: vx,
			local: $h,
			map: Bp,
			matcher: vs,
			max: Lr,
			maxIndex: ps,
			mean: xp,
			median: Mp,
			medianIndex: $p,
			merge: ys,
			min: Ji,
			minIndex: ms,
			mode: Sp,
			namespace: ei,
			namespaces: vu,
			nice: ds,
			now: ii,
			pack: E6,
			packEnclose: M6,
			packSiblings: k6,
			pairs: kp,
			partition: N6,
			path: Ds,
			pathRound: Rv,
			permute: sh,
			pie: dx,
			piecewise: r0,
			pointRadial: Cr,
			pointer: Zt,
			pointers: Um,
			polygonArea: G6,
			polygonCentroid: W6,
			polygonContains: Q6,
			polygonHull: Z6,
			polygonLength: K6,
			precisionFixed: R0,
			precisionPrefix: P0,
			precisionRound: I0,
			quadtree: ia,
			quantile: Br,
			quantileIndex: lh,
			quantileSorted: fh,
			quantize: ky,
			quickselect: qo,
			radialArea: Bl,
			radialLine: Ll,
			randomBates: e5,
			randomBernoulli: o5,
			randomBeta: Rd,
			randomBinomial: Pd,
			randomCauchy: u5,
			randomExponential: r5,
			randomGamma: uc,
			randomGeometric: Cd,
			randomInt: t5,
			randomIrwinHall: Nd,
			randomLcg: h5,
			randomLogNormal: n5,
			randomLogistic: s5,
			randomNormal: ac,
			randomPareto: i5,
			randomPoisson: c5,
			randomUniform: J6,
			randomWeibull: a5,
			range: Fn,
			rank: Ep,
			reduce: Up,
			reverse: qp,
			rgb: Ve,
			ribbon: Bv,
			ribbonArrow: Uv,
			rollup: oh,
			rollups: ah,
			scaleBand: sc,
			scaleDiverging: m1,
			scaleDivergingLog: y1,
			scaleDivergingPow: _c,
			scaleDivergingSqrt: i8,
			scaleDivergingSymlog: b1,
			scaleIdentity: Od,
			scaleImplicit: us,
			scaleLinear: Dd,
			scaleLog: Ld,
			scaleOrdinal: fa,
			scalePoint: d5,
			scalePow: dc,
			scaleQuantile: qd,
			scaleQuantize: Yd,
			scaleRadial: Ud,
			scaleSequential: h1,
			scaleSequentialLog: d1,
			scaleSequentialPow: vc,
			scaleSequentialQuantile: p1,
			scaleSequentialSqrt: r8,
			scaleSequentialSymlog: g1,
			scaleSqrt: T5,
			scaleSymlog: Bd,
			scaleThreshold: Hd,
			scaleTime: n8,
			scaleUtc: e8,
			scan: Rp,
			schemeAccent: o8,
			schemeBlues: U1,
			schemeBrBG: _1,
			schemeBuGn: E1,
			schemeBuPu: N1,
			schemeCategory10: v1,
			schemeDark2: a8,
			schemeGnBu: C1,
			schemeGreens: q1,
			schemeGreys: Y1,
			schemeObservable10: u8,
			schemeOrRd: R1,
			schemeOranges: G1,
			schemePRGn: w1,
			schemePaired: s8,
			schemePastel1: c8,
			schemePastel2: f8,
			schemePiYG: x1,
			schemePuBu: I1,
			schemePuBuGn: P1,
			schemePuOr: M1,
			schemePuRd: z1,
			schemePurples: H1,
			schemeRdBu: $1,
			schemeRdGy: T1,
			schemeRdPu: D1,
			schemeRdYlBu: S1,
			schemeRdYlGn: k1,
			schemeReds: X1,
			schemeSet1: l8,
			schemeSet2: h8,
			schemeSet3: d8,
			schemeSpectral: A1,
			schemeTableau10: g8,
			schemeYlGn: F1,
			schemeYlGnBu: O1,
			schemeYlOrBr: L1,
			schemeYlOrRd: B1,
			select: ht,
			selectAll: qm,
			selection: be,
			selector: Xo,
			selectorAll: bs,
			shuffle: Pp,
			shuffler: dh,
			some: Fp,
			sort: mu,
			stack: jx,
			stackOffsetDiverging: Qx,
			stackOffsetExpand: Zx,
			stackOffsetNone: or,
			stackOffsetSilhouette: Kx,
			stackOffsetWiggle: Jx,
			stackOrderAppearance: Mg,
			stackOrderAscending: $g,
			stackOrderDescending: n7,
			stackOrderInsideOut: e7,
			stackOrderNone: ar,
			stackOrderReverse: r7,
			stratify: I6,
			style: ce,
			subset: Wp,
			sum: Ip,
			superset: ph,
			svg: Q_,
			symbol: Ex,
			symbolAsterisk: tg,
			symbolCircle: Ta,
			symbolCross: ng,
			symbolDiamond: rg,
			symbolDiamond2: ig,
			symbolPlus: og,
			symbolSquare: ag,
			symbolSquare2: ug,
			symbolStar: cg,
			symbolTimes: fs,
			symbolTriangle: fg,
			symbolTriangle2: lg,
			symbolWye: hg,
			symbolX: fs,
			symbols: Ul,
			symbolsFill: Ul,
			symbolsStroke: Ax,
			text: ra,
			thresholdFreedmanDiaconis: _p,
			thresholdScott: wp,
			thresholdSturges: gs,
			tickFormat: zd,
			tickIncrement: se,
			tickStep: Ki,
			ticks: ue,
			timeDay: fr,
			timeDays: C5,
			get timeFormat() {
				return mc;
			},
			timeFormatDefaultLocale: f1,
			timeFormatLocale: i1,
			timeFriday: Wd,
			timeFridays: F5,
			timeHour: ga,
			timeHours: E5,
			timeInterval: _t,
			timeMillisecond: er,
			timeMilliseconds: xl,
			timeMinute: ha,
			timeMinutes: k5,
			timeMonday: ti,
			timeMondays: I5,
			timeMonth: ma,
			timeMonths: G5,
			get timeParse() {
				return c1;
			},
			timeSaturday: Vd,
			timeSaturdays: L5,
			timeSecond: Cn,
			timeSeconds: $l,
			timeSunday: rr,
			timeSundays: Tl,
			timeThursday: pe,
			timeThursdays: O5,
			timeTickInterval: r1,
			timeTicks: e1,
			timeTuesday: Xd,
			timeTuesdays: z5,
			timeWednesday: Gd,
			timeWednesdays: D5,
			timeWeek: rr,
			timeWeeks: Tl,
			timeYear: vn,
			timeYears: V5,
			timeout: Tu,
			timer: ta,
			timerFlush: a0,
			transition: f0,
			transpose: gh,
			tree: U6,
			treemap: q6,
			treemapBinary: Y6,
			treemapDice: li,
			treemapResquarify: X6,
			treemapSlice: ca,
			treemapSliceDice: H6,
			treemapSquarify: Ed,
			tsv: X_,
			tsvFormat: C_,
			tsvFormatBody: R_,
			tsvFormatRow: I_,
			tsvFormatRows: P_,
			tsvFormatValue: z_,
			tsvParse: w0,
			tsvParseRows: N_,
			union: Vp,
			unixDay: pc,
			unixDays: P5,
			utcDay: di,
			utcDays: R5,
			get utcFormat() {
				return ba;
			},
			utcFriday: Qd,
			utcFridays: H5,
			utcHour: pa,
			utcHours: N5,
			utcMillisecond: er,
			utcMilliseconds: xl,
			utcMinute: da,
			utcMinutes: A5,
			utcMonday: ni,
			utcMondays: B5,
			utcMonth: ya,
			utcMonths: W5,
			get utcParse() {
				return yc;
			},
			utcSaturday: Kd,
			utcSaturdays: X5,
			utcSecond: Cn,
			utcSeconds: $l,
			utcSunday: ir,
			utcSundays: Sl,
			utcThursday: me,
			utcThursdays: Y5,
			utcTickInterval: n1,
			utcTicks: t1,
			utcTuesday: jd,
			utcTuesdays: U5,
			utcWednesday: Zd,
			utcWednesdays: q5,
			utcWeek: ir,
			utcWeeks: Sl,
			utcYear: _n,
			utcYears: j5,
			variance: Ql,
			window: _s,
			xml: j_,
			zip: Dp,
			zoom: kg,
			zoomIdentity: Aa,
			zoomTransform: Sg
		},
		Symbol.toStringTag,
		{ value: 'Module' }
	)
);
var l7 = Eg(
	'<div class="min-h-screen bg-gray-900 text-gray-100"><!> <div class="container mx-auto max-w-7xl px-4 py-8 svelte-wdj7z6"><section class="mx-auto mb-12 max-w-4xl text-center"><h1 class="mb-6 text-5xl font-bold text-teal-400">Unit Explorer</h1> <div class="mb-8 rounded-xl bg-gray-800/50 p-6 shadow-lg"><h2 class="mb-4 text-xl font-semibold text-teal-300">How to Use</h2> <div class="grid grid-cols-1 gap-6 text-left md:grid-cols-3"><div class="flex items-start space-x-3"><svg class="mt-1 h-6 w-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg> <div><h3 class="mb-1 font-medium text-teal-200">Navigate</h3> <p class="text-sm text-gray-400">Drag nodes to explore connections. Use mouse wheel or buttons to zoom.</p></div></div> <div class="flex items-start space-x-3"><svg class="mt-1 h-6 w-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <div><h3 class="mb-1 font-medium text-teal-200">Inspect</h3> <p class="text-sm text-gray-400">Hover over nodes to see details. Click unit nodes to view full info.</p></div></div> <div class="flex items-start space-x-3"><svg class="mt-1 h-6 w-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg> <div><h3 class="mb-1 font-medium text-teal-200">Switch Factions</h3> <p class="text-sm text-gray-400">Toggle between Armada and Cortex to explore different unit trees.</p></div></div></div></div> <div class="mb-8 flex justify-center gap-4"><button class="rounded-lg bg-gray-700/50 px-6 py-3 font-medium transition-all hover:bg-teal-600/80">Armada</button> <button class="rounded-lg bg-gray-700/50 px-6 py-3 font-medium transition-all hover:bg-teal-600/80">Cortex</button></div></section> <div class="graph-wrapper svelte-wdj7z6"><div class="zoom-controls svelte-wdj7z6"><button class="zoom-button svelte-wdj7z6" aria-label="Zoom in"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon svelte-wdj7z6"><path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd"></path></svg></button> <button class="zoom-button svelte-wdj7z6" aria-label="Zoom out"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon svelte-wdj7z6"><path fill-rule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clip-rule="evenodd"></path></svg></button></div> <div class="graph-container svelte-wdj7z6" role="presentation"></div></div></div></div> <div class="tooltip svelte-wdj7z6"></div>',
	1
);
function M7(t, n) {
	Ng(n, !1);
	const e = Xg(),
		r = () => mi(Lg, '$unitsByFactionTypeTech', e),
		i = () => mi(Bg, '$unitNamesDetails', e),
		o = () => mi(Ug, '$unitsData', e),
		a = () => mi(qg, '$unitIconMap', e);
	let u = Na('arm'),
		c = Na(),
		s = Na(!1);
	const f = [],
		h = [];
	let l,
		d = null,
		p,
		m = null;
	Gg(async () => {
		await Fg(), pi(s, !0);
	});
	function g() {
		if (!ot(s) || !r() || !i()) {
			console.log('Data not ready:', {
				dataLoaded: ot(s),
				unitsByFactionTypeTech: r(),
				unitNamesDetails: i()
			});
			return;
		}
		(h.length = 0),
			(f.length = 0),
			h.push({ id: ot(u), group: 'faction', name: i().units.factions[ot(u)] || ot(u) }),
			Object.keys(r()[ot(u)]).forEach((I) => {
				const X = `${ot(u)}-${I}`;
				h.push({ id: X, group: 'type', name: I }),
					f.push({ source: ot(u), target: X }),
					Object.keys(r()[ot(u)][I]).forEach((U) => {
						if (U === 'none')
							Object.keys(r()[ot(u)][I][U]).forEach((J) => {
								const B = `${ot(u)}-${I}-${J}`;
								h.push({ id: B, group: 'tech', name: J }),
									f.push({ source: X, target: B }),
									r()[ot(u)][I][U][J].forEach((Z) => {
										const D = `${ot(u)}-${I}-${J}-${i().units.names[Z.name] || Z.name}`;
										h.push({
											id: D,
											group: 'unit',
											name: i().units.names[Z.name] || Z.name,
											dbName: Z.name,
											tech: J
										}),
											f.push({ source: B, target: D });
									});
							});
						else {
							const J = `${ot(u)}-${I}-${U}`;
							h.push({ id: J, group: 'subType', name: U }),
								f.push({ source: X, target: J }),
								Object.keys(r()[ot(u)][I][U]).forEach((B) => {
									const Z = `${ot(u)}-${I}-${U}-${B}`;
									h.push({ id: Z, group: 'tech', name: B }),
										f.push({ source: J, target: Z }),
										r()[ot(u)][I][U][B].forEach((D) => {
											const V = `${ot(u)}-${I}-${U}-${B}-${i().units.names[D.name] || D.name}`;
											h.push({
												id: V,
												group: 'unit',
												name: i().units.names[D.name] || D.name,
												dbName: D.name,
												tech: B
											}),
												f.push({ source: Z, target: V });
										});
								});
						}
					});
			});
	}
	function y(I, X) {
		const U = f.filter((D) => D.source === I.id || D.target === I.id).length,
			J = f.filter((D) => D.source === X.id || D.target === X.id).length;
		return 200 + (U + J) * 20;
	}
	function _(I) {
		var tt;
		if (!I || !o() || !o()[I]) return '';
		const X = o()[I],
			U = (tt = X == null ? void 0 : X.data) == null ? void 0 : tt[I];
		if (!U || !U.buildpic) return '';
		const J = U.buildpic,
			B = J.split('/'),
			Z = B.pop(),
			D = B.pop(),
			V = Z.split('.')[0].toLowerCase();
		return D
			? `${Se}/unitpics_webp/${D}/${V}.webp`
			: (console.warn(`Buildpic for ${I} might be missing category: ${J}. Using fallback path.`),
				`${Se}/unitpics_webp/${V}.webp`);
	}
	function v(I) {
		return !a() || !I || !a()[I] ? '' : `${Se}/${a()[I]}`;
	}
	function b(I) {
		I.group === 'unit' || I.group === 'faction' || I.group === 'type' || I.group;
		let X = '';
		if (I.group === 'faction') {
			const U = h.filter((B) => B.id.startsWith(`${I.id}-`) && B.group === 'type'),
				J = h.filter((B) => B.id.startsWith(`${I.id}-`) && B.group === 'unit').length;
			X = `
				<div class="p-4 bg-gray-900/95 rounded-lg shadow-xl">
					<div class="flex items-center justify-between mb-4 pb-3 border-b border-gray-700">
						<h3 class="text-xl font-semibold text-white">${I.name}</h3>
						<span class="px-2.5 py-1 text-xs font-medium bg-gray-700 text-gray-300 rounded-full uppercase tracking-wide">${I.group}</span>
					</div>
					<div class="space-y-4">
						<div class="flex justify-between items-center">
							<span class="text-gray-400">Total Units</span>
							<span class="text-white font-medium">${J}</span>
						</div>
						<div class="relative">
							<button onclick="this.nextElementSibling.classList.toggle('hidden')" 
									class="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-200 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
								<span>Types (${U.length})</span>
								<svg class="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
								</svg>
							</button>
							<div class="hidden absolute w-full mt-2 py-2 bg-gray-800 rounded-lg shadow-xl z-10 max-h-48 overflow-y-auto">
								${U.map(
									(B) => `
									<div class="px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer">
										${B.name}
									</div>
								`
								).join('')}
							</div>
						</div>
					</div>
				</div>`;
		} else if (I.group === 'type') {
			const U = h.filter((Z) => Z.id.startsWith(`${I.id}-`) && Z.group === 'subType'),
				J = h.filter((Z) => Z.id.startsWith(`${I.id}-`) && Z.group === 'unit'),
				B = I.id.split('-');
			X = `
				<div class="p-4 bg-gray-900/95 rounded-lg shadow-xl">
					<div class="flex items-center justify-between mb-4 pb-3 border-b border-gray-700">
						<h3 class="text-xl font-semibold text-white">${I.name}</h3>
						<span class="px-2.5 py-1 text-xs font-medium bg-gray-700 text-gray-300 rounded-full uppercase tracking-wide">${I.group}</span>
					</div>
					<div class="space-y-4">
						<div class="flex flex-col gap-1">
							<span class="text-gray-400 text-sm">Path</span>
							<div class="flex items-center gap-2 text-gray-200">
								${B.map((Z) => `<span class="px-2 py-1 bg-gray-800 rounded text-sm">${Z}</span>`).join(`
								<svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
								</svg>`)}
							</div>
						</div>
						${
							U.length > 0
								? `
							<div class="relative">
								<button onclick="this.nextElementSibling.classList.toggle('hidden')" 
										class="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-200 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
									<span>Subtypes (${U.length})</span>
									<svg class="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
									</svg>
								</button>
								<div class="hidden absolute w-full mt-2 py-2 bg-gray-800 rounded-lg shadow-xl z-10 max-h-48 overflow-y-auto">
									${U.map(
										(Z) => `
										<div class="px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer">
											${Z.name}
										</div>
									`
									).join('')}
								</div>
							</div>
						`
								: ''
						}
						<div class="relative">
							<button onclick="this.nextElementSibling.classList.toggle('hidden')" 
									class="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-200 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
								<span>Units (${J.length})</span>
								<svg class="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
								</svg>
							</button>
							<div class="hidden absolute w-full mt-2 py-2 bg-gray-800 rounded-lg shadow-xl z-10 max-h-48 overflow-y-auto">
								${J.map(
									(Z) => `
									<div class="px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer">
										${Z.name}
									</div>
								`
								).join('')}
							</div>
						</div>
					</div>
				</div>`;
		} else if (I.group === 'unit') {
			const U = I.id.split('-'),
				J = _(I.dbName),
				B = J
					? `<div class="mb-4 flex justify-center"><img src="${J}" alt="${I.name}" class="max-w-[150px] max-h-[150px] object-contain rounded border border-gray-700"></div>`
					: '',
				Z = v(I.dbName),
				D = Z
					? `<div class="mt-2 flex justify-center"><img src="${Z}" alt="${I.name} icon" class="max-w-[48px] max-h-[48px] object-contain"></div>`
					: '';
			X = `
				<div class="p-4 bg-gray-900/95 rounded-lg shadow-xl">
					${B}
					${D}
					<div class="flex items-center justify-between mt-2 mb-4 pb-3 border-b border-gray-700">
						<a href="${Se}/unit?name=${I.dbName}" class="text-xl font-semibold text-white hover:text-teal-400 transition-colors">${I.name}</a>
						<span class="px-2.5 py-1 text-xs font-medium bg-gray-700 text-gray-300 rounded-full uppercase tracking-wide">${I.group}</span>
					</div>
					<div class="space-y-4">
						<div class="flex flex-col gap-1">
							<span class="text-gray-400 text-sm">Path</span>
							<div class="flex items-center gap-2 text-gray-200 flex-wrap">
								${U.map((V) => `<span class="px-2 py-1 bg-gray-800 rounded text-sm">${V}</span>`).join(`
								<svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
								</svg>`)}
							</div>
						</div>
						<div class="flex justify-between items-center">
							<span class="text-gray-400">Tech Level</span>
							<span class="text-white font-medium">${I.tech}</span>
						</div>
						<a href="${Se}/unit?name=${I.dbName}" 
							class="block w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium text-center">
							View Unit Details
						</a>
					</div>
				</div>`;
		} else if (I.group === 'subType') {
			const U = h.filter((B) => B.id.startsWith(`${I.id}-`) && B.group === 'unit'),
				J = I.id.split('-');
			X = `
				<div class="p-4 bg-gray-900/95 rounded-lg shadow-xl">
					<div class="flex items-center justify-between mb-4 pb-3 border-b border-gray-700">
						<h3 class="text-xl font-semibold text-white">${I.name}</h3>
						<span class="px-2.5 py-1 text-xs font-medium bg-gray-700 text-gray-300 rounded-full uppercase tracking-wide">${I.group}</span>
					</div>
					<div class="space-y-4">
						<div class="flex flex-col gap-1">
							<span class="text-gray-400 text-sm">Path</span>
							<div class="flex items-center gap-2 text-gray-200 flex-wrap">
								${J.map((B) => `<span class="px-2 py-1 bg-gray-800 rounded text-sm">${B}</span>`).join(`
								<svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
								</svg>`)}
							</div>
						</div>
						<div class="relative">
							<button onclick="this.nextElementSibling.classList.toggle('hidden')" 
									class="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-200 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
								<span>Units (${U.length})</span>
								<svg class="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
								</svg>
							</button>
							<div class="hidden absolute w-full mt-2 py-2 bg-gray-800 rounded-lg shadow-xl z-10 max-h-48 overflow-y-auto">
								${U.map(
									(B) => `
									<div class="px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer">
										${B.name}
									</div>
								`
								).join('')}
							</div>
						</div>
					</div>
				</div>`;
		} else if (I.group === 'tech') {
			const U = h.filter((B) => B.id.startsWith(`${I.id}-`) && B.group === 'unit'),
				J = I.id.split('-');
			X = `
				<div class="p-4 bg-gray-900/95 rounded-lg shadow-xl">
					<div class="flex items-center justify-between mb-4 pb-3 border-b border-gray-700">
						<h3 class="text-xl font-semibold text-white">Tech Level ${I.name}</h3>
						<span class="px-2.5 py-1 text-xs font-medium bg-gray-700 text-gray-300 rounded-full uppercase tracking-wide">${I.group}</span>
					</div>
					<div class="space-y-4">
						<div class="flex flex-col gap-1">
							<span class="text-gray-400 text-sm">Path</span>
							<div class="flex items-center gap-2 text-gray-200 flex-wrap">
								${J.map((B) => `<span class="px-2 py-1 bg-gray-800 rounded text-sm">${B}</span>`).join(`
								<svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
								</svg>`)}
							</div>
						</div>
						<div class="relative">
							<button onclick="this.nextElementSibling.classList.toggle('hidden')" 
									class="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-200 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
								<span>Units (${U.length})</span>
								<svg class="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
								</svg>
							</button>
							<div class="hidden absolute w-full mt-2 py-2 bg-gray-800 rounded-lg shadow-xl z-10 max-h-48 overflow-y-auto">
								${U.map(
									(B) => `
									<div class="px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer">
										${B.name}
									</div>
								`
								).join('')}
							</div>
						</div>
					</div>
				</div>`;
		}
		return X;
	}
	function w(I, X, U) {
		const B = window.innerWidth,
			Z = window.innerHeight;
		let D = I.x + 10,
			V = I.y + 10;
		return (
			D + X > B - 10 && (D = I.x - X - 10), V + U > Z - 10 && (V = I.y - U - 10), { x: D, y: V }
		);
	}
	function x() {
		d && d.stop();
		const I = ot(c).clientWidth,
			X = ot(c).clientHeight,
			U = fa(v1),
			J = ht(ot(c)).append('svg').attr('width', I).attr('height', X),
			B = J.append('g'),
			Z = kg()
				.scaleExtent([0.1, 10])
				.on('zoom', (H) => {
					B.attr('transform', H.transform);
				});
		(l = Z), J.call(Z);
		const D = k0(h)
			.force(
				'link',
				S0(f)
					.id((H) => H.id)
					.distance((H) => y(H.source, H.target))
					.strength(1)
					.iterations(15)
			)
			.force('charge', A0().strength(-500))
			.force('center', M0(I / 2, X / 2).strength(0.1))
			.force('collide', T0(15).strength(0.5))
			.alphaTarget(0.4)
			.alphaMin(0.001)
			.alphaDecay(0.02)
			.velocityDecay(0.5);
		d = D;
		const V = B.append('g')
				.attr('stroke', '#999')
				.attr('stroke-opacity', 0.6)
				.selectAll('line')
				.data(f)
				.join('line')
				.attr('stroke-width', (H) => Math.sqrt(H.value)),
			tt = B.append('g')
				.selectAll('text')
				.data(h)
				.join('text')
				.text((H) => H.name)
				.attr('font-size', (H) => {
					switch (H.group) {
						case 'faction':
							return '25px';
						case 'type':
							return '20px';
						case 'subType':
							return '17px';
						case 'tech':
							return '15px';
						case 'unit':
							return '12px';
						default:
							return '12px';
					}
				})
				.attr('text-anchor', 'middle')
				.attr('dominant-baseline', 'central')
				.attr('fill', (H) => U(H.group))
				.style('font-weight', 'bold')
				.style('cursor', 'pointer')
				.on('click', (H, at) => {
					at.group !== 'unit' && H.preventDefault();
				})
				.each(function (H) {
					H.group === 'unit' &&
						ht(this)
							.append('a')
							.attr('href', `${Se}/unit?name=${H.dbName}`)
							.node()
							.appendChild(this.firstChild);
				})
				.on('mouseover', (H, at) => {
					(m = at.id), clearTimeout(p), D.alpha(0.1).alphaTarget(0).velocityDecay(0.7);
					const j = ht('body').select('.tooltip');
					j.html(b(at));
					const Vt = j.node().getBoundingClientRect(),
						{ x: Ht, y: Ea } = w(H, Vt.width, Vt.height);
					j
						.style('left', `${Ht}px`)
						.style('top', `${Ea}px`)
						.style('opacity', 1)
						.transition()
						.duration(200),
						(at.fx = at.x),
						(at.fy = at.y);
				})
				.on('mousemove', (H, at) => {
					const j = ht('body').select('.tooltip'),
						ut = j.node();
					if (ut) {
						const Vt = ut.getBoundingClientRect(),
							{ x: Ht, y: Ea } = w(H, Vt.width, Vt.height);
						j.style('left', `${Ht}px`).style('top', `${Ea}px`).style('opacity', 1);
					}
				})
				.on('mouseout', (H, at) => {
					var ut;
					(m = null),
						D.alpha(0.4).alphaTarget(0.4).velocityDecay(0.5).restart(),
						(at.fx = null),
						(at.fy = null),
						((ut = ht('body').select('.tooltip').node()) != null && ut.matches(':hover')) || E();
				});
		tt.call(Sh().on('start', F).on('drag', gt).on('end', ct)),
			D.on('tick', () => {
				V.attr('x1', (H) => H.source.x)
					.attr('y1', (H) => H.source.y)
					.attr('x2', (H) => H.target.x)
					.attr('y2', (H) => H.target.y),
					tt.attr('x', (H) => H.x).attr('y', (H) => H.y);
			}),
			ht('body')
				.select('.tooltip')
				.on('mouseenter', () => {
					clearTimeout(p);
				})
				.on('mouseleave', () => {
					m || E();
				});
		function F(H) {
			(H.subject.fx = H.subject.x),
				(H.subject.fy = H.subject.y),
				D.alpha(0.1).alphaTarget(0).velocityDecay(0.7);
		}
		function gt(H) {
			D.alpha(0.1).alphaTarget(0).velocityDecay(0.7), (H.subject.fx = H.x), (H.subject.fy = H.y);
			const at = ht('body').select('.tooltip'),
				ut = at.node().getBoundingClientRect(),
				{ x: Vt, y: Ht } = w(H.sourceEvent, ut.width, ut.height);
			at.style('left', `${Vt}px`).style('top', `${Ht}px`).style('opacity', 1);
		}
		function ct(H) {
			(H.subject.fx = null), (H.subject.fy = null);
		}
	}
	function k(I) {
		if (!l) return;
		ht(ot(c))
			.select('svg')
			.transition()
			.duration(300)
			.call(l.scaleBy, I === 'in' ? 1.2 : 0.8);
	}
	Wg(() => {
		d && d.stop();
	});
	function E() {
		clearTimeout(p),
			(p = setTimeout(() => {
				var X;
				const I = ht('body').select('.tooltip');
				((X = I.node()) != null && X.matches(':hover')) ||
					I.transition()
						.duration(200)
						.style('opacity', 0)
						.end()
						.then(() => I.html(''));
			}, 500));
	}
	function N() {
		const I = ot(c).getBoundingClientRect(),
			X = window.scrollY + I.top - 100;
		window.scrollTo({ top: X, behavior: 'smooth' });
	}
	Cg(
		() => (ot(c), ot(s), r(), i(), ot(u), f7),
		() => {
			ot(c) && ot(s) && r() && i() && ot(u) && (g(), ht(ot(c)).selectAll('*').remove(), x());
		}
	),
		Rg(),
		Hg();
	var A = l7(),
		$ = Pg(A),
		P = Me($);
	Og(P);
	var C = $e(P, 2),
		M = Me(C),
		S = $e(Me(M), 4),
		T = Me(S),
		R = $e(T, 2);
	Te(S), Te(M);
	var O = $e(M, 2),
		z = Me(O),
		L = Me(z),
		q = $e(L, 2);
	Te(z);
	var W = $e(z, 2);
	Yg(
		W,
		(I) => pi(c, I),
		() => ot(c)
	),
		Te(O),
		Te(C),
		Te($),
		Dg(2),
		Ig(() => {
			Ec(T, 'bg-teal-600', ot(u) === 'arm'), Ec(R, 'bg-teal-600', ot(u) === 'cor');
		}),
		lr('click', T, () => pi(u, 'arm')),
		lr('click', R, () => pi(u, 'cor')),
		lr('click', L, () => k('in')),
		lr('click', q, () => k('out')),
		lr('mouseenter', W, N),
		Ag(t, A),
		zg();
}
export { M7 as component };
