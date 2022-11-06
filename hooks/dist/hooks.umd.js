!(function(n, t) {
	'object' == typeof exports && 'undefined' != typeof module
		? t(exports, require('preact'))
		: 'function' == typeof define && define.amd
		? define(['exports', 'preact'], t)
		: t(((n || self).preactHooks = {}), n.preact);
})(this, function(n, t) {
	var u,
		r,
		i,
		o,
		f = 0,
		e = [],
		c = [],
		a = t.options.__b,
		v = t.options.__r,
		l = t.options.diffed,
		d = t.options.__c,
		p = t.options.unmount;
	function s(n, u) {
		t.options.__h && t.options.__h(r, n, f || u), (f = 0);
		var i = r.__H || (r.__H = { __: [], __h: [] });
		return n >= i.__.length && i.__.push({ __V: c }), i.__[n];
	}
	function y(n) {
		return (f = 1), m(g, n);
	}
	function m(n, t, i) {
		var o = s(u++, 2);
		if (
			((o.t = n),
			!o.__c &&
				((o.__ = [
					i ? i(t) : g(void 0, t),
					function(n) {
						var t = o.__N ? o.__N[0] : o.__[0],
							u = o.t(t, n);
						t !== u && ((o.__N = [u, o.__[1]]), o.__c.setState({}));
					}
				]),
				(o.__c = r),
				!r.u))
		) {
			r.u = !0;
			var f = r.shouldComponentUpdate;
			r.shouldComponentUpdate = function(n, t, u) {
				if (!o.__c.__H) return !0;
				var r = o.__c.__H.__.filter(function(n) {
					return n.__c;
				});
				if (
					r.every(function(n) {
						return !n.__N;
					})
				)
					return !f || f.call(this, n, t, u);
				var i = !1;
				return (
					r.forEach(function(n) {
						if (n.__N) {
							var t = n.__[0];
							(n.__ = n.__N), (n.__N = void 0), t !== n.__[0] && (i = !0);
						}
					}),
					!(!i && o.__c.props === n) && (!f || f.call(this, n, t, u))
				);
			};
		}
		return o.__N || o.__;
	}
	function h(n, i) {
		var o = s(u++, 4);
		!t.options.__s && F(o.__H, i) && ((o.__ = n), (o.i = i), r.__h.push(o));
	}
	function _(n, t) {
		var r = s(u++, 7);
		return F(r.__H, t) ? ((r.__V = n()), (r.i = t), (r.__h = n), r.__V) : r.__;
	}
	function T() {
		for (var n; (n = e.shift()); )
			if (n.__P && n.__H)
				try {
					n.__H.__h.forEach(x), n.__H.__h.forEach(A), (n.__H.__h = []);
				} catch (u) {
					(n.__H.__h = []), t.options.__e(u, n.__v);
				}
	}
	(t.options.__b = function(n) {
		(r = null), a && a(n);
	}),
		(t.options.__r = function(n) {
			v && v(n), (u = 0);
			var t = (r = n.__c).__H;
			t &&
				(i === r
					? ((t.__h = []),
					  (r.__h = []),
					  t.__.forEach(function(n) {
							n.__N && (n.__ = n.__N), (n.__V = c), (n.__N = n.i = void 0);
					  }))
					: (t.__h.forEach(x), t.__h.forEach(A), (t.__h = []))),
				(i = r);
		}),
		(t.options.diffed = function(n) {
			l && l(n);
			var u = n.__c;
			u &&
				u.__H &&
				(u.__H.__h.length &&
					((1 !== e.push(u) && o === t.options.requestAnimationFrame) ||
						((o = t.options.requestAnimationFrame) || q)(T)),
				u.__H.__.forEach(function(n) {
					n.i && (n.__H = n.i),
						n.__V !== c && (n.__ = n.__V),
						(n.i = void 0),
						(n.__V = c);
				})),
				(i = r = null);
		}),
		(t.options.__c = function(n, u) {
			u.some(function(n) {
				try {
					n.__h.forEach(x),
						(n.__h = n.__h.filter(function(n) {
							return !n.__ || A(n);
						}));
				} catch (r) {
					u.some(function(n) {
						n.__h && (n.__h = []);
					}),
						(u = []),
						t.options.__e(r, n.__v);
				}
			}),
				d && d(n, u);
		}),
		(t.options.unmount = function(n) {
			p && p(n);
			var u,
				r = n.__c;
			r &&
				r.__H &&
				(r.__H.__.forEach(function(n) {
					try {
						x(n);
					} catch (n) {
						u = n;
					}
				}),
				(r.__H = void 0),
				u && t.options.__e(u, r.__v));
		});
	var b = 'function' == typeof requestAnimationFrame;
	function q(n) {
		var t,
			u = function() {
				clearTimeout(r), b && cancelAnimationFrame(t), setTimeout(n);
			},
			r = setTimeout(u, 100);
		b && (t = requestAnimationFrame(u));
	}
	function x(n) {
		var t = r,
			u = n.__c;
		'function' == typeof u && ((n.__c = void 0), u()), (r = t);
	}
	function A(n) {
		var t = r;
		(n.__c = n.__()), (r = t);
	}
	function F(n, t) {
		return (
			!n ||
			n.length !== t.length ||
			t.some(function(t, u) {
				return t !== n[u];
			})
		);
	}
	function g(n, t) {
		return 'function' == typeof t ? t(n) : t;
	}
	(n.useCallback = function(n, t) {
		return (
			(f = 8),
			_(function() {
				return n;
			}, t)
		);
	}),
		(n.useContext = function(n) {
			var t = r.context[n.__c],
				i = s(u++, 9);
			return (
				(i.c = n),
				t ? (null == i.__ && ((i.__ = !0), t.sub(r)), t.props.value) : n.__
			);
		}),
		(n.useDebugValue = function(n, u) {
			t.options.useDebugValue && t.options.useDebugValue(u ? u(n) : n);
		}),
		(n.useEffect = function(n, i) {
			var o = s(u++, 3);
			!t.options.__s &&
				F(o.__H, i) &&
				((o.__ = n), (o.i = i), r.__H.__h.push(o));
		}),
		(n.useErrorBoundary = function(n) {
			var t = s(u++, 10),
				i = y();
			return (
				(t.__ = n),
				r.componentDidCatch ||
					(r.componentDidCatch = function(n, u) {
						t.__ && t.__(n, u), i[1](n);
					}),
				[
					i[0],
					function() {
						i[1](void 0);
					}
				]
			);
		}),
		(n.useId = function() {
			var n = s(u++, 11);
			if (!n.__) {
				for (var t = r.__v; null !== t && !t.__m && null !== t.__; ) t = t.__;
				var i = t.__m || (t.__m = [0, 0]);
				n.__ = 'P' + i[0] + '-' + i[1]++;
			}
			return n.__;
		}),
		(n.useImperativeHandle = function(n, t, u) {
			(f = 6),
				h(
					function() {
						return 'function' == typeof n
							? (n(t()),
							  function() {
									return n(null);
							  })
							: n
							? ((n.current = t()),
							  function() {
									return (n.current = null);
							  })
							: void 0;
					},
					null == u ? u : u.concat(n)
				);
		}),
		(n.useLayoutEffect = h),
		(n.useMemo = _),
		(n.useReducer = m),
		(n.useRef = function(n) {
			return (
				(f = 5),
				_(function() {
					return { current: n };
				}, [])
			);
		}),
		(n.useState = y);
});
//# sourceMappingURL=hooks.umd.js.map
