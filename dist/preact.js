var n,
	l,
	u,
	t,
	i,
	r,
	o,
	f,
	e = {},
	c = [],
	s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function a(n, l) {
	for (var u in l) n[u] = l[u];
	return n;
}
function v(n) {
	var l = n.parentNode;
	l && l.removeChild(n);
}
function h(l, u, t) {
	var i,
		r,
		o,
		f = {};
	for (o in u)
		'key' == o ? (i = u[o]) : 'ref' == o ? (r = u[o]) : (f[o] = u[o]);
	if (
		(arguments.length > 2 &&
			(f.children = arguments.length > 3 ? n.call(arguments, 2) : t),
		'function' == typeof l && null != l.defaultProps)
	)
		for (o in l.defaultProps) void 0 === f[o] && (f[o] = l.defaultProps[o]);
	return p(l, f, i, r, null);
}
function p(n, t, i, r, o) {
	var f = {
		type: n,
		props: t,
		key: i,
		ref: r,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__d: void 0,
		__c: null,
		__h: null,
		constructor: void 0,
		__v: null == o ? ++u : o
	};
	return null == o && null != l.vnode && l.vnode(f), f;
}
function y(n) {
	return n.children;
}
function d(n, l) {
	(this.props = n), (this.context = l);
}
function _(n, l) {
	if (null == l) return n.__ ? _(n.__, n.__.__k.indexOf(n) + 1) : null;
	for (var u; l < n.__k.length; l++)
		if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
	return 'function' == typeof n.type ? _(n) : null;
}
function k(n) {
	var l, u;
	if (null != (n = n.__) && null != n.__c) {
		for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)
			if (null != (u = n.__k[l]) && null != u.__e) {
				n.__e = n.__c.base = u.__e;
				break;
			}
		return k(n);
	}
}
function x(n) {
	((!n.__d && (n.__d = !0) && i.push(n) && !b.__r++) ||
		o !== l.debounceRendering) &&
		((o = l.debounceRendering) || r)(b);
}
function b() {
	for (var n; (b.__r = i.length); )
		(n = i.sort(function(n, l) {
			return n.__v.__b - l.__v.__b;
		})),
			(i = []),
			n.some(function(n) {
				var l, u, t, i, r, o;
				n.__d &&
					((r = (i = (l = n).__v).__e),
					(o = l.__P) &&
						((u = []),
						((t = a({}, i)).__v = i.__v + 1),
						I(
							o,
							i,
							t,
							l.__n,
							void 0 !== o.ownerSVGElement,
							null != i.__h ? [r] : null,
							u,
							null == r ? _(i) : r,
							i.__h
						),
						T(u, i),
						i.__e != r && k(i)));
			});
}
function m(n, l, u, t, i, r, o, f, s, a) {
	var v,
		h,
		d,
		k,
		x,
		b,
		m,
		A = (t && t.__k) || c,
		P = A.length;
	for (u.__k = [], v = 0; v < l.length; v++)
		if (
			null !=
			(k = u.__k[v] =
				null == (k = l[v]) || 'boolean' == typeof k
					? null
					: 'string' == typeof k || 'number' == typeof k || 'bigint' == typeof k
					? p(null, k, null, null, k)
					: Array.isArray(k)
					? p(y, { children: k }, null, null, null)
					: k.__b > 0
					? p(k.type, k.props, k.key, null, k.__v)
					: k)
		) {
			if (
				((k.__ = u),
				(k.__b = u.__b + 1),
				null === (d = A[v]) || (d && k.key == d.key && k.type === d.type))
			)
				A[v] = void 0;
			else
				for (h = 0; h < P; h++) {
					if ((d = A[h]) && k.key == d.key && k.type === d.type) {
						A[h] = void 0;
						break;
					}
					d = null;
				}
			I(n, k, (d = d || e), i, r, o, f, s, a),
				(x = k.__e),
				(h = k.ref) &&
					d.ref != h &&
					(m || (m = []),
					d.ref && m.push(d.ref, null, k),
					m.push(h, k.__c || x, k)),
				null != x
					? (null == b && (b = x),
					  'function' == typeof k.type && k.__k === d.__k
							? (k.__d = s = g(k, s, n))
							: (s = w(n, k, d, A, x, s)),
					  'function' == typeof u.type && (u.__d = s))
					: s && d.__e == s && s.parentNode != n && (s = _(d));
		}
	for (u.__e = b, v = P; v--; )
		null != A[v] &&
			('function' == typeof u.type &&
				null != A[v].__e &&
				A[v].__e == u.__d &&
				(u.__d = _(t, v + 1)),
			L(A[v], A[v]));
	if (m) for (v = 0; v < m.length; v++) z(m[v], m[++v], m[++v]);
}
function g(n, l, u) {
	for (var t, i = n.__k, r = 0; i && r < i.length; r++)
		(t = i[r]) &&
			((t.__ = n),
			(l = 'function' == typeof t.type ? g(t, l, u) : w(u, t, t, i, t.__e, l)));
	return l;
}
function w(n, l, u, t, i, r) {
	var o, f, e;
	if (void 0 !== l.__d) (o = l.__d), (l.__d = void 0);
	else if (null == u || i != r || null == i.parentNode)
		n: if (null == r || r.parentNode !== n) n.appendChild(i), (o = null);
		else {
			for (f = r, e = 0; (f = f.nextSibling) && e < t.length; e += 2)
				if (f == i) break n;
			n.insertBefore(i, r), (o = r);
		}
	return void 0 !== o ? o : i.nextSibling;
}
function A(n, l, u, t, i) {
	var r;
	for (r in u)
		'children' === r || 'key' === r || r in l || C(n, r, null, u[r], t);
	for (r in l)
		(i && 'function' != typeof l[r]) ||
			'children' === r ||
			'key' === r ||
			'value' === r ||
			'checked' === r ||
			u[r] === l[r] ||
			C(n, r, l[r], u[r], t);
}
function P(n, l, u) {
	'-' === l[0]
		? n.setProperty(l, u)
		: (n[l] =
				null == u ? '' : 'number' != typeof u || s.test(l) ? u : u + 'px');
}
function C(n, l, u, t, i) {
	var r;
	n: if ('style' === l)
		if ('string' == typeof u) n.style.cssText = u;
		else {
			if (('string' == typeof t && (n.style.cssText = t = ''), t))
				for (l in t) (u && l in u) || P(n.style, l, '');
			if (u) for (l in u) (t && u[l] === t[l]) || P(n.style, l, u[l]);
		}
	else if ('o' === l[0] && 'n' === l[1])
		(r = l !== (l = l.replace(/Capture$/, ''))),
			(l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2)),
			n.l || (n.l = {}),
			(n.l[l + r] = u),
			u
				? t || n.addEventListener(l, r ? H : $, r)
				: n.removeEventListener(l, r ? H : $, r);
	else if ('dangerouslySetInnerHTML' !== l) {
		if (i) l = l.replace(/xlink[H:h]/, 'h').replace(/sName$/, 's');
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
			(null != u && (!1 !== u || ('a' === l[0] && 'r' === l[1]))
				? n.setAttribute(l, u)
				: n.removeAttribute(l));
	}
}
function $(n) {
	this.l[n.type + !1](l.event ? l.event(n) : n);
}
function H(n) {
	this.l[n.type + !0](l.event ? l.event(n) : n);
}
function I(n, u, t, i, r, o, f, e, c) {
	var s,
		v,
		h,
		p,
		_,
		k,
		x,
		b,
		g,
		w,
		A,
		P = u.type;
	if (void 0 !== u.constructor) return null;
	null != t.__h &&
		((c = t.__h), (e = u.__e = t.__e), (u.__h = null), (o = [e])),
		(s = l.__b) && s(u);
	try {
		n: if ('function' == typeof P) {
			if (
				((b = u.props),
				(g = (s = P.contextType) && i[s.__c]),
				(w = s ? (g ? g.props.value : s.__) : i),
				t.__c
					? (x = (v = u.__c = t.__c).__ = v.__E)
					: ('prototype' in P && P.prototype.render
							? (u.__c = v = new P(b, w))
							: ((u.__c = v = new d(b, w)),
							  (v.constructor = P),
							  (v.render = M)),
					  g && g.sub(v),
					  (v.props = b),
					  v.state || (v.state = {}),
					  (v.context = w),
					  (v.__n = i),
					  (h = v.__d = !0),
					  (v.__h = [])),
				null == v.__s && (v.__s = v.state),
				null != P.getDerivedStateFromProps &&
					(v.__s == v.state && (v.__s = a({}, v.__s)),
					a(v.__s, P.getDerivedStateFromProps(b, v.__s))),
				(p = v.props),
				(_ = v.state),
				h)
			)
				null == P.getDerivedStateFromProps &&
					null != v.componentWillMount &&
					v.componentWillMount(),
					null != v.componentDidMount && v.__h.push(v.componentDidMount);
			else {
				if (
					(null == P.getDerivedStateFromProps &&
						b !== p &&
						null != v.componentWillReceiveProps &&
						v.componentWillReceiveProps(b, w),
					(!v.__e &&
						null != v.shouldComponentUpdate &&
						!1 === v.shouldComponentUpdate(b, v.__s, w)) ||
						u.__v === t.__v)
				) {
					(v.props = b),
						(v.state = v.__s),
						u.__v !== t.__v && (v.__d = !1),
						(v.__v = u),
						(u.__e = t.__e),
						(u.__k = t.__k),
						u.__k.forEach(function(n) {
							n && (n.__ = u);
						}),
						v.__h.length && f.push(v);
					break n;
				}
				null != v.componentWillUpdate && v.componentWillUpdate(b, v.__s, w),
					null != v.componentDidUpdate &&
						v.__h.push(function() {
							v.componentDidUpdate(p, _, k);
						});
			}
			(v.context = w),
				(v.props = b),
				(v.state = v.__s),
				(s = l.__r) && s(u),
				(v.__d = !1),
				(v.__v = u),
				(v.__P = n),
				(s = v.render(v.props, v.state, v.context)),
				(v.state = v.__s),
				null != v.getChildContext && (i = a(a({}, i), v.getChildContext())),
				h ||
					null == v.getSnapshotBeforeUpdate ||
					(k = v.getSnapshotBeforeUpdate(p, _)),
				(A = null != s && s.type === y && null == s.key ? s.props.children : s),
				m(n, Array.isArray(A) ? A : [A], u, t, i, r, o, f, e, c),
				(v.base = u.__e),
				(u.__h = null),
				v.__h.length && f.push(v),
				x && (v.__E = v.__ = null),
				(v.__e = !1);
		} else
			null == o && u.__v === t.__v
				? ((u.__k = t.__k), (u.__e = t.__e))
				: (u.__e = j(t.__e, u, t, i, r, o, f, c));
		(s = l.diffed) && s(u);
	} catch (n) {
		(u.__v = null),
			(c || null != o) &&
				((u.__e = e), (u.__h = !!c), (o[o.indexOf(e)] = null)),
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
function j(l, u, t, i, r, o, f, c) {
	var s,
		a,
		h,
		p = t.props,
		y = u.props,
		d = u.type,
		k = 0;
	if (('svg' === d && (r = !0), null != o))
		for (; k < o.length; k++)
			if (
				(s = o[k]) &&
				'setAttribute' in s == !!d &&
				(d ? s.localName === d : 3 === s.nodeType)
			) {
				(l = s), (o[k] = null);
				break;
			}
	if (null == l) {
		if (null === d) return document.createTextNode(y);
		(l = r
			? document.createElementNS('http://www.w3.org/2000/svg', d)
			: document.createElement(d, y.is && y)),
			(o = null),
			(c = !1);
	}
	if (null === d) p === y || (c && l.data === y) || (l.data = y);
	else {
		if (
			((o = o && n.call(l.childNodes)),
			(a = (p = t.props || e).dangerouslySetInnerHTML),
			(h = y.dangerouslySetInnerHTML),
			!c)
		) {
			if (null != o)
				for (p = {}, k = 0; k < l.attributes.length; k++)
					p[l.attributes[k].name] = l.attributes[k].value;
			(h || a) &&
				((h && ((a && h.__html == a.__html) || h.__html === l.innerHTML)) ||
					(l.innerHTML = (h && h.__html) || ''));
		}
		if ((A(l, y, p, r, c), h)) u.__k = [];
		else if (
			((k = u.props.children),
			m(
				l,
				Array.isArray(k) ? k : [k],
				u,
				t,
				i,
				r && 'foreignObject' !== d,
				o,
				f,
				o ? o[0] : t.__k && _(t, 0),
				c
			),
			null != o)
		)
			for (k = o.length; k--; ) null != o[k] && v(o[k]);
		c ||
			('value' in y &&
				void 0 !== (k = y.value) &&
				(k !== l.value || ('progress' === d && !k)) &&
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
	var i, r;
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
		i.base = i.__P = null;
	}
	if ((i = n.__k))
		for (r = 0; r < i.length; r++)
			i[r] && L(i[r], u, 'function' != typeof n.type);
	t || null == n.__e || v(n.__e), (n.__e = n.__d = void 0);
}
function M(n, l, u) {
	return this.constructor(n, u);
}
function N(u, t, i) {
	var r, o, f;
	l.__ && l.__(u, t),
		(o = (r = 'function' == typeof i) ? null : (i && i.__k) || t.__k),
		(f = []),
		I(
			t,
			(u = ((!r && i) || t).__k = h(y, null, [u])),
			o || e,
			e,
			void 0 !== t.ownerSVGElement,
			!r && i ? [i] : o ? null : t.firstChild ? n.call(t.childNodes) : null,
			f,
			!r && i ? i : o ? o.__e : t.firstChild,
			r
		),
		T(f, u);
}
(n = c.slice),
	(l = {
		__e: function(n, l) {
			for (var u, t, i; (l = l.__); )
				if ((u = l.__c) && !u.__)
					try {
						if (
							((t = u.constructor) &&
								null != t.getDerivedStateFromError &&
								(u.setState(t.getDerivedStateFromError(n)), (i = u.__d)),
							null != u.componentDidCatch &&
								(u.componentDidCatch(n), (i = u.__d)),
							i)
						)
							return (u.__E = u);
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
	(d.prototype.setState = function(n, l) {
		var u;
		(u =
			null != this.__s && this.__s !== this.state
				? this.__s
				: (this.__s = a({}, this.state))),
			'function' == typeof n && (n = n(a({}, u), this.props)),
			n && a(u, n),
			null != n && this.__v && (l && this.__h.push(l), x(this));
	}),
	(d.prototype.forceUpdate = function(n) {
		this.__v && ((this.__e = !0), n && this.__h.push(n), x(this));
	}),
	(d.prototype.render = y),
	(i = []),
	(r =
		'function' == typeof Promise
			? Promise.prototype.then.bind(Promise.resolve())
			: setTimeout),
	(b.__r = 0),
	(f = 0),
	(exports.render = N),
	(exports.hydrate = function n(l, u) {
		N(l, u, n);
	}),
	(exports.createElement = h),
	(exports.h = h),
	(exports.Fragment = y),
	(exports.createRef = function() {
		return { current: null };
	}),
	(exports.isValidElement = t),
	(exports.Component = d),
	(exports.cloneElement = function(l, u, t) {
		var i,
			r,
			o,
			f = a({}, l.props);
		for (o in u)
			'key' == o ? (i = u[o]) : 'ref' == o ? (r = u[o]) : (f[o] = u[o]);
		return (
			arguments.length > 2 &&
				(f.children = arguments.length > 3 ? n.call(arguments, 2) : t),
			p(l.type, f, i || l.key, r || l.ref, null)
		);
	}),
	(exports.createContext = function(n, l) {
		var u = {
			__c: (l = '__cC' + f++),
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
							this.props.value !== n.value && u.some(x);
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
	}),
	(exports.options = l);
//# sourceMappingURL=preact.js.map
