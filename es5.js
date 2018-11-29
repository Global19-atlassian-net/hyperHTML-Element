var HyperHTMLElement = (function (exports) {
  'use strict';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  /*! (c) Andrea Giammarchi (ISC) */var hyperHTML = function (e) {
    function t() {
      return this;
    }function n(e) {
      return e.join(ee).replace(de, o).replace(fe, r);
    }function r(e, t, n, r) {
      return "<" + t + n.replace(he, i) + r;
    }function i(e, t, n) {
      return t + (n || '"') + Y + (n || '"');
    }function o(e, t, n) {
      return ae.test(t) ? e : "<" + t + n + "></" + t + ">";
    }function a(e, t, n) {
      return { type: e, name: n, node: t, path: u(t) };
    }function u(e) {
      var t,
          n = [];switch (e.nodeType) {case re:case ne:
          t = e;break;case te:
          t = e.parentNode, f(n, t, e);break;default:
          t = e.ownerElement;}for (; t = (e = t).parentNode;) {
        f(n, t, e);
      }return n;
    }function c(e, t) {
      for (var n = t.length, r = 0; r < n;) {
        e = e.childNodes[t[r++]];
      }return e;
    }function l(e, t, n) {
      for (var r = e.childNodes, i = r.length, o = 0; o < i;) {
        var u = r[o++];switch (u.nodeType) {case re:
            s(u, t, n), l(u, t, n);break;case te:
            u.textContent === Y && (n.shift(), t.push(oe.test(e.nodeName) ? a("text", e) : a("any", u)));break;case ie:
            oe.test(e.nodeName) && ve.call(u.textContent) === ee && (n.shift(), t.push(a("text", e)));}
      }
    }function s(t, n, r) {
      for (var i = new C(), o = t.attributes, u = [], c = u.slice.call(o, 0), l = c.length, s = 0; s < l;) {
        var f = c[s++];if (f.value === Y) {
          var d = f.name;if (!i.has(d)) {
            var h = r.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*['"]?$/, "$1"),
                v = o[h] || o[h.toLowerCase()];i.set(d, v), n.push(a("attr", v, h));
          }u.push(f);
        }
      }for (l = u.length, s = 0; s < l;) {
        var p = u[s++];/^id$/i.test(p.name) ? t.removeAttribute(p.name) : t.removeAttributeNode(p);
      }var m = t.nodeName;if (/^script$/i.test(m)) {
        var g = e.createElement(m);for (l = o.length, s = 0; s < l;) {
          g.setAttributeNode(o[s++].cloneNode(!0));
        }g.textContent = t.textContent, t.parentNode.replaceChild(g, t);
      }
    }function f(e, t, n) {
      e.unshift(e.indexOf.call(t.childNodes, n));
    }function d(e, t) {
      var r = n(t),
          i = e.transform;i && (r = i(r));var o = Q(r, e.type),
          a = [];l(o, a, t.slice(0));var u = { content: o, updates: function updates(n) {
          for (var r = [], i = a.length, o = 0; o < i;) {
            var u = a[o++],
                l = c(n, u.path);switch (u.type) {case "any":
                r.push(e.any(l, []));break;case "attr":
                r.push(e.attribute(l, u.name, u.node));break;case "text":
                r.push(e.text(l)), l.textContent = "";}
          }return function () {
            var e = arguments.length,
                o = e - 1,
                a = 1;if (i !== o) throw new Error(o + " values instead of " + i + "\n" + t.join(", "));for (; a < e;) {
              r[a - 1](arguments[a++]);
            }return n;
          };
        } };return pe.set(t, u), u;
    }function h(t, n) {
      var r = pe.get(n) || d(t, n),
          i = U.call(e, r.content, !0),
          o = { content: i, template: n, updates: r.updates(i) };return me.set(t, o), o;
    }function v(e) {
      return function (t) {
        var n = me.get(e);return null != n && n.template === t || (n = h(e, t)), n.updates.apply(null, arguments), n.content;
      };
    }function p(e) {
      this.childNodes = e, this.length = e.length, this.first = e[0], this.last = e[this.length - 1], this._ = null;
    }function m(e) {
      return this.type = e, v(this);
    }function g(e) {
      var t = Ze.get(this);return t && t.template === De(e) ? t.tagger.apply(null, arguments) : b.apply(this, arguments), this;
    }function b(e) {
      e = De(e);var t = be in this ? "svg" : "html",
          n = new m(t);Ze.set(this, { tagger: n, template: e }), this.textContent = "", this.appendChild(n.apply(null, arguments));
    }function w(e) {
      return arguments.length < 2 ? null == e ? He("html") : "string" == typeof e ? w.wire(null, e) : "raw" in e ? He("html")(e) : "nodeType" in e ? w.bind(e) : ze(e, "html") : ("raw" in e ? He("html") : w.wire).apply(null, arguments);
    } /*! (c) Andrea Giammarchi - ISC */
    var y = {};try {
      y.WeakMap = WeakMap;
    } catch (WeakMap) {
      y.WeakMap = function (e, t) {
        function n(t) {
          i(this, "_", { value: "_@ungap/weakmap" + e++ }), t && t.forEach(r, this);
        }function r(e) {
          this.set(e[0], e[1]);
        }var i = t.defineProperty,
            o = t.hasOwnProperty,
            a = n.prototype;return a["delete"] = function (e) {
          return this.has(e) && delete e[this._];
        }, a.get = function (e) {
          return this.has(e) ? e[this._] : void 0;
        }, a.has = function (e) {
          return o.call(e, this._);
        }, a.set = function (e, t) {
          return i(e, this._, { configurable: !0, value: t }), this;
        }, n;
      }(Math.random(), Object);
    }var N = y.WeakMap,
        x = {};try {
      x.WeakSet = WeakSet;
    } catch (WeakSet) {
      !function (e, t) {
        function n() {
          t(this, "_", { value: "_@ungap/weakmap" + e++ });
        }var r = n.prototype;r.add = function (e) {
          return this.has(e) || t(e, this._, { value: !0, configurable: !0 }), this;
        }, r.has = function (e) {
          return this.hasOwnProperty.call(e, this._);
        }, r["delete"] = function (e) {
          return this.has(e) && delete e[this._];
        }, x.WeakSet = n;
      }(Math.random(), Object.defineProperty);
    }var E = x.WeakSet,
        k = {};try {
      k.Map = Map;
    } catch (Map) {
      k.Map = function () {
        function e(e) {
          return -1 < (t = n.indexOf(e));
        }var t = 0,
            n = [],
            r = [];return { "delete": function _delete(i) {
            var o = e(i);return o && (n.splice(t, 1), r.splice(t, 1)), o;
          }, get: function get$$1(n) {
            return e(n) ? r[t] : void 0;
          }, has: function has(t) {
            return e(t);
          }, set: function set$$1(i, o) {
            return r[e(i) ? t : n.push(i) - 1] = o, this;
          } };
      };
    }var C = k.Map,
        _ = function _(e, t, n, r, i, o) {
      if (i - r < 2) t.insertBefore(e(n[r], 1), o);else {
        for (var a = t.ownerDocument.createDocumentFragment(); r < i;) {
          a.appendChild(e(n[r++], 1));
        }t.insertBefore(a, o);
      }
    },
        A = function A(e, t) {
      return e == t;
    },
        M = function M(e) {
      return e;
    },
        S = function S(e, t, n, r, i, o, a) {
      var u = o - i;if (u < 1) return -1;for (; n - t >= u;) {
        for (var c = t, l = i; c < n && l < o && a(e[c], r[l]);) {
          c++, l++;
        }if (l === o) return t;t = c + 1;
      }return -1;
    },
        j = function j(e, t, n, r, i, o) {
      for (; r < i && o(n[r], e[t - 1]);) {
        r++, t--;
      }return 0 === t;
    },
        O = function O(e, t, n, r, i) {
      return n < r ? e(t[n], 0) : 0 < n ? e(t[n - 1], -0).nextSibling : i;
    },
        T = function T(e, t, n, r, i) {
      if (i - r < 2) t.removeChild(e(n[r], -1));else {
        var o = t.ownerDocument.createRange();o.setStartBefore(e(n[r], -1)), o.setEndAfter(e(n[i - 1], -1)), o.deleteContents();
      }
    },
        L = function L(e, t, n, r, i, o, a, u) {
      var c = 0,
          l = r < u ? r : u,
          s = Array(l++),
          f = Array(l);f[0] = -1;for (var d = 1; d < l; d++) {
        f[d] = a;
      }for (var h = new C(), v = o; v < a; v++) {
        h.set(i[v], v);
      }for (var p = t; p < n; p++) {
        var m = h.get(e[p]);null != m && -1 < (c = $(f, l, m)) && (f[c] = m, s[c] = { newi: p, oldi: m, prev: s[c - 1] });
      }for (c = --l, --a; f[c] > a;) {
        --c;
      }l = u + r - c;var g = Array(l),
          b = s[c];for (--n; b;) {
        for (var w = b, y = w.newi, N = w.oldi; n > y;) {
          g[--l] = 1, --n;
        }for (; a > N;) {
          g[--l] = -1, --a;
        }g[--l] = 0, --n, --a, b = b.prev;
      }for (; n >= t;) {
        g[--l] = 1, --n;
      }for (; a >= o;) {
        g[--l] = -1, --a;
      }return g;
    },
        P = function P(e, t, n, r, i, o, a) {
      var u = n + o,
          c = [],
          l = void 0,
          s = void 0,
          f = void 0,
          d = void 0,
          h = void 0,
          v = void 0,
          p = void 0;e: for (l = 0; l <= u; l++) {
        if (l > 50) return null;for (p = l - 1, h = l ? c[l - 1] : [0, 0], v = c[l] = [], s = -l; s <= l; s += 2) {
          for (d = s === -l || s !== l && h[p + s - 1] < h[p + s + 1] ? h[p + s + 1] : h[p + s - 1] + 1, f = d - s; d < o && f < n && a(r[i + d], e[t + f]);) {
            d++, f++;
          }if (d === o && f === n) break e;v[l + s] = d;
        }
      }var m = Array(l / 2 + u / 2),
          g = m.length - 1;for (l = c.length - 1; l >= 0; l--) {
        for (; d > 0 && f > 0 && a(r[i + d - 1], e[t + f - 1]);) {
          m[g--] = 0, d--, f--;
        }if (!l) break;p = l - 1, h = l ? c[l - 1] : [0, 0], s = d - f, s === -l || s !== l && h[p + s - 1] < h[p + s + 1] ? (f--, m[g--] = 1) : (d--, m[g--] = -1);
      }return m;
    },
        W = function W(e, t, n, r, i, o, a, u, c) {
      for (var l = new C(), s = e.length, f = a, d = 0; d < s;) {
        switch (e[d++]) {case 0:
            i++, f++;break;case 1:
            l.set(r[i], 1), _(t, n, r, i++, i, f < u ? t(o[f], 1) : c);break;case -1:
            f++;}
      }for (d = 0; d < s;) {
        switch (e[d++]) {case 0:
            a++;break;case -1:
            l.has(o[a]) ? a++ : T(t, n, o, a++, a);}
      }
    },
        $ = function $(e, t, n) {
      for (var r = 1, i = t; r < i;) {
        var o = (r + i) / 2 >>> 0;n < e[o] ? i = o : r = o + 1;
      }return r;
    },
        D = function D(e, t, n, r, i, o, a, u, c, l, s, f, d) {
      W(P(n, r, o, a, u, l, f) || L(n, r, i, o, a, u, c, l), e, t, n, r, a, u, s, d);
    },
        F = function F(e, t, n, r) {
      r || (r = {});for (var i = r.compare || A, o = r.node || M, a = null == r.before ? null : o(r.before, 0), u = t.length, c = u, l = 0, s = n.length, f = 0; l < c && f < s && i(t[l], n[f]);) {
        l++, f++;
      }for (; l < c && f < s && i(t[c - 1], n[s - 1]);) {
        c--, s--;
      }var d = l === c,
          h = f === s;if (d && h) return n;if (d && f < s) return _(o, e, n, f, s, O(o, t, l, u, a)), n;if (h && l < c) return T(o, e, t, l, c), n;var v = c - l,
          p = s - f,
          m = -1;if (v < p) {
        if (-1 < (m = S(n, f, s, t, l, c, i))) return _(o, e, n, f, m, o(t[l], 0)), _(o, e, n, m + v, s, O(o, t, c, u, a)), n;
      } else if (p < v && -1 < (m = S(t, l, c, n, f, s, i))) return T(o, e, t, l, m), T(o, e, t, m + p, c), n;return v < 2 || p < 2 ? (_(o, e, n, f, s, o(t[l], 0)), T(o, e, t, l, c), n) : v === p && j(n, s, t, l, c, i) ? (_(o, e, n, f, s, O(o, t, c, u, a)), n) : (D(o, e, n, f, s, p, t, l, c, v, u, i, a), n);
    },
        R = {};try {
      R.CustomEvent = new CustomEvent(".").constructor;
    } catch (CustomEvent) {
      R.CustomEvent = function (t, n) {
        n || (n = {});var r = e.createEvent("Event"),
            i = !!n.bubbles,
            o = !!n.cancelable;return r.initEvent(t, i, o), r.bubbles = i, r.cancelable = o, r.detail = n.detail, r;
      };
    }var H = R.CustomEvent,
        z = function z(e, t) {
      var n = "_" + e + "$";return { get: function get$$1() {
          return this[n] || B(this, n, t.call(this, e));
        }, set: function set$$1(e) {
          B(this, n, e);
        } };
    },
        B = function B(e, t, n) {
      return Object.defineProperty(e, t, { configurable: !0, value: "function" == typeof n ? function () {
          return e._wire$ = n.apply(this, arguments);
        } : n })[t];
    },
        Z = {},
        V = {},
        I = [],
        q = V.hasOwnProperty,
        G = 0,
        J = { attributes: Z, define: function define(e, t) {
        e.indexOf("-") < 0 ? (e in V || (G = I.push(e)), V[e] = t) : Z[e] = t;
      }, invoke: function invoke(e, t) {
        for (var n = 0; n < G; n++) {
          var r = I[n];if (q.call(e, r)) return V[r](e[r], t);
        }
      } },
        K = Array.isArray || function (e) {
      var t = e.call([]);return function (n) {
        return e.call(n) === t;
      };
    }({}.toString),
        Q = function (e) {
      function t(e, t) {
        for (var n = t.length; n--;) {
          e.appendChild(t[0]);
        }
      }function n(t) {
        return t === i ? e.createDocumentFragment() : e.createElement(t);
      }function r(e) {
        var r = n(i),
            o = n("div");return o.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + e + "</svg>", t(r, o.firstChild.childNodes), r;
      }var i = "fragment",
          o = "content" in n("template"),
          a = o ? function (e) {
        var t = n("template");return t.innerHTML = e, t.content;
      } : function (e) {
        var r = n(i),
            o = n("template"),
            a = null;if (/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)) {
          var u = RegExp.$1;o.innerHTML = "<table>" + e + "</table>", a = o.querySelectorAll(u);
        } else o.innerHTML = e, a = o.childNodes;return t(r, a), r;
      };return function (e, t) {
        return ("svg" === t ? r : a)(e);
      };
    }(e),
        U = function (e, t, n, r, i) {
      var o = "importNode" in e,
          a = e.createDocumentFragment();return a.appendChild(e.createTextNode("g")), a.appendChild(e.createTextNode("")), (o ? e.importNode(a, !0) : a.cloneNode(!0)).childNodes.length < 2 ? function u(e, t) {
        for (var n = e.cloneNode(), r = e.childNodes || [], i = r.length, o = 0; t && o < i; o++) {
          n.appendChild(u(r[o], t));
        }return n;
      } : o ? e.importNode : function (e, t) {
        return e.cloneNode(!!t);
      };
    }(e),
        X = "content" in e.createElement("template"),
        Y = (X ? "-" : "_dt: ") + Math.random().toFixed(6) + (X ? "%" : ";"),
        ee = "\x3c!--" + Y + "--\x3e",
        te = 8,
        ne = 11,
        re = 1,
        ie = 3,
        oe = /^(?:style|textarea)$/i,
        ae = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,
        ue = " \\f\\n\\r\\t",
        ce = "[ " + ue + "]+[^  \\f\\n\\r\\t\\/>\"'=]+",
        le = "<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",
        se = "(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|[^  \\f\\n\\r\\t\\/>\"'=]+))?)",
        fe = new RegExp(le + ce + se + "+)([ " + ue + "]*/?>)", "g"),
        de = new RegExp(le + ce + se + "*)([ " + ue + "]*/>)", "g"),
        he = new RegExp("(" + ce + "\\s*=\\s*)(['\"]?)" + ee + "\\2", "gi"),
        ve = "".trim || function () {
      return String(this).replace(/^\s+|\s+/g, "");
    },
        pe = new N(),
        me = new N(),
        ge = e.defaultView,
        be = "ownerSVGElement",
        we = function we(e) {
      return e.ownerDocument || e;
    },
        ye = function ye(e) {
      return we(e).createDocumentFragment();
    },
        Ne = function Ne(e, t) {
      return we(e).createTextNode(t);
    },
        xe = "append" in ye(e) ? function (e, t) {
      e.append.apply(e, t);
    } : function (e, t) {
      for (var n = t.length, r = 0; r < n; r++) {
        e.appendChild(t[r]);
      }
    },
        Ee = [].slice;p.prototype.valueOf = function (e) {
      var t = null == this._;return t && (this._ = ye(this.first)), (t || e) && xe(this._, this.childNodes), this._;
    }, p.prototype.remove = function () {
      this._ = null;var e = this.first,
          t = this.last;if (2 === this.length) t.parentNode.removeChild(t);else {
        var n = we(e).createRange();n.setStartBefore(this.childNodes[1]), n.setEndAfter(t), n.deleteContents();
      }return e;
    };var ke = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
        Ce = function Ce(e, t, n) {
      if (n) {
        var r = t.cloneNode(!0);return r.value = "", e.setAttributeNode(r), _e(r, n);
      }return _e(e.style, n);
    },
        _e = function _e(e, t) {
      var n = void 0,
          r = void 0;return function (i) {
        switch (typeof i === "undefined" ? "undefined" : _typeof(i)) {case "object":
            if (i) {
              if ("object" === n) {
                if (!t && r !== i) for (var o in r) {
                  o in i || (e[o] = "");
                }
              } else t ? e.value = "" : e.cssText = "";var a = t ? {} : e;for (var u in i) {
                var c = i[u],
                    l = "number" != typeof c || ke.test(u) ? c : c + "px";!t && /^--/.test(u) ? a.setProperty(u, l) : a[u] = l;
              }n = "object", t ? e.value = Se(r = a) : r = i;break;
            }default:
            r != i && (n = "string", r = i, t ? e.value = i || "" : e.cssText = i || "");}
      };
    },
        Ae = /([^A-Z])([A-Z]+)/g,
        Me = function Me(e, t, n) {
      return t + "-" + n.toLowerCase();
    },
        Se = function Se(e) {
      var t = [];for (var n in e) {
        t.push(n.replace(Ae, Me), ":", e[n], ";");
      }return t.join("");
    },
        je = /*! (c) Andrea Giammarchi */
    function (e) {
      function t(e) {
        function t(e) {
          s = new l();for (var t, i = e.length, o = 0; o < i; o++) {
            t = e[o], a(t.removedNodes, r, n), a(t.addedNodes, n, r);
          }s = null;
        }function a(e, t, n) {
          for (var r, o = new i(t), a = e.length, u = 0; u < a; 1 === (r = e[u++]).nodeType && c(r, o, t, n)) {}
        }function c(e, t, n, r) {
          u.has(e) && !s[n].has(e) && (s[r]["delete"](e), s[n].add(e), e.dispatchEvent(t));for (var i = e.children, o = i.length, a = 0; a < o; c(i[a++], t, n, r)) {}
        }function l() {
          this[n] = new o(), this[r] = new o();
        }var s = null;try {
          new MutationObserver(t).observe(e, { subtree: !0, childList: !0 });
        } catch (v) {
          var f = 0,
              d = [],
              h = function h(e) {
            d.push(e), clearTimeout(f), f = setTimeout(function () {
              t(d.splice(f = 0, d.length));
            }, 0);
          };e.addEventListener("DOMNodeRemoved", function (e) {
            h({ addedNodes: [], removedNodes: [e.target] });
          }, !0), e.addEventListener("DOMNodeInserted", function (e) {
            h({ addedNodes: [e.target], removedNodes: [] });
          }, !0);
        }
      }var n = "connected",
          r = "dis" + n,
          i = e.Event,
          o = e.WeakSet,
          a = !0,
          u = new o();return function (e) {
        return a && (a = !a, t(e.ownerDocument)), u.add(e), e;
      };
    }({ Event: H, WeakSet: E }),
        Oe = function Oe(e) {
      return { html: e };
    },
        Te = function qe(e, t) {
      return "ELEMENT_NODE" in e ? e : e.constructor === p ? 1 / t < 0 ? t ? e.remove() : e.last : t ? e.valueOf(!0) : e.first : qe(e.render(), t);
    },
        Le = function Le(e) {
      return "ELEMENT_NODE" in e || e instanceof p || e instanceof t;
    },
        Pe = function Pe(e, t) {
      t(e.placeholder), "text" in e ? Promise.resolve(e.text).then(String).then(t) : "any" in e ? Promise.resolve(e.any).then(t) : "html" in e ? Promise.resolve(e.html).then(Oe).then(t) : Promise.resolve(J.invoke(e, t)).then(t);
    },
        We = function We(e) {
      return null != e && "then" in e;
    },
        $e = /^(?:form|list)$/i;m.prototype = { attribute: function attribute(e, t, n) {
        var r = be in e,
            i = void 0;if ("style" === t) return Ce(e, n, r);if (/^on/.test(t)) {
          var o = t.slice(2);return "connected" === o || "disconnected" === o ? je(e) : t.toLowerCase() in e && (o = o.toLowerCase()), function (t) {
            i !== t && (i && e.removeEventListener(o, i, !1), i = t, t && e.addEventListener(o, t, !1));
          };
        }if ("data" === t || !r && t in e && !$e.test(t)) return function (n) {
          i !== n && (i = n, e[t] !== n && (e[t] = n, null == n && e.removeAttribute(t)));
        };if (t in J.attributes) return function (n) {
          i = J.attributes[t](e, n), e.setAttribute(t, null == i ? "" : i);
        };var a = !1,
            u = n.cloneNode(!0);return function (t) {
          i !== t && (i = t, u.value !== t && (null == t ? (a && (a = !1, e.removeAttributeNode(u)), u.value = t) : (u.value = t, a || (a = !0, e.setAttributeNode(u)))));
        };
      }, any: function any(e, t) {
        var n = { node: Te, before: e },
            r = be in e ? "svg" : "html",
            i = !1,
            o = void 0;return function a(u) {
          switch (typeof u === "undefined" ? "undefined" : _typeof(u)) {case "string":case "number":case "boolean":
              i ? o !== u && (o = u, t[0].textContent = u) : (i = !0, o = u, t = F(e.parentNode, t, [Ne(e, u)], n));break;case "function":
              a(u(e));break;case "object":case "undefined":
              if (null == u) {
                i = !1, t = F(e.parentNode, t, [], n);break;
              }default:
              if (i = !1, o = u, K(u)) {
                if (0 === u.length) t.length && (t = F(e.parentNode, t, [], n));else switch (_typeof(u[0])) {case "string":case "number":case "boolean":
                    a({ html: u });break;case "object":
                    if (K(u[0]) && (u = u.concat.apply([], u)), We(u[0])) {
                      Promise.all(u).then(a);break;
                    }default:
                    t = F(e.parentNode, t, u, n);}
              } else Le(u) ? t = F(e.parentNode, t, 11 === u.nodeType ? Ee.call(u.childNodes) : [u], n) : We(u) ? u.then(a) : "placeholder" in u ? Pe(u, a) : "text" in u ? a(String(u.text)) : "any" in u ? a(u.any) : "html" in u ? t = F(e.parentNode, t, Ee.call(Q([].concat(u.html).join(""), r).childNodes), n) : a("length" in u ? Ee.call(u) : J.invoke(u, a));}
        };
      }, text: function text(e) {
        var t = void 0;return function n(r) {
          if (t !== r) {
            t = r;var i = typeof r === "undefined" ? "undefined" : _typeof(r);"object" === i && r ? We(r) ? r.then(n) : "placeholder" in r ? Pe(r, n) : n("text" in r ? String(r.text) : "any" in r ? r.any : "html" in r ? [].concat(r.html).join("") : "length" in r ? Ee.call(r).join("") : J.invoke(r, n)) : "function" === i ? n(r(e)) : e.textContent = null == r ? "" : r;
          }
        };
      } };var De = function () {
      var t = !1,
          _n = function n(r) {
        if (!("raw" in r) || r.propertyIsEnumerable("raw") || !Object.isFrozen(r.raw) || /Firefox\/(\d+)/.test((e.defaultView.navigator || {}).userAgent) && parseFloat(RegExp.$1) < 55) {
          var i = {};return (_n = function n(e) {
            var t = "raw" + e.join("raw");return i[t] || (i[t] = e);
          })(r);
        }return t = !0, r;
      };return function (e) {
        return t ? e : _n(e);
      };
    }(),
        Fe = new N(),
        Re = function Re(e, t) {
      return null == e ? He(t || "html") : ze(e, t || "html");
    },
        He = function He(e) {
      var t = void 0,
          n = void 0,
          r = void 0;return function (i) {
        return i = De(i), r !== i ? (r = i, n = new m(e), t = Be(n.apply(n, arguments))) : n.apply(n, arguments), t;
      };
    },
        ze = function ze(e, t) {
      var n = t.indexOf(":"),
          r = Fe.get(e),
          i = t;return -1 < n && (i = t.slice(n + 1), t = t.slice(0, n) || "html"), r || Fe.set(e, r = {}), r[i] || (r[i] = He(t));
    },
        Be = function Be(e) {
      for (var t = e.childNodes, n = t.length, r = [], i = 0; i < n; i++) {
        var o = t[i];1 !== o.nodeType && 0 === ve.call(o.textContent).length || r.push(o);
      }return 1 === r.length ? r[0] : new p(r);
    },
        Ze = new N(),
        Ve = function Ve(e) {
      return g.bind(e);
    },
        Ie = J.define;return w.Component = t, w.bind = Ve, w.define = Ie, w.diff = F, w.hyper = w, w.observe = je, w.wire = Re, w._ = { global: ge, WeakMap: N, WeakSet: E }, function (e) {
      var n = new N(),
          r = Object.create,
          i = function i(e, t, n) {
        return e.set(t, n), n;
      },
          o = function o(e, t, n, _o) {
        var u = t.get(e) || a(e, t);switch (typeof _o === "undefined" ? "undefined" : _typeof(_o)) {case "object":case "function":
            var c = u.w || (u.w = new N());return c.get(_o) || i(c, _o, new e(n));default:
            var l = u.p || (u.p = r(null));return l[_o] || (l[_o] = new e(n));}
      },
          a = function a(e, t) {
        var n = { w: null, p: null };return t.set(e, n), n;
      },
          u = function u(e) {
        var t = new C();return n.set(e, t), t;
      };Object.defineProperties(t, { "for": { configurable: !0, value: function value(e, t) {
            return o(this, n.get(e) || u(e), e, null == t ? "default" : t);
          } } }), Object.defineProperties(t.prototype, { handleEvent: { value: function value(e) {
            var t = e.currentTarget;this["getAttribute" in t && t.getAttribute("data-call") || "on" + e.type](e);
          } }, html: z("html", e), svg: z("svg", e), state: z("state", function () {
          return this.defaultState;
        }), defaultState: { get: function get$$1() {
            return {};
          } }, dispatch: { value: function value(e, t) {
            var n = this._wire$;if (n) {
              var r = new H(e, { bubbles: !0, cancelable: !0, detail: t });return r.component = this, (n.dispatchEvent ? n : n.childNodes[0]).dispatchEvent(r);
            }return !1;
          } }, setState: { value: function value(e, t) {
            var n = this.state,
                r = "function" == typeof e ? e.call(this, n) : e;for (var i in r) {
              n[i] = r[i];
            }return !1 !== t && this.render(), this;
          } } });
    }(He), w;
  }(document);
  var Component = hyperHTML.Component,
      bind = hyperHTML.bind,
      define = hyperHTML.define,
      hyper = hyperHTML.hyper,
      wire = hyperHTML.wire;

  var _fixBabelExtend = function (O) {
    var gPO = O.getPrototypeOf || function (o) {
      return o.__proto__;
    },
        sPO = O.setPrototypeOf || function (o, p) {
      o.__proto__ = p;
      return o;
    },
        construct = (typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === 'object' ? Reflect.construct : function (Parent, args, Class) {
      var Constructor,
          a = [null];
      a.push.apply(a, args);
      Constructor = Parent.bind.apply(Parent, a);
      return sPO(new Constructor(), Class.prototype);
    };

    return function fixBabelExtend(Class) {
      var Parent = gPO(Class);
      return sPO(Class, sPO(function Super() {
        return construct(Parent, arguments, gPO(this).constructor);
      }, Parent));
    };
  }(Object);

  // utils to deal with custom elements builtin extends
  var ATTRIBUTE_CHANGED_CALLBACK = 'attributeChangedCallback';
  var O = Object;
  var classes = [];
  var defineProperty$1 = O.defineProperty;
  var getOwnPropertyDescriptor = O.getOwnPropertyDescriptor;
  var getOwnPropertyNames = O.getOwnPropertyNames;
  var getOwnPropertySymbols = O.getOwnPropertySymbols || function () {
    return [];
  };
  var getPrototypeOf = O.getPrototypeOf || function (o) {
    return o.__proto__;
  };
  var ownKeys = (typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === 'object' && Reflect.ownKeys || function (o) {
    return getOwnPropertyNames(o).concat(getOwnPropertySymbols(o));
  };
  var setPrototypeOf = O.setPrototypeOf || function (o, p) {
    return o.__proto__ = p, o;
  };
  var camel = function camel(name) {
    return name.replace(/-([a-z])/g, function ($0, $1) {
      return $1.toUpperCase();
    });
  };

  var HyperHTMLElement = _fixBabelExtend(function (_HTMLElement) {
    inherits(HyperHTMLElement, _HTMLElement);

    function HyperHTMLElement() {
      classCallCheck(this, HyperHTMLElement);
      return possibleConstructorReturn(this, (HyperHTMLElement.__proto__ || Object.getPrototypeOf(HyperHTMLElement)).apply(this, arguments));
    }

    createClass(HyperHTMLElement, [{
      key: 'render',


      // overwrite this method with your own render
      value: function render() {}

      // ---------------------//
      // Basic State Handling //
      // ---------------------//

      // define the default state object
      // you could use observed properties too

    }, {
      key: 'setState',


      // currently a state is a shallow copy, like in Preact or other libraries.
      // after the state is updated, the render() method will be invoked.
      // ⚠️ do not ever call this.setState() inside this.render()
      value: function setState(state, render) {
        var target = this.state;
        var source = typeof state === 'function' ? state.call(this, target) : state;
        for (var key in source) {
          target[key] = source[key];
        }if (render !== false) this.render();
        return this;
      }
    }, {
      key: 'html',


      // lazily bind once hyperHTML logic
      // to either the shadowRoot, if present and open,
      // the _shadowRoot property, if set due closed shadow root,
      // or the custom-element itself if no Shadow DOM is used.
      get: function get$$1() {
        return this._html$ || (this.html = bind(
        // in case of Shadow DOM {mode: "open"}, use it
        this.shadowRoot ||
        // in case of Shadow DOM {mode: "close"}, use it
        // this needs the following reference created upfront
        // this._shadowRoot = this.attachShadow({mode: "close"});
        this._shadowRoot ||
        // if no Shadow DOM is used, simply use the component
        // as container for its own content (it just works too)
        this));
      }

      // it can be set too if necessary, it won't invoke render()
      ,
      set: function set$$1(value) {
        defineProperty$1(this, '_html$', { configurable: true, value: value });
      }
    }, {
      key: 'defaultState',
      get: function get$$1() {
        return {};
      }

      // the state with a default

    }, {
      key: 'state',
      get: function get$$1() {
        return this._state$ || (this.state = this.defaultState);
      }

      // it can be set too if necessary, it won't invoke render()
      ,
      set: function set$$1(value) {
        defineProperty$1(this, '_state$', { configurable: true, value: value });
      }
    }], [{
      key: 'define',


      // define a custom-element in the CustomElementsRegistry
      // class MyEl extends HyperHTMLElement {}
      // MyEl.define('my-el');
      value: function define$$1(name, options) {
        var Class = this;
        var proto = Class.prototype;

        var onChanged = proto[ATTRIBUTE_CHANGED_CALLBACK];
        var hasChange = !!onChanged;

        // Class.booleanAttributes
        // -----------------------------------------------
        // attributes defined as boolean will have
        // an either available or not available attribute
        // regardless of the value.
        // All falsy values, or "false", mean attribute removed
        // while truthy values will be set as is.
        // Boolean attributes are also automatically observed.
        var booleanAttributes = Class.booleanAttributes || [];
        booleanAttributes.forEach(function (name) {
          if (!(name in proto)) defineProperty$1(proto, camel(name), {
            configurable: true,
            get: function get$$1() {
              return this.hasAttribute(name);
            },
            set: function set$$1(value) {
              if (!value || value === 'false') this.removeAttribute(name);else this.setAttribute(name, value);
            }
          });
        });

        // Class.observedAttributes
        // -------------------------------------------------------
        // HyperHTMLElement will directly reflect get/setAttribute
        // operation once these attributes are used, example:
        // el.observed = 123;
        // will automatically do
        // el.setAttribute('observed', 123);
        // triggering also the attributeChangedCallback
        var observedAttributes = Class.observedAttributes || [];
        observedAttributes.forEach(function (name) {
          // it is possible to redefine the behavior at any time
          // simply overwriting get prop() and set prop(value)
          if (!(name in proto)) defineProperty$1(proto, camel(name), {
            configurable: true,
            get: function get$$1() {
              return this.getAttribute(name);
            },
            set: function set$$1(value) {
              if (value == null) this.removeAttribute(name);else this.setAttribute(name, value);
            }
          });
        });

        // if these are defined, overwrite the observedAttributes getter
        // to include also booleanAttributes
        var attributes = booleanAttributes.concat(observedAttributes);
        if (attributes.length) defineProperty$1(Class, 'observedAttributes', {
          get: function get$$1() {
            return attributes;
          }
        });

        // created() {}
        // ---------------------------------
        // an initializer method that grants
        // the node is fully known to the browser.
        // It is ensured to run either after DOMContentLoaded,
        // or once there is a next sibling (stream-friendly) so that
        // you have full access to element attributes and/or childNodes.
        var created = proto.created || function () {
          this.render();
        };

        // used to ensure create() is called once and once only
        defineProperty$1(proto, '_init$', {
          configurable: true,
          writable: true,
          value: true
        });

        defineProperty$1(proto, ATTRIBUTE_CHANGED_CALLBACK, {
          configurable: true,
          value: function aCC(name, prev, curr) {
            if (this._init$) {
              checkReady.call(this, created);
              if (this._init$) return this._init$$.push(aCC.bind(this, name, prev, curr));
            }
            // ensure setting same value twice
            // won't trigger twice attributeChangedCallback
            if (hasChange && prev !== curr) {
              onChanged.apply(this, arguments);
            }
          }
        });

        var onConnected = proto.connectedCallback;
        var hasConnect = !!onConnected;
        defineProperty$1(proto, 'connectedCallback', {
          configurable: true,
          value: function cC() {
            if (this._init$) {
              checkReady.call(this, created);
              if (this._init$) return this._init$$.push(cC.bind(this));
            }
            if (hasConnect) {
              onConnected.apply(this, arguments);
            }
          }
        });

        // define lazily all handlers
        // class { handleClick() { ... }
        // render() { `<a onclick=${this.handleClick}>` } }
        getOwnPropertyNames(proto).forEach(function (key) {
          if (/^handle[A-Z]/.test(key)) {
            var _key$ = '_' + key + '$';
            var method = proto[key];
            defineProperty$1(proto, key, {
              configurable: true,
              get: function get$$1() {
                return this[_key$] || (this[_key$] = method.bind(this));
              }
            });
          }
        });

        // whenever you want to directly use the component itself
        // as EventListener, you can pass it directly.
        // https://medium.com/@WebReflection/dom-handleevent-a-cross-platform-standard-since-year-2000-5bf17287fd38
        //  class Reactive extends HyperHTMLElement {
        //    oninput(e) { console.log(this, 'changed', e.target.value); }
        //    render() { this.html`<input oninput="${this}">`; }
        //  }
        if (!('handleEvent' in proto)) {
          defineProperty$1(proto, 'handleEvent', {
            configurable: true,
            value: function value(event) {
              this[(event.currentTarget.dataset || {}).call || 'on' + event.type](event);
            }
          });
        }

        if (options && options.extends) {
          var Native = document.createElement(options.extends).constructor;
          var Intermediate = function (_Native) {
            inherits(Intermediate, _Native);

            function Intermediate() {
              classCallCheck(this, Intermediate);
              return possibleConstructorReturn(this, (Intermediate.__proto__ || Object.getPrototypeOf(Intermediate)).apply(this, arguments));
            }

            return Intermediate;
          }(Native);
          var Super = getPrototypeOf(Class);
          ownKeys(Super).filter(function (key) {
            return ['length', 'name', 'arguments', 'caller', 'prototype'].indexOf(key) < 0;
          }).forEach(function (key) {
            return defineProperty$1(Intermediate, key, getOwnPropertyDescriptor(Super, key));
          });
          ownKeys(Super.prototype).forEach(function (key) {
            return defineProperty$1(Intermediate.prototype, key, getOwnPropertyDescriptor(Super.prototype, key));
          });
          setPrototypeOf(Class, Intermediate);
          setPrototypeOf(proto, Intermediate.prototype);
          customElements.define(name, Class, options);
        } else {
          customElements.define(name, Class);
        }
        classes.push(Class);
        return Class;
      }
    }]);
    return HyperHTMLElement;
  }(HTMLElement));

  // exposing hyperHTML utilities
  HyperHTMLElement.Component = Component;
  HyperHTMLElement.bind = bind;
  HyperHTMLElement.intent = define;
  HyperHTMLElement.wire = wire;
  HyperHTMLElement.hyper = hyper;

  try {
    if (Symbol.hasInstance) classes.push(defineProperty$1(HyperHTMLElement, Symbol.hasInstance, {
      enumerable: false,
      configurable: true,
      value: function value(instance) {
        return classes.some(isPrototypeOf, getPrototypeOf(instance));
      }
    }));
  } catch (meh) {}

  // ------------------------------//
  // DOMContentLoaded VS created() //
  // ------------------------------//
  var dom = {
    type: 'DOMContentLoaded',
    handleEvent: function handleEvent() {
      if (dom.ready()) {
        document.removeEventListener(dom.type, dom, false);
        dom.list.splice(0).forEach(invoke);
      } else setTimeout(dom.handleEvent);
    },
    ready: function ready() {
      return document.readyState === 'complete';
    },

    list: []
  };

  if (!dom.ready()) {
    document.addEventListener(dom.type, dom, false);
  }

  function checkReady(created) {
    if (dom.ready() || isReady.call(this, created)) {
      if (this._init$) {
        var list = this._init$$;
        if (list) delete this._init$$;
        created.call(defineProperty$1(this, '_init$', { value: false }));
        if (list) list.forEach(invoke);
      }
    } else {
      if (!this.hasOwnProperty('_init$$')) defineProperty$1(this, '_init$$', { configurable: true, value: [] });
      dom.list.push(checkReady.bind(this, created));
    }
  }

  function invoke(fn) {
    fn();
  }

  function isPrototypeOf(Class) {
    return this === Class.prototype;
  }

  function isReady(created) {
    var el = this;
    do {
      if (el.nextSibling) return true;
    } while (el = el.parentNode);
    setTimeout(checkReady.bind(this, created));
    return false;
  }

  exports.default = HyperHTMLElement;

  return exports["default"];

}({}));
