!(function(n, e) {
	'object' == typeof exports && 'undefined' != typeof module
		? e(exports, require('preact'), require('preact/devtools'))
		: 'function' == typeof define && define.amd
		? define(['exports', 'preact', 'preact/devtools'], e)
		: e((n.preactDebug = {}), n.preact);
})(this, function(n, e) {
	var t = {};
	function o(n) {
		return n.type === e.Fragment
			? 'Fragment'
			: 'function' == typeof n.type
			? n.type.displayName || n.type.name
			: 'string' == typeof n.type
			? n.type
			: '#text';
	}
	var r = [],
		i = [];
	function a() {
		return r.length > 0 ? r[r.length - 1] : null;
	}
	var s = !1;
	function c(n) {
		return 'function' == typeof n.type && n.type != e.Fragment;
	}
	function u(n) {
		for (var e = [n], t = n; null != t.__o; ) e.push(t.__o), (t = t.__o);
		return e.reduce(function(n, e) {
			n += '  in ' + o(e);
			var t = e.__source;
			return (
				t
					? (n += ' (at ' + t.fileName + ':' + t.lineNumber + ')')
					: s ||
					  ((s = !0),
					  console.warn(
							'Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.'
					  )),
				n + '\n'
			);
		}, '');
	}
	var l = 'function' == typeof WeakMap,
		f = e.Component.prototype.setState;
	e.Component.prototype.setState = function(n, e) {
		return (
			null == this.__v
				? null == this.state &&
				  console.warn(
						'Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n' +
							u(a())
				  )
				: null == this.__P &&
				  console.warn(
						'Can\'t call "this.setState" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n' +
							u(this.__v)
				  ),
			f.call(this, n, e)
		);
	};
	var p = e.Component.prototype.forceUpdate;
	function d(n) {
		var e = n.props,
			t = o(n),
			r = '';
		for (var i in e)
			if (e.hasOwnProperty(i) && 'children' !== i) {
				var a = e[i];
				'function' == typeof a &&
					(a = 'function ' + (a.displayName || a.name) + '() {}'),
					(a =
						Object(a) !== a || a.toString
							? a + ''
							: Object.prototype.toString.call(a)),
					(r += ' ' + i + '=' + JSON.stringify(a));
			}
		var s = e.children;
		return '<' + t + r + (s && s.length ? '>..</' + t + '>' : ' />');
	}
	(e.Component.prototype.forceUpdate = function(n) {
		return (
			null == this.__v
				? console.warn(
						'Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n' +
							u(a())
				  )
				: null == this.__P &&
				  console.warn(
						'Can\'t call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n' +
							u(this.__v)
				  ),
			p.call(this, n)
		);
	}),
		(function() {
			!(function() {
				var n = e.options.__b,
					t = e.options.diffed,
					o = e.options.__,
					a = e.options.vnode,
					s = e.options.__r;
				(e.options.diffed = function(n) {
					c(n) && i.pop(), r.pop(), t && t(n);
				}),
					(e.options.__b = function(e) {
						c(e) && r.push(e), n && n(e);
					}),
					(e.options.__ = function(n, e) {
						(i = []), o && o(n, e);
					}),
					(e.options.vnode = function(n) {
						(n.__o = i.length > 0 ? i[i.length - 1] : null), a && a(n);
					}),
					(e.options.__r = function(n) {
						c(n) && i.push(n), s && s(n);
					});
			})();
			var n = !1,
				a = e.options.__b,
				s = e.options.diffed,
				f = e.options.vnode,
				p = e.options.__e,
				h = e.options.__,
				y = e.options.__h,
				v = l
					? {
							useEffect: new WeakMap(),
							useLayoutEffect: new WeakMap(),
							lazyPropTypes: new WeakMap()
					  }
					: null,
				m = [];
			(e.options.__e = function(n, e, t) {
				if (e && e.__c && 'function' == typeof n.then) {
					var r = n;
					n = new Error(
						'Missing Suspense. The throwing component was: ' + o(e)
					);
					for (var i = e; i; i = i.__)
						if (i.__c && i.__c.__c) {
							n = r;
							break;
						}
					if (n instanceof Error) throw n;
				}
				try {
					p(n, e, t),
						'function' != typeof n.then &&
							setTimeout(function() {
								throw n;
							});
				} catch (n) {
					throw n;
				}
			}),
				(e.options.__ = function(n, e) {
					if (!e)
						throw new Error(
							'Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.'
						);
					var t;
					switch (e.nodeType) {
						case 1:
						case 11:
						case 9:
							t = !0;
							break;
						default:
							t = !1;
					}
					if (!t) {
						var r = o(n);
						throw new Error(
							'Expected a valid HTML node as a second argument to render.\tReceived ' +
								e +
								' instead: render(<' +
								r +
								' />, ' +
								e +
								');'
						);
					}
					h && h(n, e);
				}),
				(e.options.__b = function(e) {
					var r = e.type,
						i = (function n(e) {
							return e ? ('function' == typeof e.type ? n(e.__) : e) : {};
						})(e.__);
					if (((n = !0), void 0 === r))
						throw new Error(
							'Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports' +
								d(e) +
								'\n\n' +
								u(e)
						);
					if (null != r && 'object' == typeof r) {
						if (void 0 !== r.__k && void 0 !== r.__e)
							throw new Error(
								'Invalid type passed to createElement(): ' +
									r +
									'\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My' +
									o(e) +
									' = ' +
									d(r) +
									';\n  let vnode = <My' +
									o(e) +
									' />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n' +
									u(e)
							);
						throw new Error(
							'Invalid type passed to createElement(): ' +
								(Array.isArray(r) ? 'array' : r)
						);
					}
					if (
						(('thead' !== r && 'tfoot' !== r && 'tbody' !== r) ||
						'table' === i.type
							? 'tr' === r &&
							  'thead' !== i.type &&
							  'tfoot' !== i.type &&
							  'tbody' !== i.type &&
							  'table' !== i.type
								? console.error(
										'Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent.' +
											d(e) +
											'\n\n' +
											u(e)
								  )
								: 'td' === r && 'tr' !== i.type
								? console.error(
										'Improper nesting of table. Your <td> should have a <tr> parent.' +
											d(e) +
											'\n\n' +
											u(e)
								  )
								: 'th' === r &&
								  'tr' !== i.type &&
								  console.error(
										'Improper nesting of table. Your <th> should have a <tr>.' +
											d(e) +
											'\n\n' +
											u(e)
								  )
							: console.error(
									'Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent.' +
										d(e) +
										'\n\n' +
										u(e)
							  ),
						void 0 !== e.ref &&
							'function' != typeof e.ref &&
							'object' != typeof e.ref &&
							!('$$typeof' in e))
					)
						throw new Error(
							'Component\'s "ref" property should be a function, or an object created by createRef(), but got [' +
								typeof e.ref +
								'] instead\n' +
								d(e) +
								'\n\n' +
								u(e)
						);
					if ('string' == typeof e.type)
						for (var s in e.props)
							if (
								'o' === s[0] &&
								'n' === s[1] &&
								'function' != typeof e.props[s] &&
								null != e.props[s]
							)
								throw new Error(
									'Component\'s "' +
										s +
										'" property should be a function, but got [' +
										typeof e.props[s] +
										'] instead\n' +
										d(e) +
										'\n\n' +
										u(e)
								);
					if ('function' == typeof e.type && e.type.propTypes) {
						if (
							'Lazy' === e.type.displayName &&
							v &&
							!v.lazyPropTypes.has(e.type)
						) {
							var c =
								'PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ';
							try {
								var l = e.type();
								v.lazyPropTypes.set(e.type, !0),
									console.warn(c + 'Component wrapped in lazy() is ' + o(l));
							} catch (n) {
								console.warn(
									c +
										"We will log the wrapped component's name once it is loaded."
								);
							}
						}
						var f = e.props;
						e.type.__f &&
							delete (f = (function(n, e) {
								for (var t in e) n[t] = e[t];
								return n;
							})({}, f)).ref,
							(function(n, e, o, r, i) {
								Object.keys(n).forEach(function(o) {
									var a;
									try {
										a = n[o](
											e,
											o,
											r,
											'prop',
											null,
											'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
										);
									} catch (n) {
										a = n;
									}
									!a ||
										a.message in t ||
										((t[a.message] = !0),
										console.error(
											'Failed prop type: ' +
												a.message +
												((i && '\n' + i()) || '')
										));
								});
							})(e.type.propTypes, f, 0, o(e), function() {
								return u(e);
							});
					}
					a && a(e);
				}),
				(e.options.__h = function(e, t, o) {
					if (!e || !n)
						throw new Error('Hook can only be invoked from render methods.');
					y && y(e, t, o);
				});
			var b = function(n, e) {
					return {
						get: function() {
							var t = 'get' + n + e;
							m &&
								m.indexOf(t) < 0 &&
								(m.push(t),
								console.warn('getting vnode.' + n + ' is deprecated, ' + e));
						},
						set: function() {
							var t = 'set' + n + e;
							m &&
								m.indexOf(t) < 0 &&
								(m.push(t),
								console.warn('setting vnode.' + n + ' is not allowed, ' + e));
						}
					};
				},
				w = {
					nodeName: b('nodeName', 'use vnode.type'),
					attributes: b('attributes', 'use vnode.props'),
					children: b('children', 'use vnode.props.children')
				},
				g = Object.create({}, w);
			(e.options.vnode = function(n) {
				var e = n.props;
				if (
					null !== n.type &&
					null != e &&
					('__source' in e || '__self' in e)
				) {
					var t = (n.props = {});
					for (var o in e) {
						var r = e[o];
						'__source' === o
							? (n.__source = r)
							: '__self' === o
							? (n.__self = r)
							: (t[o] = r);
					}
				}
				(n.__proto__ = g), f && f(n);
			}),
				(e.options.diffed = function(e) {
					if (
						(e.__k &&
							e.__k.forEach(function(n) {
								if (n && void 0 === n.type) {
									delete n.__, delete n.__b;
									var t = Object.keys(n).join(',');
									throw new Error(
										'Objects are not valid as a child. Encountered an object with the keys {' +
											t +
											'}.\n\n' +
											u(e)
									);
								}
							}),
						(n = !1),
						s && s(e),
						null != e.__k)
					)
						for (var t = [], o = 0; o < e.__k.length; o++) {
							var r = e.__k[o];
							if (r && null != r.key) {
								var i = r.key;
								if (-1 !== t.indexOf(i)) {
									console.error(
										'Following component has two or more children with the same key attribute: "' +
											i +
											'". This may cause glitches and misbehavior in rendering process. Component: \n\n' +
											d(e) +
											'\n\n' +
											u(e)
									);
									break;
								}
								t.push(i);
							}
						}
				});
		})(),
		(n.resetPropWarnings = function() {
			t = {};
		});
});
//# sourceMappingURL=debug.umd.js.map
