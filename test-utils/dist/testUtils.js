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
(exports.act = function(u) {
	if (++e > 1) {
		var i = u();
		return t(i)
			? i.then(function() {
					--e;
			  })
			: (--e, Promise.resolve());
	}
	var f,
		c,
		a = r.options.requestAnimationFrame,
		l = n();
	r.options.requestAnimationFrame = function(r) {
		return (f = r);
	};
	var v,
		p,
		s = function() {
			try {
				for (l(); f; ) (c = f), (f = null), c(), l();
			} catch (r) {
				v || (v = r);
			} finally {
				o();
			}
			(r.options.requestAnimationFrame = a), --e;
		};
	try {
		p = u();
	} catch (r) {
		v = r;
	}
	if (t(p))
		return p.then(s, function(r) {
			throw (s(), r);
		});
	if ((s(), v)) throw v;
	return Promise.resolve();
}),
	(exports.setupRerender = n),
	(exports.teardown = o);
//# sourceMappingURL=testUtils.js.map
