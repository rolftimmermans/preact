!(function(e, n) {
	'object' == typeof exports && 'undefined' != typeof module
		? n(exports, require('preact'))
		: 'function' == typeof define && define.amd
		? define(['exports', 'preact'], n)
		: n(((e || self).jsxRuntime = {}), e.preact);
})(this, function(e, n) {
	var o = 0;
	function t(e, t, r, f, i) {
		var u,
			_,
			l = {};
		for (_ in t) 'ref' == _ ? (u = t[_]) : (l[_] = t[_]);
		var c = {
			type: e,
			props: l,
			key: r,
			ref: u,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__d: void 0,
			__c: null,
			__h: null,
			constructor: void 0,
			__v: --o,
			__source: i,
			__self: f
		};
		if ('function' == typeof e && (u = e.defaultProps))
			for (_ in u) void 0 === l[_] && (l[_] = u[_]);
		return n.options.vnode && n.options.vnode(c), c;
	}
	Object.defineProperty(e, 'Fragment', {
		enumerable: !0,
		get: function() {
			return n.Fragment;
		}
	}),
		(e.jsx = t),
		(e.jsxDEV = t),
		(e.jsxs = t);
});
//# sourceMappingURL=jsxRuntime.umd.js.map
