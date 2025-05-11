import { ay as b, aA as h } from './runtime.B6PTYWss.js';
const e = [];
function d(o, l = b) {
	let n = null;
	const i = new Set();
	function r(t) {
		if (h(o, t) && ((o = t), n)) {
			const c = !e.length;
			for (const s of i) s[1](), e.push(s, o);
			if (c) {
				for (let s = 0; s < e.length; s += 2) e[s][0](e[s + 1]);
				e.length = 0;
			}
		}
	}
	function u(t) {
		r(t(o));
	}
	function _(t, c = b) {
		const s = [t, c];
		return (
			i.add(s),
			i.size === 1 && (n = l(r, u) || b),
			t(o),
			() => {
				i.delete(s), i.size === 0 && n && (n(), (n = null));
			}
		);
	}
	return { set: r, update: u, subscribe: _ };
}
var a;
const p = ((a = globalThis.__sveltekit_661ocz) == null ? void 0 : a.base) ?? '';
var f;
const z = ((f = globalThis.__sveltekit_661ocz) == null ? void 0 : f.assets) ?? p;
export { z as a, p as b, d as w };
