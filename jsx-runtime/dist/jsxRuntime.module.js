import { options as r, Fragment as _ } from 'preact';
export { Fragment } from 'preact';
var o = 0;
function e(_, e, n, t, f) {
	var l,
		s,
		u = {};
	for (s in e) 'ref' == s ? (l = e[s]) : (u[s] = e[s]);
	var a = {
		type: _,
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
		__v: --o,
		__source: t,
		__self: f
	};
	if ('function' == typeof _ && (l = _.defaultProps))
		for (s in l) void 0 === u[s] && (u[s] = l[s]);
	return r.vnode && r.vnode(a), a;
}
export { e as jsx, e as jsxs, e as jsxDEV };
//# sourceMappingURL=jsxRuntime.module.js.map
