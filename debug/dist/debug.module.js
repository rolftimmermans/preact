import { options as n, Fragment as t, Component as e } from 'preact';
import 'preact/devtools';
var o = {};
function r() {
	o = {};
}
function a(n) {
	return n.type === t
		? 'Fragment'
		: 'function' == typeof n.type
		? n.type.displayName || n.type.name
		: 'string' == typeof n.type
		? n.type
		: '#text';
}
var i = [],
	s = [];
function c() {
	return i.length > 0 ? i[i.length - 1] : null;
}
var l = !1;
function u(n) {
	return 'function' == typeof n.type && n.type != t;
}
function f(n) {
	for (var t = [n], e = n; null != e.__o; ) t.push(e.__o), (e = e.__o);
	return t.reduce(function(n, t) {
		n += '  in ' + a(t);
		var e = t.__source;
		return (
			e
				? (n += ' (at ' + e.fileName + ':' + e.lineNumber + ')')
				: l ||
				  ((l = !0),
				  console.warn(
						'Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.'
				  )),
			n + '\n'
		);
	}, '');
}
var p = 'function' == typeof WeakMap,
	d = e.prototype.setState;
e.prototype.setState = function(n, t) {
	return (
		null == this.__v
			? null == this.state &&
			  console.warn(
					'Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n' +
						f(c())
			  )
			: null == this.__P &&
			  console.warn(
					'Can\'t call "this.setState" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n' +
						f(this.__v)
			  ),
		d.call(this, n, t)
	);
};
var h = e.prototype.forceUpdate;
function y(n) {
	var t = n.props,
		e = a(n),
		o = '';
	for (var r in t)
		if (t.hasOwnProperty(r) && 'children' !== r) {
			var i = t[r];
			'function' == typeof i &&
				(i = 'function ' + (i.displayName || i.name) + '() {}'),
				(i =
					Object(i) !== i || i.toString
						? i + ''
						: Object.prototype.toString.call(i)),
				(o += ' ' + r + '=' + JSON.stringify(i));
		}
	var s = t.children;
	return '<' + e + o + (s && s.length ? '>..</' + e + '>' : ' />');
}
(e.prototype.forceUpdate = function(n) {
	return (
		null == this.__v
			? console.warn(
					'Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n' +
						f(c())
			  )
			: null == this.__P &&
			  console.warn(
					'Can\'t call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n' +
						f(this.__v)
			  ),
		h.call(this, n)
	);
}),
	(function() {
		!(function() {
			var t = n.__b,
				e = n.diffed,
				o = n.__,
				r = n.vnode,
				a = n.__r;
			(n.diffed = function(n) {
				u(n) && s.pop(), i.pop(), e && e(n);
			}),
				(n.__b = function(n) {
					u(n) && i.push(n), t && t(n);
				}),
				(n.__ = function(n, t) {
					(s = []), o && o(n, t);
				}),
				(n.vnode = function(n) {
					(n.__o = s.length > 0 ? s[s.length - 1] : null), r && r(n);
				}),
				(n.__r = function(n) {
					u(n) && s.push(n), a && a(n);
				});
		})();
		var t = !1,
			e = n.__b,
			r = n.diffed,
			c = n.vnode,
			l = n.__e,
			d = n.__,
			h = n.__h,
			m = p
				? {
						useEffect: new WeakMap(),
						useLayoutEffect: new WeakMap(),
						lazyPropTypes: new WeakMap()
				  }
				: null,
			v = [];
		(n.__e = function(n, t, e) {
			if (t && t.__c && 'function' == typeof n.then) {
				var o = n;
				n = new Error('Missing Suspense. The throwing component was: ' + a(t));
				for (var r = t; r; r = r.__)
					if (r.__c && r.__c.__c) {
						n = o;
						break;
					}
				if (n instanceof Error) throw n;
			}
			try {
				l(n, t, e),
					'function' != typeof n.then &&
						setTimeout(function() {
							throw n;
						});
			} catch (n) {
				throw n;
			}
		}),
			(n.__ = function(n, t) {
				if (!t)
					throw new Error(
						'Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.'
					);
				var e;
				switch (t.nodeType) {
					case 1:
					case 11:
					case 9:
						e = !0;
						break;
					default:
						e = !1;
				}
				if (!e) {
					var o = a(n);
					throw new Error(
						'Expected a valid HTML node as a second argument to render.\tReceived ' +
							t +
							' instead: render(<' +
							o +
							' />, ' +
							t +
							');'
					);
				}
				d && d(n, t);
			}),
			(n.__b = function(n) {
				var r = n.type,
					i = (function n(t) {
						return t ? ('function' == typeof t.type ? n(t.__) : t) : {};
					})(n.__);
				if (((t = !0), void 0 === r))
					throw new Error(
						'Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports' +
							y(n) +
							'\n\n' +
							f(n)
					);
				if (null != r && 'object' == typeof r) {
					if (void 0 !== r.__k && void 0 !== r.__e)
						throw new Error(
							'Invalid type passed to createElement(): ' +
								r +
								'\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My' +
								a(n) +
								' = ' +
								y(r) +
								';\n  let vnode = <My' +
								a(n) +
								' />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n' +
								f(n)
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
										y(n) +
										'\n\n' +
										f(n)
							  )
							: 'td' === r && 'tr' !== i.type
							? console.error(
									'Improper nesting of table. Your <td> should have a <tr> parent.' +
										y(n) +
										'\n\n' +
										f(n)
							  )
							: 'th' === r &&
							  'tr' !== i.type &&
							  console.error(
									'Improper nesting of table. Your <th> should have a <tr>.' +
										y(n) +
										'\n\n' +
										f(n)
							  )
						: console.error(
								'Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent.' +
									y(n) +
									'\n\n' +
									f(n)
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
							y(n) +
							'\n\n' +
							f(n)
					);
				if ('string' == typeof n.type)
					for (var s in n.props)
						if (
							'o' === s[0] &&
							'n' === s[1] &&
							'function' != typeof n.props[s] &&
							null != n.props[s]
						)
							throw new Error(
								'Component\'s "' +
									s +
									'" property should be a function, but got [' +
									typeof n.props[s] +
									'] instead\n' +
									y(n) +
									'\n\n' +
									f(n)
							);
				if ('function' == typeof n.type && n.type.propTypes) {
					if (
						'Lazy' === n.type.displayName &&
						m &&
						!m.lazyPropTypes.has(n.type)
					) {
						var c =
							'PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ';
						try {
							var l = n.type();
							m.lazyPropTypes.set(n.type, !0),
								console.warn(c + 'Component wrapped in lazy() is ' + a(l));
						} catch (n) {
							console.warn(
								c +
									"We will log the wrapped component's name once it is loaded."
							);
						}
					}
					var u = n.props;
					n.type.__f &&
						delete (u = (function(n, t) {
							for (var e in t) n[e] = t[e];
							return n;
						})({}, u)).ref,
						(function(n, t, e, r, a) {
							Object.keys(n).forEach(function(e) {
								var i;
								try {
									i = n[e](
										t,
										e,
										r,
										'prop',
										null,
										'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
									);
								} catch (n) {
									i = n;
								}
								!i ||
									i.message in o ||
									((o[i.message] = !0),
									console.error(
										'Failed prop type: ' + i.message + ((a && '\n' + a()) || '')
									));
							});
						})(n.type.propTypes, u, 0, a(n), function() {
							return f(n);
						});
				}
				e && e(n);
			}),
			(n.__h = function(n, e, o) {
				if (!n || !t)
					throw new Error('Hook can only be invoked from render methods.');
				h && h(n, e, o);
			});
		var b = function(n, t) {
				return {
					get: function() {
						var e = 'get' + n + t;
						v &&
							v.indexOf(e) < 0 &&
							(v.push(e),
							console.warn('getting vnode.' + n + ' is deprecated, ' + t));
					},
					set: function() {
						var e = 'set' + n + t;
						v &&
							v.indexOf(e) < 0 &&
							(v.push(e),
							console.warn('setting vnode.' + n + ' is not allowed, ' + t));
					}
				};
			},
			w = {
				nodeName: b('nodeName', 'use vnode.type'),
				attributes: b('attributes', 'use vnode.props'),
				children: b('children', 'use vnode.props.children')
			},
			g = Object.create({}, w);
		(n.vnode = function(n) {
			var t = n.props;
			if (null !== n.type && null != t && ('__source' in t || '__self' in t)) {
				var e = (n.props = {});
				for (var o in t) {
					var r = t[o];
					'__source' === o
						? (n.__source = r)
						: '__self' === o
						? (n.__self = r)
						: (e[o] = r);
				}
			}
			(n.__proto__ = g), c && c(n);
		}),
			(n.diffed = function(n) {
				if (
					(n.__k &&
						n.__k.forEach(function(t) {
							if (t && void 0 === t.type) {
								delete t.__, delete t.__b;
								var e = Object.keys(t).join(',');
								throw new Error(
									'Objects are not valid as a child. Encountered an object with the keys {' +
										e +
										'}.\n\n' +
										f(n)
								);
							}
						}),
					(t = !1),
					r && r(n),
					null != n.__k)
				)
					for (var e = [], o = 0; o < n.__k.length; o++) {
						var a = n.__k[o];
						if (a && null != a.key) {
							var i = a.key;
							if (-1 !== e.indexOf(i)) {
								console.error(
									'Following component has two or more children with the same key attribute: "' +
										i +
										'". This may cause glitches and misbehavior in rendering process. Component: \n\n' +
										y(n) +
										'\n\n' +
										f(n)
								);
								break;
							}
							e.push(i);
						}
					}
			});
	})();
export { r as resetPropWarnings };
//# sourceMappingURL=debug.module.js.map
