var n = require('preact');
require('preact/devtools');
var e = {};
function t(e) {
	return e.type === n.Fragment
		? 'Fragment'
		: 'function' == typeof e.type
		? e.type.displayName || e.type.name
		: 'string' == typeof e.type
		? e.type
		: '#text';
}
var o = [],
	r = [];
function a() {
	return o.length > 0 ? o[o.length - 1] : null;
}
var i = !1;
function c(e) {
	return 'function' == typeof e.type && e.type != n.Fragment;
}
function s(n) {
	for (var e = [n], o = n; null != o.__o; ) e.push(o.__o), (o = o.__o);
	return e.reduce(function(n, e) {
		n += '  in ' + t(e);
		var o = e.__source;
		return (
			o
				? (n += ' (at ' + o.fileName + ':' + o.lineNumber + ')')
				: i ||
				  ((i = !0),
				  console.warn(
						'Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.'
				  )),
			n + '\n'
		);
	}, '');
}
var u = 'function' == typeof WeakMap;
function l(n) {
	return n ? ('function' == typeof n.type ? l(n.__) : n) : {};
}
var f = n.Component.prototype.setState;
n.Component.prototype.setState = function(n, e) {
	return (
		null == this.__v &&
			null == this.state &&
			console.warn(
				'Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n' +
					s(a())
			),
		f.call(this, n, e)
	);
};
var p = n.Component.prototype.forceUpdate;
function d(n) {
	var e = n.props,
		o = t(n),
		r = '';
	for (var a in e)
		if (e.hasOwnProperty(a) && 'children' !== a) {
			var i = e[a];
			'function' == typeof i &&
				(i = 'function ' + (i.displayName || i.name) + '() {}'),
				(i =
					Object(i) !== i || i.toString
						? i + ''
						: Object.prototype.toString.call(i)),
				(r += ' ' + a + '=' + JSON.stringify(i));
		}
	var c = e.children;
	return '<' + o + r + (c && c.length ? '>..</' + o + '>' : ' />');
}
(n.Component.prototype.forceUpdate = function(n) {
	return (
		null == this.__v
			? console.warn(
					'Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n' +
						s(a())
			  )
			: null == this.__P &&
			  console.warn(
					'Can\'t call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n' +
						s(this.__v)
			  ),
		p.call(this, n)
	);
}),
	(function() {
		!(function() {
			var e = n.options.__b,
				t = n.options.diffed,
				a = n.options.__,
				i = n.options.vnode,
				s = n.options.__r;
			(n.options.diffed = function(n) {
				c(n) && r.pop(), o.pop(), t && t(n);
			}),
				(n.options.__b = function(n) {
					c(n) && o.push(n), e && e(n);
				}),
				(n.options.__ = function(n, e) {
					(r = []), a && a(n, e);
				}),
				(n.options.vnode = function(n) {
					(n.__o = r.length > 0 ? r[r.length - 1] : null), i && i(n);
				}),
				(n.options.__r = function(n) {
					c(n) && r.push(n), s && s(n);
				});
		})();
		var a = !1,
			i = n.options.__b,
			f = n.options.diffed,
			p = n.options.vnode,
			h = n.options.__e,
			v = n.options.__,
			y = n.options.__h,
			m = u
				? {
						useEffect: new WeakMap(),
						useLayoutEffect: new WeakMap(),
						lazyPropTypes: new WeakMap()
				  }
				: null,
			b = [];
		(n.options.__e = function(n, e, o, r) {
			if (e && e.__c && 'function' == typeof n.then) {
				var a = n;
				n = new Error('Missing Suspense. The throwing component was: ' + t(e));
				for (var i = e; i; i = i.__)
					if (i.__c && i.__c.__c) {
						n = a;
						break;
					}
				if (n instanceof Error) throw n;
			}
			try {
				((r = r || {}).componentStack = s(e)),
					h(n, e, o, r),
					'function' != typeof n.then &&
						setTimeout(function() {
							throw n;
						});
			} catch (n) {
				throw n;
			}
		}),
			(n.options.__ = function(n, e) {
				if (!e)
					throw new Error(
						'Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.'
					);
				var o;
				switch (e.nodeType) {
					case 1:
					case 11:
					case 9:
						o = !0;
						break;
					default:
						o = !1;
				}
				if (!o) {
					var r = t(n);
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
				v && v(n, e);
			}),
			(n.options.__b = function(n) {
				var o = n.type,
					r = l(n.__);
				if (((a = !0), void 0 === o))
					throw new Error(
						'Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports' +
							d(n) +
							'\n\n' +
							s(n)
					);
				if (null != o && 'object' == typeof o) {
					if (void 0 !== o.__k && void 0 !== o.__e)
						throw new Error(
							'Invalid type passed to createElement(): ' +
								o +
								'\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My' +
								t(n) +
								' = ' +
								d(o) +
								';\n  let vnode = <My' +
								t(n) +
								' />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n' +
								s(n)
						);
					throw new Error(
						'Invalid type passed to createElement(): ' +
							(Array.isArray(o) ? 'array' : o)
					);
				}
				if (
					(('thead' !== o && 'tfoot' !== o && 'tbody' !== o) ||
					'table' === r.type
						? 'tr' === o &&
						  'thead' !== r.type &&
						  'tfoot' !== r.type &&
						  'tbody' !== r.type &&
						  'table' !== r.type
							? console.error(
									'Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent.' +
										d(n) +
										'\n\n' +
										s(n)
							  )
							: 'td' === o && 'tr' !== r.type
							? console.error(
									'Improper nesting of table. Your <td> should have a <tr> parent.' +
										d(n) +
										'\n\n' +
										s(n)
							  )
							: 'th' === o &&
							  'tr' !== r.type &&
							  console.error(
									'Improper nesting of table. Your <th> should have a <tr>.' +
										d(n) +
										'\n\n' +
										s(n)
							  )
						: console.error(
								'Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent.' +
									d(n) +
									'\n\n' +
									s(n)
						  ),
					void 0 !== n.ref &&
						'function' != typeof n.ref &&
						'object' != typeof n.ref &&
						!('$$typeof' in n))
				)
					throw new Error(
						'Component\'s "ref" property should be a function, or an object created by createRef(), but got [' +
							typeof n.ref +
							'] instead\n' +
							d(n) +
							'\n\n' +
							s(n)
					);
				if ('string' == typeof n.type)
					for (var c in n.props)
						if (
							'o' === c[0] &&
							'n' === c[1] &&
							'function' != typeof n.props[c] &&
							null != n.props[c]
						)
							throw new Error(
								'Component\'s "' +
									c +
									'" property should be a function, but got [' +
									typeof n.props[c] +
									'] instead\n' +
									d(n) +
									'\n\n' +
									s(n)
							);
				if ('function' == typeof n.type && n.type.propTypes) {
					if (
						'Lazy' === n.type.displayName &&
						m &&
						!m.lazyPropTypes.has(n.type)
					) {
						var u =
							'PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ';
						try {
							var f = n.type();
							m.lazyPropTypes.set(n.type, !0),
								console.warn(u + 'Component wrapped in lazy() is ' + t(f));
						} catch (n) {
							console.warn(
								u +
									"We will log the wrapped component's name once it is loaded."
							);
						}
					}
					var p = n.props;
					n.type.__f &&
						delete (p = (function(n, e) {
							for (var t in e) n[t] = e[t];
							return n;
						})({}, p)).ref,
						(function(n, t, o, r, a) {
							Object.keys(n).forEach(function(o) {
								var i;
								try {
									i = n[o](
										t,
										o,
										r,
										'prop',
										null,
										'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
									);
								} catch (n) {
									i = n;
								}
								i &&
									!(i.message in e) &&
									((e[i.message] = !0),
									console.error(
										'Failed prop type: ' + i.message + ((a && '\n' + a()) || '')
									));
							});
						})(n.type.propTypes, p, 0, t(n), function() {
							return s(n);
						});
				}
				i && i(n);
			}),
			(n.options.__h = function(n, e, t) {
				if (!n || !a)
					throw new Error('Hook can only be invoked from render methods.');
				y && y(n, e, t);
			});
		var w = function(n, e) {
				return {
					get: function() {
						var t = 'get' + n + e;
						b &&
							b.indexOf(t) < 0 &&
							(b.push(t),
							console.warn('getting vnode.' + n + ' is deprecated, ' + e));
					},
					set: function() {
						var t = 'set' + n + e;
						b &&
							b.indexOf(t) < 0 &&
							(b.push(t),
							console.warn('setting vnode.' + n + ' is not allowed, ' + e));
					}
				};
			},
			g = {
				nodeName: w('nodeName', 'use vnode.type'),
				attributes: w('attributes', 'use vnode.props'),
				children: w('children', 'use vnode.props.children')
			},
			E = Object.create({}, g);
		(n.options.vnode = function(n) {
			var e = n.props;
			if (null !== n.type && null != e && ('__source' in e || '__self' in e)) {
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
			(n.__proto__ = E), p && p(n);
		}),
			(n.options.diffed = function(n) {
				if (
					(n.__k &&
						n.__k.forEach(function(e) {
							if (e && void 0 === e.type) {
								delete e.__, delete e.__b;
								var t = Object.keys(e).join(',');
								throw new Error(
									'Objects are not valid as a child. Encountered an object with the keys {' +
										t +
										'}.\n\n' +
										s(n)
								);
							}
						}),
					(a = !1),
					f && f(n),
					null != n.__k)
				)
					for (var e = [], t = 0; t < n.__k.length; t++) {
						var o = n.__k[t];
						if (o && null != o.key) {
							var r = o.key;
							if (-1 !== e.indexOf(r)) {
								console.error(
									'Following component has two or more children with the same key attribute: "' +
										r +
										'". This may cause glitches and misbehavior in rendering process. Component: \n\n' +
										d(n) +
										'\n\n' +
										s(n)
								);
								break;
							}
							e.push(r);
						}
					}
			});
	})(),
	(exports.resetPropWarnings = function() {
		e = {};
	});
//# sourceMappingURL=debug.js.map
