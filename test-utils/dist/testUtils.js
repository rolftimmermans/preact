var r = require('preact');
function n() {
	return (
		(r.options.t = r.options.debounceRendering),
		(r.options.debounceRendering = function(n) {
			return (r.options.o = n);
		}),
		function() {
			return r.options.o && r.options.o();
		}
	);
}
var t = function(r) {
		return null != r && 'function' == typeof r.then;
	},
	e = 0;
function o() {
	r.options.o && (r.options.o(), delete r.options.o),
		void 0 !== r.options.t
			? ((r.options.debounceRendering = r.options.t), delete r.options.t)
			: (r.options.debounceRendering = void 0);
}
(exports.setupRerender = n),
	(exports.act = function(u) {
		if (++e > 1) {
			var i = u();
			return t(i)
				? i.then(function() {
						--e;
				  })
				: (--e, Promise.resolve());
		}
		var c,
			f,
			a = r.options.requestAnimationFrame,
			v = n();
		r.options.requestAnimationFrame = function(r) {
			return (c = r);
		};
		var l,
			p,
			s = function() {
				try {
					for (v(); c; ) (f = c), (c = null), f(), v();
					o();
				} catch (r) {
					l || (l = r);
				}
				(r.options.requestAnimationFrame = a), --e;
			};
		try {
			p = u();
		} catch (r) {
			l = r;
		}
		if (t(p))
			return p.then(s, function(r) {
				throw (s(), r);
			});
		if ((s(), l)) throw l;
		return Promise.resolve();
	}),
	(exports.teardown = o);
//# sourceMappingURL=testUtils.js.map
