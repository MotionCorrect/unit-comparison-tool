const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			'../nodes/0.EbcksqT2.js',
			'../chunks/disclose-version.D6IHqBz7.js',
			'../chunks/runtime.B6PTYWss.js',
			'../chunks/legacy.BC6soP9j.js',
			'../assets/0.Cal5ITFF.css',
			'../nodes/1.BE44upHb.js',
			'../chunks/render.DTXsa5-Z.js',
			'../chunks/events.CuhszENT.js',
			'../chunks/lifecycle.ZI99Jbm1.js',
			'../chunks/entry.pjfs3gTR.js',
			'../chunks/paths.CC_1dxGD.js',
			'../chunks/index-client.BbMgc3IQ.js',
			'../nodes/2.Bd0fSK7a.js',
			'../chunks/if.Bxm8qDEX.js',
			'../chunks/each.Bw4TUKtu.js',
			'../chunks/Navbar.Cu8EIbEp.js',
			'../chunks/store.CxMiR7dL.js',
			'../nodes/3.CsQogAy1.js',
			'../chunks/dpsCalculations.BjJuydXE.js',
			'../chunks/this.j9i47_k0.js',
			'../chunks/props.CjMNljKH.js',
			'../assets/dpsCalculations.Dpr6dT5-.css',
			'../assets/3.CNGZ7TAE.css',
			'../nodes/4.Bz70eA47.js',
			'../assets/4.DMTQL5VC.css',
			'../nodes/5.JCWYNdzG.js'
		])
) => i.map((i) => d[i]);
var U = (r) => {
	throw TypeError(r);
};
var G = (r, t, s) => t.has(r) || U('Cannot ' + s);
var l = (r, t, s) => (G(r, t, 'read from private field'), s ? s.call(r) : t.get(r)),
	p = (r, t, s) =>
		t.has(r)
			? U('Cannot add the same private member more than once')
			: t instanceof WeakSet
				? t.add(r)
				: t.set(r, s),
	C = (r, t, s, n) => (G(r, t, 'write to private field'), n ? n.call(r, s) : t.set(r, s), s);
import {
	h as K,
	j as J,
	f as M,
	T as Q,
	x as X,
	v as $,
	y as tt,
	g as v,
	am as et,
	d as A,
	aK as rt,
	aC as st,
	N as at,
	p as nt,
	Z as ot,
	_ as it,
	aL as ct,
	a7 as O,
	b as lt,
	aM as S,
	s as ut,
	c as ft,
	r as mt,
	t as dt,
	a3 as j
} from '../chunks/runtime.B6PTYWss.js';
import { h as _t, m as ht, u as vt, s as gt } from '../chunks/render.DTXsa5-Z.js';
import { a as R, t as Y, c as D, b as yt } from '../chunks/disclose-version.D6IHqBz7.js';
import { i as I } from '../chunks/if.Bxm8qDEX.js';
import { p as V, a as Et } from '../chunks/props.CjMNljKH.js';
import { b as B } from '../chunks/this.j9i47_k0.js';
import { o as bt } from '../chunks/index-client.BbMgc3IQ.js';
function q(r, t, s) {
	K && J();
	var n = r,
		o,
		c;
	M(() => {
		o !== (o = t()) && (c && (tt(c), (c = null)), o && (c = X(() => s(n, o))));
	}, Q),
		K && (n = $);
}
function Pt(r) {
	return class extends Rt {
		constructor(t) {
			super({ component: r, ...t });
		}
	};
}
var g, f;
class Rt {
	constructor(t) {
		p(this, g);
		p(this, f);
		var c;
		var s = new Map(),
			n = (a, e) => {
				var m = at(e);
				return s.set(a, m), m;
			};
		const o = new Proxy(
			{ ...(t.props || {}), $$events: {} },
			{
				get(a, e) {
					return v(s.get(e) ?? n(e, Reflect.get(a, e)));
				},
				has(a, e) {
					return e === et ? !0 : (v(s.get(e) ?? n(e, Reflect.get(a, e))), Reflect.has(a, e));
				},
				set(a, e, m) {
					return A(s.get(e) ?? n(e, m), m), Reflect.set(a, e, m);
				}
			}
		);
		C(
			this,
			f,
			(t.hydrate ? _t : ht)(t.component, {
				target: t.target,
				anchor: t.anchor,
				props: o,
				context: t.context,
				intro: t.intro ?? !1,
				recover: t.recover
			})
		),
			(!((c = t == null ? void 0 : t.props) != null && c.$$host) || t.sync === !1) && rt(),
			C(this, g, o.$$events);
		for (const a of Object.keys(l(this, f)))
			a === '$set' ||
				a === '$destroy' ||
				a === '$on' ||
				st(this, a, {
					get() {
						return l(this, f)[a];
					},
					set(e) {
						l(this, f)[a] = e;
					},
					enumerable: !0
				});
		(l(this, f).$set = (a) => {
			Object.assign(o, a);
		}),
			(l(this, f).$destroy = () => {
				vt(l(this, f));
			});
	}
	$set(t) {
		l(this, f).$set(t);
	}
	$on(t, s) {
		l(this, g)[t] = l(this, g)[t] || [];
		const n = (...o) => s.call(this, ...o);
		return (
			l(this, g)[t].push(n),
			() => {
				l(this, g)[t] = l(this, g)[t].filter((o) => o !== n);
			}
		);
	}
	$destroy() {
		l(this, f).$destroy();
	}
}
(g = new WeakMap()), (f = new WeakMap());
const xt = 'modulepreload',
	wt = function (r, t) {
		return new URL(r, t).href;
	},
	W = {},
	x = function (t, s, n) {
		let o = Promise.resolve();
		if (s && s.length > 0) {
			const a = document.getElementsByTagName('link'),
				e = document.querySelector('meta[property=csp-nonce]'),
				m = (e == null ? void 0 : e.nonce) || (e == null ? void 0 : e.getAttribute('nonce'));
			o = Promise.allSettled(
				s.map((u) => {
					if (((u = wt(u, n)), u in W)) return;
					W[u] = !0;
					const y = u.endsWith('.css'),
						T = y ? '[rel="stylesheet"]' : '';
					if (!!n)
						for (let E = a.length - 1; E >= 0; E--) {
							const i = a[E];
							if (i.href === u && (!y || i.rel === 'stylesheet')) return;
						}
					else if (document.querySelector(`link[href="${u}"]${T}`)) return;
					const _ = document.createElement('link');
					if (
						((_.rel = y ? 'stylesheet' : xt),
						y || (_.as = 'script'),
						(_.crossOrigin = ''),
						(_.href = u),
						m && _.setAttribute('nonce', m),
						document.head.appendChild(_),
						y)
					)
						return new Promise((E, i) => {
							_.addEventListener('load', E),
								_.addEventListener('error', () => i(new Error(`Unable to preload CSS for ${u}`)));
						});
				})
			);
		}
		function c(a) {
			const e = new Event('vite:preloadError', { cancelable: !0 });
			if (((e.payload = a), window.dispatchEvent(e), !e.defaultPrevented)) throw a;
		}
		return o.then((a) => {
			for (const e of a || []) e.status === 'rejected' && c(e.reason);
			return t().catch(c);
		});
	},
	Ft = {};
var kt = Y(
		'<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'
	),
	Lt = Y('<!> <!>', 1);
function Ot(r, t) {
	nt(t, !0);
	let s = V(t, 'components', 23, () => []),
		n = V(t, 'data_0', 3, null),
		o = V(t, 'data_1', 3, null);
	ot(() => t.stores.page.set(t.page)),
		it(() => {
			t.stores, t.page, t.constructors, s(), t.form, n(), o(), t.stores.page.notify();
		});
	let c = S(!1),
		a = S(!1),
		e = S(null);
	bt(() => {
		const i = t.stores.page.subscribe(() => {
			v(c) &&
				(A(a, !0),
				ct().then(() => {
					A(e, Et(document.title || 'untitled page'));
				}));
		});
		return A(c, !0), i;
	});
	const m = j(() => t.constructors[1]);
	var u = Lt(),
		y = O(u);
	{
		var T = (i) => {
				var h = D();
				const w = j(() => t.constructors[0]);
				var k = O(h);
				q(
					k,
					() => v(w),
					(b, P) => {
						B(
							P(b, {
								get data() {
									return n();
								},
								get form() {
									return t.form;
								},
								children: (d, pt) => {
									var N = D(),
										Z = O(N);
									q(
										Z,
										() => v(m),
										(z, H) => {
											B(
												H(z, {
													get data() {
														return o();
													},
													get form() {
														return t.form;
													}
												}),
												(L) => (s()[1] = L),
												() => {
													var L;
													return (L = s()) == null ? void 0 : L[1];
												}
											);
										}
									),
										R(d, N);
								},
								$$slots: { default: !0 }
							}),
							(d) => (s()[0] = d),
							() => {
								var d;
								return (d = s()) == null ? void 0 : d[0];
							}
						);
					}
				),
					R(i, h);
			},
			F = (i) => {
				var h = D();
				const w = j(() => t.constructors[0]);
				var k = O(h);
				q(
					k,
					() => v(w),
					(b, P) => {
						B(
							P(b, {
								get data() {
									return n();
								},
								get form() {
									return t.form;
								}
							}),
							(d) => (s()[0] = d),
							() => {
								var d;
								return (d = s()) == null ? void 0 : d[0];
							}
						);
					}
				),
					R(i, h);
			};
		I(y, (i) => {
			t.constructors[1] ? i(T) : i(F, !1);
		});
	}
	var _ = ut(y, 2);
	{
		var E = (i) => {
			var h = kt(),
				w = ft(h);
			{
				var k = (b) => {
					var P = yt();
					dt(() => gt(P, v(e))), R(b, P);
				};
				I(w, (b) => {
					v(a) && b(k);
				});
			}
			mt(h), R(i, h);
		};
		I(_, (i) => {
			v(c) && i(E);
		});
	}
	R(r, u), lt();
}
const Nt = Pt(Ot),
	Ut = [
		() =>
			x(() => import('../nodes/0.EbcksqT2.js'), __vite__mapDeps([0, 1, 2, 3, 4]), import.meta.url),
		() =>
			x(
				() => import('../nodes/1.BE44upHb.js'),
				__vite__mapDeps([5, 1, 2, 3, 6, 7, 8, 9, 10, 11]),
				import.meta.url
			),
		() =>
			x(
				() => import('../nodes/2.Bd0fSK7a.js'),
				__vite__mapDeps([12, 1, 2, 3, 6, 7, 13, 14, 15, 10, 8, 16, 9, 11]),
				import.meta.url
			),
		() =>
			x(
				() => import('../nodes/3.CsQogAy1.js'),
				__vite__mapDeps([17, 1, 2, 3, 6, 7, 13, 14, 15, 10, 18, 19, 20, 16, 8, 21, 11, 22]),
				import.meta.url
			),
		() =>
			x(
				() => import('../nodes/4.Bz70eA47.js'),
				__vite__mapDeps([23, 1, 2, 3, 7, 15, 10, 19, 8, 16, 11, 24]),
				import.meta.url
			),
		() =>
			x(
				() => import('../nodes/5.JCWYNdzG.js'),
				__vite__mapDeps([25, 1, 2, 3, 6, 7, 13, 14, 15, 10, 18, 19, 20, 16, 8, 21, 11, 9]),
				import.meta.url
			)
	],
	Gt = [],
	Kt = { '/': [2], '/compare': [3], '/explore': [4], '/unit': [5] },
	At = {
		handleError: ({ error: r }) => {
			console.error(r);
		},
		reroute: () => {},
		transport: {}
	},
	Tt = Object.fromEntries(Object.entries(At.transport).map(([r, t]) => [r, t.decode])),
	Wt = (r, t) => Tt[r](t);
export {
	Wt as decode,
	Tt as decoders,
	Kt as dictionary,
	At as hooks,
	Ft as matchers,
	Ut as nodes,
	Nt as root,
	Gt as server_loads
};
