var r = require('preact'),
	_ = 0;
function e(e, o, n, t, l) {
	var u,
		f,
		i = {};
	for (f in o) 'ref' == f ? (u = o[f]) : (i[f] = o[f]);
	var p = {
		type: e,
		props: i,
		key: n,
		ref: u,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__d: void 0,
		__c: null,
		__h: null,
		constructor: void 0,
		__v: --_,
		__source: t,
		__self: l
	};
	if ('function' == typeof e && (u = e.defaultProps))
		for (f in u) void 0 === i[f] && (i[f] = u[f]);
	return r.options.vnode && r.options.vnode(p), p;
}
(exports.Fragment = r.Fragment),
	(exports.jsx = e),
	(exports.jsxs = e),
	(exports.jsxDEV = e);
//# sourceMappingURL=jsxRuntime.js.map
