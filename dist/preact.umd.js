!(function(n, l) {
	'object' == typeof exports && 'undefined' != typeof module
		? l(exports)
		: 'function' == typeof define && define.amd
		? define(['exports'], l)
		: l(((n || self).preact = {}));
})(this, function(n) {
	var l,
		u,
		i,
		t,
		o,
		f,
		r,
		e = {},
		c = [],
		s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
	function a(n, l) {
		for (var u in l) n[u] = l[u];
		return n;
	}
	function h(n) {
		var l = n.parentNode;
		l && l.removeChild(n);
	}
	function v(n, u, i) {
		var t,
			o,
			f,
			r = {};
		for (f in u)
			'key' == f ? (t = u[f]) : 'ref' == f ? (o = u[f]) : (r[f] = u[f]);
		if (
			(arguments.length > 2 &&
				(r.children = arguments.length > 3 ? l.call(arguments, 2) : i),
			'function' == typeof n && null != n.defaultProps)
		)
			for (f in n.defaultProps) void 0 === r[f] && (r[f] = n.defaultProps[f]);
		return y(n, r, t, o, null);
	}
	function y(n, l, t, o, f) {
		var r = {
			type: n,
			props: l,
			key: t,
			ref: o,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__d: void 0,
			__c: null,
			__h: null,
			constructor: void 0,
			__v: null == f ? ++i : f
		};
		return null == f && null != u.vnode && u.vnode(r), r;
	}
	function d(n) {
		return n.children;
	}
	function p(n, l) {
		(this.props = n), (this.context = l);
	}
	function _(n, l) {
		if (null == l) return n.__ ? _(n.__, n.__.__k.indexOf(n) + 1) : null;
		for (var u; l < n.__k.length; l++)
			if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
		return 'function' == typeof n.type ? _(n) : null;
	}
	function b(n) {
		var l, u;
		if (null != (n = n.__) && null != n.__c) {
			for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)
				if (null != (u = n.__k[l]) && null != u.__e) {
					n.__e = n.__c.base = u.__e;
					break;
				}
			return b(n);
		}
	}
	function k(n) {
		((!n.__d && (n.__d = !0) && o.push(n) && !g.__r++) ||
			f !== u.debounceRendering) &&
			((f = u.debounceRendering) || setTimeout)(g);
	}
	function g() {
		for (var n; (g.__r = o.length); )
			(n = o.sort(function(n, l) {
				return n.__v.__b - l.__v.__b;
			})),
				(o = []),
				n.some(function(n) {
					var l, u, i, t, o, f;
					n.__d &&
						((o = (t = (l = n).__v).__e),
						(f = l.__P) &&
							((u = []),
							((i = a({}, t)).__v = t.__v + 1),
							H(
								f,
								t,
								i,
								l.__n,
								void 0 !== f.ownerSVGElement,
								null != t.__h ? [o] : null,
								u,
								null == o ? _(t) : o,
								t.__h
							),
							I(u, t),
							t.__e != o && b(t)));
				});
	}
	function m(n, l, u, i, t, o, f, r, s, a) {
		var h,
			v,
			p,
			b,
			k,
			g,
			m,
			A = (i && i.__k) || c,
			T = A.length;
		for (u.__k = [], h = 0; h < l.length; h++)
			if (
				null !=
				(b = u.__k[h] =
					null == (b = l[h]) || 'boolean' == typeof b
						? null
						: 'string' == typeof b ||
						  'number' == typeof b ||
						  'bigint' == typeof b
						? y(null, b, null, null, b)
						: Array.isArray(b)
						? y(d, { children: b }, null, null, null)
						: b.__b > 0
						? y(b.type, b.props, b.key, b.ref ? b.ref : null, b.__v)
						: b)
			) {
				if (
					((b.__ = u),
					(b.__b = u.__b + 1),
					null === (p = A[h]) || (p && b.key == p.key && b.type === p.type))
				)
					A[h] = void 0;
				else
					for (v = 0; v < T; v++) {
						if ((p = A[v]) && b.key == p.key && b.type === p.type) {
							A[v] = void 0;
							break;
						}
						p = null;
					}
				H(n, b, (p = p || e), t, o, f, r, s, a),
					(k = b.__e),
					(v = b.ref) &&
						p.ref != v &&
						(m || (m = []),
						p.ref && m.push(p.ref, null, b),
						m.push(v, b.__c || k, b)),
					null != k
						? (null == g && (g = k),
						  'function' == typeof b.type && b.__k === p.__k
								? (b.__d = s = w(b, s, n))
								: (s = x(n, b, p, A, k, s)),
						  'function' == typeof u.type && (u.__d = s))
						: s && p.__e == s && s.parentNode != n && (s = _(p));
			}
		for (u.__e = g, h = T; h--; ) null != A[h] && M(A[h], A[h]);
		if (m) for (h = 0; h < m.length; h++) L(m[h], m[++h], m[++h]);
	}
	function w(n, l, u) {
		for (var i, t = n.__k, o = 0; t && o < t.length; o++)
			(i = t[o]) &&
				((i.__ = n),
				(l =
					'function' == typeof i.type ? w(i, l, u) : x(u, i, i, t, i.__e, l)));
		return l;
	}
	function x(n, l, u, i, t, o) {
		var f, r, e;
		if (void 0 !== l.__d) (f = l.__d), (l.__d = void 0);
		else if (null == u || t != o || null == t.parentNode)
			n: if (null == o || o.parentNode !== n) n.appendChild(t), (f = null);
			else {
				for (r = o, e = 0; (r = r.nextSibling) && e < i.length; e += 1)
					if (r == t) break n;
				n.insertBefore(t, o), (f = o);
			}
		return void 0 !== f ? f : t.nextSibling;
	}
	function A(n, l, u, i, t) {
		var o;
		for (o in u)
			'children' === o || 'key' === o || o in l || C(n, o, null, u[o], i);
		for (o in l)
			(t && 'function' != typeof l[o]) ||
				'children' === o ||
				'key' === o ||
				'value' === o ||
				'checked' === o ||
				u[o] === l[o] ||
				C(n, o, l[o], u[o], i);
	}
	function T(n, l, u) {
		'-' === l[0]
			? n.setProperty(l, u)
			: (n[l] =
					null == u ? '' : 'number' != typeof u || s.test(l) ? u : u + 'px');
	}
	function C(n, l, u, i, t) {
		var o;
		n: if ('style' === l)
			if ('string' == typeof u) n.style.cssText = u;
			else {
				if (('string' == typeof i && (n.style.cssText = i = ''), i))
					for (l in i) (u && l in u) || T(n.style, l, '');
				if (u) for (l in u) (i && u[l] === i[l]) || T(n.style, l, u[l]);
			}
		else if ('o' === l[0] && 'n' === l[1])
			(o = l !== (l = l.replace(/Capture$/, ''))),
				(l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2)),
				n.l || (n.l = {}),
				(n.l[l + o] = u),
				u
					? i || n.addEventListener(l, o ? j : $, o)
					: n.removeEventListener(l, o ? j : $, o);
		else if ('dangerouslySetInnerHTML' !== l) {
			if (t) l = l.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
			else if (
				'href' !== l &&
				'list' !== l &&
				'form' !== l &&
				'tabIndex' !== l &&
				'download' !== l &&
				l in n
			)
				try {
					n[l] = null == u ? '' : u;
					break n;
				} catch (n) {}
			'function' == typeof u ||
				(null == u || (!1 === u && -1 == l.indexOf('-'))
					? n.removeAttribute(l)
					: n.setAttribute(l, u));
		}
	}
	function $(n) {
		this.l[n.type + !1](u.event ? u.event(n) : n);
	}
	function j(n) {
		this.l[n.type + !0](u.event ? u.event(n) : n);
	}
	function H(n, l, i, t, o, f, r, e, c) {
		var s,
			h,
			v,
			y,
			_,
			b,
			k,
			g,
			w,
			x,
			A,
			T,
			C,
			$,
			j,
			H = l.type;
		if (void 0 !== l.constructor) return null;
		null != i.__h &&
			((c = i.__h), (e = l.__e = i.__e), (l.__h = null), (f = [e])),
			(s = u.__b) && s(l);
		try {
			n: if ('function' == typeof H) {
				if (
					((g = l.props),
					(w = (s = H.contextType) && t[s.__c]),
					(x = s ? (w ? w.props.value : s.__) : t),
					i.__c
						? (k = (h = l.__c = i.__c).__ = h.__E)
						: ('prototype' in H && H.prototype.render
								? (l.__c = h = new H(g, x))
								: ((l.__c = h = new p(g, x)),
								  (h.constructor = H),
								  (h.render = N)),
						  w && w.sub(h),
						  (h.props = g),
						  h.state || (h.state = {}),
						  (h.context = x),
						  (h.__n = t),
						  (v = h.__d = !0),
						  (h.__h = []),
						  (h._sb = [])),
					null == h.__s && (h.__s = h.state),
					null != H.getDerivedStateFromProps &&
						(h.__s == h.state && (h.__s = a({}, h.__s)),
						a(h.__s, H.getDerivedStateFromProps(g, h.__s))),
					(y = h.props),
					(_ = h.state),
					v)
				)
					null == H.getDerivedStateFromProps &&
						null != h.componentWillMount &&
						h.componentWillMount(),
						null != h.componentDidMount && h.__h.push(h.componentDidMount);
				else {
					if (
						(null == H.getDerivedStateFromProps &&
							g !== y &&
							null != h.componentWillReceiveProps &&
							h.componentWillReceiveProps(g, x),
						(!h.__e &&
							null != h.shouldComponentUpdate &&
							!1 === h.shouldComponentUpdate(g, h.__s, x)) ||
							l.__v === i.__v)
					) {
						for (
							h.props = g,
								h.state = h.__s,
								l.__v !== i.__v && (h.__d = !1),
								h.__v = l,
								l.__e = i.__e,
								l.__k = i.__k,
								l.__k.forEach(function(n) {
									n && (n.__ = l);
								}),
								A = 0;
							A < h._sb.length;
							A++
						)
							h.__h.push(h._sb[A]);
						(h._sb = []), h.__h.length && r.push(h);
						break n;
					}
					null != h.componentWillUpdate && h.componentWillUpdate(g, h.__s, x),
						null != h.componentDidUpdate &&
							h.__h.push(function() {
								h.componentDidUpdate(y, _, b);
							});
				}
				if (
					((h.context = x),
					(h.props = g),
					(h.__v = l),
					(h.__P = n),
					(T = u.__r),
					(C = 0),
					'prototype' in H && H.prototype.render)
				) {
					for (
						h.state = h.__s,
							h.__d = !1,
							T && T(l),
							s = h.render(h.props, h.state, h.context),
							$ = 0;
						$ < h._sb.length;
						$++
					)
						h.__h.push(h._sb[$]);
					h._sb = [];
				} else
					do {
						(h.__d = !1),
							T && T(l),
							(s = h.render(h.props, h.state, h.context)),
							(h.state = h.__s);
					} while (h.__d && ++C < 25);
				(h.state = h.__s),
					null != h.getChildContext && (t = a(a({}, t), h.getChildContext())),
					v ||
						null == h.getSnapshotBeforeUpdate ||
						(b = h.getSnapshotBeforeUpdate(y, _)),
					(j =
						null != s && s.type === d && null == s.key ? s.props.children : s),
					m(n, Array.isArray(j) ? j : [j], l, i, t, o, f, r, e, c),
					(h.base = l.__e),
					(l.__h = null),
					h.__h.length && r.push(h),
					k && (h.__E = h.__ = null),
					(h.__e = !1);
			} else null == f && l.__v === i.__v ? ((l.__k = i.__k), (l.__e = i.__e)) : (l.__e = z(i.__e, l, i, t, o, f, r, c));
			(s = u.diffed) && s(l);
		} catch (n) {
			(l.__v = null),
				(c || null != f) &&
					((l.__e = e), (l.__h = !!c), (f[f.indexOf(e)] = null)),
				u.__e(n, l, i);
		}
	}
	function I(n, l) {
		u.__c && u.__c(l, n),
			n.some(function(l) {
				try {
					(n = l.__h),
						(l.__h = []),
						n.some(function(n) {
							n.call(l);
						});
				} catch (n) {
					u.__e(n, l.__v);
				}
			});
	}
	function z(n, u, i, t, o, f, r, c) {
		var s,
			a,
			v,
			y = i.props,
			d = u.props,
			p = u.type,
			b = 0;
		if (('svg' === p && (o = !0), null != f))
			for (; b < f.length; b++)
				if (
					(s = f[b]) &&
					'setAttribute' in s == !!p &&
					(p ? s.localName === p : 3 === s.nodeType)
				) {
					(n = s), (f[b] = null);
					break;
				}
		if (null == n) {
			if (null === p) return document.createTextNode(d);
			(n = o
				? document.createElementNS('http://www.w3.org/2000/svg', p)
				: document.createElement(p, d.is && d)),
				(f = null),
				(c = !1);
		}
		if (null === p) y === d || (c && n.data === d) || (n.data = d);
		else {
			if (
				((f = f && l.call(n.childNodes)),
				(a = (y = i.props || e).dangerouslySetInnerHTML),
				(v = d.dangerouslySetInnerHTML),
				!c)
			) {
				if (null != f)
					for (y = {}, b = 0; b < n.attributes.length; b++)
						y[n.attributes[b].name] = n.attributes[b].value;
				(v || a) &&
					((v && ((a && v.__html == a.__html) || v.__html === n.innerHTML)) ||
						(n.innerHTML = (v && v.__html) || ''));
			}
			if ((A(n, d, y, o, c), v)) u.__k = [];
			else if (
				((b = u.props.children),
				m(
					n,
					Array.isArray(b) ? b : [b],
					u,
					i,
					t,
					o && 'foreignObject' !== p,
					f,
					r,
					f ? f[0] : i.__k && _(i, 0),
					c
				),
				null != f)
			)
				for (b = f.length; b--; ) null != f[b] && h(f[b]);
			c ||
				('value' in d &&
					void 0 !== (b = d.value) &&
					(b !== n.value ||
						('progress' === p && !b) ||
						('option' === p && b !== y.value)) &&
					C(n, 'value', b, y.value, !1),
				'checked' in d &&
					void 0 !== (b = d.checked) &&
					b !== n.checked &&
					C(n, 'checked', b, y.checked, !1));
		}
		return n;
	}
	function L(n, l, i) {
		try {
			'function' == typeof n ? n(l) : (n.current = l);
		} catch (n) {
			u.__e(n, i);
		}
	}
	function M(n, l, i) {
		var t, o;
		if (
			(u.unmount && u.unmount(n),
			(t = n.ref) && ((t.current && t.current !== n.__e) || L(t, null, l)),
			null != (t = n.__c))
		) {
			if (t.componentWillUnmount)
				try {
					t.componentWillUnmount();
				} catch (n) {
					u.__e(n, l);
				}
			(t.base = t.__P = null), (n.__c = void 0);
		}
		if ((t = n.__k))
			for (o = 0; o < t.length; o++)
				t[o] && M(t[o], l, i || 'function' != typeof n.type);
		i || null == n.__e || h(n.__e), (n.__ = n.__e = n.__d = void 0);
	}
	function N(n, l, u) {
		return this.constructor(n, u);
	}
	function O(n, i, t) {
		var o, f, r;
		u.__ && u.__(n, i),
			(f = (o = 'function' == typeof t) ? null : (t && t.__k) || i.__k),
			(r = []),
			H(
				i,
				(n = ((!o && t) || i).__k = v(d, null, [n])),
				f || e,
				e,
				void 0 !== i.ownerSVGElement,
				!o && t ? [t] : f ? null : i.firstChild ? l.call(i.childNodes) : null,
				r,
				!o && t ? t : f ? f.__e : i.firstChild,
				o
			),
			I(r, n);
	}
	(l = c.slice),
		(u = {
			__e: function(n, l, u, i) {
				for (var t, o, f; (l = l.__); )
					if ((t = l.__c) && !t.__)
						try {
							if (
								((o = t.constructor) &&
									null != o.getDerivedStateFromError &&
									(t.setState(o.getDerivedStateFromError(n)), (f = t.__d)),
								null != t.componentDidCatch &&
									(t.componentDidCatch(n, i || {}), (f = t.__d)),
								f)
							)
								return (t.__E = t);
						} catch (l) {
							n = l;
						}
				throw n;
			}
		}),
		(i = 0),
		(t = function(n) {
			return null != n && void 0 === n.constructor;
		}),
		(p.prototype.setState = function(n, l) {
			var u;
			(u =
				null != this.__s && this.__s !== this.state
					? this.__s
					: (this.__s = a({}, this.state))),
				'function' == typeof n && (n = n(a({}, u), this.props)),
				n && a(u, n),
				null != n && this.__v && (l && this._sb.push(l), k(this));
		}),
		(p.prototype.forceUpdate = function(n) {
			this.__v && ((this.__e = !0), n && this.__h.push(n), k(this));
		}),
		(p.prototype.render = d),
		(o = []),
		(g.__r = 0),
		(r = 0),
		(n.Component = p),
		(n.Fragment = d),
		(n.cloneElement = function(n, u, i) {
			var t,
				o,
				f,
				r = a({}, n.props);
			for (f in u)
				'key' == f ? (t = u[f]) : 'ref' == f ? (o = u[f]) : (r[f] = u[f]);
			return (
				arguments.length > 2 &&
					(r.children = arguments.length > 3 ? l.call(arguments, 2) : i),
				y(n.type, r, t || n.key, o || n.ref, null)
			);
		}),
		(n.createContext = function(n, l) {
			var u = {
				__c: (l = '__cC' + r++),
				__: n,
				Consumer: function(n, l) {
					return n.children(l);
				},
				Provider: function(n) {
					var u, i;
					return (
						this.getChildContext ||
							((u = []),
							((i = {})[l] = this),
							(this.getChildContext = function() {
								return i;
							}),
							(this.shouldComponentUpdate = function(n) {
								this.props.value !== n.value && u.some(k);
							}),
							(this.sub = function(n) {
								u.push(n);
								var l = n.componentWillUnmount;
								n.componentWillUnmount = function() {
									u.splice(u.indexOf(n), 1), l && l.call(n);
								};
							})),
						n.children
					);
				}
			};
			return (u.Provider.__ = u.Consumer.contextType = u);
		}),
		(n.createElement = v),
		(n.createRef = function() {
			return { current: null };
		}),
		(n.h = v),
		(n.hydrate = function n(l, u) {
			O(l, u, n);
		}),
		(n.isValidElement = t),
		(n.options = u),
		(n.render = O),
		(n.toChildArray = function n(l, u) {
			return (
				(u = u || []),
				null == l ||
					'boolean' == typeof l ||
					(Array.isArray(l)
						? l.some(function(l) {
								n(l, u);
						  })
						: u.push(l)),
				u
			);
		});
});
//# sourceMappingURL=preact.umd.js.map
