!(function(e, n) {
	'object' == typeof exports && 'undefined' != typeof module
		? n(exports, require('preact'))
		: 'function' == typeof define && define.amd
		? define(['exports', 'preact'], n)
		: n((e.jsxRuntime = {}), e.preact);
})(this, function(e, n) {
	var o = 0;
	function r(e, r, t, _, f) {
		var i,
			u,
			c = {};
		for (u in r) 'ref' == u ? (i = r[u]) : (c[u] = r[u]);
		var l = {
			type: e,
			props: c,
			key: t,
			ref: i,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__d: void 0,
			__c: null,
			__h: null,
			constructor: void 0,
			__v: --o,
			__source: _,
			__self: f
		};
		if ('function' == typeof e && (i = e.defaultProps))
			for (u in i) void 0 === c[u] && (c[u] = i[u]);
		return n.options.vnode && n.options.vnode(l), l;
	}
	(e.Fragment = n.Fragment), (e.jsx = r), (e.jsxs = r), (e.jsxDEV = r);
});
//# sourceMappingURL=jsxRuntime.umd.js.map
