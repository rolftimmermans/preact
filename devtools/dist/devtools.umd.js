!(function(e, n) {
	'object' == typeof exports && 'undefined' != typeof module
		? n(exports, require('preact'))
		: 'function' == typeof define && define.amd
		? define(['exports', 'preact'], n)
		: n((e.preactDevtools = {}), e.preact);
})(this, function(e, n) {
	'undefined' != typeof window &&
		window.__PREACT_DEVTOOLS__ &&
		window.__PREACT_DEVTOOLS__.attachPreact('10.6.4', n.options, {
			Fragment: n.Fragment,
			Component: n.Component
		}),
		(e.addHookName = function(e, o) {
			return n.options.__a && n.options.__a(o), e;
		});
});
//# sourceMappingURL=devtools.umd.js.map
