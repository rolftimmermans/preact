var n,
	l,
	u,
	t,
	i,
	o,
	r,
	f = {},
	e = [],
	c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s(n, l) {
	for (var u in l) n[u] = l[u];
	return n;
}
function a(n) {
	var l = n.parentNode;
	l && l.removeChild(n);
}
function v(l, u, t) {
	var i,
		o,
		r,
		f = {};
	for (r in u)
		'key' == r ? (i = u[r]) : 'ref' == r ? (o = u[r]) : (f[r] = u[r]);
	if (
		(arguments.length > 2 &&
			(f.children = arguments.length > 3 ? n.call(arguments, 2) : t),
		'function' == typeof l && null != l.defaultProps)
	)
		for (r in l.defaultProps) void 0 === f[r] && (f[r] = l.defaultProps[r]);
	return h(l, f, i, o, null);
}
function h(n, t, i, o, r) {
	var f = {
		type: n,
		props: t,
		key: i,
		ref: o,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__d: void 0,
		__c: null,
		__h: null,
		constructor: void 0,
		__v: null == r ? ++u : r
	};
	return null == r && null != l.vnode && l.vnode(f), f;
}
function p(n) {
	return n.children;
}
function y(n, l) {
	(this.props = n), (this.context = l);
}
function d(n, l) {
	if (null == l) return n.__ ? d(n.__, n.__.__k.indexOf(n) + 1) : null;
	for (var u; l < n.__k.length; l++)
		if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
	return 'function' == typeof n.type ? d(n) : null;
}
function _(n) {
	var l, u;
	if (null != (n = n.__) && null != n.__c) {
		for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)
			if (null != (u = n.__k[l]) && null != u.__e) {
				n.__e = n.__c.base = u.__e;
				break;
			}
		return _(n);
	}
}
function k(n) {
	((!n.__d && (n.__d = !0) && i.push(n) && !x.__r++) ||
		o !== l.debounceRendering) &&
		((o = l.debounceRendering) || setTimeout)(x);
}
function x() {
	for (var n; (x.__r = i.length); )
		(n = i.sort(function(n, l) {
			return n.__v.__b - l.__v.__b;
		})),
			(i = []),
			n.some(function(n) {
				var l, u, t, i, o, r;
				n.__d &&
					((o = (i = (l = n).__v).__e),
					(r = l.__P) &&
						((u = []),
						((t = s({}, i)).__v = i.__v + 1),
						I(
							r,
							i,
							t,
							l.__n,
							void 0 !== r.ownerSVGElement,
							null != i.__h ? [o] : null,
							u,
							null == o ? d(i) : o,
							i.__h
						),
						T(u, i),
						i.__e != o && _(i)));
			});
}
function b(n, l, u, t, i, o, r, c, s, a) {
	var v,
		y,
		_,
		k,
		x,
		b,
		m,
		A = (t && t.__k) || e,
		C = A.length;
	for (u.__k = [], v = 0; v < l.length; v++)
		if (
			null !=
			(k = u.__k[v] =
				null == (k = l[v]) || 'boolean' == typeof k
					? null
					: 'string' == typeof k || 'number' == typeof k || 'bigint' == typeof k
					? h(null, k, null, null, k)
					: Array.isArray(k)
					? h(p, { children: k }, null, null, null)
					: k.__b > 0
					? h(k.type, k.props, k.key, k.ref ? k.ref : null, k.__v)
					: k)
		) {
			if (
				((k.__ = u),
				(k.__b = u.__b + 1),
				null === (_ = A[v]) || (_ && k.key == _.key && k.type === _.type))
			)
				A[v] = void 0;
			else
				for (y = 0; y < C; y++) {
					if ((_ = A[y]) && k.key == _.key && k.type === _.type) {
						A[y] = void 0;
						break;
					}
					_ = null;
				}
			I(n, k, (_ = _ || f), i, o, r, c, s, a),
				(x = k.__e),
				(y = k.ref) &&
					_.ref != y &&
					(m || (m = []),
					_.ref && m.push(_.ref, null, k),
					m.push(y, k.__c || x, k)),
				null != x
					? (null == b && (b = x),
					  'function' == typeof k.type && k.__k === _.__k
							? (k.__d = s = g(k, s, n))
							: (s = w(n, k, _, A, x, s)),
					  'function' == typeof u.type && (u.__d = s))
					: s && _.__e == s && s.parentNode != n && (s = d(_));
		}
	for (u.__e = b, v = C; v--; ) null != A[v] && L(A[v], A[v]);
	if (m) for (v = 0; v < m.length; v++) z(m[v], m[++v], m[++v]);
}
function g(n, l, u) {
	for (var t, i = n.__k, o = 0; i && o < i.length; o++)
		(t = i[o]) &&
			((t.__ = n),
			(l = 'function' == typeof t.type ? g(t, l, u) : w(u, t, t, i, t.__e, l)));
	return l;
}
function w(n, l, u, t, i, o) {
	var r, f, e;
	if (void 0 !== l.__d) (r = l.__d), (l.__d = void 0);
	else if (null == u || i != o || null == i.parentNode)
		n: if (null == o || o.parentNode !== n) n.appendChild(i), (r = null);
		else {
			for (f = o, e = 0; (f = f.nextSibling) && e < t.length; e += 1)
				if (f == i) break n;
			n.insertBefore(i, o), (r = o);
		}
	return void 0 !== r ? r : i.nextSibling;
}
function m(n, l, u, t, i) {
	var o;
	for (o in u)
		'children' === o || 'key' === o || o in l || C(n, o, null, u[o], t);
	for (o in l)
		(i && 'function' != typeof l[o]) ||
			'children' === o ||
			'key' === o ||
			'value' === o ||
			'checked' === o ||
			u[o] === l[o] ||
			C(n, o, l[o], u[o], t);
}
function A(n, l, u) {
	'-' === l[0]
		? n.setProperty(l, u)
		: (n[l] =
				null == u ? '' : 'number' != typeof u || c.test(l) ? u : u + 'px');
}
function C(n, l, u, t, i) {
	var o;
	n: if ('style' === l)
		if ('string' == typeof u) n.style.cssText = u;
		else {
			if (('string' == typeof t && (n.style.cssText = t = ''), t))
				for (l in t) (u && l in u) || A(n.style, l, '');
			if (u) for (l in u) (t && u[l] === t[l]) || A(n.style, l, u[l]);
		}
	else if ('o' === l[0] && 'n' === l[1])
		(o = l !== (l = l.replace(/Capture$/, ''))),
			(l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2)),
			n.l || (n.l = {}),
			(n.l[l + o] = u),
			u
				? t || n.addEventListener(l, o ? H : $, o)
				: n.removeEventListener(l, o ? H : $, o);
	else if ('dangerouslySetInnerHTML' !== l) {
		if (i) l = l.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
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
	this.l[n.type + !1](l.event ? l.event(n) : n);
}
function H(n) {
	this.l[n.type + !0](l.event ? l.event(n) : n);
}
function I(n, u, t, i, o, r, f, e, c) {
	var a,
		v,
		h,
		d,
		_,
		k,
		x,
		g,
		w,
		m,
		A,
		C,
		$,
		H,
		I,
		T = u.type;
	if (void 0 !== u.constructor) return null;
	null != t.__h &&
		((c = t.__h), (e = u.__e = t.__e), (u.__h = null), (r = [e])),
		(a = l.__b) && a(u);
	try {
		n: if ('function' == typeof T) {
			if (
				((g = u.props),
				(w = (a = T.contextType) && i[a.__c]),
				(m = a ? (w ? w.props.value : a.__) : i),
				t.__c
					? (x = (v = u.__c = t.__c).__ = v.__E)
					: ('prototype' in T && T.prototype.render
							? (u.__c = v = new T(g, m))
							: ((u.__c = v = new y(g, m)),
							  (v.constructor = T),
							  (v.render = M)),
					  w && w.sub(v),
					  (v.props = g),
					  v.state || (v.state = {}),
					  (v.context = m),
					  (v.__n = i),
					  (h = v.__d = !0),
					  (v.__h = []),
					  (v._sb = [])),
				null == v.__s && (v.__s = v.state),
				null != T.getDerivedStateFromProps &&
					(v.__s == v.state && (v.__s = s({}, v.__s)),
					s(v.__s, T.getDerivedStateFromProps(g, v.__s))),
				(d = v.props),
				(_ = v.state),
				h)
			)
				null == T.getDerivedStateFromProps &&
					null != v.componentWillMount &&
					v.componentWillMount(),
					null != v.componentDidMount && v.__h.push(v.componentDidMount);
			else {
				if (
					(null == T.getDerivedStateFromProps &&
						g !== d &&
						null != v.componentWillReceiveProps &&
						v.componentWillReceiveProps(g, m),
					(!v.__e &&
						null != v.shouldComponentUpdate &&
						!1 === v.shouldComponentUpdate(g, v.__s, m)) ||
						u.__v === t.__v)
				) {
					for (
						v.props = g,
							v.state = v.__s,
							u.__v !== t.__v && (v.__d = !1),
							v.__v = u,
							u.__e = t.__e,
							u.__k = t.__k,
							u.__k.forEach(function(n) {
								n && (n.__ = u);
							}),
							A = 0;
						A < v._sb.length;
						A++
					)
						v.__h.push(v._sb[A]);
					(v._sb = []), v.__h.length && f.push(v);
					break n;
				}
				null != v.componentWillUpdate && v.componentWillUpdate(g, v.__s, m),
					null != v.componentDidUpdate &&
						v.__h.push(function() {
							v.componentDidUpdate(d, _, k);
						});
			}
			if (
				((v.context = m),
				(v.props = g),
				(v.__v = u),
				(v.__P = n),
				(C = l.__r),
				($ = 0),
				'prototype' in T && T.prototype.render)
			) {
				for (
					v.state = v.__s,
						v.__d = !1,
						C && C(u),
						a = v.render(v.props, v.state, v.context),
						H = 0;
					H < v._sb.length;
					H++
				)
					v.__h.push(v._sb[H]);
				v._sb = [];
			} else
				do {
					(v.__d = !1),
						C && C(u),
						(a = v.render(v.props, v.state, v.context)),
						(v.state = v.__s);
				} while (v.__d && ++$ < 25);
			(v.state = v.__s),
				null != v.getChildContext && (i = s(s({}, i), v.getChildContext())),
				h ||
					null == v.getSnapshotBeforeUpdate ||
					(k = v.getSnapshotBeforeUpdate(d, _)),
				(I = null != a && a.type === p && null == a.key ? a.props.children : a),
				b(n, Array.isArray(I) ? I : [I], u, t, i, o, r, f, e, c),
				(v.base = u.__e),
				(u.__h = null),
				v.__h.length && f.push(v),
				x && (v.__E = v.__ = null),
				(v.__e = !1);
		} else
			null == r && u.__v === t.__v
				? ((u.__k = t.__k), (u.__e = t.__e))
				: (u.__e = j(t.__e, u, t, i, o, r, f, c));
		(a = l.diffed) && a(u);
	} catch (n) {
		(u.__v = null),
			(c || null != r) &&
				((u.__e = e), (u.__h = !!c), (r[r.indexOf(e)] = null)),
			l.__e(n, u, t);
	}
}
function T(n, u) {
	l.__c && l.__c(u, n),
		n.some(function(u) {
			try {
				(n = u.__h),
					(u.__h = []),
					n.some(function(n) {
						n.call(u);
					});
			} catch (n) {
				l.__e(n, u.__v);
			}
		});
}
function j(l, u, t, i, o, r, e, c) {
	var s,
		v,
		h,
		p = t.props,
		y = u.props,
		_ = u.type,
		k = 0;
	if (('svg' === _ && (o = !0), null != r))
		for (; k < r.length; k++)
			if (
				(s = r[k]) &&
				'setAttribute' in s == !!_ &&
				(_ ? s.localName === _ : 3 === s.nodeType)
			) {
				(l = s), (r[k] = null);
				break;
			}
	if (null == l) {
		if (null === _) return document.createTextNode(y);
		(l = o
			? document.createElementNS('http://www.w3.org/2000/svg', _)
			: document.createElement(_, y.is && y)),
			(r = null),
			(c = !1);
	}
	if (null === _) p === y || (c && l.data === y) || (l.data = y);
	else {
		if (
			((r = r && n.call(l.childNodes)),
			(v = (p = t.props || f).dangerouslySetInnerHTML),
			(h = y.dangerouslySetInnerHTML),
			!c)
		) {
			if (null != r)
				for (p = {}, k = 0; k < l.attributes.length; k++)
					p[l.attributes[k].name] = l.attributes[k].value;
			(h || v) &&
				((h && ((v && h.__html == v.__html) || h.__html === l.innerHTML)) ||
					(l.innerHTML = (h && h.__html) || ''));
		}
		if ((m(l, y, p, o, c), h)) u.__k = [];
		else if (
			((k = u.props.children),
			b(
				l,
				Array.isArray(k) ? k : [k],
				u,
				t,
				i,
				o && 'foreignObject' !== _,
				r,
				e,
				r ? r[0] : t.__k && d(t, 0),
				c
			),
			null != r)
		)
			for (k = r.length; k--; ) null != r[k] && a(r[k]);
		c ||
			('value' in y &&
				void 0 !== (k = y.value) &&
				(k !== l.value ||
					('progress' === _ && !k) ||
					('option' === _ && k !== p.value)) &&
				C(l, 'value', k, p.value, !1),
			'checked' in y &&
				void 0 !== (k = y.checked) &&
				k !== l.checked &&
				C(l, 'checked', k, p.checked, !1));
	}
	return l;
}
function z(n, u, t) {
	try {
		'function' == typeof n ? n(u) : (n.current = u);
	} catch (n) {
		l.__e(n, t);
	}
}
function L(n, u, t) {
	var i, o;
	if (
		(l.unmount && l.unmount(n),
		(i = n.ref) && ((i.current && i.current !== n.__e) || z(i, null, u)),
		null != (i = n.__c))
	) {
		if (i.componentWillUnmount)
			try {
				i.componentWillUnmount();
			} catch (n) {
				l.__e(n, u);
			}
		(i.base = i.__P = null), (n.__c = void 0);
	}
	if ((i = n.__k))
		for (o = 0; o < i.length; o++)
			i[o] && L(i[o], u, t || 'function' != typeof n.type);
	t || null == n.__e || a(n.__e), (n.__ = n.__e = n.__d = void 0);
}
function M(n, l, u) {
	return this.constructor(n, u);
}
function N(u, t, i) {
	var o, r, e;
	l.__ && l.__(u, t),
		(r = (o = 'function' == typeof i) ? null : (i && i.__k) || t.__k),
		(e = []),
		I(
			t,
			(u = ((!o && i) || t).__k = v(p, null, [u])),
			r || f,
			f,
			void 0 !== t.ownerSVGElement,
			!o && i ? [i] : r ? null : t.firstChild ? n.call(t.childNodes) : null,
			e,
			!o && i ? i : r ? r.__e : t.firstChild,
			o
		),
		T(e, u);
}
(n = e.slice),
	(l = {
		__e: function(n, l, u, t) {
			for (var i, o, r; (l = l.__); )
				if ((i = l.__c) && !i.__)
					try {
						if (
							((o = i.constructor) &&
								null != o.getDerivedStateFromError &&
								(i.setState(o.getDerivedStateFromError(n)), (r = i.__d)),
							null != i.componentDidCatch &&
								(i.componentDidCatch(n, t || {}), (r = i.__d)),
							r)
						)
							return (i.__E = i);
					} catch (l) {
						n = l;
					}
			throw n;
		}
	}),
	(u = 0),
	(t = function(n) {
		return null != n && void 0 === n.constructor;
	}),
	(y.prototype.setState = function(n, l) {
		var u;
		(u =
			null != this.__s && this.__s !== this.state
				? this.__s
				: (this.__s = s({}, this.state))),
			'function' == typeof n && (n = n(s({}, u), this.props)),
			n && s(u, n),
			null != n && this.__v && (l && this._sb.push(l), k(this));
	}),
	(y.prototype.forceUpdate = function(n) {
		this.__v && ((this.__e = !0), n && this.__h.push(n), k(this));
	}),
	(y.prototype.render = p),
	(i = []),
	(x.__r = 0),
	(r = 0),
	(exports.Component = y),
	(exports.Fragment = p),
	(exports.cloneElement = function(l, u, t) {
		var i,
			o,
			r,
			f = s({}, l.props);
		for (r in u)
			'key' == r ? (i = u[r]) : 'ref' == r ? (o = u[r]) : (f[r] = u[r]);
		return (
			arguments.length > 2 &&
				(f.children = arguments.length > 3 ? n.call(arguments, 2) : t),
			h(l.type, f, i || l.key, o || l.ref, null)
		);
	}),
	(exports.createContext = function(n, l) {
		var u = {
			__c: (l = '__cC' + r++),
			__: n,
			Consumer: function(n, l) {
				return n.children(l);
			},
			Provider: function(n) {
				var u, t;
				return (
					this.getChildContext ||
						((u = []),
						((t = {})[l] = this),
						(this.getChildContext = function() {
							return t;
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
	(exports.createElement = v),
	(exports.createRef = function() {
		return { current: null };
	}),
	(exports.h = v),
	(exports.hydrate = function n(l, u) {
		N(l, u, n);
	}),
	(exports.isValidElement = t),
	(exports.options = l),
	(exports.render = N),
	(exports.toChildArray = function n(l, u) {
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
//# sourceMappingURL=preact.js.map
