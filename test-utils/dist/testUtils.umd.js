!(function(n, t) {
	'object' == typeof exports && 'undefined' != typeof module
		? t(exports, require('preact'))
		: 'function' == typeof define && define.amd
		? define(['exports', 'preact'], t)
		: t(((n || self).preactTestUtils = {}), n.preact);
})(this, function(n, t) {
	function e() {
		return (
			(t.options.t = t.options.debounceRendering),
			(t.options.debounceRendering = function(n) {
				return (t.options.o = n);
			}),
			function() {
				return t.options.o && t.options.o();
			}
		);
	}
	var r = function(n) {
			return null != n && 'function' == typeof n.then;
		},
		o = 0;
	function i() {
		t.options.o && (t.options.o(), delete t.options.o),
			void 0 !== t.options.t
				? ((t.options.debounceRendering = t.options.t), delete t.options.t)
				: (t.options.debounceRendering = void 0);
	}
	(n.act = function(n) {
		if (++o > 1) {
			var f = n();
			return r(f)
				? f.then(function() {
						--o;
				  })
				: (--o, Promise.resolve());
		}
		var u,
			c,
			l = t.options.requestAnimationFrame,
			d = e();
		t.options.requestAnimationFrame = function(n) {
			return (u = n);
		};
		var a,
			p,
			s = function() {
				try {
					for (d(); u; ) (c = u), (u = null), c(), d();
				} catch (n) {
					a || (a = n);
				} finally {
					i();
				}
				(t.options.requestAnimationFrame = l), --o;
			};
		try {
			p = n();
		} catch (n) {
			a = n;
		}
		if (r(p))
			return p.then(s, function(n) {
				throw (s(), n);
			});
		if ((s(), a)) throw a;
		return Promise.resolve();
	}),
		(n.setupRerender = e),
		(n.teardown = i);
});
//# sourceMappingURL=testUtils.umd.js.map
