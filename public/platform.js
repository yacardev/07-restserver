var gapi = window.gapi = window.gapi || {};
gapi._bs = new Date().getTime();
(function() {
    var m = this || self,
        aa = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) { if (a instanceof Array) return "array"; if (a instanceof Object) return b; var c = Object.prototype.toString.call(a); if ("[object Window]" == c) return "object"; if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array"; if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function" } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        ba = function(a, b, c) { return a.call.apply(a.bind, arguments) },
        ca = function(a, b, c) { if (!a) throw Error(); if (2 < arguments.length) { var d = Array.prototype.slice.call(arguments, 2); return function() { var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d); return a.apply(b, e) } } return function() { return a.apply(b, arguments) } },
        da = function(a, b, c) {
            da = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ?
                ba : ca;
            return da.apply(null, arguments)
        },
        ha = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.C = function(d, e, f) { for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++) g[k - 2] = arguments[k]; return b.prototype[e].apply(d, g) } };
    var q = function(a) { if (Error.captureStackTrace) Error.captureStackTrace(this, q);
        else { var b = Error().stack;
            b && (this.stack = b) }
        a && (this.message = String(a)) };
    ha(q, Error);
    q.prototype.name = "CustomError";
    var ia = function(a, b) { a = a.split("%s"); for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        q.call(this, c + a[d]) };
    ha(ia, q);
    ia.prototype.name = "AssertionError";
    var ja = function(a, b, c, d) { var e = "Assertion failed"; if (c) { e += ": " + c; var f = d } else a && (e += ": " + a, f = b); throw new ia("" + e, f || []); },
        ka = function(a, b, c) { a || ja("", null, b, Array.prototype.slice.call(arguments, 2)); return a },
        la = function(a, b) { throw new ia("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)); },
        ma = function(a, b, c) { "string" !== typeof a && ja("Expected string but got %s: %s.", [aa(a), a], b, Array.prototype.slice.call(arguments, 2)) };
    var t = function(a, b) { this.T = a === na && b || "";
        this.ga = oa };
    t.prototype.w = !0;
    t.prototype.v = function() { return this.T };
    t.prototype.toString = function() { return "Const{" + this.T + "}" };
    var pa = function(a) { if (a instanceof t && a.constructor === t && a.ga === oa) return a.T;
            la("expected object of type Const, got '" + a + "'"); return "type_error:Const" },
        oa = {},
        na = {};
    var v = function() { this.N = "" };
    v.prototype.w = !0;
    v.prototype.v = function() { return this.N.toString() };
    v.prototype.toString = function() { return "SafeScript{" + this.N + "}" };
    v.prototype.i = function(a) { this.N = a; return this };
    (new v).i("");
    var w = function(a, b) { this.R = a === qa && b || "";
        this.fa = ra };
    w.prototype.w = !0;
    w.prototype.v = function() { return this.R.toString() };
    w.prototype.toString = function() { return "SafeUrl{" + this.R + "}" };
    var sa = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        ra = {},
        qa = {};
    var x = function() { this.P = "" };
    x.prototype.w = !0;
    x.prototype.v = function() { return this.P };
    x.prototype.toString = function() { return "SafeStyle{" + this.P + "}" };
    x.prototype.i = function(a) { this.P = a; return this };
    (new x).i("");
    var ta = function() { this.O = "" };
    ta.prototype.w = !0;
    ta.prototype.v = function() { return this.O };
    ta.prototype.toString = function() { return "SafeStyleSheet{" + this.O + "}" };
    ta.prototype.i = function(a) { this.O = a; return this };
    (new ta).i("");
    var z = function() { this.G = "";
        this.ea = ua };
    z.prototype.w = !0;
    z.prototype.v = function() { return this.G.toString() };
    z.prototype.toString = function() { return "SafeHtml{" + this.G + "}" };
    var va = function(a) { if (a instanceof z && a.constructor === z && a.ea === ua) return a.G;
            la("expected object of type SafeHtml, got '" + a + "' of type " + aa(a)); return "type_error:SafeHtml" },
        ua = {};
    z.prototype.i = function(a) { this.G = a; return this };
    (new z).i("<!DOCTYPE html>");
    var wa = (new z).i("");
    (new z).i("<br>");
    var xa = { MATH: !0, SCRIPT: !0, STYLE: !0, SVG: !0, TEMPLATE: !0 },
        za = function(a) { var b = !1,
                c; return function() { b || (c = a(), b = !0); return c } }(function() { if ("undefined" === typeof document) return !1; var a = document.createElement("div"),
                b = document.createElement("div");
            b.appendChild(document.createElement("div"));
            a.appendChild(b); if (!a.firstChild) return !1;
            b = a.firstChild.firstChild;
            a.innerHTML = va(wa); return !b.parentElement });
    /*
     gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
    var A = window,
        B = document,
        Aa = A.location,
        Ba = function() {},
        Ca = /\[native code\]/,
        C = function(a, b, c) { return a[b] = a[b] || c },
        Da = function(a) { for (var b = 0; b < this.length; b++)
                if (this[b] === a) return b;
            return -1 },
        Ea = function(a) { a = a.sort(); for (var b = [], c = void 0, d = 0; d < a.length; d++) { var e = a[d];
                e != c && b.push(e);
                c = e } return b },
        Fa = /&/g,
        Ga = /</g,
        Ha = />/g,
        Ia = /"/g,
        Ja = /'/g,
        Ka = function(a) { return String(a).replace(Fa, "&amp;").replace(Ga, "&lt;").replace(Ha, "&gt;").replace(Ia, "&quot;").replace(Ja, "&#39;") },
        D = function() {
            var a;
            if ((a = Object.create) &&
                Ca.test(a)) a = a(null);
            else { a = {}; for (var b in a) a[b] = void 0 }
            return a
        },
        E = function(a, b) { return Object.prototype.hasOwnProperty.call(a, b) },
        La = function(a) { if (Ca.test(Object.keys)) return Object.keys(a); var b = [],
                c; for (c in a) E(a, c) && b.push(c); return b },
        G = function(a, b) { a = a || {}; for (var c in a) E(a, c) && (b[c] = a[c]) },
        Ma = function(a) { return function() { A.setTimeout(a, 0) } },
        H = function(a, b) { if (!a) throw Error(b || ""); },
        I = C(A, "gapi", {});
    var J = function(a, b, c) { var d = new RegExp("([#].*&|[#])" + b + "=([^&#]*)", "g");
            b = new RegExp("([?#].*&|[?#])" + b + "=([^&#]*)", "g"); if (a = a && (d.exec(a) || b.exec(a))) try { c = decodeURIComponent(a[2]) } catch (e) {}
            return c },
        Na = new RegExp(/^/.source + /([a-zA-Z][-+.a-zA-Z0-9]*:)?/.source + /(\/\/[^\/?#]*)?/.source + /([^?#]*)?/.source + /(\?([^#]*))?/.source + /(#((#|[^#])*))?/.source + /$/.source),
        Oa = /[\ud800-\udbff][\udc00-\udfff]|[^!-~]/g,
        Pa = new RegExp(/(%([^0-9a-fA-F%]|[0-9a-fA-F]([^0-9a-fA-F%])?)?)*/.source + /%($|[^0-9a-fA-F]|[0-9a-fA-F]($|[^0-9a-fA-F]))/.source,
            "g"),
        Ra = /%([a-f]|[0-9a-fA-F][a-f])/g,
        Sa = /^(https?|ftp|file|chrome-extension):$/i,
        Ta = function(a) {
            a = String(a);
            a = a.replace(Oa, function(e) { try { return encodeURIComponent(e) } catch (f) { return encodeURIComponent(e.replace(/^[^%]+$/g, "\ufffd")) } }).replace(Pa, function(e) { return e.replace(/%/g, "%25") }).replace(Ra, function(e) { return e.toUpperCase() });
            a = a.match(Na) || [];
            var b = D(),
                c = function(e) {
                    return e.replace(/\\/g, "%5C").replace(/\^/g, "%5E").replace(/`/g, "%60").replace(/\{/g, "%7B").replace(/\|/g, "%7C").replace(/\}/g,
                        "%7D")
                },
                d = !!(a[1] || "").match(Sa);
            b.C = c((a[1] || "") + (a[2] || "") + (a[3] || (a[2] && d ? "/" : "")));
            d = function(e) { return c(e.replace(/\?/g, "%3F").replace(/#/g, "%23")) };
            b.query = a[5] ? [d(a[5])] : [];
            b.g = a[7] ? [d(a[7])] : [];
            return b
        },
        Ua = function(a) { return a.C + (0 < a.query.length ? "?" + a.query.join("&") : "") + (0 < a.g.length ? "#" + a.g.join("&") : "") },
        Va = function(a, b) { var c = []; if (a)
                for (var d in a)
                    if (E(a, d) && null != a[d]) { var e = b ? b(a[d]) : a[d];
                        c.push(encodeURIComponent(d) + "=" + encodeURIComponent(e)) }
            return c },
        Wa = function(a, b, c, d) {
            a = Ta(a);
            a.query.push.apply(a.query, Va(b, d));
            a.g.push.apply(a.g, Va(c, d));
            return Ua(a)
        },
        Xa = new RegExp(/\/?\??#?/.source + "(" + /[\/?#]/i.source + "|" + /[\uD800-\uDBFF]/i.source + "|" + /%[c-f][0-9a-f](%[89ab][0-9a-f]){0,2}(%[89ab]?)?/i.source + "|" + /%[0-9a-f]?/i.source + ")$", "i"),
        Ya = function(a, b) {
            var c = Ta(b);
            b = c.C;
            c.query.length && (b += "?" + c.query.join(""));
            c.g.length && (b += "#" + c.g.join(""));
            var d = "";
            2E3 < b.length && (d = b, b = b.substr(0, 2E3), b = b.replace(Xa, ""), d = d.substr(b.length));
            var e = a.createElement("div");
            a = a.createElement("a");
            c = Ta(b);
            b = c.C;
            c.query.length && (b += "?" + c.query.join(""));
            c.g.length && (b += "#" + c.g.join(""));
            b = new w(qa, b);
            a: { try { var f = a && a.ownerDocument,
                        g = f && (f.defaultView || f.parentWindow);
                    g = g || m; if (g.Element && g.Location) { var k = g; break a } } catch (l) {}
                k = null }
            if (k && "undefined" != typeof k.HTMLAnchorElement && (!a || !(a instanceof k.HTMLAnchorElement) && (a instanceof k.Location || a instanceof k.Element))) {
                k = typeof a;
                if ("object" == k && null != a || "function" == k) try { var h = a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) } catch (l) {
                    h =
                        "<object could not be stringified>"
                } else h = void 0 === a ? "undefined" : null === a ? "null" : typeof a;
                la("Argument is not a %s (or a non-Element, non-Location mock); got: %s", "HTMLAnchorElement", h)
            }
            b instanceof w ? h = b : (h = b, h instanceof w || (h = "object" == typeof h && h.w ? h.v() : String(h), ka(sa.test(h), "%s does not match the safe URL pattern", h) || (h = "about:invalid#zClosurez"), h = new w(qa, h)));
            h instanceof w && h.constructor === w && h.fa === ra ? h = h.R : (la("expected object of type SafeUrl, got '" + h + "' of type " + aa(h)), h = "type_error:SafeUrl");
            a.href = h;
            e.appendChild(a);
            a = e.innerHTML;
            h = new t(na, "Assignment to self.");
            ma(pa(h), "must provide justification");
            ka(!/^[\s\xa0]*$/.test(pa(h)), "must provide non-empty justification");
            a = (new z).i(a);
            if (xa[e.tagName.toUpperCase()]) throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + e.tagName + ".");
            if (za())
                for (; e.lastChild;) e.removeChild(e.lastChild);
            e.innerHTML = va(a);
            b = String(e.firstChild.href);
            e.parentNode && e.parentNode.removeChild(e);
            c = Ta(b + d);
            d = c.C;
            c.query.length && (d += "?" + c.query.join(""));
            c.g.length && (d += "#" + c.g.join(""));
            return d
        },
        Za = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;
    var $a = function(a, b, c, d) { if (A[c + "EventListener"]) A[c + "EventListener"](a, b, !1);
            else if (A[d + "tachEvent"]) A[d + "tachEvent"]("on" + a, b) },
        ab = function() { var a = B.readyState; return "complete" === a || "interactive" === a && -1 == navigator.userAgent.indexOf("MSIE") },
        db = function(a) { var b = bb; if (!ab()) try { b() } catch (c) {}
            cb(a) },
        cb = function(a) {
            if (ab()) a();
            else {
                var b = !1,
                    c = function() { if (!b) return b = !0, a.apply(this, arguments) };
                A.addEventListener ? (A.addEventListener("load", c, !1), A.addEventListener("DOMContentLoaded", c, !1)) : A.attachEvent &&
                    (A.attachEvent("onreadystatechange", function() { ab() && c.apply(this, arguments) }), A.attachEvent("onload", c))
            }
        },
        eb = function(a) { for (; a.firstChild;) a.removeChild(a.firstChild) },
        fb = { button: !0, div: !0, span: !0 };
    var L;
    L = C(A, "___jsl", D());
    C(L, "I", 0);
    C(L, "hel", 10);
    var gb = function(a) { return L.dpo ? L.h : J(a, "jsh", L.h) },
        hb = function(a) { var b = C(L, "sws", []);
            b.push.apply(b, a) },
        ib = function(a) { return C(L, "watt", D())[a] },
        jb = function(a) { var b = C(L, "PQ", []);
            L.PQ = []; var c = b.length; if (0 === c) a();
            else
                for (var d = 0, e = function() {++d === c && a() }, f = 0; f < c; f++) b[f](e) },
        kb = function(a) { return C(C(L, "H", D()), a, D()) };
    var lb = C(L, "perf", D()),
        mb = C(lb, "g", D()),
        nb = C(lb, "i", D());
    C(lb, "r", []);
    D();
    D();
    var ob = function(a, b, c) { var d = lb.r; "function" === typeof d ? d(a, b, c) : d.push([a, b, c]) },
        N = function(a, b, c) { mb[a] = !b && mb[a] || c || (new Date).getTime();
            ob(a) },
        qb = function(a, b, c) { b && 0 < b.length && (b = pb(b), c && 0 < c.length && (b += "___" + pb(c)), 28 < b.length && (b = b.substr(0, 28) + (b.length - 28)), c = b, b = C(nb, "_p", D()), C(b, c, D())[a] = (new Date).getTime(), ob(a, "_p", c)) },
        pb = function(a) { return a.join("__").replace(/\./g, "_").replace(/\-/g, "_").replace(/,/g, "_") };
    var rb = D(),
        sb = [],
        O = function(a) { throw Error("Bad hint" + (a ? ": " + a : "")); };
    sb.push(["jsl", function(a) { for (var b in a)
            if (E(a, b)) { var c = a[b]; "object" == typeof c ? L[b] = C(L, b, []).concat(c) : C(L, b, c) }
        if (b = a.u) a = C(L, "us", []), a.push(b), (b = /^https:(.*)$/.exec(b)) && a.push("http:" + b[1]) }]);
    var tb = /^(\/[a-zA-Z0-9_\-]+)+$/,
        ub = [/\/amp\//, /\/amp$/, /^\/amp$/],
        vb = /^[a-zA-Z0-9\-_\.,!]+$/,
        wb = /^gapi\.loaded_[0-9]+$/,
        xb = /^[a-zA-Z0-9,._-]+$/,
        Bb = function(a, b, c, d) { var e = a.split(";"),
                f = e.shift(),
                g = rb[f],
                k = null;
            g ? k = g(e, b, c, d) : O("no hint processor for: " + f);
            k || O("failed to generate load url");
            b = k;
            c = b.match(yb);
            (d = b.match(zb)) && 1 === d.length && Ab.test(b) && c && 1 === c.length || O("failed sanity: " + a); return k },
        Eb = function(a, b, c, d) {
            a = Cb(a);
            wb.test(c) || O("invalid_callback");
            b = Db(b);
            d = d && d.length ? Db(d) : null;
            var e =
                function(f) { return encodeURIComponent(f).replace(/%2C/g, ",") };
            return [encodeURIComponent(a.pathPrefix).replace(/%2C/g, ",").replace(/%2F/g, "/"), "/k=", e(a.version), "/m=", e(b), d ? "/exm=" + e(d) : "", "/rt=j/sv=1/d=1/ed=1", a.V ? "/am=" + e(a.V) : "", a.ba ? "/rs=" + e(a.ba) : "", a.da ? "/t=" + e(a.da) : "", "/cb=", e(c)].join("")
        },
        Cb = function(a) {
            "/" !== a.charAt(0) && O("relative path");
            for (var b = a.substring(1).split("/"), c = []; b.length;) {
                a = b.shift();
                if (!a.length || 0 == a.indexOf(".")) O("empty/relative directory");
                else if (0 < a.indexOf("=")) {
                    b.unshift(a);
                    break
                }
                c.push(a)
            }
            a = {};
            for (var d = 0, e = b.length; d < e; ++d) { var f = b[d].split("="),
                    g = decodeURIComponent(f[0]),
                    k = decodeURIComponent(f[1]);
                2 == f.length && g && k && (a[g] = a[g] || k) }
            b = "/" + c.join("/");
            tb.test(b) || O("invalid_prefix");
            c = 0;
            for (d = ub.length; c < d; ++c) ub[c].test(b) && O("invalid_prefix");
            c = Fb(a, "k", !0);
            d = Fb(a, "am");
            e = Fb(a, "rs");
            a = Fb(a, "t");
            return { pathPrefix: b, version: c, V: d, ba: e, da: a }
        },
        Db = function(a) { for (var b = [], c = 0, d = a.length; c < d; ++c) { var e = a[c].replace(/\./g, "_").replace(/-/g, "_");
                xb.test(e) && b.push(e) } return b.join(",") },
        Fb = function(a, b, c) { a = a[b];!a && c && O("missing: " + b); if (a) { if (vb.test(a)) return a;
                O("invalid: " + b) } return null },
        Ab = /^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,
        zb = /\/cb=/g,
        yb = /\/\//g,
        Gb = function() { var a = gb(Aa.href); if (!a) throw Error("Bad hint"); return a };
    rb.m = function(a, b, c, d) {
        (a = a[0]) || O("missing_hint"); return "https://apis.google.com" + Eb(a, b, c, d) };
    var Hb = decodeURI("%73cript"),
        Ib = /^[-+_0-9\/A-Za-z]+={0,2}$/,
        Jb = function(a, b) { for (var c = [], d = 0; d < a.length; ++d) { var e = a[d];
                e && 0 > Da.call(b, e) && c.push(e) } return c },
        Kb = function() { var a = L.nonce; return void 0 !== a ? a && a === String(a) && a.match(Ib) ? a : L.nonce = null : B.querySelector ? (a = B.querySelector("script[nonce]")) ? (a = a.nonce || a.getAttribute("nonce") || "", a && a === String(a) && a.match(Ib) ? L.nonce = a : L.nonce = null) : null : null },
        Mb = function(a) {
            if ("loading" != B.readyState) Lb(a);
            else {
                var b = Kb(),
                    c = "";
                null !== b && (c = ' nonce="' +
                    b + '"');
                a = "<" + Hb + ' src="' + encodeURI(a) + '"' + c + "></" + Hb + ">";
                B.write(a)
            }
        },
        Lb = function(a) { var b = B.createElement(Hb);
            b.setAttribute("src", a);
            a = Kb();
            null !== a && b.setAttribute("nonce", a);
            b.async = "true";
            (a = B.getElementsByTagName(Hb)[0]) ? a.parentNode.insertBefore(b, a): (B.head || B.body || B.documentElement).appendChild(b) },
        Nb = function(a, b) { var c = b && b._c; if (c)
                for (var d = 0; d < sb.length; d++) { var e = sb[d][0],
                        f = sb[d][1];
                    f && E(c, e) && f(c[e], a, b) } },
        Pb = function(a, b, c) {
            Ob(function() {
                var d = b === gb(Aa.href) ? C(I, "_", D()) : D();
                d = C(kb(b),
                    "_", d);
                a(d)
            }, c)
        },
        Rb = function(a, b) { var c = b || {}; "function" == typeof b && (c = {}, c.callback = b);
            Nb(a, c);
            b = a ? a.split(":") : []; var d = c.h || Gb(),
                e = C(L, "ah", D()); if (e["::"] && b.length) { a = []; for (var f = null; f = b.shift();) { var g = f.split(".");
                    g = e[f] || e[g[1] && "ns:" + g[0] || ""] || d; var k = a.length && a[a.length - 1] || null,
                        h = k;
                    k && k.hint == g || (h = { hint: g, Y: [] }, a.push(h));
                    h.Y.push(f) } var l = a.length; if (1 < l) { var n = c.callback;
                    n && (c.callback = function() { 0 == --l && n() }) } for (; b = a.shift();) Qb(b.Y, c, b.hint) } else Qb(b || [], c, d) },
        Qb = function(a,
            b, c) {
            a = Ea(a) || [];
            var d = b.callback,
                e = b.config,
                f = b.timeout,
                g = b.ontimeout,
                k = b.onerror,
                h = void 0;
            "function" == typeof k && (h = k);
            var l = null,
                n = !1;
            if (f && !g || !f && g) throw "Timeout requires both the timeout parameter and ontimeout parameter to be set";
            k = C(kb(c), "r", []).sort();
            var p = C(kb(c), "L", []).sort(),
                r = [].concat(k),
                u = function(M, ea) { if (n) return 0;
                    A.clearTimeout(l);
                    p.push.apply(p, y); var fa = ((I || {}).config || {}).update;
                    fa ? fa(e) : e && C(L, "cu", []).push(e); if (ea) { qb("me0", M, r); try { Pb(ea, c, h) } finally { qb("me1", M, r) } } return 1 };
            0 < f && (l = A.setTimeout(function() { n = !0;
                g() }, f));
            var y = Jb(a, p);
            if (y.length) { y = Jb(a, k); var F = C(L, "CP", []),
                    K = F.length;
                F[K] = function(M) { if (!M) return 0;
                    qb("ml1", y, r); var ea = function(ya) { F[K] = null;
                            u(y, M) && jb(function() { d && d();
                                ya() }) },
                        fa = function() { var ya = F[K + 1];
                            ya && ya() };
                    0 < K && F[K - 1] ? F[K] = function() { ea(fa) } : ea(fa) }; if (y.length) { var Qa = "loaded_" + L.I++;
                    I[Qa] = function(M) { F[K](M);
                        I[Qa] = null };
                    a = Bb(c, y, "gapi." + Qa, k);
                    k.push.apply(k, y);
                    qb("ml0", y, r);
                    b.sync || A.___gapisync ? Mb(a) : Lb(a) } else F[K](Ba) } else u(y) && d && d()
        };
    var Ob = function(a, b) { if (L.hee && 0 < L.hel) try { return a() } catch (c) { b && b(c), L.hel--, Rb("debug_error", function() { try { window.___jsl.hefn(c) } catch (d) { throw c; } }) } else try { return a() } catch (c) { throw b && b(c), c; } };
    I.load = function(a, b) { return Ob(function() { return Rb(a, b) }) };
    var Sb = function(a) { var b = window.___jsl = window.___jsl || {};
            b[a] = b[a] || []; return b[a] },
        Tb = function(a) { var b = window.___jsl = window.___jsl || {};
            b.cfg = !a && b.cfg || {}; return b.cfg },
        Ub = function(a) { return "object" === typeof a && /\[native code\]/.test(a.push) },
        P = function(a, b, c) {
            if (b && "object" === typeof b)
                for (var d in b) !Object.prototype.hasOwnProperty.call(b, d) || c && "___goc" === d && "undefined" === typeof b[d] || (a[d] && b[d] && "object" === typeof a[d] && "object" === typeof b[d] && !Ub(a[d]) && !Ub(b[d]) ? P(a[d], b[d]) : b[d] && "object" ===
                    typeof b[d] ? (a[d] = Ub(b[d]) ? [] : {}, P(a[d], b[d])) : a[d] = b[d])
        },
        Vb = function(a) { if (a && !/^\s+$/.test(a)) { for (; 0 == a.charCodeAt(a.length - 1);) a = a.substring(0, a.length - 1); try { var b = window.JSON.parse(a) } catch (c) {} if ("object" === typeof b) return b; try { b = (new Function("return (" + a + "\n)"))() } catch (c) {} if ("object" === typeof b) return b; try { b = (new Function("return ({" + a + "\n})"))() } catch (c) {} return "object" === typeof b ? b : {} } },
        Wb = function(a, b) {
            var c = { ___goc: void 0 };
            a.length && a[a.length - 1] && Object.hasOwnProperty.call(a[a.length -
                1], "___goc") && "undefined" === typeof a[a.length - 1].___goc && (c = a.pop());
            P(c, b);
            a.push(c)
        },
        Xb = function(a) {
            Tb(!0);
            var b = window.___gcfg,
                c = Sb("cu"),
                d = window.___gu;
            b && b !== d && (Wb(c, b), window.___gu = b);
            b = Sb("cu");
            var e = document.scripts || document.getElementsByTagName("script") || [];
            d = [];
            var f = [];
            f.push.apply(f, Sb("us"));
            for (var g = 0; g < e.length; ++g)
                for (var k = e[g], h = 0; h < f.length; ++h) k.src && 0 == k.src.indexOf(f[h]) && d.push(k);
            0 == d.length && 0 < e.length && e[e.length - 1].src && d.push(e[e.length - 1]);
            for (e = 0; e < d.length; ++e) d[e].getAttribute("gapi_processed") ||
                (d[e].setAttribute("gapi_processed", !0), (f = d[e]) ? (g = f.nodeType, f = 3 == g || 4 == g ? f.nodeValue : f.textContent || f.innerText || f.innerHTML || "") : f = void 0, (f = Vb(f)) && b.push(f));
            a && Wb(c, a);
            d = Sb("cd");
            a = 0;
            for (b = d.length; a < b; ++a) P(Tb(), d[a], !0);
            d = Sb("ci");
            a = 0;
            for (b = d.length; a < b; ++a) P(Tb(), d[a], !0);
            a = 0;
            for (b = c.length; a < b; ++a) P(Tb(), c[a], !0)
        },
        Q = function(a) { var b = Tb(); if (!a) return b;
            a = a.split("/"); for (var c = 0, d = a.length; b && "object" === typeof b && c < d; ++c) b = b[a[c]]; return c === a.length && void 0 !== b ? b : void 0 },
        Yb = function(a,
            b) { var c; if ("string" === typeof a) { var d = c = {};
                a = a.split("/"); for (var e = 0, f = a.length; e < f - 1; ++e) { var g = {};
                    d = d[a[e]] = g }
                d[a[e]] = b } else c = a;
            Xb(c) };
    var Zb = function() { var a = window.__GOOGLEAPIS;
        a && (a.googleapis && !a["googleapis.config"] && (a["googleapis.config"] = a.googleapis), C(L, "ci", []).push(a), window.__GOOGLEAPIS = void 0) };
    var $b = { callback: 1, clientid: 1, cookiepolicy: 1, openidrealm: -1, includegrantedscopes: -1, requestvisibleactions: 1, scope: 1 },
        ac = !1,
        bc = D(),
        cc = function() { if (!ac) { for (var a = document.getElementsByTagName("meta"), b = 0; b < a.length; ++b) { var c = a[b].name.toLowerCase(); if (0 == c.lastIndexOf("google-signin-", 0)) { c = c.substring(14); var d = a[b].content;
                        $b[c] && d && (bc[c] = d) } } if (window.self !== window.top) { a = document.location.toString(); for (var e in $b) 0 < $b[e] && (b = J(a, e, "")) && (bc[e] = b) }
                ac = !0 }
            e = D();
            G(bc, e); return e },
        dc = function(a) {
            return !!(a.clientid &&
                a.scope && a.callback)
        };
    var ec = window.console,
        fc = function(a) { ec && ec.log && ec.log(a) };
    var gc = function() { return !!L.oa },
        hc = function() {};
    var R = C(L, "rw", D()),
        ic = function(a) { for (var b in R) a(R[b]) },
        jc = function(a, b) {
            (a = R[a]) && a.state < b && (a.state = b) };
    var kc;
    var lc = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/u\/(\d)\//,
        mc = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/b\/(\d{10,21})\//,
        nc = function(a) {
            var b = Q("googleapis.config/sessionIndex");
            "string" === typeof b && 254 < b.length && (b = null);
            null == b && (b = window.__X_GOOG_AUTHUSER);
            "string" === typeof b && 254 < b.length && (b = null);
            if (null == b) { var c = window.google;
                c && (b = c.authuser) }
            "string" === typeof b && 254 < b.length && (b = null);
            null == b && (a = a || window.location.href, b = J(a, "authuser") ||
                null, null == b && (b = (b = a.match(lc)) ? b[1] : null));
            if (null == b) return null;
            b = String(b);
            254 < b.length && (b = null);
            return b
        },
        oc = function(a) { var b = Q("googleapis.config/sessionDelegate"); "string" === typeof b && 21 < b.length && (b = null);
            null == b && (b = (a = (a || window.location.href).match(mc)) ? a[1] : null); if (null == b) return null;
            b = String(b);
            21 < b.length && (b = null); return b };
    var pc, S, T = void 0,
        U = function(a) { try { return m.JSON.parse.call(m.JSON, a) } catch (b) { return !1 } },
        V = function(a) { return Object.prototype.toString.call(a) },
        qc = V(0),
        rc = V(new Date(0)),
        sc = V(!0),
        tc = V(""),
        uc = V({}),
        vc = V([]),
        W = function(a, b) {
            if (b)
                for (var c = 0, d = b.length; c < d; ++c)
                    if (a === b[c]) throw new TypeError("Converting circular structure to JSON");
            d = typeof a;
            if ("undefined" !== d) {
                c = Array.prototype.slice.call(b || [], 0);
                c[c.length] = a;
                b = [];
                var e = V(a);
                if (null != a && "function" === typeof a.toJSON && (Object.prototype.hasOwnProperty.call(a,
                        "toJSON") || (e !== vc || a.constructor !== Array && a.constructor !== Object) && (e !== uc || a.constructor !== Array && a.constructor !== Object) && e !== tc && e !== qc && e !== sc && e !== rc)) return W(a.toJSON.call(a), c);
                if (null == a) b[b.length] = "null";
                else if (e === qc) a = Number(a), isNaN(a) || isNaN(a - a) ? a = "null" : -0 === a && 0 > 1 / a && (a = "-0"), b[b.length] = String(a);
                else if (e === sc) b[b.length] = String(!!Number(a));
                else {
                    if (e === rc) return W(a.toISOString.call(a), c);
                    if (e === vc && V(a.length) === qc) {
                        b[b.length] = "[";
                        var f = 0;
                        for (d = Number(a.length) >> 0; f < d; ++f) f &&
                            (b[b.length] = ","), b[b.length] = W(a[f], c) || "null";
                        b[b.length] = "]"
                    } else if (e == tc && V(a.length) === qc) { b[b.length] = '"';
                        f = 0; for (c = Number(a.length) >> 0; f < c; ++f) d = String.prototype.charAt.call(a, f), e = String.prototype.charCodeAt.call(a, f), b[b.length] = "\b" === d ? "\\b" : "\f" === d ? "\\f" : "\n" === d ? "\\n" : "\r" === d ? "\\r" : "\t" === d ? "\\t" : "\\" === d || '"' === d ? "\\" + d : 31 >= e ? "\\u" + (e + 65536).toString(16).substr(1) : 32 <= e && 65535 >= e ? d : "\ufffd";
                        b[b.length] = '"' } else if ("object" === d) {
                        b[b.length] = "{";
                        d = 0;
                        for (f in a) Object.prototype.hasOwnProperty.call(a,
                            f) && (e = W(a[f], c), void 0 !== e && (d++ && (b[b.length] = ","), b[b.length] = W(f), b[b.length] = ":", b[b.length] = e));
                        b[b.length] = "}"
                    } else return
                }
                return b.join("")
            }
        },
        wc = /[\0-\x07\x0b\x0e-\x1f]/,
        xc = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*[\0-\x1f]/,
        yc = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\[^\\\/"bfnrtu]/,
        zc = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\u([0-9a-fA-F]{0,3}[^0-9a-fA-F])/,
        Ac = /"([^\0-\x1f\\"]|\\[\\\/"bfnrt]|\\u[0-9a-fA-F]{4})*"/g,
        Bc = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?/g,
        Cc = /[ \t\n\r]+/g,
        Dc = /[^"]:/,
        Ec = /""/g,
        Fc = /true|false|null/g,
        Gc = /00/,
        Hc = /[\{]([^0\}]|0[^:])/,
        Ic = /(^|\[)[,:]|[,:](\]|\}|[,:]|$)/,
        Jc = /[^\[,:][\[\{]/,
        Kc = /^(\{|\}|\[|\]|,|:|0)+/,
        Lc = /\u2028/g,
        Mc = /\u2029/g,
        Nc = function(a) {
            a = String(a);
            if (wc.test(a) || xc.test(a) || yc.test(a) || zc.test(a)) return !1;
            var b = a.replace(Ac, '""');
            b = b.replace(Bc, "0");
            b = b.replace(Cc, "");
            if (Dc.test(b)) return !1;
            b = b.replace(Ec, "0");
            b = b.replace(Fc, "0");
            if (Gc.test(b) || Hc.test(b) || Ic.test(b) || Jc.test(b) || !b || (b = b.replace(Kc, ""))) return !1;
            a = a.replace(Lc, "\\u2028").replace(Mc,
                "\\u2029");
            b = void 0;
            try { b = T ? [U(a)] : eval("(function (var_args) {\n  return Array.prototype.slice.call(arguments, 0);\n})(\n" + a + "\n)") } catch (c) { return !1 }
            return b && 1 === b.length ? b[0] : !1
        },
        Oc = function() {
            var a = ((m.document || {}).scripts || []).length;
            if ((void 0 === pc || void 0 === T || S !== a) && -1 !== S) {
                pc = T = !1;
                S = -1;
                try {
                    try { T = !!m.JSON && '{"a":[3,true,"1970-01-01T00:00:00.000Z"]}' === m.JSON.stringify.call(m.JSON, { a: [3, !0, new Date(0)], c: function() {} }) && !0 === U("true") && 3 === U('[{"a":3}]')[0].a } catch (b) {}
                    pc = T && !U("[00]") &&
                        !U('"\u0007"') && !U('"\\0"') && !U('"\\v"')
                } finally { S = a }
            }
        },
        Pc = function(a) { if (-1 === S) return !1;
            Oc(); return (pc ? U : Nc)(a) },
        Qc = function(a) { if (-1 !== S) return Oc(), T ? m.JSON.stringify.call(m.JSON, a) : W(a) },
        Rc = !Date.prototype.toISOString || "function" !== typeof Date.prototype.toISOString || "1970-01-01T00:00:00.000Z" !== (new Date(0)).toISOString(),
        Sc = function() {
            var a = Date.prototype.getUTCFullYear.call(this);
            return [0 > a ? "-" + String(1E6 - a).substr(1) : 9999 >= a ? String(1E4 + a).substr(1) : "+" + String(1E6 + a).substr(1), "-", String(101 +
                Date.prototype.getUTCMonth.call(this)).substr(1), "-", String(100 + Date.prototype.getUTCDate.call(this)).substr(1), "T", String(100 + Date.prototype.getUTCHours.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCMinutes.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCSeconds.call(this)).substr(1), ".", String(1E3 + Date.prototype.getUTCMilliseconds.call(this)).substr(1), "Z"].join("")
        };
    Date.prototype.toISOString = Rc ? Sc : Date.prototype.toISOString;
    var Tc = function() { this.l = -1 };
    var Uc = function() { this.l = 64;
        this.b = [];
        this.K = [];
        this.ha = [];
        this.F = [];
        this.F[0] = 128; for (var a = 1; a < this.l; ++a) this.F[a] = 0;
        this.H = this.A = 0;
        this.reset() };
    ha(Uc, Tc);
    Uc.prototype.reset = function() { this.b[0] = 1732584193;
        this.b[1] = 4023233417;
        this.b[2] = 2562383102;
        this.b[3] = 271733878;
        this.b[4] = 3285377520;
        this.H = this.A = 0 };
    var Vc = function(a, b, c) {
        c || (c = 0);
        var d = a.ha;
        if ("string" === typeof b)
            for (var e = 0; 16 > e; e++) d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4;
        else
            for (e = 0; 16 > e; e++) d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
        for (e = 16; 80 > e; e++) { var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = (f << 1 | f >>> 31) & 4294967295 }
        b = a.b[0];
        c = a.b[1];
        var g = a.b[2],
            k = a.b[3],
            h = a.b[4];
        for (e = 0; 80 > e; e++) {
            if (40 > e)
                if (20 > e) { f = k ^ c & (g ^ k); var l = 1518500249 } else f = c ^ g ^ k, l = 1859775393;
            else 60 > e ? (f = c & g | k & (c | g), l = 2400959708) :
                (f = c ^ g ^ k, l = 3395469782);
            f = (b << 5 | b >>> 27) + f + h + l + d[e] & 4294967295;
            h = k;
            k = g;
            g = (c << 30 | c >>> 2) & 4294967295;
            c = b;
            b = f
        }
        a.b[0] = a.b[0] + b & 4294967295;
        a.b[1] = a.b[1] + c & 4294967295;
        a.b[2] = a.b[2] + g & 4294967295;
        a.b[3] = a.b[3] + k & 4294967295;
        a.b[4] = a.b[4] + h & 4294967295
    };
    Uc.prototype.update = function(a, b) { if (null != a) { void 0 === b && (b = a.length); for (var c = b - this.l, d = 0, e = this.K, f = this.A; d < b;) { if (0 == f)
                    for (; d <= c;) Vc(this, a, d), d += this.l; if ("string" === typeof a)
                    for (; d < b;) { if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.l) { Vc(this, e);
                            f = 0; break } } else
                        for (; d < b;)
                            if (e[f] = a[d], ++f, ++d, f == this.l) { Vc(this, e);
                                f = 0; break } }
            this.A = f;
            this.H += b } };
    Uc.prototype.digest = function() { var a = [],
            b = 8 * this.H;
        56 > this.A ? this.update(this.F, 56 - this.A) : this.update(this.F, this.l - (this.A - 56)); for (var c = this.l - 1; 56 <= c; c--) this.K[c] = b & 255, b /= 256;
        Vc(this, this.K); for (c = b = 0; 5 > c; c++)
            for (var d = 24; 0 <= d; d -= 8) a[b] = this.b[c] >> d & 255, ++b; return a };
    var Wc = function() { this.S = new Uc };
    Wc.prototype.reset = function() { this.S.reset() };
    var Xc = A.crypto,
        Yc = !1,
        Zc = 0,
        $c = 0,
        ad = 1,
        bd = 0,
        cd = "",
        dd = function(a) { a = a || A.event; var b = a.screenX + a.clientX << 16;
            b += a.screenY + a.clientY;
            b *= (new Date).getTime() % 1E6;
            ad = ad * b % bd;
            0 < Zc && ++$c == Zc && $a("mousemove", dd, "remove", "de") },
        ed = function(a) { var b = new Wc;
            a = unescape(encodeURIComponent(a)); for (var c = [], d = 0, e = a.length; d < e; ++d) c.push(a.charCodeAt(d));
            b.S.update(c);
            b = b.S.digest();
            a = ""; for (c = 0; c < b.length; c++) a += "0123456789ABCDEF".charAt(Math.floor(b[c] / 16)) + "0123456789ABCDEF".charAt(b[c] % 16); return a };
    Yc = !!Xc && "function" == typeof Xc.getRandomValues;
    Yc || (bd = 1E6 * (screen.width * screen.width + screen.height), cd = ed(B.cookie + "|" + B.location + "|" + (new Date).getTime() + "|" + Math.random()), Zc = Q("random/maxObserveMousemove") || 0, 0 != Zc && $a("mousemove", dd, "add", "at"));
    var fd = function() { var a = ad;
            a += parseInt(cd.substr(0, 20), 16);
            cd = ed(cd); return a / (bd + Math.pow(16, 20)) },
        gd = function() { var a = new A.Uint32Array(1);
            Xc.getRandomValues(a); return Number("0." + a[0]) };
    var hd = function() { var a = L.onl; if (!a) { a = D();
                L.onl = a; var b = D();
                a.e = function(c) { var d = b[c];
                    d && (delete b[c], d()) };
                a.a = function(c, d) { b[c] = d };
                a.r = function(c) { delete b[c] } } return a },
        id = function(a, b) { b = b.onload; return "function" === typeof b ? (hd().a(a, b), b) : null },
        jd = function(a) { H(/^\w+$/.test(a), "Unsupported id - " + a);
            hd(); return 'onload="window.___jsl.onl.e(&#34;' + a + '&#34;)"' },
        kd = function(a) { hd().r(a) };
    var ld = { allowtransparency: "true", frameborder: "0", hspace: "0", marginheight: "0", marginwidth: "0", scrolling: "no", style: "", tabindex: "0", vspace: "0", width: "100%" },
        md = { allowtransparency: !0, onload: !0 },
        nd = 0,
        od = function(a) { H(!a || Za.test(a), "Illegal url for new iframe - " + a) },
        pd = function(a, b, c, d, e) {
            od(c.src);
            var f, g = id(d, c),
                k = g ? jd(d) : "";
            try { document.all && (f = a.createElement('<iframe frameborder="' + Ka(String(c.frameborder)) + '" scrolling="' + Ka(String(c.scrolling)) + '" ' + k + ' name="' + Ka(String(c.name)) + '"/>')) } catch (l) {} finally {
                f ||
                    (f = a.createElement("iframe"), g && (f.onload = function() { f.onload = null;
                        g.call(this) }, kd(d)))
            }
            f.setAttribute("ng-non-bindable", "");
            for (var h in c) a = c[h], "style" === h && "object" === typeof a ? G(a, f.style) : md[h] || f.setAttribute(h, String(a));
            (h = e && e.beforeNode || null) || e && e.dontclear || eb(b);
            b.insertBefore(f, h);
            f = h ? h.previousSibling : b.lastChild;
            c.allowtransparency && (f.allowTransparency = !0);
            return f
        };
    var qd = /^:[\w]+$/,
        rd = /:([a-zA-Z_]+):/g,
        sd = function() { var a = nc() || "0",
                b = oc(); var c = nc(void 0) || a; var d = oc(void 0),
                e = "";
            c && (e += "u/" + encodeURIComponent(String(c)) + "/");
            d && (e += "b/" + encodeURIComponent(String(d)) + "/");
            c = e || null;
            (e = (d = !1 === Q("isLoggedIn")) ? "_/im/" : "") && (c = ""); var f = Q("iframes/:socialhost:"),
                g = Q("iframes/:im_socialhost:"); return kc = { socialhost: f, ctx_socialhost: d ? g : f, session_index: a, session_delegate: b, session_prefix: c, im_prefix: e } },
        td = function(a, b) { return sd()[b] || "" },
        ud = function(a) {
            return function(b,
                c) { return a ? sd()[c] || a[c] || "" : sd()[c] || "" }
        };
    var vd = function(a) { var b;
            a.match(/^https?%3A/i) && (b = decodeURIComponent(a)); return Ya(document, b ? b : a) },
        wd = function(a) { a = a || "canonical"; for (var b = document.getElementsByTagName("link"), c = 0, d = b.length; c < d; c++) { var e = b[c],
                    f = e.getAttribute("rel"); if (f && f.toLowerCase() == a && (e = e.getAttribute("href")) && (e = vd(e)) && null != e.match(/^https?:\/\/[\w\-_\.]+/i)) return e } return window.location.href };
    var xd = { se: "0" },
        yd = { post: !0 },
        zd = { style: "position:absolute;top:-10000px;width:450px;margin:0px;border-style:none" },
        Ad = "onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" "),
        Bd = C(L, "WI", D()),
        Cd = function(a, b, c) {
            var d;
            var e = {};
            var f = d = a;
            "plus" == a && b.action && (d = a + "_" + b.action, f = a + "/" + b.action);
            (d = Q("iframes/" + d + "/url")) || (d = ":im_socialhost:/:session_prefix::im_prefix:_/widget/render/" + f + "?usegapi=1");
            for (var g in xd) e[g] = g + "/" + (b[g] || xd[g]) + "/";
            e = Ya(B, d.replace(rd,
                ud(e)));
            g = "iframes/" + a + "/params/";
            f = {};
            G(b, f);
            (d = Q("lang") || Q("gwidget/lang")) && (f.hl = d);
            yd[a] || (f.origin = window.location.origin || window.location.protocol + "//" + window.location.host);
            f.exp = Q(g + "exp");
            if (g = Q(g + "location"))
                for (d = 0; d < g.length; d++) { var k = g[d];
                    f[k] = A.location[k] }
            switch (a) {
                case "plus":
                case "follow":
                    g = f.href;
                    d = b.action ? void 0 : "publisher";
                    g = (g = "string" == typeof g ? g : void 0) ? vd(g) : wd(d);
                    f.url = g;
                    delete f.href;
                    break;
                case "plusone":
                    g = (g = b.href) ? vd(g) : wd();
                    f.url = g;
                    g = b.db;
                    d = Q();
                    null == g && d && (g = d.db,
                        null == g && (g = d.gwidget && d.gwidget.db));
                    f.db = g || void 0;
                    g = b.ecp;
                    d = Q();
                    null == g && d && (g = d.ecp, null == g && (g = d.gwidget && d.gwidget.ecp));
                    f.ecp = g || void 0;
                    delete f.href;
                    break;
                case "signin":
                    f.url = wd()
            }
            L.ILI && (f.iloader = "1");
            delete f["data-onload"];
            delete f.rd;
            for (var h in xd) f[h] && delete f[h];
            f.gsrc = Q("iframes/:source:");
            h = Q("inline/css");
            "undefined" !== typeof h && 0 < c && h >= c && (f.ic = "1");
            h = /^#|^fr-/;
            c = {};
            for (var l in f) E(f, l) && h.test(l) && (c[l.replace(h, "")] = f[l], delete f[l]);
            l = "q" == Q("iframes/" + a + "/params/si") ? f :
                c;
            h = cc();
            for (var n in h) !E(h, n) || E(f, n) || E(c, n) || (l[n] = h[n]);
            n = [].concat(Ad);
            (l = Q("iframes/" + a + "/methods")) && "object" === typeof l && Ca.test(l.push) && (n = n.concat(l));
            for (var p in b) E(b, p) && /^on/.test(p) && ("plus" != a || "onconnect" != p) && (n.push(p), delete f[p]);
            delete f.callback;
            c._methods = n.join(",");
            return Wa(e, f, c)
        },
        Dd = ["style", "data-gapiscan"],
        Fd = function(a) {
            for (var b = D(), c = 0 != a.nodeName.toLowerCase().indexOf("g:"), d = 0, e = a.attributes.length; d < e; d++) {
                var f = a.attributes[d],
                    g = f.name,
                    k = f.value;
                0 <= Da.call(Dd,
                    g) || c && 0 != g.indexOf("data-") || "null" === k || "specified" in f && !f.specified || (c && (g = g.substr(5)), b[g.toLowerCase()] = k)
            }
            a = a.style;
            (c = Ed(a && a.height)) && (b.height = String(c));
            (a = Ed(a && a.width)) && (b.width = String(a));
            return b
        },
        Ed = function(a) { var b = void 0; "number" === typeof a ? b = a : "string" === typeof a && (b = parseInt(a, 10)); return b },
        Hd = function() {
            var a = L.drw;
            ic(function(b) {
                if (a !== b.id && 4 != b.state && "share" != b.type) {
                    var c = b.id,
                        d = b.type,
                        e = b.url;
                    b = b.userParams;
                    var f = B.getElementById(c);
                    if (f) {
                        var g = Cd(d, b, 0);
                        g ? (f = f.parentNode,
                            e.replace(/#.*/, "").replace(/(\?|&)ic=1/, "") !== g.replace(/#.*/, "").replace(/(\?|&)ic=1/, "") && (b.dontclear = !0, b.rd = !0, b.ri = !0, b.type = d, Gd(f, b), (d = R[f.lastChild.id]) && (d.oid = c), jc(c, 4))) : delete R[c]
                    } else delete R[c]
                }
            })
        };
    var Id, Jd, X, Kd, Ld, Md = /(?:^|\s)g-((\S)*)(?:$|\s)/,
        Nd = { plusone: !0, autocomplete: !0, profile: !0, signin: !0, signin2: !0 };
    Id = C(L, "SW", D());
    Jd = C(L, "SA", D());
    X = C(L, "SM", D());
    Kd = C(L, "FW", []);
    Ld = null;
    var Pd = function(a, b) { Od(void 0, !1, a, b) },
        Od = function(a, b, c, d) {
            N("ps0", !0);
            c = ("string" === typeof c ? document.getElementById(c) : c) || B;
            var e = B.documentMode;
            if (c.querySelectorAll && (!e || 8 < e)) { e = d ? [d] : La(Id).concat(La(Jd)).concat(La(X)); for (var f = [], g = 0; g < e.length; g++) { var k = e[g];
                    f.push(".g-" + k, "g\\:" + k) }
                e = c.querySelectorAll(f.join(",")) } else e = c.getElementsByTagName("*");
            c = D();
            for (f = 0; f < e.length; f++) {
                g = e[f];
                var h = g;
                k = d;
                var l = h.nodeName.toLowerCase(),
                    n = void 0;
                if (h.getAttribute("data-gapiscan")) k = null;
                else {
                    var p =
                        l.indexOf("g:");
                    0 == p ? n = l.substr(2) : (p = (p = String(h.className || h.getAttribute("class"))) && Md.exec(p)) && (n = p[1]);
                    k = !n || !(Id[n] || Jd[n] || X[n]) || k && n !== k ? null : n
                }
                k && (Nd[k] || 0 == g.nodeName.toLowerCase().indexOf("g:") || 0 != La(Fd(g)).length) && (g.setAttribute("data-gapiscan", !0), C(c, k, []).push(g))
            }
            if (b)
                for (var r in c)
                    for (b = c[r], d = 0; d < b.length; d++) b[d].setAttribute("data-onload", !0);
            for (var u in c) Kd.push(u);
            N("ps1", !0);
            if ((r = Kd.join(":")) || a) try { I.load(r, a) } catch (F) { fc(F); return }
            if (Qd(Ld || {}))
                for (var y in c) {
                    a =
                        c[y];
                    u = 0;
                    for (b = a.length; u < b; u++) a[u].removeAttribute("data-gapiscan");
                    Rd(y)
                } else { d = []; for (y in c)
                        for (a = c[y], u = 0, b = a.length; u < b; u++) e = a[u], Sd(y, e, Fd(e), d, b);
                    Td(r, d) }
        },
        Ud = function(a) { var b = C(I, a, {});
            b.go || (b.go = function(c) { return Pd(c, a) }, b.render = function(c, d) { d = d || {};
                d.type = a; return Gd(c, d) }) },
        Vd = function(a) { Id[a] = !0 },
        Wd = function(a) { Jd[a] = !0 },
        Xd = function(a) { X[a] = !0 };
    var Rd = function(a, b) { var c = ib(a);
            b && c ? (c(b), (c = b.iframeNode) && c.setAttribute("data-gapiattached", !0)) : I.load(a, function() { var d = ib(a),
                    e = b && b.iframeNode,
                    f = b && b.userParams;
                e && d ? (d(b), e.setAttribute("data-gapiattached", !0)) : (d = I[a].go, "signin2" == a ? d(e, f) : d(e && e.parentNode, f)) }) },
        Qd = function() { return !1 },
        Td = function() {},
        Sd = function(a, b, c, d, e, f, g) {
            switch (Yd(b, a, f)) {
                case 0:
                    a = X[a] ? a + "_annotation" : a;
                    d = {};
                    d.iframeNode = b;
                    d.userParams = c;
                    Rd(a, d);
                    break;
                case 1:
                    if (b.parentNode) {
                        for (var k in c) {
                            if (f = E(c, k)) f = c[k],
                                f = !!f && "object" === typeof f && (!f.toString || f.toString === Object.prototype.toString || f.toString === Array.prototype.toString);
                            if (f) try { c[k] = Qc(c[k]) } catch (y) { delete c[k] }
                        }
                        f = !0;
                        c.dontclear && (f = !1);
                        delete c.dontclear;
                        hc();
                        k = Cd(a, c, e);
                        e = g || {};
                        e.allowPost = 1;
                        e.attributes = zd;
                        e.dontclear = !f;
                        g = {};
                        g.userParams = c;
                        g.url = k;
                        g.type = a;
                        if (c.rd) var h = b;
                        else h = document.createElement("div"), b.setAttribute("data-gapistub", !0), h.style.cssText = "position:absolute;width:450px;left:-10000px;", b.parentNode.insertBefore(h, b);
                        g.siteElement =
                            h;
                        h.id || (b = h, C(Bd, a, 0), f = "___" + a + "_" + Bd[a]++, b.id = f);
                        b = D();
                        b[">type"] = a;
                        G(c, b);
                        f = k;
                        c = h;
                        k = e || {};
                        b = k.attributes || {};
                        H(!(k.allowPost || k.forcePost) || !b.onload, "onload is not supported by post iframe (allowPost or forcePost)");
                        e = b = f;
                        qd.test(b) && (e = Q("iframes/" + e.substring(1) + "/url"), H(!!e, "Unknown iframe url config for - " + b));
                        f = Ya(B, e.replace(rd, td));
                        b = c.ownerDocument || B;
                        h = 0;
                        do e = k.id || ["I", nd++, "_", (new Date).getTime()].join(""); while (b.getElementById(e) && 5 > ++h);
                        H(5 > h, "Error creating iframe id");
                        h = {};
                        var l = {};
                        b.documentMode && 9 > b.documentMode && (h.hostiemode = b.documentMode);
                        G(k.queryParams || {}, h);
                        G(k.fragmentParams || {}, l);
                        var n = k.pfname;
                        var p = D();
                        Q("iframes/dropLegacyIdParam") || (p.id = e);
                        p._gfid = e;
                        p.parent = b.location.protocol + "//" + b.location.host;
                        var r = J(b.location.href, "parent");
                        n = n || "";
                        !n && r && (r = J(b.location.href, "_gfid", "") || J(b.location.href, "id", ""), n = J(b.location.href, "pfname", ""), n = r ? n + "/" + r : "");
                        n || (r = Pc(J(b.location.href, "jcp", ""))) && "object" == typeof r && (n = (n = r.id) ? r.pfname + "/" + n : "");
                        p.pfname =
                            n;
                        k.connectWithJsonParam && (r = {}, r.jcp = Qc(p), p = r);
                        r = J(f, "rpctoken") || h.rpctoken || l.rpctoken;
                        r || (r = k.rpctoken || String(Math.round(1E8 * (Yc ? gd() : fd()))), p.rpctoken = r);
                        k.rpctoken = r;
                        G(p, k.connectWithQueryParams ? h : l);
                        r = b.location.href;
                        p = D();
                        (n = J(r, "_bsh", L.bsh)) && (p._bsh = n);
                        (r = gb(r)) && (p.jsh = r);
                        k.hintInFragment ? G(p, l) : G(p, h);
                        f = Wa(f, h, l, k.paramsSerializer);
                        l = D();
                        G(ld, l);
                        G(k.attributes, l);
                        l.name = l.id = e;
                        l.src = f;
                        k.eurl = f;
                        h = k || {};
                        p = !!h.allowPost;
                        if (h.forcePost || p && 2E3 < f.length) {
                            h = Ta(f);
                            l.src = "";
                            k.dropDataPostorigin ||
                                (l["data-postorigin"] = f);
                            f = pd(b, c, l, e);
                            if (-1 != navigator.userAgent.indexOf("WebKit")) { var u = f.contentWindow.document;
                                u.open();
                                l = u.createElement("div");
                                p = {};
                                r = e + "_inner";
                                p.name = r;
                                p.src = "";
                                p.style = "display:none";
                                pd(b, l, p, r, k) }
                            l = (k = h.query[0]) ? k.split("&") : [];
                            k = [];
                            for (p = 0; p < l.length; p++) r = l[p].split("=", 2), k.push([decodeURIComponent(r[0]), decodeURIComponent(r[1])]);
                            h.query = [];
                            l = Ua(h);
                            H(Za.test(l), "Invalid URL: " + l);
                            h = b.createElement("form");
                            h.action = l;
                            h.method = "POST";
                            h.target = e;
                            h.style.display = "none";
                            for (e = 0; e < k.length; e++) l = b.createElement("input"), l.type = "hidden", l.name = k[e][0], l.value = k[e][1], h.appendChild(l);
                            c.appendChild(h);
                            h.submit();
                            h.parentNode.removeChild(h);
                            u && u.close();
                            u = f
                        } else u = pd(b, c, l, e, k);
                        g.iframeNode = u;
                        g.id = u.getAttribute("id");
                        u = g.id;
                        c = D();
                        c.id = u;
                        c.userParams = g.userParams;
                        c.url = g.url;
                        c.type = g.type;
                        c.state = 1;
                        R[u] = c;
                        u = g
                    } else u = null;
                    u && ((g = u.id) && d.push(g), Rd(a, u))
            }
        },
        Yd = function(a, b, c) {
            if (a && 1 === a.nodeType && b) {
                if (c) return 1;
                if (X[b]) {
                    if (fb[a.nodeName.toLowerCase()]) return (a = a.innerHTML) &&
                        a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") ? 0 : 1
                } else { if (Jd[b]) return 0; if (Id[b]) return 1 }
            }
            return null
        },
        Gd = function(a, b) { var c = b.type;
            delete b.type; var d = ("string" === typeof a ? document.getElementById(a) : a) || void 0; if (d) { a = {}; for (var e in b) E(b, e) && (a[e.toLowerCase()] = b[e]);
                a.rd = 1;
                (b = !!a.ri) && delete a.ri;
                e = [];
                Sd(c, d, a, e, 0, b, void 0);
                Td(c, e) } else fc("string" === "gapi." + c + ".render: missing element " + typeof a ? a : "") };
    C(I, "platform", {}).go = Pd;
    Qd = function(a) { for (var b = ["_c", "jsl", "h"], c = 0; c < b.length && a; c++) a = a[b[c]];
        b = gb(Aa.href); return !a || 0 != a.indexOf("n;") && 0 != b.indexOf("n;") && a !== b };
    Td = function(a, b) { Zd(a, b) };
    var bb = function(a) { Od(a, !0) },
        $d = function(a, b) { b = b || []; for (var c = 0; c < b.length; ++c) a(b[c]); for (a = 0; a < b.length; a++) Ud(b[a]) };
    sb.push(["platform", function(a, b, c) { Ld = c;
        b && Kd.push(b);
        $d(Vd, a);
        $d(Wd, c._c.annotation);
        $d(Xd, c._c.bimodal);
        Zb();
        Xb(); if ("explicit" != Q("parsetags")) { hb(a);
            dc(cc()) && !Q("disableRealtimeCallback") && hc(); if (c && (a = c.callback)) { var d = Ma(a);
                delete c.callback }
            db(function() { bb(d) }) } }]);
    I._pl = !0;
    var ae = function(a) { a = (a = R[a]) ? a.oid : void 0; if (a) { var b = B.getElementById(a);
            b && b.parentNode.removeChild(b);
            delete R[a];
            ae(a) } };
    var be = /^\{h:'/,
        ce = /^!_/,
        de = "",
        Zd = function(a, b) {
            function c() { $a("message", d, "remove", "de") }

            function d(f) { var g = f.data,
                    k = f.origin; if (ee(g, b)) { var h = e;
                    e = !1;
                    h && N("rqe");
                    fe(a, function() { h && N("rqd");
                        c(); for (var l = C(L, "RPMQ", []), n = 0; n < l.length; n++) l[n]({ data: g, origin: k }) }) } } if (0 !== b.length) { de = J(Aa.href, "pfname", ""); var e = !0;
                $a("message", d, "add", "at");
                Rb(a, c) } },
        ee = function(a, b) {
            a = String(a);
            if (be.test(a)) return !0;
            var c = !1;
            ce.test(a) && (c = !0, a = a.substr(2));
            if (!/^\{/.test(a)) return !1;
            var d = Pc(a);
            if (!d) return !1;
            a = d.f;
            if (d.s && a && -1 != Da.call(b, a)) {
                if ("_renderstart" === d.s || d.s === de + "/" + a + "::_renderstart")
                    if (d = d.a && d.a[c ? 0 : 1], b = B.getElementById(a), jc(a, 2), d && b && d.width && d.height) {
                        a: {
                            c = b.parentNode;a = d || {};
                            if (gc()) { var e = b.id; if (e) { d = (d = R[e]) ? d.state : void 0; if (1 === d || 4 === d) break a;
                                    ae(e) } }(d = c.nextSibling) && d.getAttribute && d.getAttribute("data-gapistub") && (c.parentNode.removeChild(d), c.style.cssText = "");d = a.width;
                            var f = a.height,
                                g = c.style;g.textIndent = "0";g.margin = "0";g.padding = "0";g.background = "transparent";g.borderStyle =
                            "none";g.cssFloat = "none";g.styleFloat = "none";g.lineHeight = "normal";g.fontSize = "1px";g.verticalAlign = "baseline";c = c.style;c.display = "inline-block";g = b.style;g.position = "static";g.left = "0";g.top = "0";g.visibility = "visible";d && (c.width = g.width = d + "px");f && (c.height = g.height = f + "px");a.verticalAlign && (c.verticalAlign = a.verticalAlign);e && jc(e, 3)
                        }
                        b["data-csi-wdt"] = (new Date).getTime()
                    }
                return !0
            }
            return !1
        },
        fe = function(a, b) { Rb(a, b) };
    var ge = function(a, b) { this.M = a;
            a = b || {};
            this.ja = Number(a.maxAge) || 0;
            this.X = a.domain;
            this.$ = a.path;
            this.ka = !!a.secure },
        he = /^[-+/_=.:|%&a-zA-Z0-9@]*$/,
        ie = /^[A-Z_][A-Z0-9_]{0,63}$/;
    ge.prototype.read = function() { for (var a = this.M + "=", b = document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) { var d = b[c]; if (0 == d.indexOf(a)) return d.substr(a.length) } };
    ge.prototype.write = function(a, b) { if (!ie.test(this.M)) throw "Invalid cookie name"; if (!he.test(a)) throw "Invalid cookie value";
        a = this.M + "=" + a;
        this.X && (a += ";domain=" + this.X);
        this.$ && (a += ";path=" + this.$);
        b = "number" === typeof b ? b : this.ja; if (0 <= b) { var c = new Date;
            c.setSeconds(c.getSeconds() + b);
            a += ";expires=" + c.toUTCString() }
        this.ka && (a += ";secure");
        document.cookie = a; return !0 };
    ge.prototype.clear = function() { this.write("", 0) };
    ge.iterate = function(a) { for (var b = document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) { var d = b[c].split("="),
                e = d.shift();
            a(e, d.join("=")) } };
    var je = function(a) { this.D = a },
        Y = {};
    je.prototype.read = function() { if (Y.hasOwnProperty(this.D)) return Y[this.D] };
    je.prototype.write = function(a) { Y[this.D] = a; return !0 };
    je.prototype.clear = function() { delete Y[this.D] };
    je.iterate = function(a) { for (var b in Y) Y.hasOwnProperty(b) && a(b, Y[b]) };
    var ke = "https:" === window.location.protocol,
        le = ke || "http:" === window.location.protocol ? ge : je,
        me = function(a) { var b = a.substr(1),
                c = "",
                d = window.location.hostname; if ("" !== b) { c = parseInt(b, 10); if (isNaN(c)) return null;
                b = d.split("."); if (b.length < c - 1) return null;
                b.length == c - 1 && (d = "." + d) } else d = ""; return { j: "S" == a.charAt(0), domain: d, o: c } },
        ne = function() { var a, b = null;
            le.iterate(function(c, d) { 0 === c.indexOf("G_AUTHUSER_") && (c = me(c.substring(11)), !a || c.j && !a.j || c.j == a.j && c.o > a.o) && (a = c, b = d) }); return { ia: a, J: b } };
    var oe = function(a) { if (0 !== a.indexOf("GCSC")) return null; var b = { Z: !1 };
            a = a.substr(4); if (!a) return b; var c = a.charAt(0);
            a = a.substr(1); var d = a.lastIndexOf("_"); if (-1 == d) return b; var e = me(a.substr(d + 1)); if (null == e) return b;
            a = a.substring(0, d); if ("_" !== a.charAt(0)) return b;
            d = "E" === c && e.j; return !d && ("U" !== c || e.j) || d && !ke ? b : { Z: !0, j: d, na: a.substr(1), domain: e.domain, o: e.o } },
        pe = function(a) { if (!a) return [];
            a = a.split("="); return a[1] ? a[1].split("|") : [] },
        qe = function(a) {
            a = a.split(":");
            return {
                clientId: a[0].split("=")[1],
                ma: pe(a[1]),
                qa: pe(a[2]),
                pa: pe(a[3])
            }
        },
        re = function() { var a = ne(),
                b = a.ia;
            a = a.J; if (null !== a) { var c;
                le.iterate(function(f, g) {
                    (f = oe(f)) && f.Z && f.j == b.j && f.o == b.o && (c = g) }); if (c) { var d = qe(c),
                        e = d && d.ma[Number(a)];
                    d = d && d.clientId; if (e) return { J: a, la: e, clientId: d } } } return null };
    var Z = function() { this.W = se };
    Z.prototype.B = 0;
    Z.prototype.U = 2;
    Z.prototype.W = null;
    Z.prototype.L = !1;
    Z.prototype.ca = function() { this.L || (this.B = 0, this.L = !0, this.aa()) };
    Z.prototype.aa = function() { this.L && (this.W() ? this.B = this.U : this.B = Math.min(2 * (this.B || this.U), 120), window.setTimeout(da(this.aa, this), 1E3 * this.B)) };
    for (var te = 0; 64 > te; ++te);
    var ue = null;
    gc = function() { return L.oa = !0 };
    hc = function() { L.oa = !0; var a = re();
        (a = a && a.J) && Yb("googleapis.config/sessionIndex", a);
        ue || (ue = C(L, "ss", new Z));
        a = ue;
        a.ca && a.ca() };
    var se = function() {
        var a = re(),
            b = a && a.la || null,
            c = a && a.clientId;
        Rb("auth", {
            callback: function() {
                var d = A.gapi.auth,
                    e = { client_id: c, session_state: b };
                d.checkSessionState(e, function(f) {
                    var g = e.session_state,
                        k = Q("isLoggedIn");
                    f = Q("debug/forceIm") ? !1 : g && f || !g && !f;
                    if (k = k != f) Yb("isLoggedIn", f), hc(), Hd(), f || ((f = d.signOut) ? f() : (f = d.setToken) && f(null));
                    f = cc();
                    var h = Q("savedUserState");
                    g = d._guss(f.cookiepolicy);
                    h = h != g && "undefined" != typeof h;
                    Yb("savedUserState", g);
                    (k || h) && dc(f) && !Q("disableRealtimeCallback") && d._pimf(f, !0)
                })
            }
        });
        return !0
    };
    N("bs0", !0, window.gapi._bs);
    N("bs1", !0);
    delete window.gapi._bs;
}).call(this);
gapi.load("", { callback: window["gapi_onload"], _c: { "jsl": { "ci": { "deviceType": "desktop", "oauth-flow": { "authUrl": "https://accounts.google.com/o/oauth2/auth", "proxyUrl": "https://accounts.google.com/o/oauth2/postmessageRelay", "disableOpt": true, "idpIframeUrl": "https://accounts.google.com/o/oauth2/iframe", "usegapi": false }, "debug": { "reportExceptionRate": 0.05, "forceIm": false, "rethrowException": false, "host": "https://apis.google.com" }, "enableMultilogin": true, "googleapis.config": { "auth": { "useFirstPartyAuthV2": true } }, "isPlusUser": false, "inline": { "css": 1 }, "disableRealtimeCallback": false, "drive_share": { "skipInitCommand": true }, "csi": { "rate": 0.01 }, "client": { "cors": false }, "isLoggedIn": true, "signInDeprecation": { "rate": 0.0 }, "include_granted_scopes": true, "llang": "es", "iframes": { "youtube": { "params": { "location": ["search", "hash"] }, "url": ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi\u003d1", "methods": ["scroll", "openwindow"] }, "ytsubscribe": { "url": "https://www.youtube.com/subscribe_embed?usegapi\u003d1" }, "plus_circle": { "params": { "url": "" }, "url": ":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi\u003d1" }, "plus_share": { "params": { "url": "" }, "url": ":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare\u003dtrue\u0026usegapi\u003d1" }, "rbr_s": { "params": { "url": "" }, "url": ":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller" }, ":source:": "3p", "playemm": { "url": "https://play.google.com/work/embedded/search?usegapi\u003d1\u0026usegapi\u003d1" }, "savetoandroidpay": { "url": "https://pay.google.com/gp/v/widget/save" }, "blogger": { "params": { "location": ["search", "hash"] }, "url": ":socialhost:/:session_prefix:_/widget/render/blogger?usegapi\u003d1", "methods": ["scroll", "openwindow"] }, "evwidget": { "params": { "url": "" }, "url": ":socialhost:/:session_prefix:_/events/widget?usegapi\u003d1" }, "partnersbadge": { "url": "https://www.gstatic.com/partners/badge/templates/badge.html?usegapi\u003d1" }, "dataconnector": { "url": "https://dataconnector.corp.google.com/:session_prefix:ui/widgetview?usegapi\u003d1" }, "surveyoptin": { "url": "https://www.google.com/shopping/customerreviews/optin?usegapi\u003d1" }, ":socialhost:": "https://apis.google.com", "shortlists": { "url": "" }, "hangout": { "url": "https://talkgadget.google.com/:session_prefix:talkgadget/_/widget" }, "plus_followers": { "params": { "url": "" }, "url": ":socialhost:/_/im/_/widget/render/plus/followers?usegapi\u003d1" }, "post": { "params": { "url": "" }, "url": ":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi\u003d1" }, ":gplus_url:": "https://plus.google.com", "signin": { "params": { "url": "" }, "url": ":socialhost:/:session_prefix:_/widget/render/signin?usegapi\u003d1", "methods": ["onauth"] }, "rbr_i": { "params": { "url": "" }, "url": ":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation" }, "donation": { "url": "https://onetoday.google.com/home/donationWidget?usegapi\u003d1" }, "share": { "url": ":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi\u003d1" }, "plusone": { "params": { "count": "", "size": "", "url": "" }, "url": ":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi\u003d1" }, "comments": { "params": { "location": ["search", "hash"] }, "url": ":socialhost:/:session_prefix:_/widget/render/comments?usegapi\u003d1", "methods": ["scroll", "openwindow"] }, ":im_socialhost:": "https://plus.googleapis.com", "backdrop": { "url": "https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi\u003d1" }, "visibility": { "params": { "url": "" }, "url": ":socialhost:/:session_prefix:_/widget/render/visibility?usegapi\u003d1" }, "autocomplete": { "params": { "url": "" }, "url": ":socialhost:/:session_prefix:_/widget/render/autocomplete" }, "additnow": { "url": "https://apis.google.com/marketplace/button?usegapi\u003d1", "methods": ["launchurl"] }, ":signuphost:": "https://plus.google.com", "ratingbadge": { "url": "https://www.google.com/shopping/customerreviews/badge?usegapi\u003d1" }, "appcirclepicker": { "url": ":socialhost:/:session_prefix:_/widget/render/appcirclepicker" }, "follow": { "url": ":socialhost:/:session_prefix:_/widget/render/follow?usegapi\u003d1" }, "community": { "url": ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi\u003d1" }, "sharetoclassroom": { "url": "https://www.gstatic.com/classroom/sharewidget/widget_stable.html?usegapi\u003d1" }, "ytshare": { "params": { "url": "" }, "url": ":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi\u003d1" }, "plus": { "url": ":socialhost:/:session_prefix:_/widget/render/badge?usegapi\u003d1" }, "family_creation": { "params": { "url": "" }, "url": "https://families.google.com/webcreation?usegapi\u003d1\u0026usegapi\u003d1" }, "commentcount": { "url": ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi\u003d1" }, "configurator": { "url": ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi\u003d1" }, "zoomableimage": { "url": "https://ssl.gstatic.com/microscope/embed/" }, "appfinder": { "url": "https://gsuite.google.com/:session_prefix:marketplace/appfinder?usegapi\u003d1" }, "savetowallet": { "url": "https://pay.google.com/gp/v/widget/save" }, "person": { "url": ":socialhost:/:session_prefix:_/widget/render/person?usegapi\u003d1" }, "savetodrive": { "url": "https://drive.google.com/savetodrivebutton?usegapi\u003d1", "methods": ["save"] }, "page": { "url": ":socialhost:/:session_prefix:_/widget/render/page?usegapi\u003d1" }, "card": { "url": ":socialhost:/:session_prefix:_/hovercard/card" } } }, "h": "m;/_/scs/apps-static/_/js/k\u003doz.gapi.es.xhypXBFw-YI.O/am\u003dwQE/d\u003d1/ct\u003dzgms/rs\u003dAGLTcCNIYS8P8MA2BPqaol3qYCZ18OvnqA/m\u003d__features__", "u": "https://apis.google.com/js/platform.js", "hee": true, "fp": "099e179eeab1be8c339ac2c410efb4ef6f9b33b7", "dpo": false }, "platform": ["additnow", "backdrop", "blogger", "comments", "commentcount", "community", "donation", "family_creation", "follow", "hangout", "health", "page", "partnersbadge", "person", "playemm", "playreview", "plus", "plusone", "post", "ratingbadge", "savetoandroidpay", "savetodrive", "savetowallet", "sharetoclassroom", "shortlists", "signin2", "surveyoptin", "visibility", "youtube", "ytsubscribe", "zoomableimage"], "fp": "099e179eeab1be8c339ac2c410efb4ef6f9b33b7", "annotation": ["interactivepost", "recobar", "signin2", "autocomplete", "profile"], "bimodal": ["signin", "share"] } });