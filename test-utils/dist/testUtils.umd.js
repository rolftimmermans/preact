!(function(n, t) {
	'object' == typeof exports && 'undefined' != typeof module
		? t(exports, require('preact'))
		: 'function' == typeof define && define.amd
		? define(['exports', 'preact'], t)
		: t((n.preactTestUtils = {}), n.preact);
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
	(n.setupRerender = e),
		(n.act = function(n) {
			if (++o > 1) {
				var u = n();
				return r(u)
					? u.then(function() {
							--o;
					  })
					: (--o, Promise.resolve());
			}
			var f,
				c,
				d = t.options.requestAnimationFrame,
				p = e();
			t.options.requestAnimationFrame = function(n) {
				return (f = n);
			};
			var a,
				l,
				s = function() {
					try {
						for (p(); f; ) (c = f), (f = null), c(), p();
						i();
					} catch (n) {
						a || (a = n);
					}
					(t.options.requestAnimationFrame = d), --o;
				};
			try {
				l = n();
			} catch (n) {
				a = n;
			}
			if (r(l))
				return l.then(s, function(n) {
					throw (s(), n);
				});
			if ((s(), a)) throw a;
			return Promise.resolve();
		}),
		(n.teardown = i);
});
//# sourceMappingURL=testUtils.umd.js.map
