function e(e, t, n, a) {
  Object.defineProperty(e, t, {
    get: n,
    set: a,
    enumerable: !0,
    configurable: !0,
  });
}
var t = globalThis,
  n = {},
  a = {},
  r = t.parcelRequire6440;
null == r &&
  (((r = function (e) {
    if (e in n) return n[e].exports;
    if (e in a) {
      var t = a[e];
      delete a[e];
      var r = { id: e, exports: {} };
      return ((n[e] = r), t.call(r.exports, r, r.exports), r.exports);
    }
    var l = Error("Cannot find module '" + e + "'");
    throw ((l.code = "MODULE_NOT_FOUND"), l);
  }).register = function (e, t) {
    a[e] = t;
  }),
  (t.parcelRequire6440 = r));
var l = r.register;
(l("6mwK0", function (t, n) {
  (e(
    t.exports,
    "Fragment",
    () => a,
    (e) => (a = e),
  ),
    e(
      t.exports,
      "jsx",
      () => r,
      (e) => (r = e),
    ),
    e(
      t.exports,
      "jsxs",
      () => l,
      (e) => (l = e),
    ));
  var a,
    r,
    l,
    s = Symbol.for("react.transitional.element");
  function i(e, t, n) {
    var a = null;
    if (
      (void 0 !== n && (a = "" + n),
      void 0 !== t.key && (a = "" + t.key),
      "key" in t)
    )
      for (var r in ((n = {}), t)) "key" !== r && (n[r] = t[r]);
    else n = t;
    return {
      $$typeof: s,
      type: e,
      key: a,
      ref: void 0 !== (t = n.ref) ? t : null,
      props: n,
    };
  }
  ((a = Symbol.for("react.fragment")), (r = i), (l = i));
}),
  l("kgQjf", function (t, n) {
    (e(
      t.exports,
      "Activity",
      () => a,
      (e) => (a = e),
    ),
      e(
        t.exports,
        "Children",
        () => r,
        (e) => (r = e),
      ),
      e(
        t.exports,
        "Component",
        () => l,
        (e) => (l = e),
      ),
      e(
        t.exports,
        "Fragment",
        () => s,
        (e) => (s = e),
      ),
      e(
        t.exports,
        "Profiler",
        () => i,
        (e) => (i = e),
      ),
      e(
        t.exports,
        "PureComponent",
        () => o,
        (e) => (o = e),
      ),
      e(
        t.exports,
        "StrictMode",
        () => c,
        (e) => (c = e),
      ),
      e(
        t.exports,
        "Suspense",
        () => u,
        (e) => (u = e),
      ),
      e(
        t.exports,
        "__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE",
        () => d,
        (e) => (d = e),
      ),
      e(
        t.exports,
        "__COMPILER_RUNTIME",
        () => f,
        (e) => (f = e),
      ),
      e(
        t.exports,
        "cache",
        () => m,
        (e) => (m = e),
      ),
      e(
        t.exports,
        "cacheSignal",
        () => p,
        (e) => (p = e),
      ),
      e(
        t.exports,
        "cloneElement",
        () => h,
        (e) => (h = e),
      ),
      e(
        t.exports,
        "createContext",
        () => g,
        (e) => (g = e),
      ),
      e(
        t.exports,
        "createElement",
        () => b,
        (e) => (b = e),
      ),
      e(
        t.exports,
        "createRef",
        () => v,
        (e) => (v = e),
      ),
      e(
        t.exports,
        "forwardRef",
        () => y,
        (e) => (y = e),
      ),
      e(
        t.exports,
        "isValidElement",
        () => x,
        (e) => (x = e),
      ),
      e(
        t.exports,
        "lazy",
        () => k,
        (e) => (k = e),
      ),
      e(
        t.exports,
        "memo",
        () => j,
        (e) => (j = e),
      ),
      e(
        t.exports,
        "startTransition",
        () => w,
        (e) => (w = e),
      ),
      e(
        t.exports,
        "unstable_useCacheRefresh",
        () => N,
        (e) => (N = e),
      ),
      e(
        t.exports,
        "use",
        () => S,
        (e) => (S = e),
      ),
      e(
        t.exports,
        "useActionState",
        () => C,
        (e) => (C = e),
      ),
      e(
        t.exports,
        "useCallback",
        () => E,
        (e) => (E = e),
      ),
      e(
        t.exports,
        "useContext",
        () => $,
        (e) => ($ = e),
      ),
      e(
        t.exports,
        "useDebugValue",
        () => z,
        (e) => (z = e),
      ),
      e(
        t.exports,
        "useDeferredValue",
        () => T,
        (e) => (T = e),
      ),
      e(
        t.exports,
        "useEffect",
        () => M,
        (e) => (M = e),
      ),
      e(
        t.exports,
        "useEffectEvent",
        () => _,
        (e) => (_ = e),
      ),
      e(
        t.exports,
        "useId",
        () => P,
        (e) => (P = e),
      ),
      e(
        t.exports,
        "useImperativeHandle",
        () => A,
        (e) => (A = e),
      ),
      e(
        t.exports,
        "useInsertionEffect",
        () => L,
        (e) => (L = e),
      ),
      e(
        t.exports,
        "useLayoutEffect",
        () => q,
        (e) => (q = e),
      ),
      e(
        t.exports,
        "useMemo",
        () => R,
        (e) => (R = e),
      ),
      e(
        t.exports,
        "useOptimistic",
        () => D,
        (e) => (D = e),
      ),
      e(
        t.exports,
        "useReducer",
        () => F,
        (e) => (F = e),
      ),
      e(
        t.exports,
        "useRef",
        () => O,
        (e) => (O = e),
      ),
      e(
        t.exports,
        "useState",
        () => I,
        (e) => (I = e),
      ),
      e(
        t.exports,
        "useSyncExternalStore",
        () => U,
        (e) => (U = e),
      ),
      e(
        t.exports,
        "useTransition",
        () => B,
        (e) => (B = e),
      ),
      e(
        t.exports,
        "version",
        () => Q,
        (e) => (Q = e),
      ));
    var a,
      r,
      l,
      s,
      i,
      o,
      c,
      u,
      d,
      f,
      m,
      p,
      h,
      g,
      b,
      v,
      y,
      x,
      k,
      j,
      w,
      N,
      S,
      C,
      E,
      $,
      z,
      T,
      M,
      _,
      P,
      A,
      L,
      q,
      R,
      D,
      F,
      O,
      I,
      U,
      B,
      Q,
      H = Symbol.for("react.transitional.element"),
      W = Symbol.for("react.portal"),
      V = Symbol.for("react.fragment"),
      K = Symbol.for("react.strict_mode"),
      G = Symbol.for("react.profiler"),
      Y = Symbol.for("react.consumer"),
      X = Symbol.for("react.context"),
      J = Symbol.for("react.forward_ref"),
      Z = Symbol.for("react.suspense"),
      ee = Symbol.for("react.memo"),
      et = Symbol.for("react.lazy"),
      en = Symbol.for("react.activity"),
      ea = Symbol.iterator,
      er = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      el = Object.assign,
      es = {};
    function ei(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = es),
        (this.updater = n || er));
    }
    function eo() {}
    function ec(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = es),
        (this.updater = n || er));
    }
    ((ei.prototype.isReactComponent = {}),
      (ei.prototype.setState = function (e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables.",
          );
        this.updater.enqueueSetState(this, e, t, "setState");
      }),
      (ei.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      }),
      (eo.prototype = ei.prototype));
    var eu = (ec.prototype = new eo());
    ((eu.constructor = ec),
      el(eu, ei.prototype),
      (eu.isPureReactComponent = !0));
    var ed = Array.isArray;
    function ef() {}
    var em = { H: null, A: null, T: null, S: null },
      ep = Object.prototype.hasOwnProperty;
    function eh(e, t, n) {
      var a = n.ref;
      return {
        $$typeof: H,
        type: e,
        key: t,
        ref: void 0 !== a ? a : null,
        props: n,
      };
    }
    function eg(e) {
      return "object" == typeof e && null !== e && e.$$typeof === H;
    }
    var eb = /\/+/g;
    function ev(e, t) {
      var n, a;
      return "object" == typeof e && null !== e && null != e.key
        ? ((n = "" + e.key),
          (a = { "=": "=0", ":": "=2" }),
          "$" +
            n.replace(/[=:]/g, function (e) {
              return a[e];
            }))
        : t.toString(36);
    }
    function ey(e, t, n) {
      if (null == e) return e;
      var a = [],
        r = 0;
      return (
        !(function e(t, n, a, r, l) {
          var s,
            i,
            o,
            c = typeof t;
          ("undefined" === c || "boolean" === c) && (t = null);
          var u = !1;
          if (null === t) u = !0;
          else
            switch (c) {
              case "bigint":
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (t.$$typeof) {
                  case H:
                  case W:
                    u = !0;
                    break;
                  case et:
                    return e((u = t._init)(t._payload), n, a, r, l);
                }
            }
          if (u)
            return (
              (l = l(t)),
              (u = "" === r ? "." + ev(t, 0) : r),
              ed(l)
                ? ((a = ""),
                  null != u && (a = u.replace(eb, "$&/") + "/"),
                  e(l, n, a, "", function (e) {
                    return e;
                  }))
                : null != l &&
                  (eg(l) &&
                    ((s = l),
                    (i =
                      a +
                      (null == l.key || (t && t.key === l.key)
                        ? ""
                        : ("" + l.key).replace(eb, "$&/") + "/") +
                      u),
                    (l = eh(s.type, i, s.props))),
                  n.push(l)),
              1
            );
          u = 0;
          var d = "" === r ? "." : r + ":";
          if (ed(t))
            for (var f = 0; f < t.length; f++)
              ((c = d + ev((r = t[f]), f)), (u += e(r, n, a, c, l)));
          else if (
            "function" ==
            typeof (f =
              null === (o = t) || "object" != typeof o
                ? null
                : "function" == typeof (o = (ea && o[ea]) || o["@@iterator"])
                  ? o
                  : null)
          )
            for (t = f.call(t), f = 0; !(r = t.next()).done;)
              ((c = d + ev((r = r.value), f++)), (u += e(r, n, a, c, l)));
          else if ("object" === c) {
            if ("function" == typeof t.then)
              return e(
                (function (e) {
                  switch (e.status) {
                    case "fulfilled":
                      return e.value;
                    case "rejected":
                      throw e.reason;
                    default:
                      switch (
                        ("string" == typeof e.status
                          ? e.then(ef, ef)
                          : ((e.status = "pending"),
                            e.then(
                              function (t) {
                                "pending" === e.status &&
                                  ((e.status = "fulfilled"), (e.value = t));
                              },
                              function (t) {
                                "pending" === e.status &&
                                  ((e.status = "rejected"), (e.reason = t));
                              },
                            )),
                        e.status)
                      ) {
                        case "fulfilled":
                          return e.value;
                        case "rejected":
                          throw e.reason;
                      }
                  }
                  throw e;
                })(t),
                n,
                a,
                r,
                l,
              );
            throw Error(
              "Objects are not valid as a React child (found: " +
                ("[object Object]" === (n = String(t))
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : n) +
                "). If you meant to render a collection of children, use an array instead.",
            );
          }
          return u;
        })(e, a, "", "", function (e) {
          return t.call(n, e, r++);
        }),
        a
      );
    }
    function ex(e) {
      if (-1 === e._status) {
        var t = e._result;
        ((t = t()).then(
          function (t) {
            (0 === e._status || -1 === e._status) &&
              ((e._status = 1), (e._result = t));
          },
          function (t) {
            (0 === e._status || -1 === e._status) &&
              ((e._status = 2), (e._result = t));
          },
        ),
          -1 === e._status && ((e._status = 0), (e._result = t)));
      }
      if (1 === e._status) return e._result.default;
      throw e._result;
    }
    var ek =
      "function" == typeof reportError
        ? reportError
        : function (e) {
            if (
              "object" == typeof window &&
              "function" == typeof window.ErrorEvent
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  "object" == typeof e &&
                  null !== e &&
                  "string" == typeof e.message
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            }
            console.error(e);
          };
    ((a = en),
      (r = {
        map: ey,
        forEach: function (e, t, n) {
          ey(
            e,
            function () {
              t.apply(this, arguments);
            },
            n,
          );
        },
        count: function (e) {
          var t = 0;
          return (
            ey(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            ey(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!eg(e))
            throw Error(
              "React.Children.only expected to receive a single React element child.",
            );
          return e;
        },
      }),
      (l = ei),
      (s = V),
      (i = G),
      (o = ec),
      (c = K),
      (u = Z),
      (d = em),
      (f = {
        __proto__: null,
        c: function (e) {
          return em.H.useMemoCache(e);
        },
      }),
      (m = function (e) {
        return function () {
          return e.apply(null, arguments);
        };
      }),
      (p = function () {
        return null;
      }),
      (h = function (e, t, n) {
        if (null == e)
          throw Error(
            "The argument must be a React element, but you passed " + e + ".",
          );
        var a = el({}, e.props),
          r = e.key;
        if (null != t)
          for (l in (void 0 !== t.key && (r = "" + t.key), t))
            ep.call(t, l) &&
              "key" !== l &&
              "__self" !== l &&
              "__source" !== l &&
              ("ref" !== l || void 0 !== t.ref) &&
              (a[l] = t[l]);
        var l = arguments.length - 2;
        if (1 === l) a.children = n;
        else if (1 < l) {
          for (var s = Array(l), i = 0; i < l; i++) s[i] = arguments[i + 2];
          a.children = s;
        }
        return eh(e.type, r, a);
      }),
      (g = function (e) {
        return (
          ((e = {
            $$typeof: X,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }).Provider = e),
          (e.Consumer = { $$typeof: Y, _context: e }),
          e
        );
      }),
      (b = function (e, t, n) {
        var a,
          r = {},
          l = null;
        if (null != t)
          for (a in (void 0 !== t.key && (l = "" + t.key), t))
            ep.call(t, a) &&
              "key" !== a &&
              "__self" !== a &&
              "__source" !== a &&
              (r[a] = t[a]);
        var s = arguments.length - 2;
        if (1 === s) r.children = n;
        else if (1 < s) {
          for (var i = Array(s), o = 0; o < s; o++) i[o] = arguments[o + 2];
          r.children = i;
        }
        if (e && e.defaultProps)
          for (a in (s = e.defaultProps)) void 0 === r[a] && (r[a] = s[a]);
        return eh(e, l, r);
      }),
      (v = function () {
        return { current: null };
      }),
      (y = function (e) {
        return { $$typeof: J, render: e };
      }),
      (x = eg),
      (k = function (e) {
        return {
          $$typeof: et,
          _payload: { _status: -1, _result: e },
          _init: ex,
        };
      }),
      (j = function (e, t) {
        return { $$typeof: ee, type: e, compare: void 0 === t ? null : t };
      }),
      (w = function (e) {
        var t = em.T,
          n = {};
        em.T = n;
        try {
          var a = e(),
            r = em.S;
          (null !== r && r(n, a),
            "object" == typeof a &&
              null !== a &&
              "function" == typeof a.then &&
              a.then(ef, ek));
        } catch (e) {
          ek(e);
        } finally {
          (null !== t && null !== n.types && (t.types = n.types), (em.T = t));
        }
      }),
      (N = function () {
        return em.H.useCacheRefresh();
      }),
      (S = function (e) {
        return em.H.use(e);
      }),
      (C = function (e, t, n) {
        return em.H.useActionState(e, t, n);
      }),
      (E = function (e, t) {
        return em.H.useCallback(e, t);
      }),
      ($ = function (e) {
        return em.H.useContext(e);
      }),
      (z = function () {}),
      (T = function (e, t) {
        return em.H.useDeferredValue(e, t);
      }),
      (M = function (e, t) {
        return em.H.useEffect(e, t);
      }),
      (_ = function (e) {
        return em.H.useEffectEvent(e);
      }),
      (P = function () {
        return em.H.useId();
      }),
      (A = function (e, t, n) {
        return em.H.useImperativeHandle(e, t, n);
      }),
      (L = function (e, t) {
        return em.H.useInsertionEffect(e, t);
      }),
      (q = function (e, t) {
        return em.H.useLayoutEffect(e, t);
      }),
      (R = function (e, t) {
        return em.H.useMemo(e, t);
      }),
      (D = function (e, t) {
        return em.H.useOptimistic(e, t);
      }),
      (F = function (e, t, n) {
        return em.H.useReducer(e, t, n);
      }),
      (O = function (e) {
        return em.H.useRef(e);
      }),
      (I = function (e) {
        return em.H.useState(e);
      }),
      (U = function (e, t, n) {
        return em.H.useSyncExternalStore(e, t, n);
      }),
      (B = function () {
        return em.H.useTransition();
      }),
      (Q = "19.2.7"));
  }),
  l("7b93F", function (t, n) {
    (e(
      t.exports,
      "createRoot",
      () => tD,
      (e) => (tD = e),
    ),
      e(
        t.exports,
        "hydrateRoot",
        () => tF,
        (e) => (tF = e),
      ),
      e(
        t.exports,
        "version",
        () => tO,
        (e) => (tO = e),
      ));
    var a,
      l = r("aALGe"),
      s = r("2YQ6R"),
      i = r("8yZRv");
    function o(e) {
      var t = "https://react.dev/errors/" + e;
      if (1 < arguments.length) {
        t += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += "&args[]=" + encodeURIComponent(arguments[n]);
      }
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    function c(e) {
      return !(
        !e ||
        (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
      );
    }
    function u(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return;) t = t.return;
      else {
        e = t;
        do (0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return));
        while (e);
      }
      return 3 === t.tag ? n : null;
    }
    function d(e) {
      if (13 === e.tag) {
        var t = e.memoizedState;
        if (
          (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
          null !== t)
        )
          return t.dehydrated;
      }
      return null;
    }
    function f(e) {
      if (31 === e.tag) {
        var t = e.memoizedState;
        if (
          (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
          null !== t)
        )
          return t.dehydrated;
      }
      return null;
    }
    function m(e) {
      if (u(e) !== e) throw Error(o(188));
    }
    var p = Object.assign,
      h = Symbol.for("react.element"),
      g = Symbol.for("react.transitional.element"),
      b = Symbol.for("react.portal"),
      v = Symbol.for("react.fragment"),
      y = Symbol.for("react.strict_mode"),
      x = Symbol.for("react.profiler"),
      k = Symbol.for("react.consumer"),
      j = Symbol.for("react.context"),
      w = Symbol.for("react.forward_ref"),
      N = Symbol.for("react.suspense"),
      S = Symbol.for("react.suspense_list"),
      C = Symbol.for("react.memo"),
      E = Symbol.for("react.lazy");
    Symbol.for("react.scope");
    var $ = Symbol.for("react.activity");
    (Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker"));
    var z = Symbol.for("react.memo_cache_sentinel");
    Symbol.for("react.view_transition");
    var T = Symbol.iterator;
    function M(e) {
      return null === e || "object" != typeof e
        ? null
        : "function" == typeof (e = (T && e[T]) || e["@@iterator"])
          ? e
          : null;
    }
    var _ = Symbol.for("react.client.reference"),
      P = Array.isArray,
      A = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      L = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      q = { pending: !1, data: null, method: null, action: null },
      R = [],
      D = -1;
    function F(e) {
      return { current: e };
    }
    function O(e) {
      0 > D || ((e.current = R[D]), (R[D] = null), D--);
    }
    function I(e, t) {
      ((R[++D] = e.current), (e.current = t));
    }
    var U = F(null),
      B = F(null),
      Q = F(null),
      H = F(null);
    function W(e, t) {
      switch ((I(Q, t), I(B, e), I(U, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? cj(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI))) e = cw((t = cj(t)), e);
          else
            switch (e) {
              case "svg":
                e = 1;
                break;
              case "math":
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      (O(U), I(U, e));
    }
    function V() {
      (O(U), O(B), O(Q));
    }
    function K(e) {
      null !== e.memoizedState && I(H, e);
      var t = U.current,
        n = cw(t, e.type);
      t !== n && (I(B, e), I(U, n));
    }
    function G(e) {
      (B.current === e && (O(U), O(B)),
        H.current === e && (O(H), (ul._currentValue = q)));
    }
    function Y(e) {
      if (void 0 === tI)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          ((tI = (t && t[1]) || ""),
            (tU =
              -1 < e.stack.indexOf("\n    at")
                ? " (<anonymous>)"
                : -1 < e.stack.indexOf("@")
                  ? "@unknown:0:0"
                  : ""));
        }
      return "\n" + tI + e + tU;
    }
    var X = !1;
    function J(e, t) {
      if (!e || X) return "";
      X = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var a = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(n.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  "object" == typeof Reflect && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, []);
                  } catch (e) {
                    var a = e;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (e) {
                    a = e;
                  }
                  e.call(n.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  a = e;
                }
                (n = e()) &&
                  "function" == typeof n.catch &&
                  n.catch(function () {});
              }
            } catch (e) {
              if (e && a && "string" == typeof e.stack)
                return [e.stack, a.stack];
            }
            return [null, null];
          },
        };
        a.DetermineComponentFrameRoot.displayName =
          "DetermineComponentFrameRoot";
        var r = Object.getOwnPropertyDescriptor(
          a.DetermineComponentFrameRoot,
          "name",
        );
        r &&
          r.configurable &&
          Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
            value: "DetermineComponentFrameRoot",
          });
        var l = a.DetermineComponentFrameRoot(),
          s = l[0],
          i = l[1];
        if (s && i) {
          var o = s.split("\n"),
            c = i.split("\n");
          for (
            r = a = 0;
            a < o.length && !o[a].includes("DetermineComponentFrameRoot");
          )
            a++;
          for (; r < c.length && !c[r].includes("DetermineComponentFrameRoot");)
            r++;
          if (a === o.length || r === c.length)
            for (
              a = o.length - 1, r = c.length - 1;
              1 <= a && 0 <= r && o[a] !== c[r];
            )
              r--;
          for (; 1 <= a && 0 <= r; a--, r--)
            if (o[a] !== c[r]) {
              if (1 !== a || 1 !== r)
                do
                  if ((a--, r--, 0 > r || o[a] !== c[r])) {
                    var u = "\n" + o[a].replace(" at new ", " at ");
                    return (
                      e.displayName &&
                        u.includes("<anonymous>") &&
                        (u = u.replace("<anonymous>", e.displayName)),
                      u
                    );
                  }
                while (1 <= a && 0 <= r);
              break;
            }
        }
      } finally {
        ((X = !1), (Error.prepareStackTrace = n));
      }
      return (n = e ? e.displayName || e.name : "") ? Y(n) : "";
    }
    function Z(e) {
      try {
        var t = "",
          n = null;
        do
          ((t += (function (e, t) {
            switch (e.tag) {
              case 26:
              case 27:
              case 5:
                return Y(e.type);
              case 16:
                return Y("Lazy");
              case 13:
                return e.child !== t && null !== t
                  ? Y("Suspense Fallback")
                  : Y("Suspense");
              case 19:
                return Y("SuspenseList");
              case 0:
              case 15:
                return J(e.type, !1);
              case 11:
                return J(e.type.render, !1);
              case 1:
                return J(e.type, !0);
              case 31:
                return Y("Activity");
              default:
                return "";
            }
          })(e, n)),
            (n = e),
            (e = e.return));
        while (e);
        return t;
      } catch (e) {
        return "\nError generating stack: " + e.message + "\n" + e.stack;
      }
    }
    var ee = Object.prototype.hasOwnProperty,
      et = l.unstable_scheduleCallback,
      en = l.unstable_cancelCallback,
      ea = l.unstable_shouldYield,
      er = l.unstable_requestPaint,
      el = l.unstable_now,
      es = l.unstable_getCurrentPriorityLevel,
      ei = l.unstable_ImmediatePriority,
      eo = l.unstable_UserBlockingPriority,
      ec = l.unstable_NormalPriority,
      eu = l.unstable_LowPriority,
      ed = l.unstable_IdlePriority,
      ef = l.log,
      em = l.unstable_setDisableYieldValue,
      ep = null,
      eh = null;
    function eg(e) {
      if (
        ("function" == typeof ef && em(e),
        eh && "function" == typeof eh.setStrictMode)
      )
        try {
          eh.setStrictMode(ep, e);
        } catch (e) {}
    }
    var eb = Math.clz32
        ? Math.clz32
        : function (e) {
            return 0 == (e >>>= 0) ? 32 : (31 - ((ev(e) / ey) | 0)) | 0;
          },
      ev = Math.log,
      ey = Math.LN2,
      ex = 256,
      ek = 262144,
      ej = 4194304;
    function ew(e) {
      var t = 42 & e;
      if (0 !== t) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return 261888 & e;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return 3932160 & e;
        case 4194304:
        case 8388608:
        case 0x1000000:
        case 0x2000000:
          return 0x3c00000 & e;
        case 0x4000000:
          return 0x4000000;
        case 0x8000000:
          return 0x8000000;
        case 0x10000000:
          return 0x10000000;
        case 0x20000000:
          return 0x20000000;
        case 0x40000000:
          return 0;
        default:
          return e;
      }
    }
    function eN(e, t, n) {
      var a = e.pendingLanes;
      if (0 === a) return 0;
      var r = 0,
        l = e.suspendedLanes,
        s = e.pingedLanes;
      e = e.warmLanes;
      var i = 0x7ffffff & a;
      return (
        0 !== i
          ? 0 != (a = i & ~l)
            ? (r = ew(a))
            : 0 != (s &= i)
              ? (r = ew(s))
              : n || (0 != (n = i & ~e) && (r = ew(n)))
          : 0 != (i = a & ~l)
            ? (r = ew(i))
            : 0 !== s
              ? (r = ew(s))
              : n || (0 != (n = a & ~e) && (r = ew(n))),
        0 === r
          ? 0
          : 0 !== t &&
              t !== r &&
              0 == (t & l) &&
              ((l = r & -r) >= (n = t & -t) || (32 === l && 0 != (4194048 & n)))
            ? t
            : r
      );
    }
    function eS(e, t) {
      return 0 == (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t);
    }
    function eC() {
      var e = ej;
      return (0 == (0x3c00000 & (ej <<= 1)) && (ej = 4194304), e);
    }
    function eE(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function e$(e, t) {
      ((e.pendingLanes |= t),
        0x10000000 !== t &&
          ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
    }
    function ez(e, t, n) {
      ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
      var a = 31 - eb(t);
      ((e.entangledLanes |= t),
        (e.entanglements[a] = 0x40000000 | e.entanglements[a] | (261930 & n)));
    }
    function eT(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n;) {
        var a = 31 - eb(n),
          r = 1 << a;
        ((r & t) | (e[a] & t) && (e[a] |= t), (n &= ~r));
      }
    }
    function eM(e, t) {
      var n = t & -t;
      return 0 != ((n = 0 != (42 & n) ? 1 : e_(n)) & (e.suspendedLanes | t))
        ? 0
        : n;
    }
    function e_(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 0x1000000:
        case 0x2000000:
          e = 128;
          break;
        case 0x10000000:
          e = 0x8000000;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function eP(e) {
      return 2 < (e &= -e)
        ? 8 < e
          ? 0 != (0x7ffffff & e)
            ? 32
            : 0x10000000
          : 8
        : 2;
    }
    function eA() {
      var e = L.p;
      return 0 !== e ? e : void 0 === (e = window.event) ? 32 : ux(e.type);
    }
    function eL(e, t) {
      var n = L.p;
      try {
        return ((L.p = e), t());
      } finally {
        L.p = n;
      }
    }
    var eq = Math.random().toString(36).slice(2),
      eR = "__reactFiber$" + eq,
      eD = "__reactProps$" + eq,
      eF = "__reactContainer$" + eq,
      eO = "__reactEvents$" + eq,
      eI = "__reactListeners$" + eq,
      eU = "__reactHandles$" + eq,
      eB = "__reactResources$" + eq,
      eQ = "__reactMarker$" + eq;
    function eH(e) {
      (delete e[eR], delete e[eD], delete e[eO], delete e[eI], delete e[eU]);
    }
    function eW(e) {
      var t = e[eR];
      if (t) return t;
      for (var n = e.parentNode; n;) {
        if ((t = n[eF] || n[eR])) {
          if (
            ((n = t.alternate),
            null !== t.child || (null !== n && null !== n.child))
          )
            for (e = cI(e); null !== e;) {
              if ((n = e[eR])) return n;
              e = cI(e);
            }
          return t;
        }
        n = (e = n).parentNode;
      }
      return null;
    }
    function eV(e) {
      if ((e = e[eR] || e[eF])) {
        var t = e.tag;
        if (
          5 === t ||
          6 === t ||
          13 === t ||
          31 === t ||
          26 === t ||
          27 === t ||
          3 === t
        )
          return e;
      }
      return null;
    }
    function eK(e) {
      var t = e.tag;
      if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
      throw Error(o(33));
    }
    function eG(e) {
      var t = e[eB];
      return (
        t ||
          (t = e[eB] =
            { hoistableStyles: new Map(), hoistableScripts: new Map() }),
        t
      );
    }
    function eY(e) {
      e[eQ] = !0;
    }
    var eX = new Set(),
      eJ = {};
    function eZ(e, t) {
      (e0(e, t), e0(e + "Capture", t));
    }
    function e0(e, t) {
      for (eJ[e] = t, e = 0; e < t.length; e++) eX.add(t[e]);
    }
    var e1 = RegExp(
        "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
      ),
      e2 = {},
      e3 = {};
    function e5(e, t, n) {
      if (
        ee.call(e3, t) ||
        (!ee.call(e2, t) && (e1.test(t) ? (e3[t] = !0) : ((e2[t] = !0), !1)))
      )
        if (null === n) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var a = t.toLowerCase().slice(0, 5);
              if ("data-" !== a && "aria-" !== a)
                return void e.removeAttribute(t);
          }
          e.setAttribute(t, "" + n);
        }
    }
    function e4(e, t, n) {
      if (null === n) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, "" + n);
      }
    }
    function e6(e, t, n, a) {
      if (null === a) e.removeAttribute(n);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(n);
            return;
        }
        e.setAttributeNS(t, n, "" + a);
      }
    }
    function e8(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
        case "object":
          return e;
        default:
          return "";
      }
    }
    function e7(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        "input" === e.toLowerCase() &&
        ("checkbox" === t || "radio" === t)
      );
    }
    function e9(e) {
      if (!e._valueTracker) {
        var t = e7(e) ? "checked" : "value";
        e._valueTracker = (function (e, t, n) {
          var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
          if (
            !e.hasOwnProperty(t) &&
            void 0 !== a &&
            "function" == typeof a.get &&
            "function" == typeof a.set
          ) {
            var r = a.get,
              l = a.set;
            return (
              Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                  return r.call(this);
                },
                set: function (e) {
                  ((n = "" + e), l.call(this, e));
                },
              }),
              Object.defineProperty(e, t, { enumerable: a.enumerable }),
              {
                getValue: function () {
                  return n;
                },
                setValue: function (e) {
                  n = "" + e;
                },
                stopTracking: function () {
                  ((e._valueTracker = null), delete e[t]);
                },
              }
            );
          }
        })(e, t, "" + e[t]);
      }
    }
    function te(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        a = "";
      return (
        e && (a = e7(e) ? (e.checked ? "true" : "false") : e.value),
        (e = a) !== n && (t.setValue(e), !0)
      );
    }
    function tt(e) {
      if (void 0 === (e = e || ("u" > typeof document ? document : void 0)))
        return null;
      try {
        return e.activeElement || e.body;
      } catch (t) {
        return e.body;
      }
    }
    var tn = /[\n"\\]/g;
    function ta(e) {
      return e.replace(tn, function (e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      });
    }
    function tr(e, t, n, a, r, l, s, i) {
      ((e.name = ""),
        null != s &&
        "function" != typeof s &&
        "symbol" != typeof s &&
        "boolean" != typeof s
          ? (e.type = s)
          : e.removeAttribute("type"),
        null != t
          ? "number" === s
            ? ((0 === t && "" === e.value) || e.value != t) &&
              (e.value = "" + e8(t))
            : e.value !== "" + e8(t) && (e.value = "" + e8(t))
          : ("submit" !== s && "reset" !== s) || e.removeAttribute("value"),
        null != t
          ? ts(e, s, e8(t))
          : null != n
            ? ts(e, s, e8(n))
            : null != a && e.removeAttribute("value"),
        null == r && null != l && (e.defaultChecked = !!l),
        null != r &&
          (e.checked = r && "function" != typeof r && "symbol" != typeof r),
        null != i &&
        "function" != typeof i &&
        "symbol" != typeof i &&
        "boolean" != typeof i
          ? (e.name = "" + e8(i))
          : e.removeAttribute("name"));
    }
    function tl(e, t, n, a, r, l, s, i) {
      if (
        (null != l &&
          "function" != typeof l &&
          "symbol" != typeof l &&
          "boolean" != typeof l &&
          (e.type = l),
        null != t || null != n)
      ) {
        if (("submit" === l || "reset" === l) && null == t) return void e9(e);
        ((n = null != n ? "" + e8(n) : ""),
          (t = null != t ? "" + e8(t) : n),
          i || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((a =
        "function" != typeof (a = null != a ? a : r) &&
        "symbol" != typeof a &&
        !!a),
        (e.checked = i ? e.checked : !!a),
        (e.defaultChecked = !!a),
        null != s &&
          "function" != typeof s &&
          "symbol" != typeof s &&
          "boolean" != typeof s &&
          (e.name = s),
        e9(e));
    }
    function ts(e, t, n) {
      ("number" === t && tt(e.ownerDocument) === e) ||
        e.defaultValue === "" + n ||
        (e.defaultValue = "" + n);
    }
    function ti(e, t, n, a) {
      if (((e = e.options), t)) {
        t = {};
        for (var r = 0; r < n.length; r++) t["$" + n[r]] = !0;
        for (n = 0; n < e.length; n++)
          ((r = t.hasOwnProperty("$" + e[n].value)),
            e[n].selected !== r && (e[n].selected = r),
            r && a && (e[n].defaultSelected = !0));
      } else {
        for (n = "" + e8(n), t = null, r = 0; r < e.length; r++) {
          if (e[r].value === n) {
            ((e[r].selected = !0), a && (e[r].defaultSelected = !0));
            return;
          }
          null !== t || e[r].disabled || (t = e[r]);
        }
        null !== t && (t.selected = !0);
      }
    }
    function to(e, t, n) {
      if (
        null != t &&
        ((t = "" + e8(t)) !== e.value && (e.value = t), null == n)
      ) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = null != n ? "" + e8(n) : "";
    }
    function tc(e, t, n, a) {
      if (null == t) {
        if (null != a) {
          if (null != n) throw Error(o(92));
          if (P(a)) {
            if (1 < a.length) throw Error(o(93));
            a = a[0];
          }
          n = a;
        }
        (null == n && (n = ""), (t = n));
      }
      ((e.defaultValue = n = e8(t)),
        (a = e.textContent) === n && "" !== a && null !== a && (e.value = a),
        e9(e));
    }
    function tu(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var td = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " ",
      ),
    );
    function tf(e, t, n) {
      var a = 0 === t.indexOf("--");
      null == n || "boolean" == typeof n || "" === n
        ? a
          ? e.setProperty(t, "")
          : "float" === t
            ? (e.cssFloat = "")
            : (e[t] = "")
        : a
          ? e.setProperty(t, n)
          : "number" != typeof n || 0 === n || td.has(t)
            ? "float" === t
              ? (e.cssFloat = n)
              : (e[t] = ("" + n).trim())
            : (e[t] = n + "px");
    }
    function tm(e, t, n) {
      if (null != t && "object" != typeof t) throw Error(o(62));
      if (((e = e.style), null != n)) {
        for (var a in n)
          !n.hasOwnProperty(a) ||
            (null != t && t.hasOwnProperty(a)) ||
            (0 === a.indexOf("--")
              ? e.setProperty(a, "")
              : "float" === a
                ? (e.cssFloat = "")
                : (e[a] = ""));
        for (var r in t)
          ((a = t[r]), t.hasOwnProperty(r) && n[r] !== a && tf(e, r, a));
      } else for (var l in t) t.hasOwnProperty(l) && tf(e, l, t[l]);
    }
    function tp(e) {
      if (-1 === e.indexOf("-")) return !1;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var th = new Map([
        ["acceptCharset", "accept-charset"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
        ["crossOrigin", "crossorigin"],
        ["accentHeight", "accent-height"],
        ["alignmentBaseline", "alignment-baseline"],
        ["arabicForm", "arabic-form"],
        ["baselineShift", "baseline-shift"],
        ["capHeight", "cap-height"],
        ["clipPath", "clip-path"],
        ["clipRule", "clip-rule"],
        ["colorInterpolation", "color-interpolation"],
        ["colorInterpolationFilters", "color-interpolation-filters"],
        ["colorProfile", "color-profile"],
        ["colorRendering", "color-rendering"],
        ["dominantBaseline", "dominant-baseline"],
        ["enableBackground", "enable-background"],
        ["fillOpacity", "fill-opacity"],
        ["fillRule", "fill-rule"],
        ["floodColor", "flood-color"],
        ["floodOpacity", "flood-opacity"],
        ["fontFamily", "font-family"],
        ["fontSize", "font-size"],
        ["fontSizeAdjust", "font-size-adjust"],
        ["fontStretch", "font-stretch"],
        ["fontStyle", "font-style"],
        ["fontVariant", "font-variant"],
        ["fontWeight", "font-weight"],
        ["glyphName", "glyph-name"],
        ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
        ["glyphOrientationVertical", "glyph-orientation-vertical"],
        ["horizAdvX", "horiz-adv-x"],
        ["horizOriginX", "horiz-origin-x"],
        ["imageRendering", "image-rendering"],
        ["letterSpacing", "letter-spacing"],
        ["lightingColor", "lighting-color"],
        ["markerEnd", "marker-end"],
        ["markerMid", "marker-mid"],
        ["markerStart", "marker-start"],
        ["overlinePosition", "overline-position"],
        ["overlineThickness", "overline-thickness"],
        ["paintOrder", "paint-order"],
        ["panose-1", "panose-1"],
        ["pointerEvents", "pointer-events"],
        ["renderingIntent", "rendering-intent"],
        ["shapeRendering", "shape-rendering"],
        ["stopColor", "stop-color"],
        ["stopOpacity", "stop-opacity"],
        ["strikethroughPosition", "strikethrough-position"],
        ["strikethroughThickness", "strikethrough-thickness"],
        ["strokeDasharray", "stroke-dasharray"],
        ["strokeDashoffset", "stroke-dashoffset"],
        ["strokeLinecap", "stroke-linecap"],
        ["strokeLinejoin", "stroke-linejoin"],
        ["strokeMiterlimit", "stroke-miterlimit"],
        ["strokeOpacity", "stroke-opacity"],
        ["strokeWidth", "stroke-width"],
        ["textAnchor", "text-anchor"],
        ["textDecoration", "text-decoration"],
        ["textRendering", "text-rendering"],
        ["transformOrigin", "transform-origin"],
        ["underlinePosition", "underline-position"],
        ["underlineThickness", "underline-thickness"],
        ["unicodeBidi", "unicode-bidi"],
        ["unicodeRange", "unicode-range"],
        ["unitsPerEm", "units-per-em"],
        ["vAlphabetic", "v-alphabetic"],
        ["vHanging", "v-hanging"],
        ["vIdeographic", "v-ideographic"],
        ["vMathematical", "v-mathematical"],
        ["vectorEffect", "vector-effect"],
        ["vertAdvY", "vert-adv-y"],
        ["vertOriginX", "vert-origin-x"],
        ["vertOriginY", "vert-origin-y"],
        ["wordSpacing", "word-spacing"],
        ["writingMode", "writing-mode"],
        ["xmlnsXlink", "xmlns:xlink"],
        ["xHeight", "x-height"],
      ]),
      tg =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function tb(e) {
      return tg.test("" + e)
        ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
        : e;
    }
    function tv() {}
    var ty = null;
    function tx(e) {
      return (
        (e = e.target || e.srcElement || window).correspondingUseElement &&
          (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
      );
    }
    var tk = null,
      tj = null;
    function tw(e) {
      var t = eV(e);
      if (t && (e = t.stateNode)) {
        var n = e[eD] || null;
        switch (((e = t.stateNode), t.type)) {
          case "input":
            if (
              (tr(
                e,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name,
              ),
              (t = n.name),
              "radio" === n.type && null != t)
            ) {
              for (n = e; n.parentNode;) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  'input[name="' + ta("" + t) + '"][type="radio"]',
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var a = n[t];
                if (a !== e && a.form === e.form) {
                  var r = a[eD] || null;
                  if (!r) throw Error(o(90));
                  tr(
                    a,
                    r.value,
                    r.defaultValue,
                    r.defaultValue,
                    r.checked,
                    r.defaultChecked,
                    r.type,
                    r.name,
                  );
                }
              }
              for (t = 0; t < n.length; t++)
                (a = n[t]).form === e.form && te(a);
            }
            break;
          case "textarea":
            to(e, n.value, n.defaultValue);
            break;
          case "select":
            null != (t = n.value) && ti(e, !!n.multiple, t, !1);
        }
      }
    }
    var tN = !1;
    function tS(e, t, n) {
      if (tN) return e(t, n);
      tN = !0;
      try {
        return e(t);
      } finally {
        if (
          ((tN = !1),
          (null !== tk || null !== tj) &&
            (og(), tk && ((t = tk), (e = tj), (tj = tk = null), tw(t), e)))
        )
          for (t = 0; t < e.length; t++) tw(e[t]);
      }
    }
    function tC(e, t) {
      var n = e.stateNode;
      if (null === n) return null;
      var a = n[eD] || null;
      if (null === a) return null;
      switch (((n = a[t]), t)) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          ((a = !a.disabled) ||
            (a =
              "button" !== (e = e.type) &&
              "input" !== e &&
              "select" !== e &&
              "textarea" !== e),
            (e = !a));
          break;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && "function" != typeof n) throw Error(o(231, t, typeof n));
      return n;
    }
    var tE =
        "u" > typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement,
      t$ = !1;
    if (tE)
      try {
        var tz = {};
        (Object.defineProperty(tz, "passive", {
          get: function () {
            t$ = !0;
          },
        }),
          window.addEventListener("test", tz, tz),
          window.removeEventListener("test", tz, tz));
      } catch (e) {
        t$ = !1;
      }
    var tT = null,
      tM = null,
      t_ = null;
    function tP() {
      if (t_) return t_;
      var e,
        t,
        n = tM,
        a = n.length,
        r = "value" in tT ? tT.value : tT.textContent,
        l = r.length;
      for (e = 0; e < a && n[e] === r[e]; e++);
      var s = a - e;
      for (t = 1; t <= s && n[a - t] === r[l - t]; t++);
      return (t_ = r.slice(e, 1 < t ? 1 - t : void 0));
    }
    function tA(e) {
      var t = e.keyCode;
      return (
        "charCode" in e
          ? 0 === (e = e.charCode) && 13 === t && (e = 13)
          : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
      );
    }
    function tL() {
      return !0;
    }
    function tq() {
      return !1;
    }
    function tR(e) {
      function t(t, n, a, r, l) {
        for (var s in ((this._reactName = t),
        (this._targetInst = a),
        (this.type = n),
        (this.nativeEvent = r),
        (this.target = l),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(s) && ((t = e[s]), (this[s] = t ? t(r) : r[s]));
        return (
          (this.isDefaultPrevented = (
            null != r.defaultPrevented
              ? r.defaultPrevented
              : !1 === r.returnValue
          )
            ? tL
            : tq),
          (this.isPropagationStopped = tq),
          this
        );
      }
      return (
        p(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : "unknown" != typeof e.returnValue && (e.returnValue = !1),
              (this.isDefaultPrevented = tL));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
              (this.isPropagationStopped = tL));
          },
          persist: function () {},
          isPersistent: tL,
        }),
        t
      );
    }
    var tD,
      tF,
      tO,
      tI,
      tU,
      tB,
      tQ,
      tH,
      tW = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      tV = tR(tW),
      tK = p({}, tW, { view: 0, detail: 0 }),
      tG = tR(tK),
      tY = p({}, tK, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: t8,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return void 0 === e.relatedTarget
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return "movementX" in e
            ? e.movementX
            : (e !== tH &&
                (tH && "mousemove" === e.type
                  ? ((tB = e.screenX - tH.screenX),
                    (tQ = e.screenY - tH.screenY))
                  : (tQ = tB = 0),
                (tH = e)),
              tB);
        },
        movementY: function (e) {
          return "movementY" in e ? e.movementY : tQ;
        },
      }),
      tX = tR(tY),
      tJ = tR(p({}, tY, { dataTransfer: 0 })),
      tZ = tR(p({}, tK, { relatedTarget: 0 })),
      t0 = tR(
        p({}, tW, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      ),
      t1 = tR(
        p({}, tW, {
          clipboardData: function (e) {
            return "clipboardData" in e
              ? e.clipboardData
              : window.clipboardData;
          },
        }),
      ),
      t2 = tR(p({}, tW, { data: 0 })),
      t3 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
      },
      t5 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
      },
      t4 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
      };
    function t6(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : !!(e = t4[e]) && !!t[e];
    }
    function t8() {
      return t6;
    }
    var t7 = tR(
        p({}, tK, {
          key: function (e) {
            if (e.key) {
              var t = t3[e.key] || e.key;
              if ("Unidentified" !== t) return t;
            }
            return "keypress" === e.type
              ? 13 === (e = tA(e))
                ? "Enter"
                : String.fromCharCode(e)
              : "keydown" === e.type || "keyup" === e.type
                ? t5[e.keyCode] || "Unidentified"
                : "";
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: t8,
          charCode: function (e) {
            return "keypress" === e.type ? tA(e) : 0;
          },
          keyCode: function (e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
          },
          which: function (e) {
            return "keypress" === e.type
              ? tA(e)
              : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
          },
        }),
      ),
      t9 = tR(
        p({}, tY, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        }),
      ),
      ne = tR(
        p({}, tK, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: t8,
        }),
      ),
      nt = tR(p({}, tW, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      nn = tR(
        p({}, tY, {
          deltaX: function (e) {
            return "deltaX" in e
              ? e.deltaX
              : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
          },
          deltaY: function (e) {
            return "deltaY" in e
              ? e.deltaY
              : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                  ? -e.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
      ),
      na = tR(p({}, tW, { newState: 0, oldState: 0 })),
      nr = [9, 13, 27, 32],
      nl = tE && "CompositionEvent" in window,
      ns = null;
    tE && "documentMode" in document && (ns = document.documentMode);
    var ni = tE && "TextEvent" in window && !ns,
      no = tE && (!nl || (ns && 8 < ns && 11 >= ns)),
      nc = !1;
    function nu(e, t) {
      switch (e) {
        case "keyup":
          return -1 !== nr.indexOf(t.keyCode);
        case "keydown":
          return 229 !== t.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function nd(e) {
      return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
    }
    var nf = !1,
      nm = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
      };
    function np(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return "input" === t ? !!nm[e.type] : "textarea" === t;
    }
    function nh(e, t, n, a) {
      (tk ? (tj ? tj.push(a) : (tj = [a])) : (tk = a),
        0 < (t = co(t, "onChange")).length &&
          ((n = new tV("onChange", "change", null, n, a)),
          e.push({ event: n, listeners: t })));
    }
    var ng = null,
      nb = null;
    function nv(e) {
      ce(e, 0);
    }
    function ny(e) {
      if (te(eK(e))) return e;
    }
    function nx(e, t) {
      if ("change" === e) return t;
    }
    var nk = !1;
    if (tE) {
      if (tE) {
        var nj = "oninput" in document;
        if (!nj) {
          var nw = document.createElement("div");
          (nw.setAttribute("oninput", "return;"),
            (nj = "function" == typeof nw.oninput));
        }
        a = nj;
      } else a = !1;
      nk = a && (!document.documentMode || 9 < document.documentMode);
    }
    function nN() {
      ng && (ng.detachEvent("onpropertychange", nS), (nb = ng = null));
    }
    function nS(e) {
      if ("value" === e.propertyName && ny(nb)) {
        var t = [];
        (nh(t, nb, e, tx(e)), tS(nv, t));
      }
    }
    function nC(e, t, n) {
      "focusin" === e
        ? (nN(), (ng = t), (nb = n), ng.attachEvent("onpropertychange", nS))
        : "focusout" === e && nN();
    }
    function nE(e) {
      if ("selectionchange" === e || "keyup" === e || "keydown" === e)
        return ny(nb);
    }
    function n$(e, t) {
      if ("click" === e) return ny(t);
    }
    function nz(e, t) {
      if ("input" === e || "change" === e) return ny(t);
    }
    var nT =
      "function" == typeof Object.is
        ? Object.is
        : function (e, t) {
            return (
              (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
            );
          };
    function nM(e, t) {
      if (nT(e, t)) return !0;
      if (
        "object" != typeof e ||
        null === e ||
        "object" != typeof t ||
        null === t
      )
        return !1;
      var n = Object.keys(e),
        a = Object.keys(t);
      if (n.length !== a.length) return !1;
      for (a = 0; a < n.length; a++) {
        var r = n[a];
        if (!ee.call(t, r) || !nT(e[r], t[r])) return !1;
      }
      return !0;
    }
    function n_(e) {
      for (; e && e.firstChild;) e = e.firstChild;
      return e;
    }
    function nP(e, t) {
      var n,
        a = n_(e);
      for (e = 0; a;) {
        if (3 === a.nodeType) {
          if (((n = e + a.textContent.length), e <= t && n >= t))
            return { node: a, offset: t - e };
          e = n;
        }
        e: {
          for (; a;) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = n_(a);
      }
    }
    function nA(e) {
      e =
        null != e &&
        null != e.ownerDocument &&
        null != e.ownerDocument.defaultView
          ? e.ownerDocument.defaultView
          : window;
      for (var t = tt(e.document); t instanceof e.HTMLIFrameElement;) {
        try {
          var n = "string" == typeof t.contentWindow.location.href;
        } catch (e) {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = tt(e.document);
      }
      return t;
    }
    function nL(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        (("input" === t &&
          ("text" === e.type ||
            "search" === e.type ||
            "tel" === e.type ||
            "url" === e.type ||
            "password" === e.type)) ||
          "textarea" === t ||
          "true" === e.contentEditable)
      );
    }
    var nq = tE && "documentMode" in document && 11 >= document.documentMode,
      nR = null,
      nD = null,
      nF = null,
      nO = !1;
    function nI(e, t, n) {
      var a =
        n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
      nO ||
        null == nR ||
        nR !== tt(a) ||
        ((a =
          "selectionStart" in (a = nR) && nL(a)
            ? { start: a.selectionStart, end: a.selectionEnd }
            : {
                anchorNode: (a = (
                  (a.ownerDocument && a.ownerDocument.defaultView) ||
                  window
                ).getSelection()).anchorNode,
                anchorOffset: a.anchorOffset,
                focusNode: a.focusNode,
                focusOffset: a.focusOffset,
              }),
        (nF && nM(nF, a)) ||
          ((nF = a),
          0 < (a = co(nD, "onSelect")).length &&
            ((t = new tV("onSelect", "select", null, t, n)),
            e.push({ event: t, listeners: a }),
            (t.target = nR))));
    }
    function nU(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        n
      );
    }
    var nB = {
        animationend: nU("Animation", "AnimationEnd"),
        animationiteration: nU("Animation", "AnimationIteration"),
        animationstart: nU("Animation", "AnimationStart"),
        transitionrun: nU("Transition", "TransitionRun"),
        transitionstart: nU("Transition", "TransitionStart"),
        transitioncancel: nU("Transition", "TransitionCancel"),
        transitionend: nU("Transition", "TransitionEnd"),
      },
      nQ = {},
      nH = {};
    function nW(e) {
      if (nQ[e]) return nQ[e];
      if (!nB[e]) return e;
      var t,
        n = nB[e];
      for (t in n) if (n.hasOwnProperty(t) && t in nH) return (nQ[e] = n[t]);
      return e;
    }
    tE &&
      ((nH = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete nB.animationend.animation,
        delete nB.animationiteration.animation,
        delete nB.animationstart.animation),
      "TransitionEvent" in window || delete nB.transitionend.transition);
    var nV = nW("animationend"),
      nK = nW("animationiteration"),
      nG = nW("animationstart"),
      nY = nW("transitionrun"),
      nX = nW("transitionstart"),
      nJ = nW("transitioncancel"),
      nZ = nW("transitionend"),
      n0 = new Map(),
      n1 =
        "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
          " ",
        );
    function n2(e, t) {
      (n0.set(e, t), eZ(t, [e]));
    }
    n1.push("scrollEnd");
    var n3 =
        "function" == typeof reportError
          ? reportError
          : function (e) {
              if (
                "object" == typeof window &&
                "function" == typeof window.ErrorEvent
              ) {
                var t = new window.ErrorEvent("error", {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    "object" == typeof e &&
                    null !== e &&
                    "string" == typeof e.message
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              }
              console.error(e);
            },
      n5 = [],
      n4 = 0,
      n6 = 0;
    function n8() {
      for (var e = n4, t = (n6 = n4 = 0); t < e;) {
        var n = n5[t];
        n5[t++] = null;
        var a = n5[t];
        n5[t++] = null;
        var r = n5[t];
        n5[t++] = null;
        var l = n5[t];
        if (((n5[t++] = null), null !== a && null !== r)) {
          var s = a.pending;
          (null === s ? (r.next = r) : ((r.next = s.next), (s.next = r)),
            (a.pending = r));
        }
        0 !== l && at(n, r, l);
      }
    }
    function n7(e, t, n, a) {
      ((n5[n4++] = e),
        (n5[n4++] = t),
        (n5[n4++] = n),
        (n5[n4++] = a),
        (n6 |= a),
        (e.lanes |= a),
        null !== (e = e.alternate) && (e.lanes |= a));
    }
    function n9(e, t, n, a) {
      return (n7(e, t, n, a), an(e));
    }
    function ae(e, t) {
      return (n7(e, null, null, t), an(e));
    }
    function at(e, t, n) {
      e.lanes |= n;
      var a = e.alternate;
      null !== a && (a.lanes |= n);
      for (var r = !1, l = e.return; null !== l;)
        ((l.childLanes |= n),
          null !== (a = l.alternate) && (a.childLanes |= n),
          22 === l.tag &&
            (null === (e = l.stateNode) || 1 & e._visibility || (r = !0)),
          (e = l),
          (l = l.return));
      return 3 === e.tag
        ? ((l = e.stateNode),
          r &&
            null !== t &&
            ((r = 31 - eb(n)),
            null === (a = (e = l.hiddenUpdates)[r]) ? (e[r] = [t]) : a.push(t),
            (t.lane = 0x20000000 | n)),
          l)
        : null;
    }
    function an(e) {
      if (50 < oo) throw ((oo = 0), (oc = null), Error(o(185)));
      for (var t = e.return; null !== t;) t = (e = t).return;
      return 3 === e.tag ? e.stateNode : null;
    }
    var aa = {};
    function ar(e, t, n, a) {
      ((this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = a),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function al(e, t, n, a) {
      return new ar(e, t, n, a);
    }
    function as(e) {
      return !(!(e = e.prototype) || !e.isReactComponent);
    }
    function ai(e, t) {
      var n = e.alternate;
      return (
        null === n
          ? (((n = al(e.tag, t, e.key, e.mode)).elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = 0x3e00000 & e.flags),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        (n.refCleanup = e.refCleanup),
        n
      );
    }
    function ao(e, t) {
      e.flags &= 0x3e00002;
      var n = e.alternate;
      return (
        null === n
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type),
            (e.dependencies =
              null === (t = n.dependencies)
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      );
    }
    function ac(e, t, n, a, r, l) {
      var s = 0;
      if (((a = e), "function" == typeof e)) as(e) && (s = 1);
      else if ("string" == typeof e)
        s = !(function (e, t, n) {
          if (1 === n || null != t.itemProp) return !1;
          switch (e) {
            case "meta":
            case "title":
              return !0;
            case "style":
              if (
                "string" != typeof t.precedence ||
                "string" != typeof t.href ||
                "" === t.href
              )
                break;
              return !0;
            case "link":
              if (
                "string" != typeof t.rel ||
                "string" != typeof t.href ||
                "" === t.href ||
                t.onLoad ||
                t.onError
              )
                break;
              if ("stylesheet" === t.rel)
                return (
                  (e = t.disabled),
                  "string" == typeof t.precedence && null == e
                );
              return !0;
            case "script":
              if (
                t.async &&
                "function" != typeof t.async &&
                "symbol" != typeof t.async &&
                !t.onLoad &&
                !t.onError &&
                t.src &&
                "string" == typeof t.src
              )
                return !0;
          }
          return !1;
        })(e, n, U.current)
          ? "html" === e || "head" === e || "body" === e
            ? 27
            : 5
          : 26;
      else
        e: switch (e) {
          case $:
            return (((e = al(31, n, t, r)).elementType = $), (e.lanes = l), e);
          case v:
            return au(n.children, r, l, t);
          case y:
            ((s = 8), (r |= 24));
            break;
          case x:
            return (
              ((e = al(12, n, t, 2 | r)).elementType = x),
              (e.lanes = l),
              e
            );
          case N:
            return (((e = al(13, n, t, r)).elementType = N), (e.lanes = l), e);
          case S:
            return (((e = al(19, n, t, r)).elementType = S), (e.lanes = l), e);
          default:
            if ("object" == typeof e && null !== e)
              switch (e.$$typeof) {
                case j:
                  s = 10;
                  break e;
                case k:
                  s = 9;
                  break e;
                case w:
                  s = 11;
                  break e;
                case C:
                  s = 14;
                  break e;
                case E:
                  ((s = 16), (a = null));
                  break e;
              }
            ((s = 29),
              (n = Error(o(130, null === e ? "null" : typeof e, ""))),
              (a = null));
        }
      return (
        ((t = al(s, n, t, r)).elementType = e),
        (t.type = a),
        (t.lanes = l),
        t
      );
    }
    function au(e, t, n, a) {
      return (((e = al(7, e, a, t)).lanes = n), e);
    }
    function ad(e, t, n) {
      return (((e = al(6, e, null, t)).lanes = n), e);
    }
    function af(e) {
      var t = al(18, null, null, 0);
      return ((t.stateNode = e), t);
    }
    function am(e, t, n) {
      return (
        ((t = al(4, null !== e.children ? e.children : [], e.key, t)).lanes =
          n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var ap = new WeakMap();
    function ah(e, t) {
      if ("object" == typeof e && null !== e) {
        var n = ap.get(e);
        return void 0 !== n
          ? n
          : ((t = { value: e, source: t, stack: Z(t) }), ap.set(e, t), t);
      }
      return { value: e, source: t, stack: Z(t) };
    }
    var ag = [],
      ab = 0,
      av = null,
      ay = 0,
      ax = [],
      ak = 0,
      aj = null,
      aw = 1,
      aN = "";
    function aS(e, t) {
      ((ag[ab++] = ay), (ag[ab++] = av), (av = e), (ay = t));
    }
    function aC(e, t, n) {
      ((ax[ak++] = aw), (ax[ak++] = aN), (ax[ak++] = aj), (aj = e));
      var a = aw;
      e = aN;
      var r = 32 - eb(a) - 1;
      ((a &= ~(1 << r)), (n += 1));
      var l = 32 - eb(t) + r;
      if (30 < l) {
        var s = r - (r % 5);
        ((l = (a & ((1 << s) - 1)).toString(32)),
          (a >>= s),
          (r -= s),
          (aw = (1 << (32 - eb(t) + r)) | (n << r) | a),
          (aN = l + e));
      } else ((aw = (1 << l) | (n << r) | a), (aN = e));
    }
    function aE(e) {
      null !== e.return && (aS(e, 1), aC(e, 1, 0));
    }
    function a$(e) {
      for (; e === av;)
        ((av = ag[--ab]), (ag[ab] = null), (ay = ag[--ab]), (ag[ab] = null));
      for (; e === aj;)
        ((aj = ax[--ak]),
          (ax[ak] = null),
          (aN = ax[--ak]),
          (ax[ak] = null),
          (aw = ax[--ak]),
          (ax[ak] = null));
    }
    function az(e, t) {
      ((ax[ak++] = aw),
        (ax[ak++] = aN),
        (ax[ak++] = aj),
        (aw = t.id),
        (aN = t.overflow),
        (aj = e));
    }
    var aT = null,
      aM = null,
      a_ = !1,
      aP = null,
      aA = !1,
      aL = Error(o(519));
    function aq(e) {
      var t = Error(
        o(
          418,
          1 < arguments.length && void 0 !== arguments[1] && arguments[1]
            ? "text"
            : "HTML",
          "",
        ),
      );
      throw (aU(ah(t, e)), aL);
    }
    function aR(e) {
      var t = e.stateNode,
        n = e.type,
        a = e.memoizedProps;
      switch (((t[eR] = e), (t[eD] = a), n)) {
        case "dialog":
          (ct("cancel", t), ct("close", t));
          break;
        case "iframe":
        case "object":
        case "embed":
          ct("load", t);
          break;
        case "video":
        case "audio":
          for (n = 0; n < o7.length; n++) ct(o7[n], t);
          break;
        case "source":
          ct("error", t);
          break;
        case "img":
        case "image":
        case "link":
          (ct("error", t), ct("load", t));
          break;
        case "details":
          ct("toggle", t);
          break;
        case "input":
          (ct("invalid", t),
            tl(
              t,
              a.value,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
              !0,
            ));
          break;
        case "select":
          ct("invalid", t);
          break;
        case "textarea":
          (ct("invalid", t), tc(t, a.value, a.defaultValue, a.children));
      }
      (("string" != typeof (n = a.children) &&
        "number" != typeof n &&
        "bigint" != typeof n) ||
      t.textContent === "" + n ||
      !0 === a.suppressHydrationWarning ||
      cp(t.textContent, n)
        ? (null != a.popover && (ct("beforetoggle", t), ct("toggle", t)),
          null != a.onScroll && ct("scroll", t),
          null != a.onScrollEnd && ct("scrollend", t),
          null != a.onClick && (t.onclick = tv),
          (t = !0))
        : (t = !1),
        t || aq(e, !0));
    }
    function aD(e) {
      for (aT = e.return; aT;)
        switch (aT.tag) {
          case 5:
          case 31:
          case 13:
            aA = !1;
            return;
          case 27:
          case 3:
            aA = !0;
            return;
          default:
            aT = aT.return;
        }
    }
    function aF(e) {
      if (e !== aT) return !1;
      if (!a_) return (aD(e), (a_ = !0), !1);
      var t,
        n = e.tag;
      if (
        ((t = 3 !== n && 27 !== n) &&
          ((t = 5 === n) &&
            (t =
              "form" === (t = e.type) ||
              "button" === t ||
              cN(e.type, e.memoizedProps)),
          (t = !t)),
        t && aM && aq(e),
        aD(e),
        13 === n)
      ) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
          throw Error(o(317));
        aM = cO(e);
      } else if (31 === n) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
          throw Error(o(317));
        aM = cO(e);
      } else
        27 === n
          ? ((n = aM),
            cM(e.type) ? ((e = cF), (cF = null), (aM = e)) : (aM = n))
          : (aM = aT ? cD(e.stateNode.nextSibling) : null);
      return !0;
    }
    function aO() {
      ((aM = aT = null), (a_ = !1));
    }
    function aI() {
      var e = aP;
      return (
        null !== e &&
          (null === i5 ? (i5 = e) : i5.push.apply(i5, e), (aP = null)),
        e
      );
    }
    function aU(e) {
      null === aP ? (aP = [e]) : aP.push(e);
    }
    var aB = F(null),
      aQ = null,
      aH = null;
    function aW(e, t, n) {
      (I(aB, t._currentValue), (t._currentValue = n));
    }
    function aV(e) {
      ((e._currentValue = aB.current), O(aB));
    }
    function aK(e, t, n) {
      for (; null !== e;) {
        var a = e.alternate;
        if (
          ((e.childLanes & t) !== t
            ? ((e.childLanes |= t), null !== a && (a.childLanes |= t))
            : null !== a && (a.childLanes & t) !== t && (a.childLanes |= t),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function aG(e, t, n, a) {
      var r = e.child;
      for (null !== r && (r.return = e); null !== r;) {
        var l = r.dependencies;
        if (null !== l) {
          var s = r.child;
          l = l.firstContext;
          e: for (; null !== l;) {
            var i = l;
            l = r;
            for (var c = 0; c < t.length; c++)
              if (i.context === t[c]) {
                ((l.lanes |= n),
                  null !== (i = l.alternate) && (i.lanes |= n),
                  aK(l.return, n, e),
                  a || (s = null));
                break e;
              }
            l = i.next;
          }
        } else if (18 === r.tag) {
          if (null === (s = r.return)) throw Error(o(341));
          ((s.lanes |= n),
            null !== (l = s.alternate) && (l.lanes |= n),
            aK(s, n, e),
            (s = null));
        } else s = r.child;
        if (null !== s) s.return = r;
        else
          for (s = r; null !== s;) {
            if (s === e) {
              s = null;
              break;
            }
            if (null !== (r = s.sibling)) {
              ((r.return = s.return), (s = r));
              break;
            }
            s = s.return;
          }
        r = s;
      }
    }
    function aY(e, t, n, a) {
      e = null;
      for (var r = t, l = !1; null !== r;) {
        if (!l) {
          if (0 != (524288 & r.flags)) l = !0;
          else if (0 != (262144 & r.flags)) break;
        }
        if (10 === r.tag) {
          var s = r.alternate;
          if (null === s) throw Error(o(387));
          if (null !== (s = s.memoizedProps)) {
            var i = r.type;
            nT(r.pendingProps.value, s.value) ||
              (null !== e ? e.push(i) : (e = [i]));
          }
        } else if (r === H.current) {
          if (null === (s = r.alternate)) throw Error(o(387));
          s.memoizedState.memoizedState !== r.memoizedState.memoizedState &&
            (null !== e ? e.push(ul) : (e = [ul]));
        }
        r = r.return;
      }
      (null !== e && aG(t, e, n, a), (t.flags |= 262144));
    }
    function aX(e) {
      for (e = e.firstContext; null !== e;) {
        if (!nT(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function aJ(e) {
      ((aQ = e),
        (aH = null),
        null !== (e = e.dependencies) && (e.firstContext = null));
    }
    function aZ(e) {
      return a1(aQ, e);
    }
    function a0(e, t) {
      return (null === aQ && aJ(e), a1(e, t));
    }
    function a1(e, t) {
      var n = t._currentValue;
      if (((t = { context: t, memoizedValue: n, next: null }), null === aH)) {
        if (null === e) throw Error(o(308));
        ((aH = t),
          (e.dependencies = { lanes: 0, firstContext: t }),
          (e.flags |= 524288));
      } else aH = aH.next = t;
      return n;
    }
    var a2 =
        "u" > typeof AbortController
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (t, n) {
                    e.push(n);
                  },
                });
              this.abort = function () {
                ((t.aborted = !0),
                  e.forEach(function (e) {
                    return e();
                  }));
              };
            },
      a3 = l.unstable_scheduleCallback,
      a5 = l.unstable_NormalPriority,
      a4 = {
        $$typeof: j,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function a6() {
      return { controller: new a2(), data: new Map(), refCount: 0 };
    }
    function a8(e) {
      (e.refCount--,
        0 === e.refCount &&
          a3(a5, function () {
            e.controller.abort();
          }));
    }
    var a7 = null,
      a9 = 0,
      re = 0,
      rt = null;
    function rn() {
      if (0 == --a9 && null !== a7) {
        null !== rt && (rt.status = "fulfilled");
        var e = a7;
        ((a7 = null), (re = 0), (rt = null));
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    var ra = A.S;
    A.S = function (e, t) {
      ((i8 = el()),
        "object" == typeof t &&
          null !== t &&
          "function" == typeof t.then &&
          (function (e) {
            if (null === a7) {
              var t = (a7 = []);
              ((a9 = 0),
                (re = o3()),
                (rt = {
                  status: "pending",
                  value: void 0,
                  then: function (e) {
                    t.push(e);
                  },
                }));
            }
            (a9++, e.then(rn, rn));
          })(t),
        null !== ra && ra(e, t));
    };
    var rr = F(null);
    function rl() {
      var e = rr.current;
      return null !== e ? e : iU.pooledCache;
    }
    function rs(e, t) {
      null === t ? I(rr, rr.current) : I(rr, t.pool);
    }
    function ri() {
      var e = rl();
      return null === e ? null : { parent: a4._currentValue, pool: e };
    }
    var ro = Error(o(460)),
      rc = Error(o(474)),
      ru = Error(o(542)),
      rd = { then: function () {} };
    function rf(e) {
      return "fulfilled" === (e = e.status) || "rejected" === e;
    }
    function rm(e, t, n) {
      switch (
        (void 0 === (n = e[n])
          ? e.push(t)
          : n !== t && (t.then(tv, tv), (t = n)),
        t.status)
      ) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw (rb((e = t.reason)), e);
        default:
          if ("string" == typeof t.status) t.then(tv, tv);
          else {
            if (null !== (e = iU) && 100 < e.shellSuspendCounter)
              throw Error(o(482));
            (((e = t).status = "pending"),
              e.then(
                function (e) {
                  if ("pending" === t.status) {
                    var n = t;
                    ((n.status = "fulfilled"), (n.value = e));
                  }
                },
                function (e) {
                  if ("pending" === t.status) {
                    var n = t;
                    ((n.status = "rejected"), (n.reason = e));
                  }
                },
              ));
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw (rb((e = t.reason)), e);
          }
          throw ((rh = t), ro);
      }
    }
    function rp(e) {
      try {
        return (0, e._init)(e._payload);
      } catch (e) {
        if (null !== e && "object" == typeof e && "function" == typeof e.then)
          throw ((rh = e), ro);
        throw e;
      }
    }
    var rh = null;
    function rg() {
      if (null === rh) throw Error(o(459));
      var e = rh;
      return ((rh = null), e);
    }
    function rb(e) {
      if (e === ro || e === ru) throw Error(o(483));
    }
    var rv = null,
      ry = 0;
    function rx(e) {
      var t = ry;
      return ((ry += 1), null === rv && (rv = []), rm(rv, e, t));
    }
    function rk(e, t) {
      e.ref = void 0 !== (t = t.props.ref) ? t : null;
    }
    function rj(e, t) {
      if (t.$$typeof === h) throw Error(o(525));
      throw Error(
        o(
          31,
          "[object Object]" === (e = Object.prototype.toString.call(t))
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      );
    }
    function rw(e) {
      function t(t, n) {
        if (e) {
          var a = t.deletions;
          null === a ? ((t.deletions = [n]), (t.flags |= 16)) : a.push(n);
        }
      }
      function n(n, a) {
        if (!e) return null;
        for (; null !== a;) (t(n, a), (a = a.sibling));
        return null;
      }
      function a(e) {
        for (var t = new Map(); null !== e;)
          (null !== e.key ? t.set(e.key, e) : t.set(e.index, e),
            (e = e.sibling));
        return t;
      }
      function r(e, t) {
        return (((e = ai(e, t)).index = 0), (e.sibling = null), e);
      }
      function l(t, n, a) {
        return ((t.index = a), e)
          ? null !== (a = t.alternate)
            ? (a = a.index) < n
              ? ((t.flags |= 0x4000002), n)
              : a
            : ((t.flags |= 0x4000002), n)
          : ((t.flags |= 1048576), n);
      }
      function s(t) {
        return (e && null === t.alternate && (t.flags |= 0x4000002), t);
      }
      function i(e, t, n, a) {
        return (
          null === t || 6 !== t.tag
            ? ((t = ad(n, e.mode, a)).return = e)
            : ((t = r(t, n)).return = e),
          t
        );
      }
      function c(e, t, n, a) {
        var l = n.type;
        return l === v
          ? d(e, t, n.props.children, a, n.key)
          : (null !== t &&
            (t.elementType === l ||
              ("object" == typeof l &&
                null !== l &&
                l.$$typeof === E &&
                rp(l) === t.type))
              ? rk((t = r(t, n.props)), n)
              : rk((t = ac(n.type, n.key, n.props, null, e.mode, a)), n),
            (t.return = e),
            t);
      }
      function u(e, t, n, a) {
        return (
          null === t ||
          4 !== t.tag ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
            ? ((t = am(n, e.mode, a)).return = e)
            : ((t = r(t, n.children || [])).return = e),
          t
        );
      }
      function d(e, t, n, a, l) {
        return (
          null === t || 7 !== t.tag
            ? ((t = au(n, e.mode, a, l)).return = e)
            : ((t = r(t, n)).return = e),
          t
        );
      }
      function f(e, t, n) {
        if (
          ("string" == typeof t && "" !== t) ||
          "number" == typeof t ||
          "bigint" == typeof t
        )
          return (((t = ad("" + t, e.mode, n)).return = e), t);
        if ("object" == typeof t && null !== t) {
          switch (t.$$typeof) {
            case g:
              return (
                rk((n = ac(t.type, t.key, t.props, null, e.mode, n)), t),
                (n.return = e),
                n
              );
            case b:
              return (((t = am(t, e.mode, n)).return = e), t);
            case E:
              return f(e, (t = rp(t)), n);
          }
          if (P(t) || M(t))
            return (((t = au(t, e.mode, n, null)).return = e), t);
          if ("function" == typeof t.then) return f(e, rx(t), n);
          if (t.$$typeof === j) return f(e, a0(e, t), n);
          rj(e, t);
        }
        return null;
      }
      function m(e, t, n, a) {
        var r = null !== t ? t.key : null;
        if (
          ("string" == typeof n && "" !== n) ||
          "number" == typeof n ||
          "bigint" == typeof n
        )
          return null !== r ? null : i(e, t, "" + n, a);
        if ("object" == typeof n && null !== n) {
          switch (n.$$typeof) {
            case g:
              return n.key === r ? c(e, t, n, a) : null;
            case b:
              return n.key === r ? u(e, t, n, a) : null;
            case E:
              return m(e, t, (n = rp(n)), a);
          }
          if (P(n) || M(n)) return null !== r ? null : d(e, t, n, a, null);
          if ("function" == typeof n.then) return m(e, t, rx(n), a);
          if (n.$$typeof === j) return m(e, t, a0(e, n), a);
          rj(e, n);
        }
        return null;
      }
      function p(e, t, n, a, r) {
        if (
          ("string" == typeof a && "" !== a) ||
          "number" == typeof a ||
          "bigint" == typeof a
        )
          return i(t, (e = e.get(n) || null), "" + a, r);
        if ("object" == typeof a && null !== a) {
          switch (a.$$typeof) {
            case g:
              return c(
                t,
                (e = e.get(null === a.key ? n : a.key) || null),
                a,
                r,
              );
            case b:
              return u(
                t,
                (e = e.get(null === a.key ? n : a.key) || null),
                a,
                r,
              );
            case E:
              return p(e, t, n, (a = rp(a)), r);
          }
          if (P(a) || M(a)) return d(t, (e = e.get(n) || null), a, r, null);
          if ("function" == typeof a.then) return p(e, t, n, rx(a), r);
          if (a.$$typeof === j) return p(e, t, n, a0(t, a), r);
          rj(t, a);
        }
        return null;
      }
      return function (i, c, u, d) {
        try {
          ry = 0;
          var h = (function i(c, u, d, h) {
            if (
              ("object" == typeof d &&
                null !== d &&
                d.type === v &&
                null === d.key &&
                (d = d.props.children),
              "object" == typeof d && null !== d)
            ) {
              switch (d.$$typeof) {
                case g:
                  e: {
                    for (var y = d.key; null !== u;) {
                      if (u.key === y) {
                        if ((y = d.type) === v) {
                          if (7 === u.tag) {
                            (n(c, u.sibling),
                              ((h = r(u, d.props.children)).return = c),
                              (c = h));
                            break e;
                          }
                        } else if (
                          u.elementType === y ||
                          ("object" == typeof y &&
                            null !== y &&
                            y.$$typeof === E &&
                            rp(y) === u.type)
                        ) {
                          (n(c, u.sibling),
                            rk((h = r(u, d.props)), d),
                            (h.return = c),
                            (c = h));
                          break e;
                        }
                        n(c, u);
                        break;
                      }
                      (t(c, u), (u = u.sibling));
                    }
                    (d.type === v
                      ? ((h = au(d.props.children, c.mode, h, d.key)).return =
                          c)
                      : (rk(
                          (h = ac(d.type, d.key, d.props, null, c.mode, h)),
                          d,
                        ),
                        (h.return = c)),
                      (c = h));
                  }
                  return s(c);
                case b:
                  e: {
                    for (y = d.key; null !== u;) {
                      if (u.key === y)
                        if (
                          4 === u.tag &&
                          u.stateNode.containerInfo === d.containerInfo &&
                          u.stateNode.implementation === d.implementation
                        ) {
                          (n(c, u.sibling),
                            ((h = r(u, d.children || [])).return = c),
                            (c = h));
                          break e;
                        } else {
                          n(c, u);
                          break;
                        }
                      (t(c, u), (u = u.sibling));
                    }
                    (((h = am(d, c.mode, h)).return = c), (c = h));
                  }
                  return s(c);
                case E:
                  return i(c, u, (d = rp(d)), h);
              }
              if (P(d))
                return (function (r, s, i, o) {
                  for (
                    var c = null, u = null, d = s, h = (s = 0), g = null;
                    null !== d && h < i.length;
                    h++
                  ) {
                    d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
                    var b = m(r, d, i[h], o);
                    if (null === b) {
                      null === d && (d = g);
                      break;
                    }
                    (e && d && null === b.alternate && t(r, d),
                      (s = l(b, s, h)),
                      null === u ? (c = b) : (u.sibling = b),
                      (u = b),
                      (d = g));
                  }
                  if (h === i.length) return (n(r, d), a_ && aS(r, h), c);
                  if (null === d) {
                    for (; h < i.length; h++)
                      null !== (d = f(r, i[h], o)) &&
                        ((s = l(d, s, h)),
                        null === u ? (c = d) : (u.sibling = d),
                        (u = d));
                    return (a_ && aS(r, h), c);
                  }
                  for (d = a(d); h < i.length; h++)
                    null !== (g = p(d, r, h, i[h], o)) &&
                      (e &&
                        null !== g.alternate &&
                        d.delete(null === g.key ? h : g.key),
                      (s = l(g, s, h)),
                      null === u ? (c = g) : (u.sibling = g),
                      (u = g));
                  return (
                    e &&
                      d.forEach(function (e) {
                        return t(r, e);
                      }),
                    a_ && aS(r, h),
                    c
                  );
                })(c, u, d, h);
              if (M(d)) {
                if ("function" != typeof (y = M(d))) throw Error(o(150));
                return (function (r, s, i, c) {
                  if (null == i) throw Error(o(151));
                  for (
                    var u = null,
                      d = null,
                      h = s,
                      g = (s = 0),
                      b = null,
                      v = i.next();
                    null !== h && !v.done;
                    g++, v = i.next()
                  ) {
                    h.index > g ? ((b = h), (h = null)) : (b = h.sibling);
                    var y = m(r, h, v.value, c);
                    if (null === y) {
                      null === h && (h = b);
                      break;
                    }
                    (e && h && null === y.alternate && t(r, h),
                      (s = l(y, s, g)),
                      null === d ? (u = y) : (d.sibling = y),
                      (d = y),
                      (h = b));
                  }
                  if (v.done) return (n(r, h), a_ && aS(r, g), u);
                  if (null === h) {
                    for (; !v.done; g++, v = i.next())
                      null !== (v = f(r, v.value, c)) &&
                        ((s = l(v, s, g)),
                        null === d ? (u = v) : (d.sibling = v),
                        (d = v));
                    return (a_ && aS(r, g), u);
                  }
                  for (h = a(h); !v.done; g++, v = i.next())
                    null !== (v = p(h, r, g, v.value, c)) &&
                      (e &&
                        null !== v.alternate &&
                        h.delete(null === v.key ? g : v.key),
                      (s = l(v, s, g)),
                      null === d ? (u = v) : (d.sibling = v),
                      (d = v));
                  return (
                    e &&
                      h.forEach(function (e) {
                        return t(r, e);
                      }),
                    a_ && aS(r, g),
                    u
                  );
                })(c, u, (d = y.call(d)), h);
              }
              if ("function" == typeof d.then) return i(c, u, rx(d), h);
              if (d.$$typeof === j) return i(c, u, a0(c, d), h);
              rj(c, d);
            }
            return ("string" == typeof d && "" !== d) ||
              "number" == typeof d ||
              "bigint" == typeof d
              ? ((d = "" + d),
                null !== u && 6 === u.tag
                  ? (n(c, u.sibling), ((h = r(u, d)).return = c))
                  : (n(c, u), ((h = ad(d, c.mode, h)).return = c)),
                s((c = h)))
              : n(c, u);
          })(i, c, u, d);
          return ((rv = null), h);
        } catch (e) {
          if (e === ro || e === ru) throw e;
          var y = al(29, e, null, i.mode);
          return ((y.lanes = d), (y.return = i), y);
        } finally {
        }
      };
    }
    var rN = rw(!0),
      rS = rw(!1),
      rC = !1;
    function rE(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function r$(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          }));
    }
    function rz(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function rT(e, t, n) {
      var a = e.updateQueue;
      if (null === a) return null;
      if (((a = a.shared), 0 != (2 & iI))) {
        var r = a.pending;
        return (
          null === r ? (t.next = t) : ((t.next = r.next), (r.next = t)),
          (a.pending = t),
          (t = an(e)),
          at(e, null, n),
          t
        );
      }
      return (n7(e, a, t, n), an(e));
    }
    function rM(e, t, n) {
      if (
        null !== (t = t.updateQueue) &&
        ((t = t.shared), 0 != (4194048 & n))
      ) {
        var a = t.lanes;
        ((a &= e.pendingLanes), (n |= a), (t.lanes = n), eT(e, n));
      }
    }
    function r_(e, t) {
      var n = e.updateQueue,
        a = e.alternate;
      if (null !== a && n === (a = a.updateQueue)) {
        var r = null,
          l = null;
        if (null !== (n = n.firstBaseUpdate)) {
          do {
            var s = {
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: null,
              next: null,
            };
            (null === l ? (r = l = s) : (l = l.next = s), (n = n.next));
          } while (null !== n);
          null === l ? (r = l = t) : (l = l.next = t);
        } else r = l = t;
        ((n = {
          baseState: a.baseState,
          firstBaseUpdate: r,
          lastBaseUpdate: l,
          shared: a.shared,
          callbacks: a.callbacks,
        }),
          (e.updateQueue = n));
        return;
      }
      (null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t));
    }
    var rP = !1;
    function rA() {
      if (rP) {
        var e = rt;
        if (null !== e) throw e;
      }
    }
    function rL(e, t, n, a) {
      rP = !1;
      var r = e.updateQueue;
      rC = !1;
      var l = r.firstBaseUpdate,
        s = r.lastBaseUpdate,
        i = r.shared.pending;
      if (null !== i) {
        r.shared.pending = null;
        var o = i,
          c = o.next;
        ((o.next = null), null === s ? (l = c) : (s.next = c), (s = o));
        var u = e.alternate;
        null !== u &&
          (i = (u = u.updateQueue).lastBaseUpdate) !== s &&
          (null === i ? (u.firstBaseUpdate = c) : (i.next = c),
          (u.lastBaseUpdate = o));
      }
      if (null !== l) {
        var d = r.baseState;
        for (s = 0, u = c = o = null, i = l; ;) {
          var f = -0x20000001 & i.lane,
            m = f !== i.lane;
          if (m ? (iQ & f) === f : (a & f) === f) {
            (0 !== f && f === re && (rP = !0),
              null !== u &&
                (u = u.next =
                  {
                    lane: 0,
                    tag: i.tag,
                    payload: i.payload,
                    callback: null,
                    next: null,
                  }));
            e: {
              var h = e,
                g = i;
              switch (((f = t), g.tag)) {
                case 1:
                  if ("function" == typeof (h = g.payload)) {
                    d = h.call(n, d, f);
                    break e;
                  }
                  d = h;
                  break e;
                case 3:
                  h.flags = (-65537 & h.flags) | 128;
                case 0:
                  if (
                    null ==
                    (f =
                      "function" == typeof (h = g.payload)
                        ? h.call(n, d, f)
                        : h)
                  )
                    break e;
                  d = p({}, d, f);
                  break e;
                case 2:
                  rC = !0;
              }
            }
            null !== (f = i.callback) &&
              ((e.flags |= 64),
              m && (e.flags |= 8192),
              null === (m = r.callbacks) ? (r.callbacks = [f]) : m.push(f));
          } else
            ((m = {
              lane: f,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            }),
              null === u ? ((c = u = m), (o = d)) : (u = u.next = m),
              (s |= f));
          if (null === (i = i.next))
            if (null === (i = r.shared.pending)) break;
            else
              ((i = (m = i).next),
                (m.next = null),
                (r.lastBaseUpdate = m),
                (r.shared.pending = null));
        }
        (null === u && (o = d),
          (r.baseState = o),
          (r.firstBaseUpdate = c),
          (r.lastBaseUpdate = u),
          null === l && (r.shared.lanes = 0),
          (iJ |= s),
          (e.lanes = s),
          (e.memoizedState = d));
      }
    }
    function rq(e, t) {
      if ("function" != typeof e) throw Error(o(191, e));
      e.call(t);
    }
    function rR(e, t) {
      var n = e.callbacks;
      if (null !== n)
        for (e.callbacks = null, e = 0; e < n.length; e++) rq(n[e], t);
    }
    var rD = F(null),
      rF = F(0);
    function rO(e, t) {
      (I(rF, (e = iY)), I(rD, t), (iY = e | t.baseLanes));
    }
    function rI() {
      (I(rF, iY), I(rD, rD.current));
    }
    function rU() {
      ((iY = rF.current), O(rD), O(rF));
    }
    var rB = F(null),
      rQ = null;
    function rH(e) {
      var t = e.alternate;
      (I(rY, 1 & rY.current),
        I(rB, e),
        null === rQ &&
          (null === t || null !== rD.current
            ? (rQ = e)
            : null !== t.memoizedState && (rQ = e)));
    }
    function rW(e) {
      (I(rY, rY.current), I(rB, e), null === rQ && (rQ = e));
    }
    function rV(e) {
      22 === e.tag
        ? (I(rY, rY.current), I(rB, e), null === rQ && (rQ = e))
        : rK();
    }
    function rK() {
      (I(rY, rY.current), I(rB, rB.current));
    }
    function rG(e) {
      (O(rB), rQ === e && (rQ = null), O(rY));
    }
    var rY = F(0);
    function rX(e) {
      for (var t = e; null !== t;) {
        if (13 === t.tag) {
          var n = t.memoizedState;
          if (null !== n && (null === (n = n.dehydrated) || cq(n) || cR(n)))
            return t;
        } else if (
          19 === t.tag &&
          ("forwards" === t.memoizedProps.revealOrder ||
            "backwards" === t.memoizedProps.revealOrder ||
            "unstable_legacy-backwards" === t.memoizedProps.revealOrder ||
            "together" === t.memoizedProps.revealOrder)
        ) {
          if (0 != (128 & t.flags)) return t;
        } else if (null !== t.child) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break;
        for (; null === t.sibling;) {
          if (null === t.return || t.return === e) return null;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
      return null;
    }
    var rJ = 0,
      rZ = null,
      r0 = null,
      r1 = null,
      r2 = !1,
      r3 = !1,
      r5 = !1,
      r4 = 0,
      r6 = 0,
      r8 = null,
      r7 = 0;
    function r9() {
      throw Error(o(321));
    }
    function le(e, t) {
      if (null === t) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!nT(e[n], t[n])) return !1;
      return !0;
    }
    function lt(e, t, n, a, r, l) {
      return (
        (rJ = l),
        (rZ = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (A.H = null === e || null === e.memoizedState ? si : so),
        (r5 = !1),
        (l = n(a, r)),
        (r5 = !1),
        r3 && (l = la(t, n, a, r)),
        ln(e),
        l
      );
    }
    function ln(e) {
      A.H = ss;
      var t = null !== r0 && null !== r0.next;
      if (
        ((rJ = 0), (r1 = r0 = rZ = null), (r2 = !1), (r6 = 0), (r8 = null), t)
      )
        throw Error(o(300));
      null === e || sN || (null !== (e = e.dependencies) && aX(e) && (sN = !0));
    }
    function la(e, t, n, a) {
      rZ = e;
      var r = 0;
      do {
        if ((r3 && (r8 = null), (r6 = 0), (r3 = !1), 25 <= r))
          throw Error(o(301));
        if (((r += 1), (r1 = r0 = null), null != e.updateQueue)) {
          var l = e.updateQueue;
          ((l.lastEffect = null),
            (l.events = null),
            (l.stores = null),
            null != l.memoCache && (l.memoCache.index = 0));
        }
        ((A.H = sc), (l = t(n, a)));
      } while (r3);
      return l;
    }
    function lr() {
      var e = A.H,
        t = e.useState()[0];
      return (
        (t = "function" == typeof t.then ? ld(t) : t),
        (e = e.useState()[0]),
        (null !== r0 ? r0.memoizedState : null) !== e && (rZ.flags |= 1024),
        t
      );
    }
    function ll() {
      var e = 0 !== r4;
      return ((r4 = 0), e);
    }
    function ls(e, t, n) {
      ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
    }
    function li(e) {
      if (r2) {
        for (e = e.memoizedState; null !== e;) {
          var t = e.queue;
          (null !== t && (t.pending = null), (e = e.next));
        }
        r2 = !1;
      }
      ((rJ = 0), (r1 = r0 = rZ = null), (r3 = !1), (r6 = r4 = 0), (r8 = null));
    }
    function lo() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return (
        null === r1 ? (rZ.memoizedState = r1 = e) : (r1 = r1.next = e),
        r1
      );
    }
    function lc() {
      if (null === r0) {
        var e = rZ.alternate;
        e = null !== e ? e.memoizedState : null;
      } else e = r0.next;
      var t = null === r1 ? rZ.memoizedState : r1.next;
      if (null !== t) ((r1 = t), (r0 = e));
      else {
        if (null === e) {
          if (null === rZ.alternate) throw Error(o(467));
          throw Error(o(310));
        }
        ((e = {
          memoizedState: (r0 = e).memoizedState,
          baseState: r0.baseState,
          baseQueue: r0.baseQueue,
          queue: r0.queue,
          next: null,
        }),
          null === r1 ? (rZ.memoizedState = r1 = e) : (r1 = r1.next = e));
      }
      return r1;
    }
    function lu() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function ld(e) {
      var t = r6;
      return (
        (r6 += 1),
        null === r8 && (r8 = []),
        (e = rm(r8, e, t)),
        (t = rZ),
        null === (null === r1 ? t.memoizedState : r1.next) &&
          (A.H =
            null === (t = t.alternate) || null === t.memoizedState ? si : so),
        e
      );
    }
    function lf(e) {
      if (null !== e && "object" == typeof e) {
        if ("function" == typeof e.then) return ld(e);
        if (e.$$typeof === j) return aZ(e);
      }
      throw Error(o(438, String(e)));
    }
    function lm(e) {
      var t = null,
        n = rZ.updateQueue;
      if ((null !== n && (t = n.memoCache), null == t)) {
        var a = rZ.alternate;
        null !== a &&
          null !== (a = a.updateQueue) &&
          null != (a = a.memoCache) &&
          (t = {
            data: a.data.map(function (e) {
              return e.slice();
            }),
            index: 0,
          });
      }
      if (
        (null == t && (t = { data: [], index: 0 }),
        null === n && ((n = lu()), (rZ.updateQueue = n)),
        (n.memoCache = t),
        void 0 === (n = t.data[t.index]))
      )
        for (n = t.data[t.index] = Array(e), a = 0; a < e; a++) n[a] = z;
      return (t.index++, n);
    }
    function lp(e, t) {
      return "function" == typeof t ? t(e) : t;
    }
    function lh(e) {
      return lg(lc(), r0, e);
    }
    function lg(e, t, n) {
      var a = e.queue;
      if (null === a) throw Error(o(311));
      a.lastRenderedReducer = n;
      var r = e.baseQueue,
        l = a.pending;
      if (null !== l) {
        if (null !== r) {
          var s = r.next;
          ((r.next = l.next), (l.next = s));
        }
        ((t.baseQueue = r = l), (a.pending = null));
      }
      if (((l = e.baseState), null === r)) e.memoizedState = l;
      else {
        t = r.next;
        var i = (s = null),
          c = null,
          u = t,
          d = !1;
        do {
          var f = -0x20000001 & u.lane;
          if (f !== u.lane ? (iQ & f) === f : (rJ & f) === f) {
            var m = u.revertLane;
            if (0 === m)
              (null !== c &&
                (c = c.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                f === re && (d = !0));
            else if ((rJ & m) === m) {
              ((u = u.next), m === re && (d = !0));
              continue;
            } else
              ((f = {
                lane: 0,
                revertLane: u.revertLane,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
                null === c ? ((i = c = f), (s = l)) : (c = c.next = f),
                (rZ.lanes |= m),
                (iJ |= m));
            ((f = u.action),
              r5 && n(l, f),
              (l = u.hasEagerState ? u.eagerState : n(l, f)));
          } else
            ((m = {
              lane: f,
              revertLane: u.revertLane,
              gesture: u.gesture,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
              null === c ? ((i = c = m), (s = l)) : (c = c.next = m),
              (rZ.lanes |= f),
              (iJ |= f));
          u = u.next;
        } while (null !== u && u !== t);
        if (
          (null === c ? (s = l) : (c.next = i),
          !nT(l, e.memoizedState) && ((sN = !0), d && null !== (n = rt)))
        )
          throw n;
        ((e.memoizedState = l),
          (e.baseState = s),
          (e.baseQueue = c),
          (a.lastRenderedState = l));
      }
      return (null === r && (a.lanes = 0), [e.memoizedState, a.dispatch]);
    }
    function lb(e) {
      var t = lc(),
        n = t.queue;
      if (null === n) throw Error(o(311));
      n.lastRenderedReducer = e;
      var a = n.dispatch,
        r = n.pending,
        l = t.memoizedState;
      if (null !== r) {
        n.pending = null;
        var s = (r = r.next);
        do ((l = e(l, s.action)), (s = s.next));
        while (s !== r);
        (nT(l, t.memoizedState) || (sN = !0),
          (t.memoizedState = l),
          null === t.baseQueue && (t.baseState = l),
          (n.lastRenderedState = l));
      }
      return [l, a];
    }
    function lv(e, t, n) {
      var a = rZ,
        r = lc(),
        l = a_;
      if (l) {
        if (void 0 === n) throw Error(o(407));
        n = n();
      } else n = t();
      var s = !nT((r0 || r).memoizedState, n);
      if (
        (s && ((r.memoizedState = n), (sN = !0)),
        (r = r.queue),
        lB(lk.bind(null, a, r, e), [e]),
        r.getSnapshot !== t || s || (null !== r1 && 1 & r1.memoizedState.tag))
      ) {
        if (
          ((a.flags |= 2048),
          lD(9, { destroy: void 0 }, lx.bind(null, a, r, n, t), null),
          null === iU)
        )
          throw Error(o(349));
        l || 0 != (127 & rJ) || ly(a, t, n);
      }
      return n;
    }
    function ly(e, t, n) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        null === (t = rZ.updateQueue)
          ? ((t = lu()), (rZ.updateQueue = t), (t.stores = [e]))
          : null === (n = t.stores)
            ? (t.stores = [e])
            : n.push(e));
    }
    function lx(e, t, n, a) {
      ((t.value = n), (t.getSnapshot = a), lj(t) && lw(e));
    }
    function lk(e, t, n) {
      return n(function () {
        lj(t) && lw(e);
      });
    }
    function lj(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !nT(e, n);
      } catch (e) {
        return !0;
      }
    }
    function lw(e) {
      var t = ae(e, 2);
      null !== t && of(t, e, 2);
    }
    function lN(e) {
      var t = lo();
      if ("function" == typeof e) {
        var n = e;
        if (((e = n()), r5)) {
          eg(!0);
          try {
            n();
          } finally {
            eg(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: lp,
          lastRenderedState: e,
        }),
        t
      );
    }
    function lS(e, t, n, a) {
      return ((e.baseState = n), lg(e, r0, "function" == typeof a ? a : lp));
    }
    function lC(e, t, n, a, r) {
      if (sa(e)) throw Error(o(485));
      if (null !== (e = t.action)) {
        var l = {
          payload: r,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function (e) {
            l.listeners.push(e);
          },
        };
        (null !== A.T ? n(!0) : (l.isTransition = !1),
          a(l),
          null === (n = t.pending)
            ? ((l.next = t.pending = l), lE(t, l))
            : ((l.next = n.next), (t.pending = n.next = l)));
      }
    }
    function lE(e, t) {
      var n = t.action,
        a = t.payload,
        r = e.state;
      if (t.isTransition) {
        var l = A.T,
          s = {};
        A.T = s;
        try {
          var i = n(r, a),
            o = A.S;
          (null !== o && o(s, i), l$(e, t, i));
        } catch (n) {
          lT(e, t, n);
        } finally {
          (null !== l && null !== s.types && (l.types = s.types), (A.T = l));
        }
      } else
        try {
          ((l = n(r, a)), l$(e, t, l));
        } catch (n) {
          lT(e, t, n);
        }
    }
    function l$(e, t, n) {
      null !== n && "object" == typeof n && "function" == typeof n.then
        ? n.then(
            function (n) {
              lz(e, t, n);
            },
            function (n) {
              return lT(e, t, n);
            },
          )
        : lz(e, t, n);
    }
    function lz(e, t, n) {
      ((t.status = "fulfilled"),
        (t.value = n),
        lM(t),
        (e.state = n),
        null !== (t = e.pending) &&
          ((n = t.next) === t
            ? (e.pending = null)
            : ((n = n.next), (t.next = n), lE(e, n))));
    }
    function lT(e, t, n) {
      var a = e.pending;
      if (((e.pending = null), null !== a)) {
        a = a.next;
        do ((t.status = "rejected"), (t.reason = n), lM(t), (t = t.next));
        while (t !== a);
      }
      e.action = null;
    }
    function lM(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function l_(e, t) {
      return t;
    }
    function lP(e, t) {
      if (a_) {
        var n = iU.formState;
        if (null !== n) {
          e: {
            var a = rZ;
            if (a_) {
              if (aM) {
                t: {
                  for (var r = aM, l = aA; 8 !== r.nodeType;)
                    if (!l || null === (r = cD(r.nextSibling))) {
                      r = null;
                      break t;
                    }
                  r = "F!" === (l = r.data) || "F" === l ? r : null;
                }
                if (r) {
                  ((aM = cD(r.nextSibling)), (a = "F!" === r.data));
                  break e;
                }
              }
              aq(a);
            }
            a = !1;
          }
          a && (t = n[0]);
        }
      }
      return (
        ((n = lo()).memoizedState = n.baseState = t),
        (a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: l_,
          lastRenderedState: t,
        }),
        (n.queue = a),
        (n = se.bind(null, rZ, a)),
        (a.dispatch = n),
        (a = lN(!1)),
        (l = sn.bind(null, rZ, !1, a.queue)),
        (a = lo()),
        (r = { state: t, dispatch: null, action: e, pending: null }),
        (a.queue = r),
        (n = lC.bind(null, rZ, r, l, n)),
        (r.dispatch = n),
        (a.memoizedState = e),
        [t, n, !1]
      );
    }
    function lA(e) {
      return lL(lc(), r0, e);
    }
    function lL(e, t, n) {
      if (
        ((t = lg(e, t, l_)[0]),
        (e = lh(lp)[0]),
        "object" == typeof t && null !== t && "function" == typeof t.then)
      )
        try {
          var a = ld(t);
        } catch (e) {
          if (e === ro) throw ru;
          throw e;
        }
      else a = t;
      var r = (t = lc()).queue,
        l = r.dispatch;
      return (
        n !== t.memoizedState &&
          ((rZ.flags |= 2048),
          lD(9, { destroy: void 0 }, lq.bind(null, r, n), null)),
        [a, l, e]
      );
    }
    function lq(e, t) {
      e.action = t;
    }
    function lR(e) {
      var t = lc(),
        n = r0;
      if (null !== n) return lL(t, n, e);
      (lc(), (t = t.memoizedState));
      var a = (n = lc()).queue.dispatch;
      return ((n.memoizedState = e), [t, a, !1]);
    }
    function lD(e, t, n, a) {
      return (
        (e = { tag: e, create: n, deps: a, inst: t, next: null }),
        null === (t = rZ.updateQueue) && ((t = lu()), (rZ.updateQueue = t)),
        null === (n = t.lastEffect)
          ? (t.lastEffect = e.next = e)
          : ((a = n.next), (n.next = e), (e.next = a), (t.lastEffect = e)),
        e
      );
    }
    function lF() {
      return lc().memoizedState;
    }
    function lO(e, t, n, a) {
      var r = lo();
      ((rZ.flags |= e),
        (r.memoizedState = lD(
          1 | t,
          { destroy: void 0 },
          n,
          void 0 === a ? null : a,
        )));
    }
    function lI(e, t, n, a) {
      var r = lc();
      a = void 0 === a ? null : a;
      var l = r.memoizedState.inst;
      null !== r0 && null !== a && le(a, r0.memoizedState.deps)
        ? (r.memoizedState = lD(t, l, n, a))
        : ((rZ.flags |= e), (r.memoizedState = lD(1 | t, l, n, a)));
    }
    function lU(e, t) {
      lO(8390656, 8, e, t);
    }
    function lB(e, t) {
      lI(2048, 8, e, t);
    }
    function lQ(e) {
      var t = lc().memoizedState,
        n = { ref: t, nextImpl: e };
      rZ.flags |= 4;
      var a = rZ.updateQueue;
      if (null === a) ((a = lu()), (rZ.updateQueue = a), (a.events = [n]));
      else {
        var r = a.events;
        null === r ? (a.events = [n]) : r.push(n);
      }
      return function () {
        if (0 != (2 & iI)) throw Error(o(440));
        return t.impl.apply(void 0, arguments);
      };
    }
    function lH(e, t) {
      return lI(4, 2, e, t);
    }
    function lW(e, t) {
      return lI(4, 4, e, t);
    }
    function lV(e, t) {
      if ("function" == typeof t) {
        var n = t((e = e()));
        return function () {
          "function" == typeof n ? n() : t(null);
        };
      }
      if (null != t)
        return (
          (t.current = e = e()),
          function () {
            t.current = null;
          }
        );
    }
    function lK(e, t, n) {
      ((n = null != n ? n.concat([e]) : null),
        lI(4, 4, lV.bind(null, t, e), n));
    }
    function lG() {}
    function lY(e, t) {
      var n = lc();
      t = void 0 === t ? null : t;
      var a = n.memoizedState;
      return null !== t && le(t, a[1]) ? a[0] : ((n.memoizedState = [e, t]), e);
    }
    function lX(e, t) {
      var n = lc();
      t = void 0 === t ? null : t;
      var a = n.memoizedState;
      if (null !== t && le(t, a[1])) return a[0];
      if (((a = e()), r5)) {
        eg(!0);
        try {
          e();
        } finally {
          eg(!1);
        }
      }
      return ((n.memoizedState = [a, t]), a);
    }
    function lJ(e, t, n) {
      return void 0 === n || (0 != (0x40000000 & rJ) && 0 == (261930 & iQ))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = od()), (rZ.lanes |= e), (iJ |= e), n);
    }
    function lZ(e, t, n, a) {
      return nT(n, t)
        ? n
        : null !== rD.current
          ? (nT((e = lJ(e, n, a)), t) || (sN = !0), e)
          : 0 == (42 & rJ) || (0 != (0x40000000 & rJ) && 0 == (261930 & iQ))
            ? ((sN = !0), (e.memoizedState = n))
            : ((e = od()), (rZ.lanes |= e), (iJ |= e), t);
    }
    function l0(e, t, n, a, r) {
      var l = L.p;
      L.p = 0 !== l && 8 > l ? l : 8;
      var s = A.T,
        i = {};
      ((A.T = i), sn(e, !1, t, n));
      try {
        var o = r(),
          c = A.S;
        if (
          (null !== c && c(i, o),
          null !== o && "object" == typeof o && "function" == typeof o.then)
        ) {
          var u,
            d,
            f =
              ((u = []),
              (d = {
                status: "pending",
                value: null,
                reason: null,
                then: function (e) {
                  u.push(e);
                },
              }),
              o.then(
                function () {
                  ((d.status = "fulfilled"), (d.value = a));
                  for (var e = 0; e < u.length; e++) (0, u[e])(a);
                },
                function (e) {
                  for (
                    d.status = "rejected", d.reason = e, e = 0;
                    e < u.length;
                    e++
                  )
                    (0, u[e])(void 0);
                },
              ),
              d);
          st(e, t, f, ou());
        } else st(e, t, a, ou());
      } catch (n) {
        st(e, t, { then: function () {}, status: "rejected", reason: n }, ou());
      } finally {
        ((L.p = l),
          null !== s && null !== i.types && (s.types = i.types),
          (A.T = s));
      }
    }
    function l1() {}
    function l2(e, t, n, a) {
      if (5 !== e.tag) throw Error(o(476));
      var r = l3(e).queue;
      l0(
        e,
        r,
        t,
        q,
        null === n
          ? l1
          : function () {
              return (l5(e), n(a));
            },
      );
    }
    function l3(e) {
      var t = e.memoizedState;
      if (null !== t) return t;
      var n = {};
      return (
        ((t = {
          memoizedState: q,
          baseState: q,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: lp,
            lastRenderedState: q,
          },
          next: null,
        }).next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: lp,
            lastRenderedState: n,
          },
          next: null,
        }),
        (e.memoizedState = t),
        null !== (e = e.alternate) && (e.memoizedState = t),
        t
      );
    }
    function l5(e) {
      var t = l3(e);
      (null === t.next && (t = e.alternate.memoizedState),
        st(e, t.next.queue, {}, ou()));
    }
    function l4() {
      return aZ(ul);
    }
    function l6() {
      return lc().memoizedState;
    }
    function l8() {
      return lc().memoizedState;
    }
    function l7(e) {
      for (var t = e.return; null !== t;) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = ou(),
              a = rT(t, (e = rz(n)), n);
            (null !== a && (of(a, t, n), rM(a, t, n)),
              (t = { cache: a6() }),
              (e.payload = t));
            return;
        }
        t = t.return;
      }
    }
    function l9(e, t, n) {
      var a = ou();
      ((n = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        sa(e)
          ? sr(t, n)
          : null !== (n = n9(e, t, n, a)) && (of(n, e, a), sl(n, t, a)));
    }
    function se(e, t, n) {
      st(e, t, n, ou());
    }
    function st(e, t, n, a) {
      var r = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (sa(e)) sr(t, r);
      else {
        var l = e.alternate;
        if (
          0 === e.lanes &&
          (null === l || 0 === l.lanes) &&
          null !== (l = t.lastRenderedReducer)
        )
          try {
            var s = t.lastRenderedState,
              i = l(s, n);
            if (((r.hasEagerState = !0), (r.eagerState = i), nT(i, s)))
              return (n7(e, t, r, 0), null === iU && n8(), !1);
          } catch (e) {
          } finally {
          }
        if (null !== (n = n9(e, t, r, a)))
          return (of(n, e, a), sl(n, t, a), !0);
      }
      return !1;
    }
    function sn(e, t, n, a) {
      if (
        ((a = {
          lane: 2,
          revertLane: o3(),
          gesture: null,
          action: a,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        sa(e))
      ) {
        if (t) throw Error(o(479));
      } else null !== (t = n9(e, n, a, 2)) && of(t, e, 2);
    }
    function sa(e) {
      var t = e.alternate;
      return e === rZ || (null !== t && t === rZ);
    }
    function sr(e, t) {
      r3 = r2 = !0;
      var n = e.pending;
      (null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t));
    }
    function sl(e, t, n) {
      if (0 != (4194048 & n)) {
        var a = t.lanes;
        ((a &= e.pendingLanes), (t.lanes = n |= a), eT(e, n));
      }
    }
    var ss = {
      readContext: aZ,
      use: lf,
      useCallback: r9,
      useContext: r9,
      useEffect: r9,
      useImperativeHandle: r9,
      useLayoutEffect: r9,
      useInsertionEffect: r9,
      useMemo: r9,
      useReducer: r9,
      useRef: r9,
      useState: r9,
      useDebugValue: r9,
      useDeferredValue: r9,
      useTransition: r9,
      useSyncExternalStore: r9,
      useId: r9,
      useHostTransitionStatus: r9,
      useFormState: r9,
      useActionState: r9,
      useOptimistic: r9,
      useMemoCache: r9,
      useCacheRefresh: r9,
    };
    ss.useEffectEvent = r9;
    var si = {
        readContext: aZ,
        use: lf,
        useCallback: function (e, t) {
          return ((lo().memoizedState = [e, void 0 === t ? null : t]), e);
        },
        useContext: aZ,
        useEffect: lU,
        useImperativeHandle: function (e, t, n) {
          ((n = null != n ? n.concat([e]) : null),
            lO(4194308, 4, lV.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
          return lO(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          lO(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = lo();
          t = void 0 === t ? null : t;
          var a = e();
          if (r5) {
            eg(!0);
            try {
              e();
            } finally {
              eg(!1);
            }
          }
          return ((n.memoizedState = [a, t]), a);
        },
        useReducer: function (e, t, n) {
          var a = lo();
          if (void 0 !== n) {
            var r = n(t);
            if (r5) {
              eg(!0);
              try {
                n(t);
              } finally {
                eg(!1);
              }
            }
          } else r = t;
          return (
            (a.memoizedState = a.baseState = r),
            (a.queue = e =
              {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: r,
              }),
            (e = e.dispatch = l9.bind(null, rZ, e)),
            [a.memoizedState, e]
          );
        },
        useRef: function (e) {
          return (lo().memoizedState = { current: e });
        },
        useState: function (e) {
          var t = (e = lN(e)).queue,
            n = se.bind(null, rZ, t);
          return ((t.dispatch = n), [e.memoizedState, n]);
        },
        useDebugValue: lG,
        useDeferredValue: function (e, t) {
          return lJ(lo(), e, t);
        },
        useTransition: function () {
          var e = lN(!1);
          return (
            (e = l0.bind(null, rZ, e.queue, !0, !1)),
            (lo().memoizedState = e),
            [!1, e]
          );
        },
        useSyncExternalStore: function (e, t, n) {
          var a = rZ,
            r = lo();
          if (a_) {
            if (void 0 === n) throw Error(o(407));
            n = n();
          } else {
            if (((n = t()), null === iU)) throw Error(o(349));
            0 != (127 & iQ) || ly(a, t, n);
          }
          r.memoizedState = n;
          var l = { value: n, getSnapshot: t };
          return (
            (r.queue = l),
            lU(lk.bind(null, a, l, e), [e]),
            (a.flags |= 2048),
            lD(9, { destroy: void 0 }, lx.bind(null, a, l, n, t), null),
            n
          );
        },
        useId: function () {
          var e = lo(),
            t = iU.identifierPrefix;
          if (a_) {
            var n = aN,
              a = aw;
            ((t =
              "_" +
              t +
              "R_" +
              (n = (a & ~(1 << (32 - eb(a) - 1))).toString(32) + n)),
              0 < (n = r4++) && (t += "H" + n.toString(32)),
              (t += "_"));
          } else t = "_" + t + "r_" + (n = r7++).toString(32) + "_";
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: l4,
        useFormState: lP,
        useActionState: lP,
        useOptimistic: function (e) {
          var t = lo();
          t.memoizedState = t.baseState = e;
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return (
            (t.queue = n),
            (t = sn.bind(null, rZ, !0, n)),
            (n.dispatch = t),
            [e, t]
          );
        },
        useMemoCache: lm,
        useCacheRefresh: function () {
          return (lo().memoizedState = l7.bind(null, rZ));
        },
        useEffectEvent: function (e) {
          var t = lo(),
            n = { impl: e };
          return (
            (t.memoizedState = n),
            function () {
              if (0 != (2 & iI)) throw Error(o(440));
              return n.impl.apply(void 0, arguments);
            }
          );
        },
      },
      so = {
        readContext: aZ,
        use: lf,
        useCallback: lY,
        useContext: aZ,
        useEffect: lB,
        useImperativeHandle: lK,
        useInsertionEffect: lH,
        useLayoutEffect: lW,
        useMemo: lX,
        useReducer: lh,
        useRef: lF,
        useState: function () {
          return lh(lp);
        },
        useDebugValue: lG,
        useDeferredValue: function (e, t) {
          return lZ(lc(), r0.memoizedState, e, t);
        },
        useTransition: function () {
          var e = lh(lp)[0],
            t = lc().memoizedState;
          return ["boolean" == typeof e ? e : ld(e), t];
        },
        useSyncExternalStore: lv,
        useId: l6,
        useHostTransitionStatus: l4,
        useFormState: lA,
        useActionState: lA,
        useOptimistic: function (e, t) {
          return lS(lc(), r0, e, t);
        },
        useMemoCache: lm,
        useCacheRefresh: l8,
      };
    so.useEffectEvent = lQ;
    var sc = {
      readContext: aZ,
      use: lf,
      useCallback: lY,
      useContext: aZ,
      useEffect: lB,
      useImperativeHandle: lK,
      useInsertionEffect: lH,
      useLayoutEffect: lW,
      useMemo: lX,
      useReducer: lb,
      useRef: lF,
      useState: function () {
        return lb(lp);
      },
      useDebugValue: lG,
      useDeferredValue: function (e, t) {
        var n = lc();
        return null === r0 ? lJ(n, e, t) : lZ(n, r0.memoizedState, e, t);
      },
      useTransition: function () {
        var e = lb(lp)[0],
          t = lc().memoizedState;
        return ["boolean" == typeof e ? e : ld(e), t];
      },
      useSyncExternalStore: lv,
      useId: l6,
      useHostTransitionStatus: l4,
      useFormState: lR,
      useActionState: lR,
      useOptimistic: function (e, t) {
        var n = lc();
        return null !== r0
          ? lS(n, r0, e, t)
          : ((n.baseState = e), [e, n.queue.dispatch]);
      },
      useMemoCache: lm,
      useCacheRefresh: l8,
    };
    function su(e, t, n, a) {
      ((n = null == (n = n(a, (t = e.memoizedState))) ? t : p({}, t, n)),
        (e.memoizedState = n),
        0 === e.lanes && (e.updateQueue.baseState = n));
    }
    sc.useEffectEvent = lQ;
    var sd = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var a = ou(),
          r = rz(a);
        ((r.payload = t),
          null != n && (r.callback = n),
          null !== (t = rT(e, r, a)) && (of(t, e, a), rM(t, e, a)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var a = ou(),
          r = rz(a);
        ((r.tag = 1),
          (r.payload = t),
          null != n && (r.callback = n),
          null !== (t = rT(e, r, a)) && (of(t, e, a), rM(t, e, a)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = ou(),
          a = rz(n);
        ((a.tag = 2),
          null != t && (a.callback = t),
          null !== (t = rT(e, a, n)) && (of(t, e, n), rM(t, e, n)));
      },
    };
    function sf(e, t, n, a, r, l, s) {
      return "function" == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(a, l, s)
        : !t.prototype ||
            !t.prototype.isPureReactComponent ||
            !nM(n, a) ||
            !nM(r, l);
    }
    function sm(e, t, n, a) {
      ((e = t.state),
        "function" == typeof t.componentWillReceiveProps &&
          t.componentWillReceiveProps(n, a),
        "function" == typeof t.UNSAFE_componentWillReceiveProps &&
          t.UNSAFE_componentWillReceiveProps(n, a),
        t.state !== e && sd.enqueueReplaceState(t, t.state, null));
    }
    function sp(e, t) {
      var n = t;
      if ("ref" in t) for (var a in ((n = {}), t)) "ref" !== a && (n[a] = t[a]);
      if ((e = e.defaultProps))
        for (var r in (n === t && (n = p({}, n)), e))
          void 0 === n[r] && (n[r] = e[r]);
      return n;
    }
    function sh(e) {
      n3(e);
    }
    function sg(e) {
      console.error(e);
    }
    function sb(e) {
      n3(e);
    }
    function sv(e, t) {
      try {
        (0, e.onUncaughtError)(t.value, { componentStack: t.stack });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function sy(e, t, n) {
      try {
        (0, e.onCaughtError)(n.value, {
          componentStack: n.stack,
          errorBoundary: 1 === t.tag ? t.stateNode : null,
        });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function sx(e, t, n) {
      return (
        ((n = rz(n)).tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          sv(e, t);
        }),
        n
      );
    }
    function sk(e) {
      return (((e = rz(e)).tag = 3), e);
    }
    function sj(e, t, n, a) {
      var r = n.type.getDerivedStateFromError;
      if ("function" == typeof r) {
        var l = a.value;
        ((e.payload = function () {
          return r(l);
        }),
          (e.callback = function () {
            sy(t, n, a);
          }));
      }
      var s = n.stateNode;
      null !== s &&
        "function" == typeof s.componentDidCatch &&
        (e.callback = function () {
          (sy(t, n, a),
            "function" != typeof r &&
              (null === oe ? (oe = new Set([this])) : oe.add(this)));
          var e = a.stack;
          this.componentDidCatch(a.value, {
            componentStack: null !== e ? e : "",
          });
        });
    }
    var sw = Error(o(461)),
      sN = !1;
    function sS(e, t, n, a) {
      t.child = null === e ? rS(t, null, n, a) : rN(t, e.child, n, a);
    }
    function sC(e, t, n, a, r) {
      n = n.render;
      var l = t.ref;
      if ("ref" in a) {
        var s = {};
        for (var i in a) "ref" !== i && (s[i] = a[i]);
      } else s = a;
      return (aJ(t), (a = lt(e, t, n, s, l, r)), (i = ll()), null === e || sN)
        ? (a_ && i && aE(t), (t.flags |= 1), sS(e, t, a, r), t.child)
        : (ls(e, t, r), sG(e, t, r));
    }
    function sE(e, t, n, a, r) {
      if (null === e) {
        var l = n.type;
        return "function" != typeof l ||
          as(l) ||
          void 0 !== l.defaultProps ||
          null !== n.compare
          ? (((e = ac(n.type, null, a, t, t.mode, r)).ref = t.ref),
            (e.return = t),
            (t.child = e))
          : ((t.tag = 15), (t.type = l), s$(e, t, l, a, r));
      }
      if (((l = e.child), !sY(e, r))) {
        var s = l.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : nM)(s, a) && e.ref === t.ref)
          return sG(e, t, r);
      }
      return (
        (t.flags |= 1),
        ((e = ai(l, a)).ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function s$(e, t, n, a, r) {
      if (null !== e) {
        var l = e.memoizedProps;
        if (nM(l, a) && e.ref === t.ref)
          if (((sN = !1), (t.pendingProps = a = l), !sY(e, r)))
            return ((t.lanes = e.lanes), sG(e, t, r));
          else 0 != (131072 & e.flags) && (sN = !0);
      }
      return sL(e, t, n, a, r);
    }
    function sz(e, t, n, a) {
      var r = a.children,
        l = null !== e ? e.memoizedState : null;
      if (
        (null === e &&
          null === t.stateNode &&
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        "hidden" === a.mode)
      ) {
        if (0 != (128 & t.flags)) {
          if (((l = null !== l ? l.baseLanes | n : n), null !== e)) {
            for (a = t.child = e.child, r = 0; null !== a;)
              ((r = r | a.lanes | a.childLanes), (a = a.sibling));
            a = r & ~l;
          } else ((a = 0), (t.child = null));
          return sM(e, t, l, n, a);
        }
        if (0 == (0x20000000 & n))
          return (
            (a = t.lanes = 0x20000000),
            sM(e, t, null !== l ? l.baseLanes | n : n, n, a)
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          null !== e && rs(t, null !== l ? l.cachePool : null),
          null !== l ? rO(t, l) : rI(),
          rV(t));
      } else
        null !== l
          ? (rs(t, l.cachePool), rO(t, l), rK(), (t.memoizedState = null))
          : (null !== e && rs(t, null), rI(), rK());
      return (sS(e, t, r, n), t.child);
    }
    function sT(e, t) {
      return (
        (null !== e && 22 === e.tag) ||
          null !== t.stateNode ||
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        t.sibling
      );
    }
    function sM(e, t, n, a, r) {
      var l = rl();
      return (
        (t.memoizedState = {
          baseLanes: n,
          cachePool: (l =
            null === l ? null : { parent: a4._currentValue, pool: l }),
        }),
        null !== e && rs(t, null),
        rI(),
        rV(t),
        null !== e && aY(e, t, a, !0),
        (t.childLanes = r),
        null
      );
    }
    function s_(e, t) {
      return (
        ((t = sQ({ mode: t.mode, children: t.children }, e.mode)).ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      );
    }
    function sP(e, t, n) {
      return (
        rN(t, e.child, null, n),
        (e = s_(t, t.pendingProps)),
        (e.flags |= 2),
        rG(t),
        (t.memoizedState = null),
        e
      );
    }
    function sA(e, t) {
      var n = t.ref;
      if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
      else {
        if ("function" != typeof n && "object" != typeof n) throw Error(o(284));
        (null === e || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function sL(e, t, n, a, r) {
      return (aJ(t),
      (n = lt(e, t, n, a, void 0, r)),
      (a = ll()),
      null === e || sN)
        ? (a_ && a && aE(t), (t.flags |= 1), sS(e, t, n, r), t.child)
        : (ls(e, t, r), sG(e, t, r));
    }
    function sq(e, t, n, a, r, l) {
      return (aJ(t),
      (t.updateQueue = null),
      (n = la(t, a, n, r)),
      ln(e),
      (a = ll()),
      null === e || sN)
        ? (a_ && a && aE(t), (t.flags |= 1), sS(e, t, n, l), t.child)
        : (ls(e, t, l), sG(e, t, l));
    }
    function sR(e, t, n, a, r) {
      if ((aJ(t), null === t.stateNode)) {
        var l = aa,
          s = n.contextType;
        ("object" == typeof s && null !== s && (l = aZ(s)),
          (t.memoizedState =
            null !== (l = new n(a, l)).state && void 0 !== l.state
              ? l.state
              : null),
          (l.updater = sd),
          (t.stateNode = l),
          (l._reactInternals = t),
          ((l = t.stateNode).props = a),
          (l.state = t.memoizedState),
          (l.refs = {}),
          rE(t),
          (s = n.contextType),
          (l.context = "object" == typeof s && null !== s ? aZ(s) : aa),
          (l.state = t.memoizedState),
          "function" == typeof (s = n.getDerivedStateFromProps) &&
            (su(t, n, s, a), (l.state = t.memoizedState)),
          "function" == typeof n.getDerivedStateFromProps ||
            "function" == typeof l.getSnapshotBeforeUpdate ||
            ("function" != typeof l.UNSAFE_componentWillMount &&
              "function" != typeof l.componentWillMount) ||
            ((s = l.state),
            "function" == typeof l.componentWillMount && l.componentWillMount(),
            "function" == typeof l.UNSAFE_componentWillMount &&
              l.UNSAFE_componentWillMount(),
            s !== l.state && sd.enqueueReplaceState(l, l.state, null),
            rL(t, a, l, r),
            rA(),
            (l.state = t.memoizedState)),
          "function" == typeof l.componentDidMount && (t.flags |= 4194308),
          (a = !0));
      } else if (null === e) {
        l = t.stateNode;
        var i = t.memoizedProps,
          o = sp(n, i);
        l.props = o;
        var c = l.context,
          u = n.contextType;
        ((s = aa), "object" == typeof u && null !== u && (s = aZ(u)));
        var d = n.getDerivedStateFromProps;
        ((u =
          "function" == typeof d ||
          "function" == typeof l.getSnapshotBeforeUpdate),
          (i = t.pendingProps !== i),
          u ||
            ("function" != typeof l.UNSAFE_componentWillReceiveProps &&
              "function" != typeof l.componentWillReceiveProps) ||
            ((i || c !== s) && sm(t, l, a, s)),
          (rC = !1));
        var f = t.memoizedState;
        ((l.state = f),
          rL(t, a, l, r),
          rA(),
          (c = t.memoizedState),
          i || f !== c || rC
            ? ("function" == typeof d &&
                (su(t, n, d, a), (c = t.memoizedState)),
              (o = rC || sf(t, n, o, a, f, c, s))
                ? (u ||
                    ("function" != typeof l.UNSAFE_componentWillMount &&
                      "function" != typeof l.componentWillMount) ||
                    ("function" == typeof l.componentWillMount &&
                      l.componentWillMount(),
                    "function" == typeof l.UNSAFE_componentWillMount &&
                      l.UNSAFE_componentWillMount()),
                  "function" == typeof l.componentDidMount &&
                    (t.flags |= 4194308))
                : ("function" == typeof l.componentDidMount &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = a),
                  (t.memoizedState = c)),
              (l.props = a),
              (l.state = c),
              (l.context = s),
              (a = o))
            : ("function" == typeof l.componentDidMount && (t.flags |= 4194308),
              (a = !1)));
      } else {
        ((l = t.stateNode),
          r$(e, t),
          (u = sp(n, (s = t.memoizedProps))),
          (l.props = u),
          (d = t.pendingProps),
          (f = l.context),
          (c = n.contextType),
          (o = aa),
          "object" == typeof c && null !== c && (o = aZ(c)),
          (c =
            "function" == typeof (i = n.getDerivedStateFromProps) ||
            "function" == typeof l.getSnapshotBeforeUpdate) ||
            ("function" != typeof l.UNSAFE_componentWillReceiveProps &&
              "function" != typeof l.componentWillReceiveProps) ||
            ((s !== d || f !== o) && sm(t, l, a, o)),
          (rC = !1),
          (f = t.memoizedState),
          (l.state = f),
          rL(t, a, l, r),
          rA());
        var m = t.memoizedState;
        s !== d ||
        f !== m ||
        rC ||
        (null !== e && null !== e.dependencies && aX(e.dependencies))
          ? ("function" == typeof i && (su(t, n, i, a), (m = t.memoizedState)),
            (u =
              rC ||
              sf(t, n, u, a, f, m, o) ||
              (null !== e && null !== e.dependencies && aX(e.dependencies)))
              ? (c ||
                  ("function" != typeof l.UNSAFE_componentWillUpdate &&
                    "function" != typeof l.componentWillUpdate) ||
                  ("function" == typeof l.componentWillUpdate &&
                    l.componentWillUpdate(a, m, o),
                  "function" == typeof l.UNSAFE_componentWillUpdate &&
                    l.UNSAFE_componentWillUpdate(a, m, o)),
                "function" == typeof l.componentDidUpdate && (t.flags |= 4),
                "function" == typeof l.getSnapshotBeforeUpdate &&
                  (t.flags |= 1024))
              : ("function" != typeof l.componentDidUpdate ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" != typeof l.getSnapshotBeforeUpdate ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = a),
                (t.memoizedState = m)),
            (l.props = a),
            (l.state = m),
            (l.context = o),
            (a = u))
          : ("function" != typeof l.componentDidUpdate ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            "function" != typeof l.getSnapshotBeforeUpdate ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (a = !1));
      }
      return (
        (l = a),
        sA(e, t),
        (a = 0 != (128 & t.flags)),
        l || a
          ? ((l = t.stateNode),
            (n =
              a && "function" != typeof n.getDerivedStateFromError
                ? null
                : l.render()),
            (t.flags |= 1),
            null !== e && a
              ? ((t.child = rN(t, e.child, null, r)),
                (t.child = rN(t, null, n, r)))
              : sS(e, t, n, r),
            (t.memoizedState = l.state),
            (e = t.child))
          : (e = sG(e, t, r)),
        e
      );
    }
    function sD(e, t, n, a) {
      return (aO(), (t.flags |= 256), sS(e, t, n, a), t.child);
    }
    var sF = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null,
    };
    function sO(e) {
      return { baseLanes: e, cachePool: ri() };
    }
    function sI(e, t, n) {
      return ((e = null !== e ? e.childLanes & ~n : 0), t && (e |= i1), e);
    }
    function sU(e, t, n) {
      var a,
        r = t.pendingProps,
        l = !1,
        s = 0 != (128 & t.flags);
      if (
        ((a = s) ||
          (a =
            (null === e || null !== e.memoizedState) && 0 != (2 & rY.current)),
        a && ((l = !0), (t.flags &= -129)),
        (a = 0 != (32 & t.flags)),
        (t.flags &= -33),
        null === e)
      ) {
        if (a_) {
          if (
            (l ? rH(t) : rK(),
            (e = aM)
              ? null !==
                  (e = null !== (e = cL(e, aA)) && "&" !== e.data ? e : null) &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: null !== aj ? { id: aw, overflow: aN } : null,
                  retryLane: 0x20000000,
                  hydrationErrors: null,
                }),
                ((n = af(e)).return = t),
                (t.child = n),
                (aT = t),
                (aM = null))
              : (e = null),
            null === e)
          )
            throw aq(t);
          return (cR(e) ? (t.lanes = 32) : (t.lanes = 0x20000000), null);
        }
        var i = r.children;
        return ((r = r.fallback), l)
          ? (rK(),
            (i = sQ({ mode: "hidden", children: i }, (l = t.mode))),
            (r = au(r, l, n, null)),
            (i.return = t),
            (r.return = t),
            (i.sibling = r),
            (t.child = i),
            ((r = t.child).memoizedState = sO(n)),
            (r.childLanes = sI(e, a, n)),
            (t.memoizedState = sF),
            sT(null, r))
          : (rH(t), sB(t, i));
      }
      var c = e.memoizedState;
      if (null !== c && null !== (i = c.dehydrated)) {
        if (s)
          256 & t.flags
            ? (rH(t), (t.flags &= -257), (t = sH(e, t, n)))
            : null !== t.memoizedState
              ? (rK(), (t.child = e.child), (t.flags |= 128), (t = null))
              : (rK(),
                (i = r.fallback),
                (l = t.mode),
                (r = sQ({ mode: "visible", children: r.children }, l)),
                (i = au(i, l, n, null)),
                (i.flags |= 2),
                (r.return = t),
                (i.return = t),
                (r.sibling = i),
                (t.child = r),
                rN(t, e.child, null, n),
                ((r = t.child).memoizedState = sO(n)),
                (r.childLanes = sI(e, a, n)),
                (t.memoizedState = sF),
                (t = sT(null, r)));
        else if ((rH(t), cR(i))) {
          if ((a = i.nextSibling && i.nextSibling.dataset)) var u = a.dgst;
          ((a = u),
            ((r = Error(o(419))).stack = ""),
            (r.digest = a),
            aU({ value: r, source: null, stack: null }),
            (t = sH(e, t, n)));
        } else if (
          (sN || aY(e, t, n, !1), (a = 0 != (n & e.childLanes)), sN || a)
        ) {
          if (null !== (a = iU) && 0 !== (r = eM(a, n)) && r !== c.retryLane)
            throw ((c.retryLane = r), ae(e, r), of(a, e, r), sw);
          (cq(i) || ow(), (t = sH(e, t, n)));
        } else
          cq(i)
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = c.treeContext),
              (aM = cD(i.nextSibling)),
              (aT = t),
              (a_ = !0),
              (aP = null),
              (aA = !1),
              null !== e && az(t, e),
              (t = sB(t, r.children)),
              (t.flags |= 4096));
        return t;
      }
      return l
        ? (rK(),
          (i = r.fallback),
          (l = t.mode),
          (u = (c = e.child).sibling),
          ((r = ai(c, { mode: "hidden", children: r.children })).subtreeFlags =
            0x3e00000 & c.subtreeFlags),
          null !== u
            ? (i = ai(u, i))
            : ((i = au(i, l, n, null)), (i.flags |= 2)),
          (i.return = t),
          (r.return = t),
          (r.sibling = i),
          (t.child = r),
          sT(null, r),
          (r = t.child),
          null === (i = e.child.memoizedState)
            ? (i = sO(n))
            : (null !== (l = i.cachePool)
                ? ((c = a4._currentValue),
                  (l = l.parent !== c ? { parent: c, pool: c } : l))
                : (l = ri()),
              (i = { baseLanes: i.baseLanes | n, cachePool: l })),
          (r.memoizedState = i),
          (r.childLanes = sI(e, a, n)),
          (t.memoizedState = sF),
          sT(e.child, r))
        : (rH(t),
          (e = (n = e.child).sibling),
          ((n = ai(n, { mode: "visible", children: r.children })).return = t),
          (n.sibling = null),
          null !== e &&
            (null === (a = t.deletions)
              ? ((t.deletions = [e]), (t.flags |= 16))
              : a.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
    }
    function sB(e, t) {
      return (
        ((t = sQ({ mode: "visible", children: t }, e.mode)).return = e),
        (e.child = t)
      );
    }
    function sQ(e, t) {
      return (((e = al(22, e, null, t)).lanes = 0), e);
    }
    function sH(e, t, n) {
      return (
        rN(t, e.child, null, n),
        (e = sB(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function sW(e, t, n) {
      e.lanes |= t;
      var a = e.alternate;
      (null !== a && (a.lanes |= t), aK(e.return, t, n));
    }
    function sV(e, t, n, a, r, l) {
      var s = e.memoizedState;
      null === s
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: n,
            tailMode: r,
            treeForkCount: l,
          })
        : ((s.isBackwards = t),
          (s.rendering = null),
          (s.renderingStartTime = 0),
          (s.last = a),
          (s.tail = n),
          (s.tailMode = r),
          (s.treeForkCount = l));
    }
    function sK(e, t, n) {
      var a = t.pendingProps,
        r = a.revealOrder,
        l = a.tail;
      a = a.children;
      var s = rY.current,
        i = 0 != (2 & s);
      if (
        (i ? ((s = (1 & s) | 2), (t.flags |= 128)) : (s &= 1),
        I(rY, s),
        sS(e, t, a, n),
        (a = a_ ? ay : 0),
        !i && null !== e && 0 != (128 & e.flags))
      )
        e: for (e = t.child; null !== e;) {
          if (13 === e.tag) null !== e.memoizedState && sW(e, n, t);
          else if (19 === e.tag) sW(e, n, t);
          else if (null !== e.child) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break;
          for (; null === e.sibling;) {
            if (null === e.return || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      switch (r) {
        case "forwards":
          for (n = t.child, r = null; null !== n;)
            (null !== (e = n.alternate) && null === rX(e) && (r = n),
              (n = n.sibling));
          (null === (n = r)
            ? ((r = t.child), (t.child = null))
            : ((r = n.sibling), (n.sibling = null)),
            sV(t, !1, r, n, l, a));
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (n = null, r = t.child, t.child = null; null !== r;) {
            if (null !== (e = r.alternate) && null === rX(e)) {
              t.child = r;
              break;
            }
            ((e = r.sibling), (r.sibling = n), (n = r), (r = e));
          }
          sV(t, !0, n, null, l, a);
          break;
        case "together":
          sV(t, !1, null, null, void 0, a);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function sG(e, t, n) {
      if (
        (null !== e && (t.dependencies = e.dependencies),
        (iJ |= t.lanes),
        0 == (n & t.childLanes))
      ) {
        if (null === e) return null;
        else if ((aY(e, t, n, !1), 0 == (n & t.childLanes))) return null;
      }
      if (null !== e && t.child !== e.child) throw Error(o(153));
      if (null !== t.child) {
        for (
          n = ai((e = t.child), e.pendingProps), t.child = n, n.return = t;
          null !== e.sibling;
        )
          ((e = e.sibling),
            ((n = n.sibling = ai(e, e.pendingProps)).return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function sY(e, t) {
      return 0 != (e.lanes & t) || !!(null !== (e = e.dependencies) && aX(e));
    }
    function sX(e, t, n) {
      if (null !== e)
        if (e.memoizedProps !== t.pendingProps) sN = !0;
        else {
          if (!sY(e, n) && 0 == (128 & t.flags))
            return (
              (sN = !1),
              (function (e, t, n) {
                switch (t.tag) {
                  case 3:
                    (W(t, t.stateNode.containerInfo),
                      aW(t, a4, e.memoizedState.cache),
                      aO());
                    break;
                  case 27:
                  case 5:
                    K(t);
                    break;
                  case 4:
                    W(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    aW(t, t.type, t.memoizedProps.value);
                    break;
                  case 31:
                    if (null !== t.memoizedState)
                      return ((t.flags |= 128), rW(t), null);
                    break;
                  case 13:
                    var a = t.memoizedState;
                    if (null !== a) {
                      if (null !== a.dehydrated)
                        return (rH(t), (t.flags |= 128), null);
                      if (0 != (n & t.child.childLanes)) return sU(e, t, n);
                      return (
                        rH(t),
                        null !== (e = sG(e, t, n)) ? e.sibling : null
                      );
                    }
                    rH(t);
                    break;
                  case 19:
                    var r = 0 != (128 & e.flags);
                    if (
                      ((a = 0 != (n & t.childLanes)) ||
                        (aY(e, t, n, !1), (a = 0 != (n & t.childLanes))),
                      r)
                    ) {
                      if (a) return sK(e, t, n);
                      t.flags |= 128;
                    }
                    if (
                      (null !== (r = t.memoizedState) &&
                        ((r.rendering = null),
                        (r.tail = null),
                        (r.lastEffect = null)),
                      I(rY, rY.current),
                      !a)
                    )
                      return null;
                    break;
                  case 22:
                    return ((t.lanes = 0), sz(e, t, n, t.pendingProps));
                  case 24:
                    aW(t, a4, e.memoizedState.cache);
                }
                return sG(e, t, n);
              })(e, t, n)
            );
          sN = 0 != (131072 & e.flags);
        }
      else ((sN = !1), a_ && 0 != (1048576 & t.flags) && aC(t, ay, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          e: {
            var a = t.pendingProps;
            if (((e = rp(t.elementType)), (t.type = e), "function" == typeof e))
              as(e)
                ? ((a = sp(e, a)), (t.tag = 1), (t = sR(null, t, e, a, n)))
                : ((t.tag = 0), (t = sL(null, t, e, a, n)));
            else {
              if (null != e) {
                var r = e.$$typeof;
                if (r === w) {
                  ((t.tag = 11), (t = sC(null, t, e, a, n)));
                  break e;
                }
                if (r === C) {
                  ((t.tag = 14), (t = sE(null, t, e, a, n)));
                  break e;
                }
              }
              throw Error(
                o(
                  306,
                  (t =
                    (function e(t) {
                      if (null == t) return null;
                      if ("function" == typeof t)
                        return t.$$typeof === _
                          ? null
                          : t.displayName || t.name || null;
                      if ("string" == typeof t) return t;
                      switch (t) {
                        case v:
                          return "Fragment";
                        case x:
                          return "Profiler";
                        case y:
                          return "StrictMode";
                        case N:
                          return "Suspense";
                        case S:
                          return "SuspenseList";
                        case $:
                          return "Activity";
                      }
                      if ("object" == typeof t)
                        switch (t.$$typeof) {
                          case b:
                            return "Portal";
                          case j:
                            return t.displayName || "Context";
                          case k:
                            return (
                              (t._context.displayName || "Context") +
                              ".Consumer"
                            );
                          case w:
                            var n = t.render;
                            return (
                              (t = t.displayName) ||
                                (t =
                                  "" !== (t = n.displayName || n.name || "")
                                    ? "ForwardRef(" + t + ")"
                                    : "ForwardRef"),
                              t
                            );
                          case C:
                            return null !== (n = t.displayName || null)
                              ? n
                              : e(t.type) || "Memo";
                          case E:
                            ((n = t._payload), (t = t._init));
                            try {
                              return e(t(n));
                            } catch (e) {}
                        }
                      return null;
                    })(e) || e),
                  "",
                ),
              );
            }
          }
          return t;
        case 0:
          return sL(e, t, t.type, t.pendingProps, n);
        case 1:
          return ((r = sp((a = t.type), t.pendingProps)), sR(e, t, a, r, n));
        case 3:
          e: {
            if ((W(t, t.stateNode.containerInfo), null === e))
              throw Error(o(387));
            a = t.pendingProps;
            var l = t.memoizedState;
            ((r = l.element), r$(e, t), rL(t, a, null, n));
            var s = t.memoizedState;
            if (
              (aW(t, a4, (a = s.cache)),
              a !== l.cache && aG(t, [a4], n, !0),
              rA(),
              (a = s.element),
              l.isDehydrated)
            )
              if (
                ((l = { element: a, isDehydrated: !1, cache: s.cache }),
                (t.updateQueue.baseState = l),
                (t.memoizedState = l),
                256 & t.flags)
              ) {
                t = sD(e, t, a, n);
                break e;
              } else if (a !== r) {
                (aU((r = ah(Error(o(424)), t))), (t = sD(e, t, a, n)));
                break e;
              } else
                for (
                  aM = cD(
                    (e =
                      9 === (e = t.stateNode.containerInfo).nodeType
                        ? e.body
                        : "HTML" === e.nodeName
                          ? e.ownerDocument.body
                          : e).firstChild,
                  ),
                    aT = t,
                    a_ = !0,
                    aP = null,
                    aA = !0,
                    n = rS(t, null, a, n),
                    t.child = n;
                  n;
                )
                  ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
            else {
              if ((aO(), a === r)) {
                t = sG(e, t, n);
                break e;
              }
              sS(e, t, a, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            sA(e, t),
            null === e
              ? (n = cY(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : a_ ||
                  ((n = t.type),
                  (e = t.pendingProps),
                  ((a = ck(Q.current).createElement(n))[eR] = t),
                  (a[eD] = e),
                  cb(a, n, e),
                  eY(a),
                  (t.stateNode = a))
              : (t.memoizedState = cY(
                  t.type,
                  e.memoizedProps,
                  t.pendingProps,
                  e.memoizedState,
                )),
            null
          );
        case 27:
          return (
            K(t),
            null === e &&
              a_ &&
              ((a = t.stateNode = cU(t.type, t.pendingProps, Q.current)),
              (aT = t),
              (aA = !0),
              (r = aM),
              cM(t.type) ? ((cF = r), (aM = cD(a.firstChild))) : (aM = r)),
            sS(e, t, t.pendingProps.children, n),
            sA(e, t),
            null === e && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            null === e &&
              a_ &&
              ((r = a = aM) &&
                (null !==
                (a = (function (e, t, n, a) {
                  for (; 1 === e.nodeType;) {
                    if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                      if (!a && ("INPUT" !== e.nodeName || "hidden" !== e.type))
                        break;
                    } else if (a) {
                      if (!e[eQ])
                        switch (t) {
                          case "meta":
                            if (!e.hasAttribute("itemprop")) break;
                            return e;
                          case "link":
                            if (
                              ("stylesheet" === (r = e.getAttribute("rel")) &&
                                e.hasAttribute("data-precedence")) ||
                              r !== n.rel ||
                              e.getAttribute("href") !==
                                (null == n.href || "" === n.href
                                  ? null
                                  : n.href) ||
                              e.getAttribute("crossorigin") !==
                                (null == n.crossOrigin
                                  ? null
                                  : n.crossOrigin) ||
                              e.getAttribute("title") !==
                                (null == n.title ? null : n.title)
                            )
                              break;
                            return e;
                          case "style":
                            if (e.hasAttribute("data-precedence")) break;
                            return e;
                          case "script":
                            if (
                              ((r = e.getAttribute("src")) !==
                                (null == n.src ? null : n.src) ||
                                e.getAttribute("type") !==
                                  (null == n.type ? null : n.type) ||
                                e.getAttribute("crossorigin") !==
                                  (null == n.crossOrigin
                                    ? null
                                    : n.crossOrigin)) &&
                              r &&
                              e.hasAttribute("async") &&
                              !e.hasAttribute("itemprop")
                            )
                              break;
                            return e;
                          default:
                            return e;
                        }
                    } else {
                      if ("input" !== t || "hidden" !== e.type) return e;
                      var r = null == n.name ? null : "" + n.name;
                      if ("hidden" === n.type && e.getAttribute("name") === r)
                        return e;
                    }
                    if (null === (e = cD(e.nextSibling))) break;
                  }
                  return null;
                })(a, t.type, t.pendingProps, aA))
                  ? ((t.stateNode = a),
                    (aT = t),
                    (aM = cD(a.firstChild)),
                    (aA = !1),
                    (r = !0))
                  : (r = !1)),
              r || aq(t)),
            K(t),
            (r = t.type),
            (l = t.pendingProps),
            (s = null !== e ? e.memoizedProps : null),
            (a = l.children),
            cN(r, l) ? (a = null) : null !== s && cN(r, s) && (t.flags |= 32),
            null !== t.memoizedState &&
              (ul._currentValue = r = lt(e, t, lr, null, null, n)),
            sA(e, t),
            sS(e, t, a, n),
            t.child
          );
        case 6:
          return (
            null === e &&
              a_ &&
              ((e = n = aM) &&
                (null !==
                (n = (function (e, t, n) {
                  if ("" === t) return null;
                  for (; 3 !== e.nodeType;)
                    if (
                      ((1 !== e.nodeType ||
                        "INPUT" !== e.nodeName ||
                        "hidden" !== e.type) &&
                        !n) ||
                      null === (e = cD(e.nextSibling))
                    )
                      return null;
                  return e;
                })(n, t.pendingProps, aA))
                  ? ((t.stateNode = n), (aT = t), (aM = null), (e = !0))
                  : (e = !1)),
              e || aq(t)),
            null
          );
        case 13:
          return sU(e, t, n);
        case 4:
          return (
            W(t, t.stateNode.containerInfo),
            (a = t.pendingProps),
            null === e ? (t.child = rN(t, null, a, n)) : sS(e, t, a, n),
            t.child
          );
        case 11:
          return sC(e, t, t.type, t.pendingProps, n);
        case 7:
          return (sS(e, t, t.pendingProps, n), t.child);
        case 8:
        case 12:
          return (sS(e, t, t.pendingProps.children, n), t.child);
        case 10:
          return (
            (a = t.pendingProps),
            aW(t, t.type, a.value),
            sS(e, t, a.children, n),
            t.child
          );
        case 9:
          return (
            (r = t.type._context),
            (a = t.pendingProps.children),
            aJ(t),
            (a = a((r = aZ(r)))),
            (t.flags |= 1),
            sS(e, t, a, n),
            t.child
          );
        case 14:
          return sE(e, t, t.type, t.pendingProps, n);
        case 15:
          return s$(e, t, t.type, t.pendingProps, n);
        case 19:
          return sK(e, t, n);
        case 31:
          var i = e,
            c = t,
            u = n,
            d = c.pendingProps,
            f = 0 != (128 & c.flags);
          if (((c.flags &= -129), null === i)) {
            if (a_) {
              if ("hidden" === d.mode)
                return ((i = s_(c, d)), (c.lanes = 0x20000000), sT(null, i));
              if (
                (rW(c),
                (i = aM)
                  ? null !==
                      (i =
                        null !== (i = cL(i, aA)) && "&" === i.data
                          ? i
                          : null) &&
                    ((c.memoizedState = {
                      dehydrated: i,
                      treeContext:
                        null !== aj ? { id: aw, overflow: aN } : null,
                      retryLane: 0x20000000,
                      hydrationErrors: null,
                    }),
                    ((u = af(i)).return = c),
                    (c.child = u),
                    (aT = c),
                    (aM = null))
                  : (i = null),
                null === i)
              )
                throw aq(c);
              return ((c.lanes = 0x20000000), null);
            }
            return s_(c, d);
          }
          var m = i.memoizedState;
          if (null !== m) {
            var p = m.dehydrated;
            if ((rW(c), f))
              if (256 & c.flags) ((c.flags &= -257), (c = sP(i, c, u)));
              else if (null !== c.memoizedState)
                ((c.child = i.child), (c.flags |= 128), (c = null));
              else throw Error(o(558));
            else if (
              (sN || aY(i, c, u, !1), (f = 0 != (u & i.childLanes)), sN || f)
            ) {
              if (
                null !== (d = iU) &&
                0 !== (p = eM(d, u)) &&
                p !== m.retryLane
              )
                throw ((m.retryLane = p), ae(i, p), of(d, i, p), sw);
              (ow(), (c = sP(i, c, u)));
            } else
              ((i = m.treeContext),
                (aM = cD(p.nextSibling)),
                (aT = c),
                (a_ = !0),
                (aP = null),
                (aA = !1),
                null !== i && az(c, i),
                (c = s_(c, d)),
                (c.flags |= 4096));
            return c;
          }
          return (
            ((i = ai(i.child, { mode: d.mode, children: d.children })).ref =
              c.ref),
            (c.child = i),
            (i.return = c),
            i
          );
        case 22:
          return sz(e, t, n, t.pendingProps);
        case 24:
          return (
            aJ(t),
            (a = aZ(a4)),
            null === e
              ? (null === (r = rl()) &&
                  ((r = iU),
                  (l = a6()),
                  (r.pooledCache = l),
                  l.refCount++,
                  null !== l && (r.pooledCacheLanes |= n),
                  (r = l)),
                (t.memoizedState = { parent: a, cache: r }),
                rE(t),
                aW(t, a4, r))
              : (0 != (e.lanes & n) && (r$(e, t), rL(t, null, null, n), rA()),
                (r = e.memoizedState),
                (l = t.memoizedState),
                r.parent !== a
                  ? ((r = { parent: a, cache: a }),
                    (t.memoizedState = r),
                    0 === t.lanes &&
                      (t.memoizedState = t.updateQueue.baseState = r),
                    aW(t, a4, a))
                  : (aW(t, a4, (a = l.cache)),
                    a !== r.cache && aG(t, [a4], n, !0))),
            sS(e, t, t.pendingProps.children, n),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(o(156, t.tag));
    }
    function sJ(e) {
      e.flags |= 4;
    }
    function sZ(e, t, n, a, r) {
      if (((t = 0 != (32 & e.mode)) && (t = !1), t)) {
        if (((e.flags |= 0x1000000), (0x13ffff40 & r) === r))
          if (e.stateNode.complete) e.flags |= 8192;
          else if (ox()) e.flags |= 8192;
          else throw ((rh = rd), rc);
      } else e.flags &= -0x1000001;
    }
    function s0(e, t) {
      if ("stylesheet" !== t.type || 0 != (4 & t.state.loading))
        e.flags &= -0x1000001;
      else if (((e.flags |= 0x1000000), !c9(t)))
        if (ox()) e.flags |= 8192;
        else throw ((rh = rd), rc);
    }
    function s1(e, t) {
      (null !== t && (e.flags |= 4),
        16384 & e.flags &&
          ((t = 22 !== e.tag ? eC() : 0x20000000), (e.lanes |= t), (i2 |= t)));
    }
    function s2(e, t) {
      if (!a_)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var n = null; null !== t;)
              (null !== t.alternate && (n = t), (t = t.sibling));
            null === n ? (e.tail = null) : (n.sibling = null);
            break;
          case "collapsed":
            n = e.tail;
            for (var a = null; null !== n;)
              (null !== n.alternate && (a = n), (n = n.sibling));
            null === a
              ? t || null === e.tail
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (a.sibling = null);
        }
    }
    function s3(e) {
      var t = null !== e.alternate && e.alternate.child === e.child,
        n = 0,
        a = 0;
      if (t)
        for (var r = e.child; null !== r;)
          ((n |= r.lanes | r.childLanes),
            (a |= 0x3e00000 & r.subtreeFlags),
            (a |= 0x3e00000 & r.flags),
            (r.return = e),
            (r = r.sibling));
      else
        for (r = e.child; null !== r;)
          ((n |= r.lanes | r.childLanes),
            (a |= r.subtreeFlags),
            (a |= r.flags),
            (r.return = e),
            (r = r.sibling));
      return ((e.subtreeFlags |= a), (e.childLanes = n), t);
    }
    function s5(e, t) {
      switch ((a$(t), t.tag)) {
        case 3:
          (aV(a4), V());
          break;
        case 26:
        case 27:
        case 5:
          G(t);
          break;
        case 4:
          V();
          break;
        case 31:
          null !== t.memoizedState && rG(t);
          break;
        case 13:
          rG(t);
          break;
        case 19:
          O(rY);
          break;
        case 10:
          aV(t.type);
          break;
        case 22:
        case 23:
          (rG(t), rU(), null !== e && O(rr));
          break;
        case 24:
          aV(a4);
      }
    }
    function s4(e, t) {
      try {
        var n = t.updateQueue,
          a = null !== n ? n.lastEffect : null;
        if (null !== a) {
          var r = a.next;
          n = r;
          do {
            if ((n.tag & e) === e) {
              a = void 0;
              var l = n.create;
              n.inst.destroy = a = l();
            }
            n = n.next;
          } while (n !== r);
        }
      } catch (e) {
        oD(t, t.return, e);
      }
    }
    function s6(e, t, n) {
      try {
        var a = t.updateQueue,
          r = null !== a ? a.lastEffect : null;
        if (null !== r) {
          var l = r.next;
          a = l;
          do {
            if ((a.tag & e) === e) {
              var s = a.inst,
                i = s.destroy;
              if (void 0 !== i) {
                ((s.destroy = void 0), (r = t));
                try {
                  i();
                } catch (e) {
                  oD(r, n, e);
                }
              }
            }
            a = a.next;
          } while (a !== l);
        }
      } catch (e) {
        oD(t, t.return, e);
      }
    }
    function s8(e) {
      var t = e.updateQueue;
      if (null !== t) {
        var n = e.stateNode;
        try {
          rR(t, n);
        } catch (t) {
          oD(e, e.return, t);
        }
      }
    }
    function s7(e, t, n) {
      ((n.props = sp(e.type, e.memoizedProps)), (n.state = e.memoizedState));
      try {
        n.componentWillUnmount();
      } catch (n) {
        oD(e, t, n);
      }
    }
    function s9(e, t) {
      try {
        var n = e.ref;
        if (null !== n) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var a = e.stateNode;
              break;
            default:
              a = e.stateNode;
          }
          "function" == typeof n ? (e.refCleanup = n(a)) : (n.current = a);
        }
      } catch (n) {
        oD(e, t, n);
      }
    }
    function ie(e, t) {
      var n = e.ref,
        a = e.refCleanup;
      if (null !== n)
        if ("function" == typeof a)
          try {
            a();
          } catch (n) {
            oD(e, t, n);
          } finally {
            ((e.refCleanup = null),
              null != (e = e.alternate) && (e.refCleanup = null));
          }
        else if ("function" == typeof n)
          try {
            n(null);
          } catch (n) {
            oD(e, t, n);
          }
        else n.current = null;
    }
    function it(e) {
      var t = e.type,
        n = e.memoizedProps,
        a = e.stateNode;
      try {
        switch (t) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            n.autoFocus && a.focus();
            break;
          case "img":
            n.src ? (a.src = n.src) : n.srcSet && (a.srcset = n.srcSet);
        }
      } catch (t) {
        oD(e, e.return, t);
      }
    }
    function ia(e, t, n) {
      try {
        var a = e.stateNode;
        ((function (e, t, n, a) {
          switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
              break;
            case "input":
              var r = null,
                l = null,
                s = null,
                i = null,
                c = null,
                u = null,
                d = null;
              for (p in n) {
                var f = n[p];
                if (n.hasOwnProperty(p) && null != f)
                  switch (p) {
                    case "checked":
                    case "value":
                      break;
                    case "defaultValue":
                      c = f;
                    default:
                      a.hasOwnProperty(p) || ch(e, t, p, null, a, f);
                  }
              }
              for (var m in a) {
                var p = a[m];
                if (
                  ((f = n[m]), a.hasOwnProperty(m) && (null != p || null != f))
                )
                  switch (m) {
                    case "type":
                      l = p;
                      break;
                    case "name":
                      r = p;
                      break;
                    case "checked":
                      u = p;
                      break;
                    case "defaultChecked":
                      d = p;
                      break;
                    case "value":
                      s = p;
                      break;
                    case "defaultValue":
                      i = p;
                      break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                      if (null != p) throw Error(o(137, t));
                      break;
                    default:
                      p !== f && ch(e, t, m, p, a, f);
                  }
              }
              tr(e, s, i, c, u, d, l, r);
              return;
            case "select":
              for (l in ((p = s = i = m = null), n))
                if (((c = n[l]), n.hasOwnProperty(l) && null != c))
                  switch (l) {
                    case "value":
                      break;
                    case "multiple":
                      p = c;
                    default:
                      a.hasOwnProperty(l) || ch(e, t, l, null, a, c);
                  }
              for (r in a)
                if (
                  ((l = a[r]),
                  (c = n[r]),
                  a.hasOwnProperty(r) && (null != l || null != c))
                )
                  switch (r) {
                    case "value":
                      m = l;
                      break;
                    case "defaultValue":
                      i = l;
                      break;
                    case "multiple":
                      s = l;
                    default:
                      l !== c && ch(e, t, r, l, a, c);
                  }
              ((t = i),
                (n = s),
                (a = p),
                null != m
                  ? ti(e, !!n, m, !1)
                  : !!a != !!n &&
                    (null != t
                      ? ti(e, !!n, t, !0)
                      : ti(e, !!n, n ? [] : "", !1)));
              return;
            case "textarea":
              for (i in ((p = m = null), n))
                if (
                  ((r = n[i]),
                  n.hasOwnProperty(i) && null != r && !a.hasOwnProperty(i))
                )
                  switch (i) {
                    case "value":
                    case "children":
                      break;
                    default:
                      ch(e, t, i, null, a, r);
                  }
              for (s in a)
                if (
                  ((r = a[s]),
                  (l = n[s]),
                  a.hasOwnProperty(s) && (null != r || null != l))
                )
                  switch (s) {
                    case "value":
                      m = r;
                      break;
                    case "defaultValue":
                      p = r;
                      break;
                    case "children":
                      break;
                    case "dangerouslySetInnerHTML":
                      if (null != r) throw Error(o(91));
                      break;
                    default:
                      r !== l && ch(e, t, s, r, a, l);
                  }
              to(e, m, p);
              return;
            case "option":
              for (var h in n)
                ((m = n[h]),
                  n.hasOwnProperty(h) &&
                    null != m &&
                    !a.hasOwnProperty(h) &&
                    ("selected" === h
                      ? (e.selected = !1)
                      : ch(e, t, h, null, a, m)));
              for (c in a)
                ((m = a[c]),
                  (p = n[c]),
                  a.hasOwnProperty(c) &&
                    m !== p &&
                    (null != m || null != p) &&
                    ("selected" === c
                      ? (e.selected =
                          m && "function" != typeof m && "symbol" != typeof m)
                      : ch(e, t, c, m, a, p)));
              return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
              for (var g in n)
                ((m = n[g]),
                  n.hasOwnProperty(g) &&
                    null != m &&
                    !a.hasOwnProperty(g) &&
                    ch(e, t, g, null, a, m));
              for (u in a)
                if (
                  ((m = a[u]),
                  (p = n[u]),
                  a.hasOwnProperty(u) && m !== p && (null != m || null != p))
                )
                  switch (u) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      if (null != m) throw Error(o(137, t));
                      break;
                    default:
                      ch(e, t, u, m, a, p);
                  }
              return;
            default:
              if (tp(t)) {
                for (var b in n)
                  ((m = n[b]),
                    n.hasOwnProperty(b) &&
                      void 0 !== m &&
                      !a.hasOwnProperty(b) &&
                      cg(e, t, b, void 0, a, m));
                for (d in a)
                  ((m = a[d]),
                    (p = n[d]),
                    a.hasOwnProperty(d) &&
                      m !== p &&
                      (void 0 !== m || void 0 !== p) &&
                      cg(e, t, d, m, a, p));
                return;
              }
          }
          for (var v in n)
            ((m = n[v]),
              n.hasOwnProperty(v) &&
                null != m &&
                !a.hasOwnProperty(v) &&
                ch(e, t, v, null, a, m));
          for (f in a)
            ((m = a[f]),
              (p = n[f]),
              a.hasOwnProperty(f) &&
                m !== p &&
                (null != m || null != p) &&
                ch(e, t, f, m, a, p));
        })(a, e.type, n, t),
          (a[eD] = t));
      } catch (t) {
        oD(e, e.return, t);
      }
    }
    function ir(e) {
      return (
        5 === e.tag ||
        3 === e.tag ||
        26 === e.tag ||
        (27 === e.tag && cM(e.type)) ||
        4 === e.tag
      );
    }
    function il(e) {
      e: for (;;) {
        for (; null === e.sibling;) {
          if (null === e.return || ir(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          5 !== e.tag && 6 !== e.tag && 18 !== e.tag;
        ) {
          if (
            (27 === e.tag && cM(e.type)) ||
            2 & e.flags ||
            null === e.child ||
            4 === e.tag
          )
            continue e;
          ((e.child.return = e), (e = e.child));
        }
        if (!(2 & e.flags)) return e.stateNode;
      }
    }
    function is(e, t, n) {
      var a = e.tag;
      if (5 === a || 6 === a)
        ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
      else if (
        4 !== a &&
        (27 === a && cM(e.type) && (n = e.stateNode), null !== (e = e.child))
      )
        for (is(e, t, n), e = e.sibling; null !== e;)
          (is(e, t, n), (e = e.sibling));
    }
    function ii(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var a = e.type, r = t.attributes; r.length;)
          t.removeAttributeNode(r[0]);
        (cb(t, a, n), (t[eR] = e), (t[eD] = n));
      } catch (t) {
        oD(e, e.return, t);
      }
    }
    var io = !1,
      ic = !1,
      iu = !1,
      id = "function" == typeof WeakSet ? WeakSet : Set,
      im = null;
    function ip(e, t, n) {
      var a = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (iC(e, n), 4 & a && s4(5, n));
          break;
        case 1:
          if ((iC(e, n), 4 & a))
            if (((e = n.stateNode), null === t))
              try {
                e.componentDidMount();
              } catch (e) {
                oD(n, n.return, e);
              }
            else {
              var r = sp(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(
                  r,
                  t,
                  e.__reactInternalSnapshotBeforeUpdate,
                );
              } catch (e) {
                oD(n, n.return, e);
              }
            }
          (64 & a && s8(n), 512 & a && s9(n, n.return));
          break;
        case 3:
          if ((iC(e, n), 64 & a && null !== (e = n.updateQueue))) {
            if (((t = null), null !== n.child))
              switch (n.child.tag) {
                case 27:
                case 5:
                case 1:
                  t = n.child.stateNode;
              }
            try {
              rR(e, t);
            } catch (e) {
              oD(n, n.return, e);
            }
          }
          break;
        case 27:
          null === t && 4 & a && ii(n);
        case 26:
        case 5:
          (iC(e, n), null === t && 4 & a && it(n), 512 & a && s9(n, n.return));
          break;
        case 12:
        default:
          iC(e, n);
          break;
        case 31:
          (iC(e, n), 4 & a && iy(e, n));
          break;
        case 13:
          (iC(e, n),
            4 & a && ix(e, n),
            64 & a &&
              null !== (e = n.memoizedState) &&
              null !== (e = e.dehydrated) &&
              (function (e, t) {
                var n = e.ownerDocument;
                if ("$~" === e.data) e._reactRetry = t;
                else if ("$?" !== e.data || "loading" !== n.readyState) t();
                else {
                  var a = function () {
                    (t(), n.removeEventListener("DOMContentLoaded", a));
                  };
                  (n.addEventListener("DOMContentLoaded", a),
                    (e._reactRetry = a));
                }
              })(e, (n = oU.bind(null, n))));
          break;
        case 22:
          if (!(a = null !== n.memoizedState || io)) {
            ((t = (null !== t && null !== t.memoizedState) || ic), (r = io));
            var l = ic;
            ((io = a),
              (ic = t) && !l
                ? (function e(t, n, a) {
                    for (
                      a = a && 0 != (8772 & n.subtreeFlags), n = n.child;
                      null !== n;
                    ) {
                      var r = n.alternate,
                        l = t,
                        s = n,
                        i = s.flags;
                      switch (s.tag) {
                        case 0:
                        case 11:
                        case 15:
                          (e(l, s, a), s4(4, s));
                          break;
                        case 1:
                          if (
                            (e(l, s, a),
                            "function" ==
                              typeof (l = (r = s).stateNode).componentDidMount)
                          )
                            try {
                              l.componentDidMount();
                            } catch (e) {
                              oD(r, r.return, e);
                            }
                          if (null !== (l = (r = s).updateQueue)) {
                            var o = r.stateNode;
                            try {
                              var c = l.shared.hiddenCallbacks;
                              if (null !== c)
                                for (
                                  l.shared.hiddenCallbacks = null, l = 0;
                                  l < c.length;
                                  l++
                                )
                                  rq(c[l], o);
                            } catch (e) {
                              oD(r, r.return, e);
                            }
                          }
                          (a && 64 & i && s8(s), s9(s, s.return));
                          break;
                        case 27:
                          ii(s);
                        case 26:
                        case 5:
                          (e(l, s, a),
                            a && null === r && 4 & i && it(s),
                            s9(s, s.return));
                          break;
                        case 12:
                        default:
                          e(l, s, a);
                          break;
                        case 31:
                          (e(l, s, a), a && 4 & i && iy(l, s));
                          break;
                        case 13:
                          (e(l, s, a), a && 4 & i && ix(l, s));
                          break;
                        case 22:
                          (null === s.memoizedState && e(l, s, a),
                            s9(s, s.return));
                        case 30:
                      }
                      n = n.sibling;
                    }
                  })(e, n, 0 != (8772 & n.subtreeFlags))
                : iC(e, n),
              (io = r),
              (ic = l));
          }
        case 30:
      }
    }
    var ih = null,
      ig = !1;
    function ib(e, t, n) {
      for (n = n.child; null !== n;) (iv(e, t, n), (n = n.sibling));
    }
    function iv(e, t, n) {
      if (eh && "function" == typeof eh.onCommitFiberUnmount)
        try {
          eh.onCommitFiberUnmount(ep, n);
        } catch (e) {}
      switch (n.tag) {
        case 26:
          (ic || ie(n, t),
            ib(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode && (n = n.stateNode).parentNode.removeChild(n));
          break;
        case 27:
          ic || ie(n, t);
          var a = ih,
            r = ig;
          (cM(n.type) && ((ih = n.stateNode), (ig = !1)),
            ib(e, t, n),
            cB(n.stateNode),
            (ih = a),
            (ig = r));
          break;
        case 5:
          ic || ie(n, t);
        case 6:
          if (
            ((a = ih),
            (r = ig),
            (ih = null),
            ib(e, t, n),
            (ih = a),
            (ig = r),
            null !== ih)
          )
            if (ig)
              try {
                (9 === ih.nodeType
                  ? ih.body
                  : "HTML" === ih.nodeName
                    ? ih.ownerDocument.body
                    : ih
                ).removeChild(n.stateNode);
              } catch (e) {
                oD(n, t, e);
              }
            else
              try {
                ih.removeChild(n.stateNode);
              } catch (e) {
                oD(n, t, e);
              }
          break;
        case 18:
          null !== ih &&
            (ig
              ? (c_(
                  9 === (e = ih).nodeType
                    ? e.body
                    : "HTML" === e.nodeName
                      ? e.ownerDocument.body
                      : e,
                  n.stateNode,
                ),
                uD(e))
              : c_(ih, n.stateNode));
          break;
        case 4:
          ((a = ih),
            (r = ig),
            (ih = n.stateNode.containerInfo),
            (ig = !0),
            ib(e, t, n),
            (ih = a),
            (ig = r));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          (s6(2, n, t), ic || s6(4, n, t), ib(e, t, n));
          break;
        case 1:
          (ic ||
            (ie(n, t),
            "function" == typeof (a = n.stateNode).componentWillUnmount &&
              s7(n, t, a)),
            ib(e, t, n));
          break;
        case 21:
        default:
          ib(e, t, n);
          break;
        case 22:
          ((ic = (a = ic) || null !== n.memoizedState), ib(e, t, n), (ic = a));
      }
    }
    function iy(e, t) {
      if (
        null === t.memoizedState &&
        null !== (e = t.alternate) &&
        null !== (e = e.memoizedState)
      ) {
        e = e.dehydrated;
        try {
          uD(e);
        } catch (e) {
          oD(t, t.return, e);
        }
      }
    }
    function ix(e, t) {
      if (
        null === t.memoizedState &&
        null !== (e = t.alternate) &&
        null !== (e = e.memoizedState) &&
        null !== (e = e.dehydrated)
      )
        try {
          uD(e);
        } catch (e) {
          oD(t, t.return, e);
        }
    }
    function ik(e, t) {
      var n = (function (e) {
        switch (e.tag) {
          case 31:
          case 13:
          case 19:
            var t = e.stateNode;
            return (null === t && (t = e.stateNode = new id()), t);
          case 22:
            return (
              null === (t = (e = e.stateNode)._retryCache) &&
                (t = e._retryCache = new id()),
              t
            );
          default:
            throw Error(o(435, e.tag));
        }
      })(e);
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t);
          var a = oB.bind(null, e, t);
          t.then(a, a);
        }
      });
    }
    function ij(e, t) {
      var n = t.deletions;
      if (null !== n)
        for (var a = 0; a < n.length; a++) {
          var r = n[a],
            l = e,
            s = t,
            i = s;
          e: for (; null !== i;) {
            switch (i.tag) {
              case 27:
                if (cM(i.type)) {
                  ((ih = i.stateNode), (ig = !1));
                  break e;
                }
                break;
              case 5:
                ((ih = i.stateNode), (ig = !1));
                break e;
              case 3:
              case 4:
                ((ih = i.stateNode.containerInfo), (ig = !0));
                break e;
            }
            i = i.return;
          }
          if (null === ih) throw Error(o(160));
          (iv(l, s, r),
            (ih = null),
            (ig = !1),
            null !== (l = r.alternate) && (l.return = null),
            (r.return = null));
        }
      if (13886 & t.subtreeFlags)
        for (t = t.child; null !== t;) (iN(t, e), (t = t.sibling));
    }
    var iw = null;
    function iN(e, t) {
      var n = e.alternate,
        a = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (ij(t, e),
            iS(e),
            4 & a && (s6(3, e, e.return), s4(3, e), s6(5, e, e.return)));
          break;
        case 1:
          (ij(t, e),
            iS(e),
            512 & a && (ic || null === n || ie(n, n.return)),
            64 & a &&
              io &&
              null !== (e = e.updateQueue) &&
              null !== (a = e.callbacks) &&
              ((n = e.shared.hiddenCallbacks),
              (e.shared.hiddenCallbacks = null === n ? a : n.concat(a))));
          break;
        case 26:
          var r = iw;
          if (
            (ij(t, e),
            iS(e),
            512 & a && (ic || null === n || ie(n, n.return)),
            4 & a)
          ) {
            var l = null !== n ? n.memoizedState : null;
            if (((a = e.memoizedState), null === n))
              if (null === a)
                if (null === e.stateNode) {
                  e: {
                    ((a = e.type),
                      (n = e.memoizedProps),
                      (r = r.ownerDocument || r));
                    t: switch (a) {
                      case "title":
                        ((!(l = r.getElementsByTagName("title")[0]) ||
                          l[eQ] ||
                          l[eR] ||
                          "http://www.w3.org/2000/svg" === l.namespaceURI ||
                          l.hasAttribute("itemprop")) &&
                          ((l = r.createElement(a)),
                          r.head.insertBefore(
                            l,
                            r.querySelector("head > title"),
                          )),
                          cb(l, a, n),
                          (l[eR] = e),
                          eY(l),
                          (a = l));
                        break e;
                      case "link":
                        var s = c8("link", "href", r).get(a + (n.href || ""));
                        if (s) {
                          for (var i = 0; i < s.length; i++)
                            if (
                              (l = s[i]).getAttribute("href") ===
                                (null == n.href || "" === n.href
                                  ? null
                                  : n.href) &&
                              l.getAttribute("rel") ===
                                (null == n.rel ? null : n.rel) &&
                              l.getAttribute("title") ===
                                (null == n.title ? null : n.title) &&
                              l.getAttribute("crossorigin") ===
                                (null == n.crossOrigin ? null : n.crossOrigin)
                            ) {
                              s.splice(i, 1);
                              break t;
                            }
                        }
                        (cb((l = r.createElement(a)), a, n),
                          r.head.appendChild(l));
                        break;
                      case "meta":
                        if (
                          (s = c8("meta", "content", r).get(
                            a + (n.content || ""),
                          ))
                        ) {
                          for (i = 0; i < s.length; i++)
                            if (
                              (l = s[i]).getAttribute("content") ===
                                (null == n.content ? null : "" + n.content) &&
                              l.getAttribute("name") ===
                                (null == n.name ? null : n.name) &&
                              l.getAttribute("property") ===
                                (null == n.property ? null : n.property) &&
                              l.getAttribute("http-equiv") ===
                                (null == n.httpEquiv ? null : n.httpEquiv) &&
                              l.getAttribute("charset") ===
                                (null == n.charSet ? null : n.charSet)
                            ) {
                              s.splice(i, 1);
                              break t;
                            }
                        }
                        (cb((l = r.createElement(a)), a, n),
                          r.head.appendChild(l));
                        break;
                      default:
                        throw Error(o(468, a));
                    }
                    ((l[eR] = e), eY(l), (a = l));
                  }
                  e.stateNode = a;
                } else c7(r, e.type, e.stateNode);
              else e.stateNode = c2(r, a, e.memoizedProps);
            else
              l !== a
                ? (null === l
                    ? null !== n.stateNode &&
                      (n = n.stateNode).parentNode.removeChild(n)
                    : l.count--,
                  null === a
                    ? c7(r, e.type, e.stateNode)
                    : c2(r, a, e.memoizedProps))
                : null === a &&
                  null !== e.stateNode &&
                  ia(e, e.memoizedProps, n.memoizedProps);
          }
          break;
        case 27:
          (ij(t, e),
            iS(e),
            512 & a && (ic || null === n || ie(n, n.return)),
            null !== n && 4 & a && ia(e, e.memoizedProps, n.memoizedProps));
          break;
        case 5:
          if (
            (ij(t, e),
            iS(e),
            512 & a && (ic || null === n || ie(n, n.return)),
            32 & e.flags)
          ) {
            r = e.stateNode;
            try {
              tu(r, "");
            } catch (t) {
              oD(e, e.return, t);
            }
          }
          (4 & a &&
            null != e.stateNode &&
            ((r = e.memoizedProps), ia(e, r, null !== n ? n.memoizedProps : r)),
            1024 & a && (iu = !0));
          break;
        case 6:
          if ((ij(t, e), iS(e), 4 & a)) {
            if (null === e.stateNode) throw Error(o(162));
            ((a = e.memoizedProps), (n = e.stateNode));
            try {
              n.nodeValue = a;
            } catch (t) {
              oD(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            ((c6 = null),
            (r = iw),
            (iw = cW(t.containerInfo)),
            ij(t, e),
            (iw = r),
            iS(e),
            4 & a && null !== n && n.memoizedState.isDehydrated)
          )
            try {
              uD(t.containerInfo);
            } catch (t) {
              oD(e, e.return, t);
            }
          iu &&
            ((iu = !1),
            (function e(t) {
              if (1024 & t.subtreeFlags)
                for (t = t.child; null !== t;) {
                  var n = t;
                  (e(n),
                    5 === n.tag && 1024 & n.flags && n.stateNode.reset(),
                    (t = t.sibling));
                }
            })(e));
          break;
        case 4:
          ((a = iw),
            (iw = cW(e.stateNode.containerInfo)),
            ij(t, e),
            iS(e),
            (iw = a));
          break;
        case 12:
        default:
          (ij(t, e), iS(e));
          break;
        case 31:
        case 19:
          (ij(t, e),
            iS(e),
            4 & a &&
              null !== (a = e.updateQueue) &&
              ((e.updateQueue = null), ik(e, a)));
          break;
        case 13:
          (ij(t, e),
            iS(e),
            8192 & e.child.flags &&
              (null !== e.memoizedState) !=
                (null !== n && null !== n.memoizedState) &&
              (i6 = el()),
            4 & a &&
              null !== (a = e.updateQueue) &&
              ((e.updateQueue = null), ik(e, a)));
          break;
        case 22:
          r = null !== e.memoizedState;
          var c = null !== n && null !== n.memoizedState,
            u = io,
            d = ic;
          if (
            ((io = u || r),
            (ic = d || c),
            ij(t, e),
            (ic = d),
            (io = u),
            iS(e),
            8192 & a)
          )
            e: for (
              (t = e.stateNode)._visibility = r
                ? -2 & t._visibility
                : 1 | t._visibility,
                r &&
                  (null === n ||
                    c ||
                    io ||
                    ic ||
                    (function e(t) {
                      for (t = t.child; null !== t;) {
                        var n = t;
                        switch (n.tag) {
                          case 0:
                          case 11:
                          case 14:
                          case 15:
                            (s6(4, n, n.return), e(n));
                            break;
                          case 1:
                            ie(n, n.return);
                            var a = n.stateNode;
                            ("function" == typeof a.componentWillUnmount &&
                              s7(n, n.return, a),
                              e(n));
                            break;
                          case 27:
                            cB(n.stateNode);
                          case 26:
                          case 5:
                            (ie(n, n.return), e(n));
                            break;
                          case 22:
                            null === n.memoizedState && e(n);
                            break;
                          default:
                            e(n);
                        }
                        t = t.sibling;
                      }
                    })(e)),
                n = null,
                t = e;
              ;
            ) {
              if (5 === t.tag || 26 === t.tag) {
                if (null === n) {
                  c = n = t;
                  try {
                    if (((l = c.stateNode), r))
                      ((s = l.style),
                        "function" == typeof s.setProperty
                          ? s.setProperty("display", "none", "important")
                          : (s.display = "none"));
                    else {
                      i = c.stateNode;
                      var f = c.memoizedProps.style,
                        m =
                          null != f && f.hasOwnProperty("display")
                            ? f.display
                            : null;
                      i.style.display =
                        null == m || "boolean" == typeof m
                          ? ""
                          : ("" + m).trim();
                    }
                  } catch (e) {
                    oD(c, c.return, e);
                  }
                }
              } else if (6 === t.tag) {
                if (null === n) {
                  c = t;
                  try {
                    c.stateNode.nodeValue = r ? "" : c.memoizedProps;
                  } catch (e) {
                    oD(c, c.return, e);
                  }
                }
              } else if (18 === t.tag) {
                if (null === n) {
                  c = t;
                  try {
                    var p = c.stateNode;
                    r ? cP(p, !0) : cP(c.stateNode, !1);
                  } catch (e) {
                    oD(c, c.return, e);
                  }
                }
              } else if (
                ((22 !== t.tag && 23 !== t.tag) ||
                  null === t.memoizedState ||
                  t === e) &&
                null !== t.child
              ) {
                ((t.child.return = t), (t = t.child));
                continue;
              }
              if (t === e) break;
              for (; null === t.sibling;) {
                if (null === t.return || t.return === e) break e;
                (n === t && (n = null), (t = t.return));
              }
              (n === t && (n = null),
                (t.sibling.return = t.return),
                (t = t.sibling));
            }
          4 & a &&
            null !== (a = e.updateQueue) &&
            null !== (n = a.retryQueue) &&
            ((a.retryQueue = null), ik(e, n));
        case 30:
        case 21:
      }
    }
    function iS(e) {
      var t = e.flags;
      if (2 & t) {
        try {
          for (var n, a = e.return; null !== a;) {
            if (ir(a)) {
              n = a;
              break;
            }
            a = a.return;
          }
          if (null == n) throw Error(o(160));
          switch (n.tag) {
            case 27:
              var r = n.stateNode,
                l = il(e);
              is(e, l, r);
              break;
            case 5:
              var s = n.stateNode;
              32 & n.flags && (tu(s, ""), (n.flags &= -33));
              var i = il(e);
              is(e, i, s);
              break;
            case 3:
            case 4:
              var c = n.stateNode.containerInfo,
                u = il(e);
              !(function e(t, n, a) {
                var r = t.tag;
                if (5 === r || 6 === r)
                  ((t = t.stateNode),
                    n
                      ? (9 === a.nodeType
                          ? a.body
                          : "HTML" === a.nodeName
                            ? a.ownerDocument.body
                            : a
                        ).insertBefore(t, n)
                      : ((n =
                          9 === a.nodeType
                            ? a.body
                            : "HTML" === a.nodeName
                              ? a.ownerDocument.body
                              : a).appendChild(t),
                        null != (a = a._reactRootContainer) ||
                          null !== n.onclick ||
                          (n.onclick = tv)));
                else if (
                  4 !== r &&
                  (27 === r && cM(t.type) && ((a = t.stateNode), (n = null)),
                  null !== (t = t.child))
                )
                  for (e(t, n, a), t = t.sibling; null !== t;)
                    (e(t, n, a), (t = t.sibling));
              })(e, u, c);
              break;
            default:
              throw Error(o(161));
          }
        } catch (t) {
          oD(e, e.return, t);
        }
        e.flags &= -3;
      }
      4096 & t && (e.flags &= -4097);
    }
    function iC(e, t) {
      if (8772 & t.subtreeFlags)
        for (t = t.child; null !== t;) (ip(e, t.alternate, t), (t = t.sibling));
    }
    function iE(e, t) {
      var n = null;
      (null !== e &&
        null !== e.memoizedState &&
        null !== e.memoizedState.cachePool &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        null !== t.memoizedState &&
          null !== t.memoizedState.cachePool &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (null != e && e.refCount++, null != n && a8(n)));
    }
    function i$(e, t) {
      ((e = null),
        null !== t.alternate && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache) !== e &&
          (t.refCount++, null != e && a8(e)));
    }
    function iz(e, t, n, a) {
      if (10256 & t.subtreeFlags)
        for (t = t.child; null !== t;) (iT(e, t, n, a), (t = t.sibling));
    }
    function iT(e, t, n, a) {
      var r = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (iz(e, t, n, a), 2048 & r && s4(9, t));
          break;
        case 1:
        case 31:
        case 13:
        default:
          iz(e, t, n, a);
          break;
        case 3:
          (iz(e, t, n, a),
            2048 & r &&
              ((e = null),
              null !== t.alternate && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache) !== e &&
                (t.refCount++, null != e && a8(e))));
          break;
        case 12:
          if (2048 & r) {
            (iz(e, t, n, a), (e = t.stateNode));
            try {
              var l = t.memoizedProps,
                s = l.id,
                i = l.onPostCommit;
              "function" == typeof i &&
                i(
                  s,
                  null === t.alternate ? "mount" : "update",
                  e.passiveEffectDuration,
                  -0,
                );
            } catch (e) {
              oD(t, t.return, e);
            }
          } else iz(e, t, n, a);
          break;
        case 23:
          break;
        case 22:
          ((l = t.stateNode),
            (s = t.alternate),
            null !== t.memoizedState
              ? 2 & l._visibility
                ? iz(e, t, n, a)
                : iM(e, t)
              : 2 & l._visibility
                ? iz(e, t, n, a)
                : ((l._visibility |= 2),
                  (function e(t, n, a, r, l) {
                    for (
                      l = l && 0 != (10256 & n.subtreeFlags), n = n.child;
                      null !== n;
                    ) {
                      var s = n,
                        i = s.flags;
                      switch (s.tag) {
                        case 0:
                        case 11:
                        case 15:
                          (e(t, s, a, r, l), s4(8, s));
                          break;
                        case 23:
                          break;
                        case 22:
                          var o = s.stateNode;
                          (null !== s.memoizedState
                            ? 2 & o._visibility
                              ? e(t, s, a, r, l)
                              : iM(t, s)
                            : ((o._visibility |= 2), e(t, s, a, r, l)),
                            l && 2048 & i && iE(s.alternate, s));
                          break;
                        case 24:
                          (e(t, s, a, r, l),
                            l && 2048 & i && i$(s.alternate, s));
                          break;
                        default:
                          e(t, s, a, r, l);
                      }
                      n = n.sibling;
                    }
                  })(e, t, n, a, 0 != (10256 & t.subtreeFlags))),
            2048 & r && iE(s, t));
          break;
        case 24:
          (iz(e, t, n, a), 2048 & r && i$(t.alternate, t));
      }
    }
    function iM(e, t) {
      if (10256 & t.subtreeFlags)
        for (t = t.child; null !== t;) {
          var n = t,
            a = n.flags;
          switch (n.tag) {
            case 22:
              (iM(e, n), 2048 & a && iE(n.alternate, n));
              break;
            case 24:
              (iM(e, n), 2048 & a && i$(n.alternate, n));
              break;
            default:
              iM(e, n);
          }
          t = t.sibling;
        }
    }
    var i_ = 8192;
    function iP(e, t, n) {
      if (e.subtreeFlags & i_)
        for (e = e.child; null !== e;) (iA(e, t, n), (e = e.sibling));
    }
    function iA(e, t, n) {
      switch (e.tag) {
        case 26:
          (iP(e, t, n),
            e.flags & i_ &&
              null !== e.memoizedState &&
              (function (e, t, n, a) {
                if (
                  "stylesheet" === n.type &&
                  ("string" != typeof a.media ||
                    !1 !== matchMedia(a.media).matches) &&
                  0 == (4 & n.state.loading)
                ) {
                  if (null === n.instance) {
                    var r = cX(a.href),
                      l = t.querySelector(cJ(r));
                    if (l) {
                      (null !== (t = l._p) &&
                        "object" == typeof t &&
                        "function" == typeof t.then &&
                        (e.count++, (e = ut.bind(e)), t.then(e, e)),
                        (n.state.loading |= 4),
                        (n.instance = l),
                        eY(l));
                      return;
                    }
                    ((l = t.ownerDocument || t),
                      (a = cZ(a)),
                      (r = cQ.get(r)) && c5(a, r),
                      eY((l = l.createElement("link"))));
                    var s = l;
                    ((s._p = new Promise(function (e, t) {
                      ((s.onload = e), (s.onerror = t));
                    })),
                      cb(l, "link", a),
                      (n.instance = l));
                  }
                  (null === e.stylesheets && (e.stylesheets = new Map()),
                    e.stylesheets.set(n, t),
                    (t = n.state.preload) &&
                      0 == (3 & n.state.loading) &&
                      (e.count++,
                      (n = ut.bind(e)),
                      t.addEventListener("load", n),
                      t.addEventListener("error", n)));
                }
              })(n, iw, e.memoizedState, e.memoizedProps));
          break;
        case 5:
        default:
          iP(e, t, n);
          break;
        case 3:
        case 4:
          var a = iw;
          ((iw = cW(e.stateNode.containerInfo)), iP(e, t, n), (iw = a));
          break;
        case 22:
          null === e.memoizedState &&
            (null !== (a = e.alternate) && null !== a.memoizedState
              ? ((a = i_), (i_ = 0x1000000), iP(e, t, n), (i_ = a))
              : iP(e, t, n));
      }
    }
    function iL(e) {
      var t = e.alternate;
      if (null !== t && null !== (e = t.child)) {
        t.child = null;
        do ((t = e.sibling), (e.sibling = null), (e = t));
        while (null !== e);
      }
    }
    function iq(e) {
      var t = e.deletions;
      if (0 != (16 & e.flags)) {
        if (null !== t)
          for (var n = 0; n < t.length; n++) {
            var a = t[n];
            ((im = a), iD(a, e));
          }
        iL(e);
      }
      if (10256 & e.subtreeFlags)
        for (e = e.child; null !== e;) (iR(e), (e = e.sibling));
    }
    function iR(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (iq(e), 2048 & e.flags && s6(9, e, e.return));
          break;
        case 3:
        case 12:
        default:
          iq(e);
          break;
        case 22:
          var t = e.stateNode;
          null !== e.memoizedState &&
          2 & t._visibility &&
          (null === e.return || 13 !== e.return.tag)
            ? ((t._visibility &= -3),
              (function e(t) {
                var n = t.deletions;
                if (0 != (16 & t.flags)) {
                  if (null !== n)
                    for (var a = 0; a < n.length; a++) {
                      var r = n[a];
                      ((im = r), iD(r, t));
                    }
                  iL(t);
                }
                for (t = t.child; null !== t;) {
                  switch ((n = t).tag) {
                    case 0:
                    case 11:
                    case 15:
                      (s6(8, n, n.return), e(n));
                      break;
                    case 22:
                      2 & (a = n.stateNode)._visibility &&
                        ((a._visibility &= -3), e(n));
                      break;
                    default:
                      e(n);
                  }
                  t = t.sibling;
                }
              })(e))
            : iq(e);
      }
    }
    function iD(e, t) {
      for (; null !== im;) {
        var n = im;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            s6(8, n, t);
            break;
          case 23:
          case 22:
            if (
              null !== n.memoizedState &&
              null !== n.memoizedState.cachePool
            ) {
              var a = n.memoizedState.cachePool.pool;
              null != a && a.refCount++;
            }
            break;
          case 24:
            a8(n.memoizedState.cache);
        }
        if (null !== (a = n.child)) ((a.return = n), (im = a));
        else
          for (n = e; null !== im;) {
            var r = (a = im).sibling,
              l = a.return;
            if (
              (!(function e(t) {
                var n = t.alternate;
                (null !== n && ((t.alternate = null), e(n)),
                  (t.child = null),
                  (t.deletions = null),
                  (t.sibling = null),
                  5 === t.tag && null !== (n = t.stateNode) && eH(n),
                  (t.stateNode = null),
                  (t.return = null),
                  (t.dependencies = null),
                  (t.memoizedProps = null),
                  (t.memoizedState = null),
                  (t.pendingProps = null),
                  (t.stateNode = null),
                  (t.updateQueue = null));
              })(a),
              a === n)
            ) {
              im = null;
              break;
            }
            if (null !== r) {
              ((r.return = l), (im = r));
              break;
            }
            im = l;
          }
      }
    }
    var iF = {
        getCacheForType: function (e) {
          var t = aZ(a4),
            n = t.data.get(e);
          return (void 0 === n && ((n = e()), t.data.set(e, n)), n);
        },
        cacheSignal: function () {
          return aZ(a4).controller.signal;
        },
      },
      iO = "function" == typeof WeakMap ? WeakMap : Map,
      iI = 0,
      iU = null,
      iB = null,
      iQ = 0,
      iH = 0,
      iW = null,
      iV = !1,
      iK = !1,
      iG = !1,
      iY = 0,
      iX = 0,
      iJ = 0,
      iZ = 0,
      i0 = 0,
      i1 = 0,
      i2 = 0,
      i3 = null,
      i5 = null,
      i4 = !1,
      i6 = 0,
      i8 = 0,
      i7 = 1 / 0,
      i9 = null,
      oe = null,
      ot = 0,
      on = null,
      oa = null,
      or = 0,
      ol = 0,
      os = null,
      oi = null,
      oo = 0,
      oc = null;
    function ou() {
      return 0 != (2 & iI) && 0 !== iQ ? iQ & -iQ : null !== A.T ? o3() : eA();
    }
    function od() {
      if (0 === i1)
        if (0 == (0x20000000 & iQ) || a_) {
          var e = ek;
          (0 == (3932160 & (ek <<= 1)) && (ek = 262144), (i1 = e));
        } else i1 = 0x20000000;
      return (null !== (e = rB.current) && (e.flags |= 32), i1);
    }
    function of(e, t, n) {
      (((e === iU && (2 === iH || 9 === iH)) ||
        null !== e.cancelPendingCommit) &&
        (ov(e, 0), oh(e, iQ, i1, !1)),
        e$(e, n),
        (0 == (2 & iI) || e !== iU) &&
          (e === iU &&
            (0 == (2 & iI) && (iZ |= n), 4 === iX && oh(e, iQ, i1, !1)),
          oY(e)));
    }
    function om(e, t, n) {
      if (0 != (6 & iI)) throw Error(o(327));
      for (
        var a = (!n && 0 == (127 & t) && 0 == (t & e.expiredLanes)) || eS(e, t),
          r = a
            ? (function (e, t) {
                var n = iI;
                iI |= 2;
                var a = ok(),
                  r = oj();
                iU !== e || iQ !== t
                  ? ((i9 = null), (i7 = el() + 500), ov(e, t))
                  : (iK = eS(e, t));
                e: for (;;)
                  try {
                    if (0 !== iH && null !== iB) {
                      t = iB;
                      var l = iW;
                      t: switch (iH) {
                        case 1:
                          ((iH = 0), (iW = null), oE(e, t, l, 1));
                          break;
                        case 2:
                        case 9:
                          if (rf(l)) {
                            ((iH = 0), (iW = null), oC(t));
                            break;
                          }
                          ((t = function () {
                            ((2 !== iH && 9 !== iH) || iU !== e || (iH = 7),
                              oY(e));
                          }),
                            l.then(t, t));
                          break e;
                        case 3:
                          iH = 7;
                          break e;
                        case 4:
                          iH = 5;
                          break e;
                        case 7:
                          rf(l)
                            ? ((iH = 0), (iW = null), oC(t))
                            : ((iH = 0), (iW = null), oE(e, t, l, 7));
                          break;
                        case 5:
                          var s = null;
                          switch (iB.tag) {
                            case 26:
                              s = iB.memoizedState;
                            case 5:
                            case 27:
                              var i = iB;
                              if (s ? c9(s) : i.stateNode.complete) {
                                ((iH = 0), (iW = null));
                                var c = i.sibling;
                                if (null !== c) iB = c;
                                else {
                                  var u = i.return;
                                  null !== u ? ((iB = u), o$(u)) : (iB = null);
                                }
                                break t;
                              }
                          }
                          ((iH = 0), (iW = null), oE(e, t, l, 5));
                          break;
                        case 6:
                          ((iH = 0), (iW = null), oE(e, t, l, 6));
                          break;
                        case 8:
                          (ob(), (iX = 6));
                          break e;
                        default:
                          throw Error(o(462));
                      }
                    }
                    for (; null !== iB && !ea();) oS(iB);
                    break;
                  } catch (t) {
                    oy(e, t);
                  }
                return ((aH = aQ = null),
                (A.H = a),
                (A.A = r),
                (iI = n),
                null !== iB)
                  ? 0
                  : ((iU = null), (iQ = 0), n8(), iX);
              })(e, t)
            : oN(e, t, !0),
          l = a;
        ;
      ) {
        if (0 === r) iK && !a && oh(e, t, 0, !1);
        else {
          if (
            ((n = e.current.alternate),
            l &&
              !(function (e) {
                for (var t = e; ;) {
                  var n = t.tag;
                  if (
                    (0 === n || 11 === n || 15 === n) &&
                    16384 & t.flags &&
                    null !== (n = t.updateQueue) &&
                    null !== (n = n.stores)
                  )
                    for (var a = 0; a < n.length; a++) {
                      var r = n[a],
                        l = r.getSnapshot;
                      r = r.value;
                      try {
                        if (!nT(l(), r)) return !1;
                      } catch (e) {
                        return !1;
                      }
                    }
                  if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                    ((n.return = t), (t = n));
                  else {
                    if (t === e) break;
                    for (; null === t.sibling;) {
                      if (null === t.return || t.return === e) return !0;
                      t = t.return;
                    }
                    ((t.sibling.return = t.return), (t = t.sibling));
                  }
                }
                return !0;
              })(n))
          ) {
            ((r = oN(e, t, !1)), (l = !1));
            continue;
          }
          if (2 === r) {
            if (((l = t), e.errorRecoveryDisabledLanes & l)) var s = 0;
            else
              s =
                0 != (s = -0x20000001 & e.pendingLanes)
                  ? s
                  : 0x20000000 & s
                    ? 0x20000000
                    : 0;
            if (0 !== s) {
              t = s;
              e: {
                r = i3;
                var i = e.current.memoizedState.isDehydrated;
                if ((i && (ov(e, s).flags |= 256), 2 !== (s = oN(e, s, !1)))) {
                  if (iG && !i) {
                    ((e.errorRecoveryDisabledLanes |= l), (iZ |= l), (r = 4));
                    break e;
                  }
                  ((l = i5),
                    (i5 = r),
                    null !== l &&
                      (null === i5 ? (i5 = l) : i5.push.apply(i5, l)));
                }
                r = s;
              }
              if (((l = !1), 2 !== r)) continue;
            }
          }
          if (1 === r) {
            (ov(e, 0), oh(e, t, 0, !0));
            break;
          }
          e: {
            switch (((a = e), (l = r))) {
              case 0:
              case 1:
                throw Error(o(345));
              case 4:
                if ((4194048 & t) !== t) break;
              case 6:
                oh(a, t, i1, !iV);
                break e;
              case 2:
                i5 = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(o(329));
            }
            if ((0x3c00000 & t) === t && 10 < (r = i6 + 300 - el())) {
              if ((oh(a, t, i1, !iV), 0 !== eN(a, 0, !0))) break e;
              ((or = t),
                (a.timeoutHandle = cC(
                  op.bind(
                    null,
                    a,
                    n,
                    i5,
                    i9,
                    i4,
                    t,
                    i1,
                    iZ,
                    i2,
                    iV,
                    l,
                    "Throttled",
                    -0,
                    0,
                  ),
                  r,
                )));
              break e;
            }
            op(a, n, i5, i9, i4, t, i1, iZ, i2, iV, l, null, -0, 0);
          }
        }
        break;
      }
      oY(e);
    }
    function op(e, t, n, a, r, l, s, i, o, c, u, d, f, m) {
      if (
        ((e.timeoutHandle = -1),
        8192 & (d = t.subtreeFlags) || 0x1002000 == (0x1002000 & d))
      ) {
        iA(
          t,
          l,
          (d = {
            stylesheets: null,
            count: 0,
            imgCount: 0,
            imgBytes: 0,
            suspenseyImages: [],
            waitingForImages: !0,
            waitingForViewTransition: !1,
            unsuspend: tv,
          }),
        );
        var p,
          h,
          g =
            (0x3c00000 & l) === l
              ? i6 - el()
              : (4194048 & l) === l
                ? i8 - el()
                : 0;
        if (
          null !==
          ((p = d),
          (h = g),
          p.stylesheets && 0 === p.count && ua(p, p.stylesheets),
          (g =
            0 < p.count || 0 < p.imgCount
              ? function (e) {
                  var t = setTimeout(function () {
                    if ((p.stylesheets && ua(p, p.stylesheets), p.unsuspend)) {
                      var e = p.unsuspend;
                      ((p.unsuspend = null), e());
                    }
                  }, 6e4 + h);
                  0 < p.imgBytes &&
                    0 === ue &&
                    (ue =
                      62500 *
                      (function () {
                        if ("function" == typeof performance.getEntriesByType) {
                          for (
                            var e = 0,
                              t = 0,
                              n = performance.getEntriesByType("resource"),
                              a = 0;
                            a < n.length;
                            a++
                          ) {
                            var r = n[a],
                              l = r.transferSize,
                              s = r.initiatorType,
                              i = r.duration;
                            if (l && i && cv(s)) {
                              for (
                                s = 0, i = r.responseEnd, a += 1;
                                a < n.length;
                                a++
                              ) {
                                var o = n[a],
                                  c = o.startTime;
                                if (c > i) break;
                                var u = o.transferSize,
                                  d = o.initiatorType;
                                u &&
                                  cv(d) &&
                                  (s +=
                                    u *
                                    ((o = o.responseEnd) < i
                                      ? 1
                                      : (i - c) / (o - c)));
                              }
                              if (
                                (--a,
                                (t += (8 * (l + s)) / (r.duration / 1e3)),
                                10 < ++e)
                              )
                                break;
                            }
                          }
                          if (0 < e) return t / e / 1e6;
                        }
                        return navigator.connection &&
                          "number" == typeof (e = navigator.connection.downlink)
                          ? e
                          : 5;
                      })());
                  var n = setTimeout(
                    function () {
                      if (
                        ((p.waitingForImages = !1),
                        0 === p.count &&
                          (p.stylesheets && ua(p, p.stylesheets), p.unsuspend))
                      ) {
                        var e = p.unsuspend;
                        ((p.unsuspend = null), e());
                      }
                    },
                    (p.imgBytes > ue ? 50 : 800) + h,
                  );
                  return (
                    (p.unsuspend = e),
                    function () {
                      ((p.unsuspend = null), clearTimeout(t), clearTimeout(n));
                    }
                  );
                }
              : null))
        ) {
          ((or = l),
            (e.cancelPendingCommit = g(
              oT.bind(null, e, t, l, n, a, r, s, i, o, u, d, null, f, m),
            )),
            oh(e, l, s, !c));
          return;
        }
      }
      oT(e, t, l, n, a, r, s, i, o);
    }
    function oh(e, t, n, a) {
      ((t &= ~i0),
        (t &= ~iZ),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        a && (e.warmLanes |= t),
        (a = e.expirationTimes));
      for (var r = t; 0 < r;) {
        var l = 31 - eb(r),
          s = 1 << l;
        ((a[l] = -1), (r &= ~s));
      }
      0 !== n && ez(e, n, t);
    }
    function og() {
      return 0 != (6 & iI) || (oX(0, !1), !1);
    }
    function ob() {
      if (null !== iB) {
        if (0 === iH) var e = iB.return;
        else
          ((e = iB), (aH = aQ = null), li(e), (rv = null), (ry = 0), (e = iB));
        for (; null !== e;) (s5(e.alternate, e), (e = e.return));
        iB = null;
      }
    }
    function ov(e, t) {
      var n = e.timeoutHandle;
      (-1 !== n && ((e.timeoutHandle = -1), cE(n)),
        null !== (n = e.cancelPendingCommit) &&
          ((e.cancelPendingCommit = null), n()),
        (or = 0),
        ob(),
        (iU = e),
        (iB = n = ai(e.current, null)),
        (iQ = t),
        (iH = 0),
        (iW = null),
        (iV = !1),
        (iK = eS(e, t)),
        (iG = !1),
        (i2 = i1 = i0 = iZ = iJ = iX = 0),
        (i5 = i3 = null),
        (i4 = !1),
        0 != (8 & t) && (t |= 32 & t));
      var a = e.entangledLanes;
      if (0 !== a)
        for (e = e.entanglements, a &= t; 0 < a;) {
          var r = 31 - eb(a),
            l = 1 << r;
          ((t |= e[r]), (a &= ~l));
        }
      return ((iY = t), n8(), n);
    }
    function oy(e, t) {
      ((rZ = null),
        (A.H = ss),
        t === ro || t === ru
          ? ((t = rg()), (iH = 3))
          : t === rc
            ? ((t = rg()), (iH = 4))
            : (iH =
                t === sw
                  ? 8
                  : null !== t &&
                      "object" == typeof t &&
                      "function" == typeof t.then
                    ? 6
                    : 1),
        (iW = t),
        null === iB && ((iX = 1), sv(e, ah(t, e.current))));
    }
    function ox() {
      var e = rB.current;
      return (
        null === e ||
        ((4194048 & iQ) === iQ
          ? null === rQ
          : ((0x3c00000 & iQ) === iQ || 0 != (0x20000000 & iQ)) && e === rQ)
      );
    }
    function ok() {
      var e = A.H;
      return ((A.H = ss), null === e ? ss : e);
    }
    function oj() {
      var e = A.A;
      return ((A.A = iF), e);
    }
    function ow() {
      ((iX = 4),
        iV || ((4194048 & iQ) !== iQ && null !== rB.current) || (iK = !0),
        (0 == (0x7ffffff & iJ) && 0 == (0x7ffffff & iZ)) ||
          null === iU ||
          oh(iU, iQ, i1, !1));
    }
    function oN(e, t, n) {
      var a = iI;
      iI |= 2;
      var r = ok(),
        l = oj();
      ((iU !== e || iQ !== t) && ((i9 = null), ov(e, t)), (t = !1));
      var s = iX;
      e: for (;;)
        try {
          if (0 !== iH && null !== iB) {
            var i = iB,
              o = iW;
            switch (iH) {
              case 8:
                (ob(), (s = 6));
                break e;
              case 3:
              case 2:
              case 9:
              case 6:
                null === rB.current && (t = !0);
                var c = iH;
                if (((iH = 0), (iW = null), oE(e, i, o, c), n && iK)) {
                  s = 0;
                  break e;
                }
                break;
              default:
                ((c = iH), (iH = 0), (iW = null), oE(e, i, o, c));
            }
          }
          ((function () {
            for (; null !== iB;) oS(iB);
          })(),
            (s = iX));
          break;
        } catch (t) {
          oy(e, t);
        }
      return (
        t && e.shellSuspendCounter++,
        (aH = aQ = null),
        (iI = a),
        (A.H = r),
        (A.A = l),
        null === iB && ((iU = null), (iQ = 0), n8()),
        s
      );
    }
    function oS(e) {
      var t = sX(e.alternate, e, iY);
      ((e.memoizedProps = e.pendingProps), null === t ? o$(e) : (iB = t));
    }
    function oC(e) {
      var t = e,
        n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = sq(n, t, t.pendingProps, t.type, void 0, iQ);
          break;
        case 11:
          t = sq(n, t, t.pendingProps, t.type.render, t.ref, iQ);
          break;
        case 5:
          li(t);
        default:
          (s5(n, t), (t = sX(n, (t = iB = ao(t, iY)), iY)));
      }
      ((e.memoizedProps = e.pendingProps), null === t ? o$(e) : (iB = t));
    }
    function oE(e, t, n, a) {
      ((aH = aQ = null), li(t), (rv = null), (ry = 0));
      var r = t.return;
      try {
        if (
          (function (e, t, n, a, r) {
            if (
              ((n.flags |= 32768),
              null !== a && "object" == typeof a && "function" == typeof a.then)
            ) {
              if (
                (null !== (t = n.alternate) && aY(t, n, r, !0),
                null !== (n = rB.current))
              ) {
                switch (n.tag) {
                  case 31:
                  case 13:
                    return (
                      null === rQ
                        ? ow()
                        : null === n.alternate && 0 === iX && (iX = 3),
                      (n.flags &= -257),
                      (n.flags |= 65536),
                      (n.lanes = r),
                      a === rd
                        ? (n.flags |= 16384)
                        : (null === (t = n.updateQueue)
                            ? (n.updateQueue = new Set([a]))
                            : t.add(a),
                          oF(e, a, r)),
                      !1
                    );
                  case 22:
                    return (
                      (n.flags |= 65536),
                      a === rd
                        ? (n.flags |= 16384)
                        : (null === (t = n.updateQueue)
                            ? ((t = {
                                transitions: null,
                                markerInstances: null,
                                retryQueue: new Set([a]),
                              }),
                              (n.updateQueue = t))
                            : null === (n = t.retryQueue)
                              ? (t.retryQueue = new Set([a]))
                              : n.add(a),
                          oF(e, a, r)),
                      !1
                    );
                }
                throw Error(o(435, n.tag));
              }
              return (oF(e, a, r), ow(), !1);
            }
            if (a_)
              return (
                null !== (t = rB.current)
                  ? (0 == (65536 & t.flags) && (t.flags |= 256),
                    (t.flags |= 65536),
                    (t.lanes = r),
                    a !== aL && aU(ah((e = Error(o(422), { cause: a })), n)))
                  : (a !== aL && aU(ah((t = Error(o(423), { cause: a })), n)),
                    (e = e.current.alternate),
                    (e.flags |= 65536),
                    (r &= -r),
                    (e.lanes |= r),
                    (a = ah(a, n)),
                    (r = sx(e.stateNode, a, r)),
                    r_(e, r),
                    4 !== iX && (iX = 2)),
                !1
              );
            var l = Error(o(520), { cause: a });
            if (
              ((l = ah(l, n)),
              null === i3 ? (i3 = [l]) : i3.push(l),
              4 !== iX && (iX = 2),
              null === t)
            )
              return !0;
            ((a = ah(a, n)), (n = t));
            do {
              switch (n.tag) {
                case 3:
                  return (
                    (n.flags |= 65536),
                    (e = r & -r),
                    (n.lanes |= e),
                    (e = sx(n.stateNode, a, e)),
                    r_(n, e),
                    !1
                  );
                case 1:
                  if (
                    ((t = n.type),
                    (l = n.stateNode),
                    0 == (128 & n.flags) &&
                      ("function" == typeof t.getDerivedStateFromError ||
                        (null !== l &&
                          "function" == typeof l.componentDidCatch &&
                          (null === oe || !oe.has(l)))))
                  )
                    return (
                      (n.flags |= 65536),
                      (r &= -r),
                      (n.lanes |= r),
                      sj((r = sk(r)), e, n, a),
                      r_(n, r),
                      !1
                    );
              }
              n = n.return;
            } while (null !== n);
            return !1;
          })(e, r, t, n, iQ)
        ) {
          ((iX = 1), sv(e, ah(n, e.current)), (iB = null));
          return;
        }
      } catch (t) {
        if (null !== r) throw ((iB = r), t);
        ((iX = 1), sv(e, ah(n, e.current)), (iB = null));
        return;
      }
      32768 & t.flags
        ? (a_ || 1 === a
            ? (e = !0)
            : iK || 0 != (0x20000000 & iQ)
              ? (e = !1)
              : ((iV = e = !0),
                (2 === a || 9 === a || 3 === a || 6 === a) &&
                  null !== (a = rB.current) &&
                  13 === a.tag &&
                  (a.flags |= 16384)),
          oz(t, e))
        : o$(t);
    }
    function o$(e) {
      var t = e;
      do {
        if (0 != (32768 & t.flags)) return void oz(t, iV);
        e = t.return;
        var n = (function (e, t, n) {
          var a = t.pendingProps;
          switch ((a$(t), t.tag)) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
            case 1:
              return (s3(t), null);
            case 3:
              return (
                (n = t.stateNode),
                (a = null),
                null !== e && (a = e.memoizedState.cache),
                t.memoizedState.cache !== a && (t.flags |= 2048),
                aV(a4),
                V(),
                n.pendingContext &&
                  ((n.context = n.pendingContext), (n.pendingContext = null)),
                (null === e || null === e.child) &&
                  (aF(t)
                    ? sJ(t)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                      ((t.flags |= 1024), aI())),
                s3(t),
                null
              );
            case 26:
              var r = t.type,
                l = t.memoizedState;
              return (
                null === e
                  ? (sJ(t),
                    null !== l
                      ? (s3(t), s0(t, l))
                      : (s3(t), sZ(t, r, null, a, n)))
                  : l
                    ? l !== e.memoizedState
                      ? (sJ(t), s3(t), s0(t, l))
                      : (s3(t), (t.flags &= -0x1000001))
                    : ((e = e.memoizedProps) !== a && sJ(t),
                      s3(t),
                      sZ(t, r, e, a, n)),
                null
              );
            case 27:
              if (
                (G(t),
                (n = Q.current),
                (r = t.type),
                null !== e && null != t.stateNode)
              )
                e.memoizedProps !== a && sJ(t);
              else {
                if (!a) {
                  if (null === t.stateNode) throw Error(o(166));
                  return (s3(t), null);
                }
                ((e = U.current),
                  aF(t) ? aR(t) : ((t.stateNode = e = cU(r, a, n)), sJ(t)));
              }
              return (s3(t), null);
            case 5:
              if ((G(t), (r = t.type), null !== e && null != t.stateNode))
                e.memoizedProps !== a && sJ(t);
              else {
                if (!a) {
                  if (null === t.stateNode) throw Error(o(166));
                  return (s3(t), null);
                }
                if (((l = U.current), aF(t))) aR(t);
                else {
                  var s = ck(Q.current);
                  switch (l) {
                    case 1:
                      l = s.createElementNS("http://www.w3.org/2000/svg", r);
                      break;
                    case 2:
                      l = s.createElementNS(
                        "http://www.w3.org/1998/Math/MathML",
                        r,
                      );
                      break;
                    default:
                      switch (r) {
                        case "svg":
                          l = s.createElementNS(
                            "http://www.w3.org/2000/svg",
                            r,
                          );
                          break;
                        case "math":
                          l = s.createElementNS(
                            "http://www.w3.org/1998/Math/MathML",
                            r,
                          );
                          break;
                        case "script":
                          (((l = s.createElement("div")).innerHTML =
                            "<script><\/script>"),
                            (l = l.removeChild(l.firstChild)));
                          break;
                        case "select":
                          ((l =
                            "string" == typeof a.is
                              ? s.createElement("select", { is: a.is })
                              : s.createElement("select")),
                            a.multiple
                              ? (l.multiple = !0)
                              : a.size && (l.size = a.size));
                          break;
                        default:
                          l =
                            "string" == typeof a.is
                              ? s.createElement(r, { is: a.is })
                              : s.createElement(r);
                      }
                  }
                  ((l[eR] = t), (l[eD] = a));
                  e: for (s = t.child; null !== s;) {
                    if (5 === s.tag || 6 === s.tag) l.appendChild(s.stateNode);
                    else if (4 !== s.tag && 27 !== s.tag && null !== s.child) {
                      ((s.child.return = s), (s = s.child));
                      continue;
                    }
                    if (s === t) break;
                    for (; null === s.sibling;) {
                      if (null === s.return || s.return === t) break e;
                      s = s.return;
                    }
                    ((s.sibling.return = s.return), (s = s.sibling));
                  }
                  switch (((t.stateNode = l), cb(l, r, a), r)) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      a = !!a.autoFocus;
                      break;
                    case "img":
                      a = !0;
                      break;
                    default:
                      a = !1;
                  }
                  a && sJ(t);
                }
              }
              return (
                s3(t),
                sZ(
                  t,
                  t.type,
                  null === e ? null : e.memoizedProps,
                  t.pendingProps,
                  n,
                ),
                null
              );
            case 6:
              if (e && null != t.stateNode) e.memoizedProps !== a && sJ(t);
              else {
                if ("string" != typeof a && null === t.stateNode)
                  throw Error(o(166));
                if (((e = Q.current), aF(t))) {
                  if (
                    ((e = t.stateNode),
                    (n = t.memoizedProps),
                    (a = null),
                    null !== (r = aT))
                  )
                    switch (r.tag) {
                      case 27:
                      case 5:
                        a = r.memoizedProps;
                    }
                  ((e[eR] = t),
                    (e = !!(
                      e.nodeValue === n ||
                      (null !== a && !0 === a.suppressHydrationWarning) ||
                      cp(e.nodeValue, n)
                    )) || aq(t, !0));
                } else
                  (((e = ck(e).createTextNode(a))[eR] = t), (t.stateNode = e));
              }
              return (s3(t), null);
            case 31:
              if (
                ((n = t.memoizedState), null === e || null !== e.memoizedState)
              ) {
                if (((a = aF(t)), null !== n)) {
                  if (null === e) {
                    if (!a) throw Error(o(318));
                    if (
                      !(e =
                        null !== (e = t.memoizedState) ? e.dehydrated : null)
                    )
                      throw Error(o(557));
                    e[eR] = t;
                  } else
                    (aO(),
                      0 == (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4));
                  (s3(t), (e = !1));
                } else
                  ((n = aI()),
                    null !== e &&
                      null !== e.memoizedState &&
                      (e.memoizedState.hydrationErrors = n),
                    (e = !0));
                if (!e) {
                  if (256 & t.flags) return (rG(t), t);
                  return (rG(t), null);
                }
                if (0 != (128 & t.flags)) throw Error(o(558));
              }
              return (s3(t), null);
            case 13:
              if (
                ((a = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (((r = aF(t)), null !== a && null !== a.dehydrated)) {
                  if (null === e) {
                    if (!r) throw Error(o(318));
                    if (
                      !(r =
                        null !== (r = t.memoizedState) ? r.dehydrated : null)
                    )
                      throw Error(o(317));
                    r[eR] = t;
                  } else
                    (aO(),
                      0 == (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4));
                  (s3(t), (r = !1));
                } else
                  ((r = aI()),
                    null !== e &&
                      null !== e.memoizedState &&
                      (e.memoizedState.hydrationErrors = r),
                    (r = !0));
                if (!r) {
                  if (256 & t.flags) return (rG(t), t);
                  return (rG(t), null);
                }
              }
              if ((rG(t), 0 != (128 & t.flags))) return ((t.lanes = n), t);
              return (
                (n = null !== a),
                (e = null !== e && null !== e.memoizedState),
                n &&
                  ((a = t.child),
                  (r = null),
                  null !== a.alternate &&
                    null !== a.alternate.memoizedState &&
                    null !== a.alternate.memoizedState.cachePool &&
                    (r = a.alternate.memoizedState.cachePool.pool),
                  (l = null),
                  null !== a.memoizedState &&
                    null !== a.memoizedState.cachePool &&
                    (l = a.memoizedState.cachePool.pool),
                  l !== r && (a.flags |= 2048)),
                n !== e && n && (t.child.flags |= 8192),
                s1(t, t.updateQueue),
                s3(t),
                null
              );
            case 4:
              return (
                V(),
                null === e && cr(t.stateNode.containerInfo),
                s3(t),
                null
              );
            case 10:
              return (aV(t.type), s3(t), null);
            case 19:
              if ((O(rY), null === (a = t.memoizedState))) return (s3(t), null);
              if (((r = 0 != (128 & t.flags)), null === (l = a.rendering)))
                if (r) s2(a, !1);
                else {
                  if (0 !== iX || (null !== e && 0 != (128 & e.flags)))
                    for (e = t.child; null !== e;) {
                      if (null !== (l = rX(e))) {
                        for (
                          t.flags |= 128,
                            s2(a, !1),
                            t.updateQueue = e = l.updateQueue,
                            s1(t, e),
                            t.subtreeFlags = 0,
                            e = n,
                            n = t.child;
                          null !== n;
                        )
                          (ao(n, e), (n = n.sibling));
                        return (
                          I(rY, (1 & rY.current) | 2),
                          a_ && aS(t, a.treeForkCount),
                          t.child
                        );
                      }
                      e = e.sibling;
                    }
                  null !== a.tail &&
                    el() > i7 &&
                    ((t.flags |= 128),
                    (r = !0),
                    s2(a, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = rX(l))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      (t.updateQueue = e = e.updateQueue),
                      s1(t, e),
                      s2(a, !0),
                      null === a.tail &&
                        "hidden" === a.tailMode &&
                        !l.alternate &&
                        !a_)
                    )
                      return (s3(t), null);
                  } else
                    2 * el() - a.renderingStartTime > i7 &&
                      0x20000000 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      s2(a, !1),
                      (t.lanes = 4194304));
                a.isBackwards
                  ? ((l.sibling = t.child), (t.child = l))
                  : (null !== (e = a.last) ? (e.sibling = l) : (t.child = l),
                    (a.last = l));
              }
              if (null !== a.tail)
                return (
                  (e = a.tail),
                  (a.rendering = e),
                  (a.tail = e.sibling),
                  (a.renderingStartTime = el()),
                  (e.sibling = null),
                  (n = rY.current),
                  I(rY, r ? (1 & n) | 2 : 1 & n),
                  a_ && aS(t, a.treeForkCount),
                  e
                );
              return (s3(t), null);
            case 22:
            case 23:
              return (
                rG(t),
                rU(),
                (a = null !== t.memoizedState),
                null !== e
                  ? (null !== e.memoizedState) !== a && (t.flags |= 8192)
                  : a && (t.flags |= 8192),
                a
                  ? 0 != (0x20000000 & n) &&
                    0 == (128 & t.flags) &&
                    (s3(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : s3(t),
                null !== (n = t.updateQueue) && s1(t, n.retryQueue),
                (n = null),
                null !== e &&
                  null !== e.memoizedState &&
                  null !== e.memoizedState.cachePool &&
                  (n = e.memoizedState.cachePool.pool),
                (a = null),
                null !== t.memoizedState &&
                  null !== t.memoizedState.cachePool &&
                  (a = t.memoizedState.cachePool.pool),
                a !== n && (t.flags |= 2048),
                null !== e && O(rr),
                null
              );
            case 24:
              return (
                (n = null),
                null !== e && (n = e.memoizedState.cache),
                t.memoizedState.cache !== n && (t.flags |= 2048),
                aV(a4),
                s3(t),
                null
              );
            case 25:
            case 30:
              return null;
          }
          throw Error(o(156, t.tag));
        })(t.alternate, t, iY);
        if (null !== n) {
          iB = n;
          return;
        }
        if (null !== (t = t.sibling)) {
          iB = t;
          return;
        }
        iB = t = e;
      } while (null !== t);
      0 === iX && (iX = 5);
    }
    function oz(e, t) {
      do {
        var n = (function (e, t) {
          switch ((a$(t), t.tag)) {
            case 1:
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 3:
              return (
                aV(a4),
                V(),
                0 != (65536 & (e = t.flags)) && 0 == (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 26:
            case 27:
            case 5:
              return (G(t), null);
            case 31:
              if (null !== t.memoizedState) {
                if ((rG(t), null === t.alternate)) throw Error(o(340));
                aO();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 13:
              if (
                (rG(t), null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                aO();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return (O(rY), null);
            case 4:
              return (V(), null);
            case 10:
              return (aV(t.type), null);
            case 22:
            case 23:
              return (
                rG(t),
                rU(),
                null !== e && O(rr),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 24:
              return (aV(a4), null);
            default:
              return null;
          }
        })(e.alternate, e);
        if (null !== n) {
          ((n.flags &= 32767), (iB = n));
          return;
        }
        if (
          (null !== (n = e.return) &&
            ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && null !== (e = e.sibling))
        ) {
          iB = e;
          return;
        }
        iB = e = n;
      } while (null !== e);
      ((iX = 6), (iB = null));
    }
    function oT(e, t, n, a, r, l, s, i, c) {
      e.cancelPendingCommit = null;
      do oL();
      while (0 !== ot);
      if (0 != (6 & iI)) throw Error(o(327));
      if (null !== t) {
        if (t === e.current) throw Error(o(177));
        if (
          (!(function (e, t, n, a, r, l) {
            var s = e.pendingLanes;
            ((e.pendingLanes = n),
              (e.suspendedLanes = 0),
              (e.pingedLanes = 0),
              (e.warmLanes = 0),
              (e.expiredLanes &= n),
              (e.entangledLanes &= n),
              (e.errorRecoveryDisabledLanes &= n),
              (e.shellSuspendCounter = 0));
            var i = e.entanglements,
              o = e.expirationTimes,
              c = e.hiddenUpdates;
            for (n = s & ~n; 0 < n;) {
              var u = 31 - eb(n),
                d = 1 << u;
              ((i[u] = 0), (o[u] = -1));
              var f = c[u];
              if (null !== f)
                for (c[u] = null, u = 0; u < f.length; u++) {
                  var m = f[u];
                  null !== m && (m.lane &= -0x20000001);
                }
              n &= ~d;
            }
            (0 !== a && ez(e, a, 0),
              0 !== l &&
                0 === r &&
                0 !== e.tag &&
                (e.suspendedLanes |= l & ~(s & ~t)));
          })(e, n, (l = t.lanes | t.childLanes | n6), s, i, c),
          e === iU && ((iB = iU = null), (iQ = 0)),
          (oa = t),
          (on = e),
          (or = n),
          (ol = l),
          (os = r),
          (oi = a),
          0 != (10256 & t.subtreeFlags) || 0 != (10256 & t.flags)
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              et(ec, function () {
                return (oq(), null);
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (a = 0 != (13878 & t.flags)),
          0 != (13878 & t.subtreeFlags) || a)
        ) {
          ((a = A.T), (A.T = null), (r = L.p), (L.p = 2), (s = iI), (iI |= 4));
          try {
            !(function (e, t) {
              if (((e = e.containerInfo), (cy = um), nL((e = nA(e))))) {
                if ("selectionStart" in e)
                  var n = { start: e.selectionStart, end: e.selectionEnd };
                else
                  e: {
                    var a =
                      (n = ((n = e.ownerDocument) && n.defaultView) || window)
                        .getSelection && n.getSelection();
                    if (a && 0 !== a.rangeCount) {
                      n = a.anchorNode;
                      var r,
                        l = a.anchorOffset,
                        s = a.focusNode;
                      a = a.focusOffset;
                      try {
                        (n.nodeType, s.nodeType);
                      } catch (e) {
                        n = null;
                        break e;
                      }
                      var i = 0,
                        c = -1,
                        u = -1,
                        d = 0,
                        f = 0,
                        m = e,
                        p = null;
                      t: for (;;) {
                        for (
                          ;
                          m !== n ||
                            (0 !== l && 3 !== m.nodeType) ||
                            (c = i + l),
                            m !== s ||
                              (0 !== a && 3 !== m.nodeType) ||
                              (u = i + a),
                            3 === m.nodeType && (i += m.nodeValue.length),
                            null !== (r = m.firstChild);
                        )
                          ((p = m), (m = r));
                        for (;;) {
                          if (m === e) break t;
                          if (
                            (p === n && ++d === l && (c = i),
                            p === s && ++f === a && (u = i),
                            null !== (r = m.nextSibling))
                          )
                            break;
                          p = (m = p).parentNode;
                        }
                        m = r;
                      }
                      n = -1 === c || -1 === u ? null : { start: c, end: u };
                    } else n = null;
                  }
                n = n || { start: 0, end: 0 };
              } else n = null;
              for (
                cx = { focusedElem: e, selectionRange: n }, um = !1, im = t;
                null !== im;
              )
                if (
                  ((e = (t = im).child),
                  0 != (1028 & t.subtreeFlags) && null !== e)
                )
                  ((e.return = t), (im = e));
                else
                  for (; null !== im;) {
                    switch (((s = (t = im).alternate), (e = t.flags), t.tag)) {
                      case 0:
                        if (
                          0 != (4 & e) &&
                          null !==
                            (e = null !== (e = t.updateQueue) ? e.events : null)
                        )
                          for (n = 0; n < e.length; n++)
                            (l = e[n]).ref.impl = l.nextImpl;
                        break;
                      case 11:
                      case 15:
                      case 5:
                      case 26:
                      case 27:
                      case 6:
                      case 4:
                      case 17:
                        break;
                      case 1:
                        if (0 != (1024 & e) && null !== s) {
                          ((e = void 0),
                            (n = t),
                            (l = s.memoizedProps),
                            (s = s.memoizedState),
                            (a = n.stateNode));
                          try {
                            var h = sp(n.type, l);
                            ((e = a.getSnapshotBeforeUpdate(h, s)),
                              (a.__reactInternalSnapshotBeforeUpdate = e));
                          } catch (e) {
                            oD(n, n.return, e);
                          }
                        }
                        break;
                      case 3:
                        if (0 != (1024 & e)) {
                          if (
                            9 === (n = (e = t.stateNode.containerInfo).nodeType)
                          )
                            cA(e);
                          else if (1 === n)
                            switch (e.nodeName) {
                              case "HEAD":
                              case "HTML":
                              case "BODY":
                                cA(e);
                                break;
                              default:
                                e.textContent = "";
                            }
                        }
                        break;
                      default:
                        if (0 != (1024 & e)) throw Error(o(163));
                    }
                    if (null !== (e = t.sibling)) {
                      ((e.return = t.return), (im = e));
                      break;
                    }
                    im = t.return;
                  }
            })(e, t);
          } finally {
            ((iI = s), (L.p = r), (A.T = a));
          }
        }
        ((ot = 1), oM(), o_(), oP());
      }
    }
    function oM() {
      if (1 === ot) {
        ot = 0;
        var e = on,
          t = oa,
          n = 0 != (13878 & t.flags);
        if (0 != (13878 & t.subtreeFlags) || n) {
          ((n = A.T), (A.T = null));
          var a = L.p;
          L.p = 2;
          var r = iI;
          iI |= 4;
          try {
            iN(t, e);
            var l = cx,
              s = nA(e.containerInfo),
              i = l.focusedElem,
              o = l.selectionRange;
            if (
              s !== i &&
              i &&
              i.ownerDocument &&
              (function e(t, n) {
                return (
                  !!t &&
                  !!n &&
                  (t === n ||
                    ((!t || 3 !== t.nodeType) &&
                      (n && 3 === n.nodeType
                        ? e(t, n.parentNode)
                        : "contains" in t
                          ? t.contains(n)
                          : !!t.compareDocumentPosition &&
                            !!(16 & t.compareDocumentPosition(n)))))
                );
              })(i.ownerDocument.documentElement, i)
            ) {
              if (null !== o && nL(i)) {
                var c = o.start,
                  u = o.end;
                if ((void 0 === u && (u = c), "selectionStart" in i))
                  ((i.selectionStart = c),
                    (i.selectionEnd = Math.min(u, i.value.length)));
                else {
                  var d = i.ownerDocument || document,
                    f = (d && d.defaultView) || window;
                  if (f.getSelection) {
                    var m = f.getSelection(),
                      p = i.textContent.length,
                      h = Math.min(o.start, p),
                      g = void 0 === o.end ? h : Math.min(o.end, p);
                    !m.extend && h > g && ((s = g), (g = h), (h = s));
                    var b = nP(i, h),
                      v = nP(i, g);
                    if (
                      b &&
                      v &&
                      (1 !== m.rangeCount ||
                        m.anchorNode !== b.node ||
                        m.anchorOffset !== b.offset ||
                        m.focusNode !== v.node ||
                        m.focusOffset !== v.offset)
                    ) {
                      var y = d.createRange();
                      (y.setStart(b.node, b.offset),
                        m.removeAllRanges(),
                        h > g
                          ? (m.addRange(y), m.extend(v.node, v.offset))
                          : (y.setEnd(v.node, v.offset), m.addRange(y)));
                    }
                  }
                }
              }
              for (d = [], m = i; (m = m.parentNode);)
                1 === m.nodeType &&
                  d.push({ element: m, left: m.scrollLeft, top: m.scrollTop });
              for (
                "function" == typeof i.focus && i.focus(), i = 0;
                i < d.length;
                i++
              ) {
                var x = d[i];
                ((x.element.scrollLeft = x.left),
                  (x.element.scrollTop = x.top));
              }
            }
            ((um = !!cy), (cx = cy = null));
          } finally {
            ((iI = r), (L.p = a), (A.T = n));
          }
        }
        ((e.current = t), (ot = 2));
      }
    }
    function o_() {
      if (2 === ot) {
        ot = 0;
        var e = on,
          t = oa,
          n = 0 != (8772 & t.flags);
        if (0 != (8772 & t.subtreeFlags) || n) {
          ((n = A.T), (A.T = null));
          var a = L.p;
          L.p = 2;
          var r = iI;
          iI |= 4;
          try {
            ip(e, t.alternate, t);
          } finally {
            ((iI = r), (L.p = a), (A.T = n));
          }
        }
        ot = 3;
      }
    }
    function oP() {
      if (4 === ot || 3 === ot) {
        ((ot = 0), er());
        var e = on,
          t = oa,
          n = or,
          a = oi;
        0 != (10256 & t.subtreeFlags) || 0 != (10256 & t.flags)
          ? (ot = 5)
          : ((ot = 0), (oa = on = null), oA(e, e.pendingLanes));
        var r = e.pendingLanes;
        if (
          (0 === r && (oe = null),
          eP(n),
          (t = t.stateNode),
          eh && "function" == typeof eh.onCommitFiberRoot)
        )
          try {
            eh.onCommitFiberRoot(ep, t, void 0, 128 == (128 & t.current.flags));
          } catch (e) {}
        if (null !== a) {
          ((t = A.T), (r = L.p), (L.p = 2), (A.T = null));
          try {
            for (var l = e.onRecoverableError, s = 0; s < a.length; s++) {
              var i = a[s];
              l(i.value, { componentStack: i.stack });
            }
          } finally {
            ((A.T = t), (L.p = r));
          }
        }
        (0 != (3 & or) && oL(),
          oY(e),
          (r = e.pendingLanes),
          0 != (261930 & n) && 0 != (42 & r)
            ? e === oc
              ? oo++
              : ((oo = 0), (oc = e))
            : (oo = 0),
          oX(0, !1));
      }
    }
    function oA(e, t) {
      0 == (e.pooledCacheLanes &= t) &&
        null != (t = e.pooledCache) &&
        ((e.pooledCache = null), a8(t));
    }
    function oL() {
      return (oM(), o_(), oP(), oq());
    }
    function oq() {
      if (5 !== ot) return !1;
      var e = on,
        t = ol;
      ol = 0;
      var n = eP(or),
        a = A.T,
        r = L.p;
      try {
        ((L.p = 32 > n ? 32 : n), (A.T = null), (n = os), (os = null));
        var l = on,
          s = or;
        if (((ot = 0), (oa = on = null), (or = 0), 0 != (6 & iI)))
          throw Error(o(331));
        var i = iI;
        if (
          ((iI |= 4),
          iR(l.current),
          iT(l, l.current, s, n),
          (iI = i),
          oX(0, !1),
          eh && "function" == typeof eh.onPostCommitFiberRoot)
        )
          try {
            eh.onPostCommitFiberRoot(ep, l);
          } catch (e) {}
        return !0;
      } finally {
        ((L.p = r), (A.T = a), oA(e, t));
      }
    }
    function oR(e, t, n) {
      ((t = ah(n, t)),
        (t = sx(e.stateNode, t, 2)),
        null !== (e = rT(e, t, 2)) && (e$(e, 2), oY(e)));
    }
    function oD(e, t, n) {
      if (3 === e.tag) oR(e, e, n);
      else
        for (; null !== t;) {
          if (3 === t.tag) {
            oR(t, e, n);
            break;
          }
          if (1 === t.tag) {
            var a = t.stateNode;
            if (
              "function" == typeof t.type.getDerivedStateFromError ||
              ("function" == typeof a.componentDidCatch &&
                (null === oe || !oe.has(a)))
            ) {
              ((e = ah(n, e)),
                null !== (a = rT(t, (n = sk(2)), 2)) &&
                  (sj(n, a, t, e), e$(a, 2), oY(a)));
              break;
            }
          }
          t = t.return;
        }
    }
    function oF(e, t, n) {
      var a = e.pingCache;
      if (null === a) {
        a = e.pingCache = new iO();
        var r = new Set();
        a.set(t, r);
      } else void 0 === (r = a.get(t)) && ((r = new Set()), a.set(t, r));
      r.has(n) ||
        ((iG = !0), r.add(n), (e = oO.bind(null, e, t, n)), t.then(e, e));
    }
    function oO(e, t, n) {
      var a = e.pingCache;
      (null !== a && a.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        iU === e &&
          (iQ & n) === n &&
          (4 === iX || (3 === iX && (0x3c00000 & iQ) === iQ && 300 > el() - i6)
            ? 0 == (2 & iI) && ov(e, 0)
            : (i0 |= n),
          i2 === iQ && (i2 = 0)),
        oY(e));
    }
    function oI(e, t) {
      (0 === t && (t = eC()), null !== (e = ae(e, t)) && (e$(e, t), oY(e)));
    }
    function oU(e) {
      var t = e.memoizedState,
        n = 0;
      (null !== t && (n = t.retryLane), oI(e, n));
    }
    function oB(e, t) {
      var n = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var a = e.stateNode,
            r = e.memoizedState;
          null !== r && (n = r.retryLane);
          break;
        case 19:
          a = e.stateNode;
          break;
        case 22:
          a = e.stateNode._retryCache;
          break;
        default:
          throw Error(o(314));
      }
      (null !== a && a.delete(t), oI(e, n));
    }
    var oQ = null,
      oH = null,
      oW = !1,
      oV = !1,
      oK = !1,
      oG = 0;
    function oY(e) {
      (e !== oH &&
        null === e.next &&
        (null === oH ? (oQ = oH = e) : (oH = oH.next = e)),
        (oV = !0),
        oW ||
          ((oW = !0),
          cz(function () {
            0 != (6 & iI) ? et(ei, oJ) : oZ();
          })));
    }
    function oX(e, t) {
      if (!oK && oV) {
        oK = !0;
        do
          for (var n = !1, a = oQ; null !== a;) {
            if (!t)
              if (0 !== e) {
                var r = a.pendingLanes;
                if (0 === r) var l = 0;
                else {
                  var s = a.suspendedLanes,
                    i = a.pingedLanes;
                  l =
                    0xc000095 &
                    (l = ((1 << (31 - eb(42 | e) + 1)) - 1) & (r & ~(s & ~i)))
                      ? (0xc000095 & l) | 1
                      : l
                        ? 2 | l
                        : 0;
                }
                0 !== l && ((n = !0), o2(a, l));
              } else
                ((l = iQ),
                  0 ==
                    (3 &
                      (l = eN(
                        a,
                        a === iU ? l : 0,
                        null !== a.cancelPendingCommit ||
                          -1 !== a.timeoutHandle,
                      ))) ||
                    eS(a, l) ||
                    ((n = !0), o2(a, l)));
            a = a.next;
          }
        while (n);
        oK = !1;
      }
    }
    function oJ() {
      oZ();
    }
    function oZ() {
      oV = oW = !1;
      var e,
        t = 0;
      0 === oG ||
        ((e = window.event) && "popstate" === e.type
          ? e === cS || ((cS = e), 0)
          : ((cS = null), 1)) ||
        (t = oG);
      for (var n = el(), a = null, r = oQ; null !== r;) {
        var l = r.next,
          s = o0(r, n);
        (0 === s
          ? ((r.next = null),
            null === a ? (oQ = l) : (a.next = l),
            null === l && (oH = a))
          : ((a = r), (0 !== t || 0 != (3 & s)) && (oV = !0)),
          (r = l));
      }
      ((0 !== ot && 5 !== ot) || oX(t, !1), 0 !== oG && (oG = 0));
    }
    function o0(e, t) {
      for (
        var n = e.suspendedLanes,
          a = e.pingedLanes,
          r = e.expirationTimes,
          l = -0x3c00001 & e.pendingLanes;
        0 < l;
      ) {
        var s = 31 - eb(l),
          i = 1 << s,
          o = r[s];
        (-1 === o
          ? (0 == (i & n) || 0 != (i & a)) &&
            (r[s] = (function (e, t) {
              switch (e) {
                case 1:
                case 2:
                case 4:
                case 8:
                case 64:
                  return t + 250;
                case 16:
                case 32:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                  return t + 5e3;
                default:
                  return -1;
              }
            })(i, t))
          : o <= t && (e.expiredLanes |= i),
          (l &= ~i));
      }
      if (
        ((t = iU),
        (n = iQ),
        (n = eN(
          e,
          e === t ? n : 0,
          null !== e.cancelPendingCommit || -1 !== e.timeoutHandle,
        )),
        (a = e.callbackNode),
        0 === n ||
          (e === t && (2 === iH || 9 === iH)) ||
          null !== e.cancelPendingCommit)
      )
        return (
          null !== a && null !== a && en(a),
          (e.callbackNode = null),
          (e.callbackPriority = 0)
        );
      if (0 == (3 & n) || eS(e, n)) {
        if ((t = n & -n) === e.callbackPriority) return t;
        switch ((null !== a && en(a), eP(n))) {
          case 2:
          case 8:
            n = eo;
            break;
          case 32:
          default:
            n = ec;
            break;
          case 0x10000000:
            n = ed;
        }
        return (
          (n = et(n, (a = o1.bind(null, e)))),
          (e.callbackPriority = t),
          (e.callbackNode = n),
          t
        );
      }
      return (
        null !== a && null !== a && en(a),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      );
    }
    function o1(e, t) {
      if (0 !== ot && 5 !== ot)
        return ((e.callbackNode = null), (e.callbackPriority = 0), null);
      var n = e.callbackNode;
      if (oL() && e.callbackNode !== n) return null;
      var a = iQ;
      return 0 ===
        (a = eN(
          e,
          e === iU ? a : 0,
          null !== e.cancelPendingCommit || -1 !== e.timeoutHandle,
        ))
        ? null
        : (om(e, a, t),
          o0(e, el()),
          null != e.callbackNode && e.callbackNode === n
            ? o1.bind(null, e)
            : null);
    }
    function o2(e, t) {
      if (oL()) return null;
      om(e, t, !0);
    }
    function o3() {
      if (0 === oG) {
        var e = re;
        (0 === e && ((e = ex), 0 == (261888 & (ex <<= 1)) && (ex = 256)),
          (oG = e));
      }
      return oG;
    }
    function o5(e) {
      return null == e || "symbol" == typeof e || "boolean" == typeof e
        ? null
        : "function" == typeof e
          ? e
          : tb("" + e);
    }
    function o4(e, t) {
      var n = t.ownerDocument.createElement("input");
      return (
        (n.name = t.name),
        (n.value = t.value),
        e.id && n.setAttribute("form", e.id),
        t.parentNode.insertBefore(n, t),
        (e = new FormData(e)),
        n.parentNode.removeChild(n),
        e
      );
    }
    for (var o6 = 0; o6 < n1.length; o6++) {
      var o8 = n1[o6];
      n2(o8.toLowerCase(), "on" + (o8[0].toUpperCase() + o8.slice(1)));
    }
    (n2(nV, "onAnimationEnd"),
      n2(nK, "onAnimationIteration"),
      n2(nG, "onAnimationStart"),
      n2("dblclick", "onDoubleClick"),
      n2("focusin", "onFocus"),
      n2("focusout", "onBlur"),
      n2(nY, "onTransitionRun"),
      n2(nX, "onTransitionStart"),
      n2(nJ, "onTransitionCancel"),
      n2(nZ, "onTransitionEnd"),
      e0("onMouseEnter", ["mouseout", "mouseover"]),
      e0("onMouseLeave", ["mouseout", "mouseover"]),
      e0("onPointerEnter", ["pointerout", "pointerover"]),
      e0("onPointerLeave", ["pointerout", "pointerover"]),
      eZ(
        "onChange",
        "change click focusin focusout input keydown keyup selectionchange".split(
          " ",
        ),
      ),
      eZ(
        "onSelect",
        "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
          " ",
        ),
      ),
      eZ("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
      eZ(
        "onCompositionEnd",
        "compositionend focusout keydown keypress keyup mousedown".split(" "),
      ),
      eZ(
        "onCompositionStart",
        "compositionstart focusout keydown keypress keyup mousedown".split(" "),
      ),
      eZ(
        "onCompositionUpdate",
        "compositionupdate focusout keydown keypress keyup mousedown".split(
          " ",
        ),
      ));
    var o7 =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " ",
        ),
      o9 = new Set(
        "beforetoggle cancel close invalid load scroll scrollend toggle"
          .split(" ")
          .concat(o7),
      );
    function ce(e, t) {
      t = 0 != (4 & t);
      for (var n = 0; n < e.length; n++) {
        var a = e[n],
          r = a.event;
        a = a.listeners;
        e: {
          var l = void 0;
          if (t)
            for (var s = a.length - 1; 0 <= s; s--) {
              var i = a[s],
                o = i.instance,
                c = i.currentTarget;
              if (((i = i.listener), o !== l && r.isPropagationStopped()))
                break e;
              ((l = i), (r.currentTarget = c));
              try {
                l(r);
              } catch (e) {
                n3(e);
              }
              ((r.currentTarget = null), (l = o));
            }
          else
            for (s = 0; s < a.length; s++) {
              if (
                ((o = (i = a[s]).instance),
                (c = i.currentTarget),
                (i = i.listener),
                o !== l && r.isPropagationStopped())
              )
                break e;
              ((l = i), (r.currentTarget = c));
              try {
                l(r);
              } catch (e) {
                n3(e);
              }
              ((r.currentTarget = null), (l = o));
            }
        }
      }
    }
    function ct(e, t) {
      var n = t[eO];
      void 0 === n && (n = t[eO] = new Set());
      var a = e + "__bubble";
      n.has(a) || (cl(t, e, 2, !1), n.add(a));
    }
    function cn(e, t, n) {
      var a = 0;
      (t && (a |= 4), cl(n, e, a, t));
    }
    var ca = "_reactListening" + Math.random().toString(36).slice(2);
    function cr(e) {
      if (!e[ca]) {
        ((e[ca] = !0),
          eX.forEach(function (t) {
            "selectionchange" !== t &&
              (o9.has(t) || cn(t, !1, e), cn(t, !0, e));
          }));
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[ca] || ((t[ca] = !0), cn("selectionchange", !1, t));
      }
    }
    function cl(e, t, n, a) {
      switch (ux(t)) {
        case 2:
          var r = up;
          break;
        case 8:
          r = uh;
          break;
        default:
          r = ug;
      }
      ((n = r.bind(null, t, n, e)),
        (r = void 0),
        t$ &&
          ("touchstart" === t || "touchmove" === t || "wheel" === t) &&
          (r = !0),
        a
          ? void 0 !== r
            ? e.addEventListener(t, n, { capture: !0, passive: r })
            : e.addEventListener(t, n, !0)
          : void 0 !== r
            ? e.addEventListener(t, n, { passive: r })
            : e.addEventListener(t, n, !1));
    }
    function cs(e, t, n, a, r) {
      var l = a;
      if (0 == (1 & t) && 0 == (2 & t) && null !== a)
        e: for (;;) {
          if (null === a) return;
          var s = a.tag;
          if (3 === s || 4 === s) {
            var i = a.stateNode.containerInfo;
            if (i === r) break;
            if (4 === s)
              for (s = a.return; null !== s;) {
                var o = s.tag;
                if ((3 === o || 4 === o) && s.stateNode.containerInfo === r)
                  return;
                s = s.return;
              }
            for (; null !== i;) {
              if (null === (s = eW(i))) return;
              if (5 === (o = s.tag) || 6 === o || 26 === o || 27 === o) {
                a = l = s;
                continue e;
              }
              i = i.parentNode;
            }
          }
          a = a.return;
        }
      tS(function () {
        var a = l,
          r = tx(n),
          s = [];
        e: {
          var i = n0.get(e);
          if (void 0 !== i) {
            var o = tV,
              c = e;
            switch (e) {
              case "keypress":
                if (0 === tA(n)) break e;
              case "keydown":
              case "keyup":
                o = t7;
                break;
              case "focusin":
                ((c = "focus"), (o = tZ));
                break;
              case "focusout":
                ((c = "blur"), (o = tZ));
                break;
              case "beforeblur":
              case "afterblur":
                o = tZ;
                break;
              case "click":
                if (2 === n.button) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                o = tX;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                o = tJ;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                o = ne;
                break;
              case nV:
              case nK:
              case nG:
                o = t0;
                break;
              case nZ:
                o = nt;
                break;
              case "scroll":
              case "scrollend":
                o = tG;
                break;
              case "wheel":
                o = nn;
                break;
              case "copy":
              case "cut":
              case "paste":
                o = t1;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                o = t9;
                break;
              case "toggle":
              case "beforetoggle":
                o = na;
            }
            var d = 0 != (4 & t),
              f = !d && ("scroll" === e || "scrollend" === e),
              m = d ? (null !== i ? i + "Capture" : null) : i;
            d = [];
            for (var p, h = a; null !== h;) {
              var g = h;
              if (
                ((p = g.stateNode),
                (5 !== (g = g.tag) && 26 !== g && 27 !== g) ||
                  null === p ||
                  null === m ||
                  (null != (g = tC(h, m)) && d.push(ci(h, g, p))),
                f)
              )
                break;
              h = h.return;
            }
            0 < d.length &&
              ((i = new o(i, c, null, n, r)),
              s.push({ event: i, listeners: d }));
          }
        }
        if (0 == (7 & t)) {
          if (
            ((i = "mouseover" === e || "pointerover" === e),
            (o = "mouseout" === e || "pointerout" === e),
            !(
              i &&
              n !== ty &&
              (c = n.relatedTarget || n.fromElement) &&
              (eW(c) || c[eF])
            )) &&
            (o || i) &&
            ((i =
              r.window === r
                ? r
                : (i = r.ownerDocument)
                  ? i.defaultView || i.parentWindow
                  : window),
            o
              ? ((c = n.relatedTarget || n.toElement),
                (o = a),
                null !== (c = c ? eW(c) : null) &&
                  ((f = u(c)),
                  (d = c.tag),
                  c !== f || (5 !== d && 27 !== d && 6 !== d)) &&
                  (c = null))
              : ((o = null), (c = a)),
            o !== c)
          ) {
            if (
              ((d = tX),
              (g = "onMouseLeave"),
              (m = "onMouseEnter"),
              (h = "mouse"),
              ("pointerout" === e || "pointerover" === e) &&
                ((d = t9),
                (g = "onPointerLeave"),
                (m = "onPointerEnter"),
                (h = "pointer")),
              (f = null == o ? i : eK(o)),
              (p = null == c ? i : eK(c)),
              ((i = new d(g, h + "leave", o, n, r)).target = f),
              (i.relatedTarget = p),
              (g = null),
              eW(r) === a &&
                (((d = new d(m, h + "enter", c, n, r)).target = p),
                (d.relatedTarget = f),
                (g = d)),
              (f = g),
              o && c)
            )
              t: {
                for (d = cc, m = o, h = c, p = 0, g = m; g; g = d(g)) p++;
                g = 0;
                for (var b, v = h; v; v = d(v)) g++;
                for (; 0 < p - g;) ((m = d(m)), p--);
                for (; 0 < g - p;) ((h = d(h)), g--);
                for (; p--;) {
                  if (m === h || (null !== h && m === h.alternate)) {
                    d = m;
                    break t;
                  }
                  ((m = d(m)), (h = d(h)));
                }
                d = null;
              }
            else d = null;
            (null !== o && cu(s, i, o, d, !1),
              null !== c && null !== f && cu(s, f, c, d, !0));
          }
          e: {
            if (
              "select" ===
                (o =
                  (i = a ? eK(a) : window).nodeName &&
                  i.nodeName.toLowerCase()) ||
              ("input" === o && "file" === i.type)
            )
              var y = nx;
            else if (np(i))
              if (nk) y = nz;
              else {
                y = nE;
                var x = nC;
              }
            else
              (o = i.nodeName) &&
              "input" === o.toLowerCase() &&
              ("checkbox" === i.type || "radio" === i.type)
                ? (y = n$)
                : a && tp(a.elementType) && (y = nx);
            if (y && (y = y(e, a))) {
              nh(s, y, n, r);
              break e;
            }
            (x && x(e, i, a),
              "focusout" === e &&
                a &&
                "number" === i.type &&
                null != a.memoizedProps.value &&
                ts(i, "number", i.value));
          }
          switch (((x = a ? eK(a) : window), e)) {
            case "focusin":
              (np(x) || "true" === x.contentEditable) &&
                ((nR = x), (nD = a), (nF = null));
              break;
            case "focusout":
              nF = nD = nR = null;
              break;
            case "mousedown":
              nO = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              ((nO = !1), nI(s, n, r));
              break;
            case "selectionchange":
              if (nq) break;
            case "keydown":
            case "keyup":
              nI(s, n, r);
          }
          if (nl)
            t: {
              switch (e) {
                case "compositionstart":
                  var k = "onCompositionStart";
                  break t;
                case "compositionend":
                  k = "onCompositionEnd";
                  break t;
                case "compositionupdate":
                  k = "onCompositionUpdate";
                  break t;
              }
              k = void 0;
            }
          else
            nf
              ? nu(e, n) && (k = "onCompositionEnd")
              : "keydown" === e &&
                229 === n.keyCode &&
                (k = "onCompositionStart");
          (k &&
            (no &&
              "ko" !== n.locale &&
              (nf || "onCompositionStart" !== k
                ? "onCompositionEnd" === k && nf && (b = tP())
                : ((tM = "value" in (tT = r) ? tT.value : tT.textContent),
                  (nf = !0))),
            0 < (x = co(a, k)).length &&
              ((k = new t2(k, e, null, n, r)),
              s.push({ event: k, listeners: x }),
              b ? (k.data = b) : null !== (b = nd(n)) && (k.data = b))),
            (b = ni
              ? (function (e, t) {
                  switch (e) {
                    case "compositionend":
                      return nd(t);
                    case "keypress":
                      if (32 !== t.which) return null;
                      return ((nc = !0), " ");
                    case "textInput":
                      return " " === (e = t.data) && nc ? null : e;
                    default:
                      return null;
                  }
                })(e, n)
              : (function (e, t) {
                  if (nf)
                    return "compositionend" === e || (!nl && nu(e, t))
                      ? ((e = tP()), (t_ = tM = tT = null), (nf = !1), e)
                      : null;
                  switch (e) {
                    case "paste":
                    default:
                      return null;
                    case "keypress":
                      if (
                        !(t.ctrlKey || t.altKey || t.metaKey) ||
                        (t.ctrlKey && t.altKey)
                      ) {
                        if (t.char && 1 < t.char.length) return t.char;
                        if (t.which) return String.fromCharCode(t.which);
                      }
                      return null;
                    case "compositionend":
                      return no && "ko" !== t.locale ? null : t.data;
                  }
                })(e, n)) &&
              0 < (k = co(a, "onBeforeInput")).length &&
              ((x = new t2("onBeforeInput", "beforeinput", null, n, r)),
              s.push({ event: x, listeners: k }),
              (x.data = b)));
          var j = e;
          if ("submit" === j && a && a.stateNode === r) {
            var w = o5((r[eD] || null).action),
              N = n.submitter;
            N &&
              null !==
                (j = (j = N[eD] || null)
                  ? o5(j.formAction)
                  : N.getAttribute("formAction")) &&
              ((w = j), (N = null));
            var S = new tV("action", "action", null, n, r);
            s.push({
              event: S,
              listeners: [
                {
                  instance: null,
                  listener: function () {
                    if (n.defaultPrevented) {
                      if (0 !== oG) {
                        var e = N ? o4(r, N) : new FormData(r);
                        l2(
                          a,
                          { pending: !0, data: e, method: r.method, action: w },
                          null,
                          e,
                        );
                      }
                    } else
                      "function" == typeof w &&
                        (S.preventDefault(),
                        l2(
                          a,
                          {
                            pending: !0,
                            data: (e = N ? o4(r, N) : new FormData(r)),
                            method: r.method,
                            action: w,
                          },
                          w,
                          e,
                        ));
                  },
                  currentTarget: r,
                },
              ],
            });
          }
        }
        ce(s, t);
      });
    }
    function ci(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function co(e, t) {
      for (var n = t + "Capture", a = []; null !== e;) {
        var r = e,
          l = r.stateNode;
        if (
          ((5 !== (r = r.tag) && 26 !== r && 27 !== r) ||
            null === l ||
            (null != (r = tC(e, n)) && a.unshift(ci(e, r, l)),
            null != (r = tC(e, t)) && a.push(ci(e, r, l))),
          3 === e.tag)
        )
          return a;
        e = e.return;
      }
      return [];
    }
    function cc(e) {
      if (null === e) return null;
      do e = e.return;
      while (e && 5 !== e.tag && 27 !== e.tag);
      return e || null;
    }
    function cu(e, t, n, a, r) {
      for (var l = t._reactName, s = []; null !== n && n !== a;) {
        var i = n,
          o = i.alternate,
          c = i.stateNode;
        if (((i = i.tag), null !== o && o === a)) break;
        ((5 !== i && 26 !== i && 27 !== i) ||
          null === c ||
          ((o = c),
          r
            ? null != (c = tC(n, l)) && s.unshift(ci(n, c, o))
            : r || (null != (c = tC(n, l)) && s.push(ci(n, c, o)))),
          (n = n.return));
      }
      0 !== s.length && e.push({ event: t, listeners: s });
    }
    var cd = /\r\n?/g,
      cf = /\u0000|\uFFFD/g;
    function cm(e) {
      return ("string" == typeof e ? e : "" + e)
        .replace(cd, "\n")
        .replace(cf, "");
    }
    function cp(e, t) {
      return ((t = cm(t)), cm(e) === t);
    }
    function ch(e, t, n, a, r, l) {
      switch (n) {
        case "children":
          "string" == typeof a
            ? "body" === t || ("textarea" === t && "" === a) || tu(e, a)
            : ("number" == typeof a || "bigint" == typeof a) &&
              "body" !== t &&
              tu(e, "" + a);
          break;
        case "className":
          e4(e, "class", a);
          break;
        case "tabIndex":
          e4(e, "tabindex", a);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          e4(e, n, a);
          break;
        case "style":
          tm(e, a, l);
          break;
        case "data":
          if ("object" !== t) {
            e4(e, "data", a);
            break;
          }
        case "src":
        case "href":
          if (
            ("" === a && ("a" !== t || "href" !== n)) ||
            null == a ||
            "function" == typeof a ||
            "symbol" == typeof a ||
            "boolean" == typeof a
          ) {
            e.removeAttribute(n);
            break;
          }
          ((a = tb("" + a)), e.setAttribute(n, a));
          break;
        case "action":
        case "formAction":
          if ("function" == typeof a) {
            e.setAttribute(
              n,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
            );
            break;
          }
          if (
            ("function" == typeof l &&
              ("formAction" === n
                ? ("input" !== t && ch(e, t, "name", r.name, r, null),
                  ch(e, t, "formEncType", r.formEncType, r, null),
                  ch(e, t, "formMethod", r.formMethod, r, null),
                  ch(e, t, "formTarget", r.formTarget, r, null))
                : (ch(e, t, "encType", r.encType, r, null),
                  ch(e, t, "method", r.method, r, null),
                  ch(e, t, "target", r.target, r, null))),
            null == a || "symbol" == typeof a || "boolean" == typeof a)
          ) {
            e.removeAttribute(n);
            break;
          }
          ((a = tb("" + a)), e.setAttribute(n, a));
          break;
        case "onClick":
          null != a && (e.onclick = tv);
          break;
        case "onScroll":
          null != a && ct("scroll", e);
          break;
        case "onScrollEnd":
          null != a && ct("scrollend", e);
          break;
        case "dangerouslySetInnerHTML":
          if (null != a) {
            if ("object" != typeof a || !("__html" in a)) throw Error(o(61));
            if (null != (n = a.__html)) {
              if (null != r.children) throw Error(o(60));
              e.innerHTML = n;
            }
          }
          break;
        case "multiple":
          e.multiple = a && "function" != typeof a && "symbol" != typeof a;
          break;
        case "muted":
          e.muted = a && "function" != typeof a && "symbol" != typeof a;
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
        case "autoFocus":
        case "innerText":
        case "textContent":
          break;
        case "xlinkHref":
          if (
            null == a ||
            "function" == typeof a ||
            "boolean" == typeof a ||
            "symbol" == typeof a
          ) {
            e.removeAttribute("xlink:href");
            break;
          }
          ((n = tb("" + a)),
            e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          null != a && "function" != typeof a && "symbol" != typeof a
            ? e.setAttribute(n, "" + a)
            : e.removeAttribute(n);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          a && "function" != typeof a && "symbol" != typeof a
            ? e.setAttribute(n, "")
            : e.removeAttribute(n);
          break;
        case "capture":
        case "download":
          !0 === a
            ? e.setAttribute(n, "")
            : !1 !== a &&
                null != a &&
                "function" != typeof a &&
                "symbol" != typeof a
              ? e.setAttribute(n, a)
              : e.removeAttribute(n);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          null != a &&
          "function" != typeof a &&
          "symbol" != typeof a &&
          !isNaN(a) &&
          1 <= a
            ? e.setAttribute(n, a)
            : e.removeAttribute(n);
          break;
        case "rowSpan":
        case "start":
          null == a ||
          "function" == typeof a ||
          "symbol" == typeof a ||
          isNaN(a)
            ? e.removeAttribute(n)
            : e.setAttribute(n, a);
          break;
        case "popover":
          (ct("beforetoggle", e), ct("toggle", e), e5(e, "popover", a));
          break;
        case "xlinkActuate":
          e6(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
          break;
        case "xlinkArcrole":
          e6(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
          break;
        case "xlinkRole":
          e6(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
          break;
        case "xlinkShow":
          e6(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
          break;
        case "xlinkTitle":
          e6(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
          break;
        case "xlinkType":
          e6(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
          break;
        case "xmlBase":
          e6(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
          break;
        case "xmlLang":
          e6(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
          break;
        case "xmlSpace":
          e6(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
          break;
        case "is":
          e5(e, "is", a);
          break;
        default:
          (2 < n.length &&
            ("o" === n[0] || "O" === n[0]) &&
            ("n" === n[1] || "N" === n[1])) ||
            e5(e, (n = th.get(n) || n), a);
      }
    }
    function cg(e, t, n, a, r, l) {
      switch (n) {
        case "style":
          tm(e, a, l);
          break;
        case "dangerouslySetInnerHTML":
          if (null != a) {
            if ("object" != typeof a || !("__html" in a)) throw Error(o(61));
            if (null != (n = a.__html)) {
              if (null != r.children) throw Error(o(60));
              e.innerHTML = n;
            }
          }
          break;
        case "children":
          "string" == typeof a
            ? tu(e, a)
            : ("number" == typeof a || "bigint" == typeof a) && tu(e, "" + a);
          break;
        case "onScroll":
          null != a && ct("scroll", e);
          break;
        case "onScrollEnd":
          null != a && ct("scrollend", e);
          break;
        case "onClick":
          null != a && (e.onclick = tv);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
        case "innerText":
        case "textContent":
          break;
        default:
          if (!eJ.hasOwnProperty(n))
            e: {
              if (
                "o" === n[0] &&
                "n" === n[1] &&
                ((r = n.endsWith("Capture")),
                (t = n.slice(2, r ? n.length - 7 : void 0)),
                "function" ==
                  typeof (l = null != (l = e[eD] || null) ? l[n] : null) &&
                  e.removeEventListener(t, l, r),
                "function" == typeof a)
              ) {
                ("function" != typeof l &&
                  null !== l &&
                  (n in e
                    ? (e[n] = null)
                    : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(t, a, r));
                break e;
              }
              n in e
                ? (e[n] = a)
                : !0 === a
                  ? e.setAttribute(n, "")
                  : e5(e, n, a);
            }
      }
    }
    function cb(e, t, n) {
      switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          (ct("error", e), ct("load", e));
          var a,
            r = !1,
            l = !1;
          for (a in n)
            if (n.hasOwnProperty(a)) {
              var s = n[a];
              if (null != s)
                switch (a) {
                  case "src":
                    r = !0;
                    break;
                  case "srcSet":
                    l = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(o(137, t));
                  default:
                    ch(e, t, a, s, n, null);
                }
            }
          (l && ch(e, t, "srcSet", n.srcSet, n, null),
            r && ch(e, t, "src", n.src, n, null));
          return;
        case "input":
          ct("invalid", e);
          var i = (a = s = l = null),
            c = null,
            u = null;
          for (r in n)
            if (n.hasOwnProperty(r)) {
              var d = n[r];
              if (null != d)
                switch (r) {
                  case "name":
                    l = d;
                    break;
                  case "type":
                    s = d;
                    break;
                  case "checked":
                    c = d;
                    break;
                  case "defaultChecked":
                    u = d;
                    break;
                  case "value":
                    a = d;
                    break;
                  case "defaultValue":
                    i = d;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (null != d) throw Error(o(137, t));
                    break;
                  default:
                    ch(e, t, r, d, n, null);
                }
            }
          tl(e, a, i, c, u, s, l, !1);
          return;
        case "select":
          for (l in (ct("invalid", e), (r = s = a = null), n))
            if (n.hasOwnProperty(l) && null != (i = n[l]))
              switch (l) {
                case "value":
                  a = i;
                  break;
                case "defaultValue":
                  s = i;
                  break;
                case "multiple":
                  r = i;
                default:
                  ch(e, t, l, i, n, null);
              }
          ((t = a),
            (n = s),
            (e.multiple = !!r),
            null != t ? ti(e, !!r, t, !1) : null != n && ti(e, !!r, n, !0));
          return;
        case "textarea":
          for (s in (ct("invalid", e), (a = l = r = null), n))
            if (n.hasOwnProperty(s) && null != (i = n[s]))
              switch (s) {
                case "value":
                  r = i;
                  break;
                case "defaultValue":
                  l = i;
                  break;
                case "children":
                  a = i;
                  break;
                case "dangerouslySetInnerHTML":
                  if (null != i) throw Error(o(91));
                  break;
                default:
                  ch(e, t, s, i, n, null);
              }
          tc(e, r, l, a);
          return;
        case "option":
          for (c in n)
            n.hasOwnProperty(c) &&
              null != (r = n[c]) &&
              ("selected" === c
                ? (e.selected =
                    r && "function" != typeof r && "symbol" != typeof r)
                : ch(e, t, c, r, n, null));
          return;
        case "dialog":
          (ct("beforetoggle", e),
            ct("toggle", e),
            ct("cancel", e),
            ct("close", e));
          break;
        case "iframe":
        case "object":
          ct("load", e);
          break;
        case "video":
        case "audio":
          for (r = 0; r < o7.length; r++) ct(o7[r], e);
          break;
        case "image":
          (ct("error", e), ct("load", e));
          break;
        case "details":
          ct("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          (ct("error", e), ct("load", e));
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (u in n)
            if (n.hasOwnProperty(u) && null != (r = n[u]))
              switch (u) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  ch(e, t, u, r, n, null);
              }
          return;
        default:
          if (tp(t)) {
            for (d in n)
              n.hasOwnProperty(d) &&
                void 0 !== (r = n[d]) &&
                cg(e, t, d, r, n, void 0);
            return;
          }
      }
      for (i in n)
        n.hasOwnProperty(i) && null != (r = n[i]) && ch(e, t, i, r, n, null);
    }
    function cv(e) {
      switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return !0;
        default:
          return !1;
      }
    }
    var cy = null,
      cx = null;
    function ck(e) {
      return 9 === e.nodeType ? e : e.ownerDocument;
    }
    function cj(e) {
      switch (e) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function cw(e, t) {
      if (0 === e)
        switch (t) {
          case "svg":
            return 1;
          case "math":
            return 2;
          default:
            return 0;
        }
      return 1 === e && "foreignObject" === t ? 0 : e;
    }
    function cN(e, t) {
      return (
        "textarea" === e ||
        "noscript" === e ||
        "string" == typeof t.children ||
        "number" == typeof t.children ||
        "bigint" == typeof t.children ||
        ("object" == typeof t.dangerouslySetInnerHTML &&
          null !== t.dangerouslySetInnerHTML &&
          null != t.dangerouslySetInnerHTML.__html)
      );
    }
    var cS = null,
      cC = "function" == typeof setTimeout ? setTimeout : void 0,
      cE = "function" == typeof clearTimeout ? clearTimeout : void 0,
      c$ = "function" == typeof Promise ? Promise : void 0,
      cz =
        "function" == typeof queueMicrotask
          ? queueMicrotask
          : void 0 !== c$
            ? function (e) {
                return c$.resolve(null).then(e).catch(cT);
              }
            : cC;
    function cT(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function cM(e) {
      return "head" === e;
    }
    function c_(e, t) {
      var n = t,
        a = 0;
      do {
        var r = n.nextSibling;
        if ((e.removeChild(n), r && 8 === r.nodeType))
          if ("/$" === (n = r.data) || "/&" === n) {
            if (0 === a) {
              (e.removeChild(r), uD(t));
              return;
            }
            a--;
          } else if (
            "$" === n ||
            "$?" === n ||
            "$~" === n ||
            "$!" === n ||
            "&" === n
          )
            a++;
          else if ("html" === n) cB(e.ownerDocument.documentElement);
          else if ("head" === n) {
            cB((n = e.ownerDocument.head));
            for (var l = n.firstChild; l;) {
              var s = l.nextSibling,
                i = l.nodeName;
              (l[eQ] ||
                "SCRIPT" === i ||
                "STYLE" === i ||
                ("LINK" === i && "stylesheet" === l.rel.toLowerCase()) ||
                n.removeChild(l),
                (l = s));
            }
          } else "body" === n && cB(e.ownerDocument.body);
        n = r;
      } while (n);
      uD(t);
    }
    function cP(e, t) {
      var n = e;
      e = 0;
      do {
        var a = n.nextSibling;
        if (
          (1 === n.nodeType
            ? t
              ? ((n._stashedDisplay = n.style.display),
                (n.style.display = "none"))
              : ((n.style.display = n._stashedDisplay || ""),
                "" === n.getAttribute("style") && n.removeAttribute("style"))
            : 3 === n.nodeType &&
              (t
                ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
                : (n.nodeValue = n._stashedText || "")),
          a && 8 === a.nodeType)
        )
          if ("/$" === (n = a.data))
            if (0 === e) break;
            else e--;
          else ("$" !== n && "$?" !== n && "$~" !== n && "$!" !== n) || e++;
        n = a;
      } while (n);
    }
    function cA(e) {
      var t = e.firstChild;
      for (t && 10 === t.nodeType && (t = t.nextSibling); t;) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
          case "HTML":
          case "HEAD":
          case "BODY":
            (cA(n), eH(n));
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if ("stylesheet" === n.rel.toLowerCase()) continue;
        }
        e.removeChild(n);
      }
    }
    function cL(e, t) {
      for (; 8 !== e.nodeType;)
        if (
          ((1 !== e.nodeType ||
            "INPUT" !== e.nodeName ||
            "hidden" !== e.type) &&
            !t) ||
          null === (e = cD(e.nextSibling))
        )
          return null;
      return e;
    }
    function cq(e) {
      return "$?" === e.data || "$~" === e.data;
    }
    function cR(e) {
      return (
        "$!" === e.data ||
        ("$?" === e.data && "loading" !== e.ownerDocument.readyState)
      );
    }
    function cD(e) {
      for (; null != e; e = e.nextSibling) {
        var t = e.nodeType;
        if (1 === t || 3 === t) break;
        if (8 === t) {
          if (
            "$" === (t = e.data) ||
            "$!" === t ||
            "$?" === t ||
            "$~" === t ||
            "&" === t ||
            "F!" === t ||
            "F" === t
          )
            break;
          if ("/$" === t || "/&" === t) return null;
        }
      }
      return e;
    }
    var cF = null;
    function cO(e) {
      e = e.nextSibling;
      for (var t = 0; e;) {
        if (8 === e.nodeType) {
          var n = e.data;
          if ("/$" === n || "/&" === n) {
            if (0 === t) return cD(e.nextSibling);
            t--;
          } else
            ("$" !== n &&
              "$!" !== n &&
              "$?" !== n &&
              "$~" !== n &&
              "&" !== n) ||
              t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function cI(e) {
      e = e.previousSibling;
      for (var t = 0; e;) {
        if (8 === e.nodeType) {
          var n = e.data;
          if (
            "$" === n ||
            "$!" === n ||
            "$?" === n ||
            "$~" === n ||
            "&" === n
          ) {
            if (0 === t) return e;
            t--;
          } else ("/$" !== n && "/&" !== n) || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function cU(e, t, n) {
      switch (((t = ck(n)), e)) {
        case "html":
          if (!(e = t.documentElement)) throw Error(o(452));
          return e;
        case "head":
          if (!(e = t.head)) throw Error(o(453));
          return e;
        case "body":
          if (!(e = t.body)) throw Error(o(454));
          return e;
        default:
          throw Error(o(451));
      }
    }
    function cB(e) {
      for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
      eH(e);
    }
    var cQ = new Map(),
      cH = new Set();
    function cW(e) {
      return "function" == typeof e.getRootNode
        ? e.getRootNode()
        : 9 === e.nodeType
          ? e
          : e.ownerDocument;
    }
    var cV = L.d;
    L.d = {
      f: function () {
        var e = cV.f(),
          t = og();
        return e || t;
      },
      r: function (e) {
        var t = eV(e);
        null !== t && 5 === t.tag && "form" === t.type ? l5(t) : cV.r(e);
      },
      D: function (e) {
        (cV.D(e), cG("dns-prefetch", e, null));
      },
      C: function (e, t) {
        (cV.C(e, t), cG("preconnect", e, t));
      },
      L: function (e, t, n) {
        if ((cV.L(e, t, n), cK && e && t)) {
          var a = 'link[rel="preload"][as="' + ta(t) + '"]';
          "image" === t && n && n.imageSrcSet
            ? ((a += '[imagesrcset="' + ta(n.imageSrcSet) + '"]'),
              "string" == typeof n.imageSizes &&
                (a += '[imagesizes="' + ta(n.imageSizes) + '"]'))
            : (a += '[href="' + ta(e) + '"]');
          var r = a;
          switch (t) {
            case "style":
              r = cX(e);
              break;
            case "script":
              r = c0(e);
          }
          cQ.has(r) ||
            ((e = p(
              {
                rel: "preload",
                href: "image" === t && n && n.imageSrcSet ? void 0 : e,
                as: t,
              },
              n,
            )),
            cQ.set(r, e),
            null !== cK.querySelector(a) ||
              ("style" === t && cK.querySelector(cJ(r))) ||
              ("script" === t && cK.querySelector(c1(r))) ||
              (cb((t = cK.createElement("link")), "link", e),
              eY(t),
              cK.head.appendChild(t)));
        }
      },
      m: function (e, t) {
        if ((cV.m(e, t), cK && e)) {
          var n = t && "string" == typeof t.as ? t.as : "script",
            a =
              'link[rel="modulepreload"][as="' +
              ta(n) +
              '"][href="' +
              ta(e) +
              '"]',
            r = a;
          switch (n) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              r = c0(e);
          }
          if (
            !cQ.has(r) &&
            ((e = p({ rel: "modulepreload", href: e }, t)),
            cQ.set(r, e),
            null === cK.querySelector(a))
          ) {
            switch (n) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (cK.querySelector(c1(r))) return;
            }
            (cb((n = cK.createElement("link")), "link", e),
              eY(n),
              cK.head.appendChild(n));
          }
        }
      },
      X: function (e, t) {
        if ((cV.X(e, t), cK && e)) {
          var n = eG(cK).hoistableScripts,
            a = c0(e),
            r = n.get(a);
          r ||
            ((r = cK.querySelector(c1(a))) ||
              ((e = p({ src: e, async: !0 }, t)),
              (t = cQ.get(a)) && c4(e, t),
              eY((r = cK.createElement("script"))),
              cb(r, "link", e),
              cK.head.appendChild(r)),
            (r = { type: "script", instance: r, count: 1, state: null }),
            n.set(a, r));
        }
      },
      S: function (e, t, n) {
        if ((cV.S(e, t, n), cK && e)) {
          var a = eG(cK).hoistableStyles,
            r = cX(e);
          t = t || "default";
          var l = a.get(r);
          if (!l) {
            var s = { loading: 0, preload: null };
            if ((l = cK.querySelector(cJ(r)))) s.loading = 5;
            else {
              ((e = p({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
                (n = cQ.get(r)) && c5(e, n));
              var i = (l = cK.createElement("link"));
              (eY(i),
                cb(i, "link", e),
                (i._p = new Promise(function (e, t) {
                  ((i.onload = e), (i.onerror = t));
                })),
                i.addEventListener("load", function () {
                  s.loading |= 1;
                }),
                i.addEventListener("error", function () {
                  s.loading |= 2;
                }),
                (s.loading |= 4),
                c3(l, t, cK));
            }
            ((l = { type: "stylesheet", instance: l, count: 1, state: s }),
              a.set(r, l));
          }
        }
      },
      M: function (e, t) {
        if ((cV.M(e, t), cK && e)) {
          var n = eG(cK).hoistableScripts,
            a = c0(e),
            r = n.get(a);
          r ||
            ((r = cK.querySelector(c1(a))) ||
              ((e = p({ src: e, async: !0, type: "module" }, t)),
              (t = cQ.get(a)) && c4(e, t),
              eY((r = cK.createElement("script"))),
              cb(r, "link", e),
              cK.head.appendChild(r)),
            (r = { type: "script", instance: r, count: 1, state: null }),
            n.set(a, r));
        }
      },
    };
    var cK = "u" < typeof document ? null : document;
    function cG(e, t, n) {
      if (cK && "string" == typeof t && t) {
        var a = ta(t);
        ((a = 'link[rel="' + e + '"][href="' + a + '"]'),
          "string" == typeof n && (a += '[crossorigin="' + n + '"]'),
          cH.has(a) ||
            (cH.add(a),
            (e = { rel: e, crossOrigin: n, href: t }),
            null === cK.querySelector(a) &&
              (cb((t = cK.createElement("link")), "link", e),
              eY(t),
              cK.head.appendChild(t))));
      }
    }
    function cY(e, t, n, a) {
      var r = (r = Q.current) ? cW(r) : null;
      if (!r) throw Error(o(446));
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return "string" == typeof n.precedence && "string" == typeof n.href
            ? ((t = cX(n.href)),
              (a = (n = eG(r).hoistableStyles).get(t)) ||
                ((a = { type: "style", instance: null, count: 0, state: null }),
                n.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (
            "stylesheet" === n.rel &&
            "string" == typeof n.href &&
            "string" == typeof n.precedence
          ) {
            e = cX(n.href);
            var l,
              s,
              i,
              c,
              u = eG(r).hoistableStyles,
              d = u.get(e);
            if (
              (d ||
                ((r = r.ownerDocument || r),
                (d = {
                  type: "stylesheet",
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                u.set(e, d),
                (u = r.querySelector(cJ(e))) &&
                  !u._p &&
                  ((d.instance = u), (d.state.loading = 5)),
                cQ.has(e) ||
                  ((n = {
                    rel: "preload",
                    as: "style",
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy,
                  }),
                  cQ.set(e, n),
                  u ||
                    ((l = r),
                    (s = e),
                    (i = n),
                    (c = d.state),
                    l.querySelector(
                      'link[rel="preload"][as="style"][' + s + "]",
                    )
                      ? (c.loading = 1)
                      : ((c.preload = s = l.createElement("link")),
                        s.addEventListener("load", function () {
                          return (c.loading |= 1);
                        }),
                        s.addEventListener("error", function () {
                          return (c.loading |= 2);
                        }),
                        cb(s, "link", i),
                        eY(s),
                        l.head.appendChild(s))))),
              t && null === a)
            )
              throw Error(o(528, ""));
            return d;
          }
          if (t && null !== a) throw Error(o(529, ""));
          return null;
        case "script":
          return (
            (t = n.async),
            "string" == typeof (n = n.src) &&
            t &&
            "function" != typeof t &&
            "symbol" != typeof t
              ? ((t = c0(n)),
                (a = (n = eG(r).hoistableScripts).get(t)) ||
                  ((a = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  n.set(t, a)),
                a)
              : { type: "void", instance: null, count: 0, state: null }
          );
        default:
          throw Error(o(444, e));
      }
    }
    function cX(e) {
      return 'href="' + ta(e) + '"';
    }
    function cJ(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function cZ(e) {
      return p({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function c0(e) {
      return '[src="' + ta(e) + '"]';
    }
    function c1(e) {
      return "script[async]" + e;
    }
    function c2(e, t, n) {
      if ((t.count++, null === t.instance))
        switch (t.type) {
          case "style":
            var a = e.querySelector('style[data-href~="' + ta(n.href) + '"]');
            if (a) return ((t.instance = a), eY(a), a);
            var r = p({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            });
            return (
              eY((a = (e.ownerDocument || e).createElement("style"))),
              cb(a, "style", r),
              c3(a, n.precedence, e),
              (t.instance = a)
            );
          case "stylesheet":
            r = cX(n.href);
            var l = e.querySelector(cJ(r));
            if (l) return ((t.state.loading |= 4), (t.instance = l), eY(l), l);
            ((a = cZ(n)),
              (r = cQ.get(r)) && c5(a, r),
              eY((l = (e.ownerDocument || e).createElement("link"))));
            var s = l;
            return (
              (s._p = new Promise(function (e, t) {
                ((s.onload = e), (s.onerror = t));
              })),
              cb(l, "link", a),
              (t.state.loading |= 4),
              c3(l, n.precedence, e),
              (t.instance = l)
            );
          case "script":
            if (((l = c0(n.src)), (r = e.querySelector(c1(l)))))
              return ((t.instance = r), eY(r), r);
            return (
              (a = n),
              (r = cQ.get(l)) && c4((a = p({}, n)), r),
              eY((r = (e = e.ownerDocument || e).createElement("script"))),
              cb(r, "link", a),
              e.head.appendChild(r),
              (t.instance = r)
            );
          case "void":
            return null;
          default:
            throw Error(o(443, t.type));
        }
      return (
        "stylesheet" === t.type &&
          0 == (4 & t.state.loading) &&
          ((a = t.instance), (t.state.loading |= 4), c3(a, n.precedence, e)),
        t.instance
      );
    }
    function c3(e, t, n) {
      for (
        var a = n.querySelectorAll(
            'link[rel="stylesheet"][data-precedence],style[data-precedence]',
          ),
          r = a.length ? a[a.length - 1] : null,
          l = r,
          s = 0;
        s < a.length;
        s++
      ) {
        var i = a[s];
        if (i.dataset.precedence === t) l = i;
        else if (l !== r) break;
      }
      l
        ? l.parentNode.insertBefore(e, l.nextSibling)
        : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild);
    }
    function c5(e, t) {
      (null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
        null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
        null == e.title && (e.title = t.title));
    }
    function c4(e, t) {
      (null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
        null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
        null == e.integrity && (e.integrity = t.integrity));
    }
    var c6 = null;
    function c8(e, t, n) {
      if (null === c6) {
        var a = new Map(),
          r = (c6 = new Map());
        r.set(n, a);
      } else (a = (r = c6).get(n)) || ((a = new Map()), r.set(n, a));
      if (a.has(e)) return a;
      for (
        a.set(e, null), n = n.getElementsByTagName(e), r = 0;
        r < n.length;
        r++
      ) {
        var l = n[r];
        if (
          !(
            l[eQ] ||
            l[eR] ||
            ("link" === e && "stylesheet" === l.getAttribute("rel"))
          ) &&
          "http://www.w3.org/2000/svg" !== l.namespaceURI
        ) {
          var s = l.getAttribute(t) || "";
          s = e + s;
          var i = a.get(s);
          i ? i.push(l) : a.set(s, [l]);
        }
      }
      return a;
    }
    function c7(e, t, n) {
      (e = e.ownerDocument || e).head.insertBefore(
        n,
        "title" === t ? e.querySelector("head > title") : null,
      );
    }
    function c9(e) {
      return "stylesheet" !== e.type || 0 != (3 & e.state.loading);
    }
    var ue = 0;
    function ut() {
      if (
        (this.count--,
        0 === this.count && (0 === this.imgCount || !this.waitingForImages))
      ) {
        if (this.stylesheets) ua(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          ((this.unsuspend = null), e());
        }
      }
    }
    var un = null;
    function ua(e, t) {
      ((e.stylesheets = null),
        null !== e.unsuspend &&
          (e.count++,
          (un = new Map()),
          t.forEach(ur, e),
          (un = null),
          ut.call(e)));
    }
    function ur(e, t) {
      if (!(4 & t.state.loading)) {
        var n = un.get(e);
        if (n) var a = n.get(null);
        else {
          ((n = new Map()), un.set(e, n));
          for (
            var r = e.querySelectorAll(
                "link[data-precedence],style[data-precedence]",
              ),
              l = 0;
            l < r.length;
            l++
          ) {
            var s = r[l];
            ("LINK" === s.nodeName || "not all" !== s.getAttribute("media")) &&
              (n.set(s.dataset.precedence, s), (a = s));
          }
          a && n.set(null, a);
        }
        ((s = (r = t.instance).getAttribute("data-precedence")),
          (l = n.get(s) || a) === a && n.set(null, r),
          n.set(s, r),
          this.count++,
          (a = ut.bind(this)),
          r.addEventListener("load", a),
          r.addEventListener("error", a),
          l
            ? l.parentNode.insertBefore(r, l.nextSibling)
            : (e = 9 === e.nodeType ? e.head : e).insertBefore(r, e.firstChild),
          (t.state.loading |= 4));
      }
    }
    var ul = {
      $$typeof: j,
      Provider: null,
      Consumer: null,
      _currentValue: q,
      _currentValue2: q,
      _threadCount: 0,
    };
    function us(e, t, n, a, r, l, s, i, o) {
      ((this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = eE(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = eE(0)),
        (this.hiddenUpdates = eE(null)),
        (this.identifierPrefix = a),
        (this.onUncaughtError = r),
        (this.onCaughtError = l),
        (this.onRecoverableError = s),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = o),
        (this.incompleteTransitions = new Map()));
    }
    function ui(e, t, n, a, r, l, s, i, o, c, u, d) {
      return (
        (e = new us(e, t, n, s, o, c, u, d, i)),
        (t = 1),
        !0 === l && (t |= 24),
        (l = al(3, null, null, t)),
        (e.current = l),
        (l.stateNode = e),
        (t = a6()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (l.memoizedState = { element: a, isDehydrated: n, cache: t }),
        rE(l),
        e
      );
    }
    function uo(e, t, n, a, r, l) {
      ((r = r ? aa : aa),
        null === a.context ? (a.context = r) : (a.pendingContext = r),
        ((a = rz(t)).payload = { element: n }),
        null !== (l = void 0 === l ? null : l) && (a.callback = l),
        null !== (n = rT(e, a, t)) && (of(n, e, t), rM(n, e, t)));
    }
    function uc(e, t) {
      if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane;
        e.retryLane = 0 !== n && n < t ? n : t;
      }
    }
    function uu(e, t) {
      (uc(e, t), (e = e.alternate) && uc(e, t));
    }
    function ud(e) {
      if (13 === e.tag || 31 === e.tag) {
        var t = ae(e, 0x4000000);
        (null !== t && of(t, e, 0x4000000), uu(e, 0x4000000));
      }
    }
    function uf(e) {
      if (13 === e.tag || 31 === e.tag) {
        var t = ou(),
          n = ae(e, (t = e_(t)));
        (null !== n && of(n, e, t), uu(e, t));
      }
    }
    var um = !0;
    function up(e, t, n, a) {
      var r = A.T;
      A.T = null;
      var l = L.p;
      try {
        ((L.p = 2), ug(e, t, n, a));
      } finally {
        ((L.p = l), (A.T = r));
      }
    }
    function uh(e, t, n, a) {
      var r = A.T;
      A.T = null;
      var l = L.p;
      try {
        ((L.p = 8), ug(e, t, n, a));
      } finally {
        ((L.p = l), (A.T = r));
      }
    }
    function ug(e, t, n, a) {
      if (um) {
        var r = ub(a);
        if (null === r) (cs(e, t, a, uv, n), uz(e, a));
        else if (
          (function (e, t, n, a, r) {
            switch (t) {
              case "focusin":
                return ((uj = uT(uj, e, t, n, a, r)), !0);
              case "dragenter":
                return ((uw = uT(uw, e, t, n, a, r)), !0);
              case "mouseover":
                return ((uN = uT(uN, e, t, n, a, r)), !0);
              case "pointerover":
                var l = r.pointerId;
                return (uS.set(l, uT(uS.get(l) || null, e, t, n, a, r)), !0);
              case "gotpointercapture":
                return (
                  (l = r.pointerId),
                  uC.set(l, uT(uC.get(l) || null, e, t, n, a, r)),
                  !0
                );
            }
            return !1;
          })(r, e, t, n, a)
        )
          a.stopPropagation();
        else if ((uz(e, a), 4 & t && -1 < u$.indexOf(e))) {
          for (; null !== r;) {
            var l = eV(r);
            if (null !== l)
              switch (l.tag) {
                case 3:
                  if ((l = l.stateNode).current.memoizedState.isDehydrated) {
                    var s = ew(l.pendingLanes);
                    if (0 !== s) {
                      var i = l;
                      for (i.pendingLanes |= 2, i.entangledLanes |= 2; s;) {
                        var o = 1 << (31 - eb(s));
                        ((i.entanglements[1] |= o), (s &= ~o));
                      }
                      (oY(l), 0 == (6 & iI) && ((i7 = el() + 500), oX(0, !1)));
                    }
                  }
                  break;
                case 31:
                case 13:
                  (null !== (i = ae(l, 2)) && of(i, l, 2), og(), uu(l, 2));
              }
            if ((null === (l = ub(a)) && cs(e, t, a, uv, n), l === r)) break;
            r = l;
          }
          null !== r && a.stopPropagation();
        } else cs(e, t, a, null, n);
      }
    }
    function ub(e) {
      return uy((e = tx(e)));
    }
    var uv = null;
    function uy(e) {
      if (((uv = null), null !== (e = eW(e)))) {
        var t = u(e);
        if (null === t) e = null;
        else {
          var n = t.tag;
          if (13 === n) {
            if (null !== (e = d(t))) return e;
            e = null;
          } else if (31 === n) {
            if (null !== (e = f(t))) return e;
            e = null;
          } else if (3 === n) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return 3 === t.tag ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return ((uv = e), null);
    }
    function ux(e) {
      switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 8;
        case "message":
          switch (es()) {
            case ei:
              return 2;
            case eo:
              return 8;
            case ec:
            case eu:
              return 32;
            case ed:
              return 0x10000000;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var uk = !1,
      uj = null,
      uw = null,
      uN = null,
      uS = new Map(),
      uC = new Map(),
      uE = [],
      u$ =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
          " ",
        );
    function uz(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          uj = null;
          break;
        case "dragenter":
        case "dragleave":
          uw = null;
          break;
        case "mouseover":
        case "mouseout":
          uN = null;
          break;
        case "pointerover":
        case "pointerout":
          uS.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          uC.delete(t.pointerId);
      }
    }
    function uT(e, t, n, a, r, l) {
      return (
        null === e || e.nativeEvent !== l
          ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: a,
              nativeEvent: l,
              targetContainers: [r],
            }),
            null !== t && null !== (t = eV(t)) && ud(t))
          : ((e.eventSystemFlags |= a),
            (t = e.targetContainers),
            null !== r && -1 === t.indexOf(r) && t.push(r)),
        e
      );
    }
    function uM(e) {
      var t = eW(e.target);
      if (null !== t) {
        var n = u(t);
        if (null !== n) {
          if (13 === (t = n.tag)) {
            if (null !== (t = d(n))) {
              ((e.blockedOn = t),
                eL(e.priority, function () {
                  uf(n);
                }));
              return;
            }
          } else if (31 === t) {
            if (null !== (t = f(n))) {
              ((e.blockedOn = t),
                eL(e.priority, function () {
                  uf(n);
                }));
              return;
            }
          } else if (
            3 === t &&
            n.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function u_(e) {
      if (null !== e.blockedOn) return !1;
      for (var t = e.targetContainers; 0 < t.length;) {
        var n = ub(e.nativeEvent);
        if (null !== n)
          return (null !== (t = eV(n)) && ud(t), (e.blockedOn = n), !1);
        var a = new (n = e.nativeEvent).constructor(n.type, n);
        ((ty = a), n.target.dispatchEvent(a), (ty = null), t.shift());
      }
      return !0;
    }
    function uP(e, t, n) {
      u_(e) && n.delete(t);
    }
    function uA() {
      ((uk = !1),
        null !== uj && u_(uj) && (uj = null),
        null !== uw && u_(uw) && (uw = null),
        null !== uN && u_(uN) && (uN = null),
        uS.forEach(uP),
        uC.forEach(uP));
    }
    function uL(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        uk ||
          ((uk = !0),
          l.unstable_scheduleCallback(l.unstable_NormalPriority, uA)));
    }
    var uq = null;
    function uR(e) {
      uq !== e &&
        ((uq = e),
        l.unstable_scheduleCallback(l.unstable_NormalPriority, function () {
          uq === e && (uq = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              a = e[t + 1],
              r = e[t + 2];
            if ("function" != typeof a)
              if (null === uy(a || n)) continue;
              else break;
            var l = eV(n);
            null !== l &&
              (e.splice(t, 3),
              (t -= 3),
              l2(
                l,
                { pending: !0, data: r, method: n.method, action: a },
                a,
                r,
              ));
          }
        }));
    }
    function uD(e) {
      function t(t) {
        return uL(t, e);
      }
      (null !== uj && uL(uj, e),
        null !== uw && uL(uw, e),
        null !== uN && uL(uN, e),
        uS.forEach(t),
        uC.forEach(t));
      for (var n = 0; n < uE.length; n++) {
        var a = uE[n];
        a.blockedOn === e && (a.blockedOn = null);
      }
      for (; 0 < uE.length && null === (n = uE[0]).blockedOn;)
        (uM(n), null === n.blockedOn && uE.shift());
      if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
        for (a = 0; a < n.length; a += 3) {
          var r = n[a],
            l = n[a + 1],
            s = r[eD] || null;
          if ("function" == typeof l) s || uR(n);
          else if (s) {
            var i = null;
            if (l && l.hasAttribute("formAction")) {
              if (((r = l), (s = l[eD] || null))) i = s.formAction;
              else if (null !== uy(r)) continue;
            } else i = s.action;
            ("function" == typeof i
              ? (n[a + 1] = i)
              : (n.splice(a, 3), (a -= 3)),
              uR(n));
          }
        }
    }
    function uF() {
      function e(e) {
        e.canIntercept &&
          "react-transition" === e.info &&
          e.intercept({
            handler: function () {
              return new Promise(function (e) {
                return (r = e);
              });
            },
            focusReset: "manual",
            scroll: "manual",
          });
      }
      function t() {
        (null !== r && (r(), (r = null)), a || setTimeout(n, 20));
      }
      function n() {
        if (!a && !navigation.transition) {
          var e = navigation.currentEntry;
          e &&
            null != e.url &&
            navigation.navigate(e.url, {
              state: e.getState(),
              info: "react-transition",
              history: "replace",
            });
        }
      }
      if ("object" == typeof navigation) {
        var a = !1,
          r = null;
        return (
          navigation.addEventListener("navigate", e),
          navigation.addEventListener("navigatesuccess", t),
          navigation.addEventListener("navigateerror", t),
          setTimeout(n, 100),
          function () {
            ((a = !0),
              navigation.removeEventListener("navigate", e),
              navigation.removeEventListener("navigatesuccess", t),
              navigation.removeEventListener("navigateerror", t),
              null !== r && (r(), (r = null)));
          }
        );
      }
    }
    function uO(e) {
      this._internalRoot = e;
    }
    function uI(e) {
      this._internalRoot = e;
    }
    ((uI.prototype.render = uO.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (null === t) throw Error(o(409));
        uo(t.current, ou(), e, t, null, null);
      }),
      (uI.prototype.unmount = uO.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (null !== e) {
            this._internalRoot = null;
            var t = e.containerInfo;
            (uo(e.current, 2, null, e, null, null), og(), (t[eF] = null));
          }
        }),
      (uI.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
          var t = eA();
          e = { blockedOn: null, target: e, priority: t };
          for (var n = 0; n < uE.length && 0 !== t && t < uE[n].priority; n++);
          (uE.splice(n, 0, e), 0 === n && uM(e));
        }
      }));
    var uU = s.version;
    if ("19.2.7" !== uU) throw Error(o(527, uU, "19.2.7"));
    if (
      ((L.findDOMNode = function (e) {
        var t = e._reactInternals;
        if (void 0 === t) {
          if ("function" == typeof e.render) throw Error(o(188));
          throw Error(o(268, (e = Object.keys(e).join(","))));
        }
        return null ===
          (e =
            null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = u(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, a = t; ;) {
                var r = n.return;
                if (null === r) break;
                var l = r.alternate;
                if (null === l) {
                  if (null !== (a = r.return)) {
                    n = a;
                    continue;
                  }
                  break;
                }
                if (r.child === l.child) {
                  for (l = r.child; l;) {
                    if (l === n) return (m(r), e);
                    if (l === a) return (m(r), t);
                    l = l.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== a.return) ((n = r), (a = l));
                else {
                  for (var s = !1, i = r.child; i;) {
                    if (i === n) {
                      ((s = !0), (n = r), (a = l));
                      break;
                    }
                    if (i === a) {
                      ((s = !0), (a = r), (n = l));
                      break;
                    }
                    i = i.sibling;
                  }
                  if (!s) {
                    for (i = l.child; i;) {
                      if (i === n) {
                        ((s = !0), (n = l), (a = r));
                        break;
                      }
                      if (i === a) {
                        ((s = !0), (a = l), (n = r));
                        break;
                      }
                      i = i.sibling;
                    }
                    if (!s) throw Error(o(189));
                  }
                }
                if (n.alternate !== a) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(t))
              ? (function e(t) {
                  var n = t.tag;
                  if (5 === n || 26 === n || 27 === n || 6 === n) return t;
                  for (t = t.child; null !== t;) {
                    if (null !== (n = e(t))) return n;
                    t = t.sibling;
                  }
                  return null;
                })(e)
              : null)
          ? null
          : e.stateNode;
      }),
      "u" > typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)
    ) {
      var uB = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!uB.isDisabled && uB.supportsFiber)
        try {
          ((ep = uB.inject({
            bundleType: 0,
            version: "19.2.7",
            rendererPackageName: "react-dom",
            currentDispatcherRef: A,
            reconcilerVersion: "19.2.7",
          })),
            (eh = uB));
        } catch (e) {}
    }
    ((tD = function (e, t) {
      if (!c(e)) throw Error(o(299));
      var n = !1,
        a = "",
        r = sh,
        l = sg,
        s = sb;
      return (
        null != t &&
          (!0 === t.unstable_strictMode && (n = !0),
          void 0 !== t.identifierPrefix && (a = t.identifierPrefix),
          void 0 !== t.onUncaughtError && (r = t.onUncaughtError),
          void 0 !== t.onCaughtError && (l = t.onCaughtError),
          void 0 !== t.onRecoverableError && (s = t.onRecoverableError)),
        (t = ui(e, 1, !1, null, null, n, a, null, r, l, s, uF)),
        (e[eF] = t.current),
        cr(e),
        new uO(t)
      );
    }),
      (tF = function (e, t, n) {
        if (!c(e)) throw Error(o(299));
        var a = !1,
          r = "",
          l = sh,
          s = sg,
          i = sb,
          u = null;
        return (
          null != n &&
            (!0 === n.unstable_strictMode && (a = !0),
            void 0 !== n.identifierPrefix && (r = n.identifierPrefix),
            void 0 !== n.onUncaughtError && (l = n.onUncaughtError),
            void 0 !== n.onCaughtError && (s = n.onCaughtError),
            void 0 !== n.onRecoverableError && (i = n.onRecoverableError),
            void 0 !== n.formState && (u = n.formState)),
          ((t = ui(
            e,
            1,
            !0,
            t,
            null != n ? n : null,
            a,
            r,
            u,
            l,
            s,
            i,
            uF,
          )).context = aa),
          (n = t.current),
          ((r = rz((a = e_((a = ou()))))).callback = null),
          rT(n, r, a),
          (n = a),
          (t.current.lanes = n),
          e$(t, n),
          oY(t),
          (e[eF] = t.current),
          cr(e),
          new uI(t)
        );
      }),
      (tO = "19.2.7"));
  }),
  l("aALGe", function (e, t) {
    e.exports = r("hurnZ");
  }),
  l("hurnZ", function (t, n) {
    function a(e, t) {
      var n = e.length;
      for (e.push(t); 0 < n;) {
        var a = (n - 1) >>> 1,
          r = e[a];
        if (0 < s(r, t)) ((e[a] = t), (e[n] = r), (n = a));
        else break;
      }
    }
    function r(e) {
      return 0 === e.length ? null : e[0];
    }
    function l(e) {
      if (0 === e.length) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        for (var a = 0, r = e.length, l = r >>> 1; a < l;) {
          var i = 2 * (a + 1) - 1,
            o = e[i],
            c = i + 1,
            u = e[c];
          if (0 > s(o, n))
            c < r && 0 > s(u, o)
              ? ((e[a] = u), (e[c] = n), (a = c))
              : ((e[a] = o), (e[i] = n), (a = i));
          else if (c < r && 0 > s(u, n)) ((e[a] = u), (e[c] = n), (a = c));
          else break;
        }
      }
      return t;
    }
    function s(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return 0 !== n ? n : e.id - t.id;
    }
    if (
      (e(
        t.exports,
        "unstable_now",
        () => i,
        (e) => (i = e),
      ),
      e(
        t.exports,
        "unstable_IdlePriority",
        () => o,
        (e) => (o = e),
      ),
      e(
        t.exports,
        "unstable_ImmediatePriority",
        () => c,
        (e) => (c = e),
      ),
      e(
        t.exports,
        "unstable_LowPriority",
        () => u,
        (e) => (u = e),
      ),
      e(
        t.exports,
        "unstable_NormalPriority",
        () => d,
        (e) => (d = e),
      ),
      e(
        t.exports,
        "unstable_Profiling",
        () => f,
        (e) => (f = e),
      ),
      e(
        t.exports,
        "unstable_UserBlockingPriority",
        () => m,
        (e) => (m = e),
      ),
      e(
        t.exports,
        "unstable_cancelCallback",
        () => p,
        (e) => (p = e),
      ),
      e(
        t.exports,
        "unstable_forceFrameRate",
        () => h,
        (e) => (h = e),
      ),
      e(
        t.exports,
        "unstable_getCurrentPriorityLevel",
        () => g,
        (e) => (g = e),
      ),
      e(
        t.exports,
        "unstable_next",
        () => b,
        (e) => (b = e),
      ),
      e(
        t.exports,
        "unstable_requestPaint",
        () => v,
        (e) => (v = e),
      ),
      e(
        t.exports,
        "unstable_runWithPriority",
        () => y,
        (e) => (y = e),
      ),
      e(
        t.exports,
        "unstable_scheduleCallback",
        () => x,
        (e) => (x = e),
      ),
      e(
        t.exports,
        "unstable_shouldYield",
        () => k,
        (e) => (k = e),
      ),
      e(
        t.exports,
        "unstable_wrapCallback",
        () => j,
        (e) => (j = e),
      ),
      (i = void 0),
      "object" == typeof performance && "function" == typeof performance.now)
    ) {
      var i,
        o,
        c,
        u,
        d,
        f,
        m,
        p,
        h,
        g,
        b,
        v,
        y,
        x,
        k,
        j,
        w,
        N = performance;
      i = function () {
        return N.now();
      };
    } else {
      var S = Date,
        C = S.now();
      i = function () {
        return S.now() - C;
      };
    }
    var E = [],
      $ = [],
      z = 1,
      T = null,
      M = 3,
      _ = !1,
      P = !1,
      A = !1,
      L = !1,
      q = "function" == typeof setTimeout ? setTimeout : null,
      R = "function" == typeof clearTimeout ? clearTimeout : null,
      D = "u" > typeof setImmediate ? setImmediate : null;
    function F(e) {
      for (var t = r($); null !== t;) {
        if (null === t.callback) l($);
        else if (t.startTime <= e)
          (l($), (t.sortIndex = t.expirationTime), a(E, t));
        else break;
        t = r($);
      }
    }
    function O(e) {
      if (((A = !1), F(e), !P))
        if (null !== r(E)) ((P = !0), I || ((I = !0), w()));
        else {
          var t = r($);
          null !== t && G(O, t.startTime - e);
        }
    }
    var I = !1,
      U = -1,
      B = 5,
      Q = -1;
    function H() {
      return !!L || !(i() - Q < B);
    }
    function W() {
      if (((L = !1), I)) {
        var e = i();
        Q = e;
        var t = !0;
        try {
          e: {
            ((P = !1), A && ((A = !1), R(U), (U = -1)), (_ = !0));
            var n = M;
            try {
              t: {
                for (
                  F(e), T = r(E);
                  null !== T && !(T.expirationTime > e && H());
                ) {
                  var a = T.callback;
                  if ("function" == typeof a) {
                    ((T.callback = null), (M = T.priorityLevel));
                    var s = a(T.expirationTime <= e);
                    if (((e = i()), "function" == typeof s)) {
                      ((T.callback = s), F(e), (t = !0));
                      break t;
                    }
                    (T === r(E) && l(E), F(e));
                  } else l(E);
                  T = r(E);
                }
                if (null !== T) t = !0;
                else {
                  var o = r($);
                  (null !== o && G(O, o.startTime - e), (t = !1));
                }
              }
              break e;
            } finally {
              ((T = null), (M = n), (_ = !1));
            }
          }
        } finally {
          t ? w() : (I = !1);
        }
      }
    }
    if ("function" == typeof D)
      w = function () {
        D(W);
      };
    else if ("u" > typeof MessageChannel) {
      var V = new MessageChannel(),
        K = V.port2;
      ((V.port1.onmessage = W),
        (w = function () {
          K.postMessage(null);
        }));
    } else
      w = function () {
        q(W, 0);
      };
    function G(e, t) {
      U = q(function () {
        e(i());
      }, t);
    }
    ((o = 5),
      (c = 1),
      (u = 4),
      (d = 3),
      (f = null),
      (m = 2),
      (p = function (e) {
        e.callback = null;
      }),
      (h = function (e) {
        0 > e || 125 < e
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
            )
          : (B = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (g = function () {
        return M;
      }),
      (b = function (e) {
        switch (M) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = M;
        }
        var n = M;
        M = t;
        try {
          return e();
        } finally {
          M = n;
        }
      }),
      (v = function () {
        L = !0;
      }),
      (y = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = M;
        M = e;
        try {
          return t();
        } finally {
          M = n;
        }
      }),
      (x = function (e, t, n) {
        var l = i();
        switch (
          ((n =
            "object" == typeof n &&
            null !== n &&
            "number" == typeof (n = n.delay) &&
            0 < n
              ? l + n
              : l),
          e)
        ) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 0x3fffffff;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (s = n + s),
          (e = {
            id: z++,
            callback: t,
            priorityLevel: e,
            startTime: n,
            expirationTime: s,
            sortIndex: -1,
          }),
          n > l
            ? ((e.sortIndex = n),
              a($, e),
              null === r(E) &&
                e === r($) &&
                (A ? (R(U), (U = -1)) : (A = !0), G(O, n - l)))
            : ((e.sortIndex = s),
              a(E, e),
              P || _ || ((P = !0), I || ((I = !0), w()))),
          e
        );
      }),
      (k = H),
      (j = function (e) {
        var t = M;
        return function () {
          var n = M;
          M = t;
          try {
            return e.apply(this, arguments);
          } finally {
            M = n;
          }
        };
      }));
  }),
  l("2YQ6R", function (e, t) {
    e.exports = r("kgQjf");
  }),
  l("8yZRv", function (e, t) {
    (!(function e() {
      if (
        "u" > typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
        "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
        } catch (e) {
          console.error(e);
        }
    })(),
      (e.exports = r("7klJZ")));
  }),
  l("7klJZ", function (t, n) {
    (e(
      t.exports,
      "__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE",
      () => a,
      (e) => (a = e),
    ),
      e(
        t.exports,
        "createPortal",
        () => l,
        (e) => (l = e),
      ),
      e(
        t.exports,
        "flushSync",
        () => s,
        (e) => (s = e),
      ),
      e(
        t.exports,
        "preconnect",
        () => i,
        (e) => (i = e),
      ),
      e(
        t.exports,
        "prefetchDNS",
        () => o,
        (e) => (o = e),
      ),
      e(
        t.exports,
        "preinit",
        () => c,
        (e) => (c = e),
      ),
      e(
        t.exports,
        "preinitModule",
        () => u,
        (e) => (u = e),
      ),
      e(
        t.exports,
        "preload",
        () => d,
        (e) => (d = e),
      ),
      e(
        t.exports,
        "preloadModule",
        () => f,
        (e) => (f = e),
      ),
      e(
        t.exports,
        "requestFormReset",
        () => m,
        (e) => (m = e),
      ),
      e(
        t.exports,
        "unstable_batchedUpdates",
        () => p,
        (e) => (p = e),
      ),
      e(
        t.exports,
        "useFormState",
        () => h,
        (e) => (h = e),
      ),
      e(
        t.exports,
        "useFormStatus",
        () => g,
        (e) => (g = e),
      ),
      e(
        t.exports,
        "version",
        () => b,
        (e) => (b = e),
      ));
    var a,
      l,
      s,
      i,
      o,
      c,
      u,
      d,
      f,
      m,
      p,
      h,
      g,
      b,
      v = r("2YQ6R");
    function y(e) {
      var t = "https://react.dev/errors/" + e;
      if (1 < arguments.length) {
        t += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += "&args[]=" + encodeURIComponent(arguments[n]);
      }
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    function x() {}
    var k = {
        d: {
          f: x,
          r: function () {
            throw Error(y(522));
          },
          D: x,
          C: x,
          L: x,
          m: x,
          X: x,
          S: x,
          M: x,
        },
        p: 0,
        findDOMNode: null,
      },
      j = Symbol.for("react.portal"),
      w = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function N(e, t) {
      return "font" === e
        ? ""
        : "string" == typeof t
          ? "use-credentials" === t
            ? t
            : ""
          : void 0;
    }
    ((a = k),
      (l = function (e, t) {
        var n =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!t || (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType))
          throw Error(y(299));
        return (function (e, t, n) {
          var a =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: j,
            key: null == a ? null : "" + a,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        })(e, t, null, n);
      }),
      (s = function (e) {
        var t = w.T,
          n = k.p;
        try {
          if (((w.T = null), (k.p = 2), e)) return e();
        } finally {
          ((w.T = t), (k.p = n), k.d.f());
        }
      }),
      (i = function (e, t) {
        "string" == typeof e &&
          ((t = t
            ? "string" == typeof (t = t.crossOrigin)
              ? "use-credentials" === t
                ? t
                : ""
              : void 0
            : null),
          k.d.C(e, t));
      }),
      (o = function (e) {
        "string" == typeof e && k.d.D(e);
      }),
      (c = function (e, t) {
        if ("string" == typeof e && t && "string" == typeof t.as) {
          var n = t.as,
            a = N(n, t.crossOrigin),
            r = "string" == typeof t.integrity ? t.integrity : void 0,
            l = "string" == typeof t.fetchPriority ? t.fetchPriority : void 0;
          "style" === n
            ? k.d.S(
                e,
                "string" == typeof t.precedence ? t.precedence : void 0,
                { crossOrigin: a, integrity: r, fetchPriority: l },
              )
            : "script" === n &&
              k.d.X(e, {
                crossOrigin: a,
                integrity: r,
                fetchPriority: l,
                nonce: "string" == typeof t.nonce ? t.nonce : void 0,
              });
        }
      }),
      (u = function (e, t) {
        if ("string" == typeof e)
          if ("object" == typeof t && null !== t) {
            if (null == t.as || "script" === t.as) {
              var n = N(t.as, t.crossOrigin);
              k.d.M(e, {
                crossOrigin: n,
                integrity:
                  "string" == typeof t.integrity ? t.integrity : void 0,
                nonce: "string" == typeof t.nonce ? t.nonce : void 0,
              });
            }
          } else null == t && k.d.M(e);
      }),
      (d = function (e, t) {
        if (
          "string" == typeof e &&
          "object" == typeof t &&
          null !== t &&
          "string" == typeof t.as
        ) {
          var n = t.as,
            a = N(n, t.crossOrigin);
          k.d.L(e, n, {
            crossOrigin: a,
            integrity: "string" == typeof t.integrity ? t.integrity : void 0,
            nonce: "string" == typeof t.nonce ? t.nonce : void 0,
            type: "string" == typeof t.type ? t.type : void 0,
            fetchPriority:
              "string" == typeof t.fetchPriority ? t.fetchPriority : void 0,
            referrerPolicy:
              "string" == typeof t.referrerPolicy ? t.referrerPolicy : void 0,
            imageSrcSet:
              "string" == typeof t.imageSrcSet ? t.imageSrcSet : void 0,
            imageSizes: "string" == typeof t.imageSizes ? t.imageSizes : void 0,
            media: "string" == typeof t.media ? t.media : void 0,
          });
        }
      }),
      (f = function (e, t) {
        if ("string" == typeof e)
          if (t) {
            var n = N(t.as, t.crossOrigin);
            k.d.m(e, {
              as: "string" == typeof t.as && "script" !== t.as ? t.as : void 0,
              crossOrigin: n,
              integrity: "string" == typeof t.integrity ? t.integrity : void 0,
            });
          } else k.d.m(e);
      }),
      (m = function (e) {
        k.d.r(e);
      }),
      (p = function (e, t) {
        return e(t);
      }),
      (h = function (e, t, n) {
        return w.H.useFormState(e, t, n);
      }),
      (g = function () {
        return w.H.useHostTransitionStatus();
      }),
      (b = "19.2.7"));
  }));
var s = {};
s = r("6mwK0");
var i = r("2YQ6R"),
  o = {};
(!(function e() {
  if (
    "u" > typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
    "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
    } catch (e) {
      console.error(e);
    }
})(),
  (o = r("7b93F")));
var i = r("2YQ6R");
let c = [
    { id: "lentes", name: "Lentes de sol", emoji: "🕶️", price: 50 },
    { id: "mono", name: "Moño elegante", emoji: "🎀", price: 60 },
    { id: "gorra", name: "Gorra veloz", emoji: "🧢", price: 80 },
    { id: "corona", name: "Corona real", emoji: "👑", price: 120 },
    { id: "mago", name: "Sombrero de mago", emoji: "🧙", price: 150 },
    { id: "bufanda", name: "Bufanda cálida", emoji: "🧣", price: 55 },
    { id: "flor", name: "Flor alegre", emoji: "🌸", price: 55 },
    { id: "arcoiris", name: "Gorro arcoíris", emoji: "🌈", price: 90 },
    { id: "estrellac", name: "Gorro estrella", emoji: "⭐", price: 100 },
    { id: "cohetec", name: "Casco cohete", emoji: "🚀", price: 130 },
    { id: "calabaza", name: "Calabaza de Halloween", emoji: "🎃", price: 90, season: 10 },
    { id: "santa", name: "Gorro navideño", emoji: "🎅", price: 90, season: 12 },
    { id: "corazon", name: "Diadema de corazón", emoji: "💝", price: 90, season: 2 },
    { id: "conejo", name: "Orejas de conejo", emoji: "🐰", price: 90, season: 4 },
  ],
  u = null;
let mgChar = "turbo";
/* Cada acompañante trae un `perk`: antes elegirlo era puramente estético.
   El `key` es lo único que consultan los enganches, así que sumar un
   acompañante no obliga a tocarlos. Ojo: los potenciadores solo existen en
   el camino del aventurero — el del pequeño no tiene vidas, ni reloj, ni
   monedas, ni objetos donde aplicarlos. */
let mgChars = [
  { id: "turbo", name: "Turbo", emoji: "🐶", unlock: 0, desc: "El pug de siempre", voice: "¡Guau!", voiceLow: "guau", sound: "bark", treat: "huesitos",
    perk: { key: "escudo", emoji: "🛡️", txt: "A veces evita perder un corazón" },
    perkMini: { key: "consuelo", emoji: "🤗", txt: "Te consuela cuando algo sale mal" } },
  { id: "gato", name: "Michi", emoji: "🐱", unlock: 12, desc: "Gatito curioso", voice: "¡Miau!", voiceLow: "miau", sound: "meow", treat: "pescaditos",
    perk: { key: "tiempo", emoji: "❄️", txt: "Congela el reloj más seguido" },
    perkMini: { key: "calma", emoji: "🧩", txt: "Trae juegos sorpresa más seguido" } },
  { id: "perro2", name: "Bruno", emoji: "🐕", unlock: 30, desc: "Perro negro despeinado", voice: "¡Guau!", voiceLow: "guau", sound: "bark", treat: "huesitos",
    perk: { key: "monedas", emoji: "🪙", txt: "Una moneda extra por acierto" },
    perkMini: { key: "fiesta", emoji: "🎉", txt: "Celebra tus rachas desde la segunda" } },
  { id: "zorro", name: "Rita", emoji: "🦊", unlock: 50, desc: "Zorrita rastreadora", voice: "¡Yip!", voiceLow: "yip", sound: "yip", treat: "moritas",
    perk: { key: "objetos", emoji: "🎁", txt: "Más cofres y más objetos" },
    perkMini: { key: "regalos", emoji: "🎁", txt: "Te encuentra calcomanías de regalo" } },
];
function mgCharDef() {
  return mgChars.find((x) => x.id === mgChar) || mgChars[0];
}
function mgCharName() {
  return mgCharDef().name;
}
// Voz, sonido y golosina del compañero activo, tomados del roster: una
// mascota nueva solo necesita definir ahí sus campos para sonar bien.
function mgVoz() {
  return mgCharDef().voice || "¡Guau!";
}
function mgVozLow() {
  return mgCharDef().voiceLow || "guau";
}
function mgTreat() {
  return mgCharDef().treat || "huesitos";
}
// Desbloqueo FAMILIAR de compañeros: si cualquier perfil del dispositivo
// alcanza el umbral, el compañero queda disponible para todos (llave
// global mg_chars_unlocked, fuera del prefijo por perfil). El compañero
// ELEGIDO (mg_char) sigue siendo por perfil.
function mgCharsUnlocked() {
  try {
    let e = window.__mgRaw && window.__mgRaw.get("mg_chars_unlocked");
    return e ? JSON.parse(e) || {} : {};
  } catch {
    return {};
  }
}
function mgSyncCharUnlocks(n) {
  try {
    let e = mgCharsUnlocked(),
      t = !1;
    mgChars.forEach((c) => {
      c.unlock > 0 && (n || 0) >= c.unlock && !e[c.id] && ((e[c.id] = !0), (t = !0));
    });
    t && window.__mgRaw && window.__mgRaw.set("mg_chars_unlocked", JSON.stringify(e));
    return e;
  } catch {
    return {};
  }
}
function mgCharIsUnlocked(c, n) {
  return 0 === c.unlock || (n || 0) >= c.unlock || !!mgCharsUnlocked()[c.id];
}
function mgCountDone(e) {
  try {
    let t = JSON.parse(e || "{}"),
      n = 0;
    for (let a in t) t[a] && t[a].done && n++;
    return n;
  } catch {
    return 0;
  }
}
// Siembra al arrancar: recorre el progreso de TODOS los perfiles (y el
// legado sin perfil) para que lo ya ganado por un hermano cuente para
// toda la familia desde el primer render.
function mgSeedCharUnlocks() {
  try {
    let raw = window.__mgRaw;
    if (!raw) return;
    let profs = [];
    try {
      profs = JSON.parse(raw.get("mg_profiles")) || [];
    } catch {}
    let best = mgCountDone(raw.get("mg_path")) + mgCountDone(raw.get("mg_little_path"));
    profs.forEach((p) => {
      let n =
        mgCountDone(raw.get("mg_" + p.id + "__mg_path")) +
        mgCountDone(raw.get("mg_" + p.id + "__mg_little_path"));
      n > best && (best = n);
    });
    mgSyncCharUnlocks(best);
  } catch {}
}
/* Enemigos menores (secuaces) que aparecen en niveles normales: se
   derrotan con pocos aciertos, a diferencia del jefe de fin de mundo.
   `hp` es por enemigo: con un valor único para todos, los secuaces eran
   seis caras distintas del mismo enemigo. */
let mgMinions = [
  { id: "bichito", emoji: "👾", name: "Bichito", hp: 3 },
  { id: "germin", emoji: "🦠", name: "Germín", hp: 2 },
  { id: "robotin", emoji: "🤖", name: "Robotín", hp: 4 },
  { id: "fantasmin", emoji: "👻", name: "Fantasmín", hp: 3 },
  { id: "gusanin", emoji: "🐛", name: "Gusanín", hp: 2 },
  { id: "murcielin", emoji: "🦇", name: "Murcielín", hp: 3 },
  { id: "aranin", emoji: "🕷️", name: "Arañín", hp: 3 },
  { id: "cangrejin", emoji: "🦀", name: "Cangrejín", hp: 4 },
  { id: "pulpin", emoji: "🐙", name: "Pulpín", hp: 4 },
  { id: "abejin", emoji: "🐝", name: "Abejín", hp: 2 },
  { id: "dinosaurin", emoji: "🦖", name: "Dinosaurín", hp: 5 },
  { id: "cactin", emoji: "🌵", name: "Cactín", hp: 3 },
  { id: "chispin", emoji: "⚡", name: "Chispín", hp: 2 },
  { id: "cocodrilin", emoji: "🐊", name: "Cocodrilín", hp: 4 },
  // Segunda tanda: al niño le gustó explorar el catálogo, así que hay más
  // enemigos distintos, no más seguidos.
  { id: "pinguin", emoji: "🐧", name: "Pingüín", hp: 2 },
  { id: "ranin", emoji: "🐸", name: "Ranín", hp: 2 },
  { id: "erizin", emoji: "🦔", name: "Ericín", hp: 3 },
  { id: "calamarin", emoji: "🦑", name: "Calamarín", hp: 3 },
  { id: "buhin", emoji: "🦉", name: "Buhín", hp: 3 },
  { id: "mapachin", emoji: "🦝", name: "Mapachín", hp: 3 },
  { id: "escorpin", emoji: "🦂", name: "Escorpín", hp: 4 },
  { id: "tiburin", emoji: "🦈", name: "Tiburín", hp: 4 },
  { id: "dragoncin", emoji: "🐲", name: "Dragoncín", hp: 5 },
  { id: "yetin", emoji: "🦣", name: "Mamutín", hp: 5 },
];
const MG_MINION_HP = 3; // respaldo si a un secuaz le faltara `hp`
/* Orden de secuaces de un nivel. Antes el índice salía de los aciertos del
   nivel, así que TODO nivel empezaba con Bichito y, como un nivel de 10
   preguntas solo alcanza a mostrar unos cuatro, los últimos del arreglo no
   se veían nunca. Con una mezcla determinista sembrada por el id del nivel
   cada nivel trae su propia secuencia, y sigue siendo estable entre
   repintados porque la función es pura. */
function mgMinionOrden(seed) {
  let a = mgMinions.slice(),
    s = ((seed || 1) * 2654435761) % 4294967291;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    let j = s % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
/* Quién está enfrente con Q aciertos acumulados. Camina el HP de cada secuaz
   porque ya no es uniforme y no se puede dividir. Devuelve además `prev`: el
   secuaz que se acaba de derrotar, cuando Q cae justo en el límite. Hace
   falta para conservar el comportamiento original — la pantalla muestra al
   derrotado con 0 corazones solo durante la respuesta correcta, y en la
   pregunta siguiente ya aparece el enemigo nuevo entero. */
function mgMinionAt(orden, Q) {
  let acc = 0,
    prev = null;
  for (let i = 0; i < 400; i++) {
    let m = orden[i % orden.length],
      h = m.hp || MG_MINION_HP;
    if (Q < acc + h)
      return {
        mn: m,
        hp: h,
        resta: acc + h - Q,
        prev: Q > 0 && Q === acc ? prev : null,
      };
    ((acc += h), (prev = m));
  }
  return { mn: orden[0], hp: orden[0].hp || MG_MINION_HP, resta: 1, prev: null };
}
// Clave del potenciador activo (""/desconocido = sin potenciador).
function mgPerkKey() {
  if (!mgOn("perks")) return "";
  let c = mgCharDef();
  return (c && c.perk && c.perk.key) || "";
}
/* Potenciador del camino pequeño. Es distinto del de arriba a propósito: ahí
   no hay vidas, reloj ni monedas, así que el acompañante acompaña — consuela,
   celebra, trae juegos o regala calcomanías. La presencia emocional base la
   tienen TODOS por igual; esto solo suma, nunca resta. */
function mgPerkMiniKey() {
  if (!mgOn("perks")) return "";
  let c = mgCharDef();
  return (c && c.perkMini && c.perkMini.key) || "";
}
/* Calcomanías de regalo, fuera del álbum de niveles: no las da terminar un
   nivel sino el acompañante, así que viven en su propia colección. */
const MG_REGALOS = [
  { e: "🍀", n: "Trébol de suerte" },
  { e: "🌻", n: "Girasol gigante" },
  { e: "🎀", n: "Moño brillante" },
  { e: "🧸", n: "Osito de peluche" },
  { e: "🍓", n: "Fresa dulce" },
  { e: "🧁", n: "Pastelito" },
  { e: "🪁", n: "Cometa del viento" },
  { e: "🎵", n: "Nota musical" },
  { e: "🌙", n: "Luna dormilona" },
  { e: "⛄", n: "Muñeco de nieve" },
  { e: "🐣", n: "Pollito recién nacido" },
  { e: "🍉", n: "Sandía de verano" },
];
// Un regalo que el niño aún no tenga; null si ya los tiene todos.
function mgRegaloNuevo(tengo) {
  let faltan = MG_REGALOS.filter((r) => !(tengo || []).includes(r.e));
  return faltan.length ? ee(faltan) : null;
}
function mgCharSkin(ch) {
  if ("gato" === ch)
    return {
      fur: "#a9aeb6",
      line: "#888d95",
      outline: "#4a4e56",
      snout: "#c99aa2",
      nose: "#e86a7a",
      // Los gatos no jadean: usan boca de gato (ω) en vez de la lengua del pug.
      mouth: "cat",
      // Orejas erguidas con la base sobre el arco de la cabeza. El path va
      // SIN cerrar: el trazo dibuja solo los dos bordes visibles y el
      // relleno se cierra solo, así la base no raya la frente.
      ears: [
        MG_H("path", { key: "e1", d: "M26 27 L32 5 L45 19", fill: "#a9aeb6", stroke: "#4a4e56", strokeWidth: "1.5", strokeLinejoin: "round" }),
        MG_H("path", { key: "e2", d: "M74 27 L68 5 L55 19", fill: "#a9aeb6", stroke: "#4a4e56", strokeWidth: "1.5", strokeLinejoin: "round" }),
        MG_H("path", { key: "e3", d: "M30.5 23.5 L33 10 L41.5 18.5 Z", fill: "#e8a0b0" }),
        MG_H("path", { key: "e4", d: "M69.5 23.5 L67 10 L58.5 18.5 Z", fill: "#e8a0b0" }),
      ],
      extras: [
        MG_H("path", { key: "w1", d: "M42 60 L20 56", stroke: "#7a7f87", strokeWidth: "1.2", strokeLinecap: "round" }),
        MG_H("path", { key: "w2", d: "M42 63 L20 66", stroke: "#7a7f87", strokeWidth: "1.2", strokeLinecap: "round" }),
        MG_H("path", { key: "w3", d: "M58 60 L80 56", stroke: "#7a7f87", strokeWidth: "1.2", strokeLinecap: "round" }),
        MG_H("path", { key: "w4", d: "M58 63 L80 66", stroke: "#7a7f87", strokeWidth: "1.2", strokeLinecap: "round" }),
      ],
    };
  if ("zorro" === ch)
    return {
      fur: "#e8853c",
      line: "#c96a24",
      outline: "#7a3d12",
      snout: "#fbf3e6",
      nose: "#3a2a22",
      // Como el gato, hocico cerrado en vez de la lengua jadeante del pug.
      mouth: "cat",
      /* Orejas grandes y puntiagudas, más abiertas que las del gato. Mismo
         truco: el path va SIN cerrar para que la base no raye la frente. */
      ears: [
        MG_H("path", { key: "e1", d: "M24 28 L29 2 L47 18", fill: "#e8853c", stroke: "#7a3d12", strokeWidth: "1.5", strokeLinejoin: "round" }),
        MG_H("path", { key: "e2", d: "M76 28 L71 2 L53 18", fill: "#e8853c", stroke: "#7a3d12", strokeWidth: "1.5", strokeLinejoin: "round" }),
        MG_H("path", { key: "e3", d: "M28.5 24 L30 8 L42 17.5 Z", fill: "#2f2019" }),
        MG_H("path", { key: "e4", d: "M71.5 24 L70 8 L58 17.5 Z", fill: "#2f2019" }),
      ],
      extras: [
        // Mejillas claras que dan la cara acorazonada del zorro
        MG_H("path", { key: "c1", d: "M22 46 Q14 60 26 70 Q22 56 30 50 Z", fill: "#fbf3e6", opacity: "0.9" }),
        MG_H("path", { key: "c2", d: "M78 46 Q86 60 74 70 Q78 56 70 50 Z", fill: "#fbf3e6", opacity: "0.9" }),
        MG_H("path", { key: "w1", d: "M43 61 L23 57", stroke: "#a85a1e", strokeWidth: "1.1", strokeLinecap: "round" }),
        MG_H("path", { key: "w2", d: "M57 61 L77 57", stroke: "#a85a1e", strokeWidth: "1.1", strokeLinecap: "round" }),
      ],
    };
  if ("perro2" === ch)
    return {
      fur: "#3d3d47",
      line: "#2a2a34",
      outline: "#15151d",
      snout: "#26262e",
      nose: "#08080c",
      ears: [
        MG_H("path", { key: "e1", d: "M22 29 Q9 43 19 58 Q24 47 35 33 Z", fill: "#2b2b33", stroke: "#15151d", strokeWidth: "1.5" }),
        MG_H("path", { key: "e2", d: "M78 29 Q91 43 81 58 Q76 47 65 33 Z", fill: "#2b2b33", stroke: "#15151d", strokeWidth: "1.5" }),
      ],
      extras: [
        MG_H("path", { key: "t1", d: "M33 25 L37 11 L42 22 L48 9 L53 22 L58 11 L63 22 L67 12 Q50 15 33 25 Z", fill: "#3d3d47", stroke: "#15151d", strokeWidth: "1" }),
      ],
    };
  return {
    fur: "#e9c98f",
    line: "#c9a36a",
    outline: "#3a2a1e",
    snout: "#4a3426",
    nose: "#1a120c",
    ears: [
      MG_H("path", { key: "e1", d: "M23 28 Q13 42 23 54 Q29 40 35 32 Z", fill: "#3a2a1e" }),
      MG_H("path", { key: "e2", d: "M77 28 Q87 42 77 54 Q71 40 65 32 Z", fill: "#3a2a1e" }),
    ],
    // Las arrugas de la frente son del pug: el gato y Bruno no las llevan.
    extras: [
      MG_H("path", { key: "w1", d: "M38 24 Q50 18 62 24", fill: "none", stroke: "#c9a36a", strokeWidth: "2", strokeLinecap: "round" }),
      MG_H("path", { key: "w2", d: "M40 31 Q50 26 60 31", fill: "none", stroke: "#c9a36a", strokeWidth: "2", strokeLinecap: "round" }),
    ],
  };
}
function d({ mood: e = "happy", size: t = 80, outfit: n, extra: ec, char: chOv }) {
  let a = void 0 === n ? u : n,
    chId = chOv || mgChar,
    sk = mgCharSkin(chId),
    r = sk.fur,
    l = sk.line,
    i = "#1a120c",
    o = sk.outline;
  return (0, s.jsxs)("svg", {
    width: t,
    height: t,
    viewBox: "0 0 100 100",
    className: `pug pug-${e} pug-char-${chId}${ec ? " " + ec : ""}`,
    "aria-hidden": "true",
    children: [
      (0, s.jsx)("circle", {
        cx: "78",
        cy: "80",
        r: "6",
        fill: "none",
        stroke: o,
        strokeWidth: "4",
        strokeDasharray: "26 12",
        strokeLinecap: "round",
      }),
      (0, s.jsx)("ellipse", {
        cx: "50",
        cy: "88",
        rx: "25",
        ry: "15",
        fill: r,
        stroke: o,
        strokeWidth: "1.5",
      }),
      (0, s.jsx)("ellipse", {
        cx: "39",
        cy: "97",
        rx: "7",
        ry: "4",
        fill: r,
        stroke: o,
        strokeWidth: "1.5",
      }),
      (0, s.jsx)("ellipse", {
        cx: "61",
        cy: "97",
        rx: "7",
        ry: "4",
        fill: r,
        stroke: o,
        strokeWidth: "1.5",
      }),
      (0, s.jsx)("ellipse", {
        cx: "50",
        cy: "46",
        rx: "31",
        ry: "29",
        fill: r,
        stroke: o,
        strokeWidth: "1.5",
      }),
      ...sk.ears,
      (0, s.jsx)("ellipse", {
        cx: "50",
        cy: "61",
        rx: "16",
        ry: "13",
        fill: sk.snout,
      }),
      (0, s.jsx)("ellipse", {
        cx: "50",
        cy: "55",
        rx: "5.5",
        ry: "4",
        fill: sk.nose,
      }),
      (0, s.jsx)("ellipse", {
        cx: "48.5",
        cy: "53.8",
        rx: "1.5",
        ry: "1",
        fill: "#5a4a3a",
      }),
      "sad" === e
        ? (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("circle", { cx: "35", cy: "47", r: "6", fill: i }),
              (0, s.jsx)("circle", { cx: "65", cy: "47", r: "6", fill: i }),
              (0, s.jsx)("circle", {
                cx: "36.5",
                cy: "45.5",
                r: "2",
                fill: "#fff",
              }),
              (0, s.jsx)("circle", {
                cx: "66.5",
                cy: "45.5",
                r: "2",
                fill: "#fff",
              }),
              (0, s.jsx)("path", {
                d: "M27 38 L42 42",
                stroke: o,
                strokeWidth: "2.5",
                strokeLinecap: "round",
              }),
              (0, s.jsx)("path", {
                d: "M73 38 L58 42",
                stroke: o,
                strokeWidth: "2.5",
                strokeLinecap: "round",
              }),
            ],
          })
        : "thinking" === e
          ? (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("circle", { cx: "35", cy: "45", r: "6", fill: i }),
                (0, s.jsx)("circle", { cx: "65", cy: "45", r: "6", fill: i }),
                (0, s.jsx)("circle", {
                  cx: "37",
                  cy: "42.5",
                  r: "2.2",
                  fill: "#fff",
                }),
                (0, s.jsx)("circle", {
                  cx: "67",
                  cy: "42.5",
                  r: "2.2",
                  fill: "#fff",
                }),
              ],
            })
          : (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("circle", {
                  cx: "35",
                  cy: "46",
                  r: "excited" === e ? 7 : 6.5,
                  fill: i,
                }),
                (0, s.jsx)("circle", {
                  cx: "65",
                  cy: "46",
                  r: "excited" === e ? 7 : 6.5,
                  fill: i,
                }),
                (0, s.jsx)("circle", {
                  cx: "37",
                  cy: "44",
                  r: "2.5",
                  fill: "#fff",
                }),
                (0, s.jsx)("circle", {
                  cx: "67",
                  cy: "44",
                  r: "2.5",
                  fill: "#fff",
                }),
                "excited" === e &&
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)("circle", {
                        cx: "33.5",
                        cy: "48.5",
                        r: "1.2",
                        fill: "#fff",
                        opacity: "0.8",
                      }),
                      (0, s.jsx)("circle", {
                        cx: "63.5",
                        cy: "48.5",
                        r: "1.2",
                        fill: "#fff",
                        opacity: "0.8",
                      }),
                    ],
                  }),
              ],
            }),
      "excited" === e &&
        (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("circle", {
              cx: "24",
              cy: "57",
              r: "5",
              fill: "#f0a0a0",
              opacity: "0.55",
            }),
            (0, s.jsx)("circle", {
              cx: "76",
              cy: "57",
              r: "5",
              fill: "#f0a0a0",
              opacity: "0.55",
            }),
          ],
        }),
      "happy" === e &&
        "cat" !== sk.mouth &&
        (0, s.jsx)("path", {
          d: "M43 65 Q50 71 57 65",
          fill: "none",
          stroke: i,
          strokeWidth: "2.2",
          strokeLinecap: "round",
        }),
      "excited" === e &&
        "cat" !== sk.mouth &&
        (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("ellipse", {
              cx: "50",
              cy: "67.5",
              rx: "7",
              ry: "5",
              fill: i,
            }),
            (0, s.jsx)("ellipse", {
              cx: "50",
              cy: "70.5",
              rx: "4.5",
              ry: "3.6",
              fill: "#e86a7a",
            }),
          ],
        }),
      // Boca de gato (ω): trazo suave, sin lengua colgando. "excited" abre
      // apenas la boca (un pequeño hocico) para dar vida sin parecer jadeo.
      "cat" === sk.mouth &&
        ("happy" === e || "excited" === e) &&
        (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("path", {
              d: "M50 58 L50 61.5",
              fill: "none",
              stroke: i,
              strokeWidth: "2",
              strokeLinecap: "round",
            }),
            (0, s.jsx)("path", {
              d: "M50 61.5 Q45 66 40.5 63",
              fill: "none",
              stroke: i,
              strokeWidth: "2",
              strokeLinecap: "round",
            }),
            (0, s.jsx)("path", {
              d: "M50 61.5 Q55 66 59.5 63",
              fill: "none",
              stroke: i,
              strokeWidth: "2",
              strokeLinecap: "round",
            }),
            "excited" === e &&
              (0, s.jsx)("path", {
                d: "M46 62 Q50 65.5 54 62 Q50 63 46 62 Z",
                fill: "#e86a7a",
              }),
          ],
        }),
      "sad" === e &&
        (0, s.jsx)("path", {
          d: "M43 70 Q50 64.5 57 70",
          fill: "none",
          stroke: i,
          strokeWidth: "2.2",
          strokeLinecap: "round",
        }),
      "thinking" === e &&
        (0, s.jsx)("path", {
          d: "M45 67.5 L56 66.5",
          stroke: i,
          strokeWidth: "2.2",
          strokeLinecap: "round",
        }),
      ...sk.extras,
      "lentes" === a &&
        (0, s.jsxs)("g", {
          children: [
            (0, s.jsx)("rect", {
              x: "26",
              y: "40",
              width: "18",
              height: "12",
              rx: "4",
              fill: "#1a120c",
            }),
            (0, s.jsx)("rect", {
              x: "56",
              y: "40",
              width: "18",
              height: "12",
              rx: "4",
              fill: "#1a120c",
            }),
            (0, s.jsx)("rect", {
              x: "44",
              y: "44",
              width: "12",
              height: "3",
              fill: "#1a120c",
            }),
            (0, s.jsx)("rect", {
              x: "29",
              y: "42.5",
              width: "6",
              height: "3",
              rx: "1.5",
              fill: "#6a8ab0",
              opacity: "0.8",
            }),
            (0, s.jsx)("rect", {
              x: "59",
              y: "42.5",
              width: "6",
              height: "3",
              rx: "1.5",
              fill: "#6a8ab0",
              opacity: "0.8",
            }),
          ],
        }),
      "mono" === a &&
        (0, s.jsxs)("g", {
          children: [
            (0, s.jsx)("path", {
              d: "M50 76 L38 70 L38 82 Z",
              fill: "#e83a6a",
              stroke: "#a02040",
              strokeWidth: "1.5",
            }),
            (0, s.jsx)("path", {
              d: "M50 76 L62 70 L62 82 Z",
              fill: "#e83a6a",
              stroke: "#a02040",
              strokeWidth: "1.5",
            }),
            (0, s.jsx)("circle", {
              cx: "50",
              cy: "76",
              r: "3.5",
              fill: "#ffd0dc",
              stroke: "#a02040",
              strokeWidth: "1.5",
            }),
          ],
        }),
      "gorra" === a &&
        (0, s.jsxs)("g", {
          children: [
            (0, s.jsx)("path", {
              d: "M24 30 Q50 6 76 30 L76 25 Q50 2 24 25 Z",
              fill: "#e83a3a",
              stroke: "#a02020",
              strokeWidth: "1.5",
            }),
            (0, s.jsx)("path", {
              d: "M24 28 Q50 8 76 28 Q76 20 50 12 Q24 20 24 28 Z",
              fill: "#e83a3a",
            }),
            (0, s.jsx)("path", {
              d: "M70 26 Q88 26 90 32 Q78 34 68 30 Z",
              fill: "#c02828",
            }),
            (0, s.jsx)("circle", {
              cx: "50",
              cy: "12",
              r: "3.5",
              fill: "#ffd700",
            }),
          ],
        }),
      "corona" === a &&
        (0, s.jsxs)("g", {
          children: [
            (0, s.jsx)("path", {
              d: "M32 20 L36 8 L44 16 L50 5 L56 16 L64 8 L68 20 Z",
              fill: "#ffd700",
              stroke: "#b8860b",
              strokeWidth: "1.5",
            }),
            (0, s.jsx)("rect", {
              x: "32",
              y: "18",
              width: "36",
              height: "5",
              rx: "2",
              fill: "#ffd700",
              stroke: "#b8860b",
              strokeWidth: "1.5",
            }),
            (0, s.jsx)("circle", {
              cx: "50",
              cy: "5",
              r: "2.5",
              fill: "#e83a6a",
            }),
            (0, s.jsx)("circle", {
              cx: "36",
              cy: "8",
              r: "2",
              fill: "#4a90e8",
            }),
            (0, s.jsx)("circle", {
              cx: "64",
              cy: "8",
              r: "2",
              fill: "#4a90e8",
            }),
          ],
        }),
      "mago" === a &&
        (0, s.jsxs)("g", {
          children: [
            (0, s.jsx)("path", {
              d: "M50 -6 L34 24 L66 24 Z",
              fill: "#5b21b6",
              stroke: "#3a1478",
              strokeWidth: "1.5",
            }),
            (0, s.jsx)("ellipse", {
              cx: "50",
              cy: "24",
              rx: "22",
              ry: "5",
              fill: "#7c3aed",
              stroke: "#3a1478",
              strokeWidth: "1.5",
            }),
            (0, s.jsx)("path", {
              d: "M47 8 l1.6 3.4 3.6.4-2.7 2.5.7 3.6-3.2-1.8-3.2 1.8.7-3.6-2.7-2.5 3.6-.4Z",
              fill: "#ffd700",
            }),
            (0, s.jsx)("circle", {
              cx: "56",
              cy: "16",
              r: "1.6",
              fill: "#ffd700",
            }),
          ],
        }),
      a &&
        !["lentes", "mono", "gorra", "corona", "mago"].includes(a) &&
        (0, s.jsx)("text", {
          x: "50",
          y: "23",
          textAnchor: "middle",
          fontSize: "26",
          children: (c.find((o) => o.id === a) || {}).emoji || "",
        }),
    ],
  });
}
function f({ mood: e = "happy", text: t, size: n = 72, char: fc }) {
  return (0, s.jsxs)("div", {
    className: "pug-say-wrap",
    children: [
      (0, s.jsx)(d, { mood: e, size: n, char: fc }),
      (0, s.jsx)("div", { className: "pug-bubble", children: t }),
    ],
  });
}
let m = [
    "¡A entrenar! Hoy es buen día para vencer a un jefe.",
    "¿Ya hiciste tu repaso inteligente de hoy? Yo nunca me lo salto.",
    "Truco veloz: el 9 es como el 10, pero le restas uno.",
    "Los cofres solo aparecen en niveles nuevos. ¡Avancemos!",
    "Si un nivel se pone difícil, un escudo de la tienda ayuda mucho.",
    "Responder rápido da monedas extra. ¡A por ellas!",
    "Repetir niveles viejos da pocas monedas. ¡Lo nuevo paga más!",
    "7 × 8 = 56. Es mi favorita porque casi nadie se la sabe.",
    "Contar saltando es mi paso de baile preferido: 5, 10, 15, 20...",
    "Cada estrella del mapa de dominio me hace saltar de alegría.",
  ],
  p = [
    "¡Casi! Equivocarse es entrenar: tu cerebro está creciendo ahora mismo.",
    "Los jefes casi nunca caen al primer intento. ¡Yo creo en ti!",
    "Cada error te enseña algo que un acierto no puede. ¡Otra vez!",
    "Respira, sacúdete y volvemos. ¡Así entrenan los campeones!",
    "Hoy costó trabajo. Mañana costará menos, porque practicaste hoy.",
    "Mi mejor truco: cuando algo no sale, lo intento más despacio. ¡Funciona!",
  ],
  h = null,
  g = !1;
function b(e, t, n, a = "square", r = 0.12, l) {
  let s = (function () {
    try {
      return (
        h || (h = new (window.AudioContext || window.webkitAudioContext)()),
        "suspended" === h.state && h.resume(),
        h
      );
    } catch {
      return null;
    }
  })();
  if (s && !g)
    try {
      let i = s.createOscillator(),
        o = s.createGain(),
        c = s.currentTime + t;
      ((i.type = a),
        i.frequency.setValueAtTime(e, c),
        l && i.frequency.exponentialRampToValueAtTime(l, c + n),
        o.gain.setValueAtTime(1e-4, c),
        o.gain.exponentialRampToValueAtTime(r, c + 0.012),
        o.gain.exponentialRampToValueAtTime(1e-4, c + n),
        i.connect(o).connect(s.destination),
        i.start(c),
        i.stop(c + n + 0.05));
    } catch {}
}
let v = {
  ok() {
    (b(660, 0, 0.09, "square", 0.1), b(880, 0.09, 0.14, "square", 0.1));
  },
  no() {
    (b(233, 0, 0.16, "sawtooth", 0.08), b(174, 0.14, 0.22, "sawtooth", 0.07));
  },
  coin() {
    (b(988, 0, 0.07, "square", 0.09), b(1319, 0.07, 0.16, "square", 0.09));
  },
  chest() {
    (b(523, 0, 0.1, "square", 0.09),
      b(659, 0.1, 0.1, "square", 0.09),
      b(784, 0.2, 0.1, "square", 0.09),
      b(1047, 0.3, 0.28, "square", 0.1));
  },
  win() {
    (b(523, 0, 0.12, "triangle", 0.14),
      b(659, 0.12, 0.12, "triangle", 0.14),
      b(784, 0.24, 0.12, "triangle", 0.14),
      b(1047, 0.36, 0.3, "triangle", 0.15),
      b(784, 0.36, 0.3, "triangle", 0.08));
  },
  pop() {
    b(420, 0, 0.06, "sine", 0.09, 640);
  },
  tick() {
    b(500, 0, 0.045, "sine", 0.06);
  },
};
let SFX = v;
var i = r("2YQ6R");
let y = {
    sudoku: 0,
    reloj: 0,
    memoria: 0,
    ordena: 0,
    cubos: 0,
    parejas: 0,
    balanza: 0,
    recta: 0,
  },
  x = (e, t) => Math.floor(Math.random() * (t - e + 1)) + e,
  k = (e) => e[Math.floor(Math.random() * e.length)];
function j(e) {
  let t = [...e];
  for (let e = t.length - 1; e > 0; e--) {
    let n = Math.floor(Math.random() * (e + 1));
    [t[e], t[n]] = [t[n], t[e]];
  }
  return t;
}
let w = [
  {
    id: "sudoku",
    name: "Sudoku 4×4",
    emoji: "🔢",
    desc: "Completa el tablero sin repetir números",
  },
  {
    id: "reloj",
    name: "Reloj cucú",
    emoji: "🦉",
    desc: "Completa el círculo de saltos",
  },
  {
    id: "memoria",
    name: "Recuerda el orden",
    emoji: "🌸",
    desc: "Repite la secuencia que se ilumina",
  },
  {
    id: "ordena",
    name: "Ordena los números",
    emoji: "🫧",
    desc: "Toca del menor al mayor",
  },
  {
    id: "cubos",
    name: "Conteo de cubos",
    emoji: "🧊",
    desc: "¿Cuántos cubos hay en la torre?",
  },
  {
    id: "parejas",
    name: "Parejas de memoria",
    emoji: "🃏",
    desc: "Une cada operación con su resultado",
  },
  {
    id: "balanza",
    name: "Balanza lógica",
    emoji: "⚖️",
    desc: "Equilibra los dos platos",
  },
  {
    id: "recta",
    name: "La recta numérica",
    emoji: "📏",
    desc: "¿Dónde vive cada número?",
  },
];
function N({ success: e, coins: t, onRetry: n, onHub: a }) {
  return (0, s.jsx)("div", {
    className: "chest-overlay",
    children: (0, s.jsxs)("div", {
      className: "chest-modal",
      children: [
        (0, s.jsx)(d, { mood: e ? "excited" : "sad", size: 80 }),
        (0, s.jsx)("div", {
          className: "chest-title",
          children: e
            ? `\xa1Nivel superado! \u{1FA99} +${t}`
            : "¡Casi! Inténtalo otra vez",
        }),
        (0, s.jsxs)("div", {
          className: "btn-row",
          children: [
            (0, s.jsx)("button", {
              className: "btn-pixel btn-go",
              onClick: n,
              children: "🔄 Otra vez",
            }),
            (0, s.jsx)("button", {
              className: "btn-pixel",
              onClick: a,
              children: "◀\ufe0e Poder cerebral",
            }),
          ],
        }),
      ],
    }),
  });
}
function S(e) {
  let t = [
      [1, 2, 3, 4],
      [3, 4, 1, 2],
      [2, 1, 4, 3],
      [4, 3, 2, 1],
    ],
    n = j([1, 2, 3, 4]);
  ((t = t.map((e) => e.map((e) => n[e - 1]))),
    Math.random() > 0.5 && ([t[0], t[1]] = [t[1], t[0]]),
    Math.random() > 0.5 && ([t[2], t[3]] = [t[3], t[2]]),
    Math.random() > 0.5 && (t = t.map((e) => [e[1], e[0], e[2], e[3]])),
    Math.random() > 0.5 && (t = t.map((e) => [e[0], e[1], e[3], e[2]])),
    Math.random() > 0.5 && (t = t[0].map((e, n) => t.map((e) => e[n]))));
  let a = t.flat(),
    r = Math.min(10, 5 + Math.floor(e / 2)),
    l = j(Array.from({ length: 16 }, (e, t) => t)).slice(0, r);
  return { board: a.map((e, t) => (l.includes(t) ? null : e)), solution: a };
}
function C({ level: e, onFinish: t }) {
  let [{ board: n, solution: a }, r] = (0, i.useState)(() => S(e)),
    [l, o] = (0, i.useState)(n),
    [c] = (0, i.useState)(n.map((e) => null !== e)),
    [u, d] = (0, i.useState)(null),
    [f, m] = (0, i.useState)([]);
  return (0, s.jsxs)("div", {
    className: "brain-game",
    children: [
      (0, s.jsx)("p", {
        className: "brain-instr",
        children:
          "Cada fila, columna y caja de 2×2 debe tener 1, 2, 3 y 4 sin repetir.",
      }),
      (0, s.jsx)("div", {
        className: "sudoku-grid",
        children: l.map((e, t) =>
          (0, s.jsx)(
            "button",
            {
              className: `sudoku-cell ${c[t] ? "given" : ""} ${u === t ? "sel" : ""} ${f.includes(t) ? "bad" : ""} ${t % 4 >= 2 ? "boxr" : ""} ${t >= 8 ? "boxb" : ""}`,
              onClick: () => !c[t] && d(t),
              children: e ?? "",
            },
            t,
          ),
        ),
      }),
      (0, s.jsxs)("div", {
        className: "sudoku-pad",
        children: [
          [1, 2, 3, 4].map((e) =>
            (0, s.jsx)(
              "button",
              {
                className: "np-key",
                onClick: () =>
                  ((e) => {
                    if (null === u || c[u]) return;
                    let n = [...l];
                    if (
                      ((n[u] = e),
                      o(n),
                      m((e) => e.filter((e) => e !== u)),
                      n.every((e) => null !== e))
                    ) {
                      let e = n
                        .map((e, t) => (e !== a[t] ? t : -1))
                        .filter((e) => e >= 0);
                      if (0 === e.length) return void t(!0);
                      m(e);
                    }
                  })(e),
                children: e,
              },
              e,
            ),
          ),
          (0, s.jsx)("button", {
            className: "np-key np-clear",
            onClick: () => {
              if (null === u || c[u]) return;
              let e = [...l];
              ((e[u] = null), o(e), m((e) => e.filter((e) => e !== u)));
            },
            children: "⌫",
          }),
        ],
      }),
      f.length > 0 &&
        (0, s.jsx)("div", {
          className: "brain-hint",
          children:
            "💡 Los números en rojo chocan con su fila, columna o caja. ¡Corrígelos!",
        }),
      (0, s.jsx)("button", {
        className: "lens-btn",
        onClick: () => {
          let t = S(e);
          (r(t), o(t.board), d(null), m([]));
        },
        children: "🔀 Otro tablero",
      }),
    ],
  });
}
function E(e, t) {
  let n = new Set([e]);
  for (; n.size < 4;) {
    let a = e + k([-2 * t, -t, t, 2 * t, 1, -1]);
    a > 0 && n.add(a);
  }
  return j(Array.from(n));
}
// `steps` es opcional y solo lo usa el camino pequeño: sin limitarlo, el
// paso 10 sobre 10 nodos llega a 100. Omitido, el comportamiento del camino
// grande queda idéntico.
function $({ level: e, onFinish: t, steps: st }) {
  let [n, a] = (0, i.useState)(() => {
      let t, n, a, r;
      return (
        (t = k(
          st ||
            (e < 2 ? [2, 5, 10] : e < 4 ? [2, 3, 4, 5, 10] : [2, 3, 4, 6, 7, 8, 9]),
        )),
        (n = Array.from({ length: 10 }, (e, n) => t * (n + 1))),
        (a = Math.min(5, 2 + Math.floor(e / 2))),
        {
          step: t,
          values: n,
          hidden: (r = j(Array.from({ length: 10 }, (e, t) => t))
            .slice(0, a)
            .sort((e, t) => e - t)),
          solvedCount: 0,
          current: 0,
          choices: E(n[r[0]], t),
        }
      );
    }),
    [r, l] = (0, i.useState)(null),
    [o, c] = (0, i.useState)(0),
    u = n.hidden[n.current];
  return (0, s.jsxs)("div", {
    className: "brain-game",
    children: [
      (0, s.jsxs)("p", {
        className: "brain-instr",
        children: [
          "El búho cuenta de ",
          n.step,
          " en ",
          n.step,
          ". Completa los nidos vacíos. Errores: ",
          o,
          "/3",
        ],
      }),
      (0, s.jsxs)("div", {
        className: "clock-circle",
        children: [
          (0, s.jsx)("span", { className: "clock-owl", children: "🦉" }),
          n.values.map((e, t) => {
            let a = (Math.PI / 180) * (-90 + 36 * t),
              l = 50 + 40 * Math.cos(a),
              i = 50 + 40 * Math.sin(a),
              o = n.hidden.includes(t),
              c = o && n.hidden.indexOf(t) < n.solvedCount,
              d = t === u;
            return (0, s.jsx)(
              "div",
              {
                className: `clock-node ${!o || c ? "known" : ""} ${d ? `current ${r || ""}` : ""}`,
                style: { left: `${l}%`, top: `${i}%` },
                children: !o || c ? e : d ? "?" : "·",
              },
              t,
            );
          }),
        ],
      }),
      (0, s.jsx)("div", {
        className: "little-choices",
        children: n.choices.map((e) =>
          (0, s.jsx)(
            "button",
            {
              className: "little-choice clock-choice",
              onClick: () => {
                !r &&
                  (e === n.values[u]
                    ? (l("ok"),
                      setTimeout(() => {
                        l(null);
                        let e = n.solvedCount + 1;
                        if (e >= n.hidden.length) return void t(!0);
                        let r = n.current + 1;
                        a((t) => ({
                          ...t,
                          solvedCount: e,
                          current: r,
                          choices: E(t.values[t.hidden[r]], t.step),
                        }));
                      }, 500))
                    : (l("no"),
                      setTimeout(() => l(null), 600),
                      c(
                        (e) => (
                          e + 1 >= 3 && setTimeout(() => t(!1), 400),
                          e + 1
                        ),
                      )));
              },
              children: e,
            },
            e,
          ),
        ),
      }),
    ],
  });
}
let z = ["🌸", "🌻", "🍄", "💎", "🐞", "🦋"];
function T({ level: e, onFinish: t }) {
  let n = Math.min(8, 3 + Math.floor(e / 2)),
    [a] = (0, i.useState)(() =>
      Array.from({ length: n }, () => x(0, z.length - 1)),
    ),
    [r, l] = (0, i.useState)(!0),
    [o, c] = (0, i.useState)(null),
    [u, d] = (0, i.useState)(0),
    [f, m] = (0, i.useState)(null),
    p = (0, i.useRef)([]);
  return (
    (0, i.useEffect)(
      () => (
        a.forEach((e, t) => {
          (p.current.push(setTimeout(() => c(e), 700 + 800 * t)),
            p.current.push(setTimeout(() => c(null), 700 + 800 * t + 550)));
        }),
        p.current.push(setTimeout(() => l(!1), 700 + 800 * a.length)),
        () => p.current.forEach(clearTimeout)
      ),
      [],
    ),
    (0, s.jsxs)("div", {
      className: "brain-game",
      children: [
        (0, s.jsx)("p", {
          className: "brain-instr",
          children: r
            ? `\u{1F440} Mira con atenci\xf3n: ${a.length} pasos...`
            : `Tu turno: repite el orden (${u}/${a.length})`,
        }),
        (0, s.jsx)("div", {
          className: "memo-grid",
          children: z.map((e, n) =>
            (0, s.jsx)(
              "button",
              {
                className: `memo-cell ${o === n ? "lit" : ""} ${f?.i === n ? (f.ok ? "ok" : "no") : ""}`,
                disabled: r,
                onClick: () => {
                  !r &&
                    !f &&
                    (n === a[u]
                      ? (m({ i: n, ok: !0 }),
                        setTimeout(() => {
                          m(null);
                          let e = u + 1;
                          e >= a.length ? t(!0) : d(e);
                        }, 300))
                      : (m({ i: n, ok: !1 }), setTimeout(() => t(!1), 700)));
                },
                children: e,
              },
              n,
            ),
          ),
        }),
      ],
    })
  );
}
function M({ level: e, onFinish: t }) {
  let n = Math.min(9, 6 + Math.floor(e / 3)),
    a = e < 2 ? 20 : e < 4 ? 50 : 99,
    [r] = (0, i.useState)(() => {
      let e = new Set();
      for (; e.size < n;) e.add(x(1, a));
      return j(Array.from(e));
    }),
    l = [...r].sort((e, t) => e - t),
    [o, c] = (0, i.useState)([]),
    [u, d] = (0, i.useState)(0),
    [f, m] = (0, i.useState)(null);
  return (0, s.jsxs)("div", {
    className: "brain-game",
    children: [
      (0, s.jsxs)("p", {
        className: "brain-instr",
        children: [
          "Toca las burbujas del número menor al mayor. Errores: ",
          u,
          "/3",
        ],
      }),
      (0, s.jsx)("div", {
        className: "bubbles-zone",
        children: r.map((e, n) =>
          (0, s.jsx)(
            "button",
            {
              className: `bubble ${o.includes(e) ? "popped" : ""} ${f === n ? "shake" : ""}`,
              style: { animationDelay: `${0.1 * n}s` },
              disabled: o.includes(e),
              onClick: () =>
                ((e, n) => {
                  if (!o.includes(e))
                    if (e === l[o.length]) {
                      let n = [...o, e];
                      (c(n), n.length === r.length && t(!0));
                    } else
                      (m(n),
                        setTimeout(() => m(null), 400),
                        d(
                          (e) => (
                            e + 1 >= 3 && setTimeout(() => t(!1), 400),
                            e + 1
                          ),
                        ));
                })(e, n),
              children: e,
            },
            n,
          ),
        ),
      }),
    ],
  });
}
function _({ level: e, onFinish: t }) {
  let [n] = (0, i.useState)(() => {
      let t = Math.min(6, 3 + Math.floor(e / 2)),
        n = Math.min(6, 2 + Math.floor(e / 2));
      return Array.from({ length: t }, () => x(1, n));
    }),
    a = n.reduce((e, t) => e + t, 0),
    [r] = (0, i.useState)(() => {
      let e = new Set([a]);
      for (; e.size < 4;) {
        let t = a + k([-3, -2, -1, 1, 2, 3]);
        t > 0 && e.add(t);
      }
      return j(Array.from(e));
    }),
    [l, o] = (0, i.useState)(null);
  return (0, s.jsxs)("div", {
    className: "brain-game",
    children: [
      (0, s.jsx)("p", {
        className: "brain-instr",
        children:
          "Cuenta todos los cubos de la torre, incluidos los de abajo. 🧊",
      }),
      (0, s.jsx)("div", {
        className: "cubes-stage",
        children: n.map((e, t) =>
          (0, s.jsx)(
            "div",
            {
              className: "cube-col",
              children: Array.from({ length: e }).map((e, n) =>
                (0, s.jsx)(
                  "span",
                  {
                    className: "cube",
                    style: { animationDelay: `${(6 * t + n) * 0.05}s` },
                  },
                  n,
                ),
              ),
            },
            t,
          ),
        ),
      }),
      (0, s.jsx)("div", {
        className: "little-choices",
        children: r.map((e) =>
          (0, s.jsx)(
            "button",
            {
              className: `little-choice ${l === e ? (e === a ? "ok" : "no") : ""} ${null !== l && e === a ? "reveal" : ""}`,
              onClick: () => {
                null === l && (o(e), setTimeout(() => t(e === a), 700));
              },
              disabled: null !== l,
              children: e,
            },
            e,
          ),
        ),
      }),
    ],
  });
}
/* `deck` y `label` son opcionales y solo los usa el camino pequeño: el juego
   original empareja a×b con su producto, que no corresponde a 4-5 años. Con
   una baraja de sumas el mismo armazón refuerza composición de números.
   Omitidos, el camino grande queda idéntico. */
function P({ level: e, onFinish: t, deck: dk, label: lb }) {
  let [n] = (0, i.useState)(
      () =>
        dk ||
      (function (e) {
        let t = Math.min(6, 3 + Math.floor(e / 2)),
          n = e < 2 ? [2, 5, 10] : e < 4 ? [2, 3, 4, 5] : [3, 4, 6, 7, 8],
          a = new Set(),
          r = [],
          l = 0,
          s = 0;
        for (; r.length < 2 * t && s < 100;) {
          s++;
          let e = k(n),
            t = x(2, 9),
            i = `${e}x${t}`;
          a.has(i) ||
            a.has(String(e * t)) ||
            (a.add(i),
            r.push({ id: l++, text: `${e}\xd7${t}`, pairKey: String(e * t) }),
            r.push({ id: l++, text: String(e * t), pairKey: String(e * t) }));
        }
        return j(r);
      })(e),
    ),
    [a, r] = (0, i.useState)([]),
    [l, o] = (0, i.useState)([]),
    [c, u] = (0, i.useState)(0),
    [d, f] = (0, i.useState)(!1),
    m = n.length <= 8 ? 4 : n.length <= 10 ? 5 : 4;
  return (0, s.jsxs)("div", {
    className: "brain-game",
    children: [
      (0, s.jsxs)("p", {
        className: "brain-instr",
        children: [
          lb || "Une cada multiplicación con su resultado",
          ". Fallos: ",
          c,
          "/6",
        ],
      }),
      (0, s.jsx)("div", {
        className: "pairs-grid",
        style: { gridTemplateColumns: `repeat(${m}, 1fr)` },
        children: n.map((e, i) => {
          let c = a.includes(i) || l.includes(e.pairKey);
          return (0, s.jsx)(
            "button",
            {
              className: `pair-card ${c ? "up" : ""} ${l.includes(e.pairKey) ? "matched" : ""}`,
              onClick: () =>
                ((e) => {
                  if (d || a.includes(e) || l.includes(n[e].pairKey)) return;
                  let s = [...a, e];
                  if ((r(s), 2 === s.length)) {
                    f(!0);
                    let [e, a] = s;
                    n[e].pairKey === n[a].pairKey
                      ? setTimeout(() => {
                          let a = [...l, n[e].pairKey];
                          (o(a),
                            r([]),
                            f(!1),
                            a.length === n.length / 2 && t(!0));
                        }, 600)
                      : setTimeout(() => {
                          (r([]),
                            f(!1),
                            u(
                              (e) => (
                                e + 1 >= 6 && setTimeout(() => t(!1), 300),
                                e + 1
                              ),
                            ));
                        }, 900);
                  }
                })(i),
              children: c ? e.text : "?",
            },
            e.id,
          );
        }),
      }),
    ],
  });
}
// `cap` es opcional y solo lo usa el camino pequeño, para que los operandos
// quepan en el techo de la banda del niño. Omitido, el camino grande no cambia.
function A({ level: e, onFinish: t, cap: cp }) {
  let [{ a: n, b: a, c: r, answer: l }] = (0, i.useState)(() => {
      let t = cp || (e < 2 ? 6 : e < 4 ? 9 : 12),
        n = x(1, t),
        a = x(1, t),
        r = n + a,
        l = x(1, Math.min(r - 1, t));
      return { a: n, b: a, c: l, answer: r - l };
    }),
    [o] = (0, i.useState)(() => {
      let e = new Set([l]);
      for (; e.size < 4;) {
        let t = l + k([-3, -2, -1, 1, 2, 3]);
        t > 0 && e.add(t);
      }
      return j(Array.from(e));
    }),
    [c, u] = (0, i.useState)(null),
    d = null === c || c === l ? 0 : c > l ? 6 : -6;
  return (0, s.jsxs)("div", {
    className: "brain-game",
    children: [
      (0, s.jsx)("p", {
        className: "brain-instr",
        children: "Elige el número que hace que los dos platos pesen igual. ⚖️",
      }),
      (0, s.jsx)("div", {
        className: "balance-area",
        style: { transform: `rotate(${d}deg)` },
        children: (0, s.jsxs)("div", {
          className: "balance-beam",
          children: [
            (0, s.jsx)("div", {
              className: "balance-pan",
              children: (0, s.jsxs)("div", {
                className: "pan-content",
                children: [n, " + ", a],
              }),
            }),
            (0, s.jsx)("div", { className: "balance-center", children: "⚖️" }),
            (0, s.jsx)("div", {
              className: "balance-pan",
              children: (0, s.jsxs)("div", {
                className: "pan-content",
                children: [r, " + ", c ?? "?"],
              }),
            }),
          ],
        }),
      }),
      (0, s.jsx)("div", {
        className: "little-choices",
        children: o.map((e) =>
          (0, s.jsx)(
            "button",
            {
              className: `little-choice ${c === e ? (e === l ? "ok" : "no") : ""} ${null !== c && e === l ? "reveal" : ""}`,
              onClick: () => {
                null === c && (u(e), setTimeout(() => t(e === l), 900));
              },
              disabled: null !== c,
              children: e,
            },
            e,
          ),
        ),
      }),
    ],
  });
}
function L({ level: e, onFinish: t }) {
  let n = e < 2 ? 20 : e < 5 ? 50 : 100,
    a = Math.max(2, Math.round(0.1 * n) - Math.floor(e / 2)),
    [r] = (0, i.useState)(() => {
      let e = new Set();
      for (; e.size < 3;) {
        let t = x(Math.round(0.08 * n), Math.round(0.94 * n));
        Math.abs(t - n / 2) > 0.04 * n && e.add(t);
      }
      return Array.from(e);
    }),
    [l, o] = (0, i.useState)(0),
    [c, u] = (0, i.useState)(0),
    [d, f] = (0, i.useState)(null),
    m = r[l];
  return (0, s.jsxs)("div", {
    className: "brain-game",
    children: [
      (0, s.jsxs)("p", {
        className: "brain-instr",
        children: [
          "Toca el lugar de la recta donde vive el número. Aciertos: ",
          c,
          "/",
          3,
        ],
      }),
      (0, s.jsx)("div", { className: "nline-target", children: m }),
      (0, s.jsxs)("div", {
        className: "nline-wrap",
        children: [
          (0, s.jsxs)("div", {
            className: "nline-track",
            onClick: (e) => {
              if (d) return;
              let r = e.currentTarget.getBoundingClientRect(),
                s = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)),
                i = Math.abs(Math.round(s * n) - m) <= a;
              f({ guessPct: 100 * s, truePct: (m / n) * 100, ok: i });
              let p = c + +!!i;
              setTimeout(() => {
                (f(null), l + 1 >= 3) ? t(p >= 2) : (u(p), o(l + 1));
              }, 1400);
            },
            children: [
              (0, s.jsx)("span", {
                className: "nline-tick",
                style: { left: "50%" },
              }),
              d &&
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)("span", {
                      className: `nline-mark guess ${d.ok ? "ok" : "no"}`,
                      style: { left: `${d.guessPct}%` },
                      children: "▲",
                    }),
                    !d.ok &&
                      (0, s.jsx)("span", {
                        className: "nline-mark true",
                        style: { left: `${d.truePct}%` },
                        children: "★",
                      }),
                  ],
                }),
            ],
          }),
          (0, s.jsxs)("div", {
            className: "nline-labels",
            children: [
              (0, s.jsx)("span", { children: "0" }),
              (0, s.jsx)("span", { children: n / 2 }),
              (0, s.jsx)("span", { children: n }),
            ],
          }),
        ],
      }),
      d &&
        (0, s.jsx)("div", {
          className: `brain-hint ${(d.ok, "")}`,
          children: d.ok
            ? "🎯 ¡Muy cerca! Excelente puntería numérica"
            : `\u{2B50} Ah\xed vive el ${m}. Usa el ${n / 2} del medio como gu\xeda`,
        }),
    ],
  });
}
function q({ levels: e, onReward: t, onBack: n }) {
  let [a, r] = (0, i.useState)("hub"),
    [l, o] = (0, i.useState)(null),
    [c, u] = (0, i.useState)(0),
    d = (n) => (a) => {
      let r = a ? 4 + Math.min(4, Math.floor(e[n] / 3)) : 0;
      (a ? v.win() : v.no(), a && t(n, r), o({ success: a, coins: r }));
    },
    f = () => {
      (o(null), r("hub"));
    },
    m = w.find((e) => e.id === a);
  return (0, s.jsxs)("div", {
    className: "screen world-starwars brain-bg",
    onPointerDown: (ev) => {
      ev.target.closest && ev.target.closest("button") && v.pop();
    },
    children: [
      "hub" === a
        ? (0, s.jsxs)("div", {
            className: "panel",
            children: [
              (0, s.jsx)("button", {
                className: "link-back",
                onClick: n,
                children: "◀\ufe0e Camino",
              }),
              (0, s.jsx)("h2", {
                className: "panel-title",
                children: "🧩 Poder cerebral",
              }),
              (0, s.jsx)("p", {
                className: "mastery-sub",
                children:
                  "Lógica, memoria y percepción. ¡Cada juego sube de nivel al superarlo!",
              }),
              (0, s.jsx)("div", {
                className: "brain-list",
                children: w.map((t) =>
                  (0, s.jsxs)(
                    "button",
                    {
                      className: "brain-card",
                      onClick: () => {
                        (u((e) => e + 1), r(t.id));
                      },
                      children: [
                        (0, s.jsx)("span", {
                          className: "bc-emoji",
                          children: t.emoji,
                        }),
                        (0, s.jsxs)("span", {
                          className: "bc-body",
                          children: [
                            (0, s.jsx)("span", {
                              className: "bc-name",
                              children: t.name,
                            }),
                            (0, s.jsx)("span", {
                              className: "bc-desc",
                              children: t.desc,
                            }),
                          ],
                        }),
                        (0, s.jsxs)("span", {
                          className: "bc-level",
                          children: ["Lv. ", e[t.id] + 1],
                        }),
                      ],
                    },
                    t.id,
                  ),
                ),
              }),
            ],
          })
        : (0, s.jsxs)("div", {
            className: "panel brain-panel",
            children: [
              (0, s.jsxs)("div", {
                className: "brain-head",
                children: [
                  (0, s.jsx)("button", {
                    className: "link-back",
                    onClick: f,
                    children: "◀\ufe0e Volver",
                  }),
                  (0, s.jsxs)("span", {
                    className: "brain-title-line",
                    children: [m.emoji, " ", m.name, " · Lv. ", e[a] + 1],
                  }),
                ],
              }),
              "sudoku" === a &&
                (0, s.jsx)(C, { level: e.sudoku, onFinish: d("sudoku") }, c),
              "reloj" === a &&
                (0, s.jsx)($, { level: e.reloj, onFinish: d("reloj") }, c),
              "memoria" === a &&
                (0, s.jsx)(T, { level: e.memoria, onFinish: d("memoria") }, c),
              "ordena" === a &&
                (0, s.jsx)(M, { level: e.ordena, onFinish: d("ordena") }, c),
              "cubos" === a &&
                (0, s.jsx)(_, { level: e.cubos, onFinish: d("cubos") }, c),
              "parejas" === a &&
                (0, s.jsx)(P, { level: e.parejas, onFinish: d("parejas") }, c),
              "balanza" === a &&
                (0, s.jsx)(A, { level: e.balanza, onFinish: d("balanza") }, c),
              "recta" === a &&
                (0, s.jsx)(L, { level: e.recta, onFinish: d("recta") }, c),
            ],
          }),
      l &&
        (0, s.jsx)(N, {
          success: l.success,
          coins: l.coins,
          onRetry: () => {
            (o(null), u((e) => e + 1));
          },
          onHub: f,
        }),
    ],
  });
}
/* Contador de rondas ganadas por juego. Tiene que cubrir los CATORCE: el hub
   pasa este número como `level`, y una clave ausente llegaría como undefined y
   rompería el generador del juego. */
let R = { luces: 0, parejitas: 0, diferente: 0, sombras: 0, tren: 0, cajas: 0,
    cubos: 0, recta: 0, ordena: 0, memoria: 0, balanza: 0, reloj: 0, sudoku: 0, sumapar: 0 },
  D = [
    { id: "luces", name: "Memoria de luces", emoji: "✨" },
    { id: "parejitas", name: "Parejas", emoji: "🃏" },
    { id: "diferente", name: "¿Cuál es diferente?", emoji: "👀" },
    { id: "sombras", name: "Adivina la sombra", emoji: "🌑" },
    { id: "tren", name: "Vías del tren", emoji: "🚂" },
    { id: "cajas", name: "Guarda en su caja", emoji: "📦" },
  ],
  F = ["🐶", "🐱", "🐸", "🐰"];
function O({ level: e, onFinish: t }) {
  let n = Math.min(6, 2 + Math.floor(e / 2)),
    [a] = (0, i.useState)(() =>
      Array.from({ length: n }, () => x(0, F.length - 1)),
    ),
    [r, l] = (0, i.useState)(!0),
    [o, c] = (0, i.useState)(null),
    [u, d] = (0, i.useState)(0),
    [f, m] = (0, i.useState)(null),
    p = (0, i.useRef)([]);
  return (
    (0, i.useEffect)(
      () => (
        a.forEach((e, t) => {
          (p.current.push(setTimeout(() => c(e), 800 + 950 * t)),
            p.current.push(setTimeout(() => c(null), 800 + 950 * t + 650)));
        }),
        p.current.push(setTimeout(() => l(!1), 800 + 950 * a.length)),
        () => p.current.forEach(clearTimeout)
      ),
      [],
    ),
    (0, s.jsxs)("div", {
      className: "brain-game",
      children: [
        (0, s.jsx)("p", {
          className: "brain-instr",
          children: r
            ? "👀 ¡Mira quién se ilumina!"
            : "¡Tu turno! Tócalos en el mismo orden",
        }),
        (0, s.jsx)("div", {
          className: "kid-memo-grid",
          children: F.map((e, n) =>
            (0, s.jsx)(
              "button",
              {
                className: `memo-cell kid ${o === n ? "lit" : ""} ${f?.i === n ? (f.ok ? "ok" : "no") : ""}`,
                disabled: r,
                onClick: () => {
                  !r &&
                    !f &&
                    (n === a[u]
                      ? (m({ i: n, ok: !0 }),
                        setTimeout(() => {
                          m(null);
                          let e = u + 1;
                          e >= a.length ? t(!0) : d(e);
                        }, 320))
                      : (m({ i: n, ok: !1 }), setTimeout(() => t(!1), 700)));
                },
                children: e,
              },
              n,
            ),
          ),
        }),
      ],
    })
  );
}
let I = ["🐶", "🐱", "🦊", "🐼", "🦁", "🐷", "🐵", "🐙"];
function U({ level: e, onFinish: t }) {
  let n = Math.min(6, 3 + Math.floor(e / 3)),
    [a] = (0, i.useState)(() => {
      let e = j(I).slice(0, n);
      return j([...e, ...e]);
    }),
    [r, l] = (0, i.useState)([]),
    [o, c] = (0, i.useState)([]),
    [u, d] = (0, i.useState)(!1);
  return (0, s.jsxs)("div", {
    className: "brain-game",
    children: [
      (0, s.jsx)("p", {
        className: "brain-instr",
        children: "Encuentra los animalitos iguales 🐾",
      }),
      (0, s.jsx)("div", {
        className: "pairs-grid",
        style: { gridTemplateColumns: `repeat(${n <= 4 ? n : 4}, 1fr)` },
        children: a.map((e, i) => {
          let f = r.includes(i) || o.includes(e);
          return (0, s.jsx)(
            "button",
            {
              className: `pair-card kid ${f ? "up" : ""} ${o.includes(e) ? "matched" : ""}`,
              onClick: () =>
                ((e) => {
                  if (u || r.includes(e) || o.includes(a[e])) return;
                  let s = [...r, e];
                  if ((l(s), 2 === s.length)) {
                    d(!0);
                    let [e, r] = s;
                    a[e] === a[r]
                      ? setTimeout(() => {
                          let r = [...o, a[e]];
                          (c(r), l([]), d(!1), r.length === n && t(!0));
                        }, 550)
                      : setTimeout(() => {
                          (l([]), d(!1));
                        }, 1e3);
                  }
                })(i),
              children: f ? e : "❓",
            },
            i,
          );
        }),
      }),
    ],
  });
}
let B = [
  ["🐶", "🐱"],
  ["🍎", "🍐"],
  ["⭐", "🌙"],
  ["🐸", "🐢"],
  ["🌸", "🌻"],
  ["🐔", "🐤"],
  ["⚽", "🏀"],
  ["🚗", "🚕"],
  ["🙂", "🙃"],
  // Par espejo (🌛/🌜) en lugar de 🌟/⭐: aquel dependía de que la fuente
  // emoji de la plataforma dibujara distinto el brillo; este es difícil
  // por percepción y se ve igual de distinto en todas.
  ["🌛", "🌜"],
  ["🍩", "🍪"],
  ["🦋", "🐛"],
];
function Q({ level: e, onFinish: t }) {
  let [{ items: n, oddIdx: a }] = (0, i.useState)(() => {
      let [t, n] = k(e < 3 ? B.slice(0, 8) : B),
        a = Math.min(12, 6 + Math.floor(e / 2)),
        r = x(0, a - 1);
      return {
        items: Array.from({ length: a }, (e, a) => (a === r ? n : t)),
        oddIdx: r,
      };
    }),
    [r, l] = (0, i.useState)(null);
  return (0, s.jsxs)("div", {
    className: "brain-game",
    children: [
      (0, s.jsx)("p", {
        className: "brain-instr",
        children: "Uno es diferente a los demás. ¡Tócalo! 👀",
      }),
      (0, s.jsx)("div", {
        className: "odd-grid",
        children: n.map((e, n) =>
          (0, s.jsx)(
            "button",
            {
              className: `odd-cell ${r === n ? (n === a ? "ok" : "no") : ""} ${null !== r && n === a ? "reveal-odd" : ""}`,
              style: { animationDelay: `${0.05 * n}s` },
              onClick: () => {
                null === r && (l(n), setTimeout(() => t(n === a), 700));
              },
              disabled: null !== r,
              children: e,
            },
            n,
          ),
        ),
      }),
    ],
  });
}
let H = [
  "🐘",
  "🦒",
  "🐟",
  "🦋",
  "🚗",
  "✈️",
  "🌵",
  "🏠",
  "☂️",
  "🎈",
  "🐢",
  "🦀",
  "🚀",
  "🐳",
];
function W({ level: e, onFinish: t }) {
  let [{ target: n, options: a }] = (0, i.useState)(() => {
      let t = Math.min(4, 3 + Math.floor(e / 4)),
        n = j(H).slice(0, t);
      return { target: k(n), options: n };
    }),
    [r, l] = (0, i.useState)(null);
  return (0, s.jsxs)("div", {
    className: "brain-game",
    children: [
      (0, s.jsx)("p", {
        className: "brain-instr",
        children: "¿De quién es esta sombra? 🔦",
      }),
      (0, s.jsx)("div", {
        className: "shadow-stage",
        children: (0, s.jsx)("span", {
          className: `shadow-target ${null !== r ? "revealed" : ""}`,
          children: n,
        }),
      }),
      (0, s.jsx)("div", {
        className: "little-choices",
        children: a.map((e) =>
          (0, s.jsx)(
            "button",
            {
              className: `little-choice shadow-choice ${r === e ? (e === n ? "ok" : "no") : ""} ${null !== r && e === n ? "reveal" : ""}`,
              onClick: () => {
                null === r && (l(e), setTimeout(() => t(e === n), 800));
              },
              disabled: null !== r,
              children: e,
            },
            e,
          ),
        ),
      }),
    ],
  });
}
function V(e) {
  return "straight" === e.type
    ? e.rot % 2 == e.solvedRot % 2
    : e.rot === e.solvedRot;
}
function K({ level: e, onFinish: t }) {
  let [n, a] = (0, i.useState)(() =>
      (function (e) {
        let t = Math.min(2, Math.floor(e / 2)),
          n = Math.min(7, 4 + Math.floor(e / 2)),
          a = [],
          r = 0,
          l = 1,
          s = t,
          i = new Set([1]);
        for (; a.length < n && r < 5;) {
          if (
            (a.push({ col: r, row: l }),
            s > 0 && a.length < n - 1 && r < 4 && 0.4 > Math.random())
          ) {
            let e = 0 === l || 2 === l ? 1 : Math.random() > 0.5 ? 0 : 2;
            (i.has(e), a.push({ col: r, row: e }), (l = e), i.add(e), s--);
          }
          r++;
        }
        let o = a.map((e, t) => {
            let n = 0 === t ? { col: e.col - 1, row: e.row } : a[t - 1],
              r =
                t === a.length - 1 ? { col: e.col + 1, row: e.row } : a[t + 1];
            return {
              in:
                n.col < e.col
                  ? "W"
                  : n.col > e.col
                    ? "E"
                    : n.row < e.row
                      ? "N"
                      : "S",
              out:
                r.col > e.col
                  ? "E"
                  : r.col < e.col
                    ? "W"
                    : r.row > e.row
                      ? "S"
                      : "N",
            };
          }),
          c = { 0: ["W", "S"], 1: ["N", "W"], 2: ["E", "N"], 3: ["S", "E"] };
        return a.map((e, t) => {
          let { in: n, out: a } = o[t],
            r =
              ("W" === n && "E" === a) ||
              ("E" === n && "W" === a) ||
              ("N" === n && "S" === a) ||
              ("S" === n && "N" === a),
            l = 0;
          if (r) l = +("W" !== n && "E" !== n);
          else
            for (let [e, t] of Object.entries(c))
              if ((t[0] === n && t[1] === a) || (t[0] === a && t[1] === n)) {
                l = Number(e);
                break;
              }
          let s = x(0, 3);
          return (
            0 === t && s === l && (s = (s + 1) % 4),
            {
              col: e.col,
              row: e.row,
              type: r ? "straight" : "curve",
              solvedRot: l,
              rot: s,
            }
          );
        });
      })(e),
    ),
    [r, l] = (0, i.useState)(null),
    o = (0, i.useRef)(!1);
  return (0, s.jsxs)("div", {
    className: "brain-game",
    children: [
      (0, s.jsx)("p", {
        className: "brain-instr",
        children:
          "Toca las vías para girarlas y que el tren 🚂 llegue a la estación 🏠",
      }),
      (0, s.jsxs)("div", {
        className: "track-board",
        children: [
          (0, s.jsx)("span", {
            className: "track-endpoint start",
            style: { gridColumn: 1, gridRow: n[0].row + 1 },
            children: "🚂",
          }),
          n.map((e, n) =>
            (0, s.jsxs)(
              "button",
              {
                className: `track-tile ${V(e) ? "good" : ""}`,
                style: { gridColumn: e.col + 2, gridRow: e.row + 1 },
                onClick: () => {
                  null === r &&
                    a((e) => {
                      let a = e.map((e, t) =>
                        t === n ? { ...e, rot: (e.rot + 1) % 4 } : e,
                      );
                      return (
                        a.every(V) &&
                          !o.current &&
                          ((o.current = !0),
                          setTimeout(() => {
                            let e = 0;
                            l(0);
                            let n = setInterval(() => {
                              ++e >= a.length
                                ? (clearInterval(n),
                                  setTimeout(() => t(!0), 500))
                                : l(e);
                            }, 420);
                          }, 350)),
                        a
                      );
                    });
                },
                children: [
                  (0, s.jsx)("svg", {
                    viewBox: "0 0 60 60",
                    style: { transform: `rotate(${90 * e.rot}deg)` },
                    children:
                      "straight" === e.type
                        ? (0, s.jsxs)("g", {
                            stroke: "#8a5a32",
                            strokeWidth: "5",
                            strokeLinecap: "round",
                            children: [
                              (0, s.jsx)("line", {
                                x1: "4",
                                y1: "22",
                                x2: "56",
                                y2: "22",
                              }),
                              (0, s.jsx)("line", {
                                x1: "4",
                                y1: "38",
                                x2: "56",
                                y2: "38",
                              }),
                              (0, s.jsx)("line", {
                                x1: "14",
                                y1: "16",
                                x2: "14",
                                y2: "44",
                                stroke: "#5a3a1e",
                                strokeWidth: "4",
                              }),
                              (0, s.jsx)("line", {
                                x1: "30",
                                y1: "16",
                                x2: "30",
                                y2: "44",
                                stroke: "#5a3a1e",
                                strokeWidth: "4",
                              }),
                              (0, s.jsx)("line", {
                                x1: "46",
                                y1: "16",
                                x2: "46",
                                y2: "44",
                                stroke: "#5a3a1e",
                                strokeWidth: "4",
                              }),
                            ],
                          })
                        : (0, s.jsxs)("g", {
                            stroke: "#8a5a32",
                            strokeWidth: "5",
                            fill: "none",
                            strokeLinecap: "round",
                            children: [
                              (0, s.jsx)("path", { d: "M4 22 Q38 22 38 60" }),
                              (0, s.jsx)("path", { d: "M4 38 Q22 38 22 60" }),
                              (0, s.jsx)("line", {
                                x1: "12",
                                y1: "16",
                                x2: "12",
                                y2: "44",
                                stroke: "#5a3a1e",
                                strokeWidth: "4",
                              }),
                              (0, s.jsx)("line", {
                                x1: "26",
                                y1: "42",
                                x2: "40",
                                y2: "34",
                                stroke: "#5a3a1e",
                                strokeWidth: "4",
                              }),
                            ],
                          }),
                  }),
                  r === n &&
                    (0, s.jsx)("span", {
                      className: "train-emoji",
                      children: "🚂",
                    }),
                ],
              },
              n,
            ),
          ),
          (0, s.jsx)("span", {
            className: "track-endpoint end",
            style: {
              gridColumn: n[n.length - 1].col + 3,
              gridRow: n[n.length - 1].row + 1,
            },
            children: "🏠",
          }),
        ],
      }),
    ],
  });
}
let G = [
  { box: "🍎", items: ["🍌", "🍇", "🍓", "🍊", "🍉", "🍍"] },
  { box: "🐶", items: ["🐱", "🐰", "🐮", "🐷", "🐔", "🐸"] },
  { box: "🚗", items: ["🚌", "🚒", "🚜", "✈️", "🚁", "⛵"] },
];
function Y({ level: e, onFinish: t }) {
  let [n] = (0, i.useState)(() => {
      let t = Math.min(4, 2 + Math.floor(e / 3)),
        n = [];
      return (
        G.forEach((e, a) => {
          j(e.items)
            .slice(0, t)
            .forEach((e) => n.push({ em: e, cat: a }));
        }),
        j(n)
      );
    }),
    [a, r] = (0, i.useState)(0),
    [l, o] = (0, i.useState)(null),
    c = n[a];
  return (0, s.jsxs)("div", {
    className: "brain-game",
    children: [
      (0, s.jsxs)("p", {
        className: "brain-instr",
        children: [
          "¿Dónde va cada cosa? Toca su caja 📦 (",
          a + 1,
          "/",
          n.length,
          ")",
        ],
      }),
      (0, s.jsx)("div", { className: "sort-item", children: c?.em }, a),
      (0, s.jsx)("div", {
        className: "sort-boxes",
        children: G.map((e, i) =>
          (0, s.jsxs)(
            "button",
            {
              className: `sort-box ${l?.cat === i ? (l.ok ? "ok" : "no") : ""}`,
              onClick: () =>
                ((e) => {
                  if (l || !c) return;
                  let s = e === c.cat;
                  (o({ cat: e, ok: s }),
                    setTimeout(
                      () => {
                        if ((o(null), s)) {
                          let e = a + 1;
                          if (e >= n.length) return void t(!0);
                          r(e);
                        }
                      },
                      s ? 450 : 800,
                    ));
                })(i),
              children: [
                (0, s.jsx)("span", { className: "sb-lid", children: "📦" }),
                (0, s.jsx)("span", { className: "sb-label", children: e.box }),
              ],
            },
            i,
          ),
        ),
      }),
    ],
  });
}
function X({ levels: e, onWin: t, onBack: n }) {
  let [a, r] = (0, i.useState)("hub"),
    [l, o] = (0, i.useState)(0),
    [c, u] = (0, i.useState)(null),
    [f, m] = (0, i.useState)(!1),
    [p, h] = (0, i.useState)(0),
    g = (0, i.useRef)(null);
  (0, i.useEffect)(
    () => () => {
      g.current && clearTimeout(g.current);
    },
    [],
  );
  let b = (e) => (n) => {
      if (n) {
        t(e);
        let n = l + 1;
        if (n >= 5) {
          (SFX.win(), o(n), m(!0));
          return;
        }
        (SFX.ok(),
          u("win"),
          (g.current = setTimeout(() => {
            (u(null), o(n), h((e) => e + 1));
          }, 1e3)));
      } else
        (SFX.no(),
          u("fail"),
          (g.current = setTimeout(() => {
            (u(null), h((e) => e + 1));
          }, 1200)));
    },
    v = () => {
      (m(!1), u(null), r("hub"));
    },
    y = MG_MINIS.find((e) => e.id === a) || D.find((e) => e.id === a);
  return (0, s.jsxs)("div", {
    className: "screen world-sonic brain-bg",
    onPointerDown: (ev) => {
      ev.target.closest && ev.target.closest("button") && SFX.pop();
    },
    children: [
      "hub" === a
        ? (0, s.jsxs)("div", {
            className: "panel",
            children: [
              (0, s.jsx)("button", {
                className: "link-back",
                onClick: n,
                children: "◀\ufe0e Mi aventura",
              }),
              (0, s.jsx)("h2", {
                className: "panel-title",
                children: "🧩 Juegos de lógica",
              }),
              (0, s.jsxs)("p", {
                className: "mastery-sub",
                children: [
                  "Cada partida son ",
                  5,
                  " rondas seguidas. ¡Cada vez más difíciles!",
                ],
              }),
              (0, s.jsx)("div", {
                className: "brain-list",
                children: MG_MINIS.map((t) =>
                  (0, s.jsxs)(
                    "button",
                    {
                      className: "brain-card kid-card",
                      onClick: () => {
                        var e;
                        return (
                          (e = t.id),
                          void (o(0), u(null), m(!1), h((e) => e + 1), r(e))
                        );
                      },
                      children: [
                        (0, s.jsx)("span", {
                          className: "bc-emoji",
                          children: t.emoji,
                        }),
                        (0, s.jsx)("span", {
                          className: "bc-body",
                          children: (0, s.jsx)("span", {
                            className: "bc-name",
                            children: t.name,
                          }),
                        }),
                        (0, s.jsxs)("span", {
                          className: "bc-level",
                          children: ["⭐ ", e[t.id]],
                        }),
                      ],
                    },
                    t.id,
                  ),
                ),
              }),
            ],
          })
        : (0, s.jsxs)("div", {
            className: "panel brain-panel",
            children: [
              (0, s.jsxs)("div", {
                className: "brain-head",
                children: [
                  (0, s.jsx)("button", {
                    className: "link-back",
                    onClick: v,
                    children: "◀\ufe0e Volver",
                  }),
                  (0, s.jsxs)("span", {
                    className: "brain-title-line",
                    children: [y.emoji, " ", y.name],
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "round-dots",
                children: Array.from({ length: 5 }).map((e, t) =>
                  (0, s.jsx)(
                    "span",
                    {
                      className: `round-dot ${t < l ? "won" : t === l ? "now" : ""}`,
                      children: t < l ? "⭐" : "○",
                    },
                    t,
                  ),
                ),
              }),
              /* Despacho por búsqueda en MG_MINIS y no una cadena de seis
                 casos: los ocho juegos añadidos al camino no aparecían aquí,
                 así que esta pestaña seguía mostrando solo los originales.
                 Con una sola fuente de verdad no se pueden desincronizar. */
              (() => {
                let mn = MG_MINIS.find((g) => g.id === a);
                if (!mn) return null;
                let extra = mn.props ? mn.props(mgSkillBand().cap) : null;
                return MG_H(
                  mn.comp,
                  { level: e[a] || 0, ...extra, onFinish: b(a), key: p },
                );
              })(),
            ],
          }),
      c &&
        (0, s.jsxs)("div", {
          className: "round-flash",
          children: [
            (0, s.jsx)(d, { mood: "win" === c ? "excited" : "sad", size: 64 }),
            (0, s.jsx)("span", {
              className: "rf-text",
              children:
                "win" === c
                  ? `\xa1Bien! ${l + 1} de 5 \u{2B50}`
                  : "¡Casi! Otra vez",
            }),
          ],
        }),
      f &&
        (0, s.jsx)("div", {
          className: "chest-overlay",
          children: (0, s.jsxs)("div", {
            className: "chest-modal",
            children: [
              (0, s.jsx)(d, { mood: "excited", size: 84, extra: "pug-walk" }),
              (0, s.jsxs)("div", {
                className: "chest-title",
                children: ["¡", 5, " rondas seguidas! 🏆"],
              }),
              (0, s.jsxs)("div", {
                className: "btn-row",
                children: [
                  (0, s.jsx)("button", {
                    className: "btn-pixel btn-go",
                    onClick: () => {
                      (o(0), m(!1), h((e) => e + 1));
                    },
                    children: "▶\ufe0e Seguir jugando",
                  }),
                  (0, s.jsx)("button", {
                    className: "btn-pixel",
                    onClick: v,
                    children: "◀\ufe0e Salir",
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
function J(e) {
  let t = [...e];
  for (let e = t.length - 1; e > 0; e--) {
    let n = Math.floor(Math.random() * (e + 1));
    [t[e], t[n]] = [t[n], t[e]];
  }
  return t;
}
let Z = (e, t) => Math.floor(Math.random() * (t - e + 1)) + e,
  ee = (e) => e[Math.floor(Math.random() * e.length)],
  et = [
    { id: "w1", name: "Green Hill", emoji: "🌀", bg: "sonic" },
    { id: "w2", name: "Torre de restas", emoji: "➖", bg: "minecraft" },
    { id: "w3", name: "Cueva de bloques", emoji: "⛏️", bg: "minecraft" },
    { id: "w4", name: "Galaxia lejana", emoji: "🌌", bg: "starwars" },
    { id: "w5", name: "Nebulosa violeta", emoji: "💜", bg: "starwars" },
    { id: "w6", name: "Isla del caos", emoji: "🌋", bg: "sonic" },
    { id: "w7", name: "Mina profunda", emoji: "💎", bg: "minecraft" },
    { id: "w8", name: "Estrella oscura", emoji: "🌑", bg: "starwars" },
    { id: "w9", name: "Corona galáctica", emoji: "👑", bg: "starwars" },
    { id: "w10", name: "Cima del maestro", emoji: "🏔️", bg: "starwars" },
    { id: "w11", name: "Nebulosa experta", emoji: "🔮", bg: "starwars" },
  ],
  en = [
    {
      id: 0,
      world: 0,
      name: "Cuenta y suma",
      kind: "sumaobj",
      tables: [],
      questions: 8,
      passAt: 6,
      emoji: "🍪",
    },
    {
      id: 1,
      world: 0,
      name: "Sumas rápidas",
      kind: "sumas1",
      tables: [],
      questions: 10,
      passAt: 7,
      emoji: "➕",
    },
    {
      id: 2,
      world: 0,
      name: "Parejas del 10",
      kind: "bonds10",
      tables: [],
      questions: 10,
      passAt: 7,
      emoji: "🤝",
    },
    {
      id: 0,
      world: 0,
      name: "Sumas con decenas",
      kind: "sumas2d1d",
      tables: [],
      questions: 10,
      passAt: 7,
      emoji: "🔢",
    },
    {
      id: 0,
      world: 0,
      name: "Llevando una",
      kind: "sumas2d1dC",
      tables: [],
      questions: 10,
      passAt: 7,
      emoji: "🎒",
    },
    {
      id: 0,
      world: 0,
      name: "Dos cifras sin llevar",
      kind: "sumas2dNC",
      tables: [],
      questions: 10,
      passAt: 7,
      emoji: "🧮",
    },
    {
      id: 3,
      world: 0,
      name: "Sumas de 2 dígitos",
      kind: "sumas2",
      tables: [],
      questions: 10,
      passAt: 7,
      emoji: "💎",
    },
    {
      id: 4,
      world: 0,
      name: "Par o impar",
      kind: "parimpar",
      tables: [],
      questions: 10,
      passAt: 7,
      emoji: "🎭",
    },
    {
      id: 0,
      world: 0,
      name: "Dobles hasta 20",
      kind: "doblesFacil",
      tables: [],
      questions: 10,
      passAt: 7,
      emoji: "✌️",
    },
    {
      id: 5,
      world: 0,
      name: "Dobles y mitades",
      kind: "dobles",
      tables: [],
      questions: 10,
      passAt: 7,
      emoji: "🪞",
    },
    {
      id: 6,
      world: 0,
      name: "Jefe: Doctor Tornillo",
      foe: "tornillo",
      kind: "boss",
      tables: [],
      questions: 12,
      passAt: 9,
      emoji: "🤖",
    },
    {
      id: 7,
      world: 1,
      name: "Restas sencillas",
      kind: "restas1d",
      tables: [],
      questions: 10,
      passAt: 7,
      emoji: "➖",
    },
    {
      id: 8,
      world: 1,
      name: "Restas veloces",
      kind: "restas1",
      tables: [],
      questions: 10,
      passAt: 7,
      emoji: "💨",
    },
    {
      id: 0,
      world: 1,
      name: "Restas con decenas",
      kind: "restas2d1d",
      tables: [],
      questions: 10,
      passAt: 7,
      emoji: "🔻",
    },
    {
      id: 0,
      world: 1,
      name: "Dos cifras sin prestar",
      kind: "restas2dNC",
      tables: [],
      questions: 10,
      passAt: 7,
      emoji: "🧱",
    },
    {
      id: 0,
      world: 1,
      name: "Pide prestado",
      kind: "restas2d1dC",
      tables: [],
      questions: 10,
      passAt: 7,
      emoji: "🤝",
    },
    {
      id: 9,
      world: 1,
      name: "Restas de 2 dígitos",
      kind: "restas2",
      tables: [],
      questions: 10,
      passAt: 7,
      emoji: "🏗️",
    },
    {
      id: 10,
      world: 1,
      name: "Parejas del 20",
      kind: "bonds20",
      tables: [],
      questions: 10,
      passAt: 7,
      emoji: "🤝",
    },
    {
      id: 0,
      world: 1,
      name: "La balanza",
      kind: "balanza",
      tables: [],
      questions: 8,
      passAt: 6,
      emoji: "⚖️",
    },
    {
      id: 11,
      world: 1,
      name: "Secuencias misteriosas",
      kind: "secuencia",
      tables: [],
      questions: 8,
      passAt: 6,
      emoji: "🔍",
    },
    {
      id: 12,
      world: 1,
      name: "Jefe: Caballero resta",
      foe: "caballero",
      kind: "boss",
      tables: [],
      questions: 12,
      passAt: 9,
      emoji: "🛡️",
    },
    {
      id: 0,
      world: 2,
      name: "Grupos iguales",
      kind: "arreglo",
      tables: [],
      questions: 8,
      passAt: 6,
      emoji: "🍎",
    },
    {
      id: 0,
      world: 2,
      name: "Filas y columnas",
      kind: "arreglo",
      tables: [],
      questions: 8,
      passAt: 6,
      emoji: "🔲",
      big: !0,
    },
    {
      id: 13,
      world: 2,
      name: "Reglas del 1 y el 0",
      kind: "tabla",
      tables: [0, 1],
      questions: 10,
      passAt: 7,
      emoji: "✨",
    },
    {
      id: 14,
      world: 2,
      name: "Salta de 2 en 2",
      kind: "salto",
      tables: [2],
      questions: 8,
      passAt: 6,
      emoji: "🐰",
    },
    {
      id: 15,
      world: 2,
      name: "Tabla del 2, primera parte",
      kind: "tabla",
      tables: [2],
      questions: 10,
      passAt: 7,
      emoji: "💍",
      factRange: [1, 5],
    },
    {
      id: 16,
      world: 2,
      name: "Tabla del 2 completa",
      kind: "tabla",
      tables: [2],
      questions: 10,
      passAt: 7,
      emoji: "💎",
    },
    {
      id: 17,
      world: 2,
      name: "Salta de 5 en 5",
      kind: "salto",
      tables: [5],
      questions: 8,
      passAt: 6,
      emoji: "🦘",
    },
    {
      id: 18,
      world: 2,
      name: "Tabla del 5, primera parte",
      kind: "tabla",
      tables: [5],
      questions: 10,
      passAt: 7,
      emoji: "🖐️",
      factRange: [1, 5],
    },
    {
      id: 19,
      world: 2,
      name: "Tabla del 5 completa",
      kind: "tabla",
      tables: [5],
      questions: 10,
      passAt: 7,
      emoji: "🌀",
    },
    {
      id: 20,
      world: 2,
      name: "Repaso: tablas 2 y 5",
      kind: "tabla",
      tables: [2, 5],
      questions: 10,
      passAt: 7,
      emoji: "🔁",
    },
    {
      id: 21,
      world: 2,
      name: "Salta de 10 en 10",
      kind: "salto",
      tables: [10],
      questions: 8,
      passAt: 6,
      emoji: "🚀",
    },
    {
      id: 22,
      world: 2,
      name: "Tabla del 10",
      kind: "tabla",
      tables: [10],
      questions: 10,
      passAt: 7,
      emoji: "⚡",
    },
    {
      id: 23,
      world: 2,
      name: "Jefe: Dragón de Obsidiana",
      foe: "obsidiana",
      kind: "boss",
      tables: [1, 2, 5, 10],
      questions: 12,
      passAt: 9,
      emoji: "🐉",
    },
    {
      id: 24,
      world: 3,
      name: "Salta de 3 en 3",
      kind: "salto",
      tables: [3],
      questions: 8,
      passAt: 6,
      emoji: "🐸",
    },
    {
      id: 25,
      world: 3,
      name: "Tabla del 3, primera parte",
      kind: "tabla",
      tables: [3],
      questions: 10,
      passAt: 7,
      emoji: "🟩",
      factRange: [1, 5],
    },
    {
      id: 26,
      world: 3,
      name: "Tabla del 3 completa",
      kind: "tabla",
      tables: [3],
      questions: 10,
      passAt: 7,
      emoji: "🌿",
    },
    {
      id: 27,
      world: 3,
      name: "Repaso: tablas 2 y 3",
      kind: "tabla",
      tables: [2, 3],
      questions: 10,
      passAt: 7,
      emoji: "🔁",
    },
    {
      id: 28,
      world: 3,
      name: "Salta de 4 en 4",
      kind: "salto",
      tables: [4],
      questions: 8,
      passAt: 6,
      emoji: "🦗",
    },
    {
      id: 29,
      world: 3,
      name: "Tabla del 4, primera parte",
      kind: "tabla",
      tables: [4],
      questions: 10,
      passAt: 7,
      emoji: "⛏️",
      factRange: [1, 5],
    },
    {
      id: 30,
      world: 3,
      name: "Tabla del 4 completa",
      kind: "tabla",
      tables: [4],
      questions: 10,
      passAt: 7,
      emoji: "🧱",
    },
    {
      id: 31,
      world: 3,
      name: "Repaso: tablas 3 y 4",
      kind: "tabla",
      tables: [3, 4],
      questions: 10,
      passAt: 7,
      emoji: "🔁",
    },
    {
      id: 32,
      world: 3,
      name: "Número escondido",
      kind: "factor",
      tables: [2, 3, 4, 5],
      questions: 10,
      passAt: 7,
      emoji: "❓",
    },
    {
      id: 33,
      world: 3,
      name: "Jefe: Lord Eclipse",
      foe: "eclipse",
      kind: "boss",
      tables: [2, 3, 4, 5, 10],
      questions: 12,
      passAt: 9,
      emoji: "🌑",
    },
    {
      id: 34,
      world: 4,
      name: "Salta de 6 en 6",
      kind: "salto",
      tables: [6],
      questions: 8,
      passAt: 6,
      emoji: "🛸",
    },
    {
      id: 35,
      world: 4,
      name: "Tabla del 6, primera parte",
      kind: "tabla",
      tables: [6],
      questions: 10,
      passAt: 7,
      emoji: "🪐",
      factRange: [1, 5],
    },
    {
      id: 36,
      world: 4,
      name: "Tabla del 6 completa",
      kind: "tabla",
      tables: [6],
      questions: 10,
      passAt: 7,
      emoji: "🌌",
    },
    {
      id: 37,
      world: 4,
      name: "Repaso: tablas 4, 5 y 6",
      kind: "tabla",
      tables: [4, 5, 6],
      questions: 10,
      passAt: 7,
      emoji: "🔁",
    },
    {
      id: 38,
      world: 4,
      name: "Salta de 7 en 7",
      kind: "salto",
      tables: [7],
      questions: 8,
      passAt: 6,
      emoji: "⚔️",
    },
    {
      id: 39,
      world: 4,
      name: "Tabla del 7, primera parte",
      kind: "tabla",
      tables: [7],
      questions: 10,
      passAt: 7,
      emoji: "🗡️",
      factRange: [1, 5],
    },
    {
      id: 40,
      world: 4,
      name: "Tabla del 7 completa",
      kind: "tabla",
      tables: [7],
      questions: 10,
      passAt: 7,
      emoji: "🌟",
    },
    {
      id: 41,
      world: 4,
      name: "Repaso: tablas 6 y 7",
      kind: "tabla",
      tables: [6, 7],
      questions: 10,
      passAt: 7,
      emoji: "🔁",
    },
    {
      id: 42,
      world: 4,
      name: "Número escondido 2",
      kind: "factor",
      tables: [6, 7],
      questions: 10,
      passAt: 7,
      emoji: "🔮",
    },
    {
      id: 43,
      world: 4,
      name: "Cadena mental",
      kind: "cadena",
      tables: [],
      questions: 8,
      passAt: 6,
      emoji: "🔗",
    },
    {
      id: 44,
      world: 4,
      name: "Jefe: Acero Veloz",
      foe: "acero",
      kind: "boss",
      tables: [6, 7],
      questions: 12,
      passAt: 9,
      emoji: "🦾",
    },
    {
      id: 45,
      world: 5,
      name: "Salta de 8 en 8",
      kind: "salto",
      tables: [8],
      questions: 8,
      passAt: 6,
      emoji: "🐙",
    },
    {
      id: 46,
      world: 5,
      name: "Tabla del 8, primera parte",
      kind: "tabla",
      tables: [8],
      questions: 10,
      passAt: 7,
      emoji: "🕷️",
      factRange: [1, 5],
    },
    {
      id: 47,
      world: 5,
      name: "Tabla del 8 completa",
      kind: "tabla",
      tables: [8],
      questions: 10,
      passAt: 7,
      emoji: "🕸️",
    },
    {
      id: 48,
      world: 5,
      name: "Repaso: tablas 7 y 8",
      kind: "tabla",
      tables: [7, 8],
      questions: 10,
      passAt: 7,
      emoji: "🔁",
    },
    {
      id: 49,
      world: 5,
      name: "Salta de 9 en 9",
      kind: "salto",
      tables: [9],
      questions: 8,
      passAt: 6,
      emoji: "☄️",
    },
    {
      id: 50,
      world: 5,
      name: "Tabla del 9, primera parte",
      kind: "tabla",
      tables: [9],
      questions: 10,
      passAt: 7,
      emoji: "🌟",
      factRange: [1, 5],
    },
    {
      id: 51,
      world: 5,
      name: "Tabla del 9 completa",
      kind: "tabla",
      tables: [9],
      questions: 10,
      passAt: 7,
      emoji: "💫",
    },
    {
      id: 52,
      world: 5,
      name: "Repaso: tablas 8 y 9",
      kind: "tabla",
      tables: [8, 9],
      questions: 10,
      passAt: 7,
      emoji: "🔁",
    },
    {
      id: 53,
      world: 5,
      name: "Número escondido 3",
      kind: "factor",
      tables: [8, 9],
      questions: 10,
      passAt: 7,
      emoji: "🧩",
    },
    {
      id: 54,
      world: 5,
      name: "Cadena avanzada",
      kind: "cadena",
      tables: [],
      questions: 8,
      passAt: 6,
      emoji: "⛓️",
      hardChain: !0,
    },
    {
      id: 55,
      world: 5,
      name: "Jefe: Profesor Cascarón",
      foe: "cascaron",
      kind: "boss",
      tables: [2, 3, 4, 5, 6, 7, 8, 9, 10],
      questions: 14,
      passAt: 11,
      emoji: "🥚",
    },
    {
      id: 0,
      world: 6,
      name: "Reparto en partes iguales",
      kind: "reparto",
      tables: [],
      questions: 8,
      passAt: 6,
      emoji: "🍐",
    },
    {
      id: 0,
      world: 6,
      name: "Gran reparto",
      kind: "reparto",
      tables: [],
      questions: 8,
      passAt: 6,
      emoji: "🧺",
      big: !0,
    },
    {
      id: 56,
      world: 6,
      name: "Dividir entre 2",
      kind: "div",
      tables: [2],
      questions: 10,
      passAt: 7,
      emoji: "✂️",
    },
    {
      id: 57,
      world: 6,
      name: "Dividir entre 5",
      kind: "div",
      tables: [5],
      questions: 10,
      passAt: 7,
      emoji: "🖐️",
    },
    {
      id: 58,
      world: 6,
      name: "Repaso: dividir entre 2 y 5",
      kind: "div",
      tables: [2, 5],
      questions: 10,
      passAt: 7,
      emoji: "🔁",
    },
    {
      id: 59,
      world: 6,
      name: "Dividir entre 10",
      kind: "div",
      tables: [10],
      questions: 10,
      passAt: 7,
      emoji: "🔟",
    },
    {
      id: 60,
      world: 6,
      name: "División sorpresa",
      kind: "div",
      tables: [2, 5, 10],
      questions: 10,
      passAt: 7,
      emoji: "🎲",
    },
    {
      id: 61,
      world: 6,
      name: "Multiplica y divide",
      kind: "multidiv",
      tables: [2, 5, 10],
      questions: 10,
      passAt: 7,
      emoji: "🔄",
    },
    {
      id: 62,
      world: 6,
      name: "Las tablas no se olvidan: 8 y 9",
      kind: "tabla",
      tables: [8, 9],
      questions: 10,
      passAt: 7,
      emoji: "🧠",
    },
    {
      id: 63,
      world: 6,
      name: "Jefe: El Tricalavera",
      foe: "tricalavera",
      kind: "boss",
      tables: [2, 5, 10],
      questions: 12,
      passAt: 9,
      emoji: "💀",
    },
    {
      id: 64,
      world: 7,
      name: "Dividir entre 3",
      kind: "div",
      tables: [3],
      questions: 10,
      passAt: 7,
      emoji: "🪓",
    },
    {
      id: 65,
      world: 7,
      name: "Dividir entre 4",
      kind: "div",
      tables: [4],
      questions: 10,
      passAt: 7,
      emoji: "🧱",
    },
    {
      id: 66,
      world: 7,
      name: "Repaso: dividir entre 3 y 4",
      kind: "div",
      tables: [3, 4],
      questions: 10,
      passAt: 7,
      emoji: "🔁",
    },
    {
      id: 67,
      world: 7,
      name: "Dividir entre 6",
      kind: "div",
      tables: [6],
      questions: 10,
      passAt: 7,
      emoji: "🛰️",
    },
    {
      id: 68,
      world: 7,
      name: "Dividir entre 7",
      kind: "div",
      tables: [7],
      questions: 10,
      passAt: 7,
      emoji: "🗡️",
    },
    {
      id: 69,
      world: 7,
      name: "Repaso: dividir entre 6 y 7",
      kind: "div",
      tables: [6, 7],
      questions: 10,
      passAt: 7,
      emoji: "🔁",
    },
    {
      id: 70,
      world: 7,
      name: "Multiplica y divide 2",
      kind: "multidiv",
      tables: [2, 3, 4, 5, 6, 7],
      questions: 10,
      passAt: 7,
      emoji: "🔄",
    },
    {
      id: 71,
      world: 7,
      name: "Las tablas no se olvidan: 6 y 7",
      kind: "tabla",
      tables: [6, 7],
      questions: 10,
      passAt: 7,
      emoji: "🧠",
    },
    {
      id: 72,
      world: 7,
      name: "Jefe: Chispa Oscura",
      foe: "chispa",
      kind: "boss",
      tables: [3, 4, 6, 7],
      questions: 12,
      passAt: 9,
      emoji: "⚡",
    },
    {
      id: 73,
      world: 8,
      name: "Dividir entre 8",
      kind: "div",
      tables: [8],
      questions: 10,
      passAt: 7,
      emoji: "🕷️",
    },
    {
      id: 74,
      world: 8,
      name: "Dividir entre 9",
      kind: "div",
      tables: [9],
      questions: 10,
      passAt: 7,
      emoji: "☄️",
    },
    {
      id: 75,
      world: 8,
      name: "Repaso: dividir entre 8 y 9",
      kind: "div",
      tables: [8, 9],
      questions: 10,
      passAt: 7,
      emoji: "🔁",
    },
    {
      id: 76,
      world: 8,
      name: "Gran división",
      kind: "div",
      tables: [2, 3, 4, 5, 6, 7, 8, 9],
      questions: 10,
      passAt: 7,
      emoji: "🌠",
    },
    {
      id: 77,
      world: 8,
      name: "División sorpresa 2",
      kind: "div",
      tables: [2, 3, 4, 5, 6, 7, 8, 9],
      questions: 10,
      passAt: 7,
      emoji: "🎰",
    },
    {
      id: 78,
      world: 8,
      name: "Cadena con división",
      kind: "cadena",
      tables: [],
      questions: 8,
      passAt: 6,
      emoji: "🌀",
      hardChain: !0,
    },
    {
      id: 79,
      world: 8,
      name: "Todas las tablas juntas",
      kind: "tabla",
      tables: [2, 3, 4, 5, 6, 7, 8, 9],
      questions: 10,
      passAt: 7,
      emoji: "🧠",
    },
    {
      id: 80,
      world: 8,
      name: "Jefe: Emperador de Hierro",
      foe: "emperador",
      kind: "boss",
      tables: [2, 3, 4, 5, 6, 7, 8, 9, 10],
      questions: 14,
      passAt: 11,
      emoji: "👑",
    },
    {
      id: 81,
      world: 9,
      name: "Multiplica y divide total",
      kind: "multidiv",
      tables: [2, 3, 4, 5, 6, 7, 8, 9],
      questions: 10,
      passAt: 7,
      emoji: "🔄",
    },
    {
      id: 82,
      world: 9,
      name: "Secuencias misteriosas 2",
      kind: "secuencia",
      tables: [],
      questions: 8,
      passAt: 6,
      emoji: "🔍",
    },
    {
      id: 83,
      world: 9,
      name: "Par o impar veloz",
      kind: "parimpar",
      tables: [],
      questions: 10,
      passAt: 7,
      emoji: "🎭",
    },
    {
      id: 84,
      world: 9,
      name: "Número escondido 4",
      kind: "factor",
      tables: [6, 7, 8, 9],
      questions: 10,
      passAt: 7,
      emoji: "🎭",
    },
    {
      id: 85,
      world: 9,
      name: "Cadena maestra",
      kind: "cadena",
      tables: [],
      questions: 8,
      passAt: 6,
      emoji: "🐲",
      hardChain: !0,
    },
    {
      id: 86,
      world: 9,
      name: "Jefe supremo: Maestro del tiempo",
      foe: "tiempo",
      kind: "boss",
      tables: [2, 3, 4, 5, 6, 7, 8, 9, 10],
      questions: 14,
      passAt: 11,
      emoji: "⏳",
    },
    {
      id: 87,
      world: 10,
      name: "Multiplica en grande",
      kind: "mult2d",
      tables: [],
      questions: 8,
      passAt: 6,
      emoji: "🐋",
    },
    {
      id: 88,
      world: 10,
      name: "Por 10 y por 100",
      kind: "pot10",
      tables: [],
      questions: 10,
      passAt: 7,
      emoji: "0️⃣",
    },
    {
      id: 89,
      world: 10,
      name: "División con resto",
      kind: "resto",
      tables: [],
      questions: 8,
      passAt: 6,
      emoji: "🍕",
    },
    {
      id: 90,
      world: 10,
      name: "Fracciones de un número",
      kind: "fracnum",
      tables: [],
      questions: 8,
      passAt: 6,
      emoji: "🍰",
    },
    {
      id: 91,
      world: 10,
      name: "Redondea a la decena",
      kind: "redondeo",
      tables: [],
      questions: 10,
      passAt: 7,
      emoji: "🎯",
    },
    {
      id: 92,
      world: 10,
      name: "El reloj",
      kind: "hora",
      tables: [],
      questions: 8,
      passAt: 6,
      emoji: "🕐",
    },
    {
      id: 93,
      world: 10,
      name: "Jefe: Sabio galáctico",
      foe: "sabio",
      kind: "boss",
      tables: [2, 3, 4, 5, 6, 7, 8, 9, 10],
      questions: 14,
      passAt: 11,
      emoji: "🧙",
    },
  ],
  ea = {
    73: 85,
    74: 80,
    1: 13,
    2: 1,
    3: 14,
    4: 15,
    5: 16,
    6: 17,
    7: 18,
    8: 19,
    9: 20,
    10: 21,
    11: 22,
    12: 6,
    13: 24,
    14: 25,
    15: 26,
    16: 27,
    17: 28,
    18: 29,
    19: 30,
    20: 31,
    21: 3,
    22: 32,
    23: 23,
    24: 34,
    25: 35,
    26: 36,
    27: 37,
    28: 38,
    29: 39,
    30: 40,
    31: 41,
    32: 42,
    33: 43,
    34: 33,
    35: 45,
    36: 46,
    37: 47,
    38: 48,
    39: 49,
    40: 50,
    41: 51,
    42: 52,
    43: 53,
    44: 54,
    45: 44,
    46: 56,
    47: 57,
    48: 58,
    49: 62,
    50: 59,
    51: 60,
    52: 61,
    53: 55,
    54: 64,
    55: 65,
    56: 66,
    57: 71,
    58: 77,
    59: 70,
    60: 63,
    61: 67,
    62: 68,
    63: 69,
    65: 84,
    66: 78,
    67: 72,
    68: 73,
    69: 74,
    70: 75,
    71: 79,
    72: 76,
    75: 7,
    76: 8,
    77: 2,
    78: 9,
    80: 12,
    81: 4,
    82: 5,
    83: 11,
    84: 10,
    85: 81,
    86: 85,
    87: 86,
  },
  er = [
    {
      id: "potion",
      name: "Poción de vida",
      emoji: "🧪",
      price: 40,
      desc: "Empiezas el nivel con un corazón extra",
    },
    {
      id: "shield",
      name: "Escudo",
      emoji: "🛡️",
      price: 30,
      desc: "Absorbe tu primer error sin perder corazón",
    },
    {
      id: "lens",
      name: "Lupa mágica",
      emoji: "🔍",
      price: 25,
      desc: "Revela el truco de una pregunta difícil",
    },
    {
      id: "retry",
      name: "Doble intento",
      emoji: "🔄",
      price: 35,
      desc: "Si te equivocas, tú eliges volver a intentar una pregunta sin perder corazón",
    },
  ],
  el = { potion: 0, shield: 0, lens: 0, retry: 0 };
function es(e, t) {
  return 1 === e || !!t[e]?.done || !!t[e - 1]?.done;
}
let ei = [
    { id: "playa", name: "Playa soleada", emoji: "🏖️" },
    { id: "bosque", name: "Bosque mágico", emoji: "🌳" },
    { id: "espacio", name: "Espacio estrellado", emoji: "🚀" },
    { id: "pradera", name: "Pradera de palitos", emoji: "🌾" },
    { id: "cuevita", name: "Cueva de puntos", emoji: "🔦" },
    { id: "castillo", name: "Castillo de patrones", emoji: "🏰" },
    { id: "volcan", name: "Volcán de números", emoji: "🌋" },
    { id: "arcoiris", name: "Isla arcoíris", emoji: "🌈" },
    { id: "helada", name: "Montaña helada", emoji: "🏔️" },
    { id: "jardin", name: "Jardín de formas", emoji: "🌷" },
    // Mundos añadidos al final (nunca intercalados): `world` es el ÍNDICE en
    // este arreglo, así que insertar en medio reasignaría el fondo y el
    // banner de todos los niveles posteriores.
    { id: "feria", name: "Feria de juegos", emoji: "🎪" },
    { id: "mar", name: "Fondo del mar", emoji: "🐠" },
    { id: "taller", name: "Taller de robots", emoji: "🤖" },
  ],
  /* Niveles del mundo pequeño. IMPORTANTE: sus `id` son FIJOS y NO se
     reasignan por posición (a diferencia de `en`, que sí lo hace en
     en.forEach). El avance (mg_little_path) se guarda por este id, así que
     no hay migración por versión. Regla para no romper avances: agrega
     niveles nuevos SIEMPRE con un id nuevo al final; NUNCA renumeres ni
     reutilices el id de un nivel existente. Si algún día hiciera falta
     reordenar con renumeración, habría que introducir una migración por
     nombre no destructiva (como la de `en`, pero que jamás descarte). */
  eo = [
    {
      id: 1,
      world: 0,
      name: "Cuenta hasta 3",
      mode: "contar",
      max: 3,
      questions: 8,
      emoji: "🐚",
      sticker: "🐬",
      stickerName: "Delfín saltarín",
    },
    {
      id: 2,
      world: 0,
      name: "Cuenta hasta 5",
      mode: "contar",
      max: 5,
      questions: 8,
      emoji: "🌊",
      sticker: "🐢",
      stickerName: "Tortuga marina",
    },
    {
      id: 3,
      world: 0,
      name: "¿Cuál tiene más?",
      mode: "comparar",
      max: 5,
      questions: 8,
      emoji: "⚖️",
      sticker: "🦀",
      stickerName: "Cangrejo pinzas",
    },
    {
      id: 4,
      world: 0,
      name: "Reto de la playa",
      mode: "mix",
      max: 5,
      questions: 8,
      emoji: "🏆",
      sticker: "🐠",
      stickerName: "Pez arcoíris",
    },
    {
      id: 5,
      world: 1,
      name: "Suma hasta 5",
      mode: "sumar",
      max: 5,
      questions: 8,
      emoji: "🍄",
      sticker: "🦊",
      stickerName: "Zorro veloz",
    },
    {
      id: 6,
      world: 1,
      name: "Cuenta hasta 8",
      mode: "contar",
      max: 8,
      questions: 8,
      emoji: "🌲",
      sticker: "🦉",
      stickerName: "Búho sabio",
    },
    {
      id: 7,
      world: 1,
      name: "Más y menos",
      mode: "comparar",
      max: 8,
      questions: 8,
      emoji: "🍎",
      sticker: "🦋",
      stickerName: "Mariposa mágica",
    },
    {
      id: 8,
      world: 1,
      name: "Reto del bosque",
      mode: "mix",
      max: 8,
      questions: 8,
      emoji: "🏆",
      sticker: "🐿️",
      stickerName: "Ardilla traviesa",
    },
    {
      id: 9,
      world: 2,
      name: "Suma hasta 10",
      mode: "sumar",
      max: 10,
      questions: 8,
      emoji: "🌙",
      sticker: "🛸",
      stickerName: "Nave espacial",
    },
    {
      id: 10,
      world: 2,
      name: "Cuenta hasta 10",
      mode: "contar",
      max: 10,
      questions: 8,
      emoji: "⭐",
      sticker: "🪐",
      stickerName: "Planeta anillado",
    },
    {
      id: 11,
      world: 2,
      name: "Gran comparación",
      mode: "comparar",
      max: 10,
      questions: 8,
      emoji: "🔭",
      sticker: "👽",
      stickerName: "Amigo alien",
    },
    {
      id: 12,
      world: 2,
      name: "Reto galáctico",
      mode: "mix",
      max: 10,
      questions: 8,
      emoji: "👑",
      sticker: "🌟",
      stickerName: "Superestrella",
    },
    {
      id: 13,
      world: 3,
      name: "Palitos hasta 5",
      mode: "palitos",
      max: 5,
      questions: 8,
      emoji: "🌾",
      sticker: "🐮",
      stickerName: "Vaquita feliz",
    },
    {
      id: 14,
      world: 3,
      name: "Palitos hasta 10",
      mode: "palitos",
      max: 10,
      questions: 8,
      emoji: "🌻",
      sticker: "🐝",
      stickerName: "Abeja trabajadora",
    },
    {
      id: 15,
      world: 3,
      name: "Quitar y contar",
      mode: "restar",
      max: 5,
      questions: 8,
      emoji: "🍃",
      sticker: "🐞",
      stickerName: "Mariquita de la suerte",
    },
    {
      id: 16,
      world: 3,
      name: "Reto de la pradera",
      mode: "mix",
      max: 8,
      questions: 8,
      emoji: "🏆",
      sticker: "🦔",
      stickerName: "Erizo valiente",
      pool: ["palitos", "restar", "contar"],
    },
    {
      id: 17,
      world: 4,
      name: "Puntos hasta 5",
      mode: "puntos",
      max: 5,
      questions: 8,
      emoji: "🔦",
      sticker: "🦇",
      stickerName: "Murciélago amigable",
    },
    {
      id: 18,
      world: 4,
      name: "Puntos hasta 10",
      mode: "puntos",
      max: 10,
      questions: 8,
      emoji: "💠",
      sticker: "💎",
      stickerName: "Gema brillante",
    },
    {
      id: 19,
      world: 4,
      name: "Quitar y contar 2",
      mode: "restar",
      max: 8,
      questions: 8,
      emoji: "🕯️",
      sticker: "🐌",
      stickerName: "Caracol paciente",
    },
    {
      id: 20,
      world: 4,
      name: "Reto de la cueva",
      mode: "mix",
      max: 10,
      questions: 8,
      emoji: "🏆",
      sticker: "🦉",
      stickerName: "Búho de cristal",
      pool: ["puntos", "restar", "sumar"],
    },
    {
      id: 21,
      world: 5,
      name: "¿Qué sigue?",
      mode: "patron",
      max: 2,
      questions: 8,
      emoji: "🎨",
      sticker: "🦄",
      stickerName: "Unicornio mágico",
    },
    {
      id: 22,
      world: 5,
      name: "Patrones mágicos",
      mode: "patron",
      max: 3,
      questions: 8,
      emoji: "🪄",
      sticker: "🧚",
      stickerName: "Hada de los números",
    },
    {
      id: 23,
      world: 5,
      name: "Suma y resta",
      mode: "mix",
      max: 10,
      questions: 8,
      emoji: "⚔️",
      sticker: "🎠",
      stickerName: "Carrusel real",
      // Sin pool caía al trío por defecto (contar/sumar/comparar) y este
      // nivel llamado "Suma y resta" jamás generaba una resta.
      pool: ["sumar", "restar"],
    },
    {
      id: 24,
      world: 5,
      name: "Gran reto del castillo",
      mode: "mix",
      max: 10,
      questions: 8,
      emoji: "👑",
      sticker: "🏅",
      stickerName: "Medalla dorada",
      pool: [
        "contar",
        "sumar",
        "comparar",
        "palitos",
        "puntos",
        "restar",
        "patron",
      ],
    },
    {
      id: 25,
      world: 6,
      name: "¿Qué número falta?",
      mode: "falta",
      max: 5,
      questions: 8,
      emoji: "🌋",
      sticker: "🦖",
      stickerName: "Dino explorador",
    },
    {
      id: 26,
      world: 6,
      name: "Cuenta hasta 15",
      mode: "contar",
      max: 15,
      questions: 8,
      emoji: "🔥",
      sticker: "🌶️",
      stickerName: "Chile picante",
    },
    {
      id: 27,
      world: 6,
      name: "Toca en orden",
      mode: "orden",
      max: 4,
      questions: 6,
      emoji: "👆",
      sticker: "🦅",
      stickerName: "Águila veloz",
    },
    {
      id: 28,
      world: 6,
      name: "Reto del volcán",
      mode: "mix",
      max: 10,
      questions: 8,
      emoji: "🏆",
      sticker: "🐊",
      stickerName: "Coco sonriente",
      pool: ["falta", "contar", "orden"],
    },
    {
      id: 29,
      world: 7,
      name: "Falta hasta 10",
      mode: "falta",
      max: 10,
      questions: 8,
      emoji: "🌈",
      sticker: "🦜",
      stickerName: "Loro parlanchín",
    },
    {
      id: 30,
      world: 7,
      name: "Palitos hasta 15",
      mode: "palitos",
      max: 15,
      questions: 8,
      emoji: "🎋",
      sticker: "🍭",
      stickerName: "Dulce premio",
    },
    {
      id: 31,
      world: 7,
      name: "Toca en orden 5",
      mode: "orden",
      max: 5,
      questions: 6,
      emoji: "👆",
      sticker: "🦩",
      stickerName: "Flamenco bailarín",
    },
    {
      id: 32,
      world: 7,
      name: "Reto arcoíris",
      mode: "mix",
      max: 10,
      questions: 8,
      emoji: "🏆",
      sticker: "🌈",
      stickerName: "Arcoíris mágico",
      pool: ["falta", "palitos", "orden", "comparar"],
    },
    {
      id: 33,
      world: 8,
      name: "Sumas heladas",
      mode: "sumar",
      max: 12,
      questions: 8,
      emoji: "⛄",
      sticker: "🐧",
      stickerName: "Pingüino saltarín",
    },
    {
      id: 34,
      world: 8,
      name: "Resta en la nieve",
      mode: "restar",
      max: 10,
      questions: 8,
      emoji: "☃️",
      sticker: "🦭",
      stickerName: "Foca juguetona",
    },
    {
      id: 35,
      world: 8,
      name: "Orden maestro",
      mode: "orden",
      max: 6,
      questions: 6,
      emoji: "👆",
      sticker: "🧊",
      stickerName: "Cubo de hielo",
    },
    {
      id: 36,
      world: 8,
      name: "Gran reto helado",
      mode: "mix",
      max: 12,
      questions: 8,
      emoji: "👑",
      sticker: "❄️",
      stickerName: "Copo brillante",
      pool: [
        "contar",
        "sumar",
        "restar",
        "falta",
        "orden",
        "palitos",
        "puntos",
      ],
    },
    {
      id: 37,
      world: 9,
      name: "La figura igual",
      mode: "figura",
      max: 3,
      questions: 8,
      emoji: "🔷",
      sticker: "🐿️",
      stickerName: "Ardilla curiosa",
    },
    {
      id: 38,
      world: 9,
      name: "Cuenta de 2 en 2",
      mode: "depar",
      max: 5,
      questions: 8,
      emoji: "🧦",
      sticker: "🐛",
      stickerName: "Oruga contadora",
    },
    {
      id: 39,
      world: 9,
      name: "¿Cuántos faltan para 5?",
      mode: "para5",
      max: 5,
      questions: 8,
      emoji: "🖐️",
      sticker: "🌺",
      stickerName: "Flor gigante",
    },
    {
      id: 40,
      world: 9,
      name: "Gran reto del jardín",
      mode: "mix",
      max: 12,
      questions: 8,
      emoji: "👑",
      sticker: "🦚",
      stickerName: "Pavo real",
      pool: ["figura", "depar", "para5", "patron", "sumar"],
    },
    /* Mundos 10-12 (niveles 41-52), añadidos con ids nuevos al final según
       la regla de arriba. Cada mundo trae un nivel dedicado a minijuegos
       (mode "mini", más corto) para cambiar el ritmo. */
    { id: 41, world: 10, name: "Feria de juegos", mode: "mini", max: 10, questions: 4, emoji: "🎪", sticker: "🎡", stickerName: "Rueda de la fortuna" },
    { id: 42, world: 10, name: "Suma hasta 12", mode: "sumar", max: 12, questions: 8, emoji: "🍿", sticker: "🎢", stickerName: "Montaña rusa" },
    { id: 43, world: 10, name: "Cuenta hasta 15", mode: "contar", max: 15, questions: 8, emoji: "🎈", sticker: "🤹", stickerName: "Malabarista" },
    { id: 44, world: 10, name: "Gran reto de la feria", mode: "mix", max: 12, questions: 8, emoji: "🏆", sticker: "🎨", stickerName: "Pintacaritas" },
    { id: 45, world: 11, name: "Cuenta los peces", mode: "contar", max: 15, questions: 8, emoji: "🐟", sticker: "🐙", stickerName: "Pulpo curioso" },
    { id: 46, world: 11, name: "Quedan en el mar", mode: "restar", max: 12, questions: 8, emoji: "🌊", sticker: "🦈", stickerName: "Tiburón amistoso" },
    { id: 47, world: 11, name: "Juegos del mar", mode: "mini", max: 12, questions: 4, emoji: "🫧", sticker: "🐡", stickerName: "Pez globo" },
    { id: 48, world: 11, name: "Gran reto del mar", mode: "mix", max: 15, questions: 8, emoji: "🔱", sticker: "🐳", stickerName: "Ballena gigante" },
    { id: 49, world: 12, name: "Patrones de robot", mode: "patron", max: 3, questions: 8, emoji: "🔩", sticker: "🦾", stickerName: "Brazo robot" },
    { id: 50, world: 12, name: "Ordena hasta 6", mode: "orden", max: 6, questions: 6, emoji: "🔧", sticker: "🛰️", stickerName: "Satélite" },
    { id: 51, world: 12, name: "Juegos del taller", mode: "mini", max: 15, questions: 4, emoji: "⚙️", sticker: "🚁", stickerName: "Helicóptero" },
    { id: 52, world: 12, name: "Gran reto final", mode: "mix", max: 15, questions: 8, emoji: "🎖️", sticker: "🏆", stickerName: "Trofeo de campeón" },
  ],
  ec = ["💍", "🟦", "⭐", "🍎", "💎", "🪙"];
// Práctica intercalada: todo nivel del camino pequeño lleva un pool de
// modos para variar sus preguntas. Si no define uno propio, hereda lo ya
// enseñado hasta ese punto del camino (esto corrige también que los
// "Reto" de los mundos 0-2 usaran sumar antes de enseñarlo). Los modos
// nuevos (vf y tocar) entran del mundo 6 en adelante.
(() => {
  let e = [];
  eo.forEach((t) => {
    "mix" !== t.mode && !e.includes(t.mode) && e.push(t.mode);
    t.pool && t.pool.length
      ? t.pool.forEach((n) => {
          e.includes(n) || e.push(n);
        })
      : (t.pool = e.slice());
    t.world >= 6 &&
      (t.pool.includes("vf") || t.pool.push("vf"),
      t.pool.includes("tocar") || t.pool.push("tocar"));
  });
})();
// Frases rotativas por modo: se eligen al crear cada pregunta (quedan en
// q.frase) para que el mismo texto no se repita 8 veces seguidas.
const MG_LITTLE_FRASES = {
  contar: ["¿Cuántos hay?", "¡Cuéntalos todos!", "¿Cuántos ves aquí?"],
  sumar: ["¿Cuántos hay en total?", "¡Júntalos! ¿Cuántos son?", "¿Cuántos son entre todos?"],
  restar: ["¿Cuántos quedan?", "¡Se fueron algunos! ¿Cuántos quedan?", "¿Cuántos quedan ahora?"],
  comparar: ["Toca el grupo con más", "¿Dónde hay más? ¡Tócalo!", "Elige el grupo con más"],
  palitos: ["¿Cuántos palitos hay?", "¡Cuenta los palitos!", "¿Cuántos palitos ves?"],
  puntos: ["¿Cuántos puntos ves?", "¡Cuenta los puntos!", "¿Cuántos puntos hay?"],
  patron: ["¿Qué sigue?", "¿Qué viene después?", "Completa el patrón"],
  falta: ["¿Qué número falta?", "¡Falta un número! ¿Cuál es?", "Encuentra el número perdido"],
  orden: ["Toca los números en orden: 1, 2, 3...", "¡Del más chico al más grande!", "Toca los números de menor a mayor"],
  figura: ["Toca la figura igual a esta", "¡Busca la figura gemela!", "¿Cuál es igual a esta?"],
  depar: ["¿Cuántos hay? ¡Cuenta de 2 en 2!", "¡De 2 en 2! ¿Cuántos son?", "Cuenta los pares: ¿cuántos hay?"],
  para5: ["¿Cuántos faltan para llenar los 5?", "¿Cuántos más para llegar a 5?", "¿Cuántos faltan para tener 5?"],
  vf: ["Mira bien: ¿sí o no?", "¿Es verdad?", "¿Cierto o no?"],
  tocar: ["¡Toca cada uno para contarlos!", "¡Cuéntalos con tu dedo!", "Toca todos, uno por uno"],
  mini: ["¡Momento de jugar!", "¡A jugar!", "¡Un jueguito!"],
};
let mgLittleLastFrase = "";
function mgLittleFrase(e) {
  let t = MG_LITTLE_FRASES[e];
  if (!t) return null;
  let n = ee(t);
  if (t.length > 1) for (let e = 0; e < 3 && n === mgLittleLastFrase; e++) n = ee(t);
  return ((mgLittleLastFrase = n), n);
}
/* ── Dificultad escalada por niño (camino pequeño) ────────────────────
   La dificultad es una dimensión ORTOGONAL al progreso: lo guardado dice
   QUÉ niveles completó el niño; la banda dice QUÉ TAN GRANDES son los
   números dentro de un nivel. Por eso vive en su propia llave (mg_skill)
   y no toca mg_little_path ni los ids de nivel, que son fijos.

   Las bandas se anclan a estándares curriculares (Common Core K-2 y el
   sentido numérico de LOMLOE); la banda 1 reproduce EXACTAMENTE el juego
   previo a esta función, así que un perfil en banda 1 no nota cambio.
   El ajuste automático busca ~75-85% de aciertos, el rango que reportan
   tanto Math Garden (selección de ítems con p(éxito)=.75) como la regla
   del 85% de Wilson et al. — ni aburrido ni frustrante. */
/* El techo es solo una salvaguarda: la dificultad real la fija el `max` de
   cada nivel multiplicado por el factor. El techo de la banda 1 tiene que
   quedar POR ENCIMA del max más alto que traen los niveles (15), o recortaría
   niveles escritos a mano y la banda 1 dejaría de ser el juego original. */
const MG_BANDS = [
  { id: 0, factor: 0.6, cap: 8, label: "Más suave", short: "Suave" },
  { id: 1, factor: 1, cap: 15, label: "Normal (como está escrito)", short: "Normal" },
  { id: 2, factor: 1.5, cap: 24, label: "Más reto", short: "Reto" },
  { id: 3, factor: 2, cap: 32, label: "Reto máximo", short: "Máx" },
];
const MG_SKILL_WINDOW = 12; // respuestas que mira el ajuste automático
/* Ajustes de experiencia que el papá puede apagar. Vienen TODOS encendidos:
   son el juego tal como está pensado, y esto solo da la posibilidad de
   ajustarlo si a un niño concreto algo le estorba (por ejemplo, si el reloj
   le pone ansioso, o si los minijuegos le distraen de la matemática). */
const MG_SETTINGS = [
  { key: "perks", label: "Poderes del acompañante", hint: "Escudo, reloj, monedas o regalos según quién lo acompañe" },
  { key: "freeze", label: "Congelar el reloj como premio", hint: "Al encadenar aciertos, una pregunta sin reloj. Solo en el camino del aventurero" },
  { key: "minis", label: "Minijuegos dentro del camino", hint: "Memoria, tren, recta numérica... intercalados. Solo en el camino del pequeño" },
  { key: "bonus", label: "Ronda sorpresa al terminar", hint: "Un juego extra opcional al acabar un nivel" },
];
let mgSet = null; // copia viva del perfil que juega
function mgSetDefaults() {
  let o = {};
  MG_SETTINGS.forEach((s) => (o[s.key] = !0));
  return o;
}
// ¿Está encendido este ajuste? Ante la duda, sí: el juego completo es el
// comportamiento por defecto.
function mgOn(key) {
  let v = (mgSet || {})[key];
  return void 0 === v ? !0 : !!v;
}
// Lectura/escritura de CUALQUIER perfil, para el panel de papás, que los
// lista todos. Va por __mgRaw porque el shim solo mapea al perfil activo.
function mgSettingsReadFor(id) {
  try {
    let v = window.__mgRaw && window.__mgRaw.get("mg_" + id + "__mg_settings");
    if (v) return { ...mgSetDefaults(), ...JSON.parse(v) };
  } catch {}
  return mgSetDefaults();
}
function mgSettingsToggleFor(id, key) {
  let s = mgSettingsReadFor(id);
  s[key] = !s[key];
  try {
    window.__mgRaw && window.__mgRaw.set("mg_" + id + "__mg_settings", JSON.stringify(s));
    window.__mgRaw && window.__mgRaw.get("mg_active") === id && (mgSet = s);
  } catch {}
  return s;
}
let mgSkill = null; // { v, band, hist:[], manual }
function mgSkillSeed(age) {
  // La edad SOLO siembra la conjetura inicial; el desempeño manda después.
  return age <= 4 ? 0 : 1;
}
function mgSkillGet() {
  return mgSkill || { v: 1, band: 1, hist: [], manual: null };
}
function mgSkillBand() {
  let s = mgSkillGet();
  return MG_BANDS[null != s.manual ? s.manual : s.band] || MG_BANDS[1];
}
// Máximo efectivo para un nivel. NO muta el nivel: solo devuelve otro
// número para el generador. Piso de 3 para que ningún modo degenere.
function mgSkillMax(lvl) {
  let b = mgSkillBand(),
    base = lvl.max || 5,
    // Piso para que ningún modo degenere, pero nunca por encima de lo que
    // el nivel pide: con piso fijo en 3, un nivel de patrones escrito con
    // max 2 pasaba a patrones de 3 elementos, más difícil que lo autoral.
    piso = Math.min(3, base);
  return Math.max(piso, Math.min(b.cap, Math.round(base * b.factor)));
}
// Nombre honesto: 17 de los 40 niveles llevan el número en el nombre
// ("Cuenta hasta 3"), así que al escalar hay que reescribirlo o el
// rótulo miente. Seguro porque el avance pequeño se indexa por id fijo
// (a diferencia del camino grande, que migra por nombre).
function mgLevelName(lvl) {
  let m = mgSkillMax(lvl);
  return m === lvl.max ? lvl.name : lvl.name.replace(/\d+/, m);
}
// Lectura/escritura de la banda de CUALQUIER perfil (para el informe de
// papás, que lista a todos). Va por __mgRaw porque el shim solo mapea al
// perfil activo.
function mgSkillReadFor(id, age) {
  try {
    let v = window.__mgRaw && window.__mgRaw.get("mg_" + id + "__mg_skill");
    if (v) {
      let s = JSON.parse(v);
      if (s && null != s.band) return s;
    }
  } catch {}
  return { v: 1, band: mgSkillSeed(age), hist: [], manual: null };
}
function mgSkillSetManualFor(id, age, band) {
  let s = { ...mgSkillReadFor(id, age), manual: band };
  null != band && (s.band = band);
  try {
    window.__mgRaw && window.__mgRaw.set("mg_" + id + "__mg_skill", JSON.stringify(s));
  } catch {}
  // Si es el perfil que está jugando, refrescar también la copia viva.
  try {
    window.__mgRaw && window.__mgRaw.get("mg_active") === id && (mgSkill = s);
  } catch {}
  return s;
}
// Registro de aciertos que alimenta el ajuste automático. La banda nunca
// bloquea niveles ni revoca estrellas: solo cambia el tamaño de los
// números de las próximas preguntas, y en silencio para el niño.
/* Señales de la sesión, comparadas contra el propio niño y NO contra un
   estándar: un niño naturalmente lento no debe leerse como frustrado.
   Viven en memoria (la sesión, no el historial), así que no se guardan. */
let mgSessLat = [], // latencias de respuesta de esta sesión
  mgSessCount = 0, // preguntas respondidas en esta sesión
  mgSoothe = !1; // hay que responder con ánimo, no con menos dificultad
function mgSessSeen(ms) {
  (mgSessCount++, mgSessLat.push(ms), mgSessLat.length > 20 && mgSessLat.shift());
}
// Contexto de un fallo: ¿parece que no puede, o que ya no está disponible
// para aprender? "slow" y "fatigue" se miden contra su propia mediana.
function mgMissCtx(ms, streakAntes) {
  let base = 0;
  if (mgSessLat.length >= 4) {
    let s = [...mgSessLat].sort((a, b) => a - b);
    base = s[Math.floor(s.length / 2)];
  }
  return {
    slow: base > 0 && ms > 2.5 * base,
    fatigue: mgSessCount > 24,
    afterStreak: streakAntes >= 3,
  };
}
function mgSootheTake() {
  let v = mgSoothe;
  return ((mgSoothe = !1), v);
}
function mgSkillRecord(ok, save, ctx) {
  let s = mgSkillGet();
  if (null != s.manual) return; // el papá fijó la banda: no tocarla
  // Un fallo con señales de cansancio/frustración se marca aparte: cuenta
  // para la precisión, pero no como evidencia de que el nivel le quede grande.
  let aff = !ok && !!ctx && (ctx.slow || ctx.fatigue || ctx.afterStreak),
    h = [...(s.hist || []), ok ? 1 : 0].slice(-MG_SKILL_WINDOW),
    af = [...(s.aff || []), aff ? 1 : 0].slice(-MG_SKILL_WINDOW),
    band = s.band;
  if (h.length >= MG_SKILL_WINDOW) {
    let aciertos = h.reduce((a, b) => a + b, 0),
      acc = aciertos / h.length;
    // Histéresis: al mover la banda se vacía la ventana, así que hacen
    // falta otras 12 respuestas antes del siguiente movimiento.
    if (acc >= 0.85 && band < MG_BANDS.length - 1) ((band += 1), (h = []), (af = []));
    else if (acc <= 0.6 && band > 0) {
      let fallos = h.length - aciertos,
        fallosAfec = af.reduce((a, b) => a + b, 0);
      // Si la mitad o más de los fallos parecen cansancio o frustración, el
      // problema no es el tamaño de los números: bajarlos sería la respuesta
      // equivocada. Se responde con ánimo y se reinicia la ventana.
      fallos > 0 && 2 * fallosAfec >= fallos
        ? ((mgSoothe = !0), (h = []), (af = []))
        : ((band -= 1), (h = []), (af = []));
    }
  }
  ((mgSkill = { ...s, v: 1, band: band, hist: h, aff: af }), save && save(mgSkill));
}
// Ánimo centrado en el esfuerzo, nunca en "estás cansado" ni en la capacidad.
const MG_SOOTHE = [
  "¡Qué bien que sigues intentando!",
  "Respira y vamos otra vez. ¡Estoy contigo!",
  "Los errores nos enseñan. ¡Sigamos!",
];
/* Minijuegos jugables DENTRO del camino. Los seis de "Juegos de lógica"
   vivían escondidos en otra pestaña, y otros cuatro del camino grande
   (contar cubos, recta numérica, ordenar y memoria) son perfectamente
   apropiados para 4-5 años y no se veían nunca. Todos comparten la misma
   firma ({ level, onFinish }) y no dependen de nada externo, así que se
   montan tal cual como una pregunta más. */
/* Baraja para "Parejas que suman": empareja "2+3" con "5". Refuerza la
   composición de números (number bonds), que el camino no cubría: sabía
   contar y sumar, pero no descomponer un número en partes. */
function mgDeckSuma(techo) {
  let tope = Math.max(5, Math.min(techo, 12)),
    pares = tope <= 8 ? 3 : 4,
    ri = (a, b) => a + Math.floor(Math.random() * (b - a + 1)),
    vistos = new Set(),
    cartas = [],
    id = 0;
  for (let g = 0; g < 80 && cartas.length < 2 * pares; g++) {
    let s = ri(3, tope),
      a = ri(1, s - 1),
      k = String(s);
    if (vistos.has(k)) continue;
    (vistos.add(k),
      cartas.push({ id: id++, text: `${a}+${s - a}`, pairKey: k }),
      cartas.push({ id: id++, text: k, pairKey: k }));
  }
  // Mezcla propia para no depender de helpers de otra sección del archivo.
  for (let i = cartas.length - 1; i > 0; i--) {
    let j2 = Math.floor(Math.random() * (i + 1));
    [cartas[i], cartas[j2]] = [cartas[j2], cartas[i]];
  }
  return cartas;
}
/* `min` = banda mínima en la que se ofrece el juego, y `props` = ajustes que
   dependen del techo del niño. Hacen falta porque cada minijuego escala con
   su propio `level`, que significa cosas distintas en cada uno (largo de una
   secuencia, tamaño de una cuadrícula, rango numérico) y no conoce el techo
   de la banda: la recta, por ejemplo, arranca en rango 20 aunque la banda 0
   tope en 8. Por eso el límite se pone por juego y no con un recorte global,
   que falsearía juegos donde `level` no es una cantidad. */
const MG_MINIS = [
  { id: "luces", comp: O, name: "Memoria de luces", emoji: "✨" },
  { id: "parejitas", comp: U, name: "Parejas", emoji: "🃏" },
  { id: "diferente", comp: Q, name: "El diferente", emoji: "👀" },
  { id: "sombras", comp: W, name: "La sombra", emoji: "🌑" },
  { id: "tren", comp: K, name: "Vías del tren", emoji: "🚂" },
  { id: "cajas", comp: Y, name: "Guarda en su caja", emoji: "📦" },
  { id: "cubos", comp: _, name: "Torre de cubos", emoji: "🧊" },
  { id: "recta", comp: L, name: "La recta numérica", emoji: "📏", min: 1 },
  { id: "ordena", comp: M, name: "Ordena los números", emoji: "🔢", min: 1 },
  { id: "memoria", comp: T, name: "Memoria de flores", emoji: "🌸" },
  // Equivalencia y el signo "=": los niños suelen leerlo como "aquí viene el
  // resultado" en vez de "los dos lados valen lo mismo". La balanza lo vuelve
  // físico, porque el fiel se inclina.
  {
    id: "balanza",
    comp: A,
    name: "La balanza",
    emoji: "⚖️",
    min: 1,
    props: (t) => ({ cap: Math.max(4, Math.min(12, Math.round(t / 2))) }),
  },
  /* Contar de N en N, que el camino ya enseña ("Cuenta de 2 en 2"). El paso
     se limita porque con paso 10 sobre 10 nodos llegaría a 100. Ojo: aquí el
     techo de la banda NO aplica tal cual — gobierna cantidades que se cuentan,
     no la secuencia de conteo, y contar de 5 en 5 hasta 50 es propio de esta
     edad aunque 50 pase del techo. */
  {
    id: "reloj",
    comp: $,
    name: "El búho que cuenta",
    emoji: "🦉",
    min: 1,
    props: (t) => ({ steps: t <= 15 ? [2, 5] : [2, 3, 5, 10] }),
  },
  // Razonamiento deductivo puro (filas y columnas) con dígitos 1-4, dentro
  // del rango de subitización. Pide banda 2 porque arranca con 5 huecos.
  { id: "sudoku", comp: C, name: "Sudoku de 4", emoji: "🧠", min: 2 },
  {
    id: "sumapar",
    comp: P,
    name: "Parejas que suman",
    emoji: "➕",
    min: 1,
    props: (t) => ({ deck: mgDeckSuma(t), label: "Une cada suma con su resultado" }),
  },
];
// Juegos disponibles para la banda actual del niño.
function mgMinisAptos() {
  let b = mgSkillBand().id;
  return MG_MINIS.filter((g) => (g.min || 0) <= b);
}
// Variedad del camino pequeño (espejo del warmup del camino grande):
// desde la pregunta 4 de un nivel de modo fijo, ~28% de las preguntas
// salen del pool del nivel; y un memo evita que salga dos veces seguidas
// exactamente la misma pregunta.
let mgLittleLastSig = "",
  mgLittleLastKind = "";
function mgLittleSig(e) {
  return e
    ? [e.kind, e.n, e.a, e.b, e.answer, e.pairs, e.filled, e.target, e.left, e.right, e.claim, e.obj, e.game].join("|")
    : "";
}
function mgLittleNext(e, t) {
  let n = e.mode,
    mx = mgSkillMax(e); // banda del niño, sin mutar el nivel
  /* Minijuego intercalado, con su propia probabilidad y NO como un modo más
     del pool: metido en un pool de ~15 modos la posibilidad real caía a ~2%
     por pregunta y el niño no llegaba a notar la variedad. Así casi todo
     nivel de mundo 3+ trae uno, y nunca salen dos seguidos. */
  if (mgOn("minis") && e.world >= 3 && t >= 1 && "mini" !== mgLittleLastKind && Math.random() < 0.15) {
    let q = ef("mini", mx, e.pool);
    return (
      (mgLittleLastKind = "mini"),
      (mgLittleLastSig = mgLittleSig(q)),
      (q.frase = mgLittleFrase("mini")),
      q
    );
  }
  return mgLittleQ(e, t, n, mx);
}
// "Otro juego": entrega OTRO minijuego (distinto al actual), que es lo que
// promete el botón. Pasar por mgLittleNext daría una pregunta de matemáticas,
// porque la regla de "nunca dos minijuegos seguidos" lo bloquearía.
function mgMiniOtro(lvl, actual) {
  let q = ef("mini", mgSkillMax(lvl), lvl.pool),
    tope = mgMinisAptos().length > 1 ? 8 : 0; // si solo hay uno, no insistir
  for (let i = 0; i < tope && q.game === actual; i++)
    q = ef("mini", mgSkillMax(lvl), lvl.pool);
  return (
    (mgLittleLastKind = "mini"),
    (mgLittleLastSig = mgLittleSig(q)),
    (q.frase = mgLittleFrase("mini")),
    q
  );
}
function mgLittleQ(e, t, n, mx) {
  "mix" !== n && e.pool && e.pool.length > 1 && t >= 3 && Math.random() < 0.28 && (n = "mix");
  let a = ef(n, mx, e.pool);
  for (let r = 0; r < 3 && mgLittleSig(a) === mgLittleLastSig; r++)
    a = ef(n, mx, e.pool);
  return (
    (mgLittleLastSig = mgLittleSig(a)),
    (mgLittleLastKind = a.kind),
    (a.frase = mgLittleFrase(a.kind)),
    a
  );
}
// Figuras del modo "figura" dibujadas en SVG propio: los emojis
// geométricos son el bloque que más cambia entre plataformas, y aquí el
// dibujo ES la pregunta. Los valores del juego son los ids (strings), la
// comparación de respuestas no cambia.
const MG_FIGURAS = {
  "circulo-rojo": ["circle", { cx: 24, cy: 24, r: 17, fill: "#e53935" }],
  "triangulo-rojo": ["path", { d: "M24 7 L41 39 L7 39 Z", fill: "#e53935" }],
  "cuadrado-azul": ["rect", { x: 8, y: 8, width: 32, height: 32, rx: 5, fill: "#1e88e5" }],
  "estrella-amarilla": ["path", { d: "M24 5 L29.6 17.6 L43.4 19 L33.2 28.4 L36.2 42 L24 34.8 L11.8 42 L14.8 28.4 L4.6 19 L18.4 17.6 Z", fill: "#fdd835" }],
  "circulo-verde": ["circle", { cx: 24, cy: 24, r: 17, fill: "#43a047" }],
  "cuadrado-amarillo": ["rect", { x: 8, y: 8, width: 32, height: 32, rx: 5, fill: "#fdd835" }],
  "corazon-morado": ["path", { d: "M24 41 C10 30 6 22 10 14 C13 8 21 8 24 15 C27 8 35 8 38 14 C42 22 38 30 24 41 Z", fill: "#8e24aa" }],
  "rombo-naranja": ["path", { d: "M24 6 L40 24 L24 42 L8 24 Z", fill: "#fb8c00" }],
};
/* Adornos del fondo del camino, en SVG. Antes eran emoji, que sobre un fondo
   pintado se ven pegados y además cambian de dibujo en cada plataforma. Se
   dimensionan en `em` a propósito: así las reglas de font-size, posición y
   animación que ya existían siguen mandando, sin tocar el CSS. */
/* Retratos de los jefes, en SVG. Antes eran emoji, y el nombre prometía un
   personaje que el dibujo no daba: el señor oscuro salía como 🌑, que es una
   luna. Siete jefes se renombraron a la vez porque eran personajes de marca
   registrada y dibujarlos con fidelidad habría empeorado el problema.
   Regla de dibujo: silueta fuerte y pocos detalles — el nodo del camino los
   pinta a 1.5rem, así que el detalle fino se pierde. Van en `em` para que el
   tamaño lo siga mandando el CSS de cada sitio. */
function mgFoeArt(id) {
  let H = MG_H,
    lienzo = (...hijos) =>
      H(
        "svg",
        {
          viewBox: "0 0 100 100",
          width: "1em",
          height: "1em",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          style: { display: "block", overflow: "visible" },
        },
        ...hijos,
      ),
    grad = (gid, paradas) =>
      H(
        "linearGradient",
        { id: gid, x1: "0", y1: "0", x2: "0", y2: "1" },
        ...paradas.map((s, i) => H("stop", { key: i, offset: s[0], stopColor: s[1] })),
      );

  if ("tornillo" === id)
    return lienzo(
      H("defs", { key: "d" }, grad("mgFoeTor", [["0%", "#d9e2ee"], ["100%", "#8e9bad"]])),
      /* Sin llave inglesa: a 1.5rem era un garabato. El personaje se sostiene
         con tres formas gordas — greñas, gafas y bigotazo. */
      H("path", { key: "hair", d: "M20 30 Q26 6 40 16 Q50 0 60 16 Q74 6 80 30 Z", fill: "#c4531f" }),
      H("circle", { key: "h", cx: 50, cy: 48, r: 30, fill: "url(#mgFoeTor)" }),
      H("rect", { key: "g", x: 18, y: 36, width: 64, height: 15, rx: 7, fill: "#2b3444" }),
      H("circle", { key: "l1", cx: 36, cy: 43.5, r: 8, fill: "#7ce0ff" }),
      H("circle", { key: "l2", cx: 64, cy: 43.5, r: 8, fill: "#7ce0ff" }),
      H("circle", { key: "p1", cx: 36, cy: 43.5, r: 3, fill: "#12303f" }),
      H("circle", { key: "p2", cx: 64, cy: 43.5, r: 3, fill: "#12303f" }),
      // Bigotazo grueso: es lo que lo hace legible de lejos
      H("path", { key: "m", d: "M16 62 Q33 54 50 66 Q67 54 84 62 Q67 84 50 72 Q33 84 16 62 Z", fill: "#c4531f" }),
    );

  if ("caballero" === id)
    return lienzo(
      H("defs", { key: "d" }, grad("mgFoeCab", [["0%", "#e8eef7"], ["100%", "#95a3b8"]])),
      /* Penacho barrido hacia atrás y DOS rejillas en vez de un visor con
         nasal: con una barra horizontal y otra vertical el casco se leía
         literalmente como una letra T. */
      H("path", { key: "p", d: "M52 12 Q74 0 92 10 Q74 12 62 28 Z", fill: "#e04a5f" }),
      H("path", { key: "h", d: "M50 12 Q78 14 78 44 Q78 74 50 92 Q22 74 22 44 Q22 14 50 12 Z", fill: "url(#mgFoeCab)" }),
      // Hueco oscuro de la cara, con dos rejillas claras encima
      H("path", { key: "f", d: "M32 38 Q50 32 68 38 L64 66 Q50 74 36 66 Z", fill: "#161d29" }),
      H("rect", { key: "v1", x: 36, y: 43, width: 28, height: 5, rx: 2.5, fill: "#aebccf" }),
      H("rect", { key: "v2", x: 38, y: 54, width: 24, height: 5, rx: 2.5, fill: "#aebccf" }),
      // Escudo con el signo menos: es el jefe de las restas
      H("circle", { key: "s", cx: 80, cy: 76, r: 17, fill: "#3b6fb5", stroke: "#e8eef7", strokeWidth: "3" }),
      H("rect", { key: "mn", x: 70, y: 72.5, width: 20, height: 7, rx: 3.5, fill: "#fff" }),
    );

  if ("obsidiana" === id)
    return lienzo(
      H("defs", { key: "d" }, grad("mgFoeObs", [["0%", "#4a3f6b"], ["100%", "#15121f"]])),
      H("path", { key: "c1", d: "M26 30 L16 4 L40 20 Z", fill: "#2a2340" }),
      H("path", { key: "c2", d: "M74 30 L84 4 L60 20 Z", fill: "#2a2340" }),
      // Cabeza angular: obsidiana es cristal, así que nada de curvas suaves
      H("path", { key: "h", d: "M50 22 L82 40 L74 74 L50 94 L26 74 L18 40 Z", fill: "url(#mgFoeObs)" }),
      H("path", { key: "f1", d: "M50 22 L50 94 M18 40 L82 40", stroke: "#6b5aa0", strokeWidth: "1.6", opacity: "0.5" }),
      H("path", { key: "e1", d: "M32 48 L44 54 L32 58 Z", fill: "#c77dff" }),
      H("path", { key: "e2", d: "M68 48 L56 54 L68 58 Z", fill: "#c77dff" }),
      H("path", { key: "t", d: "M40 72 L44 82 L50 74 L56 82 L60 72 Z", fill: "#e8dcff" }),
    );

  if ("eclipse" === id)
    return lienzo(
      H("defs", { key: "d" }, grad("mgFoeEcl", [["0%", "#3a3f4a"], ["100%", "#0d0f14"]])),
      H("path", { key: "cape", d: "M18 96 Q22 62 34 52 L66 52 Q78 62 82 96 Z", fill: "#141821" }),
      // Casco angular, la silueta que hace al personaje
      H("path", { key: "h", d: "M50 8 Q80 12 78 44 Q76 62 50 76 Q24 62 22 44 Q20 12 50 8 Z", fill: "url(#mgFoeEcl)" }),
      H("path", { key: "v", d: "M30 40 Q50 34 70 40 L64 52 Q50 47 36 52 Z", fill: "#8d1220" }),
      H("circle", { key: "e1", cx: 40, cy: 43, r: 3.4, fill: "#ff4d5e" }),
      H("circle", { key: "e2", cx: 60, cy: 43, r: 3.4, fill: "#ff4d5e" }),
      H("path", { key: "b", d: "M42 60 h16 v7 h-16 Z", fill: "#2b303b" }),
    );

  if ("acero" === id)
    return lienzo(
      H("defs", { key: "d" }, grad("mgFoeAce", [["0%", "#7fc4ff"], ["100%", "#1c4f8a"]])),
      // Púas hacia atrás, gordas y bien separadas: antes casi no se leían
      H("path", { key: "s1", d: "M40 24 L0 6 L30 40 Z", fill: "#1c4f8a" }),
      H("path", { key: "s2", d: "M36 46 L-4 42 L30 60 Z", fill: "#2a6bb0" }),
      H("path", { key: "s3", d: "M38 66 L2 76 L34 80 Z", fill: "#173f6e" }),
      H("circle", { key: "h", cx: 56, cy: 48, r: 30, fill: "url(#mgFoeAce)" }),
      H("path", { key: "pl", d: "M56 18 a30 30 0 0 1 26 15 L56 48 Z", fill: "#bfe3ff", opacity: "0.6" }),
      H("circle", { key: "e", cx: 66, cy: 42, r: 8, fill: "#fff" }),
      H("circle", { key: "p", cx: 68, cy: 42, r: 4, fill: "#e02a3c" }),
      H("path", { key: "m", d: "M74 62 q-12 8 -22 4", stroke: "#123a66", strokeWidth: "4", strokeLinecap: "round" }),
    );

  if ("cascaron" === id)
    return lienzo(
      H("defs", { key: "d" }, grad("mgFoeCas", [["0%", "#fff6e2"], ["100%", "#e3c79a"]])),
      H("ellipse", { key: "b", cx: 50, cy: 54, rx: 34, ry: 40, fill: "url(#mgFoeCas)" }),
      H("circle", { key: "g1", cx: 37, cy: 42, r: 11, fill: "#eaf4ff", stroke: "#3a4557", strokeWidth: "3" }),
      H("circle", { key: "g2", cx: 63, cy: 42, r: 11, fill: "#eaf4ff", stroke: "#3a4557", strokeWidth: "3" }),
      H("path", { key: "br", d: "M48 42 h4", stroke: "#3a4557", strokeWidth: "3" }),
      H("circle", { key: "p1", cx: 37, cy: 42, r: 3.5, fill: "#22303f" }),
      H("circle", { key: "p2", cx: 63, cy: 42, r: 3.5, fill: "#22303f" }),
      // Bigote enorme, la seña del personaje
      H("path", { key: "m", d: "M18 62 Q34 54 50 64 Q66 54 82 62 Q66 78 50 70 Q34 78 18 62 Z", fill: "#c4531f" }),
    );

  if ("tricalavera" === id) {
    let calavera = (cx, cy, r, k) =>
      H(
        "g",
        { key: k },
        H("circle", { cx: cx, cy: cy, r: r, fill: "#e9e4d4" }),
        H("circle", { cx: cx - r * 0.36, cy: cy - r * 0.1, r: r * 0.24, fill: "#1b1a17" }),
        H("circle", { cx: cx + r * 0.36, cy: cy - r * 0.1, r: r * 0.24, fill: "#1b1a17" }),
        H("rect", { x: cx - r * 0.3, y: cy + r * 0.42, width: r * 0.6, height: r * 0.3, rx: 1.5, fill: "#1b1a17" }),
      );
    return lienzo(
      H("path", { key: "r", d: "M50 62 v30 M36 72 h28 M38 84 h24", stroke: "#4a4636", strokeWidth: "6", strokeLinecap: "round" }),
      calavera(50, 34, 20, "c1"),
      calavera(20, 50, 14, "c2"),
      calavera(80, 50, 14, "c3"),
    );
  }

  if ("chispa" === id)
    return lienzo(
      H("defs", { key: "d" }, grad("mgFoeChi", [["0%", "#2f2836"], ["100%", "#100d15"]])),
      H("path", { key: "c", d: "M22 96 Q24 56 40 44 L60 44 Q76 56 78 96 Z", fill: "url(#mgFoeChi)" }),
      // Capucha con la cara en sombra: no hace falta cara
      H("path", { key: "h", d: "M50 8 Q78 16 76 46 Q64 40 50 40 Q36 40 24 46 Q22 16 50 8 Z", fill: "#241e2c" }),
      H("path", { key: "f", d: "M34 40 Q50 34 66 40 Q58 56 50 58 Q42 56 34 40 Z", fill: "#0a080d" }),
      H("circle", { key: "e1", cx: 43, cy: 45, r: 2.8, fill: "#ff3b30" }),
      H("circle", { key: "e2", cx: 57, cy: 45, r: 2.8, fill: "#ff3b30" }),
      // Sable inestable, con chispas
      H("path", { key: "s", d: "M84 88 L92 30", stroke: "#ff4436", strokeWidth: "7", strokeLinecap: "round" }),
      H("path", { key: "s2", d: "M84 60 l10 -6 M86 46 l-9 -5", stroke: "#ff8a5c", strokeWidth: "3.4", strokeLinecap: "round" }),
    );

  if ("emperador" === id)
    return lienzo(
      H("defs", { key: "d" }, grad("mgFoeEmp", [["0%", "#6a6f7d"], ["100%", "#23262e"]])),
      H("path", { key: "c", d: "M20 94 Q24 58 40 48 L60 48 Q76 58 80 94 Z", fill: "#191c22" }),
      H("path", { key: "h", d: "M50 16 Q76 22 74 48 Q62 44 50 44 Q38 44 26 48 Q24 22 50 16 Z", fill: "url(#mgFoeEmp)" }),
      H("path", { key: "f", d: "M34 44 Q50 38 66 44 Q58 60 50 62 Q42 60 34 44 Z", fill: "#0e1014" }),
      H("circle", { key: "e1", cx: 43, cy: 48, r: 2.8, fill: "#ffd447" }),
      H("circle", { key: "e2", cx: 57, cy: 48, r: 2.8, fill: "#ffd447" }),
      // Corona de hierro
      H("path", { key: "cr", d: "M26 18 L32 4 L40 14 L50 0 L60 14 L68 4 L74 18 Z", fill: "#b9963f" }),
      H("circle", { key: "j", cx: 50, cy: 12, r: 3.6, fill: "#e04a5f" }),
    );

  if ("tiempo" === id)
    return lienzo(
      H("defs", { key: "d" }, grad("mgFoeTie", [["0%", "#8fd8ff"], ["100%", "#2b5f8f"]])),
      H("path", { key: "c", d: "M20 96 Q24 60 38 50 L62 50 Q76 60 80 96 Z", fill: "#1d2b3d" }),
      // Cabeza de reloj de arena: el arquetipo en una sola forma
      H("path", { key: "h", d: "M28 8 h44 L52 44 L72 80 h-44 L48 44 Z", fill: "url(#mgFoeTie)" }),
      H("path", { key: "s", d: "M34 14 h32 L50 40 Z", fill: "#ffe08a" }),
      H("path", { key: "s2", d: "M36 74 h28 L50 56 Z", fill: "#ffe08a" }),
      H("circle", { key: "g", cx: 50, cy: 44, r: 3.4, fill: "#fff" }),
      H("path", { key: "t1", d: "M28 8 h44 M28 80 h44", stroke: "#cfe8ff", strokeWidth: "5", strokeLinecap: "round" }),
    );

  if ("sabio" === id)
    return lienzo(
      H("defs", { key: "d" }, grad("mgFoeSab", [["0%", "#6b5cc4"], ["100%", "#2a2160"]])),
      H("path", { key: "hat", d: "M50 0 L82 44 H18 Z", fill: "url(#mgFoeSab)" }),
      H("path", { key: "st", d: "M50 14 l3 6 6 3 -6 3 -3 6 -3 -6 -6 -3 6 -3 Z", fill: "#ffe08a" }),
      H("circle", { key: "s1", cx: 34, cy: 34, r: 2.4, fill: "#ffe08a" }),
      H("circle", { key: "s2", cx: 64, cy: 30, r: 2, fill: "#ffe08a" }),
      H("circle", { key: "f", cx: 50, cy: 54, r: 15, fill: "#e8c9a8" }),
      H("circle", { key: "e1", cx: 44, cy: 52, r: 2.4, fill: "#2a2160" }),
      H("circle", { key: "e2", cx: 56, cy: 52, r: 2.4, fill: "#2a2160" }),
      // Barba larga: lo que lo hace "sabio" de un vistazo
      H("path", { key: "b", d: "M35 58 Q38 96 50 98 Q62 96 65 58 Q50 70 35 58 Z", fill: "#eef2f8" }),
    );

  return null;
}
// Cara de un nivel: retrato del jefe si lo tiene, y su emoji si no.
function mgLevelFace(lvl) {
  return (lvl && lvl.foe && mgFoeArt(lvl.foe)) || (lvl ? lvl.emoji : "");
}

function mgAmbArt(kind) {
  let H = MG_H,
    lienzo = (vb, ...hijos) =>
      H(
        "svg",
        {
          viewBox: vb,
          width: "1em",
          height: "1em",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          style: { display: "block", overflow: "visible" },
        },
        ...hijos,
      ),
    grad = (id, paradas, vert = !0) =>
      H(
        "linearGradient",
        { id: id, x1: "0", y1: "0", x2: vert ? "0" : "1", y2: vert ? "1" : "0" },
        ...paradas.map((s, i) =>
          H("stop", { key: i, offset: s[0], stopColor: s[1], stopOpacity: s[2] }),
        ),
      );

  if ("cloud1" === kind || "cloud2" === kind) {
    let dos = "cloud2" === kind,
      g = "mgAmbNube" + (dos ? "B" : "A");
    return lienzo(
      "0 0 108 72",
      H("defs", { key: "d" }, grad(g, [["0%", "#ffffff"], ["62%", "#f2f7ff"], ["100%", "#c9daf2"]])),
      H(
        "g",
        { key: "g", fill: `url(#${g})` },
        H("ellipse", { cx: dos ? 30 : 33, cy: 44, rx: 19, ry: 17 }),
        H("ellipse", { cx: 54, cy: 34, rx: 23, ry: 21 }),
        H("ellipse", { cx: dos ? 80 : 77, cy: 45, rx: 17, ry: 15 }),
        H("rect", { x: 13, y: 42, width: 82, height: 20, rx: 10 }),
      ),
      // Panza sombreada: da volumen sin necesidad de contorno
      H("path", {
        key: "s",
        d: "M22 58 Q40 52 56 56 Q72 60 88 55",
        stroke: "#aec4e2",
        strokeWidth: "2.4",
        strokeLinecap: "round",
        opacity: "0.55",
      }),
    );
  }

  if ("balloon" === kind)
    return lienzo(
      "0 0 64 104",
      H(
        "defs",
        { key: "d" },
        grad("mgAmbGlobo", [["0%", "#ff8fa8"], ["55%", "#f0517a"], ["100%", "#b32b52"]]),
      ),
      // Cuerpo en gota: círculo que se cierra en punta hacia el nudo
      H("path", {
        key: "b",
        d: "M32 4 C48 4 60 17 60 33 C60 50 45 62 34 70 L32 73 L30 70 C19 62 4 50 4 33 C4 17 16 4 32 4 Z",
        fill: "url(#mgAmbGlobo)",
      }),
      H("ellipse", { key: "h", cx: 22, cy: 24, rx: 6, ry: 9, fill: "#fff", opacity: "0.45", transform: "rotate(-20 22 24)" }),
      H("path", { key: "k", d: "M28 72 L36 72 L32 78 Z", fill: "#b32b52" }),
      H("path", { key: "c", d: "M32 78 Q38 85 30 90 Q24 95 32 100", stroke: "#8a6a4f", strokeWidth: "2", strokeLinecap: "round" }),
      // Canastita: es lo que lo separa de un globo de fiesta
      H("path", { key: "n", d: "M23 99 h18 l-2 8 a3 3 0 0 1 -3 2 h-8 a3 3 0 0 1 -3 -2 Z", fill: "#c98b4f" }),
    );

  if ("butterfly" === kind)
    return lienzo(
      "0 0 96 84",
      H(
        "defs",
        { key: "d" },
        grad("mgAmbMari", [["0%", "#ffcf5c"], ["100%", "#ef7d3a"]]),
        grad("mgAmbMariB", [["0%", "#f0975a"], ["100%", "#c4562b"]]),
      ),
      /* Alas de elipses rotadas y no de beziers: dibujadas a mano salían en
         punta y el conjunto se leía como un moño, no como una mariposa. */
      H("ellipse", { key: "a1", cx: 30, cy: 30, rx: 21, ry: 16, fill: "url(#mgAmbMari)", transform: "rotate(-28 30 30)" }),
      H("ellipse", { key: "a2", cx: 66, cy: 30, rx: 21, ry: 16, fill: "url(#mgAmbMari)", transform: "rotate(28 66 30)" }),
      H("ellipse", { key: "a3", cx: 34, cy: 58, rx: 16, ry: 13, fill: "url(#mgAmbMariB)", transform: "rotate(26 34 58)" }),
      H("ellipse", { key: "a4", cx: 62, cy: 58, rx: 16, ry: 13, fill: "url(#mgAmbMariB)", transform: "rotate(-26 62 58)" }),
      // Lunares en las alas
      H("circle", { key: "p1", cx: 26, cy: 26, r: 4.5, fill: "#fff6d8", opacity: "0.85" }),
      H("circle", { key: "p2", cx: 70, cy: 26, r: 4.5, fill: "#fff6d8", opacity: "0.85" }),
      H("circle", { key: "p3", cx: 32, cy: 60, r: 3, fill: "#fff6d8", opacity: "0.6" }),
      H("circle", { key: "p4", cx: 64, cy: 60, r: 3, fill: "#fff6d8", opacity: "0.6" }),
      H("rect", { key: "b", x: 44, y: 22, width: 8, height: 48, rx: 4, fill: "#4a3222" }),
      H("circle", { key: "hd", cx: 48, cy: 20, r: 6, fill: "#4a3222" }),
      H("path", { key: "an", d: "M45 16 Q39 6 32 3 M51 16 Q57 6 64 3", stroke: "#4a3222", strokeWidth: "2.2", strokeLinecap: "round" }),
      H("circle", { key: "a5", cx: 32, cy: 3, r: 2.4, fill: "#4a3222" }),
      H("circle", { key: "a6", cx: 64, cy: 3, r: 2.4, fill: "#4a3222" }),
    );

  if ("bird" === kind)
    return lienzo(
      "0 0 96 64",
      H("defs", { key: "d" }, grad("mgAmbAve", [["0%", "#7fd4f5"], ["100%", "#3a86c8"]])),
      /* Pajarito de perfil: cuerpo, cabeza, pico y ala. La versión anterior
         era una silueta de golondrina que se leía como un avión. */
      H("path", { key: "t", d: "M26 32 L4 22 L9 34 L4 46 Z", fill: "#2f6ea8" }),
      H("ellipse", { key: "b", cx: 44, cy: 34, rx: 23, ry: 16, fill: "url(#mgAmbAve)" }),
      H("circle", { key: "h", cx: 68, cy: 23, r: 12, fill: "url(#mgAmbAve)" }),
      H("ellipse", { key: "w", cx: 42, cy: 33, rx: 14, ry: 8.5, fill: "#cfeefc", opacity: "0.95", transform: "rotate(-18 42 33)" }),
      H("circle", { key: "e", cx: 72, cy: 20, r: 2.4, fill: "#22364a" }),
      H("path", { key: "k", d: "M79 22 L93 26 L79 30 Z", fill: "#f5a623" }),
    );

  if ("rainbow" === kind) {
    let colores = ["#ff6b6b", "#ffa94d", "#ffd43b", "#69db7c", "#4dabf7", "#9775fa"];
    return lienzo(
      "0 0 100 60",
      ...colores.map((c, i) =>
        H("path", {
          key: i,
          d: `M8 56 A ${42 - i * 6} ${42 - i * 6} 0 0 1 ${92 - i * 0} 56`.replace(
            "M8 56",
            `M${8 + i * 6} 56`,
          ),
          stroke: c,
          strokeWidth: "5.5",
          strokeLinecap: "round",
          opacity: "0.92",
        }),
      ),
    );
  }

  if ("planet1" === kind)
    return lienzo(
      "0 0 104 80",
      H(
        "defs",
        { key: "d" },
        grad("mgAmbPl1", [["0%", "#ffd98a"], ["55%", "#e8a13f"], ["100%", "#a35f1e"]]),
      ),
      // Anillo: mitad de atrás, planeta, y mitad de delante encima
      H("ellipse", { key: "r1", cx: 52, cy: 40, rx: 48, ry: 15, stroke: "#f2d6a8", strokeWidth: "4", opacity: "0.55" }),
      H("circle", { key: "p", cx: 52, cy: 38, r: 26, fill: "url(#mgAmbPl1)" }),
      H("path", { key: "r2", d: "M4 40 A 48 15 0 0 0 100 40", stroke: "#fbe9c8", strokeWidth: "4", strokeLinecap: "round", opacity: "0.9" }),
      H("ellipse", { key: "b1", cx: 46, cy: 30, rx: 14, ry: 4, fill: "#fff2d0", opacity: "0.35" }),
    );

  if ("planet2" === kind)
    return lienzo(
      "0 0 80 80",
      H(
        "defs",
        { key: "d" },
        grad("mgAmbPl2", [["0%", "#8fd3ff"], ["60%", "#3f86c9"], ["100%", "#1d4f7d"]]),
      ),
      H("circle", { key: "p", cx: 40, cy: 40, r: 34, fill: "url(#mgAmbPl2)" }),
      // Continentes: manchas, no un mapa real
      H("path", { key: "c1", d: "M18 34 Q28 24 40 30 Q34 40 22 42 Z", fill: "#63c07a" }),
      H("path", { key: "c2", d: "M44 48 Q58 42 66 50 Q56 62 44 56 Z", fill: "#63c07a" }),
      H("circle", { key: "h", cx: 28, cy: 24, r: 9, fill: "#fff", opacity: "0.25" }),
    );

  if ("moon" === kind)
    return lienzo(
      "0 0 72 72",
      H("defs", { key: "d" }, grad("mgAmbLuna", [["0%", "#fff7d6"], ["100%", "#e8cf83"]])),
      /* Creciente como dos círculos con regla evenodd: el segundo recorta al
         primero. Hacerlo con dos arcos encadenados daba una forma casi vacía. */
      H("path", {
        key: "m",
        d: "M36 36 m-30 0 a30 30 0 1 0 60 0 a30 30 0 1 0 -60 0 M52 30 m-25 0 a25 25 0 1 0 50 0 a25 25 0 1 0 -50 0",
        fillRule: "evenodd",
        fill: "url(#mgAmbLuna)",
      }),
      H("circle", { key: "k1", cx: 20, cy: 30, r: 4, fill: "#d9bd6a", opacity: "0.55" }),
      H("circle", { key: "k2", cx: 17, cy: 46, r: 2.8, fill: "#d9bd6a", opacity: "0.45" }),
    );

  if ("spark" === kind)
    return lienzo(
      "0 0 64 64",
      H("path", { key: "s1", d: "M32 2 L38 26 L62 32 L38 38 L32 62 L26 38 L2 32 L26 26 Z", fill: "#fff3b0" }),
      H("path", { key: "s2", d: "M32 14 L35 29 L50 32 L35 35 L32 50 L29 35 L14 32 L29 29 Z", fill: "#fff" }),
      H("circle", { key: "d1", cx: 54, cy: 12, r: 3, fill: "#fff3b0", opacity: "0.85" }),
      H("circle", { key: "d2", cx: 12, cy: 50, r: 2.2, fill: "#fff3b0", opacity: "0.7" }),
    );

  if ("comet" === kind)
    return lienzo(
      "0 0 112 56",
      H("defs", { key: "d" }, grad("mgAmbCola", [["0%", "#7fd4f5", "0.15"], ["100%", "#dff4fd", "1"]], !1)),
      H("path", { key: "t", d: "M0 28 L72 13 L72 43 Z", fill: "url(#mgAmbCola)" }),
      // Mechones que dan sensación de velocidad
      H("path", { key: "t2", d: "M12 22 L60 16 M14 36 L60 40", stroke: "#bfe9fb", strokeWidth: "2", strokeLinecap: "round", opacity: "0.5" }),
      H("circle", { key: "h", cx: 84, cy: 28, r: 18, fill: "#fff6d8" }),
      H("circle", { key: "h2", cx: 89, cy: 23, r: 8, fill: "#fff" }),
    );

  if ("ship" === kind)
    return lienzo(
      "0 0 104 60",
      H("defs", { key: "d" }, grad("mgAmbNave", [["0%", "#d8e4f2"], ["100%", "#8496ae"]])),
      // Platillo: cúpula, casco y luces
      H("ellipse", { key: "c", cx: 52, cy: 34, rx: 46, ry: 13, fill: "url(#mgAmbNave)" }),
      H("path", { key: "d2", d: "M28 30 A 24 22 0 0 1 76 30 Z", fill: "#9fe3ff", opacity: "0.9" }),
      H("path", { key: "d3", d: "M36 30 A 16 15 0 0 1 60 18", stroke: "#fff", strokeWidth: "2.5", strokeLinecap: "round", opacity: "0.7" }),
      ...[24, 40, 56, 72].map((x, i) =>
        H("circle", { key: "l" + i, cx: x, cy: 40, r: 3.2, fill: "#ffd447" }),
      ),
    );

  return null;
}

function mgShapeSVG(id, size = 44) {
  let f = MG_FIGURAS[id];
  return f
    ? MG_H(
        "svg",
        { width: size, height: size, viewBox: "0 0 48 48", "aria-hidden": "true", style: { display: "block", margin: "0 auto" } },
        MG_H(f[0], { ...f[1], stroke: "rgba(0,0,0,0.3)", strokeWidth: 2, strokeLinejoin: "round" }),
      )
    : id;
}
function eu(e, t) {
  let n = new Set([e]);
  for (; n.size < 3;) n.add(Z(1, Math.max(3, t)));
  return J(Array.from(n));
}
let ed = [
  ["🔵", "🔴"],
  ["⭐", "🌙"],
  ["🍎", "🍌"],
  ["🟩", "🟨"],
  ["🐟", "🐚"],
  ["🔵", "🔴", "🟡"],
  ["⭐", "🌙", "☀️"],
  ["🍓", "🍇", "🍊"],
];
function ef(e, t, n) {
  let a = ee(ec),
    r =
      "mix" === e ? ee(n && n.length ? n : ["contar", "sumar", "comparar"]) : e;
  if ("palitos" === r) {
    let e = Z(1, Math.max(3, t));
    return { kind: "palitos", n: e, choices: eu(e, Math.max(5, t)) };
  }
  if ("puntos" === r) {
    let e = Z(1, Math.max(3, t));
    return { kind: "puntos", n: e, choices: eu(e, 10) };
  }
  if ("restar" === r) {
    let e = Z(2, Math.max(3, t)),
      n = Z(1, e - 1);
    return {
      kind: "restar",
      obj: a,
      a: e,
      b: n,
      answer: e - n,
      choices: eu(e - n, t),
    };
  }
  if ("falta" === r) {
    let e = Z(1, Math.max(1, t - 3)),
      n = [e, e + 1, e + 2, e + 3],
      a = Z(1, 3),
      r = n[a];
    return (
      (n[a] = null),
      { kind: "falta", seq: n, answer: r, choices: eu(r, t) }
    );
  }
  if ("orden" === r)
    return {
      kind: "orden",
      numbers: J(
        Array.from({ length: Math.max(3, Math.min(6, t)) }, (e, t) => t + 1),
      ),
    };
  if ("figura" === r) {
    let e = J(Object.keys(MG_FIGURAS)).slice(0, 4);
    return { kind: "figura", target: ee(e), choices: J(e) };
  }
  if ("depar" === r) {
    let e = Z(2, Math.max(3, t));
    return {
      kind: "depar",
      pairs: e,
      obj: ee(["🧦", "👟", "🧤", "🥿"]),
      choices: eu(2 * e, Math.max(10, 2 * t)),
    };
  }
  if ("para5" === r) {
    let e = Z(0, 4);
    return { kind: "para5", filled: e, choices: eu(5 - e, 5) };
  }
  if ("patron" === r) {
    let e = ee(ed.filter((e) => e.length === (t >= 3 ? 3 : 2))),
      n = 2 === e.length ? 3 : 2,
      a = [];
    for (let t = 0; t < n; t++) for (let t of e) a.push(t);
    let r = e[a.length % e.length];
    a.push("?");
    let l = e.filter((e) => e !== r),
      s = [r, ...l];
    for (; s.length < 3;)
      s.push(ee(["🌈", "🍀", "🎈"].filter((e) => !s.includes(e))));
    return {
      kind: "patron",
      seq: a,
      answer: r,
      choices: s.sort(() => Math.random() - 0.5),
    };
  }
  if ("mini" === r) return { kind: "mini", game: ee(mgMinisAptos()).id };
  if ("vf" === r) {
    let e = Z(1, Math.max(3, Math.min(6, t))),
      n =
        Math.random() < 0.5
          ? e
          : Math.max(1, e + (Math.random() < 0.5 ? -1 : 1) * Z(1, 2));
    return { kind: "vf", obj: a, n: e, claim: n, truth: n === e };
  }
  if ("tocar" === r) {
    let e = Z(3, Math.max(4, Math.min(8, t)));
    return { kind: "tocar", obj: a, n: e };
  }
  if ("contar" === r) {
    let e = Z(1, t);
    return { kind: "contar", obj: a, n: e, choices: eu(e, t) };
  }
  if ("sumar" === r) {
    let e = Z(1, Math.max(1, Math.min(5, t - 1))),
      n = Z(1, Math.max(1, t - e));
    return {
      kind: "sumar",
      obj: a,
      a: e,
      b: n,
      answer: e + n,
      choices: eu(e + n, t),
    };
  }
  let l = Z(1, t),
    s = Z(1, t),
    i = t <= 5 ? 2 : 1;
  for (; Math.abs(l - s) < i;) s = Z(1, t);
  return {
    kind: "comparar",
    obj: a,
    left: l,
    right: s,
    bigger: l > s ? "left" : "right",
  };
}
function em(e, t) {
  let n = Math.min(e, t),
    a = Math.max(e, t);
  return 0 === n
    ? "Cualquier número multiplicado por 0 siempre da 0."
    : 1 === n
      ? `Multiplicar por 1 da el mismo n\xfamero: ${a}.`
      : 2 === n
        ? `\xd72 es duplicar. ${a} + ${a} = ${2 * a}.`
        : 10 === n
          ? `\xd710 solo agrega un cero: ${a}0.`
          : 5 === n
            ? `Truco \xd75: la mitad de ${a}\xd710 (${10 * a}) es ${5 * a}.`
            : 9 === n
              ? `Truco \xd79: haz ${a}\xd710 y resta ${a}. ${10 * a} \u{2212} ${a} = ${9 * a}.`
              : 4 === n
                ? `\xd74 es duplicar dos veces: ${a} \u{2192} ${2 * a} \u{2192} ${4 * a}.`
                : 3 === n
                  ? `\xd73: duplica y suma una vez m\xe1s. ${2 * a} + ${a} = ${3 * a}.`
                  : e === t
                    ? `${e}\xd7${e} es un cuadrado. Memor\xedzalo: vale ${e * e}.`
                    : 6 === n
                      ? `Truco \xd76: haz ${a}\xd75 (${5 * a}) y suma ${a}. Da ${6 * a}.`
                      : 8 === n
                        ? `\xd78: duplica tres veces. ${a} \u{2192} ${2 * a} \u{2192} ${4 * a} \u{2192} ${8 * a}.`
                        : 7 === n
                          ? `\xd77: haz ${a}\xd75 (${5 * a}) y s\xfamale ${a}\xd72 (${2 * a}). Da ${7 * a}.`
                          : `Recuerda: ${e}\xd7${t} es lo mismo que ${t}\xd7${e}.`;
}
function ep(e, t, n) {
  return 2 === t
    ? `Dividir entre 2 es partir a la mitad: la mitad de ${e} es ${n}.`
    : 10 === t
      ? `Dividir entre 10 quita un cero: ${e} \xf7 10 = ${n}.`
      : 5 === t
        ? `Piensa en la tabla del 5: \xbf5 por cu\xe1nto da ${e}? Da ${n}.`
        : `Dividir es multiplicar al rev\xe9s: \xbf${t} por cu\xe1nto da ${e}? \xa1Es la tabla del ${t}! Da ${n}.`;
}
function eh(e) {
  if (!e || 0 === e.seen) return "new";
  let t = e.correct / e.seen;
  return e.seen >= 3 && t >= 0.8 && 0 === e.recentWrong
    ? "mastered"
    : "learning";
}
function eg(e, t) {
  let n = e.map((e) =>
      (function (e) {
        if (!e || 0 === e.seen) return 3;
        let t = 1 + (1 - e.correct / e.seen) * 5;
        return Math.max(0.4, (t += 2.5 * e.recentWrong));
      })(t[e]),
    ),
    a = Math.random() * n.reduce((e, t) => e + t, 0);
  for (let t = 0; t < e.length; t++) if ((a -= n[t]) <= 0) return e[t];
  return e[e.length - 1];
}
function eb(e, t, n) {
  let [a, r] = n || [1, 10],
    l = [];
  for (let t of e) for (let e = a; e <= r; e++) l.push(`${t}x${e}`);
  let s = eg(l, t),
    [i, o] = s.split("x").map(Number);
  return {
    kind: "multiplication",
    prompt: Math.random() > 0.5 ? `${o} \xd7 ${i}` : `${i} \xd7 ${o}`,
    answer: i * o,
    factKey: s,
    hint: em(i, o),
  };
}
function ev(e, t) {
  let n = [];
  for (let t of e) for (let e = 2; e <= 10; e++) n.push(`${t}x${e}`);
  let a = eg(n, t),
    [r, l] = a.split("x").map(Number),
    s = Math.random() > 0.5;
  return {
    kind: "factor",
    prompt: s ? `${r} \xd7 ? = ${r * l}` : `? \xd7 ${l} = ${r * l}`,
    answer: s ? l : r,
    factKey: a,
    hint: em(r, l),
  };
}
function ey(e, t) {
  let n = [];
  for (let t of e) for (let e = 1; e <= 10; e++) n.push(`${t}x${e}`);
  let a = eg(n, t),
    [r, l] = a.split("x").map(Number),
    s = r * l;
  return {
    kind: "division",
    prompt: `${s} \xf7 ${r}`,
    answer: l,
    factKey: a,
    hint: ep(s, r, l),
  };
}
/* Renumera los niveles del aventurero por posición (ids contiguos 1..N),
   tras insertar los niveles preparatorios del Mundo 1. */
en.forEach((l, i) => (l.id = i + 1));
/* Expone a la cáscara el mapa real mundo→ids (aventurero y menor), para que
   la celebración de "mundo completado" no dependa de un mapa hardcodeado que
   se desincroniza al agregar niveles. */
try {
  let mgAW = {},
    mgLW = {};
  en.forEach((l) => ((mgAW[l.world] = mgAW[l.world] || []).push(l.id)));
  eo.forEach((l) => ((mgLW[l.world] = mgLW[l.world] || []).push(l.id)));
  window.__mgAdvWorlds = mgAW;
  window.__mgLitWorlds = mgLW;
} catch (e) {}
/* Mapa id→nombre de la versión v2 (93 niveles), para migrar el progreso
   por NOMBRE cuando cambian los ids. No perder el avance de los niños. */
const MG_V2_NAMES = {
  1: "Sumas rápidas", 2: "Parejas del 10", 3: "Sumas de 2 dígitos", 4: "Par o impar",
  5: "Dobles y mitades", 6: "Jefe: Robotnik", 7: "Restas sencillas", 8: "Restas veloces",
  9: "Restas de 2 dígitos", 10: "Parejas del 20", 11: "Secuencias misteriosas", 12: "Jefe: Caballero resta",
  13: "Reglas del 1 y el 0", 14: "Salta de 2 en 2", 15: "Tabla del 2, primera parte", 16: "Tabla del 2 completa",
  17: "Salta de 5 en 5", 18: "Tabla del 5, primera parte", 19: "Tabla del 5 completa", 20: "Repaso: tablas 2 y 5",
  21: "Salta de 10 en 10", 22: "Tabla del 10", 23: "Jefe: Dragón Ender", 24: "Salta de 3 en 3",
  25: "Tabla del 3, primera parte", 26: "Tabla del 3 completa", 27: "Repaso: tablas 2 y 3", 28: "Salta de 4 en 4",
  29: "Tabla del 4, primera parte", 30: "Tabla del 4 completa", 31: "Repaso: tablas 3 y 4", 32: "Número escondido",
  33: "Jefe: Darth Vader", 34: "Salta de 6 en 6", 35: "Tabla del 6, primera parte", 36: "Tabla del 6 completa",
  37: "Repaso: tablas 4, 5 y 6", 38: "Salta de 7 en 7", 39: "Tabla del 7, primera parte", 40: "Tabla del 7 completa",
  41: "Repaso: tablas 6 y 7", 42: "Número escondido 2", 43: "Cadena mental", 44: "Jefe: Metal Sonic",
  45: "Salta de 8 en 8", 46: "Tabla del 8, primera parte", 47: "Tabla del 8 completa", 48: "Repaso: tablas 7 y 8",
  49: "Salta de 9 en 9", 50: "Tabla del 9, primera parte", 51: "Tabla del 9 completa", 52: "Repaso: tablas 8 y 9",
  53: "Número escondido 3", 54: "Cadena avanzada", 55: "Jefe: Dr. Eggman", 56: "Dividir entre 2",
  57: "Dividir entre 5", 58: "Repaso: dividir entre 2 y 5", 59: "Dividir entre 10", 60: "División sorpresa",
  61: "Multiplica y divide", 62: "Las tablas no se olvidan: 8 y 9", 63: "Jefe: Wither", 64: "Dividir entre 3",
  65: "Dividir entre 4", 66: "Repaso: dividir entre 3 y 4", 67: "Dividir entre 6", 68: "Dividir entre 7",
  69: "Repaso: dividir entre 6 y 7", 70: "Multiplica y divide 2", 71: "Las tablas no se olvidan: 6 y 7", 72: "Jefe: Kylo Ren",
  73: "Dividir entre 8", 74: "Dividir entre 9", 75: "Repaso: dividir entre 8 y 9", 76: "Gran división",
  77: "División sorpresa 2", 78: "Cadena con división", 79: "Todas las tablas juntas", 80: "Jefe: Emperador",
  81: "Multiplica y divide total", 82: "Secuencias misteriosas 2", 83: "Par o impar veloz", 84: "Número escondido 4",
  85: "Cadena maestra", 86: "Jefe supremo: Maestro del tiempo", 87: "Multiplica en grande", 88: "Por 10 y por 100",
  89: "División con resto", 90: "Fracciones de un número", 91: "Redondea a la decena", 92: "El reloj",
  93: "Jefe: Sabio galáctico",
};
/* Mapa id→nombre de la versión v3 (97 niveles), para migrar saves v3→v4. */
const MG_V3_NAMES = {
  1: "Sumas rápidas", 2: "Parejas del 10", 3: "Sumas con decenas", 4: "Llevando una",
  5: "Dos cifras sin llevar", 6: "Sumas de 2 dígitos", 7: "Par o impar", 8: "Dobles hasta 20",
  9: "Dobles y mitades", 10: "Jefe: Robotnik", 11: "Restas sencillas", 12: "Restas veloces",
  13: "Restas de 2 dígitos", 14: "Parejas del 20", 15: "Secuencias misteriosas", 16: "Jefe: Caballero resta",
  17: "Reglas del 1 y el 0", 18: "Salta de 2 en 2", 19: "Tabla del 2, primera parte", 20: "Tabla del 2 completa",
  21: "Salta de 5 en 5", 22: "Tabla del 5, primera parte", 23: "Tabla del 5 completa", 24: "Repaso: tablas 2 y 5",
  25: "Salta de 10 en 10", 26: "Tabla del 10", 27: "Jefe: Dragón Ender", 28: "Salta de 3 en 3",
  29: "Tabla del 3, primera parte", 30: "Tabla del 3 completa", 31: "Repaso: tablas 2 y 3", 32: "Salta de 4 en 4",
  33: "Tabla del 4, primera parte", 34: "Tabla del 4 completa", 35: "Repaso: tablas 3 y 4", 36: "Número escondido",
  37: "Jefe: Darth Vader", 38: "Salta de 6 en 6", 39: "Tabla del 6, primera parte", 40: "Tabla del 6 completa",
  41: "Repaso: tablas 4, 5 y 6", 42: "Salta de 7 en 7", 43: "Tabla del 7, primera parte", 44: "Tabla del 7 completa",
  45: "Repaso: tablas 6 y 7", 46: "Número escondido 2", 47: "Cadena mental", 48: "Jefe: Metal Sonic",
  49: "Salta de 8 en 8", 50: "Tabla del 8, primera parte", 51: "Tabla del 8 completa", 52: "Repaso: tablas 7 y 8",
  53: "Salta de 9 en 9", 54: "Tabla del 9, primera parte", 55: "Tabla del 9 completa", 56: "Repaso: tablas 8 y 9",
  57: "Número escondido 3", 58: "Cadena avanzada", 59: "Jefe: Dr. Eggman", 60: "Dividir entre 2",
  61: "Dividir entre 5", 62: "Repaso: dividir entre 2 y 5", 63: "Dividir entre 10", 64: "División sorpresa",
  65: "Multiplica y divide", 66: "Las tablas no se olvidan: 8 y 9", 67: "Jefe: Wither", 68: "Dividir entre 3",
  69: "Dividir entre 4", 70: "Repaso: dividir entre 3 y 4", 71: "Dividir entre 6", 72: "Dividir entre 7",
  73: "Repaso: dividir entre 6 y 7", 74: "Multiplica y divide 2", 75: "Las tablas no se olvidan: 6 y 7", 76: "Jefe: Kylo Ren",
  77: "Dividir entre 8", 78: "Dividir entre 9", 79: "Repaso: dividir entre 8 y 9", 80: "Gran división",
  81: "División sorpresa 2", 82: "Cadena con división", 83: "Todas las tablas juntas", 84: "Jefe: Emperador",
  85: "Multiplica y divide total", 86: "Secuencias misteriosas 2", 87: "Par o impar veloz", 88: "Número escondido 4",
  89: "Cadena maestra", 90: "Jefe supremo: Maestro del tiempo", 91: "Multiplica en grande", 92: "Por 10 y por 100",
  93: "División con resto", 94: "Fracciones de un número", 95: "Redondea a la decena", 96: "El reloj",
  97: "Jefe: Sabio galáctico",
};
/* Mapa id→nombre de la versión v4 (99 niveles), para migrar saves v4→v5. */
const MG_V4_NAMES = {
  1: "Sumas rápidas", 2: "Parejas del 10", 3: "Sumas con decenas", 4: "Llevando una",
  5: "Dos cifras sin llevar", 6: "Sumas de 2 dígitos", 7: "Par o impar", 8: "Dobles hasta 20",
  9: "Dobles y mitades", 10: "Jefe: Robotnik", 11: "Restas sencillas", 12: "Restas veloces",
  13: "Restas de 2 dígitos", 14: "Parejas del 20", 15: "Secuencias misteriosas", 16: "Jefe: Caballero resta",
  17: "Reglas del 1 y el 0", 18: "Salta de 2 en 2", 19: "Tabla del 2, primera parte", 20: "Tabla del 2 completa",
  21: "Salta de 5 en 5", 22: "Tabla del 5, primera parte", 23: "Tabla del 5 completa", 24: "Repaso: tablas 2 y 5",
  25: "Salta de 10 en 10", 26: "Tabla del 10", 27: "Jefe: Dragón Ender", 28: "Salta de 3 en 3",
  29: "Tabla del 3, primera parte", 30: "Tabla del 3 completa", 31: "Repaso: tablas 2 y 3", 32: "Salta de 4 en 4",
  33: "Tabla del 4, primera parte", 34: "Tabla del 4 completa", 35: "Repaso: tablas 3 y 4", 36: "Número escondido",
  37: "Jefe: Darth Vader", 38: "Salta de 6 en 6", 39: "Tabla del 6, primera parte", 40: "Tabla del 6 completa",
  41: "Repaso: tablas 4, 5 y 6", 42: "Salta de 7 en 7", 43: "Tabla del 7, primera parte", 44: "Tabla del 7 completa",
  45: "Repaso: tablas 6 y 7", 46: "Número escondido 2", 47: "Cadena mental", 48: "Jefe: Metal Sonic",
  49: "Salta de 8 en 8", 50: "Tabla del 8, primera parte", 51: "Tabla del 8 completa", 52: "Repaso: tablas 7 y 8",
  53: "Salta de 9 en 9", 54: "Tabla del 9, primera parte", 55: "Tabla del 9 completa", 56: "Repaso: tablas 8 y 9",
  57: "Número escondido 3", 58: "Cadena avanzada", 59: "Jefe: Dr. Eggman", 60: "Reparto en partes iguales",
  61: "Gran reparto", 62: "Dividir entre 2", 63: "Dividir entre 5", 64: "Repaso: dividir entre 2 y 5",
  65: "Dividir entre 10", 66: "División sorpresa", 67: "Multiplica y divide", 68: "Las tablas no se olvidan: 8 y 9",
  69: "Jefe: Wither", 70: "Dividir entre 3", 71: "Dividir entre 4", 72: "Repaso: dividir entre 3 y 4",
  73: "Dividir entre 6", 74: "Dividir entre 7", 75: "Repaso: dividir entre 6 y 7", 76: "Multiplica y divide 2",
  77: "Las tablas no se olvidan: 6 y 7", 78: "Jefe: Kylo Ren", 79: "Dividir entre 8", 80: "Dividir entre 9",
  81: "Repaso: dividir entre 8 y 9", 82: "Gran división", 83: "División sorpresa 2", 84: "Cadena con división",
  85: "Todas las tablas juntas", 86: "Jefe: Emperador", 87: "Multiplica y divide total", 88: "Secuencias misteriosas 2",
  89: "Par o impar veloz", 90: "Número escondido 4", 91: "Cadena maestra", 92: "Jefe supremo: Maestro del tiempo",
  93: "Multiplica en grande", 94: "Por 10 y por 100", 95: "División con resto", 96: "Fracciones de un número",
  97: "Redondea a la decena", 98: "El reloj", 99: "Jefe: Sabio galáctico",
};
/* Mapa id→nombre de la versión v5 (100 niveles), para migrar saves v5→v6. */
const MG_V5_NAMES = {
  1: "Cuenta y suma", 2: "Sumas rápidas", 3: "Parejas del 10", 4: "Sumas con decenas",
  5: "Llevando una", 6: "Dos cifras sin llevar", 7: "Sumas de 2 dígitos", 8: "Par o impar",
  9: "Dobles hasta 20", 10: "Dobles y mitades", 11: "Jefe: Robotnik", 12: "Restas sencillas",
  13: "Restas veloces", 14: "Restas de 2 dígitos", 15: "Parejas del 20", 16: "Secuencias misteriosas",
  17: "Jefe: Caballero resta", 18: "Reglas del 1 y el 0", 19: "Salta de 2 en 2", 20: "Tabla del 2, primera parte",
  21: "Tabla del 2 completa", 22: "Salta de 5 en 5", 23: "Tabla del 5, primera parte", 24: "Tabla del 5 completa",
  25: "Repaso: tablas 2 y 5", 26: "Salta de 10 en 10", 27: "Tabla del 10", 28: "Jefe: Dragón Ender",
  29: "Salta de 3 en 3", 30: "Tabla del 3, primera parte", 31: "Tabla del 3 completa", 32: "Repaso: tablas 2 y 3",
  33: "Salta de 4 en 4", 34: "Tabla del 4, primera parte", 35: "Tabla del 4 completa", 36: "Repaso: tablas 3 y 4",
  37: "Número escondido", 38: "Jefe: Darth Vader", 39: "Salta de 6 en 6", 40: "Tabla del 6, primera parte",
  41: "Tabla del 6 completa", 42: "Repaso: tablas 4, 5 y 6", 43: "Salta de 7 en 7", 44: "Tabla del 7, primera parte",
  45: "Tabla del 7 completa", 46: "Repaso: tablas 6 y 7", 47: "Número escondido 2", 48: "Cadena mental",
  49: "Jefe: Metal Sonic", 50: "Salta de 8 en 8", 51: "Tabla del 8, primera parte", 52: "Tabla del 8 completa",
  53: "Repaso: tablas 7 y 8", 54: "Salta de 9 en 9", 55: "Tabla del 9, primera parte", 56: "Tabla del 9 completa",
  57: "Repaso: tablas 8 y 9", 58: "Número escondido 3", 59: "Cadena avanzada", 60: "Jefe: Dr. Eggman",
  61: "Reparto en partes iguales", 62: "Gran reparto", 63: "Dividir entre 2", 64: "Dividir entre 5",
  65: "Repaso: dividir entre 2 y 5", 66: "Dividir entre 10", 67: "División sorpresa", 68: "Multiplica y divide",
  69: "Las tablas no se olvidan: 8 y 9", 70: "Jefe: Wither", 71: "Dividir entre 3", 72: "Dividir entre 4",
  73: "Repaso: dividir entre 3 y 4", 74: "Dividir entre 6", 75: "Dividir entre 7", 76: "Repaso: dividir entre 6 y 7",
  77: "Multiplica y divide 2", 78: "Las tablas no se olvidan: 6 y 7", 79: "Jefe: Kylo Ren", 80: "Dividir entre 8",
  81: "Dividir entre 9", 82: "Repaso: dividir entre 8 y 9", 83: "Gran división", 84: "División sorpresa 2",
  85: "Cadena con división", 86: "Todas las tablas juntas", 87: "Jefe: Emperador", 88: "Multiplica y divide total",
  89: "Secuencias misteriosas 2", 90: "Par o impar veloz", 91: "Número escondido 4", 92: "Cadena maestra",
  93: "Jefe supremo: Maestro del tiempo", 94: "Multiplica en grande", 95: "Por 10 y por 100", 96: "División con resto",
  97: "Fracciones de un número", 98: "Redondea a la decena", 99: "El reloj", 100: "Jefe: Sabio galáctico",
};
/* Mapa id→nombre de la versión v6 (103 niveles), para migrar saves v6→v7. */
const MG_V6_NAMES = {
  1: "Cuenta y suma", 2: "Sumas rápidas", 3: "Parejas del 10", 4: "Sumas con decenas",
  5: "Llevando una", 6: "Dos cifras sin llevar", 7: "Sumas de 2 dígitos", 8: "Par o impar",
  9: "Dobles hasta 20", 10: "Dobles y mitades", 11: "Jefe: Robotnik", 12: "Restas sencillas",
  13: "Restas veloces", 14: "Restas con decenas", 15: "Pide prestado", 16: "Dos cifras sin prestar",
  17: "Restas de 2 dígitos", 18: "Parejas del 20", 19: "Secuencias misteriosas", 20: "Jefe: Caballero resta",
  21: "Reglas del 1 y el 0", 22: "Salta de 2 en 2", 23: "Tabla del 2, primera parte", 24: "Tabla del 2 completa",
  25: "Salta de 5 en 5", 26: "Tabla del 5, primera parte", 27: "Tabla del 5 completa", 28: "Repaso: tablas 2 y 5",
  29: "Salta de 10 en 10", 30: "Tabla del 10", 31: "Jefe: Dragón Ender", 32: "Salta de 3 en 3",
  33: "Tabla del 3, primera parte", 34: "Tabla del 3 completa", 35: "Repaso: tablas 2 y 3", 36: "Salta de 4 en 4",
  37: "Tabla del 4, primera parte", 38: "Tabla del 4 completa", 39: "Repaso: tablas 3 y 4", 40: "Número escondido",
  41: "Jefe: Darth Vader", 42: "Salta de 6 en 6", 43: "Tabla del 6, primera parte", 44: "Tabla del 6 completa",
  45: "Repaso: tablas 4, 5 y 6", 46: "Salta de 7 en 7", 47: "Tabla del 7, primera parte", 48: "Tabla del 7 completa",
  49: "Repaso: tablas 6 y 7", 50: "Número escondido 2", 51: "Cadena mental", 52: "Jefe: Metal Sonic",
  53: "Salta de 8 en 8", 54: "Tabla del 8, primera parte", 55: "Tabla del 8 completa", 56: "Repaso: tablas 7 y 8",
  57: "Salta de 9 en 9", 58: "Tabla del 9, primera parte", 59: "Tabla del 9 completa", 60: "Repaso: tablas 8 y 9",
  61: "Número escondido 3", 62: "Cadena avanzada", 63: "Jefe: Dr. Eggman", 64: "Reparto en partes iguales",
  65: "Gran reparto", 66: "Dividir entre 2", 67: "Dividir entre 5", 68: "Repaso: dividir entre 2 y 5",
  69: "Dividir entre 10", 70: "División sorpresa", 71: "Multiplica y divide", 72: "Las tablas no se olvidan: 8 y 9",
  73: "Jefe: Wither", 74: "Dividir entre 3", 75: "Dividir entre 4", 76: "Repaso: dividir entre 3 y 4",
  77: "Dividir entre 6", 78: "Dividir entre 7", 79: "Repaso: dividir entre 6 y 7", 80: "Multiplica y divide 2",
  81: "Las tablas no se olvidan: 6 y 7", 82: "Jefe: Kylo Ren", 83: "Dividir entre 8", 84: "Dividir entre 9",
  85: "Repaso: dividir entre 8 y 9", 86: "Gran división", 87: "División sorpresa 2", 88: "Cadena con división",
  89: "Todas las tablas juntas", 90: "Jefe: Emperador", 91: "Multiplica y divide total", 92: "Secuencias misteriosas 2",
  93: "Par o impar veloz", 94: "Número escondido 4", 95: "Cadena maestra", 96: "Jefe supremo: Maestro del tiempo",
  97: "Multiplica en grande", 98: "Por 10 y por 100", 99: "División con resto", 100: "Fracciones de un número",
  101: "Redondea a la decena", 102: "El reloj", 103: "Jefe: Sabio galáctico",
};
/* Mapa id→nombre de la versión v7 (103 niveles), para migrar saves v7→v8. */
const MG_V7_NAMES = {
  1: "Cuenta y suma", 2: "Sumas rápidas", 3: "Parejas del 10", 4: "Sumas con decenas",
  5: "Llevando una", 6: "Dos cifras sin llevar", 7: "Sumas de 2 dígitos", 8: "Par o impar",
  9: "Dobles hasta 20", 10: "Dobles y mitades", 11: "Jefe: Robotnik", 12: "Restas sencillas",
  13: "Restas veloces", 14: "Restas con decenas", 15: "Dos cifras sin prestar", 16: "Pide prestado",
  17: "Restas de 2 dígitos", 18: "Parejas del 20", 19: "Secuencias misteriosas", 20: "Jefe: Caballero resta",
  21: "Reglas del 1 y el 0", 22: "Salta de 2 en 2", 23: "Tabla del 2, primera parte", 24: "Tabla del 2 completa",
  25: "Salta de 5 en 5", 26: "Tabla del 5, primera parte", 27: "Tabla del 5 completa", 28: "Repaso: tablas 2 y 5",
  29: "Salta de 10 en 10", 30: "Tabla del 10", 31: "Jefe: Dragón Ender", 32: "Salta de 3 en 3",
  33: "Tabla del 3, primera parte", 34: "Tabla del 3 completa", 35: "Repaso: tablas 2 y 3", 36: "Salta de 4 en 4",
  37: "Tabla del 4, primera parte", 38: "Tabla del 4 completa", 39: "Repaso: tablas 3 y 4", 40: "Número escondido",
  41: "Jefe: Darth Vader", 42: "Salta de 6 en 6", 43: "Tabla del 6, primera parte", 44: "Tabla del 6 completa",
  45: "Repaso: tablas 4, 5 y 6", 46: "Salta de 7 en 7", 47: "Tabla del 7, primera parte", 48: "Tabla del 7 completa",
  49: "Repaso: tablas 6 y 7", 50: "Número escondido 2", 51: "Cadena mental", 52: "Jefe: Metal Sonic",
  53: "Salta de 8 en 8", 54: "Tabla del 8, primera parte", 55: "Tabla del 8 completa", 56: "Repaso: tablas 7 y 8",
  57: "Salta de 9 en 9", 58: "Tabla del 9, primera parte", 59: "Tabla del 9 completa", 60: "Repaso: tablas 8 y 9",
  61: "Número escondido 3", 62: "Cadena avanzada", 63: "Jefe: Dr. Eggman", 64: "Reparto en partes iguales",
  65: "Gran reparto", 66: "Dividir entre 2", 67: "Dividir entre 5", 68: "Repaso: dividir entre 2 y 5",
  69: "Dividir entre 10", 70: "División sorpresa", 71: "Multiplica y divide", 72: "Las tablas no se olvidan: 8 y 9",
  73: "Jefe: Wither", 74: "Dividir entre 3", 75: "Dividir entre 4", 76: "Repaso: dividir entre 3 y 4",
  77: "Dividir entre 6", 78: "Dividir entre 7", 79: "Repaso: dividir entre 6 y 7", 80: "Multiplica y divide 2",
  81: "Las tablas no se olvidan: 6 y 7", 82: "Jefe: Kylo Ren", 83: "Dividir entre 8", 84: "Dividir entre 9",
  85: "Repaso: dividir entre 8 y 9", 86: "Gran división", 87: "División sorpresa 2", 88: "Cadena con división",
  89: "Todas las tablas juntas", 90: "Jefe: Emperador", 91: "Multiplica y divide total", 92: "Secuencias misteriosas 2",
  93: "Par o impar veloz", 94: "Número escondido 4", 95: "Cadena maestra", 96: "Jefe supremo: Maestro del tiempo",
  97: "Multiplica en grande", 98: "Por 10 y por 100", 99: "División con resto", 100: "Fracciones de un número",
  101: "Redondea a la decena", 102: "El reloj", 103: "Jefe: Sabio galáctico",
};
/* Mapa id→nombre de la versión v8 (105 niveles), para migrar saves v8→v9. */
const MG_V8_NAMES = {
  1: "Cuenta y suma", 2: "Sumas rápidas", 3: "Parejas del 10", 4: "Sumas con decenas",
  5: "Llevando una", 6: "Dos cifras sin llevar", 7: "Sumas de 2 dígitos", 8: "Par o impar",
  9: "Dobles hasta 20", 10: "Dobles y mitades", 11: "Jefe: Robotnik", 12: "Restas sencillas",
  13: "Restas veloces", 14: "Restas con decenas", 15: "Dos cifras sin prestar", 16: "Pide prestado",
  17: "Restas de 2 dígitos", 18: "Parejas del 20", 19: "Secuencias misteriosas", 20: "Jefe: Caballero resta",
  21: "Grupos iguales", 22: "Filas y columnas", 23: "Reglas del 1 y el 0", 24: "Salta de 2 en 2",
  25: "Tabla del 2, primera parte", 26: "Tabla del 2 completa", 27: "Salta de 5 en 5", 28: "Tabla del 5, primera parte",
  29: "Tabla del 5 completa", 30: "Repaso: tablas 2 y 5", 31: "Salta de 10 en 10", 32: "Tabla del 10",
  33: "Jefe: Dragón Ender", 34: "Salta de 3 en 3", 35: "Tabla del 3, primera parte", 36: "Tabla del 3 completa",
  37: "Repaso: tablas 2 y 3", 38: "Salta de 4 en 4", 39: "Tabla del 4, primera parte", 40: "Tabla del 4 completa",
  41: "Repaso: tablas 3 y 4", 42: "Número escondido", 43: "Jefe: Darth Vader", 44: "Salta de 6 en 6",
  45: "Tabla del 6, primera parte", 46: "Tabla del 6 completa", 47: "Repaso: tablas 4, 5 y 6", 48: "Salta de 7 en 7",
  49: "Tabla del 7, primera parte", 50: "Tabla del 7 completa", 51: "Repaso: tablas 6 y 7", 52: "Número escondido 2",
  53: "Cadena mental", 54: "Jefe: Metal Sonic", 55: "Salta de 8 en 8", 56: "Tabla del 8, primera parte",
  57: "Tabla del 8 completa", 58: "Repaso: tablas 7 y 8", 59: "Salta de 9 en 9", 60: "Tabla del 9, primera parte",
  61: "Tabla del 9 completa", 62: "Repaso: tablas 8 y 9", 63: "Número escondido 3", 64: "Cadena avanzada",
  65: "Jefe: Dr. Eggman", 66: "Reparto en partes iguales", 67: "Gran reparto", 68: "Dividir entre 2",
  69: "Dividir entre 5", 70: "Repaso: dividir entre 2 y 5", 71: "Dividir entre 10", 72: "División sorpresa",
  73: "Multiplica y divide", 74: "Las tablas no se olvidan: 8 y 9", 75: "Jefe: Wither", 76: "Dividir entre 3",
  77: "Dividir entre 4", 78: "Repaso: dividir entre 3 y 4", 79: "Dividir entre 6", 80: "Dividir entre 7",
  81: "Repaso: dividir entre 6 y 7", 82: "Multiplica y divide 2", 83: "Las tablas no se olvidan: 6 y 7", 84: "Jefe: Kylo Ren",
  85: "Dividir entre 8", 86: "Dividir entre 9", 87: "Repaso: dividir entre 8 y 9", 88: "Gran división",
  89: "División sorpresa 2", 90: "Cadena con división", 91: "Todas las tablas juntas", 92: "Jefe: Emperador",
  93: "Multiplica y divide total", 94: "Secuencias misteriosas 2", 95: "Par o impar veloz", 96: "Número escondido 4",
  97: "Cadena maestra", 98: "Jefe supremo: Maestro del tiempo", 99: "Multiplica en grande", 100: "Por 10 y por 100",
  101: "División con resto", 102: "Fracciones de un número", 103: "Redondea a la decena", 104: "El reloj",
  105: "Jefe: Sabio galáctico",
};
/* Generadores de la rampa suave de sumas (Mundo 1). */
function exDec() {
  let d = 10 * Z(1, 8),
    u = Z(0, 8),
    n = Z(1, 9 - u),
    t = d + u;
  return {
    kind: "addition",
    prompt: `${t} + ${n}`,
    answer: t + n,
    factKey: "add",
    hint: `Suma solo las unidades: ${u} + ${n} = ${u + n}. Las decenas no cambian, da ${t + n}.`,
  };
}
function exDecC() {
  let u = Z(2, 9),
    d = 10 * Z(1, 8),
    t = d + u,
    n = Z(11 - u, 9);
  return {
    kind: "addition",
    prompt: `${t} + ${n}`,
    answer: t + n,
    factKey: "add",
    hint: `${u} + ${n} se pasa de 10, así que llevas 1 a las decenas. Da ${t + n}.`,
  };
}
function exNC() {
  let da = Z(1, 4),
    db = Z(1, 9 - da),
    ua = Z(0, 8),
    ub = Z(0, 9 - ua),
    ta = 10 * da + ua,
    tb = 10 * db + ub;
  return {
    kind: "addition",
    prompt: `${ta} + ${tb}`,
    answer: ta + tb,
    factKey: "add",
    hint: `Suma decenas con decenas y unidades con unidades: ${ta} + ${tb} = ${ta + tb}.`,
  };
}
function exDobleFacil() {
  let e = Z(2, 10);
  return {
    kind: "double",
    prompt: `El doble de ${e}`,
    answer: 2 * e,
    factKey: "add",
    hint: `Doblar es sumar el número consigo mismo: ${e} + ${e} = ${2 * e}.`,
  };
}
function eReparto(big) {
  let gc = big ? [3, 4, 5] : [2, 3],
    M = gc[Math.floor(Math.random() * gc.length)],
    K = big ? Z(3, 8) : Z(2, 5),
    N = M * K,
    items = ["🍐", "🍎", "🍪", "⭐", "🦴", "🍬"],
    whos = ["👦", "👧", "🧺", "🐶", "🐰", "🧒"],
    it = items[Math.floor(Math.random() * items.length)],
    wh = whos[Math.floor(Math.random() * whos.length)];
  return {
    kind: "reparto",
    total: N,
    groups: M,
    item: it,
    who: wh,
    prompt: `Reparte ${N} ${it} en partes iguales entre ${M} ${wh}. ¿Cuántas para cada uno?`,
    answer: K,
    factKey: "add",
    hint: `Da una a cada uno y repite hasta que no queden. A cada uno le tocan ${K}.`,
  };
}
function eSumaObj() {
  let a = Z(2, 6),
    b = Z(2, 6),
    pairs = [["🍪", "🥛"], ["🍎", "🍏"], ["🐟", "🐠"], ["⭐", "🌟"], ["🚗", "🚕"], ["🐶", "🐱"], ["🎈", "🎁"]],
    p = pairs[Math.floor(Math.random() * pairs.length)];
  return {
    kind: "sumaobj",
    a: a,
    b: b,
    itemA: p[0],
    itemB: p[1],
    prompt: `¿Cuántos hay en total?`,
    answer: a + b,
    factKey: "add",
    hint: `Cuéntalos todos juntos: ${a} y ${b} son ${a + b}.`,
  };
}
function eArreglo(big) {
  let rows = big ? Z(3, 5) : Z(2, 4),
    cols = big ? Z(3, 6) : Z(2, 5),
    items = ["🍎", "⭐", "🐟", "🍪", "🌸", "🚗", "🐥"],
    it = items[Math.floor(Math.random() * items.length)];
  return {
    kind: "arreglo",
    rows: rows,
    cols: cols,
    item: it,
    prompt: `${rows} filas de ${cols}. ¿Cuántos hay en total?`,
    answer: rows * cols,
    factKey: "add",
    hint: `Son ${rows} grupos de ${cols}. Cuéntalos o suma ${cols} ${rows} veces: da ${rows * cols}.`,
  };
}
function eBalanza() {
  let a = Z(1, 9),
    b = Z(1, 9),
    S = a + b,
    c = Z(1, S - 1);
  return {
    kind: "balanza",
    a: a,
    b: b,
    known: c,
    prompt: `¿Qué número equilibra la balanza?`,
    answer: S - c,
    factKey: "add",
    hint: `Los dos platos deben pesar igual: ${a} + ${b} = ${S}, y ${c} + ? = ${S}, así que ? = ${S - c}.`,
  };
}
function ex(e) {
  let t = e ? Z(11, 89) : Z(2, 9),
    n = e ? Z(11, 89) : Z(2, 9);
  return {
    kind: "addition",
    prompt: `${t} + ${n}`,
    answer: t + n,
    factKey: "add",
    hint:
      (t % 10) + (n % 10) > 10
        ? `Completa la decena: lleva ${t} hasta el siguiente 10 y suma el resto. Da ${t + n}.`
        : `Suma primero las decenas y luego las unidades. ${t} + ${n} = ${t + n}.`,
  };
}
function ek(e) {
  let t = e ? Z(4, 12) : Z(2, 9),
    n = t,
    a = [],
    r = e ? 3 : 2;
  for (let t = 0; t < r; t++) {
    let t = ee(e ? ["add", "sub", "double", "half"] : ["add", "sub", "double"]);
    if (
      ("sub" === t && n < 3 && (t = "add"),
      "double" === t && n > 40 && (t = "add"),
      "half" === t && (n % 2 != 0 || n < 4) && (t = "add"),
      "add" === t)
    ) {
      let e = Z(2, 9);
      ((n += e), a.push({ label: `+ ${e}`, running: n }));
    } else if ("sub" === t) {
      let e = Z(1, n - 1);
      ((n -= e), a.push({ label: `\u{2212} ${e}`, running: n }));
    } else
      "double" === t
        ? ((n *= 2), a.push({ label: "× 2", running: n }))
        : ((n /= 2), a.push({ label: "÷ 2", running: n }));
  }
  return { kind: "chain", start: t, stages: a };
}
function ej(e) {
  let t = e ? Z(25, 99) : Z(5, 18),
    n = e ? Z(11, t - 10) : Z(1, Math.min(9, t - 1));
  return {
    kind: "subtraction",
    prompt: `${t} \u{2212} ${n}`,
    answer: t - n,
    factKey: "add",
    hint:
      n <= 3
        ? `Cuenta hacia atr\xe1s desde ${t}: ${n} pasos. Da ${t - n}.`
        : t % 10 < n % 10
          ? `Truco: baja ${t} hasta la decena y luego resta lo que falta. Da ${t - n}.`
          : `Resta primero las decenas y luego las unidades. ${t} \u{2212} ${n} = ${t - n}.`,
  };
}
function ejUno() {
  let a = Z(2, 9),
    b = Z(1, a);
  return {
    kind: "subtraction",
    prompt: `${a} \u{2212} ${b}`,
    answer: a - b,
    factKey: "add",
    hint: `Cuenta hacia atr\xe1s desde ${a}: ${b} pasos. Da ${a - b}.`,
  };
}
function ejDec() {
  let u = Z(1, 9),
    t = 10 * Z(1, 8) + u,
    n = Z(1, u);
  return {
    kind: "subtraction",
    prompt: `${t} \u{2212} ${n}`,
    answer: t - n,
    factKey: "add",
    hint: `Resta solo las unidades: ${u} \u{2212} ${n} = ${u - n}. Las decenas quedan igual, da ${t - n}.`,
  };
}
function ejDecC() {
  let u = Z(0, 8),
    t = 10 * Z(1, 8) + u,
    n = Z(u + 1, 9);
  return {
    kind: "subtraction",
    prompt: `${t} \u{2212} ${n}`,
    answer: t - n,
    factKey: "add",
    hint: `${u} es menor que ${n}, as\xed que pides prestada una decena. Da ${t - n}.`,
  };
}
function ejNC() {
  let da = Z(2, 8),
    db = Z(1, da),
    ua = Z(0, 9),
    ub = Z(0, ua),
    ta = 10 * da + ua,
    tb = 10 * db + ub;
  return {
    kind: "subtraction",
    prompt: `${ta} \u{2212} ${tb}`,
    answer: ta - tb,
    factKey: "add",
    hint: `Resta decenas con decenas y unidades con unidades: ${ta} \u{2212} ${tb} = ${ta - tb}.`,
  };
}
function ew(e) {
  let t = Z(1, e - 1);
  return {
    kind: "bond",
    prompt: Math.random() > 0.5 ? `${t} + ? = ${e}` : `? + ${t} = ${e}`,
    answer: e - t,
    factKey: "add",
    hint: `Piensa: \xbfcu\xe1nto le falta a ${t} para llegar a ${e}? Le falta ${e - t}.`,
  };
}
function eN() {
  let e = Z(3, 99);
  return {
    kind: "parity",
    prompt: `${e}`,
    answer: e % 2,
    factKey: "add",
    hint: `Mira solo la \xfaltima cifra: si termina en 0, 2, 4, 6 u 8 es par. ${e} es ${e % 2 == 0 ? "par" : "impar"}.`,
  };
}
function eS() {
  if (Math.random() > 0.5) {
    let e = Z(4, 25);
    return {
      kind: "double",
      prompt: `El doble de ${e}`,
      answer: 2 * e,
      factKey: "add",
      hint: `Doblar es sumar el n\xfamero consigo mismo: ${e} + ${e} = ${2 * e}.`,
    };
  }
  let e = Z(3, 20),
    t = 2 * e;
  return {
    kind: "double",
    prompt: `La mitad de ${t}`,
    answer: e,
    factKey: "add",
    hint: `La mitad es partir en dos grupos iguales: la mitad de ${t} es ${e}.`,
  };
}
function eC() {
  let e = Z(2, 9),
    t = e * Z(1, 4),
    n = [t, t + e, t + 2 * e, t + 3 * e],
    a = Z(1, 3),
    r = n[a];
  return {
    kind: "sequence",
    prompt: n.map((e, t) => (t === a ? "?" : String(e))).join(", "),
    answer: r,
    factKey: "add",
    hint: `La secuencia salta de ${e} en ${e}. El n\xfamero que falta es ${r}.`,
  };
}
function eE() {
  let e = Z(12, 19),
    t = Z(3, 6),
    n = 10 * t,
    a = (e - 10) * t;
  return {
    kind: "multiplication",
    prompt: `${e} \xd7 ${t}`,
    answer: e * t,
    factKey: "add",
    hint: `Descomp\xf3n: 10 \xd7 ${t} = ${n}, y ${e - 10} \xd7 ${t} = ${a}. Suma: ${n} + ${a} = ${e * t}.`,
  };
}
function e$() {
  let e = Z(3, 9),
    t = Z(2, 9),
    n = Z(1, e - 1),
    a = e * t + n;
  return {
    kind: "resto",
    prompt: `${a} \xf7 ${e} \xb7 \xbfcu\xe1nto sobra?`,
    answer: n,
    factKey: "add",
    hint: `${e} \xd7 ${t} = ${e * t}, y de ${e * t} a ${a} sobran ${n}.`,
  };
}
function ez() {
  let e = ee([2, 3, 4, 5]),
    t = Z(2, 6),
    n = e * t,
    a =
      2 === e
        ? "La mitad"
        : 3 === e
          ? "Un tercio"
          : 4 === e
            ? "Un cuarto"
            : "Un quinto";
  return {
    kind: "fracnum",
    prompt: `${a} de ${n}`,
    answer: t,
    factKey: "add",
    hint: `${a} de ${n} es repartir ${n} en ${e} grupos iguales: ${n} \xf7 ${e} = ${t}.`,
  };
}
function eT() {
  let e = Z(11, 94);
  e % 10 == 0 && (e += Z(1, 4));
  let t = 10 * Math.round(e / 10);
  return {
    kind: "redondeo",
    prompt: `Redondea ${e} a la decena`,
    answer: t,
    factKey: "add",
    hint: `Mira las unidades de ${e}: si son 5 o m\xe1s, sube; si no, baja. Queda ${t}.`,
  };
}
function eM() {
  let e = Z(1, 12);
  return {
    kind: "hora",
    prompt: "¿Qué hora marca el reloj?",
    answer: e,
    factKey: "add",
    clock: { h: e, m: 0 },
    hint: `La aguja corta se\xf1ala la hora: est\xe1 en el ${e}. Son las ${e} en punto.`,
  };
}
function mgTimeFor(q) {
  if (!q) return 25;
  if (q.kind === "chain") return 33;
  if (q.kind === "multiplication" || q.kind === "division") return 30;
  if (
    (q.kind === "addition" || q.kind === "subtraction") &&
    /[1-9]\d/.test(q.prompt || "")
  )
    return 30;
  return 25;
}
function mgWarmup() {
  return Math.random() < 0.5 ? ex(!1) : ejUno();
}
function e_(e, t, n) {
  switch (e.kind) {
    case "tabla":
      return eb(e.tables, t, e.factRange);
    case "sumas1":
      return ex(!1);
    case "sumas2d1d":
      return exDec();
    case "sumas2d1dC":
      return exDecC();
    case "sumas2dNC":
      return exNC();
    case "doblesFacil":
      return exDobleFacil();
    case "reparto":
      return eReparto(e.big);
    case "sumaobj":
      return eSumaObj();
    case "arreglo":
      return eArreglo(e.big);
    case "balanza":
      return eBalanza();
    case "salto":
      var a;
      let r, l, s, i;
      return (
        (r = (a = e.tables)[Math.floor(Math.random() * a.length)]),
        (s = [
          r * (l = Math.floor(6 * Math.random()) + 1),
          r * (l + 1),
          r * (l + 2),
        ]),
        (i = l + 3),
        {
          kind: "salto",
          prompt: `${s.join(", ")}, ?`,
          answer: r * i,
          factKey: `${r}x${i}`,
          hint: `Est\xe1s saltando de ${r} en ${r}: suma ${r} al \xfaltimo n\xfamero. ${s[2]} + ${r} = ${r * i}.`,
        }
      );
    case "restas1":
      return ej(!1);
    case "restas1d":
      return ejUno();
    case "restas2":
      return ej(n >= 3);
    case "restas2d1d":
      return ejDec();
    case "restas2d1dC":
      return ejDecC();
    case "restas2dNC":
      return ejNC();
    case "bonds10":
      return ew(10);
    case "bonds20":
      return ew(20);
    case "parimpar":
      return eN();
    case "dobles":
      return eS();
    case "secuencia":
      return eC();
    case "mult2d":
      return eE();
    case "pot10":
      if (Math.random() > 0.4) {
        let e = Z(3, 89);
        return {
          kind: "multiplication",
          prompt: `${e} \xd7 10`,
          answer: 10 * e,
          factKey: "add",
          hint: `Multiplicar por 10 es agregar un cero: ${e} \u{2192} ${10 * e}.`,
        };
      }
      let o = Z(2, 9);
      return {
        kind: "multiplication",
        prompt: `${o} \xd7 100`,
        answer: 100 * o,
        factKey: "add",
        hint: `Multiplicar por 100 es agregar dos ceros: ${o} \u{2192} ${100 * o}.`,
      };
    case "resto":
      return e$();
    case "fracnum":
      return ez();
    case "redondeo":
      return eT();
    case "hora":
      return eM();
    case "sumas2":
      return ex(n >= 3);
    case "factor":
      return ev(e.tables, t);
    case "div":
      return ey(e.tables, t);
    case "multidiv":
      return Math.random() > 0.5 ? eb(e.tables, t) : ey(e.tables, t);
    case "cadena":
      return ek(!!e.hardChain);
    case "boss": {
      if (e.world >= 10) {
        let n = Math.random();
        if (n < 0.18) return eE();
        if (n < 0.32) return e$();
        if (n < 0.46) return ez();
        if (n < 0.58) return eT();
        if (n < 0.68) return eM();
        if (n < 0.86) return eb(e.tables, t);
        return ey(e.tables, t);
      }
      if (9 === e.world) {
        let n = Math.random();
        if (n < 0.25) return eb(e.tables, t);
        if (n < 0.42) return ey(e.tables, t);
        if (n < 0.58) return ej(!0);
        if (n < 0.7) return ew(Math.random() > 0.5 ? 20 : 10);
        if (n < 0.82) return eS();
        if (n < 0.92) return eC();
        return ek(!0);
      }
      if (0 === e.world) {
        let e = Math.random();
        if (e < 0.45) return ex(e < 0.2);
        if (e < 0.65) return ew(10);
        if (e < 0.85) return eS();
        return eN();
      }
      if (1 === e.world) {
        let e = Math.random();
        if (e < 0.5) return ej(!(e < 0.2));
        if (e < 0.68) return ew(20);
        if (e < 0.85) return eC();
        return ex(!0);
      }
      let n = e.world >= 6,
        a = Math.random();
      if (n) {
        if (a < 0.35) return eb(e.tables, t);
        if (a < 0.65) return ey(e.tables, t);
        if (a < 0.85) return ev(e.tables, t);
        return ek(e.world >= 6);
      }
      if (a < 0.55) return eb(e.tables, t);
      if (a < 0.75) return ev(e.tables, t);
      if (a < 0.9) return ex(e.world >= 1);
      return ek(e.world >= 3);
    }
  }
}
function eP(e, t, n) {
  if ("add" === t) return e;
  let a = e[t] || { seen: 0, correct: 0, recentWrong: 0 };
  return {
    ...e,
    [t]: {
      seen: a.seen + 1,
      correct: a.correct + +!!n,
      recentWrong: n ? Math.max(0, a.recentWrong - 1) : a.recentWrong + 2,
      ts: Date.now(),
    },
  };
}
function eA(e, t, n, a) {
  let r = Math.random();
  return t && r < 0.28
    ? ey(e, a)
    : n && r < 0.45
      ? Math.random() > 0.4
        ? ej(!1)
        : ew(10)
      : r < 0.85
        ? eb(e, a)
        : ex(!1);
}
function eL(e) {
  let t = new Set([e]),
    n = [1, 2, 3, 10, e >= 20 ? 5 : 4],
    a = 0;
  for (; t.size < 4 && a < 40;) {
    a++;
    let r = n[Math.floor(Math.random() * n.length)],
      l = Math.random() > 0.5 ? e + r : e - r;
    l > 0 && t.add(l);
  }
  for (; t.size < 4;) t.add(e + t.size);
  return J(Array.from(t));
}
function eq(e) {
  if (0.5 > Math.random()) return e;
  let t = [-10, -2, -1, 1, 2, 10],
    n = 0;
  for (; n < 20;) {
    n++;
    let a = e + t[Math.floor(Math.random() * t.length)];
    if (a > 0 && a !== e) return a;
  }
  return e + 1;
}
function eR(e) {
  let t = e.correct / e.seen,
    n = e.ts ? (Date.now() - e.ts) / 864e5 : 30;
  return (
    (1 - t) * 5 + 2.5 * e.recentWrong + +(e.seen < 3) + 0.3 * Math.min(n, 21)
  );
}
function eD(e, t) {
  let n = Object.entries(e).filter(([e, t]) => "add" !== e && t.seen > 0);
  return 0 === n.length
    ? []
    : (n.sort((e, t) => eR(t[1]) - eR(e[1])), n.slice(0, t).map(([e]) => e));
}
function eF(e, t) {
  if (0 === e.length) return eb([2, 5, 10], t);
  let n = e[Math.floor(Math.random() * e.length)],
    [a, r] = n.split("x").map(Number),
    l = Math.random();
  if (l < 0.6)
    return {
      kind: "multiplication",
      prompt: Math.random() > 0.5 ? `${r} \xd7 ${a}` : `${a} \xd7 ${r}`,
      answer: a * r,
      factKey: n,
      hint: em(a, r),
    };
  if (l < 0.8 && a >= 2)
    return {
      kind: "division",
      prompt: `${a * r} \xf7 ${a}`,
      answer: r,
      factKey: n,
      hint: ep(a * r, a, r),
    };
  let s = Math.random() > 0.5;
  return {
    kind: "factor",
    prompt: s ? `${a} \xd7 ? = ${a * r}` : `? \xd7 ${r} = ${a * r}`,
    answer: s ? r : a,
    factKey: n,
    hint: em(a, r),
  };
}
let eO = [
  { id: "sumas", name: "Sumas", emoji: "➕" },
  { id: "restas", name: "Restas", emoji: "➖" },
  { id: "mult", name: "Multiplicación", emoji: "✖️" },
  { id: "div", name: "División", emoji: "➗" },
  { id: "mixto", name: "Mixto", emoji: "🎲" },
];
function eI(e, t, n) {
  let a =
    0 === t
      ? [2, 5, 10]
      : 1 === t
        ? [2, 3, 4, 5, 10]
        : [2, 3, 4, 5, 6, 7, 8, 9];
  switch ("mixto" === e ? ee(["sumas", "restas", "mult", "div"]) : e) {
    case "sumas":
      return ex(t >= 1 && Math.random() < (1 === t ? 0.5 : 1));
    case "restas":
      return ej(t >= 1 && Math.random() < (1 === t ? 0.5 : 1));
    case "mult":
      return eb(a, n);
    default:
      return ey(a, n);
  }
}
function eU() {
  return { date: eV(), path: 0, practice: 0, brain: 0, claimed: !1 };
}
let eB = {};
// La caché en memoria y el respaldo window.storage deben separar por
// perfil igual que el shim de localStorage; sin esto, al cambiar de
// perfil el nuevo "heredaba" datos del anterior (mascota, monedas...).
const MG_STORE_GLOBAL = { mg_profiles: 1, mg_active: 1, mg_sound: 1, mg_chars_unlocked: 1 };
function mgStoreKey(e) {
  if ("string" != typeof e || "mg_" !== e.slice(0, 3) || MG_STORE_GLOBAL[e]) return e;
  let t = null;
  try {
    t = window.__mgRaw && window.__mgRaw.get("mg_active");
  } catch {}
  return t ? "mg_" + t + "__" + e : e;
}
async function eQ(e, t) {
  let n = JSON.stringify(t),
    k = mgStoreKey(e);
  if (
    ((eB[k] = n),
    !(function (e, t) {
      try {
        return (window.localStorage.setItem(e, t), !0);
      } catch {
        return !1;
      }
    })(e, n))
  )
    try {
      window.storage && (await window.storage.set(k, n, !1));
    } catch {}
}
async function eH(e, t) {
  let n = (function (e) {
    try {
      return window.localStorage.getItem(e);
    } catch {
      return null;
    }
  })(e);
  if (n)
    try {
      return JSON.parse(n);
    } catch {}
  let k = mgStoreKey(e);
  try {
    if (window.storage) {
      let t = await window.storage.get(k, !1);
      if (t && t.value) return JSON.parse(t.value);
    }
  } catch {}
  if (eB[k])
    try {
      return JSON.parse(eB[k]);
    } catch {}
  return t;
}
let eW = [
  "mg_settings",
  "mg_gifts",
  "mg_facts",
  "mg_daily",
  "mg_little",
  "mg_little_path",
  "mg_path",
  "mg_coins",
  "mg_inv",
  "mg_reto",
  "mg_practice",
  "mg_brain",
  "mg_lbrain",
  "mg_outfit",
  "mg_pathver",
  "mg_goals",
];
function eV() {
  return new Date().toISOString().slice(0, 10);
}
function eK(e, t) {
  let n = eV();
  if (e.date === n)
    return { date: n, streak: e.streak, bestScore: Math.max(e.bestScore, t) };
  let a = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
  return {
    date: n,
    streak: e.date === a ? e.streak + 1 : 1,
    bestScore: Math.max(e.bestScore, t),
  };
}
function eG(e) {
  return e >= 0.95 ? 3 : e >= 0.8 ? 2 : 1;
}
let eY = Array.from({ length: 70 }, (e, t) => ({
  id: t,
  x: 100 * Math.random(),
  y: 100 * Math.random(),
  size: 3 * Math.random() + 1,
  dur: 18 * Math.random() + 8,
  delay: 6 * Math.random(),
}));
function eX() {
  return (0, s.jsx)("div", {
    className: "star-field",
    "aria-hidden": "true",
    children: eY.map((e) =>
      (0, s.jsx)(
        "div",
        {
          className: "star",
          style: {
            left: `${e.x}%`,
            top: `${e.y}%`,
            width: e.size,
            height: e.size,
            animationDuration: `${e.dur}s`,
            animationDelay: `-${e.delay}s`,
          },
        },
        e.id,
      ),
    ),
  });
}
/* ── Perfiles (Fase A) ────────────────────────────────────────────────
   Sistema de perfiles estilo Netflix con almacenamiento por niño.
   Reutiliza React (i) y jsx-runtime (s) del propio juego, y el shim de
   window.__mgRaw instalado en la cáscara para leer/escribir sin prefijo. */
const MG_H = (tag, props, ...kids) => {
  const p = props ? Object.assign({}, props) : {};
  let key;
  if (p.key != null) { key = p.key; delete p.key; }
  if (kids.length) p.children = kids.length === 1 ? kids[0] : kids;
  return (Array.isArray(p.children) ? s.jsxs : s.jsx)(tag, p, key);
};
/* ─── Iconos de interfaz (SVG geométrico, paleta del juego) ───────────────
   Reemplazan a los emojis en la UI para un look más pro y consistente.
   Cada icono es una función que devuelve los hijos del <svg> 0 0 24 24. */
const MG_ICONS = {
  coin: () => [
    MG_H("circle", { key: "a", cx: 12, cy: 12, r: 10, fill: "#ffcf3f", stroke: "#c98f16", strokeWidth: 1.5 }),
    MG_H("circle", { key: "b", cx: 12, cy: 12, r: 6.4, fill: "none", stroke: "#e0a81b", strokeWidth: 1.4 }),
    MG_H("path", { key: "c", d: "M12 8.4v7.2M10.2 10.1h3a1.6 1.6 0 010 3.2h-2.6", fill: "none", stroke: "#e0a81b", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
  ],
  star: (c) => [MG_H("path", { key: "a", d: "M12 2.2l2.85 6.03 6.6.83-4.85 4.55 1.25 6.52L12 17.4l-5.85 3.25 1.25-6.52L2.55 9.06l6.6-.83z", fill: c || "#ffcf3f", stroke: "#d99e14", strokeWidth: 1.2, strokeLinejoin: "round" })],
  trophy: () => [
    MG_H("path", { key: "a", d: "M7 4h10v4a5 5 0 01-10 0z", fill: "#ffcf3f", stroke: "#c98f16", strokeWidth: 1.3, strokeLinejoin: "round" }),
    MG_H("path", { key: "b", d: "M7 5H4v1.5A3.2 3.2 0 007 9.7M17 5h3v1.5A3.2 3.2 0 0117 9.7", fill: "none", stroke: "#c98f16", strokeWidth: 1.4, strokeLinecap: "round" }),
    MG_H("rect", { key: "c", x: 10, y: 12.5, width: 4, height: 3.2, fill: "#c98f16" }),
    MG_H("rect", { key: "d", x: 7.5, y: 18, width: 9, height: 2.4, rx: 1, fill: "#ffcf3f", stroke: "#c98f16", strokeWidth: 1.1 }),
    MG_H("rect", { key: "e", x: 9.5, y: 15.4, width: 5, height: 2.4, fill: "#e0a81b" }),
  ],
  fire: () => [
    MG_H("path", { key: "a", d: "M12 2.5c.6 3 3.7 4 3.7 8.2a3.7 3.7 0 01-7.4 0c0-1.4.6-2.3 1.4-3.2-.2 1.6.6 2.4 1.3 2.4.9 0 1.2-.9.6-2.2C11.4 6.4 12 4.4 12 2.5z", fill: "#ff8a2a", stroke: "#e0631a", strokeWidth: 1.1, strokeLinejoin: "round" }),
    MG_H("path", { key: "b", d: "M12 11c.9.7 1.4 1.6 1.4 2.6a1.9 1.9 0 01-3.8 0c0-.8.4-1.4 1-2 .1.9.5 1.2 1 1.2.6 0 .8-.5.4-1.8z", fill: "#ffd23f" }),
  ],
  shield: (c) => [
    MG_H("path", { key: "a", d: "M12 2.4l8 2.8v5.6c0 5-3.5 8.4-8 10.8-4.5-2.4-8-5.8-8-10.8V5.2z", fill: c || "#7fb4e6", stroke: "#3f6ea0", strokeWidth: 1.3, strokeLinejoin: "round" }),
    MG_H("path", { key: "b", d: "M8.5 11.8l2.6 2.5 4.4-4.6", fill: "none", stroke: "#fff", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" }),
  ],
  heart: (c) => [MG_H("path", { key: "a", d: "M12 20.7C5.5 15.6 3.5 12.2 3.5 8.9 3.5 6.4 5.4 4.6 7.7 4.6c1.6 0 3 .9 4.3 2.5 1.3-1.6 2.7-2.5 4.3-2.5 2.3 0 4.2 1.8 4.2 4.3 0 3.3-2 6.7-8.5 11.8z", fill: c || "#ff5a6a", stroke: "#c23947", strokeWidth: 1.1, strokeLinejoin: "round" })],
  heartEmpty: () => [MG_H("path", { key: "a", d: "M12 20.7C5.5 15.6 3.5 12.2 3.5 8.9 3.5 6.4 5.4 4.6 7.7 4.6c1.6 0 3 .9 4.3 2.5 1.3-1.6 2.7-2.5 4.3-2.5 2.3 0 4.2 1.8 4.2 4.3 0 3.3-2 6.7-8.5 11.8z", fill: "#3a3550", stroke: "#5a5478", strokeWidth: 1.3, strokeLinejoin: "round" })],
  bolt: () => [MG_H("path", { key: "a", d: "M13.5 2L5 13.2h5l-1.6 8.8L19 10.2h-5.2z", fill: "#ffd23f", stroke: "#e0a81b", strokeWidth: 1.1, strokeLinejoin: "round" })],
  bulb: () => [
    MG_H("path", { key: "a", d: "M12 3a6 6 0 00-3.6 10.8c.6.5 1 1.1 1.1 1.9h5c.1-.8.5-1.4 1.1-1.9A6 6 0 0012 3z", fill: "#ffe07a", stroke: "#d9a814", strokeWidth: 1.2, strokeLinejoin: "round" }),
    MG_H("rect", { key: "b", x: 9.5, y: 16.4, width: 5, height: 1.8, rx: .9, fill: "#c98f16" }),
    MG_H("rect", { key: "c", x: 10.2, y: 19, width: 3.6, height: 1.6, rx: .8, fill: "#c98f16" }),
  ],
  lens: () => [
    MG_H("circle", { key: "a", cx: 10.5, cy: 10.5, r: 6.2, fill: "#bfe3ff", stroke: "#3f6ea0", strokeWidth: 1.6 }),
    MG_H("circle", { key: "b", cx: 10.5, cy: 10.5, r: 3.4, fill: "#fff", opacity: .5 }),
    MG_H("path", { key: "c", d: "M15.3 15.3L21 21", stroke: "#3f6ea0", strokeWidth: 2.4, strokeLinecap: "round" }),
  ],
  target: () => [
    MG_H("circle", { key: "a", cx: 12, cy: 12, r: 9.5, fill: "#ff5a6a", stroke: "#c23947", strokeWidth: 1.2 }),
    MG_H("circle", { key: "b", cx: 12, cy: 12, r: 6, fill: "#fff" }),
    MG_H("circle", { key: "c", cx: 12, cy: 12, r: 3, fill: "#ff5a6a" }),
  ],
  brain: () => [MG_H("path", { key: "a", d: "M9 4a2.6 2.6 0 00-2.6 2.6A2.7 2.7 0 004 9.4a2.7 2.7 0 001 5.2v1.2A2.9 2.9 0 009 18.6V4zM15 4a2.6 2.6 0 012.6 2.6A2.7 2.7 0 0120 9.4a2.7 2.7 0 01-1 5.2v1.2A2.9 2.9 0 0115 18.6V4z", fill: "#ff9ec7", stroke: "#d96aa0", strokeWidth: 1.1, strokeLinejoin: "round" }), MG_H("path", { key: "b", d: "M12 4v14.6", stroke: "#d96aa0", strokeWidth: 1, strokeLinecap: "round" })],
  puzzle: () => [MG_H("path", { key: "a", d: "M10 3.5a2 2 0 014 0c0 .6.4 1 1 1h3v3c0 .6.4 1 1 1a2 2 0 010 4c-.6 0-1 .4-1 1v3h-3c-.6 0-1-.4-1-1a2 2 0 00-4 0c0 .6-.4 1-1 1H5v-3c0-.6-.4-1-1-1a2 2 0 010-4c.6 0 1-.4 1-1v-3h3c.6 0 1-.4 1-1z", fill: "#6ee089", stroke: "#3ca85c", strokeWidth: 1.2, strokeLinejoin: "round" })],
  book: () => [
    MG_H("path", { key: "a", d: "M12 5.5C10.4 4.3 8.3 3.8 5 4v13c3.3-.2 5.4.3 7 1.5V5.5z", fill: "#9ad9d0", stroke: "#3f8a80", strokeWidth: 1.2, strokeLinejoin: "round" }),
    MG_H("path", { key: "b", d: "M12 5.5C13.6 4.3 15.7 3.8 19 4v13c-3.3-.2-5.4.3-7 1.5V5.5z", fill: "#c3ece6", stroke: "#3f8a80", strokeWidth: 1.2, strokeLinejoin: "round" }),
  ],
  map: () => [
    MG_H("path", { key: "a", d: "M9 3.5L3.5 5.4v15.1L9 18.6l6 2 5.5-1.9V3.6L15 5.5l-6-2z", fill: "#7fd48a", stroke: "#3ca85c", strokeWidth: 1.2, strokeLinejoin: "round" }),
    MG_H("path", { key: "b", d: "M9 3.5v15.1M15 5.5v15", stroke: "#3ca85c", strokeWidth: 1.1, strokeDasharray: "1.6 1.8", strokeLinecap: "round" }),
  ],
  check: () => [MG_H("path", { key: "a", d: "M4.5 12.5l5 5 10-11", fill: "none", stroke: "#4ade80", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" })],
  retry: () => [MG_H("path", { key: "a", d: "M19 12a7 7 0 11-2.1-5M19 4v4h-4", fill: "none", stroke: "#b79bff", strokeWidth: 2.2, strokeLinecap: "round", strokeLinejoin: "round" })],
  lock: () => [
    MG_H("rect", { key: "a", x: 5, y: 10.5, width: 14, height: 10, rx: 2.2, fill: "#8b84b0", stroke: "#5a5478", strokeWidth: 1.3 }),
    MG_H("path", { key: "b", d: "M8 10.5V8a4 4 0 018 0v2.5", fill: "none", stroke: "#5a5478", strokeWidth: 1.8 }),
    MG_H("circle", { key: "c", cx: 12, cy: 15, r: 1.7, fill: "#3a3550" }),
  ],
  rocket: () => [
    MG_H("path", { key: "a", d: "M12 2c3 1.5 5 4.8 5 9 0 2-.6 3.6-1.3 5H8.3C7.6 14.6 7 13 7 11c0-4.2 2-7.5 5-9z", fill: "#e6ecf5", stroke: "#7a89a8", strokeWidth: 1.2, strokeLinejoin: "round" }),
    MG_H("circle", { key: "b", cx: 12, cy: 9.5, r: 2, fill: "#7fb4e6", stroke: "#3f6ea0", strokeWidth: 1 }),
    MG_H("path", { key: "c", d: "M8.3 16c-1.6.7-2.8 2-3 4 1.8 0 3-.5 3.7-1.4M15.7 16c1.6.7 2.8 2 3 4-1.8 0-3-.5-3.7-1.4", fill: "#ff8a2a", stroke: "#e0631a", strokeWidth: 1, strokeLinejoin: "round" }),
    MG_H("path", { key: "d", d: "M10 20.5c.4 1.2 1 2 2 2.5.9-.5 1.5-1.3 2-2.5z", fill: "#ffd23f" }),
  ],
  chest: () => [
    MG_H("path", { key: "a", d: "M4 9a3 3 0 013-3h10a3 3 0 013 3v1H4z", fill: "#c98f16", stroke: "#8a5f0e", strokeWidth: 1.2, strokeLinejoin: "round" }),
    MG_H("rect", { key: "b", x: 4, y: 10, width: 16, height: 9, rx: 1.4, fill: "#e0a81b", stroke: "#8a5f0e", strokeWidth: 1.2 }),
    MG_H("rect", { key: "c", x: 10.5, y: 12, width: 3, height: 5, rx: 1, fill: "#8a5f0e" }),
    MG_H("circle", { key: "d", cx: 12, cy: 14.3, r: 1, fill: "#ffe07a" }),
  ],
};
function mgIcon(name, size, color) {
  const kids = MG_ICONS[name];
  if (!kids) return null;
  return MG_H("svg", { width: size || 22, height: size || 22, viewBox: "0 0 24 24", className: "mg-ic mg-ic-" + name, "aria-hidden": "true" }, ...kids(color));
}
const MG_PROFILE_KEYS = ["mg_facts", "mg_daily", "mg_little", "mg_little_path", "mg_path", "mg_coins", "mg_inv", "mg_reto", "mg_practice", "mg_brain", "mg_lbrain", "mg_outfit", "mg_pathver", "mg_goals", "mg_worlds_celebrated", "mg_lessons", "mg_char", "mg_skill", "mg_gifts", "mg_settings"];
const MG_AVATARS = ["🦄", "🐯", "🦖", "🐸", "🦊", "🐼", "🐧", "🦁", "🐙", "🐨", "🦉", "🐢", "🐝", "🦋", "🐬", "🦕", "🚀", "🌟"];
const mgRaw = () => window.__mgRaw || { get: () => null, set: () => {}, remove: () => {} };
function mgNewId() { return "p" + Math.random().toString(36).slice(2, 8); }
function mgLoadProfiles() { try { return JSON.parse(mgRaw().get("mg_profiles")) || []; } catch (e) { return []; } }
function mgSaveProfiles(list) { mgRaw().set("mg_profiles", JSON.stringify(list)); }
function mgGetActive() { return mgRaw().get("mg_active"); }
function mgSetActive(id) { id ? mgRaw().set("mg_active", id) : mgRaw().remove("mg_active"); }
function mgRouteForAge(age) { return age <= 5 ? "pequeno" : "aventurero"; }
function mgLegacyHasProgress() {
  const a = mgRaw().get("mg_path"), b = mgRaw().get("mg_little_path");
  return (!!a && a.length > 2) || (!!b && b.length > 2);
}
function mgMigrateLegacyInto(id) {
  const raw = mgRaw();
  MG_PROFILE_KEYS.forEach((k) => {
    const v = raw.get(k);
    if (v != null && raw.get("mg_" + id + "__" + k) == null) raw.set("mg_" + id + "__" + k, v);
  });
}
function mgClearProfileData(id) {
  const raw = mgRaw();
  MG_PROFILE_KEYS.forEach((k) => raw.remove("mg_" + id + "__" + k));
}
/* Música de fondo suave y opcional (WebAudio). Progresión lenta en Do
   mayor, volumen bajo. Respeta el silencio general (g) y su propio flag. */
let mgMusicOn = !1,
  mgMusicTimer = null,
  mgMusicI = 0;
const MG_MUSIC = [
  [261.63, 329.63, 392, 329.63],
  [220, 261.63, 329.63, 261.63],
  [174.61, 261.63, 349.23, 261.63],
  [196, 293.66, 392, 293.66],
];
try {
  mgMusicOn = !!(JSON.parse((window.__mgRaw && window.__mgRaw.get("mg_music")) || "null") || {}).on;
} catch (e) {}
function mgMusicStart() {
  if (mgMusicTimer || !mgMusicOn) return;
  mgMusicTimer = setInterval(() => {
    if (g) return;
    let chord = MG_MUSIC[Math.floor(mgMusicI / 4) % MG_MUSIC.length];
    (b(chord[mgMusicI % 4], 0, 0.7, "sine", 0.035), mgMusicI++);
  }, 520);
}
function mgMusicStop() {
  (mgMusicTimer && clearInterval(mgMusicTimer), (mgMusicTimer = null));
}
function mgMusicToggle() {
  mgMusicOn = !mgMusicOn;
  try {
    window.__mgRaw && window.__mgRaw.set("mg_music", JSON.stringify({ on: mgMusicOn }));
  } catch (e) {}
  return (mgMusicOn ? mgMusicStart() : mgMusicStop(), mgMusicOn);
}
function MgMusicToggle() {
  const [on, setOn] = i.useState(mgMusicOn);
  return MG_H(
    "button",
    { className: "sound-toggle music-toggle", type: "button", onClick: () => setOn(mgMusicToggle()) },
    on ? "🎵" : "🔕",
  );
}
function MgProfileSelector({ profiles: e, soundOn: t, onToggleSound: n, onParents: a, onPick: r, onAdd: l }) {
  return MG_H("div", { className: "screen world-starwars" },
    s.jsx(eX, {}),
    MG_H("button", { className: "sound-toggle", onClick: n }, t ? "🔊" : "🔇"),
    s.jsx(MgMusicToggle, {}),
    MG_H("div", { className: "stack center" },
      MG_H("div", { className: "title-block" },
        MG_H("div", { className: "title-pixel" }, "🌌 Math"),
        MG_H("div", { className: "title-pixel accent" }, "Galaxy"),
        MG_H("div", { className: "subtitle" }, "¿Quién va a jugar?")),
      // char fijo en "turbo": sin esto, f() cae al mgChar global, que
      // puede haber quedado en la mascota del último perfil activo (p.
      // ej. el hermano jugó con Michi) — el saludo debe ser siempre de
      // Turbo aquí, antes de elegir perfil.
      s.jsx(f, { mood: "excited", text: "¡Guau! Soy Turbo. ¿Quién juega hoy?", size: 78, char: "turbo" }),
      MG_H("div", { className: "profile-row" },
        e.map((pf) => MG_H("button", { key: pf.id, className: "profile-card " + (pf.age <= 5 ? "little" : "big"), onClick: () => r(pf) },
          MG_H("span", { className: "profile-emoji" }, pf.emoji),
          MG_H("span", { className: "profile-name" }, pf.name),
          MG_H("span", { className: "profile-age" }, pf.age + " años"))),
        e.length < 4 ? MG_H("button", { key: "add", className: "profile-card add", onClick: l },
          MG_H("span", { className: "profile-emoji" }, "➕"),
          MG_H("span", { className: "profile-name" }, "Agregar")) : null),
      MG_H("button", { className: "parents-link", onClick: a }, "📊 Para papás")));
}
function MgProfileEditor({ initial: e, onSave: t, onCancel: n, onDelete: a }) {
  const [r, l] = i.useState(e ? e.name : "");
  const [o, c] = i.useState(e ? e.age : 6);
  const [u, d] = i.useState(e ? e.emoji : MG_AVATARS[0]);
  const canSave = r.trim().length > 0;
  return MG_H("div", { className: "screen world-starwars" },
    s.jsx(eX, {}),
    MG_H("div", { className: "stack center" },
      MG_H("div", { className: "title-block" },
        MG_H("div", { className: "title-pixel accent" }, e ? "Editar jugador" : "Nuevo jugador")),
      MG_H("div", { className: "profile-emoji-picker" },
        MG_AVATARS.map((em) => MG_H("button", { key: em, className: "emoji-opt " + (u === em ? "sel" : ""), onClick: () => d(em) }, em))),
      MG_H("input", { className: "profile-input", value: r, maxLength: 12, placeholder: "Nombre", onChange: (ev) => l(ev.target.value) }),
      MG_H("div", { className: "age-row" },
        [4, 5, 6, 7, 8, 9, 10].map((ag) => MG_H("button", { key: ag, className: "age-opt " + (o === ag ? "sel" : ""), onClick: () => c(ag) }, String(ag)))),
      MG_H("div", { className: "age-hint" }, mgRouteForAge(o) === "pequeno" ? "🧒 Ruta del pequeño explorador (calcomanías, sin monedas)" : "🧑‍🚀 Camino del aventurero (93 niveles, jefes)"),
      MG_H("div", { className: "editor-actions" },
        MG_H("button", { className: "btn-primary", disabled: !canSave, onClick: () => canSave && t({ name: r.trim(), age: o, emoji: u }) }, e ? "Guardar" : "¡Crear!"),
        MG_H("button", { className: "btn-ghost", onClick: n }, "Cancelar"),
        e && a ? MG_H("button", { className: "btn-danger", onClick: () => a(e) }, "🗑️ Borrar") : null)));
}
function MgHub({ kind: k, name: nm, coins: c, streak: st, onBack: bk, items: it }) {
  return MG_H("div", { className: "screen world-starwars hub-screen" },
    s.jsx(eX, {}),
    MG_H("div", { className: "hub-top" },
      MG_H("button", { className: "link-back", onClick: bk }, "◀\ufe0e"),
      MG_H("span", { className: "hub-name" }, (k === "little" ? "🧒 " : "🧑‍🚀 ") + (nm || "")),
      k === "big" ? MG_H("span", { className: "coin-pill" }, mgIcon("coin", 16), " " + c) : null,
      k === "big" ? MG_H("span", { className: "fire-pill" }, mgIcon("fire", 15), " " + st) : null),
    s.jsx(f, { mood: "excited", text: nm ? mgVoz() + " ¡Hola, " + nm + "! ¿Qué jugamos?" : "¿Qué jugamos hoy?", size: 64 }),
    MG_H("div", { className: "hub-grid" },
      it.map((item) =>
        MG_H("button", { key: item.title, className: "hub-card " + (item.cls || ""), onClick: item.onClick },
          MG_H("span", { className: "hub-card-emoji" }, item.icon ? mgIcon(item.icon, 40) : item.emoji),
          MG_H("span", { className: "hub-card-title" }, item.title),
          item.sub ? MG_H("span", { className: "hub-card-sub" }, item.sub) : null))));
}
function MgCharScreen({ charDone: dq, onBack: bk }) {
  const [selChar, setSelChar] = i.useState(mgChar);
  i.useEffect(() => {
    mgSyncCharUnlocks(dq);
  }, [dq]);
  return MG_H("div", { className: "screen world-starwars hub-screen" },
    s.jsx(eX, {}),
    MG_H("div", { className: "hub-top" },
      MG_H("button", { className: "link-back", onClick: bk }, "◀\ufe0e Volver")),
    s.jsx(f, { mood: "excited", text: "¡Elige quién te acompaña en tus juegos!", size: 64, char: selChar }),
    MG_H("div", { className: "char-picker char-picker-full" },
      MG_H("div", { className: "char-picker-title" }, "🐾 Elige tu compañero"),
      MG_H("div", { className: "char-grid" },
        ...mgChars.map((cc) => {
          let unlocked = mgCharIsUnlocked(cc, dq),
            sel = selChar === cc.id;
          return MG_H("button",
            {
              key: cc.id,
              className: "char-card" + (sel ? " sel" : "") + (unlocked ? "" : " locked"),
              disabled: !unlocked,
              onClick: () =>
                unlocked &&
                (setSelChar(cc.id), (mgChar = cc.id), eQ("mg_char", { id: cc.id })),
            },
            unlocked
              ? MG_H(d, { mood: sel ? "excited" : "happy", size: 64, char: cc.id })
              : MG_H("div", { className: "char-lock" }, "🔒"),
            MG_H("div", { className: "char-name" }, unlocked ? cc.name : "Completa " + cc.unlock + " niveles"),
            unlocked ? MG_H("div", { className: "char-desc" }, cc.desc) : null,
            /* Aquí se muestra el potenciador del camino pequeño, NO el del
               aventurero: este camino no tiene vidas, reloj, monedas ni
               objetos, así que anunciar un escudo o monedas extra sería
               prometer algo que nunca va a ocurrir. */
            cc.perkMini
              ? MG_H("div", { className: "char-perk" }, cc.perkMini.emoji + " " + cc.perkMini.txt)
              : null,
            sel && MG_H("div", { className: "char-badge" }, "✓ elegido"));
        }))));
}
function MgReparto({ total: N, groups: M, item: it, who: wh }) {
  const [dealt, setDealt] = i.useState(0);
  const each = Math.floor(dealt / M);
  const remaining = N - dealt;
  const dealRound = () => {
    if (remaining <= 0) return;
    (SFX.pop(), setDealt((d) => Math.min(N, d + M)));
  };
  return MG_H("div", { className: "reparto" },
    MG_H("div", { className: "reparto-pile" + (remaining <= 0 ? " empty" : "") },
      MG_H("span", { className: "reparto-pile-n" }, remaining > 0 ? "Quedan " + remaining : "¡Ya no quedan!"),
      MG_H("div", { className: "reparto-items" },
        Array.from({ length: remaining }).map((_, ix) =>
          MG_H("span", { key: ix, className: "reparto-item" }, it)))),
    MG_H("div", { className: "reparto-groups" },
      Array.from({ length: M }).map((_, gi) =>
        MG_H("div", { key: gi, className: "reparto-group" },
          MG_H("span", { className: "reparto-who" }, wh),
          MG_H("div", { className: "reparto-basket" },
            each > 0
              ? Array.from({ length: each }).map((_, ii) =>
                  MG_H("span", { key: ii, className: "reparto-item" }, it))
              : MG_H("span", { className: "reparto-empty" }, "·"))))),
    MG_H("button", {
      className: "reparto-btn",
      type: "button",
      onClick: dealRound,
      disabled: remaining <= 0,
    }, remaining > 0 ? "🤲 Dar una a cada uno" : "✅ ¡Ya está! ¿Cuántas por cada uno?"));
}
function MgSumaObjetos({ a: A, b: B, itemA: ia, itemB: ib }) {
  const [counted, setCounted] = i.useState(0);
  const total = A + B;
  const tap = () => {
    if (counted >= total) return;
    (SFX.pop(), setCounted((c) => Math.min(total, c + 1)));
  };
  return MG_H("div", { className: "sumaobj" },
    MG_H("div", { className: "sumaobj-groups" },
      MG_H("div", { className: "sumaobj-group" },
        Array.from({ length: A }).map((_, ix) =>
          MG_H("button", { key: "a" + ix, type: "button", className: "sumaobj-item" + (ix < counted ? " counted" : ""), onClick: tap }, ia))),
      MG_H("span", { className: "sumaobj-plus" }, "➕"),
      MG_H("div", { className: "sumaobj-group" },
        Array.from({ length: B }).map((_, ix) =>
          MG_H("button", { key: "b" + ix, type: "button", className: "sumaobj-item" + (A + ix < counted ? " counted" : ""), onClick: tap }, ib)))),
    MG_H("div", { className: "sumaobj-count" }, counted > 0 ? "Contados: " + counted : "Tócalos para contar 👆"));
}
function mgLessonSeen(id) {
  try {
    return (JSON.parse(localStorage.getItem("mg_lessons") || "[]") || []).includes(id);
  } catch (e) {
    return !1;
  }
}
function mgMarkLesson(id) {
  try {
    let s = JSON.parse(localStorage.getItem("mg_lessons") || "[]") || [];
    s.includes(id) || (s.push(id), localStorage.setItem("mg_lessons", JSON.stringify(s)));
  } catch (e) {}
}
function mgConceptOf(level) {
  if (["arreglo", "tabla", "salto"].includes(level.kind)) return "multiplicacion";
  if (["reparto", "resto", "division"].includes(level.kind)) return "division";
  return null;
}
function mgStreakCheer(n, fiesta) {
  // Bruno celebra antes: la 2ª y la 4ª, que en el camino pequeño es donde una
  // racha todavía se siente frágil.
  if (fiesta && (2 === n || 4 === n))
    return 2 === n ? "🎉 ¡Dos seguidas! ¡Vas muy bien!" : "🎉 ¡Cuatro seguidas! ¡Qué bien vas!";
  if (3 === n) return "🔥 ¡3 seguidas! ¡Qué racha!";
  if (5 === n) return "⚡ ¡5 seguidas! ¡Imparable!";
  if (7 === n) return "🌟 ¡7 seguidas! ¡Qué constancia!";
  if (10 === n) return "🏆 ¡10 seguidas! ¡Máquina de mates!";
  if (n > 10 && n % 5 === 0) return "🚀 ¡" + n + " seguidas! ¡No paras!";
  return null;
}
function mgAttackName(kind) {
  let K = String(kind || "");
  if (K.includes("sum") || "addition" === K || "bond" === K || "bonds10" === K || "bonds20" === K)
    return "¡Golpe de suma!";
  if (K.includes("rest") || "subtraction" === K) return "¡Corte de resta!";
  if (K.includes("tabla") || "arreglo" === K || "salto" === K || "multiplication" === K || "double" === K)
    return "¡Rayo multiplicador!";
  if (K.includes("repart") || "reparto" === K || "resto" === K || "division" === K)
    return "¡Tajo divisor!";
  return "¡Ataque veloz!";
}
function mgPathCurve(n) {
  if (n < 2) return "M 15 5";
  let xs = (i) => (i % 2 === 0 ? 15 : 33),
    y = (i) => i * 10 + 5,
    d = `M ${xs(0)} ${y(0)}`;
  for (let i = 1; i < n; i++) {
    let x0 = xs(i - 1),
      y0 = y(i - 1),
      x1 = xs(i),
      y1 = y(i),
      my = (y0 + y1) / 2;
    d += ` C ${x0} ${my}, ${x1} ${my}, ${x1} ${y1}`;
  }
  return d;
}
function mgLessonData(concept, groups, array, grid) {
  if ("division" === concept)
    return {
      title: "📖 Aprendamos a dividir",
      steps: [
        {
          turbo: "Dividir es repartir en partes iguales. Tenemos 12 galletas para 3 amigos.",
          big: "12 galletas para 3",
          visual: grid(12, 6),
        },
        {
          turbo: "Le damos la misma cantidad a cada uno… ¡a cada amigo le tocan 4!",
          big: "12 ÷ 3 = 4",
          visual: groups(),
        },
        {
          turbo: "Es lo contrario de multiplicar: si 3 × 4 = 12, entonces 12 ÷ 3 = 4.",
          big: "3 × 4 = 12",
          visual: groups(),
        },
        {
          turbo: "¡Ya lo sabés! 12 ÷ 3 = 4. Ahora probá vos.",
          big: "¡Lo lograste! 🎉",
          visual: MG_H("div", { className: "lec-result" }, "12 ÷ 3 = 4"),
        },
      ],
    };
  return {
    title: "📖 Aprendamos a multiplicar",
    steps: [
      {
        turbo: "Multiplicar es hacer grupos iguales. ¡Mirá! 3 grupos, y en cada uno 4 galletas.",
        big: "3 grupos de 4",
        visual: groups(),
      },
      {
        turbo: "Por eso 3 × 4 significa sumar 4 tres veces.",
        big: "4 + 4 + 4 = 12",
        visual: groups(),
      },
      {
        turbo: "También lo podés ver como filas y columnas. ¡Contá, es lo mismo!",
        big: "3 filas de 4 = 12",
        visual: array(),
      },
      {
        turbo: "¡Ya lo sabés! Entonces 3 × 4 = 12. Ahora probá vos.",
        big: "¡Lo lograste! 🎉",
        visual: MG_H("div", { className: "lec-result" }, "3 × 4 = 12"),
      },
    ],
  };
}
function MgLeccion({ concept: concept, bg: bg, onDone: onDone, onSkip: onSkip }) {
  let A = 3,
    B = 4,
    it = "🍪",
    [step, setStep] = (0, i.useState)(0),
    groups = () =>
      MG_H(
        "div",
        { className: "lec-groups" },
        Array.from({ length: A }).map((_, g) =>
          MG_H(
            "div",
            { key: g, className: "lec-group" },
            Array.from({ length: B }).map((_, j) =>
              MG_H("span", { key: j, className: "lec-emoji" }, it),
            ),
          ),
        ),
      ),
    array = () =>
      MG_H(
        "div",
        { className: "lec-array", style: { gridTemplateColumns: `repeat(${B},1fr)` } },
        Array.from({ length: A * B }).map((_, k) =>
          MG_H("span", { key: k, className: "lec-emoji" }, it),
        ),
      ),
    grid = (n, cols) =>
      MG_H(
        "div",
        { className: "lec-array", style: { gridTemplateColumns: `repeat(${cols},1fr)` } },
        Array.from({ length: n }).map((_, k) =>
          MG_H("span", { key: k, className: "lec-emoji" }, it),
        ),
      ),
    L = mgLessonData(concept, groups, array, grid),
    title = L.title,
    steps = L.steps,
    cur = steps[step],
    last = step === steps.length - 1;
  return MG_H(
    "div",
    { className: `screen world-${bg || "minecraft"}` },
    MG_H(eX, {}),
    MG_H(
      "div",
      { className: "panel leccion" },
      MG_H("button", { className: "link-back", onClick: onSkip }, "Saltar ▶\ufe0e"),
      MG_H("div", { className: "lec-title" }, title),
      MG_H(f, { mood: last ? "excited" : "happy", text: cur.turbo, size: 60 }),
      MG_H("div", { className: "lec-visual" }, cur.visual),
      MG_H("div", { className: "lec-big" }, cur.big),
      MG_H(
        "div",
        { className: "lec-dots" },
        steps.map((_, k) =>
          MG_H("span", { key: k, className: "lec-dot" + (k === step ? " on" : "") }),
        ),
      ),
      MG_H(
        "div",
        { className: "lec-nav" },
        step > 0 &&
          MG_H(
            "button",
            { className: "btn-pixel", onClick: () => setStep(step - 1) },
            "◀\ufe0e Atrás",
          ),
        last
          ? MG_H("button", { className: "btn-pixel btn-go", onClick: onDone }, "🚀 ¡A jugar!")
          : MG_H(
              "button",
              { className: "btn-pixel btn-go", onClick: () => setStep(step + 1) },
              "Siguiente ▶\ufe0e",
            ),
      ),
    ),
  );
}
function MgColumna({ a, b, op, typed }) {
  return MG_H("div", { className: "col-op" },
    MG_H("div", { className: "col-op-row" }, String(a)),
    MG_H("div", { className: "col-op-row" },
      MG_H("span", { className: "col-op-sign" }, op),
      MG_H("span", null, String(b))),
    MG_H("div", { className: "col-op-line" }),
    MG_H("div", { className: "col-op-row col-op-ans" }, typed || "_"));
}
function MgArreglo({ rows: R, cols: C, item: it }) {
  const [counted, setCounted] = i.useState(0);
  const total = R * C;
  const tap = () => {
    if (counted >= total) return;
    (SFX.pop(), setCounted((c) => Math.min(total, c + 1)));
  };
  return MG_H("div", { className: "arreglo" },
    MG_H("div", { className: "arreglo-grid" },
      Array.from({ length: R }).map((_, r) =>
        MG_H("div", { key: r, className: "arreglo-row" },
          Array.from({ length: C }).map((_, c) =>
            MG_H("button", { key: c, type: "button", className: "arreglo-item" + (r * C + c < counted ? " counted" : ""), onClick: tap }, it))))),
    MG_H("div", { className: "arreglo-count" }, counted > 0 ? "Contados: " + counted : R + " filas de " + C + " 👆"));
}
function MgBalanza({ a: A, b: B, known: C }) {
  return MG_H("div", { className: "balance-area mg-balanza" },
    MG_H("div", { className: "balance-beam" },
      MG_H("div", { className: "balance-pan" },
        MG_H("div", { className: "pan-content" }, A + " + " + B)),
      MG_H("div", { className: "balance-center" }, "⚖️"),
      MG_H("div", { className: "balance-pan" },
        MG_H("div", { className: "pan-content" }, C + " + ?"))));
}
function eJ({ soundOn: e, onToggleSound: t, onParents: n, onPick: a }) {
  return (0, s.jsxs)("div", {
    className: "screen world-starwars",
    children: [
      (0, s.jsx)(eX, {}),
      (0, s.jsx)("button", {
        className: "sound-toggle",
        onClick: t,
        children: e ? "🔊" : "🔇",
      }),
      (0, s.jsxs)("div", {
        className: "stack center",
        children: [
          (0, s.jsxs)("div", {
            className: "title-block",
            children: [
              (0, s.jsx)("div", {
                className: "title-pixel",
                children: "🌌 Math",
              }),
              (0, s.jsx)("div", {
                className: "title-pixel accent",
                children: "Galaxy",
              }),
              (0, s.jsx)("div", {
                className: "subtitle",
                children: "¿Quién va a jugar?",
              }),
            ],
          }),
          (0, s.jsx)(f, {
            mood: "excited",
            text: "¡Guau! Soy Turbo. ¿Quién juega hoy?",
            size: 78,
          }),
          (0, s.jsxs)("div", {
            className: "profile-row",
            children: [
              (0, s.jsxs)("button", {
                className: "profile-card little",
                onClick: () => a("pequeno"),
                children: [
                  (0, s.jsx)("span", {
                    className: "profile-emoji",
                    children: "🧒",
                  }),
                  (0, s.jsx)("span", {
                    className: "profile-name",
                    children: "Pequeño explorador",
                  }),
                  (0, s.jsx)("span", {
                    className: "profile-age",
                    children: "4 años",
                  }),
                  (0, s.jsx)("span", {
                    className: "profile-desc",
                    children: "36 niveles + lógica",
                  }),
                ],
              }),
              (0, s.jsxs)("button", {
                className: "profile-card big",
                onClick: () => a("aventurero"),
                children: [
                  (0, s.jsx)("span", {
                    className: "profile-emoji",
                    children: "🧑‍🚀",
                  }),
                  (0, s.jsx)("span", {
                    className: "profile-name",
                    children: "Aventurero",
                  }),
                  (0, s.jsx)("span", {
                    className: "profile-age",
                    children: "8 años",
                  }),
                  (0, s.jsx)("span", {
                    className: "profile-desc",
                    children: "93 niveles, 11 mundos, jefes",
                  }),
                ],
              }),
            ],
          }),
          (0, s.jsx)("button", {
            className: "parents-link",
            onClick: n,
            children: "📊 Para papás",
          }),
        ],
      }),
    ],
  });
}
function eZ({ progress: e, onLevel: t, onStickers: n, onBrain: a, onBack: r }) {
  let l = Object.values(e).filter((e) => e.done).length;
  return (0, s.jsxs)("div", {
    className: "screen world-sonic path-screen",
    children: [
      (0, s.jsx)(eX, {}),
      (0, s.jsxs)("div", {
        className: "path-top",
        children: [
          (0, s.jsx)("button", {
            className: "link-back",
            onClick: r,
            children: "◀\ufe0e",
          }),
          (0, s.jsxs)("span", {
            className: "coin-pill sticker-pill",
            children: ["🎨 ", l, "/", eo.length],
          }),
        ],
      }),
      (0, s.jsxs)("div", {
        className: "path-scroll",
        children: [
          MG_H(
            "div",
            { className: "path-ambient sky", "aria-hidden": "true" },
            MG_H("span", { className: "amb amb-cloud1" }, mgAmbArt("cloud1")),
            MG_H("span", { className: "amb amb-cloud2" }, mgAmbArt("cloud2")),
            MG_H("span", { className: "amb amb-balloon" }, mgAmbArt("balloon")),
            MG_H("span", { className: "amb amb-butterfly" }, mgAmbArt("butterfly")),
            MG_H("span", { className: "amb amb-bird" }, mgAmbArt("bird")),
            MG_H("span", { className: "amb amb-rainbow" }, mgAmbArt("rainbow")),
          ),
          (0, s.jsxs)("div", {
            className: "path-header",
            children: [
              (0, s.jsx)("div", {
                className: "title-pixel path-title",
                children: "🧒 Mi aventura",
              }),
              (0, s.jsx)("div", {
                className: "path-sub",
                children: "¡Gana una calcomanía en cada nivel!",
              }),
            ],
          }),
          ei.map((n, a) => {
            let r = eo.filter((e) => e.world === a);
            return (0, s.jsxs)(
              "div",
              {
                className: `world-section lws-${n.id}`,
                children: [
                  (0, s.jsxs)("div", {
                    className: "world-banner",
                    children: [
                      (0, s.jsx)("span", {
                        className: "wb-emoji",
                        children: n.emoji,
                      }),
                      (0, s.jsx)("span", {
                        className: "wb-name",
                        children: n.name,
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "node-column",
                    children: [
                      MG_H(
                        "svg",
                        {
                          className: "path-curve",
                          viewBox: `0 0 100 ${r.length * 10}`,
                          preserveAspectRatio: "none",
                          "aria-hidden": "true",
                        },
                        MG_H("path", {
                          className: "path-curve-line",
                          d: mgPathCurve(r.length),
                        }),
                      ),
                      ...r.map((n, a) => {
                      var r;
                      let l = e[n.id],
                        i = ((r = n.id), 1 === r || !!e[r - 1]?.done),
                        o = i && !l?.done;
                      return (0, s.jsxs)(
                        "div",
                        {
                          className: `node-wrap ${a % 2 == 0 ? "nleft" : "nright"}`,
                          children: [
                            (0, s.jsxs)("button", {
                              className: `level-node ${!i ? "locked" : l?.done ? "done" : "next"}`,
                              disabled: !i,
                              onClick: () => t(n),
                              children: [
                                (0, s.jsx)("span", {
                                  className: "node-emoji",
                                  children: i
                                    ? l?.done
                                      ? n.sticker
                                      : n.emoji
                                    : "🔒",
                                }),
                                o &&
                                  (0, s.jsx)("span", {
                                    className: "node-pulse",
                                  }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: "node-label",
                              children: [
                                (0, s.jsx)("span", {
                                  className: "nl-name",
                                  children: mgLevelName(n),
                                }),
                                l?.done &&
                                  (0, s.jsxs)("span", {
                                    className: "nl-stars",
                                    children: [
                                      "⭐".repeat(l.stars),
                                      "☆".repeat(3 - l.stars),
                                    ],
                                  }),
                                o &&
                                  (0, s.jsx)("span", {
                                    className: "nl-next",
                                    children: "▶\ufe0e ¡juega!",
                                  }),
                              ],
                            }),
                          ],
                        },
                        n.id,
                      );
                    }),
                    ],
                  }),
                ],
              },
              n.id,
            );
          }),
          l === eo.length &&
            (0, s.jsx)("div", {
              className: "galaxy-complete",
              children: "🌟 ¡Completaste todas las calcomanías! 🌟",
            }),
        ],
      }),
    ],
  });
}
function e0({ progress: e, gifts: gf, onBack: t }) {
  let n = eo.filter((t) => e[t.id]?.done).length,
    regalos = gf || [];
  return (0, s.jsxs)("div", {
    className: "screen world-sonic scroll-screen",
    children: [
      (0, s.jsx)(eX, {}),
      (0, s.jsxs)("div", {
        className: "sticky-topbar",
        children: [
          (0, s.jsx)("button", {
            className: "btn-pixel back-btn",
            onClick: t,
            children: "◀\ufe0e Volver",
          }),
          (0, s.jsxs)("span", {
            className: "topbar-title",
            children: ["📖 Mi álbum · ", n, "/", eo.length],
          }),
        ],
      }),
      (0, s.jsx)("div", {
        className: "panel album-panel",
        children: (0, s.jsx)("div", {
          className: "sticker-grid",
          children: eo.map((t) => {
            let n = e[t.id]?.done;
            return (0, s.jsxs)(
              "div",
              {
                className: `sticker-slot ${n ? "got" : ""}`,
                children: [
                  (0, s.jsx)("span", {
                    className: "ss-emoji",
                    children: n ? t.sticker : "❔",
                  }),
                  (0, s.jsx)("span", {
                    className: "ss-name",
                    children: n ? t.stickerName : "?????",
                  }),
                ],
              },
              t.id,
            );
          }),
        }),
      }),
      /* Regalos del acompañante. Van en su propia sección y no mezclados con
         las calcomanías de nivel, porque no se ganan superando un nivel sino
         acompañando: mezclarlas haría parecer que faltan niveles. */
      regalos.length > 0 &&
        (0, s.jsxs)("div", {
          className: "panel album-panel",
          children: [
            (0, s.jsxs)("div", {
              className: "album-gift-title",
              children: ["🎁 Regalos de ", mgCharName(), " · ", regalos.length, "/", MG_REGALOS.length],
            }),
            (0, s.jsx)("div", {
              className: "sticker-grid",
              children: MG_REGALOS.filter((r) => regalos.includes(r.e)).map((r) =>
                (0, s.jsxs)(
                  "div",
                  {
                    className: "sticker-slot got",
                    children: [
                      (0, s.jsx)("span", { className: "ss-emoji", children: r.e }),
                      (0, s.jsx)("span", { className: "ss-name", children: r.n }),
                    ],
                  },
                  r.e,
                ),
              ),
            }),
          ],
        }),
    ],
  });
}
function e1({ level: e, onDone: t, onSkill: onSkill }) {
  let n,
    [a, r] = (0, i.useState)(0),
    [l, o] = (0, i.useState)(() => mgLittleNext(e, 0)),
    [c, u] = (0, i.useState)("ask"),
    [f, m] = (0, i.useState)(0),
    [p, h] = (0, i.useState)(null),
    [g, b] = (0, i.useState)([]),
    [mgLS, mgSetLS] = (0, i.useState)(0),
    [mgLCheer, mgSetLCheer] = (0, i.useState)(null),
    mgLCheerT = (0, i.useRef)(null),
    mgQT = (0, i.useRef)(Date.now()), // cuándo apareció la pregunta actual
    y = (0, i.useRef)(null);
  (0, i.useEffect)(
    () => () => {
      (y.current && clearTimeout(y.current),
        mgLCheerT.current && clearTimeout(mgLCheerT.current));
    },
    [],
  );
  // Reloj de la pregunta: se reinicia con cada pregunta nueva para medir
  // cuánto tardó el niño (relativo a sí mismo, no a un estándar).
  (0, i.useEffect)(() => {
    mgQT.current = Date.now();
  }, [a]);
  let x = (e) => {
      switch (e.kind) {
        case "contar":
        case "palitos":
        case "puntos":
          return e.n;
        case "sumar":
        case "restar":
        case "falta":
        case "patron":
          return e.answer;
        case "comparar":
          return e.bigger;
        case "figura":
          return e.target;
        case "depar":
          return 2 * e.pairs;
        case "para5":
          return 5 - e.filled;
        case "vf":
          return e.truth;
        case "orden":
        case "tocar":
        case "mini":
          return -1;
      }
    },
    k = (n) => {
      if ("ask" !== c) return;
      let s = "orden-ok" === n || ("orden-fail" !== n && n === x(l));
      if (s) {
        let e = mgLS + 1;
        mgSetLS(e);
        let t = mgStreakCheer(e, "fiesta" === mgPerkMiniKey());
        t &&
          (mgSetLCheer(t),
          mgLCheerT.current && clearTimeout(mgLCheerT.current),
          (mgLCheerT.current = setTimeout(() => mgSetLCheer(null), 1600)));
      } else mgSetLS(0);
      // Señales de la sesión y lectura del fallo: ¿no puede, o ya no está
      // disponible para aprender? Si es lo segundo, el controlador NO baja
      // la dificultad; responde con ánimo (mgSoothe).
      {
        let lat = Date.now() - mgQT.current,
          ctx = s ? null : mgMissCtx(lat, mgLS),
          antes = mgSoothe;
        (mgSessSeen(lat), mgSkillRecord(s, onSkill, ctx));
        /* Consuelo del acompañante: además del ánimo que dispara el
           controlador de frustración, Turbo aparece por su cuenta tras un
           fallo. No sustituye al del controlador — si ese ya saltó, no se
           pisan. */
        !antes &&
          !mgSoothe &&
          !s &&
          "consuelo" === mgPerkMiniKey() &&
          Math.random() < 0.35 &&
          (mgSetLCheer(ee(MG_SOOTHE)),
          mgLCheerT.current && clearTimeout(mgLCheerT.current),
          (mgLCheerT.current = setTimeout(() => mgSetLCheer(null), 2200)));
        !antes &&
          mgSoothe &&
          (mgSetLCheer(ee(MG_SOOTHE)),
          mgLCheerT.current && clearTimeout(mgLCheerT.current),
          (mgLCheerT.current = setTimeout(() => mgSetLCheer(null), 2200)));
      }
      (s ? v.ok() : v.no(),
        h(n),
        u(s ? "right" : "wrong"),
        s && m((e) => e + 1),
        (y.current = setTimeout(
          () => {
            let n = a + 1;
            n >= e.questions
              ? t(f + +!!s)
              : (r(n), o(mgLittleNext(e, n)), u("ask"), h(null), b([]));
          },
          s ? 1100 : 1900,
        )));
    },
    j = (e, t, n = "", a) =>
      (0, s.jsx)("div", {
        className: `obj-grid ${n}`,
        children: Array.from({ length: e }).map((e, n) =>
          (0, s.jsx)(
            "span",
            {
              className: `obj ${void 0 !== a && n >= a ? "crossed" : ""}`,
              style: { animationDelay: `${0.05 * n}s` },
              children: t,
            },
            n,
          ),
        ),
      }),
    w =
      "comparar" !== l.kind &&
      "patron" !== l.kind &&
      "orden" !== l.kind &&
      "figura" !== l.kind &&
      "vf" !== l.kind &&
      "tocar" !== l.kind &&
      "mini" !== l.kind;
  return (0, s.jsxs)("div", {
    className: "screen world-sonic",
    children: [
      (0, s.jsx)(eX, {}),
      mgLCheer && MG_H("div", { className: "streak-cheer" }, mgLCheer),
      (0, s.jsxs)("div", {
        className: "little-hud",
        children: [
          (0, s.jsxs)("span", {
            children: [e.emoji, " ", a + 1, " / ", e.questions],
          }),
          (0, s.jsxs)("span", { children: ["⭐ ", f] }),
        ],
      }),
      (0, s.jsxs)("div", {
        className: "stack center little-play",
        children: [
          "contar" === l.kind &&
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("div", {
                  className: "little-question",
                  children: l.frase || "¿Cuántos hay?",
                }),
                j(l.n, l.obj),
              ],
            }),
          "palitos" === l.kind &&
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("div", {
                  className: "little-question",
                  children: l.frase || "¿Cuántos palitos hay?",
                }),
                ((e) => {
                  let t = [],
                    n = e;
                  for (; n > 0;) (t.push(Math.min(5, n)), (n -= 5));
                  return (0, s.jsx)("div", {
                    className: "tally-area",
                    children: t.map((e, t) =>
                      (0, s.jsxs)(
                        "div",
                        {
                          className: "tally-group",
                          children: [
                            Array.from({ length: Math.min(e, 4) }).map((e, n) =>
                              (0, s.jsx)(
                                "span",
                                {
                                  className: "tally-stick",
                                  style: {
                                    animationDelay: `${(5 * t + n) * 0.06}s`,
                                  },
                                },
                                n,
                              ),
                            ),
                            5 === e &&
                              (0, s.jsx)("span", { className: "tally-cross" }),
                          ],
                        },
                        t,
                      ),
                    ),
                  });
                })(l.n),
              ],
            }),
          "puntos" === l.kind &&
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("div", {
                  className: "little-question",
                  children: l.frase || "¿Cuántos puntos ves?",
                }),
                ((n = l.n),
                (0, s.jsx)("div", {
                  className: "ten-frame",
                  children: Array.from({ length: 10 }).map((e, t) =>
                    (0, s.jsx)(
                      "div",
                      {
                        className: "tf-cell",
                        children:
                          t < n &&
                          (0, s.jsx)("span", {
                            className: "tf-dot",
                            style: { animationDelay: `${0.05 * t}s` },
                          }),
                      },
                      t,
                    ),
                  ),
                })),
              ],
            }),
          "sumar" === l.kind &&
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("div", {
                  className: "little-question",
                  children: l.frase || "¿Cuántos hay en total?",
                }),
                (0, s.jsxs)("div", {
                  className: "sum-visual",
                  children: [
                    j(l.a, l.obj, "inline"),
                    (0, s.jsx)("span", {
                      className: "sum-plus",
                      children: "+",
                    }),
                    j(l.b, l.obj, "inline"),
                  ],
                }),
              ],
            }),
          "restar" === l.kind &&
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("div", {
                  className: "little-question",
                  children: l.frase || "¿Cuántos quedan?",
                }),
                j(l.a, l.obj, "", l.a - l.b),
              ],
            }),
          "falta" === l.kind &&
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("div", {
                  className: "little-question",
                  children: l.frase || "¿Qué número falta?",
                }),
                (0, s.jsx)("div", {
                  className: "pattern-row",
                  children: l.seq.map((e, t) =>
                    (0, s.jsx)(
                      "span",
                      {
                        className: `pattern-item number-item ${null === e ? "hole" : ""}`,
                        style: { animationDelay: `${0.07 * t}s` },
                        children: null === e ? "?" : e,
                      },
                      t,
                    ),
                  ),
                }),
              ],
            }),
          "orden" === l.kind &&
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("div", {
                  className: "little-question",
                  children: l.frase || "Toca los números en orden: 1, 2, 3...",
                }),
                (0, s.jsx)("div", {
                  className: "bubbles-zone kid-bubbles",
                  children: l.numbers.map((e, t) =>
                    (0, s.jsx)(
                      "button",
                      {
                        className: `bubble kid-bubble ${g.includes(e) ? "popped" : ""}`,
                        style: { animationDelay: `${0.1 * t}s` },
                        disabled: "ask" !== c || g.includes(e),
                        onClick: () =>
                          ((e) => {
                            if (!(
                              "ask" !== c ||
                              "orden" !== l.kind ||
                              g.includes(e)
                            ))
                              if (e === g.length + 1) {
                                let t = [...g, e];
                                (b(t),
                                  t.length === l.numbers.length &&
                                    k("orden-ok"));
                              } else k("orden-fail");
                          })(e),
                        children: e,
                      },
                      t,
                    ),
                  ),
                }),
              ],
            }),
          "figura" === l.kind &&
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("div", {
                  className: "little-question",
                  children: l.frase || "Toca la figura igual a esta",
                }),
                (0, s.jsx)("div", {
                  className: "figura-target",
                  children: mgShapeSVG(l.target, 72),
                }),
              ],
            }),
          "vf" === l.kind &&
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("div", {
                  className: "little-question",
                  children: l.frase || "Mira bien: ¿sí o no?",
                }),
                j(l.n, l.obj),
                (0, s.jsxs)("div", {
                  className: "vf-claim",
                  children: ["¿Hay ", l.claim, "?"],
                }),
                (0, s.jsxs)("div", {
                  className: "little-choices",
                  children: [
                    (0, s.jsx)("button", {
                      className: `little-choice vf-btn ${!0 === p ? ("right" === c ? "ok" : "no") : ""} ${"wrong" === c && !0 === x(l) ? "reveal" : ""}`,
                      onClick: () => k(!0),
                      disabled: "ask" !== c,
                      children: "✅ Sí",
                    }),
                    (0, s.jsx)("button", {
                      className: `little-choice vf-btn ${!1 === p ? ("right" === c ? "ok" : "no") : ""} ${"wrong" === c && !1 === x(l) ? "reveal" : ""}`,
                      onClick: () => k(!1),
                      disabled: "ask" !== c,
                      children: "❌ No",
                    }),
                  ],
                }),
              ],
            }),
          "mini" === l.kind &&
            (() => {
              let mn = MG_MINIS.find((x) => x.id === l.game) || MG_MINIS[0],
                extra = mn.props ? mn.props(mgSkillBand().cap) : null;
              return MG_H(
                "div",
                { className: "mini-in-path", key: "mini-" + a },
                MG_H("div", { className: "little-question" }, l.frase || "¡A jugar!"),
                MG_H("div", { className: "mini-title" }, mn.name),
                // El minijuego escala con la banda del niño y resuelve la
                // pregunta él mismo vía onFinish.
                MG_H(mn.comp, {
                  level: mgSkillBand().id,
                  ...extra,
                  onFinish: (ok) => k(ok ? "orden-ok" : "orden-fail"),
                }),
                /* Escape sin castigo. Tren, parejas y cajas solo terminan al
                   ganar, y el nivel no tiene botón de salir: sin esto, un niño
                   que no resuelva el puzzle queda atrapado. Cambiar de juego
                   NO cuenta como error — reemplaza la pregunta por otra. */
                "ask" === c
                  ? MG_H(
                      "button",
                      {
                        className: "btn-pixel mini-skip",
                        onClick: () => (o(mgMiniOtro(e, l.game)), h(null), b([])),
                      },
                      "🔄 Otro juego",
                    )
                  : null,
              );
            })(),
          "tocar" === l.kind &&
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("div", {
                  className: "little-question",
                  children: l.frase || "¡Toca cada uno para contarlos!",
                }),
                (0, s.jsx)("div", {
                  className: "tocar-grid",
                  children: Array.from({ length: l.n }).map((e, t) => {
                    let n = g.indexOf(t);
                    return (0, s.jsx)(
                      "button",
                      {
                        className: `tocar-item ${n >= 0 ? "tocado" : ""}`,
                        disabled: "ask" !== c || n >= 0,
                        onClick: () => {
                          let e = [...g, t];
                          (SFX.pop(), b(e), e.length >= l.n && k("orden-ok"));
                        },
                        children:
                          n >= 0
                            ? (0, s.jsx)("span", { className: "tocar-num", children: n + 1 })
                            : l.obj,
                      },
                      t,
                    );
                  }),
                }),
                (0, s.jsxs)("div", {
                  className: "tocar-count",
                  children: [g.length, " de ", l.n],
                }),
              ],
            }),
          "depar" === l.kind &&
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("div", {
                  className: "little-question",
                  children: l.frase || "¿Cuántos hay? ¡Cuenta de 2 en 2!",
                }),
                (0, s.jsx)("div", {
                  className: "pares-zone",
                  children: Array.from({ length: l.pairs }).map((e, t) =>
                    (0, s.jsxs)(
                      "span",
                      {
                        className: "par-group",
                        style: { animationDelay: `${0.1 * t}s` },
                        children: [l.obj, l.obj],
                      },
                      t,
                    ),
                  ),
                }),
              ],
            }),
          "para5" === l.kind &&
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("div", {
                  className: "little-question",
                  children: l.frase || "¿Cuántos faltan para llenar los 5?",
                }),
                (0, s.jsx)("div", {
                  className: "five-frame",
                  children: Array.from({ length: 5 }).map((e, t) =>
                    (0, s.jsx)(
                      "div",
                      {
                        className: "tf-cell",
                        children:
                          t < l.filled &&
                          (0, s.jsx)("span", {
                            className: "tf-dot",
                            style: { animationDelay: `${0.06 * t}s` },
                          }),
                      },
                      t,
                    ),
                  ),
                }),
              ],
            }),
          "patron" === l.kind &&
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("div", {
                  className: "little-question",
                  children: l.frase || "¿Qué sigue?",
                }),
                (0, s.jsx)("div", {
                  className: "pattern-row",
                  children: l.seq.map((e, t) =>
                    (0, s.jsx)(
                      "span",
                      {
                        className: `pattern-item ${"?" === e ? "hole" : ""}`,
                        style: { animationDelay: `${0.07 * t}s` },
                        children: e,
                      },
                      t,
                    ),
                  ),
                }),
              ],
            }),
          "comparar" === l.kind &&
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("div", {
                  className: "little-question",
                  children: l.frase || "Toca el grupo con más",
                }),
                (0, s.jsxs)("div", {
                  className: "compare-row",
                  children: [
                    (0, s.jsx)("button", {
                      className: `compare-panel ${"left" === p ? ("left" === l.bigger ? "ok" : "no") : ""}`,
                      onClick: () => k("left"),
                      disabled: "ask" !== c,
                      children: j(l.left, l.obj, "inline"),
                    }),
                    (0, s.jsx)("button", {
                      className: `compare-panel ${"right" === p ? ("right" === l.bigger ? "ok" : "no") : ""}`,
                      onClick: () => k("right"),
                      disabled: "ask" !== c,
                      children: j(l.right, l.obj, "inline"),
                    }),
                  ],
                }),
              ],
            }),
          w &&
            (0, s.jsx)("div", {
              className: "little-choices",
              children: l.choices.map((e) =>
                (0, s.jsx)(
                  "button",
                  {
                    className: `little-choice ${p === e ? ("right" === c ? "ok" : "no") : ""} ${"wrong" === c && e === x(l) ? "reveal" : ""}`,
                    onClick: () => k(e),
                    disabled: "ask" !== c,
                    children: e,
                  },
                  e,
                ),
              ),
            }),
          ("patron" === l.kind || "figura" === l.kind) &&
            (0, s.jsx)("div", {
              className: "little-choices",
              children: l.choices.map((e) =>
                (0, s.jsx)(
                  "button",
                  {
                    className: `little-choice pattern-choice ${p === e ? ("right" === c ? "ok" : "no") : ""} ${"wrong" === c && e === x(l) ? "reveal" : ""}`,
                    onClick: () => k(e),
                    disabled: "ask" !== c,
                    children: "figura" === l.kind ? mgShapeSVG(e, 46) : e,
                  },
                  e,
                ),
              ),
            }),
          "right" === c &&
            (0, s.jsxs)("div", {
              className: "little-feedback ok pug-feedback",
              children: [
                (0, s.jsx)(d, { mood: "excited", size: 60 }),
                " ¡Muy bien!",
              ],
            }),
          "wrong" === c &&
            (0, s.jsxs)("div", {
              className: "little-feedback no pug-feedback",
              children: [
                (0, s.jsx)(d, { mood: "sad", size: 60 }),
                " ¡Casi! Mira la respuesta",
              ],
            }),
        ],
      }),
    ],
  });
}
// Ronda sorpresa: al terminar un nivel, a veces (~1/3) se ofrece UNA
// ronda de un minijuego de lógica, para que el propio camino varíe.
// Los componentes son los mismos de "Juegos de lógica".
const MG_BONUS_GAMES = [
  ["luces", O],
  ["parejitas", U],
  ["diferente", Q],
  ["sombras", W],
  ["tren", K],
  ["cajas", Y],
];
function e2({
  level: e,
  correct: t,
  stars: n,
  isNewSticker: a,
  regalo: mgReg,
  onNext: r,
  onPath: l,
  hasNext: o,
}) {
  (0, i.useEffect)(() => {
    v.win();
  }, []);
  let [c, u] = (0, i.useState)(!a),
    [mgBn, mgSetBn] = (0, i.useState)(() =>
      // Si el nivel mostró señales de cansancio/frustración, la ronda
      // sorpresa deja de ser azar y se ofrece siempre: cambiar de actividad
      // es mejor respuesta que bajarle los números.
      mgOn("bonus") &&
      (mgSootheTake() ||
        Math.random() < ("calma" === mgPerkMiniKey() ? 0.55 : 0.34))
        ? ee(MG_BONUS_GAMES)
        : null,
    ),
    [mgBnOn, mgSetBnOn] = (0, i.useState)(!1),
    [mgBnFlash, mgSetBnFlash] = (0, i.useState)(null);
  return (0, s.jsxs)("div", {
    className: "screen world-sonic",
    children: [
      (0, s.jsx)(eX, {}),
      a &&
        !c &&
        (0, s.jsx)("div", {
          className: "chest-overlay",
          children: (0, s.jsxs)("div", {
            className: "chest-modal",
            children: [
              (0, s.jsx)("div", {
                className: "chest-title",
                children: "¡Ganaste una calcomanía nueva!",
              }),
              (0, s.jsx)("button", {
                className: "chest-box",
                onClick: () => u(!0),
                children: "🎁",
              }),
              (0, s.jsx)("div", {
                className: "chest-tap",
                children: "toca para abrir",
              }),
            ],
          }),
        }),
      a &&
        c &&
        (0, s.jsx)("div", {
          className: "chest-overlay",
          onClick: () => {},
          children: (0, s.jsxs)("div", {
            className: "chest-modal",
            children: [
              (0, s.jsx)("div", { className: "chest-burst", children: "✨" }),
              (0, s.jsxs)("div", {
                className: "chest-reward",
                children: [
                  e.sticker,
                  (0, s.jsx)("span", {
                    className: "cr-name",
                    children: e.stickerName,
                  }),
                ],
              }),
              // Regalo del acompañante, aparte de la calcomanía del nivel
              mgReg &&
                (0, s.jsxs)("div", {
                  className: "gift-extra",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "gift-who",
                      children: ["🎁 ", mgCharName(), " te encontró esto:"],
                    }),
                    (0, s.jsxs)("div", {
                      className: "gift-item",
                      children: [
                        mgReg.e,
                        (0, s.jsx)("span", { className: "cr-name", children: mgReg.n }),
                      ],
                    }),
                  ],
                }),
              (0, s.jsx)("button", {
                className: "btn-pixel btn-go",
                onClick: (e) => {
                  e.stopPropagation();
                  let t = e.currentTarget.closest(".chest-overlay");
                  t && (t.style.display = "none");
                },
                children: "¡A mi álbum! ▶\ufe0e",
              }),
            ],
          }),
        }),
      mgBnOn &&
        mgBn &&
        (0, s.jsx)("div", {
          className: "chest-overlay",
          children: (0, s.jsxs)("div", {
            className: "panel brain-panel",
            children: [
              (0, s.jsx)("div", {
                className: "brain-title-line",
                children: "\ud83e\udde9 \u00a1Ronda sorpresa!",
              }),
              MG_H(mgBn[1], {
                // Escala con la banda del niño en vez de quedarse fijo en 2.
                level: mgSkillBand().id,
                onFinish: (e) => {
                  (mgSetBnOn(!1),
                    mgSetBn(null),
                    mgSetBnFlash(e ? "\u2b50 \u00a1Genial!" : "\u00a1Buen intento!"),
                    e ? v.win() : v.no(),
                    setTimeout(() => mgSetBnFlash(null), 1500));
                },
              }),
            ],
          }),
        }),
      mgBnFlash && MG_H("div", { className: "streak-cheer" }, mgBnFlash),
      (0, s.jsxs)("div", {
        className: "stack center",
        children: [
          (0, s.jsx)(d, { mood: "excited", size: 96 }),
          (0, s.jsx)("div", {
            className: "title-pixel accent",
            children: "¡Lo lograste!",
          }),
          (0, s.jsx)("div", {
            className: "big-stars",
            children: Array.from({ length: 3 }).map((e, t) =>
              (0, s.jsx)(
                "span",
                {
                  className: `bstar ${t < n ? "lit" : ""}`,
                  style: { animationDelay: `${0.25 * t}s` },
                  children: "⭐",
                },
                t,
              ),
            ),
          }),
          (0, s.jsxs)("div", {
            className: "result-line",
            children: ["Acertaste ", t, " de ", e.questions],
          }),
          (0, s.jsxs)("div", {
            className: "btn-row",
            children: [
              mgBn &&
                (0, s.jsx)("button", {
                  className: "btn-pixel btn-bonus",
                  onClick: () => mgSetBnOn(!0),
                  children: "\ud83e\udde9 \u00a1Ronda sorpresa!",
                }),
              o &&
                (0, s.jsx)("button", {
                  className: "btn-pixel btn-go",
                  onClick: r,
                  children: "Siguiente ▶\ufe0e",
                }),
              (0, s.jsx)("button", {
                className: "btn-pixel",
                onClick: l,
                children: "🗺️ Mi aventura",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function e3({
  progress: e,
  coins: t,
  daily: n,
  retoBest: a,
  practiceReady: r,
  goals: l,
  onLevel: o,
  onShop: c,
  onMastery: u,
  onReto: d,
  onPractice: p,
  onBrain: h,
  onLibre: g,
  onBack: b,
}) {
  let v = Object.values(e).filter((e) => e.done).length,
    [y] = (0, i.useState)(() => m[Math.floor(Math.random() * m.length)]);
  return (0, s.jsxs)("div", {
    className: "screen world-starwars path-screen",
    children: [
      (0, s.jsx)(eX, {}),
      (0, s.jsxs)("div", {
        className: "path-top",
        children: [
          (0, s.jsx)("button", {
            className: "link-back",
            onClick: b,
            children: "◀\ufe0e",
          }),
          (0, s.jsxs)("span", { className: "coin-pill", children: ["🪙 ", t] }),
          (0, s.jsxs)("span", {
            className: "fire-pill",
            children: ["🔥 ", n.streak],
          }),
        ],
      }),
      (0, s.jsxs)("div", {
        className: "path-scroll",
        children: [
          MG_H(
            "div",
            { className: "path-ambient", "aria-hidden": "true" },
            MG_H("span", { className: "amb amb-planet1" }, mgAmbArt("planet1")),
            MG_H("span", { className: "amb amb-planet2" }, mgAmbArt("planet2")),
            MG_H("span", { className: "amb amb-ship" }, mgAmbArt("ship")),
            MG_H("span", { className: "amb amb-comet" }, mgAmbArt("comet")),
            MG_H("span", { className: "amb amb-moon" }, mgAmbArt("moon")),
            MG_H("span", { className: "amb amb-spark" }, mgAmbArt("spark")),
          ),
          (0, s.jsxs)("div", {
            className: "path-header",
            children: [
              (0, s.jsx)("div", {
                className: "title-pixel path-title",
                children: "Camino galáctico",
              }),
              (0, s.jsxs)("div", {
                className: "path-sub",
                children: [v, " de ", en.length, " niveles conquistados"],
              }),
            ],
          }),
          (0, s.jsx)(f, { mood: "happy", text: y, size: 64 }),
          (0, s.jsxs)("div", {
            className: `goals-card ${l.claimed ? "done" : ""}`,
            children: [
              (0, s.jsx)("span", {
                className: "gc-title",
                children: l.claimed
                  ? "🏆 ¡Meta de hoy cumplida!"
                  : "📌 Meta de hoy",
              }),
              (0, s.jsxs)("div", {
                className: "gc-items",
                children: [
                  (0, s.jsxs)("span", {
                    className: `gc-item ${l.path >= 2 ? "ok" : ""}`,
                    children: ["🗺️ ", Math.min(l.path, 2), "/", 2, " niveles"],
                  }),
                  (0, s.jsxs)("span", {
                    className: `gc-item ${l.practice >= 1 ? "ok" : ""}`,
                    children: [
                      "🧠 ",
                      Math.min(l.practice, 1),
                      "/",
                      1,
                      " repaso",
                    ],
                  }),
                  (0, s.jsxs)("span", {
                    className: `gc-item ${l.brain >= 1 ? "ok" : ""}`,
                    children: ["🧩 ", Math.min(l.brain, 1), "/", 1, " lógica"],
                  }),
                ],
              }),
              !l.claimed &&
                (0, s.jsxs)("span", {
                  className: "gc-bonus",
                  children: ["premio: 🪙 +", 15],
                }),
            ],
          }),
          et.map((t, n) => {
            let a = en.filter((e) => e.world === n),
              r = a.some((t) => es(t.id, e));
            return (0, s.jsxs)(
              "div",
              {
                className: `world-section aws-${t.bg} ${!r ? "ws-locked" : ""}`,
                children: [
                  (0, s.jsxs)("div", {
                    className: "world-banner",
                    children: [
                      (0, s.jsx)("span", {
                        className: "wb-emoji",
                        children: t.emoji,
                      }),
                      (0, s.jsxs)("span", {
                        className: "wb-name",
                        children: ["Mundo ", n + 1, ": ", t.name],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "node-column",
                    children: [
                      MG_H(
                        "svg",
                        {
                          className: "path-curve",
                          viewBox: `0 0 100 ${a.length * 10}`,
                          preserveAspectRatio: "none",
                          "aria-hidden": "true",
                        },
                        MG_H("path", {
                          className: "path-curve-line",
                          d: mgPathCurve(a.length),
                        }),
                      ),
                      ...a.map((t, n) => {
                      let a = e[t.id],
                        r = es(t.id, e),
                        l = r && !a?.done,
                        i = "boss" === t.kind;
                      return (0, s.jsxs)(
                        "div",
                        {
                          className: `node-wrap ${n % 2 == 0 ? "nleft" : "nright"}`,
                          children: [
                            (0, s.jsxs)("button", {
                              className: `level-node ${i ? "boss" : ""} ${!r ? "locked" : a?.done ? "done" : "next"}`,
                              disabled: !r,
                              onClick: () => o(t),
                              children: [
                                (0, s.jsx)("span", {
                                  className: "node-emoji",
                                  children: r ? mgLevelFace(t) : "🔒",
                                }),
                                l &&
                                  (0, s.jsx)("span", {
                                    className: "node-pulse",
                                  }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: "node-label",
                              children: [
                                (0, s.jsx)("span", {
                                  className: "nl-name",
                                  children: t.name,
                                }),
                                a?.done &&
                                  (0, s.jsxs)("span", {
                                    className: "nl-stars",
                                    children: [
                                      "⭐".repeat(a.stars),
                                      "☆".repeat(3 - a.stars),
                                    ],
                                  }),
                                l &&
                                  (0, s.jsx)("span", {
                                    className: "nl-next",
                                    children: "▶\ufe0e ¡siguiente!",
                                  }),
                              ],
                            }),
                          ],
                        },
                        t.id,
                      );
                    }),
                    ],
                  }),
                ],
              },
              t.id,
            );
          }),
          v === en.length &&
            (0, s.jsx)("div", {
              className: "galaxy-complete",
              children: "👑 ¡Conquistaste toda la galaxia! 👑",
            }),
        ],
      }),
    ],
  });
}
function e5({ level: e, progress: t, inv: n, onStart: a, onBack: r }) {
  let [l, o] = (0, i.useState)({ potion: !1, shield: !1, lens: 0, retry: 0 }),
    c = t[e.id]?.done,
    u = et[e.world],
    d = "boss" === e.kind,
    concept = mgConceptOf(e),
    [showLesson, setShowLesson] = (0, i.useState)(
      () => !!concept && !mgLessonSeen(concept),
    );
  if (showLesson)
    return MG_H(MgLeccion, {
      concept: concept,
      bg: u.bg,
      onDone: () => (mgMarkLesson(concept), setShowLesson(!1)),
      onSkip: () => (mgMarkLesson(concept), setShowLesson(!1)),
    });
  return (0, s.jsxs)("div", {
    className: `screen world-${u.bg}`,
    children: [
      (0, s.jsx)(eX, {}),
      (0, s.jsxs)("div", {
        className: "panel prelevel",
        children: [
          (0, s.jsx)("button", {
            className: "link-back",
            onClick: r,
            children: "◀\ufe0e Camino",
          }),
          (0, s.jsx)("div", { className: "pl-emoji", children: mgLevelFace(e) }),
          (0, s.jsxs)("h2", {
            className: "panel-title",
            children: [d ? "⚠️ " : "", e.name],
          }),
          (0, s.jsxs)("div", {
            className: "pl-info",
            children: [
              e.questions,
              " retos · pasa con ",
              e.passAt,
              " aciertos · ❤️❤️❤️",
            ],
          }),
          concept &&
            (0, s.jsx)("button", {
              className: "pl-howto",
              onClick: () => setShowLesson(!0),
              children: "🐶 ¿Cómo funciona?",
            }),
          c &&
            (0, s.jsx)("div", {
              className: "pl-replay-warn",
              children:
                "Ya conquistaste este nivel. Repetirlo da pocas monedas, ¡el siguiente nivel paga mucho más! 🪙",
            }),
          d &&
            !c &&
            (0, s.jsx)("div", {
              className: "pl-boss-warn",
              children: "Nivel de jefe: ¡más retos y más recompensa! 🏆",
            }),
          (0, s.jsxs)("div", {
            className: "pl-items",
            children: [
              (0, s.jsx)("div", {
                className: "pl-items-title",
                children: "Equípate antes de despegar:",
              }),
              er.map((e) => {
                let t = n[e.id],
                  isCount = "lens" === e.id || "retry" === e.id,
                  a = isCount ? l[e.id] > 0 : l[e.id];
                return (0, s.jsxs)(
                  "button",
                  {
                    className: `pl-item ${a ? "on" : ""} ${0 === t ? "none" : ""}`,
                    disabled: 0 === t,
                    onClick: () =>
                      o((n) =>
                        isCount
                          ? { ...n, [e.id]: n[e.id] > 0 ? 0 : Math.min(2, t) }
                          : { ...n, [e.id]: !n[e.id] },
                      ),
                    children: [
                      (0, s.jsx)("span", {
                        className: "pli-emoji",
                        children: e.emoji,
                      }),
                      (0, s.jsxs)("span", {
                        className: "pli-body",
                        children: [
                          (0, s.jsxs)("span", {
                            className: "pli-name",
                            children: [
                              e.name,
                              " ",
                              (0, s.jsxs)("b", { children: ["×", t] }),
                            ],
                          }),
                          (0, s.jsx)("span", {
                            className: "pli-desc",
                            children: e.desc,
                          }),
                        ],
                      }),
                      (0, s.jsx)("span", {
                        className: "pli-check",
                        children: a ? "✅" : "",
                      }),
                    ],
                  },
                  e.id,
                );
              }),
              (0, s.jsx)("div", {
                className: "pl-shop-tip",
                children: "¿Sin ítems? Cómpralos con monedas en la 🏪 tienda",
              }),
            ],
          }),
          (0, s.jsx)("button", {
            className: "btn-pixel btn-go",
            onClick: () => a(l),
            children: "🚀 ¡Despegar!",
          }),
        ],
      }),
    ],
  });
}
function e4({ value: e, onKey: t, onClear: n, onEnter: a, disabled: r }) {
  return (0, s.jsxs)("div", {
    className: "numpad",
    children: [
      ["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((e) =>
        (0, s.jsx)(
          "button",
          {
            className: "np-key",
            disabled: r,
            onClick: () => t(e),
            children: e,
          },
          e,
        ),
      ),
      (0, s.jsx)("button", {
        className: "np-key np-clear",
        disabled: r,
        onClick: n,
        children: "⌫",
      }),
      (0, s.jsx)("button", {
        className: "np-key",
        disabled: r,
        onClick: () => t("0"),
        children: "0",
      }),
      (0, s.jsx)("button", {
        className: "np-key np-enter",
        disabled: r || 0 === e.length,
        onClick: a,
        children: "✓",
      }),
    ],
  });
}
function e6({ h: e, m: t, size: n = 150 }) {
  let a = ((e % 12) + t / 60) * 30,
    r = 6 * t;
  return (0, s.jsxs)("svg", {
    width: n,
    height: n,
    viewBox: "0 0 100 100",
    className: "clock-face",
    children: [
      (0, s.jsx)("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#fffbe8",
        stroke: "#2a2050",
        strokeWidth: "4",
      }),
      Array.from({ length: 12 }).map((e, t) => {
        let n = (t + 1) * 30 * (Math.PI / 180),
          a = 50 + 36 * Math.sin(n),
          r = 50 - 36 * Math.cos(n);
        return (0, s.jsx)(
          "text",
          {
            x: a,
            y: r + 3.5,
            textAnchor: "middle",
            fontSize: "9.5",
            fontWeight: "800",
            fill: "#2a2050",
            children: t + 1,
          },
          t,
        );
      }),
      (0, s.jsx)("line", {
        x1: "50",
        y1: "50",
        x2: 50 + 20 * Math.sin((a * Math.PI) / 180),
        y2: 50 - 20 * Math.cos((a * Math.PI) / 180),
        stroke: "#e83a3a",
        strokeWidth: "5",
        strokeLinecap: "round",
      }),
      (0, s.jsx)("line", {
        x1: "50",
        y1: "50",
        x2: 50 + 31 * Math.sin((r * Math.PI) / 180),
        y2: 50 - 31 * Math.cos((r * Math.PI) / 180),
        stroke: "#2a2050",
        strokeWidth: "3.5",
        strokeLinecap: "round",
      }),
      (0, s.jsx)("circle", { cx: "50", cy: "50", r: "3", fill: "#2a2050" }),
    ],
  });
}
function e8({
  level: e,
  equipped: t,
  facts: n,
  setFacts: a,
  onDone: r,
  onQuit: l,
}) {
  let o = 3 + +!!t.potion,
    [c, u] = (0, i.useState)(o),
    [f, m] = (0, i.useState)(t.shield),
    [p, h] = (0, i.useState)(t.lens),
    [mgRetry, mgSetRetry] = (0, i.useState)(t.retry || 0),
    [g, b] = (0, i.useState)(!1),
    [y, x] = (0, i.useState)(0),
    k = (0, i.useRef)(n),
    [j, w] = (0, i.useState)(() => e_(e, k.current, 0)),
    [N, S] = (0, i.useState)("write"),
    [C, E] = (0, i.useState)([]),
    [$, z] = (0, i.useState)(0),
    [T, M] = (0, i.useState)(""),
    [_, P] = (0, i.useState)(null),
    [A, L] = (0, i.useState)(null),
    [q, R] = (0, i.useState)(null),
    [D, F] = (0, i.useState)(0),
    [O, I] = (0, i.useState)(""),
    [U, B] = (0, i.useState)("ask"),
    [Q, H] = (0, i.useState)(0),
    [W, V] = (0, i.useState)(0),
    [K, G] = (0, i.useState)(null),
    [Y, X] = (0, i.useState)([]),
    [J, Z] = (0, i.useState)(25),
    [mgStreak, mgSetStreak] = (0, i.useState)(0),
    [mgFrozen, mgSetFrozen] = (0, i.useState)(!1),
    mgFreezePend = (0, i.useRef)(!1),
    mgSinceFreeze = (0, i.useRef)(0),
    mgFreezeGoal = (0, i.useRef)(2),
    mgFastRef = (0, i.useRef)(!1),
    [mgStar, mgSetStar] = (0, i.useState)(0),
    [mgMax, mgSetMax] = (0, i.useState)(25),
    [mgCheer, mgSetCheer] = (0, i.useState)(null),
    mgCheerT = (0, i.useRef)(null),
    ee = (0, i.useRef)(null),
    en = (0, i.useRef)(null),
    ea = (0, i.useRef)(!1),
    er = et[e.world],
    el = "chain" === j.kind,
    es = (t) => {
      if ((L(null), R(null), "chain" === t.kind || "salto" === t.kind))
        return void S("write");
      if ("parity" === t.kind) return void S("parity");
      if ("reparto" === t.kind) return void S("write");
      if ("sumaobj" === t.kind) return void S("write");
      if ("arreglo" === t.kind) return void S("write");
      if ("balanza" === t.kind) return void S("write");
      if ("hora" === t.kind) return void S("write");
      if ("resto" === t.kind || "fracnum" === t.kind || "redondeo" === t.kind)
        return 0.65 > Math.random()
          ? void S("write")
          : (S("falling"), void E(eL(t.answer)));
      if (
        e.world >= 2 &&
        ["multiplication", "division", "addition", "subtraction"].includes(
          t.kind,
        ) &&
        0.16 > Math.random()
      ) {
        let e = (function (e, t) {
          let n = t.match(/\d+/g)?.map(Number);
          if (!n || n.length < 2) return null;
          let [a, r] = n,
            l = (e) => e[Math.floor(Math.random() * e.length)];
          return "multiplication" === e
            ? l([
                `${mgCharName()} esconde ${a} ${mgTreat()} en cada caja y tiene ${r} cajas. \xbfCu\xe1ntos ${mgTreat()} hay en total?`,
                `Cada nave lleva ${a} tripulantes y despegan ${r} naves. \xbfCu\xe1ntos tripulantes viajan?`,
                `Sonic junta ${a} anillos en cada vuelta y da ${r} vueltas. \xbfCu\xe1ntos anillos junta?`,
                `Steve construye ${r} torres con ${a} bloques cada una. \xbfCu\xe1ntos bloques usa?`,
              ])
            : "division" === e
              ? l([
                  `${mgCharName()} reparte ${a} galletas entre ${r} amigos por igual. \xbfCu\xe1ntas le tocan a cada uno?`,
                  `Hay ${a} diamantes para guardar en ${r} cofres iguales. \xbfCu\xe1ntos van en cada cofre?`,
                  `${a} clones se forman en ${r} filas iguales. \xbfCu\xe1ntos hay por fila?`,
                ])
              : "addition" === e
                ? l([
                    `${mgCharName()} tiene ${a} ${mgTreat()} y encuentra ${r} m\xe1s. \xbfCu\xe1ntos tiene ahora?`,
                    `Sonic ten\xeda ${a} anillos y gan\xf3 ${r} en el nivel. \xbfCu\xe1ntos anillos tiene?`,
                  ])
                : "subtraction" === e
                  ? l([
                      `${mgCharName()} ten\xeda ${a} croquetas y se comi\xf3 ${r}. \xbfCu\xe1ntas quedan?`,
                      `Hab\xeda ${a} bloques y un creeper explot\xf3 ${r}. \xbfCu\xe1ntos quedan?`,
                    ])
                  : null;
        })(t.kind, t.prompt);
        if (e) {
          (M(e), S("problema"));
          return;
        }
      }
      if ("sequence" === t.kind)
        return 0.6 > Math.random()
          ? void S("write")
          : (S("falling"), void E(eL(t.answer)));
      let n = e.world,
        a = Math.random();
      if (0 === n) return void S("write");
      if (1 === n)
        return a < 0.65
          ? void S("write")
          : (S("falling"), void E(eL(t.answer)));
      if (2 === n) {
        if (a < 0.45) return void S("write");
        if (a < 0.72) {
          (S("falling"), E(eL(t.answer)));
          return;
        }
        return (S("tf"), void z(eq(t.answer)));
      }
      if (a < 0.4) return void S("write");
      if (a < 0.6) {
        (S("falling"), E(eL(t.answer)));
        return;
      }
      if (a < 0.8) {
        (S("tf"), z(eq(t.answer)));
        return;
      }
      let r = 0,
        l = e_(e, k.current, 0);
      for (
        ;
        (void 0 === l.kind || l.answer === t.answer || !("prompt" in l)) &&
        r < 10;
      )
        ((l = e_(e, k.current, 0)), r++);
      "number" == typeof l.answer && "prompt" in l && l.answer !== t.answer
        ? (S("mayor"), P({ prompt: l.prompt, value: l.answer }))
        : S("write");
    };
  (0, i.useEffect)(() => {
    es(j);
    mgSetMax(mgTimeFor(j));
  }, []);
  let ei = "",
    eo = 0,
    ec = "";
  if (el) {
    let e = 0 === D ? j.start : j.stages[D - 1].running;
    ((ei = `${e} ${j.stages[D].label} = ?`),
      (eo = j.stages[D].running),
      (ec =
        "Ve paso a paso: guarda el resultado en tu mente y aplica la siguiente operación."));
  } else ((ei = `${j.prompt} = ?`), (eo = j.answer), (ec = j.hint));
  let eu = () => {
    (ee.current && clearInterval(ee.current),
      en.current && clearTimeout(en.current));
  };
  ((0, i.useEffect)(() => () => eu(), []),
    (0, i.useEffect)(() => {
      if ("ask" === U) {
        if (mgFrozen) return void Z(mgMax);
        return (
          Z(mgMax),
          (ee.current = setInterval(() => {
            Z((e) => (e <= 1 ? (clearInterval(ee.current), 0) : e - 1));
          }, 1e3)),
          () => {
            ee.current && clearInterval(ee.current);
          }
        );
      }
    }, [y, D, U, mgFrozen, mgMax]));
  // Tiempo agotado: nunca cuenta como respuesta incorrecta (el tiempo no
  // resta corazones). Si lo tecleado es correcto se acredita; si no, pasa
  // al estado "timeout" sin castigo.
  (0, i.useEffect)(() => {
    if (0 !== J || "ask" !== U || mgFrozen || ea.current) return;
    let e =
      ("write" === N || "problema" === N) &&
      O.length > 0 &&
      parseInt(O, 10) === eo;
    em(e, !0);
  }, [J]);
  let ed = (0, i.useCallback)(
      (n, a, l, s) => {
        let i = n >= e.passAt && s > 0,
          o = n / e.questions,
          c = i ? ("boss" === e.kind ? (s >= 3 ? 3 : 2 === s ? 2 : 1) : eG(o)) : 0;
        r({
          passed: i,
          correct: n,
          runCoins: a,
          stars: c,
          missed: l,
          usedLens: t.lens - p,
          usedRetry: (t.retry || 0) - mgRetry,
        });
      },
      [e, r, t.lens, p, t.retry, mgRetry],
    ),
    ef = (0, i.useCallback)(
      (t, n, a, r) => {
        let l = y + 1;
        if (("boss" === e.kind && t >= e.passAt) || l >= e.questions || r <= 0)
          return void ed(t, n, a, r);
        let s = e_(e, k.current, l);
        e.world >= 2 &&
          e.kind !== "boss" &&
          Math.random() < 0.2 &&
          (s = mgWarmup());
        // El gato regala segundos. Ojo: agotar el tiempo ya no resta corazones,
        // así que esto no salva vidas — reduce la pregunta sin crédito y la prisa.
        let mgBase =
          mgTimeFor(s) +
          (mgFastRef.current ? 5 : 0) +
          ("tiempo" === mgPerkKey() ? 4 : 0);
        ((mgFastRef.current = !1),
          mgSetMax(mgBase),
          mgSetStar((v) => Math.max(0, v - 1)));
        (mgSetFrozen(mgFreezePend.current),
          (mgFreezePend.current = !1),
          x(l),
          F(0),
          w(s),
          es(s),
          I(""),
          B("ask"),
          b(!1),
          (ea.current = !1));
      },
      [y, e, ed],
    );
  let mgPugRef = (0, i.useRef)(!1); // el pug ya salvó en este nivel
  /* Potenciador del pug. Va ANTES del escudo a propósito: si salva, el
     escudo comprado sigue guardado para después. Una sola vez por nivel,
     para que siga importando acertar. La probabilidad sube mucho con un
     corazón porque es justo donde un niño abandona. */
  function mgApplyMiss() {
    if ("escudo" === mgPerkKey() && !mgPugRef.current) {
      let prob = c <= 1 ? 0.7 : 0.18;
      if (Math.random() < prob) {
        ((mgPugRef.current = !0), B("pugsave"));
        return;
      }
    }
    f ? (m(!1), B("shielded")) : (u((e) => e - 1), B("wrong"));
  }
  function em(e, mgIsTimeout = !1) {
    if ((e ? v.ok() : v.no(), ea.current)) return;
    ((ea.current = !0), eu());
    let n = Y;
    if (!el) {
      let t = eP(k.current, j.factKey, e);
      if (((k.current = t), a(t), !e && "add" !== j.factKey)) {
        let [e, t] = j.factKey.split("x"),
          a =
            "division" === j.kind
              ? `${Number(e) * Number(t)}\xf7${e}`
              : `${e}\xd7${t}`;
        Y.includes(a) || X((n = [...Y, a]));
      }
    }
    if (e) {
      let ns = mgStreak + 1;
      mgSetStreak(ns);
      let cheer = mgStreakCheer(ns);
      if (cheer) {
        (mgSetCheer(cheer),
          mgCheerT.current && clearTimeout(mgCheerT.current),
          (mgCheerT.current = setTimeout(() => mgSetCheer(null), 1600)));
      }
      /* El acierto de una pregunta YA congelada no cuenta para el siguiente
         congelado. Antes sí contaba, así que en cuanto el niño encadenaba
         aciertos se congelaba una de cada dos o tres preguntas y el reloj
         dejaba de significar nada — un premio siempre encendido deja de ser
         premio. Y con la meta en 1 quedaba congelado de forma permanente. */
      mgFrozen || (mgSinceFreeze.current += 1);
      if (mgOn("freeze") && !mgFrozen && mgSinceFreeze.current >= mgFreezeGoal.current) {
        ((mgFreezePend.current = !0),
          (mgSinceFreeze.current = 0),
          (mgFreezeGoal.current =
            "tiempo" === mgPerkKey()
              ? Math.random() < 0.5
                ? 2
                : 3
              : Math.random() < 0.5
                ? 3
                : 4));
      }
      let mgGotStar = !1;
      0 === mgStar &&
        (ns >= 6 && ns % 6 == 0
          ? (mgSetStar(5), (mgGotStar = !0))
          : Math.random() < 0.05 && (mgSetStar(5), (mgGotStar = !0)));
      let e = J > mgMax * 0.6;
      mgFastRef.current = e;
      let t = 2 + +!!e + ("monedas" === mgPerkKey() ? 1 : 0),
        a = W + t;
      if (
        (V(a),
        G(
          mgGotStar
            ? "⭐ \xa1Superestrella!"
            : `+${t} \u{1FA99}${e ? " ¡veloz!" : ""}`,
        ),
        setTimeout(() => G(null), mgGotStar ? 1200 : 900),
        B("right"),
        el && D < j.stages.length - 1)
      )
        en.current = setTimeout(() => {
          (F((e) => e + 1), I(""), B("ask"), (ea.current = !1));
        }, 850);
      else {
        let e = Q + 1;
        (H(e), (en.current = setTimeout(() => ef(e, a, n, c), 950)));
      }
    } else if (mgIsTimeout)
      (mgSetStreak(0), (mgSinceFreeze.current = 0), B("timeout"));
    else
      (mgSetStreak(0),
        (mgSinceFreeze.current = 0),
        mgStar > 0
          ? B("starred")
          : mgRetry > 0
            ? B("retryoffer")
            : mgApplyMiss());
  }
  let ep = (e) => {
      em(($ === eo) === e);
    },
    eh = (e) => {
      em((0 === eo) === e);
    },
    eg = (e) => {
      _ && (L(e), em(("a" === e ? eo : _.value) > ("a" === e ? _.value : eo)));
    },
    eb = Math.min(100, (J / mgMax) * 100),
    ev = el ? null : j,
    mgColNums =
      ev && ("addition" === ev.kind || "subtraction" === ev.kind)
        ? (ev.prompt || "").match(/\d+/g)
        : null,
    mgUseColumn =
      !!mgColNums &&
      2 === mgColNums.length &&
      Math.max(+mgColNums[0], +mgColNums[1]) >= 10,
    mgColOp = ev && "subtraction" === ev.kind ? "−" : "+",
    ey = () =>
      "parity" === N && ev
        ? `${ev.prompt} es ${0 === ev.answer ? "par" : "impar"}`
        : "tf" === N && ev
          ? $ === ev.answer
            ? `¡Era verdadero! ${ev.prompt} = ${ev.answer}`
            : `Era falso: ${ev.prompt} = ${ev.answer}, no ${$}`
          : "mayor" === N && ev && _
            ? `${ev.prompt} = ${ev.answer} y ${_.prompt} = ${_.value}`
            : `La respuesta es ${eo}`;
  return (0, s.jsxs)("div", {
    className: `screen world-${er.bg}`,
    children: [
      (0, s.jsx)(eX, {}),
      mgCheer && MG_H("div", { className: "streak-cheer" }, mgCheer),
      (0, s.jsxs)("div", {
        className: "adv-hud",
        children: [
          (0, s.jsx)("button", {
            className: "hud-quit",
            onClick: l,
            children: "✕",
          }),
          (0, s.jsxs)("span", {
            className: "hud-item",
            children: [e.emoji, " ", y + 1, "/", e.questions],
          }),
          MG_H(
            "span",
            { className: "hud-item hearts" },
            ...Array.from({ length: c }, (_, hi) => MG_H("span", { key: "h" + hi, className: "hud-ic" }, mgIcon("heart", 15))),
            ...Array.from({ length: Math.max(0, o - c) }, (_, hi) => MG_H("span", { key: "e" + hi, className: "hud-ic" }, mgIcon("heartEmpty", 15))),
          ),
          f && MG_H("span", { className: "hud-item hud-ic" }, mgIcon("shield", 16)),
          mgStar > 0 &&
            MG_H("span", { className: "hud-item star" }, mgIcon("star", 15), " " + mgStar),
          MG_H("span", { className: "hud-item coins" }, mgIcon("coin", 16), " " + W),
          mgStreak >= 1 &&
            (() => {
              let ready = mgSinceFreeze.current + 1 >= mgFreezeGoal.current;
              return MG_H(
                "span",
                { className: "hud-item streak" + (ready ? " ready" : "") },
                mgIcon("fire", 15),
                " " + mgStreak + (ready ? " ❄️" : ""),
              );
            })(),
        ],
      }),
      "boss" === e.kind &&
        (() => {
          let hurt = "wrong" === U || "shielded" === U,
            _pug = "pugsave" === U,
            hp = Math.max(0, e.passAt - Q),
            frac = hp / e.passAt,
            defeated = 0 === hp,
            bossName = e.name.replace(/^[^:]*:\s*/, ""),
            hue = (53 * e.world + 350) % 360,
            bshape = "boss-shape-" + (e.world % 3);
          return MG_H(
            "div",
            {
              className: "boss-arena" + (defeated ? " victory" : ""),
              style: { "--bh": hue },
            },
            MG_H("div", { className: "arena-floor" }),
            MG_H(
              "div",
              { className: "duel-row" },
              MG_H(
                "div",
                {
                  className:
                    "champ turbo-champ" +
                    (hurt ? " hurt" : "") +
                    ("right" === U ? " cheer" : "") +
                    (defeated ? " win" : ""),
                },
                MG_H(d, {
                  mood: hurt ? "sad" : "right" === U ? "excited" : "happy",
                  size: 56,
                }),
                MG_H("div", { className: "champ-name" }, mgCharName()),
              ),
              MG_H(
                "div",
                { className: "duel-spark" + ("right" === U ? " boom" : "") },
                "right" === U ? "💥" : "⚔️",
              ),
              MG_H(
                "div",
                {
                  className:
                    "champ boss-champ" +
                    ("right" === U ? " boss-hit" : "") +
                    (hurt ? " boss-attack" : "") +
                    (defeated ? " defeated" : ""),
                },
                MG_H(
                  "div",
                  { className: "boss-orb " + bshape },
                  MG_H("div", { className: "boss-ring" }),
                  MG_H(
                    "div",
                    { className: "boss-particles" },
                    MG_H("span", { className: "bp bp1" }),
                    MG_H("span", { className: "bp bp2" }),
                    MG_H("span", { className: "bp bp3" }),
                  ),
                  MG_H("div", { className: "boss-aura" }),
                  MG_H("span", { className: "boss-face-big" }, mgLevelFace(e)),
                  MG_H("div", { className: "boss-burst" }, "💥"),
                  "right" === U &&
                    MG_H("div", { className: "damage-float" }, "−1"),
                ),
                MG_H("div", { className: "champ-name boss-name" }, bossName),
              ),
            ),
            "right" === U &&
              !defeated &&
              MG_H("div", { className: "attack-name" }, mgAttackName(j.kind)),
            defeated &&
              MG_H("div", { className: "victory-banner" }, "🏆 ¡Jefe derrotado!"),
            MG_H(
              "div",
              { className: "boss-hp-wrap" },
              MG_H(
                "div",
                { className: "boss-hp-label" },
                "❤️ Vida del jefe · " + hp + "/" + e.passAt,
              ),
              MG_H(
                "div",
                { className: "boss-hp-track" + (frac <= 0.34 ? " low" : "") },
                MG_H("div", {
                  className: "boss-hp-fill",
                  style: { width: frac * 100 + "%" },
                }),
              ),
            ),
          );
        })(),
      "boss" !== e.kind &&
        (() => {
          let paso = mgMinionAt(mgMinionOrden(e.id), Q),
            justBeat = "right" === U && !!paso.prev,
            mn = justBeat ? paso.prev : paso.mn,
            mHp = mn.hp || MG_MINION_HP,
            hit = "right" === U,
            shownHp = justBeat ? 0 : paso.resta;
          return MG_H(
            "div",
            { className: "minion-strip" + (justBeat ? " beat" : "") },
            MG_H(
              "div",
              { className: "mini-champ" + (hit ? " cheer" : "") },
              MG_H(d, { mood: hit ? "excited" : "happy", size: 40 }),
            ),
            MG_H(
              "div",
              { className: "mini-spark" + (hit ? " boom" : "") },
              hit ? "💥" : "⚔️",
            ),
            MG_H(
              "div",
              { className: "mini-foe" + (justBeat ? " down" : hit ? " hurt" : "") },
              MG_H("span", { className: "mini-foe-emoji" }, justBeat ? "💫" : mn.emoji),
              MG_H(
                "div",
                { className: "mini-hp" },
                ...Array.from({ length: mHp }).map((_, i) =>
                  MG_H(
                    "span",
                    { key: i, className: "mini-pip" + (i < shownHp ? " full" : "") },
                    mgIcon(i < shownHp ? "heart" : "heartEmpty", 14),
                  ),
                ),
              ),
            ),
            MG_H(
              "div",
              { className: "mini-label" },
              justBeat ? "¡" + mn.name + " derrotado! 🎉" : mn.name,
            ),
          );
        })(),
      (0, s.jsx)("div", {
        className: `timer-track ${mgFrozen ? "frozen" : ""}`,
        children: (0, s.jsx)("div", {
          className: "timer-fill",
          style: {
            width: mgFrozen ? "100%" : `${eb}%`,
            background: mgFrozen
              ? "linear-gradient(90deg,#7fdfff,#b6f0ff)"
              : eb > 50
                ? "#4ade80"
                : eb > 25
                  ? "#ffcc00"
                  : "#ff6b57",
          },
        }),
      }),
      (0, s.jsx)("div", {
        className: "timer-note",
        children: mgFrozen
          ? "❄️ ¡Tiempo congelado! Respira y responde con calma."
          : "⏱️ responde rápido y gana más monedas",
      }),
      (0, s.jsxs)("div", {
        className: `q-card ${"wrong" === U ? "shake" : ""}`,
        children: [
          K && (0, s.jsx)("div", { className: "coin-pop", children: K }),
          el &&
            (0, s.jsxs)("div", {
              className: "chain-progress",
              children: ["paso ", D + 1, " de ", j.stages.length],
            }),
          "write" === N &&
            (0, s.jsxs)(s.Fragment, {
              children: [
                ev?.clock && (0, s.jsx)(e6, { h: ev.clock.h, m: ev.clock.m }),
                "reparto" === ev?.kind &&
                  (0, s.jsx)(
                    MgReparto,
                    {
                      total: ev.total,
                      groups: ev.groups,
                      item: ev.item,
                      who: ev.who,
                    },
                    "rep" + y,
                  ),
                "sumaobj" === ev?.kind &&
                  (0, s.jsx)(
                    MgSumaObjetos,
                    { a: ev.a, b: ev.b, itemA: ev.itemA, itemB: ev.itemB },
                    "so" + y,
                  ),
                "arreglo" === ev?.kind &&
                  (0, s.jsx)(
                    MgArreglo,
                    { rows: ev.rows, cols: ev.cols, item: ev.item },
                    "ar" + y,
                  ),
                "balanza" === ev?.kind &&
                  (0, s.jsx)(
                    MgBalanza,
                    { a: ev.a, b: ev.b, known: ev.known },
                    "ba" + y,
                  ),
                mgUseColumn
                  ? (0, s.jsx)(
                      MgColumna,
                      {
                        a: mgColNums[0],
                        b: mgColNums[1],
                        op: mgColOp,
                        typed: O,
                      },
                      "col" + y,
                    )
                  : (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)("div", {
                          className: `q-prompt ${ev?.clock ? "clock-prompt" : ""}`,
                          children: ei,
                        }),
                        (0, s.jsx)("div", {
                          className: "q-input-display",
                          children: O || "_",
                        }),
                      ],
                    }),
              ],
            }),
          "falling" === N &&
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("div", {
                  className: "pres-label",
                  children: "☄️ Toca el número correcto",
                }),
                (0, s.jsx)("div", { className: "q-prompt", children: ei }),
              ],
            }),
          "tf" === N &&
            ev &&
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("div", {
                  className: "pres-label",
                  children: "🤔 ¿Verdadero o falso?",
                }),
                (0, s.jsxs)("div", {
                  className: "q-prompt",
                  children: [ev.prompt, " = ", $],
                }),
              ],
            }),
          "parity" === N &&
            ev &&
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("div", {
                  className: "pres-label",
                  children: "🎭 ¿Par o impar?",
                }),
                (0, s.jsx)("div", {
                  className: "q-prompt parity-number",
                  children: ev.prompt,
                }),
              ],
            }),
          "problema" === N &&
            ev &&
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("div", {
                  className: "pres-label",
                  children: "📖 Problema de " + mgCharName(),
                }),
                (0, s.jsx)("div", { className: "problema-text", children: T }),
                (0, s.jsx)("div", {
                  className: "q-input-display",
                  children: O || "_",
                }),
              ],
            }),
          "mayor" === N &&
            ev &&
            _ &&
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("div", {
                  className: "pres-label",
                  children: "⚖️ Toca la operación mayor",
                }),
                (0, s.jsxs)("div", {
                  className: "mayor-row",
                  children: [
                    (0, s.jsx)("button", {
                      className: `mayor-card ${"a" === A ? ("right" === U ? "ok" : "ask" !== U ? "no" : "") : ""}`,
                      disabled: "ask" !== U,
                      onClick: () => eg("a"),
                      children: ev.prompt,
                    }),
                    (0, s.jsx)("span", {
                      className: "mayor-vs",
                      children: "vs",
                    }),
                    (0, s.jsx)("button", {
                      className: `mayor-card ${"b" === A ? ("right" === U ? "ok" : "ask" !== U ? "no" : "") : ""}`,
                      disabled: "ask" !== U,
                      onClick: () => eg("b"),
                      children: _.prompt,
                    }),
                  ],
                }),
              ],
            }),
          g &&
            "ask" === U &&
            (0, s.jsxs)("div", {
              className: "hint-box lens-hint",
              children: ["🔍 ", ec],
            }),
          "right" === U &&
            (0, s.jsxs)("div", {
              className: "q-feedback ok pug-feedback",
              children: [
                (0, s.jsx)(d, { mood: "excited", size: 46 }),
                " ¡Correcto!",
              ],
            }),
          "retryoffer" === U &&
            (0, s.jsx)("div", {
              className: "q-feedback shieldmsg",
              children: (0, s.jsx)("div", {
                className: "wrong-answer",
                children:
                  "🔄 ¡Ups! ¿Quieres usar un doble intento y volver a probar esta pregunta?",
              }),
            }),
          "pugsave" === U &&
            (0, s.jsxs)("div", {
              className: "q-feedback pugmsg",
              children: [
                (0, s.jsxs)("div", {
                  className: "wrong-answer",
                  children: [
                    `${mgCharDef().emoji} ¡${mgCharName()} te salvó! `,
                    ey(),
                  ],
                }),
                ec &&
                  (0, s.jsxs)("div", {
                    className: "hint-box",
                    children: ["💡 ", ec],
                  }),
              ],
            }),
          "shielded" === U &&
            (0, s.jsxs)("div", {
              className: "q-feedback shieldmsg",
              children: [
                (0, s.jsxs)("div", {
                  className: "wrong-answer",
                  children: ["🛡️ ¡El escudo te protegió! ", ey()],
                }),
                ec &&
                  (0, s.jsxs)("div", {
                    className: "hint-box",
                    children: ["💡 ", ec],
                  }),
              ],
            }),
          "starred" === U &&
            (0, s.jsxs)("div", {
              className: "q-feedback shieldmsg",
              children: [
                (0, s.jsxs)("div", {
                  className: "wrong-answer",
                  children: ["⭐ ¡La superestrella te protegió! ", ey()],
                }),
                ec &&
                  (0, s.jsxs)("div", {
                    className: "hint-box",
                    children: ["💡 ", ec],
                  }),
              ],
            }),
          "wrong" === U &&
            (0, s.jsxs)("div", {
              className: "q-feedback no",
              children: [
                (0, s.jsxs)("div", {
                  className: "pug-feedback",
                  children: [
                    (0, s.jsx)(d, { mood: "sad", size: 46 }),
                    (0, s.jsx)("span", {
                      className: "wrong-answer",
                      children: ey(),
                    }),
                  ],
                }),
                ec &&
                  (0, s.jsxs)("div", {
                    className: "hint-box",
                    children: ["💡 ", ec],
                  }),
              ],
            }),
          "timeout" === U &&
            (0, s.jsxs)("div", {
              className: "q-feedback shieldmsg",
              children: [
                (0, s.jsxs)("div", {
                  className: "wrong-answer",
                  children: ["⏰ ¡Se acabó el tiempo! ", ey()],
                }),
                ec &&
                  (0, s.jsxs)("div", {
                    className: "hint-box",
                    children: ["💡 ", ec],
                  }),
              ],
            }),
        ],
      }),
      "retryoffer" === U
        ? (0, s.jsxs)("div", {
            className: "retry-btns",
            children: [
              (0, s.jsxs)("button", {
                className: "btn-pixel btn-go next-btn",
                onClick: () => {
                  (mgSetRetry((r) => r - 1),
                    I(""),
                    (ea.current = !1),
                    B("ask"));
                },
                children: ["🔄 Volver a intentar (", mgRetry, ")"],
              }),
              (0, s.jsx)("button", {
                className: "btn-pixel next-btn retry-ghost",
                onClick: () => mgApplyMiss(),
                children: "Ver respuesta",
              }),
            ],
          })
        : "wrong" === U ||
            "shielded" === U ||
            "starred" === U ||
            "pugsave" === U ||
            "timeout" === U
          ? (0, s.jsx)("button", {
              className: "btn-pixel btn-go next-btn",
              onClick: () => {
                el && D < j.stages.length - 1 && c > 0
                  ? (F((e) => e + 1), I(""), B("ask"), b(!1), (ea.current = !1))
                  : ef(Q, W, Y, c);
              },
              children: "Entendido ▶\ufe0e",
            })
          : (0, s.jsxs)(s.Fragment, {
            children: [
              p > 0 &&
                !g &&
                "ask" === U &&
                "tf" !== N &&
                "mayor" !== N &&
                (0, s.jsxs)("button", {
                  className: "lens-btn",
                  onClick: () => {
                    p <= 0 || g || "ask" !== U || (h((e) => e - 1), b(!0));
                  },
                  children: ["🔍 Usar lupa (", p, ")"],
                }),
              ("write" === N || "problema" === N) &&
                (0, s.jsx)(e4, {
                  value: O,
                  disabled: "ask" !== U,
                  onKey: (e) => I((t) => (t.length < 3 ? t + e : t)),
                  onClear: () => I((e) => e.slice(0, -1)),
                  onEnter: () => {
                    0 !== O.length && em(parseInt(O, 10) === eo);
                  },
                }),
              "falling" === N &&
                (0, s.jsx)(
                  "div",
                  {
                    className: "fall-zone",
                    children: C.map((e, t) =>
                      (0, s.jsx)(
                        "button",
                        {
                          className: `asteroid ${q === e ? ("right" === U ? "ok" : "no") : ""}`,
                          style: {
                            left: `${6 + 24 * t}%`,
                            animationDuration: `${6.5 + (t % 3) * 1.2}s`,
                            animationDelay: `${0.45 * t}s`,
                          },
                          disabled: "ask" !== U,
                          onClick: () => {
                            (R(e), em(e === eo));
                          },
                          children: e,
                        },
                        `${y}-${t}`,
                      ),
                    ),
                  },
                  `fz-${y}`,
                ),
              "tf" === N &&
                (0, s.jsxs)("div", {
                  className: "tf-row",
                  children: [
                    (0, s.jsx)("button", {
                      className: "tf-btn tf-true",
                      disabled: "ask" !== U,
                      onClick: () => ep(!0),
                      children: "✓ Verdadero",
                    }),
                    (0, s.jsx)("button", {
                      className: "tf-btn tf-false",
                      disabled: "ask" !== U,
                      onClick: () => ep(!1),
                      children: "✗ Falso",
                    }),
                  ],
                }),
              "parity" === N &&
                (0, s.jsxs)("div", {
                  className: "tf-row",
                  children: [
                    (0, s.jsx)("button", {
                      className: "tf-btn tf-true",
                      disabled: "ask" !== U,
                      onClick: () => eh(!0),
                      children: "Par",
                    }),
                    (0, s.jsx)("button", {
                      className: "tf-btn tf-false",
                      disabled: "ask" !== U,
                      onClick: () => eh(!1),
                      children: "Impar",
                    }),
                  ],
                }),
            ],
          }),
    ],
  });
}
function e7({ chest: e, onClose: t }) {
  let [n, a] = (0, i.useState)(!1),
    [taps, setTaps] = (0, i.useState)(0),
    r = e.item ? er.find((t) => t.id === e.item) : null;
  return (0, s.jsx)("div", {
    className: "chest-overlay",
    children: (0, s.jsx)("div", {
      className: "chest-modal",
      children: n
        ? (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("div", { className: "chest-burst", children: "✨" }),
              "coins" === e.kind
                ? (0, s.jsxs)("div", {
                    className: "chest-reward",
                    children: [
                      "🪙 ×",
                      e.coins,
                      (0, s.jsx)("span", {
                        className: "cr-name",
                        children: "¡Monedas!",
                      }),
                    ],
                  })
                : (0, s.jsxs)("div", {
                    className: "chest-reward",
                    children: [
                      r.emoji,
                      (0, s.jsx)("span", {
                        className: "cr-name",
                        children: r.name,
                      }),
                    ],
                  }),
              (0, s.jsx)("button", {
                className: "btn-pixel btn-go",
                onClick: t,
                children: "¡Genial! ▶\ufe0e",
              }),
            ],
          })
        : (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("div", {
                className: "chest-title",
                children: "¡Encontraste un cofre sorpresa!",
              }),
              (0, s.jsx)("button", {
                className: "chest-box shake-" + taps,
                onClick: () => (taps >= 2 ? a(!0) : setTaps(taps + 1)),
                children: taps >= 2 ? "🎁" : "📦",
              }),
              (0, s.jsx)("div", {
                className: "chest-tap",
                children:
                  0 === taps
                    ? "¡toca para abrir!"
                    : "¡sigue tocando! " + "✨".repeat(taps),
              }),
            ],
          }),
    }),
  });
}
function e9({
  level: e,
  run: t,
  reward: n,
  daily: a,
  chestPending: r,
  onChestClosed: l,
  onNext: o,
  onRetry: c,
  onPath: u,
  onShop: m,
  hasNext: h,
}) {
  let [g] = (0, i.useState)(() => p[Math.floor(Math.random() * p.length)]);
  return ((0, i.useEffect)(() => {
    t.passed && v.win();
  }, [t.passed]),
  t.passed)
    ? (0, s.jsxs)("div", {
        className: "screen world-starwars",
        children: [
          (0, s.jsx)(eX, {}),
          r && n.chest && (0, s.jsx)(e7, { chest: n.chest, onClose: l }),
          (0, s.jsxs)("div", {
            className: "panel result-panel",
            children: [
              (0, s.jsxs)("div", {
                className: "result-hero",
                children: [
                  (0, s.jsx)(d, { mood: "excited", size: 82, extra: "pug-walk" }),
                  (0, s.jsx)("span", {
                    className: "end-emoji",
                    children:
                      3 === t.stars ? "🏆" : 2 === t.stars ? "🥈" : "🎖️",
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "title-pixel accent",
                children: "¡Nivel conquistado!",
              }),
              (0, s.jsx)("div", {
                className: "big-stars",
                children: Array.from({ length: 3 }).map((e, n) =>
                  (0, s.jsx)(
                    "span",
                    {
                      className: `bstar ${n < t.stars ? "lit" : ""}`,
                      style: { animationDelay: `${0.25 * n}s` },
                      children: "⭐",
                    },
                    n,
                  ),
                ),
              }),
              (0, s.jsxs)("div", {
                className: "result-stats",
                children: [
                  (0, s.jsxs)("div", {
                    className: "rstat",
                    children: [
                      (0, s.jsxs)("span", {
                        className: "rs-num",
                        children: [t.correct, "/", e.questions],
                      }),
                      (0, s.jsx)("span", {
                        className: "rs-lbl",
                        children: "aciertos",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "rstat",
                    children: [
                      (0, s.jsxs)("span", {
                        className: "rs-num",
                        children: ["🪙 +", n.coins],
                      }),
                      (0, s.jsx)("span", {
                        className: "rs-lbl",
                        children: n.firstTime
                          ? "monedas ganadas"
                          : "monedas (repetición)",
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "streak-result",
                children: [
                  "🔥 Racha de ",
                  a.streak,
                  " ",
                  1 === a.streak ? "día" : "días",
                ],
              }),
              t.missed.length > 0 &&
                (0, s.jsxs)("div", {
                  className: "practice-box",
                  children: [
                    (0, s.jsx)("div", {
                      className: "practice-title",
                      children: "📌 Para repasar:",
                    }),
                    (0, s.jsx)("div", {
                      className: "practice-chips",
                      children: t.missed.map((e) =>
                        (0, s.jsx)(
                          "span",
                          { className: "practice-chip", children: e },
                          e,
                        ),
                      ),
                    }),
                  ],
                }),
              (0, s.jsxs)("div", {
                className: "btn-row",
                children: [
                  h &&
                    (0, s.jsx)("button", {
                      className: "btn-pixel btn-go",
                      onClick: o,
                      children: "Siguiente nivel ▶\ufe0e",
                    }),
                  (0, s.jsx)("button", {
                    className: "btn-pixel",
                    onClick: u,
                    children: "🗺️ Camino",
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    : (0, s.jsxs)("div", {
        className: "screen world-starwars",
        children: [
          (0, s.jsx)(eX, {}),
          (0, s.jsxs)("div", {
            className: "panel result-panel",
            children: [
              (0, s.jsx)(f, { mood: "sad", text: g, size: 70 }),
              (0, s.jsx)("div", {
                className: "title-pixel fail-title",
                children: "¡Casi lo logras!",
              }),
              (0, s.jsxs)("div", {
                className: "fail-line",
                children: [
                  "Acertaste ",
                  t.correct,
                  " de ",
                  e.questions,
                  ". Necesitas ",
                  e.passAt,
                  ".",
                ],
              }),
              (0, s.jsxs)("div", {
                className: "fail-coins",
                children: ["Te llevas 🪙 +", n.coins, " por tu esfuerzo"],
              }),
              (0, s.jsxs)("div", {
                className: "fail-tips",
                children: [
                  (0, s.jsx)("div", {
                    className: "ft-title",
                    children: "💡 Trucos de héroe:",
                  }),
                  (0, s.jsx)("p", {
                    children: "🧪 Una poción de vida te da un corazón extra",
                  }),
                  (0, s.jsx)("p", {
                    children: "🛡️ El escudo perdona tu primer error",
                  }),
                  (0, s.jsx)("p", {
                    children: "🔍 La lupa te muestra el truco de la pregunta",
                  }),
                ],
              }),
              t.missed.length > 0 &&
                (0, s.jsxs)("div", {
                  className: "practice-box",
                  children: [
                    (0, s.jsx)("div", {
                      className: "practice-title",
                      children: "📌 Practica estas:",
                    }),
                    (0, s.jsx)("div", {
                      className: "practice-chips",
                      children: t.missed.map((e) =>
                        (0, s.jsx)(
                          "span",
                          { className: "practice-chip", children: e },
                          e,
                        ),
                      ),
                    }),
                  ],
                }),
              (0, s.jsxs)("div", {
                className: "btn-row",
                children: [
                  (0, s.jsx)("button", {
                    className: "btn-pixel btn-go",
                    onClick: c,
                    children: "🔄 Reintentar",
                  }),
                  (0, s.jsx)("button", {
                    className: "btn-pixel",
                    onClick: m,
                    children: "🏪 Tienda",
                  }),
                  (0, s.jsx)("button", {
                    className: "btn-pixel",
                    onClick: u,
                    children: "🗺️ Camino",
                  }),
                ],
              }),
            ],
          }),
        ],
      });
}
function te({ progress: e, facts: t, setFacts: n, onDone: a, onQuit: r }) {
  let l = (0, i.useRef)(
      (function (e) {
        let t = new Set(),
          n = !1,
          a = !1;
        for (let r of en)
          e[r.id]?.done &&
            ("tabla" === r.kind &&
              r.tables.forEach((e) => {
                e >= 2 && t.add(e);
              }),
            ("div" === r.kind || "multidiv" === r.kind) &&
              ((n = !0), r.tables.forEach((e) => t.add(e))),
            ("restas1" === r.kind ||
              "restas2" === r.kind ||
              "bonds10" === r.kind ||
              "bonds20" === r.kind) &&
              (a = !0));
        return 0 === t.size
          ? { tables: [2, 5, 10], hasDiv: !1, hasSub: !1 }
          : {
              tables: Array.from(t).sort((e, t) => e - t),
              hasDiv: n,
              hasSub: a,
            };
      })(e),
    ),
    o = (0, i.useRef)(t),
    [c, u] = (0, i.useState)(() =>
      eA(l.current.tables, l.current.hasDiv, l.current.hasSub, o.current),
    ),
    [d, f] = (0, i.useState)(""),
    [m, p] = (0, i.useState)(0),
    [h, g] = (0, i.useState)(0),
    [b, v] = (0, i.useState)(60),
    [y, x] = (0, i.useState)(null),
    [k, j] = (0, i.useState)(null),
    w = (0, i.useRef)(!1),
    N = (0, i.useRef)(0),
    S = (0, i.useRef)(null);
  ((0, i.useEffect)(() => {
    let e = setInterval(() => {
      v((t) => (t <= 1 ? (clearInterval(e), a(N.current), 0) : t - 1));
    }, 1e3);
    return () => clearInterval(e);
  }, []),
    (0, i.useEffect)(
      () => () => {
        S.current && clearTimeout(S.current);
      },
      [],
    ));
  let C = () => {
      (u(eA(l.current.tables, l.current.hasDiv, l.current.hasSub, o.current)),
        f(""),
        x(null),
        j(null),
        (w.current = !1));
    },
    E = (b / 60) * 100;
  return (0, s.jsxs)("div", {
    className: "screen world-starwars reto-bg",
    children: [
      (0, s.jsx)(eX, {}),
      (0, s.jsxs)("div", {
        className: "adv-hud",
        children: [
          (0, s.jsx)("button", {
            className: "hud-quit",
            onClick: r,
            children: "✕",
          }),
          (0, s.jsxs)("span", {
            className: "hud-item reto-score",
            children: ["⚡ ", m],
          }),
          h >= 3 &&
            (0, s.jsxs)("span", {
              className: "hud-item streak-fire-pill",
              children: ["🔥 ", h],
            }),
          (0, s.jsxs)("span", {
            className: "hud-item reto-clock",
            children: ["⏱️ ", b, "s"],
          }),
        ],
      }),
      (0, s.jsx)("div", {
        className: "timer-track",
        children: (0, s.jsx)("div", {
          className: "timer-fill",
          style: {
            width: `${E}%`,
            background: E > 50 ? "#7ec8ff" : E > 25 ? "#ffcc00" : "#ff6b57",
          },
        }),
      }),
      (0, s.jsxs)("div", {
        className: `q-card reto-card ${"no" === y ? "shake" : ""} ${"ok" === y ? "reto-ok" : ""}`,
        children: [
          (0, s.jsxs)("div", {
            className: "q-prompt",
            children: [c.prompt, " = ?"],
          }),
          (0, s.jsx)("div", {
            className: "q-input-display",
            children: d || "_",
          }),
          null !== k &&
            (0, s.jsxs)("div", {
              className: "wrong-answer",
              children: ["Era ", k],
            }),
        ],
      }),
      (0, s.jsx)(e4, {
        value: d,
        disabled: w.current && "no" === y,
        onKey: (e) => f((t) => (t.length < 3 ? t + e : t)),
        onClear: () => f((e) => e.slice(0, -1)),
        onEnter: () => {
          if (w.current || 0 === d.length) return;
          w.current = !0;
          let e = parseInt(d, 10) === c.answer;
          if ("add" !== c.factKey) {
            let t = eP(o.current, c.factKey, e);
            ((o.current = t), n(t));
          }
          e
            ? ((N.current += 1),
              p(N.current),
              g((e) => e + 1),
              x("ok"),
              (S.current = setTimeout(C, 250)))
            : (g(0), x("no"), j(c.answer), (S.current = setTimeout(C, 1100)));
        },
      }),
    ],
  });
}
function tt({ run: e, onAgain: t, onPath: n }) {
  return (0, s.jsxs)("div", {
    className: "screen world-starwars reto-bg",
    children: [
      (0, s.jsx)(eX, {}),
      (0, s.jsxs)("div", {
        className: "panel result-panel",
        children: [
          (0, s.jsxs)("div", {
            className: "result-hero",
            children: [
              (0, s.jsx)(d, {
                mood: e.isRecord ? "excited" : "happy",
                size: 82,
              }),
              (0, s.jsx)("span", {
                className: "end-emoji",
                children: e.isRecord ? "🏆" : "⚡",
              }),
            ],
          }),
          (0, s.jsx)("div", {
            className: "title-pixel accent",
            children: e.isRecord ? "¡Nuevo récord!" : "¡Tiempo!",
          }),
          (0, s.jsx)("div", { className: "reto-big-score", children: e.score }),
          (0, s.jsx)("div", {
            className: "result-line",
            children: "operaciones correctas en 60 segundos",
          }),
          (0, s.jsxs)("div", {
            className: "result-stats",
            children: [
              (0, s.jsxs)("div", {
                className: "rstat",
                children: [
                  (0, s.jsxs)("span", {
                    className: "rs-num",
                    children: ["🏅 ", e.best],
                  }),
                  (0, s.jsx)("span", {
                    className: "rs-lbl",
                    children: "tu récord",
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "rstat",
                children: [
                  (0, s.jsxs)("span", {
                    className: "rs-num",
                    children: ["🪙 +", e.coins],
                  }),
                  (0, s.jsx)("span", {
                    className: "rs-lbl",
                    children: "monedas",
                  }),
                ],
              }),
            ],
          }),
          (0, s.jsxs)("div", {
            className: "btn-row",
            children: [
              (0, s.jsx)("button", {
                className: "btn-pixel btn-go",
                onClick: t,
                children: "⚡ Otra vez",
              }),
              (0, s.jsx)("button", {
                className: "btn-pixel",
                onClick: n,
                children: "🗺️ Camino",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function tn({ facts: e, setFacts: t, onDone: n, onQuit: a }) {
  let r = (0, i.useRef)(e),
    l = (0, i.useRef)(eD(r.current, 12)),
    [o, c] = (0, i.useState)(0),
    [u, f] = (0, i.useState)(() => eF(l.current, r.current)),
    [m, p] = (0, i.useState)(""),
    [h, g] = (0, i.useState)("ask"),
    [b, y] = (0, i.useState)(0),
    x = (0, i.useRef)(null),
    k = (0, i.useRef)(!1);
  (0, i.useEffect)(
    () => () => {
      x.current && clearTimeout(x.current);
    },
    [],
  );
  let j = (e) => {
    let t = o + 1;
    t >= 10
      ? n(e)
      : (c(t), f(eF(l.current, r.current)), p(""), g("ask"), (k.current = !1));
  };
  return (0, s.jsxs)("div", {
    className: "screen world-starwars practice-bg",
    children: [
      (0, s.jsx)(eX, {}),
      (0, s.jsxs)("div", {
        className: "adv-hud",
        children: [
          (0, s.jsx)("button", {
            className: "hud-quit",
            onClick: a,
            children: "✕",
          }),
          (0, s.jsxs)("span", {
            className: "hud-item practice-pill",
            children: ["🧠 ", o + 1, "/", 10],
          }),
          (0, s.jsxs)("span", { className: "hud-item", children: ["✅ ", b] }),
        ],
      }),
      (0, s.jsx)("div", {
        className: "timer-note",
        children: "tu sesión personalizada · sin prisa, sin corazones",
      }),
      (0, s.jsxs)("div", {
        className: `q-card practice-card ${"wrong" === h ? "shake" : ""}`,
        children: [
          (0, s.jsxs)("div", {
            className: "q-prompt",
            children: [u.prompt, " = ?"],
          }),
          (0, s.jsx)("div", {
            className: "q-input-display",
            children: m || "_",
          }),
          "right" === h &&
            (0, s.jsxs)("div", {
              className: "q-feedback ok pug-feedback",
              children: [
                (0, s.jsx)(d, { mood: "excited", size: 46 }),
                " ¡Correcto!",
              ],
            }),
          "wrong" === h &&
            (0, s.jsxs)("div", {
              className: "q-feedback no",
              children: [
                (0, s.jsxs)("div", {
                  className: "pug-feedback",
                  children: [
                    (0, s.jsx)(d, { mood: "sad", size: 46 }),
                    (0, s.jsxs)("span", {
                      className: "wrong-answer",
                      children: ["La respuesta es ", u.answer],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "hint-box",
                  children: ["💡 ", u.hint],
                }),
              ],
            }),
        ],
      }),
      "wrong" === h
        ? (0, s.jsx)("button", {
            className: "btn-pixel btn-go next-btn",
            onClick: () => j(b),
            children: "Entendido ▶\ufe0e",
          })
        : (0, s.jsx)(e4, {
            value: m,
            disabled: "ask" !== h,
            onKey: (e) => p((t) => (t.length < 3 ? t + e : t)),
            onClear: () => p((e) => e.slice(0, -1)),
            onEnter: () => {
              if (k.current || 0 === m.length) return;
              k.current = !0;
              let e = parseInt(m, 10) === u.answer;
              e ? v.ok() : v.no();
              let n = eP(r.current, u.factKey, e);
              if (((r.current = n), t(n), e)) {
                let e = b + 1;
                (y(e), g("right"), (x.current = setTimeout(() => j(e), 850)));
              } else g("wrong");
            },
          }),
    ],
  });
}
function ta({ run: e, onAgain: t, onPath: n }) {
  return (0, s.jsxs)("div", {
    className: "screen world-starwars practice-bg",
    children: [
      (0, s.jsx)(eX, {}),
      (0, s.jsxs)("div", {
        className: "panel result-panel",
        children: [
          (0, s.jsx)(f, {
            mood: "thinking",
            text: "Practicar lo difícil te hace más fuerte. " + mgVoz(),
            size: 70,
          }),
          (0, s.jsx)("div", {
            className: "title-pixel accent",
            children: "¡Repaso completo!",
          }),
          (0, s.jsxs)("div", {
            className: "result-line",
            children: ["Acertaste ", e.correct, " de ", 10],
          }),
          e.firstToday
            ? (0, s.jsxs)("div", {
                className: "fail-coins",
                children: ["🪙 +", e.coins, " por tu repaso diario"],
              })
            : (0, s.jsx)("div", {
                className: "streak-result",
                children:
                  "Ya ganaste el bono de hoy. ¡Practicar extra también cuenta! 💪",
              }),
          (0, s.jsxs)("div", {
            className: "btn-row",
            children: [
              (0, s.jsx)("button", {
                className: "btn-pixel btn-go",
                onClick: t,
                children: "🧠 Otra sesión",
              }),
              (0, s.jsx)("button", {
                className: "btn-pixel",
                onClick: n,
                children: "🗺️ Camino",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function tr({
  facts: e,
  pathProgress: t,
  littleProgress: n,
  daily: a,
  retoBest: r,
  brainLevels: l,
  lbrainLevels: o,
  onBack: c,
  profiles: pmProfiles = [],
  activeId: pmActive = null,
  onEditProfile: pmEdit = () => {},
  onAddProfile: pmAdd = () => {},
}) {
  let [pmTick, pmSetTick] = (0, i.useState)(0),
    pmRefresh = () => pmSetTick((v) => v + 1),
    [u, d] = (0, i.useState)(""),
    f = Array.from({ length: 9 }, (e, t) => t + 2).map((t) => {
      let n = 0,
        a = 0;
      for (let [r, l] of Object.entries(e)) {
        if ("add" === r) continue;
        let [e, s] = r.split("x").map(Number);
        (e === t || s === t) && ((n += l.seen), (a += l.correct));
      }
      return { t: t, seen: n, acc: n > 0 ? a / n : 0 };
    }),
    m = f.filter((e) => e.seen >= 5),
    p = m.length > 0 ? m.reduce((e, t) => (t.acc < e.acc ? t : e)) : null,
    h = eD(e, 5),
    g = en.filter((e) => t[e.id]?.done).length,
    b = en.reduce((e, n) => e + (t[n.id]?.stars || 0), 0),
    v = eo.filter((e) => n[e.id]?.done).length,
    y = Object.values(l).reduce((e, t) => e + t, 0),
    x = Object.values(o).reduce((e, t) => e + t, 0);
  return (0, s.jsxs)("div", {
    className: "screen world-starwars scroll-screen",
    children: [
      (0, s.jsx)(eX, {}),
      (0, s.jsxs)("div", {
        className: "sticky-topbar",
        children: [
          (0, s.jsx)("button", {
            className: "btn-pixel back-btn",
            onClick: c,
            children: "◀\ufe0e Volver",
          }),
          (0, s.jsx)("span", {
            className: "topbar-title",
            children: "📊 Informe para papás",
          }),
        ],
      }),
      MG_H("div", { className: "panel", style: { marginBottom: 12 } },
        MG_H("h3", { className: "rs-title" }, "👦 Jugadores"),
        MG_H("div", { className: "pm-list" },
          pmProfiles.map((pf) =>
            MG_H("div", { key: pf.id, className: "pm-row" },
              MG_H("span", { className: "pm-emoji" }, pf.emoji),
              MG_H("span", { className: "pm-name" }, pf.name + " · " + pf.age + " años"),
              pmActive === pf.id ? MG_H("span", { className: "pm-active" }, "▶\ufe0e jugando") : null,
              MG_H("button", { className: "pm-edit", onClick: () => pmEdit(pf) }, "✏️ Editar")))),
        pmProfiles.length < 4
          ? MG_H("button", { className: "pm-add", onClick: pmAdd }, "➕ Agregar jugador")
          : null),
      // Dificultad por niño. El juego la ajusta solo buscando que acierte
      // ~3 de cada 4; aquí el papá puede fijarla si cree que se equivocó.
      pmProfiles.some((pf) => pf.age <= 5)
        ? MG_H("div", { className: "panel", style: { marginBottom: 12 } },
            MG_H("h3", { className: "rs-title" }, "📈 Dificultad"),
            MG_H("p", { className: "pm-hint" },
              "El juego ajusta solo el tamaño de los números para que tu hijo acierte alrededor de 3 de cada 4. Si crees que se equivocó, fíjala tú."),
            MG_H("div", { className: "pm-list" },
              pmProfiles.filter((pf) => pf.age <= 5).map((pf) => {
                let sk = mgSkillReadFor(pf.id, pf.age),
                  cur = null != sk.manual ? sk.manual : sk.band;
                return MG_H("div", { key: pf.id, className: "pm-row pm-skill-row" },
                  MG_H("span", { className: "pm-emoji" }, pf.emoji),
                  MG_H("span", { className: "pm-name" },
                    pf.name + " · " + (MG_BANDS[cur] || MG_BANDS[1]).label +
                      (null == sk.manual ? " (automático)" : " (fijado)")),
                  MG_H("div", { className: "pm-bands" },
                    MG_H("button",
                      {
                        className: "pm-band" + (null == sk.manual ? " sel" : ""),
                        onClick: () => (mgSkillSetManualFor(pf.id, pf.age, null), pmRefresh()),
                      },
                      "Auto"),
                    ...MG_BANDS.map((b) =>
                      MG_H("button",
                        {
                          key: b.id,
                          className: "pm-band" + (null != sk.manual && sk.manual === b.id ? " sel" : ""),
                          onClick: () => (mgSkillSetManualFor(pf.id, pf.age, b.id), pmRefresh()),
                        },
                        b.short))));
              })))
        : null,
      /* Ajustes de experiencia, por niño. Vienen todos encendidos: esto no es
         una lista de cosas que activar, sino la posibilidad de apagar algo que
         a un niño concreto le estorbe. */
      MG_H("div", { className: "panel", style: { marginBottom: 12 } },
        MG_H("h3", { className: "rs-title" }, "🎛️ Experiencia"),
        MG_H("p", { className: "pm-hint" },
          "Todo viene encendido: así está pensado el juego. Apaga algo solo si a tu hijo le estorba — por ejemplo el reloj, si le pone ansioso."),
        MG_H("div", { className: "pm-list" },
          ...pmProfiles.map((pf) => {
            let st = mgSettingsReadFor(pf.id);
            return MG_H("div", { key: pf.id, className: "pm-row pm-set-row" },
              MG_H("div", { className: "pm-set-head" },
                MG_H("span", { className: "pm-emoji" }, pf.emoji),
                MG_H("span", { className: "pm-name" }, pf.name)),
              MG_H("div", { className: "pm-toggles" },
                ...MG_SETTINGS.map((cfg) =>
                  MG_H("button",
                    {
                      key: cfg.key,
                      className: "pm-toggle" + (st[cfg.key] ? " on" : ""),
                      onClick: () => (mgSettingsToggleFor(pf.id, cfg.key), pmRefresh()),
                      title: cfg.hint,
                    },
                    MG_H("span", { className: "pm-tg-dot" }, st[cfg.key] ? "✓" : "✕"),
                    MG_H("span", { className: "pm-tg-txt" },
                      MG_H("span", { className: "pm-tg-label" }, cfg.label),
                      MG_H("span", { className: "pm-tg-hint" }, cfg.hint))))));
          }))),
      (0, s.jsxs)("div", {
        className: "panel album-panel report-panel",
        children: [
          (0, s.jsxs)("div", {
            className: "report-section",
            children: [
              (0, s.jsx)("h3", {
                className: "rs-title",
                children: "🧑‍🚀 Aventurero (8 años)",
              }),
              (0, s.jsxs)("div", {
                className: "report-stats",
                children: [
                  (0, s.jsxs)("div", {
                    className: "rp-stat",
                    children: [
                      (0, s.jsxs)("span", {
                        className: "rp-num",
                        children: [g, "/", en.length],
                      }),
                      (0, s.jsx)("span", {
                        className: "rp-label",
                        children: "niveles",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "rp-stat",
                    children: [
                      (0, s.jsx)("span", { className: "rp-num", children: b }),
                      (0, s.jsx)("span", {
                        className: "rp-label",
                        children: "estrellas",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "rp-stat",
                    children: [
                      (0, s.jsx)("span", {
                        className: "rp-num",
                        children: a.streak,
                      }),
                      (0, s.jsx)("span", {
                        className: "rp-label",
                        children: "racha días",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "rp-stat",
                    children: [
                      (0, s.jsx)("span", { className: "rp-num", children: r }),
                      (0, s.jsx)("span", {
                        className: "rp-label",
                        children: "récord reto",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "rp-stat",
                    children: [
                      (0, s.jsx)("span", { className: "rp-num", children: y }),
                      (0, s.jsx)("span", {
                        className: "rp-label",
                        children: "lógica ganados",
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)("h4", {
                className: "rs-sub",
                children: "Precisión por tabla",
              }),
              (0, s.jsx)("p", {
                className: "rs-note",
                children:
                  "Basada en todas sus respuestas de multiplicación y división. Gris: aún poco practicada.",
              }),
              (0, s.jsx)("div", {
                className: "acc-bars",
                children: f.map((e) => {
                  let t;
                  return (0, s.jsxs)(
                    "div",
                    {
                      className: "acc-row",
                      children: [
                        (0, s.jsxs)("span", {
                          className: "acc-label",
                          children: ["×", e.t],
                        }),
                        (0, s.jsx)("div", {
                          className: "acc-track",
                          children: (0, s.jsx)("div", {
                            className: "acc-fill",
                            style: {
                              width: `${Math.round(100 * e.acc)}%`,
                              background:
                                e.seen >= 5
                                  ? (t = e.acc) >= 0.85
                                    ? "#00d68a"
                                    : t >= 0.65
                                      ? "#ffd700"
                                      : "#ff6b57"
                                  : "#6a628a",
                            },
                          }),
                        }),
                        (0, s.jsx)("span", {
                          className: "acc-pct",
                          children:
                            e.seen >= 5
                              ? `${Math.round(100 * e.acc)}%`
                              : `${e.seen} rep.`,
                        }),
                      ],
                    },
                    e.t,
                  );
                }),
              }),
              h.length > 0 &&
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)("h4", {
                      className: "rs-sub",
                      children: "Para repasar esta semana",
                    }),
                    (0, s.jsx)("div", {
                      className: "weak-chips",
                      children: h.map((e) => {
                        let [t, n] = e.split("x");
                        return (0, s.jsxs)(
                          "span",
                          { className: "weak-chip", children: [t, " × ", n] },
                          e,
                        );
                      }),
                    }),
                  ],
                }),
              p &&
                (0, s.jsxs)("div", {
                  className: "report-tip",
                  children: [
                    "💡 Sugerencia: refuercen la tabla del ",
                    p.t,
                    " (",
                    Math.round(100 * p.acc),
                    '% de acierto). El Repaso inteligente 🧠 se la mostrará automáticamente, y pueden repasarla en el carro o en la mesa: pregúntale "¿',
                    p.t,
                    ' × 7?" y celebra el intento, no solo el acierto.',
                  ],
                }),
            ],
          }),
          (0, s.jsxs)("div", {
            className: "report-section",
            children: [
              (0, s.jsx)("h3", {
                className: "rs-title",
                children: "🧒 Pequeño explorador (4 años)",
              }),
              (0, s.jsxs)("div", {
                className: "report-stats",
                children: [
                  (0, s.jsxs)("div", {
                    className: "rp-stat",
                    children: [
                      (0, s.jsxs)("span", {
                        className: "rp-num",
                        children: [v, "/", eo.length],
                      }),
                      (0, s.jsx)("span", {
                        className: "rp-label",
                        children: "niveles",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "rp-stat",
                    children: [
                      (0, s.jsx)("span", { className: "rp-num", children: v }),
                      (0, s.jsx)("span", {
                        className: "rp-label",
                        children: "calcomanías",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "rp-stat",
                    children: [
                      (0, s.jsx)("span", { className: "rp-num", children: x }),
                      (0, s.jsx)("span", {
                        className: "rp-label",
                        children: "lógica ganados",
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "report-tip",
                children:
                  "💡 A esta edad lo que más predice el éxito matemático futuro es el sentido numérico: contar objetos reales, comparar cantidades y jugar con patrones. Los juegos de lógica 🧩 entrenan memoria de trabajo y atención, que son la base de todo lo demás.",
              }),
            ],
          }),
          (0, s.jsxs)("div", {
            className: "report-section",
            children: [
              (0, s.jsx)("h3", {
                className: "rs-title",
                children: "💾 Copia de seguridad",
              }),
              (0, s.jsx)("p", {
                className: "rs-note",
                children:
                  "El progreso vive en este navegador. Exporta un archivo de respaldo de vez en cuando, o para pasar el avance a otra tablet: exporta aquí e importa allá.",
              }),
              (0, s.jsxs)("div", {
                className: "btn-row",
                children: [
                  (0, s.jsx)("button", {
                    className: "btn-pixel btn-go",
                    onClick: () => {
                      let e = {
                        _app: "math-galaxy",
                        _v: 2,
                        _fecha: new Date().toISOString(),
                      };
                      for (let t of eW)
                        try {
                          let n = localStorage.getItem(t);
                          null !== n && (e[t] = JSON.parse(n));
                        } catch {}
                      let t = new Blob([JSON.stringify(e, null, 2)], {
                          type: "application/json",
                        }),
                        n = URL.createObjectURL(t),
                        a = document.createElement("a");
                      ((a.href = n),
                        (a.download = `math-galaxy-respaldo-${eV()}.json`),
                        a.click(),
                        URL.revokeObjectURL(n),
                        d(
                          "✅ Respaldo descargado. Guárdalo en un lugar seguro (Drive, correo...).",
                        ));
                    },
                    children: "⬇️ Exportar",
                  }),
                  (0, s.jsxs)("label", {
                    className: "btn-pixel import-label",
                    children: [
                      "⬆️ Importar",
                      (0, s.jsx)("input", {
                        type: "file",
                        accept: ".json,application/json",
                        className: "import-input",
                        onChange: (e) => {
                          let t = e.target.files?.[0];
                          if (!t) return;
                          let n = new FileReader();
                          ((n.onload = () => {
                            try {
                              let e = JSON.parse(String(n.result));
                              if ("math-galaxy" !== e._app)
                                return void d(
                                  "❌ Ese archivo no es un respaldo de Math Galaxy.",
                                );
                              let t = 0;
                              for (let n of eW)
                                n in e &&
                                  (localStorage.setItem(
                                    n,
                                    JSON.stringify(e[n]),
                                  ),
                                  t++);
                              (d(
                                `\u{2705} Respaldo importado (${t} secciones). Recargando...`,
                              ),
                                setTimeout(
                                  () => window.location.reload(),
                                  1200,
                                ));
                            } catch {
                              d(
                                "❌ No pude leer el archivo. ¿Es el respaldo correcto?",
                              );
                            }
                          }),
                            n.readAsText(t));
                        },
                      }),
                    ],
                  }),
                ],
              }),
              u && (0, s.jsx)("div", { className: "report-tip", children: u }),
            ],
          }),
          (0, s.jsxs)("div", {
            className: "report-section",
            children: [
              (0, s.jsx)("h3", {
                className: "rs-title",
                children: "🔬 Cómo enseña este juego",
              }),
              (0, s.jsx)("p", {
                className: "rs-note",
                children:
                  "El juego aplica técnicas con evidencia científica: recuerdo activo (escribir la respuesta en vez de solo reconocerla), repetición espaciada (lo aprendido vuelve días después, justo antes de olvidarse), práctica intercalada (mezclar operaciones obliga a elegir la estrategia), conteo saltado como puente a las tablas, la recta numérica (uno de los mejores predictores del logro matemático), tiempo como premio y nunca como castigo, y mensajes de esfuerzo en vez de elogios a la inteligencia.",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
let tl = ["🟢 Fácil", "🟡 Media", "🔴 Difícil"];
function ts({ onStart: e, onBack: t }) {
  return (0, s.jsx)("div", {
    className: "screen world-starwars brain-bg",
    children: (0, s.jsxs)("div", {
      className: "panel",
      children: [
        (0, s.jsx)("button", {
          className: "link-back",
          onClick: t,
          children: "◀\ufe0e Camino",
        }),
        (0, s.jsx)("h2", {
          className: "panel-title",
          children: "🎯 Práctica libre",
        }),
        (0, s.jsx)(f, {
          mood: "happy",
          text: "¿Qué viste hoy en el cole? ¡Practiquémoslo! " + mgVoz(),
          size: 60,
        }),
        (0, s.jsx)("div", {
          className: "brain-list",
          children: eO.map((t) =>
            (0, s.jsxs)(
              "div",
              {
                className: "libre-card",
                children: [
                  (0, s.jsxs)("div", {
                    className: "libre-card-head",
                    children: [
                      (0, s.jsx)("span", {
                        className: "bc-emoji",
                        children: t.emoji,
                      }),
                      (0, s.jsx)("span", {
                        className: "bc-name",
                        children: t.name,
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "libre-diffs",
                    children: tl.map((n, a) =>
                      (0, s.jsx)(
                        "button",
                        {
                          className: "libre-diff-btn",
                          onClick: () => e(t.id, a),
                          children: n,
                        },
                        a,
                      ),
                    ),
                  }),
                ],
              },
              t.id,
            ),
          ),
        }),
      ],
    }),
  });
}
function ti({ op: e, diff: t, facts: n, setFacts: a, onDone: r, onQuit: l }) {
  let o = (0, i.useRef)(n),
    [c, u] = (0, i.useState)(0),
    [f, m] = (0, i.useState)(() => eI(e, t, o.current)),
    [p, h] = (0, i.useState)(""),
    [g, b] = (0, i.useState)("ask"),
    [y, x] = (0, i.useState)(0),
    k = (0, i.useRef)(null),
    j = (0, i.useRef)(!1);
  (0, i.useEffect)(
    () => () => {
      k.current && clearTimeout(k.current);
    },
    [],
  );
  let w = (n) => {
      let a = c + 1;
      a >= 10
        ? r(n)
        : (u(a), m(eI(e, t, o.current)), h(""), b("ask"), (j.current = !1));
    },
    N = eO.find((t) => t.id === e);
  return (0, s.jsxs)("div", {
    className: "screen world-starwars brain-bg",
    children: [
      (0, s.jsx)(eX, {}),
      (0, s.jsxs)("div", {
        className: "adv-hud",
        children: [
          (0, s.jsx)("button", {
            className: "hud-quit",
            onClick: l,
            children: "✕",
          }),
          (0, s.jsxs)("span", {
            className: "hud-item libre-pill",
            children: [N.emoji, " ", c + 1, "/", 10],
          }),
          (0, s.jsxs)("span", { className: "hud-item", children: ["✅ ", y] }),
        ],
      }),
      (0, s.jsx)("div", {
        className: "timer-note",
        children: "práctica libre · sin corazones, con pistas",
      }),
      (0, s.jsxs)("div", {
        className: `q-card libre-qcard ${"wrong" === g ? "shake" : ""}`,
        children: [
          (0, s.jsxs)("div", {
            className: "q-prompt",
            children: [f.prompt, "resto" === f.kind ? "" : " = ?"],
          }),
          (0, s.jsx)("div", {
            className: "q-input-display",
            children: p || "_",
          }),
          "right" === g &&
            (0, s.jsxs)("div", {
              className: "q-feedback ok pug-feedback",
              children: [
                (0, s.jsx)(d, { mood: "excited", size: 46 }),
                " ¡Correcto!",
              ],
            }),
          "wrong" === g &&
            (0, s.jsxs)("div", {
              className: "q-feedback no",
              children: [
                (0, s.jsxs)("div", {
                  className: "pug-feedback",
                  children: [
                    (0, s.jsx)(d, { mood: "sad", size: 46 }),
                    (0, s.jsxs)("span", {
                      className: "wrong-answer",
                      children: ["La respuesta es ", f.answer],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "hint-box",
                  children: ["💡 ", f.hint],
                }),
              ],
            }),
        ],
      }),
      "wrong" === g
        ? (0, s.jsx)("button", {
            className: "btn-pixel btn-go next-btn",
            onClick: () => w(y),
            children: "Entendido ▶\ufe0e",
          })
        : (0, s.jsx)(e4, {
            value: p,
            disabled: "ask" !== g,
            onKey: (e) => h((t) => (t.length < 3 ? t + e : t)),
            onClear: () => h((e) => e.slice(0, -1)),
            onEnter: () => {
              if (j.current || 0 === p.length) return;
              j.current = !0;
              let e = parseInt(p, 10) === f.answer;
              e ? v.ok() : v.no();
              let t = eP(o.current, f.factKey, e);
              if (((o.current = t), a(t), e)) {
                let e = y + 1;
                (x(e), b("right"), (k.current = setTimeout(() => w(e), 850)));
              } else b("wrong");
            },
          }),
    ],
  });
}
function to({
  coins: e,
  inv: t,
  outfit: n,
  onBuy: a,
  onBuyOutfit: r,
  onEquip: l,
  onBack: o,
  charDone: dq,
}) {
  let [u, m] = (0, i.useState)(null),
    [selChar, setSelChar] = (0, i.useState)(mgChar);
  (0, i.useEffect)(() => {
    mgSyncCharUnlocks(dq);
  }, [dq]);
  return (0, s.jsxs)("div", {
    className: "screen world-minecraft",
    children: [
      (0, s.jsx)(eX, {}),
      (0, s.jsxs)("div", {
        className: "panel",
        children: [
          (0, s.jsx)("button", {
            className: "link-back",
            onClick: o,
            children: "◀\ufe0e Volver",
          }),
          (0, s.jsx)("h2", {
            className: "panel-title",
            children: "🏪 Tienda galáctica",
          }),
          (0, s.jsx)(f, {
            mood: "happy",
            text: "¡Bienvenido a mi tienda! Gasta con sabiduría. " + mgVoz(),
            size: 60,
          }),
          (0, s.jsxs)("div", {
            className: "shop-coins",
            children: [
              "Tus monedas: ",
              (0, s.jsxs)("b", { children: ["🪙 ", e] }),
            ],
          }),
          (0, s.jsx)("div", {
            className: "shop-list",
            children: er.map((n) => {
              let r = e >= n.price;
              return (0, s.jsxs)(
                "div",
                {
                  className: `shop-item ${u === n.id ? "flash" : ""}`,
                  children: [
                    (0, s.jsx)("span", {
                      className: "si-emoji",
                      children: n.emoji,
                    }),
                    (0, s.jsxs)("span", {
                      className: "si-body",
                      children: [
                        (0, s.jsxs)("span", {
                          className: "si-name",
                          children: [
                            n.name,
                            " ",
                            (0, s.jsxs)("b", {
                              className: "si-have",
                              children: ["×", t[n.id]],
                            }),
                          ],
                        }),
                        (0, s.jsx)("span", {
                          className: "si-desc",
                          children: n.desc,
                        }),
                      ],
                    }),
                    (0, s.jsxs)("button", {
                      className: `si-buy ${!r ? "cant" : ""}`,
                      disabled: !r,
                      onClick: () => {
                        (a(n.id), m(n.id), setTimeout(() => m(null), 500));
                      },
                      children: ["🪙 ", n.price],
                    }),
                  ],
                },
                n.id,
              );
            }),
          }),
          MG_H(
            "div",
            { className: "char-picker" },
            MG_H("div", { className: "char-picker-title" }, "🐾 Elige tu compañero"),
            MG_H(
              "div",
              { className: "char-grid" },
              ...mgChars.map((cc) => {
                let unlocked = mgCharIsUnlocked(cc, dq),
                  sel = selChar === cc.id;
                return MG_H(
                  "button",
                  {
                    key: cc.id,
                    className:
                      "char-card" +
                      (sel ? " sel" : "") +
                      (unlocked ? "" : " locked"),
                    disabled: !unlocked,
                    onClick: () =>
                      unlocked &&
                      (setSelChar(cc.id),
                      (mgChar = cc.id),
                      eQ("mg_char", { id: cc.id })),
                  },
                  unlocked
                    ? MG_H(d, { mood: sel ? "excited" : "happy", size: 60, char: cc.id })
                    : MG_H("div", { className: "char-lock" }, "🔒"),
                  MG_H("div", { className: "char-name" }, unlocked ? cc.name : "Completa " + cc.unlock + " niveles"),
                  // El potenciador se muestra también bloqueado: saber qué se
                  // gana es lo que hace que valga la pena desbloquearlo.
                  cc.perk
                    ? MG_H("div", { className: "char-perk" }, cc.perk.emoji + " " + cc.perk.txt)
                    : null,
                  sel && MG_H("div", { className: "char-badge" }, "✓ elegido"),
                );
              }),
            ),
          ),
          (0, s.jsxs)("div", {
            className: "ropero-head",
            children: [
              (0, s.jsx)(d, { mood: "happy", size: 72, outfit: n.equipped }),
              (0, s.jsxs)("div", {
                className: "ropero-title",
                children: [
                  (0, s.jsx)("span", {
                    className: "rt-name",
                    children: "🎩 Ropero de " + mgCharName(),
                  }),
                  (0, s.jsx)("span", {
                    className: "rt-sub",
                    children: "¡Vísteme con tus monedas! " + mgVoz(),
                  }),
                ],
              }),
            ],
          }),
          (0, s.jsx)("div", {
            className: "shop-list",
            children: c
              .filter(
                (t) =>
                  !t.season ||
                  t.season === new Date().getMonth() + 1 ||
                  n.owned.includes(t.id),
              )
              .map((t) => {
              let a = n.owned.includes(t.id),
                i = n.equipped === t.id,
                o = e >= t.price;
              return (0, s.jsxs)(
                "div",
                {
                  className: "shop-item outfit-item",
                  children: [
                    (0, s.jsx)("span", {
                      className: "oi-preview",
                      children: (0, s.jsx)(d, {
                        mood: "happy",
                        size: 54,
                        outfit: t.id,
                      }),
                    }),
                    (0, s.jsxs)("span", {
                      className: "si-body",
                      children: [
                        (0, s.jsxs)("span", {
                          className: "si-name",
                          children: [t.emoji, " ", t.name],
                        }),
                        (0, s.jsx)("span", {
                          className: "si-desc",
                          children: i
                            ? "¡" + mgCharName() + " lo lleva puesto!"
                            : a
                              ? "Ya es tuyo"
                              : "Accesorio para " + mgCharName(),
                        }),
                      ],
                    }),
                    a
                      ? (0, s.jsx)("button", {
                          className: `si-buy equipped-btn ${i ? "on" : ""}`,
                          onClick: () => l(i ? null : t.id),
                          children: i ? "✅ Puesto" : "Poner",
                        })
                      : (0, s.jsxs)("button", {
                          className: `si-buy ${!o ? "cant" : ""}`,
                          disabled: !o,
                          onClick: () => r(t.id),
                          children: ["🪙 ", t.price],
                        }),
                  ],
                },
                t.id,
              );
            }),
          }),
          (0, s.jsx)("p", {
            className: "shop-tip",
            children:
              "💡 Gana monedas completando niveles nuevos del camino. ¡Los jefes dan cofres garantizados!",
          }),
        ],
      }),
    ],
  });
}
function tc({ facts: e, onBack: t, onReset: n }) {
  let [a, r] = (0, i.useState)(!1),
    l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    o = 0,
    c = 0;
  for (let t of l)
    for (let n of l) {
      let a = eh(e[`${t}x${n}`]);
      "mastered" === a ? o++ : "learning" === a && c++;
    }
  return (0, s.jsxs)("div", {
    className: "screen world-starwars",
    children: [
      (0, s.jsx)(eX, {}),
      (0, s.jsxs)("div", {
        className: "panel",
        children: [
          (0, s.jsx)("button", {
            className: "link-back",
            onClick: t,
            children: "◀\ufe0e Volver",
          }),
          (0, s.jsx)("h2", {
            className: "panel-title",
            children: "🗺️ Mi mapa de dominio",
          }),
          (0, s.jsx)("p", {
            className: "mastery-sub",
            children:
              "Cada cuadro es una multiplicación. Las divisiones también lo alimentan, porque son la misma familia de números.",
          }),
          (0, s.jsxs)("div", {
            className: "mastery-grid",
            children: [
              (0, s.jsx)("div", { className: "mg-cell mg-head" }),
              l.map((e) =>
                (0, s.jsx)(
                  "div",
                  { className: "mg-cell mg-head", children: e },
                  e,
                ),
              ),
              l.map((t) =>
                (0, s.jsxs)(
                  "div",
                  {
                    className: "mg-row",
                    children: [
                      (0, s.jsx)("div", {
                        className: "mg-cell mg-head",
                        children: t,
                      }),
                      l.map((n) => {
                        let a = eh(e[`${t}x${n}`]);
                        return (0, s.jsx)(
                          "div",
                          {
                            className: `mg-cell mg-${a}`,
                            title: `${t}\xd7${n}`,
                          },
                          n,
                        );
                      }),
                    ],
                  },
                  t,
                ),
              ),
            ],
          }),
          (0, s.jsxs)("div", {
            className: "mg-legend",
            children: [
              (0, s.jsxs)("span", {
                children: [
                  (0, s.jsx)("i", { className: "mg-dot mg-new" }),
                  " nuevo",
                ],
              }),
              (0, s.jsxs)("span", {
                children: [
                  (0, s.jsx)("i", { className: "mg-dot mg-learning" }),
                  " aprendiendo",
                ],
              }),
              (0, s.jsxs)("span", {
                children: [
                  (0, s.jsx)("i", { className: "mg-dot mg-mastered" }),
                  " dominado",
                ],
              }),
            ],
          }),
          (0, s.jsxs)("div", {
            className: "mg-count",
            children: [
              "✅ ",
              o,
              " dominadas · 📚 ",
              c,
              " en progreso · de 100",
            ],
          }),
          (0, s.jsx)("button", {
            className: `reset-btn ${a ? "armed" : ""}`,
            onClick: () => {
              a ? (n(), r(!1)) : r(!0);
            },
            onBlur: () => r(!1),
            children: a
              ? "⚠️ Toca de nuevo para borrar todo"
              : "🗑️ Reiniciar progreso",
          }),
        ],
      }),
    ],
  });
}
(0, o.createRoot)(document.getElementById("root")).render(
  (0, s.jsx)(i.StrictMode, {
    children: (0, s.jsx)(function () {
      let [e, t] = (0, i.useState)("profile"),
        [n, a] = (0, i.useState)({}),
        [r, l] = (0, i.useState)({ date: "", streak: 0, bestScore: 0 }),
        [o, d] = (0, i.useState)({}),
        [mgGifts, mgSetGifts] = (0, i.useState)([]),
        [f, m] = (0, i.useState)(eo[0]),
        [p, h] = (0, i.useState)({ correct: 0, stars: 0, newSticker: !1 }),
        [b, x] = (0, i.useState)({}),
        [k, j] = (0, i.useState)(0),
        [w, N] = (0, i.useState)({ ...el }),
        [S, C] = (0, i.useState)(en[0]),
        [E, $] = (0, i.useState)({ potion: !1, shield: !1, lens: 0 }),
        [z, T] = (0, i.useState)({
          passed: !1,
          correct: 0,
          runCoins: 0,
          stars: 0,
          missed: [],
          usedLens: 0,
        }),
        [M, _] = (0, i.useState)({ coins: 0, firstTime: !1, chest: null }),
        [P, A] = (0, i.useState)(!1),
        [L, D] = (0, i.useState)({ best: 0, plays: 0 }),
        [F, O] = (0, i.useState)({ score: 0, best: 0, isRecord: !1, coins: 0 }),
        [I, U] = (0, i.useState)({ lastDate: "", sessions: 0 }),
        [B, Q] = (0, i.useState)({ correct: 0, coins: 0, firstToday: !1 }),
        [H, W] = (0, i.useState)({ ...y }),
        [V, K] = (0, i.useState)({ ...R }),
        [G, Y] = (0, i.useState)({ owned: [], equipped: null }),
        [J, et] = (0, i.useState)(!0),
        [es, ei] = (0, i.useState)({ op: "mixto", diff: 0 }),
        [ec, eu] = (0, i.useState)(eU()),
        [mgP, mgSetP] = (0, i.useState)(mgLoadProfiles()),
        [mgA, mgSetA] = (0, i.useState)(mgGetActive()),
        [mgEd, mgSetEd] = (0, i.useState)(null),
        // mgSkill es global de módulo (como mgChar): este contador fuerza
        // el repintado cuando cambia de banda o de perfil.
        [mgSkillV, mgSetSkillV] = (0, i.useState)(0),
        mgSaveSkill = (0, i.useCallback)((s) => {
          (eQ("mg_skill", s), mgSetSkillV((v) => v + 1));
        }, []);
      (0, i.useEffect)(() => {
        mgSeedCharUnlocks();
      }, []);
      (0, i.useEffect)(() => {
        if (!mgA) return;
        (async () => {
          (a(await eH("mg_facts", {})),
            l(await eH("mg_daily", { date: "", streak: 0, bestScore: 0 })),
            // mg_little_path se carga tal cual: los ids de `eo` son fijos, así
            // que no necesita migración por versión (ver nota en la def de eo).
            d(await eH("mg_little_path", {})),
            mgSetGifts(await eH("mg_gifts", [])));
          {
            // Si falta la marca de versión, el avance ya está en el formato
            // actual (perfiles recientes / importado): asumimos la versión de
            // hoy en vez de "v1", para no pasar datos actuales por la cadena de
            // remapeo antigua y revolverlos. Además, ninguna reubicación
            // descarta niveles: lo que no se pueda mapear se conserva tal cual.
            let ver = (await eH("mg_pathver", { v: 9 })).v,
              path = await eH("mg_path", {});
            if (ver < 2 && Object.keys(path).length > 0) {
              let t = {};
              for (let [n, a] of Object.entries(path)) {
                let k = ea[Number(n)] || Number(n);
                t[k] == null && (t[k] = a);
              }
              ((path = t), (ver = 2));
            }
            if (ver < 9 && Object.keys(path).length > 0) {
              let idToName =
                  ver >= 8
                    ? MG_V8_NAMES
                    : ver >= 7
                      ? MG_V7_NAMES
                      : ver >= 6
                        ? MG_V6_NAMES
                      : ver >= 5
                        ? MG_V5_NAMES
                        : ver >= 4
                          ? MG_V4_NAMES
                          : ver >= 3
                            ? MG_V3_NAMES
                            : MG_V2_NAMES,
                nameToNew = {};
              en.forEach((l) => (nameToNew[l.name] = l.id));
              let t = {};
              for (let [n, a] of Object.entries(path)) {
                let nm = idToName[Number(n)],
                  nid = (nm ? nameToNew[nm] : null) || Number(n);
                t[nid] == null && (t[nid] = a);
              }
              path = t;
            }
            (x(path), eQ("mg_path", path), eQ("mg_pathver", { v: 9 }));
          }
          (j(await eH("mg_coins", 0)),
            N({ ...el, ...(await eH("mg_inv", { ...el })) }),
            D(await eH("mg_reto", { best: 0, plays: 0 })),
            U(await eH("mg_practice", { lastDate: "", sessions: 0 })));
          {
            let e = await eH("mg_goals", eU());
            eu(e.date === eV() ? e : eU());
          }
          (W({ ...y, ...(await eH("mg_brain", { ...y })) }),
            K({ ...R, ...(await eH("mg_lbrain", { ...R })) }));
          // El compañero se restaura ANTES del outfit: Y(e) siempre recibe
          // un objeto nuevo y garantiza un re-render con el mgChar correcto
          // (mgChar es global de módulo, asignarlo no repinta por sí solo).
          let ch = await eH("mg_char", { id: "turbo" }),
            chId = ch.id || "turbo",
            chDef = mgChars.find((c) => c.id === chId);
          ((!chDef || (chDef.unlock > 0 && !mgCharsUnlocked()[chId])) &&
            (chId = "turbo"),
            (mgChar = chId));
          // Dificultad del niño. Si la llave no existe (todo perfil previo
          // a esta función), se siembra por edad y ya: no hay migración ni
          // se toca el avance guardado.
          {
            let pf = mgLoadProfiles().find((p) => p.id === mgA),
              sk = await eH("mg_skill", null);
            mgSkill =
              sk && null != sk.band
                ? { v: 1, band: sk.band, hist: sk.hist || [], manual: null != sk.manual ? sk.manual : null }
                : { v: 1, band: mgSkillSeed(pf ? pf.age : 6), hist: [], manual: null };
            mgSetSkillV((v) => v + 1);
          }
           // Ajustes de experiencia. Si la llave no existe, todo encendido:
           // el juego completo es el comportamiento por defecto.
           mgSet = { ...mgSetDefaults(), ...((await eH("mg_settings", null)) || {}) };
          let e = await eH("mg_outfit", { owned: [], equipped: null });
          (Y(e), (u = e.equipped));
          let t = await eH("mg_sound", { on: !0 });
          (et(t.on), (g = !t.on));
        })();
      }, [mgA]);
      let ed = (e) => {
          (a(e), eQ("mg_facts", e));
        },
        ef = (e) => {
          eu((t) => {
            var n;
            let a = t.date === eV() ? t : eU(),
              r = { ...a, [e]: a[e] + 1 };
            return (
              !r.claimed &&
                (n = r).path >= 2 &&
                n.practice >= 1 &&
                n.brain >= 1 &&
                ((r.claimed = !0),
                v.chest(),
                j((e) => {
                  let t = e + 15;
                  return (eQ("mg_coins", t), t);
                })),
              eQ("mg_goals", r),
              r
            );
          });
        },
        em = en.find((e) => e.id === S.id + 1),
        ep = eo.find((e) => e.id === f.id + 1);
      return (0, s.jsxs)("div", {
        className: "app-root",
        children: [
          "profile" === e &&
            (0, s.jsx)(MgProfileSelector, {
              profiles: mgP,
              soundOn: J,
              onToggleSound: () => {
                et((e) => {
                  let t = !e;
                  return ((g = !t), eQ("mg_sound", { on: t }), t && v.ok(), t);
                });
              },
              onParents: () => t("parents"),
              onPick: (pf) => {
                (mgMusicStart(),
                  mgSetActive(pf.id),
                  mgSetA(pf.id),
                  t(mgRouteForAge(pf.age) === "pequeno" ? "little-hub" : "hub"));
              },
              onAdd: () => {
                (mgSetEd(null), t("edit-profile"));
              },
            }),
          "edit-profile" === e &&
            (0, s.jsx)(MgProfileEditor, {
              initial: mgEd,
              onCancel: () => t("profile"),
              onDelete: mgEd
                ? (pf) => {
                    let n = mgP.filter((p) => p.id !== pf.id);
                    (mgSaveProfiles(n),
                      mgSetP(n),
                      mgClearProfileData(pf.id),
                      mgA === pf.id && (mgSetActive(null), mgSetA(null)),
                      t("profile"));
                  }
                : null,
              onSave: (data) => {
                if (mgEd) {
                  let n = mgP.map((p) =>
                    p.id === mgEd.id ? { ...p, ...data } : p,
                  );
                  (mgSaveProfiles(n), mgSetP(n), t("profile"));
                } else {
                  let a = mgNewId(),
                    r = 0 === mgP.length;
                  r && mgLegacyHasProgress() && mgMigrateLegacyInto(a);
                  let l = { id: a, ...data },
                    n = mgP.concat([l]);
                  (mgSaveProfiles(n),
                    mgSetP(n),
                    mgSetActive(a),
                    mgSetA(a),
                    t(mgRouteForAge(l.age) === "pequeno" ? "little-hub" : "hub"));
                }
              },
            }),
          "hub" === e &&
            (0, s.jsx)(MgHub, {
              kind: "big",
              name: (mgP.find((p) => p.id === mgA) || {}).name,
              coins: k,
              streak: r.streak,
              onBack: () => t("profile"),
              items: [
                { icon: "map", title: "Camino", sub: "tu aventura de niveles", cls: "wide", onClick: () => t("path") },
                { icon: "puzzle", title: "Poder cerebral", sub: "sudoku · memoria · lógica", onClick: () => t("brain") },
                { icon: "target", title: "Práctica libre", sub: "elige la operación", onClick: () => t("libre") },
                { icon: "bolt", title: "Reto relámpago", sub: "60 segundos", onClick: () => t("reto") },
                { icon: "brain", title: "Repaso inteligente", sub: "tus datos difíciles", onClick: () => t("practice") },
                { icon: "trophy", title: "Colección", sub: "mapa de dominio", onClick: () => t("mastery") },
                { icon: "chest", title: "Tienda", sub: "gorros para " + mgCharName(), onClick: () => t("shop") },
              ],
            }),
          "little-hub" === e &&
            (0, s.jsx)(MgHub, {
              kind: "little",
              name: (mgP.find((p) => p.id === mgA) || {}).name,
              onBack: () => t("profile"),
              items: [
                { icon: "map", title: "Mi aventura", sub: "niveles con calcomanías", cls: "wide", onClick: () => t("little-path") },
                { icon: "puzzle", title: "Juegos de lógica", sub: "memoria · parejas · tren", onClick: () => t("little-brain") },
                { icon: "book", title: "Mi álbum", sub: "tus calcomanías", onClick: () => t("stickers") },
                { emoji: "🐾", title: "Mi compañero", sub: "elige a Turbo, Michi...", onClick: () => t("charpick") },
              ],
            }),
          "little-path" === e &&
            (0, s.jsx)(eZ, {
              progress: o,
              onLevel: (e) => {
                (m(e), t("little-play"));
              },
              onStickers: () => t("stickers"),
              onBrain: () => t("little-brain"),
              onBack: () => t("little-hub"),
            }),
          "little-brain" === e &&
            (0, s.jsx)(X, {
              levels: V,
              onWin: (e) => {
                K((t) => {
                  let n = { ...t, [e]: t[e] + 1 };
                  return (eQ("mg_lbrain", n), n);
                });
              },
              onBack: () => t("little-hub"),
            }),
          "stickers" === e &&
            (0, s.jsx)(e0, { progress: o, gifts: mgGifts, onBack: () => t("little-hub") }),
          "charpick" === e &&
            (0, s.jsx)(MgCharScreen, {
              charDone:
                Object.values(b).filter((z) => z && z.done).length +
                Object.values(o).filter((z) => z && z.done).length,
              onBack: () =>
                t(mgRouteForAge((mgP.find((p) => p.id === mgA) || {}).age) === "pequeno" ? "little-hub" : "hub"),
            }),
          "little-play" === e &&
            (0, s.jsx)(e1, {
              level: f,
              onSkill: mgSaveSkill,
              onDone: (e) => {
                let n = eG(e / f.questions);
                /* Regalo de Rita: solo al superar el nivel por primera vez, y
                   nunca repetido. Va aquí y no en la pantalla de resultado
                   porque es donde se persiste el avance. */
                let mgReg = null;
                if ("regalos" === mgPerkMiniKey() && !o[f.id]?.done && Math.random() < 0.4) {
                  mgReg = mgRegaloNuevo(mgGifts);
                  if (mgReg) {
                    let g = [...mgGifts, mgReg.e];
                    (mgSetGifts(g), eQ("mg_gifts", g));
                  }
                }
                h({ correct: e, stars: n, newSticker: !o[f.id]?.done, regalo: mgReg });
                let a = o[f.id] || { stars: 0, done: !1 },
                  r = {
                    ...o,
                    [f.id]: { done: !0, stars: Math.max(a.stars, n) },
                  };
                (d(r), eQ("mg_little_path", r), t("little-result"));
              },
            }),
          "little-result" === e &&
            (0, s.jsx)(e2, {
              level: f,
              correct: p.correct,
              stars: p.stars,
              isNewSticker: p.newSticker,
              regalo: p.regalo,
              hasNext: !!ep && !!o[f.id]?.done,
              onNext: () => {
                ep && (m(ep), t("little-play"));
              },
              onPath: () => t("little-path"),
            }),
          "path" === e &&
            (0, s.jsx)(e3, {
              progress: b,
              coins: k,
              daily: r,
              retoBest: L.best,
              practiceReady: I.lastDate !== eV(),
              goals: ec,
              onLevel: (e) => {
                (C(e), t("prelevel"));
              },
              onShop: () => t("shop"),
              onMastery: () => t("mastery"),
              onReto: () => t("reto"),
              onPractice: () => t("practice"),
              onBrain: () => t("brain"),
              onLibre: () => t("libre"),
              onBack: () => t("hub"),
            }),
          "prelevel" === e &&
            (0, s.jsx)(e5, {
              level: S,
              progress: b,
              inv: w,
              onStart: (e) => {
                let n = {
                  potion: w.potion - !!e.potion,
                  shield: w.shield - !!e.shield,
                  lens: w.lens - e.lens,
                  retry: w.retry - e.retry,
                };
                (N(n), eQ("mg_inv", n), $(e), t("level-play"));
              },
              onBack: () => t("path"),
            }),
          "level-play" === e &&
            (0, s.jsx)(e8, {
              level: S,
              equipped: E,
              facts: n,
              setFacts: ed,
              onDone: (e) => {
                e.passed && ef("path");
                let a = E.lens - e.usedLens,
                  ar = (E.retry || 0) - (e.usedRetry || 0);
                ar > 0 &&
                  N((e) => {
                    let t = { ...e, retry: (e.retry || 0) + ar };
                    return (eQ("mg_inv", t), t);
                  });
                if (
                  (a > 0 &&
                    N((e) => {
                      let t = { ...e, lens: e.lens + a };
                      return (eQ("mg_inv", t), t);
                    }),
                  T(e),
                  e.passed)
                ) {
                  var s, i;
                  // Potenciador de la zorra: más cofres y, dentro, más objetos
                  // que monedas. Vive aquí y no en el nivel porque el cofre se
                  // decide al cerrar la partida.
                  let mgZorro = "objetos" === mgPerkKey();
                  let t,
                    n,
                    a,
                    o,
                    c =
                      ((s = e.stars),
                      (i = e.runCoins),
                      (t = !b[S.id]?.done),
                      (n = "boss" === S.kind),
                      (a = i),
                      t
                        ? ((a += n ? 50 : 25), 3 === s && (a += 15))
                        : (a = Math.max(2, Math.floor(a / 4))),
                      (o = null),
                      t &&
                        (n || (mgZorro ? 0.75 : 0.55) > Math.random()) &&
                        (o =
                          Math.random() <
                          (mgZorro ? (n ? 0.4 : 0.45) : n ? 0.7 : 0.75)
                            ? {
                                kind: "coins",
                                coins: n ? Z(30, 60) : Z(15, 35),
                              }
                            : {
                                kind: "item",
                                item: ee(["potion", "shield", "lens", "retry"]),
                              }),
                      { coins: a, firstTime: t, chest: o });
                  _(c);
                  let u = b[S.id] || { stars: 0, done: !1 },
                    d = {
                      ...b,
                      [S.id]: { done: !0, stars: Math.max(u.stars, e.stars) },
                    };
                  (x(d),
                    eQ("mg_path", d),
                    j((e) => {
                      let t = e + c.coins;
                      return (eQ("mg_coins", t), t);
                    }),
                    c.chest &&
                      (A(!0),
                      v.chest(),
                      "coins" === c.chest.kind
                        ? j((e) => {
                            let t = e + (c.chest.coins || 0);
                            return (eQ("mg_coins", t), t);
                          })
                        : c.chest.item &&
                          N((e) => {
                            let t = {
                              ...e,
                              [c.chest.item]: e[c.chest.item] + 1,
                            };
                            return (eQ("mg_inv", t), t);
                          })));
                  let f = eK(r, e.runCoins);
                  (l(f), eQ("mg_daily", f));
                } else {
                  let t = Math.max(1, Math.floor(e.runCoins / 2));
                  (_({ coins: t, firstTime: !1, chest: null }),
                    j((e) => {
                      let n = e + t;
                      return (eQ("mg_coins", n), n);
                    }));
                }
                (eQ("mg_facts", n), t("level-result"));
              },
              onQuit: () => t("path"),
            }),
          "level-result" === e &&
            (0, s.jsx)(e9, {
              level: S,
              run: z,
              reward: M,
              daily: r,
              chestPending: P,
              onChestClosed: () => A(!1),
              hasNext: !!em,
              onNext: () => {
                em && (C(em), t("prelevel"));
              },
              onRetry: () => t("prelevel"),
              onPath: () => t("path"),
              onShop: () => t("shop"),
            }),
          "reto" === e &&
            (0, s.jsx)(te, {
              progress: b,
              facts: n,
              setFacts: ed,
              onDone: (e) => {
                let a = e > L.best,
                  s = Math.floor(e / 2),
                  i = { best: Math.max(L.best, e), plays: L.plays + 1 };
                (D(i),
                  eQ("mg_reto", i),
                  j((e) => {
                    let t = e + s;
                    return (eQ("mg_coins", t), t);
                  }));
                let o = eK(r, e);
                (l(o),
                  eQ("mg_daily", o),
                  eQ("mg_facts", n),
                  O({ score: e, best: i.best, isRecord: a, coins: s }),
                  t("reto-result"));
              },
              onQuit: () => t("hub"),
            }),
          "reto-result" === e &&
            (0, s.jsx)(tt, {
              run: F,
              onAgain: () => t("reto"),
              onPath: () => t("hub"),
            }),
          "practice" === e &&
            (0, s.jsx)(tn, {
              facts: n,
              setFacts: ed,
              onDone: (e) => {
                ef("practice");
                let a = I.lastDate !== eV(),
                  s = a ? 10 + e : 0,
                  i = { lastDate: eV(), sessions: I.sessions + 1 };
                (U(i),
                  eQ("mg_practice", i),
                  s > 0 &&
                    j((e) => {
                      let t = e + s;
                      return (eQ("mg_coins", t), t);
                    }));
                let o = eK(r, e);
                (l(o),
                  eQ("mg_daily", o),
                  eQ("mg_facts", n),
                  Q({ correct: e, coins: s, firstToday: a }),
                  t("practice-result"));
              },
              onQuit: () => t("hub"),
            }),
          "practice-result" === e &&
            (0, s.jsx)(ta, {
              run: B,
              onAgain: () => t("practice"),
              onPath: () => t("hub"),
            }),
          "libre" === e &&
            (0, s.jsx)(ts, {
              onStart: (e, n) => {
                (ei({ op: e, diff: n }), t("libre-play"));
              },
              onBack: () => t("hub"),
            }),
          "libre-play" === e &&
            (0, s.jsx)(ti, {
              op: es.op,
              diff: es.diff,
              facts: n,
              setFacts: ed,
              onDone: (e) => {
                ef("practice");
                let a = Math.min(5, Math.floor(e / 2));
                a > 0 &&
                  j((e) => {
                    let t = e + a;
                    return (eQ("mg_coins", t), t);
                  });
                let s = eK(r, e);
                (l(s),
                  eQ("mg_daily", s),
                  eQ("mg_facts", n),
                  v.win(),
                  t("libre"));
              },
              onQuit: () => t("libre"),
            }),
          "parents" === e &&
            (0, s.jsx)(tr, {
              facts: n,
              pathProgress: b,
              littleProgress: o,
              daily: r,
              retoBest: L.best,
              brainLevels: H,
              lbrainLevels: V,
              profiles: mgP,
              activeId: mgA,
              onEditProfile: (pf) => {
                (mgSetEd(pf), t("edit-profile"));
              },
              onAddProfile: () => {
                (mgSetEd(null), t("edit-profile"));
              },
              onBack: () => t("profile"),
            }),
          "brain" === e &&
            (0, s.jsx)(q, {
              levels: H,
              onReward: (e, t) => {
                (ef("brain"),
                  W((t) => {
                    let n = { ...t, [e]: t[e] + 1 };
                    return (eQ("mg_brain", n), n);
                  }),
                  j((e) => {
                    let n = e + t;
                    return (eQ("mg_coins", n), n);
                  }));
                let n = eK(r, t);
                (l(n), eQ("mg_daily", n));
              },
              onBack: () => t("hub"),
            }),
          "shop" === e &&
            (0, s.jsx)(to, {
              coins: k,
              inv: w,
              outfit: G,
              charDone:
                Object.values(b).filter((z) => z && z.done).length +
                Object.values(o).filter((z) => z && z.done).length,
              onBuy: (e) => {
                v.coin();
                let t = er.find((t) => t.id === e);
                k < t.price ||
                  (j((e) => {
                    let n = e - t.price;
                    return (eQ("mg_coins", n), n);
                  }),
                  N((t) => {
                    let n = { ...t, [e]: t[e] + 1 };
                    return (eQ("mg_inv", n), n);
                  }));
              },
              onBuyOutfit: (e) => {
                let t = c.find((t) => t.id === e);
                k < t.price ||
                  G.owned.includes(e) ||
                  (v.coin(),
                  j((e) => {
                    let n = e - t.price;
                    return (eQ("mg_coins", n), n);
                  }),
                  Y((t) => {
                    let n = { owned: [...t.owned, e], equipped: e };
                    return (eQ("mg_outfit", n), (u = e), n);
                  }));
              },
              onEquip: (e) => {
                Y((t) => {
                  let n = { ...t, equipped: e };
                  return (eQ("mg_outfit", n), (u = e), n);
                });
              },
              onBack: () => t("hub"),
            }),
          "mastery" === e &&
            (0, s.jsx)(tc, {
              facts: n,
              onBack: () => t("hub"),
              onReset: () => {
                for (let e of eW) {
                  delete eB[e];
                  try {
                    window.localStorage.removeItem(e);
                  } catch {}
                }
                (a({}),
                  l({ date: "", streak: 0, bestScore: 0 }),
                  d({}),
                  x({}),
                  j(0),
                  N({ ...el }),
                  D({ best: 0, plays: 0 }),
                  U({ lastDate: "", sessions: 0 }),
                  W({ ...y }),
                  eQ("mg_brain", { ...y }),
                  K({ ...R }),
                  Y({ owned: [], equipped: null }),
                  (u = null));
              },
            }),
        ],
      });
    }, {}),
  }),
);
