function _slicedToArray(e, t) {
  return (
    _arrayWithHoles(e) ||
    _iterableToArrayLimit(e, t) ||
    _unsupportedIterableToArray(e, t) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _iterableToArrayLimit(e, t) {
  var a =
    null == e
      ? null
      : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
  if (null != a) {
    var r,
      n,
      i = [],
      o = !0,
      s = !1;
    try {
      for (
        a = a.call(e);
        !(o = (r = a.next()).done) && (i.push(r.value), !t || i.length !== t);
        o = !0
      );
    } catch (e) {
      (s = !0), (n = e);
    } finally {
      try {
        o || null == a.return || a.return();
      } finally {
        if (s) throw n;
      }
    }
    return i;
  }
}
function _arrayWithHoles(e) {
  if (Array.isArray(e)) return e;
}
function _createForOfIteratorHelper(e, t) {
  var a =
    ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
  if (!a) {
    if (
      Array.isArray(e) ||
      (a = _unsupportedIterableToArray(e)) ||
      (t && e && "number" == typeof e.length)
    ) {
      a && (e = a);
      var r = 0,
        n = function () {};
      return {
        s: n,
        n: function () {
          return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
        },
        e: function (e) {
          throw e;
        },
        f: n,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  var i,
    o = !0,
    s = !1;
  return {
    s: function () {
      a = a.call(e);
    },
    n: function () {
      var e = a.next();
      return (o = e.done), e;
    },
    e: function (e) {
      (s = !0), (i = e);
    },
    f: function () {
      try {
        o || null == a.return || a.return();
      } finally {
        if (s) throw i;
      }
    },
  };
}
function _toConsumableArray(e) {
  return (
    _arrayWithoutHoles(e) ||
    _iterableToArray(e) ||
    _unsupportedIterableToArray(e) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(e, t) {
  if (e) {
    if ("string" == typeof e) return _arrayLikeToArray(e, t);
    var a = Object.prototype.toString.call(e).slice(8, -1);
    return (
      "Object" === a && e.constructor && (a = e.constructor.name),
      "Map" === a || "Set" === a
        ? Array.from(e)
        : "Arguments" === a ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
        ? _arrayLikeToArray(e, t)
        : void 0
    );
  }
}
function _iterableToArray(e) {
  if (
    ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
    null != e["@@iterator"]
  )
    return Array.from(e);
}
function _arrayWithoutHoles(e) {
  if (Array.isArray(e)) return _arrayLikeToArray(e);
}
function _arrayLikeToArray(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
  return r;
}
function _defineProperty(e, t, a) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = a),
    e
  );
}
function _typeof(e) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(e);
}
function ouibounce(e, t) {
  "use strict";
  var a = t || {},
    r = a.aggressive || !1,
    n = m(a.sensitivity, 20),
    i = m(a.timer, 1e3),
    o = m(a.delay, 0),
    s = a.callback || function () {},
    l = f(a.cookieExpire) || "",
    c = a.cookieDomain ? ";domain=" + a.cookieDomain : "",
    d = a.cookieName ? a.cookieName : "viewedOuibounceModal",
    u = !0 === a.sitewide ? ";path=/" : "",
    p = null,
    h = document.documentElement;
  function m(e, t) {
    return void 0 === e ? t : e;
  }
  function f(e) {
    var t = 24 * e * 60 * 60 * 1e3,
      a = new Date();
    return a.setTime(a.getTime() + t), "; expires=" + a.toUTCString();
  }
  function v(e) {
    e.clientY > n || (p = setTimeout(T, o));
  }
  function g() {
    p && (clearTimeout(p), (p = null));
  }
  setTimeout(function () {
    if (C()) return;
    h.addEventListener("mouseleave", v),
      h.addEventListener("mouseenter", g),
      h.addEventListener("keydown", b);
  }, i);
  var y = !1;
  function b(e) {
    y || (e.metaKey && 76 === e.keyCode && ((y = !0), (p = setTimeout(T, o))));
  }
  function w(e, t) {
    return (
      (function () {
        for (
          var e = document.cookie.split("; "), t = {}, a = e.length - 1;
          a >= 0;
          a--
        ) {
          var r = e[a].split("=");
          t[r[0]] = r[1];
        }
        return t;
      })()[e] === t
    );
  }
  function C() {
    return w(d, "true") && !r;
  }
  function T() {
    C() || (e && (e.style.display = "block"), s(), k());
  }
  function k(e) {
    var t = e || {};
    void 0 !== t.cookieExpire && (l = f(t.cookieExpire)),
      !0 === t.sitewide && (u = ";path=/"),
      void 0 !== t.cookieDomain && (c = "; secure; domain=" + t.cookieDomain),
      void 0 !== t.cookieName && (d = t.cookieName),
      (document.cookie = d + "=true" + l + c + u),
      h.removeEventListener("mouseleave", v),
      h.removeEventListener("mouseenter", g),
      h.removeEventListener("keydown", b);
  }
  return { fire: T, disable: k, isDisabled: C };
}
var domcache_srp, $dom_element;
!(function (e, t) {
  "use strict";
  "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) &&
  "object" === _typeof(module.exports)
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var a = [],
    r = Object.getPrototypeOf,
    n = a.slice,
    i = a.flat
      ? function (e) {
          return a.flat.call(e);
        }
      : function (e) {
          return a.concat.apply([], e);
        },
    o = a.push,
    s = a.indexOf,
    l = {},
    c = l.toString,
    d = l.hasOwnProperty,
    u = d.toString,
    p = u.call(Object),
    h = {},
    m = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    f = function (e) {
      return null != e && e === e.window;
    },
    v = e.document,
    g = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function y(e, t, a) {
    var r,
      n,
      i = (a = a || v).createElement("script");
    if (((i.text = e), t))
      for (r in g)
        (n = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          i.setAttribute(r, n);
    a.head.appendChild(i).parentNode.removeChild(i);
  }
  function b(e) {
    return null == e
      ? e + ""
      : "object" === _typeof(e) || "function" == typeof e
      ? l[c.call(e)] || "object"
      : _typeof(e);
  }
  var w = function e(t, a) {
    return new e.fn.init(t, a);
  };
  function C(e) {
    var t = !!e && "length" in e && e.length,
      a = b(e);
    return (
      !m(e) &&
      !f(e) &&
      ("array" === a ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  (w.fn = w.prototype =
    {
      jquery: "3.5.0",
      constructor: w,
      length: 0,
      toArray: function () {
        return n.call(this);
      },
      get: function (e) {
        return null == e
          ? n.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = w.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return w.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          w.map(this, function (t, a) {
            return e.call(t, a, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(n.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          w.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          w.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          a = +e + (e < 0 ? t : 0);
        return this.pushStack(a >= 0 && a < t ? [this[a]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: o,
      sort: a.sort,
      splice: a.splice,
    }),
    (w.extend = w.fn.extend =
      function () {
        var e,
          t,
          a,
          r,
          n,
          i,
          o = arguments[0] || {},
          s = 1,
          l = arguments.length,
          c = !1;
        for (
          "boolean" == typeof o && ((c = o), (o = arguments[s] || {}), s++),
            "object" === _typeof(o) || m(o) || (o = {}),
            s === l && ((o = this), s--);
          s < l;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  o !== r &&
                  (c && r && (w.isPlainObject(r) || (n = Array.isArray(r)))
                    ? ((a = o[t]),
                      (i =
                        n && !Array.isArray(a)
                          ? []
                          : n || w.isPlainObject(a)
                          ? a
                          : {}),
                      (n = !1),
                      (o[t] = w.extend(c, i, r)))
                    : void 0 !== r && (o[t] = r));
        return o;
      }),
    w.extend({
      expando: "jQuery" + ("3.5.0" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, a;
        return (
          !(!e || "[object Object]" !== c.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (a = d.call(t, "constructor") && t.constructor) &&
              u.call(a) === p))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, a) {
        y(e, { nonce: t && t.nonce }, a);
      },
      each: function (e, t) {
        var a,
          r = 0;
        if (C(e))
          for (a = e.length; r < a && !1 !== t.call(e[r], r, e[r]); r++);
        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var a = t || [];
        return (
          null != e &&
            (C(Object(e))
              ? w.merge(a, "string" == typeof e ? [e] : e)
              : o.call(a, e)),
          a
        );
      },
      inArray: function (e, t, a) {
        return null == t ? -1 : s.call(t, e, a);
      },
      merge: function (e, t) {
        for (var a = +t.length, r = 0, n = e.length; r < a; r++) e[n++] = t[r];
        return (e.length = n), e;
      },
      grep: function (e, t, a) {
        for (var r = [], n = 0, i = e.length, o = !a; n < i; n++)
          !t(e[n], n) !== o && r.push(e[n]);
        return r;
      },
      map: function (e, t, a) {
        var r,
          n,
          o = 0,
          s = [];
        if (C(e))
          for (r = e.length; o < r; o++)
            null != (n = t(e[o], o, a)) && s.push(n);
        else for (o in e) null != (n = t(e[o], o, a)) && s.push(n);
        return i(s);
      },
      guid: 1,
      support: h,
    }),
    "function" == typeof Symbol && (w.fn[Symbol.iterator] = a[Symbol.iterator]),
    w.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var T = (function (e) {
    var t,
      a,
      r,
      n,
      i,
      o,
      s,
      l,
      c,
      d,
      u,
      p,
      h,
      m,
      f,
      v,
      g,
      y,
      b,
      w = "sizzle" + 1 * new Date(),
      C = e.document,
      T = 0,
      k = 0,
      S = le(),
      x = le(),
      _ = le(),
      E = le(),
      M = function (e, t) {
        return e === t && (u = !0), 0;
      },
      P = {}.hasOwnProperty,
      $ = [],
      L = $.pop,
      N = $.push,
      A = $.push,
      I = $.slice,
      O = function (e, t) {
        for (var a = 0, r = e.length; a < r; a++) if (e[a] === t) return a;
        return -1;
      },
      B =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      R = "[\\x20\\t\\r\\n\\f]",
      D =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        R +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      G =
        "\\[" +
        R +
        "*(" +
        D +
        ")(?:" +
        R +
        "*([*^$|!~]?=)" +
        R +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        D +
        "))|)" +
        R +
        "*\\]",
      j =
        ":(" +
        D +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        G +
        ")*)|.*)\\)|)",
      H = new RegExp(R + "+", "g"),
      V = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
      F = new RegExp("^" + R + "*," + R + "*"),
      q = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
      z = new RegExp(R + "|>"),
      U = new RegExp(j),
      W = new RegExp("^" + D + "$"),
      Y = {
        ID: new RegExp("^#(" + D + ")"),
        CLASS: new RegExp("^\\.(" + D + ")"),
        TAG: new RegExp("^(" + D + "|[*])"),
        ATTR: new RegExp("^" + G),
        PSEUDO: new RegExp("^" + j),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            R +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            R +
            "*(?:([+-]|)" +
            R +
            "*(\\d+)|))" +
            R +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + B + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            R +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            R +
            "*((?:-\\d)?\\d*)" +
            R +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      X = /HTML$/i,
      J = /^(?:input|select|textarea|button)$/i,
      K = /^h\d$/i,
      Q = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])", "g"),
      ae = function (e, t) {
        var a = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (a < 0
            ? String.fromCharCode(a + 65536)
            : String.fromCharCode((a >> 10) | 55296, (1023 & a) | 56320))
        );
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ne = function (e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      ie = function () {
        p();
      },
      oe = we(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      A.apply(($ = I.call(C.childNodes)), C.childNodes),
        $[C.childNodes.length].nodeType;
    } catch (e) {
      A = {
        apply: $.length
          ? function (e, t) {
              N.apply(e, I.call(t));
            }
          : function (e, t) {
              for (var a = e.length, r = 0; (e[a++] = t[r++]); );
              e.length = a - 1;
            },
      };
    }
    function se(e, t, r, n) {
      var i,
        s,
        c,
        d,
        u,
        m,
        g,
        y = t && t.ownerDocument,
        C = t ? t.nodeType : 9;
      if (
        ((r = r || []),
        "string" != typeof e || !e || (1 !== C && 9 !== C && 11 !== C))
      )
        return r;
      if (!n && (p(t), (t = t || h), f)) {
        if (11 !== C && (u = Z.exec(e)))
          if ((i = u[1])) {
            if (9 === C) {
              if (!(c = t.getElementById(i))) return r;
              if (c.id === i) return r.push(c), r;
            } else if (y && (c = y.getElementById(i)) && b(t, c) && c.id === i)
              return r.push(c), r;
          } else {
            if (u[2]) return A.apply(r, t.getElementsByTagName(e)), r;
            if (
              (i = u[3]) &&
              a.getElementsByClassName &&
              t.getElementsByClassName
            )
              return A.apply(r, t.getElementsByClassName(i)), r;
          }
        if (
          a.qsa &&
          !E[e + " "] &&
          (!v || !v.test(e)) &&
          (1 !== C || "object" !== t.nodeName.toLowerCase())
        ) {
          if (((g = e), (y = t), 1 === C && (z.test(e) || q.test(e)))) {
            for (
              ((y = (ee.test(e) && ge(t.parentNode)) || t) === t && a.scope) ||
                ((d = t.getAttribute("id"))
                  ? (d = d.replace(re, ne))
                  : t.setAttribute("id", (d = w))),
                s = (m = o(e)).length;
              s--;

            )
              m[s] = (d ? "#" + d : ":scope") + " " + be(m[s]);
            g = m.join(",");
          }
          try {
            return A.apply(r, y.querySelectorAll(g)), r;
          } catch (t) {
            E(e, !0);
          } finally {
            d === w && t.removeAttribute("id");
          }
        }
      }
      return l(e.replace(V, "$1"), t, r, n);
    }
    function le() {
      var e = [];
      return function t(a, n) {
        return (
          e.push(a + " ") > r.cacheLength && delete t[e.shift()],
          (t[a + " "] = n)
        );
      };
    }
    function ce(e) {
      return (e[w] = !0), e;
    }
    function de(e) {
      var t = h.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function ue(e, t) {
      for (var a = e.split("|"), n = a.length; n--; ) r.attrHandle[a[n]] = t;
    }
    function pe(e, t) {
      var a = t && e,
        r =
          a &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (a) for (; (a = a.nextSibling); ) if (a === t) return -1;
      return e ? 1 : -1;
    }
    function he(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function me(e) {
      return function (t) {
        var a = t.nodeName.toLowerCase();
        return ("input" === a || "button" === a) && t.type === e;
      };
    }
    function fe(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && oe(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function ve(e) {
      return ce(function (t) {
        return (
          (t = +t),
          ce(function (a, r) {
            for (var n, i = e([], a.length, t), o = i.length; o--; )
              a[(n = i[o])] && (a[n] = !(r[n] = a[n]));
          })
        );
      });
    }
    function ge(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (t in ((a = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e.namespaceURI,
          a = (e.ownerDocument || e).documentElement;
        return !X.test(t || (a && a.nodeName) || "HTML");
      }),
    (p = se.setDocument =
      function (e) {
        var t,
          n,
          o = e ? e.ownerDocument || e : C;
        return o != h && 9 === o.nodeType && o.documentElement
          ? ((m = (h = o).documentElement),
            (f = !i(h)),
            C != h &&
              (n = h.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", ie, !1)
                : n.attachEvent && n.attachEvent("onunload", ie)),
            (a.scope = de(function (e) {
              return (
                m.appendChild(e).appendChild(h.createElement("div")),
                void 0 !== e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (a.attributes = de(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (a.getElementsByTagName = de(function (e) {
              return (
                e.appendChild(h.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (a.getElementsByClassName = Q.test(h.getElementsByClassName)),
            (a.getById = de(function (e) {
              return (
                (m.appendChild(e).id = w),
                !h.getElementsByName || !h.getElementsByName(w).length
              );
            })),
            a.getById
              ? ((r.filter.ID = function (e) {
                  var t = e.replace(te, ae);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (r.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && f) {
                    var a = t.getElementById(e);
                    return a ? [a] : [];
                  }
                }))
              : ((r.filter.ID = function (e) {
                  var t = e.replace(te, ae);
                  return function (e) {
                    var a =
                      void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return a && a.value === t;
                  };
                }),
                (r.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && f) {
                    var a,
                      r,
                      n,
                      i = t.getElementById(e);
                    if (i) {
                      if ((a = i.getAttributeNode("id")) && a.value === e)
                        return [i];
                      for (n = t.getElementsByName(e), r = 0; (i = n[r++]); )
                        if ((a = i.getAttributeNode("id")) && a.value === e)
                          return [i];
                    }
                    return [];
                  }
                })),
            (r.find.TAG = a.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : a.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var a,
                    r = [],
                    n = 0,
                    i = t.getElementsByTagName(e);
                  if ("*" === e) {
                    for (; (a = i[n++]); ) 1 === a.nodeType && r.push(a);
                    return r;
                  }
                  return i;
                }),
            (r.find.CLASS =
              a.getElementsByClassName &&
              function (e, t) {
                if (void 0 !== t.getElementsByClassName && f)
                  return t.getElementsByClassName(e);
              }),
            (g = []),
            (v = []),
            (a.qsa = Q.test(h.querySelectorAll)) &&
              (de(function (e) {
                var t;
                (m.appendChild(e).innerHTML =
                  "<a id='" +
                  w +
                  "'></a><select id='" +
                  w +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push("[*^$]=" + R + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    v.push("\\[" + R + "*(?:value|" + B + ")"),
                  e.querySelectorAll("[id~=" + w + "-]").length || v.push("~="),
                  (t = h.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    v.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + w + "+*").length ||
                    v.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  v.push("[\\r\\n\\f]");
              }),
              de(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = h.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    v.push("name" + R + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    v.push(":enabled", ":disabled"),
                  (m.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (a.matchesSelector = Q.test(
              (y =
                m.matches ||
                m.webkitMatchesSelector ||
                m.mozMatchesSelector ||
                m.oMatchesSelector ||
                m.msMatchesSelector)
            )) &&
              de(function (e) {
                (a.disconnectedMatch = y.call(e, "*")),
                  y.call(e, "[s!='']:x"),
                  g.push("!=", j);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (g = g.length && new RegExp(g.join("|"))),
            (t = Q.test(m.compareDocumentPosition)),
            (b =
              t || Q.test(m.contains)
                ? function (e, t) {
                    var a = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(a.contains
                          ? a.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (M = t
              ? function (e, t) {
                  if (e === t) return (u = !0), 0;
                  var r =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    r ||
                    (1 &
                      (r =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!a.sortDetached && t.compareDocumentPosition(e) === r)
                      ? e == h || (e.ownerDocument == C && b(C, e))
                        ? -1
                        : t == h || (t.ownerDocument == C && b(C, t))
                        ? 1
                        : d
                        ? O(d, e) - O(d, t)
                        : 0
                      : 4 & r
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (u = !0), 0;
                  var a,
                    r = 0,
                    n = e.parentNode,
                    i = t.parentNode,
                    o = [e],
                    s = [t];
                  if (!n || !i)
                    return e == h
                      ? -1
                      : t == h
                      ? 1
                      : n
                      ? -1
                      : i
                      ? 1
                      : d
                      ? O(d, e) - O(d, t)
                      : 0;
                  if (n === i) return pe(e, t);
                  for (a = e; (a = a.parentNode); ) o.unshift(a);
                  for (a = t; (a = a.parentNode); ) s.unshift(a);
                  for (; o[r] === s[r]; ) r++;
                  return r
                    ? pe(o[r], s[r])
                    : o[r] == C
                    ? -1
                    : s[r] == C
                    ? 1
                    : 0;
                }),
            h)
          : h;
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (p(e),
        a.matchesSelector &&
          f &&
          !E[t + " "] &&
          (!g || !g.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var r = y.call(e, t);
          if (
            r ||
            a.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return r;
        } catch (e) {
          E(t, !0);
        }
      return se(t, h, null, [e]).length > 0;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != h && p(e), b(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != h && p(e);
      var n = r.attrHandle[t.toLowerCase()],
        i = n && P.call(r.attrHandle, t.toLowerCase()) ? n(e, t, !f) : void 0;
      return void 0 !== i
        ? i
        : a.attributes || !f
        ? e.getAttribute(t)
        : (i = e.getAttributeNode(t)) && i.specified
        ? i.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ne);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        r = [],
        n = 0,
        i = 0;
      if (
        ((u = !a.detectDuplicates),
        (d = !a.sortStable && e.slice(0)),
        e.sort(M),
        u)
      ) {
        for (; (t = e[i++]); ) t === e[i] && (n = r.push(i));
        for (; n--; ) e.splice(r[n], 1);
      }
      return (d = null), e;
    }),
    (n = se.getText =
      function (e) {
        var t,
          a = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) a += n(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else for (; (t = e[r++]); ) a += n(t);
        return a;
      }),
    ((r = se.selectors =
      {
        cacheLength: 50,
        createPseudo: ce,
        match: Y,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ae)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ae)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              a = !e[6] && e[2];
            return Y.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : a &&
                    U.test(a) &&
                    (t = o(a, !0)) &&
                    (t = a.indexOf(")", a.length - t) - a.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = a.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ae).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = S[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) &&
                S(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (e, t, a) {
            return function (r) {
              var n = se.attr(r, e);
              return null == n
                ? "!=" === t
                : !t ||
                    ((n += ""),
                    "=" === t
                      ? n === a
                      : "!=" === t
                      ? n !== a
                      : "^=" === t
                      ? a && 0 === n.indexOf(a)
                      : "*=" === t
                      ? a && n.indexOf(a) > -1
                      : "$=" === t
                      ? a && n.slice(-a.length) === a
                      : "~=" === t
                      ? (" " + n.replace(H, " ") + " ").indexOf(a) > -1
                      : "|=" === t &&
                        (n === a || n.slice(0, a.length + 1) === a + "-"));
            };
          },
          CHILD: function (e, t, a, r, n) {
            var i = "nth" !== e.slice(0, 3),
              o = "last" !== e.slice(-4),
              s = "of-type" === t;
            return 1 === r && 0 === n
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (t, a, l) {
                  var c,
                    d,
                    u,
                    p,
                    h,
                    m,
                    f = i !== o ? "nextSibling" : "previousSibling",
                    v = t.parentNode,
                    g = s && t.nodeName.toLowerCase(),
                    y = !l && !s,
                    b = !1;
                  if (v) {
                    if (i) {
                      for (; f; ) {
                        for (p = t; (p = p[f]); )
                          if (
                            s
                              ? p.nodeName.toLowerCase() === g
                              : 1 === p.nodeType
                          )
                            return !1;
                        m = f = "only" === e && !m && "nextSibling";
                      }
                      return !0;
                    }
                    if (((m = [o ? v.firstChild : v.lastChild]), o && y)) {
                      for (
                        b =
                          (h =
                            (c =
                              (d =
                                (u = (p = v)[w] || (p[w] = {}))[p.uniqueID] ||
                                (u[p.uniqueID] = {}))[e] || [])[0] === T &&
                            c[1]) && c[2],
                          p = h && v.childNodes[h];
                        (p = (++h && p && p[f]) || (b = h = 0) || m.pop());

                      )
                        if (1 === p.nodeType && ++b && p === t) {
                          d[e] = [T, h, b];
                          break;
                        }
                    } else if (
                      (y &&
                        (b = h =
                          (c =
                            (d =
                              (u = (p = t)[w] || (p[w] = {}))[p.uniqueID] ||
                              (u[p.uniqueID] = {}))[e] || [])[0] === T && c[1]),
                      !1 === b)
                    )
                      for (
                        ;
                        (p = (++h && p && p[f]) || (b = h = 0) || m.pop()) &&
                        ((s
                          ? p.nodeName.toLowerCase() !== g
                          : 1 !== p.nodeType) ||
                          !++b ||
                          (y &&
                            ((d =
                              (u = p[w] || (p[w] = {}))[p.uniqueID] ||
                              (u[p.uniqueID] = {}))[e] = [T, b]),
                          p !== t));

                      );
                    return (b -= n) === r || (b % r == 0 && b / r >= 0);
                  }
                };
          },
          PSEUDO: function (e, t) {
            var a,
              n =
                r.pseudos[e] ||
                r.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return n[w]
              ? n(t)
              : n.length > 1
              ? ((a = [e, e, "", t]),
                r.setFilters.hasOwnProperty(e.toLowerCase())
                  ? ce(function (e, a) {
                      for (var r, i = n(e, t), o = i.length; o--; )
                        e[(r = O(e, i[o]))] = !(a[r] = i[o]);
                    })
                  : function (e) {
                      return n(e, 0, a);
                    })
              : n;
          },
        },
        pseudos: {
          not: ce(function (e) {
            var t = [],
              a = [],
              r = s(e.replace(V, "$1"));
            return r[w]
              ? ce(function (e, t, a, n) {
                  for (var i, o = r(e, null, n, []), s = e.length; s--; )
                    (i = o[s]) && (e[s] = !(t[s] = i));
                })
              : function (e, n, i) {
                  return (t[0] = e), r(t, null, i, a), (t[0] = null), !a.pop();
                };
          }),
          has: ce(function (e) {
            return function (t) {
              return se(e, t).length > 0;
            };
          }),
          contains: ce(function (e) {
            return (
              (e = e.replace(te, ae)),
              function (t) {
                return (t.textContent || n(t)).indexOf(e) > -1;
              }
            );
          }),
          lang: ce(function (e) {
            return (
              W.test(e || "") || se.error("unsupported lang: " + e),
              (e = e.replace(te, ae).toLowerCase()),
              function (t) {
                var a;
                do {
                  if (
                    (a = f
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (a = a.toLowerCase()) === e || 0 === a.indexOf(e + "-")
                    );
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var a = e.location && e.location.hash;
            return a && a.slice(1) === t.id;
          },
          root: function (e) {
            return e === m;
          },
          focus: function (e) {
            return (
              e === h.activeElement &&
              (!h.hasFocus || h.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: fe(!1),
          disabled: fe(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !r.pseudos.empty(e);
          },
          header: function (e) {
            return K.test(e.nodeName);
          },
          input: function (e) {
            return J.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, a) {
            return [a < 0 ? a + t : a];
          }),
          even: ve(function (e, t) {
            for (var a = 0; a < t; a += 2) e.push(a);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var a = 1; a < t; a += 2) e.push(a);
            return e;
          }),
          lt: ve(function (e, t, a) {
            for (var r = a < 0 ? a + t : a > t ? t : a; --r >= 0; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, a) {
            for (var r = a < 0 ? a + t : a; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = r.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      r.pseudos[t] = he(t);
    for (t in { submit: !0, reset: !0 }) r.pseudos[t] = me(t);
    function ye() {}
    function be(e) {
      for (var t = 0, a = e.length, r = ""; t < a; t++) r += e[t].value;
      return r;
    }
    function we(e, t, a) {
      var r = t.dir,
        n = t.next,
        i = n || r,
        o = a && "parentNode" === i,
        s = k++;
      return t.first
        ? function (t, a, n) {
            for (; (t = t[r]); ) if (1 === t.nodeType || o) return e(t, a, n);
            return !1;
          }
        : function (t, a, l) {
            var c,
              d,
              u,
              p = [T, s];
            if (l) {
              for (; (t = t[r]); )
                if ((1 === t.nodeType || o) && e(t, a, l)) return !0;
            } else
              for (; (t = t[r]); )
                if (1 === t.nodeType || o)
                  if (
                    ((d =
                      (u = t[w] || (t[w] = {}))[t.uniqueID] ||
                      (u[t.uniqueID] = {})),
                    n && n === t.nodeName.toLowerCase())
                  )
                    t = t[r] || t;
                  else {
                    if ((c = d[i]) && c[0] === T && c[1] === s)
                      return (p[2] = c[2]);
                    if (((d[i] = p), (p[2] = e(t, a, l)))) return !0;
                  }
            return !1;
          };
    }
    function Ce(e) {
      return e.length > 1
        ? function (t, a, r) {
            for (var n = e.length; n--; ) if (!e[n](t, a, r)) return !1;
            return !0;
          }
        : e[0];
    }
    function Te(e, t, a, r, n) {
      for (var i, o = [], s = 0, l = e.length, c = null != t; s < l; s++)
        (i = e[s]) && ((a && !a(i, r, n)) || (o.push(i), c && t.push(s)));
      return o;
    }
    function ke(e, t, a, r, n, i) {
      return (
        r && !r[w] && (r = ke(r)),
        n && !n[w] && (n = ke(n, i)),
        ce(function (i, o, s, l) {
          var c,
            d,
            u,
            p = [],
            h = [],
            m = o.length,
            f =
              i ||
              (function (e, t, a) {
                for (var r = 0, n = t.length; r < n; r++) se(e, t[r], a);
                return a;
              })(t || "*", s.nodeType ? [s] : s, []),
            v = !e || (!i && t) ? f : Te(f, p, e, s, l),
            g = a ? (n || (i ? e : m || r) ? [] : o) : v;
          if ((a && a(v, g, s, l), r))
            for (c = Te(g, h), r(c, [], s, l), d = c.length; d--; )
              (u = c[d]) && (g[h[d]] = !(v[h[d]] = u));
          if (i) {
            if (n || e) {
              if (n) {
                for (c = [], d = g.length; d--; )
                  (u = g[d]) && c.push((v[d] = u));
                n(null, (g = []), c, l);
              }
              for (d = g.length; d--; )
                (u = g[d]) &&
                  (c = n ? O(i, u) : p[d]) > -1 &&
                  (i[c] = !(o[c] = u));
            }
          } else (g = Te(g === o ? g.splice(m, g.length) : g)), n ? n(null, o, g, l) : A.apply(o, g);
        })
      );
    }
    function Se(e) {
      for (
        var t,
          a,
          n,
          i = e.length,
          o = r.relative[e[0].type],
          s = o || r.relative[" "],
          l = o ? 1 : 0,
          d = we(
            function (e) {
              return e === t;
            },
            s,
            !0
          ),
          u = we(
            function (e) {
              return O(t, e) > -1;
            },
            s,
            !0
          ),
          p = [
            function (e, a, r) {
              var n =
                (!o && (r || a !== c)) ||
                ((t = a).nodeType ? d(e, a, r) : u(e, a, r));
              return (t = null), n;
            },
          ];
        l < i;
        l++
      )
        if ((a = r.relative[e[l].type])) p = [we(Ce(p), a)];
        else {
          if ((a = r.filter[e[l].type].apply(null, e[l].matches))[w]) {
            for (n = ++l; n < i && !r.relative[e[n].type]; n++);
            return ke(
              l > 1 && Ce(p),
              l > 1 &&
                be(
                  e
                    .slice(0, l - 1)
                    .concat({ value: " " === e[l - 2].type ? "*" : "" })
                ).replace(V, "$1"),
              a,
              l < n && Se(e.slice(l, n)),
              n < i && Se((e = e.slice(n))),
              n < i && be(e)
            );
          }
          p.push(a);
        }
      return Ce(p);
    }
    return (
      (ye.prototype = r.filters = r.pseudos),
      (r.setFilters = new ye()),
      (o = se.tokenize =
        function (e, t) {
          var a,
            n,
            i,
            o,
            s,
            l,
            c,
            d = x[e + " "];
          if (d) return t ? 0 : d.slice(0);
          for (s = e, l = [], c = r.preFilter; s; ) {
            for (o in ((a && !(n = F.exec(s))) ||
              (n && (s = s.slice(n[0].length) || s), l.push((i = []))),
            (a = !1),
            (n = q.exec(s)) &&
              ((a = n.shift()),
              i.push({ value: a, type: n[0].replace(V, " ") }),
              (s = s.slice(a.length))),
            r.filter))
              !(n = Y[o].exec(s)) ||
                (c[o] && !(n = c[o](n))) ||
                ((a = n.shift()),
                i.push({ value: a, type: o, matches: n }),
                (s = s.slice(a.length)));
            if (!a) break;
          }
          return t ? s.length : s ? se.error(e) : x(e, l).slice(0);
        }),
      (s = se.compile =
        function (e, t) {
          var a,
            n = [],
            i = [],
            s = _[e + " "];
          if (!s) {
            for (t || (t = o(e)), a = t.length; a--; )
              (s = Se(t[a]))[w] ? n.push(s) : i.push(s);
            (s = _(
              e,
              (function (e, t) {
                var a = t.length > 0,
                  n = e.length > 0,
                  i = function (i, o, s, l, d) {
                    var u,
                      m,
                      v,
                      g = 0,
                      y = "0",
                      b = i && [],
                      w = [],
                      C = c,
                      k = i || (n && r.find.TAG("*", d)),
                      S = (T += null == C ? 1 : Math.random() || 0.1),
                      x = k.length;
                    for (
                      d && (c = o == h || o || d);
                      y !== x && null != (u = k[y]);
                      y++
                    ) {
                      if (n && u) {
                        for (
                          m = 0, o || u.ownerDocument == h || (p(u), (s = !f));
                          (v = e[m++]);

                        )
                          if (v(u, o || h, s)) {
                            l.push(u);
                            break;
                          }
                        d && (T = S);
                      }
                      a && ((u = !v && u) && g--, i && b.push(u));
                    }
                    if (((g += y), a && y !== g)) {
                      for (m = 0; (v = t[m++]); ) v(b, w, o, s);
                      if (i) {
                        if (g > 0)
                          for (; y--; ) b[y] || w[y] || (w[y] = L.call(l));
                        w = Te(w);
                      }
                      A.apply(l, w),
                        d &&
                          !i &&
                          w.length > 0 &&
                          g + t.length > 1 &&
                          se.uniqueSort(l);
                    }
                    return d && ((T = S), (c = C)), b;
                  };
                return a ? ce(i) : i;
              })(i, n)
            )).selector = e;
          }
          return s;
        }),
      (l = se.select =
        function (e, t, a, n) {
          var i,
            l,
            c,
            d,
            u,
            p = "function" == typeof e && e,
            h = !n && o((e = p.selector || e));
          if (((a = a || []), 1 === h.length)) {
            if (
              (l = h[0] = h[0].slice(0)).length > 2 &&
              "ID" === (c = l[0]).type &&
              9 === t.nodeType &&
              f &&
              r.relative[l[1].type]
            ) {
              if (!(t = (r.find.ID(c.matches[0].replace(te, ae), t) || [])[0]))
                return a;
              p && (t = t.parentNode), (e = e.slice(l.shift().value.length));
            }
            for (
              i = Y.needsContext.test(e) ? 0 : l.length;
              i-- && ((c = l[i]), !r.relative[(d = c.type)]);

            )
              if (
                (u = r.find[d]) &&
                (n = u(
                  c.matches[0].replace(te, ae),
                  (ee.test(l[0].type) && ge(t.parentNode)) || t
                ))
              ) {
                if ((l.splice(i, 1), !(e = n.length && be(l))))
                  return A.apply(a, n), a;
                break;
              }
          }
          return (
            (p || s(e, h))(
              n,
              t,
              !f,
              a,
              !t || (ee.test(e) && ge(t.parentNode)) || t
            ),
            a
          );
        }),
      (a.sortStable = w.split("").sort(M).join("") === w),
      (a.detectDuplicates = !!u),
      p(),
      (a.sortDetached = de(function (e) {
        return 1 & e.compareDocumentPosition(h.createElement("fieldset"));
      })),
      de(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        ue("type|href|height|width", function (e, t, a) {
          if (!a) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (a.attributes &&
        de(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        ue("value", function (e, t, a) {
          if (!a && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      de(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        ue(B, function (e, t, a) {
          var r;
          if (!a)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(e);
  (w.find = T),
    (w.expr = T.selectors),
    (w.expr[":"] = w.expr.pseudos),
    (w.uniqueSort = w.unique = T.uniqueSort),
    (w.text = T.getText),
    (w.isXMLDoc = T.isXML),
    (w.contains = T.contains),
    (w.escapeSelector = T.escape);
  var k = function (e, t, a) {
      for (var r = [], n = void 0 !== a; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (n && w(e).is(a)) break;
          r.push(e);
        }
      return r;
    },
    S = function (e, t) {
      for (var a = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && a.push(e);
      return a;
    },
    x = w.expr.match.needsContext;
  function _(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function M(e, t, a) {
    return m(t)
      ? w.grep(e, function (e, r) {
          return !!t.call(e, r, e) !== a;
        })
      : t.nodeType
      ? w.grep(e, function (e) {
          return (e === t) !== a;
        })
      : "string" != typeof t
      ? w.grep(e, function (e) {
          return s.call(t, e) > -1 !== a;
        })
      : w.filter(t, e, a);
  }
  (w.filter = function (e, t, a) {
    var r = t[0];
    return (
      a && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? w.find.matchesSelector(r, e)
          ? [r]
          : []
        : w.find.matches(
            e,
            w.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    w.fn.extend({
      find: function (e) {
        var t,
          a,
          r = this.length,
          n = this;
        if ("string" != typeof e)
          return this.pushStack(
            w(e).filter(function () {
              for (t = 0; t < r; t++) if (w.contains(n[t], this)) return !0;
            })
          );
        for (a = this.pushStack([]), t = 0; t < r; t++) w.find(e, n[t], a);
        return r > 1 ? w.uniqueSort(a) : a;
      },
      filter: function (e) {
        return this.pushStack(M(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(M(this, e || [], !0));
      },
      is: function (e) {
        return !!M(this, "string" == typeof e && x.test(e) ? w(e) : e || [], !1)
          .length;
      },
    });
  var P,
    $ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((w.fn.init = function (e, t, a) {
    var r, n;
    if (!e) return this;
    if (((a = a || P), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
            ? [null, e, null]
            : $.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || a).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof w ? t[0] : t),
          w.merge(
            this,
            w.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : v, !0)
          ),
          E.test(r[1]) && w.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (n = v.getElementById(r[2])) && ((this[0] = n), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== a.ready
        ? a.ready(e)
        : e(w)
      : w.makeArray(e, this);
  }).prototype = w.fn),
    (P = w(v));
  var L = /^(?:parents|prev(?:Until|All))/,
    N = { children: !0, contents: !0, next: !0, prev: !0 };
  function A(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  w.fn.extend({
    has: function (e) {
      var t = w(e, this),
        a = t.length;
      return this.filter(function () {
        for (var e = 0; e < a; e++) if (w.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var a,
        r = 0,
        n = this.length,
        i = [],
        o = "string" != typeof e && w(e);
      if (!x.test(e))
        for (; r < n; r++)
          for (a = this[r]; a && a !== t; a = a.parentNode)
            if (
              a.nodeType < 11 &&
              (o
                ? o.index(a) > -1
                : 1 === a.nodeType && w.find.matchesSelector(a, e))
            ) {
              i.push(a);
              break;
            }
      return this.pushStack(i.length > 1 ? w.uniqueSort(i) : i);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? s.call(w(e), this[0])
          : s.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    w.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return k(e, "parentNode");
        },
        parentsUntil: function (e, t, a) {
          return k(e, "parentNode", a);
        },
        next: function (e) {
          return A(e, "nextSibling");
        },
        prev: function (e) {
          return A(e, "previousSibling");
        },
        nextAll: function (e) {
          return k(e, "nextSibling");
        },
        prevAll: function (e) {
          return k(e, "previousSibling");
        },
        nextUntil: function (e, t, a) {
          return k(e, "nextSibling", a);
        },
        prevUntil: function (e, t, a) {
          return k(e, "previousSibling", a);
        },
        siblings: function (e) {
          return S((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return S(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (_(e, "template") && (e = e.content || e),
              w.merge([], e.childNodes));
        },
      },
      function (e, t) {
        w.fn[e] = function (a, r) {
          var n = w.map(this, t, a);
          return (
            "Until" !== e.slice(-5) && (r = a),
            r && "string" == typeof r && (n = w.filter(r, n)),
            this.length > 1 &&
              (N[e] || w.uniqueSort(n), L.test(e) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var I = /[^\x20\t\r\n\f]+/g;
  function O(e) {
    return e;
  }
  function B(e) {
    throw e;
  }
  function R(e, t, a, r) {
    var n;
    try {
      e && m((n = e.promise))
        ? n.call(e).done(t).fail(a)
        : e && m((n = e.then))
        ? n.call(e, t, a)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      a.apply(void 0, [e]);
    }
  }
  (w.Callbacks = function (e) {
    e =
      "string" == typeof e
        ? (function (e) {
            var t = {};
            return (
              w.each(e.match(I) || [], function (e, a) {
                t[a] = !0;
              }),
              t
            );
          })(e)
        : w.extend({}, e);
    var t,
      a,
      r,
      n,
      i = [],
      o = [],
      s = -1,
      l = function () {
        for (n = n || e.once, r = t = !0; o.length; s = -1)
          for (a = o.shift(); ++s < i.length; )
            !1 === i[s].apply(a[0], a[1]) &&
              e.stopOnFalse &&
              ((s = i.length), (a = !1));
        e.memory || (a = !1), (t = !1), n && (i = a ? [] : "");
      },
      c = {
        add: function () {
          return (
            i &&
              (a && !t && ((s = i.length - 1), o.push(a)),
              (function t(a) {
                w.each(a, function (a, r) {
                  m(r)
                    ? (e.unique && c.has(r)) || i.push(r)
                    : r && r.length && "string" !== b(r) && t(r);
                });
              })(arguments),
              a && !t && l()),
            this
          );
        },
        remove: function () {
          return (
            w.each(arguments, function (e, t) {
              for (var a; (a = w.inArray(t, i, a)) > -1; )
                i.splice(a, 1), a <= s && s--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? w.inArray(e, i) > -1 : i.length > 0;
        },
        empty: function () {
          return i && (i = []), this;
        },
        disable: function () {
          return (n = o = []), (i = a = ""), this;
        },
        disabled: function () {
          return !i;
        },
        lock: function () {
          return (n = o = []), a || t || (i = a = ""), this;
        },
        locked: function () {
          return !!n;
        },
        fireWith: function (e, a) {
          return (
            n ||
              ((a = [e, (a = a || []).slice ? a.slice() : a]),
              o.push(a),
              t || l()),
            this
          );
        },
        fire: function () {
          return c.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        },
      };
    return c;
  }),
    w.extend({
      Deferred: function (t) {
        var a = [
            [
              "notify",
              "progress",
              w.Callbacks("memory"),
              w.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              w.Callbacks("once memory"),
              w.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              w.Callbacks("once memory"),
              w.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          r = "pending",
          n = {
            state: function () {
              return r;
            },
            always: function () {
              return i.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return n.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return w
                .Deferred(function (t) {
                  w.each(a, function (a, r) {
                    var n = m(e[r[4]]) && e[r[4]];
                    i[r[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && m(e.promise)
                        ? e
                            .promise()
                            .progress(t.notify)
                            .done(t.resolve)
                            .fail(t.reject)
                        : t[r[0] + "With"](this, n ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function (t, r, n) {
              var i = 0;
              function o(t, a, r, n) {
                return function () {
                  var s = this,
                    l = arguments,
                    c = function () {
                      var e, c;
                      if (!(t < i)) {
                        if ((e = r.apply(s, l)) === a.promise())
                          throw new TypeError("Thenable self-resolution");
                        (c =
                          e &&
                          ("object" === _typeof(e) || "function" == typeof e) &&
                          e.then),
                          m(c)
                            ? n
                              ? c.call(e, o(i, a, O, n), o(i, a, B, n))
                              : (i++,
                                c.call(
                                  e,
                                  o(i, a, O, n),
                                  o(i, a, B, n),
                                  o(i, a, O, a.notifyWith)
                                ))
                            : (r !== O && ((s = void 0), (l = [e])),
                              (n || a.resolveWith)(s, l));
                      }
                    },
                    d = n
                      ? c
                      : function () {
                          try {
                            c();
                          } catch (e) {
                            w.Deferred.exceptionHook &&
                              w.Deferred.exceptionHook(e, d.stackTrace),
                              t + 1 >= i &&
                                (r !== B && ((s = void 0), (l = [e])),
                                a.rejectWith(s, l));
                          }
                        };
                  t
                    ? d()
                    : (w.Deferred.getStackHook &&
                        (d.stackTrace = w.Deferred.getStackHook()),
                      e.setTimeout(d));
                };
              }
              return w
                .Deferred(function (e) {
                  a[0][3].add(o(0, e, m(n) ? n : O, e.notifyWith)),
                    a[1][3].add(o(0, e, m(t) ? t : O)),
                    a[2][3].add(o(0, e, m(r) ? r : B));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? w.extend(e, n) : n;
            },
          },
          i = {};
        return (
          w.each(a, function (e, t) {
            var o = t[2],
              s = t[5];
            (n[t[1]] = o.add),
              s &&
                o.add(
                  function () {
                    r = s;
                  },
                  a[3 - e][2].disable,
                  a[3 - e][3].disable,
                  a[0][2].lock,
                  a[0][3].lock
                ),
              o.add(t[3].fire),
              (i[t[0]] = function () {
                return (
                  i[t[0] + "With"](this === i ? void 0 : this, arguments), this
                );
              }),
              (i[t[0] + "With"] = o.fireWith);
          }),
          n.promise(i),
          t && t.call(i, i),
          i
        );
      },
      when: function (e) {
        var t = arguments.length,
          a = t,
          r = Array(a),
          i = n.call(arguments),
          o = w.Deferred(),
          s = function (e) {
            return function (a) {
              (r[e] = this),
                (i[e] = arguments.length > 1 ? n.call(arguments) : a),
                --t || o.resolveWith(r, i);
            };
          };
        if (
          t <= 1 &&
          (R(e, o.done(s(a)).resolve, o.reject, !t),
          "pending" === o.state() || m(i[a] && i[a].then))
        )
          return o.then();
        for (; a--; ) R(i[a], s(a), o.reject);
        return o.promise();
      },
    });
  var D = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (w.Deferred.exceptionHook = function (t, a) {
    e.console &&
      e.console.warn &&
      t &&
      D.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, a);
  }),
    (w.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var G = w.Deferred();
  function j() {
    v.removeEventListener("DOMContentLoaded", j),
      e.removeEventListener("load", j),
      w.ready();
  }
  (w.fn.ready = function (e) {
    return (
      G.then(e).catch(function (e) {
        w.readyException(e);
      }),
      this
    );
  }),
    w.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --w.readyWait : w.isReady) ||
          ((w.isReady = !0),
          (!0 !== e && --w.readyWait > 0) || G.resolveWith(v, [w]));
      },
    }),
    (w.ready.then = G.then),
    "complete" === v.readyState ||
    ("loading" !== v.readyState && !v.documentElement.doScroll)
      ? e.setTimeout(w.ready)
      : (v.addEventListener("DOMContentLoaded", j),
        e.addEventListener("load", j));
  var H = function e(t, a, r, n, i, o, s) {
      var l = 0,
        c = t.length,
        d = null == r;
      if ("object" === b(r))
        for (l in ((i = !0), r)) e(t, a, l, r[l], !0, o, s);
      else if (
        void 0 !== n &&
        ((i = !0),
        m(n) || (s = !0),
        d &&
          (s
            ? (a.call(t, n), (a = null))
            : ((d = a),
              (a = function (e, t, a) {
                return d.call(w(e), a);
              }))),
        a)
      )
        for (; l < c; l++) a(t[l], r, s ? n : n.call(t[l], l, a(t[l], r)));
      return i ? t : d ? a.call(t) : c ? a(t[0], r) : o;
    },
    V = /^-ms-/,
    F = /-([a-z])/g;
  function q(e, t) {
    return t.toUpperCase();
  }
  function z(e) {
    return e.replace(V, "ms-").replace(F, q);
  }
  var U = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function W() {
    this.expando = w.expando + W.uid++;
  }
  (W.uid = 1),
    (W.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = Object.create(null)),
            U(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, a) {
        var r,
          n = this.cache(e);
        if ("string" == typeof t) n[z(t)] = a;
        else for (r in t) n[z(r)] = t[r];
        return n;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][z(t)];
      },
      access: function (e, t, a) {
        return void 0 === t || (t && "string" == typeof t && void 0 === a)
          ? this.get(e, t)
          : (this.set(e, t, a), void 0 !== a ? a : t);
      },
      remove: function (e, t) {
        var a,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            a = (t = Array.isArray(t)
              ? t.map(z)
              : (t = z(t)) in r
              ? [t]
              : t.match(I) || []).length;
            for (; a--; ) delete r[t[a]];
          }
          (void 0 === t || w.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !w.isEmptyObject(t);
      },
    });
  var Y = new W(),
    X = new W(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Q(e, t, a) {
    var r;
    if (void 0 === a && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
        "string" == typeof (a = e.getAttribute(r)))
      ) {
        try {
          a = (function (e) {
            return (
              "true" === e ||
              ("false" !== e &&
                ("null" === e
                  ? null
                  : e === +e + ""
                  ? +e
                  : J.test(e)
                  ? JSON.parse(e)
                  : e))
            );
          })(a);
        } catch (e) {}
        X.set(e, t, a);
      } else a = void 0;
    return a;
  }
  w.extend({
    hasData: function (e) {
      return X.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, a) {
      return X.access(e, t, a);
    },
    removeData: function (e, t) {
      X.remove(e, t);
    },
    _data: function (e, t, a) {
      return Y.access(e, t, a);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    w.fn.extend({
      data: function (e, t) {
        var a,
          r,
          n,
          i = this[0],
          o = i && i.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((n = X.get(i)), 1 === i.nodeType && !Y.get(i, "hasDataAttrs"))
          ) {
            for (a = o.length; a--; )
              o[a] &&
                0 === (r = o[a].name).indexOf("data-") &&
                ((r = z(r.slice(5))), Q(i, r, n[r]));
            Y.set(i, "hasDataAttrs", !0);
          }
          return n;
        }
        return "object" === _typeof(e)
          ? this.each(function () {
              X.set(this, e);
            })
          : H(
              this,
              function (t) {
                var a;
                if (i && void 0 === t)
                  return void 0 !== (a = X.get(i, e))
                    ? a
                    : void 0 !== (a = Q(i, e))
                    ? a
                    : void 0;
                this.each(function () {
                  X.set(this, e, t);
                });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          X.remove(this, e);
        });
      },
    }),
    w.extend({
      queue: function (e, t, a) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Y.get(e, t)),
            a &&
              (!r || Array.isArray(a)
                ? (r = Y.access(e, t, w.makeArray(a)))
                : r.push(a)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var a = w.queue(e, t),
          r = a.length,
          n = a.shift(),
          i = w._queueHooks(e, t);
        "inprogress" === n && ((n = a.shift()), r--),
          n &&
            ("fx" === t && a.unshift("inprogress"),
            delete i.stop,
            n.call(
              e,
              function () {
                w.dequeue(e, t);
              },
              i
            )),
          !r && i && i.empty.fire();
      },
      _queueHooks: function (e, t) {
        var a = t + "queueHooks";
        return (
          Y.get(e, a) ||
          Y.access(e, a, {
            empty: w.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", a]);
            }),
          })
        );
      },
    }),
    w.fn.extend({
      queue: function (e, t) {
        var a = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), a--),
          arguments.length < a
            ? w.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var a = w.queue(this, e, t);
                w._queueHooks(this, e),
                  "fx" === e && "inprogress" !== a[0] && w.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          w.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var a,
          r = 1,
          n = w.Deferred(),
          i = this,
          o = this.length,
          s = function () {
            --r || n.resolveWith(i, [i]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          o--;

        )
          (a = Y.get(i[o], e + "queueHooks")) &&
            a.empty &&
            (r++, a.empty.add(s));
        return s(), n.promise(t);
      },
    });
  var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ee = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$", "i"),
    te = ["Top", "Right", "Bottom", "Left"],
    ae = v.documentElement,
    re = function (e) {
      return w.contains(e.ownerDocument, e);
    },
    ne = { composed: !0 };
  ae.getRootNode &&
    (re = function (e) {
      return (
        w.contains(e.ownerDocument, e) || e.getRootNode(ne) === e.ownerDocument
      );
    });
  var ie = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && re(e) && "none" === w.css(e, "display"))
    );
  };
  function oe(e, t, a, r) {
    var n,
      i,
      o = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return w.css(e, t, "");
          },
      l = s(),
      c = (a && a[3]) || (w.cssNumber[t] ? "" : "px"),
      d =
        e.nodeType &&
        (w.cssNumber[t] || ("px" !== c && +l)) &&
        ee.exec(w.css(e, t));
    if (d && d[3] !== c) {
      for (l /= 2, c = c || d[3], d = +l || 1; o--; )
        w.style(e, t, d + c),
          (1 - i) * (1 - (i = s() / l || 0.5)) <= 0 && (o = 0),
          (d /= i);
      (d *= 2), w.style(e, t, d + c), (a = a || []);
    }
    return (
      a &&
        ((d = +d || +l || 0),
        (n = a[1] ? d + (a[1] + 1) * a[2] : +a[2]),
        r && ((r.unit = c), (r.start = d), (r.end = n))),
      n
    );
  }
  var se = {};
  function le(e) {
    var t,
      a = e.ownerDocument,
      r = e.nodeName,
      n = se[r];
    return (
      n ||
      ((t = a.body.appendChild(a.createElement(r))),
      (n = w.css(t, "display")),
      t.parentNode.removeChild(t),
      "none" === n && (n = "block"),
      (se[r] = n),
      n)
    );
  }
  function ce(e, t) {
    for (var a, r, n = [], i = 0, o = e.length; i < o; i++)
      (r = e[i]).style &&
        ((a = r.style.display),
        t
          ? ("none" === a &&
              ((n[i] = Y.get(r, "display") || null),
              n[i] || (r.style.display = "")),
            "" === r.style.display && ie(r) && (n[i] = le(r)))
          : "none" !== a && ((n[i] = "none"), Y.set(r, "display", a)));
    for (i = 0; i < o; i++) null != n[i] && (e[i].style.display = n[i]);
    return e;
  }
  w.fn.extend({
    show: function () {
      return ce(this, !0);
    },
    hide: function () {
      return ce(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ie(this) ? w(this).show() : w(this).hide();
          });
    },
  });
  var de,
    ue,
    pe = /^(?:checkbox|radio)$/i,
    he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    me = /^$|^module$|\/(?:java|ecma)script/i;
  (de = v.createDocumentFragment().appendChild(v.createElement("div"))),
    (ue = v.createElement("input")).setAttribute("type", "radio"),
    ue.setAttribute("checked", "checked"),
    ue.setAttribute("name", "t"),
    de.appendChild(ue),
    (h.checkClone = de.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (de.innerHTML = "<textarea>x</textarea>"),
    (h.noCloneChecked = !!de.cloneNode(!0).lastChild.defaultValue),
    (de.innerHTML = "<option></option>"),
    (h.option = !!de.lastChild);
  var fe = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ve(e, t) {
    var a;
    return (
      (a =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && _(e, t)) ? w.merge([e], a) : a
    );
  }
  function ge(e, t) {
    for (var a = 0, r = e.length; a < r; a++)
      Y.set(e[a], "globalEval", !t || Y.get(t[a], "globalEval"));
  }
  (fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead),
    (fe.th = fe.td),
    h.option ||
      (fe.optgroup = fe.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var ye = /<|&#?\w+;/;
  function be(e, t, a, r, n) {
    for (
      var i,
        o,
        s,
        l,
        c,
        d,
        u = t.createDocumentFragment(),
        p = [],
        h = 0,
        m = e.length;
      h < m;
      h++
    )
      if ((i = e[h]) || 0 === i)
        if ("object" === b(i)) w.merge(p, i.nodeType ? [i] : i);
        else if (ye.test(i)) {
          for (
            o = o || u.appendChild(t.createElement("div")),
              s = (he.exec(i) || ["", ""])[1].toLowerCase(),
              l = fe[s] || fe._default,
              o.innerHTML = l[1] + w.htmlPrefilter(i) + l[2],
              d = l[0];
            d--;

          )
            o = o.lastChild;
          w.merge(p, o.childNodes), ((o = u.firstChild).textContent = "");
        } else p.push(t.createTextNode(i));
    for (u.textContent = "", h = 0; (i = p[h++]); )
      if (r && w.inArray(i, r) > -1) n && n.push(i);
      else if (
        ((c = re(i)), (o = ve(u.appendChild(i), "script")), c && ge(o), a)
      )
        for (d = 0; (i = o[d++]); ) me.test(i.type || "") && a.push(i);
    return u;
  }
  var we = /^key/,
    Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Te = /^([^.]*)(?:\.(.+)|)/;
  function ke() {
    return !0;
  }
  function Se() {
    return !1;
  }
  function xe(e, t) {
    return (
      (e ===
        (function () {
          try {
            return v.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function _e(e, t, a, r, n, i) {
    var o, s;
    if ("object" === _typeof(t)) {
      for (s in ("string" != typeof a && ((r = r || a), (a = void 0)), t))
        _e(e, s, a, r, t[s], i);
      return e;
    }
    if (
      (null == r && null == n
        ? ((n = a), (r = a = void 0))
        : null == n &&
          ("string" == typeof a
            ? ((n = r), (r = void 0))
            : ((n = r), (r = a), (a = void 0))),
      !1 === n)
    )
      n = Se;
    else if (!n) return e;
    return (
      1 === i &&
        ((o = n),
        ((n = function (e) {
          return w().off(e), o.apply(this, arguments);
        }).guid = o.guid || (o.guid = w.guid++))),
      e.each(function () {
        w.event.add(this, t, n, r, a);
      })
    );
  }
  function Ee(e, t, a) {
    a
      ? (Y.set(e, t, !1),
        w.event.add(e, t, {
          namespace: !1,
          handler: function (e) {
            var r,
              i,
              o = Y.get(this, t);
            if (1 & e.isTrigger && this[t]) {
              if (o.length)
                (w.event.special[t] || {}).delegateType && e.stopPropagation();
              else if (
                ((o = n.call(arguments)),
                Y.set(this, t, o),
                (r = a(this, t)),
                this[t](),
                o !== (i = Y.get(this, t)) || r ? Y.set(this, t, !1) : (i = {}),
                o !== i)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), i.value
                );
            } else
              o.length &&
                (Y.set(this, t, {
                  value: w.event.trigger(
                    w.extend(o[0], w.Event.prototype),
                    o.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, t) && w.event.add(e, t, ke);
  }
  (w.event = {
    global: {},
    add: function (e, t, a, r, n) {
      var i,
        o,
        s,
        l,
        c,
        d,
        u,
        p,
        h,
        m,
        f,
        v = Y.get(e);
      if (U(e))
        for (
          a.handler && ((a = (i = a).handler), (n = i.selector)),
            n && w.find.matchesSelector(ae, n),
            a.guid || (a.guid = w.guid++),
            (l = v.events) || (l = v.events = Object.create(null)),
            (o = v.handle) ||
              (o = v.handle =
                function (t) {
                  return void 0 !== w && w.event.triggered !== t.type
                    ? w.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            c = (t = (t || "").match(I) || [""]).length;
          c--;

        )
          (h = f = (s = Te.exec(t[c]) || [])[1]),
            (m = (s[2] || "").split(".").sort()),
            h &&
              ((u = w.event.special[h] || {}),
              (h = (n ? u.delegateType : u.bindType) || h),
              (u = w.event.special[h] || {}),
              (d = w.extend(
                {
                  type: h,
                  origType: f,
                  data: r,
                  handler: a,
                  guid: a.guid,
                  selector: n,
                  needsContext: n && w.expr.match.needsContext.test(n),
                  namespace: m.join("."),
                },
                i
              )),
              (p = l[h]) ||
                (((p = l[h] = []).delegateCount = 0),
                (u.setup && !1 !== u.setup.call(e, r, m, o)) ||
                  (e.addEventListener && e.addEventListener(h, o))),
              u.add &&
                (u.add.call(e, d), d.handler.guid || (d.handler.guid = a.guid)),
              n ? p.splice(p.delegateCount++, 0, d) : p.push(d),
              (w.event.global[h] = !0));
    },
    remove: function (e, t, a, r, n) {
      var i,
        o,
        s,
        l,
        c,
        d,
        u,
        p,
        h,
        m,
        f,
        v = Y.hasData(e) && Y.get(e);
      if (v && (l = v.events)) {
        for (c = (t = (t || "").match(I) || [""]).length; c--; )
          if (
            ((h = f = (s = Te.exec(t[c]) || [])[1]),
            (m = (s[2] || "").split(".").sort()),
            h)
          ) {
            for (
              u = w.event.special[h] || {},
                p = l[(h = (r ? u.delegateType : u.bindType) || h)] || [],
                s =
                  s[2] &&
                  new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                o = i = p.length;
              i--;

            )
              (d = p[i]),
                (!n && f !== d.origType) ||
                  (a && a.guid !== d.guid) ||
                  (s && !s.test(d.namespace)) ||
                  (r && r !== d.selector && ("**" !== r || !d.selector)) ||
                  (p.splice(i, 1),
                  d.selector && p.delegateCount--,
                  u.remove && u.remove.call(e, d));
            o &&
              !p.length &&
              ((u.teardown && !1 !== u.teardown.call(e, m, v.handle)) ||
                w.removeEvent(e, h, v.handle),
              delete l[h]);
          } else for (h in l) w.event.remove(e, h + t[c], a, r, !0);
        w.isEmptyObject(l) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        a,
        r,
        n,
        i,
        o,
        s = new Array(arguments.length),
        l = w.event.fix(e),
        c = (Y.get(this, "events") || Object.create(null))[l.type] || [],
        d = w.event.special[l.type] || {};
      for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((l.delegateTarget = this),
        !d.preDispatch || !1 !== d.preDispatch.call(this, l))
      ) {
        for (
          o = w.event.handlers.call(this, l, c), t = 0;
          (n = o[t++]) && !l.isPropagationStopped();

        )
          for (
            l.currentTarget = n.elem, a = 0;
            (i = n.handlers[a++]) && !l.isImmediatePropagationStopped();

          )
            (l.rnamespace &&
              !1 !== i.namespace &&
              !l.rnamespace.test(i.namespace)) ||
              ((l.handleObj = i),
              (l.data = i.data),
              void 0 !==
                (r = (
                  (w.event.special[i.origType] || {}).handle || i.handler
                ).apply(n.elem, s)) &&
                !1 === (l.result = r) &&
                (l.preventDefault(), l.stopPropagation()));
        return d.postDispatch && d.postDispatch.call(this, l), l.result;
      }
    },
    handlers: function (e, t) {
      var a,
        r,
        n,
        i,
        o,
        s = [],
        l = t.delegateCount,
        c = e.target;
      if (l && c.nodeType && !("click" === e.type && e.button >= 1))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
            for (i = [], o = {}, a = 0; a < l; a++)
              void 0 === o[(n = (r = t[a]).selector + " ")] &&
                (o[n] = r.needsContext
                  ? w(n, this).index(c) > -1
                  : w.find(n, this, null, [c]).length),
                o[n] && i.push(r);
            i.length && s.push({ elem: c, handlers: i });
          }
      return (
        (c = this), l < t.length && s.push({ elem: c, handlers: t.slice(l) }), s
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(w.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: m(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[w.expando] ? e : new w.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && _(t, "input") && Ee(t, "click", ke),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && _(t, "input") && Ee(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              _(t, "input") &&
              Y.get(t, "click")) ||
            _(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (w.removeEvent = function (e, t, a) {
      e.removeEventListener && e.removeEventListener(t, a);
    }),
    (w.Event = function (e, t) {
      if (!(this instanceof w.Event)) return new w.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? ke
              : Se),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && w.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[w.expando] = !0);
    }),
    (w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: Se,
      isPropagationStopped: Se,
      isImmediatePropagationStopped: Se,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = ke),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = ke),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = ke),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    w.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && we.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && Ce.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      w.event.addProp
    ),
    w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      w.event.special[e] = {
        setup: function () {
          return Ee(this, e, xe), !1;
        },
        trigger: function () {
          return Ee(this, e), !0;
        },
        delegateType: t,
      };
    }),
    w.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        w.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var a,
              r = e.relatedTarget,
              n = e.handleObj;
            return (
              (r && (r === this || w.contains(this, r))) ||
                ((e.type = n.origType),
                (a = n.handler.apply(this, arguments)),
                (e.type = t)),
              a
            );
          },
        };
      }
    ),
    w.fn.extend({
      on: function (e, t, a, r) {
        return _e(this, e, t, a, r);
      },
      one: function (e, t, a, r) {
        return _e(this, e, t, a, r, 1);
      },
      off: function (e, t, a) {
        var r, n;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            w(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" === _typeof(e)) {
          for (n in e) this.off(n, t, e[n]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((a = t), (t = void 0)),
          !1 === a && (a = Se),
          this.each(function () {
            w.event.remove(this, e, a, t);
          })
        );
      },
    });
  var Me = /<script|<style|<link/i,
    Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    $e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Le(e, t) {
    return (
      (_(e, "table") &&
        _(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        w(e).children("tbody")[0]) ||
      e
    );
  }
  function Ne(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Ae(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Ie(e, t) {
    var a, r, n, i, o, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (n in (Y.remove(t, "handle events"), s))
          for (a = 0, r = s[n].length; a < r; a++) w.event.add(t, n, s[n][a]);
      X.hasData(e) && ((i = X.access(e)), (o = w.extend({}, i)), X.set(t, o));
    }
  }
  function Oe(e, t, a, r) {
    t = i(t);
    var n,
      o,
      s,
      l,
      c,
      d,
      u = 0,
      p = e.length,
      f = p - 1,
      v = t[0],
      g = m(v);
    if (g || (p > 1 && "string" == typeof v && !h.checkClone && Pe.test(v)))
      return e.each(function (n) {
        var i = e.eq(n);
        g && (t[0] = v.call(this, n, i.html())), Oe(i, t, a, r);
      });
    if (
      p &&
      ((o = (n = be(t, e[0].ownerDocument, !1, e, r)).firstChild),
      1 === n.childNodes.length && (n = o),
      o || r)
    ) {
      for (l = (s = w.map(ve(n, "script"), Ne)).length; u < p; u++)
        (c = n),
          u !== f &&
            ((c = w.clone(c, !0, !0)), l && w.merge(s, ve(c, "script"))),
          a.call(e[u], c, u);
      if (l)
        for (d = s[s.length - 1].ownerDocument, w.map(s, Ae), u = 0; u < l; u++)
          (c = s[u]),
            me.test(c.type || "") &&
              !Y.access(c, "globalEval") &&
              w.contains(d, c) &&
              (c.src && "module" !== (c.type || "").toLowerCase()
                ? w._evalUrl &&
                  !c.noModule &&
                  w._evalUrl(
                    c.src,
                    { nonce: c.nonce || c.getAttribute("nonce") },
                    d
                  )
                : y(c.textContent.replace($e, ""), c, d));
    }
    return e;
  }
  function Be(e, t, a) {
    for (var r, n = t ? w.filter(t, e) : e, i = 0; null != (r = n[i]); i++)
      a || 1 !== r.nodeType || w.cleanData(ve(r)),
        r.parentNode &&
          (a && re(r) && ge(ve(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  w.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, a) {
      var r,
        n,
        i,
        o,
        s,
        l,
        c,
        d = e.cloneNode(!0),
        u = re(e);
      if (
        !(
          h.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          w.isXMLDoc(e)
        )
      )
        for (o = ve(d), r = 0, n = (i = ve(e)).length; r < n; r++)
          (s = i[r]),
            (l = o[r]),
            (c = void 0),
            "input" === (c = l.nodeName.toLowerCase()) && pe.test(s.type)
              ? (l.checked = s.checked)
              : ("input" !== c && "textarea" !== c) ||
                (l.defaultValue = s.defaultValue);
      if (t)
        if (a)
          for (i = i || ve(e), o = o || ve(d), r = 0, n = i.length; r < n; r++)
            Ie(i[r], o[r]);
        else Ie(e, d);
      return (
        (o = ve(d, "script")).length > 0 && ge(o, !u && ve(e, "script")), d
      );
    },
    cleanData: function (e) {
      for (var t, a, r, n = w.event.special, i = 0; void 0 !== (a = e[i]); i++)
        if (U(a)) {
          if ((t = a[Y.expando])) {
            if (t.events)
              for (r in t.events)
                n[r] ? w.event.remove(a, r) : w.removeEvent(a, r, t.handle);
            a[Y.expando] = void 0;
          }
          a[X.expando] && (a[X.expando] = void 0);
        }
    },
  }),
    w.fn.extend({
      detach: function (e) {
        return Be(this, e, !0);
      },
      remove: function (e) {
        return Be(this, e);
      },
      text: function (e) {
        return H(
          this,
          function (e) {
            return void 0 === e
              ? w.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Oe(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Le(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Oe(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Le(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Oe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Oe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (w.cleanData(ve(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return w.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return H(
          this,
          function (e) {
            var t = this[0] || {},
              a = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Me.test(e) &&
              !fe[(he.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = w.htmlPrefilter(e);
              try {
                for (; a < r; a++)
                  1 === (t = this[a] || {}).nodeType &&
                    (w.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return Oe(
          this,
          arguments,
          function (t) {
            var a = this.parentNode;
            w.inArray(this, e) < 0 &&
              (w.cleanData(ve(this)), a && a.replaceChild(t, this));
          },
          e
        );
      },
    }),
    w.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        w.fn[e] = function (e) {
          for (var a, r = [], n = w(e), i = n.length - 1, s = 0; s <= i; s++)
            (a = s === i ? this : this.clone(!0)),
              w(n[s])[t](a),
              o.apply(r, a.get());
          return this.pushStack(r);
        };
      }
    );
  var Re = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
    De = function (t) {
      var a = t.ownerDocument.defaultView;
      return (a && a.opener) || (a = e), a.getComputedStyle(t);
    },
    Ge = function (e, t, a) {
      var r,
        n,
        i = {};
      for (n in t) (i[n] = e.style[n]), (e.style[n] = t[n]);
      for (n in ((r = a.call(e)), t)) e.style[n] = i[n];
      return r;
    },
    je = new RegExp(te.join("|"), "i");
  function He(e, t, a) {
    var r,
      n,
      i,
      o,
      s = e.style;
    return (
      (a = a || De(e)) &&
        ("" !== (o = a.getPropertyValue(t) || a[t]) ||
          re(e) ||
          (o = w.style(e, t)),
        !h.pixelBoxStyles() &&
          Re.test(o) &&
          je.test(t) &&
          ((r = s.width),
          (n = s.minWidth),
          (i = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = o),
          (o = a.width),
          (s.width = r),
          (s.minWidth = n),
          (s.maxWidth = i))),
      void 0 !== o ? o + "" : o
    );
  }
  function Ve(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function t() {
      if (d) {
        (c.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (d.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          ae.appendChild(c).appendChild(d);
        var t = e.getComputedStyle(d);
        (r = "1%" !== t.top),
          (l = 12 === a(t.marginLeft)),
          (d.style.right = "60%"),
          (o = 36 === a(t.right)),
          (n = 36 === a(t.width)),
          (d.style.position = "absolute"),
          (i = 12 === a(d.offsetWidth / 3)),
          ae.removeChild(c),
          (d = null);
      }
    }
    function a(e) {
      return Math.round(parseFloat(e));
    }
    var r,
      n,
      i,
      o,
      s,
      l,
      c = v.createElement("div"),
      d = v.createElement("div");
    d.style &&
      ((d.style.backgroundClip = "content-box"),
      (d.cloneNode(!0).style.backgroundClip = ""),
      (h.clearCloneStyle = "content-box" === d.style.backgroundClip),
      w.extend(h, {
        boxSizingReliable: function () {
          return t(), n;
        },
        pixelBoxStyles: function () {
          return t(), o;
        },
        pixelPosition: function () {
          return t(), r;
        },
        reliableMarginLeft: function () {
          return t(), l;
        },
        scrollboxSize: function () {
          return t(), i;
        },
        reliableTrDimensions: function () {
          var t, a, r, n;
          return (
            null == s &&
              ((t = v.createElement("table")),
              (a = v.createElement("tr")),
              (r = v.createElement("div")),
              (t.style.cssText = "position:absolute;left:-11111px"),
              (a.style.height = "1px"),
              (r.style.height = "9px"),
              ae.appendChild(t).appendChild(a).appendChild(r),
              (n = e.getComputedStyle(a)),
              (s = parseInt(n.height) > 3),
              ae.removeChild(t)),
            s
          );
        },
      }));
  })();
  var Fe = ["Webkit", "Moz", "ms"],
    qe = v.createElement("div").style,
    ze = {};
  function Ue(e) {
    var t = w.cssProps[e] || ze[e];
    return (
      t ||
      (e in qe
        ? e
        : (ze[e] =
            (function (e) {
              for (
                var t = e[0].toUpperCase() + e.slice(1), a = Fe.length;
                a--;

              )
                if ((e = Fe[a] + t) in qe) return e;
            })(e) || e))
    );
  }
  var We = /^(none|table(?!-c[ea]).+)/,
    Ye = /^--/,
    Xe = { position: "absolute", visibility: "hidden", display: "block" },
    Je = { letterSpacing: "0", fontWeight: "400" };
  function Ke(e, t, a) {
    var r = ee.exec(t);
    return r ? Math.max(0, r[2] - (a || 0)) + (r[3] || "px") : t;
  }
  function Qe(e, t, a, r, n, i) {
    var o = "width" === t ? 1 : 0,
      s = 0,
      l = 0;
    if (a === (r ? "border" : "content")) return 0;
    for (; o < 4; o += 2)
      "margin" === a && (l += w.css(e, a + te[o], !0, n)),
        r
          ? ("content" === a && (l -= w.css(e, "padding" + te[o], !0, n)),
            "margin" !== a &&
              (l -= w.css(e, "border" + te[o] + "Width", !0, n)))
          : ((l += w.css(e, "padding" + te[o], !0, n)),
            "padding" !== a
              ? (l += w.css(e, "border" + te[o] + "Width", !0, n))
              : (s += w.css(e, "border" + te[o] + "Width", !0, n)));
    return (
      !r &&
        i >= 0 &&
        (l +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - i - l - s - 0.5
            )
          ) || 0),
      l
    );
  }
  function Ze(e, t, a) {
    var r = De(e),
      n =
        (!h.boxSizingReliable() || a) &&
        "border-box" === w.css(e, "boxSizing", !1, r),
      i = n,
      o = He(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Re.test(o)) {
      if (!a) return o;
      o = "auto";
    }
    return (
      ((!h.boxSizingReliable() && n) ||
        (!h.reliableTrDimensions() && _(e, "tr")) ||
        "auto" === o ||
        (!parseFloat(o) && "inline" === w.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((n = "border-box" === w.css(e, "boxSizing", !1, r)),
        (i = s in e) && (o = e[s])),
      (o = parseFloat(o) || 0) +
        Qe(e, t, a || (n ? "border" : "content"), i, r, o) +
        "px"
    );
  }
  function et(e, t, a, r, n) {
    return new et.prototype.init(e, t, a, r, n);
  }
  w.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var a = He(e, "opacity");
            return "" === a ? "1" : a;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, a, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var n,
          i,
          o,
          s = z(t),
          l = Ye.test(t),
          c = e.style;
        if (
          (l || (t = Ue(s)), (o = w.cssHooks[t] || w.cssHooks[s]), void 0 === a)
        )
          return o && "get" in o && void 0 !== (n = o.get(e, !1, r)) ? n : c[t];
        "string" === (i = _typeof(a)) &&
          (n = ee.exec(a)) &&
          n[1] &&
          ((a = oe(e, t, n)), (i = "number")),
          null != a &&
            a == a &&
            ("number" !== i ||
              l ||
              (a += (n && n[3]) || (w.cssNumber[s] ? "" : "px")),
            h.clearCloneStyle ||
              "" !== a ||
              0 !== t.indexOf("background") ||
              (c[t] = "inherit"),
            (o && "set" in o && void 0 === (a = o.set(e, a, r))) ||
              (l ? c.setProperty(t, a) : (c[t] = a)));
      }
    },
    css: function (e, t, a, r) {
      var n,
        i,
        o,
        s = z(t);
      return (
        Ye.test(t) || (t = Ue(s)),
        (o = w.cssHooks[t] || w.cssHooks[s]) &&
          "get" in o &&
          (n = o.get(e, !0, a)),
        void 0 === n && (n = He(e, t, r)),
        "normal" === n && t in Je && (n = Je[t]),
        "" === a || a
          ? ((i = parseFloat(n)), !0 === a || isFinite(i) ? i || 0 : n)
          : n
      );
    },
  }),
    w.each(["height", "width"], function (e, t) {
      w.cssHooks[t] = {
        get: function (e, a, r) {
          if (a)
            return !We.test(w.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Ze(e, t, r)
              : Ge(e, Xe, function () {
                  return Ze(e, t, r);
                });
        },
        set: function (e, a, r) {
          var n,
            i = De(e),
            o = !h.scrollboxSize() && "absolute" === i.position,
            s = (o || r) && "border-box" === w.css(e, "boxSizing", !1, i),
            l = r ? Qe(e, t, r, s, i) : 0;
          return (
            s &&
              o &&
              (l -= Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(i[t]) -
                  Qe(e, t, "border", !1, i) -
                  0.5
              )),
            l &&
              (n = ee.exec(a)) &&
              "px" !== (n[3] || "px") &&
              ((e.style[t] = a), (a = w.css(e, t))),
            Ke(0, a, l)
          );
        },
      };
    }),
    (w.cssHooks.marginLeft = Ve(h.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(He(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Ge(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (w.cssHooks[e + t] = {
        expand: function (a) {
          for (
            var r = 0, n = {}, i = "string" == typeof a ? a.split(" ") : [a];
            r < 4;
            r++
          )
            n[e + te[r] + t] = i[r] || i[r - 2] || i[0];
          return n;
        },
      }),
        "margin" !== e && (w.cssHooks[e + t].set = Ke);
    }),
    w.fn.extend({
      css: function (e, t) {
        return H(
          this,
          function (e, t, a) {
            var r,
              n,
              i = {},
              o = 0;
            if (Array.isArray(t)) {
              for (r = De(e), n = t.length; o < n; o++)
                i[t[o]] = w.css(e, t[o], !1, r);
              return i;
            }
            return void 0 !== a ? w.style(e, t, a) : w.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
    }),
    (w.Tween = et),
    (et.prototype = {
      constructor: et,
      init: function (e, t, a, r, n, i) {
        (this.elem = e),
          (this.prop = a),
          (this.easing = n || w.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = i || (w.cssNumber[a] ? "" : "px"));
      },
      cur: function () {
        var e = et.propHooks[this.prop];
        return e && e.get ? e.get(this) : et.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          a = et.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                w.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          a && a.set ? a.set(this) : et.propHooks._default.set(this),
          this
        );
      },
    }),
    (et.prototype.init.prototype = et.prototype),
    (et.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = w.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          w.fx.step[e.prop]
            ? w.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!w.cssHooks[e.prop] && null == e.elem.style[Ue(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : w.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (et.propHooks.scrollTop = et.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (w.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (w.fx = et.prototype.init),
    (w.fx.step = {});
  var tt,
    at,
    rt = /^(?:toggle|show|hide)$/,
    nt = /queueHooks$/;
  function it() {
    at &&
      (!1 === v.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(it)
        : e.setTimeout(it, w.fx.interval),
      w.fx.tick());
  }
  function ot() {
    return (
      e.setTimeout(function () {
        tt = void 0;
      }),
      (tt = Date.now())
    );
  }
  function st(e, t) {
    var a,
      r = 0,
      n = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      n["margin" + (a = te[r])] = n["padding" + a] = e;
    return t && (n.opacity = n.width = e), n;
  }
  function lt(e, t, a) {
    for (
      var r,
        n = (ct.tweeners[t] || []).concat(ct.tweeners["*"]),
        i = 0,
        o = n.length;
      i < o;
      i++
    )
      if ((r = n[i].call(a, t, e))) return r;
  }
  function ct(e, t, a) {
    var r,
      n,
      i = 0,
      o = ct.prefilters.length,
      s = w.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (n) return !1;
        for (
          var t = tt || ot(),
            a = Math.max(0, c.startTime + c.duration - t),
            r = 1 - (a / c.duration || 0),
            i = 0,
            o = c.tweens.length;
          i < o;
          i++
        )
          c.tweens[i].run(r);
        return (
          s.notifyWith(e, [c, r, a]),
          r < 1 && o
            ? a
            : (o || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
        );
      },
      c = s.promise({
        elem: e,
        props: w.extend({}, t),
        opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, a),
        originalProperties: t,
        originalOptions: a,
        startTime: tt || ot(),
        duration: a.duration,
        tweens: [],
        createTween: function (t, a) {
          var r = w.Tween(
            e,
            c.opts,
            t,
            a,
            c.opts.specialEasing[t] || c.opts.easing
          );
          return c.tweens.push(r), r;
        },
        stop: function (t) {
          var a = 0,
            r = t ? c.tweens.length : 0;
          if (n) return this;
          for (n = !0; a < r; a++) c.tweens[a].run(1);
          return (
            t
              ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t]))
              : s.rejectWith(e, [c, t]),
            this
          );
        },
      }),
      d = c.props;
    for (
      !(function (e, t) {
        var a, r, n, i, o;
        for (a in e)
          if (
            ((n = t[(r = z(a))]),
            (i = e[a]),
            Array.isArray(i) && ((n = i[1]), (i = e[a] = i[0])),
            a !== r && ((e[r] = i), delete e[a]),
            (o = w.cssHooks[r]) && ("expand" in o))
          )
            for (a in ((i = o.expand(i)), delete e[r], i))
              (a in e) || ((e[a] = i[a]), (t[a] = n));
          else t[r] = n;
      })(d, c.opts.specialEasing);
      i < o;
      i++
    )
      if ((r = ct.prefilters[i].call(c, e, d, c.opts)))
        return (
          m(r.stop) &&
            (w._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
          r
        );
    return (
      w.map(d, lt, c),
      m(c.opts.start) && c.opts.start.call(e, c),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always),
      w.fx.timer(w.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
      c
    );
  }
  (w.Animation = w.extend(ct, {
    tweeners: {
      "*": [
        function (e, t) {
          var a = this.createTween(e, t);
          return oe(a.elem, e, ee.exec(t), a), a;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(I));
      for (var a, r = 0, n = e.length; r < n; r++)
        (a = e[r]),
          (ct.tweeners[a] = ct.tweeners[a] || []),
          ct.tweeners[a].unshift(t);
    },
    prefilters: [
      function (e, t, a) {
        var r,
          n,
          i,
          o,
          s,
          l,
          c,
          d,
          u = "width" in t || "height" in t,
          p = this,
          h = {},
          m = e.style,
          f = e.nodeType && ie(e),
          v = Y.get(e, "fxshow");
        for (r in (a.queue ||
          (null == (o = w._queueHooks(e, "fx")).unqueued &&
            ((o.unqueued = 0),
            (s = o.empty.fire),
            (o.empty.fire = function () {
              o.unqueued || s();
            })),
          o.unqueued++,
          p.always(function () {
            p.always(function () {
              o.unqueued--, w.queue(e, "fx").length || o.empty.fire();
            });
          })),
        t))
          if (((n = t[r]), rt.test(n))) {
            if (
              (delete t[r],
              (i = i || "toggle" === n),
              n === (f ? "hide" : "show"))
            ) {
              if ("show" !== n || !v || void 0 === v[r]) continue;
              f = !0;
            }
            h[r] = (v && v[r]) || w.style(e, r);
          }
        if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(h))
          for (r in (u &&
            1 === e.nodeType &&
            ((a.overflow = [m.overflow, m.overflowX, m.overflowY]),
            null == (c = v && v.display) && (c = Y.get(e, "display")),
            "none" === (d = w.css(e, "display")) &&
              (c
                ? (d = c)
                : (ce([e], !0),
                  (c = e.style.display || c),
                  (d = w.css(e, "display")),
                  ce([e]))),
            ("inline" === d || ("inline-block" === d && null != c)) &&
              "none" === w.css(e, "float") &&
              (l ||
                (p.done(function () {
                  m.display = c;
                }),
                null == c && ((d = m.display), (c = "none" === d ? "" : d))),
              (m.display = "inline-block"))),
          a.overflow &&
            ((m.overflow = "hidden"),
            p.always(function () {
              (m.overflow = a.overflow[0]),
                (m.overflowX = a.overflow[1]),
                (m.overflowY = a.overflow[2]);
            })),
          (l = !1),
          h))
            l ||
              (v
                ? "hidden" in v && (f = v.hidden)
                : (v = Y.access(e, "fxshow", { display: c })),
              i && (v.hidden = !f),
              f && ce([e], !0),
              p.done(function () {
                for (r in (f || ce([e]), Y.remove(e, "fxshow"), h))
                  w.style(e, r, h[r]);
              })),
              (l = lt(f ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = l.start), f && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? ct.prefilters.unshift(e) : ct.prefilters.push(e);
    },
  })),
    (w.speed = function (e, t, a) {
      var r =
        e && "object" === _typeof(e)
          ? w.extend({}, e)
          : {
              complete: a || (!a && t) || (m(e) && e),
              duration: e,
              easing: (a && t) || (t && !m(t) && t),
            };
      return (
        w.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in w.fx.speeds
              ? (r.duration = w.fx.speeds[r.duration])
              : (r.duration = w.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
        }),
        r
      );
    }),
    w.fn.extend({
      fadeTo: function (e, t, a, r) {
        return this.filter(ie)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, a, r);
      },
      animate: function (e, t, a, r) {
        var n = w.isEmptyObject(e),
          i = w.speed(t, a, r),
          o = function () {
            var t = ct(this, w.extend({}, e), i);
            (n || Y.get(this, "finish")) && t.stop(!0);
          };
        return (
          (o.finish = o),
          n || !1 === i.queue ? this.each(o) : this.queue(i.queue, o)
        );
      },
      stop: function (e, t, a) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(a);
        };
        return (
          "string" != typeof e && ((a = t), (t = e), (e = void 0)),
          t && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              n = null != e && e + "queueHooks",
              i = w.timers,
              o = Y.get(this);
            if (n) o[n] && o[n].stop && r(o[n]);
            else for (n in o) o[n] && o[n].stop && nt.test(n) && r(o[n]);
            for (n = i.length; n--; )
              i[n].elem !== this ||
                (null != e && i[n].queue !== e) ||
                (i[n].anim.stop(a), (t = !1), i.splice(n, 1));
            (!t && a) || w.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              a = Y.get(this),
              r = a[e + "queue"],
              n = a[e + "queueHooks"],
              i = w.timers,
              o = r ? r.length : 0;
            for (
              a.finish = !0,
                w.queue(this, e, []),
                n && n.stop && n.stop.call(this, !0),
                t = i.length;
              t--;

            )
              i[t].elem === this &&
                i[t].queue === e &&
                (i[t].anim.stop(!0), i.splice(t, 1));
            for (t = 0; t < o; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete a.finish;
          })
        );
      },
    }),
    w.each(["toggle", "show", "hide"], function (e, t) {
      var a = w.fn[t];
      w.fn[t] = function (e, r, n) {
        return null == e || "boolean" == typeof e
          ? a.apply(this, arguments)
          : this.animate(st(t, !0), e, r, n);
      };
    }),
    w.each(
      {
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        w.fn[e] = function (e, a, r) {
          return this.animate(t, e, a, r);
        };
      }
    ),
    (w.timers = []),
    (w.fx.tick = function () {
      var e,
        t = 0,
        a = w.timers;
      for (tt = Date.now(); t < a.length; t++)
        (e = a[t])() || a[t] !== e || a.splice(t--, 1);
      a.length || w.fx.stop(), (tt = void 0);
    }),
    (w.fx.timer = function (e) {
      w.timers.push(e), w.fx.start();
    }),
    (w.fx.interval = 13),
    (w.fx.start = function () {
      at || ((at = !0), it());
    }),
    (w.fx.stop = function () {
      at = null;
    }),
    (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (w.fn.delay = function (t, a) {
      return (
        (t = (w.fx && w.fx.speeds[t]) || t),
        (a = a || "fx"),
        this.queue(a, function (a, r) {
          var n = e.setTimeout(a, t);
          r.stop = function () {
            e.clearTimeout(n);
          };
        })
      );
    }),
    (function () {
      var e = v.createElement("input"),
        t = v.createElement("select").appendChild(v.createElement("option"));
      (e.type = "checkbox"),
        (h.checkOn = "" !== e.value),
        (h.optSelected = t.selected),
        ((e = v.createElement("input")).value = "t"),
        (e.type = "radio"),
        (h.radioValue = "t" === e.value);
    })();
  var dt,
    ut = w.expr.attrHandle;
  w.fn.extend({
    attr: function (e, t) {
      return H(this, w.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    },
  }),
    w.extend({
      attr: function (e, t, a) {
        var r,
          n,
          i = e.nodeType;
        if (3 !== i && 8 !== i && 2 !== i)
          return void 0 === e.getAttribute
            ? w.prop(e, t, a)
            : ((1 === i && w.isXMLDoc(e)) ||
                (n =
                  w.attrHooks[t.toLowerCase()] ||
                  (w.expr.match.bool.test(t) ? dt : void 0)),
              void 0 !== a
                ? null === a
                  ? void w.removeAttr(e, t)
                  : n && "set" in n && void 0 !== (r = n.set(e, a, t))
                  ? r
                  : (e.setAttribute(t, a + ""), a)
                : n && "get" in n && null !== (r = n.get(e, t))
                ? r
                : null == (r = w.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!h.radioValue && "radio" === t && _(e, "input")) {
              var a = e.value;
              return e.setAttribute("type", t), a && (e.value = a), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var a,
          r = 0,
          n = t && t.match(I);
        if (n && 1 === e.nodeType) for (; (a = n[r++]); ) e.removeAttribute(a);
      },
    }),
    (dt = {
      set: function (e, t, a) {
        return !1 === t ? w.removeAttr(e, a) : e.setAttribute(a, a), a;
      },
    }),
    w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = ut[t] || w.find.attr;
      ut[t] = function (e, t, r) {
        var n,
          i,
          o = t.toLowerCase();
        return (
          r ||
            ((i = ut[o]),
            (ut[o] = n),
            (n = null != a(e, t, r) ? o : null),
            (ut[o] = i)),
          n
        );
      };
    });
  var pt = /^(?:input|select|textarea|button)$/i,
    ht = /^(?:a|area)$/i;
  function mt(e) {
    return (e.match(I) || []).join(" ");
  }
  function ft(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function vt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(I)) || [];
  }
  w.fn.extend({
    prop: function (e, t) {
      return H(this, w.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    },
  }),
    w.extend({
      prop: function (e, t, a) {
        var r,
          n,
          i = e.nodeType;
        if (3 !== i && 8 !== i && 2 !== i)
          return (
            (1 === i && w.isXMLDoc(e)) ||
              ((t = w.propFix[t] || t), (n = w.propHooks[t])),
            void 0 !== a
              ? n && "set" in n && void 0 !== (r = n.set(e, a, t))
                ? r
                : (e[t] = a)
              : n && "get" in n && null !== (r = n.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = w.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : pt.test(e.nodeName) || (ht.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    h.optSelected ||
      (w.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    w.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        w.propFix[this.toLowerCase()] = this;
      }
    ),
    w.fn.extend({
      addClass: function (e) {
        var t,
          a,
          r,
          n,
          i,
          o,
          s,
          l = 0;
        if (m(e))
          return this.each(function (t) {
            w(this).addClass(e.call(this, t, ft(this)));
          });
        if ((t = vt(e)).length)
          for (; (a = this[l++]); )
            if (((n = ft(a)), (r = 1 === a.nodeType && " " + mt(n) + " "))) {
              for (o = 0; (i = t[o++]); )
                r.indexOf(" " + i + " ") < 0 && (r += i + " ");
              n !== (s = mt(r)) && a.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          a,
          r,
          n,
          i,
          o,
          s,
          l = 0;
        if (m(e))
          return this.each(function (t) {
            w(this).removeClass(e.call(this, t, ft(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((t = vt(e)).length)
          for (; (a = this[l++]); )
            if (((n = ft(a)), (r = 1 === a.nodeType && " " + mt(n) + " "))) {
              for (o = 0; (i = t[o++]); )
                for (; r.indexOf(" " + i + " ") > -1; )
                  r = r.replace(" " + i + " ", " ");
              n !== (s = mt(r)) && a.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var a = _typeof(e),
          r = "string" === a || Array.isArray(e);
        return "boolean" == typeof t && r
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : m(e)
          ? this.each(function (a) {
              w(this).toggleClass(e.call(this, a, ft(this), t), t);
            })
          : this.each(function () {
              var t, n, i, o;
              if (r)
                for (n = 0, i = w(this), o = vt(e); (t = o[n++]); )
                  i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
              else
                (void 0 !== e && "boolean" !== a) ||
                  ((t = ft(this)) && Y.set(this, "__className__", t),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      t || !1 === e ? "" : Y.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (e) {
        var t,
          a,
          r = 0;
        for (t = " " + e + " "; (a = this[r++]); )
          if (1 === a.nodeType && (" " + mt(ft(a)) + " ").indexOf(t) > -1)
            return !0;
        return !1;
      },
    });
  var gt = /\r/g;
  w.fn.extend({
    val: function (e) {
      var t,
        a,
        r,
        n = this[0];
      return arguments.length
        ? ((r = m(e)),
          this.each(function (a) {
            var n;
            1 === this.nodeType &&
              (null == (n = r ? e.call(this, a, w(this).val()) : e)
                ? (n = "")
                : "number" == typeof n
                ? (n += "")
                : Array.isArray(n) &&
                  (n = w.map(n, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t =
                w.valHooks[this.type] ||
                w.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, n, "value")) ||
                (this.value = n));
          }))
        : n
        ? (t = w.valHooks[n.type] || w.valHooks[n.nodeName.toLowerCase()]) &&
          "get" in t &&
          void 0 !== (a = t.get(n, "value"))
          ? a
          : "string" == typeof (a = n.value)
          ? a.replace(gt, "")
          : null == a
          ? ""
          : a
        : void 0;
    },
  }),
    w.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = w.find.attr(e, "value");
            return null != t ? t : mt(w.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              a,
              r,
              n = e.options,
              i = e.selectedIndex,
              o = "select-one" === e.type,
              s = o ? null : [],
              l = o ? i + 1 : n.length;
            for (r = i < 0 ? l : o ? i : 0; r < l; r++)
              if (
                ((a = n[r]).selected || r === i) &&
                !a.disabled &&
                (!a.parentNode.disabled || !_(a.parentNode, "optgroup"))
              ) {
                if (((t = w(a).val()), o)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            for (
              var a, r, n = e.options, i = w.makeArray(t), o = n.length;
              o--;

            )
              ((r = n[o]).selected =
                w.inArray(w.valHooks.option.get(r), i) > -1) && (a = !0);
            return a || (e.selectedIndex = -1), i;
          },
        },
      },
    }),
    w.each(["radio", "checkbox"], function () {
      (w.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = w.inArray(w(e).val(), t) > -1);
        },
      }),
        h.checkOn ||
          (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (h.focusin = "onfocusin" in e);
  var yt = /^(?:focusinfocus|focusoutblur)$/,
    bt = function (e) {
      e.stopPropagation();
    };
  w.extend(w.event, {
    trigger: function (t, a, r, n) {
      var i,
        o,
        s,
        l,
        c,
        u,
        p,
        h,
        g = [r || v],
        y = d.call(t, "type") ? t.type : t,
        b = d.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((o = h = s = r = r || v),
        3 !== r.nodeType &&
          8 !== r.nodeType &&
          !yt.test(y + w.event.triggered) &&
          (y.indexOf(".") > -1 &&
            ((b = y.split(".")), (y = b.shift()), b.sort()),
          (c = y.indexOf(":") < 0 && "on" + y),
          ((t = t[w.expando]
            ? t
            : new w.Event(y, "object" === _typeof(t) && t)).isTrigger = n
            ? 2
            : 3),
          (t.namespace = b.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = r),
          (a = null == a ? [t] : w.makeArray(a, [t])),
          (p = w.event.special[y] || {}),
          n || !p.trigger || !1 !== p.trigger.apply(r, a)))
      ) {
        if (!n && !p.noBubble && !f(r)) {
          for (
            l = p.delegateType || y, yt.test(l + y) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            g.push(o), (s = o);
          s === (r.ownerDocument || v) &&
            g.push(s.defaultView || s.parentWindow || e);
        }
        for (i = 0; (o = g[i++]) && !t.isPropagationStopped(); )
          (h = o),
            (t.type = i > 1 ? l : p.bindType || y),
            (u =
              (Y.get(o, "events") || Object.create(null))[t.type] &&
              Y.get(o, "handle")) && u.apply(o, a),
            (u = c && o[c]) &&
              u.apply &&
              U(o) &&
              ((t.result = u.apply(o, a)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = y),
          n ||
            t.isDefaultPrevented() ||
            (p._default && !1 !== p._default.apply(g.pop(), a)) ||
            !U(r) ||
            (c &&
              m(r[y]) &&
              !f(r) &&
              ((s = r[c]) && (r[c] = null),
              (w.event.triggered = y),
              t.isPropagationStopped() && h.addEventListener(y, bt),
              r[y](),
              t.isPropagationStopped() && h.removeEventListener(y, bt),
              (w.event.triggered = void 0),
              s && (r[c] = s))),
          t.result
        );
      }
    },
    simulate: function (e, t, a) {
      var r = w.extend(new w.Event(), a, { type: e, isSimulated: !0 });
      w.event.trigger(r, null, t);
    },
  }),
    w.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          w.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var a = this[0];
        if (a) return w.event.trigger(e, t, a, !0);
      },
    }),
    h.focusin ||
      w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var a = function (e) {
          w.event.simulate(t, e.target, w.event.fix(e));
        };
        w.event.special[t] = {
          setup: function () {
            var r = this.ownerDocument || this.document || this,
              n = Y.access(r, t);
            n || r.addEventListener(e, a, !0), Y.access(r, t, (n || 0) + 1);
          },
          teardown: function () {
            var r = this.ownerDocument || this.document || this,
              n = Y.access(r, t) - 1;
            n
              ? Y.access(r, t, n)
              : (r.removeEventListener(e, a, !0), Y.remove(r, t));
          },
        };
      });
  var wt = e.location,
    Ct = { guid: Date.now() },
    Tt = /\?/;
  w.parseXML = function (t) {
    var a;
    if (!t || "string" != typeof t) return null;
    try {
      a = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      a = void 0;
    }
    return (
      (a && !a.getElementsByTagName("parsererror").length) ||
        w.error("Invalid XML: " + t),
      a
    );
  };
  var kt = /\[\]$/,
    St = /\r?\n/g,
    xt = /^(?:submit|button|image|reset|file)$/i,
    _t = /^(?:input|select|textarea|keygen)/i;
  function Et(e, t, a, r) {
    var n;
    if (Array.isArray(t))
      w.each(t, function (t, n) {
        a || kt.test(e)
          ? r(e, n)
          : Et(
              e + "[" + ("object" === _typeof(n) && null != n ? t : "") + "]",
              n,
              a,
              r
            );
      });
    else if (a || "object" !== b(t)) r(e, t);
    else for (n in t) Et(e + "[" + n + "]", t[n], a, r);
  }
  (w.param = function (e, t) {
    var a,
      r = [],
      n = function (e, t) {
        var a = m(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == a ? "" : a);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
      w.each(e, function () {
        n(this.name, this.value);
      });
    else for (a in e) Et(a, e[a], t, n);
    return r.join("&");
  }),
    w.fn.extend({
      serialize: function () {
        return w.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = w.prop(this, "elements");
          return e ? w.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !w(this).is(":disabled") &&
              _t.test(this.nodeName) &&
              !xt.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var a = w(this).val();
            return null == a
              ? null
              : Array.isArray(a)
              ? w.map(a, function (e) {
                  return { name: t.name, value: e.replace(St, "\r\n") };
                })
              : { name: t.name, value: a.replace(St, "\r\n") };
          })
          .get();
      },
    });
  var Mt = /%20/g,
    Pt = /#.*$/,
    $t = /([?&])_=[^&]*/,
    Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Nt = /^(?:GET|HEAD)$/,
    At = /^\/\//,
    It = {},
    Ot = {},
    Bt = "*/".concat("*"),
    Rt = v.createElement("a");
  function Dt(e) {
    return function (t, a) {
      "string" != typeof t && ((a = t), (t = "*"));
      var r,
        n = 0,
        i = t.toLowerCase().match(I) || [];
      if (m(a))
        for (; (r = i[n++]); )
          "+" === r[0]
            ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(a))
            : (e[r] = e[r] || []).push(a);
    };
  }
  function Gt(e, t, a, r) {
    var n = {},
      i = e === Ot;
    function o(s) {
      var l;
      return (
        (n[s] = !0),
        w.each(e[s] || [], function (e, s) {
          var c = s(t, a, r);
          return "string" != typeof c || i || n[c]
            ? i
              ? !(l = c)
              : void 0
            : (t.dataTypes.unshift(c), o(c), !1);
        }),
        l
      );
    }
    return o(t.dataTypes[0]) || (!n["*"] && o("*"));
  }
  function jt(e, t) {
    var a,
      r,
      n = w.ajaxSettings.flatOptions || {};
    for (a in t) void 0 !== t[a] && ((n[a] ? e : r || (r = {}))[a] = t[a]);
    return r && w.extend(!0, e, r), e;
  }
  (Rt.href = wt.href),
    w.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: wt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            wt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Bt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": w.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? jt(jt(e, w.ajaxSettings), t) : jt(w.ajaxSettings, e);
      },
      ajaxPrefilter: Dt(It),
      ajaxTransport: Dt(Ot),
      ajax: function (t, a) {
        "object" === _typeof(t) && ((a = t), (t = void 0)), (a = a || {});
        var r,
          n,
          i,
          o,
          s,
          l,
          c,
          d,
          u,
          p,
          h = w.ajaxSetup({}, a),
          m = h.context || h,
          f = h.context && (m.nodeType || m.jquery) ? w(m) : w.event,
          g = w.Deferred(),
          y = w.Callbacks("once memory"),
          b = h.statusCode || {},
          C = {},
          T = {},
          k = "canceled",
          S = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (c) {
                if (!o)
                  for (o = {}; (t = Lt.exec(i)); )
                    o[t[1].toLowerCase() + " "] = (
                      o[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                t = o[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return c ? i : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == c &&
                  ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e),
                  (C[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == c && (h.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (c) S.always(e[S.status]);
                else for (t in e) b[t] = [b[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || k;
              return r && r.abort(t), x(0, t), this;
            },
          };
        if (
          (g.promise(S),
          (h.url = ((t || h.url || wt.href) + "").replace(
            At,
            wt.protocol + "//"
          )),
          (h.type = a.method || a.type || h.method || h.type),
          (h.dataTypes = (h.dataType || "*").toLowerCase().match(I) || [""]),
          null == h.crossDomain)
        ) {
          l = v.createElement("a");
          try {
            (l.href = h.url),
              (l.href = l.href),
              (h.crossDomain =
                Rt.protocol + "//" + Rt.host != l.protocol + "//" + l.host);
          } catch (e) {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data &&
            h.processData &&
            "string" != typeof h.data &&
            (h.data = w.param(h.data, h.traditional)),
          Gt(It, h, a, S),
          c)
        )
          return S;
        for (u in ((d = w.event && h.global) &&
          0 == w.active++ &&
          w.event.trigger("ajaxStart"),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !Nt.test(h.type)),
        (n = h.url.replace(Pt, "")),
        h.hasContent
          ? h.data &&
            h.processData &&
            0 ===
              (h.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (h.data = h.data.replace(Mt, "+"))
          : ((p = h.url.slice(n.length)),
            h.data &&
              (h.processData || "string" == typeof h.data) &&
              ((n += (Tt.test(n) ? "&" : "?") + h.data), delete h.data),
            !1 === h.cache &&
              ((n = n.replace($t, "$1")),
              (p = (Tt.test(n) ? "&" : "?") + "_=" + Ct.guid++ + p)),
            (h.url = n + p)),
        h.ifModified &&
          (w.lastModified[n] &&
            S.setRequestHeader("If-Modified-Since", w.lastModified[n]),
          w.etag[n] && S.setRequestHeader("If-None-Match", w.etag[n])),
        ((h.data && h.hasContent && !1 !== h.contentType) || a.contentType) &&
          S.setRequestHeader("Content-Type", h.contentType),
        S.setRequestHeader(
          "Accept",
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] +
                ("*" !== h.dataTypes[0] ? ", " + Bt + "; q=0.01" : "")
            : h.accepts["*"]
        ),
        h.headers))
          S.setRequestHeader(u, h.headers[u]);
        if (h.beforeSend && (!1 === h.beforeSend.call(m, S, h) || c))
          return S.abort();
        if (
          ((k = "abort"),
          y.add(h.complete),
          S.done(h.success),
          S.fail(h.error),
          (r = Gt(Ot, h, a, S)))
        ) {
          if (((S.readyState = 1), d && f.trigger("ajaxSend", [S, h]), c))
            return S;
          h.async &&
            h.timeout > 0 &&
            (s = e.setTimeout(function () {
              S.abort("timeout");
            }, h.timeout));
          try {
            (c = !1), r.send(C, x);
          } catch (e) {
            if (c) throw e;
            x(-1, e);
          }
        } else x(-1, "No Transport");
        function x(t, a, o, l) {
          var u,
            p,
            v,
            C,
            T,
            k = a;
          c ||
            ((c = !0),
            s && e.clearTimeout(s),
            (r = void 0),
            (i = l || ""),
            (S.readyState = t > 0 ? 4 : 0),
            (u = (t >= 200 && t < 300) || 304 === t),
            o &&
              (C = (function (e, t, a) {
                for (
                  var r, n, i, o, s = e.contents, l = e.dataTypes;
                  "*" === l[0];

                )
                  l.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (n in s)
                    if (s[n] && s[n].test(r)) {
                      l.unshift(n);
                      break;
                    }
                if (l[0] in a) i = l[0];
                else {
                  for (n in a) {
                    if (!l[0] || e.converters[n + " " + l[0]]) {
                      i = n;
                      break;
                    }
                    o || (o = n);
                  }
                  i = i || o;
                }
                if (i) return i !== l[0] && l.unshift(i), a[i];
              })(h, S, o)),
            !u &&
              w.inArray("script", h.dataTypes) > -1 &&
              (h.converters["text script"] = function () {}),
            (C = (function (e, t, a, r) {
              var n,
                i,
                o,
                s,
                l,
                c = {},
                d = e.dataTypes.slice();
              if (d[1])
                for (o in e.converters) c[o.toLowerCase()] = e.converters[o];
              for (i = d.shift(); i; )
                if (
                  (e.responseFields[i] && (a[e.responseFields[i]] = t),
                  !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (l = i),
                  (i = d.shift()))
                )
                  if ("*" === i) i = l;
                  else if ("*" !== l && l !== i) {
                    if (!(o = c[l + " " + i] || c["* " + i]))
                      for (n in c)
                        if (
                          (s = n.split(" "))[1] === i &&
                          (o = c[l + " " + s[0]] || c["* " + s[0]])
                        ) {
                          !0 === o
                            ? (o = c[n])
                            : !0 !== c[n] && ((i = s[0]), d.unshift(s[1]));
                          break;
                        }
                    if (!0 !== o)
                      if (o && e.throws) t = o(t);
                      else
                        try {
                          t = o(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: o
                              ? e
                              : "No conversion from " + l + " to " + i,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(h, C, S, u)),
            u
              ? (h.ifModified &&
                  ((T = S.getResponseHeader("Last-Modified")) &&
                    (w.lastModified[n] = T),
                  (T = S.getResponseHeader("etag")) && (w.etag[n] = T)),
                204 === t || "HEAD" === h.type
                  ? (k = "nocontent")
                  : 304 === t
                  ? (k = "notmodified")
                  : ((k = C.state), (p = C.data), (u = !(v = C.error))))
              : ((v = k), (!t && k) || ((k = "error"), t < 0 && (t = 0))),
            (S.status = t),
            (S.statusText = (a || k) + ""),
            u ? g.resolveWith(m, [p, k, S]) : g.rejectWith(m, [S, k, v]),
            S.statusCode(b),
            (b = void 0),
            d && f.trigger(u ? "ajaxSuccess" : "ajaxError", [S, h, u ? p : v]),
            y.fireWith(m, [S, k]),
            d &&
              (f.trigger("ajaxComplete", [S, h]),
              --w.active || w.event.trigger("ajaxStop")));
        }
        return S;
      },
      getJSON: function (e, t, a) {
        return w.get(e, t, a, "json");
      },
      getScript: function (e, t) {
        return w.get(e, void 0, t, "script");
      },
    }),
    w.each(["get", "post"], function (e, t) {
      w[t] = function (e, a, r, n) {
        return (
          m(a) && ((n = n || r), (r = a), (a = void 0)),
          w.ajax(
            w.extend(
              { url: e, type: t, dataType: n, data: a, success: r },
              w.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    w.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (w._evalUrl = function (e, t, a) {
      return w.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          w.globalEval(e, t, a);
        },
      });
    }),
    w.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return m(e)
          ? this.each(function (t) {
              w(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = w(this),
                a = t.contents();
              a.length ? a.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = m(e);
        return this.each(function (a) {
          w(this).wrapAll(t ? e.call(this, a) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              w(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (w.expr.pseudos.hidden = function (e) {
      return !w.expr.pseudos.visible(e);
    }),
    (w.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (w.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var Ht = { 0: 200, 1223: 204 },
    Vt = w.ajaxSettings.xhr();
  (h.cors = !!Vt && "withCredentials" in Vt),
    (h.ajax = Vt = !!Vt),
    w.ajaxTransport(function (t) {
      var a, r;
      if (h.cors || (Vt && !t.crossDomain))
        return {
          send: function (n, i) {
            var o,
              s = t.xhr();
            if (
              (s.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (o in t.xhrFields) s[o] = t.xhrFields[o];
            for (o in (t.mimeType &&
              s.overrideMimeType &&
              s.overrideMimeType(t.mimeType),
            t.crossDomain ||
              n["X-Requested-With"] ||
              (n["X-Requested-With"] = "XMLHttpRequest"),
            n))
              s.setRequestHeader(o, n[o]);
            (a = function (e) {
              return function () {
                a &&
                  ((a =
                    r =
                    s.onload =
                    s.onerror =
                    s.onabort =
                    s.ontimeout =
                    s.onreadystatechange =
                      null),
                  "abort" === e
                    ? s.abort()
                    : "error" === e
                    ? "number" != typeof s.status
                      ? i(0, "error")
                      : i(s.status, s.statusText)
                    : i(
                        Ht[s.status] || s.status,
                        s.statusText,
                        "text" !== (s.responseType || "text") ||
                          "string" != typeof s.responseText
                          ? { binary: s.response }
                          : { text: s.responseText },
                        s.getAllResponseHeaders()
                      ));
              };
            }),
              (s.onload = a()),
              (r = s.onerror = s.ontimeout = a("error")),
              void 0 !== s.onabort
                ? (s.onabort = r)
                : (s.onreadystatechange = function () {
                    4 === s.readyState &&
                      e.setTimeout(function () {
                        a && r();
                      });
                  }),
              (a = a("abort"));
            try {
              s.send((t.hasContent && t.data) || null);
            } catch (e) {
              if (a) throw e;
            }
          },
          abort: function () {
            a && a();
          },
        };
    }),
    w.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    w.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return w.globalEval(e), e;
        },
      },
    }),
    w.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    w.ajaxTransport("script", function (e) {
      var t, a;
      if (e.crossDomain || e.scriptAttrs)
        return {
          send: function (r, n) {
            (t = w("<script>")
              .attr(e.scriptAttrs || {})
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (a = function (e) {
                  t.remove(),
                    (a = null),
                    e && n("error" === e.type ? 404 : 200, e.type);
                })
              )),
              v.head.appendChild(t[0]);
          },
          abort: function () {
            a && a();
          },
        };
    });
  var Ft,
    qt = [],
    zt = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = qt.pop() || w.expando + "_" + Ct.guid++;
      return (this[e] = !0), e;
    },
  }),
    w.ajaxPrefilter("json jsonp", function (t, a, r) {
      var n,
        i,
        o,
        s =
          !1 !== t.jsonp &&
          (zt.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              zt.test(t.data) &&
              "data");
      if (s || "jsonp" === t.dataTypes[0])
        return (
          (n = t.jsonpCallback =
            m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(zt, "$1" + n))
            : !1 !== t.jsonp &&
              (t.url += (Tt.test(t.url) ? "&" : "?") + t.jsonp + "=" + n),
          (t.converters["script json"] = function () {
            return o || w.error(n + " was not called"), o[0];
          }),
          (t.dataTypes[0] = "json"),
          (i = e[n]),
          (e[n] = function () {
            o = arguments;
          }),
          r.always(function () {
            void 0 === i ? w(e).removeProp(n) : (e[n] = i),
              t[n] && ((t.jsonpCallback = a.jsonpCallback), qt.push(n)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (h.createHTMLDocument =
      (((Ft = v.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Ft.childNodes.length)),
    (w.parseHTML = function (e, t, a) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((a = t), (t = !1)),
          t ||
            (h.createHTMLDocument
              ? (((r = (t =
                  v.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = v.location.href),
                t.head.appendChild(r))
              : (t = v)),
          (i = !a && []),
          (n = E.exec(e))
            ? [t.createElement(n[1])]
            : ((n = be([e], t, i)),
              i && i.length && w(i).remove(),
              w.merge([], n.childNodes)));
      var r, n, i;
    }),
    (w.fn.load = function (e, t, a) {
      var r,
        n,
        i,
        o = this,
        s = e.indexOf(" ");
      return (
        s > -1 && ((r = mt(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((a = t), (t = void 0))
          : t && "object" === _typeof(t) && (n = "POST"),
        o.length > 0 &&
          w
            .ajax({ url: e, type: n || "GET", dataType: "html", data: t })
            .done(function (e) {
              (i = arguments),
                o.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
            })
            .always(
              a &&
                function (e, t) {
                  o.each(function () {
                    a.apply(this, i || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (w.expr.pseudos.animated = function (e) {
      return w.grep(w.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (w.offset = {
      setOffset: function (e, t, a) {
        var r,
          n,
          i,
          o,
          s,
          l,
          c = w.css(e, "position"),
          d = w(e),
          u = {};
        "static" === c && (e.style.position = "relative"),
          (s = d.offset()),
          (i = w.css(e, "top")),
          (l = w.css(e, "left")),
          ("absolute" === c || "fixed" === c) && (i + l).indexOf("auto") > -1
            ? ((o = (r = d.position()).top), (n = r.left))
            : ((o = parseFloat(i) || 0), (n = parseFloat(l) || 0)),
          m(t) && (t = t.call(e, a, w.extend({}, s))),
          null != t.top && (u.top = t.top - s.top + o),
          null != t.left && (u.left = t.left - s.left + n),
          "using" in t
            ? t.using.call(e, u)
            : ("number" == typeof u.top && (u.top += "px"),
              "number" == typeof u.left && (u.left += "px"),
              d.css(u));
      },
    }),
    w.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                w.offset.setOffset(this, e, t);
              });
        var t,
          a,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((t = r.getBoundingClientRect()),
              (a = r.ownerDocument.defaultView),
              { top: t.top + a.pageYOffset, left: t.left + a.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            a,
            r = this[0],
            n = { top: 0, left: 0 };
          if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                a = r.ownerDocument,
                e = r.offsetParent || a.documentElement;
              e &&
              (e === a.body || e === a.documentElement) &&
              "static" === w.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((n = w(e).offset()).top += w.css(e, "borderTopWidth", !0)),
              (n.left += w.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - n.top - w.css(r, "marginTop", !0),
            left: t.left - n.left - w.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === w.css(e, "position");

          )
            e = e.offsetParent;
          return e || ae;
        });
      },
    }),
    w.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var a = "pageYOffset" === t;
        w.fn[e] = function (r) {
          return H(
            this,
            function (e, r, n) {
              var i;
              if (
                (f(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView),
                void 0 === n)
              )
                return i ? i[t] : e[r];
              i
                ? i.scrollTo(a ? i.pageXOffset : n, a ? n : i.pageYOffset)
                : (e[r] = n);
            },
            e,
            r,
            arguments.length
          );
        };
      }
    ),
    w.each(["top", "left"], function (e, t) {
      w.cssHooks[t] = Ve(h.pixelPosition, function (e, a) {
        if (a)
          return (a = He(e, t)), Re.test(a) ? w(e).position()[t] + "px" : a;
      });
    }),
    w.each({ Height: "height", Width: "width" }, function (e, t) {
      w.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (a, r) {
          w.fn[r] = function (n, i) {
            var o = arguments.length && (a || "boolean" != typeof n),
              s = a || (!0 === n || !0 === i ? "margin" : "border");
            return H(
              this,
              function (t, a, n) {
                var i;
                return f(t)
                  ? 0 === r.indexOf("outer")
                    ? t["inner" + e]
                    : t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((i = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      i["scroll" + e],
                      t.body["offset" + e],
                      i["offset" + e],
                      i["client" + e]
                    ))
                  : void 0 === n
                  ? w.css(t, a, s)
                  : w.style(t, a, n, s);
              },
              t,
              o ? n : void 0,
              o
            );
          };
        }
      );
    }),
    w.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        w.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    w.fn.extend({
      bind: function (e, t, a) {
        return this.on(e, null, t, a);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, a, r) {
        return this.on(t, e, a, r);
      },
      undelegate: function (e, t, a) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", a);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    w.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        w.fn[t] = function (e, a) {
          return arguments.length > 0
            ? this.on(t, null, e, a)
            : this.trigger(t);
        };
      }
    );
  var Ut = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (w.proxy = function (e, t) {
    var a, r, i;
    if (("string" == typeof t && ((a = e[t]), (t = e), (e = a)), m(e)))
      return (
        (r = n.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(n.call(arguments)));
        }).guid = e.guid =
          e.guid || w.guid++),
        i
      );
  }),
    (w.holdReady = function (e) {
      e ? w.readyWait++ : w.ready(!0);
    }),
    (w.isArray = Array.isArray),
    (w.parseJSON = JSON.parse),
    (w.nodeName = _),
    (w.isFunction = m),
    (w.isWindow = f),
    (w.camelCase = z),
    (w.type = b),
    (w.now = Date.now),
    (w.isNumeric = function (e) {
      var t = w.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (w.trim = function (e) {
      return null == e ? "" : (e + "").replace(Ut, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return w;
      });
  var Wt = e.jQuery,
    Yt = e.$;
  return (
    (w.noConflict = function (t) {
      return e.$ === w && (e.$ = Yt), t && e.jQuery === w && (e.jQuery = Wt), w;
    }),
    void 0 === t && (e.jQuery = e.$ = w),
    w
  );
}),
  (function (e, t) {
    "object" ==
      ("undefined" == typeof exports ? "undefined" : _typeof(exports)) &&
    "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e = e || self).Swiper = t());
  })(this, function () {
    "use strict";
    function e(e, t) {
      for (var a = 0; a < t.length; a++) {
        var r = t[a];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function t() {
      return (t =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var r in a)
              Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function a(e) {
      return (
        null !== e &&
        "object" == _typeof(e) &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function r(e, t) {
      void 0 === e && (e = {}),
        void 0 === t && (t = {}),
        Object.keys(t).forEach(function (n) {
          void 0 === e[n]
            ? (e[n] = t[n])
            : a(t[n]) &&
              a(e[n]) &&
              Object.keys(t[n]).length > 0 &&
              r(e[n], t[n]);
        });
    }
    var n = {
      body: {},
      addEventListener: function () {},
      removeEventListener: function () {},
      activeElement: { blur: function () {}, nodeName: "" },
      querySelector: function () {
        return null;
      },
      querySelectorAll: function () {
        return [];
      },
      getElementById: function () {
        return null;
      },
      createEvent: function () {
        return { initEvent: function () {} };
      },
      createElement: function () {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute: function () {},
          getElementsByTagName: function () {
            return [];
          },
        };
      },
      createElementNS: function () {
        return {};
      },
      importNode: function () {
        return null;
      },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function i() {
      var e = "undefined" != typeof document ? document : {};
      return r(e, n), e;
    }
    var o = {
      document: n,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: {
        replaceState: function () {},
        pushState: function () {},
        go: function () {},
        back: function () {},
      },
      CustomEvent: function () {
        return this;
      },
      addEventListener: function () {},
      removeEventListener: function () {},
      getComputedStyle: function () {
        return {
          getPropertyValue: function () {
            return "";
          },
        };
      },
      Image: function () {},
      Date: function () {},
      screen: {},
      setTimeout: function () {},
      clearTimeout: function () {},
      matchMedia: function () {
        return {};
      },
      requestAnimationFrame: function (e) {
        return "undefined" == typeof setTimeout
          ? (e(), null)
          : setTimeout(e, 0);
      },
      cancelAnimationFrame: function (e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function s() {
      var e = "undefined" != typeof window ? window : {};
      return r(e, o), e;
    }
    function l(e) {
      return (l = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function c(e, t) {
      return (c =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function d(e, t, a) {
      return (d = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })()
        ? Reflect.construct
        : function (e, t, a) {
            var r = [null];
            r.push.apply(r, t);
            var n = new (Function.bind.apply(e, r))();
            return a && c(n, a.prototype), n;
          }).apply(null, arguments);
    }
    function u(e) {
      var t = "function" == typeof Map ? new Map() : void 0;
      return (u = function (e) {
        if (
          null === e ||
          ((a = e), -1 === Function.toString.call(a).indexOf("[native code]"))
        )
          return e;
        var a;
        if ("function" != typeof e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (void 0 !== t) {
          if (t.has(e)) return t.get(e);
          t.set(e, r);
        }
        function r() {
          return d(e, arguments, l(this).constructor);
        }
        return (
          (r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          c(r, e)
        );
      })(e);
    }
    var p = (function (e) {
      var t, a;
      function r(t) {
        var a, r, n;
        return (
          (r = (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })((a = e.call.apply(e, [this].concat(t)) || this))),
          (n = r.__proto__),
          Object.defineProperty(r, "__proto__", {
            get: function () {
              return n;
            },
            set: function (e) {
              n.__proto__ = e;
            },
          }),
          a
        );
      }
      return (
        (a = e),
        ((t = r).prototype = Object.create(a.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = a),
        r
      );
    })(u(Array));
    function h(e) {
      void 0 === e && (e = []);
      var t = [];
      return (
        e.forEach(function (e) {
          Array.isArray(e) ? t.push.apply(t, h(e)) : t.push(e);
        }),
        t
      );
    }
    function m(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function f(e, t) {
      var a = s(),
        r = i(),
        n = [];
      if (!t && e instanceof p) return e;
      if (!e) return new p(n);
      if ("string" == typeof e) {
        var o = e.trim();
        if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
          var l = "div";
          0 === o.indexOf("<li") && (l = "ul"),
            0 === o.indexOf("<tr") && (l = "tbody"),
            (0 !== o.indexOf("<td") && 0 !== o.indexOf("<th")) || (l = "tr"),
            0 === o.indexOf("<tbody") && (l = "table"),
            0 === o.indexOf("<option") && (l = "select");
          var c = r.createElement(l);
          c.innerHTML = o;
          for (var d = 0; d < c.childNodes.length; d += 1)
            n.push(c.childNodes[d]);
        } else
          n = (function (e, t) {
            if ("string" != typeof e) return [e];
            for (
              var a = [], r = t.querySelectorAll(e), n = 0;
              n < r.length;
              n += 1
            )
              a.push(r[n]);
            return a;
          })(e.trim(), t || r);
      } else if (e.nodeType || e === a || e === r) n.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof p) return e;
        n = e;
      }
      return new p(
        (function (e) {
          for (var t = [], a = 0; a < e.length; a += 1)
            -1 === t.indexOf(e[a]) && t.push(e[a]);
          return t;
        })(n)
      );
    }
    f.fn = p.prototype;
    var v,
      g,
      y,
      b = {
        addClass: function () {
          for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          var r = h(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            this.forEach(function (e) {
              var t;
              (t = e.classList).add.apply(t, r);
            }),
            this
          );
        },
        removeClass: function () {
          for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          var r = h(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            this.forEach(function (e) {
              var t;
              (t = e.classList).remove.apply(t, r);
            }),
            this
          );
        },
        hasClass: function () {
          for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          var r = h(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            m(this, function (e) {
              return (
                r.filter(function (t) {
                  return e.classList.contains(t);
                }).length > 0
              );
            }).length > 0
          );
        },
        toggleClass: function () {
          for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          var r = h(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          this.forEach(function (e) {
            r.forEach(function (t) {
              e.classList.toggle(t);
            });
          });
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" == typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (var a = 0; a < this.length; a += 1)
            if (2 === arguments.length) this[a].setAttribute(e, t);
            else
              for (var r in e)
                (this[a][r] = e[r]), this[a].setAttribute(r, e[r]);
          return this;
        },
        removeAttr: function (e) {
          for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (var t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration =
              "string" != typeof e ? e + "ms" : e;
          return this;
        },
        on: function () {
          for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          var r = t[0],
            n = t[1],
            i = t[2],
            o = t[3];
          function s(e) {
            var t = e.target;
            if (t) {
              var a = e.target.dom7EventData || [];
              if ((a.indexOf(e) < 0 && a.unshift(e), f(t).is(n))) i.apply(t, a);
              else
                for (var r = f(t).parents(), o = 0; o < r.length; o += 1)
                  f(r[o]).is(n) && i.apply(r[o], a);
            }
          }
          function l(e) {
            var t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
          }
          "function" == typeof t[1] &&
            ((r = t[0]), (i = t[1]), (o = t[2]), (n = void 0)),
            o || (o = !1);
          for (var c, d = r.split(" "), u = 0; u < this.length; u += 1) {
            var p = this[u];
            if (n)
              for (c = 0; c < d.length; c += 1) {
                var h = d[c];
                p.dom7LiveListeners || (p.dom7LiveListeners = {}),
                  p.dom7LiveListeners[h] || (p.dom7LiveListeners[h] = []),
                  p.dom7LiveListeners[h].push({
                    listener: i,
                    proxyListener: s,
                  }),
                  p.addEventListener(h, s, o);
              }
            else
              for (c = 0; c < d.length; c += 1) {
                var m = d[c];
                p.dom7Listeners || (p.dom7Listeners = {}),
                  p.dom7Listeners[m] || (p.dom7Listeners[m] = []),
                  p.dom7Listeners[m].push({ listener: i, proxyListener: l }),
                  p.addEventListener(m, l, o);
              }
          }
          return this;
        },
        off: function () {
          for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          var r = t[0],
            n = t[1],
            i = t[2],
            o = t[3];
          "function" == typeof t[1] &&
            ((r = t[0]), (i = t[1]), (o = t[2]), (n = void 0)),
            o || (o = !1);
          for (var s = r.split(" "), l = 0; l < s.length; l += 1)
            for (var c = s[l], d = 0; d < this.length; d += 1) {
              var u = this[d],
                p = void 0;
              if (
                (!n && u.dom7Listeners
                  ? (p = u.dom7Listeners[c])
                  : n && u.dom7LiveListeners && (p = u.dom7LiveListeners[c]),
                p && p.length)
              )
                for (var h = p.length - 1; h >= 0; h -= 1) {
                  var m = p[h];
                  (i && m.listener === i) ||
                  (i &&
                    m.listener &&
                    m.listener.dom7proxy &&
                    m.listener.dom7proxy === i)
                    ? (u.removeEventListener(c, m.proxyListener, o),
                      p.splice(h, 1))
                    : i ||
                      (u.removeEventListener(c, m.proxyListener, o),
                      p.splice(h, 1));
                }
            }
          return this;
        },
        trigger: function () {
          for (
            var e = s(), t = arguments.length, a = new Array(t), r = 0;
            r < t;
            r++
          )
            a[r] = arguments[r];
          for (var n = a[0].split(" "), i = a[1], o = 0; o < n.length; o += 1)
            for (var l = n[o], c = 0; c < this.length; c += 1) {
              var d = this[c];
              if (e.CustomEvent) {
                var u = new e.CustomEvent(l, {
                  detail: i,
                  bubbles: !0,
                  cancelable: !0,
                });
                (d.dom7EventData = a.filter(function (e, t) {
                  return t > 0;
                })),
                  d.dispatchEvent(u),
                  (d.dom7EventData = []),
                  delete d.dom7EventData;
              }
            }
          return this;
        },
        transitionEnd: function (e) {
          var t = this;
          return (
            e &&
              t.on("transitionend", function a(r) {
                r.target === this &&
                  (e.call(this, r), t.off("transitionend", a));
              }),
            this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              var t = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(t.getPropertyValue("margin-right")) +
                parseFloat(t.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              var t = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(t.getPropertyValue("margin-top")) +
                parseFloat(t.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          var e = s();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            var e = s(),
              t = i(),
              a = this[0],
              r = a.getBoundingClientRect(),
              n = t.body,
              o = a.clientTop || n.clientTop || 0,
              l = a.clientLeft || n.clientLeft || 0,
              c = a === e ? e.scrollY : a.scrollTop,
              d = a === e ? e.scrollX : a.scrollLeft;
            return { top: r.top + c - o, left: r.left + d - l };
          }
          return null;
        },
        css: function (e, t) {
          var a,
            r = s();
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (a = 0; a < this.length; a += 1)
                for (var n in e) this[a].style[n] = e[n];
              return this;
            }
            if (this[0])
              return r.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          return e
            ? (this.forEach(function (t, a) {
                e.apply(t, [t, a]);
              }),
              this)
            : this;
        },
        html: function (e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : null;
          for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          var t,
            a,
            r = s(),
            n = i(),
            o = this[0];
          if (!o || void 0 === e) return !1;
          if ("string" == typeof e) {
            if (o.matches) return o.matches(e);
            if (o.webkitMatchesSelector) return o.webkitMatchesSelector(e);
            if (o.msMatchesSelector) return o.msMatchesSelector(e);
            for (t = f(e), a = 0; a < t.length; a += 1)
              if (t[a] === o) return !0;
            return !1;
          }
          if (e === n) return o === n;
          if (e === r) return o === r;
          if (e.nodeType || e instanceof p) {
            for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1)
              if (t[a] === o) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          var e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if (void 0 === e) return this;
          var t = this.length;
          if (e > t - 1) return f([]);
          if (e < 0) {
            var a = t + e;
            return f(a < 0 ? [] : [this[a]]);
          }
          return f([this[e]]);
        },
        append: function () {
          for (var e, t = i(), a = 0; a < arguments.length; a += 1) {
            e = a < 0 || arguments.length <= a ? void 0 : arguments[a];
            for (var r = 0; r < this.length; r += 1)
              if ("string" == typeof e) {
                var n = t.createElement("div");
                for (n.innerHTML = e; n.firstChild; )
                  this[r].appendChild(n.firstChild);
              } else if (e instanceof p)
                for (var o = 0; o < e.length; o += 1) this[r].appendChild(e[o]);
              else this[r].appendChild(e);
          }
          return this;
        },
        prepend: function (e) {
          var t,
            a,
            r = i();
          for (t = 0; t < this.length; t += 1)
            if ("string" == typeof e) {
              var n = r.createElement("div");
              for (n.innerHTML = e, a = n.childNodes.length - 1; a >= 0; a -= 1)
                this[t].insertBefore(n.childNodes[a], this[t].childNodes[0]);
            } else if (e instanceof p)
              for (a = 0; a < e.length; a += 1)
                this[t].insertBefore(e[a], this[t].childNodes[0]);
            else this[t].insertBefore(e, this[t].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                f(this[0].nextElementSibling).is(e)
                ? f([this[0].nextElementSibling])
                : f([])
              : this[0].nextElementSibling
              ? f([this[0].nextElementSibling])
              : f([])
            : f([]);
        },
        nextAll: function (e) {
          var t = [],
            a = this[0];
          if (!a) return f([]);
          for (; a.nextElementSibling; ) {
            var r = a.nextElementSibling;
            e ? f(r).is(e) && t.push(r) : t.push(r), (a = r);
          }
          return f(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            var t = this[0];
            return e
              ? t.previousElementSibling && f(t.previousElementSibling).is(e)
                ? f([t.previousElementSibling])
                : f([])
              : t.previousElementSibling
              ? f([t.previousElementSibling])
              : f([]);
          }
          return f([]);
        },
        prevAll: function (e) {
          var t = [],
            a = this[0];
          if (!a) return f([]);
          for (; a.previousElementSibling; ) {
            var r = a.previousElementSibling;
            e ? f(r).is(e) && t.push(r) : t.push(r), (a = r);
          }
          return f(t);
        },
        parent: function (e) {
          for (var t = [], a = 0; a < this.length; a += 1)
            null !== this[a].parentNode &&
              (e
                ? f(this[a].parentNode).is(e) && t.push(this[a].parentNode)
                : t.push(this[a].parentNode));
          return f(t);
        },
        parents: function (e) {
          for (var t = [], a = 0; a < this.length; a += 1)
            for (var r = this[a].parentNode; r; )
              e ? f(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
          return f(t);
        },
        closest: function (e) {
          var t = this;
          return void 0 === e
            ? f([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          for (var t = [], a = 0; a < this.length; a += 1)
            for (
              var r = this[a].querySelectorAll(e), n = 0;
              n < r.length;
              n += 1
            )
              t.push(r[n]);
          return f(t);
        },
        children: function (e) {
          for (var t = [], a = 0; a < this.length; a += 1)
            for (var r = this[a].children, n = 0; n < r.length; n += 1)
              (e && !f(r[n]).is(e)) || t.push(r[n]);
          return f(t);
        },
        filter: function (e) {
          return f(m(this, e));
        },
        remove: function () {
          for (var e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
    function w(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function C() {
      return Date.now();
    }
    function T(e, t) {
      void 0 === t && (t = "x");
      var a,
        r,
        n,
        i = s(),
        o = i.getComputedStyle(e, null);
      return (
        i.WebKitCSSMatrix
          ? ((r = o.transform || o.webkitTransform).split(",").length > 6 &&
              (r = r
                .split(", ")
                .map(function (e) {
                  return e.replace(",", ".");
                })
                .join(", ")),
            (n = new i.WebKitCSSMatrix("none" === r ? "" : r)))
          : (a = (n =
              o.MozTransform ||
              o.OTransform ||
              o.MsTransform ||
              o.msTransform ||
              o.transform ||
              o
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,"))
              .toString()
              .split(",")),
        "x" === t &&
          (r = i.WebKitCSSMatrix
            ? n.m41
            : 16 === a.length
            ? parseFloat(a[12])
            : parseFloat(a[4])),
        "y" === t &&
          (r = i.WebKitCSSMatrix
            ? n.m42
            : 16 === a.length
            ? parseFloat(a[13])
            : parseFloat(a[5])),
        r || 0
      );
    }
    function k(e) {
      return (
        "object" == _typeof(e) &&
        null !== e &&
        e.constructor &&
        e.constructor === Object
      );
    }
    function S() {
      for (
        var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1;
        t < arguments.length;
        t += 1
      ) {
        var a = t < 0 || arguments.length <= t ? void 0 : arguments[t];
        if (null != a)
          for (
            var r = Object.keys(Object(a)), n = 0, i = r.length;
            n < i;
            n += 1
          ) {
            var o = r[n],
              s = Object.getOwnPropertyDescriptor(a, o);
            void 0 !== s &&
              s.enumerable &&
              (k(e[o]) && k(a[o])
                ? S(e[o], a[o])
                : !k(e[o]) && k(a[o])
                ? ((e[o] = {}), S(e[o], a[o]))
                : (e[o] = a[o]));
          }
      }
      return e;
    }
    function x(e, t) {
      Object.keys(t).forEach(function (a) {
        k(t[a]) &&
          Object.keys(t[a]).forEach(function (r) {
            "function" == typeof t[a][r] && (t[a][r] = t[a][r].bind(e));
          }),
          (e[a] = t[a]);
      });
    }
    function _() {
      return (
        v ||
          ((e = s()),
          (t = i()),
          (v = {
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
            pointerEvents:
              !!e.PointerEvent &&
              "maxTouchPoints" in e.navigator &&
              e.navigator.maxTouchPoints >= 0,
            observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
            passiveListener: (function () {
              var t = !1;
              try {
                var a = Object.defineProperty({}, "passive", {
                  get: function () {
                    t = !0;
                  },
                });
                e.addEventListener("testPassiveListener", null, a);
              } catch (e) {}
              return t;
            })(),
            gestures: "ongesturestart" in e,
          })),
        v
      );
      var e, t;
    }
    function E(e) {
      return (
        void 0 === e && (e = {}),
        g ||
          (g = (function (e) {
            var t = (void 0 === e ? {} : e).userAgent,
              a = _(),
              r = s(),
              n = r.navigator.platform,
              i = t || r.navigator.userAgent,
              o = { ios: !1, android: !1 },
              l = r.screen.width,
              c = r.screen.height,
              d = i.match(/(Android);?[\s\/]+([\d.]+)?/),
              u = i.match(/(iPad).*OS\s([\d_]+)/),
              p = i.match(/(iPod)(.*OS\s([\d_]+))?/),
              h = !u && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              m = "Win32" === n,
              f = "MacIntel" === n;
            return (
              !u &&
                f &&
                a.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(l + "x" + c) >= 0 &&
                ((u = i.match(/(Version)\/([\d.]+)/)) || (u = [0, 1, "13_0_0"]),
                (f = !1)),
              d && !m && ((o.os = "android"), (o.android = !0)),
              (u || h || p) && ((o.os = "ios"), (o.ios = !0)),
              o
            );
          })(e)),
        g
      );
    }
    function M() {
      return (
        y ||
          ((t = s()),
          (y = {
            isEdge: !!t.navigator.userAgent.match(/Edge/g),
            isSafari:
              ((e = t.navigator.userAgent.toLowerCase()),
              e.indexOf("safari") >= 0 &&
                e.indexOf("chrome") < 0 &&
                e.indexOf("android") < 0),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              t.navigator.userAgent
            ),
          })),
        y
      );
      var e, t;
    }
    Object.keys(b).forEach(function (e) {
      f.fn[e] = b[e];
    });
    var P = {
        name: "resize",
        create: function () {
          var e = this;
          S(e, {
            resize: {
              resizeHandler: function () {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  (e.emit("beforeResize"), e.emit("resize"));
              },
              orientationChangeHandler: function () {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  e.emit("orientationchange");
              },
            },
          });
        },
        on: {
          init: function (e) {
            var t = s();
            t.addEventListener("resize", e.resize.resizeHandler),
              t.addEventListener(
                "orientationchange",
                e.resize.orientationChangeHandler
              );
          },
          destroy: function (e) {
            var t = s();
            t.removeEventListener("resize", e.resize.resizeHandler),
              t.removeEventListener(
                "orientationchange",
                e.resize.orientationChangeHandler
              );
          },
        },
      },
      $ = {
        attach: function (e, t) {
          void 0 === t && (t = {});
          var a = s(),
            r = this,
            n = new (a.MutationObserver || a.WebkitMutationObserver)(function (
              e
            ) {
              if (1 !== e.length) {
                var t = function () {
                  r.emit("observerUpdate", e[0]);
                };
                a.requestAnimationFrame
                  ? a.requestAnimationFrame(t)
                  : a.setTimeout(t, 0);
              } else r.emit("observerUpdate", e[0]);
            });
          n.observe(e, {
            attributes: void 0 === t.attributes || t.attributes,
            childList: void 0 === t.childList || t.childList,
            characterData: void 0 === t.characterData || t.characterData,
          }),
            r.observer.observers.push(n);
        },
        init: function () {
          var e = this;
          if (e.support.observer && e.params.observer) {
            if (e.params.observeParents)
              for (var t = e.$el.parents(), a = 0; a < t.length; a += 1)
                e.observer.attach(t[a]);
            e.observer.attach(e.$el[0], {
              childList: e.params.observeSlideChildren,
            }),
              e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
          }
        },
        destroy: function () {
          this.observer.observers.forEach(function (e) {
            e.disconnect();
          }),
            (this.observer.observers = []);
        },
      },
      L = {
        name: "observer",
        params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
        create: function () {
          x(this, { observer: t(t({}, $), {}, { observers: [] }) });
        },
        on: {
          init: function (e) {
            e.observer.init();
          },
          destroy: function (e) {
            e.observer.destroy();
          },
        },
      };
    function N(e) {
      var t = this,
        a = i(),
        r = s(),
        n = t.touchEventsData,
        o = t.params,
        l = t.touches;
      if (!t.animating || !o.preventInteractionOnTransition) {
        var c = e;
        c.originalEvent && (c = c.originalEvent);
        var d = f(c.target);
        if (
          ("wrapper" !== o.touchEventsTarget ||
            d.closest(t.wrapperEl).length) &&
          ((n.isTouchEvent = "touchstart" === c.type),
          (n.isTouchEvent || !("which" in c) || 3 !== c.which) &&
            !(
              (!n.isTouchEvent && "button" in c && c.button > 0) ||
              (n.isTouched && n.isMoved)
            ))
        )
          if (
            (!!o.noSwipingClass &&
              "" !== o.noSwipingClass &&
              c.target &&
              c.target.shadowRoot &&
              e.path &&
              e.path[0] &&
              (d = f(e.path[0])),
            o.noSwiping &&
              d.closest(
                o.noSwipingSelector
                  ? o.noSwipingSelector
                  : "." + o.noSwipingClass
              )[0])
          )
            t.allowClick = !0;
          else if (!o.swipeHandler || d.closest(o.swipeHandler)[0]) {
            (l.currentX =
              "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX),
              (l.currentY =
                "touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY);
            var u = l.currentX,
              p = l.currentY,
              h = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
              m = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
            if (!h || !(u <= m || u >= r.innerWidth - m)) {
              if (
                (S(n, {
                  isTouched: !0,
                  isMoved: !1,
                  allowTouchCallbacks: !0,
                  isScrolling: void 0,
                  startMoving: void 0,
                }),
                (l.startX = u),
                (l.startY = p),
                (n.touchStartTime = C()),
                (t.allowClick = !0),
                t.updateSize(),
                (t.swipeDirection = void 0),
                o.threshold > 0 && (n.allowThresholdMove = !1),
                "touchstart" !== c.type)
              ) {
                var v = !0;
                d.is(n.formElements) && (v = !1),
                  a.activeElement &&
                    f(a.activeElement).is(n.formElements) &&
                    a.activeElement !== d[0] &&
                    a.activeElement.blur();
                var g = v && t.allowTouchMove && o.touchStartPreventDefault;
                (!o.touchStartForcePreventDefault && !g) ||
                  d[0].isContentEditable ||
                  c.preventDefault();
              }
              t.emit("touchStart", c);
            }
          }
      }
    }
    function A() {
      var e = this,
        t = e.params,
        a = e.el;
      if (!a || 0 !== a.offsetWidth) {
        t.breakpoints && e.setBreakpoint();
        var r = e.allowSlideNext,
          n = e.allowSlidePrev,
          i = e.snapGrid;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses(),
          ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
          e.isEnd &&
          !e.isBeginning &&
          !e.params.centeredSlides
            ? e.slideTo(e.slides.length - 1, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.run(),
          (e.allowSlidePrev = n),
          (e.allowSlideNext = r),
          e.params.watchOverflow && i !== e.snapGrid && e.checkOverflow();
      }
    }
    var I = !1;
    function O() {}
    var B = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        nested: !1,
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: 0.02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      },
      R = {
        modular: {
          useParams: function (e) {
            var t = this;
            t.modules &&
              Object.keys(t.modules).forEach(function (a) {
                var r = t.modules[a];
                r.params && S(e, r.params);
              });
          },
          useModules: function (e) {
            void 0 === e && (e = {});
            var t = this;
            t.modules &&
              Object.keys(t.modules).forEach(function (a) {
                var r = t.modules[a],
                  n = e[a] || {};
                r.on &&
                  t.on &&
                  Object.keys(r.on).forEach(function (e) {
                    t.on(e, r.on[e]);
                  }),
                  r.create && r.create.bind(t)(n);
              });
          },
        },
        eventsEmitter: {
          on: function (e, t, a) {
            var r = this;
            if ("function" != typeof t) return r;
            var n = a ? "unshift" : "push";
            return (
              e.split(" ").forEach(function (e) {
                r.eventsListeners[e] || (r.eventsListeners[e] = []),
                  r.eventsListeners[e][n](t);
              }),
              r
            );
          },
          once: function (e, t, a) {
            var r = this;
            if ("function" != typeof t) return r;
            function n() {
              r.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
              for (
                var a = arguments.length, i = new Array(a), o = 0;
                o < a;
                o++
              )
                i[o] = arguments[o];
              t.apply(r, i);
            }
            return (n.__emitterProxy = t), r.on(e, n, a);
          },
          onAny: function (e, t) {
            var a = this;
            if ("function" != typeof e) return a;
            var r = t ? "unshift" : "push";
            return (
              a.eventsAnyListeners.indexOf(e) < 0 && a.eventsAnyListeners[r](e),
              a
            );
          },
          offAny: function (e) {
            var t = this;
            if (!t.eventsAnyListeners) return t;
            var a = t.eventsAnyListeners.indexOf(e);
            return a >= 0 && t.eventsAnyListeners.splice(a, 1), t;
          },
          off: function (e, t) {
            var a = this;
            return a.eventsListeners
              ? (e.split(" ").forEach(function (e) {
                  void 0 === t
                    ? (a.eventsListeners[e] = [])
                    : a.eventsListeners[e] &&
                      a.eventsListeners[e].forEach(function (r, n) {
                        (r === t ||
                          (r.__emitterProxy && r.__emitterProxy === t)) &&
                          a.eventsListeners[e].splice(n, 1);
                      });
                }),
                a)
              : a;
          },
          emit: function () {
            var e,
              t,
              a,
              r = this;
            if (!r.eventsListeners) return r;
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
              i[o] = arguments[o];
            return (
              "string" == typeof i[0] || Array.isArray(i[0])
                ? ((e = i[0]), (t = i.slice(1, i.length)), (a = r))
                : ((e = i[0].events), (t = i[0].data), (a = i[0].context || r)),
              t.unshift(a),
              (Array.isArray(e) ? e : e.split(" ")).forEach(function (e) {
                r.eventsAnyListeners &&
                  r.eventsAnyListeners.length &&
                  r.eventsAnyListeners.forEach(function (r) {
                    r.apply(a, [e].concat(t));
                  }),
                  r.eventsListeners &&
                    r.eventsListeners[e] &&
                    r.eventsListeners[e].forEach(function (e) {
                      e.apply(a, t);
                    });
              }),
              r
            );
          },
        },
        update: {
          updateSize: function () {
            var e,
              t,
              a = this,
              r = a.$el;
            (e =
              void 0 !== a.params.width && null !== a.params.width
                ? a.params.width
                : r[0].clientWidth),
              (t =
                void 0 !== a.params.height && null !== a.params.height
                  ? a.params.height
                  : r[0].clientHeight),
              (0 === e && a.isHorizontal()) ||
                (0 === t && a.isVertical()) ||
                ((e =
                  e -
                  parseInt(r.css("padding-left") || 0, 10) -
                  parseInt(r.css("padding-right") || 0, 10)),
                (t =
                  t -
                  parseInt(r.css("padding-top") || 0, 10) -
                  parseInt(r.css("padding-bottom") || 0, 10)),
                Number.isNaN(e) && (e = 0),
                Number.isNaN(t) && (t = 0),
                S(a, { width: e, height: t, size: a.isHorizontal() ? e : t }));
          },
          updateSlides: function () {
            var e = this,
              t = s(),
              a = e.params,
              r = e.$wrapperEl,
              n = e.size,
              i = e.rtlTranslate,
              o = e.wrongRTL,
              l = e.virtual && a.virtual.enabled,
              c = l ? e.virtual.slides.length : e.slides.length,
              d = r.children("." + e.params.slideClass),
              u = l ? e.virtual.slides.length : d.length,
              p = [],
              h = [],
              m = [];
            function f(e, t) {
              return !a.cssMode || t !== d.length - 1;
            }
            var v = a.slidesOffsetBefore;
            "function" == typeof v && (v = a.slidesOffsetBefore.call(e));
            var g = a.slidesOffsetAfter;
            "function" == typeof g && (g = a.slidesOffsetAfter.call(e));
            var y = e.snapGrid.length,
              b = e.snapGrid.length,
              w = a.spaceBetween,
              C = -v,
              T = 0,
              k = 0;
            if (void 0 !== n) {
              var x, _;
              "string" == typeof w &&
                w.indexOf("%") >= 0 &&
                (w = (parseFloat(w.replace("%", "")) / 100) * n),
                (e.virtualSize = -w),
                i
                  ? d.css({ marginLeft: "", marginTop: "" })
                  : d.css({ marginRight: "", marginBottom: "" }),
                a.slidesPerColumn > 1 &&
                  ((x =
                    Math.floor(u / a.slidesPerColumn) ===
                    u / e.params.slidesPerColumn
                      ? u
                      : Math.ceil(u / a.slidesPerColumn) * a.slidesPerColumn),
                  "auto" !== a.slidesPerView &&
                    "row" === a.slidesPerColumnFill &&
                    (x = Math.max(x, a.slidesPerView * a.slidesPerColumn)));
              for (
                var E,
                  M = a.slidesPerColumn,
                  P = x / M,
                  $ = Math.floor(u / a.slidesPerColumn),
                  L = 0;
                L < u;
                L += 1
              ) {
                _ = 0;
                var N = d.eq(L);
                if (a.slidesPerColumn > 1) {
                  var A = void 0,
                    I = void 0,
                    O = void 0;
                  if ("row" === a.slidesPerColumnFill && a.slidesPerGroup > 1) {
                    var B = Math.floor(
                        L / (a.slidesPerGroup * a.slidesPerColumn)
                      ),
                      R = L - a.slidesPerColumn * a.slidesPerGroup * B,
                      D =
                        0 === B
                          ? a.slidesPerGroup
                          : Math.min(
                              Math.ceil((u - B * M * a.slidesPerGroup) / M),
                              a.slidesPerGroup
                            );
                    (A =
                      (I =
                        R -
                        (O = Math.floor(R / D)) * D +
                        B * a.slidesPerGroup) +
                      (O * x) / M),
                      N.css({
                        "-webkit-box-ordinal-group": A,
                        "-moz-box-ordinal-group": A,
                        "-ms-flex-order": A,
                        "-webkit-order": A,
                        order: A,
                      });
                  } else
                    "column" === a.slidesPerColumnFill
                      ? ((O = L - (I = Math.floor(L / M)) * M),
                        (I > $ || (I === $ && O === M - 1)) &&
                          (O += 1) >= M &&
                          ((O = 0), (I += 1)))
                      : (I = L - (O = Math.floor(L / P)) * P);
                  N.css(
                    "margin-" + (e.isHorizontal() ? "top" : "left"),
                    0 !== O && a.spaceBetween && a.spaceBetween + "px"
                  );
                }
                if ("none" !== N.css("display")) {
                  if ("auto" === a.slidesPerView) {
                    var G = t.getComputedStyle(N[0], null),
                      j = N[0].style.transform,
                      H = N[0].style.webkitTransform;
                    if (
                      (j && (N[0].style.transform = "none"),
                      H && (N[0].style.webkitTransform = "none"),
                      a.roundLengths)
                    )
                      _ = e.isHorizontal()
                        ? N.outerWidth(!0)
                        : N.outerHeight(!0);
                    else if (e.isHorizontal()) {
                      var V = parseFloat(G.getPropertyValue("width") || 0),
                        F = parseFloat(G.getPropertyValue("padding-left") || 0),
                        q = parseFloat(
                          G.getPropertyValue("padding-right") || 0
                        ),
                        z = parseFloat(G.getPropertyValue("margin-left") || 0),
                        U = parseFloat(G.getPropertyValue("margin-right") || 0),
                        W = G.getPropertyValue("box-sizing");
                      if (W && "border-box" === W) _ = V + z + U;
                      else {
                        var Y = N[0],
                          X = Y.clientWidth;
                        _ = V + F + q + z + U + (Y.offsetWidth - X);
                      }
                    } else {
                      var J = parseFloat(G.getPropertyValue("height") || 0),
                        K = parseFloat(G.getPropertyValue("padding-top") || 0),
                        Q = parseFloat(
                          G.getPropertyValue("padding-bottom") || 0
                        ),
                        Z = parseFloat(G.getPropertyValue("margin-top") || 0),
                        ee = parseFloat(
                          G.getPropertyValue("margin-bottom") || 0
                        ),
                        te = G.getPropertyValue("box-sizing");
                      if (te && "border-box" === te) _ = J + Z + ee;
                      else {
                        var ae = N[0],
                          re = ae.clientHeight;
                        _ = J + K + Q + Z + ee + (ae.offsetHeight - re);
                      }
                    }
                    j && (N[0].style.transform = j),
                      H && (N[0].style.webkitTransform = H),
                      a.roundLengths && (_ = Math.floor(_));
                  } else
                    (_ = (n - (a.slidesPerView - 1) * w) / a.slidesPerView),
                      a.roundLengths && (_ = Math.floor(_)),
                      d[L] &&
                        (e.isHorizontal()
                          ? (d[L].style.width = _ + "px")
                          : (d[L].style.height = _ + "px"));
                  d[L] && (d[L].swiperSlideSize = _),
                    m.push(_),
                    a.centeredSlides
                      ? ((C = C + _ / 2 + T / 2 + w),
                        0 === T && 0 !== L && (C = C - n / 2 - w),
                        0 === L && (C = C - n / 2 - w),
                        Math.abs(C) < 0.001 && (C = 0),
                        a.roundLengths && (C = Math.floor(C)),
                        k % a.slidesPerGroup == 0 && p.push(C),
                        h.push(C))
                      : (a.roundLengths && (C = Math.floor(C)),
                        (k - Math.min(e.params.slidesPerGroupSkip, k)) %
                          e.params.slidesPerGroup ==
                          0 && p.push(C),
                        h.push(C),
                        (C = C + _ + w)),
                    (e.virtualSize += _ + w),
                    (T = _),
                    (k += 1);
                }
              }
              if (
                ((e.virtualSize = Math.max(e.virtualSize, n) + g),
                i &&
                  o &&
                  ("slide" === a.effect || "coverflow" === a.effect) &&
                  r.css({ width: e.virtualSize + a.spaceBetween + "px" }),
                a.setWrapperSize &&
                  (e.isHorizontal()
                    ? r.css({ width: e.virtualSize + a.spaceBetween + "px" })
                    : r.css({ height: e.virtualSize + a.spaceBetween + "px" })),
                a.slidesPerColumn > 1 &&
                  ((e.virtualSize = (_ + a.spaceBetween) * x),
                  (e.virtualSize =
                    Math.ceil(e.virtualSize / a.slidesPerColumn) -
                    a.spaceBetween),
                  e.isHorizontal()
                    ? r.css({ width: e.virtualSize + a.spaceBetween + "px" })
                    : r.css({ height: e.virtualSize + a.spaceBetween + "px" }),
                  a.centeredSlides))
              ) {
                E = [];
                for (var ne = 0; ne < p.length; ne += 1) {
                  var ie = p[ne];
                  a.roundLengths && (ie = Math.floor(ie)),
                    p[ne] < e.virtualSize + p[0] && E.push(ie);
                }
                p = E;
              }
              if (!a.centeredSlides) {
                E = [];
                for (var oe = 0; oe < p.length; oe += 1) {
                  var se = p[oe];
                  a.roundLengths && (se = Math.floor(se)),
                    p[oe] <= e.virtualSize - n && E.push(se);
                }
                (p = E),
                  Math.floor(e.virtualSize - n) - Math.floor(p[p.length - 1]) >
                    1 && p.push(e.virtualSize - n);
              }
              if (
                (0 === p.length && (p = [0]),
                0 !== a.spaceBetween &&
                  (e.isHorizontal()
                    ? i
                      ? d.filter(f).css({ marginLeft: w + "px" })
                      : d.filter(f).css({ marginRight: w + "px" })
                    : d.filter(f).css({ marginBottom: w + "px" })),
                a.centeredSlides && a.centeredSlidesBounds)
              ) {
                var le = 0;
                m.forEach(function (e) {
                  le += e + (a.spaceBetween ? a.spaceBetween : 0);
                });
                var ce = (le -= a.spaceBetween) - n;
                p = p.map(function (e) {
                  return e < 0 ? -v : e > ce ? ce + g : e;
                });
              }
              if (a.centerInsufficientSlides) {
                var de = 0;
                if (
                  (m.forEach(function (e) {
                    de += e + (a.spaceBetween ? a.spaceBetween : 0);
                  }),
                  (de -= a.spaceBetween) < n)
                ) {
                  var ue = (n - de) / 2;
                  p.forEach(function (e, t) {
                    p[t] = e - ue;
                  }),
                    h.forEach(function (e, t) {
                      h[t] = e + ue;
                    });
                }
              }
              S(e, {
                slides: d,
                snapGrid: p,
                slidesGrid: h,
                slidesSizesGrid: m,
              }),
                u !== c && e.emit("slidesLengthChange"),
                p.length !== y &&
                  (e.params.watchOverflow && e.checkOverflow(),
                  e.emit("snapGridLengthChange")),
                h.length !== b && e.emit("slidesGridLengthChange"),
                (a.watchSlidesProgress || a.watchSlidesVisibility) &&
                  e.updateSlidesOffset();
            }
          },
          updateAutoHeight: function (e) {
            var t,
              a = this,
              r = [],
              n = 0;
            if (
              ("number" == typeof e
                ? a.setTransition(e)
                : !0 === e && a.setTransition(a.params.speed),
              "auto" !== a.params.slidesPerView && a.params.slidesPerView > 1)
            )
              if (a.params.centeredSlides)
                a.visibleSlides.each(function (e) {
                  r.push(e);
                });
              else
                for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
                  var i = a.activeIndex + t;
                  if (i > a.slides.length) break;
                  r.push(a.slides.eq(i)[0]);
                }
            else r.push(a.slides.eq(a.activeIndex)[0]);
            for (t = 0; t < r.length; t += 1)
              if (void 0 !== r[t]) {
                var o = r[t].offsetHeight;
                n = o > n ? o : n;
              }
            n && a.$wrapperEl.css("height", n + "px");
          },
          updateSlidesOffset: function () {
            for (var e = this.slides, t = 0; t < e.length; t += 1)
              e[t].swiperSlideOffset = this.isHorizontal()
                ? e[t].offsetLeft
                : e[t].offsetTop;
          },
          updateSlidesProgress: function (e) {
            void 0 === e && (e = (this && this.translate) || 0);
            var t = this,
              a = t.params,
              r = t.slides,
              n = t.rtlTranslate;
            if (0 !== r.length) {
              void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
              var i = -e;
              n && (i = e),
                r.removeClass(a.slideVisibleClass),
                (t.visibleSlidesIndexes = []),
                (t.visibleSlides = []);
              for (var o = 0; o < r.length; o += 1) {
                var s = r[o],
                  l =
                    (i +
                      (a.centeredSlides ? t.minTranslate() : 0) -
                      s.swiperSlideOffset) /
                    (s.swiperSlideSize + a.spaceBetween);
                if (
                  a.watchSlidesVisibility ||
                  (a.centeredSlides && a.autoHeight)
                ) {
                  var c = -(i - s.swiperSlideOffset),
                    d = c + t.slidesSizesGrid[o];
                  ((c >= 0 && c < t.size - 1) ||
                    (d > 1 && d <= t.size) ||
                    (c <= 0 && d >= t.size)) &&
                    (t.visibleSlides.push(s),
                    t.visibleSlidesIndexes.push(o),
                    r.eq(o).addClass(a.slideVisibleClass));
                }
                s.progress = n ? -l : l;
              }
              t.visibleSlides = f(t.visibleSlides);
            }
          },
          updateProgress: function (e) {
            var t = this;
            if (void 0 === e) {
              var a = t.rtlTranslate ? -1 : 1;
              e = (t && t.translate && t.translate * a) || 0;
            }
            var r = t.params,
              n = t.maxTranslate() - t.minTranslate(),
              i = t.progress,
              o = t.isBeginning,
              s = t.isEnd,
              l = o,
              c = s;
            0 === n
              ? ((i = 0), (o = !0), (s = !0))
              : ((o = (i = (e - t.minTranslate()) / n) <= 0), (s = i >= 1)),
              S(t, { progress: i, isBeginning: o, isEnd: s }),
              (r.watchSlidesProgress ||
                r.watchSlidesVisibility ||
                (r.centeredSlides && r.autoHeight)) &&
                t.updateSlidesProgress(e),
              o && !l && t.emit("reachBeginning toEdge"),
              s && !c && t.emit("reachEnd toEdge"),
              ((l && !o) || (c && !s)) && t.emit("fromEdge"),
              t.emit("progress", i);
          },
          updateSlidesClasses: function () {
            var e,
              t = this,
              a = t.slides,
              r = t.params,
              n = t.$wrapperEl,
              i = t.activeIndex,
              o = t.realIndex,
              s = t.virtual && r.virtual.enabled;
            a.removeClass(
              r.slideActiveClass +
                " " +
                r.slideNextClass +
                " " +
                r.slidePrevClass +
                " " +
                r.slideDuplicateActiveClass +
                " " +
                r.slideDuplicateNextClass +
                " " +
                r.slideDuplicatePrevClass
            ),
              (e = s
                ? t.$wrapperEl.find(
                    "." + r.slideClass + '[data-swiper-slide-index="' + i + '"]'
                  )
                : a.eq(i)).addClass(r.slideActiveClass),
              r.loop &&
                (e.hasClass(r.slideDuplicateClass)
                  ? n
                      .children(
                        "." +
                          r.slideClass +
                          ":not(." +
                          r.slideDuplicateClass +
                          ')[data-swiper-slide-index="' +
                          o +
                          '"]'
                      )
                      .addClass(r.slideDuplicateActiveClass)
                  : n
                      .children(
                        "." +
                          r.slideClass +
                          "." +
                          r.slideDuplicateClass +
                          '[data-swiper-slide-index="' +
                          o +
                          '"]'
                      )
                      .addClass(r.slideDuplicateActiveClass));
            var l = e
              .nextAll("." + r.slideClass)
              .eq(0)
              .addClass(r.slideNextClass);
            r.loop &&
              0 === l.length &&
              (l = a.eq(0)).addClass(r.slideNextClass);
            var c = e
              .prevAll("." + r.slideClass)
              .eq(0)
              .addClass(r.slidePrevClass);
            r.loop &&
              0 === c.length &&
              (c = a.eq(-1)).addClass(r.slidePrevClass),
              r.loop &&
                (l.hasClass(r.slideDuplicateClass)
                  ? n
                      .children(
                        "." +
                          r.slideClass +
                          ":not(." +
                          r.slideDuplicateClass +
                          ')[data-swiper-slide-index="' +
                          l.attr("data-swiper-slide-index") +
                          '"]'
                      )
                      .addClass(r.slideDuplicateNextClass)
                  : n
                      .children(
                        "." +
                          r.slideClass +
                          "." +
                          r.slideDuplicateClass +
                          '[data-swiper-slide-index="' +
                          l.attr("data-swiper-slide-index") +
                          '"]'
                      )
                      .addClass(r.slideDuplicateNextClass),
                c.hasClass(r.slideDuplicateClass)
                  ? n
                      .children(
                        "." +
                          r.slideClass +
                          ":not(." +
                          r.slideDuplicateClass +
                          ')[data-swiper-slide-index="' +
                          c.attr("data-swiper-slide-index") +
                          '"]'
                      )
                      .addClass(r.slideDuplicatePrevClass)
                  : n
                      .children(
                        "." +
                          r.slideClass +
                          "." +
                          r.slideDuplicateClass +
                          '[data-swiper-slide-index="' +
                          c.attr("data-swiper-slide-index") +
                          '"]'
                      )
                      .addClass(r.slideDuplicatePrevClass)),
              t.emitSlidesClasses();
          },
          updateActiveIndex: function (e) {
            var t,
              a = this,
              r = a.rtlTranslate ? a.translate : -a.translate,
              n = a.slidesGrid,
              i = a.snapGrid,
              o = a.params,
              s = a.activeIndex,
              l = a.realIndex,
              c = a.snapIndex,
              d = e;
            if (void 0 === d) {
              for (var u = 0; u < n.length; u += 1)
                void 0 !== n[u + 1]
                  ? r >= n[u] && r < n[u + 1] - (n[u + 1] - n[u]) / 2
                    ? (d = u)
                    : r >= n[u] && r < n[u + 1] && (d = u + 1)
                  : r >= n[u] && (d = u);
              o.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
            }
            if (i.indexOf(r) >= 0) t = i.indexOf(r);
            else {
              var p = Math.min(o.slidesPerGroupSkip, d);
              t = p + Math.floor((d - p) / o.slidesPerGroup);
            }
            if ((t >= i.length && (t = i.length - 1), d !== s)) {
              var h = parseInt(
                a.slides.eq(d).attr("data-swiper-slide-index") || d,
                10
              );
              S(a, {
                snapIndex: t,
                realIndex: h,
                previousIndex: s,
                activeIndex: d,
              }),
                a.emit("activeIndexChange"),
                a.emit("snapIndexChange"),
                l !== h && a.emit("realIndexChange"),
                (a.initialized || a.params.runCallbacksOnInit) &&
                  a.emit("slideChange");
            } else t !== c && ((a.snapIndex = t), a.emit("snapIndexChange"));
          },
          updateClickedSlide: function (e) {
            var t = this,
              a = t.params,
              r = f(e.target).closest("." + a.slideClass)[0],
              n = !1;
            if (r)
              for (var i = 0; i < t.slides.length; i += 1)
                t.slides[i] === r && (n = !0);
            if (!r || !n)
              return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
            (t.clickedSlide = r),
              t.virtual && t.params.virtual.enabled
                ? (t.clickedIndex = parseInt(
                    f(r).attr("data-swiper-slide-index"),
                    10
                  ))
                : (t.clickedIndex = f(r).index()),
              a.slideToClickedSlide &&
                void 0 !== t.clickedIndex &&
                t.clickedIndex !== t.activeIndex &&
                t.slideToClickedSlide();
          },
        },
        translate: {
          getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this,
              a = t.params,
              r = t.rtlTranslate,
              n = t.translate,
              i = t.$wrapperEl;
            if (a.virtualTranslate) return r ? -n : n;
            if (a.cssMode) return n;
            var o = T(i[0], e);
            return r && (o = -o), o || 0;
          },
          setTranslate: function (e, t) {
            var a = this,
              r = a.rtlTranslate,
              n = a.params,
              i = a.$wrapperEl,
              o = a.wrapperEl,
              s = a.progress,
              l = 0,
              c = 0;
            a.isHorizontal() ? (l = r ? -e : e) : (c = e),
              n.roundLengths && ((l = Math.floor(l)), (c = Math.floor(c))),
              n.cssMode
                ? (o[a.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                    a.isHorizontal() ? -l : -c)
                : n.virtualTranslate ||
                  i.transform("translate3d(" + l + "px, " + c + "px, 0px)"),
              (a.previousTranslate = a.translate),
              (a.translate = a.isHorizontal() ? l : c);
            var d = a.maxTranslate() - a.minTranslate();
            (0 === d ? 0 : (e - a.minTranslate()) / d) !== s &&
              a.updateProgress(e),
              a.emit("setTranslate", a.translate, t);
          },
          minTranslate: function () {
            return -this.snapGrid[0];
          },
          maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          translateTo: function (e, t, a, r, n) {
            void 0 === e && (e = 0),
              void 0 === t && (t = this.params.speed),
              void 0 === a && (a = !0),
              void 0 === r && (r = !0);
            var i = this,
              o = i.params,
              s = i.wrapperEl;
            if (i.animating && o.preventInteractionOnTransition) return !1;
            var l,
              c = i.minTranslate(),
              d = i.maxTranslate();
            if (
              ((l = r && e > c ? c : r && e < d ? d : e),
              i.updateProgress(l),
              o.cssMode)
            ) {
              var u,
                p = i.isHorizontal();
              return (
                0 === t
                  ? (s[p ? "scrollLeft" : "scrollTop"] = -l)
                  : s.scrollTo
                  ? s.scrollTo(
                      (((u = {})[p ? "left" : "top"] = -l),
                      (u.behavior = "smooth"),
                      u)
                    )
                  : (s[p ? "scrollLeft" : "scrollTop"] = -l),
                !0
              );
            }
            return (
              0 === t
                ? (i.setTransition(0),
                  i.setTranslate(l),
                  a &&
                    (i.emit("beforeTransitionStart", t, n),
                    i.emit("transitionEnd")))
                : (i.setTransition(t),
                  i.setTranslate(l),
                  a &&
                    (i.emit("beforeTransitionStart", t, n),
                    i.emit("transitionStart")),
                  i.animating ||
                    ((i.animating = !0),
                    i.onTranslateToWrapperTransitionEnd ||
                      (i.onTranslateToWrapperTransitionEnd = function (e) {
                        i &&
                          !i.destroyed &&
                          e.target === this &&
                          (i.$wrapperEl[0].removeEventListener(
                            "transitionend",
                            i.onTranslateToWrapperTransitionEnd
                          ),
                          i.$wrapperEl[0].removeEventListener(
                            "webkitTransitionEnd",
                            i.onTranslateToWrapperTransitionEnd
                          ),
                          (i.onTranslateToWrapperTransitionEnd = null),
                          delete i.onTranslateToWrapperTransitionEnd,
                          a && i.emit("transitionEnd"));
                      }),
                    i.$wrapperEl[0].addEventListener(
                      "transitionend",
                      i.onTranslateToWrapperTransitionEnd
                    ),
                    i.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      i.onTranslateToWrapperTransitionEnd
                    ))),
              !0
            );
          },
        },
        transition: {
          setTransition: function (e, t) {
            var a = this;
            a.params.cssMode || a.$wrapperEl.transition(e),
              a.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            var a = this,
              r = a.activeIndex,
              n = a.params,
              i = a.previousIndex;
            if (!n.cssMode) {
              n.autoHeight && a.updateAutoHeight();
              var o = t;
              if (
                (o || (o = r > i ? "next" : r < i ? "prev" : "reset"),
                a.emit("transitionStart"),
                e && r !== i)
              ) {
                if ("reset" === o)
                  return void a.emit("slideResetTransitionStart");
                a.emit("slideChangeTransitionStart"),
                  "next" === o
                    ? a.emit("slideNextTransitionStart")
                    : a.emit("slidePrevTransitionStart");
              }
            }
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            var a = this,
              r = a.activeIndex,
              n = a.previousIndex,
              i = a.params;
            if (((a.animating = !1), !i.cssMode)) {
              a.setTransition(0);
              var o = t;
              if (
                (o || (o = r > n ? "next" : r < n ? "prev" : "reset"),
                a.emit("transitionEnd"),
                e && r !== n)
              ) {
                if ("reset" === o)
                  return void a.emit("slideResetTransitionEnd");
                a.emit("slideChangeTransitionEnd"),
                  "next" === o
                    ? a.emit("slideNextTransitionEnd")
                    : a.emit("slidePrevTransitionEnd");
              }
            }
          },
        },
        slide: {
          slideTo: function (e, t, a, r) {
            if (
              (void 0 === e && (e = 0),
              void 0 === t && (t = this.params.speed),
              void 0 === a && (a = !0),
              "number" != typeof e && "string" != typeof e)
            )
              throw new Error(
                "The 'index' argument cannot have type other than 'number' or 'string'. [" +
                  _typeof(e) +
                  "] given."
              );
            if ("string" == typeof e) {
              var n = parseInt(e, 10);
              if (!isFinite(n))
                throw new Error(
                  "The passed-in 'index' (string) couldn't be converted to 'number'. [" +
                    e +
                    "] given."
                );
              e = n;
            }
            var i = this,
              o = e;
            o < 0 && (o = 0);
            var s = i.params,
              l = i.snapGrid,
              c = i.slidesGrid,
              d = i.previousIndex,
              u = i.activeIndex,
              p = i.rtlTranslate,
              h = i.wrapperEl;
            if (i.animating && s.preventInteractionOnTransition) return !1;
            var m = Math.min(i.params.slidesPerGroupSkip, o),
              f = m + Math.floor((o - m) / i.params.slidesPerGroup);
            f >= l.length && (f = l.length - 1),
              (u || s.initialSlide || 0) === (d || 0) &&
                a &&
                i.emit("beforeSlideChangeStart");
            var v,
              g = -l[f];
            if ((i.updateProgress(g), s.normalizeSlideIndex))
              for (var y = 0; y < c.length; y += 1)
                -Math.floor(100 * g) >= Math.floor(100 * c[y]) && (o = y);
            if (i.initialized && o !== u) {
              if (!i.allowSlideNext && g < i.translate && g < i.minTranslate())
                return !1;
              if (
                !i.allowSlidePrev &&
                g > i.translate &&
                g > i.maxTranslate() &&
                (u || 0) !== o
              )
                return !1;
            }
            if (
              ((v = o > u ? "next" : o < u ? "prev" : "reset"),
              (p && -g === i.translate) || (!p && g === i.translate))
            )
              return (
                i.updateActiveIndex(o),
                s.autoHeight && i.updateAutoHeight(),
                i.updateSlidesClasses(),
                "slide" !== s.effect && i.setTranslate(g),
                "reset" !== v &&
                  (i.transitionStart(a, v), i.transitionEnd(a, v)),
                !1
              );
            if (s.cssMode) {
              var b,
                w = i.isHorizontal(),
                C = -g;
              return (
                p && (C = h.scrollWidth - h.offsetWidth - C),
                0 === t
                  ? (h[w ? "scrollLeft" : "scrollTop"] = C)
                  : h.scrollTo
                  ? h.scrollTo(
                      (((b = {})[w ? "left" : "top"] = C),
                      (b.behavior = "smooth"),
                      b)
                    )
                  : (h[w ? "scrollLeft" : "scrollTop"] = C),
                !0
              );
            }
            return (
              0 === t
                ? (i.setTransition(0),
                  i.setTranslate(g),
                  i.updateActiveIndex(o),
                  i.updateSlidesClasses(),
                  i.emit("beforeTransitionStart", t, r),
                  i.transitionStart(a, v),
                  i.transitionEnd(a, v))
                : (i.setTransition(t),
                  i.setTranslate(g),
                  i.updateActiveIndex(o),
                  i.updateSlidesClasses(),
                  i.emit("beforeTransitionStart", t, r),
                  i.transitionStart(a, v),
                  i.animating ||
                    ((i.animating = !0),
                    i.onSlideToWrapperTransitionEnd ||
                      (i.onSlideToWrapperTransitionEnd = function (e) {
                        i &&
                          !i.destroyed &&
                          e.target === this &&
                          (i.$wrapperEl[0].removeEventListener(
                            "transitionend",
                            i.onSlideToWrapperTransitionEnd
                          ),
                          i.$wrapperEl[0].removeEventListener(
                            "webkitTransitionEnd",
                            i.onSlideToWrapperTransitionEnd
                          ),
                          (i.onSlideToWrapperTransitionEnd = null),
                          delete i.onSlideToWrapperTransitionEnd,
                          i.transitionEnd(a, v));
                      }),
                    i.$wrapperEl[0].addEventListener(
                      "transitionend",
                      i.onSlideToWrapperTransitionEnd
                    ),
                    i.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      i.onSlideToWrapperTransitionEnd
                    ))),
              !0
            );
          },
          slideToLoop: function (e, t, a, r) {
            void 0 === e && (e = 0),
              void 0 === t && (t = this.params.speed),
              void 0 === a && (a = !0);
            var n = this,
              i = e;
            return (
              n.params.loop && (i += n.loopedSlides), n.slideTo(i, t, a, r)
            );
          },
          slideNext: function (e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var r = this,
              n = r.params,
              i = r.animating,
              o = r.activeIndex < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup;
            if (n.loop) {
              if (i && n.loopPreventsSlide) return !1;
              r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
            }
            return r.slideTo(r.activeIndex + o, e, t, a);
          },
          slidePrev: function (e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var r = this,
              n = r.params,
              i = r.animating,
              o = r.snapGrid,
              s = r.slidesGrid,
              l = r.rtlTranslate;
            if (n.loop) {
              if (i && n.loopPreventsSlide) return !1;
              r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
            }
            function c(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            var d,
              u = c(l ? r.translate : -r.translate),
              p = o.map(function (e) {
                return c(e);
              }),
              h = (o[p.indexOf(u)], o[p.indexOf(u) - 1]);
            return (
              void 0 === h &&
                n.cssMode &&
                o.forEach(function (e) {
                  !h && u >= e && (h = e);
                }),
              void 0 !== h && (d = s.indexOf(h)) < 0 && (d = r.activeIndex - 1),
              r.slideTo(d, e, t, a)
            );
          },
          slideReset: function (e, t, a) {
            return (
              void 0 === e && (e = this.params.speed),
              void 0 === t && (t = !0),
              this.slideTo(this.activeIndex, e, t, a)
            );
          },
          slideToClosest: function (e, t, a, r) {
            void 0 === e && (e = this.params.speed),
              void 0 === t && (t = !0),
              void 0 === r && (r = 0.5);
            var n = this,
              i = n.activeIndex,
              o = Math.min(n.params.slidesPerGroupSkip, i),
              s = o + Math.floor((i - o) / n.params.slidesPerGroup),
              l = n.rtlTranslate ? n.translate : -n.translate;
            if (l >= n.snapGrid[s]) {
              var c = n.snapGrid[s];
              l - c > (n.snapGrid[s + 1] - c) * r &&
                (i += n.params.slidesPerGroup);
            } else {
              var d = n.snapGrid[s - 1];
              l - d <= (n.snapGrid[s] - d) * r &&
                (i -= n.params.slidesPerGroup);
            }
            return (
              (i = Math.max(i, 0)),
              (i = Math.min(i, n.slidesGrid.length - 1)),
              n.slideTo(i, e, t, a)
            );
          },
          slideToClickedSlide: function () {
            var e,
              t = this,
              a = t.params,
              r = t.$wrapperEl,
              n =
                "auto" === a.slidesPerView
                  ? t.slidesPerViewDynamic()
                  : a.slidesPerView,
              i = t.clickedIndex;
            if (a.loop) {
              if (t.animating) return;
              (e = parseInt(
                f(t.clickedSlide).attr("data-swiper-slide-index"),
                10
              )),
                a.centeredSlides
                  ? i < t.loopedSlides - n / 2 ||
                    i > t.slides.length - t.loopedSlides + n / 2
                    ? (t.loopFix(),
                      (i = r
                        .children(
                          "." +
                            a.slideClass +
                            '[data-swiper-slide-index="' +
                            e +
                            '"]:not(.' +
                            a.slideDuplicateClass +
                            ")"
                        )
                        .eq(0)
                        .index()),
                      w(function () {
                        t.slideTo(i);
                      }))
                    : t.slideTo(i)
                  : i > t.slides.length - n
                  ? (t.loopFix(),
                    (i = r
                      .children(
                        "." +
                          a.slideClass +
                          '[data-swiper-slide-index="' +
                          e +
                          '"]:not(.' +
                          a.slideDuplicateClass +
                          ")"
                      )
                      .eq(0)
                      .index()),
                    w(function () {
                      t.slideTo(i);
                    }))
                  : t.slideTo(i);
            } else t.slideTo(i);
          },
        },
        loop: {
          loopCreate: function () {
            var e = this,
              t = i(),
              a = e.params,
              r = e.$wrapperEl;
            r.children(
              "." + a.slideClass + "." + a.slideDuplicateClass
            ).remove();
            var n = r.children("." + a.slideClass);
            if (a.loopFillGroupWithBlank) {
              var o = a.slidesPerGroup - (n.length % a.slidesPerGroup);
              if (o !== a.slidesPerGroup) {
                for (var s = 0; s < o; s += 1) {
                  var l = f(t.createElement("div")).addClass(
                    a.slideClass + " " + a.slideBlankClass
                  );
                  r.append(l);
                }
                n = r.children("." + a.slideClass);
              }
            }
            "auto" !== a.slidesPerView ||
              a.loopedSlides ||
              (a.loopedSlides = n.length),
              (e.loopedSlides = Math.ceil(
                parseFloat(a.loopedSlides || a.slidesPerView, 10)
              )),
              (e.loopedSlides += a.loopAdditionalSlides),
              e.loopedSlides > n.length && (e.loopedSlides = n.length);
            var c = [],
              d = [];
            n.each(function (t, a) {
              var r = f(t);
              a < e.loopedSlides && d.push(t),
                a < n.length && a >= n.length - e.loopedSlides && c.push(t),
                r.attr("data-swiper-slide-index", a);
            });
            for (var u = 0; u < d.length; u += 1)
              r.append(f(d[u].cloneNode(!0)).addClass(a.slideDuplicateClass));
            for (var p = c.length - 1; p >= 0; p -= 1)
              r.prepend(f(c[p].cloneNode(!0)).addClass(a.slideDuplicateClass));
          },
          loopFix: function () {
            var e = this;
            e.emit("beforeLoopFix");
            var t,
              a = e.activeIndex,
              r = e.slides,
              n = e.loopedSlides,
              i = e.allowSlidePrev,
              o = e.allowSlideNext,
              s = e.snapGrid,
              l = e.rtlTranslate;
            (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
            var c = -s[a] - e.getTranslate();
            a < n
              ? ((t = r.length - 3 * n + a),
                (t += n),
                e.slideTo(t, 0, !1, !0) &&
                  0 !== c &&
                  e.setTranslate((l ? -e.translate : e.translate) - c))
              : a >= r.length - n &&
                ((t = -r.length + a + n),
                (t += n),
                e.slideTo(t, 0, !1, !0) &&
                  0 !== c &&
                  e.setTranslate((l ? -e.translate : e.translate) - c)),
              (e.allowSlidePrev = i),
              (e.allowSlideNext = o),
              e.emit("loopFix");
          },
          loopDestroy: function () {
            var e = this,
              t = e.$wrapperEl,
              a = e.params,
              r = e.slides;
            t
              .children(
                "." +
                  a.slideClass +
                  "." +
                  a.slideDuplicateClass +
                  ",." +
                  a.slideClass +
                  "." +
                  a.slideBlankClass
              )
              .remove(),
              r.removeAttr("data-swiper-slide-index");
          },
        },
        grabCursor: {
          setGrabCursor: function (e) {
            var t = this;
            if (
              !(
                t.support.touch ||
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
            ) {
              var a = t.el;
              (a.style.cursor = "move"),
                (a.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
                (a.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
                (a.style.cursor = e ? "grabbing" : "grab");
            }
          },
          unsetGrabCursor: function () {
            var e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e.el.style.cursor = "");
          },
        },
        manipulation: {
          appendSlide: function (e) {
            var t = this,
              a = t.$wrapperEl,
              r = t.params;
            if (
              (r.loop && t.loopDestroy(),
              "object" == _typeof(e) && "length" in e)
            )
              for (var n = 0; n < e.length; n += 1) e[n] && a.append(e[n]);
            else a.append(e);
            r.loop && t.loopCreate(),
              (r.observer && t.support.observer) || t.update();
          },
          prependSlide: function (e) {
            var t = this,
              a = t.params,
              r = t.$wrapperEl,
              n = t.activeIndex;
            a.loop && t.loopDestroy();
            var i = n + 1;
            if ("object" == _typeof(e) && "length" in e) {
              for (var o = 0; o < e.length; o += 1) e[o] && r.prepend(e[o]);
              i = n + e.length;
            } else r.prepend(e);
            a.loop && t.loopCreate(),
              (a.observer && t.support.observer) || t.update(),
              t.slideTo(i, 0, !1);
          },
          addSlide: function (e, t) {
            var a = this,
              r = a.$wrapperEl,
              n = a.params,
              i = a.activeIndex;
            n.loop &&
              ((i -= a.loopedSlides),
              a.loopDestroy(),
              (a.slides = r.children("." + n.slideClass)));
            var o = a.slides.length;
            if (e <= 0) a.prependSlide(t);
            else if (e >= o) a.appendSlide(t);
            else {
              for (
                var s = i > e ? i + 1 : i, l = [], c = o - 1;
                c >= e;
                c -= 1
              ) {
                var d = a.slides.eq(c);
                d.remove(), l.unshift(d);
              }
              if ("object" == _typeof(t) && "length" in t) {
                for (var u = 0; u < t.length; u += 1) t[u] && r.append(t[u]);
                s = i > e ? i + t.length : i;
              } else r.append(t);
              for (var p = 0; p < l.length; p += 1) r.append(l[p]);
              n.loop && a.loopCreate(),
                (n.observer && a.support.observer) || a.update(),
                n.loop
                  ? a.slideTo(s + a.loopedSlides, 0, !1)
                  : a.slideTo(s, 0, !1);
            }
          },
          removeSlide: function (e) {
            var t = this,
              a = t.params,
              r = t.$wrapperEl,
              n = t.activeIndex;
            a.loop &&
              ((n -= t.loopedSlides),
              t.loopDestroy(),
              (t.slides = r.children("." + a.slideClass)));
            var i,
              o = n;
            if ("object" == _typeof(e) && "length" in e) {
              for (var s = 0; s < e.length; s += 1)
                (i = e[s]),
                  t.slides[i] && t.slides.eq(i).remove(),
                  i < o && (o -= 1);
              o = Math.max(o, 0);
            } else
              (i = e),
                t.slides[i] && t.slides.eq(i).remove(),
                i < o && (o -= 1),
                (o = Math.max(o, 0));
            a.loop && t.loopCreate(),
              (a.observer && t.support.observer) || t.update(),
              a.loop
                ? t.slideTo(o + t.loopedSlides, 0, !1)
                : t.slideTo(o, 0, !1);
          },
          removeAllSlides: function () {
            for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
            this.removeSlide(e);
          },
        },
        events: {
          attachEvents: function () {
            var e = this,
              t = i(),
              a = e.params,
              r = e.touchEvents,
              n = e.el,
              o = e.wrapperEl,
              s = e.device,
              l = e.support;
            (e.onTouchStart = N.bind(e)),
              (e.onTouchMove = function (e) {
                var t = i(),
                  a = this,
                  r = a.touchEventsData,
                  n = a.params,
                  o = a.touches,
                  s = a.rtlTranslate,
                  l = e;
                if ((l.originalEvent && (l = l.originalEvent), r.isTouched)) {
                  if (!r.isTouchEvent || "touchmove" === l.type) {
                    var c =
                        "touchmove" === l.type &&
                        l.targetTouches &&
                        (l.targetTouches[0] || l.changedTouches[0]),
                      d = "touchmove" === l.type ? c.pageX : l.pageX,
                      u = "touchmove" === l.type ? c.pageY : l.pageY;
                    if (l.preventedByNestedSwiper)
                      return (o.startX = d), void (o.startY = u);
                    if (!a.allowTouchMove)
                      return (
                        (a.allowClick = !1),
                        void (
                          r.isTouched &&
                          (S(o, {
                            startX: d,
                            startY: u,
                            currentX: d,
                            currentY: u,
                          }),
                          (r.touchStartTime = C()))
                        )
                      );
                    if (r.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
                      if (a.isVertical()) {
                        if (
                          (u < o.startY && a.translate <= a.maxTranslate()) ||
                          (u > o.startY && a.translate >= a.minTranslate())
                        )
                          return (r.isTouched = !1), void (r.isMoved = !1);
                      } else if (
                        (d < o.startX && a.translate <= a.maxTranslate()) ||
                        (d > o.startX && a.translate >= a.minTranslate())
                      )
                        return;
                    if (
                      r.isTouchEvent &&
                      t.activeElement &&
                      l.target === t.activeElement &&
                      f(l.target).is(r.formElements)
                    )
                      return (r.isMoved = !0), void (a.allowClick = !1);
                    if (
                      (r.allowTouchCallbacks && a.emit("touchMove", l),
                      !(l.targetTouches && l.targetTouches.length > 1))
                    ) {
                      (o.currentX = d), (o.currentY = u);
                      var p,
                        h = o.currentX - o.startX,
                        m = o.currentY - o.startY;
                      if (
                        !(
                          a.params.threshold &&
                          Math.sqrt(Math.pow(h, 2) + Math.pow(m, 2)) <
                            a.params.threshold
                        )
                      )
                        if (
                          (void 0 === r.isScrolling &&
                            ((a.isHorizontal() && o.currentY === o.startY) ||
                            (a.isVertical() && o.currentX === o.startX)
                              ? (r.isScrolling = !1)
                              : h * h + m * m >= 25 &&
                                ((p =
                                  (180 * Math.atan2(Math.abs(m), Math.abs(h))) /
                                  Math.PI),
                                (r.isScrolling = a.isHorizontal()
                                  ? p > n.touchAngle
                                  : 90 - p > n.touchAngle))),
                          r.isScrolling && a.emit("touchMoveOpposite", l),
                          void 0 === r.startMoving &&
                            ((o.currentX === o.startX &&
                              o.currentY === o.startY) ||
                              (r.startMoving = !0)),
                          r.isScrolling)
                        )
                          r.isTouched = !1;
                        else if (r.startMoving) {
                          (a.allowClick = !1),
                            !n.cssMode && l.cancelable && l.preventDefault(),
                            n.touchMoveStopPropagation &&
                              !n.nested &&
                              l.stopPropagation(),
                            r.isMoved ||
                              (n.loop && a.loopFix(),
                              (r.startTranslate = a.getTranslate()),
                              a.setTransition(0),
                              a.animating &&
                                a.$wrapperEl.trigger(
                                  "webkitTransitionEnd transitionend"
                                ),
                              (r.allowMomentumBounce = !1),
                              !n.grabCursor ||
                                (!0 !== a.allowSlideNext &&
                                  !0 !== a.allowSlidePrev) ||
                                a.setGrabCursor(!0),
                              a.emit("sliderFirstMove", l)),
                            a.emit("sliderMove", l),
                            (r.isMoved = !0);
                          var v = a.isHorizontal() ? h : m;
                          (o.diff = v),
                            (v *= n.touchRatio),
                            s && (v = -v),
                            (a.swipeDirection = v > 0 ? "prev" : "next"),
                            (r.currentTranslate = v + r.startTranslate);
                          var g = !0,
                            y = n.resistanceRatio;
                          if (
                            (n.touchReleaseOnEdges && (y = 0),
                            v > 0 && r.currentTranslate > a.minTranslate()
                              ? ((g = !1),
                                n.resistance &&
                                  (r.currentTranslate =
                                    a.minTranslate() -
                                    1 +
                                    Math.pow(
                                      -a.minTranslate() + r.startTranslate + v,
                                      y
                                    )))
                              : v < 0 &&
                                r.currentTranslate < a.maxTranslate() &&
                                ((g = !1),
                                n.resistance &&
                                  (r.currentTranslate =
                                    a.maxTranslate() +
                                    1 -
                                    Math.pow(
                                      a.maxTranslate() - r.startTranslate - v,
                                      y
                                    ))),
                            g && (l.preventedByNestedSwiper = !0),
                            !a.allowSlideNext &&
                              "next" === a.swipeDirection &&
                              r.currentTranslate < r.startTranslate &&
                              (r.currentTranslate = r.startTranslate),
                            !a.allowSlidePrev &&
                              "prev" === a.swipeDirection &&
                              r.currentTranslate > r.startTranslate &&
                              (r.currentTranslate = r.startTranslate),
                            n.threshold > 0)
                          ) {
                            if (
                              !(
                                Math.abs(v) > n.threshold ||
                                r.allowThresholdMove
                              )
                            )
                              return void (r.currentTranslate =
                                r.startTranslate);
                            if (!r.allowThresholdMove)
                              return (
                                (r.allowThresholdMove = !0),
                                (o.startX = o.currentX),
                                (o.startY = o.currentY),
                                (r.currentTranslate = r.startTranslate),
                                void (o.diff = a.isHorizontal()
                                  ? o.currentX - o.startX
                                  : o.currentY - o.startY)
                              );
                          }
                          n.followFinger &&
                            !n.cssMode &&
                            ((n.freeMode ||
                              n.watchSlidesProgress ||
                              n.watchSlidesVisibility) &&
                              (a.updateActiveIndex(), a.updateSlidesClasses()),
                            n.freeMode &&
                              (0 === r.velocities.length &&
                                r.velocities.push({
                                  position:
                                    o[a.isHorizontal() ? "startX" : "startY"],
                                  time: r.touchStartTime,
                                }),
                              r.velocities.push({
                                position:
                                  o[a.isHorizontal() ? "currentX" : "currentY"],
                                time: C(),
                              })),
                            a.updateProgress(r.currentTranslate),
                            a.setTranslate(r.currentTranslate));
                        }
                    }
                  }
                } else
                  r.startMoving &&
                    r.isScrolling &&
                    a.emit("touchMoveOpposite", l);
              }.bind(e)),
              (e.onTouchEnd = function (e) {
                var t = this,
                  a = t.touchEventsData,
                  r = t.params,
                  n = t.touches,
                  i = t.rtlTranslate,
                  o = t.$wrapperEl,
                  s = t.slidesGrid,
                  l = t.snapGrid,
                  c = e;
                if (
                  (c.originalEvent && (c = c.originalEvent),
                  a.allowTouchCallbacks && t.emit("touchEnd", c),
                  (a.allowTouchCallbacks = !1),
                  !a.isTouched)
                )
                  return (
                    a.isMoved && r.grabCursor && t.setGrabCursor(!1),
                    (a.isMoved = !1),
                    void (a.startMoving = !1)
                  );
                r.grabCursor &&
                  a.isMoved &&
                  a.isTouched &&
                  (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
                  t.setGrabCursor(!1);
                var d,
                  u = C(),
                  p = u - a.touchStartTime;
                if (
                  (t.allowClick &&
                    (t.updateClickedSlide(c),
                    t.emit("tap click", c),
                    p < 300 &&
                      u - a.lastClickTime < 300 &&
                      t.emit("doubleTap doubleClick", c)),
                  (a.lastClickTime = C()),
                  w(function () {
                    t.destroyed || (t.allowClick = !0);
                  }),
                  !a.isTouched ||
                    !a.isMoved ||
                    !t.swipeDirection ||
                    0 === n.diff ||
                    a.currentTranslate === a.startTranslate)
                )
                  return (
                    (a.isTouched = !1),
                    (a.isMoved = !1),
                    void (a.startMoving = !1)
                  );
                if (
                  ((a.isTouched = !1),
                  (a.isMoved = !1),
                  (a.startMoving = !1),
                  (d = r.followFinger
                    ? i
                      ? t.translate
                      : -t.translate
                    : -a.currentTranslate),
                  !r.cssMode)
                )
                  if (r.freeMode) {
                    if (d < -t.minTranslate())
                      return void t.slideTo(t.activeIndex);
                    if (d > -t.maxTranslate())
                      return void (t.slides.length < l.length
                        ? t.slideTo(l.length - 1)
                        : t.slideTo(t.slides.length - 1));
                    if (r.freeModeMomentum) {
                      if (a.velocities.length > 1) {
                        var h = a.velocities.pop(),
                          m = a.velocities.pop(),
                          f = h.position - m.position,
                          v = h.time - m.time;
                        (t.velocity = f / v),
                          (t.velocity /= 2),
                          Math.abs(t.velocity) < r.freeModeMinimumVelocity &&
                            (t.velocity = 0),
                          (v > 150 || C() - h.time > 300) && (t.velocity = 0);
                      } else t.velocity = 0;
                      (t.velocity *= r.freeModeMomentumVelocityRatio),
                        (a.velocities.length = 0);
                      var g = 1e3 * r.freeModeMomentumRatio,
                        y = t.velocity * g,
                        b = t.translate + y;
                      i && (b = -b);
                      var T,
                        k,
                        S = !1,
                        x =
                          20 *
                          Math.abs(t.velocity) *
                          r.freeModeMomentumBounceRatio;
                      if (b < t.maxTranslate())
                        r.freeModeMomentumBounce
                          ? (b + t.maxTranslate() < -x &&
                              (b = t.maxTranslate() - x),
                            (T = t.maxTranslate()),
                            (S = !0),
                            (a.allowMomentumBounce = !0))
                          : (b = t.maxTranslate()),
                          r.loop && r.centeredSlides && (k = !0);
                      else if (b > t.minTranslate())
                        r.freeModeMomentumBounce
                          ? (b - t.minTranslate() > x &&
                              (b = t.minTranslate() + x),
                            (T = t.minTranslate()),
                            (S = !0),
                            (a.allowMomentumBounce = !0))
                          : (b = t.minTranslate()),
                          r.loop && r.centeredSlides && (k = !0);
                      else if (r.freeModeSticky) {
                        for (var _, E = 0; E < l.length; E += 1)
                          if (l[E] > -b) {
                            _ = E;
                            break;
                          }
                        b = -(b =
                          Math.abs(l[_] - b) < Math.abs(l[_ - 1] - b) ||
                          "next" === t.swipeDirection
                            ? l[_]
                            : l[_ - 1]);
                      }
                      if (
                        (k &&
                          t.once("transitionEnd", function () {
                            t.loopFix();
                          }),
                        0 !== t.velocity)
                      ) {
                        if (
                          ((g = i
                            ? Math.abs((-b - t.translate) / t.velocity)
                            : Math.abs((b - t.translate) / t.velocity)),
                          r.freeModeSticky)
                        ) {
                          var M = Math.abs((i ? -b : b) - t.translate),
                            P = t.slidesSizesGrid[t.activeIndex];
                          g =
                            M < P
                              ? r.speed
                              : M < 2 * P
                              ? 1.5 * r.speed
                              : 2.5 * r.speed;
                        }
                      } else if (r.freeModeSticky)
                        return void t.slideToClosest();
                      r.freeModeMomentumBounce && S
                        ? (t.updateProgress(T),
                          t.setTransition(g),
                          t.setTranslate(b),
                          t.transitionStart(!0, t.swipeDirection),
                          (t.animating = !0),
                          o.transitionEnd(function () {
                            t &&
                              !t.destroyed &&
                              a.allowMomentumBounce &&
                              (t.emit("momentumBounce"),
                              t.setTransition(r.speed),
                              setTimeout(function () {
                                t.setTranslate(T),
                                  o.transitionEnd(function () {
                                    t && !t.destroyed && t.transitionEnd();
                                  });
                              }, 0));
                          }))
                        : t.velocity
                        ? (t.updateProgress(b),
                          t.setTransition(g),
                          t.setTranslate(b),
                          t.transitionStart(!0, t.swipeDirection),
                          t.animating ||
                            ((t.animating = !0),
                            o.transitionEnd(function () {
                              t && !t.destroyed && t.transitionEnd();
                            })))
                        : t.updateProgress(b),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses();
                    } else if (r.freeModeSticky) return void t.slideToClosest();
                    (!r.freeModeMomentum || p >= r.longSwipesMs) &&
                      (t.updateProgress(),
                      t.updateActiveIndex(),
                      t.updateSlidesClasses());
                  } else {
                    for (
                      var $ = 0, L = t.slidesSizesGrid[0], N = 0;
                      N < s.length;
                      N += N < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
                    ) {
                      var A =
                        N < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                      void 0 !== s[N + A]
                        ? d >= s[N] &&
                          d < s[N + A] &&
                          (($ = N), (L = s[N + A] - s[N]))
                        : d >= s[N] &&
                          (($ = N), (L = s[s.length - 1] - s[s.length - 2]));
                    }
                    var I = (d - s[$]) / L,
                      O = $ < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                    if (p > r.longSwipesMs) {
                      if (!r.longSwipes) return void t.slideTo(t.activeIndex);
                      "next" === t.swipeDirection &&
                        (I >= r.longSwipesRatio
                          ? t.slideTo($ + O)
                          : t.slideTo($)),
                        "prev" === t.swipeDirection &&
                          (I > 1 - r.longSwipesRatio
                            ? t.slideTo($ + O)
                            : t.slideTo($));
                    } else {
                      if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
                      !t.navigation ||
                      (c.target !== t.navigation.nextEl &&
                        c.target !== t.navigation.prevEl)
                        ? ("next" === t.swipeDirection && t.slideTo($ + O),
                          "prev" === t.swipeDirection && t.slideTo($))
                        : c.target === t.navigation.nextEl
                        ? t.slideTo($ + O)
                        : t.slideTo($);
                    }
                  }
              }.bind(e)),
              a.cssMode &&
                (e.onScroll = function () {
                  var e = this,
                    t = e.wrapperEl,
                    a = e.rtlTranslate;
                  (e.previousTranslate = e.translate),
                    e.isHorizontal()
                      ? (e.translate = a
                          ? t.scrollWidth - t.offsetWidth - t.scrollLeft
                          : -t.scrollLeft)
                      : (e.translate = -t.scrollTop),
                    -0 === e.translate && (e.translate = 0),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses();
                  var r = e.maxTranslate() - e.minTranslate();
                  (0 === r ? 0 : (e.translate - e.minTranslate()) / r) !==
                    e.progress &&
                    e.updateProgress(a ? -e.translate : e.translate),
                    e.emit("setTranslate", e.translate, !1);
                }.bind(e)),
              (e.onClick = function (e) {
                var t = this;
                t.allowClick ||
                  (t.params.preventClicks && e.preventDefault(),
                  t.params.preventClicksPropagation &&
                    t.animating &&
                    (e.stopPropagation(), e.stopImmediatePropagation()));
              }.bind(e));
            var c = !!a.nested;
            if (!l.touch && l.pointerEvents)
              n.addEventListener(r.start, e.onTouchStart, !1),
                t.addEventListener(r.move, e.onTouchMove, c),
                t.addEventListener(r.end, e.onTouchEnd, !1);
            else {
              if (l.touch) {
                var d = !(
                  "touchstart" !== r.start ||
                  !l.passiveListener ||
                  !a.passiveListeners
                ) && { passive: !0, capture: !1 };
                n.addEventListener(r.start, e.onTouchStart, d),
                  n.addEventListener(
                    r.move,
                    e.onTouchMove,
                    l.passiveListener ? { passive: !1, capture: c } : c
                  ),
                  n.addEventListener(r.end, e.onTouchEnd, d),
                  r.cancel && n.addEventListener(r.cancel, e.onTouchEnd, d),
                  I || (t.addEventListener("touchstart", O), (I = !0));
              }
              ((a.simulateTouch && !s.ios && !s.android) ||
                (a.simulateTouch && !l.touch && s.ios)) &&
                (n.addEventListener("mousedown", e.onTouchStart, !1),
                t.addEventListener("mousemove", e.onTouchMove, c),
                t.addEventListener("mouseup", e.onTouchEnd, !1));
            }
            (a.preventClicks || a.preventClicksPropagation) &&
              n.addEventListener("click", e.onClick, !0),
              a.cssMode && o.addEventListener("scroll", e.onScroll),
              a.updateOnWindowResize
                ? e.on(
                    s.ios || s.android
                      ? "resize orientationchange observerUpdate"
                      : "resize observerUpdate",
                    A,
                    !0
                  )
                : e.on("observerUpdate", A, !0);
          },
          detachEvents: function () {
            var e = this,
              t = i(),
              a = e.params,
              r = e.touchEvents,
              n = e.el,
              o = e.wrapperEl,
              s = e.device,
              l = e.support,
              c = !!a.nested;
            if (!l.touch && l.pointerEvents)
              n.removeEventListener(r.start, e.onTouchStart, !1),
                t.removeEventListener(r.move, e.onTouchMove, c),
                t.removeEventListener(r.end, e.onTouchEnd, !1);
            else {
              if (l.touch) {
                var d = !(
                  "onTouchStart" !== r.start ||
                  !l.passiveListener ||
                  !a.passiveListeners
                ) && { passive: !0, capture: !1 };
                n.removeEventListener(r.start, e.onTouchStart, d),
                  n.removeEventListener(r.move, e.onTouchMove, c),
                  n.removeEventListener(r.end, e.onTouchEnd, d),
                  r.cancel && n.removeEventListener(r.cancel, e.onTouchEnd, d);
              }
              ((a.simulateTouch && !s.ios && !s.android) ||
                (a.simulateTouch && !l.touch && s.ios)) &&
                (n.removeEventListener("mousedown", e.onTouchStart, !1),
                t.removeEventListener("mousemove", e.onTouchMove, c),
                t.removeEventListener("mouseup", e.onTouchEnd, !1));
            }
            (a.preventClicks || a.preventClicksPropagation) &&
              n.removeEventListener("click", e.onClick, !0),
              a.cssMode && o.removeEventListener("scroll", e.onScroll),
              e.off(
                s.ios || s.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                A
              );
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            var e = this,
              t = e.activeIndex,
              a = e.initialized,
              r = e.loopedSlides,
              n = void 0 === r ? 0 : r,
              i = e.params,
              o = e.$el,
              s = i.breakpoints;
            if (s && (!s || 0 !== Object.keys(s).length)) {
              var l = e.getBreakpoint(s);
              if (l && e.currentBreakpoint !== l) {
                var c = l in s ? s[l] : void 0;
                c &&
                  [
                    "slidesPerView",
                    "spaceBetween",
                    "slidesPerGroup",
                    "slidesPerGroupSkip",
                    "slidesPerColumn",
                  ].forEach(function (e) {
                    var t = c[e];
                    void 0 !== t &&
                      (c[e] =
                        "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t)
                          ? "slidesPerView" === e
                            ? parseFloat(t)
                            : parseInt(t, 10)
                          : "auto");
                  });
                var d = c || e.originalParams,
                  u = i.slidesPerColumn > 1,
                  p = d.slidesPerColumn > 1;
                u && !p
                  ? (o.removeClass(
                      i.containerModifierClass +
                        "multirow " +
                        i.containerModifierClass +
                        "multirow-column"
                    ),
                    e.emitContainerClasses())
                  : !u &&
                    p &&
                    (o.addClass(i.containerModifierClass + "multirow"),
                    "column" === d.slidesPerColumnFill &&
                      o.addClass(i.containerModifierClass + "multirow-column"),
                    e.emitContainerClasses());
                var h = d.direction && d.direction !== i.direction,
                  m = i.loop && (d.slidesPerView !== i.slidesPerView || h);
                h && a && e.changeDirection(),
                  S(e.params, d),
                  S(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev,
                  }),
                  (e.currentBreakpoint = l),
                  e.emit("_beforeBreakpoint", d),
                  m &&
                    a &&
                    (e.loopDestroy(),
                    e.loopCreate(),
                    e.updateSlides(),
                    e.slideTo(t - n + e.loopedSlides, 0, !1)),
                  e.emit("breakpoint", d);
              }
            }
          },
          getBreakpoint: function (e) {
            var t = s();
            if (e) {
              var a = !1,
                r = Object.keys(e).map(function (e) {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    var a = parseFloat(e.substr(1));
                    return { value: t.innerHeight * a, point: e };
                  }
                  return { value: e, point: e };
                });
              r.sort(function (e, t) {
                return parseInt(e.value, 10) - parseInt(t.value, 10);
              });
              for (var n = 0; n < r.length; n += 1) {
                var i = r[n],
                  o = i.point;
                i.value <= t.innerWidth && (a = o);
              }
              return a || "max";
            }
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            var e = this,
              t = e.params,
              a = e.isLocked,
              r =
                e.slides.length > 0 &&
                t.slidesOffsetBefore +
                  t.spaceBetween * (e.slides.length - 1) +
                  e.slides[0].offsetWidth * e.slides.length;
            t.slidesOffsetBefore && t.slidesOffsetAfter && r
              ? (e.isLocked = r <= e.size)
              : (e.isLocked = 1 === e.snapGrid.length),
              (e.allowSlideNext = !e.isLocked),
              (e.allowSlidePrev = !e.isLocked),
              a !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
              a &&
                a !== e.isLocked &&
                ((e.isEnd = !1), e.navigation && e.navigation.update());
          },
        },
        classes: {
          addClasses: function () {
            var e = this,
              t = e.classNames,
              a = e.params,
              r = e.rtl,
              n = e.$el,
              i = e.device,
              o = [];
            o.push("initialized"),
              o.push(a.direction),
              a.freeMode && o.push("free-mode"),
              a.autoHeight && o.push("autoheight"),
              r && o.push("rtl"),
              a.slidesPerColumn > 1 &&
                (o.push("multirow"),
                "column" === a.slidesPerColumnFill &&
                  o.push("multirow-column")),
              i.android && o.push("android"),
              i.ios && o.push("ios"),
              a.cssMode && o.push("css-mode"),
              o.forEach(function (e) {
                t.push(a.containerModifierClass + e);
              }),
              n.addClass(t.join(" ")),
              e.emitContainerClasses();
          },
          removeClasses: function () {
            var e = this,
              t = e.$el,
              a = e.classNames;
            t.removeClass(a.join(" ")), e.emitContainerClasses();
          },
        },
        images: {
          loadImage: function (e, t, a, r, n, i) {
            var o,
              l = s();
            function c() {
              i && i();
            }
            f(e).parent("picture")[0] || (e.complete && n)
              ? c()
              : t
              ? (((o = new l.Image()).onload = c),
                (o.onerror = c),
                r && (o.sizes = r),
                a && (o.srcset = a),
                t && (o.src = t))
              : c();
          },
          preloadImages: function () {
            var e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (var a = 0; a < e.imagesToLoad.length; a += 1) {
              var r = e.imagesToLoad[a];
              e.loadImage(
                r,
                r.currentSrc || r.getAttribute("src"),
                r.srcset || r.getAttribute("srcset"),
                r.sizes || r.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      D = {},
      G = (function () {
        function t() {
          for (
            var e, a, r = arguments.length, n = new Array(r), i = 0;
            i < r;
            i++
          )
            n[i] = arguments[i];
          1 === n.length && n[0].constructor && n[0].constructor === Object
            ? (a = n[0])
            : ((e = n[0]), (a = n[1])),
            a || (a = {}),
            (a = S({}, a)),
            e && !a.el && (a.el = e);
          var o = this;
          (o.support = _()),
            (o.device = E({ userAgent: a.userAgent })),
            (o.browser = M()),
            (o.eventsListeners = {}),
            (o.eventsAnyListeners = []),
            void 0 === o.modules && (o.modules = {}),
            Object.keys(o.modules).forEach(function (e) {
              var t = o.modules[e];
              if (t.params) {
                var r = Object.keys(t.params)[0],
                  n = t.params[r];
                if ("object" != _typeof(n) || null === n) return;
                if (!(r in a && "enabled" in n)) return;
                !0 === a[r] && (a[r] = { enabled: !0 }),
                  "object" != _typeof(a[r]) ||
                    "enabled" in a[r] ||
                    (a[r].enabled = !0),
                  a[r] || (a[r] = { enabled: !1 });
              }
            });
          var s = S({}, B);
          o.useParams(s),
            (o.params = S({}, s, D, a)),
            (o.originalParams = S({}, o.params)),
            (o.passedParams = S({}, a)),
            o.params &&
              o.params.on &&
              Object.keys(o.params.on).forEach(function (e) {
                o.on(e, o.params.on[e]);
              }),
            o.params && o.params.onAny && o.onAny(o.params.onAny),
            (o.$ = f);
          var l = f(o.params.el);
          if ((e = l[0])) {
            if (l.length > 1) {
              var c = [];
              return (
                l.each(function (e) {
                  var r = S({}, a, { el: e });
                  c.push(new t(r));
                }),
                c
              );
            }
            var d, u, p;
            return (
              (e.swiper = o),
              e && e.shadowRoot && e.shadowRoot.querySelector
                ? ((d = f(
                    e.shadowRoot.querySelector("." + o.params.wrapperClass)
                  )).children = function (e) {
                    return l.children(e);
                  })
                : (d = l.children("." + o.params.wrapperClass)),
              S(o, {
                $el: l,
                el: e,
                $wrapperEl: d,
                wrapperEl: d[0],
                classNames: [],
                slides: f(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function () {
                  return "horizontal" === o.params.direction;
                },
                isVertical: function () {
                  return "vertical" === o.params.direction;
                },
                rtl:
                  "rtl" === e.dir.toLowerCase() || "rtl" === l.css("direction"),
                rtlTranslate:
                  "horizontal" === o.params.direction &&
                  ("rtl" === e.dir.toLowerCase() ||
                    "rtl" === l.css("direction")),
                wrongRTL: "-webkit-box" === d.css("display"),
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: o.params.allowSlideNext,
                allowSlidePrev: o.params.allowSlidePrev,
                touchEvents:
                  ((u = ["touchstart", "touchmove", "touchend", "touchcancel"]),
                  (p = ["mousedown", "mousemove", "mouseup"]),
                  o.support.pointerEvents &&
                    (p = ["pointerdown", "pointermove", "pointerup"]),
                  (o.touchEventsTouch = {
                    start: u[0],
                    move: u[1],
                    end: u[2],
                    cancel: u[3],
                  }),
                  (o.touchEventsDesktop = {
                    start: p[0],
                    move: p[1],
                    end: p[2],
                  }),
                  o.support.touch || !o.params.simulateTouch
                    ? o.touchEventsTouch
                    : o.touchEventsDesktop),
                touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  formElements:
                    "input, select, option, textarea, button, video, label",
                  lastClickTime: C(),
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  isTouchEvent: void 0,
                  startMoving: void 0,
                },
                allowClick: !0,
                allowTouchMove: o.params.allowTouchMove,
                touches: {
                  startX: 0,
                  startY: 0,
                  currentX: 0,
                  currentY: 0,
                  diff: 0,
                },
                imagesToLoad: [],
                imagesLoaded: 0,
              }),
              o.useModules(),
              o.emit("_swiper"),
              o.params.init && o.init(),
              o
            );
          }
        }
        var a,
          r,
          n = t.prototype;
        return (
          (n.emitContainerClasses = function () {
            var e = this;
            if (e.params._emitClasses && e.el) {
              var t = e.el.className.split(" ").filter(function (t) {
                return (
                  0 === t.indexOf("swiper-container") ||
                  0 === t.indexOf(e.params.containerModifierClass)
                );
              });
              e.emit("_containerClasses", t.join(" "));
            }
          }),
          (n.getSlideClasses = function (e) {
            var t = this;
            return e.className
              .split(" ")
              .filter(function (e) {
                return (
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
                );
              })
              .join(" ");
          }),
          (n.emitSlidesClasses = function () {
            var e = this;
            e.params._emitClasses &&
              e.el &&
              e.slides.each(function (t) {
                var a = e.getSlideClasses(t);
                e.emit("_slideClass", t, a);
              });
          }),
          (n.slidesPerViewDynamic = function () {
            var e = this,
              t = e.params,
              a = e.slides,
              r = e.slidesGrid,
              n = e.size,
              i = e.activeIndex,
              o = 1;
            if (t.centeredSlides) {
              for (
                var s, l = a[i].swiperSlideSize, c = i + 1;
                c < a.length;
                c += 1
              )
                a[c] &&
                  !s &&
                  ((o += 1), (l += a[c].swiperSlideSize) > n && (s = !0));
              for (var d = i - 1; d >= 0; d -= 1)
                a[d] &&
                  !s &&
                  ((o += 1), (l += a[d].swiperSlideSize) > n && (s = !0));
            } else
              for (var u = i + 1; u < a.length; u += 1)
                r[u] - r[i] < n && (o += 1);
            return o;
          }),
          (n.update = function () {
            var e = this;
            if (e && !e.destroyed) {
              var t = e.snapGrid,
                a = e.params;
              a.breakpoints && e.setBreakpoint(),
                e.updateSize(),
                e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.params.freeMode
                  ? (r(), e.params.autoHeight && e.updateAutoHeight())
                  : (("auto" === e.params.slidesPerView ||
                      e.params.slidesPerView > 1) &&
                    e.isEnd &&
                    !e.params.centeredSlides
                      ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                      : e.slideTo(e.activeIndex, 0, !1, !0)) || r(),
                a.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                e.emit("update");
            }
            function r() {
              var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                a = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
              e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
            }
          }),
          (n.changeDirection = function (e, t) {
            void 0 === t && (t = !0);
            var a = this,
              r = a.params.direction;
            return (
              e || (e = "horizontal" === r ? "vertical" : "horizontal"),
              e === r ||
                ("horizontal" !== e && "vertical" !== e) ||
                (a.$el
                  .removeClass("" + a.params.containerModifierClass + r)
                  .addClass("" + a.params.containerModifierClass + e),
                a.emitContainerClasses(),
                (a.params.direction = e),
                a.slides.each(function (t) {
                  "vertical" === e
                    ? (t.style.width = "")
                    : (t.style.height = "");
                }),
                a.emit("changeDirection"),
                t && a.update()),
              a
            );
          }),
          (n.init = function () {
            var e = this;
            e.initialized ||
              (e.emit("beforeInit"),
              e.params.breakpoints && e.setBreakpoint(),
              e.addClasses(),
              e.params.loop && e.loopCreate(),
              e.updateSize(),
              e.updateSlides(),
              e.params.watchOverflow && e.checkOverflow(),
              e.params.grabCursor && e.setGrabCursor(),
              e.params.preloadImages && e.preloadImages(),
              e.params.loop
                ? e.slideTo(
                    e.params.initialSlide + e.loopedSlides,
                    0,
                    e.params.runCallbacksOnInit
                  )
                : e.slideTo(
                    e.params.initialSlide,
                    0,
                    e.params.runCallbacksOnInit
                  ),
              e.attachEvents(),
              (e.initialized = !0),
              e.emit("init"),
              e.emit("afterInit"));
          }),
          (n.destroy = function (e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            var a,
              r = this,
              n = r.params,
              i = r.$el,
              o = r.$wrapperEl,
              s = r.slides;
            return (
              void 0 === r.params ||
                r.destroyed ||
                (r.emit("beforeDestroy"),
                (r.initialized = !1),
                r.detachEvents(),
                n.loop && r.loopDestroy(),
                t &&
                  (r.removeClasses(),
                  i.removeAttr("style"),
                  o.removeAttr("style"),
                  s &&
                    s.length &&
                    s
                      .removeClass(
                        [
                          n.slideVisibleClass,
                          n.slideActiveClass,
                          n.slideNextClass,
                          n.slidePrevClass,
                        ].join(" ")
                      )
                      .removeAttr("style")
                      .removeAttr("data-swiper-slide-index")),
                r.emit("destroy"),
                Object.keys(r.eventsListeners).forEach(function (e) {
                  r.off(e);
                }),
                !1 !== e &&
                  ((r.$el[0].swiper = null),
                  (a = r),
                  Object.keys(a).forEach(function (e) {
                    try {
                      a[e] = null;
                    } catch (e) {}
                    try {
                      delete a[e];
                    } catch (e) {}
                  })),
                (r.destroyed = !0)),
              null
            );
          }),
          (t.extendDefaults = function (e) {
            S(D, e);
          }),
          (t.installModule = function (e) {
            t.prototype.modules || (t.prototype.modules = {});
            var a =
              e.name || Object.keys(t.prototype.modules).length + "_" + C();
            t.prototype.modules[a] = e;
          }),
          (t.use = function (e) {
            return Array.isArray(e)
              ? (e.forEach(function (e) {
                  return t.installModule(e);
                }),
                t)
              : (t.installModule(e), t);
          }),
          (a = t),
          (r = [
            {
              key: "extendedDefaults",
              get: function () {
                return D;
              },
            },
            {
              key: "defaults",
              get: function () {
                return B;
              },
            },
          ]),
          null && e(a.prototype, null),
          r && e(a, r),
          t
        );
      })();
    Object.keys(R).forEach(function (e) {
      Object.keys(R[e]).forEach(function (t) {
        G.prototype[t] = R[e][t];
      });
    }),
      G.use([P, L]);
    var j = {
        update: function (e) {
          var t = this,
            a = t.params,
            r = a.slidesPerView,
            n = a.slidesPerGroup,
            i = a.centeredSlides,
            o = t.params.virtual,
            s = o.addSlidesBefore,
            l = o.addSlidesAfter,
            c = t.virtual,
            d = c.from,
            u = c.to,
            p = c.slides,
            h = c.slidesGrid,
            m = c.renderSlide,
            f = c.offset;
          t.updateActiveIndex();
          var v,
            g,
            y,
            b = t.activeIndex || 0;
          (v = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"),
            i
              ? ((g = Math.floor(r / 2) + n + l),
                (y = Math.floor(r / 2) + n + s))
              : ((g = r + (n - 1) + l), (y = n + s));
          var w = Math.max((b || 0) - y, 0),
            C = Math.min((b || 0) + g, p.length - 1),
            T = (t.slidesGrid[w] || 0) - (t.slidesGrid[0] || 0);
          function k() {
            t.updateSlides(),
              t.updateProgress(),
              t.updateSlidesClasses(),
              t.lazy && t.params.lazy.enabled && t.lazy.load();
          }
          if (
            (S(t.virtual, {
              from: w,
              to: C,
              offset: T,
              slidesGrid: t.slidesGrid,
            }),
            d === w && u === C && !e)
          )
            return (
              t.slidesGrid !== h && T !== f && t.slides.css(v, T + "px"),
              void t.updateProgress()
            );
          if (t.params.virtual.renderExternal)
            return (
              t.params.virtual.renderExternal.call(t, {
                offset: T,
                from: w,
                to: C,
                slides: (function () {
                  for (var e = [], t = w; t <= C; t += 1) e.push(p[t]);
                  return e;
                })(),
              }),
              void (t.params.virtual.renderExternalUpdate && k())
            );
          var x = [],
            _ = [];
          if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
          else
            for (var E = d; E <= u; E += 1)
              (E < w || E > C) &&
                t.$wrapperEl
                  .find(
                    "." +
                      t.params.slideClass +
                      '[data-swiper-slide-index="' +
                      E +
                      '"]'
                  )
                  .remove();
          for (var M = 0; M < p.length; M += 1)
            M >= w &&
              M <= C &&
              (void 0 === u || e
                ? _.push(M)
                : (M > u && _.push(M), M < d && x.push(M)));
          _.forEach(function (e) {
            t.$wrapperEl.append(m(p[e], e));
          }),
            x
              .sort(function (e, t) {
                return t - e;
              })
              .forEach(function (e) {
                t.$wrapperEl.prepend(m(p[e], e));
              }),
            t.$wrapperEl.children(".swiper-slide").css(v, T + "px"),
            k();
        },
        renderSlide: function (e, t) {
          var a = this,
            r = a.params.virtual;
          if (r.cache && a.virtual.cache[t]) return a.virtual.cache[t];
          var n = r.renderSlide
            ? f(r.renderSlide.call(a, e, t))
            : f(
                '<div class="' +
                  a.params.slideClass +
                  '" data-swiper-slide-index="' +
                  t +
                  '">' +
                  e +
                  "</div>"
              );
          return (
            n.attr("data-swiper-slide-index") ||
              n.attr("data-swiper-slide-index", t),
            r.cache && (a.virtual.cache[t] = n),
            n
          );
        },
        appendSlide: function (e) {
          var t = this;
          if ("object" == _typeof(e) && "length" in e)
            for (var a = 0; a < e.length; a += 1)
              e[a] && t.virtual.slides.push(e[a]);
          else t.virtual.slides.push(e);
          t.virtual.update(!0);
        },
        prependSlide: function (e) {
          var t = this,
            a = t.activeIndex,
            r = a + 1,
            n = 1;
          if (Array.isArray(e)) {
            for (var i = 0; i < e.length; i += 1)
              e[i] && t.virtual.slides.unshift(e[i]);
            (r = a + e.length), (n = e.length);
          } else t.virtual.slides.unshift(e);
          if (t.params.virtual.cache) {
            var o = t.virtual.cache,
              s = {};
            Object.keys(o).forEach(function (e) {
              var t = o[e],
                a = t.attr("data-swiper-slide-index");
              a && t.attr("data-swiper-slide-index", parseInt(a, 10) + 1),
                (s[parseInt(e, 10) + n] = t);
            }),
              (t.virtual.cache = s);
          }
          t.virtual.update(!0), t.slideTo(r, 0);
        },
        removeSlide: function (e) {
          var t = this;
          if (null != e) {
            var a = t.activeIndex;
            if (Array.isArray(e))
              for (var r = e.length - 1; r >= 0; r -= 1)
                t.virtual.slides.splice(e[r], 1),
                  t.params.virtual.cache && delete t.virtual.cache[e[r]],
                  e[r] < a && (a -= 1),
                  (a = Math.max(a, 0));
            else
              t.virtual.slides.splice(e, 1),
                t.params.virtual.cache && delete t.virtual.cache[e],
                e < a && (a -= 1),
                (a = Math.max(a, 0));
            t.virtual.update(!0), t.slideTo(a, 0);
          }
        },
        removeAllSlides: function () {
          var e = this;
          (e.virtual.slides = []),
            e.params.virtual.cache && (e.virtual.cache = {}),
            e.virtual.update(!0),
            e.slideTo(0, 0);
        },
      },
      H = {
        name: "virtual",
        params: {
          virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null,
            renderExternalUpdate: !0,
            addSlidesBefore: 0,
            addSlidesAfter: 0,
          },
        },
        create: function () {
          x(this, {
            virtual: t(
              t({}, j),
              {},
              { slides: this.params.virtual.slides, cache: {} }
            ),
          });
        },
        on: {
          beforeInit: function (e) {
            if (e.params.virtual.enabled) {
              e.classNames.push(e.params.containerModifierClass + "virtual");
              var t = { watchSlidesProgress: !0 };
              S(e.params, t),
                S(e.originalParams, t),
                e.params.initialSlide || e.virtual.update();
            }
          },
          setTranslate: function (e) {
            e.params.virtual.enabled && e.virtual.update();
          },
        },
      },
      V = {
        handle: function (e) {
          var t = this,
            a = s(),
            r = i(),
            n = t.rtlTranslate,
            o = e;
          o.originalEvent && (o = o.originalEvent);
          var l = o.keyCode || o.charCode,
            c = t.params.keyboard.pageUpDown,
            d = c && 33 === l,
            u = c && 34 === l,
            p = 37 === l,
            h = 39 === l,
            m = 38 === l,
            f = 40 === l;
          if (
            !t.allowSlideNext &&
            ((t.isHorizontal() && h) || (t.isVertical() && f) || u)
          )
            return !1;
          if (
            !t.allowSlidePrev &&
            ((t.isHorizontal() && p) || (t.isVertical() && m) || d)
          )
            return !1;
          if (
            !(
              o.shiftKey ||
              o.altKey ||
              o.ctrlKey ||
              o.metaKey ||
              (r.activeElement &&
                r.activeElement.nodeName &&
                ("input" === r.activeElement.nodeName.toLowerCase() ||
                  "textarea" === r.activeElement.nodeName.toLowerCase()))
            )
          ) {
            if (
              t.params.keyboard.onlyInViewport &&
              (d || u || p || h || m || f)
            ) {
              var v = !1;
              if (
                t.$el.parents("." + t.params.slideClass).length > 0 &&
                0 === t.$el.parents("." + t.params.slideActiveClass).length
              )
                return;
              var g = a.innerWidth,
                y = a.innerHeight,
                b = t.$el.offset();
              n && (b.left -= t.$el[0].scrollLeft);
              for (
                var w = [
                    [b.left, b.top],
                    [b.left + t.width, b.top],
                    [b.left, b.top + t.height],
                    [b.left + t.width, b.top + t.height],
                  ],
                  C = 0;
                C < w.length;
                C += 1
              ) {
                var T = w[C];
                if (T[0] >= 0 && T[0] <= g && T[1] >= 0 && T[1] <= y) {
                  if (0 === T[0] && 0 === T[1]) continue;
                  v = !0;
                }
              }
              if (!v) return;
            }
            t.isHorizontal()
              ? ((d || u || p || h) &&
                  (o.preventDefault
                    ? o.preventDefault()
                    : (o.returnValue = !1)),
                (((u || h) && !n) || ((d || p) && n)) && t.slideNext(),
                (((d || p) && !n) || ((u || h) && n)) && t.slidePrev())
              : ((d || u || m || f) &&
                  (o.preventDefault
                    ? o.preventDefault()
                    : (o.returnValue = !1)),
                (u || f) && t.slideNext(),
                (d || m) && t.slidePrev()),
              t.emit("keyPress", l);
          }
        },
        enable: function () {
          var e = this,
            t = i();
          e.keyboard.enabled ||
            (f(t).on("keydown", e.keyboard.handle), (e.keyboard.enabled = !0));
        },
        disable: function () {
          var e = this,
            t = i();
          e.keyboard.enabled &&
            (f(t).off("keydown", e.keyboard.handle), (e.keyboard.enabled = !1));
        },
      },
      F = {
        name: "keyboard",
        params: {
          keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 },
        },
        create: function () {
          x(this, { keyboard: t({ enabled: !1 }, V) });
        },
        on: {
          init: function (e) {
            e.params.keyboard.enabled && e.keyboard.enable();
          },
          destroy: function (e) {
            e.keyboard.enabled && e.keyboard.disable();
          },
        },
      },
      q = {
        lastScrollTime: C(),
        lastEventBeforeSnap: void 0,
        recentWheelEvents: [],
        event: function () {
          return s().navigator.userAgent.indexOf("firefox") > -1
            ? "DOMMouseScroll"
            : (function () {
                var e = i(),
                  t = "onwheel",
                  a = t in e;
                if (!a) {
                  var r = e.createElement("div");
                  r.setAttribute(t, "return;"),
                    (a = "function" == typeof r.onwheel);
                }
                return (
                  !a &&
                    e.implementation &&
                    e.implementation.hasFeature &&
                    !0 !== e.implementation.hasFeature("", "") &&
                    (a = e.implementation.hasFeature("Events.wheel", "3.0")),
                  a
                );
              })()
            ? "wheel"
            : "mousewheel";
        },
        normalize: function (e) {
          var t = 0,
            a = 0,
            r = 0,
            n = 0;
          return (
            "detail" in e && (a = e.detail),
            "wheelDelta" in e && (a = -e.wheelDelta / 120),
            "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120),
            "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
            "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = a), (a = 0)),
            (r = 10 * t),
            (n = 10 * a),
            "deltaY" in e && (n = e.deltaY),
            "deltaX" in e && (r = e.deltaX),
            e.shiftKey && !r && ((r = n), (n = 0)),
            (r || n) &&
              e.deltaMode &&
              (1 === e.deltaMode
                ? ((r *= 40), (n *= 40))
                : ((r *= 800), (n *= 800))),
            r && !t && (t = r < 1 ? -1 : 1),
            n && !a && (a = n < 1 ? -1 : 1),
            { spinX: t, spinY: a, pixelX: r, pixelY: n }
          );
        },
        handleMouseEnter: function () {
          this.mouseEntered = !0;
        },
        handleMouseLeave: function () {
          this.mouseEntered = !1;
        },
        handle: function (e) {
          var t = e,
            a = this,
            r = a.params.mousewheel;
          a.params.cssMode && t.preventDefault();
          var n = a.$el;
          if (
            ("container" !== a.params.mousewheel.eventsTarget &&
              (n = f(a.params.mousewheel.eventsTarget)),
            !a.mouseEntered && !n[0].contains(t.target) && !r.releaseOnEdges)
          )
            return !0;
          t.originalEvent && (t = t.originalEvent);
          var i = 0,
            o = a.rtlTranslate ? -1 : 1,
            s = q.normalize(t);
          if (r.forceToAxis)
            if (a.isHorizontal()) {
              if (!(Math.abs(s.pixelX) > Math.abs(s.pixelY))) return !0;
              i = -s.pixelX * o;
            } else {
              if (!(Math.abs(s.pixelY) > Math.abs(s.pixelX))) return !0;
              i = -s.pixelY;
            }
          else
            i =
              Math.abs(s.pixelX) > Math.abs(s.pixelY)
                ? -s.pixelX * o
                : -s.pixelY;
          if (0 === i) return !0;
          r.invert && (i = -i);
          var l = a.getTranslate() + i * r.sensitivity;
          if (
            (l >= a.minTranslate() && (l = a.minTranslate()),
            l <= a.maxTranslate() && (l = a.maxTranslate()),
            (!!a.params.loop ||
              !(l === a.minTranslate() || l === a.maxTranslate())) &&
              a.params.nested &&
              t.stopPropagation(),
            a.params.freeMode)
          ) {
            var c = { time: C(), delta: Math.abs(i), direction: Math.sign(i) },
              d = a.mousewheel.lastEventBeforeSnap,
              u =
                d &&
                c.time < d.time + 500 &&
                c.delta <= d.delta &&
                c.direction === d.direction;
            if (!u) {
              (a.mousewheel.lastEventBeforeSnap = void 0),
                a.params.loop && a.loopFix();
              var p = a.getTranslate() + i * r.sensitivity,
                h = a.isBeginning,
                m = a.isEnd;
              if (
                (p >= a.minTranslate() && (p = a.minTranslate()),
                p <= a.maxTranslate() && (p = a.maxTranslate()),
                a.setTransition(0),
                a.setTranslate(p),
                a.updateProgress(),
                a.updateActiveIndex(),
                a.updateSlidesClasses(),
                ((!h && a.isBeginning) || (!m && a.isEnd)) &&
                  a.updateSlidesClasses(),
                a.params.freeModeSticky)
              ) {
                clearTimeout(a.mousewheel.timeout),
                  (a.mousewheel.timeout = void 0);
                var v = a.mousewheel.recentWheelEvents;
                v.length >= 15 && v.shift();
                var g = v.length ? v[v.length - 1] : void 0,
                  y = v[0];
                if (
                  (v.push(c),
                  g && (c.delta > g.delta || c.direction !== g.direction))
                )
                  v.splice(0);
                else if (
                  v.length >= 15 &&
                  c.time - y.time < 500 &&
                  y.delta - c.delta >= 1 &&
                  c.delta <= 6
                ) {
                  var b = i > 0 ? 0.8 : 0.2;
                  (a.mousewheel.lastEventBeforeSnap = c),
                    v.splice(0),
                    (a.mousewheel.timeout = w(function () {
                      a.slideToClosest(a.params.speed, !0, void 0, b);
                    }, 0));
                }
                a.mousewheel.timeout ||
                  (a.mousewheel.timeout = w(function () {
                    (a.mousewheel.lastEventBeforeSnap = c),
                      v.splice(0),
                      a.slideToClosest(a.params.speed, !0, void 0, 0.5);
                  }, 500));
              }
              if (
                (u || a.emit("scroll", t),
                a.params.autoplay &&
                  a.params.autoplayDisableOnInteraction &&
                  a.autoplay.stop(),
                p === a.minTranslate() || p === a.maxTranslate())
              )
                return !0;
            }
          } else {
            var T = {
                time: C(),
                delta: Math.abs(i),
                direction: Math.sign(i),
                raw: e,
              },
              k = a.mousewheel.recentWheelEvents;
            k.length >= 2 && k.shift();
            var S = k.length ? k[k.length - 1] : void 0;
            if (
              (k.push(T),
              S
                ? (T.direction !== S.direction ||
                    T.delta > S.delta ||
                    T.time > S.time + 150) &&
                  a.mousewheel.animateSlider(T)
                : a.mousewheel.animateSlider(T),
              a.mousewheel.releaseScroll(T))
            )
              return !0;
          }
          return (
            t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1
          );
        },
        animateSlider: function (e) {
          var t = this,
            a = s();
          return !(
            (this.params.mousewheel.thresholdDelta &&
              e.delta < this.params.mousewheel.thresholdDelta) ||
            (this.params.mousewheel.thresholdTime &&
              C() - t.mousewheel.lastScrollTime <
                this.params.mousewheel.thresholdTime) ||
            (!(e.delta >= 6 && C() - t.mousewheel.lastScrollTime < 60) &&
              (e.direction < 0
                ? (t.isEnd && !t.params.loop) ||
                  t.animating ||
                  (t.slideNext(), t.emit("scroll", e.raw))
                : (t.isBeginning && !t.params.loop) ||
                  t.animating ||
                  (t.slidePrev(), t.emit("scroll", e.raw)),
              (t.mousewheel.lastScrollTime = new a.Date().getTime()),
              1))
          );
        },
        releaseScroll: function (e) {
          var t = this,
            a = t.params.mousewheel;
          if (e.direction < 0) {
            if (t.isEnd && !t.params.loop && a.releaseOnEdges) return !0;
          } else if (t.isBeginning && !t.params.loop && a.releaseOnEdges)
            return !0;
          return !1;
        },
        enable: function () {
          var e = this,
            t = q.event();
          if (e.params.cssMode)
            return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
          if (!t) return !1;
          if (e.mousewheel.enabled) return !1;
          var a = e.$el;
          return (
            "container" !== e.params.mousewheel.eventsTarget &&
              (a = f(e.params.mousewheel.eventsTarget)),
            a.on("mouseenter", e.mousewheel.handleMouseEnter),
            a.on("mouseleave", e.mousewheel.handleMouseLeave),
            a.on(t, e.mousewheel.handle),
            (e.mousewheel.enabled = !0),
            !0
          );
        },
        disable: function () {
          var e = this,
            t = q.event();
          if (e.params.cssMode)
            return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
          if (!t) return !1;
          if (!e.mousewheel.enabled) return !1;
          var a = e.$el;
          return (
            "container" !== e.params.mousewheel.eventsTarget &&
              (a = f(e.params.mousewheel.eventsTarget)),
            a.off(t, e.mousewheel.handle),
            (e.mousewheel.enabled = !1),
            !0
          );
        },
      },
      z = {
        update: function () {
          var e = this,
            t = e.params.navigation;
          if (!e.params.loop) {
            var a = e.navigation,
              r = a.$nextEl,
              n = a.$prevEl;
            n &&
              n.length > 0 &&
              (e.isBeginning
                ? n.addClass(t.disabledClass)
                : n.removeClass(t.disabledClass),
              n[
                e.params.watchOverflow && e.isLocked
                  ? "addClass"
                  : "removeClass"
              ](t.lockClass)),
              r &&
                r.length > 0 &&
                (e.isEnd
                  ? r.addClass(t.disabledClass)
                  : r.removeClass(t.disabledClass),
                r[
                  e.params.watchOverflow && e.isLocked
                    ? "addClass"
                    : "removeClass"
                ](t.lockClass));
          }
        },
        onPrevClick: function (e) {
          var t = this;
          e.preventDefault(),
            (t.isBeginning && !t.params.loop) || t.slidePrev();
        },
        onNextClick: function (e) {
          var t = this;
          e.preventDefault(), (t.isEnd && !t.params.loop) || t.slideNext();
        },
        init: function () {
          var e,
            t,
            a = this,
            r = a.params.navigation;
          (r.nextEl || r.prevEl) &&
            (r.nextEl &&
              ((e = f(r.nextEl)),
              a.params.uniqueNavElements &&
                "string" == typeof r.nextEl &&
                e.length > 1 &&
                1 === a.$el.find(r.nextEl).length &&
                (e = a.$el.find(r.nextEl))),
            r.prevEl &&
              ((t = f(r.prevEl)),
              a.params.uniqueNavElements &&
                "string" == typeof r.prevEl &&
                t.length > 1 &&
                1 === a.$el.find(r.prevEl).length &&
                (t = a.$el.find(r.prevEl))),
            e && e.length > 0 && e.on("click", a.navigation.onNextClick),
            t && t.length > 0 && t.on("click", a.navigation.onPrevClick),
            S(a.navigation, {
              $nextEl: e,
              nextEl: e && e[0],
              $prevEl: t,
              prevEl: t && t[0],
            }));
        },
        destroy: function () {
          var e = this,
            t = e.navigation,
            a = t.$nextEl,
            r = t.$prevEl;
          a &&
            a.length &&
            (a.off("click", e.navigation.onNextClick),
            a.removeClass(e.params.navigation.disabledClass)),
            r &&
              r.length &&
              (r.off("click", e.navigation.onPrevClick),
              r.removeClass(e.params.navigation.disabledClass));
        },
      },
      U = {
        update: function () {
          var e = this,
            t = e.rtl,
            a = e.params.pagination;
          if (
            a.el &&
            e.pagination.el &&
            e.pagination.$el &&
            0 !== e.pagination.$el.length
          ) {
            var r,
              n =
                e.virtual && e.params.virtual.enabled
                  ? e.virtual.slides.length
                  : e.slides.length,
              i = e.pagination.$el,
              o = e.params.loop
                ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup)
                : e.snapGrid.length;
            if (
              (e.params.loop
                ? ((r = Math.ceil(
                    (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                  )) >
                    n - 1 - 2 * e.loopedSlides && (r -= n - 2 * e.loopedSlides),
                  r > o - 1 && (r -= o),
                  r < 0 && "bullets" !== e.params.paginationType && (r = o + r))
                : (r =
                    void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
              "bullets" === a.type &&
                e.pagination.bullets &&
                e.pagination.bullets.length > 0)
            ) {
              var s,
                l,
                c,
                d = e.pagination.bullets;
              if (
                (a.dynamicBullets &&
                  ((e.pagination.bulletSize = d
                    .eq(0)
                    [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                  i.css(
                    e.isHorizontal() ? "width" : "height",
                    e.pagination.bulletSize * (a.dynamicMainBullets + 4) + "px"
                  ),
                  a.dynamicMainBullets > 1 &&
                    void 0 !== e.previousIndex &&
                    ((e.pagination.dynamicBulletIndex += r - e.previousIndex),
                    e.pagination.dynamicBulletIndex > a.dynamicMainBullets - 1
                      ? (e.pagination.dynamicBulletIndex =
                          a.dynamicMainBullets - 1)
                      : e.pagination.dynamicBulletIndex < 0 &&
                        (e.pagination.dynamicBulletIndex = 0)),
                  (s = r - e.pagination.dynamicBulletIndex),
                  (c =
                    ((l = s + (Math.min(d.length, a.dynamicMainBullets) - 1)) +
                      s) /
                    2)),
                d.removeClass(
                  a.bulletActiveClass +
                    " " +
                    a.bulletActiveClass +
                    "-next " +
                    a.bulletActiveClass +
                    "-next-next " +
                    a.bulletActiveClass +
                    "-prev " +
                    a.bulletActiveClass +
                    "-prev-prev " +
                    a.bulletActiveClass +
                    "-main"
                ),
                i.length > 1)
              )
                d.each(function (e) {
                  var t = f(e),
                    n = t.index();
                  n === r && t.addClass(a.bulletActiveClass),
                    a.dynamicBullets &&
                      (n >= s &&
                        n <= l &&
                        t.addClass(a.bulletActiveClass + "-main"),
                      n === s &&
                        t
                          .prev()
                          .addClass(a.bulletActiveClass + "-prev")
                          .prev()
                          .addClass(a.bulletActiveClass + "-prev-prev"),
                      n === l &&
                        t
                          .next()
                          .addClass(a.bulletActiveClass + "-next")
                          .next()
                          .addClass(a.bulletActiveClass + "-next-next"));
                });
              else {
                var u = d.eq(r),
                  p = u.index();
                if ((u.addClass(a.bulletActiveClass), a.dynamicBullets)) {
                  for (var h = d.eq(s), m = d.eq(l), v = s; v <= l; v += 1)
                    d.eq(v).addClass(a.bulletActiveClass + "-main");
                  if (e.params.loop)
                    if (p >= d.length - a.dynamicMainBullets) {
                      for (var g = a.dynamicMainBullets; g >= 0; g -= 1)
                        d.eq(d.length - g).addClass(
                          a.bulletActiveClass + "-main"
                        );
                      d.eq(d.length - a.dynamicMainBullets - 1).addClass(
                        a.bulletActiveClass + "-prev"
                      );
                    } else
                      h
                        .prev()
                        .addClass(a.bulletActiveClass + "-prev")
                        .prev()
                        .addClass(a.bulletActiveClass + "-prev-prev"),
                        m
                          .next()
                          .addClass(a.bulletActiveClass + "-next")
                          .next()
                          .addClass(a.bulletActiveClass + "-next-next");
                  else
                    h
                      .prev()
                      .addClass(a.bulletActiveClass + "-prev")
                      .prev()
                      .addClass(a.bulletActiveClass + "-prev-prev"),
                      m
                        .next()
                        .addClass(a.bulletActiveClass + "-next")
                        .next()
                        .addClass(a.bulletActiveClass + "-next-next");
                }
              }
              if (a.dynamicBullets) {
                var y = Math.min(d.length, a.dynamicMainBullets + 4),
                  b =
                    (e.pagination.bulletSize * y - e.pagination.bulletSize) /
                      2 -
                    c * e.pagination.bulletSize,
                  w = t ? "right" : "left";
                d.css(e.isHorizontal() ? w : "top", b + "px");
              }
            }
            if (
              ("fraction" === a.type &&
                (i
                  .find("." + a.currentClass)
                  .text(a.formatFractionCurrent(r + 1)),
                i.find("." + a.totalClass).text(a.formatFractionTotal(o))),
              "progressbar" === a.type)
            ) {
              var C;
              C = a.progressbarOpposite
                ? e.isHorizontal()
                  ? "vertical"
                  : "horizontal"
                : e.isHorizontal()
                ? "horizontal"
                : "vertical";
              var T = (r + 1) / o,
                k = 1,
                S = 1;
              "horizontal" === C ? (k = T) : (S = T),
                i
                  .find("." + a.progressbarFillClass)
                  .transform(
                    "translate3d(0,0,0) scaleX(" + k + ") scaleY(" + S + ")"
                  )
                  .transition(e.params.speed);
            }
            "custom" === a.type && a.renderCustom
              ? (i.html(a.renderCustom(e, r + 1, o)),
                e.emit("paginationRender", i[0]))
              : e.emit("paginationUpdate", i[0]),
              i[
                e.params.watchOverflow && e.isLocked
                  ? "addClass"
                  : "removeClass"
              ](a.lockClass);
          }
        },
        render: function () {
          var e = this,
            t = e.params.pagination;
          if (
            t.el &&
            e.pagination.el &&
            e.pagination.$el &&
            0 !== e.pagination.$el.length
          ) {
            var a =
                e.virtual && e.params.virtual.enabled
                  ? e.virtual.slides.length
                  : e.slides.length,
              r = e.pagination.$el,
              n = "";
            if ("bullets" === t.type) {
              for (
                var i = e.params.loop
                    ? Math.ceil(
                        (a - 2 * e.loopedSlides) / e.params.slidesPerGroup
                      )
                    : e.snapGrid.length,
                  o = 0;
                o < i;
                o += 1
              )
                t.renderBullet
                  ? (n += t.renderBullet.call(e, o, t.bulletClass))
                  : (n +=
                      "<" +
                      t.bulletElement +
                      ' class="' +
                      t.bulletClass +
                      '"></' +
                      t.bulletElement +
                      ">");
              r.html(n),
                (e.pagination.bullets = r.find(
                  "." + t.bulletClass.replace(/ /g, ".")
                ));
            }
            "fraction" === t.type &&
              ((n = t.renderFraction
                ? t.renderFraction.call(e, t.currentClass, t.totalClass)
                : '<span class="' +
                  t.currentClass +
                  '"></span> / <span class="' +
                  t.totalClass +
                  '"></span>'),
              r.html(n)),
              "progressbar" === t.type &&
                ((n = t.renderProgressbar
                  ? t.renderProgressbar.call(e, t.progressbarFillClass)
                  : '<span class="' + t.progressbarFillClass + '"></span>'),
                r.html(n)),
              "custom" !== t.type &&
                e.emit("paginationRender", e.pagination.$el[0]);
          }
        },
        init: function () {
          var e = this,
            t = e.params.pagination;
          if (t.el) {
            var a = f(t.el);
            0 !== a.length &&
              (e.params.uniqueNavElements &&
                "string" == typeof t.el &&
                a.length > 1 &&
                (a = e.$el.find(t.el)),
              "bullets" === t.type &&
                t.clickable &&
                a.addClass(t.clickableClass),
              a.addClass(t.modifierClass + t.type),
              "bullets" === t.type &&
                t.dynamicBullets &&
                (a.addClass("" + t.modifierClass + t.type + "-dynamic"),
                (e.pagination.dynamicBulletIndex = 0),
                t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
              "progressbar" === t.type &&
                t.progressbarOpposite &&
                a.addClass(t.progressbarOppositeClass),
              t.clickable &&
                a.on(
                  "click",
                  "." + t.bulletClass.replace(/ /g, "."),
                  function (t) {
                    t.preventDefault();
                    var a = f(this).index() * e.params.slidesPerGroup;
                    e.params.loop && (a += e.loopedSlides), e.slideTo(a);
                  }
                ),
              S(e.pagination, { $el: a, el: a[0] }));
          }
        },
        destroy: function () {
          var e = this,
            t = e.params.pagination;
          if (
            t.el &&
            e.pagination.el &&
            e.pagination.$el &&
            0 !== e.pagination.$el.length
          ) {
            var a = e.pagination.$el;
            a.removeClass(t.hiddenClass),
              a.removeClass(t.modifierClass + t.type),
              e.pagination.bullets &&
                e.pagination.bullets.removeClass(t.bulletActiveClass),
              t.clickable &&
                a.off("click", "." + t.bulletClass.replace(/ /g, "."));
          }
        },
      },
      W = {
        setTranslate: function () {
          var e = this;
          if (e.params.scrollbar.el && e.scrollbar.el) {
            var t = e.scrollbar,
              a = e.rtlTranslate,
              r = e.progress,
              n = t.dragSize,
              i = t.trackSize,
              o = t.$dragEl,
              s = t.$el,
              l = e.params.scrollbar,
              c = n,
              d = (i - n) * r;
            a
              ? (d = -d) > 0
                ? ((c = n - d), (d = 0))
                : -d + n > i && (c = i + d)
              : d < 0
              ? ((c = n + d), (d = 0))
              : d + n > i && (c = i - d),
              e.isHorizontal()
                ? (o.transform("translate3d(" + d + "px, 0, 0)"),
                  (o[0].style.width = c + "px"))
                : (o.transform("translate3d(0px, " + d + "px, 0)"),
                  (o[0].style.height = c + "px")),
              l.hide &&
                (clearTimeout(e.scrollbar.timeout),
                (s[0].style.opacity = 1),
                (e.scrollbar.timeout = setTimeout(function () {
                  (s[0].style.opacity = 0), s.transition(400);
                }, 1e3)));
          }
        },
        setTransition: function (e) {
          var t = this;
          t.params.scrollbar.el &&
            t.scrollbar.el &&
            t.scrollbar.$dragEl.transition(e);
        },
        updateSize: function () {
          var e = this;
          if (e.params.scrollbar.el && e.scrollbar.el) {
            var t = e.scrollbar,
              a = t.$dragEl,
              r = t.$el;
            (a[0].style.width = ""), (a[0].style.height = "");
            var n,
              i = e.isHorizontal() ? r[0].offsetWidth : r[0].offsetHeight,
              o = e.size / e.virtualSize,
              s = o * (i / e.size);
            (n =
              "auto" === e.params.scrollbar.dragSize
                ? i * o
                : parseInt(e.params.scrollbar.dragSize, 10)),
              e.isHorizontal()
                ? (a[0].style.width = n + "px")
                : (a[0].style.height = n + "px"),
              (r[0].style.display = o >= 1 ? "none" : ""),
              e.params.scrollbar.hide && (r[0].style.opacity = 0),
              S(t, { trackSize: i, divider: o, moveDivider: s, dragSize: n }),
              t.$el[
                e.params.watchOverflow && e.isLocked
                  ? "addClass"
                  : "removeClass"
              ](e.params.scrollbar.lockClass);
          }
        },
        getPointerPosition: function (e) {
          return this.isHorizontal()
            ? "touchstart" === e.type || "touchmove" === e.type
              ? e.targetTouches[0].clientX
              : e.clientX
            : "touchstart" === e.type || "touchmove" === e.type
            ? e.targetTouches[0].clientY
            : e.clientY;
        },
        setDragPosition: function (e) {
          var t,
            a = this,
            r = a.scrollbar,
            n = a.rtlTranslate,
            i = r.$el,
            o = r.dragSize,
            s = r.trackSize,
            l = r.dragStartPos;
          (t =
            (r.getPointerPosition(e) -
              i.offset()[a.isHorizontal() ? "left" : "top"] -
              (null !== l ? l : o / 2)) /
            (s - o)),
            (t = Math.max(Math.min(t, 1), 0)),
            n && (t = 1 - t);
          var c = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
          a.updateProgress(c),
            a.setTranslate(c),
            a.updateActiveIndex(),
            a.updateSlidesClasses();
        },
        onDragStart: function (e) {
          var t = this,
            a = t.params.scrollbar,
            r = t.scrollbar,
            n = t.$wrapperEl,
            i = r.$el,
            o = r.$dragEl;
          (t.scrollbar.isTouched = !0),
            (t.scrollbar.dragStartPos =
              e.target === o[0] || e.target === o
                ? r.getPointerPosition(e) -
                  e.target.getBoundingClientRect()[
                    t.isHorizontal() ? "left" : "top"
                  ]
                : null),
            e.preventDefault(),
            e.stopPropagation(),
            n.transition(100),
            o.transition(100),
            r.setDragPosition(e),
            clearTimeout(t.scrollbar.dragTimeout),
            i.transition(0),
            a.hide && i.css("opacity", 1),
            t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
            t.emit("scrollbarDragStart", e);
        },
        onDragMove: function (e) {
          var t = this,
            a = t.scrollbar,
            r = t.$wrapperEl,
            n = a.$el,
            i = a.$dragEl;
          t.scrollbar.isTouched &&
            (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
            a.setDragPosition(e),
            r.transition(0),
            n.transition(0),
            i.transition(0),
            t.emit("scrollbarDragMove", e));
        },
        onDragEnd: function (e) {
          var t = this,
            a = t.params.scrollbar,
            r = t.scrollbar,
            n = t.$wrapperEl,
            i = r.$el;
          t.scrollbar.isTouched &&
            ((t.scrollbar.isTouched = !1),
            t.params.cssMode &&
              (t.$wrapperEl.css("scroll-snap-type", ""), n.transition("")),
            a.hide &&
              (clearTimeout(t.scrollbar.dragTimeout),
              (t.scrollbar.dragTimeout = w(function () {
                i.css("opacity", 0), i.transition(400);
              }, 1e3))),
            t.emit("scrollbarDragEnd", e),
            a.snapOnRelease && t.slideToClosest());
        },
        enableDraggable: function () {
          var e = this;
          if (e.params.scrollbar.el) {
            var t = i(),
              a = e.scrollbar,
              r = e.touchEventsTouch,
              n = e.touchEventsDesktop,
              o = e.params,
              s = e.support,
              l = a.$el[0],
              c = !(!s.passiveListener || !o.passiveListeners) && {
                passive: !1,
                capture: !1,
              },
              d = !(!s.passiveListener || !o.passiveListeners) && {
                passive: !0,
                capture: !1,
              };
            s.touch
              ? (l.addEventListener(r.start, e.scrollbar.onDragStart, c),
                l.addEventListener(r.move, e.scrollbar.onDragMove, c),
                l.addEventListener(r.end, e.scrollbar.onDragEnd, d))
              : (l.addEventListener(n.start, e.scrollbar.onDragStart, c),
                t.addEventListener(n.move, e.scrollbar.onDragMove, c),
                t.addEventListener(n.end, e.scrollbar.onDragEnd, d));
          }
        },
        disableDraggable: function () {
          var e = this;
          if (e.params.scrollbar.el) {
            var t = i(),
              a = e.scrollbar,
              r = e.touchEventsTouch,
              n = e.touchEventsDesktop,
              o = e.params,
              s = e.support,
              l = a.$el[0],
              c = !(!s.passiveListener || !o.passiveListeners) && {
                passive: !1,
                capture: !1,
              },
              d = !(!s.passiveListener || !o.passiveListeners) && {
                passive: !0,
                capture: !1,
              };
            s.touch
              ? (l.removeEventListener(r.start, e.scrollbar.onDragStart, c),
                l.removeEventListener(r.move, e.scrollbar.onDragMove, c),
                l.removeEventListener(r.end, e.scrollbar.onDragEnd, d))
              : (l.removeEventListener(n.start, e.scrollbar.onDragStart, c),
                t.removeEventListener(n.move, e.scrollbar.onDragMove, c),
                t.removeEventListener(n.end, e.scrollbar.onDragEnd, d));
          }
        },
        init: function () {
          var e = this;
          if (e.params.scrollbar.el) {
            var t = e.scrollbar,
              a = e.$el,
              r = e.params.scrollbar,
              n = f(r.el);
            e.params.uniqueNavElements &&
              "string" == typeof r.el &&
              n.length > 1 &&
              1 === a.find(r.el).length &&
              (n = a.find(r.el));
            var i = n.find("." + e.params.scrollbar.dragClass);
            0 === i.length &&
              ((i = f(
                '<div class="' + e.params.scrollbar.dragClass + '"></div>'
              )),
              n.append(i)),
              S(t, { $el: n, el: n[0], $dragEl: i, dragEl: i[0] }),
              r.draggable && t.enableDraggable();
          }
        },
        destroy: function () {
          this.scrollbar.disableDraggable();
        },
      },
      Y = {
        setTransform: function (e, t) {
          var a = this.rtl,
            r = f(e),
            n = a ? -1 : 1,
            i = r.attr("data-swiper-parallax") || "0",
            o = r.attr("data-swiper-parallax-x"),
            s = r.attr("data-swiper-parallax-y"),
            l = r.attr("data-swiper-parallax-scale"),
            c = r.attr("data-swiper-parallax-opacity");
          if (
            (o || s
              ? ((o = o || "0"), (s = s || "0"))
              : this.isHorizontal()
              ? ((o = i), (s = "0"))
              : ((s = i), (o = "0")),
            (o =
              o.indexOf("%") >= 0
                ? parseInt(o, 10) * t * n + "%"
                : o * t * n + "px"),
            (s =
              s.indexOf("%") >= 0 ? parseInt(s, 10) * t + "%" : s * t + "px"),
            null != c)
          ) {
            var d = c - (c - 1) * (1 - Math.abs(t));
            r[0].style.opacity = d;
          }
          if (null == l) r.transform("translate3d(" + o + ", " + s + ", 0px)");
          else {
            var u = l - (l - 1) * (1 - Math.abs(t));
            r.transform(
              "translate3d(" + o + ", " + s + ", 0px) scale(" + u + ")"
            );
          }
        },
        setTranslate: function () {
          var e = this,
            t = e.$el,
            a = e.slides,
            r = e.progress,
            n = e.snapGrid;
          t
            .children(
              "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
            )
            .each(function (t) {
              e.parallax.setTransform(t, r);
            }),
            a.each(function (t, a) {
              var i = t.progress;
              e.params.slidesPerGroup > 1 &&
                "auto" !== e.params.slidesPerView &&
                (i += Math.ceil(a / 2) - r * (n.length - 1)),
                (i = Math.min(Math.max(i, -1), 1)),
                f(t)
                  .find(
                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                  )
                  .each(function (t) {
                    e.parallax.setTransform(t, i);
                  });
            });
        },
        setTransition: function (e) {
          void 0 === e && (e = this.params.speed),
            this.$el
              .find(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
              )
              .each(function (t) {
                var a = f(t),
                  r =
                    parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
                0 === e && (r = 0), a.transition(r);
              });
        },
      },
      X = {
        getDistanceBetweenTouches: function (e) {
          if (e.targetTouches.length < 2) return 1;
          var t = e.targetTouches[0].pageX,
            a = e.targetTouches[0].pageY,
            r = e.targetTouches[1].pageX,
            n = e.targetTouches[1].pageY;
          return Math.sqrt(Math.pow(r - t, 2) + Math.pow(n - a, 2));
        },
        onGestureStart: function (e) {
          var t = this,
            a = t.support,
            r = t.params.zoom,
            n = t.zoom,
            i = n.gesture;
          if (
            ((n.fakeGestureTouched = !1),
            (n.fakeGestureMoved = !1),
            !a.gestures)
          ) {
            if (
              "touchstart" !== e.type ||
              ("touchstart" === e.type && e.targetTouches.length < 2)
            )
              return;
            (n.fakeGestureTouched = !0),
              (i.scaleStart = X.getDistanceBetweenTouches(e));
          }
          (i.$slideEl && i.$slideEl.length) ||
          ((i.$slideEl = f(e.target).closest("." + t.params.slideClass)),
          0 === i.$slideEl.length && (i.$slideEl = t.slides.eq(t.activeIndex)),
          (i.$imageEl = i.$slideEl.find(
            "img, svg, canvas, picture, .swiper-zoom-target"
          )),
          (i.$imageWrapEl = i.$imageEl.parent("." + r.containerClass)),
          (i.maxRatio = i.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio),
          0 !== i.$imageWrapEl.length)
            ? (i.$imageEl && i.$imageEl.transition(0), (t.zoom.isScaling = !0))
            : (i.$imageEl = void 0);
        },
        onGestureChange: function (e) {
          var t = this,
            a = t.support,
            r = t.params.zoom,
            n = t.zoom,
            i = n.gesture;
          if (!a.gestures) {
            if (
              "touchmove" !== e.type ||
              ("touchmove" === e.type && e.targetTouches.length < 2)
            )
              return;
            (n.fakeGestureMoved = !0),
              (i.scaleMove = X.getDistanceBetweenTouches(e));
          }
          i.$imageEl && 0 !== i.$imageEl.length
            ? (a.gestures
                ? (n.scale = e.scale * n.currentScale)
                : (n.scale = (i.scaleMove / i.scaleStart) * n.currentScale),
              n.scale > i.maxRatio &&
                (n.scale =
                  i.maxRatio - 1 + Math.pow(n.scale - i.maxRatio + 1, 0.5)),
              n.scale < r.minRatio &&
                (n.scale =
                  r.minRatio + 1 - Math.pow(r.minRatio - n.scale + 1, 0.5)),
              i.$imageEl.transform("translate3d(0,0,0) scale(" + n.scale + ")"))
            : "gesturechange" === e.type && n.onGestureStart(e);
        },
        onGestureEnd: function (e) {
          var t = this,
            a = t.device,
            r = t.support,
            n = t.params.zoom,
            i = t.zoom,
            o = i.gesture;
          if (!r.gestures) {
            if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
            if (
              "touchend" !== e.type ||
              ("touchend" === e.type &&
                e.changedTouches.length < 2 &&
                !a.android)
            )
              return;
            (i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1);
          }
          o.$imageEl &&
            0 !== o.$imageEl.length &&
            ((i.scale = Math.max(Math.min(i.scale, o.maxRatio), n.minRatio)),
            o.$imageEl
              .transition(t.params.speed)
              .transform("translate3d(0,0,0) scale(" + i.scale + ")"),
            (i.currentScale = i.scale),
            (i.isScaling = !1),
            1 === i.scale && (o.$slideEl = void 0));
        },
        onTouchStart: function (e) {
          var t = this.device,
            a = this.zoom,
            r = a.gesture,
            n = a.image;
          r.$imageEl &&
            0 !== r.$imageEl.length &&
            (n.isTouched ||
              (t.android && e.cancelable && e.preventDefault(),
              (n.isTouched = !0),
              (n.touchesStart.x =
                "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
              (n.touchesStart.y =
                "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
        },
        onTouchMove: function (e) {
          var t = this,
            a = t.zoom,
            r = a.gesture,
            n = a.image,
            i = a.velocity;
          if (
            r.$imageEl &&
            0 !== r.$imageEl.length &&
            ((t.allowClick = !1), n.isTouched && r.$slideEl)
          ) {
            n.isMoved ||
              ((n.width = r.$imageEl[0].offsetWidth),
              (n.height = r.$imageEl[0].offsetHeight),
              (n.startX = T(r.$imageWrapEl[0], "x") || 0),
              (n.startY = T(r.$imageWrapEl[0], "y") || 0),
              (r.slideWidth = r.$slideEl[0].offsetWidth),
              (r.slideHeight = r.$slideEl[0].offsetHeight),
              r.$imageWrapEl.transition(0),
              t.rtl && ((n.startX = -n.startX), (n.startY = -n.startY)));
            var o = n.width * a.scale,
              s = n.height * a.scale;
            if (!(o < r.slideWidth && s < r.slideHeight)) {
              if (
                ((n.minX = Math.min(r.slideWidth / 2 - o / 2, 0)),
                (n.maxX = -n.minX),
                (n.minY = Math.min(r.slideHeight / 2 - s / 2, 0)),
                (n.maxY = -n.minY),
                (n.touchesCurrent.x =
                  "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
                (n.touchesCurrent.y =
                  "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
                !n.isMoved && !a.isScaling)
              ) {
                if (
                  t.isHorizontal() &&
                  ((Math.floor(n.minX) === Math.floor(n.startX) &&
                    n.touchesCurrent.x < n.touchesStart.x) ||
                    (Math.floor(n.maxX) === Math.floor(n.startX) &&
                      n.touchesCurrent.x > n.touchesStart.x))
                )
                  return void (n.isTouched = !1);
                if (
                  !t.isHorizontal() &&
                  ((Math.floor(n.minY) === Math.floor(n.startY) &&
                    n.touchesCurrent.y < n.touchesStart.y) ||
                    (Math.floor(n.maxY) === Math.floor(n.startY) &&
                      n.touchesCurrent.y > n.touchesStart.y))
                )
                  return void (n.isTouched = !1);
              }
              e.cancelable && e.preventDefault(),
                e.stopPropagation(),
                (n.isMoved = !0),
                (n.currentX = n.touchesCurrent.x - n.touchesStart.x + n.startX),
                (n.currentY = n.touchesCurrent.y - n.touchesStart.y + n.startY),
                n.currentX < n.minX &&
                  (n.currentX =
                    n.minX + 1 - Math.pow(n.minX - n.currentX + 1, 0.8)),
                n.currentX > n.maxX &&
                  (n.currentX =
                    n.maxX - 1 + Math.pow(n.currentX - n.maxX + 1, 0.8)),
                n.currentY < n.minY &&
                  (n.currentY =
                    n.minY + 1 - Math.pow(n.minY - n.currentY + 1, 0.8)),
                n.currentY > n.maxY &&
                  (n.currentY =
                    n.maxY - 1 + Math.pow(n.currentY - n.maxY + 1, 0.8)),
                i.prevPositionX || (i.prevPositionX = n.touchesCurrent.x),
                i.prevPositionY || (i.prevPositionY = n.touchesCurrent.y),
                i.prevTime || (i.prevTime = Date.now()),
                (i.x =
                  (n.touchesCurrent.x - i.prevPositionX) /
                  (Date.now() - i.prevTime) /
                  2),
                (i.y =
                  (n.touchesCurrent.y - i.prevPositionY) /
                  (Date.now() - i.prevTime) /
                  2),
                Math.abs(n.touchesCurrent.x - i.prevPositionX) < 2 && (i.x = 0),
                Math.abs(n.touchesCurrent.y - i.prevPositionY) < 2 && (i.y = 0),
                (i.prevPositionX = n.touchesCurrent.x),
                (i.prevPositionY = n.touchesCurrent.y),
                (i.prevTime = Date.now()),
                r.$imageWrapEl.transform(
                  "translate3d(" + n.currentX + "px, " + n.currentY + "px,0)"
                );
            }
          }
        },
        onTouchEnd: function () {
          var e = this.zoom,
            t = e.gesture,
            a = e.image,
            r = e.velocity;
          if (t.$imageEl && 0 !== t.$imageEl.length) {
            if (!a.isTouched || !a.isMoved)
              return (a.isTouched = !1), void (a.isMoved = !1);
            (a.isTouched = !1), (a.isMoved = !1);
            var n = 300,
              i = 300,
              o = r.x * n,
              s = a.currentX + o,
              l = r.y * i,
              c = a.currentY + l;
            0 !== r.x && (n = Math.abs((s - a.currentX) / r.x)),
              0 !== r.y && (i = Math.abs((c - a.currentY) / r.y));
            var d = Math.max(n, i);
            (a.currentX = s), (a.currentY = c);
            var u = a.width * e.scale,
              p = a.height * e.scale;
            (a.minX = Math.min(t.slideWidth / 2 - u / 2, 0)),
              (a.maxX = -a.minX),
              (a.minY = Math.min(t.slideHeight / 2 - p / 2, 0)),
              (a.maxY = -a.minY),
              (a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX)),
              (a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY)),
              t.$imageWrapEl
                .transition(d)
                .transform(
                  "translate3d(" + a.currentX + "px, " + a.currentY + "px,0)"
                );
          }
        },
        onTransitionEnd: function () {
          var e = this,
            t = e.zoom,
            a = t.gesture;
          a.$slideEl &&
            e.previousIndex !== e.activeIndex &&
            (a.$imageEl && a.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            a.$imageWrapEl && a.$imageWrapEl.transform("translate3d(0,0,0)"),
            (t.scale = 1),
            (t.currentScale = 1),
            (a.$slideEl = void 0),
            (a.$imageEl = void 0),
            (a.$imageWrapEl = void 0));
        },
        toggle: function (e) {
          var t = this.zoom;
          t.scale && 1 !== t.scale ? t.out() : t.in(e);
        },
        in: function (e) {
          var t,
            a,
            r,
            n,
            i,
            o,
            s,
            l,
            c,
            d,
            u,
            p,
            h,
            m,
            f,
            v,
            g = this,
            y = g.zoom,
            b = g.params.zoom,
            w = y.gesture,
            C = y.image;
          w.$slideEl ||
            (g.params.virtual && g.params.virtual.enabled && g.virtual
              ? (w.$slideEl = g.$wrapperEl.children(
                  "." + g.params.slideActiveClass
                ))
              : (w.$slideEl = g.slides.eq(g.activeIndex)),
            (w.$imageEl = w.$slideEl.find(
              "img, svg, canvas, picture, .swiper-zoom-target"
            )),
            (w.$imageWrapEl = w.$imageEl.parent("." + b.containerClass))),
            w.$imageEl &&
              0 !== w.$imageEl.length &&
              (w.$slideEl.addClass("" + b.zoomedSlideClass),
              void 0 === C.touchesStart.x && e
                ? ((t =
                    "touchend" === e.type
                      ? e.changedTouches[0].pageX
                      : e.pageX),
                  (a =
                    "touchend" === e.type
                      ? e.changedTouches[0].pageY
                      : e.pageY))
                : ((t = C.touchesStart.x), (a = C.touchesStart.y)),
              (y.scale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio),
              (y.currentScale =
                w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio),
              e
                ? ((f = w.$slideEl[0].offsetWidth),
                  (v = w.$slideEl[0].offsetHeight),
                  (r = w.$slideEl.offset().left + f / 2 - t),
                  (n = w.$slideEl.offset().top + v / 2 - a),
                  (s = w.$imageEl[0].offsetWidth),
                  (l = w.$imageEl[0].offsetHeight),
                  (c = s * y.scale),
                  (d = l * y.scale),
                  (h = -(u = Math.min(f / 2 - c / 2, 0))),
                  (m = -(p = Math.min(v / 2 - d / 2, 0))),
                  (i = r * y.scale) < u && (i = u),
                  i > h && (i = h),
                  (o = n * y.scale) < p && (o = p),
                  o > m && (o = m))
                : ((i = 0), (o = 0)),
              w.$imageWrapEl
                .transition(300)
                .transform("translate3d(" + i + "px, " + o + "px,0)"),
              w.$imageEl
                .transition(300)
                .transform("translate3d(0,0,0) scale(" + y.scale + ")"));
        },
        out: function () {
          var e = this,
            t = e.zoom,
            a = e.params.zoom,
            r = t.gesture;
          r.$slideEl ||
            (e.params.virtual && e.params.virtual.enabled && e.virtual
              ? (r.$slideEl = e.$wrapperEl.children(
                  "." + e.params.slideActiveClass
                ))
              : (r.$slideEl = e.slides.eq(e.activeIndex)),
            (r.$imageEl = r.$slideEl.find(
              "img, svg, canvas, picture, .swiper-zoom-target"
            )),
            (r.$imageWrapEl = r.$imageEl.parent("." + a.containerClass))),
            r.$imageEl &&
              0 !== r.$imageEl.length &&
              ((t.scale = 1),
              (t.currentScale = 1),
              r.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
              r.$imageEl
                .transition(300)
                .transform("translate3d(0,0,0) scale(1)"),
              r.$slideEl.removeClass("" + a.zoomedSlideClass),
              (r.$slideEl = void 0));
        },
        toggleGestures: function (e) {
          var t = this,
            a = t.zoom,
            r = a.slideSelector,
            n = a.passiveListener;
          t.$wrapperEl[e]("gesturestart", r, a.onGestureStart, n),
            t.$wrapperEl[e]("gesturechange", r, a.onGestureChange, n),
            t.$wrapperEl[e]("gestureend", r, a.onGestureEnd, n);
        },
        enableGestures: function () {
          this.zoom.gesturesEnabled ||
            ((this.zoom.gesturesEnabled = !0), this.zoom.toggleGestures("on"));
        },
        disableGestures: function () {
          this.zoom.gesturesEnabled &&
            ((this.zoom.gesturesEnabled = !1), this.zoom.toggleGestures("off"));
        },
        enable: function () {
          var e = this,
            t = e.support,
            a = e.zoom;
          if (!a.enabled) {
            a.enabled = !0;
            var r = !(
                "touchstart" !== e.touchEvents.start ||
                !t.passiveListener ||
                !e.params.passiveListeners
              ) && { passive: !0, capture: !1 },
              n = !t.passiveListener || { passive: !1, capture: !0 },
              i = "." + e.params.slideClass;
            (e.zoom.passiveListener = r),
              (e.zoom.slideSelector = i),
              t.gestures
                ? (e.$wrapperEl.on(
                    e.touchEvents.start,
                    e.zoom.enableGestures,
                    r
                  ),
                  e.$wrapperEl.on(e.touchEvents.end, e.zoom.disableGestures, r))
                : "touchstart" === e.touchEvents.start &&
                  (e.$wrapperEl.on(e.touchEvents.start, i, a.onGestureStart, r),
                  e.$wrapperEl.on(e.touchEvents.move, i, a.onGestureChange, n),
                  e.$wrapperEl.on(e.touchEvents.end, i, a.onGestureEnd, r),
                  e.touchEvents.cancel &&
                    e.$wrapperEl.on(
                      e.touchEvents.cancel,
                      i,
                      a.onGestureEnd,
                      r
                    )),
              e.$wrapperEl.on(
                e.touchEvents.move,
                "." + e.params.zoom.containerClass,
                a.onTouchMove,
                n
              );
          }
        },
        disable: function () {
          var e = this,
            t = e.zoom;
          if (t.enabled) {
            var a = e.support;
            e.zoom.enabled = !1;
            var r = !(
                "touchstart" !== e.touchEvents.start ||
                !a.passiveListener ||
                !e.params.passiveListeners
              ) && { passive: !0, capture: !1 },
              n = !a.passiveListener || { passive: !1, capture: !0 },
              i = "." + e.params.slideClass;
            a.gestures
              ? (e.$wrapperEl.off(
                  e.touchEvents.start,
                  e.zoom.enableGestures,
                  r
                ),
                e.$wrapperEl.off(e.touchEvents.end, e.zoom.disableGestures, r))
              : "touchstart" === e.touchEvents.start &&
                (e.$wrapperEl.off(e.touchEvents.start, i, t.onGestureStart, r),
                e.$wrapperEl.off(e.touchEvents.move, i, t.onGestureChange, n),
                e.$wrapperEl.off(e.touchEvents.end, i, t.onGestureEnd, r),
                e.touchEvents.cancel &&
                  e.$wrapperEl.off(e.touchEvents.cancel, i, t.onGestureEnd, r)),
              e.$wrapperEl.off(
                e.touchEvents.move,
                "." + e.params.zoom.containerClass,
                t.onTouchMove,
                n
              );
          }
        },
      },
      J = {
        loadInSlide: function (e, t) {
          void 0 === t && (t = !0);
          var a = this,
            r = a.params.lazy;
          if (void 0 !== e && 0 !== a.slides.length) {
            var n =
                a.virtual && a.params.virtual.enabled
                  ? a.$wrapperEl.children(
                      "." +
                        a.params.slideClass +
                        '[data-swiper-slide-index="' +
                        e +
                        '"]'
                    )
                  : a.slides.eq(e),
              i = n.find(
                "." +
                  r.elementClass +
                  ":not(." +
                  r.loadedClass +
                  "):not(." +
                  r.loadingClass +
                  ")"
              );
            !n.hasClass(r.elementClass) ||
              n.hasClass(r.loadedClass) ||
              n.hasClass(r.loadingClass) ||
              i.push(n[0]),
              0 !== i.length &&
                i.each(function (e) {
                  var i = f(e);
                  i.addClass(r.loadingClass);
                  var o = i.attr("data-background"),
                    s = i.attr("data-src"),
                    l = i.attr("data-srcset"),
                    c = i.attr("data-sizes"),
                    d = i.parent("picture");
                  a.loadImage(i[0], s || o, l, c, !1, function () {
                    if (null != a && a && (!a || a.params) && !a.destroyed) {
                      if (
                        (o
                          ? (i.css("background-image", 'url("' + o + '")'),
                            i.removeAttr("data-background"))
                          : (l &&
                              (i.attr("srcset", l),
                              i.removeAttr("data-srcset")),
                            c &&
                              (i.attr("sizes", c), i.removeAttr("data-sizes")),
                            d.length &&
                              d.children("source").each(function (e) {
                                var t = f(e);
                                t.attr("data-srcset") &&
                                  (t.attr("srcset", t.attr("data-srcset")),
                                  t.removeAttr("data-srcset"));
                              }),
                            s && (i.attr("src", s), i.removeAttr("data-src"))),
                        i.addClass(r.loadedClass).removeClass(r.loadingClass),
                        n.find("." + r.preloaderClass).remove(),
                        a.params.loop && t)
                      ) {
                        var e = n.attr("data-swiper-slide-index");
                        if (n.hasClass(a.params.slideDuplicateClass)) {
                          var u = a.$wrapperEl.children(
                            '[data-swiper-slide-index="' +
                              e +
                              '"]:not(.' +
                              a.params.slideDuplicateClass +
                              ")"
                          );
                          a.lazy.loadInSlide(u.index(), !1);
                        } else {
                          var p = a.$wrapperEl.children(
                            "." +
                              a.params.slideDuplicateClass +
                              '[data-swiper-slide-index="' +
                              e +
                              '"]'
                          );
                          a.lazy.loadInSlide(p.index(), !1);
                        }
                      }
                      a.emit("lazyImageReady", n[0], i[0]),
                        a.params.autoHeight && a.updateAutoHeight();
                    }
                  }),
                    a.emit("lazyImageLoad", n[0], i[0]);
                });
          }
        },
        load: function () {
          var e = this,
            t = e.$wrapperEl,
            a = e.params,
            r = e.slides,
            n = e.activeIndex,
            i = e.virtual && a.virtual.enabled,
            o = a.lazy,
            s = a.slidesPerView;
          function l(e) {
            if (i) {
              if (
                t.children(
                  "." + a.slideClass + '[data-swiper-slide-index="' + e + '"]'
                ).length
              )
                return !0;
            } else if (r[e]) return !0;
            return !1;
          }
          function c(e) {
            return i ? f(e).attr("data-swiper-slide-index") : f(e).index();
          }
          if (
            ("auto" === s && (s = 0),
            e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
            e.params.watchSlidesVisibility)
          )
            t.children("." + a.slideVisibleClass).each(function (t) {
              var a = i ? f(t).attr("data-swiper-slide-index") : f(t).index();
              e.lazy.loadInSlide(a);
            });
          else if (s > 1)
            for (var d = n; d < n + s; d += 1) l(d) && e.lazy.loadInSlide(d);
          else e.lazy.loadInSlide(n);
          if (o.loadPrevNext)
            if (s > 1 || (o.loadPrevNextAmount && o.loadPrevNextAmount > 1)) {
              for (
                var u = o.loadPrevNextAmount,
                  p = s,
                  h = Math.min(n + p + Math.max(u, p), r.length),
                  m = Math.max(n - Math.max(p, u), 0),
                  v = n + s;
                v < h;
                v += 1
              )
                l(v) && e.lazy.loadInSlide(v);
              for (var g = m; g < n; g += 1) l(g) && e.lazy.loadInSlide(g);
            } else {
              var y = t.children("." + a.slideNextClass);
              y.length > 0 && e.lazy.loadInSlide(c(y));
              var b = t.children("." + a.slidePrevClass);
              b.length > 0 && e.lazy.loadInSlide(c(b));
            }
        },
        checkInViewOnLoad: function () {
          var e = s(),
            t = this;
          if (t && !t.destroyed) {
            var a = t.params.lazy.scrollingElement
                ? f(t.params.lazy.scrollingElement)
                : f(e),
              r = a[0] === e,
              n = r ? e.innerWidth : a[0].offsetWidth,
              i = r ? e.innerHeight : a[0].offsetHeight,
              o = t.$el.offset(),
              l = !1;
            t.rtlTranslate && (o.left -= t.$el[0].scrollLeft);
            for (
              var c = [
                  [o.left, o.top],
                  [o.left + t.width, o.top],
                  [o.left, o.top + t.height],
                  [o.left + t.width, o.top + t.height],
                ],
                d = 0;
              d < c.length;
              d += 1
            ) {
              var u = c[d];
              if (u[0] >= 0 && u[0] <= n && u[1] >= 0 && u[1] <= i) {
                if (0 === u[0] && 0 === u[1]) continue;
                l = !0;
              }
            }
            l
              ? (t.lazy.load(), a.off("scroll", t.lazy.checkInViewOnLoad))
              : t.lazy.scrollHandlerAttached ||
                ((t.lazy.scrollHandlerAttached = !0),
                a.on("scroll", t.lazy.checkInViewOnLoad));
          }
        },
      },
      K = {
        LinearSpline: function (e, t) {
          var a, r, n, i, o;
          return (
            (this.x = e),
            (this.y = t),
            (this.lastIndex = e.length - 1),
            (this.interpolate = function (e) {
              return e
                ? ((o = (function (e, t) {
                    for (r = -1, a = e.length; a - r > 1; )
                      e[(n = (a + r) >> 1)] <= t ? (r = n) : (a = n);
                    return a;
                  })(this.x, e)),
                  (i = o - 1),
                  ((e - this.x[i]) * (this.y[o] - this.y[i])) /
                    (this.x[o] - this.x[i]) +
                    this.y[i])
                : 0;
            }),
            this
          );
        },
        getInterpolateFunction: function (e) {
          var t = this;
          t.controller.spline ||
            (t.controller.spline = t.params.loop
              ? new K.LinearSpline(t.slidesGrid, e.slidesGrid)
              : new K.LinearSpline(t.snapGrid, e.snapGrid));
        },
        setTranslate: function (e, t) {
          var a,
            r,
            n = this,
            i = n.controller.control,
            o = n.constructor;
          function s(e) {
            var t = n.rtlTranslate ? -n.translate : n.translate;
            "slide" === n.params.controller.by &&
              (n.controller.getInterpolateFunction(e),
              (r = -n.controller.spline.interpolate(-t))),
              (r && "container" !== n.params.controller.by) ||
                ((a =
                  (e.maxTranslate() - e.minTranslate()) /
                  (n.maxTranslate() - n.minTranslate())),
                (r = (t - n.minTranslate()) * a + e.minTranslate())),
              n.params.controller.inverse && (r = e.maxTranslate() - r),
              e.updateProgress(r),
              e.setTranslate(r, n),
              e.updateActiveIndex(),
              e.updateSlidesClasses();
          }
          if (Array.isArray(i))
            for (var l = 0; l < i.length; l += 1)
              i[l] !== t && i[l] instanceof o && s(i[l]);
          else i instanceof o && t !== i && s(i);
        },
        setTransition: function (e, t) {
          var a,
            r = this,
            n = r.constructor,
            i = r.controller.control;
          function o(t) {
            t.setTransition(e, r),
              0 !== e &&
                (t.transitionStart(),
                t.params.autoHeight &&
                  w(function () {
                    t.updateAutoHeight();
                  }),
                t.$wrapperEl.transitionEnd(function () {
                  i &&
                    (t.params.loop &&
                      "slide" === r.params.controller.by &&
                      t.loopFix(),
                    t.transitionEnd());
                }));
          }
          if (Array.isArray(i))
            for (a = 0; a < i.length; a += 1)
              i[a] !== t && i[a] instanceof n && o(i[a]);
          else i instanceof n && t !== i && o(i);
        },
      },
      Q = {
        getRandomNumber: function (e) {
          return (
            void 0 === e && (e = 16),
            "x".repeat(e).replace(/x/g, function () {
              return Math.round(16 * Math.random()).toString(16);
            })
          );
        },
        makeElFocusable: function (e) {
          return e.attr("tabIndex", "0"), e;
        },
        makeElNotFocusable: function (e) {
          return e.attr("tabIndex", "-1"), e;
        },
        addElRole: function (e, t) {
          return e.attr("role", t), e;
        },
        addElRoleDescription: function (e, t) {
          return e.attr("aria-role-description", t), e;
        },
        addElControls: function (e, t) {
          return e.attr("aria-controls", t), e;
        },
        addElLabel: function (e, t) {
          return e.attr("aria-label", t), e;
        },
        addElId: function (e, t) {
          return e.attr("id", t), e;
        },
        addElLive: function (e, t) {
          return e.attr("aria-live", t), e;
        },
        disableEl: function (e) {
          return e.attr("aria-disabled", !0), e;
        },
        enableEl: function (e) {
          return e.attr("aria-disabled", !1), e;
        },
        onEnterKey: function (e) {
          var t = this,
            a = t.params.a11y;
          if (13 === e.keyCode) {
            var r = f(e.target);
            t.navigation &&
              t.navigation.$nextEl &&
              r.is(t.navigation.$nextEl) &&
              ((t.isEnd && !t.params.loop) || t.slideNext(),
              t.isEnd
                ? t.a11y.notify(a.lastSlideMessage)
                : t.a11y.notify(a.nextSlideMessage)),
              t.navigation &&
                t.navigation.$prevEl &&
                r.is(t.navigation.$prevEl) &&
                ((t.isBeginning && !t.params.loop) || t.slidePrev(),
                t.isBeginning
                  ? t.a11y.notify(a.firstSlideMessage)
                  : t.a11y.notify(a.prevSlideMessage)),
              t.pagination &&
                r.is(
                  "." + t.params.pagination.bulletClass.replace(/ /g, ".")
                ) &&
                r[0].click();
          }
        },
        notify: function (e) {
          var t = this.a11y.liveRegion;
          0 !== t.length && (t.html(""), t.html(e));
        },
        updateNavigation: function () {
          var e = this;
          if (!e.params.loop && e.navigation) {
            var t = e.navigation,
              a = t.$nextEl,
              r = t.$prevEl;
            r &&
              r.length > 0 &&
              (e.isBeginning
                ? (e.a11y.disableEl(r), e.a11y.makeElNotFocusable(r))
                : (e.a11y.enableEl(r), e.a11y.makeElFocusable(r))),
              a &&
                a.length > 0 &&
                (e.isEnd
                  ? (e.a11y.disableEl(a), e.a11y.makeElNotFocusable(a))
                  : (e.a11y.enableEl(a), e.a11y.makeElFocusable(a)));
          }
        },
        updatePagination: function () {
          var e = this,
            t = e.params.a11y;
          e.pagination &&
            e.params.pagination.clickable &&
            e.pagination.bullets &&
            e.pagination.bullets.length &&
            e.pagination.bullets.each(function (a) {
              var r = f(a);
              e.a11y.makeElFocusable(r),
                e.params.pagination.renderBullet ||
                  (e.a11y.addElRole(r, "button"),
                  e.a11y.addElLabel(
                    r,
                    t.paginationBulletMessage.replace(
                      /\{\{index\}\}/,
                      r.index() + 1
                    )
                  ));
            });
        },
        init: function () {
          var e = this,
            t = e.params.a11y;
          e.$el.append(e.a11y.liveRegion);
          var a = e.$el;
          t.containerRoleDescriptionMessage &&
            e.a11y.addElRoleDescription(a, t.containerRoleDescriptionMessage),
            t.containerMessage && e.a11y.addElLabel(a, t.containerMessage);
          var r,
            n,
            i,
            o = e.$wrapperEl,
            s = o.attr("id") || "swiper-wrapper-" + e.a11y.getRandomNumber(16);
          e.a11y.addElId(o, s),
            (r =
              e.params.autoplay && e.params.autoplay.enabled
                ? "off"
                : "polite"),
            e.a11y.addElLive(o, r),
            t.itemRoleDescriptionMessage &&
              e.a11y.addElRoleDescription(
                f(e.slides),
                t.itemRoleDescriptionMessage
              ),
            e.a11y.addElRole(f(e.slides), "group"),
            e.slides.each(function (t) {
              var a = f(t);
              e.a11y.addElLabel(a, a.index() + 1 + " / " + e.slides.length);
            }),
            e.navigation && e.navigation.$nextEl && (n = e.navigation.$nextEl),
            e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl),
            n &&
              n.length &&
              (e.a11y.makeElFocusable(n),
              "BUTTON" !== n[0].tagName &&
                (e.a11y.addElRole(n, "button"),
                n.on("keydown", e.a11y.onEnterKey)),
              e.a11y.addElLabel(n, t.nextSlideMessage),
              e.a11y.addElControls(n, s)),
            i &&
              i.length &&
              (e.a11y.makeElFocusable(i),
              "BUTTON" !== i[0].tagName &&
                (e.a11y.addElRole(i, "button"),
                i.on("keydown", e.a11y.onEnterKey)),
              e.a11y.addElLabel(i, t.prevSlideMessage),
              e.a11y.addElControls(i, s)),
            e.pagination &&
              e.params.pagination.clickable &&
              e.pagination.bullets &&
              e.pagination.bullets.length &&
              e.pagination.$el.on(
                "keydown",
                "." + e.params.pagination.bulletClass.replace(/ /g, "."),
                e.a11y.onEnterKey
              );
        },
        destroy: function () {
          var e,
            t,
            a = this;
          a.a11y.liveRegion &&
            a.a11y.liveRegion.length > 0 &&
            a.a11y.liveRegion.remove(),
            a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl),
            a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl),
            e && e.off("keydown", a.a11y.onEnterKey),
            t && t.off("keydown", a.a11y.onEnterKey),
            a.pagination &&
              a.params.pagination.clickable &&
              a.pagination.bullets &&
              a.pagination.bullets.length &&
              a.pagination.$el.off(
                "keydown",
                "." + a.params.pagination.bulletClass.replace(/ /g, "."),
                a.a11y.onEnterKey
              );
        },
      },
      Z = {
        init: function () {
          var e = this,
            t = s();
          if (e.params.history) {
            if (!t.history || !t.history.pushState)
              return (
                (e.params.history.enabled = !1),
                void (e.params.hashNavigation.enabled = !0)
              );
            var a = e.history;
            (a.initialized = !0),
              (a.paths = Z.getPathValues(e.params.url)),
              (a.paths.key || a.paths.value) &&
                (a.scrollToSlide(0, a.paths.value, e.params.runCallbacksOnInit),
                e.params.history.replaceState ||
                  t.addEventListener("popstate", e.history.setHistoryPopState));
          }
        },
        destroy: function () {
          var e = s();
          this.params.history.replaceState ||
            e.removeEventListener("popstate", this.history.setHistoryPopState);
        },
        setHistoryPopState: function () {
          var e = this;
          (e.history.paths = Z.getPathValues(e.params.url)),
            e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1);
        },
        getPathValues: function (e) {
          var t = s(),
            a = (e ? new URL(e) : t.location).pathname
              .slice(1)
              .split("/")
              .filter(function (e) {
                return "" !== e;
              }),
            r = a.length;
          return { key: a[r - 2], value: a[r - 1] };
        },
        setHistory: function (e, t) {
          var a = this,
            r = s();
          if (a.history.initialized && a.params.history.enabled) {
            var n;
            n = a.params.url ? new URL(a.params.url) : r.location;
            var i = a.slides.eq(t),
              o = Z.slugify(i.attr("data-history"));
            n.pathname.includes(e) || (o = e + "/" + o);
            var l = r.history.state;
            (l && l.value === o) ||
              (a.params.history.replaceState
                ? r.history.replaceState({ value: o }, null, o)
                : r.history.pushState({ value: o }, null, o));
          }
        },
        slugify: function (e) {
          return e
            .toString()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "")
            .replace(/--+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, "");
        },
        scrollToSlide: function (e, t, a) {
          var r = this;
          if (t)
            for (var n = 0, i = r.slides.length; n < i; n += 1) {
              var o = r.slides.eq(n);
              if (
                Z.slugify(o.attr("data-history")) === t &&
                !o.hasClass(r.params.slideDuplicateClass)
              ) {
                var s = o.index();
                r.slideTo(s, e, a);
              }
            }
          else r.slideTo(0, e, a);
        },
      },
      ee = {
        onHashCange: function () {
          var e = this,
            t = i();
          e.emit("hashChange");
          var a = t.location.hash.replace("#", "");
          if (a !== e.slides.eq(e.activeIndex).attr("data-hash")) {
            var r = e.$wrapperEl
              .children("." + e.params.slideClass + '[data-hash="' + a + '"]')
              .index();
            if (void 0 === r) return;
            e.slideTo(r);
          }
        },
        setHash: function () {
          var e = this,
            t = s(),
            a = i();
          if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
            if (
              e.params.hashNavigation.replaceState &&
              t.history &&
              t.history.replaceState
            )
              t.history.replaceState(
                null,
                null,
                "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""
              ),
                e.emit("hashSet");
            else {
              var r = e.slides.eq(e.activeIndex),
                n = r.attr("data-hash") || r.attr("data-history");
              (a.location.hash = n || ""), e.emit("hashSet");
            }
        },
        init: function () {
          var e = this,
            t = i(),
            a = s();
          if (
            !(
              !e.params.hashNavigation.enabled ||
              (e.params.history && e.params.history.enabled)
            )
          ) {
            e.hashNavigation.initialized = !0;
            var r = t.location.hash.replace("#", "");
            if (r)
              for (var n = 0, o = e.slides.length; n < o; n += 1) {
                var l = e.slides.eq(n);
                if (
                  (l.attr("data-hash") || l.attr("data-history")) === r &&
                  !l.hasClass(e.params.slideDuplicateClass)
                ) {
                  var c = l.index();
                  e.slideTo(c, 0, e.params.runCallbacksOnInit, !0);
                }
              }
            e.params.hashNavigation.watchState &&
              f(a).on("hashchange", e.hashNavigation.onHashCange);
          }
        },
        destroy: function () {
          var e = s();
          this.params.hashNavigation.watchState &&
            f(e).off("hashchange", this.hashNavigation.onHashCange);
        },
      },
      te = {
        run: function () {
          var e = this,
            t = e.slides.eq(e.activeIndex),
            a = e.params.autoplay.delay;
          t.attr("data-swiper-autoplay") &&
            (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            clearTimeout(e.autoplay.timeout),
            (e.autoplay.timeout = w(function () {
              var t;
              e.params.autoplay.reverseDirection
                ? e.params.loop
                  ? (e.loopFix(),
                    (t = e.slidePrev(e.params.speed, !0, !0)),
                    e.emit("autoplay"))
                  : e.isBeginning
                  ? e.params.autoplay.stopOnLastSlide
                    ? e.autoplay.stop()
                    : ((t = e.slideTo(
                        e.slides.length - 1,
                        e.params.speed,
                        !0,
                        !0
                      )),
                      e.emit("autoplay"))
                  : ((t = e.slidePrev(e.params.speed, !0, !0)),
                    e.emit("autoplay"))
                : e.params.loop
                ? (e.loopFix(),
                  (t = e.slideNext(e.params.speed, !0, !0)),
                  e.emit("autoplay"))
                : e.isEnd
                ? e.params.autoplay.stopOnLastSlide
                  ? e.autoplay.stop()
                  : ((t = e.slideTo(0, e.params.speed, !0, !0)),
                    e.emit("autoplay"))
                : ((t = e.slideNext(e.params.speed, !0, !0)),
                  e.emit("autoplay")),
                ((e.params.cssMode && e.autoplay.running) || !1 === t) &&
                  e.autoplay.run();
            }, a));
        },
        start: function () {
          var e = this;
          return (
            void 0 === e.autoplay.timeout &&
            !e.autoplay.running &&
            ((e.autoplay.running = !0),
            e.emit("autoplayStart"),
            e.autoplay.run(),
            !0)
          );
        },
        stop: function () {
          var e = this;
          return (
            !!e.autoplay.running &&
            void 0 !== e.autoplay.timeout &&
            (e.autoplay.timeout &&
              (clearTimeout(e.autoplay.timeout), (e.autoplay.timeout = void 0)),
            (e.autoplay.running = !1),
            e.emit("autoplayStop"),
            !0)
          );
        },
        pause: function (e) {
          var t = this;
          t.autoplay.running &&
            (t.autoplay.paused ||
              (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
              (t.autoplay.paused = !0),
              0 !== e && t.params.autoplay.waitForTransition
                ? (t.$wrapperEl[0].addEventListener(
                    "transitionend",
                    t.autoplay.onTransitionEnd
                  ),
                  t.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    t.autoplay.onTransitionEnd
                  ))
                : ((t.autoplay.paused = !1), t.autoplay.run())));
        },
        onVisibilityChange: function () {
          var e = this,
            t = i();
          "hidden" === t.visibilityState &&
            e.autoplay.running &&
            e.autoplay.pause(),
            "visible" === t.visibilityState &&
              e.autoplay.paused &&
              (e.autoplay.run(), (e.autoplay.paused = !1));
        },
        onTransitionEnd: function (e) {
          var t = this;
          t &&
            !t.destroyed &&
            t.$wrapperEl &&
            e.target === t.$wrapperEl[0] &&
            (t.$wrapperEl[0].removeEventListener(
              "transitionend",
              t.autoplay.onTransitionEnd
            ),
            t.$wrapperEl[0].removeEventListener(
              "webkitTransitionEnd",
              t.autoplay.onTransitionEnd
            ),
            (t.autoplay.paused = !1),
            t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
        },
      },
      ae = {
        setTranslate: function () {
          for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
            var r = e.slides.eq(a),
              n = -r[0].swiperSlideOffset;
            e.params.virtualTranslate || (n -= e.translate);
            var i = 0;
            e.isHorizontal() || ((i = n), (n = 0));
            var o = e.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs(r[0].progress), 0)
              : 1 + Math.min(Math.max(r[0].progress, -1), 0);
            r.css({ opacity: o }).transform(
              "translate3d(" + n + "px, " + i + "px, 0px)"
            );
          }
        },
        setTransition: function (e) {
          var t = this,
            a = t.slides,
            r = t.$wrapperEl;
          if ((a.transition(e), t.params.virtualTranslate && 0 !== e)) {
            var n = !1;
            a.transitionEnd(function () {
              if (!n && t && !t.destroyed) {
                (n = !0), (t.animating = !1);
                for (
                  var e = ["webkitTransitionEnd", "transitionend"], a = 0;
                  a < e.length;
                  a += 1
                )
                  r.trigger(e[a]);
              }
            });
          }
        },
      },
      re = {
        setTranslate: function () {
          var e,
            t = this,
            a = t.$el,
            r = t.$wrapperEl,
            n = t.slides,
            i = t.width,
            o = t.height,
            s = t.rtlTranslate,
            l = t.size,
            c = t.browser,
            d = t.params.cubeEffect,
            u = t.isHorizontal(),
            p = t.virtual && t.params.virtual.enabled,
            h = 0;
          d.shadow &&
            (u
              ? (0 === (e = r.find(".swiper-cube-shadow")).length &&
                  ((e = f('<div class="swiper-cube-shadow"></div>')),
                  r.append(e)),
                e.css({ height: i + "px" }))
              : 0 === (e = a.find(".swiper-cube-shadow")).length &&
                ((e = f('<div class="swiper-cube-shadow"></div>')),
                a.append(e)));
          for (var m = 0; m < n.length; m += 1) {
            var v = n.eq(m),
              g = m;
            p && (g = parseInt(v.attr("data-swiper-slide-index"), 10));
            var y = 90 * g,
              b = Math.floor(y / 360);
            s && ((y = -y), (b = Math.floor(-y / 360)));
            var w = Math.max(Math.min(v[0].progress, 1), -1),
              C = 0,
              T = 0,
              k = 0;
            g % 4 == 0
              ? ((C = 4 * -b * l), (k = 0))
              : (g - 1) % 4 == 0
              ? ((C = 0), (k = 4 * -b * l))
              : (g - 2) % 4 == 0
              ? ((C = l + 4 * b * l), (k = l))
              : (g - 3) % 4 == 0 && ((C = -l), (k = 3 * l + 4 * l * b)),
              s && (C = -C),
              u || ((T = C), (C = 0));
            var S =
              "rotateX(" +
              (u ? 0 : -y) +
              "deg) rotateY(" +
              (u ? y : 0) +
              "deg) translate3d(" +
              C +
              "px, " +
              T +
              "px, " +
              k +
              "px)";
            if (
              (w <= 1 &&
                w > -1 &&
                ((h = 90 * g + 90 * w), s && (h = 90 * -g - 90 * w)),
              v.transform(S),
              d.slideShadows)
            ) {
              var x = u
                  ? v.find(".swiper-slide-shadow-left")
                  : v.find(".swiper-slide-shadow-top"),
                _ = u
                  ? v.find(".swiper-slide-shadow-right")
                  : v.find(".swiper-slide-shadow-bottom");
              0 === x.length &&
                ((x = f(
                  '<div class="swiper-slide-shadow-' +
                    (u ? "left" : "top") +
                    '"></div>'
                )),
                v.append(x)),
                0 === _.length &&
                  ((_ = f(
                    '<div class="swiper-slide-shadow-' +
                      (u ? "right" : "bottom") +
                      '"></div>'
                  )),
                  v.append(_)),
                x.length && (x[0].style.opacity = Math.max(-w, 0)),
                _.length && (_[0].style.opacity = Math.max(w, 0));
            }
          }
          if (
            (r.css({
              "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
              "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
              "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
              "transform-origin": "50% 50% -" + l / 2 + "px",
            }),
            d.shadow)
          )
            if (u)
              e.transform(
                "translate3d(0px, " +
                  (i / 2 + d.shadowOffset) +
                  "px, " +
                  -i / 2 +
                  "px) rotateX(90deg) rotateZ(0deg) scale(" +
                  d.shadowScale +
                  ")"
              );
            else {
              var E = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                M =
                  1.5 -
                  (Math.sin((2 * E * Math.PI) / 360) / 2 +
                    Math.cos((2 * E * Math.PI) / 360) / 2),
                P = d.shadowScale,
                $ = d.shadowScale / M,
                L = d.shadowOffset;
              e.transform(
                "scale3d(" +
                  P +
                  ", 1, " +
                  $ +
                  ") translate3d(0px, " +
                  (o / 2 + L) +
                  "px, " +
                  -o / 2 / $ +
                  "px) rotateX(-90deg)"
              );
            }
          var N = c.isSafari || c.isWebView ? -l / 2 : 0;
          r.transform(
            "translate3d(0px,0," +
              N +
              "px) rotateX(" +
              (t.isHorizontal() ? 0 : h) +
              "deg) rotateY(" +
              (t.isHorizontal() ? -h : 0) +
              "deg)"
          );
        },
        setTransition: function (e) {
          var t = this,
            a = t.$el;
          t.slides
            .transition(e)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(e),
            t.params.cubeEffect.shadow &&
              !t.isHorizontal() &&
              a.find(".swiper-cube-shadow").transition(e);
        },
      },
      ne = {
        setTranslate: function () {
          for (
            var e = this, t = e.slides, a = e.rtlTranslate, r = 0;
            r < t.length;
            r += 1
          ) {
            var n = t.eq(r),
              i = n[0].progress;
            e.params.flipEffect.limitRotation &&
              (i = Math.max(Math.min(n[0].progress, 1), -1));
            var o = -180 * i,
              s = 0,
              l = -n[0].swiperSlideOffset,
              c = 0;
            if (
              (e.isHorizontal()
                ? a && (o = -o)
                : ((c = l), (l = 0), (s = -o), (o = 0)),
              (n[0].style.zIndex = -Math.abs(Math.round(i)) + t.length),
              e.params.flipEffect.slideShadows)
            ) {
              var d = e.isHorizontal()
                  ? n.find(".swiper-slide-shadow-left")
                  : n.find(".swiper-slide-shadow-top"),
                u = e.isHorizontal()
                  ? n.find(".swiper-slide-shadow-right")
                  : n.find(".swiper-slide-shadow-bottom");
              0 === d.length &&
                ((d = f(
                  '<div class="swiper-slide-shadow-' +
                    (e.isHorizontal() ? "left" : "top") +
                    '"></div>'
                )),
                n.append(d)),
                0 === u.length &&
                  ((u = f(
                    '<div class="swiper-slide-shadow-' +
                      (e.isHorizontal() ? "right" : "bottom") +
                      '"></div>'
                  )),
                  n.append(u)),
                d.length && (d[0].style.opacity = Math.max(-i, 0)),
                u.length && (u[0].style.opacity = Math.max(i, 0));
            }
            n.transform(
              "translate3d(" +
                l +
                "px, " +
                c +
                "px, 0px) rotateX(" +
                s +
                "deg) rotateY(" +
                o +
                "deg)"
            );
          }
        },
        setTransition: function (e) {
          var t = this,
            a = t.slides,
            r = t.activeIndex,
            n = t.$wrapperEl;
          if (
            (a
              .transition(e)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(e),
            t.params.virtualTranslate && 0 !== e)
          ) {
            var i = !1;
            a.eq(r).transitionEnd(function () {
              if (!i && t && !t.destroyed) {
                (i = !0), (t.animating = !1);
                for (
                  var e = ["webkitTransitionEnd", "transitionend"], a = 0;
                  a < e.length;
                  a += 1
                )
                  n.trigger(e[a]);
              }
            });
          }
        },
      },
      ie = {
        setTranslate: function () {
          for (
            var e = this,
              t = e.width,
              a = e.height,
              r = e.slides,
              n = e.slidesSizesGrid,
              i = e.params.coverflowEffect,
              o = e.isHorizontal(),
              s = e.translate,
              l = o ? t / 2 - s : a / 2 - s,
              c = o ? i.rotate : -i.rotate,
              d = i.depth,
              u = 0,
              p = r.length;
            u < p;
            u += 1
          ) {
            var h = r.eq(u),
              m = n[u],
              v = ((l - h[0].swiperSlideOffset - m / 2) / m) * i.modifier,
              g = o ? c * v : 0,
              y = o ? 0 : c * v,
              b = -d * Math.abs(v),
              w = i.stretch;
            "string" == typeof w &&
              -1 !== w.indexOf("%") &&
              (w = (parseFloat(i.stretch) / 100) * m);
            var C = o ? 0 : w * v,
              T = o ? w * v : 0,
              k = 1 - (1 - i.scale) * Math.abs(v);
            Math.abs(T) < 0.001 && (T = 0),
              Math.abs(C) < 0.001 && (C = 0),
              Math.abs(b) < 0.001 && (b = 0),
              Math.abs(g) < 0.001 && (g = 0),
              Math.abs(y) < 0.001 && (y = 0),
              Math.abs(k) < 0.001 && (k = 0);
            var S =
              "translate3d(" +
              T +
              "px," +
              C +
              "px," +
              b +
              "px)  rotateX(" +
              y +
              "deg) rotateY(" +
              g +
              "deg) scale(" +
              k +
              ")";
            if (
              (h.transform(S),
              (h[0].style.zIndex = 1 - Math.abs(Math.round(v))),
              i.slideShadows)
            ) {
              var x = o
                  ? h.find(".swiper-slide-shadow-left")
                  : h.find(".swiper-slide-shadow-top"),
                _ = o
                  ? h.find(".swiper-slide-shadow-right")
                  : h.find(".swiper-slide-shadow-bottom");
              0 === x.length &&
                ((x = f(
                  '<div class="swiper-slide-shadow-' +
                    (o ? "left" : "top") +
                    '"></div>'
                )),
                h.append(x)),
                0 === _.length &&
                  ((_ = f(
                    '<div class="swiper-slide-shadow-' +
                      (o ? "right" : "bottom") +
                      '"></div>'
                  )),
                  h.append(_)),
                x.length && (x[0].style.opacity = v > 0 ? v : 0),
                _.length && (_[0].style.opacity = -v > 0 ? -v : 0);
            }
          }
        },
        setTransition: function (e) {
          this.slides
            .transition(e)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(e);
        },
      },
      oe = {
        init: function () {
          var e = this,
            t = e.params.thumbs;
          if (e.thumbs.initialized) return !1;
          e.thumbs.initialized = !0;
          var a = e.constructor;
          return (
            t.swiper instanceof a
              ? ((e.thumbs.swiper = t.swiper),
                S(e.thumbs.swiper.originalParams, {
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1,
                }),
                S(e.thumbs.swiper.params, {
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1,
                }))
              : k(t.swiper) &&
                ((e.thumbs.swiper = new a(
                  S({}, t.swiper, {
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                  })
                )),
                (e.thumbs.swiperCreated = !0)),
            e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
            e.thumbs.swiper.on("tap", e.thumbs.onThumbClick),
            !0
          );
        },
        onThumbClick: function () {
          var e = this,
            t = e.thumbs.swiper;
          if (t) {
            var a = t.clickedIndex,
              r = t.clickedSlide;
            if (
              !(
                (r && f(r).hasClass(e.params.thumbs.slideThumbActiveClass)) ||
                null == a
              )
            ) {
              var n;
              if (
                ((n = t.params.loop
                  ? parseInt(
                      f(t.clickedSlide).attr("data-swiper-slide-index"),
                      10
                    )
                  : a),
                e.params.loop)
              ) {
                var i = e.activeIndex;
                e.slides.eq(i).hasClass(e.params.slideDuplicateClass) &&
                  (e.loopFix(),
                  (e._clientLeft = e.$wrapperEl[0].clientLeft),
                  (i = e.activeIndex));
                var o = e.slides
                    .eq(i)
                    .prevAll('[data-swiper-slide-index="' + n + '"]')
                    .eq(0)
                    .index(),
                  s = e.slides
                    .eq(i)
                    .nextAll('[data-swiper-slide-index="' + n + '"]')
                    .eq(0)
                    .index();
                n = void 0 === o ? s : void 0 === s ? o : s - i < i - o ? s : o;
              }
              e.slideTo(n);
            }
          }
        },
        update: function (e) {
          var t = this,
            a = t.thumbs.swiper;
          if (a) {
            var r =
                "auto" === a.params.slidesPerView
                  ? a.slidesPerViewDynamic()
                  : a.params.slidesPerView,
              n = t.params.thumbs.autoScrollOffset,
              i = n && !a.params.loop;
            if (t.realIndex !== a.realIndex || i) {
              var o,
                s,
                l = a.activeIndex;
              if (a.params.loop) {
                a.slides.eq(l).hasClass(a.params.slideDuplicateClass) &&
                  (a.loopFix(),
                  (a._clientLeft = a.$wrapperEl[0].clientLeft),
                  (l = a.activeIndex));
                var c = a.slides
                    .eq(l)
                    .prevAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                    .eq(0)
                    .index(),
                  d = a.slides
                    .eq(l)
                    .nextAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                    .eq(0)
                    .index();
                (o =
                  void 0 === c
                    ? d
                    : void 0 === d
                    ? c
                    : d - l == l - c
                    ? l
                    : d - l < l - c
                    ? d
                    : c),
                  (s = t.activeIndex > t.previousIndex ? "next" : "prev");
              } else s = (o = t.realIndex) > t.previousIndex ? "next" : "prev";
              i && (o += "next" === s ? n : -1 * n),
                a.visibleSlidesIndexes &&
                  a.visibleSlidesIndexes.indexOf(o) < 0 &&
                  (a.params.centeredSlides
                    ? (o =
                        o > l
                          ? o - Math.floor(r / 2) + 1
                          : o + Math.floor(r / 2) - 1)
                    : o > l && (o = o - r + 1),
                  a.slideTo(o, e ? 0 : void 0));
            }
            var u = 1,
              p = t.params.thumbs.slideThumbActiveClass;
            if (
              (t.params.slidesPerView > 1 &&
                !t.params.centeredSlides &&
                (u = t.params.slidesPerView),
              t.params.thumbs.multipleActiveThumbs || (u = 1),
              (u = Math.floor(u)),
              a.slides.removeClass(p),
              a.params.loop || (a.params.virtual && a.params.virtual.enabled))
            )
              for (var h = 0; h < u; h += 1)
                a.$wrapperEl
                  .children(
                    '[data-swiper-slide-index="' + (t.realIndex + h) + '"]'
                  )
                  .addClass(p);
            else
              for (var m = 0; m < u; m += 1)
                a.slides.eq(t.realIndex + m).addClass(p);
          }
        },
      },
      se = [
        H,
        F,
        {
          name: "mousewheel",
          params: {
            mousewheel: {
              enabled: !1,
              releaseOnEdges: !1,
              invert: !1,
              forceToAxis: !1,
              sensitivity: 1,
              eventsTarget: "container",
              thresholdDelta: null,
              thresholdTime: null,
            },
          },
          create: function () {
            x(this, {
              mousewheel: {
                enabled: !1,
                lastScrollTime: C(),
                lastEventBeforeSnap: void 0,
                recentWheelEvents: [],
                enable: q.enable,
                disable: q.disable,
                handle: q.handle,
                handleMouseEnter: q.handleMouseEnter,
                handleMouseLeave: q.handleMouseLeave,
                animateSlider: q.animateSlider,
                releaseScroll: q.releaseScroll,
              },
            });
          },
          on: {
            init: function (e) {
              !e.params.mousewheel.enabled &&
                e.params.cssMode &&
                e.mousewheel.disable(),
                e.params.mousewheel.enabled && e.mousewheel.enable();
            },
            destroy: function (e) {
              e.params.cssMode && e.mousewheel.enable(),
                e.mousewheel.enabled && e.mousewheel.disable();
            },
          },
        },
        {
          name: "navigation",
          params: {
            navigation: {
              nextEl: null,
              prevEl: null,
              hideOnClick: !1,
              disabledClass: "swiper-button-disabled",
              hiddenClass: "swiper-button-hidden",
              lockClass: "swiper-button-lock",
            },
          },
          create: function () {
            x(this, { navigation: t({}, z) });
          },
          on: {
            init: function (e) {
              e.navigation.init(), e.navigation.update();
            },
            toEdge: function (e) {
              e.navigation.update();
            },
            fromEdge: function (e) {
              e.navigation.update();
            },
            destroy: function (e) {
              e.navigation.destroy();
            },
            click: function (e, t) {
              var a,
                r = e.navigation,
                n = r.$nextEl,
                i = r.$prevEl;
              !e.params.navigation.hideOnClick ||
                f(t.target).is(i) ||
                f(t.target).is(n) ||
                (n
                  ? (a = n.hasClass(e.params.navigation.hiddenClass))
                  : i && (a = i.hasClass(e.params.navigation.hiddenClass)),
                !0 === a ? e.emit("navigationShow") : e.emit("navigationHide"),
                n && n.toggleClass(e.params.navigation.hiddenClass),
                i && i.toggleClass(e.params.navigation.hiddenClass));
            },
          },
        },
        {
          name: "pagination",
          params: {
            pagination: {
              el: null,
              bulletElement: "span",
              clickable: !1,
              hideOnClick: !1,
              renderBullet: null,
              renderProgressbar: null,
              renderFraction: null,
              renderCustom: null,
              progressbarOpposite: !1,
              type: "bullets",
              dynamicBullets: !1,
              dynamicMainBullets: 1,
              formatFractionCurrent: function (e) {
                return e;
              },
              formatFractionTotal: function (e) {
                return e;
              },
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
              modifierClass: "swiper-pagination-",
              currentClass: "swiper-pagination-current",
              totalClass: "swiper-pagination-total",
              hiddenClass: "swiper-pagination-hidden",
              progressbarFillClass: "swiper-pagination-progressbar-fill",
              progressbarOppositeClass:
                "swiper-pagination-progressbar-opposite",
              clickableClass: "swiper-pagination-clickable",
              lockClass: "swiper-pagination-lock",
            },
          },
          create: function () {
            x(this, { pagination: t({ dynamicBulletIndex: 0 }, U) });
          },
          on: {
            init: function (e) {
              e.pagination.init(), e.pagination.render(), e.pagination.update();
            },
            activeIndexChange: function (e) {
              (e.params.loop || void 0 === e.snapIndex) &&
                e.pagination.update();
            },
            snapIndexChange: function (e) {
              e.params.loop || e.pagination.update();
            },
            slidesLengthChange: function (e) {
              e.params.loop && (e.pagination.render(), e.pagination.update());
            },
            snapGridLengthChange: function (e) {
              e.params.loop || (e.pagination.render(), e.pagination.update());
            },
            destroy: function (e) {
              e.pagination.destroy();
            },
            click: function (e, t) {
              e.params.pagination.el &&
                e.params.pagination.hideOnClick &&
                e.pagination.$el.length > 0 &&
                !f(t.target).hasClass(e.params.pagination.bulletClass) &&
                (!0 ===
                e.pagination.$el.hasClass(e.params.pagination.hiddenClass)
                  ? e.emit("paginationShow")
                  : e.emit("paginationHide"),
                e.pagination.$el.toggleClass(e.params.pagination.hiddenClass));
            },
          },
        },
        {
          name: "scrollbar",
          params: {
            scrollbar: {
              el: null,
              dragSize: "auto",
              hide: !1,
              draggable: !1,
              snapOnRelease: !0,
              lockClass: "swiper-scrollbar-lock",
              dragClass: "swiper-scrollbar-drag",
            },
          },
          create: function () {
            x(this, {
              scrollbar: t(
                { isTouched: !1, timeout: null, dragTimeout: null },
                W
              ),
            });
          },
          on: {
            init: function (e) {
              e.scrollbar.init(),
                e.scrollbar.updateSize(),
                e.scrollbar.setTranslate();
            },
            update: function (e) {
              e.scrollbar.updateSize();
            },
            resize: function (e) {
              e.scrollbar.updateSize();
            },
            observerUpdate: function (e) {
              e.scrollbar.updateSize();
            },
            setTranslate: function (e) {
              e.scrollbar.setTranslate();
            },
            setTransition: function (e, t) {
              e.scrollbar.setTransition(t);
            },
            destroy: function (e) {
              e.scrollbar.destroy();
            },
          },
        },
        {
          name: "parallax",
          params: { parallax: { enabled: !1 } },
          create: function () {
            x(this, { parallax: t({}, Y) });
          },
          on: {
            beforeInit: function (e) {
              e.params.parallax.enabled &&
                ((e.params.watchSlidesProgress = !0),
                (e.originalParams.watchSlidesProgress = !0));
            },
            init: function (e) {
              e.params.parallax.enabled && e.parallax.setTranslate();
            },
            setTranslate: function (e) {
              e.params.parallax.enabled && e.parallax.setTranslate();
            },
            setTransition: function (e, t) {
              e.params.parallax.enabled && e.parallax.setTransition(t);
            },
          },
        },
        {
          name: "zoom",
          params: {
            zoom: {
              enabled: !1,
              maxRatio: 3,
              minRatio: 1,
              toggle: !0,
              containerClass: "swiper-zoom-container",
              zoomedSlideClass: "swiper-slide-zoomed",
            },
          },
          create: function () {
            var e = this;
            x(e, {
              zoom: t(
                {
                  enabled: !1,
                  scale: 1,
                  currentScale: 1,
                  isScaling: !1,
                  gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3,
                  },
                  image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {},
                  },
                  velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0,
                  },
                },
                X
              ),
            });
            var a = 1;
            Object.defineProperty(e.zoom, "scale", {
              get: function () {
                return a;
              },
              set: function (t) {
                if (a !== t) {
                  var r = e.zoom.gesture.$imageEl
                      ? e.zoom.gesture.$imageEl[0]
                      : void 0,
                    n = e.zoom.gesture.$slideEl
                      ? e.zoom.gesture.$slideEl[0]
                      : void 0;
                  e.emit("zoomChange", t, r, n);
                }
                a = t;
              },
            });
          },
          on: {
            init: function (e) {
              e.params.zoom.enabled && e.zoom.enable();
            },
            destroy: function (e) {
              e.zoom.disable();
            },
            touchStart: function (e, t) {
              e.zoom.enabled && e.zoom.onTouchStart(t);
            },
            touchEnd: function (e, t) {
              e.zoom.enabled && e.zoom.onTouchEnd(t);
            },
            doubleTap: function (e, t) {
              e.params.zoom.enabled &&
                e.zoom.enabled &&
                e.params.zoom.toggle &&
                e.zoom.toggle(t);
            },
            transitionEnd: function (e) {
              e.zoom.enabled &&
                e.params.zoom.enabled &&
                e.zoom.onTransitionEnd();
            },
            slideChange: function (e) {
              e.zoom.enabled &&
                e.params.zoom.enabled &&
                e.params.cssMode &&
                e.zoom.onTransitionEnd();
            },
          },
        },
        {
          name: "lazy",
          params: {
            lazy: {
              checkInView: !1,
              enabled: !1,
              loadPrevNext: !1,
              loadPrevNextAmount: 1,
              loadOnTransitionStart: !1,
              scrollingElement: "",
              elementClass: "swiper-lazy",
              loadingClass: "swiper-lazy-loading",
              loadedClass: "swiper-lazy-loaded",
              preloaderClass: "swiper-lazy-preloader",
            },
          },
          create: function () {
            x(this, { lazy: t({ initialImageLoaded: !1 }, J) });
          },
          on: {
            beforeInit: function (e) {
              e.params.lazy.enabled &&
                e.params.preloadImages &&
                (e.params.preloadImages = !1);
            },
            init: function (e) {
              e.params.lazy.enabled &&
                !e.params.loop &&
                0 === e.params.initialSlide &&
                (e.params.lazy.checkInView
                  ? e.lazy.checkInViewOnLoad()
                  : e.lazy.load());
            },
            scroll: function (e) {
              e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
            },
            resize: function (e) {
              e.params.lazy.enabled && e.lazy.load();
            },
            scrollbarDragMove: function (e) {
              e.params.lazy.enabled && e.lazy.load();
            },
            transitionStart: function (e) {
              e.params.lazy.enabled &&
                (e.params.lazy.loadOnTransitionStart ||
                  (!e.params.lazy.loadOnTransitionStart &&
                    !e.lazy.initialImageLoaded)) &&
                e.lazy.load();
            },
            transitionEnd: function (e) {
              e.params.lazy.enabled &&
                !e.params.lazy.loadOnTransitionStart &&
                e.lazy.load();
            },
            slideChange: function (e) {
              e.params.lazy.enabled && e.params.cssMode && e.lazy.load();
            },
          },
        },
        {
          name: "controller",
          params: { controller: { control: void 0, inverse: !1, by: "slide" } },
          create: function () {
            x(this, {
              controller: t({ control: this.params.controller.control }, K),
            });
          },
          on: {
            update: function (e) {
              e.controller.control &&
                e.controller.spline &&
                ((e.controller.spline = void 0), delete e.controller.spline);
            },
            resize: function (e) {
              e.controller.control &&
                e.controller.spline &&
                ((e.controller.spline = void 0), delete e.controller.spline);
            },
            observerUpdate: function (e) {
              e.controller.control &&
                e.controller.spline &&
                ((e.controller.spline = void 0), delete e.controller.spline);
            },
            setTranslate: function (e, t, a) {
              e.controller.control && e.controller.setTranslate(t, a);
            },
            setTransition: function (e, t, a) {
              e.controller.control && e.controller.setTransition(t, a);
            },
          },
        },
        {
          name: "a11y",
          params: {
            a11y: {
              enabled: !0,
              notificationClass: "swiper-notification",
              prevSlideMessage: "Previous slide",
              nextSlideMessage: "Next slide",
              firstSlideMessage: "This is the first slide",
              lastSlideMessage: "This is the last slide",
              paginationBulletMessage: "Go to slide {{index}}",
              containerMessage: null,
              containerRoleDescriptionMessage: null,
              itemRoleDescriptionMessage: null,
            },
          },
          create: function () {
            x(this, {
              a11y: t(
                t({}, Q),
                {},
                {
                  liveRegion: f(
                    '<span class="' +
                      this.params.a11y.notificationClass +
                      '" aria-live="assertive" aria-atomic="true"></span>'
                  ),
                }
              ),
            });
          },
          on: {
            afterInit: function (e) {
              e.params.a11y.enabled &&
                (e.a11y.init(), e.a11y.updateNavigation());
            },
            toEdge: function (e) {
              e.params.a11y.enabled && e.a11y.updateNavigation();
            },
            fromEdge: function (e) {
              e.params.a11y.enabled && e.a11y.updateNavigation();
            },
            paginationUpdate: function (e) {
              e.params.a11y.enabled && e.a11y.updatePagination();
            },
            destroy: function (e) {
              e.params.a11y.enabled && e.a11y.destroy();
            },
          },
        },
        {
          name: "history",
          params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
          create: function () {
            x(this, { history: t({}, Z) });
          },
          on: {
            init: function (e) {
              e.params.history.enabled && e.history.init();
            },
            destroy: function (e) {
              e.params.history.enabled && e.history.destroy();
            },
            transitionEnd: function (e) {
              e.history.initialized &&
                e.history.setHistory(e.params.history.key, e.activeIndex);
            },
            slideChange: function (e) {
              e.history.initialized &&
                e.params.cssMode &&
                e.history.setHistory(e.params.history.key, e.activeIndex);
            },
          },
        },
        {
          name: "hash-navigation",
          params: {
            hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
          },
          create: function () {
            x(this, { hashNavigation: t({ initialized: !1 }, ee) });
          },
          on: {
            init: function (e) {
              e.params.hashNavigation.enabled && e.hashNavigation.init();
            },
            destroy: function (e) {
              e.params.hashNavigation.enabled && e.hashNavigation.destroy();
            },
            transitionEnd: function (e) {
              e.hashNavigation.initialized && e.hashNavigation.setHash();
            },
            slideChange: function (e) {
              e.hashNavigation.initialized &&
                e.params.cssMode &&
                e.hashNavigation.setHash();
            },
          },
        },
        {
          name: "autoplay",
          params: {
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
            },
          },
          create: function () {
            x(this, {
              autoplay: t(t({}, te), {}, { running: !1, paused: !1 }),
            });
          },
          on: {
            init: function (e) {
              e.params.autoplay.enabled &&
                (e.autoplay.start(),
                i().addEventListener(
                  "visibilitychange",
                  e.autoplay.onVisibilityChange
                ));
            },
            beforeTransitionStart: function (e, t, a) {
              e.autoplay.running &&
                (a || !e.params.autoplay.disableOnInteraction
                  ? e.autoplay.pause(t)
                  : e.autoplay.stop());
            },
            sliderFirstMove: function (e) {
              e.autoplay.running &&
                (e.params.autoplay.disableOnInteraction
                  ? e.autoplay.stop()
                  : e.autoplay.pause());
            },
            touchEnd: function (e) {
              e.params.cssMode &&
                e.autoplay.paused &&
                !e.params.autoplay.disableOnInteraction &&
                e.autoplay.run();
            },
            destroy: function (e) {
              e.autoplay.running && e.autoplay.stop(),
                i().removeEventListener(
                  "visibilitychange",
                  e.autoplay.onVisibilityChange
                );
            },
          },
        },
        {
          name: "effect-fade",
          params: { fadeEffect: { crossFade: !1 } },
          create: function () {
            x(this, { fadeEffect: t({}, ae) });
          },
          on: {
            beforeInit: function (e) {
              if ("fade" === e.params.effect) {
                e.classNames.push(e.params.containerModifierClass + "fade");
                var t = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !0,
                };
                S(e.params, t), S(e.originalParams, t);
              }
            },
            setTranslate: function (e) {
              "fade" === e.params.effect && e.fadeEffect.setTranslate();
            },
            setTransition: function (e, t) {
              "fade" === e.params.effect && e.fadeEffect.setTransition(t);
            },
          },
        },
        {
          name: "effect-cube",
          params: {
            cubeEffect: {
              slideShadows: !0,
              shadow: !0,
              shadowOffset: 20,
              shadowScale: 0.94,
            },
          },
          create: function () {
            x(this, { cubeEffect: t({}, re) });
          },
          on: {
            beforeInit: function (e) {
              if ("cube" === e.params.effect) {
                e.classNames.push(e.params.containerModifierClass + "cube"),
                  e.classNames.push(e.params.containerModifierClass + "3d");
                var t = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  resistanceRatio: 0,
                  spaceBetween: 0,
                  centeredSlides: !1,
                  virtualTranslate: !0,
                };
                S(e.params, t), S(e.originalParams, t);
              }
            },
            setTranslate: function (e) {
              "cube" === e.params.effect && e.cubeEffect.setTranslate();
            },
            setTransition: function (e, t) {
              "cube" === e.params.effect && e.cubeEffect.setTransition(t);
            },
          },
        },
        {
          name: "effect-flip",
          params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
          create: function () {
            x(this, { flipEffect: t({}, ne) });
          },
          on: {
            beforeInit: function (e) {
              if ("flip" === e.params.effect) {
                e.classNames.push(e.params.containerModifierClass + "flip"),
                  e.classNames.push(e.params.containerModifierClass + "3d");
                var t = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !0,
                };
                S(e.params, t), S(e.originalParams, t);
              }
            },
            setTranslate: function (e) {
              "flip" === e.params.effect && e.flipEffect.setTranslate();
            },
            setTransition: function (e, t) {
              "flip" === e.params.effect && e.flipEffect.setTransition(t);
            },
          },
        },
        {
          name: "effect-coverflow",
          params: {
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              scale: 1,
              modifier: 1,
              slideShadows: !0,
            },
          },
          create: function () {
            x(this, { coverflowEffect: t({}, ie) });
          },
          on: {
            beforeInit: function (e) {
              "coverflow" === e.params.effect &&
                (e.classNames.push(
                  e.params.containerModifierClass + "coverflow"
                ),
                e.classNames.push(e.params.containerModifierClass + "3d"),
                (e.params.watchSlidesProgress = !0),
                (e.originalParams.watchSlidesProgress = !0));
            },
            setTranslate: function (e) {
              "coverflow" === e.params.effect &&
                e.coverflowEffect.setTranslate();
            },
            setTransition: function (e, t) {
              "coverflow" === e.params.effect &&
                e.coverflowEffect.setTransition(t);
            },
          },
        },
        {
          name: "thumbs",
          params: {
            thumbs: {
              swiper: null,
              multipleActiveThumbs: !0,
              autoScrollOffset: 0,
              slideThumbActiveClass: "swiper-slide-thumb-active",
              thumbsContainerClass: "swiper-container-thumbs",
            },
          },
          create: function () {
            x(this, { thumbs: t({ swiper: null, initialized: !1 }, oe) });
          },
          on: {
            beforeInit: function (e) {
              var t = e.params.thumbs;
              t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0));
            },
            slideChange: function (e) {
              e.thumbs.swiper && e.thumbs.update();
            },
            update: function (e) {
              e.thumbs.swiper && e.thumbs.update();
            },
            resize: function (e) {
              e.thumbs.swiper && e.thumbs.update();
            },
            observerUpdate: function (e) {
              e.thumbs.swiper && e.thumbs.update();
            },
            setTransition: function (e, t) {
              var a = e.thumbs.swiper;
              a && a.setTransition(t);
            },
            beforeDestroy: function (e) {
              var t = e.thumbs.swiper;
              t && e.thumbs.swiperCreated && t && t.destroy();
            },
          },
        },
      ];
    return G.use(se), G;
  }),
  (function () {
    var e = !1,
      t = /xyz/.test(function () {
        xyz;
      })
        ? /\b_super\b/
        : /.*/;
    (this.PortholeClass = function () {}),
      (PortholeClass.extend = function (a) {
        var r = this.prototype;
        e = !0;
        var n = new this();
        for (var i in ((e = !1), a))
          n[i] =
            "function" == typeof a[i] &&
            "function" == typeof r[i] &&
            t.test(a[i])
              ? (function (e, t) {
                  return function () {
                    var a = this._super;
                    this._super = r[e];
                    var n = t.apply(this, arguments);
                    return (this._super = a), n;
                  };
                })(i, a[i])
              : a[i];
        function o() {
          !e && this.init && this.init.apply(this, arguments);
        }
        return (
          (o.prototype = n),
          (o.prototype.constructor = o),
          (o.extend = arguments.callee),
          o
        );
      });
  })(),
  (function (e) {
    var t = {
      debug: !1,
      trace: function (t) {
        this.debug && void 0 !== e.console && e.console.log("Porthole: " + t);
      },
      error: function (t) {
        void 0 !== e.console && e.console.error("Porthole: " + t);
      },
      WindowProxy: function () {},
    };
    (t.WindowProxy.prototype = {
      post: function (e, t) {},
      addEventListener: function (e) {},
      removeEventListener: function (e) {},
    }),
      (t.WindowProxyBase = PortholeClass.extend({
        init: function (t) {
          void 0 === t && (t = ""),
            (this.targetWindowName = t),
            (this.origin = e.location.protocol + "//" + e.location.host),
            (this.eventListeners = []);
        },
        getTargetWindowName: function () {
          return this.targetWindowName;
        },
        getOrigin: function () {
          return this.origin;
        },
        getTargetWindow: function () {
          return t.WindowProxy.getTargetWindow(this.targetWindowName);
        },
        post: function (t, a) {
          void 0 === a && (a = "*"),
            this.dispatchMessage({
              data: t,
              sourceOrigin: this.getOrigin(),
              targetOrigin: a,
              sourceWindowName: e.name,
              targetWindowName: this.getTargetWindowName(),
            });
        },
        addEventListener: function (e) {
          return this.eventListeners.push(e), e;
        },
        removeEventListener: function (e) {
          var t;
          try {
            (t = this.eventListeners.indexOf(e)),
              this.eventListeners.splice(t, 1);
          } catch (e) {
            this.eventListeners = [];
          }
        },
        dispatchEvent: function (e) {
          var t;
          for (t = 0; t < this.eventListeners.length; t++)
            try {
              this.eventListeners[t](e);
            } catch (e) {}
        },
      })),
      (t.WindowProxyLegacy = t.WindowProxyBase.extend({
        init: function (e, a) {
          this._super(a),
            null !== e
              ? ((this.proxyIFrameName = this.targetWindowName + "ProxyIFrame"),
                (this.proxyIFrameLocation = e),
                (this.proxyIFrameElement = this.createIFrameProxy()))
              : ((this.proxyIFrameElement = null),
                t.trace(
                  "proxyIFrameUrl is null, window will be a receiver only"
                ),
                (this.post = function () {
                  throw new Error("Receiver only window");
                }));
        },
        createIFrameProxy: function () {
          var e = document.createElement("iframe");
          return (
            e.setAttribute("id", this.proxyIFrameName),
            e.setAttribute("name", this.proxyIFrameName),
            e.setAttribute("src", this.proxyIFrameLocation),
            e.setAttribute("frameBorder", "1"),
            e.setAttribute("scrolling", "auto"),
            e.setAttribute("width", 30),
            e.setAttribute("height", 30),
            e.setAttribute(
              "style",
              "position: absolute; left: -100px; top:0px;"
            ),
            e.style.setAttribute &&
              e.style.setAttribute(
                "cssText",
                "position: absolute; left: -100px; top:0px;"
              ),
            document.body.appendChild(e),
            e
          );
        },
        dispatchMessage: function (a) {
          var r = e.encodeURIComponent;
          if (this.proxyIFrameElement) {
            var n =
              this.proxyIFrameLocation + "#" + r(t.WindowProxy.serialize(a));
            this.proxyIFrameElement.setAttribute("src", n),
              (this.proxyIFrameElement.height =
                this.proxyIFrameElement.height > 50 ? 50 : 100);
          }
        },
      })),
      (t.WindowProxyHTML5 = t.WindowProxyBase.extend({
        init: function (e, t) {
          this._super(t), (this.eventListenerCallback = null);
        },
        dispatchMessage: function (e) {
          this.getTargetWindow().postMessage(
            t.WindowProxy.serialize(e),
            e.targetOrigin
          );
        },
        addEventListener: function (t) {
          if (0 === this.eventListeners.length) {
            var a = this;
            e.addEventListener
              ? ((this.eventListenerCallback = function (e) {
                  a.eventListener(a, e);
                }),
                e.addEventListener("message", this.eventListenerCallback, !1))
              : e.attachEvent &&
                ((this.eventListenerCallback = function (t) {
                  a.eventListener(a, e.event);
                }),
                e.attachEvent("onmessage", this.eventListenerCallback));
          }
          return this._super(t);
        },
        removeEventListener: function (t) {
          this._super(t),
            0 === this.eventListeners.length &&
              (e.removeEventListener
                ? e.removeEventListener("message", this.eventListenerCallback)
                : e.detachEvent &&
                  (void 0 === e.onmessage && (e.onmessage = null),
                  e.detachEvent("onmessage", this.eventListenerCallback)),
              (this.eventListenerCallback = null));
        },
        eventListener: function (e, a) {
          var r = t.WindowProxy.unserialize(a.data);
          !r ||
            ("" !== e.targetWindowName &&
              r.sourceWindowName != e.targetWindowName) ||
            e.dispatchEvent(new t.MessageEvent(r.data, a.origin, e));
        },
      })),
      e.postMessage
        ? (t.trace("Using built-in browser support"),
          (t.WindowProxy = t.WindowProxyHTML5.extend({})))
        : (t.trace("Using legacy browser support"),
          (t.WindowProxy = t.WindowProxyLegacy.extend({}))),
      (t.WindowProxy.serialize = function (e) {
        if ("undefined" == typeof JSON)
          throw new Error("Porthole serialization depends on JSON!");
        return JSON.stringify(e);
      }),
      (t.WindowProxy.unserialize = function (e) {
        if ("undefined" == typeof JSON)
          throw new Error("Porthole unserialization dependens on JSON!");
        try {
          var t = JSON.parse(e);
        } catch (e) {
          return !1;
        }
        return t;
      }),
      (t.WindowProxy.getTargetWindow = function (t) {
        return "" === t
          ? parent
          : "top" === t || "parent" === t
          ? e[t]
          : e.frames[t];
      }),
      (t.MessageEvent = function (e, t, a) {
        (this.data = e), (this.origin = t), (this.source = a);
      }),
      (t.WindowProxyDispatcher = {
        forwardMessageEvent: function (a) {
          var r,
            n,
            i,
            o = e.decodeURIComponent;
          document.location.hash.length > 0 &&
            ((r = t.WindowProxy.unserialize(
              o(document.location.hash.substr(1))
            )),
            (n = t.WindowProxy.getTargetWindow(r.targetWindowName)),
            (i = t.WindowProxyDispatcher.findWindowProxyObjectInWindow(
              n,
              r.sourceWindowName
            ))
              ? i.origin === r.targetOrigin || "*" === r.targetOrigin
                ? i.dispatchEvent(new t.MessageEvent(r.data, r.sourceOrigin, i))
                : t.error(
                    "Target origin " +
                      i.origin +
                      " does not match desired target of " +
                      r.targetOrigin
                  )
              : t.error(
                  "Could not find window proxy object on the target window"
                ));
        },
        findWindowProxyObjectInWindow: function (e, t) {
          var a;
          if (e)
            for (a in e)
              if (Object.prototype.hasOwnProperty.call(e, a))
                try {
                  if (
                    null !== e[a] &&
                    "object" === _typeof(e[a]) &&
                    e[a] instanceof e.Porthole.WindowProxy &&
                    e[a].getTargetWindowName() === t
                  )
                    return e[a];
                } catch (e) {}
          return null;
        },
        start: function () {
          e.addEventListener
            ? e.addEventListener(
                "resize",
                t.WindowProxyDispatcher.forwardMessageEvent,
                !1
              )
            : e.attachEvent && "undefined" !== e.postMessage
            ? e.attachEvent(
                "onresize",
                t.WindowProxyDispatcher.forwardMessageEvent
              )
            : document.body.attachEvent
            ? e.attachEvent(
                "onresize",
                t.WindowProxyDispatcher.forwardMessageEvent
              )
            : t.error("Cannot attach resize event");
        },
      }),
      void 0 !== e.exports ? (e.exports.Porthole = t) : (e.Porthole = t);
  })(this),
  $(document).ready(function () {
    ($dom_element = { constant: $("#domcache_constant") }),
      (domcache_srp = {
        domainurl: $dom_element.constant.data("domainurl"),
        bricksdomainurl: $dom_element.constant.data("bricksdomainurl"),
        seorooturl: $dom_element.constant.data("seorooturl"),
        imagerooturl: $dom_element.constant.data("imagerooturl"),
        iconrooturl: $dom_element.constant.data("iconrooturl"),
        cssrooturl: $dom_element.constant.data("cssrooturl"),
        cssversion: $dom_element.constant.data("cssversion"),
        mobiledomainurl: $dom_element.constant.data("mobiledomainurl"),
        fullcontextpath: $dom_element.constant.data("fullcontextpath"),
        apicontexturl: $dom_element.constant.data("apicontexturl"),
        detailcontexturl: $dom_element.constant.data("detailcontexturl"),
        jsrooturl: $dom_element.constant.data("jsrooturl"),
      });
  });
var clientIP = "";
try {
  var _ntrack$trackingEvent,
    userNTrackId,
    currentBrowseSessionId,
    activeSessionId,
    userUniqueNTrackId,
    generateId = function () {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (e) {
          var t = (16 * Math.random()) | 0;
          return ("x" == e ? t : (3 & t) | 8).toString(16);
        }
      );
    },
    log = function () {
      if (!location.hostname.includes("www.magicbricks.com"))
        for (var e = 0; e < arguments.length; e++) console.log(arguments[e]);
    },
    checkBrowserSupportForTracking = function () {
      return (
        "undefined" != canStringify &&
        "undefined" != window.localStorage &&
        "undefined" != window.sessionStorage
      );
    },
    fillRawObject = function e(t, a, r) {
      try {
        for (var n in t)
          switch (Object.prototype.toString.call(t[n])) {
            case "[object Boolean]":
            case "[object Number]":
            case "[object String]":
            case "[object Array]":
              a[n] = t[n];
              break;
            case "[object HTMLInputElement]":
            case "[object global]":
              break;
            case "[object Object]":
              var i = t[n];
              r < 1 && (e(i, a, ++r), r--);
          }
      } catch (e) {
        log(e);
      }
    },
    checkForImpression = function (e) {
      var t = e.toUpperCase();
      return "SRPCARDVIEW" === t ||
        "SRPPROPERTYCLICK" === t ||
        "SRPCONTACTCLICK" === t ||
        "SHORTLIST" === t
        ? "impression"
        : e;
    },
    setCookie = function (e, t, a) {
      t = t.replace(/%20/g, "");
      var r = "",
        n = "";
      if (a) {
        var i = new Date();
        i.setTime(i.getTime() + 60 * a * 1e3),
          (r = "; expires=" + i.toGMTString());
      }
      ntrack.domain && (n = "; domain=" + ntrack.domain),
        (document.cookie = e + "=" + escape(t) + r + n + "; secure; path=/");
    },
    _getCookie = function (e) {
      var t,
        a,
        r = e + "=",
        n = document.cookie.split(";");
      for (t = 0; t < n.length; t++) {
        for (a = n[t]; " " === a.charAt(0); ) a = a.substring(1, a.length);
        if (0 === a.indexOf(r)) {
          var i = a.substring(r.length, a.length);
          return unescape(i.replace(/%20/g, ""));
        }
      }
      return null;
    },
    destroyCookie = function (e) {
      setCookie(e, "", -1);
    },
    setReady = function () {
      for (var e; (e = queue.shift()); ) e();
      isReady = !0;
    },
    ready = function (e) {
      isReady ? e() : queue.push(e);
    },
    trackEvent = function (e) {
      ready(function () {
        0 == ntrack.sendEvent(e) &&
          $.ajax({
            type: "POST",
            contentType: "application/json",
            url:
              "https://ingestor.magicbricks.com/ramIngestorService/" +
              e.eventInfo.eventType,
            data: JSON.stringify(e),
            dataType: "json",
            async: !0,
            success: function () {},
          });
      });
    },
    page = function () {
      return ntrack.page || window.location.pathname;
    },
    eventProperties = function (e) {
      var t = $(e.currentTarget);
      return {
        tag: t.get(0).tagName.toLowerCase(),
        id: t.attr("id"),
        class: t.attr("class"),
        page: page(),
        section: t.closest("*[data-section]").data("section"),
      };
    },
    getIdsList = function (e, t) {
      var a = [];
      return (
        null != t[e] &&
          ((t[e] = t[e] + ""),
          (a =
            -1 != t[e].indexOf("||")
              ? t[e].split("||")
              : -1 != t[e].indexOf(",")
              ? t[e].split(",")
              : -1 != t[e].indexOf("-")
              ? t[e].split("-")
              : -1 != t[e].indexOf("_")
              ? t[e].split("_")
              : -1 != t[e].indexOf("=")
              ? t[e].split("=")
              : -1 != t[e].indexOf('"')
              ? t[e].split('"')
              : [t[e]])),
        a
      );
    },
    giveMeArray = function (e) {
      var t = {};
      return (
        null != e &&
          (t =
            -1 != (e += "").indexOf("||")
              ? e.split("||")
              : -1 != e.indexOf(",")
              ? e.split(",")
              : -1 != e.indexOf("-")
              ? e.split("-")
              : -1 != e.indexOf("_")
              ? e.split("_")
              : -1 != e.indexOf("=")
              ? e.split("=")
              : -1 != e.indexOf('"')
              ? e.split('"')
              : [e]),
        t
      );
    },
    fillModel = function e(t, a, r) {
      var n = !1;
      for (var i in r) {
        if (i == t) {
          (r[t] = a), (n = !0);
          break;
        }
        if (
          null != typeof r[i] &&
          "object" == _typeof(r[i]) &&
          (n = e(t, a, r[i]))
        )
          return n;
      }
      return n;
    },
    ntrack = ntrack || {},
    $ = window.jQuery || window.Zepto || window.$,
    currentBrowseSessionTTL = 240,
    userNTrackTTL = 525600,
    isReady = !1,
    queue = [],
    canStringify = "undefined" != typeof JSON && void 0 !== JSON.stringify,
    eventQueue = [],
    visitsUrl = ntrack.visitsUrl || "/ntrack/visits",
    eventsUrl = ntrack.eventsUrl || "/bricks/ajax/tracking",
    isDebugModOn = !1,
    RamTrackingHittingPoint =
      "https://ingestor.magicbricks.com/ramIngestorService/",
    RamTrackingServerContract = "https://ingestor.magicbricks.com/server.html";
  if (
    ((null != localStorage.getItem("userUniqueNTrackId") &&
      "" != localStorage.getItem("userUniqueNTrackId")) ||
      ((userUniqueNTrackId = generateId()),
      localStorage.setItem("userUniqueNTrackId", userUniqueNTrackId)),
    (ntrack.getRawDataObject = function () {
      return {};
    }),
    !checkBrowserSupportForTracking())
  ) {
    var err = "browser not support tracking functionality";
    throw err;
  }
  (ntrack.trackingGlobalData = {}),
    (ntrack.trackingEvent =
      (_defineProperty(
        (_ntrack$trackingEvent = {
          ASandBD: "ASandBD",
          Compare: "Compare",
          Contact: "Contact",
          DetailView: "DetailView",
          MailOpen: "MailOpen",
          MailSent: "MailSent",
          NotificationOpen: "NotificationOpen",
          NotificationSent: "NotificationSent",
          Requirement: "Requirement",
          Search: "Search",
          Shortlist: "Shortlist",
          BrowserNotification: "BrowserNotification",
          SrpCardView: "SrpCardView",
          SrpPropertyClick: "SrpPropertyClick",
        }),
        "Shortlist",
        "Shortlist"
      ),
      _defineProperty(
        _ntrack$trackingEvent,
        "SrpContactClick",
        "SrpContactClick"
      ),
      _defineProperty(_ntrack$trackingEvent, "PageView", "PageView"),
      _ntrack$trackingEvent)),
    (ntrack.EventActivityType = {
      Property: "Property",
      PSM: "PSM",
      PRJ: "PRJ",
      Agent: "Agent",
      Locality: "Locality",
      Others: "Others",
    }),
    (ntrack.Source = {
      Web: "Web",
      Web_Mobile: "Web_Mobile",
      Web_Others: "Web_Others",
      Mobile: "Mobile",
      App_Android: "App_Android",
      App_Ios: "App_Ios",
      App_Others: "App_Others",
      Alert: "Alert",
      Notification: "Notification",
    }),
    (ntrack.dataPostUrlsFor = {
      Search: RamTrackingHittingPoint + "search",
      Contact: RamTrackingHittingPoint + "contact",
      MailOpen: RamTrackingHittingPoint + "mailOpen",
      MailSent: RamTrackingHittingPoint + "mailSent",
      DetailView: RamTrackingHittingPoint + "detailView",
      Requirement: RamTrackingHittingPoint + "requirement",
      SrpCardView: RamTrackingHittingPoint + "impression",
      SrpPropertyClick: RamTrackingHittingPoint + "impression",
      Shortlist: RamTrackingHittingPoint + "impression",
      SrpContactClick: RamTrackingHittingPoint + "impression",
      PageView: RamTrackingHittingPoint + "pageView",
    }),
    (ntrack.ramTrackingEventModel = {
      getTrackingEventModel: function (e) {
        var t;
        switch (e) {
          case ntrack.trackingEvent.Search:
            t = {
              eventInfo: { eventType: "", activityType: "", source: "" },
              ext_id: [],
              requestInfo: {
                referrer: "",
                campaign_type: "",
                utm_source: "",
                deviceInfo: {
                  ip: "",
                  device: "",
                  resolution: "",
                  platform: "",
                },
                from_page: "",
              },
              userInfo: {
                user_id: "",
                email_id: "",
                active_session_id: "",
                name: "",
                mobile: "",
                verified_mob: "",
                user_type: "",
                col_uuid: "",
              },
              propertyInfo: {
                category: "",
                prop_type: [],
                parent_prop_type: "",
                locality: [],
                psm: [],
                project_type: "",
                locality_type: "",
                localityname: "",
                point_of_interest: "",
                transaction_type: [],
                city: 0,
                min_budget: 0,
                max_budget: 0,
                budget_per_sqft_min: 0,
                budget_per_sqft_max: 0,
                area_from: 0,
                area_to: 0,
                bedrooms: [],
                posted_by: [],
                searchpostedby: [],
                construction_status: [],
                construction_age: [],
                amenities: [],
                furnished_status: [],
                with_photo: !1,
                with_video: !1,
                bathroom: [],
                additional_room: [],
                preferred_floor: [],
                parking_type: 0,
                num_Of_parking: [],
                facing: [],
                overlooking: [],
                preferred_psm: [],
                preferred_builder: [],
                society_type: [],
                max_brokrage: 0,
                max_security: 0,
                deals_offers_interests: !1,
                dealing_in: [],
                verified: !1,
                featured_agent: !1,
                landmark: 0,
                landmarkLatLong: 0,
                landmarkTravelTime: 0,
                landmarkModeOfTrans: 0,
                landmarkDistance: 0,
              },
              additionalData: [],
            };
            break;
          case ntrack.trackingEvent.Contact:
            t = {
              eventInfo: { eventType: "", activityType: "", source: "" },
              ext_id: [],
              requestInfo: {
                referrer: "",
                campaign_type: "",
                utm_source: "",
                deviceInfo: {
                  ip: "",
                  device: "",
                  resolution: "",
                  platform: "",
                },
                from_page: "",
              },
              userInfo: {
                user_id: "",
                email_id: "",
                active_session_id: "",
                name: "",
                mobile: "",
                verified_mob: "",
                user_type: "",
                col_uuid: "",
              },
              homeLoan: !1,
              interested: [],
              additionalData: [],
            };
            break;
          case ntrack.trackingEvent.BrowserNotification:
            t = {
              eventInfo: { eventType: "", activityType: "", source: "" },
              rid: "",
              requestInfo: {
                referrer: "",
                campaign_type: "",
                utm_source: "",
                deviceInfo: {
                  ip: "",
                  device: "",
                  resolution: "",
                  platform: "",
                },
                from_page: "",
              },
              userInfo: {
                user_id: "",
                email_id: "",
                active_session_id: "",
                name: "",
                mobile: "",
                verified_mob: "",
                user_type: "",
                col_uuid: "",
              },
            };
            break;
          case ntrack.trackingEvent.SrpCardView:
          case ntrack.trackingEvent.SrpPropertyClick:
          case ntrack.trackingEvent.Shortlist:
          case ntrack.trackingEvent.SrpContactClick:
            t = _defineProperty(
              {
                eventInfo: { eventType: "", activityType: "", source: "" },
                userSearchId: "",
                sortingType: "",
                categ: "",
                propPositions: [],
                propertyInfo: {
                  psm: [],
                  localityname: [],
                  city: 0,
                  min_budget: 0,
                  max_budget: 0,
                  bedrooms: [],
                  posted_by: [],
                  prop_type: [],
                },
                additionalData: [],
                requestInfo: {
                  referrer: "",
                  campaign_type: "",
                  utm_source: "",
                  deviceInfo: {
                    ip: "",
                    device: "",
                    resolution: "",
                    platform: "",
                  },
                  from_page: "",
                },
                userInfo: {
                  user_id: "",
                  email_id: "",
                  active_session_id: "",
                  name: "",
                  mobile: "",
                  verified_mob: "",
                  user_type: "",
                  col_uuid: "",
                },
              },
              "additionalData",
              []
            );
            break;
          case ntrack.trackingEvent.DetailView:
            t = {
              eventInfo: { eventType: "", activityType: "", source: "" },
              ext_id: 0,
              requestInfo: {
                referrer: "",
                campaign_type: "",
                utm_source: "",
                deviceInfo: {
                  ip: "",
                  device: "",
                  resolution: "",
                  platform: "",
                },
                from_page: "",
              },
              userInfo: {
                user_id: "",
                email_id: "",
                active_session_id: "",
                name: "",
                mobile: "",
                verified_mob: "",
                user_type: "",
                col_uuid: "",
              },
              additionalData: [],
            };
            break;
          case ntrack.trackingEvent.PageView:
            t = {
              eventInfo: { eventType: "", activityType: "", source: "" },
              ext_id: 0,
              requestInfo: {
                referrer: "",
                campaign_type: "",
                utm_source: "",
                deviceInfo: {
                  ip: "",
                  device: "",
                  resolution: "",
                  platform: "",
                },
                from_page: "",
              },
              userInfo: {
                user_id: "",
                email_id: "",
                active_session_id: "",
                name: "",
                mobile: "",
                verified_mob: "",
                user_type: "",
                col_uuid: "",
              },
              additionalData: [],
              pageTitle: "",
              pageUrl: "",
              pageComponent: "",
            };
        }
        return t;
      },
    }),
    (ntrack.eventMappingObject = {
      getEventMappingModel: function (e) {
        var t;
        switch (e) {
          case ntrack.trackingEvent.Search:
            t = {
              url: "",
              activityType: "EventActivityType",
              eventType: "trackingEvent",
              ext_id: "",
              source: "Source",
              ip: "",
              device: "Source",
              resolution: "",
              referrer: "",
              act_sess_id: "",
              campaign_type: "",
              utm_source: "",
              platform: "",
              from_page: "",
              user_id: "",
              mobile: "",
              category: "category",
              prop_type: "prop_type",
              parent_prop_type: "parent_prop_type",
              locality: "locality",
              locality_type: "LocalityType",
              localityname: "localityName",
              psm: "psm",
              city: "city",
              min_budget: "budgetMin",
              max_budget: "budgetMax",
              bedrooms: "bedrooms",
              posted_by: "inputListings",
              transaction_type: "saleType",
              furnished_status: "furnished",
              area_from: "areaFrom",
              area_to: "areaTo",
              area_unit: "areaUnit",
              with_photo: "with_photo",
              with_video: "with_video",
              construction_status: "possessionStatus",
              construction_age: "ageConstruction",
              deals_offers_interests: "deals_offers_interests",
              amenities: "amenities",
              keyword: "keyword",
              project_type: "projectsType",
              dealing_in: "transactionType",
              verified: "verified",
              featured_agent: "featured",
              budget_per_sqft_min: "",
              budget_per_sqft_max: "",
              point_of_interest: "",
              bathroom: "bathrooms",
              facing: "facing",
              landmark: "searchLocName",
              landmarkLatLong: "radius",
              landmarkTravelTime: "searchLocTime",
              landmarkModeOfTrans: "searchTransMode",
              landmarkDistance: "searchLocDist",
              preferred_floor: "preferred_floor",
              preferred_psm: "preferred_psm",
              additionalData: "additionalData",
            };
            break;
          case ntrack.trackingEvent.Contact:
            t = {
              activityType: "EventActivityType",
              eventType: "trackingEvent",
              ext_id: "actualOwnerId",
              source: "Source",
              ip: "",
              device: "Source",
              resolution: "",
              referrer: "",
              act_sess_id: "",
              campaign_type: "",
              utm_source: "",
              platform: "",
              from_page: "",
              user_id: "",
              email_id: "email_id",
              name: "name",
              mobile: "mobile",
              verified_mob: "verified_mob",
              user_type: "",
              col_uuid: "",
              homeLoan: "homeLoan",
              interested: "interested",
              mailer_id: "actualOwnerId",
            };
            break;
          case ntrack.trackingEvent.BrowserNotification:
            t = {
              activityType: "EventActivityType",
              eventType: "trackingEvent",
              rid: "rid",
              source: "Source",
              ip: "",
              device: "Source",
              resolution: "",
              referrer: "",
              act_sess_id: "",
              campaign_type: "",
              utm_source: "",
              platform: "",
              from_page: "",
              user_id: "",
              email_id: "email_id",
              name: "name",
              mobile: "mobile",
              verified_mob: "verified_mob",
              user_type: "",
              col_uuid: "",
            };
            break;
          case ntrack.trackingEvent.SrpCardView:
          case ntrack.trackingEvent.SrpPropertyClick:
          case ntrack.trackingEvent.Shortlist:
          case ntrack.trackingEvent.SrpContactClick:
            t = {
              activityType: "EventActivityType",
              eventType: "trackingEvent",
              rid: "rid",
              source: "Source",
              ip: "",
              device: "Source",
              resolution: "",
              referrer: "",
              act_sess_id: "",
              campaign_type: "",
              utm_source: "",
              platform: "",
              from_page: "",
              user_id: "",
              email_id: "email_id",
              name: "name",
              mobile: "mobile",
              verified_mob: "verified_mob",
              user_type: "",
              col_uuid: "",
              sortingType: "",
              categ: "",
              propPositions: "",
              localityname: "localityName",
              psm: "psm",
              city: "city",
              additionalData: "additionalData",
            };
            break;
          case ntrack.trackingEvent.DetailView:
            t = {
              activityType: "EventActivityType",
              eventType: "trackingEvent",
              ext_id: "id",
              source: "Source",
              ip: "",
              device: "Source",
              resolution: "",
              referrer: "",
              act_sess_id: "",
              campaign_type: "",
              utm_source: "",
              platform: "",
              from_page: "",
              user_id: "",
              email_id: "",
              name: "",
              mobile: "",
              verified_mob: "",
              user_type: "",
              col_uuid: "",
            };
            break;
          case ntrack.trackingEvent.PageView:
            t = {
              activityType: "EventActivityType",
              eventType: "trackingEvent",
              ext_id: "id",
              source: "Source",
              ip: "",
              device: "Source",
              resolution: "",
              referrer: "",
              act_sess_id: "",
              campaign_type: "",
              utm_source: "",
              platform: "",
              from_page: "",
              user_id: "",
              email_id: "",
              name: "",
              mobile: "",
              verified_mob: "",
              user_type: "",
              col_uuid: "",
              pageTitle: "pageTitle",
              pageUrl: "pageUrl",
              pageComponent: "pageComponent",
            };
        }
        return t;
      },
    }),
    (ntrack.ramTrackingHelper = {
      searchHelperUtil: {
        DefaultValues: {
          activityType: "Others",
          parent_prop_type: "Others",
          locality_type: "Others",
          project_type: "Others",
          campaign_type: "Others",
        },
      },
    });
  try {
    var windowProxy1,
      onMessage1 = function (e) {
        location.hostname.includes("www.magicbricks.com") || console.log(e);
      };
    $("html").append(
      '<iframe style="display:none;" border="none" id="guestFrame1" name="guestFrame1" width="0px" height="0px" frameborder="1" src="' +
        RamTrackingServerContract +
        '" scrolling="no"></iframe>'
    ),
      (windowProxy1 = new Porthole.WindowProxy(
        RamTrackingServerContract,
        "guestFrame1"
      )).addEventListener(onMessage1);
  } catch (e) {
    log(e + "problem in iframe creation");
  }
  if (
    ((ntrack.getDataPostLocation = function (e) {
      var t = null;
      switch (e) {
        case ntrack.trackingEvent.Search:
          t = ntrack.dataPostUrlsFor.Search;
          break;
        case ntrack.trackingEvent.Contact:
          t = ntrack.dataPostUrlsFor.Contact;
          break;
        case ntrack.trackingEvent.MailOpen:
          t = ntrack.dataPostUrlsFor.MailOpen;
          break;
        case ntrack.trackingEvent.MailSent:
          t = ntrack.dataPostUrlsFor.MailSent;
          break;
        case ntrack.trackingEvent.DetailView:
          t = ntrack.dataPostUrlsFor.DetailView;
          break;
        case ntrack.trackingEvent.Requirement:
          t = ntrack.dataPostUrlsFor.Requirement;
          break;
        case ntrack.trackingEvent.SrpCardView:
          t = ntrack.dataPostUrlsFor.SrpCardView;
          break;
        case ntrack.trackingEvent.SrpPropertyClick:
          t = ntrack.dataPostUrlsFor.SrpPropertyClick;
          break;
        case ntrack.trackingEvent.Shortlist:
          t = ntrack.dataPostUrlsFor.Shortlist;
          break;
        case ntrack.trackingEvent.SrpContactClick:
          t = ntrack.dataPostUrlsFor.SrpContactClick;
          break;
        case ntrack.trackingEvent.PageView:
          t = ntrack.dataPostUrlsFor.PageView;
      }
      return t;
    }),
    (ntrack.getTrackingGlobalData = function () {
      return {
        resolution: window.screen.availWidth + "X" + window.screen.availHeight,
        referrer: document.referrer,
        platform: navigator.appName + navigator.appVersion,
        name: _getCookie("userName") || _getCookie("contactNameCookie"),
        mobile: _getCookie("userMobile") || _getCookie("contackMobileCookie"),
        email_id: _getCookie("userEmail") || _getCookie("contactEmailCookie"),
        userMobileCountry:
          _getCookie("userMobileCountry") || _getCookie("contactIsdCookie"),
        user_type:
          _getCookie("userType") || _getCookie("contactUserTypeCookie"),
        col_uuid: _getCookie("_col_uuid"),
        verified_mob: _getCookie("verificationFlag"),
        user_id: _getCookie("userNTrackId"),
        active_session_id: sessionStorage.currentBrowseSessionId,
        ip: clientIP,
      };
    }),
    (ntrack.sendEvent = function (e) {
      try {
        var t = e.eventInfo.eventType;
        (t = t.charAt(0).toLowerCase() + t.slice(1)),
          (t = checkForImpression(t)),
          windowProxy1.post({ event: e, url: RamTrackingHittingPoint + t });
      } catch (e) {
        return console.log(e), !1;
      }
    }),
    (ntrack.eventValidate = function (e, t) {
      var a = ntrack.ramTrackingEventModel.getTrackingEventModel(e);
      ntrack.validateTypeOfObjects(a, t, 0) || log("not Valid Bean");
    }),
    (ntrack.validateTypeOfObjects = function (e, t, a) {
      for (var r in t)
        switch (Object.prototype.toString.call(t[r])) {
          case "[object Object]":
            a < 3 && (a++, ntrack.validateTypeOfObjects(e[r], t[r]), a--);
            break;
          default:
            if (
              Object.prototype.toString.call(e[r]) !=
              Object.prototype.toString.call(t[r])
            )
              return !1;
        }
      return !0;
    }),
    (ntrack.fillUserSystemInfo = function (e) {
      switch (
        ((ntrack.trackingGlobalData.systemInfo =
          ntrack.getTrackingGlobalData()),
        null != ntrack.trackingGlobalData.systemInfo.email_id &&
          null != ntrack.trackingGlobalData.systemInfo.email_id &&
          (ntrack.trackingGlobalData.systemInfo.email_id =
            ntrack.trackingGlobalData.systemInfo.email_id.replace(
              /['"]+/g,
              ""
            )),
        Object.getOwnPropertyNames(
          ntrack.trackingGlobalData.systemInfo
        ).forEach(function (t, a, r) {
          fillModel(t, ntrack.trackingGlobalData.systemInfo[t], e);
        }),
        e.trackingEvent)
      ) {
        case ntrack.trackingEvent.Search:
        case ntrack.trackingEvent.Contact:
        case ntrack.trackingEvent.MailOpen:
        case ntrack.trackingEvent.MailSent:
        case ntrack.trackingEvent.DetailView:
        case ntrack.trackingEvent.Requirement:
        case ntrack.trackingEvent.PageView:
      }
    }),
    (ntrack.getVisitId = ntrack.getVisitToken =
      function () {
        return visitId;
      }),
    (ntrack.getVisitorId = ntrack.getVisitorToken =
      function () {
        return visitorId;
      }),
    (ntrack.reset = function () {
      return (
        destroyCookie("userNTrackId"),
        destroyCookie("currentBrowseSessionId"),
        destroyCookie("ntrack_events"),
        destroyCookie("activeSessionId"),
        !0
      );
    }),
    (ntrack.debug = function (e) {
      return (
        !1 === e
          ? destroyCookie("ntrack_debug")
          : setCookie("ntrack_debug", "t", 525600),
        !0
      );
    }),
    (ntrack.trackView = function () {
      var e = {
        url: window.location.href,
        title: document.title,
        page: page(),
      };
      ntrack.track("$view", e);
    }),
    (ntrack.trackClicks = function () {
      $(document).on("click", "a, button, input[type=submit]", function (e) {
        var t = $(e.currentTarget),
          a = eventProperties(e);
        (a.text =
          "input" == a.tag
            ? t.val()
            : $.trim(t.text().replace(/[\s\r\n]+/g, " "))),
          (a.href = t.attr("href")),
          ntrack.track("$click", a);
      });
    }),
    (ntrack.trackSubmits = function () {
      $(document).on("submit", "form", function (e) {
        var t = eventProperties(e);
        ntrack.track("$submit", t);
      });
    }),
    (ntrack.trackChanges = function () {
      $(document).on("change", "input, textarea, select", function (e) {
        var t = eventProperties(e);
        ntrack.track("$change", t);
      });
    }),
    (ntrack.trackAll = function () {
      ntrack.trackView(),
        ntrack.trackClicks(),
        ntrack.trackSubmits(),
        ntrack.trackChanges();
    }),
    (ntrack.getUrlOtherParams = function (e) {
      var t = e.split("|"),
        a = [];
      for (var r in t) {
        var n = t[r].split("=");
        a[n[0]] = n[1];
      }
      return a;
    }),
    (ntrack.getSearchBy = function () {
      var e = ntrack.getUrlParams(ntrack.visitsUrl),
        t = "cityName";
      for (var a in e) {
        var r = a.split("=");
        r.length > 1 &&
          ("projectSocity" == r[0]
            ? (t = "projectSocity")
            : "Locality" == r[0]
            ? (t = "Locality")
            : "developerName" == r[0] && (t = "developerName"));
      }
      return t;
    }),
    (ntrack.getDataMapFromThisEventSourceObject = function (e, t) {
      fillRawObject(e, t, 0);
    }),
    (ntrack.searchCatagory = function () {
      return window.location.href.split("/")[3];
    }),
    (ntrack.setEventActivityType = function (e) {
      switch (e.trackingEvent) {
        case ntrack.trackingEvent.Search:
          null !== e.searchType &&
            null == e.EventActivityType &&
            ("1" == e.searchType
              ? (e.EventActivityType = ntrack.EventActivityType.Property)
              : "2" == e.searchType
              ? (e.EventActivityType = ntrack.EventActivityType.Agent)
              : "3" == e.searchType
              ? (e.EventActivityType = ntrack.EventActivityType.Others)
              : "4" == e.searchType
              ? (e.EventActivityType = ntrack.EventActivityType.Agent)
              : "5" == e.searchType
              ? (e.EventActivityType = ntrack.EventActivityType.PSM)
              : (e.EventActivityType = ntrack.EventActivityType.Others)),
            null == e.EventActivityType &&
              (e.EventActivityType = ntrack.EventActivityType.Others);
          break;
        case ntrack.trackingEvent.Contact:
          null !== e.contactType &&
            null == e.EventActivityType &&
            ("property" == e.contactType ||
            e.contactType == ntrack.EventActivityType.Property
              ? (e.EventActivityType = ntrack.EventActivityType.Property)
              : "agent" == e.contactType ||
                e.contactType == ntrack.EventActivityType.Agent
              ? (e.EventActivityType = ntrack.EventActivityType.Agent)
              : e.contactType == ntrack.EventActivityType.PRJ
              ? (e.EventActivityType = ntrack.EventActivityType.PRJ)
              : e.contactType == ntrack.EventActivityType.PSM
              ? (e.EventActivityType = ntrack.EventActivityType.PSM)
              : "project" == e.contactType || "Project" == e.contactType
              ? (e.EventActivityType = ntrack.EventActivityType.Property)
              : (e.EventActivityType = ntrack.EventActivityType.Others)),
            null == e.EventActivityType &&
              (e.EventActivityType = ntrack.EventActivityType.Others);
          break;
        case ntrack.trackingEvent.MailOpen:
          break;
        case ntrack.trackingEvent.SrpCardView:
        case ntrack.trackingEvent.SrpPropertyClick:
        case ntrack.trackingEvent.Shortlist:
        case ntrack.trackingEvent.SrpContactClick:
          e.EventActivityType = ntrack.EventActivityType.Property;
          break;
        case ntrack.trackingEvent.MailSent:
          break;
        case ntrack.trackingEvent.DetailView:
          e.EventActivityType ||
            (e.EventActivityType = ntrack.EventActivityType.Property);
          break;
        case ntrack.trackingEvent.Requirement:
          break;
        case ntrack.trackingEvent.PageView:
          e.EventActivityType ||
            (e.EventActivityType = ntrack.EventActivityType.Property),
            "property" == e.EventActivityType &&
              (e.EventActivityType = ntrack.EventActivityType.Property),
            "project" == e.EventActivityType &&
              (e.EventActivityType = ntrack.EventActivityType.Property);
      }
    }),
    (ntrack.fillEventModelByEventData = function (e, t, a) {
      Object.getOwnPropertyNames(a).forEach(function (r, n, i) {
        Object.getOwnPropertyNames(t).forEach(function (n, i, o) {
          t[n] == r && fillModel(n, a[r], e);
        });
      });
    }),
    (ntrack.modifyEventMappingObject = function (e, t) {
      switch (e.trackingEvent) {
        case ntrack.trackingEvent.Search:
          null !== e.searchType &&
            ("1" == e.searchType ||
              ("2" == e.searchType
                ? (t.verified = "criAgents")
                : "3" == e.searchType ||
                  "4" == e.searchType ||
                  ("5" == e.searchType &&
                    (t.construction_status = "possessionYears")))),
            e.EventActivityType;
          break;
        case ntrack.trackingEvent.Contact:
          null !== e.contactType &&
            null == e.EventActivityType &&
            ("property" == e.contactType || e.contactType),
            null != e.EventActivityType &&
              e.EventActivityType == ntrack.EventActivityType.PSM &&
              (t.ext_id = "propertyIdStringArray"),
            e.EventActivityType;
          break;
        case ntrack.trackingEvent.MailOpen:
        case ntrack.trackingEvent.MailSent:
        case ntrack.trackingEvent.DetailView:
        case ntrack.trackingEvent.Requirement:
        case ntrack.trackingEvent.PageView:
      }
    }),
    (ntrack.modifySendEventFromUrl = function (e, t) {
      for (
        var a = window.location.href.split("&"), r = [], n = 0;
        n < a.length;
        n++
      )
        if (0 == a[n].indexOf("emailid")) {
          var i = a[n];
          (i = i.substr(8, i.length)), (r.emailid = i.replace(/['"]+/g, ""));
        } else if (0 == a[n].indexOf("mobile")) {
          var o = a[n];
          (o = o.substr(7, o.length)), (r.mobile = o);
        } else {
          var s = a[n].split("=");
          r[s[0]] = s[1];
        }
      if (
        (r.emailid &&
          ((e.userInfo.email_id = r.emailid), (e.mail_id = r.emailid)),
        r.mobile && (e.userInfo.mobile = r.mobile),
        r.pid)
      )
        e.requestInfo.campaign_type = "Paid";
      else {
        var l = "Others";
        if (document.referrer && "" != document.referrer)
          l =
            document.referrer.indexOf("magicbricks.com") < 20 &&
            -1 != document.referrer.indexOf("magicbricks.com")
              ? "Internal"
              : "Organic";
        else if (window.opener) {
          var c = window.opener.location.hostname;
          void 0 !== c &&
            null != c &&
            "" != c &&
            (l =
              null != c &&
              null != c &&
              null != document.domain &&
              null != document.domain &&
              c.indexOf(document.domain) < 20
                ? "Internal"
                : "Organic");
        }
        e.requestInfo.campaign_type = l;
      }
      switch (
        (r.utm_source && (e.requestInfo.utm_source = r.utm_source),
        e.trackingEvent)
      ) {
        case ntrack.trackingEvent.Search:
        case ntrack.trackingEvent.Contact:
        case ntrack.trackingEvent.MailOpen:
        case ntrack.trackingEvent.MailSent:
        case ntrack.trackingEvent.DetailView:
        case ntrack.trackingEvent.Requirement:
        case ntrack.trackingEvent.PageView:
      }
    }),
    (ntrack.util = {
      createSchemaFrom: function (e) {
        for (var t in e)
          switch (Object.prototype.toString.call(e[t])) {
            case "[object Boolean]":
              e[t] = !1;
              break;
            case "[object Number]":
              e[t] = 0;
              break;
            case "[object String]":
              e[t] = "";
              break;
            case "[object Array]":
              e[t] = [];
              break;
            case "[object HTMLInputElement]":
            case "[object global]":
              break;
            case "[object Object]":
              ntrack.util.createSchemaFrom(e[t]);
          }
      },
      getParantPropertyNameFromCode: function (e) {},
      getProjectTypeNameFromCode: function (e) {},
      isAdditionalSearchParam: function (e, t) {},
      Search: {
        Residential: [
          "10000",
          "10017",
          "10001",
          "10002",
          "10003",
          "10054",
          "10020",
          "10021",
          "10022",
        ],
        Commercial: [
          "10018",
          "10006",
          "10012",
          "10015",
          "10016",
          "10007",
          "10008",
          "10009",
          "10052",
          "10051",
          "10010",
          "10011",
          "10013",
          "10014",
          "10030",
        ],
      },
    }),
    (ntrack.util.putAdditionalData = function (e, t, a) {
      switch (t.trackingEvent) {
        case ntrack.trackingEvent.Search:
        case ntrack.trackingEvent.PageView:
          for (var r = t.rawUrl.split("&"), n = {}, i = 0; i < r.length; i++) {
            var o = r[i].split("=");
            n[o[0]] = o[1];
          }
          for (
            var s = [
                "imageVideo",
                "Search_Param_Maps",
                "propertyType_new",
                "source",
                "searchType",
                "price",
                "page",
                "tab1",
                "SRP",
                "propertyType_R_new",
                "mbTrackSrc",
                "firstLocalityLinkRender",
                "resultPerPage",
                "propertyType",
                "nsrSearchBar",
                "searchTransMode",
                "state",
                "sortBy",
                "projectsIn",
              ],
              l = ((i = 0), s.length);
            i < l;
            i++
          )
            null != n[s[i]] && delete n[s[i]];
          Object.getOwnPropertyNames(n).forEach(function (t, r, i) {
            var o = !1;
            if (
              (Object.getOwnPropertyNames(a).forEach(function (e, r, n) {
                null == a[e] || a[e] != t || (o = !0);
              }),
              !o)
            ) {
              var s = {
                paramType: "AdditionalParam-1",
                paramValues: ["123XX", "654FFF", "765DDD"],
              };
              (s.paramType = t),
                (s.paramValues = giveMeArray(n[t])),
                e.additionalData.push(s);
            }
          });
          break;
        case ntrack.trackingEvent.Contact:
        case ntrack.trackingEvent.MailOpen:
        case ntrack.trackingEvent.MailSent:
        case ntrack.trackingEvent.DetailView:
        case ntrack.trackingEvent.Requirement:
          break;
        case ntrack.trackingEvent.SrpCardView:
        case ntrack.trackingEvent.SrpPropertyClick:
        case ntrack.trackingEvent.Shortlist:
        case ntrack.trackingEvent.SrpContactClick:
          var c = new Object();
          null != t.psm && (c.psm = t.psm),
            null != t.localityname && (c.localityname = t.localityname),
            null != t.city && (c.city = t.city.toString().split("-")[0]),
            null != t.category && (c.category = t.category.toString()),
            null != t.prop_type && (c.prop_type = t.prop_type),
            null != t.min_budget && (c.min_budget = t.min_budget),
            null != t.max_budget && (c.max_budget = t.max_budget);
          var d = [];
          if (null != t.bedrooms)
            (c.bedrooms = t.bedrooms),
              ((u = new Object()).paramType = "bedrooms"),
              (u.paramValues = t.bedrooms),
              d.push(u);
          if (null != t.posted_by)
            (c.posted_by = t.posted_by),
              ((u = new Object()).paramType = "posted_by"),
              (u.paramValues = t.posted_by),
              d.push(u);
          if (null != t.result_count)
            ((u = new Object()).paramType = "result_count"),
              (u.paramValues = [t.result_count]),
              d.push(u);
          var u = new Object(),
            p = document.cookie
              .match(/_ga=(.+?);/)[1]
              .split(".")
              .slice(-2)
              .join(".");
          if (
            ((u.paramType = "ga_tracking_id"),
            (u.paramValues = [p]),
            d.push(u),
            null != t.Shortlist)
          ) {
            var h = new Object();
            (h.paramType = "shortlisted"),
              (h.paramValues = [t.Shortlist]),
              d.push(h);
          }
          (e.additionalData = d),
            (e.propertyInfo = c),
            (e.propPositions = t.propPositions),
            (e.sortingType = t.sortingType),
            (e.categ = t.categ),
            (e.userSearchId = t.userSearchId);
      }
    }),
    (ntrack.sendRamTrackEvent = function (e) {
      switch (e.trackingEvent) {
        case ntrack.trackingEvent.Search:
          for (var t = e.rawUrl.split("&"), a = 0; a < t.length; a++) {
            var r = t[a].split("=");
            e[r[0]] = r[1];
          }
          if (null == e.propertyType || null == e.propertyType) return;
          var n = e.propertyType.split(","),
            i = { Residential: [], Commercial: [], Others: [] };
          for (var o in n) {
            var s = n[o].split("_");
            for (var l in s)
              ntrack.util.Search.Residential.includes(s[l])
                ? i.Residential.push(s[l])
                : ntrack.util.Search.Commercial.includes(s[l])
                ? i.Commercial.push(s[l])
                : isNaN(s[l]) || i.Others.push(s[l]);
          }
          Object.getOwnPropertyNames(i).forEach(function (t, a, r) {
            if (0 != i[t].length) {
              (e.prop_type = i[t]), (e.parent_prop_type = t);
              var n = JSON.parse(JSON.stringify(e));
              ntrack.doSingleEventProcessing(n);
            }
          });
          break;
        case ntrack.trackingEvent.Contact:
          ntrack.doSingleEventProcessing(e);
          break;
        case ntrack.trackingEvent.MailOpen:
        case ntrack.trackingEvent.MailSent:
          break;
        case ntrack.trackingEvent.DetailView:
          ntrack.doSingleEventProcessing(e);
          break;
        case ntrack.trackingEvent.Requirement:
          break;
        case ntrack.trackingEvent.SrpCardView:
        case ntrack.trackingEvent.SrpPropertyClick:
        case ntrack.trackingEvent.Shortlist:
        case ntrack.trackingEvent.SrpContactClick:
        case ntrack.trackingEvent.BrowserNotification:
        case ntrack.trackingEvent.PageView:
          ntrack.doSingleEventProcessing(e);
      }
    }),
    (ntrack.doSingleEventProcessing = function (e) {
      log("inRamTracking"), ntrack.refactorData(e), log(e);
      var t = {};
      ntrack.getDataMapFromThisEventSourceObject(e, t),
        log(t),
        setTimeout(function () {
          ntrack.track(ntrack.getSendEventData(t));
        }, 100);
    }),
    (ntrack.getSendEventData = function (e) {
      _getCookie("userEmail") &&
        ("true" == localStorage.getItem("knownTrack")
          ? setCookie("userNTrackId", _getCookie("userEmail"), userNTrackTTL)
          : localStorage.setItem("knownTrack", "true"));
      var t = ntrack.eventMappingObject.getEventMappingModel(e.trackingEvent),
        a = ntrack.ramTrackingEventModel.getTrackingEventModel(e.trackingEvent);
      return (
        ntrack.util.createSchemaFrom(a),
        ntrack.modifyEventMappingObject(e, t),
        ntrack.fillUserSystemInfo(a),
        ntrack.modifySendEventFromUrl(a, e),
        ntrack.util.putAdditionalData(a, e, t),
        ntrack.fillEventModelByEventData(a, t, e),
        a
      );
    }),
    (ntrack.updateInMobile = function () {
      var e = _getCookie("userEmail") || _getCookie("contactEmailCookie");
      setCookie("userNTrackId", e, userNTrackTTL),
        (mobileUpdUrl += "#" + e),
        $("#mFrame1") && $("#mFrame1").remove(),
        $("html").append(
          '<iframe style="display:none;" border="none" id="mFrame1" name="mFrame1" width="0px" height="0px" frameborder="1" src="' +
            mobileUpdUrl +
            '" scrolling="no"></iframe>'
        );
    }),
    (ntrack.refactorData = function (e) {
      switch (e.trackingEvent) {
        case ntrack.trackingEvent.Search:
          var t = [
            "facing",
            "postedSince",
            "inputListings",
            "saleType",
            "imageVideo",
            "amenities",
            "localityName",
            "bedrooms",
            "possessionYears",
            "transactionType",
            "furnished",
            "ageConstruction",
            "bathrooms",
            "locality",
            "psm",
            "possessionStatus",
          ];
          if (
            (Object.getOwnPropertyNames(t).forEach(function (a, r, n) {
              e[t[a]] = getIdsList(t[a], e);
            }),
            null != e.floorNo &&
              ("1" == e.floorNo
                ? (e.preferred_floor = [-1])
                : "2" == e.floorNo
                ? (e.preferred_floor = [0])
                : "3" == e.floorNo
                ? (e.preferred_floor = [1, 2, 3, 4])
                : "4" == e.floorNo
                ? (e.preferred_floor = [5, 6, 7, 8])
                : "5" == e.floorNo
                ? (e.preferred_floor = [9, 10, 11, 12])
                : "6" == e.floorNo
                ? (e.preferred_floor = [13, 14, 15, 16])
                : "7" == e.floorNo &&
                  (e.preferred_floor = [16, 17, 18, 19, 20])),
            null != e.city && (e.city = e.city.split("-")[0]),
            e.radius)
          ) {
            (e.searchLocDist = e.radius.split(",")[2]),
              (e.searchLocDist = e.searchLocDist.split(".")[0]),
              (e.landmarkLatLong = e.radius.split(","));
            var a = e.landmarkLatLong[0] + "," + e.landmarkLatLong[1];
            e.radius = a;
          }
          for (var r in (null != e.psmid &&
            ((e.psm = e.psmid.split(",")),
            (e.preferred_psm = e.psmid.split(","))),
          e.discountsOffers && (e.deals_offers_interests = !0),
          "y" == e.featured && (e.featured = !0),
          "y" == e.criAgents && (e.criAgents = !0),
          "Y" == e.verified && (e.verified = !0),
          "S" == e.category
            ? (e.category = "Buy")
            : "R" == e.category
            ? (e.category = "Rent")
            : "Rent" != e.category &&
              "Buy" != e.category &&
              (e.category = "Buy"),
          e.imageVideo))
            "1" == e.imageVideo[r]
              ? (e.with_photo = !0)
              : "2" == e.imageVideo[r] && (e.with_video = !0);
          if (((e.LocalityType = "Others"), e.projectsType)) {
            var n = e.projectsType;
            for (var i in n.split(","))
              "0" == e.projectsType[i]
                ? (e.projectsType = "Budget")
                : "1" == e.projectsType[i]
                ? (e.projectsType = "Premium")
                : "2" == e.projectsType[i]
                ? (e.projectsType = "Luxory")
                : (e.projectsType = "Others");
          } else e.projectsType = "Others";
          if (e.projectsIn) {
            var o = e.projectsIn;
            for (var i in o.split(","))
              "0" == e.projectsIn[i]
                ? (e.LocalityType = "Upcoming")
                : "1" == e.projectsIn[i]
                ? (e.LocalityType = "Developed")
                : "2" == e.projectsIn[i]
                ? (e.LocalityType = "Premium")
                : (e.LocalityType = "Others");
          } else e.projectsIn && (e.LocalityType = "Others");
          if (e.propertiesIn)
            for (var i in e.propertiesIn.split(","))
              "0" == e.propertiesIn[i]
                ? (e.LocalityType = "Upcoming")
                : "1" == e.propertiesIn[i]
                ? (e.LocalityType = "Developed")
                : "2" == e.propertiesIn[i]
                ? (e.LocalityType = "Premium")
                : (e.LocalityType = "Others");
          else e.propertiesIn && (e.LocalityType = "Others");
          if (e.campaignCode)
            -1 ==
              ["Paid", "Internal", "Organic", "Others"].indexOf(
                e.campaignCode
              ) && (e.campaignCode = "Others");
          else e.campaignCode = "Others";
          if (e.bedrooms) {
            "string" == typeof e.bedrooms && (e.bedrooms = [e.bedrooms]);
            for (var s = [], l = 0; l < e.bedrooms.length; l++)
              s = e.bedrooms[l].includes("-")
                ? s.concat(e.bedrooms[l].split("-"))
                : s.concat(e.bedrooms[l]);
            e.bedrooms = s;
          }
          break;
        case ntrack.trackingEvent.SrpCardView:
        case ntrack.trackingEvent.SrpPropertyClick:
        case ntrack.trackingEvent.Shortlist:
        case ntrack.trackingEvent.SrpContactClick:
          if (e.campaignCode)
            -1 ==
              ["Paid", "Internal", "Organic", "Others"].indexOf(
                e.campaignCode
              ) && (e.campaignCode = "Others");
          else e.campaignCode = "Others";
          e.userSearchId = _getCookie("uniqUserSearchId");
          break;
        case ntrack.trackingEvent.Contact:
          var c = e.propertyIdStringArray;
          for (var d in ((e.propertyIdStringArray = []), c))
            e.propertyIdStringArray.push(giveMeArray(c[d])[0]);
          if (
            ((e.actualOwnerId = giveMeArray(e.actualOwnerId)),
            (e.interested = []),
            e.homeLoanCheckVal2 && e.interested.push("Site Visit"),
            e.homeLoanCheckVal3 && e.interested.push("Purchase"),
            e.loanLead && (e.homeLoan = !0),
            e.campaignCode)
          )
            -1 ==
              ["Paid", "Internal", "Organic", "Others"].indexOf(
                e.campaignCode
              ) && (e.campaignCode = "Others");
          else e.campaignCode = "Others";
          break;
        case ntrack.trackingEvent.MailOpen:
        case ntrack.trackingEvent.MailSent:
          break;
        case ntrack.trackingEvent.DetailView:
          if (
            (e.comScorePageUrl &&
              ((e.id = e.comScorePageUrl.slice(
                "project_search_detail_".length,
                e.comScorePageUrl.length - 2
              )),
              (e.EventActivityType = ntrack.EventActivityType.PSM)),
            e.campaignCode)
          )
            -1 ==
              ["Paid", "Internal", "Organic", "Others"].indexOf(
                e.campaignCode
              ) && (e.campaignCode = "Others");
          else e.campaignCode = "Others";
          break;
        case ntrack.trackingEvent.Requirement:
        case ntrack.trackingEvent.PageView:
          break;
        default:
          log("unknown event is been hit");
      }
      ntrack.setEventActivityType(e);
    }),
    (ntrack.track = function (e) {
      eventQueue.push(e),
        setTimeout(function () {
          trackEvent(e);
        }, 1e3);
    }),
    (userNTrackId = _getCookie("userNTrackId")),
    (currentBrowseSessionId = _getCookie("currentBrowseSessionId")),
    userNTrackId)
  ) {
    (void 0 !== (noeuCookie = _getCookie("NOEU")) &&
      null != noeuCookie &&
      "" != noeuCookie) ||
      setCookie("NOEU", "old", userNTrackTTL),
      "undefined" != typeof Storage
        ? sessionStorage.currentBrowseSessionId ||
          (sessionStorage.currentBrowseSessionId = generateId())
        : log("your browser does not support session Storage"),
      log("Active visit"),
      setReady();
  } else {
    var noeuCookie;
    if (!userNTrackId)
      (userNTrackId = localStorage.getItem("userUniqueNTrackId")),
        setCookie("userNTrackId", userNTrackId, userNTrackTTL),
        (void 0 !== (noeuCookie = _getCookie("NOEU")) &&
          null != noeuCookie &&
          "" != noeuCookie) ||
          setCookie("NOEU", "new", userNTrackTTL),
        localStorage.setItem("knownTrack", "false"),
        "undefined" != typeof Storage
          ? sessionStorage.currentBrowseSessionId ||
            (sessionStorage.currentBrowseSessionId = generateId())
          : log("your browser does not support session Storage");
    if (_getCookie("UserNTrackId")) {
      log("Visit started");
      var data = {
        visit_token: currentBrowseSessionId,
        visitor_token: userNTrackId,
        platform: ntrack.platform || "Web",
        landing_page: window.location.href,
        screen_width: window.screen.width,
        screen_height: window.screen.height,
      };
      document.referrer.length > 0 && (data.referrer = document.referrer),
        log(data),
        $.post(visitsUrl, data, setReady, "json");
    } else log("Cookies disabled"), setReady();
  }
  ntrack.wapNotificationEvent = function (e) {
    var t = e,
      a = _getCookie("webpushCookieRead");
    if (null != t && null == a) {
      setCookie("webpushCookieRead", "true", 129600),
        setCookie("m_web_push", e, 129600);
      try {
        var r = ntrack.getRawDataObject();
        (r.trackingEvent = ntrack.trackingEvent.BrowserNotification),
          (r.Source = ntrack.Source.Web_Mobile),
          (r.rid = t),
          (r.EventActivityType = ntrack.EventActivityType.Others),
          ntrack.sendRamTrackEvent(r);
      } catch (e) {
        console.log(e);
      }
    }
  };
  try {
    eventQueue = JSON.parse(_getCookie("ntrack_events") || "[]");
  } catch (e) {}
  for (var i = 0; i < eventQueue.length; i++) trackEvent(eventQueue[i]);
} catch (err) {
  console.log(err);
}
function implicitTrackingUser() {
  try {
    var e = getCookie("userEmail") || getCookie("contactEmailCookie");
    dataLayer &&
      null != e &&
      (dataLayer.push({ cd72: e }),
      dataLayer.push({ ga_category: "contactsuccess" }),
      dataLayer.push({ event: "property_contact" }));
  } catch (e) {
    console.log("error in implicitTrackingUser");
  }
}
function implicitTrackingActivity(e) {
  try {
    var t = getCookie("userEmail") || getCookie("contactEmailCookie");
    if (dataLayer && null != t) {
      var a = e.replaceAll(" ", "_");
      dataLayer.push({ cd72: t }),
        dataLayer.push({ cd73: e }),
        dataLayer.push({ ga_category: a }),
        dataLayer.push({ event: a });
    }
  } catch (e) {
    console.log("error in implicitTrackingActivity");
  }
}
function trackEventData(e) {
  try {
    var t = ntrack.getRawDataObject();
    (t.EventActivityType = e[0]),
      (t.pageComponent = e[1]),
      (t.Source = e[2]),
      (t.rawUrl = e[3]),
      (t.trackingEvent = ntrack.trackingEvent.PageView),
      (t.pageUrl = window.location.href),
      (t.pageTitle = document.title),
      ntrack.sendRamTrackEvent(t);
  } catch (e) {
    console.error(e);
  }
}
var pushNotKey =
  "BCGzQeHjqzBk96LxZ2BRlRUxOzTc7V7hnKRRsOabsNNpcLdafLRZNtRl6MVb4sIIzmqdUIhVj0m__PCVqrR_w4E";
function getCookie(e) {
  var t,
    a,
    r,
    n = document.cookie.split(";");
  for (t = 0; t < n.length; t++)
    if (
      ((a = n[t].substr(0, n[t].indexOf("="))),
      (r = n[t].substr(n[t].indexOf("=") + 1)),
      (a = a.replace(/^\s+|\s+$/g, "")) == e)
    )
      return unescape(r);
}
function readCookie(e) {
  for (
    var t = document.cookie.split(";"), a = e + "=", r = 0;
    r < t.length;
    r++
  ) {
    for (var n = t[r]; " " == n.charAt(0); ) n = n.substring(1, n.length);
    if (0 == n.indexOf(a))
      return (
        (retVal = n.substring(a.length, n.length)),
        "userTypeflSlider" == e && retVal.indexOf(",") > 0
          ? retVal.substring(0, retVal.indexOf(","))
          : "userEmailflSlider" == e
          ? retVal.replace(/^"(.*)"$/, "$1")
          : "userNameflSlider" == e
          ? retVal.replace(/^"(.\*)"$/, "$1")
          : retVal
      );
  }
  return null;
}
function add1stepHTML() {
  var e = !1,
    t = readCookie("blockChromePop");
  void 0 !== t && null != t && "Y" == t && (e = !0),
    "default" !== Notification.permission ||
      e ||
      $("body").append(
        '<div class="browserNotiPop-bg"></div><div class="browserNotiPop"><div class="notifyStep1"><div class="notifiClose"></div><div class="browserNotiLogo"></div><div class="browserNotiCont"><div class="letUsSend">Instant Property Updates & Alerts!</div><div class="browserNNoti">Get all the latest Property recommendations, updates & more. You can check for browser settings to manage alerts.</div><div class="actionBlock"><a href="javascript://" onclick="blockChromeNoti();" class="remindMeL">Not Now</a> <a href="javascript://" onclick="askForChromeNotifications();" class="allowMe">Allow</a></div></div><div class="clearAll"></div></div></div></div>'
      );
}
function askForChromeNotifications() {
  removeStep1PopUp(), activatePushNotification("searchPage");
}
function blockChromeNoti() {
  removeStep1PopUp(), createCookieNotification("blockChromePop", "Y", 24);
}
function removeStep1PopUp() {
  $(".browserNotiPop").hide(), $(".browserNotiPop-bg").hide();
}
navigator.serviceWorker &&
location &&
(location.protocol.indexOf("https") > -1 ||
  location.host.indexOf("localhost") > -1)
  ? navigator.serviceWorker
      .register("/service-worker.js", { scope: "/" })
      .then(
        function () {
          return (
            console.log("Service Worker Registered"),
            navigator.serviceWorker.ready
          );
        },
        function (e) {
          console.log("SW register fail", e);
        }
      )
      .then(function (e) {
        try {
          activatePushNotification("searchPage");
        } catch (e) {
          console.log(
            "error in push notifcation after service worker registration"
          );
        }
      })
  : console.log("service worker not supported in browser");
try {
  $(".browserNotiPop-bg").click(function () {
    removeStep1PopUp(), createCookieNotification("blockChromePop", "Y", 0);
  });
} catch (err) {}
function activatePushNotification(e) {
  var t = getCookie("newFcmChk"),
    a = getCookie("m_web_push");
  (null != t && null != t) ||
    null == a ||
    navigator.serviceWorker.ready.then(function (e) {
      e.pushManager.subscribe({
        userVisibleOnly: !0,
        applicationServerKey: urlBase64ToUint8Array(pushNotKey),
      });
    }),
    navigator.serviceWorker.ready.then(function (t) {
      console.log("SW register success", t),
        setTimeout(function () {
          var t = getCookie("alertRaisedCount"),
            a = !0;
          t && !isNaN(t) && t >= alertRaisedCount && (a = !1),
            "PushManager" in Window ||
            null != readCookie("webpushCookieRead") ||
            !Notification ||
            "denied" == Notification.permission ||
            !a
              ? Notification &&
                "denied" == Notification.permission &&
                (remove_cookie("alertRaisedCount"),
                remove_cookie("webpushCookieRead"),
                remove_cookie("m_web_push"))
              : checkSubscription(e);
        }, 30);
    });
}
var alertRaisedCount = 1;
function urlBase64ToUint8Array(e) {
  var t = (e + "=".repeat((4 - (e.length % 4)) % 4))
      .replace(/\-/g, "+")
      .replace(/_/g, "/"),
    a = window.atob(t);
  return Uint8Array.from(
    _toConsumableArray(a).map(function (e) {
      return e.charCodeAt(0);
    })
  );
}
function checkSubscription(e) {
  navigator.serviceWorker.ready.then(function (t) {
    var a = getCookie("alertRaisedCount");
    a && !isNaN(a) ? a++ : (a = 1),
      createCookieNotification("alertRaisedCount", a, 0),
      (notif_google = 1);
    try {
      Notification &&
        "default" == Notification.permission &&
        trackGA("ChromeNotification", "Home", "Popup");
    } catch (e) {
      console.log(e);
    }
    t.pushManager
      .subscribe({
        userVisibleOnly: !0,
        applicationServerKey: urlBase64ToUint8Array(pushNotKey),
      })
      .then(
        function (t) {
          t
            ? (sendSubcription(t),
              trackGA("ChromeNotification", "Home", "Granted"))
            : subscribePush(e);
        }.bind(this)
      )
      .catch(function (e) {
        console.log("Error getting subscription", e),
          trackGA("ChromeNotification", "Home", "Denied");
      });
  });
}
function sendSubcription(e) {
  if ((console.log(e), e)) {
    var t = e.endpoint.slice(e.endpoint.lastIndexOf("/") + 1);
    console.log("endPoint" + t);
    var a = JSON.stringify(e);
    console.log("*********  subscription id : " + a),
      trackGA("ChromeNotification-step1", t, "rid"),
      fetch("/mbsearch/notification/mbnotificationapi/browser/subscribe", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: a,
      })
        .then(function (e) {
          e && e.ok
            ? (console.log(e),
              createCookieNotification("newFcmChk", 1, 129600),
              ntrack.wapNotificationEvent(t),
              trackGA("ChromeNotification-step2", userNTrackId, t))
            : createCookieNotification("alertRaisedCount", 0);
        })
        .catch(function (e) {
          console.log("Error sending subscription to server:", e);
        });
  }
}
function subscribePush(e) {
  "denied" === Notification.permission
    ? (console.warn("Permission for Notifications was denied"),
      Notification.requestPermission(function (t) {
        if ("granted" != t)
          return trackGA("ChromeNotification", "Home", "Denied"), !1;
        subscribeOnclick(e);
      }).catch(function (e) {
        trackGA("ChromeNotification", "Home", "Denied");
      }))
    : subscribeOnclick(e);
}
function subscribeOnclick(e) {
  navigator.serviceWorker.ready.then(function (e) {
    e.pushManager
      .subscribe({
        userVisibleOnly: !0,
        applicationServerKey: urlBase64ToUint8Array(pushNotKey),
      })
      .then(function (e) {
        console.log("User is subscribed."),
          sendSubcription(e),
          trackGA("ChromeNotification", "Home", "Granted");
      })
      .catch(function (e) {
        if ("denied" === Notification.permission)
          return (
            console.warn("Permission for Notifications was denied"),
            trackGA("ChromeNotification", "Home", "Denied"),
            void sendSubcription(null)
          );
        console.log("Unable to subscribe to push."),
          trackGA("ChromeNotification", "Home", "Denied");
      });
  });
}
function trackGA(e, t, a) {}
function remove_cookie(e) {
  document.cookie = e + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
function createCookieNotification(e, t, a) {
  var r = location.host,
    n = "";
  if (a) {
    var i = new Date();
    i.setTime(i.getTime() + 60 * a * 60 * 1e3),
      (n = "; expires=" + i.toGMTString());
  }
  if (1 === r.split(".").length)
    document.cookie = e + "=" + t + n + "; secure; path=/";
  else {
    var o = r.split(".");
    o.shift();
    var s = "." + o.join(".");
    document.cookie = e + "=" + t + n + "; path=/; secure; domain=" + s;
  }
}
function whatsappUrlHomePage(e) {
  var t = "https://wa.me/";
  void 0 !== e && e.length > 0 && (t += e);
  return (
    (t += "?text=") + encodeURIComponent("Hi, I am looking for a Home Loan.")
  );
}
function showReMarketingBannerOnHomePage(e) {
  try {
    changeCookiesForRotatingRemarkettingBanner();
    var t = getCookie("GEN_RMB"),
      a = getCookie("GEN_RMB_MOD");
    if (
      (void 0 !== a && null != a && "" != a && (t = a),
      null != t && "undefined" != t && "" != t)
    ) {
      var r = (t = decodeURIComponent(t)).split(",");
      r.length > 2 && ((r = getMultipleRandom(r, 2)), (t = r.join()));
      var n = "",
        i = "";
      "undefined" != typeof contextPath && "" !== contextPath
        ? (i = contextPath)
        : "undefined" != typeof domainURL &&
          "" !== domainURL &&
          (i = domainURL);
      var o =
        i +
        "bricks/ajax/getRemarketingBannerNew?Id=" +
        t +
        "&pdtId=51139&defaultReq=N&pagename=reMarketingBannerGeneric&fromHome=Y";
      return (
        void 0 !== e && "Mobile" === e && (o += "&fromHomeMobile=Y"),
        $.ajax({
          url: o,
          async: !1,
          success: function (e) {
            (n = e),
              $("#sponsored-banner").html(e),
              saveShownRemarketingBanner(t);
          },
        }),
        n
      );
    }
  } catch (e) {
    console.log(e);
  }
}
function getMultipleRandom(e, t) {
  return _toConsumableArray(e)
    .sort(function () {
      return 0.5 - Math.random();
    })
    .slice(0, t);
}
function saveShownRemarketingBanner(e) {
  try {
    if (void 0 !== e && null != e) {
      var t = e.split(",");
      t.length > 2 &&
        setCookieBannerData("shown_home_remark", t[0] + "," + t[1], 10);
    }
  } catch (e) {
    console.log(e);
  }
}
function setCookieBannerData(e, t, a) {
  t = (t = String(t)).replace(/%20/g, "");
  var r = "";
  if (a) {
    var n = new Date();
    n.setTime(n.getTime() + 60 * a * 1e3), (r = "; expires=" + n.toGMTString());
  }
  document.cookie = e + "=" + escape(t) + r + "; secure; path=/";
}
function changeCookiesForRotatingRemarkettingBanner() {
  try {
    var e = getCookie("GEN_RMB"),
      t = getCookie("GEN_RMB_MOD"),
      a = compareModAndOriginalBannerId(e, t);
    if (
      (void 0 !== t && null != t && "" != t && (e = t),
      void 0 !== e && null != e)
    ) {
      var r = e.split(","),
        n = getCookie("shown_home_remark");
      r.length > 2 &&
        void 0 !== n &&
        null != n &&
        "" != n &&
        setCookieBannerData(
          "GEN_RMB_MOD",
          (e = (e = e.replace(n + ",", "")) + "," + n),
          10
        );
    }
    a || setCookieBannerData("GEN_RMB_MOD", getCookie("GEN_RMB"), 10);
  } catch (e) {
    console.log(e);
  }
}
function compareModAndOriginalBannerId(e, t) {
  try {
    if (
      void 0 !== e &&
      "undefined" !== t &&
      null != e &&
      null != t &&
      "" != e &&
      "" != t
    ) {
      if (e.length == t.length) {
        for (var a = t.split(","), r = 0; r < a.length; r++)
          e = e.replace(a[r], "");
        return 0 == (e = e.replace(/,/gi, "")).length;
      }
      return !1;
    }
  } catch (e) {
    console.log(e);
  }
  return !1;
}
function contactFormProperty(e, t, a) {
  e.preventDefault();
  var r =
    $("#domcache_constant").attr("data-domainurl") +
    "propertyDetail/showContactForm?pageName=ModifiedSearchEngine&propId=" +
    t +
    "&contactId=" +
    t +
    "&contactType=" +
    a +
    "&mess=undefined&srpSimilar=Y&alliance=&autoContactCookie=Y&category=S&propcategory=Residential&pageSrcOrigin=homeIframe";
  $("body").append(
    '<div class="home-contact-overlay"></div><div class="home-contact-popup"><div class="home-contact-popup__close" onclick="closeContactForm();"></div><div class="home-page-contact" id="homePageContact" style="display:none"></div></div>'
  ),
    $.ajax({
      url: r,
      type: "GET",
      async: !1,
      success: function (e) {
        $("#homePageContact").html(e),
          setTimeout(function () {
            $("#homePageContact").show();
          }, 600);
      },
    });
  var n = getCookie("verificationFlag");
  null != n &&
    "undefined" != n &&
    "Y" == n &&
    setTimeout(function () {
      $("#contactForm" + t).show();
    }, 600);
}
function closeContactForm() {
  $(".home-contact-popup").remove(), $(".home-contact-overlay").remove();
}
function showReMarketingBannerInDiv(e, t, a, r) {
  if ("reMarketingBannerGeneric" != a) {
    var n = null;
    if (
      ((n = readCookie("GEN_RMB")),
      null != (n = decodeURIComponent(n)) && "null" != n)
    ) {
      for (var o = n; "," === o.charAt(0); ) o = o.substr(1);
      var s = o.split(",");
      if (s.length > r) {
        var l = getRandom(r, s.length - 1),
          c = [];
        for (i = 0; i < l.length; i++)
          "" != s[l[i]] && void 0 !== s[l[i]] && c.push(s[l[i]]);
        o = c.join();
      }
    }
  } else showReMarketingBannerGenericInDiv(e, t, a, r);
}
function showReMarketingBannerGenericInDiv(e, t, a, r) {
  var n = null,
    o = readCookie("SHWN_GEN_RMB");
  "null" == (o = decodeURIComponent(o)) || null == o
    ? (createCookieRem("SHWN_GEN_RMB", "", 30), (o = ""))
    : "," === o.charAt(0) && (o = o.substr(1));
  if (((n = readCookie("GEN_RMB")), null != (n = decodeURIComponent(n)))) {
    for (var s = n; "," === s.charAt(0); ) s = s.substr(1);
    var l = s.split(",");
    if (
      (l.length < r &&
        "" != o &&
        (l = union_arrays(l, o.split(","))).length > r &&
        (l = l.slice(0, r)),
      l.length >= r)
    ) {
      if (l.length > r && "" != o) {
        var c = l.length,
          d = o.split(",");
        for (i = 0; i < d.length; i++) {
          var u = l.indexOf(d[i]);
          if ((u > -1 && (l.splice(u, 1), c--), c <= r)) break;
        }
      }
      var p = getRandom(r, l.length - 1),
        h = [];
      for (i = 0; i < p.length; i++)
        "" != l[p[i]] && void 0 !== l[p[i]] && h.push(l[p[i]]);
      s = h.join();
    }
    if ("" != o && null != s) {
      var m = o.split(","),
        f = union_arrays(s.split(","), m);
      f.length > 15 && (f = f.slice(0, 15)),
        null != f && createCookieRem("SHWN_GEN_RMB", f, 30);
    } else null != s && createCookieRem("SHWN_GEN_RMB", s, 30);
  }
}
function getRandom(e, t) {
  for (var a = []; a.length < e; ) {
    for (var r = Math.ceil(Math.random() * t), n = !1, i = 0; i < a.length; i++)
      if (a[i] == r) {
        n = !0;
        break;
      }
    n || (a[a.length] = r);
  }
  return a;
}
function savePageBannersInCookies(e, t) {
  if ("GEN_RMB" == e) savePageReMarketingBannersInCookies(e, t);
  else {
    var a = readCookie(e);
    if (
      (null == (a = decodeURIComponent(a)) &&
        (createCookieRem(e, "", 30), (a = "")),
      t)
    ) {
      var r = a.split(",");
      for (("null" != r && null != r) || (r = ""); "," === t.charAt(0); )
        t = t.substr(1);
      for (var n = union_arrays(t.split(","), r), i = n.length; i--; )
        "null" === n[i] && n.splice(i, 1);
      n.length > 5 && (n = n.slice(0, 5)), createCookieRem(e, n.toString(), 30);
    }
  }
}
function savePageReMarketingBannersInCookies(e, t) {
  var a = readCookie(e);
  if (
    (("null" != (a = decodeURIComponent(a)) && null != a) ||
      (createCookieRem(e, "", 30), (a = "")),
    t)
  ) {
    for (var r = a.split(","); "," === t.charAt(0); ) t = t.substr(1);
    for (var n = union_arrays(t.split(","), r), i = n.length; i--; )
      ("null" !== n[i] && "" !== n[i]) || n.splice(i, 1);
    var o = readCookie("SHWN_GEN_RMB");
    "null" == (o = decodeURIComponent(o)) || null == o
      ? (createCookieRem("SHWN_GEN_RMB", "", 30), (o = ""))
      : "," === o.charAt(0) && (o = o.substr(1)),
      createCookieRem(e, t, 30);
  }
}
function isBigEnough(e) {
  return null != e && "" != e ? e : void 0;
}
function union_arrays(e, t) {
  return e.concat(t).filter(function (e, t, a) {
    return t == a.indexOf(e);
  });
}
function arrayUnique(e) {
  for (var t = e.concat(), a = 0; a < t.length; ++a)
    for (var r = a + 1; r < t.length; ++r) t[a] === t[r] && t.splice(r--, 1);
  return t;
}
function eraseCookie(e) {
  createCookieRem(e, "", -1);
}
function createCookieRem(e, t, a) {
  try {
    var r = document.domain + "";
    -1 != r.indexOf(".magicbricks.com") && (r = ".magicbricks.com");
    var n = "";
    if (a) {
      var i = new Date();
      i.setTime(i.getTime() + 24 * a * 60 * 60 * 1e3),
        (n = "; expires=" + i.toGMTString());
    }
    document.cookie =
      e + "=" + encodeURIComponent(t) + n + "; path=/; secure; domain=" + r;
  } catch (e) {
    void 0 !== window.errorHandler &&
      errorHandler("Remarketing", "createCookieRem", e);
  }
}
function saveExternalRemarketingAdsInCookies(e) {
  if (null != e && "" != e && "null" != e) {
    for (; "," === e.charAt(0); ) e = e.substr(1);
    var t,
      a = [],
      r = readCookie("M_EXT_RMKT"),
      n = [];
    for (r = decodeURIComponent(r); "," === r.charAt(0); ) r = r.substr(1);
    null != r && "null" != r && (n = r.split(","));
    var o = arrayUnique(e.split(",").concat(n));
    if (
      (o.length > 5 && (o = o.slice(0, 5)),
      (t = o[0] + "_0"),
      dataLayer.push({ priExtRmtAd: t }),
      createCookieRem("M_EXT_RMKT", o.join(), 30),
      o.length >= 2)
    ) {
      var s = "";
      for (i = 0; i < 8; i++)
        for (j = 0; j < o.length && a.length < 15; j++)
          0 == i && 0 == j ? (s = o[j] + "_" + i) : a.push(o[j] + "_" + i);
      "" != s && a.push(s);
      var l = a.join("|");
      dataLayer.push({ reccomExtRmtAd: l }), dataLayer.push({ dynx_itemid: a });
    } else dataLayer.push({ dynx_itemid: t });
    dataLayer.push({ event: "page_load" });
  }
}
function loadReMarketingBanner(e, t, a, r, n, i, o, s, l, c) {
  try {
    null != o && "" != o && (t = t + "-" + o),
      null != r &&
        "" != r &&
        ("Sale" == r ? (r = "S") : "Rent" == r && (r = "R"));
    var d =
      $("#domcache_constant").attr("data-contexturl") +
      "getBannerIds?promotionDefRefNo=" +
      e +
      "&localityName=" +
      a +
      "&cityRefNo=" +
      t +
      "&transTypeSearch=" +
      r +
      "&pagename=" +
      n +
      "&psmrfnum=" +
      i;
    $.ajax({
      type: "GET",
      url: d,
      async: !0,
      dataType: "json",
      beforeSend: function () {},
      success: function (t) {
        if (null != t && null != t.bannerIds) {
          var a = t.bannerIds;
          null != a &&
            "null" != a &&
            "" != a &&
            savePageBannersInCookies("GEN_RMB", a),
            "Y" == s && showReMarketingBannerInDiv(e, l, n, c);
        }
      },
      error: function (e, t) {
        console.log("Error in ajax call of loadReMarketingBanner Data " + e);
      },
      complete: function () {},
    });
  } catch (t) {
    void 0 !== window.errorHandler &&
      errorHandler(
        "remarketingBanner",
        "remarketingBanner:div:" + divId + ":pdt:" + e,
        t
      );
  }
}
function showRemarketingBannerGeneric(e, t, a, r, n, i, o) {
  try {
    var s =
      $("#domcache_constant").attr("data-contexturl") +
      "iFollowBanners.html?Id=" +
      e +
      "&pdtId=" +
      a +
      "&maxReq=" +
      r +
      "&defaultReq=" +
      n +
      "&pagename=" +
      i +
      "&defaultPdtId=" +
      o +
      "&interface=mobile";
    $.ajax({
      dataType: "html",
      type: "GET",
      url: s,
      cache: !0,
      async: !0,
      success: function (e) {
        "" !== e && null !== e
          ? "reMarketingBannerGeneric" == i &&
            ($("#firstIFollowGeneric").html(e),
            "51139" == a &&
              (0 == $("#firstIFollowGeneric .iFollowCont").length &&
                ($("#propertyServices").show(),
                $("#firstIFollowGeneric").hide()),
              $("#firstIFollowGeneric .iFollowCont").length >= 1 &&
                ($("#firstIFollowGeneric").show(),
                $("#propertyServices").hide())))
          : "51139" == a &&
            0 == $("#firstIFollowGeneric .iFollowCont").length &&
            $("#propertyServices").show();
      },
      error: function (e, t) {
        "51139" == a &&
          0 == $("#firstIFollowGeneric .iFollowCont").length &&
          $("#propertyServices").show(),
          console.log("Error in ajax call of showRemarketingBanner  Data " + e);
      },
      complete: function () {},
    });
  } catch (e) {
    void 0 !== window.errorHandler &&
      errorHandler("remarketingBanner", "showRemarketingBanner", e);
  }
}
function openLeadGenContact(e, t) {
  var a = "";
  (a = '<div class="preContPop__overlay"></div>'),
    (a +=
      '<div class="preContPop preContPop--leadgen"><div class="preContPop__close" onclick="closePreContactPopup();"></div>'),
    (a +=
      '<div id="leadGenContactId"><iframe class="preContPop__iframe" src="' +
      e +
      '" width="100%" height="485" frameborder="0" scrolling="no"></iframe></div>'),
    (a += "</div>"),
    $("body").append(a);
}
function closePreContactPopup() {
  $(".preContPop__overlay").remove(),
    $(".preContPop").remove(),
    $("body").removeClass("no-overflow");
}
var tvcBannerSlider = function (e, t, a, r, n) {
  var i = document.querySelectorAll("".concat(e, " .slide-img")),
    o = document.querySelector("".concat(e, " .container-slider")),
    s = t ? document.querySelector("".concat(e, " .slide-btn-next")) : "",
    l = t ? document.querySelector("".concat(e, " .slide-btn-prev")) : "",
    c = document.querySelector("".concat(e, " .navigation-dots")),
    d = i.length,
    u = n,
    p = 0,
    h = void 0,
    m = void 0,
    f = void 0,
    v = 0;
  function g(t) {
    (o.style.transform = "translateX(-" + u * t + "px)"),
      (p = t),
      document
        .querySelector("".concat(e, " .slide-img.active"))
        .classList.remove("active"),
      i[p].classList.add("active"),
      document
        .querySelector("".concat(e, " .single-dot.active"))
        .classList.remove("active"),
      c.children[p].classList.add("active");
  }
  o.addEventListener("touchstart", function (e) {
    !(function (e) {
      !1,
        setTimeout(function () {
          !0;
        }, 250),
        (h = e.targetTouches[0].pageX);
    })(e);
  }),
    o.addEventListener("touchmove", function (e) {
      !(function (e) {
        (m = e.targetTouches[0].pageX),
          (f = v * u + (h - m)) < 600 &&
            $(o).css("transform", "translate3d(-" + f + "px,0,0)");
      })(e);
    }),
    o.addEventListener("touchend", function (e) {
      Math.abs(v * u - f) > u / 2 &&
        (f > v * u && v < d - 1 ? v++ : f < v * u && v > 0 && v--),
        g((p = v));
    }),
    t &&
      (s.addEventListener("click", function () {
        g(p >= d - 1 ? 0 : ++p);
      }),
      l.addEventListener("click", function () {
        g(p <= 0 ? d - 1 : --p);
      }));
  i.forEach(function (e, t) {
    e.style.left = 100 * t + "%";
    var a = $(e).find("img").attr("data-src");
    $(e).find("img").attr("src", a);
  }),
    i[0].classList.add("active"),
    (function () {
      for (
        var e = function (e) {
            var t = document.createElement("div");
            t.classList.add("single-dot"),
              c.appendChild(t),
              t.addEventListener("click", function () {
                (v = e), g(e);
              });
          },
          t = 0;
        t < d;
        t++
      )
        e(t);
      c.children[0].classList.add("active"), 1 == d && c.classList.add("hide");
    })(),
    a &&
      setInterval(function () {
        p == d && (p = 0), g(p), p++;
      }, r);
};
function openTvcPopupMobile(e, t) {
  var a = $(e).attr("data-video");
  $(t).addClass("active"), $("#tvc-video-frame").attr("src", a);
}
function closeTvcPopupMobile(e) {
  $(e).removeClass("active"), $("#tvc-video-frame").attr("src", "");
}
var searchValues = [],
  citySelected = !1,
  businessTypeArray = "",
  businessTypeParentArray = "",
  bhk = !1,
  lastBudgetIndex = 0;
function homepageSearchFormURL(e) {
  var t = "",
    a = "",
    r = "",
    n = "0",
    o = "0";
  if (!validateHomeSearchForm()) {
    var s = "",
      l = "",
      c = "S";
    isEmptyChk($("#categoryType").val()) || (c = $("#categoryType").val());
    var d,
      u = _createForOfIteratorHelper(
        document.getElementsByName("bar_propertyType_new_buy")
      );
    try {
      for (u.s(); !(d = u.n()).done; ) {
        1 == (v = d.value).checked &&
          ("" != a && (a += ","),
          "" != r && (r += ","),
          (a += v.title),
          (r += v.value));
      }
    } catch (e) {
      u.e(e);
    } finally {
      u.f();
    }
    isEmptyChk($("#budgetMin").val()) || (n = $("#budgetMin").val()),
      isEmptyChk($("#budgetMax").val()) || (o = $("#budgetMax").val());
    var p,
      h = "",
      m = "",
      f = _createForOfIteratorHelper(
        document.getElementsByName("bhkFlatHouse")
      );
    try {
      for (f.s(); !(p = f.n()).done; ) {
        var v;
        1 == (v = p.value).checked &&
          ("" != m && (m += ","),
          "" != h && (h += ","),
          (m += v.title),
          (h += v.value));
      }
    } catch (e) {
      f.e(e);
    } finally {
      f.f();
    }
    (h = h.replace(/-/g, ",")),
      console.log(t),
      console.log(h),
      console.log(r),
      "" != a && (a = getHomePropertyTypeClubingDiscription(a, c)),
      (t +=
        "R" == c || "COMM" == c ? "property-for-rent/" : "property-for-sale/");
    var g = getHomePropertyTypeResORComm(r);
    "" != g
      ? (t = t + g + "-")
      : (t += "COMM" == c ? "commercial-" : "residential-"),
      (t += "real-estate?"),
      isEmptyChk($("#bedroom_name").val()) ||
        (t = t + "bedroom=" + $("#bedroom_name").val());
    var y = m.split(","),
      b = "";
    if (t.includes("bedroom"))
      for (i = 0; i < y.length; i++)
        "5+ Bhk" == y[i] && (y[i] = ">5 Bhk"),
          $("#bedroom_name").val().includes(y[i].replace(" Bhk", "")) ||
            (b = b + "," + y[i].replace(" Bhk", ""));
    else
      for (b = "bedroom=", i = 0; i < y.length; i++)
        "5+ Bhk" == y[i] && (y[i] = ">5 Bhk"),
          (b += y[i].replace(" Bhk", "")),
          i !== y.length - 1 && (b += ",");
    if (
      ((t += b),
      "" != a
        ? (a.indexOf("Office in IT Park/ SEZ") > -1 &&
            (a = a.replace("Office in IT Park/ SEZ", "Office-ITPark-SEZ")),
          a.indexOf("Warehouse/Godown") > -1 &&
            (a = a.replace("Warehouse/Godown", "Warehouse-Godown")),
          a.indexOf("Residential Plot/Land") > -1 &&
            (a = a.replace("Residential Plot/Land", "Residential-Plot")),
          (t = t + "&proptype=" + (a = a.replace(/ /g, "-"))))
        : (t +=
            "COMM" == c
              ? "&proptype=Commercial-Office-Space,Office-ITPark-SEZ,Commercial-Shop,Commercial-Showroom"
              : "PLOT" == c
              ? "proptype=Residential-Plot"
              : "&proptype=Multistorey-Apartment,Builder-Floor-Apartment,Penthouse,Studio-Apartment,Residential-House,Villa"),
      "COMM" == c)
    ) {
      "S" == categoryC && (t += "&categoryC=S");
      var w = new Date();
      w.setTime(w.getTime() + 864e5),
        (expires = w.toGMTString()),
        (document.cookie =
          "categoryCommCookie=" +
          categoryC +
          "; expires=" +
          expires +
          "; secure; path=/");
    }
    if (
      (isEmptyChk($("#homeSearchLocTxt").val()) ||
        (t = t + "&Locality=" + $("#homeSearchLocTxt").val()),
      "" != $("#homeSearchTxt").val() && null != $("#homeSearchTxt").val())
    ) {
      var C = $("#homeSearchTxt").val().replace(/\s/g, "-").split(","),
        T = _toConsumableArray(new Set(C)).join();
      t = t + "&cityName=" + (T = T.replace(/&/g, "and"));
    } else
      (cityName = cityName.replace(/&/g, "and")),
        (t = t + "&cityName=" + cityName);
    (s = convertHomeBudgetToValueWithUnits(n)),
      parseInt(n) < parseInt(o) && (l = convertHomeBudgetToValueWithUnits(o)),
      "" != s &&
        "-1" != s &&
        0 != s &&
        (t = t + "&BudgetMin=" + s.replace(/ /g, "")),
      "" != l &&
        "-1" != l &&
        0 != l &&
        (t = t + "&BudgetMax=" + l.replace(/ /g, "")),
      isEmptyChk($("#projectTxt").val()) ||
        (t = t + "&projectSocity=" + $("#projectTxt").val()),
      isEmptyChk($("#builderTxt").val()) ||
        (t = t + "&developerName=" + $("#builderTxt").val());
    var k = !1;
    bhk ||
      (r.indexOf("10007_10018") > -1 &&
        (isEmptyChk($("#seats").val()) ||
          (t = t + "&noOfSeats=" + $("#seats").val().replace(/ /g, "-"))),
      isEmptyChk($("#businessType").val()) ||
        (t =
          t + "&businessType=" + $("#businessType").val().replace(/ /g, "-")),
      isEmptyChk($("#areaUnitValue").val()) ||
        (t = t + "&areaUnit=" + $("#areaUnitValue").val()),
      isEmptyChk($("#areaFrom").val()) ||
        ((t = t + "&areaFrom=" + $("#areaFrom").val().replace(/ /g, "-")),
        (k = !0)),
      isEmptyChk($("#areaTo").val()) ||
        (t = t + "&areaTo=" + $("#areaTo").val().replace(/ /g, "-")),
      k && isEmptyChk($("#areaUnitValue").val()) && (t += "&areaUnit=12850")),
      null != e && null != e && "newtab" == e
        ? window.open(contextPath.replace("/bricks", "") + t)
        : (this.window.location.href = contextPath.replace("/bricks", "") + t);
  }
}
function homepagePrellaSearchFormURL() {
  var e = "";
  if (!validatePrellaHomeSearchForm()) {
    if (
      ((e += "newly-launch-projects-"),
      "" != $("#homeSearchTxtPrella").val() &&
        null != $("#homeSearchTxtPrella").val())
    ) {
      var t = $("#homeSearchTxtPrella").val().replace(/\s/g, "-").split(","),
        a = _toConsumableArray(new Set(t)).join();
      e += a = a.replace(/&/g, "and");
    } else (cityName = cityName.replace(/&/g, "and")), (e += cityName);
    this.window.location.href = contextPath.replace("/bricks", "") + e;
  }
}
function clickOnHomePagePropertyType(e, t, a, r, n, i, o, s) {
  if ("pgTypes" == n) return $("#" + a).html("Pg Type"), void $("#" + i).hide();
  if ("" != e && "" != t && "D" != o) {
    var l = $("#" + t).prop("checked");
    "Y" == o && (l = !l),
      0 == l
        ? ($("#" + t).prop("checked", !0), $("#" + e).addClass("checked"))
        : ($("#" + t).prop("checked", !1), $("#" + e).removeClass("checked"));
  }
  "" == r &&
    $("." + enableClass).each(function () {
      "none" === $(this).css("display") &&
        "" == r &&
        (r = $(this).attr("id") + "");
    });
  for (
    var c = -1, d = "", u = "", p = document.getElementsByName(n), h = 0;
    h < p.length;
    h++
  )
    1 == p[h].checked && ("" == d && (d = p[h].value), c++);
  "" != d
    ? ((u = $("#" + d).html()),
      $("#" + a).removeClass("placeHolderIn"),
      $("#" + a).addClass("placeHolderOut"))
    : ((u = s),
      $("#" + a).addClass("placeHolderIn"),
      $("#" + a).removeClass("placeHolderOut")),
    $("#" + i) &&
      (c > 0
        ? ($("#" + i).html("+" + c),
          $("#" + i).addClass("moreProperty"),
          $("#" + i).show())
        : ($("#" + i).removeClass("moreProperty"), $("#" + i).hide())),
    $("#" + a).html(u),
    showOrHideAreaBhkHomePageOption(t, p, r, o),
    firePropertySelectSearchGTM();
}
function showOrHideAreaBhkHomePageOption(e, t, a, r) {
  for (
    var n = !0, i = !1, o = !1, s = "", l = !1, c = !1, d = 0;
    d < t.length;
    d++
  )
    if (1 == t[d].checked && !i) {
      var u = t[d].value;
      (s = s + "_" + t[d].value),
        "10002_10003_10021_10022" == u ||
        "10002_10003_10021_10022_10020" == u ||
        "10050_10053" == u ||
        "10001_10017" == u ||
        "10026" == u
          ? ((i = !0), 0, "" != a && (a = a.substring(0, a.length - 1) + "1"))
          : ("10000" == u && "" != a
              ? (a = a.substring(0, a.length - 1) + "1")
              : ("10007_10018" != u &&
                  "10008_10009" != u &&
                  "10006_10012" != u &&
                  "10011" != u &&
                  "10013" != u &&
                  "10014" != u) ||
                "" == a
              ? ("10005" != u && "10004" != u) ||
                "" == a ||
                (a = a.substring(0, a.length - 1) + "3")
              : (a = a.substring(0, a.length - 1) + "2"),
            (i = !1)),
        "10008_10009" != u || o
          ? "10008_10009" != u
            ? ($("#business1").hide(), $("#businessType").val(), (o = !0))
            : "10000" == u &&
              ($("#seatsBlk").hide(),
              $("#business1").hide(),
              $("#businessType").val(),
              (c = !0))
          : ($("#business1").show(), $("#seatsBlk").hide()),
        "10007_10018" == u
          ? ($("#seatsBlk").show(), (l = !0))
          : l || $("#seatsBlk").hide(),
        "10000" == u && (c = !0),
        0,
        (n = !1);
    }
  (c && null != u && !i) ||
    ($("#areaTxt").text("Area"),
    $("#areaUnitTxt").text("Sqft"),
    $("#areaFrom").val(""),
    $("#areaTo").val(""),
    $("#areaUnitValue").val("")),
    i && !n && "N" != r
      ? ($("#bhk").show(),
        $("#plotArea").hide(),
        $("#business1").hide(),
        $("#businessType").val(),
        $(".mb-search__sqft-area__dropdown").hide())
      : i || n
      ? "N" != r &&
        ($("#bhk").hide(),
        $("#plotArea").hide(),
        $(".mb-search__sqft-area__dropdown").hide())
      : ($("#bhk").hide(),
        setTimeout(function () {
          var e = !1;
          $(".mb-search__property")
            .find("input")
            .each(function () {
              $(this).is(":checked") && (e = !0);
            }),
            e ? $("#plotArea").show() : $("#plotArea").hide();
        }, 50),
        plotAreaShift()),
    (bhk = i),
    resetSearchForm(i);
}
function setHomePageBhkAction(e, t, a, r, n) {
  try {
    var i = $("#bar_category").val();
    if (("" == i && (i = "S"), $(e).is(":checked")))
      $(e).parent().addClass("checked"),
        $("#" + r + "_" + i).val(function (e, t) {
          return t + (t ? "," : "") + a;
        }),
        $("#" + n + "_" + i).val(function (e, a) {
          return a + (a ? "," : "") + t;
        });
    else {
      $(e).parent().removeClass("checked");
      var o = $("#" + r + "_" + i)
          .val()
          .split(","),
        s = "";
      for (var l in o) o[l] != a && ("" != s && (s += ","), (s += o[l]));
      $("#" + r + "_" + i).val(s);
      var c = $("#" + n + "_" + i)
          .val()
          .split(","),
        d = "";
      for (var l in c) c[l] != t && ("" != d && (d += ","), (d += c[l]));
      console.log("finalBhkId::" + d), $("#" + n + "_" + i).val(d);
    }
  } catch (e) {
    void 0 !== window.errorHandler &&
      errorHandler("searchForm", "setBhkAction", e);
  }
}
function homepageAutoSuggest() {
  if (
    $("#keyword").val().length > 2 ||
    $("#recentSearchTxt").val().length > 2
  ) {
    var e = "";
    if ("" != $("#homeSearchValues").val() || 1 == citySelected) {
      var t = $("#homeSearchValues").val().split(",")[0];
      e =
        "" == $("#recentSearchTxt").val()
          ? "/mbutility/homepageAutoSuggest?searchtxt=" +
            $("#keyword").val() +
            "&city=" +
            t
          : "/mbutility/homepageAutoSuggest?searchtxt=" +
            $("#recentSearchTxt").val() +
            "&city=" +
            t;
    } else
      e = "/mbutility/homepageAutoSuggest?searchtxt=" + $("#keyword").val();
    $("#serachSuggest").empty().hide(),
      $.ajax({
        type: "get",
        url: e,
        success: function (e) {
          $("#serachSuggest").empty();
          $(".mb-search__suggestions").hide();
          var t = e.locationMap,
            a = t.LOCATION,
            r = t.PROJECT,
            n = t.BUILDER,
            o = e.landmarkMap,
            s = !1;
          if (!chkEmpty(a)) {
            for (i = 0; i < a.length; i++)
              if ("lt_pg" != a[i].suggestType) {
                s = !0;
                break;
              }
            s &&
              ($("#serachSuggest").append(
                "<div class='mb-search__dropdown__title'>Location</div>"
              ),
              suggestDivGenerator(a));
          }
          if (
            (chkEmpty(r) ||
              ($("#serachSuggest").append(
                "<div class='mb-search__dropdown__title'>Project</div>"
              ),
              suggestDivGenerator(r)),
            chkEmpty(n) ||
              "PG" == selectedTab ||
              ($("#serachSuggest").append(
                "<div class='mb-search__dropdown__title'>Builder</div>"
              ),
              suggestDivGenerator(n)),
            !chkEmpty(o) && Object.keys(o).length && "PG" == selectedTab)
          ) {
            $("#serachSuggest").append(
              "<div class='mb-search__dropdown__title'>Lankmarks</div>"
            ),
              (null != isNRISearchWidget &&
                null != isNRISearchWidget &&
                "Y" == isNRISearchWidget) ||
                $("#recentSearchSection")
                  .parents(".mb-search__dropdown")
                  .addClass("recent-search-added");
            for (var l = 0, c = Object.entries(o); l < c.length; l++) {
              var d = _slicedToArray(c[l], 2),
                u = d[0],
                p = d[1];
              chkEmpty(p) || (console.log(u), landmarkDivGenerator(p, u));
            }
          }
        },
        complete: function () {
          "" == $("#recentSearchTxt").val()
            ? $("#recentSearchTxt").val($("#keyword").val())
            : $("#recentSearchTxt").val("");
        },
      });
  }
  0 == $("#keyword").val().length && $("#serachSuggest").empty().hide();
}
function chkEmpty(e) {
  return "undefined" == e || null == e || "" == e;
}
function prellaPageloadAutoSuggest() {
  (urlStr = "/mbutility/prellaCityAutoSuggest?searchtxt=&isPrellaCity=Y"),
    $.ajax({
      type: "get",
      url: urlStr,
      success: function (e) {
        $("#defaultCityList").empty();
        var t = e.locationMap.LOCATION,
          a = !1;
        if (!chkEmpty(t)) {
          for (i = 0; i < t.length; i++)
            if ("lt_pg" != t[i].suggestType) {
              a = !0;
              break;
            }
          a &&
            ($("#defaultCityList").append(
              "<div class='mb-search__dropdown__title'>City</div>"
            ),
            autoLoadDivGeneratorParella(t));
        }
      },
      complete: function () {},
    });
}
function autoLoadDivGeneratorParella(e) {
  var t = new RegExp($("#keywordPrella").val().toLowerCase(), "g");
  for (i = 0; i < e.length; i++) {
    var a = e[i].result
      .toLowerCase()
      .replace(
        t,
        "<span>" + $("#keywordPrella").val().toLowerCase() + "</span>"
      );
    $("#defaultCityList")
      .append(
        "<div class='mb-search__auto-suggest__item' onclick='selectSearchParella(\"" +
          e[i].result +
          '",' +
          e[i].rfnum +
          "," +
          e[i].city +
          ',"city")\'>' +
          a +
          "</div>"
      )
      .show();
  }
}
function homepagePrellaAutoSuggest() {
  if ($("#keywordPrella").val().length > 2) {
    var e = "";
    if ("" != $("#homeSearchValuesPrella").val() || 1 == citySelected) {
      var t = $("#homeSearchValuesPrella").val().split(",")[0];
      e =
        "/mbutility/prellaCityAutoSuggest?searchtxt=" +
        $("#keywordPrella").val() +
        "&city=" +
        t;
    } else
      e =
        "/mbutility/prellaCityAutoSuggest?searchtxt=" +
        $("#keywordPrella").val();
    $("#serachSuggestPrella").empty().hide(),
      $.ajax({
        type: "get",
        url: e,
        success: function (e) {
          $("#serachSuggestPrella").empty(), $("#defaultCityList").hide();
          var t = e.locationMap.LOCATION,
            a = (e.landmarkMap, !1);
          if (!chkEmpty(t)) {
            for (i = 0; i < t.length; i++)
              if ("lt_pg" != t[i].suggestType) {
                a = !0;
                break;
              }
            a &&
              ($("#serachSuggestPrella").append(
                "<div class='mb-search__dropdown__title'>City</div>"
              ),
              suggestDivGeneratorParella(t));
          }
        },
        complete: function () {},
      });
  }
  0 == $("#keywordPrella").val().length &&
    ($("#serachSuggestPrella").empty().hide(),
    $("#defaultCityList").css("display", "block"));
}
function suggestDivGeneratorParella(e) {
  var t = new RegExp($("#keywordPrella").val().toLowerCase(), "g");
  for (i = 0; i < e.length; i++) {
    var a = e[i].result
      .toLowerCase()
      .replace(
        t,
        "<span>" + $("#keywordPrella").val().toLowerCase() + "</span>"
      );
    $("#serachSuggestPrella")
      .append(
        "<div class='mb-search__auto-suggest__item' onclick='selectSearchParella(\"" +
          e[i].result +
          '",' +
          e[i].rfnum +
          "," +
          e[i].city +
          ',"city")\'>' +
          a +
          "</div>"
      )
      .show();
  }
}
function suggestDivGenerator(e) {
  var t = new RegExp($("#keyword").val().toLowerCase(), "g");
  for (i = 0; i < e.length; i++)
    if ("lt" == e[i].suggestType || "lt_al" == e[i].suggestType) {
      var a = e[i].result
        .toLowerCase()
        .replace(t, "<span>" + $("#keyword").val().toLowerCase() + "</span>");
      $("#serachSuggest")
        .append(
          "<div class='mb-search__auto-suggest__item' onclick='selectSearch(\"" +
            e[i].result +
            '",' +
            e[i].rfnum +
            "," +
            e[i].city +
            ',"locality")\'>' +
            a +
            "</div>"
        )
        .show();
    } else if ("prj" == e[i].suggestType || "soc" == e[i].suggestType) {
      var r = e[i].result
        .toLowerCase()
        .replace(t, "<span>" + $("#keyword").val().toLowerCase() + "</span>");
      $("#serachSuggest")
        .append(
          "<div class='mb-search__auto-suggest__item' onclick='selectSearch(\"" +
            e[i].result +
            '",' +
            e[i].rfnum +
            "," +
            e[i].city +
            ',"project")\'>' +
            r +
            "</div>"
        )
        .show();
    } else if ("builder" == e[i].suggestType) {
      var n = e[i].result
        .toLowerCase()
        .replace(t, "<span>" + $("#keyword").val().toLowerCase() + "</span>");
      $("#serachSuggest")
        .append(
          "<div class='mb-search__auto-suggest__item' onclick='selectSearch(\"" +
            e[i].result +
            '",' +
            e[i].rfnum +
            "," +
            e[i].city +
            ',"builder")\'>' +
            n +
            "</div>"
        )
        .show();
    } else if ("sub" == e[i].suggestType) {
      var o = e[i].result
        .toLowerCase()
        .replace(t, "<span>" + $("#keyword").val().toLowerCase() + "</span>");
      $("#serachSuggest")
        .append(
          "<div class='mb-search__auto-suggest__item' onclick='selectSearch(\"" +
            e[i].result +
            '",' +
            e[i].rfnum +
            "," +
            e[i].city +
            ',"sub")\'>' +
            o +
            "</div>"
        )
        .show();
    } else if ("lt_pg" != e[i].suggestType) {
      var s = e[i].result
        .toLowerCase()
        .replace(t, "<span>" + $("#keyword").val().toLowerCase() + "</span>");
      $("#serachSuggest")
        .append(
          "<div class='mb-search__auto-suggest__item' onclick='selectSearch(\"" +
            e[i].result +
            '",' +
            e[i].rfnum +
            "," +
            e[i].city +
            ',"city")\'>' +
            s +
            "</div>"
        )
        .show();
    }
}
function landmarkDivGenerator(e, t) {
  var a = new RegExp($("#keyword").val().toLowerCase(), "g");
  t.toLowerCase().replace(
    a,
    "<span>" + $("#keyword").val().toLowerCase() + "</span>"
  );
  for (
    "Educational Institute" == t && (t = "Education"), i = 0;
    i < e.length;
    i++
  ) {
    var r = e[i].result
      .toLowerCase()
      .replace(a, "<span>" + $("#keyword").val().toLowerCase() + "</span>");
    $("#serachSuggest")
      .append(
        "<div class='mb-search__auto-suggest__item land-mark' onclick='selectSearch(\"" +
          e[i].result +
          '",' +
          e[i].locality +
          "," +
          e[i].city +
          ",\"landmark\")'><div class='mb-search__auto-suggest__item__land-mark-value'>" +
          r +
          "</div><div class='mb-search__auto-suggest__item__land-mark-type'>" +
          t +
          "</div></div>"
      )
      .show();
  }
}
function selectSearch(e, t, a, r) {
  var n = "";
  if ("locality" == r) {
    n = e.split(",")[0].replace(/ /g, "-");
    $("#homeSearchLocTxt").val().split(",");
    var o = $("#homeSearchLoc").val().split(",");
    for (i = 0; i < o.length; i++)
      if (parseInt(o[i]) == t) return void $(".mb-search__dropdown").slideUp();
  } else if ("project" == r) {
    n = e.split(",")[0];
    $("#projectTxt").val().split(",");
    var s = $("#projectValues").val().split(",");
    for (i = 0; i < s.length; i++)
      if (parseInt(s[i]) == t) return void $(".mb-search__dropdown").slideUp();
  } else if ("builder" == r) {
    n = e.split(",")[0];
    $("#builderTxt").val().split(",");
    var l = $("#builderValues").val().split(",");
    for (i = 0; i < l.length; i++)
      if (parseInt(l[i]) == t) return void $(".mb-search__dropdown").slideUp();
  } else if ("landmark" == r) {
    n = e.split(",")[0];
    var c = $("#landmarkTxt").val().split(",");
    for (i = 0; i < c.length; i++) {
      if (0 == c[i].localeCompare(n))
        return void $(".mb-search__dropdown").slideUp();
    }
  } else n = e;
  if (
    ("" == $("#homeSearchValues").val() && $("#keyword").val(""),
    null == $("#keyword").val() ||
      $("#keyword").val().includes(e) ||
      (mb_createComboDivs(e, t, "keyword", r),
      $("#serachSuggest").hide(),
      $("#recentSearchSection").hide()),
    "" == $("#homeSearchValues").val() &&
      "locality" != r &&
      "project" != r &&
      "builder" != r &&
      "sub" != r &&
      "landmark" != r)
  ) {
    $("#homeSearchValues").val(a);
    var d = e.replace(/&/g, "and");
    $("#homeSearchTxt").val(d), (citySelected = !0);
  } else if (
    "locality" != r &&
    "project" != r &&
    "builder" != r &&
    "sub" != r &&
    "landmark" != r &&
    "" == $("#homeSearchValues").val()
  ) {
    d = e.replace(/&/g, "and");
    $("#homeSearchValues").val($("#homeSearchValues").val() + "," + a),
      $("#homeSearchTxt").val($("#homeSearchTxt").val() + "," + d);
  }
  "" == $("#homeSearchValues").val() && "sub" == r
    ? ((n = e.split("-")),
      (e = n[1] + "-area-" + n[0]),
      (subCity = a + "-" + t),
      $("#homeSearchValues").val(subCity),
      $("#homeSearchTxt").val(e),
      (citySelected = !0))
    : "locality" != r &&
      "sub" == r &&
      ((n = e.split("-")),
      (e = n[1] + "-area-" + n[0]),
      $("#homeSearchValues").val($("#homeSearchValues").val() + "," + subCity),
      $("#homeSearchTxt").val($("#homeSearchTxt").val() + "," + e)),
    "" == $("#homeSearchLoc").val() && "locality" == r
      ? ("" == $("#homeSearchValues").val() && $("#homeSearchValues").val(a),
        $("#homeSearchLoc").val(t),
        $("#homeSearchLocTxt").val(n))
      : "locality" == r &&
        ($("#homeSearchLoc").val($("#homeSearchLoc").val() + "," + t),
        $("#homeSearchLocTxt").val($("#homeSearchLocTxt").val() + "," + n)),
    "" == $("#projectTxt").val() && "project" == r
      ? ("" == $("#homeSearchValues").val() && $("#homeSearchValues").val(a),
        $("#projectValues").val(t),
        $("#projectTxt").val(Trim(n).replace(/ /g, "-")))
      : "project" == r &&
        ($("#projectValues").val($("#projectValues").val() + "," + t),
        $("#projectTxt").val($("#projectTxt").val() + "," + n)),
    "" == $("#builderTxt").val() && "builder" == r
      ? ("" == $("#homeSearchValues").val() && $("#homeSearchValues").val(a),
        $("#builderValues").val(t),
        $("#builderTxt").val(n))
      : "builder" == r &&
        ($("#builderValues").val($("#builderValues").val() + "," + t),
        $("#builderTxt").val($("#builderTxt").val() + "," + n)),
    "" == $("#landmarkTxt").val() && "landmark" == r
      ? ("" == $("#homeSearchValues").val() && $("#homeSearchValues").val(a),
        $("#landmarkTxt").val(n))
      : "landmark" == r &&
        $("#landmarkTxt").val($("#landmarkTxt").val() + "," + n);
  var u = e.split(",")[1].replace(/&/g, "and");
  "" == $("#homeSearchTxt").val() && "project" == r
    ? $("#homeSearchTxt").val(Trim(e.split(",")[2]).replace(/ /g, "-"))
    : "" == $("#homeSearchTxt").val() && "locality" == r
    ? $("#homeSearchTxt").val(e.split(",")[1].trim().replace(/ /g, "-"))
    : "" == $("#homeSearchTxt").val() && "builder" == r
    ? $("#homeSearchTxt").val(e.split(",")[1].trim().replace(/ /g, "-"))
    : "" == $("#homeSearchTxt").val() &&
      "landmark" == r &&
      $("#homeSearchTxt").val(u.trim().replace(/ /g, "-")),
    fireLocalitySelectSearchGTM(),
    $("#serachSuggest").html("");
  var p = !0;
  "" != $("#homeSearchValues").val() &&
  "" == $("#projectValues").val() &&
  p &&
  "city" == r
    ? (popularLocProj(
        "topLocalities",
        "",
        $("#homeSearchValues").val(),
        "",
        $("#homeSearchTxt").val()
      ),
      popularLocProj(
        "topProjects",
        "",
        $("#homeSearchValues").val(),
        "",
        $("#homeSearchTxt").val()
      ),
      (p = !1))
    : "" != $("#projectValues").val() &&
      p &&
      "city" == r &&
      (popularLocProj(
        "topProjects",
        "",
        $("#homeSearchValues").val(),
        $("#projectValues").val(),
        $("#homeSearchTxt").val()
      ),
      (p = !1));
}
function selectSearchParella(e, t, a, r) {
  $("#homeSearchValuesPrella").val(""),
    $("#homeSearchTxtPrella").val(""),
    $("#keywordPrella").val(e),
    $(".mb-search__dropdown").slideUp(),
    $("#homeSearchValuesPrella").val(a);
  var n = e.replace(/&/g, "and");
  $("#homeSearchTxtPrella").val(n), (citySelected = !0);
}
function popularLocProj(e, t, a, r, n) {
  if ("" != a && null != a) {
    var i = "";
    if ("" != t && null != t) {
      var o = t.split("|"),
        s = o.length - 1;
      o[s].split(",")[0] != a &&
        (i =
          3 == o[s].split(",").length
            ? o[s].split(",")[1]
            : o[s].split(",")[0]);
    }
    var l = $("#domcache_constant").attr("data-fullcontextpath"),
      c = {
        dataRequired: e,
        queryString: "&city=" + a + "&rows=20",
        locality: i,
        city: a,
        psmid: r,
      };
    (c = JSON.stringify(c)),
      $.ajax({
        type: "POST",
        url: l + "mbApiproxy/popularlocalitiesandprojects",
        data: c,
        async: !0,
        dataType: "json",
        contentType: "application/json",
        success: function (t) {
          if (
            "" != t &&
            "1" == t.status &&
            ("topLocalities" == e
              ? ((popularData = t.popularLocality),
                popularData &&
                  $("#serachSuggest").append(
                    "<div class='mb-search__dropdown__title'>Popular Localities</div>"
                  ))
              : "topProjects" == e &&
                ((popularData = t.popularProjects),
                popularData &&
                  $("#serachSuggest").append(
                    "<div class='mb-search__dropdown__title'>Top Projects in " +
                      n +
                      "</div>"
                  )),
            popularData)
          )
            for (
              var r = popularData.length < 5 ? popularData.length : 5, i = 0;
              i < r;
              i++
            ) {
              var o;
              if ("" != popularData[i].id && null != popularData[i].id) {
                var s = popularData[i].id.split(",");
                (o = s[0]), (cityId = s[1]);
              }
              "topLocalities" == e
                ? $("#serachSuggest")
                    .append(
                      "<div class='mb-search__auto-suggest__item' onclick='selectSearch(\"" +
                        popularData[i].name +
                        '",' +
                        o +
                        "," +
                        cityId +
                        ',"locality")\'>' +
                        popularData[i].name +
                        "</div>"
                    )
                    .show()
                : "topProjects" == e &&
                  $("#serachSuggest")
                    .append(
                      "<div class='mb-search__auto-suggest__item' onclick='selectSearch(\"" +
                        popularData[i].name +
                        '",' +
                        popularData[i].psmid +
                        "," +
                        a +
                        ',"project")\'>' +
                        popularData[i].name +
                        "</div>"
                    )
                    .show();
            }
        },
        complete: function () {},
        error: function (e, t) {},
      });
  }
}
function updateHomeBudgetForHomePage(e, t, a, r) {
  var n;
  if ("min" == e)
    if (
      (("" != $("#budgetMin").val() && $("#budgetMin").val() == t) ||
        $(".mb-search__min-max__item").show(),
      (n = "budgetMin"),
      $("#minBudjet").hide(),
      $("#maxBudjet").show(),
      a < lastBudgetIndex)
    ) {
      for (i = 0; i <= a; i++) $("#maxBhkIndex_" + i).hide();
      for (i = a + 1; i <= lastBudgetIndex; i++) $("#maxBhkIndex_" + i).show();
    } else {
      for (i = 0; i <= a; i++) $("#maxBhkIndex_" + i).hide();
      lastBudgetIndex = a;
    }
  else
    (n = "budgetMax"),
      $("#minBudjet").hide(),
      $("#maxBudjet").hide(),
      $(".mb-search__dropdown").hide();
  t && void 0 !== t && "Min" != t && "Max" != t
    ? $("#" + n).val(t)
    : $("#" + n).val(""),
    t &&
      void 0 !== t &&
      "Min" != t &&
      "Max" != t &&
      "autoUpdate" != r &&
      fireSelectBudgetGTM(e),
    selectHomeAutosuggestRent($("#budgetMin"), "budget", "r");
}
function updateCommercialCategory(e) {
  var t;
  "Buy" == e || "S" == e
    ? ((t = "Buy"),
      (categoryC = "S"),
      $("#coWorkingDiv").hide(),
      (newLaunchesAndUpcomingProjectsFetched = !1),
      newLaunchBanners(),
      $("#featuredCommSpacesSlotContainer").empty(),
      (featCommBannerFetched = !1),
      fetchFeaturedCommSpaceBanners("S"),
      $("#fcw__block").hide(),
      $("#fcw__block").show())
    : ((t = "Lease"),
      (categoryC = "R"),
      $("#coWorkingDiv").show(),
      (newLaunchesAndUpcomingProjectsFetched = !0),
      $("#newLaunchesComm").hide(),
      $("#featuredCommSpacesSlotContainer").empty(),
      (featCommBannerFetched = !1),
      fetchFeaturedCommSpaceBanners("R")),
    $("#rent_budget_lbl").html("Budget"),
    getCommercialBudgetList(categoryC),
    $("#budgetMax").val(""),
    $("#budgetMin").val(""),
    $("#minBudjet").show(),
    $("#commercialType").html(t),
    $("#commercialTypeDropdown").hide();
}
function getCommercialBudgetList(e) {
  var t = $("#domcache_constant").attr("data-fullcontextpath"),
    a = "?categoryC=" + e;
  $.ajax({
    type: "GET",
    async: !0,
    dataType: "json",
    url: t + "getCommercialBudgetList" + a,
    beforeSend: function () {},
    success: function (e) {
      if (null != e) {
        var t = e.budgetMap,
          a =
            '<div class=\'mb-search__min-max__item\'  onclick=\'updateHomeBudgetForHomePage("min", "Min",0,"");\'>Min</div>',
          r =
            '<div class=\'mb-search__min-max__item\'  onclick=\'updateHomeBudgetForHomePage("max", "Max",' +
            (t.length - 1) +
            ',"");\'>Max</div>',
          n = 0;
        for (var i in ((budgetList = ""), t)) {
          var o = "maxBhkIndex_" + n;
          (budgetList += i + ","),
            (a +=
              "<div class='mb-search__min-max__item' data-actualIndex=" +
              n +
              ' onclick=\'updateHomeBudgetForHomePage("min", ' +
              i +
              "," +
              n +
              ',"");\'>&#8377;' +
              t[i] +
              "</div>"),
            (r +=
              "<div class='mb-search__min-max__item' data-actualIndex=" +
              n +
              " id=" +
              o +
              ' onclick=\'updateHomeBudgetForHomePage("max", ' +
              i +
              "," +
              n +
              ',"");\'>&#8377;' +
              t[i] +
              "</div>"),
            n++;
        }
        $("#minBudjet").html(a), $("#maxBudjet").html(r);
      }
    },
    error: function (e, t) {
      console.log("Error in ajax call of getCommercialBudgetList  Data");
    },
    complete: function () {},
  });
}
function homeRangeMinLinkClick(e) {
  $("#minBudjet").show(), $("#maxBudjet").hide();
}
function homeRangeMaxLinkClick(e) {
  var t = getBudgetIndex();
  updateHomeBudgetForHomePage("min", $("#budgetMin").val(), t, "autoUpdate"),
    $("#minBudjet").hide(),
    $("#maxBudjet").show();
}
function getBudgetIndex() {
  var e = 0,
    t = $("#budgetMin").val(),
    a = budgetList.split(",");
  if (!chkEmpty(t))
    for (var r = 0; r < a.length; r++) {
      var n = a[r];
      if (((e = r), parseInt(t) < parseInt(n))) return e - 1;
      e = r;
    }
  return e - 1;
}
function selectHomeAutosuggestRent(e, t) {
  "" == $("#budgetMax").val() && "" != $("#budgetMin").val()
    ? ((previousMaxbudgetRentVal = $("#budgetMax").val()),
      (previousMinbudgetRentVal = $("#budgetMin").val()),
      (previousMaxbudgetRentHtml = convertHomeBudgetToValueWithUnits(
        $("#budgetMax").val().replace(/^0+/, "")
      )),
      (previousMinbudgetRentHtml = convertHomeBudgetToValueWithUnits(
        $("#budgetMin").val().replace(/^0+/, "")
      )),
      $("#rent_budget_lbl").html("Greater than " + previousMinbudgetRentHtml))
    : "" != $("#budgetMax").val() &&
      "" != $("#budgetMin").val() &&
      parseInt($("#budgetMin").val()) < parseInt($("#budgetMax").val())
    ? ((previousMaxbudgetRentVal = $("#budgetMax").val()),
      (previousMinbudgetRentVal = $("#budgetMin").val()),
      (previousMaxbudgetRentHtml = convertHomeBudgetToValueWithUnits(
        $("#budgetMax").val().replace(/^0+/, "")
      )),
      (previousMinbudgetRentHtml = convertHomeBudgetToValueWithUnits(
        $("#budgetMin").val().replace(/^0+/, "")
      )),
      $("#rent_budget_lbl").html(
        previousMinbudgetRentHtml + " - " + previousMaxbudgetRentHtml
      ))
    : "" != $("#budgetMax").val() && "" == $("#budgetMin").val()
    ? ((previousMaxbudgetRentVal = $("#budgetMax").val()),
      (previousMinbudgetRentVal = $("#budgetMin").val()),
      (previousMaxbudgetRentHtml = convertHomeBudgetToValueWithUnits(
        $("#budgetMax").val().replace(/^0+/, "")
      )),
      (previousMinbudgetRentHtml = convertHomeBudgetToValueWithUnits(
        $("#budgetMin").val().replace(/^0+/, "")
      )),
      $("#rent_budget_lbl").html("Upto " + previousMaxbudgetRentHtml))
    : "" == $("#budgetMax").val() &&
      "" == $("#budgetMin").val() &&
      $("#rent_budget_lbl").html("Budget"),
    parseInt($("#budgetMin").val()) > parseInt($("#budgetMax").val()) &&
      $("#budgetMax").val("");
}
function convertHomeBudgetToValueWithUnits(e) {
  var t = e;
  if (
    t.indexOf("0000000") > -1 &&
    1 == t.lastIndexOf("0000000") &&
    parseFloat(t) / 1e7 == parseInt(parseInt(t) / 1e7)
  )
    t = parseInt(t) / 1e7 + "" + "-Crores";
  else if (
    t.indexOf("000000") > -1 &&
    parseFloat(t.replace("000000", "") / 10) >= 1 &&
    parseFloat(t) / 1e6 == parseInt(parseInt(t) / 1e6)
  ) {
    var a = t.replace("000000", "");
    t = parseFloat(a) / 10 + "-Crores";
  } else if (
    t.indexOf("00000") > -1 &&
    parseFloat(t) / 1e5 == parseInt(parseInt(t) / 1e5)
  ) {
    t = parseInt(t) / 1e5 + "" + "-Lacs";
  }
  return t;
}
function showSearchHint(e, t) {
  $(".mb-search__dropdown, .mb-search__sqft-area__dropdown").hide(),
    (null != isNRISearchWidget &&
      null != isNRISearchWidget &&
      "Y" == isNRISearchWidget) ||
      getRecentlySearchData("Noida", cityCode),
    e.stopPropagation(),
    $(t).parents(".mb-search__location").find(".mb-search__dropdown").show();
}
function showSearchHintParella(e, t) {
  $(".mb-search__dropdown, .mb-search__sqft-area__dropdown").hide(),
    e.stopPropagation(),
    $(t).parents(".mb-search__location").find(".mb-search__dropdown").show();
}
function showPropertyDropDown(e, t) {
  var a = $(t).parent().find(".mb-search__dropdown");
  $(".mb-search__dropdown, .mb-search__sqft-area__dropdown").not(a).hide(),
    e.stopPropagation(),
    $(t).parent().find(".mb-search__dropdown").toggle();
}
function showBudgetDropDown(e, t) {
  var a = $(t).parent().find(".mb-search__dropdown");
  "" != $("#budgetMax").val() &&
    null != $("#budgetMax").val() &&
    "" != $("#budgetMin").val() &&
    null != $("#budgetMin").val() &&
    $("#minBudjet").slideDown(),
    "" != $("#budgetMin").val() &&
      null != $("#budgetMin").val() &&
      isEmptyChk($("#budgetMax").val()) &&
      homeRangeMaxLinkClick(),
    $(".mb-search__dropdown, .mb-search__sqft-area__dropdown").not(a).hide(),
    e.stopPropagation(),
    $(t).parent().find(".mb-search__dropdown").toggle();
}
function openPropertyType(e) {
  $(e).parent().toggleClass("open-state");
}
function showAreaDropDown(e, t) {
  $("#areaMin").slideDown(),
    $("#areaMax").slideUp(),
    $(".mb-search__sqft-area__dropdown").hide(),
    e.stopPropagation(),
    $(t).parent().find(".mb-search__sqft-area__dropdown").show();
}
function navigationAnimation(e, t, a) {
  "nav" == a
    ? ($(".mb-search__tab__item").removeClass(t),
      $(e).addClass(t),
      $(".mb-search__tab__item").each(function () {
        if (
          ($(this).parent().find(".mb-search__tab__ani").removeClass("no-anim"),
          $(this).hasClass(t))
        ) {
          var e = $(this).outerWidth(),
            a = $(this).position().left;
          return (
            $(this)
              .parent()
              .find(".mb-search__tab__ani")
              .css({ width: e, left: a }),
            !1
          );
        }
        $(this).parent().find(".mb-search__tab__ani").css({ width: 0 });
      }))
    : $(".mb-search__tab__item").each(function () {
        if ($(this).hasClass("active")) {
          var e = $(this).outerWidth(),
            t = $(this).position().left;
          return (
            $(this)
              .parent()
              .find(".mb-search__tab__ani")
              .css({ width: e, left: t }),
            !1
          );
        }
        $(this).parent().find(".mb-search__tab__ani").css({ width: 0 });
      });
}
function isEmptyChk(e) {
  var t = !1;
  return (
    null != e && null != e && (e = e.trim()),
    (null != e && "" != e && null != e) || (t = !0),
    t
  );
}
function getHomePropertyTypeResORComm(e) {
  var t = "";
  return (
    (e.indexOf("10000") > -1 ||
      e.indexOf("10017") > -1 ||
      e.indexOf("10001") > -1 ||
      e.indexOf("10002") > -1 ||
      e.indexOf("10003") > -1 ||
      e.indexOf("10054") > -1 ||
      e.indexOf("10019") > -1 ||
      e.indexOf("10020") > -1 ||
      e.indexOf("10021") > -1 ||
      e.indexOf("10022") > -1 ||
      e.indexOf("10050") > -1 ||
      e.indexOf("10053") > -1 ||
      e.indexOf("9000") > -1) &&
      (t = "residential"),
    (e.indexOf("10006") > -1 ||
      e.indexOf("10012") > -1 ||
      e.indexOf("10015") > -1 ||
      e.indexOf("10016") > -1 ||
      e.indexOf("10007") > -1 ||
      e.indexOf("10008") > -1 ||
      e.indexOf("10009") > -1 ||
      e.indexOf("10052") > -1 ||
      e.indexOf("10051") > -1 ||
      e.indexOf("10010") > -1 ||
      e.indexOf("10011") > -1 ||
      e.indexOf("10013") > -1 ||
      e.indexOf("10014") > -1 ||
      e.indexOf("10018") > -1 ||
      e.indexOf("10026") > -1 ||
      e.indexOf("10030") > -1 ||
      e.indexOf("9001") > -1) &&
      ("" == t ? (t = "commercial") : (t += "-commercial")),
    (e.indexOf("9002") > -1 ||
      e.indexOf("10005") > -1 ||
      e.indexOf("10004") > -1) &&
      ("" == t ? (t = "agricultural") : (t += "-agricultural")),
    t
  );
}
function getHomePropertyTypeClubingDiscription(e, t) {
  return (
    "" != e &&
      (e = (e = (e = (e = (e = (e = (e = (e =
        "R" == t
          ? e.replace(
              "Flat",
              "Multistorey Apartment,Builder Floor Apartment,Penthouse,Studio Apartment,Service Apartment"
            )
          : e.replace(
              "Flat",
              "Multistorey Apartment,Builder Floor Apartment,Penthouse,Studio Apartment"
            )).replace("House/Villa", "Residential House,Villa")).replace(
        "PG/Hostel",
        "Paying Guest,Hostel"
      )).replace(
        "Office Space",
        "Commercial Office Space,Office in IT Park/ SEZ"
      )).replace(
        "Shop/Showroom",
        "Commercial Shop,Commercial Showroom"
      )).replace("Commercial Land", "Commercial Land,Industrial Land")).replace(
        "Plot",
        "Residential Plot"
      )).replace("Warehouse/Godown", "Warehouse-Godown")),
    e
  );
}
function setBhkValue(e, t, a) {
  0 == document.getElementById(a).checked &&
    ("" == $("#bedroom_name").val()
      ? $("#bedroom_name").val(e)
      : $("#bedroom_name").val($("#bedroom_name").val() + "," + e),
    "" == $("#bar_bedrooms").val()
      ? $("#bar_bedrooms").val(t)
      : $("#bar_bedrooms").val($("#bar_bedrooms").val() + "," + t));
}
function mb_createComboDivs(e, t, a, r) {
  var n = document.createElement("div"),
    o = document.createElement("div"),
    s = document.createElement("div");
  (n.className = "mb-search__tag"),
    (o.className = "mb-search__tag-t"),
    "" != e &&
      ((o.innerHTML = e),
      o.setAttribute("data-id", t),
      (s.className = "mb-search__tag-close"),
      s.setAttribute("data-text", e),
      s.setAttribute("data-id", t),
      s.setAttribute("searchType-text", r)),
    (s.onclick = function () {
      var e = $("#homeSearchValues").val().split(","),
        t = $("#homeSearchTxt").val().split(","),
        r = this.getAttribute("data-text"),
        n = this.getAttribute("data-id"),
        o = this.getAttribute("searchType-text");
      "" == $("#homeSearchLoc").val() &&
        "" == $("#projectValues").val() &&
        "" == $("#builderValues").val() &&
        "" == $("#landmarkTxt").val() &&
        ($("#homeSearchValues").val(""), $("#homeSearchTxt").val(""));
      var s = [],
        l = [];
      for (i = 0; i < e.length; i++)
        r != t[i] && l.push(t[i]),
          n != e[i] && s.push(e[i]),
          n == e[i] && (citySelected = !0);
      "" == $("#homeSearchValues").val() &&
        ($("#homeSearchValues").val(s.join(",")),
        $("#homeSearchTxt").val(l.join(",")));
      var c = $("#homeSearchLoc").val().split(","),
        d = $("#homeSearchLocTxt").val().split(",");
      $("#homeSearchLoc").val(""), $("#homeSearchLocTxt").val("");
      var u = [],
        p = [];
      for (i = 0; i < c.length; i++) {
        r.split(",")[0].replace(/ /g, "-") != d[i] && u.push(c[i]),
          n != c[i] && p.push(d[i]);
      }
      $("#homeSearchLoc").val(u.join(",")),
        $("#homeSearchLocTxt").val(p.join(",")),
        "landmark" == o && $("#landmarkTxt").val(""),
        "project" == o &&
          ($("#projectValues").val(""), $("#projectTxt").val("")),
        "builder" == o &&
          ($("#builderValues").val(""), $("#builderTxt").val("")),
        this.parentElement.parentElement.removeChild(this.parentElement),
        $("#" + a).val("");
      var h = $("#" + a + "_autoSuggestSelectedDiv").find(
        ".mb-search__tag"
      ).length;
      0 == h && ($("#homeSearchValues").val(""), $("#homeSearchTxt").val("")),
        h < 1 &&
          ("PG" == $("#categoryType").val()
            ? $("#" + a)
                .attr("placeholder", "Enter City, Locality, Landmark")
                .removeAttr("style")
            : $("#" + a)
                .attr("placeholder", "Enter City, Locality, Project")
                .removeAttr("style")),
        h < 2 &&
          $("#" + a + "_autoSuggestSelectedDiv").removeClass("tag-added"),
        1 == h
          ? $("#" + a + "_autoSuggestSelectedDiv").addClass("forFlexView")
          : $("#" + a + "_autoSuggestSelectedDiv").removeClass("forFlexView");
    }),
    n.appendChild(o),
    n.appendChild(s),
    $("#" + a).attr("placeholder", "Add more..."),
    $("#" + a + "_autoSuggestSelectedDiv")
      .append(n)
      .append($("#" + a)),
    $("#" + a + "_autoSuggestSelectedDiv").find(".mb-search__tag").length > 1
      ? $("#" + a + "_autoSuggestSelectedDiv").addClass("tag-added")
      : $("#" + a + "_autoSuggestSelectedDiv").removeClass("tag-added"),
    1 == $("#" + a + "_autoSuggestSelectedDiv").find(".mb-search__tag").length
      ? $("#" + a + "_autoSuggestSelectedDiv").addClass("forFlexView")
      : $("#" + a + "_autoSuggestSelectedDiv").removeClass("forFlexView"),
    $("#" + a).val("");
}
function mb_showCompactView(e) {
  $("#" + e + "cityLocCount").remove();
  var t =
    $("#keyword_autoSuggestSelectedDiv").find(".mb-search__tag").length - 1;
  $("#" + e + "_autoSuggestSelectedDiv")
    .removeClass("tag-added")
    .addClass("mb-search__compact-view forFlexView"),
    $("#" + e + "_autoSuggestSelectedDiv")
      .find(".mb-search__tag")
      .not(":first")
      .slideUp();
  var a = document.createElement("div"),
    r = document.createElement("div");
  (a.className = "mb-search__tag"),
    (r.className = "mb-search__tag__count"),
    (a.id = e + "cityLocCount"),
    (r.innerHTML = "+" + t),
    a.appendChild(r),
    t > 0 &&
      $("#" + e + "_autoSuggestSelectedDiv")
        .append(a)
        .append($("#" + e)),
    $("#" + e).val("");
}
function mb_hideCompactView(e) {
  var t =
    $("#" + e + "_autoSuggestSelectedDiv").find(".mb-search__tag").length - 1;
  $("#" + e + "_autoSuggestSelectedDiv").removeClass("mb-search__compact-view"),
    t > 1 &&
      ($("#" + e + "cityLocCount").remove(),
      $("#" + e + "_autoSuggestSelectedDiv")
        .find(".mb-search__tag")
        .slideDown(),
      $("#" + e + "_autoSuggestSelectedDiv").addClass("tag-added")),
    t > 0 && $("#" + e + "_autoSuggestSelectedDiv").removeClass("forFlexView");
}
function setAreaUnitVal(e, t) {
  $("#areaUnitTxt").html(t),
    $("#areaUnitValue").val(e),
    $(".mb-search__sqft-area__dropdown").slideUp();
}
function setAreaMinMaxVal(e, t, a) {
  if (
    ($(".mb-search__sqft-area__min-max__label").removeClass("active"),
    "MIN" == e)
  )
    for (
      $(".mb-search__min-max__item").show(),
        $("#areaMin").hide(),
        $("#areaMax").show(),
        $("#areaFrom").val(t),
        $("#plotArea").find(".max-label").addClass("active"),
        i = 0;
      i <= a;
      i++
    )
      $("#areaMax_" + i).hide();
  else if ("MAX" == e) {
    if (($("#areaTo").val(t), $("#areaTxt").text().includes("-")))
      $("#areaTxt").text().split("-")[0].trim();
    $(".mb-search__sqft-area__dropdown").hide(),
      $("#plotArea").find(".min-label").addClass("active");
  }
  updateAreaMinMax();
}
function updateAreaMinMax() {
  "" == $("#areaTo").val() && "" != $("#areaFrom").val()
    ? ((previousMaxAreaVal = $("#areaTo").val()),
      (previousMinAreaVal = $("#areaFrom").val()),
      $("#areaTxt").html(previousMinAreaVal + " - Max"))
    : "" != $("#areaTo").val() &&
      "" != $("#areaFrom").val() &&
      parseInt($("#areaFrom").val()) < parseInt($("#areaTo").val())
    ? ((previousMaxAreaVal = $("#areaTo").val()),
      (previousMinAreaVal = $("#areaFrom").val()),
      $("#areaTxt").html(previousMinAreaVal + " - " + previousMaxAreaVal))
    : "" != $("#areaTo").val() &&
      "" == $("#areaFrom").val() &&
      ((previousMaxAreaVal = $("#areaTo").val()),
      (previousMinAreaVal = $("#areaFrom").val()),
      $("#areaTxt").html("Min - " + previousMaxAreaVal)),
    parseInt($("#areaFrom").val()) > parseInt($("#areaTo").val()) &&
      $("#areaTo").val("");
}
function areaMinMAXDropDown(e, t) {
  $(".mb-search__sqft-area__min-max__label").removeClass("active"),
    $(e).addClass("active"),
    $(e).parent().parent().find(".mb-search__min-max").hide(),
    $("#" + t).show();
}
function bothSideTrim(e) {
  try {
    return e.replace(/^\s+|\s+$/gm, "");
  } catch (e) {
    void 0 !== window.errorHandler &&
      errorHandler("homepageSearchRevamp", "bothSideTrim", e);
  }
}
function Trim(e) {
  return bothSideTrim(e);
}
function endsWith(e, t) {
  return -1 !== e.indexOf(t, e.length - t.length);
}
function homepagePGSearchFormURL() {
  var e = $("#homeSearchTxt").val(),
    t = $("#homeSearchLocTxt").val(),
    a = $("#landmarkTxt").val(),
    r = $("#budgetMin").val(),
    n = $("#budgetMax").val(),
    i = convertHomeBudgetToValueWithUnits(r),
    o = convertHomeBudgetToValueWithUnits(n);
  endsWith(t, ",") && (t = t.substring(0, t.lastIndexOf(",")));
  var s = "property-for-rent/residential-paying-guest?";
  if (
    ("" != t && (t = (t = t.trim()).replace(/, /g, ",")),
    "" != e &&
      (s =
        s +
        "cityName=" +
        (e = (e = Trim((e = e.replace(" & ", " and "))).replace(
          / /g,
          "-"
        )).replace(/&/g, "and"))),
    "" != t)
  ) {
    t = (t = t.trim()).replace(/ /g, "-");
    var l = new Date();
    l.setTime(l.getTime() + 864e5),
      (expires = l.toGMTString()),
      (document.cookie =
        "localityNameCookie=" +
        t +
        "; expires=" +
        expires +
        "; secure; path=/"),
      "" != t && (s = s + "&Locality=" + t);
  }
  "" != a &&
    "" != (a = (a = a.trim()).replace(/ /g, "-")) &&
    (s = s + "&Landmark=" + a),
    "" != i && "-1" != i && (s = s + "&BudgetMin=" + i.replace(/ /g, "")),
    "" != o && "-1" != o && (s = s + "&BudgetMax=" + o.replace(/ /g, ""));
  var c = document.getElementsByName("pgTypes"),
    d = !1;
  null != c &&
    c.length > 0 &&
    1 == c[0].checked &&
    1 == c[1].checked &&
    (d = !0);
  var u = "";
  if (!d)
    for (var p = 0; p < c.length; p++)
      1 == c[p].checked &&
        ("pgTypes_2" == c[p].id
          ? (u = "&pgType=20346")
          : "pgTypes_1" == c[p].id && (u = "&type=pg_y"));
  "" != u && (s += u);
  var h,
    m = "",
    f = _createForOfIteratorHelper(document.getElementsByName("occupancy"));
  try {
    for (f.s(); !(h = f.n()).done; ) {
      1 == (b = h.value).checked &&
        (console.log(b.value), "" != m && (m += ","), (m += b.value));
    }
  } catch (e) {
    f.e(e);
  } finally {
    f.f();
  }
  "" != m && (s = s + "&occupancy=" + m);
  var v,
    g = "",
    y = _createForOfIteratorHelper(document.getElementsByName("gender"));
  try {
    for (y.s(); !(v = y.n()).done; ) {
      var b;
      1 == (b = v.value).checked &&
        (console.log(b.value), "" != g && (g += ","), (g += b.value));
    }
  } catch (e) {
    y.e(e);
  } finally {
    y.f();
  }
  "" != g && (s = s + "&gender=" + g);
  var w = domainURL + s;
  this.window.location.href = w;
}
function redirectHomeCommercialHomePage(e, t, a) {
  var r = window.location.href.replace("&searchTy=R", "");
  if (
    (-1 != (r = r.replace("&searchTy=C", "")).indexOf("category=") &&
      (r = (r = r.replace("&category=S", "")).replace("&category=R", "")),
    window.self === window.top)
  ) {
    var n = "";
    try {
      -1 != r.indexOf("?") && ((n = r.split("?")), (r = n[0]));
    } catch (e) {}
    var i = r.indexOf("commercial"),
      o = r.replace("residential", "commercial");
    -1 != r.indexOf("indexc.html") && -1 != r.indexOf("localhost")
      ? (o = r.replace(
          "indexc.html",
          "property-for-sale-rent/commercial-real-estate"
        ))
      : -1 != r.indexOf("residential")
      ? (o = r.replace("residential", "commercial"))
      : -1 == r.indexOf("property-for")
      ? (o = r + "property-for-sale-rent/commercial-real-estate")
      : -1 != r.indexOf("Plots-Land-") &&
        ((o = r.replace("Plots-Land-", "commercial-real-estate-")),
        window.open(o, "_parent")),
      void 0 !== n[1] && (o = o + "?" + n[1]),
      -1 == i && (window.location.href = o);
  } else window.location.href = r + "&searchTy=C";
}
function openPgTabUrl(e) {
  tabCookie($(e).attr("id"));
  var t = $(e).attr("data-url");
  $(e).hasClass("active") || window.open(t, "_self");
}
function tabCookie(e) {
  var t = new Date();
  t.setTime(t.getTime() + 864e5),
    (expires = t.toGMTString()),
    (document.cookie =
      "previousTab=" + e + "; expires=" + expires + "; secure; path=/");
}
function fetchTopBusinessTypesByCity(e) {
  (null != e && "" != e && "" != e && null != e) || (e = "2624");
  var t = $("#domcache_constant").attr("data-fullcontextpath"),
    a = t + "topBusinessTypeList?cityId=3327&category=parent",
    r = t + "topBusinessTypeList?cityId=3327&category=child";
  $.ajax({
    url: a,
    type: "get",
    dataType: "text",
    async: !0,
    contentType: "application/json",
    success: function (e) {
      (e = (e = (e = e.trimRight()).trimLeft())
        .substring(1, e.length - 1)
        .replace("\\/g", "")),
        (businessTypeParentArray = e.split(","));
    },
  }),
    $.ajax({
      url: r,
      type: "get",
      contentType: "application/json",
      dataType: "text",
      async: !0,
      success: function (e) {
        (e = (e = (e = e.trimRight()).trimLeft())
          .substring(2, e.length - 1)
          .replace("\\/g", "")),
          (businessTypeArray = e.split(","));
        for (var t = 0; t < businessTypeArray.length; t++)
          businessTypeArray[t] = businessTypeArray[t].replace(/"/g, "");
      },
    });
}
function showPropertyTypefor() {
  "R" == category &&
    ($(".business__block__searchinputbox").html(""),
    $(".business__block__ddblock").show(),
    $("#propType_rent")
      .find(".business__block__searchinputbox")
      .html(
        "<input id='businessSearchInputId' class='business__block__searchinput'/>"
      ),
    autocompleteForBusinessType(
      $(".business__block__searchinput")[0],
      businessTypeArray,
      businessTypeParentArray
    ),
    $(".business__block__suggetionb__lock").show()),
    ("S" != category && "B" != category) ||
      ($(".business__block__searchinputbox").html(""),
      $(".business__block__ddblock").show(),
      $("#propType_buy")
        .find(".business__block__searchinputbox")
        .html(
          "<input id='businessSearchInputId' class='business__block__searchinput'/>"
        ),
      autocompleteForBusinessType(
        $(".business__block__searchinput")[0],
        businessTypeArray,
        businessTypeParentArray
      ),
      $(".business__block__suggetionb__lock").show());
}
function autocompleteForBusinessType(e, t, a) {
  for (var r, n = "", i = 0; i < a.length; i++) {
    a[i].replace(/'/g, "\\'");
    var o = a[i].replace(/"/g, "");
    if (
      ((n +=
        "<a href='javascript:void(0)' class='business__block__suggetion__li' title=\"" +
        o +
        '" onclick=\'setBusinessType("' +
        o +
        "\")'>" +
        a[i].replace(/"/g, "") +
        " </a>"),
      9 == i)
    )
      break;
  }
  function s(e) {
    if (!e) return !1;
    !(function (e) {
      for (var t = 0; t < e.length; t++)
        e[t].classList.remove("autocomplete-active");
    })(e),
      r >= e.length && (r = 0),
      r < 0 && (r = e.length - 1),
      e[r].classList.add("autocomplete-active");
  }
  function l(t) {
    for (
      var a = document.getElementsByClassName("autocomplete-items"), r = 0;
      r < a.length;
      r++
    )
      t != a[r] && t != e && a[r].parentNode.removeChild(a[r]);
  }
  $(".parentAutoSuggestList").html(n),
    e.addEventListener("input", function (a) {
      $(".business__block__suggetionb__lock").hide();
      var n,
        i,
        o,
        s = this.value;
      if ((l(), !s)) return $(".business__block__suggetionb__lock").show(), !1;
      for (
        r = -1,
          (n = document.createElement("DIV")).setAttribute(
            "id",
            this.id + "autocomplete_list"
          ),
          n.setAttribute(
            "class",
            "autocomplete-items business__block__suggetion__li"
          ),
          this.parentNode.appendChild(n),
          o = 0;
        o < t.length;
        o++
      )
        if (t[o].substr(0, s.length).toUpperCase() == s.toUpperCase()) {
          i = document.createElement("DIV");
          var c = t[o].replace(/'/g, "\\'");
          (i.innerHTML =
            "<span class='selected'>" + c.substr(0, s.length) + "</span>"),
            (i.innerHTML += t[o].substr(s.length)),
            (i.innerHTML +=
              '<input type="hidden" value="' + c + '" onchange="testData();">'),
            i.addEventListener("click", function (t) {
              var a = this.getElementsByTagName("input")[0].value;
              $("#businessblock1").val(a),
                $(".business__block__valueinput").val(a),
                setBusinessType(a),
                l(),
                (e.value = "");
            }),
            n.appendChild(i);
        }
    }),
    e.addEventListener("keydown", function (e) {
      var t = document.getElementById(this.id + "autocomplete-list");
      t && (t = t.getElementsByTagName("div")),
        40 == e.keyCode
          ? (r++, s(t))
          : 38 == e.keyCode
          ? (r--, s(t))
          : 13 == e.keyCode &&
            (e.preventDefault(), r > -1 && t && t[r].click());
    }),
    document.addEventListener("click", function (e) {
      l(e.target);
    });
}
function populateLocalityinSearch() {
  var e = getCookie("localityNameCookie"),
    t = getCookie("localityCookie");
  if (!isEmptyChk(e) && !isEmptyChk(t)) {
    (e = e.replace(/"/g, "")), (t = t.replace(/"/g, ""));
    for (var a = e.split(","), r = t.split(","), n = 0; n < a.length; n++)
      mb_createComboDivs(a[n], r[n], "keyword", "");
    (e = e.replace(/ /g, "-")),
      $("#homeSearchLoc").val(t),
      $("#homeSearchLocTxt").val(e);
  }
}
function setBusinessType(e) {
  $("#businessType").val(e),
    $(".business__block__valueinput").val(e),
    $(".business__block__suggetionb__lock").hide(),
    $(".business__block__ddblock").hide();
}
function getRecentlySearchData(e, t) {
  var a = "",
    r = JSON.parse(localStorage.getItem("rs-data"));
  if (r) {
    $("#recentSearchSection").show(),
      $(".mb-search__suggestions").hide(),
      $("#recentSearchSection")
        .parents(".mb-search__dropdown")
        .addClass("recent-search-added");
    for (var n = "", i = r.length <= 3 ? r.length : 3, o = 0; o < i; o++) {
      var s = r[o],
        l = s.searchParams,
        c = s.propCat,
        d = l.category;
      c && "Commercial" == c && "Rent" == l.category && (d = "Rent/Lease");
      var u = l.ltName ? l.ltName : l.city;
      if (u && u.includes(",")) {
        for (var p = u.split(","), h = 0, m = 0; m < p.length; m++)
          n.includes(p[m]) || ((h = m), (n = p[m] + ","));
        (u = p[h] + ", " + l.city), "[+" + (p.length - 1) + "]";
      } else l.ltName && (u = u + ", " + l.city), "notHasCount";
      var f = s.bhk ? s.bhk + " BHK " : "",
        v = "";
      s.budMin && s.budMax
        ? (v = " &#8377;" + s.budMin + " - &#8377;" + s.budMax)
        : s.budMin
        ? (v = " Above &#8377;" + s.budMin)
        : s.budMax && (v = " Under &#8377;" + s.budMax);
      var g = l.propTy;
      g &&
        (g = (g = (g = (g = (g = (g = (g = g.replace(
          "Multistorey Apartment,Builder Floor Apartment,Penthouse,Studio Apartment",
          "Flat"
        )).replace("Residential House,Villa", "House")).replace(
          "Residential Plot",
          "Plot"
        )).replace(
          "Commercial Office Space,Office in IT Park/ SEZ",
          "Office Space"
        )).replace("Warehouse/ Godown", "Godown")).replace(
          "Space-in-Shopping-Mall",
          "Shopping-Mall Space"
        )).replace("Commercial Shop,Commercial Showroom", "Shop/Showroom"));
      var y = parseInt(s.propCt);
      y && y > 10 && (y = y - (y % 10) + "+");
      var b = "";
      u && (b = " in " + u),
        (a =
          (a =
            (a =
              a +
              '<div class="mb-search__recent__item"><a href=' +
              s.url +
              " onclick=\"recentGA('" +
              d +
              "', " +
              (o + 1) +
              ", '" +
              c +
              '\');"><div class="mb-search__recent__item__cat-loc">') +
            d +
            b +
            '</div><div class="mb-search__recent__item__prop-price">') +
          f +
          g +
          v +
          "</div>"),
        (a += "</a></div>");
    }
    $("#recentSearchDiv").html(a), $("#rSearch").removeClass("is-hidden");
  }
}
function validateHomeSearchForm() {
  var e = !1;
  return (
    "" == $("#homeSearchValues").val() &&
      "" == $("#homeSearchLoc").val() &&
      "" == $("#projectValues").val() &&
      "" == $("#builderValues").val() &&
      ($("#location-error-id").show(),
      setTimeout(function () {
        $("#location-error-id").hide();
      }, 2e3),
      (e = !0)),
    e
  );
}
function validatePrellaHomeSearchForm() {
  var e = !1;
  return (
    "" == $("#homeSearchValuesPrella").val() &&
      ($("#location-error-id").show(),
      setTimeout(function () {
        $("#location-error-id").hide();
      }, 2e3),
      (e = !0)),
    e
  );
}
function resetSearchForm(e) {
  try {
    e
      ? e &&
        ($("#areaUnitTxt").text("Sqft"),
        $("#areaUnit").val($("#areaUnit option:first").val()),
        $("#areaTxt").text("Area"))
      : (chkEmpty(document.getElementById("bhkFlatHouse_0")) ||
          (document.getElementById("bhkFlatHouse_0").checked = !1),
        chkEmpty(document.getElementById("bhkFlatHouse_1")) ||
          (document.getElementById("bhkFlatHouse_1").checked = !1),
        chkEmpty(document.getElementById("bhkFlatHouse_2")) ||
          (document.getElementById("bhkFlatHouse_2").checked = !1),
        chkEmpty(document.getElementById("bhkFlatHouse_3")) ||
          (document.getElementById("bhkFlatHouse_3").checked = !1),
        chkEmpty(document.getElementById("bhkFlatHouse_4")) ||
          (document.getElementById("bhkFlatHouse_4").checked = !1),
        chkEmpty(document.getElementById("bhkFlatHouse_5")) ||
          (document.getElementById("bhkFlatHouse_5").checked = !1));
  } catch (e) {
    console.error(e);
  }
}
function plotAreaShift() {
  var e = $(".prop-type-commercial").find("input:checked").length,
    t = $(".prop-type-other").find("input:checked").length;
  e > 0
    ? $(".prop-type-commercial").find(".data-overflow").after($("#plotArea"))
    : t > 0
    ? $(".prop-type-other").find(".data-overflow").after($("#plotArea"))
    : $("#bhk").after($("#plotArea"));
}
function switchMinMax(e) {
  "MIN" == e
    ? ($("#minBudjet").hide(), $("#maxBudjet").show())
    : ($("#minBudjet").hide(),
      $("#maxBudjet").hide(),
      $(".mb-search__dropdown").slideUp());
}
function checkpgOccupancychecked(e) {
  $(e).is(":checked")
    ? $("#pgoccupancytypeid").show()
    : $("#pgoccupancytypeid").hide();
}
function postPropTabFireChangeCategoryGTM(e, t) {
  void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []);
  var a = "",
    r = readTabCookie("previousTab");
  return (
    "tabBUY" == r
      ? (a = "buy")
      : "tabRENT" == r
      ? (a = "rent")
      : "tabPG" == r
      ? (a = "pg")
      : "tabPLOT" == r
      ? (a = "plot")
      : "tabCOMM" == r && (a = "commercial"),
    MB_GTM_dataLayer.push({
      event: "event_tracking",
      eventName: "hp_cat_select",
      nonInteraction: !1,
      eventCategory: "Category Select",
      eventAction: "to:" + t,
      eventLabel: "from:" + a,
      eventValue: 0,
    }),
    !0
  );
}
function fireChangeCategoryGTM(e, t) {
  e.preventDefault(),
    void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []);
  var a = "",
    r = readTabCookie("previousTab");
  "tabBUY" == r
    ? (a = "buy")
    : "tabRENT" == r
    ? (a = "rent")
    : "tabPG" == r
    ? (a = "pg")
    : "tabPLOT" == r
    ? (a = "plot")
    : "tabCOMM" == r && (a = "commercial"),
    MB_GTM_dataLayer.push({
      event: "event_tracking",
      eventName: "hp_cat_select",
      nonInteraction: !1,
      eventCategory: "Category Select",
      eventAction: "to:" + t,
      eventLabel: "from:" + a,
      eventValue: 0,
    });
}
function fireHomeSearchGTM() {
  var e = "",
    t = "",
    a = "0",
    r = "0";
  if (!validateHomeSearchForm()) {
    var n,
      i = 1e14,
      o = 0,
      s = "",
      l = "";
    if (
      (isEmptyChk($("#categoryType").val()) || $("#categoryType").val(),
      isEmptyChk($("#homeSearchLocTxt").val()) ||
        (s = $("#homeSearchLocTxt").val().split(",")),
      "" != $("#homeSearchTxt").val() && null != $("#homeSearchTxt").val())
    ) {
      var c = $("#homeSearchTxt").val().replace(/ /g, "-").split(",");
      l += _toConsumableArray(new Set(c)).join();
    } else l += cityName;
    if (
      ((e += "loc:"),
      void 0 !== s && null != s && null != s.length && s.length > 0)
    )
      for (n = 0; n < s.length; n++)
        e = n < s.length - 1 ? e + s[n] + "@" + l + "|" : e + s[n] + "@" + l;
    else e += "NA";
    (e = (e += "-") + "city:" + l),
      isEmptyChk($("#budgetMin").val()) || (a = $("#budgetMin").val()),
      isEmptyChk($("#budgetMax").val()) || (r = $("#budgetMax").val());
    var d,
      u = _createForOfIteratorHelper(
        document.getElementsByName("bar_propertyType_new_buy")
      );
    try {
      for (u.s(); !(d = u.n()).done; ) {
        var p = d.value;
        1 == p.checked && ("" != t && (t += "|"), (t += p.title));
      }
    } catch (e) {
      u.e(e);
    } finally {
      u.f();
    }
    (e = (e += "-") + "type:" + t),
      convertHomeBudgetToValueWithUnits(a),
      convertHomeBudgetToValueWithUnits(r),
      "" != a && "-1" != a && 0 != a
        ? ((e = (e += "-") + "Min:" + a), (o = parseInt(a)))
        : ((e += "-"), (e += "min:0")),
      "" != r && "-1" != r && 0 != r
        ? ((e = (e += "-") + "Max:" + r), (i = parseInt(r)))
        : ((e += "-"), (e += "max:100000000000000")),
      event.preventDefault(),
      void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []),
      MB_GTM_dataLayer.push({
        event: "event_tracking",
        eventName: "hp_Search",
        description: "Search Executed",
        nonInteraction: !1,
        eventCategory: "Main Search",
        eventAction: "Search Executed",
        eventLabel: e,
        eventValue: 1,
        cm8: o,
        cm9: i,
        cm4: "1",
      });
  }
}
function fireLocalitySelectSearchGTM() {
  var e = "",
    t = "",
    a = "";
  if (!validateHomeSearchForm()) {
    if (
      (isEmptyChk($("#homeSearchLocTxt").val()) ||
        (t = $("#homeSearchLocTxt").val().split(",")),
      "" != $("#homeSearchTxt").val() && null != $("#homeSearchTxt").val())
    ) {
      var r = $("#homeSearchTxt").val().replace(/\s/g, "-").split(",");
      a = _toConsumableArray(new Set(r)).join();
    } else a = cityName;
    var n;
    if (void 0 !== t && null != t && null != t.length && t.length > 0)
      for (n = 0; n < t.length; n++)
        e = n < t.length - 1 ? e + t[n] + "@" + a + "|" : e + t[n] + "@" + a;
    else e += a;
    event.preventDefault(),
      void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []),
      MB_GTM_dataLayer.push({
        event: "event_tracking",
        eventName: "hp_Search",
        description: "Locality Selected",
        nonInteraction: !1,
        eventCategory: "Main Search",
        eventAction: "Locality Selected",
        eventLabel: e,
        eventValue: 0,
        cm8: 0,
        cm9: 1e14,
      });
  }
}
function firePropertySelectSearchGTM() {
  var e = "",
    t = "";
  if ("PG" == selectedTab) {
    var a,
      r = _createForOfIteratorHelper(document.getElementsByName("gender"));
    try {
      for (r.s(); !(a = r.n()).done; ) {
        var n = a.value;
        1 == n.checked && ("" != t && (t += "|"), (t += n.title));
      }
    } catch (e) {
      r.e(e);
    } finally {
      r.f();
    }
    var i,
      o = _createForOfIteratorHelper(document.getElementsByName("pgTypes"));
    try {
      for (o.s(); !(i = o.n()).done; ) {
        1 == (p = i.value).checked && ("" != t && (t += "|"), (t += p.title));
      }
    } catch (e) {
      o.e(e);
    } finally {
      o.f();
    }
    var s,
      l = _createForOfIteratorHelper(document.getElementsByName("occupancy"));
    try {
      for (l.s(); !(s = l.n()).done; ) {
        var c = s.value;
        1 == c.checked && ("" != t && (t += "|"), (t += c.title));
      }
    } catch (e) {
      l.e(e);
    } finally {
      l.f();
    }
  } else {
    var d,
      u = _createForOfIteratorHelper(
        document.getElementsByName("bar_propertyType_new_buy")
      );
    try {
      for (u.s(); !(d = u.n()).done; ) {
        var p;
        1 == (p = d.value).checked && ("" != t && (t += "|"), (t += p.title));
      }
    } catch (e) {
      u.e(e);
    } finally {
      u.f();
    }
  }
  isEmptyChk(t) ||
    ((e += t),
    void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []),
    MB_GTM_dataLayer.push({
      event: "event_tracking",
      eventName: "hp_Search",
      description: "property type selected",
      nonInteraction: !1,
      eventCategory: "Main Search",
      eventAction: "property type selected",
      eventLabel: e,
      eventValue: 0,
    }));
}
function fireBudgetSelectSearchGTM() {
  var e = "",
    t = "0",
    a = "0";
  if (!validateHomeSearchForm()) {
    var r = 1e14,
      n = 0;
    isEmptyChk($("#budgetMin").val()) || (a = $("#budgetMin").val()),
      isEmptyChk($("#budgetMax").val()) || (t = $("#budgetMax").val()),
      "" != a && "-1" != a && 0 != a
        ? ((e = e + "min:" + a), (n = parseInt(a)))
        : (e += "min:0"),
      "" != t && "-1" != t && 0 != t
        ? ((e = (e += " - ") + "max:" + t), (r = parseInt(t)))
        : ((e += " - "), (e += "max:100000000000000")),
      event.preventDefault(),
      void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []),
      MB_GTM_dataLayer.push({
        event: "event_tracking",
        eventName: "hp_Search",
        description: "Budget Selected",
        nonInteraction: !1,
        eventCategory: "Main Search",
        eventAction: "budget selected",
        eventLabel: e,
        eventValue: 0,
        cm8: n,
        cm9: r,
      });
  }
}
function validateBudget() {
  var e = $("#budgetMin").val(),
    t = $("#budgetMax").val();
  (e = Trim(e)),
    (t = $("#budgetMax").val()),
    isEmptyChk(e) || /^\d+$/.test(e) || $("#budgetMin").val(""),
    isEmptyChk(t) || /^\d+$/.test(t) || $("#budgetMax").val(""),
    selectHomeAutosuggestRent("budget", "r");
}
function fireSelectBudgetGTM(e) {
  var t = "",
    a = "0",
    r = "0";
  if (!validateHomeSearchForm()) {
    isEmptyChk($("#budgetMin").val()) || (r = $("#budgetMin").val()),
      isEmptyChk($("#budgetMax").val()) || (a = $("#budgetMax").val()),
      "" != r && "-1" != r && 0 != r && "min" == e && (t = t + "min:" + r),
      "" != a && "-1" != a && 0 != a && "max" == e && (t = t + "max:" + a),
      event.preventDefault(),
      void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []),
      MB_GTM_dataLayer.push({
        event: "event_tracking",
        eventName: "hp_Search",
        description: "Budget Selected",
        nonInteraction: !1,
        eventCategory: "Main Search",
        eventAction: "budget selected",
        eventLabel: t,
        eventValue: 0,
      });
  }
}
function readTabCookie(e) {
  for (
    var t = document.cookie.split(";"), a = e + "=", r = 0;
    r < t.length;
    r++
  ) {
    for (var n = t[r]; " " == n.charAt(0); ) n = n.substring(1, n.length);
    if (0 == n.indexOf(a))
      return (
        (retVal = n.substring(a.length, n.length)),
        "userTypeflSlider" == e && retVal.indexOf(",") > 0
          ? retVal.substring(0, retVal.indexOf(","))
          : "userEmailflSlider" == e
          ? retVal.replace(/^"(.*)"$/, "$1")
          : "userNameflSlider" == e
          ? retVal.replace(/^"(.\*)"$/, "$1")
          : retVal
      );
  }
  return null;
}
function setCurrentTab() {
  var e = "";
  "R" == selectedTab
    ? (e = "tabRENT")
    : "PG" == selectedTab
    ? (e = "tabPG")
    : "PLOT" == selectedTab
    ? (e = "tabPLOT")
    : "COMM" == selectedTab
    ? (e = "tabCOMM")
    : ("S" != selectedTab && "B" != selectedTab) || (e = "tabBUY"),
    tabCookie(e);
}
function fireSearchBoxClickedGTM() {
  event.preventDefault(),
    void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []),
    MB_GTM_dataLayer.push({
      event: "event_tracking",
      eventName: "hp_Search",
      description: "Search Box Clicked",
      nonInteraction: !1,
      eventCategory: "Main Search",
      eventAction: "search bar clicked",
      eventLabel: "search bar clicked",
      eventValue: 0,
    });
}
function createCookie(e, t, a) {
  var r = document.domain + "";
  -1 != r.indexOf(".magicbricks.com") && (r = ".magicbricks.com");
  var n = "";
  if (a) {
    var i = new Date();
    i.setTime(i.getTime() + 24 * a * 60 * 60 * 1e3),
      (n = "; expires=" + i.toGMTString());
  }
  document.cookie =
    e + "=" + encodeURIComponent(t) + n + "; path=/; secure; domain=" + r;
}
function openTvcPopup(e, t) {
  var a = $(e).attr("data-video");
  $(t).addClass("active"), $("#tvc-video-frame").attr("src", a);
}
function closeTvcPopup(e) {
  $(e).removeClass("active"), $("#tvc-video-frame").attr("src", "");
}
$(function () {
  setTimeout(function () {
    navigationAnimation($(this), "active", "parent"),
      mb_showCompactView("keyword");
  }, 900),
    $("html,body").on("click", function () {
      $(".mb-search__dropdown").hide(),
        mb_showCompactView("keyword"),
        "" != $("#budgetMin").val() &&
          null != $("#budgetMin").val() &&
          updateHomeBudgetForHomePage(
            "min",
            $("#budgetMin").val(),
            "0",
            "autoUpdate"
          ),
        "" != $("#budgetMax").val() &&
          null != $("#budgetMax").val() &&
          parseInt($("#budgetMin").val()) < parseInt($("#budgetMax").val()) &&
          updateHomeBudgetForHomePage(
            "max",
            $("#budgetMax").val(),
            "0",
            "autoUpdate"
          );
    }),
    $(".mb-search__tab__item").on("mouseenter", function () {
      navigationAnimation($(this), "overclass", "nav");
    }),
    $(".mb-search__tab").on("mouseleave", function () {
      navigationAnimation($(this), "active", "parent");
    }),
    clickOnHomePagePropertyType(
      "propType_buy_chk_10002_10003_10021_10022",
      "propType_buy_chk_10002_10003_10021_10022",
      "buy_proertyTypeDefault",
      "propType_buy_disable_1",
      "bar_propertyType_new_buy",
      "buy_proertyTypeCount",
      "Y",
      "Property Type"
    ),
    ("B" != selectedTab &&
      "S" != selectedTab &&
      "R" != selectedTab &&
      "COMM" != selectedTab) ||
      fetchTopBusinessTypesByCity(cityCode);
  var e = getCookie("categoryCommCookie");
  if (
    (isEmptyChk(e) ? (categoryC = "R") : (categoryC = e),
    ("COMM" != selectedTab && "comm" != selectedTab) ||
      updateCommercialCategory(categoryC),
    isEmptyChk(cityName) || isEmptyChk(cityCode))
  ) {
    var t = getCookie("cityNameCookie");
    n = getCookie("cityCookie");
    isEmptyChk(t) ||
      isEmptyChk(n) ||
      (mb_createComboDivs((t = t.replace(/-/g, " ")), n, "keyword", ""),
      $("#homeSearchValues").val(n),
      $("#homeSearchTxt").val(t),
      (citySelected = !0)),
      populateLocalityinSearch();
  } else {
    if (isEmptyChk(suburbCode))
      (cityName = cityName.replace(/-/g, " ")),
        $("#homeSearchValues").val(cityCode),
        $("#homeSearchTxt").val(cityName),
        mb_createComboDivs(cityName, cityCode, "keyword", "");
    else {
      var a = suburb,
        r = cityName.split("-")[0];
      $("#homeSearchValues").val(suburbCode),
        $("#homeSearchTxt").val(a + "-area-" + r),
        mb_createComboDivs(cityName + "-" + a, suburbCode, "keyword", "");
    }
    var n;
    (n = getCookie("cityCookie")) == cityCode && populateLocalityinSearch(),
      (citySelected = !0);
  }
  setCurrentTab(),
    selectHomeAutosuggestRent("budget", "r"),
    $("#tvcScrollId").length > 0 &&
      tvcBannerSlider("#tvcScrollId", !1, !0, 5e3, 272);
});
var ENABLESKIPACTION = !1;
function smsMobileVerifcatioDivCode(e, t, a, r, n, i, o, s) {
  var l,
    c = !1,
    d = "Resend code",
    u = "OTP_on_call";
  (C = window.location.href) &&
    -1 != C.indexOf("similarProperty") &&
    ((d += " Similar property page"), (u += " Similar property page"));
  var p = domcache_srp.srpTrackCode,
    h = ((T = createStringIntoMap(i, ";", ":")).contactID, !1);
  "Y" == T.isRequirement && (p = "saveRequirement"),
    "undefined" != typeof contactPageName &&
      "" !== contactPageName &&
      "Property Details" == contactPageName &&
      (p = "");
  var m = "N",
    f = readCookie("userMobileCountry"),
    v = setVerificationText(r, n);
  (l = v.contactAdvertiser),
    (c = v.viewPhoneNumber),
    "Y" == T.isRequirementPDP && ((h = !0), (c = !0));
  var g =
    $("#domcache_constant").attr("data-apicontexturl") +
    "chkMobileVerification.html?mobNo=" +
    e +
    "&mobileIsd=" +
    f;
  console.log(g),
    $.ajax({
      url: g,
      success: function (e) {
        var t = getCookie("userUniqToken");
        void 0 !== t && t && "" != t
          ? e.verificationFlag && 1 == e.verificationFlag && (m = "Y")
          : (m = "N");
      },
    }),
    (l || c) && (h = !0);
  var y = !0;
  "buyerdashboardContact" === r &&
    "buyerdashboardContactValue" === n &&
    ((h = !0), (y = !1));
  var b = "";
  (b = '<div id="smsWrapper" class="buyerWapSms">'),
    y && (b += '<div class="head">');
  var w, C;
  ((w = null != isNri(s) && "Y" == isNri(s)),
  (stopResendOnCall = w),
  ENABLESKIPACTION)
    ? ((C = window.location.href) && -1 != C.indexOf("similarProperty")
        ? (ga(
            "send",
            "event",
            "OTP _tracking",
            "OTP Requested Similar property page",
            p
          ),
          fireGTMEvent("otpRequested", ""))
        : (ga("send", "event", "OTP _tracking", "OTP Requested", p),
          fireGTMEvent("otpRequested", "")),
      (b +=
        '<div class="mobileVerTop">Verify your number <div class="closeForm" onclick="stopPage=true;"><a href="javascript:void(0);" onclick="moreContactBuyerPopClose();" class="closePop"></a> </div></div>'),
      (b = w
        ? b +
          '<div class="mobileVerTopadvContact">Enter 3 digit Verification Code sent on <br/><span class="mNumber black">' +
          o +
          '</span> <span class="editNo backToForm pencil-ico">Edit</span></div>'
        : b +
          '<div class="mobileVerTopadvContact">Enter 3 digit Verification Code sent on <br/><span class="mNumber black">' +
          e +
          '</span> <span class="editNo backToForm pencil-ico">Edit</span></div>'))
    : ((C = window.location.href) && -1 != C.indexOf("similarProperty")
        ? (ga(
            "send",
            "event",
            "OTP _tracking",
            "OTP Requested Similar property page",
            p
          ),
          fireGTMEvent("otpRequested", ""))
        : (ga("send", "event", "OTP _tracking", "OTP Requested", p),
          fireGTMEvent("otpRequested", "")),
      h || "saveFirstSrchCnct" == n
        ? "buyerdashboardContact" === r && "buyerdashboardContactValue" === n
          ? ((b +=
              '<div class="mobileVerTop">Verify your number <div class="closeForm" onclick="stopPage=true;"><a href="javascript:void(0);" onclick="moreContactBuyerPopClose();" class="closePop"></a> </div></div>'),
            (b = w
              ? b +
                '<div class="mobileVerTopadvContact">Enter 3 digit Verification Code sent on <br/><span class="mNumber black">' +
                o +
                '</span> <span class="editNo backToForm pencil-ico">Edit</span></div>'
              : b +
                '<div class="mobileVerTopadvContact">Enter 3 digit Verification Code sent on <br/><span class="mNumber black">' +
                e +
                '</span> <span class="editNo backToForm pencil-ico">Edit</span></div>'))
          : (l &&
              ((b +=
                '<div class="mobileVerTop">Verify your number <div class="closeForm" onclick="stopPage=true;"><a href="javascript:void(0);" onclick="moreContactBuyerPopClose();" class="closePop"></a> </div></div>'),
              (b = w
                ? b +
                  '<div class="mobileVerTopadvContact">Enter 3 digit Verification Code sent on <br/><span class="mNumber black">' +
                  o +
                  '</span> <span class="editNo backToForm pencil-ico">Edit</span></div>'
                : b +
                  '<div class="mobileVerTopadvContact">Enter 3 digit Verification Code sent on <br/><span class="mNumber black">' +
                  e +
                  '</span> <span class="editNo backToForm pencil-ico">Edit</span></div>')),
            c &&
              ((b +=
                '<div class="mobileVerTop">Verify your number <div class="closeForm" onclick="stopPage=true;"><a href="javascript:void(0);" onclick="moreContactBuyerPopClose();" class="closePop"></a> </div></div>'),
              (b =
                "saveFirstSrchCnct" === n
                  ? w
                    ? b +
                      '<div class="mobileVerTopadvContact">Enter 3 digit Verification Code sent on <br/><span class="mNumber black">' +
                      o +
                      '</span> <span class="editNo backToSaveFirstSearchForm pencil-ico">Edit</span></div>'
                    : b +
                      '<div class="mobileVerTopadvContact">Enter 3 digit Verification Code sent on <br/><span class="mNumber black">' +
                      e +
                      '</span> <span class="editNo backToSaveFirstSearchForm pencil-ico">Edit</span></div>'
                  : w
                  ? b +
                    '<div class="mobileVerTopadvContact">Enter 3 digit Verification Code sent on <br/><span class="mNumber black">' +
                    o +
                    '</span> <span class="editNo backToForm pencil-ico">Edit</span></div>'
                  : b +
                    '<div class="mobileVerTopadvContact">Enter 3 digit Verification Code sent on <br/><span class="mNumber black">' +
                    e +
                    '</span> <span class="editNo backToForm pencil-ico">Edit</span></div>')))
        : ((b =
            b +
            '<div class="mobileVerTop">Verify your mobile (<span class="mNumber">' +
            e +
            "</span>) to get</div>"),
          (b +=
            '<div class="mobileVerTopadvContact">Contact details of the Advertiser </div>')));
  (b += "</div>"),
    (b += '<input style="display:none" id="toCall" value="true" />'),
    (b += '<div class="verifyBlock">'),
    (b +=
      '<div class="entBoCont"><input name="smsNo" id ="smsNo" type="tel" maxlength="3" placeholder="" class="entNo m-contact__input"/></div>'),
    (b += '<div class="actionBlock mt148"><a href="javascript://"');
  var T = createStringIntoMap(i, ";", ":"),
    k = T.contactID;
  if (
    ((b =
      b +
      ' onclick="verifyingMobileNumber(&apos;' +
      e +
      "&apos;,&apos;" +
      k +
      "&apos;,&apos;" +
      a +
      "&apos;,&apos;" +
      r +
      "&apos;,&apos;" +
      n +
      "&apos;,&apos;" +
      i +
      '&apos;)"'),
    (b += ' class="subBtn btn3">Verify</a>'),
    a && ENABLESKIPACTION
      ? ((b =
          (b += '<a href="javascript://"') +
          'onclick="onClickSkipAction(&apos;' +
          e +
          "&apos;,&apos;" +
          a +
          "&apos;,&apos;" +
          r +
          "&apos;,&apos;" +
          n +
          "&apos;,&apos;" +
          i +
          '&apos;);"'),
        (b += 'class="skipBtn btn4">Skip</a></div>'))
      : (b += "</div>"),
    (b =
      b + '<div class="smsVerifiedMes" id="smsVerifiedMes_' + k + '"></div>'),
    ENABLESKIPACTION && "Y" != m)
  )
    (b += w
      ? '<div id="countDownContainer"><span id="countDownMessage">You will receive OTP via email within</span> <span class="mbcountdown green-color" id="mbcountdown"></span> min</div>'
      : '<div id="countDownContainer"><span id="countDownMessage">You will receive OTP via SMS within</span> <span class="mbcountdown green-color" id="mbcountdown"></span> min</div>'),
      w ||
        ((b +=
          '<div class="resemdContHead didnt">Did not get Verification Code?</div>'),
        (b += "<div class='resemdCont' id='smsCodeSent'>"),
        (b =
          (b += ' <a href="javascript://"') +
          ' onclick="verifyingMobileNumberSMS(&apos;' +
          e +
          "&apos;,&apos;" +
          t +
          "&apos;,&apos;" +
          k +
          "&apos;);ga(&quot;send&quot;, &quot;event&quot;, &quot;OTP _tracking&quot;, &quot;" +
          d +
          "&quot;, &quot;" +
          e +
          " | " +
          p +
          '&quot;);"'),
        (b += " >Resend Code</a>"),
        (b += "</div>"));
  else {
    s = null;
    readCookie("userMobileCountry") && (s = readCookie("userMobileCountry")),
      null == s && (s = "50"),
      "Y" != m
        ? ((b += w
            ? '<div id="countDownContainer"><span id="countDownMessage">You will receive OTP via email within</span> <span class="mbcountdown green-color" id="mbcountdown"></span> min</div>'
            : '<div id="countDownContainer"><span id="countDownMessage">You will receive OTP via SMS within</span> <span class="mbcountdown green-color" id="mbcountdown"></span> min</div>'),
          w
            ? ((b +=
                '<div class="resemdContHead">Did not get Verification Code?</div>'),
              (b += "<div class='resemdCont rBorder wf' id='smsCodeSent'>"),
              (b =
                (b += ' <a href="javascript://"') +
                ' onclick="verifyingEmailOTP(&apos;' +
                e +
                "&apos;,&apos;" +
                t +
                "&apos;,&apos;" +
                o +
                "&apos;,&apos;Y&apos;);ga(&quot;send&quot;, &quot;event&quot;, &quot;OTP _tracking&quot;, &quot;" +
                d +
                "&quot;, &quot;" +
                e +
                " | " +
                p +
                '&quot;);"'),
              (b += " >Resend Code</a>"),
              (b += "</div>"),
              "50" == s
                ? ((b +=
                    "<div class='resemdCont ws' id='smsCodeSentOnCall'  style='display:block;'>"),
                  (b =
                    (b += ' <a href="javascript://"') +
                    ' onclick="verifyingMobileNumberCall(&apos;' +
                    e +
                    "&apos;,&apos;" +
                    a +
                    "&apos;,&apos;" +
                    r +
                    "&apos;,&apos;" +
                    n +
                    "&apos;,&apos;" +
                    i +
                    "&apos;);ga(&quot;send&quot;, &quot;event&quot;, &quot;OTP _tracking&quot;, &quot;" +
                    u +
                    "&quot;, &quot;" +
                    p +
                    '&quot;);fireGTMEvent(&quot;otpOnCall&quot;,&quot;&quot;);"'),
                  (b += " >Receive OTP on Call</a>"),
                  (b += "</div>"))
                : ((b +=
                    "<div class='resemdCont ws' id='smsCodeSentOnCall'  style='display:none;'>"),
                  (b =
                    (b += ' <a href="javascript://"') +
                    ' onclick="verifyingMobileNumberCall(&apos;' +
                    e +
                    "&apos;,&apos;" +
                    a +
                    "&apos;,&apos;" +
                    r +
                    "&apos;,&apos;" +
                    n +
                    "&apos;,&apos;" +
                    i +
                    "&apos;);ga(&quot;send&quot;, &quot;event&quot;, &quot;OTP _tracking&quot;, &quot;" +
                    u +
                    "&quot;, &quot;" +
                    p +
                    '&quot;);fireGTMEvent(&quot;otpOnCall&quot;,&quot;&quot;);"'),
                  (b += " >Receive OTP on Call</a>"),
                  (b += "</div>")),
              (b += "<div class='whatsapp-otp' id='smsCodeSentOnWhatsApp'>"),
              (b =
                (b += ' <a href="javascript://"') +
                ' onclick="verifyingWhatsAppOTP(&apos;' +
                e +
                "&apos;,&apos;" +
                t +
                "&apos;,&apos;" +
                o +
                "&apos;,&apos;" +
                k +
                "&apos;,&apos;Y&apos;);ga(&quot;send&quot;, &quot;event&quot;, &quot;OTP _tracking&quot;, &quot;OTP_on_whatsappp&quot;, &quot;" +
                e +
                " | " +
                p +
                '&quot;);"'),
              (b +=
                ' ><span class="ico whatsapp-otp--icon"><svg role="icon"><use xlink:href="#icon-mc-whatsapp"></use></svg></span>RECEIVE OTP ON WHATSAPP</a>'),
              (b += "</div>"))
            : ((b +=
                '<div class="resemdContHead">Did not get Verification Code?</div>'),
              (b += "<div class='resemdCont rBorder wf' id='smsCodeSent'>"),
              (b =
                (b += ' <a href="javascript://"') +
                ' onclick="verifyingMobileNumberSMS(&apos;' +
                e +
                "&apos;,&apos;" +
                t +
                "&apos;,&apos;" +
                k +
                "&apos;);ga(&quot;send&quot;, &quot;event&quot;, &quot;OTP _tracking&quot;, &quot;" +
                d +
                "&quot;, &quot;" +
                e +
                " | " +
                p +
                '&quot;);"'),
              (b += " >Resend Code</a>"),
              (b += "</div>"),
              (b +=
                "<div class='resemdCont ws' id='smsCodeSentOnCall'  style='display:block;'>"),
              (b =
                (b += ' <a href="javascript://"') +
                ' onclick="verifyingMobileNumberCall(&apos;' +
                e +
                "&apos;,&apos;" +
                a +
                "&apos;,&apos;" +
                r +
                "&apos;,&apos;" +
                n +
                "&apos;,&apos;" +
                i +
                "&apos;);ga(&quot;send&quot;, &quot;event&quot;, &quot;OTP _tracking&quot;, &quot;" +
                u +
                "&quot;, &quot;" +
                p +
                '&quot;);fireGTMEvent(&quot;otpOnCall&quot;,&quot;&quot;);"'),
              (b += " >Receive OTP on Call</a>"),
              (b += "</div>")),
          (b +=
            '<div id="code_on_call"></div><input type="hidden" id="otpSubmitted" value="N">'),
          (b += '<div class="clearAll"></div>'),
          (b += '<div class="resemdCont" id="smsCodeSentUnverifedDiv"></div>'))
        : ((b +=
            '<div id="code_on_call"></div><input type="hidden" id="otpSubmitted" value="N">'),
          (b += "<div style='height: 40px;'></div>"));
  }
  return (b += "</div>"), (b += "</div>");
}
function verifyingMobileNumberSMS(e, t, a) {
  var r =
    domcache_srp.apicontexturl +
    "verifyingMobileNumber.html?senderMobile=" +
    e +
    "&senderName=" +
    t;
  $.ajax({
    type: "get",
    url: r,
    cache: !0,
    async: !1,
    success: function (e) {
      e && mbStartTimerCall("resendsms");
    },
  });
}
var otpscreentext = 0;
function verifyingWhatsAppOTP(e, t, a, r, n) {
  var i =
    domcache_srp.apicontexturl +
    "verifyingMobileNumber.html?senderMobile=" +
    e +
    "&senderName=" +
    t;
  (i = i + "&emailId=" + a + "&isNri=" + n + "&whatsapp=Y"),
    $.ajax({
      type: "get",
      url: i,
      cache: !0,
      async: !1,
      success: function (t) {
        t &&
          ((htmlText =
            'Enter 3 digit Verification Code sent on WhatsApp no.<br/><span class="mNumber black">' +
            e +
            '</span> <span class="editNo backToForm pencil-ico">Edit</span>'),
          0 == otpscreentext &&
            ($(".mobileVerTopadvContact").html(""),
            $(".mobileVerTopadvContact").html(htmlText),
            (otpscreentext = 1)),
          mbStartTimerCall("whatsapp"));
      },
    });
}
function verifyingEmailOTP(e, t, a, r) {
  var n =
    domcache_srp.apicontexturl +
    "verifyingMobileNumber.html?senderMobile=" +
    e +
    "&senderName=" +
    t;
  (n = n + "&emailId=" + a + "&isNri=" + r),
    $.ajax({
      type: "get",
      url: n,
      cache: !0,
      async: !1,
      success: function (e) {
        e &&
          ((htmlText =
            'Enter 3 digit Verification Code sent on <br/><span class="mNumber black">' +
            a +
            '</span> <span class="editNo backToForm pencil-ico">Edit</span>'),
          1 == otpscreentext &&
            ($(".mobileVerTopadvContact").html(""),
            $(".mobileVerTopadvContact").html(htmlText),
            (otpscreentext = 0)),
          mbStartTimerCall("resendsms"));
      },
    });
}
var timerMain,
  verifiedOnCall = !1;
function verifyingMobileNumberCall(e, t, a, r, n) {
  createStringIntoMap(n, ";", ":").id;
  var i = domcache_srp.apicontexturl + "verifyOnCall.html?mobile=" + e;
  $.ajax({
    type: "get",
    url: i,
    cache: !0,
    async: !1,
    success: function (e) {
      (verifiedOnCall = !0), e && mbStartTimerCall("recall");
    },
  });
}
function setVerificationText(e, t) {
  var a = !1,
    r = !1;
  "propertySearchResultPage" === e && "contactAdvertiser" === t
    ? (r = !0)
    : "propertySearchResultPage" === e && "viewPhoneNumber" === t
    ? (a = !0)
    : "propertySearchResultPage" !== e ||
      ("saveRequirement" !== t &&
        "exitIntent" !== t &&
        "saveFirstSrchCnct" !== t) ||
      (a = !0);
  var n = new Array();
  return (n.contactAdvertiser = r), (n.viewPhoneNumber = a), n;
}
function createStringIntoMap(e, t, a) {
  var r = new Object();
  if (e) {
    if (e.indexOf(t)) {
      for (var n = e.split(t), i = n.length, o = 0; o < i; o++) {
        (s = n[o].split(a)) && (r[s[0]] = s[1]);
      }
      return r;
    }
    var s;
    return (s = e.split(":")) && (r[s[0]] = s[1]), r;
  }
  return null;
}
function mbStartTimer(e, t, a, r) {
  timerMain && clearInterval(timerMain), console.log("In Timer:::--" + e);
  var n,
    i,
    o = e;
  timerMain = setInterval(function () {
    (n = parseInt(o / 60, 10)),
      (i = parseInt(o % 60, 10)),
      (n = n < 10 ? "0" + n : n),
      (i = i < 10 ? "0" + i : i),
      (t.textContent = n + ":" + i),
      --o < 0 && (r(a), clearInterval(timerMain));
  }, 1e3);
}
function mbStartTimerCall(e) {
  var t = timerTypeLogic(e);
  (document.getElementById("countDownMessage").innerHTML = t.msg),
    stopResendOnCall
      ? (document
          .querySelector("#" + t.otpSendTypeContainer)
          .classList.add("disableResend"),
        document.querySelector("#" + t.onContainer) &&
          document
            .querySelector("#" + t.onContainer)
            .classList.remove("disableResend"),
        document.querySelector("#" + t.onContainer1) &&
          document
            .querySelector("#" + t.onContainer1)
            .classList.remove("disableResend"),
        mbStartTimer(
          180,
          document.querySelector("#mbcountdown"),
          e,
          callbackTimer
        ))
      : (document
          .querySelector("#" + t.otpSendTypeContainer)
          .classList.add("disableResend"),
        document
          .querySelector("#" + t.onContainer)
          .classList.remove("disableResend"),
        document.querySelector("#" + t.onContainer1) &&
          document
            .querySelector("#" + t.onContainer1)
            .classList.remove("disableResend"),
        mbStartTimer(
          60,
          document.querySelector("#mbcountdown"),
          e,
          callbackTimer
        ));
}
function timerTypeLogic(e) {
  var t = { msg: "", otpSendText: "", otpSendTypeContainer: "" };
  return (
    "sms" == e || "resendsms" == e
      ? (stopResendOnCall
          ? (t.msg = "You will receive OTP via email within")
          : (t.msg = "You will receive OTP via SMS within"),
        (t.otpSendTypeContainer = "smsCodeSent"),
        (t.onContainer = "smsCodeSentOnCall"),
        (t.onContainer1 = "smsCodeSentOnWhatsApp"),
        (t.otpSendText = "Resend Code"))
      : "call" == e
      ? ((t.msg = "You will receive a call with your code within"),
        (t.otpSendTypeContainer = "smsCodeSentOnCall"),
        (t.onContainer = "smsCodeSent"),
        (t.onContainer1 = "smsCodeSentOnWhatsApp"),
        (t.otpSendText = "Request Call"))
      : "recall" == e
      ? ((t.msg = "You will receive a call with your code within"),
        (t.otpSendTypeContainer = "smsCodeSentOnCall"),
        (t.onContainer = "smsCodeSent"),
        (t.onContainer1 = "smsCodeSentOnWhatsApp"),
        (t.otpSendText = "Request Another Call"))
      : "whatsapp" == e &&
        ((t.msg = "You will receive OTP via WhatsApp within"),
        (t.otpSendTypeContainer = "smsCodeSentOnWhatsApp"),
        (t.onContainer = "smsCodeSent"),
        (t.onContainer1 = "smsCodeSentOnCall"),
        (t.otpSendText =
          '<span class="ico whatsapp-otp--icon"><svg role="icon"><use xlink:href="#icon-mc-whatsapp"></use></svg></span>Resend OTP on WhatsApp')),
    t
  );
}
function callbackTimer(e) {
  var t = timerTypeLogic(e);
  document.querySelector("#" + t.otpSendTypeContainer + " a") &&
    ((document.querySelector("#" + t.otpSendTypeContainer + " a").innerHTML =
      t.otpSendText),
    document
      .querySelector("#" + t.otpSendTypeContainer)
      .classList.remove("disableResend"),
    document
      .querySelector("#" + t.onContainer)
      .classList.remove("disableResend"));
}
function fireGTMEvent(e, t) {
  var a = readCookie("userref"),
    r = domcache_srp.srpTrackCode,
    n = "";
  void 0 !== domcache_srp.category &&
    (n =
      "S" == domcache_srp.category || "B" == domcache_srp.category
        ? "sale_only"
        : "rent_only"),
    (readCookie("contactNameCookie") && readCookie("contactEmailCookie")) ||
    (void 0 !== domcache_srp.loginrfnum && "" != domcache_srp.loginrfnum) ||
    (a && null != a)
      ? (clickType = "single touch")
      : (clickType = "multi touch"),
    "contactError" == e &&
      MB_GTM_dataLayer.push({
        event: "event_tracking",
        eventName: "Contact Error",
        nonInteraction: "No",
        eventCategory: "Contact",
        eventAction: "Contact Error - " + t,
        eventLabel: "prop_card_srp-" + n + "-" + clickType + "-" + r,
        eventValue: "",
      }),
    "otpRequested" == e &&
      MB_GTM_dataLayer.push({
        event: "event_tracking",
        eventName: "Contact OTP Requested",
        nonInteraction: "No",
        eventCategory: "Contact",
        eventAction: "OTP Requested",
        eventLabel: "prop_card_srp-" + n + "-" + clickType + "-" + r,
        eventValue: "",
      }),
    "otpSubmitBlank" == e &&
      MB_GTM_dataLayer.push({
        event: "event_tracking",
        eventName: "Contact OTP Submitted",
        nonInteraction: "No",
        eventCategory: "Contact",
        eventAction: "OTP Error - Not Entered",
        eventLabel: "prop_card_srp-" + n + "-" + clickType + "-" + r,
        eventValue: "",
      }),
    "otpIncorrect" == e &&
      MB_GTM_dataLayer.push({
        event: "event_tracking",
        eventName: "Contact OTP Incorrect Submitted",
        nonInteraction: "No",
        eventCategory: "Contact",
        eventAction: "OTP Error - Incorrect",
        eventLabel: "prop_card_srp-" + n + "-" + clickType + "-" + r,
        eventValue: "",
      }),
    "otpResend" == e &&
      MB_GTM_dataLayer.push({
        event: "event_tracking",
        eventName: "Contact OTP Resend",
        nonInteraction: "No",
        eventCategory: "Contact",
        eventAction: "OTP Error - OTP Resend",
        eventLabel: "prop_card_srp-" + n + "-" + clickType + "-" + r,
        eventValue: "",
      }),
    "otpCall" == e &&
      MB_GTM_dataLayer.push({
        event: "event_tracking",
        eventName: "Contact OTP On Call",
        nonInteraction: "No",
        eventCategory: "Contact",
        eventAction: "OTP Error - OTP On Call",
        eventLabel: "prop_card_srp-" + n + "-" + clickType + "-" + r,
        eventValue: "",
      }),
    "contactSucess" == e &&
      MB_GTM_dataLayer.push({
        event: "event_tracking",
        eventName: "Contact Success",
        nonInteraction: "No",
        eventCategory: "Contact",
        eventAction: "contact_success",
        eventLabel: "prop_card_srp-" + n + "-" + clickType + "-" + r,
        eventValue: "",
      }),
    "otpFail" == e &&
      MB_GTM_dataLayer.push({
        event: "event_tracking",
        eventName: "Contact OTP Fail",
        nonInteraction: "No",
        eventCategory: "Contact",
        eventAction: "OTP Error - OTP Fail",
        eventLabel: "prop_card_srp-" + n + "-" + clickType + "-" + r,
        eventValue: "",
      }),
    "otpLimitReached" == e &&
      MB_GTM_dataLayer.push({
        event: "event_tracking",
        eventName: "Contact OTP Limit Reached",
        nonInteraction: "No",
        eventCategory: "Contact",
        eventAction: "OTP Error - OTP Limit Reached",
        eventLabel: "prop_card_srp-" + n + "-" + clickType + "-" + r,
        eventValue: "",
      });
}
function verifyingMobileNumber(e, t, a, r, n, i) {
  verifiedOnCall && (verifiedOnCall = !1);
  var o = domcache_srp.srpTrackCode;
  "undefined" != typeof contactPageName &&
    "" !== contactPageName &&
    "Property Details" == contactPageName &&
    (o = domcache_pdp.pdpTrackCode),
    (map = createStringIntoMap(i, ";", ":")),
    "Y" == map.isRequirement && (o = "saveRequirement"),
    map.isRequirementPDP && (o = "Share");
  var s = $("#smsNo").val();
  $("#toCall").val("false");
  var l = readCookie("userName"),
    c = readCookie("userEmail"),
    d = readCookie("userType");
  if (
    ("undefined" != typeof isMobileForm && "Y" == isMobileForm && "msite", !s)
  )
    return (
      $("#smsVerifiedMes_" + t).html(
        '<div class="smsVerifiedErr"><span></span>Please enter the code</div>'
      ),
      $("#smsNo").val(""),
      ga("send", "event", "OTP _tracking", "Not Entered", e + " | " + o),
      fireGTMEvent("otpSubmitBlank", ""),
      !1
    );
  var u = map.contactID,
    p = (map.contactType, $("#selectCountry_mobile_" + u).val()),
    h =
      domcache_srp.apicontexturl +
      "verifyingMobileNumberContact.html?senderMobile=" +
      e +
      "&code=" +
      s +
      "&userName=" +
      l +
      "&userEmail=" +
      c +
      "&pId=" +
      u +
      "&mobileCode=" +
      p +
      "&userType=" +
      d +
      "&utimp=" +
      getCookie("utimp");
  return (
    $.ajax({
      url: h,
      async: !1,
      data: { isSaveRequirement: map.isRequirement },
      success: function (a, r, n) {
        var i = JSON.parse(a);
        resendText = i.resendFlag;
        i.hmacCode;
        var s = i.isExpired,
          l = (i.isRegUser, i.existUser, i.block);
        i.encuserval, i.userUniqToken;
        return "Y" == i.saveRequirementVerfied && resendText
          ? (createCookie("verifcationFlag", "Y", 90),
            createCookie("contactCookie", "Y", 90),
            createCookie("otpFlage", "Y", 90),
            createCookie("verificationFlag", "Y", 90),
            createCookie("sessionCookieForContact", "Y", 90),
            ga(
              "send",
              "event",
              "SRP",
              "Requirement Contact Form Submitted",
              "Submit"
            ),
            $("#internContactForm").css("display", "none"),
            $("#modal-box2").css("display", "flex"),
            ga("send", "event", "OTP _tracking", "Success", o),
            !0)
          : (s
              ? ($("#smsVerifiedMes_" + t).html(
                  '<div class="smsVerifiedErr"><span></span>Otp Expired</div>'
                ),
                ga("send", "event", "OTP _tracking", "Fail", e + " | " + o),
                fireGTMEvent("otpFail", ""))
              : l
              ? ($("#smsVerifiedMes_" + t).html(
                  '<div class="smsVerifiedErr"><span></span>You\'ve exceeded your max. limit of OTP attempts for today</div>'
                ),
                ga(
                  "send",
                  "event",
                  "OTP_tracking",
                  "Limit Reached",
                  e + "| Homepage"
                ),
                fireGTMEvent("otpLimitReached", ""))
              : ($("#smsVerifiedMes_" + t).html(
                  '<div class="smsVerifiedErr"><span></span>Please enter the correct code</div>'
                ),
                ga(
                  "send",
                  "event",
                  "OTP _tracking",
                  "Incorrect",
                  e + " | " + o
                ),
                fireGTMEvent("otpIncorrect", "")),
            $("#smsNo").val(""),
            !1);
      },
    }),
    !1
  );
}
$("body").on("click", ".backToForm", function () {
  $(this).closest(".m-contact__slide").hide(),
    $(this)
      .closest(".m-contact__slide")
      .siblings(".m-contact__slide--1")
      .show(),
    $("#m-contact__header_text").show(),
    $(".schedule-callback-button-wrap").show(),
    $(
      "#contactObjButton,#showContactButtonTextMob,#showContactButtonText"
    ).removeAttr("disabled"),
    $("#internContactForm, #internContactFormMob, #capture-step-otp").hide(),
    $(
      "#fillSaveYourSearch, .req-save-search-form-mobile, #capture-step-two"
    ).show();
});
var rsDataMap,
  searchData,
  proprertyTypeStr,
  isRepeatUser = !1,
  isConvertedUser = !1,
  isContactJsLoad = !1,
  showNpsWidgetPreContact = !0,
  isRepeatLuxUser = !1,
  isConvertedLuxUser = !1,
  isPrellaBannerExist = !1,
  prellaBannerCount = 0;
proprertyTypeStr = null != category && "R" == category ? "rent" : "sale";
var isLuxVal = "undefined" != typeof isLuxury && "Y" == isLuxury ? "Y" : "N",
  isPrellaVal =
    "undefined" != typeof isPrellaPage &&
    null !== isPrellaPage &&
    "Y" == isPrellaPage,
  trendingPropertySeeAll =
    domainURL +
    "property-for-" +
    proprertyTypeStr +
    "/residential-real-estate?" +
    seeAllPropertyUrl() +
    "&parameter=rel&hideviewed=N&filterCount=3&incSrc=Y&fromSrc=homeSrc",
  exclusiveOwnerSeeAllProperty =
    domainURL +
    "property-for-" +
    proprertyTypeStr +
    "/residential-real-estate?" +
    seeAllPropertyUrl() +
    "&exc=Y&ListingsType=I&parameter=rel&hideviewed=N&incSrc=Y&fromSrc=homeSrc",
  exclusiveOwnerSeeAllLuxProperty =
    domainURL +
    "property-for-" +
    proprertyTypeStr +
    "/residential-real-estate?" +
    seeAllPropertyUrl() +
    "&ListingsType=I&parameter=rel&hideviewed=N&incSrc=Y&fromSrc=homeSrc",
  freshPropertySeeAllProperty =
    domainURL +
    "property-for-rent/residential-real-estate?" +
    seeAllPropertyUrl() +
    "&parameter=recent&hideviewed=N&postedSince=11001&filterCount=3&incSrc=Y&fromSrc=homeSrc&sortBy=postRecency",
  ownerPropSeeAllProperty =
    domainURL +
    "property-for-" +
    proprertyTypeStr +
    "/residential-real-estate?" +
    seeAllPropertyUrl() +
    "&parameter=rel&hideviewed=N&ListingsType=I&filterCount=3&incSrc=Y&fromSrc=homeSrc",
  topLocalityCity = checkEmpty(searchData) ? lastSearchCity() : cityName,
  topLocalitySeeAllProperty =
    domainURL + "localities-in-" + topLocalityCity.replace(/ /g, "-"),
  topLocalityRentProperties =
    domainURL +
    "property-for-rent/residential-real-estate?" +
    seeAllPropertyUrl(),
  topLocalitySaleProperties =
    domainURL +
    "property-for-sale/residential-real-estate?" +
    seeAllPropertyUrl(),
  trendingSocietyViewAllUrl =
    domainURL +
    "property-for-rent/residential-real-estate?proptype=Residential-House,Villa,Multistorey-Apartment,Builder-Floor-Apartment,Studio-Apartment,Penthouse&cityName=" +
    cityName.replace(/ /g, "-") +
    "&projectSocity=",
  propType = getUserCookie("subPropertyTypeCookie");
function openPrimeLink(e) {
  var t =
    domainURL +
    "mbprime/primePackages?ptype=10002&category=" +
    category +
    "&cityCnd=" +
    e +
    "&nri=" +
    isNRI;
  window.open(t, "_blank");
}
propType =
  "undefined" != typeof propertytype && checkEmpty(propertytype)
    ? propertytype.replace(/"/g, "")
    : void 0 !== propType && checkEmpty(propType)
    ? propType.replace(/"/g, "")
    : "";
var bannerSeeAllLink =
    domainURL +
    "Real-estate-projects-Search/residential-new-project?&proptype=Multistorey-Apartment,Builder-Floor-Apartment,Penthouse,Studio-Apartment,Residential-House,Villa&cityName=" +
    cityName.replace(/ /g, "-") +
    "&mbTrackSrc=tabChange&page=1&category=" +
    category,
  mbPrimeUrl =
    domainURL +
    "mbprime/primePackages?ptype=" +
    propType +
    "&category=" +
    category +
    "&cityCnd=" +
    getCityCnd() +
    "&nri=" +
    isNRI,
  payRentUrl =
    "https://www.magicbricks.com/propertyservices/pay-property-rent-online.html?inc=buyhp_searchside_banner_pay_rent";
(ajaxToGetHTMLPageFor = function (e, t, a) {
  $.ajax({ url: e, type: "GET", dataType: "html", success: t, error: a });
}),
  $(function () {
    setTimeout(function () {
      mbHomeWeb.init();
    }, 600),
      loadRecentSearch(),
      ("undefined" != typeof jacketAdCookie &&
        null != jacketAdCookie &&
        "" != jacketAdCookie &&
        "N" != jacketAdCookie &&
        "n" != jacketAdCookie) ||
        init(),
      firePageLoadGTM();
    var e = getUserCookie("luxuryCookie"),
      t = getUserCookie("luxuryContactCookie");
    ((checkEmpty(e) && "Y" == e) || checkEmpty(t)) && loadLuxRecentSearch();
    var a = "S";
    if (
      (checkEmpty(selectedTab) && "R" == selectedTab && (a = "R"),
      checkEmpty(suburbCode)
        ? (checkEmpty(topDownBanner) &&
            "N" == topDownBanner &&
            self.loadBanner(
              self,
              "topDownDynamicBannerFetched",
              {
                maxToRender: 1,
                pagename: pagename,
                promotionDefRefNo: 51310,
                cityRefNo: "2951",
                geoCity: geoCity,
                geoGroupCity: geoGroupCity,
                transTypeSearch: a,
                geoGrouped: geoGrouped,
                geoTargeted: geoTargeted,
                onlySuburb: onlySubrub,
                refreshCount: refreshCounter,
              },
              "top-down-banner",
              1,
              0
            ),
          checkEmpty(searchFormBanner) &&
            "N" == searchFormBanner &&
            self.loadBanner(
              self,
              "searchFormDynamicBannerFetched",
              {
                maxToRender: 1,
                pagename: pagename,
                promotionDefRefNo: 51311,
                cityRefNo: cityCode + "-" + suburbCode,
                geoCity: geoCity,
                geoGroupCity: geoGroupCity,
                transTypeSearch: a,
                geoGrouped: geoGrouped,
                geoTargeted: geoTargeted,
                onlySuburb: onlySubrub,
                refreshCount: refreshCounter,
              },
              "search-form-banner",
              1,
              0
            ))
        : (checkEmpty(topDownBanner) &&
            "N" == topDownBanner &&
            self.loadBanner(
              self,
              "topDownDynamicBannerFetched",
              {
                maxToRender: 1,
                pagename: pagename,
                promotionDefRefNo: 51310,
                cityRefNo: "2951",
                geoCity: geoCity,
                geoGroupCity: geoGroupCity,
                transTypeSearch: a,
                geoGrouped: geoGrouped,
                geoTargeted: geoTargeted,
                onlySuburb: onlySubrub,
                refreshCount: refreshCounter,
              },
              "top-down-banner",
              1,
              0
            ),
          checkEmpty(searchFormBanner) &&
            "N" == searchFormBanner &&
            self.loadBanner(
              self,
              "searchFormDynamicBannerFetched",
              {
                maxToRender: 1,
                pagename: pagename,
                promotionDefRefNo: 51311,
                cityRefNo: cityCode,
                geoCity: geoCity,
                geoGroupCity: geoGroupCity,
                transTypeSearch: a,
                geoGrouped: geoGrouped,
                geoTargeted: geoTargeted,
                onlySuburb: onlySubrub,
                refreshCount: refreshCounter,
              },
              "search-form-banner",
              1,
              0
            )),
      $("body").on("click", ".mb-home__select-city__dropdown", function (e) {
        e.stopPropagation(), $(this).addClass("active");
      }),
      $("body").on("click", ".mb-home__announcement--close", function () {
        $("body").removeClass("has-announcement"), $(this).parent("div").hide();
      }),
      $("html, body").click(function () {
        $(".mb-home__select-city__dropdown").removeClass("active");
      }),
      0 == isRepeatUser &&
        0 == isPrellaVal &&
        ($("#property-services").show(),
        $("#tools-advice").show(),
        self.getPropertyCountGroup(cityCode),
        $("#search-collection").show()),
      $("#search-collection").length > 0 &&
        swipperInit("search-collection", 4, 16),
      0 == isRepeatUser &&
        null != isNRI &&
        "N" == isNRI &&
        ("R" == category
          ? $("#home_page_msg").html(
              "Find your perfect <span>Rental home</span>"
            )
          : checkEmpty(fromPage) && "luxury" == fromPage
          ? $("#home_page_msg").html(
              "Welcome back!  Choose from 3000+ <span>Premium Homes</span>"
            )
          : $("#home_page_msg").html("Find a home you'll <span>love</span>")),
      "Y" == isLuxVal &&
        (1 == isRepeatLuxUser || (1 == isConvertedLuxUser && 0 == isPrellaVal)))
    ) {
      var r = searchCollection();
      self.getHTMLSectionOnScroll(self, r, null, "search-collection", 4, 16),
        $("#property-services").show(),
        $("#tools-advice").show(),
        $(".search-collection-luxury").addClass("isLuxuryRepeatUser");
    } else if (isRepeatUser && 0 == isPrellaVal) {
      var n = getUserCookie("psmIds");
      loadReMarketingBanner(
        "51139",
        cityCode,
        "",
        category,
        "reMarketingBannerGeneric",
        n,
        "",
        "Y",
        "remarketingBannerDiv",
        1
      );
      r = searchCollection();
      self.getHTMLSectionOnScroll(self, r, null, "search-collection", 4, 16),
        $("#property-services").show(),
        $("#tools-advice").show();
    }
    setTimeout(function () {
      1 == $(".mb-reacBanner").length &&
        reactivationGA("LOAD", numberOfProperties, "");
    }, 2e3),
      "Y" != isLuxVal ||
        isRepeatLuxUser ||
        isConvertedLuxUser ||
        $("#home_page_msg").html(
          "Welcome back!  Choose from 3000+ <span>Premium Homes</span>"
        ),
      isRepeatUser &&
        ("undefined" == typeof category ||
          ("B" != category && "b" != category && "S" != category) ||
          showReMarketingBannerOnHomePage("Web")),
      window.rtimeOut(function () {
        showNpsWidgetPreContact && setNpsData();
      }, 12e4);
  });
var mbHomeWeb = {
  init: function () {
    this.addEvents();
  },
  addEvents: function () {
    if (
      ($("#swiper_project-reviews").length > 0 &&
        swipperInit("swiper_project-reviews", 4, 16),
      $("#swiper_proj-investment-corridor").length > 0 &&
        swipperInit("swiper_proj-investment-corridor", 3, 16),
      $("#parellaBannerSwiper").length > 0)
    )
      new Swiper("#parellaBannerSwiper", {
        effect: "fade",
        navigation: {
          nextEl: "#parellaBannerSwiper .swiper-button-next",
          prevEl: "#parellaBannerSwiper .swiper-button-prev",
        },
      });
    document
      .querySelector("#swiper_property-services")
      .querySelectorAll(".swiper-slide").length > 4 &&
      swipperInit("swiper_property-services", 4, 16),
      swipperInit("swiper_tools-advice", 4, 16),
      swipperInit("swiper_society-experts", 4, 16),
      swipperInit("swiper_premium-localities", 3, 16);
  },
  modalBoxOpen: function (e, t, a, r, n) {
    document.querySelector("html").classList.add("no-scroll"),
      document.querySelector("body").classList.add("no-scroll");
    var i = document.querySelector("#mb-home__modal");
    $(i).find(".mb-home__modal__box").css({ width: t, height: a }),
      void 0 === n ||
        " " === n ||
        "null" === n ||
        self.ajaxToGetHTMLPageFor(
          n,
          function (e) {
            $(i).addClass("save-your-search-popup"),
              $(".mb-home__modal__body").html(e),
              $(i).addClass("open"),
              localitySuggestUpdatePostReq();
          },
          function (e, t, a) {}
        );
  },
  modalBoxClose: function (e) {
    document.querySelector("html").classList.remove("no-scroll"),
      document.querySelector("body").classList.remove("no-scroll");
    var t = $("#mb-home__modal");
    t.removeClass("open"),
      $(t).find(".mb-home__modal--loader").show(),
      t.find(".mb-home__modal__box").removeAttr("style"),
      t.find(".mb-home__modal__box").removeClass("has-video"),
      t.find(".mb-home__modal__body").html("");
  },
  addiPropTabContent: function (e) {
    var t = document.querySelectorAll(".prop-tab-content"),
      a = $(e).attr("data-tab");
    $(e).closest("ul").find("a").removeClass("active");
    for (var r = 0; r < t.length; r++) t[r].classList.remove("active");
    $(e).addClass("active"),
      $("#" + a).addClass("active"),
      $(".swiper-container").each(function () {
        swipperInit("addiPropTab-1", 4, 40).destroy(),
          swipperInit("addiPropTab-2", 4, 40).destroy();
      }),
      $("#addiPropTab-1, #addiPropTab-2").length > 0 &&
        (swipperInit("addiPropTab-1", 4, 40),
        swipperInit("addiPropTab-2", 4, 40));
  },
  cityTabContent: function (e) {
    var t = document.querySelectorAll(".city-tab-content"),
      a = $(e).attr("data-tab");
    $(e).closest("ul").find("a").removeClass("active");
    for (var r = 0; r < t.length; r++) t[r].classList.remove("active");
    $(e).addClass("active"), $("#" + a).addClass("active");
  },
  showCityDropdown: function (e, t, a, r) {
    $(".mb-home__select-city__dropdown").removeClass("active"),
      $(t).find(".mb-home__select-city__dropdown").css({ width: a, height: r }),
      $(t).find(".mb-home__select-city__dropdown").addClass("active");
  },
  blogTabContent: function (e) {
    var t = document.querySelectorAll(".blog-tab-content"),
      a = $(e).attr("data-tab");
    $(e).closest("ul").find("a").removeClass("active");
    for (var r = 0; r < t.length; r++) t[r].classList.remove("active");
    $(e).addClass("active"), $("#" + a).addClass("active");
  },
  viewMoreBlog: function (e) {
    var t = $(e).text();
    console.log(t),
      "See More" == t
        ? ($(e).parent().removeClass("viewMore"), $(e).text("See Less"))
        : "See Less" === t &&
          ($(e).parent().addClass("viewMore"), $(e).text("See More"));
  },
  showblogDropdown: function (e, t, a, r) {
    $(".mb-home__select-blog__dropdown").removeClass("active"),
      $(t).find(".mb-home__select-blog__dropdown").css({ width: a, height: r }),
      $(t).find(".mb-home__select-blog__dropdown").addClass("active");
  },
  showMoreContent: function (e, t) {
    (document.getElementById(e).style.display = "none"),
      (document.getElementById(t).style.display = "block");
  },
  redirectURL: function (e, t) {
    e.preventDefault(), window.open(t, "_blank");
  },
  stopPageRedirect: function (e) {
    e.stopPropagation();
  },
};
function loadLocalityBanner(e, t, a, r) {
  "B" == category || "b" == category || category;
  $("#" + r + "-content").html("");
  var n = 4;
  "project-gallery" == r && (n = 1),
    "featured-projects" == r && (n = 2),
    "new-project-gallery" == r && (n = 3),
    self.loadBanner(
      self,
      null,
      {
        maxToRender: 21,
        pagename: pagename,
        promotionDefRefNo: t,
        cityRefNo: cityCode,
        localityName: a,
        geoCity: geoCity,
        geoGroupCity: geoGroupCity,
        transTypeSearch: "10002",
        geoGrouped: geoGrouped,
        geoTargeted: geoTargeted,
        onlySubrub: onlySubrub,
      },
      r,
      n,
      16
    ),
    $("#" + r)
      .find(".mb-home__select-city__dropdown")
      .find("a")
      .removeClass("active"),
    $(e).addClass("active"),
    $(".mb-home__select-city__dropdown").removeClass("active");
}
(getHTMLSectionOnScroll = function (e, t, a, r, n, i) {
  if (null == a || !e[a]) {
    null != a && (e[a] = !0);
    var o = $("#domcache_constant").attr("data-fullcontextpath") + t;
    e.ajaxToGetHTMLPageFor(
      o,
      function (t) {
        checkEmpty(t) &&
          t.length > 500 &&
          ($("#" + r).html(t),
          $("#" + r).show(),
          "realEstateGuideId" != r && swipperInit(r, n, i),
          "search-collection" == r && e.recentSearchCollectionCard());
      },
      function (t, r, n) {
        null != a && (e[a] = !1);
      }
    );
  }
}),
  (loadBanner2 = function (e, t, a) {
    var r =
      $("#domcache_constant").attr("data-apicontexturl") + "getBanners.html?";
    for (var n in t) {
      if (t.hasOwnProperty(n)) r = r + "&" + n + "=" + t[n];
    }
    $.ajax({
      dataType: "json",
      type: "get",
      url: r,
      success: function (e) {
        if (0 != e.status) {
          $("#" + a).show();
          var t = e.bannerBypromotion[0].banners;
          if (null != t && null != t && t.length > 0) {
            t.length > 20 && (t = t.slice(0, 20));
            for (var r = 0; r < t.length; r++)
              (banner = t[r]),
                "star-inventory" == a
                  ? ($("#" + a + "-content").append(
                      '<div class="swiper-slide project-slider">' +
                        banner.bannerDisc +
                        "</div>"
                    ),
                    setTimeout(function () {
                      $("#star-inventory-content")
                        .find(".project-slider")
                        .each(function () {
                          starInventorySlides.push($(this).html());
                        });
                    }, 600),
                    setTimeout(function () {
                      initStarMainSwiper();
                    }, 800))
                  : $("#" + a + "-content").append($(banner.bannerDisc));
          }
        }
      },
    });
  }),
  (loadBanner = function (e, t, a, r, n, i) {
    if (null == t || !e[t]) {
      null != t && (e[t] = !0);
      var o =
          $("#domcache_constant").attr("data-apicontexturl") +
          "getBanners.html?",
        s = "bannerDropDownLocality.html?";
      for (var l in a)
        if (a.hasOwnProperty(l)) {
          var c = a[l];
          (o = o + "&" + l + "=" + c), (s = s + "&" + l + "=" + c);
        }
      $.ajax({
        dataType: "json",
        type: "get",
        url: o,
        success: function (o) {
          if (0 != o.status) {
            e.getHTMLSectionOnScroll(
              e,
              s + "&divId=" + r,
              null,
              r + "-drop-down"
            ),
              (isPrellaBannerExist = !0),
              prellaBannerCount++,
              $("#" + r).show();
            var l = o.bannerBypromotion[0].banners;
            if (null != l && null != l && l.length > 0) {
              "newProjectGalleryBannerFetched" == t
                ? l.length > 120 && (l = l.slice(0, 120))
                : l.length > 20 && (l = l.slice(0, 20));
              for (var c = l.length - 1; c >= 0; c--) {
                if ("top-down-banner" == r)
                  document
                    .getElementById("commercialIndex")
                    .classList.add("has-announcement");
                (banner = l[c]),
                  "luxuryHomePageWeb.jsp" == pagename
                    ? $("#" + r + "-content").append($(banner.bannerDisc))
                    : 51053 == a.promotionDefRefNo
                    ? $("#" + r + "-content").append(
                        "<div class='swiper-slide'>" +
                          banner.bannerDisc +
                          "</div>"
                      )
                    : $("#" + r + "-content").append($(banner.bannerDisc));
              }
              setTimeout(function () {
                "project-showcase" == r
                  ? initShowcaseParentSwiper()
                  : swipperInit(r, n, i);
              }, 200);
            }
          } else prellaBannerCount++;
        },
      });
    }
  });
var swipperInit = function (e, t, a) {
  var r = 1;
  return (
    "new-project-gallery" == e &&
      ((r = 2),
      $("#new-project-gallery").find(".swiper-slide").length < 4 &&
        ((r = 1),
        $("#new-project-gallery")
          .find(".swiper-container")
          .css("height", "auto")),
      $("#new-project-gallery").find(".swiper-slide").length > 3 &&
        $("#new-project-gallery").find(".swiper-slide").length < 7 &&
        $("#new-project-gallery")
          .find(".swiper-wrapper")
          .addClass("width100Percent")),
    new Swiper("#" + e + " .swiper-container", {
      direction: "horizontal",
      loop: !1,
      lazy: { loadPrevNext: !0 },
      simulateTouch: !1,
      slidesPerView: t,
      spaceBetween: a,
      slidesPerColumn: r,
      on: {
        init: function () {
          newProjectGalleryLazy(6);
        },
        slideChangeTransitionStart: function () {
          newProjectGalleryLazy(2);
        },
      },
      navigation: {
        nextEl: "#" + e + " .swiper-button-next",
        prevEl: "#" + e + " .swiper-button-prev",
      },
    })
  );
};
(init = function () {
  if (null === localStorage.getItem("rotateFlag"))
    localStorage.setItem("rotateFlag", 0);
  else if ("100" === localStorage.getItem("rotateFlag"))
    localStorage.setItem("rotateFlag", 0);
  else {
    rotateCounter = localStorage.getItem("rotateFlag");
    var e = parseInt(rotateCounter) + 1;
    localStorage.setItem("rotateFlag", e);
  }
  if (
    ("Y" == isLuxVal
      ? this.triggerEventOnLuxuryHomePageScroll(this)
      : isPrellaVal
      ? this.triggerEventOnPrellaHomePageScroll(this)
      : this.triggerEventOnPageScroll(this),
    (this.featureProjectBannerFetched = !1),
    (this.trendingSocietyFetched = !1),
    (this.topProjectBannerFetched = !1),
    (this.projectGalleryBannerFetched = !1),
    (this.mbPrimeBannerFetched = !1),
    (this.newProjectGalleryBannerFetched = !1),
    (this.topResidentialProjectByName = !1),
    (this.explorTopLocality = !1),
    (this.premiumLocalities = !1),
    (this.topProjects = !1),
    (this.newlyLaunchedProjects = !1),
    (this.premiumProjectGalleryBannerFetched = !1),
    (this.grandProjectShowcaseBannerFetched = !1),
    (this.topDownDynamicBannerFetched = !1),
    (this.searchFormDynamicBannerFetched = !1),
    (this.newProjectGalleryDropDownLocality = !1),
    (this.exclusiveOownerPropertiesFetched = !1),
    (this.explorTopLocality = !1),
    (this.ownerProperties = !1),
    (this.propertySnapShot = !1),
    (this.investmentCorridorFetched = !1),
    (this.recommendedPropsFetched = !1),
    (this.trendingProperties = !1),
    (this.starInventoryFetched = !1),
    (this.realEstateGuide = !1),
    (this.prefferedAgentShow = !1),
    setSemAttributesCookie(),
    document.getElementById("tools-advice")) &&
    "goToTools" == window.location.hash.substr(1)
  ) {
    $("html, body").animate({ scrollTop: 5 }, 50),
      setTimeout(function () {
        if ($("body").hasClass("has-announcement"))
          var e = $("#tools-advice").offset().top - 150;
        else e = $("#tools-advice").offset().top - 80;
        $("html, body").animate({ scrollTop: e }, 500);
      }, 3500);
  }
}),
  (triggerEventOnPageScroll = function (e) {
    $(window).on("scroll", function () {
      "B" == category || "b" == category || category;
      if (
        ($("#mb-home__whtspAssitB__content").length > 0 &&
          $(this).scrollTop() >
            $("#mb-home__whtspAssitB__content").offset().top - 700 &&
          customLazyLoad("mb-home__whtspAssitB__content"),
        isRepeatUser)
      ) {
        var t = getUserCookie("userEmail")
            ? getUserCookie("userEmail").replace(/"/gi, "")
            : "",
          a = getUserCookie("userNTrackId")
            ? getUserCookie("userNTrackId").replace(/"/gi, "")
            : "",
          r = category || "",
          n = getUserCookie("cityCookie") ? getUserCookie("cityCookie") : "";
        null == r || "undefined" == r || ("S" !== r && "s" !== r) || (r = "B"),
          e.getHTMLSectionOnScroll(
            e,
            "home/recommended-properties?p_i_d=0&userEmail=" +
              t +
              "&userNTrackId=" +
              a +
              "&projectCategory=" +
              r +
              "&city=" +
              n +
              "&fromHomePage=Y",
            "recommendedPropsFetched",
            "recommended-properties",
            4,
            16
          );
      }
      var i = "B" == category || "b" == category ? "S" : category;
      "Y" == isNRI &&
        "S" == i &&
        0 == isRepeatUser &&
        e.getHTMLSectionOnScroll(
          e,
          "home/investment-zones?ct=" + cityCode + "&cityName=" + cityName,
          "investmentCorridorFetched",
          "top-investments-corridors",
          4,
          16
        ),
        "R" != category &&
          ("Y" == countryLevel
            ? (isRepeatUser &&
                checkEmpty(lastSearchCity()) &&
                (geocity = lastSearchCity()),
              e.loadBanner(
                e,
                "projectGalleryBannerFetched",
                {
                  maxToRender: 21,
                  pagename: pagename,
                  promotionDefRefNo: 51053,
                  cityRefNo: "",
                  geoCity: geoCity,
                  geoGroupCity: geoGroupCity,
                  transTypeSearch: "10002",
                  geoGrouped: geoGrouped,
                  geoTargeted: geoTargeted,
                  onlySuburb: onlySubrub,
                  refreshCount: refreshCounter,
                },
                "project-gallery",
                1,
                0
              ),
              e.loadBanner(
                e,
                "featureProjectBannerFetched",
                {
                  maxToRender: 4,
                  pagename: pagename,
                  promotionDefRefNo: 51054,
                  cityRefNo: "",
                  geoCity: geoCity,
                  geoGroupCity: geoGroupCity,
                  transTypeSearch: "10002",
                  geoGrouped: geoGrouped,
                  geoTargeted: geoTargeted,
                  onlySuburb: onlySubrub,
                  refreshCount: refreshCounter,
                },
                "featured-projects",
                2,
                16
              ),
              e.loadBanner(
                e,
                "topProjectBannerFetched",
                {
                  maxToRender: 21,
                  pagename: pagename,
                  promotionDefRefNo: 51055,
                  cityRefNo: "",
                  geoCity: geoCity,
                  geoGroupCity: geoGroupCity,
                  transTypeSearch: "10002",
                  geoGrouped: geoGrouped,
                  geoTargeted: geoTargeted,
                  onlySuburb: onlySubrub,
                  refreshCount: refreshCounter,
                },
                "top-projects",
                4,
                16
              ),
              e.loadBanner(
                e,
                "newProjectGalleryBannerFetched",
                {
                  maxToRender: 120,
                  pagename: pagename,
                  promotionDefRefNo: 51057,
                  cityRefNo: "",
                  geoCity: geoCity,
                  geoGroupCity: geoGroupCity,
                  transTypeSearch: "10002",
                  geoGrouped: geoGrouped,
                  geoTargeted: geoTargeted,
                  onlySuburb: onlySubrub,
                  refreshCount: refreshCounter,
                },
                "new-project-gallery",
                3,
                16
              ),
              e.loadBanner(
                e,
                "mbPrimeBannerFetched",
                {
                  maxToRender: 21,
                  pagename: pagename,
                  promotionDefRefNo: 51294,
                  cityRefNo: "",
                  geoCity: geoCity,
                  geoGroupCity: geoGroupCity,
                  transTypeSearch: "10002",
                  geoGrouped: geoGrouped,
                  geoTargeted: geoTargeted,
                  onlySuburb: onlySubrub,
                  refreshCount: refreshCounter,
                },
                "mb-prime",
                1,
                0
              ))
            : checkEmpty(suburbCode)
            ? (e.loadBanner(
                e,
                "projectGalleryBannerFetched",
                {
                  maxToRender: 21,
                  pagename: pagename,
                  promotionDefRefNo: 51053,
                  cityRefNo: cityCode + "-" + suburbCode,
                  geoCity: geoCity,
                  geoGroupCity: geoGroupCity,
                  transTypeSearch: "10002",
                  geoGrouped: geoGrouped,
                  geoTargeted: geoTargeted,
                  onlySuburb: onlySubrub,
                  refreshCount: refreshCounter,
                },
                "project-gallery",
                1,
                0
              ),
              e.loadBanner(
                e,
                "featureProjectBannerFetched",
                {
                  maxToRender: 4,
                  pagename: pagename,
                  promotionDefRefNo: 51054,
                  cityRefNo: cityCode + "-" + suburbCode,
                  geoCity: geoCity,
                  geoGroupCity: geoGroupCity,
                  transTypeSearch: "10002",
                  geoGrouped: geoGrouped,
                  geoTargeted: geoTargeted,
                  onlySuburb: onlySubrub,
                  refreshCount: refreshCounter,
                },
                "featured-projects",
                2,
                16
              ),
              e.loadBanner(
                e,
                "topProjectBannerFetched",
                {
                  maxToRender: 21,
                  pagename: pagename,
                  promotionDefRefNo: 51055,
                  cityRefNo: cityCode + "-" + suburbCode,
                  geoCity: geoCity,
                  geoGroupCity: geoGroupCity,
                  transTypeSearch: "10002",
                  geoGrouped: geoGrouped,
                  geoTargeted: geoTargeted,
                  onlySuburb: onlySubrub,
                  refreshCount: refreshCounter,
                },
                "top-projects",
                4,
                16
              ),
              e.loadBanner(
                e,
                "newProjectGalleryBannerFetched",
                {
                  maxToRender: 120,
                  pagename: pagename,
                  promotionDefRefNo: 51057,
                  cityRefNo: cityCode + "-" + suburbCode,
                  geoCity: geoCity,
                  geoGroupCity: geoGroupCity,
                  transTypeSearch: "10002",
                  geoGrouped: geoGrouped,
                  geoTargeted: geoTargeted,
                  onlySuburb: onlySubrub,
                  refreshCount: refreshCounter,
                },
                "new-project-gallery",
                3,
                16
              ),
              e.loadBanner(
                e,
                "mbPrimeBannerFetched",
                {
                  maxToRender: 21,
                  pagename: pagename,
                  promotionDefRefNo: 51294,
                  cityRefNo: cityCode + "-" + suburbCode,
                  geoCity: geoCity,
                  geoGroupCity: geoGroupCity,
                  transTypeSearch: "10002",
                  geoGrouped: geoGrouped,
                  geoTargeted: geoTargeted,
                  onlySuburb: onlySubrub,
                  refreshCount: refreshCounter,
                },
                "mb-prime",
                1,
                0
              ))
            : (e.loadBanner(
                e,
                "projectGalleryBannerFetched",
                {
                  maxToRender: 21,
                  pagename: pagename,
                  promotionDefRefNo: 51053,
                  cityRefNo: cityCode,
                  geoCity: geoCity,
                  geoGroupCity: geoGroupCity,
                  transTypeSearch: "10002",
                  geoGrouped: geoGrouped,
                  geoTargeted: geoTargeted,
                  onlySuburb: onlySubrub,
                  refreshCount: refreshCounter,
                },
                "project-gallery",
                1,
                0
              ),
              e.loadBanner(
                e,
                "featureProjectBannerFetched",
                {
                  maxToRender: 4,
                  pagename: pagename,
                  promotionDefRefNo: 51054,
                  cityRefNo: cityCode,
                  geoCity: geoCity,
                  geoGroupCity: geoGroupCity,
                  transTypeSearch: "10002",
                  geoGrouped: geoGrouped,
                  geoTargeted: geoTargeted,
                  onlySuburb: onlySubrub,
                  refreshCount: refreshCounter,
                },
                "featured-projects",
                2,
                16
              ),
              e.loadBanner(
                e,
                "topProjectBannerFetched",
                {
                  maxToRender: 21,
                  pagename: pagename,
                  promotionDefRefNo: 51055,
                  cityRefNo: cityCode,
                  geoCity: geoCity,
                  geoGroupCity: geoGroupCity,
                  transTypeSearch: "10002",
                  geoGrouped: geoGrouped,
                  geoTargeted: geoTargeted,
                  onlySuburb: onlySubrub,
                  refreshCount: refreshCounter,
                },
                "top-projects",
                4,
                16
              ),
              e.loadBanner(
                e,
                "newProjectGalleryBannerFetched",
                {
                  maxToRender: 120,
                  pagename: pagename,
                  promotionDefRefNo: 51057,
                  cityRefNo: cityCode,
                  geoCity: geoCity,
                  geoGroupCity: geoGroupCity,
                  transTypeSearch: "10002",
                  geoGrouped: geoGrouped,
                  geoTargeted: geoTargeted,
                  onlySuburb: onlySubrub,
                  refreshCount: refreshCounter,
                },
                "new-project-gallery",
                3,
                16
              ),
              e.loadBanner(
                e,
                "mbPrimeBannerFetched",
                {
                  maxToRender: 21,
                  pagename: pagename,
                  promotionDefRefNo: 51294,
                  cityRefNo: cityCode,
                  geoCity: geoCity,
                  geoGroupCity: geoGroupCity,
                  transTypeSearch: "10002",
                  geoGrouped: geoGrouped,
                  geoTargeted: geoTargeted,
                  onlySuburb: onlySubrub,
                  refreshCount: refreshCounter,
                },
                "mb-prime",
                1,
                0
              ))),
        getStarInventory(e, "starInventoryFetched", "star-inventory");
      var o = "browseTopLocality?" + searchParamDataQuery(),
        s =
          "ownerProperties?" +
          searchParamDataQuery() +
          "&noOfRows=8&rotateCounter=4&pageName=indexc.html",
        l =
          "propertySnapShot?" +
          searchParamDataQuery() +
          "&propertyType=10002&pageName=indexc.html",
        c = "freshProperties?" + searchParamDataQuery(),
        d =
          "exclusiveOwnerProperties?" +
          searchParamDataQuery() +
          "&noOfRows=8&rotateCounter=4&pageName=indexc.html&exc=Y";
      var u = "?cityId=" + cityCode;
      "" == cityCode && (u = "?cityId=" + geocityCode),
        1 == isRepeatUser &&
          "R" == category &&
          e.getHTMLSectionOnScroll(
            e,
            "home/trending-society" + u,
            "trendingSocietyFetched",
            "trending-societies",
            4,
            16
          );
      var p =
        "premiumProjectFromCity?" +
        searchDataQueryForSamePage() +
        "&isPrella=Y";
      "R" != category &&
        e.getHTMLSectionOnScroll(
          e,
          p,
          "newlyLaunchedProjects",
          "newly-launched-projects",
          2,
          16
        );
      var h = "trendingProperties?" + searchParamDataQuery();
      e.getHTMLSectionOnScroll(
        e,
        l,
        "propertySnapShot",
        "property-snapshot",
        4,
        20
      ),
        1 == isRepeatUser &&
          "S" == i &&
          e.getHTMLSectionOnScroll(
            e,
            s,
            "ownerProperties",
            "owner-properties",
            4,
            16
          );
      var m = cityCode;
      "" == cityCode && (m = geocityCode);
      var f =
        "topSocietyExpertList.html?ltName=&cityName=" +
        cityName +
        "&cityId=" +
        m +
        "&count=5&source=wap";
      "R" == category &&
        e.getHTMLSectionOnScroll(
          e,
          s,
          "ownerProperties",
          "owner-properties",
          4,
          16
        ),
        1 == isRepeatUser && "R" == category
          ? (e.getHTMLSectionOnScroll(
              e,
              f,
              "topSocietyExpert",
              "topsociety-expert",
              4,
              16
            ),
            e.getHTMLSectionOnScroll(
              e,
              c,
              "freshProperties",
              "fresh-properties",
              4,
              16
            ))
          : "undefined" == typeof category ||
            ("B" != category && "b" != category && "S" != category) ||
            e.getHTMLSectionOnScroll(
              e,
              o,
              "explorTopLocality",
              "toplocalities-explore",
              3,
              16
            ),
        1 == isRepeatUser &&
          e.getHTMLSectionOnScroll(
            e,
            d,
            "exclusiveOownerProperties",
            "exclusive-ownerProperties",
            4,
            16
          ),
        1 == isRepeatUser &&
          "S" == i &&
          e.getHTMLSectionOnScroll(
            e,
            h,
            "trendingProperties",
            "trending-properties",
            4,
            16
          );
      var v =
        "topRecommendedAgentWeb?cityId=" +
        cityCode +
        "&cityName=" +
        cityName.replace("&", "and") +
        "&category=" +
        category;
      e.getHTMLSectionOnScroll(
        e,
        v,
        "prefferedAgentShow",
        "prefferedAgent",
        4,
        16
      ),
        getStarInventory(e, "starInventoryFetched", "star-inventory");
      var g = cityCode,
        y = "Buy_1";
      category && "R" == category && (y = "Rent");
      var b =
        "getBlogSection?cityTag=" +
        g +
        "&localityTag=" +
        (null != readCookie("localityCookie")
          ? readCookie("localityCookie")
          : "") +
        "&cityName=" +
        cityName +
        "&searchType=" +
        y;
      if (
        (e.getHTMLSectionOnScroll(
          e,
          b,
          "realEstateGuide",
          "realEstateGuideId",
          4,
          20
        ),
        localityVideoSwipper(),
        $(this).scrollTop() > $("#property-services").offset().top - 700 &&
          customLazyLoad("property-services"),
        !isContactJsLoad)
      )
        try {
          var w = $("#domcache_constant").attr("data-jsrooturl");
          w.includes("magicservicestatic") &&
            (w = w.replace("magicservicestatic", "propertydetailstatic")),
            loadJS(w + "contact-standalone.js"),
            (isContactJsLoad = !0);
        } catch (e) {
          console.log(e);
        }
    });
  });
var triggerEventOnLuxuryHomePageScroll = function (e) {
  $(window).on("scroll", function () {
    "true" === luxurySEOHomepage
      ? (e.loadBanner(
          e,
          "grandProjectShowcaseBannerFetched",
          {
            maxToRender: 3,
            pagename: pagename,
            promotionDefRefNo: 51053,
            cityRefNo: "",
            geoCity: "",
            geoGroupCity: "",
            transTypeSearch: "10002",
            geoGrouped: geoGrouped,
            geoTargeted: geoTargeted,
            onlySuburb: onlySubrub,
            refreshCount: refreshCounter,
          },
          "project-showcase",
          1,
          0
        ),
        e.loadBanner(
          e,
          "premiumProjectGalleryBannerFetched",
          {
            maxToRender: 12,
            pagename: pagename,
            promotionDefRefNo: 51054,
            cityRefNo: "",
            geoCity: "",
            geoGroupCity: "",
            transTypeSearch: "10002",
            geoGrouped: geoGrouped,
            geoTargeted: geoTargeted,
            onlySuburb: onlySubrub,
            refreshCount: refreshCounter,
          },
          "premium-projects",
          2,
          16
        ))
      : checkEmpty(suburbCode)
      ? (e.loadBanner(
          e,
          "grandProjectShowcaseBannerFetched",
          {
            maxToRender: 3,
            pagename: pagename,
            promotionDefRefNo: 51053,
            cityRefNo: cityCode + "-" + suburbCode,
            geoCity: geoCity,
            geoGroupCity: geoGroupCity,
            transTypeSearch: "10002",
            geoGrouped: geoGrouped,
            geoTargeted: geoTargeted,
            onlySuburb: onlySubrub,
            refreshCount: refreshCounter,
          },
          "project-showcase",
          1,
          0
        ),
        e.loadBanner(
          e,
          "premiumProjectGalleryBannerFetched",
          {
            maxToRender: 4,
            pagename: pagename,
            promotionDefRefNo: 51054,
            cityRefNo: cityCode + "-" + suburbCode,
            geoCity: geoCity,
            geoGroupCity: geoGroupCity,
            transTypeSearch: "10002",
            geoGrouped: geoGrouped,
            geoTargeted: geoTargeted,
            onlySuburb: onlySubrub,
            refreshCount: refreshCounter,
          },
          "premium-projects",
          2,
          16
        ))
      : (e.loadBanner(
          e,
          "grandProjectShowcaseBannerFetched",
          {
            maxToRender: 3,
            pagename: pagename,
            promotionDefRefNo: 51053,
            cityRefNo: cityCode,
            geoCity: geoCity,
            geoGroupCity: geoGroupCity,
            transTypeSearch: "10002",
            geoGrouped: geoGrouped,
            geoTargeted: geoTargeted,
            onlySuburb: onlySubrub,
            refreshCount: refreshCounter,
          },
          "project-showcase",
          1,
          0
        ),
        e.loadBanner(
          e,
          "premiumProjectGalleryBannerFetched",
          {
            maxToRender: 4,
            pagename: pagename,
            promotionDefRefNo: 51054,
            cityRefNo: cityCode,
            geoCity: geoCity,
            geoGroupCity: geoGroupCity,
            transTypeSearch: "10002",
            geoGrouped: geoGrouped,
            geoTargeted: geoTargeted,
            onlySuburb: onlySubrub,
            refreshCount: refreshCounter,
          },
          "premium-projects",
          2,
          16
        ));
    var t =
        "exclusiveOwnerProperties?" +
        searchParamDataQuery() +
        "&noOfRows=10&rotateCounter=0&pageName=luxuryHomePageWeb.jsp&exc=Y&isLuxury=Y",
      a = "trendingProperties?" + searchParamDataQuery() + "&isLuxury=Y",
      r = "premiumLocalityFromCity?" + searchParamDataQuery(),
      n = "premiumProjectFromCity?" + searchParamDataQuery();
    (1 != isRepeatLuxUser && 1 != isConvertedLuxUser) ||
      (e.getHTMLSectionOnScroll(
        e,
        t,
        "exclusiveOownerProperties",
        "exclusive-ownerProperties",
        4,
        16
      ),
      e.getHTMLSectionOnScroll(
        e,
        a,
        "trendingProperties",
        "trending-properties",
        4,
        16
      )),
      e.getHTMLSectionOnScroll(
        e,
        r,
        "premiumLocalities",
        "premium-localities-properties",
        3,
        16
      ),
      e.getHTMLSectionOnScroll(
        e,
        n,
        "topProjects",
        "top-luxury-projects",
        4,
        16
      );
    var i = cityCode,
      o = "Buy_1";
    category && "R" == category && (o = "Rent");
    var s =
      "getBlogSection?cityTag=" +
      i +
      "&localityTag=" +
      (null != readCookie("localityCookie")
        ? readCookie("localityCookie")
        : "") +
      "&cityName=" +
      cityName +
      "&searchType=" +
      o;
    if (
      (e.getHTMLSectionOnScroll(
        e,
        s,
        "realEstateGuide",
        "realEstateGuideId",
        4,
        16
      ),
      localityVideoSwipper(),
      $(this).scrollTop() > $("#property-services").offset().top - 700 &&
        customLazyLoad("property-services"),
      !isContactJsLoad)
    )
      try {
        var l = $("#domcache_constant").attr("data-jsrooturl");
        l.includes("magicservicestatic") &&
          (l = l.replace("magicservicestatic", "propertydetailstatic")),
          loadJS(l + "contact-standalone.js"),
          (isContactJsLoad = !0);
      } catch (e) {
        console.log(e);
      }
  });
};
function getPropertyCountGroup(e) {
  "" == e && (e = geocityCode);
  var t = $("#domcache_constant").attr("data-fullcontextpath"),
    a = $("#domcache_constant").attr("data-domainurl"),
    r = "?cityCode=" + e;
  $.ajax({
    type: "GET",
    async: !0,
    dataType: "json",
    url: t + "getPropertyCountGroup" + r,
    beforeSend: function () {},
    success: function (e) {
      if (null != e) {
        var t = e.propCount,
          r = e.seoUrl;
        for (var n in t)
          t[n] > 0 &&
            ($("#" + n).html(t[n]),
            $("#" + n)
              .parents(".mb-home__collection__card card-shadow")
              .show());
        for (var i in r) r[i] && $("#" + i).prop("href", a + r[i]);
      }
    },
    error: function (e, t) {
      console.log("Error in ajax call of getPropertyCountForCollection  Data");
    },
    complete: function () {},
  });
}
function loadRecentSearch() {
  JSON.parse(localStorage.getItem("userSessInfo"));
  (rsDataMap = JSON.parse(localStorage.getItem("rs-data"))),
    ("Rent" != category && "rent" != category) || (category = "R"),
    ("Buy" != category && "Sale" != category) || (category = "S"),
    (cityName = cityName.replace(/ /g, "-"));
  var e = getUserCookie("subPropertyTypeCookie"),
    t = getUserCookie("sessionCookieForContact"),
    a = getUserCookie("userEmail");
  if (
    (checkEmpty(e) && checkEmpty(rsDataMap) && (isRepeatUser = !0),
    null == t || ("Y" != t && "y" != t) || null == a || (isConvertedUser = !0),
    rsDataMap)
  ) {
    for (var r = 0; r < rsDataMap.length; r++) {
      var n = rsDataMap[r],
        i = n.searchParams.category;
      e = isRepeatUser;
      if ("B" == category || "S" == category) {
        if (!(e = "Buy" == i || "Sale" == i)) continue;
        searchData = n;
        break;
      }
      if ("R" == category) {
        if (!(e = "Rent" == i)) continue;
        searchData = n;
        break;
      }
    }
    isRepeatUser = e;
  }
  checkEmpty(suburbCode) && (cityName = cityName.split("-")[0]);
}
function clickToOpenUrl(e, t) {
  var a = e + "mbsearch/similarProperty/" + t;
  window.open(a, "_blank");
}
function openSnapShotUrl(e, t) {
  var a = e + t;
  window.open(a, "_blank");
}
function openTabUrl(e, t, a, r, n) {
  var i = $(e).attr("data-url");
  window.open(i, "_self");
}
function lastSearchCity() {
  if (searchData) {
    var e = searchData.searchParams,
      t = "";
    return (
      checkEmpty(e.city) &&
        (t = e.city).indexOf("&") >= 0 &&
        (t = t.replace("&", "and")),
      t
    );
  }
}
function lastSearchLocality() {
  if (searchData) {
    var e = searchData.searchParams,
      t = "";
    return checkEmpty(e.ltName) && (t = (t = e.ltName).split(",")[0]), t;
  }
}
function lastSearchBHK() {
  if (searchData) {
    var e = "";
    return checkEmpty(searchData.bhk) && (e = searchData.bhk), e;
  }
}
function lastSearchMinBudget() {
  if (searchData) {
    var e = "";
    return checkEmpty(searchData.budMin) && (e = searchData.budMin), e;
  }
}
function lastSearchMaxBudget() {
  if (searchData) {
    var e = "";
    return checkEmpty(searchData.budMax) && (e = searchData.budMax), e;
  }
}
function lastSearchPropType() {
  if (searchData) {
    var e = "";
    return checkEmpty(searchData.proptype) && (e = searchData.proptype), e;
  }
}
function lastSearchPropCat() {
  if (searchData) {
    var e = "";
    return checkEmpty(searchData.propCat) && (e = searchData.propCat), e;
  }
}
function getCityCnd() {
  return readCookie("cityCode");
}
function checkHomePageAdd() {
  null == readCookie("jacketAdCookie") &&
    createCookieFooterNew("jacketAdCookie", !0, 1);
}
function searchCollection() {
  var e,
    t,
    a = readCookie("mbRecommendationCookies"),
    r = "";
  null != a &&
    void 0 !== a &&
    (r = createStringIntoMapVal(a, "%7C", "%3D").bedrooms);
  if (searchData) {
    searchData.searchParams;
    var n = searchData.url;
    checkEmpty(n) && n.indexOf("?") >= 0
      ? ((n = n.split("?")[1]).indexOf("category") >= 0 &&
          (n = n.replace("category", "lastSearchCategory")),
        n.indexOf("-area-") >= 0 &&
          (n =
            (n = n.replace("cityName", "suburbName")) +
            "&cityName=" +
            lastSearchCity()))
      : (n =
          (n =
            (n =
              "proptype=Multistorey-Apartment,Builder-Floor-Apartment,Penthouse,Studio-Apartment,Residential-House,Villa") +
            "&Locality=" +
            lastSearchLocality()) +
          "&cityName=" +
          lastSearchCity());
  }
  (e = isConvertedUser ? "Y" : "N"), (t = isConvertedLuxUser ? "Y" : "N");
  var i = getUserCookie("contactedProperties");
  if (null != i && "" !== i) {
    i.includes("%7C") && (i = i.replaceAll("%7C", "|")),
      i.includes("%7c") && (i = i.replaceAll("%7c", "|"));
    var o = i.split("|");
    i = o[o.length - 1];
  }
  return (
    null != r &&
      "" !== r &&
      (r.includes("%2C") && (r = r.replaceAll("%2C", ",")),
      r.includes("%2c") && (r = r.replaceAll("%2c", ",")),
      (n = n + "&bedroomsCode=" + r)),
    "searchCollection.html?" +
      n +
      "&category=" +
      category +
      "&isConvertedUser=" +
      e +
      "&pidPropContacted=" +
      i +
      "&isLuxury=" +
      isLuxVal +
      "&isConvertedLuxUser=" +
      t
  );
}
function searchParamDataQuery() {
  var e,
    t = "";
  if (searchData) {
    searchData.searchParams;
    checkEmpty((t = searchData.url)) && t.indexOf("?") >= 0
      ? ((t = t.split("?")[1]).indexOf("category") >= 0 &&
          (t = t.replace("category", "lastSearchCategory")),
        t.indexOf("-area-") >= 0 &&
          (t =
            (t = t.replace("cityName", "suburbName")) +
            "&cityName=" +
            lastSearchCity()))
      : (t =
          (t =
            (t =
              "proptype=Multistorey-Apartment,Builder-Floor-Apartment,Penthouse,Studio-Apartment,Residential-House,Villa") +
            "&Locality=" +
            lastSearchLocality()) +
          "&cityName=" +
          lastSearchCity());
  } else {
    var a = cityName;
    a.indexOf("&") >= 0 && (a = a.replace("&", "and")), (t = "cityName=" + a);
  }
  e = isConvertedUser ? "Y" : "N";
  var r = "B" == category || "b" == category ? "S" : category,
    n = getUserCookie("contactedProperties");
  if (null != n && "" !== n) {
    n.includes("%7C") && (n = n.replaceAll("%7C", "|")),
      n.includes("%7c") && (n = n.replaceAll("%7c", "|"));
    var i = n.split("|");
    n = i[i.length - 1];
  }
  return (
    t + "&category=" + r + "&isConvertedUser=" + e + "&pidPropContacted=" + n
  );
}
function seeAllPropertyUrl() {
  (null != searchData && "undefined" != searchData && "" != searchData) ||
    loadRecentSearch();
  var e = "";
  if (searchData) {
    searchData.searchParams;
    checkEmpty((e = searchData.url)) && e.indexOf("?") >= 0
      ? ((e = e.split("?")[1]).indexOf("category") >= 0 &&
          (e = e.replace("category", "lastSearchCategory")),
        e.indexOf("-area-") >= 0 &&
          (e =
            (e = e.replace("cityName", "suburbName")) +
            "&cityName=" +
            lastSearchCity()))
      : (e =
          (e =
            (e =
              "proptype=Multistorey-Apartment,Builder-Floor-Apartment,Penthouse,Studio-Apartment,Residential-House,Villa") +
            "&Locality=" +
            lastSearchLocality()) +
          "&cityName=" +
          lastSearchCity());
  } else
    e =
      (e =
        "proptype=Multistorey-Apartment,Builder-Floor-Apartment,Penthouse,Studio-Apartment,Residential-House,Villa") +
      "&cityName=" +
      cityName;
  return e + "&category=" + category;
}
function recentSearchCollectionCard() {
  var e = searchData.searchParams,
    t = parseInt(searchData.propCt),
    a = searchData.budMin,
    r = searchData.budMax;
  $("#minBudget").html(a),
    $("#maxBudget").html(r),
    t &&
      (t > 1e3
        ? (t = Math.trunc(t / 1e3) + "K+")
        : t > 10 && (t = t - (t % 10) + "+"),
      $("#propertyCount").html(t));
  var n = lastSearchLocality() ? lastSearchLocality() : e.city;
  $("#lastSearchCity").html(n);
  var i = searchData.url;
  $("#lastSearchURL").prop("href", i);
}
function getUserCookie(e) {
  var t = {};
  return (
    document.cookie.split(";").forEach(function (e) {
      var a = _slicedToArray(e.split("="), 2),
        r = a[0],
        n = a[1];
      t[r.trim()] = n;
    }),
    t[e]
  );
}
function urlLinkChangeNewPostProp(e, t, a) {
  var r = readCookie("userNTrackId"),
    n = new Date().getTime();
  "" != r && (e = e + "?ramId=" + r + "&src=Web_PDP&tStmp=" + n),
    urlLinkChangeNew(e, t, a);
}
function trackThisData() {}
function openNextTabPage(e) {
  (e =
    "userLogin" == e
      ? $("#domcache_constant").attr("data-domainurl") + "propertyDetail/login"
      : domcache.apicontexturl + e),
    window.open(e, "_blank").focus();
}
function getHomeSearchForm(e) {
  var t = "RENT";
  "" != e && null != e && (t = e);
  var a =
    "mbutility/homeSearchForm.html?cityCode=" +
    cityCode +
    "&pagename=" +
    pagename +
    "&readCookie=Y&tab=" +
    t;
  $.ajax({
    type: "get",
    url: a,
    success: function (e) {
      $("#searchFormHolderSection").empty(),
        $("#searchFormHolderSection").append(e);
    },
    complete: function () {
      $(".mb-search__tab__item").removeClass("active"),
        $("#tabRENT").addClass("active overclass");
    },
  });
}
function hideNpsWidget() {
  showNpsWidgetPreContact = !1;
}
function setNpsData() {
  var e =
      null != readCookie("contactNameCookie")
        ? readCookie("contactNameCookie")
        : "Hey!",
    t =
      null != readCookie("contactEmailCookie")
        ? readCookie("contactEmailCookie")
        : "a",
    a =
      null != readCookie("contactMobileCookie")
        ? readCookie("contactMobileCookie")
        : "9",
    r =
      null != readCookie("contactIsdCookie")
        ? readCookie("contactIsdCookie")
        : "9",
    n = readCookie("userNTrackId"),
    i = "" != a && "9" != a ? a : "" != t && "a" != t ? t : n;
  loadJS(npsUrlJS + "nps.js?" + version),
    setTimeout(function () {
      (mbNps.htmlLocation = "mbNps"),
        (mbNps.comm_n = e),
        (mbNps.comm_e = t),
        (mbNps.comm_m = a),
        (mbNps.comm_mc = r),
        (mbNps.comm_ramid = n),
        (mbNps.provider = npsUrl),
        (mbNps.source = i == n ? "35729" : "35728"),
        mbNps.init();
    }, 12e4);
}
function openCollection(e) {
  var t = $("#domcache_constant").attr("data-fullcontextpath"),
    a =
      "search-collection-on-last-search?" + searchParamDataQuery() + "&id=" + e;
  $.ajax({
    type: "GET",
    async: !0,
    dataType: "json",
    url: t + a,
    beforeSend: function () {},
    success: function (e) {
      if (null != e) {
        var t = e.finalUrl;
        window.open(t, "_blank");
      }
    },
    error: function (e, t) {
      console.log("Error in ajax call of search-collection-on-last-search");
    },
    complete: function () {},
  });
}
function checkEmpty(e) {
  return null != e && null != e && 0 != e.length;
}
function newProjectGalleryLazy(e) {
  var t = 0;
  t < e &&
    $("#new-project-gallery")
      .find(".swiper-lazy")
      .each(function () {
        if (!$(this).hasClass("swiper-lazy-loaded")) {
          var e = $(this).attr("data-src");
          $(this)
            .attr("src", e)
            .addClass("swiper-lazy-loaded")
            .removeAttr("data-src"),
            $(this).parent().find(".swiper-lazy-preloader").remove(),
            t++;
        }
      });
}
function fireCollectionGTM(e, t, a) {
  void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []),
    MB_GTM_dataLayer.push({
      event: "event_tracking",
      eventName: "hp_Collection",
      description: "Collection Clicked",
      nonInteraction: !1,
      eventCategory: "Collections",
      eventAction: t,
      eventLabel: a,
      eventValue: 0,
    });
}
function firePropertyServiceGTM(e, t, a, r) {
  e.preventDefault(),
    void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []),
    MB_GTM_dataLayer.push({
      event: "event_tracking",
      eventName: "hp_prop_serv",
      description: "Collection Clicked",
      nonInteraction: !1,
      eventCategory: "Property Service",
      eventAction: a,
      eventLabel: r,
      eventValue: 0,
    }),
    window.open(t, "_blank");
}
function firePropertyServiceGTMEMIBond(e, t, a, r, n, i, o, s) {
  e.preventDefault(), eMIBondGA(a, r, n, i, o, s), window.open(t, "_blank");
}
function eMIBondGA(e, t, a, r, n, i) {
  void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []);
  var o = {
    event: "event_tracking",
    eventName: "escrow_eqaro_events",
    nonInteraction: i,
    eventCategory: "property_service",
    eventAction: e,
    eventLabel: t,
    eventValue: 0,
    cd123: n,
    cd169: a,
    cd39: r,
    cd66: cityCode,
  };
  MB_GTM_dataLayer.push(o);
}
function firePropertyServiceGTMEMIBondPL(e, t, a, r, n, i, o, s) {
  e.preventDefault(), eMIBondGAPL(a, r, n, i, o, s), window.open(t, "_blank");
}
function eMIBondGAPL(e, t, a, r, n, i) {
  void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []);
  var o = {
    event: "event_tracking",
    eventName: "personal_loan_events",
    nonInteraction: i,
    eventCategory: "property_service",
    eventAction: e,
    eventLabel: t,
    eventValue: 0,
    cd123: n,
    cd169: a,
    cd39: r,
    cd66: cityCode,
  };
  MB_GTM_dataLayer.push(o);
}
function fireGA(e) {
  var t = "_",
    a = JSON.parse(localStorage.getItem("userSessInfo"));
  null != a && (t = a.sessCnt),
    ga(
      "send",
      "event",
      "MB Prime Entry Point Clicked",
      "Retargeting Screen" + e + t + "_HP"
    );
}
function fireBrowseTop8ProjectGTM(e, t, a, r) {
  e.preventDefault(),
    void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []),
    MB_GTM_dataLayer.push({
      event: "event_tracking",
      eventName: "hp_browse_projects",
      description: "Project Clicked",
      nonInteraction: !1,
      eventCategory: "Browse Projects-top 8",
      eventAction: t,
      eventLabel: a,
      eventValue: 0,
    }),
    window.open(r, "_blank");
}
function firePropertySnapShotGTM(e, t, a) {
  void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []),
    MB_GTM_dataLayer.push({
      event: "event_tracking",
      eventName: "hp_property_snapshot",
      description: "Property Snapshot",
      nonInteraction: !1,
      eventCategory: "Property Snapshot",
      eventAction: t,
      eventLabel: a,
      eventValue: 0,
    });
}
function fireToolsAdviceGTM(e, t, a, r) {
  e.preventDefault(),
    void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []),
    MB_GTM_dataLayer.push({
      event: "event_tracking",
      eventName: "hp_tool_advice",
      nonInteraction: !1,
      eventCategory: "Tools and Advice",
      eventAction: a,
      eventLabel: r,
      eventValue: 0,
    }),
    window.open(t, "_blank");
}
function fireCommonGTM(e, t, a, r, n, i, o, s, l) {
  e.preventDefault(),
    void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []),
    MB_GTM_dataLayer.push({
      event: "event_tracking",
      eventName: t,
      description: a,
      nonInteraction: !1,
      eventCategory: r,
      eventAction: n,
      eventLabel: i,
      eventValue: o,
    }),
    void 0 !== s &&
      null != s &&
      "" !== s &&
      window.open(s, void 0 !== l && null != l && "" !== l ? l : "_self");
}
function fireTopLocalitySeeAllGTM(e, t, a, r, n) {
  e.preventDefault(),
    void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []),
    MB_GTM_dataLayer.push({
      event: "event_tracking",
      eventName: "hp_localities",
      description: t,
      nonInteraction: !1,
      eventCategory: "Top Localities",
      eventAction: a,
      eventLabel: r,
      eventValue: 0,
      cd14: a,
      cd7: n,
    });
}
function fireProjectGalleryGTM(e, t, a, r, n, i, o, s, l, c, d, u, p, h, m, f) {
  e.preventDefault(),
    void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []),
    MB_GTM_dataLayer.push({
      event: "event_tracking",
      eventName: "",
      nonInteraction: !1,
      eventCategory: "New Project Gallery",
      eventAction: t,
      eventLabel: a,
      eventValue: 0,
      cd42: n,
      cd21: i,
      cd71: o,
      cd57: s,
      cd58: l,
      cd59: u,
      cd60: c,
      cd61: d,
      cd72: p,
      cd73: h,
      cd14: m,
      cd7: f,
    }),
    window.open(r, "_blank");
}
function fireFeaturedProjectGTM(
  e,
  t,
  a,
  r,
  n,
  i,
  o,
  s,
  l,
  c,
  d,
  u,
  p,
  h,
  m,
  f
) {
  e.preventDefault(),
    void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []),
    MB_GTM_dataLayer.push({
      event: "event_tracking",
      eventName: "hp_featured_project",
      nonInteraction: !1,
      eventCategory: "Featured Project",
      eventAction: t,
      eventLabel: a,
      eventValue: 0,
      cd42: n,
      cd21: i,
      cd71: o,
      cd57: s,
      cd58: l,
      cd59: u,
      cd60: c,
      cd61: d,
      cd72: p,
      cd73: h,
      cd14: m,
      cd7: f,
    }),
    window.open(r, "_blank");
}
function fireMBPrimeGTM(e, t) {
  e.preventDefault(),
    void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []),
    MB_GTM_dataLayer.push({
      event: "event_tracking",
      eventName: "hp_mbprime",
      nonInteraction: !1,
      eventCategory: "HP-MB Prime widget",
      eventAction: "CTA Clicked",
      eventLabel: eventlabel,
      eventValue: 0,
      cd96: "eventLabel",
    }),
    window.open(URL, "_blank");
}
function firePageLoadGTM() {
  var e = "non converted",
    t = "new user",
    a = "";
  1 == isConvertedUser && (e = "converted"),
    1 == isRepeatUser && (t = "repeat user");
  var r = "logged out",
    n = "unknown";
  checkEmpty(userValue) && ((r = "logged in"), (n = userValue)),
    (a = null != category && "R" == category ? "rent" : "buy"),
    void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []),
    MB_GTM_dataLayer.push({
      cd56: "hp-residential-" + a + "-" + e + "-" + t,
      cd65: cityName,
      cd66: cityCode,
      cd95: r,
      cd5: n,
    });
}
function fireMBPrimeJoinGTM(e, t) {
  e.preventDefault(),
    void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []),
    MB_GTM_dataLayer.push({
      event: "event_tracking",
      eventName: "hp_top_nav",
      nonInteraction: !1,
      description: "MB Prime Join Now clicked",
      eventCategory: "Top Navigation",
      eventAction: "MB Prime",
      eventLabel: t,
      eventValue: 0,
    });
}
function fireHomePayRentGTM(e, t) {
  e.preventDefault(),
    void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []),
    window.MB_GTM_dataLayer.push({
      event: "event_tracking",
      eventName: "hp_pay_rent",
      nonInteraction: !1,
      eventCategory: "HP-Pay Rent",
      eventAction: t,
      eventLabel: payRentUrl,
      eventValue: 0,
    }),
    window.open(payRentUrl, "_blank");
}
function fireDynamicPropGTM(e, t, a) {
  e.preventDefault(),
    void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []),
    window.MB_GTM_dataLayer.push({
      event: "event_tracking",
      eventName: "hp_dyn_prop",
      nonInteraction: !1,
      eventCategory: "HP-Dynamic Property",
      eventAction: t,
      eventLabel: a,
      eventValue: 0,
    });
}
function fireDynamicPropSeeAllGTM(e, t, a) {
  var r = "";
  null != a && "exclusiveOwner" == a
    ? (r = exclusiveOwnerSeeAllProperty)
    : null != a && "topLocality" == a
    ? (r = topLocalitySeeAllProperty)
    : null != a && "freshProp" == a
    ? (r = freshPropertySeeAllProperty)
    : null != a && "ownerProp" == a
    ? (r = ownerPropSeeAllProperty)
    : null != a && "trendingProp" == a && (r = trendingPropertySeeAll),
    e.preventDefault(),
    void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []),
    window.MB_GTM_dataLayer.push({
      event: "event_tracking",
      eventName: "hp_dyn_prop",
      nonInteraction: !1,
      eventCategory: "HP-Dyn Prop SeeAll",
      eventAction: t,
      eventLabel: r,
      eventValue: 0,
    });
}
function fireDynamicPropContactGTM(e, t, a) {
  e.preventDefault(),
    void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []),
    window.MB_GTM_dataLayer.push({
      event: "event_tracking",
      eventName: "hp_dyn_prop",
      nonInteraction: !1,
      eventCategory: "HP-Prop Contact",
      eventAction: t,
      eventLabel: a,
      eventValue: 0,
    });
}
function seeAppPropertiesOpenUrl(e) {
  if (null != e && "exclusiveOwner" == e)
    window.open(
      "Y" == isLuxVal
        ? exclusiveOwnerSeeAllLuxProperty
        : exclusiveOwnerSeeAllProperty,
      "_blank"
    );
  else if (null != e && "topLocality" == e)
    window.open(topLocalitySeeAllProperty, "_blank");
  else if (null != e && "freshProp" == e)
    window.open(freshPropertySeeAllProperty, "_blank");
  else if (null != e && "ownerProp" == e)
    window.open(ownerPropSeeAllProperty, "_blank");
  else if (null != e && "trendingProp" == e)
    window.open(trendingPropertySeeAll, "_blank");
  else if (null != e && "featureProject" == e)
    window.open(bannerSeeAllLink, "_blank");
  else if (null != e && "mbPrime" == e) window.open(mbPrimeUrl, "_blank");
  else if (e.includes("premiumProject_")) {
    var t = e.split("_")[1],
      a = bannerSeeAllLink + "&budgetMin=" + t;
    window.open(a, "_blank");
  } else
    null != e &&
      "seeAllPremiumLocality" == e &&
      window.open(topLocalitySeeAllProperty + "?isLuxury=Y", "_blank");
}
function openPremiumLocality(e, t) {
  var a =
    domainURL +
    e.replaceAll(" ", "-") +
    "-in-" +
    t.replace(" ", "-") +
    "-Overview";
  window.open(a, "_blank");
}
function filteredLocality(e, t) {
  var a =
    domainURL +
    "property-for-sale/residential-real-estate?bedroom=2,3&proptype=Multistorey-Apartment,Builder-Floor-Apartment,Penthouse,Studio-Apartment,Residential-House,Villa&Locality=" +
    e +
    "&cityName=" +
    t;
  window.open(a, "_blank");
}
function seeTopLocalityProperties(e, t, a) {
  var r;
  null != e && "rent" == e
    ? (r =
        topLocalityRentProperties +
        "&cityName=" +
        a.replace(/ /g, "-") +
        "&Locality=" +
        t)
    : null != e &&
      "sale" == e &&
      (r =
        topLocalitySaleProperties +
        "&cityName=" +
        a.replace(/ /g, "-") +
        "&Locality=" +
        t),
    null != e && "topSociety" == e && (r = trendingSocietyViewAllUrl + t),
    window.open(r, "_blank");
}
function redirectSearchPageByOid(e, t) {
  var a,
    r = e,
    n = $("#domcache_constant").attr("data-domainurl");
  (a =
    "property-for-rent/" +
    (a = "residential-real-estate?") +
    "proptype=Residential-House,Villa,Multistorey-Apartment,Builder-Floor-Apartment,Studio-Apartment,Penthouse"),
    t && (a = a + "&oid=" + t.replace(/ /g, "-")),
    (a = a + "&cityName=" + r),
    window.open(n + a, "_blank").focus();
}
function redirectToAgentDetailPage(e) {
  null !== e &&
    "" !== e &&
    void 0 !== e &&
    "undefined" !== e &&
    window.open(e, "_blank");
}
function clearCookie() {
  eraseCookie("userName"),
    eraseCookie("userEmail"),
    eraseCookie("userMobile"),
    eraseCookie("userTel"),
    eraseCookie("userType"),
    eraseCookie("userMobileCountry"),
    eraseCookie("userTelCountry"),
    eraseCookie("userTelStCode");
}
function customLazyLoad(e) {
  $("#" + e)
    .find(".custom-lazy")
    .each(function () {
      if ($(this).attr("src") != $(this).attr("data-src")) {
        var e = $(this).attr("data-src");
        $(this).attr("src", e);
      }
    });
}
function hidePostReqForm() {
  mbHomeWeb.modalBoxClose(event);
}
(triggerEventOnPrellaHomePageScroll = function (e) {
  $(window).on("scroll", function () {
    console.log("Mohit");
    "B" == category || "b" == category || category;
    if (isRepeatUser) {
      getUserCookie("userEmail") &&
        getUserCookie("userEmail").replace(/"/gi, ""),
        getUserCookie("userNTrackId") &&
          getUserCookie("userNTrackId").replace(/"/gi, "");
      var t = category || "";
      getUserCookie("cityCookie") && getUserCookie("cityCookie");
      null == t || "undefined" == t || ("S" !== t && "s" !== t) || (t = "B");
    }
    "B" == category || "b" == category || category;
    "Y" == countryLevel
      ? (isRepeatUser &&
          checkEmpty(lastSearchCity()) &&
          (geocity = lastSearchCity()),
        e.loadBanner(
          e,
          "projectGalleryBannerFetched",
          {
            maxToRender: 21,
            pagename: pagename,
            promotionDefRefNo: 51053,
            cityRefNo: "",
            geoCity: geoCity,
            geoGroupCity: geoGroupCity,
            transTypeSearch: "10002",
            geoGrouped: geoGrouped,
            geoTargeted: geoTargeted,
            onlySuburb: onlySubrub,
            refreshCount: refreshCounter,
          },
          "project-gallery",
          1,
          0
        ),
        e.loadBanner(
          e,
          "featureProjectBannerFetched",
          {
            maxToRender: 4,
            pagename: pagename,
            promotionDefRefNo: 51054,
            cityRefNo: "",
            geoCity: geoCity,
            geoGroupCity: geoGroupCity,
            transTypeSearch: "10002",
            geoGrouped: geoGrouped,
            geoTargeted: geoTargeted,
            onlySuburb: onlySubrub,
            refreshCount: refreshCounter,
          },
          "featured-projects",
          2,
          16
        ),
        e.loadBanner(
          e,
          "topProjectBannerFetched",
          {
            maxToRender: 21,
            pagename: pagename,
            promotionDefRefNo: 51055,
            cityRefNo: "",
            geoCity: geoCity,
            geoGroupCity: geoGroupCity,
            transTypeSearch: "10002",
            geoGrouped: geoGrouped,
            geoTargeted: geoTargeted,
            onlySuburb: onlySubrub,
            refreshCount: refreshCounter,
          },
          "top-projects",
          4,
          16
        ),
        e.loadBanner(
          e,
          "newProjectGalleryBannerFetched",
          {
            maxToRender: 120,
            pagename: pagename,
            promotionDefRefNo: 51057,
            cityRefNo: "",
            geoCity: geoCity,
            geoGroupCity: geoGroupCity,
            transTypeSearch: "10002",
            geoGrouped: geoGrouped,
            geoTargeted: geoTargeted,
            onlySuburb: onlySubrub,
            refreshCount: refreshCounter,
          },
          "new-project-gallery",
          3,
          16
        ),
        e.loadBanner(
          e,
          "mbPrimeBannerFetched",
          {
            maxToRender: 21,
            pagename: pagename,
            promotionDefRefNo: 51294,
            cityRefNo: "",
            geoCity: geoCity,
            geoGroupCity: geoGroupCity,
            transTypeSearch: "10002",
            geoGrouped: geoGrouped,
            geoTargeted: geoTargeted,
            onlySuburb: onlySubrub,
            refreshCount: refreshCounter,
          },
          "mb-prime",
          1,
          0
        ))
      : checkEmpty(suburbCode)
      ? (e.loadBanner(
          e,
          "projectGalleryBannerFetched",
          {
            maxToRender: 21,
            pagename: pagename,
            promotionDefRefNo: 51053,
            cityRefNo: cityCode + "-" + suburbCode,
            geoCity: geoCity,
            geoGroupCity: geoGroupCity,
            transTypeSearch: "10002",
            geoGrouped: geoGrouped,
            geoTargeted: geoTargeted,
            onlySuburb: onlySubrub,
            refreshCount: refreshCounter,
          },
          "project-gallery",
          1,
          0
        ),
        e.loadBanner(
          e,
          "featureProjectBannerFetched",
          {
            maxToRender: 4,
            pagename: pagename,
            promotionDefRefNo: 51054,
            cityRefNo: cityCode + "-" + suburbCode,
            geoCity: geoCity,
            geoGroupCity: geoGroupCity,
            transTypeSearch: "10002",
            geoGrouped: geoGrouped,
            geoTargeted: geoTargeted,
            onlySuburb: onlySubrub,
            refreshCount: refreshCounter,
          },
          "featured-projects",
          2,
          16
        ),
        e.loadBanner(
          e,
          "topProjectBannerFetched",
          {
            maxToRender: 21,
            pagename: pagename,
            promotionDefRefNo: 51055,
            cityRefNo: cityCode + "-" + suburbCode,
            geoCity: geoCity,
            geoGroupCity: geoGroupCity,
            transTypeSearch: "10002",
            geoGrouped: geoGrouped,
            geoTargeted: geoTargeted,
            onlySuburb: onlySubrub,
            refreshCount: refreshCounter,
          },
          "top-projects",
          4,
          16
        ),
        e.loadBanner(
          e,
          "newProjectGalleryBannerFetched",
          {
            maxToRender: 120,
            pagename: pagename,
            promotionDefRefNo: 51057,
            cityRefNo: cityCode + "-" + suburbCode,
            geoCity: geoCity,
            geoGroupCity: geoGroupCity,
            transTypeSearch: "10002",
            geoGrouped: geoGrouped,
            geoTargeted: geoTargeted,
            onlySuburb: onlySubrub,
            refreshCount: refreshCounter,
          },
          "new-project-gallery",
          3,
          16
        ),
        e.loadBanner(
          e,
          "mbPrimeBannerFetched",
          {
            maxToRender: 21,
            pagename: pagename,
            promotionDefRefNo: 51294,
            cityRefNo: cityCode + "-" + suburbCode,
            geoCity: geoCity,
            geoGroupCity: geoGroupCity,
            transTypeSearch: "10002",
            geoGrouped: geoGrouped,
            geoTargeted: geoTargeted,
            onlySuburb: onlySubrub,
            refreshCount: refreshCounter,
          },
          "mb-prime",
          1,
          0
        ))
      : (e.loadBanner(
          e,
          "grandProjectShowcaseBannerFetched",
          {
            maxToRender: 3,
            pagename: pagename,
            promotionDefRefNo: 51250,
            cityRefNo: cityCode,
            geoCity: geoCity,
            geoGroupCity: geoGroupCity,
            transTypeSearch: "10002",
            geoGrouped: geoGrouped,
            geoTargeted: geoTargeted,
            onlySuburb: onlySubrub,
            refreshCount: refreshCounter,
          },
          "project-showcase",
          1,
          0
        ),
        e.loadBanner(
          e,
          "projectGalleryBannerFetched",
          {
            maxToRender: 21,
            pagename: pagename,
            promotionDefRefNo: 51053,
            cityRefNo: cityCode,
            geoCity: geoCity,
            geoGroupCity: geoGroupCity,
            transTypeSearch: "10002",
            geoGrouped: geoGrouped,
            geoTargeted: geoTargeted,
            onlySuburb: onlySubrub,
            refreshCount: refreshCounter,
          },
          "project-gallery",
          1,
          0
        ),
        e.loadBanner(
          e,
          "featureProjectBannerFetched",
          {
            maxToRender: 4,
            pagename: pagename,
            promotionDefRefNo: 51054,
            cityRefNo: cityCode,
            geoCity: geoCity,
            geoGroupCity: geoGroupCity,
            transTypeSearch: "10002",
            geoGrouped: geoGrouped,
            geoTargeted: geoTargeted,
            onlySuburb: onlySubrub,
            refreshCount: refreshCounter,
          },
          "featured-projects",
          2,
          16
        ),
        e.loadBanner(
          e,
          "topProjectBannerFetched",
          {
            maxToRender: 21,
            pagename: pagename,
            promotionDefRefNo: 51055,
            cityRefNo: cityCode,
            geoCity: geoCity,
            geoGroupCity: geoGroupCity,
            transTypeSearch: "10002",
            geoGrouped: geoGrouped,
            geoTargeted: geoTargeted,
            onlySuburb: onlySubrub,
            refreshCount: refreshCounter,
          },
          "top-projects",
          4,
          16
        ),
        e.loadBanner(
          e,
          "newProjectGalleryBannerFetched",
          {
            maxToRender: 120,
            pagename: pagename,
            promotionDefRefNo: 51057,
            cityRefNo: cityCode,
            geoCity: geoCity,
            geoGroupCity: geoGroupCity,
            transTypeSearch: "10002",
            geoGrouped: geoGrouped,
            geoTargeted: geoTargeted,
            onlySuburb: onlySubrub,
            refreshCount: refreshCounter,
          },
          "new-project-gallery",
          3,
          16
        ),
        e.loadBanner(
          e,
          "mbPrimeBannerFetched",
          {
            maxToRender: 21,
            pagename: pagename,
            promotionDefRefNo: 51294,
            cityRefNo: cityCode,
            geoCity: geoCity,
            geoGroupCity: geoGroupCity,
            transTypeSearch: "10002",
            geoGrouped: geoGrouped,
            geoTargeted: geoTargeted,
            onlySuburb: onlySubrub,
            refreshCount: refreshCounter,
          },
          "mb-prime",
          1,
          0
        )),
      !isPrellaBannerExist && prellaBannerCount > 3
        ? $("#prella-nsr").show()
        : $("#prella-nsr").hide(),
      localityVideoSwipper(),
      e.getHTMLSectionOnScroll(
        e,
        "projectInvestmentCorridor?cityCode=" +
          cityCode +
          "&cityName=" +
          cityName,
        "investmentCorridorFetched",
        "project-top-investments-corridors",
        3,
        16
      );
    var a =
      "premiumProjectFromCity?" +
      searchDataQueryForSamePage() +
      "&isPrella=Y&isPrellaHomePage=Y";
    if (
      (e.getHTMLSectionOnScroll(
        e,
        a,
        "newlyLaunchedProjects",
        "newly-launched-projects",
        2,
        16
      ),
      (projectReviewVideosQuery = "projectReviewVideos?cityName=" + cityName),
      e.getHTMLSectionOnScroll(
        e,
        projectReviewVideosQuery,
        "projectreviews",
        "project-Review-Videos",
        4,
        16
      ),
      !isContactJsLoad)
    )
      try {
        var r = $("#domcache_constant").attr("data-jsrooturl");
        r.includes("magicservicestatic") &&
          (r = r.replace("magicservicestatic", "propertydetailstatic")),
          loadJS(r + "contact-standalone.js"),
          (isContactJsLoad = !0);
      } catch (e) {
        console.log(e);
      }
  });
}),
  (getStarInventory = function (e, t, a) {
    if (null == t || !e[t]) {
      null != t && (e[t] = !0);
      var r =
        $("#domcache_constant").attr("data-fullcontextpath") +
        "getStarInventory";
      e.ajaxToGetHTMLPageFor(
        r,
        function (t) {
          $("#" + a).append(t);
          "B" == category || "b" == category || category;
          "R" != category &&
            ("Y" == countryLevel
              ? (isRepeatUser &&
                  checkEmpty(lastSearchCity()) &&
                  (geocity = lastSearchCity()),
                e.loadBanner2(
                  e,
                  {
                    maxToRender: 21,
                    pagename: pagename,
                    promotionDefRefNo: 51250,
                    cityRefNo: "",
                    geoCity: geoCity,
                    geoGroupCity: geoGroupCity,
                    transTypeSearch: "10002",
                    geoGrouped: geoGrouped,
                    geoTargeted: geoTargeted,
                    onlySuburb: onlySubrub,
                  },
                  a
                ))
              : checkEmpty(suburbCode)
              ? e.loadBanner2(
                  e,
                  {
                    maxToRender: 21,
                    pagename: pagename,
                    promotionDefRefNo: 51250,
                    cityRefNo: cityCode + "-" + suburbCode,
                    geoCity: geoCity,
                    geoGroupCity: geoGroupCity,
                    transTypeSearch: "10002",
                    geoGrouped: geoGrouped,
                    geoTargeted: geoTargeted,
                    onlySuburb: onlySubrub,
                  },
                  a
                )
              : e.loadBanner2(
                  e,
                  {
                    maxToRender: 21,
                    pagename: pagename,
                    promotionDefRefNo: 51250,
                    cityRefNo: cityCode,
                    geoCity: geoCity,
                    geoGroupCity: geoGroupCity,
                    transTypeSearch: "10002",
                    geoGrouped: geoGrouped,
                    geoTargeted: geoTargeted,
                    onlySuburb: onlySubrub,
                  },
                  a
                ));
        },
        function (a, r, n) {
          null != t && (e[t] = !1);
        }
      );
    }
  }),
  (window.rtimeOut = function (e, t) {
    var a,
      r = Date.now,
      n = window.requestAnimationFrame,
      i = r();
    return (
      n(function o() {
        r() - i < t ? a || n(o) : e();
      }),
      {
        clear: function () {
          a = 1;
        },
      }
    );
  }),
  $(".city-drop-link-group li").click(function () {
    var e;
    (e = this.parentNode.getElementsById("popularCityId").innerText), alert(e);
  }),
  swipperInit("swiper_premium-projects", 2, 16);
var getActiveSlide,
  swiperV = void 0,
  swiperH = void 0;
function initShowcaseParentSwiper() {
  swiperH = new Swiper(".swiper-container-h", {
    loop: !1,
    speed: 300,
    simulateTouch: !1,
    on: {
      init: function () {
        createShowcaseSwiper(
          (getActiveSlide = $(".swiper-container-h").find(
            ".swiper-slide-h.swiper-slide-active"
          ))
        ),
          $(".swiper-container-h").find(
            ".swiper-slide-h.swiper-slide-active .mb-home__proj-showcase__card--video"
          ).length > 0 &&
            $(".swiper-container-h")
              .find(".swiper-slide-h.swiper-slide-active .swiper-pagination-v")
              .addClass("swiper-pagination-v--video");
      },
      slideChange: function () {
        swiperV.destroy(!0, !0),
          (swiperV = void 0),
          (getActiveSlide = $(".swiper-container-h").find(
            ".swiper-slide-h.swiper-slide-active"
          )),
          setTimeout(function () {
            createShowcaseSwiper(getActiveSlide),
              $(".swiper-container-h").find(
                ".swiper-slide-h.swiper-slide-active .mb-home__proj-showcase__card--video"
              ).length > 0 &&
                $(".swiper-container-h")
                  .find(
                    ".swiper-slide-h.swiper-slide-active .swiper-pagination-v"
                  )
                  .addClass("swiper-pagination-v--video");
          }, 500);
      },
    },
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next-h",
      prevEl: ".swiper-button-prev-h",
    },
  });
}
function createShowcaseSwiper(e) {
  swiperV = new Swiper(
    ".swiper-slide-h.swiper-slide-active .swiper-container-v",
    {
      spaceBetween: 50,
      nested: !0,
      direction: "horizontal",
      speed: 300,
      pagination: {
        el: ".swiper-slide-h.swiper-slide-active .swiper-pagination-v",
        clickable: !0,
      },
      autoplay: { delay: 3e3, disableOnInteraction: !1 },
      on: {
        init: function () {
          projectShowcaseLazy(3);
        },
        slideChange: function () {},
      },
    }
  );
}
function swiperAutoPlayStop() {
  swiperV.autoplay.stop();
}
function swiperAutoPlayStart() {
  swiperV.autoplay.start();
}
function showVideo(e) {
  var t =
    '<div class="youtube-container"><iframe id="builderVideoIframe" allowfullscreen="" title="YouTube video player" src="' +
    e +
    '" width="100%" height="" frameborder="0"></iframe><i class="icon-close" onclick="closeVideo();"></i></div>';
  $("#video-popup").show().html(t),
    $("body").css("overflowY", "hidden"),
    swiperV.autoplay.stop();
}
function closeVideo() {
  $("#video-popup").hide().html(" "),
    $("body").css("overflowY", "auto"),
    swiperV.autoplay.start();
}
function projectShowcaseLazy(e) {
  var t = 0;
  t < e &&
    $("#promotional-banner .swiper-slide-h.swiper-slide-active")
      .find(".swiper-lazy")
      .each(function () {
        if (!$(this).hasClass("swiper-lazy-loaded")) {
          var e = $(this).attr("data-src");
          $(this)
            .attr("src", e)
            .addClass("swiper-lazy-loaded")
            .removeAttr("data-src"),
            $(this).parent().find(".swiper-lazy-preloader").remove(),
            t++;
        }
      });
}
function loadLuxRecentSearch() {
  var e = JSON.parse(localStorage.getItem("rs-LuxData"));
  checkEmpty(getUserCookie("luxuryContactCookie")) &&
    checkEmpty(e) &&
    (e = searchData),
    (cityName = cityName.replace(/ /g, "-"));
  var t = getUserCookie("subPropertyTypeCookie"),
    a = getUserCookie("sessionCookieForContact"),
    r = getUserCookie("userEmail");
  checkEmpty(t) && checkEmpty(e) && (isRepeatLuxUser = !0),
    ("Y" != a && "y" != a && null == r) || (isConvertedLuxUser = !0),
    checkEmpty(suburbCode) && (cityName = cityName.split("-")[0]);
}
function luxSearchParamDataQuery() {
  var e,
    t = "",
    a = "",
    r = "",
    n = JSON.parse(localStorage.getItem("rs-LuxData"));
  if (
    (checkEmpty(getUserCookie("luxuryContactCookie")) &&
      checkEmpty(n) &&
      (n = searchData),
    n)
  ) {
    var i = n.searchParams;
    checkEmpty(i.city) && (r = i.city),
      checkEmpty(i.ltName) && (a = (a = i.ltName).split(",")[0]);
  }
  n
    ? checkEmpty((t = n.url)) && t.indexOf("?") >= 0
      ? ((t = t.split("?")[1]).indexOf("category") >= 0 &&
          (t = t.replace("category", "lastSearchCategory")),
        t.indexOf("-area-") >= 0 &&
          (t = (t = t.replace("cityName", "suburbName")) + "&cityName=" + r))
      : (t =
          (t =
            (t =
              "proptype=Multistorey-Apartment,Builder-Floor-Apartment,Penthouse,Studio-Apartment,Residential-House,Villa") +
            "&Locality=" +
            a) +
          "&cityName=" +
          r)
    : (t = "cityName=" + cityName),
    (e = isConvertedLuxUser ? "Y" : "N");
  var o = "B" == category || "b" == category ? "S" : category,
    s = getUserCookie("contactedProperties");
  if (null != s && "" !== s) {
    s.includes("%7C") && (s = s.replaceAll("%7C", "|")),
      s.includes("%7c") && (s = s.replaceAll("%7c", "|"));
    var l = s.split("|");
    s = l[l.length - 1];
  }
  return (
    t + "&category=" + o + "&isConvertedUser=" + e + "&pidPropContacted=" + s
  );
}
function firehandPickedNewLaunchedGTM(e, t, a, r, n, i) {
  console.log(
    "Parameters received as : event : " +
      e +
      " - eventCategory : " +
      t +
      " - eventAction : " +
      a +
      " - eventLabel : " +
      r +
      " - project Name : " +
      n +
      " - city Name " +
      i
  ),
    void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []),
    window.MB_GTM_dataLayer.push({
      event: e,
      eventName: "hp_dyn_prop",
      nonInteraction: "mouse over" == a ? "True" : "False",
      eventCategory: t,
      eventAction: a,
      eventLabel: r,
      eventValue: 0,
      cd57: n || null,
      cd65: i || null,
      cd56: "Prella HP",
    });
}
function localityVideoSwipper() {
  new Swiper("#localityvideoId .swiper-container", {
    slidesPerView: 2,
    spaceBetween: 16,
    allowTouchMove: !1,
    pagination: { el: "#localityvideoId .swiper-pagination", clickable: !0 },
    navigation: {
      nextEl: "#localityvideoId .swiper-button-next",
      prevEl: "#localityvideoId .swiper-button-prev",
    },
  });
}
function openVideoPopup(e) {
  document.querySelector("HTML").classList.add("no-scroll"),
    document.querySelector("#loc-video__container").classList.add("active"),
    (document.querySelector("#loc-video-frame").src = e);
}
function closeImageVideoPopup(e) {
  document.querySelector("HTML").classList.remove("no-scroll"),
    document.querySelector("#" + e).classList.remove("active");
}
(whatsappNaviagtion = function (e, t) {
  e.preventDefault(),
    void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []),
    MB_GTM_dataLayer.push({
      event: "event_tracking",
      eventName: "hp_Search",
      description: "NRI WhatsApp Banner clicked",
      nonInteraction: !1,
      eventCategory: "NRI WhatsApp Banner",
      eventAction: "clicked",
      eventLabel: "Home Page|Web",
    }),
    window.open(whatsappUrlHomePage(t), "_blank");
}),
  $("#launcher")
    .contents()
    .find("Button")
    .click(function () {
      void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []),
        MB_GTM_dataLayer.push({
          event: "event_tracking",
          eventName: "hp_Search",
          description: "NRI Chat clicked",
          nonInteraction: !1,
          eventCategory: "NRI Chat",
          eventAction: "clicked",
          eventLabel: "Home Page|Web",
        });
    });
var recommendedBlogSwiper = function () {
  new Swiper(
    "#recommendedBlog .swiper-container",
    _defineProperty(
      {
        direction: "horizontal",
        loop: !1,
        lazy: !0,
        navigation: !0,
        slidesPerView: 6.5,
        slidesPerGroup: 1,
        spaceBetween: 56,
        simulateTouch: !1,
      },
      "navigation",
      {
        nextEl: "#recommendedBlog .swiper-button-next",
        prevEl: "#recommendedBlog .swiper-button-prev",
      }
    )
  );
};
recommendedBlogSwiper();
var recommendedareaCalcSwiper = function () {
  new Swiper(
    "#recommendedareaCalc .swiper-container",
    _defineProperty(
      {
        direction: "horizontal",
        loop: !1,
        lazy: !0,
        navigation: !0,
        slidesPerView: 4.5,
        slidesPerGroup: 1,
        spaceBetween: 12,
        simulateTouch: !1,
      },
      "navigation",
      {
        nextEl: "#recommendedareaCalc .swiper-button-next",
        prevEl: "#recommendedareaCalc .swiper-button-prev",
      }
    )
  );
};
function createStringIntoMapVal(e, t, a) {
  var r = new Object();
  if (e) {
    if (e.indexOf(t)) {
      for (var n = e.split(t), i = n.length, o = 0; o < i; o++) {
        (s = n[o].split(a)) && (r[s[0]] = s[1]);
      }
      return r;
    }
    var s;
    return (s = n[o].split(":")) && (r[s[0]] = s[1]), r;
  }
  return null;
}
function hideActvBanner(e) {
  createCookie(
    "reactivatePropertyBanner",
    "N",
    24 * reactivatePropertyBannerDuration * 60
  ),
    reactivationGA("CTA_CLICKED", numberOfProperties, "Not Now"),
    $(e).hide();
}
function activateClick() {
  reactivationGA(
    "CTA_CLICKED",
    numberOfProperties,
    "1" == numberOfProperties ? "Yes, Activate Now" : "View to Activate"
  );
}
function reactivationGA(e, t, a) {
  MB_GTM_dataLayer.push({
    event: "event_tracking",
    eventName: "revamp_srp_owner_reactivation_banner",
    eventCategory: "PassiveOwners",
    eventAction:
      "LOAD" == e
        ? "1" == t
          ? "BottomSticky_WidgetLoaded_SingleProperty"
          : "BottomSticky_WidgetLoaded_MultipleProperty"
        : "1" == t
        ? "BottomSticky_CTAClicked_SingleProperty"
        : "BottomSticky_CTAClicked_MultipleProperty",
    eventLabel: a,
    eventValue: "",
  });
}
function getDealingInPlusValue(e, t) {
  var a = e.split(",");
  $("#dealingInPlus" + t).html("+" + a.length);
}
recommendedareaCalcSwiper(),
  $("#addiPropTab-1, #addiPropTab-2").length > 0 &&
    (swipperInit("addiPropTab-1", 4, 40), swipperInit("addiPropTab-2", 4, 40)),
  (setSemAttributesCookie = function () {
    var e = "",
      t = new URLSearchParams(window.location.search),
      a = Object.fromEntries(t.entries()),
      r = void 0 !== a.utm_source ? a.utm_source : "",
      n = void 0 !== a.utm_medium ? a.utm_medium : "",
      i = void 0 !== a.utm_campaign ? a.utm_campaign : "",
      o = void 0 !== a.utm_content ? a.utm_content : "",
      s = void 0 !== a.utm_term ? a.utm_term : "",
      l = void 0 !== a.mbtracker ? a.mbtracker : "",
      c =
        void 0 !== document.referrer &&
        -1 == document.referrer.indexOf(document.domain)
          ? document.referrer
          : "";
    r.length > 30 && (r = r.substring(0, 30)),
      n.length > 30 && (n = n.substring(0, 30)),
      i.length > 30 && i.substring(0, 30),
      o.length > 30 && (i = o.substring(0, 30)),
      s.length > 30 && (s = s.substring(0, 30)),
      l.length > 30 && (l = l.substring(0, 30)),
      c.length > 30 && (c = c.substring(0, 30));
    var d = "Direct";
    checkEmpty(r) ||
    checkEmpty(n) ||
    checkEmpty(i) ||
    checkEmpty(o) ||
    checkEmpty(s) ||
    checkEmpty(l) ||
    !(
      (checkEmpty(c) && c.indexOf("https://www.google.") >= 0) ||
      window.location.href.indexOf("pppfr") > 0 ||
      window.location.href.indexOf("pppfs") > 0
    )
      ? checkEmpty(r) ||
        checkEmpty(n) ||
        checkEmpty(i) ||
        checkEmpty(o) ||
        checkEmpty(s) ||
        checkEmpty(l) ||
        checkEmpty(c)
        ? ((e = r + "|" + n + "|" + i + "|" + o + "|" + s + "|" + l + "|" + c),
          !0,
          (d = "External"))
        : (d = "Direct")
      : (d = "Seo");
    var u = readCookie("semAttributesCookie");
    void 0 !== u && null != u && checkEmpty(u)
      ? (u = decodeURIComponent(u))
      : (void 0 !== u && null != u && checkEmpty(u)) || (u = d + "#" + e),
      createCookie("semAttributesCookie", u, 30);
  });
var getPropertyReactivationUrl = function () {
  if ("1" == numberOfProperties) {
    var e =
      domainURL +
      "odashboard/reactivateProperty?encUbirfnum=" +
      encryptedUserRef +
      "&encPmtrfnum=" +
      encryptedPropertyId +
      "&rid=&mid=&utm_source=passiveowners&utm_medium=banner_bottomsticky&utm_campaign=passiveownerreactivation&source=36994";
    window.open(e, "_blank");
  } else {
    var t =
      domainURL +
      "odashboard/passiveOwnerLandingPage?propid=" +
      encryptedPropertyId +
      "&rid=&mid=&utm_source=passiveowners&utm_medium=banner_bottomsticky&utm_campaign=passiveownerreactivation&source=36994&showSecondPage=true";
    window.open(t, "_blank");
  }
  activateClick();
};
function searchDataQueryForSamePage() {
  var e,
    t = "",
    a = cityName;
  if ((a.indexOf("&") >= 0 && (a = a.replace("&", "and")), searchData)) {
    searchData.searchParams;
    checkEmpty((t = searchData.url)) && t.indexOf("?") >= 0
      ? ((t = t.split("?")[1]).indexOf("category") >= 0 &&
          (t = t.replace("category", "lastSearchCategory")),
        t.indexOf("cityName") >= 0 &&
          (t = t.replace("cityName", "lastSearchCityName")),
        (t = t + "&cityName=" + a))
      : (t =
          (t =
            "proptype=Multistorey-Apartment,Builder-Floor-Apartment,Penthouse,Studio-Apartment,Residential-House,Villa") +
          "&cityName=" +
          a);
  } else t = "cityName=" + a;
  e = isConvertedUser ? "Y" : "N";
  var r = "B" == category || "b" == category ? "S" : category,
    n = getUserCookie("contactedProperties");
  if (null != n && "" !== n) {
    n.includes("%7C") && (n = n.replaceAll("%7C", "|")),
      n.includes("%7c") && (n = n.replaceAll("%7c", "|"));
    var i = n.split("|");
    n = i[i.length - 1];
  }
  return (
    t + "&category=" + r + "&isConvertedUser=" + e + "&pidPropContacted=" + n
  );
}
function showVideoPopup(e, t) {
  document.querySelector("HTML").classList.add("no-scroll"),
    document.querySelector("#" + t).classList.add("active"),
    $("#" + t)
      .find("iframe")
      .attr("src", e);
}
function closeVideoPopup(e) {
  document.querySelector("HTML").classList.remove("no-scroll"),
    document.querySelector("#" + e).classList.remove("active"),
    $("#" + e)
      .find("iframe")
      .attr("src", "");
}
function initSwiperTopRecommendedAgent() {
  new Swiper("#swiper_TopRecommendedAgent .swiper-container", {
    slidesPerView: 4,
    lazy: !0,
    simulateTouch: !1,
    loop: !1,
    spaceBetween: 16,
    navigation: {
      nextEl: "#swiper_TopRecommendedAgent .swiper-button-next",
      prevEl: "#swiper_TopRecommendedAgent .swiper-button-prev",
    },
  });
}
$(document).ready(function () {
  initSwiperTopRecommendedAgent();
});
var checkMouseLeave = !0,
  checkMouseBlur = !1,
  mbHeaderWeb = {
    version: "1.0.0",
    init: function () {
      this.addEvents(),
        this.headerSwiper.viewMoreHide("rentDrop"),
        this.headerSwiper.viewMoreHide("buyDrop"),
        this.headerSwiper.viewMoreHide("homeloanDrop");
    },
    addEvents: function () {
      var e = document.querySelectorAll(".js-menu-container");
      Array.prototype.forEach.call(e, function (e) {
        e.addEventListener("mouseenter", function (e) {
          e.stopPropagation();
          var t = document.querySelector(".js-menu-container.active");
          t && e.target != t && mbHeaderWeb.openCloseAction(t, !1),
            mbHeaderWeb.openCloseAction(e.target, !0);
        });
      }),
        Array.prototype.forEach.call(e, function (e) {
          e.addEventListener("mouseleave", function (e) {
            e.stopPropagation(), mbHeaderWeb.openCloseAction(e.target, !1);
          });
        });
    },
    openCloseAction: function (e, t) {
      var a = e.querySelector(".js-menu-link"),
        r = e.querySelector(".js-menu-drop");
      !0 === t
        ? (a.classList.add("active"),
          e.classList.add("active"),
          r.classList.add("active"),
          this.headerSwiper.call(r))
        : (a.classList.remove("active"),
          e.classList.remove("active"),
          r.classList.remove("active"));
    },
    headerSwiper: {
      init: function (e, t, a) {
        return new Swiper("#" + e + " .swiper-container", {
          direction: "horizontal",
          loop: !1,
          lazy: !0,
          simulateTouch: !0,
          slidesPerView: t,
          spaceBetween: a,
          navigation: {
            nextEl: "#" + e + " .swiper-button-next",
            prevEl: "#" + e + " .swiper-button-prev",
          },
          on: {
            slideChange: function (t) {
              console.log(t.realIndex);
              var a = t.realIndex,
                r = $(
                  "#" + e + " .swiper-container .swiper-slide:eq(" + a + ")"
                ).hasClass("show-view-more");
              console.log("isViewMore :" + r),
                1 != r || $("#" + e).hasClass("shownAll")
                  ? $("#" + e + "-view-more").removeClass("active")
                  : $("#" + e + "-view-more").addClass("active");
            },
          },
        });
      },
      call: function (e) {
        if (!e.classList.contains("swiper-created")) {
          var t = e.getAttribute("id");
          console.log("elementId:" + t),
            mbHeaderWeb.headerSwiper.init(t, 1, 1),
            e.classList.add("swiper-created");
        }
      },
      viewMoreHide: function (e) {
        var t = $("#" + e).find(".swiper-container .swiper-slide .drop-links");
        t.each(function () {
          var e = $(this).find("li");
          e.length > 7 &&
            (!0,
            e.each(function (e) {
              e >= 6 && $(this).addClass("hide");
            }),
            $(this).closest(".swiper-slide").addClass("show-view-more"));
        });
      },
      viewMoreShow: function (e) {
        var t = $("#" + e).find(
          ".swiper-container .swiper-slide .drop-links li.hide"
        );
        $("#" + e)
          .find("#" + e + "-view-more")
          .removeClass("active"),
          $("#" + e).addClass("shownAll"),
          t.removeClass("hide");
      },
    },
    scrollStop: function (e) {
      var t;
      e &&
        "function" == typeof e &&
        window.addEventListener(
          "scroll",
          function (a) {
            window.scrollY > 100 &&
              document
                .querySelector(".mb-header__sub")
                .classList.remove("active"),
              window.clearTimeout(t),
              (t = setTimeout(function () {
                e();
              }, 66));
          },
          !1
        );
    },
    scrollCallback: function () {
      document.querySelector(".mb-header__sub").classList.add("active"),
        console.log("Scrolling has stopped.");
    },
    decFooterMore: function () {
      (document.querySelector(".mb-footer__disclaimer__more").style.display =
        "none"),
        (document.querySelector("#dec-ftr-more-content").style.display =
          "inline");
    },
  };
function openBuyerDashBoard(e, t) {
  var a,
    r = window.location,
    n =
      (String(r),
      $("#domcache_constant").attr("data-domainurl") +
        "mbsearch/getBuyerDashBoardUrl.html");
  $.ajax({
    dataType: "json",
    type: "get",
    url: n,
    async: !0,
    success: function (r) {
      if (null != r && null != r.url) a = r.url;
      else {
        var n = readCookie("userNTrackId");
        a =
          $("#domcache_constant").attr("data-domainurl") +
          "/bricks/buyerDashboard.html?id=" +
          n;
        var i = readCookie("userEmail");
        null != i && (a = a + "&emailId=" + i);
      }
      t.includes("tab") ? (a += e) : (a = a + "&actionType=" + e),
        window.open(a, "_blank").focus();
    },
  });
}
function fireLoginGTM(e, t, a, r) {
  e.preventDefault(),
    void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []),
    MB_GTM_dataLayer.push({
      event: "event_tracking",
      eventName: "hp_top_nav",
      nonInteraction: !1,
      description: a,
      eventCategory: "Top Navigation",
      eventAction: "Login",
      eventLabel: t,
      eventValue: 0,
    }),
    null != r && "" !== r && window.open(r, "_blank");
}
function fireCustomGTM(e, t, a, r) {
  ga("send", "event", a, r, e);
}
function firePostPropertyGTM(e, t) {
  e.preventDefault(),
    void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []),
    window.MB_GTM_dataLayer.push({
      event: "event_tracking",
      eventName: "hp_post_property",
      nonInteraction: !1,
      eventCategory: "HP-Post Property",
      eventAction: "CTA Clicked",
      eventLabel: "Post Property Free",
      eventValue: 0,
    }),
    window.open(t, "_blank");
}
function fireChangeCityGTM(e, t, a) {
  void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []),
    MB_GTM_dataLayer.push({
      event: "event_tracking",
      eventName: "hp_top_nav",
      description: "Change city",
      nonInteraction: !1,
      eventCategory: "Top Navigation",
      eventAction: "change city",
      eventLabel: "from:" + cityName + "-to:" + a,
      eventValue: 0,
    });
}
(ajaxToGetHTMLPageForNew = function (e, t, a) {
  $.ajax({ url: e, type: "GET", dataType: "html", success: t, error: a });
}),
  (getHTMLSectionOnScrollNew = function (e, t, a, r) {
    if (!e[a]) {
      e[a] = !0;
      var n = $("#domcache_constant").attr("data-fullcontextpath");
      ajaxToGetHTMLPageForNew(
        n + t,
        function (e) {
          $("#" + r).empty(), $("#" + r).append(e), $("#" + r).show();
        },
        function (t, r, n) {
          e[a] = !1;
        }
      );
    }
  }),
  $(document).ready(function () {
    mbHeaderWeb.init(),
      getHTMLSectionOnScrollNew(
        self,
        "propertyTypeLinks.html?ct=" +
          cityCode +
          "&category=B&city=" +
          cityName,
        "propTypesBuy1Fetched",
        "propTypesBuy1"
      ),
      getHTMLSectionOnScrollNew(
        self,
        "propertyTypeLinks.html?ct=" +
          cityCode +
          "&category=R&city=" +
          cityName,
        "propTypesRent1Fetched",
        "propTypesRent1"
      );
  }),
  $(".drop-links li").click(function () {
    var e, t, a;
    (e = this.innerText),
      (a =
        void 0 ===
        this.parentNode.parentNode.getElementsByClassName("drop-heading")[0]
          ? "No subheading"
          : this.parentNode.parentNode.getElementsByClassName("drop-heading")[0]
              .innerText),
      (t =
        (void 0 ===
        this.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName(
          "mb-header__sub__tabs__link js-menu-link"
        )[0]
          ? this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName(
              "mb-header__sub__tabs__link js-menu-link"
            )[0].innerText
          : this.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName(
              "mb-header__sub__tabs__link js-menu-link"
            )[0].innerText) +
        " - " +
        a),
      MB_GTM_dataLayer.push({
        event: "event_tracking",
        eventName: "new_top_nav_web",
        nonInteraction: !1,
        eventCategory: "Top Navigation",
        eventAction: t,
        eventLabel: e,
      });
  });
var mbFooterWeb = {
  version: "1.0.0",
  init: function () {},
  decFooterMore: function () {
    (document.querySelector(".mb-footer__disclaimer__more").style.display =
      "none"),
      (document.querySelector("#dec-ftr-more-content").style.display =
        "inline");
  },
  fireFooterGTM: function (e, t, a) {
    e.preventDefault(),
      void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []),
      MB_GTM_dataLayer.push({
        event: "event_tracking",
        eventName: "hp_footer",
        description: "Project Clicked",
        nonInteraction: !1,
        eventCategory: "Footer",
        eventAction: t,
        eventLabel: a,
        eventValue: 0,
      }),
      window.open(a, "_self");
  },
  fireAppAndSocialMediaGTM: function (e, t, a, r) {
    e.preventDefault(),
      void 0 === window.MB_GTM_dataLayer && (window.MB_GTM_dataLayer = []),
      MB_GTM_dataLayer.push({
        event: "event_tracking",
        eventName: t,
        nonInteraction: !1,
        eventCategory: "footer",
        eventAction: a,
        eventLabel: r,
        eventValue: 0,
      }),
      null != r && "" !== r && window.open(r, "_blank");
  },
  feedbackPopup: function (e) {
    window
      .open(
        e,
        "myFeedback",
        "location=0, toolbar=0, status=0, scrollbars=1, width=950, height=720"
      )
      .focus();
  },
  expandContent: function () {
    var e = document.querySelector(".mb-footer__main__content"),
      t = e.querySelector(".mb-footer__main__content__toggle");
    e.classList.contains("show")
      ? (e.classList.remove("show"), (t.innerHTML = "Read more"))
      : (e.classList.add("show"), (t.innerHTML = "Read less"));
  },
};
