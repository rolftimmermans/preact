import { options as r } from 'preact';
export { Fragment } from 'preact';
var _ = 0;
function o(o, e, n, t, f) {
	var l,
		s,
		u = {};
	for (s in e) 'ref' == s ? (l = e[s]) : (u[s] = e[s]);
	var a = {
		type: o,
		props: u,
		key: n,
		ref: l,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__d: void 0,
		__c: null,
		__h: null,
		constructor: void 0,
		__v: --_,
		__source: f,
		__self: t
	};
	if ('function' == typeof o && (l = o.defaultProps))
		for (s in l) void 0 === u[s] && (u[s] = l[s]);
	return r.vnode && r.vnode(a), a;
}
export { o as jsx, o as jsxDEV, o as jsxs };
//# sourceMappingURL=jsxRuntime.module.js.map
