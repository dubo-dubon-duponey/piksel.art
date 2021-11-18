! function(e) {
    var t = {};

    function r(i) {
        if (t[i]) return t[i].exports;
        var n = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }
    r.m = e, r.c = t, r.d = function(e, t, i) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (r.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) r.d(i, n, function(t) {
                return e[t]
            }.bind(null, n));
        return i
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 9)
}([function(e, t) {
    var r;
    r = function() {
        return this
    }();
    try {
        r = r || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (r = window)
    }
    e.exports = r
}, function(e, t, r) {
    (function(t) {
        var r = "[object Map]",
            i = "[object Set]",
            n = /^\s+|\s+$/g,
            s = /^[-+]0x[0-9a-f]+$/i,
            o = /^0b[01]+$/i,
            a = /^\[object .+?Constructor\]$/,
            u = /^0o[0-7]+$/i,
            l = /^(?:0|[1-9]\d*)$/,
            h = "[\\ud800-\\udfff]",
            c = "[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",
            d = "\\ud83c[\\udffb-\\udfff]",
            f = "[^\\ud800-\\udfff]",
            p = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            m = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            g = "(?:" + c + "|" + d + ")" + "?",
            v = "[\\ufe0e\\ufe0f]?" + g + ("(?:\\u200d(?:" + [f, p, m].join("|") + ")[\\ufe0e\\ufe0f]?" + g + ")*"),
            y = "(?:" + [f + c + "?", c, p, m, h].join("|") + ")",
            _ = RegExp(d + "(?=" + d + ")|" + y + v, "g"),
            D = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),
            x = parseInt,
            w = "object" == typeof t && t && t.Object === Object && t,
            b = "object" == typeof self && self && self.Object === Object && self,
            E = w || b || Function("return this")();

        function C(e, t) {
            return function(e, t) {
                for (var r = -1, i = e ? e.length : 0, n = Array(i); ++r < i;) n[r] = t(e[r], r, e);
                return n
            }(t, (function(t) {
                return e[t]
            }))
        }

        function A(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach((function(e, i) {
                r[++t] = [i, e]
            })), r
        }

        function T(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach((function(e) {
                r[++t] = e
            })), r
        }

        function F(e) {
            return function(e) {
                return D.test(e)
            }(e) ? function(e) {
                return e.match(_) || []
            }(e) : function(e) {
                return e.split("")
            }(e)
        }
        var P, M, S, k = Function.prototype,
            R = Object.prototype,
            O = E["__core-js_shared__"],
            L = (P = /[^.]+$/.exec(O && O.keys && O.keys.IE_PROTO || "")) ? "Symbol(src)_1." + P : "",
            I = k.toString,
            B = R.hasOwnProperty,
            N = R.toString,
            U = RegExp("^" + I.call(B).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            z = E.Symbol,
            j = z ? z.iterator : void 0,
            V = R.propertyIsEnumerable,
            Y = Math.floor,
            G = (M = Object.keys, S = Object, function(e) {
                return M(S(e))
            }),
            W = Math.random,
            X = oe(E, "DataView"),
            H = oe(E, "Map"),
            q = oe(E, "Promise"),
            Z = oe(E, "Set"),
            Q = oe(E, "WeakMap"),
            J = le(X),
            K = le(H),
            $ = le(q),
            ee = le(Z),
            te = le(Q);

        function re(e, t) {
            var r = ce(e) || function(e) {
                    return function(e) {
                        return me(e) && de(e)
                    }(e) && B.call(e, "callee") && (!V.call(e, "callee") || "[object Arguments]" == N.call(e))
                }(e) ? function(e, t) {
                    for (var r = -1, i = Array(e); ++r < e;) i[r] = t(r);
                    return i
                }(e.length, String) : [],
                i = r.length,
                n = !!i;
            for (var s in e) !t && !B.call(e, s) || n && ("length" == s || ue(s, i)) || r.push(s);
            return r
        }

        function ie(e) {
            return !(!pe(e) || function(e) {
                return !!L && L in e
            }(e)) && (fe(e) || function(e) {
                var t = !1;
                if (null != e && "function" != typeof e.toString) try {
                    t = !!(e + "")
                } catch (e) {}
                return t
            }(e) ? U : a).test(le(e))
        }

        function ne(e) {
            if (r = (t = e) && t.constructor, i = "function" == typeof r && r.prototype || R, t !== i) return G(e);
            var t, r, i, n = [];
            for (var s in Object(e)) B.call(e, s) && "constructor" != s && n.push(s);
            return n
        }

        function se(e, t) {
            return e + Y(W() * (t - e + 1))
        }

        function oe(e, t) {
            var r = function(e, t) {
                return null == e ? void 0 : e[t]
            }(e, t);
            return ie(r) ? r : void 0
        }
        var ae = function(e) {
            return N.call(e)
        };

        function ue(e, t) {
            return !!(t = null == t ? 9007199254740991 : t) && ("number" == typeof e || l.test(e)) && e > -1 && e % 1 == 0 && e < t
        }

        function le(e) {
            if (null != e) {
                try {
                    return I.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }

        function he(e, t, a) {
            var l, h, c, d = -1,
                f = function(e) {
                    if (!e) return [];
                    if (de(e)) return function(e) {
                        return "string" == typeof e || !ce(e) && me(e) && "[object String]" == N.call(e)
                    }(e) ? F(e) : function(e, t) {
                        var r = -1,
                            i = e.length;
                        for (t || (t = Array(i)); ++r < i;) t[r] = e[r];
                        return t
                    }(e);
                    if (j && e[j]) return function(e) {
                        for (var t, r = []; !(t = e.next()).done;) r.push(t.value);
                        return r
                    }(e[j]());
                    var t = ae(e);
                    return (t == r ? A : t == i ? T : ge)(e)
                }(e),
                p = f.length,
                m = p - 1;
            for ((a ? function(e, t, r) {
                    if (!pe(r)) return !1;
                    var i = typeof t;
                    return !!("number" == i ? de(r) && ue(t, r.length) : "string" == i && t in r) && function(e, t) {
                        return e === t || e != e && t != t
                    }(r[t], e)
                }(e, t, a) : void 0 === t) ? t = 1 : (l = function(e) {
                    var t = function(e) {
                            return e ? (e = function(e) {
                                if ("number" == typeof e) return e;
                                if (function(e) {
                                        return "symbol" == typeof e || me(e) && "[object Symbol]" == N.call(e)
                                    }(e)) return NaN;
                                if (pe(e)) {
                                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                    e = pe(t) ? t + "" : t
                                }
                                if ("string" != typeof e) return 0 === e ? e : +e;
                                e = e.replace(n, "");
                                var r = o.test(e);
                                return r || u.test(e) ? x(e.slice(2), r ? 2 : 8) : s.test(e) ? NaN : +e
                            }(e)) === 1 / 0 || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
                        }(e),
                        r = t % 1;
                    return t == t ? r ? t - r : t : 0
                }(t), h = 0, c = p, l == l && (void 0 !== c && (l = l <= c ? l : c), void 0 !== h && (l = l >= h ? l : h)), t = l); ++d < t;) {
                var g = se(d, m),
                    v = f[g];
                f[g] = f[d], f[d] = v
            }
            return f.length = t, f
        }(X && "[object DataView]" != ae(new X(new ArrayBuffer(1))) || H && ae(new H) != r || q && "[object Promise]" != ae(q.resolve()) || Z && ae(new Z) != i || Q && "[object WeakMap]" != ae(new Q)) && (ae = function(e) {
            var t = N.call(e),
                n = "[object Object]" == t ? e.constructor : void 0,
                s = n ? le(n) : void 0;
            if (s) switch (s) {
                case J:
                    return "[object DataView]";
                case K:
                    return r;
                case $:
                    return "[object Promise]";
                case ee:
                    return i;
                case te:
                    return "[object WeakMap]"
            }
            return t
        });
        var ce = Array.isArray;

        function de(e) {
            return null != e && function(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
            }(e.length) && !fe(e)
        }

        function fe(e) {
            var t = pe(e) ? N.call(e) : "";
            return "[object Function]" == t || "[object GeneratorFunction]" == t
        }

        function pe(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }

        function me(e) {
            return !!e && "object" == typeof e
        }

        function ge(e) {
            return e ? C(e, function(e) {
                return de(e) ? re(e) : ne(e)
            }(e)) : []
        }
        e.exports = function(e) {
            return he(e, 4294967295)
        }
    }).call(this, r(0))
}, function(e, t, r) {
    e.exports = function() {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function t(t, r, i) {
            return r && e(t.prototype, r), i && e(t, i), t
        }

        function r() {
            return (r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
                }
                return e
            }).apply(this, arguments)
        }

        function i(e, t) {
            e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
        }

        function n(e) {
            return (n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function s(e, t) {
            return (s = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function o(e, t, r) {
            return (o = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }() ? Reflect.construct : function(e, t, r) {
                var i = [null];
                i.push.apply(i, t);
                var n = new(Function.bind.apply(e, i));
                return r && s(n, r.prototype), n
            }).apply(null, arguments)
        }

        function a(e) {
            var t = "function" == typeof Map ? new Map : void 0;
            return (a = function(e) {
                if (null === e || -1 === Function.toString.call(e).indexOf("[native code]")) return e;
                if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== t) {
                    if (t.has(e)) return t.get(e);
                    t.set(e, r)
                }

                function r() {
                    return o(e, arguments, n(this).constructor)
                }
                return r.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: r,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), s(r, e)
            })(e)
        }

        function u(e, t) {
            try {
                var r = e()
            } catch (e) {
                return t(e)
            }
            return r && r.then ? r.then(void 0, t) : r
        }
        var l;
        "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))),
            function(e) {
                e[e.off = 0] = "off", e[e.error = 1] = "error", e[e.warning = 2] = "warning", e[e.info = 3] = "info", e[e.debug = 4] = "debug"
            }(l || (l = {}));
        var h = l.off,
            c = function() {
                function e(e) {
                    this.t = e
                }
                e.getLevel = function() {
                    return h
                }, e.setLevel = function(e) {
                    return h = l[e]
                };
                var t = e.prototype;
                return t.error = function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    this.i(console.error, l.error, t)
                }, t.warn = function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    this.i(console.warn, l.warning, t)
                }, t.info = function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    this.i(console.info, l.info, t)
                }, t.debug = function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    this.i(console.log, l.debug, t)
                }, t.i = function(t, r, i) {
                    r <= e.getLevel() && t.apply(console, ["[" + this.t + "] "].concat(i))
                }, e
            }(),
            d = C,
            f = _,
            p = y,
            m = D,
            g = E,
            v = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"), "g");

        function y(e, t) {
            for (var r, i = [], n = 0, s = 0, o = "", a = t && t.delimiter || "/", u = t && t.whitelist || void 0, l = !1; null !== (r = v.exec(e));) {
                var h = r[0],
                    c = r[1],
                    d = r.index;
                if (o += e.slice(s, d), s = d + h.length, c) o += c[1], l = !0;
                else {
                    var f = "",
                        p = r[2],
                        m = r[3],
                        g = r[4],
                        y = r[5];
                    if (!l && o.length) {
                        var _ = o.length - 1,
                            D = o[_];
                        (!u || u.indexOf(D) > -1) && (f = D, o = o.slice(0, _))
                    }
                    o && (i.push(o), o = "", l = !1);
                    var b = m || g,
                        E = f || a;
                    i.push({
                        name: p || n++,
                        prefix: f,
                        delimiter: E,
                        optional: "?" === y || "*" === y,
                        repeat: "+" === y || "*" === y,
                        pattern: b ? w(b) : "[^" + x(E === a ? E : E + a) + "]+?"
                    })
                }
            }
            return (o || s < e.length) && i.push(o + e.substr(s)), i
        }

        function _(e, t) {
            return function(r, i) {
                var n = e.exec(r);
                if (!n) return !1;
                for (var s = n[0], o = n.index, a = {}, u = i && i.decode || decodeURIComponent, l = 1; l < n.length; l++)
                    if (void 0 !== n[l]) {
                        var h = t[l - 1];
                        a[h.name] = h.repeat ? n[l].split(h.delimiter).map((function(e) {
                            return u(e, h)
                        })) : u(n[l], h)
                    }
                return {
                    path: s,
                    index: o,
                    params: a
                }
            }
        }

        function D(e, t) {
            for (var r = new Array(e.length), i = 0; i < e.length; i++) "object" == typeof e[i] && (r[i] = new RegExp("^(?:" + e[i].pattern + ")$", b(t)));
            return function(t, i) {
                for (var n = "", s = i && i.encode || encodeURIComponent, o = !i || !1 !== i.validate, a = 0; a < e.length; a++) {
                    var u = e[a];
                    if ("string" != typeof u) {
                        var l, h = t ? t[u.name] : void 0;
                        if (Array.isArray(h)) {
                            if (!u.repeat) throw new TypeError('Expected "' + u.name + '" to not repeat, but got array');
                            if (0 === h.length) {
                                if (u.optional) continue;
                                throw new TypeError('Expected "' + u.name + '" to not be empty')
                            }
                            for (var c = 0; c < h.length; c++) {
                                if (l = s(h[c], u), o && !r[a].test(l)) throw new TypeError('Expected all "' + u.name + '" to match "' + u.pattern + '"');
                                n += (0 === c ? u.prefix : u.delimiter) + l
                            }
                        } else if ("string" != typeof h && "number" != typeof h && "boolean" != typeof h) {
                            if (!u.optional) throw new TypeError('Expected "' + u.name + '" to be ' + (u.repeat ? "an array" : "a string"))
                        } else {
                            if (l = s(String(h), u), o && !r[a].test(l)) throw new TypeError('Expected "' + u.name + '" to match "' + u.pattern + '", but got "' + l + '"');
                            n += u.prefix + l
                        }
                    } else n += u
                }
                return n
            }
        }

        function x(e) {
            return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
        }

        function w(e) {
            return e.replace(/([=!:$/()])/g, "\\$1")
        }

        function b(e) {
            return e && e.sensitive ? "" : "i"
        }

        function E(e, t, r) {
            for (var i = (r = r || {}).strict, n = !1 !== r.start, s = !1 !== r.end, o = r.delimiter || "/", a = [].concat(r.endsWith || []).map(x).concat("$").join("|"), u = n ? "^" : "", l = 0; l < e.length; l++) {
                var h = e[l];
                if ("string" == typeof h) u += x(h);
                else {
                    var c = h.repeat ? "(?:" + h.pattern + ")(?:" + x(h.delimiter) + "(?:" + h.pattern + "))*" : h.pattern;
                    t && t.push(h), u += h.optional ? h.prefix ? "(?:" + x(h.prefix) + "(" + c + "))?" : "(" + c + ")?" : x(h.prefix) + "(" + c + ")"
                }
            }
            if (s) i || (u += "(?:" + x(o) + ")?"), u += "$" === a ? "$" : "(?=" + a + ")";
            else {
                var d = e[e.length - 1],
                    f = "string" == typeof d ? d[d.length - 1] === o : void 0 === d;
                i || (u += "(?:" + x(o) + "(?=" + a + "))?"), f || (u += "(?=" + x(o) + "|" + a + ")")
            }
            return new RegExp(u, b(r))
        }

        function C(e, t, r) {
            return e instanceof RegExp ? function(e, t) {
                if (!t) return e;
                var r = e.source.match(/\((?!\?)/g);
                if (r)
                    for (var i = 0; i < r.length; i++) t.push({
                        name: i,
                        prefix: null,
                        delimiter: null,
                        optional: !1,
                        repeat: !1,
                        pattern: null
                    });
                return e
            }(e, t) : Array.isArray(e) ? function(e, t, r) {
                for (var i = [], n = 0; n < e.length; n++) i.push(C(e[n], t, r).source);
                return new RegExp("(?:" + i.join("|") + ")", b(r))
            }(e, t, r) : function(e, t, r) {
                return E(y(e, r), t, r)
            }(e, t, r)
        }
        d.match = function(e, t) {
            var r = [];
            return _(C(e, r, t), r)
        }, d.regexpToFunction = f, d.parse = p, d.compile = function(e, t) {
            return D(y(e, t), t)
        }, d.tokensToFunction = m, d.tokensToRegExp = g;
        var A = {
                container: "container",
                history: "history",
                namespace: "namespace",
                prefix: "data-barba",
                prevent: "prevent",
                wrapper: "wrapper"
            },
            T = new(function() {
                function e() {
                    this.o = A, this.u = new DOMParser
                }
                var t = e.prototype;
                return t.toString = function(e) {
                    return e.outerHTML
                }, t.toDocument = function(e) {
                    return this.u.parseFromString(e, "text/html")
                }, t.toElement = function(e) {
                    var t = document.createElement("div");
                    return t.innerHTML = e, t
                }, t.getHtml = function(e) {
                    return void 0 === e && (e = document), this.toString(e.documentElement)
                }, t.getWrapper = function(e) {
                    return void 0 === e && (e = document), e.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]')
                }, t.getContainer = function(e) {
                    return void 0 === e && (e = document), e.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]')
                }, t.removeContainer = function(e) {
                    document.body.contains(e) && e.parentNode.removeChild(e)
                }, t.addContainer = function(e, t) {
                    var r = this.getContainer();
                    r ? this.s(e, r) : t.appendChild(e)
                }, t.getNamespace = function(e) {
                    void 0 === e && (e = document);
                    var t = e.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
                    return t ? t.getAttribute(this.o.prefix + "-" + this.o.namespace) : null
                }, t.getHref = function(e) {
                    if (e.tagName && "a" === e.tagName.toLowerCase()) {
                        if ("string" == typeof e.href) return e.href;
                        var t = e.getAttribute("href") || e.getAttribute("xlink:href");
                        if (t) return this.resolveUrl(t.baseVal || t)
                    }
                    return null
                }, t.resolveUrl = function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var i = t.length;
                    if (0 === i) throw new Error("resolveUrl requires at least one argument; got none.");
                    var n = document.createElement("base");
                    if (n.href = arguments[0], 1 === i) return n.href;
                    var s = document.getElementsByTagName("head")[0];
                    s.insertBefore(n, s.firstChild);
                    for (var o, a = document.createElement("a"), u = 1; u < i; u++) a.href = arguments[u], n.href = o = a.href;
                    return s.removeChild(n), o
                }, t.s = function(e, t) {
                    t.parentNode.insertBefore(e, t.nextSibling)
                }, e
            }()),
            F = new(function() {
                function e() {
                    this.h = [], this.v = -1
                }
                var i = e.prototype;
                return i.init = function(e, t) {
                    this.l = "barba";
                    var r = {
                        ns: t,
                        scroll: {
                            x: window.scrollX,
                            y: window.scrollY
                        },
                        url: e
                    };
                    this.h.push(r), this.v = 0;
                    var i = {
                        from: this.l,
                        index: 0,
                        states: [].concat(this.h)
                    };
                    window.history && window.history.replaceState(i, "", e)
                }, i.change = function(e, t, r) {
                    if (r && r.state) {
                        var i = r.state,
                            n = i.index;
                        t = this.m(this.v - n), this.replace(i.states), this.v = n
                    } else this.add(e, t);
                    return t
                }, i.add = function(e, t) {
                    var r = this.size,
                        i = this.p(t),
                        n = {
                            ns: "tmp",
                            scroll: {
                                x: window.scrollX,
                                y: window.scrollY
                            },
                            url: e
                        };
                    this.h.push(n), this.v = r;
                    var s = {
                        from: this.l,
                        index: r,
                        states: [].concat(this.h)
                    };
                    switch (i) {
                        case "push":
                            window.history && window.history.pushState(s, "", e);
                            break;
                        case "replace":
                            window.history && window.history.replaceState(s, "", e)
                    }
                }, i.update = function(e, t) {
                    var i = t || this.v,
                        n = r({}, this.get(i), {}, e);
                    this.set(i, n)
                }, i.remove = function(e) {
                    e ? this.h.splice(e, 1) : this.h.pop(), this.v--
                }, i.clear = function() {
                    this.h = [], this.v = -1
                }, i.replace = function(e) {
                    this.h = e
                }, i.get = function(e) {
                    return this.h[e]
                }, i.set = function(e, t) {
                    return this.h[e] = t
                }, i.p = function(e) {
                    var t = "push",
                        r = e,
                        i = A.prefix + "-" + A.history;
                    return r.hasAttribute && r.hasAttribute(i) && (t = r.getAttribute(i)), t
                }, i.m = function(e) {
                    return Math.abs(e) > 1 ? e > 0 ? "forward" : "back" : 0 === e ? "popstate" : e > 0 ? "back" : "forward"
                }, t(e, [{
                    key: "current",
                    get: function() {
                        return this.h[this.v]
                    }
                }, {
                    key: "state",
                    get: function() {
                        return this.h[this.h.length - 1]
                    }
                }, {
                    key: "previous",
                    get: function() {
                        return this.v < 1 ? null : this.h[this.v - 1]
                    }
                }, {
                    key: "size",
                    get: function() {
                        return this.h.length
                    }
                }]), e
            }()),
            P = function(e, t) {
                try {
                    var r = function() {
                        if (!t.next.html) return Promise.resolve(e).then((function(e) {
                            var r = t.next;
                            if (e) {
                                var i = T.toElement(e);
                                r.namespace = T.getNamespace(i), r.container = T.getContainer(i), r.html = e, F.update({
                                    ns: r.namespace
                                });
                                var n = T.toDocument(e);
                                document.title = n.title
                            }
                        }))
                    }();
                    return Promise.resolve(r && r.then ? r.then((function() {})) : void 0)
                } catch (e) {
                    return Promise.reject(e)
                }
            },
            M = d,
            S = {
                __proto__: null,
                update: P,
                nextTick: function() {
                    return new Promise((function(e) {
                        window.requestAnimationFrame(e)
                    }))
                },
                pathToRegexp: M
            },
            k = function() {
                return window.location.origin
            },
            R = function(e) {
                return void 0 === e && (e = window.location.href), O(e).port
            },
            O = function(e) {
                var t, r = e.match(/:\d+/);
                if (null === r) /^http/.test(e) && (t = 80), /^https/.test(e) && (t = 443);
                else {
                    var i = r[0].substring(1);
                    t = parseInt(i, 10)
                }
                var n, s = e.replace(k(), ""),
                    o = {},
                    a = s.indexOf("#");
                a >= 0 && (n = s.slice(a + 1), s = s.slice(0, a));
                var u = s.indexOf("?");
                return u >= 0 && (o = L(s.slice(u + 1)), s = s.slice(0, u)), {
                    hash: n,
                    path: s,
                    port: t,
                    query: o
                }
            },
            L = function(e) {
                return e.split("&").reduce((function(e, t) {
                    var r = t.split("=");
                    return e[r[0]] = r[1], e
                }), {})
            },
            I = function(e) {
                return void 0 === e && (e = window.location.href), e.replace(/(\/#.*|\/|#.*)$/, "")
            },
            B = {
                __proto__: null,
                getHref: function() {
                    return window.location.href
                },
                getOrigin: k,
                getPort: R,
                getPath: function(e) {
                    return void 0 === e && (e = window.location.href), O(e).path
                },
                parse: O,
                parseQuery: L,
                clean: I
            };

        function N(e, t, r) {
            return void 0 === t && (t = 2e3), new Promise((function(i, n) {
                var s = new XMLHttpRequest;
                s.onreadystatechange = function() {
                    if (s.readyState === XMLHttpRequest.DONE)
                        if (200 === s.status) i(s.responseText);
                        else if (s.status) {
                        var t = {
                            status: s.status,
                            statusText: s.statusText
                        };
                        r(e, t), n(t)
                    }
                }, s.ontimeout = function() {
                    var i = new Error("Timeout error [" + t + "]");
                    r(e, i), n(i)
                }, s.onerror = function() {
                    var t = new Error("Fetch error");
                    r(e, t), n(t)
                }, s.open("GET", e), s.timeout = t, s.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), s.setRequestHeader("x-barba", "yes"), s.send()
            }))
        }
        var U = function(e) {
            return !!e && ("object" == typeof e || "function" == typeof e) && "function" == typeof e.then
        };

        function z(e, t) {
            return void 0 === t && (t = {}),
                function() {
                    for (var r = arguments.length, i = new Array(r), n = 0; n < r; n++) i[n] = arguments[n];
                    var s = !1,
                        o = new Promise((function(r, n) {
                            t.async = function() {
                                return s = !0,
                                    function(e, t) {
                                        e ? n(e) : r(t)
                                    }
                            };
                            var o = e.apply(t, i);
                            s || (U(o) ? o.then(r, n) : r(o))
                        }));
                    return o
                }
        }
        var j = new(function(e) {
                function t() {
                    var t;
                    return (t = e.call(this) || this).logger = new c("@barba/core"), t.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeOnce", "once", "afterOnce", "before", "beforeLeave", "leave", "afterLeave", "beforeEnter", "enter", "afterEnter", "after"], t.registered = new Map, t.init(), t
                }
                i(t, e);
                var r = t.prototype;
                return r.init = function() {
                    var e = this;
                    this.registered.clear(), this.all.forEach((function(t) {
                        e[t] || (e[t] = function(r, i) {
                            e.registered.has(t) || e.registered.set(t, new Set), e.registered.get(t).add({
                                ctx: i || {},
                                fn: r
                            })
                        })
                    }))
                }, r.do = function(e) {
                    for (var t = this, r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) i[n - 1] = arguments[n];
                    if (this.registered.has(e)) {
                        var s = Promise.resolve();
                        return this.registered.get(e).forEach((function(e) {
                            s = s.then((function() {
                                return z(e.fn, e.ctx).apply(void 0, i)
                            }))
                        })), s.catch((function(r) {
                            t.logger.debug("Hook error [" + e + "]"), t.logger.error(r)
                        }))
                    }
                    return Promise.resolve()
                }, r.clear = function() {
                    var e = this;
                    this.all.forEach((function(t) {
                        delete e[t]
                    })), this.init()
                }, r.help = function() {
                    this.logger.info("Available hooks: " + this.all.join(","));
                    var e = [];
                    this.registered.forEach((function(t, r) {
                        return e.push(r)
                    })), this.logger.info("Registered hooks: " + e.join(","))
                }, t
            }((function() {}))),
            V = function() {
                function e(e) {
                    if (this.P = [], "boolean" == typeof e) this.g = e;
                    else {
                        var t = Array.isArray(e) ? e : [e];
                        this.P = t.map((function(e) {
                            return M(e)
                        }))
                    }
                }
                return e.prototype.checkHref = function(e) {
                    if ("boolean" == typeof this.g) return this.g;
                    var t = O(e).path;
                    return this.P.some((function(e) {
                        return null !== e.exec(t)
                    }))
                }, e
            }(),
            Y = function(e) {
                function t(t) {
                    var r;
                    return (r = e.call(this, t) || this).k = new Map, r
                }
                i(t, e);
                var n = t.prototype;
                return n.set = function(e, t, r) {
                    return this.k.set(e, {
                        action: r,
                        request: t
                    }), {
                        action: r,
                        request: t
                    }
                }, n.get = function(e) {
                    return this.k.get(e)
                }, n.getRequest = function(e) {
                    return this.k.get(e).request
                }, n.getAction = function(e) {
                    return this.k.get(e).action
                }, n.has = function(e) {
                    return !this.checkHref(e) && this.k.has(e)
                }, n.delete = function(e) {
                    return this.k.delete(e)
                }, n.update = function(e, t) {
                    var i = r({}, this.k.get(e), {}, t);
                    return this.k.set(e, i), i
                }, t
            }(V),
            G = function() {
                return !window.history.pushState
            },
            W = function(e) {
                return !e.el || !e.href
            },
            X = function(e) {
                var t = e.event;
                return t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey
            },
            H = function(e) {
                var t = e.el;
                return t.hasAttribute("target") && "_blank" === t.target
            },
            q = function(e) {
                var t = e.el;
                return void 0 !== t.protocol && window.location.protocol !== t.protocol || void 0 !== t.hostname && window.location.hostname !== t.hostname
            },
            Z = function(e) {
                var t = e.el;
                return void 0 !== t.port && R() !== R(t.href)
            },
            Q = function(e) {
                var t = e.el;
                return t.getAttribute && "string" == typeof t.getAttribute("download")
            },
            J = function(e) {
                return e.el.hasAttribute(A.prefix + "-" + A.prevent)
            },
            K = function(e) {
                return Boolean(e.el.closest("[" + A.prefix + "-" + A.prevent + '="all"]'))
            },
            $ = function(e) {
                var t = e.href;
                return I(t) === I() && R(t) === R()
            },
            ee = function(e) {
                function t(t) {
                    var r;
                    return (r = e.call(this, t) || this).suite = [], r.tests = new Map, r.init(), r
                }
                i(t, e);
                var r = t.prototype;
                return r.init = function() {
                    this.add("pushState", G), this.add("exists", W), this.add("newTab", X), this.add("blank", H), this.add("corsDomain", q), this.add("corsPort", Z), this.add("download", Q), this.add("preventSelf", J), this.add("preventAll", K), this.add("sameUrl", $, !1)
                }, r.add = function(e, t, r) {
                    void 0 === r && (r = !0), this.tests.set(e, t), r && this.suite.push(e)
                }, r.run = function(e, t, r, i) {
                    return this.tests.get(e)({
                        el: t,
                        event: r,
                        href: i
                    })
                }, r.checkLink = function(e, t, r) {
                    var i = this;
                    return this.suite.some((function(n) {
                        return i.run(n, e, t, r)
                    }))
                }, t
            }(V),
            te = function(e) {
                function t(r, i) {
                    var n;
                    void 0 === i && (i = "Barba error");
                    for (var s = arguments.length, o = new Array(s > 2 ? s - 2 : 0), a = 2; a < s; a++) o[a - 2] = arguments[a];
                    return (n = e.call.apply(e, [this].concat(o)) || this).error = r, n.label = i, Error.captureStackTrace && Error.captureStackTrace(function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(n), t), n.name = "BarbaError", n
                }
                return i(t, e), t
            }(a(Error)),
            re = function() {
                function e(e) {
                    void 0 === e && (e = []), this.logger = new c("@barba/core"), this.all = [], this.page = [], this.once = [], this.A = [{
                        name: "namespace",
                        type: "strings"
                    }, {
                        name: "custom",
                        type: "function"
                    }], e && (this.all = this.all.concat(e)), this.update()
                }
                var t = e.prototype;
                return t.add = function(e, t) {
                    switch (e) {
                        case "rule":
                            this.A.splice(t.position || 0, 0, t.value);
                            break;
                        case "transition":
                        default:
                            this.all.push(t)
                    }
                    this.update()
                }, t.resolve = function(e, t) {
                    var r = this;
                    void 0 === t && (t = {});
                    var i = t.once ? this.once : this.page;
                    i = i.filter(t.self ? function(e) {
                        return e.name && "self" === e.name
                    } : function(e) {
                        return !e.name || "self" !== e.name
                    });
                    var n = new Map,
                        s = i.find((function(i) {
                            var s = !0,
                                o = {};
                            return !(!t.self || "self" !== i.name) || (r.A.reverse().forEach((function(t) {
                                s && (s = r.R(i, t, e, o), i.from && i.to && (s = r.R(i, t, e, o, "from") && r.R(i, t, e, o, "to")), i.from && !i.to && (s = r.R(i, t, e, o, "from")), !i.from && i.to && (s = r.R(i, t, e, o, "to")))
                            })), n.set(i, o), s)
                        })),
                        o = n.get(s),
                        a = [];
                    if (a.push(t.once ? "once" : "page"), t.self && a.push("self"), o) {
                        var u, l = [s];
                        Object.keys(o).length > 0 && l.push(o), (u = this.logger).info.apply(u, ["Transition found [" + a.join(",") + "]"].concat(l))
                    } else this.logger.info("No transition found [" + a.join(",") + "]");
                    return s
                }, t.update = function() {
                    var e = this;
                    this.all = this.all.map((function(t) {
                        return e.T(t)
                    })).sort((function(e, t) {
                        return e.priority - t.priority
                    })).reverse().map((function(e) {
                        return delete e.priority, e
                    })), this.page = this.all.filter((function(e) {
                        return void 0 !== e.leave || void 0 !== e.enter
                    })), this.once = this.all.filter((function(e) {
                        return void 0 !== e.once
                    }))
                }, t.R = function(e, t, r, i, n) {
                    var s = !0,
                        o = !1,
                        a = e,
                        u = t.name,
                        l = u,
                        h = u,
                        c = u,
                        d = n ? a[n] : a,
                        f = "to" === n ? r.next : r.current;
                    if (n ? d && d[u] : d[u]) {
                        switch (t.type) {
                            case "strings":
                            default:
                                var p = Array.isArray(d[l]) ? d[l] : [d[l]];
                                f[l] && -1 !== p.indexOf(f[l]) && (o = !0), -1 === p.indexOf(f[l]) && (s = !1);
                                break;
                            case "object":
                                var m = Array.isArray(d[h]) ? d[h] : [d[h]];
                                f[h] ? (f[h].name && -1 !== m.indexOf(f[h].name) && (o = !0), -1 === m.indexOf(f[h].name) && (s = !1)) : s = !1;
                                break;
                            case "function":
                                d[c](r) ? o = !0 : s = !1
                        }
                        o && (n ? (i[n] = i[n] || {}, i[n][u] = a[n][u]) : i[u] = a[u])
                    }
                    return s
                }, t.O = function(e, t, r) {
                    var i = 0;
                    return (e[t] || e.from && e.from[t] || e.to && e.to[t]) && (i += Math.pow(10, r), e.from && e.from[t] && (i += 1), e.to && e.to[t] && (i += 2)), i
                }, t.T = function(e) {
                    var t = this;
                    e.priority = 0;
                    var r = 0;
                    return this.A.forEach((function(i, n) {
                        r += t.O(e, i.name, n + 1)
                    })), e.priority = r, e
                }, e
            }(),
            ie = function() {
                function e(e) {
                    void 0 === e && (e = []), this.logger = new c("@barba/core"), this.S = !1, this.store = new re(e)
                }
                var r = e.prototype;
                return r.get = function(e, t) {
                    return this.store.resolve(e, t)
                }, r.doOnce = function(e) {
                    var t = e.data,
                        r = e.transition;
                    try {
                        var i = function() {
                                n.S = !1
                            },
                            n = this,
                            s = r || {};
                        n.S = !0;
                        var o = u((function() {
                            return Promise.resolve(n.j("beforeOnce", t, s)).then((function() {
                                return Promise.resolve(n.once(t, s)).then((function() {
                                    return Promise.resolve(n.j("afterOnce", t, s)).then((function() {}))
                                }))
                            }))
                        }), (function(e) {
                            n.S = !1, n.logger.debug("Transition error [before/after/once]"), n.logger.error(e)
                        }));
                        return Promise.resolve(o && o.then ? o.then(i) : i())
                    } catch (e) {
                        return Promise.reject(e)
                    }
                }, r.doPage = function(e) {
                    var t = e.data,
                        r = e.transition,
                        i = e.page,
                        n = e.wrapper;
                    try {
                        var s = function(e) {
                                if (o) return e;
                                a.S = !1
                            },
                            o = !1,
                            a = this,
                            l = r || {},
                            h = !0 === l.sync || !1;
                        a.S = !0;
                        var c = u((function() {
                            function e() {
                                return Promise.resolve(a.j("before", t, l)).then((function() {
                                    function e(e) {
                                        return Promise.resolve(a.remove(t)).then((function() {
                                            return Promise.resolve(a.j("after", t, l)).then((function() {}))
                                        }))
                                    }
                                    var r = function() {
                                        if (h) return u((function() {
                                            return Promise.resolve(a.add(t, n)).then((function() {
                                                return Promise.resolve(a.j("beforeLeave", t, l)).then((function() {
                                                    return Promise.resolve(a.j("beforeEnter", t, l)).then((function() {
                                                        return Promise.resolve(Promise.all([a.leave(t, l), a.enter(t, l)])).then((function() {
                                                            return Promise.resolve(a.j("afterLeave", t, l)).then((function() {
                                                                return Promise.resolve(a.j("afterEnter", t, l)).then((function() {}))
                                                            }))
                                                        }))
                                                    }))
                                                }))
                                            }))
                                        }), (function(e) {
                                            if (a.M(e)) throw new te(e, "Transition error [sync]")
                                        }));
                                        var e = function(e) {
                                                return u((function() {
                                                    var e = function() {
                                                        if (!1 !== r) return Promise.resolve(a.add(t, n)).then((function() {
                                                            return Promise.resolve(a.j("beforeEnter", t, l)).then((function() {
                                                                return Promise.resolve(a.enter(t, l, r)).then((function() {
                                                                    return Promise.resolve(a.j("afterEnter", t, l)).then((function() {}))
                                                                }))
                                                            }))
                                                        }))
                                                    }();
                                                    if (e && e.then) return e.then((function() {}))
                                                }), (function(e) {
                                                    if (a.M(e)) throw new te(e, "Transition error [before/after/enter]")
                                                }))
                                            },
                                            r = !1,
                                            s = u((function() {
                                                return Promise.resolve(a.j("beforeLeave", t, l)).then((function() {
                                                    return Promise.resolve(Promise.all([a.leave(t, l), P(i, t)]).then((function(e) {
                                                        return e[0]
                                                    }))).then((function(e) {
                                                        return r = e, Promise.resolve(a.j("afterLeave", t, l)).then((function() {}))
                                                    }))
                                                }))
                                            }), (function(e) {
                                                if (a.M(e)) throw new te(e, "Transition error [before/after/leave]")
                                            }));
                                        return s && s.then ? s.then(e) : e()
                                    }();
                                    return r && r.then ? r.then(e) : e()
                                }))
                            }
                            var r = function() {
                                if (h) return Promise.resolve(P(i, t)).then((function() {}))
                            }();
                            return r && r.then ? r.then(e) : e()
                        }), (function(e) {
                            if (a.S = !1, e.name && "BarbaError" === e.name) throw a.logger.debug(e.label), a.logger.error(e.error), e;
                            throw a.logger.debug("Transition error [page]"), a.logger.error(e), e
                        }));
                        return Promise.resolve(c && c.then ? c.then(s) : s(c))
                    } catch (e) {
                        return Promise.reject(e)
                    }
                }, r.once = function(e, t) {
                    try {
                        return Promise.resolve(j.do("once", e, t)).then((function() {
                            return t.once ? z(t.once, t)(e) : Promise.resolve()
                        }))
                    } catch (e) {
                        return Promise.reject(e)
                    }
                }, r.leave = function(e, t) {
                    try {
                        return Promise.resolve(j.do("leave", e, t)).then((function() {
                            return t.leave ? z(t.leave, t)(e) : Promise.resolve()
                        }))
                    } catch (e) {
                        return Promise.reject(e)
                    }
                }, r.enter = function(e, t, r) {
                    try {
                        return Promise.resolve(j.do("enter", e, t)).then((function() {
                            return t.enter ? z(t.enter, t)(e, r) : Promise.resolve()
                        }))
                    } catch (e) {
                        return Promise.reject(e)
                    }
                }, r.add = function(e, t) {
                    try {
                        return T.addContainer(e.next.container, t), j.do("nextAdded", e), Promise.resolve()
                    } catch (e) {
                        return Promise.reject(e)
                    }
                }, r.remove = function(e) {
                    try {
                        return T.removeContainer(e.current.container), j.do("currentRemoved", e), Promise.resolve()
                    } catch (e) {
                        return Promise.reject(e)
                    }
                }, r.M = function(e) {
                    return e.message ? !/Timeout error|Fetch error/.test(e.message) : !e.status
                }, r.j = function(e, t, r) {
                    try {
                        return Promise.resolve(j.do(e, t, r)).then((function() {
                            return r[e] ? z(r[e], r)(t) : Promise.resolve()
                        }))
                    } catch (e) {
                        return Promise.reject(e)
                    }
                }, t(e, [{
                    key: "isRunning",
                    get: function() {
                        return this.S
                    },
                    set: function(e) {
                        this.S = e
                    }
                }, {
                    key: "hasOnce",
                    get: function() {
                        return this.store.once.length > 0
                    }
                }, {
                    key: "hasSelf",
                    get: function() {
                        return this.store.all.some((function(e) {
                            return "self" === e.name
                        }))
                    }
                }, {
                    key: "shouldWait",
                    get: function() {
                        return this.store.all.some((function(e) {
                            return e.to && !e.to.route || e.sync
                        }))
                    }
                }]), e
            }(),
            ne = function() {
                function e(e) {
                    var t = this;
                    this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"], this.byNamespace = new Map, 0 !== e.length && (e.forEach((function(e) {
                        t.byNamespace.set(e.namespace, e)
                    })), this.names.forEach((function(e) {
                        j[e](t.L(e))
                    })))
                }
                return e.prototype.L = function(e) {
                    var t = this;
                    return function(r) {
                        var i = e.match(/enter/i) ? r.next : r.current,
                            n = t.byNamespace.get(i.namespace);
                        return n && n[e] ? z(n[e], n)(r) : Promise.resolve()
                    }
                }, e
            }();
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(e) {
            var t = this;
            do {
                if (t.matches(e)) return t;
                t = t.parentElement || t.parentNode
            } while (null !== t && 1 === t.nodeType);
            return null
        });
        var se = {
            container: null,
            html: "",
            namespace: "",
            url: {
                hash: "",
                href: "",
                path: "",
                port: null,
                query: {}
            }
        };
        return new(function() {
            function e() {
                this.version = "2.9.7", this.schemaPage = se, this.Logger = c, this.logger = new c("@barba/core"), this.plugins = [], this.hooks = j, this.dom = T, this.helpers = S, this.history = F, this.request = N, this.url = B
            }
            var i = e.prototype;
            return i.use = function(e, t) {
                var r = this.plugins;
                r.indexOf(e) > -1 ? this.logger.warn("Plugin [" + e.name + "] already installed.") : "function" == typeof e.install ? (e.install(this, t), r.push(e)) : this.logger.warn("Plugin [" + e.name + '] has no "install" method.')
            }, i.init = function(e) {
                var t = void 0 === e ? {} : e,
                    i = t.transitions,
                    n = void 0 === i ? [] : i,
                    s = t.views,
                    o = void 0 === s ? [] : s,
                    a = t.schema,
                    u = void 0 === a ? A : a,
                    l = t.requestError,
                    h = t.timeout,
                    d = void 0 === h ? 2e3 : h,
                    f = t.cacheIgnore,
                    p = void 0 !== f && f,
                    m = t.prefetchIgnore,
                    g = void 0 !== m && m,
                    v = t.preventRunning,
                    y = void 0 !== v && v,
                    _ = t.prevent,
                    D = void 0 === _ ? null : _,
                    x = t.debug,
                    w = t.logLevel;
                if (c.setLevel(!0 === (void 0 !== x && x) ? "debug" : void 0 === w ? "off" : w), this.logger.info(this.version), Object.keys(u).forEach((function(e) {
                        A[e] && (A[e] = u[e])
                    })), this.$ = l, this.timeout = d, this.cacheIgnore = p, this.prefetchIgnore = g, this.preventRunning = y, this._ = this.dom.getWrapper(), !this._) throw new Error("[@barba/core] No Barba wrapper found");
                this._.setAttribute("aria-live", "polite"), this.q();
                var b = this.data.current;
                if (!b.container) throw new Error("[@barba/core] No Barba container found");
                if (this.cache = new Y(p), this.prevent = new ee(g), this.transitions = new ie(n), this.views = new ne(o), null !== D) {
                    if ("function" != typeof D) throw new Error("[@barba/core] Prevent should be a function");
                    this.prevent.add("preventCustom", D)
                }
                this.history.init(b.url.href, b.namespace), this.B = this.B.bind(this), this.U = this.U.bind(this), this.D = this.D.bind(this), this.F(), this.plugins.forEach((function(e) {
                    return e.init()
                }));
                var E = this.data;
                E.trigger = "barba", E.next = E.current, E.current = r({}, this.schemaPage), this.hooks.do("ready", E), this.once(E), this.q()
            }, i.destroy = function() {
                this.q(), this.H(), this.history.clear(), this.hooks.clear(), this.plugins = []
            }, i.force = function(e) {
                window.location.assign(e)
            }, i.go = function(e, t, r) {
                var i;
                if (void 0 === t && (t = "barba"), this.transitions.isRunning) this.force(e);
                else if (!(i = "popstate" === t ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(e) : this.prevent.run("sameUrl", null, null, e)) || this.transitions.hasSelf) return t = this.history.change(e, t, r), r && (r.stopPropagation(), r.preventDefault()), this.page(e, t, i)
            }, i.once = function(e) {
                try {
                    var t = this;
                    return Promise.resolve(t.hooks.do("beforeEnter", e)).then((function() {
                        function r() {
                            return Promise.resolve(t.hooks.do("afterEnter", e)).then((function() {}))
                        }
                        var i = function() {
                            if (t.transitions.hasOnce) {
                                var r = t.transitions.get(e, {
                                    once: !0
                                });
                                return Promise.resolve(t.transitions.doOnce({
                                    transition: r,
                                    data: e
                                })).then((function() {}))
                            }
                        }();
                        return i && i.then ? i.then(r) : r()
                    }))
                } catch (e) {
                    return Promise.reject(e)
                }
            }, i.page = function(e, t, i) {
                try {
                    var n = function() {
                            var e = s.data;
                            return Promise.resolve(s.hooks.do("page", e)).then((function() {
                                var t = u((function() {
                                    var t = s.transitions.get(e, {
                                        once: !1,
                                        self: i
                                    });
                                    return Promise.resolve(s.transitions.doPage({
                                        data: e,
                                        page: o,
                                        transition: t,
                                        wrapper: s._
                                    })).then((function() {
                                        s.q()
                                    }))
                                }), (function() {
                                    0 === c.getLevel() && s.force(e.current.url.href)
                                }));
                                if (t && t.then) return t.then((function() {}))
                            }))
                        },
                        s = this;
                    s.data.next.url = r({
                        href: e
                    }, s.url.parse(e)), s.data.trigger = t;
                    var o = s.cache.has(e) ? s.cache.update(e, {
                            action: "click"
                        }).request : s.cache.set(e, s.request(e, s.timeout, s.onRequestError.bind(s, t)), "click").request,
                        a = function() {
                            if (s.transitions.shouldWait) return Promise.resolve(P(o, s.data)).then((function() {}))
                        }();
                    return Promise.resolve(a && a.then ? a.then(n) : n())
                } catch (e) {
                    return Promise.reject(e)
                }
            }, i.onRequestError = function(e) {
                this.transitions.isRunning = !1;
                for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
                var n = r[0],
                    s = r[1],
                    o = this.cache.getAction(n);
                return this.cache.delete(n), !(this.$ && !1 === this.$(e, o, n, s) || ("click" === o && this.force(n), 1))
            }, i.prefetch = function(e) {
                var t = this;
                this.cache.has(e) || this.cache.set(e, this.request(e, this.timeout, this.onRequestError.bind(this, "barba")).catch((function(e) {
                    t.logger.error(e)
                })), "prefetch")
            }, i.F = function() {
                !0 !== this.prefetchIgnore && (document.addEventListener("mouseover", this.B), document.addEventListener("touchstart", this.B)), document.addEventListener("click", this.U), window.addEventListener("popstate", this.D)
            }, i.H = function() {
                !0 !== this.prefetchIgnore && (document.removeEventListener("mouseover", this.B), document.removeEventListener("touchstart", this.B)), document.removeEventListener("click", this.U), window.removeEventListener("popstate", this.D)
            }, i.B = function(e) {
                var t = this,
                    r = this.I(e);
                if (r) {
                    var i = this.dom.getHref(r);
                    this.prevent.checkHref(i) || this.cache.has(i) || this.cache.set(i, this.request(i, this.timeout, this.onRequestError.bind(this, r)).catch((function(e) {
                        t.logger.error(e)
                    })), "enter")
                }
            }, i.U = function(e) {
                var t = this.I(e);
                if (t) return this.transitions.isRunning && this.preventRunning ? (e.preventDefault(), void e.stopPropagation()) : void this.go(this.dom.getHref(t), t, e)
            }, i.D = function(e) {
                this.go(this.url.getHref(), "popstate", e)
            }, i.I = function(e) {
                for (var t = e.target; t && !this.dom.getHref(t);) t = t.parentNode;
                if (t && !this.prevent.checkLink(t, e, this.dom.getHref(t))) return t
            }, i.q = function() {
                var e = this.url.getHref(),
                    t = {
                        container: this.dom.getContainer(),
                        html: this.dom.getHtml(),
                        namespace: this.dom.getNamespace(),
                        url: r({
                            href: e
                        }, this.url.parse(e))
                    };
                this.C = {
                    current: t,
                    next: r({}, this.schemaPage),
                    trigger: void 0
                }, this.hooks.do("reset", this.data)
            }, t(e, [{
                key: "data",
                get: function() {
                    return this.C
                }
            }, {
                key: "wrapper",
                get: function() {
                    return this._
                }
            }]), e
        }())
    }()
}, function(e, t, r) {
    e.exports = function() {
        "use strict";

        function e() {
            return (e = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
                }
                return e
            }).apply(this, arguments)
        }
        var t = "undefined" != typeof window,
            r = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
            i = t && "IntersectionObserver" in window,
            n = t && "classList" in document.createElement("p"),
            s = t && window.devicePixelRatio > 1,
            o = {
                elements_selector: ".lazy",
                container: r || t ? document : null,
                threshold: 300,
                thresholds: null,
                data_src: "src",
                data_srcset: "srcset",
                data_sizes: "sizes",
                data_bg: "bg",
                data_bg_hidpi: "bg-hidpi",
                data_bg_multi: "bg-multi",
                data_bg_multi_hidpi: "bg-multi-hidpi",
                data_poster: "poster",
                class_applied: "applied",
                class_loading: "loading",
                class_loaded: "loaded",
                class_error: "error",
                class_entered: "entered",
                class_exited: "exited",
                unobserve_completed: !0,
                unobserve_entered: !1,
                cancel_on_exit: !0,
                callback_enter: null,
                callback_exit: null,
                callback_applied: null,
                callback_loading: null,
                callback_loaded: null,
                callback_error: null,
                callback_finish: null,
                callback_cancel: null,
                use_native: !1
            },
            a = function(t) {
                return e({}, o, t)
            },
            u = function(e, t) {
                var r, i = "LazyLoad::Initialized",
                    n = new e(t);
                try {
                    r = new CustomEvent(i, {
                        detail: {
                            instance: n
                        }
                    })
                } catch (e) {
                    (r = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
                        instance: n
                    })
                }
                window.dispatchEvent(r)
            },
            l = "loading",
            h = "loaded",
            c = "applied",
            d = "error",
            f = "native",
            p = function(e, t) {
                return e.getAttribute("data-" + t)
            },
            m = function(e) {
                return p(e, "ll-status")
            },
            g = function(e, t) {
                return function(e, t, r) {
                    var i = "data-ll-status";
                    null !== r ? e.setAttribute(i, r) : e.removeAttribute(i)
                }(e, 0, t)
            },
            v = function(e) {
                return g(e, null)
            },
            y = function(e) {
                return null === m(e)
            },
            _ = function(e) {
                return m(e) === f
            },
            D = [l, h, c, d],
            x = function(e, t, r, i) {
                e && (void 0 === i ? void 0 === r ? e(t) : e(t, r) : e(t, r, i))
            },
            w = function(e, t) {
                n ? e.classList.add(t) : e.className += (e.className ? " " : "") + t
            },
            b = function(e, t) {
                n ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
            },
            E = function(e) {
                return e.llTempImage
            },
            C = function(e, t) {
                if (t) {
                    var r = t._observer;
                    r && r.unobserve(e)
                }
            },
            A = function(e, t) {
                e && (e.loadingCount += t)
            },
            T = function(e, t) {
                e && (e.toLoadCount = t)
            },
            F = function(e) {
                for (var t, r = [], i = 0; t = e.children[i]; i += 1) "SOURCE" === t.tagName && r.push(t);
                return r
            },
            P = function(e, t, r) {
                r && e.setAttribute(t, r)
            },
            M = function(e, t) {
                e.removeAttribute(t)
            },
            S = function(e) {
                return !!e.llOriginalAttrs
            },
            k = function(e) {
                if (!S(e)) {
                    var t = {};
                    t.src = e.getAttribute("src"), t.srcset = e.getAttribute("srcset"), t.sizes = e.getAttribute("sizes"), e.llOriginalAttrs = t
                }
            },
            R = function(e) {
                if (S(e)) {
                    var t = e.llOriginalAttrs;
                    P(e, "src", t.src), P(e, "srcset", t.srcset), P(e, "sizes", t.sizes)
                }
            },
            O = function(e, t) {
                P(e, "sizes", p(e, t.data_sizes)), P(e, "srcset", p(e, t.data_srcset)), P(e, "src", p(e, t.data_src))
            },
            L = function(e) {
                M(e, "src"), M(e, "srcset"), M(e, "sizes")
            },
            I = function(e, t) {
                var r = e.parentNode;
                r && "PICTURE" === r.tagName && F(r).forEach(t)
            },
            B = {
                IMG: function(e, t) {
                    I(e, (function(e) {
                        k(e), O(e, t)
                    })), k(e), O(e, t)
                },
                IFRAME: function(e, t) {
                    P(e, "src", p(e, t.data_src))
                },
                VIDEO: function(e, t) {
                    ! function(e, r) {
                        F(e).forEach((function(e) {
                            P(e, "src", p(e, t.data_src))
                        }))
                    }(e), P(e, "poster", p(e, t.data_poster)), P(e, "src", p(e, t.data_src)), e.load()
                }
            },
            N = function(e, t) {
                var r = B[e.tagName];
                r && r(e, t)
            },
            U = function(e, t, r) {
                A(r, 1), w(e, t.class_loading), g(e, l), x(t.callback_loading, e, r)
            },
            z = ["IMG", "IFRAME", "VIDEO"],
            j = function(e, t) {
                !t || function(e) {
                    return e.loadingCount > 0
                }(t) || function(e) {
                    return e.toLoadCount > 0
                }(t) || x(e.callback_finish, t)
            },
            V = function(e, t, r) {
                e.addEventListener(t, r), e.llEvLisnrs[t] = r
            },
            Y = function(e, t, r) {
                e.removeEventListener(t, r)
            },
            G = function(e) {
                return !!e.llEvLisnrs
            },
            W = function(e) {
                if (G(e)) {
                    var t = e.llEvLisnrs;
                    for (var r in t) {
                        var i = t[r];
                        Y(e, r, i)
                    }
                    delete e.llEvLisnrs
                }
            },
            X = function(e, t, r) {
                ! function(e) {
                    delete e.llTempImage
                }(e), A(r, -1),
                    function(e) {
                        e && (e.toLoadCount -= 1)
                    }(r), b(e, t.class_loading), t.unobserve_completed && C(e, r)
            },
            H = function(e, t, r) {
                var i = E(e) || e;
                G(i) || function(e, t, r) {
                    G(e) || (e.llEvLisnrs = {});
                    var i = "VIDEO" === e.tagName ? "loadeddata" : "load";
                    V(e, i, t), V(e, "error", r)
                }(i, (function(n) {
                    ! function(e, t, r, i) {
                        var n = _(t);
                        X(t, r, i), w(t, r.class_loaded), g(t, h), x(r.callback_loaded, t, i), n || j(r, i)
                    }(0, e, t, r), W(i)
                }), (function(n) {
                    ! function(e, t, r, i) {
                        var n = _(t);
                        X(t, r, i), w(t, r.class_error), g(t, d), x(r.callback_error, t, i), n || j(r, i)
                    }(0, e, t, r), W(i)
                }))
            },
            q = function(e, t, r) {
                ! function(e) {
                    return z.indexOf(e.tagName) > -1
                }(e) ? function(e, t, r) {
                    ! function(e) {
                        e.llTempImage = document.createElement("IMG")
                    }(e), H(e, t, r),
                        function(e, t, r) {
                            var i = p(e, t.data_bg),
                                n = p(e, t.data_bg_hidpi),
                                o = s && n ? n : i;
                            o && (e.style.backgroundImage = 'url("'.concat(o, '")'), E(e).setAttribute("src", o), U(e, t, r))
                        }(e, t, r),
                        function(e, t, r) {
                            var i = p(e, t.data_bg_multi),
                                n = p(e, t.data_bg_multi_hidpi),
                                o = s && n ? n : i;
                            o && (e.style.backgroundImage = o, function(e, t, r) {
                                w(e, t.class_applied), g(e, c), t.unobserve_completed && C(e, t), x(t.callback_applied, e, r)
                            }(e, t, r))
                        }(e, t, r)
                }(e, t, r) : function(e, t, r) {
                    H(e, t, r), N(e, t), U(e, t, r)
                }(e, t, r)
            },
            Z = ["IMG", "IFRAME"],
            Q = function(e) {
                return e.use_native && "loading" in HTMLImageElement.prototype
            },
            J = function(e) {
                return Array.prototype.slice.call(e)
            },
            K = function(e) {
                return e.container.querySelectorAll(e.elements_selector)
            },
            $ = function(e) {
                return function(e) {
                    return m(e) === d
                }(e)
            },
            ee = function(e, t) {
                return function(e) {
                    return J(e).filter(y)
                }(e || K(t))
            },
            te = function(e, r) {
                var n = a(e);
                this._settings = n, this.loadingCount = 0,
                    function(e, t) {
                        i && !Q(e) && (t._observer = new IntersectionObserver((function(r) {
                            ! function(e, t, r) {
                                e.forEach((function(e) {
                                    return function(e) {
                                        return e.isIntersecting || e.intersectionRatio > 0
                                    }(e) ? function(e, t, r, i) {
                                        g(e, "entered"), w(e, r.class_entered), b(e, r.class_exited),
                                            function(e, t, r) {
                                                t.unobserve_entered && C(e, r)
                                            }(e, r, i), x(r.callback_enter, e, t, i),
                                            function(e) {
                                                return D.indexOf(m(e)) >= 0
                                            }(e) || q(e, r, i)
                                    }(e.target, e, t, r) : function(e, t, r, i) {
                                        y(e) || (w(e, r.class_exited), function(e, t, r, i) {
                                            r.cancel_on_exit && function(e) {
                                                return m(e) === l
                                            }(e) && "IMG" === e.tagName && (W(e), function(e) {
                                                I(e, (function(e) {
                                                    L(e)
                                                })), L(e)
                                            }(e), function(e) {
                                                I(e, (function(e) {
                                                    R(e)
                                                })), R(e)
                                            }(e), b(e, r.class_loading), A(i, -1), v(e), x(r.callback_cancel, e, t, i))
                                        }(e, t, r, i), x(r.callback_exit, e, t, i))
                                    }(e.target, e, t, r)
                                }))
                            }(r, e, t)
                        }), function(e) {
                            return {
                                root: e.container === document ? null : e.container,
                                rootMargin: e.thresholds || e.threshold + "px"
                            }
                        }(e)))
                    }(n, this),
                    function(e, r) {
                        t && window.addEventListener("online", (function() {
                            ! function(e, t) {
                                var r;
                                (r = K(e), J(r).filter($)).forEach((function(t) {
                                    b(t, e.class_error), v(t)
                                })), t.update()
                            }(e, r)
                        }))
                    }(n, this), this.update(r)
            };
        return te.prototype = {
            update: function(e) {
                var t, n, s = this._settings,
                    o = ee(e, s);
                T(this, o.length), !r && i ? Q(s) ? function(e, t, r) {
                    e.forEach((function(e) {
                        -1 !== Z.indexOf(e.tagName) && (e.setAttribute("loading", "lazy"), function(e, t, r) {
                            H(e, t, r), N(e, t), g(e, f)
                        }(e, t, r))
                    })), T(r, 0)
                }(o, s, this) : (n = o, function(e) {
                    e.disconnect()
                }(t = this._observer), function(e, t) {
                    t.forEach((function(t) {
                        e.observe(t)
                    }))
                }(t, n)) : this.loadAll(o)
            },
            destroy: function() {
                this._observer && this._observer.disconnect(), K(this._settings).forEach((function(e) {
                    delete e.llOriginalAttrs
                })), delete this._observer, delete this._settings, delete this.loadingCount, delete this.toLoadCount
            },
            loadAll: function(e) {
                var t = this,
                    r = this._settings;
                ee(e, r).forEach((function(e) {
                    C(e, t), q(e, r, t)
                }))
            }
        }, te.load = function(e, t) {
            var r = a(t);
            q(e, r)
        }, te.resetStatus = function(e) {
            v(e)
        }, t && function(e, t) {
            if (t)
                if (t.length)
                    for (var r, i = 0; r = t[i]; i += 1) u(e, r);
                else u(e, t)
        }(te, window.lazyLoadOptions), te
    }()
}, function(e, t, r) {
    "use strict";
    (function(e, r) { /*! @vimeo/player v2.14.1 | (c) 2020 Vimeo | MIT License | https://github.com/vimeo/player.js */
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function n(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var s = void 0 !== e && "[object global]" === {}.toString.call(e);

        function o(e, t) {
            return 0 === e.indexOf(t.toLowerCase()) ? e : "".concat(t.toLowerCase()).concat(e.substr(0, 1).toUpperCase()).concat(e.substr(1))
        }

        function a(e) {
            return Boolean(e && 1 === e.nodeType && "nodeName" in e && e.ownerDocument && e.ownerDocument.defaultView)
        }

        function u(e) {
            return !isNaN(parseFloat(e)) && isFinite(e) && Math.floor(e) == e
        }

        function l(e) {
            return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)
        }

        function h() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.id,
                r = e.url,
                i = t || r;
            if (!i) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
            if (u(i)) return "https://vimeo.com/".concat(i);
            if (l(i)) return i.replace("http:", "https:");
            if (t) throw new TypeError("“".concat(t, "” is not a valid video id."));
            throw new TypeError("“".concat(i, "” is not a vimeo.com url."))
        }
        var c = void 0 !== Array.prototype.indexOf,
            d = "undefined" != typeof window && void 0 !== window.postMessage;
        if (!(s || c && d)) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
        var f = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};
        /*!
         * weakmap-polyfill v2.0.1 - ECMAScript6 WeakMap polyfill
         * https://github.com/polygonplanet/weakmap-polyfill
         * Copyright (c) 2015-2020 Polygon Planet <polygon.planet.aqua@gmail.com>
         * @license MIT
         */
        ! function(e) {
            if (!e.WeakMap) {
                var t = Object.prototype.hasOwnProperty,
                    r = function(e, t, r) {
                        Object.defineProperty ? Object.defineProperty(e, t, {
                            configurable: !0,
                            writable: !0,
                            value: r
                        }) : e[t] = r
                    };
                e.WeakMap = function() {
                    function e() {
                        if (void 0 === this) throw new TypeError("Constructor WeakMap requires 'new'");
                        if (r(this, "_id", s("_WeakMap")), arguments.length > 0) throw new TypeError("WeakMap iterable is not supported")
                    }

                    function n(e, r) {
                        if (!i(e) || !t.call(e, "_id")) throw new TypeError(r + " method called on incompatible receiver " + typeof e)
                    }

                    function s(e) {
                        return e + "_" + o() + "." + o()
                    }

                    function o() {
                        return Math.random().toString().substring(2)
                    }
                    return r(e.prototype, "delete", (function(e) {
                        if (n(this, "delete"), !i(e)) return !1;
                        var t = e[this._id];
                        return !(!t || t[0] !== e) && (delete e[this._id], !0)
                    })), r(e.prototype, "get", (function(e) {
                        if (n(this, "get"), i(e)) {
                            var t = e[this._id];
                            return t && t[0] === e ? t[1] : void 0
                        }
                    })), r(e.prototype, "has", (function(e) {
                        if (n(this, "has"), !i(e)) return !1;
                        var t = e[this._id];
                        return !(!t || t[0] !== e)
                    })), r(e.prototype, "set", (function(e, t) {
                        if (n(this, "set"), !i(e)) throw new TypeError("Invalid value used as weak map key");
                        var s = e[this._id];
                        return s && s[0] === e ? (s[1] = t, this) : (r(e, this._id, [e, t]), this)
                    })), r(e, "_polyfill", !0), e
                }()
            }

            function i(e) {
                return Object(e) === e
            }
        }("undefined" != typeof self ? self : "undefined" != typeof window ? window : f);
        var p = function(e, t) {
                return e(t = {
                    exports: {}
                }, t.exports), t.exports
            }((function(e) {
                /*! Native Promise Only
                    v0.8.1 (c) Kyle Simpson
                    MIT License: http://getify.mit-license.org
                */
                var t, i, n;
                n = function() {
                    var e, t, i, n = Object.prototype.toString,
                        s = void 0 !== r ? function(e) {
                            return r(e)
                        } : setTimeout;
                    try {
                        Object.defineProperty({}, "x", {}), e = function(e, t, r, i) {
                            return Object.defineProperty(e, t, {
                                value: r,
                                writable: !0,
                                configurable: !1 !== i
                            })
                        }
                    } catch (t) {
                        e = function(e, t, r) {
                            return e[t] = r, e
                        }
                    }

                    function o(e, r) {
                        i.add(e, r), t || (t = s(i.drain))
                    }

                    function a(e) {
                        var t, r = typeof e;
                        return null == e || "object" != r && "function" != r || (t = e.then), "function" == typeof t && t
                    }

                    function u() {
                        for (var e = 0; e < this.chain.length; e++) l(this, 1 === this.state ? this.chain[e].success : this.chain[e].failure, this.chain[e]);
                        this.chain.length = 0
                    }

                    function l(e, t, r) {
                        var i, n;
                        try {
                            !1 === t ? r.reject(e.msg) : (i = !0 === t ? e.msg : t.call(void 0, e.msg)) === r.promise ? r.reject(TypeError("Promise-chain cycle")) : (n = a(i)) ? n.call(i, r.resolve, r.reject) : r.resolve(i)
                        } catch (e) {
                            r.reject(e)
                        }
                    }

                    function h(e) {
                        var t, r = this;
                        if (!r.triggered) {
                            r.triggered = !0, r.def && (r = r.def);
                            try {
                                (t = a(e)) ? o((function() {
                                    var i = new f(r);
                                    try {
                                        t.call(e, (function() {
                                            h.apply(i, arguments)
                                        }), (function() {
                                            c.apply(i, arguments)
                                        }))
                                    } catch (e) {
                                        c.call(i, e)
                                    }
                                })): (r.msg = e, r.state = 1, r.chain.length > 0 && o(u, r))
                            } catch (e) {
                                c.call(new f(r), e)
                            }
                        }
                    }

                    function c(e) {
                        var t = this;
                        t.triggered || (t.triggered = !0, t.def && (t = t.def), t.msg = e, t.state = 2, t.chain.length > 0 && o(u, t))
                    }

                    function d(e, t, r, i) {
                        for (var n = 0; n < t.length; n++) ! function(n) {
                            e.resolve(t[n]).then((function(e) {
                                r(n, e)
                            }), i)
                        }(n)
                    }

                    function f(e) {
                        this.def = e, this.triggered = !1
                    }

                    function p(e) {
                        this.promise = e, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0
                    }

                    function m(e) {
                        if ("function" != typeof e) throw TypeError("Not a function");
                        if (0 !== this.__NPO__) throw TypeError("Not a promise");
                        this.__NPO__ = 1;
                        var t = new p(this);
                        this.then = function(e, r) {
                            var i = {
                                success: "function" != typeof e || e,
                                failure: "function" == typeof r && r
                            };
                            return i.promise = new this.constructor((function(e, t) {
                                if ("function" != typeof e || "function" != typeof t) throw TypeError("Not a function");
                                i.resolve = e, i.reject = t
                            })), t.chain.push(i), 0 !== t.state && o(u, t), i.promise
                        }, this.catch = function(e) {
                            return this.then(void 0, e)
                        };
                        try {
                            e.call(void 0, (function(e) {
                                h.call(t, e)
                            }), (function(e) {
                                c.call(t, e)
                            }))
                        } catch (e) {
                            c.call(t, e)
                        }
                    }
                    i = function() {
                        var e, r, i;

                        function n(e, t) {
                            this.fn = e, this.self = t, this.next = void 0
                        }
                        return {
                            add: function(t, s) {
                                i = new n(t, s), r ? r.next = i : e = i, r = i, i = void 0
                            },
                            drain: function() {
                                var i = e;
                                for (e = r = t = void 0; i;) i.fn.call(i.self), i = i.next
                            }
                        }
                    }();
                    var g = e({}, "constructor", m, !1);
                    return m.prototype = g, e(g, "__NPO__", 0, !1), e(m, "resolve", (function(e) {
                        return e && "object" == typeof e && 1 === e.__NPO__ ? e : new this((function(t, r) {
                            if ("function" != typeof t || "function" != typeof r) throw TypeError("Not a function");
                            t(e)
                        }))
                    })), e(m, "reject", (function(e) {
                        return new this((function(t, r) {
                            if ("function" != typeof t || "function" != typeof r) throw TypeError("Not a function");
                            r(e)
                        }))
                    })), e(m, "all", (function(e) {
                        var t = this;
                        return "[object Array]" != n.call(e) ? t.reject(TypeError("Not an array")) : 0 === e.length ? t.resolve([]) : new t((function(r, i) {
                            if ("function" != typeof r || "function" != typeof i) throw TypeError("Not a function");
                            var n = e.length,
                                s = Array(n),
                                o = 0;
                            d(t, e, (function(e, t) {
                                s[e] = t, ++o === n && r(s)
                            }), i)
                        }))
                    })), e(m, "race", (function(e) {
                        var t = this;
                        return "[object Array]" != n.call(e) ? t.reject(TypeError("Not an array")) : new t((function(r, i) {
                            if ("function" != typeof r || "function" != typeof i) throw TypeError("Not a function");
                            d(t, e, (function(e, t) {
                                r(t)
                            }), i)
                        }))
                    })), m
                }, (i = f)[t = "Promise"] = i[t] || n(), e.exports && (e.exports = i[t])
            })),
            m = new WeakMap;

        function g(e, t, r) {
            var i = m.get(e.element) || {};
            t in i || (i[t] = []), i[t].push(r), m.set(e.element, i)
        }

        function v(e, t) {
            return (m.get(e.element) || {})[t] || []
        }

        function y(e, t, r) {
            var i = m.get(e.element) || {};
            if (!i[t]) return !0;
            if (!r) return i[t] = [], m.set(e.element, i), !0;
            var n = i[t].indexOf(r);
            return -1 !== n && i[t].splice(n, 1), m.set(e.element, i), i[t] && 0 === i[t].length
        }

        function _(e, t) {
            var r = m.get(e);
            m.set(t, r), m.delete(e)
        }
        var D = ["autopause", "autoplay", "background", "byline", "color", "controls", "dnt", "height", "id", "loop", "maxheight", "maxwidth", "muted", "playsinline", "portrait", "responsive", "speed", "texttrack", "title", "transparent", "url", "width"];

        function x(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return D.reduce((function(t, r) {
                var i = e.getAttribute("data-vimeo-".concat(r));
                return (i || "" === i) && (t[r] = "" === i ? 1 : i), t
            }), t)
        }

        function w(e, t) {
            var r = e.html;
            if (!t) throw new TypeError("An element must be provided");
            if (null !== t.getAttribute("data-vimeo-initialized")) return t.querySelector("iframe");
            var i = document.createElement("div");
            return i.innerHTML = r, t.appendChild(i.firstChild), t.setAttribute("data-vimeo-initialized", "true"), t.querySelector("iframe")
        }

        function b(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = arguments.length > 2 ? arguments[2] : void 0;
            return new Promise((function(i, n) {
                if (!l(e)) throw new TypeError("“".concat(e, "” is not a vimeo.com url."));
                var s = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));
                for (var o in t) t.hasOwnProperty(o) && (s += "&".concat(o, "=").concat(encodeURIComponent(t[o])));
                var a = "XDomainRequest" in window ? new XDomainRequest : new XMLHttpRequest;
                a.open("GET", s, !0), a.onload = function() {
                    if (404 !== a.status)
                        if (403 !== a.status) try {
                            var t = JSON.parse(a.responseText);
                            if (403 === t.domain_status_code) return w(t, r), void n(new Error("“".concat(e, "” is not embeddable.")));
                            i(t)
                        } catch (e) {
                            n(e)
                        } else n(new Error("“".concat(e, "” is not embeddable.")));
                        else n(new Error("“".concat(e, "” was not found.")))
                }, a.onerror = function() {
                    var e = a.status ? " (".concat(a.status, ")") : "";
                    n(new Error("There was an error fetching the embed code from Vimeo".concat(e, ".")))
                }, a.send()
            }))
        }

        function E(e) {
            if ("string" == typeof e) try {
                e = JSON.parse(e)
            } catch (e) {
                return console.warn(e), {}
            }
            return e
        }

        function C(e, t, r) {
            if (e.element.contentWindow && e.element.contentWindow.postMessage) {
                var i = {
                    method: t
                };
                void 0 !== r && (i.value = r);
                var n = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
                n >= 8 && n < 10 && (i = JSON.stringify(i)), e.element.contentWindow.postMessage(i, e.origin)
            }
        }

        function A(e, t) {
            var r, i = [];
            if ((t = E(t)).event) {
                if ("error" === t.event) v(e, t.data.method).forEach((function(r) {
                    var i = new Error(t.data.message);
                    i.name = t.data.name, r.reject(i), y(e, t.data.method, r)
                }));
                i = v(e, "event:".concat(t.event)), r = t.data
            } else if (t.method) {
                var n = function(e, t) {
                    var r = v(e, t);
                    if (r.length < 1) return !1;
                    var i = r.shift();
                    return y(e, t, i), i
                }(e, t.method);
                n && (i.push(n), r = t.value)
            }
            i.forEach((function(t) {
                try {
                    if ("function" == typeof t) return void t.call(e, r);
                    t.resolve(r)
                } catch (e) {}
            }))
        }
        var T = new WeakMap,
            F = new WeakMap,
            P = {},
            M = function() {
                function e(t) {
                    var r = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (i(this, e), window.jQuery && t instanceof jQuery && (t.length > 1 && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), t = t[0]), "undefined" != typeof document && "string" == typeof t && (t = document.getElementById(t)), !a(t)) throw new TypeError("You must pass either a valid element or a valid id.");
                    if ("IFRAME" !== t.nodeName) {
                        var s = t.querySelector("iframe");
                        s && (t = s)
                    }
                    if ("IFRAME" === t.nodeName && !l(t.getAttribute("src") || "")) throw new Error("The player element passed isn’t a Vimeo embed.");
                    if (T.has(t)) return T.get(t);
                    this._window = t.ownerDocument.defaultView, this.element = t, this.origin = "*";
                    var o = new p((function(e, i) {
                        if (r._onMessage = function(t) {
                                if (l(t.origin) && r.element.contentWindow === t.source) {
                                    "*" === r.origin && (r.origin = t.origin);
                                    var n = E(t.data);
                                    if (n && "error" === n.event && n.data && "ready" === n.data.method) {
                                        var s = new Error(n.data.message);
                                        return s.name = n.data.name, void i(s)
                                    }
                                    var o = n && "ready" === n.event,
                                        a = n && "ping" === n.method;
                                    if (o || a) return r.element.setAttribute("data-ready", "true"), void e();
                                    A(r, n)
                                }
                            }, r._window.addEventListener("message", r._onMessage), "IFRAME" !== r.element.nodeName) {
                            var s = x(t, n);
                            b(h(s), s, t).then((function(e) {
                                var i = w(e, t);
                                return r.element = i, r._originalElement = t, _(t, i), T.set(r.element, r), e
                            })).catch(i)
                        }
                    }));
                    if (F.set(this, o), T.set(this.element, this), "IFRAME" === this.element.nodeName && C(this, "ping"), P.isEnabled) {
                        var u = function() {
                            return P.exit()
                        };
                        P.on("fullscreenchange", (function() {
                            P.isFullscreen ? g(r, "event:exitFullscreen", u) : y(r, "event:exitFullscreen", u), r.ready().then((function() {
                                C(r, "fullscreenchange", P.isFullscreen)
                            }))
                        }))
                    }
                    return this
                }
                var t, r, s;
                return t = e, (r = [{
                    key: "callMethod",
                    value: function(e) {
                        var t = this,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return new p((function(i, n) {
                            return t.ready().then((function() {
                                g(t, e, {
                                    resolve: i,
                                    reject: n
                                }), C(t, e, r)
                            })).catch(n)
                        }))
                    }
                }, {
                    key: "get",
                    value: function(e) {
                        var t = this;
                        return new p((function(r, i) {
                            return e = o(e, "get"), t.ready().then((function() {
                                g(t, e, {
                                    resolve: r,
                                    reject: i
                                }), C(t, e)
                            })).catch(i)
                        }))
                    }
                }, {
                    key: "set",
                    value: function(e, t) {
                        var r = this;
                        return new p((function(i, n) {
                            if (e = o(e, "set"), null == t) throw new TypeError("There must be a value to set.");
                            return r.ready().then((function() {
                                g(r, e, {
                                    resolve: i,
                                    reject: n
                                }), C(r, e, t)
                            })).catch(n)
                        }))
                    }
                }, {
                    key: "on",
                    value: function(e, t) {
                        if (!e) throw new TypeError("You must pass an event name.");
                        if (!t) throw new TypeError("You must pass a callback function.");
                        if ("function" != typeof t) throw new TypeError("The callback must be a function.");
                        0 === v(this, "event:".concat(e)).length && this.callMethod("addEventListener", e).catch((function() {})), g(this, "event:".concat(e), t)
                    }
                }, {
                    key: "off",
                    value: function(e, t) {
                        if (!e) throw new TypeError("You must pass an event name.");
                        if (t && "function" != typeof t) throw new TypeError("The callback must be a function.");
                        y(this, "event:".concat(e), t) && this.callMethod("removeEventListener", e).catch((function(e) {}))
                    }
                }, {
                    key: "loadVideo",
                    value: function(e) {
                        return this.callMethod("loadVideo", e)
                    }
                }, {
                    key: "ready",
                    value: function() {
                        var e = F.get(this) || new p((function(e, t) {
                            t(new Error("Unknown player. Probably unloaded."))
                        }));
                        return p.resolve(e)
                    }
                }, {
                    key: "addCuePoint",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return this.callMethod("addCuePoint", {
                            time: e,
                            data: t
                        })
                    }
                }, {
                    key: "removeCuePoint",
                    value: function(e) {
                        return this.callMethod("removeCuePoint", e)
                    }
                }, {
                    key: "enableTextTrack",
                    value: function(e, t) {
                        if (!e) throw new TypeError("You must pass a language.");
                        return this.callMethod("enableTextTrack", {
                            language: e,
                            kind: t
                        })
                    }
                }, {
                    key: "disableTextTrack",
                    value: function() {
                        return this.callMethod("disableTextTrack")
                    }
                }, {
                    key: "pause",
                    value: function() {
                        return this.callMethod("pause")
                    }
                }, {
                    key: "play",
                    value: function() {
                        return this.callMethod("play")
                    }
                }, {
                    key: "requestFullscreen",
                    value: function() {
                        return P.isEnabled ? P.request(this.element) : this.callMethod("requestFullscreen")
                    }
                }, {
                    key: "exitFullscreen",
                    value: function() {
                        return P.isEnabled ? P.exit() : this.callMethod("exitFullscreen")
                    }
                }, {
                    key: "getFullscreen",
                    value: function() {
                        return P.isEnabled ? p.resolve(P.isFullscreen) : this.get("fullscreen")
                    }
                }, {
                    key: "unload",
                    value: function() {
                        return this.callMethod("unload")
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var e = this;
                        return new p((function(t) {
                            if (F.delete(e), T.delete(e.element), e._originalElement && (T.delete(e._originalElement), e._originalElement.removeAttribute("data-vimeo-initialized")), e.element && "IFRAME" === e.element.nodeName && e.element.parentNode && e.element.parentNode.removeChild(e.element), e.element && "DIV" === e.element.nodeName && e.element.parentNode) {
                                e.element.removeAttribute("data-vimeo-initialized");
                                var r = e.element.querySelector("iframe");
                                r && r.parentNode && r.parentNode.removeChild(r)
                            }
                            e._window.removeEventListener("message", e._onMessage), t()
                        }))
                    }
                }, {
                    key: "getAutopause",
                    value: function() {
                        return this.get("autopause")
                    }
                }, {
                    key: "setAutopause",
                    value: function(e) {
                        return this.set("autopause", e)
                    }
                }, {
                    key: "getBuffered",
                    value: function() {
                        return this.get("buffered")
                    }
                }, {
                    key: "getCameraProps",
                    value: function() {
                        return this.get("cameraProps")
                    }
                }, {
                    key: "setCameraProps",
                    value: function(e) {
                        return this.set("cameraProps", e)
                    }
                }, {
                    key: "getChapters",
                    value: function() {
                        return this.get("chapters")
                    }
                }, {
                    key: "getCurrentChapter",
                    value: function() {
                        return this.get("currentChapter")
                    }
                }, {
                    key: "getColor",
                    value: function() {
                        return this.get("color")
                    }
                }, {
                    key: "setColor",
                    value: function(e) {
                        return this.set("color", e)
                    }
                }, {
                    key: "getCuePoints",
                    value: function() {
                        return this.get("cuePoints")
                    }
                }, {
                    key: "getCurrentTime",
                    value: function() {
                        return this.get("currentTime")
                    }
                }, {
                    key: "setCurrentTime",
                    value: function(e) {
                        return this.set("currentTime", e)
                    }
                }, {
                    key: "getDuration",
                    value: function() {
                        return this.get("duration")
                    }
                }, {
                    key: "getEnded",
                    value: function() {
                        return this.get("ended")
                    }
                }, {
                    key: "getLoop",
                    value: function() {
                        return this.get("loop")
                    }
                }, {
                    key: "setLoop",
                    value: function(e) {
                        return this.set("loop", e)
                    }
                }, {
                    key: "setMuted",
                    value: function(e) {
                        return this.set("muted", e)
                    }
                }, {
                    key: "getMuted",
                    value: function() {
                        return this.get("muted")
                    }
                }, {
                    key: "getPaused",
                    value: function() {
                        return this.get("paused")
                    }
                }, {
                    key: "getPlaybackRate",
                    value: function() {
                        return this.get("playbackRate")
                    }
                }, {
                    key: "setPlaybackRate",
                    value: function(e) {
                        return this.set("playbackRate", e)
                    }
                }, {
                    key: "getPlayed",
                    value: function() {
                        return this.get("played")
                    }
                }, {
                    key: "getQualities",
                    value: function() {
                        return this.get("qualities")
                    }
                }, {
                    key: "getQuality",
                    value: function() {
                        return this.get("quality")
                    }
                }, {
                    key: "setQuality",
                    value: function(e) {
                        return this.set("quality", e)
                    }
                }, {
                    key: "getSeekable",
                    value: function() {
                        return this.get("seekable")
                    }
                }, {
                    key: "getSeeking",
                    value: function() {
                        return this.get("seeking")
                    }
                }, {
                    key: "getTextTracks",
                    value: function() {
                        return this.get("textTracks")
                    }
                }, {
                    key: "getVideoEmbedCode",
                    value: function() {
                        return this.get("videoEmbedCode")
                    }
                }, {
                    key: "getVideoId",
                    value: function() {
                        return this.get("videoId")
                    }
                }, {
                    key: "getVideoTitle",
                    value: function() {
                        return this.get("videoTitle")
                    }
                }, {
                    key: "getVideoWidth",
                    value: function() {
                        return this.get("videoWidth")
                    }
                }, {
                    key: "getVideoHeight",
                    value: function() {
                        return this.get("videoHeight")
                    }
                }, {
                    key: "getVideoUrl",
                    value: function() {
                        return this.get("videoUrl")
                    }
                }, {
                    key: "getVolume",
                    value: function() {
                        return this.get("volume")
                    }
                }, {
                    key: "setVolume",
                    value: function(e) {
                        return this.set("volume", e)
                    }
                }]) && n(t.prototype, r), s && n(t, s), e
            }();
        s || (P = function() {
            var e = function() {
                    for (var e, t = [
                            ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                            ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                            ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                            ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                            ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                        ], r = 0, i = t.length, n = {}; r < i; r++)
                        if ((e = t[r]) && e[1] in document) {
                            for (r = 0; r < e.length; r++) n[t[0][r]] = e[r];
                            return n
                        }
                    return !1
                }(),
                t = {
                    fullscreenchange: e.fullscreenchange,
                    fullscreenerror: e.fullscreenerror
                },
                r = {
                    request: function(t) {
                        return new Promise((function(i, n) {
                            var s = function e() {
                                r.off("fullscreenchange", e), i()
                            };
                            r.on("fullscreenchange", s);
                            var o = (t = t || document.documentElement)[e.requestFullscreen]();
                            o instanceof Promise && o.then(s).catch(n)
                        }))
                    },
                    exit: function() {
                        return new Promise((function(t, i) {
                            if (r.isFullscreen) {
                                var n = function e() {
                                    r.off("fullscreenchange", e), t()
                                };
                                r.on("fullscreenchange", n);
                                var s = document[e.exitFullscreen]();
                                s instanceof Promise && s.then(n).catch(i)
                            } else t()
                        }))
                    },
                    on: function(e, r) {
                        var i = t[e];
                        i && document.addEventListener(i, r)
                    },
                    off: function(e, r) {
                        var i = t[e];
                        i && document.removeEventListener(i, r)
                    }
                };
            return Object.defineProperties(r, {
                isFullscreen: {
                    get: function() {
                        return Boolean(document[e.fullscreenElement])
                    }
                },
                element: {
                    enumerable: !0,
                    get: function() {
                        return document[e.fullscreenElement]
                    }
                },
                isEnabled: {
                    enumerable: !0,
                    get: function() {
                        return Boolean(document[e.fullscreenEnabled])
                    }
                }
            }), r
        }(), function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                t = [].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),
                r = function(e) {
                    "console" in window && console.error && console.error("There was an error creating an embed: ".concat(e))
                };
            t.forEach((function(e) {
                try {
                    if (null !== e.getAttribute("data-vimeo-defer")) return;
                    var t = x(e);
                    b(h(t), t, e).then((function(t) {
                        return w(t, e)
                    })).catch(r)
                } catch (e) {
                    r(e)
                }
            }))
        }(), function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
            if (!window.VimeoPlayerResizeEmbeds_) {
                window.VimeoPlayerResizeEmbeds_ = !0;
                var t = function(t) {
                    if (l(t.origin) && t.data && "spacechange" === t.data.event)
                        for (var r = e.querySelectorAll("iframe"), i = 0; i < r.length; i++)
                            if (r[i].contentWindow === t.source) {
                                r[i].parentElement.style.paddingBottom = "".concat(t.data.data[0].bottom, "px");
                                break
                            }
                };
                window.addEventListener("message", t)
            }
        }()), t.a = M
    }).call(this, r(0), r(5).setImmediate)
}, function(e, t, r) {
    (function(e) {
        var i = void 0 !== e && e || "undefined" != typeof self && self || window,
            n = Function.prototype.apply;

        function s(e, t) {
            this._id = e, this._clearFn = t
        }
        t.setTimeout = function() {
            return new s(n.call(setTimeout, i, arguments), clearTimeout)
        }, t.setInterval = function() {
            return new s(n.call(setInterval, i, arguments), clearInterval)
        }, t.clearTimeout = t.clearInterval = function(e) {
            e && e.close()
        }, s.prototype.unref = s.prototype.ref = function() {}, s.prototype.close = function() {
            this._clearFn.call(i, this._id)
        }, t.enroll = function(e, t) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = t
        }, t.unenroll = function(e) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
        }, t._unrefActive = t.active = function(e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 && (e._idleTimeoutId = setTimeout((function() {
                e._onTimeout && e._onTimeout()
            }), t))
        }, r(6), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
    }).call(this, r(0))
}, function(e, t, r) {
    (function(e, t) {
        ! function(e, r) {
            "use strict";
            if (!e.setImmediate) {
                var i, n, s, o, a, u = 1,
                    l = {},
                    h = !1,
                    c = e.document,
                    d = Object.getPrototypeOf && Object.getPrototypeOf(e);
                d = d && d.setTimeout ? d : e, "[object process]" === {}.toString.call(e.process) ? i = function(e) {
                    t.nextTick((function() {
                        p(e)
                    }))
                } : ! function() {
                    if (e.postMessage && !e.importScripts) {
                        var t = !0,
                            r = e.onmessage;
                        return e.onmessage = function() {
                            t = !1
                        }, e.postMessage("", "*"), e.onmessage = r, t
                    }
                }() ? e.MessageChannel ? ((s = new MessageChannel).port1.onmessage = function(e) {
                    p(e.data)
                }, i = function(e) {
                    s.port2.postMessage(e)
                }) : c && "onreadystatechange" in c.createElement("script") ? (n = c.documentElement, i = function(e) {
                    var t = c.createElement("script");
                    t.onreadystatechange = function() {
                        p(e), t.onreadystatechange = null, n.removeChild(t), t = null
                    }, n.appendChild(t)
                }) : i = function(e) {
                    setTimeout(p, 0, e)
                } : (o = "setImmediate$" + Math.random() + "$", a = function(t) {
                    t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(o) && p(+t.data.slice(o.length))
                }, e.addEventListener ? e.addEventListener("message", a, !1) : e.attachEvent("onmessage", a), i = function(t) {
                    e.postMessage(o + t, "*")
                }), d.setImmediate = function(e) {
                    "function" != typeof e && (e = new Function("" + e));
                    for (var t = new Array(arguments.length - 1), r = 0; r < t.length; r++) t[r] = arguments[r + 1];
                    var n = {
                        callback: e,
                        args: t
                    };
                    return l[u] = n, i(u), u++
                }, d.clearImmediate = f
            }

            function f(e) {
                delete l[e]
            }

            function p(e) {
                if (h) setTimeout(p, 0, e);
                else {
                    var t = l[e];
                    if (t) {
                        h = !0;
                        try {
                            ! function(e) {
                                var t = e.callback,
                                    r = e.args;
                                switch (r.length) {
                                    case 0:
                                        t();
                                        break;
                                    case 1:
                                        t(r[0]);
                                        break;
                                    case 2:
                                        t(r[0], r[1]);
                                        break;
                                    case 3:
                                        t(r[0], r[1], r[2]);
                                        break;
                                    default:
                                        t.apply(void 0, r)
                                }
                            }(t)
                        } finally {
                            f(e), h = !1
                        }
                    }
                }
            }
        }("undefined" == typeof self ? void 0 === e ? this : e : self)
    }).call(this, r(0), r(7))
}, function(e, t) {
    var r, i, n = e.exports = {};

    function s() {
        throw new Error("setTimeout has not been defined")
    }

    function o() {
        throw new Error("clearTimeout has not been defined")
    }

    function a(e) {
        if (r === setTimeout) return setTimeout(e, 0);
        if ((r === s || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
        try {
            return r(e, 0)
        } catch (t) {
            try {
                return r.call(null, e, 0)
            } catch (t) {
                return r.call(this, e, 0)
            }
        }
    }! function() {
        try {
            r = "function" == typeof setTimeout ? setTimeout : s
        } catch (e) {
            r = s
        }
        try {
            i = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (e) {
            i = o
        }
    }();
    var u, l = [],
        h = !1,
        c = -1;

    function d() {
        h && u && (h = !1, u.length ? l = u.concat(l) : c = -1, l.length && f())
    }

    function f() {
        if (!h) {
            var e = a(d);
            h = !0;
            for (var t = l.length; t;) {
                for (u = l, l = []; ++c < t;) u && u[c].run();
                c = -1, t = l.length
            }
            u = null, h = !1,
                function(e) {
                    if (i === clearTimeout) return clearTimeout(e);
                    if ((i === o || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
                    try {
                        i(e)
                    } catch (t) {
                        try {
                            return i.call(null, e)
                        } catch (t) {
                            return i.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function p(e, t) {
        this.fun = e, this.array = t
    }

    function m() {}
    n.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        l.push(new p(e, t)), 1 !== l.length || h || a(f)
    }, p.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = m, n.addListener = m, n.once = m, n.off = m, n.removeListener = m, n.removeAllListeners = m, n.emit = m, n.prependListener = m, n.prependOnceListener = m, n.listeners = function(e) {
        return []
    }, n.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, n.cwd = function() {
        return "/"
    }, n.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, n.umask = function() {
        return 0
    }
}, , function(e, t, r) {
    "use strict";
    r.r(t);
    var i = r(3),
        n = r.n(i);

    function s(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function o(e, t) {
        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
    }
    /*!
     * GSAP 3.5.1
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var a, u, l, h, c, d, f, p, m, g, v, y, _ = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        D = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        x = 1e8,
        w = 2 * Math.PI,
        b = w / 4,
        E = 0,
        C = Math.sqrt,
        A = Math.cos,
        T = Math.sin,
        F = function(e) {
            return "string" == typeof e
        },
        P = function(e) {
            return "function" == typeof e
        },
        M = function(e) {
            return "number" == typeof e
        },
        S = function(e) {
            return void 0 === e
        },
        k = function(e) {
            return "object" == typeof e
        },
        R = function(e) {
            return !1 !== e
        },
        O = function() {
            return "undefined" != typeof window
        },
        L = function(e) {
            return P(e) || F(e)
        },
        I = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        B = Array.isArray,
        N = /(?:-?\.?\d|\.)+/gi,
        U = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
        z = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        j = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
        V = /[+-]=-?[\.\d]+/,
        Y = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
        G = {},
        W = {},
        X = function(e) {
            return (W = ye(e, G)) && er
        },
        H = function(e, t) {
            return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
        },
        q = function(e, t) {
            return !t && console.warn(e)
        },
        Z = function(e, t) {
            return e && (G[e] = t) && W && (W[e] = t) || G
        },
        Q = function() {
            return 0
        },
        J = {},
        K = [],
        $ = {},
        ee = {},
        te = {},
        re = 30,
        ie = [],
        ne = "",
        se = function(e) {
            var t, r, i = e[0];
            if (k(i) || P(i) || (e = [e]), !(t = (i._gsap || {}).harness)) {
                for (r = ie.length; r-- && !ie[r].targetTest(i););
                t = ie[r]
            }
            for (r = e.length; r--;) e[r] && (e[r]._gsap || (e[r]._gsap = new Ct(e[r], t))) || e.splice(r, 1);
            return e
        },
        oe = function(e) {
            return e._gsap || se(We(e))[0]._gsap
        },
        ae = function(e, t, r) {
            return (r = e[t]) && P(r) ? e[t]() : S(r) && e.getAttribute && e.getAttribute(t) || r
        },
        ue = function(e, t) {
            return (e = e.split(",")).forEach(t) || e
        },
        le = function(e) {
            return Math.round(1e5 * e) / 1e5 || 0
        },
        he = function(e, t) {
            for (var r = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < r;);
            return i < r
        },
        ce = function(e, t, r) {
            var i, n = M(e[1]),
                s = (n ? 2 : 1) + (t < 2 ? 0 : 1),
                o = e[s];
            if (n && (o.duration = e[1]), o.parent = r, t) {
                for (i = o; r && !("immediateRender" in i);) i = r.vars.defaults || {}, r = R(r.vars.inherit) && r.parent;
                o.immediateRender = R(i.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[s - 1]
            }
            return o
        },
        de = function() {
            var e, t, r = K.length,
                i = K.slice(0);
            for ($ = {}, K.length = 0, e = 0; e < r; e++)(t = i[e]) && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0)
        },
        fe = function(e, t, r, i) {
            K.length && de(), e.render(t, r, i), K.length && de()
        },
        pe = function(e) {
            var t = parseFloat(e);
            return (t || 0 === t) && (e + "").match(Y).length < 2 ? t : F(e) ? e.trim() : e
        },
        me = function(e) {
            return e
        },
        ge = function(e, t) {
            for (var r in t) r in e || (e[r] = t[r]);
            return e
        },
        ve = function(e, t) {
            for (var r in t) r in e || "duration" === r || "ease" === r || (e[r] = t[r])
        },
        ye = function(e, t) {
            for (var r in t) e[r] = t[r];
            return e
        },
        _e = function e(t, r) {
            for (var i in r) t[i] = k(r[i]) ? e(t[i] || (t[i] = {}), r[i]) : r[i];
            return t
        },
        De = function(e, t) {
            var r, i = {};
            for (r in e) r in t || (i[r] = e[r]);
            return i
        },
        xe = function(e) {
            var t = e.parent || a,
                r = e.keyframes ? ve : ge;
            if (R(e.inherit))
                for (; t;) r(e, t.vars.defaults), t = t.parent || t._dp;
            return e
        },
        we = function(e, t, r, i) {
            void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
            var n = t._prev,
                s = t._next;
            n ? n._next = s : e[r] === t && (e[r] = s), s ? s._prev = n : e[i] === t && (e[i] = n), t._next = t._prev = t.parent = null
        },
        be = function(e, t) {
            e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e), e._act = 0
        },
        Ee = function(e, t) {
            if (e && (!t || t._end > e._dur || t._start < 0))
                for (var r = e; r;) r._dirty = 1, r = r.parent;
            return e
        },
        Ce = function(e) {
            for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
            return e
        },
        Ae = function(e) {
            return e._repeat ? Te(e._tTime, e = e.duration() + e._rDelay) * e : 0
        },
        Te = function(e, t) {
            return (e /= t) && ~~e === e ? ~~e - 1 : ~~e
        },
        Fe = function(e, t) {
            return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
        },
        Pe = function(e) {
            return e._end = le(e._start + (e._tDur / Math.abs(e._ts || e._rts || 1e-8) || 0))
        },
        Me = function(e, t) {
            var r = e._dp;
            return r && r.smoothChildTiming && e._ts && (e._start = le(e._dp._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), Pe(e), r._dirty || Ee(r, e)), e
        },
        Se = function(e, t) {
            var r;
            if ((t._time || t._initted && !t._dur) && (r = Fe(e.rawTime(), t), (!t._dur || ze(0, t.totalDuration(), r) - t._tTime > 1e-8) && t.render(r, !0)), Ee(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
                if (e._dur < e.duration())
                    for (r = e; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
                e._zTime = -1e-8
            }
        },
        ke = function(e, t, r, i) {
            return t.parent && be(t), t._start = le(r + t._delay), t._end = le(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)),
                function(e, t, r, i, n) {
                    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
                    var s, o = e[i];
                    if (n)
                        for (s = t[n]; o && o[n] > s;) o = o._prev;
                    o ? (t._next = o._next, o._next = t) : (t._next = e[r], e[r] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = o, t.parent = t._dp = e
                }(e, t, "_first", "_last", e._sort ? "_start" : 0), e._recent = t, i || Se(e, t), e
        },
        Re = function(e, t) {
            return (G.ScrollTrigger || H("scrollTrigger", t)) && G.ScrollTrigger.create(t, e)
        },
        Oe = function(e, t, r, i) {
            return kt(e, t), e._initted ? !r && e._pt && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && d !== dt.frame ? (K.push(e), e._lazy = [t, i], 1) : void 0 : 1
        },
        Le = function(e, t, r, i) {
            var n = e._repeat,
                s = le(t) || 0,
                o = e._tTime / e._tDur;
            return o && !i && (e._time *= s / e._dur), e._dur = s, e._tDur = n ? n < 0 ? 1e10 : le(s * (n + 1) + e._rDelay * n) : s, o && !i ? Me(e, e._tTime = e._tDur * o) : e.parent && Pe(e), r || Ee(e.parent, e), e
        },
        Ie = function(e) {
            return e instanceof Tt ? Ee(e) : Le(e, e._dur)
        },
        Be = {
            _start: 0,
            endTime: Q
        },
        Ne = function e(t, r) {
            var i, n, s = t.labels,
                o = t._recent || Be,
                a = t.duration() >= x ? o.endTime(!1) : t._dur;
            return F(r) && (isNaN(r) || r in s) ? "<" === (i = r.charAt(0)) || ">" === i ? ("<" === i ? o._start : o.endTime(o._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) : (i = r.indexOf("=")) < 0 ? (r in s || (s[r] = a), s[r]) : (n = +(r.charAt(i - 1) + r.substr(i + 1)), i > 1 ? e(t, r.substr(0, i - 1)) + n : a + n) : null == r ? a : +r
        },
        Ue = function(e, t) {
            return e || 0 === e ? t(e) : t
        },
        ze = function(e, t, r) {
            return r < e ? e : r > t ? t : r
        },
        je = function(e) {
            return (e = (e + "").substr((parseFloat(e) + "").length)) && isNaN(e) ? e : ""
        },
        Ve = [].slice,
        Ye = function(e, t) {
            return e && k(e) && "length" in e && (!t && !e.length || e.length - 1 in e && k(e[0])) && !e.nodeType && e !== u
        },
        Ge = function(e, t, r) {
            return void 0 === r && (r = []), e.forEach((function(e) {
                var i;
                return F(e) && !t || Ye(e, 1) ? (i = r).push.apply(i, We(e)) : r.push(e)
            })) || r
        },
        We = function(e, t) {
            return !F(e) || t || !l && ft() ? B(e) ? Ge(e, t) : Ye(e) ? Ve.call(e, 0) : e ? [e] : [] : Ve.call(h.querySelectorAll(e), 0)
        },
        Xe = function(e) {
            return e.sort((function() {
                return .5 - Math.random()
            }))
        },
        He = function(e) {
            if (P(e)) return e;
            var t = k(e) ? e : {
                    each: e
                },
                r = Dt(t.ease),
                i = t.from || 0,
                n = parseFloat(t.base) || 0,
                s = {},
                o = i > 0 && i < 1,
                a = isNaN(i) || o,
                u = t.axis,
                l = i,
                h = i;
            return F(i) ? l = h = {
                    center: .5,
                    edges: .5,
                    end: 1
                }[i] || 0 : !o && a && (l = i[0], h = i[1]),
                function(e, o, c) {
                    var d, f, p, m, g, v, y, _, D, w = (c || t).length,
                        b = s[w];
                    if (!b) {
                        if (!(D = "auto" === t.grid ? 0 : (t.grid || [1, x])[1])) {
                            for (y = -x; y < (y = c[D++].getBoundingClientRect().left) && D < w;);
                            D--
                        }
                        for (b = s[w] = [], d = a ? Math.min(D, w) * l - .5 : i % D, f = a ? w * h / D - .5 : i / D | 0, y = 0, _ = x, v = 0; v < w; v++) p = v % D - d, m = f - (v / D | 0), b[v] = g = u ? Math.abs("y" === u ? m : p) : C(p * p + m * m), g > y && (y = g), g < _ && (_ = g);
                        "random" === i && Xe(b), b.max = y - _, b.min = _, b.v = w = (parseFloat(t.amount) || parseFloat(t.each) * (D > w ? w - 1 : u ? "y" === u ? w / D : D : Math.max(D, w / D)) || 0) * ("edges" === i ? -1 : 1), b.b = w < 0 ? n - w : n, b.u = je(t.amount || t.each) || 0, r = r && w < 0 ? yt(r) : r
                    }
                    return w = (b[e] - b.min) / b.max || 0, le(b.b + (r ? r(w) : w) * b.v) + b.u
                }
        },
        qe = function(e) {
            var t = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
            return function(r) {
                return Math.floor(Math.round(parseFloat(r) / e) * e * t) / t + (M(r) ? 0 : je(r))
            }
        },
        Ze = function(e, t) {
            var r, i, n = B(e);
            return !n && k(e) && (r = n = e.radius || x, e.values ? (e = We(e.values), (i = !M(e[0])) && (r *= r)) : e = qe(e.increment)), Ue(t, n ? P(e) ? function(t) {
                return i = e(t), Math.abs(i - t) <= r ? i : t
            } : function(t) {
                for (var n, s, o = parseFloat(i ? t.x : t), a = parseFloat(i ? t.y : 0), u = x, l = 0, h = e.length; h--;)(n = i ? (n = e[h].x - o) * n + (s = e[h].y - a) * s : Math.abs(e[h] - o)) < u && (u = n, l = h);
                return l = !r || u <= r ? e[l] : t, i || l === t || M(t) ? l : l + je(t)
            } : qe(e))
        },
        Qe = function(e, t, r, i) {
            return Ue(B(e) ? !t : !0 === r ? !!(r = 0) : !i, (function() {
                return B(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e + Math.random() * (t - e)) / r) * r * i) / i
            }))
        },
        Je = function(e, t, r) {
            return Ue(r, (function(r) {
                return e[~~t(r)]
            }))
        },
        Ke = function(e) {
            for (var t, r, i, n, s = 0, o = ""; ~(t = e.indexOf("random(", s));) i = e.indexOf(")", t), n = "[" === e.charAt(t + 7), r = e.substr(t + 7, i - t - 7).match(n ? Y : N), o += e.substr(s, t - s) + Qe(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), s = i + 1;
            return o + e.substr(s, e.length - s)
        },
        $e = function(e, t, r, i, n) {
            var s = t - e,
                o = i - r;
            return Ue(n, (function(t) {
                return r + ((t - e) / s * o || 0)
            }))
        },
        et = function(e, t, r) {
            var i, n, s, o = e.labels,
                a = x;
            for (i in o)(n = o[i] - t) < 0 == !!r && n && a > (n = Math.abs(n)) && (s = i, a = n);
            return s
        },
        tt = function(e, t, r) {
            var i, n, s = e.vars,
                o = s[t];
            if (o) return i = s[t + "Params"], n = s.callbackScope || e, r && K.length && de(), i ? o.apply(n, i) : o.call(n)
        },
        rt = function(e) {
            return be(e), e.progress() < 1 && tt(e, "onInterrupt"), e
        },
        it = function(e) {
            var t = (e = !e.name && e.default || e).name,
                r = P(e),
                i = t && !r && e.init ? function() {
                    this._props = []
                } : e,
                n = {
                    init: Q,
                    render: Wt,
                    add: Mt,
                    kill: Ht,
                    modifier: Xt,
                    rawVars: 0
                },
                s = {
                    targetTest: 0,
                    get: 0,
                    getSetter: jt,
                    aliases: {},
                    register: 0
                };
            if (ft(), e !== i) {
                if (ee[t]) return;
                ge(i, ge(De(e, n), s)), ye(i.prototype, ye(n, De(e, s))), ee[i.prop = t] = i, e.targetTest && (ie.push(i), J[t] = 1), t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
            }
            Z(t, i), e.register && e.register(er, i, Qt)
        },
        nt = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        },
        st = function(e, t, r) {
            return 255 * (6 * (e = e < 0 ? e + 1 : e > 1 ? e - 1 : e) < 1 ? t + (r - t) * e * 6 : e < .5 ? r : 3 * e < 2 ? t + (r - t) * (2 / 3 - e) * 6 : t) + .5 | 0
        },
        ot = function(e, t, r) {
            var i, n, s, o, a, u, l, h, c, d, f = e ? M(e) ? [e >> 16, e >> 8 & 255, 255 & e] : 0 : nt.black;
            if (!f) {
                if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), nt[e]) f = nt[e];
                else if ("#" === e.charAt(0)) 4 === e.length && (i = e.charAt(1), n = e.charAt(2), s = e.charAt(3), e = "#" + i + i + n + n + s + s), f = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & 255, 255 & e];
                else if ("hsl" === e.substr(0, 3))
                    if (f = d = e.match(N), t) {
                        if (~e.indexOf("=")) return f = e.match(U), r && f.length < 4 && (f[3] = 1), f
                    } else o = +f[0] % 360 / 360, a = +f[1] / 100, i = 2 * (u = +f[2] / 100) - (n = u <= .5 ? u * (a + 1) : u + a - u * a), f.length > 3 && (f[3] *= 1), f[0] = st(o + 1 / 3, i, n), f[1] = st(o, i, n), f[2] = st(o - 1 / 3, i, n);
                else f = e.match(N) || nt.transparent;
                f = f.map(Number)
            }
            return t && !d && (i = f[0] / 255, n = f[1] / 255, s = f[2] / 255, u = ((l = Math.max(i, n, s)) + (h = Math.min(i, n, s))) / 2, l === h ? o = a = 0 : (c = l - h, a = u > .5 ? c / (2 - l - h) : c / (l + h), o = l === i ? (n - s) / c + (n < s ? 6 : 0) : l === n ? (s - i) / c + 2 : (i - n) / c + 4, o *= 60), f[0] = ~~(o + .5), f[1] = ~~(100 * a + .5), f[2] = ~~(100 * u + .5)), r && f.length < 4 && (f[3] = 1), f
        },
        at = function(e) {
            var t = [],
                r = [],
                i = -1;
            return e.split(lt).forEach((function(e) {
                var n = e.match(z) || [];
                t.push.apply(t, n), r.push(i += n.length + 1)
            })), t.c = r, t
        },
        ut = function(e, t, r) {
            var i, n, s, o, a = "",
                u = (e + a).match(lt),
                l = t ? "hsla(" : "rgba(",
                h = 0;
            if (!u) return e;
            if (u = u.map((function(e) {
                    return (e = ot(e, t, 1)) && l + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")"
                })), r && (s = at(e), (i = r.c).join(a) !== s.c.join(a)))
                for (o = (n = e.replace(lt, "1").split(z)).length - 1; h < o; h++) a += n[h] + (~i.indexOf(h) ? u.shift() || l + "0,0,0,0)" : (s.length ? s : u.length ? u : r).shift());
            if (!n)
                for (o = (n = e.split(lt)).length - 1; h < o; h++) a += n[h] + u[h];
            return a + n[o]
        },
        lt = function() {
            var e, t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (e in nt) t += "|" + e + "\\b";
            return new RegExp(t + ")", "gi")
        }(),
        ht = /hsl[a]?\(/,
        ct = function(e) {
            var t, r = e.join(" ");
            if (lt.lastIndex = 0, lt.test(r)) return t = ht.test(r), e[1] = ut(e[1], t), e[0] = ut(e[0], t, at(e[1])), !0
        },
        dt = function() {
            var e, t, r, i, n, s, o = Date.now,
                a = 500,
                d = 33,
                f = o(),
                m = f,
                g = 1e3 / 240,
                v = g,
                y = [],
                _ = function r(u) {
                    var l, h, c, p, _ = o() - m,
                        D = !0 === u;
                    if (_ > a && (f += _ - d), ((l = (c = (m += _) - f) - v) > 0 || D) && (p = ++i.frame, n = c - 1e3 * i.time, i.time = c /= 1e3, v += l + (l >= g ? 4 : g - l), h = 1), D || (e = t(r)), h)
                        for (s = 0; s < y.length; s++) y[s](c, n, p, u)
                };
            return i = {
                time: 0,
                frame: 0,
                tick: function() {
                    _(!0)
                },
                deltaRatio: function(e) {
                    return n / (1e3 / (e || 60))
                },
                wake: function() {
                    c && (!l && O() && (u = l = window, h = u.document || {}, G.gsap = er, (u.gsapVersions || (u.gsapVersions = [])).push(er.version), X(W || u.GreenSockGlobals || !u.gsap && u || {}), r = u.requestAnimationFrame), e && i.sleep(), t = r || function(e) {
                        return setTimeout(e, v - 1e3 * i.time + 1 | 0)
                    }, p = 1, _(2))
                },
                sleep: function() {
                    (r ? u.cancelAnimationFrame : clearTimeout)(e), p = 0, t = Q
                },
                lagSmoothing: function(e, t) {
                    a = e || 1 / 1e-8, d = Math.min(t, a, 0)
                },
                fps: function(e) {
                    g = 1e3 / (e || 240), v = 1e3 * i.time + g
                },
                add: function(e) {
                    y.indexOf(e) < 0 && y.push(e), ft()
                },
                remove: function(e) {
                    var t;
                    ~(t = y.indexOf(e)) && y.splice(t, 1) && s >= t && s--
                },
                _listeners: y
            }
        }(),
        ft = function() {
            return !p && dt.wake()
        },
        pt = {},
        mt = /^[\d.\-M][\d.\-,\s]/,
        gt = /["']/g,
        vt = function(e) {
            for (var t, r, i, n = {}, s = e.substr(1, e.length - 3).split(":"), o = s[0], a = 1, u = s.length; a < u; a++) r = s[a], t = a !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, t), n[o] = isNaN(i) ? i.replace(gt, "").trim() : +i, o = r.substr(t + 1).trim();
            return n
        },
        yt = function(e) {
            return function(t) {
                return 1 - e(1 - t)
            }
        },
        _t = function e(t, r) {
            for (var i, n = t._first; n;) n instanceof Tt ? e(n, r) : !n.vars.yoyoEase || n._yoyo && n._repeat || n._yoyo === r || (n.timeline ? e(n.timeline, r) : (i = n._ease, n._ease = n._yEase, n._yEase = i, n._yoyo = r)), n = n._next
        },
        Dt = function(e, t) {
            return e && (P(e) ? e : pt[e] || function(e) {
                var t, r, i, n, s = (e + "").split("("),
                    o = pt[s[0]];
                return o && s.length > 1 && o.config ? o.config.apply(null, ~e.indexOf("{") ? [vt(s[1])] : (t = e, r = t.indexOf("(") + 1, i = t.indexOf(")"), n = t.indexOf("(", r), t.substring(r, ~n && n < i ? t.indexOf(")", i + 1) : i)).split(",").map(pe)) : pt._CE && mt.test(e) ? pt._CE("", e) : o
            }(e)) || t
        },
        xt = function(e, t, r, i) {
            void 0 === r && (r = function(e) {
                return 1 - t(1 - e)
            }), void 0 === i && (i = function(e) {
                return e < .5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2
            });
            var n, s = {
                easeIn: t,
                easeOut: r,
                easeInOut: i
            };
            return ue(e, (function(e) {
                for (var t in pt[e] = G[e] = s, pt[n = e.toLowerCase()] = r, s) pt[n + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = pt[e + "." + t] = s[t]
            })), s
        },
        wt = function(e) {
            return function(t) {
                return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
            }
        },
        bt = function e(t, r, i) {
            var n = r >= 1 ? r : 1,
                s = (i || (t ? .3 : .45)) / (r < 1 ? r : 1),
                o = s / w * (Math.asin(1 / n) || 0),
                a = function(e) {
                    return 1 === e ? 1 : n * Math.pow(2, -10 * e) * T((e - o) * s) + 1
                },
                u = "out" === t ? a : "in" === t ? function(e) {
                    return 1 - a(1 - e)
                } : wt(a);
            return s = w / s, u.config = function(r, i) {
                return e(t, r, i)
            }, u
        },
        Et = function e(t, r) {
            void 0 === r && (r = 1.70158);
            var i = function(e) {
                    return e ? --e * e * ((r + 1) * e + r) + 1 : 0
                },
                n = "out" === t ? i : "in" === t ? function(e) {
                    return 1 - i(1 - e)
                } : wt(i);
            return n.config = function(r) {
                return e(t, r)
            }, n
        };
    ue("Linear,Quad,Cubic,Quart,Quint,Strong", (function(e, t) {
        var r = t < 5 ? t + 1 : t;
        xt(e + ",Power" + (r - 1), t ? function(e) {
            return Math.pow(e, r)
        } : function(e) {
            return e
        }, (function(e) {
            return 1 - Math.pow(1 - e, r)
        }), (function(e) {
            return e < .5 ? Math.pow(2 * e, r) / 2 : 1 - Math.pow(2 * (1 - e), r) / 2
        }))
    })), pt.Linear.easeNone = pt.none = pt.Linear.easeIn, xt("Elastic", bt("in"), bt("out"), bt()), m = 7.5625, v = 1 / (g = 2.75), xt("Bounce", (function(e) {
        return 1 - y(1 - e)
    }), y = function(e) {
        return e < v ? m * e * e : e < .7272727272727273 ? m * Math.pow(e - 1.5 / g, 2) + .75 : e < .9090909090909092 ? m * (e -= 2.25 / g) * e + .9375 : m * Math.pow(e - 2.625 / g, 2) + .984375
    }), xt("Expo", (function(e) {
        return e ? Math.pow(2, 10 * (e - 1)) : 0
    })), xt("Circ", (function(e) {
        return -(C(1 - e * e) - 1)
    })), xt("Sine", (function(e) {
        return 1 === e ? 1 : 1 - A(e * b)
    })), xt("Back", Et("in"), Et("out"), Et()), pt.SteppedEase = pt.steps = G.SteppedEase = {
        config: function(e, t) {
            void 0 === e && (e = 1);
            var r = 1 / e,
                i = e + (t ? 0 : 1),
                n = t ? 1 : 0;
            return function(e) {
                return ((i * ze(0, 1 - 1e-8, e) | 0) + n) * r
            }
        }
    }, D.ease = pt["quad.out"], ue("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(e) {
        return ne += e + "," + e + "Params,"
    }));
    var Ct = function(e, t) {
            this.id = E++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : ae, this.set = t ? t.getSetter : jt
        },
        At = function() {
            function e(e, t) {
                var r = e.parent || a;
                this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Le(this, +e.duration, 1, 1), this.data = e.data, p || dt.wake(), r && ke(r, this, t || 0 === t ? t : r._time, 1), e.reversed && this.reverse(), e.paused && this.paused(!0)
            }
            var t = e.prototype;
            return t.delay = function(e) {
                return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay
            }, t.duration = function(e) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
            }, t.totalDuration = function(e) {
                return arguments.length ? (this._dirty = 0, Le(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
            }, t.totalTime = function(e, t) {
                if (ft(), !arguments.length) return this._tTime;
                var r = this._dp;
                if (r && r.smoothChildTiming && this._ts) {
                    for (Me(this, e); r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
                    !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && ke(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== e || !this._dur && !t || this._initted && 1e-8 === Math.abs(this._zTime) || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), fe(this, e, t)), this
            }, t.time = function(e, t) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + Ae(this)) % this._dur || (e ? this._dur : 0), t) : this._time
            }, t.totalProgress = function(e, t) {
                return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
            }, t.progress = function(e, t) {
                return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + Ae(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
            }, t.iteration = function(e, t) {
                var r = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (e - 1) * r, t) : this._repeat ? Te(this._tTime, r) + 1 : 1
            }, t.timeScale = function(e) {
                if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                if (this._rts === e) return this;
                var t = this.parent && this._ts ? Fe(this.parent._time, this) : this._tTime;
                return this._rts = +e || 0, this._ts = this._ps || -1e-8 === e ? 0 : this._rts, Ce(this.totalTime(ze(-this._delay, this._tDur, t), !0))
            }, t.paused = function(e) {
                return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (ft(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= 1e-8) && 1e-8 !== Math.abs(this._zTime)))), this) : this._ps
            }, t.startTime = function(e) {
                if (arguments.length) {
                    this._start = e;
                    var t = this.parent || this._dp;
                    return t && (t._sort || !this.parent) && ke(t, this, e - this._delay), this
                }
                return this._start
            }, t.endTime = function(e) {
                return this._start + (R(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
            }, t.rawTime = function(e) {
                var t = this.parent || this._dp;
                return t ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Fe(t.rawTime(e), this) : this._tTime : this._tTime
            }, t.globalTime = function(e) {
                for (var t = this, r = arguments.length ? e : t.rawTime(); t;) r = t._start + r / (t._ts || 1), t = t._dp;
                return r
            }, t.repeat = function(e) {
                return arguments.length ? (this._repeat = e, Ie(this)) : this._repeat
            }, t.repeatDelay = function(e) {
                return arguments.length ? (this._rDelay = e, Ie(this)) : this._rDelay
            }, t.yoyo = function(e) {
                return arguments.length ? (this._yoyo = e, this) : this._yoyo
            }, t.seek = function(e, t) {
                return this.totalTime(Ne(this, e), R(t))
            }, t.restart = function(e, t) {
                return this.play().totalTime(e ? -this._delay : 0, R(t))
            }, t.play = function(e, t) {
                return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
            }, t.reverse = function(e, t) {
                return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
            }, t.pause = function(e, t) {
                return null != e && this.seek(e, t), this.paused(!0)
            }, t.resume = function() {
                return this.paused(!1)
            }, t.reversed = function(e) {
                return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -1e-8 : 0)), this) : this._rts < 0
            }, t.invalidate = function() {
                return this._initted = 0, this._zTime = -1e-8, this
            }, t.isActive = function() {
                var e, t = this.parent || this._dp,
                    r = this._start;
                return !(t && !(this._ts && this._initted && t.isActive() && (e = t.rawTime(!0)) >= r && e < this.endTime(!0) - 1e-8))
            }, t.eventCallback = function(e, t, r) {
                var i = this.vars;
                return arguments.length > 1 ? (t ? (i[e] = t, r && (i[e + "Params"] = r), "onUpdate" === e && (this._onUpdate = t)) : delete i[e], this) : i[e]
            }, t.then = function(e) {
                var t = this;
                return new Promise((function(r) {
                    var i = P(e) ? e : me,
                        n = function() {
                            var e = t.then;
                            t.then = null, P(i) && (i = i(t)) && (i.then || i === t) && (t.then = e), r(i), t.then = e
                        };
                    t._initted && 1 === t.totalProgress() && t._ts >= 0 || !t._tTime && t._ts < 0 ? n() : t._prom = n
                }))
            }, t.kill = function() {
                rt(this)
            }, e
        }();
    ge(At.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Tt = function(e) {
        function t(t, r) {
            var i;
            return void 0 === t && (t = {}), (i = e.call(this, t, r) || this).labels = {}, i.smoothChildTiming = !!t.smoothChildTiming, i.autoRemoveChildren = !!t.autoRemoveChildren, i._sort = R(t.sortChildren), i.parent && Se(i.parent, s(i)), t.scrollTrigger && Re(s(i), t.scrollTrigger), i
        }
        o(t, e);
        var r = t.prototype;
        return r.to = function(e, t, r) {
            return new It(e, ce(arguments, 0, this), Ne(this, M(t) ? arguments[3] : r)), this
        }, r.from = function(e, t, r) {
            return new It(e, ce(arguments, 1, this), Ne(this, M(t) ? arguments[3] : r)), this
        }, r.fromTo = function(e, t, r, i) {
            return new It(e, ce(arguments, 2, this), Ne(this, M(t) ? arguments[4] : i)), this
        }, r.set = function(e, t, r) {
            return t.duration = 0, t.parent = this, xe(t).repeatDelay || (t.repeat = 0), t.immediateRender = !!t.immediateRender, new It(e, t, Ne(this, r), 1), this
        }, r.call = function(e, t, r) {
            return ke(this, It.delayedCall(0, e, t), Ne(this, r))
        }, r.staggerTo = function(e, t, r, i, n, s, o) {
            return r.duration = t, r.stagger = r.stagger || i, r.onComplete = s, r.onCompleteParams = o, r.parent = this, new It(e, r, Ne(this, n)), this
        }, r.staggerFrom = function(e, t, r, i, n, s, o) {
            return r.runBackwards = 1, xe(r).immediateRender = R(r.immediateRender), this.staggerTo(e, t, r, i, n, s, o)
        }, r.staggerFromTo = function(e, t, r, i, n, s, o, a) {
            return i.startAt = r, xe(i).immediateRender = R(i.immediateRender), this.staggerTo(e, t, i, n, s, o, a)
        }, r.render = function(e, t, r) {
            var i, n, s, o, u, l, h, c, d, f, p, m, g = this._time,
                v = this._dirty ? this.totalDuration() : this._tDur,
                y = this._dur,
                _ = this !== a && e > v - 1e-8 && e >= 0 ? v : e < 1e-8 ? 0 : e,
                D = this._zTime < 0 != e < 0 && (this._initted || !y);
            if (_ !== this._tTime || r || D) {
                if (g !== this._time && y && (_ += this._time - g, e += this._time - g), i = _, d = this._start, l = !(c = this._ts), D && (y || (g = this._zTime), (e || !t) && (this._zTime = e)), this._repeat && (p = this._yoyo, u = y + this._rDelay, i = le(_ % u), _ === v ? (o = this._repeat, i = y) : ((o = ~~(_ / u)) && o === _ / u && (i = y, o--), i > y && (i = y)), f = Te(this._tTime, u), !g && this._tTime && f !== o && (f = o), p && 1 & o && (i = y - i, m = 1), o !== f && !this._lock)) {
                    var x = p && 1 & f,
                        w = x === (p && 1 & o);
                    if (o < f && (x = !x), g = x ? 0 : y, this._lock = 1, this.render(g || (m ? 0 : le(o * u)), t, !y)._lock = 0, !t && this.parent && tt(this, "onRepeat"), this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1), g !== this._time || l !== !this._ts) return this;
                    if (y = this._dur, v = this._tDur, w && (this._lock = 2, g = x ? y : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !m && this.invalidate()), this._lock = 0, !this._ts && !l) return this;
                    _t(this, m)
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function(e, t, r) {
                        var i;
                        if (r > t)
                            for (i = e._first; i && i._start <= r;) {
                                if (!i._dur && "isPause" === i.data && i._start > t) return i;
                                i = i._next
                            } else
                                for (i = e._last; i && i._start >= r;) {
                                    if (!i._dur && "isPause" === i.data && i._start < t) return i;
                                    i = i._prev
                                }
                    }(this, le(g), le(i))) && (_ -= i - (i = h._start)), this._tTime = _, this._time = i, this._act = !c, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e), !g && i && !t && tt(this, "onStart"), i >= g && e >= 0)
                    for (n = this._first; n;) {
                        if (s = n._next, (n._act || i >= n._start) && n._ts && h !== n) {
                            if (n.parent !== this) return this.render(e, t, r);
                            if (n.render(n._ts > 0 ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, t, r), i !== this._time || !this._ts && !l) {
                                h = 0, s && (_ += this._zTime = -1e-8);
                                break
                            }
                        }
                        n = s
                    } else {
                        n = this._last;
                        for (var b = e < 0 ? e : i; n;) {
                            if (s = n._prev, (n._act || b <= n._end) && n._ts && h !== n) {
                                if (n.parent !== this) return this.render(e, t, r);
                                if (n.render(n._ts > 0 ? (b - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (b - n._start) * n._ts, t, r), i !== this._time || !this._ts && !l) {
                                    h = 0, s && (_ += this._zTime = b ? -1e-8 : 1e-8);
                                    break
                                }
                            }
                            n = s
                        }
                    }
                if (h && !t && (this.pause(), h.render(i >= g ? 0 : -1e-8)._zTime = i >= g ? 1 : -1, this._ts)) return this._start = d, Pe(this), this.render(e, t, r);
                this._onUpdate && !t && tt(this, "onUpdate", !0), (_ === v && v >= this.totalDuration() || !_ && g) && (d !== this._start && Math.abs(c) === Math.abs(this._ts) || this._lock || ((e || !y) && (_ === v && this._ts > 0 || !_ && this._ts < 0) && be(this, 1), t || e < 0 && !g || !_ && !g || (tt(this, _ === v ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < v && this.timeScale() > 0) && this._prom())))
            }
            return this
        }, r.add = function(e, t) {
            var r = this;
            if (M(t) || (t = Ne(this, t)), !(e instanceof At)) {
                if (B(e)) return e.forEach((function(e) {
                    return r.add(e, t)
                })), this;
                if (F(e)) return this.addLabel(e, t);
                if (!P(e)) return this;
                e = It.delayedCall(0, e)
            }
            return this !== e ? ke(this, e, t) : this
        }, r.getChildren = function(e, t, r, i) {
            void 0 === e && (e = !0), void 0 === t && (t = !0), void 0 === r && (r = !0), void 0 === i && (i = -x);
            for (var n = [], s = this._first; s;) s._start >= i && (s instanceof It ? t && n.push(s) : (r && n.push(s), e && n.push.apply(n, s.getChildren(!0, t, r)))), s = s._next;
            return n
        }, r.getById = function(e) {
            for (var t = this.getChildren(1, 1, 1), r = t.length; r--;)
                if (t[r].vars.id === e) return t[r]
        }, r.remove = function(e) {
            return F(e) ? this.removeLabel(e) : P(e) ? this.killTweensOf(e) : (we(this, e), e === this._recent && (this._recent = this._last), Ee(this))
        }, r.totalTime = function(t, r) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = le(dt.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))), e.prototype.totalTime.call(this, t, r), this._forcing = 0, this) : this._tTime
        }, r.addLabel = function(e, t) {
            return this.labels[e] = Ne(this, t), this
        }, r.removeLabel = function(e) {
            return delete this.labels[e], this
        }, r.addPause = function(e, t, r) {
            var i = It.delayedCall(0, t || Q, r);
            return i.data = "isPause", this._hasPause = 1, ke(this, i, Ne(this, e))
        }, r.removePause = function(e) {
            var t = this._first;
            for (e = Ne(this, e); t;) t._start === e && "isPause" === t.data && be(t), t = t._next
        }, r.killTweensOf = function(e, t, r) {
            for (var i = this.getTweensOf(e, r), n = i.length; n--;) Ft !== i[n] && i[n].kill(e, t);
            return this
        }, r.getTweensOf = function(e, t) {
            for (var r, i = [], n = We(e), s = this._first, o = M(t); s;) s instanceof It ? he(s._targets, n) && (o ? (!Ft || s._initted && s._ts) && s.globalTime(0) <= t && s.globalTime(s.totalDuration()) > t : !t || s.isActive()) && i.push(s) : (r = s.getTweensOf(n, t)).length && i.push.apply(i, r), s = s._next;
            return i
        }, r.tweenTo = function(e, t) {
            t = t || {};
            var r = this,
                i = Ne(r, e),
                n = t,
                s = n.startAt,
                o = n.onStart,
                a = n.onStartParams,
                u = It.to(r, ge(t, {
                    ease: "none",
                    lazy: !1,
                    time: i,
                    overwrite: "auto",
                    duration: t.duration || Math.abs((i - (s && "time" in s ? s.time : r._time)) / r.timeScale()) || 1e-8,
                    onStart: function() {
                        r.pause();
                        var e = t.duration || Math.abs((i - r._time) / r.timeScale());
                        u._dur !== e && Le(u, e, 0, 1).render(u._time, !0, !0), o && o.apply(u, a || [])
                    }
                }));
            return u
        }, r.tweenFromTo = function(e, t, r) {
            return this.tweenTo(t, ge({
                startAt: {
                    time: Ne(this, e)
                }
            }, r))
        }, r.recent = function() {
            return this._recent
        }, r.nextLabel = function(e) {
            return void 0 === e && (e = this._time), et(this, Ne(this, e))
        }, r.previousLabel = function(e) {
            return void 0 === e && (e = this._time), et(this, Ne(this, e), 1)
        }, r.currentLabel = function(e) {
            return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + 1e-8)
        }, r.shiftChildren = function(e, t, r) {
            void 0 === r && (r = 0);
            for (var i, n = this._first, s = this.labels; n;) n._start >= r && (n._start += e, n._end += e), n = n._next;
            if (t)
                for (i in s) s[i] >= r && (s[i] += e);
            return Ee(this)
        }, r.invalidate = function() {
            var t = this._first;
            for (this._lock = 0; t;) t.invalidate(), t = t._next;
            return e.prototype.invalidate.call(this)
        }, r.clear = function(e) {
            void 0 === e && (e = !0);
            for (var t, r = this._first; r;) t = r._next, this.remove(r), r = t;
            return this._time = this._tTime = this._pTime = 0, e && (this.labels = {}), Ee(this)
        }, r.totalDuration = function(e) {
            var t, r, i, n = 0,
                s = this,
                o = s._last,
                u = x;
            if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -e : e));
            if (s._dirty) {
                for (i = s.parent; o;) t = o._prev, o._dirty && o.totalDuration(), (r = o._start) > u && s._sort && o._ts && !s._lock ? (s._lock = 1, ke(s, o, r - o._delay, 1)._lock = 0) : u = r, r < 0 && o._ts && (n -= r, (!i && !s._dp || i && i.smoothChildTiming) && (s._start += r / s._ts, s._time -= r, s._tTime -= r), s.shiftChildren(-r, !1, -Infinity), u = 0), o._end > n && o._ts && (n = o._end), o = t;
                Le(s, s === a && s._time > n ? s._time : n, 1, 1), s._dirty = 0
            }
            return s._tDur
        }, t.updateRoot = function(e) {
            if (a._ts && (fe(a, Fe(e, a)), d = dt.frame), dt.frame >= re) {
                re += _.autoSleep || 120;
                var t = a._first;
                if ((!t || !t._ts) && _.autoSleep && dt._listeners.length < 2) {
                    for (; t && !t._ts;) t = t._next;
                    t || dt.sleep()
                }
            }
        }, t
    }(At);
    ge(Tt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var Ft, Pt = function(e, t, r, i, n, s, o) {
            var a, u, l, h, c, d, f, p, m = new Qt(this._pt, e, t, 0, 1, Gt, null, n),
                g = 0,
                v = 0;
            for (m.b = r, m.e = i, r += "", (f = ~(i += "").indexOf("random(")) && (i = Ke(i)), s && (s(p = [r, i], e, t), r = p[0], i = p[1]), u = r.match(j) || []; a = j.exec(i);) h = a[0], c = i.substring(g, a.index), l ? l = (l + 1) % 5 : "rgba(" === c.substr(-5) && (l = 1), h !== u[v++] && (d = parseFloat(u[v - 1]) || 0, m._pt = {
                _next: m._pt,
                p: c || 1 === v ? c : ",",
                s: d,
                c: "=" === h.charAt(1) ? parseFloat(h.substr(2)) * ("-" === h.charAt(0) ? -1 : 1) : parseFloat(h) - d,
                m: l && l < 4 ? Math.round : 0
            }, g = j.lastIndex);
            return m.c = g < i.length ? i.substring(g, i.length) : "", m.fp = o, (V.test(i) || f) && (m.e = 0), this._pt = m, m
        },
        Mt = function(e, t, r, i, n, s, o, a, u) {
            P(i) && (i = i(n || 0, e, s));
            var l, h = e[t],
                c = "get" !== r ? r : P(h) ? u ? e[t.indexOf("set") || !P(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](u) : e[t]() : h,
                d = P(h) ? u ? Ut : Nt : Bt;
            if (F(i) && (~i.indexOf("random(") && (i = Ke(i)), "=" === i.charAt(1) && (i = parseFloat(c) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (je(c) || 0))), c !== i) return isNaN(c * i) ? (!h && !(t in e) && H(t, i), Pt.call(this, e, t, c, i, d, a || _.stringFilter, u)) : (l = new Qt(this._pt, e, t, +c || 0, i - (c || 0), "boolean" == typeof h ? Yt : Vt, 0, d), u && (l.fp = u), o && l.modifier(o, this, e), this._pt = l)
        },
        St = function(e, t, r, i, n, s) {
            var o, a, u, l;
            if (ee[e] && !1 !== (o = new ee[e]).init(n, o.rawVars ? t[e] : function(e, t, r, i, n) {
                    if (P(e) && (e = Rt(e, n, t, r, i)), !k(e) || e.style && e.nodeType || B(e) || I(e)) return F(e) ? Rt(e, n, t, r, i) : e;
                    var s, o = {};
                    for (s in e) o[s] = Rt(e[s], n, t, r, i);
                    return o
                }(t[e], i, n, s, r), r, i, s) && (r._pt = a = new Qt(r._pt, n, e, 0, 1, o.render, o, 0, o.priority), r !== f))
                for (u = r._ptLookup[r._targets.indexOf(n)], l = o._props.length; l--;) u[o._props[l]] = a;
            return o
        },
        kt = function e(t, r) {
            var i, n, s, o, u, l, h, c, d, f, p, m, g, v = t.vars,
                y = v.ease,
                _ = v.startAt,
                x = v.immediateRender,
                w = v.lazy,
                b = v.onUpdate,
                E = v.onUpdateParams,
                C = v.callbackScope,
                A = v.runBackwards,
                T = v.yoyoEase,
                F = v.keyframes,
                P = v.autoRevert,
                M = t._dur,
                S = t._startAt,
                k = t._targets,
                O = t.parent,
                L = O && "nested" === O.data ? O.parent._targets : k,
                I = "auto" === t._overwrite,
                B = t.timeline;
            if (B && (!F || !y) && (y = "none"), t._ease = Dt(y, D.ease), t._yEase = T ? yt(Dt(!0 === T ? y : T, D.ease)) : 0, T && t._yoyo && !t._repeat && (T = t._yEase, t._yEase = t._ease, t._ease = T), !B) {
                if (m = (c = k[0] ? oe(k[0]).harness : 0) && v[c.prop], i = De(v, J), S && S.render(-1, !0).kill(), _) {
                    if (be(t._startAt = It.set(k, ge({
                            data: "isStart",
                            overwrite: !1,
                            parent: O,
                            immediateRender: !0,
                            lazy: R(w),
                            startAt: null,
                            delay: 0,
                            onUpdate: b,
                            onUpdateParams: E,
                            callbackScope: C,
                            stagger: 0
                        }, _))), x)
                        if (r > 0) P || (t._startAt = 0);
                        else if (M && !(r < 0 && S)) return void(r && (t._zTime = r))
                } else if (A && M)
                    if (S) !P && (t._startAt = 0);
                    else if (r && (x = !1), s = ge({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: x && R(w),
                        immediateRender: x,
                        stagger: 0,
                        parent: O
                    }, i), m && (s[c.prop] = m), be(t._startAt = It.set(k, s)), x) {
                    if (!r) return
                } else e(t._startAt, 1e-8);
                for (t._pt = 0, w = M && R(w) || w && !M, n = 0; n < k.length; n++) {
                    if (h = (u = k[n])._gsap || se(k)[n]._gsap, t._ptLookup[n] = f = {}, $[h.id] && K.length && de(), p = L === k ? n : L.indexOf(u), c && !1 !== (d = new c).init(u, m || i, t, p, L) && (t._pt = o = new Qt(t._pt, u, d.name, 0, 1, d.render, d, 0, d.priority), d._props.forEach((function(e) {
                            f[e] = o
                        })), d.priority && (l = 1)), !c || m)
                        for (s in i) ee[s] && (d = St(s, i, t, p, u, L)) ? d.priority && (l = 1) : f[s] = o = Mt.call(t, u, s, "get", i[s], p, L, 0, v.stringFilter);
                    t._op && t._op[n] && t.kill(u, t._op[n]), I && t._pt && (Ft = t, a.killTweensOf(u, f, t.globalTime(0)), g = !t.parent, Ft = 0), t._pt && w && ($[h.id] = 1)
                }
                l && Zt(t), t._onInit && t._onInit(t)
            }
            t._from = !B && !!v.runBackwards, t._onUpdate = b, t._initted = (!t._op || t._pt) && !g
        },
        Rt = function(e, t, r, i, n) {
            return P(e) ? e.call(t, r, i, n) : F(e) && ~e.indexOf("random(") ? Ke(e) : e
        },
        Ot = ne + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        Lt = (Ot + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
        It = function(e) {
            function t(t, r, i, n) {
                var o;
                "number" == typeof r && (i.duration = r, r = i, i = null);
                var u, l, h, c, d, f, p, m, g = (o = e.call(this, n ? r : xe(r), i) || this).vars,
                    v = g.duration,
                    y = g.delay,
                    D = g.immediateRender,
                    x = g.stagger,
                    w = g.overwrite,
                    b = g.keyframes,
                    E = g.defaults,
                    C = g.scrollTrigger,
                    A = g.yoyoEase,
                    T = o.parent,
                    F = (B(t) || I(t) ? M(t[0]) : "length" in r) ? [t] : We(t);
                if (o._targets = F.length ? se(F) : q("GSAP target " + t + " not found. https://greensock.com", !_.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = w, b || x || L(v) || L(y)) {
                    if (r = o.vars, (u = o.timeline = new Tt({
                            data: "nested",
                            defaults: E || {}
                        })).kill(), u.parent = s(o), b) ge(u.vars.defaults, {
                        ease: "none"
                    }), b.forEach((function(e) {
                        return u.to(F, e, ">")
                    }));
                    else {
                        if (c = F.length, p = x ? He(x) : Q, k(x))
                            for (d in x) ~Ot.indexOf(d) && (m || (m = {}), m[d] = x[d]);
                        for (l = 0; l < c; l++) {
                            for (d in h = {}, r) Lt.indexOf(d) < 0 && (h[d] = r[d]);
                            h.stagger = 0, A && (h.yoyoEase = A), m && ye(h, m), f = F[l], h.duration = +Rt(v, s(o), l, f, F), h.delay = (+Rt(y, s(o), l, f, F) || 0) - o._delay, !x && 1 === c && h.delay && (o._delay = y = h.delay, o._start += y, h.delay = 0), u.to(f, h, p(l, f, F))
                        }
                        u.duration() ? v = y = 0 : o.timeline = 0
                    }
                    v || o.duration(v = u.duration())
                } else o.timeline = 0;
                return !0 === w && (Ft = s(o), a.killTweensOf(F), Ft = 0), T && Se(T, s(o)), (D || !v && !b && o._start === le(T._time) && R(D) && function e(t) {
                    return !t || t._ts && e(t.parent)
                }(s(o)) && "nested" !== T.data) && (o._tTime = -1e-8, o.render(Math.max(0, -y))), C && Re(s(o), C), o
            }
            o(t, e);
            var r = t.prototype;
            return r.render = function(e, t, r) {
                var i, n, s, o, a, u, l, h, c, d = this._time,
                    f = this._tDur,
                    p = this._dur,
                    m = e > f - 1e-8 && e >= 0 ? f : e < 1e-8 ? 0 : e;
                if (p) {
                    if (m !== this._tTime || !e || r || this._startAt && this._zTime < 0 != e < 0) {
                        if (i = m, h = this.timeline, this._repeat) {
                            if (o = p + this._rDelay, i = le(m % o), m === f ? (s = this._repeat, i = p) : ((s = ~~(m / o)) && s === m / o && (i = p, s--), i > p && (i = p)), (u = this._yoyo && 1 & s) && (c = this._yEase, i = p - i), a = Te(this._tTime, o), i === d && !r && this._initted) return this;
                            s !== a && (h && this._yEase && _t(h, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(le(o * s), !0).invalidate()._lock = 0))
                        }
                        if (!this._initted) {
                            if (Oe(this, e < 0 ? e : i, r, t)) return this._tTime = 0, this;
                            if (p !== this._dur) return this.render(e, t, r)
                        }
                        for (this._tTime = m, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = l = (c || this._ease)(i / p), this._from && (this.ratio = l = 1 - l), i && !d && !t && tt(this, "onStart"), n = this._pt; n;) n.r(l, n.d), n = n._next;
                        h && h.render(e < 0 ? e : !i && u ? -1e-8 : h._dur * l, t, r) || this._startAt && (this._zTime = e), this._onUpdate && !t && (e < 0 && this._startAt && this._startAt.render(e, !0, r), tt(this, "onUpdate")), this._repeat && s !== a && this.vars.onRepeat && !t && this.parent && tt(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (e < 0 && this._startAt && !this._onUpdate && this._startAt.render(e, !0, !0), (e || !p) && (m === this._tDur && this._ts > 0 || !m && this._ts < 0) && be(this, 1), t || e < 0 && !d || !m && !d || (tt(this, m === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(m < f && this.timeScale() > 0) && this._prom()))
                    }
                } else ! function(e, t, r, i) {
                    var n, s, o = e.ratio,
                        a = t < 0 || !t && o && !e._start && e._zTime > 1e-8 && !e._dp._lock || (e._ts < 0 || e._dp._ts < 0) && "isFromStart" !== e.data && "isStart" !== e.data ? 0 : 1,
                        u = e._rDelay,
                        l = 0;
                    if (u && e._repeat && (l = ze(0, e._tDur, t), Te(l, u) !== (s = Te(e._tTime, u)) && (o = 1 - a, e.vars.repeatRefresh && e._initted && e.invalidate())), a !== o || i || 1e-8 === e._zTime || !t && e._zTime) {
                        if (!e._initted && Oe(e, t, i, r)) return;
                        for (s = e._zTime, e._zTime = t || (r ? 1e-8 : 0), r || (r = t && !s), e.ratio = a, e._from && (a = 1 - a), e._time = 0, e._tTime = l, r || tt(e, "onStart"), n = e._pt; n;) n.r(a, n.d), n = n._next;
                        e._startAt && t < 0 && e._startAt.render(t, !0, !0), e._onUpdate && !r && tt(e, "onUpdate"), l && e._repeat && !r && e.parent && tt(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === a && (a && be(e, 1), r || (tt(e, a ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
                    } else e._zTime || (e._zTime = t)
                }(this, e, t, r);
                return this
            }, r.targets = function() {
                return this._targets
            }, r.invalidate = function() {
                return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), e.prototype.invalidate.call(this)
            }, r.kill = function(e, t) {
                if (void 0 === t && (t = "all"), !(e || t && "all" !== t) && (this._lazy = 0, this.parent)) return rt(this);
                if (this.timeline) {
                    var r = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(e, t, Ft && !0 !== Ft.vars.overwrite)._first || rt(this), this.parent && r !== this.timeline.totalDuration() && Le(this, this._dur * this.timeline._tDur / r, 0, 1), this
                }
                var i, n, s, o, a, u, l, h = this._targets,
                    c = e ? We(e) : h,
                    d = this._ptLookup,
                    f = this._pt;
                if ((!t || "all" === t) && function(e, t) {
                        for (var r = e.length, i = r === t.length; i && r-- && e[r] === t[r];);
                        return r < 0
                    }(h, c)) return "all" === t && (this._pt = 0), rt(this);
                for (i = this._op = this._op || [], "all" !== t && (F(t) && (a = {}, ue(t, (function(e) {
                        return a[e] = 1
                    })), t = a), t = function(e, t) {
                        var r, i, n, s, o = e[0] ? oe(e[0]).harness : 0,
                            a = o && o.aliases;
                        if (!a) return t;
                        for (i in r = ye({}, t), a)
                            if (i in r)
                                for (n = (s = a[i].split(",")).length; n--;) r[s[n]] = r[i];
                        return r
                    }(h, t)), l = h.length; l--;)
                    if (~c.indexOf(h[l]))
                        for (a in n = d[l], "all" === t ? (i[l] = t, o = n, s = {}) : (s = i[l] = i[l] || {}, o = t), o)(u = n && n[a]) && ("kill" in u.d && !0 !== u.d.kill(a) || we(this, u, "_pt"), delete n[a]), "all" !== s && (s[a] = 1);
                return this._initted && !this._pt && f && rt(this), this
            }, t.to = function(e, r) {
                return new t(e, r, arguments[2])
            }, t.from = function(e, r) {
                return new t(e, ce(arguments, 1))
            }, t.delayedCall = function(e, r, i, n) {
                return new t(r, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: e,
                    onComplete: r,
                    onReverseComplete: r,
                    onCompleteParams: i,
                    onReverseCompleteParams: i,
                    callbackScope: n
                })
            }, t.fromTo = function(e, r, i) {
                return new t(e, ce(arguments, 2))
            }, t.set = function(e, r) {
                return r.duration = 0, r.repeatDelay || (r.repeat = 0), new t(e, r)
            }, t.killTweensOf = function(e, t, r) {
                return a.killTweensOf(e, t, r)
            }, t
        }(At);
    ge(It.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), ue("staggerTo,staggerFrom,staggerFromTo", (function(e) {
        It[e] = function() {
            var t = new Tt,
                r = Ve.call(arguments, 0);
            return r.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, r)
        }
    }));
    var Bt = function(e, t, r) {
            return e[t] = r
        },
        Nt = function(e, t, r) {
            return e[t](r)
        },
        Ut = function(e, t, r, i) {
            return e[t](i.fp, r)
        },
        zt = function(e, t, r) {
            return e.setAttribute(t, r)
        },
        jt = function(e, t) {
            return P(e[t]) ? Nt : S(e[t]) && e.setAttribute ? zt : Bt
        },
        Vt = function(e, t) {
            return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4, t)
        },
        Yt = function(e, t) {
            return t.set(t.t, t.p, !!(t.s + t.c * e), t)
        },
        Gt = function(e, t) {
            var r = t._pt,
                i = "";
            if (!e && t.b) i = t.b;
            else if (1 === e && t.e) i = t.e;
            else {
                for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round(1e4 * (r.s + r.c * e)) / 1e4) + i, r = r._next;
                i += t.c
            }
            t.set(t.t, t.p, i, t)
        },
        Wt = function(e, t) {
            for (var r = t._pt; r;) r.r(e, r.d), r = r._next
        },
        Xt = function(e, t, r, i) {
            for (var n, s = this._pt; s;) n = s._next, s.p === i && s.modifier(e, t, r), s = n
        },
        Ht = function(e) {
            for (var t, r, i = this._pt; i;) r = i._next, i.p === e && !i.op || i.op === e ? we(this, i, "_pt") : i.dep || (t = 1), i = r;
            return !t
        },
        qt = function(e, t, r, i) {
            i.mSet(e, t, i.m.call(i.tween, r, i.mt), i)
        },
        Zt = function(e) {
            for (var t, r, i, n, s = e._pt; s;) {
                for (t = s._next, r = i; r && r.pr > s.pr;) r = r._next;
                (s._prev = r ? r._prev : n) ? s._prev._next = s: i = s, (s._next = r) ? r._prev = s : n = s, s = t
            }
            e._pt = i
        },
        Qt = function() {
            function e(e, t, r, i, n, s, o, a, u) {
                this.t = t, this.s = i, this.c = n, this.p = r, this.r = s || Vt, this.d = o || this, this.set = a || Bt, this.pr = u || 0, this._next = e, e && (e._prev = this)
            }
            return e.prototype.modifier = function(e, t, r) {
                this.mSet = this.mSet || this.set, this.set = qt, this.m = e, this.mt = r, this.tween = t
            }, e
        }();
    ue(ne + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(e) {
        return J[e] = 1
    })), G.TweenMax = G.TweenLite = It, G.TimelineLite = G.TimelineMax = Tt, a = new Tt({
        sortChildren: !1,
        defaults: D,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), _.stringFilter = ct;
    var Jt = {
        registerPlugin: function() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            t.forEach((function(e) {
                return it(e)
            }))
        },
        timeline: function(e) {
            return new Tt(e)
        },
        getTweensOf: function(e, t) {
            return a.getTweensOf(e, t)
        },
        getProperty: function(e, t, r, i) {
            F(e) && (e = We(e)[0]);
            var n = oe(e || {}).get,
                s = r ? me : pe;
            return "native" === r && (r = ""), e ? t ? s((ee[t] && ee[t].get || n)(e, t, r, i)) : function(t, r, i) {
                return s((ee[t] && ee[t].get || n)(e, t, r, i))
            } : e
        },
        quickSetter: function(e, t, r) {
            if ((e = We(e)).length > 1) {
                var i = e.map((function(e) {
                        return er.quickSetter(e, t, r)
                    })),
                    n = i.length;
                return function(e) {
                    for (var t = n; t--;) i[t](e)
                }
            }
            e = e[0] || {};
            var s = ee[t],
                o = oe(e),
                a = o.harness && (o.harness.aliases || {})[t] || t,
                u = s ? function(t) {
                    var i = new s;
                    f._pt = 0, i.init(e, r ? t + r : t, f, 0, [e]), i.render(1, i), f._pt && Wt(1, f)
                } : o.set(e, a);
            return s ? u : function(t) {
                return u(e, a, r ? t + r : t, o, 1)
            }
        },
        isTweening: function(e) {
            return a.getTweensOf(e, !0).length > 0
        },
        defaults: function(e) {
            return e && e.ease && (e.ease = Dt(e.ease, D.ease)), _e(D, e || {})
        },
        config: function(e) {
            return _e(_, e || {})
        },
        registerEffect: function(e) {
            var t = e.name,
                r = e.effect,
                i = e.plugins,
                n = e.defaults,
                s = e.extendTimeline;
            (i || "").split(",").forEach((function(e) {
                return e && !ee[e] && !G[e] && q(t + " effect requires " + e + " plugin.")
            })), te[t] = function(e, t, i) {
                return r(We(e), ge(t || {}, n), i)
            }, s && (Tt.prototype[t] = function(e, r, i) {
                return this.add(te[t](e, k(r) ? r : (i = r) && {}, this), i)
            })
        },
        registerEase: function(e, t) {
            pt[e] = Dt(t)
        },
        parseEase: function(e, t) {
            return arguments.length ? Dt(e, t) : pt
        },
        getById: function(e) {
            return a.getById(e)
        },
        exportRoot: function(e, t) {
            void 0 === e && (e = {});
            var r, i, n = new Tt(e);
            for (n.smoothChildTiming = R(e.smoothChildTiming), a.remove(n), n._dp = 0, n._time = n._tTime = a._time, r = a._first; r;) i = r._next, !t && !r._dur && r instanceof It && r.vars.onComplete === r._targets[0] || ke(n, r, r._start - r._delay), r = i;
            return ke(a, n, 0), n
        },
        utils: {
            wrap: function e(t, r, i) {
                var n = r - t;
                return B(t) ? Je(t, e(0, t.length), r) : Ue(i, (function(e) {
                    return (n + (e - t) % n) % n + t
                }))
            },
            wrapYoyo: function e(t, r, i) {
                var n = r - t,
                    s = 2 * n;
                return B(t) ? Je(t, e(0, t.length - 1), r) : Ue(i, (function(e) {
                    return t + ((e = (s + (e - t) % s) % s || 0) > n ? s - e : e)
                }))
            },
            distribute: He,
            random: Qe,
            snap: Ze,
            normalize: function(e, t, r) {
                return $e(e, t, 0, 1, r)
            },
            getUnit: je,
            clamp: function(e, t, r) {
                return Ue(r, (function(r) {
                    return ze(e, t, r)
                }))
            },
            splitColor: ot,
            toArray: We,
            mapRange: $e,
            pipe: function() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return function(e) {
                    return t.reduce((function(e, t) {
                        return t(e)
                    }), e)
                }
            },
            unitize: function(e, t) {
                return function(r) {
                    return e(parseFloat(r)) + (t || je(r))
                }
            },
            interpolate: function e(t, r, i, n) {
                var s = isNaN(t + r) ? 0 : function(e) {
                    return (1 - e) * t + e * r
                };
                if (!s) {
                    var o, a, u, l, h, c = F(t),
                        d = {};
                    if (!0 === i && (n = 1) && (i = null), c) t = {
                        p: t
                    }, r = {
                        p: r
                    };
                    else if (B(t) && !B(r)) {
                        for (u = [], l = t.length, h = l - 2, a = 1; a < l; a++) u.push(e(t[a - 1], t[a]));
                        l--, s = function(e) {
                            e *= l;
                            var t = Math.min(h, ~~e);
                            return u[t](e - t)
                        }, i = r
                    } else n || (t = ye(B(t) ? [] : {}, t));
                    if (!u) {
                        for (o in r) Mt.call(d, t, o, "get", r[o]);
                        s = function(e) {
                            return Wt(e, d) || (c ? t.p : t)
                        }
                    }
                }
                return Ue(i, s)
            },
            shuffle: Xe
        },
        install: X,
        effects: te,
        ticker: dt,
        updateRoot: Tt.updateRoot,
        plugins: ee,
        globalTimeline: a,
        core: {
            PropTween: Qt,
            globals: Z,
            Tween: It,
            Timeline: Tt,
            Animation: At,
            getCache: oe,
            _removeLinkedListItem: we
        }
    };
    ue("to,from,fromTo,delayedCall,set,killTweensOf", (function(e) {
        return Jt[e] = It[e]
    })), dt.add(Tt.updateRoot), f = Jt.to({}, {
        duration: 0
    });
    var Kt = function(e, t) {
            for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t;) r = r._next;
            return r
        },
        $t = function(e, t) {
            return {
                name: e,
                rawVars: 1,
                init: function(e, r, i) {
                    i._onInit = function(e) {
                        var i, n;
                        if (F(r) && (i = {}, ue(r, (function(e) {
                                return i[e] = 1
                            })), r = i), t) {
                            for (n in i = {}, r) i[n] = t(r[n]);
                            r = i
                        }! function(e, t) {
                            var r, i, n, s = e._targets;
                            for (r in t)
                                for (i = s.length; i--;)(n = e._ptLookup[i][r]) && (n = n.d) && (n._pt && (n = Kt(n, r)), n && n.modifier && n.modifier(t[r], e, s[i], r))
                        }(e, r)
                    }
                }
            }
        },
        er = Jt.registerPlugin({
            name: "attr",
            init: function(e, t, r, i, n) {
                var s, o;
                for (s in t)(o = this.add(e, "setAttribute", (e.getAttribute(s) || 0) + "", t[s], i, n, 0, 0, s)) && (o.op = s), this._props.push(s)
            }
        }, {
            name: "endArray",
            init: function(e, t) {
                for (var r = t.length; r--;) this.add(e, r, e[r] || 0, t[r])
            }
        }, $t("roundProps", qe), $t("modifiers"), $t("snap", Ze)) || Jt;
    It.version = Tt.version = er.version = "3.5.1", c = 1, O() && ft();
    pt.Power0, pt.Power1, pt.Power2, pt.Power3, pt.Power4, pt.Linear, pt.Quad, pt.Cubic, pt.Quart, pt.Quint, pt.Strong, pt.Elastic, pt.Back, pt.SteppedEase, pt.Bounce, pt.Sine, pt.Expo, pt.Circ;
    /*!
     * CSSPlugin 3.5.1
     * https://greensock.com
     *
     * Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var tr, rr, ir, nr, sr, or, ar, ur, lr = {},
        hr = 180 / Math.PI,
        cr = Math.PI / 180,
        dr = Math.atan2,
        fr = /([A-Z])/g,
        pr = /(?:left|right|width|margin|padding|x)/i,
        mr = /[\s,\(]\S/,
        gr = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        vr = function(e, t) {
            return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
        },
        yr = function(e, t) {
            return t.set(t.t, t.p, 1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
        },
        _r = function(e, t) {
            return t.set(t.t, t.p, e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t)
        },
        Dr = function(e, t) {
            var r = t.s + t.c * e;
            t.set(t.t, t.p, ~~(r + (r < 0 ? -.5 : .5)) + t.u, t)
        },
        xr = function(e, t) {
            return t.set(t.t, t.p, e ? t.e : t.b, t)
        },
        wr = function(e, t) {
            return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t)
        },
        br = function(e, t, r) {
            return e.style[t] = r
        },
        Er = function(e, t, r) {
            return e.style.setProperty(t, r)
        },
        Cr = function(e, t, r) {
            return e._gsap[t] = r
        },
        Ar = function(e, t, r) {
            return e._gsap.scaleX = e._gsap.scaleY = r
        },
        Tr = function(e, t, r, i, n) {
            var s = e._gsap;
            s.scaleX = s.scaleY = r, s.renderTransform(n, s)
        },
        Fr = function(e, t, r, i, n) {
            var s = e._gsap;
            s[t] = r, s.renderTransform(n, s)
        },
        Pr = "transform",
        Mr = Pr + "Origin",
        Sr = function(e, t) {
            var r = rr.createElementNS ? rr.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : rr.createElement(e);
            return r.style ? r : rr.createElement(e)
        },
        kr = function e(t, r, i) {
            var n = getComputedStyle(t);
            return n[r] || n.getPropertyValue(r.replace(fr, "-$1").toLowerCase()) || n.getPropertyValue(r) || !i && e(t, Or(r) || r, 1) || ""
        },
        Rr = "O,Moz,ms,Ms,Webkit".split(","),
        Or = function(e, t, r) {
            var i = (t || sr).style,
                n = 5;
            if (e in i && !r) return e;
            for (e = e.charAt(0).toUpperCase() + e.substr(1); n-- && !(Rr[n] + e in i););
            return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? Rr[n] : "") + e
        },
        Lr = function() {
            "undefined" != typeof window && window.document && (tr = window, rr = tr.document, ir = rr.documentElement, sr = Sr("div") || {
                style: {}
            }, or = Sr("div"), Pr = Or(Pr), Mr = Pr + "Origin", sr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", ur = !!Or("perspective"), nr = 1)
        },
        Ir = function e(t) {
            var r, i = Sr("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                n = this.parentNode,
                s = this.nextSibling,
                o = this.style.cssText;
            if (ir.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                r = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = e
            } catch (e) {} else this._gsapBBox && (r = this._gsapBBox());
            return n && (s ? n.insertBefore(this, s) : n.appendChild(this)), ir.removeChild(i), this.style.cssText = o, r
        },
        Br = function(e, t) {
            for (var r = t.length; r--;)
                if (e.hasAttribute(t[r])) return e.getAttribute(t[r])
        },
        Nr = function(e) {
            var t;
            try {
                t = e.getBBox()
            } catch (r) {
                t = Ir.call(e, !0)
            }
            return t && (t.width || t.height) || e.getBBox === Ir || (t = Ir.call(e, !0)), !t || t.width || t.x || t.y ? t : {
                x: +Br(e, ["x", "cx", "x1"]) || 0,
                y: +Br(e, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            }
        },
        Ur = function(e) {
            return !(!e.getCTM || e.parentNode && !e.ownerSVGElement || !Nr(e))
        },
        zr = function(e, t) {
            if (t) {
                var r = e.style;
                t in lr && t !== Mr && (t = Pr), r.removeProperty ? ("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6) || (t = "-" + t), r.removeProperty(t.replace(fr, "-$1").toLowerCase())) : r.removeAttribute(t)
            }
        },
        jr = function(e, t, r, i, n, s) {
            var o = new Qt(e._pt, t, r, 0, 1, s ? wr : xr);
            return e._pt = o, o.b = i, o.e = n, e._props.push(r), o
        },
        Vr = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        Yr = function e(t, r, i, n) {
            var s, o, a, u, l = parseFloat(i) || 0,
                h = (i + "").trim().substr((l + "").length) || "px",
                c = sr.style,
                d = pr.test(r),
                f = "svg" === t.tagName.toLowerCase(),
                p = (f ? "client" : "offset") + (d ? "Width" : "Height"),
                m = "px" === n,
                g = "%" === n;
            return n === h || !l || Vr[n] || Vr[h] ? l : ("px" !== h && !m && (l = e(t, r, i, "px")), u = t.getCTM && Ur(t), g && (lr[r] || ~r.indexOf("adius")) ? le(l / (u ? t.getBBox()[d ? "width" : "height"] : t[p]) * 100) : (c[d ? "width" : "height"] = 100 + (m ? h : n), o = ~r.indexOf("adius") || "em" === n && t.appendChild && !f ? t : t.parentNode, u && (o = (t.ownerSVGElement || {}).parentNode), o && o !== rr && o.appendChild || (o = rr.body), (a = o._gsap) && g && a.width && d && a.time === dt.time ? le(l / a.width * 100) : ((g || "%" === h) && (c.position = kr(t, "position")), o === t && (c.position = "static"), o.appendChild(sr), s = sr[p], o.removeChild(sr), c.position = "absolute", d && g && ((a = oe(o)).time = dt.time, a.width = o[p]), le(m ? s * l / 100 : s && l ? 100 / s * l : 0))))
        },
        Gr = function(e, t, r, i) {
            var n;
            return nr || Lr(), t in gr && "transform" !== t && ~(t = gr[t]).indexOf(",") && (t = t.split(",")[0]), lr[t] && "transform" !== t ? (n = ti(e, i), n = "transformOrigin" !== t ? n[t] : ri(kr(e, Mr)) + " " + n.zOrigin + "px") : (!(n = e.style[t]) || "auto" === n || i || ~(n + "").indexOf("calc(")) && (n = qr[t] && qr[t](e, t, r) || kr(e, t) || ae(e, t) || ("opacity" === t ? 1 : 0)), r && !~(n + "").indexOf(" ") ? Yr(e, t, n, r) + r : n
        },
        Wr = function(e, t, r, i) {
            if (!r || "none" === r) {
                var n = Or(t, e, 1),
                    s = n && kr(e, n, 1);
                s && s !== r ? (t = n, r = s) : "borderColor" === t && (r = kr(e, "borderTopColor"))
            }
            var o, a, u, l, h, c, d, f, p, m, g, v, y = new Qt(this._pt, e.style, t, 0, 1, Gt),
                D = 0,
                x = 0;
            if (y.b = r, y.e = i, r += "", "auto" === (i += "") && (e.style[t] = i, i = kr(e, t) || i, e.style[t] = r), ct(o = [r, i]), i = o[1], u = (r = o[0]).match(z) || [], (i.match(z) || []).length) {
                for (; a = z.exec(i);) d = a[0], p = i.substring(D, a.index), h ? h = (h + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (h = 1), d !== (c = u[x++] || "") && (l = parseFloat(c) || 0, g = c.substr((l + "").length), (v = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)), f = parseFloat(d), m = d.substr((f + "").length), D = z.lastIndex - m.length, m || (m = m || _.units[t] || g, D === i.length && (i += m, y.e += m)), g !== m && (l = Yr(e, t, c, m) || 0), y._pt = {
                    _next: y._pt,
                    p: p || 1 === x ? p : ",",
                    s: l,
                    c: v ? v * f : f - l,
                    m: h && h < 4 ? Math.round : 0
                });
                y.c = D < i.length ? i.substring(D, i.length) : ""
            } else y.r = "display" === t && "none" === i ? wr : xr;
            return V.test(i) && (y.e = 0), this._pt = y, y
        },
        Xr = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        Hr = function(e, t) {
            if (t.tween && t.tween._time === t.tween._dur) {
                var r, i, n, s = t.t,
                    o = s.style,
                    a = t.u,
                    u = s._gsap;
                if ("all" === a || !0 === a) o.cssText = "", i = 1;
                else
                    for (n = (a = a.split(",")).length; --n > -1;) r = a[n], lr[r] && (i = 1, r = "transformOrigin" === r ? Mr : Pr), zr(s, r);
                i && (zr(s, Pr), u && (u.svg && s.removeAttribute("transform"), ti(s, 1), u.uncache = 1))
            }
        },
        qr = {
            clearProps: function(e, t, r, i, n) {
                if ("isFromStart" !== n.data) {
                    var s = e._pt = new Qt(e._pt, t, r, 0, 0, Hr);
                    return s.u = i, s.pr = -10, s.tween = n, e._props.push(r), 1
                }
            }
        },
        Zr = [1, 0, 0, 1, 0, 0],
        Qr = {},
        Jr = function(e) {
            return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e
        },
        Kr = function(e) {
            var t = kr(e, Pr);
            return Jr(t) ? Zr : t.substr(7).match(U).map(le)
        },
        $r = function(e, t) {
            var r, i, n, s, o = e._gsap || oe(e),
                a = e.style,
                u = Kr(e);
            return o.svg && e.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = e.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? Zr : u : (u !== Zr || e.offsetParent || e === ir || o.svg || (n = a.display, a.display = "block", (r = e.parentNode) && e.offsetParent || (s = 1, i = e.nextSibling, ir.appendChild(e)), u = Kr(e), n ? a.display = n : zr(e, "display"), s && (i ? r.insertBefore(e, i) : r ? r.appendChild(e) : ir.removeChild(e))), t && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
        },
        ei = function(e, t, r, i, n, s) {
            var o, a, u, l = e._gsap,
                h = n || $r(e, !0),
                c = l.xOrigin || 0,
                d = l.yOrigin || 0,
                f = l.xOffset || 0,
                p = l.yOffset || 0,
                m = h[0],
                g = h[1],
                v = h[2],
                y = h[3],
                _ = h[4],
                D = h[5],
                x = t.split(" "),
                w = parseFloat(x[0]) || 0,
                b = parseFloat(x[1]) || 0;
            r ? h !== Zr && (a = m * y - g * v) && (u = w * (-g / a) + b * (m / a) - (m * D - g * _) / a, w = w * (y / a) + b * (-v / a) + (v * D - y * _) / a, b = u) : (w = (o = Nr(e)).x + (~x[0].indexOf("%") ? w / 100 * o.width : w), b = o.y + (~(x[1] || x[0]).indexOf("%") ? b / 100 * o.height : b)), i || !1 !== i && l.smooth ? (_ = w - c, D = b - d, l.xOffset = f + (_ * m + D * v) - _, l.yOffset = p + (_ * g + D * y) - D) : l.xOffset = l.yOffset = 0, l.xOrigin = w, l.yOrigin = b, l.smooth = !!i, l.origin = t, l.originIsAbsolute = !!r, e.style[Mr] = "0px 0px", s && (jr(s, l, "xOrigin", c, w), jr(s, l, "yOrigin", d, b), jr(s, l, "xOffset", f, l.xOffset), jr(s, l, "yOffset", p, l.yOffset)), e.setAttribute("data-svg-origin", w + " " + b)
        },
        ti = function(e, t) {
            var r = e._gsap || new Ct(e);
            if ("x" in r && !t && !r.uncache) return r;
            var i, n, s, o, a, u, l, h, c, d, f, p, m, g, v, y, D, x, w, b, E, C, A, T, F, P, M, S, k, R, O, L, I = e.style,
                B = r.scaleX < 0,
                N = kr(e, Mr) || "0";
            return i = n = s = u = l = h = c = d = f = 0, o = a = 1, r.svg = !(!e.getCTM || !Ur(e)), g = $r(e, r.svg), r.svg && (T = !r.uncache && e.getAttribute("data-svg-origin"), ei(e, T || N, !!T || r.originIsAbsolute, !1 !== r.smooth, g)), p = r.xOrigin || 0, m = r.yOrigin || 0, g !== Zr && (x = g[0], w = g[1], b = g[2], E = g[3], i = C = g[4], n = A = g[5], 6 === g.length ? (o = Math.sqrt(x * x + w * w), a = Math.sqrt(E * E + b * b), u = x || w ? dr(w, x) * hr : 0, (c = b || E ? dr(b, E) * hr + u : 0) && (a *= Math.cos(c * cr)), r.svg && (i -= p - (p * x + m * b), n -= m - (p * w + m * E))) : (L = g[6], R = g[7], M = g[8], S = g[9], k = g[10], O = g[11], i = g[12], n = g[13], s = g[14], l = (v = dr(L, k)) * hr, v && (T = C * (y = Math.cos(-v)) + M * (D = Math.sin(-v)), F = A * y + S * D, P = L * y + k * D, M = C * -D + M * y, S = A * -D + S * y, k = L * -D + k * y, O = R * -D + O * y, C = T, A = F, L = P), h = (v = dr(-b, k)) * hr, v && (y = Math.cos(-v), O = E * (D = Math.sin(-v)) + O * y, x = T = x * y - M * D, w = F = w * y - S * D, b = P = b * y - k * D), u = (v = dr(w, x)) * hr, v && (T = x * (y = Math.cos(v)) + w * (D = Math.sin(v)), F = C * y + A * D, w = w * y - x * D, A = A * y - C * D, x = T, C = F), l && Math.abs(l) + Math.abs(u) > 359.9 && (l = u = 0, h = 180 - h), o = le(Math.sqrt(x * x + w * w + b * b)), a = le(Math.sqrt(A * A + L * L)), v = dr(C, A), c = Math.abs(v) > 2e-4 ? v * hr : 0, f = O ? 1 / (O < 0 ? -O : O) : 0), r.svg && (T = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !Jr(kr(e, Pr)), T && e.setAttribute("transform", T))), Math.abs(c) > 90 && Math.abs(c) < 270 && (B ? (o *= -1, c += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (a *= -1, c += c <= 0 ? 180 : -180)), r.x = ((r.xPercent = i && Math.round(e.offsetWidth / 2) === Math.round(-i) ? -50 : 0) ? 0 : i) + "px", r.y = ((r.yPercent = n && Math.round(e.offsetHeight / 2) === Math.round(-n) ? -50 : 0) ? 0 : n) + "px", r.z = s + "px", r.scaleX = le(o), r.scaleY = le(a), r.rotation = le(u) + "deg", r.rotationX = le(l) + "deg", r.rotationY = le(h) + "deg", r.skewX = c + "deg", r.skewY = d + "deg", r.transformPerspective = f + "px", (r.zOrigin = parseFloat(N.split(" ")[2]) || 0) && (I[Mr] = ri(N)), r.xOffset = r.yOffset = 0, r.force3D = _.force3D, r.renderTransform = r.svg ? oi : ur ? si : ni, r.uncache = 0, r
        },
        ri = function(e) {
            return (e = e.split(" "))[0] + " " + e[1]
        },
        ii = function(e, t, r) {
            var i = je(t);
            return le(parseFloat(t) + parseFloat(Yr(e, "x", r + "px", i))) + i
        },
        ni = function(e, t) {
            t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, si(e, t)
        },
        si = function(e, t) {
            var r = t || this,
                i = r.xPercent,
                n = r.yPercent,
                s = r.x,
                o = r.y,
                a = r.z,
                u = r.rotation,
                l = r.rotationY,
                h = r.rotationX,
                c = r.skewX,
                d = r.skewY,
                f = r.scaleX,
                p = r.scaleY,
                m = r.transformPerspective,
                g = r.force3D,
                v = r.target,
                y = r.zOrigin,
                _ = "",
                D = "auto" === g && e && 1 !== e || !0 === g;
            if (y && ("0deg" !== h || "0deg" !== l)) {
                var x, w = parseFloat(l) * cr,
                    b = Math.sin(w),
                    E = Math.cos(w);
                w = parseFloat(h) * cr, x = Math.cos(w), s = ii(v, s, b * x * -y), o = ii(v, o, -Math.sin(w) * -y), a = ii(v, a, E * x * -y + y)
            }
            "0px" !== m && (_ += "perspective(" + m + ") "), (i || n) && (_ += "translate(" + i + "%, " + n + "%) "), (D || "0px" !== s || "0px" !== o || "0px" !== a) && (_ += "0px" !== a || D ? "translate3d(" + s + ", " + o + ", " + a + ") " : "translate(" + s + ", " + o + ") "), "0deg" !== u && (_ += "rotate(" + u + ") "), "0deg" !== l && (_ += "rotateY(" + l + ") "), "0deg" !== h && (_ += "rotateX(" + h + ") "), "0deg" === c && "0deg" === d || (_ += "skew(" + c + ", " + d + ") "), 1 === f && 1 === p || (_ += "scale(" + f + ", " + p + ") "), v.style[Pr] = _ || "translate(0, 0)"
        },
        oi = function(e, t) {
            var r, i, n, s, o, a = t || this,
                u = a.xPercent,
                l = a.yPercent,
                h = a.x,
                c = a.y,
                d = a.rotation,
                f = a.skewX,
                p = a.skewY,
                m = a.scaleX,
                g = a.scaleY,
                v = a.target,
                y = a.xOrigin,
                _ = a.yOrigin,
                D = a.xOffset,
                x = a.yOffset,
                w = a.forceCSS,
                b = parseFloat(h),
                E = parseFloat(c);
            d = parseFloat(d), f = parseFloat(f), (p = parseFloat(p)) && (f += p = parseFloat(p), d += p), d || f ? (d *= cr, f *= cr, r = Math.cos(d) * m, i = Math.sin(d) * m, n = Math.sin(d - f) * -g, s = Math.cos(d - f) * g, f && (p *= cr, o = Math.tan(f - p), n *= o = Math.sqrt(1 + o * o), s *= o, p && (o = Math.tan(p), r *= o = Math.sqrt(1 + o * o), i *= o)), r = le(r), i = le(i), n = le(n), s = le(s)) : (r = m, s = g, i = n = 0), (b && !~(h + "").indexOf("px") || E && !~(c + "").indexOf("px")) && (b = Yr(v, "x", h, "px"), E = Yr(v, "y", c, "px")), (y || _ || D || x) && (b = le(b + y - (y * r + _ * n) + D), E = le(E + _ - (y * i + _ * s) + x)), (u || l) && (o = v.getBBox(), b = le(b + u / 100 * o.width), E = le(E + l / 100 * o.height)), o = "matrix(" + r + "," + i + "," + n + "," + s + "," + b + "," + E + ")", v.setAttribute("transform", o), w && (v.style[Pr] = o)
        },
        ai = function(e, t, r, i, n, s) {
            var o, a, u = F(n),
                l = parseFloat(n) * (u && ~n.indexOf("rad") ? hr : 1),
                h = s ? l * s : l - i,
                c = i + h + "deg";
            return u && ("short" === (o = n.split("_")[1]) && (h %= 360) !== h % 180 && (h += h < 0 ? 360 : -360), "cw" === o && h < 0 ? h = (h + 36e9) % 360 - 360 * ~~(h / 360) : "ccw" === o && h > 0 && (h = (h - 36e9) % 360 - 360 * ~~(h / 360))), e._pt = a = new Qt(e._pt, t, r, i, h, yr), a.e = c, a.u = "deg", e._props.push(r), a
        },
        ui = function(e, t, r) {
            var i, n, s, o, a, u, l, h = or.style,
                c = r._gsap;
            for (n in h.cssText = getComputedStyle(r).cssText + ";position:absolute;display:block;", h[Pr] = t, rr.body.appendChild(or), i = ti(or, 1), lr)(s = c[n]) !== (o = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (a = je(s) !== (l = je(o)) ? Yr(r, n, s, l) : parseFloat(s), u = parseFloat(o), e._pt = new Qt(e._pt, c, n, a, u - a, vr), e._pt.u = l || 0, e._props.push(n));
            rr.body.removeChild(or)
        };
    ue("padding,margin,Width,Radius", (function(e, t) {
        var r = "Top",
            i = "Right",
            n = "Bottom",
            s = "Left",
            o = (t < 3 ? [r, i, n, s] : [r + s, r + i, n + i, n + s]).map((function(r) {
                return t < 2 ? e + r : "border" + r + e
            }));
        qr[t > 1 ? "border" + e : e] = function(e, t, r, i, n) {
            var s, a;
            if (arguments.length < 4) return s = o.map((function(t) {
                return Gr(e, t, r)
            })), 5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a;
            s = (i + "").split(" "), a = {}, o.forEach((function(e, t) {
                return a[e] = s[t] = s[t] || s[(t - 1) / 2 | 0]
            })), e.init(t, a, n)
        }
    }));
    var li, hi, ci = {
        name: "css",
        register: Lr,
        targetTest: function(e) {
            return e.style && e.nodeType
        },
        init: function(e, t, r, i, n) {
            var s, o, a, u, l, h, c, d, f, p, m, g, v, y, D, x, w, b, E, C = this._props,
                A = e.style;
            for (c in nr || Lr(), t)
                if ("autoRound" !== c && (o = t[c], !ee[c] || !St(c, t, r, i, e, n)))
                    if (l = typeof o, h = qr[c], "function" === l && (l = typeof(o = o.call(r, i, e, n))), "string" === l && ~o.indexOf("random(") && (o = Ke(o)), h) h(this, e, c, o, r) && (D = 1);
                    else if ("--" === c.substr(0, 2)) this.add(A, "setProperty", getComputedStyle(e).getPropertyValue(c) + "", o + "", i, n, 0, 0, c);
            else if ("undefined" !== l) {
                if (s = Gr(e, c), u = parseFloat(s), (p = "string" === l && "=" === o.charAt(1) ? +(o.charAt(0) + "1") : 0) && (o = o.substr(2)), a = parseFloat(o), c in gr && ("autoAlpha" === c && (1 === u && "hidden" === Gr(e, "visibility") && a && (u = 0), jr(this, A, "visibility", u ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== c && "transform" !== c && ~(c = gr[c]).indexOf(",") && (c = c.split(",")[0])), m = c in lr)
                    if (g || ((v = e._gsap).renderTransform || ti(e), y = !1 !== t.smoothOrigin && v.smooth, (g = this._pt = new Qt(this._pt, A, Pr, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === c) this._pt = new Qt(this._pt, v, "scaleY", v.scaleY, p ? p * a : a - v.scaleY), C.push("scaleY", c), c += "X";
                    else {
                        if ("transformOrigin" === c) {
                            w = void 0, b = void 0, E = void 0, w = (x = o).split(" "), b = w[0], E = w[1] || "50%", "top" !== b && "bottom" !== b && "left" !== E && "right" !== E || (x = b, b = E, E = x), w[0] = Xr[b] || b, w[1] = Xr[E] || E, o = w.join(" "), v.svg ? ei(e, o, 0, y, 0, this) : ((f = parseFloat(o.split(" ")[2]) || 0) !== v.zOrigin && jr(this, v, "zOrigin", v.zOrigin, f), jr(this, A, c, ri(s), ri(o)));
                            continue
                        }
                        if ("svgOrigin" === c) {
                            ei(e, o, 1, y, 0, this);
                            continue
                        }
                        if (c in Qr) {
                            ai(this, v, c, u, o, p);
                            continue
                        }
                        if ("smoothOrigin" === c) {
                            jr(this, v, "smooth", v.smooth, o);
                            continue
                        }
                        if ("force3D" === c) {
                            v[c] = o;
                            continue
                        }
                        if ("transform" === c) {
                            ui(this, o, e);
                            continue
                        }
                    }
                else c in A || (c = Or(c) || c);
                if (m || (a || 0 === a) && (u || 0 === u) && !mr.test(o) && c in A) a || (a = 0), (d = (s + "").substr((u + "").length)) !== (f = je(o) || (c in _.units ? _.units[c] : d)) && (u = Yr(e, c, s, f)), this._pt = new Qt(this._pt, m ? v : A, c, u, p ? p * a : a - u, "px" !== f || !1 === t.autoRound || m ? vr : Dr), this._pt.u = f || 0, d !== f && (this._pt.b = s, this._pt.r = _r);
                else if (c in A) Wr.call(this, e, c, s, o);
                else {
                    if (!(c in e)) {
                        H(c, o);
                        continue
                    }
                    this.add(e, c, e[c], o, i, n)
                }
                C.push(c)
            }
            D && Zt(this)
        },
        get: Gr,
        aliases: gr,
        getSetter: function(e, t, r) {
            var i = gr[t];
            return i && i.indexOf(",") < 0 && (t = i), t in lr && t !== Mr && (e._gsap.x || Gr(e, "x")) ? r && ar === r ? "scale" === t ? Ar : Cr : (ar = r || {}) && ("scale" === t ? Tr : Fr) : e.style && !S(e.style[t]) ? br : ~t.indexOf("-") ? Er : jt(e, t)
        },
        core: {
            _removeProperty: zr,
            _getMatrix: $r
        }
    };
    er.utils.checkPrefix = Or, hi = ue("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (li = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(e) {
        lr[e] = 1
    })), ue(li, (function(e) {
        _.units[e] = "deg", Qr[e] = 1
    })), gr[hi[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + li, ue("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(e) {
        var t = e.split(":");
        gr[t[1]] = hi[t[0]]
    })), ue("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(e) {
        _.units[e] = "px"
    })), er.registerPlugin(ci);
    var di = er.registerPlugin(ci) || er,
        fi = (di.core.Tween, r(2)),
        pi = r.n(fi),
        mi = r(1),
        gi = r.n(mi);

    function vi(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }
    class yi {
        constructor(e, {
            id: t = Date.now(),
            interActiveRadius: r = 200,
            onClick: i,
            maxRotation: n = 0,
            maxOffsetX: s = r / 3,
            maxOffsetY: o = r / 3,
            maxOffsetScale: a = 1
        } = {}) {
            vi(this, "onMouseMove", e => {
                this.mouseX = e.pageX, this.mouseY = e.pageY
            }), vi(this, "onClick", e => {
                this.onClickCallback({
                    originalEvent: e,
                    id: this.id
                })
            }), vi(this, "update", () => {
                const e = this.element.getBoundingClientRect(),
                    t = e.x + e.width / 2,
                    r = e.y + e.height / 2,
                    i = this.mouseX - t,
                    n = this.mouseY - window.scrollY - r,
                    s = Math.sqrt(i * i + n * n),
                    o = i < 0 ? -1 : 1;
                if (s < this.activeRadius) {
                    let e = Math.atan2(n, i);
                    const t = s / this.activeRadius,
                        r = t * this.maxOffsetX,
                        a = t * this.maxOffsetY,
                        u = Math.cos(e) * r,
                        l = Math.sin(e) * a;
                    this.targetX = u - 0, this.targetY = l - 0, this.targetRotation = t * (this.maxOffsetRotation * o), 1 !== this.maxOffsetScale && (this.targetScale = 1 + t * (this.maxOffsetScale - 1))
                } else this.targetX = 0, this.targetY = 0, this.targetRotation = 0, this.targetScale = 1;
                this.stickX += .15 * (this.targetX - this.stickX), this.stickY += .15 * (this.targetY - this.stickY), this.stickyScale += .15 * (this.targetScale - this.stickyScale), this.stickyRotation += .15 * (this.targetRotation - this.stickyRotation), di.to(this.element, {
                    rotation: this.stickyRotation,
                    scaleX: this.stickyScale,
                    scaleY: this.stickyScale,
                    x: this.stickX,
                    y: this.stickY
                }), this.animationFrameID = requestAnimationFrame(this.update)
            }), vi(this, "stop", () => {
                document.removeEventListener("mousemove", this.onMouseMove), cancelAnimationFrame(this.animationFrameID)
            }), vi(this, "start", () => {
                this.stop(), document.addEventListener("mousemove", this.onMouseMove), this.update()
            }), vi(this, "destroy", () => {
                di.killTweensOf(this.element), document.removeEventListener("mousemove", this.onMouseMove), this.element.removeEventListener("click", this.onClick), cancelAnimationFrame(this.animationFrameID), this.onClickCallback = null, this.element = null, this.activeRadius = null, this.maxOffset = null, this.stickX = null, this.stickY = null, this.id = null
            }), this.onClickCallback = i, this.maxOffsetRotation = n, this.element = e, this.id = t, this.activeRadius = r, this.maxOffsetX = s, this.maxOffsetY = o, this.maxOffsetScale = a, this.onClickCallback && this.element.addEventListener("click", this.onClick), this.stickyScale = 1, this.stickyRotation = 0, this.stickX = 0, this.stickY = 0
        }
    }
    class _i {
        constructor(e) {
            this.element = e, this.isShowingSecret = !1, this.loadImages = this.loadImages.bind(this), this.menuOpen = this.menuOpen.bind(this), this.showSecretDot = this.showSecretDot.bind(this), this.onKeyDown = this.onKeyDown.bind(this), this.menuClose = this.menuClose.bind(this), this.showpiksel = this.showpiksel.bind(this), this.onGeneralOverlayClick = this.onGeneralOverlayClick.bind(this), this.secretToggle = this.secretToggle.bind(this), this.updateTime = this.updateTime.bind(this), this.startTimer = this.startTimer.bind(this), this.studioTime = this.element.querySelector(".studio-time"), this.timeOnStart = this.studioTime.dataset.timeOnLoad, this.pikselImages = [], this.updateTime(), this.shufflepikselImages()
        }
        onKeyDown(e) {
            27 === e.keyCode && this.menuClose()
        }
        init() {
            this.openButton = this.element.querySelector(".js-menu-trigger-open"), this.secretLinkContainer = this.element.querySelector(".secret-link"), this.secretLinkDot = this.element.querySelector(".secret-link__dot"), this.closeButton = this.element.querySelector(".js-menu-trigger-close"), this.bottom = this.element.querySelector(".main-menu-bottom"), this.wholeOverlay = this.element.querySelector(".wrap"), this.secretLinkDot.addEventListener("click", this.secretToggle), this.openButton.addEventListener("click", this.menuOpen), this.closeButton.addEventListener("click", this.menuClose), this.mainMenu = this.element.querySelector("[data-main-menu]"), this.menuItems = this.element.querySelectorAll(".main-menu-menu li"), this.pikselImages = [], this.loadImages(), this.stickyDot = new yi(this.secretLinkContainer, {
                interActiveRadius: 100
            }), di.set([this.mainMenu], {
                y: "-100%",
                display: "block"
            }), di.set([this.menuItems], {
                alpha: 0,
                scaleY: .5,
                transformOrigin: "center top"
            }), di.set([this.secretLinkContainer], {
                scale: 0,
                y: 0,
                transformOrigin: "center center"
            }), document.addEventListener("keydown", this.onKeyDown), this.showpiksel(!1, 0)
        }
        loadImages() {
            const e = this.element.querySelector("[data-secret-images]").dataset.secretImages.split(",");
            e.pop(), e.forEach(e => {
                const t = new Image;
                t.onload = () => {
                    this.pikselImages.push(e), this.shufflepikselImages(), this.isOpen && 1 === this.pikselImages.length && (this.showDifferentImage(), this.showSecretDot())
                }, t.src = e
            })
        }
        showDifferentImage() {
            this.pikselIndex++, this.pikselIndex > this.pikselIndexMax && (this.pikselIndex = 0);
            const e = this.element.querySelector(".secret-image"),
                t = this.pikselImages[this.pikselIndex];
            t && (e.src = t)
        }
        showpiksel(e, t = .75) {
            this.isShowingSecret = e;
            const r = this.element.querySelector(".karl-image"),
                i = this.element.querySelector(".karl-text");
            di.killTweensOf(r), di.killTweensOf(i), e ? (this.secretLinkDot.classList.add("secret-link__dot--is-active"), di.set(i, {
                autoAlpha: 1
            }), di.to(r, {
                x: 0,
                duration: t,
                ease: "Power4.easeInOut"
            }), di.to(i, {
                x: 0,
                duration: t,
                ease: "Power4.easeInOut",
                onComplete: () => {
                    this.wholeOverlay.addEventListener("click", this.onGeneralOverlayClick)
                }
            })) : (this.secretLinkDot.classList.remove("secret-link__dot--is-active"), di.to(i, {
                x: -.57 * window.innerWidth,
                duration: t,
                ease: "Power4.easeInOut"
            }), di.to(r, {
                x: "-100%",
                duration: t,
                ease: "Power4.easeInOut",
                onComplete: () => {
                    di.set(i, {
                        autoAlpha: 0
                    }), this.showDifferentImage(), this.wholeOverlay.removeEventListener("click", this.onGeneralOverlayClick)
                }
            }))
        }
        showSecretDot() {
            di.to(this.secretLinkContainer, {
                y: 0,
                scale: 1,
                duration: .25,
                ease: "Power4.easeInOut",
                onComplete: () => {
                    this.stickyDot.start()
                }
            })
        }
        startTimer() {
            this.intervalID = window.setInterval(this.updateTime, 1e3)
        }
        stopTimer() {}
        updateTime() {
            const e = new Date,
                t = e.toLocaleTimeString([], {
                    timeZone: "Pacific/Auckland"
                }),
                r = e.toLocaleString([], {
                    timeZone: "Pacific/Auckland",
                    weekday: "long"
                }),
                i = this.timeOnStart.split(" "),
                n = i[i.length - 1];
            this.studioTime.innerHTML = `${t} ${r} ${n}`
        }
        onGeneralOverlayClick(e) {
            e.preventDefault(), e.stopPropagation(), this.showpiksel(!1)
        }
        secretToggle() {
            this.showpiksel(!this.isShowingSecret)
        }
        destroy() {
            this.stickyDot.destroy(), this.wholeOverlay.removeEventListener("click", this.onGeneralOverlayClick), this.openButton.removeEventListener("click", this.menuOpen), this.closeButton.removeEventListener("click", this.menuClose), this.secretLinkDot.removeEventListener("click", this.secretToggle), document.removeEventListener("keydown", this.onKeyDown)
        }
        shufflepikselImages() {
            this.pikselIndex = 0, this.pikselIndexMax = this.pikselImages.length - 1, this.pikselImages = gi()(this.pikselImages)
        }
        menuOpen(e) {
            this.isOpen = !0, e.preventDefault(), this.shufflepikselImages(), this.startTimer(), this.showpiksel(!1, 0), di.set(this.bottom, {
                alpha: 0,
                y: 100
            }), document.documentElement.classList.add("body-overflow");
            const t = new di.timeline;
            t.add(di.to([this.mainMenu], {
                y: "0%",
                duration: .5,
                ease: "Power4.easeInOut"
            })), t.add(di.to([this.menuItems], {
                alpha: 1,
                duration: .15,
                stagger: .04,
                ease: "Power3.easeInOut",
                y: "0%",
                scaleY: 1,
                scaleX: 1,
                transformOrigin: "center top"
            }, "=-0.75")), t.add(di.to(this.bottom, {
                y: 0,
                duration: .25,
                ease: "Power4.easeInOut",
                onStart: () => {
                    di.set(this.bottom, {
                        alpha: 1
                    })
                },
                onComplete: () => {
                    this.pikselImages.length > 0 && this.showSecretDot()
                }
            }))
        }
        menuClose() {
            this.isOpen = !1, this.stickyDot.stop(), this.stopTimer(), document.documentElement.classList.remove("body-overflow"), di.to(this.secretLinkContainer, {
                y: 0,
                scale: 0,
                duration: .25,
                ease: "Power4.easeInOut"
            }), di.to([this.menuItems], {
                alpha: 0,
                duration: .15,
                stagger: -.04,
                ease: "Power3.easeInOut",
                scaleY: .5,
                transformOrigin: "center top"
            }), di.to(this.bottom, {
                alpha: 0,
                duration: .25,
                ease: "Power4.easeInOut"
            }), di.to([this.mainMenu], {
                y: "-100%",
                delay: .25,
                duration: .5,
                ease: "Power4.easeInOut"
            })
        }
    }
    class Di {
        constructor({
            form: e,
            emailField: t,
            subscribeField: r,
            interestField: i,
            statusField: n
        }) {
            e && (this.onFormSubmit = this.onFormSubmit.bind(this), this.form = e, this.emailField = t, this.subscribeField = r, this.interestField = i, this.statusField = n, this.form.addEventListener("submit", this.onFormSubmit, !1))
        }
        onFormSubmit(e) {
            if (!e.target.classList.contains("validate")) return;
            e.preventDefault();
            const t = !this.subscribeField || this.subscribeField.checked,
                r = !!this.interestField && this.interestField.checked;
            var i = {
                email: this.emailField.value,
                action: "subscribe_newsletter",
                subscribe: t,
                interest: r
            };
            (async function(e = "", t = {}) {
                return (await fetch(e, {
                    method: "POST",
                    cache: "no-cache",
                    credentials: "same-origin",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: new URLSearchParams(t)
                })).json()
            })(ajaxurl, i).then(e => {
                if (this.statusField) {
                    const t = "success" === e.status ? "Thank you for subscribing." : "Oops, something went wrong!";
                    this.statusField.innerHTML = t
                }
            })
        }
        destroy() {
            this.form && this.form.removeEventListener("submit", this.onFormSubmit, !1)
        }
    }
    /*!
     * ScrollTrigger 3.5.1
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var xi, wi, bi, Ei, Ci, Ai, Ti, Fi, Pi, Mi, Si, ki, Ri, Oi, Li, Ii, Bi, Ni, Ui, zi, ji, Vi, Yi, Gi, Wi, Xi = 1,
        Hi = [],
        qi = [],
        Zi = Date.now,
        Qi = Zi(),
        Ji = 0,
        Ki = 1,
        $i = function(e) {
            return e
        },
        en = function() {
            return "undefined" != typeof window
        },
        tn = function() {
            return xi || en() && (xi = window.gsap) && xi.registerPlugin && xi
        },
        rn = function(e) {
            return !!~Ti.indexOf(e)
        },
        nn = function(e, t) {
            return ~Hi.indexOf(e) && Hi[Hi.indexOf(e) + 1][t]
        },
        sn = function(e, t) {
            var r = t.s,
                i = t.sc,
                n = qi.indexOf(e),
                s = i === _n.sc ? 1 : 2;
            return !~n && (n = qi.push(e) - 1), qi[n + s] || (qi[n + s] = nn(e, r) || (rn(e) ? i : function(t) {
                return arguments.length ? e[r] = t : e[r]
            }))
        },
        on = function(e) {
            return nn(e, "getBoundingClientRect") || (rn(e) ? function() {
                return is.width = bi.innerWidth, is.height = bi.innerHeight, is
            } : function() {
                return wn(e)
            })
        },
        an = function(e, t) {
            var r = t.s,
                i = t.d2,
                n = t.d,
                s = t.a;
            return (r = "scroll" + i) && (s = nn(e, r)) ? s() - on(e)()[n] : rn(e) ? Math.max(Ci[r], Ai[r]) - (bi["inner" + i] || Ci["client" + i] || Ai["client" + i]) : e[r] - e["offset" + i]
        },
        un = function(e, t) {
            for (var r = 0; r < ji.length; r += 3)(!t || ~t.indexOf(ji[r + 1])) && e(ji[r], ji[r + 1], ji[r + 2])
        },
        ln = function(e) {
            return "string" == typeof e
        },
        hn = function(e) {
            return "function" == typeof e
        },
        cn = function(e) {
            return "number" == typeof e
        },
        dn = function(e) {
            return "object" == typeof e
        },
        fn = function(e) {
            return hn(e) && e()
        },
        pn = function(e, t) {
            return function() {
                var r = fn(e),
                    i = fn(t);
                return function() {
                    fn(r), fn(i)
                }
            }
        },
        mn = Math.abs,
        gn = "padding",
        vn = "px",
        yn = {
            s: "scrollLeft",
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: function(e) {
                return arguments.length ? bi.scrollTo(e, _n.sc()) : bi.pageXOffset || Ei.scrollLeft || Ci.scrollLeft || Ai.scrollLeft || 0
            }
        },
        _n = {
            s: "scrollTop",
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: yn,
            sc: function(e) {
                return arguments.length ? bi.scrollTo(yn.sc(), e) : bi.pageYOffset || Ei.scrollTop || Ci.scrollTop || Ai.scrollTop || 0
            }
        },
        Dn = function(e) {
            return bi.getComputedStyle(e)
        },
        xn = function(e, t) {
            for (var r in t) r in e || (e[r] = t[r]);
            return e
        },
        wn = function(e, t) {
            var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== Dn(e)[Bi] && xi.to(e, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0
                }).progress(1),
                i = e.getBoundingClientRect();
            return r && r.progress(0).kill(), i
        },
        bn = function(e, t) {
            var r = t.d2;
            return e["offset" + r] || e["client" + r] || 0
        },
        En = function(e, t, r, i) {
            return r.split(",").forEach((function(r) {
                return e(t, r, i)
            }))
        },
        Cn = function(e, t, r) {
            return e.addEventListener(t, r, {
                passive: !0
            })
        },
        An = function(e, t, r) {
            return e.removeEventListener(t, r)
        },
        Tn = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        },
        Fn = {
            toggleActions: "play",
            anticipatePin: 0
        },
        Pn = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        },
        Mn = function(e, t) {
            if (ln(e)) {
                var r = e.indexOf("="),
                    i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
                i && (e.indexOf("%") > r && (i *= t / 100), e = e.substr(0, r - 1)), e = i + (e in Pn ? Pn[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
            }
            return e
        },
        Sn = function(e, t, r, i, n, s, o) {
            var a = n.startColor,
                u = n.endColor,
                l = n.fontSize,
                h = n.indent,
                c = n.fontWeight,
                d = Ei.createElement("div"),
                f = rn(r) || "fixed" === nn(r, "pinType"),
                p = -1 !== e.indexOf("scroller"),
                m = f ? Ai : r,
                g = -1 !== e.indexOf("start"),
                v = g ? a : u,
                y = "border-color:" + v + ";font-size:" + l + ";color:" + v + ";font-weight:" + c + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return y += "position:" + (p && f ? "fixed;" : "absolute;"), (p || !f) && (y += (i === _n ? "right" : "bottom") + ":" + (s + parseFloat(h)) + "px;"), o && (y += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), d._isStart = g, d.setAttribute("class", "gsap-marker-" + e), d.style.cssText = y, d.innerText = t || 0 === t ? e + "-" + t : e, m.insertBefore(d, m.children[0]), d._offset = d["offset" + i.op.d2], kn(d, 0, i, g), d
        },
        kn = function(e, t, r, i) {
            var n = {
                    display: "block"
                },
                s = r[i ? "os2" : "p2"],
                o = r[i ? "p2" : "os2"];
            e._isFlipped = i, n[r.a + "Percent"] = i ? -100 : 0, n[r.a] = i ? 1 : 0, n["border" + s + "Width"] = 1, n["border" + o + "Width"] = 0, n[r.p] = t, xi.set(e, n)
        },
        Rn = [],
        On = {},
        Ln = function() {
            return Mi || (Mi = Pi(Qn))
        },
        In = function() {
            Mi || (Mi = Pi(Qn), Ji || Yn("scrollStart"), Ji = Zi())
        },
        Bn = function() {
            return !Li && Fi.restart(!0)
        },
        Nn = {},
        Un = [],
        zn = [],
        jn = function(e) {
            var t, r = xi.ticker.frame,
                i = [],
                n = 0;
            if (Wi !== r || Xi) {
                for (Xn(); n < zn.length; n += 4)(t = bi.matchMedia(zn[n]).matches) !== zn[n + 3] && (zn[n + 3] = t, t ? i.push(n) : Xn(1, zn[n]) || hn(zn[n + 2]) && zn[n + 2]());
                for (Wn(), n = 0; n < i.length; n++) t = i[n], Gi = zn[t], zn[t + 2] = zn[t + 1](e);
                Gi = 0, Hn(0, 1), Wi = r, Yn("matchMedia")
            }
        },
        Vn = function e() {
            return An(us, "scrollEnd", e) || Hn(!0)
        },
        Yn = function(e) {
            return Nn[e] && Nn[e].map((function(e) {
                return e()
            })) || Un
        },
        Gn = [],
        Wn = function(e) {
            for (var t = 0; t < Gn.length; t += 4) e && Gn[t + 3] !== e || (Gn[t].style.cssText = Gn[t + 1], Gn[t + 2].uncache = 1)
        },
        Xn = function(e, t) {
            var r;
            for (Ni = 0; Ni < Rn.length; Ni++) r = Rn[Ni], t && r.media !== t || (e ? r.kill(1) : (r.scroll.rec || (r.scroll.rec = r.scroll()), r.revert()));
            Wn(t), t || Yn("revert")
        },
        Hn = function(e, t) {
            if (!Ji || e) {
                var r = Yn("refreshInit");
                for (Vi && us.sort(), t || Xn(), Ni = 0; Ni < Rn.length; Ni++) Rn[Ni].refresh();
                for (r.forEach((function(e) {
                        return e && e.render && e.render(-1)
                    })), Ni = Rn.length; Ni--;) Rn[Ni].scroll.rec = 0;
                Fi.pause(), Yn("refresh")
            } else Cn(us, "scrollEnd", Vn)
        },
        qn = 0,
        Zn = 1,
        Qn = function() {
            var e = Rn.length,
                t = Zi(),
                r = t - Qi >= 50,
                i = e && Rn[0].scroll();
            if (Zn = qn > i ? -1 : 1, qn = i, r && (Ji && !Ii && t - Ji > 200 && (Ji = 0, Yn("scrollEnd")), Ri = Qi, Qi = t), Zn < 0) {
                for (Ni = e; Ni--;) Rn[Ni] && Rn[Ni].update(0, r);
                Zn = 1
            } else
                for (Ni = 0; Ni < e; Ni++) Rn[Ni] && Rn[Ni].update(0, r);
            Mi = 0
        },
        Jn = ["left", "top", "bottom", "right", "marginBottom", "marginRight", "marginTop", "marginLeft", "display", "flexShrink", "float"],
        Kn = Jn.concat(["width", "height", "boxSizing", "maxWidth", "maxHeight", "position", "margin", gn, gn + "Top", gn + "Right", gn + "Bottom", gn + "Left"]),
        $n = function(e, t, r, i) {
            if (e.parentNode !== t) {
                for (var n, s = Jn.length, o = t.style, a = e.style; s--;) o[n = Jn[s]] = r[n];
                o.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (o.display = "inline-block"), a.bottom = a.right = "auto", o.overflow = "visible", o.boxSizing = "border-box", o.width = bn(e, yn) + vn, o.height = bn(e, _n) + vn, o[gn] = a.margin = a.top = a.left = "0", ts(i), a.width = a.maxWidth = r.width, a.height = a.maxHeight = r.height, a[gn] = r[gn], e.parentNode.insertBefore(t, e), t.appendChild(e)
            }
        },
        es = /([A-Z])/g,
        ts = function(e) {
            if (e)
                for (var t, r, i = e.t.style, n = e.length, s = 0; s < n; s += 2) r = e[s + 1], t = e[s], r ? i[t] = r : i[t] && i.removeProperty(t.replace(es, "-$1").toLowerCase())
        },
        rs = function(e) {
            for (var t = Kn.length, r = e.style, i = [], n = 0; n < t; n++) i.push(Kn[n], r[Kn[n]]);
            return i.t = e, i
        },
        is = {
            left: 0,
            top: 0
        },
        ns = function(e, t, r, i, n, s, o, a, u, l, h, c) {
            if (hn(e) && (e = e(a)), ln(e) && "max" === e.substr(0, 3) && (e = c + ("=" === e.charAt(4) ? Mn("0" + e.substr(3), r) : 0)), cn(e)) o && kn(o, r, i, !0);
            else {
                hn(t) && (t = t(a));
                var d, f, p, m = Si(t)[0] || Ai,
                    g = wn(m) || {},
                    v = e.split(" ");
                g && (g.left || g.top) || "none" !== Dn(m).display || (p = m.style.display, m.style.display = "block", g = wn(m), p ? m.style.display = p : m.style.removeProperty("display")), d = Mn(v[0], g[i.d]), f = Mn(v[1] || "0", r), e = g[i.p] - u[i.p] - l + d + n - f, o && kn(o, f, i, r - f < 20 || o._isStart && f > 20), r -= r - f
            }
            if (s) {
                var y = e + r,
                    _ = s._isStart;
                c = "scroll" + i.d2, kn(s, y, i, _ && y > 20 || !_ && (h ? Math.max(Ai[c], Ci[c]) : s.parentNode[c]) <= y + 1), h && (u = wn(o), h && (s.style[i.op.p] = u[i.op.p] - i.op.m - s._offset + vn))
            }
            return Math.round(e)
        },
        ss = /(?:webkit|moz|length|cssText)/i,
        os = function(e, t, r, i) {
            if (e.parentNode !== t) {
                var n, s, o = e.style;
                if (t === Ai) {
                    for (n in e._stOrig = o.cssText, s = Dn(e)) + n || ss.test(n) || !s[n] || "string" != typeof o[n] || "0" === n || (o[n] = s[n]);
                    o.top = r, o.left = i
                } else o.cssText = e._stOrig;
                xi.core.getCache(e).uncache = 1, t.appendChild(e)
            }
        },
        as = function(e, t) {
            var r, i, n = sn(e, t),
                s = "_scroll" + t.p2;
            return e[s] = n,
                function t(o, a, u, l, h) {
                    var c = t.tween,
                        d = a.onComplete,
                        f = {};
                    return c && c.kill(), r = Math.round(u), a[s] = o, a.modifiers = f, f[s] = function(e) {
                        return (e = Math.round(n())) !== r && e !== i ? (c.kill(), t.tween = 0) : e = u + l * c.ratio + h * c.ratio * c.ratio, i = r, r = Math.round(e)
                    }, a.onComplete = function() {
                        t.tween = 0, d && d.call(c)
                    }, c = t.tween = xi.to(e, a)
                }
        };
    yn.op = _n;
    var us = function() {
        function e(t, r) {
            wi || e.register(xi) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(t, r)
        }
        return e.prototype.init = function(t, r) {
            if (this.progress = 0, this.vars && this.kill(1), Ki) {
                var i, n, s, o, a, u, l, h, c, d, f, p, m, g, v, y, _, D, x, w, b, E, C, A, T, F, P, M, S, k, R, O, L, I, B, N, U, z, j = (t = xn(ln(t) || cn(t) || t.nodeType ? {
                        trigger: t
                    } : t, Fn)).horizontal ? yn : _n,
                    V = t,
                    Y = V.onUpdate,
                    G = V.toggleClass,
                    W = V.id,
                    X = V.onToggle,
                    H = V.onRefresh,
                    q = V.scrub,
                    Z = V.trigger,
                    Q = V.pin,
                    J = V.pinSpacing,
                    K = V.invalidateOnRefresh,
                    $ = V.anticipatePin,
                    ee = V.onScrubComplete,
                    te = V.onSnapComplete,
                    re = V.once,
                    ie = V.snap,
                    ne = V.pinReparent,
                    se = !q && 0 !== q,
                    oe = Si(t.scroller || bi)[0],
                    ae = xi.core.getCache(oe),
                    ue = rn(oe),
                    le = "pinType" in t ? "fixed" === t.pinType : ue || "fixed" === nn(oe, "pinType"),
                    he = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                    ce = se && t.toggleActions.split(" "),
                    de = "markers" in t ? t.markers : Fn.markers,
                    fe = ue ? 0 : parseFloat(Dn(oe)["border" + j.p2 + "Width"]) || 0,
                    pe = this,
                    me = t.onRefreshInit && function() {
                        return t.onRefreshInit(pe)
                    },
                    ge = function(e, t, r) {
                        var i = r.d,
                            n = r.d2,
                            s = r.a;
                        return (s = nn(e, "getBoundingClientRect")) ? function() {
                            return s()[i]
                        } : function() {
                            return (t ? bi["inner" + n] : e["client" + n]) || 0
                        }
                    }(oe, ue, j),
                    ve = function(e, t) {
                        return !t || ~Hi.indexOf(e) ? on(e) : function() {
                            return is
                        }
                    }(oe, ue);
                pe.media = Gi, $ *= 45, Rn.push(pe), pe.scroller = oe, pe.scroll = sn(oe, j), a = pe.scroll(), pe.vars = t, r = r || t.animation, "refreshPriority" in t && (Vi = 1), ae.tweenScroll = ae.tweenScroll || {
                    top: as(oe, _n),
                    left: as(oe, yn)
                }, pe.tweenTo = i = ae.tweenScroll[j.p], r && (r.vars.lazy = !1, r._initted || !1 !== r.vars.immediateRender && !1 !== t.immediateRender && r.render(0, !0, !0), pe.animation = r.pause(), r.scrollTrigger = pe, (O = cn(q) && q) && (R = xi.to(r, {
                    ease: "power3",
                    duration: O,
                    onComplete: function() {
                        return ee && ee(pe)
                    }
                })), S = 0, W || (W = r.vars.id)), ie && (dn(ie) || (ie = {
                    snapTo: ie
                }), xi.set(ue ? [Ai, Ci] : oe, {
                    scrollBehavior: "auto"
                }), s = hn(ie.snapTo) ? ie.snapTo : "labels" === ie.snapTo ? function(e) {
                    return function(t) {
                        var r, i = [],
                            n = e.labels,
                            s = e.duration();
                        for (r in n) i.push(n[r] / s);
                        return xi.utils.snap(i, t)
                    }
                }(r) : xi.utils.snap(ie.snapTo), L = ie.duration || {
                    min: .1,
                    max: 2
                }, L = dn(L) ? ki(L.min, L.max) : ki(L, L), I = xi.delayedCall(ie.delay || O / 2 || .1, (function() {
                    if (Math.abs(pe.getVelocity()) < 10 && !Ii) {
                        var e = r && !se ? r.totalProgress() : pe.progress,
                            t = (e - k) / (Zi() - Ri) * 1e3 || 0,
                            n = mn(t / 2) * t / .185,
                            o = e + n,
                            a = ki(0, 1, s(o, pe)),
                            u = pe.scroll(),
                            c = Math.round(l + a * g),
                            d = i.tween;
                        if (u <= h && u >= l && c !== u) {
                            if (d && !d._initted && d.data <= Math.abs(c - u)) return;
                            i(c, {
                                duration: L(mn(.185 * Math.max(mn(o - e), mn(a - e)) / t / .05 || 0)),
                                ease: ie.ease || "power3",
                                data: Math.abs(c - u),
                                onComplete: function() {
                                    S = k = r && !se ? r.totalProgress() : pe.progress, te && te(pe)
                                }
                            }, u, n * g, c - u - n * g)
                        }
                    } else pe.isActive && I.restart(!0)
                })).pause()), W && (On[W] = pe), Z = pe.trigger = Si(Z || Q)[0], Q = !0 === Q ? Z : Si(Q)[0], ln(G) && (G = {
                    targets: Z,
                    className: G
                }), Q && (!1 === J || "margin" === J || (J = !(!J && "flex" === Dn(Q.parentNode).display) && gn), pe.pin = Q, !1 !== t.force3D && xi.set(Q, {
                    force3D: !0
                }), (n = xi.core.getCache(Q)).spacer ? v = n.pinState : (n.spacer = D = Ei.createElement("div"), D.setAttribute("class", "pin-spacer" + (W ? " pin-spacer-" + W : "")), n.pinState = v = rs(Q)), pe.spacer = D = n.spacer, M = Dn(Q), A = M[J + j.os2], w = xi.getProperty(Q), b = xi.quickSetter(Q, j.a, vn), $n(Q, D, M), _ = rs(Q)), de && (m = dn(de) ? xn(de, Tn) : Tn, f = Sn("scroller-start", W, oe, j, m, 0), p = Sn("scroller-end", W, oe, j, m, 0, f), x = f["offset" + j.op.d2], c = Sn("start", W, oe, j, m, x), d = Sn("end", W, oe, j, m, x), le || ((z = oe).style.position = "absolute" === Dn(z).position ? "absolute" : "relative", xi.set([f, p], {
                    force3D: !0
                }), F = xi.quickSetter(f, j.a, vn), P = xi.quickSetter(p, j.a, vn))), pe.revert = function(e) {
                    var t = !1 !== e || !pe.enabled,
                        i = Li;
                    t !== o && (t && (N = Math.max(pe.scroll(), pe.scroll.rec || 0), B = pe.progress, U = r && r.progress()), c && [c, d, f, p].forEach((function(e) {
                        return e.style.display = t ? "none" : "block"
                    })), t && (Li = 1), pe.update(t), Li = i, Q && (t ? function(e, t, r) {
                        if (ts(r), e.parentNode === t) {
                            var i = t.parentNode;
                            i && (i.insertBefore(e, t), i.removeChild(t))
                        }
                    }(Q, D, v) : (!ne || !pe.isActive) && $n(Q, D, Dn(Q), T)), o = t)
                }, pe.refresh = function(i) {
                    if (!Li && pe.enabled)
                        if (Q && i && Ji) Cn(e, "scrollEnd", Vn);
                        else {
                            Li = 1, R && R.kill(), K && r && r.progress(0).invalidate(), o || pe.revert();
                            for (var n, s, m, x, b, A, F, P, M = ge(), S = ve(), k = an(oe, j), O = 0, L = 0, I = t.end, z = t.endTrigger || Z, V = t.start || (0 === t.start ? 0 : Q || !Z ? "0 0" : "0 100%"), Y = Z && Math.max(0, Rn.indexOf(pe)) || 0, G = Y; G--;)(F = Rn[G].pin) && (F === Z || F === Q) && Rn[G].revert();
                            for (l = ns(V, Z, M, j, pe.scroll(), c, f, pe, S, fe, le, k) || (Q ? -.001 : 0), hn(I) && (I = I(pe)), ln(I) && !I.indexOf("+=") && (~I.indexOf(" ") ? I = (ln(V) ? V.split(" ")[0] : "") + I : (O = Mn(I.substr(2), M), I = ln(V) ? V : l + O, z = Z)), h = Math.max(l, ns(I || (z ? "100% 0" : k), z, M, j, pe.scroll() + O, d, p, pe, S, fe, le, k)) || -.001, g = h - l || (l -= .01) && .001, O = 0, G = Y; G--;)(F = (A = Rn[G]).pin) && A.start - A._pinPush < l && (n = A.end - A.start, F === Z && (O += n), F === Q && (L += n));
                            if (l += O, h += O, pe._pinPush = L, c && O && ((n = {})[j.a] = "+=" + O, xi.set([c, d], n)), Q) n = Dn(Q), x = j === _n, m = pe.scroll(), E = parseFloat(w(j.a)) + L, !k && h > 1 && ((ue ? Ai : oe).style["overflow-" + j.a] = "scroll"), $n(Q, D, n), _ = rs(Q), s = wn(Q, !0), P = le && sn(oe, x ? yn : _n)(), J && ((T = [J + j.os2, g + L + vn]).t = D, (G = J === gn ? bn(Q, j) + g + L : 0) && T.push(j.d, G + vn), ts(T), le && pe.scroll(N)), le && ((b = {
                                top: s.top + (x ? m - l : P) + vn,
                                left: s.left + (x ? P : m - l) + vn,
                                boxSizing: "border-box",
                                position: "fixed"
                            }).width = b.maxWidth = Math.ceil(s.width) + vn, b.height = b.maxHeight = Math.ceil(s.height) + vn, b.margin = b.marginTop = b.marginRight = b.marginBottom = b.marginLeft = "0", b[gn] = n[gn], b[gn + "Top"] = n[gn + "Top"], b[gn + "Right"] = n[gn + "Right"], b[gn + "Bottom"] = n[gn + "Bottom"], b[gn + "Left"] = n[gn + "Left"], y = function(e, t, r) {
                                for (var i, n = [], s = e.length, o = r ? 8 : 0; o < s; o += 2) i = e[o], n.push(i, i in t ? t[i] : e[o + 1]);
                                return n.t = e.t, n
                            }(v, b, ne)), r ? (r.progress(1, !0), C = w(j.a) - E + g + L, g !== C && y.splice(y.length - 2, 2), r.progress(0, !0)) : C = g;
                            else if (Z && pe.scroll())
                                for (s = Z.parentNode; s && s !== Ai;) s._pinOffset && (l -= s._pinOffset, h -= s._pinOffset), s = s.parentNode;
                            for (G = 0; G < Y; G++)(A = Rn[G].pin) && (A === Z || A === Q) && Rn[G].revert(!1);
                            pe.start = l, pe.end = h, (a = u = pe.scroll()) < N && pe.scroll(N), pe.revert(!1), Li = 0, U && se && r.progress(U, !0), B !== pe.progress && (R && r.totalProgress(B, !0), pe.progress = B, pe.update()), Q && J && (D._pinOffset = Math.round(pe.progress * C)), H && H(pe)
                        }
                }, pe.getVelocity = function() {
                    return (pe.scroll() - u) / (Zi() - Ri) * 1e3 || 0
                }, pe.update = function(e, t) {
                    var n, s, o, c, d, p = pe.scroll(),
                        m = e ? 0 : (p - l) / g,
                        v = m < 0 ? 0 : m > 1 ? 1 : m || 0,
                        x = pe.progress;
                    if (t && (u = a, a = p, ie && (k = S, S = r && !se ? r.totalProgress() : v)), $ && !v && Q && !Li && !Xi && Ji && l < p + (p - u) / (Zi() - Ri) * $ && (v = 1e-4), v !== x && pe.enabled) {
                        if (c = (d = (n = pe.isActive = !!v && v < 1) !== (!!x && x < 1)) || !!v != !!x, pe.direction = v > x ? 1 : -1, pe.progress = v, se || (!R || Li || Xi ? r && r.totalProgress(v, !!Li) : (R.vars.totalProgress = v, R.invalidate().restart())), Q)
                            if (e && J && (D.style[J + j.os2] = A), le) {
                                if (c) {
                                    if (o = !e && v > x && h + 1 > p && p + 1 >= an(oe, j), ne)
                                        if (e || !n && !o) os(Q, D);
                                        else {
                                            var w = wn(Q, !0),
                                                T = p - l;
                                            os(Q, Ai, w.top + (j === _n ? T : 0) + vn, w.left + (j === _n ? 0 : T) + vn)
                                        }
                                    ts(n || o ? y : _), C !== g && v < 1 && n || b(E + (1 !== v || o ? 0 : C))
                                }
                            } else b(E + C * v);
                        ie && !i.tween && !Li && !Xi && I.restart(!0), G && (d || re && v && (v < 1 || !Yi)) && Si(G.targets).forEach((function(e) {
                            return e.classList[n || re ? "add" : "remove"](G.className)
                        })), Y && !se && !e && Y(pe), c && !Li ? (s = v && !x ? 0 : 1 === v ? 1 : 1 === x ? 2 : 3, se && (o = !d && "none" !== ce[s + 1] && ce[s + 1] || ce[s], r && ("complete" === o || "reset" === o || o in r) && ("complete" === o ? r.pause().totalProgress(1) : "reset" === o ? r.restart(!0).pause() : r[o]()), Y && Y(pe)), !d && Yi || (X && d && X(pe), he[s] && he[s](pe), re && (1 === v ? pe.kill(!1, 1) : he[s] = 0), d || he[s = 1 === v ? 1 : 3] && he[s](pe))) : se && Y && !Li && Y(pe)
                    }
                    P && (F(p + (f._isFlipped ? 1 : 0)), P(p))
                }, pe.enable = function() {
                    pe.enabled || (pe.enabled = !0, Cn(oe, "resize", Bn), Cn(oe, "scroll", In), me && Cn(e, "refreshInit", me), r && r.add ? xi.delayedCall(.01, (function() {
                        return l || h || pe.refresh()
                    })) && (g = .01) && (l = h = 0) : pe.refresh())
                }, pe.disable = function(t, r) {
                    if (pe.enabled && (!1 !== t && pe.revert(), pe.enabled = pe.isActive = !1, r || R && R.pause(), N = 0, n && (n.uncache = 1), me && An(e, "refreshInit", me), I && (I.pause(), i.tween && i.tween.kill() && (i.tween = 0)), !ue)) {
                        for (var s = Rn.length; s--;)
                            if (Rn[s].scroller === oe && Rn[s] !== pe) return;
                        An(oe, "resize", Bn), An(oe, "scroll", In)
                    }
                }, pe.kill = function(e, t) {
                    pe.disable(e, t), W && delete On[W];
                    var i = Rn.indexOf(pe);
                    Rn.splice(i, 1), i === Ni && Zn > 0 && Ni--, r && (r.scrollTrigger = null, e && r.render(-1), t || r.kill()), c && [c, d, f, p].forEach((function(e) {
                        return e.parentNode.removeChild(e)
                    })), n && (n.uncache = 1)
                }, pe.enable()
            } else this.update = this.refresh = this.kill = $i
        }, e.register = function(t) {
            if (!wi && (xi = t || tn(), en() && window.document && (bi = window, Ei = document, Ci = Ei.documentElement, Ai = Ei.body), xi && (Si = xi.utils.toArray, ki = xi.utils.clamp, xi.core.globals("ScrollTrigger", e), Ai))) {
                Pi = bi.requestAnimationFrame || function(e) {
                    return setTimeout(e, 16)
                }, Cn(bi, "mousewheel", In), Ti = [bi, Ei, Ci, Ai], Cn(Ei, "scroll", In);
                var r, i = Ai.style,
                    n = i.borderTop;
                i.borderTop = "1px solid #000", r = wn(Ai), _n.m = Math.round(r.top + _n.sc()) || 0, yn.m = Math.round(r.left + yn.sc()) || 0, n ? i.borderTop = n : i.removeProperty("border-top"), Oi = setInterval(Ln, 200), xi.delayedCall(.5, (function() {
                    return Xi = 0
                })), Cn(Ei, "touchcancel", $i), Cn(Ai, "touchstart", $i), En(Cn, Ei, "pointerdown,touchstart,mousedown", (function() {
                    return Ii = 1
                })), En(Cn, Ei, "pointerup,touchend,mouseup", (function() {
                    return Ii = 0
                })), Bi = xi.utils.checkPrefix("transform"), Kn.push(Bi), wi = Zi(), Fi = xi.delayedCall(.2, Hn).pause(), ji = [Ei, "visibilitychange", function() {
                    var e = bi.innerWidth,
                        t = bi.innerHeight;
                    Ei.hidden ? (Ui = e, zi = t) : Ui === e && zi === t || Bn()
                }, Ei, "DOMContentLoaded", Hn, bi, "load", function() {
                    return Ji || Hn()
                }, bi, "resize", Bn], un(Cn)
            }
            return wi
        }, e.defaults = function(e) {
            for (var t in e) Fn[t] = e[t]
        }, e.kill = function() {
            Ki = 0, Rn.slice(0).forEach((function(e) {
                return e.kill(1)
            }))
        }, e.config = function(e) {
            "limitCallbacks" in e && (Yi = !!e.limitCallbacks);
            var t = e.syncInterval;
            t && clearInterval(Oi) || (Oi = t) && setInterval(Ln, t), "autoRefreshEvents" in e && (un(An) || un(Cn, e.autoRefreshEvents || "none"))
        }, e.scrollerProxy = function(e, t) {
            var r = Si(e)[0];
            rn(r) ? Hi.unshift(bi, t, Ai, t, Ci, t) : Hi.unshift(r, t)
        }, e.matchMedia = function(e) {
            var t, r, i, n, s;
            for (r in e) i = zn.indexOf(r), n = e[r], Gi = r, "all" === r ? n() : (t = bi.matchMedia(r)) && (t.matches && (s = n()), ~i ? (zn[i + 1] = pn(zn[i + 1], n), zn[i + 2] = pn(zn[i + 2], s)) : (i = zn.length, zn.push(r, n, s), t.addListener ? t.addListener(jn) : t.addEventListener("change", jn)), zn[i + 3] = t.matches), Gi = 0;
            return zn
        }, e.clearMatchMedia = function(e) {
            e || (zn.length = 0), (e = zn.indexOf(e)) >= 0 && zn.splice(e, 4)
        }, e
    }();
    us.version = "3.5.1", us.saveStyles = function(e) {
        return e ? Si(e).forEach((function(e) {
            var t = Gn.indexOf(e);
            t >= 0 && Gn.splice(t, 4), Gn.push(e, e.style.cssText, xi.core.getCache(e), Gi)
        })) : Gn
    }, us.revert = function(e, t) {
        return Xn(!e, t)
    }, us.create = function(e, t) {
        return new us(e, t)
    }, us.refresh = function(e) {
        return e ? Bn() : Hn(!0)
    }, us.update = Qn, us.maxScroll = function(e, t) {
        return an(e, t ? yn : _n)
    }, us.getScrollFunc = function(e, t) {
        return sn(Si(e)[0], t ? yn : _n)
    }, us.getById = function(e) {
        return On[e]
    }, us.getAll = function() {
        return Rn.slice(0)
    }, us.isScrolling = function() {
        return !!Ji
    }, us.addEventListener = function(e, t) {
        var r = Nn[e] || (Nn[e] = []);
        ~r.indexOf(t) || r.push(t)
    }, us.removeEventListener = function(e, t) {
        var r = Nn[e],
            i = r && r.indexOf(t);
        i >= 0 && r.splice(i, 1)
    }, us.batch = function(e, t) {
        var r, i = [],
            n = {},
            s = t.interval || .016,
            o = t.batchMax || 1e9,
            a = function(e, t) {
                var r = [],
                    i = [],
                    n = xi.delayedCall(s, (function() {
                        t(r, i), r = [], i = []
                    })).pause();
                return function(e) {
                    r.length || n.restart(!0), r.push(e.trigger), i.push(e), o <= r.length && n.progress(1)
                }
            };
        for (r in t) n[r] = "on" === r.substr(0, 2) && hn(t[r]) && "onRefreshInit" !== r ? a(0, t[r]) : t[r];
        return hn(o) && (o = o(), Cn(us, "refresh", (function() {
            return o = t.batchMax()
        }))), Si(e).forEach((function(e) {
            var t = {};
            for (r in n) t[r] = n[r];
            t.trigger = e, i.push(us.create(t))
        })), i
    }, us.sort = function(e) {
        return Rn.sort(e || function(e, t) {
            return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        })
    }, tn() && xi.registerPlugin(us);
    /*!
     * ScrollToPlugin 3.5.1
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var ls, hs, cs, ds, fs, ps, ms, gs = function() {
            return "undefined" != typeof window
        },
        vs = function() {
            return ls || gs() && (ls = window.gsap) && ls.registerPlugin && ls
        },
        ys = function(e) {
            return "string" == typeof e
        },
        _s = function(e, t) {
            var r = "x" === t ? "Width" : "Height",
                i = "scroll" + r,
                n = "client" + r;
            return e === cs || e === ds || e === fs ? Math.max(ds[i], fs[i]) - (cs["inner" + r] || ds[n] || fs[n]) : e[i] - e["offset" + r]
        },
        Ds = function(e, t) {
            var r = "scroll" + ("x" === t ? "Left" : "Top");
            return e === cs && (null != e.pageXOffset ? r = "page" + t.toUpperCase() + "Offset" : e = null != ds[r] ? ds : fs),
                function() {
                    return e[r]
                }
        },
        xs = function(e, t) {
            var r = ps(e)[0].getBoundingClientRect(),
                i = !t || t === cs || t === fs,
                n = i ? {
                    top: ds.clientTop - (cs.pageYOffset || ds.scrollTop || fs.scrollTop || 0),
                    left: ds.clientLeft - (cs.pageXOffset || ds.scrollLeft || fs.scrollLeft || 0)
                } : t.getBoundingClientRect(),
                s = {
                    x: r.left - n.left,
                    y: r.top - n.top
                };
            return !i && t && (s.x += Ds(t, "x")(), s.y += Ds(t, "y")()), s
        },
        ws = function(e, t, r, i, n) {
            return isNaN(e) || "object" == typeof e ? ys(e) && "=" === e.charAt(1) ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + i - n : "max" === e ? _s(t, r) - n : Math.min(_s(t, r), xs(e, t)[r] - n) : parseFloat(e) - n
        },
        bs = function() {
            ls = vs(), gs() && ls && document.body && (cs = window, fs = document.body, ds = document.documentElement, ps = ls.utils.toArray, ls.config({
                autoKillThreshold: 7
            }), ms = ls.config(), hs = 1)
        },
        Es = {
            version: "3.5.1",
            name: "scrollTo",
            rawVars: 1,
            register: function(e) {
                ls = e, bs()
            },
            init: function(e, t, r, i, n) {
                hs || bs();
                this.isWin = e === cs, this.target = e, this.tween = r, "object" != typeof t ? ys((t = {
                    y: t
                }).y) && "max" !== t.y && "=" !== t.y.charAt(1) && (t.x = t.y) : t.nodeType && (t = {
                    y: t,
                    x: t
                }), this.vars = t, this.autoKill = !!t.autoKill, this.getX = Ds(e, "x"), this.getY = Ds(e, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != t.x ? (this.add(this, "x", this.x, ws(t.x, e, "x", this.x, t.offsetX || 0), i, n, Math.round), this._props.push("scrollTo_x")) : this.skipX = 1, null != t.y ? (this.add(this, "y", this.y, ws(t.y, e, "y", this.y, t.offsetY || 0), i, n, Math.round), this._props.push("scrollTo_y")) : this.skipY = 1
            },
            render: function(e, t) {
                for (var r, i, n, s, o, a = t._pt, u = t.target, l = t.tween, h = t.autoKill, c = t.xPrev, d = t.yPrev, f = t.isWin; a;) a.r(e, a.d), a = a._next;
                r = f || !t.skipX ? t.getX() : c, n = (i = f || !t.skipY ? t.getY() : d) - d, s = r - c, o = ms.autoKillThreshold, t.x < 0 && (t.x = 0), t.y < 0 && (t.y = 0), h && (!t.skipX && (s > o || s < -o) && r < _s(u, "x") && (t.skipX = 1), !t.skipY && (n > o || n < -o) && i < _s(u, "y") && (t.skipY = 1), t.skipX && t.skipY && (l.kill(), t.vars.onAutoKill && t.vars.onAutoKill.apply(l, t.vars.onAutoKillParams || []))), f ? cs.scrollTo(t.skipX ? r : t.x, t.skipY ? i : t.y) : (t.skipY || (u.scrollTop = t.y), t.skipX || (u.scrollLeft = t.x)), t.xPrev = t.x, t.yPrev = t.y
            },
            kill: function(e) {
                var t = "scrollTo" === e;
                (t || "scrollTo_x" === e) && (this.skipX = 1), (t || "scrollTo_y" === e) && (this.skipY = 1)
            }
        };
    Es.max = _s, Es.getOffset = xs, Es.buildGetter = Ds, vs() && ls.registerPlugin(Es);
    di.registerPlugin(Es);
    class Cs {
        constructor(e, t) {
            this.element = e, this.onFilterSelect = t, this.mouseX = 0, this.mouseY = 0, this.activeBackgroundHeight = 0, this.filterMenuOpen = !1, this.onClick = this.onClick.bind(this), this.setFilter = this.setFilter.bind(this), this.onDocumentClick = this.onDocumentClick.bind(this), this.onScroll = this.onScroll.bind(this), this.onResize = this.onResize.bind(this), this.onFilterToggle = this.onFilterToggle.bind(this), this.onFilterMouseEnter = this.onFilterMouseEnter.bind(this), this.onFilterMouseLeave = this.onFilterMouseLeave.bind(this), this.links = e.querySelectorAll("[data-category-slug]"), this.filterToggle = this.element.querySelector(".home-viewport-filter-selected"), this.activeBackground = this.element.querySelector(".home-viewport-filter__bg"), this.label = this.element.querySelector(".home-viewport-filter-selected"), this.links.forEach(e => {
                e.addEventListener("click", this.onClick), e.addEventListener("mouseenter", this.onFilterMouseEnter), e.addEventListener("mouseleave", this.onFilterMouseLeave)
            }), this.filterToggle.addEventListener("click", this.onFilterToggle), window.addEventListener("resize", this.onResize), this.onResize(), this.openMenu(!1, 0), di.set(this.links, {
                x: 100,
                autoAlpha: 0
            })
        }
        onFilterMouseLeave(e) {
            this.setLabel(`Viewing ${this.currentFilter} Projects`)
        }
        onFilterMouseEnter(e) {
            const t = e.target.dataset.categorySlug;
            this.setLabel(`View ${t} Projects`)
        }
        onResize() {
            this.activeBackgroundHeight = this.activeBackground.getBoundingClientRect().height
        }
        onScroll() {
            this.filterMenuOpen && this.openMenu(!1)
        }
        onFilterToggle() {
            this.openMenu(!this.filterMenuOpen)
        }
        openMenu(e, t = .35) {
            this.filterMenuOpen = e, e ? (document.addEventListener("click", this.onDocumentClick), this.filterToggle.classList.add("home-viewport-filter-selected--is-active"), di.set(this.activeBackground, {
                autoAlpha: 1
            }), di.to(this.activeBackground, {
                y: 0,
                duration: t,
                ease: "Power4.easeInOut"
            }), di.to(this.links, {
                autoAlpha: 1,
                x: 0,
                duration: t,
                ease: "Power4.easeInOut",
                stagger: .05,
                delay: .3
            })) : (this.filterToggle.classList.remove("home-viewport-filter-selected--is-active"), di.to(this.links, {
                autoAlpha: 0,
                duration: t,
                ease: "Power4.easeInOut"
            }), di.to(this.activeBackground, {
                y: this.activeBackgroundHeight,
                duration: t,
                ease: "Power4.easeInOut",
                delay: .4,
                onComplete: () => {
                    di.set(this.activeBackground, {
                        autoAlpha: 0
                    })
                }
            }))
        }
        setFilter(e) {
            this.currentFilter = e;
            const t = this.element.querySelector(`[data-category-slug=${e}]`);
            this.links.forEach(e => {
                e.classList.remove("filter-active")
            }), t.classList.add("filter-active"), this.setLabel(`Viewing ${e} Projects`), this.openMenu(!1)
        }
        setLabel(e) {
            di.to(this.label, {
                duration: .3,
                text: {
                    value: e,
                    ease: "none"
                }
            })
        }
        onClick(e) {
            const t = e.target.dataset.categorySlug;
            this.onFilterSelect(t)
        }
        onDocumentClick(e) {
            this.element.contains(e.target) || this.openMenu(!1)
        }
        destroy() {
            this.links.forEach(e => {
                e.removeEventListener("click", this.onClick), e.removeEventListener("mouseenter", this.onFilterMouseEnter), e.removeEventListener("mouseleave", this.onFilterMouseLeave)
            }), document.removeEventListener("click", this.onDocumentClick), this.filterToggle.removeEventListener("click", this.onFilterToggle), window.removeEventListener("resize", this.onResize), window.removeEventListener("scroll", this.onScroll)
        }
    }
    const As = () => document.documentElement.classList.contains("touchevents"),
        Ts = () => -1 !== navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome");
    di.registerPlugin(Es);
    const Fs = "srcPortrait";
    class Ps {
        constructor(e, {
            onRollOver: t,
            onRollOut: r
        }) {
            this.onRollOutCallback = r, this.onRollOverCallback = t, this.setFilter = this.setFilter.bind(this), this.onRollOver = this.onRollOver.bind(this), this.onRollOut = this.onRollOut.bind(this), this.getWrappedIndex = this.getWrappedIndex.bind(this), this.scrollResetPoint = e.querySelector(".js-scroll-reset-point"), this.element = e, this.allGridElements = [], this.cellClassNames = [], this.element.querySelectorAll("[data-grid-element]").forEach(e => {
                const t = e.dataset.projectCategorySlug.split(","),
                    {
                        width: r
                    } = e.getBoundingClientRect(),
                    i = e.querySelector("[data-grid-image]"),
                    n = e.querySelector(".image-hover"),
                    s = new yi(e.querySelector(".hover-container"), {
                        interActiveRadius: r
                    });
                As() || s.start(), di.set(n, {
                    autoAlpha: 0,
                    scaleY: 0
                }), this.allGridElements.push({
                    el: e,
                    imgEl: i,
                    hoverImgEl: n,
                    category: t,
                    sticky: s
                }), e.addEventListener("mouseenter", this.onRollOver), e.addEventListener("mouseleave", this.onRollOut)
            });
            for (let e = 0; e < 16; e++) this.cellClassNames.push("cell--number-" + e)
        }
        onRollOver(e) {
            if (!As()) {
                const t = e.target.querySelector(".image-hover");
                di.to(t, {
                    duration: .2,
                    autoAlpha: 1,
                    scaleY: 1,
                    ease: "Power4.easeInOut"
                })
            }
            this.onRollOverCallback(e)
        }
        onRollOut(e) {
            if (!As()) {
                const t = e.target.querySelector(".image-hover");
                di.to(t, {
                    duration: .2,
                    autoAlpha: 0,
                    ease: "Power4.easeInOut",
                    scaleY: 0
                })
            }
            this.onRollOutCallback(e)
        }
        getWrappedIndex(e) {
            return e % this.cellClassNames.length
        }
        getOrientationAttributeByIndex(e) {
            return {
                0: "srcLandscape",
                5: Fs,
                7: "srcLandscape",
                8: "srcLandscape",
                15: "srcLandscape",
                1: Fs,
                2: Fs,
                3: Fs,
                4: Fs,
                6: Fs,
                9: Fs,
                10: Fs,
                11: Fs,
                12: Fs,
                13: Fs,
                14: Fs
            }[this.getWrappedIndex(e)]
        }
        addCellNumberClasses(e, t) {
            e.classList.add(this.cellClassNames[this.getWrappedIndex(t)])
        }
        removeCellNumberClasses(e) {
            this.cellClassNames.forEach(t => {
                e.classList.remove(t)
            })
        }
        setFilter(e, t = 2.1, {
            onComplete: r,
            shouldScroll: i
        } = {
            shouldScroll: !0
        }) {
            if (this.currentFilter === e) return;
            this.currentFilter = e, this.element.classList.remove("u-is-hidden");
            const n = e && "featured" !== e ? this.allGridElements.filter(({
                    category: t
                }) => t.indexOf(e) > -1) : this.allGridElements,
                s = this.element.querySelectorAll(".cell--is-visible"),
                o = [];
            n.forEach(({
                el: e,
                imgEl: t
            }, r) => {
                o.push(e)
            }), t > 0 && di.set(o, {
                autoAlpha: 0,
                scaleY: .5,
                scaleX: .5
            });
            const a = () => {
                    [...n].forEach(({
                        imgEl: e,
                        hoverImgEl: t
                    }, r) => {
                        const i = this.getOrientationAttributeByIndex(r);
                        e.dataset[i];
                        e.src = i === Fs ? e.dataset.srcsetPortrait : e.dataset.srcsetLandscape, t.src = i === Fs ? e.dataset.srcsetLandscape : e.dataset.srcsetPortrait
                    })
                },
                u = di.timeline();
            i && u.add(di.to(window, {
                scrollTo: this.scrollResetPoint
            })), s.length > 0 ? u.add(di.to(s, {
                duration: .2,
                autoAlpha: 0,
                stagger: .03,
                ease: "Power4.easeInOut",
                onCompleteParams: [
                    [...s]
                ],
                onComplete: e => {
                    e.forEach(e => {
                        e.classList.remove("cell--is-visible"), di.set(e, {
                            display: "none"
                        }), this.removeCellNumberClasses(e)
                    }), a()
                }
            })) : a(), u.add(di.to(o, {
                duration: .2,
                x: 0,
                scaleY: 1,
                scaleX: 1,
                rotation: 0,
                autoAlpha: 1,
                display: "block",
                stagger: .03,
                ease: "Power4.easeInOut",
                onStartParams: [
                    [...o]
                ],
                onStart: e => {
                    e.forEach((e, t) => {
                        this.addCellNumberClasses(e, t)
                    })
                },
                onCompleteParams: [
                    [...o]
                ],
                onComplete: e => {
                    e.forEach(e => {
                        e.classList.add("cell--is-visible")
                    }), "none" !== this.currentFilter && this.currentFilter || this.element.classList.add("u-is-hidden"), r && r()
                }
            }))
        }
        destroy() {
            this.allGridElements.forEach(({
                el: e,
                sticky: t
            }) => {
                t.destroy(), e.removeEventListener("mouseenter", this.onRollOver), e.removeEventListener("mouseleave", this.onRollOut)
            })
        }
    }
    class Ms {
        constructor(e, t) {
            e || console.warn("Please specify the element in the constructor", this), this.element = e, this.willUseIntroAnimation = t, this.back = this.element.querySelector("[data-animation-back]"), this.menu = this.element.querySelector("[data-animation-menu]"), this.title = this.element.querySelector("[data-animation-title]"), this.contentHolder = this.element.querySelector("[data-animation-content]"), this.resetAnimation = this.resetAnimation.bind(this), this.resetAnimation()
        }
        resetAnimation() {
            this.willUseIntroAnimation ? (er.set(this.back, {
                autoAlpha: 0,
                y: -50
            }), er.set(this.menu, {
                autoAlpha: 0,
                y: -50
            }), er.set(this.title, {
                autoAlpha: 0
            }), er.set(this.contentHolder, {
                autoAlpha: 0,
                y: 300
            })) : (er.set(this.back, {
                autoAlpha: 0
            }), er.set(this.title, {
                autoAlpha: 0,
                y: 25
            }), er.set(this.contentHolder, {
                autoAlpha: 0,
                y: 300
            }))
        }
        showAfterIntro() {
            const e = er.timeline();
            e.add(er.to(this.title, {
                duration: .6,
                autoAlpha: 1,
                y: 0,
                delay: .4
            })), e.add(er.to(this.menu, {
                duration: .4,
                autoAlpha: 1,
                y: 0,
                ease: "Power4.easeInOut"
            })), this.back && e.add(er.to(this.back, {
                duration: .4,
                autoAlpha: 1,
                y: 0,
                ease: "Power4.easeInOut"
            })), e.add(er.to(this.contentHolder, {
                autoAlpha: 1,
                y: 0,
                duration: .4,
                ease: "Power4.easeInOut",
                delay: .2
            }))
        }
        show() {
            const e = er.timeline();
            e.add(er.to(this.title, {
                duration: .5,
                y: 0,
                delay: 0,
                autoAlpha: 1,
                ease: "expo.inOut"
            })), e.add(er.to(this.contentHolder, {
                autoAlpha: 1,
                y: 0,
                duration: .6,
                ease: "Power4.easeInOut",
                delay: 0
            }))
        }
        destroy() {}
    }
    di.registerPlugin(us);
    class Ss extends Ms {
        constructor(e, {
            willUseIntroAnimation: t,
            webglRenderer: r
        }) {
            super(e, t), r && r.getCanvas() && (this.title = r.getCanvas(), this.resetAnimation()), this.onGridFilterClick = this.onGridFilterClick.bind(this), this.setFilter = this.setFilter.bind(this), this.onGridElementRollOver = this.onGridElementRollOver.bind(this), this.onGridElementRollOut = this.onGridElementRollOut.bind(this);
            const i = e.querySelector(".home-viewport-filter");
            this.gridViewWork = new Ps(e.querySelector("[data-work-grid]"), {
                onRollOver: this.onGridElementRollOver,
                onRollOut: this.onGridElementRollOut
            }), this.gridViewArchive = new Ps(e.querySelector("[data-archive-grid]"), {
                onRollOver: this.onGridElementRollOver,
                onRollOut: this.onGridElementRollOut
            }), this.filterMenu = new Cs(i, this.onGridFilterClick), this.setFilter("featured", !1, 0)
        }
        onGridFilterClick(e) {
            this.setFilter(e)
        }
        onGridElementRollOver(e) {
            const t = e.target.dataset.projectTitle;
            this.filterMenu.setLabel("" + t)
        }
        onGridElementRollOut() {
            this.filterMenu.setLabel(`Viewing ${this.currentFilter} Projects`)
        }
        setFilter(e, t = !0, r = .1) {
            const i = this.currentFilter;
            this.currentFilter = e, "archived" === this.currentFilter ? this.gridViewWork.setFilter("none", r, {
                shouldScroll: t,
                onComplete: () => {
                    this.gridViewArchive.setFilter(e, r, {
                        shouldScroll: t
                    })
                }
            }) : "archived" === i ? this.gridViewArchive.setFilter("none", r, {
                shouldScroll: t,
                onComplete: () => {
                    this.gridViewWork.setFilter(e, r, {
                        shouldScroll: t
                    })
                }
            }) : (this.gridViewWork.setFilter(e, r, {
                shouldScroll: t
            }), this.gridViewArchive.setFilter("none", 0, {
                shouldScroll: !1
            })), this.filterMenu.setFilter(e)
        }
        destroy() {
            console.warn("implement destroy for", this)
        }
    }
    /*!
     * strings: 3.5.1
     * https://greensock.com
     *
     * Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var ks = /(^\s+|\s+$)/g,
        Rs = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

    function Os(e, t, r) {
        for (var i = e.firstChild, n = []; i;) 3 === i.nodeType ? n.push.apply(n, Ls((i.nodeValue + "").replace(/^\n+/g, "").replace(/\s+/g, " "), t, r)) : "br" === (i.nodeName + "").toLowerCase() ? n[n.length - 1] += "<br>" : n.push(i.outerHTML), i = i.nextSibling;
        return n
    }

    function Ls(e, t, r) {
        if (e += "", r && (e = e.replace(ks, "")), t && "" !== t) return e.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(t);
        for (var i, n, s = [], o = e.length, a = 0; a < o; a++)((n = e.charAt(a)).charCodeAt(0) >= 55296 && n.charCodeAt(0) <= 56319 || e.charCodeAt(a + 1) >= 65024 && e.charCodeAt(a + 1) <= 65039) && (i = ((e.substr(a, 12).split(Rs) || [])[1] || "").length || 2, n = e.substr(a, i), s.emoji = 1, a += i - 1), s.push(">" === n ? "&gt;" : "<" === n ? "&lt;" : n);
        return s
    }
    /*!
     * TextPlugin 3.5.1
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Is, Bs, Ns = {
        version: "3.5.1",
        name: "text",
        init: function(e, t, r) {
            var i, n, s, o, a, u, l, h, c = e.nodeName.toUpperCase();
            if (this.svg = e.getBBox && ("TEXT" === c || "TSPAN" === c), !("innerHTML" in e) && !this.svg) return !1;
            if (this.target = e, "object" != typeof t && (t = {
                    value: t
                }), "value" in t) {
                for (this.delimiter = t.delimiter || "", s = Os(e, this.delimiter), Bs || (Bs = document.createElement("div")), Bs.innerHTML = t.value, n = Os(Bs, this.delimiter), this.from = r._from, this.from && (c = s, s = n, n = c), this.hasClass = !(!t.newClass && !t.oldClass), this.newClass = t.newClass, this.oldClass = t.oldClass, i = (c = s.length - n.length) < 0 ? s : n, this.fillChar = t.fillChar || (t.padSpace ? "&nbsp;" : ""), c < 0 && (c = -c); --c > -1;) i.push(this.fillChar);
                if ("diff" === t.type) {
                    for (o = 0, a = [], u = [], l = "", c = 0; c < n.length; c++)(h = n[c]) === s[c] ? l += h : (a[o] = l + h, u[o++] = l + s[c], l = "");
                    n = a, s = u, l && (n.push(l), s.push(l))
                }
                t.speed && r.duration(Math.min(.05 / t.speed * i.length, t.maxDuration || 9999)), this.original = s, this.text = n, this._props.push("text")
            } else this.text = this.original = [""]
        },
        render: function(e, t) {
            e > 1 ? e = 1 : e < 0 && (e = 0), t.from && (e = 1 - e);
            var r, i, n, s = t.text,
                o = t.hasClass,
                a = t.newClass,
                u = t.oldClass,
                l = t.delimiter,
                h = t.target,
                c = t.fillChar,
                d = t.original,
                f = s.length,
                p = e * f + .5 | 0;
            o ? (i = u && p !== f, n = ((r = a && p) ? "<span class='" + a + "'>" : "") + s.slice(0, p).join(l) + (r ? "</span>" : "") + (i ? "<span class='" + u + "'>" : "") + l + d.slice(p).join(l) + (i ? "</span>" : "")) : n = s.slice(0, p).join(l) + l + d.slice(p).join(l), t.svg ? h.textContent = n : h.innerHTML = "&nbsp;" === c && ~n.indexOf("  ") ? n.split("  ").join("&nbsp;&nbsp;") : n
        }
    };
    Ns.splitInnerHTML = Os, Ns.emojiSafeSplit = Ls, Ns.getText = function e(t) {
        var r = t.nodeType,
            i = "";
        if (1 === r || 9 === r || 11 === r) {
            if ("string" == typeof t.textContent) return t.textContent;
            for (t = t.firstChild; t; t = t.nextSibling) i += e(t)
        } else if (3 === r || 4 === r) return t.nodeValue;
        return i
    }, (Is || "undefined" != typeof window && (Is = window.gsap) && Is.registerPlugin && Is) && Is.registerPlugin(Ns), di.registerPlugin(Ns);
    class Us {
        constructor(e) {
            this.element = e, this.imageHolder = this.element.querySelector("[data-attach-to-mouse-image]"), this.onMouseMove = this.onMouseMove.bind(this), document.addEventListener("mousemove", this.onMouseMove)
        }
        setText(e) {
            di.to(this.element, {
                duration: .3,
                text: {
                    value: e,
                    ease: "none",
                    delimiter: " ",
                    type: "diff"
                }
            })
        }
        setImage(e) {
            di.killTweensOf(this.element), e ? di.to(this.element, {
                transformOrigin: "center,center",
                duration: 0,
                autoAlpha: 0,
                onComplete: () => {
                    this.imageHolder.src = e, di.to(this.element, {
                        duration: 0,
                        autoAlpha: 1
                    })
                }
            }) : di.to(this.element, {
                transformOrigin: "center,center",
                duration: 0,
                autoAlpha: 0
            })
        }
        onMouseMove(e) {
            if (this.imageHolder) {
                const t = 350,
                    r = window.innerWidth - t / 2,
                    i = Math.max(t / 2, Math.min(r, e.pageX));
                di.to(this.element, {
                    duration: .75,
                    x: i,
                    y: e.pageY - scrollY
                })
            } else di.to(this.element, {
                x: e.pageX,
                y: e.pageY - scrollY
            })
        }
        destroy() {
            document.removeEventListener("mousemove", this.onMouseMove)
        }
    }
    class zs {
        constructor(e) {
            this.element = e, this.open = this.open.bind(this), this.onKeyDown = this.onKeyDown.bind(this), this.close = this.close.bind(this), this.onCloseClick = this.onCloseClick.bind(this), this.closeButton = e.querySelector(".project-information-close"), this.closeButton.addEventListener("click", this.onCloseClick)
        }
        onCloseClick(e) {
            this.close()
        }
        onKeyDown(e) {
            27 === e.keyCode && this.close()
        }
        init() {}
        open(e = .8) {
            const t = document.getElementsByClassName("js-animate");
            di.set(this.element, {
                y: "100%"
            }), di.set(t, {
                y: "50%"
            }), di.to(this.element, {
                y: 0,
                duration: e,
                ease: "expo.inOut"
            }), di.to(t, {
                y: 0,
                duration: e,
                delay: .2,
                ease: "expo.inOut"
            }), this.element.classList.add("project-information-overlay--is-visible"), document.addEventListener("keydown", this.onKeyDown), document.documentElement.classList.add("body-overflow")
        }
        close(e = .6) {
            console.log({
                duration: e
            });
            const t = document.getElementsByClassName("js-animate");
            di.to(t, {
                y: "50%",
                duration: e,
                ease: "expo.inOut"
            }), di.to(this.element, {
                duration: e,
                y: "100%",
                delay: .2,
                ease: "expo.inOut",
                onComplete: () => {
                    this.element.classList.remove("project-information-overlay--is-visible")
                }
            }), document.removeEventListener("keydown", this.onKeyDown), document.documentElement.classList.remove("body-overflow")
        }
        destroy() {
            document.body.classList.remove("u-stop-scroll"), this.closeButton.removeEventListener("click", this.onCloseClick), this.element.classList.remove("project-information-overlay--is-visible"), document.removeEventListener("keydown", this.onKeyDown)
        }
    }
    /*!
     * matrix 3.5.1
     * https://greensock.com
     *
     * Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var js, Vs, Ys, Gs, Ws, Xs, Hs, qs, Zs = "transform",
        Qs = Zs + "Origin",
        Js = function(e) {
            var t = e.ownerDocument || e;
            !(Zs in e.style) && "msTransform" in e.style && (Qs = (Zs = "msTransform") + "Origin");
            for (; t.parentNode && (t = t.parentNode););
            if (Vs = window, Hs = new no, t) {
                js = t, Ys = t.documentElement, Gs = t.body;
                var r = t.createElement("div"),
                    i = t.createElement("div");
                Gs.appendChild(r), r.appendChild(i), r.style.position = "static", r.style[Zs] = "translate3d(0,0,1px)", qs = i.offsetParent !== r, Gs.removeChild(r)
            }
            return t
        },
        Ks = [],
        $s = [],
        eo = function(e) {
            return e.ownerSVGElement || ("svg" === (e.tagName + "").toLowerCase() ? e : null)
        },
        to = function e(t, r) {
            if (t.parentNode && (js || Js(t))) {
                var i = eo(t),
                    n = i ? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
                    s = i ? r ? "rect" : "g" : "div",
                    o = 2 !== r ? 0 : 100,
                    a = 3 === r ? 100 : 0,
                    u = "position:absolute;display:block;pointer-events:none;",
                    l = js.createElementNS ? js.createElementNS(n.replace(/^https/, "http"), s) : js.createElement(s);
                return r && (i ? (Xs || (Xs = e(t)), l.setAttribute("width", .01), l.setAttribute("height", .01), l.setAttribute("transform", "translate(" + o + "," + a + ")"), Xs.appendChild(l)) : (Ws || ((Ws = e(t)).style.cssText = u), l.style.cssText = u + "width:0.1px;height:0.1px;top:" + a + "px;left:" + o + "px", Ws.appendChild(l))), l
            }
            throw "Need document and parent."
        },
        ro = function(e, t) {
            var r, i, n, s, o, a = eo(e),
                u = e === a,
                l = a ? Ks : $s;
            if (e === Vs) return e;
            if (l.length || l.push(to(e, 1), to(e, 2), to(e, 3)), r = a ? Xs : Ws, a) n = u ? {
                x: 0,
                y: 0
            } : e.getBBox(), (i = e.transform ? e.transform.baseVal : {}).numberOfItems ? (s = (i = i.numberOfItems > 1 ? function(e) {
                for (var t = new no, r = 0; r < e.numberOfItems; r++) t.multiply(e.getItem(r).matrix);
                return t
            }(i) : i.getItem(0).matrix).a * n.x + i.c * n.y, o = i.b * n.x + i.d * n.y) : (i = Hs, s = n.x, o = n.y), t && "g" === e.tagName.toLowerCase() && (s = o = 0), r.setAttribute("transform", "matrix(" + i.a + "," + i.b + "," + i.c + "," + i.d + "," + (i.e + s) + "," + (i.f + o) + ")"), (u ? a : e.parentNode).appendChild(r);
            else {
                if (s = o = 0, qs)
                    for (i = e.offsetParent, n = e; n && (n = n.parentNode) && n !== i && n.parentNode;)(Vs.getComputedStyle(n)[Zs] + "").length > 4 && (s = n.offsetLeft, o = n.offsetTop, n = 0);
                (n = r.style).top = e.offsetTop - o + "px", n.left = e.offsetLeft - s + "px", i = Vs.getComputedStyle(e), n[Zs] = i[Zs], n[Qs] = i[Qs], n.border = i.border, n.borderLeftStyle = i.borderLeftStyle, n.borderTopStyle = i.borderTopStyle, n.borderLeftWidth = i.borderLeftWidth, n.borderTopWidth = i.borderTopWidth, n.position = "fixed" === i.position ? "fixed" : "absolute", e.parentNode.appendChild(r)
            }
            return r
        },
        io = function(e, t, r, i, n, s, o) {
            return e.a = t, e.b = r, e.c = i, e.d = n, e.e = s, e.f = o, e
        },
        no = function() {
            function e(e, t, r, i, n, s) {
                void 0 === e && (e = 1), void 0 === t && (t = 0), void 0 === r && (r = 0), void 0 === i && (i = 1), void 0 === n && (n = 0), void 0 === s && (s = 0), io(this, e, t, r, i, n, s)
            }
            var t = e.prototype;
            return t.inverse = function() {
                var e = this.a,
                    t = this.b,
                    r = this.c,
                    i = this.d,
                    n = this.e,
                    s = this.f,
                    o = e * i - t * r || 1e-10;
                return io(this, i / o, -t / o, -r / o, e / o, (r * s - i * n) / o, -(e * s - t * n) / o)
            }, t.multiply = function(e) {
                var t = this.a,
                    r = this.b,
                    i = this.c,
                    n = this.d,
                    s = this.e,
                    o = this.f,
                    a = e.a,
                    u = e.c,
                    l = e.b,
                    h = e.d,
                    c = e.e,
                    d = e.f;
                return io(this, a * t + l * i, a * r + l * n, u * t + h * i, u * r + h * n, s + c * t + d * i, o + c * r + d * n)
            }, t.clone = function() {
                return new e(this.a, this.b, this.c, this.d, this.e, this.f)
            }, t.equals = function(e) {
                var t = this.a,
                    r = this.b,
                    i = this.c,
                    n = this.d,
                    s = this.e,
                    o = this.f;
                return t === e.a && r === e.b && i === e.c && n === e.d && s === e.e && o === e.f
            }, t.apply = function(e, t) {
                void 0 === t && (t = {});
                var r = e.x,
                    i = e.y,
                    n = this.a,
                    s = this.b,
                    o = this.c,
                    a = this.d,
                    u = this.e,
                    l = this.f;
                return t.x = r * n + i * o + u || 0, t.y = r * s + i * a + l || 0, t
            }, e
        }();

    function so(e, t, r) {
        if (!e || !e.parentNode || (js || Js(e)).documentElement === e) return new no;
        var i = function(e) {
                for (var t, r; e && e !== Gs;)(r = e._gsap) && !r.scaleX && !r.scaleY && r.renderTransform && (r.scaleX = r.scaleY = 1e-4, r.renderTransform(1, r), t ? t.push(r) : t = [r]), e = e.parentNode;
                return t
            }(e.parentNode),
            n = eo(e) ? Ks : $s,
            s = ro(e, r),
            o = n[0].getBoundingClientRect(),
            a = n[1].getBoundingClientRect(),
            u = n[2].getBoundingClientRect(),
            l = s.parentNode,
            h = function e(t) {
                return "fixed" === Vs.getComputedStyle(t).position || ((t = t.parentNode) && 1 === t.nodeType ? e(t) : void 0)
            }(e),
            c = new no((a.left - o.left) / 100, (a.top - o.top) / 100, (u.left - o.left) / 100, (u.top - o.top) / 100, o.left + (h ? 0 : Vs.pageXOffset || js.scrollLeft || Ys.scrollLeft || Gs.scrollLeft || 0), o.top + (h ? 0 : Vs.pageYOffset || js.scrollTop || Ys.scrollTop || Gs.scrollTop || 0));
        if (l.removeChild(s), i)
            for (o = i.length; o--;)(a = i[o]).scaleX = a.scaleY = 0, a.renderTransform(1, a);
        return t ? c.inverse() : c
    }
    /*!
     * Draggable 3.5.1
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var oo, ao, uo, lo, ho, co, fo, po, mo, go, vo, yo, _o, Do, xo, wo, bo, Eo, Co, Ao, To, Fo = function() {
            return "undefined" != typeof window
        },
        Po = function() {
            return oo || Fo() && (oo = window.gsap) && oo.registerPlugin && oo
        },
        Mo = function(e) {
            return "function" == typeof e
        },
        So = function(e) {
            return "object" == typeof e
        },
        ko = function(e) {
            return void 0 === e
        },
        Ro = function() {
            return !1
        },
        Oo = "transform",
        Lo = "transformOrigin",
        Io = function(e) {
            return Math.round(1e4 * e) / 1e4
        },
        Bo = Array.isArray,
        No = function(e, t) {
            var r = uo.createElementNS ? uo.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : uo.createElement(e);
            return r.style ? r : uo.createElement(e)
        },
        Uo = 180 / Math.PI,
        zo = new no,
        jo = Date.now || function() {
            return (new Date).getTime()
        },
        Vo = [],
        Yo = {},
        Go = 0,
        Wo = /^(?:a|input|textarea|button|select)$/i,
        Xo = 0,
        Ho = {},
        qo = {},
        Zo = function(e, t) {
            var r, i = {};
            for (r in e) i[r] = t ? e[r] * t : e[r];
            return i
        },
        Qo = function() {
            return Vo.forEach((function(e) {
                return e()
            }))
        },
        Jo = function() {
            return !Vo.length && oo.ticker.remove(Qo)
        },
        Ko = function(e) {
            for (var t = Vo.length; t--;) Vo[t] === e && Vo.splice(t, 1);
            oo.to(Jo, {
                overwrite: !0,
                delay: 15,
                duration: 0,
                onComplete: Jo,
                data: "_draggable"
            })
        },
        $o = function(e, t, r, i) {
            if (e.addEventListener) {
                var n = _o[t];
                i = i || (vo ? {
                    passive: !1
                } : null), e.addEventListener(n || t, r, i), n && t !== n && e.addEventListener(t, r, i)
            }
        },
        ea = function(e, t, r) {
            if (e.removeEventListener) {
                var i = _o[t];
                e.removeEventListener(i || t, r), i && t !== i && e.removeEventListener(t, r)
            }
        },
        ta = function(e) {
            e.preventDefault && e.preventDefault(), e.preventManipulation && e.preventManipulation()
        },
        ra = function e(t) {
            xo = t.touches && Do < t.touches.length, ea(t.target, "touchend", e)
        },
        ia = function(e) {
            xo = e.touches && Do < e.touches.length, $o(e.target, "touchend", ra)
        },
        na = function(e) {
            return ao.pageYOffset || e.scrollTop || e.documentElement.scrollTop || e.body.scrollTop || 0
        },
        sa = function(e) {
            return ao.pageXOffset || e.scrollLeft || e.documentElement.scrollLeft || e.body.scrollLeft || 0
        },
        oa = function e(t, r) {
            $o(t, "scroll", r), ua(t.parentNode) || e(t.parentNode, r)
        },
        aa = function e(t, r) {
            ea(t, "scroll", r), ua(t.parentNode) || e(t.parentNode, r)
        },
        ua = function(e) {
            return !(e && e !== lo && 9 !== e.nodeType && e !== uo.body && e !== ao && e.nodeType && e.parentNode)
        },
        la = function(e, t) {
            var r = "x" === t ? "Width" : "Height",
                i = "scroll" + r,
                n = "client" + r;
            return Math.max(0, ua(e) ? Math.max(lo[i], ho[i]) - (ao["inner" + r] || lo[n] || ho[n]) : e[i] - e[n])
        },
        ha = function e(t, r) {
            var i = la(t, "x"),
                n = la(t, "y");
            ua(t) ? t = qo : e(t.parentNode, r), t._gsMaxScrollX = i, t._gsMaxScrollY = n, r || (t._gsScrollX = t.scrollLeft || 0, t._gsScrollY = t.scrollTop || 0)
        },
        ca = function(e, t, r) {
            var i = e.style;
            i && (ko(i[t]) && (t = mo(t, e) || t), null == r ? i.removeProperty && i.removeProperty(t.replace(/([A-Z])/g, "-$1").toLowerCase()) : i[t] = r)
        },
        da = function(e) {
            return ao.getComputedStyle(e instanceof Element ? e : e.host || (e.parentNode || {}).host || e)
        },
        fa = {},
        pa = function(e) {
            if (e === ao) return fa.left = fa.top = 0, fa.width = fa.right = lo.clientWidth || e.innerWidth || ho.clientWidth || 0, fa.height = fa.bottom = (e.innerHeight || 0) - 20 < lo.clientHeight ? lo.clientHeight : e.innerHeight || ho.clientHeight || 0, fa;
            var t = e.ownerDocument || uo,
                r = ko(e.pageX) ? e.nodeType || ko(e.left) || ko(e.top) ? go(e)[0].getBoundingClientRect() : e : {
                    left: e.pageX - sa(t),
                    top: e.pageY - na(t),
                    right: e.pageX - sa(t) + 1,
                    bottom: e.pageY - na(t) + 1
                };
            return ko(r.right) && !ko(r.width) ? (r.right = r.left + r.width, r.bottom = r.top + r.height) : ko(r.width) && (r = {
                width: r.right - r.left,
                height: r.bottom - r.top,
                right: r.right,
                left: r.left,
                bottom: r.bottom,
                top: r.top
            }), r
        },
        ma = function(e, t, r) {
            var i, n = e.vars,
                s = n[r],
                o = e._listeners[t];
            return Mo(s) && (i = s.apply(n.callbackScope || e, n[r + "Params"] || [e.pointerEvent])), o && !1 === e.dispatchEvent(t) && (i = !1), i
        },
        ga = function(e, t) {
            var r, i, n, s = go(e)[0];
            return s.nodeType || s === ao ? ya(s, t) : ko(e.left) ? {
                left: i = e.min || e.minX || e.minRotation || 0,
                top: r = e.min || e.minY || 0,
                width: (e.max || e.maxX || e.maxRotation || 0) - i,
                height: (e.max || e.maxY || 0) - r
            } : (n = {
                x: 0,
                y: 0
            }, {
                left: e.left - n.x,
                top: e.top - n.y,
                width: e.width,
                height: e.height
            })
        },
        va = {},
        ya = function(e, t) {
            t = go(t)[0];
            var r, i, n, s, o, a, u, l, h, c, d, f, p, m, g = e.getBBox && e.ownerSVGElement,
                v = e.ownerDocument || uo;
            if (e === ao) n = na(v), i = (r = sa(v)) + (v.documentElement.clientWidth || e.innerWidth || v.body.clientWidth || 0), s = n + ((e.innerHeight || 0) - 20 < v.documentElement.clientHeight ? v.documentElement.clientHeight : e.innerHeight || v.body.clientHeight || 0);
            else {
                if (t === ao || ko(t)) return e.getBoundingClientRect();
                r = n = 0, g ? (d = (c = e.getBBox()).width, f = c.height) : (e.viewBox && (c = e.viewBox.baseVal) && (r = c.x || 0, n = c.y || 0, d = c.width, f = c.height), d || (c = "border-box" === (p = da(e)).boxSizing, d = (parseFloat(p.width) || e.clientWidth || 0) + (c ? 0 : parseFloat(p.borderLeftWidth) + parseFloat(p.borderRightWidth)), f = (parseFloat(p.height) || e.clientHeight || 0) + (c ? 0 : parseFloat(p.borderTopWidth) + parseFloat(p.borderBottomWidth)))), i = d, s = f
            }
            return e === t ? {
                left: r,
                top: n,
                width: i - r,
                height: s - n
            } : (a = (o = so(t, !0).multiply(so(e))).apply({
                x: r,
                y: n
            }), u = o.apply({
                x: i,
                y: n
            }), l = o.apply({
                x: i,
                y: s
            }), h = o.apply({
                x: r,
                y: s
            }), r = Math.min(a.x, u.x, l.x, h.x), n = Math.min(a.y, u.y, l.y, h.y), {
                left: r + ((m = t.parentNode || {}).scrollLeft || 0),
                top: n + (m.scrollTop || 0),
                width: Math.max(a.x, u.x, l.x, h.x) - r,
                height: Math.max(a.y, u.y, l.y, h.y) - n
            })
        },
        _a = function(e, t, r, i, n, s) {
            var o, a, u, l = {};
            if (t)
                if (1 !== n && t instanceof Array) {
                    if (l.end = o = [], u = t.length, So(t[0]))
                        for (a = 0; a < u; a++) o[a] = Zo(t[a], n);
                    else
                        for (a = 0; a < u; a++) o[a] = t[a] * n;
                    r += 1.1, i -= 1.1
                } else Mo(t) ? l.end = function(r) {
                    var i, s, o = t.call(e, r);
                    if (1 !== n)
                        if (So(o)) {
                            for (s in i = {}, o) i[s] = o[s] * n;
                            o = i
                        } else o *= n;
                    return o
                } : l.end = t;
            return (r || 0 === r) && (l.max = r), (i || 0 === i) && (l.min = i), s && (l.velocity = 0), l
        },
        Da = function e(t) {
            var r;
            return !(!t || !t.getAttribute || t === ho) && (!("true" !== (r = t.getAttribute("data-clickable")) && ("false" === r || !t.onclick && !Wo.test(t.nodeName + "") && "true" !== t.getAttribute("contentEditable"))) || e(t.parentNode))
        },
        xa = function(e, t) {
            for (var r, i = e.length; i--;)(r = e[i]).ondragstart = r.onselectstart = t ? null : Ro, oo.set(r, {
                lazy: !0,
                userSelect: t ? "text" : "none"
            })
        },
        wa = function(e, t) {
            e = oo.utils.toArray(e)[0], t = t || {};
            var r, i, n, s, o, a, u = document.createElement("div"),
                l = u.style,
                h = e.firstChild,
                c = 0,
                d = 0,
                f = e.scrollTop,
                p = e.scrollLeft,
                m = e.scrollWidth,
                g = e.scrollHeight,
                v = 0,
                y = 0,
                _ = 0;
            Ao && !1 !== t.force3D ? (o = "translate3d(", a = "px,0px)") : Oo && (o = "translate(", a = "px)"), this.scrollTop = function(e, t) {
                if (!arguments.length) return -this.top();
                this.top(-e, t)
            }, this.scrollLeft = function(e, t) {
                if (!arguments.length) return -this.left();
                this.left(-e, t)
            }, this.left = function(r, i) {
                if (!arguments.length) return -(e.scrollLeft + d);
                var n = e.scrollLeft - p,
                    s = d;
                if ((n > 2 || n < -2) && !i) return p = e.scrollLeft, oo.killTweensOf(this, {
                    left: 1,
                    scrollLeft: 1
                }), this.left(-p), void(t.onKill && t.onKill());
                (r = -r) < 0 ? (d = r - .5 | 0, r = 0) : r > y ? (d = r - y | 0, r = y) : d = 0, (d || s) && (this._skip || (l[Oo] = o + -d + "px," + -c + a), d + v >= 0 && (l.paddingRight = d + v + "px")), e.scrollLeft = 0 | r, p = e.scrollLeft
            }, this.top = function(r, i) {
                if (!arguments.length) return -(e.scrollTop + c);
                var n = e.scrollTop - f,
                    s = c;
                if ((n > 2 || n < -2) && !i) return f = e.scrollTop, oo.killTweensOf(this, {
                    top: 1,
                    scrollTop: 1
                }), this.top(-f), void(t.onKill && t.onKill());
                (r = -r) < 0 ? (c = r - .5 | 0, r = 0) : r > _ ? (c = r - _ | 0, r = _) : c = 0, (c || s) && (this._skip || (l[Oo] = o + -d + "px," + -c + a)), e.scrollTop = 0 | r, f = e.scrollTop
            }, this.maxScrollTop = function() {
                return _
            }, this.maxScrollLeft = function() {
                return y
            }, this.disable = function() {
                for (h = u.firstChild; h;) s = h.nextSibling, e.appendChild(h), h = s;
                e === u.parentNode && e.removeChild(u)
            }, this.enable = function() {
                if ((h = e.firstChild) !== u) {
                    for (; h;) s = h.nextSibling, u.appendChild(h), h = s;
                    e.appendChild(u), this.calibrate()
                }
            }, this.calibrate = function(t) {
                var s, o, a, h = e.clientWidth === r;
                f = e.scrollTop, p = e.scrollLeft, h && e.clientHeight === i && u.offsetHeight === n && m === e.scrollWidth && g === e.scrollHeight && !t || ((c || d) && (o = this.left(), a = this.top(), this.left(-e.scrollLeft), this.top(-e.scrollTop)), s = da(e), h && !t || (l.display = "block", l.width = "auto", l.paddingRight = "0px", (v = Math.max(0, e.scrollWidth - e.clientWidth)) && (v += parseFloat(s.paddingLeft) + (To ? parseFloat(s.paddingRight) : 0))), l.display = "inline-block", l.position = "relative", l.overflow = "visible", l.verticalAlign = "top", l.boxSizing = "content-box", l.width = "100%", l.paddingRight = v + "px", To && (l.paddingBottom = s.paddingBottom), r = e.clientWidth, i = e.clientHeight, m = e.scrollWidth, g = e.scrollHeight, y = e.scrollWidth - r, _ = e.scrollHeight - i, n = u.offsetHeight, l.display = "block", (o || a) && (this.left(o), this.top(a)))
            }, this.content = u, this.element = e, this._skip = !1, this.enable()
        },
        ba = function(e) {
            if (Fo() && document.body) {
                var t = window && window.navigator;
                ao = window, uo = document, lo = uo.documentElement, ho = uo.body, co = No("div"), Co = !!window.PointerEvent, (fo = No("div")).style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab", Eo = "grab" === fo.style.cursor ? "grab" : "move", wo = t && -1 !== t.userAgent.toLowerCase().indexOf("android"), yo = "ontouchstart" in lo && "orientation" in ao || t && (t.MaxTouchPoints > 0 || t.msMaxTouchPoints > 0), i = No("div"), n = No("div"), s = n.style, o = ho, s.display = "inline-block", s.position = "relative", i.style.cssText = n.innerHTML = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden", i.appendChild(n), o.appendChild(i), r = n.offsetHeight + 18 > i.scrollHeight, o.removeChild(i), To = r, _o = function(e) {
                    for (var t = e.split(","), r = (("onpointerdown" in co ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in co ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : e).split(",")), i = {}, n = 4; --n > -1;) i[t[n]] = r[n], i[r[n]] = t[n];
                    try {
                        lo.addEventListener("test", null, Object.defineProperty({}, "passive", {
                            get: function() {
                                vo = 1
                            }
                        }))
                    } catch (e) {}
                    return i
                }("touchstart,touchmove,touchend,touchcancel"), $o(uo, "touchcancel", Ro), $o(ao, "touchmove", Ro), ho && ho.addEventListener("touchstart", Ro), $o(uo, "contextmenu", (function() {
                    for (var e in Yo) Yo[e].isPressed && Yo[e].endDrag()
                })), oo = po = Po()
            }
            var r, i, n, s, o;
            oo ? (bo = oo.plugins.inertia, mo = oo.utils.checkPrefix, Oo = mo(Oo), Lo = mo(Lo), go = oo.utils.toArray, Ao = !!mo("perspective")) : e && console.warn("Please gsap.registerPlugin(Draggable)")
        },
        Ea = function(e) {
            var t, r;

            function i(t, r) {
                var n;
                n = e.call(this) || this, oo || ba(1), t = go(t)[0], bo || (bo = oo.plugins.inertia), n.vars = r = Zo(r || {}), n.target = t, n.x = n.y = n.rotation = 0, n.dragResistance = parseFloat(r.dragResistance) || 0, n.edgeResistance = isNaN(r.edgeResistance) ? 1 : parseFloat(r.edgeResistance) || 0, n.lockAxis = r.lockAxis, n.autoScroll = r.autoScroll || 0, n.lockedAxis = null, n.allowEventDefault = !!r.allowEventDefault, oo.getProperty(t, "x");
                var s, o, a, u, l, h, c, d, f, p, m, g, v, y, _, D, x, w, b, E, C, A, T, F, P, M, S, k, R, O, L, I = (r.type || "x,y").toLowerCase(),
                    B = ~I.indexOf("x") || ~I.indexOf("y"),
                    N = -1 !== I.indexOf("rotation"),
                    U = N ? "rotation" : B ? "x" : "left",
                    z = B ? "y" : "top",
                    j = !(!~I.indexOf("x") && !~I.indexOf("left") && "scroll" !== I),
                    V = !(!~I.indexOf("y") && !~I.indexOf("top") && "scroll" !== I),
                    Y = r.minimumMovement || 2,
                    G = function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(n),
                    W = go(r.trigger || r.handle || t),
                    X = {},
                    H = 0,
                    q = !1,
                    Z = r.autoScrollMarginTop || 40,
                    Q = r.autoScrollMarginRight || 40,
                    J = r.autoScrollMarginBottom || 40,
                    K = r.autoScrollMarginLeft || 40,
                    $ = r.clickableTest || Da,
                    ee = 0,
                    te = t._gsap || oo.core.getCache(t),
                    re = function e(t) {
                        return "fixed" === da(t).position || ((t = t.parentNode) && 1 === t.nodeType ? e(t) : void 0)
                    }(t),
                    ie = function(e, r) {
                        return parseFloat(te.get(t, e, r))
                    },
                    ne = t.ownerDocument || uo,
                    se = function(e) {
                        return ta(e), e.stopImmediatePropagation && e.stopImmediatePropagation(), !1
                    },
                    oe = function e(r) {
                        if (G.autoScroll && G.isDragging && (q || x)) {
                            var i, n, s, a, u, l, h, c, f = t,
                                p = 15 * G.autoScroll;
                            for (q = !1, qo.scrollTop = null != ao.pageYOffset ? ao.pageYOffset : null != ne.documentElement.scrollTop ? ne.documentElement.scrollTop : ne.body.scrollTop, qo.scrollLeft = null != ao.pageXOffset ? ao.pageXOffset : null != ne.documentElement.scrollLeft ? ne.documentElement.scrollLeft : ne.body.scrollLeft, a = G.pointerX - qo.scrollLeft, u = G.pointerY - qo.scrollTop; f && !n;) i = (n = ua(f.parentNode)) ? qo : f.parentNode, s = n ? {
                                bottom: Math.max(lo.clientHeight, ao.innerHeight || 0),
                                right: Math.max(lo.clientWidth, ao.innerWidth || 0),
                                left: 0,
                                top: 0
                            } : i.getBoundingClientRect(), l = h = 0, V && ((c = i._gsMaxScrollY - i.scrollTop) < 0 ? h = c : u > s.bottom - J && c ? (q = !0, h = Math.min(c, p * (1 - Math.max(0, s.bottom - u) / J) | 0)) : u < s.top + Z && i.scrollTop && (q = !0, h = -Math.min(i.scrollTop, p * (1 - Math.max(0, u - s.top) / Z) | 0)), h && (i.scrollTop += h)), j && ((c = i._gsMaxScrollX - i.scrollLeft) < 0 ? l = c : a > s.right - Q && c ? (q = !0, l = Math.min(c, p * (1 - Math.max(0, s.right - a) / Q) | 0)) : a < s.left + K && i.scrollLeft && (q = !0, l = -Math.min(i.scrollLeft, p * (1 - Math.max(0, a - s.left) / K) | 0)), l && (i.scrollLeft += l)), n && (l || h) && (ao.scrollTo(i.scrollLeft, i.scrollTop), _e(G.pointerX + l, G.pointerY + h)), f = i
                        }
                        if (x) {
                            var m = G.x,
                                g = G.y;
                            N ? (G.deltaX = m - parseFloat(te.rotation), G.rotation = m, te.rotation = m + "deg", te.renderTransform(1, te)) : o ? (V && (G.deltaY = g - o.top(), o.top(g)), j && (G.deltaX = m - o.left(), o.left(m))) : B ? (V && (G.deltaY = g - parseFloat(te.y), te.y = g + "px"), j && (G.deltaX = m - parseFloat(te.x), te.x = m + "px"), te.renderTransform(1, te)) : (V && (G.deltaY = g - parseFloat(t.style.top || 0), t.style.top = g + "px"), j && (G.deltaY = m - parseFloat(t.style.left || 0), t.style.left = m + "px")), !d || r || k || (k = !0, !1 === ma(G, "drag", "onDrag") && (j && (G.x -= G.deltaX), V && (G.y -= G.deltaY), e(!0)), k = !1)
                        }
                        x = !1
                    },
                    ae = function(e, r) {
                        var i, n, s = G.x,
                            a = G.y;
                        t._gsap || (te = oo.core.getCache(t)), B ? (G.x = parseFloat(te.x), G.y = parseFloat(te.y)) : N ? G.x = G.rotation = parseFloat(te.rotation) : o ? (G.y = o.top(), G.x = o.left()) : (G.y = parseInt(t.style.top || (n = da(t)) && n.top, 10) || 0, G.x = parseInt(t.style.left || (n || {}).left, 10) || 0), (b || E || C) && !r && (G.isDragging || G.isThrowing) && (C && (Ho.x = G.x, Ho.y = G.y, (i = C(Ho)).x !== G.x && (G.x = i.x, x = !0), i.y !== G.y && (G.y = i.y, x = !0)), b && (i = b(G.x)) !== G.x && (G.x = i, N && (G.rotation = i), x = !0), E && ((i = E(G.y)) !== G.y && (G.y = i), x = !0)), x && oe(!0), e || (G.deltaX = G.x - s, G.deltaY = G.y - a, ma(G, "throwupdate", "onThrowUpdate"))
                    },
                    ue = function(e, t, r, i) {
                        return null == t && (t = -1e20), null == r && (r = 1e20), Mo(e) ? function(n) {
                            var s = G.isPressed ? 1 - G.edgeResistance : 1;
                            return e.call(G, n > r ? r + (n - r) * s : n < t ? t + (n - t) * s : n) * i
                        } : Bo(e) ? function(i) {
                            for (var n, s, o = e.length, a = 0, u = 1e20; --o > -1;)(s = (n = e[o]) - i) < 0 && (s = -s), s < u && n >= t && n <= r && (a = o, u = s);
                            return e[a]
                        } : isNaN(e) ? function(e) {
                            return e
                        } : function() {
                            return e * i
                        }
                    },
                    le = function() {
                        var e, i, n, s;
                        c = !1, o ? (o.calibrate(), G.minX = m = -o.maxScrollLeft(), G.minY = v = -o.maxScrollTop(), G.maxX = p = G.maxY = g = 0, c = !0) : r.bounds && (e = ga(r.bounds, t.parentNode), N ? (G.minX = m = e.left, G.maxX = p = e.left + e.width, G.minY = v = G.maxY = g = 0) : ko(r.bounds.maxX) && ko(r.bounds.maxY) ? (i = ga(t, t.parentNode), G.minX = m = Math.round(ie(U, "px") + e.left - i.left - .5), G.minY = v = Math.round(ie(z, "px") + e.top - i.top - .5), G.maxX = p = Math.round(m + (e.width - i.width)), G.maxY = g = Math.round(v + (e.height - i.height))) : (e = r.bounds, G.minX = m = e.minX, G.minY = v = e.minY, G.maxX = p = e.maxX, G.maxY = g = e.maxY), m > p && (G.minX = p, G.maxX = p = m, m = G.minX), v > g && (G.minY = g, G.maxY = g = v, v = G.minY), N && (G.minRotation = m, G.maxRotation = p), c = !0), r.liveSnap && (n = !0 === r.liveSnap ? r.snap || {} : r.liveSnap, s = Bo(n) || Mo(n), N ? (b = ue(s ? n : n.rotation, m, p, 1), E = null) : n.points ? C = function(e, t, r, i, n, s, o) {
                            return s = s && s < 1e20 ? s * s : 1e20, Mo(e) ? function(a) {
                                var u, l, h, c = G.isPressed ? 1 - G.edgeResistance : 1,
                                    d = a.x,
                                    f = a.y;
                                return a.x = d = d > r ? r + (d - r) * c : d < t ? t + (d - t) * c : d, a.y = f = f > n ? n + (f - n) * c : f < i ? i + (f - i) * c : f, (u = e.call(G, a)) !== a && (a.x = u.x, a.y = u.y), 1 !== o && (a.x *= o, a.y *= o), s < 1e20 && (l = a.x - d) * l + (h = a.y - f) * h > s && (a.x = d, a.y = f), a
                            } : Bo(e) ? function(t) {
                                for (var r, i, n, o, a = e.length, u = 0, l = 1e20; --a > -1;)(o = (r = (n = e[a]).x - t.x) * r + (i = n.y - t.y) * i) < l && (u = a, l = o);
                                return l <= s ? e[u] : t
                            } : function(e) {
                                return e
                            }
                        }(s ? n : n.points, m, p, v, g, n.radius, o ? -1 : 1) : (j && (b = ue(s ? n : n.x || n.left || n.scrollLeft, m, p, o ? -1 : 1)), V && (E = ue(s ? n : n.y || n.top || n.scrollTop, v, g, o ? -1 : 1))))
                    },
                    he = function() {
                        G.isThrowing = !1, ma(G, "throwcomplete", "onThrowComplete")
                    },
                    ce = function() {
                        G.isThrowing = !1
                    },
                    de = function(e, i) {
                        var n, s, a, u;
                        e && bo ? (!0 === e && (n = r.snap || r.liveSnap || {}, s = Bo(n) || Mo(n), e = {
                            resistance: (r.throwResistance || r.resistance || 1e3) / (N ? 10 : 1)
                        }, N ? e.rotation = _a(G, s ? n : n.rotation, p, m, 1, i) : (j && (e[U] = _a(G, s ? n : n.points || n.x || n.left, p, m, o ? -1 : 1, i || "x" === G.lockedAxis)), V && (e[z] = _a(G, s ? n : n.points || n.y || n.top, g, v, o ? -1 : 1, i || "y" === G.lockedAxis)), (n.points || Bo(n) && So(n[0])) && (e.linkedProps = U + "," + z, e.radius = n.radius))), G.isThrowing = !0, u = isNaN(r.overshootTolerance) ? 1 === r.edgeResistance ? 0 : 1 - G.edgeResistance + .2 : r.overshootTolerance, e.duration || (e.duration = {
                            max: Math.max(r.minDuration || 0, "maxDuration" in r ? r.maxDuration : 2),
                            min: isNaN(r.minDuration) ? 0 === u || So(e) && e.resistance > 1e3 ? 0 : .5 : r.minDuration,
                            overshoot: u
                        }), G.tween = a = oo.to(o || t, {
                            inertia: e,
                            data: "_draggable",
                            onComplete: he,
                            onInterrupt: ce,
                            onUpdate: r.fastMode ? ma : ae,
                            onUpdateParams: r.fastMode ? [G, "onthrowupdate", "onThrowUpdate"] : n && n.radius ? [!1, !0] : []
                        }), r.fastMode || (o && (o._skip = !0), a.render(1e9, !0, !0), ae(!0, !0), G.endX = G.x, G.endY = G.y, N && (G.endRotation = G.x), a.play(0), ae(!0, !0), o && (o._skip = !1))) : c && G.applyBounds()
                    },
                    fe = function(e) {
                        var r, i = F;
                        F = so(t.parentNode, !0), e && G.isPressed && !F.equals(i || new no) && (r = i.inverse().apply({
                            x: a,
                            y: u
                        }), F.apply(r, r), a = r.x, u = r.y), F.equals(zo) && (F = null)
                    },
                    pe = function() {
                        var e, r, i, n = 1 - G.edgeResistance,
                            s = re ? sa(ne) : 0,
                            d = re ? na(ne) : 0;
                        fe(!1), F && (va.x = G.pointerX - s, va.y = G.pointerY - d, F.apply(va, va), a = va.x, u = va.y), x && (_e(G.pointerX, G.pointerY), oe(!0)), o ? (le(), h = o.top(), l = o.left()) : (me() ? (ae(!0, !0), le()) : G.applyBounds(), N ? (e = t.ownerSVGElement ? [te.xOrigin - t.getBBox().x, te.yOrigin - t.getBBox().y] : (da(t)[Lo] || "0 0").split(" "), D = G.rotationOrigin = so(t).apply({
                            x: parseFloat(e[0]) || 0,
                            y: parseFloat(e[1]) || 0
                        }), ae(!0, !0), r = G.pointerX - D.x - s, i = D.y - G.pointerY + d, l = G.x, h = G.y = Math.atan2(i, r) * Uo) : (h = ie(z, "px"), l = ie(U, "px"))), c && n && (l > p ? l = p + (l - p) / n : l < m && (l = m - (m - l) / n), N || (h > g ? h = g + (h - g) / n : h < v && (h = v - (v - h) / n))), G.startX = l, G.startY = h
                    },
                    me = function() {
                        return G.tween && G.tween.isActive()
                    },
                    ge = function() {
                        !fo.parentNode || me() || G.isDragging || fo.parentNode.removeChild(fo)
                    },
                    ve = function(e, n) {
                        var l;
                        if (!s || G.isPressed || !e || !("mousedown" !== e.type && "pointerdown" !== e.type || n) && jo() - ee < 30 && _o[G.pointerEvent.type]) L && e && s && ta(e);
                        else {
                            if (P = me(), G.pointerEvent = e, _o[e.type] ? (T = ~e.type.indexOf("touch") ? e.currentTarget || e.target : ne, $o(T, "touchend", De), $o(T, "touchmove", ye), $o(T, "touchcancel", De), $o(ne, "touchstart", ia)) : (T = null, $o(ne, "mousemove", ye)), S = null, Co && T || ($o(ne, "mouseup", De), e && e.target && $o(e.target, "mouseup", De)), A = $.call(G, e.target) && !1 === r.dragClickables && !n) return $o(e.target, "change", De), ma(G, "pressInit", "onPressInit"), ma(G, "press", "onPress"), void xa(W, !0);
                            var h;
                            if (M = !(!T || j === V || !1 === G.vars.allowNativeTouchScrolling || G.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2)) && (j ? "y" : "x"), (L = !M && !G.allowEventDefault) && (ta(e), $o(ao, "touchforcechange", ta)), e.changedTouches ? (e = y = e.changedTouches[0], _ = e.identifier) : e.pointerId ? _ = e.pointerId : y = _ = null, Do++, h = oe, Vo.push(h), 1 === Vo.length && oo.ticker.add(Qo), u = G.pointerY = e.pageY, a = G.pointerX = e.pageX, ma(G, "pressInit", "onPressInit"), (M || G.autoScroll) && ha(t.parentNode), !t.parentNode || !G.autoScroll || o || N || !t.parentNode._gsMaxScrollX || fo.parentNode || t.getBBox || (fo.style.width = t.parentNode.scrollWidth + "px", t.parentNode.appendChild(fo)), pe(), G.tween && G.tween.kill(), G.isThrowing = !1, oo.killTweensOf(o || t, X, !0), o && oo.killTweensOf(t, {
                                    scrollTo: 1
                                }, !0), G.tween = G.lockedAxis = null, (r.zIndexBoost || !N && !o && !1 !== r.zIndexBoost) && (t.style.zIndex = i.zIndex++), G.isPressed = !0, d = !(!r.onDrag && !G._listeners.drag), f = !(!r.onMove && !G._listeners.move), !N && (!1 !== r.cursor || r.activeCursor))
                                for (l = W.length; --l > -1;) oo.set(W[l], {
                                    cursor: r.activeCursor || r.cursor || ("grab" === Eo ? "grabbing" : Eo)
                                });
                            ma(G, "press", "onPress")
                        }
                    },
                    ye = function(e) {
                        var t, r, i, n, o, l, h = e;
                        if (s && !xo && G.isPressed && e) {
                            if (G.pointerEvent = e, t = e.changedTouches) {
                                if ((e = t[0]) !== y && e.identifier !== _) {
                                    for (n = t.length; --n > -1 && (e = t[n]).identifier !== _;);
                                    if (n < 0) return
                                }
                            } else if (e.pointerId && _ && e.pointerId !== _) return;
                            T && M && !S && (va.x = e.pageX, va.y = e.pageY, F && F.apply(va, va), r = va.x, i = va.y, ((o = Math.abs(r - a)) !== (l = Math.abs(i - u)) && (o > Y || l > Y) || wo && M === S) && (S = o > l && j ? "x" : "y", M && S !== M && $o(ao, "touchforcechange", ta), !1 !== G.vars.lockAxisOnTouchScroll && j && V && (G.lockedAxis = "x" === S ? "y" : "x", Mo(G.vars.onLockAxis) && G.vars.onLockAxis.call(G, h)), wo && M === S)) ? De(h) : (G.allowEventDefault || M && (!S || M === S) || !1 === h.cancelable ? L && (L = !1) : (ta(h), L = !0), G.autoScroll && (q = !0), _e(e.pageX, e.pageY, f))
                        } else L && e && s && ta(e)
                    },
                    _e = function(e, t, r) {
                        var i, n, s, o, d, f, y = 1 - G.dragResistance,
                            _ = 1 - G.edgeResistance,
                            w = G.pointerX,
                            A = G.pointerY,
                            T = h,
                            P = G.x,
                            M = G.y,
                            S = G.endX,
                            k = G.endY,
                            R = G.endRotation,
                            O = x;
                        G.pointerX = e, G.pointerY = t, re && (e -= sa(ne), t -= na(ne)), N ? (o = Math.atan2(D.y - t, e - D.x) * Uo, (d = G.y - o) > 180 ? (h -= 360, G.y = o) : d < -180 && (h += 360, G.y = o), G.x !== l || Math.abs(h - o) > Y ? (G.y = o, s = l + (h - o) * y) : s = l) : (F && (f = e * F.a + t * F.c + F.e, t = e * F.b + t * F.d + F.f, e = f), (n = t - u) < Y && n > -Y && (n = 0), (i = e - a) < Y && i > -Y && (i = 0), (G.lockAxis || G.lockedAxis) && (i || n) && ((f = G.lockedAxis) || (G.lockedAxis = f = j && Math.abs(i) > Math.abs(n) ? "y" : V ? "x" : null, f && Mo(G.vars.onLockAxis) && G.vars.onLockAxis.call(G, G.pointerEvent)), "y" === f ? n = 0 : "x" === f && (i = 0)), s = Io(l + i * y), o = Io(h + n * y)), (b || E || C) && (G.x !== s || G.y !== o && !N) ? (C && (Ho.x = s, Ho.y = o, f = C(Ho), s = Io(f.x), o = Io(f.y)), b && (s = Io(b(s))), E && (o = Io(E(o)))) : c && (s > p ? s = p + Math.round((s - p) * _) : s < m && (s = m + Math.round((s - m) * _)), N || (o > g ? o = Math.round(g + (o - g) * _) : o < v && (o = Math.round(v + (o - v) * _)))), (G.x !== s || G.y !== o && !N) && (N ? (G.endRotation = G.x = G.endX = s, x = !0) : (V && (G.y = G.endY = o, x = !0), j && (G.x = G.endX = s, x = !0)), r && !1 === ma(G, "move", "onMove") ? (G.pointerX = w, G.pointerY = A, h = T, G.x = P, G.y = M, G.endX = S, G.endY = k, G.endRotation = R, x = O) : !G.isDragging && G.isPressed && (G.isDragging = !0, ma(G, "dragstart", "onDragStart")))
                    },
                    De = function e(i, n) {
                        if (s && G.isPressed && (!i || null == _ || n || !(i.pointerId && i.pointerId !== _ || i.changedTouches && ! function(e, t) {
                                for (var r = e.length; r--;)
                                    if (e[r].identifier === t) return !0
                            }(i.changedTouches, _)))) {
                            G.isPressed = !1;
                            var o, a, u, l, h, c = i,
                                d = G.isDragging,
                                f = G.vars.allowContextMenu && i && (i.ctrlKey || i.which > 2),
                                p = oo.delayedCall(.001, ge);
                            if (T ? (ea(T, "touchend", e), ea(T, "touchmove", ye), ea(T, "touchcancel", e), ea(ne, "touchstart", ia)) : ea(ne, "mousemove", ye), ea(ao, "touchforcechange", ta), Co && T || (ea(ne, "mouseup", e), i && i.target && ea(i.target, "mouseup", e)), x = !1, A && !f) return i && (ea(i.target, "change", e), G.pointerEvent = c), xa(W, !1), ma(G, "release", "onRelease"), ma(G, "click", "onClick"), void(A = !1);
                            if (Ko(oe), !N)
                                for (a = W.length; --a > -1;) ca(W[a], "cursor", r.cursor || (!1 !== r.cursor ? Eo : null));
                            if (d && (H = Xo = jo(), G.isDragging = !1), Do--, i) {
                                if ((o = i.changedTouches) && (i = o[0]) !== y && i.identifier !== _) {
                                    for (a = o.length; --a > -1 && (i = o[a]).identifier !== _;);
                                    if (a < 0) return
                                }
                                G.pointerEvent = c, G.pointerX = i.pageX, G.pointerY = i.pageY
                            }
                            return f && c ? (ta(c), L = !0, ma(G, "release", "onRelease")) : c && !d ? (L = !1, P && (r.snap || r.bounds) && de(r.inertia || r.throwProps), ma(G, "release", "onRelease"), wo && "touchmove" === c.type || -1 !== c.type.indexOf("cancel") || (ma(G, "click", "onClick"), jo() - ee < 300 && ma(G, "doubleclick", "onDoubleClick"), l = c.target || t, ee = jo(), h = function() {
                                ee === R || !G.enabled() || G.isPressed || c.defaultPrevented || (l.click ? l.click() : ne.createEvent && ((u = ne.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, ao, 1, G.pointerEvent.screenX, G.pointerEvent.screenY, G.pointerX, G.pointerY, !1, !1, !1, !1, 0, null), l.dispatchEvent(u)))
                            }, wo || c.defaultPrevented || oo.delayedCall(.05, h))) : (de(r.inertia || r.throwProps), G.allowEventDefault || !c || !1 === r.dragClickables && $.call(G, c.target) || !d || M && (!S || M !== S) || !1 === c.cancelable ? L = !1 : (L = !0, ta(c)), ma(G, "release", "onRelease")), me() && p.duration(G.tween.duration()), d && ma(G, "dragend", "onDragEnd"), !0
                        }
                        L && i && s && ta(i)
                    },
                    xe = function(e) {
                        if (e && G.isDragging && !o) {
                            var r = e.target || t.parentNode,
                                i = r.scrollLeft - r._gsScrollX,
                                n = r.scrollTop - r._gsScrollY;
                            (i || n) && (F ? (a -= i * F.a + n * F.c, u -= n * F.d + i * F.b) : (a -= i, u -= n), r._gsScrollX += i, r._gsScrollY += n, _e(G.pointerX, G.pointerY))
                        }
                    },
                    we = function(e) {
                        var t = jo(),
                            r = t - ee < 40,
                            i = t - H < 40,
                            n = r && R === ee,
                            s = G.pointerEvent && G.pointerEvent.defaultPrevented,
                            o = r && O === ee,
                            a = e.isTrusted || null == e.isTrusted && r && n;
                        if ((n || i && !1 !== G.vars.suppressClickOnDrag) && e.stopImmediatePropagation && e.stopImmediatePropagation(), r && (!G.pointerEvent || !G.pointerEvent.defaultPrevented) && (!n || a && !o)) return a && n && (O = ee), void(R = ee);
                        (G.isPressed || i || r) && (a && e.detail && r && !s || ta(e))
                    },
                    be = function(e) {
                        return F ? {
                            x: e.x * F.a + e.y * F.c + F.e,
                            y: e.x * F.b + e.y * F.d + F.f
                        } : {
                            x: e.x,
                            y: e.y
                        }
                    };
                return (w = i.get(t)) && w.kill(), n.startDrag = function(e, r) {
                    var i, n, s, o;
                    ve(e || G.pointerEvent, !0), r && !G.hitTest(e || G.pointerEvent) && (i = pa(e || G.pointerEvent), n = pa(t), s = be({
                        x: i.left + i.width / 2,
                        y: i.top + i.height / 2
                    }), o = be({
                        x: n.left + n.width / 2,
                        y: n.top + n.height / 2
                    }), a -= s.x - o.x, u -= s.y - o.y), G.isDragging || (G.isDragging = !0, ma(G, "dragstart", "onDragStart"))
                }, n.drag = ye, n.endDrag = function(e) {
                    return De(e || G.pointerEvent, !0)
                }, n.timeSinceDrag = function() {
                    return G.isDragging ? 0 : (jo() - H) / 1e3
                }, n.timeSinceClick = function() {
                    return (jo() - ee) / 1e3
                }, n.hitTest = function(e, t) {
                    return i.hitTest(G.target, e, t)
                }, n.getDirection = function(e, r) {
                    var i, n, s, o, a, u, c = "velocity" === e && bo ? e : So(e) && !N ? "element" : "start";
                    return "element" === c && (a = pa(G.target), u = pa(e)), i = "start" === c ? G.x - l : "velocity" === c ? bo.getVelocity(t, U) : a.left + a.width / 2 - (u.left + u.width / 2), N ? i < 0 ? "counter-clockwise" : "clockwise" : (r = r || 2, n = "start" === c ? G.y - h : "velocity" === c ? bo.getVelocity(t, z) : a.top + a.height / 2 - (u.top + u.height / 2), o = (s = Math.abs(i / n)) < 1 / r ? "" : i < 0 ? "left" : "right", s < r && ("" !== o && (o += "-"), o += n < 0 ? "up" : "down"), o)
                }, n.applyBounds = function(e, i) {
                    var n, s, o, a, u, l;
                    if (e && r.bounds !== e) return r.bounds = e, G.update(!0, i);
                    if (ae(!0), le(), c && !me()) {
                        if (n = G.x, s = G.y, n > p ? n = p : n < m && (n = m), s > g ? s = g : s < v && (s = v), (G.x !== n || G.y !== s) && (o = !0, G.x = G.endX = n, N ? G.endRotation = n : G.y = G.endY = s, x = !0, oe(!0), G.autoScroll && !G.isDragging))
                            for (ha(t.parentNode), a = t, qo.scrollTop = null != ao.pageYOffset ? ao.pageYOffset : null != ne.documentElement.scrollTop ? ne.documentElement.scrollTop : ne.body.scrollTop, qo.scrollLeft = null != ao.pageXOffset ? ao.pageXOffset : null != ne.documentElement.scrollLeft ? ne.documentElement.scrollLeft : ne.body.scrollLeft; a && !l;) u = (l = ua(a.parentNode)) ? qo : a.parentNode, V && u.scrollTop > u._gsMaxScrollY && (u.scrollTop = u._gsMaxScrollY), j && u.scrollLeft > u._gsMaxScrollX && (u.scrollLeft = u._gsMaxScrollX), a = u;
                        G.isThrowing && (o || G.endX > p || G.endX < m || G.endY > g || G.endY < v) && de(r.inertia || r.throwProps, o)
                    }
                    return G
                }, n.update = function(e, r, i) {
                    var n = G.x,
                        s = G.y;
                    return fe(!r), e ? G.applyBounds() : (x && i && oe(!0), ae(!0)), r && (_e(G.pointerX, G.pointerY), x && oe(!0)), G.isPressed && !r && (j && Math.abs(n - G.x) > .01 || V && Math.abs(s - G.y) > .01 && !N) && pe(), G.autoScroll && (ha(t.parentNode, G.isDragging), q = G.isDragging, oe(!0), aa(t, xe), oa(t, xe)), G
                }, n.enable = function(e) {
                    var i, n, a, u = {
                        lazy: !0
                    };
                    if (N || !1 === r.cursor || (u.cursor = r.cursor || Eo), oo.utils.checkPrefix("touchCallout") && (u.touchCallout = "none"), u.touchAction = j === V ? "none" : r.allowNativeTouchScrolling || r.allowEventDefault ? "manipulation" : j ? "pan-y" : "pan-x", "soft" !== e) {
                        for (n = W.length; --n > -1;) a = W[n], Co || $o(a, "mousedown", ve), $o(a, "touchstart", ve), $o(a, "click", we, !0), oo.set(a, u), a.getBBox && a.ownerSVGElement && oo.set(a.ownerSVGElement, {
                            touchAction: j === V ? "none" : r.allowNativeTouchScrolling || r.allowEventDefault ? "manipulation" : j ? "pan-y" : "pan-x"
                        }), r.allowContextMenu || $o(a, "contextmenu", se);
                        xa(W, !1)
                    }
                    return oa(t, xe), s = !0, bo && "soft" !== e && bo.track(o || t, B ? "x,y" : N ? "rotation" : "top,left"), t._gsDragID = i = "d" + Go++, Yo[i] = G, o && (o.enable(), o.element._gsDragID = i), (r.bounds || N) && pe(), r.bounds && G.applyBounds(), G
                }, n.disable = function(e) {
                    var r, i, n = G.isDragging;
                    if (!N)
                        for (r = W.length; --r > -1;) ca(W[r], "cursor", null);
                    if ("soft" !== e) {
                        for (r = W.length; --r > -1;) i = W[r], ca(i, "touchCallout", null), ca(i, "touchAction", null), ea(i, "mousedown", ve), ea(i, "touchstart", ve), ea(i, "click", we), ea(i, "contextmenu", se);
                        xa(W, !0), T && (ea(T, "touchcancel", De), ea(T, "touchend", De), ea(T, "touchmove", ye)), ea(ne, "mouseup", De), ea(ne, "mousemove", ye)
                    }
                    return aa(t, xe), s = !1, bo && "soft" !== e && bo.untrack(o || t, B ? "x,y" : N ? "rotation" : "top,left"), o && o.disable(), Ko(oe), G.isDragging = G.isPressed = A = !1, n && ma(G, "dragend", "onDragEnd"), G
                }, n.enabled = function(e, t) {
                    return arguments.length ? e ? G.enable(t) : G.disable(t) : s
                }, n.kill = function() {
                    return G.isThrowing = !1, G.tween && G.tween.kill(), G.disable(), oo.set(W, {
                        clearProps: "userSelect"
                    }), delete Yo[t._gsDragID], G
                }, ~I.indexOf("scroll") && (o = n.scrollProxy = new wa(t, function(e, t) {
                    for (var r in t) r in e || (e[r] = t[r]);
                    return e
                }({
                    onKill: function() {
                        G.isPressed && De(null)
                    }
                }, r)), t.style.overflowY = V && !yo ? "auto" : "hidden", t.style.overflowX = j && !yo ? "auto" : "hidden", t = o.content), N ? X.rotation = 1 : (j && (X[U] = 1), V && (X[z] = 1)), te.force3D = !("force3D" in r) || r.force3D, n.enable(), n
            }
            return r = e, (t = i).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r, i.register = function(e) {
                oo = e, ba()
            }, i.create = function(e, t) {
                return po || ba(!0), go(e).map((function(e) {
                    return new i(e, t)
                }))
            }, i.get = function(e) {
                return Yo[(go(e)[0] || {})._gsDragID]
            }, i.timeSinceDrag = function() {
                return (jo() - Xo) / 1e3
            }, i.hitTest = function(e, t, r) {
                if (e === t) return !1;
                var i, n, s, o = pa(e),
                    a = pa(t),
                    u = o.top,
                    l = o.left,
                    h = o.right,
                    c = o.bottom,
                    d = o.width,
                    f = o.height,
                    p = a.left > h || a.right < l || a.top > c || a.bottom < u;
                return p || !r ? !p : (s = -1 !== (r + "").indexOf("%"), r = parseFloat(r) || 0, (i = {
                    left: Math.max(l, a.left),
                    top: Math.max(u, a.top)
                }).width = Math.min(h, a.right) - i.left, i.height = Math.min(c, a.bottom) - i.top, !(i.width < 0 || i.height < 0) && (s ? (r *= .01, (n = i.width * i.height) >= d * f * r || n >= a.width * a.height * r) : i.width > r && i.height > r))
            }, i
        }(function() {
            function e(e) {
                this._listeners = {}, this.target = e || this
            }
            var t = e.prototype;
            return t.addEventListener = function(e, t) {
                var r = this._listeners[e] || (this._listeners[e] = []);
                ~r.indexOf(t) || r.push(t)
            }, t.removeEventListener = function(e, t) {
                var r = this._listeners[e],
                    i = r && r.indexOf(t) || -1;
                i > -1 && r.splice(i, 1)
            }, t.dispatchEvent = function(e) {
                var t, r = this;
                return (this._listeners[e] || []).forEach((function(i) {
                    return !1 === i.call(r, {
                        type: e,
                        target: r.target
                    }) && (t = !1)
                })), t
            }, e
        }());
    ! function(e, t) {
        for (var r in t) r in e || (e[r] = t[r])
    }(Ea.prototype, {
        pointerX: 0,
        pointerY: 0,
        startX: 0,
        startY: 0,
        deltaX: 0,
        deltaY: 0,
        isDragging: !1,
        isPressed: !1
    }), Ea.zIndex = 1e3, Ea.version = "3.5.1", Po() && oo.registerPlugin(Ea);
    /*!
     * VelocityTracker: 3.5.1
     * https://greensock.com
     *
     * Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Ca, Aa, Ta, Fa, Pa, Ma, Sa, ka, Ra = function() {
            return Ca || "undefined" != typeof window && (Ca = window.gsap)
        },
        Oa = {},
        La = function(e) {
            return ka(e).id
        },
        Ia = function(e) {
            return Oa[La("string" == typeof e ? Ta(e)[0] : e)]
        },
        Ba = function(e) {
            var t, r = Pa;
            if (e - Sa >= .05)
                for (Sa, Sa = e; r;)((t = r.g(r.t, r.p)) !== r.v1 || e - r.t1 > .2) && (r.v2 = r.v1, r.v1 = t, r.t2 = r.t1, r.t1 = e), r = r._next
        },
        Na = {
            deg: 360,
            rad: 2 * Math.PI
        },
        Ua = function() {
            (Ca = Ra()) && (Ta = Ca.utils.toArray, Fa = Ca.utils.getUnit, ka = Ca.core.getCache, Ma = Ca.ticker, Aa = 1)
        },
        za = function(e, t, r, i) {
            this.t = e, this.p = t, this.g = e._gsap.get, this.rCap = Na[r || Fa(this.g(e, t))], this.v1 = this.v2 = 0, this.t1 = this.t2 = Ma.time, i && (this._next = i, i._prev = this)
        },
        ja = function() {
            function e(e, t) {
                Aa || Ua(), this.target = Ta(e)[0], Oa[La(this.target)] = this, this._props = {}, t && this.add(t)
            }
            e.register = function(e) {
                Ca = e, Ua()
            };
            var t = e.prototype;
            return t.get = function(e, t) {
                var r, i, n, s = this._props[e] || console.warn("Not tracking " + e + " velocity.");
                return r = parseFloat(t ? s.v1 : s.g(s.t, s.p)) - parseFloat(s.v2), (i = s.rCap) && (r %= i) !== r % (i / 2) && (r = r < 0 ? r + i : r - i), n = r / ((t ? s.t1 : Ma.time) - s.t2), Math.round(1e4 * n) / 1e4
            }, t.getAll = function() {
                var e, t = {},
                    r = this._props;
                for (e in r) t[e] = this.get(e);
                return t
            }, t.isTracking = function(e) {
                return e in this._props
            }, t.add = function(e, t) {
                e in this._props || (Pa || (Ma.add(Ba), Sa = Ma.time), Pa = this._props[e] = new za(this.target, e, t, Pa))
            }, t.remove = function(e) {
                var t, r, i = this._props[e];
                i && (t = i._prev, r = i._next, t && (t._next = r), r ? r._prev = t : Pa === i && (Ma.remove(Ba), Pa = 0), delete this._props[e])
            }, t.kill = function(e) {
                for (var t in this._props) this.remove(t);
                e || delete Oa[La(this.target)]
            }, e.track = function(t, r, i) {
                Aa || Ua();
                for (var n, s, o = [], a = Ta(t), u = r.split(","), l = (i || "").split(","), h = a.length; h--;) {
                    for (n = Ia(a[h]) || new e(a[h]), s = u.length; s--;) n.add(u[s], l[s] || l[0]);
                    o.push(n)
                }
                return o
            }, e.untrack = function(e, t) {
                var r = (t || "").split(",");
                Ta(e).forEach((function(e) {
                    var t = Ia(e);
                    t && (r.length ? r.forEach((function(e) {
                        return t.remove(e)
                    })) : t.kill(1))
                }))
            }, e.isTracking = function(e, t) {
                var r = Ia(e);
                return r && r.isTracking(t)
            }, e.getVelocity = function(e, t) {
                var r = Ia(e);
                return r && r.isTracking(t) ? r.get(t) : console.warn("Not tracking velocity of " + t)
            }, e
        }();
    ja.getByTarget = Ia, Ra() && Ca.registerPlugin(ja);
    /*!
     * InertiaPlugin 3.5.1
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Va, Ya, Ga, Wa, Xa, Ha, qa, Za, Qa, Ja, Ka, $a, eu = ja.getByTarget,
        tu = function() {
            return Va || "undefined" != typeof window && (Va = window.gsap) && Va.registerPlugin && Va
        },
        ru = function(e) {
            return "number" == typeof e
        },
        iu = function(e) {
            return "object" == typeof e
        },
        nu = function(e) {
            return "function" == typeof e
        },
        su = Array.isArray,
        ou = function(e) {
            return e
        },
        au = function(e, t, r) {
            for (var i in t) i in e || i === r || (e[i] = t[i]);
            return e
        },
        uu = function e(t) {
            var r, i, n = {};
            for (r in t) n[r] = iu(i = t[r]) ? e(i) : i;
            return n
        },
        lu = function(e, t, r, i, n) {
            var s, o, a, u, l = t.length,
                h = 0,
                c = 1e10;
            if (iu(e)) {
                for (; l--;) {
                    for (a in s = t[l], o = 0, e) o += (u = s[a] - e[a]) * u;
                    o < c && (h = l, c = o)
                }
                if ((n || 1e10) < 1e10 && n < Math.sqrt(c)) return e
            } else
                for (; l--;)(o = (s = t[l]) - e) < 0 && (o = -o), o < c && s >= i && s <= r && (h = l, c = o);
            return t[h]
        },
        hu = function(e, t, r, i, n, s) {
            if ("auto" === e.end) return e;
            var o, a, u = e.end;
            if (r = isNaN(r) ? 1e10 : r, i = isNaN(i) ? -1e10 : i, iu(t)) {
                if (o = t.calculated ? t : (nu(u) ? u(t) : lu(t, u, r, i, s)) || t, !t.calculated) {
                    for (a in o) t[a] = o[a];
                    t.calculated = !0
                }
                o = o[n]
            } else o = nu(u) ? u(t) : su(u) ? lu(t, u, r, i, s) : parseFloat(u);
            return o > r ? o = r : o < i && (o = i), {
                max: o,
                min: o,
                unitFactor: e.unitFactor
            }
        },
        cu = function(e, t, r) {
            return isNaN(e[t]) ? r : +e[t]
        },
        du = function(e, t) {
            return .05 * t * e / Ja
        },
        fu = function(e, t, r) {
            return Math.abs((t - e) * Ja / r / .05)
        },
        pu = {
            resistance: 1,
            checkpoint: 1,
            preventOvershoot: 1,
            linkedProps: 1,
            radius: 1,
            duration: 1
        },
        mu = function(e, t, r, i) {
            if (t.linkedProps) {
                var n, s, o, a, u, l, h = t.linkedProps.split(","),
                    c = {};
                for (n = 0; n < h.length; n++)(o = t[s = h[n]]) && (a = ru(o.velocity) ? o.velocity : (u = u || eu(e)) && u.isTracking(s) ? u.get(s) : 0, l = Math.abs(a / cu(o, "resistance", i)), c[s] = parseFloat(r(e, s)) + du(a, l));
                return c
            }
        },
        gu = function() {
            (Va = tu()) && (Ga = Va.parseEase, Wa = Va.utils.toArray, qa = Va.utils.getUnit, Qa = Va.core.getCache, Ka = Va.utils.clamp, Xa = Ga("power3"), Ja = Xa(.05), Za = Va.core.PropTween, Va.config({
                resistance: 100,
                unitFactors: {
                    time: 1e3,
                    totalTime: 1e3,
                    progress: 1e3,
                    totalProgress: 1e3
                }
            }), Ha = Va.config(), Va.registerPlugin(ja), Ya = 1)
        },
        vu = {
            version: "3.5.1",
            name: "inertia",
            register: function(e) {
                Va = e, gu()
            },
            init: function(e, t, r, i, n) {
                Ya || gu();
                var s = eu(e);
                if ("auto" === t) {
                    if (!s) return void console.warn("No inertia tracking on " + e + ". InertiaPlugin.track(target) first.");
                    t = s.getAll()
                }
                this.target = e, this.tween = r, $a = t;
                var o, a, u, l, h, c, d, f, p, m = e._gsap,
                    g = m.get,
                    v = t.duration,
                    y = iu(v),
                    _ = t.preventOvershoot || y && 0 === v.overshoot,
                    D = cu(t, "resistance", Ha.resistance),
                    x = ru(v) ? v : function(e, t, r, i, n, s) {
                        if (void 0 === r && (r = 10), void 0 === i && (i = .2), void 0 === n && (n = 1), void 0 === s && (s = 0), "string" == typeof e && (e = Wa(e)[0]), !e) return 0;
                        var o, a, u, l, h, c, d, f, p, m, g = 0,
                            v = 1e10,
                            y = t.inertia || t,
                            _ = Qa(e).get,
                            D = cu(y, "resistance", Ha.resistance);
                        for (o in m = mu(e, y, _, D), y) pu[o] || (a = y[o], iu(a) || ((f = f || eu(e)) && f.isTracking(o) ? a = ru(a) ? {
                            velocity: a
                        } : {
                            velocity: f.get(o)
                        } : (l = +a || 0, u = Math.abs(l / D))), iu(a) && (l = ru(a.velocity) ? a.velocity : (f = f || eu(e)) && f.isTracking(o) ? f.get(o) : 0, u = Ka(i, r, Math.abs(l / cu(a, "resistance", D))), c = (h = parseFloat(_(e, o)) || 0) + du(l, u), "end" in a && (a = hu(a, m && o in m ? m : c, a.max, a.min, o, y.radius), s && ($a === t && ($a = y = uu(t)), y[o] = au(a, y[o], "end"))), "max" in a && c > +a.max + 1e-10 ? (p = a.unitFactor || Ha.unitFactors[o] || 1, (d = h > a.max && a.min !== a.max || l * p > -15 && l * p < 45 ? i + .1 * (r - i) : fu(h, a.max, l)) + n < v && (v = d + n)) : "min" in a && c < +a.min - 1e-10 && (p = a.unitFactor || Ha.unitFactors[o] || 1, (d = h < a.min && a.min !== a.max || l * p > -45 && l * p < 15 ? i + .1 * (r - i) : fu(h, a.min, l)) + n < v && (v = d + n)), d > g && (g = d)), u > g && (g = u));
                        return g > v && (g = v), g > r ? r : g < i ? i : g
                    }(e, t, y && v.max || 10, y && v.min || .2, y && "overshoot" in v ? +v.overshoot : _ ? 0 : 1, !0);
                for (o in t = $a, $a = 0, p = mu(e, t, g, D), t) pu[o] || (a = t[o], nu(a) && (a = a(i, e, n)), ru(a) ? h = a : iu(a) && !isNaN(a.velocity) ? h = +a.velocity : s && s.isTracking(o) ? h = s.get(o) : console.warn("ERROR: No velocity was defined for " + e + " property: " + o), c = du(h, x), f = 0, u = g(e, o), l = qa(u), u = parseFloat(u), iu(a) && (d = u + c, "end" in a && (a = hu(a, p && o in p ? p : d, a.max, a.min, o, t.radius)), "max" in a && +a.max < d ? _ || a.preventOvershoot ? c = a.max - u : f = a.max - u - c : "min" in a && +a.min > d && (_ || a.preventOvershoot ? c = a.min - u : f = a.min - u - c)), this._props.push(o), this._pt = new Za(this._pt, e, o, u, 0, ou, 0, m.set(e, o, this)), this._pt.u = l || 0, this._pt.c1 = c, this._pt.c2 = f);
                return r.duration(x), 1
            },
            render: function(e, t) {
                var r, i = t._pt;
                for (e = Xa(t.tween._time / t.tween._dur); i;) i.set(i.t, i.p, (r = i.s + i.c1 * e + i.c2 * e * e, Math.round(1e4 * r) / 1e4 + i.u), i.d, e), i = i._next
            }
        };
    "track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach((function(e) {
        return vu[e] = ja[e]
    })), tu() && Va.registerPlugin(vu), di.registerPlugin(Ea), di.registerPlugin(vu);
    class yu {
        constructor(e, {
            selectedID: t
        }) {
            this.nextButton = e.querySelector(".js-next"), this.prevButton = e.querySelector(".js-prev"), this.selectedIndex = null, this.selectedID = t, this.checkIfActive = this.checkIfActive.bind(this), this.onNext = this.onNext.bind(this), this.onPrev = this.onPrev.bind(this), this.onResize = this.onResize.bind(this), this.updateSnapPoints = this.updateSnapPoints.bind(this), this.slideThumbContainers = e.querySelectorAll("[data-project-id]"), this.slideContainer = e.querySelector(".project-footer-slider"), this.prevButton.addEventListener("click", this.onPrev), this.nextButton.addEventListener("click", this.onNext), this.slideThumbContainers.forEach((e, t) => {
                e.dataset.projectId === this.selectedID && (this.selectedIndex = t)
            }), this.draggable = Ea.create(this.slideContainer, {
                type: "x",
                inertia: !0,
                throwResistance: 500,
                dragResistance: .15,
                edgeResistance: .99,
                dragClickables: !0,
                zIndexBoost: !1,
                cursor: "pointer",
                onThrowComplete: () => {
                    const e = this.draggable.endX,
                        t = this.snapPoints.indexOf(e);
                    this.moveToIndex(t)
                }
            })[0], this.currentIndex = this.selectedIndex, window.addEventListener("resize", this.onResize), this.updateSnapPoints(), this.checkIfActive()
        }
        checkIfActive() {
            window.innerWidth < 1080 ? this.draggable.enable() : this.draggable.disable()
        }
        onNext() {
            this.moveToIndex(this.currentIndex + 1)
        }
        onPrev() {
            this.moveToIndex(this.currentIndex - 1)
        }
        moveToIndex(e, t = 0, r) {
            const i = this.snapPoints.length - 1,
                n = Math.min(i, Math.max(0, e));
            this.currentIndex = n, 0 === this.currentIndex ? di.to(this.prevButton, {
                autoAlpha: 0
            }) : this.currentIndex === i && di.to(this.nextButton, {
                autoAlpha: 0
            }), this.currentIndex > 0 && di.to(this.prevButton, {
                autoAlpha: 1
            }), this.currentIndex < i && di.to(this.nextButton, {
                autoAlpha: 1
            }), this.slideThumbContainers.forEach((e, t) => {
                t === this.currentIndex ? e.classList.add("cell--is-selected") : e.classList.remove("cell--is-selected")
            }), this.updateSnapPoints(), di.to(this.slideContainer, {
                duration: r ? 0 : .4,
                delay: t,
                x: this.snapPoints[n],
                ease: "Power4.easeInOut",
                onUpdate: this.draggable.update
            })
        }
        updateSnapPoints() {
            const e = [0];
            let t = 0;
            this.slideThumbContainers.forEach((r, i) => {
                const n = r.dataset.imageRatio,
                    s = i === this.currentIndex;
                let o = s ? .5 : .25;
                o = window.innerWidth < 813 ? s ? .8 : .5 : s ? .5 : .25;
                const a = o * window.innerWidth,
                    u = a / n;
                di.to(r, {
                    width: a,
                    height: u,
                    duration: .4,
                    ease: "Power4.easeInOut"
                }), t += Math.round(a + 0), e.push(-t)
            }), e.pop(), this.snapPoints = e, this.draggable.vars.snap = this.snapPoints
        }
        onResize() {
            this.updateSnapPoints(), this.currentIndex = this.selectedIndex, this.checkIfActive(), this.moveToIndex(this.selectedIndex, 1)
        }
        destroy() {
            window.removeEventListener("resize", this.onResize), this.prevButton.removeEventListener("click", this.onPrev), this.nextButton.removeEventListener("click", this.onNext), this.draggable.kill(!0)
        }
    }
    class _u extends Ms {
        constructor(e, {
            id: t,
            willUseIntroAnimation: r
        }) {
            super(e, r), this.onSizeChange = this.onSizeChange.bind(this), this.onImageMouseEnter = this.onImageMouseEnter.bind(this), this.onImageMouseLeave = this.onImageMouseLeave.bind(this), this.onProjectInfoOpenClick = this.onProjectInfoOpenClick.bind(this);
            const i = e.querySelector(".project-footer");
            this.openInformation = e.querySelector(".js-open-project-info"), this.openInformation.addEventListener("click", this.onProjectInfoOpenClick), this.mouseFollower = new Us(e.querySelector("[data-attach-to-mouse]")), this.element.querySelectorAll("[data-caption]").forEach(e => {
                e.addEventListener("mouseenter", this.onImageMouseEnter), e.addEventListener("mouseleave", this.onImageMouseLeave)
            });
            const n = e.querySelector(".project-information-overlay");
            this.overview = new zs(n), this.projectsSlider = new yu(i, {
                selectedID: t
            }), As() && (di.set(this.projectsSlider.slideThumbContainers, {
                y: 0
            }), this.projectsSlider.moveToIndex(this.projectsSlider.selectedIndex)), this.projectsSlider.moveToIndex(this.projectsSlider.selectedIndex, 0, !0)
        }
        onImageMouseEnter(e) {
            const t = e.target.dataset.caption;
            this.mouseFollower.setText(t)
        }
        onImageMouseLeave(e) {
            this.mouseFollower.setText(null)
        }
        onProjectInfoOpenClick(e) {
            e.preventDefault(), this.overview.open()
        }
        onSizeChange() {}
        destroy() {
            this.element.querySelectorAll("[data-caption]").forEach(e => {
                e.removeEventListener("mouseenter", this.onImageMouseEnter), e.removeEventListener("mouseleave", this.onImageMouseLeave)
            }), this.projectsSlider.destroy(), this.mouseFollower.destroy()
        }
    }

    function Du(e, t) {
        if (t.length < e) throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present")
    }

    function xu(e) {
        Du(1, arguments);
        var t = Object.prototype.toString.call(e);
        return e instanceof Date || "object" == typeof e && "[object Date]" === t ? new Date(e.getTime()) : "number" == typeof e || "[object Number]" === t ? new Date(e) : ("string" != typeof e && "[object String]" !== t || "undefined" == typeof console || (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"), console.warn((new Error).stack)), new Date(NaN))
    }

    function wu(e) {
        Du(1, arguments);
        var t = xu(e);
        return !isNaN(t)
    }
    var bu = {
        lessThanXSeconds: {
            one: "less than a second",
            other: "less than {{count}} seconds"
        },
        xSeconds: {
            one: "1 second",
            other: "{{count}} seconds"
        },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
            one: "less than a minute",
            other: "less than {{count}} minutes"
        },
        xMinutes: {
            one: "1 minute",
            other: "{{count}} minutes"
        },
        aboutXHours: {
            one: "about 1 hour",
            other: "about {{count}} hours"
        },
        xHours: {
            one: "1 hour",
            other: "{{count}} hours"
        },
        xDays: {
            one: "1 day",
            other: "{{count}} days"
        },
        aboutXWeeks: {
            one: "about 1 week",
            other: "about {{count}} weeks"
        },
        xWeeks: {
            one: "1 week",
            other: "{{count}} weeks"
        },
        aboutXMonths: {
            one: "about 1 month",
            other: "about {{count}} months"
        },
        xMonths: {
            one: "1 month",
            other: "{{count}} months"
        },
        aboutXYears: {
            one: "about 1 year",
            other: "about {{count}} years"
        },
        xYears: {
            one: "1 year",
            other: "{{count}} years"
        },
        overXYears: {
            one: "over 1 year",
            other: "over {{count}} years"
        },
        almostXYears: {
            one: "almost 1 year",
            other: "almost {{count}} years"
        }
    };

    function Eu(e) {
        return function(t) {
            var r = t || {},
                i = r.width ? String(r.width) : e.defaultWidth;
            return e.formats[i] || e.formats[e.defaultWidth]
        }
    }
    var Cu = {
            date: Eu({
                formats: {
                    full: "EEEE, MMMM do, y",
                    long: "MMMM do, y",
                    medium: "MMM d, y",
                    short: "MM/dd/yyyy"
                },
                defaultWidth: "full"
            }),
            time: Eu({
                formats: {
                    full: "h:mm:ss a zzzz",
                    long: "h:mm:ss a z",
                    medium: "h:mm:ss a",
                    short: "h:mm a"
                },
                defaultWidth: "full"
            }),
            dateTime: Eu({
                formats: {
                    full: "{{date}} 'at' {{time}}",
                    long: "{{date}} 'at' {{time}}",
                    medium: "{{date}}, {{time}}",
                    short: "{{date}}, {{time}}"
                },
                defaultWidth: "full"
            })
        },
        Au = {
            lastWeek: "'last' eeee 'at' p",
            yesterday: "'yesterday at' p",
            today: "'today at' p",
            tomorrow: "'tomorrow at' p",
            nextWeek: "eeee 'at' p",
            other: "P"
        };

    function Tu(e) {
        return function(t, r) {
            var i, n = r || {};
            if ("formatting" === (n.context ? String(n.context) : "standalone") && e.formattingValues) {
                var s = e.defaultFormattingWidth || e.defaultWidth,
                    o = n.width ? String(n.width) : s;
                i = e.formattingValues[o] || e.formattingValues[s]
            } else {
                var a = e.defaultWidth,
                    u = n.width ? String(n.width) : e.defaultWidth;
                i = e.values[u] || e.values[a]
            }
            return i[e.argumentCallback ? e.argumentCallback(t) : t]
        }
    }

    function Fu(e) {
        return function(t, r) {
            var i = String(t),
                n = r || {},
                s = n.width,
                o = s && e.matchPatterns[s] || e.matchPatterns[e.defaultMatchWidth],
                a = i.match(o);
            if (!a) return null;
            var u, l = a[0],
                h = s && e.parsePatterns[s] || e.parsePatterns[e.defaultParseWidth];
            return u = "[object Array]" === Object.prototype.toString.call(h) ? function(e, t) {
                for (var r = 0; r < e.length; r++)
                    if (t(e[r])) return r
            }(h, (function(e) {
                return e.test(l)
            })) : function(e, t) {
                for (var r in e)
                    if (e.hasOwnProperty(r) && t(e[r])) return r
            }(h, (function(e) {
                return e.test(l)
            })), u = e.valueCallback ? e.valueCallback(u) : u, {
                value: u = n.valueCallback ? n.valueCallback(u) : u,
                rest: i.slice(l.length)
            }
        }
    }
    var Pu, Mu = {
        code: "en-US",
        formatDistance: function(e, t, r) {
            var i;
            return r = r || {}, i = "string" == typeof bu[e] ? bu[e] : 1 === t ? bu[e].one : bu[e].other.replace("{{count}}", t), r.addSuffix ? r.comparison > 0 ? "in " + i : i + " ago" : i
        },
        formatLong: Cu,
        formatRelative: function(e, t, r, i) {
            return Au[e]
        },
        localize: {
            ordinalNumber: function(e, t) {
                var r = Number(e),
                    i = r % 100;
                if (i > 20 || i < 10) switch (i % 10) {
                    case 1:
                        return r + "st";
                    case 2:
                        return r + "nd";
                    case 3:
                        return r + "rd"
                }
                return r + "th"
            },
            era: Tu({
                values: {
                    narrow: ["B", "A"],
                    abbreviated: ["BC", "AD"],
                    wide: ["Before Christ", "Anno Domini"]
                },
                defaultWidth: "wide"
            }),
            quarter: Tu({
                values: {
                    narrow: ["1", "2", "3", "4"],
                    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
                    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
                },
                defaultWidth: "wide",
                argumentCallback: function(e) {
                    return Number(e) - 1
                }
            }),
            month: Tu({
                values: {
                    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                },
                defaultWidth: "wide"
            }),
            day: Tu({
                values: {
                    narrow: ["S", "M", "T", "W", "T", "F", "S"],
                    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                defaultWidth: "wide"
            }),
            dayPeriod: Tu({
                values: {
                    narrow: {
                        am: "a",
                        pm: "p",
                        midnight: "mi",
                        noon: "n",
                        morning: "morning",
                        afternoon: "afternoon",
                        evening: "evening",
                        night: "night"
                    },
                    abbreviated: {
                        am: "AM",
                        pm: "PM",
                        midnight: "midnight",
                        noon: "noon",
                        morning: "morning",
                        afternoon: "afternoon",
                        evening: "evening",
                        night: "night"
                    },
                    wide: {
                        am: "a.m.",
                        pm: "p.m.",
                        midnight: "midnight",
                        noon: "noon",
                        morning: "morning",
                        afternoon: "afternoon",
                        evening: "evening",
                        night: "night"
                    }
                },
                defaultWidth: "wide",
                formattingValues: {
                    narrow: {
                        am: "a",
                        pm: "p",
                        midnight: "mi",
                        noon: "n",
                        morning: "in the morning",
                        afternoon: "in the afternoon",
                        evening: "in the evening",
                        night: "at night"
                    },
                    abbreviated: {
                        am: "AM",
                        pm: "PM",
                        midnight: "midnight",
                        noon: "noon",
                        morning: "in the morning",
                        afternoon: "in the afternoon",
                        evening: "in the evening",
                        night: "at night"
                    },
                    wide: {
                        am: "a.m.",
                        pm: "p.m.",
                        midnight: "midnight",
                        noon: "noon",
                        morning: "in the morning",
                        afternoon: "in the afternoon",
                        evening: "in the evening",
                        night: "at night"
                    }
                },
                defaultFormattingWidth: "wide"
            })
        },
        match: {
            ordinalNumber: (Pu = {
                matchPattern: /^(\d+)(th|st|nd|rd)?/i,
                parsePattern: /\d+/i,
                valueCallback: function(e) {
                    return parseInt(e, 10)
                }
            }, function(e, t) {
                var r = String(e),
                    i = t || {},
                    n = r.match(Pu.matchPattern);
                if (!n) return null;
                var s = n[0],
                    o = r.match(Pu.parsePattern);
                if (!o) return null;
                var a = Pu.valueCallback ? Pu.valueCallback(o[0]) : o[0];
                return {
                    value: a = i.valueCallback ? i.valueCallback(a) : a,
                    rest: r.slice(s.length)
                }
            }),
            era: Fu({
                matchPatterns: {
                    narrow: /^(b|a)/i,
                    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
                    wide: /^(before christ|before common era|anno domini|common era)/i
                },
                defaultMatchWidth: "wide",
                parsePatterns: {
                    any: [/^b/i, /^(a|c)/i]
                },
                defaultParseWidth: "any"
            }),
            quarter: Fu({
                matchPatterns: {
                    narrow: /^[1234]/i,
                    abbreviated: /^q[1234]/i,
                    wide: /^[1234](th|st|nd|rd)? quarter/i
                },
                defaultMatchWidth: "wide",
                parsePatterns: {
                    any: [/1/i, /2/i, /3/i, /4/i]
                },
                defaultParseWidth: "any",
                valueCallback: function(e) {
                    return e + 1
                }
            }),
            month: Fu({
                matchPatterns: {
                    narrow: /^[jfmasond]/i,
                    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
                    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
                },
                defaultMatchWidth: "wide",
                parsePatterns: {
                    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
                    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
                },
                defaultParseWidth: "any"
            }),
            day: Fu({
                matchPatterns: {
                    narrow: /^[smtwf]/i,
                    short: /^(su|mo|tu|we|th|fr|sa)/i,
                    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
                    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
                },
                defaultMatchWidth: "wide",
                parsePatterns: {
                    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
                    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
                },
                defaultParseWidth: "any"
            }),
            dayPeriod: Fu({
                matchPatterns: {
                    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
                    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
                },
                defaultMatchWidth: "any",
                parsePatterns: {
                    any: {
                        am: /^a/i,
                        pm: /^p/i,
                        midnight: /^mi/i,
                        noon: /^no/i,
                        morning: /morning/i,
                        afternoon: /afternoon/i,
                        evening: /evening/i,
                        night: /night/i
                    }
                },
                defaultParseWidth: "any"
            })
        },
        options: {
            weekStartsOn: 0,
            firstWeekContainsDate: 1
        }
    };

    function Su(e) {
        if (null === e || !0 === e || !1 === e) return NaN;
        var t = Number(e);
        return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t)
    }

    function ku(e, t) {
        Du(2, arguments);
        var r = xu(e).getTime(),
            i = Su(t);
        return new Date(r + i)
    }

    function Ru(e, t) {
        Du(2, arguments);
        var r = Su(t);
        return ku(e, -r)
    }

    function Ou(e, t) {
        for (var r = e < 0 ? "-" : "", i = Math.abs(e).toString(); i.length < t;) i = "0" + i;
        return r + i
    }
    var Lu = {
        y: function(e, t) {
            var r = e.getUTCFullYear(),
                i = r > 0 ? r : 1 - r;
            return Ou("yy" === t ? i % 100 : i, t.length)
        },
        M: function(e, t) {
            var r = e.getUTCMonth();
            return "M" === t ? String(r + 1) : Ou(r + 1, 2)
        },
        d: function(e, t) {
            return Ou(e.getUTCDate(), t.length)
        },
        a: function(e, t) {
            var r = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
            switch (t) {
                case "a":
                case "aa":
                case "aaa":
                    return r.toUpperCase();
                case "aaaaa":
                    return r[0];
                case "aaaa":
                default:
                    return "am" === r ? "a.m." : "p.m."
            }
        },
        h: function(e, t) {
            return Ou(e.getUTCHours() % 12 || 12, t.length)
        },
        H: function(e, t) {
            return Ou(e.getUTCHours(), t.length)
        },
        m: function(e, t) {
            return Ou(e.getUTCMinutes(), t.length)
        },
        s: function(e, t) {
            return Ou(e.getUTCSeconds(), t.length)
        },
        S: function(e, t) {
            var r = t.length,
                i = e.getUTCMilliseconds();
            return Ou(Math.floor(i * Math.pow(10, r - 3)), t.length)
        }
    };

    function Iu(e) {
        Du(1, arguments);
        var t = 1,
            r = xu(e),
            i = r.getUTCDay(),
            n = (i < t ? 7 : 0) + i - t;
        return r.setUTCDate(r.getUTCDate() - n), r.setUTCHours(0, 0, 0, 0), r
    }

    function Bu(e) {
        Du(1, arguments);
        var t = xu(e),
            r = t.getUTCFullYear(),
            i = new Date(0);
        i.setUTCFullYear(r + 1, 0, 4), i.setUTCHours(0, 0, 0, 0);
        var n = Iu(i),
            s = new Date(0);
        s.setUTCFullYear(r, 0, 4), s.setUTCHours(0, 0, 0, 0);
        var o = Iu(s);
        return t.getTime() >= n.getTime() ? r + 1 : t.getTime() >= o.getTime() ? r : r - 1
    }

    function Nu(e) {
        Du(1, arguments);
        var t = Bu(e),
            r = new Date(0);
        r.setUTCFullYear(t, 0, 4), r.setUTCHours(0, 0, 0, 0);
        var i = Iu(r);
        return i
    }

    function Uu(e, t) {
        Du(1, arguments);
        var r = t || {},
            i = r.locale,
            n = i && i.options && i.options.weekStartsOn,
            s = null == n ? 0 : Su(n),
            o = null == r.weekStartsOn ? s : Su(r.weekStartsOn);
        if (!(o >= 0 && o <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
        var a = xu(e),
            u = a.getUTCDay(),
            l = (u < o ? 7 : 0) + u - o;
        return a.setUTCDate(a.getUTCDate() - l), a.setUTCHours(0, 0, 0, 0), a
    }

    function zu(e, t) {
        Du(1, arguments);
        var r = xu(e, t),
            i = r.getUTCFullYear(),
            n = t || {},
            s = n.locale,
            o = s && s.options && s.options.firstWeekContainsDate,
            a = null == o ? 1 : Su(o),
            u = null == n.firstWeekContainsDate ? a : Su(n.firstWeekContainsDate);
        if (!(u >= 1 && u <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
        var l = new Date(0);
        l.setUTCFullYear(i + 1, 0, u), l.setUTCHours(0, 0, 0, 0);
        var h = Uu(l, t),
            c = new Date(0);
        c.setUTCFullYear(i, 0, u), c.setUTCHours(0, 0, 0, 0);
        var d = Uu(c, t);
        return r.getTime() >= h.getTime() ? i + 1 : r.getTime() >= d.getTime() ? i : i - 1
    }

    function ju(e, t) {
        Du(1, arguments);
        var r = t || {},
            i = r.locale,
            n = i && i.options && i.options.firstWeekContainsDate,
            s = null == n ? 1 : Su(n),
            o = null == r.firstWeekContainsDate ? s : Su(r.firstWeekContainsDate),
            a = zu(e, t),
            u = new Date(0);
        u.setUTCFullYear(a, 0, o), u.setUTCHours(0, 0, 0, 0);
        var l = Uu(u, t);
        return l
    }
    var Vu = "midnight",
        Yu = "noon",
        Gu = "morning",
        Wu = "afternoon",
        Xu = "evening",
        Hu = "night";

    function qu(e, t) {
        var r = e > 0 ? "-" : "+",
            i = Math.abs(e),
            n = Math.floor(i / 60),
            s = i % 60;
        if (0 === s) return r + String(n);
        var o = t || "";
        return r + String(n) + o + Ou(s, 2)
    }

    function Zu(e, t) {
        return e % 60 == 0 ? (e > 0 ? "-" : "+") + Ou(Math.abs(e) / 60, 2) : Qu(e, t)
    }

    function Qu(e, t) {
        var r = t || "",
            i = e > 0 ? "-" : "+",
            n = Math.abs(e);
        return i + Ou(Math.floor(n / 60), 2) + r + Ou(n % 60, 2)
    }
    var Ju = {
        G: function(e, t, r) {
            var i = e.getUTCFullYear() > 0 ? 1 : 0;
            switch (t) {
                case "G":
                case "GG":
                case "GGG":
                    return r.era(i, {
                        width: "abbreviated"
                    });
                case "GGGGG":
                    return r.era(i, {
                        width: "narrow"
                    });
                case "GGGG":
                default:
                    return r.era(i, {
                        width: "wide"
                    })
            }
        },
        y: function(e, t, r) {
            if ("yo" === t) {
                var i = e.getUTCFullYear(),
                    n = i > 0 ? i : 1 - i;
                return r.ordinalNumber(n, {
                    unit: "year"
                })
            }
            return Lu.y(e, t)
        },
        Y: function(e, t, r, i) {
            var n = zu(e, i),
                s = n > 0 ? n : 1 - n;
            return "YY" === t ? Ou(s % 100, 2) : "Yo" === t ? r.ordinalNumber(s, {
                unit: "year"
            }) : Ou(s, t.length)
        },
        R: function(e, t) {
            return Ou(Bu(e), t.length)
        },
        u: function(e, t) {
            return Ou(e.getUTCFullYear(), t.length)
        },
        Q: function(e, t, r) {
            var i = Math.ceil((e.getUTCMonth() + 1) / 3);
            switch (t) {
                case "Q":
                    return String(i);
                case "QQ":
                    return Ou(i, 2);
                case "Qo":
                    return r.ordinalNumber(i, {
                        unit: "quarter"
                    });
                case "QQQ":
                    return r.quarter(i, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "QQQQQ":
                    return r.quarter(i, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "QQQQ":
                default:
                    return r.quarter(i, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        q: function(e, t, r) {
            var i = Math.ceil((e.getUTCMonth() + 1) / 3);
            switch (t) {
                case "q":
                    return String(i);
                case "qq":
                    return Ou(i, 2);
                case "qo":
                    return r.ordinalNumber(i, {
                        unit: "quarter"
                    });
                case "qqq":
                    return r.quarter(i, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "qqqqq":
                    return r.quarter(i, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "qqqq":
                default:
                    return r.quarter(i, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        M: function(e, t, r) {
            var i = e.getUTCMonth();
            switch (t) {
                case "M":
                case "MM":
                    return Lu.M(e, t);
                case "Mo":
                    return r.ordinalNumber(i + 1, {
                        unit: "month"
                    });
                case "MMM":
                    return r.month(i, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "MMMMM":
                    return r.month(i, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "MMMM":
                default:
                    return r.month(i, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        L: function(e, t, r) {
            var i = e.getUTCMonth();
            switch (t) {
                case "L":
                    return String(i + 1);
                case "LL":
                    return Ou(i + 1, 2);
                case "Lo":
                    return r.ordinalNumber(i + 1, {
                        unit: "month"
                    });
                case "LLL":
                    return r.month(i, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "LLLLL":
                    return r.month(i, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "LLLL":
                default:
                    return r.month(i, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        w: function(e, t, r, i) {
            var n = function(e, t) {
                Du(1, arguments);
                var r = xu(e),
                    i = Uu(r, t).getTime() - ju(r, t).getTime();
                return Math.round(i / 6048e5) + 1
            }(e, i);
            return "wo" === t ? r.ordinalNumber(n, {
                unit: "week"
            }) : Ou(n, t.length)
        },
        I: function(e, t, r) {
            var i = function(e) {
                Du(1, arguments);
                var t = xu(e),
                    r = Iu(t).getTime() - Nu(t).getTime();
                return Math.round(r / 6048e5) + 1
            }(e);
            return "Io" === t ? r.ordinalNumber(i, {
                unit: "week"
            }) : Ou(i, t.length)
        },
        d: function(e, t, r) {
            return "do" === t ? r.ordinalNumber(e.getUTCDate(), {
                unit: "date"
            }) : Lu.d(e, t)
        },
        D: function(e, t, r) {
            var i = function(e) {
                Du(1, arguments);
                var t = xu(e),
                    r = t.getTime();
                t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
                var i = t.getTime(),
                    n = r - i;
                return Math.floor(n / 864e5) + 1
            }(e);
            return "Do" === t ? r.ordinalNumber(i, {
                unit: "dayOfYear"
            }) : Ou(i, t.length)
        },
        E: function(e, t, r) {
            var i = e.getUTCDay();
            switch (t) {
                case "E":
                case "EE":
                case "EEE":
                    return r.day(i, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "EEEEE":
                    return r.day(i, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "EEEEEE":
                    return r.day(i, {
                        width: "short",
                        context: "formatting"
                    });
                case "EEEE":
                default:
                    return r.day(i, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        e: function(e, t, r, i) {
            var n = e.getUTCDay(),
                s = (n - i.weekStartsOn + 8) % 7 || 7;
            switch (t) {
                case "e":
                    return String(s);
                case "ee":
                    return Ou(s, 2);
                case "eo":
                    return r.ordinalNumber(s, {
                        unit: "day"
                    });
                case "eee":
                    return r.day(n, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "eeeee":
                    return r.day(n, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "eeeeee":
                    return r.day(n, {
                        width: "short",
                        context: "formatting"
                    });
                case "eeee":
                default:
                    return r.day(n, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        c: function(e, t, r, i) {
            var n = e.getUTCDay(),
                s = (n - i.weekStartsOn + 8) % 7 || 7;
            switch (t) {
                case "c":
                    return String(s);
                case "cc":
                    return Ou(s, t.length);
                case "co":
                    return r.ordinalNumber(s, {
                        unit: "day"
                    });
                case "ccc":
                    return r.day(n, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "ccccc":
                    return r.day(n, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "cccccc":
                    return r.day(n, {
                        width: "short",
                        context: "standalone"
                    });
                case "cccc":
                default:
                    return r.day(n, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        i: function(e, t, r) {
            var i = e.getUTCDay(),
                n = 0 === i ? 7 : i;
            switch (t) {
                case "i":
                    return String(n);
                case "ii":
                    return Ou(n, t.length);
                case "io":
                    return r.ordinalNumber(n, {
                        unit: "day"
                    });
                case "iii":
                    return r.day(i, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "iiiii":
                    return r.day(i, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "iiiiii":
                    return r.day(i, {
                        width: "short",
                        context: "formatting"
                    });
                case "iiii":
                default:
                    return r.day(i, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        a: function(e, t, r) {
            var i = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
            switch (t) {
                case "a":
                case "aa":
                case "aaa":
                    return r.dayPeriod(i, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "aaaaa":
                    return r.dayPeriod(i, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "aaaa":
                default:
                    return r.dayPeriod(i, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        b: function(e, t, r) {
            var i, n = e.getUTCHours();
            switch (i = 12 === n ? Yu : 0 === n ? Vu : n / 12 >= 1 ? "pm" : "am", t) {
                case "b":
                case "bb":
                case "bbb":
                    return r.dayPeriod(i, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "bbbbb":
                    return r.dayPeriod(i, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "bbbb":
                default:
                    return r.dayPeriod(i, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        B: function(e, t, r) {
            var i, n = e.getUTCHours();
            switch (i = n >= 17 ? Xu : n >= 12 ? Wu : n >= 4 ? Gu : Hu, t) {
                case "B":
                case "BB":
                case "BBB":
                    return r.dayPeriod(i, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "BBBBB":
                    return r.dayPeriod(i, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "BBBB":
                default:
                    return r.dayPeriod(i, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        h: function(e, t, r) {
            if ("ho" === t) {
                var i = e.getUTCHours() % 12;
                return 0 === i && (i = 12), r.ordinalNumber(i, {
                    unit: "hour"
                })
            }
            return Lu.h(e, t)
        },
        H: function(e, t, r) {
            return "Ho" === t ? r.ordinalNumber(e.getUTCHours(), {
                unit: "hour"
            }) : Lu.H(e, t)
        },
        K: function(e, t, r) {
            var i = e.getUTCHours() % 12;
            return "Ko" === t ? r.ordinalNumber(i, {
                unit: "hour"
            }) : Ou(i, t.length)
        },
        k: function(e, t, r) {
            var i = e.getUTCHours();
            return 0 === i && (i = 24), "ko" === t ? r.ordinalNumber(i, {
                unit: "hour"
            }) : Ou(i, t.length)
        },
        m: function(e, t, r) {
            return "mo" === t ? r.ordinalNumber(e.getUTCMinutes(), {
                unit: "minute"
            }) : Lu.m(e, t)
        },
        s: function(e, t, r) {
            return "so" === t ? r.ordinalNumber(e.getUTCSeconds(), {
                unit: "second"
            }) : Lu.s(e, t)
        },
        S: function(e, t) {
            return Lu.S(e, t)
        },
        X: function(e, t, r, i) {
            var n = (i._originalDate || e).getTimezoneOffset();
            if (0 === n) return "Z";
            switch (t) {
                case "X":
                    return Zu(n);
                case "XXXX":
                case "XX":
                    return Qu(n);
                case "XXXXX":
                case "XXX":
                default:
                    return Qu(n, ":")
            }
        },
        x: function(e, t, r, i) {
            var n = (i._originalDate || e).getTimezoneOffset();
            switch (t) {
                case "x":
                    return Zu(n);
                case "xxxx":
                case "xx":
                    return Qu(n);
                case "xxxxx":
                case "xxx":
                default:
                    return Qu(n, ":")
            }
        },
        O: function(e, t, r, i) {
            var n = (i._originalDate || e).getTimezoneOffset();
            switch (t) {
                case "O":
                case "OO":
                case "OOO":
                    return "GMT" + qu(n, ":");
                case "OOOO":
                default:
                    return "GMT" + Qu(n, ":")
            }
        },
        z: function(e, t, r, i) {
            var n = (i._originalDate || e).getTimezoneOffset();
            switch (t) {
                case "z":
                case "zz":
                case "zzz":
                    return "GMT" + qu(n, ":");
                case "zzzz":
                default:
                    return "GMT" + Qu(n, ":")
            }
        },
        t: function(e, t, r, i) {
            var n = i._originalDate || e;
            return Ou(Math.floor(n.getTime() / 1e3), t.length)
        },
        T: function(e, t, r, i) {
            return Ou((i._originalDate || e).getTime(), t.length)
        }
    };

    function Ku(e, t) {
        switch (e) {
            case "P":
                return t.date({
                    width: "short"
                });
            case "PP":
                return t.date({
                    width: "medium"
                });
            case "PPP":
                return t.date({
                    width: "long"
                });
            case "PPPP":
            default:
                return t.date({
                    width: "full"
                })
        }
    }

    function $u(e, t) {
        switch (e) {
            case "p":
                return t.time({
                    width: "short"
                });
            case "pp":
                return t.time({
                    width: "medium"
                });
            case "ppp":
                return t.time({
                    width: "long"
                });
            case "pppp":
            default:
                return t.time({
                    width: "full"
                })
        }
    }
    var el = {
        p: $u,
        P: function(e, t) {
            var r, i = e.match(/(P+)(p+)?/),
                n = i[1],
                s = i[2];
            if (!s) return Ku(e, t);
            switch (n) {
                case "P":
                    r = t.dateTime({
                        width: "short"
                    });
                    break;
                case "PP":
                    r = t.dateTime({
                        width: "medium"
                    });
                    break;
                case "PPP":
                    r = t.dateTime({
                        width: "long"
                    });
                    break;
                case "PPPP":
                default:
                    r = t.dateTime({
                        width: "full"
                    })
            }
            return r.replace("{{date}}", Ku(n, t)).replace("{{time}}", $u(s, t))
        }
    };

    function tl(e) {
        return e.getTime() % 6e4
    }

    function rl(e) {
        var t = new Date(e.getTime()),
            r = Math.ceil(t.getTimezoneOffset());
        return t.setSeconds(0, 0), 6e4 * r + (r > 0 ? (6e4 + tl(t)) % 6e4 : tl(t))
    }
    var il = ["D", "DD"],
        nl = ["YY", "YYYY"];

    function sl(e) {
        return -1 !== il.indexOf(e)
    }

    function ol(e) {
        return -1 !== nl.indexOf(e)
    }

    function al(e, t, r) {
        if ("YYYY" === e) throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(r, "`; see: https://git.io/fxCyr"));
        if ("YY" === e) throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(r, "`; see: https://git.io/fxCyr"));
        if ("D" === e) throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(r, "`; see: https://git.io/fxCyr"));
        if ("DD" === e) throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(r, "`; see: https://git.io/fxCyr"))
    }
    var ul = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        ll = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        hl = /^'([^]*?)'?$/,
        cl = /''/g,
        dl = /[a-zA-Z]/;

    function fl(e) {
        return e.match(hl)[1].replace(cl, "'")
    }
    di.registerPlugin(Ns);
    const pl = ["Sharpening the pencil", "Are you comfortable?", "Pacing in circles", "Putting paper in the printer", "Durasealing the journal", "Never going to give you up", "It’s not you, it’s me", "Tightening our belt", "Tying our shoelaces", "Plucking our eyebrows", "Plotting and scheming", "Procrastinating", "Cracking our knuckles", "Stretching out", "Putting on something a little more comfortable", "Pacing in circles", "Getting lost in your eyes", "Looking off into the distance", "Reading the room", "Lying about our age since 1895", "Living the dream", "Considering alternative plans", "Never going to give you up", "Sketching out the blueprint", "Putting pencil to paper", "Pencil to paper and beyond", "Rolling up our sleeves", "Rolling our sleeves up", "Drafting up the plan", "Stretching the canvas", "Tightening up the bolts", "Joining the dots"];
    class ml {
        constructor(e, t, r) {
            this.container = e, this.onComplete = r, this.greeting = this.greeting.bind(this), this.colorBlock = this.container.querySelector(".preloader-block"), di.set(this.colorBlock, {
                background: t,
                scaleX: 0,
                scaleY: 0
            })
        }
        getRandomSentences(e) {
            const t = gi()(pl),
                r = [];
            for (let i = 0; i < e; i++) r.push(t[i]);
            return r
        }
        greeting() {
            let e = function(e, t, r) {
                Du(2, arguments);
                var i = String(t),
                    n = r || {},
                    s = n.locale || Mu,
                    o = s.options && s.options.firstWeekContainsDate,
                    a = null == o ? 1 : Su(o),
                    u = null == n.firstWeekContainsDate ? a : Su(n.firstWeekContainsDate);
                if (!(u >= 1 && u <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
                var l = s.options && s.options.weekStartsOn,
                    h = null == l ? 0 : Su(l),
                    c = null == n.weekStartsOn ? h : Su(n.weekStartsOn);
                if (!(c >= 0 && c <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
                if (!s.localize) throw new RangeError("locale must contain localize property");
                if (!s.formatLong) throw new RangeError("locale must contain formatLong property");
                var d = xu(e);
                if (!wu(d)) throw new RangeError("Invalid time value");
                var f = rl(d),
                    p = Ru(d, f),
                    m = {
                        firstWeekContainsDate: u,
                        weekStartsOn: c,
                        locale: s,
                        _originalDate: d
                    },
                    g = i.match(ll).map((function(e) {
                        var t = e[0];
                        return "p" === t || "P" === t ? (0, el[t])(e, s.formatLong, m) : e
                    })).join("").match(ul).map((function(r) {
                        if ("''" === r) return "'";
                        var i = r[0];
                        if ("'" === i) return fl(r);
                        var o = Ju[i];
                        if (o) return !n.useAdditionalWeekYearTokens && ol(r) && al(r, t, e), !n.useAdditionalDayOfYearTokens && sl(r) && al(r, t, e), o(p, r, s.localize, m);
                        if (i.match(dl)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + i + "`");
                        return r
                    })).join("");
                return g
            }(new Date, "BBBB").replace("in the ", "");
            e = e.replace("at ", "");
            return "Good " + (e.charAt(0).toUpperCase() + e.slice(1))
        }
        hide() {
            di.set(this.container, {
                autoAlpha: 0,
                display: "none",
                onComplete: () => {
                    this.onComplete()
                }
            })
        }
        show() {
            const e = this.container.querySelector(".preloader-words"),
                t = this.getRandomSentences(2),
                r = di.timeline(),
                i = (window.innerWidth, window.innerHeight, [this.greeting(), ...t]);
            for (let t = 0; t < i.length; t++) {
                const n = i[t];
                r.add(di.to(e, {
                    delay: .75,
                    text: {
                        value: n,
                        ease: "none",
                        delimiter: " ",
                        type: "diff"
                    }
                }))
            }
            r.duration();
            r.add(di.to(this.colorBlock, {
                scaleX: 1,
                scaleY: 1,
                delay: 5,
                duration: .5,
                ease: "Power4.easeInOut",
                transformOrigin: "center",
                onComplete: () => {
                    this.hide()
                }
            }), 0)
        }
    }
    var gl = r(4);
    di.set("#video-player", {
        y: "100%"
    });
    let vl = null;
    const yl = (e, t, r, i) => {
        const n = document.getElementById("video-player"),
            s = document.getElementById("video-player--wrap"),
            o = document.getElementById("video-player-heading"),
            a = document.querySelector(".js-video-play-state-toggle"),
            u = document.getElementById("js-video-player-close");
        let l;
        var h = {
                id: e,
                playsinline: !0,
                byline: !1,
                controls: !1,
                autoplay: !1,
                quality: "720p"
            },
            c = new gl.a(s, h);
        const d = document.querySelector(".video-player__progress-container");
        let f = !1;
        const p = document.querySelector(".video-player__progress"),
            m = () => {
                di.to([a, p], {
                    autoAlpha: 0
                })
            },
            g = e => {
                l && l.kill(), di.to([a, p], {
                    autoAlpha: 1
                }), f && (l = di.delayedCall(1, m))
            },
            v = e => {
                di.set(p, {
                    scaleX: e,
                    transformOrigin: "top left"
                })
            },
            y = e => {
                f = e, e ? (di.to([o], {
                    autoAlpha: 0,
                    duration: .4,
                    delay: 1,
                    ease: "expo.inOut"
                }), a.classList.add("button--pause"), a.classList.remove("button--play"), c.play()) : (di.to([o], {
                    autoAlpha: 1,
                    duration: .4,
                    ease: "expo.inOut"
                }), a.classList.remove("button--pause"), a.classList.add("button--play"), c.pause()), g()
            },
            _ = () => {
                y(!f)
            },
            D = e => {},
            x = e => {
                var t;
                t = e.clientX / window.innerWidth, c.getDuration().then((function(e) {
                    c.setCurrentTime(e * t)
                })).catch((function(e) {})), document.removeEventListener("mouseup", x), document.removeEventListener("mousemove", w), y(!0)
            },
            w = e => {
                v(e.clientX / window.innerWidth)
            },
            b = () => {
                document.documentElement.classList.remove("body-overflow"), A(), C.to([o], {
                    alpha: 0,
                    duration: .15,
                    ease: "expo.inOut"
                }, "-=0.15").to([n], {
                    y: "100%",
                    duration: .8,
                    ease: "expo.inOut",
                    onComplete: () => {
                        di.set(n, {
                            y: "100%",
                            transformOrigin: "center center"
                        }), di.set(s, {
                            alpha: 0
                        }), di.set(o, {
                            alpha: 0
                        }), c.destroy();
                        document.querySelector("[data-poster='{videoSlug}']")
                    }
                })
            },
            E = e => {
                27 === e.keyCode && b()
            };
        document.documentElement.classList.add("body-overflow"), c.on("timeupdate", ({
            duration: e,
            percent: t,
            seconds: r
        }) => {
            v(t)
        }), c.on("play", () => {
            y(!0)
        }), c.on("pause", () => {
            y(!1)
        }), document.getElementById("video-player-hit-area").addEventListener("click", _), a.addEventListener("click", _), document.addEventListener("mousemove", g), document.addEventListener("keydown", E), d.addEventListener("mousedown", e => {
            document.addEventListener("mouseup", x), document.addEventListener("mousemove", w), y(!1)
        }), d.removeEventListener("click", D), v(0), y(!1);
        var C = di.timeline();
        document.getElementById("video-player-heading").innerHTML = r, C.to([n], {
            y: 0,
            transformOrigin: "center center",
            duration: .8,
            ease: "expo.inOut",
            display: "block",
            onComplete: () => {}
        }), c.ready().then((function() {
            C.to([s], {
                alpha: 1,
                duration: .4
            }).to([o], {
                alpha: 1,
                duration: .15,
                ease: "expo.inOut"
            })
        }));
        const A = (e = !1) => {
            vl = null, u.removeEventListener("click", b), i || window.history.replaceState(null, null, "?overview"), document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", x), document.removeEventListener("keydown", E), document.getElementById("video-player-hit-area").removeEventListener("click", _), a.removeEventListener("click", _), d.removeEventListener("click", D), l && l.kill(), l = null, c.off("timeupdate"), c.off("play"), c.off("pause"), e && c.destroy().then((function() {})).catch((function(e) {}))
        };
        return u.addEventListener("click", b), {
            player: c,
            destroy: A
        }
    };
    let _l = [];
    di.registerPlugin(us);
    class Dl extends Ms {
        constructor(e, {
            willUseIntroAnimation: t
        }) {
            super(e, t), this.onMouseEnter = this.onMouseEnter.bind(this), this.onMouseLeave = this.onMouseLeave.bind(this), this.mouseFollower = new Us(e.querySelector("[data-attach-to-mouse]")), this.links = e.querySelectorAll("[data-post-image]"), this.links.forEach(e => {
                e.addEventListener("mouseenter", this.onMouseEnter), e.addEventListener("mouseleave", this.onMouseLeave)
            })
        }
        onMouseLeave(e) {
            this.mouseFollower.setImage(null)
        }
        onMouseEnter(e) {
            const t = e.target.dataset.postImage;
            this.mouseFollower.setImage(t)
        }
        destroy() {
            this.mouseFollower.destroy(), this.links.forEach(e => {
                e.removeEventListener("mouseenter", this.onMouseEnter), e.removeEventListener("mouseleave", this.onMouseLeave)
            })
        }
    }
    class xl {
        constructor(e, {
            amountOpen: t,
            cssVar: r
        }) {
            this.map = {}, this.cssVar = r || "--awards-height", this.onItemToggle = this.onItemToggle.bind(this), this.hitAreas = e.querySelectorAll("[data-hit-area]"), this.hitAreas.forEach((e, r) => {
                e.addEventListener("click", this.onItemToggle), this.map[e.dataset.optionId] = {
                    el: e,
                    open: !1,
                    items: e.querySelectorAll(".accordion__item")
                }, r < t && this.open(e.dataset.optionId)
            }), [...e.getElementsByTagName("a")].forEach(e => {
                e.addEventListener("click", e => {
                    e.stopPropagation()
                })
            })
        }
        onItemToggle(e) {
            const t = e.currentTarget.dataset.optionId;
            !this.map[t].open ? this.open(t) : this.close(t)
        }
        open(e) {
            const t = this.map[e].el;
            this.map[e].open = !0, t.classList.add("accordion__item--is-open");
            const r = this.map[e].items;
            let i = 0;
            r.forEach(e => {
                e.classList.add("accordion__sub-item--is-open"), i += e.scrollHeight
            });
            const n = parseFloat(window.getComputedStyle(t, null).getPropertyValue("padding-top")),
                s = parseFloat(window.getComputedStyle(t, null).getPropertyValue("padding-bottom"));
            t.style.maxHeight = n + s + i + 24 + "px"
        }
        close(e) {
            const t = this.map[e].el;
            this.map[e].open = !1, t.classList.remove("accordion__item--is-open");
            this.map[e].items.forEach(e => {
                e.classList.remove("accordion__sub-item--is-open")
            });
            const r = getComputedStyle(document.documentElement).getPropertyValue(this.cssVar);
            t.style.maxHeight = r
        }
        destroy() {
            this.hitAreas.forEach((e, t) => {
                e.removeEventListener("click", this.onItemToggle)
            }), this.map = null
        }
    }
    class wl extends Ms {
        constructor(e, {
            willUseIntroAnimation: t
        }) {
            super(e, t), this.accordionAwards = new xl(e.querySelector(".studio-awards"), {
                amountOpen: 0,
                cssVar: "--awards-height"
            }), this.accordionPeople = new xl(e.querySelector(".studio-people"), {
                amountOpen: 0,
                cssVar: "--awards-height"
            }), fetch("//api.openweathermap.org/data/2.5/weather?q=Auckland,nz&appid=6b01f3811cb7773f8b2df0b4fb409d56&units=metric").then(e => e.json()).then(t => {
                const {
                    main: r,
                    weather: i
                } = t, n = i[0].description, s = `Feels like ${Math.round(r.feels_like)}°C. ${o = n, o.charAt(0).toUpperCase() + o.slice(1)}`;
                var o;
                e.querySelector("[data-weather]").innerHTML = s
            }), this.onMouseEnter = this.onMouseEnter.bind(this), this.onMouseLeave = this.onMouseLeave.bind(this), this.mouseFollower = new Us(e.querySelector("[data-attach-to-mouse]")), this.links = e.querySelectorAll("[data-person-image]"), this.links.forEach(e => {
                e.addEventListener("mouseenter", this.onMouseEnter), e.addEventListener("mouseleave", this.onMouseLeave)
            })
        }
        onMouseLeave(e) {
            this.mouseFollower.setImage(null)
        }
        onMouseEnter(e) {
            const t = e.target.dataset.personImage;
            this.mouseFollower.setImage(t)
        }
        destroy() {
            this.accordionAwards.destroy(), this.accordionPeople.destroy()
        }
    }
    di.registerPlugin(us);
    class bl extends Ms {
        constructor(e, {
            willUseIntroAnimation: t
        }) {
            super(e, t), this.onMouseEnter = this.onMouseEnter.bind(this), this.onMouseLeave = this.onMouseLeave.bind(this), this.image = e.querySelector("[data-roll-over-image]"), this.links = e.querySelectorAll("[data-post-image]"), this.links.forEach(e => {
                e.addEventListener("mouseenter", this.onMouseEnter), e.addEventListener("mouseleave", this.onMouseLeave)
            }), this.currentSelected = e.querySelector("[data-is-current-entry]"), this.currentSelected.classList.add("is-active"), this.currentImage = this.currentSelected.dataset.postImage, this.image.src = this.currentImage
        }
        onMouseLeave(e) {
            di.killTweensOf(this.image), di.to(this.image, {
                autoAlpha: 0,
                y: 0,
                delay: 0,
                duration: 0
            }), this.currentSelected.classList.remove("is-active")
        }
        onMouseEnter(e) {
            di.getProperty(this.image, "autoAlpha");
            di.killTweensOf(this.image);
            const t = e.target.dataset.postImage;
            di.to(this.image, {
                autoAlpha: 0,
                duration: 0,
                onComplete: () => {
                    this.image.src = t, di.set(this.image, {
                        y: 0
                    }), di.to(this.image, {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0
                    })
                }
            })
        }
        destroy() {
            this.links.forEach(e => {
                e.removeEventListener("mouseenter", this.onMouseEnter), e.removeEventListener("mouseleave", this.onMouseLeave)
            })
        }
    }
    let El = 0;

    function Cl() {
        if (!(El > 100)) {
            if (100 === El) console.warn("Curtains: too many warnings thrown, stop logging.");
            else {
                const e = Array.prototype.slice.call(arguments);
                console.warn.apply(console, e)
            }
            El++
        }
    }

    function Al() {
        const e = Array.prototype.slice.call(arguments);
        console.error.apply(console, e)
    }

    function Tl() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, e => {
            let t = 16 * Math.random() | 0;
            return ("x" === e ? t : 3 & t | 8).toString(16).toUpperCase()
        })
    }

    function Fl(e) {
        return 0 == (e & e - 1)
    }
    class Pl {
        constructor(e) {
            this.type = "Scene", e && "Renderer" === e.type ? e.gl || Al(this.type + ": Renderer WebGL context is undefined", e) : Al(this.type + ": Renderer not passed as first argument", e), this.renderer = e, this.gl = e.gl, this.initStacks()
        }
        initStacks() {
            this.stacks = {
                pingPong: [],
                renderTargets: [],
                opaque: [],
                transparent: [],
                renderPasses: [],
                scenePasses: []
            }
        }
        resetPlaneStacks() {
            this.stacks.pingPong = [], this.stacks.renderTargets = [], this.stacks.opaque = [], this.stacks.transparent = [];
            for (let e = 0; e < this.renderer.planes.length; e++) this.addPlane(this.renderer.planes[e])
        }
        resetShaderPassStacks() {
            this.stacks.scenePasses = [], this.stacks.renderPasses = [];
            for (let e = 0; e < this.renderer.shaderPasses.length; e++) this.renderer.shaderPasses[e].index = e, this.renderer.shaderPasses[e]._isScenePass ? this.stacks.scenePasses.push(this.renderer.shaderPasses[e]) : this.stacks.renderPasses.push(this.renderer.shaderPasses[e]);
            0 === this.stacks.scenePasses.length && (this.renderer.state.scenePassIndex = null)
        }
        addToRenderTargetsStack(e) {
            const t = this.renderer.planes.filter(t => "PingPongPlane" !== t.type && t.target && t.uuid !== e.uuid);
            let r = -1;
            if (e.target._depth) {
                for (let i = t.length - 1; i >= 0; i--)
                    if (t[i].target.uuid === e.target.uuid) {
                        r = i + 1;
                        break
                    }
            } else r = t.findIndex(t => t.target.uuid === e.target.uuid);
            r = Math.max(0, r), t.splice(r, 0, e), e.target._depth ? (t.sort((e, t) => e.index - t.index), t.sort((e, t) => t.renderOrder - e.renderOrder)) : (t.sort((e, t) => t.index - e.index), t.sort((e, t) => e.renderOrder - t.renderOrder)), t.sort((e, t) => e.target.index - t.target.index), this.stacks.renderTargets = t
        }
        addToRegularPlaneStack(e) {
            const t = this.renderer.planes.filter(t => "PingPongPlane" !== t.type && !t.target && t._transparent === e._transparent && t.uuid !== e.uuid);
            let r = -1;
            if (e.shareProgram) {
                for (let i = t.length - 1; i >= 0; i--)
                    if (t[i]._program.id === e._program.id) {
                        r = i + 1;
                        break
                    }
            } else
                for (let i = t.length - 1; i >= 0; i--)
                    if (t[i]._geometry.definition.id === e._geometry.definition.id) {
                        r = i + 1;
                        break
                    } return r = Math.max(0, r), t.splice(r, 0, e), t.sort((e, t) => e.index - t.index), e.shareProgram && t.sort((e, t) => e._program.id - t._program.id), t
        }
        addPlane(e) {
            if ("PingPongPlane" === e.type) this.stacks.pingPong.push(e);
            else if (e.target) this.addToRenderTargetsStack(e);
            else if (e._transparent) {
                const t = this.addToRegularPlaneStack(e);
                t.sort((e, t) => t.relativeTranslation.z - e.relativeTranslation.z), t.sort((e, t) => t.renderOrder - e.renderOrder), this.stacks.transparent = t
            } else {
                const t = this.addToRegularPlaneStack(e);
                t.sort((e, t) => t.renderOrder - e.renderOrder), this.stacks.opaque = t
            }
        }
        removePlane(e) {
            "PingPongPlane" === e.type ? this.stacks.pingPong = this.stacks.pingPong.filter(t => t.uuid !== e.uuid) : e.target ? this.stacks.renderTargets = this.stacks.renderTargets.filter(t => t.uuid !== e.uuid) : e._transparent ? this.stacks.transparent = this.stacks.transparent.filter(t => t.uuid !== e.uuid) : this.stacks.opaque = this.stacks.opaque.filter(t => t.uuid !== e.uuid)
        }
        setPlaneRenderOrder(e) {
            if ("ShaderPass" === e.type) this.sortShaderPassStack(e._isScenePass ? this.stacks.scenePasses : this.stacks.renderPasses);
            else if ("PingPongPlane" === e.type) return;
            if (e.target) e.target._depth ? (this.stacks.renderTargets.sort((e, t) => e.index - t.index), this.stacks.renderTargets.sort((e, t) => t.renderOrder - e.renderOrder)) : (this.stacks.renderTargets.sort((e, t) => t.index - e.index), this.stacks.renderTargets.sort((e, t) => e.renderOrder - t.renderOrder)), this.stacks.renderTargets.sort((e, t) => e.target.index - t.target.index);
            else {
                const t = e._transparent ? this.stacks.transparent : this.stacks.opaque,
                    r = this.stacks.scenePasses.find((e, t) => e._isScenePass && !e._depth && 0 === t);
                !this.renderer.depth || r ? (t.sort((e, t) => t.index - e.index), e._transparent && t.sort((e, t) => e.relativeTranslation.z - t.relativeTranslation.z), t.sort((e, t) => e.renderOrder - t.renderOrder)) : (t.sort((e, t) => e.index - t.index), e._transparent && t.sort((e, t) => t.relativeTranslation.z - e.relativeTranslation.z), t.sort((e, t) => t.renderOrder - e.renderOrder))
            }
        }
        addShaderPass(e) {
            e._isScenePass ? (this.stacks.scenePasses.push(e), this.sortShaderPassStack(this.stacks.scenePasses)) : (this.stacks.renderPasses.push(e), this.sortShaderPassStack(this.stacks.renderPasses))
        }
        removeShaderPass(e) {
            this.resetShaderPassStacks()
        }
        sortShaderPassStack(e) {
            e.sort((e, t) => e.index - t.index), e.sort((e, t) => e.renderOrder - t.renderOrder)
        }
        enableShaderPass() {
            this.stacks.scenePasses.length && 0 === this.stacks.renderPasses.length && this.renderer.planes.length && (this.renderer.state.scenePassIndex = 0, this.renderer.bindFrameBuffer(this.stacks.scenePasses[0].target))
        }
        drawRenderPasses() {
            this.stacks.scenePasses.length && this.stacks.renderPasses.length && this.renderer.planes.length && (this.renderer.state.scenePassIndex = 0, this.renderer.bindFrameBuffer(this.stacks.scenePasses[0].target));
            for (let e = 0; e < this.stacks.renderPasses.length; e++) this.stacks.renderPasses[e]._startDrawing(), this.renderer.clearDepth()
        }
        drawScenePasses() {
            for (let e = 0; e < this.stacks.scenePasses.length; e++) this.stacks.scenePasses[e]._startDrawing()
        }
        drawPingPongStack() {
            for (let e = 0; e < this.stacks.pingPong.length; e++) {
                const t = this.stacks.pingPong[e];
                t && t._startDrawing()
            }
        }
        drawStack(e) {
            for (let t = 0; t < this.stacks[e].length; t++) {
                const r = this.stacks[e][t];
                r && r._startDrawing()
            }
        }
        draw() {
            this.drawPingPongStack(), this.enableShaderPass(), this.drawStack("renderTargets"), this.drawRenderPasses(), this.drawStack("transparent"), this.drawStack("opaque"), this.drawScenePasses()
        }
    }
    class Ml {
        constructor() {
            this.geometries = [], this.clear()
        }
        clear() {
            this.textures = [], this.programs = []
        }
        getGeometryFromID(e) {
            return this.geometries.find(t => t.id === e)
        }
        addGeometry(e, t, r) {
            this.geometries.push({
                id: e,
                vertices: t,
                uvs: r
            })
        }
        isSameShader(e, t) {
            return 0 === e.localeCompare(t)
        }
        getProgramFromShaders(e, t) {
            return this.programs.find(r => this.isSameShader(r.vsCode, e) && this.isSameShader(r.fsCode, t))
        }
        addProgram(e) {
            this.programs.push(e)
        }
        getTextureFromSource(e) {
            return this.textures.find(t => t.source && t.source.src === e.src && t.uuid != t.uuid)
        }
        addTexture(e) {
            this.getTextureFromSource(e.source) || this.textures.push(e)
        }
        removeTexture(e) {
            this.textures = this.textures.filter(t => t.uuid !== e.uuid)
        }
    }
    class Sl {
        constructor() {
            this.clear()
        }
        clear() {
            this.queue = []
        }
        add(e, t = !1) {
            const r = {
                callback: e,
                keep: t,
                timeout: null
            };
            return r.timeout = setTimeout(() => {
                this.queue.push(r)
            }, 0), r
        }
        execute() {
            this.queue.map(e => {
                e.callback && e.callback(), clearTimeout(this.queue.timeout)
            }), this.queue = this.queue.filter(e => e.keep)
        }
    }
    class kl {
        constructor({
            alpha: e,
            antialias: t,
            premultipliedAlpha: r,
            depth: i,
            failIfMajorPerformanceCaveat: n,
            preserveDrawingBuffer: s,
            stencil: o,
            container: a,
            pixelRatio: u,
            renderingScale: l,
            production: h,
            onError: c,
            onContextLost: d,
            onContextRestored: f,
            onDisposed: p,
            onSceneChange: m
        }) {
            this.type = "Renderer", this.alpha = e, this.antialias = t, this.premultipliedAlpha = r, this.depth = i, this.failIfMajorPerformanceCaveat = n, this.preserveDrawingBuffer = s, this.stencil = o, this.container = a, this.pixelRatio = u, this._renderingScale = l, this.production = h, this.onError = c, this.onContextLost = d, this.onContextRestored = f, this.onDisposed = p, this.onSceneChange = m, this.initState(), this.canvas = document.createElement("canvas");
            const g = {
                alpha: this.alpha,
                premultipliedAlpha: this.premultipliedAlpha,
                antialias: this.antialias,
                depth: this.depth,
                failIfMajorPerformanceCaveat: this.failIfMajorPerformanceCaveat,
                preserveDrawingBuffer: this.preserveDrawingBuffer,
                stencil: this.stencil
            };
            if (this.gl = this.canvas.getContext("webgl2", g), this._isWebGL2 = !!this.gl, this.gl || (this.gl = this.canvas.getContext("webgl", g) || this.canvas.getContext("experimental-webgl", g)), !this.gl) return this.production || Cl(this.type + ": WebGL context could not be created"), this.state.isActive = !1, void(this.onError && this.onError());
            this.initRenderer()
        }
        initState() {
            this.state = {
                isActive: !0,
                isContextLost: !0,
                drawingEnabled: !0,
                forceRender: !1,
                currentProgramID: null,
                currentGeometryID: null,
                forceBufferUpdate: !1,
                setDepth: null,
                cullFace: null,
                frameBufferID: null,
                scenePassIndex: null,
                activeTexture: null,
                unpackAlignment: null,
                flipY: null,
                premultiplyAlpha: null
            }
        }
        initCallbackQueueManager() {
            this.nextRender = new Sl
        }
        initRenderer() {
            this.planes = [], this.renderTargets = [], this.shaderPasses = [], this.state.isContextLost = !1, this.initCallbackQueueManager(), this.setBlendFunc(), this.setDepth(!0), this.cache = new Ml, this.scene = new Pl(this), this.getExtensions(), this._contextLostHandler = this.contextLost.bind(this), this.canvas.addEventListener("webglcontextlost", this._contextLostHandler, !1), this._contextRestoredHandler = this.contextRestored.bind(this), this.canvas.addEventListener("webglcontextrestored", this._contextRestoredHandler, !1)
        }
        getExtensions() {
            this.extensions = [], this._isWebGL2 ? (this.extensions.EXT_color_buffer_float = this.gl.getExtension("EXT_color_buffer_float"), this.extensions.OES_texture_float_linear = this.gl.getExtension("OES_texture_float_linear"), this.extensions.EXT_texture_filter_anisotropic = this.gl.getExtension("EXT_texture_filter_anisotropic"), this.extensions.WEBGL_lose_context = this.gl.getExtension("WEBGL_lose_context")) : (this.extensions.OES_vertex_array_object = this.gl.getExtension("OES_vertex_array_object"), this.extensions.OES_texture_float = this.gl.getExtension("OES_texture_float"), this.extensions.OES_texture_float_linear = this.gl.getExtension("OES_texture_float_linear"), this.extensions.OES_texture_half_float = this.gl.getExtension("OES_texture_half_float"), this.extensions.OES_texture_half_float_linear = this.gl.getExtension("OES_texture_half_float_linear"), this.extensions.EXT_texture_filter_anisotropic = this.gl.getExtension("EXT_texture_filter_anisotropic"), this.extensions.OES_element_index_uint = this.gl.getExtension("OES_element_index_uint"), this.extensions.OES_standard_derivatives = this.gl.getExtension("OES_standard_derivatives"), this.extensions.EXT_sRGB = this.gl.getExtension("EXT_sRGB"), this.extensions.WEBGL_depth_texture = this.gl.getExtension("WEBGL_depth_texture"), this.extensions.WEBGL_draw_buffers = this.gl.getExtension("WEBGL_draw_buffers"), this.extensions.WEBGL_lose_context = this.gl.getExtension("WEBGL_lose_context"))
        }
        contextLost(e) {
            this.state.isContextLost = !0, this.state.isActive && (e.preventDefault(), this.nextRender.add(() => this.onContextLost && this.onContextLost()))
        }
        restoreContext() {
            this.state.isActive && (this.initState(), this.gl && this.extensions.WEBGL_lose_context ? this.extensions.WEBGL_lose_context.restoreContext() : (this.gl || this.production ? this.extensions.WEBGL_lose_context || this.production || Cl(this.type + ": Could not restore the context because the restore context extension is not defined") : Cl(this.type + ": Could not restore the context because the context is not defined"), this.onError && this.onError()))
        }
        isContextexFullyRestored() {
            let e = !0;
            for (let t = 0; t < this.renderTargets.length; t++) {
                this.renderTargets[t].textures[0]._canDraw || (e = !1);
                break
            }
            if (e)
                for (let t = 0; t < this.planes.length; t++) {
                    if (!this.planes[t]._canDraw) {
                        e = !1;
                        break
                    }
                    for (let r = 0; r < this.planes[t].textures.length; r++)
                        if (!this.planes[t].textures[r]._canDraw) {
                            e = !1;
                            break
                        }
                }
            if (e)
                for (let t = 0; t < this.shaderPasses.length; t++) {
                    if (!this.shaderPasses[t]._canDraw) {
                        e = !1;
                        break
                    }
                    for (let r = 0; r < this.shaderPasses[t].textures.length; r++)
                        if (!this.shaderPasses[t].textures[r]._canDraw) {
                            e = !1;
                            break
                        }
                }
            return e
        }
        contextRestored() {
            this.getExtensions(), this.setBlendFunc(), this.setDepth(!0), this.cache.clear(), this.scene.initStacks();
            for (let e = 0; e < this.renderTargets.length; e++) this.renderTargets[e]._restoreContext();
            for (let e = 0; e < this.planes.length; e++) this.planes[e]._restoreContext();
            for (let e = 0; e < this.shaderPasses.length; e++) this.shaderPasses[e]._restoreContext();
            const e = this.nextRender.add(() => {
                this.isContextexFullyRestored() && (e.keep = !1, this.state.isContextLost = !1, this.onContextRestored && this.onContextRestored(), this.onSceneChange(), this.needRender())
            }, !0)
        }
        setPixelRatio(e) {
            this.pixelRatio = e
        }
        setSize() {
            if (!this.gl) return;
            const e = this.container.getBoundingClientRect();
            this._boundingRect = {
                width: e.width * this.pixelRatio,
                height: e.height * this.pixelRatio,
                top: e.top * this.pixelRatio,
                left: e.left * this.pixelRatio
            };
            const t = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/),
                r = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            if (t && r) {
                this._boundingRect.top = function(e) {
                    let t = 0;
                    for (; e && !isNaN(e.offsetTop);) t += e.offsetTop - e.scrollTop, e = e.offsetParent;
                    return t
                }(this.container) * this.pixelRatio
            }
            this.canvas.style.width = Math.floor(this._boundingRect.width / this.pixelRatio) + "px", this.canvas.style.height = Math.floor(this._boundingRect.height / this.pixelRatio) + "px", this.canvas.width = Math.floor(this._boundingRect.width * this._renderingScale), this.canvas.height = Math.floor(this._boundingRect.height * this._renderingScale), this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight)
        }
        resize() {
            for (let e = 0; e < this.planes.length; e++) this.planes[e]._canDraw && this.planes[e].resize();
            for (let e = 0; e < this.shaderPasses.length; e++) this.shaderPasses[e]._canDraw && this.shaderPasses[e].resize();
            for (let e = 0; e < this.renderTargets.length; e++) this.renderTargets[e].resize();
            this.needRender()
        }
        clear() {
            this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT)
        }
        clearDepth() {
            this.gl.clear(this.gl.DEPTH_BUFFER_BIT)
        }
        clearColor() {
            this.gl.clear(this.gl.COLOR_BUFFER_BIT)
        }
        bindFrameBuffer(e, t) {
            let r = null;
            e ? (r = e.index, r !== this.state.frameBufferID && (this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, e._frameBuffer), this.gl.viewport(0, 0, e._size.width, e._size.height), e._shouldClear && !t && this.clear())) : null !== this.state.frameBufferID && (this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null), this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight)), this.state.frameBufferID = r
        }
        setDepth(e) {
            e && !this.state.depthTest ? (this.state.depthTest = e, this.gl.enable(this.gl.DEPTH_TEST)) : !e && this.state.depthTest && (this.state.depthTest = e, this.gl.disable(this.gl.DEPTH_TEST))
        }
        setBlendFunc() {
            this.gl.enable(this.gl.BLEND), this.premultipliedAlpha ? this.gl.blendFuncSeparate(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.gl.blendFuncSeparate(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
        }
        setFaceCulling(e) {
            if (this.state.cullFace !== e)
                if (this.state.cullFace = e, "none" === e) this.gl.disable(this.gl.CULL_FACE);
                else {
                    const t = "front" === e ? this.gl.FRONT : this.gl.BACK;
                    this.gl.enable(this.gl.CULL_FACE), this.gl.cullFace(t)
                }
        }
        useProgram(e) {
            null !== this.state.currentProgramID && this.state.currentProgramID === e.id || (this.gl.useProgram(e.program), this.state.currentProgramID = e.id)
        }
        removePlane(e) {
            this.gl && (this.planes = this.planes.filter(t => t.uuid !== e.uuid), this.scene.removePlane(e), e = null, this.gl && this.clear(), this.onSceneChange())
        }
        removeRenderTarget(e) {
            if (!this.gl) return;
            let t = this.planes.find(t => "PingPongPlane" !== t.type && t.target && t.target.uuid === e.uuid);
            for (let t = 0; t < this.planes.length; t++) this.planes[t].target && this.planes[t].target.uuid === e.uuid && (this.planes[t].target = null);
            this.renderTargets = this.renderTargets.filter(t => t.uuid !== e.uuid);
            for (let e = 0; e < this.renderTargets.length; e++) this.renderTargets[e].index = e;
            e = null, this.gl && this.clear(), t && this.scene.resetPlaneStacks(), this.onSceneChange()
        }
        removeShaderPass(e) {
            this.gl && (this.shaderPasses = this.shaderPasses.filter(t => t.uuid !== e.uuid), this.scene.removeShaderPass(e), e = null, this.gl && this.clear(), this.onSceneChange())
        }
        enableDrawing() {
            this.state.drawingEnabled = !0
        }
        disableDrawing() {
            this.state.drawingEnabled = !1
        }
        needRender() {
            this.state.forceRender = !0
        }
        render() {
            this.gl && (this.clear(), this.state.currentGeometryID = null, this.scene.draw())
        }
        deletePrograms() {
            for (let e = 0; e < this.cache.programs.length; e++) {
                const t = this.cache.programs[e];
                this.gl.deleteProgram(t.program)
            }
        }
        dispose() {
            if (!this.gl) return;
            for (this.state.isActive = !1; this.planes.length > 0;) this.removePlane(this.planes[0]);
            for (; this.shaderPasses.length > 0;) this.removeShaderPass(this.shaderPasses[0]);
            for (; this.renderTargets.length > 0;) this.removeRenderTarget(this.renderTargets[0]);
            let e = this.nextRender.add(() => {
                0 === this.planes.length && 0 === this.shaderPasses.length && 0 === this.renderTargets.length && (e.keep = !1, this.deletePrograms(), this.clear(), this.canvas.removeEventListener("webgllost", this._contextLostHandler, !1), this.canvas.removeEventListener("webglrestored", this._contextRestoredHandler, !1), this.gl && this.extensions.WEBGL_lose_context && this.extensions.WEBGL_lose_context.loseContext(), this.canvas.width = this.canvas.width, this.gl = null, this.container.removeChild(this.canvas), this.container = null, this.canvas = null, this.onDisposed && this.onDisposed())
            }, !0)
        }
    }
    class Rl {
        constructor({
            xOffset: e = 0,
            yOffset: t = 0,
            lastXDelta: r = 0,
            lastYDelta: i = 0,
            shouldWatch: n = !0,
            onScroll: s = (() => {})
        } = {}) {
            this.xOffset = e, this.yOffset = t, this.lastXDelta = r, this.lastYDelta = i, this.shouldWatch = n, this.onScroll = s, this.handler = this.scroll.bind(this, !0), this.shouldWatch && window.addEventListener("scroll", this.handler, {
                passive: !0
            })
        }
        scroll() {
            this.updateScrollValues(window.pageXOffset, window.pageYOffset)
        }
        updateScrollValues(e, t) {
            const r = this.xOffset;
            this.xOffset = e, this.lastXDelta = r - this.xOffset;
            const i = this.yOffset;
            this.yOffset = t, this.lastYDelta = i - this.yOffset, this.onScroll && this.onScroll(this.lastXDelta, this.lastYDelta)
        }
        dispose() {
            this.shouldWatch && window.removeEventListener("scroll", this.handler, {
                passive: !0
            })
        }
    }
    /***
     Here we create our Curtains object


     params:
     @container (HTML element or string, optional): the container HTML element or ID that will hold our canvas. Could be set later if not passed as parameter here

     (WebGL context parameters)
     @alpha (bool, optional): whether the WebGL context should handle transparency. Default to true.
     @premultipliedAlpha (bool, optional): whether the WebGL context should handle premultiplied alpha. Default to false.
     @antialias (bool, optional): whether the WebGL context should use the default antialiasing. When using render targets, WebGL disables antialiasing, so you can safely set this to false to improve the performance. Default to true.
     @depth (bool, optional): whether the WebGL context should handle depth. Default to true.
     @failIfMajorPerformanceCaveat (bool, optional): whether the WebGL context creation should fail in case of major performance caveat. Default to true.
     @preserveDrawingBuffer (bool, optional): whether the WebGL context should preserve the drawing buffer. Default to false.
     @stencil (bool, optional): whether the WebGL context should handle stencil. Default to false.

     @autoResize (bool, optional): Whether the library should listen to the window resize event and actually resize the scene. Set it to false if you want to handle this by yourself using the resize() method. Default to true.
     @autoRender (bool, optional): Whether the library should create a request animation frame loop to render the scene. Set it to false if you want to handle this by yourself using the render() method. Default to true.
     @watchScroll (bool, optional): Whether the library should listen to the window scroll event. Set it to false if you want to handle this by yourself. Default to true.

     @pixelRatio (float, optional): Defines the pixel ratio value. Use it to limit it on init to increase performance. Default to window.devicePixelRatio.
     @renderingScale (float, optional): Use it to downscale your rendering canvas. May improve performance but will decrease quality. Default to 1 (minimum: 0.25, maximum: 1).

     @production (bool, optional): Whether the library should throw useful console warnings and errors and check shaders and programs compilation status. Default to false.

     returns :
     @this: our Renderer
     ***/
    class Ol {
        constructor({
            container: e,
            alpha: t = !0,
            premultipliedAlpha: r = !1,
            antialias: i = !0,
            depth: n = !0,
            failIfMajorPerformanceCaveat: s = !0,
            preserveDrawingBuffer: o = !1,
            stencil: a = !1,
            autoResize: u = !0,
            autoRender: l = !0,
            watchScroll: h = !0,
            pixelRatio: c = window.devicePixelRatio || 1,
            renderingScale: d = 1,
            production: f = !1
        } = {}) {
            this.type = "Curtains", this._autoResize = u, this._autoRender = l, this._watchScroll = h, this.pixelRatio = c, d = isNaN(d) ? 1 : parseFloat(d), this._renderingScale = Math.max(.25, Math.min(1, d)), this.premultipliedAlpha = r, this.alpha = t, this.antialias = i, this.depth = n, this.failIfMajorPerformanceCaveat = s, this.preserveDrawingBuffer = o, this.stencil = a, this.production = f, this.errors = !1, e ? this.setContainer(e) : this.production || Cl(this.type + ": no container provided in the initial parameters. Use setContainer() method to set one later and initialize the WebGL context")
        }
        setContainer(e) {
            if (e)
                if ("string" == typeof e)
                    if (e = document.getElementById(e)) this.container = e;
                    else {
                        let e = document.createElement("div");
                        e.setAttribute("id", "curtains-canvas"), document.body.appendChild(e), this.container = e, this.production || Cl('Curtains: no valid container HTML element or ID provided, created a div with "curtains-canvas" ID instead')
                    }
            else e instanceof Element && (this.container = e);
            else {
                let e = document.createElement("div");
                e.setAttribute("id", "curtains-canvas"), document.body.appendChild(e), this.container = e, this.production || Cl('Curtains: no valid container HTML element or ID provided, created a div with "curtains-canvas" ID instead')
            }
            this._initCurtains()
        }
        _initCurtains() {
            this.planes = [], this.renderTargets = [], this.shaderPasses = [], this._initRenderer(), this.gl && (this._initScroll(), this._setSize(), this._addListeners(), this.container.appendChild(this.canvas), console.log("curtains.js - v7.3"), this._animationFrameID = null, this._autoRender && this._animate())
        }
        _initRenderer() {
            this.renderer = new kl({
                alpha: this.alpha,
                antialias: this.antialias,
                premultipliedAlpha: this.premultipliedAlpha,
                depth: this.depth,
                failIfMajorPerformanceCaveat: this.failIfMajorPerformanceCaveat,
                preserveDrawingBuffer: this.preserveDrawingBuffer,
                stencil: this.stencil,
                container: this.container,
                pixelRatio: this.pixelRatio,
                renderingScale: this._renderingScale,
                production: this.production,
                onError: () => this._onRendererError(),
                onContextLost: () => this._onRendererContextLost(),
                onContextRestored: () => this._onRendererContextRestored(),
                onDisposed: () => this._onRendererDisposed(),
                onSceneChange: () => this._keepSync()
            }), this.gl = this.renderer.gl, this.canvas = this.renderer.canvas
        }
        restoreContext() {
            this.renderer.restoreContext()
        }
        _animate() {
            this.render(), this._animationFrameID = window.requestAnimationFrame(this._animate.bind(this))
        }
        enableDrawing() {
            this.renderer.enableDrawing()
        }
        disableDrawing() {
            this.renderer.disableDrawing()
        }
        needRender() {
            this.renderer.needRender()
        }
        nextRender(e) {
            this.renderer.nextRender.add(e)
        }
        clear() {
            this.renderer && this.renderer.clear()
        }
        clearDepth() {
            this.renderer && this.renderer.clearDepth()
        }
        clearColor() {
            this.renderer && this.renderer.clearColor()
        }
        isWebGL2() {
            return !!this.gl && this.renderer._isWebGL2
        }
        render() {
            this.renderer.nextRender.execute(), (this.renderer.state.drawingEnabled || this.renderer.state.forceRender) && (this.renderer.state.forceRender && (this.renderer.state.forceRender = !1), this._onRenderCallback && this._onRenderCallback(), this.renderer.render())
        }
        _addListeners() {
            this._resizeHandler = null, this._autoResize && (this._resizeHandler = this.resize.bind(this, !0), window.addEventListener("resize", this._resizeHandler, !1))
        }
        setPixelRatio(e, t) {
            this.pixelRatio = parseFloat(Math.max(e, 1)) || 1, this.renderer.setPixelRatio(e), this.resize(t)
        }
        _setSize() {
            this.renderer.setSize(), this._scrollManager.shouldWatch && (this._scrollManager.xOffset = window.pageXOffset, this._scrollManager.yOffset = window.pageYOffset)
        }
        getBoundingRect() {
            return this.renderer._boundingRect
        }
        resize(e) {
            this.gl && (this._setSize(), this.renderer.resize(), this.nextRender(() => {
                this._onAfterResizeCallback && e && this._onAfterResizeCallback()
            }))
        }
        _initScroll() {
            this._scrollManager = new Rl({
                xOffset: window.pageXOffset,
                yOffset: window.pageYOffset,
                lastXDelta: 0,
                lastYDelta: 0,
                shouldWatch: this._watchScroll,
                onScroll: (e, t) => this._updateScroll(e, t)
            })
        }
        _updateScroll(e, t) {
            for (let r = 0; r < this.planes.length; r++) this.planes[r].watchScroll && this.planes[r].updateScrollPosition(e, t);
            this.renderer.needRender(), this._onScrollCallback && this._onScrollCallback()
        }
        updateScrollValues(e, t) {
            this._scrollManager.updateScrollValues(e, t)
        }
        getScrollDeltas() {
            return {
                x: this._scrollManager.lastXDelta,
                y: this._scrollManager.lastYDelta
            }
        }
        getScrollValues() {
            return {
                x: this._scrollManager.xOffset,
                y: this._scrollManager.yOffset
            }
        }
        _keepSync() {
            this.planes = this.renderer.planes, this.shaderPasses = this.renderer.shaderPasses, this.renderTargets = this.renderer.renderTargets
        }
        lerp(e, t, r) {
            return function(e, t, r) {
                return (1 - r) * e + r * t
            }(e, t, r)
        }
        onAfterResize(e) {
            return e && (this._onAfterResizeCallback = e), this
        }
        onError(e) {
            return e && (this._onErrorCallback = e), this
        }
        _onRendererError() {
            setTimeout(() => {
                this._onErrorCallback && !this.errors && this._onErrorCallback(), this.errors = !0
            }, 0)
        }
        onContextLost(e) {
            return e && (this._onContextLostCallback = e), this
        }
        _onRendererContextLost() {
            this._onContextLostCallback && this._onContextLostCallback()
        }
        onContextRestored(e) {
            return e && (this._onContextRestoredCallback = e), this
        }
        _onRendererContextRestored() {
            this._onContextRestoredCallback && this._onContextRestoredCallback()
        }
        onRender(e) {
            return e && (this._onRenderCallback = e), this
        }
        onScroll(e) {
            return e && (this._onScrollCallback = e), this
        }
        dispose() {
            this.renderer.dispose()
        }
        _onRendererDisposed() {
            this._animationFrameID && window.cancelAnimationFrame(this._animationFrameID), this._resizeHandler && window.removeEventListener("resize", this._resizeHandler, !1), this._scrollManager && this._scrollManager.dispose()
        }
    }
    class Ll {
        constructor(e, t, r, i) {
            if (this.type = "Uniforms", e && "Renderer" === e.type ? e.gl || Al(this.type + ": Renderer WebGL context is undefined", e) : Al(this.type + ": Renderer not passed as first argument", e), this.renderer = e, this.gl = e.gl, this.program = t, this.shared = r, this.uniforms = {}, i)
                for (const e in i) {
                    const t = i[e];
                    this.uniforms[e] = {
                        name: t.name,
                        type: t.type,
                        value: t.value.clone && "function" == typeof t.value.clone ? t.value.clone() : t.value,
                        update: null
                    }
                }
        }
        handleUniformSetting(e) {
            switch (e.type) {
                case "1i":
                    e.update = this.setUniform1i.bind(this);
                    break;
                case "1iv":
                    e.update = this.setUniform1iv.bind(this);
                    break;
                case "1f":
                    e.update = this.setUniform1f.bind(this);
                    break;
                case "1fv":
                    e.update = this.setUniform1fv.bind(this);
                    break;
                case "2i":
                    e.update = this.setUniform2i.bind(this);
                    break;
                case "2iv":
                    e.update = this.setUniform2iv.bind(this);
                    break;
                case "2f":
                    e.update = this.setUniform2f.bind(this);
                    break;
                case "2fv":
                    e.update = this.setUniform2fv.bind(this);
                    break;
                case "3i":
                    e.update = this.setUniform3i.bind(this);
                    break;
                case "3iv":
                    e.update = this.setUniform3iv.bind(this);
                    break;
                case "3f":
                    e.update = this.setUniform3f.bind(this);
                    break;
                case "3fv":
                    e.update = this.setUniform3fv.bind(this);
                    break;
                case "4i":
                    e.update = this.setUniform4i.bind(this);
                    break;
                case "4iv":
                    e.update = this.setUniform4iv.bind(this);
                    break;
                case "4f":
                    e.update = this.setUniform4f.bind(this);
                    break;
                case "4fv":
                    e.update = this.setUniform4fv.bind(this);
                    break;
                case "mat2":
                    e.update = this.setUniformMatrix2fv.bind(this);
                    break;
                case "mat3":
                    e.update = this.setUniformMatrix3fv.bind(this);
                    break;
                case "mat4":
                    e.update = this.setUniformMatrix4fv.bind(this);
                    break;
                default:
                    this.renderer.production || Cl(this.type + ": This uniform type is not handled : ", e.type)
            }
        }
        setInternalFormat(e) {
            "Vec2" === e.value.type ? (e._internalFormat = "Vec2", e.lastValue = e.value.clone()) : "Vec3" === e.value.type ? (e._internalFormat = "Vec3", e.lastValue = e.value.clone()) : "Mat4" === e.value.type ? (e._internalFormat = "Mat4", e.lastValue = e.value.clone()) : "Quat" === e.value.type ? (e._internalFormat = "Quat", e.lastValue = e.value.clone()) : Array.isArray(e.value) ? (e._internalFormat = "array", e.lastValue = Array.from(e.value)) : e.value.constructor === Float32Array ? (e._internalFormat = "mat", e.lastValue = e.value) : (e._internalFormat = "float", e.lastValue = e.value)
        }
        setUniforms() {
            if (this.uniforms)
                for (const e in this.uniforms) {
                    let t = this.uniforms[e];
                    t.location = this.gl.getUniformLocation(this.program, t.name), t._internalFormat || this.setInternalFormat(t), t.type || ("Vec2" === t._internalFormat ? t.type = "2f" : "Vec3" === t._internalFormat ? t.type = "3f" : "Mat4" === t._internalFormat ? t.type = "mat4" : "array" === t._internalFormat ? 4 === t.value.length ? (t.type = "4f", this.renderer.production || Cl(this.type + ": No uniform type declared for " + t.name + ", applied a 4f (array of 4 floats) uniform type")) : 3 === t.value.length ? (t.type = "3f", this.renderer.production || Cl(this.type + ": No uniform type declared for " + t.name + ", applied a 3f (array of 3 floats) uniform type")) : 2 === t.value.length && (t.type = "2f", this.renderer.production || Cl(this.type + ": No uniform type declared for " + t.name + ", applied a 2f (array of 2 floats) uniform type")) : "mat" === t._internalFormat ? 16 === t.value.length ? (t.type = "mat4", this.renderer.production || Cl(this.type + ": No uniform type declared for " + t.name + ", applied a mat4 (4x4 matrix array) uniform type")) : 9 === t.value.length ? (t.type = "mat3", this.renderer.production || Cl(this.type + ": No uniform type declared for " + t.name + ", applied a mat3 (3x3 matrix array) uniform type")) : 4 === t.value.length && (t.type = "mat2", this.renderer.production || Cl(this.type + ": No uniform type declared for " + t.name + ", applied a mat2 (2x2 matrix array) uniform type")) : (t.type = "1f", this.renderer.production || Cl(this.type + ": No uniform type declared for " + t.name + ", applied a 1f (float) uniform type"))), this.handleUniformSetting(t), t.update && t.update(t)
                }
        }
        updateUniforms() {
            if (this.uniforms)
                for (const e in this.uniforms) {
                    const t = this.uniforms[e];
                    let r = !1;
                    this.shared ? r = !0 : "Vec2" === t._internalFormat || "Vec3" === t._internalFormat || "Quat" === t._internalFormat ? t.value.equals(t.lastValue) || (r = !0, t.lastValue.copy(t.value)) : t.value.length ? JSON.stringify(t.value) !== JSON.stringify(t.lastValue) && (r = !0, t.lastValue = Array.from(t.value)) : t.value !== t.lastValue && (r = !0, t.lastValue = t.value), r && t.update && t.update(t)
                }
        }
        setUniform1i(e) {
            this.gl.uniform1i(e.location, e.value)
        }
        setUniform1iv(e) {
            this.gl.uniform1iv(e.location, e.value)
        }
        setUniform1f(e) {
            this.gl.uniform1f(e.location, e.value)
        }
        setUniform1fv(e) {
            this.gl.uniform1fv(e.location, e.value)
        }
        setUniform2i(e) {
            "Vec2" === e._internalFormat ? this.gl.uniform2i(e.location, e.value.x, e.value.y) : this.gl.uniform2i(e.location, e.value[0], e.value[1])
        }
        setUniform2iv(e) {
            "Vec2" === e._internalFormat ? this.gl.uniform2iv(e.location, [e.value.x, e.value.y]) : this.gl.uniform2iv(e.location, e.value)
        }
        setUniform2f(e) {
            "Vec2" === e._internalFormat ? this.gl.uniform2f(e.location, e.value.x, e.value.y) : this.gl.uniform2f(e.location, e.value[0], e.value[1])
        }
        setUniform2fv(e) {
            "Vec2" === e._internalFormat ? this.gl.uniform2fv(e.location, [e.value.x, e.value.y]) : this.gl.uniform2fv(e.location, e.value)
        }
        setUniform3i(e) {
            "Vec3" === e._internalFormat ? this.gl.uniform3i(e.location, e.value.x, e.value.y, e.value.z) : this.gl.uniform3i(e.location, e.value[0], e.value[1], e.value[2])
        }
        setUniform3iv(e) {
            "Vec3" === e._internalFormat ? this.gl.uniform3iv(e.location, [e.value.x, e.value.y, e.value.z]) : this.gl.uniform3iv(e.location, e.value)
        }
        setUniform3f(e) {
            "Vec3" === e._internalFormat ? this.gl.uniform3f(e.location, e.value.x, e.value.y, e.value.z) : this.gl.uniform3f(e.location, e.value[0], e.value[1], e.value[2])
        }
        setUniform3fv(e) {
            "Vec3" === e._internalFormat ? this.gl.uniform3fv(e.location, [e.value.x, e.value.y, e.value.z]) : this.gl.uniform3fv(e.location, e.value)
        }
        setUniform4i(e) {
            "Quat" === e._internalFormat ? this.gl.uniform4i(e.location, e.value.elements[0], e.value.elements[1], e.value.elements[2], e.value[3]) : this.gl.uniform4i(e.location, e.value[0], e.value[1], e.value[2], e.value[3])
        }
        setUniform4iv(e) {
            "Quat" === e._internalFormat ? this.gl.uniform4iv(e.location, [e.value.elements[0], e.value.elements[1], e.value.elements[2], e.value[3]]) : this.gl.uniform4iv(e.location, e.value)
        }
        setUniform4f(e) {
            "Quat" === e._internalFormat ? this.gl.uniform4f(e.location, e.value.elements[0], e.value.elements[1], e.value.elements[2], e.value[3]) : this.gl.uniform4f(e.location, e.value[0], e.value[1], e.value[2], e.value[3])
        }
        setUniform4fv(e) {
            "Quat" === e._internalFormat ? this.gl.uniform4fv(e.location, [e.value.elements[0], e.value.elements[1], e.value.elements[2], e.value[3]]) : this.gl.uniform4fv(e.location, e.value)
        }
        setUniformMatrix2fv(e) {
            this.gl.uniformMatrix2fv(e.location, !1, e.value)
        }
        setUniformMatrix3fv(e) {
            this.gl.uniformMatrix3fv(e.location, !1, e.value)
        }
        setUniformMatrix4fv(e) {
            "Mat4" === e._internalFormat ? this.gl.uniformMatrix4fv(e.location, !1, e.value.elements) : this.gl.uniformMatrix4fv(e.location, !1, e.value)
        }
    }
    var Il = "\nprecision mediump float;\n".replace(/\n/g, "");
    var Bl = "\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n".replace(/\n/g, "");
    var Nl = "\nvarying vec3 vVertexPosition;\nvarying vec2 vTextureCoord;\n".replace(/\n/g, "");
    var Ul = (Il + Bl + Nl + "\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvoid main() {\n    vTextureCoord = aTextureCoord;\n    vVertexPosition = aVertexPosition;\n    \n    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n}\n").replace(/\n/g, "");
    var zl = (Il + Nl + "\nvoid main() {\n    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n}\n").replace(/\n/g, "");
    var jl = (Il + Bl + Nl + "\nvoid main() {\n    vTextureCoord = aTextureCoord;\n    vVertexPosition = aVertexPosition;\n    \n    gl_Position = vec4(aVertexPosition, 1.0);\n}\n").replace(/\n/g, "");
    var Vl = (Il + Nl + "\nuniform sampler2D uRenderTexture;\n\nvoid main() {\n    gl_FragColor = texture2D(uRenderTexture, vTextureCoord);\n}\n").replace(/\n/g, "");
    class Yl {
        constructor(e, {
            parent: t,
            vertexShader: r,
            fragmentShader: i
        } = {}) {
            this.type = "Program", e && "Renderer" === e.type ? e.gl || Al(this.type + ": Renderer WebGL context is undefined", e) : Al(this.type + ": Renderer not passed as first argument", e), this.renderer = e, this.gl = this.renderer.gl, this.parent = t, this.defaultVsCode = "Plane" === this.parent.type ? Ul : jl, this.defaultFsCode = "Plane" === this.parent.type ? zl : Vl, r ? this.vsCode = r : (this.renderer.production || "Plane" !== this.parent.type || Cl(this.parent.type + ": No vertex shader provided, will use a default one"), this.vsCode = this.defaultVsCode), i ? this.fsCode = i : (this.renderer.production || Cl(this.parent.type + ": No fragment shader provided, will use a default one"), this.fsCode = this.defaultFsCode), this.compiled = !0, this.setupProgram()
        }
        createShader(e, t) {
            const r = this.gl.createShader(t);
            if (this.gl.shaderSource(r, e), this.gl.compileShader(r), !this.renderer.production && !this.gl.getShaderParameter(r, this.gl.COMPILE_STATUS)) {
                const e = t === this.gl.VERTEX_SHADER ? "vertex shader" : "fragment shader";
                let i = this.gl.getShaderSource(r).split("\n");
                for (let e = 0; e < i.length; e++) i[e] = e + 1 + ": " + i[e];
                return i = i.join("\n"), Cl(this.type + ": Errors occurred while compiling the", e, ":\n", this.gl.getShaderInfoLog(r)), Al(i), Cl(this.type + ": Will use a default", e), this.createShader(t === this.gl.VERTEX_SHADER ? this.defaultVsCode : this.defaultFsCode, t)
            }
            return r
        }
        useNewShaders() {
            this.vertexShader = this.createShader(this.vsCode, this.gl.VERTEX_SHADER), this.fragmentShader = this.createShader(this.fsCode, this.gl.FRAGMENT_SHADER), this.vertexShader && this.fragmentShader || this.renderer.production || Cl(this.type + ": Unable to find or compile the vertex or fragment shader")
        }
        setupProgram() {
            let e = this.renderer.cache.getProgramFromShaders(this.vsCode, this.fsCode);
            e ? this.parent.shareProgram ? (this.shared = !0, this.vertexShader = e.vertexShader, this.fragmentShader = e.fragmentShader, this.program = e.program, this.id = e.id, this.activeTextures = e.activeTextures) : (this.vertexShader = e.vertexShader, this.fragmentShader = e.fragmentShader, this.activeTextures = e.activeTextures, this.createProgram()) : (this.useNewShaders(), this.compiled && this.createProgram())
        }
        createProgram() {
            if (this.id = this.renderer.cache.programs.length, this.shared = this.parent.shareProgram, this.program = this.gl.createProgram(), this.gl.attachShader(this.program, this.vertexShader), this.gl.attachShader(this.program, this.fragmentShader), this.gl.linkProgram(this.program), !this.renderer.production && !this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) return Cl(this.type + ": Unable to initialize the shader program: " + this.gl.getProgramInfoLog(this.program)), Cl(this.type + ": Will use default vertex and fragment shaders"), this.vertexShader = this.createShader(this.defaultVsCode, this.gl.VERTEX_SHADER), this.fragmentShader = this.createShader(this.defaultFsCode, this.gl.FRAGMENT_SHADER), void this.createProgram();
            if (this.gl.deleteShader(this.vertexShader), this.gl.deleteShader(this.fragmentShader), !this.activeTextures) {
                this.activeTextures = [];
                let e = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_UNIFORMS);
                for (let t = 0; t < e; t++) {
                    const e = this.gl.getActiveUniform(this.program, t);
                    e.type === this.gl.SAMPLER_2D && this.activeTextures.push(e.name)
                }
            }
            this.renderer.cache.addProgram(this)
        }
        createUniforms(e) {
            this.uniformsManager = new Ll(this.renderer, this.program, this.shared, e), this.setUniforms()
        }
        setUniforms() {
            this.renderer.useProgram(this), this.uniformsManager.setUniforms()
        }
        updateUniforms() {
            this.renderer.useProgram(this), this.uniformsManager.updateUniforms()
        }
    }
    class Gl {
        constructor(e, {
            program: t = null,
            width: r = 1,
            height: i = 1
        } = {}) {
            this.type = "Geometry", e && "Renderer" === e.type ? e.gl || Al(this.type + ": Renderer WebGL context is undefined", e) : Al(this.type + ": Renderer not passed as first argument", e), this.renderer = e, this.gl = this.renderer.gl, this.definition = {
                id: r * i + r,
                width: r,
                height: i
            }, this.setDefaultAttributes(), this.setVerticesUVs()
        }
        restoreContext(e) {
            this.program = null, this.setDefaultAttributes(), this.setVerticesUVs(), this.setProgram(e)
        }
        setDefaultAttributes() {
            this.attributes = {
                vertexPosition: {
                    name: "aVertexPosition",
                    size: 3
                },
                textureCoord: {
                    name: "aTextureCoord",
                    size: 3
                }
            }
        }
        setVerticesUVs() {
            const e = this.renderer.cache.getGeometryFromID(this.definition.id);
            e ? (this.attributes.vertexPosition.array = e.vertices, this.attributes.textureCoord.array = e.uvs) : (this.computeVerticesUVs(), this.renderer.cache.addGeometry(this.definition.id, this.attributes.vertexPosition.array, this.attributes.textureCoord.array))
        }
        setProgram(e) {
            this.program = e.program, this.initAttributes(), this.renderer._isWebGL2 ? (this._vao = this.gl.createVertexArray(), this.gl.bindVertexArray(this._vao)) : this.renderer.extensions.OES_vertex_array_object && (this._vao = this.renderer.extensions.OES_vertex_array_object.createVertexArrayOES(), this.renderer.extensions.OES_vertex_array_object.bindVertexArrayOES(this._vao)), this.initializeBuffers()
        }
        initAttributes() {
            for (const e in this.attributes) this.attributes[e].location = this.gl.getAttribLocation(this.program, this.attributes[e].name), this.attributes[e].buffer = this.gl.createBuffer(), this.attributes[e].numberOfItems = this.definition.width * this.definition.height * this.attributes[e].size * 2
        }
        computeVerticesUVs() {
            this.attributes.vertexPosition.array = [], this.attributes.textureCoord.array = [];
            const e = this.attributes.vertexPosition.array,
                t = this.attributes.textureCoord.array;
            for (let r = 0; r < this.definition.height; r++) {
                const i = r / this.definition.height;
                for (let r = 0; r < this.definition.width; r++) {
                    const n = r / this.definition.width;
                    t.push(n), t.push(i), t.push(0), e.push(2 * (n - .5)), e.push(2 * (i - .5)), e.push(0), t.push(n + 1 / this.definition.width), t.push(i), t.push(0), e.push(2 * (n + 1 / this.definition.width - .5)), e.push(2 * (i - .5)), e.push(0), t.push(n), t.push(i + 1 / this.definition.height), t.push(0), e.push(2 * (n - .5)), e.push(2 * (i + 1 / this.definition.height - .5)), e.push(0), t.push(n), t.push(i + 1 / this.definition.height), t.push(0), e.push(2 * (n - .5)), e.push(2 * (i + 1 / this.definition.height - .5)), e.push(0), t.push(n + 1 / this.definition.width), t.push(i), t.push(0), e.push(2 * (n + 1 / this.definition.width - .5)), e.push(2 * (i - .5)), e.push(0), t.push(n + 1 / this.definition.width), t.push(i + 1 / this.definition.height), t.push(0), e.push(2 * (n + 1 / this.definition.width - .5)), e.push(2 * (i + 1 / this.definition.height - .5)), e.push(0)
                }
            }
        }
        initializeBuffers() {
            if (this.attributes) {
                for (const e in this.attributes) this.gl.enableVertexAttribArray(this.attributes[e].location), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.attributes[e].buffer), this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.attributes[e].array), this.gl.STATIC_DRAW), this.gl.vertexAttribPointer(this.attributes[e].location, this.attributes[e].size, this.gl.FLOAT, !1, 0, 0);
                this.renderer.state.currentGeometryID = this.definition.id
            }
        }
        bindBuffers() {
            if (this._vao) this.renderer._isWebGL2 ? this.gl.bindVertexArray(this._vao) : this.renderer.extensions.OES_vertex_array_object.bindVertexArrayOES(this._vao);
            else
                for (const e in this.attributes) this.gl.enableVertexAttribArray(this.attributes[e].location), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.attributes[e].buffer), this.gl.vertexAttribPointer(this.attributes[e].location, this.attributes[e].size, this.gl.FLOAT, !1, 0, 0);
            this.renderer.state.currentGeometryID = this.definition.id
        }
        draw() {
            this.gl.drawArrays(this.gl.TRIANGLES, 0, this.attributes.vertexPosition.numberOfItems)
        }
        dispose() {
            this._vao && (this.renderer._isWebGL2 ? this.gl.deleteVertexArray(this._vao) : this.renderer.extensions.OES_vertex_array_object.deleteVertexArrayOES(this._vao));
            for (const e in this.attributes) this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.attributes[e].buffer), this.gl.bufferData(this.gl.ARRAY_BUFFER, 1, this.gl.STATIC_DRAW), this.gl.deleteBuffer(this.attributes[e].buffer);
            this.attributes = null, this.renderer.state.currentGeometryID = null
        }
    }
    class Wl {
        constructor(e = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])) {
            this.type = "Mat4", this.elements = e
        }
        setFromArray(e) {
            for (let t = 0; t < this.elements.length; t++) this.elements[t] = e[t];
            return this
        }
        copy(e) {
            const t = e.elements;
            return this.elements[0] = t[0], this.elements[1] = t[1], this.elements[2] = t[2], this.elements[3] = t[3], this.elements[4] = t[4], this.elements[5] = t[5], this.elements[6] = t[6], this.elements[7] = t[7], this.elements[8] = t[8], this.elements[9] = t[9], this.elements[10] = t[10], this.elements[11] = t[11], this.elements[12] = t[12], this.elements[13] = t[13], this.elements[14] = t[14], this.elements[15] = t[15], this
        }
        clone() {
            return (new Wl).copy(this)
        }
        multiply(e) {
            const t = this.elements,
                r = e.elements;
            let i = new Wl;
            return i.elements[0] = r[0] * t[0] + r[1] * t[4] + r[2] * t[8] + r[3] * t[12], i.elements[1] = r[0] * t[1] + r[1] * t[5] + r[2] * t[9] + r[3] * t[13], i.elements[2] = r[0] * t[2] + r[1] * t[6] + r[2] * t[10] + r[3] * t[14], i.elements[3] = r[0] * t[3] + r[1] * t[7] + r[2] * t[11] + r[3] * t[15], i.elements[4] = r[4] * t[0] + r[5] * t[4] + r[6] * t[8] + r[7] * t[12], i.elements[5] = r[4] * t[1] + r[5] * t[5] + r[6] * t[9] + r[7] * t[13], i.elements[6] = r[4] * t[2] + r[5] * t[6] + r[6] * t[10] + r[7] * t[14], i.elements[7] = r[4] * t[3] + r[5] * t[7] + r[6] * t[11] + r[7] * t[15], i.elements[8] = r[8] * t[0] + r[9] * t[4] + r[10] * t[8] + r[11] * t[12], i.elements[9] = r[8] * t[1] + r[9] * t[5] + r[10] * t[9] + r[11] * t[13], i.elements[10] = r[8] * t[2] + r[9] * t[6] + r[10] * t[10] + r[11] * t[14], i.elements[11] = r[8] * t[3] + r[9] * t[7] + r[10] * t[11] + r[11] * t[15], i.elements[12] = r[12] * t[0] + r[13] * t[4] + r[14] * t[8] + r[15] * t[12], i.elements[13] = r[12] * t[1] + r[13] * t[5] + r[14] * t[9] + r[15] * t[13], i.elements[14] = r[12] * t[2] + r[13] * t[6] + r[14] * t[10] + r[15] * t[14], i.elements[15] = r[12] * t[3] + r[13] * t[7] + r[14] * t[11] + r[15] * t[15], i
        }
        getInverse() {
            const e = this.elements,
                t = new Wl,
                r = t.elements;
            let i = e[0],
                n = e[1],
                s = e[2],
                o = e[3],
                a = e[4],
                u = e[5],
                l = e[6],
                h = e[7],
                c = e[8],
                d = e[9],
                f = e[10],
                p = e[11],
                m = e[12],
                g = e[13],
                v = e[14],
                y = e[15],
                _ = i * u - n * a,
                D = i * l - s * a,
                x = i * h - o * a,
                w = n * l - s * u,
                b = n * h - o * u,
                E = s * h - o * l,
                C = c * g - d * m,
                A = c * v - f * m,
                T = c * y - p * m,
                F = d * v - f * g,
                P = d * y - p * g,
                M = f * y - p * v,
                S = _ * M - D * P + x * F + w * T - b * A + E * C;
            return S ? (S = 1 / S, r[0] = (u * M - l * P + h * F) * S, r[1] = (s * P - n * M - o * F) * S, r[2] = (g * E - v * b + y * w) * S, r[3] = (f * b - d * E - p * w) * S, r[4] = (l * T - a * M - h * A) * S, r[5] = (i * M - s * T + o * A) * S, r[6] = (v * x - m * E - y * D) * S, r[7] = (c * E - f * x + p * D) * S, r[8] = (a * P - u * T + h * C) * S, r[9] = (n * T - i * P - o * C) * S, r[10] = (m * b - g * x + y * _) * S, r[11] = (d * x - c * b - p * _) * S, r[12] = (u * A - a * F - l * C) * S, r[13] = (i * F - n * A + s * C) * S, r[14] = (g * D - m * w - v * _) * S, r[15] = (c * w - d * D + f * _) * S, t) : null
        }
        scale(e) {
            let t = this.elements,
                r = new Wl;
            return r.elements[0] = e.x * t[0], r.elements[1] = e.x * t[1], r.elements[2] = e.x * t[2], r.elements[3] = e.x * t[3], r.elements[4] = e.y * t[4], r.elements[5] = e.y * t[5], r.elements[6] = e.y * t[6], r.elements[7] = e.y * t[7], r.elements[8] = e.z * t[8], r.elements[9] = e.z * t[9], r.elements[10] = e.z * t[10], r.elements[11] = e.z * t[11], t !== r.elements && (r.elements[12] = t[12], r.elements[13] = t[13], r.elements[14] = t[14], r.elements[15] = t[15]), r
        }
        composeFromOrigin(e, t, r, i) {
            let n = this.elements;
            const s = t.elements[0],
                o = t.elements[1],
                a = t.elements[2],
                u = t.elements[3],
                l = s + s,
                h = o + o,
                c = a + a,
                d = s * l,
                f = s * h,
                p = s * c,
                m = o * h,
                g = o * c,
                v = a * c,
                y = u * l,
                _ = u * h,
                D = u * c,
                x = r.x,
                w = r.y,
                b = r.z,
                E = i.x,
                C = i.y,
                A = i.z,
                T = (1 - (m + v)) * x,
                F = (f + D) * x,
                P = (p - _) * x,
                M = (f - D) * w,
                S = (1 - (d + v)) * w,
                k = (g + y) * w,
                R = (p + _) * b,
                O = (g - y) * b,
                L = (1 - (d + m)) * b;
            return n[0] = T, n[1] = F, n[2] = P, n[3] = 0, n[4] = M, n[5] = S, n[6] = k, n[7] = 0, n[8] = R, n[9] = O, n[10] = L, n[11] = 0, n[12] = e.x + E - (T * E + M * C + R * A), n[13] = e.y + C - (F * E + S * C + O * A), n[14] = e.z + A - (P * E + k * C + L * A), n[15] = 1, this
        }
    }
    class Xl {
        constructor(e = 0, t = 0) {
            this.type = "Vec2", this.set(e, t)
        }
        set(e, t) {
            return this.x = e, this.y = t, this
        }
        add(e) {
            return this.x += e.x, this.y += e.y, this
        }
        addScalar(e) {
            return this.x += e, this.y += e, this
        }
        sub(e) {
            return this.x -= e.x, this.y -= e.y, this
        }
        subScalar(e) {
            return this.x -= e, this.y -= e, this
        }
        multiply(e) {
            return this.x *= e.x, this.y *= e.y, this
        }
        multiplyScalar(e) {
            return this.x *= e, this.y *= e, this
        }
        copy(e) {
            return this.x = e.x, this.y = e.y, this
        }
        clone() {
            return new Xl(this.x, this.y)
        }
        sanitizeNaNValuesWith(e) {
            return this.x = isNaN(this.x) ? e.x : parseFloat(this.x), this.y = isNaN(this.y) ? e.y : parseFloat(this.y), this
        }
        max(e) {
            return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this
        }
        min(e) {
            return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this
        }
        equals(e) {
            return this.x === e.x && this.y === e.y
        }
        normalize() {
            let e = this.x * this.x + this.y * this.y;
            return e > 0 && (e = 1 / Math.sqrt(e)), this.x *= e, this.y *= e, this
        }
        dot(e) {
            return this.x * e.x + this.y * e.y
        }
    }
    class Hl {
        constructor(e = 0, t = 0, r = 0) {
            this.type = "Vec3", this.set(e, t, r)
        }
        set(e, t, r) {
            return this.x = e, this.y = t, this.z = r, this
        }
        add(e) {
            return this.x += e.x, this.y += e.y, this.z += e.z, this
        }
        addScalar(e) {
            return this.x += e, this.y += e, this.z += e, this
        }
        sub(e) {
            return this.x -= e.x, this.y -= e.y, this.z -= e.z, this
        }
        subScalar(e) {
            return this.x -= e, this.y -= e, this.z -= e, this
        }
        multiply(e) {
            return this.x *= e.x, this.y *= e.y, this.z *= e.z, this
        }
        multiplyScalar(e) {
            return this.x *= e, this.y *= e, this.z *= e, this
        }
        copy(e) {
            return this.x = e.x, this.y = e.y, this.z = e.z, this
        }
        clone() {
            return new Hl(this.x, this.y, this.z)
        }
        sanitizeNaNValuesWith(e) {
            return this.x = isNaN(this.x) ? e.x : parseFloat(this.x), this.y = isNaN(this.y) ? e.y : parseFloat(this.y), this.z = isNaN(this.z) ? e.z : parseFloat(this.z), this
        }
        max(e) {
            return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this
        }
        min(e) {
            return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this
        }
        equals(e) {
            return this.x === e.x && this.y === e.y && this.z === e.z
        }
        normalize() {
            let e = this.x * this.x + this.y * this.y + this.z * this.z;
            return e > 0 && (e = 1 / Math.sqrt(e)), this.x *= e, this.y *= e, this.z *= e, this
        }
        dot(e) {
            return this.x * e.x + this.y * e.y + this.z * e.z
        }
        applyMat4(e) {
            const t = this.x,
                r = this.y,
                i = this.z,
                n = e.elements;
            let s = n[3] * t + n[7] * r + n[11] * i + n[15];
            return s = s || 1, this.x = (n[0] * t + n[4] * r + n[8] * i + n[12]) / s, this.y = (n[1] * t + n[5] * r + n[9] * i + n[13]) / s, this.z = (n[2] * t + n[6] * r + n[10] * i + n[14]) / s, this
        }
        applyQuat(e) {
            const t = this.x,
                r = this.y,
                i = this.z,
                n = e.elements[0],
                s = e.elements[1],
                o = e.elements[2],
                a = e.elements[3],
                u = a * t + s * i - o * r,
                l = a * r + o * t - n * i,
                h = a * i + n * r - s * t,
                c = -n * t - s * r - o * i;
            return this.x = u * a + c * -n + l * -o - h * -s, this.y = l * a + c * -s + h * -n - u * -o, this.z = h * a + c * -o + u * -s - l * -n, this
        }
        project(e) {
            return this.applyMat4(e.viewMatrix).applyMat4(e.projectionMatrix), this
        }
        unproject(e) {
            return this.applyMat4(e.projectionMatrix.getInverse()).applyMat4(e.worldMatrix), this
        }
    }
    class ql {
        constructor(e, {
            isFBOTexture: t = !1,
            fromTexture: r = !1,
            loader: i,
            sampler: n,
            floatingPoint: s = "none",
            premultiplyAlpha: o = !1,
            anisotropy: a = 1,
            generateMipmap: u = null,
            wrapS: l,
            wrapT: h,
            minFilter: c,
            magFilter: d
        } = {}) {
            if (this.type = "Texture", (e = e && e.renderer || e) && "Renderer" === e.type ? e.gl || Al(this.type + ": Renderer WebGL context is undefined", e) : Al(this.type + ": Renderer not passed as first argument", e), this.renderer = e, this.gl = this.renderer.gl, this.uuid = Tl(), this._globalParameters = {
                    unpackAlignment: 4,
                    flipY: !t,
                    premultiplyAlpha: o,
                    floatingPoint: s,
                    type: this.gl.UNSIGNED_BYTE,
                    internalFormat: this.gl.RGBA,
                    format: this.gl.RGBA
                }, this.parameters = {
                    anisotropy: a,
                    generateMipmap: u,
                    wrapS: l || this.gl.CLAMP_TO_EDGE,
                    wrapT: h || this.gl.CLAMP_TO_EDGE,
                    minFilter: c || this.gl.LINEAR,
                    magFilter: d || this.gl.LINEAR,
                    _shouldUpdate: !0
                }, this._initState(), this.sourceType = t ? "fbo" : "empty", this._samplerName = n, this._sampler = {
                    isActive: !1
                }, this._textureMatrix = {
                    matrix: new Wl
                }, this._size = {
                    width: 0,
                    height: 0
                }, this.scale = new Xl(1, 1), this.offset = new Xl, this._loader = i, this._sourceLoaded = !1, this._uploaded = !1, this._willUpdate = !1, this.shouldUpdate = !1, this._forceUpdate = !1, this.userData = {}, this._canDraw = !1, r) return this._copyOnInit = !0, void(this._copiedFrom = r);
            this._copyOnInit = !1, this._initTexture()
        }
        _initState() {
            this._state = {
                anisotropy: 1,
                generateMipmap: !1,
                wrapS: null,
                wrapT: null,
                minFilter: null,
                magFilter: this.gl.LINEAR
            }
        }
        _initTexture() {
            this._sampler.texture = this.gl.createTexture(), this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture), "empty" === this.sourceType && (this._globalParameters.flipY = !1, this._updateGlobalTexParameters(), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255])), this._canDraw = !0)
        }
        _restoreFromTexture() {
            this._copyOnInit || this._initTexture(), this._parent && (this._setTextureUniforms(), this._setSize()), this.copy(this._copiedFrom), this._canDraw = !0
        }
        _restoreContext() {
            if (this._canDraw = !1, this._sampler.isActive = !1, this._initState(), this._state.generateMipmap = !1, this.parameters._shouldUpdate = !0, this._copiedFrom) {
                const e = this.renderer.nextRender.add(() => {
                    this._copiedFrom._canDraw && (this._restoreFromTexture(), e.keep = !1)
                }, !0)
            } else this._initTexture(), this._parent && this._setParent(), this.source && (this.setSource(this.source), "image" === this.sourceType ? this.renderer.cache.addTexture(this) : this.needUpdate()), this._canDraw = !0
        }
        addParent(e) {
            !e || "Plane" !== e.type && "PingPongPlane" !== e.type && "ShaderPass" !== e.type && "RenderTarget" !== e.type ? this.renderer.production || Cl(this.type + ": cannot add texture as a child of ", e, " because it is not a valid parent") : (this._parent = e, this.index = this._parent.textures.length, this._parent.textures.push(this), this._setParent())
        }
        _setParent() {
            if (this._sampler.name = this._samplerName || "uSampler" + this.index, this._textureMatrix.name = this._samplerName ? this._samplerName + "Matrix" : "uTextureMatrix" + this.index, this._parent._program) {
                if (!this._parent._program.compiled) return void(this.renderer.production || Cl(this.type + ": Unable to create the texture because the program is not valid"));
                if (this._setTextureUniforms(), this._copyOnInit) {
                    this._copiedFrom._sampler.texture || (this._sampler.texture = this.gl.createTexture(), this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture));
                    const e = this.renderer.nextRender.add(() => {
                        this._copiedFrom._canDraw && (this.copy(this._copiedFrom), e.keep = !1)
                    }, !0);
                    return
                }
                this.source ? this._parent.loader && this._parent.loader._addSourceToParent(this.source, this.sourceType) : this._size = {
                    width: this._parent._boundingRect.document.width,
                    height: this._parent._boundingRect.document.height
                }, this._setSize()
            } else "RenderTarget" === this._parent.type && (this._size = {
                width: this._parent._size && this._parent._size.width || this.renderer._boundingRect.width,
                height: this._parent._size && this._parent._size.height || this.renderer._boundingRect.height
            }, this._upload(), this._updateTexParameters(), this._canDraw = !0)
        }
        hasParent() {
            return !!this._parent
        }
        _setTextureUniforms() {
            for (let e = 0; e < this._parent._program.activeTextures.length; e++) this._parent._program.activeTextures[e] === this._sampler.name && (this._sampler.isActive = !0, this.renderer.useProgram(this._parent._program), this._sampler.location = this.gl.getUniformLocation(this._parent._program.program, this._sampler.name), this._textureMatrix.location = this.gl.getUniformLocation(this._parent._program.program, this._textureMatrix.name), this.gl.uniform1i(this._sampler.location, this.index))
        }
        copy(e) {
            e && "Texture" === e.type ? (this._globalParameters = e._globalParameters, this.parameters = e.parameters, this._state = e._state, this._size = e._size, !this._sourceLoaded && e._sourceLoaded && this._onSourceLoadedCallback && this._onSourceLoadedCallback(), this._sourceLoaded = e._sourceLoaded, !this._uploaded && e._uploaded && this._onSourceUploadedCallback && this._onSourceUploadedCallback(), this._uploaded = e._uploaded, this.sourceType = e.sourceType, this.source = e.source, this._videoFrameCallbackID = e._videoFrameCallbackID, this._sampler.texture = e._sampler.texture, this._copiedFrom = e, !this._parent || !this._parent._program || this._canDraw && this._textureMatrix.matrix || (this._setSize(), this._canDraw = !0), this.renderer.needRender()) : this.renderer.production || Cl(this.type + ": Unable to set the texture from texture:", e)
        }
        setSource(e) {
            this._sourceLoaded || this.renderer.nextRender.add(() => this._onSourceLoadedCallback && this._onSourceLoadedCallback());
            const t = this.renderer.cache.getTextureFromSource(e);
            if (t) return this._uploaded || (this.renderer.nextRender.add(() => this._onSourceUploadedCallback && this._onSourceUploadedCallback()), this._uploaded = !0), this.copy(t), void this.resize();
            this.source = e, "empty" === this.sourceType && ("IMG" === e.tagName.toUpperCase() ? this.sourceType = "image" : "VIDEO" === e.tagName.toUpperCase() ? (this.sourceType = "video", this.shouldUpdate = !0) : "CANVAS" === e.tagName.toUpperCase() ? (this.sourceType = "canvas", this._willUpdate = !0, this.shouldUpdate = !0) : this.renderer.production || Cl(this.type + ": this HTML tag could not be converted into a texture:", e.tagName)), this._size = {
                width: this.source.naturalWidth || this.source.width || this.source.videoWidth,
                height: this.source.naturalHeight || this.source.height || this.source.videoHeight
            }, this._sourceLoaded = !0, this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture), this.resize(), this._globalParameters.flipY = !0, "image" === this.sourceType && (this.parameters.generateMipmap = this.parameters.generateMipmap || null === this.parameters.generateMipmap, this.parameters._shouldUpdate = this.parameters.generateMipmap, this._state.generateMipmap = !1, this._upload()), this.renderer.needRender()
        }
        _updateGlobalTexParameters() {
            this.renderer.state.unpackAlignment !== this._globalParameters.unpackAlignment && (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this._globalParameters.unpackAlignment), this.renderer.state.unpackAlignment = this._globalParameters.unpackAlignment), this.renderer.state.flipY !== this._globalParameters.flipY && (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this._globalParameters.flipY), this.renderer.state.flipY = this._globalParameters.flipY), this.renderer.state.premultiplyAlpha !== this._globalParameters.premultiplyAlpha && (this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this._globalParameters.premultiplyAlpha), this.renderer.state.premultiplyAlpha = this._globalParameters.premultiplyAlpha), "half-float" === this._globalParameters.floatingPoint ? this.renderer._isWebGL2 && this.renderer.extensions.EXT_color_buffer_float ? (this._globalParameters.internalFormat = this.gl.RGBA16F, this._globalParameters.type = this.gl.HALF_FLOAT) : this.renderer.extensions.OES_texture_half_float ? this._globalParameters.type = this.renderer.extensions.OES_texture_half_float.HALF_FLOAT_OES : this.renderer.production || Cl(this.type + ": could not use half-float textures because the extension is not available") : "float" === this._globalParameters.floatingPoint && (this.renderer._isWebGL2 && this.renderer.extensions.EXT_color_buffer_float ? (this._globalParameters.internalFormat = this.gl.RGBA16F, this._globalParameters.type = this.gl.FLOAT) : this.renderer.extensions.OES_texture_float ? this._globalParameters.type = this.renderer.extensions.OES_texture_half_float.FLOAT : this.renderer.production || Cl(this.type + ": could not use float textures because the extension is not available"))
        }
        _updateTexParameters() {
            this.index && this.renderer.state.activeTexture !== this.index && this._bindTexture(this), this.parameters.wrapS !== this._state.wrapS && (this.renderer._isWebGL2 || Fl(this._size.width) && Fl(this._size.height) || (this.parameters.wrapS = this.gl.CLAMP_TO_EDGE), this.parameters.wrapS !== this.gl.REPEAT && this.parameters.wrapS !== this.gl.CLAMP_TO_EDGE && this.parameters.wrapS !== this.gl.MIRRORED_REPEAT && (this.renderer.production || Cl(this.type + ": Wrong wrapS value", this.parameters.wrapS, "for this texture:", this, "\ngl.CLAMP_TO_EDGE wrapping will be used instead"), this.parameters.wrapS = this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.parameters.wrapS), this._state.wrapS = this.parameters.wrapS), this.parameters.wrapT !== this._state.wrapT && (this.renderer._isWebGL2 || Fl(this._size.width) && Fl(this._size.height) || (this.parameters.wrapT = this.gl.CLAMP_TO_EDGE), this.parameters.wrapT !== this.gl.REPEAT && this.parameters.wrapT !== this.gl.CLAMP_TO_EDGE && this.parameters.wrapT !== this.gl.MIRRORED_REPEAT && (this.renderer.production || Cl(this.type + ": Wrong wrapT value", this.parameters.wrapT, "for this texture:", this, "\ngl.CLAMP_TO_EDGE wrapping will be used instead"), this.parameters.wrapT = this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.parameters.wrapT), this._state.wrapT = this.parameters.wrapT), this.parameters.generateMipmap && !this._state.generateMipmap && this.source && (this.renderer._isWebGL2 || Fl(this._size.width) && Fl(this._size.height) ? this.gl.generateMipmap(this.gl.TEXTURE_2D) : this.parameters.generateMipmap = !1, this._state.generateMipmap = this.parameters.generateMipmap), this.parameters.minFilter !== this._state.minFilter && (this.renderer._isWebGL2 || Fl(this._size.width) && Fl(this._size.height) || (this.parameters.minFilter = this.gl.LINEAR), this.parameters.generateMipmap || null === this.parameters.generateMipmap || (this.parameters.minFilter = this.gl.LINEAR), this.parameters.minFilter !== this.gl.LINEAR && this.parameters.minFilter !== this.gl.NEAREST && this.parameters.minFilter !== this.gl.NEAREST_MIPMAP_NEAREST && this.parameters.minFilter !== this.gl.LINEAR_MIPMAP_NEAREST && this.parameters.minFilter !== this.gl.NEAREST_MIPMAP_LINEAR && this.parameters.minFilter !== this.gl.LINEAR_MIPMAP_LINEAR && (this.renderer.production || Cl(this.type + ": Wrong minFilter value", this.parameters.minFilter, "for this texture:", this, "\ngl.LINEAR filtering will be used instead"), this.parameters.minFilter = this.gl.LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.parameters.minFilter), this._state.minFilter = this.parameters.minFilter), this.parameters.magFilter !== this._state.magFilter && (this.renderer._isWebGL2 || Fl(this._size.width) && Fl(this._size.height) || (this.parameters.magFilter = this.gl.LINEAR), this.parameters.magFilter !== this.gl.LINEAR && this.parameters.magFilter !== this.gl.NEAREST && (this.renderer.production || Cl(this.type + ": Wrong magFilter value", this.parameters.magFilter, "for this texture:", this, "\ngl.LINEAR filtering will be used instead"), this.parameters.magFilter = this.gl.LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.parameters.magFilter), this._state.magFilter = this.parameters.magFilter);
            const e = this.renderer.extensions.EXT_texture_filter_anisotropic;
            if (e && this.parameters.anisotropy !== this._state.anisotropy) {
                const t = this.gl.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                this.parameters.anisotropy = Math.max(1, Math.min(this.parameters.anisotropy, t)), this.gl.texParameterf(this.gl.TEXTURE_2D, e.TEXTURE_MAX_ANISOTROPY_EXT, this.parameters.anisotropy), this._state.anisotropy = this.parameters.anisotropy
            }
        }
        setWrapS(e) {
            this.parameters.wrapS !== e && (this.parameters.wrapS = e, this.parameters._shouldUpdate = !0)
        }
        setWrapT(e) {
            this.parameters.wrapT !== e && (this.parameters.wrapT = e, this.parameters._shouldUpdate = !0)
        }
        setMinFilter(e) {
            this.parameters.minFilter !== e && (this.parameters.minFilter = e, this.parameters._shouldUpdate = !0)
        }
        setMagFilter(e) {
            this.parameters.magFilter !== e && (this.parameters.magFilter = e, this.parameters._shouldUpdate = !0)
        }
        setAnisotropy(e) {
            e = isNaN(e) ? this.parameters.anisotropy : e, this.parameters.anisotropy !== e && (this.parameters.anisotropy = e, this.parameters._shouldUpdate = !0)
        }
        needUpdate() {
            this._forceUpdate = !0
        }
        _videoFrameCallback() {
            this._willUpdate = !0, this.source.requestVideoFrameCallback(() => this._videoFrameCallback())
        }
        _upload() {
            this._updateGlobalTexParameters(), this.source ? this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this._globalParameters.internalFormat, this._globalParameters.format, this._globalParameters.type, this.source) : "fbo" === this.sourceType && this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this._globalParameters.internalFormat, this._size.width, this._size.height, 0, this._globalParameters.format, this._globalParameters.type, this.source), this._uploaded || (this.renderer.nextRender.add(() => this._onSourceUploadedCallback && this._onSourceUploadedCallback()), this._uploaded = !0)
        }
        _getSizes() {
            if ("fbo" === this.sourceType) return {
                parentWidth: this._parent._boundingRect.document.width,
                parentHeight: this._parent._boundingRect.document.height,
                sourceWidth: this._parent._boundingRect.document.width,
                sourceHeight: this._parent._boundingRect.document.height,
                xOffset: 0,
                yOffset: 0
            };
            const e = this._parent.scale ? new Xl(this._parent.scale.x, this._parent.scale.y) : new Xl(1, 1),
                t = this._parent._boundingRect.document.width * e.x,
                r = this._parent._boundingRect.document.height * e.y,
                i = this._size.width,
                n = this._size.height,
                s = i / n,
                o = t / r;
            let a = 0,
                u = 0;
            return o > s ? u = Math.min(0, r - t * (1 / s)) : o < s && (a = Math.min(0, t - r * s)), {
                parentWidth: t,
                parentHeight: r,
                sourceWidth: i,
                sourceHeight: n,
                xOffset: a,
                yOffset: u
            }
        }
        setScale(e) {
            e.type && "Vec2" === e.type ? (e.sanitizeNaNValuesWith(this.scale).max(new Xl(.001, .001)), e.equals(this.scale) || (this.scale.copy(e), this.resize())) : this.renderer.production || Cl(this.type + ": Cannot set scale because the parameter passed is not of Vec2 type:", e)
        }
        setOffset(e) {
            e.type && "Vec2" === e.type ? (e.sanitizeNaNValuesWith(this.offset), e.equals(this.offset) || (this.offset.copy(e), this.resize())) : this.renderer.production || Cl(this.type + ": Cannot set offset because the parameter passed is not of Vec2 type:", scale)
        }
        _setSize() {
            if (this._parent && this._parent._program) {
                const e = this._getSizes();
                this._updateTextureMatrix(e)
            }
        }
        resize() {
            "fbo" === this.sourceType ? (this._size = {
                width: this._parent._size && this._parent._size.width || this._parent._boundingRect.document.width,
                height: this._parent._size && this._parent._size.height || this._parent._boundingRect.document.height
            }, this._copiedFrom || (this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this._globalParameters.internalFormat, this._size.width, this._size.height, 0, this._globalParameters.format, this._globalParameters.type, null))) : this.source && (this._size = {
                width: this.source.naturalWidth || this.source.width || this.source.videoWidth,
                height: this.source.naturalHeight || this.source.height || this.source.videoHeight
            }), this._setSize()
        }
        _updateTextureMatrix(e) {
            let t = new Hl(e.parentWidth / (e.parentWidth - e.xOffset), e.parentHeight / (e.parentHeight - e.yOffset), 1);
            t.x /= this.scale.x, t.y /= this.scale.y;
            const r = new Wl([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, (1 - t.x) / 2 + this.offset.x, (1 - t.y) / 2 + this.offset.y, 0, 1]);
            this._textureMatrix.matrix = r.scale(t), this._updateMatrixUniform()
        }
        _updateMatrixUniform() {
            this.renderer.useProgram(this._parent._program), this.gl.uniformMatrix4fv(this._textureMatrix.location, !1, this._textureMatrix.matrix.elements)
        }
        _onSourceLoaded(e) {
            this.setSource(e), "image" === this.sourceType && this.renderer.cache.addTexture(this)
        }
        _bindTexture() {
            this._canDraw && (this.renderer.state.activeTexture !== this.index && (this.gl.activeTexture(this.gl.TEXTURE0 + this.index), this.renderer.state.activeTexture = this.index), this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture))
        }
        _draw() {
            this._sampler.isActive && (this._bindTexture(this), "video" === this.sourceType && this.source && !this._videoFrameCallbackID && this.source.readyState >= this.source.HAVE_CURRENT_DATA && !this.source.paused && (this._willUpdate = !0), (this._forceUpdate || this._willUpdate && this.shouldUpdate) && (this._state.generateMipmap = !1, this._upload()), "video" === this.sourceType && (this._willUpdate = !1), this._forceUpdate = !1, this._parent && this._parent.shareProgram && this._updateMatrixUniform()), this.parameters._shouldUpdate && (this._updateTexParameters(), this.parameters._shouldUpdate = !1)
        }
        onSourceLoaded(e) {
            return e && (this._onSourceLoadedCallback = e), this
        }
        onSourceUploaded(e) {
            return e && (this._onSourceUploadedCallback = e), this
        }
        _dispose(e = !1) {
            "video" === this.sourceType || "image" === this.sourceType && !this.renderer.state.isActive ? (this._loader && this._loader._removeSource(this), this.source = null) : "canvas" === this.sourceType && (this.source.width = this.source.width, this.source = null), this._parent = null;
            this.gl && !this._copiedFrom && (e || "image" !== this.sourceType || !this.renderer.state.isActive) && (this._canDraw = !1, this.renderer.cache.removeTexture(this), this.gl.activeTexture(this.gl.TEXTURE0 + this.index), this.gl.bindTexture(this.gl.TEXTURE_2D, null), this.gl.deleteTexture(this._sampler.texture))
        }
    }
    class Zl extends class {
        constructor(e, t = "anonymous") {
            this.type = "TextureLoader", (e = e && e.renderer || e) && "Renderer" === e.type ? e.gl || Al(this.type + ": Renderer WebGL context is undefined", e) : Al(this.type + ": Renderer not passed as first argument", e), this.renderer = e, this.gl = this.renderer.gl, this.crossOrigin = t, this.elements = []
        }
        _addElement(e, t, r, i) {
            const n = {
                source: e,
                texture: t,
                load: this._sourceLoaded.bind(this, e, t, r),
                error: this._sourceLoadError.bind(this, e, i)
            };
            return this.elements.push(n), n
        }
        _sourceLoadError(e, t, r) {
            t && t(e, r)
        }
        _sourceLoaded(e, t, r) {
            t._sourceLoaded || (t._onSourceLoaded(e), this._parent && (this._increment && this._increment(), this.renderer.nextRender.add(() => this._parent._onLoadingCallback && this._parent._onLoadingCallback(t)))), r && r(t)
        }
        _getSourceType(e) {
            let t;
            return "string" == typeof e ? null !== e.match(/\.(jpeg|jpg|jfif|pjpeg|pjp|gif|bmp|png|webp|svg)$/) ? t = "image" : null !== e.match(/\.(webm|mp4|ogg|mov)$/) && (t = "video") : "IMG" === e.tagName.toUpperCase() ? t = "image" : "VIDEO" === e.tagName.toUpperCase() ? t = "video" : "CANVAS" === e.tagName.toUpperCase() && (t = "canvas"), t
        }
        _createImage(e) {
            const t = new Image;
            return t.crossOrigin = this.crossOrigin, t.src = e, t
        }
        _createVideo(e) {
            const t = document.createElement("video");
            return t.crossOrigin = this.crossOrigin, t.src = e, t
        }
        loadSource(e, t, r, i) {
            switch (this._getSourceType(e)) {
                case "image":
                    this.loadImage(e, t, r, i);
                    break;
                case "video":
                    this.loadVideo(e, t, r, i);
                    break;
                case "canvas":
                    this.loadCanvas(e, t, r);
                    break;
                default:
                    this._sourceLoadError(e, i, "this source could not be converted into a texture: " + e)
            }
        }
        loadSources(e, t, r, i) {
            for (let n = 0; n < e.length; n++) this.loadSource(e[n], t, r, i)
        }
        loadImage(e, t = {}, r, i) {
            "string" == typeof e && (e = this._createImage(e)), e.crossOrigin = this.crossOrigin, this._parent && (t = Object.assign(t, this._parent._texturesOptions));
            const n = this.renderer.cache.getTextureFromSource(e);
            if (n) {
                const i = new ql(this.renderer, {
                    loader: this,
                    fromTexture: n,
                    sampler: t.sampler || e.getAttribute("data-sampler"),
                    premultiplyAlpha: t.premultiplyAlpha,
                    anisotropy: t.anisotropy,
                    generateMipmap: t.generateMipmap,
                    wrapS: t.wrapS,
                    wrapT: t.wrapT,
                    minFilter: t.minFilter,
                    magFilter: t.magFilter
                });
                return r && r(i), void(this._parent && this._addToParent(i, e, "image"))
            }
            const s = new ql(this.renderer, {
                    loader: this,
                    sampler: t.sampler || e.getAttribute("data-sampler"),
                    premultiplyAlpha: t.premultiplyAlpha,
                    anisotropy: t.anisotropy,
                    generateMipmap: t.generateMipmap,
                    wrapS: t.wrapS,
                    wrapT: t.wrapT,
                    minFilter: t.minFilter,
                    magFilter: t.magFilter
                }),
                o = this._addElement(e, s, r, i);
            e.complete ? this._sourceLoaded(e, s, r) : e.decode ? e.decode().then(this._sourceLoaded.bind(this, e, s, r)).catch(() => {
                e.addEventListener("load", o.load, !1), e.addEventListener("error", o.error, !1)
            }) : (e.addEventListener("load", o.load, !1), e.addEventListener("error", o.error, !1)), this._parent && this._addToParent(s, e, "image")
        }
        loadImages(e, t, r, i) {
            for (let n = 0; n < e.length; n++) this.loadImage(e[n], t, r, i)
        }
        loadVideo(e, t = {}, r, i) {
            "string" == typeof e && (e = this._createVideo(e)), e.preload = !0, e.muted = !0, e.loop = !0, e.playsinline = !0, e.crossOrigin = this.crossOrigin, this._parent && (t = Object.assign(t, this._parent._texturesOptions));
            const n = new ql(this.renderer, {
                    loader: this,
                    sampler: t.sampler || e.getAttribute("data-sampler"),
                    premultiplyAlpha: t.premultiplyAlpha,
                    anisotropy: t.anisotropy,
                    generateMipmap: t.generateMipmap,
                    wrapS: t.wrapS,
                    wrapT: t.wrapT,
                    minFilter: t.minFilter,
                    magFilter: t.magFilter
                }),
                s = this._addElement(e, n, r, i);
            e.addEventListener("canplaythrough", s.load, !1), e.addEventListener("error", s.error, !1), e.readyState >= e.HAVE_FUTURE_DATA && r && this._sourceLoaded(e, n, r), e.load(), this._addToParent && this._addToParent(n, e, "video"), "requestVideoFrameCallback" in HTMLVideoElement.prototype && (s.videoFrameCallback = n._videoFrameCallback.bind(n), n._videoFrameCallbackID = e.requestVideoFrameCallback(s.videoFrameCallback))
        }
        loadVideos(e, t, r, i) {
            for (let n = 0; n < e.length; n++) this.loadVideo(e[n], t, r, i)
        }
        loadCanvas(e, t = {}, r) {
            this._parent && (t = Object.assign(t, this._parent._texturesOptions));
            const i = new ql(this.renderer, {
                loader: this,
                sampler: t.sampler || e.getAttribute("data-sampler"),
                premultiplyAlpha: t.premultiplyAlpha,
                anisotropy: t.anisotropy,
                generateMipmap: t.generateMipmap,
                wrapS: t.wrapS,
                wrapT: t.wrapT,
                minFilter: t.minFilter,
                magFilter: t.magFilter
            });
            this._addElement(e, i, r, null), this._sourceLoaded(e, i, r), this._parent && this._addToParent(i, e, "canvas")
        }
        loadCanvases(e, t, r) {
            for (let i = 0; i < e.length; i++) this.loadCanvas(e[i], t, r)
        }
        _removeSource(e) {
            const t = this.elements.find(t => t.texture.uuid === e.uuid);
            t && ("image" === e.sourceType ? t.source.removeEventListener("load", t.load, !1) : "video" === e.sourceType && (t.videoFrameCallback && e._videoFrameCallbackID && t.source.cancelVideoFrameCallback(e._videoFrameCallbackID), t.source.removeEventListener("canplaythrough", t.load, !1), t.source.pause(), t.source.removeAttribute("src"), t.source.load()), t.source.removeEventListener("error", t.error, !1))
        }
    } {
        constructor(e, t, {
            sourcesLoaded: r = 0,
            sourcesToLoad: i = 0,
            complete: n = !1,
            onComplete: s = (() => {})
        } = {}) {
            super(e, t.crossOrigin), this.type = "PlaneTextureLoader", this._parent = t, "Plane" !== this._parent.type && "PingPongPlane" !== this._parent.type && "ShaderPass" !== this._parent.type && (Cl(this.type + ": Wrong parent type assigned to this loader"), this._parent = null), this.sourcesLoaded = r, this.sourcesToLoad = i, this.complete = n, this.onComplete = s
        }
        _setLoaderSize(e) {
            this.sourcesToLoad = e, 0 === this.sourcesToLoad && (this.complete = !0, this.renderer.nextRender.add(() => this.onComplete && this.onComplete()))
        }
        _increment() {
            this.sourcesLoaded++, this.sourcesLoaded >= this.sourcesToLoad && !this.complete && (this.complete = !0, this.renderer.nextRender.add(() => this.onComplete && this.onComplete()))
        }
        _addSourceToParent(e, t) {
            if ("image" === t) {
                const t = this._parent.images;
                !t.find(t => t.src === e.src) && t.push(e)
            } else if ("video" === t) {
                const t = this._parent.videos;
                !t.find(t => t.src === e.src) && t.push(e)
            } else if ("canvas" === t) {
                const t = this._parent.canvases;
                !t.find(t => t.isSameNode(e)) && t.push(e)
            }
        }
        _addToParent(e, t, r) {
            this._addSourceToParent(t, r), this._parent && e.addParent(this._parent)
        }
    }
    class Ql extends class {
        constructor(e, t = "Mesh", {
            shareProgram: r = !1,
            vertexShaderID: i,
            fragmentShaderID: n,
            vertexShader: s,
            fragmentShader: o,
            uniforms: a = {},
            widthSegments: u = 1,
            heightSegments: l = 1,
            renderOrder: h,
            depthTest: c = !0,
            cullFace: d = "back",
            texturesOptions: f = {},
            crossOrigin: p = "anonymous"
        } = {}) {
            this.type = t, (e = e && e.renderer || e) && "Renderer" === e.type || (Al(this.type + ": Curtains not passed as first argument or Curtains Renderer is missing", e), setTimeout(() => {
                this._onErrorCallback && this._onErrorCallback()
            }, 0)), this.renderer = e, this.gl = this.renderer.gl, this.gl || (this.renderer.production || Al(this.type + ": Unable to create a " + this.type + " because the Renderer WebGl context is not defined"), setTimeout(() => {
                this._onErrorCallback && this._onErrorCallback()
            }, 0)), this._canDraw = !1, this.renderOrder = h, this.shareProgram = r, this._depthTest = c, this.cullFace = d, "back" !== this.cullFace && "front" !== this.cullFace && "none" !== this.cullFace && (this.cullFace = "back"), this.textures = [], f = Object.assign({
                premultiplyAlpha: !1,
                anisotropy: 1,
                floatingPoint: "none",
                wrapS: this.gl.CLAMP_TO_EDGE,
                wrapT: this.gl.CLAMP_TO_EDGE,
                minFilter: this.gl.LINEAR,
                magFilter: this.gl.LINEAR
            }, f), this._texturesOptions = f, this.crossOrigin = p, !s && i && document.getElementById(i) && (s = document.getElementById(i).innerHTML), !o && n && document.getElementById(n) && (o = document.getElementById(n).innerHTML), this._initMesh(), u = parseInt(u), l = parseInt(l), this._geometry = new Gl(this.renderer, {
                width: u,
                height: l
            }), this._program = new Yl(this.renderer, {
                parent: this,
                vertexShader: s,
                fragmentShader: o
            }), this._program.compiled ? (this._program.createUniforms(a), this.uniforms = this._program.uniformsManager.uniforms, this._geometry.setProgram(this._program), this.renderer.onSceneChange()) : this.renderer.nextRender.add(() => this._onErrorCallback && this._onErrorCallback())
        }
        _initMesh() {
            this.uuid = Tl(), this.loader = new Zl(this.renderer, this, {
                sourcesLoaded: 0,
                initSourcesToLoad: 0,
                complete: !1,
                onComplete: () => {
                    this._onReadyCallback && this._onReadyCallback(), this.renderer.needRender()
                }
            }), this.images = [], this.videos = [], this.canvases = [], this.userData = {}, this._canDraw = !0
        }
        _restoreContext() {
            this._canDraw = !1, this._matrices && (this._matrices = null), this._program = new Yl(this.renderer, {
                parent: this,
                vertexShader: this._program.vsCode,
                fragmentShader: this._program.fsCode
            }), this._program.compiled && (this._geometry.restoreContext(this._program), this._program.createUniforms(this.uniforms), this.uniforms = this._program.uniformsManager.uniforms, this._programRestored())
        }
        setRenderTarget(e) {
            e && "RenderTarget" === e.type ? ("Plane" === this.type && this.renderer.scene.removePlane(this), this.target = e, "Plane" === this.type && this.renderer.scene.addPlane(this)) : this.renderer.production || Cl(this.type + ": Could not set the render target because the argument passed is not a RenderTarget class object", e)
        }
        setRenderOrder(e = 0) {
            (e = isNaN(e) ? this.renderOrder : parseInt(e)) !== this.renderOrder && (this.renderOrder = e, this.renderer.scene.setPlaneRenderOrder(this))
        }
        createTexture(e = {}) {
            const t = new ql(this.renderer, Object.assign(this._texturesOptions, e));
            return t.addParent(this), t
        }
        addTexture(e) {
            e && "Texture" === e.type ? e.addParent(this) : this.renderer.production || Cl(this.type + ": cannot add ", e, " to this " + this.type + " because it is not a valid texture")
        }
        loadSources(e, t = {}, r, i) {
            for (let n = 0; n < e.length; n++) this.loadSource(e[n], t, r, i)
        }
        loadSource(e, t = {}, r, i) {
            this.loader.loadSource(e, Object.assign(this._texturesOptions, t), e => {
                r && r(e)
            }, (e, t) => {
                this.renderer.production || Cl(this.type + ": this HTML tag could not be converted into a texture:", e.tagName), i && i(e, t)
            })
        }
        loadImage(e, t = {}, r, i) {
            this.loader.loadImage(e, Object.assign(this._texturesOptions, t), e => {
                r && r(e)
            }, (e, t) => {
                this.renderer.production || Cl(this.type + ": There has been an error:\n", t, "\nwhile loading this image:\n", e), i && i(e, t)
            })
        }
        loadVideo(e, t = {}, r, i) {
            this.loader.loadVideo(e, Object.assign(this._texturesOptions, t), e => {
                r && r(e)
            }, (e, t) => {
                this.renderer.production || Cl(this.type + ": There has been an error:\n", t, "\nwhile loading this video:\n", e), i && i(e, t)
            })
        }
        loadCanvas(e, t = {}, r) {
            this.loader.loadCanvas(e, Object.assign(this._texturesOptions, t), e => {
                r && r(e)
            })
        }
        loadImages(e, t = {}, r, i) {
            for (let n = 0; n < e.length; n++) this.loadImage(e[n], t, r, i)
        }
        loadVideos(e, t = {}, r, i) {
            for (let n = 0; n < e.length; n++) this.loadVideo(e[n], t, r, i)
        }
        loadCanvases(e, t = {}, r) {
            for (let i = 0; i < e.length; i++) this.loadCanvas(e[i], t, r)
        }
        playVideos() {
            for (let e = 0; e < this.textures.length; e++) {
                const t = this.textures[e];
                if ("video" === t.sourceType) {
                    const e = t.source.play();
                    void 0 !== e && e.catch(e => {
                        this.renderer.production || Cl(this.type + ": Could not play the video : ", e)
                    })
                }
            }
        }
        _draw() {
            this.renderer.setDepth(this._depthTest), this.renderer.setFaceCulling(this.cullFace), this._program.updateUniforms(), this._geometry.bindBuffers(), this.renderer.state.forceBufferUpdate = !1;
            for (let e = 0; e < this.textures.length; e++) this.textures[e]._draw();
            this._geometry.draw(), this.renderer.state.activeTexture = null, this._onAfterRenderCallback && this._onAfterRenderCallback()
        }
        onError(e) {
            return e && (this._onErrorCallback = e), this
        }
        onLoading(e) {
            return e && (this._onLoadingCallback = e), this
        }
        onReady(e) {
            return e && (this._onReadyCallback = e), this
        }
        onRender(e) {
            return e && (this._onRenderCallback = e), this
        }
        onAfterRender(e) {
            return e && (this._onAfterRenderCallback = e), this
        }
        remove() {
            this._canDraw = !1, this.target && this.renderer.bindFrameBuffer(null), this._dispose(), "Plane" === this.type ? this.renderer.removePlane(this) : "ShaderPass" === this.type && (this.target && (this.target._shaderPass = null, this.target.remove(), this.target = null), this.renderer.removeShaderPass(this))
        }
        _dispose() {
            if (this.gl) {
                this._geometry && this._geometry.dispose(), this.target && "ShaderPass" === this.type && (this.renderer.removeRenderTarget(this.target), this.textures.shift());
                for (let e = 0; e < this.textures.length; e++) this.textures[e]._dispose();
                this.textures = null
            }
        }
    } {
        constructor(e, t, r = "DOMMesh", {
            shareProgram: i,
            widthSegments: n,
            heightSegments: s,
            renderOrder: o,
            depthTest: a,
            cullFace: u,
            uniforms: l,
            vertexShaderID: h,
            fragmentShaderID: c,
            vertexShader: d,
            fragmentShader: f,
            texturesOptions: p,
            crossOrigin: m
        } = {}) {
            super(e, r, {
                shareProgram: i,
                widthSegments: n,
                heightSegments: s,
                renderOrder: o,
                depthTest: a,
                cullFace: u,
                uniforms: l,
                vertexShaderID: h = h || t && t.getAttribute("data-vs-id"),
                fragmentShaderID: c = c || t && t.getAttribute("data-fs-id"),
                vertexShader: d,
                fragmentShader: f,
                texturesOptions: p,
                crossOrigin: m
            }), this.htmlElement = t, this.htmlElement && 0 !== this.htmlElement.length || this.renderer.production || Cl(this.type + ": The HTML element you specified does not currently exists in the DOM"), this._setDocumentSizes()
        }
        _setDocumentSizes() {
            let e = this.htmlElement.getBoundingClientRect();
            this._boundingRect || (this._boundingRect = {}), this._boundingRect.document = {
                width: e.width * this.renderer.pixelRatio,
                height: e.height * this.renderer.pixelRatio,
                top: e.top * this.renderer.pixelRatio,
                left: e.left * this.renderer.pixelRatio
            }
        }
        getBoundingRect() {
            return {
                width: this._boundingRect.document.width,
                height: this._boundingRect.document.height,
                top: this._boundingRect.document.top,
                left: this._boundingRect.document.left,
                right: this._boundingRect.document.left + this._boundingRect.document.width,
                bottom: this._boundingRect.document.top + this._boundingRect.document.height
            }
        }
        resize() {
            this._setDocumentSizes(), "Plane" === this.type && (this.setPerspective(this.camera.fov, this.camera.near, this.camera.far), this._applyWorldPositions());
            for (let e = 0; e < this.textures.length; e++) this.textures[e].resize();
            this.renderer.nextRender.add(() => this._onAfterResizeCallback && this._onAfterResizeCallback())
        }
        mouseToPlaneCoords(e) {
            const t = this.scale ? this.scale : new Xl(1, 1),
                r = new Xl((this._boundingRect.document.width - this._boundingRect.document.width * t.x) / 2, (this._boundingRect.document.height - this._boundingRect.document.height * t.y) / 2),
                i = this._boundingRect.document.width * t.x / this.renderer.pixelRatio,
                n = this._boundingRect.document.height * t.y / this.renderer.pixelRatio,
                s = (this._boundingRect.document.top + r.y) / this.renderer.pixelRatio,
                o = (this._boundingRect.document.left + r.x) / this.renderer.pixelRatio;
            return new Xl((e.x - o) / i * 2 - 1, 1 - (e.y - s) / n * 2)
        }
        onAfterResize(e) {
            return e && (this._onAfterResizeCallback = e), this
        }
    }
    class Jl {
        constructor({
            fov: e = 50,
            near: t = .1,
            far: r = 150,
            width: i,
            height: n,
            pixelRatio: s = 1
        } = {}) {
            this.position = new Hl, this.projectionMatrix = new Wl, this.worldMatrix = new Wl, this.viewMatrix = new Wl, this._shouldUpdate = !1, this.setSize(), this.setPerspective(e, t, r, i, n, s)
        }
        setFov(e) {
            e = isNaN(e) ? this.fov : parseFloat(e), (e = Math.max(1, Math.min(e, 179))) !== this.fov && (this.fov = e, this.setPosition(), this.setCSSPerspective(), this._shouldUpdate = !0)
        }
        setNear(e) {
            e = isNaN(e) ? this.near : parseFloat(e), (e = Math.max(e, .01)) !== this.near && (this.near = e, this._shouldUpdate = !0)
        }
        setFar(e) {
            e = isNaN(e) ? this.far : parseFloat(e), (e = Math.max(e, 50)) !== this.far && (this.far = e, this._shouldUpdate = !0)
        }
        setPixelRatio(e) {
            e !== this.pixelRatio && (this._shouldUpdate = !0), this.pixelRatio = e
        }
        setSize(e, t) {
            e === this.width && t === this.height || (this._shouldUpdate = !0), this.width = e, this.height = t
        }
        setPerspective(e, t, r, i, n, s) {
            this.setPixelRatio(s), this.setSize(i, n), this.setFov(e), this.setNear(t), this.setFar(r), this._shouldUpdate && this.updateProjectionMatrix()
        }
        setPosition() {
            this.position.set(0, 0, 2 * Math.tan(Math.PI / 180 * .5 * this.fov)), this.worldMatrix.setFromArray([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, this.position.x, this.position.y, this.position.z, 1]), this.viewMatrix = this.viewMatrix.copy(this.worldMatrix).getInverse()
        }
        setCSSPerspective() {
            this.CSSPerspective = Math.pow(Math.pow(this.width / (2 * this.pixelRatio), 2) + Math.pow(this.height / (2 * this.pixelRatio), 2), .5) / (.5 * this.position.z)
        }
        updateProjectionMatrix() {
            const e = this.width / this.height,
                t = this.near * Math.tan(Math.PI / 180 * .5 * this.fov),
                r = 2 * t,
                i = e * r,
                n = -.5 * i,
                s = n + i,
                o = t - r,
                a = 2 * this.near / (s - n),
                u = 2 * this.near / (t - o),
                l = (s + n) / (s - n),
                h = (t + o) / (t - o),
                c = -(this.far + this.near) / (this.far - this.near),
                d = -2 * this.far * this.near / (this.far - this.near);
            this.projectionMatrix.setFromArray([a, 0, 0, 0, 0, u, 0, 0, l, h, c, -1, 0, 0, d, 0])
        }
        forceUpdate() {
            this._shouldUpdate = !0
        }
        cancelUpdate() {
            this._shouldUpdate = !1
        }
    }
    class Kl {
        constructor(e = new Float32Array([0, 0, 0, 1]), t = "XYZ") {
            this.type = "Quat", this.elements = e, this.axisOrder = t
        }
        setFromArray(e) {
            return this.elements[0] = e[0], this.elements[1] = e[1], this.elements[2] = e[2], this.elements[3] = e[3], this
        }
        setAxisOrder(e) {
            switch (e = e.toUpperCase()) {
                case "XYZ":
                case "YXZ":
                case "ZXY":
                case "ZYX":
                case "YZX":
                case "XZY":
                    this.axisOrder = e;
                    break;
                default:
                    this.axisOrder = "XYZ"
            }
            return this
        }
        copy(e) {
            return this.elements = e.elements, this.axisOrder = e.axisOrder, this
        }
        clone() {
            return (new Kl).copy(this)
        }
        equals(e) {
            return this.elements[0] === e.elements[0] && this.elements[1] === e.elements[1] && this.elements[2] === e.elements[2] && this.elements[3] === e.elements[3] && this.axisOrder === e.axisOrder
        }
        setFromVec3(e) {
            const t = .5 * e.x,
                r = .5 * e.y,
                i = .5 * e.z,
                n = Math.cos(t),
                s = Math.cos(r),
                o = Math.cos(i),
                a = Math.sin(t),
                u = Math.sin(r),
                l = Math.sin(i);
            return "XYZ" === this.axisOrder ? (this.elements[0] = a * s * o + n * u * l, this.elements[1] = n * u * o - a * s * l, this.elements[2] = n * s * l + a * u * o, this.elements[3] = n * s * o - a * u * l) : "YXZ" === this.axisOrder ? (this.elements[0] = a * s * o + n * u * l, this.elements[1] = n * u * o - a * s * l, this.elements[2] = n * s * l - a * u * o, this.elements[3] = n * s * o + a * u * l) : "ZXY" === this.axisOrder ? (this.elements[0] = a * s * o - n * u * l, this.elements[1] = n * u * o + a * s * l, this.elements[2] = n * s * l + a * u * o, this.elements[3] = n * s * o - a * u * l) : "ZYX" === this.axisOrder ? (this.elements[0] = a * s * o - n * u * l, this.elements[1] = n * u * o + a * s * l, this.elements[2] = n * s * l - a * u * o, this.elements[3] = n * s * o + a * u * l) : "YZX" === this.axisOrder ? (this.elements[0] = a * s * o + n * u * l, this.elements[1] = n * u * o + a * s * l, this.elements[2] = n * s * l - a * u * o, this.elements[3] = n * s * o - a * u * l) : "XZY" === this.axisOrder && (this.elements[0] = a * s * o - n * u * l, this.elements[1] = n * u * o - a * s * l, this.elements[2] = n * s * l + a * u * o, this.elements[3] = n * s * o + a * u * l), this
        }
    }
    class $l extends Ql {
        constructor(e, t, {
            shareProgram: r,
            widthSegments: i,
            heightSegments: n,
            renderOrder: s = 0,
            depthTest: o,
            cullFace: a,
            uniforms: u,
            vertexShaderID: l,
            fragmentShaderID: h,
            vertexShader: c,
            fragmentShader: d,
            texturesOptions: f,
            crossOrigin: p,
            alwaysDraw: m = !1,
            visible: g = !0,
            transparent: v = !1,
            drawCheckMargins: y = {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            autoloadSources: _ = !0,
            watchScroll: D = !0,
            fov: x = 50
        } = {}) {
            super(e, t, "Plane", {
                shareProgram: r,
                widthSegments: i,
                heightSegments: n,
                renderOrder: s,
                depthTest: o,
                cullFace: a,
                uniforms: u,
                vertexShaderID: l,
                fragmentShaderID: h,
                vertexShader: c,
                fragmentShader: d,
                texturesOptions: f,
                crossOrigin: p
            }), this.index = this.renderer.planes.length, this.target = null, this.alwaysDraw = m, this._shouldDraw = !0, this.visible = g, this._transparent = v, this.drawCheckMargins = y, this.autoloadSources = _, this.watchScroll = D, this._updateMVMatrix = !1, this.camera = new Jl({
                fov: x,
                width: this.renderer._boundingRect.width,
                height: this.renderer._boundingRect.height,
                pixelRatio: this.renderer.pixelRatio
            }), this._program.compiled && (this._initPlane(), this.renderer.scene.addPlane(this), this.renderer.planes.push(this))
        }
        _programRestored() {
            this.target && this.setRenderTarget(this.renderer.renderTargets[this.target.index]), this._initMatrices(), this.setPerspective(this.camera.fov, this.camera.near, this.camera.far), this._applyWorldPositions(), this.renderer.scene.addPlane(this);
            for (let e = 0; e < this.textures.length; e++) this.textures[e]._parent = this, this.textures[e]._restoreContext();
            this._canDraw = !0
        }
        _initPlane() {
            this._initTransformValues(), this._initPositions(), this.setPerspective(this.camera.fov, this.camera.near, this.camera.far), this._initSources()
        }
        _initTransformValues() {
            this.rotation = new Hl, this.quaternion = new Kl, this.relativeTranslation = new Hl, this._translation = new Hl, this.scale = new Hl(1, 1, 1), this.transformOrigin = new Hl(.5, .5, 0)
        }
        resetPlane(e) {
            this._initTransformValues(), null !== e && e ? (this.htmlElement = e, this.updatePosition()) : e || this.renderer.production || Cl(this.type + ": You are trying to reset a plane with a HTML element that does not exist. The old HTML element will be kept instead.")
        }
        removeRenderTarget() {
            this.target && (this.renderer.scene.removePlane(this), this.target = null, this.renderer.scene.addPlane(this))
        }
        _initPositions() {
            this._initMatrices(), this._applyWorldPositions()
        }
        _initMatrices() {
            this._matrices = {
                mvMatrix: {
                    name: "uMVMatrix",
                    matrix: new Wl,
                    location: this.gl.getUniformLocation(this._program.program, "uMVMatrix")
                },
                pMatrix: {
                    name: "uPMatrix",
                    matrix: new Wl,
                    location: this.gl.getUniformLocation(this._program.program, "uPMatrix")
                }
            }
        }
        _setWorldSizes() {
            const e = this._boundingRect.document.width / 2 + this._boundingRect.document.left,
                t = this._boundingRect.document.height / 2 + this._boundingRect.document.top,
                r = this.renderer._boundingRect.width / 2 + this.renderer._boundingRect.left,
                i = this.renderer._boundingRect.height / 2 + this.renderer._boundingRect.top;
            this._boundingRect.world = {
                width: this._boundingRect.document.width / this.renderer._boundingRect.width,
                height: this._boundingRect.document.height / this.renderer._boundingRect.height,
                top: (i - t) / this.renderer._boundingRect.height,
                left: (e - r) / this.renderer._boundingRect.height
            }, this._boundingRect.world.scale = {
                x: this.renderer._boundingRect.width / this.renderer._boundingRect.height * this._boundingRect.world.width / 2,
                y: this._boundingRect.world.height / 2
            }
        }
        _setPerspectiveMatrix() {
            (this.shareProgram || !this.shareProgram && this.camera._shouldUpdate) && (this.renderer.useProgram(this._program), this.gl.uniformMatrix4fv(this._matrices.pMatrix.location, !1, this._matrices.pMatrix.matrix.elements)), this.camera.cancelUpdate()
        }
        setPerspective(e, t, r) {
            this.camera.setPerspective(e, t, r, this.renderer._boundingRect.width, this.renderer._boundingRect.height, this.renderer.pixelRatio), this.renderer.state.isContextLost && this.camera.forceUpdate(), this._matrices.pMatrix.matrix = this.camera.projectionMatrix, this._updateMVMatrix = this.camera._shouldUpdate
        }
        _setMVMatrix() {
            if (this._updateMVMatrix) {
                this._translation.z = -(1 - this.relativeTranslation.z / this.camera.CSSPerspective) / this.camera.position.z;
                const e = new Hl((2 * this.transformOrigin.x - 1) * this._boundingRect.world.scale.x, -(2 * this.transformOrigin.y - 1) * this._boundingRect.world.scale.y, this.transformOrigin.z);
                let t = (new Wl).composeFromOrigin(this._translation, this.quaternion, this.scale, e);
                const r = new Wl([this._boundingRect.world.scale.x, 0, 0, 0, 0, this._boundingRect.world.scale.y, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
                this._matrices.mvMatrix.matrix = t.multiply(r), this._matrices.mVPMatrix = this._matrices.pMatrix.matrix.multiply(this._matrices.mvMatrix.matrix), this.alwaysDraw || this._shouldDrawCheck()
            }(this.shareProgram || !this.shareProgram && this._updateMVMatrix) && (this.renderer.useProgram(this._program), this.gl.uniformMatrix4fv(this._matrices.mvMatrix.location, !1, this._matrices.mvMatrix.matrix.elements)), this._updateMVMatrix = !1
        }
        setScale(e) {
            if (e.type && "Vec2" === e.type) {
                if (e.sanitizeNaNValuesWith(this.scale).max(new Xl(.001, .001)), e.x !== this.scale.x || e.y !== this.scale.y) {
                    this.scale.set(e.x, e.y, 1);
                    for (let e = 0; e < this.textures.length; e++) this.textures[e].resize();
                    this._updateMVMatrix = !0
                }
            } else this.renderer.production || Cl(this.type + ": Cannot set scale because the parameter passed is not of Vec2 type:", e)
        }
        setRotation(e) {
            e.type && "Vec3" === e.type ? (e.sanitizeNaNValuesWith(this.rotation), e.equals(this.rotation) || (this.rotation.copy(e), this.quaternion.setFromVec3(this.rotation), this._updateMVMatrix = !0)) : this.renderer.production || Cl(this.type + ": Cannot set rotation because the parameter passed is not of Vec3 type:", e)
        }
        setTransformOrigin(e) {
            e.type && "Vec3" === e.type ? (e.sanitizeNaNValuesWith(this.transformOrigin), e.equals(this.transformOrigin) || (this.transformOrigin.copy(e), this._updateMVMatrix = !0)) : this.renderer.production || Cl(this.type + ": Cannot set transform origin because the parameter passed is not of Vec3 type:", e)
        }
        _setTranslation() {
            let e = new Hl;
            this.relativeTranslation.equals(e) || (e = this._documentToWorldSpace(this.relativeTranslation)), this._translation.set(this._boundingRect.world.left + e.x, this._boundingRect.world.top + e.y, this._translation.z), this._updateMVMatrix = !0
        }
        setRelativePosition(e) {
            this.renderer.production || Cl(this.type + ": setRelativePosition() is deprecated, use setRelativeTranslation() instead"), this.setRelativeTranslation(e)
        }
        setRelativeTranslation(e) {
            e.type && "Vec3" === e.type ? (e.sanitizeNaNValuesWith(this.relativeTranslation), e.equals(this.relativeTranslation) || (this.relativeTranslation.copy(e), this._setTranslation())) : this.renderer.production || Cl(this.type + ": Cannot set translation because the parameter passed is not of Vec3 type:", e)
        }
        _documentToWorldSpace(e) {
            return new Hl(e.x / (this.renderer._boundingRect.width / this.renderer.pixelRatio) * (this.renderer._boundingRect.width / this.renderer._boundingRect.height), -e.y / (this.renderer._boundingRect.height / this.renderer.pixelRatio), e.z)
        }
        _getIntersection(e, t) {
            let r = t.clone().sub(e),
                i = e.clone();
            for (; i.z > -1;) i.add(r);
            return i
        }
        _getNearPlaneIntersections(e, t, r) {
            if (1 === r.length) 0 === r[0] ? (t[0] = this._getIntersection(t[1], new Hl(.95, 1, 0).applyMat4(this._matrices.mVPMatrix)), t.push(this._getIntersection(t[3], new Hl(-1, -.95, 0).applyMat4(this._matrices.mVPMatrix)))) : 1 === r[0] ? (t[1] = this._getIntersection(t[0], new Hl(-.95, 1, 0).applyMat4(this._matrices.mVPMatrix)), t.push(this._getIntersection(t[2], new Hl(1, -.95, 0).applyMat4(this._matrices.mVPMatrix)))) : 2 === r[0] ? (t[2] = this._getIntersection(t[3], new Hl(-.95, -1, 0).applyMat4(this._matrices.mVPMatrix)), t.push(this._getIntersection(t[1], new Hl(1, .95, 0).applyMat4(this._matrices.mVPMatrix)))) : 3 === r[0] && (t[3] = this._getIntersection(t[2], new Hl(.95, -1, 0).applyMat4(this._matrices.mVPMatrix)), t.push(this._getIntersection(t[0], new Hl(-1, .95, 0).applyMat4(this._matrices.mVPMatrix))));
            else if (2 === r.length) 0 === r[0] && 1 === r[1] ? (t[0] = this._getIntersection(t[3], new Hl(-1, -.95, 0).applyMat4(this._matrices.mVPMatrix)), t[1] = this._getIntersection(t[2], new Hl(1, -.95, 0).applyMat4(this._matrices.mVPMatrix))) : 1 === r[0] && 2 === r[1] ? (t[1] = this._getIntersection(t[0], new Hl(-.95, 1, 0).applyMat4(this._matrices.mVPMatrix)), t[2] = this._getIntersection(t[3], new Hl(-.95, -1, 0).applyMat4(this._matrices.mVPMatrix))) : 2 === r[0] && 3 === r[1] ? (t[2] = this._getIntersection(t[1], new Hl(1, .95, 0).applyMat4(this._matrices.mVPMatrix)), t[3] = this._getIntersection(t[0], new Hl(-1, .95, 0).applyMat4(this._matrices.mVPMatrix))) : 0 === r[0] && 3 === r[1] && (t[0] = this._getIntersection(t[1], new Hl(.95, 1, 0).applyMat4(this._matrices.mVPMatrix)), t[3] = this._getIntersection(t[2], new Hl(.95, -1, 0).applyMat4(this._matrices.mVPMatrix)));
            else if (3 === r.length) {
                let i = 0;
                for (let t = 0; t < e.length; t++) r.includes(t) || (i = t);
                t = [t[i]], 0 === i ? (t.push(this._getIntersection(t[0], new Hl(-.95, 1, 0).applyMat4(this._matrices.mVPMatrix))), t.push(this._getIntersection(t[0], new Hl(-1, .95, 0).applyMat4(this._matrices.mVPMatrix)))) : 1 === i ? (t.push(this._getIntersection(t[0], new Hl(.95, 1, 0).applyMat4(this._matrices.mVPMatrix))), t.push(this._getIntersection(t[0], new Hl(1, .95, 0).applyMat4(this._matrices.mVPMatrix)))) : 2 === i ? (t.push(this._getIntersection(t[0], new Hl(.95, -1, 0).applyMat4(this._matrices.mVPMatrix))), t.push(this._getIntersection(t[0], new Hl(1, -.95, 0).applyMat4(this._matrices.mVPMatrix)))) : 3 === i && (t.push(this._getIntersection(t[0], new Hl(-.95, -1, 0).applyMat4(this._matrices.mVPMatrix))), t.push(this._getIntersection(t[0], new Hl(-1.95, 0).applyMat4(this._matrices.mVPMatrix))))
            } else
                for (let r = 0; r < e.length; r++) t[r][0] = 1e4, t[r][1] = 1e4;
            return t
        }
        _getWorldCoords() {
            const e = [new Hl(-1, 1, 0), new Hl(1, 1, 0), new Hl(1, -1, 0), new Hl(-1, -1, 0)];
            let t = [],
                r = [];
            for (let i = 0; i < e.length; i++) {
                const n = e[i].applyMat4(this._matrices.mVPMatrix);
                t.push(n), Math.abs(n.z) > 1 && r.push(i)
            }
            r.length && (t = this._getNearPlaneIntersections(e, t, r));
            let i = 1 / 0,
                n = -1 / 0,
                s = 1 / 0,
                o = -1 / 0;
            for (let e = 0; e < t.length; e++) {
                const r = t[e];
                r.x < i && (i = r.x), r.x > n && (n = r.x), r.y < s && (s = r.y), r.y > o && (o = r.y)
            }
            return {
                top: o,
                right: n,
                bottom: s,
                left: i
            }
        }
        _computeWebGLBoundingRect() {
            const e = this._getWorldCoords();
            let t = {
                top: 1 - (e.top + 1) / 2,
                right: (e.right + 1) / 2,
                bottom: 1 - (e.bottom + 1) / 2,
                left: (e.left + 1) / 2
            };
            t.width = t.right - t.left, t.height = t.bottom - t.top, this._boundingRect.worldToDocument = {
                width: t.width * this.renderer._boundingRect.width,
                height: t.height * this.renderer._boundingRect.height,
                top: t.top * this.renderer._boundingRect.height + this.renderer._boundingRect.top,
                left: t.left * this.renderer._boundingRect.width + this.renderer._boundingRect.left,
                right: t.left * this.renderer._boundingRect.width + this.renderer._boundingRect.left + t.width * this.renderer._boundingRect.width,
                bottom: t.top * this.renderer._boundingRect.height + this.renderer._boundingRect.top + t.height * this.renderer._boundingRect.height
            }
        }
        getWebGLBoundingRect() {
            return this._matrices.mVPMatrix ? (this._boundingRect.worldToDocument && !this.alwaysDraw || this._computeWebGLBoundingRect(), this._boundingRect.worldToDocument) : this._boundingRect.document
        }
        _getWebGLDrawRect() {
            return this._computeWebGLBoundingRect(), {
                top: this._boundingRect.worldToDocument.top - this.drawCheckMargins.top,
                right: this._boundingRect.worldToDocument.right + this.drawCheckMargins.right,
                bottom: this._boundingRect.worldToDocument.bottom + this.drawCheckMargins.bottom,
                left: this._boundingRect.worldToDocument.left - this.drawCheckMargins.left
            }
        }
        _shouldDrawCheck() {
            const e = this._getWebGLDrawRect();
            Math.round(e.right) <= this.renderer._boundingRect.left || Math.round(e.left) >= this.renderer._boundingRect.left + this.renderer._boundingRect.width || Math.round(e.bottom) <= this.renderer._boundingRect.top || Math.round(e.top) >= this.renderer._boundingRect.top + this.renderer._boundingRect.height ? this._shouldDraw && (this._shouldDraw = !1, this.renderer.nextRender.add(() => this._onLeaveViewCallback && this._onLeaveViewCallback())) : (this._shouldDraw || this.renderer.nextRender.add(() => this._onReEnterViewCallback && this._onReEnterViewCallback()), this._shouldDraw = !0)
        }
        isDrawn() {
            return this._canDraw && this.visible && (this._shouldDraw || this.alwaysDraw)
        }
        _applyWorldPositions() {
            this._setWorldSizes(), this._setTranslation()
        }
        updatePosition() {
            this._setDocumentSizes(), this._applyWorldPositions()
        }
        updateScrollPosition(e, t) {
            (e || t) && (this._boundingRect.document.top += t * this.renderer.pixelRatio, this._boundingRect.document.left += e * this.renderer.pixelRatio, this._applyWorldPositions())
        }
        enableDepthTest(e) {
            this._depthTest = e
        }
        moveToFront() {
            this.renderer.production || Cl(this.type + ": moveToFront() is deprecated, please use setRenderOrder() instead"), this.setRenderOrder()
        }
        _initSources() {
            let e = 0;
            if (this.autoloadSources) {
                const t = [];
                for (let e = 0; e < this.htmlElement.getElementsByTagName("img").length; e++) t.push(this.htmlElement.getElementsByTagName("img")[e]);
                t.length > 0 && this.loadImages(t);
                const r = [];
                for (let e = 0; e < this.htmlElement.getElementsByTagName("video").length; e++) r.push(this.htmlElement.getElementsByTagName("video")[e]);
                r.length > 0 && this.loadVideos(r);
                const i = [];
                for (let e = 0; e < this.htmlElement.getElementsByTagName("canvas").length; e++) i.push(this.htmlElement.getElementsByTagName("canvas")[e]);
                i.length > 0 && this.loadCanvases(i), e = t.length + r.length + i.length
            }
            this.loader._setLoaderSize(e), this._canDraw = !0
        }
        _startDrawing() {
            this._canDraw && (this._onRenderCallback && this._onRenderCallback(), this.target ? this.renderer.bindFrameBuffer(this.target) : null === this.renderer.state.scenePassIndex && this.renderer.bindFrameBuffer(null), this._setPerspectiveMatrix(), this._setMVMatrix(), (this.alwaysDraw || this._shouldDraw) && this.visible && this._draw())
        }
        onReEnterView(e) {
            return e && (this._onReEnterViewCallback = e), this
        }
        onLeaveView(e) {
            return e && (this._onLeaveViewCallback = e), this
        }
    }
    class eh {
        constructor(e, {
            shaderPass: t,
            depth: r = !1,
            clear: i = !0,
            minWidth: n = 1024,
            minHeight: s = 1024,
            texturesOptions: o = {}
        } = {}) {
            this.type = "RenderTarget", (e = e && e.renderer || e) && "Renderer" === e.type ? e.gl || Al(this.type + ": Renderer WebGL context is undefined", e) : Al(this.type + ": Renderer not passed as first argument", e), this.renderer = e, this.gl = this.renderer.gl, this.index = this.renderer.renderTargets.length, this._shaderPass = t, this._depth = r, this._shouldClear = i, this._minSize = {
                width: n * this.renderer.pixelRatio,
                height: s * this.renderer.pixelRatio
            }, o = Object.assign({
                sampler: "uRenderTexture",
                isFBOTexture: !0,
                premultiplyAlpha: !1,
                anisotropy: 1,
                generateMipmap: !1,
                floatingPoint: "none",
                wrapS: this.gl.CLAMP_TO_EDGE,
                wrapT: this.gl.CLAMP_TO_EDGE,
                minFilter: this.gl.LINEAR,
                magFilter: this.gl.LINEAR
            }, o), this._texturesOptions = o, this.userData = {}, this.uuid = Tl(), this.renderer.renderTargets.push(this), this.renderer.onSceneChange(), this._initRenderTarget()
        }
        _initRenderTarget() {
            this._setSize(), this.textures = [], this._createFrameBuffer()
        }
        _restoreContext() {
            this._setSize(), this._createFrameBuffer()
        }
        _setSize() {
            this._shaderPass && this._shaderPass._isScenePass ? this._size = {
                width: this.renderer._boundingRect.width,
                height: this.renderer._boundingRect.height
            } : this._size = {
                width: Math.max(this._minSize.width, this.renderer._boundingRect.width),
                height: Math.max(this._minSize.height, this.renderer._boundingRect.height)
            }
        }
        resize() {
            this._shaderPass && (this._setSize(), this.textures[0].resize(), this.renderer.bindFrameBuffer(this, !0), this._depth && this._bindDepthBuffer(), this.renderer.bindFrameBuffer(null))
        }
        _bindDepthBuffer() {
            this._depthBuffer && (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this._depthBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, this._size.width, this._size.height), this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this._depthBuffer))
        }
        _createFrameBuffer() {
            if (this._frameBuffer = this.gl.createFramebuffer(), this.renderer.bindFrameBuffer(this, !0), this.textures.length) this.textures[0]._parent = this, this.textures[0]._restoreContext();
            else {
                new ql(this.renderer, this._texturesOptions).addParent(this)
            }
            this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this.textures[0]._sampler.texture, 0), this._depth && (this._depthBuffer = this.gl.createRenderbuffer(), this._bindDepthBuffer()), this.renderer.bindFrameBuffer(null)
        }
        getTexture() {
            return this.textures[0]
        }
        remove() {
            this._shaderPass ? this.renderer.production || Cl(this.type + ": You're trying to remove a RenderTarget attached to a ShaderPass. You should remove that ShaderPass instead:", this._shaderPass) : (this._dispose(), this.renderer.removeRenderTarget(this))
        }
        _dispose() {
            this._frameBuffer && (this.gl.deleteFramebuffer(this._frameBuffer), this._frameBuffer = null), this._depthBuffer && (this.gl.deleteRenderbuffer(this._depthBuffer), this._depthBuffer = null), this.textures[0]._dispose(), this.textures = []
        }
    }
    class th extends $l {
        constructor(e, t, {
            sampler: r = "uPingPongTexture",
            shareProgram: i,
            widthSegments: n,
            heightSegments: s,
            renderOrder: o,
            depthTest: a,
            cullFace: u,
            uniforms: l,
            vertexShaderID: h,
            fragmentShaderID: c,
            vertexShader: d,
            fragmentShader: f,
            texturesOptions: p,
            crossOrigin: m,
            alwaysDraw: g,
            visible: v,
            transparent: y,
            drawCheckMargins: _,
            autoloadSources: D,
            watchScroll: x,
            fov: w
        } = {}) {
            super(e, t, {
                shareProgram: i,
                widthSegments: n,
                heightSegments: s,
                renderOrder: o,
                depthTest: !1,
                cullFace: u,
                uniforms: l,
                vertexShaderID: h,
                fragmentShaderID: c,
                vertexShader: d,
                fragmentShader: f,
                texturesOptions: p,
                crossOrigin: m,
                alwaysDraw: g,
                visible: v,
                transparent: y,
                drawCheckMargins: _,
                autoloadSources: !1,
                watchScroll: x,
                fov: w
            }), this.renderer.scene.removePlane(this), this.type = "PingPongPlane", this.renderer.scene.addPlane(this), this.readPass = new eh(e, {
                depth: !1,
                clear: !1,
                texturesOptions: p
            }), this.writePass = new eh(e, {
                depth: !1,
                clear: !1,
                texturesOptions: p
            });
            this.createTexture({
                sampler: r,
                fromTexture: this.readPass.getTexture()
            });
            this._onRenderCallback = () => {
                this.writePass && this.setRenderTarget(this.writePass), this._onPingPongRenderCallback && this._onPingPongRenderCallback()
            }, this._onAfterRenderCallback = () => {
                this.readPass && this.writePass && this.textures[0] && this._swapPasses(), this._onPingPongAfterRenderCallback && this._onPingPongAfterRenderCallback()
            }
        }
        _swapPasses() {
            const e = this.readPass;
            this.readPass = this.writePass, this.writePass = e, this.textures[0].copy(this.readPass.getTexture())
        }
        getTexture() {
            return this.textures[0]
        }
        onRender(e) {
            return e && (this._onPingPongRenderCallback = e), this
        }
        onAfterRender(e) {
            return e && (this._onPingPongAfterRenderCallback = e), this
        }
        remove() {
            this._canDraw = !1, this.target = null, this.renderer.bindFrameBuffer(null), this.writePass._frameBuffer && (this.gl.deleteFramebuffer(this.writePass._frameBuffer), this.writePass._frameBuffer = null), this.writePass._depthBuffer && (this.gl.deleteRenderbuffer(this.writePass._depthBuffer), this.writePass._depthBuffer = null), this.renderer.removeRenderTarget(this.writePass), this.readPass._frameBuffer && (this.gl.deleteFramebuffer(this.readPass._frameBuffer), this.readPass._frameBuffer = null), this.readPass._depthBuffer && (this.gl.deleteRenderbuffer(this.readPass._depthBuffer), this.readPass._depthBuffer = null), this.renderer.removeRenderTarget(this.readPass), this._dispose(), this.renderer.removePlane(this)
        }
    }
    let rh = 10,
        ih = 10;
    class nh {
        constructor() {
            if (As()) return;
            this.updateVelocity = !1, this.isEnabled = !1, this.onScreenResize = this.onScreenResize.bind(this), this.onMouseMove = this.onMouseMove.bind(this), this.hasGL = !0, this.curtains = new Ol({
                production: !0,
                watchScroll: !1,
                container: "canvas",
                antialias: !1,
                pixelRatio: Math.min(1.5, window.devicePixelRatio)
            }).onError(() => {
                this.hasGL = !1, document.body.classList.add("no-curtains"), document.querySelector(".curtain__container").classList.add("curtain__container--is-hidden")
            }).onContextLost(() => {
                this.curtains.restoreContext()
            });
            const e = window.innerWidth,
                t = window.innerHeight;
            this.mouse = new Xl(e / 2, t / 2), this.lastMouse = this.mouse.clone(), this.velocity = new Xl, this.targetX = this.mouse.x, this.targetY = this.mouse.y, this.currentX = this.targetX, this.currentY = this.targetY, window.addEventListener("resize", this.onScreenResize), this.planeElement = document.querySelector(".curtain__container");
            const r = {
                sampler: "uFlowMap",
                vertexShader: "\n#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n\n// default mandatory variables\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\n// custom variables\nvarying vec3 vVertexPosition;\nvarying vec2 vTextureCoord;\n\nvoid main() {\n\n    vec3 vertexPosition = aVertexPosition;\n\n    gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);\n\n    // varyings\n    vTextureCoord = aTextureCoord;\n    vVertexPosition = vertexPosition;\n}\n",
                fragmentShader: "\n#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n\nvarying vec3 vVertexPosition;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uFlowMap;\n\nuniform vec2 uMousePosition;\nuniform float uFalloff;\nuniform float uAlpha;\nuniform float uDissipation;\nuniform float uCursorGrow;\n\nuniform vec2 uVelocity;\nuniform float uAspect;\n\nvoid main() {\n    vec2 textCoords = vTextureCoord;\n    \n    \n    /*** comment this whole block for a regular mouse flow effect ***/\n    \n    // convert to -1 -> 1\n    textCoords = textCoords * 2.0 - 1.0;\n    \n    // make the cursor grow with time\n    textCoords /= uCursorGrow;\n    // adjust cursor position based on its growth\n    textCoords += uCursorGrow * uMousePosition / (1.0 / (uCursorGrow - 1.0) * pow(uCursorGrow, 2.0));\n\n    // convert back to 0 -> 1\n    textCoords = (textCoords + 1.0) / 2.0;\n    \n    /*** end of whole block commenting for a regular mouse flow effect ***/\n\n\n    vec4 color = texture2D(uFlowMap, textCoords) * uDissipation;\n     color = vec4(0.0, 0.0, 0.0, 1.0) * uDissipation;\n\n    vec2 mouseTexPos = (uMousePosition + 1.0) * 0.5;\n    vec2 cursor = vTextureCoord - mouseTexPos;\n    cursor.x *= uAspect;\n\n    vec3 stamp = vec3(uVelocity * vec2(1.0, -1.0), 1.0 - pow(1.0 - min(1.0, length(uVelocity)), 3.0));\n    float falloff = smoothstep(uFalloff, 0.0, length(cursor)) * uAlpha;\n    color.rgb = mix(color.rgb, stamp, vec3(falloff));\n\n    // handle premultiply alpha\n    color.rgb = color.rgb * color.a;\n\n    gl_FragColor = color;\n}\n",
                texturesOptions: {
                    floatingPoint: "half-float"
                },
                uniforms: {
                    mousePosition: {
                        name: "uMousePosition",
                        type: "2f",
                        value: this.mouse
                    },
                    fallOff: {
                        name: "uFalloff",
                        type: "1f",
                        value: .85
                    },
                    cursorGrow: {
                        name: "uCursorGrow",
                        type: "1f",
                        value: .85
                    },
                    alpha: {
                        name: "uAlpha",
                        type: "1f",
                        value: 1
                    },
                    dissipation: {
                        name: "uDissipation",
                        type: "1f",
                        value: .65
                    },
                    velocity: {
                        name: "uVelocity",
                        type: "2f",
                        value: this.velocity
                    },
                    aspect: {
                        name: "uAspect",
                        type: "1f",
                        value: e / t
                    }
                }
            };
            this.flowMapPlane = new th(this.curtains, this.planeElement, r), this.flowMapPlane.onRender(() => {
                this.isEnabled && (this.flowMapPlane.uniforms.mousePosition.value = this.flowMapPlane.mouseToPlaneCoords(this.mouse), this.updateVelocity || this.velocity.set(this.curtains.lerp(this.velocity.x, 0, .5), this.curtains.lerp(this.velocity.y, 0, .5)), this.updateVelocity = !1, this.flowMapPlane.uniforms.velocity.value = new Xl(this.curtains.lerp(this.velocity.x, 0, .1), this.curtains.lerp(this.velocity.y, 0, .1)))
            }), this.plane = new $l(this.curtains, this.planeElement, {
                vertexShader: "\n                #ifdef GL_FRAGMENT_PRECISION_HIGH\n                precision highp float;\n                #else\n                precision mediump float;\n                #endif\n            \n                // default mandatory variables\n                attribute vec3 aVertexPosition;\n                attribute vec2 aTextureCoord;\n            \n                uniform mat4 uMVMatrix;\n                uniform mat4 uPMatrix;\n            \n                uniform mat4 planeTextureMatrix;\n            \n                // custom variables\n                varying vec3 vVertexPosition;\n                varying vec2 vPlaneTextureCoord;\n                varying vec2 vTextureCoord;\n            \n                void main() {\n            \n                    vec3 vertexPosition = aVertexPosition;\n            \n                    gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);\n            \n                    // varyings\n                    vTextureCoord = aTextureCoord;\n                    vPlaneTextureCoord = (planeTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;\n                    vVertexPosition = vertexPosition;\n                }\n            ",
                fragmentShader: "\n                #ifdef GL_FRAGMENT_PRECISION_HIGH\n                precision highp float;\n                #else\n                precision mediump float;\n                #endif\n            \n                varying vec3 vVertexPosition;\n                varying vec2 vPlaneTextureCoord;\n                varying vec2 vTextureCoord;\n            \n                uniform sampler2D planeTexture;\n                uniform sampler2D uFlowTexture;\n            \n                void main() {\n                    // our flowmap\n                    vec4 flowTexture = texture2D(uFlowTexture, vTextureCoord);\n            \n                    // distort our image texture based on the flowmap values\n                    vec2 distortedCoords = vPlaneTextureCoord;\n                    distortedCoords -= flowTexture.xy * 0.1;\n            \n                    // get our final texture based on the displaced coords\n                    vec4 texture = texture2D(planeTexture, distortedCoords);\n            \n                    // switch between this 2 lines to see what we have drawn onto our flowmap\n                    //gl_FragColor = flowTexture;\n                    gl_FragColor = texture;\n                }\n            "
            }).onReady(() => {
                const e = document.querySelector(".curtain__image");
                rh = e.naturalWidth, ih = e.naturalHeight, e.classList.add("curtain__image--is-hidden"), this.onScreenResize()
            }), this.plane.createTexture({
                sampler: "uFlowTexture",
                fromTexture: this.flowMapPlane.getTexture()
            }), this.onScreenResize()
        }
        onScreenResize() {
            const e = rh,
                t = e / ih,
                r = Math.min(e, .95 * window.innerWidth / e * e),
                i = r / t,
                n = document.querySelector(".curtain__container");
            n.style.width = r + "px", n.style.height = i + "px";
            const s = window.innerWidth < 812 ? 12 : 18,
                o = (1 - r / rh) * s;
            this.plane.setRelativeTranslation(new Hl(o, o, 0)), this.curtains.resize()
        }
        onMouseMove(e) {
            if (this.lastMouse.copy(this.mouse), e.targetTouches) this.mouse.set(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
            else if (Ts()) {
                const t = .2;
                this.targetX = e.clientX, this.targetY = e.clientY, this.currentX += (this.targetX - this.currentX) * t, this.currentY += (this.targetY - this.currentY) * t, this.mouse.set(this.currentX, this.currentY)
            } else this.mouse.set(e.clientX, e.clientY);
            this.velocity.set((this.mouse.x - this.lastMouse.x) / 16, (this.mouse.y - this.lastMouse.y) / 16), this.updateVelocity = !0
        }
        getCanvas() {
            return this.curtains && this.hasGL ? document.getElementById("piksel-logo-container") : null
        }
        enable(e) {
            this.isEnabled = e, this.curtains && (e ? (this.curtains.enableDrawing(), window.addEventListener("mousemove", this.onMouseMove), window.addEventListener("touchmove", this.onMouseMove, {
                passive: !0
            })) : (this.curtains.disableDrawing(), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onMouseMove)))
        }
    }
    class sh {
        constructor(e) {}
        init() {
            var e = ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzUyMjRCNzkyQUFEMTFFQjkyMjRFNEVBNEI5ODIyQjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzUyMjRCN0EyQUFEMTFFQjkyMjRFNEVBNEI5ODIyQjAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNTIyNEI3NzJBQUQxMUVCOTIyNEU0RUE0Qjk4MjJCMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNTIyNEI3ODJBQUQxMUVCOTIyNEU0RUE0Qjk4MjJCMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph/Ldg0AAAAGUExURTRsOwAAAEFkGZgAAAAnSURBVHja7MExAQAAAMKg9U9tCU+gAAAAAAAAAAAAAAAAAAA+JsAAOLgAAcu2C8AAAAAASUVORK5CYII=", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzUyMjRCN0QyQUFEMTFFQjkyMjRFNEVBNEI5ODIyQjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzUyMjRCN0UyQUFEMTFFQjkyMjRFNEVBNEI5ODIyQjAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNTIyNEI3QjJBQUQxMUVCOTIyNEU0RUE0Qjk4MjJCMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNTIyNEI3QzJBQUQxMUVCOTIyNEU0RUE0Qjk4MjJCMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PutIZDUAAAAGUExURcC7pwAAAAMkv8IAAAAnSURBVHja7MExAQAAAMKg9U9tCU+gAAAAAAAAAAAAAAAAAAA+JsAAOLgAAcu2C8AAAAAASUVORK5CYII=", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDZFN0RGOTYyQUFEMTFFQjkyMjRFNEVBNEI5ODIyQjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDZFN0RGOTcyQUFEMTFFQjkyMjRFNEVBNEI5ODIyQjAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpENkU3REY5NDJBQUQxMUVCOTIyNEU0RUE0Qjk4MjJCMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpENkU3REY5NTJBQUQxMUVCOTIyNEU0RUE0Qjk4MjJCMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlFGP+MAAAAGUExURQAAAP///6XZn90AAAAnSURBVHja7MExAQAAAMKg9U9tCU+gAAAAAAAAAAAAAAAAAAA+JsAAOLgAAcu2C8AAAAAASUVORK5CYII=", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDZFN0RGOTIyQUFEMTFFQjkyMjRFNEVBNEI5ODIyQjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDZFN0RGOTMyQUFEMTFFQjkyMjRFNEVBNEI5ODIyQjAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNTIyNEI3RjJBQUQxMUVCOTIyNEU0RUE0Qjk4MjJCMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNTIyNEI4MDJBQUQxMUVCOTIyNEU0RUE0Qjk4MjJCMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pk89T08AAAAGUExURezo5wAAAJftl6kAAAAnSURBVHja7MExAQAAAMKg9U9tCU+gAAAAAAAAAAAAAAAAAAA+JsAAOLgAAcu2C8AAAAAASUVORK5CYII="],
                t = 0;
            setInterval((function() {
                document.querySelector(".shortcut-icon").href = e[t], t == e.length - 1 ? t = 0 : t++
            }), 750)
        }
        destroy() {}
    }
    di.registerPlugin(us);
    class oh {
        constructor(e) {
            const t = {};
            this.observer = new IntersectionObserver(e => {
                e.forEach(e => {
                    if (e.intersectionRatio < .5) {
                        const r = t[e.target];
                        void 0 !== r && r.then(() => {
                            e.target.pause()
                        }).catch(e => {
                            console.warn("Auto play prevented, no promise found")
                        })
                    } else t[e.target] = e.target.play()
                })
            }, {
                threshold: [0, .25, .5, .75, 1]
            });
            [...e.getElementsByTagName("video")].forEach(e => {
                As() || (e.controls = !1, this.observer.observe(e))
            })
        }
        destroy() {
            this.observer.disconnect()
        }
    }
    class ah {
        constructor({
            form: e
        }) {
            e && (this.onFormSubmit = this.onFormSubmit.bind(this), this.newsLetterSubscribe = new Di({
                form: e,
                emailField: e.querySelector("#mce-EMAIL"),
                subscribeField: e.querySelector("#newsletter-subscribe"),
                interestField: e.querySelector("#project-briefing-form")
            }), this.form = e, this.emailField = this.form.querySelector("#mce-EMAIL"), this.nameField = this.form.querySelector("#mce-FNAME"), this.companyField = this.form.querySelector("#mce-COMPANY"), this.phoneField = this.form.querySelector("#mce-PHONE"), this.messageField = this.form.querySelector("#mce-MESSAGE"), this.statusField = this.form.querySelector("#mc-status"), this.form.addEventListener("submit", this.onFormSubmit, !1), document.querySelector("input[name='project-briefing-form']").onchange = function() {
                this.checked ? (document.getElementById("newsletter-subscribe").checked = !0, document.getElementById("newsletter-subscribe").disabled = !0) : document.getElementById("newsletter-subscribe").disabled = !1
            })
        }
        onFormSubmit(e) {
            if (e.target.classList.contains("validate")) {
                e.preventDefault();
                var t = {
                    name: this.nameField.value,
                    company: this.companyField.value,
                    email: this.emailField.value,
                    phone: this.phoneField.value,
                    message: this.messageField.value,
                    action: "contact"
                };
                (async function(e = "", t = {}) {
                    return (await fetch(e, {
                        method: "POST",
                        cache: "no-cache",
                        credentials: "same-origin",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: new URLSearchParams(t)
                    })).json()
                })(ajaxurl, t).then(e => {
                    if (this.statusField) {
                        const t = "success" === e.status ? "Thank you, one of our staff members will be in touch shortly." : "Oops, something went wrong!";
                        this.statusField.innerHTML = t, "success" === e.status && this.form.reset()
                    }
                })
            }
        }
        destroy() {
            this.form && this.form.removeEventListener("submit", this.onFormSubmit, !1), this.newsLetterSubscribe.destroy()
        }
    }
    class uh extends Ms {
        constructor(e, {
            willUseIntroAnimation: t
        }) {
            super(e, t), this.contactForm = new ah({
                form: e.querySelector("#mc-embedded-contact-form")
            })
        }
        destroy() {
            this.contactForm.destroy()
        }
    }
    const lh = {};
    console.log("(ノಠ益ಠ)ノ彡"), console.log("Website by deduxer studio."), console.log("WWW 1.0");
    const hh = [];
    let ch, dh, fh, ph, mh, gh, vh;
    const yh = e => {
            const t = e.next.container;
            if ((e => {
                    ch && ch.destroy(), ch = new _i(e), ch.init()
                })(t), (e => {
                    hh.forEach(e => e.destroy());
                    e.querySelectorAll("[data-is-subscribe-form]").forEach(e => {
                        const t = new Di({
                            form: e.querySelector("#mc-embedded-subscribe-form"),
                            emailField: e.querySelector("#mce-EMAIL"),
                            subscribeField: e.querySelector("#newsletter-subscribe"),
                            interestField: e.querySelector("#project-briefing-form"),
                            statusField: e.querySelector("#mc-status")
                        });
                        hh.push(t)
                    })
                })(t), ((e = !0) => {
                    const t = document.querySelectorAll("[data-vimeo]"),
                        r = document.getElementById("video-player"),
                        i = document.getElementById("video-player--wrap"),
                        n = document.getElementById("video-player-heading");
                    di.set(r, {
                        y: "100%"
                    }), di.set(i, {
                        alpha: 0
                    }), di.set(n, {
                        alpha: 0
                    }), t.forEach((function(t) {
                        const r = t.dataset.vimeo,
                            i = (t.dataset.slug, t.dataset.videoHeading);
                        t.addEventListener("click", () => {
                            _l.push(yl(r, 0, i, e))
                        })
                    }))
                })(), (e => {
                    gh && gh.destroy(), gh = new oh(e)
                })(t), (e => {
                    vh = new sh(e), vh.init()
                })(t), Ts()) {
                document.querySelector("html").classList.add("safari-browser")
            }
        },
        _h = (e, {
            element: t,
            ...r
        }, i) => (fh = dh, dh = new e(t, { ...r,
            willUseIntroAnimation: !i
        }), e === Ss ? mh.enable(!0) : mh.enable(!1), dh),
        Dh = e => {
            const t = e.dataset.backgroundColor;
            return getComputedStyle(document.documentElement).getPropertyValue(t) || t
        };
    lh.site = {
        init: function() {
            (() => {

            })(), this.barba()
        },
        lazyLoad: function(e) {
            return ph && ph.destroy(), ph = new n.a({
                elements_selector: ".lazy",
                callback_loaded: e
            }), ph
        },
        barba: function() {
            pi.a.hooks.afterEnter(e => {
                var t = window.location.href.replace(window.location.origin, "").toLowerCase();
                /*gtag("config", "UA-104975936-1", {
                    anonymize_ip: !0,
                    page_title: document.title,
                    page_path: t
                })*/
            }), pi.a.init({
                debug: !1,
                timeout: 5e3,
                transitions: [{
                    name: "intro-transition",
                    once(e) {
                        const t = document.getElementById("preloader"),
                            r = document.body.classList.contains("logged-in"),
                            i = new ml(t, Dh(e.next.container), () => {
                                window.scrollTo(0, 0), dh && dh.showAfterIntro()
                            });
                        document.documentElement.classList.remove("body-overflow"), r ? i.hide() : i.show()
                    }
                }, {
                    name: "default-transition",
                    sync: !0,
                    leave: e => new Promise(t => {
                        di.set("#loader", {
                            scaleY: 0,
                            transformOrigin: "bottom center",
                            background: Dh(e.next.container),
                            display: "block"
                        }), di.to("#loader", {
                            scaleY: 1,
                            duration: .5,
                            transformOrigin: "bottom center",
                            ease: "expo.inOut",
                            delay: .6,
                            onComplete: () => {
                               document.documentElement.classList.remove("body-overflow"), t()
                            }
                        })
                    }),
                    afterEnter(e) {
                        di.to("#loader", {
                            duration: 0,
                            scaleY: 0,
                            transformOrigin: "bottom center",
                            display: "none",
                            onComplete: () => {
                                window.scrollTo(0, 0), dh && dh.show()
                            }
                        })
                    }
                }],
                views: [{
                    namespace: "home",
                    beforeEnter(e) {
                        const t = e.current.container;
                        yh(e), _h(Ss, {
                            element: e.next.container,
                            webglRenderer: mh
                        }, t), lh.site.lazyLoad()
                    },
                    afterEnter() {
                        fh && fh.destroy(), document.documentElement.classList.remove("body-overflow")
                    }
                }, {
                    namespace: "project",
                    beforeEnter(e) {
                        const t = e.current.container,
                            r = e.next.container.dataset.projectId;
                        yh(e);
                        const i = _h(_u, {
                            element: e.next.container,
                            id: r
                        }, t);
                        lh.site.lazyLoad(() => {
                            i.onSizeChange()
                        })
                    },
                    afterEnter() {
                        fh && fh.destroy(), document.documentElement.classList.remove("body-overflow")
                    }
                }, {
                    namespace: "journal",
                    beforeEnter(e) {
                        const t = e.current.container;
                        yh(e), _h(Dl, {
                            element: e.next.container
                        }, t)
                    },
                    afterEnter() {
                        fh && fh.destroy(), document.documentElement.classList.remove("body-overflow")
                    }
                }, {
                    namespace: "mission",
                    beforeEnter(e) {
                        const t = e.current.container;
                        yh(e), _h(wl, {
                            element: e.next.container
                        }, t), lh.site.lazyLoad()
                    },
                    afterEnter() {
                        fh && fh.destroy(), document.documentElement.classList.remove("body-overflow")
                    }
                }, {
                    namespace: "post",
                    beforeEnter(e) {
                        const t = e.current.container;
                        yh(e), _h(bl, {
                            element: e.next.container
                        }, t), lh.site.lazyLoad()
                    },
                    afterEnter() {
                        fh && fh.destroy(), document.documentElement.classList.remove("body-overflow")
                    }
                }, {
                    namespace: "contact",
                    beforeEnter(e) {
                        const t = e.current.container;
                        yh(e), _h(uh, {
                            element: e.next.container
                        }, t), lh.site.lazyLoad()
                    },
                    afterEnter() {
                        fh && fh.destroy(), document.documentElement.classList.remove("body-overflow")
                    }
                }, {
                    namespace: "error",
                    beforeEnter(e) {
                        const t = e.current.container;
                        yh(e), _h(Ms, {
                            element: e.next.container
                        }, t)
                    },
                    afterEnter() {
                        fh && fh.destroy(), document.documentElement.classList.remove("body-overflow")
                    }
                }]
            })
        }
    }, window.addEventListener("load", (function() {
        lh.site.init()
    }))
}]);


