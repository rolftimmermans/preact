var n,
	t,
	r,
	u = require('preact'),
	o = 0,
	i = [],
	c = u.options.__b,
	e = u.options.__r,
	f = u.options.diffed,
	a = u.options.__c,
	v = u.options.unmount;
function p(n, r) {
	u.options.__h && u.options.__h(t, n, o || r), (o = 0);
	var i = t.__H || (t.__H = { __: [], __h: [] });
	return n >= i.__.length && i.__.push({}), i.__[n];
}
function s(n) {
	return (o = 1), x(A, n);
}
function x(r, u, o) {
	var i = p(n++, 2);
	return (
		(i.t = r),
		i.__c ||
			((i.__ = [
				o ? o(u) : A(void 0, u),
				function(n) {
					var t = i.t(i.__[0], n);
					i.__[0] !== t && ((i.__ = [t, i.__[1]]), i.__c.setState({}));
				}
			]),
			(i.__c = t)),
		i.__
	);
}
function l(r, o) {
	var i = p(n++, 4);
	!u.options.__s && q(i.__H, o) && ((i.__ = r), (i.__H = o), t.__h.push(i));
}
function m(t, r) {
	var u = p(n++, 7);
	return q(u.__H, r) && ((u.__ = t()), (u.__H = r), (u.__h = t)), u.__;
}
function y() {
	var n;
	for (
		i.sort(function(n, t) {
			return n.__v.__b - t.__v.__b;
		});
		(n = i.pop());

	)
		if (n.__P)
			try {
				n.__H.__h.forEach(_), n.__H.__h.forEach(d), (n.__H.__h = []);
			} catch (t) {
				(n.__H.__h = []), u.options.__e(t, n.__v);
			}
}
(u.options.__b = function(n) {
	(t = null), c && c(n);
}),
	(u.options.__r = function(r) {
		e && e(r), (n = 0);
		var u = (t = r.__c).__H;
		u && (u.__h.forEach(_), u.__h.forEach(d), (u.__h = []));
	}),
	(u.options.diffed = function(n) {
		f && f(n);
		var o = n.__c;
		o &&
			o.__H &&
			o.__H.__h.length &&
			((1 !== i.push(o) && r === u.options.requestAnimationFrame) ||
				(
					(r = u.options.requestAnimationFrame) ||
					function(n) {
						var t,
							r = function() {
								clearTimeout(u), h && cancelAnimationFrame(t), setTimeout(n);
							},
							u = setTimeout(r, 100);
						h && (t = requestAnimationFrame(r));
					}
				)(y)),
			(t = null);
	}),
	(u.options.__c = function(n, t) {
		t.some(function(n) {
			try {
				n.__h.forEach(_),
					(n.__h = n.__h.filter(function(n) {
						return !n.__ || d(n);
					}));
			} catch (r) {
				t.some(function(n) {
					n.__h && (n.__h = []);
				}),
					(t = []),
					u.options.__e(r, n.__v);
			}
		}),
			a && a(n, t);
	}),
	(u.options.unmount = function(n) {
		v && v(n);
		var t,
			r = n.__c;
		r &&
			r.__H &&
			(r.__H.__.forEach(function(n) {
				try {
					_(n);
				} catch (n) {
					t = n;
				}
			}),
			t && u.options.__e(t, r.__v));
	});
var h = 'function' == typeof requestAnimationFrame;
function _(n) {
	var r = t,
		u = n.__c;
	'function' == typeof u && ((n.__c = void 0), u()), (t = r);
}
function d(n) {
	var r = t;
	(n.__c = n.__()), (t = r);
}
function q(n, t) {
	return (
		!n ||
		n.length !== t.length ||
		t.some(function(t, r) {
			return t !== n[r];
		})
	);
}
function A(n, t) {
	return 'function' == typeof t ? t(n) : t;
}
(exports.useState = s),
	(exports.useReducer = x),
	(exports.useEffect = function(r, o) {
		var i = p(n++, 3);
		!u.options.__s &&
			q(i.__H, o) &&
			((i.__ = r), (i.__H = o), t.__H.__h.push(i));
	}),
	(exports.useLayoutEffect = l),
	(exports.useRef = function(n) {
		return (
			(o = 5),
			m(function() {
				return { current: n };
			}, [])
		);
	}),
	(exports.useImperativeHandle = function(n, t, r) {
		(o = 6),
			l(
				function() {
					'function' == typeof n ? n(t()) : n && (n.current = t());
				},
				null == r ? r : r.concat(n)
			);
	}),
	(exports.useMemo = m),
	(exports.useCallback = function(n, t) {
		return (
			(o = 8),
			m(function() {
				return n;
			}, t)
		);
	}),
	(exports.useContext = function(r) {
		var u = t.context[r.__c],
			o = p(n++, 9);
		return (
			(o.c = r),
			u ? (null == o.__ && ((o.__ = !0), u.sub(t)), u.props.value) : r.__
		);
	}),
	(exports.useDebugValue = function(n, t) {
		u.options.useDebugValue && u.options.useDebugValue(t ? t(n) : n);
	}),
	(exports.useErrorBoundary = function(r) {
		var u = p(n++, 10),
			o = s();
		return (
			(u.__ = r),
			t.componentDidCatch ||
				(t.componentDidCatch = function(n) {
					u.__ && u.__(n), o[1](n);
				}),
			[
				o[0],
				function() {
					o[1](void 0);
				}
			]
		);
	});
//# sourceMappingURL=hooks.js.map
